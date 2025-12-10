import React from "react";
import SummaryTableSkeleton from "../dashboard/SummaryTableSkeleton";
import { StatCardSkeleton } from "./StatCardSkeleton";

const ReportSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>
      <SummaryTableSkeleton rows={10}/>
    </div>
  );
};

export default ReportSkeleton;
