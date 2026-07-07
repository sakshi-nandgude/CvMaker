import { useResumeData } from "../hooks/useResumeData";

function ResumePreview() {
  const {
    profile,
    experiences,
    projects,
    skills,
    education,
    certifications,
  } = useResumeData();

  if (
    profile.isLoading ||
    experiences.isLoading ||
    projects.isLoading ||
    skills.isLoading ||
    education.isLoading ||
    certifications.isLoading
  ) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow">

      <h1 className="text-4xl font-bold">
        {profile.data?.fullName}
      </h1>

      <p>{profile.data?.title}</p>

      <hr className="my-6" />

      <h2 className="mb-3 text-2xl font-bold">
        Experience
      </h2>

      {experiences.data?.map((experience) => (
        <div key={experience.id}>
          <strong>{experience.role}</strong>

          <div>{experience.company}</div>
        </div>
      ))}

      <hr className="my-6" />

      <h2 className="mb-3 text-2xl font-bold">
        Projects
      </h2>

      {projects.data?.map((project) => (
        <div key={project.id}>
          {project.name}
        </div>
      ))}

      <hr className="my-6" />

      <h2 className="mb-3 text-2xl font-bold">
        Skills
      </h2>

      {skills.data?.map((skill) => (
        <div key={skill.id}>
          {skill.category}: {skill.name}
        </div>
      ))}

      <hr className="my-6" />

      <h2 className="mb-3 text-2xl font-bold">
        Education
      </h2>

      {education.data?.map((item) => (
        <div key={item.id}>
          {item.degree}
        </div>
      ))}

      <hr className="my-6" />

      <h2 className="mb-3 text-2xl font-bold">
        Certifications
      </h2>

      {certifications.data?.map((cert) => (
        <div key={cert.id}>
          {cert.name}
        </div>
      ))}

    </div>
  );
}

export default ResumePreview;