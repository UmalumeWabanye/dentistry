"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";
import { Button } from "@/components/ui/Button";

export function FAQSectionHome() {
  const homeFaqs = faqs.slice(0, 6);

  return (
    <section className="section-py bg-[--color-surface]" aria-labelledby="faq-home-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Got Questions?"
              title="Frequently Asked"
              highlight="Questions"
              description="We've answered the most common questions our patients ask. Can't find what you're looking for?"
              align="left"
              className="mb-6"
            />
            <Button href="/faq" variant="outline" size="md">
              View All FAQs
            </Button>
          </div>

          {/* Right: accordion */}
          <div>
            <Accordion
              items={homeFaqs.map((f) => ({
                id: f.id,
                question: f.question,
                answer: f.answer,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
