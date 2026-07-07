import { useMutation } from "@tanstack/react-query";

import { resumeApi } from "../api/resumeApi";

export function useGenerateResume() {
  return useMutation({
    mutationFn: resumeApi.generateResume,
  });
}