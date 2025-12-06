import { ColDef, GridApi } from "ag-grid-community";
import { LucideIcon } from "lucide-react";

export interface SummaryColumn {
  key: string;
  label: string;
}

export interface SummaryDataResults {
  result: string;
  count: number;
}

export interface SummaryDataChecks {
  check_name: string;
  results: SummaryDataResults[];
}

export interface SummaryOverview {
  object_type: string;
  total_count: number;
  checks: SummaryDataChecks[];
}

export interface TargetColumn {
  key: string;
  label: string;
}

export interface TargetRow {
  object_type: string;
  values: Record<string, number | null>;
}

export interface TargetJson {
  columns: TargetColumn[];
  rows: TargetRow[];
}

export interface SummaryTableProps {
  summaryOverview: SummaryOverview[];
}

export interface DiscrepancyItem {
  ne?: string;
  object_type?: string;
  check_name?: string;
  result: string;
  object?: string;
  network?: string;
  inventory?: string;
  inventory_status?: string;
}

export interface DeltaSummary {
  result: string;
  count: number;
  icon?: string;
}


export interface DiscrepancyReport {
  items: {
    tableData?: any[];
    columnDefs?: ColDef<any,any>[];
  };
  summary: DeltaSummary[];
  gridApi?: GridApi;
}

export interface ColumnDefs {
  field: string;
  filter: boolean;
  headerName: string;
  resizable: boolean;
  sortable: boolean;
}
