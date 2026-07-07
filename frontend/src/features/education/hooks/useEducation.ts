import { useQuery } from "@tanstack/react-query";
import { educationApi } from "../api/educationApi";

export function useEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: educationApi.getEducation,
  });
}