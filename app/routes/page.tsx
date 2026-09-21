// app/routes/page.tsx
import RoutesPage from "@/app/routes/RoutesPage";

export const metadata = {
  title: "Tüm Sürüş Rotaları – Drive North Cyprus",
  description:
    "Kuzey Kıbrıs'ın tüm rotalarını inceleyin. Girne kalelerinden Karpaz'ın bakir koylarına mükemmel seyahat planları.",
  alternates: {
    canonical: "/routes",
    languages: {
      tr: "/routes",
      en: "/en/routes",
    },
  },
};

export default function TurkishRoutesPage() {
  return <RoutesPage lang="tr" />;
}
