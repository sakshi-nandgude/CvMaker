import api from "../../../api/api";

export interface GenerateResumeRequest {
  job_description: string;
}

export const resumeApi = {
  generateResume: async (
    request: GenerateResumeRequest
  ) => {
    const response = await api.post(
      "/resume/generate",
      request
    );

    return response.data;
  },
};