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
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Welcome to Edross Dental"
      style={{
        background: "var(--color-primary)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white opacity-[0.08] blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-white opacity-[0.06] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-black opacity-[0.04] blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left – Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-[--color-accent] animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold">Premium Dental Care in South Africa</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.08] tracking-tight"
            >
              Your{" "}
              <span
                className="relative inline-block"
                style={{
                  color: "#dff0ff",
                }}
              >
                Healthiest
              </span>
              <br />
              Smile Starts Here.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-blue-100 max-w-lg leading-relaxed"
            >
              Compassionate, expert dental care for the whole family. From routine check-ups to full smile transformations — we make every visit exceptional.
            </motion.p>

            {/* Feature bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
              aria-label="Key features"
            >
              {[
                "Same-day emergency appointments available",
                "All major medical aids accepted",
                "State-of-the-art technology & modern facilities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-blue-100 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-[--color-accent] shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                href="/appointments"
                size="lg"
                variant="white"
                icon={<Calendar className="h-5 w-5" aria-hidden="true" />}
              >
                Book Appointment
              </Button>
              <Button
                href={`tel:${CLINIC_INFO.contact.phonePlain}`}
                size="lg"
                variant="outline"
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
                className="border-white/40 text-white hover:bg-white hover:text-[--color-primary]"
              >
                Call Our Clinic
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
              role="list"
              aria-label="Trust indicators"
            >
              {trustBadges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  role="listitem"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3.5 py-2 border border-white/20"
                >
                  <Icon className="h-4 w-4 text-[--color-accent]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium text-white">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[--color-secondary] opacity-20 blur-3xl scale-90 rounded-full" aria-hidden="true" />

              {/* Main hero image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=85"
                  alt="A patient smiling after receiving dental treatment at Edross Dental"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 0px, 50vw"
                />
                <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
              </div>

              {/* Floating card – patients */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -left-8 bottom-16 z-20 glass rounded-2xl px-4 py-3 shadow-xl"
                aria-hidden="true"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[--color-secondary] border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[--color-text]">10,000+ Patients</p>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card – experience */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-16 z-20 glass rounded-2xl px-4 py-3 shadow-xl"
                aria-hidden="true"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[--color-accent] flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-[--color-text-muted] font-medium">Experience</p>
                    <p className="text-sm font-bold text-[--color-text]">20+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
