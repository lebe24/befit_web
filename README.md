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

- **`components/download.tsx`** — the App Store URL is a placeholder. The real
  one uses the app's Apple ID, `6786780641`.
- **`components/pricing.tsx`** — `PRICE` now matches the App Store products
  ($8.99/month, $79.99/year). Change it here and in `billing_page.dart`'s
  offline fallback together, or the two disagree again.
- **`app/layout.tsx`** — `SITE` is set to `https://befit.ai`; update if the
  production domain differs, since Open Graph URLs resolve against it.
