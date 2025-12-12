"use client";
import { Info, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useDualSidebar } from "@/context/dual-sidebar-context";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default function ChatHeader() {
  const { leftOpen, rightOpen, toggleLeft, toggleRight } = useDualSidebar();

  return (
    <header className="h-14 border-b bg-background/95 backdrop-blur">
      <div className="flex h-full items-center justify-between px-2 sm:px-4">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-2">
          {/* Sidebar toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLeft}
            aria-label={leftOpen ? "Close chat history" : "Open chat history"}
            className="cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Title */}
          <h1 className="font-semibold text-sm sm:text-base truncate">
            Network & Inventory
          </h1>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2">

          {/* CONFIG button (text hidden on mobile) */}
          <Button
            variant="outline"
            onClick={toggleRight}
            aria-label={rightOpen ? "Close settings" : "Open settings"}
            className="cursor-pointer flex items-center gap-1"
          >
            <Info className="h-5 w-5" />
            <span className="hidden sm:inline">Configuration</span>
          </Button>

          {/* Theme toggle */}
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          {/* Smaller Mode Toggle for mobile */}
          <div className="sm:hidden">
            <ModeToggle />
          </div>

          {/* Close Button */}
          <Link href="/dashboard">
            <Button
              size="icon"
              aria-label="Close chat"
              className="cursor-pointer bg-red-500 text-white hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}
