# Ouisecretvie Studio · web sitesi

*where ideas breathe* — www.ouisecretvie.store

Next.js 16, TypeScript ve Tailwind CSS ile yapılmış, üç dilli (EN · TR · FR)
bir web sitesi. iPad ve telefonda rahat kullanılacak şekilde tasarlandı.

## Sayfalar

| Adres | Sayfa |
|---|---|
| `/en`, `/tr`, `/fr` | Ana Sayfa |
| `/…/gallery` | Sofralar (konsept galerisi) |
| `/…/about` | Hakkında |
| `/…/contact` | İletişim |

Ziyaretçi `/` adresine girince telefonunun diline göre otomatik olarak
`/tr`, `/fr` ya da `/en` sayfasına yönlendirilir.

## Neyi nereden değiştiririm?

| Ne | Dosya |
|---|---|
| Sitedeki tüm yazılar (3 dil) | `src/content/dictionaries.ts` |
| Sofra konseptleri (galeri) | `src/content/gallery.ts` |
| Instagram, e-posta, alan adı | `src/content/site.ts` |
| Renkler | `src/app/globals.css` (en üstteki `:root` bölümü) |

### Gerçek bir görsel eklemek

1. Görseli `public/gallery/` klasörüne yükle (örneğin `kirmizi-masa.jpg`).
2. `src/content/gallery.ts` içinde ilgili sofraya şu satırı ekle:
   `image: "/gallery/kirmizi-masa.jpg",`
3. Çizilmiş yer tutucunun yerine gerçek görsel görünür.

GitHub'da iPad'den: dosyaya gir → kalem simgesi (Edit) → değiştir → **Commit changes**.

## Bilgisayarda çalıştırmak (isteğe bağlı)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # yayına hazır sürümü oluşturur
```

## Yayına almak

Depo [Vercel](https://vercel.com)'e bağlanınca her değişiklik otomatik yayına
girer. Ayar gerekmez; Vercel bunun bir Next.js projesi olduğunu kendisi anlar.

`screenshots/` klasöründe iPad ve telefon ekran görüntüleri var.
