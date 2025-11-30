"use client";
import { ReactNode } from "react";
import ChatHeder from "@/components/chat-header";
import DualSidebarProvider from "@/context/dual-sidebar-context";
import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";

type Props = {
  children: ReactNode;
};

function ChatLayout({ children }: Props) {
  return (
    <DualSidebarProvider>
      <section className="w-full h-screen max-h-screen overflow-hidden flex flex-col">
        <ChatHeder />

        <div className="flex flex-row flex-nowrap flex-1 overflow-hidden">
          <LeftSidebar>Left content</LeftSidebar>

          <div className="flex-1 overflow-y-auto">
            {children}
          </div>

          <RightSidebar>Right content</RightSidebar>
        </div>
      </section>
    </DualSidebarProvider>
  );
}

export default ChatLayout;
