// app/en/routes/page.tsx
import RoutesPage from "@/app/routes/RoutesPage";

export const metadata = {
  title: "All Routes – Drive North Cyprus",
  description:
    "Explore all curated driving routes in Northern Cyprus. From Kyrenia's castles to Karpaz's wild beaches – find your perfect road trip.",
  alternates: {
    canonical: "/en/routes",
    languages: {
      tr: "/routes",
      en: "/en/routes",
    },
  },
};

export default function EnglishRoutesPage() {
  return <RoutesPage lang="en" />;
}
