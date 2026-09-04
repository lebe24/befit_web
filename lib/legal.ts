/*
  The facts both legal pages depend on, in one place.

  Two of these are placeholders that only the account holder can fill in, and
  they are the difference between a document that binds and one that reads like
  a template. Search for PLACEHOLDER before publishing.
*/

/**
 * The entity a user is contracting with.
 *
 * PLACEHOLDER — must be the registered company or the individual named on the
 * Apple Developer account, and must match the Copyright field in App Store
 * Connect and the string in components/footer.tsx.
 */
export const ENTITY = "BeFit AI";

/**
 * Whose law governs the agreement and where disputes are heard.
 *
 * PLACEHOLDER — normally where the entity above is registered.
 */
export const JURISDICTION = "England and Wales";

/** The support inbox. Also used on /support and in the app. */
export const CONTACT = "support@befit.ai";

/** Shown as "Last updated" on both pages. Bump when the wording changes. */
export const LAST_UPDATED = "4 September 2026";

/** The auto-renewing products sold in the app. */
export const SUBSCRIPTIONS = [
  { name: "BeFit AI Pro — Monthly", length: "1 month" },
  { name: "BeFit AI Pro — Yearly", length: "1 year" },
] as const;

/** Length of the introductory free trial offered before the first purchase. */
export const TRIAL_LENGTH = "1 week";
