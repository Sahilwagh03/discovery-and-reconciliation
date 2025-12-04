import api from "@/lib/axios";

export async function getDashboardSummary(full: boolean = false) {
  const response = await api.get("/summary", {
    params: {
      full,
    },
  });

  return response.data;
}
