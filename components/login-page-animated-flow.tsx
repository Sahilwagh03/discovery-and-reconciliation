"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import InventoryIcon from "./icons/InventoryIcon";
import NetworkIcon from "./icons/NetworkIcon";
import DiscrepancyIcon from "./icons/Discrepency";
import { BarChart, User } from "lucide-react";

const Box = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex size-16 items-center justify-center rounded-xl",
        "backdrop-blur-xl bg-background dark:bg-zinc-900",
        "border border-border/40 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";

export function AnimatedBeamMultiple({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center p-12 overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="relative flex size-full max-w-2xl flex-row items-center justify-between gap-16">
        <div className="flex flex-col justify-center gap-16">
          <Box ref={div1Ref}>
            <InventoryIcon className="fill-black dark:fill-white size-8" />
          </Box>
          <Box ref={div2Ref}>
            <NetworkIcon className="fill-black dark:fill-white size-8" />
          </Box>
          <Box ref={div3Ref}>
            <BarChart className="size-8" />
          </Box>
        </div>
        <div className="flex flex-col justify-center">
          <Box
            ref={div4Ref}
            className="size-20"
          >
            <DiscrepancyIcon className="fill-black dark:fill-white size-8" />
          </Box>
        </div>
        <div className="flex flex-col justify-center">
          <Box ref={div5Ref}>
            <User className="size-8" />
          </Box>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        gradientStartColor="#ffaa40"
        gradientStopColor="#9c40ff"
        duration={1.75}
        delay={0}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        gradientStartColor="#ffaa40"
        gradientStopColor="#9c40ff"
        duration={1.75}
        delay={0}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        gradientStartColor="#ffaa40"
        gradientStopColor="#9c40ff"
        duration={1.75}
        delay={0}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        gradientStartColor="#9c40ff"
        gradientStopColor="#ffaa40"
        duration={1.75}
        delay={0.2}
      />
    </div>
  );
}
