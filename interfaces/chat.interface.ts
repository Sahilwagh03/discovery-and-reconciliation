import { LucideIcon } from "lucide-react";
import { SVGProps } from "react";


export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp?: Date;
  isTyping?: boolean;
  table?: any;
  cypher?: string[];
  sql?: string;
  llm_response?: any;
  userInput?: string;
  originalResponse?: any;
  liked?: boolean;
  disliked?: boolean;
  showCypher?: boolean;
}

export interface ChatSession {
  id: string;
  name: string;
  messages: ChatMessage[];
  lastUpdated: Date;
}

export interface DataSource {
  name: string;
  icon: LucideIcon | React.ElementType | string;
  value: string;
  lastSync: Date;
  connected: boolean;
}

export interface SavedQuery {
  query_title: string;
  query: string;
  query_type: string;
}