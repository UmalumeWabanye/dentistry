import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Edross Dental. Book an appointment, ask a question, or find directions to our clinic.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-36"
        style={{ background: "var(--color-primary)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-on-primary-subtle] font-semibold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--color-on-primary] mb-6 leading-tight"
          >
            Contact Our Clinic
          </h1>
          <p className="text-[--color-on-primary-muted] text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out to our friendly team and we&apos;ll respond as quickly as possible.
          </p>
        </div>
      </section>

      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <aside className="lg:col-span-2 space-y-6">
              <div>
                <SectionHeading
                  eyebrow="Reach Us"
                  title="We're Here to Help"
                  align="left"
                  className="mb-8"
                />
              </div>

              {/* Contact cards */}
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: CLINIC_INFO.contact.phone,
                  href: `tel:${CLINIC_INFO.contact.phonePlain}`,
                  sub: "Mon–Fri 08:00–17:00, Sat 08:00–13:00",
                },
                {
                  icon: Phone,
                  title: "Emergency Line",
                  content: CLINIC_INFO.contact.emergency,
                  href: `tel:${CLINIC_INFO.contact.emergency.replace(/\s/g, "")}`,
                  sub: "Available 24/7 for dental emergencies",
                  highlight: true,
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  content: "Chat With Us",
                  href: `https://wa.me/${CLINIC_INFO.contact.whatsapp}`,
                  sub: "Quick responses during business hours",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: CLINIC_INFO.contact.email,
                  href: `mailto:${CLINIC_INFO.contact.email}`,
                  sub: "We reply within 1 business day",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  content: CLINIC_INFO.address.full,
                  href: `https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address.full)}`,
                  sub: "Free parking available",
                },
              ].map(({ icon: Icon, title, content, href, sub, highlight }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 ${
                    highlight
                      ? "bg-red-50 border-red-200 hover:border-red-300"
                      : "bg-white border-[--color-border] hover:border-[--color-secondary]/40"
                  }`}
                  aria-label={`${title}: ${content}`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${highlight ? "bg-red-100" : "bg-[--color-primary]/10"}`}>
                    <Icon className={`h-5 w-5 ${highlight ? "text-red-600" : "text-[--color-primary]"}`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[--color-text-muted] mb-0.5">{title}</p>
                    <p className={`font-semibold text-sm ${highlight ? "text-red-700" : "text-[--color-text]"}`}>{content}</p>
                    {sub && <p className="text-xs text-[--color-text-muted] mt-0.5">{sub}</p>}
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-[--color-border] p-5">
                <h3 className="font-bold text-[--color-text] mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                  <Clock className="h-4 w-4 text-[--color-primary]" aria-hidden="true" />
                  Opening Hours
                </h3>
                <dl className="space-y-1.5">
                  {CLINIC_INFO.hours.map(({ day, open, close, isOpen }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <dt className="text-[--color-text-muted]">{day}</dt>
                      <dd className={isOpen ? "text-[--color-text] font-medium" : "text-[--color-text-muted]"}>
                        {isOpen ? `${open} – ${close}` : "Closed"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>

            {/* Map + Form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-md)] aspect-video">
                <iframe
                  src={CLINIC_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Edross Dental location on Google Maps"
                  aria-label="Map showing Edross Dental location"
                />
              </div>

              {/* Quick contact form */}
              <div className="bg-white rounded-3xl p-8 shadow-[var(--shadow-sm)]">
                <h2 className="text-2xl font-bold text-[--color-text] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[--color-text-muted] text-sm mb-6">
                  Or use our quick contact form below and we&apos;ll get back to you shortly.
                </p>
                <ContactFormSimple />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactFormSimple() {
  "use client";
  // Simple non-interactive version for SSR — full interactivity via AppointmentForm
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-sm font-semibold text-[--color-text]">Name <span className="text-red-500">*</span></label>
          <input id="contact-name" type="text" placeholder="Your name" className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="text-sm font-semibold text-[--color-text]">Phone <span className="text-red-500">*</span></label>
          <input id="contact-phone" type="tel" placeholder="+27 82 000 0000" className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="text-sm font-semibold text-[--color-text]">Email</label>
        <input id="contact-email" type="email" placeholder="your@email.com" className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-sm font-semibold text-[--color-text]">Message</label>
        <textarea id="contact-message" rows={4} placeholder="How can we help?" className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent resize-none" />
      </div>
      <button type="submit" className="w-full bg-[--color-primary] text-[--color-on-primary] font-semibold rounded-full py-3.5 text-sm hover:bg-[--color-primary-light] transition-colors">
        Send Message
      </button>
    </div>
  );
}
