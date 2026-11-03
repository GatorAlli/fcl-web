# Image extraction and restoration

All source PDF and Illustrator files are preserved. `public/assets/brochure/manifest.json` records each extracted crop's source page, dimensions and processing. The PDF has only flattened 1252×1777 page images. The supplied Illustrator files have no PDF-compatible artwork; private payload inspection did not recover usable standalone original photographs. No Adobe Illustrator application was available in the app inventory.

## Restored website assets

Built-in ImageGen edit mode was used for these three illustrative images. The final WebP copies are in the project; original generated PNGs and the native PDF page images are retained under `references/analysis/`.

| Asset                                           | Source                                       | Output    | Use                                                                                             |
| ----------------------------------------------- | -------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| `public/assets/brochure/hero-architecture.webp` | PDF page 3, commercial-buildings photograph  | 1536×1024 | Architectural hero and About illustration                                                       |
| `public/assets/brochure/home-automation.webp`   | PDF page 10, Control4 living-room photograph | 1726×911  | Connected-living hero and solution illustration                                                 |
| `public/assets/brochure/scada-restored.webp`    | PDF page 9, SCADA illustration               | 1714×918  | Illustrative industrial hero only; original `scada.webp` remains on the technical solution page |

AI restoration reconstructs visual detail; it does not recover the original missing pixels. These are illustrations derived from the supplied brochure, not proof of completed project scope. Real project thumbnails, product details, logos and full brochure pages retain source pixels. Small source photographs are displayed at restrained sizes rather than enlarged into documentary hero images.

## Final prompt set

### Architectural image

Use case: restoration. Edit target: attached low resolution photo extracted from the company's brochure. Faithfully restore and enhance this SAME looking-up photograph of four modern glass office buildings framing a blue sky and wispy white clouds, landscape 2400x1600 or similar. Preserve every building's exact shape, angles, glass facade and perspective. Improve optical clarity and natural sharpness; eliminate compression artifacts and blockiness. Recover consistent glass mullions without changing architecture. No new buildings or objects, no text, no logos, no gradients. Neutral professional architectural photography, natural original lighting. Photo restoration for an engineering firm's website hero.

### Connected living

Use case: restoration. Edit target: attached brochure photograph. Restore this SAME interior photograph at high resolution, landscape 2048 pixels or more. Preserve camera viewpoint, room geometry, sofa, console, table, door, staircase, television, all objects and device proportions exactly. Carefully remove JPEG/block artifacts, mild blur and the green print-overlay at the upper-left edge, recovering natural glass and staircase there. Improve realistic fine texture, optical clarity and neutral white balance subtly. Preserve Control4 display as-is without inventing interface details or new logos/text. No objects added, no redesign, no artistic stylization. This is a company website photo restoration, not a new architectural scene.

### SCADA illustration

Use case: conservative photo restoration. Edit target: supplied brochure illustration of an industrial factory campus with blue supervisory-control visualization overlays. Restore image sharpness and reduce compression artifacts, output a high-resolution landscape image at least as large as the input. Preserve the industrial buildings, roads, parking areas, trees, viewpoint, composition, overlay positions, charts, panels and typography exactly. Treat the blue dashboards and all UI content as immutable: do not invent or change words, numbers, graphs or logos. Improve only photographic clarity and subtle edge quality, retaining source content. No new objects, no changed architecture, no stylization. This remains an illustrative SCADA system image, not a new real project photograph.

The returned sizes above are the actual generated sizes, rather than the dimensions requested in prompts. Inspect original technical panels in the resource viewer when exact markings matter.


## Final imagery update

The restored illustrative images described above are retained as references. The website’s main contextual imagery now uses the high-resolution original photographs documented in PHOTOGRAPHY.md. Named project images and product crops remain documentary originals from the supplied profile.
