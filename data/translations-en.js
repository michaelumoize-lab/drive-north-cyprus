const fs = require('fs');

const translations = {
  "lef-oldcity": {
    titleEn: "Walled City Culture & Walking Tour",
    subtitleEn: "A compact walled city walk stretching from historic city gates to grand inns, bazaar lanes, and open squares. Everything within easy walking distance.",
    introEn: "A compact walled city walk stretching from historic city gates to grand inns, bazaar lanes, and open squares. Everything within easy walking distance. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Head out towards sunset — as the tour groups disperse, the warm golden light hitting the Selimiye Mosque and the quiet cobbled alleys create the city's finest atmosphere.",
    startFinishEn: "Kyrenia Gate"
  },
  "lef-museums": {
    titleEn: "Museums & Ottoman Heritage",
    subtitleEn: "From the Mevlevi Tekke to Derviş Pasha Mansion, Rüstem Bookstore to the Lusignan House — a dedicated museum trail uncovering the layered heritage of the capital.",
    introEn: "From the Mevlevi Tekke to Derviş Pasha Mansion, Rüstem Bookstore to the Lusignan House — a dedicated museum trail uncovering the layered heritage of the capital. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "The secluded courtyard café tucked behind Rüstem Bookstore is the perfect spot for a tranquil mid-walk coffee break, easily missed by most visitors.",
    startFinishEn: "Kyrenia Gate"
  },
  "lef-modern": {
    titleEn: "Modern Nicosia: Shopping, Museums & Nightlife",
    subtitleEn: "From the Classic Car Museum to Dereboyu's street fashion, historic mansions, and contemporary cafés and cocktail bars — experience the dual rhythm of past and present.",
    introEn: "From the Classic Car Museum to Dereboyu's street fashion, historic mansions, and contemporary cafés and cocktail bars — experience the dual rhythm of past and present. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Dereboyu truly comes alive late in the afternoon; visit for shopping by day and stay for the lively bistro vibe by night. Zahra Street is the buzzing heart of the evening scene.",
    startFinishEn: "Classic Car Museum (NEU)"
  },
  "gir-classic": {
    titleEn: "Classic Kyrenia: Harbour, Castle, Bellapais & St. Hilarion",
    subtitleEn: "The island's most iconic route: the horseshoe-shaped historic harbour, Crusader stronghold, Shipwreck Museum, Gothic Bellapais Abbey, and fairytale St. Hilarion. The essence of Kyrenia from peak to shoreline in one day.",
    introEn: "The island's most iconic route: the horseshoe-shaped historic harbour, Crusader stronghold, Shipwreck Museum, Gothic Bellapais Abbey, and fairytale St. Hilarion. The essence of Kyrenia from peak to shoreline in one day. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Ascend to St. Hilarion early in the morning — the climb is far cooler and more pleasant before the midday heat, and the panorama through Queen Eleanor's Window is at its clearest.",
    startFinishEn: "Kyrenia Harbour"
  },
  "gir-coastal": {
    titleEn: "Kyrenia Coastline & Secret Beaches",
    subtitleEn: "Golden sandy stretches, coastal view terraces, and hidden coves west of Kyrenia; from Alagadi Turtle Beach to the breezy Lapta coastal boardwalk. Best enjoyed from April to October.",
    introEn: "Golden sandy stretches, coastal view terraces, and hidden coves west of Kyrenia; from Alagadi Turtle Beach to the breezy Lapta coastal boardwalk. Best enjoyed from April to October. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "During summer, local roadside fruit stalls sell freshly picked sweet figs and prickly pears — be sure to pull over and try some.",
    startFinishEn: "Lapta Coastal Boardwalk"
  },
  "gir-sunset": {
    titleEn: "Golden Sunset & Panoramic Photo Spots",
    subtitleEn: "An itinerary sculpted around golden light and sweeping views: the enigmatic Mavi Köşk, Bellapais terraced viewpoints, sunset cocktail lounges, and postcard-perfect beaches.",
    introEn: "An itinerary sculpted around golden light and sweeping views: the enigmatic Mavi Köşk, Bellapais terraced viewpoints, sunset cocktail lounges, and postcard-perfect beaches. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Arrive early to claim an outdoor table at the hillside cafés of Bellapais; front-row tables facing the panoramic coastline fill up fast as twilight sets in.",
    startFinishEn: "Mavi Köşk (Blue House)"
  },
  "gir-nightlife": {
    titleEn: "Kyrenia Glamour & Nightlife",
    subtitleEn: "Vibrant beach clubs, fine waterfront dining, and chic open-air night lounges showcasing the energetic and glamorous side of Kyrenia. Sun-drenched lounging by day, DJ beats by night.",
    introEn: "Vibrant beach clubs, fine waterfront dining, and chic open-air night lounges showcasing the energetic and glamorous side of Kyrenia. Sun-drenched lounging by day, DJ beats by night. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Sunbed reservations at premier beach clubs are essential on weekends. Later in the evening, the panoramic terrace at Sky Lounge serves up the finest cocktail views over the bay.",
    startFinishEn: "Escape Beach Club"
  },
  "gir-lapta": {
    titleEn: "Lapta Springs, Historic Village & Coastal Walk",
    subtitleEn: "A peaceful route connecting the historic upper village, cool freshwater springs, and the expansive coastal walking promenade west of Kyrenia.",
    introEn: "A peaceful route connecting the historic upper village, cool freshwater springs, and the expansive coastal walking promenade west of Kyrenia. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "An off-the-beaten-path delight — the centuries-old stone aqueducts in the upper village remain wonderfully cool and shaded, offering an idyllic respite from the summer sun.",
    startFinishEn: "Lapta Old Village"
  },
  "mag-walledcity": {
    titleEn: "Walled City & Medieval Heritage",
    subtitleEn: "Mighty Venetian defensive bastions, the soaring Gothic Lala Mustafa Pasha Mosque, historic Othello Castle, and Namık Kemal Dungeon. A treasure trove for history lovers.",
    introEn: "Mighty Venetian defensive bastions, the soaring Gothic Lala Mustafa Pasha Mosque, historic Othello Castle, and Namık Kemal Dungeon. A treasure trove for history lovers. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Petek Patisserie sits right in the heart of the walled town; stop by mid-tour to sample authentic Cypriot syrup pastries and homemade dondurma.",
    startFinishEn: "Land Gate (Akkule)"
  },
  "mag-salamis": {
    titleEn: "Ancient Salamis & St. Barnabas Monastery",
    subtitleEn: "Discover the island's grandest classical city with its Roman gymnasium, amphitheatre, and seaside colonnades, paired with St. Barnabas Monastery, Royal Tombs, and Glapsides Beach.",
    introEn: "Discover the island's grandest classical city with its Roman gymnasium, amphitheatre, and seaside colonnades, paired with St. Barnabas Monastery, Royal Tombs, and Glapsides Beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "There is virtually no natural shade across the sprawling ruins of Salamis — visit early in the morning. After 11:00 AM, the exposed marble and stone get blistering hot.",
    startFinishEn: "Salamis Ruins"
  },
  "mag-varosha": {
    titleEn: "Varosha & Palm Beach",
    subtitleEn: "A poignant journey combining quiet twentieth-century history with coastal leisure: accessible sectors of the ghost city of Varosha, followed by swimming and seaside dining at Palm Beach.",
    introEn: "A poignant journey combining quiet twentieth-century history with coastal leisure: accessible sectors of the ghost city of Varosha, followed by swimming and seaside dining at Palm Beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Bicycle rental stations are available at the entrance to Varosha; cruising the paved open boulevards on two wheels is far cooler and more comfortable than walking under the sun. Bring plenty of water.",
    startFinishEn: "Varosha (Open Sectors)"
  },
  "mag-enkomi": {
    titleEn: "Enkomi Bronze Age & Rural Famagusta",
    subtitleEn: "A lesser-known archaeological route stepping back into the late Bronze Age at ancient Enkomi, rounded out by tranquil rural countryside landscapes.",
    introEn: "A lesser-known archaeological route stepping back into the late Bronze Age at ancient Enkomi, rounded out by tranquil rural countryside landscapes. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Enkomi is largely overlooked by mainstream tour buses — you will likely have this fascinating prehistoric site almost entirely to yourself.",
    startFinishEn: "Enkomi Archaeological Site"
  },
  "isk-longbeach": {
    titleEn: "İskele Coastline & Heritage Trail",
    subtitleEn: "Golden sands of Long Beach, the scenic fishing harbour of Boğaz, archaeology exhibits, and historic icon museums. A harmonious blend of seaside relaxation and cultural discovery.",
    introEn: "Golden sands of Long Beach, the scenic fishing harbour of Boğaz, archaeology exhibits, and historic icon museums. A harmonious blend of seaside relaxation and cultural discovery. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "At Boğaz Harbour in the afternoon, local fishing boats pull up with their daily catch; you can buy fish right off the dock or enjoy it freshly grilled at the waterside taverns.",
    startFinishEn: "İskele Archaeology Museum"
  },
  "isk-kantara": {
    titleEn: "Kantara Castle & Eastern Panorama",
    subtitleEn: "A scenic mountain drive taking you to the easternmost peak stronghold, overlooking pine forests, traditional hamlets, and unspoiled coastline. Can also be paired with Buffavento.",
    introEn: "A scenic mountain drive taking you to the easternmost peak stronghold, overlooking pine forests, traditional hamlets, and unspoiled coastline. Can also be paired with Buffavento. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Kantara is both the most accessible and best preserved of the three Crusader mountain fortresses; on a clear day, both the northern and southern coastlines are visible simultaneously from the battlements.",
    startFinishEn: "Kantara Castle"
  },
  "isk-bafra": {
    titleEn: "Mehmetçik Vineyards, Bafra Coast & Boğaz",
    subtitleEn: "A peaceful culinary road trip wandering through heritage grape-growing villages, vineyard landscapes, pristine Bafra sands, and charming Boğaz harbour. A serene slice of Cyprus often missed by travelers.",
    introEn: "A peaceful culinary road trip wandering through heritage grape-growing villages, vineyard landscapes, pristine Bafra sands, and charming Boğaz harbour. A serene slice of Cyprus often missed by travelers. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "The region is dotted with small artisanal grape and wine growers; take your time and plan for an unhurried, multi-course village lunch.",
    startFinishEn: "Mehmetçik Village"
  },
  "isk-wetland": {
    titleEn: "Boğaz Wetlands & Birdwatching Trail",
    subtitleEn: "Setting off from Boğaz fishing harbour to uncover the Gastria salt flats and Kaplıca shoreline, featuring coastal lagoons and birdwatching observation points.",
    introEn: "Setting off from Boğaz fishing harbour to uncover the Gastria salt flats and Kaplıca shoreline, featuring coastal lagoons and birdwatching observation points. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Early morning is the most rewarding window for birdwatching; do not forget to bring binoculars. The shallow marshlands attract a diverse variety of migratory waterfowl.",
    startFinishEn: "Boğaz Fishing Harbour"
  },
  "kar-classic": {
    titleEn: "Classic Karpas: Wild Donkeys, Golden Beach & Apostolos Andreas",
    subtitleEn: "The signature full-day road trip to the easternmost tip: rustic village life, vast open panoramas, friendly wild donkeys, endless dunes of Golden Beach, and the historic pilgrimage monastery.",
    introEn: "The signature full-day road trip to the easternmost tip: rustic village life, vast open panoramas, friendly wild donkeys, endless dunes of Golden Beach, and the historic pilgrimage monastery. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "The wild donkeys often greet motorists along the park road, but please do not feed them processed human food. Be sure to top up your fuel tank in Dipkarpaz before entering the national park.",
    startFinishEn: "Dipkarpaz Village"
  },
  "kar-seacaves": {
    titleEn: "Hidden Coves & Sea Caves",
    subtitleEn: "Where the Mediterranean carves its own sculpture: azure-glowing sea caves, Camel Point, Horseshoe Beach, and secluded stretches of Golden Beach. Swimwear is essential.",
    introEn: "Where the Mediterranean carves its own sculpture: azure-glowing sea caves, Camel Point, Horseshoe Beach, and secluded stretches of Golden Beach. Swimwear is essential. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Several stops require a short swim — bring a swimsuit and water shoes. The turquoise glow inside the sea caves is at its most vibrant around midday when the sun is overhead.",
    startFinishEn: "Blue House Sea Cave"
  },
  "kar-wildnature": {
    titleEn: "Karpas Wilderness: The 70km Peninsula Trail",
    subtitleEn: "Traverse the full length of the remote peninsula, from agricultural plains to the lonely lighthouse at Cape Apostolos Andreas. Landscapes that feel like a wild, untamed island.",
    introEn: "Traverse the full length of the remote peninsula, from agricultural plains to the lonely lighthouse at Cape Apostolos Andreas. Landscapes that feel like a wild, untamed island. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Ronnas Bay is almost completely unpublicised and typically deserted — offering one of the quietest, most pristine coastal swim spots anywhere on the peninsula.",
    startFinishEn: "Yenierenköy"
  },
  "kar-yudi": {
    titleEn: "Mount Yudi Trek & Karpaz Gate Marina",
    subtitleEn: "An invigorating mountain ridge hike on Mount Yudi, a refreshing swim along Yenierenköy beach, and a relaxing sunset finale at luxury Karpaz Gate Marina. Designed for active travelers.",
    introEn: "An invigorating mountain ridge hike on Mount Yudi, a refreshing swim along Yenierenköy beach, and a relaxing sunset finale at luxury Karpaz Gate Marina. Designed for active travelers. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Sturdy hiking boots and ample drinking water are essential for tackling Mount Yudi; the marina lounge afterward provides a luxurious and comfortable place to unwind.",
    startFinishEn: "Mount Yudi Trailhead"
  },
  "kar-caves": {
    titleEn: "Karpas Caves & Ancient Footprints",
    subtitleEn: "Sea cliffs, Ayia Trias mosaics, Byzantine chapels, and vast untouched shores leading to the rugged eastern headlands — a journey that feels like reaching the end of the earth.",
    introEn: "Sea cliffs, Ayia Trias mosaics, Byzantine chapels, and vast untouched shores leading to the rugged eastern headlands — a journey that feels like reaching the end of the earth. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "This is a full day of driving — set off early in the morning and bear in mind that there are no fuel stations past Dipkarpaz.",
    startFinishEn: "Hill Coffee"
  },
  "kar-buyukkonuk": {
    titleEn: "Büyükkonuk Eco-Village & Eastern Gateway",
    subtitleEn: "Enter the Karpas through Northern Cyprus's pioneer eco-tourism village, Büyükkonuk: traditional crafts, homemade stone-oven bread, local cuisine, and warm village hospitality.",
    introEn: "Enter the Karpas through Northern Cyprus's pioneer eco-tourism village, Büyükkonuk: traditional crafts, homemade stone-oven bread, local cuisine, and warm village hospitality. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Büyükkonuk hosts periodic eco-festivals; if your dates align, do not miss the live demonstrations of traditional halloumi cheesemaking and carob syrup pressing.",
    startFinishEn: "İskele Archaeology Museum"
  },
  "bati-soli": {
    titleEn: "Ancient Soli & Vouni Palace",
    subtitleEn: "Famous for its intricate Swan Mosaic, ancient Soli combines with the commanding clifftop ruins of Vouni Palace and peaceful western coastlines. Tour buses rarely venture here.",
    introEn: "Famous for its intricate Swan Mosaic, ancient Soli combines with the commanding clifftop ruins of Vouni Palace and peaceful western coastlines. Tour buses rarely venture here. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Sunset from the high terraces of Vouni Palace is among the most dramatic on the entire island, with vast sea views and complete serenity.",
    startFinishEn: "Soli Basilica"
  },
  "bati-guzelyurt": {
    titleEn: "Güzelyurt Archaeology & Citrus Orchards",
    subtitleEn: "A tranquil western journey centred on lush citrus groves, regional town markets, and rich archaeological finds; featuring St. Mamas Church and sweet-scented orange orchards.",
    introEn: "A tranquil western journey centred on lush citrus groves, regional town markets, and rich archaeological finds; featuring St. Mamas Church and sweet-scented orange orchards. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Visit on market morning when regional farmers arrive with freshly harvested oranges, lemons, and local preserves — the town centre is at its most vibrant.",
    startFinishEn: "Güzelyurt Town Centre"
  },
  "bati-lefke": {
    titleEn: "Lefke Citrus Groves & Ottoman Aqueducts",
    subtitleEn: "Historic streets scented with orange blossoms, Ottoman townhouses, ancient stone aqueducts, and Piri Mehmet Pasha Mosque. An authentic, timeless slice of rural Cyprus.",
    introEn: "Historic streets scented with orange blossoms, Ottoman townhouses, ancient stone aqueducts, and Piri Mehmet Pasha Mosque. An authentic, timeless slice of rural Cyprus. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Visit in springtime when the citrus trees are in full bloom and their sweet fragrance blankets the entire valley. Pick up jars of walnut and date spoon sweets from village producers.",
    startFinishEn: "Lefke Town Centre"
  },
  "bati-cmc": {
    titleEn: "Gemikonağı Industrial Heritage & CMC Legacy",
    subtitleEn: "Delve into the island's twentieth-century copper mining history with surviving Cyprus Mines Corporation infrastructure, the historic ore-loading pier, and scenic Gemikonağı coastlines.",
    introEn: "Delve into the island's twentieth-century copper mining history with surviving Cyprus Mines Corporation infrastructure, the historic ore-loading pier, and scenic Gemikonağı coastlines. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "The rustic wooden and steel loading pier at Gemikonağı makes for striking photography; few tourists realize Cyprus takes its very name from ancient copper mining.",
    startFinishEn: "Historic CMC Mining Complex"
  },
  "bati-yesilirmak": {
    titleEn: "Yeşilırmak Strawberry Fields & West Coast",
    subtitleEn: "Winding from ancient Soli and Vouni through Lefke into the lush valley of Yeşilırmak; featuring pick-your-own strawberry farms in spring and dining on Yedidalga beach.",
    introEn: "Winding from ancient Soli and Vouni through Lefke into the lush valley of Yeşilırmak; featuring pick-your-own strawberry farms in spring and dining on Yedidalga beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Time your visit for the spring strawberry harvest; snap a photo with Yeşilırmak's giant strawberry monument and sample homemade strawberry liqueurs and jams.",
    startFinishEn: "Ancient Soli"
  },
  "bati-kormakitis": {
    titleEn: "Cape Kormakitis & Blue Lagoon Boat Cruise",
    subtitleEn: "A coastal maritime adventure along the northwest headlands: navigate Cape Kormakitis, swim in the iridescent Blue Lagoon, snorkel offshore reefs, and relax on peaceful Sadrazamköy beach.",
    introEn: "A coastal maritime adventure along the northwest headlands: navigate Cape Kormakitis, swim in the iridescent Blue Lagoon, snorkel offshore reefs, and relax on peaceful Sadrazamköy beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "The pristine waters of the Blue Lagoon are extraordinary for snorkeling; boat departures usually set sail from Kyrenia harbour, so book a morning departure slot for the calmest seas.",
    startFinishEn: "Cape Kormakitis Coast"
  },
  "bati-maronit": {
    titleEn: "Koruçam Maronite Heritage & Cape Kormakitis",
    subtitleEn: "A rare cultural immersion into the historic Maronite village, its Catholic cathedral, traditional culinary customs, and the raw western cape. A side of Cyprus unseen on postcards.",
    introEn: "A rare cultural immersion into the historic Maronite village, its Catholic cathedral, traditional culinary customs, and the raw western cape. A side of Cyprus unseen on postcards. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Locals in the village square will warmly wave you over and treat you to more Cypriot coffee than you can drink — don't rush, the beauty of this route lies in taking things slow.",
    startFinishEn: "Koruçam Village Square"
  },
  "bati-eul": {
    titleEn: "Lefke University Quarter & Aphrodite Coast",
    subtitleEn: "Beginning around the scenic campus of European University of Lefke, branching out to seaside seafood taverns and sunset viewpoints; blending youthful academic energy with coastal peace.",
    introEn: "Beginning around the scenic campus of European University of Lefke, branching out to seaside seafood taverns and sunset viewpoints; blending youthful academic energy with coastal peace. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "The casual fish taverns along Aphrodite Beach are positioned perfectly for open-sea sunsets; reserve your dinner table for just before twilight.",
    startFinishEn: "EUL Campus"
  },
  "dag-buffavento": {
    titleEn: "Buffavento Castle & Forgotten Monasteries",
    subtitleEn: "A dramatic mountain route high above the northern coastline: the rugged crags of Buffavento Castle, fragrant pine forests, Sourp Magar Armenian Monastery, and historic Antiphonitis Church.",
    introEn: "A dramatic mountain route high above the northern coastline: the rugged crags of Buffavento Castle, fragrant pine forests, Sourp Magar Armenian Monastery, and historic Antiphonitis Church. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Buffavento translates to 'Defier of the Winds'; the 30–40 minute uphill hike has little shade, so set off in the morning chill. The reward is a stupendous 360-degree island vista.",
    startFinishEn: "Buffavento Castle Trailhead"
  },
  "dag-ridge": {
    titleEn: "Kyrenia Ridge & Forest Escapes",
    subtitleEn: "Setting off from the Değirmenlik mountain pass along the ridge road of the Five Finger Mountains; filled with sweeping panoramas, shaded picnic spots, and rustic village cafés.",
    introEn: "Setting off from the Değirmenlik mountain pass along the ridge road of the Five Finger Mountains; filled with sweeping panoramas, shaded picnic spots, and rustic village cafés. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Spring (March to April) is by far the most magical season, when rare wild orchids and carpets of colourful cyclamens blanket the rocky mountain slopes.",
    startFinishEn: "Değirmenlik Forest Entrance"
  },
  "dag-dam": {
    titleEn: "Geçitköy Reservoir & Pine Forest Trail",
    subtitleEn: "Serene turquoise waters of Geçitköy Dam, cooling pine woods, traditional stone villages, and panoramic ridge overlooks. Can easily be connected with Değirmenlik and Gönyeli.",
    introEn: "Serene turquoise waters of Geçitköy Dam, cooling pine woods, traditional stone villages, and panoramic ridge overlooks. Can easily be connected with Değirmenlik and Gönyeli. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Ideal for easy nature walks and peaceful family picnics; on weekdays, you will practically have the reservoir viewing trails entirely to yourself.",
    startFinishEn: "Geçitköy Reservoir"
  },
  "dag-olive": {
    titleEn: "Kalkanlı Monumental Olive Groves & METU",
    subtitleEn: "Centuries-old monumental olive trees, scenic valley vistas, Shepherd's Cave, and the serene surroundings of the METU Northern Cyprus campus. A photographer's dream.",
    introEn: "Centuries-old monumental olive trees, scenic valley vistas, Shepherd's Cave, and the serene surroundings of the METU Northern Cyprus campus. A photographer's dream. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "Several monumental olive trees here are over 800 years old; visit in the soft morning or late afternoon light when the ancient gnarled trunks look truly majestic.",
    startFinishEn: "Monumental Olive Groves"
  },
  "dag-beylerbeyi": {
    titleEn: "Beylerbeyi Artisan Crafts & Olive Trails",
    subtitleEn: "Discover traditional pottery workshops, tranquil olive groves, and slow village life in hillside Beylerbeyi, ending with authentic local flavours.",
    introEn: "Discover traditional pottery workshops, tranquil olive groves, and slow village life in hillside Beylerbeyi, ending with authentic local flavours. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "You can watch master potters shaping clay on the wheel and even try making your own ceramic piece — an engaging, hands-on experience for adults and kids alike.",
    startFinishEn: "Beylerbeyi Village Square"
  },
  "dag-villages": {
    titleEn: "Secret Mountain Villages & Authentic Life",
    subtitleEn: "No fortress lines, no crowds — just silvery olive groves, stone belfries, and sleepy hamlets where Sunday market remains the highlight of the week. From Karmi to Koruçam.",
    introEn: "No fortress lines, no crowds — just silvery olive groves, stone belfries, and sleepy hamlets where Sunday market remains the highlight of the week. From Karmi to Koruçam. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey.",
    insiderTipEn: "This itinerary isn't about rushing through a checklist; stopping for a slow Turkish coffee at a village square and chatting with locals is the true soul of this journey.",
    startFinishEn: "Karmi Village"
  },
  "sig-grand": {
    titleEn: "Grand Cyprus Expedition",
    subtitleEn: "The ultimate scenic cross-island journey from mountain citadels to wild Karpas",
    introEn: "Mountain hamlets, three Crusader castles, dramatic mountain ridges, and the untamed wilderness of Karpas leading all the way to Cape Zafer — an epic multi-day expedition capturing the true spirit of Cyprus.",
    insiderTipEn: "Spread your overnight bookings across quaint coastal villages and mountain retreats along the route to immerse yourself fully in the island's varied atmospheres.",
    startFinishEn: "Kyrenia (Harbour & Bellapais)"
  },
  "sig-gastronomy": {
    titleEn: "Culinary & Vineyard Odyssey",
    subtitleEn: "From family orchard tables to seaside taverns: a true taste of Cyprus",
    introEn: "Sun-ripened citrus, artisanal halloumi, fragrant olive oils, and wild carob — follow the island's authentic gastronomic staples straight from regional producers and farms to family tavern tables.",
    insiderTipEn: "Plan for generous multi-course lunches and don't hesitate to ask tavern owners for their daily off-menu meze specialties and local village wines.",
    startFinishEn: "Kyrenia Harbour (Breakfast)"
  },
  "sig-adventure": {
    titleEn: "Action & Coastal Adventure",
    subtitleEn: "Full throttle across Northern Cyprus: karting, diving, safaris, and surf",
    introEn: "Go-kart racing, crystal-clear reef scuba diving, horseback riding through pine hills, ATV safari trails, and sunset windsurfing along the western coast — an adrenaline-charged, full-throttle expedition.",
    insiderTipEn: "Book your reef diving and sunset water sports slots well ahead of time during peak summer months, and pack high-SPF reef-safe sunscreen and plenty of hydration.",
    startFinishEn: "Cemsa Karting (Ortaköy)"
  },
  "sig-family": {
    titleEn: "Family Fun & Coastal Discoveries",
    subtitleEn: "A relaxed, kid-approved journey with calm waters, marine life, and outdoor play",
    introEn: "Air-conditioned ocean exhibits, gentle boat excursions, amusement rides, and shallow, crystal-clear family beaches — a stress-free itinerary packed with activities that children genuinely adore.",
    insiderTipEn: "Start your outdoor beach and park stops early before midday warmth peaks, and keep shaded afternoon hours for air-conditioned indoor stops or relaxed harbor boat rides.",
    startFinishEn: "Ocean Aquarium"
  },
  "sig-sunset": {
    titleEn: "Chasing the Light: Sunsets & Stargazing",
    subtitleEn: "Golden hour castles, seaside blue hour, and celestial dark-sky stargazing",
    introEn: "Sculpted entirely around the island's magical light: golden hour atop Crusader fortresses, blue hour drinks on abbey terraces, and pitch-black celestial night skies in the remote Karpas wilderness.",
    insiderTipEn: "Bring a light jacket for mountaintop sunsets and late-night stargazing on the peninsula, as mountain breezes and open coastal nights can get pleasantly cool even in summer.",
    startFinishEn: "St. Hilarion Viewpoint"
  }
};

module.exports = translations;
