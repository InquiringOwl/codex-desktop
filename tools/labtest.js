// Logic tests for lab rules: checks every combination a lab can produce in code, instead of clicking
// through it in a browser. Test files live in tests/<name>.test.js and use these globals:
//   const MT = load('web/src/kit-music.js').MusicTheory   run browser files in a DOM-free sandbox (window = sandbox)
//   test('name', () => { … })                            one named test; a throw fails it
//   eq(got, want, 'what')                                deep equality (JSON), with a readable message
//   ok(cond, 'what')                                     any true/false fact
// Keep lab rules (spelling, scoring, which answers are right) in DOM-free functions so they can be tested here.
// Run:  node tools/labtest.js            all test files
//       node tools/labtest.js music      files whose name contains "music"
const fs = require('fs'), path = require('path'), vm = require('vm');
const R = path.join(__dirname, '..'), dir = path.join(R, 'tests');
const want = process.argv.slice(2);
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.test.js') && (!want.length || want.some(w => f.includes(w)))).sort() : [];
let pass = 0, checks = 0; const fails = [];
for (const f of files) {
  let current = '';
  const load = (...srcs) => { const ctx = vm.createContext({ console, Math, JSON }); ctx.window = ctx; for (const s of srcs) vm.runInContext(fs.readFileSync(path.join(R, s), 'utf8'), ctx, { filename: s }); return ctx; };
  const eq = (got, exp, what = '') => { checks++; const a = JSON.stringify(got), b = JSON.stringify(exp); if (a !== b) throw new Error(`${what}: got ${a}, want ${b}`); };
  const ok = (c, what = '') => { checks++; if (!c) throw new Error(what || 'condition is false'); };
  const tests = [];
  const test = (name, fn) => tests.push([name, fn]);
  try { vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), { load, eq, ok, test, console, Math, JSON, require }, { filename: f }); }
  catch (e) { fails.push(`${f}: crashed while loading: ${e.message}`); continue; }
  for (const [name, fn] of tests) { current = name; try { fn(); pass++; } catch (e) { fails.push(`${f} › ${name}: ${e.message}`); } }
}
fails.forEach(x => console.log('FAIL ' + x));
console.log(`${files.length} test file(s): ${pass} test(s) passed, ${checks} check(s), ${fails.length} failure(s)`);
process.exit(fails.length ? 1 : 0);
