import api from "../../../api/api";
import type { GeneratedResume } from "../../../types/resume";

interface GenerateResumeRequest {
  job_description: string;
}

export const resumeApi = {
  generateResume: async (
    request: GenerateResumeRequest
  ): Promise<GeneratedResume> => {
    const response = await api.post(
      "/resume/generate",
      request
    );

    return response.data;
  },
};