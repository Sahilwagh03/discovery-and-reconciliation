"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SummaryOverview, SummaryTableProps, TargetJson } from "@/interfaces/dashboard.interface";
import { transformToSummaryJson } from "@/utils/dashboard.utils";
import { useEffect, useState } from "react";


export default function SummaryTable({ summaryOverview }: SummaryTableProps) {

  const [transformedSummaryData,setTransformedSummaryData] = useState<TargetJson>()
  
  useEffect(() => {
    const transformedData = transformToSummaryJson(summaryOverview)
    setTransformedSummaryData(transformedData)
  }, []);


  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-accent dark:bg-accent">
            <TableHead className="font-semibold py-1 text-black dark:text-white border-r">
              Object
            </TableHead>

            {transformedSummaryData?.columns.map((column, index) => (
              <TableHead
                key={column.key}
                className={`font-semibold whitespace-normal text-center py-1 text-black dark:text-white ${
                  index !== transformedSummaryData?.columns.length - 1
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
          {transformedSummaryData?.rows.map((row, index) => (
            <TableRow
              key={index}
            >
              <TableCell className="font-medium text-black dark:text-gray-100 border-r">
                {row.object_type}
              </TableCell>

              {transformedSummaryData?.columns.map((column, colIndex) => {
                const value = row.values[column.key];
                return (
                  <TableCell
                    key={column.key}
                    className={`${
                      value
                        ? "text-black dark:text-white"
                        : "text-gray-400 dark:text-gray-500"
                    } border-r text-center ${
                      colIndex === transformedSummaryData?.columns.length - 1
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
