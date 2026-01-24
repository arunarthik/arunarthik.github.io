export type IconType = 'code' | 'layers' | 'settings' | 'database' | 'cpu' | 'cloud';

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  summaryPoints: string[];
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  tech?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}