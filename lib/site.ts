/*
  One source of truth for who and where the site is.

  SITE_URL is the host actually serving the pages. Canonical tags, Open Graph
  URLs, the sitemap, robots.txt and the structured data all resolve against it,
  so a wrong value here quietly tells Google that the real pages are
  duplicates of a URL that does not exist. It previously pointed at
  befit-web-gamma.vercel.app, which now returns 404.

  When a custom domain is attached, change this one line. Vercel keeps serving
  the *.vercel.app host, so nothing else has to move.
*/
export const SITE_URL = "https://getbefitai.vercel.app";

export const SITE_NAME = "BeFit AI";

/** App Store numeric id, used by the iOS Smart App Banner. */
export const APP_STORE_ID = "6786780641";

/** Primary pitch, reused by the meta description and the structured data. */
export const SITE_DESCRIPTION =
  "AI workout planner & gym tracker for iPhone. Plans that adapt every session, two-tap lift logging, a muscle map and photo calorie scanning. Free download.";
