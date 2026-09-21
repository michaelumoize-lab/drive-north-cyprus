// app/privacy/page.tsx
import { PrivacyView } from "@/components/PrivacyView";

export const metadata = {
  title: "Gizlilik Politikası – Drive North Cyprus",
  description: "Drive North Cyprus gizlilik politikası ve kişisel verilerin korunması bilgilendirmesi.",
  alternates: {
    canonical: "/privacy",
    languages: {
      tr: "/privacy",
      en: "/en/privacy",
    },
  },
};

export default function TurkishPrivacyPage() {
  return <PrivacyView lang="tr" />;
}
