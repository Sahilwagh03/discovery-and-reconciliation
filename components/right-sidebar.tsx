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
import { Edit, Trash } from "lucide-react";
import SaveQueryDialog from "./chat/save-query-dialog";
import { SavedQuery } from "@/interfaces/chat.interface";

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
  const { setUserInput, executeSavedQuery } = useChatContext();

  const { savedQueries, isLoadingSaved, deleteQuery } = useSaveQuery();

  const buildPayloadUpdateQuery = (query: SavedQuery) => {
    return {
      id: query.id,
      userId: query.userId,
      user_prompt: query.user_prompt,
      query_title: query.query_title,
      query: query.query,
      query_type: query.query_type,
    };
  };

  const handleExecuteQuery = async (query: SavedQuery) => {
    await executeSavedQuery(query);
  };

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
          <div className="p-3 flex flex-col gap-2">
            <DataSourceList />
            <Accordion
              type="single"
              defaultValue="saved"
              collapsible
              className="w-full cursor-pointer"
            >
              <AccordionItem value="saved">
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  Saved Queries
                </AccordionTrigger>

                <AccordionContent className="pb-0">
                  {isLoadingSaved ? (
                    <SavedQueryButtonSkeleton />
                  ) : savedQueries?.queries?.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No saved queries
                    </p>
                  ) : (
                    <ul className="space-y-1 max-h-[40svh] overflow-y-auto text-sm">
                      {savedQueries?.queries?.map((query: SavedQuery) => (
                        <SideBarItem
                          key={query.id}
                          className="min-h-10 h-auto cursor-pointer justify-between"
                          asChild
                          onClick={() => handleExecuteQuery(query)}
                        >
                          <span>{query.query_title}</span>

                          <div
                            className="flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SaveQueryDialog
                              title="Update Query"
                              action="update"
                              initialValue={query.query_title}
                              basePayload={buildPayloadUpdateQuery(query)}
                            >
                              <Edit className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                            </SaveQueryDialog>
                            <Trash
                              className="h-6 w-6 text-white p-1 rounded-sm bg-red-500 hover:bg-red-600 cursor-pointer"
                              onClick={() => deleteQuery(query.id)}
                            />
                          </div>
                        </SideBarItem>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              defaultValue="suggested"
              collapsible
              className="w-full cursor-pointer"
            >
              <AccordionItem value="suggested">
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  Suggested Queries
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 max-h-[40svh] overflow-y-auto text-sm">
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
