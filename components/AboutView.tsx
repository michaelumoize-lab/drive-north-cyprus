// components/AboutView.tsx
import Image from "next/image";
import Link from "next/link";
import { Users, Heart, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Locale, getDictionary } from "@/lib/i18n";

export function AboutView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const icons = [
    <Compass key="compass" className="h-8 w-8 text-primary" />,
    <Heart key="heart" className="h-8 w-8 text-primary" />,
    <Users key="users" className="h-8 w-8 text-primary" />,
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero with scenic background image */}
      <section className="relative h-[40vh] min-h-[340px] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-karpaz.jpg"
            alt={dict.about.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/40" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight drop-shadow-sm">
              {dict.about.title}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed drop-shadow-sm">
              {dict.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">{dict.about.missionTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {dict.about.missionText}
          </p>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-center mb-10">
          {dict.about.valuesTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {dict.about.values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center">{icons[index % icons.length]}</div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/30 rounded-2xl p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">{dict.about.readyTitle}</h2>
          <p className="text-muted-foreground mb-6">
            {dict.about.readySubtitle}
          </p>
          <Link
            href={lang === "tr" ? "/#routes" : "/en/#routes"}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {dict.about.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
