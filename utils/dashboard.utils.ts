import {
  DeltaSummary,
  DiscrepancyItem,
  SummaryOverview,
  TargetColumn,
  TargetJson,
  TargetRow,
} from "@/interfaces/dashboard.interface";
import { ColDef } from "ag-grid-community";
import { X } from "lucide-react";

export const slugify = (s: string) => {
  return s
    .replaceAll(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .replaceAll(/\s+/g, "")
    .replace(/^(.)/, (c) => c.toLowerCase());
};

export const getKey = (check: string, result: string): string => {
  // Combine check and result in a way to get a unique "key"
  if (result === "Value mismatch detected.") {
    return slugify(`mismatch${check.trim().replaceAll(/[^a-zA-Z0-9]/g, "")}`);
  }
  if (result.includes("Missing")) {
    return slugify(
      "missing" + result.replace("Missing in ", "").replaceAll(" ", "")
    );
  }
  return slugify(`${check}-${result}`);
};

export const transformToSummaryJson = (
  source: SummaryOverview[]
): TargetJson => {
  const columnsMap = new Map<string, string>();

  // Build a unique set of columns from the data itself
  for (const obj of source) {
    for (const check of obj.checks) {
      for (const result of check.results) {
        const key = getKey(check.check_name, result.result);
        let label = "";
        if (result.result.includes("Value mismatch detected")) {
          label = `${check.check_name.trim()} - ${result.result.replace(
            ".",
            ""
          )}`;
        } else {
          label = result.result;
        }
        columnsMap.set(key, label);
      }
    }
  }

  const columns: TargetColumn[] = Array.from(columnsMap, ([key, label]) => ({
    key,
    label,
  }));

  // Build rows
  const rows: TargetRow[] = source.map((obj) => {
    const values: Record<string, number | null> = {};
    for (const col of columns) {
      values[col.key] = null; // Default to null
    }
    for (const check of obj.checks) {
      for (const result of check.results) {
        const key = getKey(check.check_name, result.result);
        values[key] = (values[key] === null ? 0 : values[key]!) + result.count;
      }
    }
    for (const key in values) {
      if (values[key] === 0) values[key] = null;
    }
    return {
      object_type: obj.object_type,
      values,
    };
  });

  return {
    columns,
    rows,
  };
};

export const countResults = (data: DiscrepancyItem[]): DeltaSummary[] => {

  const counts: Record<string, number> = {};

  // Count occurrences
  for (const item of data) {
    counts[item.result] = (counts[item.result] || 0) + 1;
  }

  
  // Convert counts to output
  const output: DeltaSummary[] = Object.entries(counts).map(
    ([result, count]) => ({
      result: result.slice(1), 
      count,
      icon: result[0] || "",
    })
  );

  // Add total at the top
  output.unshift({
    result: "Total Discrepancies",
    count: data.length,
    icon: "❌",
  });

  return output;
};

export const createColumnDefs = (data: any[]): ColDef[] => {
  if (!data || data.length === 0) {
    return [];
  }
  const keys = Object.keys(data[0]);
  const definitions: ColDef[] = keys.map((key): ColDef => {
    return {
      field: key,
      headerName: formatHeader(key),
      sortable: true,
      filter: true,
      resizable: true,
    };
  });
  return definitions;
};

export const formatHeader = (str: string): string => {
  const splitStr = str
    .replaceAll("_", " ")
    .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase();

  return splitStr
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
