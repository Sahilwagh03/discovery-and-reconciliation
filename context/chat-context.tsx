"use client";

import { dataSources } from "@/constant/chatConstants";
import {
  ChatMessage,
  ChatSession,
  DataSource,
} from "@/interfaces/chat.interface";
import { askQuestionToBot } from "@/services/chat.service";
import { convertToTargetFormat, createSession } from "@/utils/chat.utils";
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface ChatContextType {
  messages: ChatMessage[];
  userInput: string;
  sessions: ChatSession[];
  activeSessionId: string | null;
  selectedDataSource: DataSource;
  isBotTyping: boolean;
  setMessages: (message: ChatMessage[]) => void;
  setUserInput: (input: string) => void;
  setSessions: (sessions: ChatSession[]) => void;
  setSelectedDataSource: (dataSource: DataSource) => void;
  setIsBotTyping: (isType: boolean) => void;
  sendMessage: () => void;
  createNewSession: () => ChatSession;
  setActiveSession: (sessionId: string) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within ChatProvider");
  }
  return context;
}

export default function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [selectedDataSource, setSelectedDataSource] = useState<DataSource>(dataSources[1]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (sessions.length === 0 && !initialized.current) {
      const newSession = createNewSession();
      setActiveSessionId(newSession.id);
      initialized.current = true;
    }
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const finalPrompt = `${userInput} db='${selectedDataSource.value}'`
    const userMsg: ChatMessage = {
      id: uuidv4(),
      sender: "user",
      text: userInput,
    };

    setUserInput("");
    setMessages((prev) => [...prev, userMsg]);

    const response = await askQuestionToBot(finalPrompt);
    const formattedResponse = convertToTargetFormat(response, userInput);

    setMessages((prev) => [...prev, formattedResponse]);

    if (activeSessionId) {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? { ...s, messages: [...prev.find((x) => x.id === activeSessionId)!.messages, userMsg, formattedResponse] }
            : s
        )
      );
    }
  };

  const createNewSession = () => {
    const newSession = createSession(sessions);

    setSessions((prev) => [newSession, ...prev]);
    setMessages(newSession.messages);
    setActiveSessionId(newSession.id);

    return newSession;
  };

  const setActiveSession = (sessionId: string) => {
    const session = sessions.find((s) => s.id === sessionId);
    if (!session) return;

    setActiveSessionId(sessionId);
    setMessages(session.messages);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        userInput,
        sessions,
        activeSessionId,
        selectedDataSource,
        isBotTyping,
        setMessages,
        setUserInput,
        setSessions,
        setSelectedDataSource,
        setIsBotTyping,
        sendMessage,
        createNewSession,
        setActiveSession,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
