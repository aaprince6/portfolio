export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "web" | "java" | "embedded" | "teaching" | "gaming";
  techStack: string[];
  image: string;
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  tags: string[];
  problem?: string;
  challenge?: string;
  learning?: string;
  results?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "embedded" | "tools" | "soft" | "content";
  proficiency: number;
  level: "Advanced" | "Intermediate" | "Beginner" | "Experienced" | "Comfortable" | "Learning";
  icon?: string;
  color?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  category: "tutorial" | "project" | "thoughts" | "gaming";
  readTime: string;
  coverImage?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
  type: "education" | "work" | "freelance" | "project" | "leadership";
  logo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export interface Achievement {
  label: string;
  value: string;
  icon: string;
}

export const THEMES: Record<string, ThemeColors> = {
  cyberpunk: {
    primary: "#00ff88", secondary: "#ff006e", accent: "#3a86ff",
    background: "#0a0a0f", surface: "#12121a", text: "#e8e8e8",
    textMuted: "#888899", border: "#2a2a3a",
  },
  matrix: {
    primary: "#00ff41", secondary: "#00cc33", accent: "#ffff00",
    background: "#000000", surface: "#0a0a0a", text: "#00ff41",
    textMuted: "#008811", border: "#003300",
  },
  synthwave: {
    primary: "#ff00ff", secondary: "#00ffff", accent: "#ffaa00",
    background: "#1a0033", surface: "#2a0044", text: "#ffe4ff",
    textMuted: "#aa88bb", border: "#440066",
  },
  light: {
    primary: "#2563eb", secondary: "#d946ef", accent: "#0891b2",
    background: "#ffffff", surface: "#f1f5f9", text: "#0f172a",
    textMuted: "#64748b", border: "#cbd5e1",
  },
  dark: {
    primary: "#38bdf8", secondary: "#a78bfa", accent: "#34d399",
    background: "#0b1121", surface: "#1e293b", text: "#e2e8f0",
    textMuted: "#94a3b8", border: "#334155",
  },
};
