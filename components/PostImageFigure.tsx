import Image from "next/image";
import type { PostImage } from "../lib/posts";

type PostImageFigureProps = {
  image: PostImage;
  variant?: "hero" | "gallery";
  priority?: boolean;
};

function ImageCaption({ image }: { image: PostImage }) {
  return (
    <figcaption className="mt-3 text-xs leading-5 text-[var(--muted)]">
      {image.sourceUrl ? (
        <a
          href={image.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[var(--accent)]"
        >
          {image.credit}
        </a>
      ) : (
        <span>{image.credit}</span>
      )}
      <span> · {image.license}</span>
    </figcaption>
  );
}

export default function PostImageFigure({
  image,
  variant = "gallery",
  priority = false,
}: PostImageFigureProps) {
  if (variant === "hero") {
    return (
      <figure className="mt-8 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-3 shadow-lg shadow-[var(--shadow)] md:p-4">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>
        <div className="px-2 pb-1 pt-3 md:px-3">
          <ImageCaption image={image} />
        </div>
      </figure>
    );
  }

  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      </div>
      <div className="px-1 pb-1 pt-3">
        <ImageCaption image={image} />
      </div>
    </figure>
  );
}

type PostFoodGalleryProps = {
  images: PostImage[];
};

export function PostFoodGallery({ images }: PostFoodGalleryProps) {
  const groups = images.reduce<{ title: string; images: PostImage[] }[]>(
    (acc, image) => {
      const title = image.group ?? "Photos";
      const existingGroup = acc.find((group) => group.title === title);

      if (existingGroup) {
        existingGroup.images.push(image);
        return acc;
      }

      acc.push({ title, images: [image] });
      return acc;
    },
    []
  );

  return (
    <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)] md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
        Food photos
      </p>

      <div className="mt-8 space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold text-[var(--text)]">
              {group.title}
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {group.images.map((image) => (
                <PostImageFigure
                  key={image.src}
                  image={image}
                  variant="gallery"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
