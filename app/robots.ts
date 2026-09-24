// app/robots.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/favicon.ico", "/icon*.png", "/apple-touch-icon.png", "/images/"],
      },
    ],
    sitemap: "https://drivenorthcyprus.com/sitemap.xml",
  };
}
