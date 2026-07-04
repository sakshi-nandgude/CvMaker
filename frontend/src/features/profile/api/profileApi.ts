import api from "../../../services/api";
import type { PersonalProfile } from "../../../types/resume";

export const profileApi = {
  getProfile: async () => {
    const response = await api.get<PersonalProfile>("/profile/");
    return response.data;
  },

  saveProfile: async (profile: PersonalProfile) => {
    const response = await api.put<PersonalProfile>("/profile/", profile);
    return response.data;
  },
};