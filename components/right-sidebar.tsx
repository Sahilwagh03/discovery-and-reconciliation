"use client";
import { useDualSidebar } from "@/context/dual-sidebar-context";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  "Give me list of all interfaces with IP Address like 10.227.",
  "Give me list of all AN interfaces with IP Address like 10.227.",
  "Is there any IP address that is assigned to more than 1 NIs.",
  "Return NIs that have mtu > 2000",
  "Give List of all NEs whose name have 'AN' and interfaces status is UP",
  "Perform a live comparison between network and inventory for following nodes : ",
  "Give me list of all logical interfaces with VLAN 225.",
  "Give me list of all logical interfaces with NO VLAN 225.",
];

import { Card } from "@/components/ui/card";
import { useChatContext } from "@/context/chat-context";
import DataSourceList from "./data-source-list";
export function RightSidebar() {
  const { rightOpen } = useDualSidebar();
  const { setUserInput } = useChatContext()

  return (
    <aside
      className={cn(
        "border-l bg-sidebar transition-all duration-300 ease-in-out shrink-0 h-full",
        rightOpen ? "w-80 opacity-100" : "w-0 opacity-0"
      )}
    >
      <div
        className={cn(
          "w-80 h-full transition-opacity duration-300",
          rightOpen ? "opacity-100 delay-150" : "opacity-0"
        )}
      >
        <div className="h-full overflow-y-auto">
          <div>
            <div className="p-4 space-y-6">
              <DataSourceList />
              <Accordion
                type="single"
                collapsible
                className="w-full mb-0 cursor-pointer"
              >
                <AccordionItem value="saved">
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    Saved Queries
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:bg-accent rounded-md p-2">
                        Top 10 mismatches
                      </li>
                      <li className="hover:bg-accent rounded-md p-2">
                        Inventory missing
                      </li>
                      <li className="hover:bg-accent rounded-md p-2">
                        Network-only items
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion
                type="single"
                collapsible
                className="w-full mb-0 cursor-pointer"
              >
                <AccordionItem value="suggested">
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    Suggested Queries
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      {data.map((query) => (
                        <li key={query} className="hover:bg-accent rounded-md p-2" onClick={()=> setUserInput(query)}>
                          {query}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
