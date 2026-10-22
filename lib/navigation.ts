// lib/navigation.ts
import { Dictionary, Locale } from "@/lib/i18n";
import { Home, Compass, Info, Star, Car, LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export function getMainNavigation(dict: Dictionary, lang: Locale): NavItem[] {
  return [
    {
      name: dict.nav.home,
      href: lang === "tr" ? "/" : "/en",
      icon: Home,
    },
    {
      name: dict.nav.exploreItineraries,
      href: lang === "tr" ? "/routes" : "/en/routes",
      icon: Compass,
    },
    {
      name: dict.nav.about,
      href: lang === "tr" ? "/about" : "/en/about",
      icon: Info,
    },
    {
      name: dict.nav.testimonials,
      href: lang === "tr" ? "/testimonials" : "/en/testimonials",
      icon: Star,
    },
    {
      name: dict.nav.drivingGuide,
      href: lang === "tr" ? "/guide" : "/en/guide",
      icon: Car,
    },
  ];
}
