"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { CLINIC_INFO } from "@/lib/constants";

export function StatsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "var(--color-primary)",
      }}
      aria-label="Our achievements"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white opacity-5 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white opacity-5 translate-x-1/3 translate-y-1/3 blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Why We're Trusted"
          title="Numbers That Speak for Themselves"
          description="Decades of experience, thousands of smiles transformed, and an unwavering commitment to excellence."
          align="center"
          light
          className="mb-12"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {CLINIC_INFO.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
