"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const fullTitle = highlight
    ? title.replace(highlight, `__HIGHLIGHT__${highlight}__END__`)
    : title;

  const titleParts = highlight
    ? fullTitle.split(/__HIGHLIGHT__|__END__/)
    : [title];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col gap-3", alignClasses[align], className)}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 editorial-kicker",
            light ? "text-[--color-on-primary-subtle]" : "text-[--color-primary]"
          )}
        >
          <span className="block h-px w-6 bg-current opacity-60" />
          {eyebrow}
          <span className="block h-px w-6 bg-current opacity-60" />
        </span>
      )}

      <h2
        className={cn(
          "text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em]",
          light ? "text-white" : "text-[--color-text]"
        )}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[2]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl",
            light ? "text-[--color-on-primary-muted]" : "text-[--color-text-muted]"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
