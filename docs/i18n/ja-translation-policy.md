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

### `/travel/3-days-in-gangneung`

| Item | Value |
|---|---|
| Translation file | `content/translations/ja/travel/3-days-in-gangneung.json` |
| Units | 135 |
| Status | `draft` (Preview only, noindex; not rendered in production) |
| Approval records | none |
| Indexing | not approved |
| Reviewed snapshot | Draft PR #134. Source `sha256:aafc4ee0…eecd589`, translation `sha256:dd5a23dc…249b745` |
| Source freshness | `UNVERIFIED`: the checker does not inspect the imported `ArticlePhoto` component. Units and structure match. |

| Stage | Reviewer | Where run | Scope | Result |
|---|---|---|---|---|
| Draft | Claude, AI translation | Cowork session | All 135 units | First draft, PR #134 HEAD `63cd954`. |
| Owner check | Site owner | Outside Cowork, reported in the session (2026-11-02) | The draft at `63cd954` | Requested: keep the KTX gloss and record it; make the hojicha sentence natural for Japanese readers; re-check all units. |
| 1 + 2 | Claude, AI editorial pass | Cowork session | All 135 units against the English source | P0 0, P1 7, P2 11. 18 units changed (list below). |
| 3 | — | — | — | Not done yet. |
| Human native-Japanese review | — | — | — | 0 |

**Glossary exception: KTX gloss.** Unit `ktx-p-2b5fee1b` reads
「KTX（韓国の高速鉄道）」. The gloss is not in the English source. This differs
from the glossary rule "Do not add facts, examples, cultural explanations or
experiences that are not in the English source" (`0.3.0-ja-pilot`,
`rules.all`). The owner asked for a KTX explanation in the translation request
and decided on 2026-11-02 to keep it. The exception covers this one gloss in
this unit. The glossary itself is unchanged.

**Units changed in the 1 + 2 pass**

| Severity | Units | Reason |
|---|---|---|
| P1 | `meta-title-28c9dfca`, `header-h1-b6b42d70`, `meta-description-b1ff7b2f` | 「地元目線」「地元の人」 read as "a Gangneung local", but the author travels from Seoul. Now 「ローカル」, which keeps the English "a local". |
| P1 | `day-1-p-9a453087` | "Korean visitors" had become 「韓国の人たち」. Now 「韓国人の旅行者」. "seemed" is kept as 「ありそう」. |
| P1 | `day-2-p-a97e0ce6` | Mixed sentence (「運転手さんによると…話もしていました」). Now clearly the driver's words. |
| P1 | `visit-again-p-203f3c69` | 「一時間ごとに詰め込みすぎない」 was an unnatural literal translation. Now 「ぎっしり詰め込みすぎない」. |
| P1 | `day-2-p-b3d9e383` | Owner request. It no longer explains hojicha from the beginning ("If you're unfamiliar…" and "a Japanese tea" are not stated). It keeps the facts: matcha is powdered, hojicha is roasted green tea, and its warm, toasted aroma comes from roasting. |
| P2 | `header-p-05343f00`, `introduction-p-0146e710`, `introduction-p-a554aae0`, `day-1-p-54c8899f`, `day-2-p-db2e3877`, `day-3-p-47b88c84`, `visit-again-p-d9edab26` | Literal Japanese made more natural. Meaning unchanged ("Sometimes" kept as 「だったりします」). |
| P2 | `day-1-p-dd525114` | "pick up food" as 「テイクアウト」, matching the heading. |
| P2 | `day-1-p-7c526c1b` | "availability" as 「販売状況」 (「品ぞろえ」 means assortment). |
| P2 | `day-1-p-7d447ce1` | "Sometimes" was missing. |
| P2 | `day-2-p-5d121ecf` | "also" was missing. |

**Checked, not changed**

- **Missing content:** none found. Every unit was compared with its English source.
- **First person:** all 53 first-person units stay the author's own experience.
- **Hedged statements:** these keep their hedge and are not written as fact:
  - "I believe I ordered" 「たしか…と思います」
  - "seemed" 「ありそう」
  - "would be pleasant" 「気持ちよさそう」
  - "From what I remember" 「記憶では」
  - "I remember waiting" 「…と記憶しています」
  - "He told me" (the driver's account, including the patent remark)
  - "That's just my personal comparison"
  - "Your experience may be different"
- **Hangul and placeholders:** every Hangul run in the source is kept, no Hangul was added, and every placeholder is kept (validator and repository tests pass).
- **Names:**
  - Business names whose Japanese name is not verified keep the English spelling: Yukyoung Tangsuyuk, Gilgamja, Donghwa Garden, Matcharo, Geumcheon Kalguksu, Toetmaru, Tabling.
  - Places: 江陵（カンヌン） (reading on first use), 江陵駅, ソウル駅, 江陵中央市場 (with "Gangneung Jungang Market" as in the source), カンムンビーチ, チョダン（Chodang）.
  - Foods: タンスユク, カムクタン, キムピタン, フェ, チャンポンスンドゥブ, チャンカルグクス, チュモクパプ, 黒ごまコーヒー, ほうじ茶ラテ, 辛ラーメン.
- **Notes:**
  - 「韓国・」 in the title follows "Korea" in the English title.
  - 「韓国風の酢豚」 translates the English "Korean-style sweet-and-sour fried pork". It does not say the two dishes are the same.
  - 「刺身」 translates "sliced raw fish".
  - 「ニラ」 for "chives" was checked against the photo (garlic chives).
