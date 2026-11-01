import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import JsonLd from "../../../components/JsonLd";
import ArticlePhoto from "../../../components/ArticlePhoto";

const siteUrl = "https://haemilkorea.com";
const path = "/travel/3-days-in-gangneung";
const pageUrl = `${siteUrl}${path}`;
const pageTitle = "3 Days in Gangneung, Korea: A Local's Honest Food & Beach Trip";
const pageDescription =
  "A local's honest 3-day Gangneung trip: KTX from Seoul, jjamppong sundubu, black sesame coffee, long queues, and slow walks on Gangmun Beach.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: path },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "HAEMIL",
    type: "article",
    images: [
      {
        url: "/images/travel/3-days-in-gangneung/og-gangmun-beach.jpg",
        width: 1200,
        height: 630,
        alt: "Gangmun Beach in Gangneung under a cloudy sky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/travel/3-days-in-gangneung/og-gangmun-beach.jpg"],
  },
};

const shortId = "B6ZFfvpyJFA";

const h2Class = "text-2xl font-semibold leading-tight md:text-3xl";
const h3Class = "pt-2 text-xl font-semibold leading-snug md:text-2xl";

export default function ThreeDaysInGangneungPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      author: { "@type": "Organization", name: "HAEMIL", url: siteUrl },
      publisher: { "@type": "Organization", name: "HAEMIL", url: siteUrl },
      inLanguage: "en",
      about: [
        { "@type": "Thing", name: "Gangneung" },
        { "@type": "Thing", name: "Korea travel" },
        { "@type": "Thing", name: "Korean food" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Travel", item: `${siteUrl}/travel` },
        { "@type": "ListItem", position: 3, name: "3 Days in Gangneung", item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 py-6 md:gap-10 md:px-8 md:py-8">
          <SiteHeader />
          <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]">
            <header className="border-b border-[var(--border)] px-6 py-9 md:px-12 md:py-14">
              <Link href="/travel" className="text-sm font-medium text-[var(--accent)] hover:underline">
                ← Back to Travel
              </Link>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                Travel guide
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
                3 Days in Gangneung, Korea: A Local&apos;s Honest Food &amp; Beach Trip
              </h1>
              <p className="mt-6 max-w-3xl text-base italic leading-8 text-[var(--muted)] md:text-lg">
                Three days of local food, long restaurant queues, black sesame coffee, and quiet
                moments by the sea.
              </p>
              <ArticlePhoto
                src="/images/travel/3-days-in-gangneung/gangmun-beach-cover.webp"
                alt="Gangmun Beach in Gangneung under a cloudy sky, with waves rolling onto the sand, a small rock offshore, and a seagull overhead."
                width={1050}
                height={700}
                layout="cover"
              />
            </header>

            <div className="mx-auto max-w-3xl space-y-11 px-6 py-9 text-base leading-8 md:mx-0 md:max-w-[62rem] md:px-12 md:py-12 md:text-lg md:leading-9">
              <section aria-label="Introduction" className="space-y-5">
                <p>
                  Gangneung is one of those places in Korea where you can enjoy the sea, try local
                  food, and spend an entire afternoon exploring cafés.
                </p>
                <p>
                  I visited Gangneung for three days and two nights, from September 11 to 13, 2026. It
                  was already September, but the weather still felt a little like summer.
                </p>
                <p>
                  This wasn&apos;t a perfectly planned trip. Some places had much longer waits than I
                  expected, a few foods were so popular that I couldn&apos;t even try them, and some of
                  my favorite moments happened while simply walking around.
                </p>
                <p>
                  Here&apos;s what my trip was actually like, along with a few tips I&apos;d share with
                  a friend visiting Gangneung for the first time.
                </p>
              </section>

              <section id="ktx" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Getting from Seoul to Gangneung by KTX</h2>
                <p>
                  I traveled from Seoul Station to Gangneung Station by KTX, and took the train back to
                  Seoul at the end of the trip.
                </p>
                <ArticlePhoto
                  src="/images/travel/3-days-in-gangneung/gangneung-station.webp"
                  alt="The front of Gangneung Station, with the station name in Korean and English on the building."
                  width={900}
                  height={1200}
                />
                <p>
                  If you&apos;re visiting Gangneung over a weekend,{" "}
                  <strong>I strongly recommend booking your train tickets in advance.</strong>
                </p>
                <p>
                  Popular departures can sell out, especially when many people are heading to Gangneung
                  for a weekend trip.
                </p>
                <p>
                  Standing tickets may be available on certain trains, but they&apos;re limited too. I
                  wouldn&apos;t rely on getting one at the last minute.
                </p>
                <p>You can check train schedules and reservations through KORAIL before your trip.</p>
                <figure className="flex flex-col items-center pt-2">
                  <div className="aspect-[9/16] w-full max-w-[18rem] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-black md:max-w-xs">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${shortId}`}
                      title="3 days in Gangneung — HAEMIL Short"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <a
                    href={`https://youtube.com/shorts/${shortId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-semibold text-[var(--accent)] transition hover:opacity-80"
                  >
                    Watch on YouTube →
                  </a>
                </figure>
              </section>

              <section id="day-1" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Day 1 — Tangsuyuk, Gangneung Central Market, and a Night In</h2>

                <h3 className={h3Class}>A takeaway dinner from Yukyoung Tangsuyuk</h3>
                <p>
                  One of the first things I did after arriving in Gangneung was pick up food from
                  Yukyoung Tangsuyuk (<span lang="ko">육영탕수육</span>).
                </p>
                <ArticlePhoto
                  src="/images/travel/3-days-in-gangneung/yukyoung-tangsuyuk-storefront.webp"
                  alt="The storefront of Yukyoung Tangsuyuk in Gangneung, covered in red Korean signs for tangsuyuk."
                  width={900}
                  height={1200}
                />
                <p>
                  I&apos;m a big fan of tangsuyuk, Korean-style sweet-and-sour fried pork, so this was
                  one of the places I wanted to try.
                </p>
                <p>I ordered a half-and-half combination of two interesting versions:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Gamkeutang (<span lang="ko">감크탕</span>):</strong>{" "}Potato cream tangsuyuk,
                    with a rich, creamy sauce.
                  </li>
                  <li>
                    <strong>Gimpitang (<span lang="ko">김피탕</span>):</strong>{" "}Kimchi pizza tangsuyuk,
                    combining kimchi, cheese, and fried pork.
                  </li>
                </ul>
                <p>Both were delicious, and the portion was generous.</p>
                <p>
                  Even though they were both tangsuyuk, the textures and aromas were noticeably
                  different. That contrast was part of what made the meal so enjoyable.
                </p>
                <p>After picking up the food, I checked into my accommodation.</p>
                <p>
                  And if I visit Gangneung again? I&apos;d happily order from Yukyoung Tangsuyuk another
                  time.
                </p>

                <h3 className={h3Class}>An evening at Gangneung Central Market</h3>
                <p>
                  Later, I visited Gangneung Central Market (<span lang="ko">강릉중앙시장</span>, also
                  written as Gangneung Jungang Market) to pick up more food.
                </p>
                <ArticlePhoto
                  src="/images/travel/3-days-in-gangneung/gangneung-jungang-market-gate-5.webp"
                  alt="Gate 5 of Gangneung Jungang Market, with shop signs inside the covered market."
                  width={900}
                  height={1200}
                />
                <p>
                  The market had plenty of tempting options, including food stalls in its night-market
                  area.
                </p>
                <p>
                  I bought pad Thai and a small portion of sliced raw fish, known in Korean as{" "}
                  <em>hoe</em>{" "}(<span lang="ko">회</span>).
                </p>
                <div className="grid gap-4 py-2 sm:grid-cols-2">
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/night-market-pad-thai.webp"
                    alt="Takeaway pad Thai with shrimp, bean sprouts, and chopped peanuts in a foil-lined container."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/market-single-portion-hoe.webp"
                    alt="A single-serving tray of sliced raw fish from the market, with dipping sauces and small side dishes."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                </div>
                <p>One thing I liked was that some vendors offered individual portions of raw fish.</p>
                <p>
                  From what I remember, my portion cost around ₩15,000, although prices and
                  availability can change.
                </p>
                <p>
                  This can be a nice option if you&apos;re traveling alone or want to try several
                  different foods without buying a large seafood platter.
                </p>
                <p>I took the food back to my accommodation and enjoyed dinner there.</p>

                <h3 className={h3Class}>The potato snack I couldn&apos;t try</h3>
                <p>
                  I also came across Gilgamja (<span lang="ko">길감자</span>), a potato snack shop that
                  seemed especially popular with Korean visitors.
                </p>
                <p>The line was incredibly long.</p>
                <p>I ended up taking a photo of the shop sign rather than joining the queue.</p>
                <ArticlePhoto
                  src="/images/travel/3-days-in-gangneung/gilgamja-sign.webp"
                  alt="The Gangneung Gilgamja shop sign, shaped like a spiral potato on a stick."
                  width={1050}
                  height={1030}
                />
                <p>
                  Sometimes that&apos;s part of traveling too. You can&apos;t try everything, especially
                  when the most popular places attract such big crowds.
                </p>
              </section>

              <section id="day-2" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Day 2 — Jjamppong Sundubu, Hojicha, and Gangmun Beach</h2>

                <h3 className={h3Class}>Donghwa Garden: Was the two-hour wait worth it?</h3>
                <p>
                  One of Gangneung&apos;s well-known local dishes is jjamppong sundubu (
                  <span lang="ko">짬뽕순두부</span>).
                </p>
                <p>
                  It combines a spicy, seafood-flavored jjamppong-style broth with soft tofu. Unlike a
                  typical bowl of jjamppong noodles, the focus here is the tofu.
                </p>
                <p>
                  I first heard about Donghwa Garden (<span lang="ko">동화가든</span>) from a taxi driver
                  in Gangneung.
                </p>
                <p>
                  He told me it was famous as an original jjamppong sundubu restaurant and mentioned a
                  patent connected to the dish.
                </p>
                <p>
                  In Korea, taxi drivers sometimes know long-established local restaurants and can give
                  you interesting recommendations. It can be worth asking where they like to eat,
                  although everyone&apos;s tastes are different.
                </p>
                <p>
                  When I arrived at Donghwa Garden, the number of people waiting was unbelievable.
                </p>
                <div className="grid gap-4 py-2 sm:grid-cols-2">
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/donghwa-garden-storefront.webp"
                    alt="The Donghwa Garden restaurant building in Gangneung, with its Korean sign."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/donghwa-garden-jjamppong-sundubu.webp"
                    alt="A bowl of jjamppong sundubu, soft tofu in a spicy red broth topped with chives and sesame, with two side dishes."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                </div>
                <p>
                  <strong>I waited around two hours.</strong>
                </p>
                <p>
                  The restaurant was clearly popular, but that much waiting can take a big part of your
                  travel day.
                </p>
                <p>
                  If you want to visit, my advice is to check whether remote queue registration is
                  available through a Korean waiting-list app such as Tabling.
                </p>
                <p>
                  You may be able to register before arriving, but make sure you understand the
                  check-in rules and keep an eye on your position. Availability and the process can
                  change.
                </p>
                <p>
                  Donghwa Garden is also in the Chodang area, making it convenient to combine with
                  nearby cafés and a visit to Gangmun Beach.
                </p>
                <p>
                  <strong>My tip:</strong>{" "}Plan around the waiting time, not just the meal itself.
                </p>

                <h3 className={h3Class}>Matcharo: A little hojicha break</h3>
                <p>
                  After Donghwa Garden, I visited Matcharo (<span lang="ko">말차로</span>), a café
                  focused on takeaway drinks.
                </p>
                <p>I enjoy hojicha, so I believe I ordered a hojicha latte.</p>
                <p>
                  If you&apos;re unfamiliar with hojicha, it&apos;s a Japanese roasted green tea.
                  Unlike matcha, which is made from powdered green tea, hojicha has a warm, toasted
                  aroma from the roasting process.
                </p>
                <p>
                  The café had a small outdoor seating area, which would be especially pleasant on a
                  nice day.
                </p>
                <p>
                  There were also trees and traditional-looking earthenware jars outside, adding a
                  little character to the space.
                </p>
                <div className="grid gap-4 py-2 sm:grid-cols-2">
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/matcharo-iced-drink.webp"
                    alt="An iced drink in a Matcharo takeaway cup with a paper sleeve, on a wooden table."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/matcharo-outdoor-seating.webp"
                    alt="Matcharo's outdoor area, with trees, hanging gourds, and earthenware jars."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                </div>
                <p>
                  It&apos;s the kind of place where you can grab a drink and enjoy a short break without
                  needing a long café visit.
                </p>

                <h3 className={h3Class}>Gangmun Beach: My favorite kind of slow travel</h3>
                <p>After the cafés and food, it was time for the sea.</p>
                <p>
                  Gangmun Beach (<span lang="ko">강문해변</span>) was one of the places I enjoyed walking
                  around.
                </p>
                <p>
                  The blue water, gentle waves, and open sky made it a refreshing change from busy
                  restaurants and long queues.
                </p>
                <ArticlePhoto
                  src="/images/travel/3-days-in-gangneung/gangmun-beach-waves.webp"
                  alt="Blue-green water and small waves at Gangmun Beach, with a small lighthouse offshore."
                  width={900}
                  height={1200}
                />
                <p>
                  I took quite a few photos and videos here, including the waves and seagulls flying
                  over the beach.
                </p>
                <p>
                  Some of the other photos from my trip were simply of interesting buildings and pine
                  trees that caught my attention while walking.
                </p>
                <p>Not every part of a trip needs to be a famous attraction.</p>
                <p>Sometimes, just wandering around and noticing small details is enough.</p>
              </section>

              <section id="day-3" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Day 3 — Spicy Jang Kalguksu and Black Sesame Coffee</h2>

                <h3 className={h3Class}>Geumcheon Kalguksu: A cleaner-tasting bowl than I expected</h3>
                <p>
                  On my final day, I went to Geumcheon Kalguksu (<span lang="ko">금천칼국수</span>),
                  another well-known restaurant in Gangneung.
                </p>
                <p>There was a wait of around 20 minutes.</p>
                <p>
                  The restaurant focuses on jang kalguksu (<span lang="ko">장칼국수</span>), a Korean
                  noodle soup with a spicy, seasoned broth.
                </p>
                <ArticlePhoto
                  src="/images/travel/3-days-in-gangneung/geumcheon-jang-kalguksu.webp"
                  alt="A bowl of jang kalguksu at Geumcheon Kalguksu, with egg, seaweed flakes, and sesame seeds in an orange-red broth."
                  width={900}
                  height={1200}
                />
                <p>
                  I&apos;ve had jang kalguksu before, and I sometimes find the flavor a little heavy or
                  muddled.
                </p>
                <p>But the bowl I had here tasted surprisingly clean and well-balanced.</p>
                <p>
                  It was still spicy. From what I remember, I&apos;d compare the heat to Shin Ramyun,
                  one of Korea&apos;s best-known spicy instant noodles.
                </p>
                <p>
                  That&apos;s just my personal comparison, though. If you&apos;re sensitive to spicy
                  food, it may feel quite hot.
                </p>

                <h3 className={h3Class}>Making your own rice balls</h3>
                <p>
                  Another enjoyable part of the meal was the self-serve rice balls, or{" "}
                  <em>jumeokbap</em>{" "}(<span lang="ko">주먹밥</span>).
                </p>
                <p>
                  In some Korean restaurants, you&apos;re given seasoned rice and disposable plastic
                  gloves so you can shape your own little rice balls.
                </p>
                <ArticlePhoto
                  src="/images/travel/3-days-in-gangneung/self-made-rice-balls.webp"
                  alt="Small hand-shaped rice balls mixed with seaweed in a steel bowl."
                  width={1200}
                  height={900}
                />
                <p>
                  It&apos;s simple, but it can be a fun experience if you&apos;re trying it for the
                  first time.
                </p>
                <p>
                  <strong>One warning: The rice can be very hot!</strong>
                </p>
                <p>Be careful when mixing and shaping it, even if you&apos;re wearing the gloves.</p>

                <h3 className={h3Class}>Toetmaru: Famous black sesame coffee, with another long wait</h3>
                <p>
                  Next was Toetmaru (<span lang="ko">툇마루</span>), a café famous for its black sesame
                  coffee.
                </p>
                <p>
                  Black sesame has a rich, nutty flavor, and it&apos;s used in various Korean foods and
                  desserts.
                </p>
                <p>I&apos;d heard a lot about this coffee, so I wanted to try it myself.</p>
                <p>But the waiting started before I even placed my order.</p>
                <p>
                  At the time of my visit, I couldn&apos;t use remote mobile waiting, so I had to stand
                  in line.
                </p>
                <p>After ordering, it took roughly another 30 minutes to receive my coffee.</p>
                <p>Altogether, I remember waiting about an hour.</p>
                <p>
                  The café was packed, and there were no available seats, so I got my drink to go.
                </p>
                <div className="grid gap-4 py-2 sm:grid-cols-2">
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/toetmaru-sign.webp"
                    alt="A tall wooden post with the name Toetmaru written in Korean, in front of the café building."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                  <ArticlePhoto
                    src="/images/travel/3-days-in-gangneung/toetmaru-black-sesame-coffee.webp"
                    alt="Toetmaru's black sesame coffee in a takeaway cup, resting on a wooden log bench."
                    width={900}
                    height={1200}
                    layout="pair"
                  />
                </div>
                <p>
                  The coffee itself was smooth and delicious, with a deep, nutty black sesame flavor.
                </p>
                <p>
                  My only small disappointment was the portion size. I wished there had been a little
                  more!
                </p>
                <p>
                  If you&apos;d like to sit inside, check the seating situation and the café&apos;s
                  rules before ordering. Don&apos;t assume a table will be available just because
                  you&apos;ve waited for your drink.
                </p>

                <h3 className={h3Class}>One last walk at Gangmun Beach</h3>
                <p>Before heading home, I returned to Gangmun Beach.</p>
                <p>
                  I liked being able to visit the same beach more than once without feeling that I had
                  to do something different each time.
                </p>
                <p>
                  After several busy food stops, it was nice to spend a little more time by the water.
                </p>
                <p>Then I made my way back to Gangneung Station for the KTX journey to Seoul.</p>
              </section>

              <section id="tips" className="space-y-4 scroll-mt-24">
                <h2 className={h2Class}>Things I&apos;d Tell a Friend Before Visiting Gangneung</h2>
                <p>
                  <strong>Book your weekend KTX tickets early.</strong>{" "}Popular departures can sell
                  out, and standing tickets aren&apos;t guaranteed.
                </p>
                <p>
                  <strong>Expect queues at famous restaurants and cafés.</strong>{" "}I waited about two
                  hours at Donghwa Garden and roughly one hour at Toetmaru. Your experience may be
                  different.
                </p>
                <p>
                  <strong>Check waiting-list apps before visiting.</strong>{" "}Some places offer remote
                  registration, while others require you to queue in person.
                </p>
                <p>
                  <strong>Don&apos;t underestimate Korean spicy food.</strong>{" "}My jang kalguksu felt
                  roughly as spicy as Shin Ramyun, but spice tolerance varies.
                </p>
                <p>
                  <strong>Try takeaway food from the local market.</strong>{" "}Buying several small
                  dishes and taking them back to your accommodation can be a relaxing way to spend an
                  evening.
                </p>
                <p>
                  <strong>Leave time to simply walk.</strong>{" "}Gangneung isn&apos;t only about famous
                  restaurants. The sea, pine trees, and little details along the way were part of what
                  made the trip memorable.
                </p>
              </section>

              <section id="visit-again" className="space-y-4 border-t border-[var(--border)] pt-9 scroll-mt-24">
                <h2 className={h2Class}>Would I Visit Gangneung Again?</h2>
                <p>Yes.</p>
                <p>
                  There were long waits, a few foods I couldn&apos;t try, and some small things I would
                  plan differently next time.
                </p>
                <p>
                  But I enjoyed the contrast between busy food spots and quiet moments by the water.
                </p>
                <p>
                  I&apos;d return for the tangsuyuk, I&apos;d happily have another black sesame coffee,
                  and I&apos;d leave myself more time to walk around Gangmun Beach.
                </p>
                <p>
                  If you&apos;re planning your first trip to Gangneung, my advice is simple: choose a
                  few places you really want to visit, book your train early, and don&apos;t fill every
                  hour of your schedule.
                </p>
                <p>
                  Sometimes the best part of a weekend trip is having enough time to enjoy where you
                  are.
                </p>
                <p className="pt-4 text-sm italic leading-7 text-[var(--muted)] md:text-base">
                  Visited September 11–13, 2026. Waiting times, prices, menus, and reservation systems
                  reflect my experience or recollection and may change.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
