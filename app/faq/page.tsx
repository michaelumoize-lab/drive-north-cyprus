// app/faq/page.tsx
import FAQList from "@/app/faq/FAQList";

export const metadata = {
  title: "Sıkça Sorulan Sorular – Drive North Cyprus",
  description:
    "Kuzey Kıbrıs sürüş rotaları, araç kiralama ve yol koşulları hakkında en çok sorulan soruların yanıtları.",
  alternates: {
    canonical: "/faq",
    languages: {
      tr: "/faq",
      en: "/en/faq",
    },
  },
};

export default function TurkishFAQPage() {
  return <FAQList lang="tr" />;
}