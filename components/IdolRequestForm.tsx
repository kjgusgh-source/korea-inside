"use client";

import { useState, type FormEvent } from "react";

type IdolRequestFormProps = {
  compact?: boolean;
};

const requestTypes = [
  { value: "content_idea", label: "Content idea" },
  { value: "kpop_idol_guide", label: "K-pop / idol guide" },
  { value: "korean_culture_question", label: "Korean culture question" },
  { value: "site_feedback", label: "Site feedback" },
  { value: "bug_or_confusing_page", label: "Bug or confusing page" },
];

const videoTypes = [
  "Facecam",
  "Group stage",
  "Member fancam",
  "Ending fairy",
  "Funny moment",
  "Viral clip",
  "Dance practice",
  "Fan chant",
  "Korean expression",
  "Other",
];

const countries = [
  "United States",
  "Japan",
  "Brazil",
  "Indonesia",
  "Thailand",
  "Philippines",
  "France",
  "Germany",
  "South Korea",
  "Other",
];

export default function IdolRequestForm({ compact = false }: IdolRequestFormProps) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      requestType: formData.get("requestType"),
      topicTitle: formData.get("topicTitle"),
      pageUrl:
        typeof window !== "undefined" ? window.location.href : formData.get("pageUrl"),
      groupName: formData.get("groupName"),
      memberName: formData.get("memberName"),
      videoType: formData.get("videoType"),
      youtubeUrl: formData.get("youtubeUrl"),
      country: formData.get("country"),
      requestMessage: formData.get("requestMessage"),
    };

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error ?? "Could not save your request.");
        return;
      }

      form.reset();
      setMessage(
        "Thank you. Your idea was saved and will be reviewed by HAEMIL."
      );
    } catch {
      setMessage("Could not send your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (compact) {
    return (
      <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Help shape HAEMIL
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            What should we explain next?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Ask about a K-pop word, idol, Korean culture moment, food, place, or
            tell us what felt confusing on this site.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-[var(--text)]">
              Request type
            </span>
            <select
              name="requestType"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            >
              {requestTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-[var(--text)]">
              Topic or feedback
            </span>
            <input
              type="text"
              name="topicTitle"
              placeholder="e.g. What does maknae mean? / The mobile menu is confusing"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-[var(--text)]">
              Message optional
            </span>
            <textarea
              name="requestMessage"
              rows={4}
              placeholder="Tell us what you want HAEMIL to explain, or what would make this site easier to use."
              className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            />
          </label>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send to HAEMIL"}
            </button>

            {message && (
              <p className="mt-4 rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm leading-6 text-[var(--text)]">
                {message}
              </p>
            )}
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm md:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
          Help shape HAEMIL
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          What should we cover next?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
          Tell us which idol, K-pop word, Korean culture moment, food, place, or
          site improvement you want to see here. Requests will help shape future
          pages.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Request type
          </span>
          <select
            name="requestType"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          >
            {requestTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Topic or feedback
          </span>
          <input
            type="text"
            name="topicTitle"
            placeholder="e.g. What is maknae? / Please cover NewJeans / The page is hard to read"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Group name optional
          </span>
          <input
            type="text"
            name="groupName"
            placeholder="e.g. fromis_9, IVE, BTS"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Idol / member name optional
          </span>
          <input
            type="text"
            name="memberName"
            placeholder="e.g. Song Hayoung, Karina"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Related video type optional
          </span>
          <select
            name="videoType"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          >
            {videoTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Your country / region
          </span>
          <select
            name="country"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Reference link optional
          </span>
          <input
            type="url"
            name="youtubeUrl"
            placeholder="https://youtube.com/... or any related link"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Message
          </span>
          <textarea
            name="requestMessage"
            rows={4}
            placeholder="Tell us what you want to understand, watch, improve, or share."
            className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Send to HAEMIL"}
          </button>

          {message && (
            <p className="mt-4 rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm leading-6 text-[var(--text)]">
              {message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}