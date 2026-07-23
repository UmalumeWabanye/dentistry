import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "Read real reviews and testimonials from Edross Dental patients about their dental experience.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-36"
        style={{ background: "var(--color-primary)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-on-primary-subtle] font-semibold uppercase tracking-widest text-sm mb-4">Patient Stories</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--color-on-primary] mb-6 leading-tight"
          >
            What Our Patients Say
          </h1>
          <p className="text-[--color-on-primary-muted] text-lg max-w-2xl mx-auto">
            Real experiences from real patients. Thousands of South Africans trust Edross Dental.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-[--color-surface] border-b border-[--color-border]">
        <div className="container-custom">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {CLINIC_INFO.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-bold text-[--color-primary]">
                  {stat.value.toLocaleString()}{stat.suffix}
                </dt>
                <dd className="text-sm text-[--color-text-muted] mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Reviews"
            title="Hear From Our Patients"
            description="Every review below is from a verified patient who has experienced the Edross Dental difference."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="bg-[--color-surface] rounded-3xl p-7 flex flex-col hover:shadow-[var(--shadow-lg)] transition-all duration-300"
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="flex items-center gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-[--color-primary]/30 mb-3" aria-hidden="true" />
                <blockquote className="text-[--color-text-muted] text-sm leading-relaxed flex-1 italic mb-5">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-[--color-border]">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={t.avatar} alt={`Photo of ${t.name}`} fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[--color-text] truncate">{t.name}</p>
                    <p className="text-xs text-[--color-primary]">{t.treatment}</p>
                  </div>
                  {t.verified && (
                    <span className="text-xs text-emerald-600 font-medium bg-emerald-50 rounded-full px-2.5 py-1 shrink-0">
                      ✓ Verified
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
