import type { Metadata } from "next";
import Image from "next/image";
import { CLINIC_INFO, WHY_CHOOSE_US, TREATMENT_JOURNEY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";
import { Award, Heart, Cpu, CreditCard, Users, Shield, MessageCircle, Search, FileText, Smile } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Edross Dental — our story, our values, and our commitment to premium, patient-centred dental care in South Africa.",
};

const iconMap: Record<string, React.ElementType> = {
  Award, Heart, Cpu, CreditCard, Users, Shield,
  MessageCircle, Search, FileText, Smile,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-[--color-surface]">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="editorial-kicker mb-5 text-[--color-primary]">About Us</p>
            <h1 className="max-w-xl text-5xl leading-[0.9] tracking-tighter text-[--color-text] sm:text-6xl lg:text-7xl">
              Our Story & Mission
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[--color-text-muted] sm:text-lg">
              Founded on a passion for transforming smiles and improving lives through exceptional dental care.
            </p>
          </div>
          <div className="editorial-panel rounded-4xl p-6 sm:p-8 lg:p-10">
            <p className="editorial-kicker mb-4 text-[--color-primary]">Practice at a glance</p>
            <p className="text-sm leading-relaxed text-[--color-text-muted]">
              Over 20 years of calm, comprehensive care, delivered by a team that prioritises clarity, comfort, and long-term results.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-[--color-background]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Our History"
                title="Over 20 Years of"
                highlight="Exceptional Smiles"
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-[--color-text-muted] leading-relaxed">
                <p>
                  Edross Dental was founded over 20 years ago with a simple but powerful vision: to provide world-class dental care in a warm, welcoming environment that puts patients first.
                </p>
                <p>
                  What started as a small family practice has grown into a full-service dental clinic equipped with the latest technology and staffed by an exceptional team of specialists.
                </p>
                <p>
                  We believe that dental care should be accessible, compassionate, and extraordinary. Every patient who walks through our doors deserves a personalised experience that addresses their unique needs and concerns.
                </p>
                <p>
                  Today, we serve over 10,000 patients and continue to grow because of the trust our community places in us — a trust we earn every single day.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/3 rounded-4xl overflow-hidden shadow-(--shadow-lg)">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
                  alt="The modern, welcoming interior of Edross Dental clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -z-10 -bottom-5 -right-5 w-full h-full rounded-4xl border border-[--color-border]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="These principles guide every decision we make and every patient interaction we have."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon] ?? Shield;
              return (
                <div key={item.title} className="editorial-panel rounded-4xl p-7">
                  <div className="w-14 h-14 rounded-2xl bg-[--color-primary]/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-[--color-primary]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[--color-text] mb-2">{item.title}</h3>
                  <p className="text-sm text-[--color-text-muted] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-py bg-[--color-primary]">
        <div className="container-custom">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {CLINIC_INFO.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-4xl sm:text-5xl font-bold text-[--color-on-primary] mb-2 leading-none">
                  {stat.value.toLocaleString()}{stat.suffix}
                </dt>
                <dd className="text-[--color-on-primary-muted] text-sm sm:text-base font-medium">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
