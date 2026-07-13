import { useExportResume } from "../hooks/useExportResume";

import { useResumeContext } from "../../resume/context/ResumeContext";

import { useResumeData } from "../../resume/hooks/useResumeData";

function DownloadResumeButton() {
  const exportResume = useExportResume();

  const { generatedResume } = useResumeContext();

  const {
    profile,
    experiences,
    projects,
    skills,
    education,
    certifications,
  } = useResumeData();

  const handleDownload = async () => {
    const resume = generatedResume
      ? generatedResume
      : {
          profile: {
            full_name: profile.data?.fullName,
            title: profile.data?.title,
            email: profile.data?.email,
            phone: profile.data?.phone,
            location: profile.data?.location,
            linkedin: profile.data?.linkedin,
            portfolio: profile.data?.portfolio,
            summary: profile.data?.summary,
          },
          experience: experiences.data ?? [],
          projects: projects.data ?? [],
          skills: skills.data ?? [],
          education: education.data ?? [],
          certifications: certifications.data ?? [],
        };

    exportResume.mutate(resume, {
      onSuccess: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);

        const link =
          document.createElement("a");

        link.href = url;

        link.download = "Resume.docx";

        link.click();

        window.URL.revokeObjectURL(url);
      },

      onError: () => {
        alert("Failed to export resume.");
      },
    });
  };

  return (
    <button
      onClick={handleDownload}
      disabled={exportResume.isPending}
      className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
    >
      {exportResume.isPending
        ? "Generating..."
        : "Download Resume (.docx)"}
    </button>
  );
}

export default DownloadResumeButton;