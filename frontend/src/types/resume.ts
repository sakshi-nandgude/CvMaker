
export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  id?: number;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  technologies: string[];
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  location: string;
  startYear: string;
  endYear: string;
  grade: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  year: string;
}

export interface PersonalProfile {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    portfolio: string;
    summary: string;
}