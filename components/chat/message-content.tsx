import { MESSAGE_SENDER } from "@/constant/chatConstants";
import { MessageProps } from "@/interfaces/chat.interface";
import { cn } from "@/lib/utils";
import MessageLabel from "./message-label";
import MessageText from "./message-text";
import BotResponseView from "./bot-response-view";

const MeassageContent = ({ message }: MessageProps) => {
  const isBOT = message.sender === MESSAGE_SENDER.BOT;
  return (
    <div
      className={cn(
        "max-w-[80%] flex flex-col w-full min-h-12 max-h-fit rounded-2xl gap-2",
        isBOT ? "items-start" : "items-end"
      )}
    >
      <MessageLabel label={isBOT ? "Neo" : "User"}/>
      <MessageText>{message.text}</MessageText>
      <BotResponseView message={message} />
    </div>
  );
};

export default MeassageContent;
