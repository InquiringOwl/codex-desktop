/* ============ Labs: Geometry A (foundations: points, segments, angles, angle pairs, constructions) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const neg = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const R2D = 180 / Math.PI, D2R = Math.PI / 180;
const norm360 = a => ((a % 360) + 360) % 360;
const norm180 = a => { let x = norm360(a); if (x > 180) x -= 360; return x; };   // (−180, 180]
// n = a²·b with b squarefree
function simpRad(n){ let a = 1, b = n; for (let f = 2; f * f <= b; f++) while (b % (f * f) === 0) { b /= f * f; a *= f; } return [a, b]; }
function radH(n){ if (n === 0) return "0"; const [a, b] = simpRad(n); if (b === 1) return String(a); return (a === 1 ? "" : a) + "√" + b; }
const f1 = (k, v) => k.fmt(v, 1), f2 = (k, v) => k.fmt(v, 2);
const f1s = (k, v) => { const s = k.fmt(v, 1); return s.includes(".") ? s : s + ".0"; };

/* shared drawing and dragging helpers */
function tools(k, c){
  const g = c.g, { C, F } = k;
  const T = {
    lab(s, x, y, color, font, align = "center", base = "middle"){ g.save(); g.font = font || `600 14px ${F.sans}`; g.textAlign = align; g.textBaseline = base;
      { const wd = g.measureText(s).width, x0 = align === "left" ? x : align === "right" ? x - wd : x - wd / 2, sh = Math.max(0, 4 - x0) - Math.max(0, x0 + wd - (c.w - 4)); x += sh; y = clamp(y, 10, c.h - 10); } g.lineJoin = "round"; g.lineWidth = 4; g.strokeStyle = C.ink; g.strokeText(s, x, y); g.fillStyle = color; g.fillText(s, x, y); g.restore(); },
    arc(x, y, r, a0, a1, color, w = 2, dash){ if (r <= 0) return; g.save(); g.strokeStyle = color; g.lineWidth = w; if (dash) g.setLineDash(dash); g.beginPath(); g.arc(x, y, r, a0, a1, a1 < a0); g.stroke(); g.restore(); },
    wedge(x, y, r, a0, a1, fill){ if (r <= 0) return; g.beginPath(); g.moveTo(x, y); g.arc(x, y, r, a0, a1, a1 < a0); g.closePath(); g.fillStyle = fill; g.fill(); },
    seg(p, q, color, w = 2, dash){ c.d.line(p.x, p.y, q.x, q.y, color, w, dash); },
    // infinite-looking line through p, q
    lineThru(p, q, color, w = 2, dash, ext = 4000){ const dx = q.x - p.x, dy = q.y - p.y, L0 = Math.hypot(dx, dy) || 1; c.d.line(p.x - dx / L0 * ext, p.y - dy / L0 * ext, q.x + dx / L0 * ext, q.y + dy / L0 * ext, color, w, dash); },
    ticks(p, q, n, color){ const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2, L0 = Math.hypot(q.x - p.x, q.y - p.y) || 1, ux = (q.x - p.x) / L0, uy = (q.y - p.y) / L0;
      for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 5, x = mx + ux * o, y = my + uy * o; c.d.line(x - uy * 7, y + ux * 7, x + uy * 7, y - ux * 7, color, 2); } },
    right(v, u1, u2, s, color){ g.save(); g.strokeStyle = color; g.lineWidth = 1.6; g.beginPath(); g.moveTo(v.x + u1.x * s, v.y + u1.y * s); g.lineTo(v.x + u1.x * s + u2.x * s, v.y + u1.y * s + u2.y * s); g.lineTo(v.x + u2.x * s, v.y + u2.y * s); g.stroke(); g.restore(); },
    dot(p, color, r = 6){ c.d.circle(p.x, p.y, r + 2, C.ink); c.d.circle(p.x, p.y, r, color); },
    handle(p, color, r = 7){ c.d.circle(p.x, p.y, r + 6, k.alpha(color, .16)); c.d.circle(p.x, p.y, r + 2, C.ink); c.d.circle(p.x, p.y, r, color); }
  };
  return T;
}
// pick(p) → id or null; move(id, p)
function draggable(c, pick, move, end){
  let cur = null;
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e); const id = pick(p); if (id == null) return; cur = id; try { c.cv.setPointerCapture(e.pointerId); } catch (_) {} c.cv.style.cursor = "grabbing"; move(cur, p); e.preventDefault(); });
  c.cv.addEventListener("pointermove", e => { const p = c.xy(e); if (cur != null) move(cur, p); else c.cv.style.cursor = pick(p) != null ? "grab" : "default"; });
  const up = () => { if (cur != null && end) end(cur); cur = null; c.cv.style.cursor = "default"; };
  c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  return () => cur;
}
function nearest(p, list, R = 22){ let best = null, bd = R; for (const [id, x, y] of list) { const dd = Math.hypot(p.x - x, p.y - y); if (dd < bd) { bd = dd; best = id; } } return best; }
const show = (el, on) => { const box = el.closest ? (el.closest(".ctl") || el) : el; box.style.display = on ? "" : "none"; };

/* =============== g-basics: points, lines and planes in perspective =============== */
L["g-basics"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = tools(k, c);
  let mode = "pts";
  const st = { A: { u: -0.6, v: -0.45 }, B: { u: 0.35, v: 0.05 }, C: { u: -0.15, v: 0.6 }, D: { u: 0.62, v: -0.2, z: 0.75 }, v0: 0.05, th: 55, par: false };
  k.modes([["pts", "Points & lines"], ["planes", "Two planes"]], mode, m => { mode = m; sync(); });
  const bC = k.button("Put C on line AB", () => { snapC(true); }, "btn ghost");
  const bD = k.button("Drop D into plane P", () => { st.D.z = 0; }, "btn ghost");
  const sl = k.slider("Tilt of plane <i>Q</i>", 0, 180, 1, st.th, v => st.th = v, v => v + "°");
  const ck = k.check("Parallel planes", false, v => st.par = v);
  k.hint("Drag the amber points");
  const hintEl = k.stage.querySelector(".hintc");
  function sync(){ if (hintEl) hintEl.textContent = mode === "pts" ? "Drag the amber points" : "Drag line ℓ"; show(bC, mode === "pts"); show(bD, mode === "pts"); show(sl.el, mode === "planes"); show(ck, mode === "planes"); }
  sync();
  let G = { cx: 0, cy: 0, s: 1 };
  const P3 = (u, v, z = 0) => ({ x: G.cx + G.s * (u + 0.5 * v), y: G.cy - G.s * (0.4 * v + 0.85 * z) });
  const unproj = (x, y) => { const v = (G.cy - y) / (G.s * 0.4); return { u: (x - G.cx) / G.s - 0.5 * v, v }; };
  const sub = (a, b) => ({ u: a.u - b.u, v: a.v - b.v });
  const crs = (a, b) => a.u * b.v - a.v * b.u;
  function snapC(force){
    const ab = sub(st.B, st.A), L2 = ab.u * ab.u + ab.v * ab.v; if (L2 < 1e-6) return;
    const ac = sub(st.C, st.A), t = (ac.u * ab.u + ac.v * ab.v) / L2, dist = Math.abs(crs(ab, ac)) / Math.sqrt(L2);
    if (force || dist < 0.045) { let tt = t; let nu = st.A.u + ab.u * tt, nv = st.A.v + ab.v * tt;
      if (Math.abs(nu) > 1 || Math.abs(nv) > 1) { tt = 0.5; nu = st.A.u + ab.u * tt; nv = st.A.v + ab.v * tt; }   // midpoint is always inside
      st.C.u = nu; st.C.v = nv; }
  }
  draggable(c, p => {
    if (mode === "pts") return nearest(p, ["A", "B", "C"].map(id => { const q = P3(st[id].u, st[id].v); return [id, q.x, q.y]; }).concat([["D", P3(st.D.u, st.D.v, st.D.z).x, P3(st.D.u, st.D.v, st.D.z).y]]), 24);
    if (st.par) return null;
    const a = P3(-1, st.v0), b = P3(1, st.v0); const t = clamp(((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / ((b.x - a.x) ** 2 + (b.y - a.y) ** 2), 0, 1);
    return Math.hypot(p.x - (a.x + (b.x - a.x) * t), p.y - (a.y + (b.y - a.y) * t)) < 18 ? "line" : null;
  }, (id, p) => {
    if (id === "line") { st.v0 = clamp(unproj(p.x, p.y).v, -0.7, 0.7); return; }
    if (id === "D") { st.D.z = clamp(((G.cy - p.y) / G.s - 0.4 * st.D.v) / 0.85, -0.55, 1); if (Math.abs(st.D.z) < 0.05) st.D.z = 0; st.D.u = clamp((p.x - G.cx) / G.s - 0.5 * st.D.v, -1, 1); return; }
    const q = unproj(p.x, p.y); st[id].u = clamp(q.u, -1, 1); st[id].v = clamp(q.v, -1, 1); snapC(false);
  });
  const poly = (pts, fill, stroke, w = 1.5, dash) => { const g = c.g; g.save(); g.beginPath(); pts.forEach((q, i) => i ? g.lineTo(q.x, q.y) : g.moveTo(q.x, q.y)); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = w; if (dash) g.setLineDash(dash); g.stroke(); } g.restore(); };
  // clip a line A + t(B − A) in (u, v) to the square |u|, |v| ≤ m
  function clipLine(A, B, m){ const du = B.u - A.u, dv = B.v - A.v; let t0 = -1e9, t1 = 1e9;
    for (const [p, q] of [[-du, A.u + m], [du, m - A.u], [-dv, A.v + m], [dv, m - A.v]]) { if (Math.abs(p) < 1e-12) { if (q < 0) return null; continue; } const r = q / p; if (p < 0) t0 = Math.max(t0, r); else t1 = Math.min(t1, r); }
    return t0 <= t1 ? [t0, t1] : null; }
  k.loop(() => {
    c.begin();
    const top = 50, H = c.h - top - 16; G.s = Math.min((c.w - 40) / 3, H / 2.0); G.cx = c.w / 2; G.cy = top + 1.15 * G.s + (H - 2.0 * G.s) / 2;
    const corners = [P3(-1, -1), P3(1, -1), P3(1, 1), P3(-1, 1)];
    const lblF = `600 15px ${F.sans}`, ital = `italic 600 17px ${F.math}`;
    if (mode === "pts") {
      const A = st.A, B = st.B, Cc = st.C, D = st.D;
      const ab = sub(B, A), Lab = Math.hypot(ab.u, ab.v), coinc = Lab < 0.03;
      const col = !coinc && Math.abs(crs(ab, sub(Cc, A))) / Lab < 1e-6;
      const below = D.z < 0;
      const dP = P3(D.u, D.v, D.z), foot = P3(D.u, D.v, 0);
      if (below) { T.seg(foot, dP, k.alpha(C.muted, .7), 1.5, [4, 4]); T.dot(dP, k.alpha(C.amber, .8), 6); }
      poly(corners, k.alpha(C.violet, .13), C.violet, 1.5);
      T.lab("P", corners[1].x - 14, corners[1].y - 12, C.violet, ital);
      if (!col && !coinc) poly([P3(A.u, A.v), P3(B.u, B.v), P3(Cc.u, Cc.v)], k.alpha(C.amber, .07), k.alpha(C.amber, .45), 1, [3, 4]);
      if (!coinc) { const tt = clipLine(A, B, 1.08); if (tt) { const e0 = P3(A.u + ab.u * tt[0], A.v + ab.v * tt[0]), e1 = P3(A.u + ab.u * tt[1], A.v + ab.v * tt[1]), mid = { x: (e0.x + e1.x) / 2, y: (e0.y + e1.y) / 2 };
        d.arrow(mid.x, mid.y, e0.x, e0.y, C.cyan, 2.5); d.arrow(mid.x, mid.y, e1.x, e1.y, C.cyan, 2.5); T.lab("line AB", e1.x, e1.y + (e1.y > mid.y ? 16 : -14), C.cyan, `600 12px ${F.sans}`); } }
      if (!below) { T.seg(foot, dP, k.alpha(C.muted, .8), 1.5, [4, 4]); d.circle(foot.x, foot.y, 3.5, null, C.muted, 1.5); }
      [["A", A], ["B", B], ["C", Cc]].forEach(([n, q]) => { const s = P3(q.u, q.v); T.handle(s, C.amber, 6); T.lab(n, s.x + 13, s.y - 13, C.amber, ital); });
      if (!below) T.handle(dP, C.amber, 6);
      T.lab("D", dP.x + 13, dP.y - 13, C.amber, ital);
      if (D.z === 0) T.lab("D in P", foot.x, foot.y + 20, C.muted, `12px ${F.sans}`);
      const dIn = D.z === 0;
      const r1 = coinc ? "A and B are the same point" : "exactly one line";
      const cop = coinc ? "—" : col || dIn ? "coplanar" : "noncoplanar";
      let lm;
      if (coinc) lm = [`A = B: no unique line`, "Infinitely many lines pass through a single point. Drag B away from A."];
      else if (col) lm = [`collinear ⟹ infinitely many planes`, `Every plane that contains line AB contains C, so "plane ABC" names no single plane. Add D off the line and the four points are coplanar after all: a line and a point not on it determine exactly one plane.`];
      else if (dIn) lm = [`A, B, C, D coplanar`, "Three noncollinear points fix plane P, and D lies in it. Lift D to leave the plane."];
      else lm = [`A, B, C, D noncoplanar`, `Three noncollinear points determine exactly one plane, P. D is ${D.z > 0 ? "above" : "below"} it, so no plane holds all four; they are the corners of a tetrahedron.`];
      k.setRO(`<div><h2>Through A and B</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${r1}</span></div></div>
        <div class="ro-rows">
          <div class="row">${M("<i>A</i>, <i>B</i>, <i>C</i>")} <span class="v">${coinc ? "—" : col ? "collinear" : "noncollinear"}</span><span class="lbl">collinear means one line contains all of them</span></div>
          <div class="row">${M("planes through <i>A</i>, <i>B</i>, <i>C</i>")} <span class="v c4">${coinc ? "—" : col ? "infinitely many" : "exactly one (plane P)"}</span><span class="lbl">three noncollinear points determine exactly one plane</span></div>
          <div class="row">${M("<i>D</i>")} <span class="v">${dIn ? "in plane P" : (D.z > 0 ? "above" : "below") + " plane P"}</span><span class="lbl">drag D up or down; the dashed line drops to the plane</span></div>
          <div class="row">${M("<i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>")} <span class="v">${cop}</span><span class="lbl">${col ? "a line and a point off it always lie in one plane" : "coplanar means one plane contains all four"}</span></div></div>
        <div class="landmark${coinc || col || dIn ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
        <p class="narr">Line C up with A and B, or drop D into the plane.</p>`);
    } else {
      const th = st.th * D2R, v0 = st.v0, same = !st.par && (st.th === 0 || st.th === 180);
      let Qlow = null, Qhigh = null, Qpar = null;
      if (st.par) Qpar = [P3(-1, -1, 0.62), P3(1, -1, 0.62), P3(1, 1, 0.62), P3(-1, 1, 0.62)];
      else { const ct = Math.cos(th) * 0.85, s0 = Math.sin(th) * 0.85;
        Qlow = [P3(-1, v0, 0), P3(1, v0, 0), P3(1, v0 - ct, -s0), P3(-1, v0 - ct, -s0)];
        Qhigh = [P3(-1, v0, 0), P3(1, v0, 0), P3(1, v0 + ct, s0), P3(-1, v0 + ct, s0)]; }
      if (Qlow && !same) poly(Qlow, k.alpha(C.violet, .08), k.alpha(C.violet, .5), 1.2, [5, 4]);
      poly(corners, k.alpha(C.violet, .14), C.violet, 1.5);
      T.lab("P", corners[1].x - 14, corners[1].y - 12, C.violet, ital);
      if (Qhigh && !same) { poly(Qhigh, k.alpha(C.violet, .2), C.violet, 1.5); const q = Qhigh[2]; T.lab("Q", q.x + 12, q.y, C.violet, ital, "left"); }
      if (same) { poly(Qhigh, null, C.violet, 2, [7, 5]); }
      if (Qpar) { poly(Qpar, k.alpha(C.violet, .18), C.violet, 1.5); T.lab("Q", Qpar[1].x + 12, Qpar[1].y, C.violet, ital, "left"); }
      if (!st.par && !same) {
        const e0 = P3(-1.12, v0), e1 = P3(1.12, v0), mid = P3(0, v0);
        d.arrow(mid.x, mid.y, e0.x, e0.y, C.pink, 3); d.arrow(mid.x, mid.y, e1.x, e1.y, C.pink, 3);
        const X = P3(-0.5, v0), Y = P3(0.5, v0); T.dot(X, C.amber, 5); T.dot(Y, C.amber, 5);
        T.lab("X", X.x - 4, X.y + 18, C.amber, ital); T.lab("Y", Y.x - 4, Y.y + 18, C.amber, ital); T.lab("ℓ", e1.x + 4, e1.y - 14, C.pink, ital, "left");
      }
      let big, note, hit = true;
      if (st.par) { big = `P ∩ Q = ∅`; note = "Parallel planes never meet. The postulate only says what happens if two planes intersect."; }
      else if (same) { big = `P and Q coincide`; note = `At a tilt of ${st.th}° plane Q lies flat on P: they are the same plane, so they share every point, not just a line.`; }
      else { hit = st.th === 90; big = `P ∩ Q = line ℓ`; note = `Q meets P at ${st.th === 90 ? "a right angle (perpendicular planes)" : st.th + "°"}. Two shared points X and Y fix the line through them, and every shared point lies on it. Drag ℓ to move it.`; }
      k.setRO(`<div><h2>Intersection of two planes</h2><div class="ro-big" style="margin-top:8px"><span class="c3">${st.par ? "empty" : same ? "the whole plane" : "a line"}</span></div></div>
        <div class="ro-rows">
          <div class="row">${M("tilt of <i>Q</i>")} <span class="v c4">${st.par ? "parallel" : st.th + "°"}</span><span class="lbl">angle between the two planes along their common line</span></div>
          <div class="row">${M("shared points")} <span class="v">${st.par ? "none" : same ? "all" : "X, Y and every point of ℓ"}</span><span class="lbl">if two planes intersect, their intersection is a line (postulate)</span></div></div>
        <div class="landmark${hit ? " hit" : ""}"><div class="big">${M(big)}</div><div class="note">${note}</div></div>
        <p class="narr">Tilt Q to 0°, or make the planes parallel.</p>`);
    }
  });
};

/* =============== g-segments: distance formula and midpoint on a grid =============== */
L["g-segments"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = tools(k, c);
  let A = { x: -4, y: 3 }, B = { x: 2, y: -5 }, t = 0.3, lastP = null;
  k.button("3-4-5 triangle", () => { A = { x: -2, y: -3 }; B = { x: 1, y: 1 }; }, "btn ghost");
  k.button("Random points", () => { const r = () => Math.floor(Math.random() * 17) - 8; A = { x: r(), y: r() }; do { B = { x: r(), y: r() }; } while (B.x === A.x && B.y === A.y); }, "btn ghost");
  k.button("P to midpoint", () => { t = 0.5; }, "btn-s");
  k.hint("Drag A, B, or P along the segment");
  draggable(c, p => { if (!lastP) return null; const Pp = { x: A.x + (B.x - A.x) * t, y: A.y + (B.y - A.y) * t };
      const hit = nearest(p, [["A", lastP.X(A.x), lastP.Y(A.y)], ["B", lastP.X(B.x), lastP.Y(B.y)]], 22); if (hit) return hit;
      return (A.x !== B.x || A.y !== B.y) && Math.hypot(p.x - lastP.X(Pp.x), p.y - lastP.Y(Pp.y)) < 20 ? "P" : null; },
    (id, p) => { const v = lastP.inv(p.x, p.y);
      if (id === "P") { const dx = B.x - A.x, dy = B.y - A.y, L2 = dx * dx + dy * dy; if (!L2) return; t = clamp(((v.x - A.x) * dx + (v.y - A.y) * dy) / L2, 0, 1); if (Math.abs(t - 0.5) < 0.02) t = 0.5; return; }
      const q = id === "A" ? A : B; q.x = clamp(Math.round(v.x), -9, 9); q.y = clamp(Math.round(v.y), -9, 9); });
  k.loop(() => {
    c.begin();
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 30, r: 14, t: 14, b: 26 }, xlabel: "x", ylabel: "y" }); lastP = P;
    P.grid(1); P.axes();
    const dx = B.x - A.x, dy = B.y - A.y, n = dx * dx + dy * dy, dist = Math.sqrt(n), zero = n === 0;
    const sx = v => P.X(v), sy = v => P.Y(v);
    const K = { x: B.x, y: A.y };
    if (!zero) {
      if (dx && dy) { P.line(A.x, A.y, K.x, K.y, C.violet, 2, [6, 4]); P.line(K.x, K.y, B.x, B.y, C.violet, 2, [6, 4]);
        const ux = { x: Math.sign(A.x - K.x), y: 0 }, uy = { x: 0, y: -Math.sign(B.y - K.y) }; T.right({ x: sx(K.x), y: sy(K.y) }, ux, uy, 10, C.violet); }
      if (dx) T.lab(`Δx = ${neg(dx)}`, sx((A.x + K.x) / 2), sy(K.y) + (dy > 0 ? 15 : -14), C.violet, `600 12px ${F.mono}`);
      if (dy) T.lab(`Δy = ${neg(dy)}`, sx(K.x) + (dx >= 0 ? 8 : -8), sy((K.y + B.y) / 2), C.violet, `600 12px ${F.mono}`, dx >= 0 ? "left" : "right");
      P.line(A.x, A.y, B.x, B.y, C.amber, 3.5);
      const Mx = (A.x + B.x) / 2, My = (A.y + B.y) / 2;
      T.ticks({ x: sx(A.x), y: sy(A.y) }, { x: sx(Mx), y: sy(My) }, 1, C.green); T.ticks({ x: sx(Mx), y: sy(My) }, { x: sx(B.x), y: sy(B.y) }, 1, C.green);
      T.dot({ x: sx(Mx), y: sy(My) }, C.green, 6);
      let nx = dy / dist, ny = dx / dist;   // screen-space normal to the segment, pointed away from the legs
      if (nx * (sx(K.x) - sx(Mx)) + ny * (sy(K.y) - sy(My)) > 0) { nx = -nx; ny = -ny; }
      T.lab(`M(${k.fmt(Mx, 1)}, ${k.fmt(My, 1)})`, sx(Mx) + nx * 14, sy(My) + ny * 16, C.green, `600 12px ${F.mono}`, nx < 0 ? "right" : "left");
      if (t !== 0.5) { const Px = A.x + dx * t, Py = A.y + dy * t; T.handle({ x: sx(Px), y: sy(Py) }, C.text, 5); T.lab("P", sx(Px) - nx * 16, sy(Py) - ny * 16, C.text, `italic 600 15px ${F.math}`); }
    }
    const lab = (p, col, other, nm) => { T.handle({ x: sx(p.x), y: sy(p.y) }, col, 7); const right = p.x >= other.x; T.lab(`${nm}(${neg(p.x)}, ${neg(p.y)})`, sx(p.x) + (right ? 13 : -13), sy(p.y) + (p.y >= other.y ? -14 : 16), col, `600 13px ${F.mono}`, right ? "left" : "right"); };
    lab(A, C.cyan, B, "A"); lab(B, C.pink, A, "B");
    const ap = dist * t, pb = dist * (1 - t);
    const exact = radH(n), isInt = Number.isInteger(dist);
    let lm;
    if (zero) lm = [`A = B: a segment of length 0`, "The endpoints coincide, so there is no segment and no midpoint to speak of. Drag B away."];
    else if (!dx || !dy) lm = [`${!dx ? "vertical" : "horizontal"}: <i>AB</i> = ${!dx ? `|${neg(B.y)} − ${A.y < 0 ? "(" + neg(A.y) + ")" : A.y}|` : `|${neg(B.x)} − ${A.x < 0 ? "(" + neg(A.x) + ")" : A.x}|`} = ${dist}`, "One leg is 0, so the Distance Formula reduces to the Ruler Postulate: the absolute value of the difference of coordinates."];
    else if (isInt) lm = [`${Math.abs(dx)}² + ${Math.abs(dy)}² = ${dist}²`, `Whole-number legs and a whole-number hypotenuse: (${Math.abs(dx)}, ${Math.abs(dy)}, ${dist}) is a Pythagorean triple.`];
    else lm = [`<i>AB</i> = √${n} = ${exact} ≈ ${f2(k, dist)}`, simpRad(n)[0] > 1 ? `${n} = ${simpRad(n)[0] ** 2} · ${simpRad(n)[1]}, and √${simpRad(n)[0] ** 2} = ${simpRad(n)[0]} comes out of the radical.` : `${n} has no perfect-square factor other than 1, so √${n} is already simplified.`];
    k.setRO(`<div><h2>Distance AB</h2><div class="ro-big" style="margin-top:8px">${M(`<i>AB</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">Δ<i>x</i><sup>2</sup> + Δ<i>y</i><sup>2</sup></span>`)} = <span class="num c1">${exact}</span>${isInt ? "" : ` <span style="font-size:.6em;color:var(--muted)">≈ ${f2(k, dist)}</span>`}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`<span class="c4">Δ<i>x</i> = ${neg(dx)}</span>, <span class="c4">Δ<i>y</i> = ${neg(dy)}</span>`)}<span class="lbl">legs: x₂ − x₁ and y₂ − y₁ (B minus A)</span></div>
        <div class="row">${M(`${dx < 0 ? "(" + neg(dx) + ")" : dx}<sup>2</sup> + ${dy < 0 ? "(" + neg(dy) + ")" : dy}<sup>2</sup> = ${dx * dx} + ${dy * dy} = ${n}`)}<span class="lbl">Pythagorean Theorem on the right triangle</span></div>
        <div class="row">${M(`<span class="c5"><i>M</i></span> = (<span class="fr"><span>${neg(A.x)} + ${B.x < 0 ? "(" + neg(B.x) + ")" : B.x}</span><span>2</span></span>, <span class="fr"><span>${neg(A.y)} + ${B.y < 0 ? "(" + neg(B.y) + ")" : B.y}</span><span>2</span></span>) = <span class="c5">(${k.fmt((A.x + B.x) / 2, 1)}, ${k.fmt((A.y + B.y) / 2, 1)})</span>`)}<span class="lbl">Midpoint Formula: average the coordinates</span></div>
        ${zero ? "" : `<div class="row">${M(`<i>AP</i> + <i>PB</i> = ${f2(k, ap)} + ${f2(k, pb)} = ${f2(k, ap + pb)}`)}<span class="lbl">Segment Addition Postulate${t === 0.5 ? ": P is at the midpoint, so AP = PB" : ""}</span></div>`}</div>
      <div class="landmark${zero || isInt || !dx || !dy ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
      <p class="narr">Drag A and B to grid points; slide P along the segment.</p>`);
  });
};

/* =============== g-angles: protractor, angle addition, bisector =============== */
L["g-angles"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = tools(k, c); const g = c.g;
  const st = { A: 15, C: 130, B: 60, showB: false, bis: false };
  k.button("Right angle", () => { st.C = norm360(st.A + 90); }, "btn ghost");
  k.button("Straight angle", () => { st.C = norm360(st.A + 180); }, "btn ghost");
  k.check("Interior ray <i>OB</i>", false, v => { st.showB = v; if (v) { const dl = norm180(st.C - st.A); st.B = norm360(Math.round(st.A + dl * 0.4)); } });
  k.check("Bisector", false, v => st.bis = v);
  k.hint("Drag the ray ends");
  let G = { O: { x: 0, y: 0 }, R: 1 };
  const at = (deg, r) => ({ x: G.O.x + r * Math.cos(deg * D2R), y: G.O.y - r * Math.sin(deg * D2R) });
  draggable(c, p => { const ids = ["A", "C"].concat(st.showB ? ["B"] : []); return nearest(p, ids.map(id => { const q = at(st[id], G.R); return [id, q.x, q.y]; }), 26); },
    (id, p) => { st[id] = norm360(Math.round(Math.atan2(G.O.y - p.y, p.x - G.O.x) * R2D)); });
  // canvas angles: math angle θ → screen −θ
  const sarc = (r, a0, a1, color, w, dash) => T.arc(G.O.x, G.O.y, r, -a0 * D2R, -a1 * D2R, color, w, dash);
  const swedge = (r, a0, a1, fill) => T.wedge(G.O.x, G.O.y, r, -a0 * D2R, -a1 * D2R, fill);
  k.loop(() => {
    c.begin();
    G.R = Math.min(c.w * 0.4, (c.h - 70) * 0.5); G.O = { x: c.w / 2, y: 40 + (c.h - 40) / 2 + 4 };
    const R = G.R, dl = norm180(st.C - st.A), m = Math.abs(dl), sg = dl >= 0 ? 1 : -1;
    // protractor half-disc on C's side of ray OA
    const Rp = R * 0.8;
    swedge(Rp, st.A, st.A + 180 * sg, k.alpha(C.text, .045)); sarc(Rp, st.A, st.A + 180 * sg, k.alpha(C.muted, .55), 1.2);
    const a0 = at(st.A, Rp), a1 = at(st.A + 180, Rp); d.line(a0.x, a0.y, a1.x, a1.y, k.alpha(C.muted, .45), 1);
    for (let j = 0; j <= 180; j += 5) { const ang = st.A + sg * j, len = j % 30 === 0 ? 10 : j % 10 === 0 ? 7 : 3.5; const p0 = at(ang, Rp), p1 = at(ang, Rp - len); d.line(p0.x, p0.y, p1.x, p1.y, k.alpha(C.muted, .7), 1); if (j % 30 === 0 && R > 90) { const pl = at(ang, Rp - 20); T.lab(String(j), pl.x, pl.y, C.faint, `10px ${F.mono}`); } }
    // reflex opening (faint)
    if (m > 0 && m < 180) { sarc(R * 0.16, st.A, st.A - sg * (360 - m), k.alpha(C.muted, .6), 1.2, [3, 3]); }
    const rA = R * 0.3;
    const bDl = norm180(st.B - st.A), interior = st.showB && m > 0 && m < 180 ? (Math.sign(bDl) === sg && Math.abs(bDl) > 0 && Math.abs(bDl) < m) : false;
    const mAB = Math.abs(norm180(st.B - st.A)), mBC = Math.abs(norm180(st.C - st.B));
    if (m > 0) {
      if (st.showB && interior) { swedge(rA, st.A, st.B, k.alpha(C.amber, .2)); sarc(rA, st.A, st.B, C.amber, 2.5); swedge(rA * 1.18, st.B, st.C, k.alpha(C.pink, .18)); sarc(rA * 1.18, st.B, st.C, C.pink, 2.5);
        const l1 = at(st.A + sg * mAB / 2, rA + 18), l2 = at(st.B + sg * mBC / 2, rA * 1.18 + 18);
        T.lab(f1s(k, mAB) + "°", l1.x, l1.y, C.amber, `600 13px ${F.mono}`); T.lab(f1s(k, mBC) + "°", l2.x, l2.y, C.pink, `600 13px ${F.mono}`); }
      else { swedge(rA, st.A, st.A + dl, k.alpha(C.amber, .2)); sarc(rA, st.A, st.A + dl, C.amber, 2.5);
        const lp = at(st.A + dl * (st.bis ? 0.25 : 0.5), rA + 20); T.lab(f1s(k, m) + "°", lp.x, lp.y, C.amber, `600 14px ${F.mono}`); }
    }
    if (st.bis && m > 0) { const bd = st.A + dl / 2, e = at(bd, R * 0.95); d.line(G.O.x, G.O.y, e.x, e.y, C.violet, 2.5, [8, 5]); T.lab("bisector", at(bd, R * 0.95 + 16).x, at(bd, R * 0.95 + 16).y, C.violet, `600 12px ${F.sans}`);
      [st.A + dl / 4, st.A + 3 * dl / 4].forEach(a => { const p0 = at(a, rA * 0.72 - 5), p1 = at(a, rA * 0.72 + 5); d.line(p0.x, p0.y, p1.x, p1.y, C.violet, 2); });
      sarc(rA * 0.72, st.A, st.A + dl, k.alpha(C.violet, .8), 1.5); }
    // rays
    const ray = (deg, col, nm) => { const e = at(deg, R); d.arrow(G.O.x, G.O.y, at(deg, R + 14).x, at(deg, R + 14).y, col, 2.5); T.handle(e, col, 7); const lp = at(deg + 9, R - 4); T.lab(nm, lp.x, lp.y, col, `italic 600 17px ${F.math}`); };
    ray(st.A, C.cyan, "A"); ray(st.C, C.cyan, "C");
    if (st.showB) ray(st.B, C.text, "B");
    T.dot(G.O, C.text, 4.5); const ol = at(st.A + dl / 2 + 180, 16); T.lab("O", ol.x, ol.y, C.text, `italic 600 16px ${F.math}`);
    const cls = m === 0 ? "zero" : m < 90 ? "acute" : m === 90 ? "right" : m < 180 ? "obtuse" : "straight";
    const rule = { zero: "the rays coincide", acute: "0° < m < 90°", right: "m = 90°", obtuse: "90° < m < 180°", straight: "m = 180°: opposite rays" }[cls];
    let lm, hit = false;
    if (m === 0) { lm = ["rays coincide: no angle", "Ray OA and ray OC are the same ray, so they do not form an angle. Drag C away."]; hit = true; }
    else if (st.showB && m < 180 && !interior) { lm = [`B is not in the interior of ∠AOC`, `Then the Angle Addition Postulate does not apply: m∠AOB + m∠BOC = ${f1s(k, mAB + mBC)}° ≠ ${f1s(k, m)}°. Drag ray OB between the sides.`]; hit = true; }
    else if (st.showB && m === 180) { lm = [`straight angle: m∠AOB + m∠BOC = ${f1s(k, mAB)}° + ${f1s(k, mBC)}° = 180.0°`, "With opposite rays OA and OC, any ray OB off the line splits the straight angle into two angles that add to 180°."]; hit = true; }
    else if (st.showB && interior) { lm = [`${f1s(k, mAB)}° + ${f1s(k, mBC)}° = ${f1s(k, m)}°`, "B is in the interior, so the parts add to the whole (Angle Addition Postulate)."]; hit = true; }
    else if (st.bis) { lm = m === 180 ? [`90.0° + 90.0° = 180.0°`, "A straight angle has no interior. On this side, the perpendicular ray splits it into two right angles; the ray on the other side would too."] : [`two congruent angles of ${f1s(k, m / 2)}°`, `The bisector splits ∠AOC into two congruent angles, each half of ${f1s(k, m)}°. Its protractor reading is ${f1s(k, m / 2)}°.`]; hit = true; }
    else if (m === 90 || m === 180) { lm = [m === 90 ? "right angle: m∠AOC = 90.0°" : "straight angle: m∠AOC = 180.0°", m === 90 ? "A quarter turn. Its sides are perpendicular, marked in drawings with a small square." : "Opposite rays make a half turn. Both openings are 180°, so there is no reflex side."]; hit = true; }
    else lm = [`m∠AOC = ${f1s(k, m)}° (${cls})`, `The rays also make a reflex opening of ${f1s(k, 360 - m)}° the other way round. An angle's measure is the smaller opening, between 0° and 180°.`];
    k.setRO(`<div><h2>Measure of ∠AOC</h2><div class="ro-big" style="margin-top:8px">${M("m∠<i>AOC</i>")} = <span class="num c1">${f1s(k, m)}°</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`|${m} − 0|`)} <span class="v">${f1s(k, m)}°</span><span class="lbl">Protractor Postulate: ray OA reads 0°, ray OC reads ${m}°</span></div>
        <div class="row">${M("type")} <span class="v c1">${cls === "zero" ? "—" : cls}</span><span class="lbl">${rule}</span></div>
        ${m > 0 && m < 180 ? `<div class="row">${M("reflex opening")} <span class="v">${f1s(k, 360 - m)}°</span><span class="lbl">360° − ${m}°, the dashed arc; not the angle's measure in this course</span></div>` : ""}
        ${st.showB ? `<div class="row">${M(`<span class="c1">m∠<i>AOB</i></span> + <span class="c3">m∠<i>BOC</i></span>`)} <span class="v">${f1s(k, mAB)}° + ${f1s(k, mBC)}° = ${f1s(k, mAB + mBC)}°</span><span class="lbl">${interior || m === 180 ? "B is in the interior (or the angle is straight)" : "B is outside, so the parts do not add to m∠AOC"}</span></div>` : ""}
        ${st.bis && m > 0 ? `<div class="row">${M('<span class="c4">bisector</span> reading')} <span class="v c4">${f1s(k, m / 2)}°</span><span class="lbl">halfway between 0° and ${m}°</span></div>` : ""}</div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
      <p class="narr">${st.showB ? "Drag B outside the angle to break the Angle Addition Postulate." : "Turn on the interior ray or the bisector."}</p>`);
  });
};

/* =============== g-angle-pairs: vertical angles, linear pairs, complements, algebra =============== */
L["g-angle-pairs"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = tools(k, c);
  let mode = "vert", pk = "v";
  const st = { phi: 62, psi: 34 };
  const PRE = {
    v: { kind: "vert", ang: 70, t1: "(3x + 10)°", t2: "(5x − 30)°", x: 20, name: "Vertical angles",
      lines: [["3<i>x</i> + 10 = 5<i>x</i> − 30", "Vertical Angles Theorem: vertical angles are congruent"], ["40 = 2<i>x</i>", "subtract 3x from both sides, then add 30"], ["<i>x</i> = 20", "divide both sides by 2"], ["3(20) + 10 = 70°, &nbsp;5(20) − 30 = 70° ✓", "substitute back: both vertical angles measure 70°"], ["180° − 70° = 110°", "the two side angles form linear pairs with them (Linear Pair Postulate)"]] },
    l: { kind: "lin", ang: 119, t1: "(4x + 15)°", t2: "(2x + 9)°", x: 26, name: "Linear pair",
      lines: [["(4<i>x</i> + 15) + (2<i>x</i> + 9) = 180", "Linear Pair Postulate: a linear pair is supplementary"], ["6<i>x</i> + 24 = 180", "combine like terms"], ["6<i>x</i> = 156", "subtract 24 from both sides"], ["<i>x</i> = 26", "divide both sides by 6"], ["4(26) + 15 = 119°, &nbsp;2(26) + 9 = 61°, &nbsp;119° + 61° = 180° ✓", "substitute back and check the sum"]] },
    c: { kind: "comp", ang: 39, t1: "(x + 12)°", t2: "(2x − 3)°", x: 27, name: "Complementary angles",
      lines: [["(<i>x</i> + 12) + (2<i>x</i> − 3) = 90", "definition of complementary angles"], ["3<i>x</i> + 9 = 90", "combine like terms"], ["3<i>x</i> = 81", "subtract 9 from both sides"], ["<i>x</i> = 27", "divide both sides by 3"], ["27 + 12 = 39°, &nbsp;2(27) − 3 = 51°, &nbsp;39° + 51° = 90° ✓", "substitute back and check the sum"]] }
  };
  k.modes([["vert", "Vertical & linear"], ["comp", "Complementary"], ["alg", "Algebra"]], mode, m => { mode = m; sync(); });
  const bPerp = k.button("Make perpendicular", () => { st.phi = 90; }, "btn ghost");
  const bHalf = k.button("Split in half", () => { st.psi = 45; }, "btn ghost");
  const sel = k.select("Problem", [["v", "Vertical angles"], ["l", "Linear pair"], ["c", "Complementary"]], pk, v => { pk = v; sp.reset(); });
  const sp = k.stepper(() => PRE[pk].lines.length, () => {}, { ms: 1200 });
  const spBtns = [...k.ctl.children].slice(-3);
  k.hint("Drag the white handle");
  const hintEl = k.stage.querySelector(".hintc");
  function sync(){ if (hintEl) hintEl.textContent = mode === "alg" ? "Step through the solution" : "Drag the white handle"; show(bPerp, mode === "vert"); show(bHalf, mode === "comp"); show(sel.el, mode === "alg"); spBtns.forEach(b => b.style.display = mode === "alg" ? "" : "none"); }
  sync();
  let G = { O: { x: 0, y: 0 }, R: 1 };
  const at = (deg, r) => ({ x: G.O.x + r * Math.cos(deg * D2R), y: G.O.y - r * Math.sin(deg * D2R) });
  const sarc = (r, a0, a1, color, w, dash) => T.arc(G.O.x, G.O.y, r, -a0 * D2R, -a1 * D2R, color, w, dash);
  const swedge = (r, a0, a1, fill) => T.wedge(G.O.x, G.O.y, r, -a0 * D2R, -a1 * D2R, fill);
  const angle = (r, a0, a1, col, label, lr, alpha = .22) => { swedge(r, a0, a1, k.alpha(col, alpha)); sarc(r, a0, a1, col, 2.5); if (label) { const am = (a0 + a1) / 2, p = at(am, lr || r + 22), cs = Math.cos(am * D2R); T.lab(label, p.x, p.y, col, `600 13px ${F.mono}`, cs > 0.3 ? "left" : cs < -0.3 ? "right" : "center"); } };
  draggable(c, p => {
    if (mode === "vert") return nearest(p, [["m", at(st.phi, G.R).x, at(st.phi, G.R).y], ["m2", at(st.phi + 180, G.R).x, at(st.phi + 180, G.R).y]], 26);
    if (mode === "comp") return nearest(p, [["s", at(st.psi, G.R).x, at(st.psi, G.R).y]], 26);
    return null;
  }, (id, p) => { const a = Math.round(Math.atan2(G.O.y - p.y, p.x - G.O.x) * R2D);
    if (id === "m" || id === "m2") st.phi = ((a % 180) + 180) % 180;
    else { let s = norm360(a); if (s > 225) s = 0; st.psi = clamp(s, 0, 90); } });
  const fullLine = (deg, col, w = 2) => { const e0 = at(deg, G.R * 1.12), e1 = at(deg + 180, G.R * 1.12); d.arrow(G.O.x, G.O.y, e0.x, e0.y, col, w); d.arrow(G.O.x, G.O.y, e1.x, e1.y, col, w); };
  const rayL = (deg, col, len, w = 2) => { const e = at(deg, len); d.arrow(G.O.x, G.O.y, e.x, e.y, col, w); };
  k.loop(() => {
    c.begin();
    const top = 46;
    if (mode === "vert" || (mode === "alg" && PRE[pk].kind !== "comp")) { G.R = Math.min(c.w * 0.4, (c.h - top - 30) * 0.45); G.O = { x: c.w / 2, y: top + (c.h - top) / 2 }; }
    else { const S = Math.min(c.w - 90, c.h - top - 60); G.R = S; G.O = { x: (c.w - S) / 2 + 10, y: top + (c.h - top + S) / 2 - 6 }; }
    const R = G.R, r = R * 0.3;
    if (mode === "vert") {
      const ph = st.phi, coinc = ph === 0;
      fullLine(0, C.muted, 2);
      if (!coinc) {
        angle(r, 0, ph, C.cyan, `∠1 ${ph}°`); angle(r, ph, 180, C.pink, `∠2 ${180 - ph}°`); angle(r, 180, 180 + ph, C.violet, `∠3 ${ph}°`); angle(r, 180 + ph, 360, C.pink, `∠4 ${180 - ph}°`, null, .1);
        if (ph === 90) { T.right(G.O, { x: 1, y: 0 }, { x: 0, y: -1 }, 12, C.amber); }
        fullLine(ph, C.text, 2.2); T.handle(at(ph, R), C.text, 7); T.handle(at(ph + 180, R), C.text, 7);
        T.lab("m", at(ph + 7, R * 1.12).x, at(ph + 7, R * 1.12).y, C.text, `italic 600 16px ${F.math}`);
      } else { fullLine(0, C.text, 2.2); T.handle(at(0, R), C.text, 7); T.handle(at(180, R), C.text, 7); }
      T.lab("ℓ", at(-6, R * 1.12).x, at(-6, R * 1.12).y, C.muted, `italic 600 16px ${F.math}`);
      T.dot(G.O, C.text, 4);
      let lm;
      if (coinc) lm = ["the lines coincide", "Line m lies on ℓ, so the two lines are the same line and form no angles. Drag a handle off the line."];
      else if (ph === 90) lm = ["ℓ ⊥ m: four right angles", "Perpendicular lines form four congruent adjacent angles. Each linear pair is 90° + 90°."];
      else lm = [`∠1 ≅ ∠3 and ∠2 ≅ ∠4`, `Each of ∠1 and ∠3 forms a linear pair with ∠2, so each is 180° − ${180 - ph}° = ${ph}°. That is the Vertical Angles Theorem.`];
      k.setRO(`<div><h2>Linear pair</h2><div class="ro-big" style="margin-top:8px">${coinc ? `<span style="font-size:.7em;color:var(--muted)">no angles</span>` : M(`<span class="c2">${ph}°</span> + <span class="c3">${180 - ph}°</span> = <span class="c1">180°</span>`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M('<span class="c2">m∠1</span> + <span class="c3">m∠2</span>')} <span class="v c1">${coinc ? "—" : "180°"}</span><span class="lbl">∠1 and ∠2 are a linear pair, so they are supplementary</span></div>
          <div class="row">${M('<span class="c2">m∠1</span> = <span class="c4">m∠3</span>')} <span class="v">${coinc ? "—" : ph + "°"}</span><span class="lbl">vertical angles: their sides are two pairs of opposite rays</span></div>
          <div class="row">${M('<span class="c3">m∠2</span> = m∠4')} <span class="v">${coinc ? "—" : 180 - ph + "°"}</span><span class="lbl">the other pair of vertical angles</span></div>
          <div class="row">${M("sum of all four")} <span class="v">${coinc ? "—" : "360°"}</span><span class="lbl">a full turn around the intersection point</span></div></div>
        <div class="landmark${coinc || ph === 90 ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
        <p class="narr">Rotate line m: ∠1 and ∠3 always match, and every neighbour pair sums to 180°.</p>`);
    } else if (mode === "comp") {
      const ps = st.psi, edge = ps === 0 || ps === 90;
      sarc(R * 0.62, 0, 90, k.alpha(C.amber, .9), 2, [6, 4]); const sl = at(45, R * 0.62 + 16); T.lab("90°", sl.x, sl.y, C.amber, `600 13px ${F.mono}`);
      if (ps > 0) angle(r, 0, ps, C.cyan, `∠1 ${ps}°`, r + 24);
      if (ps < 90) angle(r * 1.15, ps, 90, C.pink, `∠2 ${90 - ps}°`, r * 1.15 + 24);
      rayL(0, C.muted, R * 1.04); rayL(90, C.muted, R * 1.04);
      rayL(ps, C.text, R * 1.0, 2.2); T.handle(at(ps, R), C.text, 7);
      T.dot(G.O, C.text, 4);
      const lm = edge ? ["the ray lies on a side", `One of the two angles would measure 0°, which is not an angle. Drag the ray into the right angle.`] : ps === 45 ? ["45° + 45° = 90°", "The ray bisects the right angle, so the two complementary angles are congruent."] : [`${ps}° + ${90 - ps}° = 90°`, `∠1 and ∠2 are adjacent and complementary. The complement of any angle x° is (90 − x)°.`];
      k.setRO(`<div><h2>Complementary pair</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c2">${ps}°</span> + <span class="c3">${90 - ps}°</span> = <span class="c1">90°</span>`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M('<span class="c2">m∠1</span>')} <span class="v c2">${ps}°</span><span class="lbl">drag the white ray</span></div>
          <div class="row">${M('<span class="c3">m∠2</span> = 90° − m∠1')} <span class="v c3">${90 - ps}°</span><span class="lbl">the complement</span></div>
          <div class="row">${M("supplement of ∠1")} <span class="v">${180 - ps}°</span><span class="lbl">for comparison: supplements add to 180°</span></div></div>
        <div class="landmark${edge || ps === 45 ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
        <p class="narr">Complementary angles need not be adjacent; here they share a side to make the sum visible.</p>`);
    } else {
      const p = PRE[pk], n = sp.k, solved = n >= 4, a = p.ang;
      const L1 = solved ? `${p.t1} = ${a}°` : p.t1, L2 = solved ? `${p.t2} = ${p.kind === "vert" ? a : p.kind === "lin" ? 180 - a : 90 - a}°` : p.t2;
      if (p.kind === "vert") {
        fullLine(0, C.muted, 2); fullLine(a, C.text, 2);
        angle(r, 0, a, C.cyan, L1, r + 30); angle(r, 180, 180 + a, C.violet, L2, r + 30);
        if (n >= 5) { angle(r * 0.8, a, 180, C.pink, `${180 - a}°`, r * 0.8 + 18, .12); angle(r * 0.8, 180 + a, 360, C.pink, `${180 - a}°`, r * 0.8 + 18, .12); }
      } else if (p.kind === "lin") {
        fullLine(0, C.muted, 2); rayL(a, C.text, R * 1.1, 2.2);
        angle(r, 0, a, C.cyan, L1, r + 30); angle(r * 1.15, a, 180, C.pink, L2, r * 1.15 + 30);
      } else {
        rayL(0, C.muted, R * 1.04); rayL(90, C.muted, R * 1.04); rayL(a, C.text, R, 2.2);
        sarc(R * 0.66, 0, 90, k.alpha(C.amber, .9), 2, [6, 4]);
        angle(r, 0, a, C.cyan, L1, r + 40); angle(r * 1.15, a, 90, C.pink, L2, r * 1.15 + 30);
      }
      T.dot(G.O, C.text, 4);
      const rows = p.lines.slice(0, n).map((q, i) => `<div class="row"${i === n - 1 ? ' style="color:var(--amber)"' : ""}>${M(q[0])}<span class="lbl">${q[1]}</span></div>`).join("");
      const done = n >= p.lines.length;
      const sums = { vert: `${a}° and ${a}°`, lin: `${a}° + ${180 - a}° = 180°`, comp: `${a}° + ${90 - a}° = 90°` }[p.kind];
      k.setRO(`<div><h2>${p.name}</h2><div class="ro-big" style="margin-top:8px">${n === 0 ? `<span style="font-size:.7em;color:var(--muted)">Press Step to set up the equation</span>` : M(p.lines[n - 1][0])}</div></div>
        <div class="ro-rows">${rows || `<div class="row">${M(`<span class="c2">∠1</span> = ${p.t1.replace(/x/g, "<i>x</i>")}, &nbsp;<span class="${p.kind === "vert" ? "c4" : "c3"}">∠${p.kind === "vert" ? 3 : 2}</span> = ${p.t2.replace(/x/g, "<i>x</i>")}`)}<span class="lbl">${p.kind === "vert" ? "the angles are vertical angles" : p.kind === "lin" ? "the angles form a linear pair" : "the angles are complementary"}</span></div>`}</div>
        <div class="landmark${done ? " hit" : ""}"><div class="big">${M(done ? `<i>x</i> = ${p.x}: ${sums}` : solved ? `<i>x</i> = ${p.x}` : `<span style="font-size:16px">Relationship, equation, solve, check</span>`)}</div><div class="note">${done ? "Name the relationship, write its equation, solve, and substitute back. A positive measure under 180° for each angle is a further check." : "Each step names the reason, as in a two-column proof."}</div></div>
        <p class="narr">Try another problem from the list.</p>`);
    }
  });
};

/* =============== g-constructions: compass-and-straightedge stepper =============== */
L["g-constructions"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = tools(k, c); const g = c.g;
  const DEF = {
    seg: { name: "Copy a segment", pts: { A: [-3.2, -1.7], B: [-0.3, -2.4], P: [-3.4, 1.5] } },
    ang: { name: "Copy an angle", pts: { A: [-3.7, 1.1], B: [-1.2, 1.1], C: [-2.5, -1.3], P: [0.3, 1.1] } },
    pbis: { name: "Perpendicular bisector", pts: { A: [-2.4, 0.9], B: [2.2, -0.5] } },
    abis: { name: "Angle bisector", pts: { A: [-3.0, 1.8], B: [3.0, 1.8], C: [0.4, -2.3] } },
    perp: { name: "Perpendicular through a point", pts: { L1: [-3.6, 1.6], L2: [3.6, 0.6], P: [-0.2, -1.9] } },
    par: { name: "Parallel through a point", pts: { L1: [-2.2, 1.8], L2: [3.6, 1.8], P: [0.4, -1.3] } },
    eq: { name: "Equilateral triangle (Euclid I.1)", pts: { A: [-1.2, 0.9], B: [1.2, 0.9] } }
  };
  let key = "pbis", pts = null, anim = 1;
  const load = () => { pts = {}; for (const [n, v] of Object.entries(DEF[key].pts)) pts[n] = { x: v[0], y: v[1] }; };
  load();
  k.select("Construction", Object.entries(DEF).map(([v, o]) => [v, o.name]), key, v => { key = v; load(); sp.reset(); });
  let nSteps = 4;
  const sp = k.stepper(() => nSteps, () => { anim = k.reduce ? 1 : 0; }, { ms: 1300 });
  k.button("Reset figure", () => { load(); }, "btn-s");
  k.hint("Drag the violet points");
  let G = { cx: 0, cy: 0, U: 1, xm: 4, ym: 3 };
  const S = q => ({ x: G.cx + q.x * G.U, y: G.cy + q.y * G.U });
  draggable(c, p => nearest(p, Object.entries(pts).map(([n, q]) => { const s = S(q); return [n, s.x, s.y]; }), 22),
    (id, p) => { pts[id].x = clamp((p.x - G.cx) / G.U, -G.xm, G.xm); pts[id].y = clamp((p.y - G.cy) / G.U, -G.ym, G.ym);
      if ((key === "perp" || key === "par") && pts.L1 && pts.P) {   // snap P onto line ℓ when it is very close
        const { L1, L2, P } = pts, ux = L2.x - L1.x, uy = L2.y - L1.y, l2 = ux * ux + uy * uy;
        if (l2 > 1e-6) { const t = ((P.x - L1.x) * ux + (P.y - L1.y) * uy) / l2, fx = L1.x + ux * t, fy = L1.y + uy * t; if (Math.hypot(P.x - fx, P.y - fy) < 0.12) { P.x = fx; P.y = fy; } } } });
  // vector helpers (screen px)
  const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y }), add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y }), mul = (a, s) => ({ x: a.x * s, y: a.y * s });
  const len = a => Math.hypot(a.x, a.y), unit = a => { const l = len(a) || 1; return { x: a.x / l, y: a.y / l }; }, dist = (a, b) => len(sub(a, b));
  const cross = (a, b) => a.x * b.y - a.y * b.x, dot = (a, b) => a.x * b.x + a.y * b.y, ang = a => Math.atan2(a.y, a.x);
  function cc(c1, r1, c2, r2){ const dd = dist(c1, c2); if (dd < 1e-9 || dd > r1 + r2 + 1e-6 || dd < Math.abs(r1 - r2) - 1e-6) return [];
    const a = (r1 * r1 - r2 * r2 + dd * dd) / (2 * dd), h = Math.sqrt(Math.max(0, r1 * r1 - a * a)), u = unit(sub(c2, c1)), m = add(c1, mul(u, a));
    return [{ x: m.x - u.y * h, y: m.y + u.x * h }, { x: m.x + u.y * h, y: m.y - u.x * h }]; }
  const angBetween = (u, v) => Math.acos(clamp(dot(unit(u), unit(v)), -1, 1)) * R2D;
  // drawing primitives with reveal fraction p
  const arcSpan = (ctr, r, a0, a1, p, col = C.cyan, w = 2) => { if (p <= 0) return; const dl = a1 - a0; if (Math.abs(dl * p) >= 2 * Math.PI - 1e-6) { d.circle(ctr.x, ctr.y, r, null, col, w); return; } T.arc(ctr.x, ctr.y, r, a0, a0 + dl * p, col, w); };
  const arcAround = (ctr, r, tgt, p, col) => { const a = ang(sub(tgt, ctr)), s = clamp(30 / Math.max(r, 1), 0.16, 0.7); arcSpan(ctr, r, a - s, a + s, p, col); };
  const shortArc = (ctr, r, a0, a1, extra, p, col) => { let dl = a1 - a0; while (dl > Math.PI) dl -= 2 * Math.PI; while (dl < -Math.PI) dl += 2 * Math.PI; const sgn = dl >= 0 ? 1 : -1; arcSpan(ctr, r, a0 - sgn * extra, a0 + dl + sgn * extra, p); };
  const segP = (a, b, p, col, w = 2.5, dash) => { if (p <= 0) return; const e = add(a, mul(sub(b, a), p)); T.seg(a, e, col, w, dash); };
  const lineP = (a, b, p, col, w = 2.5, ext = 0.6) => { const u = sub(b, a), s0 = add(a, mul(u, -ext)), s1 = add(b, mul(u, ext)); segP(s0, s1, p, col, w); };
  const angArc = (V, u1, u2, r, col, label) => { const a0 = ang(u1), a1 = ang(u2); let dl = a1 - a0; while (dl > Math.PI) dl -= 2 * Math.PI; while (dl < -Math.PI) dl += 2 * Math.PI;
    T.wedge(V.x, V.y, r, a0, a0 + dl, k.alpha(col, .18)); T.arc(V.x, V.y, r, a0, a0 + dl, col, 2.2); if (label) { const am = a0 + dl / 2; T.lab(label, V.x + Math.cos(am) * (r + 18), V.y + Math.sin(am) * (r + 18), col, `600 12px ${F.mono}`); } };
  const ital = `italic 600 16px ${F.math}`;
  const name = (q, s, col, dx = 12, dy = -12) => T.lab(s, q.x + dx, q.y + dy, col, ital);
  const U = v => (v / G.U).toFixed(2);
  function build(){
    const P = {}; for (const [n, q] of Object.entries(pts)) P[n] = S(q);
    const out = { steps: [], given: () => {}, verify: "", just: "", msg: null, names: [] };
    if (key === "seg") {
      const { A, B, P: Pp } = P, r = dist(A, B), Q = { x: Pp.x + r, y: Pp.y };
      out.given = () => { T.seg(A, B, C.violet, 3); d.arrow(Pp.x, Pp.y, c.w - 8, Pp.y, C.violet, 2); };
      out.names = [[A, "A"], [B, "B"], [Pp, "P", 0, -14]];
      if (r < 8) { out.msg = "A and B coincide: there is no segment to copy."; return out; }
      if (Q.x > c.w - 6) out.msg = "Q falls off the stage: drag P to the left or shorten AB.";
      out.steps = [
        { t: "Open the compass from A to B.", f: p => { segP(A, B, p, k.alpha(C.cyan, .6), 1.5, [4, 4]); arcAround(A, r, B, p); } },
        { t: "Keep the opening. Centre P: the arc crosses the ray at Q.", f: p => { arcAround(Pp, r, Q, p); if (p > .9) { T.dot(Q, C.amber, 5); name(Q, "Q", C.amber, 4, -16); } } },
        { t: "Segment PQ is the copy: PQ = AB.", f: p => { segP(Pp, Q, p, C.amber, 4); if (p > .9) { T.ticks(A, B, 2, C.amber); T.ticks(Pp, Q, 2, C.amber); } } }];
      out.verify = `<i>AB</i> = ${U(r)}, &nbsp;<i>PQ</i> = ${U(r)}`; out.just = "Both lengths are the same compass opening, so PQ = AB and the segments are congruent.";
    } else if (key === "ang" || key === "abis") {
      const { A, B, C: Cp } = P; const uB = unit(sub(B, A)), uC = unit(sub(Cp, A)), m = angBetween(uB, uC);
      const r = Math.max(18, 0.5 * Math.min(dist(A, B), dist(A, Cp))), D = add(A, mul(uB, r)), E = add(A, mul(uC, r)), DE = dist(D, E);
      out.given = () => { d.arrow(A.x, A.y, add(A, mul(uB, dist(A, B) + 26)).x, add(A, mul(uB, dist(A, B) + 26)).y, C.violet, 2.5); d.arrow(A.x, A.y, add(A, mul(uC, dist(A, Cp) + 26)).x, add(A, mul(uC, dist(A, Cp) + 26)).y, C.violet, 2.5); };
      out.names = [[A, "A", -12, 14], [B, "B", 4, 18], [Cp, "C"]];
      if (dist(A, B) < 8 || dist(A, Cp) < 8 || m < 3) { out.msg = "The sides overlap or a side has no length: there is no angle. Drag B or C."; return out; }
      const s1 = { t: "Centre A: an arc crosses the sides at D and E.", f: p => { shortArc(A, r, ang(uB), ang(uC), 0.2, p); if (p > .9) { T.dot(D, C.cyan, 4); T.dot(E, C.cyan, 4); name(D, "D", C.cyan, 4, 16); name(E, "E", C.cyan, -14, -4); } } };
      if (key === "ang") {
        const Pp = P.P, F0 = { x: Pp.x + r, y: Pp.y }, sgn = Math.sign(cross(uB, uC)) || 1;
        let Gp = cc(Pp, r, F0, DE).find(q => Math.sign(cross(sub(F0, Pp), sub(q, Pp))) === sgn) || cc(Pp, r, F0, DE)[0] || { x: Pp.x - r, y: Pp.y };
        const uG = unit(sub(Gp, Pp)), rayLen = Math.max(dist(A, B), dist(A, Cp)) * 0.9 + 20, Gend = add(Pp, mul(uG, rayLen));
        out.given = (gv => () => { gv(); d.arrow(Pp.x, Pp.y, c.w - 8, Pp.y, C.violet, 2); })(out.given);
        out.names.push([Pp, "P", -10, 16]);
        if (Pp.x + r > c.w - 6) out.msg = "The copy runs off the stage: drag P to the left.";
        out.steps = [s1,
          { t: "Same opening, centre P: a long arc crosses the ray at F.", f: p => { shortArc(Pp, r, 0, ang(uG), 0.3, p); if (p > .9) { T.dot(F0, C.cyan, 4); name(F0, "F", C.cyan, 4, 16); } } },
          { t: "Set the compass to DE: centre D, through E.", f: p => { segP(D, E, p, k.alpha(C.cyan, .6), 1.5, [4, 4]); arcAround(D, DE, E, p); } },
          { t: "Same opening, centre F: the arc crosses the long arc at G.", f: p => { arcAround(F0, DE, Gp, p); if (p > .9) { T.dot(Gp, C.cyan, 4); name(Gp, "G", C.cyan, 6, -12); } } },
          { t: "Draw ray PG. ∠GPF ≅ ∠BAC.", f: p => { segP(Pp, Gend, p, C.pink, 2.5); if (p > .9) { d.arrow(Pp.x, Pp.y, Gend.x, Gend.y, C.amber, 3); angArc(A, uB, uC, r * 0.55, C.amber); angArc(Pp, { x: 1, y: 0 }, uG, r * 0.55, C.amber); } } }];
        out.verify = `m∠<i>BAC</i> = ${f1s(k, m)}°, &nbsp;m∠<i>GPF</i> = ${f1s(k, angBetween({ x: 1, y: 0 }, uG))}°`;
        out.just = "△ADE ≅ △PFG by SSS: AD = PF and AE = PG (one opening), DE = FG (the second opening). So the angles at A and P are congruent.";
      } else {
        const r2 = DE * 0.78; const cand = cc(D, r2, E, r2); let X = cand.sort((p1, p2) => dist(p2, A) - dist(p1, A))[0];
        if (!X) { out.msg = "The arcs do not meet. Open the angle a little."; return out; }
        if (m > 179.5) X = cand.find(q => cross(uB, sub(q, A)) < 0) || X;
        const uX = unit(sub(X, A)), Xend = add(A, mul(uX, Math.max(dist(A, B), dist(A, Cp)) * 0.95));
        out.steps = [s1,
          { t: "Centre D, then centre E, one opening more than half DE: the arcs cross at X.", f: p => { arcAround(D, r2, X, p); arcAround(E, r2, X, p); if (p > .9) { T.dot(X, C.cyan, 4); name(X, "X", C.cyan, 10, -10); } } },
          { t: "Draw ray AX.", f: p => segP(A, Xend, p, C.pink, 2.5) },
          { t: "Ray AX bisects ∠BAC.", f: p => { if (p <= 0) return; d.arrow(A.x, A.y, Xend.x, Xend.y, C.amber, 3); angArc(A, uB, uX, r * 0.62, C.amber, f1s(k, m / 2) + "°"); angArc(A, uX, uC, r * 0.78, C.amber, f1s(k, m / 2) + "°"); } }];
        out.verify = `m∠<i>BAX</i> = ${f1s(k, angBetween(uB, uX))}° = m∠<i>XAC</i> = ${f1s(k, angBetween(uX, uC))}°`;
        out.just = m > 179.5 ? "A straight angle: the same steps give the perpendicular at A, two right angles." : "AD = AE and DX = EX, so △ADX ≅ △AEX by SSS and the two angles at A are congruent.";
      }
    } else if (key === "pbis") {
      const { A, B } = P, Lab = dist(A, B), r = 0.64 * Lab; const [X, Y] = cc(A, r, B, r);
      out.given = () => T.seg(A, B, C.violet, 3); out.names = [[A, "A", -12, 14], [B, "B", 12, 14]];
      if (Lab < 10) { out.msg = "A and B are too close: there is no segment to bisect."; return out; }
      const Mm = mul(add(A, B), 0.5), u = unit(sub(B, A)), nrm = { x: -u.y, y: u.x };
      out.steps = [
        { t: "Open the compass to more than half of AB. Centre A: arcs above and below.", f: p => { arcAround(A, r, X, p); arcAround(A, r, Y, p); } },
        { t: "Same opening, centre B: the arcs cross the first ones at X and Y.", f: p => { arcAround(B, r, X, p); arcAround(B, r, Y, p); if (p > .9) { T.dot(X, C.cyan, 4); T.dot(Y, C.cyan, 4); name(X, "X", C.cyan); name(Y, "Y", C.cyan); } } },
        { t: "Draw line XY.", f: p => lineP(X, Y, p, C.pink) },
        { t: "Line XY is the perpendicular bisector: AM = MB and it meets AB at 90°.", f: p => { if (p <= 0) return; lineP(X, Y, 1, C.amber, 3); T.right(Mm, u, nrm, 11, C.amber); T.ticks(A, Mm, 1, C.amber); T.ticks(Mm, B, 1, C.amber); T.dot(Mm, C.amber, 5); name(Mm, "M", C.amber, 14, 16); } }];
      out.verify = `<i>AM</i> = ${U(Lab / 2)} = <i>MB</i>, &nbsp;angle 90.0°`;
      out.just = "XA = XB and YA = YB (equal openings), so X and Y lie on the perpendicular bisector of AB (converse of the Perpendicular Bisector Theorem), and two points determine a line.";
    } else if (key === "perp" || key === "par") {
      const { L1, L2, P: Pp } = P; const u = unit(sub(L2, L1)), Ll = dist(L1, L2);
      out.given = () => { if (Ll > 4) T.lineThru(L1, L2, C.violet, 2.5); T.dot(L1, C.violet, 4); T.dot(L2, C.violet, 4); const e = add(L2, mul(u, 18)); T.lab("ℓ", e.x, e.y - 14, C.violet, ital); };
      out.names = [[Pp, "P", 12, -12]];
      if (Ll < 10) { out.msg = "The two violet points that fix line ℓ coincide: drag them apart."; return out; }
      const side = cross(u, sub(Pp, L1)), dd = Math.abs(side) / 1, F0 = add(L1, mul(u, dot(sub(Pp, L1), u)));
      if (key === "perp") {
        const onL = dd < 0.5, r = Math.max(dd * 1.3, 1.2 * G.U), h = Math.sqrt(Math.max(0, r * r - dd * dd)), X = add(F0, mul(u, -h)), Y = add(F0, mul(u, h)), r2 = dist(X, Y) * 0.62;
        const cand = cc(X, r2, Y, r2), inStage = q => q.x > 10 && q.x < c.w - 10 && q.y > 10 && q.y < c.h - 10;
        let Z = onL ? cand[0] : cand.find(q => Math.sign(cross(u, sub(q, L1))) !== Math.sign(side)) || cand[0];
        if (!onL && !inStage(Z)) { const o = cand.find(q => q !== Z); if (o && inStage(o) && dist(o, Pp) > 12) Z = o; }
        out.steps = [
          { t: "Centre P: an arc crosses ℓ at X and Y.", f: p => { shortArc(Pp, r, ang(sub(X, Pp)), ang(sub(Y, Pp)), 0.15, p); if (p > .9) { T.dot(X, C.cyan, 4); T.dot(Y, C.cyan, 4); name(X, "X", C.cyan, -4, 18); name(Y, "Y", C.cyan, 4, 18); } } },
          { t: "Centres X and Y, one larger opening: the arcs cross at Z.", f: p => { arcAround(X, r2, Z, p); arcAround(Y, r2, Z, p); if (p > .9) { T.dot(Z, C.cyan, 4); name(Z, "Z", C.cyan); } } },
          { t: "Draw line PZ.", f: p => lineP(Pp, Z, p, C.pink, 2.5, 0.4) },
          { t: "Line PZ ⊥ ℓ at F.", f: p => { if (p <= 0) return; lineP(Pp, Z, 1, C.amber, 3, 0.4); T.right(F0, u, unit(sub(onL ? Z : Pp, F0)), 11, C.amber); T.dot(F0, C.amber, 5); name(F0, "F", C.amber, -14, 16); } }];
        out.verify = `angle at F = 90.0°, &nbsp;<i>PF</i> = ${U(dd)}`;
        out.just = onL ? "P is on ℓ: the same steps construct the perpendicular to ℓ at P, since PX = PY and ZX = ZY." : "PX = PY and ZX = ZY, so P and Z both lie on the perpendicular bisector of XY, which is perpendicular to ℓ.";
      } else {
        out.names.push([L1, "Q", -6, 18]);
        if (dd < 3) { out.msg = "P lies on ℓ: the only line through P parallel to ℓ would be ℓ itself. Drag P off the line."; return out; }
        const t = unit(sub(Pp, L1)), r = Math.min(0.4 * dist(Pp, L1), 1.4 * G.U), D = add(L1, mul(u, r)), E = add(L1, mul(t, r)), F1 = add(Pp, mul(t, r)), Gp = add(Pp, mul(u, r)), DE = dist(D, E);
        out.steps = [
          { t: "Draw a transversal through P and a point Q on ℓ.", f: p => lineP(L1, Pp, p, C.pink, 2, 0.45) },
          { t: "Centre Q: an arc crosses ℓ at D and the transversal at E.", f: p => { shortArc(L1, r, ang(u), ang(t), 0.2, p); if (p > .9) { T.dot(D, C.cyan, 4); T.dot(E, C.cyan, 4); name(D, "D", C.cyan, 4, 16); name(E, "E", C.cyan, -14, -4); } } },
          { t: "Same opening, centre P: an arc crosses the transversal at F.", f: p => { shortArc(Pp, r, ang(t), ang(u), 0.25, p); if (p > .9) { T.dot(F1, C.cyan, 4); name(F1, "F", C.cyan, -14, -4); } } },
          { t: "Set the compass to DE. Centre F: the arc crosses the last arc at G.", f: p => { segP(D, E, p, k.alpha(C.cyan, .6), 1.5, [4, 4]); arcAround(F1, DE, Gp, p); if (p > .9) { T.dot(Gp, C.cyan, 4); name(Gp, "G", C.cyan, 6, -12); } } },
          { t: "Draw line PG. Corresponding angles are congruent, so PG ∥ ℓ.", f: p => { if (p <= 0) return; T.lineThru(Pp, Gp, C.amber, 3); angArc(L1, u, t, r * 0.55, C.amber); angArc(Pp, u, t, r * 0.55, C.amber); } }];
        out.verify = `corresponding angles ${f1s(k, angBetween(u, t))}° = ${f1s(k, angBetween(u, t))}°, so <i>PG</i> ∥ <i>ℓ</i>`;
        out.just = "The angle at P copies the angle at Q in the corresponding position, so PG ∥ ℓ (Converse of the Corresponding Angles Postulate).";
      }
    } else if (key === "eq") {
      const { A, B } = P, r = dist(A, B); const cand = cc(A, r, B, r); const Cp = cand.find(q => cross(sub(B, A), sub(q, A)) < 0) || cand[0];
      out.given = () => T.seg(A, B, C.violet, 3); out.names = [[A, "A", -12, 14], [B, "B", 12, 14]];
      if (r < 10 || !Cp) { out.msg = "A and B coincide: there is no segment to build on."; return out; }
      out.steps = [
        { t: "Centre A, through B: draw the circle.", f: p => arcSpan(A, r, ang(sub(B, A)), ang(sub(B, A)) - 2 * Math.PI, p) },
        { t: "Centre B, through A: draw the circle.", f: p => arcSpan(B, r, ang(sub(A, B)), ang(sub(A, B)) + 2 * Math.PI, p) },
        { t: "The circles meet at C.", f: p => { if (p > .3) { T.dot(Cp, C.cyan, 5); name(Cp, "C", C.cyan, 0, -16); } } },
        { t: "Draw CA and CB. △ABC is equilateral.", f: p => { segP(Cp, A, p, C.pink, 2.5); segP(Cp, B, p, C.pink, 2.5); if (p > .9) { T.seg(A, B, C.amber, 3.5); T.seg(B, Cp, C.amber, 3.5); T.seg(Cp, A, C.amber, 3.5); [[A, B], [B, Cp], [Cp, A]].forEach(([a, b]) => T.ticks(a, b, 1, C.amber)); } } }];
      out.verify = `<i>AB</i> = <i>BC</i> = <i>CA</i> = ${U(r)}, &nbsp;each angle 60.0°`;
      out.just = "CA = AB (radii of the circle about A) and CB = BA (radii of the circle about B), so all three sides are equal (Euclid I.1).";
    }
    return out;
  }
  k.loop(dt => {
    c.begin();
    G.U = Math.min((c.w - 24) / 8.4, (c.h - 24) / 6.6); G.cx = c.w / 2; G.cy = c.h / 2; G.xm = (c.w / 2 - 14) / G.U; G.ym = (c.h / 2 - 14) / G.U;
    anim = Math.min(1, anim + dt / 0.75);
    const B = build(); nSteps = B.steps.length || 0;
    const kk = Math.min(sp.k, nSteps);
    B.given();
    B.steps.forEach((s, i) => { if (i < kk) s.f(i === kk - 1 ? anim : 1); });
    B.names.forEach(([q, s, dx, dy]) => name(q, s, C.violet, dx ?? 12, dy ?? -12));
    Object.values(pts).forEach(q => T.handle(S(q), C.violet, 6));
    const done = nSteps > 0 && kk === nSteps;
    const list = B.steps.map((s, i) => `<div style="${i < kk ? (i === kk - 1 ? "color:var(--amber)" : "") : "opacity:.45"}">${i + 1}. ${s.t}</div>`).join("");
    k.setRO(`<div><h2>${DEF[key].name}</h2><div class="ro-big" style="margin-top:8px">${B.msg && !nSteps ? `<span style="font-size:.6em;color:var(--red)">degenerate figure</span>` : `step <span class="num c1">${kk}</span> of ${nSteps}`}</div></div>
      <div class="ro-rows" style="font-family:var(--sans);font-size:14.5px">${list}</div>
      <div class="landmark${done || B.msg ? " hit" : ""}"><div class="big">${B.msg ? `<span style="font-size:15px">${B.msg}</span>` : done ? `<span class="m" style="white-space:normal">${B.verify}</span>` : `<span style="font-size:16px">Arcs, then crossings, then lines</span>`}</div><div class="note">${done || B.msg ? B.just : "Press Step or Play. Each new point is a crossing of arcs or lines."}</div></div>
      <p class="narr">Drag the violet points at any step: the construction redraws and still works.</p>`);
  });
};
})();
