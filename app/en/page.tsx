// app/en/page.tsx
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import RoutesGrid from "@/components/RoutesGrid";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Drive North Cyprus – Explore Northern Cyprus Routes",
  description:
    "Discover the best driving routes in Northern Cyprus. From ancient castles to pristine beaches, plan your perfect road trip.",
  alternates: {
    canonical: "/en",
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function EnglishHomePage() {
  return (
    <main>
      <Hero />
      <RoutesGrid lang="en" />
      <Testimonials lang="en" />
      <Newsletter />
    </main>
  );
}
