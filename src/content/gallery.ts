import type { Locale } from "./site";

// The look of the placeholder artwork shown until a real image is added.
export type ArtVariant =
  | "red"
  | "winter"
  | "columns"
  | "ruins"
  | "velvet"
  | "olive";

type Localized = Record<Locale, string>;

// Used by the filter on the Tables page.
export const groups = ["stone", "seasons", "nature"] as const;
export type Group = (typeof groups)[number];

export type Concept = {
  id: string;
  art: ArtVariant;
  group: Group;
  // To show a real image: put the file in /public/gallery and write its path
  // here, e.g. "/gallery/red-table.jpg". Leave empty to show the placeholder.
  image?: string;
  title: Localized;
  place: Localized;
  note: Localized;
  palette: string[]; // hex colours shown as small dots
};

export const concepts: Concept[] = [
  {
    id: "red-table",
    art: "red",
    group: "stone",
    title: {
      en: "The Red Table",
      tr: "Kırmızı Masa",
      fr: "La Table Rouge",
    },
    place: {
      en: "Inside old stone walls",
      tr: "Eski taş duvarların arasında",
      fr: "Entre de vieux murs de pierre",
    },
    note: {
      en: "One colour, one long table, a quiet secret.",
      tr: "Tek renk, tek uzun masa, sessiz bir sır.",
      fr: "Une couleur, une longue table, un secret tranquille.",
    },
    palette: ["#7a1e24", "#b23a3f", "#e8dccb"],
  },
  {
    id: "winter-dinner",
    art: "winter",
    group: "seasons",
    title: {
      en: "A Winter Dinner",
      tr: "Bir Kış Akşamı",
      fr: "Un Dîner d'Hiver",
    },
    place: {
      en: "Cold stone, winter light",
      tr: "Soğuk taş, kış ışığı",
      fr: "Pierre froide, lumière d'hiver",
    },
    note: {
      en: "Ivory linen and dozens of candles against the cold.",
      tr: "Soğuğa karşı fildişi keten ve onlarca mum.",
      fr: "Lin ivoire et des dizaines de bougies contre le froid.",
    },
    palette: ["#f3ece0", "#c9a45c", "#8c8378"],
  },
  {
    id: "among-the-columns",
    art: "columns",
    group: "stone",
    title: {
      en: "Among the Columns",
      tr: "Sütunların Arasında",
      fr: "Parmi les Colonnes",
    },
    place: {
      en: "A colonnade at nightfall",
      tr: "Akşam çökerken bir sütun dizisi",
      fr: "Une colonnade à la tombée de la nuit",
    },
    note: {
      en: "Candlelight between stone, the place does half the design.",
      tr: "Taşların arasında mum ışığı; tasarımın yarısını mekân yapar.",
      fr: "La lumière des bougies entre les pierres ; le lieu fait la moitié du travail.",
    },
    palette: ["#d8cbb6", "#a8977f", "#3b2f27"],
  },
  {
    id: "dinner-in-the-ruins",
    art: "ruins",
    group: "stone",
    title: {
      en: "Dinner in the Ruins",
      tr: "Kalıntılarda Akşam Yemeği",
      fr: "Dîner dans les Ruines",
    },
    place: {
      en: "Ancient ruins at dusk",
      tr: "Gün batımında antik kalıntılar",
      fr: "Des ruines antiques au crépuscule",
    },
    note: {
      en: "A long dinner where history keeps the conversation.",
      tr: "Sohbete tarihin eşlik ettiği uzun bir akşam yemeği.",
      fr: "Un long dîner où l'histoire tient la conversation.",
    },
    palette: ["#c98a5e", "#e7c9a0", "#5a3d2e"],
  },
  {
    id: "velvet-and-bronze",
    art: "velvet",
    group: "seasons",
    title: {
      en: "Velvet & Bronze",
      tr: "Kadife ve Bronz",
      fr: "Velours & Bronze",
    },
    place: {
      en: "An autumn hall",
      tr: "Bir sonbahar salonu",
      fr: "Une salle d'automne",
    },
    note: {
      en: "Deep velvet, warm bronze, a table that holds the evening.",
      tr: "Derin kadife, sıcak bronz; akşamı kucaklayan bir sofra.",
      fr: "Velours profond, bronze chaud, une table qui retient la soirée.",
    },
    palette: ["#4a1d2a", "#9b6b3c", "#d9b98a"],
  },
  {
    id: "olive-grove",
    art: "olive",
    group: "nature",
    title: {
      en: "Lunch in the Olive Grove",
      tr: "Zeytinlikte Öğle Yemeği",
      fr: "Déjeuner dans l'Oliveraie",
    },
    place: {
      en: "Under old olive trees",
      tr: "Yaşlı zeytin ağaçlarının altında",
      fr: "Sous de vieux oliviers",
    },
    note: {
      en: "Linen, olive branches and nothing more than daylight.",
      tr: "Keten, zeytin dalları ve yalnızca gün ışığı.",
      fr: "Du lin, des branches d'olivier et rien que la lumière du jour.",
    },
    palette: ["#7d8461", "#e9e3d3", "#b9a77f"],
  },
];
