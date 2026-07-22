"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope, Sparkles, Zap, AlignCenter, Star, Shield, Crown, AlertCircle, ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Sparkles, Zap, AlignCenter, Star, Shield, Crown, AlertCircle,
};

const categoryColors: Record<string, string> = {
  general: "from-blue-500 to-blue-700",
  cosmetic: "from-purple-500 to-pink-600",
  restorative: "from-teal-500 to-cyan-600",
  preventive: "from-green-500 to-emerald-600",
  emergency: "from-red-500 to-rose-600",
};

export function ServicesSection() {
  const featured = services.filter((s) => s.featured);

  return (
    <section className="section-py bg-white" aria-labelledby="services-section-heading">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive Dental"
            highlight="Services"
            description="From routine check-ups to complete smile transformations — we offer the full spectrum of modern dental care."
            align="left"
          />
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 text-[--color-primary] font-semibold hover:gap-3 transition-all duration-200"
            aria-label="View all dental services"
          >
            View All Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Stethoscope;
            const gradient = categoryColors[service.category] ?? "from-blue-500 to-blue-700";

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-[--color-surface] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-primary]"
                  aria-label={`${service.title} – Learn more`}
                >
                  {/* Icon header */}
                  <div className={cn("relative p-8 bg-[--color-primary]", gradient)}>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <div
                      className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/10 translate-x-8 translate-y-8"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-bold text-[--color-text] mb-2 group-hover:text-[--color-primary] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[--color-text-muted] leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-1.5 mt-4 text-[--color-primary] font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
