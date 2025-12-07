"use client";

import { SaveQueryPayload } from "@/interfaces/chat.interface";
import { getSavedQueries, saveQuery } from "@/services/chat.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSaveQuery = () => {
  const queryClient = useQueryClient();

  const savedQueriesQuery = useQuery({
    queryKey: ["saved-queries"],
    queryFn: getSavedQueries,
  });

  const saveQueryMutation = useMutation({
    mutationFn: (data: SaveQueryPayload) => saveQuery(data),
    
    onSuccess: (data) => {
      toast.success(data.message || "Query saved successfully");
      queryClient.invalidateQueries({ queryKey: ["saved-queries"] });
    },

    onError: () => {
      toast.error("Failed to save query");
    },
  });

  return {
    savedQueries: savedQueriesQuery.data,
    isLoadingSaved: savedQueriesQuery.isLoading,
    saveQuery: saveQueryMutation.mutate,
    isSaving: saveQueryMutation.isPending,
  };
};
