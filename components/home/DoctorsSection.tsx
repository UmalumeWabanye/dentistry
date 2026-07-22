"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Calendar, Languages } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";

export function DoctorsSection() {
  return (
    <section className="section-py bg-[--color-surface]" aria-labelledby="doctors-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Expert Team"
          title="Meet Your"
          highlight="Dental Experts"
          description="Our experienced, compassionate team is dedicated to providing you with the highest standard of care."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] max-h-80 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.title} at Edross Dental`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[--color-primary]/80 via-transparent to-transparent" aria-hidden="true" />

                {/* Rating badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-white rounded-xl px-3 py-1.5 shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    <span className="text-xs font-bold text-[--color-text]">{doctor.rating}</span>
                    <span className="text-xs text-[--color-text-muted]">({doctor.reviewCount})</span>
                  </div>
                  <div className="bg-[--color-accent] text-white rounded-xl px-3 py-1.5 text-xs font-bold shadow-lg">
                    {doctor.experience}+ yrs
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[--color-text] mb-0.5">{doctor.name}</h3>
                <p className="text-sm font-medium text-[--color-primary] mb-3">{doctor.title}</p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {doctor.qualifications.map((q) => (
                    <span
                      key={q}
                      className="bg-[--color-surface] text-[--color-text-muted] text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {q}
                    </span>
                  ))}
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[--color-text-muted] uppercase tracking-wider mb-2">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="bg-[--color-primary]/10 text-[--color-primary] text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-2 mb-5 text-xs text-[--color-text-muted]">
                  <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{doctor.languages.join(", ")}</span>
                </div>

                <Button href="/appointments" size="sm" className="w-full justify-center" icon={<Calendar className="h-4 w-4" />}>
                  Book with {doctor.name.split(" ")[1]}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-[--color-primary] font-semibold hover:gap-3 transition-all duration-200"
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
