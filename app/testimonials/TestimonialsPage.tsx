// app/testimonials/TestimonialsPage.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { getTestimonials } from "@/data/testimonials";
import { Locale } from "@/lib/i18n";

export default function TestimonialsPage({ lang = "tr" }: { lang?: Locale }) {
  const items = getTestimonials(lang);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero with scenic background image */}
      <section className="relative h-[45vh] min-h-[360px] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-famagusta.jpg"
            alt={lang === "tr" ? "Gezgin Yorumları" : "Testimonials"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
          {/* Subtle multi-layer cinematic scrims for crystal clarity & text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent md:w-3/4 pointer-events-none" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
              {lang === "tr" ? "Gezgin Yorumları" : "Testimonials"}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-100 leading-relaxed drop-shadow-sm font-normal text-pretty max-w-2xl">
              {lang === "tr"
                ? "Kuzey Kıbrıs yollarında rehberlerimizle gezen yolcularımızın gerçek değerlendirmeleri."
                : "Hear what our travelers have to say about their Northern Cyprus adventures."}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card hover:shadow-lg transition-shadow duration-300 border-border h-full flex flex-col justify-between"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <blockquote className="text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary text-2xl font-serif">
                      &ldquo;
                    </span>
                    {testimonial.quote}
                    <span className="text-primary text-2xl font-serif">
                      &rdquo;
                    </span>
                  </blockquote>

                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location} • {testimonial.route}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
