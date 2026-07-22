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
  general: "bg-[--color-primary]",
  cosmetic: "bg-[--color-secondary]",
  restorative: "bg-[--color-accent]",
  preventive: "bg-[--color-primary-light]",
  emergency: "bg-[--color-text-muted]",
};

export function ServicesSection() {
  const featured = services.filter((s) => s.featured);

  return (
    <section className="section-py bg-[--color-surface]" aria-labelledby="services-section-heading">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive Dental"
            highlight="Services"
            description="From routine check-ups to complete smile transformations — we offer the full spectrum of modern dental care."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Stethoscope;
            const headerColor = categoryColors[service.category] ?? "bg-[--color-primary]";

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-[--color-background] border border-[--color-border] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-primary]"
                  aria-label={`${service.title} – Learn more`}
                >
                  <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                    {/* Content */}
                    <div className="flex flex-col flex-1 p-7 lg:p-8">
                      <p className="editorial-kicker mb-4 text-[--color-primary]">{service.category}</p>
                      <h3 className="mb-4 text-3xl leading-[0.95] tracking-[-0.03em] text-[--color-text] group-hover:text-[--color-primary] transition-colors">
                        {service.title}
                      </h3>
                      <p className="max-w-md text-sm leading-relaxed text-[--color-text-muted] flex-1">
                        {service.shortDescription}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-[--color-primary] font-medium editorial-kicker">
                        Explore
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>
                    <div className={cn("relative min-h-[17rem] overflow-hidden", headerColor)}>
                      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                      </div>
                      <div
                        className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 editorial-kicker text-[--color-primary]"
            aria-label="View all dental services"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
