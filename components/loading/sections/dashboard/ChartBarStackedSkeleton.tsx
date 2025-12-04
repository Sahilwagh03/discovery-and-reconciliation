"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ChartBarStackedSkeleton = () => {
  return (
    <Card className="p-4 min-h-100">
      {/* Header */}
      <CardHeader className="space-y-2 px-0 pb-4">
        <Skeleton className="h-6 w-44 rounded-md" /> {/* Title */}
        <Skeleton className="h-4 w-32 rounded-md" /> {/* Subtitle */}
      </CardHeader>

      {/* Chart Skeleton */}
      <CardContent className="mt-2 px-0 overflow-x-scroll">
        <div className="h-64 flex items-end justify-evenly gap-2">
          {[1, 2, 3, 4, 5,6,7].map((i) => (
            <div key={i} className="flex flex-col justify-end space-y-0">
              {/* Upper bar */}
              <Skeleton
                className="w-12 rounded-md rounded-b-none bg-accent-foreground"
                style={{
                  height: `${Math.floor(Math.random() * 50) + 30}px`,
                }}
              />

              {/* Lower bar */}
              <Skeleton
                className="w-12 rounded-md rounded-t-none"
                style={{
                  height: `${Math.floor(Math.random() * 80) + 50}px`,
                }}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartBarStackedSkeleton;
