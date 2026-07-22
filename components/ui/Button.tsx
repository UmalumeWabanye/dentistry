"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
}

const variants = {
  primary:
    "bg-[--color-primary] text-white hover:bg-[--color-primary-light] shadow-[var(--shadow-primary)] hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-[--color-secondary] text-white hover:bg-[--color-secondary-dark] shadow-md hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "border-2 border-[--color-primary] text-[--color-primary] bg-transparent hover:bg-[--color-primary] hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-[--color-primary] bg-transparent hover:bg-[--color-surface] hover:-translate-y-0.5",
  white:
    "bg-white text-[--color-primary] hover:bg-[--color-surface] shadow-md hover:shadow-lg hover:-translate-y-0.5",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2",
  xl: "px-10 py-5 text-xl gap-3",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  iconPosition = "left",
  loading,
  className,
  children,
  disabled,
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-full",
    "transition-all duration-200 ease-out cursor-pointer select-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading ? (
        <span className="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : (
        <>
          {icon && iconPosition === "left" && <span aria-hidden="true">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === "right" && <span aria-hidden="true">{icon}</span>}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={classes}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
