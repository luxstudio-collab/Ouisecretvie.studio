> **TAŞINDI (23.11.2026):** Bu dosya ve Pinterest çalışması (kurallar, betikler, kombin çıktıları) artık **luxstudio-collab/Pinterest** reposunun `main` dalında; buradaki kopya güncellenmiyor. Instagram dosyaları (`.claude/instagram`, `ig-*` skill'leri) bu repoda kalıyor.

# Ouisecretvie — Pinterest stil kuralları ve kombin geçmişi

Kaynak: "Kombin sohbeti" oturum dökümü (30.08–17.11.2026). Pinterest hesabı: `secretvie` (Metricool marka ID 8308769, saat dilimi Europe/Istanbul).

## Kalıcı kurallar (Başak'ın geri bildirimleri)

- **Marka karışımı (23.11 güncel):** 8 Kasım gibi karışık. Lüks markalar Beymen'den olabilir; yanında Türk markaları (Koton, Network, Desa, Damat Tween, Dossha, Bluemint, Derimod, Lovy Atelier, Arzu Kaprol...). Hepsini tek satıcıdan çekme.
- **Topuk serbest (23.11 güncel):** 8 Kasım gibi; 6 cm topuklu bot, 9,5 cm stiletto, düz loafer hepsi olabilir. (Eylüldeki "orta topuk yok" kuralı kaldırıldı.)
- **Canlı renk yok** (neon, fuşya, elektrik mavisi, canlı kırmızı). Sıcak nötrler; altın yalnızca takıda.
- **Tarz sözlüğü = terzi işi.** Kalıplı/kruvaze ceket, kalem veya pili etek, düz paça pantolon, beyaz gömlek, yapılı çanta, altın takı. Gri flanel, taş, tüvit.
- Banal, "babaanne" kalıpsız elbiseler ve gala/abiye görünümü (straplez, payet) yok.
- Kitsch detay yok (ör. hasır üstüne dudak işlemesi).
- **Bütçe kombine göre değişir (23.11 güncel):** biri uygun, biri orta, biri lüks. Sabit 45–52k sınırı yok. Hepsi stokta olmalı.
- Kolaj formatı için aşağıdaki "Pin formatı" ve "STİL ATLASI" bölümlerine bak (1080×1350).
- Dolar/sterlin satan markalar dışarıda (TL toplamı bozuluyor).
- Doğrulanmamış indirim/fiyat yazılmaz.

## Ürün çekilebilen markalar

Ceren Ocak (fiyatlar yükseldi, ceketler 28–65k), Arzu Kaprol, Derimod, Lovy Atelier, Gizia, Besign, Berrin Özkan, Elif Cigizoğlu, Lug Von Siga, Meltem Özbek, Nihan Peker, Sudi Etuz, Peracas; erkek: Bluemint.
Kataloğu kapalı: Ipekyol, Twist, Vakko, Desa, Network.

## Kombin geçmişi

| Tarih | Kombin | Durum |
|---|---|---|
| 29.08 | Ekru & Çikolata Ada Kombini (Beymen) | eski kural öncesi |
| 24.09 | Ege Öğle Yemeği — Kırık Beyaz & Altın | reddedildi (banal) |
| 24.09 | Eylül Akşamı — Vizon & Bordo | reddedildi |
| 24.09 | Eylül Akşamı — Mürdüm & Siyah | reddedildi (Beymen) |
| 24.09 | Eylül Akşamı — Taş & Gri Flanel (Ceren Ocak, Derimod, Lovy Atelier) · 49.128 TL | reddedildi |
| 02.10 | Ekim Akşamı — Pili & Tüvit (Paris SS27 esinli) · 50.798 TL | son onaylı yön |
| 16.11 | Stil Atlası: Kadın Taş rengi takım · 47.200 TL | hazır |
| 16.11 | Stil Atlası: Erkek Kasım akşam yemeği · 29.549 TL | hazır |
| 16.11 | Stil Atlası: Kadın Yılbaşı — Siyah elbise, bordo topuk · 49.159 TL | hazır |

Kolaj görselleri ve açıklama dosyaları Başak'ın Mac'inde (`~/Desktop/ouisecretvie-*.jpg`, `~/kisisel-projeler/pinterest-otomasyon/aciklama-*.txt`); bu bulut ortamında yok.

## Pin formatı (kombin kolajı) — Başak'ın referanslarına göre

- Her kombin **tek görsel**: 1080×1350 (4:5), beyaz fon, sadece ürünler, manken yok.
- **Görselin içinde yazı yok.** Kombin adı, parça listesi ve yorum `aciklama-<kombin>.txt` dosyasına yazılır.
- **Parçalar birbirine biner**, gölge yok. Kopuk ızgara değil, tek bir bütün gibi durmalı.
- Dizilim (referans: 03-yeni-ikon, 04-dilara-sporty, 05-erkek-yeni-ikon):
  sol üstte üst parça · ortada büyük dış giyim (üst parçanın üstüne biner) · sağda boydan pantolon/etek (dış giyimin altına biner) ·
  solda dış giyimin üstüne binen çanta · çantanın altında saat (kadında bileklik de olur) · altta ortada ayakkabı (pantolonun üstüne biner) ·
  sağ üstte güneş gözlüğü · gözlüğün altında küpe.
- 7-8 parça: üst, dış giyim, alt, çanta, saat/bileklik, ayakkabı, gözlük, küpe.
- Gözlük ve saat: Bluemint (GÜNEŞ GÖZLÜĞÜ, KOL SAATİ); Bluemint süet tote de var.
- Ürün görseli beyaz fonda **ürün çekimi** olmalı. Gizia ve Ceren Ocak mankenli/gri fon çekiyor, kolaja giremez.
  Beyaz fon ürün çekimi olanlar: Bluemint, Arzu Kaprol, Derimod (img0), Lovy Atelier (img0; sonraki görseller kutu).
- `aciklama-<kombin>.txt`: başlık, 2-3 cümle yorum, numaralı parça listesi (marka, fiyat, link), toplam.
- Betikler: `scripts/pinterest/collage2.py` (yerleşim), `desc.py` (açıklama), `white.py` (beyaz fon görsel seçimi). Çıktılar `pinterest/<tarih>/`.

## Kalıcı iş akışı kuralları (23.11.2026'da Başak'tan)

- **Renk uyumu Pantone'dan kontrol edilir.** Her kombinin paleti Pantone'un sezon raporları / renk harmonileriyle karşılaştırılır (pantone.com; ağ izni yoksa pantone.com sonuçlarıyla web araması).
  - AW26 notu: Pantone NYFW AW26 paletinde kahve (19-1521 Red Mahogany) ile derin okyanus mavisi (19-4033 Poseidon) aynı sezon paletinde. Başak'ın yorumu: kahve + siyah uyar ama **patlatan lacivert**. Kahve kombinlerde vurgu rengi olarak lacivert dene.
- **Her gün yeni bir influencer / hesap incelenir** ve bulgular kombin diline eklenir (hesap adı, öne çıkan 3 kombin kodu, alınacak fikir).
- **Özel günler ve etkinlikler** her plan öncesi kontrol edilir; kombinler buna göre kurulur (ör. Öğretmenler Günü, Black Friday, yılbaşı, moda haftaları).

## Pinterest paylaşım ayarları

- Metricool marka ID 8308769, hesap `secretvie`. Kombin panosu: **Stylechic✨** (board id 336151628376723122). Diğer ilgili panolar: Kombin (336151628376713506), Winter Looks🤍 (336151628376736777).
- Görsel: repodaki dosyanın commit SHA'lı raw.githubusercontent.com linki (repo herkese açık).
- ~~Pin linki = kombinin ana parçasının ürün sayfası~~ (23.11 akşam: yerine sitedeki kombin sayfası kullanılıyor, aşağıya bak) (Bluemint için `https://www.bluemint.com/products/<handle>`; bulut ortamı yurt dışı IP olduğundan global siteye yönleniyor, Türkiye'den açılır) (insanlar tıklayıp satın alabilsin). GitHub linki KULLANMA (açılmıyor, 23.11'de Başak bildirdi). Diğer parçalar açıklamada marka + ürün adıyla. Pin açıklaması ≤500 karakter, başlık ≤100.
- İstenirse her parça için ayrı ürün pini (o ürünün linkiyle) de açılabilir.
- Yayınlanmış pinin linki Metricool'dan değişmez; Pinterest'te "Pini düzenle → Web sitesi" alanından elle değiştirilir.
- İlk pin: 23.11.2026 17:45, Lacivert & Bitter.

## STİL ATLASI — günlük mail formatı (referans: "Stil Atlası · 8 Kasım · Günün kombinleri", Başak'ın beğendiği)

**Konu:** `Stil Atlası · <gün> <Ay> · Günün kombinleri` — kendine (Başak'ın adresine) gönderilir.

**Kurgu: 5 kombin**
1. KOMBİN 1 · kadın · bir ikon/influencer'dan (8 Kasım: Caroline de Maigret, "az ama doğru" Paris formülü)
2. KOMBİN 2 · kadın · renk bloklama / sezon paleti (8 Kasım: Leonie Hanne + Pantone Cloud Dancer, SK 26/27)
3. KOMBİN 3 · kadın · Türk ikon (8 Kasım: Ece Sükan, İstanbul '70, süet ve altın)
4. KOMBİN 4 · **sporty şık** kadın (8 Kasım: Dilara Aydın; dikişsiz fermuarlı ceket, wide-leg eşofman, şişme yelek, Speedcat, gümüş metaller, kalkan gözlük)
5. KOMBİN 5 · **erkek** (8 Kasım: Jacob Elordi, "Soho kitapçısı" off-duty; kruvaze palto, polo yaka triko, chino, süet loafer, örgü tote, Persol)

**Bölümler (sırayla)**
1. Başlık: küçük aralıklı büyük harf `STİL ATLASI · 8 KASIM`, altında Georgia italik "Günün kombinleri".
2. **Bugün moda dünyasında:** 3-4 güncel haber (her biri "kaynak" linkli) + ayın takvimi ve aktif kampanyalar (11.11, Black Friday, mağaza indirimleri).
3. **Bugün kataloğa eklenenler** (bej kutu): o gün eklenen 2 ikon/influencer (biri Türk kadın, biri yabancı erkek gibi) — kim, tarzı, hangi kombine ilham verdiği.
4. Her kombin için:
   - `KOMBİN N` eyebrow, Georgia italik 28px başlık (ör. "Paris Lacivert: Erkek Ceket, Ham Jean ve Altın Detaylar").
   - **Tek cümlelik nasıl giyilir formülü**, ikonun adıyla biter.
   - 1080×1350 kolaj (mailde 560px, ince kenarlık). Dosya adı `0N-<kısa-ad>-instagram.jpg`.
   - Numaralı ürün tablosu: `N. Kategori · Marka · açıklama (ürün linki)` + altında kahverengi (#8a5a3c) **kampanya/indirim satırı** (tarih aralığıyla) + sağda fiyat.
   - `Toplam liste fiyatı`.
   - **Instagram açıklaması** bloğu: başlık + 🤎 + formül cümlesi, numaralı `Kategori · Marka · fiyat` listesi, "Tüm linkler bio'da 🔗", hashtag'ler: `#kombin #stilönerisi #outfitinspo #oldmoney #sessizlüks #quietluxury #kasımkombini` + marka etiketleri.
5. Renkler: metin #2b2420/#3c2d23, vurgu #8a5a3c, ikincil #6b5d52, çizgi #eee7e1, zemin #f4f2ef. Fontlar: Georgia (başlık), Arial (metin).

**Ürün ve parça düzeni (8 Kasım örneklerinden)**
- Kadın: dış giyim + üst + alt + ayakkabı + çanta + saat + güneş gözlüğü (+ küpe). Erkek: palto + triko + pantolon + ayakkabı + çanta + saat + gözlük.
- Lüks ve uygun fiyatlı karışık: Bottega Veneta, Prada, Ferragamo, Loewe, Persol yanında Koton, Network, Desa, Damat Tween, Dossha, George Hogg, Louur, Reis. Satıcı olarak Beymen, Desa, Network, Koton, Sneaks Up, Damat Tween siteleri kullanılmış.
- Toplamlar 126.745 – 344.579 TL (8 Kasım). 45–52k sınırı bu formatta uygulanmamış.
- Renk dili Pantone/sezon paletine bağlanıyor (Cloud Dancer, SK 26/27, yanık zeytin, tarçın, çikolata, lacivert).

## Stil Atlası üretimi (otomatik)

- Betik: `python3 scripts/pinterest/atlas.py pinterest/<YYYY-MM-DD>/atlas.json` → kolajlar, `0N-<slug>-aciklama.txt` (Instagram açıklaması dahil), `atlas.html` (mail gövdesi, görseller `cid:att0..`), `atlas-onizleme.html`, `mail.json` (konu + Gmail ek referansları `sha256:<hash>:<yol>`).
- Gönderim: Gmail `send_message`, to = Başak'ın kendi adresi, `htmlBody` = atlas.html içeriği, `attachments` = mail.json'daki liste (inline). Base64 yazma; dosya referansı kullan.
- Erişim (ouisecretvie-studio ortamı): açık → Koton, Desa, Damat Tween, Bluemint, Derimod, Lovy Atelier, Arzu Kaprol, Ceren Ocak, Gizia, Pantone. **Bot korumalı (açılmıyor)** → Beymen, Network, Sneaks Up: korumayı atlatmaya çalışma; bu sitelerdeki ürünler için fiyatı web aramasıyla teyit et, stok doğrulanamazsa kampanya satırına "stok doğrulanamadı" yaz.
- Kolaj görseli mutlaka beyaz fonlu ürün çekimi olmalı (betik köşe rengi koyuysa UYARI basar).

## Pinterest "Kombin" panosu (secretvie) — 23.11.2026 analizi

- Okuma: `https://www.pinterest.com/secretvie/kombin.rss` (son ~25 pin; görseller i.pinimg.com, `/236x/` → `/474x/`). Ortamda pinterest.com ve i.pinimg.com açık. Her Stil Atlası öncesi panoya bak, son eklenen pinleri ilham olarak kullan.
- **Palet:** çikolata kahve + siyah baskın; camel, krem/ekru, gri; vurgu olarak lacivert (Pantone 19-3953 Sodalite Blue pini) ve bordo (Pantone kartlı pin). Pantone kartlı pinleri seviyor.
- **Sık parçalar:** süet/deri kahve ceket, kürk/shearling, kaşe kaban; sheer şifon kemerli bluz (Loro Piana tarzı); dökümlü/drape siyah korse üst; ispanyol paça ve düz paça pantolon, siyah maxi kalem/drape etek, koyu jean; kalın tabanlı kahve/siyah rugan loafer (GETSTYLED pinlerinde sık), sivri stiletto ve slingback, diz boyu kahve çizme; yapılı kahve çanta (YSL, Celine, Hermès Birkin tipi, Polène/Toteme), kapitone çanta; altın damla/dome küpe, kaplumbağa güneş gözlüğü, ipek eşarp, ince kemer, dikdörtgen altın saat.
- **Kolaj dili:** beyaz fonda üst üste binen ürünler (GETSTYLED by Sarah, Styled by Claire) — bizim 1080×1350 formatla aynı. Bazı pinlerde marka etiketleri ve Pantone kartı var.
- **Loafer kuralı (23.11, Başak):** loafer modele göre değişir. Sevdiği: parlak rugan, püsküllü (kilt) ya da penny, kalın/tırtıklı tabanlı koyu kahve-siyah loafer (panodaki GETSTYLED pinleri) ve George Hogg tipi altın madalyonlu penny loafer. Sevmediği: mat süet, metal tokalı "maskülen" Derimod loafer (23.11'de verdiğim, "kötü").
- **Pano zorunlu kaynak:** Başak panoyu sürekli güncelliyor. Her kombin turunda önce panonun son pinlerine bak; tarz analizine kat ve en az bir kombini doğrudan panodaki bir pinin alınabilir karşılığı olarak kur ("Panodan: ..." başlığıyla, formülde pinin kaynağını an).
- Son eklenenler (5 ve 23 Kasım): kahve-siyah lüks akşam (sheer bluz + Hermès + AUI), siyah korse/drape üst + maxi etek, kahve kapitone ceket + New Balance (sporty), süet ceket + gri tişört + rugan loafer.

## Web sitesi: kombin sayfaları (23.11.2026'dan itibaren)

- Site: https://ouisecretvie.vercel.app (Next.js, kodu `claude/ai-studio-website` dalında; Vercel bu daldan canlıya alıyor, push sonrası ~1-2 dk).
- Her kombinin bir sayfası var: `https://ouisecretvie.vercel.app/tr/looks/<slug>` → kolaj, formül, her ürün için marka + fiyat + "Mağazada gör" (Türkçe mağaza linki), toplam. Veri: `src/content/looks.json`, kolajlar `public/looks/`.
- **Pin linki = bu kombin sayfası.** Tek link ama oradan herkes her ürüne ulaşır. Pin açıklamasının sonu: "Tüm ürün linkleri pinde 🔗".
- Yeni kombinleri siteye ekleme: `python3 scripts/pinterest/site_export.py pinterest/<tarih>/atlas.json <site-worktree> <YYYY-MM-DD>` → `npm run build` → `claude/ai-studio-website` dalına push. atlas.json'da kombine `cinsiyet: "erkek"` ve `alt_baslik` (ör. "Kasım gündüz") eklenebilir.
- Instagram açıklamasında "Tüm linkler bio'da 🔗" kalır; bio linki `https://ouisecretvie.vercel.app/tr/looks` olmalı.
