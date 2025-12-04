"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ChartPieSimpleSkeleton = () => {
  return (
    <Card className="p-4 flex flex-col gap-4">
      <CardHeader className="justify-start p-0">
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-4 w-24" />
      </CardHeader>

      <CardContent className="flex justify-center items-center h-56">
        <Skeleton className="rounded-full h-56 w-56" />
      </CardContent>
    </Card>
  );
};

export default ChartPieSimpleSkeleton;
