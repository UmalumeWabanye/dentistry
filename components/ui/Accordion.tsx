"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("space-y-3", className)} role="list">
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <motion.div
            key={item.id}
            role="listitem"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className={cn(
              "rounded-2xl border transition-all duration-300",
              isOpen
                ? "border-[--color-primary] bg-white shadow-(--shadow-lg)"
                : "border-[--color-border] bg-white hover:border-[--color-secondary] hover:shadow-(--shadow-md)"
            )}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span
                className={cn(
                  "font-semibold text-base sm:text-lg leading-snug transition-colors",
                  isOpen ? "text-[--color-primary]" : "text-[--color-text]"
                )}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center transition-colors",
                  isOpen
                    ? "bg-[--color-primary] text-[--color-on-primary]"
                    : "bg-[--color-surface-2] text-[--color-text-muted]"
                )}
                aria-hidden="true"
              >
                <ChevronDown className="h-3 w-3" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <p className="text-[--color-text-muted] leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
