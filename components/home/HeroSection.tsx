"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Calendar, Star, Shield, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";

const floatingVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const trustBadges = [
  { icon: Award, text: "20+ Years Experience" },
  { icon: Shield, text: "SADA Registered" },
  { icon: Star, text: "98% Satisfaction Rate" },
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[--color-surface]"
      aria-label="Welcome to Edross Dental"
    >
      <div className="absolute inset-0 editorial-grid opacity-25" aria-hidden="true" />

      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[--color-surface-2]" aria-hidden="true" />

      <div className="container-custom relative z-10 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="space-y-8 lg:space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="editorial-kicker text-[--color-primary]"
            >
              Neighbourhood dental care for every stage of your smile.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl text-[4.3rem] leading-[0.88] tracking-[-0.06em] text-[--color-primary] sm:text-[5.5rem] lg:text-[8rem] xl:text-[10rem]"
            >
              Healthier smiles,
              <br />
              thoughtfully restored.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
            >
              <div className="max-w-2xl space-y-4">
                <p className="font-[var(--font-mono)] text-[1.05rem] leading-[1.7] text-[--color-text-muted] sm:text-[1.2rem]">
                  We offer comprehensive dental care shaped around your goals, with a calm clinic atmosphere,
                  experienced clinicians, and modern treatment planning that keeps every visit clear and reassuring.
                </p>
                <ul className="grid gap-2 text-sm text-[--color-text-muted] sm:grid-cols-2">
                  {[
                    "Preventive care that keeps treatment simple",
                    "Aesthetic and restorative work with a natural finish",
                    "Same-day emergency support when you need it most",
                    "A practice designed to feel calm, private, and personal",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[--color-accent]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
                <Button
                  href="/appointments"
                  size="lg"
                  icon={<Calendar className="h-5 w-5" aria-hidden="true" />}
                >
                  Book Today
                </Button>
                <Button
                  href={`tel:${CLINIC_INFO.contact.phonePlain}`}
                  size="lg"
                  variant="outline"
                  icon={<Phone className="h-5 w-5" aria-hidden="true" />}
                  className="bg-[--color-surface]"
                >
                  Call Clinic
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 sm:grid-cols-[1.1fr_0.85fr] lg:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[--color-primary] shadow-[var(--shadow-primary)] sm:translate-y-14">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=85"
                  alt="A patient smiling after receiving dental treatment at Edross Dental"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35%,rgba(20,31,26,0.22)_100%)]" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-[2rem] bg-[--color-surface-2] shadow-[var(--shadow-sm)]">
                <div className="relative aspect-[4/4.3]">
                  <Image
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
                    alt="A calm consultation area inside Edross Dental"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 24vw"
                  />
                </div>
              </div>

              <div className="editorial-panel rounded-[2rem] p-6 sm:p-7">
                <p className="editorial-kicker mb-4 text-[--color-primary]">At a glance</p>
                <div className="grid gap-4">
                  {trustBadges.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[--color-surface-2] text-[--color-primary]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[--color-text]">{text}</p>
                        <p className="text-xs text-[--color-text-light]">Personal, precise, and prevention-led care.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
