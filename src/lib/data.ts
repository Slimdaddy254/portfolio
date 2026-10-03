/*
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE. Everything on the site renders from here — no JSX edits needed
 * to change copy, links, projects, or the timeline.
 *
 * Content is sourced from your CV. Items marked TODO need your input.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: "Shadrack Mutethia",
  role: "Full-Stack Software Engineer",
  handle: "@shady_mutethia",
  motto: "Learned it backwards, shipped it forwards.",
  location: "Nairobi, Kenya (UTC+3)",
  phone: "+254 701 735 347",
  email: "shadymutethia@gmail.com",
  linkedin: "https://www.linkedin.com/in/shadrack-mutethia",
  resume: "/resume.pdf",
  avatar: "https://avatars.githubusercontent.com/u/56540442?v=4",
  // TODO: replace with your own wide image (public/banner.png is a placeholder).
  banner: "/banner.png",
};

export const links = {
  github: "https://github.com/Slimdaddy254",
  twitter: "https://x.com/shady_mutethia",
  youtube: "https://www.youtube.com/@shady_mutethia",
  medium: "https://medium.com/@shadymutethia",
} as const;

/** Compact links in the header, next to the name. */
export const headerSocials = ["github", "twitter", "linkedin", "resume"] as const;

/** Full set of platforms, shown in the footer. */
export const nav = [
  { label: "About", id: "about" },
  { label: "Experience", id: "journey" },
  { label: "Work", id: "work" },
  { label: "Writing", id: "writing" },
  { label: "Stack", id: "stack" },
  { label: "Contact", id: "contact" },
];

export const intro = {
  /*
   * The opening lines under the hero. Warm, first-person, built around what he
   * loves: seeing the thing work, owning it end to end, and the sideways route
   * in from energy auditing. MVPs with founders, his own products, one honest
   * founder attempt.
   */
  intro: [
    "I build software, mostly to see if it works — and there's still nothing like the moment it does. MVPs with founders who had an idea and a deadline. Products of my own that got further than most side projects: a resume checker, a payments toolkit for M-Pesa, a music collaboration platform, file storage, dashboards. Once I tried being a founder myself, which is a story with its own ups and downs.",
    "What I love is owning the whole thing. A founder needs an MVP in six weeks, so I build one. A payments integration keeps tripping people up, so I write the toolkit. Someone wants their files organised like a drive, so I build that too. Interface, API, database, deploy pipeline — start to finish, and I don't much mind being the only one who has to understand all of it. The range isn't deliberate; it's what happens when you like building more than specialising.",
    "I came to this sideways, from energy auditing, which nobody recommends. Auditing installations meant reading specs closely and taking measurements seriously; technical support meant forming a theory, testing it, and admitting when it was wrong. Software has the same disease and the same remedies, and it's considerably more fun. I never went back — it turned out the thing I loved doing was this, and I get to keep doing it.",
  ],
  /** Short bio for the About section. */
  about: [
    "Full-stack engineer in Nairobi. I build software across the stack — interface, API, database, and the deploy pipeline that gets it live and keeps it there. Sometimes that's a developer tool, sometimes an MVP for a founder, sometimes a product I'm chasing because I think it should exist.",
    "The founder attempt taught me more than the client work, which is a slightly embarrassing admission. Building a company means making every decision yourself and living with most of them, and it gave me a healthy respect for the things engineers usually skip: pricing, edge cases, what happens when a user does the one thing you didn't anticipate.",
    "My route in was odd: energy engineering, then technical support, then building. It turned out to be decent preparation. Auditing meant taking measurements seriously; debugging production meant forming a theory and admitting when it was wrong. Software rewards exactly those habits.",
    "Freelancing remotely since 2023, usually with people in other time zones. Fluent English, native Swahili. I care about developer experience, the parts of a system nobody demos in a talk, and software that doesn't need me watching it.",
  ],
};

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  detail: string;
  tags: string[];
  href?: string;
  /** Optional square logo; falls back to the first letter of `org`. */
  logo?: string;
};

/*
 * Work history from the CV. Titles carry no bracket qualifiers. The energy
 * roles are kept: they're the reason the rest of the timeline makes sense.
 */
export const timeline: TimelineEntry[] = [
  {
    period: "Jan 2026 — Present",
    title: "Full-Stack Developer",
    org: "Tiberbu Healthnet",
    detail:
      "Healthcare software built on FHIR — standards-based data models, Patient, Observation and Encounter resources, and the integration layer between a Python backend and a Next.js frontend. Clinical systems only exchange data properly if someone gets the models right, so that's the part I keep my hands on.",
    tags: ["TypeScript", "Next.js", "Python", "FHIR", "Frappe", "PostgreSQL"],
  },
  {
    period: "Feb 2023 — Present",
    title: "Full-Stack Developer",
    org: "Self-Employed",
    detail:
      "Freelance full-stack work, mostly for founders with an idea and a deadline. MVPs that had to be live in six weeks, alongside products I wanted to exist anyway — a resume checker, an M-Pesa payments toolkit, file storage with expiring links, and a music collaboration platform. Interface through deploy pipeline, and at this point nobody else to hand the awkward parts to.",
    tags: ["TypeScript", "Node.js", "React", "Next.js", "Prisma", "PostgreSQL"],
  },
  {
    period: "Jun 2021 — Oct 2023",
    title: "Technical Support Engineer",
    org: "XENO Technologies",
    detail:
      "Second-line technical support: form a theory about what's broken, test it, and admit when it was wrong. Repeat until it holds. It's the same discipline as debugging code, except the users are waiting on you and the logs are worse.",
    tags: ["Technical Support", "Troubleshooting", "Networking", "Linux"],
  },
  {
    period: "Jan 2022 — Jun 2023",
    title: "Energy Engineer / Auditor",
    org: "Syrecon Services",
    detail:
      "Audited electrical systems and HVAC units for energy-saving opportunities, producing the cost-benefit analysis that let clients decide on evidence rather than instinct. Transformers, distribution boards, switchgear upgrades.",
    tags: ["Energy Auditing", "HVAC", "Electrical", "Cost-Benefit Analysis"],
  },
  {
    period: "May 2019 — Aug 2020",
    title: "Energy Engineer",
    org: "EIT Africa",
    detail:
      "Energy engineering work where the numbers had to be right and the recommendations had to hold up to someone else's scrutiny. Reading specs properly and checking my own work turned out to transfer to software better than I expected.",
    tags: ["Energy Engineering", "Electrical", "HVAC"],
  },
];

export type EducationEntry = {
  title: string;
  org: string;
  period: string;
  detail: string;
  tags: string[];
};

export const education: EducationEntry[] = [
  {
    title: "BSc in Energy Technology",
    org: "Kenyatta University, School of Engineering",
    period: "2016 — 2022",
    detail:
      "Coursework included programming in C, C++, and Python, data structures and algorithms, database systems, software development, and systems design.",
    tags: ["C", "C++", "Python", "Algorithms", "Database Systems"],
  },
  {
    title: "The Odin Project — Full Stack JavaScript Path",
    org: "Self-paced",
    period: "2022 — 2023",
    detail:
      "Full-stack curriculum across HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, PostgreSQL, Git, testing, and deployment.",
    tags: ["JavaScript", "React", "Node.js", "Testing", "Deployment"],
  },
];

export const certifications = [
  { title: "Software Engineer", issuer: "HackerRank", year: "Oct 2025" },
  { title: "JavaScript Mastery", issuer: "HackerRank", year: "Oct 2025" },
  { title: "Artificial Intelligence Analyst", issuer: "IBM", year: "Sep 2019" },
];

export type Project = {
  name: string;
  year: string;
  summary: string;
  detail: string;
  tags: string[];
  status?: string;
  href?: string;
  repo?: string;
  featured?: boolean;
  /** Screenshot at public/covers/<file>; falls back to a letter placeholder. */
  cover?: string;
  /** Small label overlaid on the cover, e.g. "New". */
  badge?: string;
};

/*
 * All verified against the GitHub API: names, descriptions, languages and
 * homepage URLs. TuneCol is not public on GitHub — link only its live demo.
 */
export const projects: Project[] = [
  {
    name: "TuneCol",
    year: "2026",
    summary: "Music collaboration platform with version history for every mix.",
    detail:
      "A SaaS for music creators: project management with tasks, timesheets and reporting, real-time collaboration, and full version history so you can compare mixes side by side and revert to any earlier state. Accounts, team roles, and subscription billing.",
    tags: ["TypeScript", "React", "Node.js", "Auth", "Billing"],
    status: "Live",
    href: "https://tunecol.com/",
    featured: true,
    badge: "New",
  },
  {
    name: "Resume Checker",
    year: "2025",
    summary: "AI-powered ATS resume checker with compatibility scoring.",
    detail:
      "Upload a CV, paste a job description, and get scored against what an applicant tracking system will actually parse. Built to find the reasons a good resume was getting filtered out.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    status: "Live",
    href: "https://resume-cheq.vercel.app/",
    repo: "https://github.com/Slimdaddy254/resume-checker",
    featured: true,
  },
  {
    name: "File Storage",
    year: "2025",
    summary: "Google Drive-style file storage with expiring share links.",
    detail:
      "Full file storage on Express, Prisma and Cloudinary: folders, uploads, authentication, and shareable links that expire on their own.",
    tags: ["Express", "Prisma", "PostgreSQL", "Cloudinary", "JWT"],
    status: "Live",
    href: "https://file-uploader-3gqw.onrender.com/",
    repo: "https://github.com/Slimdaddy254/file-uploader",
    featured: true,
  },
  {
    name: "CV Builder",
    year: "2025",
    summary: "MERN resume builder with live preview and PDF export.",
    detail:
      "A resume builder that keeps a live preview beside the form and exports a clean PDF when you're done. React and MongoDB, the way everyone learns them.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "Live",
    href: "https://cv-builder-rose.vercel.app/",
    repo: "https://github.com/Slimdaddy254/cv-builder",
  },
  {
    name: "next-ops",
    year: "2025",
    summary: "A multi-tenant operations platform.",
    detail:
      "Multi-tenancy as the central problem — isolating data and configuration per tenant rather than bolting it on afterwards.",
    tags: ["TypeScript"],
    status: "In progress",
    repo: "https://github.com/Slimdaddy254/next-ops",
    featured: true,
  },
  {
    name: "DarajaDev Toolkit",
    year: "2025",
    summary: "Open-source toolkit for M-Pesa payments and webhooks.",
    detail:
      "Building, testing and monitoring M-Pesa payment integrations in one place — fast setup, flexible APIs, real-time dashboards and CLI tools. Written for developers who are tired of stitching it together themselves.",
    tags: ["Payments", "Webhooks", "CLI", "Open Source"],
    status: "Published",
    repo: "https://github.com/Slimdaddy254/darajadevToolkit",
    featured: true,
  },
  {
    name: "Inventory App",
    year: "2025",
    summary: "Inventory management app.",
    detail: "A TypeScript take on tracking stock, built to get past tutorial territory.",
    tags: ["TypeScript"],
    status: "Live",
    href: "https://inventory-app-five-tau.vercel.app/",
    repo: "https://github.com/Slimdaddy254/inventory-app",
  },
  {
    name: "Dashboard",
    year: "2025",
    summary: "Admin dashboard UI.",
    detail:
      "Dashboard layouts, tables and navigation patterns in Next.js — the kind of screen every internal tool needs and few tutorials bother with.",
    tags: ["TypeScript", "Next.js"],
    status: "Live",
    href: "https://nextjs-dashboard-slimdaddy254s-projects.vercel.app/",
    repo: "https://github.com/Slimdaddy254/next-dashboard",
  },
  {
    name: "Swift Proxy",
    year: "2025",
    summary: "Free browser-based proxy scraper.",
    detail:
      "Gathers fresh proxies from around the world and runs entirely in the browser, so there's nothing to install and no server to keep alive.",
    tags: ["TypeScript", "Web Scraping"],
    status: "Live",
    href: "https://jinef-john.github.io/swift-proxy/",
    repo: "https://github.com/Slimdaddy254/swift-proxy",
  },
  {
    name: "Madaraka Express",
    year: "2025",
    summary: "Next.js project built to learn the framework properly.",
    detail:
      "Deliberately built to master Next.js — routing, data fetching, and the parts that only make sense once you've hit them.",
    tags: ["Next.js"],
    status: "Live",
    href: "https://madaraka-express-clone.vercel.app/",
    repo: "https://github.com/Slimdaddy254/Madaraka-Express",
  },
];

/*
 * Languages come from GitHub's language stats; tools from what the repos
 * actually import. Prune anything you don't want to be asked about.
 */
export const stack = {
  groups: [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "C", "C++", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "Vite",
        "Tailwind CSS",
        "Redux",
        "TanStack Query",
        "Zustand",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Frappe Framework",
        "RESTful APIs",
        "JWT",
        "Microservices",
      ],
    },
    {
      title: "Databases",
      items: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "MariaDB",
        "Redis",
        "Query Optimisation",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Jenkins",
        "GitHub Actions",
      ],
    },
    {
      title: "Monitoring",
      items: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"],
    },
    {
      title: "Testing & Tools",
      items: [
        "Jest",
        "React Testing Library",
        "Git",
        "GitHub",
        "Postman",
        "Bruno",
      ],
    },
  ],
};

export const contact = {
  closer:
    "If you need something built, or want to talk about what it takes to get an MVP over the line — get in touch.",
  ctaLabel: "Get in touch",
  quote: "Move fast with stable infrastructure.",
  quoteAuthor: "Mark Zuckerberg",
  heading: "Let's connect",
  sub: "Find me on these platforms",
};