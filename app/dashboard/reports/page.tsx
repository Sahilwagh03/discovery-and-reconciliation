"use client";
import DataAgGrid from "@/components/ag-grid";
import { StatCard } from "@/components/stats-card";
import { useDashboard } from "@/hooks/useDashboard";
import {
  DiscrepancyItem,
  DiscrepancyReport,
} from "@/interfaces/dashboard.interface";
import { countResults, createColumnDefs } from "@/utils/dashboard.utils";
import { AlertTriangle, Box, Layers, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";
const defaultData = [
  {
    id: "total_discrepancy",
    title: "Total Discrepancy",
    value: 187,
    icon: Layers,
  },
  {
    id: "mismatch",
    title: "Mismatch",
    value: 128,
    icon: AlertTriangle,
  },
  {
    id: "missing_inventory",
    title: "Missing in Inventory",
    value: 42,
    icon: Box,
  },
  {
    id: "missing_network",
    title: "Missing in Network",
    value: 17,
    icon: WifiOff,
  },
];

const Reports = () => {
  const { data, isLoading, error } = useDashboard(true);
  const [reportData, setReportData] = useState<DiscrepancyReport | null>(null);

  const transformReportData = (data: DiscrepancyItem[]) => {
    const summary = countResults(data);
    const report = {
      summary,
      items: {
        tableData: data,
        columnDefs: createColumnDefs(data),
      },
    };
    setReportData(report);
    console.log(report);
  };

  useEffect(() => {
    if (!isLoading) {
      transformReportData(data);
    }
  }, [isLoading]);

  if (isLoading) {
    return;
  }

  if (error || !data) {
    return <h1>Unable to load report</h1>
  }

  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reportData?.summary.map((item) => (
          <StatCard
            key={item.result}
            title={item.result}
            value={item.count}
            icon={item.icon}
          />
        ))}
      </div>
      <DataAgGrid
        rowData={reportData?.items.tableData}
        columnDefs={reportData?.items.columnDefs}
      />
    </section>
  );
};

export default Reports;
