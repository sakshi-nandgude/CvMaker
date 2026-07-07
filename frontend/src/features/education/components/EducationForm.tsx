import { useState } from "react";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import SectionCard from "../../../components/common/SectionCard";

import { useEducation } from "../hooks/useEducation";
import { useCreateEducation } from "../hooks/useCreateEducation";

function EducationForm() {
  const { data, isLoading } = useEducation();
  const createEducation = useCreateEducation();

  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [location, setLocation] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [grade, setGrade] = useState("");

  const handleSave = () => {
    createEducation.mutate({
      degree,
      university,
      location,
      start_year: startYear,
      end_year: endYear,
      grade,
    });

    setDegree("");
    setUniversity("");
    setLocation("");
    setStartYear("");
    setEndYear("");
    setGrade("");
  };

  if (isLoading) {
    return <p>Loading education...</p>;
  }

  return (
    <SectionCard
      title="Education"
      description="Manage your education history."
    >
      <div className="space-y-5">
        <Input
          label="Degree"
          value={degree}
          onChange={setDegree}
        />

        <Input
          label="University"
          value={university}
          onChange={setUniversity}
        />

        <Input
          label="Location"
          value={location}
          onChange={setLocation}
        />

        <Input
          label="Start Year"
          value={startYear}
          onChange={setStartYear}
        />

        <Input
          label="End Year"
          value={endYear}
          onChange={setEndYear}
        />

        <Input
          label="Grade"
          value={grade}
          onChange={setGrade}
        />

        <Button
          text={
            createEducation.isPending
              ? "Saving..."
              : "Save Education"
          }
          onClick={handleSave}
        />

        <hr />

        <h3 className="text-lg font-semibold">
          Saved Education
        </h3>

        {data?.length === 0 && (
          <p>No education records added yet.</p>
        )}

        {data?.map((education) => (
          <div
            key={education.id}
            className="rounded-lg border p-4"
          >
            <h4 className="font-semibold">
              {education.degree}
            </h4>

            <p>{education.university}</p>

            <p>{education.location}</p>

            <p>
              {education.start_year} - {education.end_year}
            </p>

            <p>Grade: {education.grade}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default EducationForm;