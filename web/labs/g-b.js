/* ============ Labs: Geometry, writer B (logic, reasoning, proofs, parallel lines, triangle angles) ============ */
(function(){
const L = window.LABS;
const D2R = Math.PI / 180;
const f1 = v => (Math.round(v * 10) / 10).toFixed(1).replace("-", "−");
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* angle wedge at (x, y) between canvas directions u and v (the smaller angle); returns the mid direction */
function wedge(k, c, x, y, u, v, r, col, o = {}){
  const g = c.g, a = Math.atan2(u.y, u.x); let dl = Math.atan2(v.y, v.x) - a;
  while (dl <= -Math.PI) dl += 2 * Math.PI; while (dl > Math.PI) dl -= 2 * Math.PI;
  const deg = Math.abs(dl) / D2R;
  g.save();
  const right = o.square && Math.abs(deg - 90) < 0.05;
  if (o.fill !== false && !right) { g.beginPath(); g.moveTo(x, y); g.arc(x, y, r, a, a + dl, dl < 0); g.closePath(); g.fillStyle = k.alpha(col, o.fa ?? .2); g.fill(); }
  g.strokeStyle = col; g.lineWidth = o.lw || 2; if (o.dash) g.setLineDash(o.dash);
  if (right) {
    const s = Math.min(r * .62, 14), ux = Math.cos(a), uy = Math.sin(a), vx = Math.cos(a + dl), vy = Math.sin(a + dl);
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + ux * s, y + uy * s); g.lineTo(x + (ux + vx) * s, y + (uy + vy) * s); g.lineTo(x + vx * s, y + vy * s); g.closePath(); g.fillStyle = k.alpha(col, o.fa ?? .2); if (o.fill !== false) g.fill();
    g.beginPath(); g.moveTo(x + ux * s, y + uy * s); g.lineTo(x + (ux + vx) * s, y + (uy + vy) * s); g.lineTo(x + vx * s, y + vy * s); g.stroke();
  } else { g.beginPath(); g.arc(x, y, r, a, a + dl, dl < 0); g.stroke(); }
  g.restore();
  return a + dl / 2;
}
/* text on a dark pill so it stays readable over lines */
function tag(k, c, s, x, y, col, o = {}){
  const font = o.font || `600 13px ${k.F.mono}`, w = c.d.width(s, font) + 10, h = o.h || 20;
  let X = x - (o.align === "left" ? 5 : o.align === "right" ? w - 5 : w / 2);
  X = Math.max(3, Math.min(c.w - w - 3, X)); const Y = Math.max(3, Math.min(c.h - h - 3, y - h / 2));
  c.d.rr(X, Y, w, h, 4, k.alpha(k.C.ink, .82), o.border ? k.alpha(col, .7) : null);
  c.d.text(s, X + 5, Y + h / 2 + 1, { font, color: col, base: "middle" });
}
function wrap(c, s, font, maxW){
  const words = s.split(" "), out = []; let line = "";
  words.forEach(wd => { const t = line ? line + " " + wd : wd; if (c.d.width(t, font) > maxW && line) { out.push(line); line = wd; } else line = t; });
  if (line) out.push(line); return out;
}
/* draggable points: pts() → [{x,y}], onMove(i, {x,y}) */
function dragger(c, pts, onMove, hit = 18){
  let act = -1;
  const near = p => { let best = -1, bd = hit; pts().forEach((q, i) => { const dd = Math.hypot(q.x - p.x, q.y - p.y); if (dd < bd) { bd = dd; best = i; } }); return best; };
  c.cv.addEventListener("pointerdown", e => { const i = near(c.xy(e)); if (i >= 0) { act = i; c.cv.setPointerCapture(e.pointerId); c.cv.style.cursor = "grabbing"; e.preventDefault(); } });
  c.cv.addEventListener("pointermove", e => { const p = c.xy(e); if (act >= 0) onMove(act, p); else c.cv.style.cursor = near(p) >= 0 ? "grab" : "default"; });
  const up = () => { act = -1; c.cv.style.cursor = "default"; };
  c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  return { get active(){ return act; } };
}
const showCtl = (el, on) => { const w = el.closest(".ctl") || el; w.style.display = on ? "" : "none"; };

/* =============== g-logic: conditional, converse, inverse, contrapositive =============== */
const LOGIC = [
  { name: "Vertical angles → congruent", U: "all pairs of angles", ps: "vertical", qs: "congruent", rel: "sub",
    p: "two angles are vertical angles", q: "they are congruent",
    f: { cond: "If two angles are vertical angles, then they are congruent.", conv: "If two angles are congruent, then they are vertical angles.", inv: "If two angles are not vertical angles, then they are not congruent.", contra: "If two angles are not congruent, then they are not vertical angles." },
    ceQ: "Two 40° angles drawn in different corners of the page: congruent, but not vertical angles." },
  { name: "Right angle ↔ 90°", U: "all angles", ps: "right angle", qs: "measures 90°", rel: "eq",
    p: "an angle is a right angle", q: "it measures 90°",
    f: { cond: "If an angle is a right angle, then it measures 90°.", conv: "If an angle measures 90°, then it is a right angle.", inv: "If an angle is not a right angle, then it does not measure 90°.", contra: "If an angle does not measure 90°, then it is not a right angle." },
    bi: "An angle is a right angle if and only if it measures 90°." },
  { name: "x > 3 → x > 1", U: "all real numbers x", ps: "x > 3", qs: "x > 1", rel: "sub",
    p: "x > 3", q: "x > 1",
    f: { cond: "If x > 3, then x > 1.", conv: "If x > 1, then x > 3.", inv: "If x ≤ 3, then x ≤ 1.", contra: "If x ≤ 1, then x ≤ 3." },
    ceQ: "x = 2: it is greater than 1 but not greater than 3." },
  { name: "x² = 25 → x = 5", U: "all real numbers x", ps: "x² = 25", qs: "x = 5", rel: "sup",
    p: "x² = 25", q: "x = 5",
    f: { cond: "If x² = 25, then x = 5.", conv: "If x = 5, then x² = 25.", inv: "If x² ≠ 25, then x ≠ 5.", contra: "If x ≠ 5, then x² ≠ 25." },
    ceP: "x = −5: (−5)² = 25, but −5 ≠ 5." },
  { name: "Divisible by 4 → by 2", U: "all integers", ps: "4 | n", qs: "2 | n", rel: "sub",
    p: "an integer is divisible by 4", q: "it is divisible by 2",
    f: { cond: "If an integer is divisible by 4, then it is divisible by 2.", conv: "If an integer is divisible by 2, then it is divisible by 4.", inv: "If an integer is not divisible by 4, then it is not divisible by 2.", contra: "If an integer is not divisible by 2, then it is not divisible by 4." },
    ceQ: "6 is divisible by 2 but not by 4." },
  { name: "Quadrilateral → rectangle", U: "all polygons", ps: "quadrilateral", qs: "rectangle", rel: "sup",
    p: "a polygon is a quadrilateral", q: "it is a rectangle",
    f: { cond: "If a polygon is a quadrilateral, then it is a rectangle.", conv: "If a polygon is a rectangle, then it is a quadrilateral.", inv: "If a polygon is not a quadrilateral, then it is not a rectangle.", contra: "If a polygon is not a rectangle, then it is not a quadrilateral." },
    ceP: "A trapezoid with no right angles is a quadrilateral but not a rectangle." },
  { name: "Even → divisible by 3", U: "all integers", ps: "even", qs: "3 | n", rel: "overlap",
    p: "an integer is even", q: "it is divisible by 3",
    f: { cond: "If an integer is even, then it is divisible by 3.", conv: "If an integer is divisible by 3, then it is even.", inv: "If an integer is not even, then it is not divisible by 3.", contra: "If an integer is not divisible by 3, then it is not even." },
    ceP: "2 is even but not divisible by 3.", ceQ: "3 is divisible by 3 but not even." },
  { name: "Raining → ground is wet", U: "all moments outdoors", ps: "raining", qs: "ground wet", rel: "sub",
    p: "it is raining", q: "the ground is wet",
    f: { cond: "If it is raining, then the ground is wet.", conv: "If the ground is wet, then it is raining.", inv: "If it is not raining, then the ground is not wet.", contra: "If the ground is not wet, then it is not raining." },
    ceQ: "The sprinklers just ran: the ground is wet, but it is not raining." },
  { name: "Lives in Texas → in the US", U: "all people", ps: "in Texas", qs: "in the US", rel: "sub",
    p: "a person lives in Texas", q: "the person lives in the United States",
    f: { cond: "If a person lives in Texas, then the person lives in the United States.", conv: "If a person lives in the United States, then the person lives in Texas.", inv: "If a person does not live in Texas, then the person does not live in the United States.", contra: "If a person does not live in the United States, then the person does not live in Texas." },
    ceQ: "Someone who lives in Ohio lives in the United States but not in Texas." }
];
const FORMS = { cond: ["Conditional", "p → q"], conv: ["Converse", "q → p"], inv: ["Inverse", "~p → ~q"], contra: ["Contrapositive", "~q → ~p"] };
const PH = `<i class="c2">p</i>`, QH = `<i class="c3">q</i>`;
const FORMH = { cond: `${PH} → ${QH}`, conv: `${QH} → ${PH}`, inv: `~${PH} → ~${QH}`, contra: `~${QH} → ~${PH}` };

L["g-logic"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let view = "euler", pi = 0, form = "cond";
  k.modes([["euler", "Euler diagram"], ["table", "Truth table"]], view, v => view = v);
  k.select("Statement", LOGIC.map((p, i) => [i, p.name]), 0, v => pi = +v);
  k.select("Form", Object.entries(FORMS).map(([key, [n, s]]) => [key, `${n}  ${s}`]), form, v => form = v);
  const truth = (P, f) => (f === "cond" || f === "contra") ? (P.rel === "sub" || P.rel === "eq") : (P.rel === "sup" || P.rel === "eq");
  const ceFor = (P, f) => truth(P, f) ? null : (f === "cond" || f === "contra") ? { where: "P", text: P.ceP } : { where: "Q", text: P.ceQ };
  const imp = (a, b) => !a || b;
  k.loop(() => {
    c.begin(); const { w, h } = c, P = LOGIC[pi], ce = ceFor(P, form), tv = truth(P, form);
    const top = 52, x0 = 12, x1 = w - 12, y1 = h - 12;
    if (view === "euler") {
      d.rr(x0, top, x1 - x0, y1 - top, 6, k.alpha(C.panel2, .5), k.alpha(C.line2, .9));
      d.text("U: " + P.U, x0 + 10, top + 18, { font: `12px ${F.sans}`, color: C.faint });
      const aw = x1 - x0, ah = y1 - top - 46, cx = (x0 + x1) / 2, cy = top + 28 + ah / 2 + 4;
      const R = Math.max(30, Math.min(ah * .46, aw * .37));
      let Pc, Qc;
      if (P.rel === "sub") { Qc = { x: cx, y: cy, r: R }; Pc = { x: cx - R * .32, y: cy + R * .16, r: R * .52 }; }
      else if (P.rel === "sup") { Pc = { x: cx, y: cy, r: R }; Qc = { x: cx - R * .32, y: cy + R * .16, r: R * .52 }; }
      else if (P.rel === "eq") { Pc = { x: cx, y: cy, r: R }; Qc = { x: cx, y: cy, r: R }; }
      else { Pc = { x: cx - R * .5, y: cy, r: R * .74 }; Qc = { x: cx + R * .5, y: cy, r: R * .74 }; }
      // counterexample region
      if (ce) {
        const A = ce.where === "P" ? Pc : Qc, B = ce.where === "P" ? Qc : Pc;
        g.save(); g.beginPath(); g.arc(A.x, A.y, A.r, 0, 2 * Math.PI); g.clip();
        g.beginPath(); g.rect(0, 0, w, h); g.arc(B.x, B.y, B.r, 0, 2 * Math.PI, true); g.fillStyle = k.alpha(C.violet, .3); g.fill("evenodd"); g.restore();
      }
      d.circle(Qc.x, Qc.y, Qc.r, k.alpha(C.pink, .08), C.pink, 2.5);
      if (P.rel === "eq") { g.save(); g.setLineDash([7, 6]); d.circle(Pc.x, Pc.y, Pc.r - 5, null, C.cyan, 2.5); g.restore(); }
      else d.circle(Pc.x, Pc.y, Pc.r, k.alpha(C.cyan, .1), C.cyan, 2.5);
      const lf = `600 13px ${F.sans}`;
      if (P.rel === "eq") { d.text("p: " + P.ps, cx, cy - 10, { font: lf, color: C.cyan, align: "center" }); d.text("q: " + P.qs, cx, cy + 12, { font: lf, color: C.pink, align: "center" }); d.text("same set", cx, cy + 34, { font: `12px ${F.sans}`, color: C.amber, align: "center" }); }
      else if (P.rel === "sub") { d.text("q: " + P.qs, cx, Qc.y - Qc.r + 22, { font: lf, color: C.pink, align: "center" }); d.text("p: " + P.ps, Pc.x, Pc.y + 4, { font: lf, color: C.cyan, align: "center" }); }
      else if (P.rel === "sup") { d.text("p: " + P.ps, cx, Pc.y - Pc.r + 22, { font: lf, color: C.cyan, align: "center" }); d.text("q: " + P.qs, Qc.x, Qc.y + 4, { font: lf, color: C.pink, align: "center" }); }
      else { d.text("p: " + P.ps, Pc.x - Pc.r * .35, cy - Pc.r * .2, { font: lf, color: C.cyan, align: "center" }); d.text("q: " + P.qs, Qc.x + Qc.r * .35, cy - Qc.r * .2, { font: lf, color: C.pink, align: "center" }); }
      if (ce) {
        let px, py; const A = ce.where === "P" ? Pc : Qc;
        if (P.rel === "overlap") { px = A.x + (ce.where === "P" ? -1 : 1) * A.r * .5; py = cy + A.r * .32; }
        else { px = A.x + A.r * .62; py = A.y + A.r * .12; }
        d.circle(px, py, 6.5, C.violet, C.ink, 2);
        tag(k, c, "counterexample", px, py + 20, C.violet, { font: `600 12px ${F.sans}` });
      }
      const cap = `${FORMS[form][0]} ${FORMS[form][1]}:  ${tv ? "TRUE" : "FALSE"}`;
      d.text(cap, cx, y1 - 14, { font: `600 13px ${F.sans}`, color: tv ? C.amber : C.violet, align: "center" });
    } else {
      const cols = [["p", (a, b) => a], ["q", (a, b) => b], ["p→q", imp], ["q→p", (a, b) => imp(b, a)], ["~p→~q", (a, b) => imp(!a, !b)], ["~q→~p", (a, b) => imp(!b, !a)], ["p↔q", (a, b) => a === b]];
      const sel = { cond: 2, conv: 3, inv: 4, contra: 5 }[form], twin = { cond: 5, conv: 4, inv: 3, contra: 2 }[form];
      const tw = Math.min(w - 24, 600), cw = tw / 7, tx = (w - tw) / 2, rh = Math.min(40, (h - top - 150) / 5), ty = top + 14;
      let fs = 15; while (fs > 10 && d.width("~p→~q", `italic ${fs}px ${F.math}`) > cw - 6) fs -= .5;
      const rows = [[true, true], [true, false], [false, true], [false, false]];
      [sel, twin].forEach((ci, n) => { const bx = tx + ci * cw + 2; g.save(); if (n) g.setLineDash([5, 4]); d.rr(bx, ty - 2, cw - 4, rh * 5 + 4, 5, n ? null : k.alpha(C.amber, .08), k.alpha(C.amber, n ? .6 : .9), 1.5); g.restore(); });
      cols.forEach(([hd], ci) => {
        const col = ci === 0 ? C.cyan : ci === 1 ? C.pink : ci === sel ? C.amber : C.muted;
        d.text(hd, tx + ci * cw + cw / 2, ty + rh / 2 + 5, { font: `italic ${fs}px ${F.math}`, color: col, align: "center" });
      });
      d.line(tx, ty + rh, tx + tw, ty + rh, C.line2, 1);
      rows.forEach(([a, b], ri) => {
        const y = ty + rh * (ri + 1), bad = !cols[sel][1](a, b);
        if (bad) d.rr(tx, y + 2, tw, rh - 4, 4, k.alpha(C.violet, .18));
        cols.forEach(([, fn], ci) => {
          const v = fn(a, b), col = ci === sel ? (v ? C.amber : C.violet) : ci < 2 ? (ci ? C.pink : C.cyan) : (v ? C.text : C.violet);
          d.text(v ? "T" : "F", tx + ci * cw + cw / 2, y + rh / 2 + 5, { font: `${ci === sel ? 700 : 500} 15px ${F.mono}`, color: v || ci < 2 ? col : col, align: "center" });
        });
      });
      let yy = ty + rh * 5 + 26; const mw = Math.min(w - 32, 600), font = `13px ${F.sans}`;
      const say = (s, col) => wrap(c, s, font, mw).forEach(l => { if (yy < h - 8) d.text(l, w / 2, yy, { font, color: col, align: "center" }); yy += 18; });
      say(`p: ${P.p}`, C.cyan); say(`q: ${P.q}`, C.pink); yy += 6;
      say(`Columns ${FORMS[form][1]} and ${cols[twin][0].replace("→", " → ")} match: they are logically equivalent.`, C.amber);
      say(`The shaded row (${FORMS[form][1]} false) is the only kind of counterexample.`, C.violet);
    }
    const formsRows = Object.keys(FORMS).map(f => { const t = truth(P, f); return `<div class="row"><span class="m">${FORMH[f]}</span> <span class="v ${t ? "c1" : "c4"}">${t ? "T" : "F"}</span><span class="lbl">${FORMS[f][0]}${f === form ? " (shown above)" : ": " + esc(P.f[f])}</span></div>`; }).join("");
    let lm;
    if (P.rel === "eq") lm = `<div class="landmark hit"><div class="big"><span class="m">${PH} ↔ ${QH}</span></div><div class="note">Statement and converse are both true, so they combine into a biconditional: ${esc(P.bi)} Definitions work this way.</div></div>`;
    else if (ce) lm = `<div class="landmark hit"><div class="big c4">Counterexample</div><div class="note">${esc(ce.text)} It makes the ${FORMS[form][0].toLowerCase()} false${form === "conv" || form === "inv" ? " (and the " + (form === "conv" ? "inverse" : "converse") + " too)" : " (and the " + (form === "cond" ? "contrapositive" : "original statement") + " too)"}.</div></div>`;
    else lm = `<div class="landmark"><div class="big c1">True: no counterexample</div><div class="note">${form === "cond" || form === "contra" ? "Every case in the p region is inside the q region. The conditional and contrapositive stand or fall together." : "Every case in the q region is inside the p region, so the converse and inverse are both true."}</div></div>`;
    k.setRO(`<div><h2>${FORMS[form][0]}</h2><div style="margin-top:8px;font:400 19px/1.35 var(--math)">${esc(P.f[form])}</div><div class="ro-big" style="margin-top:6px"><span class="num ${tv ? "c1" : "c4"}">${tv ? "TRUE" : "FALSE"}</span></div></div>
      <div class="ro-rows">${formsRows}</div>${lm}
      <p class="narr">Switch the form: the counterexample region is the same for a statement and its contrapositive, and the same for the converse and the inverse.</p>`);
  });
};

/* =============== g-reasoning: circle regions (inductive) and Detachment / Syllogism (deductive) =============== */
function circleRegions(P){
  const n = P.length; if (n < 2) return { F: 1, pts: [] };
  const ch = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) ch.push([i, j]);
  const pts = [];
  for (let a = 0; a < ch.length; a++) for (let b = a + 1; b < ch.length; b++) {
    const [i, j] = ch[a], [p, q] = ch[b]; if (i === p || i === q || j === p || j === q) continue;
    const A = P[i], B = P[j], Cc = P[p], D = P[q];
    const r = { x: B.x - A.x, y: B.y - A.y }, s = { x: D.x - Cc.x, y: D.y - Cc.y }, den = r.x * s.y - r.y * s.x;
    if (Math.abs(den) < 1e-12) continue;
    const t = ((Cc.x - A.x) * s.y - (Cc.y - A.y) * s.x) / den, u = ((Cc.x - A.x) * r.y - (Cc.y - A.y) * r.x) / den;
    if (t <= 1e-9 || t >= 1 - 1e-9 || u <= 1e-9 || u >= 1 - 1e-9) continue;
    const X = { x: A.x + t * r.x, y: A.y + t * r.y };
    let f = pts.find(o => Math.hypot(o.x - X.x, o.y - X.y) < 1e-4);
    if (!f) { f = { x: X.x, y: X.y, set: new Set() }; pts.push(f); }
    f.set.add(a); f.set.add(b);
  }
  const on = ch.map(() => 0); pts.forEach(o => o.set.forEach(cc => on[cc]++));
  const V = n + pts.length, E = n + on.reduce((sum, m) => sum + m + 1, 0);
  return { F: E - V + 1, pts };
}
const binom = (n, r) => { if (r > n) return 0; let v = 1; for (let i = 0; i < r; i++) v = v * (n - i) / (i + 1); return Math.round(v); };
const moser = n => binom(n, 4) + binom(n, 2) + 1;
const DEDUCE = [
  { name: "Law of Detachment", prem: ["If two angles are vertical angles, then they are congruent.", "∠1 and ∠2 are vertical angles."],
    steps: [{ rule: "Law of Detachment", uses: [0, 1], text: "∠1 ≅ ∠2.", ok: true, form: "p → q, p ∴ q" }] },
  { name: "Syllogism, then Detachment", prem: ["If a quadrilateral is a square, then it is a rhombus.", "If a quadrilateral is a rhombus, then its diagonals are perpendicular.", "ABCD is a square."],
    steps: [{ rule: "Law of Syllogism", uses: [0, 1], text: "If a quadrilateral is a square, then its diagonals are perpendicular.", ok: true, form: "p → q, q → r ∴ p → r" },
            { rule: "Law of Detachment", uses: [3, 2], text: "The diagonals of ABCD are perpendicular.", ok: true, form: "p → r, p ∴ r" }] },
  { name: "A number chain", prem: ["If an integer ends in 0, then it is divisible by 10.", "If an integer is divisible by 10, then it is divisible by 5.", "340 ends in 0."],
    steps: [{ rule: "Law of Syllogism", uses: [0, 1], text: "If an integer ends in 0, then it is divisible by 5.", ok: true, form: "p → q, q → r ∴ p → r" },
            { rule: "Law of Detachment", uses: [3, 2], text: "340 is divisible by 5.", ok: true, form: "p → r, p ∴ r" }] },
  { name: "Affirming the conclusion", prem: ["If it is raining, then the game is cancelled.", "The game is cancelled."],
    steps: [{ rule: "Affirming the conclusion", uses: [0, 1], text: "It is raining.", ok: false, form: "p → q, q ⇏ p", why: "The game could have been cancelled for another reason, such as a power cut. Concluding p from q assumes the converse." }] },
  { name: "Denying the hypothesis", prem: ["If x > 5, then x² > 25.", "x ≤ 5."],
    steps: [{ rule: "Denying the hypothesis", uses: [0, 1], text: "x² ≤ 25.", ok: false, form: "p → q, ~p ⇏ ~q", why: "Counterexample: x = −6 satisfies x ≤ 5, but (−6)² = 36 > 25. Concluding ~q from ~p assumes the inverse." }] },
  { name: "A broken syllogism", prem: ["If a figure is a triangle, then it is a polygon.", "If a figure is a hexagon, then it is a polygon."],
    steps: [{ rule: "Not the Law of Syllogism", uses: [0, 1], text: "If a figure is a triangle, then it is a hexagon.", ok: false, form: "p → q, r → q ⇏ p → r", why: "Both statements end in q, so they do not chain. The conclusion of the first must be the hypothesis of the second." }] }
];
if (!document.getElementById("gb-style")) {
  const st = document.createElement("style"); st.id = "gb-style";
  st.textContent = `.gbd{display:flex;flex-direction:column;gap:7px;padding:40px 2px 8px;max-width:640px;margin:0 auto}
.gbd-h{font:600 11px/1.3 var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:2px 0}
.gbd-card{font:15px/1.4 var(--sans);border:1px solid var(--line-2);border-left:3px solid var(--cyan);border-radius:4px;padding:7px 10px;background:rgba(92,200,224,.06);color:var(--text)}
.gbd-card .n{font:600 11px var(--mono);color:var(--cyan);margin-right:8px}
.gbd-card.used{border-color:var(--amber);border-left-color:var(--amber);background:rgba(242,184,75,.10)}
.gbd-card.ok{border-left-color:var(--green);background:rgba(123,216,143,.08)}
.gbd-card.ok .n{color:var(--green)}
.gbd-card.bad{border-left-color:var(--violet);background:rgba(180,155,255,.10)}
.gbd-card.bad .n{color:var(--violet)}
.gbd-rule{font:500 12.5px/1.3 var(--sans);color:var(--faint);align-self:center;border:1px solid var(--line);border-radius:10px;padding:3px 12px;text-align:center}
.gbd-rule.on{color:var(--amber);border-color:rgba(242,184,75,.6);background:rgba(242,184,75,.12)}
.gbd-rule.badr{color:var(--violet);border-color:rgba(180,155,255,.6)}
.gbd-next{font:12.5px/1.4 var(--sans);color:var(--faint);text-align:center;margin-top:4px}
.gbp{position:absolute;left:0;right:0;bottom:0;overflow:auto;padding:4px 14px 12px;border-top:1px solid var(--line);background:rgba(11,15,24,.55)}
.gbp table.proof{margin:4px auto 0;max-width:720px;font-size:14px}
.gbp table.proof td{transition:background .2s}
.gbp tr.giv td:first-child{color:var(--cyan)}
.gbp tr.cur td{background:rgba(242,184,75,.13)}
.gbp tr.cur td:first-child{color:var(--amber)}
.gbp tr.use td{background:rgba(242,184,75,.05)}
.gbp tr.use td:first-child{box-shadow:inset 3px 0 0 var(--amber)}
.gbp tr.fin td:first-child{color:var(--green);font-weight:600}
.gbp td.r{color:var(--violet)}
.gbp .gp{font:13px/1.45 var(--sans);color:var(--muted);text-align:center;margin:2px 0 4px}
.gbp .gp b{font-weight:600}
.gbp td .m,.gbw .m{white-space:normal}`;
  document.head.appendChild(st);
}

L["g-reasoning"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d, g = c.g; const dom = k.dom(); dom.style.display = "none";
  let mode = "induct", n = 6, regular = false, pi = 0;
  const base = [90, 152, 199, 263, 321, 22, 118, 236].map(v => v * D2R);
  let ang = base.slice();
  const resetAng = () => { ang = regular ? base.map((_, i) => Math.PI / 2 + 2 * Math.PI * i / n) : base.slice(); };
  k.modes([["induct", "Inductive: circle regions"], ["deduct", "Deductive: chains"]], mode, v => { mode = v; layout(); });
  const sN = k.slider(`points <i class="c1">n</i>`, 1, 8, 1, n, v => { n = v; if (regular) resetAng(); });
  const chk = k.check("Equal spacing", regular, v => { regular = v; resetAng(); });
  const sel = k.select("Argument", DEDUCE.map((p, i) => [i, p.name]), 0, v => { pi = +v; st.reset(); });
  const before = k.ctl.children.length;
  const st = k.stepper(() => DEDUCE[pi].steps.length, () => {}, { ms: 1300 });
  const stBtns = [...k.ctl.children].slice(before);
  function layout(){ const ind = mode === "induct"; c.cv.style.display = ind ? "" : "none"; dom.style.display = ind ? "none" : "";
    showCtl(sN.el, ind); showCtl(chk, ind); showCtl(sel.el, !ind); stBtns.forEach(b => b.style.display = ind ? "none" : ""); const hc = k.stage.querySelector(".hintc"); if (hc) hc.style.display = ind ? "" : "none"; }
  layout();
  let geo = { cx: 0, cy: 0, R: 1 };
  const P = () => ang.slice(0, n).map(a => ({ x: geo.cx + geo.R * Math.cos(a), y: geo.cy - geo.R * Math.sin(a) }));
  dragger(c, P, (i, p) => { ang[i] = Math.atan2(geo.cy - p.y, p.x - geo.cx); if (regular) { regular = false; chk.checked = false; } });
  k.hint("Drag a point around the circle"); layout();
  let lastDom = "";
  k.loop(() => {
    if (mode === "induct") {
      c.begin(); const { w, h } = c;
      const R = Math.max(40, Math.min((h - 100) / 2, (w - 40) / 2, 210)); geo = { cx: w / 2, cy: 50 + (h - 80) / 2 + 6, R };
      const pts = P(), unit = ang.slice(0, n).map(a => ({ x: Math.cos(a), y: Math.sin(a) }));
      const res = circleRegions(unit), want = moser(n), pow = 2 ** (n - 1);
      d.circle(geo.cx, geo.cy, R, k.alpha(C.panel2, .6), C.muted, 2);
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) d.line(pts[i].x, pts[i].y, pts[j].x, pts[j].y, k.alpha(C.cyan, .85), 1.6);
      res.pts.forEach(o => { const X = geo.cx + R * o.x, Y = geo.cy - R * o.y; if (o.set.size > 2) d.circle(X, Y, 6, null, C.violet, 2.5); else d.circle(X, Y, 1.8, k.alpha(C.text, .55)); });
      pts.forEach(p => d.circle(p.x, p.y, 7, C.amber, C.ink, 2));
      const bad = res.F !== pow;
      d.text(`regions: ${res.F}`, 16, 66, { font: `600 16px ${F.mono}`, color: C.amber });
      d.text(`2ⁿ⁻¹ = ${pow}`, 16, 88, { font: `600 14px ${F.mono}`, color: bad ? C.violet : C.pink });
      const conc = res.pts.filter(o => o.set.size > 2).length;
      if (conc) d.text(`${conc} point${conc > 1 ? "s" : ""} where 3+ chords meet`, 16, 108, { font: `12px ${F.sans}`, color: C.violet });
      const rows = [1, 2, 3, 4, 5, 6, 7, 8].map(m => { const r = moser(m), q = 2 ** (m - 1); return `<div class="row"${m === n ? ' style="background:rgba(242,184,75,.10);border-radius:3px"' : ""}><span class="m"><i>n</i> = ${m}</span> <span class="v c1">${r}</span> <span class="v ${r === q ? "c3" : "c4"}">${r === q ? "= " : "≠ "}${q}</span></div>`; }).join("");
      let lm;
      if (res.F !== want) lm = `<div class="landmark hit"><div class="big c4">${res.F} regions, not ${want}</div><div class="note">Three or more chords pass through one point (violet ring), so regions merge. The formula C(n, 4) + C(n, 2) + 1 assumes no three chords meet inside. Drag a point slightly to separate them.</div></div>`;
      else if (bad) lm = `<div class="landmark hit"><div class="big"><span class="c4">Counterexample:</span> ${res.F} ≠ <span class="c3">${pow}</span></div><div class="note">The doubling pattern held for n = 1 to 5 and fails here. Five agreeing cases did not prove the conjecture; one case disproves it.</div></div>`;
      else lm = `<div class="landmark"><div class="big"><span class="c1">${res.F}</span> = <span class="c3">2<sup>${n - 1}</sup></span></div><div class="note">So far the regions double with each new point. That is inductive evidence for the conjecture 2<sup><i>n</i> − 1</sup>, not a proof. Try n = 6.</div></div>`;
      k.setRO(`<div><h2>Regions in the disc</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${res.F}</span> <span style="font-size:.6em;color:var(--muted)">conjecture</span> <span class="num ${bad ? "c4" : "c3"}" style="font-size:.7em">${pow}</span></div></div>
        <div class="ro-rows" style="gap:3px;font-size:15px"><div class="row"><span class="lbl" style="width:auto">n · regions C(n,4)+C(n,2)+1 · conjecture 2<sup>n−1</sup></span></div>${rows}</div>${lm}
        <p class="narr">${regular ? "Equal spacing makes chords concurrent for even n ≥ 6; uncheck it to see the maximum." : "Toggle equal spacing: the regular hexagon gives only 30, because its three long diagonals meet at the centre."}</p>`);
    } else {
      const A = DEDUCE[pi], kk = st.k, all = A.prem.slice(); A.steps.forEach(s2 => all.push(s2.text));
      const cur = kk > 0 ? A.steps[kk - 1] : null, used = cur ? cur.uses : [];
      let h2 = `<div class="gbd"><div class="gbd-h">Premises</div>`;
      A.prem.forEach((t, i) => { h2 += `<div class="gbd-card${used.includes(i) ? " used" : ""}"><span class="n">P${i + 1}</span>${esc(t)}</div>`; });
      for (let i = 0; i < kk; i++) { const s2 = A.steps[i], on = i === kk - 1;
        const lab = s2.uses.map(u => u < A.prem.length ? "P" + (u + 1) : "S" + (u - A.prem.length + 1)).join(", ");
        h2 += `<div class="gbd-rule${on ? " on" : ""}${s2.ok ? "" : " badr"}">↓ ${esc(s2.rule)} (${lab})</div>`;
        h2 += `<div class="gbd-card ${s2.ok ? "ok" : "bad"}${used.includes(A.prem.length + i) ? " used" : ""}"><span class="n">${s2.ok ? "S" + (i + 1) + " ✓" : "✗"}</span>${esc(s2.text)}</div>`; }
      h2 += kk < A.steps.length ? `<div class="gbd-next">Press Step to apply the next rule.</div>` : `<div class="gbd-next">${A.steps.every(x => x.ok) ? "Every step is a valid form, so the conclusion must be true whenever the premises are." : "The last step is not a valid form: the premises can be true while its conclusion is false."}</div>`;
      h2 += `</div>`;
      if (h2 !== lastDom) { dom.innerHTML = h2; lastDom = h2; }
      const done = kk === A.steps.length, valid = A.steps.slice(0, kk).every(x => x.ok);
      let lm;
      if (!cur) lm = `<div class="landmark"><div class="big">Premises only</div><div class="note">Accept the premises as true and ask what must follow.</div></div>`;
      else if (cur.ok) lm = `<div class="landmark${done ? " hit" : ""}"><div class="big"><span class="m">${esc(cur.form)}</span></div><div class="note"><span class="c5">${esc(cur.text)}</span> follows by the ${esc(cur.rule)}.</div></div>`;
      else lm = `<div class="landmark hit"><div class="big c4"><span class="m">${esc(cur.form)}</span></div><div class="note">${esc(cur.why)}</div></div>`;
      k.setRO(`<div><h2>${esc(A.name)}</h2><div class="ro-big" style="margin-top:8px"><span class="num ${!cur ? "" : valid ? "c5" : "c4"}">${!cur ? "…" : valid ? (done ? "valid" : "valid so far") : "invalid"}</span></div></div>
        <div class="ro-rows" style="font-size:15px">${A.steps.slice(0, kk).map((s2, i) => `<div class="row"><span class="m ${s2.ok ? "c5" : "c4"}">${esc(s2.form)}</span><span class="lbl">Step ${i + 1}: ${esc(s2.rule)}</span></div>`).join("") || `<div class="row"><span class="lbl">No steps yet</span></div>`}</div>${lm}
        <p class="narr">Valid forms: Detachment and Syllogism. Invalid: affirming the conclusion, denying the hypothesis, and chaining statements that do not link.</p>`);
    }
  });
};

/* =============== g-proofs: two-column proof stepper with a live figure =============== */
const PROOFS = [
  { name: "Algebraic proof: 2(x − 3) = 8", given: "2(<i>x</i> − 3) = 8", prove: "<i>x</i> = 7",
    rows: [["2(<i>x</i> − 3) = 8", "Given", []], ["2<i>x</i> − 6 = 8", "Distributive Property", [0]], ["2<i>x</i> = 14", "Addition Property of Equality", [1]], ["<i>x</i> = 7", "Division Property of Equality", [2]]],
    pans: [["2(x − 3)", "8", ""], ["2x − 6", "8", "distribute the 2"], ["2x", "14", "add 6 to both sides"], ["x", "7", "divide both sides by 2"]], fig: "algebra" },
  { name: "Segments: AB = CD ⇒ AC = BD", given: "<i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> collinear in that order; <i>AB</i> = <i>CD</i>", prove: "<i>AC</i> = <i>BD</i>",
    rows: [["<i>AB</i> = <i>CD</i>", "Given", []], ["<i>AB</i> + <i>BC</i> = <i>BC</i> + <i>CD</i>", "Addition Property of Equality", [0]], ["<i>AB</i> + <i>BC</i> = <i>AC</i>, &nbsp;<i>BC</i> + <i>CD</i> = <i>BD</i>", "Segment Addition Postulate", []], ["<i>AC</i> = <i>BD</i>", "Substitution Property of Equality", [1, 2]]], fig: "segments" },
  { name: "Vertical Angles Theorem", given: "∠1 and ∠2 are vertical angles", prove: "∠1 ≅ ∠2",
    rows: [["∠1 and ∠2 are vertical angles", "Given", []], ["∠1 and ∠3 form a linear pair; ∠3 and ∠2 form a linear pair", "Definition of linear pair", [0]], ["m∠1 + m∠3 = 180°, &nbsp;m∠3 + m∠2 = 180°", "Linear Pair Postulate", [1]], ["m∠1 + m∠3 = m∠3 + m∠2", "Substitution Property of Equality", [2]], ["m∠1 = m∠2", "Subtraction Property of Equality", [3]], ["∠1 ≅ ∠2", "Definition of congruent angles", [4]]], fig: "vertical" },
  { name: "Congruent Supplements Theorem", given: "∠1 and ∠2 are supplementary; ∠3 and ∠2 are supplementary", prove: "∠1 ≅ ∠3",
    rows: [["∠1 and ∠2 are supplementary; ∠3 and ∠2 are supplementary", "Given", []], ["m∠1 + m∠2 = 180°, &nbsp;m∠3 + m∠2 = 180°", "Definition of supplementary angles", [0]], ["m∠1 + m∠2 = m∠3 + m∠2", "Substitution Property of Equality", [1]], ["m∠1 = m∠3", "Subtraction Property of Equality", [2]], ["∠1 ≅ ∠3", "Definition of congruent angles", [3]]], fig: "supp" }
];
L["g-proofs"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const box = document.createElement("div"); box.className = "gbp"; k.stage.appendChild(box);
  let pi = 2;
  k.select("Proof", PROOFS.map((p, i) => [i, p.name]), pi, v => { pi = +v; st.reset(); });
  const st = k.stepper(() => PROOFS[pi].rows.length, () => {}, { ms: 1400 });
  let lastH = "", lastTop = -1;
  const vec = a => ({ x: Math.cos(a * D2R), y: -Math.sin(a * D2R) });
  function ang(x, y, a1, a2, r, col, label, lr){ const m = wedge(k, c, x, y, vec(a1), vec(a2), r, col, { fa: .22, lw: 2.2 }); d.text(label, x + Math.cos(m) * (lr || r + 15), y + Math.sin(m) * (lr || r + 15), { font: `600 14px ${F.math}`, color: col, align: "center", base: "middle" }); }
  k.loop(() => {
    c.begin(); const { w, h } = c, A = PROOFS[pi], kk = st.k, n = A.rows.length;
    const figH = Math.round(Math.max(150, Math.min(h * .42, 250)));
    if (figH !== lastTop) { box.style.top = figH + "px"; lastTop = figH; }
    const cur = kk - 1, uses = cur >= 0 ? A.rows[cur][2] : [], done = kk === n;
    const cx = w / 2, cy = figH / 2 + 6;
    if (A.fig === "algebra") {
      const pz = A.pans[Math.max(0, cur)], bw = Math.min(w * .7, 420), by = cy - 2;
      d.line(cx - bw / 2, by, cx + bw / 2, by, C.muted, 3);
      g.fillStyle = C.muted; g.beginPath(); g.moveTo(cx, by + 2); g.lineTo(cx - 14, by + 30); g.lineTo(cx + 14, by + 30); g.closePath(); g.fill();
      const col = kk === 0 ? C.faint : done ? C.green : kk === 1 ? C.cyan : C.amber;
      [[-1, pz[0]], [1, pz[1]]].forEach(([sg, t]) => { const px = cx + sg * bw * .36; d.line(px, by, px, by - 16, C.muted, 1.5); d.rr(px - 70, by - 52, 140, 36, 6, k.alpha(col, .12), col, 1.5); d.text(t, px, by - 28, { font: `italic 20px ${F.math}`, color: col, align: "center" }); });
      d.text("=", cx, by - 28, { font: `22px ${F.math}`, color: C.text, align: "center" });
      if (cur > 0) tag(k, c, pz[2], cx, by + 50, C.violet, { font: `600 12px ${F.sans}` });
    } else if (A.fig === "segments") {
      const L0 = Math.min(w - 60, 520), x0 = cx - L0 / 2, sc = L0 / 48, y = cy + 4, X = v => x0 + v * sc;
      const pos = { A: 0, B: 14, C: 34, D: 48 };
      d.line(x0 - 20, y, x0 + L0 + 20, y, C.muted, 2);
      const seg = (a, b, col, lw) => d.line(X(pos[a]), y, X(pos[b]), y, col, lw);
      if (kk >= 1) { seg("A", "B", C.cyan, 4); seg("C", "D", C.cyan, 4); [[0, 14], [34, 48]].forEach(([a, b]) => { const m = X((a + b) / 2); d.line(m, y - 8, m, y + 8, C.cyan, 2); }); }
      if (kk >= 2) seg("B", "C", cur === 1 ? C.amber : k.alpha(C.amber, .6), 4);
      const brace = (a, b, yy, col, lab) => { const xa = X(pos[a]), xb = X(pos[b]), dir = yy < y ? 1 : -1; g.save(); g.strokeStyle = col; g.lineWidth = 2; g.beginPath(); g.moveTo(xa, yy + dir * 7); g.lineTo(xa, yy); g.lineTo(xb, yy); g.lineTo(xb, yy + dir * 7); g.stroke(); g.restore(); d.text(lab, (xa + xb) / 2, yy - dir * 9, { font: `italic 15px ${F.math}`, color: col, align: "center", base: "middle" }); };
      if (kk >= 3) { const col = done ? C.green : C.amber; brace("A", "C", y - 30, col, "AC = 34"); brace("B", "D", y + 30, col, "BD = 34"); }
      Object.entries(pos).forEach(([nm, v]) => { d.circle(X(v), y, 5.5, C.text); d.text(nm, X(v), y - (kk >= 3 ? 56 : 18), { font: `italic 17px ${F.math}`, color: C.text, align: "center" }); });
      [["14", 7], ["20", 24], ["14", 41]].forEach(([t, v]) => d.text(t, X(v), y + (kk >= 3 ? 64 : 22), { font: `12px ${F.mono}`, color: C.faint, align: "center" }));
    } else if (A.fig === "vertical") {
      const R = Math.min(figH * .42, w * .3), r = Math.min(30, R * .38);
      [25, 140].forEach(a => { const u = vec(a); d.line(cx - u.x * R * 1.3, cy - u.y * R * 1.3, cx + u.x * R * 1.3, cy + u.y * R * 1.3, C.muted, 2); });
      const c1 = kk === 0 ? C.faint : done ? C.green : C.cyan, c3 = kk >= 2 ? (cur === 1 || cur === 2 ? C.amber : k.alpha(C.amber, .7)) : null;
      ang(cx, cy, 25, 140, r, c1, kk >= 3 ? "1 · 115°" : "1", r + 26);
      ang(cx, cy, 205, 320, r, c1, kk >= 3 ? "2 · 115°" : "2", r + 26);
      if (c3) ang(cx, cy, 140, 205, r * .8, c3, kk >= 3 ? "3 · 65°" : "3", r + 22);
      d.circle(cx, cy, 3.5, C.text);
    } else {
      const half = Math.min(w / 4 - 10, 150), r = Math.min(30, half * .3), yb = cy + figH * .2;
      [[cx - w / 4, "1", "2"], [cx + w / 4, "3", "2"]].forEach(([x, a1, a2], i) => {
        d.line(x - half, yb, x + half, yb, C.muted, 2); const u = vec(130); d.line(x, yb, x + u.x * half * .9, yb + u.y * half * .9, C.muted, 2);
        const giv = kk === 0 ? C.faint : C.cyan, fin = done ? C.green : giv;
        ang(x, yb, 0, 130, r, fin, (kk >= 2 ? "∠" + a1 + " 130°" : "∠" + a1), r + 30);
        ang(x, yb, 130, 180, r * .8, giv, (kk >= 2 ? "∠2 50°" : "∠2"), r + 34);
        d.circle(x, yb, 3, C.text);
        if (kk >= 2) d.text(i ? "m∠3 + m∠2 = 180°" : "m∠1 + m∠2 = 180°", x, yb + 22, { font: `13px ${F.math}`, color: cur === 1 ? C.amber : C.muted, align: "center" });
      });
      d.text("∠2 is drawn twice", cx, 18, { font: `12px ${F.sans}`, color: C.faint, align: "center" });
    }
    // proof table
    let t = `<div class="gp"><b class="c2">Given</b> ${A.given} &nbsp;·&nbsp; <b class="c5">Prove</b> ${A.prove}</div><table class="proof"><tr><th>Statement</th><th>Reason</th></tr>`;
    for (let i = 0; i < kk; i++) { const [s1, r1] = A.rows[i]; const cls = [r1 === "Given" ? "giv" : "", i === cur && !(done && i === n - 1) ? "cur" : "", uses.includes(i) ? "use" : "", done && i === n - 1 ? "fin" : ""].filter(Boolean).join(" ");
      t += `<tr class="${cls}"><td><span class="m">${s1}</span></td><td class="r">${r1}</td></tr>`; }
    if (kk < n) t += `<tr><td style="color:var(--faint)">${kk === 0 ? "Press Step to write the first line." : "…"}</td><td></td></tr>`;
    t += `</table>`;
    if (t !== lastH) { box.innerHTML = t; lastH = t; const rows = box.querySelectorAll("tr"); const last = rows[rows.length - 1]; if (last && last.scrollIntoView) box.scrollTop = box.scrollHeight; }
    const lm = kk === 0 ? `<div class="landmark"><div class="big">Plan</div><div class="note">Start from the given facts. Every later line must follow from lines above it by a named reason.</div></div>`
      : done ? `<div class="landmark hit"><div class="big c5">∴ <span class="m">${A.prove}</span></div><div class="note">The last line is the Prove statement, so the theorem holds for every figure that satisfies the Given.</div></div>`
      : `<div class="landmark gbw"><div class="big c1" style="font-size:17px"><span class="m">${A.rows[cur][0]}</span></div><div class="note"><span class="c4">${A.rows[cur][1]}</span>${uses.length ? ", using line" + (uses.length > 1 ? "s " : " ") + uses.map(u => u + 1).join(" and ") : ""}.</div></div>`;
    k.setRO(`<div class="gbw"><h2>${A.name.split(":")[0]}</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${kk}</span><span style="font-size:.6em;color:var(--muted)"> of ${n} lines</span></div></div>
      <div class="ro-rows gbw" style="font-size:15px"><div class="row"><span class="c2">Given</span> <span class="m">${A.given}</span></div><div class="row"><span class="c5">Prove</span> <span class="m">${A.prove}</span></div></div>${lm}
      <p class="narr">Highlighted rows are the earlier lines the current step uses. Reasons are in violet.</p>`);
  });
};

/* =============== g-parallel: two lines and a transversal =============== */
const PAIRS = { corr: ["Corresponding", [[1, 5], [2, 6], [3, 7], [4, 8]], "eq"], ai: ["Alternate interior", [[3, 6], [4, 5]], "eq"], ae: ["Alternate exterior", [[1, 8], [2, 7]], "eq"], ssi: ["Same-side interior", [[3, 5], [4, 6]], "sup"] };
const THM = { corr: "Corresponding Angles Postulate", ai: "Alternate Interior Angles Theorem", ae: "Alternate Exterior Angles Theorem", ssi: "Same-Side Interior Angles Theorem" };
L["g-parallel"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let th = 62, tilt = false, phi = 6, type = "corr", idx = 1;
  const sT = k.slider(`transversal <i class="c4">t</i>`, 20, 160, 0.5, th, v => th = v, v => f1(v) + "°");
  k.select("Pair", Object.entries(PAIRS).map(([key, v]) => [key, v[0]]), type, v => { type = v; idx = 0; });
  k.button("Next pair", () => { idx = (idx + 1) % PAIRS[type][1].length; }, "btn ghost");
  k.check("Tilt line m", tilt, v => { tilt = v; showCtl(sP.el, v); });
  const sP = k.slider(`tilt`, -12, 12, 1, phi, v => phi = v, v => (v > 0 ? "+" : "") + k.fmt(v, 0) + "°"); showCtl(sP.el, false);
  let geo = null;
  dragger(c, () => geo ? [geo.h1, geo.h2] : [], (i, p) => { const dx = p.x - geo.cx, dy = geo.cy - p.y; let a = Math.atan2(dy, dx) / D2R; if (a < 0) a += 180; if (a >= 180) a -= 180; th = Math.max(20, Math.min(160, Math.round(a * 2) / 2)); sT.set(th); }, 20);
  k.hint("Drag a transversal handle");
  const inter = (p, u, q, v) => { const den = u.x * v.y - u.y * v.x; if (Math.abs(den) < 1e-9) return null; const t = ((q.x - p.x) * v.y - (q.y - p.y) * v.x) / den; return { x: p.x + u.x * t, y: p.y + u.y * t }; };
  k.loop(() => {
    c.begin(); const { w, h } = c; const ph = tilt ? phi : 0;
    const top = 48, cx = w / 2, cy = top + (h - top) / 2, gap = Math.min((h - top) * .36, 170);
    const vec = a => ({ x: Math.cos(a * D2R), y: -Math.sin(a * D2R) });
    const lP = { x: cx, y: cy - gap / 2 }, mP = { x: cx, y: cy + gap / 2 }, tP = { x: cx, y: cy };
    const uL = vec(0), uM = vec(ph), uT = vec(th);
    const P = inter(lP, uL, tP, uT), Q = inter(mP, uM, tP, uT);
    const far = 3000, ln = (p, u, col, lw, dash) => d.line(p.x - u.x * far, p.y - u.y * far, p.x + u.x * far, p.y + u.y * far, col, lw, dash);
    // the two lines and the transversal
    ln(lP, uL, C.text, 2); ln(mP, uM, C.text, 2); ln(tP, uT, C.violet, 2.5);
    const chev = (p, u, col) => { [0, 9].forEach(o => { const x = p.x + u.x * (o - 4), y = p.y + u.y * (o - 4); g.save(); g.strokeStyle = col; g.lineWidth = 2; g.beginPath(); g.moveTo(x - u.x * 6 - u.y * 5, y - u.y * 6 + u.x * 5); g.lineTo(x, y); g.lineTo(x - u.x * 6 + u.y * 5, y - u.y * 6 - u.x * 5); g.stroke(); g.restore(); }); };
    if (!ph) { chev({ x: w - 46, y: lP.y }, uL, C.text); chev({ x: w - 46, y: mP.y }, uM, C.text); }
    d.text("ℓ", 14, lP.y - 8, { font: `italic 18px ${F.math}`, color: C.text });
    d.text("m", 14, mP.y + (mP.x - 14) * Math.tan(ph * D2R) - 8, { font: `italic 18px ${F.math}`, color: C.text });
    // eight angles: [at, a1, a2] in math degrees; order 1 UL, 2 UR, 3 LL, 4 LR at P; 5..8 at Q
    const A8 = { 1: [P, th, 180], 2: [P, 0, th], 3: [P, 180, 180 + th], 4: [P, 180 + th, 360], 5: [Q, th, 180 + ph], 6: [Q, ph, th], 7: [Q, 180 + ph, 180 + th], 8: [Q, 180 + th, 360 + ph] };
    const meas = i => A8[i][2] - A8[i][1];
    const [ia, ib] = PAIRS[type][1][idx];
    const r = Math.max(22, Math.min(36, gap * .24));
    for (let i = 1; i <= 8; i++) {
      const [pt, a1, a2] = A8[i], mid = (a1 + a2) / 2 * D2R, on = i === ia || i === ib;
      if (on) { const col = i === ia ? C.cyan : C.pink; const m2 = wedge(k, c, pt.x, pt.y, vec(a1), vec(a2), r, col, { fa: .28, lw: 2.5, square: true });
        tag(k, c, `∠${i} ${f1(meas(i))}°`, pt.x + Math.cos(m2) * (r + 30), pt.y + Math.sin(m2) * (r + 18), col, { border: true }); }
      else d.text(String(i), pt.x + Math.cos(mid) * (r * .62), pt.y - Math.sin(mid) * (r * .62), { font: `12px ${F.mono}`, color: C.faint, align: "center", base: "middle" });
    }
    d.circle(P.x, P.y, 3.5, C.violet); d.circle(Q.x, Q.y, 3.5, C.violet);
    // handles on the transversal
    const H = Math.min(gap * 1.15, (h - top) / 2 - 14);
    const h1 = { x: cx + uT.x * H, y: cy + uT.y * H }, h2 = { x: cx - uT.x * H, y: cy - uT.y * H };
    geo = { cx, cy, h1, h2 };
    [h1, h2].forEach(p => d.circle(p.x, p.y, 8, k.alpha(C.violet, .35), C.violet, 2));
    d.text("t", h1.x + 12, h1.y, { font: `italic 18px ${F.math}`, color: C.violet, base: "middle" });
    // where the lines meet
    let meet = null;
    if (ph) { meet = inter(lP, uL, mP, uM); if (meet) { const inside = meet.x > 10 && meet.x < w - 10;
        if (inside) { d.circle(meet.x, meet.y, 6, C.amber, C.ink, 2); tag(k, c, "ℓ and m meet", meet.x, meet.y - 20, C.amber); }
        else { const right = meet.x > cx, ax = right ? w - 16 : 16; d.arrow(right ? w - 90 : 90, lP.y + gap * .25, ax, lP.y + gap * .25, C.amber, 2.5);
          tag(k, c, `ℓ and m meet off-screen to the ${right ? "right" : "left"}`, right ? w - 18 : 18, lP.y + gap * .25 - 18, C.amber, { align: right ? "right" : "left", font: `600 12px ${F.sans}` }); } } }
    const ma = meas(ia), mb = meas(ib), rel = PAIRS[type][2];
    const holds = rel === "eq" ? Math.abs(ma - mb) < 1e-9 : Math.abs(ma + mb - 180) < 1e-9;
    const relTxt = rel === "eq" ? (holds ? "≅" : "≠") : (holds ? "sum 180°" : `sum ${f1(ma + mb)}°`);
    const sumR = meas(4) + meas(6), sumL = meas(3) + meas(5);
    const lm = !ph ? `<div class="landmark hit"><div class="big"><span class="c2">∠${ia}</span> <span class="c1">${rel === "eq" ? "≅" : "+"}</span> <span class="c3">∠${ib}</span>${rel === "eq" ? "" : ' <span class="c1">= 180°</span>'}</div><div class="note">${THM[type]}: with ℓ ∥ m, ${rel === "eq" ? "this pair is congruent" : "this pair is supplementary"} for every position of the transversal.</div></div>`
      : `<div class="landmark hit"><div class="big"><span class="c2">${f1(ma)}°</span> <span class="c1">${rel === "eq" ? "≠" : "+"}</span> <span class="c3">${f1(mb)}°</span>${rel === "eq" ? "" : ` <span class="c1">= ${f1(ma + mb)}° ≠ 180°</span>`}</div><div class="note">The pair fails the test, so by the contrapositive of the ${THM[type].replace("Theorem", "Theorem").replace("Postulate", "Postulate")} the lines are not parallel. They meet on the ${ph > 0 ? "right" : "left"}, where the same-side interior angles total ${f1(ph > 0 ? sumR : sumL)}° &lt; 180°.</div></div>`;
    k.setRO(`<div><h2>${PAIRS[type][0]} angles</h2><div class="ro-big" style="margin-top:8px;font-size:26px"><span class="num c2">${f1(ma)}°</span> <span class="c1">${rel === "eq" ? (holds ? "≅" : "≠") : "+"}</span> <span class="num c3">${f1(mb)}°</span>${rel === "eq" ? "" : ` <span class="c1">= ${f1(ma + mb)}°</span>`}</div></div>
      <div class="ro-rows"><div class="row"><span class="m c2">m∠${ia}</span> = <span class="v c2">${f1(ma)}°</span> <span class="m c3">m∠${ib}</span> = <span class="v c3">${f1(mb)}°</span></div>
      <div class="row"><span class="m">m∠4 + m∠6</span> = <span class="v">${f1(sumR)}°</span><span class="lbl">same-side interior, right of t</span></div>
      <div class="row"><span class="m">m∠3 + m∠5</span> = <span class="v">${f1(sumL)}°</span><span class="lbl">same-side interior, left of t</span></div>
      <div class="row"><span class="m">${ph ? "<i>ℓ</i> ∦ <i>m</i>" : "<i>ℓ</i> ∥ <i>m</i>"}</span><span class="lbl">${ph ? `line m tilted ${k.fmt(ph, 0).replace("-", "−")}°` : "line m parallel to ℓ"}</span></div></div>${lm}
      <p class="narr">${ph ? "Untick the tilt to make the lines parallel again." : "Tick “Tilt line m” to see every pair stop matching."}</p>`);
  });
};

/* =============== g-triangle-angles: angle sum via a parallel line, exterior angle =============== */
L["g-triangle-angles"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "sum", ev = "C";
  let N = [{ x: .14, y: .86 }, { x: .88, y: .86 }, { x: .4, y: .12 }];   // A, B, C in the drawing box
  k.modes([["sum", "Angle sum"], ["ext", "Exterior angle"]], mode, v => { mode = v; showCtl(sel.el, v === "ext"); });
  const sel = k.select("Exterior at", [["A", "A"], ["B", "B"], ["C", "C"]], ev, v => ev = v); showCtl(sel.el, false);
  k.button("Reset", () => { N = [{ x: .14, y: .86 }, { x: .88, y: .86 }, { x: .4, y: .12 }]; }, "btn ghost");
  let box = { x: 0, y: 0, w: 1, h: 1 };
  const px = () => N.map(p => ({ x: box.x + p.x * box.w, y: box.y + p.y * box.h }));
  dragger(c, px, (i, p) => { N[i] = { x: Math.max(0, Math.min(1, (p.x - box.x) / box.w)), y: Math.max(0, Math.min(1, (p.y - box.y) / box.h)) }; }, 20);
  k.hint("Drag A, B or C");
  const COL = () => [C.cyan, C.pink, C.violet];
  const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y }), len = v => Math.hypot(v.x, v.y);
  const angAt = (V, U, W) => { const a = sub(U, V), b = sub(W, V); const cs = (a.x * b.x + a.y * b.y) / (len(a) * len(b)); return Math.acos(Math.max(-1, Math.min(1, cs))) / D2R; };
  function round3(a){ // tenths that sum to exactly 1800
    const t = a.map(v => v * 10), fl = t.map(Math.floor); let rem = 1800 - fl.reduce((s, v) => s + v, 0);
    const ord = t.map((v, i) => [v - fl[i], i]).sort((p, q) => q[0] - p[0]); ord.forEach(([, i]) => { if (rem > 0) { fl[i]++; rem--; } });
    return fl.map(v => v / 10);
  }
  k.loop(() => {
    c.begin(); const { w, h } = c, col = COL();
    box = { x: 30, y: 74, w: Math.max(40, w - 60), h: Math.max(40, h - 156) };
    const P = px(), [A, B, Cc] = P, names = ["A", "B", "C"];
    const area2 = Math.abs((B.x - A.x) * (Cc.y - A.y) - (B.y - A.y) * (Cc.x - A.x));
    const minSide = Math.min(len(sub(A, B)), len(sub(B, Cc)), len(sub(Cc, A)));
    const raw = [angAt(A, B, Cc), angAt(B, Cc, A), angAt(Cc, A, B)];
    const degen = minSide < 14 || Math.min(...raw) < 0.6 || area2 < 60;
    if (degen) {
      d.line(A.x, A.y, B.x, B.y, C.muted, 2); d.line(B.x, B.y, Cc.x, Cc.y, C.muted, 2); d.line(Cc.x, Cc.y, A.x, A.y, C.muted, 2);
      P.forEach((p, i) => { d.circle(p.x, p.y, 8, col[i], C.ink, 2); d.text(names[i], p.x + 12, p.y - 10, { font: `italic 18px ${F.math}`, color: col[i] }); });
      tag(k, c, minSide < 14 ? "Two vertices coincide: no triangle" : "The three points are (almost) collinear: no triangle", w / 2, 62, C.amber, { font: `600 13px ${F.sans}`, h: 24 });
      k.setRO(`<div><h2>No triangle</h2><div class="ro-big" style="margin-top:8px"><span class="num" style="color:var(--muted)">—</span></div></div><div class="landmark hit"><div class="big">Degenerate</div><div class="note">A triangle needs three non-collinear points. Drag a vertex away from the line through the other two.</div></div><p class="narr">Press Reset to restore the starting triangle.</p>`);
      return;
    }
    const m = round3(raw);
    const R = i => Math.max(14, Math.min(34, .3 * Math.min(len(sub(P[i], P[(i + 1) % 3])), len(sub(P[i], P[(i + 2) % 3])))));
    g.save(); g.beginPath(); g.moveTo(A.x, A.y); g.lineTo(B.x, B.y); g.lineTo(Cc.x, Cc.y); g.closePath(); g.fillStyle = k.alpha(C.panel3 || C.panel2, .5); g.fill(); g.restore();
    const labelAng = (i, mid, r, txt, colr) => tag(k, c, txt, P[i].x + Math.cos(mid) * (r + 22), P[i].y + Math.sin(mid) * (r + 14), colr);
    let ro;
    if (mode === "sum") {
      const u = sub(A, B), ul = len(u), e = { x: u.x / ul, y: u.y / ul }, far = 3000;
      d.line(Cc.x - e.x * far, Cc.y - e.y * far, Cc.x + e.x * far, Cc.y + e.y * far, k.alpha(C.amber, .8), 1.8, [7, 6]);
      d.line(A.x, A.y, B.x, B.y, C.text, 2.2); d.line(B.x, B.y, Cc.x, Cc.y, C.text, 2.2); d.line(Cc.x, Cc.y, A.x, A.y, C.text, 2.2);
      for (let i = 0; i < 3; i++) { const r = R(i), mid = wedge(k, c, P[i].x, P[i].y, sub(P[(i + 1) % 3], P[i]), sub(P[(i + 2) % 3], P[i]), r, col[i], { fa: .3, lw: 2.5, square: true }); if (i < 2 && m[i] >= 5) labelAng(i, mid, r, f1(m[i]) + "°", col[i]); }
      const rc = Math.max(R(2), 32), CA = sub(A, Cc), CB = sub(B, Cc);
      const mA = wedge(k, c, Cc.x, Cc.y, e, CA, rc, C.cyan, { fa: .3, lw: 2.5 });
      const mB = wedge(k, c, Cc.x, Cc.y, CB, { x: -e.x, y: -e.y }, rc, C.pink, { fa: .3, lw: 2.5 });
      const la = len(CA), lb = len(CB), mC = Math.atan2(CA.y / la + CB.y / lb, CA.x / la + CB.x / lb); // bisector direction of angle C (inside)
      if (m[0] >= 5) tag(k, c, f1(m[0]) + "°", Cc.x + Math.cos(mA) * (rc + 24), Cc.y + Math.sin(mA) * (rc + 16), C.cyan);
      if (m[1] >= 5) tag(k, c, f1(m[1]) + "°", Cc.x + Math.cos(mB) * (rc + 24), Cc.y + Math.sin(mB) * (rc + 16), C.pink);
      tag(k, c, f1(m[2]) + "°", Cc.x + Math.cos(mC) * (rc + 26), Cc.y + Math.sin(mC) * (rc + 18), C.violet);
      // 180° bar
      const bx = 26, bw = w - 52, by = h - 46; let x = bx;
      [[m[0], C.cyan, "∠A"], [m[2], C.violet, "∠C"], [m[1], C.pink, "∠B"]].forEach(([v, cl, nm]) => { const ww = bw * v / 180; d.rr(x, by, Math.max(0, ww - 2), 12, 3, k.alpha(cl, .7)); if (ww > 34) d.text(nm, x + ww / 2, by - 6, { font: `600 11px ${F.sans}`, color: cl, align: "center" }); x += ww; });
      d.text("180°", bx + bw, by - 6, { font: `600 11px ${F.mono}`, color: C.amber, align: "right" });
      const kind = m.some(v => v === 90) ? "right" : m.some(v => v > 90) ? "obtuse" : m.every(v => v === 60) ? "equiangular (acute)" : "acute";
      ro = `<div><h2>Angle sum</h2><div class="ro-big" style="margin-top:8px"><span class="num c2">${f1(m[0])}</span> + <span class="num c3">${f1(m[1])}</span> + <span class="num c4">${f1(m[2])}</span> = <span class="num c1">180</span></div></div>
        <div class="ro-rows"><div class="row"><span class="m c2">m∠<i>A</i></span> = <span class="v c2">${f1(m[0])}°</span></div><div class="row"><span class="m c3">m∠<i>B</i></span> = <span class="v c3">${f1(m[1])}°</span></div><div class="row"><span class="m c4">m∠<i>C</i></span> = <span class="v c4">${f1(m[2])}°</span></div>
        <div class="row"><span class="m">classification</span> <span class="v">${kind}</span><span class="lbl">displayed to 0.1°, rounded so the three total exactly 180.0°</span></div></div>
        <div class="landmark hit"><div class="big">straight angle at <i>C</i> = <span class="c2">∠<i>A</i></span> + <span class="c4">∠<i>C</i></span> + <span class="c3">∠<i>B</i></span></div><div class="note">The dashed line through C is parallel to AB. Its alternate interior angles copy ∠A and ∠B beside ∠C, and together they fill a straight angle, 180°.</div></div>
        <p class="narr">Drag the vertices: the copies at C follow, and the sum never changes.${Math.min(...m) < 5 ? " Very thin triangle: labels for angles under 5° are hidden in the figure." : ""}</p>`;
    } else {
      const vi = names.indexOf(ev), ui = (vi + 1) % 3, wi = (vi + 2) % 3;   // side U→V extended past V
      const V = P[vi], U = P[ui], W = P[wi], uv = sub(V, U), l = len(uv), e = { x: uv.x / l, y: uv.y / l };
      let ext = Math.min(Math.max(70, l * .6), 200);
      const lim = (p0, dv, lo, hi) => dv > 0 ? (hi - p0) / dv : dv < 0 ? (lo - p0) / dv : Infinity;
      ext = Math.max(20, Math.min(ext, lim(V.x, e.x, 14, w - 14), lim(V.y, e.y, 56, h - 14)));
      const X = { x: V.x + e.x * ext, y: V.y + e.y * ext };
      d.line(V.x, V.y, X.x, X.y, C.amber, 2.2, [6, 5]);
      d.line(A.x, A.y, B.x, B.y, C.text, 2.2); d.line(B.x, B.y, Cc.x, Cc.y, C.text, 2.2); d.line(Cc.x, Cc.y, A.x, A.y, C.text, 2.2);
      [ui, wi].forEach(i => { const r = R(i), mid = wedge(k, c, P[i].x, P[i].y, sub(P[(i + 1) % 3], P[i]), sub(P[(i + 2) % 3], P[i]), r, col[i], { fa: .3, lw: 2.5, square: true }); if (m[i] >= 5) labelAng(i, mid, r, f1(m[i]) + "°", col[i]); });
      const rv = R(vi); wedge(k, c, V.x, V.y, sub(U, V), sub(W, V), rv * .8, k.alpha(C.muted, .9), { fa: .12, lw: 1.5, square: true });
      const re = Math.max(rv + 8, 30), split = sub(W, U), sl = len(split), sp = { x: split.x / sl, y: split.y / sl };
      d.line(V.x, V.y, V.x + sp.x * re * 1.9, V.y + sp.y * re * 1.9, k.alpha(C.text, .45), 1.4, [3, 4]);
      wedge(k, c, V.x, V.y, e, sp, re - 6, C[["cyan", "pink", "violet"][ui]], { fa: .22, lw: 2 });
      wedge(k, c, V.x, V.y, sp, sub(W, V), re - 6, C[["cyan", "pink", "violet"][wi]], { fa: .22, lw: 2 });
      const me = wedge(k, c, V.x, V.y, e, sub(W, V), re + 6, C.amber, { fill: false, lw: 3 });
      const extM = 180 - m[vi];
      tag(k, c, `ext ${f1(extM)}°`, V.x + Math.cos(me) * (re + 34), V.y + Math.sin(me) * (re + 20), C.amber, { border: true });
      tag(k, c, "X", X.x + e.x * 10, X.y + e.y * 10, C.amber, { font: `italic 15px ${F.math}` });
      const nm = i => names[i], cc = i => ["c2", "c3", "c4"][i];
      ro = `<div><h2>Exterior angle at ${ev}</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${f1(extM)}</span> = <span class="num ${cc(ui)}">${f1(m[ui])}</span> + <span class="num ${cc(wi)}">${f1(m[wi])}</span></div></div>
        <div class="ro-rows"><div class="row"><span class="m c1">m∠${nm(wi)}${ev}<i>X</i></span> = <span class="v c1">${f1(extM)}°</span><span class="lbl">exterior angle: side ${nm(ui)}${ev} extended past ${ev} to X</span></div>
        <div class="row"><span class="m">m∠${ev}</span> = <span class="v">${f1(m[vi])}°</span><span class="lbl">adjacent interior angle (grey); it forms a linear pair with the exterior angle</span></div>
        <div class="row"><span class="m"><span class="${cc(ui)}">m∠${nm(ui)}</span> + <span class="${cc(wi)}">m∠${nm(wi)}</span></span> = <span class="v">${f1(m[ui] + m[wi])}°</span><span class="lbl">the two remote interior angles</span></div></div>
        <div class="landmark hit"><div class="big">Exterior Angle Theorem</div><div class="note">The dotted ray from ${ev} is parallel to ${nm(ui)}${nm(wi)}. It splits the exterior angle into a corresponding-angle copy of ∠${nm(ui)} and an alternate-interior copy of ∠${nm(wi)}.</div></div>
        <p class="narr">The exterior angle is larger than either remote interior angle (Exterior Angle Inequality).</p>`;
    }
    P.forEach((p, i) => { d.circle(p.x, p.y, 8, col[i], C.ink, 2); });
    const cen = { x: (A.x + B.x + Cc.x) / 3, y: (A.y + B.y + Cc.y) / 3 };
    P.forEach((p, i) => { const v = sub(p, cen), l = len(v) || 1; d.text(names[i], p.x + v.x / l * 20, p.y + v.y / l * 20 + 6, { font: `italic 19px ${F.math}`, color: col[i], align: "center" }); });
    k.setRO(ro);
  });
};
})();
