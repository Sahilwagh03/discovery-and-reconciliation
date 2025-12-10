import ChatInput from "@/components/chat-input";
import MessageList from "@/components/chat/message-list";

const Chat = () => {
  return (
    <div className="flex flex-col h-full">
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default Chat;
