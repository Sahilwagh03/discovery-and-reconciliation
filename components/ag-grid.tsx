"use client";

import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";
import { ColDef } from "ag-grid-community";
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import { useMemo } from "react";
import { useTheme } from "next-themes";

ModuleRegistry.registerModules([AllCommunityModule]);

type RowType = {
  name: string;
  age: number;
  city: string;
};

export default function DataAgGrid() {
  const { theme, systemTheme } = useTheme();

  // Determine the actual theme to use
  const actualTheme = useMemo(() => {
    if (theme === "system") {
      return systemTheme || "light";
    }
    return theme || "light";
  }, [theme, systemTheme]);

  const isDark = actualTheme === "dark";

  const customTheme = useMemo(
    () =>
      themeQuartz.withParams({
        // Backgrounds
        backgroundColor: "var(--background)",
        foregroundColor: "var(--foreground)",

        // Header
        headerBackgroundColor: "var(--muted)",
        headerTextColor: "var(--muted-foreground)",

        // Borders
        borderColor: "var(--accent-border)",

        // Rows
        rowHoverColor: "var(--muted)",
        selectedRowBackgroundColor: "var(--muted)",
        
        // Spacing + UI
        spacing: 8,
        headerHeight: 46,
        rowHeight: 40,
        borderRadius: 6,

        // Font matching Shadcn
        fontSize: 14,
        fontFamily:
          "var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }),
    []
  );

  const colDefs: ColDef<RowType>[] = [
    {
      field: "name",
      filter: "agTextColumnFilter",
      sortable: true,
      flex: 1,
      minWidth: 150,
    },
    {
      field: "age",
      filter: "agNumberColumnFilter",
      sortable: true,
      flex: 1,
      minWidth: 100,
    },
    {
      field: "city",
      filter: "agTextColumnFilter",
      sortable: true,
      flex: 1,
      minWidth: 150,
    },
  ];

  const rowData: RowType[] = [
    { name: "Sahil", age: 22, city: "Mumbai" },
    { name: "Aarav", age: 25, city: "Delhi" },
    { name: "Priya", age: 28, city: "Bangalore" },
    { name: "Rohan", age: 24, city: "Pune" },
    { name: "Neha", age: 26, city: "Chennai" },
  ];

  return (
    <div className="w-full min-h-screen transition-colors duration-200">
        <div className="rounded-lg overflow-hidden shadow-lg border">
          <div className="w-full h-[500px]">
            <AgGridReact<RowType>
              rowData={rowData}
              columnDefs={colDefs}
              theme={customTheme}
              domLayout="normal"
              animateRows={true}
              rowSelection="multiple"
              pagination={true}
              paginationPageSize={10}
              paginationPageSizeSelector={[10, 20, 50]}
            />
          </div>
        </div>
    </div>
  );
}
