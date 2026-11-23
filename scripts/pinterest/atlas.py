"""Stil Atlası üreticisi.

Kullanım:  python3 scripts/pinterest/atlas.py pinterest/<tarih>/atlas.json

atlas.json -> pinterest/<tarih>/ altına:
  0N-<slug>-instagram.jpg   1080x1350 kolajlar (üst üste binen dizilim, yazısız)
  0N-<slug>-aciklama.txt    parça listesi + Instagram açıklaması
  atlas.html                mail gövdesi (görseller cid:att0..attN-1 (Gmail inline sırası))
  atlas-onizleme.html       aynı sayfa, görseller dosya yoluyla (kontrol için)
  mail.json                 konu + Gmail eki için sha256 dosya referansları

atlas.json şeması:
{
  "tarih": "24 Kasım",                 # başlıkta görünen
  "haberler": [{"metin": "...", "kaynak": "https://..."}],
  "katalog":  [{"isim": "Ece Sükan", "etiket": "Türk, kadın", "metin": "..."}],
  "kombinler": [{
     "slug": "caroline-paris", "baslik": "...", "formul": "...",
     "hashtagler": ["#beymencollection", ...],          # sabit set otomatik eklenir
     "parcalar": [{
        "kategori": "Ceket", "marka": "Beymen Collection", "aciklama": "...",
        "url": "https://...", "fiyat": 28950, "kampanya": "...",   # kampanya boş olabilir
        "img": "https://...jpg", "slot": "dis",   # ust dis alt canta saat ayakkabi gozluk kupe
        "img_index": 0                              # opsiyonel
     }]
  }]
}
"""
import hashlib, html, io, json, os, subprocess, sys
from PIL import Image, ImageChops, ImageDraw, ImageFilter

SABIT_TAGLER = ["#kombin", "#stilönerisi", "#outfitinspo", "#oldmoney", "#sessizlüks",
                "#quietluxury", "#kasımkombini"]
# (x, y, w, h, anchor) 1080x1350 tuval üzerinde, referans: 8 Kasım kolajları
SLOT = {"ust": (105, 40, 350, 500, "top"), "dis": (330, 40, 520, 810, "top"),
        "gozluk": (615, 45, 380, 150, "center"), "kupe": (880, 165, 170, 150, "center"),
        "alt": (585, 425, 440, 885, "top"), "canta": (165, 445, 280, 370, "center"),
        "saat": (225, 820, 180, 250, "center"), "ayakkabi": (290, 975, 450, 240, "center")}
SIRA = ["ust", "dis", "alt", "canta", "saat", "ayakkabi", "gozluk", "kupe"]
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"


def tl(x):
    s = f"{x:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
    return (s[:-3] if s.endswith(",00") else s) + " TL"


def fetch(src):
    if os.path.exists(src):
        return Image.open(src).convert("RGB")
    if "cdn.shopify.com" in src or "/cdn/shop/" in src:
        src += ("&" if "?" in src else "?") + "width=1400"
    b = subprocess.run(["curl", "-sL", "--max-time", "60", "-A", UA, src], capture_output=True).stdout
    return Image.open(io.BytesIO(b)).convert("RGB")


def cutout(im):
    g = im.convert("L"); w, h = g.size
    corner = min(g.getpixel((x, y)) for x in (2, w - 3) for y in (2, h - 3))
    if corner < 225:
        print(f"  UYARI: fon beyaz değil (köşe {corner}); beyaz fonlu ürün görseli seç", file=sys.stderr)
    th = corner - 14
    ff = g.point(lambda v: 255 if v >= th else 0)
    for x in range(0, w, max(1, w // 60)):
        for y in (0, h - 1):
            if ff.getpixel((x, y)) == 255: ImageDraw.floodfill(ff, (x, y), 128)
    for y in range(0, h, max(1, h // 60)):
        for x in (0, w - 1):
            if ff.getpixel((x, y)) == 255: ImageDraw.floodfill(ff, (x, y), 128)
    a = ImageChops.invert(ff.point(lambda v: 255 if v == 128 else 0)).filter(ImageFilter.GaussianBlur(1))
    a = a.point(lambda v: 0 if v < 30 else v)
    rgba = im.convert("RGBA"); rgba.putalpha(a)
    return rgba.crop(a.point(lambda v: 255 if v > 40 else 0).getbbox())


def kolaj(parcalar, path, slot_override=None):
    C = Image.new("RGB", (1080, 1350), "white")
    by = {p["slot"]: p for p in parcalar if p.get("slot")}
    for s in SIRA:
        p = by.get(s)
        if not p: continue
        x, y, w, h, anc = (slot_override or {}).get(s, SLOT[s])
        im = cutout(fetch(p["img"])); im.thumbnail((w, h), Image.LANCZOS)
        px = x + (w - im.width) // 2; py = y if anc == "top" else y + (h - im.height) // 2
        C.paste(im, (px, py), im)
    C.save(path, quality=90)


E = html.escape
STY = dict(
    td1="padding:7px 0;border-bottom:1px solid #eee7e1;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#2b2420",
    td2="padding:7px 0;border-bottom:1px solid #eee7e1;font-family:Arial,Helvetica,sans-serif;font-size:13px;white-space:nowrap",
)


def main(spec_path):
    spec = json.load(open(spec_path)); out = os.path.dirname(os.path.abspath(spec_path))
    blocks, files = [], []
    for n, k in enumerate(spec["kombinler"], 1):
        stem = f"0{n}-{k['slug']}"
        img = os.path.join(out, f"{stem}-instagram.jpg")
        print("kolaj", stem, file=sys.stderr)
        kolaj(k["parcalar"], img, {s: tuple(v) for s, v in k.get("slot_override", {}).items()})
        files.append(img)
        tot = sum(p["fiyat"] for p in k["parcalar"])
        rows = []
        for i, p in enumerate(k["parcalar"], 1):
            kamp = f'<br><span style="color:#8a5a3c">{E(p["kampanya"])}</span>' if p.get("kampanya") else ""
            rows.append(f'<tr><td style="{STY["td1"]}"><b>{i}.</b> {E(p["kategori"])} · {E(p["marka"])} · '
                        f'<a href="{E(p["url"])}" style="color:#3c2d23">{E(p["aciklama"])}</a>{kamp}</td>'
                        f'<td align="right" valign="top" style="{STY["td2"]}">{tl(p["fiyat"])}</td></tr>')
        tags = " ".join(SABIT_TAGLER + k.get("hashtagler", []))
        ig = [f'{k["baslik"]} 🤎 {k["formul"]}', ""] + \
             [f'{i}. {p["kategori"]} · {p["marka"]} · {tl(p["fiyat"])}' for i, p in enumerate(k["parcalar"], 1)] + \
             ["", "Tüm linkler bio'da 🔗", "", tags]
        txt = [f'KOMBİN {n}: {k["baslik"]}', k["formul"], ""]
        for i, p in enumerate(k["parcalar"], 1):
            txt.append(f'{i}. {p["kategori"]} - {p["marka"]} - {p["aciklama"]} - {tl(p["fiyat"])} {p.get("kampanya","")}'.rstrip())
            txt.append(f'   {p["url"]}')
        txt += [f"Toplam: {tl(tot)}", "", "INSTAGRAM AÇIKLAMASI", ""] + ig
        open(os.path.join(out, f"{stem}-aciklama.txt"), "w").write("\n".join(txt) + "\n")
        igh = "<br>".join(E(l) for l in ig)
        blocks.append(f'''
<tr><td style="padding:28px 20px 6px;text-align:center;font-family:Georgia,'Times New Roman',serif">
<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:3px;color:#9a8f86">KOMBİN {n}</div>
<div style="font-size:28px;font-style:italic;color:#3c2d23;padding-top:6px">{E(k["baslik"])}</div>
<div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b5d52;padding:8px 30px 0">{E(k["formul"])}</div></td></tr>
<tr><td style="padding:12px 20px" align="center"><img src="cid:att{n-1}" alt="{E(k["baslik"])}" width="560" style="display:block;width:560px;max-width:100%;border:1px solid #eee7e1"></td></tr>
<tr><td style="padding:0 20px"><table width="100%" cellpadding="0" cellspacing="0">{"".join(rows)}
<tr><td style="padding:10px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px"><b>Toplam liste fiyatı</b></td>
<td align="right" style="padding:10px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px"><b>{tl(tot)}</b></td></tr></table></td></tr>
<tr><td style="padding:6px 20px 24px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b5d52;border-bottom:8px solid #f4f2ef">
<b style="color:#3c2d23">Instagram açıklaması</b><div style="white-space:pre-line">{igh}</div></td></tr>''')
    haber = "".join(f'<li style="margin-bottom:6px">{E(h["metin"])} <a href="{E(h["kaynak"])}" style="color:#8a5a3c">kaynak</a></li>' for h in spec.get("haberler", []))
    kat = "".join(f'<li style="margin-bottom:8px"><b>{E(c["isim"])} ({E(c["etiket"])})</b>: {E(c["metin"])}</li>' for c in spec.get("katalog", []))
    page = f'''<div style="background:#f4f2ef;padding:16px 0"><table width="600" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;width:100%">
<tr><td style="padding:28px 20px 6px;text-align:center;font-family:Georgia,'Times New Roman',serif">
<div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:3px;color:#9a8f86">STİL ATLASI · {E(spec["tarih"].upper())}</div>
<div style="font-size:28px;font-style:italic;color:#3c2d23;padding-top:6px">Günün kombinleri</div></td></tr>
<tr><td style="padding:12px 20px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#2b2420"><b>Bugün moda dünyasında</b><ul style="padding-left:18px">{haber}</ul>
<div style="background:#f4f2ef;padding:12px 16px"><b>Bugün kataloğa eklenenler</b><ul style="padding-left:18px">{kat}</ul></div></td></tr>
{"".join(blocks)}</table></div>'''
    open(os.path.join(out, "atlas.html"), "w").write(page)
    prev = page
    for n, f in enumerate(files): prev = prev.replace(f"cid:att{n}\"", os.path.basename(f) + "\"")
    open(os.path.join(out, "atlas-onizleme.html"), "w").write(prev)
    att = [{"content": f"sha256:{hashlib.sha256(open(f,'rb').read()).hexdigest()}:{f}",
            "filename": os.path.basename(f), "mimeType": "image/jpeg", "inline": True} for f in files]
    json.dump({"subject": f'Stil Atlası · {spec["tarih"]} · Günün kombinleri', "htmlBodyFile": os.path.join(out, "atlas.html"),
               "attachments": att, "not": "htmlBody = atlas.html içeriği; ekler bu sırayla cid:att0..attN-1"},
              open(os.path.join(out, "mail.json"), "w"), ensure_ascii=False, indent=1)
    print("tamam:", out)


if __name__ == "__main__":
    main(sys.argv[1])
