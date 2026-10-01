/* ============ Labs: Geometry G (circles: arcs, inscribed angles, chords & tangents, secants, equations) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ng = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const f1 = v => { const s = (Math.round(v * 10) / 10).toFixed(1); return s === "-0.0" ? "0.0" : s.replace("-", "−"); };
const f2 = v => { const s = (Math.round(v * 100) / 100).toFixed(2); return s === "-0.00" ? "0.00" : s.replace("-", "−"); };
const dg = v => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : f1(v)) + "°";
const RAD = Math.PI / 180;
const norm = t => ((t % 360) + 360) % 360;
const span = (a, b) => norm(b - a);                       // ccw arc measure from a to b (degrees)
const inside = (a, b, x) => { const s = span(a, b), u = span(a, x); return u > 1e-9 && u < s - 1e-9; };
function sqf(n){ let a = 1, b = n; for (let f = 2; f * f <= b; f++) while (b % (f * f) === 0) { b /= f * f; a *= f; } return [a, b]; }
const radT = n => { if (n === 0) return "0"; const [a, b] = sqf(n); return b === 1 ? String(a) : (a === 1 ? "" : a) + "√" + b; };
const radD = n => { const s = radT(n); return s.includes("√") ? `${s} ≈ ${f2(Math.sqrt(n))}` : s; };
const wrapOf = el => el.closest(".ctl") || el;
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
const nearest = (p, list, r = 18) => { let best = null, bd = r; list.forEach((q, i) => { if (!q) return; const dd = Math.hypot(p.x - q.x, p.y - q.y); if (dd <= bd) { bd = dd; best = i; } }); return best; };

/* ---- drawing helpers (pixel coordinates, math angles in degrees ccw) ---- */
function poly(g, pts, fill, stroke, lw = 2, dash){ g.save(); g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.lineJoin = "round"; if (dash) g.setLineDash(dash); g.stroke(); } g.restore(); }
function arcPx(g, cx, cy, R, t1, s, color, lw = 2, dash){ if (s <= 0 || R <= 0) return; g.save(); g.strokeStyle = color; g.lineWidth = lw; g.lineCap = "round"; if (dash) g.setLineDash(dash); g.beginPath(); g.arc(cx, cy, R, -t1 * RAD, -(t1 + s) * RAD, true); g.stroke(); g.restore(); }
function unitv(P, V){ const dx = P.x - V.x, dy = P.y - V.y, l = Math.hypot(dx, dy) || 1; return { x: dx / l, y: dy / l }; }
// angle mark at V between rays V→P and V→Q (pixel coords), the smaller angle; n strokes
function angMark(g, V, P, Q, r, color, lw = 2, n = 1){
  const a1 = Math.atan2(P.y - V.y, P.x - V.x); let dl = Math.atan2(Q.y - V.y, Q.x - V.x) - a1;
  while (dl > Math.PI) dl -= 2 * Math.PI; while (dl <= -Math.PI) dl += 2 * Math.PI;
  g.save(); g.strokeStyle = color; g.lineWidth = lw; for (let i = 0; i < n; i++) { g.beginPath(); g.arc(V.x, V.y, r + i * 4.5, a1, a1 + dl, dl < 0); g.stroke(); } g.restore();
  return a1 + dl / 2;
}
function rightMark(g, V, P, Q, s, color){ const u = unitv(P, V), w = unitv(Q, V); g.save(); g.strokeStyle = color; g.lineWidth = 1.6; g.beginPath(); g.moveTo(V.x + u.x * s, V.y + u.y * s); g.lineTo(V.x + (u.x + w.x) * s, V.y + (u.y + w.y) * s); g.lineTo(V.x + w.x * s, V.y + w.y * s); g.stroke(); g.restore(); }
function ticks(g, P, Q, n, color, len = 6){ if (!n) return; const mx = (P.x + Q.x) / 2, my = (P.y + Q.y) / 2, u = unitv(Q, P), nx = -u.y, ny = u.x; g.save(); g.strokeStyle = color; g.lineWidth = 2; for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 5; g.beginPath(); g.moveTo(mx + u.x * o - nx * len, my + u.y * o - ny * len); g.lineTo(mx + u.x * o + nx * len, my + u.y * o + ny * len); g.stroke(); } g.restore(); }
// layout of a bare circle stage (no grid)
function ring(c, top, bottom = 18){ const w = c.w, h = c.h, lab = 34; const R = Math.max(36, Math.min(w / 2 - lab - 6, (h - top - bottom) / 2 - lab)); return { cx: w / 2, cy: top + (h - top - bottom) / 2, R }; }
const onR = (S, t, rr) => ({ x: S.cx + (rr ?? S.R) * Math.cos(t * RAD), y: S.cy - (rr ?? S.R) * Math.sin(t * RAD) });
const angOf = (S, p) => norm(Math.round(Math.atan2(S.cy - p.y, p.x - S.cx) / RAD));
function label(d, s, S, t, color, font, rr){ const p = onR(S, t, rr ?? S.R + 17); d.text(s, p.x, p.y, { font, color, align: "center", base: "middle" }); }

/* ===================== g-circles ===================== */
L["g-circles"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "arc", T = { A: 35, B: 125, C: 230, P: 200, Q: 270 }, S = null;
  const modesEl = k.modes([["arc", "Central angle"], ["add", "Arc addition"], ["chord", "Chords"]], mode, m => { mode = m; show(); });
  const bSemi = k.button("Semicircle", () => { T.B = norm(T.A + 180); }, "btn ghost");
  const bCopy = k.button("Copy arc AB to PQ", () => { T.Q = norm(T.P + span(T.A, T.B)); }, "btn ghost");
  k.button("Reset", () => { T = { A: 35, B: 125, C: 230, P: 200, Q: 270 }; }, "btn ghost");
  function show(){ bSemi.style.display = mode === "chord" ? "none" : ""; bCopy.style.display = mode === "chord" ? "" : "none"; }
  show();
  k.hint("Drag the points on the circle");
  const names = () => mode === "arc" ? ["A", "B"] : mode === "add" ? ["A", "B", "C"] : ["A", "B", "P", "Q"];
  drag(c, p => S ? (() => { const n = names(); const i = nearest(p, n.map(nm => onR(S, T[nm])), 20); return i == null ? null : n[i]; })() : null,
    (nm, p) => { T[nm] = angOf(S, p); });
  k.loop(() => {
    c.begin(); const top = topBelow(modesEl); S = ring(c, top);
    const { cx, cy, R } = S, lf = `italic 600 16px ${F.math}`, mono = `600 12px ${F.mono}`, O = { x: cx, y: cy };
    d.circle(cx, cy, R, null, alpha(C.text, .35), 1.5);
    d.circle(cx, cy, 3.5, C.text); d.text("O", cx - 12, cy + 14, { font: lf, color: C.muted, align: "center", base: "middle" });
    const radius = t => { const q = onR(S, t); d.line(cx, cy, q.x, q.y, C.cyan, 2.2); };
    const dot = (nm, col) => { const q = onR(S, T[nm]); d.circle(q.x, q.y, 7.5, col, C.ink, 2.5); label(d, nm, S, T[nm], col, lf); };
    const minorOf = (a, b) => { const s = span(a, b); return s <= 180 ? { t: a, s } : { t: b, s: 360 - s }; };
    let ro = "";
    if (mode === "arc") {
      const m = minorOf(T.A, T.B), mm = m.s;
      if (mm === 0) {
        radius(T.A); dot("A", C.cyan);
        ro = `<div><h2>Central angle ∠AOB</h2><div class="ro-big" style="margin-top:8px">${M(`m∠<i>AOB</i> = <span class="num c1">0°</span>`)}</div></div>
          <div class="landmark hit"><div class="big">A and B coincide</div><div class="note">The two radii lie on top of each other, so there is no angle and no arc between distinct points. Drag B away from A.</div></div>`;
      } else {
        const semi = mm === 180;
        arcPx(g, cx, cy, R, m.t + mm, 360 - mm, alpha(C.violet, .9), 4);
        arcPx(g, cx, cy, R, m.t, mm, C.pink, 6);
        const mid = m.t + mm / 2, midM = mid + 180;
        if (!semi) angMark(g, O, onR(S, T.A), onR(S, T.B), Math.min(30, R * .3), C.amber, 2.5);
        else arcPx(g, cx, cy, Math.min(30, R * .3), m.t, 180, C.amber, 2.5);
        radius(T.A); radius(T.B);
        const lp = onR(S, mid, Math.min(30, R * .3) + 20); d.text(dg(mm), lp.x, lp.y, { font: mono, color: C.amber, align: "center", base: "middle" });
        label(d, dg(mm), S, mid, C.pink, mono, R - 26);
        label(d, dg(360 - mm), S, midM, C.violet, mono, R - 26);
        const cq = onR(S, midM); d.circle(cq.x, cq.y, 4.5, C.violet); label(d, "C", S, midM, C.violet, lf);
        dot("A", C.cyan); dot("B", C.cyan);
        const chord = 10 * Math.sin(mm / 2 * RAD);
        ro = `<div><h2>Central angle ∠AOB</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c1">m∠<i>AOB</i> = ${dg(mm)}</span>`)}</div></div>
          <div class="ro-rows">
            <div class="row">${M(`<span class="c3">m⌢<i>AB</i> = ${dg(mm)}</span>`)}<span class="lbl">${semi ? "a semicircle" : "minor arc = its central angle"}</span></div>
            <div class="row">${M(`<span class="c4">m⌢<i>ACB</i> = 360° − ${dg(mm)} = ${dg(360 - mm)}</span>`)}<span class="lbl">${semi ? "the other semicircle" : "major arc, named with three letters"}</span></div>
            <div class="row">${M(`<i>AB</i> = 2<i>r</i> sin(${dg(mm / 2)}) = ${f2(chord)}`)}<span class="lbl">chord length when the radius is r = 5</span></div>
          </div>
          ${semi ? `<div class="landmark hit"><div class="big">${M(`<span class="ov"><i>AB</i></span> is a diameter`)}</div><div class="note">A, O and B are collinear, the central angle is a straight angle, and each half of the circle is a 180° semicircle. The chord is 2r = 10, the longest possible.</div></div>`
          : `<div class="landmark"><div class="big">${M(`<span class="c3">${dg(mm)}</span> + <span class="c4">${dg(360 - mm)}</span> = 360°`)}</div><div class="note">The minor arc gets the central angle's measure and the major arc gets the rest of the full turn. ${mm === 90 ? "A 90° arc is a quarter of the circle." : mm === 60 ? "At 60°, △AOB is equilateral and the chord equals the radius." : "Two radii make △AOB isosceles, with base angles of " + dg((180 - mm) / 2) + "."}</div></div>`}
          <p class="narr">Drag A or B. Press Semicircle to put B opposite A.</p>`;
      }
    } else if (mode === "add") {
      const { A, B, C: Cc } = T;
      if (A === B || A === Cc || B === Cc) {
        ["A", "B", "C"].forEach(n => { radius(T[n]); dot(n, n === "C" ? C.violet : C.cyan); });
        ro = `<div><h2>Arc Addition Postulate</h2></div><div class="landmark hit"><div class="big">two points coincide</div><div class="note">The postulate needs three distinct points: two arcs that share only their common endpoint. Drag the points apart.</div></div>`;
      } else {
        // arc from A to B through C, split at C
        let a1, s1, a2, s2; // a1: start of arc AC, s1 its measure; a2: start of arc CB
        if (inside(A, B, Cc)) { a1 = A; s1 = span(A, Cc); a2 = Cc; s2 = span(Cc, B); }
        else { a2 = B; s2 = span(B, Cc); a1 = Cc; s1 = span(Cc, A); }
        const tot = s1 + s2;
        arcPx(g, cx, cy, R, 0, 360, alpha(C.text, .08), 6);
        arcPx(g, cx, cy, R, a1, s1, C.pink, 6); arcPx(g, cx, cy, R, a2, s2, C.violet, 6);
        ["A", "B", "C"].forEach(n => radius(T[n]));
        label(d, dg(s1), S, a1 + s1 / 2, C.pink, mono, R - 26); label(d, dg(s2), S, a2 + s2 / 2, C.violet, mono, R - 26);
        dot("A", C.cyan); dot("B", C.cyan); dot("C", C.amber);
        const nm = tot < 180 ? `minor arc ⌢<i>AB</i>` : tot === 180 ? `semicircle ⌢<i>ACB</i>` : `major arc ⌢<i>ACB</i>`;
        ro = `<div><h2>Arc Addition Postulate</h2><div class="ro-big" style="margin-top:8px">${M(`m⌢<i>ACB</i> = <span class="num c1">${dg(tot)}</span>`)}</div></div>
          <div class="ro-rows">
            <div class="row">${M(`<span class="c3">m⌢<i>AC</i> = ${dg(s1)}</span>`)}<span class="lbl">from A to C</span></div>
            <div class="row">${M(`<span class="c4">m⌢<i>CB</i> = ${dg(s2)}</span>`)}<span class="lbl">from C to B</span></div>
            <div class="row">${M(`${dg(s1)} + ${dg(s2)} = ${dg(tot)}`)}<span class="lbl">the arc from A through C to B is the ${nm}</span></div>
            <div class="row">${M(`360° − ${dg(tot)} = ${dg(360 - tot)}`)}<span class="lbl">the rest of the circle (grey)</span></div>
          </div>
          <div class="landmark${tot === 180 ? " hit" : ""}"><div class="big">${M(`m⌢<i>AC</i> + m⌢<i>CB</i> = m⌢<i>ACB</i>`)}</div><div class="note">The two arcs share only the point C, so their measures add. ${tot > 180 ? "The total is over 180°, so the arc must be named with three letters, ACB." : tot === 180 ? "Here the total is exactly 180°: A and B are the ends of a diameter." : "The total is under 180°, so this arc is also the minor arc AB."}</div></div>
          <p class="narr">Drag C across A or B and watch which arc it splits.</p>`;
      }
    } else {
      const m1 = minorOf(T.A, T.B), m2 = minorOf(T.P, T.Q);
      const eq = m1.s === m2.s && m1.s > 0;
      arcPx(g, cx, cy, R, m1.t, m1.s, C.pink, 6); arcPx(g, cx, cy, R, m2.t, m2.s, alpha(C.pink, .6), 6);
      ["A", "B", "P", "Q"].forEach(n => { const q = onR(S, T[n]); d.line(cx, cy, q.x, q.y, alpha(C.cyan, .7), 1.6); });
      const pa = onR(S, T.A), pb = onR(S, T.B), pp = onR(S, T.P), pq = onR(S, T.Q);
      if (m1.s > 0) angMark(g, O, pa, pb, Math.min(24, R * .22), C.amber, 2.2, 1);
      if (m2.s > 0) angMark(g, O, pp, pq, Math.min(24, R * .22) + 8, C.amber, 2.2, 2);
      d.line(pa.x, pa.y, pb.x, pb.y, C.pink, 3); d.line(pp.x, pp.y, pq.x, pq.y, alpha(C.pink, .75), 3, [7, 4]);
      if (eq) { ticks(g, pa, pb, 1, C.text); ticks(g, pp, pq, 1, C.text); }
      label(d, dg(m1.s), S, m1.t + m1.s / 2, C.pink, mono, R - 26); label(d, dg(m2.s), S, m2.t + m2.s / 2, C.pink, mono, R - 26);
      dot("A", C.cyan); dot("B", C.cyan); dot("P", C.cyan); dot("Q", C.cyan);
      const ch = s => 10 * Math.sin(s / 2 * RAD);
      const lm = (m1.s === 0 || m2.s === 0) ? `<div class="landmark hit"><div class="big">a chord has shrunk to a point</div><div class="note">Two endpoints coincide, so that chord has length 0 and no arc. Drag them apart.</div></div>`
        : eq ? `<div class="landmark hit"><div class="big">${M(`⌢<i>AB</i> ≅ ⌢<i>PQ</i> and <span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>PQ</i></span>`)}</div><div class="note">Equal central angles give congruent arcs and congruent chords (SAS on the isosceles triangles AOB and POQ). In one circle each statement implies the others.</div></div>`
        : `<div class="landmark"><div class="big">${M(`m⌢<i>AB</i> ${m1.s > m2.s ? "&gt;" : "&lt;"} m⌢<i>PQ</i> ⇒ <i>AB</i> ${m1.s > m2.s ? "&gt;" : "&lt;"} <i>PQ</i>`)}</div><div class="note">In one circle the larger minor arc has the longer chord. Press Copy arc to give PQ the same central angle as AB.</div></div>`;
      ro = `<div><h2>Chords and arcs, r = 5</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c3">${dg(m1.s)}</span> ${eq ? "=" : "vs"} <span class="c3">${dg(m2.s)}</span>`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`<span class="c1">m∠<i>AOB</i></span> = <span class="c3">m⌢<i>AB</i> = ${dg(m1.s)}</span>`)}<span class="lbl">solid chord</span></div>
          <div class="row">${M(`<span class="c1">m∠<i>POQ</i></span> = <span class="c3">m⌢<i>PQ</i> = ${dg(m2.s)}</span>`)}<span class="lbl">dashed chord</span></div>
          <div class="row">${M(`<i>AB</i> = ${f2(ch(m1.s))}, &nbsp;<i>PQ</i> = ${f2(ch(m2.s))}`)}<span class="lbl">chord = 2r sin(½ central angle)</span></div>
        </div>${lm}<p class="narr">Arcs are compared only in the same circle or in congruent circles.</p>`;
    }
    k.setRO(ro);
  });
};

/* ===================== g-inscribed ===================== */
L["g-inscribed"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const T0 = () => ({ A: 215, C: 325, B: 95, Q: [100, 190, 280, 20], TA: 270, TB: 30 });
  let mode = "ins", T = T0(), S = null;
  const modesEl = k.modes([["ins", "Inscribed"], ["thal", "Thales"], ["cyc", "Cyclic quad"], ["tan", "Tangent–chord"]], mode, m => { mode = m; show(); });
  const bRect = k.button("Rectangle", () => { T.Q = [45, 135, 225, 315]; }, "btn ghost");
  const bTrap = k.button("Isosceles trapezoid", () => { T.Q = [60, 120, 200, 340]; }, "btn ghost");
  k.button("Reset", () => { T = T0(); }, "btn ghost");
  function show(){ [bRect, bTrap].forEach(b => b.style.display = mode === "cyc" ? "" : "none"); }
  show();
  k.hint("Drag the points on the circle");
  const handles = () => {
    if (!S) return [];
    if (mode === "ins") return [["A", T.A], ["C", T.C], ["B", T.B]];
    if (mode === "thal") return [["B", T.B]];
    if (mode === "cyc") return T.Q.map((t, i) => [i, t]);
    return [["TA", T.TA], ["TB", T.TB]];
  };
  drag(c, p => { const hs = handles(); const i = nearest(p, hs.map(h => onR(S, h[1])), 20); return i == null ? null : hs[i][0]; },
    (h, p) => {
      const t = angOf(S, p);
      if (mode === "thal") { T.B = t; return; }
      if (mode === "cyc") {
        const q = T.Q, i = h, prev = q[(i + 3) % 4], next = q[(i + 1) % 4];
        const lo = span(prev, t), room = span(prev, next);           // t must lie strictly between its neighbours
        if (lo >= 4 && lo <= room - 4) q[i] = t; return;
      }
      T[h] = t;
    });
  k.loop(() => {
    c.begin(); const top = topBelow(modesEl); S = ring(c, top);
    const { cx, cy, R } = S, O = { x: cx, y: cy }, lf = `italic 600 16px ${F.math}`, mono = `600 12px ${F.mono}`;
    d.circle(cx, cy, R, null, alpha(C.text, .35), 1.5);
    d.circle(cx, cy, 3.5, C.text);
    const dot = (nm, t, col, r = 7.5) => { const q = onR(S, t); d.circle(q.x, q.y, r, col, C.ink, 2.5); if (nm) label(d, nm, S, t, col, lf); };
    const ar = Math.min(28, R * .25);
    let ro = "";
    if (mode === "ins" || mode === "thal") {
      const A = mode === "thal" ? 180 : T.A, Cc = mode === "thal" ? 0 : T.C, B = T.B;
      const pA = onR(S, A), pC = onR(S, Cc), pB = onR(S, B);
      if (B === A || B === Cc || A === Cc) {
        dot("A", A, C.pink); dot("C", Cc, C.pink); dot("B", B, C.amber);
        ro = `<div><h2>Inscribed angle ∠ABC</h2></div><div class="landmark hit"><div class="big">two points coincide</div><div class="note">An inscribed angle needs three distinct points on the circle: the vertex B and the two ends of its arc. Drag them apart.</div></div>`;
      } else {
        // intercepted arc: the arc from A to C not containing B
        const st = inside(A, Cc, B) ? Cc : A, s = inside(A, Cc, B) ? span(Cc, A) : span(A, Cc);
        arcPx(g, cx, cy, R, st, s, C.pink, 6);
        // central angle on that arc
        if (s < 180) angMark(g, O, pA, pC, ar, C.cyan, 2.2);
        else arcPx(g, cx, cy, ar, st, s, C.cyan, 2.2, s === 180 ? null : [4, 3]);
        d.line(cx, cy, pA.x, pA.y, alpha(C.cyan, .85), 2); d.line(cx, cy, pC.x, pC.y, alpha(C.cyan, .85), 2);
        d.line(pB.x, pB.y, pA.x, pA.y, C.amber, 2.6); d.line(pB.x, pB.y, pC.x, pC.y, C.amber, 2.6);
        const ins = s / 2;
        if (Math.abs(ins - 90) < 1e-9) rightMark(g, pB, pA, pC, 13, C.amber); else angMark(g, pB, pA, pC, 26, C.amber, 2.4);
        // measure labels
        const ub = unitv(O, pB), mb = { x: pB.x + ub.x * 46, y: pB.y + ub.y * 46 };
        d.text(dg(ins), mb.x, mb.y, { font: `700 13px ${F.mono}`, color: C.amber, align: "center", base: "middle" });
        if (s !== 180) { const lp = onR(S, st + s / 2, ar + 18); d.text(dg(s), lp.x, lp.y, { font: mono, color: C.cyan, align: "center", base: "middle" }); }
        label(d, dg(s), S, st + s / 2, C.pink, mono, R - 26);
        dot("A", A, C.pink, mode === "thal" ? 5.5 : 7.5); dot("C", Cc, C.pink, mode === "thal" ? 5.5 : 7.5); dot("B", B, C.amber);
        { const lo = onR(S, st + s / 2 + 180, 16); d.text("O", lo.x, lo.y, { font: lf, color: C.muted, align: "center", base: "middle" }); }
        const lm = s === 180 ? `<div class="landmark hit"><div class="big">${M(`<span class="ov"><i>AC</i></span> is a diameter ⇒ <span class="c1">m∠<i>ABC</i> = 90°</span>`)}</div><div class="note">The intercepted arc is a semicircle, so every angle inscribed in it is ½ · 180° = 90° (Thales' theorem). Drag B anywhere: it stays a right angle.</div></div>`
          : s > 180 ? `<div class="landmark"><div class="big">${M(`<span class="c1">${dg(ins)}</span> = ½ · <span class="c3">${dg(s)}</span>`)}</div><div class="note">B is on the minor arc, so the angle intercepts the major arc and is obtuse. Its "central angle" is the reflex angle at O (dashed), still twice the inscribed angle.</div></div>`
          : `<div class="landmark"><div class="big">${M(`<span class="c1">${dg(ins)}</span> = ½ · <span class="c2">${dg(s)}</span>`)}</div><div class="note">Drag B anywhere on the major arc: the inscribed angle does not change, because it always intercepts the same arc AC. Cross over A or C and it switches to the other arc.</div></div>`;
        ro = `<div><h2>${mode === "thal" ? "Angle inscribed in a semicircle" : "Inscribed angle ∠ABC"}</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c1">m∠<i>ABC</i> = ${dg(ins)}</span>`)}</div></div>
          <div class="ro-rows">
            <div class="row">${M(`<span class="c3">m⌢<i>AC</i> = ${dg(s)}</span>`)}<span class="lbl">intercepted arc (not containing B)</span></div>
            <div class="row">${M(`<span class="c2">m∠<i>AOC</i> = ${dg(s)}</span>`)}<span class="lbl">${s < 180 ? "central angle on the same arc" : s === 180 ? "a straight angle: AC is a diameter" : "reflex central angle"}</span></div>
            <div class="row">${M(`½ · ${dg(s)} = ${dg(ins)}`)}<span class="lbl">Inscribed Angle Theorem</span></div>
          </div>${lm}`;
      }
    } else if (mode === "cyc") {
      const q = T.Q, P = q.map(t => onR(S, t)), nm = ["A", "B", "C", "D"];
      const arcs = q.map((t, i) => span(t, q[(i + 1) % 4]));        // arc from vertex i to i+1
      const ang = q.map((_, i) => (arcs[(i + 1) % 4] + arcs[(i + 2) % 4]) / 2);
      arcPx(g, cx, cy, R, q[1], arcs[1] + arcs[2], C.pink, 6);         // arc BCD, intercepted by angle A
      arcPx(g, cx, cy, R, q[3], arcs[3] + arcs[0], alpha(C.pink, .35), 6); // arc DAB, intercepted by angle C
      poly(g, P, alpha(C.violet, .14), C.violet, 2.6);
      [0, 2].forEach((i, j) => angMark(g, P[i], P[(i + 3) % 4], P[(i + 1) % 4], 22, C.amber, 2.2, j + 1));
      [1, 3].forEach(i => angMark(g, P[i], P[(i + 3) % 4], P[(i + 1) % 4], 20, alpha(C.text, .7), 1.6));
      P.forEach((p, i) => { const u = unitv(O, p); d.text(dg(ang[i]), p.x + u.x * 44, p.y + u.y * 44, { font: `700 12px ${F.mono}`, color: i % 2 ? C.text : C.amber, align: "center", base: "middle" }); });
      q.forEach((t, i) => dot(nm[i], t, C.violet));
      const rect = ang.every(a => Math.abs(a - 90) < 1e-9);
      ro = `<div><h2>Cyclic quadrilateral ABCD</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c1">∠<i>A</i> + ∠<i>C</i> = 180°</span>`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`<span class="c1">m∠<i>A</i></span> = ½ <span class="c3">m⌢<i>BCD</i></span> = ½ · ${dg(arcs[1] + arcs[2])} = ${dg(ang[0])}`)}</div>
          <div class="row">${M(`<span class="c1">m∠<i>C</i></span> = ½ m⌢<i>DAB</i> = ½ · ${dg(arcs[3] + arcs[0])} = ${dg(ang[2])}`)}</div>
          <div class="row">${M(`m∠<i>B</i> + m∠<i>D</i> = ${dg(ang[1])} + ${dg(ang[3])} = ${dg(ang[1] + ang[3])}`)}</div>
          <div class="row">${M(`${dg(ang[0])} + ${dg(ang[1])} + ${dg(ang[2])} + ${dg(ang[3])} = 360°`)}<span class="lbl">angle sum of a quadrilateral</span></div>
        </div>
        <div class="landmark${rect ? " hit" : ""}"><div class="big">${rect ? "a rectangle: all four angles 90°" : "opposite angles are supplementary"}</div><div class="note">${rect ? "Both diagonals are diameters. A parallelogram is cyclic only when it is a rectangle, because its opposite angles are equal and must also sum to 180°." : "∠A and ∠C intercept the two arcs BCD and DAB, which together make the whole circle, so the angles sum to ½ · 360° = 180°. Same for ∠B and ∠D."}</div></div>
        <p class="narr">Drag a vertex between its neighbours, or try the presets.</p>`;
    } else {
      const A = T.TA, B = T.TB, pA = onR(S, A), pB = onR(S, B);
      const u = { x: -Math.sin(A * RAD), y: -Math.cos(A * RAD) };   // ccw tangent direction in pixel coords
      const Lg = Math.max(c.w, c.h);
      d.line(pA.x - u.x * Lg, pA.y - u.y * Lg, pA.x + u.x * Lg, pA.y + u.y * Lg, alpha(C.text, .6), 2);
      d.line(cx, cy, pA.x, pA.y, alpha(C.cyan, .85), 2);
      rightMark(g, pA, O, { x: pA.x + u.x * 10, y: pA.y + u.y * 10 }, 10, C.cyan);
      if (A === B) {
        dot("A", A, C.amber); dot("B", B, C.pink);
        ro = `<div><h2>Tangent–chord angle</h2></div><div class="landmark hit"><div class="big">B is on A</div><div class="note">The chord has length 0, so there is no angle. The tangent at A is perpendicular to radius OA. Drag B away.</div></div>`;
      } else {
        const s = span(A, B), ang = s / 2;
        arcPx(g, cx, cy, R, A, s, C.pink, 6);
        d.line(cx, cy, pB.x, pB.y, alpha(C.cyan, .85), 2);
        if (s < 180) angMark(g, O, pA, pB, ar, C.cyan, 2.2); else arcPx(g, cx, cy, ar, A, s, C.cyan, 2.2, s === 180 ? null : [4, 3]);
        d.line(pA.x, pA.y, pB.x, pB.y, C.amber, 2.6);
        const tp = { x: pA.x + u.x * 40, y: pA.y + u.y * 40 };
        if (Math.abs(ang - 90) < 1e-9) rightMark(g, pA, tp, pB, 14, C.amber); else angMark(g, pA, tp, pB, 30, C.amber, 2.6);
        // an inscribed angle on the other arc for comparison
        const tE = B + (360 - s) / 2, pE = onR(S, tE);
        d.line(pE.x, pE.y, pA.x, pA.y, alpha(C.amber, .45), 1.6, [5, 4]); d.line(pE.x, pE.y, pB.x, pB.y, alpha(C.amber, .45), 1.6, [5, 4]);
        angMark(g, pE, pA, pB, 20, alpha(C.amber, .6), 1.6);
        const bis = Math.atan2(pB.y - pA.y, pB.x - pA.x), ua = Math.atan2(u.y, u.x); let dl = bis - ua; while (dl > Math.PI) dl -= 2 * Math.PI; while (dl < -Math.PI) dl += 2 * Math.PI;
        const lab = { x: pA.x + Math.cos(ua + dl / 2) * 52, y: pA.y + Math.sin(ua + dl / 2) * 52 };
        d.text(dg(ang), lab.x, lab.y, { font: `700 13px ${F.mono}`, color: C.amber, align: "center", base: "middle" });
        label(d, dg(s), S, A + s / 2, C.pink, mono, R - 26);
        dot("E", tE, alpha(C.amber, .7), 5); dot("A", A, C.amber); dot("B", B, C.pink);
        ro = `<div><h2>Tangent–chord angle at A</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c1">${dg(ang)}</span> = ½ · <span class="c3">${dg(s)}</span>`)}</div></div>
          <div class="ro-rows">
            <div class="row">${M(`<span class="c3">m⌢<i>AB</i> = ${dg(s)}</span>`)}<span class="lbl">arc inside the angle between the tangent and chord AB</span></div>
            <div class="row">${M(`<span class="c1">m∠<i>AEB</i> = ${dg(ang)}</span>`)}<span class="lbl">an inscribed angle on the same arc (dashed)</span></div>
            <div class="row">${M(`180° − ${dg(ang)} = ${dg(180 - ang)}`)}<span class="lbl">the angle on the other side of the chord, ½ of ${dg(360 - s)}</span></div>
          </div>
          <div class="landmark${s === 180 ? " hit" : ""}"><div class="big">${s === 180 ? "chord AB is a diameter: 90°" : "the tangent acts like an inscribed side"}</div><div class="note">${s === 180 ? "The chord lies along the radius, which is perpendicular to the tangent." : "The angle between a tangent and a chord at the point of tangency is half its intercepted arc, the same as any inscribed angle on that arc, such as ∠AEB."}</div></div>
          <p class="narr">Drag A to move the tangent, or B to change the chord.</p>`;
      }
    }
    k.setRO(ro);
  });
};

/* ===================== g-chords-tangents ===================== */
L["g-chords-tangents"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const R1 = 10, R2 = 5;
  let mode = "chord", M1 = { x: -6, y: 0 }, M2 = { x: 3, y: -5 }, dir1 = 0, dir2 = 0, two = true, P = { x: 7, y: 1 }, geo = null;
  const modesEl = k.modes([["chord", "Chords"], ["tan", "Tangents"]], mode, m => { mode = m; show(); });
  const cTwo = k.check("second chord", two, v => two = v);
  const bEq = k.button("Equidistant", () => { two = true; cTwo.checked = true; M2 = { x: -M1.y, y: M1.x }; }, "btn ghost");
  const bOut = k.button("P outside", () => { P = { x: 7, y: 1 }; }, "btn ghost");
  const bOn = k.button("P on circle", () => { P = { x: 3, y: -4 }; }, "btn ghost");
  k.button("Reset", () => { M1 = { x: -6, y: 0 }; M2 = { x: 3, y: -5 }; P = { x: 7, y: 1 }; }, "btn ghost");
  function show(){ showEl(cTwo, mode === "chord"); bEq.style.display = mode === "chord" ? "" : "none"; [bOut, bOn].forEach(b => b.style.display = mode === "tan" ? "" : "none"); }
  show();
  const hintEl = (() => { k.hint("Drag the midpoint M of a chord"); const hs = k.stage.querySelectorAll(".hintc"); return hs[hs.length - 1]; })();
  drag(c, p => {
    if (!geo) return null;
    const X = q => ({ x: geo.X(q.x), y: geo.Y(q.y) });
    if (mode === "chord") { const i = nearest(p, [X(M1), two ? X(M2) : null], 20); return i; }
    return nearest(p, [X(P)], 22);
  }, (i, p) => {
    const v = geo.inv(p.x, p.y), nx = Math.round(v.x), ny = Math.round(v.y);
    if (mode === "chord") { if (nx * nx + ny * ny > R1 * R1) return; if (i === 0) M1 = { x: nx, y: ny }; else M2 = { x: nx, y: ny }; return; }
    P = { x: clamp(nx, Math.ceil(geo.xmin + .5), Math.floor(geo.xmax - .5)), y: clamp(ny, Math.ceil(geo.ymin + .5), Math.floor(geo.ymax - .5)) };
  });
  k.loop(() => {
    c.begin(); const top = topBelow(modesEl);
    if (hintEl) hintEl.textContent = mode === "chord" ? "Drag the midpoint M of a chord" : "Drag the point P";
    const Rv = mode === "chord" ? 12.5 : 9;
    const Pl = k.plot(c, { xmin: -Rv, xmax: Rv, ymin: -Rv, ymax: Rv, equal: true, pad: { l: 12, r: 12, t: top, b: 16 } }); geo = Pl;
    Pl.grid(mode === "chord" ? 1 : 1);
    const X = q => ({ x: Pl.X(q.x), y: Pl.Y(q.y) }), O = X({ x: 0, y: 0 }), sc = Pl.X(1) - Pl.X(0);
    const lf = `italic 600 15px ${F.math}`, mono = `600 12px ${F.mono}`;
    const r = mode === "chord" ? R1 : R2;
    d.circle(O.x, O.y, r * sc, null, alpha(C.text, .55), 1.8);
    d.circle(O.x, O.y, 4, C.text); d.text("O", O.x - 11, O.y + 13, { font: lf, color: C.muted, align: "center", base: "middle" });
    if (mode === "chord") {
      const info = (Mi, dprev, which) => {
        const d2 = Mi.x * Mi.x + Mi.y * Mi.y, h2 = R1 * R1 - d2;
        let ux, uy; if (d2 === 0) { ux = Math.cos(dprev); uy = Math.sin(dprev); } else { const l = Math.sqrt(d2); ux = -Mi.y / l; uy = Mi.x / l; }
        const hh = Math.sqrt(h2), E1 = { x: Mi.x + ux * hh, y: Mi.y + uy * hh }, E2 = { x: Mi.x - ux * hh, y: Mi.y - uy * hh };
        return { d2, h2, E1, E2, dir: Math.atan2(uy, ux) };
      };
      const c1 = info(M1, dir1, 1); dir1 = c1.dir; const c2 = two ? info(M2, dir2, 2) : null; if (c2) dir2 = c2.dir;
      const drawC = (ci, Mi, nmM, alphaC, n) => {
        const pM = X(Mi), e1 = X(ci.E1), e2 = X(ci.E2);
        if (ci.h2 === 0) { const ux = Math.cos(ci.dir), uy = -Math.sin(ci.dir); d.line(pM.x - ux * 400, pM.y - uy * 400, pM.x + ux * 400, pM.y + uy * 400, alpha(C.amber, .7), 1.8, [6, 4]); }
        else {
          d.line(e1.x, e1.y, e2.x, e2.y, alpha(C.pink, alphaC), 3.2);
          d.line(O.x, O.y, e1.x, e1.y, alpha(C.cyan, alphaC), 2.2);
          ticks(g, e1, pM, n, C.pink); ticks(g, pM, e2, n, C.pink);
          d.circle(e1.x, e1.y, 4, C.pink); d.circle(e2.x, e2.y, 4, C.pink);
          const nn = n === 1 ? ["A", "B"] : ["C", "D"]; [[e1, nn[0]], [e2, nn[1]]].forEach(([q, t]) => { const u = unitv(q, O); d.text(t, q.x + u.x * 15, q.y + u.y * 15, { font: lf, color: C.pink, align: "center", base: "middle" }); });
        }
        if (ci.d2 > 0) { d.line(O.x, O.y, pM.x, pM.y, C.violet, 2.4); if (ci.h2 > 0) rightMark(g, pM, O, e1, 9, C.violet); }
        d.circle(pM.x, pM.y, 7, C.violet, C.ink, 2.4);
        const u = ci.d2 > 0 ? unitv(pM, O) : { x: -Math.sin(ci.dir), y: -Math.cos(ci.dir) };
        d.text(nmM, pM.x + u.x * 17, pM.y + u.y * 17, { font: lf, color: C.violet, align: "center", base: "middle" });
      };
      drawC(c1, M1, "M", 1, 1); if (c2) drawC(c2, M2, "N", .7, 2);
      const row = (ci, nm, nmM) => {
        if (ci.h2 === 0) return `<div class="row">${M(`<span class="c4"><i>O${nmM}</i> = ${R1}</span> = <span class="c2"><i>r</i></span>`)}<span class="lbl">${nmM} is on the circle: no chord, the line there is tangent</span></div>`;
        return `<div class="row">${M(`<span class="c4"><i>d</i> = ${radT(ci.d2)}</span>, &nbsp;<span class="c3">½<i>c</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">${R1 * R1} − ${ci.d2}</span> = ${radT(ci.h2)}</span>`)}<span class="lbl">chord ${nm}${ci.d2 === 0 ? ", a diameter" : ""}</span></div>
          <div class="row">${M(`<span class="c3"><i>c</i> = ${radD(4 * ci.h2)}</span>`)}<span class="lbl">length of chord ${nm}</span></div>`;
      };
      const eq = c2 && c1.d2 === c2.d2;
      const lm = c1.h2 === 0 ? `<div class="landmark hit"><div class="big">d = r: the chord vanishes</div><div class="note">With M on the circle, the line through M perpendicular to OM touches the circle only at M. That is the tangent line, perpendicular to the radius.</div></div>`
        : eq ? `<div class="landmark hit"><div class="big">${M(`<i>OM</i> = <i>ON</i> ⇒ chords congruent`)}</div><div class="note">Chords the same distance from the centre have equal length, ${radT(4 * c1.h2)}, and conversely. The double tick marks show each chord bisected by its perpendicular from O.</div></div>`
        : c1.d2 === 0 ? `<div class="landmark hit"><div class="big">d = 0: a diameter</div><div class="note">A chord through the centre is a diameter, the longest chord, 2r = ${2 * R1}.</div></div>`
        : `<div class="landmark"><div class="big">${M(`<span class="c4">${c1.d2}</span> + <span class="c3">${c1.h2}</span> = <span class="c2">${R1 * R1}</span>`)}</div><div class="note">The perpendicular from O lands at the chord's midpoint, so d, half the chord and a radius form a right triangle: d² + (½c)² = r². ${c2 ? "The closer chord is the longer one." : ""}</div></div>`;
      k.setRO(`<div><h2>Chord through M, r = ${R1}</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c4"><i>d</i></span><sup>2</sup> + (½<span class="c3"><i>c</i></span>)<sup>2</sup> = <span class="c2">${R1}</span><sup>2</sup>`)}</div></div>
        <div class="ro-rows">${row(c1, "AB", "M")}${c2 ? row(c2, "CD", "N") : ""}</div>${lm}
        <p class="narr">M snaps to grid points, so d² is a whole number. ${c2 ? "Press Equidistant to turn N to M's distance." : ""}</p>`);
    } else {
      const s = P.x * P.x + P.y * P.y, t2 = s - R2 * R2, pP = X(P);
      let ro;
      if (t2 > 0) {
        const th = Math.atan2(P.y, P.x), al = Math.acos(R2 / Math.sqrt(s));
        const T1 = { x: R2 * Math.cos(th + al), y: R2 * Math.sin(th + al) }, T2 = { x: R2 * Math.cos(th - al), y: R2 * Math.sin(th - al) };
        const p1 = X(T1), p2 = X(T2);
        // full tangent lines (faint) and tangent segments
        [p1, p2].forEach(q => { const u = unitv(q, pP); d.line(pP.x - u.x * 30, pP.y - u.y * 30, q.x + u.x * 60, q.y + u.y * 60, alpha(C.amber, .35), 1.4); });
        d.line(O.x, O.y, pP.x, pP.y, C.violet, 2, [6, 4]);
        d.line(pP.x, pP.y, p1.x, p1.y, C.amber, 3); d.line(pP.x, pP.y, p2.x, p2.y, C.amber, 3);
        d.line(O.x, O.y, p1.x, p1.y, C.cyan, 2.4); d.line(O.x, O.y, p2.x, p2.y, C.cyan, 2.4);
        rightMark(g, p1, O, pP, 9, C.text); rightMark(g, p2, O, pP, 9, C.text);
        ticks(g, pP, p1, 1, C.amber); ticks(g, pP, p2, 1, C.amber);
        [[p1, "A"], [p2, "B"]].forEach(([q, n]) => { d.circle(q.x, q.y, 4.5, C.amber); const u = unitv(q, O); d.text(n, q.x + u.x * 15, q.y + u.y * 15, { font: lf, color: C.amber, align: "center", base: "middle" }); });
        const apb = 2 * Math.asin(R2 / Math.sqrt(s)) / RAD;
        ro = `<div><h2>Tangents from P</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c1"><i>PA</i> = <i>PB</i> = ${radT(t2)}</span>`)}</div></div>
          <div class="ro-rows">
            <div class="row">${M(`<span class="c4"><i>PO</i> = ${radD(s)}</span>`)}<span class="lbl">distance from P(${ng(P.x)}, ${ng(P.y)}) to the centre</span></div>
            <div class="row">${M(`<span class="c1"><i>PA</i></span> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">${s} − ${R2 * R2}</span> = <span class="c1">${radD(t2)}</span>`)}<span class="lbl">PA² = PO² − r², since ∠OAP = 90°</span></div>
            <div class="row">${M(`m∠<i>APB</i> = ${f1(apb)}°, &nbsp;m∠<i>AOB</i> = ${f1(180 - apb)}°`)}<span class="lbl">supplementary: quadrilateral PAOB has two right angles</span></div>
          </div>
          <div class="landmark"><div class="big">tangent ⊥ radius, &nbsp;PA ≅ PB</div><div class="note">Each tangent meets its radius at a right angle, so △OAP and △OBP are right triangles with the same hypotenuse OP and equal legs OA = OB = 5. By HL they are congruent, and the tangent segments are equal.</div></div>
          <p class="narr">Drag P closer to the circle: the tangents shorten and the angle at P opens up.</p>`;
      } else if (t2 === 0) {
        const u = unitv(pP, O), tx = -u.y, ty = u.x;
        d.line(pP.x - tx * 500, pP.y - ty * 500, pP.x + tx * 500, pP.y + ty * 500, C.amber, 2.6);
        d.line(O.x, O.y, pP.x, pP.y, C.cyan, 2.4); rightMark(g, pP, O, { x: pP.x + tx * 10, y: pP.y + ty * 10 }, 10, C.text);
        ro = `<div><h2>P is on the circle</h2><div class="ro-big" style="margin-top:8px">${M(`<i>PO</i> = <i>r</i> = 5`)}</div></div>
          <div class="landmark hit"><div class="big">exactly one tangent</div><div class="note">The only tangent through a point of the circle is the line perpendicular to the radius there (the converse of the Tangent Theorem). Any other line through P cuts the circle a second time.</div></div>`;
      } else {
        ro = `<div><h2>P is inside the circle</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c4"><i>PO</i> = ${radD(s)}</span> &lt; 5`)}</div></div>
          <div class="landmark hit"><div class="big">no tangent from P</div><div class="note">Every line through an interior point crosses the circle twice, so it is a secant. PO² − r² = ${ng(t2)} is negative: there is no real tangent length.</div></div>
          <p class="narr">Drag P outside the circle.</p>`;
      }
      d.circle(pP.x, pP.y, 8, C.amber, C.ink, 2.5);
      const uP = s ? unitv(pP, O) : { x: 0, y: -1 }; d.text("P", pP.x + uP.x * 18, pP.y + uP.y * 18, { font: lf, color: C.amber, align: "center", base: "middle" });
      k.setRO(ro);
    }
  });
};

/* ===================== g-circle-segments ===================== */
L["g-circle-segments"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const R = 5;
  let P = { x: 2, y: 1 }, a1 = 20, a2 = 115, geo = null;
  const s1 = k.slider(`<span class="c2">line 1</span>`, 0, 179, 1, a1, v => a1 = v, v => v + "°");
  const s2 = k.slider(`<span class="c3">line 2</span>`, 0, 179, 1, a2, v => a2 = v, v => v + "°");
  k.button("Inside", () => { P = { x: 2, y: 1 }; a1 = 20; a2 = 115; s1.set(a1); s2.set(a2); }, "btn ghost");
  k.button("Outside", () => { P = { x: 8, y: 3 }; a1 = 12; a2 = 34; s1.set(a1); s2.set(a2); }, "btn ghost");
  const bTan = k.button("Make line 2 tangent", () => {
    const s = P.x * P.x + P.y * P.y; if (s <= R * R) return;
    const th = Math.atan2(P.y, P.x), al = Math.acos(R / Math.sqrt(s)), T = { x: R * Math.cos(th + al), y: R * Math.sin(th + al) };
    let a = Math.atan2(T.y - P.y, T.x - P.x) / RAD; a = ((a % 180) + 180) % 180; a2 = a; s2.set(Math.round(a));
  }, "btn ghost");
  k.hint("Drag P; turn the lines with the sliders");
  drag(c, p => geo ? nearest(p, [{ x: geo.X(P.x), y: geo.Y(P.y) }], 22) : null, (i, p) => {
    const v = geo.inv(p.x, p.y); P = { x: clamp(Math.round(v.x), Math.ceil(geo.xmin + .5), Math.floor(geo.xmax - .5)), y: clamp(Math.round(v.y), Math.ceil(geo.ymin + .5), Math.floor(geo.ymax - .5)) };
  });
  // intersections of P + t·u with x² + y² = R²
  const cut = (a) => {
    const u = { x: Math.cos(a * RAD), y: Math.sin(a * RAD) }, b = P.x * u.x + P.y * u.y, cc = P.x * P.x + P.y * P.y - R * R, disc = b * b - cc;
    if (disc < -1e-9) return { u, n: 0 };
    if (Math.abs(disc) <= 1e-9) return { u, n: 1, t: [-b] };
    const r_ = Math.sqrt(disc); return { u, n: 2, t: [-b - r_, -b + r_] };
  };
  const ptAt = (L_, t) => ({ x: P.x + L_.u.x * t, y: P.y + L_.u.y * t });
  const angP = q => norm(Math.atan2(q.y, q.x) / RAD);
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const Pl = k.plot(c, { xmin: -9, xmax: 9, ymin: -9, ymax: 9, equal: true, pad: { l: 12, r: 12, t: 16, b: 16 } }); geo = Pl;
    Pl.grid(1);
    const X = q => ({ x: Pl.X(q.x), y: Pl.Y(q.y) }), O = X({ x: 0, y: 0 }), sc = Pl.X(1) - Pl.X(0);
    const lf = `italic 600 15px ${F.math}`, mono = `700 12px ${F.mono}`;
    d.circle(O.x, O.y, R * sc, null, alpha(C.text, .55), 1.8); d.circle(O.x, O.y, 3.5, C.text);
    const pw = P.x * P.x + P.y * P.y - R * R, pP = X(P);
    const L1 = cut(a1), L2 = cut(a2), same_ = Math.abs(((a1 - a2) % 180 + 180) % 180) < 1e-9;
    const drawLine = (L_, col) => { const e = { x: L_.u.x, y: -L_.u.y }; Pl.clip(() => d.line(pP.x - e.x * 900, pP.y - e.y * 900, pP.x + e.x * 900, pP.y + e.y * 900, alpha(col, .8), 2.2)); };
    const arcD = (t, s, col, lw = 6) => arcPx(g, O.x, O.y, R * sc, t, s, col, lw);
    // order points along each line: near (smaller |t|) first
    const pts = L_ => L_.n === 0 ? [] : L_.t.slice().sort((p, q) => Math.abs(p) - Math.abs(q)).map(t => ({ t, q: ptAt(L_, t) }));
    const A = pts(L1), Cc = pts(L2);
    let ang = null, formula = "", arcRows = "", kind;
    const onC = pw === 0;
    if (!same_ && L1.n && L2.n && !onC) {
      if (pw < 0) { // inside: both lines are chords; A,B on line 1 with t<0, t>0
        kind = "in";
        const Aq = ptAt(L1, L1.t[0]), Bq = ptAt(L1, L1.t[1]), Cq = ptAt(L2, L2.t[0]), Dq = ptAt(L2, L2.t[1]);
        const tA = angP(Aq), tB = angP(Bq), tC = angP(Cq), tD = angP(Dq);
        const arcAvoid = (x, y, av) => { const s = span(x, y); return av.some(z => inside(x, y, z)) ? { t: y, s: 360 - s } : { t: x, s }; };
        const ac = arcAvoid(tA, tC, [tB, tD]), bd = arcAvoid(tB, tD, [tA, tC]);
        arcD(ac.t, ac.s, C.violet); arcD(bd.t, bd.s, alpha(C.violet, .6));
        const phi = Math.acos(clamp(L1.u.x * L2.u.x + L1.u.y * L2.u.y, -1, 1)) / RAD;   // angle between rays P→A and P→C (both t < 0)
        ang = phi; formula = `½(${f1(ac.s)}° + ${f1(bd.s)}°) = ${f1((ac.s + bd.s) / 2)}°`;
        angMark(g, pP, X(Aq), X(Cq), 22, C.amber, 2.4);
        arcRows = `<div class="row">${M(`<span class="c4">m⌢<i>AC</i> = ${f1(ac.s)}°, &nbsp;m⌢<i>BD</i> = ${f1(bd.s)}°</span>`)}<span class="lbl">arcs cut off by ∠APC and its vertical angle ∠BPD</span></div>`;
      } else { // outside: rays toward the circle
        kind = "out";
        const N1 = A[0].q, F1 = A[A.length - 1].q, N2 = Cc[0].q, F2 = Cc[Cc.length - 1].q;
        const r1 = unitv(N1, P), r2 = unitv(N2, P);
        const phi = Math.acos(clamp(r1.x * r2.x + r1.y * r2.y, -1, 1)) / RAD;
        const pick = (x, y, near) => { const s = span(x, y), m1 = x + s / 2, m2 = y + (360 - s) / 2; const q1 = { x: R * Math.cos(m1 * RAD), y: R * Math.sin(m1 * RAD) }, q2 = { x: R * Math.cos(m2 * RAD), y: R * Math.sin(m2 * RAD) };
          const d1 = Math.hypot(q1.x - P.x, q1.y - P.y), d2 = Math.hypot(q2.x - P.x, q2.y - P.y); return (near ? d1 <= d2 : d1 > d2) ? { t: x, s } : { t: y, s: 360 - s }; };
        let nr = pick(angP(N1), angP(N2), true), fr = pick(angP(F1), angP(F2), false);
        if (span(angP(N1), angP(N2)) < 1e-9) nr = { t: angP(N1), s: 0 };
        arcD(fr.t, fr.s, C.violet); if (nr.s > 0) arcD(nr.t, nr.s, alpha(C.violet, .55));
        ang = phi; formula = `½(${f1(fr.s)}° − ${f1(nr.s)}°) = ${f1((fr.s - nr.s) / 2)}°`;
        angMark(g, pP, X(N1), X(N2), 24, C.amber, 2.4);
        arcRows = `<div class="row">${M(`<span class="c4">far ${f1(fr.s)}°, &nbsp;near ${f1(nr.s)}°</span>`)}<span class="lbl">the arcs between the lines, away from and toward P</span></div>`;
      }
    }
    drawLine(L1, C.cyan); drawLine(L2, C.pink);
    const lab = (q, n, col) => { const p = X(q); d.circle(p.x, p.y, 5, col, C.ink, 1.5); const u = unitv(p, O); d.text(n, p.x + u.x * 15, p.y + u.y * 15, { font: lf, color: col, align: "center", base: "middle" }); };
    const nm1 = ["A", "B"], nm2 = ["C", "D"];
    const ord = (L_, arr) => (pw < 0 && L_.n === 2) ? L_.t.map(t => ({ t, q: ptAt(L_, t) })) : arr;   // inside: A at t<0, B at t>0
    ord(L1, A).forEach((o, i) => { if (Math.abs(o.t) > 1e-9) lab(o.q, L1.n === 1 ? "T" : nm1[i], C.cyan); });
    ord(L2, Cc).forEach((o, i) => { if (Math.abs(o.t) > 1e-9) lab(o.q, L2.n === 1 ? "T" : nm2[i], C.pink); });
    d.circle(pP.x, pP.y, 8, C.amber, C.ink, 2.5);
    const uP = (P.x || P.y) ? unitv(pP, O) : { x: 0, y: -1 };
    d.text("P", pP.x + uP.x * 18 + (pw < 0 ? 0 : 0), pP.y + uP.y * 18, { font: lf, color: C.amber, align: "center", base: "middle" });
    // readout
    const prod = (L_, arr, n1, n2, col) => {
      if (L_.n === 0) return `<div class="row">${M(`<span class="${col}">line ${col === "c2" ? 1 : 2}</span>`)}<span class="lbl">misses the circle: no product</span></div>`;
      if (L_.n === 1) return `<div class="row">${M(`<span class="${col}"><i>PT</i><sup>2</sup> = ${f2(Math.abs(L_.t[0]))}<sup>2</sup> = ${f2(L_.t[0] * L_.t[0])}</span>`)}<span class="lbl">tangent: the two points merge</span></div>`;
      const ds = ord(L_, arr).map(o => Math.abs(o.t));
      return `<div class="row">${M(`<span class="${col}"><i>P${n1}</i> · <i>P${n2}</i> = ${f2(ds[0])} · ${f2(ds[1])} = ${f2(ds[0] * ds[1])}</span>`)}</div>`;
    };
    let lm;
    if (same_) lm = `<div class="landmark hit"><div class="big">the two lines coincide</div><div class="note">Turn one slider so the lines are different.</div></div>`;
    else if (onC) lm = `<div class="landmark hit"><div class="big">P is on the circle: power 0</div><div class="note">Every line through P meets the circle at P itself, so one factor of each product is 0. The angle between two chords from P is an inscribed angle, half its arc.</div></div>`;
    else if (!L1.n || !L2.n) lm = `<div class="landmark hit"><div class="big">a line misses the circle</div><div class="note">From an outside point, lines can pass the circle by. Turn the slider until the line cuts the circle${pw > 0 ? ", or press Make line 2 tangent" : ""}.</div></div>`;
    else lm = `<div class="landmark"><div class="big">${M(`<span class="c1">m∠<i>P</i> = ${f1(ang)}°</span>`)}</div><div class="note">${M(formula)}. ${kind === "in" ? "Inside the circle the angle is half the sum of the arc it cuts off and the arc cut off by its vertical angle." : "Outside the circle the angle is half the difference of the far and near arcs" + (L2.n === 1 || L1.n === 1 ? ", also with a tangent." : ".")}</div></div>`;
    const where = pw < 0 ? "inside: two chords" : pw === 0 ? "on the circle" : "outside: secants and tangents";
    k.setRO(`<div><h2>Power of P(${ng(P.x)}, ${ng(P.y)}), ${where}</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(`<span class="c1"><i>PO</i><sup>2</sup> − <i>r</i><sup>2</sup> = ${P.x * P.x + P.y * P.y} − 25 = ${ng(pw)}</span>`)}</div></div>
      <div class="ro-rows">${prod(L1, A, "A", "B", "c2")}${prod(L2, Cc, "C", "D", "c3")}${arcRows}</div>${lm}
      <p class="narr">Both products equal |PO² − r²| = ${Math.abs(pw)} for every line through P that meets the circle.${pw > 0 ? " Try the tangent button." : ""}</p>`);
    bTan.disabled = pw <= 0;
  });
};

/* ===================== g-circle-equations ===================== */
L["g-circle-equations"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  // presets: A x² + A y² + D x + E y + F = 0, chosen so D/A and E/A are even integers
  const PRE = [[1, -6, 4, -12], [1, 8, -2, 8], [1, 0, -10, 0], [2, -8, 12, -6], [1, 6, -4, 6], [1, 4, -10, 29], [1, -2, 6, 15]];
  let mode = "graph", h = 3, kk = -2, r = 5, th = Math.atan2(4, 3) / RAD, pi = 0, geo = null;
  const modesEl = k.modes([["graph", "Graph"], ["conv", "Convert"]], mode, m => { mode = m; show(); });
  const sh = k.slider(`<span class="c1"><i>h</i></span>`, -6, 6, 1, h, v => h = v);
  const sk = k.slider(`<span class="c1"><i>k</i></span>`, -6, 6, 1, kk, v => kk = v);
  const sr = k.slider(`<span class="c2"><i>r</i></span>`, 1, 7, 1, r, v => r = v);
  const lin = (co, v, first) => co === 0 ? "" : `${co < 0 ? (first ? "−" : " − ") : (first ? "" : " + ")}${Math.abs(co) === 1 && v ? "" : Math.abs(co)}${v}`;
  const genH = ([A, D, E, Fc]) => `${A === 1 ? "" : A}<i>x</i><sup>2</sup> + ${A === 1 ? "" : A}<i>y</i><sup>2</sup>${lin(D, "<i>x</i>")}${lin(E, "<i>y</i>")}${lin(Fc, "")} = 0`;
  const sel = k.select("Equation", PRE.map((p, i) => [i, genH(p).replace(/<sup>2<\/sup>/g, "²").replace(/<[^>]+>/g, "")]), pi, v => { pi = +v; st.reset(); });
  const nCtl = k.ctl.children.length;
  const steps = () => {
    const [A, D0, E0, F0] = PRE[pi], D = D0 / A, E = E0 / A, Fc = F0 / A, hh = -D / 2, kq = -E / 2, rhs = hh * hh + kq * kq - Fc;
    const out = [{ m: genH(PRE[pi]), n: "general form" }];
    if (A !== 1) out.push({ m: genH([1, D, E, Fc]), n: `divide every term by ${A}` });
    const gx = D ? `(<i>x</i><sup>2</sup>${lin(D, "<i>x</i>")})` : `<i>x</i><sup>2</sup>`, gy = E ? `(<i>y</i><sup>2</sup>${lin(E, "<i>y</i>")})` : `<i>y</i><sup>2</sup>`;
    out.push({ m: `${gx} + ${gy} = ${ng(-Fc)}`, n: "group x-terms and y-terms; move the constant" });
    const ax = D ? `(<i>x</i><sup>2</sup>${lin(D, "<i>x</i>")} <span class="c4">+ ${hh * hh}</span>)` : `<i>x</i><sup>2</sup>`, ay = E ? `(<i>y</i><sup>2</sup>${lin(E, "<i>y</i>")} <span class="c4">+ ${kq * kq}</span>)` : `<i>y</i><sup>2</sup>`;
    const added = [D ? hh * hh : null, E ? kq * kq : null].filter(v => v !== null);
    out.push({ m: `${ax} + ${ay} = ${ng(-Fc)}${added.map(v => ` <span class="c4">+ ${v}</span>`).join("")}`, n: `complete the squares: ${[D ? `(${ng(D)}/2)² = ${hh * hh}` : "", E ? `(${ng(E)}/2)² = ${kq * kq}` : ""].filter(Boolean).join(", ")}, added to both sides` });
    const sq = (v, n) => v === 0 ? `<i>${n}</i><sup>2</sup>` : `(<i>${n}</i> ${v > 0 ? "−" : "+"} <span class="c1">${Math.abs(v)}</span>)<sup>2</sup>`;
    out.push({ m: `${sq(hh, "x")} + ${sq(kq, "y")} = ${ng(rhs)}`, n: "factor the perfect-square trinomials" });
    const res = rhs > 0 ? { m: `centre <span class="c1">(${ng(hh)}, ${ng(kq)})</span>, &nbsp;<span class="c2"><i>r</i> = ${radT(rhs)}</span>`, n: rhs === Math.round(Math.sqrt(rhs)) ** 2 ? `r = √${rhs}` : `r = √${rhs} ≈ ${f2(Math.sqrt(rhs))}` }
      : rhs === 0 ? { m: `the single point <span class="c1">(${ng(hh)}, ${ng(kq)})</span>`, n: "squares add to 0 only when both are 0" }
      : { m: `no graph`, n: `a sum of squares cannot equal ${ng(rhs)}` };
    out.push(res);
    return { out, hh, kq, rhs };
  };
  const st = k.stepper(() => steps().out.length - 1, () => {}, { ms: 1100 });
  const stepBtns = [...k.ctl.children].slice(nCtl);
  function show(){ [sh, sk, sr].forEach(s => showEl(s.el, mode === "graph")); showEl(sel.el, mode === "conv"); stepBtns.forEach(b => b.style.display = mode === "conv" ? "" : "none"); }
  show();
  const hintEl = (() => { k.hint("Drag the pink point around the circle"); const hs = k.stage.querySelectorAll(".hintc"); return hs[hs.length - 1]; })();
  // lattice points on the circle (integer legs) for snapping
  const lattice = rr => { const out = []; for (let a = -rr; a <= rr; a++) { const b2 = rr * rr - a * a, b = Math.round(Math.sqrt(b2)); if (b * b === b2) { out.push(norm(Math.atan2(b, a) / RAD)); if (b) out.push(norm(Math.atan2(-b, a) / RAD)); } } return out; };
  drag(c, p => (geo && mode === "graph") ? nearest(p, [{ x: geo.X(h + r * Math.cos(th * RAD)), y: geo.Y(kk + r * Math.sin(th * RAD)) }], 22) : null, (i, p) => {
    const v = geo.inv(p.x, p.y); let t = norm(Math.atan2(v.y - kk, v.x - h) / RAD);
    const lp = lattice(r).find(a => Math.min(span(a, t), span(t, a)) < 3.5); th = lp ?? Math.round(t);
  });
  k.loop(() => {
    c.begin(); const top = topBelow(modesEl);
    if (hintEl) hintEl.style.display = mode === "graph" ? "" : "none";
    const Pl = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 28, r: 12, t: top, b: 22 } }); geo = Pl;
    Pl.grid(1); Pl.axes();
    const X = q => ({ x: Pl.X(q.x), y: Pl.Y(q.y) }), sc = Pl.X(1) - Pl.X(0), lf = `italic 600 15px ${F.math}`, mono = `600 12px ${F.mono}`;
    if (mode === "graph") {
      const Cq = X({ x: h, y: kk }), qx = h + r * Math.cos(th * RAD), qy = kk + r * Math.sin(th * RAD), Q = X({ x: qx, y: qy });
      Pl.clip(() => d.circle(Cq.x, Cq.y, r * sc, alpha(C.cyan, .06), C.cyan, 2.4));
      const dx = qx - h, dy = qy - kk, ex = Math.abs(dx - Math.round(dx)) < 1e-9 && Math.abs(dy - Math.round(dy)) < 1e-9;
      const fx = v => ex ? ng(Math.round(v)) : f2(v);
      const corner = X({ x: qx, y: kk });
      d.line(Cq.x, Cq.y, corner.x, corner.y, alpha(C.text, .7), 1.6, [5, 4]); d.line(corner.x, corner.y, Q.x, Q.y, alpha(C.text, .7), 1.6, [5, 4]);
      if (Math.abs(dx) > .3 && Math.abs(dy) > .3) rightMark(g, corner, Cq, Q, 8, alpha(C.text, .7));
      d.line(Cq.x, Cq.y, Q.x, Q.y, C.cyan, 2.8);
      if (Math.abs(dx) > .6) d.text(`x − h = ${fx(dx)}`, (Cq.x + corner.x) / 2, corner.y + (dy >= 0 ? 15 : -11), { font: mono, color: C.text, align: "center", base: "middle" });
      if (Math.abs(dy) > .6) d.text(`y − k = ${fx(dy)}`, corner.x + (dx >= 0 ? 8 : -8), (corner.y + Q.y) / 2, { font: mono, color: C.text, align: dx >= 0 ? "left" : "right", base: "middle" });
      d.circle(Cq.x, Cq.y, 6.5, C.amber, C.ink, 2); d.text(`(${ng(h)}, ${ng(kk)})`, Cq.x + (dx >= 0 ? -10 : 10), Cq.y + (dy >= 0 ? -12 : 14), { font: mono, color: C.amber, align: dx >= 0 ? "right" : "left", base: "middle" });
      d.circle(Q.x, Q.y, 8, C.pink, C.ink, 2.5);
      const sq = (v, n) => v === 0 ? `<i>${n}</i><sup>2</sup>` : `(<i>${n}</i> ${v > 0 ? "−" : "+"} <span class="c1">${Math.abs(v)}</span>)<sup>2</sup>`;
      const D = -2 * h, E = -2 * kk, Fc = h * h + kk * kk - r * r;
      k.setRO(`<div><h2>Circle, centre (${ng(h)}, ${ng(kk)}), radius ${r}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`${sq(h, "x")} + ${sq(kk, "y")} = <span class="c2">${r * r}</span>`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`<span class="c3">(${fx(qx)}, ${fx(qy)})</span>`)}<span class="lbl">the pink point${ex ? ", a lattice point" : ""}</span></div>
          <div class="row">${M(`(${fx(dx)})<sup>2</sup> + (${fx(dy)})<sup>2</sup> = ${ex ? Math.round(dx * dx + dy * dy) : f2(dx * dx + dy * dy)}`)}<span class="lbl">squared gaps from the centre add to r² = ${r * r}</span></div>
          <div class="row">${M(genH([1, D, E, Fc]))}<span class="lbl">general form (multiplied out)</span></div>
        </div>
        <div class="landmark"><div class="big">distance from centre = <span class="c2">${r}</span></div><div class="note">The dashed legs are x − h and y − k, so by the Pythagorean Theorem every point on the circle satisfies (x − h)² + (y − k)² = r². Moving the centre changes the signs inside the parentheses.</div></div>
        <p class="narr">Drag the pink point: it snaps to points with whole-number legs when there are any (try r = 5).</p>`);
    } else {
      const S_ = steps(), n = st.k, done = n >= S_.out.length - 2;   // after factoring, the graph is known
      if (done) {
        const Cq = X({ x: S_.hh, y: S_.kq });
        if (S_.rhs > 0) { const rr = Math.sqrt(S_.rhs); Pl.clip(() => d.circle(Cq.x, Cq.y, rr * sc, alpha(C.cyan, .06), C.cyan, 2.4)); const e = X({ x: S_.hh + rr, y: S_.kq }); d.line(Cq.x, Cq.y, e.x, e.y, C.cyan, 2.4); d.text(`r = ${radT(S_.rhs)}`, (Cq.x + e.x) / 2, Cq.y - 10, { font: mono, color: C.cyan, align: "center" }); }
        d.circle(Cq.x, Cq.y, S_.rhs === 0 ? 8 : 6, S_.rhs < 0 ? null : C.amber, S_.rhs < 0 ? alpha(C.amber, .6) : C.ink, 2);
        if (S_.rhs < 0) { d.rr(Pl.X(0) - 92, Pl.Y(0) - 18, 184, 36, 8, alpha(C.ink, .85), alpha(C.red, .8), 1.5); d.text("no points: r² < 0", Pl.X(0), Pl.Y(0), { font: `600 14px ${F.sans}`, color: C.red, align: "center", base: "middle" }); }
      } else d.text("Step through to find the centre", Pl.X(0), Pl.Y(-8.6), { font: `13px ${F.sans}`, color: C.muted, align: "center", base: "middle" });
      const rows = S_.out.slice(0, n + 1).map((s, i) => `<div class="row"${i === n ? ` style="border-color:${C.amber}"` : ""}><span class="m" style="white-space:normal;font-size:15px">${s.m}</span><span class="lbl">${i === n ? `<span class="c1">${s.n}</span>` : s.n}</span></div>`).join("");
      const fin = n === S_.out.length - 1;
      const lm = !fin ? `<div class="landmark"><div class="big">step ${n} of ${S_.out.length - 1}</div><div class="note">Press Step (or Play) to complete the squares one move at a time.</div></div>`
        : S_.rhs > 0 ? `<div class="landmark hit"><div class="big">${M(`<span class="c1">(<i>h</i>, <i>k</i>) = (${ng(S_.hh)}, ${ng(S_.kq)})</span>, <span class="c2"><i>r</i> = ${radT(S_.rhs)}</span>`)}</div><div class="note">The right side is positive, so it is r². ${Number.isInteger(Math.sqrt(S_.rhs)) ? `Check: (${ng(S_.hh + Math.sqrt(S_.rhs))}, ${ng(S_.kq)}), one radius to the right of the centre, satisfies the original equation.` : `The radius √${S_.rhs} is irrational, ≈ ${f2(Math.sqrt(S_.rhs))}.`}</div></div>`
        : S_.rhs === 0 ? `<div class="landmark hit"><div class="big">r² = 0: a single point</div><div class="note">Two squares add to 0 only when both are 0, so the only solution is x = ${ng(S_.hh)}, y = ${ng(S_.kq)}. This is sometimes called a degenerate circle.</div></div>`
        : `<div class="landmark hit"><div class="big">r² = ${ng(S_.rhs)} &lt; 0: no graph</div><div class="note">Squares of real numbers are never negative, so no point (x, y) satisfies the equation. The solution set is empty.</div></div>`;
      k.setRO(`<div><h2>General form to standard form</h2></div><div class="ro-rows">${rows}</div>${lm}`);
    }
  });
};
})();
