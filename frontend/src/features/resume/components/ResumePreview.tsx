import ResumeHeader from "./ResumeHeader";
import ResumeSummary from "./ResumeSummary";
import ResumeExperience from "./ResumeExperience";
import ResumeProjects from "./ResumeProjects";
import ResumeSkills from "./ResumeSkills";
import ResumeEducation from "./ResumeEducation";
import ResumeCertifications from "./ResumeCertifications";

import { useResumeData } from "../hooks/useResumeData";

function ResumePreview() {
  const {
    profile,
    experiences,
    projects,
    skills,
    education,
    certifications,
  } = useResumeData();

  if (
    profile.isLoading ||
    experiences.isLoading ||
    projects.isLoading ||
    skills.isLoading ||
    education.isLoading ||
    certifications.isLoading
  ) {
    return <p>Loading Resume...</p>;
  }

  if (!profile.data) {
    return <p>No profile found.</p>;
  }

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow-lg">
      <ResumeHeader profile={profile.data} />

      <ResumeSummary
        summary={profile.data.summary}
      />

      <ResumeExperience
        experiences={experiences.data ?? []}
      />

      <ResumeProjects
        projects={projects.data ?? []}
      />

      <ResumeSkills
        skills={skills.data ?? []}
      />

      <ResumeEducation
  education={education.data ?? []}
/>

<ResumeCertifications
  certifications={certifications.data ?? []}
/>
    </div>
  );
}

export default ResumePreview;