import ChatInput from "@/components/chat-input";
import MessageList from "@/components/chat/message-list";

const Chat = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <MessageList />
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
