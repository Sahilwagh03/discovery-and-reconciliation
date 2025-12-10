"use client";

import { dataSources } from "@/constant/chatConstants";
import { useSaveQuery } from "@/hooks/useSaveQuery";
import {
  ChatMessage,
  ChatSession,
  DataSource,
  executeQueryPayload,
  SavedQuery,
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
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

interface ChatContextType {
  messages: ChatMessage[];
  userInput: string;
  sessions: ChatSession[];
  activeSessionId: string | null;
  selectedDataSource: DataSource;
  isBotTyping: boolean;
  gridApis: Record<string, any>;
  scrollBottomRef: React.RefObject<HTMLDivElement | null>;
  messageRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  setMessages: (message: ChatMessage[]) => void;
  setUserInput: (input: string) => void;
  setSessions: (sessions: ChatSession[]) => void;
  setSelectedDataSource: (dataSource: DataSource) => void;
  setIsBotTyping: (isType: boolean) => void;
  sendMessage: () => void;
  createNewSession: () => ChatSession;
  setActiveSession: (sessionId: string) => void;
  setGridApi: (messageId: string, api: any) => void;
  copyToClipboard: (message: ChatMessage) => void;
  executeSavedQuery: (query:SavedQuery) => void;
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
  const [selectedDataSource, setSelectedDataSource] = useState<DataSource>(
    dataSources[1]
  );
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [gridApis, setGridApis] = useState<Record<string, any>>({});
  const initialized = useRef(false);

  const scrollBottomRef = useRef<HTMLDivElement | null>(null);
  const messageRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { executeQuery } = useSaveQuery();

  const scrollToBottom = () => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollTo({
        top: scrollBottomRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const scrollToMessage = (messageId: string | undefined) => {
    if (!messageId) return;
    const messageElement = messageRefs.current[messageId];
    if (messageElement && scrollBottomRef.current) {
      messageElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (sessions.length === 0 && !initialized.current) {
      const newSession = createNewSession();
      setActiveSessionId(newSession.id);
      initialized.current = true;
    }
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const finalPrompt = `${userInput} db='${selectedDataSource.value}'`;
    const userMsg = pushUserMessage(userInput);
    setUserInput("");

    const loaderId = setChatLoaderTrue();

    try {
      const response = await askQuestionToBot(finalPrompt);
      pushBotMessage(response, userInput, loaderId);
    } catch (err) {
      setChatLoaderFalse(loaderId);
      toast.error("Failed to send message");
    }

    setTimeout(() => scrollToMessage(userMsg.id), 100);
  };

  const createNewSession = () => {
    setUserInput("")
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

  const setGridApi = (messageId: string, api: any) => {
    setGridApis((prev) => ({ ...prev, [messageId]: api }));
  };

  const copyToClipboard = async (message: ChatMessage) => {
    if (!message) return;
    const textToCopy = JSON.stringify(message.originalResponse, null, 2);
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const setChatLoaderTrue = () => {
    setIsBotTyping(true);
    const tempId = uuidv4();

    const typingMsg: ChatMessage = {
      id: tempId,
      sender: "bot",
      text: "Typing...",
      isTyping: true,
    };

    setMessages((prev) => [...prev, typingMsg]);

    return tempId;
  };

  const setChatLoaderFalse = (tempId: string) => {
    setIsBotTyping(false);
    setMessages((prev) => prev.filter((m) => m.id !== tempId));
  };

  const pushUserMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: uuidv4(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setTimeout(scrollToBottom, 100);

    if (activeSessionId) {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? { ...s, messages: [...s.messages, userMsg] }
            : s
        )
      );
    }
    return userMsg;
  };

  const pushBotMessage = (
    rawResponse: any,
    userInput: string,
    loaderId: string
  ) => {
    setChatLoaderFalse(loaderId);

    const formattedResponse = convertToTargetFormat(rawResponse, userInput);

    setMessages((prev) => [...prev, formattedResponse]);

    if (activeSessionId) {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? { ...s, messages: [...s.messages, formattedResponse] }
            : s
        )
      );
    }

    return formattedResponse;
  };

  const executeSavedQuery = async (query: SavedQuery) => {
    const userMsg = pushUserMessage(query.query_title);
    const loaderId = setChatLoaderTrue();
    const payload:executeQueryPayload={
      query:query.query,
      query_type:query.query_type
    }
    try {
      const response = await executeQuery(payload);
      pushBotMessage(response, query.query, loaderId);
      setTimeout(() => scrollToMessage(userMsg.id), 100);
    } catch (err) {
      setChatLoaderFalse(loaderId);
    }
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
        gridApis,
        scrollBottomRef,
        messageRefs,
        setMessages,
        setUserInput,
        setSessions,
        setSelectedDataSource,
        setIsBotTyping,
        sendMessage,
        createNewSession,
        setActiveSession,
        setGridApi,
        copyToClipboard,
        executeSavedQuery
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
