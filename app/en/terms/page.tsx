// app/en/terms/page.tsx
import { TermsView } from "@/components/TermsView";

export const metadata = {
  title: "Terms of Service – Drive North Cyprus",
  description: "Drive North Cyprus terms of service and website usage conditions.",
  alternates: {
    canonical: "/en/terms",
    languages: {
      tr: "/terms",
      en: "/en/terms",
    },
  },
};

export default function EnglishTermsPage() {
  return <TermsView lang="en" />;
}
