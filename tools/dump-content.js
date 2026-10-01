// Prints every topic's checkable parts as JSON (used by tools/mathcheck.py and by writers).
//   node tools/dump-content.js            all topics
//   node tools/dump-content.js a1-slope   one topic
const fs = require('fs'), path = require('path'), vm = require('vm');
const { files, R } = require('./build-web.js');
const ctx = vm.createContext({}); ctx.window = ctx;
for (const f of files.filter(f => f === 'web/src/data.js' || f.startsWith('web/art/') || f.startsWith('web/content/'))) vm.runInContext(fs.readFileSync(path.join(R, f), 'utf8'), ctx, { filename: f });
const field = {}; for (const [f, t] of Object.entries(ctx.DB.trees)) for (const n of t.nodes) field[n.id] = f;
const want = process.argv.slice(2);
const out = {};
for (const [id, t] of Object.entries(ctx.ARITH)) {
  if (want.length && !want.includes(id)) continue;
  out[id] = { field: field[id], title: t.title, formal: t.formal, steps: t.steps, example: t.example, practice: t.practice, mistakes: t.mistakes, ...(t.stories ? { stories: t.stories } : {}) };
}
process.stdout.write(JSON.stringify(out, null, 1));
