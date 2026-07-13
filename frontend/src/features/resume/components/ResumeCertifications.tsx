import type { Certification } from "../../../types/resume";

interface Props {
  certifications: Certification[];
}

function ResumeCertifications({
  certifications,
}: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b pb-1 text-xl font-bold uppercase tracking-wide">
        Certifications
      </h2>

      <div className="space-y-3">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            className="flex items-start justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold">
                {certification.name}
              </h3>

              <p className="text-sm text-gray-600">
                {certification.provider}
              </p>
            </div>

            <span className="text-sm whitespace-nowrap text-gray-600">
              {certification.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResumeCertifications;