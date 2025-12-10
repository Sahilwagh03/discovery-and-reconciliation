import { ChatLoaderIcon } from "./chat-loader-icon";
import { TypingText } from "./typing-text";

const ChatLoader = () => {
  return (
    <div className="typingBubble">
      <div className="typingRow">
        <ChatLoaderIcon className="typingIcon fill-black dark:fill-white w-6 h-6" />
        <TypingText />
      </div>
    </div>
  );
};

export default ChatLoader;
