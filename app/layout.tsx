import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteFooter from "../components/SiteFooter";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
  },
  twitter: {
    card: "summary",
    title: "HAEMIL — Korean culture, K-pop, food, travel, and local stories",
    description:
      "Beautiful Korean stories, told by a local friend. Discover K-pop idols, Korean fan culture, food, travel, language, and everyday moments from inside Korea.",
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
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} ${playfair.variable}`}>
  {children}
  <SiteFooter />

  <GoogleAnalytics gaId="G-S0KL42RWE7" />
      </body>
    </html>
  );
}