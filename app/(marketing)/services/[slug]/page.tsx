import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Stethoscope, Sparkles, Zap, AlignCenter, Star, Shield, Crown, AlertCircle,
  CheckCircle2, Clock, Activity,
} from "lucide-react";
import { services } from "@/data/services";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/home/CTABanner";
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

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for known slugs
export function generateStaticParams() {
  const slugs = [...new Set(services.map((s) => s.slug))];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Stethoscope;
  const categoryColor = categoryColors[service.category] ?? "bg-[--color-primary]";

  return (
    <>
      {/* Hero */}
      <section
        className={cn("relative py-28 lg:py-36 overflow-hidden", categoryColor)}
      >
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <span className="text-sm font-bold bg-white/20 text-white rounded-full px-4 py-1.5 uppercase tracking-wider">
                {service.category} dentistry
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            >
              {service.title}
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-8">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/appointments" variant="white" size="lg">Book This Treatment</Button>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Activity className="h-4 w-4" aria-hidden="true" />
                  <span>Recovery: {service.recovery}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[--color-text] mb-4">
                  About This Treatment
                </h2>
                <p className="text-[--color-text-muted] leading-relaxed text-lg">{service.description}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[--color-text] mb-5">
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[--color-accent] mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-[--color-text-muted]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-[--color-text] mb-6">
                  Your Treatment Process
                </h2>
                <ol className="space-y-6" aria-label="Treatment steps">
                  {service.process.map((step) => (
                    <li key={step.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[--color-primary] text-white flex items-center justify-center font-bold text-sm shrink-0" aria-label={`Step ${step.step}`}>
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-[--color-text] mb-1">{step.title}</h3>
                        <p className="text-sm text-[--color-text-muted] leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[--color-text] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <Accordion
                    items={service.faqs.map((f, i) => ({
                      id: `${service.id}-faq-${i}`,
                      question: f.question,
                      answer: f.answer,
                    }))}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick info */}
              <div className="bg-[--color-surface] rounded-3xl p-6 border border-slate-200">
                <h3 className="font-bold text-[--color-text] mb-4">Treatment Overview</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[--color-text-muted]">Duration</dt>
                    <dd className="font-semibold text-[--color-text]">{service.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[--color-text-muted]">Recovery</dt>
                    <dd className="font-semibold text-[--color-text]">{service.recovery}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[--color-text-muted]">Category</dt>
                    <dd className="font-semibold text-[--color-text] capitalize">{service.category}</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div
                className={cn("rounded-3xl p-6 text-white", categoryColor)}
              >
                <h3 className="font-bold text-lg mb-2">
                  Ready to get started?
                </h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Book a consultation today and we&apos;ll create your personalised treatment plan.
                </p>
                <Button href="/appointments" variant="white" size="md" className="w-full justify-center">
                  Book Appointment
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
