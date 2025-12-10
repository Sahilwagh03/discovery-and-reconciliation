"use client";

import { useDualSidebar } from "@/context/dual-sidebar-context";
import { cn } from "@/lib/utils";
import { SideBarItem } from "./sidebar-common";
import { Input } from "@/components/ui/input";
import { ChevronsUpDown, Search, SearchIcon, SquarePen } from "lucide-react";
import { useChatContext } from "@/context/chat-context";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import UserActionMenu from "./user-action-menu";

export function LeftSidebar() {
  const { leftOpen } = useDualSidebar();
  const { sessions, createNewSession, setActiveSession } = useChatContext();
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <aside
      className={cn(
        "border-r bg-sidebar transition-all duration-300 ease-in-out shrink-0 h-full flex flex-col",
        leftOpen ? "w-64 opacity-100" : "w-0 opacity-0"
      )}
    >
      <div
        className={cn(
          "w-64 h-full transition-opacity duration-300 flex flex-col",
          leftOpen ? "opacity-100 delay-150" : "opacity-0"
        )}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Chats</h2>
        </div>

        <div className="px-2 pb-3">
          <SideBarItem
            className="h-10 font-semibold"
            onClick={createNewSession}
          >
            <span className="flex items-center gap-2">
              <SquarePen className="size-5 mr-1" />
              New chat
            </span>
          </SideBarItem>
          <SideBarItem className="h-10 font-semibold">
            <span className="flex items-center gap-2">
              <SearchIcon className="size-5 mr-1" />
              Search chat
            </span>
          </SideBarItem>
        </div>

        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          <h2 className="px-2 text-foreground text-sm font-semibold">Your chats</h2>
          {sessions.map(({ name, id }) => (
            <SideBarItem
              key={id}
              id={id}
              className="h-10 mb-0 py-1 font-normal"
              onClick={() => setActiveSession(id)}
            >
              {name}
            </SideBarItem>
          ))}
        </div>

        {/* User nav fixed at bottom */}
        <div className="px-2 py-2.5 border-t">
          <UserActionMenu>
            <SideBarItem size="lg" className="inline-block">
              <div className="flex flex-row gap-2 items-center justify-between">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </div>
            </SideBarItem>
          </UserActionMenu>
        </div>
      </div>
    </aside>
  );
}
