"use client";

import { useId, useRef, useState, type FormEvent } from "react";

/**
 * Reader feedback on a translated page, shown at the end of the article.
 * Japanese only for now; LocalePage decides where it appears (a published
 * page only). It reuses POST /api/requests as a "bug_or_confusing_page"
 * request and stores no personal data beyond what the reader types.
 *
 * Client-side checks here (empty text, length, one request at a time) only
 * help the reader. They are not spam protection: /api/requests has no rate
 * limiting, honeypot or CAPTCHA.
 */

const MAX_LENGTH = 1000; // same limit as /api/requests (requestMessage)

export const JA_FEEDBACK = {
  heading: "翻訳について",
  body: "この記事はAIを使って英語から日本語に翻訳・編集しています。不自然な表現や内容の誤りにお気づきでしたら、ぜひお知らせください。",
  open: "フィードバックを送る",
  label: "気になる点を教えてください",
  submit: "送信する",
  sending: "送信中…",
  empty: "内容を入力してください。",
  success: "フィードバックを受け付けました。ありがとうございます。いただいた内容は、HAEMILで確認します。",
  failure: "送信できませんでした。時間をおいて、もう一度お試しください。",
  count: (n: number) => `${n} / ${MAX_LENGTH}文字`,
};

export type FeedbackStrings = typeof JA_FEEDBACK;

type Status = "idle" | "sending" | "sent" | "error" | "empty";

export default function TranslationFeedback({
  topicTitle,
  strings = JA_FEEDBACK,
}: {
  topicTitle: string;
  strings?: FeedbackStrings;
}) {
  const id = useId();
  const headingId = `${id}-heading`;
  const panelId = `${id}-panel`;
  const fieldId = `${id}-field`;
  const countId = `${id}-count`;
  const messageId = `${id}-message`;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const sending = useRef(false);
  const field = useRef<HTMLTextAreaElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      if (status !== "sending") setStatus("idle");
      requestAnimationFrame(() => field.current?.focus());
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return; // one request at a time
    const message = text.trim();
    if (!message) {
      setStatus("empty");
      field.current?.focus();
      return;
    }
    sending.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: "bug_or_confusing_page",
          topicTitle,
          // origin + path only: no query string or hash (e.g. Preview share tokens)
          pageUrl: `${window.location.origin}${window.location.pathname}`,
          requestMessage: message.slice(0, MAX_LENGTH),
        }),
      });
      const result: unknown = await response.json().catch(() => null);
      const ok = response.ok && typeof result === "object" && result !== null && (result as { ok?: unknown }).ok === true;
      if (ok) {
        setText("");
        setOpen(false);
        setStatus("sent");
        opener.current?.focus(); // the field is hidden now; keep focus on a visible control
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  };

  const isSending = status === "sending";
  const notice =
    status === "sent" ? strings.success : status === "error" ? strings.failure : status === "empty" ? strings.empty : null;
  // Focus rings come from the global :focus-visible style (app/globals.css).

  return (
    <section
      aria-labelledby={headingId}
      data-feedback="translation"
      className="border-t border-[var(--border)] px-6 py-8 md:px-12 md:py-10"
    >
      <div className="max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-5 text-sm leading-7 text-[var(--text)] md:px-6">
        <h2 id={headingId} className="text-base font-semibold">
          {strings.heading}
        </h2>
        <p className="mt-1 text-[var(--muted)]">{strings.body}</p>
        <button
          ref={opener}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          className="mt-4 inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_75%,var(--text))] px-4 py-2 font-semibold text-[color-mix(in_srgb,var(--accent)_75%,var(--text))] transition hover:text-[var(--text)]"
        >
          {strings.open}
        </button>
        <div id={panelId} hidden={!open}>
          <form onSubmit={submit} noValidate className="mt-4 grid gap-2">
            <label htmlFor={fieldId} className="font-semibold">
              {strings.label}
            </label>
            <textarea
              ref={field}
              id={fieldId}
              name="requestMessage"
              rows={4}
              maxLength={MAX_LENGTH}
              value={text}
              onChange={(event) => {
                setText(event.target.value);
                if (status === "empty" || status === "error") setStatus("idle");
              }}
              aria-invalid={status === "empty" ? true : undefined}
              aria-describedby={`${countId}${notice ? ` ${messageId}` : ""}`}
              readOnly={isSending}
              className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-7 text-[var(--text)]"
            />
            <p id={countId} className="text-xs text-[var(--muted)]">
              {strings.count(text.length)}
            </p>
            <div>
              <button
                type="submit"
                aria-disabled={isSending}
                className="inline-flex items-center rounded-full bg-[var(--text)] px-5 py-2 font-semibold text-[var(--card)] transition aria-disabled:cursor-not-allowed"
              >
                {isSending ? strings.sending : strings.submit}
              </button>
            </div>
          </form>
        </div>
        <p
          id={messageId}
          role="status"
          className="mt-3 text-[var(--text)] empty:hidden"
        >
          {notice}
        </p>
      </div>
    </section>
  );
}
