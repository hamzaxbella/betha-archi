# Betha Architecture

A CMS-driven architecture portfolio with project galleries, filtering, and motion.

[Open the demo](https://betha-archi.vercel.app) · [Browse the code](https://github.com/hamzaxbella/betha-archi)

## What to explore

- Project index, category filtering, and individual project pages.
- About and contact pages with reusable page templates.
- Sanity schemas for projects, categories, and about content.
- GSAP and Framer Motion animation, Lenis scrolling, and PhotoSwipe galleries.
- Language state for French, English, and Arabic, including RTL direction.

## Stack

Next.js · React · TypeScript · Tailwind CSS · Sanity · GSAP · Zustand

## Run locally

```bash
git clone https://github.com/hamzaxbella/betha-archi.git
cd betha-archi
npm ci
npm run dev
```

Open <http://localhost:3000> (or the address printed in the terminal).

```bash
npm run build
```

Use the build script to generate production output.

## Configure content and services

The current Sanity connection is defined in `lib/sanity.ts`; the studio lives in `betha-studio/`. For your own installation, point both the frontend and studio configuration at a Sanity project you control, add its schemas/content, and configure the allowed frontend origin. Do not assume access to the original dataset.

```bash
cd betha-studio
npm ci
npm run dev
```

The contact form uses EmailJS. Replace its service configuration with your own before enabling real submissions.

## Code map

`app/` contains routes. `components/Templates/` composes page layouts. `services/` contains CMS queries. `hooks/` manages shared UI state. `betha-studio/schemaTypes/` defines editorial content.

This is a portfolio implementation with external content dependencies. Architecture imagery and brand content retain their original ownership.
