import type { Project } from "../../../types/resume";

interface Props {
  projects: Project[];
}

function ResumeProjects({ projects }: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 border-b pb-1 text-xl font-bold uppercase">
        Projects
      </h2>

      {projects.map((project) => (
        <div
          key={project.id}
          className="mb-5"
        >
          <h3 className="font-bold">
            {project.name}
          </h3>

          <p>{project.technologies}</p>

          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

export default ResumeProjects;