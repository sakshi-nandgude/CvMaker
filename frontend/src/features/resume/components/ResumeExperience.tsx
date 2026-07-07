import type { Experience } from "../../../types/resume";

interface Props {
  experiences: Experience[];
}

function ResumeExperience({ experiences }: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 border-b pb-1 text-xl font-bold uppercase">
        Experience
      </h2>

      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="mb-6"
        >
          <div className="flex justify-between">
            <h3 className="font-bold">
              {experience.role}
            </h3>

            <span>
              {experience.start_date} - {experience.end_date}
            </span>
          </div>

          <p className="italic">
            {experience.company} • {experience.location}
          </p>
        </div>
      ))}
    </section>
  );
}

export default ResumeExperience;