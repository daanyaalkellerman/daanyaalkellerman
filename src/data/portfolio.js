import projectPreview from "@/assets/images/projects/SalesRepConnect";

export const projects = [
  {
    title: "SalesRepConnect",
    description:
      "A SaaS platform built for sales teams to create digital business cards, manage agents, capture leads, track QR scans, and monitor performance through a centralized dashboard.",
    stack: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vue Router",
      "Firebase Authentication",
      "Cloud Firestore",
      "Tailwind CSS",
      "Chart.js",
      "Vite",
      "Firebase Hosting"
    ],
    category: "SaaS Platform",
    year: "2026",
    highlights: [
      "Built a full layered architecture with Vue components, Pinia stores, domain services, and Firebase infrastructure.",
      "Implemented authentication, registration workflows, team management, role-based access control, and company-level multi-tenant data structure.",
      "Created digital business cards with QR generation, scan tracking, public lead capture, and internal CRM dashboards for agents, leads, and analytics.",
      "Designed the platform to help companies manage sales representatives, share professional digital contact experiences, and convert engagement into trackable leads.",
    ],
    image: projectPreview,
    live: "https://salesrepconnect.web.app/",
    github: "",
  }
];

export const experience = [
  {
    period: "July 2025 - Present",
    role: "FutureRent - Mid-Level Developer",
    description:
      "Leading implementation across the main company website and supporting campaigns, with responsibility spanning feature architecture, delivery quality, and technical guidance for junior developers.",
  },
  {
    period: "July 2024 - July 2025",
    role: "FutureRent - Junior Developer",
    description:
      "Built internal tools and product improvements that supported business workflows, platform delivery, and backend-connected user experiences.",
  },
  {
    period: "March 2024 - July 2024",
    role: "LC Studio - Web Development Intern",
    description:
      "Worked on real client projects while sharpening delivery discipline, frontend implementation, and modern web development fundamentals.",
  },
  {
    period: "2023 - 2024",
    role: "Life Choices Coding Academy",
    description:
      "Built full-stack projects, mentored peers, and finished with multiple awards including Certificate of Excellence, Top Capstone Project, Top Student, and Top Overall Achiever.",
  },
];

export const skills = [
  {
    category: "Frontend",
    summary:
      "Interfaces built for clarity, responsiveness, and maintainable product growth.",
    items: ["React", "Next.js", "Vue", "Tailwind", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    summary:
      "Application logic and integrations structured around business workflows and clean data flow.",
    items: ["Node.js", "Express", "Knex", "PHP"],
  },
  {
    category: "Data",
    summary:
      "Relational and document data modeling for products that need dependable querying and reporting.",
    items: ["MySQL", "PostgreSQL", "MariaDB", "MongoDB"],
  },
  {
    category: "Mobile",
    summary:
      "Cross-platform product delivery when the same experience needs to extend cleanly to handheld devices.",
    items: ["React Native", "Expo"],
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daanyaal-kellerman-1aba78300",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/daanyaalkellerman",
    icon: "github",
  },
];

export const contactDetails = [
  {
    label: "Preferred Contact",
    value: "LinkedIn direct message",
    href: "https://www.linkedin.com/in/daanyaal-kellerman-1aba78300",
  },
  {
    label: "Location",
    value: "Cape Town, South Africa",
    href: "",
  },
  {
    label: "Focus",
    value: "Product, platform, internal tooling",
    href: "",
  },
];
