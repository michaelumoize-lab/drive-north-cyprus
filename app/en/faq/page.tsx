// app/en/faq/page.tsx
import FAQList from "@/app/faq/FAQList";

export const metadata = {
  title: "Frequently Asked Questions – Drive North Cyprus",
  description:
    "Find answers to commonly asked questions about driving routes, road conditions, and planning your Northern Cyprus road trip.",
  alternates: {
    canonical: "/en/faq",
    languages: {
      tr: "/faq",
      en: "/en/faq",
    },
  },
};

export default function EnglishFAQPage() {
  return <FAQList lang="en" />;
}
