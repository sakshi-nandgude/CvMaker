import { useMutation, useQueryClient } from "@tanstack/react-query";

import { experienceApi } from "../../experience/api/experienceApi";

export function useCreateExperience() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: experienceApi.createExperience,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["experiences"],
      });
    },
  });
}