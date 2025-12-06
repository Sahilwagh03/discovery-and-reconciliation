"use client";
import { useDualSidebar } from "@/context/dual-sidebar-context";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SideBarItem } from "./sidebar-common";
import { chatHistory } from "@/constant/dashboard-constant";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, SquarePen } from "lucide-react";
import { useChatContext } from "@/context/chat-context";

export function LeftSidebar() {
  const { leftOpen } = useDualSidebar();
  const { sessions , createNewSession , setActiveSession } = useChatContext();
  return (
    <aside
      className={cn(
        "border-r bg-sidebar transition-all duration-300 ease-in-out shrink-0 h-full",
        leftOpen ? "w-64 opacity-100" : "w-0 opacity-0"
      )}
    >
      <div
        className={cn(
          "w-64 h-full transition-opacity duration-300",
          leftOpen ? "opacity-100 delay-150" : "opacity-0"
        )}
      >
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-3">
            <h2 className="text-lg font-semibold">Chats</h2>
          </div>

          <div className="px-2 pb-3" onClick={createNewSession}>
            <SideBarItem className="h-10 font-semibold">
              <span className="flex items-center gap-2">
                <SquarePen className="mr-1 size-5!" />
                New Chat
              </span>
            </SideBarItem>
          </div>
          <div className="px-2 pb-3">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search chats..." className="pl-8" />
            </div>
          </div>

          <div className="space-y-1 px-2 overflow-y-auto pb-4">
            {sessions.map(({ name, id }) => (
              <SideBarItem
                key={id}
                id={id}
                className="h-10 mb-0 py-1 font-normal"
                onClick={()=>setActiveSession(id)}
              >
                {name}
              </SideBarItem>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
