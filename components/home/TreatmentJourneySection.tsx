"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, FileText, Smile } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TREATMENT_JOURNEY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, Search, FileText, Smile,
};

export function TreatmentJourneySection() {
  return (
    <section className="section-py bg-white overflow-hidden" aria-labelledby="journey-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Your Journey"
          title="How Your Smile"
          highlight="Transformation Works"
          description="A simple, transparent 4-step process from your first consultation to your final radiant smile."
          align="center"
          className="mb-14"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent] hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {TREATMENT_JOURNEY.map((step, index) => {
              const Icon = iconMap[step.icon] ?? Smile;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center shadow-lg",
                        index === 0 ? "bg-[--color-primary]" :
                        index === 1 ? "bg-[--color-secondary]" :
                        index === 2 ? "bg-[--color-accent]" :
                        "bg-gradient-to-br from-[--color-primary] to-[--color-secondary]"
                      )}
                    >
                      <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-[--color-primary] flex items-center justify-center text-xs font-bold text-[--color-primary]"
                      aria-label={`Step ${step.step}`}
                    >
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[--color-text] mb-2">{step.title}</h3>
                  <p className="text-sm text-[--color-text-muted] leading-relaxed max-w-48">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
