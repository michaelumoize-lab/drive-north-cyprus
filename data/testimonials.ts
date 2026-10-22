// data/testimonials.ts
import { Locale } from "@/lib/i18n";

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  route: string;
  travelDate: string;
  quote: string;
  rating: number;
  initials: string;
  avatar?: string;
}

interface RawTestimonial {
  id: number;
  name: string;
  location: { tr: string; en: string };
  route: { tr: string; en: string };
  travelDate: { tr: string; en: string };
  quote: { tr: string; en: string };
  rating: number;
  initials: string;
  avatar?: string;
}

// To add more authentic traveler reviews once received from the client,
// simply append objects adhering to the RawTestimonial interface below.
// The testimonials page, cards, and grid dynamically scale and render all items.
export const rawTestimonials: RawTestimonial[] = [
  {
    id: 1,
    name: "S.R.",
    location: { tr: "Birleşik Krallık", en: "United Kingdom" },
    route: { tr: "Girne Sahil & Kale Rotası", en: "Kyrenia Heritage Loop" },
    travelDate: { tr: "Mayıs 2025", en: "May 2025" },
    quote: {
      tr: "Girne rotası Kıbrıs seyahatimizin en unutulmaz anıydı! St. Hilarion Kalesi tek kelimeyle büyüleyiciydi. Sabah erken saatte gitme tavsiyesi tam isabet oldu. Detaylı harita ve durak bilgileri sayesinde hiçbir stres yaşamadan adayı keşfettik.",
      en: "The Kyrenia Heritage Loop was the highlight of our Cyprus trip! St. Hilarion Castle is absolutely breathtaking, and the insider tip to visit early morning was spot on. Having the route map and stop-by-stop guide made our self-drive holiday completely stress-free.",
    },
    rating: 5,
    initials: "SR",
  },
  {
    id: 2,
    name: "M.K.",
    location: { tr: "Almanya", en: "Germany" },
    route: { tr: "Karpaz Doğa & Altınkum Rotası", en: "Karpaz Nature Loop" },
    travelDate: { tr: "Nisan 2025", en: "Apr 2025" },
    quote: {
      tr: "Drive North Cyprus ile Karpaz Yarımadası'nı gezmek çok kolaydı. Yol tarifleri kusursuzdu; yabani eşekleri gördük, Altınkum'un berrak sularında yüzdük ve manastırı ziyaret ettik. Yerel ipuçları sayesinde turist gibi değil, buralı gibi hissettik.",
      en: "Drive North Cyprus made exploring the Karpaz Peninsula so easy. The directions were perfect, and we saw wild donkeys, swam at Golden Beach, and visited the monastery – exactly as promised. The insider tips really made it special. We felt like locals, not tourists.",
    },
    rating: 5,
    initials: "MK",
  },
  {
    id: 3,
    name: "L.T.",
    location: { tr: "Kanada", en: "Canada" },
    route: { tr: "Gazimağusa Tarih Rotası", en: "Famagusta History Loop" },
    travelDate: { tr: "Ekim 2024", en: "Oct 2024" },
    quote: {
      tr: "Kuzey Kıbrıs'a gidecek herkese bu rehberi öneriyorum. Gazimağusa rotası muazzam hazırlanmış; Salamis Antik Kenti'nden Othello Kalesi'ne kadar her detay düşünülmüş. Bizi saatlerce sürecek araştırma zahmetinden kurtardı!",
      en: "I've been recommending Drive North Cyprus to everyone planning a trip to North Cyprus. The Famagusta loop was incredibly well-researched – from Ancient Salamis to Othello Castle, everything was covered. The free guide saved us hours of research!",
    },
    rating: 5,
    initials: "LT",
  },
  {
    id: 4,
    name: "J.P.",
    location: { tr: "Avustralya", en: "Australia" },
    route: { tr: "Lefkoşa Surlariçi Yürüyüşü", en: "Nicosia Old City Loop" },
    travelDate: { tr: "Mart 2025", en: "Mar 2025" },
    quote: {
      tr: "Lefkoşa Surlariçi'ni Drive North Cyprus rehberiyle adımlamak, yanınızda yerli bir dostunuzun size şehri gezdirmesi gibiydi. Büyük Han, Selimiye ve avludaki gizli kahvehane ziyaretimizi unutulmaz kıldı. Harika bir iş!",
      en: "Walking through Nicosia's old city with Drive North Cyprus' guide was like having a local friend show you around. The Büyük Han, Selimiye Mosque, and the hidden courtyard cafe made our visit unforgettable. Absolutely brilliant work!",
    },
    rating: 5,
    initials: "JP",
  },
  {
    id: 5,
    name: "E.V.",
    location: { tr: "Hollanda", en: "Netherlands" },
    route: { tr: "Güzelyurt & Lefke Mirası", en: "Güzelyurt & Lefke Heritage Loop" },
    travelDate: { tr: "Eylül 2024", en: "Sep 2024" },
    quote: {
      tr: "Bu rehber olmasaydı Soli ve Vouni Sarayı'nı tamamen kaçırabilirdik. Rota bizi nefis köy yollarından geçirdi, narenciye bahçelerindeki mola ise harika bir sürprizdi. Kuzey Kıbrıs'ı keşfetmek isteyen herkesin cebinde olmalı!",
      en: "We would have completely missed Soli and Vouni Palace without this guide. The route took us through beautiful countryside, and the stop at the lemon groves was a lovely surprise. Drive North Cyprus is a must-have for any serious explorer!",
    },
    rating: 4,
    initials: "EV",
  },
  {
    id: 6,
    name: "H.B.",
    location: { tr: "İsveç", en: "Sweden" },
    route: { tr: "Buffavento & Beşparmak Zirve Sürüşü", en: "Buffavento Mountain Ridge" },
    travelDate: { tr: "Haziran 2025", en: "June 2025" },
    quote: {
      tr: "Buffavento Kalesi'ne çıkan dağ yolu hayatımda gördüğüm en etkileyici manzaralardan biriydi. Virajlı yollar için verilen sürüş tüyoları ve su bulundurma uyarısı hayat kurtardı. Zirveden adanın iki yakasını birden görmek nefes kesiciydi.",
      en: "The mountain road up to Buffavento Castle offered some of the most striking panoramas I've ever witnessed. The driving tips for the narrow switchbacks and the reminder to bring plenty of water were invaluable. Seeing both coasts from the summit was unforgettable.",
    },
    rating: 5,
    initials: "HB",
  },
  {
    id: 7,
    name: "A.D.",
    location: { tr: "Türkiye", en: "Turkey" },
    route: { tr: "İskele & Long Beach Sahil Kaçamağı", en: "Iskele & Long Beach Escape" },
    travelDate: { tr: "Ağustos 2025", en: "August 2025" },
    quote: {
      tr: "Ailemizle yaptığımız tatilde İskele rotası tam aradığımız huzuru sağladı. Long Beach'in sakin koyları, çocuklarla yüzmek için ideal plajlar ve balıkçı lokantaları önerisi kusursuzdu. Her şey adım adım tarif edilmiş.",
      en: "Our family road trip along the Iskele coast was pure relaxation. The recommendations for quiet coves along Long Beach, safe swimming spots for the kids, and local seafood tavernas were absolutely spot on. Everything was clearly guided step by step.",
    },
    rating: 5,
    initials: "AD",
  },
  {
    id: 8,
    name: "C.M.",
    location: { tr: "Fransa", en: "France" },
    route: { tr: "Kantara Kalesi & Kuzey Kıyısı", en: "Kantara Castle & North Coast" },
    travelDate: { tr: "Eylül 2025", en: "September 2025" },
    quote: {
      tr: "Kantara Kalesi'nden gün batımını izlemek adeta bir rüya gibiydi. Rehberin önerdiği mola yerinde yerel hellim böreği ve taze narenciye tatma fırsatı bulduk. Harita entegrasyonu ve durakların kronolojik akışı çok başarılı.",
      en: "Watching the sunset from Kantara Castle felt like a dream. Following the guide's recommendation, we stopped at a hillside bakery for warm hellim pastries and fresh citrus juice. The interactive map and chronological stop flow made navigating effortless.",
    },
    rating: 5,
    initials: "CM",
  },
  {
    id: 9,
    name: "D.W.",
    location: { tr: "İsviçre", en: "Switzerland" },
    route: { tr: "Batı Sahili & Soli Mozaikleri", en: "West Coast & Soli Mosaics" },
    travelDate: { tr: "Ekim 2025", en: "October 2025" },
    quote: {
      tr: "Kuzey Kıbrıs'ın batı yakasındaki sakinliği ve el değmemiş doğayı bu rota sayesinde keşfettik. Soli Bazilikası'ndaki Kuğu mozaiği ve dağ köylerindeki yerel üreticiler gezimizi eşsiz kıldı. Harika bir rehberlik!",
      en: "Thanks to this route, we discovered the peaceful and untouched beauty of North Cyprus's western coast. The Swan mosaic at Soli Basilica and the local artisan stops in the mountain villages made our journey truly unique. Superb travel curation!",
    },
    rating: 5,
    initials: "DW",
  },
];

export function getTestimonials(lang: Locale = "tr"): Testimonial[] {
  const isTr = lang === "tr";
  return rawTestimonials.map((t) => ({
    id: t.id,
    name: t.name,
    location: isTr ? t.location.tr : t.location.en,
    route: isTr ? t.route.tr : t.route.en,
    travelDate: isTr ? t.travelDate.tr : t.travelDate.en,
    quote: isTr ? t.quote.tr : t.quote.en,
    rating: t.rating,
    initials: t.initials,
    avatar: t.avatar,
  }));
}

export const testimonials: Testimonial[] = getTestimonials("tr");
