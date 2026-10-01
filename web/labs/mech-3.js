/* ============ Labs: Mechanics, part 3 (2-D motion, projectiles, circular and relative motion, forces, first law) ============ */
(function(){
const L = window.LABS;
const G = 9.80;
const MI = "−";
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const R2D = 180 / Math.PI, D2R = Math.PI / 180;
// 3 significant figures, U+2212 minus; HTML (sup) for very large/small values
const sf = (v, n = 3) => {
  if (!isFinite(v)) return "—";
  if (Math.abs(v) < 1e-9) return "0";
  const a = Math.abs(v);
  let s;
  if (a >= 1e5 || a < 1e-3) { let e = Math.floor(Math.log10(a)), m = v / 10 ** e; let ms = m.toFixed(n - 1); if (Math.abs(+ms) >= 10) { e++; ms = (v / 10 ** e).toFixed(n - 1); } s = `${ms} × 10<sup>${e}</sup>`; }
  else if (a >= 10 ** (n - 1)) s = String(Math.round(v));
  else { s = v.toPrecision(n); if (s.includes("e")) s = Math.round(+s).toLocaleString("en-US"); }
  return s.replace("-", MI);
};
const sfT = (v, n = 3) => sf(v, n).replace(/ × 10<sup>(−?\d+)<\/sup>/, "e$1");   // canvas text
const vecH = (x, y, u) => `(${sf(x)} î ${y < 0 ? "−" : "+"} ${sf(Math.abs(y))} ĵ) ${u}`;
const M = s => `<span class="m">${s}</span>`;

// arrow with optional label near the tip; skipped when too short
function arrowL(k, d, x1, y1, x2, y2, color, label, o = {}){
  const len = Math.hypot(x2 - x1, y2 - y1);
  if (len < 2) return;
  if (len >= 7) d.arrow(x1, y1, x2, y2, color, o.w || 2.5); else d.line(x1, y1, x2, y2, color, o.w || 2.5);
  if (label) {
    const ux = (x2 - x1) / len, uy = (y2 - y1) / len;
    let lx = x2 + ux * (o.gap || 12) + (o.dx || 0), ly = y2 + uy * (o.gap || 12) + (o.dy || 0);
    if (o.mid) { lx = (x1 + x2) / 2 + uy * 13; ly = (y1 + y2) / 2 - ux * 13; }
    if (o.at) { lx = o.at[0]; ly = o.at[1]; }
    const [main, sub] = label.split("_"), f1 = o.font || `italic 600 15px ${k.F.math}`, f2 = `600 11px ${k.F.math}`;
    if (!sub) { d.text(main, lx, ly, { font: f1, color, align: "center", base: "middle" }); return; }
    const w1 = d.width(main, f1), w2 = d.width(sub, f2), x0 = lx - (w1 + w2) / 2;
    d.text(main, x0, ly, { font: f1, color, align: "left", base: "middle" });
    d.text(sub, x0 + w1 + 1, ly + 5, { font: f2, color, align: "left", base: "middle" });
  }
}

/* ---------- 2-D motion: r, v, a on a curved path ---------- */
L["mech-2d-motion"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d;
  const PRE = {
    boat: { T: 5, r: t => [2 * t * t, 8 * t - t * t], v: t => [4 * t, 8 - 2 * t], a: () => [4, -2], box: [-3, 53, -4, 19] },
    ellipse: { T: 8, w: Math.PI / 4, box: [-5, 5, -3.6, 3.6] },
    eight: { T: 10, w: Math.PI / 5, box: [-5, 5, -3.6, 3.6] }
  };
  { const e = PRE.ellipse, w = e.w; e.r = t => [4 * Math.cos(w * t), 2.5 * Math.sin(w * t)]; e.v = t => [-4 * w * Math.sin(w * t), 2.5 * w * Math.cos(w * t)]; e.a = t => [-w * w * 4 * Math.cos(w * t), -w * w * 2.5 * Math.sin(w * t)]; }
  { const e = PRE.eight, w = e.w; e.r = t => [4 * Math.sin(w * t), 2.5 * Math.sin(2 * w * t)]; e.v = t => [4 * w * Math.cos(w * t), 5 * w * Math.cos(2 * w * t)]; e.a = t => [-4 * w * w * Math.sin(w * t), -10 * w * w * Math.sin(2 * w * t)]; }
  for (const p of Object.values(PRE)) { let mv = 0, ma = 0; for (let i = 0; i <= 400; i++) { const t = p.T * i / 400, v = p.v(t), a = p.a(t); mv = Math.max(mv, Math.hypot(...v)); ma = Math.max(ma, Math.hypot(...a)); } p.mv = mv; p.ma = ma; }
  let mode = "boat", t = 3, playing = false, comps = true;
  const ts = k.slider("time <i>t</i> (s)", 0, 5, 0.05, t, v => { t = v; playing = false; bp.textContent = "Play"; }, v => v.toFixed(2));
  const bp = k.button("Play", () => { playing = !playing; if (playing && t >= PRE[mode].T - 1e-9) t = 0; bp.textContent = playing ? "Pause" : "Play"; });
  k.check("components", comps, v => comps = v);
  k.modes([["boat", "Boat (example)"], ["ellipse", "Ellipse"], ["eight", "Figure eight"]], mode, m => { mode = m; ts.el.max = PRE[m].T; t = m === "boat" ? 3 : 0; ts.set(t); });
  k.loop(dt => {
    const p = PRE[mode];
    if (playing) { t += dt; if (t > p.T) t = mode === "boat" ? p.T : t - p.T; if (mode === "boat" && t >= p.T) { playing = false; bp.textContent = "Play"; } ts.set(t); }
    c.begin();
    const [x0, x1, y0, y1] = p.box;
    const P = k.plot(c, { xmin: x0, xmax: x1, ymin: y0, ymax: y1, equal: true, pad: { l: 34, r: 14, t: 52, b: 26 }, xlabel: "x (m)", ylabel: "y (m)" });
    P.grid(); P.axes();
    // path
    const N = 240; const path = (from, to, col, w, dash) => { const g = c.g; g.save(); g.strokeStyle = col; g.lineWidth = w; if (dash) g.setLineDash(dash); g.beginPath(); for (let i = 0; i <= N; i++) { const tt = from + (to - from) * i / N, r = p.r(tt); i ? g.lineTo(P.X(r[0]), P.Y(r[1])) : g.moveTo(P.X(r[0]), P.Y(r[1])); } g.stroke(); g.restore(); };
    path(0, p.T, k.alpha(C.violet, .35), 2, [5, 5]);
    path(0, t, C.violet, 2.5);
    const r = p.r(t), v = p.v(t), a = p.a(t);
    const px = P.X(r[0]), py = P.Y(r[1]), ox = P.X(0), oy = P.Y(0);
    const Lp = clamp(Math.min(P.width, P.height * 1.6) * 0.24, 34, 110);
    const sv = Lp / p.mv, sa = Lp * 0.8 / p.ma;
    // position vector
    arrowL(k, d, ox, oy, px, py, k.alpha(C.cyan, .9), "r", { w: 2, mid: true });
    // components
    if (comps) {
      d.line(px, py, px + v[0] * sv, py, k.alpha(C.pink, .55), 1.5, [4, 3]); d.line(px + v[0] * sv, py, px + v[0] * sv, py - v[1] * sv, k.alpha(C.pink, .55), 1.5, [4, 3]);
      d.line(px, py, px + a[0] * sa, py, k.alpha(C.amber, .55), 1.5, [4, 3]); d.line(px + a[0] * sa, py, px + a[0] * sa, py - a[1] * sa, k.alpha(C.amber, .55), 1.5, [4, 3]);
    }
    arrowL(k, d, px, py, px + a[0] * sa, py - a[1] * sa, C.amber, "a");
    arrowL(k, d, px, py, px + v[0] * sv, py - v[1] * sv, C.pink, "v");
    d.circle(px, py, 6, C.cyan, C.ink, 2);
    d.text("arrows: v and a each to their own scale", c.w - 10, c.h - 6, { font: `11px ${F.sans}`, color: C.faint, align: "right" });
    // numbers
    const sp = Math.hypot(...v), am = Math.hypot(...a);
    const aT = sp > 1e-9 ? (v[0] * a[0] + v[1] * a[1]) / sp : 0, aN = Math.sqrt(Math.max(0, am * am - aT * aT));
    let dir = Math.atan2(v[1], v[0]) * R2D;
    const flat = Math.abs(aT) < 0.02 * Math.max(am, 1e-9);
    const state = flat ? "turning at constant speed" : aT > 0 ? "speeding up" : "slowing down";
    k.setRO(`<div><h2>At <i>t</i> = ${t.toFixed(2)} s</h2><div class="ro-big" style="margin-top:8px;font-size:22px"><span class="c2">${M("<b>r</b>")}</span> = <span class="num c2">${vecH(r[0], r[1], "m")}</span></div></div>
      <div class="ro-rows">
      <div class="row"><span class="c3">${M("<b>v</b> = d<b>r</b>/d<i>t</i>")}</span> = <span class="v c3">${vecH(v[0], v[1], "m/s")}</span><span class="lbl">tangent to the path</span></div>
      <div class="row">${M("|<b>v</b>|")} = <span class="v c3">${sf(sp)} m/s</span> at <span class="v">${sf(dir)}°</span><span class="lbl">speed √(v<sub>x</sub>² + v<sub>y</sub>²) and direction from +x</span></div>
      <div class="row"><span class="c1">${M("<b>a</b> = d<b>v</b>/d<i>t</i>")}</span> = <span class="v c1">${vecH(a[0], a[1], "m/s²")}</span><span class="lbl">|a| = ${sf(am)} m/s²</span></div>
      <div class="row">${M("<i>a</i><sub>∥</sub>")} = <span class="v">${sf(aT)} m/s²</span>, ${M("<i>a</i><sub>⟂</sub>")} = <span class="v">${sf(aN)} m/s²</span><span class="lbl">part of a along v changes the speed; the perpendicular part turns the path</span></div>
      </div>
      <div class="landmark${flat ? " hit" : ""}"><div class="big">${flat ? M("<b>a</b> ⟂ <b>v</b>") : M(`<i>a</i><sub>∥</sub> ${aT > 0 ? "&gt;" : "&lt;"} 0`)}: ${state}</div><div class="note">${flat ? "At this instant the acceleration is perpendicular to the velocity, so the speed is not changing; the acceleration only bends the path." : aT > 0 ? "The acceleration has a component along the velocity, so the particle is gaining speed as well as turning." : "The acceleration has a component against the velocity, so the particle is losing speed as well as turning."}${mode === "boat" ? " Here a = (4.00 î − 2.00 ĵ) m/s² is constant, yet the path still curves." : ""}</div></div>
      <p class="narr">${mode === "boat" ? "Drag t to 3.00 s to match the worked example, then try the ellipse: find where the speed is momentarily constant." : "Play and watch the amber arrow: it always points toward the inside of the bend."}</p>`);
  });
};

/* ---------- projectile motion ---------- */
L["mech-projectile"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d;
  let v0 = 13, th = 40, h0 = 2.1, tau = 0, comp = true, hold = 0;
  const restart = () => { tau = 0; hold = 0; };
  k.slider(`<i>v</i><sub>0</sub> (m/s)`, 1, 40, 0.5, v0, v => { v0 = v; restart(); }, v => v.toFixed(1));
  k.slider(`θ<sub>0</sub>`, 0, 90, 1, th, v => { th = v; restart(); }, v => v + "°");
  k.slider(`height <i>h</i><sub>0</sub> (m)`, 0, 30, 0.1, h0, v => { h0 = Math.round(v * 10) / 10; restart(); }, v => v.toFixed(1) + " m");
  k.button("Launch", restart);
  k.check("show 90° − θ", comp, v => comp = v);
  const flight = (V, TH, H) => { const vx = V * Math.cos(TH * D2R), vy = V * Math.sin(TH * D2R); const T = (vy + Math.sqrt(vy * vy + 2 * G * H)) / G; return { vx, vy, T, R: vx * T, H: H + (vy > 0 ? vy * vy / (2 * G) : 0), ta: vy > 0 ? vy / G : 0 }; };
  k.loop(dt => {
    const f = flight(v0, th, h0), none = f.T < 1e-9;
    const cth = 90 - th, showC = comp && h0 === 0 && th > 0 && th < 90 && th !== 45;
    const g2 = showC ? flight(v0, cth, 0) : null;
    const rate = none ? 1 : f.T / clamp(f.T, 1.4, 4);
    if (!none) { if (tau < f.T) tau = Math.min(f.T, tau + (k.reduce ? f.T : dt * rate)); }
    c.begin();
    const xmax = Math.max(f.R, g2 ? g2.R : 0, 1) * 1.16, ymax = Math.max(f.H, g2 ? g2.H : 0, 1) * 1.18;
    const P = k.plot(c, { xmin: -xmax * 0.08, xmax, ymin: -ymax * 0.1, ymax, equal: true, pad: { l: 40, r: 16, t: 20, b: 26 }, xlabel: "x (m)", ylabel: "y (m)" });
    P.grid(); P.axes();
    const g = c.g;
    // ground and launch tower
    d.line(P.left, P.Y(0), P.left + P.width, P.Y(0), C.muted, 2);
    if (h0 > 0) { const tw = Math.max(6, Math.min(18, P.X(0) - P.left - 4)); d.rect(P.X(0) - tw, P.Y(h0), tw, P.Y(0) - P.Y(h0), k.alpha(C.line2, .6), C.line2); }
    const traj = (F2, H, col, w, dash, upto) => { g.save(); g.strokeStyle = col; g.lineWidth = w; if (dash) g.setLineDash(dash); g.beginPath(); const n = 160; for (let i = 0; i <= n; i++) { const tt = upto * i / n, x = F2.vx * tt, y = H + F2.vy * tt - G * tt * tt / 2; i ? g.lineTo(P.X(x), P.Y(y)) : g.moveTo(P.X(x), P.Y(y)); } g.stroke(); g.restore(); };
    if (g2) { traj(g2, 0, k.alpha(C.amber, .45), 1.8, [3, 5], g2.T); const ax = g2.vx * g2.ta; d.text(`${cth}°`, P.X(ax), P.Y(g2.H) - 8, { font: `12px ${F.mono}`, color: k.alpha(C.amber, .7), align: "center" }); }
    if (!none) {
      traj(f, h0, k.alpha(C.amber, .35), 2, [6, 5], f.T);
      traj(f, h0, C.amber, 3, null, tau);
      // strobe
      const n = 10; for (let i = 1; i < n; i++) { const tt = f.T * i / n; if (tt > tau) break; d.circle(P.X(f.vx * tt), P.Y(h0 + f.vy * tt - G * tt * tt / 2), 3, k.alpha(C.amber, .55)); }
      // apex and range
      if (f.vy > 0 && f.ta < f.T) { const ax = P.X(f.vx * f.ta), ay = P.Y(f.H); d.line(ax, ay, ax, P.Y(0), k.alpha(C.violet, .6), 1.2, [3, 4]); d.circle(ax, ay, 5, C.violet); d.text(`max ${sfT(f.H)} m`, ax + 8, ay - 18, { font: `600 13px ${F.mono}`, color: C.violet, align: ax > P.left + P.width * 0.7 ? "right" : "left" }); }
      if (f.R > 0.01) { const y = P.Y(0) + 26; d.line(P.X(0), y, P.X(f.R), y, C.violet, 1.5); d.line(P.X(0), y - 4, P.X(0), y + 4, C.violet, 1.5); d.line(P.X(f.R), y - 4, P.X(f.R), y + 4, C.violet, 1.5); d.text(`R = ${sfT(f.R)} m`, (P.X(0) + P.X(f.R)) / 2, y + 14, { font: `600 13px ${F.mono}`, color: C.violet, align: "center" }); }
    }
    // ball + velocity components
    const bx = f.vx * tau, by = h0 + f.vy * tau - G * tau * tau / 2, vyN = f.vy - G * tau;
    const X = P.X(bx), Y = P.Y(Math.max(0, by));
    const vref = Math.max(v0, Math.hypot(f.vx, f.vy - G * f.T)), Lv = clamp(Math.min(c.w, c.h) * 0.16, 30, 80) / vref;
    arrowL(k, d, X, Y, X + f.vx * Lv, Y, C.cyan, "v_x", { gap: 14 });
    arrowL(k, d, X, Y, X, Y - vyN * Lv, C.pink, "v_y", { gap: 14 });
    d.circle(X, Y, 7, C.amber, C.ink, 2);
    // readout
    const vyf = f.vy - G * f.T, vimp = Math.hypot(f.vx, vyf), aimp = Math.atan2(-vyf, f.vx) * R2D;
    let big, note, hit = false;
    if (none) { big = `${M("θ<sub>0</sub> = 0, <i>h</i><sub>0</sub> = 0")}: no flight`; note = "Launched horizontally from ground level, the projectile is already on the ground. Raise the launch height or the angle."; hit = true; }
    else if (th === 90) { big = `${M("θ<sub>0</sub> = 90°")}: straight up, <i>R</i> = 0`; note = `No horizontal velocity, so it lands where it started: pure free fall, up ${sf(f.H - h0)} m and back.`; hit = true; }
    else if (h0 === 0 && th === 45) { big = `${M("θ<sub>0</sub> = 45°")}: maximum range`; note = `On level ground sin 2θ₀ = 1, so R = v₀²/g = ${sf(v0 * v0 / G)} m is the farthest this speed can reach.`; hit = true; }
    else if (h0 === 0) { big = M(`<i>R</i> = <span class="fr"><span><i>v</i><sub>0</sub><sup>2</sup> sin 2θ<sub>0</sub></span><span><i>g</i></span></span>`); note = `Level ground. The dashed ${cth}° path lands at the same point, because sin(2 · ${th}°) = sin(2 · ${cth}°); it flies ${th < 45 ? "higher and longer" : "lower and faster"}.`; }
    else { big = M(`<i>h</i><sub>0</sub> + <i>v</i><sub>0<i>y</i></sub><i>t</i> − ½<i>gt</i><sup>2</sup> = 0`); note = `Launched ${sf(h0)} m above the ground, the landing time is the positive root of this quadratic; the level-ground range formula does not apply, and the best angle is below 45°.`; }
    k.setRO(`<div><h2>Range</h2><div class="ro-big" style="margin-top:8px"><span class="c4">${M("<i>R</i>")}</span> = <span class="num c4">${sf(f.R)} m</span></div></div>
      <div class="ro-rows">
      <div class="row"><span class="c2">${M("<i>v</i><sub>0<i>x</i></sub> = <i>v</i><sub>0</sub>cos θ<sub>0</sub>")}</span> = <span class="v c2">${sf(f.vx)} m/s</span><span class="lbl">constant for the whole flight</span></div>
      <div class="row"><span class="c3">${M("<i>v<sub>y</sub></i> = <i>v</i><sub>0</sub>sin θ<sub>0</sub> − <i>gt</i>")}</span> = <span class="v c3">${sf(vyN)} m/s</span><span class="lbl">now, at t = ${tau.toFixed(2)} s (starts at ${sf(f.vy)} m/s)</span></div>
      <div class="row">${M("<i>T</i><sub>flight</sub>")} = <span class="v">${sf(f.T)} s</span><span class="lbl">positive root of y(t) = 0</span></div>
      <div class="row"><span class="c4">${M("<i>h</i><sub>max</sub>")}</span> = <span class="v c4">${sf(f.H)} m</span><span class="lbl">${f.vy > 0 ? `apex at t = ${sf(f.ta)} s, where v<sub>y</sub> = 0` : "no rise: launched horizontally, so the top is the launch point"}</span></div>
      <div class="row">${M("|<b>v</b>|<sub>impact</sub>")} = <span class="v">${none ? "—" : sf(vimp) + " m/s"}</span><span class="lbl">${none ? "" : `${sf(aimp)}° below the horizontal`}</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${big}</div><div class="note">${note}</div></div>
      <p class="narr">Set h₀ = 0 and sweep θ: 45° gives the longest range, and the dashed path shows the complementary angle landing at the same spot.</p>`);
  });
};

/* ---------- uniform and nonuniform circular motion ---------- */
L["mech-circular"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d;
  let r = 2, vSet = 4, aT = 0, s = 4, ang = 0;
  k.slider(`<span class="c2"><i>r</i></span> (m)`, 0.5, 5, 0.1, r, v => r = v, v => v.toFixed(1) + " m");
  const vs = k.slider(`<span class="c3"><i>v</i></span> (m/s)`, 0.5, 10, 0.1, vSet, v => { vSet = v; s = v; }, v => v.toFixed(1) + " m/s");
  const sA = k.slider(`<span class="c4"><i>a</i><sub>T</sub></span> (m/s²)`, -2, 2, 0.1, aT, v => { aT = Math.round(v * 10) / 10; if (s === 0 && aT > 0) s = 0.001; }, v => (v > 0 ? "+" : "") + (Math.abs(v) < 1e-9 ? "0.0" : v.toFixed(1).replace("-", MI)));
  k.button("Reset speed", () => { s = vSet; });
  k.button("Uniform", () => { aT = 0; sA.set(0); s = vSet; }, "btn ghost");
  const VMAX = 12;
  k.loop(dt => {
    if (aT !== 0 && s > 0) { s += aT * dt; if (s > VMAX) s = vSet; if (s <= 0) s = 0; }
    ang += (s / r) * dt * (k.reduce ? 0.3 : 1);
    c.begin(); const { w, h } = c;
    const cx = w / 2, cy = 44 + (h - 44) / 2, R = Math.max(40, Math.min(w * 0.4, (h - 44) * 0.37));
    d.circle(cx, cy, R, null, k.alpha(C.cyan, .35), 1.5);
    d.circle(cx, cy, 3.5, C.muted);
    const ox = cx + R * Math.cos(ang), oy = cy - R * Math.sin(ang);
    const ux = Math.cos(ang), uy = -Math.sin(ang);          // outward radial (screen)
    const tx = -Math.sin(ang), ty = -Math.cos(ang);          // tangent, counterclockwise travel (screen)
    const ac = s * s / r, am = Math.hypot(ac, aT);
    d.line(cx, cy, ox, oy, C.cyan, 2);
    { const lab = `r = ${r.toFixed(1)} m`, tw = d.width(lab, `600 13px ${F.mono}`), off = Math.abs(ux) * tw / 2 + 12; d.text(lab, (cx + ox) / 2 + uy * off, (cy + oy) / 2 - ux * off, { font: `600 13px ${F.mono}`, color: C.cyan, align: "center", base: "middle" }); }
    const Lv = R * 1.1 / VMAX, La = R * 0.75 / 8;
    const cap = (len, max) => Math.min(len, max);
    const lc = cap(ac * La, R * 0.8), lt = cap(Math.abs(aT) * La, R * 0.8);
    // accelerations
    arrowL(k, d, ox, oy, ox - ux * lc, oy - uy * lc, C.amber, "a_c", { mid: true });
    if (aT !== 0 && s > 0) {
      const sg = Math.sign(aT);
      const sx0 = ox + ux * 11, sy0 = oy + uy * 11;
      arrowL(k, d, sx0, sy0, sx0 + tx * lt * sg, sy0 + ty * lt * sg, C.violet, "a_T", { at: [sx0 + tx * lt * sg / 2 + ux * 16, sy0 + ty * lt * sg / 2 + uy * 16] });
      d.line(ox, oy, ox - ux * lc + tx * lt * sg, oy - uy * lc + ty * lt * sg, k.alpha(C.text, .6), 1.5, [4, 3]);
    }
    if (s > 0) arrowL(k, d, ox, oy, ox + tx * s * Lv, oy + ty * s * Lv, C.pink, "v", { gap: 14 });
    d.circle(ox, oy, 8, C.text, C.ink, 2);
    if (ac * La > R * 0.8) d.text("centripetal arrow capped", 14, h - 14, { font: `11px ${F.sans}`, color: C.faint });
    // readout
    const om = s / r, T = s > 0 ? 2 * Math.PI * r / s : Infinity, phi = Math.atan2(Math.abs(aT), ac) * R2D;
    const uniform = aT === 0, rest = s === 0;
    k.setRO(`<div><h2>Centripetal acceleration</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${M("<i>a</i><sub>c</sub>")}</span> = <span class="num c1">${sf(ac)} m/s²</span></div></div>
      <div class="ro-rows">
      <div class="row"><span class="c3">${M("<i>v</i>")}</span> = <span class="v c3">${sf(s)} m/s</span><span class="lbl">${uniform ? "constant speed" : rest ? "at rest" : "speed right now (changing)"}</span></div>
      <div class="row">${M(`<i>a</i><sub>c</sub> = <span class="fr"><span><i>v</i><sup>2</sup></span><span><i>r</i></span></span>`)} = <span class="v c1">${sf(ac)} m/s²</span><span class="lbl">toward the centre · ${sf(ac / G)} g</span></div>
      <div class="row">${M("ω = <i>v</i>/<i>r</i>")} = <span class="v">${sf(om)} rad/s</span><span class="lbl">angular frequency</span></div>
      <div class="row">${M("<i>T</i> = 2π<i>r</i>/<i>v</i>")} = <span class="v">${rest ? "—" : sf(T) + " s"}</span><span class="lbl">${rest ? "no motion, no period" : `frequency f = 1/T = ${sf(1 / T)} Hz`}</span></div>
      <div class="row">${M("|<b>a</b>| = √(<i>a</i><sub>c</sub><sup>2</sup> + <i>a</i><sub>T</sub><sup>2</sup>)")} = <span class="v">${sf(am)} m/s²</span><span class="lbl">${uniform ? "equal to a<sub>c</sub>: no tangential part" : `tilted ${sf(phi)}° from the inward radius, ${aT > 0 ? "ahead of" : "behind"} the centre line`}</span></div>
      </div>
      <div class="landmark${uniform || rest ? " hit" : ""}">${rest ? `<div class="big">${M("<i>v</i> = 0")}: stopped</div><div class="note">The tangential deceleration has brought it to rest; with no speed there is no centripetal acceleration. Press Reset speed.</div>`
        : uniform ? `<div class="big">Uniform: ${M("<b>a</b> ⟂ <b>v</b>")}, pointing at the centre</div><div class="note">The speed is constant, but the direction of v changes all the time, so the object accelerates at v²/r = ${sf(ac)} m/s² toward the centre.</div>`
        : `<div class="big">Nonuniform: ${M(`<i>a</i><sub>T</sub> = ${sf(aT)} m/s²`)}</div><div class="note">The object is ${aT > 0 ? "speeding up" : "slowing down"}, so the total acceleration (dashed) tilts ${aT > 0 ? "forward" : "backward"} from the centre. As v ${aT > 0 ? "grows" : "falls"}, a<sub>c</sub> = v²/r ${aT > 0 ? "grows" : "shrinks"} with its square.</div>`}</div>
      <p class="narr">Double v and watch a<sub>c</sub> quadruple; double r at the same speed and it halves.</p>`);
  });
};

/* ---------- relative motion: river crossing ---------- */
L["mech-relative"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d;
  let W = 120, u = 1.2, vb = 3, phi = 0, tau = 0;
  const restart = () => { tau = 0; };
  k.slider("width <i>w</i> (m)", 20, 200, 5, W, v => { W = v; restart(); }, v => v + " m");
  k.slider(`current <span class="c3"><i>v</i><sub>WG</sub></span>`, 0, 4, 0.1, u, v => { u = Math.round(v * 10) / 10; restart(); }, v => v.toFixed(1) + " m/s");
  k.slider(`boat <span class="c2"><i>v</i><sub>BW</sub></span>`, 0.5, 5, 0.1, vb, v => { vb = Math.round(v * 10) / 10; restart(); }, v => v.toFixed(1) + " m/s");
  const hs = k.slider("heading φ (upstream +)", -80, 80, 0.1, phi, v => { phi = v; restart(); }, v => (v < 0 ? MI : "") + Math.abs(v).toFixed(1) + "°");
  k.button("Straight across", () => { phi = 0; hs.set(0); restart(); });
  k.button("Land opposite", () => { const s = u / vb; phi = s < 1 ? Math.round(Math.asin(s) * R2D * 10) / 10 : Math.round(Math.asin(vb / u) * R2D); phi = Math.min(80, phi); hs.set(phi); restart(); }, "btn ghost");
  k.loop((dt, now) => {
    const p = phi * D2R;
    const bx = -vb * Math.sin(p), by = vb * Math.cos(p);    // boat rel water (x downstream, y across)
    let gx = bx + u; const gy = by;                            // boat rel ground
    if (Math.abs(gx) < 5e-3) gx = 0;
    const tc = W / gy, drift = gx * tc, gs = Math.hypot(gx, gy);
    const dur = clamp(tc / 10, 2.5, 5);
    tau = Math.min(tc, tau + (k.reduce ? tc : dt * tc / dur));
    c.begin(); const { w, h } = c;
    const lo = Math.min(0, drift), hi = Math.max(0, drift);
    const sc = Math.min((h - 64) / W, (w - 60) / (hi - lo + W * 0.25));   // px per m, same on both axes
    const band = W * sc, top = Math.max(30, (h - band) / 2), bot = top + band;
    const x0 = w / 2 - (lo + hi) / 2 * sc;                        // start point (px)
    // banks and water
    d.rect(0, top, w, band, k.alpha(C.cyan, .05));
    d.line(0, top, w, top, C.muted, 2); d.line(0, bot, w, bot, C.muted, 2);
    d.text("far bank", 10, top - 9, { font: `600 11px ${F.ui}`, color: C.faint });
    d.text("start bank", 10, bot + 20, { font: `600 11px ${F.ui}`, color: C.faint });
    // current markers
    if (u > 0) { const off = ((now * u * sc * 0.6) % 90); for (let yy = top + band * 0.18; yy < bot - 10; yy += band * 0.32) for (let xx = -90 + off; xx < w; xx += 90) d.arrow(xx, yy, xx + 24, yy, k.alpha(C.pink, .35), 1.5); }
    d.text("downstream →", w - 10, top - 9, { font: `600 11px ${F.ui}`, color: k.alpha(C.pink, .8), align: "right" });
    // target and landing
    d.circle(x0, top, 5, null, C.muted, 1.5);
    const lx = x0 + drift * sc;
    const g = c.g; g.save(); g.beginPath(); g.rect(0, top - 2, w, band + 4); g.clip();
    d.line(x0, bot, lx, top, k.alpha(C.amber, .45), 1.5, [5, 5]);
    const cx = x0 + gx * tau * sc, cy = bot - gy * tau * sc;
    d.line(x0, bot, cx, cy, C.amber, 2.5);
    g.restore();
    if (lx >= 0 && lx <= w) d.circle(lx, top, 5, C.amber);
    d.text(Math.abs(drift) < 0.05 ? "lands opposite" : `drift ${sfT(Math.abs(drift))} m ${drift > 0 ? "downstream" : "upstream"}`, (() => { const tw = d.width("drift 000 m downstream", `600 12px ${F.mono}`) / 2 + 6; return clamp(lx, tw, w - tw); })(), top + 16, { font: `600 12px ${F.mono}`, color: C.amber, align: "center" });
    // boat at current point, vector triangle
    const bxp = clamp(cx, 12, w - 12), byp = cy;
    const Lv = clamp(band * 0.12, 16, 34);
    g.save(); g.translate(bxp, byp); g.rotate(Math.atan2(-by, bx) + Math.PI / 2 + Math.PI);
    g.fillStyle = C.text; g.strokeStyle = C.ink; g.lineWidth = 1.5; g.beginPath(); g.moveTo(0, 13); g.quadraticCurveTo(7, 2, 6, -9); g.lineTo(-6, -9); g.quadraticCurveTo(-7, 2, 0, 13); g.closePath(); g.fill(); g.stroke(); g.restore();
    const ex = bxp + bx * Lv, ey = byp - by * Lv;
    arrowL(k, d, bxp, byp, ex, ey, C.cyan, "", { w: 2.5 });
    if (u > 0) arrowL(k, d, ex, ey, ex + u * Lv, ey, C.pink, "", { w: 2.5 });
    arrowL(k, d, bxp, byp, bxp + gx * Lv, byp - gy * Lv, C.amber, "", { w: 3 });
    // legend chips
    const lg = [[C.cyan, "boat rel. water"], [C.pink, "current"], [C.amber, "boat rel. ground"]];
    let lyy = bot + 20; let lxx = w - 10; for (let i = lg.length - 1; i >= 0; i--) { const tw = d.width(lg[i][1], `11px ${F.sans}`); d.text(lg[i][1], lxx, lyy, { font: `11px ${F.sans}`, color: lg[i][0], align: "right" }); lxx -= tw + 14; if (lxx < 90) break; }
    // readout
    const trackAng = Math.atan2(gx, gy) * R2D;
    const canLand = u < vb;
    const opposite = Math.abs(drift) < 0.5;
    const across = phi === 0;
    let big, note, hit = false;
    if (opposite) { big = `${M(`sin φ = <i>v</i><sub>WG</sub>/<i>v</i><sub>BW</sub>`)}: lands opposite`; note = `Heading ${sf(Math.abs(phi))}° upstream cancels the current. The crossing speed drops to √(v<sub>BW</sub>² − v<sub>WG</sub>²) = ${sf(gy)} m/s, so it takes longer than heading straight across.`; hit = true; }
    else if (!canLand && phi > 0) { big = `${M("<i>v</i><sub>WG</sub> ≥ <i>v</i><sub>BW</sub>")}: cannot land opposite`; note = `The current is at least as fast as the boat, so no heading cancels it. The least drift comes from sin φ = v<sub>BW</sub>/v<sub>WG</sub> (φ ≈ ${sf(Math.asin(Math.min(1, vb / Math.max(u, 1e-9))) * R2D)}°).`; hit = Math.abs(phi - Math.asin(Math.min(1, vb / u)) * R2D) < 1; }
    else if (across) { big = `${M("φ = 0")}: fastest crossing`; note = `Pointing straight across puts all of the boat's speed into crossing: t = w/v<sub>BW</sub> = ${sf(tc)} s. The current only moves the landing point, ${sf(drift)} m downstream.`; hit = true; }
    else { big = M(`<i>t</i> = <span class="fr"><span><i>w</i></span><span><i>v</i><sub>BW</sub> cos φ</span></span>`); note = `Only the across-river component of the boat's velocity (${sf(gy)} m/s) gets it to the far bank; the current never changes the crossing time.`; }
    k.setRO(`<div><h2>Velocity over the ground</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${M("<i>v</i><sub>BG</sub>")}</span> = <span class="num c1">${sf(gs)} m/s</span></div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c1"><b>v</b><sub>BG</sub></span> = <span class="c2"><b>v</b><sub>BW</sub></span> + <span class="c3"><b>v</b><sub>WG</sub></span>`)}<span class="lbl">tip to tail at the boat: cyan, then pink, gives amber</span></div>
      <div class="row">${M("across")} = <span class="v">${sf(gy)} m/s</span>, ${M("downstream")} = <span class="v">${sf(gx)} m/s</span><span class="lbl">components of the ground velocity</span></div>
      <div class="row">${M("<i>t</i><sub>cross</sub>")} = <span class="v">${sf(tc)} s</span><span class="lbl">width ÷ across component</span></div>
      <div class="row">${M("drift")} = <span class="v c1">${Math.abs(drift) < 0.05 ? "0" : sf(Math.abs(drift)) + " m " + (drift > 0 ? "downstream" : "upstream")}</span><span class="lbl">track ${sf(Math.abs(trackAng))}° ${trackAng >= 0 ? "downstream" : "upstream"} of straight across</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${big}</div><div class="note">${note}</div></div>
      <p class="narr">Try "Land opposite", then raise the current above the boat's speed and see why it becomes impossible.</p>`);
  });
};

/* ---------- forces and free-body diagrams ---------- */
L["mech-forces"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d;
  let mode = "book", m = 1.5, th = 30, Fa = 80, comps = false;
  const sm = k.slider("mass <i>m</i> (kg)", 0.5, 30, 0.5, m, v => m = v, v => v.toFixed(1) + " kg");
  const sth = k.slider("angle θ", 5, 85, 1, th, v => th = v, v => v + "°");
  const sF = k.slider(`pull <span class="c2"><i>F</i></span> (N)`, 0, 400, 5, Fa, v => Fa = v, v => v + " N");
  k.check("components", comps, v => comps = v);
  const setMode = mm => { mode = mm; sth.el.disabled = mm === "book"; sF.el.disabled = mm !== "box"; if (mm === "book") { m = 1.5; sm.set(1.5); } if (mm === "lamp") { m = 5; sm.set(5); th = 30; sth.set(30); } if (mm === "box") { m = 20; sm.set(20); th = 25; sth.set(25); Fa = 80; sF.set(80); } };
  k.modes([["book", "Book on table"], ["lamp", "Hanging lamp"], ["box", "Box pulled at an angle"]], mode, setMode);
  setMode("book");
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const wgt = m * G, t = th * D2R;
    // forces: [name, fx, fy, colour, label]
    let fs = [], lift = false;
    if (mode === "book") fs = [["weight", 0, -wgt, C.pink, "w"], ["normal", 0, wgt, C.violet, "N"]];
    else if (mode === "lamp") { const T = wgt / (2 * Math.sin(t)); fs = [["tension 1", -T * Math.cos(t), T * Math.sin(t), C.cyan, "T_1", { dy: -12 }], ["tension 2", T * Math.cos(t), T * Math.sin(t), C.cyan, "T_2", { dy: -12 }], ["weight", 0, -wgt, C.pink, "w"]]; }
    else { const Fy = Fa * Math.sin(t); const N = Math.max(0, wgt - Fy); lift = Fy > wgt; fs = [["pull", Fa * Math.cos(t), Fy, C.cyan, "F"], ["weight", 0, -wgt, C.pink, "w"], ["normal", 0, N, C.violet, "N"]]; }
    const Sx = fs.reduce((s, f) => s + f[1], 0), Sy = fs.reduce((s, f) => s + f[2], 0);
    const Sxr = Math.abs(Sx) < 1e-9 ? 0 : Sx, Syr = Math.abs(Sy) < 1e-9 ? 0 : Sy;
    const net = Math.hypot(Sxr, Syr);
    // layout: object centre
    const cx = w / 2, cy = 44 + (h - 44) * (mode === "lamp" ? 0.56 : 0.5);
    const maxF = Math.max(...fs.map(f => Math.hypot(f[1], f[2])), net, 1);
    const topY = w < 560 ? 96 : 60, Lmax = Math.min(w * 0.36, (h - 44) * 0.36);
    let s = Lmax / maxF;
    [...fs, [0, Sx, Sy]].forEach(f => { if (f[2] < -1e-9) s = Math.min(s, (h - 24 - cy) / -f[2]); if (f[2] > 1e-9) s = Math.min(s, (cy - topY) / f[2]); if (Math.abs(f[1]) > 1e-9) s = Math.min(s, (w / 2 - 26) / Math.abs(f[1])); });
    // scene
    if (mode === "book") { const yT = cy + 22; d.rect(cx - Math.min(150, w * 0.4), yT, Math.min(300, w * 0.8), 10, k.alpha(C.line2, .7)); d.rect(cx - 34, cy - 12, 68, 34, k.alpha(C.panel3, 1), C.line2); }
    else if (mode === "lamp") { let ax = w * 0.44; if (cy - ax * Math.tan(t) < topY - 4) ax = (cy - topY + 4) / Math.tan(t); const ay = cy - ax * Math.tan(t);
      [-1, 1].forEach(sg => { d.line(cx, cy, cx + sg * ax, ay, k.alpha(C.text, .4), 1.5); d.line(cx + sg * ax - 22, ay, cx + sg * ax + 22, ay, C.muted, 3); for (let i = -20; i <= 16; i += 6) d.line(cx + sg * ax + i, ay, cx + sg * ax + i + 5, ay - 6, C.faint, 1); });
      d.circle(cx, cy + 12, 16, k.alpha(C.amber, .15), C.line2); }
    else { const yF = cy + 24; d.rect(0, yF, w, 8, k.alpha(C.line2, .7)); const bh = 48, bw = 60; d.rect(cx - bw / 2, (lift ? yF - bh - 10 : yF - bh) , bw, bh, k.alpha(C.panel3, 1), C.line2); d.line(cx, cy, cx + Math.cos(t) * w, cy - Math.sin(t) * w, k.alpha(C.text, .35), 1.5); d.text("smooth floor", 10, yF + 24, { font: `11px ${F.sans}`, color: C.faint }); }
    // components
    if (comps) fs.forEach(f => { if (Math.abs(f[1]) > 1e-9 && Math.abs(f[2]) > 1e-9) { d.line(cx, cy, cx + f[1] * s, cy, k.alpha(f[3], .5), 1.5, [4, 3]); d.line(cx + f[1] * s, cy, cx + f[1] * s, cy - f[2] * s, k.alpha(f[3], .5), 1.5, [4, 3]); } });
    // forces from the dot
    fs.forEach(f => arrowL(k, d, cx, cy, cx + f[1] * s, cy - f[2] * s, f[3], f[4], f[5] || {}));
    if (net > 1e-6) arrowL(k, d, cx, cy, cx + Sxr * s, cy - Syr * s, C.amber, "ΣF", { w: 3.5, dy: -12, gap: 16 });
    else d.circle(cx, cy, 13, null, C.amber, 2);
    d.circle(cx, cy, 5, C.text, C.ink, 2);
    d.text("forces drawn from the dot", w - 12, h - 12, { font: `11px ${F.sans}`, color: C.faint, align: "right" });
    // readout
    const rows = fs.map(f => `<div class="row"><span style="color:${f[3]}">${M(`<b>${f[4].replace("_", "</b><sub>") + (f[4].includes("_") ? "</sub>" : "</b>")}`)}</span> = <span class="v" style="color:${f[3]}">${vecH(f[1], f[2], "N")}</span><span class="lbl">${f[0]}, ${sf(Math.hypot(f[1], f[2]))} N</span></div>`).join("");
    let big, note, hit = net < 1e-6;
    if (mode === "book") { big = `${M("<i>N</i> = <i>mg</i>")}: ${M("Σ<b>F</b> = 0")}`; note = `The table pushes up exactly as hard as gravity pulls down, ${sf(wgt)} N. These two forces act on the same book, so they are not a third-law pair.`; }
    else if (mode === "lamp") { big = M(`<i>T</i> = <span class="fr"><span><i>mg</i></span><span>2 sin θ</span></span> = ${sf(wgt / (2 * Math.sin(t)))} N`); note = `The vertical parts of the two tensions share the ${sf(wgt)} N weight; the horizontal parts cancel. At shallow angles each tension is far larger than the weight.`; hit = th <= 10 ? true : hit; }
    else if (lift) { big = `${M("<i>F</i> sin θ &gt; <i>mg</i>")}: the box lifts off`; note = `The pull's upward part exceeds the weight, so the floor no longer pushes (N = 0) and the net force has an upward component.`; hit = true; }
    else { big = `${M("Σ<b>F</b> = <i>F</i> cos θ î")} = ${sf(Sxr)} N`; note = `Vertically, N = mg − F sin θ = ${sf(wgt - Fa * Math.sin(t))} N, less than the weight, and the vertical forces balance. On the smooth floor the horizontal part of the pull is left over as the net force.`; hit = false; }
    k.setRO(`<div><h2>Net force</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${M("|Σ<b>F</b>|")}</span> = <span class="num c1">${sf(net)} N</span></div></div>
      <div class="ro-rows">${rows}
      <div class="row">${M("Σ<i>F<sub>x</sub></i>, Σ<i>F<sub>y</sub></i>")} = <span class="v c1">${sf(Sxr)} N, ${sf(Syr)} N</span><span class="lbl">add the components of every force</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${big}</div><div class="note">${note}</div></div>
      <p class="narr">${mode === "lamp" ? "Lower θ toward 5° and watch the tensions grow while the weight stays the same." : mode === "box" ? "Raise the pull or the angle until the normal force reaches zero." : "Change the mass: the normal force always matches the weight here, but not in the other scenes."}</p>`);
  });
};

/* ---------- Newton's first law: puck on a surface ---------- */
L["mech-newton-1"] = k => {
  const { C, F } = k; const c = k.canvas(); const d = c.d;
  let mu = 0, Fp = 0, hold = false, m = 1, v = 2, x = 0, clock = 0;
  const hist = [], strobe = [];
  const TR = 10;   // track length shown (m)
  k.slider(`friction <span class="c4">μ</span>`, 0, 0.5, 0.01, mu, val => mu = val, val => val.toFixed(2));
  const sF = k.slider("push <i>F</i> (N)", 0, 10, 0.1, Fp, val => Fp = Math.round(val * 10) / 10, val => val.toFixed(1) + " N");
  k.button("Kick", () => { v += 2; });
  const hc = k.check("hold push", hold, val => hold = val);
  k.button("Match friction", () => { Fp = Math.round(mu * m * G * 100) / 100; sF.set(Fp); hold = true; hc.checked = true; if (v < 0.5) v = 2; }, "btn ghost");
  k.button("Stop", () => { v = 0; hold = false; hc.checked = false; }, "btn ghost");
  k.loop(dt => {
    clock += dt;
    const push = hold ? Fp : 0, fmax = mu * m * G;
    let fr;
    if (v > 1e-9) fr = -fmax;
    else fr = push > fmax ? -fmax : -push;          // static friction holds it if the push is small
    let a = (push + fr) / m;
    const vn = v + a * dt;
    if (v > 0 && vn < 0) { v = 0; a = 0; } else v = Math.max(0, vn);
    if (v === 0) { fr = push > fmax ? -fmax : -push; }
    x += v * dt;
    const net = push + fr, netR = Math.abs(net) < 1e-9 ? 0 : net;
    if (!hist.length || clock - hist[hist.length - 1][0] > 0.05) { hist.push([clock, v]); while (hist.length && clock - hist[0][0] > 10) hist.shift(); }
    if (!strobe.length || clock - strobe[strobe.length - 1][0] >= 0.5) { strobe.push([clock, x]); while (strobe.length > 8) strobe.shift(); }
    c.begin(); const { w, h } = c;
    // track (top part)
    const tx0 = 20, tx1 = w - 20, ty = Math.max(120, (h - 30) * 0.46), sc = (tx1 - tx0) / TR;
    const Xp = xx => tx0 + (((xx % TR) + TR) % TR) * sc;
    d.rect(tx0, ty, tx1 - tx0, 10, k.alpha(C.violet, 0.08 + mu * 1.2));
    d.line(tx0, ty, tx1, ty, C.muted, 2);
    for (let i = 0; i <= TR; i++) { d.line(tx0 + i * sc, ty + 10, tx0 + i * sc, ty + 16, C.faint); if (i % 2 === 0) d.text(i + " m", tx0 + i * sc, ty + 30, { font: `10px ${F.mono}`, color: C.faint, align: "center" }); }
    d.text(mu === 0 ? "frictionless ice" : `μ = ${mu.toFixed(2)}`, tx0, 30, { font: `600 12px ${F.ui}`, color: C.violet });
    strobe.forEach(([, sx], i) => d.circle(Xp(sx), ty - 13, 4, k.alpha(C.cyan, 0.15 + 0.07 * i)));
    const px = Xp(x), py = ty - 13;
    d.circle(px, py, 13, C.cyan, C.ink, 2);
    const s = Math.min(18, (ty - 70) / 6);        // px per N
    const sv = 20;                                  // px per m/s
    if (v > 0) arrowL(k, d, px, py - 26, px + Math.min(v * sv, w * 0.4), py - 26, C.pink, "v", { gap: 12 });
    if (Math.abs(fr) > 1e-9) arrowL(k, d, px, ty + 3, px + fr * s, ty + 3, C.violet, "f", { gap: 12 });
    if (push > 0) { arrowL(k, d, px - 16 - push * s, py, px - 16, py, C.green, ""); d.text("F", px - 24 - push * s, py, { font: `italic 600 15px ${F.math}`, color: C.green, align: "right", base: "middle" }); }
    if (netR !== 0) arrowL(k, d, px, ty + 46, px + netR * s, ty + 46, C.amber, "ΣF", { gap: 16 });
    // v(t) graph (bottom)
    const gy0 = ty + 68, gy1 = h - 18, gx0 = 46, gx1 = w - 16;
    if (gy1 - gy0 > 50) {
      const vmax = 2 * Math.ceil(Math.max(4, ...hist.map(q => q[1])) * 1.15 / 2);
      d.line(gx0, gy1, gx1, gy1, C.muted, 1.5); d.line(gx0, gy0, gx0, gy1, C.muted, 1.5);
      d.text("v (m/s)", gx0 + 6, gy0 + 10, { font: `italic 13px ${F.math}`, color: C.muted });
      d.text("last 10 s", gx1, gy1 - 6, { font: `11px ${F.sans}`, color: C.faint, align: "right" });
      [0, vmax / 2, vmax].forEach(q => d.text(String(q), gx0 - 6, gy1 - (gy1 - gy0) * q / vmax, { font: `10px ${F.mono}`, color: C.faint, align: "right", base: "middle" }));
      const g = c.g; g.save(); g.strokeStyle = C.pink; g.lineWidth = 2.5; g.beginPath();
      hist.forEach(([tt, vv], i) => { const X = gx1 - (clock - tt) / 10 * (gx1 - gx0), Y = gy1 - (gy1 - gy0) * vv / vmax; i ? g.lineTo(X, Y) : g.moveTo(X, Y); }); g.stroke(); g.restore();
    }
    // readout
    const glide = v > 0 && netR === 0, rest = v === 0 && netR === 0;
    k.setRO(`<div><h2>Net force on the puck</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${M("Σ<i>F</i>")}</span> = <span class="num c1">${sf(netR)} N</span></div></div>
      <div class="ro-rows">
      <div class="row"><span class="c3">${M("<i>v</i>")}</span> = <span class="v c3">${sf(v)} m/s</span><span class="lbl">puck mass m = ${m.toFixed(2)} kg</span></div>
      <div class="row">${M("<i>F</i><sub>push</sub>")} = <span class="v" style="color:var(--green)">${sf(push)} N</span><span class="lbl">${hold ? "held on" : "not pushing"}</span></div>
      <div class="row"><span class="c4">${M("<i>f</i>")}</span> = <span class="v c4">${sf(fr)} N</span><span class="lbl">${v > 0 ? "kinetic: μmg against the motion" : fr !== 0 ? "static: just enough to stop it sliding" : "none"} (μmg = ${sf(fmax)} N)</span></div>
      <div class="row">${M("<i>a</i> = Σ<i>F</i>/<i>m</i>")} = <span class="v">${sf(netR / m)} m/s²</span><span class="lbl">velocity changes only when the net force is not zero</span></div>
      </div>
      <div class="landmark${glide || rest ? " hit" : ""}">${glide ? `<div class="big">${M("Σ<b>F</b> = 0")} and moving: constant velocity</div><div class="note">${push > 0 ? "The push exactly balances friction, so the puck is in dynamic equilibrium." : "No force acts along the track, so nothing changes the velocity."} Equal strobe spacing and a flat v(t) line show the first law.</div>`
        : rest ? `<div class="big">${M("Σ<b>F</b> = 0")} at rest: static equilibrium</div><div class="note">${push > 0 ? "The push is smaller than μmg, so static friction matches it and the puck stays put." : "Nothing pushes, so it stays at rest. Press Kick."}</div>`
        : `<div class="big">${M("Σ<b>F</b> ≠ 0")}: velocity ${netR > 0 ? "increasing" : "decreasing"}</div><div class="note">${netR < 0 ? "Friction is the unbalanced force slowing the puck. Set μ to 0 and it would glide forever." : "The push exceeds friction, so the puck speeds up."}</div>`}</div>
      <p class="narr">Kick the puck with μ = 0, then add friction; then press Match friction to keep it gliding with forces present. (Static and kinetic μ are taken equal here.)</p>`);
  });
};
})();
