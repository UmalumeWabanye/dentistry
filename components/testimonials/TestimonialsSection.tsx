"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi]);

  return (
    <section className="section-py bg-[--color-background]" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          description="Real experiences from real patients. See why thousands of South Africans trust Edross Dental."
          align="left"
          className="mb-12"
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-6 pl-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-[90%] sm:w-[48%] lg:w-[32%] pl-6"
                role="article"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <div className="editorial-panel rounded-[2rem] p-7 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[--color-accent] text-[--color-accent]" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="h-8 w-8 text-[--color-primary] opacity-50 mb-4" aria-hidden="true" />
                  <blockquote className="flex-1 text-sm leading-relaxed italic text-[--color-text-muted]">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div className="border-t border-[--color-border] my-5" aria-hidden="true" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[--color-border] shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={`Photo of ${testimonial.name}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-[--color-text] font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-[--color-text-muted] text-xs">{testimonial.treatment}</p>
                    </div>
                    {testimonial.verified && (
                      <span className="ml-auto rounded-full bg-[--color-accent]/10 px-2 py-0.5 text-xs font-medium text-[--color-accent]">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
