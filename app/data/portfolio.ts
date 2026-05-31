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
    "Mình tập trung vào Backend — thiết kế API, tối ưu database và vận hành server. Khi dự án cần, mình cũng làm được phần frontend.",
  location: "Hồ Chí Minh, Việt Nam",
  email: "shino@glodival.com",
  available: true,
  bio: [
    "Xin chào, mình là Shino — một Backend Developer, đồng thời làm được full-stack. Mình thích xây dựng những hệ thống chạy ổn định ở phía sau sản phẩm.",
    "Thế mạnh của mình là backend với PHP & Laravel, làm việc cùng MySQL/MariaDB và triển khai trên môi trường Linux + Nginx. Phía frontend, mình dùng được Vue, Nuxt.js cùng HTML/CSS khi dự án cần.",
    "Hiện mình đang làm tại Glodival (Hồ Chí Minh), tham gia phát triển các hệ thống nội bộ (ERP, CRM) và nền tảng thanh toán GloDiPay.",
  ],
  stats: [
    { label: "Hiện làm tại", value: "Glodival" },
    { label: "Vị trí chính", value: "Backend" },
    { label: "Stack chủ lực", value: "Laravel" },
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
    items: ["MySQL", "MariaDB", "SQL", "Tối ưu truy vấn"],
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
    title: "GloDiPay — Nền tảng thanh toán",
    description:
      "Tham gia phát triển nền tảng thanh toán GloDiPay tại Glodival. Phụ trách phần backend: xây dựng và bảo trì API, xử lý nghiệp vụ giao dịch.",
    tags: ["Laravel", "PHP", "MySQL", "Nginx", "Linux"],
    image: "💳",
    links: {},
    featured: true,
  },
  {
    title: "Hệ thống ERP nội bộ",
    description:
      "Phát triển các module cho hệ thống ERP nội bộ của công ty — quản lý quy trình, dữ liệu vận hành và báo cáo.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "🏢",
    links: {},
  },
  {
    title: "Hệ thống CRM",
    description:
      "Xây dựng tính năng cho hệ thống CRM phục vụ quản lý khách hàng và quy trình bán hàng.",
    tags: ["Laravel", "MySQL", "Vue"],
    image: "📇",
    links: {},
  },
];

export const experiences: Experience[] = [
  {
    role: "Backend Developer · Full-stack",
    company: "Glodival",
    period: "04/2024 — Hiện tại",
    location: "Hồ Chí Minh",
    highlights: [
      "Khi mới vào: phát triển các hệ thống nội bộ ERP, CRM bằng Laravel",
      "Từ đầu 2025: chuyển sang dự án GloDiPay — nền tảng thanh toán, phụ trách backend",
      "Làm việc với MySQL/MariaDB, triển khai và vận hành trên Linux + Nginx",
    ],
    tags: ["PHP", "Laravel", "MySQL", "Linux", "Nginx"],
  },
  {
    role: "Frontend Developer",
    company: "Sota Group",
    period: "Trước 2024",
    location: "Hồ Chí Minh",
    highlights: [
      "Làm frontend tại công ty outsource trong thời gian đi học",
      "Xây dựng giao diện web với HTML, CSS và JavaScript (AJAX)",
    ],
    tags: ["HTML", "CSS", "JavaScript", "AJAX"],
  },
];

export const socials: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Email", url: "mailto:shino@glodival.com", icon: "mail" },
];

export const navLinks = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#projects", label: "Dự án" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#contact", label: "Liên hệ" },
];
