/* ============ Labs: Geometry C (rigid motions, symmetry, dilations, congruence, isosceles) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const ng = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const Q = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const qv = q => q.n / q.d;
const qt = q => q.d === 1 ? ng(q.n) : ng(q.n) + "/" + q.d;
const FR = (t, b) => `<span class="fr"><span>${t}</span><span>${b}</span></span>`;
const qh = q => q.d === 1 ? ng(q.n) : (q.n < 0 ? "−" : "") + FR(Math.abs(q.n), q.d);
const f1 = v => { const s = (Math.round(v * 10) / 10).toFixed(1); return s === "-0.0" ? "0.0" : s.replace("-", "−"); };
const f2 = v => { const s = (Math.round(v * 100) / 100).toFixed(2); return s === "-0.00" ? "0.00" : s.replace("-", "−"); };
const RAD = Math.PI / 180;
// simplified radical: n = a²·b
function sqf(n){ let a = 1, b = n; for (let f = 2; f * f <= b; f++) while (b % (f * f) === 0) { b /= f * f; a *= f; } return [a, b]; }
const radT = n => { if (n === 0) return "0"; const [a, b] = sqf(n); return b === 1 ? String(a) : (a === 1 ? "" : a) + "√" + b; };
// |q|·√n as HTML (q rational, n integer)
function radQ(q, n){ if (n === 0 || q.n === 0) return "0"; const [a, b] = sqf(n); const co = Q(Math.abs(q.n) * a, q.d); if (b === 1) return qh(co); return (co.n === 1 && co.d === 1 ? "" : qh(co)) + "√" + b; }
const LR = `<span style="font-family:var(--sans)">↔</span>`;
const wrapOf = el => el.closest(".ctl") || el;
const showEl = (el, on) => { wrapOf(el).style.display = on ? "" : "none"; };

/* ---- pointer dragging (pick returns a handle or null; pure, also used for hover) ---- */
function drag(c, pick, move, end){
  let cur = null;
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e); const h = pick(p); if (h == null) return; cur = h; try { c.cv.setPointerCapture(e.pointerId); } catch (_) {} e.preventDefault(); move(cur, p); });
  c.cv.addEventListener("pointermove", e => { const p = c.xy(e); if (cur == null) { c.cv.style.cursor = pick(p) != null ? "grab" : "default"; return; } c.cv.style.cursor = "grabbing"; move(cur, p); });
  const up = () => { if (cur != null && end) end(cur); cur = null; c.cv.style.cursor = "default"; };
  c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  return () => cur != null;
}
const nearest = (p, list, r = 18) => { let best = null, bd = r; list.forEach((q, i) => { if (!q) return; const dd = Math.hypot(p.x - q.x, p.y - q.y); if (dd <= bd) { bd = dd; best = i; } }); return best; };

/* ---- drawing helpers (pixel coordinates) ---- */
function poly(g, pts, fill, stroke, lw = 2, dash){ g.save(); g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.lineJoin = "round"; if (dash) g.setLineDash(dash); g.stroke(); } g.restore(); }
function arcAng(g, V, P, R_, r, color, lw = 2, n = 1){
  const a1 = Math.atan2(P.y - V.y, P.x - V.x); let dl = Math.atan2(R_.y - V.y, R_.x - V.x) - a1;
  while (dl > Math.PI) dl -= 2 * Math.PI; while (dl <= -Math.PI) dl += 2 * Math.PI;
  g.save(); g.strokeStyle = color; g.lineWidth = lw; for (let i = 0; i < n; i++) { g.beginPath(); g.arc(V.x, V.y, r + i * 4.5, a1, a1 + dl, dl < 0); g.stroke(); } g.restore();
  return a1 + dl / 2;
}
function rightMark(g, V, P, R_, s, color){ const u = unitv(P, V), w = unitv(R_, V); g.save(); g.strokeStyle = color; g.lineWidth = 1.6; g.beginPath(); g.moveTo(V.x + u.x * s, V.y + u.y * s); g.lineTo(V.x + (u.x + w.x) * s, V.y + (u.y + w.y) * s); g.lineTo(V.x + w.x * s, V.y + w.y * s); g.stroke(); g.restore(); }
function unitv(P, V){ const dx = P.x - V.x, dy = P.y - V.y, l = Math.hypot(dx, dy) || 1; return { x: dx / l, y: dy / l }; }
function ticks(g, P, R_, n, color, len = 6){ if (!n) return; const mx = (P.x + R_.x) / 2, my = (P.y + R_.y) / 2, u = unitv(R_, P), nx = -u.y, ny = u.x; g.save(); g.strokeStyle = color; g.lineWidth = 2; for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 5; g.beginPath(); g.moveTo(mx + u.x * o - nx * len, my + u.y * o - ny * len); g.lineTo(mx + u.x * o + nx * len, my + u.y * o + ny * len); g.stroke(); } g.restore(); }
function labAway(d, s, P, from, color, font, dist = 15){ const u = unitv(P, from); d.text(s, P.x + u.x * dist, P.y + u.y * dist, { font, color, align: "center", base: "middle" }); }
function longLine(P, x0, y0, ux, uy, color, w, dash){ const L_ = 400; P.line(x0 - ux * L_, y0 - uy * L_, x0 + ux * L_, y0 + uy * L_, color, w, dash); }
const cen = pts => ({ x: pts.reduce((s, p) => s + p.x, 0) / pts.length, y: pts.reduce((s, p) => s + p.y, 0) / pts.length });
const topBelow = (el, extra = 10) => (el ? el.offsetTop + el.offsetHeight + extra : 16);

/* ===================== g-transformations ===================== */
L["g-transformations"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const T0 = [[1, 1], [5, 1], [1, 4]];
  let tri = T0.map(([x, y]) => ({ x, y })), mode = "tr", va = -6, vb = 2, mir = "y=x", rot = 90, anim = 1, R = 10, geo = null;
  const kick = () => { anim = k.reduce ? 1 : 0; };
  const modesEl = k.modes([["tr", "Translate"], ["rf", "Reflect"], ["ro", "Rotate"]], mode, m => { mode = m; show(); kick(); });
  const sa = k.slider(`<span class="c1"><i>a</i></span>`, -8, 8, 1, va, v => { va = v; kick(); });
  const sb = k.slider(`<span class="c1"><i>b</i></span>`, -8, 8, 1, vb, v => { vb = v; kick(); });
  const sm = k.select(`<span class="c4">Mirror</span>`, [["x", "x-axis"], ["y", "y-axis"], ["y=x", "y = x"], ["y=-x", "y = −x"]], mir, v => { mir = v; kick(); });
  const sr = k.select(`<span class="c4">Angle</span>`, [[90, "90° ccw"], [180, "180°"], [270, "270° ccw"]], rot, v => { rot = +v; kick(); });
  k.button("Replay", () => { anim = 0; }, "btn ghost");
  k.button("Reset", () => { tri = T0.map(([x, y]) => ({ x, y })); kick(); }, "btn ghost");
  function show(){ showEl(sa.el, mode === "tr"); showEl(sb.el, mode === "tr"); showEl(sm.el, mode === "rf"); showEl(sr.el, mode === "ro"); }
  show();
  k.hint("Drag A, B or C");
  const exact = p => {
    if (mode === "tr") return { x: p.x + va, y: p.y + vb };
    if (mode === "ro") return rot === 90 ? { x: -p.y, y: p.x } : rot === 180 ? { x: -p.x, y: -p.y } : { x: p.y, y: -p.x };
    return mir === "x" ? { x: p.x, y: -p.y } : mir === "y" ? { x: -p.x, y: p.y } : mir === "y=x" ? { x: p.y, y: p.x } : { x: -p.y, y: -p.x };
  };
  const partial = (p, s) => {
    if (mode === "ro") { const th = rot * RAD * s; return { x: p.x * Math.cos(th) - p.y * Math.sin(th), y: p.x * Math.sin(th) + p.y * Math.cos(th) }; }
    const q = exact(p); return { x: lerp(p.x, q.x, s), y: lerp(p.y, q.y, s) };
  };
  const dragging = drag(c, p => geo ? nearest(p, tri.map(q => ({ x: geo.X(q.x), y: geo.Y(q.y) }))) : null,
    (i, p) => { const v = geo.inv(p.x, p.y); const nx = clamp(Math.round(v.x), -9, 9), ny = clamp(Math.round(v.y), -9, 9); if (tri.some((q, j) => j !== i && q.x === nx && q.y === ny)) return; tri[i] = { x: nx, y: ny }; anim = 1; });
  const term = (v, n) => n === 0 ? `<i>${v}</i>` : `<i>${v}</i> ${n < 0 ? "−" : "+"} ${Math.abs(n)}`;
  const ruleH = () => mode === "tr" ? `(<i>x</i>, <i>y</i>) ↦ (${term("x", va)}, ${term("y", vb)})`
    : mode === "ro" ? (rot === 90 ? `(<i>x</i>, <i>y</i>) ↦ (−<i>y</i>, <i>x</i>)` : rot === 180 ? `(<i>x</i>, <i>y</i>) ↦ (−<i>x</i>, −<i>y</i>)` : `(<i>x</i>, <i>y</i>) ↦ (<i>y</i>, −<i>x</i>)`)
    : ({ x: `(<i>x</i>, <i>y</i>) ↦ (<i>x</i>, −<i>y</i>)`, y: `(<i>x</i>, <i>y</i>) ↦ (−<i>x</i>, <i>y</i>)`, "y=x": `(<i>x</i>, <i>y</i>) ↦ (<i>y</i>, <i>x</i>)`, "y=-x": `(<i>x</i>, <i>y</i>) ↦ (−<i>y</i>, −<i>x</i>)` })[mir];
  const nameH = () => mode === "tr" ? `translation by ⟨${ng(va)}, ${ng(vb)}⟩` : mode === "ro" ? `rotation ${rot}° counterclockwise about <i>O</i>` : `reflection in ${({ x: "the x-axis", y: "the y-axis", "y=x": "<i>y</i> = <i>x</i>", "y=-x": "<i>y</i> = −<i>x</i>" })[mir]}`;
  k.loop(dt => {
    if (anim < 1) anim = Math.min(1, anim + dt / 1.1);
    c.begin(); const { w, h } = c; const s = ease(anim);
    const img = tri.map(exact);
    const need = Math.max(10, ...tri.concat(img).map(p => Math.max(Math.abs(p.x), Math.abs(p.y)) + 1));
    if (!dragging()) R = need;
    const P = k.plot(c, { xmin: -R, xmax: R, ymin: -R, ymax: R, equal: true, pad: { l: 30, r: 12, t: topBelow(modesEl), b: 24 } }); geo = P;
    P.grid(R > 15 ? 2 : 1); P.axes();
    const px = p => ({ x: P.X(p.x), y: P.Y(p.y) });
    const mono = `600 13px ${F.mono}`, lf = `italic 600 15px ${F.math}`;
    if (mode === "rf") { const u = ({ x: [1, 0], y: [0, 1], "y=x": [1, 1], "y=-x": [1, -1] })[mir]; const l = Math.hypot(u[0], u[1]); longLine(P, 0, 0, u[0] / l, u[1] / l, C.violet, 2.5);
      const lp = mir === "x" ? { x: P.xmax - .6, y: .6 } : mir === "y" ? { x: .5, y: P.ymax - .8 } : mir === "y=x" ? { x: P.xmax * .82, y: P.ymax * .82 - .9 } : { x: P.xmax * .82, y: -P.ymax * .82 + .9 };
      d.text("ℓ", P.X(lp.x), P.Y(lp.y), { font: `italic 600 17px ${F.math}`, color: C.violet, align: "center", base: "middle" }); }
    const cur = tri.map(q => partial(q, s));
    // connectors
    tri.forEach((q, i) => {
      const a = px(q), b = px(img[i]);
      if (mode === "tr") { if (va || vb) d.arrow(a.x, a.y, lerp(a.x, b.x, s), lerp(a.y, b.y, s), alpha(C.amber, .8), 1.6); }
      else if (mode === "rf") { d.line(a.x, a.y, b.x, b.y, alpha(C.violet, .55), 1.2, [4, 4]); const m = px({ x: (q.x + img[i].x) / 2, y: (q.y + img[i].y) / 2 }); d.circle(m.x, m.y, 3, C.violet); }
      else { const o = px({ x: 0, y: 0 }), r = Math.hypot(a.x - o.x, a.y - o.y); if (r > 1) { const a0 = Math.atan2(a.y - o.y, a.x - o.x); g.save(); g.strokeStyle = alpha(C.amber, .7); g.lineWidth = 1.4; g.setLineDash([4, 4]); g.beginPath(); g.arc(o.x, o.y, r, a0, a0 - rot * RAD * s, true); g.stroke(); g.restore(); } }
    });
    if (mode === "ro") { const o = px({ x: 0, y: 0 }); d.circle(o.x, o.y, 6, C.violet, C.ink, 2); d.text("O", o.x - 10, o.y + 14, { font: lf, color: C.violet, align: "center", base: "middle" }); }
    const A = tri.map(px), B = cur.map(px), cA = cen(A), cB = cen(B);
    poly(g, A, alpha(C.cyan, .16), C.cyan, 2.5);
    poly(g, B, alpha(C.pink, .16), C.pink, 2.5, anim < 1 ? [6, 4] : null);
    ["A", "B", "C"].forEach((n, i) => {
      labAway(d, n, A[i], cA, C.cyan, lf, 16);
      d.circle(B[i].x, B[i].y, 4.5, C.pink); labAway(d, n + "′", B[i], cB, C.pink, lf, 16);
      d.circle(A[i].x, A[i].y, 7, C.cyan, C.ink, 2);
    });
    if (mode === "tr" && (va || vb)) { const t = px({ x: P.xmin + 1, y: P.ymax - 1 }); d.text(`⟨${ng(va)}, ${ng(vb)}⟩`, t.x, t.y, { font: mono, color: C.amber, base: "middle" }); }
    // readout
    const pt = p => `(${ng(p.x)}, ${ng(p.y)})`;
    const rows = ["A", "B", "C"].map((n, i) => `<div class="row">${M(`<span class="c2"><i>${n}</i>${pt(tri[i])}</span> ↦ <span class="c3"><i>${n}</i>′${pt(img[i])}</span>`)}</div>`).join("");
    const sides = [[0, 1], [1, 2], [2, 0]].map(([i, j]) => { const n1 = "ABC"[i], n2 = "ABC"[j]; const d1 = (tri[i].x - tri[j].x) ** 2 + (tri[i].y - tri[j].y) ** 2, d2 = (img[i].x - img[j].x) ** 2 + (img[i].y - img[j].y) ** 2;
      return `<div class="row">${M(`<span class="c2"><i>${n1}${n2}</i></span> = <span class="c3"><i>${n1}</i>′<i>${n2}</i>′</span> = ${radT(d1)}`)}<span class="lbl">${d1 === d2 ? "distance preserved" : "MISMATCH"}${d1 > 0 && radT(d1).includes("√") ? ` (≈ ${f2(Math.sqrt(d1))})` : ""}</span></div>`; }).join("");
    const cr = (q, i, j) => (q[i].x - q[0].x) * (q[j].y - q[0].y) - (q[i].y - q[0].y) * (q[j].x - q[0].x);
    const o1 = cr(tri, 1, 2), o2 = cr(img, 1, 2);
    const fixed = tri.map((q, i) => (q.x === img[i].x && q.y === img[i].y) ? "ABC"[i] : null).filter(Boolean);
    let lm;
    if (o1 === 0) lm = `<div class="landmark hit"><div class="big">A, B and C are collinear</div><div class="note">The three points lie on one line, so this is a degenerate triangle. The motion still keeps every distance, and the image points are collinear too.</div></div>`;
    else if (mode === "tr" && !va && !vb) lm = `<div class="landmark hit"><div class="big">⟨0, 0⟩ is the identity</div><div class="note">Every point is its own image. Move a slider to slide the triangle.</div></div>`;
    else if (fixed.length) lm = `<div class="landmark hit"><div class="big">${fixed.join(", ")} ${fixed.length > 1 ? "stay" : "stays"} fixed</div><div class="note">${mode === "rf" ? "A point on the mirror line is its own image." : "The centre of a rotation does not move."} The other vertices move, and every side keeps its length.</div></div>`;
    else lm = `<div class="landmark"><div class="big">orientation ${(o1 > 0) === (o2 > 0) ? "preserved" : "reversed"}</div><div class="note">${mode === "rf" ? "A reflection flips the figure: A → B → C runs " + (o1 > 0 ? "counterclockwise" : "clockwise") + ", A′ → B′ → C′ runs " + (o2 > 0 ? "counterclockwise" : "clockwise") + "." : "Slides and turns keep the order A → B → C running the same way round."} Sides and angles are unchanged, so △A′B′C′ ≅ △ABC.</div></div>`;
    k.setRO(`<div><h2>${nameH()}</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(`<span class="c1">${ruleH()}</span>`)}</div></div>
      <div class="ro-rows">${rows}${sides}</div>${lm}
      <p class="narr">${mode === "tr" ? "Every point moves by the same vector." : mode === "rf" ? "The mirror is the perpendicular bisector of each dashed segment." : "Each vertex travels along a circle centred at O."} Drag a vertex onto ${mode === "rf" ? "the mirror" : mode === "ro" ? "O" : "any point"} to see what stays put.</p>`);
  });
};

/* ===================== g-symmetry ===================== */
L["g-symmetry"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const FLAG = [[0, 0], [0, 3], [1.8, 2.5], [0.3, 2.05], [0.3, 0]];
  let mode = "mir", swap = false, geo = null;
  const L0 = () => [{ x: -2, y: 0, a: 90 }, { x: 1, y: 0, a: 90 }];
  let LN = L0(), flag = { x: -6, y: -1.5 };
  let t = 2.5, gflag = { x: -7, y: 1 };
  let n = 6, pin = false, spin = 0, spinT = 0, turns = 0;
  const modesEl = k.modes([["mir", "Two mirrors"], ["glide", "Glide"], ["poly", "Polygon"]], mode, m => { mode = m; show(); });
  const bPar = k.button("Parallel", () => { LN = L0(); flag = { x: -6, y: -1.5 }; }, "btn ghost");
  const bCross = k.button("Crossing", () => { LN = [{ x: 0, y: 0, a: 0 }, { x: 0, y: 0, a: 40 }]; flag = { x: 2, y: -5.5 }; }, "btn ghost");
  const bSwap = k.button("Swap order", () => { swap = !swap; }, "btn ghost");
  const st = k.slider(`<span class="c3">glide <i>t</i></span>`, -4, 4, .5, t, v => t = v, v => String(v).replace("-", "−"));
  const sn = k.slider(`<span class="c4"><i>n</i></span>`, 3, 12, 1, n, v => { n = v; spin = spinT = 0; turns = 0; });
  const cp = k.check("pinwheel", pin, v => pin = v);
  const bTurn = k.button(`Turn`, () => { spinT += 360 / n; turns++; if (k.reduce) spin = spinT; }, "btn ghost");
  function show(){ [bPar, bCross, bSwap].forEach(b => b.style.display = mode === "mir" ? "" : "none"); showEl(st.el, mode === "glide"); showEl(sn.el, mode === "poly"); showEl(cp, mode === "poly"); bTurn.style.display = mode === "poly" ? "" : "none"; }
  show();
  const u = l => ({ x: Math.cos(l.a * RAD), y: Math.sin(l.a * RAD) });
  const refl = (p, l) => { const e = u(l), dx = p.x - l.x, dy = p.y - l.y, s = dx * e.x + dy * e.y; return { x: 2 * (l.x + s * e.x) - p.x, y: 2 * (l.y + s * e.y) - p.y }; };
  const handles = () => {
    if (!geo) return [];
    const X = p => ({ x: geo.X(p.x), y: geo.Y(p.y) });
    if (mode === "mir") return [X(LN[0]), X({ x: LN[0].x + 2.5 * u(LN[0]).x, y: LN[0].y + 2.5 * u(LN[0]).y }), X(LN[1]), X({ x: LN[1].x + 2.5 * u(LN[1]).x, y: LN[1].y + 2.5 * u(LN[1]).y }), X({ x: flag.x + .15, y: flag.y + 1.2 })];
    if (mode === "glide") return [null, null, null, null, X({ x: gflag.x + .15, y: gflag.y + 1.2 })];
    return [];
  };
  drag(c, p => (mode === "poly" ? null : nearest(p, handles(), 18)), (i, p) => {
    const v = geo.inv(p.x, p.y), sn2 = z => Math.round(z * 2) / 2;
    if (i === 4) { const o = mode === "mir" ? flag : gflag; o.x = clamp(sn2(v.x - .15), geo.xmin + .5, geo.xmax - 2.2); o.y = clamp(sn2(v.y - 1.2), geo.ymin + .3, geo.ymax - 3.3); return; }
    const l = LN[i >> 1];
    if (i % 2 === 0) { l.x = clamp(sn2(v.x), -6, 6); l.y = clamp(sn2(v.y), -6, 6); }
    else { let a = Math.round(Math.atan2(v.y - l.y, v.x - l.x) / RAD / 5) * 5; a = ((a % 180) + 180) % 180; l.a = a; }
  });
  const flagPts = (o, fn) => FLAG.map(([x, y]) => fn({ x: o.x + x, y: o.y + y }));
  k.loop(dt => {
    c.begin(); const { w, h } = c; const top = topBelow(modesEl);
    const mono = `600 13px ${F.mono}`, lf = `italic 600 16px ${F.math}`;
    if (mode === "poly") { geo = null; drawPoly(dt, top); return; }
    const P = k.plot(c, { xmin: -9, xmax: 9, ymin: -9, ymax: 9, equal: true, pad: { l: 12, r: 12, t: top, b: 12 } }); geo = P;
    P.grid(1);
    const X = p => ({ x: P.X(p.x), y: P.Y(p.y) });
    const drawFlag = (pts, fill, stroke, lw, dash) => poly(g, pts.map(X), fill, stroke, lw, dash);
    if (mode === "glide") {
      longLine(P, 0, 0, 1, 0, C.cyan, 2.5); d.text("ℓ", P.X(P.xmax - .5), P.Y(.5), { font: lf, color: C.cyan, align: "center", base: "middle" });
      const G = (p, j) => ({ x: p.x + j * t, y: j % 2 ? -p.y : p.y });
      P.clip(() => {
        [3, 2].forEach(j => drawFlag(flagPts(gflag, p => G(p, j)), null, alpha(C.amber, j === 2 ? .5 : .28), 1.6, [5, 4]));
        drawFlag(flagPts(gflag, p => ({ x: p.x + t, y: p.y })), null, alpha(C.pink, .8), 1.6, [5, 4]);
        drawFlag(flagPts(gflag, p => G(p, 1)), alpha(C.amber, .3), C.amber, 2.5);
        drawFlag(flagPts(gflag, p => p), alpha(C.violet, .3), C.violet, 2.5);
      });
      const hp = { x: gflag.x + .15, y: gflag.y + 1.2 };
      if (t) { const a = X(hp), b = X({ x: hp.x + t, y: hp.y }); d.arrow(a.x, a.y, b.x, b.y, C.pink, 2); }
      const hh = X(hp); d.circle(hh.x, hh.y, 6, C.violet, C.ink, 2);
      const lab = (s, p, col) => { const q = X(p); d.text(s, q.x, q.y, { font: lf, color: col, align: "center", base: "middle" }); };
      lab("F", { x: gflag.x - .6, y: gflag.y + 3.3 }, C.violet);
      const g1 = G({ x: gflag.x - .6, y: gflag.y + 3.3 }, 1); if (Math.abs(g1.x) < 8.6 && Math.abs(g1.y) < 8.6) lab("G(F)", { x: g1.x + (t >= 0 ? 0 : 0), y: g1.y - .5 * Math.sign(g1.y || 1) }, C.amber);
      const tH = t === 0 ? `(<i>x</i>, <i>y</i>) ↦ (<i>x</i>, −<i>y</i>)` : `(<i>x</i>, <i>y</i>) ↦ (<i>x</i> ${t < 0 ? "−" : "+"} ${Math.abs(t)}, −<i>y</i>)`;
      const lm = t === 0 ? `<div class="landmark hit"><div class="big">t = 0: a plain reflection</div><div class="note">With no slide, the glide reflection is just the reflection in ℓ, and doing it twice returns every point to where it started.</div></div>`
        : `<div class="landmark"><div class="big">${M(`<i>G</i> ∘ <i>G</i> = translation ⟨${ng(2 * t)}, 0⟩`)}</div><div class="note">The two flips cancel and the two slides add. The faded flags are <i>G</i>²(<i>F</i>) and <i>G</i>³(<i>F</i>): a footprint pattern. Sliding then flipping gives the same result as flipping then sliding.</div></div>`;
      k.setRO(`<div><h2>Glide reflection</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(`<span class="c1">${tH}</span>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<span class="c3">⟨${ng(t)}, 0⟩</span>`)}<span class="lbl">translation along the mirror (dashed pink copy)</span></div>
        <div class="row">${M(`<span class="c2"><i>r</i><sub><i>ℓ</i></sub></span>`)}<span class="lbl">then reflect in ℓ, the x-axis (amber)</span></div></div>${lm}
        <p class="narr">Drag the flag and change t. The slide must be parallel to the mirror for this to be a glide reflection.</p>`);
      return;
    }
    // two mirrors
    const first = swap ? LN[1] : LN[0], second = swap ? LN[0] : LN[1];
    const lineDraw = (l, col, name) => { const e = u(l); longLine(P, l.x, l.y, e.x, e.y, col, 2.5); const hp = X({ x: l.x + 2.5 * e.x, y: l.y + 2.5 * e.y }), cp_ = X(l);
      d.circle(cp_.x, cp_.y, 6.5, col, C.ink, 2); g.save(); g.translate(hp.x, hp.y); g.rotate(-l.a * RAD + Math.PI / 4); d.rect(-5, -5, 10, 10, C.ink, col, 2); g.restore();
      const lp = X({ x: l.x - 3.4 * e.x + .45 * -e.y, y: l.y - 3.4 * e.y + .45 * e.x }); d.text(name, lp.x, lp.y, { font: lf, color: col, align: "center", base: "middle" }); };
    const F0 = flagPts(flag, p => p), F1 = F0.map(p => refl(p, first)), F2 = F1.map(p => refl(p, second));
    P.clip(() => { drawFlag(F1, null, alpha(C.cyan, .75), 1.6, [5, 4]); drawFlag(F2, alpha(C.amber, .28), C.amber, 2.5); drawFlag(F0, alpha(C.violet, .3), C.violet, 2.5); });
    lineDraw(first, C.cyan, "ℓ"); lineDraw(second, C.pink, "m");
    const hp = { x: flag.x + .15, y: flag.y + 1.2 }, hq = refl(refl(hp, first), second);
    const da = ((second.a - first.a) % 180 + 180) % 180;
    let big, rows, lm;
    if (da === 0) {
      const e = u(first), nn = { x: -e.y, y: e.x }, sd = (second.x - first.x) * nn.x + (second.y - first.y) * nn.y, dist = Math.abs(sd);
      if (dist < 1e-9) { big = `identity`; lm = `<div class="landmark hit"><div class="big">same line twice</div><div class="note">Reflecting in a line and then in the same line undoes the first flip: every point returns home. Drag one mirror away.</div></div>`; rows = ""; }
      else {
        const v = { x: 2 * sd * nn.x, y: 2 * sd * nn.y }; const a = X(hp), b = X(hq);
        d.arrow(a.x, a.y, b.x, b.y, C.amber, 2.2);
        big = `translation by 2<i>d</i> = ${f2(2 * dist)}`;
        rows = `<div class="row">${M(`<i>ℓ</i> ∥ <i>m</i>, &nbsp;<i>d</i> = ${f2(dist)}`)}<span class="lbl">distance between the mirrors</span></div>
          <div class="row">${M(`<span class="c1">⟨${f2(v.x)}, ${f2(v.y)}⟩</span>`)}<span class="lbl">translation vector: length 2d, perpendicular to the mirrors, from ℓ toward m</span></div>`;
        lm = `<div class="landmark"><div class="big">${M(`<i>r</i><sub><i>m</i></sub> ∘ <i>r</i><sub><i>ℓ</i></sub> = translation`)}</div><div class="note">The first flip (dashed cyan) reverses the flag; the second flip turns it back. Net effect: a slide of twice the gap. Press Swap order and it slides the other way.</div></div>`;
      }
    } else {
      const e1 = u(first), e2 = u(second), den = e1.x * e2.y - e1.y * e2.x;
      const s1 = ((second.x - first.x) * e2.y - (second.y - first.y) * e2.x) / den;
      const O = { x: first.x + s1 * e1.x, y: first.y + s1 * e1.y }, Op = X(O), th = 2 * da;
      const vis = Math.abs(O.x) < 9 && Math.abs(O.y) < 9;
      if (vis) { const a = X(hp), r = Math.hypot(a.x - Op.x, a.y - Op.y), a0 = Math.atan2(a.y - Op.y, a.x - Op.x);
        g.save(); g.strokeStyle = C.amber; g.lineWidth = 2; g.setLineDash([5, 4]); g.beginPath(); g.arc(Op.x, Op.y, r, a0, a0 - th * RAD, true); g.stroke(); g.restore();
        const b = X(hq); d.circle(b.x, b.y, 4, C.amber);
        g.save(); g.strokeStyle = C.text; g.lineWidth = 1.5; g.beginPath(); g.arc(Op.x, Op.y, 22, -first.a * RAD, -(first.a + da) * RAD, true); g.stroke(); g.restore();
        d.circle(Op.x, Op.y, 5, C.amber, C.ink, 2);
        const mid = -(first.a + da / 2) * RAD; d.text(`θ = ${da}°`, Op.x + Math.cos(mid) * 40, Op.y + Math.sin(mid) * 40, { font: mono, color: C.text, align: "center", base: "middle" });
        d.text("O", Op.x - 12, Op.y + 14, { font: lf, color: C.amber, align: "center", base: "middle" }); }
      big = `rotation by 2<i>θ</i> = ${th}°`;
      rows = `<div class="row">${M(`<i>θ</i> = ${da}°`)}<span class="lbl">angle from ℓ to m, measured counterclockwise</span></div>
        <div class="row">${M(`<span class="c1"><i>R</i><sub><i>O</i>, ${th}°</sub></span>`)}<span class="lbl">about O(${f2(O.x)}, ${f2(O.y)})${vis ? "" : ", outside the view"}</span></div>`;
      lm = th === 180 ? `<div class="landmark hit"><div class="big">perpendicular mirrors: a half turn</div><div class="note">θ = 90°, so the composition is the 180° rotation about O, the point reflection (x, y) ↦ (−x, −y) when O is the origin.</div></div>`
        : `<div class="landmark"><div class="big">${M(`<i>r</i><sub><i>m</i></sub> ∘ <i>r</i><sub><i>ℓ</i></sub> = <i>R</i><sub><i>O</i>, 2<i>θ</i></sub>`)}</div><div class="note">Crossing mirrors turn the flag about their meeting point by twice the angle between them. Swapping the order turns it ${th}° clockwise instead.</div></div>`;
    }
    const hh = X(hp); d.circle(hh.x, hh.y, 6, C.violet, C.ink, 2);
    k.setRO(`<div><h2>reflect in ℓ first, then in m${swap ? " (order swapped)" : ""}</h2><div class="ro-big" style="margin-top:8px;font-size:24px"><span class="c1">${big}</span></div></div>
      <div class="ro-rows">${rows}</div>${lm}
      <p class="narr">Drag a round handle to move a mirror, a square handle to turn it (5° steps), or the flag's dot to move the flag.</p>`);
  });
  function drawPoly(dt, top){
    const { w, h } = c, mono = `600 13px ${F.mono}`;
    if (spin < spinT) spin = Math.min(spinT, spin + dt * 120);
    const cx = w / 2, cy = top + (h - top - 16) / 2, r = Math.max(30, Math.min(w / 2 - 30, (h - top - 16) / 2 - 26));
    const s0 = -Math.PI / 2 - spin * RAD;
    const V = Array.from({ length: n }, (_, i) => ({ x: cx + r * Math.cos(s0 + 2 * Math.PI * i / n), y: cy + r * Math.sin(s0 + 2 * Math.PI * i / n) }));
    if (!pin) for (let j = 0; j < n; j++) { const a = s0 + Math.PI * j / n, L_ = r + 18; d.line(cx - Math.cos(a) * L_, cy - Math.sin(a) * L_, cx + Math.cos(a) * L_, cy + Math.sin(a) * L_, j % 2 ? alpha(C.pink, .85) : alpha(C.cyan, .85), 1.6, [6, 4]); }
    poly(g, V, alpha(C.violet, .22), C.violet, 2.5);
    if (pin) V.forEach((p, i) => { const q = V[(i + 1) % n], e = unitv(q, p), nx = e.y, ny = -e.x, s = Math.min(26, r * .5);
      poly(g, [p, { x: p.x + e.x * s * .55 + nx * s * .55, y: p.y + e.y * s * .55 + ny * s * .55 }, { x: p.x + e.x * s, y: p.y + e.y * s }], C.violet, null); });
    d.circle(V[0].x, V[0].y, 6, C.amber, C.ink, 2);
    if (turns) { const a1 = -Math.PI / 2, a2 = s0; g.save(); g.strokeStyle = C.amber; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, r * .35, a1, a2 - 1e-6 * 0, true); g.stroke(); g.restore(); }
    d.circle(cx, cy, 3, C.text);
    const ang = 360 / n, angS = Number.isInteger(ang) ? `${ang}°` : `360°/${n} ≈ ${f1(ang)}°`;
    const big = pin ? `0 lines · order ${n}` : `${n} lines · order ${n}`;
    const rows = `<div class="row">${M(`360° ÷ ${n} = ${Number.isInteger(ang) ? ang + "°" : "≈ " + f1(ang) + "°"}`)}<span class="lbl">smallest turn that maps the figure onto itself</span></div>
      ${pin ? `<div class="row">${M("0")}<span class="lbl">lines of symmetry: the hooks all point the same way round, so every reflection fails</span></div>` : `<div class="row">${M(`<span class="c2">${n % 2 ? n : n / 2}</span> + <span class="c3">${n % 2 ? 0 : n / 2}</span> = ${n}`)}<span class="lbl">${n % 2 ? "lines, each through a vertex and the midpoint of the opposite side" : "lines through opposite vertices (cyan) and through midpoints of opposite sides (pink)"}</span></div>`}
      <div class="row">${M(n % 2 ? "no" : "yes")}<span class="lbl">point symmetry (180° turn)${n % 2 ? `: 180° is not a multiple of ${angS}` : ""}</span></div>`;
    const lm = pin ? `<div class="landmark hit"><div class="big">rotational symmetry only</div><div class="note">The pinwheel still lands on itself after every turn of ${angS}, but no mirror line works. Rotational and line symmetry are separate properties.</div></div>`
      : `<div class="landmark"><div class="big">regular ${n}-gon: ${n} lines, order ${n}</div><div class="note">Its ${2 * n} symmetries are ${n} rotations (counting 0°) and ${n} reflections. Press Turn: the amber vertex moves, the figure looks unchanged.</div></div>`;
    k.setRO(`<div><h2>Symmetry of the figure</h2><div class="ro-big" style="margin-top:8px;font-size:24px"><span class="c1">${big}</span></div></div><div class="ro-rows">${rows}</div>${lm}
      <p class="narr">Change n, and tick pinwheel to break the mirror symmetry.</p>`);
    void mono;
  }
};

/* ===================== g-dilations ===================== */
L["g-dilations"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const KS = [[-2, 1], [-3, 2], [-1, 1], [-1, 2], [-1, 3], [1, 3], [1, 2], [1, 1], [3, 2], [2, 1], [5, 2], [3, 1]];
  const T0 = [[2, 1], [4, 1], [2, 4]];
  let tri = T0.map(([x, y]) => ({ x, y })), O = { x: 0, y: 0 }, ki = 10, R = 10, geo = null;
  const sk = k.slider(`<span class="c1"><i>k</i></span>`, 0, KS.length - 1, 1, ki, v => ki = v, v => qt(Q(KS[v][0], KS[v][1])));
  k.button("k = ½", () => { ki = 6; sk.set(ki); }, "btn ghost");
  k.button("k = −1", () => { ki = 2; sk.set(ki); }, "btn ghost");
  k.button("Reset", () => { tri = T0.map(([x, y]) => ({ x, y })); O = { x: 0, y: 0 }; ki = 10; sk.set(ki); }, "btn ghost");
  k.hint("Drag A, B, C or the centre O");
  const dragging = drag(c, p => geo ? nearest(p, tri.concat([O]).map(q => ({ x: geo.X(q.x), y: geo.Y(q.y) }))) : null, (i, p) => {
    const v = geo.inv(p.x, p.y), nx = clamp(Math.round(v.x), -8, 8), ny = clamp(Math.round(v.y), -8, 8);
    if (i === 3) { O = { x: nx, y: ny }; return; }
    if (tri.some((q, j) => j !== i && q.x === nx && q.y === ny)) return; tri[i] = { x: nx, y: ny };
  });
  const angAt = (V, A, B) => { const ax = A.x - V.x, ay = A.y - V.y, bx = B.x - V.x, by = B.y - V.y, l = Math.hypot(ax, ay) * Math.hypot(bx, by); return l ? Math.acos(clamp((ax * bx + ay * by) / l, -1, 1)) / RAD : NaN; };
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const [kn, kd] = KS[ki], kk = kn / kd;
    const imgQ = tri.map(p => ({ x: Q(O.x * kd + kn * (p.x - O.x), kd), y: Q(O.y * kd + kn * (p.y - O.y), kd) }));
    const img = imgQ.map(q => ({ x: qv(q.x), y: qv(q.y) }));
    const need = Math.max(9, ...tri.concat(img, [O]).map(p => Math.max(Math.abs(p.x), Math.abs(p.y)) + 1));
    if (!dragging()) R = Math.ceil(need);
    const P = k.plot(c, { xmin: -R, xmax: R, ymin: -R, ymax: R, equal: true, pad: { l: 30, r: 12, t: 16, b: 24 } }); geo = P;
    P.grid(R > 15 ? 2 : 1); P.axes();
    const X = p => ({ x: P.X(p.x), y: P.Y(p.y) }), lf = `italic 600 15px ${F.math}`;
    tri.forEach(p => { const dx = p.x - O.x, dy = p.y - O.y, l = Math.hypot(dx, dy); if (l) longLine(P, O.x, O.y, dx / l, dy / l, alpha(C.violet, .55), 1.2, [5, 5]); });
    const A = tri.map(X), B = img.map(X), cA = cen(A), cB = cen(B);
    poly(g, B, alpha(C.pink, .16), C.pink, 2.5); poly(g, A, alpha(C.cyan, .16), C.cyan, 2.5);
    ["A", "B", "C"].forEach((n, i) => { d.circle(B[i].x, B[i].y, 4.5, C.pink); labAway(d, n + "′", B[i], cB, C.pink, lf, 16); labAway(d, n, A[i], cA, C.cyan, lf, 16); d.circle(A[i].x, A[i].y, 7, C.cyan, C.ink, 2); });
    const Op = X(O); d.circle(Op.x, Op.y, 7.5, C.violet, C.ink, 2); d.text("O", Op.x - 13, Op.y + 14, { font: lf, color: C.violet, align: "center", base: "middle" });
    // readout
    const kq = Q(kn, kd), kH = qh(kq), absK = Q(Math.abs(kn), kd);
    const ptH = q => `(${qh(q.x)}, ${qh(q.y)})`;
    const rows = ["A", "B", "C"].map((n, i) => `<div class="row">${M(`<span class="c2"><i>${n}</i>(${ng(tri[i].x)}, ${ng(tri[i].y)})</span> ↦ <span class="c3"><i>${n}</i>′${ptH(imgQ[i])}</span>`)}</div>`).join("");
    const d2 = (i, j) => (tri[i].x - tri[j].x) ** 2 + (tri[i].y - tri[j].y) ** 2;
    const lens = [[0, 1], [1, 2], [2, 0]].map(([i, j]) => { const n1 = "ABC"[i], n2 = "ABC"[j], s = d2(i, j);
      const ap = s && sqf(s)[1] !== 1 ? ` <span style="color:var(--faint);font-size:14px">≈ ${f2(Math.abs(kk) * Math.sqrt(s))}</span>` : "";
      return `<div class="row">${M(`<span class="c2"><i>${n1}${n2}</i> = ${radT(s)}</span> ↦ <span class="c3"><i>${n1}</i>′<i>${n2}</i>′ = ${radQ(absK, s)}</span>`)}${ap}</div>`; }).join("");
    const cr = (tri[1].x - tri[0].x) * (tri[2].y - tri[0].y) - (tri[1].y - tri[0].y) * (tri[2].x - tri[0].x);
    const angRow = cr ? `<div class="row">${M(`m∠<i>A</i> = m∠<i>A</i>′ = ${f1(angAt(tri[0], tri[1], tri[2]))}°`)}<span class="lbl">angles unchanged (∠B = ${f1(angAt(tri[1], tri[0], tri[2]))}°, ∠C = ${f1(angAt(tri[2], tri[0], tri[1]))}°)</span></div>` : "";
    const area = Q(kn * kn, kd * kd);
    const onCentre = tri.map((q, i) => q.x === O.x && q.y === O.y ? "ABC"[i] : null).filter(Boolean);
    const through = [[0, 1], [1, 2], [2, 0]].filter(([i, j]) => (tri[j].x - tri[i].x) * (O.y - tri[i].y) - (tri[j].y - tri[i].y) * (O.x - tri[i].x) === 0).map(([i, j]) => "ABC"[i] + "ABC"[j]);
    let lm;
    if (!cr) lm = `<div class="landmark hit"><div class="big">A, B, C are collinear</div><div class="note">The triangle is degenerate. The dilation still maps the line through them to a parallel line (or to itself if it passes through O).</div></div>`;
    else if (kn === kd) lm = `<div class="landmark hit"><div class="big">k = 1: the identity</div><div class="note">Every point stays where it is. A dilation is a rigid motion only when k = 1 or k = −1.</div></div>`;
    else if (kn === -kd) lm = `<div class="landmark hit"><div class="big">k = −1: a half turn about O</div><div class="note">Each point goes through O to the same distance on the other side. This is the 180° rotation, so lengths are kept.</div></div>`;
    else if (onCentre.length) lm = `<div class="landmark hit"><div class="big">${onCentre[0]} is the centre, so ${onCentre[0]}′ = ${onCentre[0]}</div><div class="note">The centre is the only point a dilation with k ≠ 1 does not move.</div></div>`;
    else if (through.length) lm = `<div class="landmark hit"><div class="big">line ${through[0]} passes through O</div><div class="note">A line through the centre maps onto itself, so ${through[0][0]}′${through[0][1]}′ lies on the same line as ${through[0]}. Other sides map to parallel lines.</div></div>`;
    else lm = `<div class="landmark"><div class="big">${M(`<i>P</i>′<i>Q</i>′ = |<span class="c1"><i>k</i></span>| · <i>PQ</i>, &nbsp;<span class="c3"><i>B</i>′<i>C</i>′</span> ∥ <span class="c2"><i>BC</i></span>`)}</div><div class="note">${kk < 0 ? "k is negative, so each image point is on the opposite ray from O and the image is turned 180°." : Math.abs(kk) > 1 ? "|k| > 1: an enlargement." : "0 < k < 1: a reduction."} The angles stay the same, so the image has the same shape.</div></div>`;
    k.setRO(`<div><h2>Dilation about O(${ng(O.x)}, ${ng(O.y)})</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(`<i>k</i> = <span class="num c1">${kH}</span>`)}</div></div>
      <div class="ro-rows">${rows}${lens}${angRow}<div class="row">${M(`area × <i>k</i><sup>2</sup> = ${qh(area)}`)}<span class="lbl">areas scale by the square of k</span></div></div>${lm}
      <p class="narr">Each image point is on the dashed line from O through its original, |k| times as far from O.</p>`);
  });
};

/* ===================== g-congruence ===================== */
L["g-congruence"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const SPEC = {
    SSS: [["a", "<i>a</i> = <i>BC</i>", 1, 10, .5, 6], ["b", "<i>b</i> = <i>CA</i>", 1, 10, .5, 5], ["c", "<i>c</i> = <i>AB</i>", 1, 10, .5, 7]],
    SAS: [["c", "<i>c</i> = <i>AB</i>", 1, 10, .5, 7], ["A", "∠<i>A</i>", 5, 175, 1, 50], ["b", "<i>b</i> = <i>AC</i>", 1, 10, .5, 5]],
    ASA: [["A", "∠<i>A</i>", 5, 175, 1, 50], ["c", "<i>c</i> = <i>AB</i>", 1, 10, .5, 7], ["B", "∠<i>B</i>", 5, 175, 1, 60]],
    AAS: [["A", "∠<i>A</i>", 5, 175, 1, 50], ["B", "∠<i>B</i>", 5, 175, 1, 60], ["a", "<i>a</i> = <i>BC</i>", 1, 10, .5, 6]],
    HL: [["c", "hyp. <i>AB</i>", 1, 10, .5, 7], ["b", "leg <i>AC</i>", 1, 10, .5, 4]],
    SSA: [["A", "∠<i>A</i>", 5, 175, 1, 35], ["c", "<i>c</i> = <i>AB</i>", 1, 10, .5, 8], ["a", "<i>a</i> = <i>BC</i>", 1, 10, .5, 5.5]],
    AAA: [["A", "∠<i>A</i>", 5, 175, 1, 50], ["B", "∠<i>B</i>", 5, 175, 1, 60], ["s", "second size <i>AB</i>", 1, 10, .5, 7]]
  };
  let mode = "SSS", val = {}, anim = 0, mapping = false;
  const reset = () => { val = {}; SPEC[mode].forEach(s => val[s[0]] = s[5]); anim = 0; mapping = false; };
  reset();
  const modesEl = k.modes(Object.keys(SPEC).map(m => [m, m]), mode, m => { mode = m; reset(); setSliders(); });
  const unitOf = key => /^[ABC]$/.test(key) ? "°" : "";
  const sl = [0, 1, 2].map(i => k.slider(`s${i}`, 0, 1, 1, 0, v => { const s = SPEC[mode][i]; if (s) { val[s[0]] = v; anim = 0; mapping = false; } }, v => { const s = SPEC[mode][i]; return s ? String(v) + unitOf(s[0]) : String(v); }));
  const bMap = k.button("Map △DEF onto △ABC", () => { mapping = true; anim = k.reduce ? 1 : 0; });
  k.button("Reset", () => { reset(); setSliders(); }, "btn ghost");
  function setSliders(){ sl.forEach((s, i) => { const sp = SPEC[mode][i]; showEl(s.el, !!sp); if (!sp) return; const lab = wrapOf(s.el).querySelector("label"); lab.innerHTML = /^[ABC]$/.test(sp[0]) ? `<span class="c3">${sp[1]}</span>` : `<span class="c2">${sp[1]}</span>`; s.el.min = sp[2]; s.el.max = sp[3]; s.el.step = sp[4]; s.set(val[sp[0]]); }); }
  setSliders();
  // build triangles: A(0,0), B(c,0), C above
  function build(){
    const v = val, r = { tris: [], msg: null, count: 1, gs: [], ga: [], swing: null, ray: null };
    const tri = (A, B, C_) => ({ A, B, C: C_ });
    if (mode === "SSS") { r.gs = ["AB", "BC", "CA"]; const { a, b, c: cc } = v; const x = (b * b + cc * cc - a * a) / (2 * cc), y2 = b * b - x * x;
      r.arms = { a, b, c: cc };
      if (y2 < -1e-9 || a + b < cc - 1e-9 || a + cc < b - 1e-9 || b + cc < a - 1e-9) { r.count = 0; r.msg = "The arms cannot meet: one side is at least as long as the other two together."; }
      else if (Math.abs(y2) < 1e-9) { r.count = 0; r.msg = "The arms meet on line AB: a flat, degenerate triangle (the sum of two sides equals the third)."; }
      else r.tris.push(tri({ x: 0, y: 0 }, { x: cc, y: 0 }, { x, y: Math.sqrt(y2) })); }
    else if (mode === "SAS") { r.gs = ["AB", "CA"]; r.ga = ["A"]; r.tris.push(tri({ x: 0, y: 0 }, { x: v.c, y: 0 }, { x: v.b * Math.cos(v.A * RAD), y: v.b * Math.sin(v.A * RAD) })); }
    else if (mode === "ASA" || mode === "AAS" || mode === "AAA") {
      r.ga = ["A", "B"]; if (mode === "ASA") r.gs = ["AB"]; if (mode === "AAS") r.gs = ["BC"];
      const Cg = 180 - v.A - v.B;
      if (Cg <= 0) { r.count = 0; r.msg = `∠A + ∠B = ${v.A + v.B}°, so there is no room for ∠C: the angle sum of a triangle is 180°.`; }
      else { const sA = Math.sin(v.A * RAD), sB = Math.sin(v.B * RAD), sC = Math.sin(Cg * RAD);
        const mk = cc => { const b = cc * sB / sC; return tri({ x: 0, y: 0 }, { x: cc, y: 0 }, { x: b * Math.cos(v.A * RAD), y: b * Math.sin(v.A * RAD) }); };
        if (mode === "ASA") r.tris.push(mk(v.c));
        else if (mode === "AAS") r.tris.push(mk(v.a * sC / sA));
        else { r.tris.push(mk(4)); if (Math.abs(v.s - 4) > 1e-9) { r.tris.push(mk(v.s)); r.count = 2; } else r.count = 1; } } }
    else if (mode === "HL") { r.gs = ["AB", "CA"]; r.right = true; const { c: cc, b } = v;
      if (b >= cc) { r.count = 0; r.msg = "A leg must be shorter than the hypotenuse, so no right triangle has these measures."; }
      else r.tris.push(tri({ x: 0, y: 0 }, { x: cc, y: 0 }, { x: b * b / cc, y: b * Math.sqrt(cc * cc - b * b) / cc })); }
    else if (mode === "SSA") { r.gs = ["AB", "BC"]; r.ga = ["A"]; const { A, c: cc, a } = v; const ca = Math.cos(A * RAD), disc = a * a - cc * cc * Math.sin(A * RAD) ** 2;
      r.swing = { r: a }; r.ray = A; r.h = cc * Math.sin(A * RAD);
      const roots = disc < -1e-9 ? [] : Math.abs(disc) < 1e-9 ? [cc * ca] : [cc * ca + Math.sqrt(disc), cc * ca - Math.sqrt(disc)];
      roots.filter(t => t > 1e-9).forEach(t => r.tris.push(tri({ x: 0, y: 0 }, { x: cc, y: 0 }, { x: t * Math.cos(A * RAD), y: t * Math.sin(A * RAD) })));
      r.count = r.tris.length; if (!r.count) r.msg = A < 90 ? `a = ${a} is shorter than the distance ${f2(r.h)} from B to the ray, so the swinging side never reaches it.` : `With ∠A ≥ 90°, side a must be longer than c = ${cc}.`; }
    return r;
  }
  const len = (P, Q_) => Math.hypot(P.x - Q_.x, P.y - Q_.y);
  const angAt = (V, P, Q_) => { const ax = P.x - V.x, ay = P.y - V.y, bx = Q_.x - V.x, by = Q_.y - V.y; return Math.acos(clamp((ax * bx + ay * by) / (Math.hypot(ax, ay) * Math.hypot(bx, by)), -1, 1)) / RAD; };
  k.loop(dt => {
    if (mapping && anim < 1) anim = Math.min(1, anim + dt / 2);
    c.begin(); const { w, h } = c; const top = topBelow(modesEl);
    const r = build(), lf = `italic 600 15px ${F.math}`, mono = `600 12px ${F.mono}`;
    const determined = ["SSS", "SAS", "ASA", "AAS", "HL"].includes(mode) ? r.count === 1 : mode === "SSA" ? r.count === 1 : false;
    // the copy DEF (rigid image of ABC) for determined cases
    const flip = mode === "SAS" || mode === "AAS" || mode === "HL", phi0 = 200 * RAD;
    let T = r.tris[0], copy0 = null;
    const fwd = (p, u, off) => { const sy = flip ? -Math.cos(Math.PI * u) : 1; const ph = phi0 * (1 - u); const x = p.x, y = p.y * sy; return { x: x * Math.cos(ph) - y * Math.sin(ph) + off.x * (1 - u), y: x * Math.sin(ph) + y * Math.cos(ph) + off.y * (1 - u) }; };
    // layout box
    const pts = []; r.tris.forEach(t => pts.push(t.A, t.B, t.C));
    if (!pts.length) pts.push({ x: 0, y: 0 }, { x: val.c || 7, y: 0 }, { x: 0, y: 3 });
    if (r.swing) { pts.push({ x: val.c - val.a, y: 0 }, { x: val.c + val.a, y: 0 }, { x: val.c, y: val.a }); }
    if (r.arms) { pts.push({ x: -r.arms.b, y: 0 }, { x: r.arms.c + r.arms.a, y: 0 }, { x: r.arms.c - r.arms.a, y: 0 }, { x: 0, y: r.arms.b }, { x: r.arms.c, y: r.arms.a }); }
    let bx0 = Math.min(...pts.map(p => p.x)), bx1 = Math.max(...pts.map(p => p.x)), by0 = Math.min(0, ...pts.map(p => p.y)), by1 = Math.max(...pts.map(p => p.y));
    const wide = w - 24 > (h - top - 20) * 1.1;
    let off = { x: 0, y: 0 };
    if (determined) {
      const raw = [T.A, T.B, T.C].map(p => fwd(p, 0, { x: 0, y: 0 }));
      const rx0 = Math.min(...raw.map(p => p.x)), rx1 = Math.max(...raw.map(p => p.x)), ry0 = Math.min(...raw.map(p => p.y)), ry1 = Math.max(...raw.map(p => p.y));
      const gap = 1.6;
      off = wide ? { x: bx1 + gap - rx0, y: (by0 + by1) / 2 - (ry0 + ry1) / 2 } : { x: (bx0 + bx1) / 2 - (rx0 + rx1) / 2, y: by0 - gap - ry1 };
      copy0 = raw.map(p => ({ x: p.x + off.x, y: p.y + off.y }));
      bx0 = Math.min(bx0, ...copy0.map(p => p.x)); bx1 = Math.max(bx1, ...copy0.map(p => p.x)); by0 = Math.min(by0, ...copy0.map(p => p.y)); by1 = Math.max(by1, ...copy0.map(p => p.y));
    }
    const padX = 30, padT = top + 18, padB = 26;
    const s = Math.min((w - 2 * padX) / Math.max(1e-6, bx1 - bx0), (h - padT - padB) / Math.max(1e-6, by1 - by0));
    const ox = padX + ((w - 2 * padX) - s * (bx1 - bx0)) / 2 - s * bx0, oy = padT + ((h - padT - padB) - s * (by1 - by0)) / 2 + s * by1;
    const X = p => ({ x: ox + s * p.x, y: oy - s * p.y });
    // construction aids
    if (r.ray != null) { const A0 = X({ x: 0, y: 0 }), e = { x: Math.cos(r.ray * RAD), y: -Math.sin(r.ray * RAD) }; d.line(A0.x, A0.y, A0.x + e.x * 2000, A0.y + e.y * 2000, alpha(C.text, .35), 1.2, [5, 5]); }
    if (r.swing) { const Bp = X({ x: val.c, y: 0 }); d.circle(Bp.x, Bp.y, val.a * s, null, alpha(C.cyan, .45), 1.4); }
    if (r.arms && !r.tris.length) { const A0 = X({ x: 0, y: 0 }), B0 = X({ x: r.arms.c, y: 0 }); d.circle(A0.x, A0.y, r.arms.b * s, null, alpha(C.cyan, .5), 1.4); d.circle(B0.x, B0.y, r.arms.a * s, null, alpha(C.cyan, .5), 1.4); d.line(A0.x, A0.y, B0.x, B0.y, C.cyan, 3); d.text("A", A0.x - 12, A0.y + 16, { font: lf, color: C.text }); d.text("B", B0.x + 4, B0.y + 16, { font: lf, color: C.text }); }
    if ((mode === "ASA" || mode === "AAS" || mode === "AAA") && !r.tris.length) { const A0 = X({ x: 0, y: 0 }), B0 = X({ x: val.c || 7, y: 0 }); d.line(A0.x, A0.y, B0.x, B0.y, alpha(C.text, .5), 2); const ra = (V, a, dir) => d.line(V.x, V.y, V.x + dir * Math.cos(a * RAD) * 400, V.y - Math.sin(a * RAD) * 400, C.pink, 2, [6, 4]); ra(A0, val.A, 1); ra(B0, val.B, -1); }
    if (mode === "SSA" && !r.tris.length) { const A0 = X({ x: 0, y: 0 }), B0 = X({ x: val.c, y: 0 }); d.line(A0.x, A0.y, B0.x, B0.y, C.cyan, 3); d.text("A", A0.x - 12, A0.y + 16, { font: lf, color: C.text }); d.text("B", B0.x + 4, B0.y + 16, { font: lf, color: C.text }); }
    // draw a triangle with marks
    const SIDES = { AB: ["A", "B"], BC: ["B", "C"], CA: ["C", "A"] };
    const drawTri = (t, col, names, marks = true, dash) => {
      const p = { A: X(t.A), B: X(t.B), C: X(t.C) }, ce = cen([p.A, p.B, p.C]);
      poly(g, [p.A, p.B, p.C], alpha(col, .14), col, 2, dash);
      if (marks) {
        r.gs.forEach((sd, i) => { const [u1, u2] = SIDES[sd]; d.line(p[u1].x, p[u1].y, p[u2].x, p[u2].y, C.cyan, 3.5); ticks(g, p[u1], p[u2], i + 1, C.cyan); });
        r.ga.forEach((an, i) => { const o = { A: ["B", "C"], B: ["C", "A"], C: ["A", "B"] }[an]; arcAng(g, p[an], p[o[0]], p[o[1]], 18, C.pink, 2, i + 1); });
        if (r.right) rightMark(g, p.C, p.A, p.B, 11, C.pink);
      }
      ["A", "B", "C"].forEach((n, i) => labAway(d, names[i], p[n], ce, col === C.violet ? C.violet : C.text, lf, 15));
      return p;
    };
    let Pm = null;
    r.tris.slice().reverse().forEach((t, j) => { const i = r.tris.length - 1 - j; Pm = drawTri(t, i === 0 ? C.green : C.violet, i === 0 ? ["A", "B", "C"] : (mode === "SSA" ? ["", "", "C₂"] : ["", "", ""]), i === 0 || mode === "SSA", i === 1 && mode !== "AAA" ? [6, 4] : null) || Pm; });
    if (determined) {
      const u = ease(anim), cur = [T.A, T.B, T.C].map(p => fwd(p, u, off)), cp = cur.map(X), base = [T.A, T.B, T.C].map(X);
      if (u < 1) [0, 1, 2].forEach(i => d.line(cp[i].x, cp[i].y, base[i].x, base[i].y, alpha(C.amber, .55), 1.3, [4, 4]));
      const tt = { A: cur[0], B: cur[1], C: cur[2] }; drawTri(tt, C.green, ["D", "E", "F"], true, u > 0 && u < 1 ? [6, 4] : null);
      if (u >= 1) { const ce = cen(base); ["D", "E", "F"].forEach((n, i) => labAway(d, n, base[i], ce, C.amber, `italic 600 13px ${F.math}`, 30)); }
    }
    // readout
    const t0 = r.tris[0];
    let big, lm, rows = "";
    const given = SPEC[mode].filter(sp => sp[0] !== "s").map(sp => `${sp[1]} = ${val[sp[0]]}${unitOf(sp[0])}`).join(", ");
    rows += `<div class="row">${M(given + (mode === "HL" ? ", m∠<i>C</i> = 90°" : ""))}<span class="lbl">given parts${mode === "SSA" ? " (∠A is not between AB and BC)" : ""}</span></div>`;
    if (t0) {
      const info = (t, cl) => `${M(`<span class="${cl}"><i>a</i> = ${f2(len(t.B, t.C))}, <i>b</i> = ${f2(len(t.C, t.A))}, <i>c</i> = ${f2(len(t.A, t.B))}</span>`)} ${M(`<span class="${cl}">∠<i>A</i> = ${f1(angAt(t.A, t.B, t.C))}°, ∠<i>B</i> = ${f1(angAt(t.B, t.C, t.A))}°, ∠<i>C</i> = ${f1(angAt(t.C, t.A, t.B))}°</span>`)}`;
      rows += `<div class="row">${info(t0, "c5")}<span class="lbl">${r.tris.length > 1 ? "first triangle (green)" : "the triangle these parts determine"}</span></div>`;
      if (r.tris[1]) rows += `<div class="row">${info(r.tris[1], "c4")}<span class="lbl">second triangle (violet), same given parts</span></div>`;
    }
    if (r.count === 0) { big = `<span class="c3">no triangle</span>`; lm = `<div class="landmark hit"><div class="big">these parts do not fit together</div><div class="note">${r.msg}</div></div>`; }
    else if (mode === "AAA") { big = `<span class="c4">same shape, any size</span>`; lm = `<div class="landmark hit"><div class="big">AAA is not a congruence test</div><div class="note">${r.count === 2 ? "The green and violet triangles have the same three angles but different sides. Equal angles give similarity, not congruence." : "Move the size slider: a larger triangle with the same angles appears."}</div></div>`; }
    else if (mode === "SSA" && r.count === 2) { big = `<span class="c4">two triangles</span>`; lm = `<div class="landmark hit"><div class="big">SSA fails: the ambiguous case</div><div class="note">The side of length a swings about B and crosses the ray from A twice, because ${f2(r.h)} &lt; ${val.a} &lt; ${val.c}. Both triangles have the given parts, yet they are not congruent.</div></div>`; }
    else {
      big = `<span class="c5">one triangle</span>`;
      const why = { SSS: "Three sides fix a triangle: the two arms from A and B can meet in only one point above AB.", SAS: "The included angle fixes the direction of AC, and its length fixes C.", ASA: "The two rays from the ends of AB can meet in only one point.", AAS: "∠C = 180° − ∠A − ∠B, so this is ASA in disguise (Third Angles Theorem).", HL: "In a right triangle the third side is fixed by the Pythagorean Theorem, so HL acts like SSS.", SSA: val.A >= 90 ? "With ∠A obtuse or right, side a can reach the ray only once." : (Math.abs(val.a - r.h) < 1e-9 ? "a equals the distance from B to the ray: one right triangle." : "a ≥ c, so the second crossing is at or behind A and only one triangle forms.") }[mode];
      lm = mode === "SSA" ? `<div class="landmark hit"><div class="big">SSA happens to give one triangle here</div><div class="note">${why} SSA is still not a valid test, because other values give two.</div></div>`
        : `<div class="landmark ${anim >= 1 ? "hit" : ""}"><div class="big">${M(`<span class="c1">△<i>DEF</i> ≅ △<i>ABC</i></span> &nbsp;(${mode})`)}</div><div class="note">${why} ${anim >= 1 ? `The rigid motion (${flip ? "a reflection, then a " : ""}rotation and translation) placed D on A, E on B and F on C.` : `Press Map: a ${flip ? "flip, " : ""}turn and slide carry the copy onto the original.`}</div></div>`;
    }
    bMap.disabled = !determined; bMap.style.opacity = determined ? "" : ".45";
    k.setRO(`<div><h2>${mode}</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${big}</div></div>
      <div class="ro-rows">${rows}${determined ? `<div class="row">${M(`<span class="c1"><i>A</i> ${LR} <i>D</i>, &nbsp;<i>B</i> ${LR} <i>E</i>, &nbsp;<i>C</i> ${LR} <i>F</i></span>`)}<span class="lbl">correspondence, read from the letter order</span></div>` : ""}</div>${lm}
      <p class="narr">${mode === "SSA" ? "Try a between the distance from B to the ray and c: two triangles appear." : mode === "AAA" ? "Same angles, different sizes." : "Change the given parts: the triangle is always the only one that fits."}</p>`);
    void mono; void Pm;
  });
};

/* ===================== g-isosceles ===================== */
L["g-isosceles"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let wB = 3, A = { x: 1.2, y: 5 }, fold = 0, folding = false, geo = null;
  const sw = k.slider(`<span class="c3">half-base</span>`, 1, 5, .5, wB, v => { wB = v; fold = 0; folding = false; });
  k.button("Isosceles", () => { A = { x: 0, y: Math.abs(A.y) < .5 ? 5 : A.y }; fold = 0; folding = false; }, "btn ghost");
  k.button("Equilateral", () => { A = { x: 0, y: wB * Math.sqrt(3) }; fold = 0; folding = false; }, "btn ghost");
  k.button("Fold", () => { folding = !folding; if (k.reduce) fold = folding ? 1 : 0; }, "btn ghost");
  k.hint("Drag the apex A");
  drag(c, p => geo ? nearest(p, [{ x: geo.X(A.x), y: geo.Y(A.y) }], 20) : null, (i, p) => {
    const v = geo.inv(p.x, p.y); let x = Math.round(v.x * 10) / 10, y = Math.round(v.y * 10) / 10;
    x = clamp(x, geo.xmin + .3, geo.xmax - .3); y = clamp(y, geo.ymin + .3, geo.ymax - .3);
    if (Math.abs(x) < .25) x = 0;
    if (x === 0 && Math.abs(y - wB * Math.sqrt(3)) < .15) y = wB * Math.sqrt(3);
    A = { x, y }; fold = 0; folding = false;
  });
  const angAt = (V, P, Q_) => { const ax = P.x - V.x, ay = P.y - V.y, bx = Q_.x - V.x, by = Q_.y - V.y; return Math.acos(clamp((ax * bx + ay * by) / (Math.hypot(ax, ay) * Math.hypot(bx, by)), -1, 1)) / RAD; };
  k.loop(dt => {
    if (folding && fold < 1) fold = Math.min(1, fold + dt / 1.2); if (!folding && fold > 0) fold = Math.max(0, fold - dt / .8);
    c.begin(); const { w, h } = c;
    const P = k.plot(c, { xmin: -6.5, xmax: 6.5, ymin: -1.5, ymax: 10, equal: true, pad: { l: 12, r: 12, t: 16, b: 12 } }); geo = P;
    P.grid(1);
    const X = p => ({ x: P.X(p.x), y: P.Y(p.y) }), lf = `italic 600 16px ${F.math}`, mono = `600 12px ${F.mono}`;
    const B = { x: -wB, y: 0 }, Cc = { x: wB, y: 0 };
    const AB = Math.hypot(A.x - B.x, A.y - B.y), AC = Math.hypot(A.x - Cc.x, A.y - Cc.y);
    const flat = Math.abs(A.y) < .25;
    const iso = A.x === 0, equi = iso && Math.abs(A.y - wB * Math.sqrt(3)) < 1e-9 || iso && Math.abs(Math.abs(A.y) - wB * Math.sqrt(3)) < 1e-9;
    const pA = X(A), pB = X(B), pC = X(Cc);
    if (flat) {
      d.line(P.X(-6.5), pB.y, P.X(6.5), pB.y, alpha(C.pink, .4), 1.2, [5, 5]); d.line(pB.x, pB.y, pC.x, pC.y, C.pink, 3);
      d.line(pA.x, pA.y, pB.x, pB.y, C.cyan, 2.5); d.line(pA.x, pA.y, pC.x, pC.y, C.cyan, 2.5);
      d.circle(pA.x, pA.y, 8, C.cyan, C.ink, 2.5); d.text("A", pA.x, pA.y - 18, { font: lf, color: C.cyan, align: "center" });
      k.setRO(`<div><h2>No triangle</h2></div><div class="landmark hit"><div class="big">A is on the line through B and C</div><div class="note">Three collinear points do not form a triangle. Drag A up or down off the base line.</div></div>`);
      return;
    }
    // vertex-angle bisector meets BC at D: BD/DC = AB/AC (Angle Bisector Theorem)
    const Dx = B.x + (Cc.x - B.x) * AB / (AB + AC), D = { x: Dx, y: 0 }, pD = X(D);
    // perpendicular bisector of base (dashed) when not isosceles
    if (!iso) d.line(P.X(0), P.Y(-1.5), P.X(0), P.Y(10), alpha(C.text, .35), 1.2, [5, 5]);
    // fold: reflect triangle ABD across line AD by amount fold
    const ax = { x: D.x - A.x, y: D.y - A.y }, al = Math.hypot(ax.x, ax.y), e = { x: ax.x / al, y: ax.y / al };
    const fl = p => { const dx = p.x - A.x, dy = p.y - A.y, t = dx * e.x + dy * e.y, fx = A.x + t * e.x, fy = A.y + t * e.y, k_ = Math.cos(Math.PI * fold); return { x: fx + (p.x - fx) * k_, y: fy + (p.y - fy) * k_ }; };
    poly(g, [pA, pB, pC], alpha(C.cyan, .07), null);
    d.line(pB.x, pB.y, pC.x, pC.y, C.pink, 3);
    d.line(pA.x, pA.y, pB.x, pB.y, C.cyan, 3); d.line(pA.x, pA.y, pC.x, pC.y, C.cyan, 3);
    const nT = equi ? 1 : iso ? 1 : 0;
    if (iso) { ticks(g, pA, pB, 1, C.cyan); ticks(g, pA, pC, 1, C.cyan); if (equi) ticks(g, pB, pC, 1, C.pink); }
    // axis (vertex-angle bisector)
    d.line(pA.x, pA.y, pD.x, pD.y, C.violet, 2.2, iso ? null : [6, 4]);
    if (iso) { rightMark(g, pD, pC, pA, 11, C.violet); ticks(g, pB, pD, 2, C.violet, 5); ticks(g, pD, pC, 2, C.violet, 5); }
    const mB = angAt(B, A, Cc), mC = angAt(Cc, A, B), mA = 180 - mB - mC;
    arcAng(g, pB, pC, pA, 24, C.amber, 2.2, iso ? 1 : 1); arcAng(g, pC, pA, pB, 24, C.amber, 2.2, iso ? 1 : 2);
    if (equi) arcAng(g, pA, pB, pC, 22, C.amber, 2.2, 1);
    const half = (angAt(A, B, Cc)) / 2;
    arcAng(g, pA, pB, pD, 34, alpha(C.violet, .9), 1.6); arcAng(g, pA, pD, pC, 38, alpha(C.violet, .9), 1.6);
    // folded half
    if (fold > 0) { const fA = X(A), fB = X(fl(B)), fD = X(D); poly(g, [fA, fB, fD], alpha(C.cyan, .18), C.cyan, 1.8, [5, 3]); d.circle(fB.x, fB.y, 4.5, C.cyan);
      if (fold >= 1 && !iso) d.text("B′", fB.x + (fB.x > pD.x ? 12 : -12), fB.y + 14, { font: lf, color: C.cyan, align: "center" }); }
    // labels
    const sgnUp = A.y > 0 ? 1 : -1;
    d.text("A", pA.x, pA.y - 16 * sgnUp, { font: lf, color: C.text, align: "center", base: "middle" });
    d.text("B", pB.x - 14, pB.y + 14 * sgnUp, { font: lf, color: C.text, align: "center", base: "middle" });
    d.text("C", pC.x + 14, pC.y + 14 * sgnUp, { font: lf, color: C.text, align: "center", base: "middle" });
    d.text("D", pD.x + 12, pD.y + 14 * sgnUp, { font: lf, color: C.violet, align: "center", base: "middle" });
    const angLab = (V, deg, dir) => d.text(`${f1(deg)}°`, V.x + dir * 40, V.y - sgnUp * 13, { font: mono, color: C.amber, align: "center", base: "middle" });
    angLab(pB, mB, 1); angLab(pC, mC, -1);
    d.circle(pA.x, pA.y, 8, C.cyan, C.ink, 2.5);
    // readout
    const lenS = v => f2(v);
    let big, lm;
    if (equi) { big = `equilateral`; lm = `<div class="landmark hit"><div class="big">three 60° angles</div><div class="note">All three sides equal ${f2(AB)} = 2 × half-base, so every side is a base: all three angles are equal, and 180° ÷ 3 = 60°. Height = ${wB === Math.round(wB) ? (wB === 1 ? "" : wB) + "√3" : f2(wB) + "√3"} ≈ ${f2(wB * Math.sqrt(3))}.</div></div>`; }
    else if (iso) { big = `isosceles`; lm = `<div class="landmark hit"><div class="big">${M(`<span class="c2"><i>AB</i> = <i>AC</i></span> ⇒ <span class="c1">m∠<i>B</i> = m∠<i>C</i> = ${f1(mB)}°</span>`)}</div><div class="note">The vertex-angle bisector <span class="c4">AD</span> is also the perpendicular bisector of the base: D is the midpoint and ∠ADB = 90°. ${fold >= 1 ? "Folded along AD, B lands exactly on C." : "Press Fold to flip △ABD onto △ACD."}</div></div>`; }
    else { big = `scalene`; const longer = AB > AC ? "AB" : "AC", bigger = AB > AC ? "∠C" : "∠B";
      lm = `<div class="landmark"><div class="big">${M(`<i>AB</i> ≠ <i>AC</i> ⇒ m∠<i>B</i> ≠ m∠<i>C</i>`)}</div><div class="note">The longer side ${longer} faces the larger angle ${bigger}. The bisector of ∠A (violet, dashed) misses the midpoint of BC${fold >= 1 ? `, and folding along it sends B to B′ on ray AC, ${AB > AC ? "beyond" : "short of"} C` : ""}. Drag A onto the dashed perpendicular bisector to make the legs equal.</div></div>`; }
    k.setRO(`<div><h2>Triangle ABC</h2><div class="ro-big" style="margin-top:8px;font-size:26px"><span class="num c1">${big}</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>AB</i> = ${lenS(AB)}, &nbsp;<i>AC</i> = ${lenS(AC)}</span>`)}<span class="lbl">legs</span></div>
        <div class="row">${M(`<span class="c3"><i>BC</i> = ${f2(2 * wB)}</span>`)}<span class="lbl">base</span></div>
        <div class="row">${M(`<span class="c1">m∠<i>B</i> = ${f1(mB)}°, &nbsp;m∠<i>C</i> = ${f1(mC)}°</span>`)}<span class="lbl">base angles</span></div>
        <div class="row">${M(`m∠<i>A</i> = 180° − ${f1(mB)}° − ${f1(mC)}° = ${f1(mA)}°`)}<span class="lbl">vertex angle (Triangle Angle-Sum Theorem)</span></div>
        <div class="row">${M(`<span class="c4"><i>BD</i> = ${f2(D.x - B.x)}, <i>DC</i> = ${f2(Cc.x - D.x)}</span>`)}<span class="lbl">where the bisector of ∠A meets the base</span></div>
      </div>${lm}
      <p class="narr">The converse also holds: whenever the two base angles match, the legs match.</p>`);
    void nT; void half;
  });
};
})();
