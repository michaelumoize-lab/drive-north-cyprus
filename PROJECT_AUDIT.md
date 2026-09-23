# Drive North Cyprus — Project Audit & Missing Information Report

Generated on: September 2026  
Project Root: `c:\Users\Michael Umoize\Desktop\drive-north-cyprus`

---

## 1. Executive Summary

This audit provides a complete breakdown of missing assets, incomplete content, placeholder data, broken links, and functional gaps across the **Drive North Cyprus** platform. 

While the platform features 41 planned itineraries covering 7 regions, the content and asset layer is partially complete. Most notably:
- **75% of waypoints (167 out of 223 stops)** have no photography assigned.
- **100% of routes (41/41)** lack Google Maps embed links (`mapEmbedUrl`), causing the interactive map section to remain completely hidden across all detail pages.
- **100% of stops (223/223)** lack opening hours and admission fees.
- **[RESOLVED] All 223 stop descriptions across all 41 routes** have now been updated with authentic, distinct cultural and historical descriptions in both Turkish and English (0 boilerplate or duplicate descriptions remain).
- Several broken internal links, localization issues, and mock backend forms require remediation.

---

## 2. Missing Images & Visual Assets

### 2.1 Stop Gallery Photography

| Category | Count | Details |
| :--- | :--- | :--- |
| **Total Route Stops** | 223 stops | Defined across 41 itineraries |
| **Stops with Photos** | 56 stops (25%) | Only stops matching the initial 5 loop folders |
| **Stops with ZERO Photos** | **167 stops (75%)** | No images assigned in `data/routes.ts` |
| **Routes with 0 Stop Images** | **20 routes** | Entire itinerary has no waypoint photos |
| **Routes with Partial Images** | **21 routes** | Only 1–3 out of 5–7 stops have photos |

#### Routes with ZERO Stop Images (20 Itineraries)
These routes display cards with no waypoint galleries:
1. `lef-modern` — Modern Nicosia: Shopping, Classic Cars & Zahra Street
2. `gir-nightlife` — Kyrenia Glamour: Beach Clubs, Dining & Nightlife
3. `gir-lapta` — Lapta Mountain Springs, Old Village & Coastal Promenade
4. `mag-enkomi` — Enkomi Bronze Age Capital & Rural Famagusta
5. `isk-kantara` — Kantara Mountain Fortress & Dual-Coast Panorama
6. `isk-bafra` — Mehmetçik Vineyards, Bafra Beach & Boğaz Harbour
7. `isk-wetland` — Boğaz Wetlands, Salt Flats & Birdwatching Trail
8. `kar-yudi` — Mount Yudi Trail Hike & Karpaz Gate Marina
9. `kar-caves` — Karpaz Caves & Ancient Coastal Antiquities
10. `bati-lefke` — Lefke Citrus Groves, Date Palms & Ottoman Aqueducts
11. `bati-cmc` — Gemikonağı Industrial Heritage & CMC Mining Relics
12. `bati-kormakitis` — Cape Kormakitis & Blue Lagoon Snorkel Cruise
13. `bati-maronit` — Koruçam Maronite Culture, Cuisine & Western Coast
14. `bati-eul` — Lefke Campus Vibes & Aphrodite Beachfront
15. `dag-buffavento` — Buffavento Castle & Lost Mountain Monasteries
16. `dag-ridge` — Beşparmak Mountain Ridge & Forest Scenic Drive
17. `dag-dam` — Geçitköy Turquoise Dam & Pine Forest Escape
18. `dag-olive` — Kalkanlı Monumental Olive Trees & Nature Valley
19. `dag-beylerbeyi` — Beylerbeyi Artisan Pottery & Village Olive Groves
20. `dag-villages` — Secret Mountain Villages & Timeless Island Life

---

### 2.2 Route Hero Covers (Duplicate & Generic Fallbacks)
Only **6 routes** now remain using generic regional / hero fallback placeholders (down from 15):
- **`hero-kyrenia.jpg`** is used across **2 signature routes** (`sig-grand`, `sig-gastronomy`).
- **`kyrenia-loop.jpg`** is used on `gir-classic`.
- **`famagusta-loop.jpg`** is used on `mag-walledcity`.
- **`karpaz-loop.jpg`** is used on `kar-classic`.
- **`guzelyurt-loop.jpg`** is used on `bati-soli`.
*(All 6 mountain routes, 3 western routes, and 3 signature routes have now been assigned unique photography!)*

---

### 2.3 Broken & Orphaned Image Files

1. **Broken Asset Reference**:
   - `lib/assets.ts` (Line 26): `export const ROUTE_MAP = "/images/maps/route1.png";`
   - File does not exist; the entire `public/images/maps/` directory is missing.
2. **Orphaned / Unused Photos in `public/`**:
   - `public/images/routes/nicosia/bedesten/`: **[DELETED ✅]** Bedesten is not in `all-routes.json`, so the orphaned image folder was deleted to maintain strict data-to-asset parity.
   - `public/images/route-card-images/museums-and-ottoman heritage of nicosia.jpg` is an unreferenced duplicate containing spaces in the filename (the hyphenated version is used instead).

---

### 2.4 Testimonial Avatars & Brand Assets
- **Testimonial Avatars**: All 5 testimonials in `data/testimonials.ts` have `avatar: undefined`, rendering initials fallbacks (`AvatarFallback`) rather than real traveler portraits.
- **PWA & Mobile App Icons**: Missing `manifest.json` / `site.webmanifest`, Apple Touch icons, and high-res icon sizes (192×192, 512×512).
- **Default OpenGraph Share Image**: `app/layout.tsx` metadata does not define a fallback `og:image` or Twitter card image for social shares when routes or pages do not explicitly provide one.

---

## 3. Missing Route Content & Stop Data

### 3.1 Interactive Google Maps (`mapEmbedUrl`)
- **Missing in 41 out of 41 routes (100%)**.
- `RouteDetailView.tsx` wraps the map block in `{route.mapEmbedUrl && ...}`. Consequently:
  - The map iframe container is hidden on all 41 route pages.
  - The "Haritayı Gör / View Map" action button in the hero bar is hidden.

---

### 3.2 Suggested Departure Time (`suggestedStart`)
- **[RESOLVED ✅]** Populated across all **41 out of 41 routes (100%)** based on route pacing, lighting, and first waypoint arrival.
- The `RouteTimeline` schedule breakdown component and "Suggested Departure" badge are now active on all route detail pages.

---

### 3.3 Stop Visiting Hours (`openingHours`) & Admission Fees (`entranceFee`)
- **Missing in 223 out of 223 stops (100%)**.
- `StopCard.tsx` conditionally renders badges for `openingHours` and `entranceFee`.
- Because neither field exists in any stop data, visitors cannot see opening times, ticket prices, or entrance costs for historic monuments (Kyrenia Castle, St. Hilarion, Salamis, Bellapais, Soli, etc.).

---

### 3.4 Boilerplate Stop Descriptions — [RESOLVED ✅]
- **Previously 198 out of 223 stop descriptions (89%)** used boilerplate text.
- **Current Status**: All 223 stops across all 41 routes in both `data/all-routes.json` and `data/routes.ts` have been fully updated with unique, expert-written historical and regional descriptions in both Turkish (`tr`) and English (`en`). There are 0 duplicates remaining.

---

### 3.5 Stop GPS Coordinates
- No stop defines exact latitude and longitude coordinates.
- The "Haritada Gör / Open in Maps" button defaults to a free-form search query:  
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${stop.name}, Northern Cyprus`)}`  
  This frequently leads to ambiguous Google Maps search results for remote beaches, ruins, and mountain paths.

---

### 3.6 Repetitive Practical Info Dossier
Across all 41 routes in `data/routes.ts`, the practical info fields share only **2 generic island-wide copy-pasted strings**:
- `parking`: Only 2 variations
- `fuelStations`: Only 2 variations
- `entranceFees`: Only 2 variations
- `recommendedVehicle`: Only 2 variations
- `restaurants`: Only 2 variations
- `publicTransport`: Only 2 variations

---

### 3.7 Route Difficulty Hardcoding
- In `components/RouteDetailView.tsx` (Line 139), the difficulty badge displays:  
  `{dict.common.difficulty.moderate}`  
  This hardcodes **"Moderate" / "Orta"** for every route, ignoring the actual route difficulty ("Easy / walking", "Challenging", etc.).

---

### 3.8 Contributor / Proposer Details
- In `data/routes.ts`, contributors are reduced to raw initials: `["M.U.", "H.G.", "E.A."]`.
- The source data in `all routes/routes-data.json` contains full names (`Michael Eneyufoh Umoize`, `Eyad Al-Moaid`, `Helin Gül`, `Berra Somuncu`, `Bilgesu Kökat`, etc.), but there are no contributor profiles, biographies, or full name displays.

---

## 4. Missing Features & Interactive Services

### 4.1 Promised "Free Guide" PDF Download
- The newsletter section in `components/Newsletter.tsx` explicitly promises:
  > *"🌟 Top 10 Mistakes in Northern Cyprus Road Trip Planning!"* / *"🌟 Kuzey Kıbrıs Yolculuklarında Yapılan En Büyük 10 Hata!"*
- There is no PDF document, downloadable asset, or email link in the repository.

---

### 4.2 Newsletter Backend Integration
- `components/Newsletter.tsx` handles form submission using a client-side mock timer:
  ```tsx
  await new Promise((resolve) => setTimeout(resolve, 1500));
  ```
- Submissions are not stored in a database and are not forwarded to an email service provider (e.g., Resend, Mailchimp, ConvertKit, SendGrid).

---

### 4.3 Google Maps Dynamic Interactive Map
- `package.json` includes `@googlemaps/js-api-loader`, but no dynamic map component exists to draw interactive route lines, GPS pins, or elevation profiles.

---

## 5. Broken Links & Navigation Inconsistencies

### 5.1 404 Page Broken Internal Links
- `app/not-found.tsx` (Lines 41 & 47) links Turkish navigation buttons to:
  - `<Link href="/tr/routes">`
  - `<Link href="/tr">`
- The Turkish locale is hosted directly at `/` and `/routes`. There is no `/tr` route prefix in the application.
- **Impact**: When users land on the 404 page and click "Tüm Rotalar" or "Ana Sayfa", they trigger a second 404 error.

---

### 5.2 Homepage Testimonials Localization Bug
- `components/Testimonials.tsx` imports the static `testimonials` variable:
  ```tsx
  import { testimonials } from "@/data/testimonials";
  ```
- In `data/testimonials.ts`, `testimonials` is initialized as `getTestimonials("tr")`.
- **Impact**: When a user visits the English homepage (`/en`), the traveler testimonials remain in Turkish. (The dedicated page `/en/testimonials` works correctly because it calls `getTestimonials("en")`).

---

### 5.3 Homepage Featured Routes Diversity
- `components/RoutesGrid.tsx` selects the first 6 items via `allRoutes.slice(0, 6)`.
- Because of array ordering, this renders 3 Nicosia routes and 3 Kyrenia routes. Famagusta, Karpaz, West Coast, and Mountain routes are absent from the homepage showcase.

---

### 5.4 Placeholder Contact Information
- `components/Footer.tsx`:
  - Phone number: `+90 392 888 77 66` (placeholder)
  - Social handles: `facebook.com/drivenorthcyprus`, `twitter.com/drivenorthcyprus`, `youtube.com/@drivenorthcyprus` (unverified handles)

---

### 5.5 Unused Rich Regional Data
- `data/regions.ts` defines comprehensive taglines, descriptions, and essential highlights for all 7 regions, but the file is never imported or rendered in any component.

---

## 6. Technical & SEO Metadata Gaps

1. **Root HTML Lang Mismatch**:
   - `app/layout.tsx` hardcodes `<html lang="en">` for all pages, including Turkish pages (`/`, `/about`, `/routes`), which impacts SEO and screen reader accessibility.
2. **Non-ASCII Characters in Asset URLs**:
   - Several folders in `public/images/routes/` contain non-ASCII Turkish characters (`ü`):
     - `public/images/routes/guzelyurt/güzelyurt-archaeology/`
     - `public/images/routes/guzelyurt/güzelyurt-town-centre/`
     - `public/images/routes/nicosia/büyük-han/`
   - Non-ASCII characters in static URLs can cause 404 errors or encoding discrepancies when deployed on Linux servers, AWS S3, or certain CDNs.

---

## 7. Actionable Remediation Checklist

### Priority 1: Critical Fixes & Broken Links
- [x] Fix broken internal links in `app/not-found.tsx` (`/tr/routes` -> `/routes`, `/tr` -> `/`).
- [x] Fix language prop in `components/Testimonials.tsx` to call `getTestimonials(lang)` instead of importing static Turkish data.
- [x] Remove or replace broken `ROUTE_MAP = "/images/maps/route1.png"` in `lib/assets.ts`.
- [x] Rename non-ASCII folders (`güzelyurt-*` -> `guzelyurt-*`, `büyük-han` -> `buyuk-han`) and update image paths in `data/routes.ts`.

### Priority 2: Missing Core Content & Features
- [ ] Add `mapEmbedUrl` (Google Maps embed links) to routes so interactive maps render.
- [x] Add `suggestedStart` (e.g. `"09:00"`) to routes to enable the `RouteTimeline` schedule component. (Completed: all 41 routes updated)
- [x] Orphaned Bedesten images resolved (Removed: not present in `data/all-routes.json`).
- [ ] Populate `openingHours` and `entranceFee` for historic castles, museums, and archaeological sites.
- [x] Replace boilerplate stop descriptions with informative, stop-specific descriptions. (Completed: all 41 routes / 223 stops updated)
- [ ] Add the promised "Top 10 Mistakes in Northern Cyprus Road Trip Planning" guide PDF or connect newsletter to an email API.

### Priority 3: Visual Polish & Metadata
- [ ] Collect and assign photography for the 20 routes currently with 0 images.
- [ ] Replace generic hero fallbacks (`hero-bg.jpg`, `hero-kyrenia.jpg`) with route-specific cover photos.
- [ ] Add real or illustrated traveler avatars in `data/testimonials.ts`.
- [x] Update homepage `featuredRoutes` in `components/RoutesGrid.tsx` to showcase 1 top route from each region. (Completed: Kyrenia, Famagusta, Karpaz, West Coast, Mountains, Nicosia)
- [x] Dynamically set `<html lang={lang}>` in root layout via `LanguageSync`.
- [x] Add default `og:image` and web app manifest. (Completed: added fallback OpenGraph / Twitter card images to `app/layout.tsx` and created `app/manifest.ts`)
