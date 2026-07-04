import { useState } from "react";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import SectionCard from "../../../components/common/SectionCard";

function ExperienceForm() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bullets, setBullets] = useState<string[]>([""]);

  return (
    <SectionCard
      title="Add Experience"
      description="Enter your work experience."
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
          placeholder="Jan 2024"
          onChange={setStartDate}
        />

        <Input
          label="End Date"
          value={endDate}
          placeholder="Present"
          onChange={setEndDate}
        />

        <div className="space-y-4">

  <label className="block font-medium">
    Responsibilities
  </label>

  {bullets.map((bullet, index) => (
    <Input
      key={index}
      label={`Bullet ${index + 1}`}
      value={bullet}
      onChange={(value) => {
        const updated = [...bullets];
        updated[index] = value;
        setBullets(updated);
      }}
    />
  ))}

  <Button
    text="+ Add Bullet"
    onClick={() =>
      setBullets([...bullets, ""])
    }
  />

</div>

        <Button
          text="Save Experience"
        />

      </div>
    </SectionCard>
  );
}

export default ExperienceForm;