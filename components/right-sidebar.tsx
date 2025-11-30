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

import { Card } from "@/components/ui/card";
export function RightSidebar({ children }: { children: ReactNode }) {
  const { rightOpen } = useDualSidebar();

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
              <div className="grid grid-cols-1 gap-3">
                <h2 className="text-lg font-semibold">Data Sources</h2>
                <Card className="p-3 gap-2">
                  <p className="font-medium">Network DB</p>
                  <p className="text-sm text-muted-foreground">
                    Live system data
                  </p>
                </Card>

                <Card className="p-3 gap-2">
                  <p className="font-medium">Inventory Logs</p>
                  <p className="text-sm text-muted-foreground">
                    Inventory snapshots
                  </p>
                </Card>

                <Card className="p-3 gap-2">
                  <p className="font-medium">Discrepancy Records</p>
                  <p className="text-sm text-muted-foreground">
                    Mismatch insights
                  </p>
                </Card>
              </div>

              <Accordion type="single" collapsible className="w-full mb-0 cursor-pointer">
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

              <Accordion type="single" collapsible className="w-full mb-0 cursor-pointer">
                <AccordionItem value="suggested">
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    Suggested Queries
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:bg-accent rounded-md p-2">
                        Recent discrepancies
                      </li>
                      <li className="hover:bg-accent rounded-md p-2">
                        Frequent missing items
                      </li>
                      <li className="hover:bg-accent rounded-md p-2">High-risk zones</li>
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
