import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Icon, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  title: string;
  value: number | string;
  icon?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  icon = "",
  className = "",
}: StatCardProps) {
  return (
    <Card className={cn("rounded-2xl p-3 shadow-md justify-center",className)}>
      <CardContent className="p-0">
          <div className="flex items-center gap-2">
            <div className="text-3xl flex justify-center items-center p-1 rounded-lg">
              {icon && icon}
            </div>

            <div className="flex flex-col flex-2">
              <p className="text-sm text-slate-500 dark:text-slate-200">
                {title}
              </p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                {value}
              </p>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
