/* ============ Labs: Mechanics, part 4 (second law, third law, common forces, friction, centripetal force, inclines & connected objects) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const MI = "−";
const G0 = 9.80;
const R2D = 180 / Math.PI, D2R = Math.PI / 180;
// 3 significant figures, U+2212 minus; HTML (uses <sup> for large/small powers)
function sf(v, n = 3){
  if (!isFinite(v)) return "—";
  if (Math.abs(v) < 1e-9) return "0";
  const a = Math.abs(v); let s;
  if (a >= 1e5 || a < 1e-3) { let e = Math.floor(Math.log10(a)); let c = +(v / 10 ** e).toPrecision(n); if (Math.abs(c) >= 10) { c /= 10; e++; } s = c.toFixed(n - 1) + " × 10<sup>" + e + "</sup>"; }
  else if (a >= 10 ** n) s = Math.round(+v.toPrecision(n)).toLocaleString("en-US");
  else { s = v.toPrecision(n); if (s.includes("e")) s = Math.round(+s).toLocaleString("en-US"); }
  return s.replace("-", MI);
}
const sfc = (v, n = 3) => sf(v, n).replace(/<\/?sup>/g, "");
// labelled vector arrow on a canvas
function vec(k, d, x, y, dx, dy, color, label, o = {}){
  const Lh = Math.hypot(dx, dy);
  if (Lh >= 3) d.arrow(x, y, x + dx, y + dy, color, o.w || 3);
  else d.circle(x, y, 3, color);
  if (!label) return;
  const ux = Lh >= 3 ? dx / Lh : (o.ux ?? 0), uy = Lh >= 3 ? dy / Lh : (o.uy ?? -1);
  const lx = x + dx + ux * (o.gap ?? 10) + (o.ox || 0), ly = y + dy + uy * (o.gap ?? 10) + (o.oy || 0);
  d.text(label, lx, ly, { font: o.font || `italic 600 14px ${k.F.math}`, color, align: o.align || (Math.abs(ux) > 0.5 ? (ux > 0 ? "left" : "right") : "center"), base: "middle" });
}
const tag = (k, d, s, x, y, color, align = "left") => d.text(s, x, y, { font: `600 11px ${k.F.ui}`, color: color || k.C.faint, align, base: "alphabetic" });
const showCtl = (items, on) => items.forEach(it => { const el = it && (it.el || it); const box = el && (el.closest ? el.closest(".ctl") : null) || el; if (box) box.style.display = on ? "" : "none"; });

/* ---------- Newton's second law ---------- */
L["mech-newton-2"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PL = { earth: ["Earth", 9.80], moon: ["Moon", 1.62], mars: ["Mars", 3.71] };
  let Fa = 10, m = 2, pl = "earth", x = 0, v = 0, run = true, wrapped = false;
  k.slider(`<span class="c2"><i>F</i></span> net`, -40, 40, 1, Fa, val => Fa = val, val => sfc(val) + " N");
  k.slider(`<span class="c3"><i>m</i></span>`, 0.5, 20, 0.5, m, val => m = val, val => val.toFixed(1) + " kg");
  k.select("Planet", Object.entries(PL).map(([key, [n, g]]) => [key, `${n} · g = ${g.toFixed(2)}`]), pl, val => pl = val);
  const bRun = k.button("Pause", () => { run = !run; bRun.textContent = run ? "Pause" : "Run"; });
  k.button("Reset", () => { x = 0; v = 0; wrapped = false; }, "btn ghost");
  k.loop(dt => {
    const g = PL[pl][1], a = Fa / m, w = m * g;
    if (run) { v += a * dt; x += v * dt; }
    if (Math.abs(v) > 40) { v = 0; x = 0; wrapped = true; }
    c.begin(); const W = c.w, H = c.h;
    const topH = Math.max(220, Math.min(H * 0.55, 320)), gy = topH - 100;
    // scrolling track
    const ppm = 40, off = ((x * ppm) % 40 + 40) % 40;
    for (let X = -off; X < W + 40; X += 40) d.line(X, gy + 1, X - 9, gy + 10, C.line2, 1);
    d.line(0, gy, W, gy, C.muted, 1.5);
    tag(k, d, "FRICTIONLESS TRACK", 14, gy + 24);
    // cart
    const s3 = Math.sqrt(m / 20), cw = 64 + 70 * s3, ch = 32 + 28 * s3, cx = W / 2, top = gy - 9 - ch, cy = top + ch / 2;
    d.rr(cx - cw / 2, top, cw, ch, 5, k.alpha(C.pink, .16), C.pink, 2);
    [-0.3, 0.3].forEach(f => { const wx = cx + f * cw, wy = gy - 7; d.circle(wx, wy, 7, C.panel2, C.muted, 1.5); const ang = x / 0.175; d.line(wx, wy, wx + 6 * Math.cos(ang), wy + 6 * Math.sin(ang), C.muted, 1.2); });
    d.text(m.toFixed(1) + " kg", cx, cy + 1, { font: `600 13px ${F.mono}`, color: C.pink, align: "center", base: "middle" });
    // forces share one scale
    const sc = 80 / Math.max(Math.abs(Fa), w, 1);
    if (Fa !== 0) { const sx = Fa > 0 ? cx - cw / 2 - 2 : cx + cw / 2 + 2; vec(k, d, sx - Fa * sc, cy, Fa * sc, 0, C.cyan, "", { w: 3.5 }); d.text("F", sx - Fa * sc / 2, cy - 12, { font: `italic 600 15px ${F.math}`, color: C.cyan, align: "center" }); }
    vec(k, d, cx, cy + 6, 0, w * sc, C.violet, "w = mg", { gap: 12 });
    // acceleration
    const al = clamp(a * 8, -W * 0.4, W * 0.4);
    if (a !== 0) vec(k, d, cx, top - 16, al, 0, C.amber, "a", { w: 3 }); else d.text("a = 0", cx, top - 12, { font: `italic 14px ${F.math}`, color: C.amber, align: "center" });
    d.text(`v = ${sfc(v)} m/s`, W - 14, 22 + 0, { font: `14px ${F.math}`, color: C.muted, align: "right" });
    // graphs
    const gap = 16, half = (W - gap) / 2, pt = topH + 26, pb = 30;
    const amax = Math.max(4, 40 / m) * 1.12;
    tag(k, d, "a vs F  (m fixed)", 12, topH + 14, C.faint);
    const P1 = k.plot(c, { xmin: -40, xmax: 40, ymin: -amax, ymax: amax, pad: { l: 42, r: W - half + 6, t: pt, b: pb }, xstep: 20, xlabel: "F", ylabel: "a" });
    P1.grid(); P1.axes(); P1.fn(f => f / m, C.amber, 2.2); P1.point(Fa, a, C.amber, 5.5);
    P1.line(Fa, 0, Fa, a, k.alpha(C.cyan, .7), 1.2, [3, 3]);
    const umax = 2.1, amx2 = Math.max(2, Math.abs(Fa) * umax) * 1.12;
    tag(k, d, "a vs 1/m  (F fixed)", half + gap + 4, topH + 14, C.faint);
    const P2 = k.plot(c, { xmin: 0, xmax: umax, ymin: Fa < 0 ? -amx2 : -amx2 * 0.08, ymax: Fa < 0 ? amx2 * 0.08 : amx2, pad: { l: half + gap + 38, r: 8, t: pt, b: pb }, xstep: 0.5, xlabel: "1/m", ylabel: "a" });
    P2.grid(); P2.axes(); P2.fn(u => Fa * u, C.amber, 2.2); P2.point(1 / m, a, C.amber, 5.5);
    P2.line(1 / m, 0, 1 / m, a, k.alpha(C.pink, .7), 1.2, [3, 3]);
    const zero = Fa === 0;
    k.setRO(`<div><h2>Acceleration</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>a</i></span> = <span class="fr"><span class="c2"><i>F</i></span><span class="c3"><i>m</i></span></span> = <span class="num c1">${sf(a)}</span> m/s²</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c2">Σ<i>F</i><sub>x</sub></span>`)} = <span class="v c2">${sf(Fa)} N</span><span class="lbl">frictionless track: the push is the net force</span></div>
      <div class="row">${M(`<span class="c3"><i>m</i></span>`)} = <span class="v c3">${m.toFixed(1)} kg</span><span class="lbl">inertia, the same on every planet</span></div>
      <div class="row">${M(`<span class="c4"><i>w</i></span> = <i>mg</i>`)} = <span class="v c4">${sf(w)} N</span><span class="lbl">weight on ${PL[pl][0]}, balanced by the normal force</span></div>
      <div class="row">${M("<i>v</i>")} = <span class="v">${sf(v)} m/s</span><span class="lbl">${wrapped ? "reset after passing 40 m/s" : "changes by " + sf(Math.abs(a)) + " m/s each second"}</span></div>
      </div>
      <div class="landmark${zero ? " hit" : ""}">${zero ? `<div class="big">${M(`Σ<b>F</b> = 0 ⇒ <b>a</b> = 0`)}</div><div class="note">No net force: the cart keeps whatever velocity it has (${sf(v)} m/s). That is the first law, the special case of the second.</div>`
        : `<div class="big">${M(`<i>a</i> ∝ <span class="c2"><i>F</i></span>, &nbsp;<i>a</i> ∝ 1/<span class="c3"><i>m</i></span>`)}</div><div class="note">Both graphs are straight lines through the origin: double F and a doubles, double m and a halves. The planet changes w, not a.</div>`}</div>
      <p class="narr">Set F to 0 while the cart moves, then make F negative. Switch planets: only w changes.</p>`);
  });
};

/* ---------- Newton's third law ---------- */
L["mech-newton-3"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "skate", mA = 50, mB = 80, Fp = 120, t = -1, pushB = false;
  const tP = 0.8, SLOW = 0.5;
  k.modes([["skate", "Skaters push apart"], ["blocks", "Pushed blocks"]], mode, v => { mode = v; t = -1; showCtl([bR, bP], v === "skate"); showCtl([chk], v === "blocks"); });
  k.slider(`<i>m</i><sub>A</sub>`, 20, 150, 1, mA, v => { mA = v; t = -1; }, v => v + " kg");
  k.slider(`<i>m</i><sub>B</sub>`, 20, 150, 1, mB, v => { mB = v; t = -1; }, v => v + " kg");
  k.slider(`<i>F</i>`, 20, 400, 10, Fp, v => { Fp = v; t = -1; }, v => v + " N");
  const chk = k.check("push on B's side", pushB, v => pushB = v);
  const bR = k.button("Reset", () => { t = -1; }, "btn ghost");
  const bP = k.button("Push", () => { t = 0; });
  showCtl([chk], false);
  const figure = (x, yF, mass, col, dir, pushing, hxT) => {
    const s = 1.45 * Math.cbrt(mass / 70), hH = 11 * s, body = 46 * s, leg = 38 * s;
    const hip = yF - leg, sh = hip - body, head = sh - hH - 4;
    d.circle(x, head, hH, k.alpha(col, .25), col, 2);
    d.line(x, sh, x, hip, col, 3.2);
    d.line(x, hip, x - 10 * s, yF, col, 3); d.line(x, hip, x + 10 * s, yF, col, 3);
    d.line(x - 16 * s, yF + 1, x + 16 * s, yF + 1, col, 2);
    const hx = pushing ? hxT : x + dir * 22 * s, hy = sh + 12 * s;
    d.line(x, sh + 4, hx, hy, col, 2.6);
    return { hx, hy, sh, head };
  };
  k.loop(dt => {
    if (t >= 0) t += dt * SLOW * (k.reduce ? 4 : 1);
    c.begin(); const W = c.w, H = c.h;
    if (mode === "skate") {
      const aA = Fp / mA, aB = Fp / mB, vA = aA * tP, vB = aB * tP;
      const tt = Math.max(0, t), tp = Math.min(tt, tP);
      let xA = -0.5 * aA * tp * tp - (tt > tP ? vA * (tt - tP) : 0), xB = 0.5 * aB * tp * tp + (tt > tP ? vB * (tt - tP) : 0);
      const ppm = Math.min(70, W / 12), yF = H * 0.64, cx = W / 2;
      const sA = 1.45 * Math.cbrt(mA / 70), sB = 1.45 * Math.cbrt(mB / 70);
      let pA = cx - 52 * sA + xA * ppm, pB = cx + 52 * sB + xB * ppm;
      const out = pA < 40 || pB > W - 40;
      if (out && t > tP) t = Math.max(tP, t - dt * SLOW);   // freeze near the edges
      pA = Math.max(pA, 26); pB = Math.min(pB, W - 26);
      // ice
      d.rect(0, yF + 2, W, H - yF - 2, k.alpha(C.cyan, .05));
      d.line(0, yF + 2, W, yF + 2, C.muted, 1.5);
      tag(k, d, "SMOOTH ICE · NO FRICTION", 14, yF + 22);
      const pushing = t >= 0 && t <= tP, before = t < 0;
      const xc = (pA + pB) / 2, A = figure(pA, yF, mA, C.cyan, 1, before || pushing, xc - 1), B = figure(pB, yF, mB, C.pink, -1, before || pushing, xc + 1);
      d.text("A", pA, A.head - 22 * sA, { font: `600 14px ${F.ui}`, color: C.cyan, align: "center" });
      d.text("B", pB, B.head - 22 * sB, { font: `600 14px ${F.ui}`, color: C.pink, align: "center" });
      if (pushing) {
        const yH = (A.hy + B.hy) / 2, x0 = xc, fl = Math.min(Fp * 0.35 + 12, (pB - pA) / 2 - 8);
        d.arrow(x0, yH - 9, x0 - fl, yH - 9, C.cyan, 3.5); d.arrow(x0, yH + 9, x0 + fl, yH + 9, C.pink, 3.5);
        d.text(`on A`, x0 - 6, yH - 22, { font: `600 12px ${F.ui}`, color: C.cyan, align: "right" });
        d.text(`on B`, x0 + 6, yH + 30, { font: `600 12px ${F.ui}`, color: C.pink, align: "left" });
        const as = 20;
        vec(k, d, pA - 8, yF + 44, -Math.min(aA * as, W * 0.35), 0, C.amber, `a = ${sfc(aA)}`, { font: `italic 13px ${F.math}` });
        vec(k, d, pB + 8, yF + 44, Math.min(aB * as, W * 0.35), 0, C.amber, `a = ${sfc(aB)}`, { font: `italic 13px ${F.math}` });
      } else if (!before) {
        d.text(`v = ${sfc(vA)} m/s ←`, pA, yF + 48, { font: `italic 13px ${F.math}`, color: C.cyan, align: "center" });
        d.text(`→ v = ${sfc(vB)} m/s`, pB, yF + 48, { font: `italic 13px ${F.math}`, color: C.pink, align: "center" });
      }
      d.text(before ? "hands together · press Push" : `t = ${(Math.min(tt, 9.99)).toFixed(2)} s ${pushing ? "· pushing" : "· gliding"}`, W - 14, 64, { font: `13px ${F.mono}`, color: C.faint, align: "right" });
      const eq = mA === mB;
      k.setRO(`<div><h2>Third-law pair</h2><div class="ro-big" style="margin-top:8px"><span class="c2"><i>F</i><sub>A</sub></span> = <span class="c3"><i>F</i><sub>B</sub></span> = <span class="num">${sf(Fp)}</span> N</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c1"><i>a</i><sub>A</sub></span> = <i>F</i>/<i>m</i><sub>A</sub>`)} = <span class="v c1">${sf(aA)} m/s²</span><span class="lbl">force on A over A's own mass</span></div>
        <div class="row">${M(`<span class="c1"><i>a</i><sub>B</sub></span> = <i>F</i>/<i>m</i><sub>B</sub>`)} = <span class="v c1">${sf(aB)} m/s²</span><span class="lbl">same force over B's mass, opposite way</span></div>
        <div class="row">${M("<i>v</i> after 0.800 s")} <span class="v">${sf(vA)} and ${sf(vB)} m/s</span><span class="lbl">v = at for each skater, in opposite directions</span></div>
        <div class="row">${M("<i>m</i><sub>A</sub><i>v</i><sub>A</sub>, <i>m</i><sub>B</sub><i>v</i><sub>B</sub>")} <span class="v">${sf(mA * vA)}, ${sf(mB * vB)} kg·m/s</span><span class="lbl">equal and opposite: total momentum stays zero</span></div>
        </div>
        <div class="landmark${eq ? " hit" : ""}">${eq ? `<div class="big">${M("<i>m</i><sub>A</sub> = <i>m</i><sub>B</sub> ⇒ <i>a</i><sub>A</sub> = <i>a</i><sub>B</sub>")}</div><div class="note">Equal masses give mirror-image motion. Change one mass: the forces stay equal, the accelerations do not.</div>`
          : `<div class="big">${M(`<span class="fr"><span><i>a</i><sub>A</sub></span><span><i>a</i><sub>B</sub></span></span> = <span class="fr"><span><i>m</i><sub>B</sub></span><span><i>m</i><sub>A</sub></span></span> = ${sf(mB / mA)}`)}</div><div class="note">The forces act on different bodies, so they never cancel. Equal forces on unequal masses give unequal accelerations.</div>`}</div>
        <p class="narr">Press Push: the two force arrows always match. Then make one skater much heavier.</p>`);
    } else {
      const a = Fp / (mA + mB), P = pushB ? mA * a : mB * a;
      const gy = H * 0.64, sA = Math.cbrt(mA / 70), sB = Math.cbrt(mB / 70);
      const wA = 92 * sA, hA = 84 * sA, wB = 92 * sB, hB = 84 * sB, xi = W / 2 + (wA - wB) / 2;
      d.line(0, gy, W, gy, C.muted, 1.5); tag(k, d, "FRICTIONLESS FLOOR", 14, gy + 22);
      d.rr(xi - wA, gy - hA, wA, hA, 4, k.alpha(C.cyan, .16), C.cyan, 2);
      d.rr(xi, gy - hB, wB, hB, 4, k.alpha(C.pink, .16), C.pink, 2);
      d.text("A", xi - wA / 2, gy - hA * 0.3, { font: `600 16px ${F.ui}`, color: C.cyan, align: "center", base: "middle" });
      d.text("B", xi + wB / 2, gy - hB * 0.3, { font: `600 16px ${F.ui}`, color: C.pink, align: "center", base: "middle" });
      const pushL = clamp(Fp * 0.45, 20, Math.max(20, (W - wA - wB) / 2 - 40)), py = gy - Math.min(hA, hB) / 2;
      if (!pushB) { d.arrow(xi - wA - 6 - pushL, py, xi - wA - 6, py, C.text, 3); d.text(`push ${Fp} N`, xi - wA - 8, py - 12, { font: `600 12px ${F.ui}`, color: C.text, align: "right" }); }
      else { d.arrow(xi + wB + 6 + pushL, py, xi + wB + 6, py, C.text, 3); d.text(`push ${Fp} N`, xi + wB + 8, py - 12, { font: `600 12px ${F.ui}`, color: C.text, align: "left" }); }
      const pl = clamp(P * 0.45, 14, Math.min(wA, wB) * 0.8), yc = gy - Math.min(hA, hB) * 0.62, dirA = pushB ? 1 : -1;
      d.arrow(xi - 2, yc, xi - 2 + dirA * pl, yc, C.cyan, 3.5);
      d.arrow(xi + 2, yc + 14, xi + 2 - dirA * pl, yc + 14, C.pink, 3.5);
      const topY = gy - Math.max(hA, hB);
      d.text("P on A", xi - wA / 2, topY - 12, { font: `600 12px ${F.ui}`, color: C.cyan, align: "center" });
      d.text("P on B", xi + wB / 2, topY - 12, { font: `600 12px ${F.ui}`, color: C.pink, align: "center" });
      const al = Math.min(a * 16, W * 0.3) * (pushB ? -1 : 1);
      vec(k, d, xi - al / 2, topY - 44, al, 0, C.amber, `a = ${sfc(a)} m/s²`, { font: `italic 14px ${F.math}` });
      k.setRO(`<div><h2>Contact force</h2><div class="ro-big" style="margin-top:8px"><i>P</i> = <span class="num">${sf(P)}</span> N</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c1"><i>a</i></span> = <i>F</i>/(<i>m</i><sub>A</sub> + <i>m</i><sub>B</sub>)`)} = <span class="v c1">${sf(a)} m/s²</span><span class="lbl">treat A + B as one system: P is internal and cancels</span></div>
        <div class="row">${M(pushB ? `<span class="c2"><i>P</i></span> = <i>m</i><sub>A</sub><i>a</i>` : `<span class="c3"><i>P</i></span> = <i>m</i><sub>B</sub><i>a</i>`)} = <span class="v">${sf(P)} N</span><span class="lbl">the contact force only has to accelerate the block in front, ${pushB ? "A" : "B"}</span></div>
        <div class="row">${M(pushB ? `<i>F</i> − <i>P</i> = <i>m</i><sub>B</sub><i>a</i>` : `<i>F</i> − <i>P</i> = <i>m</i><sub>A</sub><i>a</i>`)} <span class="v">${sf(Fp - P)} N</span><span class="lbl">check on the pushed block: net force = mass × a</span></div>
        </div>
        <div class="landmark"><div class="big">${M(`<span class="c2"><b>P</b><sub>on A</sub></span> = −<span class="c3"><b>P</b><sub>on B</sub></span>`)}</div><div class="note">A pushes B forward and B pushes A back with the same ${sf(P)} N. The pair is internal to the two-block system, so only the ${Fp} N push sets the common acceleration.</div></div>
        <p class="narr">Tick "push on B's side": the acceleration stays ${sf(a)} m/s², but the contact force changes because now it must accelerate A.</p>`);
    }
  });
};

/* ---------- Normal, tension and spring forces ---------- */
L["mech-common-forces"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "elev", mE = 70, aE = 2, t1 = 30, t2 = 60, mR = 15, kS = 100, mS = 0.5, xDisp = 0;
  k.modes([["elev", "Elevator scale"], ["ropes", "Two ropes"], ["spring", "Spring"]], mode, v => { mode = v; vis(); });
  const sE = k.slider(`<i>m</i>`, 40, 120, 1, mE, v => mE = v, v => v + " kg");
  const sA = k.slider(`<i>a</i> (up +)`, -9.8, 5, 0.1, aE, v => aE = Math.round(v * 10) / 10, v => sfc(v) + " m/s²");
  const b0 = k.button("At rest", () => { aE = 0; sA.set(0); }, "btn-s");
  const b1 = k.button("Free fall", () => { aE = -9.8; sA.set(-9.8); }, "btn-s");
  const s1 = k.slider(`θ<sub>1</sub>`, 5, 85, 1, t1, v => t1 = v, v => v + "°");
  const s2 = k.slider(`θ<sub>2</sub>`, 5, 85, 1, t2, v => t2 = v, v => v + "°");
  const sR = k.slider(`<i>m</i>`, 1, 50, 0.5, mR, v => mR = v, v => v.toFixed(1) + " kg");
  const sK = k.slider(`<i>k</i>`, 50, 500, 10, kS, v => kS = v, v => v + " N/m");
  const sM = k.slider(`<i>m</i>`, 0, 2, 0.05, mS, v => mS = v, v => v.toFixed(2) + " kg");
  function vis(){ showCtl([sE, sA, b0, b1], mode === "elev"); showCtl([s1, s2, sR], mode === "ropes"); showCtl([sK, sM], mode === "spring"); }
  vis();
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    if (mode === "elev") {
      const g = G0, a = Math.abs(aE + 9.8) < 1e-9 ? -g : aE, N = Math.max(0, mE * (g + a)), w = mE * g;
      const shW = Math.min(230, W * 0.5), sx = W * 0.36 - shW / 2, top = 56, bot = H - 18;
      d.rect(sx, top, shW, bot - top, k.alpha(C.line2, .12), C.line, 1);
      const carH = Math.min(260, (bot - top) * 0.72), carW = shW - 24, cxl = sx + 12, cyt = top + (bot - top - carH) / 2;
      d.line(sx + shW / 2, top, sx + shW / 2, cyt, C.muted, 2);
      d.rr(cxl, cyt, carW, carH, 4, k.alpha(C.panel2, .8), C.muted, 2);
      // scale and person
      const fy = cyt + carH - 10, scw = 64, px = sx + shW / 2;
      d.rr(px - scw / 2, fy - 12, scw, 12, 3, C.panel3, C.line2, 1.5);
      const ph = Math.min(120, carH * 0.52), hy = fy - 12 - ph;
      d.circle(px, hy + 10, 10, k.alpha(C.text, .18), C.muted, 1.6);
      d.line(px, hy + 20, px, fy - 12 - ph * 0.42, C.muted, 3); d.line(px, fy - 12 - ph * 0.42, px - 9, fy - 12, C.muted, 3); d.line(px, fy - 12 - ph * 0.42, px + 9, fy - 12, C.muted, 3);
      d.line(px, hy + 30, px - 14, hy + 56, C.muted, 2.4); d.line(px, hy + 30, px + 14, hy + 56, C.muted, 2.4);
      // forces on the passenger (common scale)
      const s = Math.min(carH * 0.5, ph * 0.9, 120) / Math.max(N, w, 1), hi = fy - 12 - ph * 0.95;
      vec(k, d, px - 28, fy - 12, 0, -N * s, C.violet, N > 0 ? "N" : "N = 0", N > 0 ? { gap: 10 } : { align: "right", ox: -8, oy: 12 });
      vec(k, d, px + 28, hi, 0, w * s, C.amber, "mg", { gap: 10 });
      // acceleration of the car
      const ax = sx + shW + 26, ay = (top + bot) / 2, al = clamp(-a * 13, -120, 120);
      if (Math.abs(a) > 1e-9) vec(k, d, ax, ay, 0, al, C.text, "a", { w: 2.5 }); else d.text("a = 0", ax, ay, { font: `italic 14px ${F.math}`, color: C.text, align: "center" });
      // scale display
      const dx = Math.min(W - 16 - 118, ax + 26), dy = top + 8;
      if (dx > sx + shW + 44) {
        d.rr(dx, dy, 118, 54, 5, C.ink, C.line2, 1);
        d.text(sfc(N) + " N", dx + 110, dy + 22, { font: `600 18px ${F.mono}`, color: C.amber, align: "right" });
        d.text("≈ " + sfc(N / g) + " kg", dx + 110, dy + 43, { font: `13px ${F.mono}`, color: C.faint, align: "right" });
      }
      const ff = N === 0, rest = aE === 0;
      k.setRO(`<div><h2>Scale reading</h2><div class="ro-big" style="margin-top:8px"><span class="c4"><i>N</i></span> = <span class="num c1">${sf(N)}</span> N</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c4"><i>N</i></span> − <i>mg</i> = <i>ma</i>`)} <span class="v"></span><span class="lbl">second law for the passenger, up positive</span></div>
        <div class="row">${M(`<span class="c4"><i>N</i></span> = <i>m</i>(<i>g</i> + <i>a</i>)`)} = <span class="v c4">${sf(N)} N</span><span class="lbl">${mE} kg × (${sfc(g)} ${a < 0 ? "−" : "+"} ${sfc(Math.abs(a))}) m/s²</span></div>
        <div class="row">${M(`<span class="c1"><i>mg</i></span>`)} = <span class="v c1">${sf(w)} N</span><span class="lbl">true weight, the same whatever the elevator does</span></div>
        <div class="row">${M("<i>N</i>/<i>g</i>")} = <span class="v">${sf(N / g)} kg</span><span class="lbl">what a scale calibrated in kilograms would display</span></div>
        </div>
        <div class="landmark${ff || rest ? " hit" : ""}"><div class="big">${ff ? M("<i>a</i> = −<i>g</i> ⇒ <i>N</i> = 0") : rest ? M("<i>a</i> = 0 ⇒ <i>N</i> = <i>mg</i>") : a > 0 ? "Heavier than weight" : "Lighter than weight"}</div><div class="note">${ff ? "Free fall: floor and passenger accelerate together, so the floor need not push at all. The scale reads zero; this is apparent weightlessness." : rest ? "At rest or at constant velocity (up or down), the scale shows the true weight." : a > 0 ? "Upward acceleration: speeding up on the way up or slowing down on the way down. The floor must push harder than the weight." : "Downward acceleration: speeding up on the way down or slowing down on the way up. The floor pushes less than the weight."}</div></div>
        <p class="narr">Try a = 0, then Free fall. The mass never changes; only the normal force does.</p>`);
    } else if (mode === "ropes") {
      const g = G0, w = mR * g, th1 = t1 * D2R, th2 = t2 * D2R, den = Math.sin(th1 + th2);
      const T1 = w * Math.cos(th2) / den, T2 = w * Math.cos(th1) / den;
      const ceil = 58, cx = W < 520 ? W * 0.5 : W * 0.42, hK = Math.min(H * 0.34, 170), yk = ceil + hK;
      d.rect(0, ceil - 8, W, 8, k.alpha(C.line2, .5)); d.line(0, ceil, W, ceil, C.muted, 1.5);
      const xa1 = cx - hK / Math.tan(th1), xa2 = cx + hK / Math.tan(th2);
      g_line(d, cx, yk, xa1, ceil, C.muted); g_line(d, cx, yk, xa2, ceil, C.muted);
      // angle marks
      d.line(cx - 46, yk, cx + 46, yk, k.alpha(C.faint, .6), 1, [3, 3]);
      c.g.save(); c.g.strokeStyle = C.faint; c.g.lineWidth = 1; c.g.beginPath(); c.g.arc(cx, yk, 30, Math.PI, Math.PI + th1); c.g.stroke(); c.g.beginPath(); c.g.arc(cx, yk, 38, -th2, 0); c.g.stroke(); c.g.restore();
      d.text(`${t1}°`, cx - 72, yk - 6, { font: `12px ${F.mono}`, color: C.muted, align: "right" });
      d.text(`${t2}°`, cx + 72, yk - 6, { font: `12px ${F.mono}`, color: C.muted });
      // lamp
      const ly = yk + 38; d.line(cx, yk, cx, ly, C.muted, 1.5);
      c.g.save(); c.g.fillStyle = k.alpha(C.amber, .25); c.g.strokeStyle = C.amber; c.g.lineWidth = 1.5; c.g.beginPath(); c.g.moveTo(cx - 8, ly); c.g.lineTo(cx + 8, ly); c.g.lineTo(cx + 24, ly + 22); c.g.lineTo(cx - 24, ly + 22); c.g.closePath(); c.g.fill(); c.g.stroke(); c.g.restore();
      d.circle(cx, yk, 4, C.text);
      const s = Math.min(125, H * 0.3) / Math.max(T1, T2, w);
      vec(k, d, cx, yk, -T1 * s * Math.cos(th1), -T1 * s * Math.sin(th1), C.cyan, "T₁", { gap: 12 });
      vec(k, d, cx, yk, T2 * s * Math.cos(th2), -T2 * s * Math.sin(th2), C.cyan, "T₂", { gap: 12 });
      vec(k, d, cx + 34, yk, 0, w * s, C.amber, "mg", { gap: 12 });
      // closed force triangle
      const s2 = Math.min(95, H * 0.2) / Math.max(T1, T2, w), bx = W < 520 ? 24 + T1 * s2 * Math.cos(th1) : W - 30 - T1 * s2 * Math.cos(th1) - 10, by = H - 26;
      const p1 = [bx, by], p2 = [bx - T1 * s2 * Math.cos(th1) + 0, by - T1 * s2 * Math.sin(th1)];
      const q1 = [p2[0] + T2 * s2 * Math.cos(th2), p2[1] - T2 * s2 * Math.sin(th2)];
      const tx = Math.min(p1[0], p2[0], q1[0]) - 0;
      d.arrow(p1[0], p1[1], p2[0], p2[1], C.cyan, 2); d.arrow(p2[0], p2[1], q1[0], q1[1], C.cyan, 2); d.arrow(q1[0], q1[1], q1[0], q1[1] + w * s2, C.amber, 2);
      tag(k, d, "TIP TO TAIL: ΣF = 0", Math.max(12, Math.min(tx, W - 150)), Math.min(p2[1], q1[1]) - 12, C.faint);
      const sym = t1 === t2, big = Math.max(T1, T2) > w;
      k.setRO(`<div><h2>Tensions</h2><div class="ro-big" style="margin-top:8px"><span class="c2"><i>T</i><sub>1</sub></span> = <span class="num c2">${sf(T1)}</span> N<br><span class="c2"><i>T</i><sub>2</sub></span> = <span class="num c2">${sf(T2)}</span> N</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>T</i><sub>1</sub></span> cos θ<sub>1</sub> = <span class="c2"><i>T</i><sub>2</sub></span> cos θ<sub>2</sub>`)} <span class="v">${sf(T1 * Math.cos(th1))} = ${sf(T2 * Math.cos(th2))} N</span><span class="lbl">horizontal parts cancel</span></div>
        <div class="row">${M(`<span class="c2"><i>T</i><sub>1</sub></span> sin θ<sub>1</sub> + <span class="c2"><i>T</i><sub>2</sub></span> sin θ<sub>2</sub>`)} = <span class="v c1">${sf(T1 * Math.sin(th1) + T2 * Math.sin(th2))} N</span><span class="lbl">vertical parts hold up the weight</span></div>
        <div class="row">${M(`<span class="c1"><i>mg</i></span>`)} = <span class="v c1">${sf(w)} N</span><span class="lbl">weight of the ${mR.toFixed(1)} kg lamp</span></div>
        </div>
        <div class="landmark${sym || big ? " hit" : ""}"><div class="big">${sym ? M(`<i>T</i> = <span class="fr"><span><i>mg</i></span><span>2 sin θ</span></span> = ${sf(T1)} N`) : M(`<i>T</i> = <span class="fr"><span><i>mg</i> cos θ<sub>other</sub></span><span>sin(θ<sub>1</sub> + θ<sub>2</sub>)</span></span>`)}</div><div class="note">${big ? `A rope carries ${sf(Math.max(T1, T2) / w)} times the whole weight. Shallow ropes need huge tension because only their small vertical part supports the load.` : sym ? "Symmetric ropes share the load equally." : "The steeper rope carries more of the load."}</div></div>
        <p class="narr">Lower both angles toward 5° and watch the tensions blow up. Make one rope steep: it takes most of the weight.</p>`);
    } else {
      const g = G0, w = mS * g, xEq = w / kS;
      xDisp = k.reduce ? xEq : lerp(xDisp, xEq, Math.min(1, dt * 5));
      const lw = Math.max(140, W * 0.36), ceil = 58, L0 = 70, box = 34;
      const ppm = Math.max(150, (H - ceil - L0 - box - 40) / 0.4);
      const cx = lw / 2 + 6;
      d.rect(cx - 50, ceil - 8, 100, 8, k.alpha(C.line2, .5)); d.line(cx - 50, ceil, cx + 50, ceil, C.muted, 1.5);
      const yEnd = ceil + L0 + xDisp * ppm;
      // zig-zag spring
      c.g.save(); c.g.strokeStyle = C.pink; c.g.lineWidth = 2; c.g.beginPath(); c.g.moveTo(cx, ceil); c.g.lineTo(cx, ceil + 10);
      const n = 12, seg = (yEnd - ceil - 20) / n; for (let i = 0; i < n; i++) c.g.lineTo(cx + (i % 2 ? -12 : 12), ceil + 10 + seg * (i + 0.5)); c.g.lineTo(cx, yEnd - 10); c.g.lineTo(cx, yEnd); c.g.stroke(); c.g.restore();
      d.line(cx - 34, ceil + L0, cx + 34, ceil + L0, C.faint, 1, [4, 4]);
      d.text("relaxed", cx - 38, ceil + L0 - 4, { font: `11px ${F.ui}`, color: C.faint, align: "right" });
      if (mS > 0) {
        d.rr(cx - box / 2 - 12, yEnd, box + 24, box, 4, k.alpha(C.amber, .18), C.amber, 1.6);
        d.text(mS.toFixed(2) + " kg", cx, yEnd + box / 2 + 1, { font: `600 11px ${F.mono}`, color: C.amber, align: "center", base: "middle" });
        const fs = Math.max(0.5, Math.min(5.5, (H - yEnd - box / 2 - 24) / Math.max(w, 0.1)));
        vec(k, d, cx + box / 2 + 26, yEnd + box / 2, 0, -Math.max(w * fs, 4), C.pink, "kx", { gap: 10 });
        vec(k, d, cx + box / 2 + 26, yEnd + box / 2, 0, Math.max(w * fs, 4), C.amber, "mg", { gap: 10 });
        if (xDisp * ppm > 12) { const bx = cx - 30; d.line(bx, ceil + L0, bx, yEnd, C.violet, 1.2); d.line(bx - 4, ceil + L0, bx + 4, ceil + L0, C.violet, 1.2); d.line(bx - 4, yEnd, bx + 4, yEnd, C.violet, 1.2); d.text("x", bx - 6, (ceil + L0 + yEnd) / 2, { font: `italic 14px ${F.math}`, color: C.violet, align: "right", base: "middle" }); }
      } else d.circle(cx, yEnd, 4, C.pink);
      // F–x graph
      const P = k.plot(c, { xmin: 0, xmax: 0.4, ymin: 0, ymax: 20.5, pad: { l: lw + 44, r: 14, t: 64, b: 36 }, xstep: 0.1, ystep: 4, xlabel: "x (m)", ylabel: "F (N)" });
      P.grid(); P.axes(); P.fn(x => kS * x, C.pink, 2.5);
      if (mS > 0) { P.line(xEq, 0, xEq, w, k.alpha(C.violet, .8), 1.2, [3, 3]); P.line(0, w, xEq, w, k.alpha(C.amber, .8), 1.2, [3, 3]); P.point(xEq, w, C.amber, 5.5); }
      const xl = Math.min(0.3, 20 / kS * 0.55);
      P.label(`slope k = ${kS} N/m`, xl, kS * xl, C.pink, { dx: 10, dy: 14, font: `13px ${F.math}` });
      k.setRO(`<div><h2>Extension</h2><div class="ro-big" style="margin-top:8px"><i>x</i> = <span class="num c4">${sf(xEq * 100)}</span> cm</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c3"><i>kx</i></span> = <span class="c1"><i>mg</i></span>`)} <span class="v"></span><span class="lbl">at rest the spring force balances the weight</span></div>
        <div class="row">${M(`<span class="c1"><i>mg</i></span>`)} = <span class="v c1">${sf(w)} N</span><span class="lbl">weight of ${mS.toFixed(2)} kg</span></div>
        <div class="row">${M(`<i>x</i> = <i>mg</i>/<i>k</i>`)} = <span class="v c4">${sf(xEq)} m</span><span class="lbl">stretch from the relaxed length, with k = ${kS} N/m</span></div>
        <div class="row">${M(`<span class="c3"><i>F</i><sub>s</sub></span> = −<i>kx</i>`)} <span class="v c3">${sf(-kS * xEq)} N</span><span class="lbl">taking down as +x, the spring force on the mass points up (negative)</span></div>
        </div>
        <div class="landmark${mS === 0 ? " hit" : ""}"><div class="big">${mS === 0 ? M("<i>m</i> = 0 ⇒ <i>x</i> = 0") : M("<i>F</i> ∝ <i>x</i>")}</div><div class="note">${mS === 0 ? "With nothing hanging, the spring sits at its relaxed length and exerts no force." : "Every point lies on one straight line through the origin: double the load, double the stretch. A stiffer spring (bigger k) has a steeper line and stretches less."}</div></div>
        <p class="narr">Double the mass and check the stretch doubles. Then raise k and watch the line steepen.</p>`);
    }
  });
  function g_line(dd, x1, y1, x2, y2, col){ dd.line(x1, y1, x2, y2, col, 2); }
};

/* ---------- Friction ---------- */
L["mech-friction"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const MAT = [["wood on wood", 0.5, 0.3], ["rubber on dry concrete", 1.0, 0.7], ["steel on steel (dry)", 0.6, 0.3], ["waxed wood on wet snow", 0.14, 0.1], ["shoes on ice", 0.1, 0.05]];
  let mi = 0, m = 30, Fa = 0, rampF = 0, ramp = false, x = 0, v = 0, sliding = false, trace = [];
  const mu = () => MAT[mi]; const Nf = () => m * G0; const Fmax = () => Math.ceil(1.5 * mu()[1] * Nf() / 5) * 5;
  k.select("Surfaces", MAT.map((q, i) => [i, `${q[0]} (${q[1]} / ${q[2]})`]), mi, val => { mi = +val; reset(); });
  k.slider(`<i>m</i>`, 1, 50, 1, m, val => { m = val; reset(); }, val => val + " kg");
  const sF = k.slider(`<span class="c2"><i>F</i></span>`, 0, Fmax(), 1, Fa, val => { Fa = val; ramp = false; }, val => sfc(val) + " N");
  k.button("Reset", () => reset(), "btn ghost");
  k.button("Ramp force up", () => { reset(); rampF = 0; ramp = true; });
  function reset(){ Fa = 0; ramp = false; v = 0; sliding = false; trace = []; sF.setMax(Fmax()); sF.set(0); }
  k.loop(dt => {
    const N = Nf(), [, ms, mk] = mu(), fsm = ms * N, fk = mk * N, FM = Fmax();
    if (ramp) { rampF = Math.min(FM, rampF + fsm * 0.32 * dt * (k.reduce ? 3 : 1)); Fa = Math.round(rampF); sF.set(Fa); if (rampF >= FM) ramp = false; }
    let f, a = 0;
    if (!sliding && Fa > fsm + 1e-9) sliding = true;
    if (sliding) { f = fk; a = (Fa - fk) / m; v += a * dt; if (v <= 0) { v = 0; sliding = false; f = Math.min(Fa, fsm); a = 0; } }
    else f = Fa;
    x += v * dt;
    if (!trace.length || Math.abs(trace[trace.length - 1][0] - Fa) > FM / 300 || trace[trace.length - 1][2] !== sliding) { trace.push([Fa, f, sliding]); if (trace.length > 400) trace.shift(); }
    c.begin(); const W = c.w, H = c.h;
    const topH = Math.max(180, Math.min(H * 0.42, 250)), gy = topH - 44;
    const off = ((x * 40) % 40 + 40) % 40;
    for (let X = -off; X < W + 40; X += 40) d.line(X, gy + 1, X - 9, gy + 10, C.line2, 1);
    d.line(0, gy, W, gy, C.muted, 1.5);
    tag(k, d, mu()[0].toUpperCase(), 14, gy + 26);
    const bs = 56 + 40 * Math.cbrt(m / 50), bx = W * 0.4 - bs / 2;
    d.rr(bx, gy - bs, bs, bs, 4, k.alpha(C.text, .08), C.muted, 2);
    d.text(m + " kg", bx + bs / 2, gy - bs / 2, { font: `600 12px ${F.mono}`, color: C.muted, align: "center", base: "middle" });
    const sc = Math.min(0.9 * (W - bx - bs - 40), 150) / Math.max(FM, 1);
    // rope pull to the right
    if (Fa > 0) vec(k, d, bx + bs, gy - bs / 2, Fa * sc, 0, C.cyan, "F", { gap: 8 });
    if (f > 0) vec(k, d, bx - 2, gy - 6, -f * sc, 0, sliding ? C.pink : C.violet, sliding ? "fₖ" : "fₛ", { gap: 8 });
    if (sliding) vec(k, d, bx + bs / 2, gy - bs - 16, clamp(a * 10, -120, 120), 0, C.amber, a > 0 ? "a" : "a", { w: 2.5 });
    d.text(sliding ? `SLIDING · v = ${sfc(v)} m/s` : "AT REST", W - 14, 64, { font: `600 12px ${F.ui}`, color: sliding ? C.pink : C.violet, align: "right" });
    // friction vs applied graph
    const P = k.plot(c, { xmin: 0, xmax: FM, ymin: 0, ymax: fsm * 1.25, pad: { l: 50, r: 16, t: topH + 20, b: 32 }, xlabel: "F (N)", ylabel: "f (N)" });
    P.grid(); P.axes();
    P.line(0, 0, fsm, fsm, C.violet, 2.5);
    P.line(0, fk, FM, fk, k.alpha(C.pink, .9), 2.2, [7, 5]);
    P.line(fsm, fsm, fsm, fk, k.alpha(C.amber, .7), 1.2, [3, 3]);
    P.point(fsm, fsm, C.amber, 6);
    P.label("μₛN", fsm, fsm, C.amber, { dx: 8, dy: -6, font: `italic 14px ${F.math}` });
    P.label("fₖ = μₖN", FM, fk, C.pink, { dx: -6, dy: -8, align: "right", font: `italic 14px ${F.math}` });
    trace.forEach(([u, ff, sl]) => P.point(u, ff, k.alpha(sl ? C.pink : C.violet, .45), 2));
    P.point(Fa, f, sliding ? C.pink : C.violet, 6);
    const atT = !sliding && Math.abs(Fa - fsm) <= Math.max(1, fsm * 0.01);
    k.setRO(`<div><h2>Friction force</h2><div class="ro-big" style="margin-top:8px">${sliding ? `<span class="c3"><i>f</i><sub>k</sub></span>` : `<span class="c4"><i>f</i><sub>s</sub></span>`} = <span class="num ${sliding ? "c3" : "c4"}">${sf(f)}</span> N</div></div>
      <div class="ro-rows">
      <div class="row">${M("<i>N</i> = <i>mg</i>")} = <span class="v">${sf(N)} N</span><span class="lbl">level floor, horizontal pull</span></div>
      <div class="row">${M(`<span class="c1"><i>μ</i><sub>s</sub><i>N</i></span>`)} = <span class="v c1">${sf(fsm)} N</span><span class="lbl">threshold: the most static friction can give (μs = ${ms})</span></div>
      <div class="row">${M(`<span class="c3"><i>μ</i><sub>k</sub><i>N</i></span>`)} = <span class="v c3">${sf(fk)} N</span><span class="lbl">kinetic friction once sliding (μk = ${mk})</span></div>
      <div class="row">${M("<i>a</i> = (<i>F</i> − <i>f</i>)/<i>m</i>")} = <span class="v">${sf(a)} m/s²</span><span class="lbl">${sliding ? "net force over mass while sliding" : "static friction cancels the pull exactly"}</span></div>
      </div>
      <div class="landmark${sliding || atT ? " hit" : ""}"><div class="big">${sliding ? M(`<span class="c2"><i>F</i></span> − <span class="c3"><i>μ</i><sub>k</sub><i>N</i></span> = <i>ma</i>`) : M(`0 ≤ <span class="c4"><i>f</i><sub>s</sub></span> = <span class="c2"><i>F</i></span> ≤ <span class="c1"><i>μ</i><sub>s</sub><i>N</i></span>`)}</div><div class="note">${sliding ? `The block broke free. Friction dropped from the ${sf(fsm)} N threshold to a steady ${sf(fk)} N. Lower F below ${sf(fk)} N and the block slows to a stop.` : atT ? "Right at the threshold: one more newton and the block breaks free." : Fa === 0 ? "No pull, no tendency to slide, so no friction at all." : "Static friction matches the pull newton for newton. It is not μsN until the threshold."}</div></div>
      <p class="narr">Press Ramp force up and watch the point climb the violet line, then drop to the pink one. Try shoes on ice.</p>`);
  });
};

/* ---------- Centripetal force: flat and banked curves ---------- */
L["mech-centripetal"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const m = 1200;
  let r = 50, v = 15, th = 0, mus = 0.8, phi = 0, skid = null;
  const sr = k.slider(`<i>r</i>`, 20, 200, 5, r, val => { r = val; skid = null; }, val => val + " m");
  const sv = k.slider(`<span class="c2"><i>v</i></span>`, 0, 40, 0.5, v, val => { v = val; skid = null; }, val => val.toFixed(1) + " m/s");
  const st = k.slider(`bank θ`, 0, 40, 1, th, val => { th = val; skid = null; }, val => val + "°");
  const sm = k.slider(`<i>μ</i><sub>s</sub>`, 0, 1.2, 0.05, mus, val => { mus = Math.round(val * 100) / 100; skid = null; }, val => val.toFixed(2));
  const PRE = { flat: [50, 15, 0, 0.8], icy: [100, 19, 20, 0.1], oval: [150, 35, 30, 0.9] };
  k.select("Preset", [["flat", "Flat, dry"], ["icy", "Banked, icy"], ["oval", "Race oval"]], "flat", val => { [r, v, th, mus] = PRE[val]; sr.set(r); sv.set(v); st.set(th); sm.set(mus); skid = null; });
  k.loop(dt => {
    const t = th * D2R, sn = Math.sin(t), cs = Math.cos(t), ac = v * v / r;
    const N = m * (G0 * cs + ac * sn), f = m * (ac * cs - G0 * sn), fmax = mus * N;   // f > 0: toward the centre (down the slope)
    const holds = Math.abs(f) <= fmax + 1e-6;
    const vIdeal = Math.sqrt(r * G0 * Math.tan(t));
    const dMax = cs - mus * sn, vMax = dMax > 1e-9 ? Math.sqrt(r * G0 * (sn + mus * cs) / dMax) : Infinity;
    const nMin = sn - mus * cs, vMin = nMin > 0 ? Math.sqrt(r * G0 * nMin / (cs + mus * sn)) : 0;
    c.begin(); const W = c.w, H = c.h;
    const stack = W < 560;
    const tv = stack ? { x: 0, y: 44, w: W, h: (H - 44) * 0.5 } : { x: 0, y: 44, w: W * 0.5, h: H - 44 };
    const cvw = stack ? { x: 0, y: 44 + tv.h, w: W, h: H - 44 - tv.h } : { x: W * 0.5, y: 44, w: W * 0.5, h: H - 44 };
    // ---- top view
    const ox = tv.x + tv.w / 2, oy = tv.y + tv.h / 2 + 4, R = Math.max(30, Math.min(tv.w, tv.h) / 2 - 30);
    d.circle(ox, oy, R + 12, null, k.alpha(C.line2, .9), 1);
    d.circle(ox, oy, R - 12, null, k.alpha(C.line2, .9), 1);
    d.circle(ox, oy, R, null, k.alpha(C.faint, .5), 1);
    d.circle(ox, oy, 3, C.faint);
    d.text(`r = ${r} m`, ox, oy - 10, { font: `12px ${F.mono}`, color: C.faint, align: "center" });
    tag(k, d, "TOP VIEW", tv.x + 12, tv.y + tv.h - 8);
    const om = v / r;
    let px, py, hd;
    if (holds || v === 0) { phi += om * dt; px = ox + R * Math.cos(phi); py = oy + R * Math.sin(phi); hd = phi + Math.PI / 2; }
    else {
      if (!skid) { phi += om * dt; skid = { x: ox + R * Math.cos(phi), y: oy + R * Math.sin(phi), phi, s: 0 }; }
      skid.s += dt;
      const out = f > 0;   // too fast: needs more inward friction than available
      const ts = v * skid.s * (R / r) * 0.9, ang = skid.phi + Math.PI / 2;
      if (out) { px = skid.x + ts * Math.cos(ang); py = skid.y + ts * Math.sin(ang); hd = ang; }
      else { const rr = R - 14 * skid.s * 3, pp = skid.phi + om * 0.5 * skid.s; px = ox + Math.max(10, rr) * Math.cos(pp); py = oy + Math.max(10, rr) * Math.sin(pp); hd = pp + Math.PI / 2; }
      d.line(skid.x, skid.y, px, py, k.alpha(C.pink, .6), 1.5, [4, 4]);
      if (skid.s > 2.2) { phi = skid.phi; skid = null; }
    }
    c.g.save(); c.g.translate(px, py); c.g.rotate(hd); d.rr(-11, -7, 22, 14, 3, k.alpha(C.text, .15), C.text, 1.5); c.g.restore();
    const vl = Math.min(70, 8 + v * 2.2);
    if (v > 0) vec(k, d, px, py, vl * Math.cos(hd), vl * Math.sin(hd), C.cyan, "v", { gap: 8 });
    if (holds && v > 0) { const il = Math.min(R * 0.7, 10 + ac * 9); const dx = ox - px, dy = oy - py, L0 = Math.hypot(dx, dy); vec(k, d, px, py, dx / L0 * il, dy / L0 * il, C.amber, "", {}); }
    // ---- cross-section (rear view; centre of the curve to the left)
    const bx = cvw.x + cvw.w * 0.52, by = cvw.y + cvw.h * 0.64, RL = Math.min(cvw.w * 0.42, 170);
    const ux = cs, uy = -sn;   // along the road, up-slope (toward the outside, right)
    d.line(bx - RL * ux, by - RL * uy, bx + RL * ux, by + RL * uy, C.muted, 3);
    c.g.save(); c.g.fillStyle = k.alpha(C.line2, .25); c.g.beginPath(); c.g.moveTo(bx - RL * ux, by - RL * uy); c.g.lineTo(bx + RL * ux, by + RL * uy); c.g.lineTo(bx + RL * ux, by + RL * uy + 26 + RL * sn * 0); c.g.lineTo(bx - RL * ux, by - RL * uy + 26); c.g.closePath(); c.g.fill(); c.g.restore();
    if (th > 0) { d.line(bx - RL * 0.5, by + RL * 0.5 * sn * 0, bx + RL * 0.9, by, k.alpha(C.faint, .6), 1, [3, 3]); d.text(`${th}°`, bx + RL * 0.62, by - 6, { font: `12px ${F.mono}`, color: C.faint }); }
    const nx = -sn, ny = -cs, carH = 26, cW = 44, ccx = bx + nx * carH / 2, ccy = by + ny * carH / 2;
    c.g.save(); c.g.translate(ccx, ccy); c.g.rotate(-t); d.rr(-cW / 2, -carH / 2, cW, carH, 4, k.alpha(C.text, .12), C.text, 1.5); c.g.restore();
    tag(k, d, "← CENTRE OF CURVE", cvw.x + 12, cvw.y + 20 + (stack ? 0 : 20));
    tag(k, d, "REAR VIEW", cvw.x + 12, cvw.y + cvw.h - 8);
    const Fc = m * ac, sc = Math.min(cvw.h * 0.36, 95) / Math.max(m * G0, N, Math.abs(f), Fc, 1);
    vec(k, d, ccx, ccy, 0, m * G0 * sc, C.muted, "mg", { gap: 10, font: `italic 13px ${F.math}` });
    vec(k, d, ccx, ccy, nx * N * sc, ny * N * sc, C.violet, "N", { gap: 10 });
    const fa = holds ? f : Math.sign(f) * fmax;
    if (Math.abs(fa) > 1) vec(k, d, bx, by, -ux * fa * sc, -uy * fa * sc, C.pink, "fₛ", { gap: 8, oy: 10 });
    const netIn = holds ? Fc : (N * sn + fa * cs);
    if (netIn > 1) vec(k, d, ccx, ccy - 34, -netIn * sc, 0, C.amber, "ΣFᵣ", { gap: 8 });
    const status = v === 0 ? "PARKED" : holds ? "HOLDS THE CURVE" : f > 0 ? "SKIDS OUTWARD" : "SLIDES DOWN INWARD";
    d.text(status, cvw.x + cvw.w - 12, cvw.y + 20 + (stack ? 0 : 20), { font: `600 12px ${F.ui}`, color: holds ? C.green : C.pink, align: "right" });
    const ideal = th > 0 && v > 0 && Math.abs(v - vIdeal) < 0.3;
    k.setRO(`<div><h2>Net inward force</h2><div class="ro-big" style="margin-top:8px"><span class="c1">Σ<i>F</i><sub>r</sub></span> = <i>m</i><span class="fr"><span><span class="c2"><i>v</i></span><sup>2</sup></span><span><i>r</i></span></span> = <span class="num c1">${sf(Fc)}</span> N</div></div>
      <div class="ro-rows">
      <div class="row">${M("<i>v</i><sup>2</sup>/<i>r</i>")} = <span class="v">${sf(ac)} m/s²</span><span class="lbl">for a 1.20 × 10³ kg car</span></div>
      <div class="row">${M(`<span class="c4"><i>N</i></span>`)} = <span class="v c4">${sf(N)} N</span><span class="lbl">${th > 0 ? "N sin θ = " + sf(N * sn) + " N of it points inward" : "vertical: supplies nothing inward"}</span></div>
      <div class="row">${M(`<span class="c3"><i>f</i><sub>s</sub></span> needed`)} = <span class="v c3">${sf(Math.abs(f))} N ${f >= 0 ? (th > 0 ? "down-slope" : "inward") : "up-slope"}</span><span class="lbl">available: μsN = ${sf(fmax)} N</span></div>
      <div class="row">${M("<i>v</i><sub>max</sub>")} = <span class="v">${isFinite(vMax) ? sf(vMax) + " m/s" : "no limit"}</span><span class="lbl">${th > 0 ? `ideal (no-friction) speed ${sf(vIdeal)} m/s${vMin > 0 ? `; below ${sf(vMin)} m/s the car slides down` : ""}` : "flat curve: √(μs g r)"}</span></div>
      </div>
      <div class="landmark${!holds || ideal ? " hit" : ""}"><div class="big">${!holds ? (f > 0 ? M(`<i>m</i><i>v</i><sup>2</sup>/<i>r</i> &gt; <span class="c4"><i>N</i></span> sin θ + <span class="c3"><i>μ</i><sub>s</sub><i>N</i></span> cos θ`) : M("too slow for this bank")) : ideal ? M(`tan θ = <span class="fr"><span><i>v</i><sup>2</sup></span><span><i>rg</i></span></span>`) : M(`<span class="c4"><i>N</i></span> sin θ + <span class="c3"><i>f</i><sub>s</sub></span> cos θ = <i>mv</i><sup>2</sup>/<i>r</i>`)}</div><div class="note">${!holds ? (f > 0 ? "Friction cannot supply enough inward force. The car does not get thrown out; it keeps going nearly straight, drifting to the outside of the curve." : "Friction cannot hold the car up the slope; it slides down toward the inside.") : ideal ? "At the ideal speed the banked normal force supplies the whole inward force, so almost no friction is needed, even on ice." : th === 0 ? "On a flat road static friction alone provides the inward force." : "The normal force and friction share the job of turning the car."}</div></div>
      <p class="narr">Raise v until the car skids, then bank the road. On Banked, icy, find the speed that needs no friction.</p>`);
  });
};

/* ---------- Inclines and connected objects ---------- */
L["mech-newton-apps"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "incline", th = 30, ms = 0.3, mk = 0.2, m1 = 5, m2 = 4, s = 0, v = 0, run = false, moving = false;
  k.modes([["incline", "Incline"], ["hang", "Incline + hanging mass"], ["atwood", "Atwood machine"]], mode, val => { mode = val; vis(); reset(); });
  const sT = k.slider(`θ`, 0, 60, 1, th, val => { th = val; reset(); }, val => val + "°");
  const sS = k.slider(`<i>μ</i><sub>s</sub>`, 0, 1, 0.05, ms, val => { ms = Math.round(val * 100) / 100; if (mk > ms) { mk = ms; sK.set(mk); } reset(); }, val => val.toFixed(2));
  const sK = k.slider(`<i>μ</i><sub>k</sub>`, 0, 1, 0.05, mk, val => { mk = Math.round(val * 100) / 100; if (mk > ms) { mk = ms; sK.set(mk); } reset(); }, val => val.toFixed(2));
  const s1 = k.slider(`<i>m</i><sub>1</sub>`, 1, 10, 0.5, m1, val => { m1 = val; reset(); }, val => val.toFixed(1) + " kg");
  const s2 = k.slider(`<i>m</i><sub>2</sub>`, 0.5, 10, 0.5, m2, val => { m2 = val; reset(); }, val => val.toFixed(1) + " kg");
  k.button("Reset", () => reset(), "btn ghost");
  k.button("Release", () => { reset(); run = true; });
  function reset(){ s = 0; v = 0; run = false; }
  function vis(){ showCtl([sT, sS, sK], mode !== "atwood"); showCtl([s2], mode !== "incline"); }
  vis();
  // physics: positive direction = "forward" (down the slope for the lone block; m2 descending otherwise)
  function solve(){
    const g = G0, t = th * D2R;
    if (mode === "incline") {
      const par = m1 * g * Math.sin(t), perp = m1 * g * Math.cos(t), N = perp;
      const hold = par <= ms * N + 1e-9;
      const a = hold ? 0 : (par - mk * N) / m1;
      return { par, perp, N, drive: par, fs: hold ? par : mk * N, hold, a, T: 0, M: m1 };
    }
    if (mode === "hang") {
      const par = m1 * g * Math.sin(t), perp = m1 * g * Math.cos(t), N = perp, drive = m2 * g - par;
      const hold = Math.abs(drive) <= ms * N + 1e-9;
      const a = hold ? 0 : Math.sign(drive) * (Math.abs(drive) - mk * N) / (m1 + m2);
      const T = m2 * (g - a);
      return { par, perp, N, drive, fs: hold ? Math.abs(drive) : mk * N, hold, a, T, M: m1 + m2 };
    }
    const a = (m2 - m1) * g / (m1 + m2), T = 2 * m1 * m2 * g / (m1 + m2);
    return { drive: (m2 - m1) * g, hold: m1 === m2, a, T, M: m1 + m2 };
  }
  k.loop(dt => {
    const S = solve(), g = G0, t = th * D2R;
    const lim = mode === "atwood" ? 0.9 : 0.8;
    if (run && !S.hold) { v += S.a * dt * (k.reduce ? 3 : 1); s += v * dt * (k.reduce ? 3 : 1); if (Math.abs(s) >= lim) { s = Math.sign(s) * lim; run = false; } }
    moving = run && !S.hold;
    c.begin(); const W = c.w, H = c.h;
    const ext = [];
    if (mode === "atwood") {
      const px = W * (W < 560 ? 0.5 : 0.4), py = 76, pr = 26, ppm = Math.min(150, (H - 180) / 2.2);
      d.line(px, 50, px, py, C.muted, 2); d.circle(px, py, pr, C.panel2, C.muted, 2); d.circle(px, py, 3, C.muted);
      const base = py + 60 + 0.9 * ppm, y1 = base - s * ppm, y2 = base + s * ppm;
      const b1 = 26 + 18 * Math.cbrt(m1 / 10), b2 = 26 + 18 * Math.cbrt(m2 / 10);
      d.line(px - pr, py, px - pr, y1, C.violet, 1.6); d.line(px + pr, py, px + pr, y2, C.violet, 1.6);
      d.rr(px - pr - b1 / 2, y1, b1, b1, 3, k.alpha(C.text, .1), C.muted, 1.8); d.rr(px + pr - b2 / 2, y2, b2, b2, 3, k.alpha(C.text, .1), C.muted, 1.8);
      d.text("m₁", px - pr, y1 + b1 / 2, { font: `italic 14px ${F.math}`, color: C.text, align: "center", base: "middle" });
      d.text("m₂", px + pr, y2 + b2 / 2, { font: `italic 14px ${F.math}`, color: C.text, align: "center", base: "middle" });
      const sc = 80 / Math.max(m1 * g, m2 * g);
      vec(k, d, px - pr - b1 / 2 - 14, y1 + b1 / 2, 0, -S.T * sc, C.violet, "T", { gap: 9 });
      vec(k, d, px + pr + b2 / 2 + 14, y2 + b2 / 2, 0, -S.T * sc, C.violet, "T", { gap: 9 });
      vec(k, d, px - pr + b1 / 2 + 12, y1 + b1 / 2, 0, m1 * g * sc, C.muted, "m₁g", { gap: 9, font: `italic 13px ${F.math}` });
      vec(k, d, px + pr - b2 / 2 - 12, y2 + b2 / 2, 0, m2 * g * sc, C.muted, "m₂g", { gap: 9, font: `italic 13px ${F.math}` });
      if (S.a !== 0) { const al = clamp(Math.abs(S.a) * 20, 14, 70); vec(k, d, px + pr + b2 / 2 + 44, y2 + b2 / 2, 0, S.a > 0 ? al : -al, C.amber, "a", { gap: 9 }); vec(k, d, px - pr - b1 / 2 - 44, y1 + b1 / 2, 0, S.a > 0 ? -al : al, C.amber, "a", { gap: 9 }); }
      d.line(20, H - 16, W - 20, H - 16, C.line2, 1);
    } else {
      // ramp: bottom-left corner (xL, yB), apex top-right
      const hang = mode === "hang", avW = W - (hang ? 100 : 40) - 30, avH = H - 150;
      const Lp = Math.max(120, Math.min(avW / Math.max(Math.cos(t), 0.3), avH / Math.max(Math.sin(t), 0.25), 460));
      const xR = 30 + Math.min(avW, Lp * Math.cos(t)) + (W - 60 - (hang ? 70 : 0) - Math.min(avW, Lp * Math.cos(t))) / 2, yB = H - 50;
      const xL = xR - Lp * Math.cos(t), yT = yB - Lp * Math.sin(t);
      c.g.save(); c.g.fillStyle = k.alpha(C.line2, .22); c.g.strokeStyle = C.muted; c.g.lineWidth = 2; c.g.beginPath(); c.g.moveTo(xL, yB); c.g.lineTo(xR, yT); c.g.lineTo(xR, yB); c.g.closePath(); c.g.fill(); c.g.stroke(); c.g.restore();
      if (th > 0) { c.g.save(); c.g.strokeStyle = C.faint; c.g.beginPath(); c.g.arc(xL, yB, 34, -t, 0); c.g.stroke(); c.g.restore(); d.text(`${th}°`, xL + 40, yB - 8, { font: `12px ${F.mono}`, color: C.faint }); }
      const ux = Math.cos(t), uy = -Math.sin(t);   // up-slope unit vector (screen)
      const nx = -Math.sin(t), ny = -Math.cos(t);  // outward normal
      const ppm = Lp / 2.4, bs = 30 + 12 * Math.cbrt(m1 / 10);
      // distance from the bottom along the slope (m): lone block slides down (s>0 → down), hanging: s>0 → block up
      const dist = hang ? 1.2 + s : 1.95 - s;
      const cx0 = xL + ux * dist * ppm, cy0 = yB + uy * dist * ppm, bcx = cx0 + nx * bs / 2, bcy = cy0 + ny * bs / 2;
      c.g.save(); c.g.translate(bcx, bcy); c.g.rotate(-t); d.rr(-bs / 2, -bs / 2, bs, bs, 3, k.alpha(C.text, .1), C.muted, 1.8); d.text("m₁", 0, 1, { font: `italic 14px ${F.math}`, color: C.text, align: "center", base: "middle" }); c.g.restore();
      const sc = Math.min(95, H * 0.2) / Math.max(m1 * g, hang ? m2 * g : 0, 1);
      // weight components from the block centre
      vec(k, d, bcx, bcy, -ux * S.par * sc, -uy * S.par * sc, C.cyan, "mg sin θ", { gap: 8, font: `italic 13px ${F.math}` });
      vec(k, d, bcx, bcy, -nx * S.perp * sc, -ny * S.perp * sc, C.pink, "mg cos θ", { gap: 8, font: `italic 13px ${F.math}`, align: "left", ox: 6 });
      d.line(bcx, bcy, bcx, bcy + m1 * g * sc, k.alpha(C.muted, .7), 1.2, [3, 3]);
      if (hang) {
        const pr = 12, pcx = xR + 16, pcy = yT - 8;
        d.circle(pcx, pcy, pr, C.panel2, C.muted, 2);
        const rope1x = bcx + ux * bs / 2, rope1y = bcy + uy * bs / 2;
        d.line(rope1x, rope1y, pcx - 2, pcy - pr, C.violet, 1.6);
        const b2 = 24 + 16 * Math.cbrt(m2 / 10), hx = pcx + pr;
        const q = Math.max(10, Math.min(ppm, (H - b2 - 10 - pcy - 30) / 1.6));
        const hyy = pcy + 30 + (0.8 + s) * q;
        d.line(hx, pcy, hx, hyy, C.violet, 1.6);
        d.rr(hx - b2 / 2, hyy, b2, b2, 3, k.alpha(C.text, .1), C.muted, 1.8);
        d.text("m₂", hx, hyy + b2 / 2, { font: `italic 14px ${F.math}`, color: C.text, align: "center", base: "middle" });
        vec(k, d, rope1x, rope1y, ux * S.T * sc, uy * S.T * sc, C.violet, "T", { gap: 8 });
        vec(k, d, hx + b2 / 2 + 12, hyy + b2 / 2, 0, -S.T * sc, C.violet, "T", { gap: 8 });
        vec(k, d, hx - b2 / 2 - 12, hyy + b2 / 2, 0, m2 * g * sc, C.muted, "m₂g", { gap: 8, font: `italic 13px ${F.math}` });
        if (S.a !== 0) { const al = clamp(Math.abs(S.a) * 30, 14, 80) * Math.sign(S.a); vec(k, d, bcx + nx * (bs / 2 + 18), bcy + ny * (bs / 2 + 18), ux * al, uy * al, C.amber, "a", { gap: 8 }); }
      } else if (S.a !== 0) { const al = clamp(S.a * 20, 14, 90); vec(k, d, bcx + nx * (bs / 2 + 16), bcy + ny * (bs / 2 + 16), -ux * al, -uy * al, C.amber, "a", { gap: 8 }); }
      ext.push(S.hold ? "HOLDS" : "");
    }
    const st = S.hold ? "AT REST" : run ? "MOVING" : Math.abs(s) >= lim - 1e-9 ? "REACHED THE END" : "READY · PRESS RELEASE";
    d.text(st, W - 14, 64, { font: `600 12px ${F.ui}`, color: S.hold ? C.violet : C.amber, align: "right" });
    let rows = "", big = "", note = "", hit = false;
    if (mode === "incline") {
      const tanT = Math.tan(t);
      rows = `<div class="row">${M(`<span class="c2"><i>mg</i> sin θ</span>`)} = <span class="v c2">${sf(S.par)} N</span><span class="lbl">weight component down the slope</span></div>
        <div class="row">${M(`<span class="c3"><i>mg</i> cos θ</span> = <i>N</i>`)} = <span class="v c3">${sf(S.perp)} N</span><span class="lbl">weight component into the slope, balanced by the normal force</span></div>
        <div class="row">${M("tan θ vs <i>μ</i><sub>s</sub>")} <span class="v">${sf(tanT)} vs ${ms.toFixed(2)}</span><span class="lbl">${S.hold ? "tan θ ≤ μs: static friction holds the block" : "tan θ > μs: the block slides"}</span></div>
        <div class="row">${M(`<span class="c1"><i>a</i></span> = <i>g</i>(sin θ − <i>μ</i><sub>k</sub> cos θ)`)} = <span class="v c1">${sf(S.a)} m/s²</span><span class="lbl">${S.hold ? "zero while static friction holds" : "down the slope, independent of mass"}</span></div>`;
      hit = S.hold && th > 0 && Math.abs(tanT - ms) < 0.02 || th === 0 || th >= 60 && mk === 0;
      big = S.hold ? M(`θ ≤ tan<sup>−1</sup> <i>μ</i><sub>s</sub> = ${sf(Math.atan(ms) * R2D)}°`) : M(`<span class="c1"><i>a</i></span> = ${sf(S.a)} m/s²`);
      note = th === 0 ? "Flat: the whole weight presses into the surface and nothing pulls along it." : S.hold ? `The block stays put up to the angle of repose, ${sf(Math.atan(ms) * R2D)}°. Raise θ past it.` : `mg sin θ minus kinetic friction μk mg cos θ, divided by m. The mass cancels, so every block slides with the same acceleration.`;
    } else if (mode === "hang") {
      rows = `<div class="row">${M(`<i>m</i><sub>2</sub><i>g</i> − <span class="c2"><i>m</i><sub>1</sub><i>g</i> sin θ</span>`)} = <span class="v">${sf(S.drive)} N</span><span class="lbl">net driving force (positive: m₂ goes down)</span></div>
        <div class="row">${M(`<i>μ</i><sub>s</sub> <span class="c3"><i>m</i><sub>1</sub><i>g</i> cos θ</span>`)} = <span class="v c3">${sf(ms * S.N)} N</span><span class="lbl">maximum static friction on the block; ${S.hold ? "it holds the system" : "not enough, the system moves"}</span></div>
        <div class="row">${M(`<span class="c1"><i>a</i></span>`)} = <span class="v c1">${sf(S.a)} m/s²</span><span class="lbl">${S.hold ? "static friction holds" : `(${sf(Math.abs(S.drive))} − ${sf(mk * S.N)}) N ÷ ${sf(m1 + m2)} kg, ${S.a > 0 ? "m₂ down, block up the ramp" : "block down the ramp, m₂ up"}`}</span></div>
        <div class="row">${M(`<span class="c4"><i>T</i></span> = <i>m</i><sub>2</sub>(<i>g</i> − <i>a</i>)`)} = <span class="v c4">${sf(S.T)} N</span><span class="lbl">compare the hanging weight ${sf(m2 * g)} N</span></div>`;
      hit = S.hold;
      big = S.hold ? M("|<i>m</i><sub>2</sub><i>g</i> − <i>m</i><sub>1</sub><i>g</i> sin θ| ≤ <i>μ</i><sub>s</sub><i>N</i>") : M(`<span class="c1"><i>a</i></span> = <span class="fr"><span>${sf(Math.abs(S.drive))} − ${sf(mk * S.N)}</span><span>${sf(m1 + m2)}</span></span> = ${sf(Math.abs(S.a))} m/s²`);
      note = S.hold ? "Static friction balances the difference, so nothing moves and T = m₂g." : "Adding the two bodies' equations eliminates T. Then T comes from the hanging mass alone.";
    } else {
      rows = `<div class="row">${M(`<span class="c1"><i>a</i></span> = <span class="fr"><span>(<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)<i>g</i></span><span><i>m</i><sub>1</sub> + <i>m</i><sub>2</sub></span></span>`)} = <span class="v c1">${sf(S.a)} m/s²</span><span class="lbl">positive: m₂ goes down</span></div>
        <div class="row">${M(`<span class="c4"><i>T</i></span> = <span class="fr"><span>2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i></span><span><i>m</i><sub>1</sub> + <i>m</i><sub>2</sub></span></span>`)} = <span class="v c4">${sf(S.T)} N</span><span class="lbl">between the weights ${sf(Math.min(m1, m2) * g)} N and ${sf(Math.max(m1, m2) * g)} N</span></div>
        <div class="row">${M("<i>a</i>/<i>g</i>")} = <span class="v">${sf(S.a / g)}</span><span class="lbl">a slow, easily timed fraction of g</span></div>`;
      hit = m1 === m2;
      big = m1 === m2 ? M("<i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> ⇒ <i>a</i> = 0, <i>T</i> = <i>mg</i>") : M(`<i>m</i><sub>2</sub><i>g</i> − <span class="c4"><i>T</i></span> = <i>m</i><sub>2</sub><i>a</i>, &nbsp; <span class="c4"><i>T</i></span> − <i>m</i><sub>1</sub><i>g</i> = <i>m</i><sub>1</sub><i>a</i>`);
      note = m1 === m2 ? "Balanced: the system stays at rest (or moves at constant speed)." : "Add the two equations: T cancels and only the weight difference drives the total mass.";
    }
    k.setRO(`<div><h2>Acceleration</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>a</i></span> = <span class="num c1">${sf(Math.abs(S.a))}</span> m/s²${mode !== "incline" ? `<br><span class="c4"><i>T</i></span> = <span class="num c4">${sf(S.T)}</span> N` : ""}</div></div>
      <div class="ro-rows">${rows}</div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${big}</div><div class="note">${note}</div></div>
      <p class="narr">${mode === "incline" ? "Raise θ slowly until the block slips; then set μk = 0 and θ = 60°." : mode === "hang" ? "Find the hanging mass that just starts the system moving, then compare T with m₂g." : "Make the masses nearly equal: a gets small, which is how Atwood measured g."}</p>`);
  });
};

})();
