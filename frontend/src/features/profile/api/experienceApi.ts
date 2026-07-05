import api from "../../../services/api";

export interface ExperienceRequest {
  company: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string;
}

export const experienceApi = {
  getExperiences: async () => {
    const response = await api.get("/experiences/");
    return response.data;
  },

  createExperience: async (
    experience: ExperienceRequest
  ) => {
    const response = await api.post(
      "/experiences/",
      experience
    );

    return response.data;
  },
};