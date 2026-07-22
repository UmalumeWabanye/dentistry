"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section className="section-py bg-[--color-background]" aria-labelledby="why-choose-heading">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About The Practice"
              title="A calm clinic experience rooted in trust."
              description="We focus on prevention, thoughtful treatment planning, and transparent communication so patients always feel informed and comfortable."
              align="left"
              className="mb-6"
            />
            <p className="mb-4 text-sm leading-relaxed text-[--color-text-muted] sm:text-base">
              From routine check-ups to complex restorative work, every treatment is delivered with careful clinical standards and an emphasis on long-term oral health.
            </p>
            <p className="text-sm leading-relaxed text-[--color-text-muted] sm:text-base">
              Our team believes excellent dentistry should feel personal, steady, and never rushed.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="editorial-panel rounded-[2rem] p-6">
              <p className="editorial-kicker text-[--color-primary]">20+ years</p>
              <p className="mt-2 text-sm leading-relaxed text-[--color-text-muted]">Serving families across South Africa with consistent, trusted care.</p>
            </div>
            <div className="editorial-panel rounded-[2rem] p-6">
              <p className="editorial-kicker text-[--color-primary]">Patient-first</p>
              <p className="mt-2 text-sm leading-relaxed text-[--color-text-muted]">Treatment plans that prioritise comfort, clarity, and realistic outcomes.</p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] sm:col-span-2">
              <div className="relative aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-ec7e7f2f6dd5?w=1200&q=80"
                  alt="Dentist consulting with a patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
