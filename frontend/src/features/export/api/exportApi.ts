import api from "../../../api/api";
import type { GeneratedResume } from "../../../types/resume";

export const exportApi = {
  downloadResume: async (
    resume: GeneratedResume
  ): Promise<Blob> => {
    const response = await api.post(
      "/export/docx",
      resume,
      {
        responseType: "blob",
      }
    );

    return response.data;
  },
};