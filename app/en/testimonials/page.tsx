// app/en/testimonials/page.tsx
import TestimonialsPage from "@/app/testimonials/TestimonialsPage";

export const metadata = {
  title: "Testimonials – Drive North Cyprus",
  description:
    "Read real reviews from travelers who explored Northern Cyprus with Drive North Cyprus.",
  alternates: {
    canonical: "/en/testimonials",
    languages: {
      tr: "/testimonials",
      en: "/en/testimonials",
    },
  },
};

export default function EnglishTestimonialsPage() {
  return <TestimonialsPage lang="en" />;
}
