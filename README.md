# Felix Controls Limited

The Felix Controls Limited frontend website, built with Next.js App Router, React, TypeScript and Tailwind CSS v4. It includes 46 pages: the homepage; About, Services, Partners, Clients, Contact, Careers and Resources; a solutions index and 11 solution details; a sectors index and 9 sector details; and a projects index and 15 project references.

## Requirements

- Node.js **20.9.0 or newer**.
- npm, included with Node.js.

## Installation

Open a terminal in the project root (the folder containing `package.json`) and install the dependencies:

```bash
npm ci
```

This installs the versions recorded in `package-lock.json`, including Next.js, React, Tailwind CSS and shadcn/ui. No separate UI setup, environment variables, API keys or database are required.

## Development

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000). Changes update automatically while the server is running. Press `Ctrl+C` to stop it.

To use another port:

```bash
npm run dev -- --port 3001
```

## Production

Build the site, then start the production server:

```bash
npm run build
npm start
```

Open [localhost:3000](http://localhost:3000). Run `npm run build` again after changing the source before restarting the production server.

The production script uses Next.js's supported Webpack compiler. Turbopack repeatedly failed to connect to its CSS worker process on this Windows setup, including outside the restricted environment. The Webpack production build passed. Development continues to use the existing Next.js default compiler.

## Code checks

```bash
npm run lint
npx tsc --noEmit
```

## Files

- `app/page.tsx` renders the landing page; `app/layout.tsx` loads the local Archivo Black, Manrope and Poppins font roles and page metadata. Both OFL licences are retained alongside the fonts.
- `components/site/studio-shell.tsx` owns the shared navigation, footer and site search.
- `components/site/` contains shared page parts, the project gallery, enquiry form, product gallery and profile viewer.
- `lib/company-profile.ts` contains the shared solution, sector, project, partner, client and profile-page content.
- `app/tokens.css` owns the fixed brand palette. `app/site.css` owns shared layout, `app/about-data.css` owns the About record, and `app/restored-studio.css` owns the restored black/white/red presentation. `app/contact/contact.css` owns the continuous 48/52 Contact composition, shared heading anchor and compact form proportions. Retired styles and components are preserved under `references/retired-runtime/`, outside the active build.
- `public/assets/` contains the original images, logos, fonts and font licenses.
- `public/assets/brochure/` contains extracted images, three restored illustrative hero photos, the client logo board, product details and all 20 original profile pages. `manifest.json` records provenance and processing.
- `public/assets/photography/` contains the optimized contextual photographs. `sources.json` records source pages, photographers and license; these are illustrative and are never passed off as named Felix project installations.
- `public/assets/projects/` contains fifteen authentic site photographs from verified online sources, replacing the small brochure crops. `sources.json` records exact source files, credits and processing. Original brochure images remain unchanged.
- `components/site/animated-copy.tsx` and `display-text.tsx` share the reference-style masked word reveal across headings and body copy, with a reduced-motion fallback.
- `public/downloads/felix-company-profile.pdf` serves the real company profile.
- `references/PROFILE_ANALYSIS.md` records every PDF section/subsection and its website use. `references/IMAGE_RESTORATION.md` records restoration prompts and limitations.
- `DESIGN.md`, `PROJECT_SCOPE.md` and `FOUNDATION_PROMPT.md` preserve design decisions and the owner's brief.

Navigation uses real routes. Project category filters persist in URL parameters; the project search box is removed. The five category names rotate through centered positions using the reference’s 420ms eased slide, depth, scale and opacity; photographs crossfade in 200ms. Keyboard navigation and reduced-motion handling remain available. Single results and incomplete rows are centered. Site search runs locally. The carousel changes every three seconds with a smooth image crossfade, previous/next arrows and reduced-motion handling. The image surface pauses rotation when clicked; reduced motion and hidden tabs stop auto-rotation. The shared accessible dropdown updates an illustrative photograph, factual description and destination for all nine sectors; its dark variant is used in the enquiry form. Clients uses the original 64-logo board without a duplicate name directory. Product illustrations retain native dimensions. The brochure viewer includes every supplied page and a real PDF download. The full-color original logo and white navbar remain. The directory footer appears only on Home and Contact; the copyright strip is omitted. No vacancies, project outcomes, endorsements, certifications or legal policies have been invented.

The enquiry form validates locally, retains values while editing its review step, and prepares an email draft. It does not submit to a server or claim the enquiry was sent. A separate backend developer can replace that delivery step with an integration. There are no API endpoints, databases, accounts or upload services.

After a successful build, run a production preview, then `node scripts/verify-frontend.mjs http://localhost:3000` to crawl generated pages, validate internal destinations and public assets, and check the real profile download. The report is saved under `references/analysis/`. Browser checks are still required for layout and interaction behavior.

For an isolated review build, set `FCL_DIST_DIR` to a different build directory, such as `.next-brand`, for both build and start. This keeps the current preview usable while another build is prepared. Pass that directory as the crawler's third argument, for example `node scripts/verify-frontend.mjs http://localhost:3002 .next-brand`.

The owner authorized committing and pushing the completed website to the connected GitHub main branch, which deploys to https://fcl-web-one.vercel.app. See `references/DELIVERY_NOTES.md` for verification and source-image provenance.

Contact uses locally hosted Public Sans for its form and supporting text, Archivo Black for both principal headings, and IBM Plex Mono for telephone/address data. The Public Sans font and OFL license come from the official Google Fonts repository (`ofl/publicsans`); its root font variable is not preloaded on unrelated pages.
