import { FAQ_ITEMS } from "@/lib/faq-data";
import { APP_STORE_URL } from "@/lib/links";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

/*
  schema.org markup, so search engines can read the page as a product rather
  than guess at it: who publishes it, that it is an iOS app, that it is free to
  download, and what people ask about it.

  Deliberately absent: aggregateRating and review. Those must reflect real
  ratings, and marking up numbers that are not on the App Store listing is a
  structured-data spam violation that can cost the page its rich results. Add
  them once the listing has genuine ratings.
*/
const ORG_ID = `${SITE_URL}/#organization`;

const graph = [
  {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/image/befit_logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${SITE_URL}/support`,
    },
  },
  {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  },
  {
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#app`,
    name: SITE_NAME,
    alternateName: "BeFit AI Personal Trainer",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/image/phone.png`,
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    applicationSubCategory: "Fitness",
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    publisher: { "@id": ORG_ID },
    // Free to download; paid features are in-app subscriptions.
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "AI-generated workout plans that adapt to every session",
      "Two-tap workout and lift logging",
      "Muscle map showing which muscles you have trained",
      "Training volume analytics and streaks",
      "AI coach chat",
      "Photo calorie and macro scanning",
      "Body composition scan",
    ],
  },
  {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function StructuredData() {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so a stray "</script>" in the copy cannot end the tag.
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
