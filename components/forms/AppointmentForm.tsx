"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, User, Phone, Mail, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number").regex(/^[0-9+\s()-]{10,}$/, "Invalid phone number"),
  email: z.string().email("Please enter a valid email address"),
  treatment: z.string().min(1, "Please select a treatment"),
  doctor: z.string().optional(),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30", "16:00", "16:30",
];

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function Field({ label, error, required, children, icon }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-[--color-text]">
        {label} {required && <span className="text-[--color-error]" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[--color-text-light] pointer-events-none" aria-hidden="true">
            {icon}
          </div>
        )}
        {children}
      </div>
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-[--color-error] font-medium flex items-center gap-1"
            role="alert"
            aria-live="polite"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase = (hasIcon: boolean, hasError: boolean) => cn(
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[--color-text] placeholder-[--color-text-light]",
  "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent",
  hasIcon && "pl-10",
  hasError ? "border-[--color-error]" : "border-[--color-border] hover:border-[--color-secondary]"
);

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Appointment submitted:", data);
    setSubmitted(true);
    setSubmitting(false);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 px-8 text-center"
        role="alert"
        aria-live="polite"
      >
        <div className="w-20 h-20 rounded-full bg-[--color-success]/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-[--color-success]" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-[--color-text] mb-3">
          Appointment Request Sent!
        </h3>
        <p className="text-[--color-text-muted] max-w-sm leading-relaxed mb-8">
          Thank you! We&apos;ve received your request and will confirm your appointment within 2 hours during business hours.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Book Another Appointment
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Appointment booking form"
      className="space-y-5"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First Name" error={errors.firstName?.message} required icon={<User className="h-4 w-4" />}>
          <input
            {...register("firstName")}
            type="text"
            placeholder="Jane"
            autoComplete="given-name"
            className={inputBase(true, !!errors.firstName)}
            aria-required="true"
            aria-invalid={!!errors.firstName}
          />
        </Field>
        <Field label="Last Name" error={errors.lastName?.message} required icon={<User className="h-4 w-4" />}>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Smith"
            autoComplete="family-name"
            className={inputBase(true, !!errors.lastName)}
            aria-required="true"
            aria-invalid={!!errors.lastName}
          />
        </Field>
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone Number" error={errors.phone?.message} required icon={<Phone className="h-4 w-4" />}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+27 82 000 0000"
            autoComplete="tel"
            className={inputBase(true, !!errors.phone)}
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message} required icon={<Mail className="h-4 w-4" />}>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            className={inputBase(true, !!errors.email)}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      {/* Treatment & Doctor row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Preferred Treatment" error={errors.treatment?.message} required>
          <select
            {...register("treatment")}
            className={cn(inputBase(false, !!errors.treatment), "appearance-none cursor-pointer")}
            aria-required="true"
            aria-invalid={!!errors.treatment}
            defaultValue=""
          >
            <option value="" disabled>Select a treatment…</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Dentist" error={errors.doctor?.message}>
          <select
            {...register("doctor")}
            className={cn(inputBase(false, !!errors.doctor), "appearance-none cursor-pointer")}
            defaultValue=""
          >
            <option value="">No preference</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Preferred Date" error={errors.date?.message} required icon={<Calendar className="h-4 w-4" />}>
          <input
            {...register("date")}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className={inputBase(true, !!errors.date)}
            aria-required="true"
            aria-invalid={!!errors.date}
          />
        </Field>
        <Field label="Preferred Time" error={errors.time?.message} required>
          <select
            {...register("time")}
            className={cn(inputBase(false, !!errors.time), "appearance-none cursor-pointer")}
            aria-required="true"
            aria-invalid={!!errors.time}
            defaultValue=""
          >
            <option value="" disabled>Select a time…</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Notes */}
      <Field label="Additional Notes" error={errors.notes?.message} icon={<MessageSquare className="h-4 w-4" />}>
        <textarea
          {...register("notes")}
          rows={4}
          placeholder="Tell us anything we should know before your appointment…"
          className={cn(inputBase(true, !!errors.notes), "resize-none pt-3")}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        className="w-full justify-center"
        loading={submitting}
        disabled={submitting}
      >
        {submitting ? "Sending Request…" : "Confirm Appointment Request"}
      </Button>

      <p className="text-xs text-[--color-text-muted] text-center leading-relaxed">
        By submitting this form you consent to us contacting you to confirm your appointment.
        View our{" "}
        <a href="/privacy" className="text-[--color-primary] hover:underline underline-offset-2 font-medium">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
