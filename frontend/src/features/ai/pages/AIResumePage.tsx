import JobDescriptionInput from "../components/JobDescriptionInput";

import ResumePreview from "../../resume/components/ResumePreview";

import { useGenerateResume } from "../hooks/useGenerateResume";

import { useResumeContext } from "../../resume/context/ResumeContext";

import DownloadResumeButton from "../../export/components/DownloadResumeButton";

function AIResumePage() {
  const generateResume = useGenerateResume();

  const { setGeneratedResume } = useResumeContext();

  const handleGenerateResume = (
    jobDescription: string
  ) => {
    generateResume.mutate(
      {
        job_description: jobDescription,
      },
      {
        onSuccess: (data) => {
  console.log("AI Response:", data);
  setGeneratedResume(data);
},

        onError: (error) => {
          console.error(error);
          alert("Failed to generate resume.");
        },
      }
    );
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          AI Resume Generator
        </h1>

        <p className="mt-2 text-gray-600">
          Paste a job description and generate a tailored
          resume.
        </p>
      </div>

      <JobDescriptionInput
        onGenerate={handleGenerateResume}
        loading={generateResume.isPending}
      />

      <ResumePreview />
      <div className="flex justify-end">
    <DownloadResumeButton />
</div>
    </div>

    
  );
}

export default AIResumePage;