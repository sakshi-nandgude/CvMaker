import { useMutation, useQueryClient } from "@tanstack/react-query";
import { skillApi } from "../api/skillApi";

export function useCreateSkill() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: skillApi.createSkill,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["skills"],
      });
    },
  });
}