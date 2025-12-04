"use client";

import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";

interface ResultType {
  result: string;
  count: number;
}

interface CheckType {
  check_name: string;
  results: ResultType[];
}

interface ItemType {
  object_type: string;
  total_count: number;
  checks: CheckType[];
}

export default function ChartDiscrepancyPie({ data }: { data: ItemType[] }) {

  const pieData = data.map((item, idx) => {
    const total = item.checks.reduce((sum, check) => {
      return (
        sum +
        check.results.reduce((s, r) => s + r.count, 0)
      );
    }, 0);

    return {
      name: item.object_type,
      value: total,
      fill: `var(--chart-${idx + 1})`,
    };
  });

  const chartConfig: ChartConfig = data.reduce(
    (acc: any, item, idx) => {
      acc[item.object_type] = {
        label: item.object_type,
        color: `var(--chart-${idx + 1})`,
      };
      return acc;
    },
    {}
  );

  const isMobile  = useIsMobile()

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Object-wise Discrepancy Distribution</CardTitle>
        <CardDescription>Total mismatches summarized by object</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  );
}
