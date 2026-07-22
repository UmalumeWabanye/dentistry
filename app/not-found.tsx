import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[--color-surface]">
      <div
        className="text-9xl font-bold mb-4"
        style={{
          background: "linear-gradient(135deg, #0F4C81 0%, #53B6F0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",}}
        aria-hidden="true"
      >
        404
      </div>
      <h1 className="text-3xl font-bold text-[--color-text] mb-3">
        Page Not Found
      </h1>
      <p className="text-[--color-text-muted] max-w-md mb-8 leading-relaxed">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have moved or no longer exists.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button href="/" size="lg">Back to Home</Button>
        <Button href="/appointments" size="lg" variant="outline">Book Appointment</Button>
      </div>
    </div>
  );
}
