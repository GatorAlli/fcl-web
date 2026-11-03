from pathlib import Path
from PIL import Image
import json, shutil
root=Path(__file__).resolve().parent
source=root/'analysis'/'images'
dest=root.parent/'public'/'assets'/'brochure'; dest.mkdir(exist_ok=True)
manifest=[]
def crop(page,name,box):
    im=Image.open(source/f'profile-p{page:02}-00.png').convert('RGB')
    im=im.crop(box)
    im.save(dest/f'{name}.webp',quality=94,method=6)
    manifest.append(dict(file=f'{name}.webp',pdfPage=page,crop=box,width=im.width,height=im.height,processing='Native-resolution extraction; WebP quality 94. No invented details.'))

sector_names=['commercial','district-cooling','retail','healthcare','life-sciences','industry','data-centers','lodging','residential']
for i,name in enumerate(sector_names):
    x=[83,447,815][i%3];y=[389,659,937][i//3]
    crop(3,f'sector-{name}',(x,y,x+342,y+216))
crop(4,'engineering-team',(0,1230,1252,1770))
crop(4,'engineering-design',(88,212,265,380))
crop(4,'control-room',(88,414,270,580))
crop(8,'building-management',(0,213,1252,650))
crop(8,'bms-controllers',(0,650,1252,890))
crop(9,'scada',(0,640,1252,1310))
crop(10,'home-automation',(144,1050,1252,1635))
crop(10,'home-products',(470,252,1180,540))
crop(11,'lighting-control',(0,898,1200,1244))
crop(11,'lighting-products',(80,1490,700,1635))
crop(12,'fire-detection',(680,400,1252,835))
crop(12,'fire-equipment',(95,1450,335,1685))
crop(13,'security',(88,584,1208,1330))
crop(14,'variable-frequency-drives',(68,580,1180,1215))
crop(15,'hvac-controls',(70,375,1190,1030))
crop(16,'sensors',(95,245,1252,970))
crop(17,'manual-valves',(130,1117,907,1455))
crop(18,'parking',(148,395,1252,840))
names=['mrt-line-6','beximco','square','eskayef','dbl','beacon','essential-drugs','evercare','ship-hospital','liberation-war-museum','bays-edgewater','eastern-bank','shahjalal-bank','shanta-forum','shanta-pinnacle']
for i,name in enumerate(names):
    x=[86,462,838][i%3];y=[210,512,814,1115,1417][i//3]
    # Avoid the brochure's clipped top-right corners and printed captions.
    crop(19,f'project-{name}',(x,y+78,x+315,y+232))
for i,name in enumerate(['honeywell','siemens','trane','control4','lutron','fike','danfoss','rbh','belimo','ss','tecofi','parkhelp']):
    y=[366,478,590,702,814,936,1047,1160,1270,1382,1495,1608][i]
    crop(5,f'partner-{name}',(90,y,250,y+55))
(dest/'manifest.json').write_text(json.dumps(manifest,indent=2))
downloads=root.parent/'public'/'downloads';downloads.mkdir(exist_ok=True)
shutil.copy2(root/'Company Profile_Felix.pdf',downloads/'felix-company-profile.pdf')
print(f'Extracted {len(manifest)} source assets and copied downloadable profile.')
