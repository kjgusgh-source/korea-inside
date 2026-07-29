import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import SiteFooter from "../components/SiteFooter";
import { GoogleAnalytics } from "@next/third-parties/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haemilkorea.com"),
  title: {
    default: "HAEMIL — Korean culture, K-pop, food, travel, and local stories",
    template: "%s | HAEMIL",
  },
  description:
    "Beautiful Korean stories, told by a local friend. Discover K-pop idols, Korean fan culture, food, travel, language, and everyday moments from inside Korea.",
  keywords: [
    "Korean culture",
    "K-pop",
    "Korean idols",
    "Korean fan culture",
    "Korean food",
    "Korea travel",
    "Korean language",
    "HAEMIL",
  ],
  authors: [{ name: "HAEMIL" }],
  creator: "HAEMIL",
  publisher: "HAEMIL",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "HAEMIL",
    title: "HAEMIL — Korean culture, K-pop, food, travel, and local stories",
    description:
      "Beautiful Korean stories, told by a local friend. Discover K-pop idols, Korean fan culture, food, travel, language, and everyday moments from inside Korea.",
    locale: "en_US",
    images: ["/brand/haemil-logo-light.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAEMIL — Korean culture, K-pop, food, travel, and local stories",
    description:
      "Beautiful Korean stories, told by a local friend. Discover K-pop idols, Korean fan culture, food, travel, language, and everyday moments from inside Korea.",
    images: ["/brand/haemil-logo-light.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth">
      <body className={`${newsreader.variable} ${manrope.variable}`}>
  {children}
  <SiteFooter />

  <GoogleAnalytics gaId="G-S0KL42RWE7" />
      </body>
    </html>
  );
}