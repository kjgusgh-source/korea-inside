"use client";

import { usePathname } from "next/navigation";

// URL prefix -> BCP 47 language tag for <html lang>.
// Paths without one of these prefixes keep the English default.
const LOCALE_PREFIXES = new Map<string, string>([
  ["ja", "ja"],
  ["zh-hant", "zh-Hant"],
  ["zh-hans", "zh-Hans"],
  ["es", "es"],
  ["ko", "ko"],
]);

export function langFromPathname(pathname: string | null): string {
  const firstSegment = (pathname ?? "/").split("/")[1]?.toLowerCase() ?? "";

  return LOCALE_PREFIXES.get(firstSegment) ?? "en";
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
