"use client";

import { AgGridReact } from "ag-grid-react";
import { ColDef, themeQuartz } from "ag-grid-community";

import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

ModuleRegistry.registerModules([AllCommunityModule]);

interface DataAgGridProps {
  rowData?: any[];
  columnDefs?: ColDef<any,any>[];
  className?:string;
}

export default function DataAgGrid({rowData=[],columnDefs=[],className}:DataAgGridProps) {
  console.log(rowData,columnDefs)
  const customTheme = useMemo(
    () =>
      themeQuartz.withParams({
        backgroundColor: "var(--background)",
        foregroundColor: "var(--foreground)",
        headerBackgroundColor: "var(--muted)",
        headerTextColor: "var(--muted-foreground)",
        borderColor: "var(--accent-border)",
        rowHoverColor: "var(--muted)",
        selectedRowBackgroundColor: "var(--muted)",
        spacing: 8,
        headerHeight: 46,
        rowHeight: 40,
        borderRadius: 6,
        fontSize: 14,
        fontFamily:
          "var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }),
    []
  );

  return (
    <div className="w-full transition-colors duration-200">
        <div className="rounded-lg overflow-hidden shadow-lg border">
          <div className={cn("tableContainer w-full h-120" , className)}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              suppressFieldDotNotation
              theme={customTheme}
              domLayout="normal"
              animateRows={true}
              pagination={true}
              paginationPageSize={50}
              paginationPageSizeSelector={[20, 50 , 100 , 150]}
            />
          </div>
        </div>
    </div>
  );
}
