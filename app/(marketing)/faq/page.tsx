import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { CTABanner } from "@/components/home/CTABanner";
import { faqs, faqCategories } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to common questions about dental care, our services, insurance, and booking at Edross Dental.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-36"
        style={{ background: "var(--color-primary)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-on-primary-subtle] font-semibold uppercase tracking-widest text-sm mb-4">FAQs</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--color-on-primary] mb-6 leading-tight"
          >
            Frequently Asked Questions
          </h1>
          <p className="text-[--color-on-primary-muted] text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about your dental care at Edross Dental.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-py bg-[--color-surface]">
        <div className="container-custom max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Your Questions Answered"
            title="Got Questions? We've Got Answers."
            description="Browse our comprehensive FAQ below. Can't find what you're looking for? Contact us directly."
            align="center"
            className="mb-12"
          />

          {faqCategories.slice(1).map((category) => {
            const categoryFaqs = faqs.filter((f) => f.category === category);
            if (categoryFaqs.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h2 className="text-xl font-bold text-[--color-text] mb-6 flex items-center gap-3">
                  <span className="w-2 h-6 rounded-full bg-[--color-primary] inline-block" aria-hidden="true" />
                  {category}
                </h2>
                <Accordion
                  items={categoryFaqs.map((f) => ({
                    id: f.id,
                    question: f.question,
                    answer: f.answer,
                  }))}
                />
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
