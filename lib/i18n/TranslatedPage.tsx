import Link from "next/link";
import { Fragment, type JSX, type ReactNode } from "react";
import SiteHeader from "../../components/SiteHeader";
import { parseUnitText, validateTranslation } from "./validateTranslation.mjs";

/*
 * HAEMIL i18n — renders a schemaVersion 2 translation as React elements.
 *
 * The English source structure (tags, classes, link targets) is trusted and
 * comes from the extracted source file. Translations only supply text for
 * units that passed validation. Text is always passed to React as a string,
 * so it is escaped; translated HTML is never inserted.
 */

type Attrs = Record<string, unknown>;

type SourceUnit = {
  id: string;
  kind: string;
  tag: string;
  text: string;
  attrs?: Attrs;
  placeholders?: Record<string, { tag: string; attrs: Attrs }>;
  hash: string;
  translate: boolean;
  protect?: string[];
};

type StructureNode = {
  fragment?: boolean;
  element?: string;
  component?: string;
  list?: string;
  attrs?: Attrs;
  attributeUnits?: Record<string, string>;
  unit?: string;
  children?: StructureNode[];
};

export type SourceDocument = {
  schemaVersion: number;
  sourcePath: string;
  units: SourceUnit[];
  structure: StructureNode;
};

export type TranslationDocument = {
  schemaVersion: number;
  sourcePath: string;
  locale: string;
  status: string;
  units: { id: string; sourceHash: string; text: string }[];
};

/** Japanese UI strings used around translated content (not article text). */
export const JA_UI = {
  previewLabel: "確認用プレビュー（下書き）",
  previewBody:
    "この日本語版は確認用の下書きで、一般には公開していません。サイトのメニューとフッター、「EN」の印が付いたリンクの移動先は英語のページです。",
  englishOriginal: "英語の原文を読む",
  englishLinkBadge: "EN",
  englishLinkHidden: "（英語のページ）",
} as const;

type Ui = typeof JA_UI;

/**
 * Japanese-only presentation adjustments. The English source classes are not
 * changed; these are applied while rendering the Japanese page.
 * - Italic is weak for Japanese text, so <em> stays <em> but is shown bold.
 * - Wide letter-spacing from the English kicker is reduced for Japanese.
 */
export const JA_TYPOGRAPHY = {
  emphasisClassName: "font-bold not-italic",
  classReplacements: { "tracking-[0.22em]": "tracking-[0.06em]" } as Record<string, string>,
};

type Typography = typeof JA_TYPOGRAPHY;

function adjustClassName(className: string | undefined, typography: Typography): string | undefined {
  if (!className) return className;
  return className
    .split(/\s+/)
    .map((name) => typography.classReplacements[name] ?? name)
    .join(" ");
}

function joinClassNames(...names: (string | undefined)[]): string | undefined {
  const joined = names.filter(Boolean).join(" ");
  return joined || undefined;
}

const ELEMENTS = new Set([
  "main", "div", "article", "header", "section", "aside", "p", "h1", "h2", "h3",
  "table", "caption", "thead", "tbody", "tr", "th", "td", "ul", "ol", "li", "span", "a",
]);
const INLINE_ELEMENTS = new Set(["em", "strong", "a"]);
const ELEMENT_ATTRIBUTES = new Set(["className", "id", "scope", "aria-label", "aria-labelledby", "href", "target", "rel"]);
const HANGUL = /[\uac00-\ud7a3]/;

export class TranslationValidationError extends Error {}

export type PreparedTranslation = {
  source: SourceDocument;
  texts: Map<string, string>;
  title: string;
  description: string;
};

/**
 * Validate a translation and return the texts that may be rendered.
 * Throws when any unit fails, so a broken translation is never shown.
 */
export function prepareTranslation(
  source: SourceDocument,
  translation: TranslationDocument,
  options: { locale: string; allowedStatuses: string[] },
): PreparedTranslation {
  const result = validateTranslation(source, translation, options);
  if (!result.ok) {
    const list = result.errors.map((e) => `${e.id}: ${e.problem}`).join("\n");
    throw new TranslationValidationError(`Translation for ${source.sourcePath} (${options.locale}) failed validation:\n${list}`);
  }
  const meta = (tag: string) => {
    const unit = source.units.find((u) => u.kind === "meta" && u.tag === tag);
    const text = unit ? result.texts.get(unit.id) : undefined;
    if (!text) throw new TranslationValidationError(`missing translated metadata: ${tag}`);
    return text;
  };
  return { source, texts: result.texts, title: meta("title"), description: meta("description") };
}

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function checkedHref(href: unknown): string {
  if (typeof href !== "string") throw new TranslationValidationError("link without href");
  if (isInternal(href) || /^https:\/\//.test(href)) return href;
  throw new TranslationValidationError(`link target not allowed: ${href}`);
}

function EnglishMark({ ui }: { ui: Ui }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="ml-1 inline-block rounded border border-[var(--border)] px-1 align-middle text-[0.62em] font-semibold leading-tight tracking-normal text-[var(--muted)] no-underline"
      >
        {ui.englishLinkBadge}
      </span>
      <span className="sr-only">{ui.englishLinkHidden}</span>
    </>
  );
}

type Context = {
  source: SourceDocument;
  units: Map<string, SourceUnit>;
  texts: Map<string, string>;
  ui: Ui;
  typography: Typography;
  localizedPaths: Map<string, string>;
  afterComponent: Record<string, ReactNode>;
};

/** Render a link. Internal links without a page in this language are marked as English. */
function renderLink(attrs: Attrs, children: ReactNode, key: string, ctx: Context) {
  const href = checkedHref(attrs.href);
  const className = typeof attrs.className === "string" ? attrs.className : undefined;
  if (isInternal(href)) {
    const localized = ctx.localizedPaths.get(href);
    if (localized) {
      return <Link key={key} href={localized} className={className}>{children}</Link>;
    }
    return (
      <Link key={key} href={href} hrefLang="en" className={className}>
        {children}
        <EnglishMark ui={ctx.ui} />
      </Link>
    );
  }
  const target = attrs.target === "_blank" ? "_blank" : undefined;
  const rel = typeof attrs.rel === "string" ? attrs.rel : target ? "noopener noreferrer" : undefined;
  return <a key={key} href={href} className={className} target={target} rel={rel}>{children}</a>;
}

function renderText(unit: SourceUnit, text: string, ctx: Context): ReactNode {
  const { nodes, errors } = parseUnitText(text);
  if (errors.length) throw new TranslationValidationError(`${unit.id}: ${errors.join("; ")}`);
  const walk = (list: ReturnType<typeof parseUnitText>["nodes"], path: string): ReactNode[] =>
    list.map((node, i) => {
      const key = `${path}.${i}`;
      if (node.type === "text") return <Fragment key={key}>{node.value}</Fragment>;
      const def = unit.placeholders?.[node.name];
      if (!def || !INLINE_ELEMENTS.has(def.tag)) throw new TranslationValidationError(`${unit.id}: placeholder ${node.name} not allowed`);
      const inner = walk(node.children, key);
      if (def.tag === "a") return renderLink(def.attrs, inner, key, ctx);
      const className = adjustClassName(typeof def.attrs.className === "string" ? def.attrs.className : undefined, ctx.typography);
      return def.tag === "em"
        ? <em key={key} className={joinClassNames(className, ctx.typography.emphasisClassName)}>{inner}</em>
        : <strong key={key} className={className}>{inner}</strong>;
    });
  return walk(nodes, unit.id);
}

function unitText(id: string, ctx: Context): { unit: SourceUnit; text: string; kept: boolean } {
  const unit = ctx.units.get(id);
  if (!unit) throw new TranslationValidationError(`unknown unit ${id}`);
  if (!unit.translate) return { unit, text: unit.text, kept: true };
  const text = ctx.texts.get(id);
  if (text === undefined) throw new TranslationValidationError(`no validated translation for ${id}`);
  return { unit, text, kept: false };
}

function renderNode(node: StructureNode, key: string, ctx: Context): ReactNode {
  if (node.fragment || node.list) {
    return <Fragment key={key}>{(node.children ?? []).map((child, i) => renderNode(child, `${key}.${i}`, ctx))}</Fragment>;
  }
  if (node.component) {
    if (node.component === "JsonLd") return null; // structured data is not generated for translations yet
    if (node.component === "SiteHeader") {
      return (
        <Fragment key={key}>
          <div lang="en" className="contents"><SiteHeader /></div>
          {ctx.afterComponent.SiteHeader}
        </Fragment>
      );
    }
    throw new TranslationValidationError(`component not supported: ${node.component}`);
  }
  const tag = node.element;
  if (!tag || !ELEMENTS.has(tag)) throw new TranslationValidationError(`element not allowed: ${String(tag)}`);
  const attrs: Attrs = {};
  for (const [name, value] of Object.entries(node.attrs ?? {})) {
    if (!ELEMENT_ATTRIBUTES.has(name)) throw new TranslationValidationError(`attribute not allowed: ${tag}@${name}`);
    if (typeof value === "string") attrs[name] = name === "className" ? adjustClassName(value, ctx.typography) : value;
  }
  for (const [name, id] of Object.entries(node.attributeUnits ?? {})) {
    attrs[name] = unitText(id, ctx).text;
  }

  let children: ReactNode;
  if (node.unit) {
    const { unit, text, kept } = unitText(node.unit, ctx);
    if (kept && HANGUL.test(text)) attrs.lang = "ko";
    children = renderText(unit, text, ctx);
  } else {
    children = (node.children ?? []).map((child, i) => renderNode(child, `${key}.${i}`, ctx));
  }

  if (tag === "a") return renderLink(attrs, children, key, ctx);
  const { className, id, scope, rel, target, lang } = attrs as Record<string, string | undefined>;
  const props: Record<string, unknown> = { key, className, id, scope, rel, target, lang };
  if (attrs["aria-label"]) props["aria-label"] = attrs["aria-label"];
  if (attrs["aria-labelledby"]) props["aria-labelledby"] = attrs["aria-labelledby"];
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag {...props}>{children}</Tag>;
}

/** Notice shown above translated preview content. */
export function PreviewNotice({ englishPath, ui = JA_UI }: { englishPath: string; ui?: Ui }) {
  return (
    <aside
      aria-label={ui.previewLabel}
      className="rounded-2xl border border-[var(--gold)] bg-[var(--card)] px-5 py-4 text-sm leading-7 text-[var(--text)] md:px-6"
    >
      <p className="font-semibold text-[var(--gold)]">{ui.previewLabel}</p>
      <p className="mt-1 text-[var(--muted)]">{ui.previewBody}</p>
      <p className="mt-2">
        <Link href={englishPath} hrefLang="en" className="font-semibold text-[var(--accent)] underline underline-offset-4 hover:opacity-80">
          {ui.englishOriginal}
          <EnglishMark ui={ui} />
        </Link>
      </p>
    </aside>
  );
}

export default function TranslatedPage({
  prepared,
  ui = JA_UI,
  typography = JA_TYPOGRAPHY,
  localizedPaths = new Map(),
  afterComponent = {},
}: {
  prepared: PreparedTranslation;
  ui?: Ui;
  typography?: Typography;
  localizedPaths?: Map<string, string>;
  afterComponent?: Record<string, ReactNode>;
}) {
  const ctx: Context = {
    source: prepared.source,
    units: new Map(prepared.source.units.map((u) => [u.id, u])),
    texts: prepared.texts,
    ui,
    typography,
    localizedPaths,
    afterComponent,
  };
  return <>{renderNode(prepared.source.structure, "root", ctx)}</>;
}
