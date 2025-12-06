<!-- Copilot / AI agent instructions for the next-portfolio repository -->
# Quick Agent Guide — next-portfolio

This file contains focused, actionable guidance for AI coding agents to be immediately productive in this Next.js + TypeScript portfolio.

- Project type: Next.js (App Router) + TypeScript + TailwindCSS.
- Entry points: `src/app/layout.tsx` (root layout, server component) and `src/app/page.tsx` (home page composing Components).

Key commands
- Start dev server: `npm run dev` (Next.js default, serves on :3000).
- Build: `npm run build`; Start prod: `npm start`.
- Lint: `npm run lint`.
- Node engine required: `>=24.0.0` (see `package.json` `engines`).

Architecture / patterns to know
- App Router: The project uses the `app/` directory. Files in `src/app` are server components by default; interactive UIs declare `"use client"` at the top.
- Components: Reusable UI components live in `src/app/Components/*` and are imported directly from `page.tsx`.
- Styling: Tailwind is configured (`tailwind.config.ts`) and global styles are in `src/app/globals.css`.
- Images: Static images live in `public/images` and are loaded via `next/image` (e.g. `Experience.tsx`).

Third-party integrations & notable files
- Particles: Large particles configuration lives at `src/app/particles-config.ts`. The runtime component is `src/app/Components/ParticlesBackground.tsx` and uses `@tsparticles/react` with `loadSlim(engine)` — prefer `loadSlim` to keep bundle small. If you change the loader, update `package.json` accordingly and test performance.
- Animations: `framer-motion` is used across interactive components (see `Experience.tsx`). Many components use `use client` and framer hooks like `useInView` and `useAnimation`.
- Timelines: `react-vertical-timeline-component` is used in `Experience.tsx` and `TimelineElement.tsx`.

Code conventions & small but important rules
- Server vs client: Do not add `"use client"` to `layout.tsx` or other files that must remain server components. Add `"use client"` only to files that use state/hooks or browser-only APIs (e.g. `Experience.tsx`, `ParticlesBackground.tsx`).
- Init side-effects once: `ParticlesBackground.tsx` runs `initParticlesEngine` inside a `useEffect` and sets a local `init` state — follow that pattern for one-time client-side engine initialization.
- Images: Use `next/image` with `src` referencing `/images/...` files in `public/` and proper `width`/`height` props.
- Font usage: Google font is loaded via `next/font` in `layout.tsx` — prefer the same approach for site-global fonts.

What to check before making changes
- Check `package.json` for installed packages and Node engine. Upgrading major dependencies (Next, React) may require migration changes.
- If you alter particles or third-party plugin loading, test memory and bundle size in dev and production builds.
- Ensure interactive components have `"use client"` if they use hooks. Removing or adding it incorrectly will cause runtime errors or bundling issues.

Files to inspect for examples
- Root layout: `src/app/layout.tsx` (server layout + font setup).
- Page composition: `src/app/page.tsx` (how Components are composed in order).
- Particle config: `src/app/particles-config.ts` and `src/app/Components/ParticlesBackground.tsx` (engine init pattern).
- Example client component: `src/app/Components/Experience.tsx` (framer-motion + `use client` + `next/image`).
- Tailwind config: `tailwind.config.ts` and `src/app/globals.css`.

Non-goals / things not present
- There are no unit tests or CI test scripts in the repository. Do not assume test harnesses exist.
- No special build pipeline files (GitHub Actions) were found — adding CI should be deliberate and explained.

If you modify code
- Keep changes minimal and consistent with the App Router patterns.
- Run `npm run dev` and confirm the page renders and any client-side features (particles, animations) initialize.
- If you add a new client-only dependency, verify it is tree-shakeable (prefer slim builds), then bump `package.json` and test a production build.

When to ask the human
- When changing global layout, fonts, or build targets (Node version) — these are cross-cutting and require human approval.
- When adding or replacing large third-party libraries (particles, animation libraries) — ask before increasing bundle size.

Feedback
- If anything in these notes is unclear or missing, please edit this file or tell the human author which areas to expand (CI, testing, deployment notes, or multi-environment configuration).

-- repo scan generated guidance (keep concise) --
