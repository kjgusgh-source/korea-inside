import Link from "next/link";
import Image from "next/image";
import HomeLogo from "./HomeLogo";

const HERO_CATEGORIES = [
  { label: "K-pop", href: "/kpop" },
  { label: "Food", href: "/food" },
  { label: "Travel", href: "/travel" },
  { label: "Drama", href: "/dramas" },
];

export default function HomeHero() {
  return (
    <section className="home-hero relative overflow-hidden rounded-[2rem] border border-[var(--hero-border)] bg-[var(--hero-bg)] px-5 pt-8 pb-10 md:px-10 md:pt-10 md:pb-14">
      <div className="relative h-[340px] md:h-[480px]">
        {/* Desktop floating photos */}
        <img
          src="https://img.youtube.com/vi/gHoKSBaLP7E/hqdefault.jpg"
          alt="RESCENE Woni fancam, a K-pop stage moment"
          className="absolute left-2 top-0 hidden h-[150px] w-[130px] -rotate-6 rounded-xl object-cover shadow-lg md:block lg:left-8"
        />
        <div className="absolute right-4 top-0 hidden h-[125px] w-[160px] rotate-6 overflow-hidden rounded-xl shadow-lg md:block lg:right-12">
          <Image
            src="/images/food/tteokbokki-pixabay-709k.jpg"
            alt="Tteokbokki, a Korean spicy rice cake dish"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
        <div className="absolute left-6 bottom-0 hidden h-[185px] w-[135px] rotate-3 overflow-hidden rounded-xl shadow-lg md:block lg:left-16">
          <Image
            src="/images/home/travel-seoul-alley.jpg"
            alt="A quiet Seoul alley lined with low-rise buildings, a local corner of the city"
            fill
            sizes="135px"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute right-0 top-[150px] hidden h-[110px] w-[185px] -rotate-2 overflow-hidden rounded-xl shadow-lg md:block lg:right-2">
          <Image
            src="/images/home/travel-mookho-skywalk.jpg"
            alt="Mukho Skywalk, a glass-floor walkway over Korea's East Sea coastline"
            fill
            sizes="185px"
            className="object-cover"
          />
        </div>
        <img
          src="https://img.youtube.com/vi/67fnZvwVamM/hqdefault.jpg"
          alt="Itaewon Class, a Korean drama highlight"
          className="absolute bottom-0 right-14 hidden h-[140px] w-[170px] -rotate-3 rounded-xl object-cover shadow-lg md:block lg:right-28"
        />

        {/* Mobile floating photos (4) */}
        <img
          src="https://img.youtube.com/vi/gHoKSBaLP7E/hqdefault.jpg"
          alt="RESCENE Woni fancam, a K-pop stage moment"
          className="absolute right-2 top-0 h-[92px] w-[76px] -rotate-6 rounded-lg object-cover shadow-md md:hidden"
        />
        <div className="absolute left-0 top-8 h-[70px] w-[88px] rotate-6 overflow-hidden rounded-lg shadow-md md:hidden">
          <Image
            src="/images/food/tteokbokki-pixabay-709k.jpg"
            alt="Tteokbokki, a Korean spicy rice cake dish"
            fill
            sizes="88px"
            className="object-cover"
          />
        </div>
        <div className="absolute left-4 bottom-0 h-[104px] w-[78px] rotate-3 overflow-hidden rounded-lg shadow-md md:hidden">
          <Image
            src="/images/home/travel-seoul-alley.jpg"
            alt="A quiet Seoul alley lined with low-rise buildings, a local corner of the city"
            fill
            sizes="78px"
            className="object-cover object-top"
          />
        </div>
        <img
          src="https://img.youtube.com/vi/67fnZvwVamM/hqdefault.jpg"
          alt="Itaewon Class, a Korean drama highlight"
          className="absolute bottom-2 right-4 h-[78px] w-[100px] -rotate-3 rounded-lg object-cover shadow-md md:hidden"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <HomeLogo />

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.15] text-[var(--hero-text)] md:text-6xl md:leading-[1.15]">
            Korea feels different when
            <br />
            <em className="italic text-[var(--hero-accent)]">someone local</em>{" "}
            shows you&nbsp;around.
          </h1>
        </div>
      </div>

      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-3 md:mt-6">
        {HERO_CATEGORIES.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="rounded-full border border-[var(--hero-border)] px-5 py-2 text-sm font-semibold text-[var(--hero-text)] transition hover:-translate-y-0.5 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
          >
            {category.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
