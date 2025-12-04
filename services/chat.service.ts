import api from "@/lib/axios";

export async function askQuestionToBot(question: string) {
  const response = await api.post("/chat", { question });
  return response.data;
}