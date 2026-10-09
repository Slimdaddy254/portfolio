import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Instrument_Serif, Pacifico } from "next/font/google";
import ThemeScript from "@/components/theme-script";
import { links, profile } from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

// Only the hero quote uses this. wght is included by default; SOFT and opsz are
// requested explicitly and cost file size, so they're limited to the two values
// the quote actually uses rather than exposing the full axis range.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const DESCRIPTION =
  "Full-stack engineer building developer tools and SaaS products. TypeScript, Node, React, Next.js, PostgreSQL. Developer experience and shipping software that holds up in production.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description: DESCRIPTION,
    locale: "en_GB",
  },
  // Twitter/X reads its own tags; without these a share falls back to whatever
  // openGraph provides, which loses the large card.
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: DESCRIPTION,
  },
};

/**
 * Person structured data, so search engines can connect your name to a job
 * title and location rather than inferring it from page text.
 *
 * Rendered here rather than in a route so it ships with every page. The `<`
 * escaping is the XSS guard Next's docs call for on a raw JSON.stringify.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: DESCRIPTION,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    profile.linkedin,
    links.github,
    links.twitter,
    links.medium,
    links.youtube,
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline theme script rewrites data-theme on
    // <html> during parsing, before React hydrates. React should accept the DOM.
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${hanken.variable} ${instrument.variable} ${pacifico.variable} ${fraunces.variable}`}
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}