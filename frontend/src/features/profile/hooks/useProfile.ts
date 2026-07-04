import { useQuery } from "@tanstack/react-query";
import { profileApi } from "../api/profileApi";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: profileApi.getProfile,
  });
}