"""Enhance original brochure project photographs; preserve every original."""
from pathlib import Path
import hashlib
import json
import sys

sys.path.insert(0, r"E:\felixwebnew\media-tools\opencv")
import cv2

root = Path(__file__).resolve().parents[1]
folder = root / "public/assets/projects"
folder.mkdir(parents=True, exist_ok=True)
index = folder / "sources.json"
records = json.loads(index.read_text(encoding="utf-8"))
records = [record for record in records if "modelSource" not in record]
original_photos = {record["name"] for record in records}
for record in records:
    record["assetKey"] = "project-" + record["name"]
    if record["name"] == "evercare":
        record["credit"] = "Evercare Hospital Chattogram"
    elif record["name"] == "ship-hospital":
        record["credit"] = "SHIP International Hospital"

model = None
enhanced_count = 0
for source in sorted((root / "public/assets/brochure").glob("project-*.webp")):
    name = source.stem.removeprefix("project-")
    if name in original_photos:
        continue
    if model is None:
        model = cv2.dnn_superres.DnnSuperResImpl_create()
        model.readModel(r"E:\felixwebnew\media-tools\ESPCN_x4.pb")
        model.setModel("espcn", 4)
    original = cv2.imread(str(source))
    height, width = original.shape[:2]
    enhanced = model.upsample(original)
    enhanced = cv2.addWeighted(enhanced, 1.08, cv2.GaussianBlur(enhanced, (0, 0), 0.8), -0.08, 0)
    destination = folder / (name + ".webp")
    cv2.imwrite(str(destination), enhanced, [cv2.IMWRITE_WEBP_QUALITY, 90])
    records.append({
        "assetKey": source.stem, "name": name,
        "file": "/assets/projects/" + destination.name,
        "width": width * 4, "height": height * 4,
        "originalWidth": width, "originalHeight": height,
        "sourceFile": "/assets/brochure/" + source.name,
        "page": "/downloads/felix-company-profile.pdf#page=19",
        "credit": "Felix Controls company profile",
        "processing": "ESPCN x4 neural super-resolution with conservative sharpening. Enhanced pixels are estimates; original scene and source file retained.",
        "modelSource": "https://github.com/fannymonori/TF-ESPCN/blob/master/export/ESPCN_x4.pb",
        "sha256": hashlib.sha256(destination.read_bytes()).hexdigest(),
    })
    enhanced_count += 1
index.write_text(json.dumps(records, indent=2), encoding="utf-8")
print(json.dumps({"images": len(records), "enhanced": enhanced_count, "method": "ESPCN x4"}))
