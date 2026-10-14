import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LAST_UPDATED } from "@/lib/legal";

/*
  Every public page, with the home page weighted highest. Legal pages are
  listed because the App Store links to them and people search for them
  ("befit ai privacy policy"), but they are not where traffic should land.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const legalUpdated = new Date(LAST_UPDATED);
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
