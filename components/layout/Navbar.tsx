"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, CLINIC_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBase = cn(
    "fixed top-0 inset-x-0 z-50 transition-all duration-500",
    scrolled || !isHome
      ? "bg-[--color-surface]/92 backdrop-blur-xl border-b border-[--color-border]"
      : "bg-transparent"
  );

  const linkColor = cn(
    "editorial-kicker transition-colors duration-200",
    scrolled || !isHome ? "text-[--color-text] hover:text-[--color-primary]" : "text-[--color-primary] hover:text-[--color-primary-dark]"
  );

  const logoColor = "text-[--color-primary]";

  return (
    <>
      {/* Skip navigation for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-[--color-primary] text-[--color-on-primary] px-4 py-2 rounded-lg font-semibold"
      >
        Skip to main content
      </a>

      <nav className={navBase} role="navigation" aria-label="Main navigation">
        {/* Progress bar */}
        <ScrollProgress />

        <div className="container-custom flex items-center justify-between h-18 sm:h-22">
          {/* Logo */}
          <Link href="/" className={cn("flex items-center gap-3 group", logoColor)} aria-label="Edross Dental – Home">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-sm editorial-kicker border transition-all group-hover:scale-105",
              scrolled || !isHome ? "bg-[--color-primary] text-[--color-on-primary]" : "bg-[--color-surface] text-[--color-primary]"
            )}>
              E
            </div>
            <span className="text-2xl sm:text-3xl leading-none tracking-[-0.03em] font-[var(--font-display)]">
              Edross <span className={cn(scrolled || !isHome ? "text-[--color-primary]" : "text-[--color-on-primary-subtle]")}>Dental</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-2" role="menubar">
            {NAV_LINKS.map((link) => (
              <li key={link.href} role="none" className="relative">
                {link.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(linkColor, "flex items-center gap-1 px-3 py-2 rounded-full")}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", openDropdown === link.label && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                          role="menu"
                        >
                          <div className="rounded-2xl border border-[--color-border] bg-[--color-surface] p-2 min-w-[220px] shadow-2xl backdrop-blur-0">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-[--color-text] transition-colors hover:bg-[--color-surface-2] hover:text-[--color-primary]"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={cn(
                      linkColor,
                      "px-3 py-2 rounded-full",
                      pathname === link.href && (scrolled || !isHome ? "text-[--color-primary]" : "text-[--color-accent-light]")
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.contact.phonePlain}`}
              className={cn("hidden xl:flex items-center gap-2 transition-colors", linkColor)}
              aria-label={`Call us: ${CLINIC_INFO.contact.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{CLINIC_INFO.contact.phone}</span>
            </a>
            <Button href="/appointments" size="md" variant="primary">
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              scrolled || !isHome ? "text-[--color-text] hover:bg-[--color-surface]" : "text-[--color-primary] hover:bg-[--color-surface-2]"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-[--color-surface] border-t border-[--color-border]"
            >
              <div className="container-custom py-6 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold text-[--color-text] hover:bg-[--color-surface] hover:text-[--color-primary] transition-colors"
                        >
                          {link.label}
                          <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === link.label && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-[--color-text-muted] hover:text-[--color-primary] hover:bg-[--color-surface] transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl font-semibold transition-colors",
                          pathname === link.href
                            ? "bg-[--color-surface] text-[--color-primary]"
                            : "text-[--color-text] hover:bg-[--color-surface] hover:text-[--color-primary]"
                        )}
                        aria-current={pathname === link.href ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <div className="pt-4 flex flex-col gap-3 border-t border-[--color-border] mt-4">
                  <a
                    href={`tel:${CLINIC_INFO.contact.phonePlain}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-[--color-text] hover:bg-[--color-surface] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[--color-primary]" />
                    {CLINIC_INFO.contact.phone}
                  </a>
                  <Button href="/appointments" size="lg" className="w-full justify-center">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 h-0.5 bg-[--color-primary] transition-none"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
