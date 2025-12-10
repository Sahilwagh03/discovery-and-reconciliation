"use client";

import { SaveQueryPayload, SavedQuery, executeQueryPayload } from "@/interfaces/chat.interface";
import {
  getSavedQueries,
  saveQuery,
  deleteQuery,
  editQuery,
  executeQuery,
} from "@/services/chat.service";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSaveQuery = () => {
  const queryClient = useQueryClient();

  const savedQueriesQuery = useQuery({
    queryKey: ["saved-queries"],
    queryFn: getSavedQueries,
  });

  const saveQueryMutation = useMutation({
    mutationFn: (data: SavedQuery) => saveQuery(data),
    onSuccess: (data) => {
      toast.success(data.message || "Query saved successfully");
      queryClient.invalidateQueries({ queryKey: ["saved-queries"] });
    },
    onError: () => {
      toast.error("Failed to save query");
    },
  });

  const deleteQueryMutation = useMutation({
    mutationFn: (id: string) => deleteQuery(id),
    onSuccess: () => {
      toast.success("Query deleted");
      queryClient.invalidateQueries({ queryKey: ["saved-queries"] });
    },
    onError: () => {
      toast.error("Failed to delete query");
    },
  });

  const editQueryMutation = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: Partial<SavedQuery>;
    }) => editQuery(id, payload),
    onSuccess: () => {
      toast.success("Query updated");
      queryClient.invalidateQueries({ queryKey: ["saved-queries"] });
    },
    onError: () => {
      toast.error("Failed to update query");
    },
  });

  const executeQueryMutation = useMutation({
    mutationFn: (payload:executeQueryPayload) => executeQuery(payload),
    onError: () => {
      toast.error("Failed to execute query");
    },
  });

  return {
    savedQueries: savedQueriesQuery.data,
    isLoadingSaved: savedQueriesQuery.isLoading,

    saveQuery: saveQueryMutation.mutate,
    isSaving: saveQueryMutation.isPending,

    deleteQuery: deleteQueryMutation.mutate,
    isDeleting: deleteQueryMutation.isPending,

    editQuery: editQueryMutation.mutate,
    isEditing: editQueryMutation.isPending,

    executeQuery: executeQueryMutation.mutateAsync,
    isExecuting: executeQueryMutation.isPending,
  };
};
