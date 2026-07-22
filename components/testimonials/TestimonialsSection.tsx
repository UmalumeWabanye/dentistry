"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  return (
    <section
      className="section-py relative overflow-hidden bg-[--color-background]"
      style={{
        background: "var(--color-background)",
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[--color-surface-2] opacity-70 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[--color-surface-2] opacity-80 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          description="Real experiences from real patients. See why thousands of South Africans trust Edross Dental."
          align="center"
          className="mb-12"
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-6 pl-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="flex-none w-[88%] sm:w-[46%] lg:w-[30%] pl-6"
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
                  <Quote className="h-8 w-8 text-[--color-primary] opacity-70 mb-4" aria-hidden="true" />
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonials navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-6 h-2 bg-[--color-accent]"
                  : "w-2 h-2 bg-[--color-border] hover:bg-[--color-primary]/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
