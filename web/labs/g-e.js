/* ============ Labs: Geometry E (similarity, similar triangles, proportionality, geometric mean, Pythagorean Theorem) ============ */
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
const f1 = v => { const s = (Math.round(v * 10) / 10).toFixed(1); return s === "-0.0" ? "0.0" : s.replace("-", "−"); };
const f2 = v => { const s = (Math.round(v * 100) / 100).toFixed(2); return s === "-0.00" ? "0.00" : s.replace("-", "−"); };
const fd = v => { const r = Math.round(v * 100) / 100; return String(r).replace("-", "−"); };   // up to 2 decimals, trailing zeros dropped
const RAD = Math.PI / 180;
function sqf(n){ let a = 1, b = n; for (let f = 2; f * f <= b; f++) while (b % (f * f) === 0) { b /= f * f; a *= f; } return [a, b]; }
// simpler, safe formatting: a√b / d
// a√b/d form of √n / d (n ≥ 0 integer, d > 0 integer), as HTML
function radH(n, d = 1){ if (n === 0) return "0"; const [a, b] = sqf(n); const co = Q(a, d); if (b === 1) return qh(co); const num = (co.n === 1 ? "" : co.n) + "√" + b; return co.d === 1 ? num : FR(num, co.d); }
const wrapOf = el => el.closest(".ctl") || el;
const showEl = (el, on) => { wrapOf(el).style.display = on ? "" : "none"; };
const LR = `<span style="font-family:var(--sans)">↔</span>`;

function drag(c, pick, move, end){
  let cur = null;
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e); const h = pick(p); if (h == null) return; cur = h; try { c.cv.setPointerCapture(e.pointerId); } catch (_) {} e.preventDefault(); move(cur, p); });
  c.cv.addEventListener("pointermove", e => { const p = c.xy(e); if (cur == null) { c.cv.style.cursor = pick(p) != null ? "grab" : "default"; return; } c.cv.style.cursor = "grabbing"; move(cur, p); });
  const up = () => { if (cur != null && end) end(cur); cur = null; c.cv.style.cursor = "default"; };
  c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  c.cv.style.touchAction = "none";
  return () => cur != null;
}
const nearest = (p, list, r = 18) => { let best = null, bd = r; list.forEach((q, i) => { if (!q) return; const dd = Math.hypot(p.x - q.x, p.y - q.y); if (dd <= bd) { bd = dd; best = i; } }); return best; };
function poly(g, pts, fill, stroke, lw = 2, dash){ g.save(); g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.lineJoin = "round"; if (dash) g.setLineDash(dash); g.stroke(); } g.restore(); }
function unitv(P, V){ const dx = P.x - V.x, dy = P.y - V.y, l = Math.hypot(dx, dy) || 1; return { x: dx / l, y: dy / l }; }
function arcAng(g, V, P, R_, r, color, lw = 2, n = 1){
  const a1 = Math.atan2(P.y - V.y, P.x - V.x); let dl = Math.atan2(R_.y - V.y, R_.x - V.x) - a1;
  while (dl > Math.PI) dl -= 2 * Math.PI; while (dl <= -Math.PI) dl += 2 * Math.PI;
  g.save(); g.strokeStyle = color; g.lineWidth = lw; for (let i = 0; i < n; i++) { g.beginPath(); g.arc(V.x, V.y, r + i * 4.5, a1, a1 + dl, dl < 0); g.stroke(); } g.restore();
  return a1 + dl / 2;
}
function rightMark(g, V, P, R_, s, color){ const u = unitv(P, V), w = unitv(R_, V); g.save(); g.strokeStyle = color; g.lineWidth = 1.6; g.beginPath(); g.moveTo(V.x + u.x * s, V.y + u.y * s); g.lineTo(V.x + (u.x + w.x) * s, V.y + (u.y + w.y) * s); g.lineTo(V.x + w.x * s, V.y + w.y * s); g.stroke(); g.restore(); }
function labAway(d, s, P, from, color, font, dist = 15){ const u = unitv(P, from); d.text(s, P.x + u.x * dist, P.y + u.y * dist, { font, color, align: "center", base: "middle" }); }
// label at the middle of a segment, pushed away from point 'from'
function labSide(d, s, P, R_, from, color, font, dist = 14){ const m = { x: (P.x + R_.x) / 2, y: (P.y + R_.y) / 2 }; const u = unitv(R_, P); let nx = -u.y, ny = u.x; if ((from.x - m.x) * nx + (from.y - m.y) * ny > 0) { nx = -nx; ny = -ny; } const tw = d.width(s, font); const o = dist * .6 + Math.abs(nx) * tw / 2 + Math.abs(ny) * 6; d.text(s, m.x + nx * o, m.y + ny * o, { font, color, align: "center", base: "middle" }); }
const cen = pts => ({ x: pts.reduce((s, p) => s + p.x, 0) / pts.length, y: pts.reduce((s, p) => s + p.y, 0) / pts.length });
const topBelow = (el, extra = 10) => (el ? el.offsetTop + el.offsetHeight + extra : 16);
const dist = (P, R_) => Math.hypot(P.x - R_.x, P.y - R_.y);
const angAt = (V, P, R_) => { const ax = P.x - V.x, ay = P.y - V.y, bx = R_.x - V.x, by = R_.y - V.y, l = Math.hypot(ax, ay) * Math.hypot(bx, by); return l ? Math.acos(clamp((ax * bx + ay * by) / l, -1, 1)) / RAD : NaN; };
const cross = (O, A, B) => (A.x - O.x) * (B.y - O.y) - (A.y - O.y) * (B.x - O.x);
// world (y up) -> pixel fit of a set of points into a box
function fitBox(pts, box){
  const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const W = Math.max(10, box.r - box.l), H = Math.max(10, box.b - box.t);
  const s = Math.min(W / Math.max(1e-6, x1 - x0), H / Math.max(1e-6, y1 - y0));
  const ox = box.l + (W - s * (x1 - x0)) / 2 - s * x0, oy = box.t + (H - s * (y1 - y0)) / 2 + s * y1;
  return { s, X: p => ({ x: ox + s * p.x, y: oy - s * p.y }), inv: (px, py) => ({ x: (px - ox) / s, y: (oy - py) / s }) };
}
function segsCross(a, b, c_, d_){ const d1 = cross(a, b, c_), d2 = cross(a, b, d_), d3 = cross(c_, d_, a), d4 = cross(c_, d_, b); return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0)); }
function simplePoly(P){ const n = P.length; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { if (Math.abs(i - j) <= 1 || (i === 0 && j === n - 1)) continue; if (segsCross(P[i], P[(i + 1) % n], P[j], P[(j + 1) % n])) return false; }
  for (let i = 0; i < n; i++) { if (dist(P[i], P[(i + 1) % n]) < 1e-9) return false; if (Math.abs(cross(P[(i + n - 1) % n], P[i], P[(i + 1) % n])) < 1e-9) return false; } return true; }
const areaOf = P => P.reduce((s, p, i) => { const q = P[(i + 1) % P.length]; return s + p.x * q.y - q.x * p.y; }, 0) / 2;
// interior angles of a simple polygon (degrees)
function interior(P){ const n = P.length, o = Math.sign(areaOf(P)) || 1; return P.map((p, i) => { const a = P[(i + n - 1) % n], b = P[(i + 1) % n]; const t = angAt(p, a, b); return o * cross(a, p, b) >= 0 ? t : 360 - t; }); }
const NAMES = "ABCDEFGH";

/* ===================== g-similarity ===================== */
L["g-similarity"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const PRE = { quad: [[0, 0], [4, 0], [5, 3], [1, 4]], rect: [[0, 0], [4, 0], [4, 2], [0, 2]], pent: [[0, 0], [4, 0], [5, 2], [2, 4], [-1, 2]], tri: [[0, 0], [4, 0], [1, 3]] };
  const KS = [[1, 3], [1, 2], [2, 3], [3, 4], [1, 1], [5, 4], [3, 2], [2, 1], [5, 2], [3, 1]];
  let shape = "quad", pts = PRE.quad.map(([x, y]) => ({ x, y })), ki = 6, stretch = false, sv = 1.5, fitO = null, R = null;
  k.select("Shape", [["quad", "Quadrilateral"], ["rect", "Rectangle"], ["pent", "Pentagon"], ["tri", "Triangle"]], shape, v => { shape = v; pts = PRE[v].map(([x, y]) => ({ x, y })); R = null; });
  const sk = k.slider(`<span class="c1"><i>k</i></span>`, 0, KS.length - 1, 1, ki, v => ki = v, v => KS[v][1] === 1 ? String(KS[v][0]) : KS[v][0] + "/" + KS[v][1]);
  const cs = k.check("Stretch the copy sideways", stretch, v => { stretch = v; showEl(ss.el, v); });
  const ss = k.slider(`stretch <i>s</i>`, 1.25, 2.5, .25, sv, v => sv = v, v => "× " + v);
  showEl(ss.el, false); void cs;
  k.hint("Drag the cyan vertices");
  const dragging = drag(c, p => fitO ? nearest(p, pts.map(fitO.X)) : null, (i, p) => {
    const v = fitO.inv(p.x, p.y); const nx = clamp(Math.round(v.x), -2, 8), ny = clamp(Math.round(v.y), -1, 7);
    const trial = pts.map((q, j) => j === i ? { x: nx, y: ny } : q); if (simplePoly(trial)) pts = trial; });
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const [kn, kd] = KS[ki], kk = kn / kd, sx = stretch ? sv : 1;
    const n = pts.length, cO = cen(pts);
    const wide = w > h * 1.05;
    // image (relative to the original's centroid), placed beside or below
    const rel = pts.map(p => ({ x: (p.x - cO.x) * kk * sx, y: (p.y - cO.y) * kk }));
    const ox0 = Math.min(...pts.map(p => p.x)), ox1 = Math.max(...pts.map(p => p.x)), oy0 = Math.min(...pts.map(p => p.y)), oy1 = Math.max(...pts.map(p => p.y));
    const rx0 = Math.min(...rel.map(p => p.x)), rx1 = Math.max(...rel.map(p => p.x)), ry0 = Math.min(...rel.map(p => p.y)), ry1 = Math.max(...rel.map(p => p.y));
    const gap = 1.6;
    const off = wide ? { x: ox1 + gap - rx0, y: (oy0 + oy1) / 2 - (ry0 + ry1) / 2 } : { x: (ox0 + ox1) / 2 - (rx0 + rx1) / 2, y: oy0 - gap - ry1 };
    const img = rel.map(p => ({ x: p.x + off.x, y: p.y + off.y }));
    const F0 = fitBox(dragging() && R ? R : pts.concat(img), { l: 30, t: 22 + 18 * Math.max(1, kk) + 8, r: w - 44, b: h - 34 }); fitO = F0; if (!dragging()) R = pts.concat(img);
    const X = F0.X, lf = `italic 600 15px ${F.math}`, sf = `600 12px ${F.mono}`;
    // faint integer grid under the original
    g.save(); g.strokeStyle = alpha(C.line2, .35); g.lineWidth = 1; g.beginPath();
    for (let x = -2; x <= 8; x++) { const a = X({ x, y: -1 }), b = X({ x, y: 7 }); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); }
    for (let y = -1; y <= 7; y++) { const a = X({ x: -2, y }), b = X({ x: 8, y }); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); }
    g.stroke(); g.restore();
    const A = pts.map(X), B = img.map(X), cA = cen(A), cB = cen(B);
    poly(g, A, alpha(C.cyan, .14), C.cyan, 2.5); poly(g, B, alpha(C.pink, .14), C.pink, 2.5);
    const angO = interior(pts), angI = interior(img);
    for (let i = 0; i < n; i++) {
      const a = A[(i + n - 1) % n], b = A[(i + 1) % n];
      const okA = Math.abs(angO[i] - angI[i]) < .05;
      if (Math.abs(angO[i] - 90) < .05) rightMark(g, A[i], a, b, 9, alpha(C.text, .6)); 
      if (Math.abs(angI[i] - 90) < .05) rightMark(g, B[i], B[(i + n - 1) % n], B[(i + 1) % n], 9, okA ? alpha(C.text, .6) : C.red);
      labAway(d, NAMES[i], A[i], cA, C.cyan, lf, 15); labAway(d, NAMES[i] + "′", B[i], cB, C.pink, lf, 16);
      d.circle(A[i].x, A[i].y, 6.5, C.cyan, C.ink, 2); d.circle(B[i].x, B[i].y, 3.5, C.pink);
    }
    // side ratios
    const ratios = [];
    for (let i = 0; i < n; i++) { const j = (i + 1) % n; ratios.push(dist(img[i], img[j]) / dist(pts[i], pts[j])); }
    const allEq = ratios.every(r => Math.abs(r - ratios[0]) < 1e-9), angEq = angO.every((a, i) => Math.abs(a - angI[i]) < .05);
    for (let i = 0; i < n; i++) { const j = (i + 1) % n; labSide(d, f2(ratios[i]), B[i], B[j], cB, allEq ? C.amber : C.red, sf, 13); }
    // area-ratio inset: unit square vs k × k square
    const u0 = 18, ix = w - 16 - u0 * Math.max(1, kk * sx), iy = 16 + u0 * Math.max(1, kk);
    d.rect(ix, iy - u0 * kk, u0 * kk * sx, u0 * kk, alpha(C.violet, .28), C.violet, 1.5);
    d.rect(ix, iy - u0, u0, u0, alpha(C.cyan, .35), C.cyan, 1.5);
    d.text("area × " + (stretch ? f2(kk * kk * sx) : (kn * kn) + (kd > 1 ? "/" + kd * kd : "")), ix - 6, iy - 4, { font: `600 11px ${F.mono}`, color: C.violet, align: "right" });
    // readout
    const kH = qh(Q(kn, kd));
    const sn = i => NAMES[i] + NAMES[(i + 1) % n];
    const lens = pts.map((_, i) => { const j = (i + 1) % n; return `<i>${sn(i)}</i> = ${radH((pts[i].x - pts[j].x) ** 2 + (pts[i].y - pts[j].y) ** 2)}`; }).join(", ");
    const sideRows = pts.map((_, i) => { const j = (i + 1) % n; return `<div class="row">${M(`<span class="c3"><i>${NAMES[i]}</i>′<i>${NAMES[j]}</i>′</span> / <span class="c2"><i>${sn(i)}</i></span> = <span class="${allEq ? "c1" : ""}">${allEq ? kH : f2(ratios[i])}</span>`)}<span class="lbl">${M(`<i>${sn(i)}</i> = ${radH((pts[i].x - pts[j].x) ** 2 + (pts[i].y - pts[j].y) ** 2)}`)}</span></div>`; });
    void lens;
    const angRow = `<div class="row">${M(angEq ? "every ∠<i>X</i>′ = ∠<i>X</i>" : pts.map((_, i) => `∠<i>${NAMES[i]}</i>′ ${Math.abs(angO[i] - angI[i]) < .05 ? "=" : "≠"} ∠<i>${NAMES[i]}</i>`).join(", "))}<span class="lbl">original ${angO.map(f1).join("°, ")}°${angEq ? "" : "; copy " + angI.map(f1).join("°, ") + "°"}</span></div>`;
    const PO = pts.reduce((s, p, i) => s + dist(p, pts[(i + 1) % n]), 0), PI = img.reduce((s, p, i) => s + dist(p, img[(i + 1) % n]), 0);
    const AO = Math.abs(areaOf(pts)), AI = Math.abs(areaOf(img));
    const per = `<div class="row">${M(`<i>P</i>′/<i>P</i> = ${allEq ? `<span class="c1">${kH}</span>` : f2(PI / PO)}`)}<span class="lbl">perimeter ratio</span></div>`;
    const are = `<div class="row">${M(`area′/area = ${allEq ? `<span class="c4">${qh(Q(kn * kn, kd * kd))}</span>` : f2(AI / AO)}`)}<span class="lbl">area ${fd(AO)} → ${fd(AI)}${allEq ? ", ratio k²" : ""}</span></div>`;
    let lm;
    if (allEq && angEq) lm = kn === kd ? `<div class="landmark hit"><div class="big">k = 1: congruent</div><div class="note">Congruence is the special case of similarity with scale factor 1.</div></div>`
      : `<div class="landmark"><div class="big">${M(`${pts.map((_, i) => NAMES[i]).join("")} ∼ ${pts.map((_, i) => NAMES[i] + "′").join("")}`)}</div><div class="note">Every angle is kept and every side is multiplied by ${M(`<span class="c1"><i>k</i> = ${kH}</span>`)}, so the perimeter scales by ${kH} and the area by ${qh(Q(kn * kn, kd * kd))}.</div></div>`;
    else if (angEq) lm = `<div class="landmark hit"><div class="big">equal angles, not similar</div><div class="note">Every angle still matches, but the side ratios (red) differ. For polygons with four or more sides, congruent angles do not make the figures similar.</div></div>`;
    else lm = `<div class="landmark hit"><div class="big">not similar</div><div class="note">Stretching in one direction changes both the side ratios and the angles. Only a uniform scale factor keeps the shape.</div></div>`;
    k.setRO(`<div><h2>Scale factor</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(`<i>k</i> = <span class="num c1">${kH}</span>`)}${stretch ? ` <span style="font-size:15px;color:var(--faint)">width × ${sv} more</span>` : ""}</div></div>
      <div class="ro-rows">${sideRows.join("")}${angRow}${per}${are}</div>${lm}
      <p class="narr">${stretch ? "Untick the stretch box to make the copy similar again." : shape === "rect" ? "Tick the stretch box: the rectangle keeps its four right angles but stops being similar." : "Drag a vertex: the copy follows, and the ratios stay equal to k."}</p>`);
  });
};

/* ===================== g-similar-triangles ===================== */
L["g-similar-triangles"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  // reference triangle per mode, and the three controls for DEF: [key, label, min, max, step, start, matchValue]
  const SPEC = {
    AA: { ref: { A: 50, B: 60, c: 4 }, ctl: [["D", "∠<i>D</i>", 10, 150, 1, 45, 50], ["E", "∠<i>E</i>", 10, 150, 1, 60, 60], ["c", "<i>DE</i>", 2, 9, .5, 6, 6]] },
    SSS: { ref: { a: 6, b: 5, c: 4 }, ctl: [["c", "<i>DE</i>", 1, 12, .5, 6, 6], ["a", "<i>EF</i>", 1, 12, .5, 8, 9], ["b", "<i>FD</i>", 1, 12, .5, 7.5, 7.5]] },
    SAS: { ref: { A: 50, c: 4, b: 6 }, ctl: [["c", "<i>DE</i>", 1, 12, .5, 6, 6], ["D", "∠<i>D</i>", 10, 170, 1, 50, 50], ["b", "<i>DF</i>", 1, 12, .5, 8, 9]] },
    MEAS: { ctl: [] }
  };
  let mode = "AA", val = {}, scene = "shadow", ms = { h0: 1.5, s0: 2.0, s1: 14.8, e: 1.6, d1: 2.0, d2: 12 };
  const reset = () => { val = {}; SPEC[mode].ctl.forEach(s => val[s[0]] = s[5]); };
  reset();
  const modesEl = k.modes([["AA", "AA"], ["SSS", "SSS∼"], ["SAS", "SAS∼"], ["MEAS", "Measure"]], mode, m => { mode = m; reset(); setCtl(); });
  const isAng = key => key === "A" || key === "B" || key === "D" || key === "E";
  const sl = [0, 1, 2].map(i => k.slider(`s${i}`, 0, 1, 1, 0, v => { const s = SPEC[mode].ctl[i]; if (s) val[s[0]] = v; }, v => { const s = SPEC[mode].ctl[i]; return s && isAng(s[0]) ? v + "°" : String(v); }));
  const bMatch = k.button("Make similar", () => { SPEC[mode].ctl.forEach((s, i) => { val[s[0]] = s[6]; sl[i].set(s[6]); }); });
  const sc = k.select("Scene", [["shadow", "Shadows"], ["mirror", "Mirror"]], scene, v => { scene = v; setCtl(); });
  const MS = { shadow: [["h0", "pole", .8, 2.5, .1], ["s0", "pole shadow", 1, 4, .1], ["s1", "tree shadow", 2, 24, .2]], mirror: [["e", "eye height", 1.2, 2, .1], ["d1", "eye to mirror", 1, 4, .1], ["d2", "mirror to wall", 3, 24, .2]] };
  const ml = [0, 1, 2].map(i => k.slider(`m${i}`, 0, 1, .1, 0, v => { const s = MS[scene][i]; ms[s[0]] = v; }, v => f1(v) + " m"));
  function setCtl(){
    const meas = mode === "MEAS";
    sl.forEach((s, i) => { const sp = SPEC[mode].ctl[i]; showEl(s.el, !!sp); if (!sp) return; wrapOf(s.el).querySelector("label").innerHTML = isAng(sp[0]) ? `<span class="c2">${sp[1]}</span>` : `<span class="c3">${sp[1]}</span>`; s.el.min = sp[2]; s.el.max = sp[3]; s.el.step = sp[4]; s.set(val[sp[0]]); });
    bMatch.style.display = meas ? "none" : ""; showEl(sc.el, meas);
    ml.forEach((s, i) => { showEl(s.el, meas); if (!meas) return; const sp = MS[scene][i]; wrapOf(s.el).querySelector("label").textContent = sp[1]; s.el.min = sp[2]; s.el.max = sp[3]; s.el.step = sp[4]; s.set(ms[sp[0]]); });
  }
  setCtl();
  // triangle builders: vertices P0 (at origin), P1 on +x axis, P2 above
  const fromAngles = (A, B, cc) => { const Cg = 180 - A - B; if (Cg <= 0) return null; const b = cc * Math.sin(B * RAD) / Math.sin(Cg * RAD); return [{ x: 0, y: 0 }, { x: cc, y: 0 }, { x: b * Math.cos(A * RAD), y: b * Math.sin(A * RAD) }]; };
  const fromSAS = (A, cc, b) => [{ x: 0, y: 0 }, { x: cc, y: 0 }, { x: b * Math.cos(A * RAD), y: b * Math.sin(A * RAD) }];
  const fromSSS = (a, b, cc) => { if (a + b <= cc + 1e-9 || a + cc <= b + 1e-9 || b + cc <= a + 1e-9) return null; const x = (b * b + cc * cc - a * a) / (2 * cc); return [{ x: 0, y: 0 }, { x: cc, y: 0 }, { x, y: Math.sqrt(Math.max(0, b * b - x * x)) }]; };
  const build = (m, v) => m === "AA" ? fromAngles(v.A ?? v.D, v.B ?? v.E, v.c) : m === "SAS" ? fromSAS(v.A ?? v.D, v.c, v.b) : fromSSS(v.a, v.b, v.c);
  const sides = T => [dist(T[1], T[2]), dist(T[2], T[0]), dist(T[0], T[1])];   // opposite vertex 0, 1, 2
  const angs = T => [angAt(T[0], T[1], T[2]), angAt(T[1], T[2], T[0]), angAt(T[2], T[0], T[1])];
  function drawScene(top){
    const { w, h } = c, lf = `italic 600 15px ${F.math}`, sf = `600 12px ${F.mono}`;
    let H, pts, eye, mir, top2;
    if (scene === "shadow") { const { h0, s0, s1 } = ms; H = h0 * s1 / s0; const tx = s0 + Math.max(2, s1 * .15);
      pts = [{ x: 0, y: 0 }, { x: 0, y: h0 }, { x: s0, y: 0 }, { x: tx, y: 0 }, { x: tx, y: H }, { x: tx + s1, y: 0 }];
      const Fz = fitBox(pts.concat([{ x: -.5, y: 0 }]), { l: 56, t: top + 40, r: w - 70, b: h - 40 }), X = Fz.X;
      const P = pts.map(X);
      d.line(X({ x: -.5, y: 0 }).x, P[0].y, w - 10, P[0].y, C.muted, 1.5);
      // sun rays (parallel)
      const ux = s0, uy = -h0, ul = Math.hypot(ux, uy);
      [[pts[1], pts[2]], [pts[4], pts[5]]].forEach(([a, b]) => { const B0 = X(b), T0 = X(a), uu = unitv(T0, B0), A0 = { x: T0.x + uu.x * 36, y: T0.y + uu.y * 36 }; d.line(A0.x, A0.y, B0.x, B0.y, alpha(C.amber, .75), 1.5, [6, 4]); d.arrow(A0.x, A0.y, A0.x - uu.x * 14, A0.y - uu.y * 14, alpha(C.amber, .75), 1.5); });
      poly(g, [P[0], P[1], P[2]], alpha(C.pink, .12), null); poly(g, [P[3], P[4], P[5]], alpha(C.pink, .12), null);
      d.line(P[0].x, P[0].y, P[1].x, P[1].y, C.pink, 4); d.line(P[3].x, P[3].y, P[4].x, P[4].y, C.green, 6);
      d.circle(P[4].x, P[4].y - 9, 9 + Math.min(12, Fz.s * .5), alpha(C.green, .35));
      d.line(P[0].x, P[0].y, P[2].x, P[2].y, C.pink, 3); d.line(P[3].x, P[3].y, P[5].x, P[5].y, C.pink, 3);
      rightMark(g, P[0], P[1], P[2], 8, C.cyan); rightMark(g, P[3], P[4], P[5], 8, C.cyan);
      arcAng(g, P[2], P[0], P[1], 16, C.cyan, 2); arcAng(g, P[5], P[3], P[4], 16, C.cyan, 2);
      d.text(f1(ms.h0) + " m", P[1].x - 6, (P[0].y + P[1].y) / 2, { font: sf, color: C.pink, align: "right", base: "middle" });
      d.text(f1(ms.s0), (P[0].x + P[2].x) / 2, P[0].y + 15, { font: sf, color: C.pink, align: "center", base: "middle" });
      d.text(f1(ms.s1) + " m", (P[3].x + P[5].x) / 2, P[0].y + 15, { font: sf, color: C.pink, align: "center", base: "middle" });
      d.text("h = " + f2(H), P[4].x + 8, (P[3].y + P[4].y) / 2, { font: `600 13px ${F.mono}`, color: C.amber, base: "middle" });
      return { H, k: s1 / s0, rows: `<div class="row">${M(`<span class="fr"><span><i>h</i></span><span class="c3">${f1(ms.h0)}</span></span> = <span class="fr"><span class="c3">${f1(ms.s1)}</span><span class="c3">${f1(ms.s0)}</span></span>`)}<span class="lbl">tree / pole = tree shadow / pole shadow</span></div>`,
        why: "Both objects are vertical (right angles) and the sun's rays are parallel (congruent angles at the shadow tips), so the triangles are similar by AA." };
    }
    const { e, d1, d2 } = ms; H = e * d2 / d1;
    pts = [{ x: 0, y: 0 }, { x: 0, y: e }, { x: d1, y: 0 }, { x: d1 + d2, y: 0 }, { x: d1 + d2, y: H }];
    const Fz = fitBox(pts.concat([{ x: d1 + d2 + .8, y: 0 }]), { l: 56, t: top + 18, r: w - 70, b: h - 44 }), X = Fz.X; const P = pts.map(X);
    d.line(10, P[0].y, w - 10, P[0].y, C.muted, 1.5);
    d.rect(P[3].x, P[4].y, Math.max(8, Fz.s * .8), P[3].y - P[4].y, alpha(C.text, .08), alpha(C.text, .4), 1);
    poly(g, [P[0], P[1], P[2]], alpha(C.pink, .12), null); poly(g, [P[2], P[3], P[4]], alpha(C.pink, .12), null);
    d.line(P[0].x, P[0].y, P[1].x, P[1].y, C.pink, 4); d.circle(P[1].x, P[1].y, 4, C.text);
    d.line(P[3].x, P[3].y, P[4].x, P[4].y, C.green, 4);
    d.line(P[1].x, P[1].y, P[2].x, P[2].y, C.amber, 1.8); d.line(P[2].x, P[2].y, P[4].x, P[4].y, C.amber, 1.8);
    d.line(P[2].x - 9, P[2].y + 3, P[2].x + 9, P[2].y + 3, C.cyan, 4);
    rightMark(g, P[0], P[1], P[2], 8, C.cyan); rightMark(g, P[3], P[4], P[2], 8, C.cyan);
    arcAng(g, P[2], P[0], P[1], 16, C.cyan, 2); arcAng(g, P[2], P[3], P[4], 16, C.cyan, 2);
    d.text(f1(e) + " m", P[1].x - 6, (P[0].y + P[1].y) / 2, { font: sf, color: C.pink, align: "right", base: "middle" });
    d.text(f1(d1), (P[0].x + P[2].x) / 2, P[0].y + 15, { font: sf, color: C.pink, align: "center", base: "middle" });
    d.text(f1(d2) + " m", (P[2].x + P[3].x) / 2, P[0].y + 15, { font: sf, color: C.pink, align: "center", base: "middle" });
    d.text("mirror", P[2].x, P[0].y + 30, { font: `11px ${F.mono}`, color: C.cyan, align: "center", base: "middle" });
    d.text("h = " + f2(H), P[3].x + Math.max(8, Fz.s * .8) + 6, (P[3].y + P[4].y) / 2, { font: `600 13px ${F.mono}`, color: C.amber, base: "middle" });
    void lf; void mir; void eye; void top2;
    return { H, k: d2 / d1, rows: `<div class="row">${M(`<span class="fr"><span><i>h</i></span><span class="c3">${f1(e)}</span></span> = <span class="fr"><span class="c3">${f1(d2)}</span><span class="c3">${f1(d1)}</span></span>`)}<span class="lbl">building / eye height = distances from the mirror</span></div>`,
      why: "The law of reflection makes the two angles at the mirror congruent, and the person and the wall are both vertical, so the triangles are similar by AA." };
  }
  k.loop(() => {
    c.begin(); const { w, h } = c; const top = topBelow(modesEl);
    if (mode === "MEAS") { const r = drawScene(top);
      k.setRO(`<div><h2>Indirect measurement</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(`<i>h</i> = <span class="num c1">${f2(r.H)}</span> m`)}</div></div>
        <div class="ro-rows">${r.rows}<div class="row">${M(`<span class="c1"><i>k</i> = ${f2(r.k)}</span>`)}<span class="lbl">scale factor from the small triangle to the large one</span></div></div>
        <div class="landmark"><div class="big">two similar right triangles</div><div class="note">${r.why}</div></div>
        <p class="narr">${scene === "shadow" ? "Try the worked example: pole 1.5 m, shadow 2.0 m, tree shadow 14.8 m gives 11.1 m." : "Try eye height 1.6 m, 2.0 m to the mirror and 12 m to the wall: 9.6 m."}</p>`);
      return; }
    const sp = SPEC[mode], refT = build(mode, sp.ref);
    const v = {}; sp.ctl.forEach(s => v[s[0]] = val[s[0]]);
    const T2 = build(mode, v);
    const lf = `italic 600 15px ${F.math}`, sf = `600 11px ${F.mono}`;
    const sA = sides(refT), aA = angs(refT);
    // layout: both at one scale
    const wide = w > h * 1.05;
    const place = (T, dx, dy) => T.map(p => ({ x: p.x + dx, y: p.y + dy }));
    const bx = T => [Math.min(...T.map(p => p.x)), Math.max(...T.map(p => p.x)), Math.min(...T.map(p => p.y)), Math.max(...T.map(p => p.y))];
    const b1 = bx(refT), b2 = T2 ? bx(T2) : [0, v.c || 4, 0, 1];
    const gap = 1.6;
    const R2 = T2 ? (wide ? place(T2, b1[1] + gap - b2[0], 0) : place(T2, 0, b1[2] - gap - b2[3])) : null;
    const all = refT.concat(R2 || (wide ? [{ x: b1[1] + gap, y: 0 }, { x: b1[1] + gap + (v.c || 4), y: 0 }] : [{ x: 0, y: b1[2] - gap - 1 }, { x: v.c || 4, y: b1[2] - gap - 1 }]));
    const Fz = fitBox(all, { l: 30, t: top + 20, r: w - 30, b: h - 30 }), X = Fz.X;
    // similarity test (sorted sides) and correspondence
    let sim = false, map = null, kk = 0;
    if (T2) {
      const sB = sides(T2), oA = [0, 1, 2].sort((i, j) => sA[i] - sA[j]), oB = [0, 1, 2].sort((i, j) => sB[i] - sB[j]);
      const r = oA.map((i, t) => sB[oB[t]] / sA[i]); kk = r[0];
      sim = r.every(x => Math.abs(x - r[0]) < 1e-6 * r[0]);
      if (sim) { map = [0, 0, 0]; oA.forEach((i, t) => map[oB[t]] = i); }   // map[j] = vertex of ABC matching vertex j of DEF
    }
    const nA = ["A", "B", "C"], nB = ["D", "E", "F"];
    const drawT = (T, names, col, arcsFor) => {
      const P = T.map(X), ce = cen(P);
      poly(g, P, alpha(col, .1), col === C.text ? alpha(C.text, .6) : col, 2);
      [[0, 1], [1, 2], [2, 0]].forEach(([i, j]) => d.line(P[i].x, P[i].y, P[j].x, P[j].y, C.pink, 2.5));
      const ag = angs(T);
      P.forEach((p, i) => { const n = arcsFor ? arcsFor(i) : 1; arcAng(g, p, P[(i + 1) % 3], P[(i + 2) % 3], 15, n ? C.cyan : alpha(C.cyan, .45), 1.8, Math.max(1, n));
        const u = unitv(ce, p); d.text(f1(ag[i]) + "°", p.x + u.x * 42, p.y + u.y * 42, { font: sf, color: C.cyan, align: "center", base: "middle" });
        labAway(d, names[i], p, ce, col === C.text ? C.text : C.violet, lf, 15); });
      const sd = sides(T);
      [[1, 2, 0], [2, 0, 1], [0, 1, 2]].forEach(([i, j, o]) => labSide(d, fd(sd[o]), P[i], P[j], ce, C.pink, sf, 12));
      return P;
    };
    drawT(refT, nA, C.text, i => i + 1);
    if (R2) drawT(R2, nB, C.violet, j => sim ? map[j] + 1 : 0);
    else { const A0 = X(all[all.length - 2]), B0 = X(all[all.length - 1]); d.line(A0.x, A0.y, B0.x, B0.y, alpha(C.text, .5), 2, [5, 4]); d.text(mode === "AA" ? "the two angles leave no room for a third" : "these sides cannot close up", (A0.x + B0.x) / 2, A0.y - 14, { font: `12px ${F.sans}`, color: C.red, align: "center" }); }
    // readout
    const vs = s => isAng(s[0]) ? val[s[0]] + "°" : fd(val[s[0]]);
    const refH = mode === "AA" ? `m∠<i>A</i> = 50°, m∠<i>B</i> = 60°, <i>AB</i> = 4` : mode === "SSS" ? `<i>AB</i> = 4, <i>BC</i> = 6, <i>CA</i> = 5` : `<i>AB</i> = 4, m∠<i>A</i> = 50°, <i>AC</i> = 6`;
    let rows = `<div class="row">${M(refH)}<span class="lbl">△ABC (fixed)</span></div><div class="row">${M(sp.ctl.map(s => `${isAng(s[0]) ? "m" : ""}${s[1]} = ${vs(s)}`).join(", "))}<span class="lbl">△DEF (sliders)</span></div>`;
    let big, lm;
    if (!T2) { big = `<span class="c3">no triangle</span>`; lm = `<div class="landmark hit"><div class="big">△DEF does not exist</div><div class="note">${mode === "AA" ? `∠D + ∠E = ${val.D + val.E}°, but the three angles of a triangle add to 180°.` : "One side is at least as long as the other two together (Triangle Inequality)."}</div></div>`; }
    else {
      const sB = sides(T2), aB = angs(T2);
      const pair = sim ? [0, 1, 2].map(j => [j, map[j]]) : [[0, 0], [1, 1], [2, 2]];
      const sideName = (names, i) => names[(i + 1) % 3] + names[(i + 2) % 3];
      rows += pair.map(([j, i]) => `<div class="row">${M(`<span class="fr"><span class="c3"><i>${sideName(nB, j)}</i></span><span class="c3"><i>${sideName(nA, i)}</i></span></span> = <span class="${sim ? "c1" : ""}">${f2(sB[j] / sA[i])}</span>`)}<span class="lbl">${M(`∠<i>${nB[j]}</i> = ${f1(aB[j])}°, ∠<i>${nA[i]}</i> = ${f1(aA[i])}°`)}</span></div>`).join("");
      let crit = "";
      if (mode === "AA") crit = (val.D === 50 || val.D === 60 || val.D === 70) && (val.E === 50 || val.E === 60 || val.E === 70) && val.D !== val.E ? "two pairs of congruent angles" : "";
      if (mode === "SSS") crit = sim ? "all three side ratios agree" : "";
      if (mode === "SAS") crit = sim ? (val.D === 50 ? "congruent included angles, proportional including sides" : "") : "";
      if (sim) {
        const st = [0, 1, 2].map(i => nB[map.indexOf(i)]).join("");
        big = `<span class="c5">similar</span>`;
        rows += `<div class="row">${M(`<span class="c4">${[0, 1, 2].map(i => `<i>${nA[i]}</i> ${LR} <i>${st[i]}</i>`).join(", &nbsp;")}</span>`)}<span class="lbl">correspondence (matching arc counts)</span></div>`;
        lm = `<div class="landmark hit"><div class="big">${M(`△<i>ABC</i> <span class="c4">∼</span> △<i>${st}</i>, &nbsp;<span class="c1"><i>k</i> = ${f2(kk)}</span>`)}</div><div class="note">${crit ? crit[0].toUpperCase() + crit.slice(1) + `, so ${mode === "AA" ? "AA" : mode === "SSS" ? "SSS∼" : "SAS∼"} applies.` : "The triangles are similar (the matching angle is not the one this mode compares)."} Every side of △${st} is ${f2(kk)} times its partner${Math.abs(kk - 1) < 1e-9 ? ": the triangles are congruent" : ""}.</div></div>`;
      } else {
        big = `<span class="c3">not similar</span>`;
        const note = mode === "AA" ? "The angle sets differ, so the shapes differ and the side ratios disagree. Match two angles to 50° and 60°." : mode === "SSS" ? "The three ratios are not all equal. Scale every side of △ABC by the same factor." : (val.D !== 50 ? "∠D is not congruent to ∠A, so SAS∼ fails even if DE/AB = DF/AC." : "∠D ≅ ∠A, but DE/AB ≠ DF/AC: the including sides are not proportional.");
        lm = `<div class="landmark"><div class="big">criterion not met</div><div class="note">${note}</div></div>`;
      }
    }
    k.setRO(`<div><h2>${mode === "AA" ? "AA Similarity" : mode === "SSS" ? "SSS Similarity" : "SAS Similarity"}</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${big}</div></div>
      <div class="ro-rows">${rows}</div>${lm}<p class="narr">Press Make similar to see the ratios agree at k = 1.5, then change one slider.</p>`);
  });
};

/* ===================== g-proportionality ===================== */
L["g-proportionality"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "split", T = [{ x: 4, y: 8 }, { x: 0, y: 0 }, { x: 10, y: 0 }], m = 8, Fz = null;
  let lines = { ym: 4.8, t1: 1, b1: 3, t2: 6, b2: 10 };
  let TB = [{ x: 3, y: 7 }, { x: 0, y: 0 }, { x: 10, y: 0 }];
  const modesEl = k.modes([["split", "Side splitter"], ["lines", "Parallel lines"], ["bis", "Bisector"]], mode, v => { mode = v; show(); });
  const bMid = k.button("Midsegment", () => { m = 10; }, "btn ghost");
  const bRe = k.button("Reset", () => { T = [{ x: 4, y: 8 }, { x: 0, y: 0 }, { x: 10, y: 0 }]; m = 8; lines = { ym: 4.8, t1: 1, b1: 3, t2: 6, b2: 10 }; TB = [{ x: 3, y: 7 }, { x: 0, y: 0 }, { x: 10, y: 0 }]; }, "btn ghost");
  const show = () => { bMid.style.display = mode === "split" ? "" : "none"; };
  show(); void bRe;
  k.hint("Drag the points");
  const W0 = [{ x: -.5, y: -.8 }, { x: 10.5, y: 8.8 }];
  const handles = () => {
    if (!Fz) return [];
    if (mode === "split") { const D_ = { x: lerp(T[0].x, T[1].x, m / 20), y: lerp(T[0].y, T[1].y, m / 20) }; return T.concat([D_]).map(Fz.X); }
    if (mode === "lines") return [{ x: lines.t1, y: 8 }, { x: lines.b1, y: 0 }, { x: lines.t2, y: 8 }, { x: lines.b2, y: 0 }, { x: -.2, y: lines.ym }].map(Fz.X);
    return TB.map(Fz.X);
  };
  drag(c, p => nearest(p, handles(), 20), (i, p) => {
    const v = Fz.inv(p.x, p.y);
    if (mode === "split") {
      if (i === 3) { const ax = T[1].x - T[0].x, ay = T[1].y - T[0].y, l2 = ax * ax + ay * ay; if (!l2) return; const t = ((v.x - T[0].x) * ax + (v.y - T[0].y) * ay) / l2; m = clamp(Math.round(t * 20), 1, 19); return; }
      const q = { x: clamp(Math.round(v.x), 0, 10), y: clamp(Math.round(v.y), 0, 8) }; if (T.some((r, j) => j !== i && r.x === q.x && r.y === q.y)) return; T[i] = q; return; }
    if (mode === "lines") { const sx = clamp(Math.round(v.x * 2) / 2, 0, 10);
      if (i === 0) lines.t1 = sx; else if (i === 1) lines.b1 = sx; else if (i === 2) lines.t2 = sx; else if (i === 3) lines.b2 = sx; else lines.ym = clamp(Math.round(v.y * 5) / 5, .8, 7.2); return; }
    const q = { x: clamp(Math.round(v.x), 0, 10), y: clamp(Math.round(v.y), 0, 8) }; if (TB.some((r, j) => j !== i && r.x === q.x && r.y === q.y)) return; TB[i] = q;
  });
  const d2i = (P, R_) => (P.x - R_.x) ** 2 + (P.y - R_.y) ** 2;
  k.loop(() => {
    c.begin(); const { w, h } = c; const top = topBelow(modesEl);
    Fz = fitBox(W0, { l: 22, t: top + 12, r: w - 22, b: h - 28 }); const X = Fz.X;
    const lf = `italic 600 15px ${F.math}`, sf = `600 12px ${F.mono}`;
    if (mode === "split") {
      const [A, B, Cc] = T, P = T.map(X), ce = cen(P);
      const coll = cross(A, B, Cc) === 0;
      const t = m / 20, D_ = { x: lerp(A.x, B.x, t), y: lerp(A.y, B.y, t) }, E_ = { x: lerp(A.x, Cc.x, t), y: lerp(A.y, Cc.y, t) };
      const Dp = X(D_), Ep = X(E_);
      poly(g, P, alpha(C.text, .05), alpha(C.text, .55), 2);
      if (!coll) {
        d.line(P[0].x, P[0].y, Dp.x, Dp.y, C.pink, 4); d.line(P[0].x, P[0].y, Ep.x, Ep.y, C.pink, 4);
        d.line(Dp.x, Dp.y, P[1].x, P[1].y, C.violet, 4); d.line(Ep.x, Ep.y, P[2].x, P[2].y, C.violet, 4);
        // extend the parallel line a little
        const u = unitv(Ep, Dp); d.line(Dp.x - u.x * 12, Dp.y - u.y * 12, Ep.x + u.x * 12, Ep.y + u.y * 12, alpha(C.cyan, .5), 1.4, [5, 4]);
        d.line(Dp.x, Dp.y, Ep.x, Ep.y, C.cyan, 3.5);
        // parallel arrows on DE and BC
        const chev = (P1, P2, col) => { const mx = (P1.x + P2.x) / 2, my = (P1.y + P2.y) / 2, uu = unitv(P2, P1); g.save(); g.strokeStyle = col; g.lineWidth = 2; g.beginPath(); g.moveTo(mx - uu.x * 5 - uu.y * 5, my - uu.y * 5 + uu.x * 5); g.lineTo(mx + uu.x * 3, my + uu.y * 3); g.lineTo(mx - uu.x * 5 + uu.y * 5, my - uu.y * 5 - uu.x * 5); g.stroke(); g.restore(); };
        chev(Dp, Ep, C.cyan); chev(P[1], P[2], C.text);
        arcAng(g, Dp, P[0], Ep, 14, alpha(C.amber, .8), 1.6); arcAng(g, P[1], P[0], P[2], 14, alpha(C.amber, .8), 1.6);
        labSide(d, f2(dist(A, D_)), P[0], Dp, ce, C.pink, sf, 14); labSide(d, f2(dist(D_, B)), Dp, P[1], ce, C.violet, sf, 14);
        labSide(d, f2(dist(A, E_)), P[0], Ep, ce, C.pink, sf, 14); labSide(d, f2(dist(E_, Cc)), Ep, P[2], ce, C.violet, sf, 14);
        labAway(d, "D", Dp, ce, C.cyan, lf, 17); labAway(d, "E", Ep, ce, C.cyan, lf, 17);
        d.circle(Dp.x, Dp.y, 7, C.cyan, C.ink, 2); d.circle(Ep.x, Ep.y, 4, C.cyan);
      }
      ["A", "B", "C"].forEach((n, i) => { labAway(d, n, P[i], ce, C.text, lf, 16); d.circle(P[i].x, P[i].y, 6.5, C.text, C.ink, 2); });
      const rq = qh(Q(m, 20 - m)), tq = qh(Q(m, 20));
      let lm;
      if (coll) lm = `<div class="landmark hit"><div class="big">A, B and C are collinear</div><div class="note">There is no triangle, so there is no side to split. Drag a vertex off the line.</div></div>`;
      else if (m === 10) lm = `<div class="landmark hit"><div class="big">midsegment: ${M(`<i>DE</i> = ½ <i>BC</i>`)}</div><div class="note">D and E are midpoints, so the ratio is 1 : 1, DE ∥ BC, and DE is exactly half of BC (Triangle Midsegment Theorem).</div></div>`;
      else lm = `<div class="landmark"><div class="big">${M(`<span class="fr"><span class="c3"><i>AD</i></span><span class="c4"><i>DB</i></span></span> = <span class="fr"><span class="c3"><i>AE</i></span><span class="c4"><i>EC</i></span></span> = <span class="c1">${rq}</span>`)}</div><div class="note">△ADE ∼ △ABC by AA (shared ∠A, corresponding angles at D and B), so both sides are cut at the same fraction ${tq} of the way from A.</div></div>`;
      k.setRO(`<div><h2>Triangle Proportionality</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<i>AD</i> : <i>DB</i> = <span class="num c1">${m / gcd(m, 20 - m)} : ${(20 - m) / gcd(m, 20 - m)}</span>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<span class="c3"><i>AD</i> = ${f2(dist(A, D_))}</span>, <span class="c4"><i>DB</i> = ${f2(dist(D_, B))}</span>`)}<span class="lbl">left side</span></div>
        <div class="row">${M(`<span class="c3"><i>AE</i> = ${f2(dist(A, E_))}</span>, <span class="c4"><i>EC</i> = ${f2(dist(E_, Cc))}</span>`)}<span class="lbl">right side, same ratio</span></div>
        <div class="row">${M(`<span class="fr"><span class="c2"><i>DE</i></span><span><i>BC</i></span></span> = <span class="fr"><span><i>AD</i></span><span><i>AB</i></span></span> = ${tq}`)}<span class="lbl">${M(`<i>DE</i> = ${f2(dist(D_, E_))}, <i>BC</i> = ${radH(d2i(B, Cc))}`)} (ratio to the whole side)</span></div></div>${lm}
        <p class="narr">Drag D along AB; E follows so that DE stays parallel to BC. Drag A, B or C to reshape the triangle.</p>`);
      return;
    }
    if (mode === "lines") {
      const { ym, t1, b1, t2, b2 } = lines;
      [8, ym, 0].forEach((y, i) => { const a = X({ x: -.5, y }), b = X({ x: 10.5, y }); d.line(a.x, a.y, b.x, b.y, C.cyan, i === 1 ? 3 : 2.5); });
      const at = (tx, bx, y) => ({ x: lerp(bx, tx, y / 8), y });
      const tr = [[t1, b1], [t2, b2]].map(([tx, bx]) => ({ T: { x: tx, y: 8 }, Mi: at(tx, bx, ym), B: { x: bx, y: 0 } }));
      tr.forEach((r, i) => { const Tp = X(r.T), Mp = X(r.Mi), Bp = X(r.B); d.line(Tp.x, Tp.y, Mp.x, Mp.y, C.pink, 4); d.line(Mp.x, Mp.y, Bp.x, Bp.y, C.violet, 4);
        const side = i === 0 ? -1 : 1; const ce = { x: Mp.x - side * 60, y: Mp.y };
        labSide(d, f2(dist(r.T, r.Mi)), Tp, Mp, ce, C.pink, sf, 16); labSide(d, f2(dist(r.Mi, r.B)), Mp, Bp, ce, C.violet, sf, 16);
        d.circle(Tp.x, Tp.y, 6.5, C.text, C.ink, 2); d.circle(Bp.x, Bp.y, 6.5, C.text, C.ink, 2); d.circle(Mp.x, Mp.y, 3.5, C.cyan);
        d.text(i ? "m" : "n", Tp.x, Tp.y - 14, { font: lf, color: C.text, align: "center", base: "middle" }); });
      const hm = X({ x: -.2, y: ym }); d.circle(hm.x, hm.y, 7, C.cyan, C.ink, 2);
      const cr = segsCross(tr[0].T, tr[0].B, tr[1].T, tr[1].B);
      const a1 = dist(tr[0].T, tr[0].Mi), b1_ = dist(tr[0].Mi, tr[0].B), a2 = dist(tr[1].T, tr[1].Mi), b2_ = dist(tr[1].Mi, tr[1].B);
      const rq = Q(Math.round((8 - ym) * 5), Math.round(ym * 5));
      k.setRO(`<div><h2>Three parallel lines</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<span class="c3">upper</span> : <span class="c4">lower</span> = <span class="num c1">${rq.n} : ${rq.d}</span>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<span class="fr"><span class="c3">${f2(a1)}</span><span class="c4">${f2(b1_)}</span></span> = ${f2(a1 / b1_)}`)}<span class="lbl">along transversal n</span></div>
        <div class="row">${M(`<span class="fr"><span class="c3">${f2(a2)}</span><span class="c4">${f2(b2_)}</span></span> = ${f2(a2 / b2_)}`)}<span class="lbl">along transversal m</span></div>
        <div class="row">${M(`<span class="fr"><span>${fd(8 - ym)}</span><span>${fd(ym)}</span></span> = ${f2((8 - ym) / ym)}`)}<span class="lbl">gaps between the parallel lines</span></div></div>
        <div class="landmark${cr ? " hit" : ""}"><div class="big">same ratio on every transversal</div><div class="note">${cr ? "The transversals cross between the lines, yet the pieces of each are still in the ratio of the gaps." : "Three parallel lines divide any two transversals proportionally. Slide the top or bottom endpoints: the lengths change, the ratio does not."}</div></div>
        <p class="narr">Drag the cyan handle on the left to move the middle line, or drag the endpoints of the transversals.</p>`);
      return;
    }
    // bisector mode
    const [A, B, Cc] = TB, P = TB.map(X), ce = cen(P);
    const coll = cross(A, B, Cc) === 0;
    poly(g, P, alpha(C.text, .05), alpha(C.text, .4), 2);
    const nAB = d2i(A, B), nAC = d2i(A, Cc);
    let D_ = null;
    if (!coll) {
      const lb = Math.sqrt(nAB), lc = Math.sqrt(nAC), t = lb / (lb + lc); D_ = { x: lerp(B.x, Cc.x, t), y: lerp(B.y, Cc.y, t) };
      const Dp = X(D_);
      d.line(P[0].x, P[0].y, P[1].x, P[1].y, C.pink, 3.5); d.line(P[1].x, P[1].y, Dp.x, Dp.y, C.pink, 4);
      d.line(P[0].x, P[0].y, P[2].x, P[2].y, C.violet, 3.5); d.line(Dp.x, Dp.y, P[2].x, P[2].y, C.violet, 4);
      d.line(P[0].x, P[0].y, Dp.x, Dp.y, C.cyan, 3);
      arcAng(g, P[0], P[1], Dp, 30, C.amber, 2, 1); arcAng(g, P[0], Dp, P[2], 30, C.amber, 2, 2);
      labSide(d, radH(nAB).replace(/<[^>]+>/g, ""), P[0], P[1], ce, C.pink, sf, 14); labSide(d, radH(nAC).replace(/<[^>]+>/g, ""), P[0], P[2], ce, C.violet, sf, 14);
      labSide(d, f2(dist(B, D_)), P[1], Dp, P[0], C.pink, sf, 14); labSide(d, f2(dist(D_, Cc)), Dp, P[2], P[0], C.violet, sf, 14);
      labAway(d, "D", Dp, P[0], C.cyan, lf, 15); d.circle(Dp.x, Dp.y, 4.5, C.cyan);
    }
    ["A", "B", "C"].forEach((n, i) => { labAway(d, n, P[i], ce, C.text, lf, 16); d.circle(P[i].x, P[i].y, 6.5, C.text, C.ink, 2); });
    let lm, big = "", rows = "";
    if (coll) lm = `<div class="landmark hit"><div class="big">A, B and C are collinear</div><div class="note">There is no angle at A to bisect. Drag a vertex off the line.</div></div>`;
    else {
      const ratioH = radH(nAB * nAC, nAC), iso = nAB === nAC;
      big = M(`<span class="fr"><span class="c3"><i>BD</i></span><span class="c4"><i>DC</i></span></span> = <span class="fr"><span class="c3"><i>AB</i></span><span class="c4"><i>AC</i></span></span> = <span class="num c1">${ratioH}</span>`);
      rows = `<div class="row">${M(`<span class="c3"><i>AB</i> = ${radH(nAB)}</span>, <span class="c4"><i>AC</i> = ${radH(nAC)}</span>`)}<span class="lbl">sides forming ∠A</span></div>
        <div class="row">${M(`<span class="c3"><i>BD</i> = ${f2(dist(B, D_))}</span>, <span class="c4"><i>DC</i> = ${f2(dist(D_, Cc))}</span>`)}<span class="lbl">pieces of BC (≈ ${f2(dist(B, D_) / dist(D_, Cc))} : 1)</span></div>
        <div class="row">${M(`m∠<i>BAD</i> = m∠<i>DAC</i> = ${f1(angAt(A, B, Cc) / 2)}°`)}<span class="lbl">ray AD bisects ∠A</span></div>`;
      lm = iso ? `<div class="landmark hit"><div class="big">AB = AC: D is the midpoint</div><div class="note">In an isosceles triangle the bisector of the vertex angle splits the base into equal halves, the case ratio 1 of the theorem.</div></div>`
        : `<div class="landmark"><div class="big">longer side, longer piece</div><div class="note">The bisector divides BC in the ratio of the sides beside it: BD goes with AB and DC with AC (Triangle Angle-Bisector Theorem).</div></div>`;
    }
    k.setRO(`<div><h2>Angle-Bisector Theorem</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${big || "—"}</div></div><div class="ro-rows">${rows}</div>${lm}
      <p class="narr">Drag A toward B or C and watch D slide along BC.</p>`);
  });
};

/* ---- squares on the legs and the split square on the hypotenuse (Euclid I.47 / VI.8) ----
   A, B ends of the hypotenuse (world, y up, AB along +x), Cv the right-angle vertex above, D the foot of the altitude */
function euclidPts(A, B, Cv){
  const c_ = B.x - A.x;
  const out = (P, R_, away) => { const ux = R_.x - P.x, uy = R_.y - P.y; let nx = -uy, ny = ux; const mx = (P.x + R_.x) / 2, my = (P.y + R_.y) / 2; if ((away.x - mx) * nx + (away.y - my) * ny > 0) { nx = -nx; ny = -ny; } return [P, R_, { x: R_.x + nx, y: R_.y + ny }, { x: P.x + nx, y: P.y + ny }]; };
  return { sqB: out(A, Cv, B), sqA: out(Cv, B, A), hyp: [A, B, { x: B.x, y: -c_ }, { x: A.x, y: -c_ }] };
}

/* ===================== g-geo-mean ===================== */
L["g-geo-mean"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "alt", cl = 10, j = 7, anim = 0, sep = false, Fz = null;   // q = j/2
  const modesEl = k.modes([["alt", "h² = pq"], ["legs", "Legs"], ["sim", "Three triangles"]], mode, v => { mode = v; show(); if (v === "sim") { sep = true; anim = k.reduce ? 1 : 0; } });
  const scl = k.slider(`hypotenuse <i>c</i>`, 6, 12, 1, cl, v => { cl = v; j = clamp(j, 1, 2 * cl - 1); });
  const bSep = k.button("Put back", () => { sep = !sep; if (k.reduce) anim = sep ? 1 : 0; }, "btn ghost");
  const bHalf = k.button("Top of arc", () => { j = cl; }, "btn ghost");
  const show = () => { bSep.style.display = mode === "sim" ? "" : "none"; };
  show(); void scl; void bHalf;
  k.hint("Drag C along the semicircle");
  let Cpx = null;
  drag(c, p => (Cpx && Math.hypot(p.x - Cpx.x, p.y - Cpx.y) < 24 ? 0 : null), (i, p) => { const v = Fz.inv(p.x, p.y); j = clamp(Math.round(v.x * 2), 1, 2 * cl - 1); });
  k.loop(dt => {
    const tgt = sep ? 1 : 0; if (anim !== tgt) anim = k.reduce ? tgt : (anim < tgt ? Math.min(tgt, anim + dt / 1.2) : Math.max(tgt, anim - dt / 1.2));
    c.begin(); const { w, h } = c; const top = topBelow(modesEl);
    const q = j / 2, p = cl - q, hh = Math.sqrt(p * q), a = Math.sqrt(p * cl), b = Math.sqrt(q * cl);
    const A = { x: 0, y: 0 }, B = { x: cl, y: 0 }, D_ = { x: q, y: 0 }, Cv = { x: q, y: hh };
    const lf = `italic 600 15px ${F.math}`, sf = `600 12px ${F.mono}`;
    let bounds;
    const E = euclidPts(A, B, Cv);
    if (mode === "alt") bounds = [{ x: -.3, y: -cl / 2 - .3 }, { x: cl + .3, y: cl / 2 + .3 }];
    else if (mode === "legs") bounds = E.sqA.concat(E.sqB, E.hyp);
    else { const gap = 1.3, y0 = -1.8 - Math.max(a, hh, p); bounds = [{ x: -.3, y: cl / 2 + .3 }, { x: Math.max(cl, b + q + hh + 2 * gap), y: y0 - .3 }, { x: 0, y: 0 }]; }
    Fz = fitBox(bounds, { l: 24, t: top + 16, r: w - 24, b: h - 30 }); const X = Fz.X;
    const P = { A: X(A), B: X(B), D: X(D_), C: X(Cv) }; Cpx = P.C;
    // semicircle
    const O = X({ x: cl / 2, y: 0 }); g.save(); g.strokeStyle = alpha(C.text, .3); g.lineWidth = 1.3; g.setLineDash([4, 4]); g.beginPath(); g.arc(O.x, O.y, cl / 2 * Fz.s, Math.PI, 2 * Math.PI); g.stroke(); g.restore();
    const ex = Math.round(j * (2 * cl - j)), hH = radH(ex, 2), aH = radH(2 * cl * (2 * cl - j), 2), bH = radH(2 * cl * j, 2);
    const qH = qh(Q(j, 2)), pH = qh(Q(2 * cl - j, 2));
    const qT = fd(q), pT = fd(p);
    const drawMain = (alphaMul = 1) => {
      poly(g, [P.A, P.B, P.C], alpha(C.violet, .08 * alphaMul), null);
      d.line(P.A.x, P.A.y, P.D.x, P.D.y, alpha(C.pink, alphaMul), 4); d.line(P.D.x, P.D.y, P.B.x, P.B.y, alpha(C.cyan, alphaMul), 4);
      d.line(P.A.x, P.A.y, P.C.x, P.C.y, alpha(C.violet, alphaMul), 3); d.line(P.C.x, P.C.y, P.B.x, P.B.y, alpha(C.violet, alphaMul), 3);
      d.line(P.C.x, P.C.y, P.D.x, P.D.y, alpha(C.amber, alphaMul), 3);
      rightMark(g, P.C, P.A, P.B, 9, alpha(C.text, .7 * alphaMul)); rightMark(g, P.D, P.B, P.C, 8, alpha(C.amber, .8 * alphaMul));
    };
    const labels = () => {
      const ce = cen([P.A, P.B, P.C]);
      labAway(d, "A", P.A, { x: P.A.x + 10, y: P.A.y - 6 }, C.text, lf, 14); labAway(d, "B", P.B, { x: P.B.x - 10, y: P.B.y - 6 }, C.text, lf, 14);
      labAway(d, "C", P.C, { x: P.D.x, y: P.D.y }, C.text, lf, 16); d.text("D", P.D.x + 9, P.D.y + 14, { font: lf, color: C.amber, align: "center", base: "middle" });
      const shortQ = P.D.x - P.A.x < 64, shortP = P.B.x - P.D.x < 64, ly = 15;
      const up = mode === "alt" ? (q > p ? "q" : "p") : "";   // in the h² = pq view the rectangle hangs under the longer piece
      d.text("q = " + qT, shortQ ? P.A.x - 6 : (P.A.x + P.D.x) / 2, P.A.y + (shortQ || up === "q" ? -12 : ly), { font: sf, color: C.pink, align: shortQ ? "right" : "center", base: "middle" });
      d.text("p = " + pT, shortP ? P.B.x + 6 : (P.D.x + P.B.x) / 2, P.A.y + (shortP || up === "p" ? -12 : ly), { font: sf, color: C.cyan, align: shortP ? "left" : "center", base: "middle" });
      d.text("h", P.D.x + (q <= p ? -9 : 9), (P.D.y + P.C.y) / 2, { font: lf, color: C.amber, align: "center", base: "middle" });
      labSide(d, "b", P.A, P.C, ce, C.violet, lf, 13); labSide(d, "a", P.C, P.B, ce, C.violet, lf, 13);
      d.circle(P.C.x, P.C.y, 7.5, C.violet, C.ink, 2);
    };
    let rows = "", lm = "", big = "";
    if (mode === "alt") {
      // square on the altitude, toward the longer segment; rectangle p × q under the hypotenuse
      const dir = p >= q ? 1 : -1;
      const sq = [D_, Cv, { x: q + dir * hh, y: hh }, { x: q + dir * hh, y: 0 }].map(X);
      const rect = p >= q ? [D_, B, { x: cl, y: -q }, { x: q, y: -q }] : [A, D_, { x: q, y: -p }, { x: 0, y: -p }];
      const Rp = rect.map(X);
      poly(g, sq, alpha(C.amber, .22), C.amber, 1.5);
      poly(g, Rp, alpha(p >= q ? C.cyan : C.pink, .16), null);
      // rectangle sides: along AB the segment, downward the other segment
      d.line(Rp[1].x, Rp[1].y, Rp[2].x, Rp[2].y, p >= q ? C.pink : C.cyan, 3); d.line(Rp[3].x, Rp[3].y, Rp[0].x, Rp[0].y, p >= q ? C.pink : C.cyan, 3); d.line(Rp[2].x, Rp[2].y, Rp[3].x, Rp[3].y, p >= q ? C.cyan : C.pink, 3);
      drawMain(); labels();
      const sc = X({ x: q + dir * hh * .5, y: hh * .3 }); d.text("h² = " + fd(p * q), sc.x, sc.y, { font: `600 12px ${F.mono}`, color: C.amber, align: "center", base: "middle" });
      const rc = cen(Rp), rh = Math.abs(Rp[2].y - Rp[1].y);
      if (rh > 40) { d.text(fd(p * q), rc.x, rc.y, { font: `600 13px ${F.mono}`, color: C.text, align: "center", base: "middle" }); d.text("p × q", rc.x, rc.y + 15, { font: `11px ${F.mono}`, color: C.faint, align: "center", base: "middle" }); }
      else d.text("p × q = " + fd(p * q), rc.x, Rp[2].y + 14, { font: `600 12px ${F.mono}`, color: C.text, align: "center", base: "middle" });
      big = M(`<span class="c1"><i>h</i></span> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><span class="c2"><i>p</i></span><span class="c3"><i>q</i></span></span> = <span class="num c1">${hH}</span>`);
      rows = `<div class="row">${M(`<span class="c2"><i>p</i> = ${pH}</span>, <span class="c3"><i>q</i> = ${qH}</span>`)}<span class="lbl">pieces of the hypotenuse, p + q = ${cl}</span></div>
        <div class="row">${M(`<span class="c1"><i>h</i></span><sup>2</sup> = <span class="c2"><i>p</i></span><span class="c3"><i>q</i></span> = ${qh(Q(ex, 4))}`)}<span class="lbl">square on h (amber) = rectangle p × q ${Math.abs(hh - Math.round(hh)) > 1e-9 ? "(h ≈ " + f2(hh) + ")" : ""}</span></div>
        <div class="row">${M(`<i>h</i> = <span class="fr"><span><i>ab</i></span><span><i>c</i></span></span>`)}<span class="lbl">${f2(a)} × ${f2(b)} ÷ ${cl} = ${f2(a * b / cl)}</span></div>`;
      lm = j === cl ? `<div class="landmark hit"><div class="big">${M(`<i>p</i> = <i>q</i>: &nbsp;<i>h</i> = <span class="fr"><span><i>p</i> + <i>q</i></span><span>2</span></span>`)}</div><div class="note">C is at the top of the semicircle, the altitude is a radius, and the geometric mean equals the arithmetic mean. Anywhere else, h is shorter than the radius: √(pq) &lt; (p + q)/2.</div></div>`
        : `<div class="landmark"><div class="big">${M(`<span class="fr"><span class="c3"><i>q</i></span><span class="c1"><i>h</i></span></span> = <span class="fr"><span class="c1"><i>h</i></span><span class="c2"><i>p</i></span></span>`)}</div><div class="note">△ADC ∼ △CDB (AA), so the altitude is the geometric mean of the two pieces. It is ${f2(hh)}, less than the radius ${fd(cl / 2)}.</div></div>`;
    } else if (mode === "legs") {
      const sA = E.sqA.map(X), sB = E.sqB.map(X), H_ = E.hyp.map(X), Dm = X({ x: q, y: -cl });
      poly(g, sA, alpha(C.violet, .16), C.violet, 1.5); poly(g, sB, alpha(C.violet, .16), C.violet, 1.5);
      poly(g, [H_[0], P.D, Dm, H_[3]], alpha(C.pink, .2), null); poly(g, [P.D, H_[1], H_[2], Dm], alpha(C.cyan, .2), null);
      poly(g, H_, null, alpha(C.text, .5), 1.5); d.line(P.D.x, P.D.y, Dm.x, Dm.y, C.amber, 1.5, [5, 4]);
      drawMain(); labels();
      const t = (pts, s, col) => { const q0 = cen(pts); d.text(s, q0.x, q0.y, { font: `600 13px ${F.mono}`, color: col, align: "center", base: "middle" }); };
      t(sA, "a² = " + fd(p * cl), C.violet); t(sB, "b² = " + fd(q * cl), C.violet);
      t([H_[0], P.D, Dm, H_[3]], "qc = " + fd(q * cl), C.pink); t([P.D, H_[1], H_[2], Dm], "pc = " + fd(p * cl), C.cyan);
      big = M(`<span class="c4"><i>a</i></span><sup>2</sup> + <span class="c4"><i>b</i></span><sup>2</sup> = <span class="c2"><i>p</i></span><i>c</i> + <span class="c3"><i>q</i></span><i>c</i> = <span class="num">${cl * cl}</span>`);
      rows = `<div class="row">${M(`<span class="c4"><i>a</i></span><sup>2</sup> = <span class="c2"><i>p</i></span><i>c</i> = ${pH} · ${cl} = ${qh(Q((2 * cl - j) * cl, 2))}`)}<span class="lbl">${M(`<i>a</i> = ${aH}`)} ≈ ${f2(a)}</span></div>
        <div class="row">${M(`<span class="c4"><i>b</i></span><sup>2</sup> = <span class="c3"><i>q</i></span><i>c</i> = ${qH} · ${cl} = ${qh(Q(j * cl, 2))}`)}<span class="lbl">${M(`<i>b</i> = ${bH}`)} ≈ ${f2(b)}</span></div>
        <div class="row">${M(`<span class="fr"><span><i>c</i></span><span><i>a</i></span></span> = <span class="fr"><span><i>a</i></span><span><i>p</i></span></span> = ${f2(cl / a)}, &nbsp;<span class="fr"><span><i>c</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>b</i></span><span><i>q</i></span></span> = ${f2(cl / b)}`)}<span class="lbl">from △ACB ∼ △CDB and △ACB ∼ △ADC</span></div>`;
      lm = `<div class="landmark"><div class="big">each square = one strip of ${M("<i>c</i><sup>2</sup>")}</div><div class="note">The square on leg a equals the cyan strip p × c, and the square on b equals the pink strip q × c. Together the strips fill the square on the hypotenuse: the Pythagorean Theorem.</div></div>`;
    } else {
      // three similar triangles, re-oriented with the right angle at bottom left
      const gap = 1.3, yb = -1.8 - Math.max(a, hh, p), u = ease(anim);
      const tri = [
        { v: [Cv, A, B], to: [{ x: 0, y: yb }, { x: b, y: yb }, { x: 0, y: yb + a }], ed: [C.violet, C.text, C.violet], nm: ["C", "A", "B"], tag: "△ACB" },
        { v: [D_, A, Cv], to: [{ x: b + gap, y: yb }, { x: b + gap + q, y: yb }, { x: b + gap, y: yb + hh }], ed: [C.pink, C.violet, C.amber], nm: ["D", "A", "C"], tag: "△ADC" },
        { v: [D_, Cv, B], to: [{ x: b + q + 2 * gap, y: yb }, { x: b + q + 2 * gap + hh, y: yb }, { x: b + q + 2 * gap, y: yb + p }], ed: [C.amber, C.violet, C.cyan], nm: ["D", "C", "B"], tag: "△CDB" }
      ];
      drawMain(.35); bSep.textContent = sep ? "Put back" : "Pull apart";
      tri.forEach((t, ti) => {
        const cur = t.v.map((s0, i) => X({ x: lerp(s0.x, t.to[i].x, u), y: lerp(s0.y, t.to[i].y, u) }));
        poly(g, cur, alpha([C.text, C.pink, C.cyan][ti], .1), null);
        // edges: R–Av, Av–Bv (hypotenuse), Bv–R
        d.line(cur[0].x, cur[0].y, cur[1].x, cur[1].y, t.ed[0], 3); d.line(cur[1].x, cur[1].y, cur[2].x, cur[2].y, t.ed[1], 3); d.line(cur[2].x, cur[2].y, cur[0].x, cur[0].y, t.ed[2], 3);
        rightMark(g, cur[0], cur[1], cur[2], 7, alpha(C.text, .7));
        arcAng(g, cur[1], cur[0], cur[2], 13, alpha(C.text, .6), 1.5, 1); arcAng(g, cur[2], cur[0], cur[1], 13, alpha(C.text, .6), 1.5, 2);
        if (u > .98) { const fo = `italic 600 13px ${F.math}`; d.text(t.nm[0], cur[0].x - 9, cur[0].y + 11, { font: fo, color: C.text, align: "center", base: "middle" }); d.text(t.nm[1], cur[1].x + 4, cur[1].y + 12, { font: fo, color: C.text, align: "center", base: "middle" }); d.text(t.nm[2], cur[2].x - 10, cur[2].y - 6, { font: fo, color: C.text, align: "center", base: "middle" }); }
      });
      labels();
      big = M(`△<i>ACB</i> ∼ △<i>ADC</i> ∼ △<i>CDB</i>`);
      rows = `<div class="row">${M(`<span class="fr"><span class="c4"><i>a</i></span><span class="c4"><i>b</i></span></span> = <span class="fr"><span class="c1"><i>h</i></span><span class="c3"><i>q</i></span></span> = <span class="fr"><span class="c2"><i>p</i></span><span class="c1"><i>h</i></span></span> = ${f2(a / b)}`)}<span class="lbl">vertical leg ÷ horizontal leg, the same in all three</span></div>
        <div class="row">${M(`<span class="fr"><span class="c3"><i>q</i></span><span class="c1"><i>h</i></span></span> = <span class="fr"><span class="c1"><i>h</i></span><span class="c2"><i>p</i></span></span> ⇒ <i>h</i><sup>2</sup> = <i>pq</i> = ${fd(p * q)}`)}<span class="lbl">from △ADC ∼ △CDB</span></div>
        <div class="row">${M(`m∠<i>A</i> = ${f1(Math.atan2(a, b) / RAD)}°, m∠<i>B</i> = ${f1(Math.atan2(b, a) / RAD)}°`)}<span class="lbl">one arc = ∠A, two arcs = ∠B in every copy</span></div>`;
      lm = `<div class="landmark${u > .98 ? " hit" : ""}"><div class="big">three copies of one shape</div><div class="note">△ADC shares ∠A with △ACB and △CDB shares ∠B; each also has a right angle, so all three are similar by AA. Turned to the same position, they differ only in size.</div></div>`;
    }
    k.setRO(`<div><h2>${mode === "alt" ? "Altitude to the hypotenuse" : mode === "legs" ? "Geometric mean of the legs" : "Right Triangle Altitude Theorem"}</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${big}</div></div>
      <div class="ro-rows">${rows}</div>${lm}<p class="narr">Drag C along the semicircle: the angle at C stays 90° (Thales), and p and q change in steps of ½.</p>`);
  });
};

/* ===================== g-pythagorean ===================== */
L["g-pythagorean"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "rearr", la = 3, lb = 4, anim = 0, goal = 0, sa = 6, sb = 8, sc = 10.5;
  const modesEl = k.modes([["rearr", "Rearrange"], ["sim", "Similar triangles"], ["cls", "Classify"]], mode, v => { mode = v; show(); });
  const s1 = k.slider(`<span class="c2"><i>a</i></span>`, 1, 9, 1, la, v => la = v);
  const s2 = k.slider(`<span class="c3"><i>b</i></span>`, 1, 9, 1, lb, v => lb = v);
  const bRe = k.button("Rearrange", () => { goal = goal ? 0 : 1; if (k.reduce) anim = goal; });
  const c1 = k.slider(`<span class="c2"><i>a</i></span>`, 1, 15, .5, sa, v => sa = v);
  const c2 = k.slider(`<span class="c3"><i>b</i></span>`, 1, 15, .5, sb, v => sb = v);
  const c3 = k.slider(`<span class="c1"><i>c</i></span>`, 1, 15, .5, sc, v => sc = v);
  const pre = k.select("Triple", [["", "choose…"], ["3,4,5", "3-4-5"], ["5,12,13", "5-12-13"], ["8,15,17", "8-15-17"], ["7,24,25", "7-24-25 (÷2)"], ["6,8,10", "6-8-10"]], "", v => { if (!v) return; let [x, y, z] = v.split(",").map(Number); if (z > 15) { x /= 2; y /= 2; z /= 2; } sa = x; sb = y; sc = z; c1.set(x); c2.set(y); c3.set(z); });
  function show(){ const r = mode === "rearr", s = mode === "sim", q = mode === "cls"; showEl(s1.el, r || s); showEl(s2.el, r || s); bRe.style.display = r ? "" : "none"; [c1, c2, c3].forEach(x => showEl(x.el, q)); showEl(pre.el, q); }
  show();
  const sq = n => fd(n * n);
  k.loop(dt => {
    if (anim !== goal) anim = anim < goal ? Math.min(goal, anim + dt / 2.4) : Math.max(goal, anim - dt / 2.4);
    c.begin(); const { w, h } = c; const top = topBelow(modesEl);
    const lf = `italic 600 15px ${F.math}`, sf = `600 12px ${F.mono}`;
    const a = la, b = lb, c2n = a * a + b * b, cH = radH(c2n);
    if (mode === "rearr") {
      const s = a + b;
      const Fz = fitBox([{ x: -.4, y: -.4 }, { x: s + .4, y: s + .4 }], { l: 20, t: top + 12, r: w - 20, b: h - 28 }), X = Fz.X;
      const T = [ [{ x: 0, y: 0 }, { x: a, y: 0 }, { x: 0, y: b }], [{ x: s, y: 0 }, { x: s, y: a }, { x: a, y: 0 }], [{ x: s, y: s }, { x: b, y: s }, { x: s, y: a }], [{ x: 0, y: s }, { x: 0, y: b }, { x: b, y: s }] ];
      const MV = [{ x: 0, y: a }, { x: 0, y: 0 }, { x: -b, y: 0 }, { x: a, y: -b }];
      const order = [0, -1, 1, 2];   // which third of the animation each triangle moves in (−1 = stays)
      const outer = [{ x: 0, y: 0 }, { x: s, y: 0 }, { x: s, y: s }, { x: 0, y: s }].map(X);
      // regions left uncovered
      const st0 = anim < .02, st1 = anim > .98;
      if (st0 || !st1) poly(g, [{ x: a, y: 0 }, { x: s, y: a }, { x: b, y: s }, { x: 0, y: b }].map(X), alpha(C.amber, st0 ? .22 : .08 * (1 - anim)), null);
      if (st1 || !st0) { poly(g, [{ x: 0, y: 0 }, { x: a, y: 0 }, { x: a, y: a }, { x: 0, y: a }].map(X), alpha(C.cyan, st1 ? .25 : .08 * anim), null); poly(g, [{ x: a, y: a }, { x: s, y: a }, { x: s, y: s }, { x: a, y: s }].map(X), alpha(C.pink, st1 ? .25 : .08 * anim), null); }
      poly(g, outer, null, alpha(C.text, .55), 2);
      T.forEach((t, i) => {
        const o = order[i], u = o < 0 ? 0 : ease(clamp(anim * 3 - o, 0, 1));
        const P = t.map(p => X({ x: p.x + MV[i].x * u, y: p.y + MV[i].y * u }));
        poly(g, P, alpha(C.text, .14), null);
        d.line(P[0].x, P[0].y, P[1].x, P[1].y, C.cyan, 3); d.line(P[0].x, P[0].y, P[2].x, P[2].y, C.pink, 3); d.line(P[1].x, P[1].y, P[2].x, P[2].y, C.amber, 3);
        rightMark(g, P[0], P[1], P[2], Math.min(9, Fz.s * .35), alpha(C.text, .7));
      });
      const lab = (s_, p, col) => { const q = X(p); d.text(s_, q.x, q.y, { font: `italic 600 ${Math.round(clamp(Fz.s * .55, 13, 20))}px ${F.math}`, color: col, align: "center", base: "middle" }); };
      if (st0) lab("c²", { x: s / 2, y: s / 2 }, C.amber);
      if (st1) { lab("a²", { x: a / 2, y: a / 2 }, C.cyan); lab("b²", { x: a + b / 2, y: a + b / 2 }, C.pink); }
      // side labels on the outer square
      const ob = X({ x: a / 2, y: 0 }), ob2 = X({ x: a + b / 2, y: 0 });
      d.text("a", ob.x, ob.y + 14, { font: lf, color: C.cyan, align: "center", base: "middle" }); d.text("b", ob2.x, ob2.y + 14, { font: lf, color: C.pink, align: "center", base: "middle" });
      bRe.textContent = goal ? "Back" : "Rearrange";
      const lm = st0 ? `<div class="landmark"><div class="big">${M(`(<i>a</i> + <i>b</i>)<sup>2</sup> = 4 · ½<i>ab</i> + <span class="c1"><i>c</i></span><sup>2</sup>`)}</div><div class="note">Four copies of the right triangle sit in the corners of a square of side a + b. The hole in the middle is a square of side c: each of its corners is 180° minus the two acute angles, and those add to 90°. Press Rearrange.</div></div>`
        : st1 ? `<div class="landmark hit"><div class="big">${M(`<span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup>`)}</div><div class="note">The same four triangles now form two rectangles, leaving squares of areas a² and b². The big square and the triangles did not change, so the uncovered area did not change either.</div></div>`
        : `<div class="landmark"><div class="big">sliding the triangles</div><div class="note">Each triangle moves by a translation, so its area is kept.</div></div>`;
      k.setRO(`<div><h2>Proof by rearrangement</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<span class="c2">${a * a}</span> + <span class="c3">${b * b}</span> = <span class="num c1">${c2n}</span>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<span class="c1"><i>c</i></span> = √${c2n}${cH !== "√" + c2n ? " = " + cH : ""}`)}<span class="lbl">${Number.isInteger(Math.sqrt(c2n)) ? "a Pythagorean triple" : "≈ " + f2(Math.sqrt(c2n))}</span></div>
        <div class="row">${M(`(<i>a</i> + <i>b</i>)<sup>2</sup> = ${(a + b) ** 2}`)}<span class="lbl">area of the big square</span></div>
        <div class="row">${M(`4 · ½<i>ab</i> = ${2 * a * b}`)}<span class="lbl">the four triangles</span></div>
        <div class="row">${M(`${(a + b) ** 2} − ${2 * a * b} = ${c2n}`)}<span class="lbl">what is left over, in both arrangements</span></div></div>${lm}
        <p class="narr">Change a and b, then rearrange again: the argument never depends on the numbers.</p>`);
      return;
    }
    if (mode === "sim") {
      const cc = Math.sqrt(c2n), ci = Number.isInteger(cc) ? cc : 0, p = a * a / cc, q = b * b / cc, hh = a * b / cc;
      const A = { x: 0, y: 0 }, B = { x: cc, y: 0 }, D_ = { x: q, y: 0 }, Cv = { x: q, y: hh };
      const E = euclidPts(A, B, Cv);
      const Fz = fitBox(E.sqA.concat(E.sqB, E.hyp), { l: 20, t: top + 12, r: w - 20, b: h - 28 }), X = Fz.X;
      const P = { A: X(A), B: X(B), D: X(D_), C: X(Cv) }, Dm = X({ x: q, y: -cc });
      const sA = E.sqA.map(X), sB = E.sqB.map(X), H_ = E.hyp.map(X);
      poly(g, sA, alpha(C.cyan, .16), C.cyan, 1.5); poly(g, sB, alpha(C.pink, .16), C.pink, 1.5);
      poly(g, [H_[0], P.D, Dm, H_[3]], alpha(C.pink, .16), null); poly(g, [P.D, H_[1], H_[2], Dm], alpha(C.cyan, .16), null);
      poly(g, H_, null, C.amber, 2); d.line(P.D.x, P.D.y, Dm.x, Dm.y, C.violet, 1.5, [5, 4]);
      d.line(P.C.x, P.C.y, P.B.x, P.B.y, C.cyan, 3.5); d.line(P.A.x, P.A.y, P.C.x, P.C.y, C.pink, 3.5); d.line(P.A.x, P.A.y, P.B.x, P.B.y, C.amber, 3.5);
      d.line(P.C.x, P.C.y, P.D.x, P.D.y, C.violet, 2.5); rightMark(g, P.C, P.A, P.B, 8, alpha(C.text, .7)); rightMark(g, P.D, P.B, P.C, 7, C.violet);
      const t = (pts, s_, col) => { const q0 = cen(pts); d.text(s_, q0.x, q0.y, { font: `600 12px ${F.mono}`, color: col, align: "center", base: "middle" }); };
      t(sA, "a² = " + (a * a), C.cyan); t(sB, "b² = " + (b * b), C.pink); t([P.D, H_[1], H_[2], Dm], "pc = " + (a * a), C.cyan); t([H_[0], P.D, Dm, H_[3]], "qc = " + (b * b), C.pink);
      const ce = cen([P.A, P.B, P.C]);
      labAway(d, "A", P.A, ce, C.text, lf, 14); labAway(d, "B", P.B, ce, C.text, lf, 14); labAway(d, "C", P.C, P.D, C.text, lf, 14); d.text("D", P.D.x + 9, P.D.y + 13, { font: lf, color: C.violet, align: "center", base: "middle" });
      const pq = Q(a * a * a * a, c2n);   // p·c = a², with p = a²/c
      k.setRO(`<div><h2>Proof by similar triangles</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(`<span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <i>c</i>(<i>p</i> + <i>q</i>) = <span class="c1"><i>c</i></span><sup>2</sup>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<i>p</i> = <span class="fr"><span><i>a</i><sup>2</sup></span><span><i>c</i></span></span> ${ci ? "= " + qh(Q(a * a, ci)) : "≈ " + f2(p)}, &nbsp;<i>q</i> = <span class="fr"><span><i>b</i><sup>2</sup></span><span><i>c</i></span></span> ${ci ? "= " + qh(Q(b * b, ci)) : "≈ " + f2(q)}`)}<span class="lbl">c/a = a/p and c/b = b/q from the similar triangles</span></div>
        <div class="row">${M(`<span class="c2">${a * a}</span> + <span class="c3">${b * b}</span> = <span class="c1">${c2n}</span>`)}<span class="lbl">${M(`<i>c</i> = ${cH}`)}${Number.isInteger(Math.sqrt(c2n)) ? "" : " ≈ " + f2(cc)}</span></div>
        <div class="row">${M(`<span class="c4"><i>h</i></span> = <span class="fr"><span><i>ab</i></span><span><i>c</i></span></span> ≈ ${f2(hh)}`)}<span class="lbl">the altitude (violet)</span></div></div>
        <div class="landmark"><div class="big">two strips make ${M("<i>c</i><sup>2</sup>")}</div><div class="note">The altitude cuts △ACB into △CDB and △ADC, both similar to it by AA. So a² = pc (cyan strip) and b² = qc (pink strip), and the strips fill the square on c.</div></div>
        <p class="narr">Change the legs: the strips resize but always match the squares on the legs.</p>`);
      void pq; return;
    }
    // classify
    const S = [{ n: "a", v: sa, col: C.cyan, cl: "c2" }, { n: "b", v: sb, col: C.pink, cl: "c3" }, { n: "c", v: sc, col: C.amber, cl: "c1" }];
    const ord = S.slice().sort((x, y) => x.v - y.v), [s0, s1_, sL] = ord;
    const ok = s0.v + s1_.v > sL.v + 1e-9;
    const L2 = sL.v * sL.v, sum = s0.v * s0.v + s1_.v * s1_.v;
    const kind = !ok ? "none" : Math.abs(L2 - sum) < 1e-9 ? "right" : L2 < sum ? "acute" : "obtuse";
    const barH = 54, area = { l: 56, t: top + 26, r: w - 56, b: h - 30 - barH - 22 };
    // triangle: longest side as base from (0,0) to (L,0); s0 from left end, s1 from right end
    const L = sL.v, x = (s0.v * s0.v - s1_.v * s1_.v + L * L) / (2 * L), y2 = s0.v * s0.v - x * x;
    const apex = ok ? { x, y: Math.sqrt(Math.max(0, y2)) } : null;
    const Fz = fitBox(ok ? [{ x: 0, y: 0 }, { x: L, y: 0 }, apex, { x: L / 2, y: L / 2 }] : [{ x: -s0.v, y: 0 }, { x: L + s1_.v, y: 0 }, { x: 0, y: Math.max(s0.v, s1_.v) }], area), X = Fz.X;
    const P0 = X({ x: 0, y: 0 }), P1 = X({ x: L, y: 0 });
    d.line(P0.x, P0.y, P1.x, P1.y, sL.col, 3.5); labSide(d, sL.n + " = " + fd(L), P0, P1, { x: (P0.x + P1.x) / 2, y: P0.y - 20 }, sL.col, sf, 14);
    if (ok) {
      const Pa = X(apex);
      poly(g, [P0, P1, Pa], alpha(kind === "right" ? C.green : kind === "acute" ? C.cyan : C.pink, .08), null);
      d.line(P0.x, P0.y, Pa.x, Pa.y, s0.col, 3.5); d.line(P1.x, P1.y, Pa.x, Pa.y, s1_.col, 3.5);
      const ce = cen([P0, P1, Pa]);
      labSide(d, s0.n + " = " + fd(s0.v), P0, Pa, ce, s0.col, sf, 14); labSide(d, s1_.n + " = " + fd(s1_.v), P1, Pa, ce, s1_.col, sf, 14);
      const ang = angAt(apex, { x: 0, y: 0 }, { x: L, y: 0 });
      if (kind === "right") rightMark(g, Pa, P0, P1, 11, C.green); else arcAng(g, Pa, P0, P1, 16, kind === "acute" ? C.cyan : C.pink, 2);
      d.text(f1(ang) + "°", Pa.x, Pa.y - 16, { font: `600 13px ${F.mono}`, color: C.text, align: "center", base: "middle" });
      // dashed right-angle reference: the apex position that would give 90° (on the circle with diameter the base)
      const O = X({ x: L / 2, y: 0 }); g.save(); g.strokeStyle = alpha(C.green, .45); g.lineWidth = 1.2; g.setLineDash([4, 4]); g.beginPath(); g.arc(O.x, O.y, L / 2 * Fz.s, Math.PI, 2 * Math.PI); g.stroke(); g.restore();
    } else {
      // arms that cannot meet
      g.save(); g.strokeStyle = alpha(s0.col, .5); g.lineWidth = 1.3; g.beginPath(); g.arc(P0.x, P0.y, s0.v * Fz.s, Math.PI, 2 * Math.PI); g.stroke();
      g.strokeStyle = alpha(s1_.col, .5); g.beginPath(); g.arc(P1.x, P1.y, s1_.v * Fz.s, Math.PI, 2 * Math.PI); g.stroke(); g.restore();
      d.line(P0.x, P0.y, P0.x, P0.y - s0.v * Fz.s, s0.col, 3); d.line(P1.x, P1.y, P1.x, P1.y - s1_.v * Fz.s, s1_.col, 3);
    }
    // comparison bars: longest² against the sum of the other two squares
    const bx0 = 24, bw = w - 48, mx = Math.max(L2, sum) || 1, by = h - 30 - barH;
    const bar = (y, parts, label) => { let x0 = bx0; parts.forEach(([v, col]) => { const ww = v / mx * bw; d.rect(x0, y, ww, 18, alpha(col, .55), col, 1); x0 += ww; }); d.text(label, bx0, y - 4, { font: `11px ${F.mono}`, color: C.muted }); };
    bar(by + 6, [[L2, sL.col]], `${sL.n}² = ${sq(L)}`); bar(by + 40, [[s0.v * s0.v, s0.col], [s1_.v * s1_.v, s1_.col]], `${s0.n}² + ${s1_.n}² = ${sq(s0.v)} + ${sq(s1_.v)} = ${fd(sum)}`);
    const rel = Math.abs(L2 - sum) < 1e-9 ? "=" : L2 < sum ? "&lt;" : "&gt;";
    const word = { none: `<span class="c3">not a triangle</span>`, right: `<span class="c5">right</span>`, acute: `<span class="c2">acute</span>`, obtuse: `<span class="c3">obtuse</span>` }[kind];
    const note = !ok ? `${fd(s0.v)} + ${fd(s1_.v)} ${Math.abs(s0.v + s1_.v - L) < 1e-9 ? "=" : "&lt;"} ${fd(L)}: the two shorter sides cannot reach each other${Math.abs(s0.v + s1_.v - L) < 1e-9 ? " except flat on the base (degenerate)" : ""}. The Triangle Inequality fails, so there is nothing to classify.`
      : kind === "right" ? `By the converse of the Pythagorean Theorem the angle opposite ${sL.n} is exactly 90°. The apex sits on the dashed semicircle on ${sL.n}.`
      : kind === "acute" ? `${sL.n}² is less than the sum, so the angle opposite ${sL.n} is less than 90° and, as ${sL.n} is the longest side, every angle is acute. The apex is outside the dashed semicircle.`
      : `${sL.n}² exceeds the sum, so the angle opposite ${sL.n} is greater than 90°. The apex is inside the dashed semicircle.`;
    k.setRO(`<div><h2>Classify by sides</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${word}</div></div>
      <div class="ro-rows"><div class="row">${M(`<span class="${s0.cl}">${fd(s0.v)}</span> + <span class="${s1_.cl}">${fd(s1_.v)}</span> ${ok ? "&gt;" : "≤"} <span class="${sL.cl}">${fd(L)}</span>`)}<span class="lbl">Triangle Inequality ${ok ? "holds" : "fails"}</span></div>
      ${ok ? `<div class="row">${M(`<span class="${sL.cl}">${sq(L)}</span> ${rel} <span class="${s0.cl}">${sq(s0.v)}</span> + <span class="${s1_.cl}">${sq(s1_.v)}</span> = ${fd(sum)}`)}<span class="lbl">longest side squared vs the other two</span></div>` : ""}
      ${sL.n !== "c" ? `<div class="row">${M(`<span class="${sL.cl}"><i>${sL.n}</i></span> is longest`)}<span class="lbl">so it plays the role of c</span></div>` : ""}</div>
      <div class="landmark${kind === "right" || kind === "none" ? " hit" : ""}"><div class="big">${M(`<i>${sL.n}</i><sup>2</sup> ${ok ? rel : "?"} <i>${s0.n}</i><sup>2</sup> + <i>${s1_.n}</i><sup>2</sup>`)}</div><div class="note">${note}</div></div>
      <p class="narr">Pick a triple, then nudge one side by ½ to tip the triangle into acute or obtuse.</p>`);
  });
};
})();
