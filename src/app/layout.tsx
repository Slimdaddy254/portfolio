import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import ThemeScript from "@/components/theme-script";
import { profile } from "@/lib/data";
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

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Full-stack engineer building developer tools and SaaS products. TypeScript, Node, React, Next.js, PostgreSQL. Developer experience and shipping software that holds up in production.",
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Full-stack engineer building developer tools and SaaS products. TypeScript, Node, React, Next.js, PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline theme script rewrites data-theme on
    // <html> during parsing, before React hydrates. React should accept the DOM.
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${hanken.variable} ${instrument.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}