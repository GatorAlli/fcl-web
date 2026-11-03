from pathlib import Path
from PIL import Image
import json
root=Path(__file__).resolve().parent;dest=root.parent/'public/assets/brochure'
source=root/'analysis/images'
manifest=json.loads((dest/'manifest.json').read_text())
def crop(page,name,box):
    im=Image.open(source/f'profile-p{page:02}-00.png').convert('RGB').crop(box)
    im.save(dest/f'{name}.webp',quality=95,method=6)
    manifest.append(dict(file=f'{name}.webp',pdfPage=page,crop=box,width=im.width,height=im.height,processing='Native-resolution PDF extraction.'))
for i in range(64):
    x=[95,234,373,513,653,792,932,1072][i%8];y=[202,278,354,430,506,582,658,734][i//8]
    crop(6,f'client-{i+1:02}',(x+3,y+3,x+93,y+48))
for page,name,box in [(8,'bms-dashboard',(0,1265,740,1685)),(8,'bms-thermostats',(875,1265,1230,1685)),(9,'scada-controllers',(30,1385,1190,1685)),(10,'home-keypads',(640,870,1248,1025)),(11,'lighting-panel',(925,780,1195,915)),(11,'lighting-mobile',(710,1390,1180,1682)),(12,'fire-sprinkler',(499,1451,737,1685)),(12,'fire-suppression',(962,1451,1196,1685)),(13,'security-interfaces',(360,1340,1250,1678)),(14,'drive-range',(80,1265,1180,1682)),(15,'hvac-actuators',(75,380,1192,640)),(15,'hvac-control-interfaces',(885,1070,1180,1255)),(16,'sensor-interfaces',(90,1240,1200,1690)),(18,'parking-dashboard',(0,1200,590,1685))]:crop(page,name,box)
for page in range(1,21):
    im=Image.open(source/f'profile-p{page:02}-00.png').convert('RGB')
    im.save(dest/f'profile-page-{page:02}.webp',quality=92,method=6)
    manifest.append(dict(file=f'profile-page-{page:02}.webp',pdfPage=page,width=im.width,height=im.height,processing='Whole original page retained for resource viewer.'))
for entry in manifest:
    if entry['file']=='home-automation.webp':entry['processing']='AI restoration of extracted lifestyle photo; preserve source scene. Generated dimensions 1726x911. Original crop is retained in analysis.';entry['width']=1726;entry['height']=911
manifest.append(dict(file='hero-architecture.webp',pdfPage=3,processing='AI restoration of 342x216 architectural source crop; generated 1536x1024. Illustrative architecture, not a project claim.',width=1536,height=1024))
(dest/'manifest.json').write_text(json.dumps(manifest,indent=2))
print('Added 64 client logos, 14 supplementary product crops, and all 20 original profile pages.')
