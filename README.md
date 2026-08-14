# BeFit AI — Web

Marketing site for the BeFit AI iPhone app. Next.js 14 (App Router), Tailwind,
statically prerendered.

## Develop

```bash
npm install
npm run dev
```

No environment variables are required — the site has no backend, no API routes
and no database. It is entirely static.

## Structure

| Path | |
|---|---|
| `app/page.tsx` | Single marketing page, composed from `components/` |
| `app/(legal)/` | `/terms` and `/privacy` |
| `app/globals.css` | Design tokens, grain, marquee and entrance animations |
| `components/` | One file per section |

## Before launch

- **`components/pricing.tsx`** — the `PRICE` constant is a placeholder. It must
  match the products in App Store Connect that back the RevenueCat offering,
  or the page advertises a price the purchase sheet does not charge.
- **`app/(legal)/terms`, `app/(legal)/privacy`** — these deliberately contain no
  legal copy. Apple requires working links to both for a subscription app, and
  the text has to describe what the app actually collects.
- **`components/download.tsx`** — the App Store URL is a placeholder.
- **`app/layout.tsx`** — `SITE` is set to `https://befit.ai`; update if the
  production domain differs, since Open Graph URLs resolve against it.
