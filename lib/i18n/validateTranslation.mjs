/**
 * HAEMIL i18n — runtime validation for schemaVersion 2 translations.
 *
 * Used by the translated page renderer. It has no dependencies, so it can run
 * inside the Next.js build and in `node --test`. The checks mirror the offline
 * pilot tools (scripts/i18n/extract.mjs, PR #87): a translation is rendered
 * only when every unit matches the trusted English source exactly.
 */

const PLACEHOLDER = /\{(\/?)([a-z]+[0-9]+)(\/?)\}/g;

/**
 * Parse unit text into a tree of text runs and placeholders.
 * @param {string} text
 * @returns {{ nodes: Array<{ type: 'text', value: string } | { type: 'placeholder', name: string, self: boolean, children: any[] }>, errors: string[] }}
 */
export function parseUnitText(text) {
  const root = { name: null, children: [] };
  const stack = [root];
  const errors = [];
  let last = 0;
  for (const match of String(text).matchAll(PLACEHOLDER)) {
    const [token, closing, name, selfClosing] = match;
    if (match.index > last) stack.at(-1).children.push({ type: 'text', value: text.slice(last, match.index) });
    last = match.index + token.length;
    if (selfClosing) {
      stack.at(-1).children.push({ type: 'placeholder', name, self: true, children: [] });
    } else if (!closing) {
      const node = { type: 'placeholder', name, self: false, children: [] };
      stack.at(-1).children.push(node);
      stack.push(node);
    } else if (stack.at(-1).name !== name) {
      errors.push(`closing {/${name}} does not match the open placeholder`);
    } else {
      stack.pop();
    }
  }
  if (last < text.length) stack.at(-1).children.push({ type: 'text', value: text.slice(last) });
  if (stack.length !== 1) errors.push('unclosed placeholder');
  return { nodes: root.children, errors };
}

function shape(nodes) {
  return nodes
    .filter((node) => node.type === 'placeholder')
    .map((node) => `${node.name}${node.self ? '/' : ''}(${shape(node.children)})`)
    .sort()
    .join(',');
}

/**
 * Validate one translated unit text against its English source unit.
 * @returns {string[]} problems (empty when valid)
 */
export function validateUnitText(unit, translated) {
  if (typeof translated !== 'string' || !translated.trim()) return ['empty translation'];
  const problems = [];
  const source = parseUnitText(unit.text);
  const target = parseUnitText(translated);
  problems.push(...target.errors);
  const placeholders = unit.placeholders ?? {};
  for (const match of translated.matchAll(PLACEHOLDER)) {
    if (!Object.hasOwn(placeholders, match[2])) problems.push(`unknown placeholder {${match[2]}}`);
  }
  if (!target.errors.length && shape(source.nodes) !== shape(target.nodes)) {
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

function collectStructureUnitIds(node, out) {
  if (Array.isArray(node)) {
    for (const child of node) collectStructureUnitIds(child, out);
    return out;
  }
  if (!node || typeof node !== 'object') return out;
  if (typeof node.unit === 'string') out.push(node.unit);
  for (const id of Object.values(node.attributeUnits ?? {})) out.push(id);
  if (node.children) collectStructureUnitIds(node.children, out);
  return out;
}

/**
 * Validate a whole translation document against the English source.
 *
 * @param {object} source schemaVersion 2 English source (units + structure)
 * @param {object} translation schemaVersion 2 translation
 * @param {{ locale: string, allowedStatuses: string[] }} options
 * @returns {{ ok: boolean, errors: Array<{ id: string, problem: string }>, warnings: Array<{ id: string, problem: string }>, texts: Map<string, string> }}
 */
export function validateTranslation(source, translation, { locale, allowedStatuses }) {
  const errors = [];
  const warnings = [];
  const texts = new Map();
  const fail = (id, problem) => errors.push({ id, problem });

  if (source?.schemaVersion !== 2) fail('(source)', 'source schemaVersion must be 2');
  if (translation?.schemaVersion !== 2) fail('(translation)', 'translation schemaVersion must be 2');
  if (translation?.locale !== locale) fail('(translation)', `locale must be ${locale}`);
  if (translation?.sourcePath !== source?.sourcePath) fail('(translation)', 'sourcePath does not match the source');
  if (!allowedStatuses.includes(translation?.status)) fail('(translation)', `status ${translation?.status} is not allowed here`);
  if (!Array.isArray(source?.units) || !Array.isArray(translation?.units)) {
    fail('(file)', 'units must be arrays');
    return { ok: false, errors, warnings, texts };
  }

  const sourceById = new Map();
  for (const unit of source.units) {
    if (sourceById.has(unit.id)) fail(unit.id, 'duplicate source unit ID');
    sourceById.set(unit.id, unit);
  }
  for (const id of collectStructureUnitIds(source.structure, [])) {
    if (!sourceById.has(id)) fail(id, 'structure references a unit that does not exist');
  }

  for (const entry of translation.units) {
    const unit = sourceById.get(entry?.id);
    if (!unit) { fail(String(entry?.id), 'unknown unit ID'); continue; }
    if (texts.has(entry.id)) { fail(entry.id, 'duplicate translation unit'); continue; }
    if (!unit.translate) { warnings.push({ id: entry.id, problem: 'translate:false unit has a translation; it is ignored' }); continue; }
    if (entry.sourceHash !== unit.hash) { fail(entry.id, 'sourceHash does not match the English source (stale)'); continue; }
    const problems = validateUnitText(unit, entry.text);
    if (problems.length) { for (const p of problems) fail(entry.id, p); continue; }
    texts.set(entry.id, entry.text);
  }
  for (const unit of source.units) {
    if (unit.translate && !texts.has(unit.id) && !errors.some((e) => e.id === unit.id)) fail(unit.id, 'missing translation');
  }
  return { ok: errors.length === 0, errors, warnings, texts };
}
