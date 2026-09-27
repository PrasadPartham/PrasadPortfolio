"use client";

import { useRef, useState } from "react";

const email = "parthamprasad206@gmail.com";
export default function Contact() {
  const [status, setStatus] = useState("");
  const [fallback, setFallback] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      setFallback(false);
      setStatus("Email copied to clipboard.");
    } catch {
      setFallback(true);
      setStatus("Select and copy the email below, or use the email link to connect.");
      window.setTimeout(() => { emailRef.current?.focus(); emailRef.current?.select(); }, 0);
    }
  }

  return <div className="shell contact-page"><section className="page-intro"><p className="eyebrow">CONTACT / START A CONVERSATION</p><h1>Let’s build<br/>something <span className="orange">useful.</span></h1><p className="page-lede">Have a software role, a product idea, or a project to discuss?<br/>I’d be glad to connect.</p></section><section className="contact-grid" aria-label="Ways to connect"><div className="primary-contact"><div className="contact-icon" aria-hidden="true">↗</div><p className="eyebrow">THE BEST WAY TO REACH ME</p><a href={`mailto:${email}`} className="email-display">{email}</a><div className="contact-actions"><a href={`mailto:${email}`} className="button button-primary">Say Hello <span aria-hidden="true">↗</span></a><button type="button" onClick={copyEmail} className="button button-secondary">{status.startsWith("Email copied") ? "Copied ✓" : "Copy Email"}<span aria-hidden="true">⧉</span></button></div><p className="copy-status" role="status" aria-live="polite">{status}</p>{fallback && <div className="copy-fallback"><label htmlFor="email-copy">Email address — select and copy</label><input ref={emailRef} id="email-copy" value={email} readOnly onFocus={event=>event.currentTarget.select()}/></div>}<p className="contact-note">A quick introduction and a little context are a great place to start.</p></div><div className="contact-socials"><a href="https://www.linkedin.com/in/parthamdurgaprasad/" target="_blank" rel="noopener noreferrer"><span className="social-symbol" aria-hidden="true">in</span><div><h2>LinkedIn</h2><p>Let’s connect professionally.</p></div><span className="social-arrow" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a><a href="https://github.com/PrasadPartham" target="_blank" rel="noopener noreferrer"><span className="social-symbol code-symbol" aria-hidden="true">&lt;/&gt;</span><div><h2>GitHub</h2><p>A closer look at the code.</p></div><span className="social-arrow" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a><div className="contact-location"><span aria-hidden="true">⌖</span><div><p>Based in Hyderabad, India</p><span className="mono">INDIA STANDARD TIME · UTC +05:30</span></div></div></div></section><div className="contact-signoff"><span className="mono">THOUGHTFUL SOFTWARE STARTS WITH PEOPLE.</span><span className="signature">Talk soon, DP<span className="orange">.</span></span></div></div>;
}
