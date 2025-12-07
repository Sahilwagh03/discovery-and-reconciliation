"use client";

import { ThumbsUp, ThumbsDown, Copy, Bookmark, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BotResponseProps } from "./bot-response-view";
import { useChatContext } from "@/context/chat-context";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SaveQueryDialog from "./save-query-dialog";

const MessageActions = ({ message }: BotResponseProps) => {
  const { messages, copyToClipboard } = useChatContext();
  const [copied, setCopied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (message.sender !== "bot") {
    return null;
  }

  const messageIndex = messages.findIndex((msg) => msg.id === message.id);
  if (messageIndex === 0) {
    return null;
  }

  const hasCypherOrSql =
    (message.cypher && message.cypher.length > 0) || message.sql;

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" className="cursor-pointer h-8 w-8">
        <ThumbsUp className="h-4 w-4" />
      </Button>

      <Button variant="outline" size="icon" className="cursor-pointer h-8 w-8">
        <ThumbsDown className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "cursor-pointer h-8 w-8 transition-colors duration-200",
          copied ? "bg-green-500! border-green-500!" : ""
        )}
        onClick={() => {
          copyToClipboard(message);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        {copied ? (
          <Check className="h-4 w-4 stroke-white" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>

      {hasCypherOrSql && (
        <SaveQueryDialog
          title="Save Query"
          action="save"
          message={message}
        >
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer h-8 w-8"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </SaveQueryDialog>
      )}
    </div>
  );
};

export default MessageActions;
