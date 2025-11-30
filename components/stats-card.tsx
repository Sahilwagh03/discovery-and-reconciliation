import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: number | string;
  delta?: number;
  icon?: LucideIcon;
  className?: string;
}

export function StatCard({
  title,
  value,
  delta,
  icon: Icon,
  className = "",
}: StatCardProps) {
  return (
    <Card className={`rounded-2xl p-3 shadow-md ${className}`}>
      <CardContent className="p-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg">
              {Icon && <Icon className="w-6 h-6" />}
            </div>

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-200">
                {title}
              </p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                {value}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
