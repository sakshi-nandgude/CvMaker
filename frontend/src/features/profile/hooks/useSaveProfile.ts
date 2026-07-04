import { useMutation, useQueryClient } from "@tanstack/react-query";

import { profileApi } from "../api/profileApi";

export function useSaveProfile() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: profileApi.saveProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },

  });

}