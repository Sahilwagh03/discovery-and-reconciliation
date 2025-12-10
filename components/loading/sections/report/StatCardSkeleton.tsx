"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const StatCardSkeleton = () => {
  return (
    <Card className="rounded-2xl p-3 shadow-sm">
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-lg" />

          <div className="flex flex-col flex-2 gap-1">
            <Skeleton className="h-4 w-24 rounded-sm" />
            <Skeleton className="h-6 w-16 rounded-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
