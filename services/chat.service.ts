import { SaveQueryPayload, SavedQuery, executeQueryPayload } from "@/interfaces/chat.interface";
import api from "@/lib/axios";

export async function askQuestionToBot(question: string) {
  const response = await api.post("/chat", { question });
  return response.data;
}

export const getSavedQueries = async () => {
  const res = await api.get("/chatbot/queries/id080026");
  return res.data;
};

export const saveQuery = async (payload: SavedQuery) => {
  const res = await api.post("/chatbot/store", payload);
  return res.data;
};

export const executeQuery = async (payload:executeQueryPayload) => {
  const res = await api.post("/execute-query", payload);
  return res.data;
};

export const deleteQuery = async (queryId: string) => {
  const res = await api.delete(`/chatbot/queries/${queryId}`);
  return res.data;
};

export const editQuery = async (queryId: string, payload: Partial<SavedQuery>) => {
  const res = await api.patch(`/chatbot/queries/${queryId}`, payload);
  return res.data;
};
