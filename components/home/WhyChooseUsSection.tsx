"use client";

import { motion } from "framer-motion";
import {
  Award, Heart, Cpu, CreditCard, Users, Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Award, Heart, Cpu, CreditCard, Users, Shield,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function WhyChooseUsSection() {
  return (
    <section className="section-py bg-[--color-background]" aria-labelledby="why-choose-heading">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="About The Practice"
            title="A refreshed clinic with a warmer way of caring for patients."
            description="We combine contemporary treatment planning, prevention-led care, and a calm, welcoming setting so every patient feels guided rather than rushed."
            align="left"
            className="max-w-xl"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Shield;

            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group editorial-panel rounded-[2rem] p-6 transition-all duration-400 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[--color-surface-2] transition-colors duration-300 group-hover:bg-[--color-primary]">
                    <Icon
                      className="h-5 w-5 text-[--color-primary] group-hover:text-[--color-on-primary] transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mb-3 text-3xl leading-[0.96] tracking-[-0.03em] text-[--color-text]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[--color-text-muted]">
                  {item.description}
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
