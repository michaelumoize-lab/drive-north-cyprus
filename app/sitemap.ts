// app/sitemap.ts
import { MetadataRoute } from "next";
import { getRoutes } from "@/data/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drivenorthcyprus.com";
  const routes = getRoutes("tr");
  const languages = ["tr", "en"] as const;

  const staticPages = [
    { tr: "", en: "/en", priority: 1.0, changeFrequency: "daily" as const },
    { tr: "/routes", en: "/en/routes", priority: 0.9, changeFrequency: "daily" as const },
    { tr: "/about", en: "/en/about", priority: 0.7, changeFrequency: "weekly" as const },
    { tr: "/guide", en: "/en/guide", priority: 0.7, changeFrequency: "weekly" as const },
    { tr: "/faq", en: "/en/faq", priority: 0.7, changeFrequency: "weekly" as const },
    { tr: "/testimonials", en: "/en/testimonials", priority: 0.7, changeFrequency: "weekly" as const },
    { tr: "/privacy", en: "/en/privacy", priority: 0.5, changeFrequency: "monthly" as const },
    { tr: "/terms", en: "/en/terms", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages for each language
  staticPages.forEach((page) => {
    languages.forEach((lang) => {
      const pagePath = lang === "tr" ? page.tr : page.en;
      const url = `${baseUrl}${pagePath}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            tr: `${baseUrl}${page.tr}`,
            en: `${baseUrl}${page.en}`,
          },
        },
      });
    });
  });

  // Individual route detail pages (all 41 routes)
  routes.forEach((route) => {
    languages.forEach((lang) => {
      const path = lang === "tr" ? `/routes/${route.slug}` : `/en/routes/${route.slug}`;
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: {
            tr: `${baseUrl}/routes/${route.slug}`,
            en: `${baseUrl}/en/routes/${route.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
