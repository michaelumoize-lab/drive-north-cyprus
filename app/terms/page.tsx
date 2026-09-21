// app/terms/page.tsx
import { TermsView } from "@/components/TermsView";

export const metadata = {
  title: "Kullanım Koşulları – Drive North Cyprus",
  description: "Drive North Cyprus kullanım koşulları ve yasal şartlar.",
  alternates: {
    canonical: "/terms",
    languages: {
      tr: "/terms",
      en: "/en/terms",
    },
  },
};

export default function TurkishTermsPage() {
  return <TermsView lang="tr" />;
}
