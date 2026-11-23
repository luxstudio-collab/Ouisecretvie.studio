import json,glob,subprocess,io,re,sys
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
prods={}
for f in glob.glob('cat/*.json'):
    shop=f.split('/')[1].rsplit('-',1)[0]
    for p in json.load(open(f))['products']:
        av=[v for v in p['variants'] if v.get('available')]
        if av: prods[(shop,p['handle'])]=dict(shop=shop,handle=p['handle'],title=p['title'],type=p.get('product_type',''),price=min(float(v['price']) for v in av),imgs=[i['src'] for i in p['images']],tags=p.get('tags',[]),body=re.sub('<[^>]+>',' ',p.get('body_html') or '')[:200])
def score(src):
    b=subprocess.run(['curl','-s','--max-time','30',src+('&' if '?' in src else '?')+'width=160'],capture_output=True).stdout
    try: im=Image.open(io.BytesIO(b)).convert('L')
    except: return 0
    w,h=im.size; px=im.load()
    border=[px[x,y] for x in range(w) for y in (0,1,h-2,h-1)]+[px[x,y] for y in range(h) for x in (0,1,w-2,w-1)]
    return sum(1 for v in border if v>=245)/len(border)
def best(p):
    sc=[(score(s),i,s) for i,s in enumerate(p['imgs'][:8])]
    return max(sc) if sc else (0,0,'')
if __name__=='__main__':
    sel=json.load(open(sys.argv[1])); out=[]
    cands=[prods[tuple(k)] for k in sel]
    with ThreadPoolExecutor(12) as ex:
        for p,b in zip(cands,ex.map(best,cands)): p['white']=b; out.append(p)
    json.dump(out,open(sys.argv[2],'w'),ensure_ascii=False)
