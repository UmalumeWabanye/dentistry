import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Edross Dental website.",
};

export default function TermsPage() {
  return (
    <section className="section-py bg-[--color-surface] mt-16 sm:mt-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-[--color-text] mb-6">
          Terms of Service
        </h1>
        <div className="space-y-4 text-[--color-text-muted] leading-relaxed">
          <p>This website is provided for general informational purposes and appointment requests.</p>
          <p>Submitting a booking request does not guarantee an appointment until confirmed by our team.</p>
          <p>Clinical advice on this website does not replace an in-person consultation, diagnosis, or treatment plan.</p>
          <p>Edross Dental may update website content and these terms at any time without prior notice.</p>
        </div>
      </div>
    </section>
  );
}
