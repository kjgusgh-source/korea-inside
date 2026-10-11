import type { Metadata } from "next";
import { notFound } from "next/navigation";
import source from "../../../../content/translations/source/kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json";
import translation from "../../../../content/translations/ja/kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json";
import TranslatedPage, {
  PreviewNotice,
  prepareTranslation,
  type SourceDocument,
  type TranslationDocument,
} from "../../../../lib/i18n/TranslatedPage";

// Japanese preview of /kpop/what-does-sunbae-and-hoobae-mean-in-kpop.
// The translation is a draft: it is never served on Vercel Production, is
// noindex/nofollow, and is not listed in the sitemap or in hreflang links.
const englishPath = "/kpop/what-does-sunbae-and-hoobae-mean-in-kpop";

function loadPreview() {
  if (process.env.VERCEL_ENV === "production") notFound();
  return prepareTranslation(
    source as unknown as SourceDocument,
    translation as unknown as TranslationDocument,
    { locale: "ja", allowedStatuses: ["draft"] },
  );
}

export function generateMetadata(): Metadata {
  const { title, description } = loadPreview();
  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "HAEMIL",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function SunbaeHoobaeJapanesePreviewPage() {
  const prepared = loadPreview();
  return (
    <TranslatedPage
      prepared={prepared}
      afterComponent={{ SiteHeader: <PreviewNotice englishPath={englishPath} /> }}
    />
  );
}
