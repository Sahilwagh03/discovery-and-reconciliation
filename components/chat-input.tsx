"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useChatContext } from "@/context/chat-context";

const ChatInput = () => {
  const { userInput, setUserInput ,sendMessage} = useChatContext();
  return (
    <div className="border-t bg-background p-4 sticky bottom-0 left-0">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Type your message..."
          className="flex-1"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button size="icon" className="cursor-pointer" onClick={sendMessage}>
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
