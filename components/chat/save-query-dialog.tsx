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
import { SavedQuery } from "@/interfaces/chat.interface";

interface SaveQueryDialogProps {
  title: string;
  action: "save" | "update";
  children: ReactNode;
  initialValue: string;
  basePayload: SavedQuery;
}

const SaveQueryDialog = ({
  title,
  action,
  children,
  initialValue="",
  basePayload,
}: SaveQueryDialogProps) => {

  const [value, setValue] = useState(initialValue);
  const { saveQuery, isSaving, editQuery } = useSaveQuery();

  const handleConfirm = () => {
    if (!value?.trim()) return;

    const payload: SavedQuery = {
      ...basePayload,
      query_title: value,
    };

    if (action === "save") {
      saveQuery(payload);
    } else if (action === "update" && payload.id) {
      editQuery({ id: payload.id, payload });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild onClick={()=>setValue(initialValue)}>{children}</DialogTrigger>

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
            <Button variant="outline"  className="cursor-pointer">Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              className="bg-sidebar-primary text-white hover:bg-sidebar-primary cursor-pointer"
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
