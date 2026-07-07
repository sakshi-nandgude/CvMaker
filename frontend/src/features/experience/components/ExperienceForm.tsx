import { useState } from "react";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import SectionCard from "../../../components/common/SectionCard";

import { useExperiences } from "../hooks/useExperiences";
import { useCreateExperience } from "../hooks/useCreateExperience";

function ExperienceForm() {
  const { data, isLoading } = useExperiences();
  const createExperience = useCreateExperience();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    createExperience.mutate({
      company,
      role,
      location,
      start_date: startDate,
      end_date: endDate,
    });

    setCompany("");
    setRole("");
    setLocation("");
    setStartDate("");
    setEndDate("");
  };

  if (isLoading) {
    return <p>Loading experiences...</p>;
  }

  return (
    <SectionCard
      title="Experience"
      description="Manage your work experience."
    >
      <div className="space-y-5">
        <Input
          label="Company"
          value={company}
          onChange={setCompany}
        />

        <Input
          label="Role"
          value={role}
          onChange={setRole}
        />

        <Input
          label="Location"
          value={location}
          onChange={setLocation}
        />

        <Input
          label="Start Date"
          value={startDate}
          placeholder="Mar 2026"
          onChange={setStartDate}
        />

        <Input
          label="End Date"
          value={endDate}
          placeholder="Present"
          onChange={setEndDate}
        />

        <Button
          text={
            createExperience.isPending
              ? "Saving..."
              : "Save Experience"
          }
          onClick={handleSave}
        />

        <hr />

        <h3 className="text-lg font-semibold">
          Saved Experiences
        </h3>

        {data?.length === 0 && (
          <p>No experiences added yet.</p>
        )}

        {data?.map((experience) => (
          <div
            key={experience.id}
            className="rounded-lg border p-4"
          >
            <h4 className="font-semibold">
              {experience.role}
            </h4>

            <p>{experience.company}</p>

            <p>{experience.location}</p>

            <p>
              {experience.start_date} - {experience.end_date}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default ExperienceForm;