import { ChartBarStacked } from "@/components/chart-bar-stacked";
import { ChartPieSimple } from "@/components/chart-pie-simple";
import SummaryTable, { SummaryOverview } from "@/components/summary-table";

const data: SummaryOverview = {
  columns: [
    { key: "mismatch", label: "Mismatch" },
    { key: "missing_inventory", label: "Missing in Inventory" },
    { key: "missing_network", label: "Missing in Network" },
    { key: "total_discrepancy", label: "Total Discrepancy" },
  ],
  rows: [
    {
      object_type: "Network Object",
      values: {
        mismatch: 1,
        missing_inventory: 0,
        missing_network: 2,
        total_discrepancy: 3,
      },
    },
    {
      object_type: "Logical Interface",
      values: {
        mismatch: 20,
        missing_inventory: 5,
        missing_network: 1,
        total_discrepancy: 26,
      },
    },
    {
      object_type: "RD",
      values: {
        mismatch: 0,
        missing_inventory: 12,
        missing_network: 0,
        total_discrepancy: 12,
      },
    },
    {
      object_type: "RT",
      values: {
        mismatch: 3,
        missing_inventory: 1,
        missing_network: 4,
        total_discrepancy: 8,
      },
    },
  ],
};

const DashboardPage = () => {
  return (
    <section className="min-h-screen flex flex-col gap-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
          Welcome Sahil👋
        </h1>
      </div>
      <div>
        <SummaryTable summaryOverview={data} />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <ChartBarStacked />
        <ChartPieSimple />
      </div>
    </section>
  );
};

export default DashboardPage;
