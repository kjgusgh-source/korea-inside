import Link from "next/link";
import Image from "next/image";
import HomeLogo from "./HomeLogo";
import BlurText from "./BlurText";
import BorderGlow from "./BorderGlow";

const HERO_PHOTO_GLOW = {
  edgeSensitivity: 35,
  glowColor: "12 65 68",
  backgroundColor: "transparent",
  borderRadius: 12,
  glowRadius: 16,
  glowIntensity: 0.38,
  coneSpread: 28,
  fillOpacity: 0.04,
  animated: false,
  colors: ["#d96a55", "#ead8c6", "#8ca7a3"],
};

const HERO_CATEGORIES = [
  { label: "K-pop", href: "/kpop" },
  { label: "Food", href: "/food" },
  { label: "Travel", href: "/travel" },
  { label: "Drama", href: "/dramas" },
];

const HERO_HEADLINE_BLUR_FROM = { filter: "blur(6px)", opacity: 0, y: 14 };
const HERO_HEADLINE_BLUR_TO = [
  { filter: "blur(2px)", opacity: 0.65, y: 4 },
  { filter: "blur(0px)", opacity: 1, y: 0 },
];

export default function HomeHero() {
  return (
    <section className="home-hero relative overflow-hidden rounded-[2rem] border border-[var(--hero-border)] bg-[var(--hero-bg)] px-5 pt-8 pb-10 md:px-10 md:pt-10 md:pb-14">
      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-enter-logo,
        .hero-enter-photos,
        .hero-enter-buttons {
          animation: hero-fade-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-enter-logo { animation-delay: 0ms; }
        .hero-enter-photos { animation-delay: 200ms; }
        .hero-enter-buttons { animation-delay: 300ms; }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter-logo,
          .hero-enter-photos,
          .hero-enter-buttons {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 z-0 bg-[url('/images/home/travel-seoul-namsan-tower.jpg')] bg-cover bg-[position:center_35%] md:hidden" />
      <div className="absolute inset-0 z-0 bg-[var(--hero-overlay)] md:hidden" />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 hidden bg-[url('/images/home/home-hero-hanok-mist.png')] bg-cover bg-bottom md:block"
        style={{
          opacity: "var(--hero-desktop-bg-opacity)",
          filter: "var(--hero-desktop-bg-filter)",
        }}
      />

      <div className="relative z-10 h-[320px] md:h-[480px]">
        {/* Desktop floating photos */}
        <div className="hero-enter-photos absolute left-[118px] -top-[5px] hidden h-[150px] w-[130px] -rotate-6 shadow-lg md:block">
          <Link
            href="/kpop"
            aria-label="Explore K-pop"
            className="hero-photo-link block h-full w-full cursor-pointer"
          >
            <BorderGlow {...HERO_PHOTO_GLOW} className="h-full w-full">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/gHoKSBaLP7E/hqdefault.jpg"
                  alt="RESCENE Woni fancam, a K-pop stage moment"
                  className="h-full w-full object-cover"
                />
              </div>
            </BorderGlow>
          </Link>
        </div>
        <div className="hero-enter-photos absolute right-[176px] top-[5px] hidden h-[125px] w-[160px] rotate-6 shadow-lg md:block">
          <Link
            href="/food"
            aria-label="Explore Korean food"
            className="hero-photo-link block h-full w-full cursor-pointer"
          >
            <BorderGlow {...HERO_PHOTO_GLOW} className="h-full w-full">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/food/tteokbokki-pixabay-709k.jpg"
                  alt="Tteokbokki, a Korean spicy rice cake dish"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </BorderGlow>
          </Link>
        </div>
        <div className="hero-enter-photos absolute left-6 bottom-0 hidden h-[185px] w-[135px] rotate-3 shadow-lg md:block lg:left-16">
          <Link
            href="/travel"
            aria-label="Explore Korea travel"
            className="hero-photo-link block h-full w-full cursor-pointer"
          >
            <BorderGlow {...HERO_PHOTO_GLOW} className="h-full w-full">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/home/travel-seoul-alley.jpg"
                  alt="A quiet Seoul alley lined with low-rise buildings, a local corner of the city"
                  fill
                  sizes="135px"
                  className="object-cover object-top"
                />
              </div>
            </BorderGlow>
          </Link>
        </div>
        <div className="hero-enter-photos absolute right-[32px] top-[177px] hidden h-[110px] w-[185px] -rotate-2 shadow-lg md:block">
          <Link
            href="/travel"
            aria-label="Explore Korea travel destinations"
            className="hero-photo-link block h-full w-full cursor-pointer"
          >
            <BorderGlow {...HERO_PHOTO_GLOW} className="h-full w-full">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/home/travel-mookho-skywalk.jpg"
                  alt="Mukho Skywalk, a glass-floor walkway over Korea's East Sea coastline"
                  fill
                  sizes="185px"
                  className="object-cover"
                />
              </div>
            </BorderGlow>
          </Link>
        </div>
        <div className="hero-enter-photos absolute bottom-[-8px] right-10 hidden h-[140px] w-[170px] -rotate-3 shadow-lg md:block lg:right-24">
          <Link
            href="/dramas"
            aria-label="Explore Korean dramas"
            className="hero-photo-link block h-full w-full cursor-pointer"
          >
            <BorderGlow {...HERO_PHOTO_GLOW} className="h-full w-full">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/67fnZvwVamM/hqdefault.jpg"
                  alt="Itaewon Class, a Korean drama highlight"
                  className="h-full w-full object-cover"
                />
              </div>
            </BorderGlow>
          </Link>
        </div>

        {/* Mobile floating photos (4) */}
        <img
          src="https://img.youtube.com/vi/gHoKSBaLP7E/hqdefault.jpg"
          alt="RESCENE Woni fancam, a K-pop stage moment"
          className="hero-enter-photos absolute right-2 top-0 h-[92px] w-[76px] -rotate-6 rounded-lg object-cover shadow-md md:hidden"
        />
        <div className="hero-enter-photos absolute left-0 top-8 h-[70px] w-[88px] rotate-6 overflow-hidden rounded-lg shadow-md md:hidden">
          <Image
            src="/images/food/tteokbokki-pixabay-709k.jpg"
            alt="Tteokbokki, a Korean spicy rice cake dish"
            fill
            sizes="88px"
            className="object-cover"
          />
        </div>
        <div className="hero-enter-photos absolute left-0 top-[220px] h-[92px] w-[68px] rotate-3 overflow-hidden rounded-lg shadow-md md:hidden">
          <Image
            src="/images/home/travel-seoul-alley.jpg"
            alt="A quiet Seoul alley lined with low-rise buildings, a local corner of the city"
            fill
            sizes="68px"
            className="object-cover object-top"
          />
        </div>
        <img
          src="https://img.youtube.com/vi/67fnZvwVamM/hqdefault.jpg"
          alt="Itaewon Class, a Korean drama highlight"
          className="hero-enter-photos absolute right-0 top-[233px] h-[68px] w-[88px] -rotate-3 rounded-lg object-cover shadow-md md:hidden"
        />

        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="hero-enter-logo">
            <HomeLogo />
          </div>

          <h1
            aria-label="Korea feels different when someone local shows you around."
            className="mt-2.5 max-w-[240px] text-[28px] font-semibold leading-[1.08] text-[var(--hero-text)] md:mt-5 md:max-w-3xl md:text-[54px] md:font-medium md:leading-[1.12] md:tracking-[-0.025em]"
          >
            <span aria-hidden="true">
              <BlurText
                text="Korea feels different when"
                animateBy="words"
                direction="bottom"
                delay={95}
                stepDuration={0.38}
                threshold={0}
                rootMargin="0px"
                animationFrom={HERO_HEADLINE_BLUR_FROM}
                animationTo={HERO_HEADLINE_BLUR_TO}
              />
              <br className="hidden md:block" />
              <BlurText
                text="someone local"
                animateBy="words"
                direction="bottom"
                delay={95}
                startIndex={4}
                stepDuration={0.38}
                threshold={0}
                rootMargin="0px"
                animationFrom={HERO_HEADLINE_BLUR_FROM}
                animationTo={HERO_HEADLINE_BLUR_TO}
                className="italic text-[var(--hero-accent)]"
              />{" "}
              <BlurText
                text="shows"
                animateBy="words"
                direction="bottom"
                delay={95}
                startIndex={6}
                stepDuration={0.38}
                threshold={0}
                rootMargin="0px"
                animationFrom={HERO_HEADLINE_BLUR_FROM}
                animationTo={HERO_HEADLINE_BLUR_TO}
              />
              <br className="hidden md:block" />
              <BlurText
                text={"you around."}
                animateBy="words"
                direction="bottom"
                delay={95}
                startIndex={7}
                stepDuration={0.38}
                threshold={0}
                rootMargin="0px"
                animationFrom={HERO_HEADLINE_BLUR_FROM}
                animationTo={HERO_HEADLINE_BLUR_TO}
              />
            </span>
          </h1>
        </div>
      </div>

      <div className="hero-enter-buttons relative z-10 mt-4 flex flex-wrap items-center justify-center gap-3 md:mt-6">
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
