"use client";
import { Skeleton } from "@/components/ui/skeleton";
import ChartBarStackedSkeleton from "./ChartBarStackedSkeleton";
import SummaryTableSkeleton from "./SummaryTableSkeleton";
import ChartPieSimpleSkeleton from "./ChartPieSimpleSkeleton";

const DashboardHomeSkeleton = () => {
  return (
    <section className="min-h-screen flex flex-col gap-6">

      <div>
        <Skeleton className="h-8 w-60" />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <ChartBarStackedSkeleton />
        <ChartPieSimpleSkeleton />
      </div>

      <SummaryTableSkeleton />
    </section>
  );
};

export default DashboardHomeSkeleton;
