import type { Metadata } from "next";
import Image from "next/image";
import { Star, Languages, Award, Calendar } from "lucide-react";
import { doctors } from "@/data/doctors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Our Dentists",
  description: "Meet the expert dental team at Edross Dental. Experienced, compassionate, and dedicated to your smile.",
};

export default function DoctorsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden"
        style={{ background: "var(--color-primary)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-on-primary-subtle] font-semibold uppercase tracking-widest text-sm mb-4">Our Team</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--color-on-primary] mb-6 leading-tight"
          >
            Meet Your Dental Experts
          </h1>
          <p className="text-[--color-on-primary-muted] text-lg max-w-2xl mx-auto leading-relaxed">
            Our experienced, compassionate team is dedicated to providing you with the highest standard of dental care.
          </p>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <article
                key={doctor.id}
                className="bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-md)]"
                aria-label={doctor.name}
              >
                <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-last" : ""}`}>
                  {/* Image */}
                  <div className="lg:col-span-2 relative min-h-80 lg:min-h-auto">
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name}, ${doctor.title}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] mb-1">
                          {doctor.name}
                        </h2>
                        <p className="text-[--color-primary] font-semibold text-lg">{doctor.title}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-[--color-surface] rounded-xl px-4 py-2">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                        <span className="font-bold text-[--color-text]">{doctor.rating}</span>
                        <span className="text-[--color-text-muted] text-sm">({doctor.reviewCount} reviews)</span>
                      </div>
                    </div>

                    <p className="text-[--color-text-muted] leading-relaxed mb-8">{doctor.bio}</p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[--color-text-muted] mb-3 flex items-center gap-2">
                          <Award className="h-3.5 w-3.5" aria-hidden="true" />
                          Qualifications
                        </h3>
                        <ul className="space-y-1">
                          {doctor.qualifications.map((q) => (
                            <li key={q} className="text-sm text-[--color-text] font-medium">{q}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[--color-text-muted] mb-3">
                          Specialties
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialties.map((s) => (
                            <span key={s} className="bg-[--color-primary]/10 text-[--color-primary] text-xs font-semibold px-3 py-1.5 rounded-full">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[--color-text-muted] mb-3">
                          Professional Memberships
                        </h3>
                        <ul className="space-y-1">
                          {doctor.memberships.map((m) => (
                            <li key={m} className="text-xs text-[--color-text-muted] leading-snug">{m}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[--color-text-muted] mb-3 flex items-center gap-2">
                          <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                          Languages
                        </h3>
                        <p className="text-sm text-[--color-text]">{doctor.languages.join(", ")}</p>
                      </div>
                    </div>

                    <Button
                      href="/appointments"
                      size="md"
                      icon={<Calendar className="h-4 w-4" aria-hidden="true" />}
                      className="self-start"
                    >
                      Book with {doctor.name.split(" ")[1]}
                    </Button>
                  </div>
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
