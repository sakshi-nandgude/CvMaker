import api from "../../../api/api";
import type { SkillCategory } from "../../../types/resume";

export interface SkillRequest {
  category: string;
  name: string;
}

export const skillApi = {
  getSkills: async (): Promise<SkillCategory[]> => {
    const response = await api.get<SkillCategory[]>("/skills/");
    return response.data;
  },

  createSkill: async (
    skill: SkillRequest
  ): Promise<SkillCategory> => {
    const response = await api.post<SkillCategory>(
      "/skills/",
      skill
    );

    return response.data;
  },
};