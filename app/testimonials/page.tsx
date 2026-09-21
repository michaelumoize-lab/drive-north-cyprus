// app/testimonials/page.tsx
import TestimonialsPage from "@/app/testimonials/TestimonialsPage";

export const metadata = {
  title: "Gezgin Yorumları – Drive North Cyprus",
  description:
    "Drive North Cyprus ile yola çıkan gezginlerin gerçek deneyim ve yorumlarını inceleyin.",
  alternates: {
    canonical: "/testimonials",
    languages: {
      tr: "/testimonials",
      en: "/en/testimonials",
    },
  },
};

export default function TurkishTestimonialsPage() {
  return <TestimonialsPage lang="tr" />;
}
