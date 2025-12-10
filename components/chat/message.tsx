"use client";
import { MessageProps } from "@/interfaces/chat.interface";
import { cn } from "@/lib/utils";
import MessageAvatar from "./message-avatar";
import { MESSAGE_SENDER } from "@/constant/chatConstants";
import MeassageContent from "./message-content";
import { useChatContext } from "@/context/chat-context";

const Message = ({ message }: MessageProps) => {
  const { messageRefs } = useChatContext();
  
  return (
    <div
      ref={(el) => {
        if (message?.id) {
          messageRefs.current[message.id] = el;
        }
      }}
      className={cn(
        "flex gap-3 items-start",
        message.sender === MESSAGE_SENDER.USER && "flex-row-reverse"
      )}
    >
      <MessageAvatar sender={message.sender} />
      <MeassageContent message={message} />
    </div>
  );
};

export default Message;