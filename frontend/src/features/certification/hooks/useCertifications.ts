import { useQuery } from "@tanstack/react-query";
import { certificationApi } from "../api/certificationApi";

export function useCertifications() {
  return useQuery({
    queryKey: ["certifications"],
    queryFn: certificationApi.getCertifications,
  });
}