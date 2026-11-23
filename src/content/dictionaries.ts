// All the words on the site, in English, Turkish and French.
// To change a sentence, edit it here: every page reads from this file.

import type { Locale } from "./site";

const en = {
  meta: {
    title: "Ouisecretvie Studio · where ideas breathe",
    description:
      "An AI design studio imagining tables and tablescapes in beautiful places: long dinners in ancient ruins, candlelit tables among stone columns.",
  },
  nav: {
    home: "Home",
    gallery: "Tables",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  home: {
    eyebrow: "AI design studio",
    title: "where ideas breathe",
    lead: "We imagine tables in beautiful places. Long dinners in ancient ruins, candlelight among stone columns, a quiet table waiting for its guests.",
    primary: "See the tables",
    secondary: "Follow on Instagram",
    introTitle: "A table is not furniture. It is a mood.",
    introBody:
      "Before anyone sits down, the table has already decided how the evening will feel. We design that feeling: the colour, the linen, the light and the place around it.",
    featuredTitle: "Recent tables",
    featuredLink: "View all tables",
    principlesTitle: "What we believe",
    principles: [
      {
        title: "Restraint",
        body: "One colour, one material, one strong idea. A quiet table says more than a crowded one.",
      },
      {
        title: "The place",
        body: "Old walls, ruins and natural light do half the design. We choose the place first.",
      },
      {
        title: "Light",
        body: "Candlelight is the last detail and the most important one.",
      },
      {
        title: "Honesty",
        body: "Our tables are imagined with AI: a sketchbook for ideas, never a replacement for real hosts.",
      },
    ],
    closingTitle: "A new table every week",
    closingBody: "Follow the studio on Instagram and see the next one first.",
    scroll: "Scroll",
    stats: [
      { value: "06", label: "tables imagined" },
      { value: "03", label: "languages" },
      { value: "01", label: "new table every week" },
    ],
    weekEyebrow: "Table of the week",
    weekBody:
      "A long ivory table, dozens of candles and the cold light of winter on old stone. The idea is simple: let the season set the table, then let the candles warm it.",
    weekCta: "Save it for your next table",
    collectionTitle: "The collection",
    followTitle: "Follow the table",
    followBody: "Each week a new table appears on Instagram first. Come and see where it is set.",
    floating: "Instagram",
  },
  gallery: {
    eyebrow: "The collection",
    title: "Tables",
    lead: "Every table here is an AI concept: imagined, not photographed. An invitation to borrow an idea for your own table.",
    concept: "AI concept",
    comingSoon: "Image coming soon",
    palette: "Palette",
    filterLabel: "Filter tables",
    filters: { all: "All", stone: "Stone & ruins", seasons: "Seasons", nature: "Nature" },
    count: "tables",
  },
  about: {
    eyebrow: "The studio",
    title: "Design and table styling, as a mood",
    paragraphs: [
      "Ouisecretvie Studio is an AI design studio. We imagine tables and tablescapes in places that are hard to reach: a long dinner inside ancient ruins, a candlelit table between stone columns, lunch under old olive trees.",
      "We use AI as a sketchbook. It lets us test ideas that would be impossible, or very expensive, to try in real life. It does not replace the people who set real tables: hosts, stylists and the friends who light the candles.",
      "Every image we share is a concept. None of these dinners has happened, yet. We hope some of them will, at your table.",
    ],
    valuesTitle: "How we work",
    values: [
      "We choose the place first.",
      "We keep to one colour and one idea.",
      "We let the light finish the table.",
      "We always say when an image is imagined.",
    ],
    signature: "Ouisecretvie Studio",
  },
  contact: {
    eyebrow: "Contact",
    title: "Come to the table",
    lead: "The easiest way to reach the studio is a message on Instagram. We read and answer every one personally.",
    instagramCta: "Send a message on Instagram",
    emailCta: "Write an e-mail",
    note: "For collaborations, ideas for a place that deserves a table, or simply to say hello.",
  },
  footer: {
    tagline: "where ideas breathe",
    disclaimer: "All tables shown are AI concepts.",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "This table is not set",
    body: "The page you are looking for does not exist.",
    back: "Back to the home page",
  },
};

export type Dictionary = typeof en;

const tr: Dictionary = {
  meta: {
    title: "Ouisecretvie Studio · where ideas breathe",
    description:
      "Güzel mekânlarda sofralar hayal eden bir yapay zekâ tasarım stüdyosu: antik kalıntılarda uzun akşam yemekleri, taş sütunlar arasında mum ışığında masalar.",
  },
  nav: {
    home: "Ana Sayfa",
    gallery: "Sofralar",
    about: "Hakkında",
    contact: "İletişim",
    menu: "Menü",
    close: "Kapat",
    language: "Dil",
  },
  home: {
    eyebrow: "Yapay zekâ tasarım stüdyosu",
    title: "where ideas breathe",
    lead: "Güzel mekânlarda sofralar hayal ediyoruz. Antik kalıntılarda uzun akşam yemekleri, taş sütunlar arasında mum ışığı, misafirlerini bekleyen sessiz bir masa.",
    primary: "Sofraları gör",
    secondary: "Instagram'da takip et",
    introTitle: "Masa bir mobilya değildir. Bir histir.",
    introBody:
      "Daha kimse oturmadan, akşamın nasıl geçeceğine masa karar verir. Biz o hissi tasarlıyoruz: rengi, keteni, ışığı ve etrafındaki mekânı.",
    featuredTitle: "Son sofralar",
    featuredLink: "Tüm sofraları gör",
    principlesTitle: "İnandıklarımız",
    principles: [
      {
        title: "Sadelik",
        body: "Tek renk, tek malzeme, tek güçlü fikir. Sessiz bir masa, kalabalık bir masadan daha çok şey anlatır.",
      },
      {
        title: "Mekân",
        body: "Eski duvarlar, kalıntılar ve doğal ışık tasarımın yarısını yapar. Önce mekânı seçeriz.",
      },
      {
        title: "Işık",
        body: "Mum ışığı son dokunuştur ve en önemlisidir.",
      },
      {
        title: "Dürüstlük",
        body: "Sofralarımız yapay zekâ ile hayal edilir: fikirler için bir eskiz defteri, gerçek ev sahiplerinin yerine asla geçmez.",
      },
    ],
    closingTitle: "Her hafta yeni bir sofra",
    closingBody: "Stüdyoyu Instagram'da takip et, bir sonrakini ilk sen gör.",
    scroll: "Kaydır",
    stats: [
      { value: "06", label: "hayal edilmiş sofra" },
      { value: "03", label: "dil" },
      { value: "01", label: "her hafta yeni sofra" },
    ],
    weekEyebrow: "Haftanın sofrası",
    weekBody:
      "Fildişi uzun bir masa, onlarca mum ve eski taşların üzerine düşen soğuk kış ışığı. Fikir basit: sofrayı mevsim kursun, mumlar ısıtsın.",
    weekCta: "Bir sonraki sofran için kaydet",
    collectionTitle: "Koleksiyon",
    followTitle: "Sofrayı takip et",
    followBody: "Her hafta yeni bir sofra önce Instagram'da kuruluyor. Gel, nerede kurulduğunu gör.",
    floating: "Instagram",
  },
  gallery: {
    eyebrow: "Koleksiyon",
    title: "Sofralar",
    lead: "Buradaki her sofra bir yapay zekâ konseptidir: fotoğraflanmadı, hayal edildi. Kendi sofran için bir fikir ödünç almaya davet.",
    concept: "Yapay zekâ konsepti",
    comingSoon: "Görsel yakında",
    palette: "Renkler",
    filterLabel: "Sofraları filtrele",
    filters: { all: "Tümü", stone: "Taş ve kalıntılar", seasons: "Mevsimler", nature: "Doğa" },
    count: "sofra",
  },
  about: {
    eyebrow: "Stüdyo",
    title: "Bir his olarak tasarım ve sofra düzeni",
    paragraphs: [
      "Ouisecretvie Studio bir yapay zekâ tasarım stüdyosudur. Ulaşması zor mekânlarda sofralar ve masa düzenleri hayal ederiz: antik kalıntıların içinde uzun bir akşam yemeği, taş sütunlar arasında mum ışığında bir masa, yaşlı zeytin ağaçlarının altında bir öğle yemeği.",
      "Yapay zekâyı bir eskiz defteri gibi kullanırız. Gerçek hayatta denemesi imkânsız ya da çok pahalı olan fikirleri böylece deneyebiliriz. Gerçek sofraları kuran insanların yerini almaz: ev sahiplerinin, stilistlerin ve mumları yakan dostların.",
      "Paylaştığımız her görsel bir konsepttir. Bu akşam yemeklerinin hiçbiri henüz gerçekleşmedi. Bazılarının bir gün senin sofranda gerçekleşmesini umuyoruz.",
    ],
    valuesTitle: "Nasıl çalışıyoruz",
    values: [
      "Önce mekânı seçeriz.",
      "Tek renge ve tek fikre sadık kalırız.",
      "Sofrayı ışığın tamamlamasına izin veririz.",
      "Bir görselin hayal ürünü olduğunu her zaman söyleriz.",
    ],
    signature: "Ouisecretvie Studio",
  },
  contact: {
    eyebrow: "İletişim",
    title: "Sofraya buyur",
    lead: "Stüdyoya ulaşmanın en kolay yolu Instagram'dan mesaj göndermek. Her mesajı okuyor ve kendimiz yanıtlıyoruz.",
    instagramCta: "Instagram'dan mesaj gönder",
    emailCta: "E-posta yaz",
    note: "İş birlikleri, bir sofrayı hak eden mekân önerileri ya da sadece merhaba demek için.",
  },
  footer: {
    tagline: "where ideas breathe",
    disclaimer: "Gösterilen tüm sofralar yapay zekâ konseptidir.",
    rights: "Tüm hakları saklıdır.",
  },
  notFound: {
    title: "Bu sofra kurulmadı",
    body: "Aradığın sayfa bulunamadı.",
    back: "Ana sayfaya dön",
  },
};

const fr: Dictionary = {
  meta: {
    title: "Ouisecretvie Studio · where ideas breathe",
    description:
      "Un studio de design IA qui imagine des tables dans de beaux lieux : de longs dîners dans des ruines antiques, des tables aux bougies parmi les colonnes de pierre.",
  },
  nav: {
    home: "Accueil",
    gallery: "Tables",
    about: "Le studio",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    language: "Langue",
  },
  home: {
    eyebrow: "Studio de design IA",
    title: "where ideas breathe",
    lead: "Nous imaginons des tables dans de beaux lieux. De longs dîners dans des ruines antiques, la lumière des bougies entre les colonnes, une table tranquille qui attend ses invités.",
    primary: "Voir les tables",
    secondary: "Suivre sur Instagram",
    introTitle: "Une table n'est pas un meuble. C'est une atmosphère.",
    introBody:
      "Avant que quiconque ne s'assoie, la table a déjà décidé de l'humeur de la soirée. Nous dessinons cette atmosphère : la couleur, le lin, la lumière et le lieu qui l'entoure.",
    featuredTitle: "Tables récentes",
    featuredLink: "Voir toutes les tables",
    principlesTitle: "Ce en quoi nous croyons",
    principles: [
      {
        title: "La retenue",
        body: "Une couleur, une matière, une idée forte. Une table tranquille en dit plus qu'une table chargée.",
      },
      {
        title: "Le lieu",
        body: "Les vieux murs, les ruines et la lumière naturelle font la moitié du travail. Nous choisissons d'abord le lieu.",
      },
      {
        title: "La lumière",
        body: "La lumière des bougies est le dernier détail, et le plus important.",
      },
      {
        title: "L'honnêteté",
        body: "Nos tables sont imaginées avec l'IA : un carnet d'esquisses pour les idées, jamais un substitut aux vrais hôtes.",
      },
    ],
    closingTitle: "Une nouvelle table chaque semaine",
    closingBody: "Suivez le studio sur Instagram et découvrez la prochaine en premier.",
    scroll: "Défiler",
    stats: [
      { value: "06", label: "tables imaginées" },
      { value: "03", label: "langues" },
      { value: "01", label: "nouvelle table chaque semaine" },
    ],
    weekEyebrow: "La table de la semaine",
    weekBody:
      "Une longue table ivoire, des dizaines de bougies et la lumière froide de l'hiver sur la vieille pierre. L'idée est simple : laisser la saison dresser la table, puis les bougies la réchauffer.",
    weekCta: "Gardez-la pour votre prochaine table",
    collectionTitle: "La collection",
    followTitle: "Suivre la table",
    followBody: "Chaque semaine, une nouvelle table apparaît d'abord sur Instagram. Venez voir où elle est dressée.",
    floating: "Instagram",
  },
  gallery: {
    eyebrow: "La collection",
    title: "Tables",
    lead: "Chaque table ici est un concept IA : imaginée, non photographiée. Une invitation à emprunter une idée pour votre propre table.",
    concept: "Concept IA",
    comingSoon: "Image bientôt disponible",
    palette: "Palette",
    filterLabel: "Filtrer les tables",
    filters: { all: "Toutes", stone: "Pierre & ruines", seasons: "Saisons", nature: "Nature" },
    count: "tables",
  },
  about: {
    eyebrow: "Le studio",
    title: "Le design et l'art de la table, comme une atmosphère",
    paragraphs: [
      "Ouisecretvie Studio est un studio de design IA. Nous imaginons des tables et des mises en scène dans des lieux difficiles d'accès : un long dîner au cœur de ruines antiques, une table aux bougies entre des colonnes de pierre, un déjeuner sous de vieux oliviers.",
      "Nous utilisons l'IA comme un carnet d'esquisses. Elle nous permet d'essayer des idées impossibles, ou très coûteuses, à tester dans la vie réelle. Elle ne remplace pas celles et ceux qui dressent de vraies tables : les hôtes, les stylistes et les amis qui allument les bougies.",
      "Chaque image que nous partageons est un concept. Aucun de ces dîners n'a encore eu lieu. Nous espérons que certains auront lieu, à votre table.",
    ],
    valuesTitle: "Notre façon de travailler",
    values: [
      "Nous choisissons d'abord le lieu.",
      "Nous gardons une seule couleur et une seule idée.",
      "Nous laissons la lumière terminer la table.",
      "Nous disons toujours quand une image est imaginée.",
    ],
    signature: "Ouisecretvie Studio",
  },
  contact: {
    eyebrow: "Contact",
    title: "Venez à table",
    lead: "Le plus simple pour joindre le studio est un message sur Instagram. Nous lisons et répondons personnellement à chacun.",
    instagramCta: "Envoyer un message sur Instagram",
    emailCta: "Écrire un e-mail",
    note: "Pour une collaboration, un lieu qui mérite une table, ou simplement pour dire bonjour.",
  },
  footer: {
    tagline: "where ideas breathe",
    disclaimer: "Toutes les tables présentées sont des concepts IA.",
    rights: "Tous droits réservés.",
  },
  notFound: {
    title: "Cette table n'est pas dressée",
    body: "La page que vous cherchez n'existe pas.",
    back: "Retour à l'accueil",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr, fr };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
