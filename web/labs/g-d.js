/* ============ Labs: Geometry, writer D (polygons, centres, triangle inequalities, quadrilaterals, coordinate proofs) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const ng = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const Q = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const qt = q => q.d === 1 ? ng(q.n) : ng(q.n) + "/" + q.d;
const qh = (q, cls = "") => { const s = q.d === 1 ? ng(q.n) : `${q.n < 0 ? "−" : ""}<span class="fr"><span>${Math.abs(q.n)}</span><span>${q.d}</span></span>`; return cls ? `<span class="${cls}">${s}</span>` : s; };
const qeq = (a, b) => a.n === b.n && a.d === b.d;
function rad(N){ let a = 1, b = N; for (let f = 2; f * f <= b; f++) while (b % (f * f) === 0) { b /= f * f; a *= f; } return { a, b }; }
const radT = N => { if (N === 0) return "0"; const { a, b } = rad(N); return b === 1 ? String(a) : (a === 1 ? "" : a) + "√" + b; };
const DEG = 180 / Math.PI;
const sub = (p, q) => ({ x: p.x - q.x, y: p.y - q.y });
const crs = (u, v) => u.x * v.y - u.y * v.x, dot = (u, v) => u.x * v.x + u.y * v.y, len2 = u => u.x * u.x + u.y * u.y;
const sum3 = (p, q, r) => [p, q, r].map((v, i) => i && v < 0 ? `(${ng(v)})` : ng(v)).join(" + ");
const hide = (ctl, on) => { const e = ctl.el ? ctl.el.closest(".ctl") : ctl; if (e) e.style.display = on ? "none" : ""; };

/* angle arc at V between rays to P1 and P2 (screen coords), the short way */
function arcAt(g, V, P1, P2, r, color, lw = 2, fill){
  const a1 = Math.atan2(P1.y - V.y, P1.x - V.x), a2 = Math.atan2(P2.y - V.y, P2.x - V.x);
  let dd = a2 - a1; while (dd <= -Math.PI) dd += 2 * Math.PI; while (dd > Math.PI) dd -= 2 * Math.PI;
  g.save();
  if (fill) { g.fillStyle = fill; g.beginPath(); g.moveTo(V.x, V.y); g.arc(V.x, V.y, r, a1, a1 + dd, dd < 0); g.closePath(); g.fill(); }
  g.strokeStyle = color; g.lineWidth = lw; g.beginPath(); g.arc(V.x, V.y, r, a1, a1 + dd, dd < 0); g.stroke(); g.restore();
  return a1 + dd / 2;   // bisector direction
}
function rightMark(g, V, P1, P2, s, color){
  const u = sub(P1, V), v = sub(P2, V), lu = Math.hypot(u.x, u.y), lv = Math.hypot(v.x, v.y); if (lu < 1 || lv < 1) return;
  const a = { x: u.x / lu * s, y: u.y / lu * s }, b = { x: v.x / lv * s, y: v.y / lv * s };
  g.save(); g.strokeStyle = color; g.lineWidth = 1.6; g.beginPath(); g.moveTo(V.x + a.x, V.y + a.y); g.lineTo(V.x + a.x + b.x, V.y + a.y + b.y); g.lineTo(V.x + b.x, V.y + b.y); g.stroke(); g.restore();
}
function ticks(g, P1, P2, n, color, t = 0.5){
  if (!n) return; const dx = P2.x - P1.x, dy = P2.y - P1.y, l = Math.hypot(dx, dy); if (l < 1) return;
  const ux = dx / l, uy = dy / l, nx = -uy, ny = ux, mx = P1.x + dx * t, my = P1.y + dy * t;
  g.save(); g.strokeStyle = color; g.lineWidth = 2;
  for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 5; g.beginPath(); g.moveTo(mx + ux * o - nx * 6, my + uy * o - ny * 6); g.lineTo(mx + ux * o + nx * 6, my + uy * o + ny * 6); g.stroke(); }
  g.restore();
}
function chevrons(g, P1, P2, n, color){
  const dx = P2.x - P1.x, dy = P2.y - P1.y, l = Math.hypot(dx, dy); if (l < 1) return;
  const ux = dx / l, uy = dy / l, nx = -uy, ny = ux, mx = (P1.x + P2.x) / 2, my = (P1.y + P2.y) / 2;
  g.save(); g.strokeStyle = color; g.lineWidth = 2;
  for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 7 + 3; const tx = mx + ux * o, ty = my + uy * o; g.beginPath(); g.moveTo(tx - ux * 7 + nx * 5, ty - uy * 7 + ny * 5); g.lineTo(tx, ty); g.lineTo(tx - ux * 7 - nx * 5, ty - uy * 7 - ny * 5); g.stroke(); }
  g.restore();
}
/* label in a dark box */
function tag(k, d, s, x, y, color, o = {}){
  const f = o.font || `600 12px ${k.F.mono}`, w = d.width(s, f), al = o.align || "center";
  let x0 = al === "center" ? x - w / 2 : al === "right" ? x - w : x;
  if (d.__w) x0 = Math.max(6, Math.min(d.__w - w - 6, x0));
  d.rr(x0 - 4, y - 9, w + 8, 18, 4, k.alpha(k.C.ink, .82), o.box || null, 1.2);
  d.text(s, x0, y, { font: f, color, base: "middle" });
}
/* drag integer points on a plot */
function dragInt(c, getP, pts, onMove){
  let cur = -1; c.cv.style.cursor = "grab";
  c.cv.addEventListener("pointerdown", e => { const P = getP(); if (!P) return; const p = c.xy(e); let best = -1, bd = 22;
    pts().forEach((q, i) => { const dd = Math.hypot(p.x - P.X(q.x), p.y - P.Y(q.y)); if (dd < bd) { bd = dd; best = i; } });
    if (best < 0) return; cur = best; c.cv.setPointerCapture(e.pointerId); c.cv.style.cursor = "grabbing"; });
  c.cv.addEventListener("pointermove", e => { if (cur < 0) return; const P = getP(); const p = c.xy(e), v = P.inv(p.x, p.y), q = pts()[cur];
    const nx = clamp(Math.round(v.x), Math.ceil(P.xmin), Math.floor(P.xmax)), ny = clamp(Math.round(v.y), Math.ceil(P.ymin), Math.floor(P.ymax));
    if (nx !== q.x || ny !== q.y) { q.x = nx; q.y = ny; if (onMove) onMove(cur); } });
  const up = () => { cur = -1; c.cv.style.cursor = "grab"; }; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
}
const keepIn = (P, pts) => pts.forEach(q => { q.x = clamp(q.x, Math.ceil(P.xmin), Math.floor(P.xmax)); q.y = clamp(q.y, Math.ceil(P.ymin), Math.floor(P.ymax)); });

/* =============== g-polygons =============== */
L["g-polygons"] = k => {
  const { C, F, M, fmt } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const NAME = { 3: "triangle", 4: "quadrilateral", 5: "pentagon", 6: "hexagon", 7: "heptagon", 8: "octagon", 9: "nonagon", 10: "decagon", 11: "hendecagon", 12: "dodecagon" };
  let n = 6, mode = "tri", jit = new Array(12).fill(0), geo = null, dragI = -1;
  const base = i => Math.PI / 2 + Math.PI / n + i * 2 * Math.PI / n;
  const th = () => { const o = []; for (let i = 0; i < n; i++) o.push(base(i) + jit[i]); return o; };
  const isReg = () => jit.slice(0, n).every(v => Math.abs(v) < 1e-9);
  k.modes([["tri", "Triangulate"], ["ext", "Exterior walk"]], mode, v => { mode = v; st.finish(); });
  k.slider(`<span class="c3"><i>n</i></span>`, 3, 12, 1, n, v => { n = v; jit.fill(0); st.finish(); });
  k.button("Regular", () => { jit.fill(0); }, "btn ghost");
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  k.button("Irregular", () => { const step = 2 * Math.PI / n; for (let i = 0; i < n; i++) jit[i] = (rnd() - .5) * step * .7; }, "btn ghost");
  const st = k.stepper(() => mode === "tri" ? n - 2 : n, () => {}, { ms: 750 });
  st.finish();
  c.cv.addEventListener("pointerdown", e => { if (!geo) return; const p = c.xy(e); let best = -1, bd = 22;
    geo.V.forEach((v, i) => { const dd = Math.hypot(p.x - v.x, p.y - v.y); if (dd < bd) { bd = dd; best = i; } });
    if (best >= 0) { dragI = best; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (dragI < 0 || !geo) return; const p = c.xy(e); const t = th();
    let a = Math.atan2(p.y - geo.cy, p.x - geo.cx); const lo = (dragI === 0 ? t[n - 1] - 2 * Math.PI : t[dragI - 1]) + .14, hi = (dragI === n - 1 ? t[0] + 2 * Math.PI : t[dragI + 1]) - .14;
    while (a < lo - Math.PI) a += 2 * Math.PI; while (a > hi + Math.PI) a -= 2 * Math.PI;
    if (a < lo || a > hi) { const mid = (lo + hi) / 2; let a2 = a; while (a2 < mid - Math.PI) a2 += 2 * Math.PI; while (a2 > mid + Math.PI) a2 -= 2 * Math.PI; a = clamp(a2, lo, hi); }
    jit[dragI] = a - base(dragI); });
  const up = () => dragI = -1; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  c.cv.style.cursor = "grab";
  k.loop(() => {
    c.begin(); const { w, h } = c; c.d.__w = c.w;
    const top = w < 420 ? 56 : 50, bot = 34, rd = clamp(Math.min(w, h) * .11, 28, 54), wide = w > 560;
    const cx = wide && mode === "ext" ? (w - 2 * rd - 30) / 2 : w / 2;
    const availW = wide && mode === "ext" ? w - 2 * rd - 40 : w - 16;
    let R = Math.max(40, Math.min(availW / 2 - 30, (h - top - bot) / 2 - 22)); if (mode === "ext") R *= .8;
    const cy = top + (h - top - bot) / 2;
    const t = th(), V = t.map(a => ({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) }));
    geo = { cx, cy, R, V };
    const kk = st.k, S = (n - 2) * 180;
    // interior angles
    const intA = V.map((v, i) => { const p = V[(i + n - 1) % n], q = V[(i + 1) % n]; const u = sub(p, v), z = sub(q, v); return Math.acos(clamp(dot(u, z) / Math.sqrt(len2(u) * len2(z)), -1, 1)) * DEG; });
    const extA = intA.map(a => 180 - a);
    d.circle(cx, cy, R, null, k.alpha(C.line2, .5), 1);
    // polygon fill
    g.save(); g.beginPath(); V.forEach((v, i) => i ? g.lineTo(v.x, v.y) : g.moveTo(v.x, v.y)); g.closePath(); g.fillStyle = k.alpha(C.panel3 || C.panel2, .5); g.fill(); g.restore();
    const showLab = n <= 8 && R > 80, labs = [];
    if (mode === "tri") {
      for (let i = 1; i <= n - 2; i++) { if (i > kk) break; const T = [V[0], V[i], V[i + 1]]; g.save(); g.beginPath(); T.forEach((v, j) => j ? g.lineTo(v.x, v.y) : g.moveTo(v.x, v.y)); g.closePath(); g.fillStyle = k.alpha(C.violet, i % 2 ? .30 : .16); g.fill(); g.restore();
        if (Math.abs(crs(sub(T[1], T[0]), sub(T[2], T[0]))) > 2400) { const gx = (T[0].x + T[1].x + T[2].x) / 3, gy = (T[0].y + T[1].y + T[2].y) / 3; d.text(String(i), gx, gy, { font: `600 ${n > 9 ? 11 : 13}px ${F.mono}`, color: C.violet, align: "center", base: "middle" }); } }
      for (let i = 2; i <= n - 2; i++) d.line(V[0].x, V[0].y, V[i].x, V[i].y, k.alpha(C.violet, i <= kk ? .95 : .3), 1.8, i <= kk ? null : [5, 5]);
      const ra = clamp(R * .15, 11, 22);
      V.forEach((v, i) => { const p = V[(i + n - 1) % n], q = V[(i + 1) % n]; const bis = arcAt(g, v, p, q, ra, C.amber, 2, k.alpha(C.amber, .18));
        if (showLab) labs.push([fmt(intA[i], 1) + "°", v.x + Math.cos(bis) * (ra + 22), v.y + Math.sin(bis) * (ra + 22), C.amber]); });
    }
    // sides
    for (let i = 0; i < n; i++) { const a = V[i], b = V[(i + 1) % n]; const walked = mode === "ext" && i < kk; d.line(a.x, a.y, b.x, b.y, mode === "ext" ? (walked ? C.text : C.muted) : C.text, walked ? 2.6 : 2); }
    if (mode === "ext") {
      const ext = R * .38, re = clamp(R * .2, 13, 26);
      for (let j = 1; j <= n; j++) { const i = j % n, v = V[i], p = V[(i + n - 1) % n], q = V[(i + 1) % n];
        const u = sub(v, p), lu = Math.hypot(u.x, u.y), e = { x: v.x + u.x / lu * ext, y: v.y + u.y / lu * ext };
        const on = j <= kk, cur = j === kk;
        d.line(v.x, v.y, e.x, e.y, k.alpha(C.cyan, on ? .9 : .35), 1.5, [5, 4]);
        const bis = arcAt(g, v, e, q, re, cur ? C.amber : k.alpha(C.cyan, on ? 1 : .35), cur ? 2.6 : 2, on ? k.alpha(cur ? C.amber : C.cyan, .22) : null);
        if (showLab && on) labs.push([fmt(extA[i], 1) + "°", v.x + Math.cos(bis) * (re + 22), v.y + Math.sin(bis) * (re + 22), cur ? C.amber : C.cyan]); }
      // walker arrow
      const at = V[kk % n], nx = V[(kk + 1) % n], dir = sub(nx, at), ld = Math.hypot(dir.x, dir.y);
      d.arrow(at.x, at.y, at.x + dir.x / ld * Math.min(R * .45, ld * .6), at.y + dir.y / ld * Math.min(R * .45, ld * .6), C.amber, 3);
      // dial
      const dx = w - rd - 14, dy = h - rd - 14; d.circle(dx, dy, rd, k.alpha(C.ink, .85), C.line2, 1);
      let a0 = -Math.PI / 2, tot = 0;
      for (let j = 1; j <= kk; j++) { const e = extA[j % n] / DEG; g.save(); g.beginPath(); g.moveTo(dx, dy); g.arc(dx, dy, rd - 3, a0, a0 + e); g.closePath(); g.fillStyle = k.alpha(j === kk ? C.amber : C.cyan, j % 2 ? .6 : .38); g.fill(); g.strokeStyle = C.ink; g.lineWidth = 1; g.stroke(); g.restore(); a0 += e; tot += extA[j % n]; }
      d.text(fmt(tot, 1) + "°", dx, dy, { font: `600 ${rd > 40 ? 13 : 11}px ${F.mono}`, color: C.text, align: "center", base: "middle" });
      d.text("total turn", dx, dy - rd - 7, { font: `11px ${F.sans}`, color: C.faint, align: "center" });
    }
    V.forEach((v, i) => d.circle(v.x, v.y, i === dragI ? 7 : 5.5, i === 0 && mode === "tri" ? C.violet : C.text, C.ink, 1.5));
    labs.forEach(([t_, x_, y_, col]) => tag(k, d, t_, x_, y_, col, { font: `600 11px ${F.mono}` }));
    // caption
    const cap = mode === "tri" ? `n = ${n}   ·   ${n} − 2 = ${n - 2} triangle${n - 2 === 1 ? "" : "s"}` : `n = ${n}   ·   ${n} exterior angles`;
    d.text(cap, 12, h - 12, { font: `600 13px ${F.mono}`, color: C.pink });
    const reg = isReg(), nm = NAME[n], each = Q(S, n);
    const eachH = each.d === 1 ? `${each.n}°` : `${qh(each)}° ≈ ${fmt(S / n, 1)}°`;
    const extQ = Q(360, n), extH = extQ.d === 1 ? `${extQ.n}°` : `${qh(extQ)}° ≈ ${fmt(360 / n, 1)}°`;
    const meas = intA.reduce((s, a) => s + a, 0);
    if (mode === "tri") {
      let lm;
      if (n === 3) lm = `<div class="landmark hit"><div class="big">a triangle is 1 triangle: 180°</div><div class="note">With no diagonals, the formula gives (3 − 2) · 180° = 180°, the Triangle Angle-Sum Theorem itself.</div></div>`;
      else if (reg && 360 % (180 - S / n) === 0 && [3, 4, 6].includes(n)) lm = `<div class="landmark hit"><div class="big">regular ${nm}s tile the plane</div><div class="note">Each angle is ${each.n}°, and ${360 / each.n} of them fill the 360° around a point exactly, so copies fit with no gaps.</div></div>`;
      else if (!reg) lm = `<div class="landmark"><div class="big">different angles, same sum</div><div class="note">The angles changed when you moved the vertices, but the ${n - 2} triangles still fill the ${nm}, so the total stays ${S}°.</div></div>`;
      else lm = `<div class="landmark"><div class="big">${n - 2} triangles × 180°</div><div class="note">The ${n - 3} diagonal${n - 3 === 1 ? "" : "s"} from the violet vertex never cross, so the triangles' angles exactly fill the ${nm}'s corners.</div></div>`;
      k.setRO(`<div><h2>Interior angle sum</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(`(<span class="c3">${n}</span> − 2) · 180° = <span class="c1">${S}°</span>`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`<span class="c3"><i>n</i> = ${n}</span>`)}<span class="lbl">sides of the ${nm}</span></div>
          <div class="row">${M(`<span class="c4">${kk}</span> · 180° = ${kk * 180}°`)}<span class="lbl">triangles shaded so far (of ${n - 2})</span></div>
          <div class="row">${M(`Σ = <span class="c1">${fmt(meas, 1)}°</span>`)}<span class="lbl">the amber angles measured and added</span></div>
          <div class="row">${M(`${reg ? "each" : "if regular"} = ${eachH}`)}<span class="lbl">${S}° ÷ ${n}, when all angles are equal</span></div>
        </div>${lm}<p class="narr">Drag a vertex around the circle, or press Play to cut the ${nm} into triangles one at a time.</p>`);
    } else {
      const tot = extA.slice(0, n).reduce((s, a, i) => s, 0);
      let turned = 0; for (let j = 1; j <= kk; j++) turned += extA[j % n];
      const done = kk === n;
      const lm = done ? `<div class="landmark hit"><div class="big">one full turn: 360°</div><div class="note">Back at the start facing the same way, the walker has turned exactly once around, whatever the shape or number of sides.</div></div>`
        : `<div class="landmark"><div class="big">turn at each corner</div><div class="note">At each vertex the walker turns by the exterior angle, 180° minus the interior angle (a linear pair). Press Play to walk the whole way round.</div></div>`;
      void tot;
      k.setRO(`<div><h2>Exterior angle sum</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(`Σ ext = <span class="c2">${done ? "360" : fmt(turned, 1)}°</span>`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`<span class="c3"><i>n</i> = ${n}</span>`)}<span class="lbl">corners to turn at</span></div>
          <div class="row">${M(`${kk} of ${n}`)}<span class="lbl">turns made so far</span></div>
          ${kk > 0 ? `<div class="row">${M(`180° − ${fmt(intA[kk % n], 1)}° = <span class="c1">${fmt(extA[kk % n], 1)}°</span>`)}<span class="lbl">this turn: the exterior angle</span></div>` : ""}
          <div class="row">${M(`${reg ? "each" : "if regular"} = 360° ÷ ${n} = ${extH}`)}<span class="lbl">each exterior angle of the regular ${nm}</span></div>
        </div>${lm}<p class="narr">Make the ${nm} irregular: the turns change size but still add to 360°.</p>`);
    }
  });
};

/* =============== g-bisectors =============== */
L["g-bisectors"] = k => {
  const { C, F, M, fmt } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const PRE = { acute: [[-5, -3], [5, -4], [1, 5]], right: [[-4, -3], [4, -3], [-4, 3]], obtuse: [[-6, -3], [5, -3], [-3, 1]], iso: [[-4, -4], [4, -4], [0, 5]] };
  let pts = PRE.acute.map(([x, y]) => ({ x, y })), mode = "circ", euler = false, geo = null;
  k.modes([["circ", "Circumcentre"], ["in", "Incentre"], ["cent", "Centroid"], ["ortho", "Orthocentre"]], mode, v => mode = v);
  const sel = k.select("Triangle", [["acute", "Acute"], ["right", "Right"], ["obtuse", "Obtuse"], ["iso", "Isosceles"]], "acute", v => { pts = PRE[v].map(([x, y]) => ({ x, y })); });
  k.check("Euler line", euler, v => euler = v);
  dragInt(c, () => geo, () => pts);
  k.hint("Drag A, B or C");
  void sel;
  k.loop(() => {
    c.begin(); const { w, h } = c; c.d.__w = c.w;
    const P = k.plot(c, { xmin: -8, xmax: 8, ymin: -7, ymax: 7, equal: true, pad: { l: 10, r: 10, t: w < 470 ? 86 : 52, b: 26 } }); geo = P;
    keepIn(P, pts);
    P.grid(1);
    const [A, B, Cc] = pts, S = p => ({ x: P.X(p.x), y: P.Y(p.y) }), sc = P.X(1) - P.X(0);
    const NM = ["A", "B", "C"], VS = pts.map(S);
    const cr = crs(sub(B, A), sub(Cc, A));
    const drawV = () => pts.forEach((p, i) => { const s = VS[i]; d.circle(s.x, s.y, 7, C.text, C.ink, 2);
      const cxm = (VS[0].x + VS[1].x + VS[2].x) / 3, cym = (VS[0].y + VS[1].y + VS[2].y) / 3; let ux = s.x - cxm, uy = s.y - cym; const l = Math.hypot(ux, uy) || 1;
      tag(k, d, NM[i], s.x + ux / l * 20, s.y + uy / l * 20, C.text, { font: `italic 600 16px ${F.math}` }); });
    if (cr === 0) {
      P.line(A.x - (B.x - A.x + Cc.x - A.x) * 20, A.y - (B.y - A.y + Cc.y - A.y) * 20, A.x + (B.x - A.x + Cc.x - A.x) * 20, A.y + (B.y - A.y + Cc.y - A.y) * 20, C.muted, 1.5, [6, 5]);
      drawV();
      k.setRO(`<div><h2>No triangle</h2></div><div class="landmark hit"><div class="big">A, B and C are collinear</div><div class="note">Three points on one line (or two points on top of each other) do not make a triangle, so there are no centres. Drag a point off the line.</div></div>`);
      return;
    }
    // exact data
    const ax = A.x, ay = A.y, bx = B.x, by = B.y, cx = Cc.x, cy = Cc.y;
    const Dn = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
    const s1 = ax * ax + ay * ay, s2 = bx * bx + by * by, s3 = cx * cx + cy * cy;
    const Uxn = s1 * (by - cy) + s2 * (cy - ay) + s3 * (ay - by), Uyn = s1 * (cx - bx) + s2 * (ax - cx) + s3 * (bx - ax);
    const Oq = [Q(Uxn, Dn), Q(Uyn, Dn)], O = { x: Uxn / Dn, y: Uyn / Dn };
    const Gq = [Q(ax + bx + cx, 3), Q(ay + by + cy, 3)], G = { x: (ax + bx + cx) / 3, y: (ay + by + cy) / 3 };
    const Hq = [Q((ax + bx + cx) * Dn - 2 * Uxn, Dn), Q((ay + by + cy) * Dn - 2 * Uyn, Dn)], H = { x: ax + bx + cx - 2 * O.x, y: ay + by + cy - 2 * O.y };
    const a2 = len2(sub(B, Cc)), b2 = len2(sub(Cc, A)), c2 = len2(sub(A, B));
    const la = Math.sqrt(a2), lb = Math.sqrt(b2), lc = Math.sqrt(c2);
    const sq = [a2, b2, c2], mx = Math.max(...sq), iMax = sq.indexOf(mx), rest = a2 + b2 + c2 - mx;
    const type = rest > mx ? "acute" : rest === mx ? "right" : "obtuse";
    const I = { x: (la * ax + lb * bx + lc * cx) / (la + lb + lc), y: (la * ay + lb * by + lc * cy) / (la + lb + lc) };
    const area = Math.abs(cr) / 2, rIn = 2 * area / (la + lb + lc), Rc = Math.hypot(ax - O.x, ay - O.y);
    const RN = (ax * Dn - Uxn) ** 2 + (ay * Dn - Uyn) ** 2, Rr = RN < 1e12 ? rad(RN) : null, Rq = Rr ? Q(Rr.a, Math.abs(Dn)) : null;
    const Rexact = Rq ? (Rr.b === 1 ? qh(Rq) : (Rq.n === 1 && Rq.d === 1 ? "" : qh(Rq)) + "√" + Rr.b) : null;
    const inView = p => p.x >= P.xmin && p.x <= P.xmax && p.y >= P.ymin && p.y <= P.ymax;
    const pt = (p, s = S(p)) => p;
    void pt;
    const opp = i => [pts[(i + 1) % 3], pts[(i + 2) % 3]];
    const proj = (V, P1, P2) => { const u = sub(P2, P1), t = dot(sub(V, P1), u) / len2(u); return { x: P1.x + u.x * t, y: P1.y + u.y * t, t }; };
    // triangle
    g.save(); g.beginPath(); VS.forEach((v, i) => i ? g.lineTo(v.x, v.y) : g.moveTo(v.x, v.y)); g.closePath(); g.fillStyle = k.alpha(C.cyan, .06); g.fill(); g.strokeStyle = C.text; g.lineWidth = 2; g.stroke(); g.restore();
    const far = (p, u, col, lw, dash) => { const l = Math.hypot(u.x, u.y) || 1; P.line(p.x - u.x / l * 60, p.y - u.y / l * 60, p.x + u.x / l * 60, p.y + u.y / l * 60, col, lw, dash); };
    let centre, cName, cSym, cq = null;
    if (mode === "circ") {
      for (let i = 0; i < 3; i++) { const [p1, p2] = opp(i), m = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }, u = sub(p2, p1);
        far(m, { x: -u.y, y: u.x }, k.alpha(C.cyan, .85), 1.8);
        const sm = S(m), s1_ = S(p1), s2_ = S(p2); ticks(g, s1_, sm, i + 1, C.cyan); ticks(g, sm, s2_, i + 1, C.cyan);
        const nrm = { x: sm.x - (s2_.y - s1_.y), y: sm.y + (s2_.x - s1_.x) }; rightMark(g, sm, s2_, nrm, 8, C.cyan); }
      P.clip(() => { d.circle(P.X(O.x), P.Y(O.y), Rc * sc, null, C.pink, 2.2); pts.forEach(p => d.line(P.X(O.x), P.Y(O.y), P.X(p.x), P.Y(p.y), k.alpha(C.pink, .55), 1.3, [4, 4])); });
      centre = O; cName = "Circumcentre"; cSym = "O"; cq = Oq;
    } else if (mode === "in") {
      for (let i = 0; i < 3; i++) { const V = pts[i], [p1, p2] = opp(i), d1 = Math.sqrt(len2(sub(p1, V))), d2 = Math.sqrt(len2(sub(p2, V)));
        const t = d1 / (d1 + d2), foot = { x: p1.x + (p2.x - p1.x) * t, y: p1.y + (p2.y - p1.y) * t };
        P.line(V.x, V.y, foot.x, foot.y, C.cyan, 1.8);
        const sv = S(V), sI = S(I);
        for (let j = 0; j <= i; j++) { arcAt(g, sv, S(p1), sI, 16 + j * 4, C.cyan, 1.5); arcAt(g, sv, sI, S(p2), 16 + j * 4, C.cyan, 1.5); } }
      P.clip(() => d.circle(P.X(I.x), P.Y(I.y), rIn * sc, k.alpha(C.pink, .08), C.pink, 2.2));
      for (let i = 0; i < 3; i++) { const [p1, p2] = opp(i), f = proj(I, p1, p2), sf = S(f); d.line(P.X(I.x), P.Y(I.y), sf.x, sf.y, k.alpha(C.pink, .7), 1.3, [4, 4]); rightMark(g, sf, S(p2), S(I), 7, k.alpha(C.pink, .9)); }
      centre = I; cName = "Incentre"; cSym = "I";
    } else if (mode === "cent") {
      for (let i = 0; i < 3; i++) { const V = pts[i], [p1, p2] = opp(i), m = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        P.line(V.x, V.y, m.x, m.y, C.cyan, 1.8); const sm = S(m); ticks(g, S(p1), sm, i + 1, C.cyan); ticks(g, sm, S(p2), i + 1, C.cyan); d.circle(sm.x, sm.y, 3.5, C.cyan); }
      // 2 : 1 labels on the median from A
      const MA = { x: (bx + cx) / 2, y: (by + cy) / 2 }, sA = VS[0], sG = S(G), sM = S(MA), nx = -(sM.y - sA.y), ny = sM.x - sA.x, nl = Math.hypot(nx, ny) || 1;
      tag(k, d, "2", (sA.x + sG.x) / 2 + nx / nl * 12, (sA.y + sG.y) / 2 + ny / nl * 12, C.amber);
      tag(k, d, "1", (sG.x + sM.x) / 2 + nx / nl * 12, (sG.y + sM.y) / 2 + ny / nl * 12, C.amber);
      centre = G; cName = "Centroid"; cSym = "G"; cq = Gq;
    } else {
      for (let i = 0; i < 3; i++) { const V = pts[i], [p1, p2] = opp(i), f = proj(V, p1, p2);
        if (f.t < 0 || f.t > 1) { const e = f.t < 0 ? p1 : p2; P.line(e.x, e.y, f.x, f.y, k.alpha(C.muted, .9), 1.3, [5, 4]); }
        const u = sub(f, V), lu2 = len2(u);
        if (lu2 > 1e-12) { const tH = dot(sub(H, V), u) / lu2, t0 = Math.min(0, tH), t1 = Math.max(1, tH);
          if (t0 < 0 || t1 > 1) P.line(V.x + u.x * t0, V.y + u.y * t0, V.x + u.x * t1, V.y + u.y * t1, k.alpha(C.cyan, .6), 1.3, [5, 4]); }
        P.line(V.x, V.y, f.x, f.y, C.cyan, 1.8);
        const sf = S(f); if (lu2 > 1e-12) rightMark(g, sf, f.t > .5 ? S(p1) : S(p2), S(V), 8, C.cyan); }
      centre = H; cName = "Orthocentre"; cSym = "H"; cq = Hq;
    }
    if (euler) {
      const u = sub(H, O); if (len2(u) > 1e-12) far(O, u, C.violet, 2.2, null);
      [[O, "O"], [G, "G"], [H, "H"]].forEach(([p, s]) => { if (!inView(p)) return; if (s === cSym) return; const sp_ = S(p); d.circle(sp_.x, sp_.y, 5, C.ink, C.amber, 2); d.text(s, sp_.x + 8, sp_.y + 15, { font: `italic 600 13px ${F.math}`, color: C.violet }); });
    }
    const vis = inView(centre);
    if (vis) { const sc_ = S(centre); d.circle(sc_.x, sc_.y, 10, k.alpha(C.amber, .2)); d.circle(sc_.x, sc_.y, 6, C.amber, C.ink, 1.5); d.text(cSym, sc_.x + 10, sc_.y - 9, { font: `italic 700 16px ${F.math}`, color: C.amber }); }
    else d.text(`${cSym} is off the grid`, P.left + P.width - 8, P.top + P.height - 8, { font: `600 12px ${F.sans}`, color: C.amber, align: "right" });
    drawV();
    // readout
    const ptH = q => `(${qh(q[0])}, ${qh(q[1])})`;
    const ptD = p => `(${fmt(p.x, 2)}, ${fmt(p.y, 2)})`;
    const hyp = ["BC", "CA", "AB"][iMax], rv = NM[iMax];
    const typeRow = `<div class="row">${M(type === "acute" ? "all angles &lt; 90°" : type === "right" ? `m∠<i>${rv}</i> = 90°` : `m∠<i>${rv}</i> &gt; 90°`)}<span class="lbl">${type} triangle (compare <i>${hyp}</i>² with the sum of the other two squares)</span></div>`;
    let rows = "", lm = "", big;
    if (mode === "circ") {
      big = M(`<span class="c1"><i>O</i> = ${ptH(Oq)}</span>`);
      rows = `<div class="row">${M(`<i>OA</i> = <i>OB</i> = <i>OC</i> = <span class="c3"><i>R</i></span> ${Rexact ? `= ${Rexact}${Rr.b === 1 && Rq.d === 1 ? "" : ` ≈ ${fmt(Rc, 2)}`}` : `≈ ${fmt(Rc, 2)}`}`)}<span class="lbl">each perpendicular bisector holds the points equidistant from that side's ends</span></div>${typeRow}`;
      lm = type === "acute" ? `<div class="landmark"><div class="big">acute: <i>O</i> is inside</div><div class="note">The circumscribed circle passes through all three vertices. Drag a vertex until one angle passes 90° and watch O leave the triangle.</div></div>`
        : type === "right" ? `<div class="landmark hit"><div class="big">right: <i>O</i> is the midpoint of the hypotenuse</div><div class="note">The hypotenuse <i>${hyp}</i> is a diameter of the circumscribed circle, so its midpoint is the centre.</div></div>`
        : `<div class="landmark hit"><div class="big">obtuse: <i>O</i> is outside</div><div class="note">The perpendicular bisectors still meet in one point, but it lies beyond the longest side <i>${hyp}</i>.</div></div>`;
    } else if (mode === "in") {
      big = M(`<span class="c1"><i>I</i> ≈ ${ptD(I)}</span>`);
      rows = `<div class="row">${M(`<span class="c3"><i>r</i></span> = <span class="fr"><span>area</span><span><i>s</i></span></span> ≈ <span class="fr"><span>${fmt(area, 2)}</span><span>${fmt((la + lb + lc) / 2, 2)}</span></span> ≈ ${fmt(rIn, 2)}`)}<span class="lbl">distance from I to each side (s = semiperimeter)</span></div>
        <div class="row">${M(`<i>a</i> = ${radT(a2)}, <i>b</i> = ${radT(b2)}, <i>c</i> = ${radT(c2)}`)}<span class="lbl">side lengths, exact</span></div>`;
      lm = `<div class="landmark"><div class="big">equidistant from the three sides</div><div class="note">Every point on an angle bisector is equally far from that angle's sides, so the meeting point is the centre of the inscribed circle. It is always inside.</div></div>`;
    } else if (mode === "cent") {
      const MA = { x: (bx + cx) / 2, y: (by + cy) / 2 }, AG = Math.hypot(G.x - ax, G.y - ay), GM = Math.hypot(MA.x - G.x, MA.y - G.y);
      big = M(`<span class="c1"><i>G</i> = ${ptH(Gq)}</span>`);
      rows = `<div class="row">${M(`<i>G</i> = (<span class="fr"><span>${sum3(ax, bx, cx)}</span><span>3</span></span>, <span class="fr"><span>${sum3(ay, by, cy)}</span><span>3</span></span>)`)}<span class="lbl">average of the vertices</span></div>
        <div class="row">${M(`<i>AG</i> ≈ ${fmt(AG, 2)}, &nbsp;<i>GM</i> ≈ ${fmt(GM, 2)}`)}<span class="lbl">along the median from A: AG = 2 · GM</span></div>`;
      lm = `<div class="landmark"><div class="big">2 : 1 on every median</div><div class="note">The centroid is two thirds of the way from each vertex to the midpoint of the opposite side. A cardboard triangle balances on it.</div></div>`;
    } else {
      big = M(`<span class="c1"><i>H</i> = ${ptH(Hq)}</span>`);
      rows = typeRow + `<div class="row">${M("altitude ⊥ opposite side")}<span class="lbl">each cyan line is perpendicular to the line containing the opposite side</span></div>`;
      lm = type === "acute" ? `<div class="landmark"><div class="big">acute: <i>H</i> is inside</div><div class="note">All three feet land on the sides themselves.</div></div>`
        : type === "right" ? `<div class="landmark hit"><div class="big">right: <i>H</i> = <i>${rv}</i></div><div class="note">The two legs are altitudes of each other, so they meet at the right-angle vertex.</div></div>`
        : `<div class="landmark hit"><div class="big">obtuse: <i>H</i> is outside</div><div class="note">Two altitudes fall outside, on extensions of the sides (dashed). Their lines still meet in one point, beyond the obtuse vertex.</div></div>`;
    }
    if (euler) { const HG = Math.hypot(G.x - H.x, G.y - H.y), GO = Math.hypot(O.x - G.x, O.y - G.y);
      rows += `<div class="row">${M(`<i>HG</i> ≈ ${fmt(HG, 2)} = 2 × ${fmt(GO, 2)} ≈ 2<i>GO</i>`)}<span class="lbl"><span class="c4">Euler line</span>: O ${ptH(Oq)}, G ${ptH(Gq)}, H ${ptH(Hq)} are collinear</span></div>`; }
    if (!vis) rows += `<div class="row">${M(`<i>${cSym}</i> ≈ ${ptD(centre)}`)}<span class="lbl">outside the visible grid</span></div>`;
    k.setRO(`<div><h2>${cName}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${big}</div></div><div class="ro-rows">${rows}</div>${lm}
      <p class="narr">Switch centres at the top, and drag a vertex to make the triangle right or obtuse.</p>`);
  });
};

/* =============== g-tri-inequality =============== */
L["g-tri-inequality"] = k => {
  const { C, F, M, fmt } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let a = 5, b = 7, cc = 9, mode = "sides", th = 60, pin = null;
  let phA = Math.PI / 2, phB = Math.PI / 2;     // current arm angles (A arm from +x, B arm from −x), radians, up positive
  k.modes([["sides", "Triangle Inequality"], ["hinge", "Hinge Theorem"]], mode, v => { mode = v; hide(sc_, v === "hinge"); hide(st_, v !== "hinge"); hide(pb, v !== "hinge"); });
  k.slider(`<span class="c2"><i>a</i></span>`, 1, 12, 1, a, v => a = v);
  k.slider(`<span class="c3"><i>b</i></span>`, 1, 12, 1, b, v => b = v);
  const sc_ = k.slider(`<span class="c4"><i>c</i></span>`, 1, 24, 1, cc, v => cc = v);
  const st_ = k.slider(`∠<i>C</i>`, 1, 179, 1, th, v => th = v, v => v + "°");
  const pb = k.button("Pin this triangle", () => { pin = { a, b, th }; }, "btn ghost");
  hide(st_, true); hide(pb, true);
  k.loop(dt => {
    c.begin(); const { w, h } = c; c.d.__w = c.w;
    if (mode === "sides") drawSides(dt, w, h); else drawHinge(w, h);
  });
  function numberLine(x0, x1, y, lo, hi, val, maxV){
    const X = v => x0 + (x1 - x0) * v / maxV;
    d.line(x0 - 4, y, x1 + 6, y, C.muted, 1.5);
    const step = maxV > 20 ? 4 : 2;
    for (let v = 0; v <= maxV; v++) { const maj = v % step === 0; d.line(X(v), y - (maj ? 5 : 3), X(v), y + (maj ? 5 : 3), C.faint, 1); if (maj) d.text(String(v), X(v), y + 18, { font: `11px ${F.mono}`, color: C.faint, align: "center" }); }
    if (hi > lo) { g.save(); g.strokeStyle = C.amber; g.lineWidth = 6; g.globalAlpha = .85; g.beginPath(); g.moveTo(X(lo), y); g.lineTo(X(hi), y); g.stroke(); g.restore(); }
    [lo, hi].forEach(v => d.circle(X(v), y, 5.5, C.ink, C.amber, 2.2));
    const inside = val > lo && val < hi;
    d.circle(X(val), y, 6.5, inside ? C.violet : C.ink, C.violet, 2.5);
    d.text("c", X(val), y - 12, { font: `italic 600 15px ${F.math}`, color: C.violet, align: "center" });
    d.text("|a − b|", X(lo), y + 34, { font: `italic 12px ${F.math}`, color: C.amber, align: hi - lo < maxV * .15 ? "right" : "center" });
    d.text("a + b", X(hi), y + 34, { font: `italic 12px ${F.math}`, color: C.amber, align: hi - lo < maxV * .15 ? "left" : "center" });
  }
  function drawSides(dt, w, h){
    const lo = Math.abs(a - b), hi = a + b, ok = cc > lo && cc < hi, flat = cc === hi || cc === lo;
    // target geometry in world units: A(0,0), B(c,0)
    let tA, tB, Cw = null;
    if (ok || flat) { const x = (b * b - a * a + cc * cc) / (2 * cc), y = Math.sqrt(Math.max(0, b * b - x * x)); Cw = { x, y }; tA = Math.atan2(y, x); tB = Math.atan2(y, cc - x); }
    else if (cc > hi) { tA = 0; tB = 0; }
    else if (b > a) { tA = 0; tB = Math.PI; } else { tA = Math.PI; tB = 0; }
    const e = k.reduce ? 1 : Math.min(1, dt * 5);
    phA += (tA - phA) * e; phB += (tB - phB) * e;
    const tipA = { x: b * Math.cos(phA), y: b * Math.sin(phA) }, tipB = { x: cc - a * Math.cos(phB), y: a * Math.sin(phB) };
    // fit
    const xs = [0, cc, tipA.x, tipB.x, Cw ? Cw.x : 0, -b * .2, cc + a * .2], ys = [0, Cw ? Cw.y : 0, Math.max(0, tipA.y), Math.max(0, tipB.y)];
    const bx0 = Math.min(...xs, (ok || flat) ? 0 : Math.min(0, cc - a, b > cc ? 0 : 0)), bx1 = Math.max(...xs), by1 = Math.max(...ys, 1);
    const top = w < 420 ? 52 : 50, lineY = h - 52, regH = lineY - top - 62, regW = w - 40;
    const s = Math.min(regW / Math.max(1, bx1 - bx0), regH / by1, 44);
    const ox = 20 + (regW - (bx1 - bx0) * s) / 2 - bx0 * s, oy = top + 14 + regH + (by1 * s < regH ? -(regH - by1 * s) * .35 : 0);
    const S = p => ({ x: ox + p.x * s, y: oy - p.y * s });
    const A = S({ x: 0, y: 0 }), B = S({ x: cc, y: 0 }), oA = -9 * (1 - Math.abs(Math.sin(phA))), oB = -18 * (1 - Math.abs(Math.sin(phB)));
    const A1 = { x: A.x, y: A.y + oA }, B1 = { x: B.x, y: B.y + oB }, TA = S(tipA), TB = S(tipB); TA.y += oA; TB.y += oB;
    // faint reach circles
    g.save(); g.setLineDash([3, 5]); g.strokeStyle = k.alpha(C.pink, .28); g.lineWidth = 1; g.beginPath(); g.arc(A.x, A.y, b * s, Math.PI, 2 * Math.PI); g.stroke();
    g.strokeStyle = k.alpha(C.cyan, .28); g.beginPath(); g.arc(B.x, B.y, a * s, Math.PI, 2 * Math.PI); g.stroke(); g.restore();
    d.line(A.x, A.y, B.x, B.y, C.violet, 4);
    d.line(A1.x, A1.y, TA.x, TA.y, C.pink, 4); d.line(B1.x, B1.y, TB.x, TB.y, C.cyan, 4);
    const settled = Math.abs(phA - tA) < .004 && Math.abs(phB - tB) < .004;
    // labels of sides
    tag(k, d, `c = ${cc}`, (A.x + B.x) / 2, A.y + 18, C.violet);
    const flatNow = Math.abs(Math.sin(phA)) < .2 && Math.abs(Math.sin(phB)) < .2;
    if (flatNow) { tag(k, d, `b = ${b}`, (A1.x + TA.x) / 2, A.y + 40, C.pink); tag(k, d, `a = ${a}`, (B1.x + TB.x) / 2, A.y + 62, C.cyan); }
    else { tag(k, d, `b = ${b}`, (A.x + TA.x) / 2 - 14, (A.y + TA.y) / 2 - 10, C.pink, { align: "right" });
      tag(k, d, `a = ${a}`, (B.x + TB.x) / 2 + 14, (B.y + TB.y) / 2 - 10, C.cyan, { align: "left" }); }
    let angs = null;
    if (ok && settled) {
      const Cs = S(Cw);
      const cosA = (b * b + cc * cc - a * a) / (2 * b * cc), cosB = (a * a + cc * cc - b * b) / (2 * a * cc);
      const mA = Math.acos(clamp(cosA, -1, 1)) * DEG, mB = Math.acos(clamp(cosB, -1, 1)) * DEG, mC = 180 - mA - mB; angs = { A: mA, B: mB, C: mC };
      const big = Math.max(mA, mB, mC);
      arcAt(g, A, B, Cs, 26, C.cyan, mA === big ? 3 : 1.8, k.alpha(C.cyan, .15));
      arcAt(g, B, Cs, A, 26, C.pink, mB === big ? 3 : 1.8, k.alpha(C.pink, .15));
      arcAt(g, Cs, A, B, 26, C.violet, mC === big ? 3 : 1.8, k.alpha(C.violet, .15));
      d.circle(Cs.x, Cs.y, 6, C.text, C.ink, 2);
      d.text("C", Cs.x, Cs.y - 14, { font: `italic 600 15px ${F.math}`, color: C.text, align: "center" });
    } else if (settled && !ok) {
      // show the gap or the flat overlap
      const gap = Math.abs(tipA.x - tipB.x) * s;
      if (!flat && gap > 2) { const my = Math.min(TA.y, TB.y) - 18; d.line(TA.x, my, TB.x, my, C.red, 2); d.line(TA.x, my - 5, TA.x, my + 5, C.red, 2); d.line(TB.x, my - 5, TB.x, my + 5, C.red, 2);
        tag(k, d, `gap ${Math.abs(cc > hi ? cc - hi : lo - cc)}`, (TA.x + TB.x) / 2, my - 14, C.red); }
      else { const mx_ = TA.x, my_ = Math.min(TA.y, TB.y) - 18; d.circle(TA.x, (TA.y + TB.y) / 2, 9, null, C.amber, 2.5); tag(k, d, "meet only lying flat", mx_, my_ - 6, C.amber, { align: mx_ < 120 ? "left" : mx_ > w - 120 ? "right" : "center" }); }
    }
    d.circle(A.x, A.y, 6, C.text, C.ink, 2); d.circle(B.x, B.y, 6, C.text, C.ink, 2);
    d.text("A", A.x - 12, A.y + 5, { font: `italic 600 15px ${F.math}`, color: C.text, align: "right" });
    d.text("B", B.x + 12, B.y + 5, { font: `italic 600 15px ${F.math}`, color: C.text });
    numberLine(28, w - 28, lineY, lo, hi, cc, Math.max(24, hi + 1));
    // readout
    const ord = angs ? [["A", angs.A, "a", a, "c2"], ["B", angs.B, "b", b, "c3"], ["C", angs.C, "c", cc, "c4"]].sort((p, q) => p[1] - q[1]) : null;
    const ineqRow = (p, q, r, cls) => `<div class="row">${M(`${p} + ${q} = ${p + q} ${p + q > r ? "&gt;" : p + q === r ? "=" : "&lt;"} ${r}`)}<span class="v ${cls}">${p + q > r ? "✓" : "✗"}</span></div>`;
    let lm;
    if (ok) lm = `<div class="landmark"><div class="big">${M(`${lo} &lt; <i>c</i> = ${cc} &lt; ${hi}`)}</div><div class="note">Every sum of two sides beats the third, so the arms meet and close a triangle. The largest angle, ∠${ord ? ord[2][0] : "?"}, faces the longest side, ${ord ? ord[2][2] : "?"}.</div></div>`;
    else if (flat) lm = `<div class="landmark hit"><div class="big">degenerate: ${cc === hi ? `${a} + ${b} = ${cc}` : `${Math.max(a, b)} = ${Math.min(a, b)} + ${cc}`}</div><div class="note">The arms meet only by lying flat along one line. A true triangle needs the inequalities to be strict.</div></div>`;
    else lm = `<div class="landmark hit"><div class="big">no triangle</div><div class="note">${cc > hi ? `The arms together reach only ${hi}, short of c = ${cc}.` : `The long side ${Math.max(a, b)} is longer than the other two together (${Math.min(a, b)} + ${cc} = ${Math.min(a, b) + cc}).`} The arms cannot meet.</div></div>`;
    k.setRO(`<div><h2>Third side range</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<span class="c1">${lo} &lt; <i>c</i> &lt; ${hi}</span>`)}</div></div>
      <div class="ro-rows">${ineqRow(a, b, cc, "c1")}${ineqRow(b, cc, a, "c1")}${ineqRow(a, cc, b, "c1")}
      ${ord ? `<div class="row">${M(ord.map(o => `∠<i>${o[0]}</i> ${fmt(o[1], 1)}°`).join(" &lt; "))}<span class="lbl">smallest to largest; opposite sides ${ord.map(o => o[2] + " = " + o[3]).join(", ")}</span></div>` : ""}</div>${lm}
      <p class="narr">Shrink c below |a − b| or push it past a + b and watch the arms fail to meet.</p>`);
  }
  function drawHinge(w, h){
    const wide = w > 560, top = w < 420 ? 52 : 50;
    const fig = { x0: 16, y0: top, w: wide ? w * .56 : w - 32, h: wide ? h - top - 20 : (h - top) * .55 };
    const ch = wide ? { x0: w * .6 + 10, y0: top + 10, w: w * .4 - 30, h: h - top - 50 } : { x0: 44, y0: top + fig.h + 18, w: w - 64, h: h - top - fig.h - 50 };
    const cOf = (A_, B_, t) => Math.sqrt(A_ * A_ + B_ * B_ - 2 * A_ * B_ * Math.cos(t / DEG));
    const cv = cOf(a, b, th);
    const R = Math.max(a, b), s = Math.min(fig.w / (2 * R + 1), (fig.h - 30) / (R + .4), 40);
    const Cx = fig.x0 + fig.w / 2, Cy = Math.min(fig.y0 + fig.h - 22, fig.y0 + (fig.h + R * s) / 2 + 6);
    const tri = (A_, B_, t, alpha, dash) => {
      const PA = { x: Cx + B_ * s, y: Cy }, PB = { x: Cx + A_ * s * Math.cos(t / DEG), y: Cy - A_ * s * Math.sin(t / DEG) };
      d.line(Cx, Cy, PA.x, PA.y, k.alpha(C.pink, alpha), dash ? 1.5 : 4, dash); d.line(Cx, Cy, PB.x, PB.y, k.alpha(C.cyan, alpha), dash ? 1.5 : 4, dash); d.line(PA.x, PA.y, PB.x, PB.y, k.alpha(C.violet, alpha), dash ? 1.5 : 4, dash);
      return { PA, PB };
    };
    if (pin) tri(pin.a, pin.b, pin.th, .55, [5, 4]);
    const { PA, PB } = tri(a, b, th, 1);
    arcAt(g, { x: Cx, y: Cy }, PA, PB, 22, C.amber, 2.2, k.alpha(C.amber, .15));
    d.circle(Cx, Cy, 6, C.text, C.ink, 2);
    d.text("C", Cx - 12, Cy + 5, { font: `italic 600 15px ${F.math}`, color: C.text, align: "right" });
    tag(k, d, `${th}°`, Cx + 34 * Math.cos(th / 2 / DEG) + 14, Cy - 34 * Math.sin(th / 2 / DEG) - 4, C.amber);
    tag(k, d, `c ≈ ${fmt(cv, 2)}`, (PA.x + PB.x) / 2 + 30, (PA.y + PB.y) / 2 - 6, C.violet, { align: "left" });
    // chart c(θ)
    const X = t => ch.x0 + ch.w * t / 180, Y = v => ch.y0 + ch.h - ch.h * v / (a + b);
    d.rect(ch.x0, ch.y0, ch.w, ch.h, null, k.alpha(C.line2, .7));
    const lo = Math.abs(a - b), hi = a + b;
    d.line(ch.x0, Y(lo), ch.x0 + ch.w, Y(lo), k.alpha(C.amber, .6), 1, [4, 4]); d.line(ch.x0, Y(hi), ch.x0 + ch.w, Y(hi), k.alpha(C.amber, .6), 1, [4, 4]);
    d.text(String(lo), ch.x0 - 6, Y(lo), { font: `11px ${F.mono}`, color: C.amber, align: "right", base: "middle" });
    d.text(String(hi), ch.x0 - 6, Y(hi), { font: `11px ${F.mono}`, color: C.amber, align: "right", base: "middle" });
    ["0°", "90°", "180°"].forEach((t_, i) => d.text(t_, X(i * 90), ch.y0 + ch.h + 15, { font: `11px ${F.mono}`, color: C.faint, align: "center" }));
    g.save(); g.strokeStyle = C.violet; g.lineWidth = 2.5; g.beginPath(); for (let t = 0; t <= 180; t += 2) { const px = X(t), py = Y(cOf(a, b, t)); t ? g.lineTo(px, py) : g.moveTo(px, py); } g.stroke(); g.restore();
    if (pin) { const pv = cOf(pin.a, pin.b, pin.th); if (pin.a === a && pin.b === b) d.circle(X(pin.th), Y(pv), 5, C.ink, C.text, 2); }
    d.circle(X(th), Y(cv), 6, C.violet, C.ink, 2);
    d.text("c as ∠C opens", ch.x0 + 6, ch.y0 + 14, { font: `12px ${F.sans}`, color: C.muted });
    let cmp = "", lm;
    if (pin && pin.a === a && pin.b === b && pin.th !== th) { const pv = cOf(a, b, pin.th), more = th > pin.th;
      cmp = `<div class="row">${M(`${th}° ${more ? "&gt;" : "&lt;"} ${pin.th}° ⟹ ${fmt(cv, 2)} ${more ? "&gt;" : "&lt;"} ${fmt(pv, 2)}`)}<span class="lbl">current vs pinned (dashed) triangle</span></div>`;
      lm = `<div class="landmark hit"><div class="big">Hinge Theorem</div><div class="note">Same two sides ${a} and ${b}; the ${more ? "wider" : "narrower"} included angle gives the ${more ? "longer" : "shorter"} third side.</div></div>`; }
    else if (pin && (pin.a !== a || pin.b !== b)) lm = `<div class="landmark hit"><div class="big">sides changed</div><div class="note">The Hinge Theorem compares triangles with the same two sides. Pin again to compare with this pair.</div></div>`;
    else lm = `<div class="landmark"><div class="big">open the hinge, the third side grows</div><div class="note">Pin this triangle, then change ∠C: with sides ${a} and ${b} fixed, the larger included angle always faces the longer side.</div></div>`;
    k.setRO(`<div><h2>Third side</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<span class="c4"><i>c</i></span> ≈ <span class="c4">${fmt(cv, 2)}</span>`)}</div></div>
      <div class="ro-rows"><div class="row">${M(`<span class="c2"><i>a</i> = ${a}</span>, <span class="c3"><i>b</i> = ${b}</span>, m∠<i>C</i> = ${th}°`)}<span class="lbl">two fixed sides and the included angle</span></div>
      <div class="row">${M(`<span class="c1">${lo} &lt; <i>c</i> &lt; ${hi}</span>`)}<span class="lbl">c approaches |a − b| as the angle closes and a + b as it flattens</span></div>${cmp}</div>${lm}
      <p class="narr">The curve only rises: a wider angle always means a longer opposite side.</p>`);
  }
};

/* =============== quadrilateral classification (shared) =============== */
function segX(p1, p2, p3, p4){
  const o = (a, b, c) => Math.sign(crs(sub(b, a), sub(c, a)));
  const on = (a, b, c) => Math.min(a.x, b.x) <= c.x && c.x <= Math.max(a.x, b.x) && Math.min(a.y, b.y) <= c.y && c.y <= Math.max(a.y, b.y);
  const d1 = o(p3, p4, p1), d2 = o(p3, p4, p2), d3 = o(p1, p2, p3), d4 = o(p1, p2, p4);
  if (d1 * d2 < 0 && d3 * d4 < 0) return true;
  return (d1 === 0 && on(p3, p4, p1)) || (d2 === 0 && on(p3, p4, p2)) || (d3 === 0 && on(p1, p2, p3)) || (d4 === 0 && on(p1, p2, p4));
}
const VN = ["A", "B", "C", "D"];
function quadInfo(P){
  const [A, B, Cc, D] = P;
  for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) if (P[i].x === P[j].x && P[i].y === P[j].y) return { bad: `${VN[i]} and ${VN[j]} are the same point, so there are not four vertices.` };
  const s = [sub(B, A), sub(Cc, B), sub(D, Cc), sub(A, D)];
  for (let i = 0; i < 4; i++) if (crs(s[i], s[(i + 1) % 4]) === 0) return { bad: `${VN[i]}, ${VN[(i + 1) % 4]} and ${VN[(i + 2) % 4]} are collinear, so the figure has only three sides.` };
  if (segX(A, B, Cc, D) || segX(B, Cc, D, A)) return { bad: "Two sides cross, so ABCD is not a simple quadrilateral. Drag a vertex to untangle it." };
  const L2 = s.map(len2), turns = s.map((u, i) => Math.sign(crs(u, s[(i + 1) % 4]))), convex = turns.every(t => t === turns[0]);
  const p1 = crs(s[0], s[2]) === 0, p2 = crs(s[1], s[3]) === 0, c1 = L2[0] === L2[2], c2 = L2[1] === L2[3];
  const d1 = sub(Cc, A), d2 = sub(D, B), bis = A.x + Cc.x === B.x + D.x && A.y + Cc.y === B.y + D.y;
  const perp = dot(d1, d2) === 0, dcong = len2(d1) === len2(d2);
  const kiteP = (L2[0] === L2[1] && L2[2] === L2[3]) || (L2[1] === L2[2] && L2[3] === L2[0]);
  const right = s.map((u, i) => dot(s[(i + 3) % 4], u) === 0);
  const para = p1 && p2, allEq = para && L2[0] === L2[1];
  let cls;
  if (para) cls = dcong && allEq ? "square" : dcong ? "rectangle" : allEq ? "rhombus" : "parallelogram";
  else if (p1 || p2) cls = (p1 ? c2 : c1) ? "isosceles trapezoid" : "trapezoid";
  else if (kiteP) cls = convex ? "kite" : "dart";
  else cls = convex ? "quadrilateral" : "concave quadrilateral";
  return { s, L2, p1, p2, c1, c2, bis, perp, dcong, kiteP, right, convex, cls, para, d1, d2, allEq };
}
const WHY = {
  square: "Both pairs of opposite sides are parallel (parallelogram), the diagonals are congruent (rectangle) and perpendicular (rhombus): a square has every property.",
  rectangle: "A parallelogram whose diagonals are congruent is a rectangle. The diagonals are not perpendicular, so it is not a square.",
  rhombus: "A parallelogram whose diagonals are perpendicular is a rhombus. The diagonals are not congruent, so it is not a square.",
  parallelogram: "Both pairs of opposite sides are parallel, so the diagonals bisect each other, but they are neither congruent nor perpendicular.",
  "isosceles trapezoid": "Exactly one pair of parallel sides and congruent legs. Its diagonals are congruent, yet it is not a rectangle: that test needs a parallelogram.",
  trapezoid: "Exactly one pair of opposite sides is parallel. The legs are not congruent.",
  kite: "Two pairs of consecutive congruent sides, so the diagonals are perpendicular, but they do not bisect each other: not a rhombus.",
  dart: "Two pairs of consecutive congruent sides with a reflex angle: a concave kite, often called a dart.",
  quadrilateral: "No parallel sides and no kite pattern: none of the special names apply.",
  "concave quadrilateral": "One interior angle is greater than 180°, so it is concave and none of the special names apply."
};
function hierHTML(cls){
  const on = { "Quadrilateral": true, "Trapezoid": cls === "trapezoid" || cls === "isosceles trapezoid", "Isosceles trapezoid": cls === "isosceles trapezoid", "Kite": cls === "kite" || cls === "dart",
    "Parallelogram": ["parallelogram", "rectangle", "rhombus", "square"].includes(cls), "Rectangle": cls === "rectangle" || cls === "square", "Rhombus": cls === "rhombus" || cls === "square", "Square": cls === "square" };
  const chip = t => `<span style="display:inline-block;padding:2px 7px;margin:2px 2px;border-radius:4px;font:500 12px/1.4 var(--sans);border:1px solid ${on[t] ? "var(--green)" : "var(--line)"};color:${on[t] ? "var(--green)" : "var(--faint)"};background:${on[t] ? "rgba(123,216,143,.12)" : "transparent"}">${t}</span>`;
  const ar = `<span style="color:var(--faint);font-size:12px"> → </span>`;
  return `<div style="margin-top:4px;line-height:1.9">${chip("Quadrilateral")}<br>${ar}${chip("Trapezoid")}${ar}${chip("Isosceles trapezoid")}<br>${ar}${chip("Kite")}<br>${ar}${chip("Parallelogram")}${ar}${chip("Rectangle")}${chip("Rhombus")}${ar}${chip("Square")}</div>`;
}
const QPRE = { square: [[-3, -3], [3, -3], [3, 3], [-3, 3]], rectangle: [[-5, -2], [4, -2], [4, 3], [-5, 3]], rhombus: [[-4, 0], [0, -2], [4, 0], [0, 2]], parallelogram: [[-5, -2], [3, -2], [5, 3], [-3, 3]],
  trapezoid: [[-5, -3], [5, -3], [2, 3], [-3, 3]], isotrap: [[-5, -3], [5, -3], [3, 2], [-3, 2]], kite: [[0, -4], [3, 1], [0, 3], [-3, 1]], general: [[-5, -3], [4, -4], [3, 3], [-2, 2]] };
function drawQuad(k, c, P, pts, q, opt = {}){
  const { C, F } = k, d = c.d, g = c.g; const S = p => ({ x: P.X(p.x), y: P.Y(p.y) }), V = pts.map(S);
  g.save(); g.beginPath(); V.forEach((v, i) => i ? g.lineTo(v.x, v.y) : g.moveTo(v.x, v.y)); g.closePath(); g.fillStyle = k.alpha(C.cyan, .08); g.fill(); g.restore();
  if (q && !q.bad) {
    // diagonals
    d.line(V[0].x, V[0].y, V[2].x, V[2].y, C.violet, 2, [7, 5]); d.line(V[1].x, V[1].y, V[3].x, V[3].y, C.violet, 2, [7, 5]);
    const den = crs(q.d1, q.d2);
    if (den !== 0) { const t = crs(sub(pts[1], pts[0]), q.d2) / den, u = crs(sub(pts[1], pts[0]), q.d1) / den;
      if (t > 0 && t < 1 && u > 0 && u < 1) { const X = { x: pts[0].x + q.d1.x * t, y: pts[0].y + q.d1.y * t }, sx = S(X);
        if (q.perp) rightMark(g, sx, V[2], V[3], 9, C.amber);
        if (q.bis) { ticks(g, V[0], sx, 1, C.violet); ticks(g, sx, V[2], 1, C.violet); ticks(g, V[1], sx, 2, C.violet); ticks(g, sx, V[3], 2, C.violet); }
        d.circle(sx.x, sx.y, 3.5, C.violet); } }
  }
  for (let i = 0; i < 4; i++) { const a = V[i], b = V[(i + 1) % 4]; d.line(a.x, a.y, b.x, b.y, (opt.hot || []).includes(i) ? C.amber : C.cyan, 3); }
  if (q && !q.bad) {
    // congruence ticks: group equal lengths
    const groups = {}; q.L2.forEach((l, i) => (groups[l] = groups[l] || []).push(i));
    let tn = 0; Object.values(groups).filter(gr => gr.length > 1).forEach(gr => { tn++; gr.forEach(i => ticks(g, V[i], V[(i + 1) % 4], tn, C.amber, .32)); });
    if (q.p1) { chevrons(g, V[0], V[1], 1, C.amber); chevrons(g, V[3], V[2], 1, C.amber); }
    if (q.p2) { chevrons(g, V[1], V[2], 2, C.amber); chevrons(g, V[0], V[3], 2, C.amber); }
    q.right.forEach((r, i) => { if (r) rightMark(g, V[i], V[(i + 1) % 4], V[(i + 3) % 4], 10, C.amber); });
  }
  const cx = (V[0].x + V[1].x + V[2].x + V[3].x) / 4, cy = (V[0].y + V[1].y + V[2].y + V[3].y) / 4;
  V.forEach((v, i) => { d.circle(v.x, v.y, 7, C.cyan, C.ink, 2); let ux = v.x - cx, uy = v.y - cy; const l = Math.hypot(ux, uy) || 1;
    tag(k, d, opt.coords ? `${VN[i]}(${ng(pts[i].x)}, ${ng(pts[i].y)})` : VN[i], v.x + ux / l * 14, v.y + uy / l * 16, C.cyan, { font: opt.coords ? `600 12px ${F.mono}` : `italic 600 16px ${F.math}`, align: ux < -3 ? "right" : ux > 3 ? "left" : "center" }); });
}

/* =============== g-quadrilaterals =============== */
L["g-quadrilaterals"] = k => {
  const { C, M } = k; const c = k.canvas();
  let pts = QPRE.parallelogram.map(([x, y]) => ({ x, y })), geo = null;
  const sel = k.select("Preset", [["square", "Square"], ["rectangle", "Rectangle"], ["rhombus", "Rhombus"], ["parallelogram", "Parallelogram"], ["trapezoid", "Trapezoid"], ["isotrap", "Isosceles trapezoid"], ["kite", "Kite"], ["general", "General"]], "parallelogram", v => { pts = QPRE[v].map(([x, y]) => ({ x, y })); });
  void sel;
  dragInt(c, () => geo, () => pts);
  k.hint("Drag any vertex");
  k.loop(() => {
    c.begin(); const { w } = c; c.d.__w = c.w;
    const P = k.plot(c, { xmin: -7, xmax: 7, ymin: -6, ymax: 6, equal: true, pad: { l: 10, r: 10, t: 22, b: 26 } }); geo = P; keepIn(P, pts);
    P.grid(1);
    const q = quadInfo(pts); drawQuad(k, c, P, pts, q);
    void w;
    if (q.bad) { k.setRO(`<div><h2>Not a quadrilateral</h2></div><div class="landmark hit"><div class="big">degenerate figure</div><div class="note">${q.bad}</div></div>`); return; }
    const yn = (b, t) => `<div style="font:15px/1.35 var(--math);color:${b ? "var(--text)" : "var(--faint)"}">${M(t)} <span style="color:${b ? "var(--amber)" : "var(--faint)"};font-family:var(--sans);font-size:13px">${b ? "✓" : "✗"}</span></div>`;
    const name = q.cls.replace(/^./, s => s.toUpperCase());
    k.setRO(`<div><h2>Classification</h2><div class="ro-big" style="margin-top:8px;font-size:26px"><span class="c5">${name}</span></div></div>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 12px">
        ${yn(q.p1, `<span class="ov"><i>AB</i></span> ∥ <span class="ov"><i>DC</i></span>`)}${yn(q.p2, `<span class="ov"><i>AD</i></span> ∥ <span class="ov"><i>BC</i></span>`)}
        ${yn(q.c1, `<span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>CD</i></span>`)}${yn(q.c2, `<span class="ov"><i>BC</i></span> ≅ <span class="ov"><i>DA</i></span>`)}
        ${yn(q.perp, `<span class="c4">diagonals ⊥</span>`)}${yn(q.dcong, `<span class="c4">diagonals ≅</span>`)}
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">${yn(q.bis, `<span class="c4">diagonals bisect each other</span>`)}${yn(q.kiteP, "two pairs of consecutive ≅ sides")}</div>
      ${hierHTML(q.cls)}
      <div class="landmark${q.cls === "square" || q.cls === "isosceles trapezoid" || q.cls === "kite" || q.cls === "dart" ? " hit" : ""}"><div class="big">why: ${q.cls}</div><div class="note">${WHY[q.cls]}</div></div>
      <p class="narr">Pick a preset, then drag one vertex a single step and watch which properties break.</p>`);
  });
};

/* =============== g-coord-proofs =============== */
L["g-coord-proofs"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "cls", pts = [[1, -3], [5, -2], [4, 2], [0, 1]].map(([x, y]) => ({ x, y })), seg = [{ x: -5, y: -3 }, { x: 5, y: 3 }], m = 1, n = 2, geo = null;
  const PRE = { rhombus: [[-4, -3], [0, -2], [1, 2], [-3, 1]], square: [[1, -3], [5, -2], [4, 2], [0, 1]], rect: [[-5, -1], [-1, -3], [2, 3], [-2, 5]], para: [[-5, -2], [1, -2], [3, 2], [-3, 2]], trap: [[-4, -2], [4, -2], [2, 2], [-1, 2]], kite: [[0, -4], [3, 1], [0, 3], [-3, 1]] };
  k.modes([["cls", "Classify"], ["part", "Partition"]], mode, v => { mode = v; hide(sm, v !== "part"); hide(sn, v !== "part"); hide(sel, v !== "cls"); st.finish(); });
  const sel = k.select("Shape", [["square", "Tilted square"], ["rhombus", "Rhombus"], ["rect", "Tilted rectangle"], ["para", "Parallelogram"], ["trap", "Trapezoid"], ["kite", "Kite"]], "square", v => { pts = PRE[v].map(([x, y]) => ({ x, y })); st.finish(); });
  const sm = k.slider(`<i>m</i>`, 1, 6, 1, m, v => m = v), sn = k.slider(`<i>n</i>`, 1, 6, 1, n, v => n = v);
  hide(sm, true); hide(sn, true);
  const st = k.stepper(() => mode === "cls" ? 5 : 3, () => {}, { ms: 1100 });
  st.finish();
  dragInt(c, () => geo, () => mode === "cls" ? pts : seg);
  const slope = (p, q) => q.x === p.x ? null : Q(q.y - p.y, q.x - p.x);
  const slT = s => s === null ? "undef." : qt(s), slH = s => s === null ? "undefined" : qh(s);
  const box = (on, html) => `<div style="border-left:3px solid ${on ? "var(--amber)" : "var(--line)"};padding:2px 0 2px 8px;margin:6px 0">${html}</div>`;
  k.loop(() => {
    c.begin(); const { w } = c; c.d.__w = c.w;
    const P = k.plot(c, { xmin: -7, xmax: 7, ymin: -6, ymax: 6, equal: true, pad: { l: 28, r: 10, t: 52, b: 24 } }); geo = P;
    P.grid(1); P.axes();
    const S = p => ({ x: P.X(p.x), y: P.Y(p.y) });
    const kk = st.k;
    if (mode === "cls") {
      keepIn(P, pts);
      const q = quadInfo(pts);
      drawQuad(k, c, P, pts, q.bad ? q : (kk >= 5 ? q : null), { coords: true, hot: kk === 1 || kk === 2 ? [0, 1, 2, 3] : [] });
      if (q.bad) { k.setRO(`<div><h2>Coordinate proof</h2></div><div class="landmark hit"><div class="big">degenerate figure</div><div class="note">${q.bad}</div></div>`); return; }
      const sl = [0, 1, 2, 3].map(i => slope(pts[i], pts[(i + 1) % 4]));
      // side labels
      if (kk >= 1) for (let i = 0; i < 4; i++) { const a = S(pts[i]), b = S(pts[(i + 1) % 4]); const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const ccx = pts.reduce((s_, p) => s_ + P.X(p.x), 0) / 4, ccy = pts.reduce((s_, p) => s_ + P.Y(p.y), 0) / 4; let nx = mx - ccx, ny = my - ccy; const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
        const lx = mx + nx * 22, ly = my + ny * 18;
        tag(k, d, `m ${slT(sl[i])}`, lx, ly - (kk >= 2 ? 9 : 0), C.pink, { box: kk === 1 ? C.amber : null });
        if (kk >= 2) tag(k, d, radT(q.L2[i]), lx, ly + 10, C.violet, { box: kk === 2 ? C.amber : null }); }
      if (kk >= 3) { d.line(P.X(pts[0].x), P.Y(pts[0].y), P.X(pts[2].x), P.Y(pts[2].y), C.violet, 1.6, [6, 5]); d.line(P.X(pts[1].x), P.Y(pts[1].y), P.X(pts[3].x), P.Y(pts[3].y), C.violet, 1.6, [6, 5]);
        const m1 = { x: (pts[0].x + pts[2].x) / 2, y: (pts[0].y + pts[2].y) / 2 }, m2 = { x: (pts[1].x + pts[3].x) / 2, y: (pts[1].y + pts[3].y) / 2 };
        d.circle(P.X(m1.x), P.Y(m1.y), 5, kk === 3 ? C.amber : C.violet); d.circle(P.X(m2.x), P.Y(m2.y), 5, null, kk === 3 ? C.amber : C.violet, 2); }
      const mp = (p, r) => `(${qh(Q(p.x + r.x, 2))}, ${qh(Q(p.y + r.y, 2))})`;
      const sides = ["AB", "BC", "CD", "DA"];
      let html = "";
      html += box(kk === 1, `<div class="row">${M(sides.map((s_, i) => `<i>m</i><sub>${s_}</sub> = <span class="c3">${slH(sl[i])}</span>`).join(", &nbsp;"))}</div><div class="lbl" style="font-size:12.5px;color:var(--muted)">${kk >= 1 ? `slope formula: ${q.p1 ? "AB ∥ CD (equal slopes)" : "AB and CD not parallel"}; ${q.p2 ? "BC ∥ DA (equal slopes)" : "BC and DA not parallel"}` : "step 1: slopes of the sides"}</div>`);
      if (kk >= 2) html += box(kk === 2, `<div class="row">${M(sides.map((s_, i) => `${s_} = <span class="c4">${radT(q.L2[i])}</span>`).join(", &nbsp;"))}</div><div class="lbl" style="font-size:12.5px;color:var(--muted)">distance formula: ${q.allEq || (q.L2.every(l => l === q.L2[0])) ? "all four sides congruent" : q.c1 && q.c2 ? "opposite sides congruent" : q.kiteP ? "two pairs of consecutive sides congruent" : "no special pattern"}</div>`);
      if (kk >= 3) html += box(kk === 3, `<div class="row">${M(`<i>M</i><sub>AC</sub> = ${mp(pts[0], pts[2])}, &nbsp;<i>M</i><sub>BD</sub> = ${mp(pts[1], pts[3])}`)}</div><div class="lbl" style="font-size:12.5px;color:var(--muted)">midpoint formula: ${q.bis ? "same point, so the diagonals bisect each other" : "different points, so the diagonals do not bisect each other"}</div>`);
      if (kk >= 4) { const s1 = slope(pts[0], pts[2]), s2 = slope(pts[1], pts[3]);
        html += box(kk === 4, `<div class="row">${M(`<i>m</i><sub>AC</sub> = <span class="c3">${slH(s1)}</span>, <i>m</i><sub>BD</sub> = <span class="c3">${slH(s2)}</span>; &nbsp;AC = <span class="c4">${radT(len2(q.d1))}</span>, BD = <span class="c4">${radT(len2(q.d2))}</span>`)}</div><div class="lbl" style="font-size:12.5px;color:var(--muted)">diagonals ${q.perp ? (s1 === null || s2 === null ? "vertical and horizontal, so perpendicular" : "slopes multiply to −1, so perpendicular") : "not perpendicular"}; ${q.dcong ? "congruent" : "not congruent"}</div>`); }
      if (kk >= 5) html += `<div class="landmark hit"><div class="big"><span class="c5">∴ ${q.cls}</span></div><div class="note">${WHY[q.cls]}</div></div>`;
      else html += `<p class="narr">Press Step to run the next check, or Play to run them all.</p>`;
      k.setRO(`<div><h2>Coordinate proof</h2><div style="margin-top:8px;font:19px/1.4 var(--math);display:flex;flex-wrap:wrap;gap:2px 12px">${pts.map((p, i) => M(`<span class="c2"><i>${VN[i]}</i>(${ng(p.x)}, ${ng(p.y)})</span>`)).join("")}</div></div>${html}<p class="narr">Drag a vertex: every number updates.</p>`);
    } else {
      keepIn(P, seg);
      const [A, B] = seg, sA = S(A), sB = S(B), N = m + n;
      if (A.x === B.x && A.y === B.y) { d.circle(sA.x, sA.y, 7, C.cyan, C.ink, 2);
        k.setRO(`<div><h2>Partition</h2></div><div class="landmark hit"><div class="big">A = B</div><div class="note">A segment needs two different endpoints. Drag B away from A.</div></div>`); return; }
      const dx = B.x - A.x, dy = B.y - A.y, Px = Q(n * A.x + m * B.x, N), Py = Q(n * A.y + m * B.y, N), Pp = { x: A.x + dx * m / N, y: A.y + dy * m / N }, sP = S(Pp);
      // slope triangles
      d.line(sA.x, sA.y, sB.x, sA.y, k.alpha(C.pink, .55), 1.5, [5, 4]); d.line(sB.x, sA.y, sB.x, sB.y, k.alpha(C.pink, .55), 1.5, [5, 4]);
      if (kk >= 2) { d.line(sA.x, sA.y, sP.x, sA.y, C.pink, 2.5); d.line(sP.x, sA.y, sP.x, sP.y, C.pink, 2.5); }
      d.line(sA.x, sA.y, sB.x, sB.y, C.violet, 3);
      for (let i = 1; i < N; i++) { const t = { x: P.X(A.x + dx * i / N), y: P.Y(A.y + dy * i / N) }; const l = Math.hypot(sB.x - sA.x, sB.y - sA.y), nx = -(sB.y - sA.y) / l * 6, ny = (sB.x - sA.x) / l * 6; d.line(t.x - nx, t.y - ny, t.x + nx, t.y + ny, i === m && kk >= 3 ? C.green : C.violet, 2); }
      if (kk >= 1) { tag(k, d, `Δx = ${ng(dx)}`, (sA.x + sB.x) / 2, sA.y + (sB.y > sA.y ? -14 : 16), C.pink); tag(k, d, `Δy = ${ng(dy)}`, sB.x + (sB.x > sA.x ? 8 : -8), (sA.y + sB.y) / 2, C.pink, { align: sB.x > sA.x ? "left" : "right" }); }
      [[sA, "A", A], [sB, "B", B]].forEach(([s, t, p]) => { d.circle(s.x, s.y, 7, C.cyan, C.ink, 2); tag(k, d, `${t}(${ng(p.x)}, ${ng(p.y)})`, s.x + 10, s.y - 14, C.cyan, { align: "left" }); });
      if (kk >= 3) { d.circle(sP.x, sP.y, 7, C.green, C.ink, 2); tag(k, d, `P(${qt(Px)}, ${qt(Py)})`, sP.x + 12, sP.y + 16, C.green, { align: "left" }); }
      const fr = Q(m, N);
      const rows = [
        `<div class="row">${M(`<i>B</i> − <i>A</i> = (<span class="c3">${ng(dx)}</span>, <span class="c3">${ng(dy)}</span>)`)}<span class="lbl">run and rise from A to B</span></div>`,
        `<div class="row">${M(`<span class="fr"><span><i>m</i></span><span><i>m</i> + <i>n</i></span></span> = <span class="fr"><span>${m}</span><span>${N}</span></span>${fr.d !== N ? ` = ${qh(fr)}` : ""}`)}<span class="lbl">P is this fraction of the way from A (${m} of ${N} equal parts)</span></div>`,
        `<div class="row">${M(`<i>P</i> = (${ng(A.x)} + ${qh(fr)}·${dx < 0 ? "(" + ng(dx) + ")" : dx}, ${ng(A.y)} + ${qh(fr)}·${dy < 0 ? "(" + ng(dy) + ")" : dy}) = <span class="c5">(${qh(Px)}, ${qh(Py)})</span>`)}<span class="lbl">A plus that fraction of the change</span></div>`];
      const AB = Math.hypot(dx, dy);
      k.setRO(`<div><h2>Partition ${m} : ${n}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${kk >= 3 ? M(`<span class="c5"><i>P</i>(${qh(Px)}, ${qh(Py)})</span>`) : M(`<i>AP</i> : <i>PB</i> = ${m} : ${n}`)}</div></div>
        <div class="ro-rows">${rows.slice(0, Math.max(1, kk)).join("")}
        ${kk >= 3 ? `<div class="row">${M(`<i>AP</i> = ${qh(fr)} · <i>AB</i> = ${qh(fr)} · ${radT(dx * dx + dy * dy)}`)}<span class="lbl">≈ ${k.fmt(AB * m / N, 2)} of ${k.fmt(AB, 2)}</span></div>` : ""}</div>
        <div class="landmark${kk >= 3 ? " hit" : ""}"><div class="big">${M(`<i>P</i> = <i>A</i> + <span class="fr"><span><i>m</i></span><span><i>m</i> + <i>n</i></span></span>(<i>B</i> − <i>A</i>)`)}</div><div class="note">Ratio ${m} : ${n} means ${N} equal parts with P after the first ${m}. ${m === n ? "Equal parts: P is the midpoint." : ""}</div></div>
        <p class="narr">Drag A and B, change m and n, and Step through the formula.</p>`);
    }
    void w;
  });
};
})();
