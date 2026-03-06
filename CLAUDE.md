# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint v9 flat config with Next.js core-web-vitals + TypeScript rules)
- **No test framework is configured yet**

## Architecture

- **Next.js 16** with App Router (`src/app/`), React 19, TypeScript (strict mode)
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` and `@theme` blocks in `globals.css`, not a `tailwind.config.js` file
- **Path alias:** `@/*` maps to `./src/*`
- Server Components by default (no `"use client"` unless needed)
- Fonts: Geist Sans and Geist Mono loaded via `next/font/google` as CSS variables

## Assets

- **Favicon:** `src/app/icon.png` — custom PNG favicon (auto-detected by Next.js App Router)
- **Images:** `assets/img/` — project image assets

## Project Status

This is a fresh scaffold from `create-next-app`. No database, auth, API routes, testing, or state management is set up yet. The single route is `src/app/page.tsx`.
