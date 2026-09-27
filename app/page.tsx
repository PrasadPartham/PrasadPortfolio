"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const projects = [
  { number: "01", name: "VcruitAI", category: "AI RECRUITMENT PLATFORM", description: "Resume parsing, candidate matching, and pipeline tracking in an AI-assisted recruitment platform.", stack: ["Next.js", "FastAPI", "PostgreSQL", "GenAI"], slug: "vcruitai", kind: "recruit" },
  { number: "02", name: "RDVP", category: "DIGITAL VEHICLE PASSPORT", description: "Digital vehicle identities and service workflows, with masked contact between stakeholders.", stack: ["Next.js", "FastAPI", "MongoDB"], slug: "rdvp", kind: "vehicle" },
  { number: "03", name: "Teeth & Eye", category: "AI-ASSISTED MEDICAL SCREENING", description: "AI-assisted image screening and appointments, with interfaces for patients, doctors, and administrators.", stack: ["React", "Node.js", "PostgreSQL"], slug: "teeth-eye", kind: "medical" },
];

function SystemsVisual() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let visible = true;
    const update = () => { element.dataset.paused = String(!visible || document.hidden); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    update();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  return <div className="systems-visual" ref={ref} aria-hidden="true">
    <div className="visual-corner top-left"/><div className="visual-corner bottom-right"/>
    <div className="visual-note mono"><span className="tiny-cross">+</span> SYSTEMS THINKING, REIMAGINED</div>
    <svg viewBox="0 0 540 510" fill="none" className="systems-svg">
      <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" stroke="#34363a" strokeWidth=".5"/></pattern><linearGradient id="plate" x1="130" y1="0" x2="420" y2="260" gradientUnits="userSpaceOnUse"><stop stopColor="#25282b"/><stop offset="1" stopColor="#16181b"/></linearGradient></defs>
      <path fill="url(#grid)" opacity=".4" d="M15 20h510v450H15z"/>
      <path stroke="#424448" strokeDasharray="3 7" d="M270 40v425M35 275h470"/>
      <g className="mechanical-ring" stroke="#68645e" strokeWidth="1">
        <ellipse cx="270" cy="380" rx="158" ry="76"/><ellipse cx="270" cy="380" rx="132" ry="62"/><ellipse cx="270" cy="380" rx="77" ry="36"/>
        <path d="M112 380v18c0 43 71 77 158 77s158-34 158-77v-18M138 380v16M402 380v16M270 304v15M270 441v16M160 327l18 11M362 422l18 11M160 433l18-11M362 338l18-11"/>
        <path d="m222 369 48-24 48 24v23l-48 25-48-25zm0 0 48 24 48-24m-48 24v24" stroke="#ff8a45"/>
        <path d="M88 400v70m0-18h90M84 406l8-8m-8 59 8-8M452 316v129m-4-119 8-8m-8 119 8-8" stroke="#55575a"/>
      </g>
      <g stroke="#ff8a45" strokeDasharray="4 7" opacity=".65"><path d="M152 192v142M388 192v142M270 253v99"/></g>
      <g className="software-layer layer-bottom">
        <path d="m110 266 160-78 160 78v14l-160 80-160-80z" fill="url(#plate)" stroke="#626365"/>
        <path d="m110 266 160 80 160-80M270 346v14" stroke="#626365"/>
        <path d="m191 269 79-38 79 38-79 39z" stroke="#ff8a45" opacity=".7"/>
        <path d="m246 269 24-12 24 12-24 12z" fill="#ff8a45" fillOpacity=".2" stroke="#ff8a45"/>
      </g>
      <g className="software-layer layer-middle">
        <path d="m110 199 160-78 160 78v14l-160 80-160-80z" fill="url(#plate)" stroke="#9b755a"/>
        <path d="m110 199 160 80 160-80M270 279v14" stroke="#9b755a"/>
        <path d="m162 196 44-22 43 22-43 22zm77-38 32-16 32 16-32 16zm28 63 62-31 49 24-62 31z" stroke="#ff8a45"/>
        <path d="m224 205 42 20m-4-55 43 21" stroke="#ff8a45" strokeDasharray="4 4"/>
        <circle cx="207" cy="196" r="3" fill="#ff8a45"/><circle cx="327" cy="216" r="3" fill="#ff8a45"/>
      </g>
      <g className="software-layer layer-top">
        <path d="m110 131 160-79 160 79v14l-160 79-160-79z" fill="url(#plate)" stroke="#ff8a45"/>
        <path d="m110 131 160 79 160-79M270 210v14" stroke="#ff8a45"/>
        <path d="m152 129 116-57 115 57-116 57z" stroke="#ff8a45" strokeOpacity=".35"/>
        <path d="m218 130 24-12m-24 12 24 12m80-12-24-12m24 12-24 12m-15-34-25 45" stroke="#ffad79" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="270" cy="52" r="4" fill="#ff8a45"/>
      </g>
      <g stroke="#73716d" strokeWidth=".75"><path d="M405 140h55v-25M409 208h51M409 278h51M365 431h95"/></g>
      <g fill="#b4afa7" fontSize="9" fontFamily="monospace"><text x="420" y="104">INTERFACE</text><text x="434" y="201">API</text><text x="430" y="272">DATA</text><text x="407" y="445">FOUNDATION</text></g>
    </svg>
    <div className="visual-bottom mono"><span>MECHANICAL → DIGITAL</span><span className="orange">FIG. 01 ↗</span></div>
  </div>;
}

function ProjectPreview({ kind }: { kind: string }) {
  return <div className={`project-preview ${kind}`} aria-hidden="true">
    <div className="preview-topline"><span className="mini-logo">{kind === "recruit" ? "vcruit" : kind === "vehicle" ? "ridex" : "teeth & eye"}<i>●</i></span><span className="preview-dots">•••</span></div>
    {kind === "recruit" ? <div className="recruit-interface"><div className="interface-sidebar"><span/><span/><span/><span/></div><div className="interface-main"><div className="interface-title">Candidate pipeline <span>＋</span></div><div className="pipeline-labels"><span>APPLIED</span><span>SHORTLISTED</span><span>INTERVIEW</span></div><div className="pipeline-columns">{[0,1,2].map(n=><div key={n}>{[0,1].map(j=><div className="candidate-mini" key={j}><i/><div><b/><span/></div><em>↗</em></div>)}</div>)}</div></div></div>
    : kind === "vehicle" ? <div className="vehicle-interface"><div className="vehicle-title">Your vehicle. Connected.<span>DIGITAL VEHICLE PASSPORT</span></div><svg viewBox="0 0 300 110"><path d="m38 71 13-29 52-9 32-25h73l33 31 29 9 13 29-4 10h-33m-169 0H47l-9-16m60 16h105M119 34l23-18h61l23 20z" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="78" cy="82" r="19" fill="#192328" stroke="currentColor"/><circle cx="78" cy="82" r="8" fill="none" stroke="currentColor"/><circle cx="225" cy="82" r="19" fill="#192328" stroke="currentColor"/><circle cx="225" cy="82" r="8" fill="none" stroke="currentColor"/><path d="M154 44v29m-58-8h110" stroke="currentColor" opacity=".4"/></svg><div className="vehicle-tags"><span>IDENTITY</span><span>SERVICE HISTORY</span><span>SECURE CONTACT</span></div></div>
    : <div className="medical-interface"><div className="scan-box"><svg viewBox="0 0 110 120"><path d="M55 22C20 0 13 33 25 62c9 22 7 50 17 41 6-6 4-30 13-30s7 24 13 30c10 9 8-19 17-41C97 33 90 0 55 22Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M35 34q20-9 40 0M31 45q24-9 48 0M34 56q21-9 42 0" stroke="currentColor" opacity=".25"/></svg><span className="scan-line"/></div><div className="screening-copy"><span className="mono">CONNECTED CARE</span><b>A clearer view.<br/>A considered workflow.</b><span className="screening-pill">Screening → Review</span></div></div>}
    <span className="illustrative mono">ILLUSTRATIVE INTERFACE</span>
  </div>;
}

export default function Home() {
  const reduce = useReducedMotion();
  const entrance = (delay: number) => ({ initial: { y: 0, opacity: 1 }, animate: reduce ? { y: 0, opacity: 1 } : { y: [14, 0], opacity: 1 }, transition: { duration: 0.65, delay } });
  return <>
    <section className="shell hero">
      <div className="hero-copy">
        <motion.p {...entrance(0)} className="eyebrow"><span className="status-dot"/> PYTHON FULL-STACK DEVELOPER</motion.p>
        <motion.h1 {...entrance(.08)}>Partham<br/><span>Durga Prasad</span></motion.h1>
        <motion.p {...entrance(.12)} className="hero-headline">From engineering systems to building intelligent software.</motion.p>
        <motion.p {...entrance(.16)} className="hero-description">Call me <strong>DP.</strong> I build web applications with Python, FastAPI, React, and Next.js — from interfaces and APIs to practical AI workflows.</motion.p>
        <motion.div {...entrance(.24)} className="hero-actions"><Link href="/projects" className="button button-primary">Explore My Work <span aria-hidden="true">↗</span></Link><Link href="/contact" className="button button-secondary">Get in Touch <span aria-hidden="true">↗</span></Link></motion.div>
        <motion.div {...entrance(.32)} className="hero-meta"><span className="location"><span aria-hidden="true">⌖</span> Hyderabad, India</span><span className="meta-divider"/><a href="https://github.com/PrasadPartham" target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/parthamdurgaprasad/" target="_blank" rel="noopener noreferrer">LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span></a></motion.div>
      </div>
      <SystemsVisual />
      <div className="hero-foot mono"><span>AN ENGINEERING MINDSET. A SOFTWARE CRAFT.</span><a href="#selected-work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>
    <div className="expertise-strip"><div className="shell expertise-inner"><span className="mono">MY CORE TOOLKIT</span><div>{["Python", "FastAPI", "React", "Next.js", "PostgreSQL"].map((skill,i)=><span key={skill}><i aria-hidden="true">{["⌘","ϟ","✳","N","▱"][i]}</i>{skill}</span>)}</div></div></div>
    <section className="shell section reveal" id="selected-work">
      <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Ideas into working software<span className="orange">.</span></h2></div><Link href="/projects" className="text-link">All projects <span aria-hidden="true">↗</span></Link></div>
      <div className="project-grid">{projects.map(project=><Link href={`/projects#${project.slug}`} className="project-card" key={project.name} aria-label={`Explore ${project.name} case study`}><ProjectPreview kind={project.kind}/><div className="project-card-body"><div className="project-category mono"><span>{project.category}</span><span>{project.number}</span></div><h3>{project.name}<span aria-hidden="true">↗</span></h3><p>{project.description}</p><div className="tags">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div></div></Link>)}</div>
    </section>
    <section className="experience-preview section shell reveal"><div className="section-heading"><div><p className="eyebrow">02 / EXPERIENCE</p><h2>Built in the real world.</h2></div><Link href="/experience" className="text-link">My experience <span aria-hidden="true">↗</span></Link></div><div className="experience-row"><p className="mono">APR 2025 — MAY 2026</p><div><h3>Visys Cloud Technologies</h3><p>Software Associate · Full-Stack & AI Product Developer</p></div><span className="experience-signal">Led a 3-person development team <span aria-hidden="true">↗</span></span></div><div className="experience-row"><p className="mono">NOV 2023 — OCT 2024</p><div><h3>Intech Additive Solutions</h3><p>Software Engineer · Embedded Systems</p></div><span className="experience-signal">Software that connects to the physical world <span aria-hidden="true">↗</span></span></div></section>
    <section className="journey-preview section shell reveal"><div><p className="eyebrow">03 / THE THREAD THAT CONNECTS IT ALL</p><h2>An engineering mindset.<br/><span className="muted">A software career.</span></h2></div><div><p>From mechanical engineering at RGUKT Basar to embedded systems and AI-powered web applications, the question has stayed the same: how can this work better?</p><p>I bring that systems thinking to every interface, API, and team I work with.</p><Link href="/about" className="text-link">Get to know me <span aria-hidden="true">↗</span></Link></div></section>
    <section className="shell contact-invitation reveal"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s build something<br/><span className="orange">useful.</span></h2></div><Link href="/contact" className="circle-link" aria-label="Get in touch"><span aria-hidden="true">↗</span></Link><div className="invitation-bottom"><p>Good software starts with a conversation.</p><a href="mailto:parthamprasad206@gmail.com">parthamprasad206@gmail.com ↗</a></div></section>
  </>;
}
