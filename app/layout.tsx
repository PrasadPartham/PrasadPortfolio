import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/ibm-plex-mono/400.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DP. — Partham Durga Prasad | Python Full-Stack Developer", template: "%s | DP. — Partham Durga Prasad" },
  description: "Partham Durga Prasad is a Python Full-Stack Developer in Hyderabad, building thoughtful web interfaces, reliable backend systems, and practical AI workflows.",
  applicationName: "DP. Portfolio",
  keywords: ["Partham Durga Prasad", "Python", "FastAPI", "Next.js", "Full-Stack Developer", "Hyderabad"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></body></html>;
}
