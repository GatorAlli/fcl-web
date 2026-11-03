from pathlib import Path
from html.parser import HTMLParser
from urllib.request import Request, urlopen
from urllib.parse import urlsplit, urlunsplit
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
import io,json

root=Path(__file__).resolve().parents[1]
out=root/'public/assets/photography';out.mkdir(exist_ok=True)
sources=[
 ('architecture','https://unsplash.com/de/@fusebrussels','https://images.unsplash.com/photo-1496308344084-4d0996effc74','Nick Wessaert'),
 ('industry','https://unsplash.com/photos/5hPe-Tr2wog','https://images.unsplash.com/photo-1717386255767-52643970d483','Homa Appliances'),
 ('living','https://unsplash.com/photos/pyJgggne0W4','https://images.unsplash.com/photo-1666877769199-bd1110d33a25','Lotus Design N Print'),
 ('laboratory','https://unsplash.com/photos/8yS04veb1TQ','https://images.unsplash.com/photo-1581093577421-f561a654a353','ThisisEngineering'),
 ('controls','https://unsplash.com/photos/KDkU44ikiko','https://images.unsplash.com/photo-1780034766295-43db0f2a0fb7','Raymond Sime'),
 ('data-center','https://unsplash.com/photos/M5tzZtFCOfs','https://images.unsplash.com/photo-1558494949-ef010cbdcc31','Taylor Vick'),
 ('retail','https://unsplash.com/photos/3RPL1KeMfmg','https://images.unsplash.com/photo-1635930376155-4ee50db13cca','Brett Jordan'),
 ('parking','https://unsplash.com/photos/IrDBnq_cWlo','https://images.unsplash.com/photo-1643992260366-96e2ed9c572e','Darren Hibbs'),
 ('healthcare','https://unsplash.com/photos/Pk-KuizxQv8','https://images.unsplash.com/photo-1777269749032-d8d458ae594d','Tasha Kostyuk'),
 ('lodging','https://unsplash.com/photos/xQbmc2FnK3Y','https://images.unsplash.com/photo-1776763018821-8feeaeeee0a5','Antonio Araujo'),
 ('design','https://unsplash.com/photos/architectural-blueprints-spread-out-on-a-surface-fNxmdlYHRm8','https://images.unsplash.com/photo-1762146828422-50a8bd416d3c','Marina Zvada'),
 ('pipework','https://unsplash.com/photos/industrial-metal-pipes-and-valves-41X6FwTwPh4','https://images.unsplash.com/photo-1620203853151-496c7228306c','Ricardo Gomez Angel'),
 ('security-camera','https://unsplash.com/photos/white-surveillance-camera-RrhxsjoL7Po','https://images.unsplash.com/photo-1529874164499-5e59cb720b17','Pawel Czerwinski'),
]
class Meta(HTMLParser):
 def __init__(self): super().__init__();self.url=None
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if tag=='meta' and d.get('property')=='og:image':self.url=d.get('content')
def get(url):
 with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=45) as response:return response.read()
def download(source):
 name,page,url,author=source
 target=out/f'{name}.webp'
 if target.exists():
  im=Image.open(target)
  return dict(name=name,page=page,author=author,width=im.width,height=im.height,license='Unsplash License',licenseUrl='https://unsplash.com/license')
 if not url:
  parser=Meta();parser.feed(get(page).decode('utf-8'));url=parser.url
  if not url:raise ValueError(f'No image metadata: {page}')
 bits=urlsplit(url);url=urlunsplit((bits.scheme,bits.netloc,bits.path,'w=3600&q=95&fm=jpg&fit=max',''))
 image=Image.open(io.BytesIO(get(url))).convert('RGB')
 image.save(target,quality=94,method=6)
 print(name,image.size,flush=True)
 return dict(name=name,page=page,imageUrl=url,author=author,width=image.width,height=image.height,license='Unsplash License',licenseUrl='https://unsplash.com/license')
with ThreadPoolExecutor(max_workers=4) as pool:
 results=list(pool.map(download,sources))
(out/'sources.json').write_text(json.dumps(results,indent=2))
print('Saved',len(results),'high-resolution photographs.')
