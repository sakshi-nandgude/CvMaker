import { useState } from "react";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import SectionCard from "../../../components/common/SectionCard";

import { useProjects } from "../hooks/useProjects";
import { useCreateProject } from "../hooks/useCreateProject";

function ProjectForm() {
  const { data, isLoading } = useProjects();
  const createProject = useCreateProject();

  const [name, setName] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");

  const handleSave = () => {
    createProject.mutate({
      name,
      technologies,
      github_url: githubUrl,
      live_url: liveUrl,
    });

    setName("");
    setTechnologies("");
    setGithubUrl("");
    setLiveUrl("");
  };

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  return (
    <SectionCard
      title="Projects"
      description="Manage your projects."
    >
      <div className="space-y-5">

        <Input
          label="Project Name"
          value={name}
          onChange={setName}
        />

        <Input
          label="Technologies"
          value={technologies}
          placeholder="React, FastAPI, PostgreSQL"
          onChange={setTechnologies}
        />

        <Input
          label="GitHub URL"
          value={githubUrl}
          onChange={setGithubUrl}
        />

        <Input
          label="Live URL"
          value={liveUrl}
          onChange={setLiveUrl}
        />

        <Button
          text={
            createProject.isPending
              ? "Saving..."
              : "Save Project"
          }
          onClick={handleSave}
        />

        <hr />

        <h3 className="text-lg font-semibold">
          Saved Projects
        </h3>

        {data?.length === 0 && (
          <p>No projects added yet.</p>
        )}

        {data?.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border p-4"
          >
            <h4 className="font-semibold">
              {project.name}
            </h4>

            <p>{project.technologies}</p>

            <p>{project.github_url}</p>

            <p>{project.live_url}</p>
          </div>
        ))}

      </div>
    </SectionCard>
  );
}

export default ProjectForm;