import { DataSource } from "@/interfaces/chat.interface";

  export const dataSources: DataSource[] = [
    {
      name: 'EAI Inventory',
      icon: 'file-tray',
      value: 'INV',
      lastSync: new Date(),
      connected: true
    },
    {
      name: 'EPNM Network',
      icon: 'network',
      value: 'NETWORK',
      lastSync: new Date(),
      connected: true
    },
    {
      name: 'Discrepancy Data',
      icon: 'analytics',
      value: 'discrepancy',
      lastSync: new Date(),
      connected: true
    }
  ];