import json,subprocess,os,sys
exec(open('collage2.py').read().rsplit("if __name__",1)[0])
BR={G:'Bluemint',A:'Arzu Kaprol',D:'Derimod',Lv:'Lovy Atelier'}
NM={'LANA':'LANA yün blazer, lacivert','REINE':'REINE yün triko, siyah','DORA':'DORA pileli pantolon, lacivert','DACK':'DACK %100 yün ceket, lacivert','MIKE':'MIKE triko, camel','EMORY':'EMORY fitilli kadife pantolon, kahve','SOPHIA':'SOPHIA kruvaze yün palto, camel','RINO':'RINO yün atkı, koyu kahve','JAVIER':'JAVIER güneş gözlüğü, kahve cam','SMITH':'SMITH güneş gözlüğü, kaplumbağa','IVES':'IVES güneş gözlüğü, altın çerçeve','BM WATCH OCEANIC':'BM Watch Oceanic 43 mm, siyah'}
TITLE={'gunduz':'Lacivert & Bitter · Kadın · Kasım gündüz','erkek':'Lacivert & Camel · Erkek · Hafta sonu','aksam':'Siyah & Camel · Kadın · Kasım akşamı'}
YORUM={
'gunduz':"Lacivert blazer ve pileli pantolon takım gibi duruyor, siyah yün triko aralarında sakin kalıyor. Kahve süet loafer ile deri çanta laciverdi patlatıyor; Pantone'un AW26 paletinde de kahve ile derin mavi yan yana. Altın sadece bileklikte.",
'erkek':"Lacivert yün ceketin altında camel triko ve kahve fitilli kadife: Pantone'un bu sezon önerdiği kahve + derin mavi eşleşmesi. Boyunda koyu kahve örgü atkı, ayakta süet chelsea; dalgıç saat ve kaplumbağa gözlük hafta sonunu tamamlıyor.",
'aksam':"Camel palto açılınca altından drapeli siyah bluz ve kalem etek çıkıyor. Kahve stiletto ince topuklu, portföy süet. Işık inci küpede ve zirkon bileklikte, altın çerçeve gözlük de akşam güneşi için.",
}
out='/home/user/Ouisecretvie.studio/pinterest/2026-11-23'
for f in os.listdir(out):
    if f.startswith('pin-'): os.remove(os.path.join(out,f))
for k in ['gunduz','erkek','aksam']:
    its=[LOOKS[k][s] for s in ORDER if LOOKS[k].get(s)]
    tot=sum(i['price'] for i in its)
    L=[TITLE[k],"",YORUM[k],""]
    for n,i in enumerate(its,1):
        t=NM.get(i['title'],i['title'])
        L.append(f"{n:02d} {t} · {BR[i['shop']]} · "+f"{i['price']:,.0f}".replace(',','.')+" TL")
        L.append(f"   https://{i['shop']}/products/{i['handle']}")
    L+=["","Toplam "+f"{tot:,.0f}".replace(',','.')+" TL · hepsi stokta (23.11.2026)"]
    open(f'{out}/aciklama-{k}.txt','w').write('\n'.join(L)+'\n')
    subprocess.run(['cp',f'ig-{k}.jpg',f'{out}/{k}-instagram.jpg'])
    print(k,tot)
