"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insuranceProviders } from "@/data/insurance";

export function InsuranceSection() {
  const doubled = [...insuranceProviders, ...insuranceProviders];

  return (
    <section className="section-py bg-white overflow-hidden" aria-labelledby="insurance-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Medical Aids & Payments"
          title="We Work With Your"
          highlight="Medical Aid"
          description="We accept all major medical aid schemes in South Africa and offer flexible payment plans for your convenience."
          align="center"
          className="mb-12"
        />

        {/* Marquee */}
        <div className="relative overflow-hidden" role="list" aria-label="Accepted medical aid providers">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-[--color-surface] z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-[--color-surface] z-10 pointer-events-none" aria-hidden="true" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: [0, -(insuranceProviders.length * 200)] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            aria-hidden="true"
          >
            {doubled.map((provider, i) => (
              <div
                key={`${provider}-${i}`}
                className="flex items-center justify-center h-14 px-6 rounded-xl bg-[--color-surface] border border-slate-200 whitespace-nowrap text-sm font-semibold text-[--color-text-muted] hover:text-[--color-primary] hover:border-[--color-secondary]/40 transition-colors shrink-0"
              >
                {provider}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Accessible list (visually hidden but available to screen readers) */}
        <ul className="sr-only">
          {insuranceProviders.map((p) => (
            <li key={p} role="listitem">{p}</li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <p className="text-[--color-text-muted] text-sm">
            Don&apos;t see your medical aid?{" "}
            <a
              href="/contact"
              className="text-[--color-primary] font-semibold hover:underline underline-offset-2"
            >
              Contact us
            </a>{" "}
            and we&apos;ll confirm coverage for you.
          </p>
        </div>
      </div>
    </section>
  );
}
