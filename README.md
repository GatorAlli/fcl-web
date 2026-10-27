# Felix Controls Limited

The `html-mockup/` landing page converted to Next.js App Router, React, TypeScript and Tailwind CSS v4. shadcn/ui is initialized in `components.json`, with its button component in `components/ui/`.

## Run locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Check and build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Files

- `app/page.tsx` renders the landing page; `app/layout.tsx` loads the original local fonts and page metadata.
- `components/site/` contains the page sections and existing interactions.
- `lib/site-content.ts` contains the shared service and project copy used by the page and local search.
- `app/globals.css` uses Tailwind utilities and the mockup's precise dimensions, breakpoints, animations and print styles.
- `public/assets/` contains the original images, logos, fonts and font licenses.
- `html-mockup/` remains the unchanged reference, including asset provenance in its README.

The original carousel, menus, service expansion, project filters, local search, dialogs, section scrolling and back-to-top behavior are preserved. Contact, careers, profile download and privacy content remain preview placeholders. No backend, form submissions or new functionality have been added.
