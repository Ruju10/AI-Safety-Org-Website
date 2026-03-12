# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npm run start    # Start production server (after build)
```

> **Note:** Node.js is not in the system PATH on this machine. Install from nodejs.org before running any npm commands.

## Architecture

This is a **Next.js 14 App Router** project. Data is fetched server-side via ISR (`revalidate: 3600`) — pages refetch from Airtable every hour without redeployment.

### Data flow

`lib/airtable.ts` is the single data layer. It exports typed async functions (`getOrgs`, `getNews`, `getLandscapeMapping`, `getIntlOrgs`, `getIndividuals`) that each wrap an Airtable table fetch with a `try/catch` — if Airtable is not configured, they silently return hardcoded fallback arrays defined at the bottom of the same file. **The site works fully without `.env.local` set**, using that fallback data.

Server components (`app/page.tsx`, `app/landscape/page.tsx`, etc.) call these functions directly and pass results as props to client section components.

### Component boundaries

**Server components** — pages in `app/*/page.tsx`. Responsible for data fetching only; render layout wrappers and pass data props down.

**Client components** (`'use client'`) — everything in `components/`. Sections receive data as props and handle interactivity (filter tabs, hover animations). The split is: pages = async data fetching, components = rendering + animation.

### Styling approach — dual system

Styles are applied two ways and both are intentionally used:

1. **CSS utility classes** defined in `globals.css` `@layer components`: `.chip-teal`, `.chip-gray`, `.h2`, `.lead`, `.rule`, `.btn-teal`, `.btn-ghost`, `.sec-white`, `.sec-bg`, `.sec-bg2`, `.sec-bg3`, `.tag-s`, `.nav-pill`. Use these for recurring structural patterns.

2. **Inline `style={{}}` props**: Used everywhere else for one-off sizing, spacing, and design-token values (e.g. `color: 'var(--teal)'`). CSS custom properties (defined in `:root` in `globals.css`) are used via inline styles rather than Tailwind classes when precise values are needed.

Do **not** reach for Tailwind utility classes for one-off values — use inline styles with CSS vars instead, matching the existing pattern.

### Design tokens

All colors and spacing live as CSS vars (`--teal`, `--ink`, `--ink-mid`, `--ink-dim`, `--border`, `--bg`, `--bg-2`, `--bg-3`) plus the Tailwind theme extension in `tailwind.config.ts`. Org-type dot colors: India `#0D7A6B`, Intl `#3B6FD4`, Academic `#C47A1B`, Policy `#B0399A`.

### Fonts

`Fraunces` (serif, headings) and `Outfit` (sans, body) are loaded via `next/font/google` in `app/layout.tsx` and injected as CSS vars `--font-fraunces` and `--font-outfit`. Reference them as `fontFamily: 'var(--font-fraunces)'` in inline styles, or via Tailwind's `font-fraunces` / `font-outfit` classes.

### Animation conventions (Framer Motion)

- Scroll-triggered entry: `whileInView={{ opacity: 1, y: 0 }}` with `initial={{ opacity: 0, y: 24 }}` and `viewport={{ once: true, margin: '-80px' }}`
- Card hover: `whileHover={{ y: -4, boxShadow: '...' }}`
- Filtered grids: wrap items in `<AnimatePresence mode="popLayout">` with `layout` prop on the grid container

### Airtable tables

| Table | Key fields |
|---|---|
| `AIS_Orgs` | Name, Type (India/Intl/Academic/Policy), Focus, Location, AIS_Relevance, Website |
| `Individuals` | Name, Affiliation, Background, Email |
| `News` | Headline, Source, Date, Category, URL |
| `Landscape_Mapping` | Organisation, Sector, Focus_Areas, AIS_Relevance, Location |
| `Intl_Orgs` | Name, Description, Tag, Website |

### Environment variables

```
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
NEXT_PUBLIC_WA_FORM_URL=       # iframe src for WhatsApp registration form
NEXT_PUBLIC_ORG_FORM_URL=      # iframe src for org interest form
NEXT_PUBLIC_INDIVIDUAL_FORM_URL= # iframe src for individual interest form
```

`NEXT_PUBLIC_*` form URLs are optional — participation page shows a styled mock form when unset.
