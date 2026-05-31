export type SkillCategory = {
  title: string;
  icon: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: { demo?: string; github?: string };
  featured?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export const profile = {
  name: "Shino",
  role: "Backend Developer · Full-stack",
  tagline:
    "I focus on the backend — designing APIs, optimizing databases and running servers. When a project needs it, I handle the frontend too.",
  location: "Ho Chi Minh City, Vietnam",
  email: "baonguyen212002@gmail.com",
  available: true,
  bio: [
    "Hi, I'm Shino — a backend developer who also works full-stack. I enjoy building the systems that quietly keep a product running.",
    "My strengths are backend work with PHP & Laravel, MySQL/MariaDB, and deploying on Linux + Nginx. On the frontend I'm comfortable with Vue, Nuxt.js and HTML/CSS whenever a project calls for it.",
    "I'm currently at Glodival (Ho Chi Minh City), building internal systems (ERP, CRM) and the GloDiPay payment platform.",
  ],
  stats: [
    { label: "Currently at", value: "Glodival" },
    { label: "Main focus", value: "Backend" },
    { label: "Core stack", value: "Laravel" },
    { label: "Database", value: "MySQL" },
  ],
};

export const skills: SkillCategory[] = [
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      "PHP",
      "Laravel",
      "REST API",
      "Eloquent ORM",
      "OOP / MVC",
      "Composer",
      "Artisan",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    items: ["MySQL", "MariaDB", "SQL", "Query optimization"],
  },
  {
    title: "Server & DevOps",
    icon: "🐧",
    items: ["Linux", "Nginx", "Git", "Shell", "Deploy"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: ["Vue", "Nuxt.js", "JavaScript", "AJAX", "HTML", "CSS"],
  },
];

export const projects: Project[] = [
  {
    title: "GloDiPay — Payment Platform",
    description:
      "Helped build the GloDiPay payment platform at Glodival. Owned backend work: building and maintaining APIs and handling transaction logic.",
    tags: ["Laravel", "PHP", "MySQL", "Nginx", "Linux"],
    image: "💳",
    links: {},
    featured: true,
  },
  {
    title: "Internal ERP System",
    description:
      "Built modules for the company's internal ERP — managing workflows, operational data and reporting.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "🏢",
    links: {},
  },
  {
    title: "CRM System",
    description:
      "Built features for a CRM that supports customer management and the sales pipeline.",
    tags: ["Laravel", "MySQL", "Vue"],
    image: "📇",
    links: {},
  },
];

export const experiences: Experience[] = [
  {
    role: "Backend Developer · Full-stack",
    company: "Glodival",
    period: "Apr 2024 — Present",
    location: "Ho Chi Minh City",
    highlights: [
      "Started out building internal ERP and CRM systems with Laravel",
      "From early 2025: moved to GloDiPay — a payment platform — owning the backend",
      "Working with MySQL/MariaDB, deploying and running on Linux + Nginx",
    ],
    tags: ["PHP", "Laravel", "MySQL", "Linux", "Nginx"],
  },
  {
    role: "Frontend Developer",
    company: "Sota Group",
    period: "Before 2024",
    location: "Ho Chi Minh City",
    highlights: [
      "Did frontend work at an outsourcing company while studying",
      "Built web interfaces with HTML, CSS and JavaScript (AJAX)",
    ],
    tags: ["HTML", "CSS", "JavaScript", "AJAX"],
  },
];

export const socials: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/baonguyen212002", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ch%C3%AD-b%E1%BA%A3o-nguy%E1%BB%85n-570668278/",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:baonguyen212002@gmail.com", icon: "mail" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
