import { useQuery } from "@tanstack/react-query";
import { experienceApi } from "../api/experienceApi";

export function useExperiences() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: experienceApi.getExperiences,
  });
}