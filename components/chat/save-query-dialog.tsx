"use client";

import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { useSaveQuery } from "@/hooks/useSaveQuery";
import { ChatMessage, SaveQueryPayload } from "@/interfaces/chat.interface";

interface SaveQueryDialogProps {
  title: string;
  action: "save" | "update";
  children: ReactNode;
  message: ChatMessage;
}

const SaveQueryDialog = ({
  title,
  action,
  children,
  message,
}: SaveQueryDialogProps) => {
  const [value, setValue] = useState(message.userInput);
  const { saveQuery, isSaving } = useSaveQuery();

  const handleConfirm = () => {
    if (!value?.trim()) return;

    const isCypher = Array.isArray(message?.cypher) && message.cypher.length > 0;
    const query = isCypher ? message?.cypher?.[0] : message.sql || "";

    const payload:SaveQueryPayload = {
      userId: "id080026",
      user_prompt: message?.userInput,
      query_title: value,
      query:query || "",
      query_type: isCypher ? "cypher" : "sql",
    };

    saveQuery(payload);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="py-2">
          <Input
            placeholder="Enter query name..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              className="bg-sidebar-primary text-white"
              onClick={handleConfirm}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : action === "save" ? "Save" : "Update"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SaveQueryDialog;
