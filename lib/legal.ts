/*
  The facts both legal pages depend on, in one place.

  These are mirrored by Constant in the Flutter app (legalEntity,
  legalJurisdiction, legalLastUpdated, supportEmail). The two documents get
  compared by reviewers, so a value that differs between the app and the
  website is a finding waiting to happen — change them in both or in neither.
*/

/**
 * The entity a user is contracting with.
 *
 * Must stay identical to the Copyright field in App Store Connect, which names
 * the developer-account holder, and to COPYRIGHT_HOLDER in
 * components/footer.tsx.
 */
export const ENTITY = "BeFit AI";

/** Whose law governs the agreement and where disputes are heard. */
export const JURISDICTION = "England and Wales";

/**
 * The support inbox. Also used on /support, in the footer, and in the app.
 *
 * TEMPORARY — a personal address standing in until support@befit.ai is live.
 * It is published in the App Store listing and on every legal page, so swap it
 * the moment the real inbox receives mail. One edit here and one in the app's
 * Constant.supportEmail covers everything.
 */
export const CONTACT = "emmanuel.philipel@yahoo.com";

/** Shown as "Last updated" on both pages. Bump when the wording changes. */
export const LAST_UPDATED = "5 September 2026";

/** The auto-renewing products sold in the app. */
export const SUBSCRIPTIONS = [
  { name: "BeFit AI Pro — Monthly", length: "1 month" },
  { name: "BeFit AI Pro — Yearly", length: "1 year" },
] as const;

/** Length of the introductory free trial offered before the first purchase. */
export const TRIAL_LENGTH = "1 week";
