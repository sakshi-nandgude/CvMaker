import api from "./api";
import type {
  PersonalProfile,
} from "../types/resume";


export async function getProfile() {
  const response = await api.get<PersonalProfile>("/profile/");
  return response.data;
}

export async function saveProfile(
  profile: PersonalProfile
) {
  const response = await api.put(
    "/profile/",
    profile
  );

  return response.data;
}