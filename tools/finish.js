// One command for a writer's finish steps, with a short fixed-format report (instead of four long outputs).
//   node tools/finish.js <id…>            device or cloud: build → validate → mathcheck <ids> → labtest
//   node tools/finish.js --browser <id…>  cloud only: also layoutcheck <ids> and one contact sheet per id (sheet.js)
//   SMOKE=1 adds smoke.js for just these ids (ONLY=…). Exit code 1 if any step fails.
// Report: one line per step (ok / FAIL + up to 12 relevant lines), then "FINISH ok" or "FINISH FAIL".
const { spawnSync } = require('child_process'), path = require('path');
const R = path.join(__dirname, '..'), args = process.argv.slice(2), browser = args.includes('--browser'), ids = args.filter(a => !a.startsWith('--'));
if (!ids.length) { console.error('usage: node tools/finish.js [--browser] <topic-id…>'); process.exit(1); }
const run = (label, cmd, argv, env = {}, pick) => {
  const r = spawnSync(cmd, argv, { cwd: R, encoding: 'utf8', env: Object.assign({}, process.env, env), maxBuffer: 64 << 20 });
  const outText = (r.stdout || '') + (r.stderr || ''), lines = outText.split('\n').filter(Boolean);
  const good = r.status === 0;
  const shown = good ? [lines[lines.length - 1] || ''] : (pick ? lines.filter(pick) : lines).slice(0, 12);
  console.log(`${good ? 'ok  ' : 'FAIL'} ${label}${good ? ': ' + shown[0] : '\n     ' + shown.join('\n     ')}`);
  return good;
};
const mine = l => ids.some(i => l.includes(i)) || /error|Error|FAIL|problem/.test(l) && !/^\s*$/.test(l);
let all = true;
all = run('build', 'node', ['tools/build-web.js']) && all;
all = run('validate', 'node', ['tools/validate.js'], {}, mine) && all;
all = run('mathcheck', 'python3', ['tools/mathcheck.py', ...ids]) && all;
all = run('labtest', 'node', ['tools/labtest.js']) && all;
if (browser) {
  all = run('layoutcheck', 'node', ['tools/layoutcheck.js', ...ids], {}, l => !l.startsWith('ok ')) && all;
  if (process.env.SMOKE) all = run('smoke', 'node', ['tools/smoke.js'], { ONLY: ids.join(',') }) && all;
  all = run('sheet', 'node', ['tools/sheet.js', ...ids]) && all;
  console.log('     sheets: ' + ids.map(i => `/tmp/codex-sheet/${i}.png`).join(' '));
}
console.log(all ? 'FINISH ok' : 'FINISH FAIL');
process.exit(all ? 0 : 1);
