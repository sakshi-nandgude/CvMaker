import { useProfile } from "../../profile/hooks/useProfile";
import { useExperiences } from "../../experience/hooks/useExperiences";
import { useProjects } from "../../project/hooks/useProjects";
import { useSkills } from "../../skill/hooks/useSkills";
import { useEducation } from "../../education/hooks/useEducation";
import { useCertifications } from "../../certification/hooks/useCertifications";

export function useResumeData() {
  const profile = useProfile();
  const experiences = useExperiences();
  const projects = useProjects();
  const skills = useSkills();
  const education = useEducation();
  const certifications = useCertifications();

  return {
    profile,
    experiences,
    projects,
    skills,
    education,
    certifications,
  };
}