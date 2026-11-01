import Image from "next/image";

/**
 * A photo in a first-person article (for example a travel story).
 *
 * The props are plain literals on purpose: the i18n extractor reads them
 * statically, so `alt` becomes a translatable unit and the translated page
 * (lib/i18n/TranslatedPage.tsx) can render the same photo with a translated
 * alt. Keep src, width and height as literals in the page.
 *
 * layout:
 * - "single": one centered photo (default)
 * - "pair": one of two photos inside a two-column grid the page provides
 * - "cover": the wide photo under the article title (loaded with priority)
 */
export type ArticlePhotoLayout = "single" | "pair" | "cover";

export type ArticlePhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: ArticlePhotoLayout;
};

const frame = "overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)]";

export default function ArticlePhoto({ src, alt, width, height, layout = "single" }: ArticlePhotoProps) {
  if (layout === "cover") {
    return (
      <figure className={`mt-8 ${frame}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          sizes="(max-width: 768px) calc(100vw - 88px), 1000px"
          className="h-auto w-full"
        />
      </figure>
    );
  }

  const pair = layout === "pair";
  return (
    <figure className={pair ? "mx-auto w-full max-w-md" : "mx-auto w-full max-w-md py-2"}>
      <div className={frame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={
            pair
              ? "(max-width: 640px) calc(100vw - 88px), (max-width: 768px) 45vw, 420px"
              : "(max-width: 768px) calc(100vw - 88px), 448px"
          }
          className="h-auto w-full"
        />
      </div>
    </figure>
  );
}
