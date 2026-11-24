// Research-based columns on table history, art, etiquette and aesthetics.
// Each one lists its sources at the end of the page.

import type { Column } from "./journal";

export const stories: Column[] = [
  {
    slug: "catalin-skandali",
    date: "2026-11-24",
    art: "velvet",
    category: { en: "History", tr: "Tarih", fr: "Histoire" },
    title: {
      en: "The Scandal of the Fork: A Byzantine Bride and Her Golden Tines",
      tr: "Çatalın Skandalı: Bir Bizans Gelini ve Altın Çatalı",
      fr: "Le Scandale de la Fourchette : Une Mariée Byzantine et Ses Dents d'Or",
    },
    lead: {
      en: "Today it is the most ordinary object on the table. A thousand years ago, a small golden fork in Venice was called a vanity, and Europe took centuries to forgive it.",
      tr: "Bugün sofranın en sıradan nesnesi. Bin yıl önce Venedik'te küçük, altın bir çatal 'kibir' sayıldı ve Avrupa'nın onu affetmesi yüzyıllar sürdü.",
      fr: "C'est aujourd'hui l'objet le plus ordinaire de la table. Il y a mille ans, une petite fourchette d'or à Venise fut jugée vaniteuse, et l'Europe mit des siècles à la pardonner.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Picture a wedding feast in Venice, early in the eleventh century. The bride is a Byzantine noblewoman, usually named as Maria Argyropoulina, and she refuses to eat with her fingers. A servant cuts her food; she lifts each piece to her mouth with a slender two-pronged fork of gold. The room is not charmed. It is shocked.",
          tr: "On birinci yüzyılın başında Venedik'te bir düğün sofrası düşünün. Gelin, kaynaklarda genellikle Maria Argyropoulina adıyla anılan Bizanslı bir soyludur ve parmaklarıyla yemeyi reddeder. Yemeğini bir hizmetkâr keser; o her lokmayı ince, iki dişli altın bir çatalla ağzına götürür. Salon büyülenmez; şaşkına döner.",
          fr: "Imaginez un festin de noces à Venise, au début du XIe siècle. La mariée est une noble byzantine, le plus souvent nommée Maria Argyropoulina, et elle refuse de manger avec ses doigts. Un serviteur coupe ses mets ; elle porte chaque bouchée à ses lèvres avec une fine fourchette d'or à deux dents. La salle n'est pas charmée. Elle est choquée.",
        },
      },
      { type: "h", text: { en: "An instrument of vanity", tr: "Bir kibir aleti", fr: "Un instrument de vanité" } },
      {
        type: "p",
        text: {
          en: "The cleric Peter Damian later held her up as a warning, condemning the fork as vanity: God had given us fingers, so why insult them with metal? The details of the story differ from source to source, and some later writers confused her with another Byzantine bride. But the outrage was real, and it lasted.",
          tr: "Din adamı Petrus Damiani daha sonra onu bir ibret örneği olarak gösterdi ve çatalı kibir diye kınadı: Tanrı bize parmak vermişken, onları metalle aşağılamak niye? Hikâyenin ayrıntıları kaynaktan kaynağa değişir; bazı sonraki yazarlar onu başka bir Bizanslı gelinle karıştırır. Ama öfke gerçekti ve uzun sürdü.",
          fr: "Le religieux Pierre Damien la cita plus tard en exemple à ne pas suivre, condamnant la fourchette comme une vanité : Dieu nous a donné des doigts, pourquoi les offenser avec du métal ? Les détails varient selon les sources, et certains auteurs l'ont confondue avec une autre mariée byzantine. Mais l'indignation, elle, était bien réelle, et elle dura.",
        },
      },
      {
        type: "quote",
        text: {
          en: "Every object on your table was once somebody's daring idea.",
          tr: "Sofrandaki her nesne bir zamanlar birinin cesur fikriydi.",
          fr: "Chaque objet de votre table fut un jour l'idée audacieuse de quelqu'un.",
        },
      },
      { type: "h", text: { en: "The slow road to France", tr: "Fransa'ya uzanan yavaş yol", fr: "La lente route vers la France" } },
      {
        type: "p",
        text: {
          en: "In Italy the fork slowly found its place. When Catherine de' Medici married the future Henry II of France in 1533, she is often credited with bringing it north. Historians are more careful: she may have helped, but the fork was still slow to catch on, and much of northern Europe only embraced it in the eighteenth century.",
          tr: "İtalya'da çatal yavaş yavaş yerini buldu. Caterina de' Medici 1533'te Fransa'nın gelecekteki kralı II. Henri ile evlendiğinde, çatalı kuzeye onun götürdüğü sık sık söylenir. Tarihçiler daha temkinlidir: katkısı olmuş olabilir, ama çatal yine de yavaş yayıldı ve Kuzey Avrupa'nın büyük kısmı onu ancak on sekizinci yüzyılda benimsedi.",
          fr: "En Italie, la fourchette trouva peu à peu sa place. Lorsque Catherine de Médicis épousa en 1533 le futur Henri II, on lui attribue souvent de l'avoir apportée en France. Les historiens sont plus prudents : elle a pu y contribuer, mais la fourchette resta lente à s'imposer, et une grande partie de l'Europe du Nord ne l'adopta qu'au XVIIIe siècle.",
        },
      },
      {
        type: "p",
        text: {
          en: "So the next time you lay a fork on linen, lay it like a small piece of history: a thousand years of scandal, finally at rest beside the plate.",
          tr: "Bir dahaki sefere keten örtünün üzerine bir çatal bıraktığında, onu küçük bir tarih parçası gibi bırak: bin yıllık bir skandal, sonunda tabağın yanında huzur bulmuş.",
          fr: "La prochaine fois que vous poserez une fourchette sur le lin, posez-la comme un petit morceau d'histoire : mille ans de scandale, enfin au repos près de l'assiette.",
        },
      },
    ],
    sources: [
      { title: "How the simple fork almost tore apart the fabric of society (National Geographic)", url: "https://www.nationalgeographic.com/history/article/dinner-fork-history" },
      { title: "The thousand-year story of how the fork crossed Europe (Popular Science)", url: "https://www.popsci.com/science/the-thousand-year-story-of-how-the-fork-crossed-europe-and-onto-your-plate-today" },
      { title: "Fork (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fork" },
    ],
  },
  {
    slug: "yari-soyulmus-limon",
    date: "2026-11-24",
    art: "red",
    category: { en: "Art", tr: "Sanat", fr: "Art" },
    title: {
      en: "The Half-Peeled Lemon: What Dutch Masters Knew About a Beautiful Table",
      tr: "Yarı Soyulmuş Limon: Hollandalı Ustalar Güzel Bir Sofra Hakkında Ne Biliyordu?",
      fr: "Le Citron à Demi Pelé : Ce que les Maîtres Hollandais Savaient d'une Belle Table",
    },
    lead: {
      en: "In the seventeenth century, painters turned the dinner table into a stage: silver, oysters, wine and a single lemon, its peel spiralling over the edge. Four centuries later, it is still the best lesson in tablescaping.",
      tr: "On yedinci yüzyılda ressamlar yemek masasını bir sahneye dönüştürdü: gümüş, istiridye, şarap ve kabuğu masanın kenarından sarkan tek bir limon. Dört yüzyıl sonra bile masa düzenlemenin en iyi dersi hâlâ bu.",
      fr: "Au XVIIe siècle, les peintres firent de la table un théâtre : argenterie, huîtres, vin et un seul citron dont l'écorce s'enroule par-dessus le bord. Quatre siècles plus tard, c'est toujours la meilleure leçon d'art de la table.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Stand in front of a Dutch banquet still life and your eye moves like a guest's: from a tilted silver cup to a crumpled white napkin, from oysters on a pewter plate to the glow of a wine glass. Then it stops at the lemon, half-peeled, its golden ribbon hanging into the air.",
          tr: "Bir Hollanda ziyafet natürmortunun karşısında durun; gözünüz bir misafirinki gibi dolaşır: devrilmiş gümüş bir kadehten buruşmuş beyaz peçeteye, kalay tabaktaki istiridyelerden şarap kadehinin parıltısına. Sonra limonda durur: yarı soyulmuş, altın rengi kabuğu havaya sarkan bir limon.",
          fr: "Placez-vous devant une nature morte de banquet hollandaise et votre regard se promène comme celui d'un invité : d'une coupe d'argent renversée à une serviette blanche froissée, des huîtres sur un plat d'étain à l'éclat d'un verre de vin. Puis il s'arrête sur le citron, à demi pelé, son ruban doré suspendu dans le vide.",
        },
      },
      { type: "h", text: { en: "Abundance, with a warning", tr: "Bolluk ve bir uyarı", fr: "L'abondance, avec un avertissement" } },
      {
        type: "p",
        text: {
          en: "These lavish paintings, called pronkstillevens, grew out of Antwerp in the 1640s and spread quickly to the Dutch Republic. They celebrated a wealthy age, yet scholars often read them as vanitas pictures too: the half-eaten pie, the overturned glass and the fading flower remind us that every feast ends.",
          tr: "Pronkstilleven adı verilen bu gösterişli resimler 1640'larda Anvers'te doğdu ve hızla Hollanda Cumhuriyeti'ne yayıldı. Zengin bir çağı kutluyorlardı; ama sanat tarihçileri onları çoğu zaman birer vanitas resmi olarak da okur: yarısı yenmiş turta, devrilmiş kadeh ve solan çiçek, her şölenin bir gün bittiğini hatırlatır.",
          fr: "Ces tableaux fastueux, appelés pronkstillevens, sont nés à Anvers dans les années 1640 et se sont vite répandus dans la République hollandaise. Ils célébraient une époque prospère, mais les historiens de l'art y lisent souvent aussi des vanités : la tourte entamée, le verre renversé et la fleur fanée rappellent que tout festin a une fin.",
        },
      },
      {
        type: "p",
        text: {
          en: "And the lemon? Pieter Claesz made the half-peeled lemon a signature of the genre. Some read its bright peel as a sign of prosperity and far-reaching trade; others as the bitterness hidden inside sweetness. Art historians still do not agree, which is exactly why it is so alive.",
          tr: "Peki limon? Pieter Claesz, yarı soyulmuş limonu bu türün imzası hâline getirdi. Kimileri parlak kabuğunu refahın ve uzaklara uzanan ticaretin işareti olarak okur; kimileri tatlılığın içine saklanmış acılık olarak. Sanat tarihçileri hâlâ anlaşamıyor; onu bu kadar canlı kılan da tam olarak bu.",
          fr: "Et le citron ? Pieter Claesz fit du citron à demi pelé une signature du genre. Certains voient dans son écorce éclatante le signe de la prospérité et d'un commerce lointain ; d'autres, l'amertume cachée dans la douceur. Les historiens de l'art ne sont toujours pas d'accord, et c'est précisément ce qui le rend si vivant.",
        },
      },
      {
        type: "quote",
        text: {
          en: "A perfect table is beautiful. A table with one undone detail is unforgettable.",
          tr: "Kusursuz bir sofra güzeldir. Yarım bırakılmış tek bir ayrıntısı olan sofra ise unutulmaz.",
          fr: "Une table parfaite est belle. Une table avec un seul détail inachevé est inoubliable.",
        },
      },
      { type: "h", text: { en: "Borrow the painter's eye", tr: "Ressamın gözünü ödünç al", fr: "Empruntez l'œil du peintre" } },
      {
        type: "p",
        text: {
          en: "Do not set everything straight. Let one napkin fall loose, leave a pear cut open on the board, let a single lemon keep its curl of peel. The Dutch masters knew that a table looks most alive just after someone has touched it.",
          tr: "Her şeyi dümdüz dizme. Bir peçete gevşekçe düşsün, tahtanın üzerinde kesilmiş bir armut kalsın, tek bir limon kıvrılan kabuğunu korusun. Hollandalı ustalar bir sofranın en canlı hâlini, birinin ona dokunduğu andan hemen sonra aldığını biliyordu.",
          fr: "Ne mettez pas tout au cordeau. Laissez une serviette tomber librement, une poire ouverte sur la planche, un seul citron garder sa boucle d'écorce. Les maîtres hollandais savaient qu'une table n'est jamais plus vivante qu'un instant après qu'on l'a touchée.",
        },
      },
    ],
    sources: [
      { title: "Pronkstilleven (Wikipedia)", url: "https://en.wikipedia.org/wiki/Pronkstilleven" },
      { title: "The Dutch painters who kept their eyes peeled for citrus fruit (Apollo Magazine)", url: "https://apollo-magazine.com/?p=988242" },
      { title: "Dutch banquet scenes (The Public Domain Review)", url: "https://publicdomainreview.org/collection/dutch-banquet-scenes/" },
    ],
  },
  {
    slug: "a-la-russe",
    date: "2026-11-24",
    art: "columns",
    category: { en: "History", tr: "Tarih", fr: "Histoire" },
    title: {
      en: "À la Russe: Why Dinner Arrives One Course at a Time",
      tr: "À la Russe: Yemekler Neden Tek Tek Gelir?",
      fr: "À la Russe : Pourquoi le Dîner Arrive Plat par Plat",
    },
    lead: {
      en: "For centuries, a grand dinner meant every dish on the table at once. Then, in the nineteenth century, the table emptied out and the courses began to arrive in order. That quiet revolution still shapes every restaurant you love.",
      tr: "Yüzyıllar boyunca görkemli bir akşam yemeği, bütün tabakların aynı anda masada olması demekti. Sonra on dokuzuncu yüzyılda masa boşaldı ve yemekler sırayla gelmeye başladı. Bu sessiz devrim, sevdiğin her restoranı hâlâ biçimlendiriyor.",
      fr: "Pendant des siècles, un grand dîner signifiait tous les plats sur la table en même temps. Puis, au XIXe siècle, la table s'est vidée et les plats ont commencé à arriver dans l'ordre. Cette révolution silencieuse façonne encore tous les restaurants que vous aimez.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Under service à la française, the table was the show. Roasts, pies, sauces and sweets were laid out together in careful symmetry, and guests helped themselves to whatever was within reach. It was spectacular to look at, and the food was often cold by the time anyone ate it.",
          tr: "Service à la française usulünde gösterinin kendisi masaydı. Kızartmalar, turtalar, soslar ve tatlılar özenli bir simetriyle hep birlikte dizilir, misafirler uzanabildikleri tabaktan kendileri alırdı. Seyretmesi muhteşemdi; ama yemek çoğu zaman biri yiyene kadar soğurdu.",
          fr: "Avec le service à la française, la table était le spectacle. Rôtis, tourtes, sauces et douceurs étaient disposés ensemble dans une symétrie soignée, et chacun se servait de ce qui était à portée de main. C'était magnifique à regarder, et les plats étaient souvent froids au moment d'être mangés.",
        },
      },
      { type: "h", text: { en: "A revolution of time and space", tr: "Zamanın ve mekânın devrimi", fr: "Une révolution du temps et de l'espace" } },
      {
        type: "p",
        text: {
          en: "Over the nineteenth century, service à la russe took its place: courses served one after another, plated or carved away from the table. By the 1860s the fashionable in America had made the switch; in France the old style faded around the end of the Second Empire. The difference, one food historian notes, is a matter of time and space.",
          tr: "On dokuzuncu yüzyıl boyunca onun yerini service à la russe aldı: yemekler birbiri ardına, masadan uzakta tabağa konarak ya da kesilerek servis edildi. 1860'lara gelindiğinde Amerika'nın şık çevreleri bu usule geçmişti; Fransa'da eski usul İkinci İmparatorluk'un sonlarına doğru silindi. Bir yemek tarihçisinin dediği gibi, aradaki fark bir zaman ve mekân meselesidir.",
          fr: "Au fil du XIXe siècle, le service à la russe prit sa place : les plats servis l'un après l'autre, dressés ou découpés loin de la table. Dès les années 1860, les élégants d'Amérique avaient adopté ce style ; en France, l'ancien service s'effaça vers la fin du Second Empire. La différence, note un historien de la cuisine, est une affaire de temps et d'espace.",
        },
      },
      {
        type: "p",
        text: {
          en: "Something beautiful happened to the table itself. Freed from platters, it made room for flowers, candelabra, fine glass and long runs of linen. The table stopped being a buffet and became a setting.",
          tr: "Asıl güzel olan, masanın kendisine olanlardı. Servis tabaklarından kurtulan masada çiçeklere, şamdanlara, ince camlara ve uzun keten örtülere yer açıldı. Masa bir büfe olmaktan çıktı, bir sahneye dönüştü.",
          fr: "Il arriva quelque chose de beau à la table elle-même. Libérée des plats, elle fit place aux fleurs, aux candélabres, au verre fin et aux longues étendues de lin. La table cessa d'être un buffet pour devenir un décor.",
        },
      },
      {
        type: "quote",
        text: {
          en: "When the food leaves the centre of the table, beauty moves in.",
          tr: "Yemek masanın ortasından çekilince, oraya güzellik yerleşir.",
          fr: "Quand les plats quittent le centre de la table, la beauté s'y installe.",
        },
      },
      { type: "h", text: { en: "Both, at your table", tr: "Senin sofranda ikisi birden", fr: "Les deux, à votre table" } },
      {
        type: "p",
        text: {
          en: "The old style never really disappeared; it lives on as the buffet and family-style dining. Try both in one evening: a plated first course to set the mood, then a generous shared dish passed hand to hand. Ceremony first, warmth after.",
          tr: "Eski usul aslında hiç kaybolmadı; açık büfede ve ortaya servis edilen ev usulü sofralarda yaşıyor. İkisini aynı akşamda dene: havayı kurmak için tabakta servis edilen bir ilk yemek, ardından elden ele dolaşan cömert bir ortak tabak. Önce tören, sonra sıcaklık.",
          fr: "L'ancien service n'a jamais vraiment disparu : il vit dans le buffet et le service à partager. Essayez les deux en une soirée : une entrée dressée à l'assiette pour installer l'atmosphère, puis un plat généreux qui passe de main en main. La cérémonie d'abord, la chaleur ensuite.",
        },
      },
    ],
    sources: [
      { title: "Service à la russe (Wikipedia)", url: "https://en.wikipedia.org/wiki/Service_%C3%A0_la_russe" },
      { title: "Service à la française (Wikipedia)", url: "https://en.wikipedia.org/wiki/Service_%C3%A0_la_fran%C3%A7aise" },
      { title: "À la russe and à la française (Hertzmann)", url: "https://www.hertzmann.com/articles/2004/service/" },
    ],
  },
  {
    slug: "kusurun-guzelligi",
    date: "2026-11-24",
    art: "olive",
    category: { en: "Aesthetics", tr: "Estetik", fr: "Esthétique" },
    title: {
      en: "The Beauty of Imperfection: Wabi-Sabi at the Table",
      tr: "Kusurun Güzelliği: Sofrada Wabi-Sabi",
      fr: "La Beauté de l'Imperfection : Le Wabi-Sabi à Table",
    },
    lead: {
      en: "A crooked bowl, a cup mended with gold, plates that do not quite match. Japan's oldest idea of beauty was born at a tea table, and it may be the most modern thing you can bring to yours.",
      tr: "Biraz eğri bir kâse, altınla onarılmış bir fincan, tam olarak birbirini tutmayan tabaklar. Japonya'nın en eski güzellik fikri bir çay sofrasında doğdu ve kendi sofrana getirebileceğin en modern şey olabilir.",
      fr: "Un bol un peu de travers, une tasse réparée à l'or, des assiettes qui ne s'accordent pas tout à fait. La plus ancienne idée japonaise de la beauté est née autour d'une table à thé, et c'est peut-être la chose la plus moderne que vous puissiez apporter à la vôtre.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Wabi-sabi is hard to translate and easy to feel: the beauty of things that are imperfect, impermanent and incomplete. It grew from Zen Buddhism and took shape in the tea ceremony, most famously through the sixteenth-century tea master Sen no Rikyū, who preferred humble, hand-made bowls to perfect imported porcelain.",
          tr: "Wabi-sabi'yi çevirmek zor, hissetmek kolay: kusurlu, geçici ve tamamlanmamış olanın güzelliği. Zen Budizmi'nden beslendi ve çay seremonisinde biçimlendi; en çok da kusursuz ithal porselen yerine mütevazı, el yapımı kâseleri seçen on altıncı yüzyıl çay ustası Sen no Rikyū ile tanınır.",
          fr: "Le wabi-sabi est difficile à traduire et facile à ressentir : la beauté de ce qui est imparfait, éphémère et inachevé. Né du bouddhisme zen, il a pris forme dans la cérémonie du thé, notamment avec le maître de thé du XVIe siècle Sen no Rikyū, qui préférait des bols humbles et faits main à une porcelaine importée parfaite.",
        },
      },
      { type: "h", text: { en: "Gold in the cracks", tr: "Çatlakların içindeki altın", fr: "De l'or dans les fêlures" } },
      {
        type: "p",
        text: {
          en: "Its most poetic gesture is kintsugi: mending broken pottery with lacquer dusted with gold. Instead of hiding the break, it traces it. The bowl does not pretend nothing happened; it becomes more precious because something did.",
          tr: "En şiirsel jesti kintsugi'dir: kırık seramiği altın tozu serpilmiş vernikle onarmak. Kırığı saklamak yerine onu çizer. Kâse hiçbir şey olmamış gibi davranmaz; bir şey olduğu için daha değerli hâle gelir.",
          fr: "Son geste le plus poétique est le kintsugi : réparer une céramique brisée avec une laque saupoudrée d'or. Au lieu de cacher la cassure, il la souligne. Le bol ne fait pas comme si rien n'était arrivé ; il devient plus précieux parce que quelque chose est arrivé.",
        },
      },
      {
        type: "quote",
        text: {
          en: "A table that has been lived at is more beautiful than one that has only been arranged.",
          tr: "Etrafında yaşanmış bir sofra, yalnızca düzenlenmiş olandan daha güzeldir.",
          fr: "Une table où l'on a vécu est plus belle qu'une table seulement arrangée.",
        },
      },
      { type: "h", text: { en: "Three ways to bring it home", tr: "Evine getirmenin üç yolu", fr: "Trois façons de l'adopter" } },
      {
        type: "p",
        text: {
          en: "Mix your plates: a set where every piece is a little different feels more alive than a flawless matching service. Keep the chipped bowl your grandmother used, and serve something in it. And choose natural, slightly wrinkled linen over pressed perfection.",
          tr: "Tabaklarını karıştır: her parçası biraz farklı bir takım, kusursuz ve birebir eşleşen bir servisten daha canlı hissettirir. Büyükanneni hatırlatan kenarı kırık kâseyi sakla ve içinde bir şey ikram et. Ütülü kusursuzluk yerine doğal, hafif buruşuk keteni seç.",
          fr: "Mélangez vos assiettes : un service où chaque pièce est un peu différente semble plus vivant qu'un ensemble parfaitement assorti. Gardez le bol ébréché de votre grand-mère et servez-y quelque chose. Et préférez un lin naturel, un peu froissé, à une perfection repassée.",
        },
      },
      {
        type: "p",
        text: {
          en: "A word of caution: wabi-sabi is not a beige room with one chunky bowl. It is not a look you buy. It is a way of seeing what you already have, slowly and with affection.",
          tr: "Küçük bir uyarı: wabi-sabi, içinde tek bir iri kâse duran bej bir oda değildir. Satın alınan bir görünüm hiç değildir. Zaten sahip olduklarına yavaşça ve sevgiyle bakmanın bir yoludur.",
          fr: "Une mise en garde : le wabi-sabi n'est pas une pièce beige avec un gros bol. Ce n'est pas un style que l'on achète. C'est une façon de regarder ce que l'on possède déjà, lentement et avec affection.",
        },
      },
    ],
    sources: [
      { title: "Wabi-sabi (Wikipedia)", url: "https://en.wikipedia.org/wiki/Wabi-sabi" },
      { title: "Kintsugi (Wikipedia)", url: "https://en.wikipedia.org/wiki/Kintsugi" },
      { title: "Wabi-Sabi: The Japanese Art of Finding Beauty in Imperfect Ceramics (My Modern Met)", url: "https://mymodernmet.com/wabi-sabi-japanese-ceramics" },
    ],
  },
  {
    slug: "ekmek-solda-icecek-sagda",
    date: "2026-11-24",
    art: "winter",
    category: { en: "Etiquette", tr: "Sofra Adabı", fr: "Savoir-vivre" },
    title: {
      en: "Bread on the Left, Drinks on the Right: The Little Signs of a Well-Laid Table",
      tr: "Ekmek Solda, İçecek Sağda: İyi Kurulmuş Bir Sofranın Küçük İşaretleri",
      fr: "Le Pain à Gauche, la Boisson à Droite : Les Petits Signes d'une Table Bien Dressée",
    },
    lead: {
      en: "Whose bread plate is that? Which glass is mine? Elegant tables follow a quiet grammar. Learn it once, with a trick you can hide under the tablecloth, and you will never hesitate again.",
      tr: "Bu ekmek tabağı kimin? Hangi kadeh benim? Zarif sofralar sessiz bir dilbilgisine uyar. Masa örtüsünün altında saklayabileceğin bir hileyle onu bir kez öğren, bir daha asla tereddüt etme.",
      fr: "À qui est cette assiette à pain ? Quel verre est le mien ? Les belles tables suivent une grammaire discrète. Apprenez-la une fois, avec une astuce à cacher sous la nappe, et vous n'hésiterez plus jamais.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Every beautiful table hides a small moment of panic: a round table, eight guests, and two bread plates that could be yours. The good news is that place settings are not random. They follow a logic, and once you see it, you see it everywhere.",
          tr: "Her güzel sofra küçük bir panik anı saklar: yuvarlak bir masa, sekiz misafir ve senin olabilecek iki ekmek tabağı. İyi haber şu: servis düzeni rastgele değildir. Bir mantığı vardır ve onu bir kez gördüğünde her yerde görürsün.",
          fr: "Toute belle table cache un petit moment de panique : une table ronde, huit invités et deux assiettes à pain qui pourraient être la vôtre. La bonne nouvelle, c'est que le couvert n'est pas dressé au hasard. Il suit une logique, et une fois qu'on la voit, on la voit partout.",
        },
      },
      { type: "h", text: { en: "The b and the d", tr: "b ile d", fr: "Le b et le d" } },
      {
        type: "p",
        text: {
          en: "Under the table, touch each thumb to its forefinger and raise the other fingers. Your left hand makes a small b, your right hand a small d. B for bread, on your left; d for drinks, on your right. Etiquette guides such as the Emily Post Institute have taught this trick for years.",
          tr: "Masanın altında her iki elinin başparmağını işaret parmağına değdir, diğer parmaklarını yukarı kaldır. Sol elin küçük bir b, sağ elin küçük bir d oluşturur. B, İngilizcede ekmek (bread) için: solunda. D, içecekler (drinks) için: sağında. Emily Post Enstitüsü gibi görgü kuralları kaynakları bu hileyi yıllardır öğretiyor.",
          fr: "Sous la table, touchez chaque pouce avec l'index et levez les autres doigts. Votre main gauche forme un petit b, votre main droite un petit d. B pour le pain (bread), à gauche ; d pour les boissons (drinks), à droite. Des références du savoir-vivre comme l'Emily Post Institute enseignent cette astuce depuis des années.",
        },
      },
      {
        type: "quote",
        text: {
          en: "Good manners are a kindness: they let everyone stop worrying and start talking.",
          tr: "İyi görgü bir inceliktir: herkesin endişelenmeyi bırakıp sohbete başlamasını sağlar.",
          fr: "Les bonnes manières sont une gentillesse : elles permettent à chacun d'arrêter de s'inquiéter et de commencer à parler.",
        },
      },
      { type: "h", text: { en: "Forks left, knives right", tr: "Çatallar solda, bıçaklar sağda", fr: "Fourchettes à gauche, couteaux à droite" } },
      {
        type: "p",
        text: {
          en: "Forks sit to the left of the plate, knives to the right with their blades turned towards the plate, spoons beside the knives. You work from the outside in, one course at a time. The bread plate waits at the upper left, above the forks.",
          tr: "Çatallar tabağın soluna, bıçaklar ağızları tabağa dönük şekilde sağına, kaşıklar bıçakların yanına konur. Dışarıdan içeriye doğru, her yemekte bir takım kullanırsın. Ekmek tabağı sol üstte, çatalların üzerinde bekler.",
          fr: "Les fourchettes se placent à gauche de l'assiette, les couteaux à droite, lame tournée vers l'assiette, les cuillères à côté des couteaux. On procède de l'extérieur vers l'intérieur, un plat à la fois. L'assiette à pain attend en haut à gauche, au-dessus des fourchettes.",
        },
      },
      {
        type: "p",
        text: {
          en: "And if you are the host, set it this way and your guests will never have to think about it. That is the whole point of etiquette: not to test people, but to put them at ease.",
          tr: "Ev sahibi sensen sofrayı böyle kur; misafirlerin bunu hiç düşünmek zorunda kalmaz. Görgünün asıl amacı da budur: insanları sınamak değil, onları rahatlatmak.",
          fr: "Et si c'est vous qui recevez, dressez la table ainsi et vos invités n'auront jamais à y penser. C'est tout le sens du savoir-vivre : non pas mettre les gens à l'épreuve, mais les mettre à l'aise.",
        },
      },
    ],
    sources: [
      { title: "Table manners: b and d for bread and drink (Emily Post Institute)", url: "https://emilypost.com/advice/table-manners-video-b-and-d-for-bread-and-drink" },
      { title: "Basic table setting (Emily Post Institute)", url: "https://emilypost.com/advice/basic-table-setting" },
      { title: "How to set a table (Food Network)", url: "https://www.foodnetwork.com/how-to/packages/food-network-essentials/how-to-set-a-table" },
    ],
  },
];
