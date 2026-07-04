import Button from "../../../components/common/Button";
import SectionCard from "../../../components/common/SectionCard";

function ExperienceSection() {
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
        />

      </div>
    </SectionCard>
  );
}

export default ExperienceSection;