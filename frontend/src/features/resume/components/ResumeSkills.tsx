import type { SkillCategory } from "../../../types/resume";

interface Props {
  skills: SkillCategory[];
}

function ResumeSkills({ skills }: Props) {
  const groupedSkills = skills.reduce<
    Record<string, SkillCategory[]>
  >((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }

    acc[skill.category].push(skill);

    return acc;
  }, {});

  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b pb-1 text-xl font-bold uppercase tracking-wide">
        Technical Skills
      </h2>

      <div className="space-y-3">
        {Object.entries(groupedSkills).map(
          ([category, items]) => (
            <div key={category}>
              <span className="font-semibold">
                {category}:
              </span>{" "}
              <span>
                {items
                  .map((skill) => skill.name)
                  .join(" • ")}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default ResumeSkills;