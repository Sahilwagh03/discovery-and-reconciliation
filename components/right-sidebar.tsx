"use client";

import { useDualSidebar } from "@/context/dual-sidebar-context";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useChatContext } from "@/context/chat-context";
import { useSaveQuery } from "@/hooks/useSaveQuery"; // <-- IMPORTANT

import DataSourceList from "./data-source-list";
import { SideBarItem } from "./sidebar-common";
import SavedQueryButtonSkeleton from "./loading/global/SavedQueryButtonSkeleton";

const suggestedQueries = [
  "Give me list of all interfaces with IP Address like 10.227.",
  "Give me list of all AN interfaces with IP Address like 10.227.",
  "Is there any IP address that is assigned to more than 1 NIs.",
  "Return NIs that have mtu > 2000",
  "Give List of all NEs whose name have 'AN' and interfaces status is UP",
  "Perform a live comparison between network and inventory for following nodes : ",
  "Give me list of all logical interfaces with VLAN 225.",
  "Give me list of all logical interfaces with NO VLAN 225.",
];

export function RightSidebar() {
  const { rightOpen } = useDualSidebar();
  const { setUserInput } = useChatContext();

  const { savedQueries, isLoadingSaved } = useSaveQuery();
  console.log(savedQueries)
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
          <div className="p-4 flex flex-col gap-2">

            <DataSourceList />
            <Accordion type="single" defaultValue="saved" collapsible className="w-full cursor-pointer">
              <AccordionItem value="saved">
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  Saved Queries
                </AccordionTrigger>

                <AccordionContent className="pb-0">
                  {isLoadingSaved ? (
                    <SavedQueryButtonSkeleton/>
                  ) : savedQueries?.queries?.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No saved queries</p>
                  ) : (
                    <ul className="space-y-1 text-sm">
                      {savedQueries?.queries?.map((item: any) => (
                        <SideBarItem
                          key={item.id}
                          className="h-10 cursor-pointer"
                          onClick={() => setUserInput(item.query_title)}
                        >
                          {item.query_title}
                        </SideBarItem>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" defaultValue="suggested" collapsible className="w-full cursor-pointer">
              <AccordionItem value="suggested">
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  Suggested Queries
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    {suggestedQueries.map((query) => (
                      <li
                        key={query}
                        className="hover:bg-accent rounded-md p-2 cursor-pointer"
                        onClick={() => setUserInput(query)}
                      >
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
    </aside>
  );
}
