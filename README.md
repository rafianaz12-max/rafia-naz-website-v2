# Rafia Naz Portfolio

A premium, dark-themed personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## This Pass: Button/Navigation Fixes

Every clickable element on the site was tested end-to-end in a real headless browser (not just visually) — desktop nav links, theme toggle, mobile hamburger menu + menu links, Hero/CTA buttons, project card buttons, and the contact form submit button. All confirmed working in a production build (`next build && next start`).

**One real bug found and fixed:** the contact page (`src/app/contact/page.tsx`) had lost its `ContactForm` — the import and component had been removed, leaving the right column of the Contact page empty (info cards + map, no message form). Restored it with a layout that puts contact info and the form side-by-side, and the map full-width below, so neither column is ever left looking empty again.

**Not a bug (for awareness):** if nav links ever feel slow or unresponsive while running `npm run dev` locally, that's normal Next.js dev-mode behavior — each route compiles on first visit, which can take a few seconds. This delay does not exist in a production build or once deployed on Vercel, where every route is pre-compiled.

## Production Readiness (previous audit pass)

No UI/design changes were made in this pass — only build, lint, and security fixes:

- **Upgraded `next` from `15.5.6` → `15.5.22`** (patched release on the same 15.x line, no code changes required). The `15.5.6` version had a published RCE advisory (CVE-2025-66478) plus several other CVEs.
- **Added `overrides` in `package.json`** to force `postcss` and `sharp` (nested inside Next's own toolchain) to patched versions. `npm audit` now reports **0 vulnerabilities**.
- **Migrated ESLint config** from the deprecated `.eslintrc.json` to a flat `eslint.config.mjs` (required for ESLint 9, and `next lint`/`.eslintrc.json` will stop working entirely in Next.js 16).
- **Fixed 1 real lint warning** (unused `Settings` icon import on the project detail page).
- **Removed stray build artifacts** that had accidentally been committed: empty files (`next`, `rafia-naz-portfolio@1.0.0`), `tsconfig.tsbuildinfo`, and two literal brace-expansion folders (`src/{types,lib,...}`, `public/{images,resume}`) left over from an early shell command.

Verified clean: `tsc --noEmit`, `next lint` (0 warnings), `eslint .` (0 warnings), `next build` (all 21 routes prerender successfully), `npm audit` (0 vulnerabilities).

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

- `src/app` : routes (App Router), one folder per page
- `src/components` : UI organized by domain (home, about, projects, skills, etc.) plus a shared `ui/` primitives folder
- `src/data` : all site content (personal info, projects, skills, experience, certificates, services, social links, nav)
- `src/hooks` : reusable client hooks (scroll progress, mouse position, typing effect, theme, counters)
- `src/lib` : Framer Motion variants, SEO metadata builder, contact form validation
- `src/types` : shared TypeScript interfaces
- `src/utils` : small utilities (className merge, date formatting)

## Replacing Placeholder Content

Real content (name, bio, contact info, all 5 web projects, both mechanical engineering projects, and all 4 certificates) is already filled in from what you provided, and real screenshots/certificate images are already in place under `public/images/`.

Two things still need your input:

- **GitHub repo links** — `src/data/projects.ts` has placeholder GitHub URLs (`github.com/rafianaz/...`) for each web project since exact repo links weren't provided. Update `githubUrl` for each project once your repos are public.
- **Resume PDF** — `public/resume/Rafia-Naz-Resume.pdf` is currently a blank placeholder. Replace it with your real resume PDF whenever it's ready (the Resume page and Hero/About download buttons all point to this same file, so replacing it updates everything).

## Theme System

Dark mode is the default. Light mode is a real, independent color set — not just an inverted overlay — driven by CSS custom properties in `src/app/globals.css` (`:root` = dark values, `html.light` = light values). Text tokens (`text-foreground-muted`, `text-accent-text`, `text-primary-text`) automatically resolve to higher-contrast values in light mode, so switching themes never produces washed-out or unreadable text.

## Contact Form

`src/components/contact/ContactForm.tsx` currently simulates a network request. Wire it to a real backend (a Next.js Route Handler, Resend, Formspree, etc.) by replacing the `setTimeout` in `handleSubmit`.

## Deployment

Optimized for Vercel:

```bash
npm run build
```

Update the `siteUrl` constant in `src/app/layout.tsx`, `src/lib/metadata.ts`, `src/app/sitemap.ts`, and `src/app/robots.ts` to your real production domain before deploying.
