import type { Metadata } from "next";
import { FileText, ShieldCheck, HeartPulse, Baby, TriangleAlert, CreditCard } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Helpful patient resources from Edross Dental including oral care guides, emergency instructions, and payment information.",
};

const resources = [
  {
    title: "First Visit Checklist",
    description: "What to bring, what to expect, and how to prepare for your first appointment.",
    icon: FileText,
  },
  {
    title: "Dental Emergency Guide",
    description: "Step-by-step instructions for toothaches, knocked-out teeth, and dental trauma.",
    icon: TriangleAlert,
  },
  {
    title: "Children's Dental Care",
    description: "Practical tips to build positive dental habits for infants, toddlers, and teens.",
    icon: Baby,
  },
  {
    title: "Post-Treatment Recovery",
    description: "Aftercare guidance for extractions, implants, crowns, and root canal treatment.",
    icon: HeartPulse,
  },
  {
    title: "Insurance & Payment Options",
    description: "Accepted medical aids, payment plans, and treatment financing information.",
    icon: CreditCard,
  },
  {
    title: "Infection & Safety Protocols",
    description: "How we maintain a sterile, safe clinical environment for every patient.",
    icon: ShieldCheck,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section
        className="relative py-28 lg:py-36"
        style={{ background: "linear-gradient(135deg, #0a2744 0%, #0F4C81 100%)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-secondary] font-semibold uppercase tracking-widest text-sm mb-4">Patient Resources</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Helpful Information for Patients
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guidance to help you prepare, recover, and care for your smile between visits.
          </p>
        </div>
      </section>

      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Guides & Support"
            title="Everything You Need in One Place"
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="bg-white rounded-3xl p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[--color-primary]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[--color-primary]" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-[--color-text] mb-2">{item.title}</h2>
                  <p className="text-sm text-[--color-text-muted] leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
