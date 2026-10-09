#!/usr/bin/env node
/**
 * HAEMIL i18n — source extraction pilot (offline; no network, no API calls).
 *
 * Reads an English page component (TSX) with the TypeScript compiler that is
 * already a devDependency, and separates:
 *   - translatable text units ("text + placeholders", schemaVersion 2), and
 *   - the locked page structure (elements, classes, URLs, components).
 * A translator (human or AI) only ever edits unit text. Markup, link targets,
 * images and CSS stay in the trusted English structure.
 *
 * Anything the extractor cannot evaluate statically is reported for human
 * review instead of being guessed.
 *
 * Usage:
 *   node scripts/i18n/extract.mjs <page.tsx> --path </site/path>
 *     [--previous <source.v2.json>] [--html <built-page.html>]
 *     [--out <source.v2.json>] [--v1 <source.v1.json>] [--report <report.md>]
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

export const SCHEMA_VERSION = 2;
export const EXTRACTOR_VERSION = 'extract-pilot-1';

// Elements whose inline content becomes one translatable unit.
const BLOCK_TAGS = new Set([
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'th', 'td', 'caption',
  'figcaption', 'blockquote', 'dt', 'dd', 'summary', 'label',
]);
// Inline elements that become placeholders inside a unit. Link renders as <a>.
const INLINE_TAGS = new Map([
  ['em', 'em'], ['strong', 'strong'], ['b', 'b'], ['i', 'i'], ['a', 'a'], ['Link', 'a'],
  ['code', 'code'], ['br', 'br'], ['span', 'span'], ['small', 'small'], ['abbr', 'abbr'], ['sup', 'sup'], ['sub', 'sub'],
]);
// Attributes whose values are text for people, not configuration.
export const TRANSLATABLE_ATTRIBUTES = Object.freeze(['alt', 'title', 'aria-label']);
// Attributes that change what a unit says or points to. They are part of the
// unit hash, so changing one marks existing translations as stale.
export const MEANINGFUL_ATTRIBUTES = Object.freeze(['href', 'src', 'srcset', 'lang', 'dir', 'cite', 'datetime', 'scope', 'colspan', 'rowspan', 'headers']);
// Locked but not hashed: presentation and behaviour (className, style, id,
// target, rel, width, height, data-*). Changing them never invalidates translations.
const PRESENTATION_ATTRIBUTES = new Set(['classname', 'class', 'style', 'key', 'component']);
// Attributes kept in the schemaVersion 1 compatibility view.
const V1_ATTRIBUTES = new Set(['href', 'target', 'rel', 'src', 'alt', 'title', 'aria-label']);

/** Meaningful attributes of an element, normalized for hashing. */
export function meaningfulAttributes(attrs) {
  const out = {};
  for (const [name, value] of Object.entries(attrs ?? {})) {
    if (!MEANINGFUL_ATTRIBUTES.includes(name.toLowerCase())) continue;
    out[name.toLowerCase()] = value !== null && typeof value === 'object' ? `dynamic:${value.dynamic}` : value;
  }
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
}

/** Locked, non-presentation attributes stored on a unit (for rendering and v1). */
function lockedAttributes(attrs) {
  return Object.fromEntries(Object.entries(attrs ?? {}).filter(([name, value]) => !PRESENTATION_ATTRIBUTES.has(name.toLowerCase()) && value !== true && name !== 'id'));
}
const NOT_STATIC = Symbol('not-static');
const FIRST_PERSON = /(?:^|[^A-Za-z’'])(?:I|I’m|I'm|I’ve|I've|I’d|I'd|me|my|mine|myself|we|our|us)(?![A-Za-z])/;
const HANGUL_RUN = /[\u1100-\u11ff\u3130-\u318f\uac00-\ud7af]+(?:[\s·]+[\u1100-\u11ff\u3130-\u318f\uac00-\ud7af]+)*/g;
const PROTECTED_WORDS = ['HAEMIL'];

export function contentHash(value) {
  return createHash('sha256').update(String(value).normalize('NFC'), 'utf8').digest('hex');
}

const slug = (value) => {
  const ascii = String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  // Non-Latin keys (e.g. Hangul) get a short content hash so they stay unique and stable.
  return ascii && /^[\x00-\x7f]*$/.test(String(value)) ? ascii : `${ascii ? `${ascii}-` : ''}k${contentHash(String(value)).slice(0, 6)}`;
};

// ---------------------------------------------------------------------------
// JSX text semantics (same rule as Babel/TypeScript JSX transforms).
// ---------------------------------------------------------------------------
const NAMED_ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', hellip: '…', middot: '·', rarr: '→', larr: '←' };

function decodeJsxEntities(text, review) {
  return text.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (match, body) => {
    if (body[0] === '#') {
      const code = body[1] === 'x' || body[1] === 'X' ? Number.parseInt(body.slice(2), 16) : Number.parseInt(body.slice(1), 10);
      return Number.isInteger(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match;
    }
    if (Object.hasOwn(NAMED_ENTITIES, body)) return NAMED_ENTITIES[body];
    review(`unknown HTML entity ${match} kept as written`);
    return match;
  });
}

export function cleanJsxText(raw) {
  const lines = raw.split(/\r\n|\n|\r/);
  let lastNonEmpty = -1;
  lines.forEach((line, index) => { if (/[^ \t]/.test(line)) lastNonEmpty = index; });
  let out = '';
  lines.forEach((line, index) => {
    let value = line.replace(/\t/g, ' ');
    if (index !== 0) value = value.replace(/^ +/, '');
    if (index !== lines.length - 1) value = value.replace(/ +$/, '');
    if (value) {
      if (index !== lastNonEmpty) value += ' ';
      out += value;
    }
  });
  return out;
}

// ---------------------------------------------------------------------------
// Static evaluation of module constants (strings, templates, arrays, objects).
// ---------------------------------------------------------------------------
function createEvaluator(sourceFile) {
  const declarations = new Map();
  const visit = (node) => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      if (!declarations.has(node.name.text)) declarations.set(node.name.text, node.initializer);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  const evaluating = new Set();

  function evaluate(node, scope = new Map()) {
    if (!node) return NOT_STATIC;
    if (ts.isParenthesizedExpression(node) || ts.isAsExpression(node) || ts.isSatisfiesExpression?.(node) || ts.isTypeAssertionExpression?.(node)) {
      return evaluate(node.expression, scope);
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (ts.isTemplateExpression(node)) {
      let out = node.head.text;
      for (const span of node.templateSpans) {
        const value = evaluate(span.expression, scope);
        if (value === NOT_STATIC || typeof value === 'object') return NOT_STATIC;
        out += String(value) + span.literal.text;
      }
      return out;
    }
    if (ts.isIdentifier(node)) {
      if (scope.has(node.text)) return scope.get(node.text);
      const init = declarations.get(node.text);
      if (!init || evaluating.has(node.text)) return NOT_STATIC;
      evaluating.add(node.text);
      try { return evaluate(init, new Map()); } finally { evaluating.delete(node.text); }
    }
    if (ts.isPropertyAccessExpression(node)) {
      const target = evaluate(node.expression, scope);
      if (target === NOT_STATIC || target === null || typeof target !== 'object') return NOT_STATIC;
      return Object.hasOwn(target, node.name.text) ? target[node.name.text] : NOT_STATIC;
    }
    if (ts.isArrayLiteralExpression(node)) {
      const values = node.elements.map((element) => evaluate(element, scope));
      return values.includes(NOT_STATIC) ? NOT_STATIC : values;
    }
    if (ts.isObjectLiteralExpression(node)) {
      const out = {};
      for (const property of node.properties) {
        if (ts.isPropertyAssignment(property)) {
          const key = ts.isIdentifier(property.name) || ts.isStringLiteral(property.name) ? property.name.text : null;
          if (key === null) return NOT_STATIC;
          const value = evaluate(property.initializer, scope);
          if (value === NOT_STATIC) return NOT_STATIC;
          out[key] = value;
        } else if (ts.isShorthandPropertyAssignment(property)) {
          const value = evaluate(property.name, scope);
          if (value === NOT_STATIC) return NOT_STATIC;
          out[property.name.text] = value;
        } else {
          return NOT_STATIC;
        }
      }
      return out;
    }
    return NOT_STATIC;
  }
  return { evaluate, declarations };
}

// ---------------------------------------------------------------------------
// Extraction
// ---------------------------------------------------------------------------
function tagNameOf(node) {
  const opening = ts.isJsxElement(node) ? node.openingElement : node;
  return opening.tagName.getText();
}
const attributesOf = (node) => (ts.isJsxElement(node) ? node.openingElement : node).attributes.properties;
const childrenOf = (node) => (ts.isJsxElement(node) || ts.isJsxFragment(node) ? [...node.children] : []);
const isElement = (node) => ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node);
const isComponentName = (name) => /^[A-Z]/.test(name) || name.includes('.');

function findDefaultComponentReturn(sourceFile) {
  let result = null;
  const findReturn = (body) => {
    let found = null;
    const visit = (node) => {
      if (found) return;
      if (ts.isReturnStatement(node) && node.expression) {
        let expression = node.expression;
        while (ts.isParenthesizedExpression(expression)) expression = expression.expression;
        if (ts.isJsxElement(expression) || ts.isJsxFragment(expression) || ts.isJsxSelfClosingElement(expression)) found = expression;
      }
      if (!ts.isFunctionLike(node) || node === body) ts.forEachChild(node, visit);
    };
    visit(body);
    return found;
  };
  for (const statement of sourceFile.statements) {
    const modifiers = ts.canHaveModifiers(statement) ? ts.getModifiers(statement) ?? [] : [];
    const isDefault = modifiers.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword);
    if (ts.isFunctionDeclaration(statement) && isDefault && statement.body) result = findReturn(statement.body);
  }
  return result;
}

/**
 * Extract a schemaVersion 2 source document from TSX source text.
 * @param {string} code TSX source
 * @param {{ fileName?: string, sourcePath: string, previous?: object }} options
 */
export function extractFromTsx(code, { fileName = 'page.tsx', sourcePath, previous = null } = {}) {
  const sourceFile = ts.createSourceFile(fileName, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const { evaluate } = createEvaluator(sourceFile);
  const units = [];
  const review = [];
  const lineOf = (node) => sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;
  const flag = (node, where, reason) => review.push({ line: node ? lineOf(node) : null, where, reason });

  const parseDiagnostics = sourceFile.parseDiagnostics ?? [];
  for (const diagnostic of parseDiagnostics) {
    flag(null, 'file', `TypeScript parse error: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, ' ')}`);
  }

  // --- metadata -----------------------------------------------------------
  const metadataInit = sourceFile.statements
    .filter(ts.isVariableStatement)
    .flatMap((s) => [...s.declarationList.declarations])
    .find((d) => ts.isIdentifier(d.name) && d.name.text === 'metadata')?.initializer;
  if (metadataInit) {
    const meta = evaluate(metadataInit);
    if (meta === NOT_STATIC) {
      flag(metadataInit, 'metadata', 'metadata object is not fully static; title/description need manual extraction');
    } else {
      const title = typeof meta.title === 'string' ? meta.title : meta.title?.default ?? meta.title?.absolute;
      if (typeof title === 'string') units.push(makeUnit({ kind: 'meta', tag: 'title', anchor: 'meta', path: 'metadata.title', origin: 'metadata.title', text: title }));
      if (typeof meta.description === 'string') units.push(makeUnit({ kind: 'meta', tag: 'description', anchor: 'meta', path: 'metadata.description', origin: 'metadata.description', text: meta.description }));
      for (const section of ['openGraph', 'twitter']) {
        for (const key of ['title', 'description']) {
          const value = meta[section]?.[key];
          if (typeof value === 'string' && value !== title && value !== meta.description) {
            units.push(makeUnit({ kind: 'meta', tag: `${section}-${key}`, anchor: 'meta', path: `metadata.${section}.${key}`, origin: `metadata.${section}.${key}`, text: value }));
          }
        }
      }
    }
  } else {
    flag(null, 'metadata', 'no static `export const metadata` found');
  }

  const root = findDefaultComponentReturn(sourceFile);
  if (!root) {
    flag(null, 'component', 'default export component returning JSX was not found');
    return finish();
  }

  const isInlineOnly = (children, scope) => children.every((child) => {
    if (ts.isJsxText(child)) return true;
    if (ts.isJsxExpression(child)) {
      if (!child.expression) return true;
      const value = evaluate(child.expression, scope);
      return value !== NOT_STATIC && (typeof value === 'string' || typeof value === 'number');
    }
    if (isElement(child)) {
      const name = tagNameOf(child);
      return INLINE_TAGS.has(name) && isInlineOnly(childrenOf(child), scope);
    }
    return false;
  });
  const hasText = (children, scope) => children.some((child) => {
    if (ts.isJsxText(child)) return cleanJsxText(child.text).trim() !== '';
    if (ts.isJsxExpression(child) && child.expression) {
      const value = evaluate(child.expression, scope);
      return (typeof value === 'string' && value.trim() !== '') || typeof value === 'number';
    }
    if (isElement(child)) return hasText(childrenOf(child), scope);
    return false;
  });

  function staticAttributes(node, scope, where) {
    const attrs = {};
    for (const attribute of attributesOf(node)) {
      if (!ts.isJsxAttribute(attribute)) {
        flag(attribute, where, 'spread attributes cannot be locked statically');
        continue;
      }
      const name = attribute.name.getText();
      if (name === 'key') continue;
      const init = attribute.initializer;
      if (!init) attrs[name] = true;
      else if (ts.isStringLiteral(init)) attrs[name] = init.text;
      else if (ts.isJsxExpression(init)) {
        const value = evaluate(init.expression, scope);
        if (value === NOT_STATIC || (value !== null && typeof value === 'object')) {
          attrs[name] = { dynamic: init.expression?.getText(sourceFile) ?? '' };
          flag(attribute, where, `attribute ${name} is dynamic and was locked as an expression`);
        } else {
          attrs[name] = value;
        }
      }
    }
    return attrs;
  }

  function serializeInline(children, scope, where, counters, placeholders) {
    let text = '';
    for (const child of children) {
      if (ts.isJsxText(child)) {
        text += decodeJsxEntities(cleanJsxText(child.text), (reason) => flag(child, where, reason));
      } else if (ts.isJsxExpression(child)) {
        if (!child.expression) continue;
        const value = evaluate(child.expression, scope);
        text += String(value);
      } else if (isElement(child)) {
        const name = tagNameOf(child);
        const tag = INLINE_TAGS.get(name);
        counters[tag] = (counters[tag] ?? 0) + 1;
        const id = `${tag}${counters[tag]}`;
        const attrs = staticAttributes(child, scope, where);
        if (name === 'Link') attrs.component = 'Link';
        placeholders[id] = { tag, attrs };
        if (ts.isJsxSelfClosingElement(child) || childrenOf(child).length === 0) {
          text += `{${id}/}`;
        } else {
          text += `{${id}}${serializeInline(childrenOf(child), scope, where, counters, placeholders)}{/${id}}`;
        }
      }
    }
    return text;
  }

  function unitFromElement({ node, tag, children, scope, anchor, group, path, inArticle, origin, wrapperAttrs }) {
    const placeholders = {};
    let text = serializeInline(children, scope, path, {}, placeholders);
    if (/[{}]/.test(text.replace(/\{\/?[a-z]+[0-9]+\/?\}/g, ''))) {
      flag(node, path, 'literal "{" or "}" in text would be confused with placeholders');
    }
    text = text.replace(/\s+/g, ' ').trim();
    if (!text) return null;
    const unit = makeUnit({ kind: 'block', tag, anchor, group, path, origin, text, placeholders, inArticle, wrapperAttrs });
    units.push(unit);
    return unit;
  }

  function anchorFor(tag, attrs, parentAnchor) {
    if (typeof attrs.id === 'string') return slug(attrs.id);
    if (typeof attrs['aria-labelledby'] === 'string') return slug(attrs['aria-labelledby']);
    if (typeof attrs['aria-label'] === 'string') return slug(attrs['aria-label']);
    if (['header', 'aside', 'footer', 'nav', 'figure', 'table'].includes(tag)) return parentAnchor === 'page' ? tag : `${parentAnchor}-${tag}`;
    return parentAnchor;
  }

  function walk(node, ctx) {
    if (ts.isJsxText(node)) {
      const text = cleanJsxText(node.text).trim();
      if (text) {
        flag(node, ctx.path, `text directly inside a structural element was extracted as its own unit: "${text.slice(0, 40)}"`);
        const unit = makeUnit({ kind: 'block', tag: '#text', anchor: ctx.anchor, group: ctx.group, path: ctx.path, origin: 'jsx', text, placeholders: {}, inArticle: ctx.inArticle, needsReview: true });
        units.push(unit);
        return { unit: unit.key };
      }
      return null;
    }
    if (ts.isJsxExpression(node)) {
      if (!node.expression) return null;
      const expression = node.expression;
      const value = evaluate(expression, ctx.scope);
      if (typeof value === 'string' || typeof value === 'number') {
        if (String(value).trim() === '') return null;
        flag(node, ctx.path, 'text expression directly inside a structural element was extracted as its own unit');
        const unit = makeUnit({ kind: 'block', tag: '#text', anchor: ctx.anchor, group: ctx.group, path: ctx.path, origin: expression.getText(sourceFile), text: String(value).trim(), placeholders: {}, inArticle: ctx.inArticle, needsReview: true });
        units.push(unit);
        return { unit: unit.key };
      }
      if (ts.isCallExpression(expression) && ts.isPropertyAccessExpression(expression.expression) && expression.expression.name.text === 'map') {
        const listName = expression.expression.expression.getText(sourceFile);
        const items = evaluate(expression.expression.expression, ctx.scope);
        const callback = expression.arguments[0];
        if (!Array.isArray(items) || !callback || !(ts.isArrowFunction(callback) || ts.isFunctionExpression(callback)) ||
            callback.parameters.length < 1 || !ts.isIdentifier(callback.parameters[0].name)) {
          flag(node, ctx.path, `list ${listName}.map(...) is not a static array with a simple callback; not extracted`);
          return { review: expression.getText(sourceFile).slice(0, 80) };
        }
        let body = callback.body;
        if (ts.isBlock(body)) {
          const returned = body.statements.find(ts.isReturnStatement)?.expression;
          if (body.statements.length !== 1 || !returned) {
            flag(node, ctx.path, `list ${listName}.map(...) callback has logic besides a single return; not extracted`);
            return { review: listName };
          }
          body = returned;
        }
        while (ts.isParenthesizedExpression(body)) body = body.expression;
        const param = callback.parameters[0].name.text;
        const indexParam = callback.parameters[1] && ts.isIdentifier(callback.parameters[1].name) ? callback.parameters[1].name.text : null;
        const children = items.map((item, index) => {
          const scope = new Map(ctx.scope);
          scope.set(param, item);
          if (indexParam) scope.set(indexParam, index);
          let keyValue = index;
          if (isElement(body)) {
            const keyAttribute = attributesOf(body).find((a) => ts.isJsxAttribute(a) && a.name.getText() === 'key');
            const evaluated = keyAttribute?.initializer && ts.isJsxExpression(keyAttribute.initializer) ? evaluate(keyAttribute.initializer.expression, scope) : NOT_STATIC;
            if (evaluated === NOT_STATIC) flag(body, ctx.path, `list ${listName} items have no static key; position is used instead`);
            else keyValue = evaluated;
          }
          return walk(body, {
            ...ctx,
            scope,
            anchor: `${ctx.anchor}-${slug(listName)}-${slug(keyValue)}`,
            // Items of one list share a matching group, so an item whose key
            // (e.g. its href) changed can still be matched to its old ID.
            group: `${ctx.anchor}-${slug(listName)}`,
            path: `${ctx.path}>${listName}[${index}]`,
            origin: `data:${listName}[${index}]`,
          });
        });
        return { list: listName, children: children.filter(Boolean) };
      }
      flag(node, ctx.path, `dynamic expression {${expression.getText(sourceFile).slice(0, 60)}} was not extracted`);
      return { review: expression.getText(sourceFile).slice(0, 80) };
    }
    if (ts.isJsxFragment(node)) {
      return { fragment: true, children: childrenOf(node).map((c) => walk(c, ctx)).filter(Boolean) };
    }
    if (!isElement(node)) return null;

    const name = tagNameOf(node);
    const children = childrenOf(node);
    const attrs = staticAttributes(node, ctx.scope, ctx.path);
    const index = (ctx.counter[name] = (ctx.counter[name] ?? 0) + 1);
    const path = `${ctx.path}>${name}${typeof attrs.id === 'string' ? `#${attrs.id}` : `[${index}]`}`;
    const tag = INLINE_TAGS.get(name) ?? name;
    const anchor = anchorFor(tag, attrs, ctx.anchor);
    const inArticle = ctx.inArticle || name === 'article';

    // Translatable attribute values become their own units.
    const attributeUnits = {};
    for (const attribute of TRANSLATABLE_ATTRIBUTES) {
      if (typeof attrs[attribute] === 'string' && attrs[attribute].trim()) {
        const unit = makeUnit({ kind: 'attr', tag: `${tag}@${attribute}`, anchor, group: ctx.group, path: `${path}@${attribute}`, origin: ctx.origin ?? 'jsx', text: attrs[attribute].trim(), placeholders: {}, inArticle, wrapperAttrs: meaningfulAttributes(attrs) });
        units.push(unit);
        attributeUnits[attribute] = unit.key;
      }
    }

    if (isComponentName(name) && name !== 'Link') {
      if (hasText(children, ctx.scope)) flag(node, path, `component <${name}> has text children that were not extracted`);
      else if (!['SiteHeader', 'SiteFooter', 'JsonLd'].includes(name)) flag(node, path, `component <${name}> renders its own content; check it separately`);
      if (name === 'JsonLd') flag(node, path, 'structured data (JSON-LD) must be generated per locale; its strings are not translated by this extractor');
      return { component: name, attrs, attributeUnits };
    }

    const childCtx = { ...ctx, anchor, path, inArticle, counter: {}, origin: ctx.origin };
    if ((BLOCK_TAGS.has(tag) || INLINE_TAGS.has(name) || isInlineOnly(children, ctx.scope)) && isInlineOnly(children, ctx.scope) && hasText(children, ctx.scope)) {
      const unit = unitFromElement({ node, tag, children, scope: ctx.scope, anchor, group: ctx.group, path, inArticle, origin: ctx.origin ?? 'jsx', wrapperAttrs: attrs });
      return { element: tag, attrs, attributeUnits, unit: unit?.key ?? null };
    }
    if (BLOCK_TAGS.has(tag) && hasText(children, ctx.scope) && !isInlineOnly(children, ctx.scope)) {
      flag(node, path, `<${tag}> mixes text with block elements or dynamic content; split by hand`);
    }
    return {
      element: tag,
      attrs,
      attributeUnits,
      children: children.map((child) => walk(child, childCtx)).filter(Boolean),
    };
  }

  const structure = walk(root, { anchor: 'page', path: 'page', scope: new Map(), inArticle: false, counter: {}, origin: null });
  return finish(structure);

  function makeUnit({ kind, tag, anchor, group = null, path, origin, text, placeholders = {}, inArticle = false, wrapperAttrs = null, needsReview = false }) {
    const plain = plainText(text);
    const protect = [...new Set([...(plain.match(HANGUL_RUN) ?? []), ...PROTECTED_WORDS.filter((w) => plain.includes(w))])];
    const translate = /[A-Za-z]/.test(plain.replace(HANGUL_RUN, '').replace(/\b(?:HAEMIL)\b/g, ''));
    const lockedPlaceholders = Object.fromEntries(Object.entries(placeholders).map(([k, v]) => [k, v]));
    const unitAttrs = lockedAttributes(wrapperAttrs);
    // The hash covers the text, the unit's own meaningful attributes (a standalone
    // link's href, an image's src for its alt text) and every placeholder's
    // meaningful attributes. Presentation attributes are deliberately excluded.
    const hashInput = [
      tag,
      text,
      meaningfulAttributes(wrapperAttrs),
      Object.fromEntries(Object.entries(lockedPlaceholders).map(([k, v]) => [k, { tag: v.tag, attrs: meaningfulAttributes(v.attrs) }])),
    ];
    return {
      key: `${anchor}|${tag}|${text}`,
      kind,
      tag,
      anchor,
      group: group ?? anchor,
      path,
      origin,
      text,
      attrs: unitAttrs,
      placeholders: lockedPlaceholders,
      hash: contentHash(JSON.stringify(hashInput)),
      translate,
      protect,
      firstPerson: kind !== 'meta' && FIRST_PERSON.test(plain.replace(/“[^”]*”|"[^"]*"/g, '')),
      inArticle,
      needsReview,
    };
  }

  function finish(structure = null) {
    const { ids, notes } = assignIds(units, previous);
    review.push(...notes);
    const keyToId = new Map(units.map((unit, i) => [unit.key, ids[i]]));
    const replaceKeys = (node) => {
      if (!node || typeof node !== 'object') return node;
      if (Array.isArray(node)) return node.map(replaceKeys);
      const out = {};
      for (const [k, v] of Object.entries(node)) {
        if (k === 'unit' && typeof v === 'string') out.unit = keyToId.get(v) ?? null;
        else if (k === 'attributeUnits') out.attributeUnits = Object.fromEntries(Object.entries(v).map(([a, key]) => [a, keyToId.get(key)]));
        else out[k] = replaceKeys(v);
      }
      return out;
    };
    return {
      schemaVersion: SCHEMA_VERSION,
      sourceLocale: 'en',
      sourcePath,
      sourceFile: fileName,
      extractor: EXTRACTOR_VERSION,
      units: units.map((unit, i) => {
        const { key, ...rest } = unit;
        void key;
        return { id: ids[i], ...rest };
      }),
      review,
      structure: replaceKeys(structure),
    };
  }
}

export function plainText(text) {
  return text.replace(/\{\/?[a-z]+[0-9]+\/?\}/g, '');
}

// ---------------------------------------------------------------------------
// Stable IDs: content-derived base IDs, reconciled against the previous
// snapshot so moved blocks keep their ID and edited blocks keep their ID
// (their hash changes, which marks existing translations as stale).
// ---------------------------------------------------------------------------
const words = (text) => new Set(plainText(text).toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []);
function similarity(a, b) {
  const x = words(a);
  const y = words(b);
  if (!x.size && !y.size) return 1;
  let shared = 0;
  for (const w of x) if (y.has(w)) shared += 1;
  return shared / (x.size + y.size - shared);
}

export function assignIds(units, previous) {
  const ids = new Array(units.length).fill(null);
  const ambiguous = new Set();
  const used = new Set();
  const notes = [];
  const prevUnits = Array.isArray(previous?.units) ? previous.units : [];
  const take = (i, id) => { ids[i] = id; used.add(id); };
  const note = (i, reason) => {
    ambiguous.add(i);
    notes.push({ line: null, where: units[i].path, reason: `ambiguous ID match (${reason}); a new ID was assigned — map the old translation by hand` });
  };

  // 1) Identical content keeps its ID. Same-anchor pairs are matched first; a
  //    remaining one-to-one pair is a moved block. Anything else is ambiguous.
  const hashes = new Set(units.map((u) => u.hash));
  for (const hash of hashes) {
    const fresh = units.map((u, i) => (u.hash === hash ? i : -1)).filter((i) => i >= 0);
    const old = prevUnits.filter((p) => p.hash === hash);
    if (!old.length) continue;
    for (const i of fresh) {
      const sameAnchorNew = fresh.filter((j) => units[j].anchor === units[i].anchor);
      const sameAnchorOld = old.filter((p) => p.anchor === units[i].anchor && !used.has(p.id));
      if (sameAnchorNew.length === 1 && sameAnchorOld.length === 1) take(i, sameAnchorOld[0].id);
    }
    const restNew = fresh.filter((i) => !ids[i]);
    const restOld = old.filter((p) => !used.has(p.id));
    if (restNew.length === 1 && restOld.length === 1) take(restNew[0], restOld[0].id);
    else if (restNew.length && restOld.length) {
      for (const i of restNew) note(i, `identical text also existed as ${restOld.map((p) => p.id).join(', ')}`);
    }
  }

  // 2) Edited text in the same anchor and tag keeps its ID only when one old
  //    unit is clearly the closest and no other new unit claims it.
  const best = new Map();
  units.forEach((unit, i) => {
    if (ids[i] || ambiguous.has(i)) return;
    const candidates = prevUnits
      .filter((p) => !used.has(p.id) && p.tag === unit.tag && ((p.group ?? p.anchor) === unit.group || p.anchor === unit.anchor))
      .map((p) => ({ id: p.id, score: similarity(p.text, unit.text) }))
      .filter((c) => c.score >= 0.5)
      .sort((a, b) => b.score - a.score);
    if (!candidates.length) return;
    if (candidates[1] && candidates[1].score >= candidates[0].score - 0.15) {
      note(i, `edited text is about as close to ${candidates.slice(0, 2).map((c) => c.id).join(' and ')}`);
      return;
    }
    best.set(i, candidates[0].id);
  });
  const claims = new Map();
  for (const [i, id] of best) claims.set(id, [...(claims.get(id) ?? []), i]);
  for (const [id, claimants] of claims) {
    if (claimants.length === 1) take(claimants[0], id);
    else for (const i of claimants) note(i, `${claimants.length} edited blocks are closest to ${id}`);
  }

  // 3) Everything else gets a new content-derived ID (independent of order).
  units.forEach((unit, i) => {
    if (ids[i]) return;
    const base = `${unit.anchor}-${slug(unit.tag)}-${unit.hash.slice(0, 8)}`;
    let id = base;
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
    take(i, id);
  });
  return { ids, notes };
}

/**
 * Compare a schemaVersion 2 translation with the current source:
 * current = same ID and hash, stale = same ID but the English unit changed,
 * missing = no translation yet, unknown = translation for a unit that no longer exists.
 */
export function translationStatus(source, translation) {
  const sourceById = new Map(source.units.map((u) => [u.id, u]));
  const translated = new Map((translation?.units ?? []).map((u) => [u.id, u]));
  const status = { current: [], stale: [], missing: [], unknown: [] };
  for (const unit of source.units) {
    const t = translated.get(unit.id);
    if (!t) status.missing.push(unit.id);
    else if (t.sourceHash !== unit.hash) status.stale.push(unit.id);
    else status.current.push(unit.id);
  }
  for (const id of translated.keys()) if (!sourceById.has(id)) status.unknown.push(id);
  return status;
}

// ---------------------------------------------------------------------------
// Placeholder translations: validation and rendering.
// ---------------------------------------------------------------------------
const PLACEHOLDER = /\{(\/?)([a-z]+[0-9]+)(\/?)\}/g;

function placeholderTree(text) {
  const stack = [{ name: null, children: [] }];
  const errors = [];
  for (const [, closing, name, selfClosing] of text.matchAll(PLACEHOLDER)) {
    if (selfClosing) stack.at(-1).children.push({ name, children: [], self: true });
    else if (!closing) {
      const node = { name, children: [] };
      stack.at(-1).children.push(node);
      stack.push(node);
    } else if (stack.at(-1).name !== name) {
      errors.push(`closing {/${name}} does not match the open placeholder`);
    } else {
      stack.pop();
    }
  }
  if (stack.length !== 1) errors.push('unclosed placeholder');
  return { tree: stack[0], errors };
}

function shape(node) {
  return `${node.name ?? 'root'}${node.self ? '/' : ''}(${node.children.map(shape).sort().join(',')})`;
}

/** Validate a translated unit text against its English unit. */
export function validateUnitText(unit, translated) {
  const problems = [];
  if (typeof translated !== 'string' || !translated.trim()) return ['empty translation'];
  const source = placeholderTree(unit.text);
  const target = placeholderTree(translated);
  problems.push(...target.errors);
  const names = (text) => [...text.matchAll(PLACEHOLDER)].map((m) => m[2]);
  for (const name of new Set(names(translated))) {
    if (!Object.hasOwn(unit.placeholders, name)) problems.push(`unknown placeholder {${name}}`);
  }
  if (!target.errors.length && shape(source.tree) !== shape(target.tree)) {
    problems.push('placeholders are missing, duplicated or nested differently');
  }
  const stripped = translated.replace(PLACEHOLDER, '');
  if (/[{}]/.test(stripped)) problems.push('stray "{" or "}" outside placeholders');
  if (/<\/?[A-Za-z!?]/.test(stripped)) problems.push('HTML markup is not allowed in translation text');
  for (const term of unit.protect ?? []) {
    if (!translated.includes(term)) problems.push(`protected term missing: ${term}`);
  }
  return problems;
}

/**
 * Non-blocking review notes for a structurally valid translation: things a
 * human must look at because they can be correct in another language.
 */
export function reviewNotes(unit, translated) {
  const notes = [];
  const order = (text) => [...text.matchAll(PLACEHOLDER)].filter((m) => !m[1]).map((m) => m[2]).join(',');
  if (order(unit.text) !== order(translated)) {
    notes.push('placeholder order differs from English: check that each link/emphasis still wraps the right words');
  }
  const numbers = (text) => (plainText(text).match(/[0-9]+(?:[.,][0-9]+)*/g) ?? []).sort().join(' ');
  if (numbers(unit.text) !== numbers(translated)) notes.push('numbers differ from English: confirm years, ages, amounts and times');
  return notes;
}

const escapeHtml = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Render unit text to HTML from the trusted English placeholder definitions.
 * Text is always escaped; only attributes from the source unit are emitted.
 */
export function renderUnitHtml(unit, text = unit.text, { attributes = V1_ATTRIBUTES } = {}) {
  const problems = text === unit.text ? [] : validateUnitText(unit, text);
  if (problems.length) throw new Error(`cannot render invalid translation: ${problems.join('; ')}`);
  let html = '';
  let last = 0;
  for (const match of text.matchAll(PLACEHOLDER)) {
    html += escapeHtml(text.slice(last, match.index));
    last = match.index + match[0].length;
    const [, closing, name, selfClosing] = match;
    const def = unit.placeholders[name];
    if (closing) { html += `</${def.tag}>`; continue; }
    const attrs = Object.entries(def.attrs)
      .filter(([k, v]) => attributes.has(k) && typeof v === 'string')
      .map(([k, v]) => ` ${k}="${escapeHtml(v)}"`).join('');
    html += selfClosing ? `<${def.tag}${attrs}>` : `<${def.tag}${attrs}>`;
  }
  html += escapeHtml(text.slice(last));
  return html;
}

/** schemaVersion 1 view (PR #86 contract) of a schemaVersion 2 source. */
/** schemaVersion 1 HTML for one unit, with its own locked attributes on the wrapper. */
export function unitToV1Html(unit, text = unit.text) {
  const tag = /^[a-z][a-z0-9]*$/.test(unit.tag) ? unit.tag : 'p';
  const attrs = Object.entries(unit.attrs ?? {})
    .filter(([k, v]) => V1_ATTRIBUTES.has(k) && typeof v === 'string')
    .map(([k, v]) => ` ${k}="${escapeHtml(v)}"`).join('');
  return `<${tag}${attrs}>${renderUnitHtml(unit, text)}</${tag}>`;
}

export function toSchemaV1(source) {
  return {
    schemaVersion: 1,
    sourceLocale: 'en',
    sourcePath: source.sourcePath,
    blocks: source.units
      .filter((unit) => unit.kind === 'block' && unit.translate)
      .map((unit) => ({ id: unit.id, html: unitToV1Html(unit) })),
  };
}

// ---------------------------------------------------------------------------
// Human comparison against the built English HTML (text coverage only; this
// is a report aid, not a structural HTML parser).
// ---------------------------------------------------------------------------
const decodeHtmlText = (value) => value
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(Number.parseInt(h, 16)))
  .replace(/&#([0-9]+);/g, (_, d) => String.fromCodePoint(Number.parseInt(d, 10)))
  .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, n) => ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' })[n]);
const normalizeSpace = (value) => value.replace(/[\s\u00a0]+/g, ' ').trim();

export function compareWithBuiltHtml(source, html) {
  const start = html.indexOf('<article');
  const end = html.indexOf('</article>');
  if (start < 0 || end < 0) return { error: 'no <article> element found in built HTML' };
  const article = html.slice(start, end)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ')
    // Block-level boundaries split segments; inline tags (a, em, strong, ...) do not.
    .replace(/<\/?(?:p|h[1-6]|li|td|th|caption|div|section|header|aside|tr|table|thead|tbody|ul|ol|nav|figure|figcaption|blockquote)\b[^>]*>/gi, ' \u0000 ');
  const text = normalizeSpace(decodeHtmlText(article.replace(/<[^>]*>/g, '')));
  const segments = text.split('\u0000').map(normalizeSpace).filter(Boolean);
  const remaining = [...segments];
  const results = source.units.filter((u) => u.inArticle && u.kind !== 'attr').map((unit) => {
    const plain = normalizeSpace(plainText(unit.text));
    const index = remaining.findIndex((segment) => segment === plain);
    if (index >= 0) { remaining.splice(index, 1); return { id: unit.id, status: 'exact' }; }
    const contained = remaining.findIndex((segment) => segment.includes(plain));
    if (contained >= 0) {
      // Adjacent inline items (e.g. a grid of links) share one text segment.
      remaining[contained] = remaining[contained].replace(plain, ' ');
      return { id: unit.id, status: 'inside-larger-segment' };
    }
    return { id: unit.id, status: 'not-found' };
  });
  return { segments: segments.length, results, uncovered: remaining.map(normalizeSpace).filter((rest) => /[\p{L}\p{N}]/u.test(rest)) };
}

// ---------------------------------------------------------------------------
// Markdown report for side-by-side human review.
// ---------------------------------------------------------------------------
export function buildReport(source, comparison = null) {
  const lines = [];
  const cell = (value) => String(value ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
  const byKind = source.units.reduce((acc, u) => ({ ...acc, [u.kind]: (acc[u.kind] ?? 0) + 1 }), {});
  lines.push(`# Extraction report — ${source.sourcePath}`, '');
  lines.push(`- Source file: \`${source.sourceFile}\``, `- Extractor: ${source.extractor}, schemaVersion ${source.schemaVersion}`);
  lines.push(`- Units: ${source.units.length} (${Object.entries(byKind).map(([k, v]) => `${k} ${v}`).join(', ')})`);
  lines.push(`- Not translated (Korean-only / brand-only): ${source.units.filter((u) => !u.translate).length}`);
  lines.push(`- First-person units: ${source.units.filter((u) => u.firstPerson).length}`);
  lines.push(`- Review items: ${source.review.length}`, '');
  if (comparison && !comparison.error) {
    const count = (s) => comparison.results.filter((r) => r.status === s).length;
    lines.push('## Built HTML comparison', '');
    lines.push(`- Text segments in built <article>: ${comparison.segments}`);
    lines.push(`- Units matched exactly: ${count('exact')}, inside a larger segment: ${count('inside-larger-segment')}, not found: ${count('not-found')}`);
    lines.push(`- Built text not covered by any unit: ${comparison.uncovered.length}`);
    for (const segment of comparison.uncovered) lines.push(`  - "${cell(segment)}"`);
    lines.push('');
  } else if (comparison?.error) {
    lines.push(`## Built HTML comparison`, '', `- ${comparison.error}`, '');
  }
  lines.push('## Review items', '');
  if (!source.review.length) lines.push('- none');
  for (const item of source.review) lines.push(`- line ${item.line ?? '-'} · \`${cell(item.where)}\` — ${cell(item.reason)}`);
  lines.push('', '## Units', '', '| # | ID | Kind / tag | Location | English (text + placeholders) | Placeholders | Flags | Built HTML |', '|---|---|---|---|---|---|---|---|');
  const status = new Map((comparison?.results ?? []).map((r) => [r.id, r.status]));
  source.units.forEach((unit, i) => {
    const own = Object.entries(unit.attrs ?? {}).filter(([k]) => MEANINGFUL_ATTRIBUTES.includes(k.toLowerCase())).map(([k, v]) => `self ${k}=${typeof v === 'string' ? v : 'dynamic'}`);
    const ph = [...own, ...Object.entries(unit.placeholders).map(([k, v]) => `${k}=<${v.tag}${typeof v.attrs.href === 'string' ? ` ${v.attrs.href}` : ''}>`)].join('<br>');
    const flags = [!unit.translate && 'keep', unit.firstPerson && '1st-person', unit.protect.length && `protect: ${unit.protect.join(', ')}`, unit.needsReview && 'REVIEW'].filter(Boolean).join('; ');
    lines.push(`| ${i + 1} | \`${unit.id}\` | ${unit.kind} / ${cell(unit.tag)} | ${cell(unit.origin === 'jsx' ? unit.path.split('>').slice(-2).join('>') : unit.origin)} | ${cell(unit.text)} | ${cell(ph)} | ${cell(flags)} | ${status.get(unit.id) ?? (unit.inArticle ? '-' : 'n/a')} |`);
  });
  return `${lines.join('\n')}\n`;
}

// ---------------------------------------------------------------------------
function cli(argv) {
  const [file, ...rest] = argv;
  const options = {};
  for (let i = 0; i < rest.length; i += 2) options[rest[i]?.replace(/^--/, '')] = rest[i + 1];
  if (!file || !options.path) {
    console.error('Usage: node scripts/i18n/extract.mjs <page.tsx> --path </site/path> [--previous f] [--html f] [--out f] [--v1 f] [--report f]');
    process.exitCode = 2;
    return;
  }
  try {
    const previous = options.previous ? JSON.parse(readFileSync(options.previous, 'utf8')) : null;
    const source = extractFromTsx(readFileSync(file, 'utf8'), { fileName: file, sourcePath: options.path, previous });
    const comparison = options.html ? compareWithBuiltHtml(source, readFileSync(options.html, 'utf8')) : null;
    if (options.out) writeFileSync(options.out, `${JSON.stringify(source, null, 2)}\n`);
    if (options.v1) writeFileSync(options.v1, `${JSON.stringify(toSchemaV1(source), null, 2)}\n`);
    if (options.report) writeFileSync(options.report, buildReport(source, comparison));
    console.log(`units=${source.units.length} review=${source.review.length}${comparison && !comparison.error ? ` notFound=${comparison.results.filter((r) => r.status === 'not-found').length} uncovered=${comparison.uncovered.length}` : ''}`);
    if (!options.out && !options.report && !options.v1) console.log(JSON.stringify(source, null, 2));
  } catch (error) {
    console.error(`FAILED: ${error.message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) cli(process.argv.slice(2));
