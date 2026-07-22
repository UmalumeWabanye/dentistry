import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Edross Dental | Premium Dental Care in South Africa",
    template: "%s | Edross Dental",
  },
  description:
    "Edross Dental offers premium, patient-centered dental care including general, cosmetic, and restorative dentistry. Book your appointment today.",
  keywords: [
    "dentist",
    "dental care",
    "cosmetic dentistry",
    "dental implants",
    "teeth whitening",
    "orthodontics",
    "South Africa",
    "Edross Dental",
  ],
  authors: [{ name: "Edross Dental" }],
  creator: "Edross Dental",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://edross-dental.co.za",
    siteName: "Edross Dental",
    title: "Edross Dental | Premium Dental Care",
    description:
      "Premium patient-centered dental care. Book your appointment today.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Edross Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edross Dental | Premium Dental Care",
    description: "Premium patient-centered dental care.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://edross-dental.co.za"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[--color-background] text-[--color-text]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
