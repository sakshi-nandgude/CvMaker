import { useMutation } from "@tanstack/react-query";

import { exportApi } from "../api/exportApi";

export function useExportResume() {
  return useMutation({
    mutationFn: exportApi.downloadResume,
  });
}