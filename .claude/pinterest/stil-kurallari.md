# Ouisecretvie — Pinterest stil kuralları ve kombin geçmişi

Kaynak: "Kombin sohbeti" oturum dökümü (30.08–17.11.2026). Pinterest hesabı: `secretvie` (Metricool marka ID 8308769, saat dilimi Europe/Istanbul).

## Kalıcı kurallar (Başak'ın geri bildirimleri)

- **Beymen yok.** Ürünler markaların kendi sitelerinden, tercihen az bilinen Türk markalarından.
- **Orta boy topuk asla.** Ya düz (ince tabanlı loafer, babet) ya da ince stiletto (akşam). Kalın taban / kalın topuk elenir.
- **Canlı renk yok** (neon, fuşya, elektrik mavisi, canlı kırmızı). Sıcak nötrler; altın yalnızca takıda.
- **Tarz sözlüğü = terzi işi.** Kalıplı/kruvaze ceket, kalem veya pili etek, düz paça pantolon, beyaz gömlek, yapılı çanta, altın takı. Gri flanel, taş, tüvit.
- Banal, "babaanne" kalıpsız elbiseler ve gala/abiye görünümü (straplez, payet) yok.
- Gündüz: topuk yok. Akşam: ince topuk ve portföy serbest.
- Kitsch detay yok (ör. hasır üstüne dudak işlemesi).
- Kolaj: beyaz fon flat-lay, 1000×1500 (2:3), 7 parça, toplam ~45–52k TL, hepsi stokta.
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
- Pin linki: tüm ürünler istendiği için açıklama dosyasının GitHub sayfası. Pin açıklaması ≤500 karakter, başlık ≤100.
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
