// Checks the Codex data and content for structural mistakes before a build or release.
// Run: node tools/validate.js        (exit code 1 on any error; warnings don't fail)
// Covers: skill trees (ids, prereqs, cycles, layout), field map, every topic dossier's
// fields and types, raw-HTML tag balance, escaped-text fields, and lab coverage.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { files, R } = require('./build-web.js');

const errors = [], warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

// ---- load data + content (labs need a DOM, so they are scanned as text instead) ----
const ctx = vm.createContext({ console, Math });
ctx.window = ctx;
const dataFiles = files.filter(f => f === 'web/src/data.js' || f.startsWith('web/content/'));
for (const f of dataFiles) {
  try { vm.runInContext(fs.readFileSync(path.join(R, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { err(f, 'failed to load: ' + e.message); }
}
const DB = ctx.DB, T = ctx.ARITH || {};
if (!DB || !DB.trees) { console.error('DB.trees missing, cannot continue'); process.exit(1); }

// ---- content files: web/content/<field>/<id>.js holding exactly ARITH["<id>"] ----
for (const f of dataFiles.filter(f => f.startsWith('web/content/'))) {
  const m = f.match(/^web\/content\/([a-z0-9-]+)\/([a-z0-9-]+)\.js$/);
  if (!m) { err(f, 'content files belong at web/content/<field>/<topic-id>.js'); continue; }
  const ids = [...fs.readFileSync(path.join(R, f), 'utf8').matchAll(/^ARITH\["([a-z0-9-]+)"\]\s*=/gm)].map(x => x[1]);
  if (ids.length !== 1 || ids[0] !== m[2]) err(f, `should define only ARITH["${m[2]}"] (found ${ids.join(', ') || 'none'})`);
  if (DB.trees && !(DB.trees[m[1]] || { nodes: [] }).nodes.some(n => n.id === m[2])) err(f, `"${m[2]}" is not a node of the ${m[1]} tree`);
}

// ---- labs: find every L["id"] = registration ----
const labFiles = files.filter(f => /\/labs\d*\.js$/.test(f) || f.startsWith('web/labs/'));
const labs = {};
for (const f of labFiles) {
  const src = fs.readFileSync(path.join(R, f), 'utf8');
  for (const m of src.matchAll(/^\s*(?:L|LABS|window\.LABS)\[\s*["']([a-z0-9-]+)["']\s*\]\s*=/gm)) {
    if (labs[m[1]]) err(f, `lab "${m[1]}" registered twice (also in ${labs[m[1]]})`);
    labs[m[1]] = f;
  }
}

// ---- trees ----
const node = {};            // id -> {field, ...node}
for (const [field, tree] of Object.entries(DB.trees)) {
  const W = `tree ${field}`;
  if (!Array.isArray(tree.eras) || !Array.isArray(tree.nodes)) { err(W, 'needs eras[] and nodes[]'); continue; }
  const cells = {};
  for (const n of tree.nodes) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(n.id || '')) err(W, `bad id "${n.id}"`);
    if (node[n.id]) err(W, `id "${n.id}" also used in ${node[n.id].field}`);
    node[n.id] = { field, ...n };
    const cell = `${n.col},${n.row}`;
    if (cells[cell]) err(W, `"${n.id}" and "${cells[cell]}" share col/row ${cell}`);
    cells[cell] = n.id;
    if (!Number.isInteger(n.col) || !Number.isInteger(n.row)) err(W, `"${n.id}" col/row must be integers`);
    if (!n.icon) err(W, `"${n.id}" has no icon`);
    if (!Array.isArray(n.chips)) err(W, `"${n.id}" chips must be an array`);
    if (!Array.isArray(n.pre)) err(W, `"${n.id}" pre must be an array`);
    if (!tree.eras.some(e => n.col >= e.from && n.col <= e.to)) err(W, `"${n.id}" col ${n.col} is outside every era`);
  }
}
for (const n of Object.values(node)) {
  const W = `tree ${n.field} / ${n.id}`;
  for (const p of n.pre || []) {
    const q = node[p];
    if (!q) { err(W, `prerequisite "${p}" does not exist`); continue; }
    if (q.field === n.field && q.col >= n.col) err(W, `prerequisite "${p}" is not to its left (col ${q.col} ≥ ${n.col})`);
  }
  if (new Set(n.pre).size !== (n.pre || []).length) err(W, 'duplicate prerequisite');
}
// cycle check
const state = {};
const visit = (id, trail) => {
  if (state[id] === 2) return; if (state[id] === 1) { err('trees', 'prerequisite cycle: ' + [...trail, id].join(' → ')); return; }
  state[id] = 1; for (const p of (node[id] && node[id].pre) || []) if (node[p]) visit(p, [...trail, id]); state[id] = 2;
};
Object.keys(node).forEach(id => visit(id, []));

// ---- field map ----
for (const [id, f] of Object.entries(DB.fields || {})) {
  const W = `field ${id}`;
  for (const p of f.pre || []) if (!DB.fields[p]) err(W, `prerequisite field "${p}" does not exist`);
  if (f.status === 'charted' && !DB.trees[id]) err(W, 'status is "charted" but DB.trees has no tree');
  if (f.status !== 'charted' && DB.trees[id]) err(W, 'has a tree but status is not "charted"');
}
for (const id of Object.keys(DB.trees)) if (!(DB.fields || {})[id]) err(`tree ${id}`, 'no matching DB.fields entry');
for (const g of DB.fieldGroups || []) for (const id of g.ids) if (!DB.fields[id]) err(`fieldGroup ${g.name}`, `unknown field "${id}"`);

// ---- topic dossiers ----
const RAW = ['hero', 'lede', 'plain', 'formal', 'why', 'origin'];  // rendered as HTML
const VOID = new Set(['br', 'hr', 'img', 'wbr']);
function checkHtml(W, key, s) {
  if (typeof s !== 'string') return;
  const stack = [];
  for (const m of s.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/?)>/g)) {
    const [, close, tag0, self] = m, tag = tag0.toLowerCase();
    if (VOID.has(tag) || self) continue;
    if (!close) stack.push(tag);
    else if (stack[stack.length - 1] === tag) stack.pop();
    else { err(W, `${key}: </${tag}> does not match <${stack[stack.length - 1] || 'nothing'}>`); return; }
  }
  if (stack.length) err(W, `${key}: unclosed <${stack.join('>, <')}>`);
  if (/<[a-z]+[^>]*$/i.test(s)) err(W, `${key}: tag cut off at the end`);
  const cls = [...s.matchAll(/class="([^"]*)"/g)].flatMap(m => m[1].split(/\s+/)).filter(c => /^c\d+$/.test(c) && !/^c[1-5]$/.test(c));
  if (cls.length) err(W, `${key}: colour class ${cls[0]} (only c1–c5 exist)`);
}
function checkText(W, key, s) {         // shown escaped, so markup would appear literally
  if (typeof s !== 'string' || !s.trim()) { err(W, `${key}: must be non-empty text`); return; }
  if (/<\/?[a-z][^>]*>/i.test(s)) err(W, `${key}: contains HTML, but this field is escaped text`);
}
const nonEmpty = (W, key, v) => { if (typeof v !== 'string' || !v.trim()) err(W, `${key} is missing or empty`); };
const arr = (W, key, v, min) => { if (!Array.isArray(v)) { err(W, `${key} must be an array`); return false; } if (v.length < min) err(W, `${key} has ${v.length} item(s), expected at least ${min}`); return true; };
// ("undefined" is not flagged: it is a real math word, as in "the slope is undefined")
const JUNK = /\b(TODO|TBD|FIXME|XXX|lorem ipsum)\b|\[object Object\]|\$\{/;

for (const [id, t] of Object.entries(T)) {
  const W = `topic ${id}`;
  const n = node[id];
  if (!n) { err(W, 'has content but is not in any tree'); continue; }
  for (const k of ['title', 'short', 'grade', 'eyebrow', 'hero', 'lede', 'plain', 'formal', 'why']) nonEmpty(W, k, t[k]);
  if (!(typeof t.hours === 'number' && t.hours > 0)) err(W, 'hours must be a positive number');
  if (!['young', 'mixed', 'plain'].includes(t.voice)) err(W, `voice "${t.voice}" must be young, mixed or plain`);
  for (const k of RAW) checkHtml(W, k, t[k]);
  // origin is optional: the brief says to omit it when the history is uncertain

  if (arr(W, 'legend', t.legend, 1)) t.legend.forEach((k, i) => {
    if (!/^c[1-5]$/.test(k.c)) err(W, `legend[${i}].c "${k.c}" must be c1–c5`);
    nonEmpty(W, `legend[${i}].sym`, k.sym); nonEmpty(W, `legend[${i}].name`, k.name); nonEmpty(W, `legend[${i}].desc`, k.desc);
    checkHtml(W, `legend[${i}].sym`, k.sym); checkHtml(W, `legend[${i}].desc`, k.desc);
  });
  if (!t.steps || typeof t.steps !== 'object') err(W, 'steps must be {title, items}');
  else { nonEmpty(W, 'steps.title', t.steps.title); if (arr(W, 'steps.items', t.steps.items, 2)) t.steps.items.forEach((s, i) => { nonEmpty(W, `steps.items[${i}]`, s); checkHtml(W, `steps.items[${i}]`, s); }); }
  const ex = t.example;
  if (!ex || typeof ex !== 'object') err(W, 'example must be {prompt, lines, answer}');
  else {
    nonEmpty(W, 'example.prompt', ex.prompt);
    if (arr(W, 'example.lines', ex.lines, 1)) ex.lines.forEach((l, i) => { nonEmpty(W, `example.lines[${i}].math`, l.math); if (l.note !== undefined && typeof l.note !== 'string') err(W, `example.lines[${i}].note must be text`); });
    if (ex.answer !== undefined) nonEmpty(W, 'example.answer', ex.answer);
  }
  if (arr(W, 'careers', t.careers, 3)) t.careers.forEach((c, i) => { checkText(W, `careers[${i}].role`, c.role); checkText(W, `careers[${i}].use`, c.use); });
  if (arr(W, 'life', t.life, 3)) t.life.forEach((s, i) => checkText(W, `life[${i}]`, s));
  if (arr(W, 'fields', t.fields, 2)) t.fields.forEach((f, i) => { checkText(W, `fields[${i}].name`, f.name); checkText(W, `fields[${i}].use`, f.use); });
  if (arr(W, 'beyond', t.beyond, 1)) t.beyond.forEach((b, i) => { checkText(W, `beyond[${i}].field`, b.field); checkText(W, `beyond[${i}].why`, b.why); });
  if (arr(W, 'mistakes', t.mistakes, 2)) t.mistakes.forEach((m, i) => { nonEmpty(W, `mistakes[${i}].wrong`, m.wrong); nonEmpty(W, `mistakes[${i}].fix`, m.fix); });
  if (arr(W, 'practice', t.practice, 3)) t.practice.forEach((p, i) => { nonEmpty(W, `practice[${i}].q`, p.q); nonEmpty(W, `practice[${i}].a`, p.a); checkHtml(W, `practice[${i}].a`, p.a); });

  // prereqWhy / unlocksWhy must match the tree edges
  const pw = t.prereqWhy || {}, uw = t.unlocksWhy || {};
  const unlocks = Object.values(node).filter(m => (m.pre || []).includes(id)).map(m => m.id);
  for (const k of Object.keys(pw)) if (!n.pre.includes(k)) err(W, `prereqWhy["${k}"] but "${k}" is not a prerequisite`);
  for (const k of Object.keys(uw)) if (!unlocks.includes(k)) err(W, `unlocksWhy["${k}"] but "${k}" does not list this topic as a prerequisite`);
  for (const k of n.pre) if (!pw[k]) warn(W, `no prereqWhy for "${k}"`);
  for (const k of unlocks) if (!uw[k]) warn(W, `no unlocksWhy for "${k}"`);
  for (const [k, v] of Object.entries({ ...pw, ...uw })) checkHtml(W, `why["${k}"]`, v);

  const flat = JSON.stringify(t);
  const j = flat.match(JUNK); if (j) err(W, `contains placeholder text "${j[0]}"`);
}
for (const id of Object.keys(node)) {
  if (!T[id]) err(`tree ${node[id].field} / ${id}`, 'no topic dossier (would show the "coming soon" stub)');
  if (!labs[id]) err(`tree ${node[id].field} / ${id}`, 'no interactive lab');
}
for (const [id, f] of Object.entries(labs)) if (!node[id]) err(f, `lab "${id}" is not in any tree`);

// ---- report ----
const fields = Object.keys(DB.trees).map(k => `${k} ${DB.trees[k].nodes.length}`).join(', ');
if (process.argv.includes('--warnings') || process.env.CI) warnings.forEach(w => console.log('warn  ' + w));
errors.forEach(e => console.log('ERROR ' + e));
console.log(`\n${Object.keys(node).length} topics (${fields}), ${Object.keys(labs).length} labs: ${errors.length} error(s), ${warnings.length} warning(s)` + (warnings.length && !process.argv.includes('--warnings') ? ' (--warnings to list)' : ''));
process.exit(errors.length ? 1 : 0);
