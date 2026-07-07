import api from "../../../api/api";
import type { PersonalProfile } from "../../../types/resume";

interface ProfileApiResponse {
  full_name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  summary: string;
}

export const profileApi = {
  getProfile: async (): Promise<PersonalProfile> => {
    const response = await api.get<ProfileApiResponse>("/profile/");

    return {
      fullName: response.data.full_name,
      title: response.data.title,
      email: response.data.email,
      phone: response.data.phone,
      location: response.data.location,
      linkedin: response.data.linkedin,
      portfolio: response.data.portfolio,
      summary: response.data.summary,
    };
  },

  saveProfile: async (
    profile: PersonalProfile
  ): Promise<PersonalProfile> => {
    const response = await api.put<ProfileApiResponse>(
      "/profile/",
      {
        full_name: profile.fullName,
        title: profile.title,
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
        linkedin: profile.linkedin,
        portfolio: profile.portfolio,
        summary: profile.summary,
      }
    );

    return {
      fullName: response.data.full_name,
      title: response.data.title,
      email: response.data.email,
      phone: response.data.phone,
      location: response.data.location,
      linkedin: response.data.linkedin,
      portfolio: response.data.portfolio,
      summary: response.data.summary,
    };
  },
};