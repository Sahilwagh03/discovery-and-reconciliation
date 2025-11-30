"use client";

import { ReactNode, useState, createContext, useContext } from "react";

const DualSidebarContext = createContext<{
  leftOpen: boolean;
  rightOpen: boolean;
  toggleLeft: () => void;
  toggleRight: () => void;
} | null>(null);

export function useDualSidebar() {
  const context = useContext(DualSidebarContext);
  if (!context) {
    throw new Error("useDualSidebar must be used within DualSidebarProvider");
  }
  return context;
}

export default function DualSidebarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  const toggleLeft = () => setLeftOpen((prev) => !prev);
  const toggleRight = () => setRightOpen((prev) => !prev);

  return (
    <DualSidebarContext.Provider
      value={{ leftOpen, rightOpen, toggleLeft, toggleRight }}
    >
      {children}
    </DualSidebarContext.Provider>
  );
}
