"use client";
import { useChatContext } from "@/context/chat-context";
import Message from "./message";

function MessageList() {
  const { messages, scrollBottomRef } = useChatContext();
  return (
    <div ref={scrollBottomRef} className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((item) => (
        <Message key={item.id} message={item} />
      ))}
    </div>
  );
}

export default MessageList;
