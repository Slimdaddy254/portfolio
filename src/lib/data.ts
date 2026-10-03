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
  motto: "If I have seen further it is by standing on the shoulders of giants.",
  mottoAuthor: "Isaac Newton",
  location: "Nairobi, Kenya (UTC+3)",
  phone: "+254 701 735 347",
  email: "shadymutethia@gmail.com",
  linkedin: "https://www.linkedin.com/in/shadrack-mutethia",
  resume: "/resume.pdf",
  avatar: "/passportPhoto.jpeg",
  banner: "/banner.jpg",
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
  { label: "Now", id: "now" },
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

/*
 * The "Now" section: a dated snapshot of what's currently occupying his time.
 * Deliberately perishable — update it when it stops being true, or delete it.
 */
export const now = {
  items: [
    {
      label: "Building",
      text: "Healthtech products, in the health sector. Clinical software that has to survive contact with real data and real users — the kind of project where the data model either holds up or it doesn't, and finding out early is cheaper.",
    },
    {
      label: "Also building",
      text: "Custom developer tools and SaaS products on the side. Usually because I hit the same problem twice and got annoyed enough to fix it properly instead of working around it again.",
    },
    {
      label: "Writing",
      text: "On my experiences, my own thinking, and anything interesting I come across — mostly on Medium. If I've formed an opinion worth keeping, that's usually where it ends up.",
    },
    {
      label: "Learning",
      text: "AI engineering, and genuinely all of it: the models themselves, the tooling around them, and how to ship something actually useful with them rather than something that only demos well.",
    },
    {
      label: "Otherwise",
      text: "Helping people and businesses leverage technology. Usually that means being the person who properly understands what they're trying to do and can build it end to end.",
    },
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
  /** Screenshot at public/covers/<file>; falls back to a letter placeholder. */
  cover?: string;
  /** Small label overlaid on the cover, e.g. "New". */
  badge?: string;
};

/*
 * Three projects, chosen because they're the ones worth explaining. Everything
 * else lives on GitHub — the "View All" link below. Verified against the GitHub
 * API: names, descriptions, languages and homepage URLs. TuneCol isn't public on
 * GitHub, so it links to the live demo only.
 */
export const projects: Project[] = [
  {
    name: "TuneCol",
    year: "2026",
    summary: "Music collaboration platform with version history for every mix.",
    detail:
      "A SaaS for music creators: project management with tasks, timesheets and reporting, real-time collaboration, and full version history so you can compare mixes side by side and revert to any earlier state. Accounts, team roles, and subscription billing. The version history is the part I'm proudest of — producers lose versions constantly, and no one else was storing them properly.",
    tags: ["TypeScript", "React", "Node.js", "Auth", "Billing"],
    status: "Live",
    href: "https://tunecol.com/",
    badge: "New",
  },
  {
    name: "Resume Checker",
    year: "2025",
    summary: "AI-powered ATS resume checker with compatibility scoring.",
    detail:
      "Upload a CV, paste a job description, and get scored against what an applicant tracking system will actually parse. Built after watching competent people get filtered out by a piece of software reading their CV literally. It tells you which lines are costing you interviews.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    status: "Live",
    href: "https://resume-cheq.vercel.app/",
    repo: "https://github.com/Slimdaddy254/resume-checker",
  },
  {
    name: "next-ops",
    year: "2025",
    summary: "A multi-tenant operations platform.",
    detail:
      "Multi-tenancy as the central problem rather than an afterthought — isolating data and configuration per tenant from the first migration onward. Still in progress, and the reason it's still in progress is that the isolation rules keep getting more subtle than the feature work.",
    tags: ["TypeScript"],
    status: "In progress",
    repo: "https://github.com/Slimdaddy254/next-ops",
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
  quote: "Stay hungry. Stay foolish.",
  quoteAuthor: "Steve Jobs",
  heading: "Let's connect",
  sub: "Find me on these platforms",
};