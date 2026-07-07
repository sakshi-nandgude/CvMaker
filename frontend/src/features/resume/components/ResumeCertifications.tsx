import type { Certification } from "../../../types/resume";

interface Props {
  certifications: Certification[];
}

function ResumeCertifications({
  certifications,
}: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 border-b pb-1 text-xl font-bold uppercase">
        Certifications
      </h2>

      {certifications.map((certification) => (
        <div
          key={certification.id}
          className="mb-3"
        >
          <strong>{certification.name}</strong>

          <div>
            {certification.provider}
          </div>

          <div>
            {certification.year}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ResumeCertifications;