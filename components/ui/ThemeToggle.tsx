"use client";

import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";

interface ThemeToggleProps {
  compact?: boolean;
}

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        compact
          ? "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[--color-border] bg-[--color-surface] text-[--color-text] hover:bg-[--color-surface-2] transition-colors"
          : "inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-surface] px-3.5 py-2 text-sm font-semibold text-[--color-text] hover:bg-[--color-surface-2] transition-colors"
      }
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -60, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 60, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="inline-flex"
          >
            <Moon className="h-4.5 w-4.5" aria-hidden="true" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 60, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -60, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="inline-flex"
          >
            <Sun className="h-4.5 w-4.5" aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>
      {!compact && <span>{isDark ? "Dark" : "Light"}</span>}
    </button>
  );
}
