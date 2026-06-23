"use client";

import { useState } from "react";

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

export default function IdolRequestForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(
      "Request saving will be connected soon. For now, this form is a preview."
    );
  };

  return (
    <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm md:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
          Request
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Who should we cover next?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
          Tell us which idol, group, fancam, or Korean culture moment you want
          to see here. Requests will help shape future pages.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Group name
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
            Idol / member name
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
            What kind of video?
          </span>
          <select
            name="videoType"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          >
            {videoTypes.map((type) => (
              <option key={type}>{type}</option>
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
              <option key={country}>{country}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            YouTube link optional
          </span>
          <input
            type="url"
            name="youtubeUrl"
            placeholder="https://youtube.com/..."
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--text)]">
            Why do you want this?
          </span>
          <textarea
            name="requestMessage"
            rows={4}
            placeholder="Tell us what you want to understand, watch, or share."
            className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Submit request
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