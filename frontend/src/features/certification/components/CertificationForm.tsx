import { useState } from "react";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import SectionCard from "../../../components/common/SectionCard";

import { useCertifications } from "../hooks/useCertifications";
import { useCreateCertification } from "../hooks/useCreateCertification";

function CertificationForm() {
  const { data, isLoading } = useCertifications();
  const createCertification = useCreateCertification();

  const [name, setName] = useState("");
  const [provider, setProvider] = useState("");
  const [year, setYear] = useState("");

  const handleSave = () => {
    createCertification.mutate({
      name,
      provider,
      year,
    });

    setName("");
    setProvider("");
    setYear("");
  };

  if (isLoading) {
    return <p>Loading certifications...</p>;
  }

  return (
    <SectionCard
      title="Certifications"
      description="Manage your certifications."
    >
      <div className="space-y-5">
        <Input
          label="Certification Name"
          value={name}
          onChange={setName}
        />

        <Input
          label="Provider"
          value={provider}
          onChange={setProvider}
        />

        <Input
          label="Year"
          value={year}
          onChange={setYear}
        />

        <Button
          text={
            createCertification.isPending
              ? "Saving..."
              : "Save Certification"
          }
          onClick={handleSave}
        />

        <hr />

        <h3 className="text-lg font-semibold">
          Saved Certifications
        </h3>

        {data?.length === 0 && (
          <p>No certifications added yet.</p>
        )}

        {data?.map((certification) => (
          <div
            key={certification.id}
            className="rounded-lg border p-4"
          >
            <h4 className="font-semibold">
              {certification.name}
            </h4>

            <p>{certification.provider}</p>

            <p>{certification.year}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default CertificationForm;