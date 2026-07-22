import type { MetadataRoute } from "next";

const baseUrl = "https://edross-dental.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/general-dentistry",
    "/services/cosmetic-dentistry",
    "/services/restorative-dentistry",
    "/services/preventive-care",
    "/services/emergency-dentistry",
    "/doctors",
    "/gallery",
    "/resources",
    "/testimonials",
    "/blog",
    "/faq",
    "/contact",
    "/appointments",
    "/privacy",
    "/terms",
  ];

  const now = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
