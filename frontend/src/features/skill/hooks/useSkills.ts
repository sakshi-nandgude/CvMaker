import { useQuery } from "@tanstack/react-query";
import { skillApi } from "../api/skillApi";

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: skillApi.getSkills,
  });
}