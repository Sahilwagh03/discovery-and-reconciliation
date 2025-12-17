"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Brain, Network, ShieldCheck } from "lucide-react";
import { Highlighter } from "./ui/highlighter";

const features = [
  {
    title: "AI-Driven Discovery",
    description:
      "Automatically discovers network elements with intelligent correlation.",
    icon: Brain,
  },
  {
    title: "Real-Time Reconciliation",
    description:
      "Detects mismatches instantly and keeps topology always accurate.",
    icon: Network,
  },
  {
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with high availability and fault tolerance.",
    icon: ShieldCheck,
  },
];
const alignmentClasses = ["mr-auto", "mx-auto", "ml-auto"];

export function FeatureBlock() {
  return (
    <>
      <div className="text-center relative z-10 px-6">
        <h2 className="text-4xl font-bold tracking-tight">
            Features
            That{" "}
            <Highlighter iterations={2} padding={10} isView action="highlight" color="#ffaa40">Matter</Highlighter>
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
         Reliable, efficient, and secure for modern network management.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 px-6 py-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn(
                "flex gap-4 rounded-xl border bg-background/60 p-4 backdrop-blur-md shadow-sm max-w-sm",
                alignmentClasses[index]
              )}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>

              <div>
                <h4 className="text-sm font-semibold leading-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
