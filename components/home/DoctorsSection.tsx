"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Languages } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { cn } from "@/lib/utils";

export function DoctorsSection() {
  return (
    <section className="section-py bg-[--color-background]" aria-labelledby="doctors-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Expert Team"
          title="Meet Our Team"
          description="Our experienced, compassionate team is dedicated to providing you with the highest standard of care."
          align="left"
          className="mb-12"
        />

        <div className="space-y-10">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.id}
              className={cn(
                "grid gap-0 overflow-hidden rounded-[2rem] border border-[--color-border] bg-[--color-surface]",
                index % 2 === 0 ? "lg:grid-cols-[0.92fr_1.08fr]" : "lg:grid-cols-[1.08fr_0.92fr]"
              )}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[30rem]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.title} at Edross Dental`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <p className="editorial-kicker mb-4 text-[--color-primary]">{index === 0 ? "Principal Dentist" : index === 1 ? "Cosmetic and Restorative" : "Family and Preventive"}</p>
                <h3 className="mb-3 text-4xl leading-[0.95] tracking-[-0.04em] text-[--color-text] sm:text-5xl">
                  {doctor.name}
                </h3>
                <p className="mb-5 text-sm font-medium text-[--color-text-muted] sm:text-base">{doctor.title}</p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {doctor.qualifications.map((q) => (
                    <span
                      key={q}
                      className="rounded-full border border-[--color-border] bg-[--color-surface] px-3 py-1 text-xs font-medium text-[--color-text-muted]"
                    >
                      {q}
                    </span>
                  ))}
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <p className="editorial-kicker mb-3 text-[--color-text-muted]">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-[--color-primary]/10 px-3 py-1 text-xs font-medium text-[--color-primary]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6 flex items-center gap-2 text-xs text-[--color-text-muted]">
                  <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{doctor.languages.join(", ")}</span>
                </div>

                <Button href="/appointments" size="md" className="self-start" icon={<Calendar className="h-4 w-4" />}>
                  Book with {doctor.name.split(" ")[1]}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 editorial-kicker text-[--color-primary]"
            aria-label="Meet all of our dentists"
          >
            Meet Our Full Team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
