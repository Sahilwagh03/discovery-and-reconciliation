"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "@/services/dashboard.service";
import { toast } from "sonner";

export function useDashboard(full: boolean = false) {
  const query = useQuery({
    queryKey: ["dashboard-summary", full],

    queryFn: async () => {
      try {
        return await getDashboardSummary(full);
      } catch (err: any) {
        toast.error(err.message || "Failed to load dashboard data");
        throw err;
      }
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isSuccess: query.isSuccess,
    error: query.error,
  };
}
