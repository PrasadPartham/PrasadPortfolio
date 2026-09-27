import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";

export const metadata: Metadata = { title: "About & Journey", description: "From mechanical engineering at RGUKT Basar to embedded systems, Python full-stack development, and practical AI integration. Get to know DP." };

const journey = [
  { date: "2019 — 2023", title: "Understanding the physical world.", label: "B.TECH · MECHANICAL ENGINEERING", text: "Studied Mechanical Engineering at RGUKT Basar (IIIT Basar), as part of its integrated education pathway. Graduated in 2023 with a foundation in understanding systems and solving engineering problems." },
  { date: "2023 — 2024", title: "Where hardware meets code.", label: "INTECH ADDITIVE SOLUTIONS", text: "Developed C++ backend modules for metal 3D printing systems. Worked on laser control, power delivery, and path planning, alongside mechanical and hardware teams." },
  { date: "2025 — 2026", title: "From components to complete products.", label: "VISYS CLOUD TECHNOLOGIES", text: "Moved into full-stack and AI product development: building interfaces, backend APIs, and recruitment automation. Led a three-person development team and connected client requirements with implementation." },
  { date: "CURRENT FOCUS", title: "Building useful, connected software.", label: "PYTHON FULL-STACK DEVELOPMENT", text: "Bringing responsive interfaces, clear API design, databases, and practical AI integrations together. Continuing to deepen the connection between systems thinking and software craft." },
];
const skills = [
  ["Languages", ["Python", "JavaScript", "TypeScript", "C++", "C#", "SQL"]],
  ["Frontend", ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]],
  ["Backend", ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "Microservices"]],
  ["Databases", ["PostgreSQL", "MySQL", "MongoDB"]],
  ["AI & product systems", ["GenAI integration", "AI agents", "Resume–job description matching", "ATS development"]],
  ["Tools & practices", ["Git", "VS Code", "Agile/Scrum", "Technical documentation", "Performance optimization", "Client communication"]],
] as const;
const strengths = [
  ["Team leadership", "Leading a three-person development team from requirements through implementation."],
  ["Structured problem-solving", "Applying an engineering approach to APIs, software behavior, and hardware workflows."],
  ["Client communication", "Connecting the client and development team through clear requirements and ongoing conversations."],
  ["End-to-end ownership", "Delivering features across frontend, backend, and database layers."],
  ["Adaptability & self-directed learning", "Moving from mechanical engineering into embedded software, full-stack development, and AI workflows."],
  ["Cross-discipline collaboration", "Working with mechanical, hardware, and software teams to connect the whole system."],
];

export default function About() {
  const hasPortrait = existsSync(path.join(process.cwd(), "public/images/dp-portrait.png"));
  return <div className="shell">
    <section className="page-intro"><p className="eyebrow">ABOUT / THE PERSON BEHIND THE CODE</p><h1>An engineering mindset.<br/><span className="orange">A software career.</span></h1><p className="page-lede">Different systems. The same curiosity.<br/>A journey from understanding how things move to building how things work.</p></section>
    <section className="about-story section-top reveal">
      {hasPortrait ? <div className="about-portrait">
        <Image src="/images/dp-portrait.png" width={1024} height={1536} sizes="(max-width: 767px) min(320px, calc(100vw - 80px)), (max-width: 1100px) 33vw, 400px" alt="Monochrome illustrated portrait of Partham Durga Prasad." className="portrait-image" />
        <span className="portrait-caption mono" aria-hidden="true">DP / THINK IN SYSTEMS.</span>
      </div> : <div className="about-monogram" aria-hidden="true"><span>DP<span className="orange">.</span></span><p className="mono">THINK IN SYSTEMS.<br/>BUILD WITH PURPOSE.</p><div className="monogram-cross">+</div></div>}
      <div className="story-copy"><p className="eyebrow">HELLO, I’M PARTHAM DURGA PRASAD.</p><h2>You can call me DP.</h2><p>I graduated in Mechanical Engineering from RGUKT Basar in 2023. My path into software began with an interest in how systems work and how to make them better.</p><p>At Intech Additive Solutions, I worked on C++ backend modules for metal 3D printing systems, connecting software behavior with physical hardware. I later moved into full-stack and AI product development at Visys Cloud Technologies, building web interfaces, backend APIs, and recruitment automation workflows.</p><p>Today, my focus is Python full-stack development: bringing together responsive interfaces, clear API design, databases, and practical AI integrations. I enjoy taking ownership, working closely with people, and helping a team move from requirements to working software.</p><span className="location">⌖ Hyderabad, India</span></div>
    </section>
    <section className="section reveal"><div className="section-heading"><div><p className="eyebrow">01 / THE JOURNEY</p><h2>A foundation that keeps evolving.</h2></div></div><div className="timeline">{journey.map((item,i)=><article className="timeline-item" key={item.date}><div className="timeline-date mono"><span className="timeline-dot"/>{item.date}</div><div><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></div><span className="timeline-number mono" aria-hidden="true">0{i+1}</span></article>)}</div></section>
    <section className="section skills-section reveal"><div className="section-heading"><div><p className="eyebrow">02 / THE TOOLKIT</p><h2>The right tools. A connected approach.</h2></div></div><div className="core-skills">{["Python","FastAPI","React","Next.js","PostgreSQL"].map((skill,i)=><div key={skill}><span className="mono">0{i+1} / CORE</span><strong>{skill}</strong><span className="orange" aria-hidden="true">↗</span></div>)}</div><div className="skills-grid">{skills.map(([group,items])=><div className="skill-group" key={group}><h3>{group}</h3><div className="tags">{items.map(skill=><span key={skill}>{skill}</span>)}</div></div>)}</div></section>
    <section className="section reveal"><div className="section-heading"><div><p className="eyebrow">03 / HOW I WORK</p><h2>Beyond the technical stack.</h2></div></div><div className="strengths-grid">{strengths.map(([title,description],i)=><article key={title}><span className="mono orange">0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="inline-cta"><h2>See that mindset in practice.</h2><Link href="/experience" className="button button-primary">Explore My Experience <span aria-hidden="true">↗</span></Link></section>
  </div>;
}
