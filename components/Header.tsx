"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [["Home", "/"], ["About", "/about"], ["Experience", "/experience"], ["Projects", "/projects"], ["Contact", "/contact"]];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    const focusTimer = window.setTimeout(() => first?.focus(), 250);
    const close = () => { setOpen(false); toggleRef.current?.focus(); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const items = [toggleRef.current, ...Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])].filter(Boolean) as HTMLElement[];
        const index = items.indexOf(document.activeElement as HTMLElement);
        if (event.shiftKey && index <= 0) { event.preventDefault(); items.at(-1)?.focus(); }
        else if (!event.shiftKey && index === items.length - 1) { event.preventDefault(); items[0]?.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth >= 768) close(); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  function navigate() {
    setOpen(false);
    window.setTimeout(() => document.querySelector<HTMLElement>("#main-content")?.focus(), 100);
  }

  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="DP. home" onClick={() => setOpen(false)}>DP<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
      </nav>
      <a href="mailto:parthamprasad206@gmail.com" className="header-contact">Let’s talk <span aria-hidden="true">↗</span></a>
      <button ref={toggleRef} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><span aria-hidden="true">{open ? "×" : "☰"}</span></button>
    </div>
    <nav ref={panelRef} id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" inert={!open}>
      {links.map(([label, href], i) => <Link key={href} href={href} onClick={navigate} aria-current={pathname === href ? "page" : undefined}><span className="mono">0{i + 1}</span>{label}<span aria-hidden="true">↗</span></Link>)}
      <p className="mono">HYDERABAD, INDIA · BUILDING WITH INTENT</p>
    </nav>
  </header>;
}
