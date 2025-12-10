"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

interface SummaryTableSkeletonProps {
  rows?: number;
  columns?: number;
}

const SummaryTableSkeleton = ({
  rows = 7,
  columns = 5,
}: SummaryTableSkeletonProps) => {
  return (
    <Card className="rounded-lg border overflow-hidden gap-2 p-0">
      {/* Table Header */}
      <div className="bg-accent/50 dark:bg-accent/40 px-4 py-3 border-b flex gap-4">
        {Array.from({ length: columns }).map((_, idx) => (
          <Skeleton key={idx} className="h-6 w-full rounded-sm" />
        ))}
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-border">
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`px-4 py-3 grid grid-cols-${columns} gap-4 ${
              rowIdx % 2 === 0 ? "bg-muted/30 dark:bg-muted/20" : ""
            }`}
          >
            {Array.from({ length: columns }).map((_, colIdx) => (
              <Skeleton key={colIdx} className="h-6 w-full rounded-sm" />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SummaryTableSkeleton;
