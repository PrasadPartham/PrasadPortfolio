import Link from "next/link";

export default function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-top"><div className="footer-identity"><Link href="/" className="brand" aria-label="DP. home">DP<span>.</span></Link><div><p>Partham Durga Prasad</p><p className="muted text-sm">Python Full-Stack Developer</p></div></div><div className="footer-links"><a href="mailto:parthamprasad206@gmail.com">Email ↗</a><a href="https://github.com/PrasadPartham" target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/parthamdurgaprasad/" target="_blank" rel="noopener noreferrer">LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span></a></div></div>
    <div className="footer-bottom mono"><p>© {new Date().getFullYear()} Partham Durga Prasad</p><p>Engineered with care. Built with curiosity.</p><a href="#main-content">BACK TO TOP ↑</a></div>
  </div></footer>;
}
