import { SaveQueryPayload } from "@/interfaces/chat.interface";
import api from "@/lib/axios";

export async function askQuestionToBot(question: string) {
  const response = await api.post("/chat", { question });
  return response.data;
}

export const getSavedQueries = async () => {
  const res = await api.get("/chatbot/queries/id080026");
  return res.data;
};

export const saveQuery = async (payload: SaveQueryPayload) => {
  const res = await api.post("/chatbot/store", payload);
  return res.data;
};