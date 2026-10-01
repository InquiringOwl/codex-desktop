/* ============ Labs: Geometry F (special right triangles, right-triangle trigonometry, polygon area, circle measure) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const ng = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const Q = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const FR = (t, b) => `<span class="fr"><span>${t}</span><span>${b}</span></span>`;
const qh = q => q.d === 1 ? ng(q.n) : (q.n < 0 ? "−" : "") + FR(Math.abs(q.n), q.d);
const qt = q => q.d === 1 ? ng(q.n) : ng(q.n) + "/" + q.d;
const fx = (v, n) => { const s = v.toFixed(n); return (/^-0\.?0*$/.test(s) ? s.slice(1) : s).replace("-", "−"); };
const f1 = v => fx(v, 1), f2 = v => fx(v, 2);
const num = v => { const r = Math.round(v * 100) / 100; return Number.isInteger(r) ? String(r) : f2(r).replace(/0$/, ""); };
const RAD = Math.PI / 180;
function sqf(n){ let a = 1, b = n; for (let f = 2; f * f <= b; f++) while (b % (f * f) === 0) { b /= f * f; a *= f; } return [a, b]; }
const radT = n => { if (n === 0) return "0"; const [a, b] = sqf(n); return b === 1 ? String(a) : (a === 1 ? "" : a) + "√" + b; };
// q·√m with q rational, m squarefree: {t: canvas text, h: html, v: value}
function rq(q, m){
  q = Q(q.n, q.d); const v = q.n / q.d * Math.sqrt(m);
  const q2 = Q(q.n * q.n * m, q.d * q.d);
  if (q.n === 0) return { t: "0", h: "0", v: 0, q2 };
  const top = (q.n === 1 && m !== 1 ? "" : String(q.n)) + (m === 1 ? "" : "√" + m);
  return q.d === 1 ? { t: top, h: top, v, q2 } : { t: top + "/" + q.d, h: FR(top, q.d), v, q2 };
}
// q·π: {t, h}
function qpi(q){ q = Q(q.n, q.d); if (q.n === 0) return { t: "0", h: "0" }; const top = (q.n === 1 ? "" : String(q.n)) + "π"; return q.d === 1 ? { t: top, h: top } : { t: top + "/" + q.d, h: FR(top, q.d) }; }
const wrapOf = el => el.closest ? (el.closest(".ctl") || el) : el;
const showEl = (el, on) => { wrapOf(el).style.display = on ? "" : "none"; };
const topBelow = (el, extra = 10) => (el ? el.offsetTop + el.offsetHeight + extra : 16);

/* ---- pointer dragging ---- */
function drag(c, pick, move, end){
  let cur = null;
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e); const h = pick(p); if (h == null) return; cur = h; try { c.cv.setPointerCapture(e.pointerId); } catch (_) {} e.preventDefault(); move(cur, p); });
  c.cv.addEventListener("pointermove", e => { const p = c.xy(e); if (cur == null) { c.cv.style.cursor = pick(p) != null ? "grab" : "default"; return; } c.cv.style.cursor = "grabbing"; move(cur, p); });
  const up = () => { if (cur != null && end) end(cur); cur = null; c.cv.style.cursor = "default"; };
  c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  return () => cur != null;
}

/* ---- drawing helpers (pixel coordinates) ---- */
function poly(g, pts, fill, stroke, lw = 2, dash){ g.save(); g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.lineJoin = "round"; if (dash) g.setLineDash(dash); g.stroke(); } g.restore(); }
function unitv(P, V){ const dx = P.x - V.x, dy = P.y - V.y, l = Math.hypot(dx, dy) || 1; return { x: dx / l, y: dy / l }; }
function arcAng(g, V, P, R_, r, color, lw = 2){
  const a1 = Math.atan2(P.y - V.y, P.x - V.x); let dl = Math.atan2(R_.y - V.y, R_.x - V.x) - a1;
  while (dl > Math.PI) dl -= 2 * Math.PI; while (dl <= -Math.PI) dl += 2 * Math.PI;
  g.save(); g.strokeStyle = color; g.lineWidth = lw; g.beginPath(); g.arc(V.x, V.y, r, a1, a1 + dl, dl < 0); g.stroke(); g.restore();
  return a1 + dl / 2;
}
function rightMark(g, V, P, R_, s, color){ const u = unitv(P, V), w = unitv(R_, V); g.save(); g.strokeStyle = color; g.lineWidth = 1.6; g.beginPath(); g.moveTo(V.x + u.x * s, V.y + u.y * s); g.lineTo(V.x + (u.x + w.x) * s, V.y + (u.y + w.y) * s); g.lineTo(V.x + w.x * s, V.y + w.y * s); g.stroke(); g.restore(); }
// label at the midpoint of PQ, pushed away from point `away`
let SW = 1e9;   // current stage width, set each frame, so labels stay on the canvas
// label at the midpoint of PQ, pushed away from point `away` (negative dist: toward it), far enough to clear the line
function sideLab(d, s, P, Q_, away, color, font, dist = 0){
  const mx = (P.x + Q_.x) / 2, my = (P.y + Q_.y) / 2; let nx = -(Q_.y - P.y), ny = Q_.x - P.x; const l = Math.hypot(nx, ny) || 1; nx /= l; ny /= l;
  if ((away.x - mx) * nx + (away.y - my) * ny > 0) { nx = -nx; ny = -ny; }
  const tw = d.width(s, font), need = Math.abs(nx) * tw / 2 + Math.abs(ny) * 8 + 6;
  const dd = dist < 0 ? -Math.max(-dist, need) : Math.max(dist, need);
  const x = clamp(mx + nx * dd, tw / 2 + 4, SW - tw / 2 - 4);
  d.text(s, x, my + ny * dd, { font, color, align: "center", base: "middle" });
}
// angle label along the bisector of ∠PVR
function angLab(d, s, V, P, R_, dist, color, font){ const u = unitv(P, V), w = unitv(R_, V); let bx = u.x + w.x, by = u.y + w.y; const l = Math.hypot(bx, by) || 1; d.text(s, V.x + bx / l * dist, V.y + by / l * dist, { font, color, align: "center", base: "middle" }); }
// world → pixel, equal scale, y up, fitted in a box
function fit(c, x0, x1, y0, y1, box){
  const W = c.w - box.l - box.r, H = c.h - box.t - box.b;
  const s = Math.max(1e-6, Math.min(W / Math.max(x1 - x0, 1e-9), H / Math.max(y1 - y0, 1e-9)));
  const ox = box.l + (W - (x1 - x0) * s) / 2, oy = box.t + (H + (y1 - y0) * s) / 2;
  const X = x => ox + (x - x0) * s, Y = y => oy - (y - y0) * s;
  return { s, X, Y, P: p => ({ x: X(p.x), y: Y(p.y) }), inv: (px, py) => ({ x: x0 + (px - ox) / s, y: y0 + (oy - py) / s }) };
}
// light unit grid behind a fitted figure
function unitGrid(c, V, C, alpha, step = 1){
  if (V.s * step < 7) return; const g = c.g; const a = V.inv(0, 0), b = V.inv(c.w, c.h);
  g.save(); g.strokeStyle = alpha(C.line2, .32); g.lineWidth = 1; g.beginPath();
  for (let x = Math.ceil(a.x / step) * step; x <= b.x; x += step) { const px = Math.round(V.X(x)) + .5; g.moveTo(px, 0); g.lineTo(px, c.h); }
  for (let y = Math.ceil(b.y / step) * step; y <= a.y; y += step) { const py = Math.round(V.Y(y)) + .5; g.moveTo(0, py); g.lineTo(c.w, py); }
  g.stroke(); g.restore();
}
// reflect p across line AB, partially: t = 0 stays, t = 1 full reflection (a fold)
function foldPt(p, A, B, t){ const ex = B.x - A.x, ey = B.y - A.y, l = Math.hypot(ex, ey) || 1, ux = ex / l, uy = ey / l; const dx = p.x - A.x, dy = p.y - A.y, pr = dx * ux + dy * uy; const fx_ = A.x + pr * ux, fy_ = A.y + pr * uy, kk = Math.cos(Math.PI * t); return { x: fx_ + (p.x - fx_) * kk, y: fy_ + (p.y - fy_) * kk }; }
const rot = (p, M, a) => { const cs = Math.cos(a), sn = Math.sin(a), dx = p.x - M.x, dy = p.y - M.y; return { x: M.x + dx * cs - dy * sn, y: M.y + dx * sn + dy * cs }; };
const add = (p, v) => ({ x: p.x + v.x, y: p.y + v.y });

/* ===================== g-special-right ===================== */
L["g-special-right"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "30", g45 = "leg", g30 = "short", n = 6, fold = 0, folding = false;
  const modesEl = k.modes([["45", "45°-45°-90°"], ["30", "30°-60°-90°"]], mode, m => { mode = m; fold = 0; folding = false; show(); });
  const s45 = k.select("Given", [["leg", "a leg"], ["hyp", "the hypotenuse"]], g45, v => { g45 = v; });
  const s30 = k.select("Given", [["short", "the short leg"], ["long", "the long leg"], ["hyp", "the hypotenuse"]], g30, v => { g30 = v; });
  k.slider("Length", 1, 12, 1, n, v => { n = v; });
  k.button("Fold the parent", () => { folding = !folding; if (k.reduce) fold = folding ? 1 : 0; }, "btn ghost");
  function show(){ showEl(s45.el, mode === "45"); showEl(s30.el, mode === "30"); }
  show();
  k.loop(dt => {
    if (folding && fold < 1) fold = Math.min(1, fold + dt / 1.2); if (!folding && fold > 0) fold = Math.max(0, fold - dt / .8);
    c.begin(); SW = c.w;
    // exact sides: short (or leg) x, long, hyp
    let sh, lo, hy, how;
    const N = Q(n);
    if (mode === "45") {
      if (g45 === "leg") { sh = rq(N, 1); hy = rq(N, 2); how = `leg <i>x</i> = ${n} <br>⇒  hypotenuse <i>x</i>√2 = ${hy.h}`; }
      else { sh = rq(Q(n, 2), 2); hy = rq(N, 1); how = `<i>x</i>√2 = ${n} <br>⇒  <i>x</i> = ${FR(n, "√2")} = ${sh.h}`; }
      lo = sh;
    } else {
      if (g30 === "short") { sh = rq(N, 1); lo = rq(N, 3); hy = rq(Q(2 * n), 1); how = `<i>x</i> = ${n} <br>⇒  <i>x</i>√3 = ${lo.h}<br>⇒ 2<i>x</i> = ${hy.h}`; }
      else if (g30 === "long") { sh = rq(Q(n, 3), 3); lo = rq(N, 1); hy = rq(Q(2 * n, 3), 3); how = `<i>x</i>√3 = ${n} <br>⇒  <i>x</i> = ${FR(n, "√3")} = ${sh.h}<br>⇒ 2<i>x</i> = ${hy.h}`; }
      else { sh = rq(Q(n, 2), 1); lo = rq(Q(n, 2), 3); hy = rq(N, 1); how = `2<i>x</i> = ${n} <br>⇒  <i>x</i> = ${sh.h}<br>⇒ <i>x</i>√3 = ${lo.h}`; }
    }
    const x = sh.v;
    // world figure
    let A, B, T, Par, b0, b1, c0, c1;  // A: acute vertex on base, B: right angle, T: top vertex, Par: parent's extra vertex
    if (mode === "45") { A = { x: 0, y: 0 }; B = { x: x, y: 0 }; T = { x: x, y: x }; Par = { x: 0, y: x }; b0 = 0; b1 = x; c0 = 0; c1 = x; }
    else { A = { x: x, y: 0 }; B = { x: 0, y: 0 }; T = { x: 0, y: x * Math.sqrt(3) }; Par = { x: -x, y: 0 }; b0 = -x; b1 = x; c0 = 0; c1 = x * Math.sqrt(3); }
    const top = topBelow(modesEl, 8);
    const V = fit(c, b0, b1, c0, c1, { l: 46, r: 46, t: top + 22, b: 34 });
    unitGrid(c, V, C, alpha);
    const pA = V.P(A), pB = V.P(B), pT = V.P(T);
    // parent half (violet), folding onto the triangle across the shared side
    const hinge = mode === "45" ? [A, T] : [B, T];
    const pPar = V.P(foldPt(Par, hinge[0], hinge[1], ease(fold)));
    const other = mode === "45" ? [pA, pT, pPar] : [pB, pT, pPar];
    poly(g, other, alpha(C.violet, .1), C.violet, 2, [6, 4]);
    poly(g, [pA, pB, pT], alpha(C.amber, .07), null);
    const lf = `600 15px ${F.math}`, af = `600 12px ${F.mono}`;
    // sides: hyp A–T amber; legs
    if (mode === "45") { d.line(pA.x, pA.y, pB.x, pB.y, C.cyan, 3.2); d.line(pB.x, pB.y, pT.x, pT.y, C.cyan, 3.2); }
    else { d.line(pB.x, pB.y, pA.x, pA.y, C.cyan, 3.2); d.line(pB.x, pB.y, pT.x, pT.y, C.pink, 3.2); }
    d.line(pA.x, pA.y, pT.x, pT.y, C.amber, 3.2);
    rightMark(g, pB, pA, pT, 12, C.muted);
    const cen = { x: (pA.x + pB.x + pT.x) / 3, y: (pA.y + pB.y + pT.y) / 3 };
    arcAng(g, pA, pB, pT, 24, C.text, 1.6); arcAng(g, pT, pA, pB, 24, C.text, 1.6);
    if (mode === "45") {
      angLab(d, "45°", pA, pB, pT, 44, C.text, af); angLab(d, "45°", pT, pA, pB, 44, C.text, af);
      sideLab(d, sh.t, pA, pB, cen, C.cyan, lf, 16); sideLab(d, sh.t, pB, pT, cen, C.cyan, lf, 20);
      sideLab(d, hy.t, pA, pT, cen, C.amber, lf, 18);
      if (fold < .05) d.text("square", (pA.x + V.X(Par.x)) / 2 + 26, V.Y(Par.y) - 12, { font: `12px ${F.sans}`, color: C.violet, align: "center" });
    } else {
      angLab(d, "60°", pA, pB, pT, 42, C.text, af); angLab(d, "30°", pT, pA, pB, 58, C.text, af);
      sideLab(d, sh.t, pB, pA, cen, C.cyan, lf, 14); sideLab(d, lo.t, pB, pT, cen, C.pink, lf, 22);
      sideLab(d, hy.t, pA, pT, cen, C.amber, lf, 22);
      if (fold < .05) { const pp = V.P(Par); arcAng(g, pp, pB, pT, 20, alpha(C.violet, .8), 1.4); angLab(d, "60°", pp, pB, pT, 36, C.violet, af); }
    }
    // readout
    const sq2 = r => qh(r.q2);
    const is45 = mode === "45";
    const ratioH = is45 ? `<span class="c2">1</span> : <span class="c2">1</span> : <span class="c1">√2</span>` : `<span class="c2">1</span> : <span class="c3">√3</span> : <span class="c1">2</span>`;
    const rows = is45 ? `
      <div class="row">${M(`<span class="c2">leg <i>x</i> = ${sh.h}</span>`)}<span class="lbl">≈ ${f2(sh.v)}, both legs</span></div>
      <div class="row">${M(`<span class="c1">hypotenuse <i>x</i>√2 = ${hy.h}</span>`)}<span class="lbl">≈ ${f2(hy.v)}</span></div>
      <div class="row">${M(`${sq2(sh)} + ${sq2(sh)} = ${sq2(hy)}`)}<span class="lbl">leg² + leg² = hyp² (Pythagorean Theorem)</span></div>` : `
      <div class="row">${M(`<span class="c2">short leg <i>x</i> = ${sh.h}</span>`)}<span class="lbl">≈ ${f2(sh.v)}, opposite 30°</span></div>
      <div class="row">${M(`<span class="c3">long leg <i>x</i>√3 = ${lo.h}</span>`)}<span class="lbl">≈ ${f2(lo.v)}, opposite 60°</span></div>
      <div class="row">${M(`<span class="c1">hypotenuse 2<i>x</i> = ${hy.h}</span>`)}<span class="lbl">≈ ${f2(hy.v)}, opposite 90°</span></div>
      <div class="row">${M(`${sq2(sh)} + ${sq2(lo)} = ${sq2(hy)}`)}<span class="lbl">short² + long² = hyp²</span></div>`;
    const parentNote = is45
      ? (fold >= 1 ? "Folded along the diagonal, the two halves of the square match exactly, so both acute angles are 45° and both legs are equal." : "The violet half completes a square. Its diagonal cuts the 90° corners into 45° + 45°.")
      : (fold >= 1 ? "Folded along the altitude, the two halves of the equilateral triangle match: the altitude bisects the base (short leg = half a side) and the 60° apex angle (30°)." : "The violet half completes an equilateral triangle with side 2x. The altitude meets the base at its midpoint, so the short leg is half the hypotenuse.");
    k.setRO(`<div><h2>${is45 ? "45°-45°-90° triangle" : "30°-60°-90° triangle"}</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(ratioH)}</div></div>
      <div class="ro-rows">${rows}</div>
      <div class="landmark hit"><div class="big" style="font-size:17px;line-height:1.55">${M(how)}</div><div class="note">${parentNote}</div></div>
      <p class="narr">Change the length or which side is given. Every side scales by the same factor, so the ratio never changes. Grid squares are 1 unit.</p>`);
  });
};

/* ===================== g-trig-ratios ===================== */
L["g-trig-ratios"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "ratio", th = 35, H = 7, other = false, pre = "bldg";
  const T = x => Math.tan(x * RAD), S = x => Math.sin(x * RAD), Co = x => Math.cos(x * RAD);
  const EX = { 30: { s: FR(1, 2), c: FR("√3", 2), t: FR("√3", 3) }, 45: { s: FR("√2", 2), c: FR("√2", 2), t: "1" }, 60: { s: FR("√3", 2), c: FR(1, 2), t: "√3" } };
  // presets for solve mode: V = angle vertex, R = right angle, Tp = third vertex (world units)
  const hB = 120 * T(38.5), lad = [20 * Co(75), 20 * S(75)], dL = 150 / T(12), rampA = Math.atan(1 / 12) / RAD;
  const PRE = {
    bldg: { name: "Building (angle of elevation)", V: { x: 0, y: 5 }, R: { x: 120, y: 5 }, Tp: { x: 120, y: 5 + hB }, ang: "38.5°", known: { adj: "120 ft" }, unk: "opp", unkName: "h", unkVal: f2(hB) + " ft", used: ["opp", "adj"],
      steps: [
        ["Sketch", `The horizontal sight line from the instrument (5 ft up), the wall and the line of sight to the roof edge form a right triangle. Known: ${M("<i>θ</i> = 38.5°")} and the horizontal distance 120 ft.`, `<i>θ</i> = 38.5°, 120 ft`],
        ["Name the sides", `From ${M("<i>θ</i>")}: the 120 ft leg is <span class="c2">adjacent</span>; the height ${M("<i>h</i>")} above the instrument is <span class="c3">opposite</span>. The hypotenuse is not involved.`, `<span class="c2">adj</span> = 120, <span class="c3">opp</span> = <i>h</i>`],
        ["Choose the ratio", `Opposite and adjacent: ${M(`tan <i>θ</i> = ${FR("opp", "adj")}`)}, so ${M(`tan 38.5° = ${FR("<i>h</i>", "120")}`)}.`, `tan 38.5° = <i>h</i>/120`],
        ["Solve", `Multiply by 120: ${M(`<i>h</i> = 120 tan 38.5° ≈ 120(${T(38.5).toFixed(5)}) ≈ ${f2(hB)}`)} ft.`, `<i>h</i> ≈ ${f2(hB)} ft`],
        ["Answer and check", `Add the instrument height: ${M(`${f2(hB)} + 5 ≈ ${f1(hB + 5)}`)} ft. Check: ${M(`tan<sup>−1</sup>(${f2(hB)}/120) ≈ ${f1(Math.atan(hB / 120) / RAD)}°`)}.`, `${f2(hB)} + 5 ≈ ${f1(hB + 5)} ft`]],
      answer: `${f1(hB + 5)} ft` },
    ramp: { name: "Ramp (find the angle)", V: { x: 0, y: 0 }, R: { x: 12, y: 0 }, Tp: { x: 12, y: 1 }, ang: "θ", known: { adj: "12 in", opp: "1 in" }, unk: "ang", unkVal: f1(rampA) + "°", used: ["opp", "adj"],
      steps: [
        ["Sketch", `The ramp surface, the ground and a vertical rise make a right triangle. Known: a rise of 1 in for every 12 in of horizontal run. Unknown: the angle ${M("<i>θ</i>")} with the ground.`, `rise 1 in, run 12 in`],
        ["Name the sides", `From ${M("<i>θ</i>")}: the 1 in rise is <span class="c3">opposite</span>, the 12 in run is <span class="c2">adjacent</span>.`, `<span class="c3">opp</span> = 1, <span class="c2">adj</span> = 12`],
        ["Choose the ratio", `${M(`tan <i>θ</i> = ${FR("opp", "adj")} = ${FR(1, 12)}`)}. The angle is the unknown, so use the inverse tangent.`, `tan <i>θ</i> = 1/12`],
        ["Solve", `${M(`<i>θ</i> = tan<sup>−1</sup>(1/12) ≈ ${rampA.toFixed(2)}°`)}, with the calculator in degree mode.`, `<i>θ</i> ≈ ${rampA.toFixed(2)}°`],
        ["Answer and check", `The steepest allowed ramp makes about ${f1(rampA)}° with the ground. Check: ${M(`tan ${rampA.toFixed(2)}° ≈ ${T(rampA).toFixed(4)} ≈ 1/12`)}. The ramp surface is ${M(`√145 ≈ ${f2(Math.sqrt(145))}`)} in per 12 in of run.`, `<i>θ</i> ≈ ${f1(rampA)}°`]],
      answer: `${f1(rampA)}°` },
    ladder: { name: "Ladder against a wall", V: { x: 0, y: 0 }, R: { x: lad[0], y: 0 }, Tp: { x: lad[0], y: lad[1] }, ang: "75°", known: { hyp: "20 ft" }, unk: "opp", unkName: "h", unkVal: f2(lad[1]) + " ft", used: ["opp", "hyp"],
      steps: [
        ["Sketch", `The ladder, the wall and the ground form a right triangle, since the wall is vertical. Known: the ladder is 20 ft long and makes 75° with the ground.`, `20 ft, 75°`],
        ["Name the sides", `From the 75° angle at the foot: the ladder is the <span class="c4">hypotenuse</span>; the height ${M("<i>h</i>")} reached on the wall is <span class="c3">opposite</span>.`, `<span class="c4">hyp</span> = 20, <span class="c3">opp</span> = <i>h</i>`],
        ["Choose the ratio", `Opposite and hypotenuse: ${M(`sin 75° = ${FR("<i>h</i>", "20")}`)}.`, `sin 75° = <i>h</i>/20`],
        ["Solve", `Multiply by 20: ${M(`<i>h</i> = 20 sin 75° ≈ ${f2(lad[1])}`)} ft.`, `<i>h</i> ≈ ${f2(lad[1])} ft`],
        ["Answer and check", `The ladder reaches about ${f1(lad[1])} ft up the wall. Its foot is ${M(`20 cos 75° ≈ ${f2(lad[0])}`)} ft out, close to the 4-to-1 rule (${f2(lad[1] / lad[0])} : 1). Check: ${M(`${f2(lad[0])}<sup>2</sup> + ${f2(lad[1])}<sup>2</sup> ≈ 400`)}.`, `foot ${f2(lad[0])} ft out`]],
      answer: `${f1(lad[1])} ft` },
    light: { name: "Lighthouse (angle of depression)", V: { x: dL, y: 0 }, R: { x: 0, y: 0 }, Tp: { x: 0, y: 150 }, ang: "12°", known: { opp: "150 ft" }, unk: "adj", unkName: "d", unkVal: f1(dL) + " ft", depress: true, used: ["opp", "adj"],
      steps: [
        ["Sketch", `From the top, 150 ft above the water, the angle of depression to the boat is 12°, measured down from the horizontal.`, `150 ft, depression 12°`],
        ["Use parallel horizontals", `The horizontal at the top is parallel to the water, so the angle of elevation from the boat is also 12° (Alternate Interior Angles Theorem).`, `elevation at the boat = 12°`],
        ["Name the sides", `From the 12° angle at the boat: the 150 ft height is <span class="c3">opposite</span> and the distance ${M("<i>d</i>")} is <span class="c2">adjacent</span>, so ${M(`tan 12° = ${FR("150", "<i>d</i>")}`)}.`, `tan 12° = 150/<i>d</i>`],
        ["Solve", `The unknown is in the denominator: ${M(`<i>d</i> = ${FR("150", "tan 12°")} ≈ ${f2(dL)}`)} ft.`, `<i>d</i> ≈ ${f2(dL)} ft`],
        ["Answer and check", `The boat is about ${f1(dL)} ft from the base. Check: ${M(`tan<sup>−1</sup>(150/${f1(dL)}) ≈ ${f1(Math.atan(150 / dL) / RAD)}°`)}.`, `<i>d</i> ≈ ${f1(dL)} ft`]],
      answer: `${f1(dL)} ft` }
  };
  const modesEl = k.modes([["ratio", "Ratios"], ["solve", "Solve"]], mode, m => { mode = m; show(); });
  const sTh = k.slider(`<span class="c1"><i>θ</i></span>`, 1, 89, 1, th, v => { th = v; }, v => v + "°");
  const sH = k.slider(`<span class="c4">size</span>`, 2, 10, .5, H, v => { H = v; });
  const cOther = k.check("Use the other acute angle", other, v => { other = v; });
  const sP = k.select("Problem", Object.keys(PRE).map(kk => [kk, PRE[kk].name]), pre, v => { pre = v; st.reset(); });
  const n0 = k.ctl.children.length;
  const st = k.stepper(() => 5, () => {}, { ms: 1500 });
  const stepBtns = [...k.ctl.children].slice(n0);
  function show(){ const r = mode === "ratio"; showEl(sTh.el, r); showEl(sH.el, r); showEl(cOther, r); showEl(sP.el, !r); stepBtns.forEach(b => b.style.display = r ? "none" : ""); }
  show();
  const lf = `600 14px ${F.math}`, tf = `600 12px ${F.sans}`;
  function ratioMode(){
    const top = topBelow(modesEl, 8);
    const W = c.w - 80, Hh = c.h - top - 70, sc = Math.min(W, Hh) / 10.4;
    const bw = H * Co(th) * sc, bh = H * S(th) * sc;
    const ox = (c.w - bw) / 2, oy = top + 30 + (Hh + bh) / 2;
    const A = { x: ox, y: oy }, Cc = { x: ox + bw, y: oy }, B = { x: ox + bw, y: oy - bh };
    // unit grid aligned to the right-angle vertex
    g.save(); g.strokeStyle = alpha(C.line2, .3); g.lineWidth = 1; g.beginPath();
    if (sc >= 7) { for (let x = Cc.x % sc; x <= c.w; x += sc) { g.moveTo(Math.round(x) + .5, 0); g.lineTo(Math.round(x) + .5, c.h); } for (let y = Cc.y % sc; y <= c.h; y += sc) { g.moveTo(0, Math.round(y) + .5); g.lineTo(c.w, Math.round(y) + .5); } }
    g.stroke(); g.restore();
    const ref = other ? B : A, ang = other ? 90 - th : th;
    // sides relative to ref
    const sideAC = { P: A, Q: Cc, len: H * Co(th) }, sideBC = { P: B, Q: Cc, len: H * S(th) };
    const opp = other ? sideAC : sideBC, adj = other ? sideBC : sideAC;
    poly(g, [A, Cc, B], alpha(C.amber, .06), null);
    d.line(opp.P.x, opp.P.y, opp.Q.x, opp.Q.y, C.pink, 3.4);
    d.line(adj.P.x, adj.P.y, adj.Q.x, adj.Q.y, C.cyan, 3.4);
    d.line(A.x, A.y, B.x, B.y, C.violet, 3.4);
    rightMark(g, Cc, A, B, 11, C.muted);
    const cen = { x: (A.x + B.x + Cc.x) / 3, y: (A.y + B.y + Cc.y) / 3 };
    const oth = other ? A : B, othAng = other ? th : 90 - th;
    arcAng(g, oth, oth === A ? Cc : Cc, oth === A ? B : A, 20, alpha(C.text, .45), 1.4);
    const ra = Math.min(30, Math.max(18, Math.min(bw, bh) * .6));
    arcAng(g, ref, Cc, ref === A ? B : A, ra, C.amber, 2.6);
    // θ inside its arc, far enough out that the opening is wide enough; the other angle's measure outside its vertex
    angLab(d, "θ", ref, Cc, ref === A ? B : A, clamp(9 / Math.tan(ang * RAD / 2), ra + 10, 90), C.amber, `italic 600 16px ${F.math}`);
    if (oth === A) d.text(`${othAng}°`, A.x - 8, A.y - 4, { font: `12px ${F.mono}`, color: C.muted, align: "right", base: "middle" });
    else d.text(`${othAng}°`, B.x + 8, B.y - 6, { font: `12px ${F.mono}`, color: C.muted, align: "left", base: "middle" });
    sideLab(d, `opp ${f2(opp.len)}`, opp.P, opp.Q, cen, C.pink, tf);
    sideLab(d, `adj ${f2(adj.len)}`, adj.P, adj.Q, cen, C.cyan, tf);
    sideLab(d, `hyp ${f2(H)}`, A, B, cen, C.violet, tf);
    const sn = opp.len / H, cs = adj.len / H, tn = opp.len / adj.len;
    const ex = EX[ang];
    const row = (fn, a, b, v, e, col) => `<div class="row">${M(`${fn} <span class="c1"><i>θ</i></span> = ${FR(`<span class="${col[0]}">${f2(a)}</span>`, `<span class="${col[1]}">${f2(b)}</span>`)} ${e ? "=" : "≈"} ${e ? e : v.toFixed(4)}`)}${e ? `<span class="lbl">≈ ${v.toFixed(4)}</span>` : ""}</div>`;
    const lm = ex ? `<div class="landmark hit"><div class="big" style="font-size:17px">${M(`sin ${ang}° = ${ex.s}, &nbsp;cos ${ang}° = ${ex.c}`)}<br>${M(`tan ${ang}° = ${ex.t}`)}</div><div class="note">${ang === 45 ? "A 45°-45°-90° triangle: the legs are equal, so tan 45° = 1 and sin 45° = cos 45°." : "A 30°-60°-90° triangle: the short leg is half the hypotenuse. These exact values come from the special right triangles."}</div></div>`
      : `<div class="landmark"><div class="big">ratios depend only on ${M("<i>θ</i>")}</div><div class="note">Move the size slider: every side changes, but all right triangles with a ${ang}° angle are similar (AA), so the three ratios stay the same.${ang >= 80 ? ` Near 90° the adjacent leg shrinks toward 0 and tan θ grows without bound.` : ""}</div></div>`;
    k.setRO(`<div><h2>Seen from ${other ? "∠B" : "∠A"}</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${ang}°</span></div></div>
      <div class="ro-rows">${row("sin", opp.len, H, sn, ex && ex.s, ["c3", "c4"])}${row("cos", adj.len, H, cs, ex && ex.c, ["c2", "c4"])}${row("tan", opp.len, adj.len, tn, ex && ex.t, ["c3", "c2"])}
      <div class="row">${M(`sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i> = ${(sn * sn + cs * cs).toFixed(4)}`)}<span class="lbl">and sin ${ang}° = cos ${90 - ang}°</span></div></div>${lm}
      <p class="narr">${other ? "From ∠B the legs swap roles: the old adjacent leg is now opposite." : "Tick “Use the other acute angle” to see opposite and adjacent swap."}</p>`);
  }
  function solveMode(){
    const p = PRE[pre], s = st.k;
    const top = topBelow(modesEl, 8);
    const pts = [p.V, p.R, p.Tp, { x: p.R.x, y: 0 }, { x: p.V.x, y: 0 }];
    let x0 = Math.min(...pts.map(q => q.x)), x1 = Math.max(...pts.map(q => q.x)); const y1 = Math.max(...pts.map(q => q.y));
    if (pre === "bldg") x1 += 20; if (pre === "ladder") x1 += 1.5; if (pre === "light") x0 -= 25;
    const V = fit(c, x0, x1, 0, y1, { l: pre === "light" ? 84 : 50, r: 60, t: top + 34, b: 52 });
    const gy = V.Y(0);
    d.line(0, gy, c.w, gy, alpha(C.muted, .7), 1.5);
    g.save(); g.fillStyle = alpha(pre === "light" ? C.cyan : C.line2, pre === "light" ? .08 : .25); g.fillRect(0, gy, c.w, c.h - gy); g.restore();
    if (pre === "bldg") { const bx = V.X(120), bt = V.Y(hB + 5); d.rect(bx, bt, V.X(140) - bx, gy - bt, alpha(C.text, .08), alpha(C.text, .35)); d.line(V.X(0), gy, V.X(0), V.Y(5), C.muted, 2); d.line(V.X(0) - 6, gy, V.X(0), V.Y(5), C.muted, 1.4); d.line(V.X(0) + 6, gy, V.X(0), V.Y(5), C.muted, 1.4); d.text("5 ft", V.X(0) - 10, (gy + V.Y(5)) / 2, { font: `11px ${F.mono}`, color: C.muted, align: "right", base: "middle" }); }
    if (pre === "ladder") { const wx = V.X(lad[0]); d.rect(wx, V.Y(lad[1] + 1.5), 10, gy - V.Y(lad[1] + 1.5), alpha(C.text, .1), alpha(C.text, .35)); }
    if (pre === "light") { const lx = V.X(0); poly(g, [{ x: lx - 9, y: gy }, { x: lx + 9, y: gy }, { x: lx + 5, y: V.Y(150) }, { x: lx - 5, y: V.Y(150) }], alpha(C.text, .1), alpha(C.text, .4), 1.2); d.circle(lx, V.Y(150), 4, C.amber);
      const bx = V.X(dL); poly(g, [{ x: bx - 12, y: gy - 6 }, { x: bx + 12, y: gy - 6 }, { x: bx + 7, y: gy + 1 }, { x: bx - 7, y: gy + 1 }], alpha(C.text, .25), C.muted, 1); }
    const pV = V.P(p.V), pR = V.P(p.R), pT = V.P(p.Tp);
    const named = s >= (p.depress ? 3 : 2);
    const hypC = named ? C.violet : C.text, oppC = named ? C.pink : C.text, adjC = named ? C.cyan : C.text;
    const lw = nm => (s >= 3 && p.used.includes(nm) ? 4.2 : 2.4);
    poly(g, [pV, pR, pT], alpha(C.amber, .05), null);
    d.line(pR.x, pR.y, pT.x, pT.y, oppC, lw("opp"));
    d.line(pV.x, pV.y, pR.x, pR.y, adjC, lw("adj"));
    d.line(pV.x, pV.y, pT.x, pT.y, hypC, lw("hyp"));
    rightMark(g, pR, pV, pT, 10, C.muted);
    const cen = { x: (pV.x + pR.x + pT.x) / 3, y: (pV.y + pR.y + pT.y) / 3 };
    // the angle at V: label inside when wide, below the adjacent leg when narrow
    const angDeg = Math.atan2(Math.abs(p.Tp.y - p.R.y), Math.abs(p.R.x - p.V.x)) / RAD;
    const ra = 30; arcAng(g, pV, pR, pT, ra, C.amber, 2.4);
    const angText = p.unk === "ang" ? (s >= 4 ? p.unkVal : "θ = ?") : p.ang;
    const af = `600 13px ${F.math}`;
    if (angDeg >= 20) angLab(d, angText, pV, pR, pT, ra + 12 + d.width(angText, af) / 2, C.amber, af);
    else { const dir = pR.x > pV.x ? 1 : -1; d.text(angText, pV.x + dir * (ra + 6), pV.y + 15, { font: af, color: C.amber, align: dir > 0 ? "left" : "right", base: "middle" }); }
    if (p.depress) { // horizontal at the top and the angle of depression
      const hx = pT.x + (pV.x - pT.x) * .55;
      d.line(pT.x, pT.y, hx, pT.y, alpha(C.amber, .85), 1.4, [5, 4]);
      const rr = clamp(.4 * Math.abs(pV.x - pT.x), 60, 130);
      arcAng(g, pT, { x: pT.x + 60, y: pT.y }, pV, rr, C.amber, 2);
      const a6 = 6 * RAD; d.text("12°", pT.x + (rr + 8) * Math.cos(a6), pT.y + (rr + 8) * Math.sin(a6), { font: af, color: C.amber, align: "left", base: "middle" });
      d.text("horizontal", hx, pT.y - 10, { font: `11px ${F.sans}`, color: C.muted, align: "right" });
    }
    // side labels
    const known = p.known, sf = `600 12px ${F.sans}`;
    const lab = (nm, P1, P2, inside) => {
      const tag = named ? nm : "";
      let val = known[nm] || "";
      if (p.unk === nm) val = s >= 4 ? `${p.unkName} ≈ ${p.unkVal}` : `${p.unkName} = ?`;
      const txt = [tag, val].filter(Boolean).join("  ");
      if (txt) sideLab(d, txt, P1, P2, cen, nm === "opp" ? oppC : nm === "adj" ? adjC : hypC, sf, inside ? -10 : 10);
    };
    lab("opp", pR, pT, pre === "bldg"); lab("adj", pV, pR, pre === "bldg"); lab("hyp", pV, pT, pre === "light");
    // readout: earlier steps compact, current step in the landmark
    const rows = p.steps.slice(0, Math.max(0, s - 1)).map((q, i) => `<div class="row">${M(q[2])}<span class="lbl">${i + 1}. ${q[0]}</span></div>`).join("");
    const cur = s ? p.steps[s - 1] : null;
    const lm = cur ? `<div class="landmark${s === 5 ? " hit" : ""}"><div class="big" style="font-size:16px">${s}. ${cur[0]}</div><div class="note">${cur[1]}</div></div>`
      : `<div class="landmark"><div class="big" style="font-size:16px">The problem</div><div class="note">${p.steps[0][1]} Press Step to solve it in five steps.</div></div>`;
    k.setRO(`<div><h2>${p.name}</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${s >= 5 ? p.answer : "?"}</span></div></div>
      <div class="ro-rows">${rows}</div>${lm}
      <p class="narr">${s >= 5 ? "Pick another problem, or press Play to watch this one again." : "Sketch, name the sides from the angle, choose the ratio, solve, check."}</p>`);
  }
  k.loop(() => { c.begin(); SW = c.w; if (mode === "ratio") ratioMode(); else solveMode(); });
};

/* ===================== g-area-polygons ===================== */
L["g-area-polygons"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "para", b = 8, h = 5, sh = 3, b2 = 4, d1 = 8, d2 = 6, pc = 2, t = 0, on = false;
  const modesEl = k.modes([["para", "Parallelogram"], ["tri", "Triangle"], ["trap", "Trapezoid"], ["kite", "Kite / rhombus"]], mode, m => { mode = m; on = false; t = 0; show(); });
  const sB = k.slider(`<span class="c2"><i>b</i></span>`, 2, 10, 1, b, v => { b = v; });
  const sB2 = k.slider(`<span class="c2"><i>b</i><sub>2</sub></span>`, 1, 10, 1, b2, v => { b2 = v; });
  const sHh = k.slider(`<span class="c3"><i>h</i></span>`, 1, 7, 1, h, v => { h = v; });
  const sS = k.slider("shear", -8, 8, 1, sh, v => { sh = v; }, v => ng(v));
  const sD1 = k.slider(`<span class="c2"><i>d</i><sub>1</sub></span>`, 2, 10, 1, d1, v => { d1 = v; });
  const sD2 = k.slider(`<span class="c3"><i>d</i><sub>2</sub></span>`, 2, 8, 1, d2, v => { d2 = v; sP.setMax(d2 - 1); pc = Math.min(pc, d2 - 1); });
  const sP = k.slider("crossing", 1, d2 - 1, 1, pc, v => { pc = v; });
  const bt = k.button("Rearrange", () => { on = !on; if (k.reduce) t = on ? 1 : 0; }, "btn");
  function show(){ const kt = mode === "kite"; [sB, sHh, sS].forEach(s => showEl(s.el, !kt)); showEl(sB2.el, mode === "trap"); [sD1, sD2, sP].forEach(s => showEl(s.el, kt)); }
  show();
  k.hint("Rearrange shows why each formula holds");
  const lf = `600 14px ${F.math}`, sf = `600 12px ${F.sans}`;
  const halfRad = N => { const [a1, b1] = sqf(N); return rq(Q(a1, 2), b1).h; };   // √N / 2, simplified
  k.loop(dt => {
    if (on && t < 1) t = Math.min(1, t + dt / 1.3); if (!on && t > 0) t = Math.max(0, t - dt / .9);
    bt.textContent = on ? "Undo" : "Rearrange";
    c.begin(); SW = c.w; const top = topBelow(modesEl, 8); const e = ease(t);
    let pts = [], piece = null, pieceMoved = null, target = null, A, title, formula, rows = "", lm = "", base = null, hgt = null, ext = [];
    const O = { x: 0, y: 0 };
    if (mode === "para") {
      const P0 = O, P1 = { x: b, y: 0 }, P2 = { x: b + sh, y: h }, P3 = { x: sh, y: h };
      A = b * h; title = "Parallelogram"; formula = `<span class="c1"><i>A</i></span> = <span class="c2"><i>b</i></span><span class="c3"><i>h</i></span> = <span class="c2">${b}</span> · <span class="c3">${h}</span> = <span class="c1">${A}</span>`;
      base = [P0, P1]; hgt = { x: sh >= 0 ? sh : b + sh, y: h };
      const ok = Math.abs(sh) <= b;
      if (sh > 0 && ok) { piece = [P0, { x: sh, y: 0 }, P3]; pts = [{ x: sh, y: 0 }, P1, P2, P3]; }
      else if (sh < 0 && ok) { piece = [P3, { x: 0, y: h }, P0]; pts = [P0, P1, P2, { x: 0, y: h }]; }
      else pts = [P0, P1, P2, P3];
      if (piece) pieceMoved = piece.map(p => add(p, { x: b * e, y: 0 }));
      if (sh === 0) lm = `<div class="landmark hit"><div class="big">shear 0: a rectangle</div><div class="note">With no slant the parallelogram is already a rectangle, ${b} by ${h}. Slide the shear: the slanted side gets longer, the area does not change.</div></div>`;
      else if (!ok) lm = `<div class="landmark hit"><div class="big">one cut is not enough</div><div class="note">The shear (${Math.abs(sh)}) is longer than the base (${b}), so a vertical cut from a top corner misses the base. Cutting into more strips still works, and Euclid I.35 still holds: same base, same parallels, same area ${A}.</div></div>`;
      else lm = `<div class="landmark${t >= 1 ? " hit" : ""}"><div class="big">${t >= 1 ? `a ${b} × ${h} rectangle` : "cut, slide, rectangle"}</div><div class="note">${t >= 1 ? "The violet triangle slid along the base exactly fills the gap at the other end (Area Congruence and Area Addition), so the parallelogram and the rectangle have equal areas." : "Press Rearrange: the violet triangle cut off along the height slides to the other end."}</div></div>`;
      rows = `<div class="row">${M(`<span class="c2"><i>b</i> = ${b}</span>, &nbsp;<span class="c3"><i>h</i> = ${h}</span>`)}<span class="lbl">base and perpendicular height</span></div>
        <div class="row">${M(`slanted side = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">${sh * sh} + ${h * h}</span> = ${radT(sh * sh + h * h)}`)}<span class="lbl">not used in the area</span></div>`;
      if (t > 0 && piece) { const x0r = sh > 0 ? sh : 0; target = [{ x: x0r, y: 0 }, { x: x0r + b, y: 0 }, { x: x0r + b, y: h }, { x: x0r, y: h }]; }
      ext = [P0, P1, P2, P3];
    } else if (mode === "tri") {
      const P0 = O, P1 = { x: b, y: 0 }, Ap = { x: sh, y: h };
      A = b * h / 2; title = "Triangle"; formula = `<span class="c1"><i>A</i></span> = ½<span class="c2"><i>b</i></span><span class="c3"><i>h</i></span> = ½ · <span class="c2">${b}</span> · <span class="c3">${h}</span> = <span class="c1">${num(A)}</span>`;
      pts = [P0, P1, Ap]; base = [P0, P1]; hgt = Ap;
      const Mm = { x: (b + sh) / 2, y: h / 2 };
      piece = pts; pieceMoved = pts.map(p => rot(p, Mm, Math.PI * e));
      const ob = sh < 0 || sh > b, rt = sh === 0 || sh === b;
      lm = rt ? `<div class="landmark hit"><div class="big">a right triangle</div><div class="note">The apex is straight above an end of the base, so a leg is the height. Two copies make a ${b} × ${h} rectangle.</div></div>`
        : ob ? `<div class="landmark hit"><div class="big">obtuse: the height falls outside</div><div class="note">The apex is past the end of the base, so the altitude meets the base's extension (dashed). It is still the height, and the area is still ½bh = ${num(A)}.</div></div>`
        : `<div class="landmark${t >= 1 ? " hit" : ""}"><div class="big">${t >= 1 ? "two copies = one parallelogram" : "half of a parallelogram"}</div><div class="note">${t >= 1 ? `A copy rotated 180° about the midpoint of a side completes a parallelogram with base ${b} and height ${h}, area ${b * h}. The triangle is half of it.` : "Press Rearrange: a congruent copy turns 180° about the midpoint of the right side."}</div></div>`;
      rows = `<div class="row">${M(`<span class="c2"><i>b</i> = ${b}</span>, &nbsp;<span class="c3"><i>h</i> = ${h}</span>`)}<span class="lbl">base and height</span></div>
        <div class="row">${M(`parallelogram = ${b} · ${h} = ${b * h}`)}<span class="lbl">the triangle plus its copy</span></div>`;
      ext = [P0, P1, Ap, { x: b + sh, y: h }];
    } else if (mode === "trap") {
      const P0 = O, P1 = { x: b, y: 0 }, P2 = { x: sh + b2, y: h }, P3 = { x: sh, y: h };
      A = (b + b2) * h / 2; title = "Trapezoid"; formula = `<span class="c1"><i>A</i></span> = ½(<span class="c2">${b} + ${b2}</span>)(<span class="c3">${h}</span>) = <span class="c1">${num(A)}</span>`;
      pts = [P0, P1, P2, P3]; base = [P0, P1];
      const lo = Math.max(0, sh), hi = Math.min(b, sh + b2); hgt = { x: hi > lo ? (lo + hi) / 2 : sh, y: h };   // inside the trapezoid when possible
      const Mm = { x: (b + sh + b2) / 2, y: h / 2 };
      piece = pts; pieceMoved = pts.map(p => rot(p, Mm, Math.PI * e));
      lm = b === b2 ? `<div class="landmark hit"><div class="big">b₁ = b₂: a parallelogram</div><div class="note">Two equal parallel sides make a parallelogram, and the formula gives ½(${b} + ${b})·${h} = ${b * h} = bh. A trapezoid in the exclusive sense has exactly one pair of parallel sides.</div></div>`
        : `<div class="landmark${t >= 1 ? " hit" : ""}"><div class="big">${t >= 1 ? `base ${b} + ${b2} = ${b + b2}` : "double it"}</div><div class="note">${t >= 1 ? `The copy, turned 180° about the midpoint of the right leg, makes a parallelogram with base b₁ + b₂ = ${b + b2} and height ${h}: area ${(b + b2) * h}. The trapezoid is half.` : "Press Rearrange: a congruent copy turns 180° about the midpoint of the right leg."}</div></div>`;
      rows = `<div class="row">${M(`<span class="c2"><i>b</i><sub>1</sub> = ${b}, <i>b</i><sub>2</sub> = ${b2}</span>, &nbsp;<span class="c3"><i>h</i> = ${h}</span>`)}<span class="lbl">parallel sides and the distance between them</span></div>
        <div class="row">${M(`parallelogram = ${b + b2} · ${h} = ${(b + b2) * h}`)}<span class="lbl">trapezoid plus its copy</span></div>`;
      ext = [P0, P1, P2, P3, { x: b + b2 + sh, y: h }, { x: b + b2, y: 0 }];
    } else {
      const Lp = { x: -d1 / 2, y: 0 }, Rp = { x: d1 / 2, y: 0 }, Tp = { x: 0, y: pc }, Bp = { x: 0, y: pc - d2 };
      A = d1 * d2 / 2; title = pc * 2 === d2 ? (d1 === d2 ? "Square" : "Rhombus") : "Kite";
      formula = `<span class="c1"><i>A</i></span> = ½<span class="c2"><i>d</i><sub>1</sub></span><span class="c3"><i>d</i><sub>2</sub></span> = ½ · <span class="c2">${d1}</span> · <span class="c3">${d2}</span> = <span class="c1">${num(A)}</span>`;
      pts = [Lp, Tp, Rp, Bp];
      ext = [Lp, Rp, Tp, Bp];
      const rh = pc * 2 === d2;
      lm = `<div class="landmark${t >= 1 || rh ? " hit" : ""}"><div class="big">${t >= 1 ? "half of the d₁ × d₂ rectangle" : rh ? (d1 === d2 ? "a square" : "a rhombus") : "a kite"}</div><div class="note">${t >= 1 ? `Each of the four right triangles inside, turned 180° about the midpoint of its side, exactly covers the matching corner of the rectangle, so the rectangle (${d1} × ${d2} = ${d1 * d2}) is exactly twice the ${rh ? "rhombus" : "kite"}.` : rh ? "The diagonals bisect each other at right angles. Move the crossing to make a kite with the same diagonals: the area stays ½d₁d₂." : "The diagonals are perpendicular and one bisects the other. Slide the crossing point: the area does not change. Press Rearrange to see why."}</div></div>`;
      rows = `<div class="row">${M(`<span class="c2"><i>d</i><sub>1</sub> = ${d1}</span>, &nbsp;<span class="c3"><i>d</i><sub>2</sub> = ${d2}</span>`)}<span class="lbl">perpendicular diagonals</span></div>
        <div class="row">${M(`sides ${halfRad(d1 * d1 + 4 * pc * pc)} and ${halfRad(d1 * d1 + 4 * (d2 - pc) * (d2 - pc))}`)}<span class="lbl">two pairs of equal adjacent sides</span></div>`;
      // draw
      const V = fit(c, -d1 / 2, d1 / 2, pc - d2, pc, { l: 40, r: 40, t: top + 26, b: 34 });
      unitGrid(c, V, C, alpha);
      const P = p => V.P(p);
      poly(g, [P({ x: -d1 / 2, y: pc }), P({ x: d1 / 2, y: pc }), P({ x: d1 / 2, y: pc - d2 }), P({ x: -d1 / 2, y: pc - d2 })], null, alpha(C.amber, .8), 1.6, [6, 4]);
      poly(g, pts.map(P), alpha(C.cyan, .12), C.text, 2.2);
      const tris = [[Rp, Tp, { x: d1 / 2, y: pc }], [Tp, Lp, { x: -d1 / 2, y: pc }], [Lp, Bp, { x: -d1 / 2, y: pc - d2 }], [Bp, Rp, { x: d1 / 2, y: pc - d2 }]];
      // each inner right triangle turns 180° about the midpoint of its kite side and lands on the corner triangle
      if (t > 0) tris.forEach(([U, W]) => { const Mm = { x: (U.x + W.x) / 2, y: (U.y + W.y) / 2 }; const o = rot(O, Mm, Math.PI * e); poly(g, [P(o), P(U), P(W)], alpha(C.violet, .35), C.violet, 1.6, t < 1 ? [5, 3] : null); });
      d.line(P(Lp).x, P(Lp).y, P(Rp).x, P(Rp).y, C.cyan, 3); d.line(P(Tp).x, P(Tp).y, P(Bp).x, P(Bp).y, C.pink, 3);
      rightMark(g, P(O), P(Rp), P(Tp), 10, C.muted);
      d.text(`d₁ = ${d1}`, (P(Lp).x + P(O).x) / 2, P(O).y + 15, { font: sf, color: C.cyan, align: "center", base: "middle" });
      d.text(`d₂ = ${d2}`, P(O).x + 8, (P(O).y + P(Bp).y) / 2, { font: sf, color: C.pink, align: "left", base: "middle" });
      d.text(`A = ${num(A)}`, (P(Lp).x + P(O).x) / 2, (P(O).y + P(Tp).y) / 2 - 2, { font: lf, color: C.amber, align: "center", base: "middle" });
      k.setRO(`<div><h2>${title}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(formula)}</div></div><div class="ro-rows">${rows}</div>${lm}
        <p class="narr">Any convex quadrilateral with perpendicular diagonals has area ½d₁d₂. Grid squares are 1 unit.</p>`);
      return;
    }
    // ---- draw the base-height shapes ----
    let x0 = Math.min(...ext.map(p => p.x)), x1 = Math.max(...ext.map(p => p.x));
    if (mode === "para" && piece) x1 = Math.max(x1, b + Math.max(sh, 0));
    const V = fit(c, x0, x1, 0, h, { l: 34, r: 34, t: top + 34, b: 40 });
    unitGrid(c, V, C, alpha);
    const P = p => V.P(p);
    // base line extension when the height falls outside
    d.line(V.X(Math.min(x0, 0)) - 10, V.Y(0), V.X(Math.max(x1, b)) + 10, V.Y(0), alpha(C.cyan, .35), 1.2, [5, 5]);
    if (target) poly(g, target.map(P), null, alpha(C.amber, .9), 1.8, [6, 4]);
    if (mode === "para") {
      poly(g, pts.map(P), alpha(C.cyan, .14), C.text, 2.2);
      if (pieceMoved) { if (t > 0) poly(g, piece.map(P), null, alpha(C.violet, .5), 1.2, [3, 3]); poly(g, pieceMoved.map(P), alpha(C.violet, .35), C.violet, 2); }
    } else {
      if (t > 0) poly(g, pieceMoved.map(P), alpha(C.violet, .28), C.violet, 2, t < 1 ? [6, 4] : null);
      poly(g, pts.map(P), alpha(C.cyan, .16), C.text, 2.2);
    }
    // base (cyan) and height (pink)
    const b0 = P(base[0]), b1 = P(base[1]);
    d.line(b0.x, b0.y, b1.x, b1.y, C.cyan, 3.4);
    const hx = hgt.x, ht = P({ x: hx, y: h }), hb = P({ x: hx, y: 0 });
    d.line(ht.x, ht.y, hb.x, hb.y, C.pink, 2.6, [6, 4]);
    rightMark(g, hb, { x: hb.x + (hx < b / 2 || hx > b ? -1 : 1) * 10, y: hb.y }, ht, 9, C.pink);
    const hRight = hx > b || ht.x < 64 || mode === "trap";
    d.text(`h = ${h}`, ht.x + (hRight ? 8 : -8), mode === "trap" ? ht.y * .7 + hb.y * .3 : (ht.y + hb.y) / 2, { font: sf, color: C.pink, align: hRight ? "left" : "right", base: "middle" });
    d.text(mode === "trap" ? `b₁ = ${b}` : `b = ${b}`, (b0.x + b1.x) / 2, b0.y + 18, { font: sf, color: C.cyan, align: "center", base: "middle" });
    if (mode === "trap") { const u0 = P({ x: sh, y: h }), u1 = P({ x: sh + b2, y: h }); d.line(u0.x, u0.y, u1.x, u1.y, C.cyan, 3.4); d.text(`b₂ = ${b2}`, (u0.x + u1.x) / 2, u0.y - 14, { font: sf, color: C.cyan, align: "center", base: "middle" }); }
    const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
    let ax = V.X(cx); const hpx = V.X(hx); if (Math.abs(ax - hpx) < 42) ax = hpx + (ax >= hpx ? 42 : -42);   // keep the area label off the height line
    d.text(`A = ${num(A)}`, ax, V.Y(mode === "para" ? h / 2 : h / 3), { font: lf, color: C.amber, align: "center", base: "middle" });
    k.setRO(`<div><h2>${title}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(formula)}</div></div><div class="ro-rows">${rows}</div>${lm}
      <p class="narr">Move the shear slider: the shape leans, base and height stay, so the area stays ${num(A)}. Grid squares are 1 unit.</p>`);
  });
};

/* ===================== g-circle-measure ===================== */
L["g-circle-measure"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "pi", n = 6, circ = false, th = 135, r = 12, pn = 6, ps = 8, geo = null;
  const modesEl = k.modes([["pi", "π from polygons"], ["sector", "Arc & sector"], ["poly", "Regular polygon"]], mode, m => { mode = m; show(); });
  const sN = k.slider(`<span class="c4"><i>n</i></span>`, 3, 96, 1, n, v => { n = v; });
  const cC = k.check("Circumscribed too", circ, v => { circ = v; });
  const sT = k.slider(`<span class="c1"><i>θ</i></span>`, 1, 360, 1, th, v => { th = v; }, v => v + "°");
  const sR = k.slider(`<span class="c2"><i>r</i></span>`, 1, 12, 1, r, v => { r = v; });
  const sPN = k.slider(`<span class="c4"><i>n</i></span>`, 3, 12, 1, pn, v => { pn = v; });
  const sPS = k.slider("side", 1, 10, 1, ps, v => { ps = v; });
  function show(){ showEl(sN.el, mode === "pi"); showEl(cC, mode === "pi"); showEl(sT.el, mode === "sector"); showEl(sR.el, mode === "sector"); showEl(sPN.el, mode === "poly"); showEl(sPS.el, mode === "poly"); }
  show();
  const dragging = drag(c, p => { if (mode !== "sector" || !geo) return null; const e = { x: geo.cx + geo.R * Math.cos(-th * RAD), y: geo.cy + geo.R * Math.sin(-th * RAD) }; return Math.hypot(p.x - e.x, p.y - e.y) <= 20 ? 0 : null; },
    (i, p) => { let a = Math.atan2(-(p.y - geo.cy), p.x - geo.cx) / RAD; if (a <= 0) a += 360; let v = Math.round(a); if (th > 300 && v < 60) v = 360; if (th < 60 && v > 300) v = 1; th = clamp(v, 1, 360); sT.set(th); });
  void dragging;
  const lf = `600 14px ${F.math}`, sf = `600 12px ${F.sans}`, mono = `12px ${F.mono}`;
  const ngon = (cx, cy, R, m, a0 = Math.PI / 2) => Array.from({ length: m }, (_, i) => ({ x: cx + R * Math.cos(a0 + 2 * Math.PI * i / m), y: cy - R * Math.sin(a0 + 2 * Math.PI * i / m) }));
  k.loop(() => {
    c.begin(); SW = c.w; const top = topBelow(modesEl, 8);
    const avW = c.w - 40, avH = c.h - top - 50;
    const cx = c.w / 2, cy = top + 20 + avH / 2, R = Math.max(30, Math.min(avW, avH) / 2 - 18);
    geo = { cx, cy, R };
    if (mode === "pi") {
      const ins = ngon(cx, cy, R, n), apo = R * Math.cos(Math.PI / n);
      if (circ) poly(g, ngon(cx, cy, R / Math.cos(Math.PI / n), n), alpha(C.violet, .05), alpha(C.violet, .7), 1.4, [5, 4]);
      d.circle(cx, cy, R, null, C.cyan, 2);
      poly(g, ins, alpha(C.violet, .12), C.violet, 2);
      if (n <= 24) ins.forEach(p => d.line(cx, cy, p.x, p.y, alpha(C.violet, .35), 1));
      // one triangle with its apothem
      const p0 = ins[0], p1 = ins[1], mid = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
      poly(g, [{ x: cx, y: cy }, p0, p1], alpha(C.amber, .22), C.amber, 1.6);
      d.line(cx, cy, mid.x, mid.y, C.green, 2, [4, 3]);
      d.line(cx, cy, cx + R * Math.cos(-.35), cy + R * Math.sin(-.35) * -1, C.cyan, 2.2);
      d.text("r", cx + R * .55 * Math.cos(-.35) + 6, cy - R * .55 * Math.sin(-.35) + 12, { font: `italic 600 15px ${F.math}`, color: C.cyan, align: "center", base: "middle" });
      d.circle(cx, cy, 3.5, C.text);
      const pd = n * Math.sin(Math.PI / n), ar = n / 2 * Math.sin(2 * Math.PI / n), cd = n * Math.tan(Math.PI / n);
      let lm;
      if (n === 96) lm = `<div class="landmark hit"><div class="big">Archimedes' 96-gons</div><div class="note">Inscribed and circumscribed 96-gons trap π between ${pd.toFixed(5)} and ${cd.toFixed(5)}. Archimedes, computing by hand with rational bounds for √3, proved 3 10/71 &lt; π &lt; 3 1/7.</div></div>`;
      else if (n === 6) lm = `<div class="landmark hit"><div class="big">hexagon: perimeter ÷ diameter = 3</div><div class="note">Each side of a regular hexagon equals the radius (six equilateral triangles), so P = 6r = 3d. The circle bulges outside, so π &gt; 3.</div></div>`;
      else if (n === 4) lm = `<div class="landmark hit"><div class="big">square: ${M("<i>P</i>/<i>d</i> = 2√2 ≈ 2.828")}</div><div class="note">The side is the hypotenuse of a 45°-45°-90° triangle with legs r, so it is r√2, and the area is 2r².</div></div>`;
      else lm = `<div class="landmark"><div class="big">${M("<i>P</i>/<i>d</i>")} and ${M("<i>A</i>/<i>r</i><sup>2</sup>")} climb toward π</div><div class="note">Area of the polygon = ½ × apothem (green) × perimeter. As n grows, the apothem approaches r and the perimeter approaches C, so ½aP approaches ½rC = πr².</div></div>`;
      k.setRO(`<div><h2>Inscribed regular ${n}-gon</h2><div class="ro-big" style="margin-top:8px">${M(`<i>P</i>/<i>d</i> = `)}<span class="num c1">${pd.toFixed(5)}</span></div></div>
        <div class="ro-rows">
          <div class="row">${M(`<i>P</i>/<i>d</i> = <i>n</i> sin(180°/<i>n</i>) = ${pd.toFixed(5)}`)}<span class="lbl">perimeter ÷ diameter</span></div>
          <div class="row">${M(`<i>A</i>/<i>r</i><sup>2</sup> = ½<i>n</i> sin(360°/<i>n</i>) = ${ar.toFixed(5)}`)}<span class="lbl">polygon area ÷ r²</span></div>
          ${circ ? `<div class="row">${M(`<i>P</i>/<i>d</i> = <i>n</i> tan(180°/<i>n</i>) = ${cd.toFixed(5)}`)}<span class="lbl">circumscribed (upper bound)</span></div>` : ""}
          <div class="row">${M(`π = ${Math.PI.toFixed(5)}…`)}<span class="lbl">gap ${(Math.PI - pd).toFixed(5)}</span></div>
        </div>${lm}<p class="narr">Slide n up to 96. Tick “Circumscribed too” to squeeze π from above.</p>`);
    } else if (mode === "sector") {
      const a1 = -th * RAD;
      d.circle(cx, cy, R, alpha(C.cyan, .04), alpha(C.text, .25), 1.2);
      g.save(); g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, R, 0, a1, true); g.closePath(); g.fillStyle = alpha(C.amber, .22); g.fill(); g.restore();
      g.save(); g.strokeStyle = C.pink; g.lineWidth = 4.5; g.beginPath(); g.arc(cx, cy, R, 0, a1, true); g.stroke(); g.restore();
      const e = { x: cx + R * Math.cos(a1), y: cy + R * Math.sin(a1) };
      d.line(cx, cy, cx + R, cy, C.cyan, 2.6); if (th < 360) d.line(cx, cy, e.x, e.y, C.cyan, 2.6);
      g.save(); g.strokeStyle = C.amber; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, 22, 0, a1, true); g.stroke(); g.restore();
      const mA = -th / 2 * RAD;
      d.text(`${th}°`, cx + 40 * Math.cos(mA), cy + 40 * Math.sin(mA), { font: `600 13px ${F.math}`, color: C.amber, align: "center", base: "middle" });
      d.text(`r = ${r}`, cx + R / 2, cy + 14, { font: sf, color: C.cyan, align: "center", base: "middle" });
      d.text("s", cx + (R + 16) * Math.cos(mA), cy + (R + 16) * Math.sin(mA), { font: `italic 600 16px ${F.math}`, color: C.pink, align: "center", base: "middle" });
      d.circle(cx, cy, 3.5, C.text); d.circle(e.x, e.y, 8, C.pink, C.ink, 2.5);
      const fr = Q(th, 360), sQ = Q(th * r, 180), aQ = Q(th * r * r, 360), radQ = Q(th, 180);
      const s = th * r * Math.PI / 180, A = th * r * r * Math.PI / 360;
      const sP = qpi(sQ), aP = qpi(aQ), rP = qpi(radQ);
      const special = { 360: "the whole circle", 180: "a semicircle", 90: "a quarter circle", 270: "three quarters of the circle", 60: "one sixth: the chord is a side of the inscribed hexagon" }[th];
      const lm = special ? `<div class="landmark hit"><div class="big">${th}° is ${special}</div><div class="note">The fraction ${qt(fr)} of the circle: arc ${sP.t} of the circumference ${qpi(Q(2 * r)).t}, sector ${aP.t} of the area ${qpi(Q(r * r)).t}.</div></div>`
        : th === 57 ? `<div class="landmark hit"><div class="big">about one radian</div><div class="note">When the arc is as long as the radius, s/r = 1: that angle is 1 radian = 180°/π ≈ 57.3°.</div></div>`
        : `<div class="landmark"><div class="big">same fraction, ${qt(fr)}, for both</div><div class="note">The central angle takes ${th}/360 of the circle, so the arc is that fraction of 2πr and the sector that fraction of πr². Drag the pink point or the θ slider.</div></div>`;
      k.setRO(`<div><h2>Sector, ${th}° of radius ${r}</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c3"><i>s</i></span> = ${sP.h} ≈ `)}<span class="num c3">${f2(s)}</span></div></div>
        <div class="ro-rows">
          <div class="row">${M(`${FR(th + "°", "360°")} = ${qh(fr)}`)}<span class="lbl">fraction of the circle</span></div>
          <div class="row">${M(`<span class="c3"><i>s</i></span> = ${qh(fr)} · 2π(${r}) = ${sP.h}`)}<span class="lbl">arc length ≈ ${f2(s)}</span></div>
          <div class="row">${M(`<span class="c1"><i>A</i></span> = ${qh(fr)} · π(${r})<sup>2</sup> = ${aP.h}`)}<span class="lbl">sector area ≈ ${f2(A)}</span></div>
          <div class="row">${M(`<span class="c3"><i>s</i></span>/<span class="c2"><i>r</i></span> = ${rP.h} rad`)}<span class="lbl">radian measure ≈ ${f2(th * RAD)}</span></div>
        </div>${lm}<p class="narr">Arc measure (${th}°) is an angle; arc length (${f2(s)}) is a distance and grows with r.</p>`);
    } else {
      const m = pn, half = Math.PI / m, Rr = R, sc = Rr * 2 * Math.sin(half) / ps;   // px per unit
      const rot0 = Math.PI / 2 + (m % 2 ? 0 : half);
      const V = ngon(cx, cy + (m === 3 ? Rr * .18 : 0), Rr, m, rot0), O = { x: cx, y: cy + (m === 3 ? Rr * .18 : 0) };
      g.save(); g.setLineDash([4, 4]); d.circle(O.x, O.y, Rr, null, alpha(C.cyan, .45), 1.2); g.restore();
      V.forEach(p => d.line(O.x, O.y, p.x, p.y, alpha(C.violet, .3), 1));
      poly(g, V, alpha(C.violet, .12), C.violet, 2.4);
      // highlight the right triangle O, midpoint, vertex (bottom side)
      let bi = 0; V.forEach((p, i) => { const q = V[(i + 1) % m]; if ((p.y + q.y) > (V[bi].y + V[(bi + 1) % m].y)) bi = i; });
      const p0 = V[bi], p1 = V[(bi + 1) % m], mid = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
      poly(g, [O, p0, p1], alpha(C.amber, .2), C.amber, 1.6);
      poly(g, [O, mid, p1], alpha(C.amber, .25), null);
      d.line(O.x, O.y, mid.x, mid.y, C.green, 2.6); d.line(O.x, O.y, p1.x, p1.y, C.cyan, 2.6);
      rightMark(g, mid, O, p1, 8, C.green);
      d.text("a", (O.x + mid.x) / 2 - 9, (O.y + mid.y) / 2, { font: `italic 600 15px ${F.math}`, color: C.green, align: "center", base: "middle" });
      d.text("r", (O.x + p1.x) / 2 + 9, (O.y + p1.y) / 2 - 6, { font: `italic 600 15px ${F.math}`, color: C.cyan, align: "center", base: "middle" });
      d.text(`${ps}`, mid.x, mid.y + 16, { font: sf, color: C.violet, align: "center", base: "middle" });
      d.circle(O.x, O.y, 3.5, C.text); void sc;
      const ap = ps / (2 * Math.tan(half)), P = m * ps, A = ap * P / 2;
      let apE = null, AE = null;
      if (m === 3) { apE = rq(Q(ps, 6), 3); AE = rq(Q(ps * ps, 4), 3); }
      if (m === 4) { apE = rq(Q(ps, 2), 1); AE = rq(Q(ps * ps), 1); }
      if (m === 6) { apE = rq(Q(ps, 2), 3); AE = rq(Q(3 * ps * ps, 2), 3); }
      const ctr = 360 / m;
      const lm = apE ? `<div class="landmark hit"><div class="big">${M(`<i>a</i> = ${apE.h}, &nbsp;<i>A</i> = ${AE.h}`)}</div><div class="note">${m === 4 ? "The highlighted triangle is 45°-45°-90°: the apothem is half the side." : m === 6 ? "The highlighted triangle is 30°-60°-90° with short leg s/2 = " + num(ps / 2) + ", so the apothem is (s/2)√3." : "The highlighted triangle is 30°-60°-90° with long leg s/2 = " + num(ps / 2) + ", so the apothem is (s/2)/√3 = s√3/6."} Special right triangles give the exact area.</div></div>`
        : `<div class="landmark"><div class="big">${M(`<i>A</i> = ½<i>aP</i>`)}</div><div class="note">The polygon is ${m} congruent isosceles triangles with base s = ${ps} and height a. The apothem bisects one, making a right triangle with a ${num(ctr / 2)}° angle at the centre, so a = (s/2) ÷ tan ${num(ctr / 2)}°.</div></div>`;
      k.setRO(`<div><h2>Regular ${m}-gon, side ${ps}</h2><div class="ro-big" style="margin-top:8px">${M("<i>A</i> ≈ ")}<span class="num c1">${f2(A)}</span></div></div>
        <div class="ro-rows">
          <div class="row">${M(`central angle 360°/${m} = ${num(ctr)}°`)}<span class="lbl">half of it: ${num(ctr / 2)}°</span></div>
          <div class="row">${M(`<span style="color:var(--green)"><i>a</i></span> = ${FR(num(ps / 2), `tan ${num(ctr / 2)}°`)} ≈ ${f2(ap)}`)}<span class="lbl">apothem</span></div>
          <div class="row">${M(`<i>P</i> = ${m} · ${ps} = ${P}`)}<span class="lbl">perimeter</span></div>
          <div class="row">${M(`<span class="c1"><i>A</i></span> = ½ · ${f2(ap)} · ${P} ≈ ${f2(A)}`)}<span class="lbl">½ × apothem × perimeter</span></div>
        </div>${lm}<p class="narr">The circumscribed circle (dashed) has radius r ≈ ${f2(ps / (2 * Math.sin(half)))}. Try n = 3, 4 and 6 for exact answers.</p>`);
    }
  });
};
})();
