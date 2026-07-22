import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope, Sparkles, Zap, AlignCenter, Star, Shield, Crown, AlertCircle, ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dental Services",
  description: "Explore the full range of dental services at Edross Dental – from general check-ups to cosmetic smile transformations and emergency care.",
};

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Sparkles, Zap, AlignCenter, Star, Shield, Crown, AlertCircle,
};

const categoryGradients: Record<string, string> = {
  general: "from-blue-500 to-blue-700",
  cosmetic: "from-purple-500 to-pink-600",
  restorative: "from-teal-500 to-cyan-600",
  preventive: "from-green-500 to-emerald-600",
  emergency: "from-red-500 to-rose-600",
};

const categoryLabels: Record<string, string> = {
  general: "General",
  cosmetic: "Cosmetic",
  restorative: "Restorative",
  preventive: "Preventive",
  emergency: "Emergency",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a2744 0%, #0F4C81 100%)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-secondary] font-semibold uppercase tracking-widest text-sm mb-4">Our Services</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Comprehensive Dental Care
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            From routine check-ups to complete smile transformations — we offer everything your family needs under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="All Services"
            title="Everything You Need"
            highlight="In One Place"
            description="Explore our comprehensive range of dental services, each delivered with expertise and compassion."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Stethoscope;
              const gradient = categoryGradients[service.category];
              const catLabel = categoryLabels[service.category];

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-primary]"
                  aria-label={`${service.title} – learn more`}
                >
                  {/* Coloured header */}
                  <div className={cn("p-8 bg-gradient-to-br relative overflow-hidden", gradient)}>
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold bg-white/20 text-white rounded-full px-3 py-1 uppercase tracking-wider">
                        {catLabel}
                      </span>
                    </div>
                    <div
                      className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/10"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-[--color-text] mb-2 group-hover:text-[--color-primary] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-[--color-text-muted] leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[--color-text-muted]">
                      <span>Duration: {service.duration}</span>
                      <span className="flex items-center gap-1 text-[--color-primary] font-semibold group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
