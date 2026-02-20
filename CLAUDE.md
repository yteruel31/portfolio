# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
yarn dev          # Start dev server on localhost:3000
yarn build        # Production build
yarn start        # Start production server
yarn lint         # Run ESLint (next lint)
```

Package manager is **Yarn**. No test runner is configured.

## Environment

Requires a `.env.local` file with:
- `DATOCMS_READONLY_TOKEN` — DatoCMS GraphQL API token (server-side only)

In development (`NODE_ENV=development`), draft content is included via the `X-Include-Drafts` header.

## Architecture

Next.js 14 portfolio + blog site using the **App Router** with server-side rendering, deployed on Vercel.

### Routing

- `/` — Home page with Hero, AboutMe, and Showcase sections (`src/app/page.tsx`)
- `/blog` — Blog listing (`src/app/blog/page.tsx`)
- `/blog/[slug]` — Dynamic blog article with `generateMetadata` for SEO (`src/app/blog/[slug]/page.tsx`)

### Data Fetching

All data comes from **DatoCMS** via GraphQL. The generic fetch wrapper lives in `src/lib/datoCms.ts`. Page components are async server components that call `request<T>()` with inline `gql` queries and pass data as props to child components.

### Component Conventions

- Components live in `src/components/`, each in its own directory with a `.tsx` file and a co-located `.module.css` file.
- Page-level sections (Hero, AboutMe, Showcase) are under `src/components/_Sections/`.
- Client components are explicitly marked with `'use client'`.
- The `Device` component uses a render-props pattern wrapping `react-device-detect`.

### Styling

- **CSS Modules** for component-scoped styles (no Tailwind, no styled-components).
- Global CSS variables defined in `src/app/globals.css` for colors (`--c-primary`, `--c-foreground-*`, `--c-background`), layout (`--layout-max-width`, `--navbar-height`), and fonts.
- Dark mode via `@media (prefers-color-scheme: dark)`.
- `clsx` for conditional class composition.

### Type Definitions

TypeScript models for CMS content are in `src/models/` (`article.ts`, `project.ts`).

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Blog Rendering

Blog articles use DatoCMS **Structured Text** rendered with `react-datocms` `<StructuredText>`, with custom node rules for headings (auto-anchored), paragraphs, links (open in new tab), and code blocks (highlighted via `shiki` through `SyntaxHighlight` component).