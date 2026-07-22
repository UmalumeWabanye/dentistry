import { CLINIC_INFO } from "./constants";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function buildSeoMetadata({ title, description, path = "", image }: SeoProps) {
  const url = `https://edross-dental.co.za${path}`;
  const ogImage = image || "/images/og-image.jpg";
  const fullTitle = title ? `${title} | Edross Dental` : "Edross Dental | Premium Dental Care in South Africa";
  const desc = description || "Premium patient-centered dental care. From general check-ups to full smile transformations.";

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Edross Dental" }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function getMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC_INFO.name,
    description: "Premium patient-centered dental care. Expert team, modern technology, family-friendly environment.",
    url: "https://edross-dental.co.za",
    telephone: CLINIC_INFO.contact.phone,
    email: CLINIC_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_INFO.address.street,
      addressLocality: CLINIC_INFO.address.city,
      addressRegion: CLINIC_INFO.address.province,
      postalCode: CLINIC_INFO.address.postalCode,
      addressCountry: "ZA",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "08:00", closes: "16:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "13:00" },
    ],
    sameAs: Object.values(CLINIC_INFO.social),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
    },
    priceRange: "$$",
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
