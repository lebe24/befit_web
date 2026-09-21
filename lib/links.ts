/**
 * Where "Download on iPhone" goes.
 *
 * Deliberately without the `/us/` storefront segment the App Store shows in
 * its own URL bar: the app is available in 175 regions, and Apple redirects a
 * bare app link to whichever storefront the visitor belongs to. A `/us/` link
 * sends everyone else to a page they cannot buy from.
 */
export const APP_STORE_URL = "https://apps.apple.com/app/id6786780641";
