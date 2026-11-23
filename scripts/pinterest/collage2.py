import json,subprocess,io,sys
from PIL import Image,ImageDraw,ImageFilter,ImageChops
exec(open('white.py').read().split("if __name__")[0])
G='bluemint.com';A='arzukaprol.com';D='www.derimod.com.tr';Lv='lovyatelier.com'
def P(s,h): return prods[(s,h)]
# slot: (x,y,w,h, anchor)  anchor: 'top' or 'center'
SL={'top':(105,40,350,500,'top'),'outer':(330,40,520,810,'top'),'glasses':(615,45,380,150,'center'),
    'earring':(880,165,170,150,'center'),'bottom':(585,425,440,885,'top'),'bag':(165,445,280,370,'center'),
    'watch':(225,820,180,250,'center'),'shoes':(290,975,450,240,'center')}
ORDER=['top','outer','bottom','bag','watch','shoes','glasses','earring']
LOOKS={
 'gunduz':{'top':P(G,'daria-walnut-triko'),'outer':P(G,'lana-nuit-dis-giyim'),'bottom':P(G,'dora-nuit-pantolon'),
   'bag':P(D,'kadin-kahverengi-uzun-askili-klasik-kol-cantasi-ab590002sv-5637145360'),'watch':P(Lv,'ogi-bileklik'),
   'shoes':P(D,'kadin-kahverengi-tokali-suet-deri-maskulen-loafer-af180019ds-5637145360'),'glasses':P(G,'javier-brown-shade-gunes-gozlugu'),'earring':P(Lv,'tanura-i̇nci-kupe-kopya')},
 'erkek':{'top':P(G,'mike-camel-triko'),'outer':P(G,'dack-dark-navy-ceket'),'bottom':P(G,'emory-brown-pantolon'),
   'bag':P(G,'rino-brown-atki'),'watch':P(G,'bm-watch-oceanic-b79-001-43-mm-kol-saati'),
   'shoes':P(D,'erkek-kahverengi-suet-deri-chelsea-bot-wm610001ds-5637145360'),'glasses':P(G,'smith-brown-turtle-shade-gunes-gozlugu')},
 'aksam':{'top':P(A,'beyaz-drapeli-kolsuz-bluz-copy'),'outer':P(G,'sophia-camel-dis-giyim'),'bottom':P(A,'siyah-etek-2'),
   'bag':P(D,'kadin-kahverengi-zincir-askili-suet-portfoy-canta-wb570007ss-5637145360'),'watch':P(Lv,'tanur-bileklik'),
   'shoes':P(D,'kadin-kahverengi-ince-topuklu-deri-stiletto-af200006dv-5637145360'),'glasses':P(G,'ives-gold-shade-gunes-gozlugu'),'earring':P(Lv,'tanura-i̇nci-kupe')},
}
OVR={}
SLX={('aksam','bottom'):(590,470,370,780,'top'),('aksam','outer'):(330,40,520,880,'top')}  # (shop,handle)->image index override
def fetch(src,w=1400):
    b=subprocess.run(['curl','-s','--max-time','40',src+('&' if '?' in src else '?')+f'width={w}'],capture_output=True).stdout
    return Image.open(io.BytesIO(b)).convert('RGB')
def cutout(im):
    g=im.convert('L'); w0,h0=g.size
    th=min(g.getpixel((x,y)) for x in (2,w0-3) for y in (2,h0-3))-14
    ff=g.point(lambda v:255 if v>=th else 0)
    for x in range(0,w0,max(1,w0//60)):
        for y in (0,h0-1):
            if ff.getpixel((x,y))==255: ImageDraw.floodfill(ff,(x,y),128)
    for y in range(0,h0,max(1,h0//60)):
        for x in (0,w0-1):
            if ff.getpixel((x,y))==255: ImageDraw.floodfill(ff,(x,y),128)
    alpha=ImageChops.invert(ff.point(lambda v:255 if v==128 else 0)).filter(ImageFilter.GaussianBlur(1))
    alpha=alpha.point(lambda v:0 if v<30 else v)
    rgba=im.convert('RGBA'); rgba.putalpha(alpha)
    return rgba.crop(alpha.point(lambda v:255 if v>40 else 0).getbbox())
def src_of(it):
    k=(it['shop'],it['handle'])
    if k in OVR: return it['imgs'][OVR[k]]
    return it['imgs'][0] if it['shop'] in (D,Lv) or 'gozlugu' in it['handle'] or 'saati' in it['handle'] or it['type']=='ÇANTA' else best(it)[2]
def build(key):
    C=Image.new('RGB',(1080,1350),'white')
    for slot in ORDER:
        it=LOOKS[key].get(slot)
        if not it: continue
        x,y,w,h,anc=SLX.get((key,slot),SL[slot])
        im=cutout(fetch(src_of(it))); im.thumbnail((w,h),Image.LANCZOS)
        px=x+(w-im.width)//2; py=y if anc=='top' else y+(h-im.height)//2
        C.paste(im,(px,py),im)
    C.save(f'ig-{key}.jpg',quality=93); print('saved',key)
if __name__=='__main__':
    for k in sys.argv[1:]: build(k)
