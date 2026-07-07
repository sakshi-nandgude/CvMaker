
export interface SkillCategory {
  id?: number;
  category: string;
  name: string;
}

export interface Experience {
  id?: number;

  company: string;
  role: string;
  location: string;

  start_date: string;
  end_date: string;

  bullets: string[];
}

export interface Project {
  id?: number;
  name: string;
  technologies: string;
  github_url: string;
  live_url: string;
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