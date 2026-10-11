# Japanese editorial review — Sunbae / Hoobae (draft)

Page: `/ja/kpop/what-does-sunbae-and-hoobae-mean-in-kpop` (Preview only)
Translation: `content/translations/ja/kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json`
Status: **draft** (unchanged). Glossary: `0.3.0-ja-pilot`.

**This is not a native-speaker review.** It is an AI editorial pass against the
English source plus a second AI pass. Passing the automated checks does not
mean the translation is approved. The status must stay `draft` until a native
Japanese reviewer has signed off.

## Scope and method

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

## Changes in this round (8 units)

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

## Reviewed, not changed

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

The site owner listed these sources for this review:

- 한국어기초사전, 선임: https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=62614
- Kpedia, 先任: https://www.kpedia.jp/s/1/先任
- 나훈아 spelling: https://linkco.re/61XSvpc8?lang=en
- BoA source article: https://www.yna.co.kr/view/AKR20201201114000005
- CORTIS in Japanese (KBS WORLD): https://world.kbs.co.kr/service/contents_view.htm?board_seq=461430&lang=j&menu_cate=artist

**None of them could be opened in this review session** (the fetch tool
refused URLs that were not in a chat message). The 先任 decision above relies
on general knowledge of the word plus the owner's note; the names ナ・フナ and
マーティン are therefore still marked `needsVerification`.

## Automated checks (offline, outside the repo)

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

## Native review still required

1. Title and meta description (naturalness, SEO, no equation with Japanese 先輩・後輩).
2. 現地の人の目線 (three units) — does it read as the operator's own view?
3. ソニム vs 先任 for 선임.
4. 役職という軸が加わる; 役職名のほうが使いやすい.
5. Name spellings ナ・フナ, ユナ, マーティン against the owner's sources.
6. All 14 first-person units for tone.
7. Preview UI strings (notice, EN link label) — outside this file.

## Conditions before publishing

1. Native Japanese review of all 71 units, recorded outside the translation
   file; only then may `status` become `reviewed`.
2. Separate operator approval (`approved`) bound to the source hashes.
3. Decisions on indexing, hreflang and sitemap (all off today).
4. Merging the prerequisite PRs (#85, #87/#88, #89, #90) with explicit approval.
5. Production must keep returning 404 for the Japanese draft until then.
