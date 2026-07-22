import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://edross-dental.co.za/sitemap.xml",
    host: "https://edross-dental.co.za",
  };
}
