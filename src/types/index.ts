export interface WebProject {
  kind: "web";
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "AI" | "Web App" | "Dashboard";
  technologies: string[];
  features: string[];
  developmentProcess: string[];
  challenges: string[];
  solutions: string[];
  conclusion: string;
  githubUrl: string;
  liveUrl: string;
  bannerImage: string;
  gallery: string[];
  featured: boolean;
}

export interface MechanicalProject {
  kind: "mechanical";
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "Robotics" | "Instrumentation";
  toolsUsed: string[];
  objectives: string[];
  methodology: string[];
  workingPrinciple: string;
  specifications: { label: string; value: string }[];
  outcomes: string[];
  conclusion: string;
  bannerImage: string;
  gallery: string[];
  featured: boolean;
}

export type Project = WebProject | MechanicalProject;

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategoryData {
  title: string;
  skills: Skill[];
}

export type ExperienceType = "education" | "internship" | "learning" | "goal";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  duration: string;
  description: string;
  current?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
