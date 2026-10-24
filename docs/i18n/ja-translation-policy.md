# Japanese translation policy

Applies to every Japanese translated page (`/ja/...`) from 2026-10-23 (KST).

- **Replaces:** the default rule in `ja-editorial-review.md` ("Native review
  policy") that a page is published only after a human native-Japanese review.
- **Does not change:**
  - the approval system (`catalog-contract.md`)
  - the code
  - any existing approval record
  - the Sunbae pilot release (noindex, its two approval records)

## Owner decision (2026-10-23)

| Item | Record |
|---|---|
| Decision | A human native-Japanese review is no longer required. The default is three AI review stages plus the owner's final approval. |
| Decided by | HAEMIL site owner |
| Not authorized by this decision | quality, production or indexing approval of any page; any merge; any release |

## Editorial principles

HAEMIL introduces Korean culture from a local friend's point of view. The
owner's observations, experience, impressions and cultural readings are part
of the content and are kept.

- **Fact and reading:** keep the owner's interpretation separate from
  objective fact.
- **No overgeneralizing:** do not present what some people feel as the usual
  behavior of a whole fandom.
- **Frequency words:** state words such as "most", "always", "often" or "all
  fans" as fact only with real support (a source or data). When they come
  from the owner's own observation, write them as an observation (for example
  "some fans", "in the fan spaces HAEMIL follows", "to HAEMIL, it often
  feels…"). The owner's opinion alone is never written as objective fact.
- **Scope of an observation:** mark it with wording such as "some fans", "it
  can feel like" or "to HAEMIL".
- **Keep the voice:** do not make every sentence cautious. Keep the owner's
  point of view and the life of the writing.
- **No deleting for lack of a source:** do not delete a positive personal
  impression or a cultural reading only because it has no source.

### Unclear or unsupported content

Do not delete or rewrite it on your own. First sort it:

1. a factual claim that needs checking
2. the owner's experience or subjective reading
3. a mix of fact and reading whose meaning is unclear

Keep type 2.

For an important problem of type 1 or 3, ask the owner in Korean. Give the
sentence, why it needs checking, and a suggested wording. Do not ask about
minor wording preferences.

If the owner does not know the answer either, research it together, then
decide.

## Review process

Every Japanese page goes through three AI review stages, then the owner's
approval.

| Stage | What it checks |
|---|---|
| 1 | Meaning and facts against the English source |
| 2 | Natural Japanese and cultural expression |
| 3 | Final cross-check, by an independent model where possible (a different model family, such as ChatGPT or Gemini) |

| Severity | Meaning |
|---|---|
| P0 | Wrong meaning, fact, name or title |
| P1 | Misleading or clearly unnatural |
| P2 | Minor wording that still affects reading |

Rules:

- **What to fix:** fix P0 and P1 first. Do not rewrite sentences again and
  again over minor preferences.
- **No repeats:** do not repeat a stage that is already done.
- **Stage 3 independence:**
  - a model from another family is preferred
  - a model of the same family is not independent and is recorded as such
  - if no independent model is available, record that fact
- **Only real reviews:** record only reviews that actually happened.
- **AI is not native:** an AI review is never recorded as a native review.
- **Reviews run outside Cowork:** a review the owner ran outside Cowork is
  recorded as reported by the owner. It is not recorded as a Cowork review.
- **Native reviews:** a human native review is optional. When one happens,
  it is recorded as such.
- **Final approval:** the owner approves every page at the end.

## Approval and release (unchanged system)

- **What a page needs:**
  - `status: "approved"` in the translation file
  - matching **quality** and **production** records in
    `content/i18n/approvals.json` for the exact file bytes (see
    `catalog-contract.md`)
- **When records are written:** only when the owner approves, after the bytes
  are final. Any later edit voids them.
- **`approvedBy`:** states the review basis truthfully and says that there was
  no native-speaker review, for example
  `HAEMIL site owner (AI 3-stage review, no native-speaker review)`. If stage 3
  was not done or was not independent, it says so.
- **Published notice:** the shared notice stays as it is: an AI translation
  with no native-speaker check. There is no native-review wording and no
  per-page notice list.

## Search engines

- **Native review and noindex:** the lack of a native review alone is no
  longer a reason for noindex.
- **Indexing approval:** indexing needs its own owner approval and an
  **indexing** record, separate from passing the translation review. With that
  record, the existing system serves `index, follow`, a self-referencing
  canonical, a sitemap entry and en/ja hreflang (`catalog-contract.md`,
  "Search engines").
- **Checks before asking for indexing:**
  - a natural Japanese title and description that match search intent
  - HTTP 200
  - `index, follow`
  - self-referencing canonical
  - en/ja hreflang (in the sitemap)
  - sitemap entry
  - a crawlable internal link to the page
  - mobile usability
  - quality, production and indexing records
- **No guarantee:** indexing is not guaranteed. It is checked in Google Search
  Console after release.
- **Sunbae:** the Sunbae page stays noindex under its pilot decision. Changing
  that needs a separate owner decision.

## Review log

### `/kpop/why-kpop-idols-feel-like-anime-characters`

| Item | Value |
|---|---|
| Translation file | `content/translations/ja/kpop/why-kpop-idols-feel-like-anime-characters.json` |
| Units | 56 |
| Status | `approved` (owner, 2026-10-24) |
| Approval records | quality, production and indexing, each a separate owner decision (2026-10-24), for source `sha256:d09c1498…61462` and translation `sha256:fdf1a710…e3c3e3c` |
| Indexing | approved by the owner as a separate decision (2026-10-24) |
| Reviewed snapshot | Draft PR #121, HEAD `e8ef118c5c0ee2490c70789b174de408c8cbb1be` |

| Stage | Reviewer | Where run | Scope | Result |
|---|---|---|---|---|
| 1 + 2 | Claude, AI editorial pass | Cowork session | All 56 units against the English source | P0 0, P1 0. 5 units changed (P2): meta title, H1, `page-p-ccd207bd`, `page-p-5df6e631`, `page-p-dda19d7e`. |
| Check of the edits | Claude Sonnet | Cowork session | The PR #121 edits only | Same model family as stages 1–2, so not independent. No P0/P1. Kept 2 proposed edits as written; the other 2 were adjusted to the wording now in PR #121. |
| 3 | ChatGPT (GPT-6), AI editorial review | Run by the owner outside Cowork | English source and all 56 units at `e8ef118` | Reported by the owner: no P0/P1 meaning errors; some P2 wording could improve; no reason for a full rewrite. The report is not in this repository and was not checked here. |
| Human native-Japanese review | — | — | — | 0 |

Owner decisions (2026-10-23):

**Q1 — English unit `page-p-7c3fa9ec` ("…is often used…"): change approved,
applied.**

Applied in #123 and merged into `main` with #126 (`25213f6`), in the
existing quote style ("2D-like" and 「2次元っぽい」), as the owner decided on
2026-10-24. Only this unit was re-reviewed; the other 55 units are unchanged.
The approved wording was:

The first sentence of the unit changes. The rest of the unit stays.

- New English: "In Korean fandom spaces, some fans describe idols with a
  strong, memorable visual image as '2D-like' or 'anime-like.'"
- New Japanese:
  「韓国のファンの中には、印象に残るビジュアルを持つアイドルを『2次元っぽい』『アニメっぽい』と表現する人もいます。」
- Apply these together, in one change: the English page, the re-extracted
  source JSON, the translation unit and the source freshness record.

**Q2 — 【推しの子】 sentences (meta description, `page-p-cdbd352c`,
`page-p-5b8f9985`): kept unchanged.**

- They already limit the scope ("sometimes", "may").
- They are presented as HAEMIL's reading and as a comparison some fans make,
  not as the usual behavior of the whole fandom.
- Supporting example: a Harper's Bazaar Korea column (2023-09) quotes fan
  comments that compared IVE's Jang Wonyoung to Hoshino Ai
  (https://www.harpersbazaar.co.kr/article/80229).

**Q3 — Stage 3: recorded as above** (owner-run ChatGPT GPT-6 review).

### `/kpop/what-does-sunbae-and-hoobae-mean-in-kpop`

Released before this policy, under the pilot exception (policy B, noindex).
Its review record is `ja-editorial-review.md`.
