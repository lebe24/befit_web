import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Big_Shoulders_Display, Chivo, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/structured-data";
import {
  APP_STORE_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

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

const TITLE = "BeFit AI: AI Personal Trainer & Workout Tracker for iPhone";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · BeFit AI",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "health & fitness",
  // Google ignores the keywords tag; it is kept for the engines and tools
  // that still read it. The words that matter are on the page itself.
  keywords: [
    "AI personal trainer",
    "AI workout planner",
    "workout tracker app",
    "gym log app",
    "workout plan generator",
    "muscle map",
    "calorie scanner",
    "strength training app",
    "fitness app for iPhone",
    "BeFit AI",
  ],
  alternates: { canonical: "/" },
  // iOS Safari shows a native "Open in App Store" banner for this app.
  itunes: { appId: APP_STORE_ID },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
