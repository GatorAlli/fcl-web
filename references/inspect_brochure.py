from pathlib import Path
import json, subprocess
from pypdf import PdfReader
from PIL import Image, ImageOps, ImageDraw

root = Path(__file__).resolve().parent
out = root / 'analysis'
out.mkdir(exist_ok=True)
images = out / 'images'
images.mkdir(exist_ok=True)
inventory = []
texts = []
sources = [root / 'Company Profile_Felix.pdf'] + sorted((root / 'felix-brochure').glob('*.ai'))
for si, source in enumerate(sources):
    try:
        reader = PdfReader(source)
        label = 'profile' if si == 0 else source.stem[:2].strip().lower()
        if label == 'co': label = 'cover'
        for pi, page in enumerate(reader.pages):
            text = page.extract_text() or ''
            texts.append(f'\n## {source.name} | page {pi+1}\n{text}\n')
            if si == 0:
                subprocess.run(['pdftoppm', '-f', str(pi+1), '-singlefile', '-scale-to', '1000', '-png', str(source), str(out / f'page-{pi+1:02}')], check=True, capture_output=True)
            for ii, im in enumerate(page.images):
                try:
                    image = im.image
                    if image.width < 120 or image.height < 70: continue
                    name = f'{label}-p{pi+1:02}-{ii:02}.png'
                    image.save(images / name)
                    inventory.append(dict(file=name, source=source.name, page=pi+1, index=ii, width=image.width, height=image.height))
                except Exception as error:
                    print('image error', source.name, ii, str(error)[:100])
        print(source.name, len(reader.pages), flush=True)
    except Exception as error:
        print('source error', source.name, str(error)[:200], flush=True)
(out / 'extracted-text.txt').write_text('\n'.join(texts), encoding='utf-8')
(out / 'image-inventory.json').write_text(json.dumps(inventory, indent=2), encoding='utf-8')
for start in range(0, len(inventory), 60):
    group = inventory[start:start+60]
    sheet = Image.new('RGB', (1200, ((len(group)+4)//5)*155), 'white')
    draw = ImageDraw.Draw(sheet)
    for i, entry in enumerate(group):
        im = Image.open(images / entry['file']).convert('RGB')
        im.thumbnail((224,120))
        x,y = (i%5)*240, (i//5)*155
        sheet.paste(im, (x+(224-im.width)//2,y))
        draw.text((x+4,y+122),entry['file'],fill='black')
        draw.text((x+4,y+136),f"{entry['width']} x {entry['height']}",fill='black')
    sheet.save(out / f'assets-{start//60+1:02}.jpg')
pages = sorted(out.glob('page-*.png'))
sheet = Image.new('RGB', (1200, ((len(pages)+3)//4)*430), '#ddd')
draw = ImageDraw.Draw(sheet)
for i,path in enumerate(pages):
    im = Image.open(path).convert('RGB'); im.thumbnail((290,400))
    x,y=(i%4)*300,(i//4)*430
    sheet.paste(im,(x,y));draw.text((x+4,y+402),path.stem,fill='black')
sheet.save(out / 'profile-overview.jpg')
print('Total images:',len(inventory))
