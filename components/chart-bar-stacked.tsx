"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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

export default function ChartDiscrepancyStacked({ data }: { data: ItemType[] }) {

  const uniqueResults = Array.from(
    new Set(
      data.flatMap((item) =>
        item.checks.flatMap((c) => c.results.map((r) => r.result.trim()))
      )
    )
  );

  const chartConfig: ChartConfig = uniqueResults.reduce(
    (acc: any, key, index) => {
      acc[key] = {
        label: key,
        color: `var(--chart-${index + 1})`,
      };
      return acc;
    },
    {}
  );


  const chartData = data.map((item) => {
    const row: any = { object_type: item.object_type };

    uniqueResults.forEach((res) => {
      row[res] = 0;
    });

    item.checks.forEach((check) => {
      check.results.forEach((r) => {
        row[r.result.trim()] += r.count;
      });
    });

    return row;
  });


  return (
    <Card>
      <CardHeader>
        <CardTitle>Discrepancy Summary</CardTitle>
        <CardDescription>
          Missing Data, Mismatch & Status Issues
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="object_type"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(v) => v.slice(0, 8) + "..."}
            />

            <ChartTooltip content={<ChartTooltipContent indicator="line" hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />

            {uniqueResults.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={chartConfig[key].color}
                radius={
                  index === 0
                    ? [0, 0, 4, 4]
                    : index === uniqueResults.length - 1
                    ? [4, 4, 0, 0] 
                    : 0 // middle bars
                }
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
