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

          <p className="mb-2 text-sm text-gray-600">
            {project.technologies}
          </p>

          <ul className="ml-5 list-disc space-y-1">
            {project.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-blue-600"
            >
              GitHub
            </a>
          )}
        </div>
      ))}
    </section>
  );
}

export default ResumeProjects;