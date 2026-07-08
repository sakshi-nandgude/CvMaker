import type { GeneratedResume } from "../../../types/resume";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";


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