export type ExperienceCase = {
  left: boolean | undefined;
  note: string;
  title: string;
  description: string;
  stack: string;
  link: string | undefined | null;
  video: string | undefined | null;
  images: string[] | undefined | null;
};

export const experienceData: ExperienceCase[] = [
  {
    title: "Gamified Courses Platform",
    description:
      "A gamified e-learning platform built with Next.js and Supabase. It features user authentication, role-based access, file storage, and a relational database powered by Supabase. Video content is hosted using Mux, with progress tracking to monitor user engagement and course completion. Payments are managed with stripe.",
    link: null,
    note: "My Magnum Opus (so far)",
    stack:
      "Next.js, React, Supabase (Auth, Database, Storage), Mux, Tailwind CSS",
    left: false,
    video: null,
    images: ["images/v11.png", "images/v21.png"],
  },
  {
    title: "International Product Website (Multi-page Frontend)",
    description:
      "Frontend development for a large-scale international product website, including multiple marketing and product pages. Focused on performance, responsive layouts, accessibility, and reusable components across the entire site.",
    link: null,
    note: "Many animations, zero regrets.",
    stack: "Next.js, React, Tailwind CSS, Framer Motion, GSAP",
    left: true,
    video: null,
    images: ["images/t11.png", "images/t21.png"],
  },
  {
    title: "Crypto Streaming Platform (MVP)",
    description:
      "Frontend development for the MVP of a crypto-based live streaming platform, allowing users to purchase cryptocurrency and donate it to streamers. Focused on building core user flows, responsive UI, and a scalable frontend architecture.",
    link: null,
    note: "MVP completed — the startup journey ended there.",
    stack: "React, Next.js, Tailwind CSS",
    left: false,
    video: null,
    images: ["images/s1.png", "images/s2.png"],
  },
];

export type SkillCase = {
  title: string;
  skills: string[];
  left: boolean | undefined | null;
  key: string;
};

export const skillsData: SkillCase[] = [
  {
    key: "frontend",
    left: true,
    title: "Frontend",
    skills: [
      "Next.js 16 & React",
      "TypeScript & JavaScript (ES6+)",
      "Tailwind 4",
      "HTML5 & CSS3",
      "Framer Motion & GSAP",
      "API Integration",
      "Figma",
      "Android mobile app development (kotlin)"
    ],
  },

  {
    key: "backend",
    left: false,
    title: "Backend",
    skills: ["Node.js & Express.js", "Supabase", "REST APIs"],
  },

  {
    key: "data",
    left: true,
    title: "Data & Systems",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Pentaho Data Integration (ETL)",
      "OLAP Cubes",
    ],
  },

  {
    key: "other",
    left: false,
    title: "Other Professional Skills",
    skills: [
      "Clean Code Principles",
      "Performance Optimization",
      "UI/UX Fundamentals",
      "Cross-Functional Collaboration (Working with designers and backend engineers)",
      "Task-Based Development (Jira, Linear)",
    ],
  },
];
