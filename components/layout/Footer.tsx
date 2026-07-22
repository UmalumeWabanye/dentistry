import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import { CLINIC_INFO, NAV_LINKS } from "@/lib/constants";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const featuredServices = services.filter((s) => s.featured).slice(0, 5);

  return (
    <footer className="bg-[--color-text] text-slate-300" role="contentinfo">
      {/* Emergency Banner */}
      <div className="bg-[--color-error] text-white py-3">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-medium">
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
            Dental Emergency? We offer same-day emergency appointments.
          </span>
          <a
            href={`tel:${CLINIC_INFO.contact.emergency}`}
            className="font-bold underline-offset-2 hover:underline"
            aria-label={`Emergency line: ${CLINIC_INFO.contact.emergency}`}
          >
            Call Emergency Line: {CLINIC_INFO.contact.emergency}
          </a>
        </div>
      </div>

      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 – Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group" aria-label="Edross Dental – Home">
              <div className="w-10 h-10 rounded-xl bg-[--color-primary] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                E
              </div>
              <span className="text-xl font-bold text-white ">
                Edross <span className="text-[--color-secondary]">Dental</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Premium dental care delivered with compassion and expertise. Your healthiest smile starts here.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: CLINIC_INFO.social.facebook, label: "Facebook", initial: "f" },
                { href: CLINIC_INFO.social.instagram, label: "Instagram", initial: "in" },
                { href: CLINIC_INFO.social.twitter, label: "X / Twitter", initial: "x" },
                { href: CLINIC_INFO.social.linkedin, label: "LinkedIn", initial: "li" },
              ].map(({ href, label, initial }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[--color-primary] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 text-xs font-bold text-slate-300"
                >
                  {initial}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-[--color-secondary] transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[--color-secondary] hover:text-[--color-secondary-light] font-medium transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 – Quick Links + Hours */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Dentists", href: "/doctors" },
                { label: "Smile Gallery", href: "/gallery" },
                { label: "Patient Resources", href: "/resources" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-[--color-secondary] transition-colors hover:translate-x-0.5 inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-3.5 text-sm mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-[--color-secondary] shrink-0" aria-hidden="true" />
                <address className="not-italic leading-snug">{CLINIC_INFO.address.full}</address>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[--color-secondary] shrink-0" aria-hidden="true" />
                <a href={`tel:${CLINIC_INFO.contact.phonePlain}`} className="hover:text-[--color-secondary] transition-colors">
                  {CLINIC_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[--color-secondary] shrink-0" aria-hidden="true" />
                <a href={`mailto:${CLINIC_INFO.contact.email}`} className="hover:text-[--color-secondary] transition-colors">
                  {CLINIC_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 text-[--color-secondary] shrink-0" aria-hidden="true" />
                <div className="space-y-0.5">
                  <p>Mon–Fri: 08:00 – 17:00</p>
                  <p>Saturday: 08:00 – 13:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
            <Button href="/appointments" variant="secondary" size="sm">
              Book Appointment
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-400 fill-red-400" aria-hidden="true" /> for better dental health
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
