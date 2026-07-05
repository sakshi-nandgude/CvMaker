import { useState } from "react";

import Button from "../../../components/common/Button";
import SectionCard from "../../../components/common/SectionCard";

import ExperienceForm from "./ExperienceForm";

function ExperienceSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <SectionCard
      title="Professional Experience"
      description="Manage your work experience."
    >
      <div className="space-y-4">

        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            No experience added
          </h3>

          <p className="text-sm text-gray-500">
            Click the button below to add your first experience.
          </p>
        </div>

        <Button
          text="+ Add Experience"
          onClick={() => setShowForm(!showForm)}
        />

        {showForm && <ExperienceForm />}

      </div>
    </SectionCard>
  );
}

export default ExperienceSection;