# Writer pack: Mathematics (Algebra II onward)

The one brief a math writer reads. It condenses `CONTENT-BRIEF.md`, `-2`, `-4` and `LAB-BRIEF.md` (open those only if something here is unclear). Your topics, prereqs, unlocks, lab archetype + config and colour keys are in the field's tree spec (e.g. `web/TREE-SPEC-ALGEBRA2.md`) and its data file. For the shape and voice of a finished page run `node tools/excerpt.js a1-rational-eq` (or any written topic); don't read whole content or lab files.

## Standard
College level, standard order and terms. Algebra II ≈ OpenStax *Intermediate Algebra 2e* + *College Algebra 2e* (and Common Core HS Algebra II): "solution set", "interval notation", "multiplicity", "end behavior", "vertical/horizontal/slant asymptote", "removable discontinuity (hole)", "one-to-one", "principal root", "imaginary unit i (i² = −1)", "standard form a + bi". Every number correct; a saved sympy check proves it. `voice: "plain"`. `grade` like `"Grade 11 · college Intermediate Algebra"`.

## Page file: `web/content/<field>/<id>.js`
```js
window.ARITH = window.ARITH || {};
ARITH["a2-complex-ops"] = {
  title, short (≤ 60 chars), grade, hours, voice: "plain",
  eyebrow: "Complex numbers · arithmetic",
  hero: `…`,      // ONE short formula line, e.g. <span class="m">(<span class="c1">3</span> + <span class="c2">2<i>i</i></span>)(1 − <i>i</i>) = 5 − <i>i</i></span>
  lede (1–2 sentences), plain (2–4 <p>, the idea without jargon first), formal (1–3 <p> and/or <div class="display">…</div>),
  legend: [{ c: "c1", sym: `…`, name, desc }],   // 3–5, colours = the lab's colour keys
  steps: { title, items: [3–7 HTML steps] },
  example: { prompt, lines: [{ math, note }], answer },   // worked example, 3–8 lines
  why, careers: [{ role, use }] (5–7, real and specific), life: [4–6 strings], fields: [{ name, use }] (3–5),
  prereqWhy: { id: "…" },  // one per prereq, including ids in other fields
  unlocksWhy: { id: "…" }, // one per unlock in the spec, written or still planned (validate accepts both)
  beyond: [{ field, why }] (2–4 later fields), mistakes: [{ wrong, fix }] (2–4),
  practice: [{ q, a }] (exactly 4, easy → hard, brief working in a), origin (accurate history, or omit)
};
```
Escaped text (no tags): `careers`, `fields`, `beyond`, `life`, `example.lines[].note`. Everything else is HTML. Backtick strings; never `${` inside them.

Markup: all math in `<span class="m">…</span>`, variables `<i>x</i>`, real symbols × ÷ − (U+2212) · ≤ ≥ ≠ ≈ √ π ∞ ∈ ℝ ℂ ⇒. `<sup>`/`<sub>`. Stacked fraction `<span class="fr"><span>3</span><span>4</span></span>`. Radicand overline: `√<span class="ov">x + 1</span>` (or `.mk-ol` in labs). Displayed lines `<div class="display">a<br>b</div>`, `<span class="dim">…</span>` for de-emphasis. Intervals `(−∞, 2) ∪ [5, ∞)`. Σ with limits: `<span class="sig"><span>n</span><span>Σ</span><span><i>k</i>=1</span></span>` (top, symbol, bottom). Colours `c1`–`c5` (amber, cyan, pink, violet, green) exactly as the lab's keys. Defined term `<b>term</b>`. No emoji, links or markdown; never the words "coming soon" (the smoke test reads them as an unwritten page). Plain short sentences; no em-dash asides, no "not X but Y", no stock phrases.

## Saved check: `checks/<field>/<id>.py`
Cover `example`, every `practice[i]` and any number or claim in `formal`. Runner helpers: `check(label, cond)`, `same(label, got, want)`, `solves(label, Eq(…), x, {…})`, `near(label, got, page)`, `skip(label, reason)`; all of sympy and real symbols a–z are preloaded; `page` is the topic. Independent algebra helpers: `from algebra import *` (`checks/_lib/algebra.py`; docstring lists all): `real_solutions`, `complex_solutions`, `ineq`, `equivalent`, `synth`, `long_div`, `candidates`, `roots_mult`, `holes`, `vas`, `hasym`, `slant`, `zeros`, `yint`, `ends`, `side`, `domain_excluded`, `inverse`, `inverse_ok`, `compose`, `transform`, `log_exact`, `compound`, `continuous`, `arith_*`, `geom_*`, `binom_coeff`, `binom_term`, `conic`, `cplx`. Type the page's numbers in; compute the truth independently. Then `python3 tools/mathcheck.py --stamp <id>` (refused unless all pass). Never weaken a check to pass a wrong page.

## Lab: one file per batch, `web/labs/<prefix>-<n>.js`
Every lab starts with `MathKit.attach(k)`. Write only what is unique to the topic (target 4–8 KB per lab). Rules a lab needs (which answer is right, exact forms, scoring) go in `MathRules` with a test in `tests/math.test.js`, never inside the lab.

**Lab kit** (`k`, `web/src/labkit.js`): `k.canvas()` → `c` (`c.w`, `c.h`, `c.begin()`, `c.xy(e)`, `c.d.text/line/rect/rr/circle/arrow/pow`), `k.dom()`, `k.loop(dt => …)`, `k.slider`, `k.number`, `k.select`, `k.button(label, fn, "btn"|"btn ghost"|"btn-s")`, `k.check`, `k.modes([[key, label]…], active, fn)`, `k.stepper(count, onStep)`, `k.hint`, `k.setRO(html)`, `k.fmt`, `k.alpha(hex, a)`, `k.reduce`, colours `k.C.amber/cyan/pink/violet/green/text/muted/faint/ink`, fonts `k.F.math/mono/ui/sans`.

**MathRules** (`k.MR`, DOM-free, tested): `Q(n, d)` exact rationals (`Q.add sub mul div neg inv pow eq cmp lt val abs isInt`; `Q(0.75)` → 3/4); `Poly([c0, c1, …])` lowest degree first (`add sub mul scale pow eval evalN fn deriv compose divmod → {q, r, steps} synth(p, r) → {top, mid, bottom, rem, q} gcd ratCandidates ratRoots → {roots: [{r, m}], rest} roots (complex, numeric) realRoots → [{x, q|null, m}] ends → {left, right} fromRoots deg lead eq`); `Z(re, im)` exact complex (`add sub mul div conj neg norm pow ipow eq abs arg val`); `sqrtParts(72) = [6, 2]`, `sqrtQ(Q(9, 8))` → `{s: 3/4, t: 2}`; `quadRoots(a, b, c)` → `{D, kind, p, s, t, imag, values, exact}`; `rational(num, den)` → `{holes [{x, q, y, yq}], vas [{x, q, m, left, right}], zeros, excluded, yint, asym {type, y | poly}, f, reduced}`; `transform(f, {a, b, h, k})`, `transformPoint`, `compose`, `invert(f, y, lo, hi)`, `isOneToOne`; `logb`, `logExact(b, x)`, `compound`, `continuous`; `arith(a1, d)`/`geom(a1, r)` → `term(n) sum(n) sumInf()`, `sigma(f, lo, hi)`; `nCr`, `pascalRow`, `binomialPoly(a, b, n)`, `binomialTerm`; `conic({A, C, D, E, F})` → `{type, h, k, a2, b2, c2, a, b, c, e, r2, p, axis, vertices, foci, focus, directrix, asymptotes}`, `conicGeneral(kind, {h, k, X2, Y2 | p})`; `zeros(f, lo, hi)`, `intersect(f, g, lo, hi)`; `niceStep`, `ticks`, `placeLabels`; formatters `qT qH polyT polyH zT zH radStr rootsStr factorStr(r, {html, integer}) fmtN sg supT`; `reveal(lines, k)`.

**MathKit** (`MathKit.attach(k)` adds): `P = k.plane(c, {xmin, xmax, ymin, ymax, equal, xstep, ystep, xlabel, ylabel, pad})` (all of `k.plot`: `P.grid() P.axes() P.fn P.line P.point P.label P.X P.Y P.inv P.clip`; it starts below the mode buttons automatically) plus `P.curve(f, color, {breaks, from, to, dash, w})` (no false joins across asymptotes/holes), `P.vasym(x)`, `P.hasym(y)`, `P.asym(f)` (dashed violet by default), `P.hole(x, y)`, `P.dot(x, y)`, `P.onCurve(f, at)` (anchor for a curve's name label), `P.seg`, `P.param(fx, fy, t0, t1)`, `P.implicit(G(x, y))` (conics, nonlinear systems), `P.shade(f, g, from, to, color)`, and **`P.labels([{text, x, y, color, font, prefer}])` — call last each frame: places every label clear of the others, of the curves drawn so far, of the mode buttons and of the edges** (use it for every canvas label near a curve; `P.axes()` registers its tick numbers and axis names, so labels avoid those too). Layout and controls: `pad = k.split(c, host, {side, frac, hfrac, minWide, full, off})` puts a DOM panel (`host = k.dom()`) beside the plot on wide stages and above it on phones, below the mode buttons, and returns the `pad` for `k.plane`; `k.group("mode", () => { …controls… })` + `k.showGroup("mode")` show only the current mode's controls; `k.hint(text)` replaces the previous hint (`""` clears). `k.cplane(c, o)` complex plane with `P.z(z, color, {vec})`. `k.drag(c, () => P, [{x, y, snap, clamp, fixX, fixY}], onMove)`. `S = k.params([{key, min, max, step, value, cls, fmt}], onChange)` → `S.a`, `S.set("a", v)`. `k.smooth(view, {ymin, ymax}, dt)` eased window. `SP = k.stepsPanel(host)`; `SP.set([{tag, eq, why}], cur)` shows only steps ≤ cur. `k.synthHTML(synth, r, upto)`. `k.readout({title, big, rows: [{lhs, v, cls, lbl}], landmark: {hit, big, note}, narr})`. **`k.guard(["x = 3", …])`**: declare the current mode's answers; layoutcheck fails if any is visible before a step is taken. Call it in every mode that asks something (and `k.guard([])` in free-exploration modes).

## Lab archetypes (the spec names one per topic + its config)
- **A · Transform**: sliders (`k.params`) for a, b, h, k (or the topic's parameters) over a parent curve; ghost parent dashed, key points mapped with `transformPoint`, labels via `P.labels`. Modes: Explore / Match (target curve, `k.guard` the parameters).
- **B · Features**: a function from a small editable family (roots/factors chosen by sliders or drag); show zeros (multiplicity: cross vs touch), intercepts, asymptotes, holes, end behaviour arrows; readout lists each feature with why. Modes: Graph / Sign chart or Table.
- **C · Steps**: a stepper (`k.stepper`) drives `k.stepsPanel` next to a small graph or table that changes with each step; New problem button picks from exact generated cases (`MathRules` decides correctness). Modes: Worked / Your turn (guarded).
- **D · Plane**: complex plane or conic/implicit curves with draggable points (`k.drag`); geometry of the operation shown with arrows/segments (z·i rotates 90°, conjugate reflects; foci/directrix distances).
- **E · Model**: data points or a scenario (growth, interest, decay, sequences); fit or compare models, read values by dragging along x; readout shows the model's numbers exactly and in context.
Make each lab specific to its topic within its archetype: the archetype saves plumbing, not ideas.

Readout: keep it short enough not to scroll on desktop; exact values; one landmark that lights (`hit`) at the topic's key moment; `narr` = what to try next. Lay out from `c.w`/`c.h` (stage can be 340 px wide on a phone). No alert/confirm, no localStorage.

## Prototype a lab before its page exists (optional)
`LABFILE=web/labs/a2-1.js node tools/layoutcheck.js a1-functions` (and the same for `sheet.js`) injects your lab file into an existing page; temporarily point `L["…"]` at that page's id to try the lab without a dossier.

## Finish each batch (text first, one image per topic last)
1. Device or cloud: `node tools/finish.js <ids>` → build, validate, mathcheck, labtest. Fix until `FINISH ok`.
2. Cloud (Chromium): `node tools/finish.js --browser <ids>` → also layoutcheck (fix to 0) and one contact sheet per topic (`/tmp/codex-sheet/<id>.png`, ~0.65 scale). layoutcheck inspects each mode as it opens, after the first two control buttons, and after pressing Step/Next up to 8×, and flags readout lines that scroll sideways. Read each sheet ONCE; `MODES=…` re-shoots only the modes you changed. `BIG=1` only if a detail is unreadable.
3. Report back in exactly this shape, nothing else:
```
BATCH <name>: <ids>
files: <paths written>
finish: ok | FAIL <step>
checks: <n passed> · layout: 0 · sheets: looked
kit additions: <MathRules/MathKit functions added + tests, or none>
doubts: <anything the reviewer must look at, or none>
```
