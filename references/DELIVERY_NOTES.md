# Local delivery notes

Updated 3 November 2026. Source project: `E:/felixwebnew/fcl-web`.
The owner authorized committing and pushing this release to GitHub main. The connected production Vercel app is https://fcl-web-one.vercel.app.

## Changes

- Restored the image-led black website with a white, centered navigation bar, Home link, original full-colour logo and red Contact action.
- Applied the reference's 650ms masked word reveal to headings and body copy throughout the pages. Word boundaries stay intact. Text remains available without JavaScript and under reduced motion.
- Removed overlapping/stacked scroll sections. Reduced excess homepage padding, compacted the partner strip, strengthened chapter headings and aligned the sector dropdown arrow.
- Kept the three-second switching hero and arrow controls. Removed the visible partner pause icon; hover/focus pauses the strip, and a keyboard-only pause control remains available.
- Kept project category names fixed in five equal desktop slots. Applied the reference's opacity falloff, a 200ms image crossfade, centered single results and balanced incomplete rows. Mobile filters wrap compactly. Project search and charcoal gallery panels are removed.
- Replaced all fifteen named-project photographs with authentic online originals. The twelve latest replacements cover the museum, five commercial projects and six pharmaceutical facilities. Sources, dimensions, processing and credits are recorded in the project manifest. No active project photograph uses AI enhancement.
- Retained the supplied About company record and editorial content without its enclosing box.
- Rebuilt solution introductions around wide headlines, full-width imagery and a compact asymmetric specification layout.
- Redesigned Contact with prominent direct contact details and a black enquiry workspace with off-white text and black controls. The form validates, reviews and prepares an email draft; it does not send enquiries.
- Kept the directory footer on Home and Contact only, using the original full-colour logo. Removed the copyright strip.

## Verification

- Production build, including TypeScript: passed using the actual source Next.js configuration.
- Static production preview: 46 pages, 149 public assets and 175 internal destinations checked; no errors; PDF download returns 200.
- Lighthouse accessibility: Home 100/100; Contact 100/100.
- ESLint: passed. Design-system lint: zero errors/warnings. Premium static UI audit: zero findings.
- Browser checks: 360px layouts; intact heading words; no horizontal overflow on Home, About, Projects, Contact and building-management; dropdown open state; form errors and review; fixed project positions; keyboard sector switching; menu resets All projects and selects category destinations.
- Evidence reports and screenshots remain locally under `references/analysis/`.

## Retired files and retained originals

Old CSS and obsolete theme, scroll-stack and media components were moved out of runtime, rather than destroyed. The retired inventory is `references/retired-runtime/files.json`.

Original Illustrator sources, rejected media and local analysis artifacts remain on disk. Their archive folders are excluded from Git so the website commit does not include several hundred megabytes of source material. The original company-profile PDF and all runtime assets remain in `public/`.

Retired runtime files:

- `app__brand-system.css.retired`
- `app__carbon.css.retired`
- `app__editorial-grid.css.retired`
- `app__editorial.css.retired`
- `app__globals.css.retired`
- `app__project-showcase.css.retired`
- `app__refinement.css.retired`
- `app__site-system.css.retired`
- `components__site__contact.tsx.retired`
- `components__site__dialogs.tsx.retired`
- `components__site__film-layer.tsx.retired`
- `components__site__footer.tsx.retired`
- `components__site__header.tsx.retired`
- `components__site__profile-viewer.tsx.retired`
- `components__site__projects.tsx.retired`
- `components__site__scroll-effects.tsx.retired`
- `components__site__scroll-presentation.tsx.retired`
- `components__site__scroll-sheet.tsx.retired`
- `components__site__services.tsx.retired`
- `components__site__text-motion.tsx.retired`
- `components__site__theme-control.tsx.retired`
- `lib__films.ts.retired`
- `lib__site-content.ts.retired`

## Image and video sources

No video is active in this release. Rejected and retired footage is preserved locally and is not in the public site assets.

- General illustrative photography: `public/assets/photography/sources.json` records original pages, files and credits.
- Original product, partner, client and brochure artwork: `public/assets/brochure/manifest.json` records PDF provenance. Source document: `public/downloads/felix-company-profile.pdf`.
- Switching hero: `public/assets/hero/` contains optimized versions of the existing architecture, industrial and living-space photographs; original context sources are in the photography inventory.
- Original Felix logo: `public/assets/felix-logo-web.png`, losslessly reduced from the supplied company logo.
- Project inventory and enhancement details: `public/assets/projects/sources.json`.

| Active project file                         | Original source                                                                                                                                 | Source page                                                                                |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| /assets/projects/evercare.webp              | https://chattogram.evercare-assets.com/uploads/images/about/1745467963-24678329.png                                                             | https://www.evercarebd.com/en/chattogram/about-us                                          |
| /assets/projects/ship-hospital.webp         | https://shiphospitalbd.com/wp-content/uploads/2026/03/Ship_Hospital_Building_1-1024x576.jpg                                                     | https://shiphospitalbd.com/about-us/                                                       |
| /assets/projects/bays-edgewater.webp        | https://baydevelopments.com/wp-content/uploads/2021/01/Bays-Edgewater-1.jpg                                                                     | https://baydevelopments.com/projects/edgewater/                                            |
| /assets/projects/beacon.webp                | https://beaconpharma.com.bd/storage/photos/2/facilities.jpeg                                                                                    | https://beaconpharma.com.bd/manufacturing-overview?lang=en                                 |
| /assets/projects/beximco.webp               | https://beximcopharma.com/img/company-information.jpg                                                                                           | https://beximcopharma.com/investors                                                        |
| /assets/projects/dbl.webp                   | https://dbl-pharma.com/wp-content/uploads/2021/11/slider-1-edited-1.jpg                                                                         | https://dbl-pharma.com/                                                                    |
| /assets/projects/eastern-bank.webp          | https://ebl.com.bd/assets/media/newsevents/ebl_headquarters_2.jpg                                                                               | https://www.ebl.com.bd/news/inside-the-ebl-headquarters-stately-outside-vibrant-inside     |
| /assets/projects/eskayef.webp               | https://cms.transcombd.com/images/agoU6UQntgTF2FlZFNL8aZB1_BE%3D/1024/width-1920/Eskayef_Pharmaceuticals.png                                    | https://www.transcombd.com/                                                                |
| /assets/projects/essential-drugs.webp       | https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-edcl/2024/12/97d1a094c6064a90aea303e86b673ac8.jpg | https://edcl.gov.bd/                                                                       |
| /assets/projects/liberation-war-museum.webp | https://upload.wikimedia.org/wikipedia/commons/1/1a/Liberation_war_museum%2C_Agargaon.jpg                                                       | https://commons.wikimedia.org/wiki/File:Liberation_war_museum,_Agargaon.jpg                |
| /assets/projects/mrt-line-6.webp            | https://upload.wikimedia.org/wikipedia/commons/6/66/Dhaka_Metro_Rail_at_Diabari_depot_01_%28cropped%29.jpg                                      | https://commons.wikimedia.org/wiki/File:Dhaka_Metro_Rail_at_Diabari_depot_01_(cropped).jpg |
| /assets/projects/shahjalal-bank.webp        | https://volumezeroltd.com/wp-content/uploads/2021/02/SIBL-C.jpg                                                                                 | https://volumezeroltd.com/portfolio-item/sibchq/                                           |
| /assets/projects/shanta-forum.webp          | https://cms.shantaholdings.com/media/images/Forum_Banner.original.2e16d0ba.fill-2560x1440-c0.jpg                                                | https://shantaholdings.com/projects/forum/                                                 |
| /assets/projects/shanta-pinnacle.webp       | https://cms.shantaholdings.com/media/images/Pinnacle_Completed_Temp_7.2e16d0ba.fill-2560x1440-c0.jpg                                            | https://shantaholdings.com/projects/pinnacle/                                              |
| /assets/projects/square.webp                | https://www.squarepharma.com.bd/images/photo-gallery/1.jpg                                                                                      | https://www.squarepharma.com.bd/facilities-photo-gallery.php                               |

Museum attribution: Wasiul Bahar, CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/. Resized and converted to WebP; attribution appears on the gallery card and project detail page. Company and architect photographs retain their source credits; no watermark was removed.

## Remaining confirmation and source needs

- TODO-CONFIRM: the quoted profile claim, "one of the leading system integrators in Bangladesh". The About page clearly identifies it as the profile's statement and retains the confirmation marker.
- Beximco and Square publish 680px and 700px originals respectively; these are retained without artificial enlargement. Higher-resolution company originals would improve large detail views further.
- To further improve the site, supply high-resolution project photos, complete vector/PNG client logos, actual panel/BMS screenshots and project-to-system mapping.
- Leadership names/roles, headcount, certifications, vendor certification levels, milestones, workshop/office details, geographic coverage and project-scale metrics are omitted until supplied and verified.

## Contact refinement: continuous columns

Implemented the approved contact-page architecture on 3 November 2026:

- Replaced the separate hero and inset form with continuous 48/52 columns directly beneath the navbar; both columns are now black, as subsequently requested.
- Both headline boxes share the same measured top edge and 64px desktop top padding. Archivo Black is used for both, at different hierarchy scales. Cap-top trimming uses progressive enhancement with a regular line-box fallback.
- Public Sans is locally hosted for Contact prose, labels, inputs and its portalled dropdown. IBM Plex Mono formats the technical contact data. Font source and license: https://github.com/google/fonts/tree/main/ofl/publicsans .
- Standard inputs and the default dropdown are 48px high with 16px/24px text; message area is 144px and resizable. Long choices expand naturally. The dropdown arrow's measured vertical-center error is zero.
- Main columns stack at 1024px; phone form fields stack at 650px. Verified at 360px with no horizontal overflow or broken heading words.
- Existing field validation, topic selection, review and edit-value retention passed browser checks. No email was sent.
- Actual production build and TypeScript passed; ESLint passed; premium static audit has zero findings; design-document lint has zero errors/warnings; production Contact Lighthouse accessibility scored 100/100.
- The owner subsequently authorized the assistant to commit and push the full release to the existing connected Vercel project.

## Final photo and hover refinement

- Solution and reference menu items use a 180ms green text transition with no filled hover rectangle.
- The original brochure images are preserved; source replacements flow through the shared project inventory to Home, gallery and detail pages.
- The legacy enhancement utility preserves all authentic online photographs and cannot overwrite them with generated pixels.

## Release validation, 3 November 2026

- Final source production build passed in `.next-final-release`; all 53 generated route entries completed.
- Crawler: 46 pages, 149 public assets, 175 internal destinations; zero errors; PDF download 200.
- Black Contact Lighthouse accessibility: 100/100. ESLint passed; design-document lint and strict premium audit have zero errors/warnings.
- Browser verification: black enquiry surface, fields and popup; 48px fields at 360px; no horizontal overflow; desktop headline tops both at 136px; all six pharma images load at their recorded native dimensions.
