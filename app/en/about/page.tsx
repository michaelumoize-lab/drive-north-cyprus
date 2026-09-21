// app/en/about/page.tsx
import { AboutView } from "@/components/AboutView";

export const metadata = {
  title: "About Us – Drive North Cyprus",
  description:
    "Discover the story behind Drive North Cyprus – Northern Cyprus' first curated road trip guide platform, built by locals for explorers.",
  alternates: {
    canonical: "/en/about",
    languages: {
      tr: "/about",
      en: "/en/about",
    },
  },
};

export default function EnglishAboutPage() {
  return <AboutView lang="en" />;
}
