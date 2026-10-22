#!/usr/bin/env node
/**
 * Tests for the runtime translation validator (lib/i18n/validateTranslation.mjs).
 *
 *   node --test scripts/i18n/validate.test.mjs
 *
 * Offline: no network, no environment variables, no files outside the
 * repository. The repository root is found from this file's location. It reads
 * the committed Sunbae/Hoobae English source and Japanese translation and
 * never writes anything; every broken case is built from an in-memory copy.
 * The committed translation is a draft before release and "approved" after
 * it (only the status changes); the cases below start from a draft copy.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseUnitText, validateTranslation, validateUnitText } from '../../lib/i18n/validateTranslation.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const REL = 'kpop/what-does-sunbae-and-hoobae-mean-in-kpop.json';
const readJson = (rel) => JSON.parse(readFileSync(path.join(REPO, rel), 'utf8'));
const source = readJson(`content/translations/source/${REL}`);
const committed = readJson(`content/translations/ja/${REL}`);
const ja = { ...committed, status: 'draft' };
const opts = { locale: 'ja', allowedStatuses: ['draft'] };
const clone = () => structuredClone(ja);
const edit = (doc, id, fn) => { const u = doc.units.find((x) => x.id === id); fn(u); return doc; };
const ids = (r) => r.errors.map((e) => `${e.id}|${e.problem}`);

test('the committed ja translation passes with its own status: 71 texts, no errors', () => {
  assert.ok(['draft', 'approved'].includes(committed.status), committed.status);
  const r = validateTranslation(source, committed, { locale: 'ja', allowedStatuses: [committed.status] });
  assert.equal(r.ok, true, ids(r).join('\n'));
  assert.equal(r.texts.size, 71);
  assert.deepEqual(r.warnings, []);
  // The draft copy used below is the same document with status "draft".
  const draft = validateTranslation(source, ja, opts);
  assert.equal(draft.ok, true, ids(draft).join('\n'));
  assert.deepEqual([...draft.texts], [...r.texts], 'same texts');
});

test('stale sourceHash fails', () => {
  const r = validateTranslation(source, edit(clone(), 'header-h1-299cbd58', (u) => { u.sourceHash = '0'.repeat(64); }), opts);
  assert.equal(r.ok, false);
  assert.ok(ids(r).some((x) => x.startsWith('header-h1-299cbd58|sourceHash')));
});

test('unknown, duplicate and missing units fail', () => {
  const doc = clone();
  doc.units.push({ id: 'not-a-unit', sourceHash: 'x', text: 'x' });
  doc.units.push({ ...doc.units[0] });
  doc.units = doc.units.filter((u) => u.id !== 'school-h2-6901001a');
  const r = validateTranslation(source, doc, opts);
  assert.ok(ids(r).includes('not-a-unit|unknown unit ID'));
  assert.ok(ids(r).some((x) => x.endsWith('duplicate translation unit')));
  assert.ok(ids(r).includes('school-h2-6901001a|missing translation'));
});

test('placeholder errors fail: missing, extra, nested, unknown, stray brace', () => {
  const unit = source.units.find((u) => u.id === 'military-p-356bfaab');
  const good = ja.units.find((u) => u.id === unit.id).text;
  assert.deepEqual(validateUnitText(unit, good), []);
  assert.ok(validateUnitText(unit, good.replace('{em1}', '').replace('{/em1}', '')).length);
  assert.ok(validateUnitText(unit, `${good}{em1}x{/em1}`).length);
  assert.ok(validateUnitText(unit, good.replace('{/em1}', '').replace('{/em2}', '{/em2}{/em1}')).length);
  assert.ok(validateUnitText(unit, `${good}{a9}x{/a9}`).some((p) => p.startsWith('unknown placeholder')));
  assert.ok(validateUnitText(unit, `${good} {`).some((p) => p.startsWith('stray')));
});

test('HTML markup and missing protected Hangul fail', () => {
  const unit = source.units.find((u) => u.id === 'quick-answer-p-098b8510');
  const good = ja.units.find((u) => u.id === unit.id).text;
  assert.ok(validateUnitText(unit, `${good}<img src=x onerror=alert(1)>`).some((p) => p.startsWith('HTML')));
  assert.ok(validateUnitText(unit, good.replace('（선배）', '')).some((p) => p.includes('선배')));
});

test('wrong status or locale fails; a translate:false entry is ignored with a warning', () => {
  const approved = clone(); approved.status = 'approved';
  assert.equal(validateTranslation(source, approved, opts).ok, false);
  assert.equal(validateTranslation(source, clone(), { locale: 'ja', allowedStatuses: ['approved'] }).ok, false, 'a draft is not approved');
  assert.equal(validateTranslation(source, approved, { locale: 'ja', allowedStatuses: ['approved'] }).ok, true);
  const ko = clone(); ko.locale = 'ko';
  assert.equal(validateTranslation(source, ko, opts).ok, false);
  const keep = source.units.find((u) => !u.translate);
  const extra = clone(); extra.units.push({ id: keep.id, sourceHash: keep.hash, text: 'x' });
  const r = validateTranslation(source, extra, opts);
  assert.equal(r.ok, true);
  assert.equal(r.warnings.length, 1);
  assert.equal(r.texts.has(keep.id), false);
});

test('a structure reference to a missing unit fails', () => {
  const broken = structuredClone(source);
  broken.units = broken.units.filter((u) => u.id !== 'quick-answer-terms-k5a64f8-p-4b2ff191');
  assert.ok(ids(validateTranslation(broken, ja, opts)).some((x) => x.includes('structure references')));
});

test('parseUnitText keeps text and nesting', () => {
  const { nodes, errors } = parseUnitText('a{em1}b{strong1}c{/strong1}{/em1}d');
  assert.deepEqual(errors, []);
  assert.equal(nodes.length, 3);
  assert.equal(nodes[1].children[1].name, 'strong1');
});
