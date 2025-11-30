"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Interface for each column
export interface SummaryColumn {
  key: string;
  label: string;
}

// Interface for each row
export interface SummaryRow {
  object_type: string;
  values: Record<string, string | number | null>;
}

// Interface for whole table data
export interface SummaryOverview {
  columns: SummaryColumn[];
  rows: SummaryRow[];
}

// Component Props Interface
interface SummaryTableProps {
  summaryOverview: SummaryOverview;
}

export default function SummaryTable({ summaryOverview }: SummaryTableProps) {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-accent dark:bg-accent">
            <TableHead className="font-semibold text-black dark:text-white border-r">
              Object
            </TableHead>

            {summaryOverview.columns.map((column, index) => (
              <TableHead
                key={column.key}
                className={`font-semibold text-black dark:text-white ${
                  index !== summaryOverview.columns.length - 1
                    ? "border-r"
                    : ""
                }`}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {summaryOverview.rows.map((row, index) => (
            <TableRow
              key={index}
            >
              <TableCell className="font-medium text-black dark:text-gray-100 border-r">
                {row.object_type}
              </TableCell>

              {summaryOverview.columns.map((column, colIndex) => {
                const value = row.values[column.key];
                return (
                  <TableCell
                    key={column.key}
                    className={`${
                      value
                        ? "text-black dark:text-white"
                        : "text-gray-400 dark:text-gray-500"
                    } border-r ${
                      colIndex === summaryOverview.columns.length - 1
                        ? "border-r-0"
                        : ""
                    }`}
                  >
                    {value || ""}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
