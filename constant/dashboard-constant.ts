import {
  LayoutDashboard,
  FolderKanban,
  LucideIcon,
} from "lucide-react"

interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Reports", url: "/dashboard/reports", icon: FolderKanban },
];

export const chatHistory = [
  {
    id: "1",
    title: "Prod Incident: DB Pool Exhaustion",
    lastMessage: "Incident closed. Root cause: unoptimized query in reporting service. Applied temporary fix and scheduled full review.",
    time: "10:22 AM",
    unread: 2,
  },
  {
    id: "2",
    title: "Feature Request: Dashboard Dark Mode",
    lastMessage: "Design mockups V1.2 are finalized. Frontend team will begin work on the core components next sprint.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: "3",
    title: "Inventory Service Latency Fix",
    lastMessage: "Identified the bottleneck in the stock recalculation endpoint. Implementing caching layer now for performance boost.",
    time: "Tue",
    unread: 3,
  },
  {
    id: "4",
    title: "Alert: Payment Gateway Webhook Errors",
    lastMessage: "Received 14 new logs. Looks like a misconfigured security group is blocking IPN callbacks. Investigating with Ops.",
    time: "Mon",
    unread: 0,
  },
  {
    id: "5",
    title: "L2 Escalation: Password Reset Issue",
    lastMessage: "Escalated to L2. The issue is intermittent and seems related to the oldest authentication microservice. Expected resolution: EOD.",
    time: "Sat",
    unread: 1,
  },
  {
    id: "6",
    title: "Team Standup & Sprint 14 Summary",
    lastMessage: "Summary updated. QA signed off on all critical P1 tickets. Focus for next sprint is on Q3 platform stability goals.",
    time: "Fri",
    unread: 0,
  },
  {
    id: "7",
    title: "CI/CD Staging Deployment Block",
    lastMessage: "The latest Docker build failed due to a missing dependency in the `package.json`. Fix pushed to `dev-hotfix` branch.",
    time: "Thu",
    unread: 5,
  },
  {
    id: "8",
    title: "Postgres 12 to 14 Migration Plan",
    lastMessage: "Finalized the rollback procedure and tested the migration script in sandbox. Targeting production deployment for next weekend's maintenance window.",
    time: "Wed",
    unread: 0,
  },
  {
    id: "9",
    title: "UI/UX: Mobile Settings Page Fix",
    lastMessage: "Implemented new mobile viewport breakpoints. The updated layout is now consistent across all major devices and orientations.",
    time: "11:10 AM",
    unread: 1,
  },
  {
    id: "10",
    title: "Security Patch: OAuth Library",
    lastMessage: "Patched the vulnerability by upgrading the OAuth dependency to v3.1.2. Running a full security scan now to confirm mitigation.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: "11",
    title: "Log Monitor: Unexplained Traffic Spike",
    lastMessage: "Significant spike detected. Initial analysis suggests a potential bot scraping attempt. Implemented WAF rules to block the pattern.",
    time: "Tue",
    unread: 4,
  },
  {
    id: "12",
    title: "Load Balancer: US-East-1 Latency",
    lastMessage: "Auto-scaling successfully added 2 new instances. Load is now distributed, and P95 latency is back to normal range.",
    time: "Mon",
    unread: 0,
  },
  {
    id: "13",
    title: "Frontend Build Optimization",
    lastMessage: "Build #248 completed successfully. Reduced main bundle size by 15% via dynamic imports and code splitting.",
    time: "Sun",
    unread: 1,
  },
  {
    id: "14",
    title: "API Rate Limit Alert (Partner)",
    lastMessage: "The partner's API key has been temporarily throttled. Reached out to their team to discuss traffic consumption patterns.",
    time: "Sat",
    unread: 2,
  },
  {
    id: "15",
    title: "Q4 KPI Report & Churn Analysis",
    lastMessage: "The monthly report has been finalized and uploaded to Drive. Key takeaway: churn rate decreased by 3% following the onboarding flow redesign.",
    time: "Fri",
    unread: 0,
  },
];
