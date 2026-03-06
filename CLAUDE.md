# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint v9 flat config with Next.js core-web-vitals + TypeScript rules)
- No test framework is configured

## Architecture

- **Next.js 16** with App Router (`src/app/`), React 19, TypeScript strict mode
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` and `@theme` blocks in `src/app/globals.css` (no `tailwind.config.js`)
- **Path alias:** `@/*` maps to `./src/*`
- Server Components by default; only `Header.tsx` and `NewsletterForm.tsx` use `"use client"`
- No database, API routes, auth, or state management — all content is hardcoded in page files

## Design System

**Fonts** (loaded in `layout.tsx` via `next/font/google`):
- Playfair Display → `font-heading` (headings, titles)
- Crimson Pro → `font-body` (body text, paragraphs)
- JetBrains Mono → `font-mono` (labels, metadata, case numbers)

**Theme colors** (defined as `@theme` variables in `globals.css`):
- `parchment` (#f5f0e8) — page background
- `ink` (#2c2c2c) — body text
- `forest` (#2d4a3e) — header/footer bg, headings, primary accent
- `brass` (#b8943e) — gold highlights, dividers, links
- `cream` (#faf7f0) — card backgrounds
- `sage` (#7a8b7a) — secondary/muted text
- `burgundy` (#8b2635) — emphasis, hover states, danger
- `charcoal` (#1a1a1a) — footer background

**Severity color scale** (used in violations page badges):
sage → brass → burgundy → rust → forest (NOTED → CONCERNING → ALARMING → UNCONSCIONABLE → EXISTENTIAL)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — hero section, subject card with images, 5-card nav grid |
| `/manifesto` | Long-form article with PullQuote components |
| `/violations` | 10 violation entries rendered from a typed array |
| `/demands` | 5 demand entries with compliance deadline boxes |
| `/thinkpieces` | Essay index with 5 entries (links to `/thinkpieces/[slug]`, not yet implemented) |
| `/stay-informed` | Newsletter signup with NewsletterForm client component |

## Key Patterns

- **Page data**: Violations, demands, and essays are defined as typed arrays within their page files and mapped over in JSX
- **Metadata**: Each page exports Next.js `Metadata` with format `"{Page} | The Urban Ethics Review"`
- **Page headers**: Most inner pages use the `PageHeader` component (title, optional subtitle, optional quote)
- **Article text**: Uses `.prose-urban` CSS class for consistent paragraph spacing/sizing
- **Dividers**: `<Divider />` renders a decorative `✦` between brass lines; accepts `className` for overrides
- **Images**: Use `next/image` `Image` component; served from `public/img/`

## Assets

- **Favicon:** `src/app/icon.png` (auto-detected by Next.js App Router)
- **Images:** `public/img/` — `citycore_no.png`, `umai-1-text-square.png`
- **Legacy:** `assets/img/` also contains copies of images

## Deployment

- Deployed on Vercel via GitHub integration (auto-deploys on push to `master`)
- Project: `urban-ethics-review` on Vercel
