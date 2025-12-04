'use client'
import ChartBarStacked from "@/components/chart-bar-stacked";
import ChartPieSimple from "@/components/chart-pie-simple";
import DashboardHomeSkeleton from "@/components/loading/sections/dashboard/DashboardHomeSkeleton";
import SummaryTable from "@/components/summary-table";
import { useDashboard } from "@/hooks/useDashboard";

export default function DashboardPage() {
  const { isLoading, data } = useDashboard();

  if (isLoading) return <DashboardHomeSkeleton />;

  return (
    <section className="min-h-screen flex flex-col gap-6">
      <h1 className="text-2xl lg:text-3xl font-bold">Welcome Sahil 👋</h1>

      <div className="grid md:grid-cols-2 gap-2">
        <ChartBarStacked data={data}/>
        <ChartPieSimple data={data}/>
      </div>
      
      <SummaryTable summaryOverview={data} />

    </section>
  );
}
