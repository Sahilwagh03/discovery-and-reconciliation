"use client";
import { Info, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useDualSidebar } from "@/context/dual-sidebar-context";
import Link from "next/link";

export default function ChatHeader() {
  const { leftOpen, rightOpen, toggleLeft, toggleRight } = useDualSidebar();

  return (
    <header className="h-14 border-b bg-background/95 backdrop-blur">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex flex-row items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLeft}
            aria-label={leftOpen ? "Close chat history" : "Open chat history"}
            className="cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold">Network & Inventory</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleRight}
            aria-label={rightOpen ? "Close settings" : "Open settings"}
            className="cursor-pointer"
          >
            <Info className="h-5 w-5" />
          </Button>
          <Link href='/dashboard'>
            <Button
              variant="outline"
              size="icon"
              aria-label="Close chat"
              className="cursor-pointer"
            >
              <X className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
