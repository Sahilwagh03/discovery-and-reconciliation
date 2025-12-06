import { MESSAGE_SENDER } from "@/constant/chatConstants";
import {
  ChatMessage,
  ChatSession,
  InputInterface,
} from "@/interfaces/chat.interface";
import { v4 as uuidv4 } from "uuid";
import { createColumnDefs } from "./dashboard.utils";


export const convertToTargetFormat = (
  input: InputInterface,
  userInput: string
): ChatMessage => {
  const responseArray = input.response || [];

  if (responseArray.length === 0 && !input.llm_response) {
    return {
      id: uuidv4(),
      sender: MESSAGE_SENDER.BOT,
      text: "No results found.",
      cypher: input.cypher,
      sql: input.sql_query,
      originalResponse: input.response,
      userInput: userInput,
    };
  }

  let returnObj: ChatMessage = {
    id: uuidv4(),
    sender: MESSAGE_SENDER.BOT,
    text: `Here are the results${input.count ? ` (${input.count})` : ""}:`,
    cypher: input.cypher,
    sql: input.sql_query,
    originalResponse: input.response,
    llm_response: input.llm_response,
    userInput: userInput,
  };
  if (responseArray?.length > 0) {
    returnObj = {
      ...returnObj,
      table: {
        tableData: responseArray,
        columnDefs: createColumnDefs(responseArray),
      },
      showColumnToggle: false,
      currentView: "table",
      showCypher: false,
      allColumns: [],
    };
  }
  return returnObj;
};

export const createSession = (existingSessions: ChatSession[]): ChatSession => {
  const sessionId = uuidv4();
  const sessionName = `Chat ${existingSessions.length + 1}`;

  const welcomeMessage: ChatMessage = {
    id: uuidv4(),
    sender: MESSAGE_SENDER.BOT,
    text: "Welcome! I'm here to help you with your network and inventory data. What would you like to know?",
    timestamp: new Date(),
  };

  return {
    id: sessionId,
    name: sessionName,
    messages: [welcomeMessage],
    lastUpdated: new Date(),
  };
};

export function formatLastSyncFixedMidnight() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-IN"); // → 6/12/2025
  const fixedTime = "12:00 AM";

  return `${formattedDate} ${fixedTime}`;
}
