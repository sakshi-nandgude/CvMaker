import { useState } from "react";

import Button from "../../../components/common/Button";
import SectionCard from "../../../components/common/SectionCard";
import TextArea from "../../../components/common/TextArea";
import { useGenerateResume } from "../../resume/hooks/useGenerateResume";
import { useResumeContext } from "../../resume/context/ResumeContext";

function JobDescriptionForm() {
  const [jobDescription, setJobDescription] = useState("");
  const generateResume = useGenerateResume();
  const { setGeneratedResume } =
    useResumeContext();

  const handleSave = () => {
    generateResume.mutate(
  {
    job_description: jobDescription,
  },
  {
    onSuccess: (data) => {
      setGeneratedResume(data);
    },
  }
);
  };

  return (
    <SectionCard
      title="Job Description"
      description="Paste the job description you want to tailor your resume for."
    >
      <div className="space-y-5">
        <TextArea
          label="Job Description"
          value={jobDescription}
          onChange={setJobDescription}
        />

        <Button
          text="Save Job Description"
          onClick={handleSave}
        />
      </div>
    </SectionCard>
  );
}

export default JobDescriptionForm;