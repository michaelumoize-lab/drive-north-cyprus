// app/en/privacy/page.tsx
import { PrivacyView } from "@/components/PrivacyView";

export const metadata = {
  title: "Privacy Policy – Drive North Cyprus",
  description: "Drive North Cyprus privacy policy and data protection transparency.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      tr: "/privacy",
      en: "/en/privacy",
    },
  },
};

export default function EnglishPrivacyPage() {
  return <PrivacyView lang="en" />;
}
