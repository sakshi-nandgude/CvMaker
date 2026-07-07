import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: projectApi.getProjects,
  });
}