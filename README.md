# Portfolio

Personal site for Aditya Rungta — a single-page portfolio with an animated
hero, scroll-spy navigation, cursor spotlight, and motion-on-scroll sections.

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for dev server and bundling
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Framer Motion](https://motion.dev) for animations
- [lucide-react](https://lucide.dev) icons, self-hosted fonts via Fontsource

## Development

```sh
npm install
npm run dev        # dev server with HMR
npm run typecheck  # TypeScript checks
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

All page content (experience, projects, certifications) lives in
[`src/data.ts`](src/data.ts) — edit that file to update the site.

## Deployment

Every push to `main` builds and deploys the site to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup: **Settings → Pages → Source → GitHub Actions**.

The Vite `base` is set to `/AdityaRungta_PortfolioTest/` in
[`vite.config.ts`](vite.config.ts); change it if the repo is renamed or moved
to a custom domain.
