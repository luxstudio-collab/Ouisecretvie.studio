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
