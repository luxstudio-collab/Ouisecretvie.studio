"""Stil Atlası kombinlerini web sitesine (ouisecretvie.vercel.app) ekler.

Kullanım:
  git worktree add ../site-wt origin/claude/ai-studio-website   # sitenin kodu bu dalda
  python3 scripts/pinterest/site_export.py pinterest/<tarih>/atlas.json ../site-wt <YYYY-MM-DD>
  cd ../site-wt && npm ci && npm run build      # derleme hatası olmamalı
  git add -A && git commit -m "Add looks <tarih>" && git push origin HEAD:claude/ai-studio-website

Her kombin src/content/looks.json'a eklenir (aynı slug varsa güncellenir),
kolajı public/looks/<slug>.jpg olur. Pin linki:
  https://ouisecretvie.vercel.app/tr/looks/<slug>
"""
import json, os, re, shutil, sys

GENDER = re.compile(r"erkek", re.I)


def main(atlas_path, site_dir, date):
    spec = json.load(open(atlas_path))
    base = os.path.dirname(os.path.abspath(atlas_path))
    lj = os.path.join(site_dir, "src/content/looks.json")
    looks = json.load(open(lj)) if os.path.exists(lj) else []
    os.makedirs(os.path.join(site_dir, "public/looks"), exist_ok=True)
    for n, k in enumerate(spec["kombinler"], 1):
        slug = k.get("site_slug") or k["slug"]
        src = os.path.join(base, f"0{n}-{k['slug']}-instagram.jpg")
        shutil.copy(src, os.path.join(site_dir, "public/looks", f"{slug}.jpg"))
        entry = dict(
            slug=slug, date=date, title=k["baslik"],
            subtitle=k.get("alt_baslik", ""),
            gender="erkek" if (k.get("cinsiyet") == "erkek" or GENDER.search(k.get("alt_baslik", ""))) else "kadin",
            formula=k["formul"], image=f"/looks/{slug}.jpg",
            items=[dict(category=p["kategori"], brand=p["marka"], name=p["aciklama"], price=p["fiyat"],
                        url=p["url"].replace("https://bluemint.com/", "https://www.bluemint.com/"),
                        **({"note": p["kampanya"]} if p.get("kampanya") else {}))
                   for p in k["parcalar"]],
        )
        looks = [l for l in looks if l["slug"] != slug] + [entry]
        print(f"https://ouisecretvie.vercel.app/tr/looks/{slug}")
    json.dump(looks, open(lj, "w"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main(*sys.argv[1:4])
