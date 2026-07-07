import api from "../../../api/api";
import type { Project } from "../../../types/resume";

export interface ProjectRequest {
  name: string;
  technologies: string;
  github_url: string;
  live_url: string;
}

export const projectApi = {
  getProjects: async (): Promise<Project[]> => {
    const response = await api.get<Project[]>("/projects/");
    return response.data;
  },

  createProject: async (
    project: ProjectRequest
  ): Promise<Project> => {
    const response = await api.post<Project>(
      "/projects/",
      project
    );

    return response.data;
  },
};