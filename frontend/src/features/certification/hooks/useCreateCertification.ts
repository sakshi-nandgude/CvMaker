import { useMutation, useQueryClient } from "@tanstack/react-query";
import { certificationApi } from "../api/certificationApi";

export function useCreateCertification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: certificationApi.createCertification,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["certifications"],
      });
    },
  });
}