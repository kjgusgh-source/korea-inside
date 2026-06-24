"use client";

import { useState, type FormEvent } from "react";
import SiteHeader from "../../../components/SiteHeader";

type RequestStatus = "pending" | "approved" | "done" | "rejected";

type ContentRequest = {
  id: string;
  group_name: string | null;
  member_name: string | null;
  video_type: string;
  youtube_url: string | null;
  country: string | null;
  message: string | null;
  status: RequestStatus;
  created_at: string;
};

const statusOptions: RequestStatus[] = [
  "pending",
  "approved",
  "done",
  "rejected",
];

export default function AdminRequestsPage() {
  const [token, setToken] = useState("");
  const [requests, setRequests] = useState<ContentRequest[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const loadRequests = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!token.trim()) {
      setMessage("Please enter the admin token.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/requests", {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error ?? "Could not load requests.");
        return;
      }

      setRequests(result.requests ?? []);
      setHasLoaded(true);
      setMessage("");
    } catch {
      setMessage("Could not connect to the admin API.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateRequestStatus = async (
    requestId: string,
    nextStatus: RequestStatus
  ) => {
    if (!token.trim()) {
      setMessage("Please enter the admin token.");
      return;
    }

    setUpdatingId(requestId);
    setMessage("");

    try {
      const response = await fetch(`/api/admin/requests/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.trim()}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error ?? "Could not update request.");
        return;
      }

      setRequests((currentRequests) =>
        currentRequests.map((request) =>
          request.id === requestId ? result.request : request
        )
      );

      setMessage(`Request marked as ${nextStatus}.`);
    } catch {
      setMessage("Could not connect to the update API.");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Admin
          </p>

          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            Content requests
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
            Review idol, group, fancam, and Korean culture requests submitted by
            visitors.
          </p>

          <form
            onSubmit={loadRequests}
            className="mt-8 flex flex-col gap-3 md:flex-row"
          >
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="Enter admin token"
              className="min-w-0 flex-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Loading..." : "Load requests"}
            </button>
          </form>

          {message && (
            <p className="mt-4 rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm leading-6 text-[var(--text)]">
              {message}
            </p>
          )}
        </div>

        <section className="mt-8">
          {hasLoaded && requests.length === 0 && (
            <div className="rounded-[2rem] border border-dashed border-[var(--border)] bg-[var(--card)] p-6 text-sm text-[var(--muted)]">
              No requests yet.
            </div>
          )}

          <div className="grid gap-4">
            {requests.map((request) => (
              <article
                key={request.id}
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      {new Date(request.created_at).toLocaleString()}
                    </p>

                    <h2 className="mt-2 text-xl font-semibold">
                      {request.member_name || "Unknown member"}
                      {request.group_name ? ` · ${request.group_name}` : ""}
                    </h2>
                  </div>

                  <span className="w-fit rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--text)]">
                    {request.status}
                  </span>
                </div>

                <div className="mt-4 grid gap-3 text-sm leading-6 text-[var(--muted)] md:grid-cols-2">
                  <p>
                    <span className="font-semibold text-[var(--text)]">
                      Video type:
                    </span>{" "}
                    {request.video_type}
                  </p>

                  <p>
                    <span className="font-semibold text-[var(--text)]">
                      Country:
                    </span>{" "}
                    {request.country || "-"}
                  </p>
                </div>

                {request.youtube_url && (
                  <p className="mt-3 text-sm leading-6">
                    <span className="font-semibold text-[var(--text)]">
                      YouTube:
                    </span>{" "}
                    <a
                      href={request.youtube_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--accent)] underline underline-offset-4"
                    >
                      Open link
                    </a>
                  </p>
                )}

                {request.message && (
                  <p className="mt-4 rounded-2xl bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted)]">
                    {request.message}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      type="button"
                      disabled={
                        updatingId === request.id || request.status === status
                      }
                      onClick={() => updateRequestStatus(request.id, status)}
                      className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {request.status === status ? `Current: ${status}` : status}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}