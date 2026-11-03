from pathlib import Path
from pypdf import PdfReader
from PIL import Image,ImageDraw
import io,re,json,hashlib
root=Path(__file__).resolve().parent
out=root/'analysis'/'originals';out.mkdir(exist_ok=True)
inventory=[];seen=set()
for path in sorted((root/'felix-brochure').glob('*.ai')):
    r=PdfReader(path)
    private=r.pages[0]['/PieceInfo']['/Illustrator']['/Private']
    keys=sorted([k for k in private if k.startswith('/AIPrivateData')],key=lambda k:int(k[14:]))
    data=b''.join(private[k].get_object().get_data() for k in keys)
    prefix=path.stem[:2].strip().lower()
    for i,match in enumerate(re.finditer(b'\xff\xd8\xff|\x89PNG\r\n\x1a\n',data)):
        try:
            im=Image.open(io.BytesIO(data[match.start():])); im.load()
            if im.width<150 or im.height<100:continue
            digest=hashlib.sha256(im.tobytes()).hexdigest()
            if digest in seen:continue
            seen.add(digest)
            name=f'{prefix}-{i:02}.png'
            im.save(out/name)
            inventory.append(dict(file=name,source=path.name,width=im.width,height=im.height))
        except Exception: pass
    print(path.name,len(inventory),flush=True)
(out/'inventory.json').write_text(json.dumps(inventory,indent=2))
for start in range(0,len(inventory),40):
    group=inventory[start:start+40]
    sheet=Image.new('RGB',(1200,((len(group)+4)//5)*170),'white');draw=ImageDraw.Draw(sheet)
    for i,entry in enumerate(group):
        im=Image.open(out/entry['file']).convert('RGB');im.thumbnail((230,135))
        x,y=(i%5)*240,(i//5)*170
        sheet.paste(im,(x,y));draw.text((x+2,y+136),f"{entry['file']} {entry['width']}x{entry['height']}",fill='black')
    sheet.save(out/f'sheet-{start//40+1:02}.jpg')
