import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | HAEMIL",
  description:
    "Privacy policy for HAEMIL, including how visitor requests and submitted information are handled.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
          Privacy Policy
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-7 text-base leading-8 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Information we collect
            </h2>
            <p className="mt-3">
              When visitors submit a request, HAEMIL may collect the group name,
              idol or member name, video type, optional YouTube link, optional
              country or region, and the request message entered by the visitor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text)]">
              How we use requests
            </h2>
            <p className="mt-3">
              Submitted requests are used to review what topics, idols, videos,
              or Korean culture moments visitors want HAEMIL to cover. Requests
              may help shape future pages, but submitting a request does not
              guarantee publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Data storage
            </h2>
            <p className="mt-3">
              Request data is stored in a private database used for site
              administration. Admin pages are protected and are not intended for
              public access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Third-party content
            </h2>
            <p className="mt-3">
              HAEMIL may embed or link to videos from platforms such as YouTube.
              Those platforms may process data according to their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Updates
            </h2>
            <p className="mt-3">
              This privacy policy may be updated as HAEMIL adds new features,
              contact methods, analytics, or advertising services.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}