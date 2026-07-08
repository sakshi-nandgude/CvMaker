import api from "../../../api/api";
import type { Experience } from "../../../types/resume";

export interface ExperienceRequest {
  company: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string;
}

export const experienceApi = {
  getExperiences: async (): Promise<Experience[]> => {
    const response = await api.get<Experience[]>(
      "/experiences/"
    );

    return response.data;
  },

  createExperience: async (
    experience: ExperienceRequest
  ): Promise<Experience> => {
    const response = await api.post<Experience>(
      "/experiences/",
      experience
    );

    return response.data;
  },
};