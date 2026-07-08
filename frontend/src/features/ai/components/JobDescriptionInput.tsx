import { useState } from "react";

import Button from "../../../components/common/Button";
import TextArea from "../../../components/common/TextArea";

interface Props {
  onGenerate: (jobDescription: string) => void;
  loading: boolean;
}

function JobDescriptionInput({
  onGenerate,
  loading,
}: Props) {
  const [jobDescription, setJobDescription] =
    useState("");

  return (
    <div className="rounded-lg border bg-white p-6 shadow">
      <TextArea
        label="Job Description"
        value={jobDescription}
        onChange={setJobDescription}
        placeholder="Paste the job description here..."
        rows={12}
      />

      <div className="mt-6">
        <Button
          text={
            loading
              ? "Generating Resume..."
              : "Generate Resume"
          }
          onClick={() =>
            onGenerate(jobDescription)
          }
        />
      </div>
    </div>
  );
}

export default JobDescriptionInput;