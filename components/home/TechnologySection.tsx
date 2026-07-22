"use client";

import { motion } from "framer-motion";
import { Zap, Scan, Box, FlaskConical } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECHNOLOGIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Zap, Scan, Box, FlaskConical,
};

export function TechnologySection() {
  return (
    <section className="section-py bg-[--color-surface]" aria-labelledby="technology-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <SectionHeading
              eyebrow="Our Technology"
              title="State-of-the-Art"
              highlight="Technology"
              description="We invest in the latest dental technology to ensure precise diagnosis, comfortable treatment, and outstanding results."
              align="left"
              className="mb-10"
            />

            <div className="space-y-5">
              {TECHNOLOGIES.map((tech, index) => {
                const Icon = iconMap[tech.icon] ?? Zap;

                return (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[--color-primary]/10 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-[--color-primary]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[--color-text] mb-1">{tech.title}</h3>
                      <p className="text-sm text-[--color-text-muted] leading-relaxed">{tech.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="aspect-square rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0F4C81 0%, #53B6F0 100%)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center" aria-hidden="true">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  {TECHNOLOGIES.map((tech) => {
                    const Icon = iconMap[tech.icon] ?? Zap;
                    return (
                      <div
                        key={tech.title}
                        className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center gap-3 border border-white/20"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <span className="text-white text-xs font-semibold text-center leading-tight">{tech.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div
              className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl border-4 border-[--color-secondary]/30"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
