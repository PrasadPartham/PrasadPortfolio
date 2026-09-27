# DP. — Partham Durga Prasad

**Python Full-Stack Developer · Web Applications · AI Integration**

From engineering systems to building intelligent software.

Welcome to my portfolio repository. I’m **Partham Durga Prasad — call me DP**. I build web applications with Python, FastAPI, React, and Next.js, bringing together responsive interfaces, backend services, databases, and practical AI workflows.

[LinkedIn](https://www.linkedin.com/in/parthamdurgaprasad/) · [GitHub](https://github.com/PrasadPartham) · [Email](mailto:parthamprasad206@gmail.com)

## About me

I graduated in **Mechanical Engineering from RGUKT Basar (IIIT Basar) in 2023**. My software journey has taken me from C++ development for metal 3D printing systems to full-stack web applications and AI-assisted products.

At Intech Additive Solutions, I worked on software that connected directly with physical hardware. At Visys Cloud Technologies, I developed full-stack features and recruitment automation workflows, led a three-person development team, and coordinated with clients throughout delivery.

I bring an engineering approach to software: understand the problem, design a practical solution, and take ownership of the details that make it work.

## The portfolio

A five-page personal website presenting my work, technical skills, experience, and journey into software development. Built with **Next.js App Router, TypeScript, Tailwind CSS, and Motion for React**.

| Page | What you’ll find |
| --- | --- |
| **Home** | Introduction, animated hero, selected projects, and experience highlights |
| **About** | My background, career journey, skills, and strengths |
| **Experience** | Professional roles, responsibilities, and contributions |
| **Projects** | Three case studies with inline architecture diagrams |
| **Contact** | Direct contact links and a copy-email interaction |

### Design and interaction

- Responsive layouts for mobile and desktop.
- Animated hero with playback paused when offscreen or when the tab is hidden.
- Progressive scroll reveals and an animated journey line, with visible static content in unsupported browsers.
- Reduced-motion support, visible keyboard focus, semantic landmarks, and a skip link.
- Accessible mobile navigation with Escape-to-close, focus wrapping, focus restoration, and route-change dismissal.
- Locally bundled fonts through Fontsource, without a runtime font or image service.

## Selected projects

### VcruitAI — AI Recruitment Platform

An AI-assisted recruitment platform combining resume parsing, candidate scoring, job management, and hiring pipeline tracking. My work included matching and ranking workflows, backend services, database integration, and automated candidate communication.

**Stack:** Next.js · FastAPI · PostgreSQL · GenAI

### RDVP — Ridex Digital Vehicle Passport

A full-stack platform for digital vehicle identities and service workflows across multiple stakeholder roles. My contributions included responsive interfaces, backend services, and phone-number masking for communication.

**Stack:** Next.js · FastAPI · MongoDB

### Teeth & Eye — AI Medical Screening

An application supporting AI-assisted dental and eye image screening, appointment management, and workflows for patients, doctors, and administrators.

**Stack:** React · Node.js · Express.js · PostgreSQL

## Professional experience

| Role | Organization | Dates |
| --- | --- | --- |
| Software Associate — Full-Stack & AI Product Developer | Visys Cloud Technologies, Hyderabad | Apr 2025–May 2026 |
| Software Engineer — Embedded Systems | Intech Additive Solutions, Bengaluru | Nov 2023–Oct 2024 |

## Technical skills

| Area | Technologies and practices |
| --- | --- |
| Languages | Python, JavaScript, TypeScript, C++, C#, SQL |
| Frontend | React, Next.js, HTML5, CSS3, Tailwind CSS |
| Backend | FastAPI, Flask, Node.js, Express.js, REST APIs, microservices |
| Databases | PostgreSQL, MySQL, MongoDB |
| AI integration | GenAI workflows, AI agents, resume–job description matching, ATS development |
| Collaboration | Git, Agile/Scrum, technical documentation, client communication, team leadership |

## Run locally

**Prerequisite:** Node.js 20.9 or newer and npm.

From the project directory:

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

If Windows PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`.

## Validation and production

Run the code checks and create a production build:

```sh
npm run lint
npm run typecheck
npm run build
```

Start the production server:

```sh
npm run start
```

Run the browser tests after building:

```sh
npm run test:e2e
```

The Playwright suite requires installed **Google Chrome** and automatically starts a production server on **port 3001**. Screenshots are written to the ignored `test-results/` directory.

## Project organization

Page-specific UI, data, interactions, and helper components stay inside their own `page.tsx` files. **Header and Footer are the only shared UI components.**

| File | Responsibility |
| --- | --- |
| `app/page.tsx` | Home content, project previews, hero visual, and animation lifecycle |
| `app/about/page.tsx` | Biography, journey, skills, and strengths |
| `app/experience/page.tsx` | Professional experience |
| `app/projects/page.tsx` | Project case studies and inline architecture diagrams |
| `app/contact/page.tsx` | Contact links and clipboard interaction with a selectable fallback |
| `components/Header.tsx` | Shared navigation and mobile menu |
| `components/Footer.tsx` | Shared footer |
| `app/layout.tsx` | Document shell, locally bundled fonts, and default metadata |
| `app/contact/layout.tsx` | Metadata for the interactive contact route |
| `app/globals.css` | Tailwind import, design tokens, responsive styles, and CSS animations |

## Content and deployment

Experience dates reflect the supplied résumé; the latest listed role ended in May 2026. VcruitAI’s 100+ resumes per run is presented as a résumé-reported testing result. Interface previews are illustrative and architecture diagrams are conceptual.

Contact uses direct links; there is no form backend or tracking. No environment variables are required for the current implementation.

Deploy to a host that supports the project’s Next.js Node.js runtime. Once the production domain is known, configure the actual canonical URL and sitemap URLs.

Optional additions:

- A public résumé file and working download link.
- Verified project demo or repository links.
- A live portfolio link at the top of this README after deployment.

## Get in touch

Have a software role, product idea, or project to discuss? I’d be glad to connect.

- **Email:** [parthamprasad206@gmail.com](mailto:parthamprasad206@gmail.com)
- **LinkedIn:** [Partham Durga Prasad](https://www.linkedin.com/in/parthamdurgaprasad/)
- **GitHub:** [PrasadPartham](https://github.com/PrasadPartham)
