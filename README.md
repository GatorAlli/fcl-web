# Felix Controls Limited

The Felix Controls Limited landing page, built with Next.js App Router, React, TypeScript and Tailwind CSS v4. shadcn/ui is initialized in `components.json`, with its button component in `components/ui/`.

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

## Code checks

```bash
npm run lint
npx tsc --noEmit
```

## Files

- `app/page.tsx` renders the landing page; `app/layout.tsx` loads the original local fonts and page metadata.
- `components/site/` contains the page sections and existing interactions.
- `lib/site-content.ts` contains the shared service and project copy used by the page and local search.
- `app/globals.css` uses Tailwind utilities and the mockup's precise dimensions, breakpoints, animations and print styles.
- `public/assets/` contains the original images, logos, fonts and font licenses.

The original carousel, menus, service expansion, project filters, local search, dialogs, section scrolling and back-to-top behavior are preserved. Contact, careers, profile download and privacy content remain preview placeholders. No backend, form submissions or new functionality have been added.
