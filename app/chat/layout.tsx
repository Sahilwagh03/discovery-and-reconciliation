import { ReactNode } from "react";
import ChatHeder from "@/components/chat-header";
import DualSidebarProvider from "@/context/dual-sidebar-context";
import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";
import ChatProvider from "@/context/chat-context";

type Props = {
  children: ReactNode;
};

function ChatLayout({ children }: Props) {
  return (
    <ChatProvider>
      <DualSidebarProvider>
        <section className="fixed inset-0 w-full h-screen flex flex-col overflow-hidden">
          <ChatHeder />

          <div className="flex flex-row flex-nowrap flex-1 overflow-hidden">
            <LeftSidebar></LeftSidebar>

            <div className="flex-1 overflow-y-auto">{children}</div>

            <RightSidebar></RightSidebar>
          </div>
        </section>
      </DualSidebarProvider>
    </ChatProvider>
  );
}

export default ChatLayout;
