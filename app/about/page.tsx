// app/about/page.tsx
import { AboutView } from "@/components/AboutView";

export const metadata = {
  title: "Hakkımızda – Drive North Cyprus",
  description:
    "Drive North Cyprus'ın hikayesini keşfedin. Yerliler tarafından gezginler için tasarlanmış Kuzey Kıbrıs yol rehberi.",
  alternates: {
    canonical: "/about",
    languages: {
      tr: "/about",
      en: "/en/about",
    },
  },
};

export default function TurkishAboutPage() {
  return <AboutView lang="tr" />;
}
