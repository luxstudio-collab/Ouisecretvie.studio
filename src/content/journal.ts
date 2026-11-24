// Short columns ("Köşe Yazıları"). To add one, copy a block below, give it a
// new slug and write the text in the three languages. Newest goes first.

import type { ArtVariant } from "./gallery";
import type { Locale } from "./site";

type Localized = Record<Locale, string>;

export type Block =
  | { type: "p"; text: Localized }
  | { type: "h"; text: Localized }
  | { type: "quote"; text: Localized };

export type Column = {
  slug: string;
  date: string; // YYYY-MM-DD
  art: ArtVariant;
  image?: string; // optional real image, e.g. "/journal/mum-isigi.jpg"
  category: Localized;
  title: Localized;
  lead: Localized;
  body: Block[];
};

export const columns: Column[] = [
  {
    slug: "mum-isiginin-kurali",
    date: "2026-11-24",
    art: "columns",
    category: { en: "Light", tr: "Işık", fr: "Lumière" },
    title: {
      en: "The Rule of Candlelight: The Last Touch Finishes the Table",
      tr: "Mum Işığının Kuralı: Sofrayı Son Dokunuş Tamamlar",
      fr: "La Règle des Bougies : La Dernière Touche Achève la Table",
    },
    lead: {
      en: "Linen, plates and flowers set the table. Light decides how it feels. Four small rules for candles that flatter every face.",
      tr: "Keten, tabak ve çiçek sofrayı kurar; nasıl hissettireceğine ışık karar verir. Her yüzü güzelleştiren mumlar için dört küçük kural.",
      fr: "Le lin, les assiettes et les fleurs dressent la table. La lumière décide de l'atmosphère. Quatre petites règles pour des bougies qui flattent chaque visage.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "A room goes quiet when the overhead light goes off and the first candle is lit. Voices soften, faces warm, and the table suddenly looks finished. That is not luck. It is light doing the last part of the design.",
          tr: "Tavan ışığı söndüğünde ve ilk mum yandığında oda bir anlığına susar. Sesler yumuşar, yüzler ısınır ve sofra birden tamamlanmış görünür. Bu bir tesadüf değil; tasarımın son kısmını ışık üstlenir.",
          fr: "Une pièce se tait quand le plafonnier s'éteint et que la première bougie s'allume. Les voix s'adoucissent, les visages se réchauffent et la table paraît soudain achevée. Ce n'est pas un hasard : c'est la lumière qui signe la dernière partie du décor.",
        },
      },
      { type: "h", text: { en: "Keep the flame below the eyes", tr: "Alevi göz hizasının altında tut", fr: "Gardez la flamme sous le regard" } },
      {
        type: "p",
        text: {
          en: "Guests should see each other, not the flame. Mix tall tapers at the centre with low votives along the edges, so the light falls on faces rather than into them.",
          tr: "Misafirler alevi değil, birbirlerini görmeli. Ortaya uzun şamdan mumları, kenarlara alçak mumluklar koy; ışık gözlere değil yüzlere düşsün.",
          fr: "Les invités doivent se voir, pas la flamme. Mêlez de hautes bougies au centre et de petits photophores sur les bords : la lumière tombe sur les visages, pas dans les yeux.",
        },
      },
      { type: "h", text: { en: "Unscented, and always odd", tr: "Kokusuz ve her zaman tek sayı", fr: "Sans parfum, et toujours impair" } },
      {
        type: "p",
        text: {
          en: "Food should be the only scent at the table. Group candles in threes or fives; odd numbers look gathered rather than lined up.",
          tr: "Sofrada tek koku yemeğin kokusu olmalı. Mumları üçlü ya da beşli grupla; tek sayılar dizilmiş değil, bir araya gelmiş görünür.",
          fr: "À table, le seul parfum doit être celui du repas. Regroupez les bougies par trois ou par cinq : un nombre impair paraît rassemblé, pas aligné.",
        },
      },
      {
        type: "quote",
        text: {
          en: "Light the candles before the first guest rings the bell.",
          tr: "Mumları ilk misafir zili çalmadan yak.",
          fr: "Allumez les bougies avant que le premier invité ne sonne.",
        },
      },
      {
        type: "p",
        text: {
          en: "A table that is already glowing says: we were waiting for you. It is the quietest welcome there is.",
          tr: "Çoktan ışıldayan bir sofra şunu söyler: seni bekliyorduk. Bundan daha sessiz bir hoş geldin yoktur.",
          fr: "Une table qui brille déjà dit : nous vous attendions. C'est l'accueil le plus discret qui soit.",
        },
      },
    ],
  },
  {
    slug: "tek-renk-tek-fikir",
    date: "2026-11-24",
    art: "red",
    category: { en: "Restraint", tr: "Sadelik", fr: "Retenue" },
    title: {
      en: "One Colour, One Idea: Farewell to the Crowded Table",
      tr: "Tek Renk, Tek Fikir: Kalabalık Sofraya Veda",
      fr: "Une Couleur, Une Idée : Adieu à la Table Chargée",
    },
    lead: {
      en: "The most memorable tables are rarely the fullest. Why restraint looks richer, and how to choose the one idea your table will be about.",
      tr: "Akılda kalan sofralar nadiren en dolu olanlardır. Sadelik neden daha zengin görünür ve sofranın anlatacağı tek fikir nasıl seçilir?",
      fr: "Les tables qui marquent sont rarement les plus chargées. Pourquoi la retenue paraît plus riche, et comment choisir l'idée unique de votre table.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "We all know the table that tries to say everything: three colours of napkin, two kinds of flowers, a theme on every plate. It is generous, and it is tiring. The eye has nowhere to rest.",
          tr: "Her şeyi söylemeye çalışan sofrayı hepimiz biliriz: üç renk peçete, iki tür çiçek, her tabakta ayrı bir tema. Cömerttir ama yorar; gözün dinlenecek bir yeri kalmaz.",
          fr: "Nous connaissons tous la table qui veut tout dire : trois couleurs de serviettes, deux sortes de fleurs, un thème dans chaque assiette. Elle est généreuse, et fatigante. L'œil ne sait où se poser.",
        },
      },
      { type: "h", text: { en: "Choose one colour and let it lead", tr: "Bir renk seç, öne o geçsin", fr: "Choisissez une couleur et laissez-la guider" } },
      {
        type: "p",
        text: {
          en: "A long red runner, red candles, and nothing else red. Everything around it stays calm: ivory plates, clear glass, plain linen. One strong colour reads as a decision, not a coincidence.",
          tr: "Uzun kırmızı bir runner, kırmızı mumlar ve başka hiçbir şey kırmızı değil. Çevresindeki her şey sakin kalır: fildişi tabaklar, şeffaf cam, sade keten. Tek güçlü renk tesadüf değil, bir karar gibi okunur.",
          fr: "Un long chemin de table rouge, des bougies rouges, et rien d'autre en rouge. Tout le reste reste calme : assiettes ivoire, verre clair, lin uni. Une couleur forte se lit comme une décision, non comme un hasard.",
        },
      },
      {
        type: "quote",
        text: {
          en: "Before adding anything, ask: what is this table about?",
          tr: "Bir şey eklemeden önce sor: bu sofra ne anlatıyor?",
          fr: "Avant d'ajouter quoi que ce soit, demandez-vous : de quoi parle cette table ?",
        },
      },
      { type: "h", text: { en: "Leave room for the evening", tr: "Akşama yer bırak", fr: "Laissez de la place à la soirée" } },
      {
        type: "p",
        text: {
          en: "Empty space is not missing decoration. It is where the bread basket lands, where elbows rest, where the candlelight spreads. A quiet table makes the conversation the loudest thing in the room.",
          tr: "Boş alan eksik bir süs değildir. Ekmek sepetinin konduğu, dirseklerin dinlendiği, mum ışığının yayıldığı yerdir. Sessiz bir sofra, odadaki en yüksek sesi sohbete bırakır.",
          fr: "L'espace vide n'est pas une décoration manquante. C'est là que se pose la corbeille à pain, que reposent les coudes, que s'étend la lumière des bougies. Une table tranquille laisse la conversation devenir le plus beau bruit de la pièce.",
        },
      },
    ],
  },
  {
    slug: "kis-sofrasi",
    date: "2026-11-24",
    art: "winter",
    category: { en: "Seasons", tr: "Mevsimler", fr: "Saisons" },
    title: {
      en: "The Winter Table: Ivory and Linen Against the Cold",
      tr: "Kış Sofrası: Soğuğa Karşı Fildişi ve Keten",
      fr: "La Table d'Hiver : Ivoire et Lin Contre le Froid",
    },
    lead: {
      en: "Winter asks for a table that feels like a coat: soft layers, warm metals and something green from outside. A short guide to setting it.",
      tr: "Kış, bir palto gibi saran bir sofra ister: yumuşak katmanlar, sıcak metaller ve dışarıdan getirilmiş biraz yeşil. Kurmak için kısa bir rehber.",
      fr: "L'hiver demande une table qui enveloppe comme un manteau : des couches douces, des métaux chauds et un peu de vert venu du dehors. Un petit guide pour la dresser.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Outside, the light goes early and the stone turns cold. Inside, the table becomes the warmest place in the house. Winter is the one season when more layers really are better.",
          tr: "Dışarıda ışık erken çekilir, taş soğur. İçeride sofra evin en sıcak köşesine dönüşür. Kış, katmanın gerçekten daha iyi olduğu tek mevsimdir.",
          fr: "Dehors, la lumière part tôt et la pierre se refroidit. Dedans, la table devient l'endroit le plus chaud de la maison. L'hiver est la seule saison où plus de couches, c'est vraiment mieux.",
        },
      },
      { type: "h", text: { en: "Layer the textures, not the colours", tr: "Renkleri değil, dokuları katmanla", fr: "Superposez les matières, pas les couleurs" } },
      {
        type: "p",
        text: {
          en: "Stay within ivory, cream and stone. Then layer: heavy linen on the table, a wool throw on each chair, matte ceramic plates, a little brass or bronze in the candlesticks. One palette, many surfaces.",
          tr: "Fildişi, krem ve taş tonlarında kal. Sonra katmanla: masada kalın keten, sandalyelerde yün şal, mat seramik tabaklar, şamdanlarda biraz pirinç ya da bronz. Tek palet, çok yüzey.",
          fr: "Restez dans l'ivoire, la crème et la pierre. Puis superposez : un lin épais sur la table, un plaid en laine sur chaque chaise, des assiettes en céramique mate, un peu de laiton ou de bronze dans les bougeoirs. Une palette, de nombreuses surfaces.",
        },
      },
      { type: "h", text: { en: "Bring the outside in", tr: "Dışarıyı içeri al", fr: "Faites entrer le dehors" } },
      {
        type: "p",
        text: {
          en: "A few branches of pine, olive or eucalyptus laid flat down the centre do more than any arrangement. They smell of the season and cost almost nothing.",
          tr: "Masanın ortasına yatay bırakılmış birkaç çam, zeytin ya da okaliptüs dalı, en gösterişli aranjmandan fazlasını yapar. Mevsim gibi kokar ve neredeyse hiçbir şeye mal olmaz.",
          fr: "Quelques branches de pin, d'olivier ou d'eucalyptus posées à plat au centre font plus que n'importe quelle composition. Elles sentent la saison et ne coûtent presque rien.",
        },
      },
      {
        type: "quote",
        text: {
          en: "Let the season set the table, then let the candles warm it.",
          tr: "Sofrayı mevsim kursun, mumlar ısıtsın.",
          fr: "Laissez la saison dresser la table, puis les bougies la réchauffer.",
        },
      },
    ],
  },
];

export const getColumn = (slug: string) => columns.find((c) => c.slug === slug);

/** Rough reading time in minutes (about 200 words a minute). */
export const readingMinutes = (column: Column, lang: Locale) => {
  const words = [column.lead[lang], ...column.body.map((b) => b.text[lang])]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const formatColumnDate = (iso: string, lang: Locale) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(
    lang === "tr" ? "tr-TR" : lang === "fr" ? "fr-FR" : "en-GB",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  );
