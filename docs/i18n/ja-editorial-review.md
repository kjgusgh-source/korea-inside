# Japanese editorial review — Sunbae / Hoobae (draft)

Page: `/ja/kpop/what-does-sunbae-and-hoobae-mean-in-kpop` (Preview only)
Translation: `content/translations/ja/kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json`
Status: **draft** (unchanged). Glossary: `0.3.0-ja-pilot`.

**This is not a native-speaker review.** It is an AI editorial pass against the
English source plus later AI cross-reviews (see "AI review history"). Passing the
automated checks does not mean the translation is approved. The status stays
`draft` until the owner approves a final text under the policy below: after a
native Japanese review (default rule) or, for this page only, under the pilot
exception.

Human native-Japanese reviews completed for this page: **0**.

## Policy decision (2026-10-21)

| Item | Record |
|---|---|
| Decision | B — AI-reviewed, noindex Japanese pilot |
| Decision date | 2026-10-21 (KST) |
| Scope | `/ja/kpop/what-does-sunbae-and-hoobae-mean-in-kpop` only |
| Human native-Japanese review completed | 0 |
| Owner decision | Approved preparing the policy documents for option B |
| Not authorized by this decision | quality approval, production approval, indexing approval, any merge, any release |

This decision does not approve the translation, its quality or its release.
Each of those still needs its own explicit owner approval (see "Publishing
path").

## Native review policy

**Default rule.** A translated page is published only after a human native
Japanese speaker has reviewed it. This applies to every Japanese page unless a
written exception names that page.

**Pilot exception (this page only).** For the Sunbae page above, the owner may,
after separately accepting the risks listed in "Open risks" and giving the
final approvals, publish it as a **noindex** page on the basis of the AI
cross-reviews below instead of a native review.

- The exception does not apply to the Japanese anime page
  (`/ja/kpop/why-kpop-idols-feel-like-anime-characters`) or to any future
  translated page. Each would need its own written decision.
- AI cross-review is not a native review and is never recorded as one.
- The exception does not change the approval system: quality, production and
  indexing approvals stay separate records (`content/i18n/approvals.json`, see
  `catalog-contract.md`), each given by the owner for exact file hashes.
- An approval record given under this exception must say so in its
  `approvedBy` label, for example: `Site owner — AI cross-review only, no
  native review; pilot risk accepted (ja-editorial-review.md)`.

## Status meanings

| Status | Meaning |
|---|---|
| `draft` | Not yet approved by the owner for quality. **Current status.** |
| `reviewed` | A human native-Japanese review was actually completed. Never used for an AI review. |
| `approved` | The owner approved one specific final text of the translation. |

Under the pilot exception the page may go `draft` → `approved` directly, after
a separate owner approval; it never passes through `reviewed`. The code does
not check who reviewed a page: it requires `status: "approved"` plus matching
quality and production records (see `catalog-contract.md`).


## Round 1 editorial pass (before E4)

- All 71 translated units compared one by one with the English source. The 7
  `translate: false` units (선배, 후배, 선배님, 선배 · 후배, 상사, 사수, 대리) are not
  translated and were not changed.
- Unit IDs, `sourceHash`, placeholders, links and protected Hangul were kept.
- Changes were made only where the meaning, register or a cultural framing
  could be wrong. Uncertain naturalness was not "fixed"; it is listed below
  for the native reviewer.
- Second pass: a separate Claude model (Sonnet) reviewed all 71 units
  read-only. **It is the same model family**, so it is not an independent
  review. No model from another family was available without a new paid
  service, so an independent cross-family review was not done.

## Round 1 changes (8 units)

| Unit ID | Before | After | Reason |
|---|---|---|---|
| `meta-title-67882371` | ソンベとフベの本当の意味とは？韓国語の先輩・後輩を表す言葉 | ソンベとフベとは？韓国語の2つの言葉の本当の意味 | The English says "What These Korean Words Really Mean". The old subtitle stated that sunbae/hoobae are the Korean words for Japanese 先輩・後輩, which presents them as the same institution. |
| `header-h1-299cbd58` | (same as title) | (same as title) | Same text as the title in the English source. |
| `header-p-e98ed66c` | K-POPで知る韓国文化｜現地目線で | K-POPで知る韓国文化｜現地の人の目線で | 現地目線 can read as an on-the-spot or reporter's view. "A local take" is the view of a local person, here the operator. |
| `a-local-take-from-haemil-aside-aria-label-16f9de9e` | HAEMILから、現地目線のひとこと | HAEMILから、現地の人の目線でひとこと | Same reason; the label and the heading stay identical, as in English. |
| `a-local-take-from-haemil-h2-9801a4b5` | HAEMILから、現地目線のひとこと | HAEMILから、現地の人の目線でひとこと | Same reason. |
| `work-p-372cca95` | …役職名で呼ぶほうが便利なことも多いです。 | …役職名のほうが使いやすいことも多いです。 | English: "Job titles are often more useful." 便利 was slightly off and 呼ぶ was added; 使いやすい stays close to "useful". |
| `work-p-b61319f2` | …その人が自分の上司とは限りません。 | …その人も自分の上司とは限りません。 | English "might not be your manager either": the 「も」 keeps "either" (like the earlier boss/title examples). |
| `military-p-c646635f` | 先輩の兵士は後輩に対して、たいてい… | 先輩の兵士は後輩に対して、一般的に… | English "commonly". たいてい reads stronger (almost always). 一般的に also avoids repeating よく used later in the same paragraph. |

## Round 1: reviewed, not changed

| Topic | Units | Decision |
|---|---|---|
| ソニム（선임） vs honorific -ニム | `military-p-356bfaab` | Kept. ソニム matches the pronunciation of 선임, the Hangul is shown next to it, and the English has the same overlap (seonim / -nim). 先任 is a legitimate Japanese word (seniority by earlier appointment, also used in military contexts) and is now an acceptable gloss in the glossary. The draft keeps 「つまり先輩の兵士」 to mirror "senior soldier"; 先任 may suggest appointment or rank, while the paragraph says seniority is separate from rank. Native reviewer to choose. |
| sasu / daeri / huim | work and military units, table rows | Not confused: sasu is an informal trainer (非公式の指導役, 仕事を教えてくれる人), daeri a job title (役職), huim a later-enlisted soldier (後輩の兵士). |
| Sunbae/hoobae vs Japanese 先輩/後輩 | body units | Plain English "senior"/"junior" is rendered 先輩/後輩; the Korean words themselves are ソンベ/フベ. With the title change, no unit states the two systems are the same. |
| `meta-description-efb086ba` | — | Kept. 「先輩・後輩の関係」 (for "seniority") follows the glossary, but next to ソンベ/フベ it could still be read as equating them; 「韓国で育った筆者」 for "A local" is within the article's facts. Native and SEO check. |
| First person and hedging | 14 first-person units | Kept personal and hedged. `school-p-221e199c` omits 私 naturally; the speaker is clear from the previous paragraph. |
| Numbers | `age-p-549861e6` (a year → 1年), title/h1 (2つ) | Intended; no year, age or amount changed. |
| Names and media | `kpop-p-b51e6858`, `kpop-p-0029ddec` | Unchanged: ナ・フナ, ユナ, マーティン; media names keep the English source spelling (Yonhap News, CBS NoCut News, Korea Economic Daily). |
| Workplace heading | `work-h2-922eea52` 「役職という軸が加わる」 | Kept; "another layer" → 軸 is a reasonable rendering. Native check. |

## Glossary 0.3.0-ja-pilot

- `ja.avoid` is now **scoped**: a word is blocked only in units whose English
  source mentions that term (English forms or Korean). The same word can be
  correct Japanese in other contexts.
- `seonim`: 先任 removed from `avoid`; added under `acceptable`.
- `seniority`: 年功序列 stays blocked only as a rendering of this article's
  seniority; documented as a correct term in general contexts.
- `daeri`: 代理 / 代理人 stay blocked only as a rendering of 대리; documented
  as ordinary Japanese words elsewhere.
- `local-take`: preferred form 現地の人の目線 (現地目線 and 地元目線 kept as
  alternatives with notes).
- Translation `glossaryVersion` updated to `0.3.0-ja-pilot`.

## External sources

The site owner listed these sources. Results come from the Cowork review
session: only sources actually opened in that session are recorded as
checked; the others stay unverified.

| Source | Result | Effect on the draft |
|---|---|---|
| Kpedia, 先任: https://www.kpedia.jp/s/1/先任 | Opened in the Cowork session. 선임（ソニム）→ 先任; 선임병（ソニムビョン）→ 先任兵, 古参兵, 自分より先に入隊した兵士; 선임자 → 先任者. No 후임 entry on that page. | Supports 先任 / 古参兵 as candidate glosses and the reading ソニム. Wording choice left to the native reviewer. |
| linkco.re, Na Hoon-a: https://linkco.re/61XSvpc8?lang=en | Opened in the Cowork session. Japanese description and keywords use ナ・フナ; the description also shows 羅勲児(ナ・フナ). | The draft spelling ナ・フナ matches this source. |
| 한국어기초사전, 선임: https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=62614 | Not opened in the Cowork session (the site's robots rules blocked the fetch tool). | Not verified. |
| KBS WORLD Japanese, CORTIS: https://world.kbs.co.kr/service/contents_view.htm?board_seq=461430&lang=j&menu_cate=artist | Not opened in the Cowork session (blocked for the fetch tool). | マーティン not verified in this session. |
| Yonhap News, BoA: https://www.yna.co.kr/view/AKR20201201114000005 | Not opened in the Cowork session (blocked for the fetch tool). | Event type not verified; プレスイベント follows the English "press event". |
| Korea Economic Daily, CORTIS showcase (2025-08-18): https://www.hankyung.com/article/202508186044H | E6: opened by Claude in a Cowork session with the web fetch tool (the tool returns a model summary and quotes, not a full manual read). Quote: 「하이브 선배님들 곡에만 참여하다가 드디어 코르티스라는 이름으로 저희 팀과 함께 소개되어 영광스럽다」. | Supports the English sentence and the E6 wording. マーティン spelling not verified. |
| CBS NoCut News, CSR debut (2022-07-27): https://www.nocutnews.co.kr/news/5793840 | E7: opened by Claude with the web fetch tool. Yuna (유나) names BoA as a role model: 「보아 선배님은 제가 일본에 있을 때부터 팬이었다…」. | Supports the English sentence. Japanese spelling ユナ not verified. |
| News1, BoA 20th anniversary (2020-12-02): https://www.news1.kr/videos/9898 | E7: opened by Claude with the web fetch tool. Headline quote 「나훈아 선배님 무대 보면서 반성 많이 했다」 (선배님; reflected, not learned). | Basis for the English fix (#110) and E8 (F3). |
| Asia Economy / Ajunews, same event (2020-12-01): https://www.ajunews.com/view/20201201160927798 | E7: opened by Claude with the web fetch tool. Reports 「나훈아 선생님 무대를 보고 반성했다」 (선생님). | Outlets differ on the honorific. The cited Yonhap article was not read. |
| Yonhap News, BoA (cited source, again in E8) | Still blocked for the Cowork fetch tool. The owner reported its content (나훈아 선배님 무대를 보고 많이 반성). | **Not verified by Cowork.** The English fix relies on News1 and the owner's report. |
| Japanese media spelling of マーティン (E4) | Web search results only (e.g. Japanese K-pop media pages titled with マーティン); no page opened. | Media usage seen; official spelling not verified. |

A spelling that matches a source is not a native naturalness check; both
remain separate review steps.

## Round 1 automated checks (offline, outside the repo)

- 71 current / 0 missing / 0 stale / 0 unknown; 7 kept; structure references clean.
- Placeholders, markup and protected Hangul valid; no added Hangul; scoped
  glossary blocks 0. Blocking findings: **0**.
- Review notes (7), all checked: numbers in the title/h1 (2つ) and
  `age-p-549861e6` (1年); first person without 私 in `school-p-221e199c`;
  name spellings not verified (ナ・フナ, ユナ, マーティン).
- Injected-error tests still blocked: 射手 for sasu, 代理 for daeri,
  年功序列 for seniority. 先任 for seonim now passes; 代理 in an unrelated
  unit is a review note, not a block.
- Runtime validator (`lib/i18n/validateTranslation.mjs`) accepts the file.

## Later rounds (E4–E8)

All changes below keep unit IDs, placeholders, protected Hangul, numbers and
`status: draft`. Each was applied only after an explicit owner instruction.

| Round | PR | What changed | Units |
|---|---|---|---|
| E4 | — (review only) | Claude reviewed all 71 units against the English source (`sunbae-ja-review-71.csv`, P1 22 / P2 16 / P3 33) and proposed 11 changes. | — |
| E5 | #108 | 7 of the 11 proposals, chosen by the owner. | `age-p-a312338f` (「今も年齢が重要です」 → 「年齢が大切なことに変わりはありません」), `meta-description-efb086ba` (shorter first sentence), `school-p-62c5b1a2`, `military-p-c646635f` (first sentence), `military-p-a13594dd` (first sentence), `header-p-78cf4305`, `kpop-p-04aa6ac1` (first sentence) |
| E6 | #109 | 4 units from AI cross-review findings (see "AI review history"). | `a-local-take-from-haemil-p-044c58b0` (4th sentence), `kpop-p-04aa6ac1` (2nd sentence: 「経験に敬意を示す」), `kpop-p-cd3cec5d` (2nd sentence), `kpop-p-0029ddec` (「経緯」 removed; checked against the Korea Economic Daily article) |
| E7 | — (review only) | Claude read all 71 units in display order with context: 68 keep, 0 meaning errors, 2 naturalness (F1, F2), 1 fact check (F3). | — |
| E8 | #111 (+ #110 for English) | F1 and F3 applied; F2 kept by owner decision. The English source sentence was corrected and the translation data synced. | `kpop-p-cd3cec5d` (F1: 「人を敬うのに」), `kpop-p-b51e6858` (F3: 「自分を見つめ直したこと」; sourceHash synced) |

E8 also changed the English page (`page.tsx`, one sentence, same bytes as #110),
re-extracted the source JSON (only `kpop-p-b51e6858` changed; ID kept) and
rewrote the source freshness record (two Sunbae hashes).

## AI review history and scope

Only what can be traced is recorded. A reviewer is not listed as having read
all 71 units unless that is documented.

| Reviewer | What was reviewed | Scope as documented |
|---|---|---|
| Claude (Cowork sessions) | Drafted the translation; round 1 editorial pass; E4 unit review; E7 context review; source checks with the web fetch tool | All 71 units (round 1, E4, E7) |
| Claude Sonnet (round 1 second pass) | Read-only review | All 71 units; same model family, so not independent |
| ChatGPT | Cross-review findings that the owner used for E6; independent check of the PR #109 diff and the E6 translation JSON (reported by the owner) | Not documented in this repository. **Not recorded as a full 71-unit review.** |
| Gemini (Gemini 3.1 Pro and Gemini 4 Argon, as named by the owner) | Cross-review findings used for E6 and for the E7 list of 12 units to re-check | Not documented in this repository. **Not recorded as a full 71-unit review.** |
| Owner | Chose which proposals to apply in E5, E6 and E8 | Decisions only; not a native review |

AI cross-review, even across model families, is not a human native-Japanese
review. The models can share the same blind spots.

## Latest automated checks (E8, PR #111)

- Validator: OK. 71 units; status `draft`. The glossary checker gives the same
  findings as #109 (0 blocking).
- `check-sources`: MATCH 2. Source freshness: verified.
- Tests 124/124; English pages and SEO files unchanged except the one corrected
  sentence on the English Sunbae page.

## Open risks

These are the risks the owner accepts if the pilot exception is used. A native
review would address the first group.

| Item | Status |
|---|---|
| Naturalness of the Japanese title and meta description | Open (native check). E5 shortened the description's first sentence. |
| 「現地の人の目線」 (kicker, box heading, box label) | Open: does it read as the author's own view? |
| ソニム (선임) next to the honorific -ニム; how Korean military terms are explained | Open: the Hangul and 「つまり先輩の兵士」 are shown; 先任 / 古参兵 are alternatives. |
| 「役職という軸が加わる」 (`work-h2-922eea52`) | Open (native check; kept in E5). |
| Tone of the first-person paragraphs | Open (native check). |
| Naturalness of the sentences changed in E5–E8 (13 edits across 11 units) | Open (native check). |
| Japanese spelling of names and media | ナ・フナ matches one source; ユナ and マーティン not verified; media names kept in English per the glossary. |
| Reading Korean 선배/후배 as the Japanese 先輩/後輩 system | E7 found no sentence that equates them; still a native check item. 先輩/後輩 are used only for plain English senior/junior, per the glossary. |
| 320px mobile layout | Checked locally with web fonts replaced (E4–E8). There is no horizontal overflow, and the table scrolls inside its box. The h1 (4 lines) and the kicker break in the middle of a word (e.g. 「ソンベとフ／ベ」). This is a CSS matter, not fixed. |

Confirmed facts (sources above): Martin's showcase remark (Korea Economic
Daily), Yuna naming BoA (NoCut), BoA calling Na Hoon-a 선배님 and saying she
reflected (News1). The cited Yonhap article itself is unverified by Cowork.

The earlier "Native review still required" list is kept below as written in
round 1:

### Round 1 list: native review still required

1. Title and meta description (naturalness, SEO, no equation with Japanese 先輩・後輩).
2. 現地の人の目線 (three units) — does it read as the operator's own view?
3. ソニム vs 先任 for 선임.
4. 役職という軸が加わる; 役職名のほうが使いやすい.
5. Name spellings: ナ・フナ matches the linkco.re source; ユナ and マーティン are not verified.
6. All 14 first-person units for tone.
7. Preview UI strings (notice, EN link label) — outside this file.

## Publishing path (current structure)

The round 1 conditions referred to PRs #85, #87/#88, #89 and #90. Those PRs
predate the integration, so the conditions are superseded by this section.

PRs as of 2026-10-21 (all Draft, none merged):

- **#110** (base `main`): the English Sunbae sentence only.
- **Japanese chain**: #104 → #105 → #106 → #107 → #108 → #109 → #111, each
  stacked on the previous one.
- **This policy PR**: based on #111.
- A **UI wording PR** for the published notice may follow.

**#111 must go with #109.** #111 carries the same English line as #110 plus the
re-extracted source, the freshness record and the synced translation.

- If #110 and #109 reach the same branch without #111:
  - source freshness becomes `changed`
  - `check-sources` reports CHANGED
  - 21 tests fail
- A local merge simulation showed that every order containing #111 ends at the
  same files with no conflict.

The final merge plan (order, and whether to combine the policy and UI PRs)
needs its own owner approval.

Release steps under the pilot exception, each a separate owner approval:

1. Final text of the translation and of the published notice.
2. Status `draft` → `approved` in the translation file.
3. `content/i18n/approvals.json` with matching **quality** and **production**
   records only. There is **no indexing record**, and `approvedBy` states AI
   cross-review only. Records are made after all bytes are final, because any
   later edit voids them.
4. `lib/i18n/locales.ts`: `ja` publication `public`. Pages without records
   (the anime page) stay 404.
5. Merges and a Production deploy, then a check of the live responses.

## noindex release principle

Target for this one page after final approval:

- Production HTTP 200
- `robots`: noindex (no indexing record)
- no canonical for search
- not listed in the sitemap
- no hreflang entries
- no indexing approval record

`noindex` is not access control. The page is public and anyone with the URL can
read it. Allowing indexing is a separate future decision; the pilot exception
does not include it.

## Recovery

If a problem appears, the page can be taken back to 404 under a separate owner
approval. There are two ways: withdraw the production record (or make the
record no longer match), or set the `ja` locale back to not-public.

The site reads approvals at build time. Changing the records does not change a
running deployment. A new Production build and deploy are required, followed
by a check that the page returns 404.

## Round 1 publishing conditions (superseded, kept for history)

1. Native Japanese review of all 71 units, recorded outside the translation
   file; only then may `status` become `reviewed`.
2. Separate operator approval (`approved`) bound to the source hashes.
3. Decisions on indexing, hreflang and sitemap (all off today).
4. Merging the prerequisite PRs (#85, #87/#88, #89, #90) with explicit approval.
5. Production must keep returning 404 for the Japanese draft until then.
