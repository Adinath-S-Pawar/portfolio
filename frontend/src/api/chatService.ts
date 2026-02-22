import axios from "axios";
import { ChatRequest, ChatResponse, Message } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const sendMessage = async (request: ChatRequest): Promise<ChatResponse> => {
  const response = await api.post<ChatResponse>("/api/chat", request);
  return response.data;
};

export const getChatHistory = async (sessionId: string): Promise<Message[]> => {
  const response = await api.get(`/api/chat/history/${sessionId}`);
  return response.data.messages;
};
