import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Edross Dental website and patient communication.",
};

export default function PrivacyPage() {
  return (
    <section className="section-py bg-[--color-surface] mt-16 sm:mt-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-[--color-text] mb-6">
          Privacy Policy
        </h1>
        <div className="space-y-4 text-[--color-text-muted] leading-relaxed">
          <p>Edross Dental respects your privacy. We collect only information needed to respond to enquiries and manage appointments.</p>
          <p>Your personal information is handled securely and is never sold to third parties. We may share necessary details with service providers strictly for operational purposes.</p>
          <p>You may request access, correction, or removal of your personal data at any time by contacting our clinic.</p>
          <p>By using this website and submitting forms, you consent to this policy.</p>
        </div>
      </div>
    </section>
  );
}
