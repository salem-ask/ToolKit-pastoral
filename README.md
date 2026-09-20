# The Complete Pastor's Toolkit — Sales Funnel

Sales landing page (Next.js 14, App Router, static export, TypeScript,
Tailwind CSS) for the digital product **The Complete Pastor's Toolkit**.

English version of the original French funnel (`Outils-complet-du-pasteur`),
with its own checkout link and localized poster / social-proof images.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static export)

```bash
npm run build
```

The static site is generated in the `out/` folder, deployable as-is to
Vercel, Netlify, or Cloudflare Pages.

- **Vercel**: detects Next.js automatically (`next build`).
- **Netlify**: build command `npm run build`, publish directory `out`.
- **Cloudflare Pages**: build command `npm run build`, output directory `out`.

## Central configuration

All product logic (name, copy, categories, contact, checkout link) is
centralized in:

```
src/config/product.ts
```

### Chariow checkout link

```ts
export const CHARIOW_CHECKOUT_URL =
  'https://livresenligne.mychariow.shop/prd_igwhv4nc/checkout';
```

Every purchase button on the site uses this variable exclusively, via the
`src/components/CheckoutButton.tsx` component. To change the checkout URL,
only this one value needs to be updated.

## Images

- `public/images/product/` — main pack poster / mockup (see this folder's
  README).
- `public/images/social-proof/` — WhatsApp social-proof screenshots (see
  this folder's README, including the blurring guidelines).

Until an image is provided, a clearly labeled placeholder is shown instead
of a fabricated visual.

## Checkout click tracking

Every click on a purchase button fires a `checkout_click` event
(`src/lib/analytics.ts`), visible in the console or wireable to Google Tag
Manager / `dataLayer`. If a Meta Pixel (`fbq`) is loaded on the page, the
`InitiateCheckout` event is automatically forwarded to it — no extra setup
is needed to prepare a future Meta Pixel / Meta Conversion API integration.

## Structure

```
src/
  app/            layout.tsx (SEO, fonts, viewport), page.tsx (section order)
  components/     one section = one component (Hero, Problem, Solution, ...)
  config/         product.ts — central configuration
  lib/            analytics.ts, images.ts
public/
  images/product/       main poster
  images/social-proof/  WhatsApp screenshots
```
