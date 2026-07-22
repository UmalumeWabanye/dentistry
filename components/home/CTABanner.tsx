"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";

export function CTABanner() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "var(--color-primary)",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[--color-secondary] opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[--color-accent] opacity-10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[--color-secondary] font-semibold uppercase tracking-widest text-sm mb-4">
            Ready to Transform Your Smile?
          </p>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight"
          >
            Book Your Appointment Today
          </h2>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            Take the first step toward your healthiest smile. New patients always welcome. Same-day emergency slots available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Button
              href="/appointments"
              size="lg"
              variant="white"
              icon={<Calendar className="h-5 w-5" aria-hidden="true" />}
            >
              Book Appointment Online
            </Button>

            <a
              href={`https://wa.me/${CLINIC_INFO.contact.whatsapp}?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-emerald-400 text-emerald-400 font-semibold text-lg hover:bg-emerald-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </a>

            <a
              href={`tel:${CLINIC_INFO.contact.phonePlain}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              aria-label={`Call us at ${CLINIC_INFO.contact.phone}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {CLINIC_INFO.contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
