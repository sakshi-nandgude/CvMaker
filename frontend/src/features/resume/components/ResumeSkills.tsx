import type { SkillCategory } from "../../../types/resume";

interface Props {
  skills: SkillCategory[];
}

function ResumeSkills({ skills }: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 border-b pb-1 text-xl font-bold uppercase">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="rounded bg-gray-200 px-3 py-1"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ResumeSkills;