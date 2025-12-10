import { MESSAGE_SENDER } from "@/constant/chatConstants";
import { MessageProps } from "@/interfaces/chat.interface";
import { cn } from "@/lib/utils";
import MessageLabel from "./message-label";
import MessageText from "./message-text";
import BotResponseView from "./bot-response-view";
import ChatLoader from "../chat-loader";

const MessageContent = ({ message }: MessageProps) => {
  const { sender, text, isTyping } = message;
  const isBot = sender === MESSAGE_SENDER.BOT;

  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-[80%] min-h-12 max-h-fit gap-2 rounded-2xl",
        isBot ? "items-start" : "items-end"
      )}
    >
      <MessageLabel label={isBot ? "Neo" : "User"} />

      {isTyping ? (
        <ChatLoader />
      ) : (
        <>
          <MessageText>{text}</MessageText>
          {isBot && <BotResponseView message={message} />}
        </>
      )}
    </div>
  );
};

export default MessageContent;
