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
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg font-medium text-gray-500">
          Loading Resume...
        </p>
      </div>
    );
  }

  if (!profile.data) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg font-medium text-gray-500">
          No profile found.
        </p>
      </div>
    );
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
    <div className="flex justify-center bg-gray-100 py-10">
      <div
        className="
          w-full
          max-w-[210mm]
          min-h-[297mm]
          bg-white
          px-10
          py-10
          shadow-2xl
          print:shadow-none
          print:max-w-none
          print:min-h-0
        "
      >
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

        <ResumeSummary summary={resume.summary} />

        <ResumeSkills skills={resume.skills} />

        <ResumeExperience
          experiences={resume.experience}
        />

        <ResumeProjects
          projects={resume.projects}
        />

        <ResumeEducation
          education={resume.education}
        />

        <ResumeCertifications
          certifications={resume.certifications}
        />
      </div>
    </div>
  );
}

export default ResumePreview;