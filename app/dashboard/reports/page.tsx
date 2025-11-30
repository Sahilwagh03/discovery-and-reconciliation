import DataAgGrid from "@/components/ag-grid";
import { StatCard } from "@/components/stats-card";
import { AlertTriangle, Box, Layers, WifiOff } from "lucide-react";
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
  return (
    <section className="min-h-screen flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {defaultData.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
      <DataAgGrid/>
    </section>
  );
};

export default Reports;
