import { useState } from "react";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import SectionCard from "../../../components/common/SectionCard";

import { useSkills } from "../hooks/useSkills";
import { useCreateSkill } from "../hooks/useCreateSkill";

function SkillForm() {
  const { data, isLoading } = useSkills();
  const createSkill = useCreateSkill();

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  const handleSave = () => {
    createSkill.mutate({
      category,
      name,
    });

    setCategory("");
    setName("");
  };

  if (isLoading) {
    return <p>Loading skills...</p>;
  }

  return (
    <SectionCard
      title="Skills"
      description="Manage your skills."
    >
      <div className="space-y-5">
        <Input
          label="Category"
          value={category}
          onChange={setCategory}
        />

        <Input
          label="Skill"
          value={name}
          onChange={setName}
        />

        <Button
          text={
            createSkill.isPending
              ? "Saving..."
              : "Save Skill"
          }
          onClick={handleSave}
        />

        <hr />

        <h3 className="text-lg font-semibold">
          Saved Skills
        </h3>

        {data?.length === 0 && (
          <p>No skills added yet.</p>
        )}

        {data?.map((skill) => (
          <div
            key={skill.id}
            className="rounded-lg border p-4"
          >
            <h4 className="font-semibold">
              {skill.category}
            </h4>

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default SkillForm;