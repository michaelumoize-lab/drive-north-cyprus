// components/TermsView.tsx
import Image from "next/image";
import Link from "next/link";
import { FileText, Mail, ArrowLeft, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Locale, getDictionary } from "@/lib/i18n";

export function TermsView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const homeHref = lang === "tr" ? "/" : "/en/";

  return (
    <main className="min-h-screen bg-background">
      {/* Hero with scenic background image */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-famagusta.jpg"
            alt={dict.terms.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/65 to-black/40" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="mb-6">
            <Link
              href={homeHref}
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 transition-all group shadow-sm"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>{dict.common.backToAllRoutes}</span>
            </Link>
          </div>
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium mb-4">
              <FileText className="h-3.5 w-3.5 text-primary" />
              <span className="text-white/90">{dict.terms.lastUpdated}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight drop-shadow-sm">
              {dict.terms.title}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed drop-shadow-sm">
              {dict.terms.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Safety Notice Callout */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-amber-50 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-800/60 rounded-xl p-6 sm:p-7 flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-amber-900 dark:text-amber-200">
            <h3 className="font-semibold text-base text-amber-950 dark:text-amber-100">
              {lang === "tr" ? "Önemli Sürüş Güvenliği Notu" : "Important Road Safety Notice"}
            </h3>
            <p className="leading-relaxed">
              {lang === "tr"
                ? "Kuzey Kıbrıs'ta trafik soldan akar. Rotalarımızı keşfederken yerel hız sınırlarına, yol işaretlerine ve emniyet kemeri kurallarına uymak her sürücünün kendi yasal sorumluluğundadır."
                : "In Northern Cyprus, driving is on the left. When following our scenic itineraries, adhering to local speed limits, road signs, and seatbelt laws is the legal responsibility of each driver."}
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
        {dict.terms.sections.map((section) => (
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
              {lang === "tr" ? "Koşullar Hakkında Sorularınız mı Var?" : "Questions About Our Terms?"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {lang === "tr"
                ? "Kullanım koşullarımız veya içerik hakları hakkında bilgi almak için bize yazabilirsiniz."
                : "Get in touch with our team if you need clarification regarding our terms and conditions."}
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
