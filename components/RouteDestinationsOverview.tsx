// components/RouteDestinationsOverview.tsx
"use client";

import { RouteStop } from "@/data/routes";
import { Locale, getDictionary } from "@/lib/i18n";
import { MapPin, ChevronRight } from "lucide-react";

interface RouteDestinationsOverviewProps {
  stops: RouteStop[];
  lang: Locale;
}

export function RouteDestinationsOverview({
  stops,
  lang,
}: RouteDestinationsOverviewProps) {
  const dict = getDictionary(lang);

  const handleStopClick = (index: number) => {
    const el = document.getElementById(`stop-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      aria-labelledby="route-stops-overview-heading"
      className="rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-4 sm:p-5 shadow-sm space-y-3.5"
    >
      {/* Compact Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
            <MapPin className="h-3.5 w-3.5" />
          </div>
          <h2
            id="route-stops-overview-heading"
            className="text-base sm:text-lg font-heading font-bold text-foreground tracking-tight"
          >
            {dict.routeDetail.stopsOverviewTitle}
          </h2>
          <span className="text-[11px] font-semibold text-muted-foreground bg-muted/70 px-2 py-0.5 rounded-full border border-border/60">
            {stops.length} {lang === "tr" ? "Durak" : "Stops"}
          </span>
        </div>

        <span className="text-[11px] text-muted-foreground/80 font-medium hidden sm:inline">
          {lang === "tr" ? "Detaylar için durağa tıklayın" : "Click any stop to view details"}
        </span>
      </div>

      {/* Compact Waypoint Tiles Grid */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 list-none p-0 m-0">
        {stops.map((stop, index) => {
          const stopNumber = index + 1;

          return (
            <li key={stop.name + index}>
              <button
                type="button"
                onClick={() => handleStopClick(index)}
                className="group w-full h-11 px-3 rounded-xl border border-border/70 bg-background/60 hover:bg-muted/50 hover:border-primary/50 transition-all duration-200 flex items-center justify-between gap-2.5 shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground text-[11px] font-bold font-mono transition-colors">
                    {stopNumber}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {stop.name}
                  </span>
                </div>

                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default RouteDestinationsOverview;
