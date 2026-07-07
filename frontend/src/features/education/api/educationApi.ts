import api from "../../../api/api";
import type { Education } from "../../../types/resume";

export interface EducationRequest {
  degree: string;
  university: string;
  location: string;
  start_year: string;
  end_year: string;
  grade: string;
}

export const educationApi = {
  getEducation: async (): Promise<Education[]> => {
    const response = await api.get<Education[]>("/education/");
    return response.data;
  },

  createEducation: async (
    education: EducationRequest
  ): Promise<Education> => {
    const response = await api.post<Education>(
      "/education/",
      education
    );

    return response.data;
  },
};