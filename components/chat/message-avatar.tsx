import { MESSAGE_SENDER } from "@/constant/chatConstants";
import { MessageSender } from "@/interfaces/chat.interface";
import { cn } from "@/lib/utils";
import { BotMessageSquare, User as UserIcon } from "lucide-react";

interface MessageAvatarProps {
  sender: MessageSender;
}

const MessageAvatar = ({ sender }: MessageAvatarProps) => {
  const isBot = sender === MESSAGE_SENDER.BOT;

  return (
    <div
      className={cn(
        "w-10 h-10 flex items-center shrink-0 justify-center rounded-full text-white",
        isBot ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-700 dark:bg-gray-600"
      )}
    >
      {isBot ? (
        <BotMessageSquare className="w-5 h-5" />
      ) : (
        <UserIcon className="w-5 h-5" />
      )}
    </div>
  );
};

export default MessageAvatar;
