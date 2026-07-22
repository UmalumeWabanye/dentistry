"use client";

import Link from "next/link";
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
            title="Comprehensive Dental Services"
            description="A complete range of treatment options for prevention, restoration, and smile confidence."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((service) => {
            const Icon = iconMap[service.icon] ?? Stethoscope;
            const headerColor = categoryColors[service.category] ?? "bg-[--color-primary]";

            return (
              <article key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full items-start gap-4 rounded-[2rem] border border-[--color-border] bg-[--color-background] p-6 transition-colors hover:border-[--color-primary]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-primary]"
                  aria-label={`${service.title} – Learn more`}
                >
                  <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", headerColor)}>
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="editorial-kicker mb-2 text-[--color-primary]">{service.category}</p>
                    <h3 className="text-3xl leading-[0.95] tracking-[-0.03em] text-[--color-text] transition-colors group-hover:text-[--color-primary]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[--color-text-muted]">{service.shortDescription}</p>
                    <div className="mt-4 inline-flex items-center gap-2 editorial-kicker text-[--color-primary]">
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </article>
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
