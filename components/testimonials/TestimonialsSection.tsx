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
      className="section-py relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a2744 0%, #0F4C81 100%)",
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[--color-secondary] opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[--color-accent] opacity-10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          description="Real experiences from real patients. See why thousands of South Africans trust Edross Dental."
          align="center"
          light
          className="mb-12"
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-6 pl-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="flex-none w-[90%] sm:w-[48%] lg:w-[32%] pl-6"
                role="article"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="h-8 w-8 text-[--color-secondary] opacity-60 mb-3" aria-hidden="true" />
                  <blockquote className="text-blue-100 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-5" aria-hidden="true" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={`Photo of ${testimonial.name}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-[--color-secondary] text-xs">{testimonial.treatment}</p>
                    </div>
                    {testimonial.verified && (
                      <span className="ml-auto text-xs text-emerald-400 font-medium bg-emerald-400/10 rounded-full px-2 py-0.5">
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
                  ? "w-6 h-2 bg-[--color-secondary]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
