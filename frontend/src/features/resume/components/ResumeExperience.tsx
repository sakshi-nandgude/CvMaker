import type { Experience } from "../../../types/resume";

interface Props {
  experiences: Experience[];
}

function ResumeExperience({
  experiences,
}: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b pb-1 text-xl font-bold uppercase tracking-wide">
        Professional Experience
      </h2>

      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="mb-6"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-base font-bold">
              {experience.role}
            </h3>

            <span className="text-sm font-medium whitespace-nowrap">
              {experience.start_date} – {experience.end_date}
            </span>
          </div>

          <p className="mb-3 text-sm italic text-gray-700">
            {experience.company} | {experience.location}
          </p>

          <ul className="list-disc space-y-2 pl-5">
            {(experience.bullets ?? []).map(
              (bullet, index) => (
                <li
                  key={index}
                  className="text-sm leading-6"
                >
                  {bullet}
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default ResumeExperience;