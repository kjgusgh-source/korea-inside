"use client";

import { usePathname } from "next/navigation";
import { htmlLangFromPathname } from "../lib/i18n/locales";

// URL prefix -> BCP 47 language tag for <html lang>, from the shared locale
// settings. Paths without a locale prefix keep the English default.
export function langFromPathname(pathname: string | null): string {
  return htmlLangFromPathname(pathname);
}

export default function HtmlRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html
      lang={langFromPathname(pathname)}
      data-theme="light"
      data-scroll-behavior="smooth"
    >
      {children}
    </html>
  );
}
