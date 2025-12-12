"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SummaryTableSkeletonProps {
  rows?: number;          // Number of table rows
  cols?: number;          // Number of table columns
  striped?: boolean;      // Alternate row background
  className?: string;     // Extra classes for wrapper
}

const SummaryTableSkeleton = ({
  rows = 7,
  cols = 5,
  striped = true,
  className,
}: SummaryTableSkeletonProps) => {
  return (
    <Card className={cn("rounded-lg border overflow-hidden p-0", className)}>
      {/* Table Header */}
      <div className="bg-accent/50 dark:bg-accent/40 px-4 py-3 border-b grid gap-4"
           style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-full rounded-sm" />
        ))}
      </div>

      {/* Table Body */}
      <div className="divide-y divide-border">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={cn(
              "px-4 py-3 grid gap-4",
              striped && rowIndex % 2 === 1
                ? "bg-muted/30 dark:bg-muted/20"
                : ""
            )}
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
          >
            {Array.from({ length: cols }).map((_, colIndex) => (
              <Skeleton key={colIndex} className="h-6 w-full rounded-sm" />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SummaryTableSkeleton;
