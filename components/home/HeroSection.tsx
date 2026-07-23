"use client";

import Image from "next/image";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="section-py bg-[--color-background]" aria-label="Welcome to Edross Dental">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="editorial-kicker mb-6 text-[--color-primary]">Edross Dental Practice</p>
            <h1 className="max-w-4xl text-5xl leading-[0.9] tracking-tighter text-[--color-text] sm:text-6xl lg:text-8xl">
              Premium dental care,
              <br />
              personally delivered.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[--color-text-muted] sm:text-lg">
              Comprehensive family, cosmetic, and restorative dentistry in a calm clinical setting with clear guidance at every step.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/appointments" size="lg" icon={<Calendar className="h-5 w-5" aria-hidden="true" />}>
                Book Today
              </Button>
              <Button
                href={`tel:${CLINIC_INFO.contact.phonePlain}`}
                size="lg"
                variant="outline"
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              >
                {CLINIC_INFO.contact.phone}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-4xl sm:translate-y-10">
              <div className="relative aspect-4/5">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80"
                  alt="Patient after dental treatment"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-4xl">
                <div className="relative aspect-4/4.8">
                  <Image
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
                    alt="Dental practice interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 28vw"
                  />
                </div>
              </div>
              <div className="editorial-panel rounded-4xl p-5">
                <p className="editorial-kicker font-(--font-mono) text-[--color-primary]">Open Mon to Sat</p>
                <p className="mt-2 text-sm leading-relaxed text-[--color-text-muted]">
                  New patients welcome. Same-day support for urgent dental care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
