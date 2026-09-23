export type Locale = "tr" | "en";

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

export const rawRoutes: RawRouteItem[] = [
  {
    "id": "lef-oldcity",
    "slug": "nicosia-old-city-loop",
    "region": "lefkosa",
    "themes": [
      "history"
    ],
    "distance": "3–5 km",
    "duration": {
      "tr": "3–4 saat",
      "en": "3–4 hours"
    },
    "difficulty": {
      "tr": "Kolay (yürüyüş)",
      "en": "Easy (walk)"
    },
    "startFinish": {
      "tr": "Girne Kapısı",
      "en": "Kyrenia Gate"
    },
    "heroImage": "/images/route-card-images/walled-city-culture.jpg",
    "title": {
      "tr": "Surlariçi Kültür & Sokak Yürüyüşü",
      "en": "Walled City Culture & Walking Tour"
    },
    "subtitle": {
      "tr": "Şehir kapılarından tarihi hanlara, çarşı sokaklarından meydanlara uzanan kompakt bir surlariçi rotası. Her şey yürüme mesafesinde.",
      "en": "A compact walled city walk stretching from historic city gates to grand inns, bazaar lanes, and open squares. Everything within easy walking distance."
    },
    "intro": {
      "tr": "Şehir kapılarından tarihi hanlara, çarşı sokaklarından meydanlara uzanan kompakt bir surlariçi rotası. Her şey yürüme mesafesinde. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A compact walled city walk stretching from historic city gates to grand inns, bazaar lanes, and open squares. Everything within easy walking distance. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Gün batımına doğru gidin — tur grupları dağılınca Selimiye'ye vuran altın ışık ve sessiz sokaklar şehrin en güzel atmosferini yaratır.",
      "en": "Head out towards sunset — as the tour groups disperse, the warm golden light hitting the Selimiye Mosque and the quiet cobbled alleys create the city's finest atmosphere."
    },
    "proposers": [
      "E.A.",
      "H.G.",
      "B.S.",
      "B.K.",
      "E.P.",
      "M.U.",
      "M.M.",
      "D.O.",
      "K.A.",
      "A.S."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Kapısı",
          "description": "Venedikliler tarafından 1567 yılında inşa edilen ve mimarı Kont Giulio Savorgnan'ın adıyla Porta del Proveditore olarak anılan Girne Kapısı, Lefkoşa'nın kuzey giriş kapısıdır. Osmanlı döneminde 1821 yılında üzerine eklenen kubbeli nöbetçi odası ve sur duvarlarındaki kitabelerle günümüzdeki halini almıştır. Kapının hemen yanındaki burç üzerinde Atatürk heykeli yer alır ve yapı günümüzde turizm danışma ofisi olarak hizmet verir. Surlariçi yürüyüş rotaları için kentin en tanınan ve pratik başlangıç noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Sarayönü / Atatürk Meydanı",
          "description": "Lüzinyan ve Venedik dönemlerinden bu yana Lefkoşa'nın yönetsel merkezi sayılan Atatürk Meydanı, yerel adıyla Sarayönü olarak bilinir. Meydanın odak noktasında, 1489 yılında Salamis harabelerinden getirilerek dikilen ve üzerinde Venedik soylularının armalarını taşıyan granit Venedik Sütunu yükselir. Meydanı çevreleyen İngiliz sömürge dönemi mahkeme binaları, Osmanlı çeşmesi ve tarihi kahvehaneler, başkentin idari ve toplumsal geçmişinin yüzyıllar içindeki dönüşümünü gözler önüne serer.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Büyük Han",
          "description": "Kıbrıs'ın fethinden hemen sonra, 1572 yılında Beylerbeyi Sinan Paşa tarafından inşa ettirilen Büyük Han, adadaki Osmanlı sivil mimarisinin en görkemli yapısıdır. İki katlı revaklarla çevrili geniş iç avlusunun ortasında, sütunlar üzerine oturtulmuş altıgen bir köşk mescit ve şadırvan yer alır. Geçmişte tüccarların konakladığı hücre odaları günümüzde geleneksel el sanatları atölyelerine, gölge oyunu sahnelerine ve Kıbrıs kahvesi sunan otantik avlu kafelerine ev sahipliği yapar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Selimiye Camii",
          "description": "1209 ile 1326 yılları arasında Fransız Gotik üslubunda katedral olarak inşa edilen yapı, Lüzinyan krallarının taç giydiği Azize Sofya Katedrali'dir. 1571 yılında Osmanlı idaresine geçtikten sonra camiye dönüştürülmüş ve batı cephesine iki zarif minare eklenmiştir. Devasa sivri kemerleri, görkemli payandaları ve gül pencereleriyle Akdeniz havzasındaki en etkileyici Orta Çağ Gotik anıtlarından biridir. Yapı, Doğu ile Batı mimarlık geleneklerinin eşsiz bir sentezini sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Bandabuliya",
          "description": "Lefkoşa Belediye Pazarı olarak da bilinen Bandabuliya, İngiliz sömürge yönetimi döneminde 1930'lu yılların başında inşa edilmiş kapalı bir çarşıdır. Kesme taş mimarisi ve tonozlu geçitleriyle dikkat çeken mekan, kentin ticari hayatının yüzyıllık merkezidir. İçerisinde geleneksel hellim peyniri, ceviz macunu, zivaniya, taze baharatlar satan yerel dükkanların yanı sıra küçük zanaatkarlar ve sahne sanatları etkinliklerine ayrılmış kültürel alanlar yer alır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Arasta Sokağı",
          "description": "Selimiye Camii çevresinden Lokmacı sınır kapısına kadar uzanan Arasta Sokağı, Lefkoşa'nın en köklü ve hareketli tarihi çarşı aksıdır. Yayalaştırılmış taş döşeli sokak boyunca dizilen dükkanlarda geleneksel Lefkara işleri, deri zanaatları, el yapımı hediyelikler ve yerel tatlılar satılır. Tarih boyunca farklı zanaat kollarını barındıran arasta dokusu, günümüzde renkli gölgelikleri ve sokak kahveleriyle başkentin yaşayan gündelik kültürünü yansıtır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Samanbahçe Evleri",
          "description": "19. yüzyılın sonlarında, 1898-1955 yılları arasında Evkaf İdaresi tarafından dar gelirli aileler için inşa edilen Samanbahçe, Kıbrıs'ın ilk toplu sosyal konut projesidir. Düzenli ızgara planı boyunca sıralanan tek katlı, sarı taştan yapılmış bitişik nizam evler ve yeşil panjurlu pencereler sakin bir mahalle atmosferi sunar. Yerleşkenin merkezinde kubbeli bir meydan çeşmesi yer alır; burası kentin gürültüsünden uzaklaşmak için ideal bir açık hava mimarlık durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Gate",
          "description": "Constructed by the Venetians in 1567 as Porta del Proveditore, the Kyrenia Gate served as the primary northern portal through Nicosia's massive fortified perimeter. The structure was modified under Ottoman rule in 1821 with the addition of a domed guardhouse and commemorative inscriptions. Situated beside a prominent bastion featuring an Atatürk memorial, it functions today as a municipal tourism information office and serves as the primary starting point for exploring the historic walled quarter.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Sarayönü / Atatürk Square (Venetian Column)",
          "description": "Serving as the civic heart of Nicosia since the Lusignan and Venetian administrations, Atatürk Square is widely known by locals as Sarayönü. The center of the plaza is marked by the Venetian Column, a granite monument transported from the ancient ruins of Salamis in 1489 that bears carved coats of arms of noble Venetian families. Surrounded by British colonial-era judicial buildings and a classical Ottoman fountain, the square encapsulates the capital's multifaceted civic evolution.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Büyük Han (Great Inn)",
          "description": "Built in 1572 by Lala Mustafa Pasha's successor, Sinan Pasha, shortly after the Ottoman capture of Cyprus, the Great Inn represents the pinnacle of Ottoman commercial architecture on the island. The imposing two-storey stone caravanserai features an expansive central courtyard anchored by an octagonal domed prayer kiosk elevated over a fountain. Former merchant lodging chambers now house traditional craft studios, shadow puppet exhibits, and shaded cafes serving authentic Cypriot coffee.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Selimiye Mosque (St. Sophia Cathedral)",
          "description": "Erected between 1209 and 1326 in French High Gothic style, this monumental complex originated as the Cathedral of Saint Sophia, where Lusignan kings were formally crowned. Converted into the city's principal mosque following the Ottoman conquest in 1571, the building retains soaring flying buttresses, pointed arcades, and a dramatic stone rose window, complemented by two distinctive minarets. It stands as one of the most prominent surviving Gothic masterworks in the Eastern Mediterranean basin.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Bandabuliya Municipal Market",
          "description": "Constructed during the British administration in the early 1930s, the Municipal Covered Market—known universally as the Bandabuliya—is an enduring anchor of urban commerce in northern Nicosia. Its vaulted stone halls contain traditional stalls offering artisanal halloumi cheese, fruit preserves, locally distilled spirits, and bulk herbs. Recent restoration has introduced multipurpose community venues and bookshops alongside generational tradesmen.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Arasta Bazaar Street",
          "description": "Stretching from the Selimiye precinct south toward the Ledra Street pedestrian crossing, Arasta Street is the capital's historic bazaar corridor. Lined with independent shops beneath shaded awnings, the street offers handcrafted Lefkara lace, leatherware, copper vessels, and local confections. The pedestrian walkway preserves the lively character of traditional Cypriot urban trade, providing an intimate setting for walking, window shopping, and sampling street-level snacks.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Samanbahçe Historic Quarter",
          "description": "Developed between 1898 and 1955 by the Evkaf Administration, Samanbahçe represents the first planned social housing estate built in Cyprus. The compact neighborhood comprises continuous terraces of single-storey, honey-hued sandstone cottages organized along clean geometric lanes, shaded by bougainvillea. At the quarter's heart sits a central domed fountain where residents historically gathered, offering visitors an intimate look at vernacular domestic urban planning.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Ekim–Mayıs İdeal)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (October–May Ideal)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "lef-museums",
    "slug": "lef-museums",
    "region": "lefkosa",
    "themes": [
      "history"
    ],
    "distance": "3–5 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Girne Kapısı",
      "en": "Kyrenia Gate"
    },
    "heroImage": "/images/route-card-images/museums-and-ottoman-heritage-of-nicosia.jpg",
    "title": {
      "tr": "Müzeler & Osmanlı Mirası",
      "en": "Museums & Ottoman Heritage"
    },
    "subtitle": {
      "tr": "Mevlevi Tekke'den Derviş Paşa Konağı'na, Rüstem Kitabevi'nden Lüzinyan Evi'ne — başkentin katmanlı geçmişine odaklanan bir müze rotası.",
      "en": "From the Mevlevi Tekke to Derviş Pasha Mansion, Rüstem Bookstore to the Lusignan House — a dedicated museum trail uncovering the layered heritage of the capital."
    },
    "intro": {
      "tr": "Mevlevi Tekke'den Derviş Paşa Konağı'na, Rüstem Kitabevi'nden Lüzinyan Evi'ne — başkentin katmanlı geçmişine odaklanan bir müze rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "From the Mevlevi Tekke to Derviş Pasha Mansion, Rüstem Bookstore to the Lusignan House — a dedicated museum trail uncovering the layered heritage of the capital. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Rüstem Kitabevi'nin arka bahçesindeki kafe, yürüyüş arası kahve molası için ideal ve çoğu turistin gözünden kaçar.",
      "en": "The secluded courtyard café tucked behind Rüstem Bookstore is the perfect spot for a tranquil mid-walk coffee break, easily missed by most visitors."
    },
    "proposers": [
      "E.A.",
      "U.S.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Kapısı",
          "description": "Lefkoşa surlarının kuzey ekseninde yer alan Girne Kapısı, 16. yüzyıl Venedik askeri mimarisinin sağlam bir örneğidir. Venediklilerin Porta del Proveditore olarak adlandırdığı kapı, Osmanlı idaresinde eklenen kubbeli üst yapı ve 1930'larda İngilizler tarafından açılan yan yol geçitleriyle kentin modern ulaşımına uyarlanmıştır. Müzeler ve Osmanlı mirası turu için ideal bir toplanma noktası olup, surlar üzerindeki stratejik konumu kentin savunma geçmişine ışık tutar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Mevlevi Tekke Müzesi",
          "description": "Girne Kapısı'nın hemen güneyinde yer alan Mevlevi Tekkesi, 17. yüzyılın başlarında inşa edilmiş adanın en önemli Tasavvuf merkezidir. Semahane, derviş odaları ve tekke şeyhlerine ait türbeleri barındıran yapı günümüzde etnografik bir müze olarak hizmet verir. Müzede derviş giysileri, ney ve kudüm gibi tasavvufi müzik aletleri, el yazması Kur'an nüshaları ve dervişlerin gündelik yaşamını canlandıran mankenler sergilenir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Derviş Paşa Etnografya Müzesi",
          "description": "Tarihi Arabahmet Mahallesi'nde yer alan konak, Kıbrıs'ın ilk Türkçe gazetesi 'Zaman'ın yayıncısı Derviş Paşa'ya aitti. 19. yüzyıl Osmanlı konak mimarisini yansıtan iki katlı yapı, taş zeminli geniş avlusu, ahşap tavan işlemeleri ve tipik cumbasıyla korunmuştur. Müzede dönemin geleneksel ev yaşamını anlatan mutfak eşyaları, dokuma tezgahları, gelin giysileri ve ahşap oymacılığı örnekleri sergilenerek eski Lefkoşa burjuvazisinin gündelik yaşamı aktarılır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Rüstem Kitabevi",
          "description": "1937 yılında Kemal Rüstem tarafından kurulan Rüstem Kitabevi, Kıbrıs'ın en köklü kültür ve edebiyat merkezidir. Tarihi bir Lefkoşa konağında yer alan mekan, nadir Kıbrıs kitapları, antika haritalar, sanat galerisi ve avlu kafesiyle kentin entelektüel buluşma noktasıdır. Ahşap merdivenleri, tavan freskleri ve sakin avlu bahçesi, ziyaretçilere hem edebiyat tarihiyle iç içe bir atmosfer hem de dinlendirici bir mola imkanı sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kumarcılar Hanı",
          "description": "17. yüzyılın sonlarında inşa edilen Kumarcılar Hanı, Asmaaltı Meydanı'nda yer alan ve Büyük Han'a kıyasla daha küçük ölçekli tipik bir Osmanlı şehir içi kervansarayıdır. Özgün adı 'Hımarlar Hanı' (Eşekçiler Hanı) olan yapı, üst katta kemerli revaklara açılan misafir odaları ve zemin kattaki dükkanlardan oluşur. Titiz bir restorasyon sonrasında zanaat dükkanları, antikacılar ve yerel lezzetler sunan kafelerle yeniden kent yaşamına kazandırılmıştır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Lüzinyan Evi",
          "description": "Yenicami Mahallesi'nde yer alan Lüzinyan Evi, 15. yüzyıl Lüzinyan Gotik mimarisinin karakteristik taş işçiliğini ve daha sonraki Osmanlı dönemi ahşap köşk eklemelerini bünyesinde birleştiren nadir bir konuttur. Giriş kapısındaki Lüzinyan kraliyet arması ve sivri kemerli pencereleri yapının aristokratik geçmişini gösterir. Müze evde Orta Çağ ve Osmanlı dönemine ait mobilyalar, giysiler ve günlük kullanım eşyaları sergilenmektedir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Gate",
          "description": "Positioned on the northern perimeter of Nicosia's Venetian walls, the Kyrenia Gate illustrates 16th-century Italian defensive masonry. Engineered as Porta del Proveditore, the gateway features later Ottoman inscriptions and a square masonry guard chamber topped by a dome. Serving as an orienting landmark for cultural explorers entering the walled city, it marks the gateway to the capital's historic dervish lodges, civic museums, and traditional Ottoman quarters.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Mevlevi Tekke Museum",
          "description": "Located just inside the Kyrenia Gate, this early 17th-century complex served as the premier Mevlevi Sufi lodge in Cyprus until the order was dissolved in the mid-20th century. Now curated as a museum, the complex retains its ceremonial whirling hall (semahane), residential dervish quarters, and domed mausoleum containing tombs of former sheikhs. Exhibits showcase musical instruments including reed flutes (ney), illuminated manuscripts, Sufi vestments, and ethnographic dioramas.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Derviş Pasha Ethnography Mansion",
          "description": "Occupying a well-preserved 19th-century mansion in the historic Arabahmet quarter, this museum was once the estate of Derviş Pasha, publisher of Cyprus's first Turkish newspaper. The residence exemplifies late Ottoman domestic architecture with ground-floor stone arcades surrounding a secluded courtyard, leading up to an overhanging timber bay window (cumba). The interior displays period furnishings, bridal costumes, copper kitchenware, and looms depicting daily life in historic Nicosia.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Rüstem Historic Bookstore & Café",
          "description": "Established in 1937 by Kemal Rüstem, this legendary institution is Cyprus's oldest operating bookstore and publisher. Set within a restored historic townhouse, it houses an extensive archive of Cypriot literature, rare antique maps, an upstairs art gallery, and a tranquil courtyard cafe. The venue remains an intellectual salon where literary history, visual arts, and specialty coffee converge in the center of the old city.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kumarcılar Hanı (Gamblers' Inn)",
          "description": "Dating to the late 17th century, the Gamblers' Inn—historically known as the Donkeys' Inn (Hımarlar Hanı)—is an intimate Ottoman urban caravanserai located on Asmaaltı Square. Built on a smaller scale than the nearby Büyük Han, it features two storeys of arched colonnades enclosing a central paved court. Following an extensive restoration, its upper chambers and street-facing shops now host artisan workshops, antique boutiques, and traditional coffeehouses.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lusignan House Museum",
          "description": "Located in the Yenicami neighborhood, the Lusignan House is a rare hybrid residence combining 15th-century French Gothic stone masonry with later Ottoman timber-framed additions. The facade preserves carved stone mouldings and a Gothic entrance portal bearing a medieval coat of arms. Inside, period rooms exhibit Lusignan-era archaeological fragments alongside Ottoman-era costumes, rugs, and decorative furnishings illustrating the layers of the capital's domestic history.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Müze Saatlerine Göre)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Check Museum Hours)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "lef-modern",
    "slug": "lef-modern",
    "region": "lefkosa",
    "themes": [
      "history",
      "food",
      "nightlife"
    ],
    "distance": "15–20 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Klasik Araba Müzesi (YDÜ)",
      "en": "Classic Car Museum (NEU)"
    },
    "heroImage": "/images/route-card-images/modern-nicosia.jpg",
    "title": {
      "tr": "Modern Lefkoşa: Alışveriş, Müze & Gece",
      "en": "Modern Nicosia: Shopping, Museums & Nightlife"
    },
    "subtitle": {
      "tr": "Klasik Araba Müzesi'nden Dereboyu'nun sokak modasına, tarihi konaklardan çağdaş kafe ve barlara — başkentin eski ve yeni yüzü.",
      "en": "From the Classic Car Museum to Dereboyu's street fashion, historic mansions, and contemporary cafés and cocktail bars — experience the dual rhythm of past and present."
    },
    "intro": {
      "tr": "Klasik Araba Müzesi'nden Dereboyu'nun sokak modasına, tarihi konaklardan çağdaş kafe ve barlara — başkentin eski ve yeni yüzü. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "From the Classic Car Museum to Dereboyu's street fashion, historic mansions, and contemporary cafés and cocktail bars — experience the dual rhythm of past and present. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Dereboyu akşam üstü canlanır; gündüz alışveriş, akşam ise kafe-bar atmosferi için ideal. Zahra Sokak gece atmosferinin kalbi.",
      "en": "Dereboyu truly comes alive late in the afternoon; visit for shopping by day and stay for the lively bistro vibe by night. Zahra Street is the buzzing heart of the evening scene."
    },
    "proposers": [
      "A.T.",
      "B.K.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Klasik Araba Müzesi (YDÜ)",
          "description": "Yakın Doğu Üniversitesi kampüsünde yer alan Kıbrıs Araba Müzesi, 19. yüzyılın sonlarından 20. yüzyılın sonlarına uzanan 150'den fazla klasik ve spor araca ev sahipliği yapar. Koleksiyonda 1899 model Crestmobile'dan başlayarak Model T Ford'lar, klasik Jaguar, Mercedes-Benz, Porsche ve nadir Amerikan muscle arabaları sergilenir. Hem otomotiv tarihinin teknik gelişimini hem de dönem modellerinin tasarım estetiğini gözler önüne seren kapsamlı bir koleksiyondur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Dereboyu Caddesi",
          "description": "Resmi adı Mehmet Akif Caddesi olan Dereboyu, modern Lefkoşa'nın ana alışveriş, yeme-içme ve sosyal yaşam merkezidir. Kanlıdere yatağına paralel uzanan bulvar boyunca uluslararası giyim markaları, üçüncü nesil kahveciler, füzyon restoranlar ve akşam saatlerinde canlanan barlar sıralanır. Kentin dinamik genç nüfusunun buluşma noktası olan cadde, günün her saati canlı bir kentsel ritim sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Surlariçi",
          "description": "16. yüzyıldan kalma dairesel Venedik surlarının çevrelediği Surlariçi bölgesi, Lefkoşa'nın tarihi çekirdeğini oluşturur. Dar labirent sokakları, sarı kesme taştan inşa edilmiş cumbalı konakları ve avlulu yapılarıyla modern kentin hareketinden tamamen farklı bir dünya sunar. Son yıllarda yapılan restorasyonlarla açılan tasarım atölyeleri, butik oteller ve sanat mekanlarıyla kültürel bir rönesans yaşamaktadır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Zahra Sokağı",
          "description": "Arabahmet Mahallesi boyunca Venedik surlarının batı yamacı üzerinde uzanan Zahra Sokağı, Lefkoşa'nın en gözde akşam yürüyüş ve gastronomi aksıdır. Bir tarafında tarihi cumbalı taş evler, diğer tarafında ise sur hendeğine bakan açık şehir manzarası uzanır. Canlı müzik yapan modern meyhaneleri, şarap evleri ve açık hava bistrolarıyla gün batımından gece geç saatlere kadar başkentin sosyal nabzını tutar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Mooi Cafe",
          "description": "Dereboyu'nun hareketli sokak dokusu içerisinde yer alan Mooi Cafe, çağdaş iç mekan tasarımı ve zengin menüsüyle öne çıkan popüler bir buluşma noktasıdır. Nitelikli kahve çeşitleri, taze pastane ürünleri, kahvaltı tabakları ve hafif öğle yemekleriyle hem dinlendirici bir kahve molası hem de açık hava terasında şehir akışını izleme fırsatı sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sedo Ice Cream & Cakes",
          "description": "Lefkoşa'nın modern tatlı kültürünün bilinen adreslerinden biri olan Sedo, özellikle el yapımı dondurmaları, waffle tabakları ve taze pastalarıyla tanınır. Yaz aylarında akşam saatlerinde yerli halkın ve üniversite öğrencilerinin uğrak yeri haline gelen mekan, modern Lefkoşa turunun tatlı ve keyifli bir final durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Classic Car Museum (NEU)",
          "description": "Situated on the Near East University campus, the Cyprus Car Museum features an extensive private collection of over 150 vintage, classic, and sports automobiles spanning from the late 19th century onward. Highlights include an 1899 Crestmobile, iconic Ford Model Ts, and meticulously preserved post-war convertibles from Jaguar, Mercedes-Benz, and Porsche. The museum provides an engaging technological retrospective for motoring enthusiasts visiting the capital.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Dereboyu Avenue",
          "description": "Formally designated as Mehmet Akif Avenue, Dereboyu is the premier commercial and entertainment artery of modern Nicosia. Running parallel to the Pedieos (Kanlıdere) riverbed, this boulevard features international fashion retailers, specialty coffee shops, open-air bistros, and cocktail lounges. As the focal point of the capital's contemporary youth and social culture, it transitions seamlessly from daytime retail into energetic nighttime dining.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Old Walled City Quarter",
          "description": "Enclosed within circular 16th-century Venetian earthwork fortifications with eleven heart-shaped bastions, the walled city represents Nicosia's historic core. Its labyrinthine residential alleyways showcase sandstone townhouses with shuttered bay windows and hidden citrus courtyards. In recent years, adaptive reuse projects have filled the historic quarter with boutique hotels, independent art spaces, and design workshops that bridge heritage with urban creativity.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Zahra Street Promenade",
          "description": "Perched atop the western curtain wall overlooking the municipal moat in the Arabahmet quarter, Zahra Street has evolved into northern Nicosia's most fashionable culinary promenade. Preserved sandstone residences have been repurposed into contemporary mezze taverns, wine bars, and al fresco cocktail lounges. The street offers panoramic views across the dry moat buffer zone, drawing lively crowds from sunset late into the evening.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Mooi Cafe & Bakery",
          "description": "Set along the buzzing Dereboyu commercial avenue, Mooi Cafe is a contemporary establishment popular for its sleek modern aesthetic and diverse menu. Offering specialty brewed coffees, artisan patisserie pastries, and light European-inspired brunch plates, its outdoor seating provides an ideal urban vantage point for a relaxed pause during a tour of modern Nicosia.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sedo Artisan Ice Cream & Desserts",
          "description": "A favored local destination in Lefkoşa for frozen desserts and confectionery, Sedo is best known for its wide selection of artisan gelato, signature cakes, and made-to-order waffles. Popular among local residents and university students particularly on warm evenings, it provides a light and casual dessert stop to conclude an itinerary through the modern districts of the capital.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Akşam & Gece)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Evenings & Nights)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "gir-classic",
    "slug": "kyrenia-heritage-coastal",
    "region": "girne",
    "themes": [
      "history",
      "scenic",
      "coast"
    ],
    "distance": "35–45 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta (kale tırmanışı)",
      "en": "Moderate (kale climbı)"
    },
    "startFinish": {
      "tr": "Girne Limanı",
      "en": "Kyrenia Harbour"
    },
    "heroImage": "/images/routes/kyrenia-loop.jpg",
    "title": {
      "tr": "Girne Klasik: Liman, Kale, Bellapais & St. Hilarion",
      "en": "Classic Kyrenia: Harbour, Castle, Bellapais & St. Hilarion"
    },
    "subtitle": {
      "tr": "Adanın en ikonik rotası: nal biçimli tarihi liman, Haçlı kalesi, Batık Gemi Müzesi, Gotik Bellapais Manastırı ve masalsı St. Hilarion. Dağdan kıyıya bütün Girne bir günde.",
      "en": "The island's most iconic route: the horseshoe-shaped historic harbour, Crusader stronghold, Shipwreck Museum, Gothic Bellapais Abbey, and fairytale St. Hilarion. The essence of Kyrenia from peak to shoreline in one day."
    },
    "intro": {
      "tr": "Adanın en ikonik rotası: nal biçimli tarihi liman, Haçlı kalesi, Batık Gemi Müzesi, Gotik Bellapais Manastırı ve masalsı St. Hilarion. Dağdan kıyıya bütün Girne bir günde. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "The island's most iconic route: the horseshoe-shaped historic harbour, Crusader stronghold, Shipwreck Museum, Gothic Bellapais Abbey, and fairytale St. Hilarion. The essence of Kyrenia from peak to shoreline in one day. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "St. Hilarion'a sabah erken çıkın — sıcak basmadan tırmanış çok daha keyifli ve Kraliçe'nin Penceresi'nden manzara sissizken en berrak.",
      "en": "Ascend to St. Hilarion early in the morning — the climb is far cooler and more pleasant before the midday heat, and the panorama through Queen Eleanor's Window is at its clearest."
    },
    "proposers": [
      "H.G.",
      "A.T.",
      "B.S.",
      "B.K.",
      "F.Y.",
      "E.P.",
      "T.C.",
      "V.R.",
      "E.A.",
      "M.U.",
      "K.A.",
      "M.M.",
      "D.O.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Limanı",
          "description": "Nal biçimindeki mimarisiyle Akdeniz'in en fotojenik tarihi limanlarından biri olan Girne Limanı, geçmişte keçiboynuzu ve zeytin ticaretinin kalbi olan eski taş ambarlarla çevrilidir. Günümüzde bu binalar deniz mahsulü restoranlarına ve kafelere dönüştürülmüştür. Ahşap guletlerin demirlediği rıhtım boyunca yapılan yürüyüşler, masmavi deniz ve hemen yanı başında yükselen Girne Kalesi'nin surlarıyla birleşerek kentin simge atmosferini oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Girne Kalesi",
          "description": "Limanın doğu ucunu koruyan kale, kökleri 7. yüzyıl Bizans dönemine dayanan, Lüzinyanlar tarafından genişletilip 16. yüzyılda Venediklilerce topçu savunmasına uygun kalın dairesel burçlarla güçlendirilen anıtsal bir savunma yapısıdır. Geniş iç avlusunda Bizans dönemine ait St. George Şapeli, Lüzinyan zindanları ve Venedik kuleleri yer alır. Kale surları boyunca yürüyen ziyaretçiler, limanın ve Beşparmak Dağları'nın panoramik manzarasını izleyebilir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Batık Gemi Müzesi",
          "description": "Girne Kalesi'nin içinde yer alan müze, MÖ 3. yüzyılda (yaklaşık MÖ 300) Girne açıklarında batan ve 1967 yılında denizden çıkarılan ticari bir Helenistik gemiyi barındırır. Dünyada sergilenen en eski deniz batıklarından biri olan geminin Halep çamından yapılmış omurgasının yanı sıra kargo bölümünden çıkarılan yüzlerce Rodos amforası, badem çuvalları ve değirmen taşları da bu özel salonda korunmaktadır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Bellapais Köyü & Manastırı",
          "description": "Beşparmak Dağları'nın eteklerinde yer alan Bellapais Manastırı (Abbaye de la Paix), 13. yüzyılda Lüzinyan Kralı I. Hugh tarafından kurulan bir Fransız Augustinus manastırıdır. Gotik mimarinin Akdeniz'deki en seçkin örneklerinden biri kabul edilen yapının yemekhanesi (refectorium), zarif kemerli revakları ve servi ağaçlarıyla çevrili avlusu büyüleyicidir. İngiliz yazar Lawrence Durrell'in 'Kıbrıs'ın Acı Limonları' kitabını yazdığı köy, dar taş sokaklarıyla huzurlu bir atmosfere sahiptir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "St. Hilarion Kalesi",
          "description": "Deniz seviyesinden 732 metre yükseklikte sarp kayalıklar üzerine inşa edilen St. Hilarion, Beşparmak Dağları'nı koruyan üç kardeş kaleden en batıdakidir. Bizans döneminde keşiş Hilarion'un inziva yeri olarak başlayan yerleşim, Lüzinyanlar döneminde kraliyet ailesinin yazlık sarayı ve savunma kalesi haline getirilmiştir. Taş basamaklarla tırmanılan üst kaledeki Gotik oymalı Kraliçe Penceresi, tüm Girne kıyı şeridini kuşbakışı gören efsanevi bir seyir noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Beşparmak Manzara Noktası",
          "description": "Girne-Lefkoşa dağ geçidi üzerinde veya Beşparmak sırtında yer alan seyir noktası, adanın kuzey sahilini ve güneydeki Mesarya Ovası'nı aynı anda görme fırsatı verir. Karstik kireçtaşı dorukların çam ormanlarıyla buluştuğu bu yüksek yamaçlar, özellikle gün batımında Akdeniz'in üzerindeki ışık kırılmalarını ve kıyı şeridini fotoğraflamak isteyenler için popüler bir duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Old Venetian Harbour",
          "description": "Kyrenia Harbour is a crescent-shaped Mediterranean port bordered by former 19th-century carob warehouses that now operate as waterfront seafood taverns and cafes. Anchored with traditional wooden gulets and fishing skiffs, the cobblestone quay affords picturesque views of the water and the sheer stone bastions of Kyrenia Castle. It remains the visual and historical centerpiece of coastal Northern Cyprus.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Kyrenia Castle",
          "description": "Guarding the eastern entrance to the harbor, Kyrenia Castle is a massive fortress originating in the Byzantine era that was extensively fortified by the Lusignans and later re-engineered by the Venetians in the 16th century with broad circular gun towers. Within its expansive stone perimeter lie the 12th-century Byzantine Chapel of Saint George, royal living quarters, and ramparts offering sweeping 360-degree vistas across the harbour and the Kyrenia Mountains.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ancient Shipwreck Museum",
          "description": "Housed within an environmentally regulated chamber inside Kyrenia Castle, the Shipwreck Museum preserves the timbers of a Hellenistic merchant vessel that foundered around 300 BC and was salvaged in 1967. As one of the oldest trade vessels ever retrieved from the sea, its Aleppo pine hull is displayed alongside an inventory of over 400 Rhodian wine amphorae, preserved almonds, and basalt millstones carried aboard.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Bellapais Village & Abbey",
          "description": "Perched on the lower slopes of the Kyrenia Mountains in the hillside village of Bellapais, this 13th-century monastery—the Abbey of Peace—is a masterpiece of French Gothic architecture built for the Canons Regular of Premontre. Visitors can explore the soaring ribbed vaulting of the monastic refectory and the peaceful arcaded cloister shaded by tall cypresses. The adjacent village was immortalized by author Lawrence Durrell in his memoir 'Bitter Lemons'.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "St. Hilarion Castle",
          "description": "Dramatically integrated into the limestone crags 732 meters above the coastline, Saint Hilarion Castle originated as a 10th-century Byzantine hermitage and monastery before the Lusignans converted it into an unassailable mountain fortress and royal summer retreat. A climb past royal barracks leads to the uppermost bailey, where the renowned Queen's Window with its delicate Gothic tracery frames sheer views over the coastal plain of Kyrenia.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Five Finger Mountain Viewpoint",
          "description": "Located along the mountain pass traversing the Kyrenia Range, this scenic viewpoint offers dramatic vistas stretching across the northern Mediterranean coastline to the north and the arid Mesaoria Plain to the south. Flanked by craggy limestone outcrops and fragrant pine woods, it provides a quiet panoramic stop to photograph the rugged geography defining the island's northern territory.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Kasım (İlkbahar & Sonbahar)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–November (Spring & Autumn)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "gir-coastal",
    "slug": "gir-coastal",
    "region": "girne",
    "themes": [
      "coast",
      "scenic"
    ],
    "distance": "45–60 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Lapta Sahil Yürüyüş Yolu",
      "en": "Lapta Coastal Boardwalk"
    },
    "heroImage": "/images/route-card-images/kyrenia-coastline.jpeg",
    "title": {
      "tr": "Girne Sahil Şeridi & Gizli Plajlar",
      "en": "Kyrenia Coastline & Secret Beaches"
    },
    "subtitle": {
      "tr": "Girne'den batıya uzanan sahil yolu boyunca altın plajlar, seyir noktaları ve saklı koylar; Alagadi kaplumbağa plajından Lapta yürüyüş yoluna. Nisan–Ekim arası ideal.",
      "en": "Golden sandy stretches, coastal view terraces, and hidden coves west of Kyrenia; from Alagadi Turtle Beach to the breezy Lapta coastal boardwalk. Best enjoyed from April to October."
    },
    "intro": {
      "tr": "Girne'den batıya uzanan sahil yolu boyunca altın plajlar, seyir noktaları ve saklı koylar; Alagadi kaplumbağa plajından Lapta yürüyüş yoluna. Nisan–Ekim arası ideal. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Golden sandy stretches, coastal view terraces, and hidden coves west of Kyrenia; from Alagadi Turtle Beach to the breezy Lapta coastal boardwalk. Best enjoyed from April to October. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Yazın yol kenarındaki meyve tezgahlarında taze incir ve frenk inciri satılır — molada mutlaka deneyin.",
      "en": "During summer, local roadside fruit stalls sell freshly picked sweet figs and prickly pears — be sure to pull over and try some."
    },
    "proposers": [
      "B.S.",
      "A.M.",
      "A.T.",
      "D.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Lapta Sahil Yürüyüş Yolu",
          "description": "Lapta kıyısı boyunca uzanan yaklaşık 3 kilometrelik ahşap ve taş sahil yürüyüş yolu, araç trafiğinden uzak, kesintisiz bir deniz kenarı rotası sunar. Kayalık kıyı şeridini takip eden parkur boyunca deniz feneri, balıkçı barınakları, dinlenme bankları ve yerel kafeler bulunur. Özellikle sabah erken yürüyüşleri veya akşam serinliğinde gün batımını seyretmek için Girne bölgesinin en sevilen sahil yürüyüş parkurudur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Escape Beach",
          "description": "Alsancak mevkiinde yer alan Escape Beach (Çıkarma Plajı), 1974 Barış Harekatı'nın ilk çıkarma noktası olması sebebiyle tarihi bir öneme sahiptir. Korunaklı hilal biçimli koyu, ince altın sarısı kumu ve dalgasız berrak sularıyla bölgenin en popüler organize yüzme plajıdır. Donanımlı plaj kulüpleri, su sporları merkezleri ve çim dinlenme alanlarıyla tatilcilere konforlu bir deniz günü sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Karaoğlanoğlu Kıyısı",
          "description": "Girne'nin batı girişinde yer alan Karaoğlanoğlu kıyısı, balıkçı teknelerinin demirlediği küçük doğal limanı, taş mendireği ve kıyı boyunca uzanan geleneksel balık restoranlarıyla bilinir. Bölgede bulunan Barış ve Özgürlük Müzesi ile askeri şehitlik, sahil şeridine tarihi bir derinlik katar. Sakin dalga sesleri eşliğinde kıyı kahvelerinde oturmak ve taze balık yemek için tercih edilen samimi bir duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Alagadi Kaplumbağa Plajı",
          "description": "Girne'nin doğusunda koruma altındaki Özel Çevre Koruma Bölgesi'nde yer alan Alagadi, Akdeniz'in nesli tükenmekte olan Yeşil Deniz Kaplumbağası (Chelonia mydas) ve İribaş Deniz Kaplumbağası (Caretta caretta) için hayati bir yuvalama alanıdır. Doğal kum tepeleri ve sığ sularıyla dikkat çeken plajda yaz gecelerinde uzman biyologlar eşliğinde kontrollü kaplumbağa gözlem turları düzenlenir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gizli Yüzme Koyları",
          "description": "Girne ile Esentepe arasındaki sahil yolu boyunca uzanan falezlerin arasına saklanmış küçük çakıllı ve kumlu koylar, kalabalıklardan uzaklaşmak isteyenler için doğal yüzme alanları sunar. Tesisleşmenin olmadığı bu bakir koylarda kristal berraklığındaki sularda şnorkelle dalış yapabilir, Akdeniz'in doğal kıyı ekosistemini ve su altı kayalıklarını keşfedebilirsiniz.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Esentepe Seyir Noktaları",
          "description": "Beşparmak Dağları'nın denize dik indiği Esentepe yamaçlarında yer alan bu seyir terasları, Akdeniz'in sonsuz maviliğini yüksek bir perspektiften gözler önüne serer. Çam ağaçları ve zeytinliklerle kaplı yamaçların arasından kıvrılan yol boyunca yerel kahvehaneler bulunur. Berrak günlerde karşı kıyıdaki Toros Dağları'nın silüetini görmek dahi mümkündür.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Lapta Coastal Boardwalk Promenade",
          "description": "Tracing the coastline west of Kyrenia, the Lapta Coastal Walkway is a pedestrian timber and paved boardwalk stretching roughly three kilometers along rocky sea inlets. Designed without motorized access, the trail links scenic coves, a small lighthouse, and local beachfront cafes. It is a premier location in the region for morning jogging or relaxed sunset walks accompanied by the sound of breaking waves.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Escape Beach",
          "description": "Situated in Alsancak, Escape Beach holds historic resonance as the primary landing beach of the 1974 Turkish peace operation, commemorated nearby by an open-air memorial. Today, the sheltered golden-sand cove features shallow turquoise water and full beach-club infrastructure, offering paddleboarding, jet ski rentals, and manicured sunbathing lawns protected from open-sea swell.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Karaoğlanoğlu Shoreline",
          "description": "Located just west of central Kyrenia, the Karaoğlanoğlu coastline features a sheltered inlet where small local fishing boats anchor beside stone sea jetties. The area hosts waterfront fish taverns renowned for seasonal meze, as well as the Peace and Freedom Memorial Museum and Military Cemetery. Its tranquil shoreline makes it a favored spot for quiet seaside lunches away from major tourist hubs.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Alagadi Turtle Beach",
          "description": "Situated within a specially protected environmental zone east of Kyrenia, Alagadi Beach is one of the Mediterranean's most vital nesting grounds for green turtles (Chelonia mydas) and loggerhead turtles (Caretta caretta). Comprising two undeveloped sand bays framed by soft rock formations, it is managed in partnership with conservation groups who coordinate guided night-time hatchling monitoring tours during summer months.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Hidden Swimming Coves",
          "description": "Tucked beneath coastal cliffs between Kyrenia and Esentepe lie several secluded swimming inlets accessible via unpaved tracks. Free of commercial development and beach bars, these quiet rocky coves boast exceptionally transparent waters ideal for snorkeling, where marine life congregates around underwater limestone shelves and natural sea arches.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Esentepe Panoramic Viewpoints",
          "description": "Positioned along the elevated coastal slopes near the village of Esentepe, these vantage points provide panoramic vistas where the pine-clad Kyrenia Mountains tumble directly into the Mediterranean Sea. The high vantage point offers exceptional wide-angle photography of the eastern Kyrenia coastline, occasionally revealing the outline of the Taurus Mountains across the sea on exceptionally clear days.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Yaz & Yüzme)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "May–October (Summer & Swimming)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "gir-sunset",
    "slug": "gir-sunset",
    "region": "girne",
    "themes": [
      "scenic",
      "coast"
    ],
    "distance": "35–50 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Mavi Köşk (Blue House)",
      "en": "Mavi Köşk (Blue House)"
    },
    "heroImage": "/images/route-card-images/kyrenia-sunset.jpg",
    "title": {
      "tr": "Gün Batımı & Fotoğraf Noktaları",
      "en": "Golden Sunset & Panoramic Photo Spots"
    },
    "subtitle": {
      "tr": "Işık ve manzara etrafında kurulu rota: Mavi Köşk, Bellapais terasları, sahil kulüplerinin gün batımı deck'leri ve Instagram'lık sahiller.",
      "en": "An itinerary sculpted around golden light and sweeping views: the enigmatic Mavi Köşk, Bellapais terraced viewpoints, sunset cocktail lounges, and postcard-perfect beaches."
    },
    "intro": {
      "tr": "Işık ve manzara etrafında kurulu rota: Mavi Köşk, Bellapais terasları, sahil kulüplerinin gün batımı deck'leri ve Instagram'lık sahiller. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "An itinerary sculpted around golden light and sweeping views: the enigmatic Mavi Köşk, Bellapais terraced viewpoints, sunset cocktail lounges, and postcard-perfect beaches. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Bellapais terasındaki kafelerde günbatımı için erken gidip masa kapın; manzaralı masalar akşamüstü hızla dolar.",
      "en": "Arrive early to claim an outdoor table at the hillside cafés of Bellapais; front-row tables facing the panoramic coastline fill up fast as twilight sets in."
    },
    "proposers": [
      "E.A.",
      "E.P.",
      "V.R.",
      "A.S.",
      "R.J.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Mavi Köşk (Blue House)",
          "description": "Çamlıbel köyü yakınlarında çam ormanlarıyla kaplı bir tepede yer alan Mavi Köşk, 1957 yılında İtalyan asıllı Rum silah tüccarı ve avukat Byron Pavlides tarafından inşa ettirilmiştir. Dışarıdan görünmeyecek şekilde stratejik olarak konumlandırılan villa; gizli tünelleri, dönemin son derece lüks mimari çözümleri, orijinal İtalyan mobilyaları ve süt banyosu gibi detaylarıyla dikkat çeker. Günümüzde askeri denetim altında rehberli turlarla ziyaret edilen köşk, gizemli tarihiyle ünlüdür.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Bellapais Terası",
          "description": "Bellapais Manastırı'nın yanı başında yer alan teraslar, Girne kenti ve Akdeniz'in üzerine bakan en görkemli seyir alanlarından biridir. Gün batımı saatlerinde Gotik manastır revaklarının arasından süzülen altın rengi ışık, zeytin ağaçlarıyla bezeli yamaçları aydınlatır. Çevredeki kafelerde oturup kahve yudumlayarak denizin ve tarihi dokunun oluşturduğu manzarayı fotoğraflamak için vazgeçilmez bir noktadır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "St. Hilarion Seyir Noktası",
          "description": "St. Hilarion Kalesi'ne çıkan dağ yolu boyunca yer alan cepler ve seyir terasları, Girne kıyı şeridini 700 metre yükseklikten dik bir açıyla izleme olanağı tanır. Akşamüstü güneşinin denize alçaldığı saatlerde kayalık doruklar kızıl renklere bürünür. Kaleye tırmanmadan dahi aracınızı park edip Akdeniz ufkunu ve sahil kasabasını fotoğraflayabileceğiniz en etkileyici yol üstü seyir alanıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Acapulco / Escape Beach Deck",
          "description": "Girne'nin popüler sahil tesislerinde denize doğru uzanan ahşap iskeleler ve gün batımı terasları, deniz seviyesinden gün batımı manzarası sunar. Güneşin doğrudan suya battığı yaz akşamlarında bu teraslar, chill-out müzik eşliğinde serinletici içecekler yudumlamak ve suyun üzerindeki renk yansımalarını kaydetmek için harika bir atmosfer sağlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Camelot Beach",
          "description": "Alsancak bölgesinde korunaklı küçük bir koyda yer alan Camelot Beach, dalgakıranla korunan sakin lagün benzeri yapısı ve denizin içine kadar uzanan ahşap platformlarıyla bilinir. Kayalık burun üzerinde yükselen terası, batı ufkuna kesintisiz bir bakış açısı sunar. Akşam saatlerinde dingin denize yansıyan gün batımı renkleri, burayı romantik bir fotoğraf durağı haline getirir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gün Batımı Noktası",
          "description": "Girne'nin batı sahil şeridinde yer alan Karşıyaka veya Lapta burnu üzerindeki doğal falezler, adanın batı ufkuna doğrudan bakan doğal bir seyir balkonudur. Hiçbir yapay ışığın ve engelin bulunmadığı bu kayalık kıyıda, güneşin Akdeniz sularında kayboluşunu izlemek ve alacakaranlığın gökyüzünde oluşturduğu kızıllığı fotoğraflamak rotanın en etkileyici kapanış deneyimidir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Mavi Köşk (The Blue House)",
          "description": "Nestled secretly among forested hills near Çamlıbel, the Blue House was constructed in 1957 by Byron Pavlides, an eccentric Greek-Cypriot lawyer and arms dealer. Designed with blind spots concealing it from the road, the villa showcases mid-century luxury, escape tunnels, period Italian furnishings, and unusual architectural details such as a milk bath. Maintained under military auspices, it offers an intriguing window into Cold War-era intrigue.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Bellapais Abbey Terrace",
          "description": "Flanking the 13th-century Gothic abbey in the village of Bellapais, this elevated terrace provides one of the premier panoramic lookouts along the northern coast. As the late afternoon sun casts warm tones across the ancient stone refectory and down through olive groves to Kyrenia town, the spot becomes a sought-after gathering place for photographers and sunset diners.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "St. Hilarion Mountain Viewpoint",
          "description": "Positioned along the winding mountain ascent toward Saint Hilarion Castle, these roadside pull-offs offer dizzying perspectives across the coastal strip from over 700 meters above sea level. In late afternoon, the crags of the Kyrenia Range are bathed in rich golden light, framing dramatic wide-angle views of the coastline without requiring the full summit hike.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Acapulco / Escape Beach Deck",
          "description": "These wooden pier structures and sun decks extending over the water at Kyrenia's established beach clubs offer front-row seats for coastal sunsets. As dusk settles over the calm northern waters, visitors gather along the timber boardwalks to enjoy chilled drinks, ambient music, and colorful shoreline light reflections.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Camelot Beach",
          "description": "Tucked into a protected cove near Alsancak, Camelot Beach features a sheltered inlet protected by breakwaters alongside wooden decks perched directly over clear shallows. Its westward-facing rocky outcrop offers an uninterrupted sightline to the setting sun, making it a peaceful coastal pause for evening photography and relaxed seaside dining.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Panoramic Sunset Point",
          "description": "Situated on the open coastal bluffs near Lapta and Karşıyaka, this natural viewpoint offers an unobstructed westward vista directly over open waters. Stripped of commercial development, it is a favored local spot to watch the sun sink beneath the Mediterranean horizon as the sky shifts from vivid amber to deep twilight violet.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Yaz Gün Batımları)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Summer Sunsets)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "gir-nightlife",
    "slug": "gir-nightlife",
    "region": "girne",
    "themes": [
      "nightlife",
      "food",
      "coast"
    ],
    "distance": "15–25 km",
    "duration": {
      "tr": "Öğleden akşama",
      "en": "Afternoon to night"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Escape Beach Club",
      "en": "Escape Beach Club"
    },
    "heroImage": "/images/route-card-images/kyrenia-glamour.jpg",
    "title": {
      "tr": "Girne Eğlence & Gece Hayatı",
      "en": "Kyrenia Glamour & Nightlife"
    },
    "subtitle": {
      "tr": "Sahil kulüpleri, seçkin restoranlar ve gece kulüpleriyle Girne'nin lüks ve enerjik yüzü. Gündüz plaj, akşam DJ.",
      "en": "Vibrant beach clubs, fine waterfront dining, and chic open-air night lounges showcasing the energetic and glamorous side of Kyrenia. Sun-drenched lounging by day, DJ beats by night."
    },
    "intro": {
      "tr": "Sahil kulüpleri, seçkin restoranlar ve gece kulüpleriyle Girne'nin lüks ve enerjik yüzü. Gündüz plaj, akşam DJ. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Vibrant beach clubs, fine waterfront dining, and chic open-air night lounges showcasing the energetic and glamorous side of Kyrenia. Sun-drenched lounging by day, DJ beats by night. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sahil kulüplerinde şezlong için hafta sonu rezervasyon şart; akşam Sky Lounge'ın panoramik terası en iyi manzarayı verir.",
      "en": "Sunbed reservations at premier beach clubs are essential on weekends. Later in the evening, the panoramic terrace at Sky Lounge serves up the finest cocktail views over the bay."
    },
    "proposers": [
      "E.A.",
      "R.J.",
      "A.K.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Escape Beach Club",
          "description": "Alsancak'ın korunaklı koyunda yer alan Escape Beach Club, gündüzden geceye uzanan canlı plaj atmosferiyle tanınır. Konforlu şezlongları, VIP locaları, açık hava barı ve gün boyu çalan dinamik DJ performanslarıyla eğlence odaklı bir deniz deneyimi sunar. Akşamüstü 'sunset party' etkinlikleriyle başlayan hareketlilik, rotanın enerjik başlangıç noktasını oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "The House / Marina",
          "description": "Girne Turizm Limanı veya yeni marina aksında yer alan The House Lounge, modern Akdeniz mimarisi ve deniz kenarındaki açık hava terasıyla kentin seçkin gastronomi ve kokteyl mekanlarından biridir. Lüks yatların ve liman ışıklarının eşlik ettiği ortam, akşam yemeği öncesinde gün batımı kokteylleri ve dinlendirici sohbetler için şık bir ambiyans sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Eziç Restaurant",
          "description": "Kıbrıs'ın en bilinen yerli restoran zincirlerinden olan Eziç (Eziç Premier / Peanuts), Girne kıyısında modern Kıbrıs lezzetleri ve deniz mahsulleri sunar. Tavuk spesiyalleri, taze meze çeşitleri ve kaliteli servisiyle hem yerli halkın hem de turistlerin vazgeçilmez akşam yemeği duraklarından biridir. Denize sıfır terasları gece eğlencesi öncesinde doyurucu bir ziyafet sağlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sky Lounge Bar",
          "description": "Girne'nin lüks otellerinin çatı katlarında yer alan Sky Lounge Bar, kenti, tarihi kaleyi ve limanı 360 derecelik panoramik bir açıyla gören eşsiz bir konuma sahiptir. Seçkin kokteyl menüsü, modern lounge müziği ve ışıl ışıl parlayan Girne gece manzarasıyla akşamı karşılamak için kentin en sofistike noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Cage / La Nouba Club",
          "description": "Doğu Akdeniz'in en büyük ve en prestijli açık hava gece kulüpleri arasında yer alan Cage Club ve La Nouba, Girne gece hayatının zirvesini temsil eder. Yaz sezonunda uluslararası üne sahip DJ'leri, tematik sahne dans gösterilerini, etkileyici ışık ve lazer şovlarını ağırlayan mekanlar, sabahın ilk ışıklarına kadar süren enerjik bir dans deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Escape Beach Club",
          "description": "Located in Alsancak, Escape Beach Club is a premier daytime beach club destination combining a sheltered cove with high-energy coastal entertainment. Featuring VIP cabanas, an open-air cocktail bar, and resident DJs who set the tempo from afternoon lounge beats to lively sunset parties, it serves as the launching pad for Girne's summer entertainment circuit.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "The House Garden & Marina Lounge",
          "description": "Positioned by the Kyrenia waterfront marina area, The House offers sophisticated coastal dining with a breezy sea-facing lounge deck. Overlooking docked motor yachts and the open water, this polished venue is a favorite for pre-dinner aperitifs, signature cocktails, and Mediterranean fusion small plates in an upscale social setting.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Eziç Premier Restaurant",
          "description": "A celebrated local culinary brand in Northern Cyprus, Eziç (such as Eziç Premier and Peanuts) delivers a dependable, high-quality dining experience along the Kyrenia coastline. Known for signature poultry dishes, fresh local mezes, and sea-view outdoor terraces, it is an essential dining stop for socializing and savoring local hospitality before heading into the nightlife.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sky Lounge Panoramic Rooftop",
          "description": "Perched on the rooftop of a luxury resort in central Kyrenia, Sky Lounge Bar provides an elevated 360-degree viewpoint over the illuminated harbor, historic castle, and mountain backdrop. Featuring an extensive mixology menu and chilled ambient soundscapes, it offers a sophisticated vantage point for twilight cocktails high above the town.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cage / La Nouba Club",
          "description": "Representing the height of Kyrenia's summer nightlife, open-air superclubs like Cage Club and La Nouba draw international partygoers to the northern coast. Equipped with state-of-the-art sound systems, theatrical lighting, acrobatic stage performances, and sets by global electronic music DJs, they keep the open-air dancefloors moving until the early morning hours.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Yaz Sezonu)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "May–October (Summer Peak)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "gir-lapta",
    "slug": "gir-lapta",
    "region": "girne",
    "themes": [
      "nature",
      "history",
      "coast"
    ],
    "distance": "25–35 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Lapta Eski Köy",
      "en": "Lapta Old Village"
    },
    "heroImage": "/images/route-card-images/lapta-mountain.jpg",
    "title": {
      "tr": "Lapta Pınarları, Eski Köy & Sahil Yürüyüşü",
      "en": "Lapta Springs, Historic Village & Coastal Walk"
    },
    "subtitle": {
      "tr": "Tarihi üst köy, geleneksel su kaynakları ve Girne'nin batısındaki uzun sahil yürüyüş yolunu birleştiren sakin bir rota.",
      "en": "A peaceful route connecting the historic upper village, cool freshwater springs, and the expansive coastal walking promenade west of Kyrenia."
    },
    "intro": {
      "tr": "Tarihi üst köy, geleneksel su kaynakları ve Girne'nin batısındaki uzun sahil yürüyüş yolunu birleştiren sakin bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A peaceful route connecting the historic upper village, cool freshwater springs, and the expansive coastal walking promenade west of Kyrenia. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Az bilinen bir rota — köyün üst kısmındaki tarihi su kanalları serin ve gölgeli, yaz sıcağında ideal bir mola.",
      "en": "An off-the-beaten-path delight — the centuries-old stone aqueducts in the upper village remain wonderfully cool and shaded, offering an idyllic respite from the summer sun."
    },
    "proposers": [
      "C.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Lapta Eski Köy",
          "description": "Antik Lapethos kentinin mirası üzerinde, Beşparmak Dağları'nın dik yamaçlarına kurulu Lapta Yukarı Köyü; narenciye ağaçları, asmalar ve incir bahçeleriyle çevrili dar taş sokaklara sahiptir. Venedik ve Osmanlı dönemlerinden kalma taş evleri, tarihi kiliseleri ve gür su kaynaklarıyla beslenen yeşil dokusuyla, kıyıdaki modern turizm yapılarından çok farklı ve otantik bir köy yaşamı sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Başpınar",
          "description": "Lapta'nın dağ yamacında, çınar ve ceviz ağaçlarının gölgesinde yer alan Başpınar, dağın kalbinden fışkıran buz gibi kaynak sularıyla ünlüdür. Tarih boyunca Lapta'nın tüm değirmenlerini ve bereketli bahçelerini besleyen bu ana pınar, çevresindeki geleneksel köy kahveleri ve dinlenme alanlarıyla yaz aylarında serin bir sığınak sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tarihi Lapta Su Kanalları",
          "description": "Başpınar kaynağından çıkan suyu köyün teraslanmış bahçelerine, zeytinliklerine ve tarihi un değirmenlerine taşıyan açık taş su kanalları (arklar), yüzlerce yıllık bir hidrolik mühendislik mirasıdır. Kanalları takip eden gölgeli patikalarda yürürken suyun şırıltısını dinleyebilir, geleneksel Kıbrıs tarımının su paylaşım kültürüne tanıklık edebilirsiniz.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Lapta Sahil Yürüyüş Yolu",
          "description": "Dağ yamaçlarındaki su kaynaklarından kıyıya inildiğinde ulaşılan Lapta Sahil Yürüyüş Yolu, yaklaşık 3 kilometre uzunluğundaki ahşap güvertesi ve taş döşemesiyle denizle iç içe bir yürüyüş parkurudur. Dalgaların dövdüğü kayalık burunları ve doğal koyları aşan rota, ferahlatıcı deniz esintisiyle yürüyüşçülere ve koşuculara keyifli anlar yaşatır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Karşıyaka Gün Batımı Kıyısı",
          "description": "Lapta'nın hemen batısında yer alan Karşıyaka (Vasilia) kıyısı, balıkçı barınağı ve batıya açık geniş çakıllı sahiliyle günün yorgunluğunu atmak için mükemmel bir noktadır. Güneşin denize alçalarak Akdeniz ufkunu kızıla boyadığı akşam saatlerinde, yerel balık lokantalarında taze meze eşliğinde sessizliğin ve manzaranın tadı çıkarılır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Lapta Upper Historic Village",
          "description": "Perched on the steep terraced foothills of the Kyrenia Range, the upper village of Lapta (ancient Lapethos) is celebrated for its lush gardens of citrus, figs, and walnut trees. Its narrow, winding lanes feature historic stone masonry residences, Greek Orthodox churches, and Ottoman-era fountains fed by perennial mountain springs, offering a quiet glimpse of rural Cypriot life away from the coastline.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Başpınar Natural Spring",
          "description": "Nestled beneath plane trees high up in upper Lapta, Başpınar (Head Spring) is the principal freshwater karst source that has supplied irrigation to the settlement for centuries. The cold mountain water emerges here before flowing into stone channels, making this shaded spring area and its quiet local cafes a cool retreat during hot summer afternoons.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Historic Lapta Stone Aqueducts",
          "description": "Distributing spring water from the mountain sources across terraced orchards and historic flour mill foundations, Lapta's open stone aqueducts and irrigation ditches illustrate traditional rural water management. Following these quiet streams along walking paths reveals stone arches, abandoned waterwheels, and fragrant gardens sustained by centuries of shared irrigation rights.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lapta Coastal Boardwalk Promenade",
          "description": "Transitioning from the foothills down to the sea, this dedicated coastal path extends for roughly three kilometers along the Mediterranean shore. Elevated timber boardwalk sections and paved paths wind past limestone shelves, sea coves, and waterside gazebos, creating a popular setting for refreshing strolls alongside the surf.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Karşıyaka Sunset Coast",
          "description": "Situated just west of Lapta, the coastline of Karşıyaka (historically Vasilia) features a working boat shelter and an open pebble beach looking west across the sea. Unobstructed by dense hotel developments, it is a favored destination for travelers seeking peaceful sundown vistas and fresh fish dinners at modest local taverns right by the water.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Kasım (İlkbahar–Sonbahar)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–November (Spring–Autumn)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "mag-walledcity",
    "slug": "famagusta-history-loop",
    "region": "magusa",
    "themes": [
      "history"
    ],
    "distance": "3–5 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta (yürüyüş)",
      "en": "Moderate (walk)"
    },
    "startFinish": {
      "tr": "Akkule (Land Gate)",
      "en": "Land Gate (Akkule)"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Surlariçi & Ortaçağ Mirası",
      "en": "Walled City & Medieval Heritage"
    },
    "subtitle": {
      "tr": "Ayakta duran Venedik surları, Gotik Lala Mustafa Paşa Camii, Othello Kalesi ve Namık Kemal Zindanı. Tarihseverler için zengin bir rota.",
      "en": "Mighty Venetian defensive bastions, the soaring Gothic Lala Mustafa Pasha Mosque, historic Othello Castle, and Namık Kemal Dungeon. A treasure trove for history lovers."
    },
    "intro": {
      "tr": "Ayakta duran Venedik surları, Gotik Lala Mustafa Paşa Camii, Othello Kalesi ve Namık Kemal Zindanı. Tarihseverler için zengin bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Mighty Venetian defensive bastions, the soaring Gothic Lala Mustafa Pasha Mosque, historic Othello Castle, and Namık Kemal Dungeon. A treasure trove for history lovers. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Petek Pastanesi surlariçinin kalbinde; geleneksel Kıbrıs tatlıları için tarihi turun ortasında mola verin.",
      "en": "Petek Patisserie sits right in the heart of the walled town; stop by mid-tour to sample authentic Cypriot syrup pastries and homemade dondurma."
    },
    "proposers": [
      "H.G.",
      "B.K.",
      "T.C.",
      "K.A.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Akkule (Land Gate)",
          "description": "Gazimağusa surlarının güneybatı köşesinde yer alan Akkule (Porta di Terra veya Ravelin), Venedikliler tarafından 1490'lı yıllardan itibaren topçu saldırılarına karşı inşa edilmiş devasa bir savunma tabyasıdır. Kuru hendek üzerindeki köprüsü, tonozlu yeraltı dehlizleri ve mazgallarıyla 1571 yılındaki Osmanlı kuşatmasının en şiddetli çatışmalarına sahne olmuştur. Surlariçi bölgesine giriş için en görkemli kapı olup kentin savunma dehasını yansıtır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Lala Mustafa Paşa Camii",
          "description": "1298–1312 yılları arasında Fransız Gotik üslubunda inşa edilen ve Lüzinyan krallarının Kudüs Krallığı tacını giydiği tarihi Aziz Nikolaos Katedrali'dir. Üç görkemli portalı, taş oyma gül penceresi ve havada asılı gibi duran payandalarıyla Reims Katedrali'nin Akdeniz'deki ikizi olarak anılır. 1571 yılında Osmanlılar tarafından camiye dönüştürülmüş ve kuzey kulesine bir minare eklenmiştir; önünde 700 yılı aşkın tarihi bir cümbez ağacı yükselir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Venedik Sarayı Kalıntıları",
          "description": "Lala Mustafa Paşa Camii'nin tam karşısındaki meydanda yer alan Palazzo del Proveditore, 13. yüzyılda Lüzinyan kraliyet sarayı olarak yapılmış, 16. yüzyılda ise Venedik valisinin ikametgahı haline getirilmiştir. Günümüze Salamis harabelerinden getirilen sütunlarla inşa edilmiş anıtsal üç kemerli giriş cephesi ve geniş iç avlusu ulaşmıştır. Avluda kuşatmadan kalan gülleler ve Osmanlı dönemi kalıntıları sergilenmektedir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Namık Kemal Zindanı",
          "description": "Venedik Sarayı'nın avlusunda yer alan iki katlı taş bina, Osmanlı edebiyatının ve düşünce dünyasının öncülerinden şair Namık Kemal'in 'Vatan yahut Silistre' oyunu sonrasında 1873-1876 yılları arasında sürgünde tutulduğu yerdir. Zemin katı zindan, üst katı ise şairin kaldığı oda olan yapı günümüzde müze olarak düzenlenmiştir. İçinde Namık Kemal'e ait büst, belgeler ve eserlerinin ilk baskıları sergilenir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Othello Kalesi",
          "description": "14. yüzyılda Lüzinyanlar tarafından limanı korumak için inşa edilen ve 1492 yılında Venedikli kaptan Nicolo Foscarini tarafından dönüştürülen müstahkem iç kaledir. Giriş kapısının üzerinde Venedik'in simgesi olan mermer St. Mark Aslanı kabartması yer alır. Shakespeare'in ünlü trajedisine adını veren kale; devasa yemekhanesi, topçu kuleleri ve limana hakim teraslarıyla Akdeniz askeri mimarisinin başyapıtlarındandır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Canbulat Müzesi",
          "description": "Gazimağusa surlarının güneydoğu ucundaki Arsenal (Cephanelik) Burcu'nda yer alan türbe ve müze, 1571 kuşatmasında büyük kahramanlık gösteren Kilis Sancakbeyi Canbulat Bey'in anısına yapılmıştır. Efsaneye göre Venediklilerin çarklı kılıç mekanizmasını vücuduyla durdurarak surların aşılmasını sağlayan Canbulat Bey'in kabrinin yer aldığı tabyada, Osmanlı dönemi silahları, zırhları ve etnografik savaş gereçleri sergilenir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Şehir Surları",
          "description": "Gazimağusa'yı yaklaşık 3 kilometre boyunca çevreleyen Venedik surları, 15 metreye varan yükseklikleri ve 8 metreyi aşan kalınlıklarıyla dünyanın en iyi korunmuş Rönesans dönemi topçu tahkimatları arasındadır. Dışarıdaki derin kuru hendek ve hendek boyunca uzanan Martínengo gibi yıldız tabyalar, askeri mimarlık tarihinin zirvesini temsil eder. Surların üzerinde yürüyerek hem kentin tarihi silüeti hem de liman seyredilebilir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Land Gate (Porta del Provveditore)",
          "description": "Anchoring the southwestern angle of Famagusta's fortifications, the Land Gate—known as the Ravelin or Akkule—is a formidable Renaissance bastion engineered by Venetian military architects from the 1490s onward. Protected by a deep dry moat and accessed via an arched stone bridge, this subterranean complex witnessed fierce fighting during the 1571 Ottoman siege. It remains the most monumental pedestrian entry into the old walled city.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Lala Mustafa Pasha Mosque (St. Nicholas Cathedral)",
          "description": "Constructed between 1298 and 1312, this French High Gothic monument was originally the Cathedral of Saint Nicholas, where Lusignan monarchs received the ceremonial crown of the Kingdom of Jerusalem. Renowned for its triple gabled portals, delicate rose window, and flying buttresses reminiscent of Reims Cathedral, it was converted into Famagusta's principal mosque in 1571 with the addition of a minaret. A colossal ficus sycomorus tree planted during construction still thrives at its entrance.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Venetian Palace (Palazzo del Provveditore)",
          "description": "Situated directly across the central square from the cathedral, the Palazzo del Proveditore was originally the 13th-century Lusignan royal residence before being rebuilt as the Venetian governor's administrative palace in the 16th century. Its surviving facade features a classical triple-arched stone portico supported by salvaged marble columns from ancient Salamis. The inner courtyard displays siege cannonballs, stone armorial crests, and Ottoman architectural fragments.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Namık Kemal Dungeon & Museum",
          "description": "Adjoining the courtyard of the Venetian Palace, this two-storey stone building served as the prison for acclaimed Ottoman reformist poet and playwright Namık Kemal between 1873 and 1876, following the controversial performance of his patriotic play 'Vatan Yahut Silistre'. Now conserved as a memorial museum, the ground-floor vaulted cell and upper living quarters display original documents, photographs, and period editions of his works.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Othello Castle",
          "description": "Constructed as a Lusignan harbor redoubt in the 14th century and modernized in 1492 by Venetian engineer Nicolo Foscarini, this fortified sea citadel guards Famagusta's port. Above its heavy portal sits a carved marble Lion of Saint Mark. Traditionally associated with the setting of Shakespeare's tragic play 'Othello', the fortress preserves a grand vaulted Great Hall, gun platforms, and elevated battlements overlooking the maritime docks.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Canbulat Bastion & Museum",
          "description": "Housed within the Arsenal Bastion at the southeastern extremity of the seaward walls, this tomb and museum commemorates Ottoman Bey Canbulat, who fell during the breach of the city defenses during the 1571 siege. Revered in local folklore for disabling the defenders' spiked wheel machinery, his preserved domed resting place is surrounded by historic military artifacts, Ottoman halberds, cuirasses, and Ottoman-era ethnographic displays.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Venetian Bastions & City Walls",
          "description": "Encircling the historic perimeter of Famagusta for over three kilometers, these 16th-century Venetian stone battlements rank among the finest surviving Renaissance artillery fortifications in Europe. Reaching heights of 15 meters and widths exceeding 8 meters, the defensive circuit incorporates arrow-headed bastions such as the Martinengo Bastion and a massive rock-hewn dry moat. Walking atop the ramparts yields panoramic views over the medieval quarter and harbor.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Sonbahar & Kış İdeal)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Fall & Winter Ideal)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "mag-salamis",
    "slug": "mag-salamis",
    "region": "magusa",
    "themes": [
      "history",
      "coast"
    ],
    "distance": "25–35 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Salamis Harabeleri",
      "en": "Salamis Ruins"
    },
    "heroImage": "/images/route-card-images/ancient-salamis.jpg",
    "title": {
      "tr": "Salamis Antik Kenti & St. Barnabas",
      "en": "Ancient Salamis & St. Barnabas Monastery"
    },
    "subtitle": {
      "tr": "Roma jimnazyumu, tiyatrosu ve bazilikasıyla adanın en önemli antik kenti, ardından St. Barnabas Manastırı, Kral Mezarları ve Glapsides plajı.",
      "en": "Discover the island's grandest classical city with its Roman gymnasium, amphitheatre, and seaside colonnades, paired with St. Barnabas Monastery, Royal Tombs, and Glapsides Beach."
    },
    "intro": {
      "tr": "Roma jimnazyumu, tiyatrosu ve bazilikasıyla adanın en önemli antik kenti, ardından St. Barnabas Manastırı, Kral Mezarları ve Glapsides plajı. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Discover the island's grandest classical city with its Roman gymnasium, amphitheatre, and seaside colonnades, paired with St. Barnabas Monastery, Royal Tombs, and Glapsides Beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Salamis'te gölge neredeyse yok — sabah gidin. Saat 11'den sonra taşların üzerindeki sıcak bunaltıcı olur.",
      "en": "There is virtually no natural shade across the sprawling ruins of Salamis — visit early in the morning. After 11:00 AM, the exposed marble and stone get blistering hot."
    },
    "proposers": [
      "U.S.",
      "A.T.",
      "B.S.",
      "F.Y.",
      "M.U.",
      "D.O.",
      "K.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Salamis Harabeleri",
          "description": "MÖ 11. yüzyılda Truva Savaşı kahramanı Teukros tarafından kurulduğu rivayet edilen Salamis, Helenistik ve Roma dönemlerinde Kıbrıs'ın en zengin başkentidir. Geniş arkeolojik alanda mermer sütunlu palaestra, zemin mozaikleriyle süslü Roma hamamları (thermae), latrina ve su kemerleri yer alır. Sahil kenarında okaliptüs ve akasya ağaçlarıyla çevrili kalıntılar, Doğu Akdeniz'in en etkileyici antik yerleşimlerinden birini oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Roma Tiyatrosu",
          "description": "Salamis harabelerinin merkezinde yükselen antik Roma tiyatrosu, MS 1. yüzyılda Augustus döneminde inşa edilmiş ve yaklaşık 15.000 seyirci kapasitesiyle adanın en büyük antik gösteri yapısıdır. 50 basamaktan oluşan yarım daire biçimli caveası, orkestra alanı ve sahne binası temelleri günümüze ulaşmıştır. Zaman zaman kültürel etkinliklere ve konserlere ev sahipliği yapan yapı, antik dünyanın akustik ve mimari dehasını sergiler.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "St. Barnabas Manastırı & İkon Müzesi",
          "description": "Hristiyanlığı Kıbrıs'a getiren ve Salamis doğumlu olan Havari Barnabas'ın mezarı üzerine 5. yüzyılda inşa edilen ve 18. yüzyılda bugünkü halini alan bir manastır kompleksidir. Manastır kilisesi günümüzde zengin bir Ortodoks ikon müzesine ev sahipliği yaparken, keşiş odaları Neolitik Çağ'dan Roma dönemine uzanan Kıbrıs arkeoloji koleksiyonunu sergiler. Avlunun biraz ilerisinde Havari Barnabas'ın yeraltı mezar şapeli bulunur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kral Mezarları",
          "description": "Salamis ile Enkomi arasında geniş bir nekropol alanına yayılan Kral Mezarları, MÖ 8. ve 7. yüzyıllara (Arkaik Dönem) tarihlenen anıtsal mezar odalarıdır. Ölen soylularla birlikte kurban edilen atların iskeletleri, tunç koşum takımları ve tören arabalarının kalıntıları bu mezarlarda bulunmuştur. Geniş dromos (giriş rampası) geçitleri ve taş tonozlu mezar odaları, Homeros dönemi ölü gömme geleneklerini somut biçimde yansıtır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Glapsides Plajı",
          "description": "Salamis antik kentinin hemen güneyinde uzanan Glapsides Plajı, kilometrelerce uzanan ince kumu ve sığ, kristal berraklığındaki deniziyle Gazimağusa bölgesinin en gözde doğal plajıdır. Rüzgar sörfü ve su sporları için ideal koşullar sunan koy, arkeolojik gezilerin ardından yüzmek, serinlemek ve sahil kafelerinde dinlenmek için mükemmel bir mola noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Ancient Salamis Archaeological Park",
          "description": "Reputedly founded in the 11th century BC by the Trojan War hero Teucer, Salamis developed into the foremost city-kingdom of ancient Cyprus. The extensive seaside archaeological park preserves monumental Roman remains, including a colonnaded gymnasium, extensive thermal baths lined with geometric mosaics, a public latrine, and Byzantine basilica foundations, all fringed by coastal eucalyptus groves.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Ancient Roman Theatre of Salamis",
          "description": "Dating to the Augustan era in the 1st century AD, the Roman Theatre of Salamis accommodated up to 15,000 spectators, making it the largest classical entertainment structure on the island. While its original upper tiers collapsed during ancient earthquakes, the preserved semicircular cavea, central orchestra, and marble stage foundations provide exceptional acoustic quality and still host open-air performances.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "St. Barnabas Monastery & Icon Museum",
          "description": "Erected in the 5th century and rebuilt in the 18th century, this monastic complex marks the traditional burial place of Saint Barnabas, a native of Salamis who introduced Christianity to Cyprus alongside Saint Paul. The main church houses an extensive collection of 18th- to 20th-century Greek Orthodox icons, while adjacent cloister rooms exhibit regional archaeological artifacts. An underground mausoleum marks the apostle's crypt nearby.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Royal Tombs of Salamis",
          "description": "Spanning an expansive Archaic necropolis between Salamis and Enkomi, the Royal Tombs date from the 8th and 7th centuries BC. Notable for their monumental dromos entry ramps and ashlar-stone burial chambers, excavations revealed sacrificial chariot horses, bronze fittings, and ivory furnishings buried with aristocratic rulers, illustrating Homeric funerary practices in the ancient Mediterranean.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Glapsides Sandy Beach",
          "description": "Stretching along the Famagusta coastline just south of Salamis, Glapsides Beach is celebrated for its pale fine sand and exceptionally shallow, calm water. Widely frequented by locals and windsurfers, this broad curved bay features laid-back beach cafes and water sports facilities, providing an ideal seaside stop to swim and relax after exploring the ancient ruins.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Haziran & Eylül–Kasım",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–June & September–November",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "mag-varosha",
    "slug": "mag-varosha",
    "region": "magusa",
    "themes": [
      "history",
      "coast"
    ],
    "distance": "10–15 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Yarım–tam gün"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Kapalı Maraş (Açık Bölgeler)",
      "en": "Varosha (Open Sectors)"
    },
    "heroImage": "/images/route-card-images/varosha-ghost-city.jpg",
    "title": {
      "tr": "Kapalı Maraş & Palm Beach",
      "en": "Varosha & Palm Beach"
    },
    "subtitle": {
      "tr": "Yakın tarihin sessizliğiyle sahil keyfini birleştiren rota: hayalet şehir Maraş'ın açık bölümleri, ardından Palm Beach'te yüzme, yemek ve mola.",
      "en": "A poignant journey combining quiet twentieth-century history with coastal leisure: accessible sectors of the ghost city of Varosha, followed by swimming and seaside dining at Palm Beach."
    },
    "intro": {
      "tr": "Yakın tarihin sessizliğiyle sahil keyfini birleştiren rota: hayalet şehir Maraş'ın açık bölümleri, ardından Palm Beach'te yüzme, yemek ve mola. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A poignant journey combining quiet twentieth-century history with coastal leisure: accessible sectors of the ghost city of Varosha, followed by swimming and seaside dining at Palm Beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Maraş'ta bisiklet kiralama alanları var; açık bölgeleri pedallayarak gezmek yürümekten çok daha rahat. Su ve güneş koruması getirin.",
      "en": "Bicycle rental stations are available at the entrance to Varosha; cruising the paved open boulevards on two wheels is far cooler and more comfortable than walking under the sun. Bring plenty of water."
    },
    "proposers": [
      "B.S.",
      "E.A.",
      "M.M.",
      "K.A.",
      "A.S.",
      "S.A.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Kapalı Maraş (Açık Bölgeler)",
          "description": "1974 öncesinde Akdeniz'in en popüler turizm merkezlerinden biri olan Maraş (Varosha), 1974 olaylarının ardından askeri bölge statüsüne alınarak yerleşime kapatılmıştır. 2020 yılından itibaren belirli caddeleri ve sahil şeridi yayaların ve bisikletlilerin ziyaretine açılmıştır. Demokrasi Caddesi boyunca yürürken terk edilmiş lüks otelleri, bankaları ve dönemin mimarisini dondurulmuş bir zaman kapsülü gibi gözlemlemek mümkündür.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Maraş Sahili",
          "description": "Açılan Maraş bölgesinin kıyısında uzanan sahil şeridi, altın renkli ince kumu ve turkuaz deniziyle adanın en güzel plaj hatlarından biridir. On yıllar boyunca insan müdahalesinden uzak kalarak doğallığını koruyan plaj boyunca yürüyüş parkurları ve ziyaretçiler için temel dinlenme noktaları oluşturulmuştur. Terk edilmiş sahil otellerinin silüeti eşliğinde Akdeniz'in berrak sularını sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Palm Beach",
          "description": "Gazimağusa surlarının hemen güneyinde, Maraş sınırının başladığı noktada yer alan Palm Beach, kentin en simge kumsal plajıdır. Arka planında Maraş'ın ünlü terkedilmiş yüksek otel binaları yükselirken, önünde altın sarısı kumlar ve sığ, dalgasız bir koy uzanır. Bölge hem denize girmek hem de adanın yakın tarihinin en çarpıcı görsel karşıtlıklarına tanıklık etmek için ziyaret edilir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Petek Pastanesi",
          "description": "Gazimağusa Surlariçi'nin girişinde veya Palm Beach güzergahında yer alan Petek Pastanesi, 1976 yılından bu yana hizmet veren bir Kıbrıs lezzet klasiğidir. Geleneksel ceviz macunu, badem ezmesi, su böreği, baklava ve Maraş dondurması gibi lezzetleriyle ünlüdür. Tarihi objeler ve nostaljik dekorasyonla bezeli salonu, gezi arasında tatlı bir mola vermek için kentin vazgeçilmez durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sahil Kafeleri",
          "description": "Palm Beach ve Gazimağusa liman hattı boyunca uzanan sahil kafeleri, deniz esintisi eşliğinde dinlenmek için ideal açık hava mekanlarıdır. Kıbrıs kahvesi, serinletici içecekler ve yerel atıştırmalıklar sunan bu kafeler, hem yerel halkın günlük sohbetlerine tanıklık etmek hem de limana girip çıkan gemileri izlemek için keyifli bir dinlenme imkanı sağlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Varosha (Open Walking Sectors)",
          "description": "Prior to 1974, Varosha (Maraş) stood as one of the Mediterranean's most glamorous resort districts before being evacuated and placed under military exclusion following the 1974 conflict. In late 2020, designated boulevards and coastal strips were opened to pedestrian and bicycle visitors. Walking down avenues such as Demokrasi Caddesi reveals abandoned mid-century hotels, boutiques, and villas standing as an extraordinary modern time capsule.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Varosha Shoreline",
          "description": "Running alongside the opened sectors of Varosha, this coastline boasts fine golden sand and remarkably clean waters that remained virtually untouched by tourism for nearly five decades. Paved boardwalks and monitored swimming sections provide visitors with access to the shore, framed uniquely by the silent silhouettes of modernist 1970s beachfront hotels.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Palm Beach & Famagusta Bay",
          "description": "Directly abutting the perimeter fence of Varosha just south of Famagusta's sea bastions, Palm Beach is a celebrated local sandy bay. Characterized by calm turquoise waters and fine golden sand, it offers a stark visual juxtaposition between traditional beach leisure and the abandoned high-rise resort architecture towering immediately along its southern edge.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Petek Traditional Patisserie",
          "description": "Operating since 1976 near the walled city gates, Petek Confectionery is an iconic culinary institution in Famagusta. Renowned for traditional Cypriot sweets, artisan walnut preserves (macun), pistachio baklava, savoury pastries, and Turkish ice cream, its multi-level salon adorned with local antiques offers a quintessential heritage refreshment stop.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Seaside Promenade Cafés",
          "description": "Clustered near Palm Beach and along the coastal esplanade, these seaside cafes provide relaxed outdoor seating overlooking the Mediterranean Sea. Serving traditional Cypriot coffee, fresh juices, and light meze snacks, they offer an unhurried setting to take in the sea breeze and reflect after a walking tour of the nearby historic quarters.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Deniz İçin Yaz)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Summer for Beach)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "mag-enkomi",
    "slug": "mag-enkomi",
    "region": "magusa",
    "themes": [
      "history",
      "nature"
    ],
    "distance": "35–45 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Enkomi Antik Kenti",
      "en": "Enkomi Archaeological Site"
    },
    "heroImage": "/images/route-card-images/enkomi.jpg",
    "title": {
      "tr": "Enkomi Bronz Çağı & Kırsal Mağusa",
      "en": "Enkomi Bronze Age & Rural Famagusta"
    },
    "subtitle": {
      "tr": "Adanın Bronz Çağı kalıntılarını — Enkomi antik kentini — ziyaret edip sakin kırsal manzaralarla tamamlanan az bilinen bir arkeoloji rotası.",
      "en": "A lesser-known archaeological route stepping back into the late Bronze Age at ancient Enkomi, rounded out by tranquil rural countryside landscapes."
    },
    "intro": {
      "tr": "Adanın Bronz Çağı kalıntılarını — Enkomi antik kentini — ziyaret edip sakin kırsal manzaralarla tamamlanan az bilinen bir arkeoloji rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A lesser-known archaeological route stepping back into the late Bronze Age at ancient Enkomi, rounded out by tranquil rural countryside landscapes. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Enkomi'yi çoğu ziyaretçi atlar — turist otobüsü yok, antik kenti neredeyse tek başınıza gezersiniz.",
      "en": "Enkomi is largely overlooked by mainstream tour buses — you will likely have this fascinating prehistoric site almost entirely to yourself."
    },
    "proposers": [
      "A.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Enkomi Antik Kenti",
          "description": "Geç Tunç Çağı'nda (yaklaşık MÖ 17. yüzyıl – MÖ 11. yüzyıl) Doğu Akdeniz'in en önemli bakır ticaret merkezi ve liman kenti olan Enkomi (Alasia), Kıbrıs arkeolojisinin kilit noktasıdır. Düzenli ızgara kent planı, Kiklopik taş savunma duvarları, metal işleme atölyeleri ve 'Boynuzlu Tanrı' heykelciğinin bulunduğu tapınak alanlarıyla bilinir. Pedieos (Kanlıdere) nehrinin alüvyonlarıyla limanını kaybetmesi sonucu terk edilmiş ve yerini Salamis'e bırakmıştır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Mağusa Kırsal Yolu",
          "description": "Tuzla (Enkomi) köyünden Mesarya Ovası'nın doğu ucuna kıvrılan kırsal güzergah, zeytinlikler, kuru tarım arazileri ve geleneksel taş ağıllarla çevrilidir. Turistik kalabalıklardan uzak olan bu güzergah, adanın kadim tarım geçmişini ve pastoral sessizliğini hissetmek isteyenler için dinlendirici bir sürüş deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Eski Nehir Yatağı Manzarası",
          "description": "Antik çağlarda Trodos Dağları'ndan doğup Enkomi yakınlarında denize dökülen Kanlıdere'nin (Pedieos) tarihi alüvyon deltası, bölgenin jeolojik kaderini belirlemiştir. Nehrin taşıdığı miller antik limanı doldurarak Enkomi'nin terk edilmesine yol açmıştır. Bugün sazlıklar ve alçak tepelerle çevrili bu sakin vadi, antik coğrafyanın dönüşümünü gözlemlemek için benzersiz bir doğal duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tuzla Köy Kafesi",
          "description": "Enkomi harabelerinin hemen yanında yer alan Tuzla köyünün merkezindeki geleneksel kahvehane, dut ve asma ağaçlarının gölgesinde yer alır. Köy sakinlerinin tavla oynayıp sohbet ettiği bu samimi mekan, taze demlenmiş Türk kahvesi veya adaçayı eşliğinde arkeolojik yürüyüş sonrası dinlenmek için otantik bir yerel mola noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gazimağusa Surlarına Yaklaşım",
          "description": "Kırsal alandan kente dönerken Akkule ve Canbulat tabyalarına doğru uzanan yaklaşım yolu, Venedik surlarının anıtsal ölçeğini dışarıdan ve kuru hendek seviyesinden görme imkanı tanır. Sarı kesme taştan örülen surların ova düzlüğünden nasıl yükseldiğini gözler önüne seren bu nokta, kırsal sakinlikten Orta Çağ kentine geçişi simgeler.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Ancient Enkomi Bronze Age Site",
          "description": "Flourishing during the Late Bronze Age (c. 17th to 11th century BC), Enkomi—identified with ancient Alashiya—was the premier industrial and maritime hub for copper export across the Eastern Mediterranean. Archaeological excavations uncovered a sophisticated urban grid, Cyclopean stone defensive walls, metal-smelting quarters, and sanctuaries that yielded iconic bronze votive masterpieces such as the Horned God before river silting prompted its relocation to Salamis.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Famagusta Countryside Trail",
          "description": "Winding inland from Tuzla village through the eastern edge of the Mesaoria plain, this rural backroad traverses tranquil olive orchards, wheat fields, and dry-stone livestock enclosures. Untouched by heavy tourist transit, it offers an unhurried countryside drive that highlights Cyprus's pastoral agrarian heartland.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ancient Riverbed Valley Vista",
          "description": "This scenic landscape marks the ancient alluvial delta of the Pedieos (Kanlıdere) river, which originally flowed from the Troodos Mountains into the sea near Enkomi. Over centuries, heavy silt deposits gradually landlocked Enkomi's Bronze Age harbour, altering regional topography. Surrounded by wild tamarisks and low ridges, it offers insight into the geological forces that reshaped ancient Cyprus.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Tuzla Historic Village Café",
          "description": "Situated in the rustic village of Tuzla (adjacent to the Enkomi site), the traditional village coffee shop sits beneath the shade of mature mulberry trees and grape trellises. Frequented by local farmers playing backgammon, it provides an unpretentious setting to enjoy freshly brewed Cypriot coffee and herbal infusions after exploring the ruins.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Famagusta City Walls Approach",
          "description": "Approaching Famagusta from the rural northwest reveals the formidable scale of the Venetian fortifications rising abruptly from the plain. Viewing the sandstone curtains and angled bastions across the open dry moat allows visitors to appreciate the strategic perimeter engineering before re-entering the historic gates of the walled city.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Mayıs & Ekim–Kasım",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–May & October–November",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "isk-longbeach",
    "slug": "isk-longbeach",
    "region": "iskele",
    "themes": [
      "coast",
      "history"
    ],
    "distance": "25–40 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "İskele Arkeoloji Müzesi",
      "en": "İskele Archaeology Museum"
    },
    "heroImage": "/images/route-card-images/iskele-golden-sands.jpg",
    "title": {
      "tr": "İskele Sahil & Miras Rotası",
      "en": "İskele Coastline & Heritage Trail"
    },
    "subtitle": {
      "tr": "Altın kumlu Long Beach, Boğaz balıkçı limanı, arkeoloji ve ikon müzeleri. Doğal güzellikle kültürel mirasın dengeli birleşimi.",
      "en": "Golden sands of Long Beach, the scenic fishing harbour of Boğaz, archaeology exhibits, and historic icon museums. A harmonious blend of seaside relaxation and cultural discovery."
    },
    "intro": {
      "tr": "Altın kumlu Long Beach, Boğaz balıkçı limanı, arkeoloji ve ikon müzeleri. Doğal güzellikle kültürel mirasın dengeli birleşimi. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Golden sands of Long Beach, the scenic fishing harbour of Boğaz, archaeology exhibits, and historic icon museums. A harmonious blend of seaside relaxation and cultural discovery. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Boğaz Limanı'nda öğleden sonra balıkçılar taze tuttukları balığı doğrudan satar; akşam yemeği için buradan alınabilir.",
      "en": "At Boğaz Harbour in the afternoon, local fishing boats pull up with their daily catch; you can buy fish right off the dock or enjoy it freshly grilled at the waterside taverns."
    },
    "proposers": [
      "A.T.",
      "B.S.",
      "M.M.",
      "D.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "İskele Arkeoloji Müzesi",
          "description": "İskele kent merkezinde yer alan müze, bölgede yürütülen arkeolojik kazılarda ortaya çıkarılan zengin Neolitik, Tunç Çağı, Geometrik ve Roma dönemlerine ait eserleri sergiler. Pişmiş toprak kaplar, heykeller ve mezar buluntuları, İskele ve Karpaz yarımadasının binlerce yıllık yerleşim tarihine ışık tutar. Bölgenin geçmişine dair derli toplu ve aydınlatıcı bir kültür durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Panayia Theotokos İkon Müzesi",
          "description": "İskele'nin kalbinde yer alan 12. yüzyıl Bizans yapısı kilise, tek nefli kubbeli mimarisi ve daha sonra 15. yüzyılda eklenen yan nefiyle dikkat çeker. İç duvarlarında yer alan orijinal 12. ve 15. yüzyıl fresk kalıntıları ile adanın dört bir yanından toplanan tarihi Ortodoks ikonaları burada sergilenmektedir. Kıbrıs dini sanatının ve fresk işçiliğinin önemli örneklerindendir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Long Beach (Altınkum)",
          "description": "İskele sahil şeridi boyunca kilometrelerce uzanan Long Beach, ince kumlu plajı, sığ ve berrak denizi ile bölgenin en popüler sahil aksıdır. Sahil boyunca uzanan palmiyeli yürüyüş ve bisiklet yolları, çocuk oyun parkları, açık hava spor alanları ve modern sahil kafeleriyle gün boyu deniz ve güneş keyfi sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Boğaz Balıkçı Limanı",
          "description": "İskele'nin kuzeyinde yer alan Boğaz, renkli balıkçı teknelerinin demirlediği doğal bir liman koyudur. Rıhtım boyunca sıralanan geleneksel balık restoranları, günlük tutulan taze balıkları ve Kıbrıs usulü sıcak mezeleriyle ünlüdür. Sakin deniz manzarası eşliğinde öğle veya akşam yemeği yemek için bölgenin en bilinen gastronomi durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kalecik Halk Plajı",
          "description": "Boğaz'ın hemen yakınında yer alan Kalecik Plajı, sakin ve huzurlu ortamıyla bilinen doğal bir kumsaldır. Kalabalıklardan uzak, berrak sularda yüzmek ve dinlenmek isteyenler için ideal olan sahil, İskele rotasının denizle iç içe, dinlendirici kapanış noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "İskele Archaeology Museum",
          "description": "Located in the center of İskele (Trikomo), this regional museum showcases archaeological discoveries unearthed across the Karpas Peninsula. The curated collection features Neolithic stone tools, Bronze Age ceramics, Geometric-period terracottas, and Roman glassware, offering a chronological overview of early settlements in eastern Cyprus.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Panagia Theotokos Icon Museum",
          "description": "Dating to the 12th century, this domed Byzantine church in central İskele preserves rare fragments of medieval wall paintings in its apse and nave. Expanded in the 15th century with a Gothic-influenced northern aisle, the interior functions as an ecclesiastical museum housing restored wooden icons, ecclesiastical vessels, and liturgical artifacts from regional chapels.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Long Beach Coastline",
          "description": "Stretching along the İskele coastline, Long Beach is renowned for its expansive golden-sand shoreline and gentle, shallow waters. A landscaped promenade running parallel to the beach features dedicated cycling lanes, pedestrian boardwalks, green parks, and open-air cafes, making it a vibrant center for family leisure and water activities.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Boğaz Fishing Harbour",
          "description": "Situated north of İskele, Boğaz is an authentic coastal fishing village arranged around a sheltered natural boat basin. Celebrated for its waterfront seafood taverns lining the quayside, it is one of the island's best-known destinations to sample freshly caught seasonal fish, grilled octopus, and classic Mediterranean meze beside docked wooden trawlers.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kalecik Public Beach",
          "description": "Located just north of the Boğaz fishing harbor, Kalecik Public Beach is a relaxed sandy strip favored by those seeking a quieter swimming environment away from major resort crowds. Its clean water and tranquil setting provide an unhurried coastal finale to the İskele heritage itinerary.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Yaz Sezonu)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "May–October (Summer Season)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "isk-kantara",
    "slug": "isk-kantara",
    "region": "iskele",
    "themes": [
      "history",
      "nature",
      "scenic"
    ],
    "distance": "55–75 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Kantara Kalesi",
      "en": "Kantara Castle"
    },
    "heroImage": "/images/route-card-images/kantara.jpg",
    "title": {
      "tr": "Kantara Kalesi & Doğu Panoraması",
      "en": "Kantara Castle & Eastern Panorama"
    },
    "subtitle": {
      "tr": "Adanın en doğudaki dağ kalesinden ormanlara, kırsal köylere ve sessiz kıyıya uzanan manzara rotası. Buffavento ile birleştirilebilen çoklu kale seçeneği de mevcut.",
      "en": "A scenic mountain drive taking you to the easternmost peak stronghold, overlooking pine forests, traditional hamlets, and unspoiled coastline. Can also be paired with Buffavento."
    },
    "intro": {
      "tr": "Adanın en doğudaki dağ kalesinden ormanlara, kırsal köylere ve sessiz kıyıya uzanan manzara rotası. Buffavento ile birleştirilebilen çoklu kale seçeneği de mevcut. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A scenic mountain drive taking you to the easternmost peak stronghold, overlooking pine forests, traditional hamlets, and unspoiled coastline. Can also be paired with Buffavento. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Kantara üç dağ kalesinin en iyi korunmuşu ve en doğudakidir; açık havada hem kuzey hem güney sahilleri aynı anda görünür.",
      "en": "Kantara is both the most accessible and best preserved of the three Crusader mountain fortresses; on a clear day, both the northern and southern coastlines are visible simultaneously from the battlements."
    },
    "proposers": [
      "A.T.",
      "C.A.",
      "O.O.",
      "T.C.",
      "B.K.",
      "E.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Kantara Kalesi",
          "description": "Deniz seviyesinden 630 metre yükseklikte yer alan Kantara Kalesi, Beşparmak Dağları'ndaki üç savunma kalesinin en doğuda olanıdır. 10. yüzyılda Bizanslılar tarafından Arap akınlarına karşı gözetleme amacıyla kurulan kale, Lüzinyanlar tarafından genişletilmiştir. Kaleden bakıldığında açık havalarda kuzeyde Akdeniz, güneyde Mağusa Körfezi ve doğuya doğru uzanan Karpaz Yarımadası aynı anda 360 derecelik eşsiz bir panoramayla izlenebilir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Kantara Köyü",
          "description": "Kalenin hemen eteklerinde, çam ormanlarıyla çevrili serin bir yayla köyü olan Kantara, tarihi bir dağ dinlenme yeridir. Lüzinyan döneminden beri temiz havası ve manzarasıyla bilinen köyde, eski yazlık taş konutlar ve yerel kahvehaneler yer alır. Yaz sıcaklarından kaçmak ve dağ havasında çay molası vermek için ideal bir duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Mersinlik Ormanı",
          "description": "Kantara sırtlarından kuzey sahiline inen dağ yolu boyunca uzanan Mersinlik Ormanı, kızılçam, servi ve mersin ağaçlarıyla kaplı zengin bir bitki örtüsüne sahiptir. Yaban çiçekleri ve endemik türlerin yetiştiği bu bakir ormanlık alan, doğa yürüyüşü ve fotoğrafçılık için adanın en huzurlu doğal koridorlarından biridir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kaplıca Sahili",
          "description": "Kuzey sahilinde, dağların denizle buluştuğu noktada yer alan Kaplıca Koyu, geniş kumsal plajı ve arkasındaki dik yamaç manzarasıyla dikkat çeker. Doğal ve sakin yapısını koruyan koy, dağ tırmanışının ardından denize girmek ve sahil restoranında taze balık yemek için harika bir duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tatlısu Kıyısı",
          "description": "Girne ile Karpaz arasındaki sahil şeridinde yer alan Tatlısu kıyıları; kayalık burunları, antik zeytinlikleri ve kristal sularıyla bilinir. Bölgedeki Minia Kıbrıs açık hava müzesi ve kıyı yürüyüş yolları, gün batımına doğru rotayı tamamlayan keyifli bir seyir noktası oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kantara Castle",
          "description": "Perched at an elevation of 630 meters at the eastern terminus of the Kyrenia Range, Kantara Castle originated as a 10th-century Byzantine watchpost against naval incursions before being heavily fortified by the Lusignans. Its preserved barbican, vaulted barracks, and northern watchtowers command an extraordinary dual-coastline panorama, simultaneously capturing the Karpas Peninsula, Famagusta Bay, and the open northern sea.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Kantara Mountain Village",
          "description": "Sheltered beneath pine-clad ridges below the fortress, the mountain hamlet of Kantara has long functioned as a tranquil summer retreat favored for its brisk elevation and pine-scented air. Comprising rustic stone houses and small family-run tea houses, it offers a peaceful pause for travelers transitioning between the mountain peaks and coastal lowlands.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Mersinlik Pine Woods",
          "description": "Stretching across the northern mountain slopes below Kantara, the Mersinlik forest reserve encompasses dense canopies of Calabrian pine, wild cypress, and fragrant myrtle shrubs. Intersected by quiet forestry tracks and hiking trails, it harbors native bird species and seasonal wild orchids, providing a secluded haven for nature walks.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kaplıca Coastal Bay",
          "description": "Located on the northern coast where the Kantara foothills descend into the sea, Kaplıca Bay offers a wide natural sandy beach set against dramatic coastal cliffs. Uncrowded and protected from heavy swell, the bay features clear waters for swimming alongside simple beachfront taverns serving fresh catch of the day.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Tatlısu Coastal Road",
          "description": "Bordering the transitional coast between Kyrenia and the Karpas, the Tatlısu shoreline is framed by sea cliffs, historic carob stores, and ancient olive groves. Home to cultural sites like the Minia Kıbrıs open-air model park, the area offers scenic coastal viewpoints that capture the evening light across the Mediterranean.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Mayıs & Eylül–Kasım",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–May & September–November",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "isk-bafra",
    "slug": "isk-bafra",
    "region": "iskele",
    "themes": [
      "food",
      "nature",
      "coast"
    ],
    "distance": "50–70 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Mehmetçik Köyü",
      "en": "Mehmetçik Village"
    },
    "heroImage": "/images/route-card-images/bogaz-harbor.jpg",
    "title": {
      "tr": "Mehmetçik Bağları, Bafra & Boğaz Kıyısı",
      "en": "Mehmetçik Vineyards, Bafra Coast & Boğaz"
    },
    "subtitle": {
      "tr": "Köy hayatı ve üzüm bağı manzaralarından Bafra sahiline ve Boğaz balıkçı limanına uzanan sakin, gastronomik bir gün. Kimsenin listesine girmeyen bir bölge.",
      "en": "A peaceful culinary road trip wandering through heritage grape-growing villages, vineyard landscapes, pristine Bafra sands, and charming Boğaz harbour. A serene slice of Cyprus often missed by travelers."
    },
    "intro": {
      "tr": "Köy hayatı ve üzüm bağı manzaralarından Bafra sahiline ve Boğaz balıkçı limanına uzanan sakin, gastronomik bir gün. Kimsenin listesine girmeyen bir bölge. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A peaceful culinary road trip wandering through heritage grape-growing villages, vineyard landscapes, pristine Bafra sands, and charming Boğaz harbour. A serene slice of Cyprus often missed by travelers. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Bölge küçük aile şarap üreticileriyle dolu; acele etmeyin ve uzun bir öğle yemeği için plan yapın.",
      "en": "The region is dotted with small artisanal grape and wine growers; take your time and plan for an unhurried, multi-course village lunch."
    },
    "proposers": [
      "C.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Mehmetçik Köyü",
          "description": "Karpaz Yarımadası'nın girişinde tepeye kurulu Mehmetçik (Galatia), geleneksel taş evleri, sakin köy meydanı ve köklü bağcılık kültürüyle tanınır. Kıbrıs'ın 'cittaslow' (sakin şehir) felsefesini benimseyen yerleşimlerinden biri olup, yerel zivaniya, üzüm sucuğu (köfter) ve pekmez üretimiyle adanın gastronomi mirasını canlı tutar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Mehmetçik Festival Meydanı",
          "description": "Her yıl geleneksel Üzüm Festivali'ne ev sahipliği yapan köy meydanı, yerel üreticilerin el yapımı ürünlerini sergilediği kültürel bir merkezdir. Çevresindeki asırlık kahvehaneler ve kooperatif dükkanları, köy halkıyla sohbet etmek ve taze üzüm ürünlerini tatmak için harika bir buluşma noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Üzüm Bağı Manzarası",
          "description": "Mehmetçik ve Kumyalı çevresindeki yamaçlara yayılan teraslanmış üzüm bağları, Akdeniz fonunda pastoral bir kırsal manzara oluşturur. Özellikle hasat dönemi olan sonbahar aylarında bağ bozumu hareketliliği yaşanan bu yollar, doğa fotoğrafçılığı ve kırsal sürüş için eşsiz manzaralar sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Bafra Halk Plajı",
          "description": "Bafra turizm bölgesinde yer alan halk plajı; incecik altın kumu, sığ ve dalgasız deniziyle Akdeniz'in en nitelikli doğal kumsallarından biridir. Geniş kıyı şeridi, ahşap yürüme yolları ve temiz sularıyla hem aileler hem de sakin bir deniz günü arayanlar için mükemmel bir yüzme noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Boğaz Balıkçı Limanı",
          "description": "Kırsal bağ rotasının ardından ulaşılan Boğaz Limanı, renkli balıkçı tekneleri ve mendireğiyle bölgenin denizle buluştuğu noktadır. Gün batımında liman kenarındaki restoranlarda taze balık, ızgara ahtapot ve yerel mezeler eşliğinde günü tamamlamak için en uygun gastronomi durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Mehmetçik Traditional Village",
          "description": "Set atop rolling hills overlooking the eastern coast, Mehmetçik (historically Galateia) is a traditional village celebrated for its viticulture and adherence to the Cittaslow movement. Characterized by limestone masonry homes and quiet village streets, it remains a primary regional producer of grape must confections (köfter), molasses, and artisan zivania spirit.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Mehmetçik Village Square",
          "description": "Serving as the civic focal point of the village, this plaza hosts the long-running annual Grape Festival, which brings regional growers together. Bordered by shaded coffee shops and local agricultural cooperatives, it provides travelers with a venue to sample traditional grape delicacies and converse with local residents.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Mehmetçik Vineyard Vista",
          "description": "Spreading across the terraced limestone slopes between Mehmetçik and Kumyalı, these traditional vineyards form a scenic rural landscape against the Mediterranean Sea. The quiet lanes traversing the vines are particularly engaging during the late summer harvest when grapes are collected for artisanal pressing.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Bafra Public Beach",
          "description": "Located in the designated Bafra tourism precinct, this public beach features a broad expanse of fine golden sand and very gentle, crystal-clear water. Maintained with boardwalks and basic amenities, its expansive shoreline offers pristine swimming conditions protected from rough open swells.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Boğaz Fishing Harbour",
          "description": "Serving as the culinary terminus of this agrarian circuit, Boğaz harbor is an active coastal anchorage populated by local fishing skiffs. Lined with seafood taverns along the stone quay, it is the premier local destination to savor grilled Mediterranean fish, local mezes, and evening sea breezes.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Bağ Bozumu & Deniz)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "May–October (Harvest & Beach)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "isk-wetland",
    "slug": "isk-wetland",
    "region": "iskele",
    "themes": [
      "nature",
      "coast"
    ],
    "distance": "25–40 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Boğaz Balıkçı Limanı",
      "en": "Boğaz Fishing Harbour"
    },
    "heroImage": "/images/route-card-images/bogaz-wetlands.jpg",
    "title": {
      "tr": "Boğaz Sulak Alan & Kuş Gözlem",
      "en": "Boğaz Wetlands & Birdwatching Trail"
    },
    "subtitle": {
      "tr": "Boğaz balıkçı limanından başlayıp Gastria sulak alanları ve Kaplıca kıyısını keşfeden, tuz düzlüğü ve kuş gözlem noktalı bir doğa rotası.",
      "en": "Setting off from Boğaz fishing harbour to uncover the Gastria salt flats and Kaplıca shoreline, featuring coastal lagoons and birdwatching observation points."
    },
    "intro": {
      "tr": "Boğaz balıkçı limanından başlayıp Gastria sulak alanları ve Kaplıca kıyısını keşfeden, tuz düzlüğü ve kuş gözlem noktalı bir doğa rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Setting off from Boğaz fishing harbour to uncover the Gastria salt flats and Kaplıca shoreline, featuring coastal lagoons and birdwatching observation points. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sabah erken saatler kuş gözlemi için en verimli; dürbün getirmeyi unutmayın. Kıyı ve sulak alan kuş çeşitliliği açısından zengindir.",
      "en": "Early morning is the most rewarding window for birdwatching; do not forget to bring binoculars. The shallow marshlands attract a diverse variety of migratory waterfowl."
    },
    "proposers": [
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Boğaz Balıkçı Limanı",
          "description": "Boğaz, korunaklı koyunda yer alan balıkçı barınağı ve sakin sahil atmosferiyle bu doğa rotasının başlangıç noktasıdır. Sabahın erken saatlerinde balıkçıların dönüşünü izlemek, kıyı boyunca beslenen deniz kuşlarını gözlemlemek ve güne taze bir deniz havasıyla başlamak için ideal bir merkezdir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Gastria Sulak Alanı",
          "description": "Kalecik (Gastria) kalesi yakınlarındaki kıyı düzlüğünde yer alan sulak alan, mevsimsel yağışlarla beslenen lagün yapısıyla göçmen kuşlar için önemli bir mola yeridir. İlkbahar ve sonbahar göç dönemlerinde flamingolar, balıkçıllar, çulluklar ve çeşitli su kuşlarına ev sahipliği yapan bu doğal ekosistem, kuş gözlemcileri ve doğaseverler için eşsiz bir yaşam alanıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kaplıca Sahili",
          "description": "Yarımadanın kuzey kıyısına geçiş noktasında yer alan Kaplıca sahili, kireçtaşı tepelerin denize kavuştuğu bakir bir kıyı şerididir. Doğal kumulları ve denizel bitki örtüsüyle korunan sahil, hem kıyı kuşlarının yuvalama alanı hem de doğayla baş başa yüzmek isteyenler için el değmemiş bir duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tuz Düzlüğü Manzarası",
          "description": "Kıyı arkasındaki alçak havzalarda yer alan mevsimlik tuzcul bataklıklar ve tuz düzlükleri, yazın buharlaşmayla beyaz kristal katmanlara dönüşürken kışın sığ göletler oluşturur. Tuzcul bitki türlerinin (halofitler) yetiştiği bu kendine özgü peyzaj, fotoğraf meraklıları için minimalist ve etkileyici görsel kompozisyonlar sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kıyı Kuş Gözlem Noktası",
          "description": "Mağusa Körfezi'nin kuzey sınırında yer alan bu açık seyir noktası, deniz ile kıyı ekosisteminin kesiştiği stratejik bir gözlem yeridir. Dürbünle yalıçapkınları, karabataklar, martılar ve kıyı yağmurcanlarını doğal ortamlarında izlemek için rota üzerindeki en verimli durağı oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Boğaz Fishing Harbour",
          "description": "Serving as the starting point for this coastal nature loop, Boğaz is an authentic fishing harbor located within a calm bay. Early mornings offer opportunities to watch working fishermen unloading their nets and observe seabirds gathering around the piers before setting out toward regional wetlands.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Gastria Coastal Wetland",
          "description": "Located near historic Kalecik (Gastria), this seasonal coastal wetland is sustained by winter rainfall and tidal lagoons, serving as an important stopover along the Eastern Mediterranean avian flyway. During migration periods, birdwatchers can observe greater flamingos, herons, stilts, and plovers foraging across the shallow salt flats.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kaplıca Coastal Bay",
          "description": "Situated on the northern shore of the peninsula neck, Kaplıca Beach is an open coastal habitat where rocky limestone bluffs meet a wide sandy shore. Preserving native coastal scrub and dune ecosystems, it offers a tranquil natural setting for observing shorebirds and enjoying a swim in uncrowded waters.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Gastria Salt Flats Lookout",
          "description": "Forming in shallow coastal basins behind the shore, these seasonal saline flats glisten with white mineral crusts during dry summer months and fill with brackish pools in winter. Colonized by specialized halophytic flora, this distinct terrain provides compelling minimalist landscapes for landscape photographers.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Coastal Bird Sanctuary Viewpoint",
          "description": "Positioned on an open coastal headland overlooking Famagusta Bay, this natural vantage point offers exceptional visibility over both marine and intertidal habitats. With binoculars, visitors can track species including kingfishers, cormorants, Audouin's gulls, and wading migratory birds feeding along the shoreline.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Kasım–Nisan (Kuş Göç Dönemi)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "November–April (Bird Migration)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "kar-classic",
    "slug": "karpaz-nature-loop",
    "region": "karpaz",
    "themes": [
      "nature",
      "scenic",
      "coast"
    ],
    "distance": "140–170 km",
    "duration": {
      "tr": "Tam gün (uzun sürüş)",
      "en": "Full day (uzun sürüş)"
    },
    "difficulty": {
      "tr": "Kolay (yürüyüş) / Uzun sürüş",
      "en": "Easy (walk) / Uzun sürüş"
    },
    "startFinish": {
      "tr": "Dipkarpaz Köyü",
      "en": "Dipkarpaz Village"
    },
    "heroImage": "/images/routes/karpaz-loop.jpg",
    "title": {
      "tr": "Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas",
      "en": "Classic Karpas: Wild Donkeys, Golden Beach & Apostolos Andreas"
    },
    "subtitle": {
      "tr": "Adanın en doğusuna tam günlük yol yolculuğu: köy hayatı, açık manzaralar, yabani eşekler, kilometrelerce Altınkum ve efsanevi manastır. Karpaz'ın imza rotası.",
      "en": "The signature full-day road trip to the easternmost tip: rustic village life, vast open panoramas, friendly wild donkeys, endless dunes of Golden Beach, and the historic pilgrimage monastery."
    },
    "intro": {
      "tr": "Adanın en doğusuna tam günlük yol yolculuğu: köy hayatı, açık manzaralar, yabani eşekler, kilometrelerce Altınkum ve efsanevi manastır. Karpaz'ın imza rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "The signature full-day road trip to the easternmost tip: rustic village life, vast open panoramas, friendly wild donkeys, endless dunes of Golden Beach, and the historic pilgrimage monastery. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Yabani eşekler yol kenarında yaklaşır ama beslemeyin — yasak ve onlar için zararlı. Uzun sürüş için depoyu Dipkarpaz öncesi doldurun.",
      "en": "The wild donkeys often greet motorists along the park road, but please do not feed them processed human food. Be sure to top up your fuel tank in Dipkarpaz before entering the national park."
    },
    "proposers": [
      "E.A.",
      "H.G.",
      "A.T.",
      "B.K.",
      "F.Y.",
      "E.P.",
      "T.C.",
      "O.O.",
      "M.U.",
      "D.O.",
      "K.A.",
      "A.S.",
      "R.J.",
      "S.A.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Dipkarpaz Köyü",
          "description": "Karpaz Yarımadası'nın en uçtaki büyük yerleşimi olan Dipkarpaz (Rizokarpaso), Kıbrıslı Türk ve Kıbrıslı Rum toplumlarının bir arada yaşamaya devam ettiği ender köylerdendir. Köy meydanındaki tarihi Agios Synesios Kilisesi ve cami, bu çok kültürlü geçmişin simgesidir. Taş evleri, kahvehaneleri ve samimi atmosferiyle milli park bölgesine girmeden önceki son ikmal ve mola noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Karpaz Manzaralı Sürüş",
          "description": "Dipkarpaz köyünden Zafer Burnu'na uzanan asfalt yol boyunca yapılan sürüş, Akdeniz'in en bakir kıyı ve tepe manzaralarını sunar. Yolun iki yanında uzanan ardıç ormanları, makilikler, antik tarım terasları ve her iki taraftan görünen turkuaz deniz, yolculuğu unutulmaz bir yol macerasına dönüştürür.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yabani Eşek Bölgesi",
          "description": "Karpaz Milli Parkı sınırları içinde yaşayan ve adanın simgesi haline gelen serbest dolaşımdaki yabani eşekler (Karpaz eşekleri), yol boyunca ziyaretçileri karşılar. Geçmişte tarımda kullanılan ve zamanla doğaya salınarak vahşileşen bu koruma altındaki hayvanlar, yarımadanın doğal ve bozulmamış faunasının en sevimli parçasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Altınkum (Golden Beach)",
          "description": "Karpaz Yarımadası'nın güney kıyısında kilometrelerce uzanan Altınkum, ince altın sarısı kumu ve kristal berraklığındaki turkuaz deniziyle Akdeniz'in en el değmemiş plajlarındandır. Caretta caretta ve yeşil deniz kaplumbağalarının önemli yuvalama alanlarından olan sahil, devasa kum tepeleri ve yapılaşmasız bakir doğasıyla büyüleyicidir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Ayios Philon Kilisesi",
          "description": "Dipkarpaz'ın kuzey sahilinde, antik Karpasia kentinin kalıntıları üzerinde yükselen 12. yüzyıl Bizans kilisesidir. Helenistik ve Roma dönemi liman mendireğinin hemen yanında yer alan yapının tabanında 5. yüzyıldan kalma renkli mozaikler görülebilir. Denize sıfır konumu ve antik taş bloklarıyla büyüleyici bir tarihi atmosfer sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Apostolos Andreas Manastırı",
          "description": "Yarımadanın en uç noktasında yer alan manastır, Ortodoks Hristiyanlar için Kıbrıs'ın en kutsal hac yeridir. Havari Andreas'ın gemisiyle adaya çıktığı ve kayadan şifalı su fışkırttığı efsanesine dayanan mekan, 19. yüzyıldan kalma görkemli kilisesi ve deniz seviyesindeki 15. yüzyıl ayazmasıyla binlerce hacı ve ziyaretçiyi ağırlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Zafer Burnu",
          "description": "Kıbrıs adasının en doğu ucu olan Zafer Burnu (Cape Apostolos Andreas), kayalık tepeleri ve açıklarındaki Klidhes (Kilit) Adacıkları ile rotanın dramatik zirve noktasıdır. Gönderdeki bayraklar ve deniz fenerinin bulunduğu bu uç nokta, Akdeniz'in enginliğini hissetmek ve günün batımını veya doğuşunu izlemek için adadaki en etkileyici coğrafi mekandır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Dipkarpaz Village",
          "description": "Serving as the principal settlement of the Karpas Peninsula, Dipkarpaz (Rizokarpaso) is one of the few bi-communal villages in Cyprus where Turkish and Greek Cypriot residents continue to live side by side. Anchored by the historic Church of Agios Synesios and the village mosque on the central square, it offers traditional stone cafes and represents the final service stop before entering the national park.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Karpas Scenic Coastal Drive",
          "description": "The scenic drive extending east from Dipkarpaz toward the tip of the peninsula cuts through some of the wildest terrain in Cyprus. Flanked by Phoenician juniper, low scrub, dry-stone pastoral terraces, and dual coastal glimpses of the turquoise Mediterranean to both north and south, the route offers an exceptional coastal road trip experience.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Wild Donkey Nature Reserve",
          "description": "Inhabiting the open expanse of the Karpaz National Park, the peninsula's famous feral donkeys roam freely across scrub-covered hillsides and along the roadway. Descendants of domesticated pack animals released after agricultural mechanization, these protected herds have become celebrated mascots of the eastern wilderness.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Golden Beach Dunes",
          "description": "Stretching for several kilometers along the southern shoreline of the peninsula, Golden Beach (Altınkum) is renowned as one of the finest and least developed sand beaches in the Mediterranean. Framed by towering shifting dunes and rolling surf, the bay provides critical seasonal nesting habitats for both loggerhead and green sea turtles.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ayios Philon Church",
          "description": "Located on the northern coast near Dipkarpaz amidst the ruins of ancient Karpasia, this 12th-century Byzantine domed church was built over a 5th-century Christian basilica. Adjacent to partially submerged Hellenistic harbor moles, the site retains intricate geometric floor mosaics and offers striking views of open northern waters.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Apostolos Andreas Monastery",
          "description": "Situated near the easternmost tip of Cyprus, this historic sanctuary is the island's premier Orthodox pilgrimage site. According to tradition, Saint Andrew landed here and brought forth a miraculous freshwater spring; today, the complex features a 19th-century church, historical pilgrim cloisters, and an underground 15th-century seaside holy water chapel.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cape Apostolos Andreas (Cape Zafer)",
          "description": "Zafer Burnu (Cape Apostolos Andreas) forms the rugged geographical tip of Cyprus, pointing east toward Syria. Marked by prominent flags and a historic lighthouse, the headland overlooks the offshore Klidhes Islands (Cleides), offering travelers a dramatic maritime panorama of endless horizons at the island's ultimate land's end.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Yaz & Deniz)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "May–October (Summer & Swimming)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "kar-seacaves",
    "slug": "kar-seacaves",
    "region": "karpaz",
    "themes": [
      "coast",
      "nature",
      "scenic"
    ],
    "distance": "90–120 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Blue House Deniz Mağarası",
      "en": "Blue House Sea Cave"
    },
    "heroImage": "/images/route-card-images/blue-sea-cave.jpg",
    "title": {
      "tr": "Gizli Koylar & Deniz Mağaraları",
      "en": "Hidden Coves & Sea Caves"
    },
    "subtitle": {
      "tr": "Akdeniz'in kendi mimarisini oyduğu yer: mavi ışıltılı deniz mağarası, Camel Point, Horseshoe Beach ve Altınkum'un daha az kalabalık ucu. Mayo şart.",
      "en": "Where the Mediterranean carves its own sculpture: azure-glowing sea caves, Camel Point, Horseshoe Beach, and secluded stretches of Golden Beach. Swimwear is essential."
    },
    "intro": {
      "tr": "Akdeniz'in kendi mimarisini oyduğu yer: mavi ışıltılı deniz mağarası, Camel Point, Horseshoe Beach ve Altınkum'un daha az kalabalık ucu. Mayo şart. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Where the Mediterranean carves its own sculpture: azure-glowing sea caves, Camel Point, Horseshoe Beach, and secluded stretches of Golden Beach. Swimwear is essential. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Birkaç durak yüzmeyi gerektiriyor — mayo ve su ayakkabısı getirin. Deniz mağarasının içindeki mavi ışık öğle saatlerinde en belirgin.",
      "en": "Several stops require a short swim — bring a swimsuit and water shoes. The turquoise glow inside the sea caves is at its most vibrant around midday when the sun is overhead."
    },
    "proposers": [
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Blue House Deniz Mağarası",
          "description": "Karpaz'ın kayalık kuzey sahilinde deniz dalgalarının kireçtaşı falezleri oymasıyla oluşan bu doğal deniz mağarası, adını suyun altından yansıyan parlak mavi ışıktan alır. Sakin havalarda yüzerek veya küçük teknelerle içine girilebilen mağara, şnorkelle dalış ve su altı fotoğrafçılığı için Doğu Akdeniz'in en etkileyici doğal oluşumlarındandır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Camel Point",
          "description": "Karpaz kıyısında yer alan ve denize doğru uzanan kayalık kütlesi uzaktan bir deveyi andıran Camel Point, yarımadanın doğal jeomorfolojik anıtlarındandır. Yüksek kayalık burun, kıyı boyunca uzanan falezleri ve turkuaz koyları kuşbakışı izlemek için harika bir fotoğraf noktası sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Horseshoe Beach",
          "description": "Doğal bir at nalı şeklinde kıvrılan kayalık burunların kucağında yer alan Horseshoe Beach, rüzgarlardan korunaklı sığ ve sakin bir yüzme lagünü oluşturur. İncecik kumu ve dalgasız berrak sularıyla kalabalıktan uzak, huzurlu bir deniz molası arayanlar için saklı bir cennettir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kaplıca Sahili",
          "description": "Kuzey sahil şeridinde yer alan Kaplıca Koyu, geniş kumsalı ve arkasında yükselen Kantara dağlarının görkemli silüetiyle deniz mağaraları rotasının dengeli bir mola durağıdır. Temiz ve sakin deniziyle yüzme keyfi sunarken sahil tesislerinde taze yerel lezzetler tatma imkanı verir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Altınkum (Az Kalabalık Uç)",
          "description": "Ünlü Altınkum plajının ana giriş noktalarından uzakta, doğu ucunda yer alan bu bakir kesim; insan izinden uzak devasa kum tepeleri ve el değmemiş kumsalıyla bilinir. Sadece rüzgarın ve dalgaların sesinin duyulduğu bu nokta, doğayla baş başa kalmak ve sakin sularda yüzmek için idealdir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Zafer Burnu Kayalıkları",
          "description": "Kıbrıs'ın en doğu ucunda denize dik inen aşınmış kireçtaşı kayalıklar, Akdeniz'in hırçın dalgalarının şekillendirdiği sert ve vahşi bir kıyı topoğrafyası sergiler. Klidhes Adacıkları'na bakan bu kayalıklar, gün batımında gökyüzü renklerinin dalgalarla buluştuğu dramatik bir kapanış durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Blue House Sea Cave",
          "description": "Sculpted by wave erosion into the northern limestone cliffs of the Karpas, this sea cave owes its local reputation to the luminous azure light refracted through its submerged entrance. Accessible by swimming or small craft in calm weather, its crystalline waters offer an exceptional location for coastal snorkeling and marine photography.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Camel Point Beach",
          "description": "Named for its distinctive silhouette resembling a reclining camel when viewed from coastal angles, Camel Point is a prominent natural headland jutting into the clear northern waters. The cliff-top vantage point provides expansive perspectives along the jagged coastline and secluded inlets below.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Horseshoe Bay",
          "description": "Enclosed within a natural horseshoe-shaped amphithere of low limestone bluffs, this sheltered cove boasts a tranquil, shallow swimming basin protected from offshore currents. With soft sand underfoot and transparent waters, it serves as a secluded sanctuary for travelers seeking peaceful swimming away from marked resorts.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kaplıca Coastal Bay",
          "description": "Nestled beneath the northern ridges of the Kyrenia mountain range, Kaplıca Beach features an expansive sandy crescent where the waters remain remarkably clear. Providing simple seaside dining alongside wide horizons, it offers an unhurried swimming stop during a full-day coastal exploration.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Golden Beach (Quiet End)",
          "description": "Positioned far from the primary access trail of Golden Beach, this quiet eastern reach of the dunes offers untouched sand stretches free of footprints. Sheltered by massive coastal dunes, it provides an intimate wilderness setting where travelers can swim in complete tranquility.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cape Zafer Sea Cliffs",
          "description": "Forming the jagged terminus of Cyprus, the sea cliffs of Cape Apostolos Andreas drop steeply into deep open Mediterranean currents. Facing the uninhabited Klidhes islets, these weathered limestone ledges present an elemental landscape ideal for observing maritime swells and dusk skies at the edge of the island.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Haziran–Eylül (Sakin Deniz)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "June–September (Calm Seas)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "kar-wildnature",
    "slug": "kar-wildnature",
    "region": "karpaz",
    "themes": [
      "nature",
      "scenic"
    ],
    "distance": "130–160 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Yenierenköy",
      "en": "Yenierenköy"
    },
    "heroImage": "/images/route-card-images/yenierenkoy.jpg",
    "title": {
      "tr": "Karpaz Vahşi Doğa (70 km Yarımada)",
      "en": "Karpas Wilderness: The 70km Peninsula Trail"
    },
    "subtitle": {
      "tr": "Yarımadanın tüm uzunluğunu, tarım arazisinden deniz fenerine kadar kat eden rota. Avrupa kıyısından çok ıssız bir adayı andıran manzaralar.",
      "en": "Traverse the full length of the remote peninsula, from agricultural plains to the lonely lighthouse at Cape Apostolos Andreas. Landscapes that feel like a wild, untamed island."
    },
    "intro": {
      "tr": "Yarımadanın tüm uzunluğunu, tarım arazisinden deniz fenerine kadar kat eden rota. Avrupa kıyısından çok ıssız bir adayı andıran manzaralar. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Traverse the full length of the remote peninsula, from agricultural plains to the lonely lighthouse at Cape Apostolos Andreas. Landscapes that feel like a wild, untamed island. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Ronnas Koyu neredeyse hiç bilinmez ve genelde bomboştur — yarımadanın en sakin yüzme noktalarından biri.",
      "en": "Ronnas Bay is almost completely unpublicised and typically deserted — offering one of the quietest, most pristine coastal swim spots anywhere on the peninsula."
    },
    "proposers": [
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Yenierenköy",
          "description": "Geçmişte adanın en önemli tütün üretim merkezlerinden biri olan Yenierenköy (Yialousa), tarihi taş tütün depoları, zeytinlikleri ve canlı köy meydanıyla Karpaz'ın ana merkezlerindendir. Yarımadanın vahşi doğasına girmeden önce geleneksel kahvehanelerinde mola vermek ve yöresel fırın ürünlerini tatmak için ideal bir başlangıç noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Karpaz Milli Parkı",
          "description": "Yarımadanın doğu ucunu kapsayan Karpaz Özel Çevre Koruma Bölgesi (Milli Park), Akdeniz'in en bakir ekosistemlerinden biridir. Fenike ardıçları, yabani zeytinler ve endemik bitkilerle kaplı alanda serbestçe dolaşan yabani eşekler ve zengin bir kuş popülasyonu yaşar. İnsan müdahalesinden uzak doğasıyla adanın gerçek vahşi yüzünü temsil eder.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Altınkum",
          "description": "Milli park sınırları içindeki Altınkum, kilometrelerce kesintisiz uzanan altın sarısı kum tepeleri ve turkuaz renkli deniziyle Akdeniz'in en büyüleyici sahilidir. Caretta caretta kaplumbağalarının ana üreme sahası olan bu koruma altındaki plaj, yapılaşmadan tamamen uzak, sessiz ve dingin bir doğa deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Dipkarpaz Köyü",
          "description": "Milli parkın kapısı konumundaki Dipkarpaz, Türk ve Rum nüfusun ortak yaşam sürdürdüğü tarihi dokusuyla öne çıkar. Geleneksel sarı taştan yapılmış avlulu evleri, sokaklarda dinlenen sakinleri ve meydandaki tarihi kilisesiyle modern dünyadan izole, otantik bir köy atmosferi sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Zafer Burnu",
          "description": "Kıbrıs'ın haritadaki sivri burnunu oluşturan Zafer Burnu, Akdeniz'in uçsuz bucaksız sularına uzanan kayalık bir kara parçasıdır. Karşısındaki Klidhes Adacıkları ve deniz feneriyle adanın fiziki bitiş noktası olan bu alan, vahşi doğa rotasının en görkemli coğrafi durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Apostolos Andreas",
          "description": "Yarımadanın kayalık sahilinde yükselen Apostolos Andreas Manastırı, yüzyıllardır denizcilerin ve hacıların sığınağı olmuştur. Alt katında deniz kenarından çıkan şifalı ayazması, taş kemerli avlusu ve tarihi manolyalarıyla vahşi doğanın ortasında derin bir manevi huzur durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Ronnas Koyu",
          "description": "Yenierenköy ile Dipkarpaz arasında kuzey sahiline saklanmış olan Ronnas Koyu, gür zakkum ağaçları ve yeşil vadinin denizle buluştuğu bakir bir kumsaldır. Yeşil deniz kaplumbağalarının Kuzey Kıbrıs'taki en yoğun yuvalama alanlarından biri olan koy, turistlerin nadiren uğradığı sessiz bir doğa sığınağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Yenierenköy Coastal Town",
          "description": "Historically known as Yialousa and celebrated as a regional hub for tobacco cultivation, Yenierenköy is a substantial community characterized by historic stone tobacco warehouses and olive groves. Its central square provides traditional bakeries and cafes, serving as a key gateway before entering the remote landscapes of the eastern peninsula.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Karpas National Park",
          "description": "Encompassing the eastern tip of the peninsula, the Karpas Special Environmental Protection Area preserves an expansive sanctuary of coastal sand dunes, Phoenician juniper forests, and rocky headlands. Home to feral donkey herds and migratory sea birds, it remains one of the largest untamed coastal reserves in the Eastern Mediterranean basin.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Golden Beach",
          "description": "Stretching for kilometers along the southern shoreline of the national park, Golden Beach is characterized by sweeping sand dunes and clear, shallow turquoise waters. An essential nesting refuge for endangered sea turtles, the beach is protected from commercial development, providing an awe-inspiring expanse of coastal solitude.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Dipkarpaz Village",
          "description": "Serving as the administrative center at the boundary of the national park, Dipkarpaz retains an enduring bi-communal heritage where Greek and Turkish Cypriots coexist. Yellow-sandstone village residences, agricultural courtyards, and the central Byzantine church of Agios Synesios reflect an authentic rural pace of life.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cape Apostolos Andreas (Cape Zafer)",
          "description": "Marking the far eastern tip of Cyprus, Cape Apostolos Andreas forms a dramatic headland pointing across the sea toward the Syrian coastline. Framed by windswept cliffs, a solitary lighthouse, and the rocky Klidhes islets, it delivers an elemental sense of geographical extremity.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Apostolos Andreas Monastery",
          "description": "Anchored on the rocky shoreline near the cape, the Monastery of Saint Andrew is the historical heart of pilgrimage in Cyprus. Founded around a coastal spring associated with the apostle's journey, the complex includes 19th-century church buildings, monastic quarters, and a stone-built chapel by the surf.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ronnas Bay Wild Beach",
          "description": "Tucked away along the northern coast between Yenierenköy and Dipkarpaz, Ronnas Bay is an isolated sandy cove framed by wild oleander scrub and coastal dunes. As one of Northern Cyprus's most critical nesting grounds for green sea turtles, this secluded inlet offers a pristine sanctuary far removed from standard routes.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Kasım (İlkbahar & Güz)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–November (Spring & Fall)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "kar-yudi",
    "slug": "kar-yudi",
    "region": "karpaz",
    "themes": [
      "nature",
      "coast"
    ],
    "distance": "50–70 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Zor (yürüyüş)",
      "en": "Challenging (walk)"
    },
    "startFinish": {
      "tr": "Yudi Dağı Yürüyüş Parkuru",
      "en": "Mount Yudi Trailhead"
    },
    "heroImage": "/images/route-card-images/mount-yudi.jpg",
    "title": {
      "tr": "Yudi Dağı Yürüyüşü & Karpaz Gate Marina",
      "en": "Mount Yudi Trek & Karpaz Gate Marina"
    },
    "subtitle": {
      "tr": "Yudi Dağı'nda zorlu bir yürüyüş, Yeni Erenköy plajında yüzme ve Karpaz Gate Marina'da sakin bir gün batımı finali. Aktif gezginler için.",
      "en": "An invigorating mountain ridge hike on Mount Yudi, a refreshing swim along Yenierenköy beach, and a relaxing sunset finale at luxury Karpaz Gate Marina. Designed for active travelers."
    },
    "intro": {
      "tr": "Yudi Dağı'nda zorlu bir yürüyüş, Yeni Erenköy plajında yüzme ve Karpaz Gate Marina'da sakin bir gün batımı finali. Aktif gezginler için. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "An invigorating mountain ridge hike on Mount Yudi, a refreshing swim along Yenierenköy beach, and a relaxing sunset finale at luxury Karpaz Gate Marina. Designed for active travelers. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Yudi Dağı tırmanışı için sağlam ayakkabı ve bol su şart; marina ise yürüyüş sonrası konforlu bir toparlanma durağı.",
      "en": "Sturdy hiking boots and ample drinking water are essential for tackling Mount Yudi; the marina lounge afterward provides a luxurious and comfortable place to unwind."
    },
    "proposers": [
      "K.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Yudi Dağı Yürüyüş Parkuru",
          "description": "Karpaz omurgasında yükselen Yudi Dağı (Yuda Tepesi), bölgenin en heyecan verici doğa yürüyüşü rotalarından biridir. Çam ve makiliklerle kaplı dik patikalardan zirveye ulaşıldığında, yarımadanın hem kuzey hem güney kıyılarını aynı anda gören nefes kesici bir panorama açılır. Yürüyüşçülere vahşi doğayı ve adanın coğrafi yapısını yakından tanıma fırsatı sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Yeni Erenköy Halk Plajı",
          "description": "Yudi Dağı yürüyüşünün ardından ulaşılan Yeni Erenköy Halk Plajı, altın sarısı kumu ve berrak deniziyle yorgunluk atmak için ideal bir sahil durağıdır. Korunaklı yapısı sayesinde dalgasız ve güvenli bir yüzme imkanı sunarken sahil kafesinde serinletici içecekler bulunur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Karpaz Gate Marina",
          "description": "Yenierenköy kıyısında yer alan Karpaz Gate Marina, uluslararası standartlarda lüks bir yat limanı ve yaşam merkezidir. Butik oteli, deniz kulübü, şık Akdeniz restoranı ve sanat galerisiyle yarımadanın en modern tesisidir. Dingin liman atmosferinde tekneleri izleyerek kahve içmek veya yemek yemek için seçkin bir mola noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gün Batımı Noktası",
          "description": "Marina mendireği veya yakınlardaki falezlerin üzerinde yer alan bu seyir noktası, güneşin kuzeybatı ufkunda Akdeniz'e gömülüşünü izlemek için mükemmel bir açıdır. Dağ yürüyüşü ve deniz keyfinin ardından denizin üzerindeki renk kırılmalarını izleyerek günü dingin bir atmosferde sonlandırmayı sağlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Revaklı Ev Konağı",
          "description": "Yenierenköy merkezinde yer alan Revaklı Ev, Osmanlı ve erken dönem Kıbrıs sivil mimarisini yansıtan kemerli ön revakları ve sarı taş işçiliğiyle dikkat çeken tarihi bir konaktır. Restore edilerek kültürel mirasın bir parçası haline getirilen yapı, geleneksel Karpaz ev hayatını ve mimari zarafetini gözler önüne serer.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Mount Yudi Hiking Trail",
          "description": "Rising prominently along the spine of the Karpas Peninsula, Mount Yudi provides an invigorating hiking trail through pine woods and Mediterranean scrub. Reaching its elevated ridge rewards trekkers with sweeping vistas extending simultaneously over both the northern and southern coastlines of the peninsula.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Yeni Erenköy Sandy Beach",
          "description": "Situated on the northern coast near Yenierenköy, this public sandy beach features clear, gentle waters protected by natural coastal headlands. It is a favored resting spot for travelers and hikers to swim and relax by the water after traversing the mountain trails.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Karpaz Gate Marina",
          "description": "Nestled on the northern shore of the peninsula, Karpaz Gate Marina is an internationally accredited luxury yacht haven and resort complex. Providing boutique accommodation, an open-air beach club, a contemporary art gallery, and fine Mediterranean dining, it represents the primary upscale maritime retreat in the region.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Panoramic Sunset Point",
          "description": "Located along the marina breakwater and nearby coastal cliffs, this viewpoint affords an unobstructed westward horizon across open northern waters. It is an ideal setting to witness dramatic sunset tones reflecting off the calm sea following an active day outdoors.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Arcaded Ottoman Heritage House",
          "description": "Situated in the heart of Yenierenköy, the Revaklı Ev (Arcaded House) is a restored historic stone mansion characterized by classical ground-floor arches and traditional vernacular sandstone craftsmanship. The landmark offers insights into regional domestic architecture and historic village lifestyle.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Mayıs & Eylül–Kasım",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–May & September–November",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "kar-caves",
    "slug": "kar-caves",
    "region": "karpaz",
    "themes": [
      "history",
      "nature",
      "coast"
    ],
    "distance": "80–110 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Hill Coffee",
      "en": "Hill Coffee"
    },
    "heroImage": "/images/route-card-images/ayios-philon-church.jpg",
    "title": {
      "tr": "Karpaz Mağaraları & Antik İzler",
      "en": "Karpas Caves & Ancient Footprints"
    },
    "subtitle": {
      "tr": "Antik mağaralar, Agla Trias, tarihi kiliseler ve uçsuz plajlarla Karpaz'ın en uç noktasına — dünyanın kenarındaymış hissi veren bir rota.",
      "en": "Sea cliffs, Ayia Trias mosaics, Byzantine chapels, and vast untouched shores leading to the rugged eastern headlands — a journey that feels like reaching the end of the earth."
    },
    "intro": {
      "tr": "Antik mağaralar, Agla Trias, tarihi kiliseler ve uçsuz plajlarla Karpaz'ın en uç noktasına — dünyanın kenarındaymış hissi veren bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Sea cliffs, Ayia Trias mosaics, Byzantine chapels, and vast untouched shores leading to the rugged eastern headlands — a journey that feels like reaching the end of the earth. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Uzun bir sürüş rotası — sabah erken çıkın ve Dipkarpaz sonrası benzin istasyonu olmadığını unutmayın.",
      "en": "This is a full day of driving — set off early in the morning and bear in mind that there are no fuel stations past Dipkarpaz."
    },
    "proposers": [
      "A.T."
    ],
    "stops": {
      "tr": [
        {
          "name": "Hill Coffee",
          "description": "Karpaz tepelerinde manzaraya hakim bir noktada yer alan Hill Coffee, yarımadanın her iki yakasını gören konumuyla rotanın keyifli bir başlangıç noktasıdır. Taze demlenmiş kahveleri ve yerel atıştırmalıklarıyla uzun yarımada sürüşü öncesi dinlendirici bir kahvaltı ve manzara molası sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Antik Mağaralar",
          "description": "Karpaz'ın kireçtaşı yamaçlarında yer alan bu doğal ve insan eliyle genişletilmiş kaya mağaraları, Neolitik ve Bronz çağlarından bu yana sığınak ve mezar olarak kullanılmıştır. Erken Hristiyanlık döneminde keşişlerin inzivaya çekildiği mağaralar, bölgenin jeolojik ve arkeolojik derinliğini gözler önüne serer.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Agla Trias",
          "description": "Sipahi köyünde yer alan 5. ve 6. yüzyıl Erken Hristiyanlık bazilikası Agia Trias, geometrik desenler, nar, incir ve kuş motifleriyle bezenmiş renkli taban mozaikleriyle ünlüdür. Vaftizhanesi ve sütun dizileri günümüze ulaşan yapı, Kıbrıs'ın erken Hristiyanlık sanatının en seçkin açık hava arkeoloji duraklarındandır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Aylos Kilisesi",
          "description": "Yarımadanın kuzey kıyısına yakın kırsal alanda yer alan tarihi şapel kalıntısı, Orta Çağ taş işçiliği ve sakin doğasıyla dikkat çeker. Çevresindeki asırlık zeytin ağaçları ve yabani çiçeklerle çevrili yapı, Karpaz'ın unutulmuş manevi mirasını keşfetmek isteyenler için huzurlu bir mola yeridir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Big Sand Beach",
          "description": "Altınkum sahilinin en geniş kumul alanını oluşturan Big Sand Beach, rüzgarın şekillendirdiği dev kum tepeleri ve kristal berraklığındaki turkuaz deniziyle bilinir. Yapılaşmanın bulunmadığı bu koruma altındaki sahil, deniz kaplumbağalarının doğal yaşam alanı olup ziyaretçilere adanın en görkemli yüzme deneyimini sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Rizokarpaso (Uç Nokta)",
          "description": "Dipkarpaz sınırlarının doğusunda, yarımadanın Zafer Burnu'na kavuştuğu en uç noktadır. Akdeniz'in iki yakasını birleştiren vahşi kayalıkları, deniz feneri ve tarihi Apostolos Andreas Manastırı çevresiyle, medeniyetin bittiği ve sonsuz maviliğin başladığı eşsiz bir coğrafi final noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Hill Coffee Lookout",
          "description": "Perched on an elevated ridge along the Karpas transit corridor, Hill Coffee offers expansive panoramic vistas taking in the rolling terrain of the peninsula. Serving specialty coffees, herbal teas, and fresh breakfast bites, it provides a scenic starting point before venturing deeper into remote areas.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Ancient Coastal Caves",
          "description": "Hollowed into the limestone escarpments of the peninsula, these natural and expanded rock chambers served historically as prehistoric shelters, tomb chambers, and early Christian hermit cells. They offer an interesting glimpse into early human habitation and geological history in eastern Cyprus.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Agia Trias Basilica",
          "description": "Located in the village of Sipahi, the 5th-century Basilica of Agia Trias is renowned for its remarkably preserved polychrome floor mosaics depicting geometric motifs, pomegranates, and stylized fauna. Visitors can explore the exposed nave foundations, column plinths, and cruciform baptistery representing early Byzantine ecclesiastical architecture.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ayios Church Ruins",
          "description": "Situated in the rustic backcountry of the peninsula, these medieval stone chapel remains reflect early monastic presence on the Karpas. Surrounded by wild carob trees and grazing pastures, the site provides a tranquil, unhurried stop for heritage enthusiasts exploring regional stone ruins.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Big Sand Beach",
          "description": "Representing the widest dune sector of Golden Beach, Big Sand Beach is defined by rolling sand formations and clear turquoise water. Free of permanent structures and acting as a vital nesting ground for endangered loggerhead turtles, it delivers a pristine seaside swimming experience.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Rizokarpaso Eastern Headland",
          "description": "Marking the far eastern perimeter of the Dipkarpaz territory toward Cape Apostolos Andreas, this point encompasses rocky shores, solitary maritime landscapes, and historical chapel sites. It provides a dramatic culmination to an itinerary exploring the outer reaches of Cyprus.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Nisan–Haziran & Eylül–Ekim",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "April–June & September–October",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "kar-buyukkonuk",
    "slug": "kar-buyukkonuk",
    "region": "karpaz",
    "themes": [
      "nature",
      "food",
      "history"
    ],
    "distance": "35–50 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Yarım–tam gün"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "İskele Arkeoloji Müzesi",
      "en": "İskele Archaeology Museum"
    },
    "heroImage": "/images/route-card-images/buyukkonuk.jpg",
    "title": {
      "tr": "Büyükkonuk Eko-Köy & Doğu Kapısı",
      "en": "Büyükkonuk Eco-Village & Eastern Gateway"
    },
    "subtitle": {
      "tr": "KKTC'nin ilk eko-turizm köyü Büyükkonuk üzerinden Karpaz'a giriş: geleneksel el sanatları, yerel yemek ve köy yaşamı.",
      "en": "Enter the Karpas through Northern Cyprus's pioneer eco-tourism village, Büyükkonuk: traditional crafts, homemade stone-oven bread, local cuisine, and warm village hospitality."
    },
    "intro": {
      "tr": "KKTC'nin ilk eko-turizm köyü Büyükkonuk üzerinden Karpaz'a giriş: geleneksel el sanatları, yerel yemek ve köy yaşamı. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Enter the Karpas through Northern Cyprus's pioneer eco-tourism village, Büyükkonuk: traditional crafts, homemade stone-oven bread, local cuisine, and warm village hospitality. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Büyükkonuk'ta eko-gün festivalleri düzenlenir; denk gelirseniz geleneksel hellim yapımı ve zeytin ezme gösterilerini kaçırmayın.",
      "en": "Büyükkonuk hosts periodic eco-festivals; if your dates align, do not miss the live demonstrations of traditional halloumi cheesemaking and carob syrup pressing."
    },
    "proposers": [
      "U.S."
    ],
    "stops": {
      "tr": [
        {
          "name": "İskele Arkeoloji Müzesi",
          "description": "Karpaz Yarımadası'na açılan kapı olan İskele'de yer alan müze, bölgenin binlerce yıllık tarihine ışık tutan zengin bir arkeolojik koleksiyona ev sahipliği yapar. Neolitik dönemden Roma çağına kadar uzanan seramikler, figürinler ve mezar buluntuları, kırsal ve ekolojik gezi öncesinde bölgenin kadim geçmişini anlamak için ideal bir giriş sağlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Kantara Kalesi",
          "description": "Beşparmak Dağları'nın doğu ucunda 630 metre yükseklikte yer alan Kantara Kalesi, Lüzinyanlar ve Bizanslılar tarafından kullanılan görkemli bir dağ hisarıdır. Kalenin burçlarından kuzeyde Akdeniz kıyıları, güneyde Mağusa Körfezi ve doğuda uzanan Karpaz Yarımadası aynı anda panoramik olarak izlenebilir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Büyükkonuk Eko-Köy",
          "description": "Kuzey Kıbrıs'ın ilk tescilli eko-turizm köyü olan Büyükkonuk (Komi Kebir), geleneksel ada yaşamının ve sürdürülebilir tarımın merkezidir. Taş fırınlarda pişen geleneksel zeytinli ve hellimli ekmekler, el dokuma tezgahları, organik zeytinyağı değirmenleri ve kerpiç konukevleriyle ziyaretçilerine otantik bir Kıbrıs köy deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Dipkarpaz Köyü",
          "description": "Yarımadanın en ucundaki tarihi yerleşim olan Dipkarpaz, Türk ve Rum toplumlarının bir arada yaşamaya devam ettiği çok kültürlü bir köydür. Geleneksel taş evleri, köy kahvehaneleri ve meydanındaki Agios Synesios Kilisesi ile milli park öncesindeki son büyük kültürel duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Ayios Philon Kilisesi",
          "description": "Dipkarpaz'ın kuzey sahilinde, antik Karpasia limanı üzerinde yükselen 12. yüzyıl Bizans kilisesidir. 5. yüzyıldan kalma renkli mozaik zeminleri ve antik mendirek kalıntılarıyla denize sıfır konumlanan yapı, doğa ve tarihin birleştiği dingin bir kapanış noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "İskele Archaeology Museum",
          "description": "Located in İskele at the threshold of the Karpas Peninsula, this archaeological museum displays prehistoric pottery, Hellenistic statues, and Roman artifacts recovered from regional excavations. It serves as an informative cultural foundation before exploring the rural eco-villages and historic landscapes to the east.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Kantara Castle",
          "description": "Commanding a 630-meter limestone summit in the eastern Kyrenia Mountains, Kantara Castle is an imposing medieval mountain redoubt fortified under Byzantine and Lusignan rule. Its surviving gatehouses and battlements present extraordinary views embracing both the northern coastline and the southern expanse of Famagusta Bay.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Büyükkonuk Eco-Village",
          "description": "Recognized as the pioneer eco-tourism village in Northern Cyprus, Büyükkonuk (Komi Kebir) is dedicated to preserving traditional rural heritage and agrarian crafts. Visitors can tour working olive oil presses, observe sourdough bread baking in clay dome ovens, and explore restored mud-brick farmsteads hosting local artisan workshops.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Dipkarpaz Village",
          "description": "Located deep along the peninsula, Dipkarpaz is an authentic bi-communal agricultural village where Greek and Turkish Cypriot families reside together. The central square, framed by the Church of Agios Synesios and community coffee shops, preserves an unhurried pastoral rhythm of life.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ayios Philon Church",
          "description": "Standing on the northern coastline over the foundations of ancient Karpasia, this 12th-century Byzantine domed church features preserved geometric floor mosaics from a 5th-century basilica. Overlooking ancient stone breakwaters and the open sea, it provides a serene coastal conclusion to the itinerary.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Bahar Eko-Günleri)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Spring Eco-Festivals)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-soli",
    "slug": "guzelyurt-lefke-heritage",
    "region": "bati",
    "themes": [
      "history",
      "scenic"
    ],
    "distance": "45–65 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Yarım–tam gün"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Soli Bazilikası",
      "en": "Soli Basilica"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Soli Antik Kenti & Vouni Sarayı",
      "en": "Ancient Soli & Vouni Palace"
    },
    "subtitle": {
      "tr": "Kuğu mozaiğiyle ünlü Soli, tepedeki Vouni Sarayı ve batı kıyısının sessiz antik kentleri. Turist otobüsleri buraya pek uğramaz.",
      "en": "Famous for its intricate Swan Mosaic, ancient Soli combines with the commanding clifftop ruins of Vouni Palace and peaceful western coastlines. Tour buses rarely venture here."
    },
    "intro": {
      "tr": "Kuğu mozaiğiyle ünlü Soli, tepedeki Vouni Sarayı ve batı kıyısının sessiz antik kentleri. Turist otobüsleri buraya pek uğramaz. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Famous for its intricate Swan Mosaic, ancient Soli combines with the commanding clifftop ruins of Vouni Palace and peaceful western coastlines. Tour buses rarely venture here. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Vouni Sarayı'ndan gün batımı batı kıyısının en güzellerinden biri ve popüler noktalara göre çok daha sakin.",
      "en": "Sunset from the high terraces of Vouni Palace is among the most dramatic on the entire island, with vast sea views and complete serenity."
    },
    "proposers": [
      "U.S.",
      "E.P.",
      "A.A.",
      "O.O.",
      "M.U.",
      "K.A.",
      "M.M.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Soli Bazilikası",
          "description": "Gemikonağı yakınlarında yer alan Soli Bazilikası, MS 4. yüzyılın sonlarında inşa edilmiş adanın en erken ve en büyük Hristiyan bazilikalarından biridir. Yapının zemininde korunan ve geometrik motifler, kuş figürleri ile ünlü 'Soli Kuğusu'nu içeren renkli taban mozaikleri, geç antik dönem sanatının şaheserlerindendir. Koruma çatısı altında sergilenen kalıntılar, kentin zengin tarihini belgeler.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Soli Roma Tiyatrosu",
          "description": "Bazilikanın hemen yukarısındaki tepe yamacına oyulmuş olan Soli Roma Tiyatrosu, MS 2. yüzyıldan kalma yarım daire biçimli bir gösteri yapısıdır. Yaklaşık 3.500 seyirci kapasitesine sahip olan yapı, Güzelyurt Körfezi'nin engin maviliğine bakan muazzam bir sahne manzarasına sahiptir. Restore edilmiş basamaklarında otururken antik çağın deniz manzarasını izlemek büyüleyicidir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Antik Agora",
          "description": "Soli antik kentinin idari ve ticari kalbi olan agora alanı, sütunlu caddeleri, dükkan temelleri ve mermer çeşme kalıntılarıyla Roma döneminin canlı kentsel yaşamını yansıtır. Bakır ticaretiyle zenginleşen kentin limanına bağlanan bu alan, antik Soli'nin ekonomik gücünü ortaya koyar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Vouni Sarayı",
          "description": "Deniz seviyesinden 250 metre yükseklikte sarp bir tepe üzerinde yer alan Vouni Sarayı, MÖ 5. yüzyılda (yaklaşık MÖ 498) Pers yanlısı Marion Kralı Doxandros tarafından yakındaki Yunan yanlısı Soli kentini gözetim altında tutmak için inşa edilmiştir. 137 odalı saray kompleksi, merkezi avlusu (megaron), sarnıçları ve Athena Tapınağı ile Doğu Akdeniz'de Klasik Dönem Pers-Yunan mimari çekişmesinin ayakta kalan tek örneğidir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Manzara Noktası",
          "description": "Vouni Sarayı'nın bulunduğu kayalık tepenin zirvesinde yer alan seyir noktası, Güzelyurt Körfezi'ni, Yeşilırmak kıyılarını ve açık denizde yükselen Petra tou Limniti adacığını kapsayan eşsiz bir görsel şölen sunar. Batı Kıbrıs'ın el değmemiş doğasını ve masmavi denizini izlemek için adadaki en etkileyici panoramik noktalardan biridir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Soli Basilica (Swan Mosaic)",
          "description": "Situated near Gemikonağı, the Basilica of Soli is one of the earliest and most expansive 4th-century Christian basilicas in Cyprus. The archaeological site is celebrated for its elaborate polychrome floor mosaics, notably the famous mosaic of a delicate swan framed by geometric borders and floral motifs, preserved beneath an engineered protective roof.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Soli Ancient Roman Theatre",
          "description": "Cut into the hillside overlooking the sea just above the basilica, the Roman Theatre of Soli dates to the 2nd century AD and originally seated around 3,500 spectators. Reconstructed on its original foundations, its semicircular tiered stone seating provides commanding panoramic vistas across the azure waters of Morphou Bay.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ancient Roman Agora",
          "description": "Representing the civic and commercial center of ancient Soli, the agora precinct retains foundations of public market buildings, colonnaded walkways, and monumental water basins. Excavations demonstrate how Soli prospered from the export of copper ore mined in the nearby foothills and shipped across the Mediterranean.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Vouni Palace Clifftop Ruins",
          "description": "Perched dramatically on an isolated clifftop 250 meters above the sea, Vouni Palace was constructed around 498 BC by the pro-Persian ruler of Marion to monitor the Greek-sympathizing city of Soli. The 137-room stone complex features a central peristyle courtyard, royal living quarters, stone cisterns, and the foundations of a temple dedicated to Athena, standing as a rare architectural monument of the Classical period.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Scenic Lookout Point",
          "description": "The precipitous lookout from the summit of Vouni hill delivers one of the most magnificent coastal vistas in Cyprus. Overlooking the entirety of Morphou Bay, the rugged western cliffs, and the offshore islet of Petra tou Limniti, it is an exceptional vantage point for wide-angle landscape photography.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Haziran & Eylül–Kasım",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–June & September–November",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-guzelyurt",
    "slug": "bati-guzelyurt",
    "region": "bati",
    "themes": [
      "history",
      "nature",
      "food"
    ],
    "distance": "15–25 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Güzelyurt Merkez",
      "en": "Güzelyurt Town Centre"
    },
    "heroImage": "/images/route-card-images/guzelyurt-archaeology.jpg",
    "title": {
      "tr": "Güzelyurt Arkeoloji & Portakal Kasabası",
      "en": "Güzelyurt Archaeology & Citrus Orchards"
    },
    "subtitle": {
      "tr": "Tarım bahçeleri, bölge kasabası pazarları ve müze tarihleri etrafında kurulu sakin bir batı rotası; St. Mamas ve portakal bahçeleri.",
      "en": "A tranquil western journey centred on lush citrus groves, regional town markets, and rich archaeological finds; featuring St. Mamas Church and sweet-scented orange orchards."
    },
    "intro": {
      "tr": "Tarım bahçeleri, bölge kasabası pazarları ve müze tarihleri etrafında kurulu sakin bir batı rotası; St. Mamas ve portakal bahçeleri. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A tranquil western journey centred on lush citrus groves, regional town markets, and rich archaeological finds; featuring St. Mamas Church and sweet-scented orange orchards. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sabah erken gidin — yerel çiftçiler taze portakal ve limon getirdiğinde pazar en canlı halinde olur.",
      "en": "Visit on market morning when regional farmers arrive with freshly harvested oranges, lemons, and local preserves — the town centre is at its most vibrant."
    },
    "proposers": [
      "E.A.",
      "H.G.",
      "D.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Güzelyurt Merkez",
          "description": "Tarihi adıyla Omorfo (Morphou) olarak bilinen Güzelyurt, Kıbrıs'ın narenciye kalbi ve batı bölgesinin ana ticaret merkezidir. Her cumartesi kurulan büyük açık pazarında taze narenciyeler, hellim, zeytin ve yerel otlar satılır. Sakin kasaba meydanı, geleneksel kahvehaneleri ve samimi atmosferiyle batı bölgesini keşfetmek için ideal bir başlangıç noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Arkeoloji & Doğa Tarihi Müzesi",
          "description": "Güzelyurt Piskoposluk Sarayı'nda yer alan müze, iki ana bölümden oluşur. Zemin katında Kıbrıs'ın jeolojik yapısı, fosiller ve adaya özgü doldurulmuş yaban hayatı örnekleri sergilenirken; üst katta Soli ve Toumba tou Skourou kazılarından çıkarılan Neolitik, Bronz ve Klasik dönem altın takıları, heykelleri ve pişmiş toprak eserleri sergilenmektedir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "St. Mamas Kilisesi & İkon Müzesi",
          "description": "Vergi ödemeyi reddederek bir aslanın sırtında saraya gitmesiyle ünlü vergi mükelleflerinin ve hayvanların koruyucu azizi St. Mamas'a adanmış 18. yüzyıl kilisesidir. Gotik ve Venedik mimari izlerini taşıyan yapının içinde azize ait mermer bir lahit ve duvarlarında zengin bir Ortodoks ikon koleksiyonu yer alır. Adanın en önemli dini ziyaret merkezlerindendir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Portakal Bahçeleri",
          "description": "Güzelyurt'u çepeçevre saran yüzlerce hektarlık narenciye bahçeleri, adanın portakal, greyfurt ve mandalina üretiminin merkezidir. İlkbaharda tüm ovayı saran portakal çiçeği kokusu, kış aylarında ise ağaçları donatan parlak turuncu meyveler arasında yürüyüş yapmak ve taze sıkılmış narenciye sularını tatmak eşsiz bir deneyimdir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yakın Köyler",
          "description": "Güzelyurt çevresinde yer alan Bostancı, Yayla ve Aydınköy gibi kırsal köyler, geleneksel tarım hayatının devam ettiği sakin yerleşimlerdir. Taş evlerin sıralandığı sokaklar, su kuyuları ve köy meydanlarındaki kahvehaneler, batı Kıbrıs'ın huzurlu ve misafirperver kırsal dokusunu yansıtır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Güzelyurt Town Centre",
          "description": "Historically known as Morphou, Güzelyurt is the agricultural hub of western Cyprus, celebrated for its citrus groves. The town center hosts a bustling Saturday regional market featuring seasonal oranges, fresh halloumi, and regional produce. Its relaxed streets and traditional tea houses offer an authentic taste of local town life.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Museum of Archaeology & Natural History",
          "description": "Housed within the former Bishop's Palace, this museum contains dual wings dedicated to natural history and regional archaeology. The lower level displays geological specimens, fossils, and preserved wildlife, while upper galleries exhibit Bronze Age gold jewelry, Classical terracottas, and Hellenistic artifacts recovered from Soli and Toumba tou Skourou.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "St. Mamas Church & Icon Museum",
          "description": "Dedicated to Saint Mamas, the 12th-century hermit saint revered as the protector of animals and tax-exempt individuals, this 18th-century church incorporates Franco-Byzantine and Venetian architectural elements. Inside, a marble sarcophagus believed to exude miraculous healing oil rests alongside a distinguished gallery of Greek Orthodox icons.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sweet Orange Orchards",
          "description": "Blanketing the alluvial plain around Güzelyurt, these extensive commercial citrus orchards produce the bulk of the island's oranges, lemons, and grapefruits. Fragrant with citrusblossoms in spring and vibrant with ripe fruit throughout winter, the rural lanes wind past irrigation canals where travelers can purchase freshly picked fruit and freshly squeezed juices directly from local growers.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Historic Foothill Villages",
          "description": "Scattered across the agrarian perimeter of Güzelyurt, rural villages such as Bostancı (Zodeia), Yayla, and Aydınköy preserve an unhurried Cypriot countryside pace. Characterized by traditional stone houses, artisan workshops, and village coffee houses where residents gather, these settlements offer a warm, welcoming glimpse into the daily life of western Cyprus.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Aralık–Mayıs (Narenciye Hasadı)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "December–May (Citrus Harvest)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-lefke",
    "slug": "bati-lefke",
    "region": "bati",
    "themes": [
      "history",
      "nature",
      "food"
    ],
    "distance": "20–30 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Lefke Merkez",
      "en": "Lefke Town Centre"
    },
    "heroImage": "/images/route-card-images/lefke-citrus.jpg",
    "title": {
      "tr": "Lefke Narenciye & Osmanlı Su Kemerleri",
      "en": "Lefke Citrus Groves & Ottoman Aqueducts"
    },
    "subtitle": {
      "tr": "Portakal kokulu tarihi sokaklar, Osmanlı konakları, su kemerleri ve Piri Mehmet Paşa Camii. Kalabalıktan uzak otantik bir Kıbrıs.",
      "en": "Historic streets scented with orange blossoms, Ottoman townhouses, ancient stone aqueducts, and Piri Mehmet Pasha Mosque. An authentic, timeless slice of rural Cyprus."
    },
    "intro": {
      "tr": "Portakal kokulu tarihi sokaklar, Osmanlı konakları, su kemerleri ve Piri Mehmet Paşa Camii. Kalabalıktan uzak otantik bir Kıbrıs. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Historic streets scented with orange blossoms, Ottoman townhouses, ancient stone aqueducts, and Piri Mehmet Pasha Mosque. An authentic, timeless slice of rural Cyprus. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sabah erken, yerel çiftçiler taze portakal ve limon getirdiğinde uğrayın. İlkbaharda narenciye çiçeği kokusu tüm kasabayı sarar.",
      "en": "Visit in springtime when the citrus trees are in full bloom and their sweet fragrance blankets the entire valley. Pick up jars of walnut and date spoon sweets from village producers."
    },
    "proposers": [
      "A.A.",
      "V.R.",
      "E.A.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Lefke Merkez",
          "description": "Trodos Dağları'nın eteklerinde, yemyeşil bir vadiye kurulan sakin şehir (Cittaslow) Lefke, adadaki Osmanlı sivil mimarisinin en özgün örneklerini barındırır. Ahşap cumbalı sarı taş konakları, hurma ağaçları, sokak aralarından akan su arkları ve asırlık çınarların gölgelediği kahvehaneleriyle Lefke, Kıbrıs'ın dingin ve köklü kültürel dokusunu yaşatır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Piri Mehmet Paşa Camii",
          "description": "Lefke'nin merkezinde yer alan cami, 17. yüzyıl başında Osmanlı Sadrazamı Piri Mehmed Paşa'nın torunu Mehmet Bey tarafından yaptırılmış adanın en eski Osmanlı ibadethanelerindendir. Kubbeli harimi, zarif kesme taş minaresi ve haziresinde yer alan Osmanlı dönemine ait sarıklı mezar taşlarıyla dikkat çeken yapı, kasabanın manevi ve tarihi kalbidir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Osmanlı Su Kemeri",
          "description": "Dağlardan gelen bol pınar sularını Lefke'nin bahçelerine ve un değirmenlerine ulaştırmak amacıyla Osmanlı devrinde inşa edilen tarihi kesme taş su kemerleri, vadi boyunca uzanır. Kemerli gözleri ve özgün taş mimarisiyle kasabanın simgesi haline gelen bu hidrolik miras, yemyeşil bitki örtüsüyle bütünleşerek etkileyici fotoğraf kareleri sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Narenciye Bahçeleri",
          "description": "Lefke vadisinin zengin su kaynakları sayesinde asırlardır verimini koruyan bahçeler, ünlü Yafa portakalı, mandalina ve adanın en kaliteli hurma ağaçlarına ev sahipliği yapar. İlkbahar aylarında taze çiçek kokularının sokaklara taştığı bu bahçeler arasında yürümek, kasabanın bereketli tarım mirasını doğrudan hissettirir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yerel Kahvehaneler",
          "description": "Lefke çarşısında ve mahalle meydanlarında yer alan geleneksel kahvehaneler, yerel halkın ve üniversite öğrencilerinin buluştuğu samimi mekanlardır. Közde demlenen taze Türk kahvesi, yerel ceviz macunu ve ev yapımı limonata eşliğinde soluklanmak, Lefke'nin telaşsız yaşam temposunu deneyimlemek için idealdir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Citrus Pazarı",
          "description": "Lefke merkezinde kurulan yerel pazar tezgahları; taze toplanmış Yafa portakalları, yerel hurmalar, dağ kekiği, zeytinyağı ve geleneksel ceviz macunlarıyla renklenir. Doğrudan yerel üreticiden alışveriş yapma imkanı sunan bu durak, batı Kıbrıs'ın taze tarımsal lezzetlerini keşfetmek için rotanın mükemmel bir tamamlayıcısıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Lefke Town Centre",
          "description": "Nestled in a verdian valley at the foot of the Troodos foothills, the Cittaslow town of Lefke (Lefka) preserves one of the most coherent collections of Ottoman vernacular domestic architecture in Cyprus. Characterized by honey-colored sandstone mansions with overhanging timber bay windows (cumbas), soaring date palms, and fresh irrigation rivulets, it offers an unhurried, historically rich atmosphere.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Piri Mehmet Pasha Historic Mosque",
          "description": "Located in the historical center of Lefke, this early 17th-century mosque was endowed by Mehmet Bey, a descendant of the Ottoman Grand Vizier Piri Mehmed Pasha. Featuring a domed prayer sanctuary, an elegant ashlar minaret, and an adjacent historic cemetery containing intricately carved turbaned Ottoman headstones, it serves as the spiritual landmark of the district.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ottoman Aqueducts",
          "description": "Engineered during the Ottoman era to channel fresh mountain spring waters from the heights down to Lefke's terraced orchards and flour mills, these historic ashlar stone aqueducts span the verdant valley. The weathered masonry arches, framed by wild figs and date palms, represent an enduring feat of pre-modern regional hydraulic engineering.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Citrus Groves",
          "description": "Sustained by perennial hillside springs, Lefke's lush orchards are celebrated across Cyprus for producing prized Jaffa oranges, mandarins, and rare date palm groves. Wandering the shaded pathways between these stone-walled groves reveals the fragrant blossoms of spring and deep agricultural traditions that have sustained the community for centuries.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Traditional Village Coffee Houses",
          "description": "Clustered around the town square beneath broad plane trees, Lefke's traditional coffee shops provide an authentic social venue. Frequented by local townsfolk, farmers, and university students, they provide a relaxed environment to enjoy freshly brewed Cypriot coffee, handmade walnut preserves, and informal local conversations.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lefke Citrus Market",
          "description": "The open-air citrus and produce stalls in Lefke showcase seasonal harvests direct from local orchards, including sweet Jaffa oranges, fragrant lemons, indigenous dates, and artisanal carob syrup. It provides travelers with an authentic farm-to-table shopping stop to sample the natural agricultural wealth of the western valleys.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Sonbahar Hurma Hasadı)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Autumn Date Harvest)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-cmc",
    "slug": "bati-cmc",
    "region": "bati",
    "themes": [
      "history",
      "coast"
    ],
    "distance": "15–25 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Eski CMC Yapıları",
      "en": "Historic CMC Mining Complex"
    },
    "heroImage": "/images/route-card-images/gemikonagi-industrial-heritage.jpg",
    "title": {
      "tr": "Gemikonağı Endüstri Hafızası & CMC Mirası",
      "en": "Gemikonağı Industrial Heritage & CMC Legacy"
    },
    "subtitle": {
      "tr": "Lefke'nin madencilik tarihini anlatan eski CMC yapıları, maden demiryolu ve Gemikonağı'nın kıyı manzarası. Çoğu ziyaretçinin bilmediği bir endüstri rotası.",
      "en": "Delve into the island's twentieth-century copper mining history with surviving Cyprus Mines Corporation infrastructure, the historic ore-loading pier, and scenic Gemikonağı coastlines."
    },
    "intro": {
      "tr": "Lefke'nin madencilik tarihini anlatan eski CMC yapıları, maden demiryolu ve Gemikonağı'nın kıyı manzarası. Çoğu ziyaretçinin bilmediği bir endüstri rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Delve into the island's twentieth-century copper mining history with surviving Cyprus Mines Corporation infrastructure, the historic ore-loading pier, and scenic Gemikonağı coastlines. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Gemikonağı'nın eski iskelesi fotoğraf için mükemmel; bu bölgenin Kıbrıs bakır madenciliğindeki tarihi rolünü çoğu kişi bilmez.",
      "en": "The rustic wooden and steel loading pier at Gemikonağı makes for striking photography; few tourists realize Cyprus takes its very name from ancient copper mining."
    },
    "proposers": [
      "B.K.",
      "F.Y.",
      "A.A.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Eski CMC Yapıları",
          "description": "1916 yılında kurulan Cyprus Mines Corporation (CMC), 20. yüzyıl boyunca adanın en büyük bakır madenciliği işletmesi olmuştur. Gemikonağı sahilinde yer alan eski cevher işleme tesisleri, depolar ve atölyeler, Kıbrıs'ın binlerce yıllık bakır madenciliği geçmişinin sanayi devrimi sonrasındaki son anıtsal izleridir. Günümüzde endüstriyel miras meraklıları ve fotoğrafçılar için etkileyici bir açık hava hafıza alanıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Maden Demiryolu Alanı",
          "description": "Lefke ve Skouriotissa yataklarından çıkarılan bakır cevherini Gemikonağı yükleme limanına taşımak için inşa edilen dar hatlı tarihi maden demiryolunun izleri, lokomotif kalıntıları ve vagon parçaları bu alanda görülebilir. Adadaki demiryolu çağının somut bir tanığı olan hat, dönemin ağır sanayi lojistiğini gözler önüne serer.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Cengiz Topel Anıtı",
          "description": "Gemikonağı sahil yolunda yer alan anıt, 8 Ağustos 1964 Erenköy Direnişi sırasında uçağı vurularak esir düşen ve hayatını kaybeden Türkiye Cumhuriyeti'nin ilk hava harp şehidi Yüzbaşı Cengiz Topel'in anısına dikilmiştir. Paraşütle indiği noktaya yakın bir konumda yer alan anıt ve müze alanı, adanın yakın askeri ve siyasi tarihinin en sembolik duraklarındandır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gemikonağı Limanı & İskele",
          "description": "Geçmişte işlenen bakır cevherinin uluslararası kargo gemilerine yüklendiği tarihi maden iskelesi, paslanmış çelik ayakları ve devasa vinç kalıntılarıyla denizin içine doğru uzanır. Karataş (Xeros) limanının kalbi olan bu yapı, gün batımında silüetiyle deniz fotoğrafçıları için dramatik ve nostaljik bir görsel kompozisyon oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sahil Yürüyüş Yolu",
          "description": "Gemikonağı sahil şeridi boyunca uzanan sahil kordonu, balıkçı barınakları, yerel kafeler ve açık deniz manzarasıyla sakin bir yürüyüş parkuru sunar. Endüstriyel miras keşfinin ardından deniz kenarında oturup Güzelyurt Körfezi'nin dalgalarını dinlemek ve yerel deniz ürünlerini tatmak için dinlendirici bir final noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Historic CMC Copper Mining Facilities",
          "description": "Founded in 1916, the American-owned Cyprus Mines Corporation (CMC) operated the island's foremost modern copper mining and processing facility through much of the 20th century. The surviving industrial processing plants, workshops, and storage structures standing along the shoreline at Gemikonağı (Karavostasi) offer a compelling open-air perspective into Cyprus's 20th-century extractive labor history.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Historic Mine Railway Yard",
          "description": "Engineered to transport raw copper ore from the inland mines of Skouriotissa down to the coastal processing and shipping facilities at Gemikonağı, this narrow-gauge industrial railway site still preserves abandoned track sections, rail beds, and rolling stock fragments. It stands as a physical artifact of early modern mineral transport on the island.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cengiz Topel Memorial",
          "description": "Located along the coastal highway in Gemikonağı, this memorial honors Captain Cengiz Topel, a Turkish Air Force pilot whose aircraft was downed during the Erenköy clashes in August 1964. Positioned near the coastal site of the incident, the monument complex features commemorative bronze sculptures and informative panels detailing modern military history.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Gemikonağı Pier & Ore Port",
          "description": "Extending far into Morphou Bay, this historical industrial loading pier was used to transfer refined copper ore onto cargo freighters. Although now decommissioned, the weathered steel gantry and iron pylons create a dramatic coastal silhouette, making it an iconic subject for industrial and sunset photography.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Coastal Promenade Walk",
          "description": "Tracing the waterfront of Gemikonağı near the university campus, this paved coastal walkway connects small local fishing docks with relaxed seaside cafes. Looking out across Morphou Bay toward the western capes, it offers a peaceful pedestrian finale to an itinerary focused on industrial memory and coastal heritage.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Hafıza & Fotoğraf)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Heritage & Photography)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-yesilirmak",
    "slug": "bati-yesilirmak",
    "region": "bati",
    "themes": [
      "nature",
      "food",
      "coast"
    ],
    "distance": "35–50 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Soli Antik Kenti",
      "en": "Ancient Soli"
    },
    "heroImage": "/images/route-card-images/yesilirmak-strawberry.jpg",
    "title": {
      "tr": "Yeşilırmak Çilek Bahçeleri & Batı Kıyısı",
      "en": "Yeşilırmak Strawberry Fields & West Coast"
    },
    "subtitle": {
      "tr": "Soli ve Vouni'den başlayıp Lefke ve Yeşilırmak'ta yerel molalarla ilerleyen, çilek sezonunda bahçe ziyareti ve Yedidalga plajıyla biten batı rotası.",
      "en": "Winding from ancient Soli and Vouni through Lefke into the lush valley of Yeşilırmak; featuring pick-your-own strawberry farms in spring and dining on Yedidalga beach."
    },
    "intro": {
      "tr": "Soli ve Vouni'den başlayıp Lefke ve Yeşilırmak'ta yerel molalarla ilerleyen, çilek sezonunda bahçe ziyareti ve Yedidalga plajıyla biten batı rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Winding from ancient Soli and Vouni through Lefke into the lush valley of Yeşilırmak; featuring pick-your-own strawberry farms in spring and dining on Yedidalga beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Çilek sezonu (ilkbahar) için zamanlayın; Yeşilırmak'ın dev çilek heykeli ve yerel çilek ürünleri sezonun simgesi.",
      "en": "Time your visit for the spring strawberry harvest; snap a photo with Yeşilırmak's giant strawberry monument and sample homemade strawberry liqueurs and jams."
    },
    "proposers": [
      "B.S.",
      "E.A.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Soli Antik Kenti",
          "description": "Geç Hitit ve Antik Yunan dönemlerinden Roma çağına kadar uzanan Soli Antik Kenti, Kıbrıs'ın on tarihi şehir krallığından biridir. Ünlü 'Soli Kuğusu' mozaiğini barındıran Erken Hristiyanlık bazilikası, denize bakan Roma tiyatrosu ve agora kalıntılarıyla bu sahil rotasının tarihi temelini oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Vouni Sarayı",
          "description": "MÖ 5. yüzyılda sarp bir tepe üzerinde denize hakim bir noktada kurulan Vouni Sarayı, antik Marion krallığının Soli kentini gözetim altında tutmak için inşa ettiği bir kraliyet yerleşkesidir. Merkezi avlulu megaron planı, taş sarnıçları ve zirvedeki Athena Tapınağı temelleriyle Akdeniz'in en etkileyici arkeolojik manzaralarından birini sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Lefke Yerel Durak",
          "description": "Lefke'nin portakal ağaçlarıyla çevrili tarihi merkezinde yer alan bu durak, yerel halkın işlettiği küçük fırınlar ve kahvehanelerden oluşur. Geleneksel Kıbrıs köy böreği, taze sıkılmış narenciye suyu ve ceviz reçeli tadarak batı bölgesinin kendine has misafirperverliğini tatmak için ideal bir dinlenme yeridir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yeşilırmak Çilek Bahçeleri",
          "description": "Kuzey Kıbrıs'ın çilek başkenti olarak bilinen Yeşilırmak (Limnitis), dağ yamaçları arasına kurulu bereketli vadisiyle ünlüdür. İlkbahar ve erken yaz aylarında ziyaretçilere kendi elleriyle taze çilek toplama imkanı veren bahçeler, dalından koparılan meyvelerin kokusu ve tadıyla benzersiz bir tarım turizmi deneyimi yaşatır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Dev Çilek Heykeli",
          "description": "Yeşilırmak köyünün girişinde yükselen renkli dev çilek heykeli, bölgenin tarımsal kimliğini kutlayan neşeli ve popüler bir simgedir. Köyü ziyaret eden hemen her gezginin fotoğraf çektirdiği heykelin çevresinde taze çilek, çilek reçeli ve yerel narenciye ürünleri satan köylü tezgahları yer alır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yedidalga Plajı",
          "description": "Güzelyurt Körfezi'nin batı sahilinde yer alan Yedidalga kıyısı, balıkçı limanı, berrak denizi ve hemen sahil kenarındaki taze balık restoranlarıyla tanınır. Gün boyu süren bahçe ve antik kent gezilerinin ardından sakin kumsalında yüzmek ve gün batımında taze deniz mahsulleri tatmak için mükemmel bir kapanış durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Ancient Soli Archaeological Site",
          "description": "Once among the prominent ancient city-kingdoms of Cyprus, Soli prospered from the Late Bronze Age through the Roman era. Its seaside archaeological park is renowned for the 4th-century Christian basilica containing the famous swan floor mosaic, an elevated Roman theatre overlooking the sea, and extensive agora foundations.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Vouni Palace Clifftop Ruins",
          "description": "Erected on a sheer coastal ridge 250 meters above the Mediterranean around 498 BC, Vouni Palace was an unassailable redoubt built by the pro-Persian king of Marion. Featuring a monumental megaron courtyard, stone water reservoirs, and an upper sanctuary of Athena, it offers dramatic vistas across the entire western shoreline.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lefke Village Heritage Stop",
          "description": "Located within the historic Ottoman and British colonial lanes of Lefke, this village pause offers traditional bakery treats, fresh local pastries, and seasonal citrus juices. It provides a peaceful setting to meet local residents and sample authentic regional hospitality before heading toward the coast.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Yeşilırmak Strawberry Orchards",
          "description": "Recognized as the strawberry capital of Northern Cyprus, the verdant mountain valley of Yeşilırmak (Limnitis) is lined with terraced fruit farms. During the spring and early summer harvesting seasons, visitors can walk through the cultivated plots, pick ripe strawberries directly from the plants, and sample fresh berry products.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Giant Strawberry Monument",
          "description": "Standing at the roadside entrance to Yeşilırmak, this oversized strawberry monument celebrates the community's agricultural trademark. Flanked by family-operated farm stands offering jars of freshly prepared strawberry preserves and seasonal fruits, it serves as a lighthearted photo stop along the route.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Yedidalga Seaside & Fish Restaurants",
          "description": "Situated on the western curve of Morphou Bay, the coast at Yedidalga (Potamos tou Kambou) features a tranquil pebble-and-sand beach alongside an authentic small fishing pier. Its seaside taverns serve freshly landed fish and meze, providing a calm setting to swim and watch the sunset over the sea.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Nisan–Haziran (Çilek Hasadı)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "April–June (Strawberry Season)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-kormakitis",
    "slug": "bati-kormakitis",
    "region": "bati",
    "themes": [
      "coast",
      "nature",
      "scenic"
    ],
    "distance": "50–70 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Yarım–tam gün"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Kormakitis Burnu Kıyısı",
      "en": "Cape Kormakitis Coast"
    },
    "heroImage": "/images/route-card-images/cape-kormakitis.jpg",
    "title": {
      "tr": "Kormakitis Burnu & Blue Lagoon Tekne Turu",
      "en": "Cape Kormakitis & Blue Lagoon Boat Cruise"
    },
    "subtitle": {
      "tr": "Girne'nin batısında kıyı boyunca tekne turu: Kormakitis Burnu, Blue Lagoon'da yüzme, şnorkelli resif keşfi ve sakin Sadrazamköy sahili.",
      "en": "A coastal maritime adventure along the northwest headlands: navigate Cape Kormakitis, swim in the iridescent Blue Lagoon, snorkel offshore reefs, and relax on peaceful Sadrazamköy beach."
    },
    "intro": {
      "tr": "Girne'nin batısında kıyı boyunca tekne turu: Kormakitis Burnu, Blue Lagoon'da yüzme, şnorkelli resif keşfi ve sakin Sadrazamköy sahili. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A coastal maritime adventure along the northwest headlands: navigate Cape Kormakitis, swim in the iridescent Blue Lagoon, snorkel offshore reefs, and relax on peaceful Sadrazamköy beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Blue Lagoon'un berrak suyu şnorkel için ideal; tekne turları genelde Girne limanından kalkar, sabah slotunu tercih edin.",
      "en": "The pristine waters of the Blue Lagoon are extraordinary for snorkeling; boat departures usually set sail from Kyrenia harbour, so book a morning departure slot for the calmest seas."
    },
    "proposers": [
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Kormakitis Burnu Kıyısı",
          "description": "Kıbrıs'ın kuzeybatı ucunu oluşturan Kormakitis Burnu (Koruçam Burnu), kayalık falezleri ve deniz feneriyle adanın en vahşi kıyı peyzajlarından biridir. Akdeniz'in açık akıntılarıyla dövülen bu ıssız burun, rüzgarın şekillendirdiği kireçtaşı oluşumları ve el değmemiş doğasıyla doğaseverler için büyüleyici bir manzara sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Blue Lagoon Yüzme Durağı",
          "description": "Kormakitis yarımadasının korunaklı kayalık koylarında yer alan Mavi Lagün (Blue Lagoon), adını akvaryumu andıran elektrik mavisi ve turkuaz berrak sularından alır. Tekne turlarının ana demirleme noktası olan bu doğal koy, kumlu tabanı ve dalgasız yapısıyla Akdeniz'in en temiz yüzme alanlarından birini oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Şnorkel Resif Alanı",
          "description": "Kıyı falezlerinin denizle buluştuğu noktadaki su altı kayalık resifleri, zengin bir Akdeniz deniz yaşamına ev sahipliği yapar. Berrak görüş mesafesi sayesinde su altı mağaralarını, mercan oluşumlarını, orfozları, çipuraları ve deniz kestanelerini şnorkelle gözlemlemek için benzersiz bir dalış noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sadrazamköy Sahili",
          "description": "Kormakitis Burnu'nun hemen güneyinde yer alan Sadrazamköy sahili, yapılaşmadan tamamen uzak, doğal taş ve çakıl kumsallarıyla sessizliğin hakim olduğu bir kıyı şerididir. Caretta caretta kaplumbağalarının da uğrak yeri olan bu el değmemiş sahil, doğayla baş başa kalmak ve deniz sesini dinlemek için eşsiz bir sığınaktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kyrenia Limanı Dönüş",
          "description": "Batı kıyısındaki deniz ve tekne turunun ardından Girne Tarihi Limanı'na dönüş, geziye nostaljik bir kapanış sunar. Akşam güneşinin Girne Kalesi'nin taş duvarlarına vurduğu saatlerde limana yanaşmak ve rıhtımdaki kafelerde kahve yudumlamak, deniz yolculuğunun en keyifli anıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Cape Kormakitis Coastline",
          "description": "Forming the northwestern geographical extremity of Cyprus, Cape Kormakitis features rugged limestone headlands, sea arches, and a solitary coastal lighthouse. Exposed to open Mediterranean currents, this untamed windswept coast provides travelers with an uncommercialized wilderness panorama of sea and sky.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Blue Lagoon Swimming Cove",
          "description": "Tucked into the sheltered rocky coves along the cape, the Blue Lagoon is celebrated for its radiant turquoise waters and white sandy seabed. Frequented by excursion boats, its transparent, wave-free waters offer ideal conditions for swimming and diving in pristine coastal surroundings.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Reef Snorkeling Cove",
          "description": "The submerged limestone shelves and rock cavities fringing Cape Kormakitis create a thriving marine ecosystem. Snorkelers benefit from remarkable water clarity to observe sea bream, damselfish, groupers, and natural sea sponges inhabiting this preserved underwater habitat.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sadrazamköy Wild Beach",
          "description": "Stretching south from the tip of Cape Kormakitis, Sadrazamköy Beach is an undeveloped, remote coastline lined with coarse sand and shingle shelves. Free of resort crowds and occasionally hosting nesting sea turtles, it provides visitors with a tranquil setting of natural coastal solitude.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Return to Kyrenia Harbour",
          "description": "Concluding the maritime circuit with a return to the historic Old Harbour of Kyrenia brings travelers back to the animated waterfront. Docking beside centuries-old carob warehouses as the late afternoon light illuminates Kyrenia Castle provides a memorable visual finale.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Tekne & Deniz)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "May–October (Boat & Sea)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-maronit",
    "slug": "bati-maronit",
    "region": "bati",
    "themes": [
      "history",
      "food",
      "coast"
    ],
    "distance": "40–60 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Yarım–tam gün"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Koruçam Köy Meydanı",
      "en": "Koruçam Village Square"
    },
    "heroImage": "/images/route-card-images/korucam-maronites.jpg",
    "title": {
      "tr": "Koruçam Maronit Kültürü & Kormakitis Burnu",
      "en": "Koruçam Maronite Heritage & Cape Kormakitis"
    },
    "subtitle": {
      "tr": "Kendine özgü Maronit köyü, dini mirası, geleneksel yemek kültürü ve batının uzak kıyısı. Postkarta hiç girmemiş bir Kıbrıs.",
      "en": "A rare cultural immersion into the historic Maronite village, its Catholic cathedral, traditional culinary customs, and the raw western cape. A side of Cyprus unseen on postcards."
    },
    "intro": {
      "tr": "Kendine özgü Maronit köyü, dini mirası, geleneksel yemek kültürü ve batının uzak kıyısı. Postkarta hiç girmemiş bir Kıbrıs. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A rare cultural immersion into the historic Maronite village, its Catholic cathedral, traditional culinary customs, and the raw western cape. A side of Cyprus unseen on postcards. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Köyde yabancılara el sallanır ve içemeyeceğiniz kadar kahve ikram edilir — acele etmeyin, bu rotanın ruhu yavaşlıkta.",
      "en": "Locals in the village square will warmly wave you over and treat you to more Cypriot coffee than you can drink — don't rush, the beauty of this route lies in taking things slow."
    },
    "proposers": [
      "C.A.",
      "F.Y.",
      "O.O.",
      "R.J."
    ],
    "stops": {
      "tr": [
        {
          "name": "Koruçam Köy Meydanı",
          "description": "Kuzey Kıbrıs'taki Maronit Katolik toplumunun ana merkezi olan Koruçam (Kormakitis), Orta Çağ'da Lübnan'dan göç eden Maronitlerin kültürel mirasını ve Arapça kökenli özgün Sanna lehçesini koruyan tarihi bir yerleşimdir. Köy meydanındaki asırlık kahvehaneler, yerel lokantalar ve samimi köy atmosferi, adanın en özgün çok kültürlü duraklarından birini oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "St. George Maronit Katedrali",
          "description": "Koruçam köyünün merkezinde görkemli bir şekilde yükselen St. George Katedrali, 1930'lu yıllarda inşa edilmiş adanın en büyük Maronit ibadethanesidir. Çift çan kulesi, mermer sunakları ve Doğu Katolik liturjisinin izlerini taşıyan iç mekanıyla köyün dini ve toplumsal hayatının odak noktasını oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Geleneksel Maronit Yemek Durağı",
          "description": "Koruçam meydanındaki geleneksel aile tavernaları, Lübnan ve Kıbrıs mutfaklarının yüzyıllar içinde harmanlanmasıyla oluşan özgün lezzetler sunar. Fırında kuzu kleftiko, el yapımı mezeler, taze hellim ve köy şarapları, hafta sonları adanın dört bir yanından gelen ziyaretçilerin vazgeçilmez gastronomi deneyimidir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Koruçam Sahili",
          "description": "Köyün kuzeybatısında yer alan Koruçam sahili, kireçtaşı kayalıklar arasına gizlenmiş doğal kumsalları ve tertemiz deniziyle bilinir. Turistik tesisleşmenin olmadığı bu sakin sahil şeridi, Akdeniz'in serin sularında yüzmek ve doğanın sessizliğini dinlemek için ideal bir mola yeridir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kormakitis Burnu",
          "description": "Kıbrıs haritasının kuzeybatı sivrilen ucunu oluşturan Kormakitis Burnu, fırtınaların ve dalgaların oyduğu vahşi falezleri ve deniz feneriyle adanın en etkileyici coğrafi bitiş noktalarındandır. Akdeniz'in sonsuz ufkuyla baş başa kalmak ve gün batımının kızıl tonlarını izlemek için unutulmaz bir final noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Koruçam Village Square",
          "description": "Serving as the cultural center of the Maronite Catholic community in Cyprus, Koruçam (Kormakitis) preserves centuries of heritage tracing back to medieval Lebanese migrations, including the endangered Cypriot Arabic dialect (Sanna). The central square, lined with traditional coffee houses and family taverns, offers an authentic bi-cultural experience.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "St. George Maronite Cathedral",
          "description": "Dominating the village skyline, the Cathedral of Saint George was completed in the 1930s to replace an earlier church and stands as the principal Maronite cathedral in northern Cyprus. Its twin bell towers, marble altars, and distinctive Eastern Catholic liturgical appointments represent the enduring faith of the community.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Traditional Maronite Tavern",
          "description": "The rustic, family-run taverns in Koruçam village are celebrated across the island for their unique fusion of Levant and Cypriot culinary traditions. Specializing in slow-roasted lamb kleftiko, artisan cheeses, and house-cured mezes, they provide a sought-after cultural dining stop.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Koruçam Rocky Coastline",
          "description": "Situated northwest of the village, the Koruçam coastal stretch comprises natural sandy pockets set between low limestone bluffs. Free of large commercial resorts, its clear, refreshing waters and quiet shore provide an unhurried seaside stop along the western headlands.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cape Kormakitis Headland",
          "description": "Marking the far northwestern tip of Cyprus, Cape Kormakitis features dramatic wave-cut marine benches, a navigational beacon, and windswept shrublands. Projecting boldly into the Mediterranean, it offers sweeping maritime horizons and an exceptional vantage point for sunset observation.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Hafta Sonu & Bahar)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (Weekends & Spring)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "bati-eul",
    "slug": "bati-eul",
    "region": "bati",
    "themes": [
      "coast",
      "food",
      "scenic"
    ],
    "distance": "20–30 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "LAÜ Kampüsü",
      "en": "EUL Campus"
    },
    "heroImage": "/images/route-card-images/lefke-campus.jpg",
    "title": {
      "tr": "Lefke Üniversite Çevresi & Aphrodite Sahili",
      "en": "Lefke University Quarter & Aphrodite Coast"
    },
    "subtitle": {
      "tr": "Lefke Avrupa Üniversitesi çevresinden başlayıp sahil restoranları ve gün batımı noktalarıyla ilerleyen, akademik enerjiyle kıyı huzurunu birleştiren rahat bir rota.",
      "en": "Beginning around the scenic campus of European University of Lefke, branching out to seaside seafood taverns and sunset viewpoints; blending youthful academic energy with coastal peace."
    },
    "intro": {
      "tr": "Lefke Avrupa Üniversitesi çevresinden başlayıp sahil restoranları ve gün batımı noktalarıyla ilerleyen, akademik enerjiyle kıyı huzurunu birleştiren rahat bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Beginning around the scenic campus of European University of Lefke, branching out to seaside seafood taverns and sunset viewpoints; blending youthful academic energy with coastal peace. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Aphrodite sahilindeki restoranlar gün batımına karşı konumlanmış; akşam yemeği için bu saati kollayın.",
      "en": "The casual fish taverns along Aphrodite Beach are positioned perfectly for open-sea sunsets; reserve your dinner table for just before twilight."
    },
    "proposers": [
      "V.R."
    ],
    "stops": {
      "tr": [
        {
          "name": "LAÜ Kampüsü",
          "description": "Lefke tepelerinde, Trodos Dağları manzarasına hakim bir konumda yer alan Lefke Avrupa Üniversitesi kampüsü; modern eğitim binaları, palmiyeli bahçeleri ve onlarca farklı ülkeden gelen öğrencilerin oluşturduğu çok kültürlü dinamik atmosferiyle bölgeye genç bir canlılık katar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Lefke Merkez",
          "description": "Kampüsten kısa bir sürüşle ulaşılan Lefke kasaba merkezi, Cittaslow kimliğini yansıtan sakin sokakları, Osmanlı dönemi ahşap cumbalı sarı taş konakları ve tarihi su arklarıyla modern üniversite hayatının hemen yanı başında korunmuş bir geleneksel dünya sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Aphrodite Sahil Restoranı",
          "description": "Gemikonağı ile Gaziveren arasındaki sahil bandında yer alan restoran, denize sıfır terasları ve taze Akdeniz balıklarıyla ünlüdür. Güzelyurt Körfezi'nin dalgaları eşliğinde sunulan mezeleri ve deniz ürünleri menüsü, öğle veya akşam yemekleri için keyifli bir gastronomi durağı oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sahil Yürüyüşü",
          "description": "Gaziveren sahil şeridi boyunca uzanan kum ve çakıl karışımı sahil hattı, sakin deniz esintisi eşliğinde yürüyüş yapmak ve Güzelyurt Körfezi'nin açık sularını seyretmek için huzurlu bir rota sunar. Bölgedeki sörf kulüpleri ve sahil yürüyüş aksı dinlendirici bir atmosfer sağlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gün Batımı Noktası",
          "description": "Batı kıyısında denizin hemen üzerine inen bu sahil noktası, güneşin batı ufkunda Akdeniz'e batışını kesintisiz bir açıyla izleme olanağı tanır. Akşamüstü kızıla bürünen gökyüzü ve deniz yansımaları, günü tamamlamak için dingin ve romantik bir manzara sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "European University of Lefke Campus",
          "description": "Perched on the scenic foothills overlooking the town of Lefke and Morphou Bay, the European University of Lefke (EUL) campus features modern academic facilities, landscaped gardens, and an international student body that injects cosmopolitan energy into the historic district.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Lefke Town Centre",
          "description": "A short drive downhill leads to the historic core of Lefke, characterized by its Cittaslow rhythm, stone-built Ottoman residences with overhanging timber bays, and fresh spring water canals, offering an authentic traditional contrast to modern university life.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Aphrodite Coastal Restaurant",
          "description": "Situated directly on the coastal strip between Gemikonağı and Gaziveren, this waterfront restaurant is known for its open sea terraces and fresh Mediterranean seafood. Its wide selection of local mezes and grilled catch provides an inviting culinary stop beside the surf.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Scenic Coastal Stroll",
          "description": "Extending along the Gaziveren coastal fringe, this tranquil shoreline walk provides unbroken views across Morphou Bay. Favored for its uncrowded beaches and gentle sea breezes, it offers a peaceful environment for casual strolling and coastal recreation.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Panoramic Sunset Point",
          "description": "Positioned right on the westward-facing shore, this viewpoint commands an unobstructed view across the open waters of the Mediterranean. As dusk falls, the horizon transitions through rich hues of gold and crimson, providing a serene conclusion to the west-coast tour.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Sahil & Kampüs)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "May–October (Coast & Campus)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "dag-buffavento",
    "slug": "dag-buffavento",
    "region": "daglar",
    "themes": [
      "nature",
      "history",
      "scenic"
    ],
    "distance": "50–70 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Zor (tırmanış)",
      "en": "Challenging (climb)"
    },
    "startFinish": {
      "tr": "Buffavento Kalesi",
      "en": "Buffavento Castle Trailhead"
    },
    "heroImage": "/images/route-card-images/buffavento-castle.jpg",
    "title": {
      "tr": "Buffavento & Unutulmuş Manastırlar",
      "en": "Buffavento Castle & Forgotten Monasteries"
    },
    "subtitle": {
      "tr": "Kuzey kıyısının üzerinde saklı dramatik dağ rotası: Buffavento Kalesi, orman manzaraları, Sourp Magar Ermeni Manastırı ve Antiphonitis Kilisesi.",
      "en": "A dramatic mountain route high above the northern coastline: the rugged crags of Buffavento Castle, fragrant pine forests, Sourp Magar Armenian Monastery, and historic Antiphonitis Church."
    },
    "intro": {
      "tr": "Kuzey kıyısının üzerinde saklı dramatik dağ rotası: Buffavento Kalesi, orman manzaraları, Sourp Magar Ermeni Manastırı ve Antiphonitis Kilisesi. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A dramatic mountain route high above the northern coastline: the rugged crags of Buffavento Castle, fragrant pine forests, Sourp Magar Armenian Monastery, and historic Antiphonitis Church. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Buffavento 'rüzgarların meydan okuyanı' demek; zirveye 30–40 dakikalık tırmanışta gölge yok, sabah serinde çıkın. Ödül 360 derece manzara.",
      "en": "Buffavento translates to 'Defier of the Winds'; the 30–40 minute uphill hike has little shade, so set off in the morning chill. The reward is a stupendous 360-degree island vista."
    },
    "proposers": [
      "U.S.",
      "C.A.",
      "A.S.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Buffavento Kalesi",
          "description": "Deniz seviyesinden 950 metre yükseklikte sarp bir zirveye kurulan Buffavento (Rüzgara Meydan Okuyan), Beşparmak Dağları'ndaki kalelerin en yüksek ve en sarp olanıdır. 11. yüzyıl Bizans gözetleme kulesi olarak başlayan kale, Lüzinyanlar döneminde siyasi suçluların hapsedildiği bir zindan olarak kullanılmıştır. Yaklaşık 45 dakikalık dik taş basamaklı tırmanışın ardından ulaşılan zirve, tüm adayı kuşbakışı gören 360 derecelik inanılmaz bir panorama sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Alevkaya Piknik Alanı",
          "description": "Beşparmak sırtında, kızılçam ve servi ağaçlarının çevrelediği Alevkaya, dağ havası ve serin gölgeleriyle bilinen popüler bir açık hava dinlenme alanıdır. Çevresindeki zengin flora, endemik orkide türleri ve yürüyüş patikalarıyla kale tırmanışının ardından soluklanmak için ideal bir doğa durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sourp Magar Ermeni Manastırı",
          "description": "Alevkaya ormanlarının derinliklerinde bir vadide saklanan Sourp Magar Manastırı, MS 1000 civarında Kıpti Hristiyanlar tarafından kurulmuş ve 15. yüzyılda Ermeni cemaatine geçmiştir. Yüzyıllar boyunca adadaki Ermenilerin ana hac merkezi ve yazlık dinlenme yeri olan yapı, terk edilmiş taş kemerleri, geniş avlusu ve Akdeniz'e bakan manzarasıyla mistik bir atmosfer taşır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Antiphonitis Kilisesi",
          "description": "Esentepe'nin güneyindeki ormanlık dağ yamacında yer alan 12. yüzyıl Bizans kilisesi Antiphonitis (Cevap Veren Mesih), sekizgen plan üzerine oturtulmuş kubbesi ve revaklı narteksiyle Kıbrıs'ın mimari açıdan en özgün kiliselerindendir. İç duvarlarında yer alan 12. ve 15. yüzyıllara ait fresk kalıntıları, Bizans dini sanatının zirve örneklerindendir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Esentepe Dağ Seyir Noktası",
          "description": "Antiphonitis Kilisesi'nden Esentepe köyüne doğru inen dağ yolu üzerindeki seyir noktası, dağların dik yamaçlarından Akdeniz'in masmavi sularına uzanan derin vadi manzaraları sunar. Çam ormanları ile kıyı şeridinin buluştuğu bu yüksek nokta, dağ rotasının büyüleyici kapanış fotoğraf durağıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Buffavento Castle",
          "description": "Perched at an elevation of 950 meters on a sheer limestone pinnacle, Buffavento Castle—meaning 'Defier of the Winds'—is the highest and most precipitous fortress in the Kyrenia Range. Originating as a Byzantine beacon station and later utilized as a high-security prison by the Lusignans, an ascent of roughly 45 minutes up a rock-hewn stairway rewards hikers with unparalleled 360-degree views across the entire breadth of Cyprus.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Alevkaya Forest Picnic Grounds",
          "description": "Set along the mountain ridge surrounded by Calabrian pines and wild cypress trees, Alevkaya is a cherished forestry recreation area known for its refreshing mountain air. Frequented by botanists for its rich endemic flora and wild orchids, it provides a quiet natural setting to rest after the rugged fortress hike.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sourp Magar Armenian Monastery Ruins",
          "description": "Secluded within a forested valley below the ridge, the Monastery of Saint Makarios (Sourp Magar) was founded around 1000 AD by Coptic monks before passing to the Armenian community in the 15th century. Long functioning as the premier Armenian pilgrimage site and monastic retreat in Cyprus, its evocative stone ruins and cloistered courtyards overlook the northern coastline.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Antiphonitis Church",
          "description": "Hidden in a forested ravine south of Esentepe, the 12th-century Byzantine Church of Christ Antiphonitis is an architectural treasure featuring a dome carried on eight freestanding pillars. The interior preserves important 12th-century Byzantine wall paintings and 15th-century post-Byzantine frescoes, including a celebrated depiction of the Last Judgment.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Esentepe Mountain Viewpoint",
          "description": "Located along the winding mountain descent toward Esentepe village, this elevated vantage point provides dramatic views across rugged pine-covered gorges dropping down to the Mediterranean Sea. It serves as an ideal landscape photography stop to conclude a day of mountain exploration.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Mayıs & Eylül–Kasım",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–May & September–November",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "dag-ridge",
    "slug": "dag-ridge",
    "region": "daglar",
    "themes": [
      "nature",
      "scenic"
    ],
    "distance": "60–85 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Yarım–tam gün"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Değirmenlik Orman Girişi",
      "en": "Değirmenlik Forest Entrance"
    },
    "heroImage": "/images/route-card-images/besparmak.jpg",
    "title": {
      "tr": "Beşparmak Sırtı & Orman Kaçamağı",
      "en": "Kyrenia Ridge & Forest Escapes"
    },
    "subtitle": {
      "tr": "Değirmenlik orman girişinden başlayıp Beşparmak sırt yolu boyunca panoramik manzaralarla ilerleyen, piknik ve köy kafesi molalı bir dağ rotası.",
      "en": "Setting off from the Değirmenlik mountain pass along the ridge road of the Five Finger Mountains; filled with sweeping panoramas, shaded picnic spots, and rustic village cafés."
    },
    "intro": {
      "tr": "Değirmenlik orman girişinden başlayıp Beşparmak sırt yolu boyunca panoramik manzaralarla ilerleyen, piknik ve köy kafesi molalı bir dağ rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Setting off from the Değirmenlik mountain pass along the ridge road of the Five Finger Mountains; filled with sweeping panoramas, shaded picnic spots, and rustic village cafés. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "İlkbahar (Mart–Nisan) yaban çiçekleri ve orkidelerin dağ yamaçlarını kapladığı en iyi dönem.",
      "en": "Spring (March to April) is by far the most magical season, when rare wild orchids and carpets of colourful cyclamens blanket the rocky mountain slopes."
    },
    "proposers": [
      "A.T.",
      "D.O.",
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Değirmenlik Orman Girişi",
          "description": "Mesarya Ovası'ndan Beşparmak Dağları'na tırmanan Değirmenlik (Kythrea) orman girişi, çam ağaçları ve zeytinliklerle bezeli dik dağ patikalarının başlangıcıdır. Tarih boyunca bol su kaynakları ve un değirmenleriyle tanınan bölgeden başlayan bu tırmanış, ovanın sıcaklığından dağın serinliğine geçiş sağlar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Beşparmak Sırt Yolu",
          "description": "Dağ silsilesinin omurgasını takip eden asfalt ve stabilize sırt yolu, adanın en etkileyici panoramik sürüş güzergahıdır. Yol boyunca bir tarafta masmavi Akdeniz kıyıları, diğer tarafta ise sonsuz Mesarya Ovası ve uzaktaki Trodos Dağları aynı anda izlenebilir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Panoramik Seyir Noktası",
          "description": "Sırt yolu üzerindeki en yüksek kaya çıkıntılarından birinde yer alan seyir terası, adanın coğrafi bölünüşünü tek bir bakışta kavramayı sağlar. Karstik kireçtaşı kulelerin arasından esen serin dağ rüzgarı eşliğinde fotoğraf çekmek için mükemmel bir duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Orman Piknik Alanı",
          "description": "Kızılçam ve servi ağaçlarının gölgesinde kurulmuş olan Alevkaya yakınlarındaki piknik alanı, ahşap masaları ve temiz dağ havasıyla dinlenmek için ideal bir noktadır. Doğa yürüyüşü yapanların ve yerli halkın temiz hava almak için tercih ettiği huzurlu bir orman köşesidir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Herbaryum (Alevkaya)",
          "description": "Alevkaya Orman İstasyonu bünyesinde yer alan Herbaryum, Kıbrıs'ın zengin bitki örtüsünü ve adaya özgü endemik türleri tanıtan bilimsel bir botanik merkezidir. Kurutulmuş bitki koleksiyonları, fotoğraflar ve bilgilendirici panolarla Kıbrıs'ın yabani orkideleri ve nadir florası hakkında eşsiz bilgiler sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Köy Kafesi",
          "description": "Dağ sırtından vadiye inen yolda yer alan geleneksel dağ köyü kahvehanesi, asma çardakları altında yerel misafirperverliği sunar. Taze demlenmiş Kıbrıs kahvesi, dağ kekiği çayı ve ev yapımı ceviz macunu eşliğinde rota boyunca çekilen fotoğrafları incelemek için samimi bir mola yeridir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Değirmenlik Forest Pass",
          "description": "Ascending from the Mesaoria plain into the Kyrenia Range, the forest gateway above Değirmenlik (Kythrea) marks the start of the high ridge trail. Historically famous for its perennial spring and water mills, this ascent marks the transition from low-lying agricultural plains to cool pine-clad ridges.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Besparmak Mountain Ridge Road",
          "description": "Following the spine of the Kyrenia mountain range, this ridge-top route delivers one of the most scenic road drives in Cyprus. The road presents simultaneous dual vistas: the sparkling northern Mediterranean coast on one side and the expansive, golden Mesaoria plain on the other.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Panoramic Ridge Lookout",
          "description": "Situated on a natural rocky ledge high above the tree line, this scenic viewpoint offers uninhibited sightlines taking in the dramatic topography of the island. Breezy and quiet, it is a favored stop for panoramic photography across the northern coastline and deep mountain ravines.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Pine Forest Picnic Area",
          "description": "Sheltered beneath the dense canopy of Calabrian pine and cypress woods near Alevkaya, this recreation ground features shaded timber tables and clean mountain air. It provides a peaceful setting for outdoor relaxation along the high ridge route.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Alevkaya Herbarium & Botanical Station",
          "description": "Housed at the Alevkaya Forestry Station, the Herbarium is dedicated to documenting and exhibiting the rich botanical diversity of Cyprus. It features a comprehensive collection of pressed plant specimens, color illustrations, and educational exhibits focusing on the island's rare endemic flora and wild orchids.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Village Coffee House",
          "description": "Located in a hillside village as the mountain road descends, this rustic coffee house provides outdoor seating under grapevine trellises. Offering freshly brewed Cypriot coffee, mountain herbal infusions, and traditional fruit preserves, it serves as a comforting final stop on the ridge tour.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Kasım (Serin Dağ Havası)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–November (Cool Mountain Air)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "dag-dam",
    "slug": "dag-dam",
    "region": "daglar",
    "themes": [
      "nature",
      "scenic"
    ],
    "distance": "35–50 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Geçitköy Barajı",
      "en": "Geçitköy Reservoir"
    },
    "heroImage": "/images/route-card-images/gecitkoy.jpg",
    "title": {
      "tr": "Geçitköy Barajı & Çam Ormanı",
      "en": "Geçitköy Reservoir & Pine Forest Trail"
    },
    "subtitle": {
      "tr": "Geçitköy Barajı'nın sessiz suları, çam ormanları, taş evli köyler ve manzara noktalarını birleştiren sakin bir kırsal rota. Değirmenlik köyleriyle birleştirilebilir.",
      "en": "Serene turquoise waters of Geçitköy Dam, cooling pine woods, traditional stone villages, and panoramic ridge overlooks. Can easily be connected with Değirmenlik and Gönyeli."
    },
    "intro": {
      "tr": "Geçitköy Barajı'nın sessiz suları, çam ormanları, taş evli köyler ve manzara noktalarını birleştiren sakin bir kırsal rota. Değirmenlik köyleriyle birleştirilebilir. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Serene turquoise waters of Geçitköy Dam, cooling pine woods, traditional stone villages, and panoramic ridge overlooks. Can easily be connected with Değirmenlik and Gönyeli. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Doğa yürüyüşü ve piknik için ideal; hafta içi neredeyse tamamen sizindir. Değirmenlik ve Gönyeli köyleriyle birleştirilebilir.",
      "en": "Ideal for easy nature walks and peaceful family picnics; on weekdays, you will practically have the reservoir viewing trails entirely to yourself."
    },
    "proposers": [
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Geçitköy Barajı",
          "description": "Türkiye'den boru hattıyla Akdeniz'in altından gelen tatlı suyun depolandığı Geçitköy Barajı, devasa su aynası ve çevresini saran çam ormanlarıyla adanın en etkileyici mühendislik ve doğa alanlarından biridir. Turkuaz renkli durgun suları, su kuşları ve dağ yamaçlarıyla birleşerek huzurlu bir göl manzarası oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Çam Ormanı Patikası",
          "description": "Baraj gölünü çevreleyen tepeler boyunca uzanan toprak orman patikaları, kızılçam ağaçları ve dağ kekiği kokuları arasında doğa yürüyüşü imkanı sağlar. Gölün farklı açılardan su yansımalarını izlemek ve temiz dağ havası solumak için popüler bir yürüyüş parkurudur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Geçitköy Köyü (Taş Evler)",
          "description": "Baraj gölünün yukarısında yer alan tarihi Geçitköy (Panagra), sarı kesme taştan inşa edilmiş geleneksel Kıbrıs evleri ve dar sokaklarıyla kırsal mimariyi korumuştur. Çevresindeki zeytinlikler ve sakin köy meydanı, telaşsız bir köy hayatına tanıklık etmek için keyifli bir duraktır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Piknik Alanı",
          "description": "Baraj gölüne bakan yüksek bir yamaçta, gölgeli çam ağaçlarının altına kurulmuş piknik alanı; ahşap bankları ve göl manzarasıyla aileler ve doğaseverler için ideal bir dinlenme yeridir. Açık havada atıştırmak ve manzaranın tadını çıkarmak için ferah bir ortam sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Panoramik Baraj Manzarası",
          "description": "Geçitköy-Çamlıbel yolu üzerindeki seyir noktasından bakıldığında, baraj gölü, baraj seti ve arkasındaki masmavi Akdeniz aynı kadraja girer. Özellikle gün batımı saatlerinde su yüzeyinde oluşan altın yansımaları fotoğraflamak için rotanın en gözde görsel noktasıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Geçitköy Reservoir & Dam",
          "description": "Serving as the terminal reservoir for the freshwater pipeline traversing the Mediterranean seabed from mainland Turkey, the Geçitköy Reservoir is an impressive modern engineering landmark. Its broad turquoise water surface, framed by pine-covered hills, forms a serene inland lake setting.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Pine Forest Walking Trail",
          "description": "Winding through fragrant Calabrian pine groves on the hillsides flanking the reservoir, these quiet unpaved trails are well-suited for nature walks and trail running. Elevated trail sections offer scenic water reflections across the mountain basin.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Geçitköy Historic Stone Village",
          "description": "Perched above the reservoir, the historic village of Geçitköy (historically Panagra) features well-preserved yellow sandstone masonry cottages and rustic agricultural courtyards. Framed by centuries-old olive orchards, it offers an authentic view into traditional rural life.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Scenic Shaded Picnic Grounds",
          "description": "Set within shaded pine woods overlooking the reservoir, this recreational picnic area provides timber tables and tranquil forest clearings. It provides a peaceful setting for travelers to pause for an outdoor lunch while enjoying elevated lake views.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Panoramic Dam Viewpoint",
          "description": "Situated at an elevated roadside vantage point along the road toward Çamlıbel, this scenic viewpoint provides a sweeping vista capturing the turquoise reservoir waters, the dam structure, and the open sea on the horizon.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Şubat–Mayıs (Yeşil Doğa Sezonu)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "February–May (Lush Green Season)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "dag-olive",
    "slug": "dag-olive",
    "region": "daglar",
    "themes": [
      "nature",
      "scenic"
    ],
    "distance": "25–35 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Anıtsal Zeytinlik",
      "en": "Monumental Olive Groves"
    },
    "heroImage": "/images/route-card-images/monumental-olive-trees.jpg",
    "title": {
      "tr": "Kalkanlı Anıtsal Zeytinlikler & ODTÜ",
      "en": "Kalkanlı Monumental Olive Groves & METU"
    },
    "subtitle": {
      "tr": "Yüzlerce yaşında anıtsal zeytin ağaçları, vadi manzaraları, Çoban Mağarası ve ODTÜ kampüsünün huzurlu çevresi. Fotoğrafçılar için özel.",
      "en": "Centuries-old monumental olive trees, scenic valley vistas, Shepherd's Cave, and the serene surroundings of the METU Northern Cyprus campus. A photographer's dream."
    },
    "intro": {
      "tr": "Yüzlerce yaşında anıtsal zeytin ağaçları, vadi manzaraları, Çoban Mağarası ve ODTÜ kampüsünün huzurlu çevresi. Fotoğrafçılar için özel. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Centuries-old monumental olive trees, scenic valley vistas, Shepherd's Cave, and the serene surroundings of the METU Northern Cyprus campus. A photographer's dream. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Zeytin ağaçlarının bazıları binlerce yıllık; en iyi ışık için sabah erken ya da gün batımına yakın gidin.",
      "en": "Several monumental olive trees here are over 800 years old; visit in the soft morning or late afternoon light when the ancient gnarled trunks look truly majestic."
    },
    "proposers": [
      "A.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Anıtsal Zeytinlik",
          "description": "Kalkanlı köyü yakınlarında koruma altında bulunan bu özel alan, yaşları 500 ile 1000 yıl arasında değişen yaklaşık 2000 adet anıtsal zeytin ağacına ev sahipliği yapar. Lüzinyan ve Venedik dönemlerinden bu yana ürün vermeye devam eden, gövdeleri heykelsi kıvrımlara bürünmüş bu kadim ağaçlar, Akdeniz'in en değerli yaşayan doğal anıtları arasındadır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Çoban Mağarası",
          "description": "Anıtsal zeytinliklerin kenarındaki kireçtaşı yamaçta yer alan Çoban Mağarası, geçmiş yüzyıllarda hayvan otlatan çobanların yağmurdan ve sıcaktan korunmak için kullandığı doğal bir kaya sığınağıdır. Bölgenin pastoral geçmişini yansıtan mağara, yürüyüş parkuru üzerindeki ilgi çekici jeolojik duraklardan biridir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kalkanlı Vadi Manzarası",
          "description": "Zeytinliklerin arasından geçen patikaların ulaştığı vadi sırtı, Güzelyurt Ovası'na ve narenciye bahçelerine doğru açılan geniş bir görüş açısı sunar. Sabahın erken saatlerinde veya gün batımına yakın zamanlarda, asırlık ağaç gövdelerinin üzerine düşen ışık oyunlarını fotoğraflamak için mükemmeldir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "ODTÜ Kampüs Alanı",
          "description": "Kalkanlı tepelerinde kurulu Orta Doğu Teknik Üniversitesi Kuzey Kıbrıs Kampüsü, modern mimarisi, ödüllü peyzaj tasarımı ve yeşil yerleşke alanlarıyla bölgenin modern çehresini temsil eder. Sakin kampüs yolları ve sosyal tesisleri, doğa yürüyüşü sonrasında dinlenmek için çağdaş bir mola imkanı sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Anı Ağaçları Dinlenme Noktası",
          "description": "Zeytin anıtlarının en görkemlilerinin bulunduğu gölgeli alanda oluşturulmuş ahşap oturma alanları, ziyaretçilerin doğanın huzurunu hissetmesini sağlar. Yüzlerce yıllık ağaçların gölgesinde oturup rüzgarın gümüşi yapraklardaki fısıltısını dinlemek bu rotanın en dingin anıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Monumental Olive Groves",
          "description": "Located near Kalkanlı village, this designated nature protection area contains nearly 2,000 monumental olive trees, many dating between 500 and 1,000 years of age. Originating in the Lusignan and Venetian periods, their massive, sculptural gnarled trunks stand as remarkable living historical monuments of the Mediterranean.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Shepherd's Cave",
          "description": "Hollowed into a limestone ridge bordering the monumental olive groves, the Shepherd's Cave is a natural rock chamber historically utilized by local pastoralists for shade and storm shelter. The rustic site adds geological interest to the walking circuit.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kalkanlı Valley Viewpoint",
          "description": "Following trails along the ridge above the grove reveals open vistas across the agricultural lowlands of Morphou Bay. In morning and late afternoon light, the long shadows cast through the ancient silver-green olive canopies create exceptional landscape photography scenes.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "METU Northern Cyprus Campus",
          "description": "Set on the rolling terrain of Kalkanlı, Middle East Technical University Northern Cyprus Campus features contemporary architecture, botanical landscaping, and modern academic facilities. Its quiet plazas and cafes offer a convenient, welcoming resting stop.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Monumental Trees Resting Point",
          "description": "Arranged beneath the canopy of some of the oldest surviving olive specimens, this shaded rest area provides timber benches where hikers can sit in peace. Listening to the breeze rustle through ancient olive foliage provides a serene conclusion to this nature trail.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Ekim–Mayıs (Zeytin & Yaban Çiçeği)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "October–May (Olive & Wildflowers)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "dag-beylerbeyi",
    "slug": "dag-beylerbeyi",
    "region": "daglar",
    "themes": [
      "history",
      "food",
      "nature"
    ],
    "distance": "15–25 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Beylerbeyi Köy Meydanı",
      "en": "Beylerbeyi Village Square"
    },
    "heroImage": "/images/route-card-images/pottery.jpg",
    "title": {
      "tr": "Beylerbeyi Zanaat & Zeytinlik Turu",
      "en": "Beylerbeyi Artisan Crafts & Olive Trails"
    },
    "subtitle": {
      "tr": "Beylerbeyi'nin çömlek atölyeleri, zeytinlikleri ve sade köy hayatını keşfeden, yerel lezzetlerle biten bir kültür-doğa rotası.",
      "en": "Discover traditional pottery workshops, tranquil olive groves, and slow village life in hillside Beylerbeyi, ending with authentic local flavours."
    },
    "intro": {
      "tr": "Beylerbeyi'nin çömlek atölyeleri, zeytinlikleri ve sade köy hayatını keşfeden, yerel lezzetlerle biten bir kültür-doğa rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Discover traditional pottery workshops, tranquil olive groves, and slow village life in hillside Beylerbeyi, ending with authentic local flavours. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Çömlek atölyesinde ustaların çalışmasını izleyebilir, hatta kendi parçanızı yapabilirsiniz — çocuklu aileler için ideal.",
      "en": "You can watch master potters shaping clay on the wheel and even try making your own ceramic piece — an engaging, hands-on experience for adults and kids alike."
    },
    "proposers": [
      "A.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Beylerbeyi Köy Meydanı",
          "description": "Bellapais Manastırı'nın eteklerinde yer alan Beylerbeyi köy meydanı, begonvillerle sarılı taş evleri, tarihi çınarları ve asırlık zeytin ağaçlarıyla Girne'nin en zarif yamaç yerleşimidir. Lawrence Durrell'in 'Huzur Ağacı' (Tree of Idleness) altında oturduğu tarihi kahvehanelerin bulunduğu meydan, köyün edebiyat ve kültür geçmişini yansıtır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Çalışan Çömlek Atölyesi",
          "description": "Köy sokaklarında yer alan geleneksel çömlek ve seramik atölyeleri, Kıbrıs'ın binlerce yıllık pişmiş toprak zanaatını yaşatır. Usta ellerin tornada şekillendirdiği amforaları, zeytinyağı testilerini ve dekoratif seramikleri izleyebilir, geleneksel yöntemlerle çamurdan eşya yapımına bizzat katılabilirsiniz.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Zeytinlikler",
          "description": "Beylerbeyi yamaçlarından Akdeniz'e doğru teraslar halinde inen zeytinlikler, yüzlerce yıllık zeytin ve keçiboynuzu ağaçlarıyla kaplıdır. Taş duvarlarla örülmüş yürüyüş yolları boyunca yapılan gezintiler, deniz manzarası eşliğinde ada tarımının kadim köklerine tanıklık etme fırsatı sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Köy Öğle Yemeği Durağı",
          "description": "Köy merkezindeki avlulu geleneksel lokantalar, odun fırınında pişen kleftiko, ev yapımı hellim börekleri, taze mevsim salataları ve yerel şaraplarla bezeli zengin Kıbrıs sofraları sunar. Manastırın Gotik kulelerine bakan teraslarda oturmak, geziyi otantik bir gastronomi deneyimiyle taçlandırır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Beylerbeyi (Bellapais) Village Square",
          "description": "Set on the hillside below Bellapais Abbey, the village square of Beylerbeyi is framed by stone townhouses, vibrant bougainvillea, and mature plane trees. The square is famously home to the historic Tree of Idleness, celebrated by British author Lawrence Durrell in his classic memoir 'Bitter Lemons'.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Active Ceramic & Pottery Workshop",
          "description": "Located along the village alleys, these active pottery and ceramic studios maintain Cyprus's ancient terracotta craft traditions. Visitors can observe master artisans shaping earthenware amphorae and jugs on foot-powered wheels, and can participate in hands-on pottery workshops.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Centuries-Old Olive Groves",
          "description": "Descending in stone-retained terraces from the village toward the sea, these ancient groves feature mature olive and carob trees. Walking between the dry-stone walls provides scenic perspectives looking toward Kyrenia while highlighting traditional tree crop cultivation.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Traditional Village Lunch Stop",
          "description": "Traditional courtyard restaurants in the village serve slow-cooked clay-oven kleftiko, fresh halloumi pastries, and seasonal meze dishes. Dining on terraces overlooking the stone arches of Bellapais Abbey and the coastline provides an authentic local culinary conclusion.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (Ekim Zeytin Festivali)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "All Year (October Olive Festival)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "dag-villages",
    "slug": "dag-villages",
    "region": "daglar",
    "themes": [
      "history",
      "food"
    ],
    "distance": "45–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Karmi Köyü",
      "en": "Karmi Village"
    },
    "heroImage": "/images/route-card-images/secret-mountain-villages.jpg",
    "title": {
      "tr": "Gizli Köyler & Otantik Yerel Hayat",
      "en": "Secret Mountain Villages & Authentic Life"
    },
    "subtitle": {
      "tr": "Kale yok, kalabalık yok — sadece zeytinlikler, taş kiliseler ve haftanın en büyük olayının hâlâ pazar günü olduğu köyler. Karmi'den Koruçam'a.",
      "en": "No fortress lines, no crowds — just silvery olive groves, stone belfries, and sleepy hamlets where Sunday market remains the highlight of the week. From Karmi to Koruçam."
    },
    "intro": {
      "tr": "Kale yok, kalabalık yok — sadece zeytinlikler, taş kiliseler ve haftanın en büyük olayının hâlâ pazar günü olduğu köyler. Karmi'den Koruçam'a. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "No fortress lines, no crowds — just silvery olive groves, stone belfries, and sleepy hamlets where Sunday market remains the highlight of the week. From Karmi to Koruçam. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Rota planlı değil, keşif için — bir köyde durup kahve içmek, yabancılarla sohbet etmek bu rotanın asıl amacı.",
      "en": "This itinerary isn't about rushing through a checklist; stopping for a slow Turkish coffee at a village square and chatting with locals is the true soul of this journey."
    },
    "proposers": [
      "O.O.",
      "R.J."
    ],
    "stops": {
      "tr": [
        {
          "name": "Karmi Köyü",
          "description": "Beşparmak Dağları'nın yamacında çam ormanları arasına saklanmış Karmi (Karaman), titizlikle restore edilmiş taş evleri, çiçeklerle bezeli dar sokakları ve merkezindeki tarihi Meryem Ana Kilisesi ile adanın en karakteristik dağ köyüdür. Bir masal köyünü andıran mimari dokusu ve huzurlu sessizliğiyle rotanın göz alıcı başlangıcıdır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Ozanköy",
          "description": "Girne'nin doğusunda zeytinliklerin ortasında yer alan Ozanköy (Kazafana), geleneksel taş mimarisi ve Orta Çağ'dan kalma küçük şapelleriyle bilinir. Kıbrıs edebiyatının önemli şairlerinden Osman Türkay'ın memleketi olan köy, her sonbaharda düzenlenen Harnup (Keçiboynuzu) Festivali ile ada kültürünü yaşatır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Çatalköy",
          "description": "Tarihi Girne-Gazimağusa eski yolu üzerinde yer alan Çatalköy (Agios Epiktitos), geleneksel kerpiç ve taş mimarisini koruyan sokakları, yerel sanat galerileri ve köy meydanındaki kahvehaneleriyle öne çıkar. Dağ ile sahil arasındaki konumuyla otantik köy dokusunu sakin bir atmosferde sunar.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tepebaşı (Lale Köyü)",
          "description": "Kalkanlı sırtlarında yer alan Tepebaşı (Diorios), her ilkbaharda çevresindeki vadilerde açan Kıbrıs'a özgü endemik Medoş Lalesi (Tulipa cypria) ile ünlüdür. Yıllık lale festivaline ev sahipliği yapan köy, çam ormanları ve geleneksel köy meydanıyla doğa ve kültürün kesiştiği özel bir yerleşimdir.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sadrazamköy",
          "description": "Adanın en batı ucundaki Kormakitis Burnu yakınında kurulu Sadrazamköy, modern turizmin tamamen dışında kalmış huzurlu bir kıyı köyüdür. Alçak taş evleri, keçi sürüleri ve açık deniz manzarasıyla Kıbrıs'ın onlarca yıl önceki el değmemiş kırsal atmosferini günümüze taşır.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Koruçam",
          "description": "Kuzey Kıbrıs'taki Maronit toplumunun tarihi merkezi olan Koruçam, kendine özgü dili, Katolik katedrali ve ünlü köy meyhaneleriyle rotanın son durağıdır. Köy meydanında kleftiko ve yerel mezeler eşliğinde dostça bir sohbet, otantik köy gezisinin en sıcak kapanışını oluşturur.",
          "visitTime": "30–60 dakika",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Karmi (Karaman) Mountain Village",
          "description": "Tucked against the pine-clad heights of the Kyrenia Range, Karmi (Karaman) is an immaculately preserved hillside village. Featuring restored stone cottages, narrow cobbled lanes lined with climbing roses, and a 19th-century church of the Virgin Mary, it presents a picturesque and tranquil mountain retreat.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Ozanköy Village",
          "description": "Set amid ancient carob and olive orchards east of Kyrenia, Ozanköy (Kazafana) is renowned for traditional stone houses and medieval village chapels. Celebrated as the birthplace of poet Osman Türkay, the village hosts an annual Carob Festival celebrating regional agrarian heritage.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Çatalköy Coastal Village",
          "description": "Positioned along the lower mountain terraces east of Kyrenia, Çatalköy retains traditional vernacular sandstone houses, local art workshops, and shaded village squares. It offers travelers an authentic glimpse into North Cyprus village life removed from coastal hotel corridors.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Tepebaşı (Tulip Village)",
          "description": "Located on the western limestone hills, Tepebaşı (Diorios) is renowned for the wild Medosh Tulip (Tulipa cypria), an endemic red tulip species that blooms across surrounding fields every March. The village celebrates its botanical heritage with an annual spring festival.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sadrazamköy Coastal Hamlet",
          "description": "Situated near the remote western headlands of Cape Kormakitis, Sadrazamköy is an isolated coastal village untouched by commercial tourism. Characterized by simple stone farmhouses and grazing sheep, it preserves an authentic, historic rural rhythm.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Koruçam (Kormakitis) Maronite Village",
          "description": "Serving as the heart of the Maronite community in Cyprus, Koruçam (Kormakitis) retains its distinctive heritage, prominent Catholic cathedral, and renowned family-run taverns. Savoring traditional slow-cooked lamb kleftiko in the village square provides an authentic conclusion to the rural village itinerary.",
          "visitTime": "30–60 mins",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mart–Kasım (Köy Yaşamı)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "March–November (Village Life)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "sig-grand",
    "slug": "sig-grand",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "distance": "380–480 km",
    "duration": {
      "tr": "3–5 gün",
      "en": "3–5 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Scenic Road Trip"
    },
    "startFinish": {
      "tr": "Girne (Liman & Bellapais)",
      "en": "Kyrenia (Harbour & Bellapais)"
    },
    "heroImage": "/images/hero-kyrenia.jpg",
    "title": {
      "tr": "Büyük Kıbrıs Turu",
      "en": "Grand Cyprus Expedition"
    },
    "subtitle": {
      "tr": "Adanın uçtan uca en manzaralı sürüşü",
      "en": "The ultimate scenic cross-island journey from mountain citadels to wild Karpas"
    },
    "intro": {
      "tr": "Dağ köyü, üç kale, dramatik sırt yolu ve Zafer Burnu'na kadar uzanan vahşi Karpaz — otelden otele, adanın nihai yol yolculuğu. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Mountain hamlets, three Crusader castles, dramatic mountain ridges, and the untamed wilderness of Karpas leading all the way to Cape Zafer — an epic multi-day expedition capturing the true spirit of Cyprus."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Spread your overnight bookings across quaint coastal villages and mountain retreats along the route to immerse yourself fully in the island's varied atmospheres."
    },
    "proposers": [
      "N.P.",
      "D.O.",
      "F.Y.",
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne (Liman & Bellapais)",
          "description": "Büyük Kıbrıs Turu'nun başlangıç aşaması olan bu durak, tarihi nal biçimli Girne Limanı, görkemli Girne Kalesi ve dağ eteklerindeki Gotik Bellapais Manastırı'nı kapsar. Akdeniz kıyı zarafetiyle Orta Çağ şövalye mirasını birleştiren bölge, adanın kuzey kapısını simgeler.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Dağlar (Üç Kale)",
          "description": "Beşparmak Dağları'nın zirvelerinde yükselen St. Hilarion, Buffavento ve Kantara kalelerini içeren bu etap, Orta Çağ savunma mimarisinin zirvesidir. Sarp kayalıklar üzerine kurulu bu kalelerden Akdeniz'in iki yakasını gören panoramik manzaralar eşliğinde dağ sırtı boyunca ilerlenir.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Gazimağusa (Salamis & Surlar)",
          "description": "Doğu kıyısına geçildiğinde ulaşılan Gazimağusa etabı; anıtsal Venedik surları, Gotik Lala Mustafa Paşa Camii ve antik çağın görkemli kenti Salamis Harabeleri'ni birleştirir. Roma tiyatrosu ve Orta Çağ katedraliyle adanın en zengin tarihi katmanını sergiler.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Karpaz (Altınkum & Zafer Burnu)",
          "description": "Adanın en doğusundaki el değmemiş yarımadayı kat eden bu etap; serbest dolaşan yabani eşekleri, kilometrelerce uzanan el değmemiş Altınkum sahilini, Apostolos Andreas Manastırı'nı ve Kıbrıs'ın kara bitimi olan Zafer Burnu falezlerini kapsar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Batı (Antik Kentler)",
          "description": "Turun kapanış aşaması olan batı bölgesi; narenciye başkenti Güzelyurt'u, kuğu mozaiğiyle ünlü Soli Bazilikası'nı, tepe sarayı Vouni'yi ve sakin Lefke kasabasını bir araya getirerek ada yolculuğunu dingin bir kültür ve doğa senteziyle tamamlar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "Kyrenia (Harbour & Bellapais)",
          "description": "Serving as the starting stage of the Grand Cyprus Tour, this milestone encompasses Kyrenia's historic crescent harbor, Kyrenia Castle, and the 13th-century Gothic cloister of Bellapais Abbey nestled on the mountain slopes.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Besparmak Mountain Castles",
          "description": "Traversing the crest of the Kyrenia Mountains, this high-altitude stage connects the three formidable mountain redoubts: Saint Hilarion, Buffavento, and Kantara, offering magnificent 360-degree vistas over the northern and southern coasts.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Famagusta (Salamis & Medieval Walls)",
          "description": "Focusing on the eastern coast, this leg links the classical Roman ruins of ancient Salamis with the monumental Venetian ramparts, Othello Castle, and French Gothic architecture of the walled city of Famagusta.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Karpas (Golden Beach & Cape Apostolos Andreas)",
          "description": "Cutting through the remote eastern peninsula, this wilderness segment features roaming feral donkeys, the vast pristine dunes of Golden Beach, the pilgrimage complex of Saint Andrew, and the rocky bluffs of Cape Apostolos Andreas.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Western Ancient Cities",
          "description": "Concluding the island circuit across the west, this phase highlights the classical archaeological sites of Soli and Vouni Palace alongside the historic Cittaslow oasis and citrus groves of Lefke and Güzelyurt.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Nisan–Haziran & Eylül–Kasım",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "April–June & September–November",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "sig-gastronomy",
    "slug": "sig-gastronomy",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "distance": "180–240 km",
    "duration": {
      "tr": "2–3 gün",
      "en": "2–3 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Scenic Road Trip"
    },
    "startFinish": {
      "tr": "Girne Limanı Kahvaltı",
      "en": "Kyrenia Harbour (Breakfast)"
    },
    "heroImage": "/images/hero-kyrenia.jpg",
    "title": {
      "tr": "Gastronomi Yolculuğu",
      "en": "Culinary & Vineyard Odyssey"
    },
    "subtitle": {
      "tr": "Bir köy mutfağı, bir sonraki durak",
      "en": "From family orchard tables to seaside taverns: a true taste of Cyprus"
    },
    "intro": {
      "tr": "Narenciye, hellim, zeytin ve keçiboynuzu — Kıbrıs mutfağının ham maddelerini yetiştiği tarlalardan aile sofralarına kadar takip eden, otelden otele rota. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Sun-ripened citrus, artisanal halloumi, fragrant olive oils, and wild carob — follow the island's authentic gastronomic staples straight from regional producers and farms to family tavern tables."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Plan for generous multi-course lunches and don't hesitate to ask tavern owners for their daily off-menu meze specialties and local village wines."
    },
    "proposers": [
      "N.P.",
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Limanı Kahvaltı",
          "description": "Tarihi Girne Limanı'nın deniz kenarındaki taş ambar restoranlarında güne taze Kıbrıs kahvaltısıyla başlanır. Sıcak kızarmış hellim peyniri, taze kırılmış yeşil zeytinler (çakıstez), pekmez, turunç macunu ve taze köy ekmeği eşliğinde limanın sabah dinginliği yaşanır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Bellapais Köyü",
          "description": "Gotik manastırın gölgesindeki Beylerbeyi yamaçlarında yer alan bu durak, taş fırınlarda pişen geleneksel fırın kebabı (kleftiko) ve Kıbrıs usulü taze meze çeşitleriyle adanın dağ gastronomisini öne çıkarır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Zeytinlik Köyü",
          "description": "Girne'nin batısında asırlık zeytin ağaçlarıyla çevrili Zeytinlik (Templos), geleneksel zeytinyağı değirmenleri ve zeytinli köy ekmekleriyle Kıbrıs zeytin kültürünün kalbidir. Soğuk sıkım zeytinyağları ve zeytin bazlı yöresel tatlar burada keşfedilir.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Lefke & Vouni",
          "description": "Batı Kıbrıs'ın narenciye ve ceviz diyarı olan Lefke ile Vouni kıyısı; taze portakal suları, meşhur ceviz macunu, deniz kenarında taze Akdeniz balıkları ve mevsimlik otlarıyla eşsiz bir vadi ve sahil sofrası sunar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Değirmenlik Meze Öğle Yemeği",
          "description": "Beşparmak Dağları'nın su kaynaklarıyla beslenen Değirmenlik eteklerindeki otantik köy meyhanelerinde, onlarca çeşit sıcak ve soğuk Kıbrıs mezesi, şeftali kebabı ve yerel karaf şarapları eşliğinde gastronomi turunun zengin finali yapılır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Harbour Breakfast Walk",
          "description": "The gastronomy route opens with a traditional Cypriot breakfast along the historic quayside of Kyrenia Harbour. Highlights include warm grilled halloumi, cracked green olives (çakıstez), carob pekmez, bitter-orange preserves, and crusty village bread served beside morning water views.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Bellapais Village",
          "description": "Perched below Bellapais Abbey, the hillside village of Beylerbeyi showcases mountain cuisine centered around slow-cooked clay oven lamb kleftiko, fresh herb salads, and artisan cheeses served on garden terraces.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Zeytinlik (Templos) Village",
          "description": "Surrounded by centuries-old groves west of Kyrenia, Zeytinlik (Templos) is the historical epicenter of Cypriot olive oil production, where visitors experience cold-pressed olive oils, savory olive breads, and regional preserves.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Lefke & Ancient Vouni",
          "description": "Encompassing the rich citrus valleys of Lefke and coastal Vouni, this stage introduces sweet Jaffa orange specialties, candied green walnut macun, and freshly landed Mediterranean fish enjoyed beside the sea.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Değirmenlik Village Meze Tavern",
          "description": "Concluding in the spring-fed foothills of Değirmenlik, travelers savor a banquet of traditional Cypriot hot and cold mezes, including authentic charcoal-grilled şeftali kebab, local village breads, and regional wines.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Tüm Yıl (İlkbahar & Sonbahar İdeal)",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "All Year (Spring & Fall Ideal)",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "sig-adventure",
    "slug": "sig-adventure",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "distance": "85–120 km",
    "duration": {
      "tr": "1–2 gün",
      "en": "1–2 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Scenic Road Trip"
    },
    "startFinish": {
      "tr": "Cemsa Karting (Ortaköy)",
      "en": "Cemsa Karting (Ortaköy)"
    },
    "heroImage": "/images/route-card-images/cemsa-karting.jpg",
    "title": {
      "tr": "Macera & Eğlence",
      "en": "Action & Coastal Adventure"
    },
    "subtitle": {
      "tr": "Tam gaz bir gün, adanın bir ucundan diğerine",
      "en": "Full throttle across Northern Cyprus: karting, diving, safaris, and surf"
    },
    "intro": {
      "tr": "Lefkoşa dışında karting, resif dalışı, at binme, ATV safari ve batı kıyısında gün batımı sörfü — otelden otele dolu dizgin bir macera günü. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Go-kart racing, crystal-clear reef scuba diving, horseback riding through pine hills, ATV safari trails, and sunset windsurfing along the western coast — an adrenaline-charged, full-throttle expedition."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Book your reef diving and sunset water sports slots well ahead of time during peak summer months, and pack high-SPF reef-safe sunscreen and plenty of hydration."
    },
    "proposers": [
      "N.P.",
      "E.A.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Cemsa Karting (Ortaköy)",
          "description": "Uluslararası standartlardaki profesyonel açık hava yarış pistiyle Cemsa Karting, adanın en büyük motor sporları merkezidir. Yüksek tempolu go-kart yarışları ve modern zamanlama sistemleriyle adrenalin dolu bir macera başlangıcı sunar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Lapta Resif Dalışı",
          "description": "Lapta'nın kayalık falezleri altında uzanan su altı resifleri ve deniz mağaraları, Akdeniz'in en berrak tüplü dalış (scuba diving) noktalarındandır. Zengin balık çeşitliliği, orfozlar ve amfora kalıntıları arasında büyüleyici bir su altı macerası yaşatır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "ATV / Buggy Safari",
          "description": "Beşparmak Dağları'nın orman içi patikalarında ve sahil sırtlarında düzenlenen arazi araçlı safari turları; tozlu yollar, dik tırmanışlar ve engellerle dolu heyecanlı bir off-road deneyimi sunar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "St. Hilarion Seyir",
          "description": "Adrenalin dolu etkinliklerin ardından 700 metre yükseklikteki kartal yuvası St. Hilarion sırtlarına çıkılarak, tüm Girne kıyı şeridini kuşbakışı gören uçurum kenarı patikalarında yürüyüş yapılır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Escape Beach Gün Batımı",
          "description": "Maceranın finalinde ulaşılan Escape Beach, gün boyu süren jet ski, kano ve su sporlarının ardından deniz kenarında gün batımı müziği ve serinletici içeceklerle enerjik bir kapanış sağlar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "Cemsa Karting (Ortaköy)",
          "description": "Featuring an internationally accredited outdoor asphalt racing circuit, Cemsa Karting is Northern Cyprus's premier motorsport facility, offering high-speed go-karting heats and full timing telemetry.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Lapta Reef Diving Site",
          "description": "Descending along rocky limestone sea bluffs, the Lapta reef systems provide pristine scuba diving through underwater tunnels, swim-through caverns, and marine habitats teeming with grouper and damselfish.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "ATV / Buggy Safari",
          "description": "Navigating unpaved forestry tracks and rugged limestone trails across the Kyrenia Range, these guided all-terrain quad and buggy excursions offer an action-packed off-road mountain journey.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "St. Hilarion Lower Panorama",
          "description": "Perched over 700 meters above the sea, this cliffside mountain pass allows hikers to take in sheer drop-offs and sweeping aerial vistas of the northern coast from precipitous trails.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Escape Beach Sunset Deck",
          "description": "Transitioning from active water sports like jet skiing and wakeboarding to sunset lounge sessions on the deck, Escape Beach provides a high-energy seaside finish to the adventure itinerary.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Açık Hava & Su Sporu)",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "May–October (Outdoor & Watersports)",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "sig-family",
    "slug": "sig-family",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "distance": "30–45 km",
    "duration": {
      "tr": "1 gün",
      "en": "1 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Scenic Road Trip"
    },
    "startFinish": {
      "tr": "Ocean Akvaryum",
      "en": "Ocean Aquarium"
    },
    "heroImage": "/images/route-card-images/ocean-aquarium.jpg",
    "title": {
      "tr": "Aile Rotası",
      "en": "Family Fun & Coastal Discoveries"
    },
    "subtitle": {
      "tr": "Çocukların gerçekten sevdiği bir gün",
      "en": "A relaxed, kid-approved journey with calm waters, marine life, and outdoor play"
    },
    "intro": {
      "tr": "Klimalı akvaryum, sakin tekne turu, lunapark ve sığ, güvenli yüzme — küçük çocuklarla gerçekten işe yarayan duraklarla kurulmuş, otelden otele yarım-tam gün. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Air-conditioned ocean exhibits, gentle boat excursions, amusement rides, and shallow, crystal-clear family beaches — a stress-free itinerary packed with activities that children genuinely adore."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Start your outdoor beach and park stops early before midday warmth peaks, and keep shaded afternoon hours for air-conditioned indoor stops or relaxed harbor boat rides."
    },
    "proposers": [
      "N.P.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Ocean Akvaryum",
          "description": "Çocuklu aileler için eğlenceli ve öğretici bir başlangıç noktası olan akvaryum tesisleri; Akdeniz ve tropik deniz canlılarını, renkli mercan resiflerini ve deniz kaplumbağalarını yakından gözlemleme fırsatı sunar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Girne Marina Tekne Turu",
          "description": "Girne'den kalkan korunaklı aile tekneleriyle yapılan sakin kıyı turu, sahil falezlerini ve berrak koyları denizden izleme keyfi yaşatır. Çocuklar için güvenli can yelekleri eşliğinde dalgasız koylarda yüzme molası verilir.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Escape Beach (Sığ Koy)",
          "description": "İnce altın kumu ve dalgakıranlarla korunan son derece sığ, dalgasız deniziyle çocukların güvenle yüzebileceği ve kumdan kaleler yapabileceği adanın en aile dostu organize plajıdır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Lunapark",
          "description": "Dönme dolap, çarpışan arabalar, atlıkarınca ve çocuk trenleriyle donatılmış olan lunapark, akşam serinliğinde aile boyu eğlence ve neşeli anlar sunar.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Dondurma Kafesi",
          "description": "Günün tatlı kapanışını oluşturan durak, el yapımı taze meyveli dondurmaları, Belçika waffle'ları ve geniş bahçesiyle tüm ailenin keyifle dinlenebileceği bir lezzet molasıdır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "Ocean Aquarium",
          "description": "An engaging, family-friendly educational discovery stop featuring Mediterranean and tropical marine species, illuminated coral reef displays, and conservation exhibits tailored for young children.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Kyrenia Harbour Cruise Excursion",
          "description": "Departing from the harbor, this relaxed coastal cruise offers safe family sailing along calm northern waters, providing panoramic views of the coastal battlements and calm swimming stops.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Escape Beach (Shallow Lagoon)",
          "description": "With its broad golden-sand shoreline and protected, knee-deep shallow waters, this sheltered cove represents one of the safest family swimming destinations along the northern coast.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Seaside Luna Park",
          "description": "Equipped with traditional Ferris wheels, carousel rides, bumper cars, and game stalls, this seaside amusement park offers evening recreational enjoyment for families traveling with children.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Village Ice Cream & Coffee House",
          "description": "Providing a relaxed dessert conclusion, this family-oriented parlor serves artisan gelato, fresh fruit smoothies, and waffles in a spacious outdoor garden setting.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Mayıs–Ekim (Aile & Plaj)",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "May–October (Family & Beach)",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    },
    "suggestedStart": "09:00"
  },
  {
    "id": "sig-sunset",
    "slug": "sig-sunset",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "distance": "120–160 km",
    "duration": {
      "tr": "1 gün",
      "en": "1 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Scenic Road Trip"
    },
    "startFinish": {
      "tr": "St. Hilarion Seyir Noktası",
      "en": "St. Hilarion Viewpoint"
    },
    "heroImage": "/images/route-card-images/star-gazing.jpg",
    "title": {
      "tr": "Gün Batımı & Yıldız Gözlemi",
      "en": "Chasing the Light: Sunsets & Stargazing"
    },
    "subtitle": {
      "tr": "Işığın peşinde bütün kuzey kıyısı",
      "en": "Golden hour castles, seaside blue hour, and celestial dark-sky stargazing"
    },
    "intro": {
      "tr": "Tümüyle ışık etrafında kurulmuş rota — dağ kalesinde altın saat, terasta mavi saat ve Doğu Akdeniz'in en az ışık kirliliğine sahip göklerinde tam karanlık. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Sculpted entirely around the island's magical light: golden hour atop Crusader fortresses, blue hour drinks on abbey terraces, and pitch-black celestial night skies in the remote Karpas wilderness."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Bring a light jacket for mountaintop sunsets and late-night stargazing on the peninsula, as mountain breezes and open coastal nights can get pleasantly cool even in summer."
    },
    "proposers": [
      "O.O.",
      "A.A.",
      "V.R."
    ],
    "stops": {
      "tr": [
        {
          "name": "St. Hilarion Seyir Noktası",
          "description": "Deniz seviyesinden 700 metre yükseklikteki dağ yamacında yer alan bu nokta, öğleden sonra güneşinin dağ kulelerini ve Girne sahil şeridini altın rengi ışıkla aydınlattığı eşsiz bir başlangıç seyir yeridir.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Bellapais Terası",
          "description": "13. yüzyıl Gotik manastırının revakları arkasında yer alan teras, akşamüstü güneşinin Akdeniz ve zeytinlikler üzerindeki sıcak yansımalarını izlemek için kentin en büyüleyici mavi saat (blue hour) noktasıdır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Sadrazamköy Gün Batımı",
          "description": "Kuzeybatı burnundaki açık falezler üzerinde yer alan Sadrazamköy kıyıları, güneşin doğrudan denizin ufkuna batışını izlemek için adanın en tenha ve doğal açık hava seyir terasıdır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Kormakitis Burnu",
          "description": "Karanlığın çökmesiyle birlikte deniz fenerinin ışığının deniz dalgalarına karıştığı bu kayalık burun, şehir ışıklarından uzaklaşarak alacakaranlığın renklerini yakalamak için eşsiz bir duraktır.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Karpaz Gece Göğü",
          "description": "Doğu Akdeniz'in ışık kirliliğinden en uzak vahşi yarımadası olan Karpaz Milli Parkı'nda gece gökyüzü, Samanyolu galaksisini ve milyonlarca yıldızı çıplak gözle izleme imkanı sunan olağanüstü bir astro-turizm finalidir.",
          "visitTime": "Yarım–Tam gün",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "St. Hilarion Mountain Viewpoint",
          "description": "Perched 700 meters above sea level along the mountain access road, this viewpoint catches the golden hour light illuminating the limestone spires and the coastal plains of Kyrenia below.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Bellapais Abbey Terrace",
          "description": "Overlooking the Gothic arches of the abbey, this elevated hillside terrace offers front-row seats for the Mediterranean blue hour as coastal lights begin to shimmer across the water.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Sadrazamköy Sunset Lookout",
          "description": "Set along the western sea cliffs of the island, this remote coastal viewpoint offers an unobstructed western sightline to watch the sun dip directly below the open Mediterranean horizon.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Cape Kormakitis Headland",
          "description": "As dusk falls over the sea, the rhythmic sweep of the Cape Kormakitis lighthouse against the darkening water marks the transition into pure night away from urban light sources.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Karpas Dark-Sky Stargazing Sanctuary",
          "description": "Representing one of the darkest night-sky sanctuaries in the Eastern Mediterranean basin, the remote tip of the Karpas Peninsula offers breathtaking stargazing and Milky Way visibility free of urban light pollution.",
          "visitTime": "Half to Full day",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "Haziran–Eylül (Açık Gökyüzü)",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "June–September (Clear Night Skies)",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    },
    "suggestedStart": "15:30"
  }
];

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
