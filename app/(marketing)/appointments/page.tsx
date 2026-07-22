import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { CLINIC_INFO } from "@/lib/constants";
import { CheckCircle2, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your dental appointment at Edross Dental online. Choose your treatment, dentist, date and time.",
};

export default function AppointmentsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-32"
        style={{ background: "linear-gradient(135deg, #0a2744 0%, #0F4C81 100%)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-secondary] font-semibold uppercase tracking-widest text-sm mb-4">Online Booking</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Book Your Appointment
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Complete the form below and our team will confirm your appointment within 2 hours during business hours.
          </p>
        </div>
      </section>

      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-3xl p-7 shadow-[var(--shadow-sm)]">
                <h2 className="text-xl font-bold text-[--color-text] mb-5">Why Book With Us?</h2>
                <ul className="space-y-4">
                  {[
                    "Confirmation within 2 hours",
                    "Easy online rescheduling",
                    "SMS and email reminders",
                    "New patients always welcome",
                    "Same-day emergency slots",
                    "All major medical aids accepted",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[--color-text-muted]">
                      <CheckCircle2 className="h-5 w-5 text-[--color-accent] shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[--color-primary] rounded-3xl p-7 text-white">
                <h3 className="font-bold text-lg mb-2">Prefer to Call?</h3>
                <p className="text-blue-200 text-sm mb-4">Our friendly reception team is ready to help.</p>
                <a
                  href={`tel:${CLINIC_INFO.contact.phonePlain}`}
                  className="flex items-center gap-2 font-bold text-[--color-secondary] hover:text-white transition-colors"
                  aria-label={`Call us at ${CLINIC_INFO.contact.phone}`}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>

              <div className="bg-white rounded-3xl p-7 shadow-[var(--shadow-sm)]">
                <h3 className="font-bold text-[--color-text] mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[--color-primary]" aria-hidden="true" />
                  Opening Hours
                </h3>
                <dl className="space-y-1.5 text-sm">
                  {CLINIC_INFO.hours.map(({ day, open, close, isOpen }) => (
                    <div key={day} className="flex justify-between">
                      <dt className="text-[--color-text-muted]">{day}</dt>
                      <dd className={isOpen ? "font-medium text-[--color-text]" : "text-[--color-text-light]"}>
                        {isOpen ? `${open} – ${close}` : "Closed"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-sm)]">
                <h2 className="text-2xl font-bold text-[--color-text] mb-2">
                  Request an Appointment
                </h2>
                <p className="text-[--color-text-muted] text-sm mb-8">
                  All fields marked with <span className="text-red-500" aria-hidden="true">*</span> are required.
                </p>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
