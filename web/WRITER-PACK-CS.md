# Writer pack: Computer Science (Programming Fundamentals onward)

The one brief a CS writer reads. Your nodes (title, prereqs, math refs, lab modes and programs) are your batch in `web/TREE-SPEC-CS.md` (read only your batch section and the header). For the shape and voice of a finished page run `node tools/excerpt.js <any written id>`; don't read whole content files, other labs, `CLAUDE.md` or the kit source.

## Standard
College CS1 in Python 3, OpenStax *Introduction to Python Programming* order and terms (see the spec header). Every program on a page and in a lab is run by real Python: never type an output you did not get from running the code. `voice: "plain"`. `grade: "College CS 1xx · Programming Fundamentals"`.

## Page file: `web/content/programming-1/<id>.js`
```js
window.ARITH = window.ARITH || {};
ARITH["cs-variables"] = {
  title, short (≤ 60 chars), grade, hours, voice: "plain",
  eyebrow: "Programming Fundamentals · variables",
  hero: `…`,      // ONE short line of code, e.g. <code><span class="c2">x</span> = <span class="c1">5</span></code>
  lede (1–2 sentences), plain (2–4 <p>, the idea without jargon first), formal (1–3 <p> and/or <pre class="code">…</pre>; exact Python rules),
  legend: [{ c: "c1", sym: `…`, name, desc }],   // 3–5, the house colour keys (spec header)
  steps: { title, items: [3–7 HTML steps] },
  example: { prompt, lines: [{ math, note }], answer },   // a worked TRACE: prompt holds the program as <pre class="code">, each line one step (math: <code>a = 3</code>), answer = the output
  why, careers: [{ role, use }] (5–7, real and specific), life: [4–6 strings], fields: [{ name, use }] (3–5),
  prereqWhy: { id: "…" }, unlocksWhy: { id: "…" },   // one per prereq / WRITTEN unlock (validate rejects planned ones)
  mathWhy: { "pa-variables": "…" },                  // one per math ref of the node
  beyond: [{ field, why }] (2–4 later CS fields), mistakes: [{ wrong, fix }] (2–4, real beginner bugs),
  practice: [{ q, a }] (exactly 4, easy → hard; q shows a program in <pre class="code">, a gives the output and why), origin (accurate history, or omit)
};
```
Escaped text (no tags): `careers`, `fields`, `beyond`, `life`, `example.lines[].note`. Everything else is HTML. Backtick strings; never `${` inside them; escape `<` `>` `&` inside code as `&lt;` `&gt;` `&amp;`.
Markup: inline code `<code>…</code>`, blocks `<pre class="code">…</pre>` (4-space indents, output lines `<span class="out">…</span>`), colours `c1`–`c5` per the house keys, defined term `<b>term</b>`, maths in `<span class="m">…</span>` when it is maths. No emoji, links or markdown. Plain short sentences; no em-dash asides, no stock phrases.

## Lab programs: `web/cs-src/<id>.py` → `python3 tools/pytrace.py <id>`
```
# @program swap          (name: letters, digits, -)
# @input 3               stdin lines, before the code (input() echoes like a terminal)
# @file scores.txt       a file the program can open, then its lines as  # | 90
a = int(input("a? "))
```
Writes `web/traces/<id>.js` (`CSTraces["<id>/swap"]`). Re-run after every edit; the check file fails while a trace is stale. Programs may end in an error on purpose (shown in the output pane).

## Lab: one file per batch, `web/labs/cs-<n>.js`
```js
(function(){ const L = window.LABS;
L["cs-variables"] = k => { CSKit.attach(k);
  k.csModes([["trace", "Trace"], ["memory", "Memory"], ["predict", "Predict"]], m => {
    if (m === "trace") return k.trace({ programs: [["cs-variables/swap", "Swap"]], title: "Trace", narr: { "cs-variables/swap": { 3: "…", end: "…" } } });
    if (m === "memory") return k.trace({ programs: [["cs-variables/rebind", "Rebinding"]], view: "memory", title: "Memory" });
    if (m === "predict") return k.predict({ items: [{ key: "cs-variables/rebind", choices: ["7", "5 7"], why: "…" }] });
  });
};
})();
```
Kit (`CSKit.attach(k)` adds): `k.trace({programs: [[key, label]…], view: "vars"|"memory"|"bars"|"vars+bars", bars: {name, marks: {i: "c1"}}, title, narr: {key: {lineNo: html, end: html}} | (step, i, T, key) → html, rows(step, i, T) → [{label, value, c, note}]})` → `{go(i), i, T, key, pause}` (Back/Step/Play/Reset and a Program select when there are several); `k.predict({items: [{key, choices, why}]})` (the real output is added and shuffled); `k.bits({width, signed, value, extra(v, bits) → rows})`; `k.csModes(list, build)`; `k.csro({title, big, rows, landmark, narr})`; `k.guard(list)`. Rules (`k.CR` / `CSRules`, tested in `tests/cs.test.js`): `show(val, heap)`, `watch(T, name)`, `changed(T, i)`, `outAt(T, i)`, `nums(T, i, name)`, `evText`, `toBase fromBase twos fromTwos utf8 shuffle`. Plus the base kit `k` (`k.select`, `k.button`, `k.dom`, `k.setRO`…). A rule a lab needs goes into `CSRules` with a test, never into the lab. Target 2–5 KB per lab: programs + narration + mode list.
Narration: one plain sentence per interesting line (what Python does and why), plus `end`. Readout must not scroll on desktop.

## Saved check: `checks/programming-1/<id>.py`
```python
from cs import *
check("traces", traces_current("cs-variables"))
text("example", run("""
a = 3
b = 5
a, b = b, a
print(a, b)
"""), "5 3\n")
text("practice[0]", run("""…""", inputs=["4"]), "…")      # the page's code typed in, the page's output as expected
out, err = run_err("""…"""); text("practice[3]", out + err, "…NameError: name 'x' is not defined")   # labels must be exactly example / practice[i] to count
check("formal: // floors", value("-7 // 2") == "-4")
```
`text(label, got, want)` compares exactly (use it for output; `same` is for maths). Cover `example`, every `practice[i]` and each rule claimed in `formal`. Then `python3 tools/mathcheck.py --stamp <id>`. Never change a check to pass a wrong page; fix the page.

## Finish each batch (text first, one image per topic last)
1. Device or cloud: `python3 tools/pytrace.py <ids>` then `node tools/finish.js <ids>` → build, validate, mathcheck, labtest. Fix until `FINISH ok`.
2. Cloud: `node tools/finish.js --browser <ids>` → layoutcheck (fix to 0) and one contact sheet per topic, read ONCE; `MODES=` re-shoots only changed modes.
3. Report back in exactly this shape, nothing else:
```
BATCH <name>: <ids>
files: <paths written>
finish: ok | FAIL <step>
checks: <n passed> · layout: 0 · sheets: looked
kit additions: <CSRules/CSKit functions added + tests, or none>
doubts: <anything the reviewer must look at, or none>
```
