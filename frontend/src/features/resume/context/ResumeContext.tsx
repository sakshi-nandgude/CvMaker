import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface ResumeProfile {
  full_name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  summary: string;
}

export interface ResumeExperience {
  id: number;
  company: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string;
  bullets: string[];
}

export interface ResumeProject {
  id: number;
  name: string;
  technologies: string;
  github_url: string;
  live_url: string;
}

export interface ResumeSkill {
  id: number;
  category: string;
  name: string;
}

export interface ResumeEducation {
  id: number;
  degree: string;
  university: string;
  location: string;
  start_year: string;
  end_year: string;
  grade: string;
}

export interface ResumeCertification {
  id: number;
  name: string;
  provider: string;
  year: string;
}

export interface GeneratedResume {
  profile: ResumeProfile;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: ResumeSkill[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
}

interface ResumeContextType {
  generatedResume: GeneratedResume | null;
  setGeneratedResume: (
    resume: GeneratedResume | null
  ) => void;
}

const ResumeContext =
  createContext<ResumeContextType | null>(null);

export function ResumeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [generatedResume, setGeneratedResume] =
    useState<GeneratedResume | null>(null);

  return (
    <ResumeContext.Provider
      value={{
        generatedResume,
        setGeneratedResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResumeContext() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      "useResumeContext must be used inside ResumeProvider"
    );
  }

  return context;
}