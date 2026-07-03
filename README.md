# MATTTER® — Website

One-page agency site assembled from the exported Framer components (`src/framer/`) with a Vite + React + TypeScript shell.

## Develop

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

## Structure

- `src/App.tsx` — page composition: fixed navbar (scroll-aware collapse + hover expand), all sections in order (Hero, About, Portfolio, Services, Pricing, Testimonials, Awards, Stats, Team, FAQ, Blogs, CTA), fixed full-viewport footer revealed behind a transparent spacer, Lenis smooth scroll.
- `src/framer/` — exported Framer components (self-contained runtime, merged design tokens, CMS data stubs populated for Projects/Blog collections, small compatibility patches for the standalone runtime).
- `src/components/Testimonials.tsx` — the one section without an exported component, rebuilt to match the reference design.
- `src/Harness.tsx` — dev-only single-component viewer (`/?c=ComponentName&v=Variant`).
