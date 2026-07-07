import type { Education } from "../../../types/resume";

interface Props {
  education: Education[];
}

function ResumeEducation({ education }: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 border-b pb-1 text-xl font-bold uppercase">
        Education
      </h2>

      {education.map((item) => (
        <div
          key={item.id}
          className="mb-5"
        >
          <div className="flex justify-between">
            <h3 className="font-bold">
              {item.degree}
            </h3>

            <span>
              {item.start_year} - {item.end_year}
            </span>
          </div>

          <p>
            {item.university}
          </p>

          <p>{item.location}</p>

          <p>Grade: {item.grade}</p>
        </div>
      ))}
    </section>
  );
}

export default ResumeEducation;