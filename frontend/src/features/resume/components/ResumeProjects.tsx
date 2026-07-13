import type { Project } from "../../../types/resume";

interface Props {
  projects: Project[];
}

function ResumeProjects({
  projects,
}: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b pb-1 text-xl font-bold uppercase tracking-wide">
        Projects
      </h2>

      {projects.map((project) => (
        <div
          key={project.id}
          className="mb-6"
        >
          <h3 className="text-base font-bold">
            {project.name}
          </h3>

          <p className="mb-3 text-sm italic text-gray-700">
            Technologies: {project.technologies}
          </p>

          <ul className="list-disc space-y-2 pl-5">
            {(project.bullets ?? []).map(
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

          {(project.github_url ||
            project.live_url) && (
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  GitHub
                </a>
              )}

              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default ResumeProjects;