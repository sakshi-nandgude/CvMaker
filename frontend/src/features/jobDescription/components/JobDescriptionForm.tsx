import { useState } from "react";

import Button from "../../../components/common/Button";
import SectionCard from "../../../components/common/SectionCard";
import TextArea from "../../../components/common/TextArea";

function JobDescriptionForm() {
  const [jobDescription, setJobDescription] = useState("");

  const handleSave = () => {
    console.log(jobDescription);
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