import { DataSource } from "@/interfaces/chat.interface";
import { formatLastSyncFixedMidnight } from "@/utils/chat.utils";
import { BarChart, FileText, Network } from "lucide-react";

export const dataSources:DataSource[] = [
  {
    name: "EAI Inventory",
    icon: FileText,
    iconClass: "text-primary w-5 h-5",
    value: "INV",
    lastSync: formatLastSyncFixedMidnight(),
    connected: true,
  },
  {
    name: "EPNM Network",
    icon: Network,
    iconClass: "text-primary w-5 h-5",
    value: "NETWORK",
    lastSync: formatLastSyncFixedMidnight(),
    connected: true,
  },
  {
    name: "Discrepancy Data",
    icon: BarChart,
    iconClass: "text-primary w-5 h-5",
    value: "discrepancy",
    lastSync: formatLastSyncFixedMidnight(),
    connected: true,
  },
];


export const MESSAGE_SENDER = {
  BOT: "bot",
  USER: "user",
  SYSTEM: "system",
  ADMIN: "admin",
};
