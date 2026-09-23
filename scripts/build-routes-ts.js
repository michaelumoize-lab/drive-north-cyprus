const fs = require('fs');
const path = require('path');

const allRoutes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'all-routes.json'), 'utf8'));

const header = `export type Locale = "tr" | "en";

export interface RouteStop {
  name: string;
  description: string;
  visitTime: string;
  suggestedArrival: string;
  driveTime: string;
  images?: string[];
}

export interface PracticalInfo {
  bestSeason: string;
  parking: string;
  entranceFees: string;
  fuelStations: string;
  recommendedVehicle: string;
  restaurants: string;
  publicTransport: string;
}

export interface Route {
  id: string;
  slug: string;
  region: string;
  themes: string[];
  title: string;
  subtitle: string;
  theme: string;
  startFinish: string;
  heroImage: string;
  duration: string;
  distance: string;
  difficulty: string;
  mapEmbedUrl?: string;
  intro: string;
  suggestedStart?: string;
  stops: RouteStop[];
  practicalInfo: PracticalInfo;
  insiderTip: string;
  proposers: string[]; // Formatted initials (e.g. ["M.U.", "H.G."])
  seo: {
    title: string;
    description: string;
  };
}

interface RawRouteItem {
  id: string;
  slug: string;
  region: string;
  themes: string[];
  distance: string;
  duration: { tr: string; en: string };
  difficulty: { tr: string; en: string };
  startFinish: { tr: string; en: string };
  heroImage: string;
  suggestedStart?: string;
  mapEmbedUrl?: string;
  title: { tr: string; en: string };
  subtitle: { tr: string; en: string };
  intro: { tr: string; en: string };
  insiderTip: { tr: string; en: string };
  proposers: string[];
  stops: {
    tr: RouteStop[];
    en: RouteStop[];
  };
  practicalInfo: {
    tr: PracticalInfo;
    en: PracticalInfo;
  };
}

export const rawRoutes: RawRouteItem[] = `;

const footer = `;

export function getRoutes(lang: Locale = "tr"): Route[] {
  const isTr = lang === "tr";
  const themeMap: Record<string, { tr: string; en: string }> = {
    history: { tr: "Tarih", en: "History" },
    coast: { tr: "Sahil", en: "Coast" },
    nature: { tr: "Doğa", en: "Nature" },
    food: { tr: "Gastronomi", en: "Food" },
    scenic: { tr: "Manzara", en: "Scenic" },
    nightlife: { tr: "Gece", en: "Nightlife" },
  };

  return rawRoutes.map((r) => ({
    id: r.id,
    slug: r.slug,
    region: r.region,
    themes: r.themes,
    title: isTr ? r.title.tr : r.title.en,
    subtitle: isTr ? r.subtitle.tr : r.subtitle.en,
    theme: r.themes
      .map((t) => (themeMap[t] ? (isTr ? themeMap[t].tr : themeMap[t].en) : t.toUpperCase()))
      .join(" • "),
    startFinish: isTr ? r.startFinish.tr : r.startFinish.en,
    heroImage: r.heroImage,
    duration: isTr ? r.duration.tr : r.duration.en,
    distance: r.distance,
    difficulty: isTr ? r.difficulty.tr : r.difficulty.en,
    suggestedStart: r.suggestedStart,
    mapEmbedUrl: r.mapEmbedUrl,
    intro: isTr ? r.intro.tr : r.intro.en,
    insiderTip: isTr ? r.insiderTip.tr : r.insiderTip.en,
    proposers: r.proposers || [],
    stops: isTr ? r.stops.tr : r.stops.en,
    practicalInfo: isTr ? r.practicalInfo.tr : r.practicalInfo.en,
    seo: {
      title: isTr ? r.title.tr : r.title.en,
      description: isTr ? r.subtitle.tr : r.subtitle.en,
    },
  }));
}

export function getRouteBySlug(slug: string, lang: Locale = "tr"): Route | undefined {
  const all = getRoutes(lang);
  return all.find((r) => r.slug === slug || r.id === slug);
}

export const routes: Route[] = getRoutes("tr");
`;

const result = header + JSON.stringify(allRoutes, null, 2) + footer;
fs.writeFileSync(path.join(__dirname, '..', 'data', 'routes.ts'), result, 'utf8');
console.log('Successfully wrote data/routes.ts');
