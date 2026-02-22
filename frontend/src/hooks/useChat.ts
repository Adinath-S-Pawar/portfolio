import { useState, useCallback } from "react";
import { Message, ChatRequest } from "../types";
import { sendMessage } from "../api/chatService";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const request: ChatRequest = {
        message: content,
        session_id: sessionId,
      };

      const response = await sendMessage(request);
      setSessionId(response.session_id);

      const assistantMessage: Message = {
        role: "assistant",
        content: response.reply,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setError("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setSessionId(undefined);
    setError(null);
  }, []);

  return { messages, isLoading, error, send, clearChat };
};