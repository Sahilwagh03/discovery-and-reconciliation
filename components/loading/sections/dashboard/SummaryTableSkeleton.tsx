"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const SummaryTableSkeleton = () => {
  return (
    <Card className="rounded-lg border overflow-hidden gap-2 p-0">
      {/* Table Header */}
      <div className="bg-accent/50 dark:bg-accent/40 px-4 py-3 border-b flex gap-4">
        {/* 5 columns */}
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-6 w-full rounded-sm" />
        ))}
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-border">
        {[1, 2, 3, 4, 5, 6, 7].map((row) => (
          <div
            key={row}
            className={`px-4 py-3 grid grid-cols-5 gap-4 
              ${row % 2 === 0 ? "bg-muted/30 dark:bg-muted/20" : ""}
            `}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-6 w-full rounded-sm" />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SummaryTableSkeleton;
