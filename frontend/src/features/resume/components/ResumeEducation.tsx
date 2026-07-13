import type { Education } from "../../../types/resume";

interface Props {
  education: Education[];
}

function ResumeEducation({
  education,
}: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b pb-1 text-xl font-bold uppercase tracking-wide">
        Education
      </h2>

      {education.map((item) => (
        <div
          key={item.id}
          className="mb-5"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-base font-bold">
              {item.degree}
            </h3>

            <span className="text-sm font-medium whitespace-nowrap">
              {item.start_year} – {item.end_year}
            </span>
          </div>

          <p className="text-sm text-gray-700">
            {item.university}
          </p>

          <p className="text-sm text-gray-600 italic">
            {item.location}
          </p>

          {item.grade && (
            <p className="mt-1 text-sm">
              <strong>Grade:</strong> {item.grade}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export default ResumeEducation;