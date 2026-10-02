/* ============ Labs: Algebra II, batch B2 (complex numbers, complex arithmetic, quadratics with complex solutions) ============ */
(function(){
const L = window.LABS;
const MI = "−";
const IH = "<i>i</i>";

/* --- small DOM-free helpers (candidates for kit-math) --- */
// √−n for an integer n > 0, simplified: "9i", "2√5 i" (text) or HTML
function iRoot(MR, n, html){
  const [s, t] = MR.sqrtParts(n), i = html ? IH : "i";
  if (t === 1) return (s === 1 ? "" : String(s)) + i;
  return MR.radStr(s, t, html) + " " + i;
}
// √N for an integer N ≥ 0, simplified: "5", "√13", "2√5"
const rootN = (MR, N, html) => { const [s, t] = MR.sqrtParts(N); return t === 1 ? String(s) : MR.radStr(s, t, html); };
// signed sum of integer terms [[value, suffix], …]: "12 − 8i + 3i − 2i²" (suffix may be HTML)
function sumT(terms){
  let s = "";
  for (const [v, suf] of terms) { const a = Math.abs(v), mag = a === 1 && suf ? "" : String(a); s += s ? (v < 0 ? " − " : " + ") : v < 0 ? MI : ""; s += mag + suf; }
  return s || "0";
}
const paren = v => (v < 0 ? `(${MI}${Math.abs(v)})` : String(v));

// Split layout: plane beside (wide) or above (narrow) a DOM host for a steps panel. Returns the plane's pad.
function split(c, host){
  const wide = c.w >= 600;
  const css = wide ? `left:${Math.round(c.w * 0.5)}px;right:0;top:0;bottom:0;padding:56px 14px 14px 4px`
    : `left:0;right:0;top:${Math.round(c.h * 0.54)}px;bottom:0;padding:4px 10px 10px`;
  if (host.dataset.css !== css || host.style.display === "none") { host.style.cssText = css; host.dataset.css = css; }
  return wide ? { l: 36, r: c.w * 0.5 + 8, t: 16, b: 28 } : { l: 36, r: 14, t: 16, b: c.h * 0.46 + 24 };
}
const hide = host => { if (host.style.display !== "none") host.style.display = "none"; };

// Grid + axes, then register the tick numbers and axis names as boxes so P.labels keeps clear of them.
function gridAxes(k, c, P, o = {}){
  P.grid(); P.axes();
  const MR = k.MR, d = c.d, sx = o.xstep || MR.niceStep(P.xmax - P.xmin), sy = o.ystep || MR.niceStep(P.ymax - P.ymin);
  const ax = Math.min(Math.max(0, P.ymin), P.ymax), ay = Math.min(Math.max(0, P.xmin), P.xmax), tf = `11px ${k.F.mono}`, nf = `italic 14px ${k.F.math}`;
  const f = v => (Math.abs(v) < 1e-9 ? "0" : String(+v.toFixed(6))).replace("-", MI);
  for (let x = Math.ceil(P.xmin / sx) * sx; x <= P.xmax + 1e-9; x += sx) { if (Math.abs(x) < 1e-9) continue; const w = d.width(f(x), tf), y = Math.min(P.top + P.height + 16, P.Y(ax) + 16); P.boxes.push({ x: P.X(x) - w / 2 - 2, y: y - 11, w: w + 4, h: 15 }); }
  for (let y = Math.ceil(P.ymin / sy) * sy; y <= P.ymax + 1e-9; y += sy) { if (Math.abs(y) < 1e-9) continue; const w = d.width(f(y), tf), xr = Math.max(P.left - 6, P.X(ay) - 7); P.boxes.push({ x: xr - w - 2, y: P.Y(y) - 8, w: w + 4, h: 16 }); }
  if (o.xlabel) { const w = d.width(o.xlabel, nf); P.boxes.push({ x: P.left + P.width - w - 2, y: P.Y(ax) - 24, w: w + 4, h: 19 }); }
  if (o.ylabel) { const w = d.width(o.ylabel, nf); P.boxes.push({ x: P.X(ay) + 6, y: P.top - 3, w: w + 4, h: 19 }); }
}

// Collect the controls a block of code adds, so each mode shows only its own.
const grabber = (k, G) => (m, fn) => { const before = new Set(k.ctl.children); const r = fn(); [...k.ctl.children].forEach(e => { if (!before.has(e)) G[m].push(e); }); return r; };

/* ---------- a2-complex: the complex plane, powers of i, roots of negatives ---------- */
L["a2-complex"] = k => {
  MathKit.attach(k);
  const { C, F, MR } = k, { Z, zT, sg, supT, sqrtParts, radStr } = MR;
  const c = k.canvas(), d = c.d, host = k.dom(), SP = k.stepsPanel(host);
  let mode = "plane", P = null;
  const G = { plane: [], pow: [], neg: [] }, grab = grabber(k, G);
  const z = { x: 3, y: 2, snap: 1, clamp: [-6, 6, -5, 5] };
  k.drag(c, () => (mode === "plane" ? P : null), [z]);

  grab("plane", () => {
    k.button("Put z on the real axis", () => { z.y = 0; }, "btn-s");
    k.button("Pure imaginary", () => { z.x = 0; if (!z.y) z.y = 3; }, "btn-s");
  });
  let nPow = 0, bigN = 27;
  const stP = grab("pow", () => k.stepper(() => 8, v => { nPow = v; }, { ms: 800 }));
  grab("pow", () => k.number("any exponent <i>n</i>", 0, 9999, bigN, v => { bigN = v; }, "5.5em"));
  let kNeg = 0;
  const S = grab("neg", () => k.params([
    { key: "n", label: `√<span class="mk-ol">−<i>n</i></span>, <i>n</i>`, min: 1, max: 100, step: 1, value: 4, cls: "c2", fmt: v => String(v) },
    { key: "m", label: `√<span class="mk-ol">−<i>m</i></span>, <i>m</i>`, min: 1, max: 100, step: 1, value: 9, cls: "c2", fmt: v => String(v) }
  ], () => { stN.reset(); guardNeg(); }));
  const stN = grab("neg", () => k.stepper(() => 4, v => { kNeg = v; }, { ms: 1100 }));
  k.hint("Drag z"); const hintEl = k.stage.lastElementChild;

  const guardNeg = () => { const [s, t] = sqrtParts(S.n * S.m); k.guard(mode === "neg" ? [`= ${MI}${radStr(s, t)}`] : []); };
  const show = () => {
    for (const m in G) G[m].forEach(e => { e.style.display = m === mode ? "" : "none"; });
    hintEl.style.display = mode === "plane" ? "" : "none";
    stP.reset(); stN.reset();
    if (mode === "neg") guardNeg(); else k.guard([]);
  };
  k.modes([["plane", "Plane"], ["pow", "Powers of i"], ["neg", "Roots of negatives"]], mode, m => { mode = m; show(); });

  // a + bi in the lab colours: real part amber, imaginary part cyan, i pink
  const zCol = (a, b) => {
    const iP = `<span class="c3">${IH}</span>`;
    if (b === 0) return `<span class="c1">${sg(a)}</span>`;
    const mag = Math.abs(b) === 1 ? "" : `<span class="c2">${Math.abs(b)}</span>`;
    if (a === 0) return (b < 0 ? MI : "") + mag + iP;
    return `<span class="c1">${sg(a)}</span> ${b < 0 ? MI : "+"} ${mag}${iP}`;
  };

  function drawPlane(){
    hide(host);
    P = k.cplane(c, { xmin: -6, xmax: 6, ymin: -5, ymax: 5, xstep: 1, ystep: 1 });
    gridAxes(k, c, P, { xstep: 1, ystep: 1, xlabel: "Re", ylabel: "Im" });
    const a = z.x, b = z.y;
    if (b && a) P.seg(a, b, a, 0, k.alpha(C.amber, .6), 1.5, [4, 4]);
    if (a && b) P.seg(a, b, 0, b, k.alpha(C.cyan, .6), 1.5, [4, 4]);
    if (a) P.seg(0, 0, a, 0, C.amber, 4);
    if (b) P.seg(0, 0, 0, b, C.cyan, 4);
    if (a || b) P.z(Z(a, b), k.alpha(C.text, .55), { vec: true, w: 1.5, r: 0.1 });
    d.circle(P.X(a), P.Y(b), 12, null, k.alpha(C.text, .35), 1.5);
    P.dot(a, b, C.text, 6);
    P.labels([
      { text: `z = ${zT(Z(a, b))}`, x: a, y: b, color: C.text, font: `600 16px ${F.math}`, prefer: "ne" },
      a ? { text: `Re z = ${sg(a)}`, x: a / 2, y: 0, color: C.amber, prefer: b > 0 ? "s" : "n" } : null,
      b ? { text: `Im z = ${sg(b)}`, x: 0, y: b / 2, color: C.cyan, prefer: a > 0 ? "w" : "e" } : null
    ]);
    const kind = b === 0 ? "a real number" : a === 0 ? "pure imaginary" : "a non-real complex number";
    k.readout({
      title: "The complex plane",
      big: `<span class="m"><i>z</i> = ${zCol(a, b)}</span>`,
      rows: [
        { lhs: "Re(<i>z</i>)", v: sg(a), cls: "c1", lbl: "real part: the shadow of z on the horizontal (real) axis" },
        { lhs: "Im(<i>z</i>)", v: sg(b), cls: "c2", lbl: "imaginary part: the shadow on the vertical axis; a real number, without the i" },
        { lhs: "point", v: `(${sg(a)}, ${sg(b)})`, lbl: `z is ${kind}` }
      ],
      landmark: b === 0
        ? { hit: true, big: `<span class="m">Im(<i>z</i>) = 0 ⇒ <i>z</i> = ${sg(a)} ∈ ℝ</span>`, note: "Real numbers are the complex numbers with imaginary part 0, so ℝ ⊂ ℂ: the real number line is the horizontal axis." }
        : { hit: false, big: `<span class="m"><i>a</i> + <i>bi</i> = <i>c</i> + <i>di</i> ⇔ <i>a</i> = <i>c</i>, <i>b</i> = <i>d</i></span>`, note: "Each point is exactly one complex number, so two complex numbers are equal only when both parts match." },
      narr: "Drag z around the plane. Drop it on the horizontal axis to make it real, or on the vertical axis to make it pure imaginary."
    });
  }

  const IV = ["1", "i", MI + "1", MI + "i"], IVH = ["1", IH, MI + "1", MI + IH];
  function drawPow(){
    hide(host);
    P = k.cplane(c, { xmin: -1.9, xmax: 1.9, ymin: -1.6, ymax: 1.6, xstep: 1, ystep: 1 });
    gridAxes(k, c, P, { xstep: 1, ystep: 1, xlabel: "Re", ylabel: "Im" });
    P.param(Math.cos, Math.sin, 0, 2 * Math.PI, k.alpha(C.text, .2), 1);
    const n = nPow;
    for (let j = 1; j <= n; j++) {
      const r = 1 + 0.17 * Math.floor((j - 1) / 4), a0 = (j - 1) * Math.PI / 2 + .1, a1 = j * Math.PI / 2 - .1, cur = j === n;
      const col = cur ? C.pink : k.alpha(C.pink, .35), w = cur ? 2.5 : 1.5;
      P.param(t => r * Math.cos(t), t => r * Math.sin(t), a0, a1, col, w);
      d.arrow(P.X(r * Math.cos(a1 - .12)), P.Y(r * Math.sin(a1 - .12)), P.X(r * Math.cos(a1)), P.Y(r * Math.sin(a1)), col, w);
    }
    const pos = [[1, 0], [0, 1], [-1, 0], [0, -1]], labels = [], pref = ["se", "ne", "sw", "se"];
    pos.forEach(([x, y], r) => {
      const ex = []; for (let j = r; j <= n; j += 4) ex.push(j);
      if (!ex.length) { P.dot(x, y, k.alpha(C.text, .25), 3); return; }
      const cur = n % 4 === r;
      P.dot(x, y, cur ? C.pink : r % 2 ? C.cyan : C.amber, cur ? 8 : 5.5);
      labels.push({ text: ex.map(j => "i" + supT(j)).join(" = ") + " = " + IV[r], x, y, color: cur ? C.pink : r % 2 ? C.cyan : C.amber, font: `${cur ? 600 : 400} 15px ${F.math}`, prefer: pref[r] });
    });
    P.labels(labels);
    const r = n % 4, N = bigN, rr = N % 4;
    k.readout({
      title: "Powers of i",
      big: `<span class="m"><span class="c3">${IH}</span><sup>${n}</sup> = <span class="c3">${IVH[r]}</span></span>`,
      rows: [
        n ? { lhs: `${IH}<sup>${n}</sup> = ${IH}<sup>${n - 1}</sup> · ${IH}`, v: `${IVH[(n - 1) % 4]} · ${IH} = ${IVH[r]}`, cls: "c3", lbl: "each step multiplies by i: a quarter turn counterclockwise" }
          : { lhs: `${IH}<sup>0</sup>`, v: "1", cls: "c1", lbl: "any nonzero number to the power 0 is 1; press Step to multiply by i" },
        { lhs: `${n} ÷ 4`, v: `remainder ${r}`, lbl: `so ${"i" + supT(n)} = ${"i" + supT(r)}: only the remainder matters` },
        { lhs: `${IH}<sup>${N}</sup>`, v: `= ${IH}<sup>${rr}</sup> = ${IVH[rr]}`, cls: "c3", lbl: `${N} = 4 · ${Math.floor(N / 4)} + ${rr}; each i⁴ = 1 drops out` }
      ],
      landmark: { hit: n === 4 || n === 8, big: `<span class="m">${IH}<sup>4</sup> = 1</span>`, note: "Four quarter turns make a full turn, so the powers of i repeat in a cycle of 4: i⁴ᵏ⁺ʳ = iʳ." },
      narr: "Press Step to multiply by i again and watch the point turn. Type any exponent n to reduce it with the remainder of n ÷ 4."
    });
  }

  const view = { e: 5 };
  function drawNeg(dt){
    const n = S.n, m = S.m, K = kNeg;
    const rn = Math.sqrt(n), rm = Math.sqrt(m), rp = Math.sqrt(n * m);
    const [s3, t3] = sqrtParts(n * m), valT = radStr(s3, t3), valH = radStr(s3, t3, true);
    k.smooth(view, { e: Math.max(rn, rm, K >= 2 ? rp : 0, 2.5) * 1.3 }, dt);
    const pad = split(c, host);
    P = k.cplane(c, { xmin: -view.e, xmax: view.e, ymin: -view.e * 0.7, ymax: view.e, pad });
    gridAxes(k, c, P, { xlabel: "Re", ylabel: "Im" });
    const labels = [];
    if (K >= 1) {
      P.seg(0, 0, 0, Math.max(rn, rm), k.alpha(C.cyan, .5), 2);
      P.dot(0, rn, C.cyan, 6); labels.push({ text: `√−${n} = ${iRoot(MR, n)}`, x: 0, y: rn, color: C.cyan, prefer: "e" });
      if (m !== n) { P.dot(0, rm, C.cyan, 6); labels.push({ text: `√−${m} = ${iRoot(MR, m)}`, x: 0, y: rm, color: C.cyan, prefer: "w" }); }
    }
    if (K >= 2) {
      P.dot(0, rp, k.alpha(C.pink, .8), 5);
      P.param(t => rp * Math.cos(t), t => rp * Math.sin(t), Math.PI / 2 + .04, Math.PI - .06, C.pink, 2, [5, 4]);
      d.arrow(P.X(rp * Math.cos(Math.PI - .14)), P.Y(rp * Math.sin(Math.PI - .14)), P.X(rp * Math.cos(Math.PI - .04)), P.Y(rp * Math.sin(Math.PI - .04)), C.pink, 2);
      labels.push({ text: `${valT} i`, x: 0, y: rp, color: C.pink, prefer: "e" });
      labels.push({ text: "× i", x: rp * Math.cos(Math.PI * 0.75), y: rp * Math.sin(Math.PI * 0.75), color: C.pink, prefer: "nw" });
    }
    if (K >= 3) { P.z(Z(-rp, 0), C.amber, { vec: true, w: 3, r: 7 }); labels.push({ text: `√−${n} · √−${m} = ${MI}${valT}`, x: -rp, y: 0, color: C.amber, font: `600 15px ${F.math}`, prefer: "n" }); }
    if (K >= 4) { P.dot(rp, 0, k.alpha(C.text, .45), 5); labels.push({ text: `√${n * m} = ${valT}`, x: rp, y: 0, color: C.muted, prefer: "s" }); }
    P.labels(labels);
    const ol = v => `√<span class="mk-ol">${v}</span>`;
    const iA = `<span class="c2">${iRoot(MR, n, true)}</span>`, iB = `<span class="c2">${iRoot(MR, m, true)}</span>`;
    const simp = !(t3 === n * m && s3 === 1);
    SP.set([
      { tag: "product", eq: `${ol(MI + n)} · ${ol(MI + m)}`, why: "Both radicands are negative, so the product rule for radicals does not apply yet." },
      { tag: "use i", eq: `= <span class="c3">${IH}</span>${ol(n)} · <span class="c3">${IH}</span>${ol(m)} = ${iA} · ${iB}`, why: "Rewrite each root first: √−b = i√b." },
      { tag: "i²", eq: `= <span class="c3">${IH}</span><sup>2</sup> · ${ol(n + " · " + m)}${simp ? ` = <span class="c3">${IH}</span><sup>2</sup> · ${valH}` : ""}`, why: "Now both radicands are positive, so √n · √m = √(nm)." },
      { tag: "i² = −1", eq: `= <span class="c1">${MI}${valH}</span>`, why: "Two factors of i make i² = −1: two quarter turns point along the negative real axis." },
      { tag: "compare", eq: `${ol(`(${MI}${n})(${MI}${m})`)} = ${ol(n * m)} = ${valH} ≠ ${MI}${valH}`, why: "√a · √b = √(ab) needs a, b ≥ 0. With two negative radicands it gives the wrong sign." }
    ], K);
    const why = v => { const [s, t] = sqrtParts(v); return t === 1 ? `${v} = ${s}²` : s > 1 ? `${v} = ${s * s} · ${t}: take out the square factor ${s * s}` : `${v} has no square factor`; };
    k.readout({
      title: "Square roots of negatives",
      big: `<span class="m">√<span class="mk-ol">−<i>b</i></span> = <span class="c3">${IH}</span>√<span class="mk-ol"><i>b</i></span></span>`,
      rows: [
        { lhs: ol(MI + n), v: iRoot(MR, n, true), cls: "c2", lbl: why(n) },
        { lhs: ol(MI + m), v: iRoot(MR, m, true), cls: "c2", lbl: why(m) },
        { lhs: `√<i>a</i> · √<i>b</i> = √<span class="mk-ol"><i>ab</i></span>`, v: "", lbl: "true only when a ≥ 0 and b ≥ 0" }
      ],
      landmark: K >= 3
        ? { hit: true, big: `<span class="m">${ol(MI + n)} · ${ol(MI + m)} = ${MI}${valH}</span>`, note: `Not ${valH}: the two factors of i multiply to i² = −1. Writing √(${MI}${n} · ${MI}${m}) first would lose that sign.` }
        : { hit: false, big: "Rewrite with i before multiplying", note: "Step through the product to see where the minus sign comes from." },
      narr: "Pick n and m with the sliders, then press Step. Try n = m: √−n · √−n = −n."
    });
  }

  k.loop(dt => { c.begin(); if (mode === "plane") drawPlane(); else if (mode === "pow") drawPow(); else drawNeg(dt); });
  show();
};

/* ---------- a2-complex-ops: add (parallelogram), multiply (lengths multiply), divide (conjugate) ---------- */
L["a2-complex-ops"] = k => {
  MathKit.attach(k);
  const { C, F, MR } = k, { Z, Q, zT, zH, qH, sg, fmtN } = MR;
  const c = k.canvas(), d = c.d, host = k.dom(), SP = k.stepsPanel(host);
  let mode = "add", P = null, sub = false, K = 0;
  const z = { x: 3, y: 1, snap: 1 }, w = { x: 1, y: 3, snap: 1 };
  const DEF = { add: [[3, 1], [1, 3]], mul: [[3, 2], [1, 2]], div: [[7, 4], [2, -1]] };
  const CL = { add: [-5, 5, -5, 5], mul: [-4, 4, -4, 4], div: [-7, 7, -6, 6] };
  const G = { add: [], mul: [], div: [] }, grab = grabber(k, G);
  const dr = k.drag(c, () => P, [z, w], () => { if (mode === "div") { if (!w.x && !w.y) w.x = 1; st.reset(); setGuard(); } });

  grab("add", () => k.check("Subtract: z − w", sub, v => { sub = v; }));
  grab("mul", () => {
    k.button("w = i", () => { w.x = 0; w.y = 1; }, "btn-s");
    k.button("w = z̄", () => { w.x = z.x; w.y = -z.y; }, "btn-s");
  });
  const st = grab("div", () => k.stepper(() => 4, v => { K = v; }, { ms: 1100 }));
  const rnd = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
  grab("div", () => k.button("New problem", () => {
    for (let t = 0; t < 400; t++) {
      const q = Z(rnd(-3, 3), rnd(-3, 3)), ww = Z(rnd(-3, 3), rnd(-3, 3));
      if (Q.val(ww.im) === 0 || Z.norm(q).n === 0) continue;
      const zz = Z.mul(q, ww), a = Q.val(zz.re), b = Q.val(zz.im);
      if (Math.abs(a) > 7 || Math.abs(b) > 6 || (a === z.x && b === z.y)) continue;
      z.x = a; z.y = b; w.x = Q.val(ww.re); w.y = Q.val(ww.im); break;
    }
    st.reset(); setGuard();
  }, "btn ghost"));
  k.hint("Drag z and w");

  const setGuard = () => {
    if (mode !== "div") { k.guard([]); return; }
    k.guard([`= ${zT(Z.div(Z(z.x, z.y), Z(w.x, w.y)))}`]);
  };
  const show = () => {
    for (const m in G) G[m].forEach(e => { e.style.display = m === mode ? "" : "none"; });
    [[z.x, z.y], [w.x, w.y]] = DEF[mode]; z.clamp = w.clamp = CL[mode];
    st.reset(); setGuard();
  };
  k.modes([["add", "Add"], ["mul", "Multiply"], ["div", "Divide"]], mode, m => { mode = m; show(); });

  const view = { e: 6 };
  const extent = pts => Math.max(4.5, ...pts.map(([x, y]) => Math.max(Math.abs(x), Math.abs(y)))) * 1.2;
  const zc = (zz, cls) => `<span class="m ${cls}">${zH(zz)}</span>`;
  const lenH = N => (rootT(N, true));
  const rootT = (N, html) => rootN(MR, N, html);

  function frame(dt, pts, pad){
    if (dr.active < 0) k.smooth(view, { e: extent(pts) }, dt);
    P = k.cplane(c, { xmin: -view.e, xmax: view.e, ymin: -view.e, ymax: view.e, pad });
    gridAxes(k, c, P, { xlabel: "Re", ylabel: "Im" });
  }
  const handle = (x, y, col) => { d.circle(P.X(x), P.Y(y), 11, null, k.alpha(col, .45), 1.5); };

  function drawAdd(dt){
    hide(host);
    const a = z.x, b = z.y, wc = sub ? [-w.x, -w.y] : [w.x, w.y], r = [a + wc[0], b + wc[1]];
    frame(dt, [[a, b], [w.x, w.y], r, wc]);
    P.seg(a, b, r[0], r[1], k.alpha(C.cyan, .55), 1.5, [5, 4]);
    P.seg(wc[0], wc[1], r[0], r[1], k.alpha(C.amber, .55), 1.5, [5, 4]);
    if (sub) P.z(Z(wc[0], wc[1]), k.alpha(C.cyan, .5), { vec: true, w: 1.5, r: 3.5 });
    P.z(Z(a, b), C.amber, { vec: true }); P.z(Z(w.x, w.y), C.cyan, { vec: true }); P.z(Z(r[0], r[1]), C.pink, { vec: true, w: 3, r: 6.5 });
    handle(a, b, C.amber); handle(w.x, w.y, C.cyan);
    const R = Z(r[0], r[1]);
    P.labels([
      { text: `z = ${zT(Z(a, b))}`, x: a, y: b, color: C.amber },
      { text: `w = ${zT(Z(w.x, w.y))}`, x: w.x, y: w.y, color: C.cyan },
      sub ? { text: "−w", x: wc[0], y: wc[1], color: C.cyan } : null,
      { text: `${sub ? "z − w" : "z + w"} = ${zT(R)}`, x: r[0], y: r[1], color: C.pink, font: `600 15px ${F.math}` }
    ]);
    const op = sub ? MI : "+";
    const isConj = !sub && w.x === a && w.y === -b && b !== 0;
    k.readout({
      title: sub ? "Subtract z − w" : "Add z + w",
      big: `<span class="m"><span class="c1"><i>z</i></span> ${op} <span class="c2"><i>w</i></span> = ${zc(R, "c3")}</span>`,
      rows: [
        { lhs: `(${zc(Z(a, b), "c1")}) ${op} (${zc(Z(w.x, w.y), "c2")})`, v: `= ${zc(R, "c3")}` },
        { lhs: "real parts", v: `${sg(a)} ${op} ${paren(w.x)} = ${sg(r[0])}`, cls: "c3", lbl: "combine the real parts" },
        { lhs: "imaginary parts", v: `${sg(b)} ${op} ${paren(w.y)} = ${sg(r[1])}`, cls: "c3", lbl: "combine the imaginary parts, separately" },
        sub ? { lhs: "<i>z</i> − <i>w</i> = <i>z</i> + (−<i>w</i>)", lbl: "subtracting w adds its opposite: the cyan arrow turned around" }
          : { lhs: "parallelogram", lbl: "z + w is the far corner of the parallelogram on z and w: w's arrow placed at the tip of z" }
      ],
      landmark: r[1] === 0
        ? { hit: true, big: `<span class="m">Im = 0: ${sub ? "z − w" : "z + w"} = ${sg(r[0])}</span>`, note: isConj ? `w = z̄, and z + z̄ = 2a = ${sg(2 * a)}: a number plus its conjugate is real.` : "The imaginary parts cancel, so the result lies on the real axis." }
        : { hit: false, big: `<span class="m"><i>z</i> ${op} <i>w</i> = (<i>a</i> ${op} <i>c</i>) + (<i>b</i> ${op} <i>d</i>)<i>i</i></span>`, note: "Drag w until the pink arrow lies on the real axis." },
      narr: "Drag the tips of z and w. Tick Subtract to see z − w as z plus the opposite of w."
    });
  }

  function drawMul(dt){
    hide(host);
    const a = z.x, b = z.y, cc = w.x, dd = w.y, zz = Z(a, b), ww = Z(cc, dd), pr = Z.mul(zz, ww), pv = Z.val(pr);
    frame(dt, [[a, b], [cc, dd], [pv.re, pv.im], [a, -b]]);
    if (b) P.seg(a, b, a, -b, k.alpha(C.violet, .5), 1.2, [3, 4]);
    P.hole(a, -b, C.violet, 5.5);
    P.z(zz, C.amber, { vec: true }); P.z(ww, C.cyan, { vec: true }); P.z(pr, C.pink, { vec: true, w: 3, r: 6.5 });
    handle(a, b, C.amber); handle(cc, dd, C.cyan);
    const Nz = a * a + b * b, Nw = cc * cc + dd * dd, wide = c.w >= 600;
    P.labels([
      { text: `z = ${zT(zz)}`, x: a, y: b, color: C.amber },
      { text: `w = ${zT(ww)}`, x: cc, y: dd, color: C.cyan },
      { text: `zw = ${zT(pr)}`, x: pv.re, y: pv.im, color: C.pink, font: `600 15px ${F.math}` },
      b ? { text: "z̄", x: a, y: -b, color: C.violet } : null,
      wide && Nz ? { text: `|z| = ${rootT(Nz)}`, x: a / 2, y: b / 2, color: C.amber, font: `13px ${F.math}` } : null,
      wide && Nw ? { text: `|w| = ${rootT(Nw)}`, x: cc / 2, y: dd / 2, color: C.cyan, font: `13px ${F.math}` } : null
    ]);
    const isConj = cc === a && dd === -b && b !== 0, isI = cc === 0 && dd === 1;
    k.readout({
      title: "Multiply z · w",
      big: `<span class="m"><span class="c1"><i>z</i></span><span class="c2"><i>w</i></span> = ${zc(pr, "c3")}</span>`,
      rows: [
        { lhs: `(${zc(zz, "c1")})(${zc(ww, "c2")})`, v: "= " + sumT([[a * cc, ""], [a * dd, IH], [b * cc, IH], [b * dd, `${IH}<sup>2</sup>`]]), lbl: "FOIL: every term times every term" },
        { lhs: `${IH}<sup>2</sup> = −1`, v: `(${sg(a * cc)} − ${paren(b * dd)}) + (${sg(a * dd)} + ${paren(b * cc)})${IH}`, cls: "c3", lbl: "the bd·i² term moves into the real part" },
        { lhs: "|<i>z</i>| · |<i>w</i>|", v: `${lenH(Nz)} · ${lenH(Nw)} = ${lenH(Nz * Nw)}`, lbl: `lengths multiply: |zw| = |z||w| ≈ ${fmtN(Math.sqrt(Nz * Nw), 3)}` },
        { lhs: "<i>z̄</i>", v: zH(Z.conj(zz)), cls: "c4", lbl: "conjugate of z: its mirror image across the real axis (violet ring)" }
      ],
      landmark: isConj
        ? { hit: true, big: `<span class="m"><i>z</i> · <i>z̄</i> = ${a}<sup>2</sup> + ${paren(b)}<sup>2</sup> = ${Nz}</span>`, note: "A number times its conjugate is real: z·z̄ = a² + b² = |z|²." }
        : isI && (a || b) ? { hit: true, big: `<span class="m"><i>i</i>(${zH(zz)}) = ${zH(pr)}</span>`, note: "Multiplying by i turns z a quarter turn counterclockwise and keeps its length: i(a + bi) = −b + ai." }
        : { hit: false, big: `<span class="m">|<i>zw</i>| = |<i>z</i>| · |<i>w</i>|</span>`, note: "Drag w onto the violet ring z̄ to make the product real, or press w = i." },
      narr: "Drag z and w. The product's length is the product of the lengths; its direction turns by w's angle, which Precalculus measures."
    });
  }

  function drawDiv(dt){
    const a = z.x, b = z.y, cc = w.x, dd = w.y, zz = Z(a, b), ww = Z(cc, dd), wb = Z.conj(ww), q = Z.div(zz, ww), qv = Z.val(q);
    const pad = split(c, host);
    frame(dt, [[a, b], [cc, dd], [cc, -dd], K >= 4 ? [qv.re, qv.im] : [0, 0]], pad);
    if (dd) P.seg(cc, dd, cc, -dd, k.alpha(C.violet, .5), 1.2, [3, 4]);
    P.hole(cc, -dd, C.violet, 5.5);
    P.z(zz, C.amber, { vec: true }); P.z(ww, C.cyan, { vec: true });
    handle(a, b, C.amber); handle(cc, dd, C.cyan);
    if (K >= 4) P.z(q, C.pink, { vec: true, w: 3, r: 6.5 });
    P.labels([
      { text: `z = ${zT(zz)}`, x: a, y: b, color: C.amber },
      { text: `w = ${zT(ww)}`, x: cc, y: dd, color: C.cyan },
      dd ? { text: `w̄ = ${zT(wb)}`, x: cc, y: -dd, color: C.violet } : null,
      K >= 4 ? { text: `z/w = ${zT(q)}`, x: qv.re, y: qv.im, color: C.pink, font: `600 15px ${F.math}` } : null
    ]);
    const N = cc * cc + dd * dd, X = a * cc + b * dd, Y = b * cc - a * dd;
    const fr = (t, bt) => `<span class="fr"><span>${t}</span><span>${bt}</span></span>`;
    const zA = `<span class="c1">${zH(zz)}</span>`, wA = `<span class="c2">${zH(ww)}</span>`, wB = `<span class="c4">${zH(wb)}</span>`;
    SP.set([
      { tag: "set up", eq: `${fr(zA, wA)}`, why: "w ≠ 0. The goal is a real denominator." },
      { tag: "conjugate", eq: `= ${fr(zA, wA)} · ${fr(wB, wB)}`, why: `w̄ = ${zT(wb)}: same real part, opposite imaginary part. Multiplying by w̄/w̄ multiplies by 1.` },
      { tag: "numerator", eq: `(${zA})(${wB}) = ${sumT([[a * cc, ""], [-a * dd, IH], [b * cc, IH], [-b * dd, `${IH}<sup>2</sup>`]])} = ${zH(Z(X, Y))}`, why: "FOIL, then replace i² by −1." },
      { tag: "denominator", eq: `(${wA})(${wB}) = ${paren(cc)}<sup>2</sup> + ${paren(dd)}<sup>2</sup> = ${N}`, why: "w · w̄ = c² + d² is always a positive real number." },
      { tag: "standard form", eq: `${fr(zH(Z(X, Y)), N)} = ${qH(Q(X, N))} ${Y < 0 ? MI : "+"} ${qH(Q(Math.abs(Y), N))}${IH} = <span class="c3">${zH(q)}</span>`, why: `Split and reduce. Check: (${zT(q)})(${zT(ww)}) = ${zT(Z.mul(q, ww))}.` }
    ], K);
    k.readout({
      title: "Divide z ÷ w",
      big: K >= 4 ? `<span class="m"><span class="fr"><span><i>z</i></span><span><i>w</i></span></span> = ${zc(q, "c3")}</span>` : `<span class="m"><span class="fr"><span><i>z</i></span><span><i>w</i></span></span> = ${fr(zA, wA)}</span>`,
      rows: [
        { lhs: "<i>w̄</i>", v: zH(wb), cls: "c4", lbl: "conjugate of the divisor: w reflected across the real axis (violet ring)" },
        { lhs: "<i>w</i> · <i>w̄</i>", v: String(N), lbl: "= c² + d² = |w|², the real denominator" }
      ],
      landmark: K >= 4
        ? { hit: true, big: `<span class="m">(${zH(q)}) · (${zH(ww)}) = ${zH(zz)}</span>`, note: "Quotient times divisor gives back z, so the division is right." }
        : { hit: false, big: `<span class="m">multiply by <span class="c4"><i>w̄</i></span>/<span class="c4"><i>w̄</i></span></span>`, note: "Press Step: the conjugate turns the denominator into a real number." },
      narr: "Step through the division. Drag z or w (the steps restart) or press New problem."
    });
  }

  k.loop(dt => { c.begin(); if (mode === "add") drawAdd(dt); else if (mode === "mul") drawMul(dt); else drawDiv(dt); });
  show();
};

/* ---------- a2-quad-complex: parabola beside the complex plane of its roots ---------- */
L["a2-quad-complex"] = k => {
  MathKit.attach(k);
  const { C, F, MR } = k, { Q, quadRoots, rootsStr, radStr, qT, qH } = MR;
  const c = k.canvas(), d = c.d;
  let lastA = 1;
  const S = k.params([
    { key: "a", min: -3, max: 3, step: 0.5, value: 1, cls: "c1" },
    { key: "b", min: -6, max: 6, step: 1, value: -4, cls: "c1" },
    { key: "c", min: -8, max: 14, step: 0.5, value: 13, cls: "c1" }
  ], (key, v) => { if (key === "a" && v === 0) S.set("a", lastA > 0 ? -0.5 : 0.5); lastA = S.a; });
  const preset = (a, b, cc) => { S.set("a", a); S.set("b", b); S.set("c", cc); lastA = a; };
  k.button("x² − 4x + 13", () => preset(1, -4, 13), "btn-s");
  k.button("Δ = 0", () => preset(1, -4, 4), "btn-s");
  k.button("x² + 1", () => preset(1, 0, 1), "btn-s");
  k.guard([]);

  // one root as text: p ± s√t (times i when complex)
  const rootTxt = (R, sgn) => {
    if (R.kind === "double") return qT(R.p);
    if (R.kind === "two rational") return qT(R.exact[sgn < 0 ? 0 : 1]);
    const mag = (Q.eq(R.s, 1) && R.t === 1 ? (R.imag ? "" : "1") : radStr(R.s, R.t)) + (R.imag ? "i" : "");
    return R.p.n === 0 ? (sgn < 0 ? MI : "") + mag : qT(R.p) + (sgn < 0 ? " − " : " + ") + mag;
  };
  const pq = v => (v < 0 ? `(${qT(v)})` : qT(v));
  const view = { y0: -3, y1: 21, e: 5 };

  k.loop(dt => {
    const a = S.a || 0.5, b = S.b, cc = S.c;
    const R = quadRoots(a, b, cc), D = Q.val(R.D), p = Q.val(R.p), kq = Q.sub(Q(cc), Q.div(Q(b * b), Q.mul(4, a))), kv = Q.val(kq);
    const f = x => a * x * x + b * x + cc;
    const yT = a > 0 ? { y0: Math.min(-3, kv - 3), y1: Math.max(8, kv + 12) } : { y0: Math.min(-8, kv - 12), y1: Math.max(3, kv + 3) };
    const ext = Math.max(4, ...R.values.map(v => Math.max(Math.abs(v.re), Math.abs(v.im)))) * 1.25;
    k.smooth(view, Object.assign(yT, { e: ext }), dt);
    c.begin();
    const wide = c.w >= 600, gx = wide ? c.w * 0.55 : c.w, gy = wide ? c.h : c.h * 0.55;
    // left / top: the parabola
    const PG = k.plane(c, { xmin: -8, xmax: 8, ymin: view.y0, ymax: view.y1, xstep: 2, xlabel: "x", ylabel: "y", pad: wide ? { l: 40, r: c.w - gx + 14, t: 16, b: 30 } : { l: 40, r: 16, t: 16, b: c.h - gy + 18 } });
    gridAxes(k, c, PG, { xstep: 2, xlabel: "x", ylabel: "y" });
    PG.seg(p, PG.ymin, p, PG.ymax, C.violet, 1.5, [6, 5]);
    PG.curve(f, C.amber, { w: 3 });
    PG.dot(p, kv, C.amber, 4.5);
    const gl = [
      { text: "y = " + MR.polyT([cc, b, a]), x: PG.xmin, y: PG.ymax, color: C.muted, font: `13px ${F.ui}`, prefer: "se" },
      { text: `x = ${qT(R.p)}`, x: p, y: PG.ymin + (PG.ymax - PG.ymin) * 0.08, color: C.violet, prefer: "e" },
      { text: `(${qT(R.p)}, ${qT(kq)})`, x: p, y: kv, color: C.amber, prefer: a > 0 ? "s" : "n" }
    ];
    if (!R.imag) R.values.forEach((v, i) => { PG.dot(v.re, 0, C.cyan, 6); gl.push({ text: rootTxt(R, R.values.length === 1 ? 0 : i ? 1 : -1), x: v.re, y: 0, color: C.cyan, prefer: a > 0 ? (i ? "se" : "sw") : (i ? "ne" : "nw") }); });
    PG.labels(gl);
    // divider
    if (wide) d.line(gx, 14, gx, c.h - 14, k.alpha(C.text, .15), 1); else d.line(14, gy, c.w - 14, gy, k.alpha(C.text, .15), 1);
    // right / bottom: the roots in the complex plane
    const PC = k.cplane(c, { xmin: -view.e, xmax: view.e, ymin: -view.e, ymax: view.e, pad: wide ? { l: gx + 34, r: 14, t: 16, b: 30 } : { l: 40, r: 16, t: gy + 10, b: 28 }, modes: false });
    gridAxes(k, c, PC, { xlabel: "Re", ylabel: "Im" });
    PC.seg(p, PC.ymin, p, PC.ymax, C.violet, 1.5, [6, 5]);
    const cl = [{ text: "roots in ℂ", x: PC.xmin, y: PC.ymax, color: C.muted, font: `13px ${F.ui}`, prefer: "se" }];
    if (R.imag) PC.seg(p, R.values[0].im, p, R.values[1].im, k.alpha(C.cyan, .5), 1.5, [3, 3]);
    R.values.forEach((v, i) => {
      PC.dot(v.re, v.im, C.cyan, 6.5);
      if (R.kind === "double") d.circle(PC.X(v.re), PC.Y(v.im), 11, null, C.cyan, 1.5);
      cl.push({ text: R.kind === "double" ? `${qT(R.p)} (double)` : rootTxt(R, i ? 1 : -1), x: v.re, y: v.im, color: C.cyan, prefer: R.imag ? (i ? "ne" : "se") : (i ? "ne" : "nw") });
    });
    PC.labels(cl);

    const kind = { "two rational": "Δ > 0 · two real roots", "two irrational": "Δ > 0 · two real roots", double: "Δ = 0 · one repeated real root", complex: "Δ < 0 · two non-real conjugate roots" }[R.kind];
    k.readout({
      title: kind,
      big: `<span class="m c2"><i>x</i> = ${rootsStr(R, true)}</span>`,
      rows: [
        { lhs: `<span class="c3">Δ</span> = <i>b</i><sup>2</sup> − 4<i>ac</i>`, v: `${pq(b)}<sup>2</sup> − 4${`(${qT(a)})`}(${qT(cc)}) = ${qT(R.D)}`, cls: "c3", lbl: D < 0 ? "negative: √Δ = i√(−Δ), so the ± moves up and down" : D === 0 ? "zero: the ± adds nothing" : "positive: the ± moves left and right" },
        { lhs: `<span class="c4"><i>p</i></span> = −<i>b</i>/(2<i>a</i>)`, v: qH(R.p), cls: "c4", lbl: "axis of symmetry x = p, and the real part of both roots" },
        R.imag ? { lhs: "<i>q</i> = √(−Δ)/(2|<i>a</i>|)", v: radStr(R.s, R.t, true), cls: "c2", lbl: "the roots sit q above and below the real axis" } : null,
        { lhs: "vertex", v: `(${qH(R.p)}, ${qH(kq)})`, cls: "c1", lbl: D < 0 ? `k = −Δ/(4a) has the sign of a: the parabola stays ${a > 0 ? "above" : "below"} the x-axis` : D === 0 ? "the vertex touches the x-axis" : "the parabola crosses the x-axis at the real roots" }
      ],
      landmark: R.kind === "double"
        ? { hit: true, big: `<span class="m">Δ = 0: <i>x</i> = ${qH(R.p)} twice</span>`, note: "The two roots meet on the real axis and the vertex touches the x-axis. Push the vertex away from the axis and they split vertically into p ± qi." }
        : { hit: false, big: "Δ = 0 is the boundary", note: D < 0 ? "The parabola misses the x-axis, so the roots are a conjugate pair off the real axis, mirror images across it." : "Two x-intercepts: both roots lie on the real axis, mirror images across x = p." },
      narr: `Move c to pull the vertex toward the x-axis and away from it: the roots slide together along the real axis, meet at Δ = 0, then split up and down.`
    });
  });
};
})();
