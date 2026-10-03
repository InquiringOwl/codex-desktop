/* ============ Labs: Trigonometry, batch B3 (any angle, fundamental identities, verifying identities) ============ */
(function(){
const L = window.LABS, MI = "−", PI = Math.PI;

/* ---------- DOM-free helpers (kit additions: candidates for MathRules, with tests) ---------- */
// Three choices for "which rule justifies this step?": the right rule plus two others from the pool, fixed per step i.
function ruleOptions(rule, i, pool){ const o = pool.filter(r => r !== rule), n = o.length, a = o[(i * 3 + 1) % n]; let b = o[(i * 5 + 4) % n]; if (b === a) b = o[(i * 5 + 5) % n];
  const out = [a, b]; out.splice(i % 3, 0, rule); return out; }
// quadrant of a point (0 on an axis)
const quadXY = (x, y) => (x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : x > 0 && y < 0 ? 4 : 0);
const sq = s => s.replace(/²/g, "<sup>2</sup>"), strip = h => h.replace(/<[^>]+>/g, "");
const nT = v => String(v).replace("-", MI);
const QN = ["axis", "QI", "QII", "QIII", "QIV"], SIX = ["sin", "cos", "tan", "csc", "sec", "cot"];
const POS = { 1: SIX, 2: ["sin", "csc"], 3: ["tan", "cot"], 4: ["cos", "sec"] };
const CSS = `.b3p{font:16px/1.5 var(--math);margin:2px 0 8px}.b3t{border-collapse:collapse;font:15px/1.3 var(--math);width:100%}.b3t td{padding:3px 6px;border-bottom:1px solid var(--line)}.b3t td.s{font-weight:600;text-align:center}`;
function css(){ if (!document.getElementById("b3-css")) { const s = document.createElement("style"); s.id = "b3-css"; s.textContent = CSS; document.head.appendChild(s); } }
// a DOM box whose HTML is replaced only when it changes
function box(host){ const e = document.createElement("div"); host.appendChild(e); return h => { if (e.__h !== h) { e.innerHTML = h; e.__h = h; } }; }
// short-way arc from the nearest x-axis to the terminal side at angle t (reference angle)
const refSpan = (x, t) => { const base = x >= 0 ? 0 : PI; return [base, base + (((t - base + 3 * PI) % (2 * PI)) - PI)]; };

/* ---------- trig-any-angle ---------- */
L["trig-any-angle"] = k => {
  MathKit.attach(k); css();
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), head = box(host), SP = k.stepsPanel(host);
  let mode = "point", P = null, step = 0, ri = 0, gi = 0;
  const pt = { x: -3, y: 4, snap: 1, clamp: [-6, 6, -6, 6] };
  k.drag(c, () => (mode === "point" ? P : null), [pt], () => { if (!pt.x && !pt.y) pt.x = 1; });
  const UC = k.unitCircle(c, { t: 0 });
  const aT = (q, deg) => (deg ? MR.degT(MR.qDeg(q)) : MR.piT(q));
  const RAT = { sin: ["y", "r"], cos: ["x", "r"], tan: ["y", "x"], csc: ["r", "y"], sec: ["r", "x"], cot: ["x", "y"] }, CL = { x: "c2", y: "c3", r: "c4" };
  const REF = [["cos", 210, 1], ["tan", Q(5, 3)], ["sin", -135, 1], ["sec", 480, 1], ["csc", Q(7, 6)], ["cot", Q(-3, 4)]].map(([fn, a, deg]) => ({ fn, deg: !!deg, q: deg ? MR.degQ(a) : a }));
  const GIV = [["sin", -4, -3, "θ in QIII", "QIII: x < 0, y < 0"], ["cos", 5, -12, "θ in QIV", "QIV: x > 0, y < 0"],
    ["tan", -15, 8, "sin θ > 0", "tan < 0 in QII, QIV; sin > 0 in QI, QII ⇒ QII"], ["csc", -24, 7, "cos θ < 0", "csc > 0 in QI, QII; cos < 0 in QII, QIII ⇒ QII"]].map(([fn, x, y, cond, why]) => ({ fn, x, y, cond, why, s: MR.sixFrom(x, y) }));

  function refLines(p){
    const { fn, q, deg } = p, n = MR.normQ(q), quad = MR.quadrant(q), ra = MR.refAngle(q), A = aT(q, deg), N = aT(n, deg), R = aT(ra, deg);
    const turns = Math.floor(Q.val(q) / 2), full = deg ? "360°" : "2π", half = deg ? "180°" : "π", m = Math.abs(turns);
    const cot = turns === 0 ? `${A} is already in [0, ${full})` : `${A} ${turns > 0 ? MI : "+"} ${m === 1 ? "" : m + "·"}${full} = ${N}`;
    const refF = { 1: `θ′ = ${N}`, 2: `θ′ = ${half} ${MI} ${N} = ${R}`, 3: `θ′ = ${N} ${MI} ${half} = ${R}`, 4: `θ′ = ${full} ${MI} ${N} = ${R}` }[quad];
    const pos = POS[quad].includes(fn);
    return [{ tag: "coterminal", eq: cot }, { tag: "quadrant", eq: `${N} is in ${QN[quad]}`, why: `positive there: ${POS[quad].join(", ")}` },
      { tag: "reference", eq: refF, why: "measured to the x-axis" }, { tag: "value", eq: `${fn} ${R} = ${MR.trigExact(fn, ra).text}`, why: "special triangle or unit circle" },
      { tag: "sign", eq: `<span class="c5">${fn} ${A} = ${MR.trigExact(fn, q).text}</span>`, why: `${fn} is ${pos ? "positive" : "negative"} in ${QN[quad]}` }];
  }
  function givLines(g){
    const { fn, x, y, s } = g, r = Math.round(Math.hypot(x, y)), [a, b] = RAT[fn], val = { x, y, r }, known = new Set([a, b]);
    const miss = ["x", "y", "r"].find(v => !known.has(v)), mv = val[miss];
    const third = miss === "r" ? `r = √(${nT(x)}² + ${y}²) = ${r}` : `${miss} = ${mv < 0 ? MI : ""}√(${r}² ${MI} ${Math.abs(val[miss === "x" ? "y" : "x"])}²) = ${nT(mv)}`;
    return [{ tag: "signs", eq: g.why }, { tag: "definition", eq: `${fn} θ = ${a}/${b} ⇒ ${a} = ${nT(val[a])}, ${b} = ${nT(val[b])}`, why: "signs from the quadrant; r > 0" },
      { tag: "third", eq: third, why: miss === "r" ? "distance from the origin" : "x² + y² = r², sign from the quadrant" },
      { tag: "sin, cos, tan", eq: ["sin", "cos", "tan"].map(f => `${f} θ = ${s[f].text}`).join(", ") },
      { tag: "csc, sec, cot", eq: `<span class="c5">${["csc", "sec", "cot"].map(f => `${f} θ = ${s[f].text}`).join(", ")}</span>`, why: "reciprocals" }];
  }
  function drawPoint(){
    const pad = k.split(c, host, { side: "right", frac: .38 });
    P = k.plane(c, { xmin: -7, xmax: 7, ymin: -7, ymax: 7, equal: true, pad, xstep: c.w < 600 ? 2 : 1, ystep: c.w < 600 ? 2 : 1 }); P.grid(); P.axes();
    const { x, y } = pt, t = Math.atan2(y, x), th = (t + 2 * PI) % (2 * PI), q = quadXY(x, y), s = MR.sixFrom(x, y);
    if (q) P.clip(() => { const X0 = P.X(0), Y0 = P.Y(0), X1 = x > 0 ? P.left + P.width : P.left, Y1 = y > 0 ? P.top : P.top + P.height; c.d.rect(Math.min(X0, X1), Math.min(Y0, Y1), Math.abs(X1 - X0), Math.abs(Y1 - Y0), k.alpha(C.green, .07)); });
    const far = 12 / Math.hypot(x, y); P.line(0, 0, x * far, y * far, k.alpha(C.violet, .4), 1.5, [5, 5]);
    P.seg(0, 0, x, 0, C.cyan, 3); P.seg(x, 0, x, y, C.pink, 3); P.seg(0, 0, x, y, C.violet, 2.5);
    const a = P.angleArc(0, 0, 22, 0, th, C.amber, { w: 2 }); let ra = null;
    if (q) { const [b0, b1] = refSpan(x, t); ra = P.angleArc(0, 0, 40, b0, b1, C.amber, { dash: [4, 4], arrow: false }); }
    P.dot(x, y, C.text, 6);
    const corner = [[1, 4.4, 6.3, "All +"], [2, -4.4, 6.3, "sin, csc +"], [3, -4.4, -6.3, "tan, cot +"], [4, 4.4, -6.3, "cos, sec +"]].map(([i, cx, cy, tx]) => ({ text: tx, x: cx, y: cy, color: i === q ? C.green : C.faint, font: `13px ${k.F.ui}` }));
    P.labels([{ text: `x = ${nT(x)}`, x: x / 2, y: 0, color: C.cyan, prefer: y >= 0 ? "se" : "ne" }, y && { text: `y = ${nT(y)}`, x, y: y / 2, color: C.pink, prefer: x >= 0 ? "ne" : "nw" },
      { text: `r = ${s.r.text}`, x: x / 2, y: y / 2, color: C.violet, prefer: x * y >= 0 ? "nw" : "ne" }, { text: "θ", x: a.x, y: a.y, color: C.amber }, ra && { text: "θ′", x: ra.x, y: ra.y, color: C.amber }, ...corner]);
    head(`<table class="b3t">${SIX.map(f => { const v = s[f], [u, w] = RAT[f], sg = v.undef ? "" : v.value > 0 ? "+" : v.value < 0 ? MI : "0";
      return `<tr><td>${f} θ</td><td><span class="${CL[u]}">${u}</span>/<span class="${CL[w]}">${w}</span></td><td>${v.text}</td><td class="s ${sg === "+" ? "c5" : "c3"}">${sg}</td></tr>`; }).join("")}</table>`);
    SP.set([], -1);
    const und = SIX.filter(f => s[f].undef);
    k.readout({ title: `Point (${nT(x)}, ${nT(y)})`, rows: [{ lhs: "r = √(x² + y²)", v: s.r.text, cls: "c4" }, { lhs: "θ ≈", v: (th * 180 / PI).toFixed(2) + "°", cls: "c1" },
      { lhs: "quadrant", v: q ? QN[q] : "on an axis" }, q && { lhs: "θ′ ≈", v: (Math.abs(refSpan(x, t)[1] - refSpan(x, t)[0]) * 180 / PI).toFixed(2) + "°", cls: "c1" }],
      landmark: { hit: !q, big: q ? `positive in ${QN[q]}: ${POS[q].join(", ")}` : `quadrantal angle`, note: q ? "Sizes come from θ′, signs from the quadrant." : `${und.join(" and ")} undefined: a zero denominator` },
      narr: "Drag the point through all four quadrants and onto an axis. Moving it along the dashed terminal side changes x, y and r but none of the six values." });
  }
  function drawRef(){
    const p = REF[ri], pad = k.split(c, host, { side: "right", frac: .44 }), t = MR.qRad(p.q), tn = MR.qRad(MR.normQ(p.q));
    UC.set(t); P = UC.plane(pad); UC.draw({ ref: step >= 3 });
    const A = aT(p.q, p.deg), lines = refLines(p);
    head(`<p class="b3p">Find <span class="m">${p.fn} ${A}</span> exactly.</p>`); SP.set(lines, step - 1);
    const [b0, b1] = refSpan(Math.cos(t), Math.atan2(Math.sin(t), Math.cos(t))), rm = (b0 + b1) / 2;
    P.labels([{ text: `θ = ${A}`, x: .3 * Math.cos(tn / 2), y: .3 * Math.sin(tn / 2), color: C.amber }, step >= 3 && { text: `θ′ = ${aT(MR.refAngle(p.q), p.deg)}`, x: .62 * Math.cos(rm), y: .62 * Math.sin(rm), color: C.amber }]);
    k.readout({ title: "Reference angle and sign", rows: [{ lhs: "angle", v: A, cls: "c1" }, step >= 2 && { lhs: "quadrant", v: QN[MR.quadrant(p.q)] }],
      landmark: { hit: step >= 5, big: step >= 5 ? strip(lines[4].eq) : "size from θ′, sign from the quadrant", note: step >= 5 ? lines[4].why : "" },
      narr: step >= 5 ? "Try New angle for a negative angle or one past a full turn." : "Press Step to go through the five moves." });
  }
  function drawGiven(){
    const g = GIV[gi], pad = k.split(c, host, { side: "right", frac: .46 }), r = Math.round(Math.hypot(g.x, g.y)), q = quadXY(g.x, g.y);
    const W = k.fit([[0, 0], [g.x, 0], [0, g.y], [g.x, g.y], [-r * .3, -r * .3], [r * .3, r * .3]], .2);
    P = k.plane(c, Object.assign({}, W, { equal: true, pad })); P.grid(); P.axes();
    const lines = givLines(g), [a, b] = RAT[g.fn];
    head(`<p class="b3p"><span class="m">${g.fn} θ = ${g.s[g.fn].text}</span>, &nbsp;<span class="m">${g.cond}</span>. Find the other five.</p>`); SP.set(lines, step - 1);
    if (step >= 1) P.clip(() => { const X0 = P.X(0), Y0 = P.Y(0), X1 = g.x > 0 ? P.left + P.width : P.left, Y1 = g.y > 0 ? P.top : P.top + P.height; c.d.rect(Math.min(X0, X1), Math.min(Y0, Y1), Math.abs(X1 - X0), Math.abs(Y1 - Y0), k.alpha(C.green, .08)); });
    const lab = [];
    if (step >= 2) { const set = new Set([a, b]);
      if (set.has("r")) P.clip(() => c.d.circle(P.X(0), P.Y(0), P.X(r) - P.X(0), null, k.alpha(C.violet, .8), 1.5));
      if (set.has("y")) { P.line(P.xmin, g.y, P.xmax, g.y, C.pink, 1.5, [6, 5]); lab.push({ text: `y = ${nT(g.y)}`, x: P.xmin + (P.xmax - P.xmin) * (g.x < 0 ? .85 : .15), y: g.y, color: C.pink }); }
      if (set.has("x")) { P.line(g.x, P.ymin, g.x, P.ymax, C.cyan, 1.5, [6, 5]); lab.push({ text: `x = ${nT(g.x)}`, x: g.x, y: P.ymin + (P.ymax - P.ymin) * (g.y < 0 ? .85 : .15), color: C.cyan }); }
      if (set.has("r")) { const f = Math.atan2(g.y, g.x) + 1.3; lab.push({ text: `r = ${r}`, x: r * Math.cos(f), y: r * Math.sin(f), color: C.violet }); } }
    if (step >= 3) { P.seg(0, 0, g.x, 0, C.cyan, 3); P.seg(g.x, 0, g.x, g.y, C.pink, 3); P.seg(0, 0, g.x, g.y, C.violet, 2.5); P.dot(g.x, g.y, C.text, 6);
      lab.push({ text: `(${nT(g.x)}, ${nT(g.y)})`, x: g.x, y: g.y, color: C.text }); }
    P.labels(lab);
    k.readout({ title: "One value and a quadrant", rows: [{ lhs: "given", v: `${g.fn} θ = ${g.s[g.fn].text}` }, { lhs: "condition", v: g.cond }],
      landmark: { hit: step >= 5, big: step >= 5 ? "all six found" : `${g.fn} θ = ${a}/${b}`, note: step >= 5 ? `point (${nT(g.x)}, ${nT(g.y)}), r = ${r}` : "Read two of x, y, r from the value; the third from x² + y² = r²." },
      narr: "The dashed line and the circle meet in two points; the quadrant picks one." });
  }

  k.modes([["point", "Point"], ["ref", "Reference"], ["given", "Given one"]], mode, m => { mode = m; open(); });
  k.group("point", () => k.button("Rotate 90°", () => { [pt.x, pt.y] = [-pt.y, pt.x]; }, "btn ghost"));
  const stR = k.group("ref", () => { const s = k.stepper(() => 5, v => { step = v; }); k.button("New angle", () => { ri = (ri + 1) % REF.length; s.reset(); open(); }, "btn ghost"); return s; });
  const stG = k.group("given", () => { const s = k.stepper(() => 5, v => { step = v; }); k.button("New problem", () => { gi = (gi + 1) % GIV.length; s.reset(); open(); }, "btn ghost"); return s; });
  function open(){ k.showGroup(mode); stR.pause(); stG.pause(); step = 0; stR.k = 0; stG.k = 0;
    if (mode === "ref") { const l = refLines(REF[ri]); k.guard([strip(l[4].eq)]); k.hint("Step through: coterminal angle, quadrant, reference angle, value, sign."); }
    else if (mode === "given") { const l = givLines(GIV[gi]); k.guard([strip(l[3].eq), strip(l[4].eq)]); k.hint("Step through to find the point, then all six values."); }
    else { k.guard([]); k.hint("Drag the point. The table shows the six values with their signs."); } }
  open();
  k.loop(() => { c.begin(); if (mode === "point") drawPoint(); else if (mode === "ref") drawRef(); else drawGiven(); });
};

/* ---------- trig-fundamental-ids ---------- */
const SIMP = [
  { e: "(sec x − cos x) / tan x", f: x => (1 / Math.cos(x) - Math.cos(x)) / Math.tan(x), r: Math.sin, hole: [PI / 2, 0], res: "sin x",
    s: [["(1/cos x − cos x) / (sin x/cos x)", "reciprocal and quotient"], ["((1 − cos² x)/cos x) / (sin x/cos x)", "common denominator"], ["(sin² x/cos x) · (cos x/sin x)", "Pythagorean; ÷ a fraction = × its reciprocal"], ["sin x", "cancel cos x and one sin x"]] },
  { e: "(1 − cos² x)(1 + cot² x)", f: x => (1 - Math.cos(x) ** 2) * (1 + 1 / Math.tan(x) ** 2), r: () => 1, hole: [PI, 0], res: "1",
    s: [["sin² x · csc² x", "Pythagorean, twice"], ["sin² x · 1/sin² x", "reciprocal"], ["1", "cancel sin² x"]] },
  { e: "sin x + cos x cot x", f: x => Math.sin(x) + Math.cos(x) / Math.tan(x), r: x => 1 / Math.sin(x), hole: null, res: "csc x",
    s: [["sin x + cos x · cos x/sin x", "quotient"], ["(sin² x + cos² x)/sin x", "common denominator"], ["1/sin x", "Pythagorean"], ["csc x", "reciprocal"]] },
  { e: "cos(−x) tan(−x)", f: x => Math.cos(-x) * Math.tan(-x), r: x => -Math.sin(x), hole: [PI, PI / 2], res: "−sin x",
    s: [["cos x · (−tan x)", "even/odd: cos even, tan odd"], ["−cos x · sin x/cos x", "quotient"], ["−sin x", "cancel cos x"]] }];
const BRK = [-2, -1.5, -1, -.5, 0, .5, 1, 1.5, 2].map(v => v * PI);
L["trig-fundamental-ids"] = k => {
  MathKit.attach(k); css();
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), head = box(host), SP = k.stepsPanel(host);
  let mode = "pyth", P = null, step = 0, si = 0, sc = 1;
  const UC = k.unitCircle(c, { t: PI / 6, snap: PI / 12, r: 2.2 });
  const PY = [{ tag: "x² + y² = 1", eq: sq("cos² θ + sin² θ = 1"), why: "the point (cos θ, sin θ) is on the unit circle" },
    { tag: "÷ cos² θ", eq: sq("1 + tan² θ = sec² θ"), why: "triangle scaled by 1/|cos θ|: legs 1 and |tan θ|, hypotenuse |sec θ|" },
    { tag: "÷ sin² θ", eq: sq("cot² θ + 1 = csc² θ"), why: "triangle scaled by 1/|sin θ|: legs |cot θ| and 1, hypotenuse |csc θ|" }].map(l => Object.assign(l, { tag: sq(l.tag) }));
  const f4 = v => k.fmt(v, 4);
  function drawPyth(dt){
    const pad = k.split(c, host, { side: "left", frac: .42, hfrac: .36 }); P = UC.plane(pad);
    const t = UC.t, cs = Math.cos(t), sn = Math.sin(t), big = step === 2 ? 1 / Math.abs(cs) : step === 3 ? 1 / Math.abs(sn) : 1, tgt = Math.min(big, 2.1);
    sc = k.reduce ? tgt : sc + (tgt - sc) * Math.min(1, dt * 4);
    UC.draw({ arc: true, proj: step < 2, radius: step < 2 });
    const X = sc * cs, Y = sc * sn, lab = [{ text: "θ", x: .32 * Math.cos(t / 2), y: .32 * Math.sin(t / 2), color: C.amber }];
    if (step < 2) lab.push({ text: "cos θ", x: cs / 2, y: 0, color: C.cyan, prefer: sn >= 0 ? "se" : "ne" }, { text: "sin θ", x: cs, y: sn / 2, color: C.pink, prefer: cs >= 0 ? "ne" : "nw" }, { text: "1", x: cs / 2, y: sn / 2, color: C.violet, prefer: "nw" });
    else if (step === 2) { P.seg(0, 0, X, 0, C.cyan, 3); P.seg(X, 0, X, Y, C.green, 3); P.seg(0, 0, X, Y, C.violet, 2.5, [7, 4]); P.dot(X, Y, C.text, 5);
      lab.push({ text: "1", x: X / 2, y: 0, color: C.cyan, prefer: sn >= 0 ? "se" : "ne" }, { text: "tan θ", x: X, y: Y / 2, color: C.green, prefer: cs >= 0 ? "ne" : "nw" }, { text: "sec θ", x: X / 2, y: Y / 2, color: C.violet, prefer: "nw" }); }
    else { P.seg(0, 0, 0, Y, C.pink, 3); P.seg(0, Y, X, Y, C.green, 3); P.seg(0, 0, X, Y, C.violet, 2.5, [7, 4]); P.dot(X, Y, C.text, 5);
      lab.push({ text: "1", x: 0, y: Y / 2, color: C.pink, prefer: cs >= 0 ? "nw" : "ne" }, { text: "cot θ", x: X / 2, y: Y, color: C.green, prefer: sn >= 0 ? "ne" : "se" }, { text: "csc θ", x: X / 2, y: Y / 2, color: C.violet, prefer: "se" }); }
    P.labels(lab); head(`<p class="b3p">Divide <span class="m">${sq("cos² θ + sin² θ = 1")}</span> by a square and the triangle scales.</p>`); SP.set(PY, step - 1);
    const tn = sn / cs, ct = cs / sn, rows = [{ lhs: "θ", v: MR.piT(MR.piQ(t) || Q(0)), cls: "c1" }];
    if (step >= 1) rows.push({ lhs: sq("cos² + sin²"), v: f4(cs * cs + sn * sn) });
    if (step >= 2) rows.push({ lhs: sq("1 + tan², sec²"), v: Math.abs(cs) < 1e-9 ? "undefined" : `${f4(1 + tn * tn)}, ${f4(1 / cs / cs)}` });
    if (step >= 3) rows.push({ lhs: sq("1 + cot², csc²"), v: Math.abs(sn) < 1e-9 ? "undefined" : `${f4(1 + ct * ct)}, ${f4(1 / sn / sn)}` });
    k.readout({ title: "Three Pythagorean identities", rows, landmark: { hit: step >= 3, big: step >= 3 ? "one circle, three identities" : "x² + y² = r²", note: big > 2.1 ? "θ is close to an axis: the scaled triangle runs off the screen." : "" },
      narr: "Drag the point, then step. Near 90° the tangent triangle grows without bound: tan and sec are undefined there." });
  }
  function drawEven(){
    const pad = k.split(c, host, { side: "left", frac: .44 }); P = UC.plane(pad);
    const t = UC.t, cs = Math.cos(t), sn = Math.sin(t), q = MR.piQ(t) || Q(0), nq = Q.neg(q);
    UC.draw({ arc: true });
    P.seg(cs, 0, cs, -sn, k.alpha(C.pink, .8), 2.5, [6, 4]); P.seg(0, 0, cs, -sn, k.alpha(C.violet, .8), 2, [6, 4]);
    const m = P.angleArc(0, 0, 46, 0, -Math.atan2(sn, cs), C.amber, { dash: [4, 4] });
    P.dot(cs, -sn, C.text, 6);
    P.labels([{ text: "(cos θ, sin θ)", x: cs, y: sn, color: C.text, prefer: sn >= 0 ? "ne" : "se" }, { text: "(cos θ, −sin θ)", x: cs, y: -sn, color: C.text, prefer: sn >= 0 ? "se" : "ne" }, { text: "−θ", x: m.x, y: m.y, color: C.amber }]);
    const ex = (f, a) => { const v = MR.trigExact(f, a); return v ? v.text : "—"; }, EV = { cos: 1, sec: 1 };
    head(`<table class="b3t"><tr><td></td><td class="c1">θ = ${MR.piT(q)}</td><td class="c1">−θ = ${MR.piT(nq)}</td><td></td></tr>${SIX.map(f => `<tr><td>${f}</td><td>${ex(f, q)}</td><td>${ex(f, nq)}</td><td class="${EV[f] ? "c2" : "c3"}">${EV[f] ? "even" : "odd"}</td></tr>`).join("")}</table>`); SP.set([], -1);
    const on = Math.abs(sn) < 1e-9;
    k.readout({ title: "Turning the other way", rows: [{ lhs: "cos(−θ)", v: "= cos θ", cls: "c2" }, { lhs: "sin(−θ)", v: "= −sin θ", cls: "c3" }, { lhs: "tan(−θ)", v: "= −tan θ", cls: "c5" }],
      landmark: { hit: on, big: on ? "θ and −θ meet: sin θ = 0" : "mirror in the x-axis", note: on ? "Both points are on the x-axis, where sin θ = −sin θ = 0." : "x stays, y changes sign: cos and sec even, the other four odd." },
      narr: "Drag θ around. The two points always share x and have opposite y." });
  }
  function drawSimp(){
    const p = SIMP[si], n = p.s.length, pad = k.split(c, host, { side: "left", frac: .5, hfrac: .5 });
    P = k.plane(c, { xmin: -2 * PI, xmax: 2 * PI, ymin: -3, ymax: 3, xstep: c.w < 600 ? PI : PI / 2, ystep: 1, pad }); P.grid(); P.piAxes();
    P.curve(p.f, C.amber, { breaks: BRK, w: 3.5 });
    const done = step >= n; if (step >= 1) P.curve(done ? p.r : p.f, C.green, { breaks: BRK, w: 1.8, dash: done ? null : [6, 5] });
    if (done && p.hole) for (let j = -8; j <= 8; j++) { const x = p.hole[1] + j * p.hole[0]; if (Math.abs(x) <= 2 * PI + 1e-9 && isFinite(p.r(x))) P.hole(x, p.r(x), C.green); }
    const a = P.onCurve(p.f, .2, -2 * PI, 2 * PI), b = done ? P.onCurve(p.r, .7, -2 * PI, 2 * PI) : null;
    P.labels([a && { text: "original", x: a.x, y: a.y, color: C.amber }, b && { text: `= ${p.res}`, x: b.x, y: b.y, color: C.green }]);
    head(`<p class="b3p">Simplify <span class="m">${sq(p.e)}</span></p>`);
    SP.set(p.s.map(([e, why], i) => ({ tag: "step " + (i + 1), eq: i === n - 1 ? `<span class="c5">= ${sq(e)}</span>` : `= ${sq(e)}`, why })), step - 1);
    k.readout({ title: "Simplify to sines and cosines", rows: [{ lhs: "step", v: `${Math.min(step, n)} of ${n}` }],
      landmark: { hit: done, big: done ? "same graph, simpler formula" : "every step keeps the value", note: done ? (p.hole ? "Valid where the original is defined: open circles mark its gaps." : "The original and the result are undefined at the same points.") : "" },
      narr: "The dashed curve is the current line; it never leaves the original. New problem gives another expression." });
  }
  k.modes([["pyth", "Pythagorean"], ["even", "Even/odd"], ["simp", "Simplify"]], mode, m => { mode = m; open(); });
  const stP = k.group("pyth", () => k.stepper(() => 3, v => { step = v; }, { ms: 1400 }));
  const stS = k.group("simp", () => { const s = k.stepper(() => SIMP[si].s.length, v => { step = v; }); k.button("New problem", () => { si = (si + 1) % SIMP.length; s.reset(); open(); }, "btn ghost"); return s; });
  k.group("even", () => k.button("Next angle", () => UC.set(UC.t + PI / 4), "btn ghost"));
  function open(){ k.showGroup(mode); stP.pause(); stS.pause(); step = 0; stP.k = 0; stS.k = 0; sc = 1;
    if (mode === "pyth") { k.guard([strip(PY[1].eq), strip(PY[2].eq)]); k.hint("Press Step: divide by cos² θ, then by sin² θ."); }
    else if (mode === "simp") { const p = SIMP[si]; k.guard([strip("= " + sq(p.s[p.s.length - 1][0]))]); k.hint("Each step names the identity it uses."); }
    else { k.guard([]); k.hint("Drag the point: −θ is its mirror image in the x-axis."); } }
  open();
  k.loop(dt => { c.begin(); if (mode === "pyth") drawPyth(dt); else if (mode === "even") drawEven(); else drawSimp(); });
};

/* ---------- trig-verify-ids ---------- */
const S_ = Math.sin, C_ = Math.cos;
const RULES = ["Reciprocal identity", "Quotient identity", "Pythagorean identity", "Common denominator", "Multiply by the conjugate", "Cancel a common factor", "Difference of squares", "Factor", "Split the fraction", "Even/odd identity"];
const VER = [
  { l: "csc x − sin x", r: "cos x cot x", L: x => 1 / S_(x) - S_(x), R: x => C_(x) * C_(x) / S_(x),
    s: [["1/sin x − sin x", 0], ["(1 − sin² x)/sin x", 3], ["cos² x/sin x", 2], ["cos x · (cos x/sin x)", 7], ["cos x cot x", 1]] },
  { l: "cos x/(1 − sin x)", r: "(1 + sin x)/cos x", L: x => C_(x) / (1 - S_(x)), R: x => (1 + S_(x)) / C_(x),
    s: [["cos x (1 + sin x)/(1 − sin² x)", 4], ["cos x (1 + sin x)/cos² x", 2], ["(1 + sin x)/cos x", 5]] },
  { l: "tan x + cot x", r: "sec x csc x", L: x => S_(x) / C_(x) + C_(x) / S_(x), R: x => 1 / (C_(x) * S_(x)),
    s: [["sin x/cos x + cos x/sin x", 1], ["(sin² x + cos² x)/(sin x cos x)", 3], ["1/(sin x cos x)", 2], ["(1/cos x)(1/sin x)", 8], ["sec x csc x", 0]] },
  { l: "1/(1 − sin x) + 1/(1 + sin x)", r: "2 sec² x", L: x => 1 / (1 - S_(x)) + 1 / (1 + S_(x)), R: x => 2 / C_(x) ** 2,
    s: [["(1 + sin x + 1 − sin x)/((1 − sin x)(1 + sin x))", 3], ["2/(1 − sin² x)", 6], ["2/cos² x", 2], ["2 sec² x", 0]] },
  { l: "(sec x − 1)(sec x + 1)", r: "tan² x", L: x => (1 / C_(x) - 1) * (1 / C_(x) + 1), R: x => Math.tan(x) ** 2, s: [["sec² x − 1", 6], ["tan² x", 2]] }];
const NON = [{ l: "(sin x + cos x)²", r: "1", L: x => (S_(x) + C_(x)) ** 2, R: () => 1, cx: [1, 4] },
  { l: "sin x", r: "√(1 − cos² x)", L: S_, R: x => Math.sqrt(Math.max(0, 1 - C_(x) ** 2)), cx: [-1, 2] },
  { l: "sin x + cos x", r: "1", L: x => S_(x) + C_(x), R: () => 1, cx: [1, 4] }];
L["trig-verify-ids"] = k => {
  MathKit.attach(k); css();
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), head = box(host), SP = k.stepsPanel(host), foot = box(host);
  let mode = "verify", P = null, step = 0, vi = 0, gi = 5, msg = "";
  const ALL = VER.concat(NON), lineOf = (v, i) => ({ tag: `<span class="c4">${RULES[v.s[i][1]]}</span>`, eq: i === v.s.length - 1 ? `<span class="c5">= ${sq(v.s[i][0])}</span>` : `= ${sq(v.s[i][0])}`, why: "" });
  const goal = v => `<p class="b3p">Verify <span class="m"><span class="c1">${sq(v.l)}</span> = <span class="c2">${sq(v.r)}</span></span></p>`;
  function graph(pad, v, done){
    P = k.plane(c, { xmin: -2 * PI, xmax: 2 * PI, ymin: -4, ymax: 4, xstep: c.w < 600 ? PI : PI / 2, ystep: 1, pad }); P.grid(); P.piAxes();
    P.curve(v.L, C.amber, { breaks: BRK, w: 3.5 }); if (done !== false) P.curve(v.R, C.cyan, { breaks: BRK, w: 2, dash: [7, 5] });
    const a = P.onCurve(v.L, .15, -2 * PI, 2 * PI), b = done !== false ? P.onCurve(v.R, .62, -2 * PI, 2 * PI) : null;
    return [a && { text: "left side", x: a.x, y: a.y, color: C.amber }, b && { text: "right side", x: b.x, y: b.y, color: C.cyan }];
  }
  function drawVerify(){
    const v = VER[vi], n = v.s.length, done = step >= n, lab = graph(k.split(c, host, { side: "left", frac: .5, hfrac: .52 }), v, done); P.labels(lab);
    head(goal(v) + `<p class="b3p c1">${sq(v.l)}</p>`); SP.set(v.s.map((_, i) => lineOf(v, i)), step - 1); foot(done ? `<p class="b3p c5">The left side has become the right side: verified.</p>` : "");
    k.readout({ title: "Verify one side", rows: [{ lhs: "step", v: `${Math.min(step, n)} of ${n}` }, step >= 1 && { lhs: "last rule", v: RULES[v.s[Math.min(step, n) - 1][1]], cls: "c4" }],
      landmark: { hit: done, big: done ? "left ≡ right" : "work on the left side only", note: done ? "Every line is equal to the one before, so the chain proves it." : "" },
      narr: done ? "The dashed right side now lies on the left side's graph. Pick another identity." : "Press Step: each line names the rule it uses." });
  }
  function drawTurn(){
    const v = VER[vi], n = v.s.length, done = step >= n; P.labels(graph(k.split(c, host, { side: "left", frac: .5, hfrac: .52 }), v, done));
    const opts = done ? [] : ruleOptions(RULES[v.s[step][1]], step + vi, RULES);
    head(goal(v) + (done ? `<p class="b3p c5">${sq(v.l)} ≡ ${sq(v.r)}: verified.</p>` : `<p class="b3p">Next line: <span class="m">= ${sq(v.s[step][0])}</span>. Which rule gets there?</p>${msg ? `<p class="b3p c3">${msg}</p>` : ""}`) + `<p class="b3p c1">${sq(v.l)}</p>`);
    SP.set(v.s.map((_, i) => lineOf(v, i)), step - 1); foot("");
    OB.forEach((b, j) => { const t = opts[j] || "—"; if (b.textContent !== t) b.textContent = t; b.disabled = done; });
    k.readout({ title: "Your turn", rows: [{ lhs: "step", v: `${Math.min(step, n)} of ${n}` }], landmark: { hit: done, big: done ? "verified" : "choose the rule", note: "" }, narr: "Pick the rule that turns the last line into the next one." });
  }
  function drawGraph(){
    const v = ALL[gi], lab = graph(k.split(c, host, { off: true }), v), non = !!v.cx; head(""); SP.set([], -1); foot("");
    let row = null;
    if (non) { const q = Q(v.cx[0], v.cx[1]), x = MR.qRad(q), a = v.L(x), b = v.R(x); P.line(x, -4, x, 4, k.alpha(C.text, .35), 1, [3, 4]); P.dot(x, a, C.amber); P.dot(x, b, C.cyan);
      row = { lhs: `at x = ${MR.piT(q)}`, v: `left ${k.fmt(a, 4)}, right ${k.fmt(b, 4)}` }; }
    let mx = 0; for (let i = 0; i <= 800; i++) { const x = -2 * PI + 4 * PI * i / 800, d = Math.abs(v.L(x) - v.R(x)); if (isFinite(d) && Math.abs(v.L(x)) < 50) mx = Math.max(mx, d); }
    P.labels(lab);
    k.readout({ title: "Graph test", rows: [{ lhs: "max |left − right|", v: mx < 1e-9 ? "0 (to 9 places)" : k.fmt(mx, 4) }, row],
      landmark: { hit: non, big: non ? "not an identity" : "the graphs coincide", note: non ? "One counterexample is a proof that it fails." : "Evidence only: a proof needs the algebra." },
      narr: "Switch between pairs. A curve on top of another hides it: look for any place they separate." });
  }
  k.modes([["verify", "Verify"], ["graph", "Graph test"], ["turn", "Your turn"]], mode, m => { mode = m; open(); });
  const pick = (i, s) => { vi = +i; s.reset(); open(); };
  const stV = k.group("verify", () => { const s = k.stepper(() => VER[vi].s.length, v => { step = v; }, { ms: 1300 }); k.select("Identity", VER.map((v, i) => [i, `${v.l} = ${v.r}`]), 0, i => pick(i, s)); return s; });
  k.group("graph", () => k.select("Pair", ALL.map((v, i) => [i, `${v.l} vs ${v.r}`]), gi, i => { gi = +i; }));
  const OB = k.group("turn", () => { const b = [0, 1, 2].map(j => k.button("—", () => choose(j), "btn ghost")); k.button("New identity", () => { vi = (vi + 1) % VER.length; open(); }, "btn-s"); return b; });
  function choose(j){ const v = VER[vi]; if (step >= v.s.length) return; const want = RULES[v.s[step][1]], got = OB[j].textContent;
    if (got === want) { step++; msg = ""; } else msg = `Not ${got.toLowerCase()}: that does not turn the last line into the next one.`; }
  function open(){ k.showGroup(mode); stV.pause(); step = 0; stV.k = 0; msg = "";
    if (mode === "verify") { const v = VER[vi]; k.guard([strip(lineOf(v, v.s.length - 2 < 0 ? 0 : v.s.length - 2).eq)]); k.hint("Work on the left side only; each step names its rule."); }
    else if (mode === "turn") { const v = VER[vi]; k.guard([strip(`${sq(v.l)} ≡ ${sq(v.r)}: verified.`)]); k.hint("Choose the rule for each line."); }
    else { k.guard([]); k.hint("Pick a pair: identities coincide everywhere; a non-identity separates somewhere."); } }
  open();
  k.loop(() => { c.begin(); if (mode === "verify") drawVerify(); else if (mode === "graph") drawGraph(); else drawTurn(); });
};
})();
