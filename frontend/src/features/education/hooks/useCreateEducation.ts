import { useMutation, useQueryClient } from "@tanstack/react-query";
import { educationApi } from "../api/educationApi";

export function useCreateEducation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: educationApi.createEducation,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["education"],
      });
    },
  });
}