"use client";

import { Zap, Scan, Box, FlaskConical } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECHNOLOGIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Zap, Scan, Box, FlaskConical,
};

export function TechnologySection() {
  return (
    <section className="section-py bg-[--color-background]" aria-labelledby="technology-heading">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our Technology"
              title="Precision Technology"
              description="Modern diagnostics and treatment systems that support safer, more predictable outcomes."
              align="left"
              className="mb-6"
            />
            <p className="text-sm leading-relaxed text-[--color-text-muted] sm:text-base">
              Every tool we use is selected to improve comfort, accuracy, and clarity throughout your care journey.
            </p>
          </div>

          <div className="space-y-4">
            {TECHNOLOGIES.map((tech) => {
              const Icon = iconMap[tech.icon] ?? Zap;
              return (
                <div
                  key={tech.title}
                  className="editorial-panel flex items-start gap-4 rounded-3xl p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[--color-surface-2] text-[--color-primary] shrink-0">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[--color-text]">{tech.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[--color-text-muted]">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
