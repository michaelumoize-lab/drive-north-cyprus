// components/PrivacyView.tsx
import Image from "next/image";
import { Shield, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Locale, getDictionary } from "@/lib/i18n";

export function PrivacyView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero with scenic background image */}
      <section className="relative h-[45vh] min-h-[360px] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-nicosia.jpg"
            alt={dict.privacy.title}
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
              {dict.privacy.title}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-100 leading-relaxed drop-shadow-sm font-normal text-pretty max-w-2xl">
              {dict.privacy.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
          <Shield className="h-3.5 w-3.5 text-primary" />
          <span>{dict.privacy.lastUpdated}</span>
        </div>

        {dict.privacy.sections.map((section) => (
          <Card key={section.id} id={section.id} className="scroll-mt-24 border-border">
            <CardContent className="p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                {section.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Contact Banner */}
        <div className="bg-muted/40 border border-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
          <div className="space-y-1">
            <h3 className="font-semibold text-foreground">
              {lang === "tr" ? "Sorularınız veya Talepleriniz mi Var?" : "Have Questions or Inquiries?"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {lang === "tr"
                ? "Gizlilik politikamız veya verilerinizle ilgili her türlü konuda bizimle iletişime geçebilirsiniz."
                : "Feel free to reach out to us regarding our privacy policy or personal data management."}
            </p>
          </div>
          <a
            href="mailto:info@drivenorthcyprus.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition shrink-0"
          >
            <Mail className="h-4 w-4" />
            <span>info@drivenorthcyprus.com</span>
          </a>
        </div>
      </div>
    </main>
  );
}
