import api from "../../../api/api";
import type { Certification } from "../../../types/resume";

export interface CertificationRequest {
  name: string;
  provider: string;
  year: string;
}

export const certificationApi = {
  getCertifications: async (): Promise<Certification[]> => {
    const response = await api.get<Certification[]>("/certifications/");
    return response.data;
  },

  createCertification: async (
    certification: CertificationRequest
  ): Promise<Certification> => {
    const response = await api.post<Certification>(
      "/certifications/",
      certification
    );

    return response.data;
  },
};