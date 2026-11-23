import json,subprocess,io,sys
from PIL import Image,ImageDraw,ImageFilter,ImageFont,ImageChops
exec(open('white.py').read().split("if __name__")[0])
def P(shop,h): return prods[(shop,h)]
G='bluemint.com';A='arzukaprol.com';D='www.derimod.com.tr';L='lovyatelier.com'
LOOKS={
 'gunduz':dict(title='Antrasit & Bitter',sub='Kadın · Kasım gündüz',items=[
   (P(G,'lana-dark-grey-melange-dis-giyim'),(50,200,480,600)),
   (P(G,'reine-black-triko'),(560,200,390,440)),
   (P(A,'siyah-etek-1'),(600,660,320,560)),
   (P(D,'kadin-kahverengi-uzun-askili-klasik-kol-cantasi-ab590002sv-5637145360'),(70,820,420,380)),
   (P(D,'kadin-kahverengi-tokali-suet-deri-maskulen-loafer-af180019ds-5637145360'),(80,1220,400,220)),
   (P(L,'tanura-i̇nci-kupe-kopya'),(540,1250,170,170)),
   (P(L,'ogi-bileklik'),(740,1240,200,200))]),
 'erkek':dict(title='Antrasit & Camel',sub='Erkek · Hafta sonu',items=[
   (P(G,'dack-anthracite-melange-ceket'),(50,200,480,600)),
   (P(G,'mike-camel-triko'),(560,200,390,440)),
   (P(G,'emory-brown-pantolon'),(590,670,340,640)),
   (P(D,'erkek-kahverengi-suet-deri-chelsea-bot-wm610001ds-5637145360'),(70,840,440,330)),
   (P(D,'erkek-kahverengi-suet-deri-kemer-000a2d1304610-5637145360'),(90,1200,400,230))]),
 'aksam':dict(title='Siyah & Camel',sub='Kadın · Kasım akşamı',items=[
   (P(G,'sophia-camel-dis-giyim'),(40,190,430,860)),
   (P(G,'meryl-black-elbise'),(510,230,430,760)),
   (P(D,'kadin-kahverengi-ince-topuklu-deri-stiletto-af200006dv-5637145360'),(60,1090,400,300)),
   (P(D,'kadin-kahverengi-zincir-askili-suet-portfoy-canta-wb570007ss-5637145360'),(520,1040,300,220)),
   (P(L,'tanura-i̇nci-kupe'),(530,1280,170,170)),
   (P(L,'tanur-bileklik'),(730,1260,220,200))]),
}
def fetch(src,w=1200):
    b=subprocess.run(['curl','-s','--max-time','40',src+('&' if '?' in src else '?')+f'width={w}'],capture_output=True).stdout
    return Image.open(io.BytesIO(b)).convert('RGB')
def cutout(im):
    g=im.convert('L'); w0,h0=g.size
    cs=[g.getpixel((x,y)) for x in (2,w0-3) for y in (2,h0-3)]
    th=min(cs)-14
    m=g.point(lambda v:255 if v>=th else 0)
    w,h=m.size; ff=m.copy()
    for x in range(0,w,max(1,w//50)):
        for y in (0,h-1):
            if ff.getpixel((x,y))==255: ImageDraw.floodfill(ff,(x,y),128)
    for y in range(0,h,max(1,h//50)):
        for x in (0,w-1):
            if ff.getpixel((x,y))==255: ImageDraw.floodfill(ff,(x,y),128)
    bg=ff.point(lambda v:255 if v==128 else 0)
    alpha=ImageChops.invert(bg).filter(ImageFilter.GaussianBlur(1.2))
    rgba=im.convert('RGBA'); rgba.putalpha(alpha)
    bb=alpha.point(lambda v:255 if v>40 else 0).getbbox()
    rgba.putalpha(alpha.point(lambda v:0 if v<30 else v))
    return rgba.crop(bb)
F=lambda n,s:ImageFont.truetype(n,s)
def fontpath(fam,style=''):
    r=subprocess.run(['fc-match','-f','%{file}',f'{fam}:{style}'],capture_output=True,text=True).stdout; return r
def build(key):
    L_=LOOKS[key]; C=Image.new('RGB',(1000,1500),'white')
    for it,(x,y,w,h) in L_['items']:
        if it is None: continue
        s=it['imgs'][0] if it['shop'] in (D,L) else best(it)[2]
        im=cutout(fetch(s)); im.thumbnail((w,h),Image.LANCZOS)
        px=x+(w-im.width)//2; py=y+(h-im.height)//2
        pad=40; a=Image.new('L',(im.width+2*pad,im.height+2*pad),0); a.paste(im.getchannel('A').point(lambda v:int(v*0.20)),(pad,pad))
        a=a.filter(ImageFilter.GaussianBlur(12)); sh=Image.new('RGB',a.size,(60,48,40))
        C.paste(sh,(px-pad+6,py-pad+12),a); C.paste(im,(px,py),im)
    d=ImageDraw.Draw(C)
    d.text((500,62),'OUISECRETVIE',font=F(fontpath('Inter','Medium'),20),fill=(110,104,98),anchor='mm')
    d.text((500,118),L_['title'],font=F(fontpath('FreeSerif','Italic'),58),fill=(29,27,26),anchor='mm')
    d.text((500,165),L_['sub'].upper(),font=F(fontpath('Inter','Light'),15),fill=(110,104,98),anchor='mm')
    C.save(f'pin-{key}.jpg',quality=92); print('saved',key)
for k in sys.argv[1:]: build(k)
