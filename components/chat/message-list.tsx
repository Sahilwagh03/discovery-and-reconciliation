'use client'
import { useChatContext } from "@/context/chat-context";
import Message from "./message";

function MessageList() {
  const { messages } = useChatContext();
  return (
    <>
      {messages.map((item) => (
        <Message key={item.id} message={item} />
      ))}
    </>
  );
}

export default MessageList;
