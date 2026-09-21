// app/guide/page.tsx
import { GuideView } from "@/components/GuideView";

export const metadata = {
  title: "Sürüş Rehberi – Drive North Cyprus",
  description:
    "Kuzey Kıbrıs'ta araç kullanırken dikkat edilmesi gerekenler. Kurallar, yol koşulları ve güvenlik tüyoları.",
  alternates: {
    canonical: "/guide",
    languages: {
      tr: "/guide",
      en: "/en/guide",
    },
  },
};

export default function TurkishGuidePage() {
  return <GuideView lang="tr" />;
}
