"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
  light?: boolean;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  className,
  light = false,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const currentValue = Math.round(startValue + easedProgress * (value - startValue));
      setCount(currentValue);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center gap-1", className)}
    >
      <span
        className={cn(
          "text-4xl sm:text-5xl font-bold  tabular-nums",
          light ? "text-white" : "text-[--color-primary]"
        )}
        aria-label={`${prefix}${value}${suffix}`}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <span
        className={cn(
          "text-sm sm:text-base font-medium",
          light ? "text-[--color-on-primary-muted]" : "text-[--color-text-muted]"
        )}
      >
        {label}
      </span>
    </div>
  );
}
