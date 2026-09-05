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
- **`components/pricing.tsx`** — `PRICE.monthly` is still unconfirmed. The app's
  own fallback says $8.99 while this says $9.99; one of them is wrong.
- **`app/layout.tsx`** — `SITE` is set to `https://befit.ai`; update if the
  production domain differs, since Open Graph URLs resolve against it.
