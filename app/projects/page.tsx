import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Projects", description: "Explore VcruitAI, RDVP, and Teeth & Eye: case studies in AI recruitment, digital vehicle identities, and AI-assisted screening workflows." };

const projects = [
  {
    id: "vcruitai", number: "01", name: "VcruitAI", title: "From resumes to a recruiter’s shortlist.", category: "AI RECRUITMENT PLATFORM", color: "recruit",
    summary: "An AI-assisted recruitment platform combining resume parsing, job management, candidate scoring, and hiring pipeline tracking.",
    liveUrl: "https://vcruitai.com/",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "GenAI"],
    problem: "Manual resume review involves unstructured information, repeated comparisons against job requirements, and candidate communication spread across different steps.",
    product: "VcruitAI brings those steps into a connected recruitment platform, helping recruiters move from uploaded resumes to a manageable candidate pipeline.",
    contributions: ["Built Next.js interfaces for recruitment workflows.", "Developed resume–job description matching and candidate ranking.", "Built FastAPI backend services with PostgreSQL data storage.", "Integrated email services for recruiter communication."],
    workflow: ["Resume upload", "Parse & structure", "Match & rank", "Recruiter review"],
    outcome: "Résumé-reported testing result: processed 100+ resumes per run.",
    layers: [{ title: "Experience", detail: "Next.js · Recruiter workflows" }, { title: "Intelligence & APIs", detail: "FastAPI · GenAI integration" }, { title: "Persistence", detail: "PostgreSQL · Recruitment data" }],
  },
  {
    id: "rdvp", number: "02", name: "RDVP", title: "Vehicle records and service workflows in one place.", category: "RIDEX DIGITAL VEHICLE PASSPORT", color: "vehicle",
    summary: "A platform for managing digital vehicle identities and service workflows across multiple stakeholder roles.",
    liveUrl: "https://rdvp.in/",
    stack: ["Next.js", "FastAPI", "MongoDB"],
    problem: "Vehicle identity, service records, and communication need to stay connected across multiple stakeholder roles, while personal contact details need careful handling.",
    product: "Ridex Digital Vehicle Passport brings vehicle identity and service workflows into one platform, with responsive interfaces for different stakeholders.",
    contributions: ["Built responsive Next.js interfaces for vehicle and service workflows.", "Developed FastAPI backend services for vehicle identity and service workflows.", "Implemented phone-number masking for stakeholder communication."],
    workflow: ["Vehicle identity", "Stakeholder access", "Service workflow", "Masked contact"],
    outcome: "Delivered vehicle identity and service workflows with phone-number masking to keep personal contact details private during communication.",
    layers: [{ title: "Experience", detail: "Next.js · Stakeholder interfaces" }, { title: "Services", detail: "FastAPI · Vehicle workflows" }, { title: "Persistence", detail: "MongoDB · Vehicle records" }],
  },
  {
    id: "teeth-eye", number: "03", name: "Teeth & Eye", title: "Image screening, review, and appointments.", category: "AI-ASSISTED MEDICAL SCREENING", color: "medical",
    summary: "An application supporting AI-assisted dental and eye image screening and clinical workflows.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    problem: "Image screening, appointments, and different user roles introduce coordination challenges in clinical workflows.",
    product: "Teeth & Eye connects AI-assisted image screening and appointment management with experiences for patients, doctors, and administrators.",
    contributions: ["Built image-analysis screening workflows.", "Developed appointment management.", "Created role-based experiences for patients, doctors, and administrators."],
    workflow: ["Image submission", "AI-assisted screening", "Doctor review", "Appointment workflow"],
    outcome: "Built role-based screening and appointment workflows designed to support clinician review.",
    layers: [{ title: "Experience", detail: "React · Role-based interfaces" }, { title: "Services", detail: "Node.js · Express.js" }, { title: "Persistence", detail: "PostgreSQL · Workflow data" }],
  },
];

function ArchitectureDiagram({ project }: { project: (typeof projects)[number] }) {
  return <figure className={`architecture ${project.color}`}><figcaption className="mono"><span>CONCEPTUAL ARCHITECTURE</span><span aria-hidden="true">↗</span></figcaption><div className="architecture-layers">{project.layers.map((layer,i)=><div className="architecture-layer" key={layer.title}><span className="mono architecture-index">0{i+1}</span><div><strong>{layer.title}</strong><p>{layer.detail}</p></div><span className="layer-glyph" aria-hidden="true">{["⌘","⌁","▱"][i]}</span></div>)}</div><p className="architecture-caption mono">INTERFACE → LOGIC → DATA</p></figure>;
}

export default function Projects() {
  return <div className="shell"><section className="page-intro"><p className="eyebrow">PROJECTS / SELECTED WORK</p><h1>From a real problem.<br/><span className="orange">To working software.</span></h1><p className="page-lede">A closer look at the products I’ve contributed to, the systems behind them, and my part in bringing them together.</p><nav className="project-jump-links" aria-label="Project case studies">{projects.map(project=><a href={`#${project.id}`} key={project.id}><span className="mono">{project.number}</span>{project.name}<span aria-hidden="true">↓</span></a>)}</nav></section>
    {projects.map(project=><article className="case-study reveal" key={project.id} id={project.id}><div className="case-heading"><div><p className="eyebrow">{project.number} / {project.category}</p><h2>{project.name}<span className="orange">.</span></h2></div><div className="tags">{project.stack.map(skill=><span key={skill}>{skill}</span>)}</div></div><div className="case-overview"><div className="case-intro"><h3>{project.title}</h3><p>{project.summary}</p>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Live Website for ${project.name} (opens in a new tab)`}
          className="button button-primary mt-6 max-w-full text-center"
        >
          <span className="min-w-0 break-words">Visit Live Website</span>
          <span className="shrink-0" aria-hidden="true">↗</span>
        </a>
      )}
      <div className="case-role mono"><span>MY ROLE</span><span>FULL-STACK DEVELOPMENT</span></div></div><ArchitectureDiagram project={project}/></div><div className="case-details"><section><h4><span className="mono orange">01</span> The problem</h4><p>{project.problem}</p></section><section><h4><span className="mono orange">02</span> The product</h4><p>{project.product}</p></section><section><h4><span className="mono orange">03</span> My contribution</h4><ul className="contribution-list">{project.contributions.map(item=><li key={item}>{item}</li>)}</ul></section></div><section className="workflow-section"><h4 className="mono">KEY WORKFLOW</h4><ol className="workflow">{project.workflow.map((step,i)=><li key={step}><span className="mono">0{i+1}</span><strong>{step}</strong>{i<project.workflow.length-1 && <span className="workflow-arrow" aria-hidden="true">→</span>}</li>)}</ol></section><div className="case-outcome"><p className="eyebrow">DELIVERED & LEARNED</p><div><p>{project.outcome}</p></div></div></article>)}
    <section className="inline-cta"><div><p className="eyebrow">LET’S TALK THROUGH THE DETAILS</p><h2>Curious about the work?</h2><a href="https://github.com/PrasadPartham" target="_blank" rel="noopener noreferrer" className="text-link">Visit my GitHub profile ↗<span className="sr-only"> (opens in a new tab)</span></a></div><Link href="/contact" className="button button-primary">Start a Conversation <span aria-hidden="true">↗</span></Link></section>
  </div>;
}
