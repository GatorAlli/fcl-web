# AGENTS.md

This file is the **canonical** source of instructions for every coding agent working in this
repository (Claude Code, Codex, or any other agent). `CLAUDE.md` only imports this file — it
never duplicates content from it.

## 1. Project

**Felix Controls Limited** — the marketing/brochure website for an engineering firm (building
management systems, HVAC controls, fire & security, lighting, parking, home automation, etc.).
It is a content-driven, image-led site: 46 routes (home, About/Services/Partners/Clients/
Contact/Careers/Resources, a solutions index + solution detail pages, a sectors index + sector
detail pages, a projects index + project detail pages). There is currently **no backend, API, or
database** — all content is authored in `lib/*.ts` data modules and rendered statically/server-side
by Next.js.

**Stack**

- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org) 16 (App Router, `app/` directory)
- [Tailwind CSS](https://tailwindcss.com) v4 (CSS-first config via `@theme` in `app/globals.css`, no `tailwind.config.*`)
- [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com) primitives, [class-variance-authority](https://cva.style) for variants, [lucide-react](https://lucide.dev) for icons

> When new stack pieces are added (Drizzle, a database, BetterAuth, etc.), update this section
> in the same change that introduces them.

## 2. Working agreements (all agents)

a. **Format on every edit.** Run `npx prettier --write <file>` on every file you create or edit,
immediately after writing it. Claude Code does this automatically via the PostToolUse hook in
`.claude/settings.json`; every other agent must do it manually.

b. **Keep the file tree current.** Whenever a file or folder is added, removed, renamed, or
repurposed, update the "Project file structure" section (§5) in the _same_ change.

c. **AGENTS.md is canonical.** `CLAUDE.md` only imports this file (`@AGENTS.md`). Never copy or
duplicate shared content into `CLAUDE.md` — add it here instead.

d. **Ask when unclear.** If anything about a request, this file, or the existing code is even
remotely unclear, ask the project owner before acting.

e. **Conventional Commits.** Write commit messages following
[Conventional Commits](https://www.conventionalcommits.org) — see the `conventional-commit`
skill (§3).

## 3. Skills

| Name                  | Source                                                                          | When to use it                                                                                          |
| --------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `frontend-design`     | [vercel-labs/agent-eval](https://github.com/vercel-labs/agent-eval)             | Building or restyling any UI: pages, sections, components — for distinctive, non-generic visual design. |
| `tailwind-v4`         | [mastra-ai/mastra](https://github.com/mastra-ai/mastra)                         | Writing or reviewing Tailwind CSS v4 utility classes and `@theme` config — v4-specific best practices.  |
| `tailwind-4-docs`     | [lombiq/tailwind-agent-skills](https://github.com/lombiq/tailwind-agent-skills) | Looking up exact Tailwind v4 API/behavior details beyond general best practice.                         |
| `conventional-commit` | [github/awesome-copilot](https://github.com/github/awesome-copilot)             | Writing every git commit message in this repo.                                                          |
| `create-readme`       | [github/awesome-copilot](https://github.com/github/awesome-copilot)             | Drafting or restructuring `README.md`.                                                                  |
| `postgres-drizzle`    | [ccheney/robust-skills](https://github.com/ccheney/robust-skills)               | Future work: once a Postgres + Drizzle backend is introduced (not present yet).                         |

Skill content lives in `.agents/skills/<name>/` and is symlinked into `.claude/skills/<name>/`
for Claude Code discovery. Installed via `npx skills add <repo-url> --skill <name>`, tracked in
`skills-lock.json`.

## 4. Commands

| Command                | Purpose                                   |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the Next.js dev server              |
| `npm run build`        | Production build (`next build --webpack`) |
| `npm run start`        | Run the production build                  |
| `npm run lint`         | ESLint (flat config, Next.js rules)       |
| `npm run format`       | Format the whole repo with Prettier       |
| `npm run format:check` | Check formatting without writing          |

There is no test suite configured yet.

## 5. Project file structure

```text
fcl-web/
├── AGENTS.md                        # canonical agent instructions (this file)
├── CLAUDE.md                        # Claude Code pointer: imports AGENTS.md + Claude-only notes
├── README.md                        # project readme (setup, scripts, route count)
├── DESIGN.md                        # design system spec: colors, type, spacing, motion values
├── PROJECT_SCOPE.md                 # current scope/ownership notes from the project owner
├── FOUNDATION_PROMPT.md             # original brief used to scaffold the site
├── .gitignore                       # git ignore rules
├── .prettierrc                      # Prettier config (prettier-plugin-tailwindcss, cn/cva sorting)
├── .prettierignore                  # paths excluded from Prettier
├── components.json                  # shadcn/ui CLI config
├── eslint.config.mjs                # ESLint flat config (eslint-config-next)
├── next.config.ts                   # Next.js config
├── package.json                     # dependencies + npm scripts
├── package-lock.json                # npm lockfile
├── postcss.config.mjs               # PostCSS config (@tailwindcss/postcss)
├── skills-lock.json                 # lockfile for `npx skills add`-installed agent skills
├── tsconfig.json                    # TypeScript config (`@/*` path alias to repo root)
│
├── .claude/                         # Claude Code-specific config (see CLAUDE.md)
│   ├── settings.json                # project settings: PostToolUse format-on-save hook
│   ├── hooks/
│   │   └── format.mjs               # PostToolUse hook: Prettier-formats the edited/written file
│   └── skills/                      # symlinks into ../.agents/skills (Claude Code skill discovery)
│       ├── conventional-commit -> ../../.agents/skills/conventional-commit
│       ├── create-readme -> ../../.agents/skills/create-readme
│       ├── frontend-design -> ../../.agents/skills/frontend-design
│       ├── postgres-drizzle -> ../../.agents/skills/postgres-drizzle
│       ├── tailwind-4-docs -> ../../.agents/skills/tailwind-4-docs
│       └── tailwind-v4 -> ../../.agents/skills/tailwind-v4
│
├── .agents/
│   └── skills/                      # actual skill content (source of truth for .claude/skills symlinks)
│       ├── conventional-commit/     # Conventional Commits message-writing skill
│       ├── create-readme/           # README-authoring skill
│       ├── frontend-design/         # frontend/UI visual-design-quality skill
│       ├── postgres-drizzle/        # Postgres + Drizzle ORM skill (for future DB work)
│       ├── tailwind-4-docs/         # Tailwind v4 docs reference skill
│       └── tailwind-v4/             # Tailwind v4 best-practices skill
│
├── app/                              # Next.js App Router routes
│   ├── layout.tsx                    # root layout: fonts, <StudioShell>, metadata
│   ├── page.tsx                       # home page
│   ├── globals.css                    # Tailwind v4 entry + brand theme tokens + base styles
│   ├── not-found.tsx                  # 404 page
│   ├── robots.ts                      # robots.txt route handler
│   ├── sitemap.ts                     # sitemap.xml route handler
│   ├── about/page.tsx                 # About page
│   ├── careers/page.tsx               # Careers page
│   ├── clients/page.tsx               # Clients page
│   ├── contact/page.tsx               # Contact page
│   ├── partners/page.tsx              # Partners page
│   ├── services/page.tsx              # Services page
│   ├── resources/page.tsx             # Resources page
│   ├── projects/
│   │   ├── page.tsx                    # Projects index/listing
│   │   └── [slug]/
│   │       ├── page.tsx                # Single project detail page
│   │       └── loading.tsx             # Loading skeleton for project detail
│   ├── sectors/
│   │   ├── page.tsx                    # Sectors index/listing
│   │   └── [slug]/
│   │       ├── page.tsx                # Single sector detail page
│   │       └── loading.tsx             # Loading skeleton for sector detail
│   └── solutions/
│       ├── page.tsx                    # Solutions index/listing
│       └── [slug]/
│           ├── page.tsx                # Single solution detail page
│           └── loading.tsx             # Loading skeleton for solution detail
│
├── components/
│   ├── ui/
│   │   └── button.tsx                  # shadcn/ui Button primitive
│   └── site/                           # site-specific composed components
│       ├── animated-copy.tsx           # animated text/copy reveal
│       ├── brand-select.tsx            # brand/manufacturer selector UI
│       ├── company-data-sheet.tsx      # company data-sheet display block
│       ├── company-logo.tsx            # Felix Controls logo component
│       ├── company.tsx                 # company profile section component
│       ├── count-up-number.tsx         # animated number counter
│       ├── direction-icon.tsx          # directional icon helper
│       ├── display-text.tsx            # large display typography component
│       ├── enquiry-form.tsx            # contact/enquiry form (local validation, no backend)
│       ├── hero.tsx                     # page hero section
│       ├── home-expertise.tsx          # home page "expertise/solutions" section
│       ├── home-sectors.tsx            # home page sectors section
│       ├── leadership-profile.tsx      # About page leadership row: circular photo (left/right), bio, optional inline "Read More"
│       ├── manufacturer-links.tsx      # manufacturer/partner link list
│       ├── page-canvas.tsx             # shared black-canvas page layout wrapper
│       ├── page-parts.tsx              # shared page section building blocks
│       ├── partner-strip.tsx           # partner logo strip
│       ├── product-gallery.tsx         # product image gallery
│       ├── profile-prose.tsx           # long-form company profile prose renderer
│       ├── project-gallery.tsx         # project image gallery
│       ├── project-showcase.tsx        # featured project showcase block
│       ├── route-loading.tsx           # route-transition loading indicator
│       ├── studio-shell.tsx            # app shell (header/footer/nav wrapper)
│       └── text-entrances.tsx          # text entrance animation wrapper
│
├── lib/
│   ├── company-data.ts                 # structured company data (offices, contacts, etc.)
│   ├── company-logos.json              # client/partner logo metadata
│   ├── company-profile.ts              # company profile content model
│   ├── leadership.ts                   # Managing Director + Director profile data and the Director's message
│   ├── media-policy.ts                 # rules for selecting/using media assets
│   ├── official-sites.ts               # official manufacturer/partner site links
│   ├── profile-content.ts              # long-form profile content
│   ├── project-photography.ts          # project image metadata/mapping
│   ├── solution-photography.ts         # solution image metadata/mapping
│   ├── technology-context.ts           # technology/solution descriptive content
│   └── utils.ts                        # shared utilities (re-exports `cn` from the `cn` package)
│
├── public/
│   ├── downloads/
│   │   └── felix-company-profile.pdf   # downloadable company profile PDF
│   └── assets/
│       ├── director-mostafa-kamal-ahmed.webp # director portrait (About page)
│       ├── *.ttf / *.txt               # self-hosted fonts (Archivo Black, Manrope, Poppins, Anybody) + OFL/license text
│       ├── hero/                       # 3 hero background images
│       ├── logos/                      # 40 files — client logos (`client-NN.{svg,png,jpg,webp}`) + partner logos (`partner-<name>.{svg,png,webp}`)
│       ├── photography/                # 37 files — sector/solution/technology photography, plus `solution-media.json` + `sources.json` metadata
│       ├── projects/                   # 16 files — one showcase photo per project, plus `sources.json` metadata
│       └── brochure/                   # 155 files extracted from the company brochure: `client-01..64.webp` (client logo crops), `profile-page-01..20.webp` (full brochure pages), one-off sector/partner/project/product crops (e.g. `sector-healthcare.webp`, `partner-siemens.webp`, `project-beacon.webp`, `bms-dashboard.webp`), plus `manifest.json`
│
├── references/                         # research/handoff material — not imported by app code, dev reference only
│   ├── Company Profile_Felix.pdf       # source company profile PDF
│   ├── DELIVERY_NOTES.md               # delivery/handoff notes
│   ├── FRONTEND_HANDOFF.md             # frontend handoff notes
│   ├── FRONTEND_VERIFICATION.md        # frontend verification notes
│   ├── IMAGE_RESTORATION.md            # notes on recovering/restoring images
│   ├── PHOTOGRAPHY.md                  # photography sourcing notes
│   ├── PROFILE_ANALYSIS.md             # analysis of the company profile document
│   ├── extract_additional_assets.py    # script: extract extra assets from source material
│   ├── extract_web_assets.py           # script: extract assets scraped from the web
│   ├── inspect_brochure.py             # script: inspect brochure PDF contents
│   ├── recover_images.py               # script: recover/restore images
│   └── retired-runtime/                # retired app code kept for reference only, not imported
│       ├── files.json                  # manifest of retired files
│       ├── app__brand-system.css.retired        # retired global stylesheet variant
│       ├── app__carbon.css.retired              # retired global stylesheet variant
│       ├── app__editorial-grid.css.retired      # retired global stylesheet variant
│       ├── app__editorial.css.retired           # retired global stylesheet variant
│       ├── app__globals.css.retired             # retired global stylesheet variant
│       ├── app__project-showcase.css.retired    # retired global stylesheet variant
│       ├── app__refinement.css.retired          # retired global stylesheet variant
│       ├── app__site-system.css.retired         # retired global stylesheet variant
│       ├── components__site__contact.tsx.retired         # retired component
│       ├── components__site__dialogs.tsx.retired         # retired component
│       ├── components__site__film-layer.tsx.retired      # retired component
│       ├── components__site__footer.tsx.retired          # retired component
│       ├── components__site__header.tsx.retired          # retired component
│       ├── components__site__profile-viewer.tsx.retired  # retired component
│       ├── components__site__projects.tsx.retired        # retired component
│       ├── components__site__scroll-effects.tsx.retired  # retired component
│       ├── components__site__scroll-presentation.tsx.retired # retired component
│       ├── components__site__scroll-sheet.tsx.retired    # retired component
│       ├── components__site__services.tsx.retired        # retired component
│       ├── components__site__text-motion.tsx.retired      # retired component
│       ├── components__site__theme-control.tsx.retired   # retired component
│       ├── lib__films.ts.retired                # retired lib module
│       └── lib__site-content.ts.retired         # retired lib module
│
└── scripts/
    ├── apply-light-rebuild.py           # script: apply light-theme rebuild changes
    ├── download_photography.py         # script: download photography assets
    ├── enhance-projects.py              # script: enhance/process project images
    └── verify-frontend.mjs              # script: verify frontend build/output
```

> **Note on `public/assets/{logos,photography,projects,brochure}`:** these four directories hold
> 248 image/metadata files between them. Rather than one comment per image (which would add
> noise, not signal, over self-explanatory filenames), each directory above is documented with
> its file count and naming pattern. If a per-file manifest is ever needed, it belongs in that
> directory's own `sources.json`/`manifest.json`, not here.

## 6. Architecture notes

- **No backend yet.** All content is authored directly in `lib/*.ts`/`.json` modules and consumed
  by `app/**/page.tsx` at build/render time. The `enquiry-form.tsx` component validates locally
  and drafts an email — it does not call an API.
- **Styling is Tailwind v4, CSS-first.** There is no `tailwind.config.*`; theme tokens (colors,
  the black-canvas/white-nav brand palette, etc.) are defined via `@theme inline` in
  `app/globals.css`. See `DESIGN.md` for the full spec (colors, type, spacing, motion).
- **Path alias:** `@/*` resolves to the repo root (`tsconfig.json`), e.g. `@/lib/company-data`.
- **Routing:** every content section (`solutions`, `sectors`, `projects`) follows the same
  index + `[slug]` + `loading.tsx` pattern under `app/`.
- **`references/`** is historical/reference-only material (old PDFs, retired CSS/components,
  one-off extraction scripts) and is never imported by live app code.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
