// app/en/routes/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getRoutes, getRouteBySlug } from "@/data/routes";
import { RouteDetailView } from "@/components/RouteDetailView";

export function generateStaticParams() {
  const routes = getRoutes("en");
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug, "en");

  if (!route) {
    return {
      title: "Route Not Found | Drive North Cyprus",
    };
  }

  return {
    title: `${route.seo.title} | Drive North Cyprus`,
    description: route.seo.description,
    alternates: {
      canonical: `/en/routes/${slug}`,
      languages: {
        tr: `/routes/${slug}`,
        en: `/en/routes/${slug}`,
      },
    },
    openGraph: {
      title: route.seo.title,
      description: route.seo.description,
      images: [route.heroImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.seo.title,
      description: route.seo.description,
      images: [route.heroImage],
    },
  };
}

export default async function EnglishRouteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug, "en");

  if (!route) {
    notFound();
  }

  return <RouteDetailView route={route} lang="en" />;
}
