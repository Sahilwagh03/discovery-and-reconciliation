"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
import { askQuestionToBot } from "@/services/chat.service";

const Chat = () => {
  const [userInput, setUserInput] = useState<string>("");
  const sendMessage = async () => {
    const response = await askQuestionToBot(userInput);
    console.log("Bot Response:", response);
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">Chat</div>

      <div className="border-t bg-background p-4 sticky bottom-0 left-0">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Type your message..."
            className="flex-1"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button size="icon" onClick={sendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
