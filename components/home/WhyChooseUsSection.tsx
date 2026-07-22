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
    <section className="section-py bg-[--color-surface]" aria-labelledby="why-choose-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Edross Dental"
          title="The Edross Dental"
          highlight="Difference"
          description="We combine clinical excellence with genuine patient care to deliver a dental experience unlike any other."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group relative bg-white rounded-3xl p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1.5 border border-transparent hover:border-[--color-secondary]/20 overflow-hidden"
              >
                {/* Hover accent */}
                <div
                  className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  aria-hidden="true"
                />

                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[--color-surface] group-hover:bg-[--color-primary] flex items-center justify-center transition-colors duration-300 shadow-[var(--shadow-sm)]">
                    <Icon
                      className="h-7 w-7 text-[--color-primary] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[--color-text] mb-2 group-hover:text-[--color-primary] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[--color-text-muted] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
