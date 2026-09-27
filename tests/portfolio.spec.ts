import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/about", "/experience", "/projects", "/contact"];

test("all routes render, expose metadata, fit the viewport, and pass accessibility checks", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  for (const width of [360, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page).toHaveTitle(/DP/);
      expect(await page.locator('meta[name="description"]').getAttribute("content")).toBeTruthy();
      await page.evaluate(() => document.fonts.ready);
      for (const image of await page.locator("main img").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect(image).toBeVisible();
        await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
      }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      expect(overflow, `${route} overflows at ${width}px`).toBe(false);
      if (width === 360 || width === 1440) {
        await page.emulateMedia({ reducedMotion: "reduce" });
        const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
        expect.soft(results.violations.map(violation => ({ id: violation.id, nodes: violation.nodes.map(node => ({ target: node.target, failure: node.failureSummary })) })), `${route} accessibility at ${width}px`).toEqual([]);
      }
    }
  }
  expect(errors).toEqual([]);
});

test("the hero names DP and the portrait retains its proportions", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Partham\s*Durga Prasad/);
  await expect(page.locator(".hero-headline")).toHaveText("From engineering systems to building intelligent software.");
  // The supplied asset set has no PDF: no download should lead to a missing file.
  for (const route of ["/", "/contact"]) {
    await page.goto(route);
    await expect(page.locator('a[download]')).toHaveCount(0);
  }
  expect((await request.get("/images/dp-portrait.png")).status()).toBe(200);
  for (const width of [360, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    await page.goto("/about");
    const portrait = page.getByRole("img", { name: "Monochrome illustrated portrait of Partham Durga Prasad.", exact: true });
    await portrait.scrollIntoViewIfNeeded();
    await expect.poll(() => portrait.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
    expect(await portrait.evaluate(image => getComputedStyle(image).objectFit)).toBe("contain");
    expect(await portrait.getAttribute("width")).toBe("1024");
    expect(await portrait.getAttribute("height")).toBe("1536");
    const imageBox = await portrait.boundingBox();
    if (width === 360) {
      const storyBox = await page.locator(".story-copy").boundingBox();
      expect(imageBox!.y + imageBox!.height).toBeLessThan(storyBox!.y);
    }
  }
});

test("navigation and every local link point to real routes and anchors", async ({ page, request }) => {
  for (const route of routes) {
    await page.goto(route);
    const links = await page.locator("a[href]").evaluateAll(elements => elements.map(element => element.getAttribute("href")!));
    for (const href of new Set(links.filter(href => href.startsWith("/") || href.startsWith("#")))) {
      const [path, hash] = href.split("#");
      if (path) expect((await request.get(path)).status()).toBe(200);
      if (hash) {
        if (path && path !== route) {
          const html = await (await request.get(path)).text();
          expect(html).toContain(`id="${hash}"`);
        } else expect(await page.locator(`[id="${hash}"]`).count()).toBe(1);
      }
    }
    await expect(page.locator(".desktop-nav [aria-current=page]")).toHaveAttribute("href", route);
  }
  await page.goto("/");
  await page.getByRole("link", { name: "Explore My Work", exact: false }).click();
  await expect(page).toHaveURL(/\/projects$/);
});

test("mobile menu handles keyboard focus, Escape, and route selection", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
  const nav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(nav.getByRole("link").first()).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.getByRole("button", { name: "Close navigation" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(nav.getByRole("link").last()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await nav.getByRole("link", { name: /Projects/ }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("email copy works and the denied-clipboard fallback is usable", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/contact");
  await expect(page.getByRole("link", { name: "Say Hello", exact: false })).toHaveAttribute("href", "mailto:parthamprasad206@gmail.com");
  await page.getByRole("button", { name: "Copy Email", exact: false }).click();
  await expect(page.getByRole("status")).toHaveText("Email copied to clipboard.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("parthamprasad206@gmail.com");
  await page.reload();
  await page.evaluate(() => { Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: () => Promise.reject(new Error("Denied")) } }); });
  await page.getByRole("button", { name: "Copy Email", exact: false }).click();
  await expect(page.getByRole("status")).toContainText("Select and copy");
  const fallback = page.getByLabel("Email address — select and copy");
  await expect(fallback).toBeFocused();
  await expect(fallback).toHaveValue("parthamprasad206@gmail.com");
  expect(await fallback.evaluate((element: HTMLInputElement) => element.selectionEnd! - element.selectionStart!)).toBe(26);
});

test("motion pauses offscreen and reduced-motion disables animation", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".systems-visual")).toHaveAttribute("data-paused", "false");
  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect(page.locator(".systems-visual")).toHaveAttribute("data-paused", "true");
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(await page.locator(".layer-top").evaluate(element => getComputedStyle(element).animationName)).toBe("none");
  await page.goto("/about");
  expect(await page.locator(".about-portrait").evaluate(element => getComputedStyle(element).animationName)).toBe("none");
  expect(await page.locator(".timeline").evaluate(element => getComputedStyle(element, "::before").animationName)).toBe("none");
});

test("essential content is server rendered and links work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const route of routes) {
    await page.goto("http://127.0.0.1:3001" + route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("main")).not.toBeEmpty();
  }
  await context.close();
});

test("capture desktop and mobile layouts", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 360]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: `test-results/${route === "/" ? "home" : route.slice(1)}-${width}.png`, fullPage: true });
    }
  }
});
