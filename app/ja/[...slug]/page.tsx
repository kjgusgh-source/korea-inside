import type { Metadata } from "next";
import { LocaleTranslationPage, localeMetadata, localeStaticParams } from "../../../lib/i18n/LocalePage";

// Japanese translated pages: /ja/<English path>. Pages exist only for
// translations the catalog allows in this environment (see
// lib/i18n/LocalePage.tsx and docs/i18n/catalog-contract.md). Everything else,
// including every draft on Vercel Production, is a 404.
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return localeStaticParams("ja");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return localeMetadata("ja", slug);
}

export default async function JapaneseTranslatedPage({ params }: Props) {
  const { slug } = await params;
  return <LocaleTranslationPage locale="ja" slug={slug} />;
}
