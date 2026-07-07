import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectApi } from "../api/projectApi";

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: projectApi.createProject,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}