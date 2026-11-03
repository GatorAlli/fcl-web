---
version: alpha
name: Felix Controls Limited
description: An image-led engineering website with a black canvas, white navigation and a company record grounded in the original profile.
colors:
  background: "#0C0C0C"
  panel: "#0C0C0C"
  surface: "#FFFFFF"
  foreground: "#F6F6F3"
  muted: "#DEDFDA"
  primary: "#186636"
  link: "#96D3AD"
  contact: "#FF0000"
  rule: "#444B46"
  action-ink: "#080808"
typography:
  display:
    fontFamily: "Archivo Black, Arial, sans-serif"
  heading:
    fontFamily: "Manrope, Arial, sans-serif"
  body:
    fontFamily: "Poppins, Arial, sans-serif"
  data:
    fontFamily: "IBM Plex Mono, monospace"
  contact-ui:
    fontFamily: "Public Sans, Arial, sans-serif"
rounded:
  DEFAULT: "0.125rem"
spacing:
  page-max: "100%"
  page-padding: "1.25rem"
  section-gap: "4rem"
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
  primary-action:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
  contact-action:
    backgroundColor: "{colors.contact}"
    textColor: "{colors.action-ink}"
  company-record:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.foreground}"
  caption:
    textColor: "{colors.muted}"
  link:
    textColor: "{colors.link}"
  divider:
    backgroundColor: "{colors.rule}"
---

# Felix Controls design system

## Overview

English-language public engineering website for prospective customers in Bangladesh. It presents the company's technical systems, authentic reference projects, clients, services and contact details. This is a marketing site, with no backend delivery or account workflows.

Creative North Star: the owner's earlier black Felix design, informed by MILIVOJA's bold About statement and Control4's image-led presentation. Awwwards architecture references and RAW's architecture concept on Dribbble inform hierarchy and image framing, not copied content or assets. The signature combines the original switching-image hero with a clear engineering directory.

The owner explicitly cancelled the intervening light-theme brief on 3 November 2026 and requested the previous design language, retaining the current About structure. The black canvas, white navbar, original coloured logo, red Contact action and photography are restored. The old stacking-card effect is removed rather than applied to every section. The owner subsequently requested animated partner logos, centered Home navigation, a centered animated hero and clearly alternating homepage colour chapters.

Runtime token ownership is Model B: `app/tokens.css` owns the current fixed palette. `app/site.css` owns shared layout and primitives, `app/about-data.css` owns the company-record layout, and `app/restored-studio.css` owns the restored visual treatment and explicitly scoped white-navigation overrides. All are imported once by `app/layout.tsx`. Contact-specific architecture and field proportions are owned by `app/contact/contact.css`, imported by that route. Old CSS is preserved outside runtime in `references/retired-runtime/`.

## Colors

Black and white are the page surfaces, with off-white headings and high-contrast body copy. Green is the primary action colour; lighter green identifies links and technical field labels on black. Home alternates black company/solutions/projects chapters, white partner/sector chapters and a brand-red engineering-services chapter. Large white text on red is reserved for headings; body copy and actions use dark ink for contrast. The white navbar uses dark text and original full-colour Felix artwork. Its red Contact action uses dark text. Footer telephone emphasis uses accessible red at large bold size.

There is one fixed visual design and no day/night selector, automatic theme change or saved preference. White surfaces remain appropriate for original product illustrations and client/partner logos. No gradient text, glows or glass cards.

## Typography

Archivo Black owns the homepage hero, Manrope owns headings, Poppins owns prose and controls, IBM Plex Mono owns the company-data fields. Contact uses the same Archivo Black face for its main and form headings, Public Sans for copy and form controls, and IBM Plex Mono for telephone/address data. Public Sans is locally hosted with preload disabled so unrelated pages retain their existing type. Only 400 and 700 are used; Archivo Black is intrinsically heavy at 400. The original licences remain alongside local fonts. No Inter, Space Grotesk, Plus Jakarta Sans or Instrument Serif.

Heading words remain intact. Use `word-break: keep-all`, normal whitespace and no automatic hyphenation. The large About opening is an editorial statement based on the exact founding sentence. Supporting paragraphs remain within 65ch. Labels have contextual meaning rather than decorative chips.

## Layout

Shared symmetric gutters are clamp(20px, 2vw, 40px), with full available desktop width. Core layouts stack at 1024px. The desktop navigation is optically centered independently of the left logo and right search control, and includes Home. Hero headline, description and primary action are centered on both axes. Page introductions are natural height rather than empty viewport-sized bands. All utility links sit beside their section heading or within the relevant content group.

Home retains the switching hero, About company record, partners, solutions, sectors, reference projects and engineering services. The image-led modules use balanced two-column compositions. Black-chapter titles use Archivo Black and green emphasis; the white partner chapter is compact and heading masks reserve descender space. Project photographs fill the three-column desktop gallery; one- and two-result groups use wider layouts with captions directly beneath. All fifteen project photos use authentic online source photographs. Preserve native detail, avoid enlargement and never substitute unrelated sites. The category strip reserves 40–48px of space before the image grid. No horizontal project scrollbar. All galleries stack on narrow screens.

About retains a wide founding statement, a narrow-label/wide-content company record, stacked Mission/Vision/Objective rows, six resource facts, Why Felix, an explicitly unconfirmed profile quotation and the PDF download. Home About returns to an engineering photograph and concise founding/track-record copy. The track record reads 400+ projects, 100+ customers, 15+ years. The complete company record remains on About, without a containing panel, background or row separators. Do not invent team members, headcount, certifications, milestones or facility details.

Solution heroes contain a utility/technology row, wide H1, a readable standfirst and full-width 21:9 media. System overview, Capabilities and Applications are three compact text-only rows with large green headings on a shared label/content grid. The owner clarified that photographs belong only in Technology references. That section pairs a native-scale stack of the supplied company artwork and captions with one complementary context photograph, sharing top and bottom anchors and no empty cells. Image wells contain the full product illustrations without cropping or artificial enlargement. The composition stacks at 1024px, with each caption directly below its image. Context photographs are illustrative; the Control4 touchscreen photograph is sourced from Control4 itself. Short content stays compact. The footer appears on Home and Contact only, uses 1.5/1/1/1.5 columns with labelled email, phone and address, and displays the original full-colour logo on a small white ground. The copyright strip is omitted. Contact is one continuous 48/52 black composition beginning at the navbar boundary. The dark column contains the headline, supporting sentence, conversation label, email, primary phone and aligned office data. The enquiry column shares the black canvas and off-white text, with black fields and high-contrast borders; it is not an inset card. Both columns share 64px top padding and cap-top heading alignment, with a normal-flow fallback. The layout stacks at 1024px and uses 32px top padding on phones. Inputs/dropdowns use 48px minimum height, 16px/24px Public Sans, 8px label gaps, 24px row gaps and a 144px resizable message area. Long dropdown values expand naturally instead of clipping. The enquiry popup uses the same dark surface and font through the existing shared selector.

## Elevation & Depth

Normal document flow is the default. Sections do not overlap, pin or stack while scrolling. No parallax, scroll-jacking, cursor followers or large card shadows. Navigation is fixed at 72px; open menus are measured to keep project content below them. Native scrollbar access remains available.

## Shapes

Rectangular images, tables and controls; restrained 2px corners. Circular arrow controls are reserved for the hero and existing navbar arrows. No identical rounded/shadowed feature cards or decorative icon sets.

## Components

### Foundational visual states

Links and buttons use semantic elements, deliberate hover, keyboard focus and pressed/selected states. Keyboard focus is visible on both white navigation and black content. Errors retain their text explanations and field association. Logo and media dimensions are reserved.

### Buttons and actions

Green primary actions use white text. Secondary actions have a quiet border and contextual labels. The restored navbar Contact action is red with dark bold text. Contact links lead to the actual Contact page. No repeated contact invitation on every interior page.

### Navigation and data display

`StudioShell` owns navigation, menus, search and footer. Reference Projects opens the project index with All projects selected. Its five category buttons exclude All projects, select in place, support arrow keys and retain URL state. Project-specific search stays removed; navbar search remains. The owner subsequently approved the reference’s centered circular selector: the selected name glides into the middle, with two names on each side. Transforms use 420ms cubic-bezier(.22,1,.36,1), scale 1/.8/.6, 6px of vertical depth per step, ±16deg side tilt and 800px perspective. Names occupy deterministic offsets -2 through 2; DOM order and label text remain stable. Opacity falls with distance, with a .55 minimum for readable contrast. Selection uses green text without a background block. A single roving tab stop and arrow/Home/End keys preserve keyboard access. Mobile retains centered selection and arrows, uses a larger horizontal step for long category names, and hides the two far choices. All-projects view keeps all results and no pressed category; its neutral center is Commercial. Outgoing and incoming project galleries crossfade over 200ms, with no transform.

`CompanyDataSheet` and `lib/company-data.ts` share the supplied company facts between Home and About. IBM Plex Mono field names align with values. Current About layout and content survive the design-language restoration.

### Forms and overlays

The enquiry form validates locally and prepares an email draft for the visitor to send. It does not claim delivery. The shared Base UI selector owns accessible keyboard, popup placement and dismissal. Search supports clear and no-results states.

### Iconography

Use existing restrained SVG chevrons and essential Lucide symbols only. Meaningful icon-only actions have accessible names. Avoid repeated decorative arrows.

### Motion

All headings and body copy share the reference’s masked word entrance: 650ms cubic-bezier(.22,1,.36,1), 55ms word stagger capped at six words, clip-path from bottom-closed to an expanded descender-safe boundary and translateY(.25em) to zero. AnimatedCopy preserves semantic markup and links without rewriting the browser DOM; DisplayText owns the same reveal for each text segment. Text waits until it enters the visible viewport (6% bottom inset), reveals once, and never moves surrounding content. Text is server-rendered and visible without JavaScript. Links and utility text receive the same 650ms mask. Navigation remains stable; category names only move in response to an explicit category selection. Solution and reference-menu item hovers transition text to green in 180ms without background boxes; keyboard focus remains visible. All entrances stop for reduced motion and print.

The hero entrance runs once, while photographs crossfade at 900ms every 3000ms with two arrows and a click-to-pause surface. Partner logos move on a 42-second loop with hover/focus pause and a keyboard-accessible pause action that is visually hidden until focused, as requested. Reduced motion shows static wrapped logos. There are no stacking-card animations, sticky content layers or parallax. Nav arrow rotation uses 180ms; category names use the measured 420ms centered transition while project galleries crossfade in 200ms.

### Content and data visualization

Use actual PDF/company data, preserve the user's founding statement, and trim repetition. Named-project images remain photographs of the actual sites. Two hospital photographs come from the hospitals’ own websites. The Dhaka Metro photograph is an actual high-resolution Diabari-depot train image by the Bangladesh Press Information Department, marked public domain on Wikimedia Commons. The remaining twelve photographs were replaced with authentic sources from the companies, developers, an architect and Wikimedia Commons. No active project photo uses generated detail. The museum photograph is by Wasiul Bahar under CC BY-SA 4.0, with attribution and the resize/conversion disclosed on its project detail page; gallery cards contain only the project name and description. All originals remain preserved and the active source/processing inventory is public/assets/projects/sources.json. General high-resolution context photography is illustrative; provenance is retained in the photography source manifest. Rejected Contact footage remains removed. Archived videos are not silently reactivated. Preserve original PDF and Illustrator sources.

## Do's and Don'ts

- Do preserve the current About facts and structure while restoring the earlier studio language elsewhere.
- Do use image-first presentation, clear heading levels, coherent spacing and compact layouts.
- Do keep source photographs, original company documents and font licences.
- Do respect keyboard access, reduced motion and native scrolling.
- Don't bring back stacking-card scroll effects or heavy category animation.
- Don't invent company credentials, people, outcomes or project specifications.
- Don't treat reference-site text or media as Felix company evidence.
