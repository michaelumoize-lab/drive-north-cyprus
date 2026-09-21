// app/en/guide/page.tsx
import { GuideView } from "@/components/GuideView";

export const metadata = {
  title: "Driving Guide – Drive North Cyprus",
  description:
    "Essential tips for driving in Northern Cyprus. Everything you need to know about rules, road conditions, and safety.",
  alternates: {
    canonical: "/en/guide",
    languages: {
      tr: "/guide",
      en: "/en/guide",
    },
  },
};

export default function EnglishGuidePage() {
  return <GuideView lang="en" />;
}
