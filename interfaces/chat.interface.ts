import type { ColDef, GridApi } from "ag-grid-community";
import { LucideIcon } from "lucide-react";

export interface ChatMessage {
  id?: string;
  sender: string;
  text: string;
  timestamp?: Date;
  table?: TableData;
  cypher?: string[];
  sql?: string;
  originalResponse?: Array<Record<string, any>>;
  showColumnToggle?: boolean;
  currentView?: "table" | "json";
  showCypher?: boolean;
  allColumns?: { id: string; headerName: string; isVisible: boolean }[];
  gridApi?: GridApi;
  llm_response?: string[];
  userInput?: string;
  isTyping?: boolean;
  liked?: boolean;
  disliked?: boolean;
}

export interface TableData {
  headers?: string[];
  rows?: string[][] | TableData;
  tableData?: any[];
  columnDefs?: ColDef<any, any>[];
}

export interface DataSource {
  name: string;
  icon: LucideIcon | string;
  iconClass:string;
  value: string;
  lastSync?: string;
  connected: boolean;
}

export interface ChatSession {
  id: string;
  name: string;
  messages: ChatMessage[];
  lastUpdated: Date;
}

export interface InputInterface {
  llm_response?: string[];
  response?: any[];
  cypher?: string[];
  sql_query?: string;
  count?: string;
}

export interface SavedQuery {
  id?: string;
  userId?: string;
  query_title?: string;
  user_prompt?: string;
  query: string;
  query_type: string;
  created_at?: string;
  modified_at?: string;
}
export interface MessageProps {
  message:ChatMessage
}

export type LLMResponseObject = {
  [key: string]: string[];
};