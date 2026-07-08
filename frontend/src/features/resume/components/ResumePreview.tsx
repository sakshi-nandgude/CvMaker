import ResumeHeader from "./ResumeHeader";
import ResumeSummary from "./ResumeSummary";
import ResumeExperience from "./ResumeExperience";
import ResumeProjects from "./ResumeProjects";
import ResumeSkills from "./ResumeSkills";
import ResumeEducation from "./ResumeEducation";
import ResumeCertifications from "./ResumeCertifications";

import { useResumeContext } from "../context/ResumeContext";
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

  const { generatedResume } = useResumeContext();

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

  const resume = generatedResume
    ? {
        profile: generatedResume.profile,
        summary: generatedResume.profile.summary,
        experience: generatedResume.experience,
        projects: generatedResume.projects,
        skills: generatedResume.skills,
        education: generatedResume.education,
        certifications: generatedResume.certifications,
      }
    : {
        profile: {
          full_name: profile.data.fullName,
          title: profile.data.title,
          email: profile.data.email,
          phone: profile.data.phone,
          location: profile.data.location,
          linkedin: profile.data.linkedin,
          portfolio: profile.data.portfolio,
          summary: profile.data.summary,
        },
        summary: profile.data.summary,
        experience: experiences.data ?? [],
        projects: projects.data ?? [],
        skills: skills.data ?? [],
        education: education.data ?? [],
        certifications: certifications.data ?? [],
      };

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow-lg">
      <ResumeHeader
        profile={{
          fullName: resume.profile.full_name,
          title: resume.profile.title,
          email: resume.profile.email,
          phone: resume.profile.phone,
          location: resume.profile.location,
          linkedin: resume.profile.linkedin,
          portfolio: resume.profile.portfolio,
          summary: resume.profile.summary,
        }}
      />

      <ResumeSummary
        summary={resume.summary}
      />

      <ResumeExperience
        experiences={resume.experience}
      />

      <ResumeProjects
        projects={resume.projects}
      />

      <ResumeSkills
        skills={resume.skills}
      />

      <ResumeEducation
        education={resume.education}
      />

      <ResumeCertifications
        certifications={resume.certifications}
      />
    </div>
  );
}

export default ResumePreview;