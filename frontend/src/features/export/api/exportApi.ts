import api from "../../../api/api";

export const exportApi = {
  downloadResume: async (resume: unknown) => {
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