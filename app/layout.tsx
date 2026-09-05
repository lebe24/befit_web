import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Big_Shoulders_Display, Chivo, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

/* Condensed athletic display — carries the oversized headlines. */
const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

/* Grotesque with enough character to avoid the default-UI look. */
const body = Chivo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

/* Data labels, eyebrows, stat readouts. */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// The live host. Open Graph and canonical URLs resolve against it, so it has
// to be the domain actually being served — befit.ai is owned by someone else
// and parked for sale. Vercel keeps serving this subdomain after a custom
// domain is attached, so pointing a real domain here later breaks nothing.
const SITE = "https://befit-web-gamma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "BeFit AI — Your personal trainer, in your pocket",
    template: "%s · BeFit AI",
  },
  description:
    "AI-built training plans that adapt to how you actually train. Log a session in seconds, track every lift, and get coaching that changes as you do.",
  keywords: [
    "AI personal trainer",
    "workout app",
    "fitness tracking",
    "adaptive training plan",
    "strength training app",
  ],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "BeFit AI",
    title: "BeFit AI — Your personal trainer, in your pocket",
    description:
      "AI-built training plans that adapt to how you actually train. Coaching that changes as you do.",
    images: [{ url: "/opengraph-image.png", width: 1280, height: 832 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeFit AI — Your personal trainer, in your pocket",
    description:
      "AI-built training plans that adapt to how you actually train.",
    images: ["/twitter-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="grain bg-ink font-sans text-bone antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
