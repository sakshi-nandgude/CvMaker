import { useExperiences } from "../hooks/useExperiences";

function ExperienceForm() {
  const { data, isLoading, isError } = useExperiences();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Failed to load experiences.</p>;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Experience
      </h1>

      {data?.length === 0 && (
        <p>No experience added yet.</p>
      )}

      {data?.map((experience) => (
        <div
          key={experience.id}
          className="mb-4 rounded-lg border p-4"
        >
          <h2 className="text-xl font-semibold">
            {experience.role}
          </h2>

          <p>{experience.company}</p>

          <p>{experience.location}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceForm;