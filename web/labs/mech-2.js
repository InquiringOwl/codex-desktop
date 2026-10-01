/* ============ Labs: Mechanics, kinematics in one dimension (displacement, velocity, acceleration, constant acceleration, integration, free fall) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const MI = "−";
// 3 significant figures, U+2212 minus, no exponent notation
const s3 = (v, sf = 3) => {
  if (!isFinite(v)) return "—";
  const a = Math.abs(v); if (a < 1e-9) return "0";
  let s = a >= 10 ** sf ? Math.round(a).toLocaleString("en-US") : a.toPrecision(sf); if (s.includes("e")) s = Math.round(+s).toLocaleString("en-US");
  if (/e/.test(s)) s = String(+a.toFixed(6));
  return (v < 0 ? MI : "") + s;
};
const niceStep = (span, n) => { const raw = span / n, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };
const range = (f, a, b, n = 240) => { let lo = Infinity, hi = -Infinity; for (let i = 0; i <= n; i++) { const y = f(a + (b - a) * i / n); if (isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y); } } return [lo, hi]; };
const padRange = ([lo, hi], minSpan = 1, fr = .12) => { if (hi - lo < minSpan) { const m = (lo + hi) / 2; lo = m - minSpan / 2; hi = m + minSpan / 2; } const p = (hi - lo) * fr; return [lo - p, hi + p]; };
const UI = (F, size = 12, wt = 600) => `${wt} ${size}px ${F.ui}`;
const IT = (F, size = 14) => `italic ${size}px ${F.math}`;
// label on a dark plate
function plate(k, d, s, x, y, color, o = {}){
  const font = o.font || UI(k.F, 12), w = d.width(s, font), al = o.align || "left";
  const x0 = al === "center" ? x - w / 2 : al === "right" ? x - w : x;
  d.rr(x0 - 4, y - 11, w + 8, 16, 3, k.alpha(k.C.ink, .8));
  d.text(s, x0, y + 1, { font, color, base: "alphabetic" });
}
// a stacked panel: plot occupying rows [top, bottom] of the canvas
function panel(k, c, o){
  const [ylo, yhi] = o.yr, P = k.plot(c, { xmin: o.xr[0], xmax: o.xr[1], ymin: ylo, ymax: yhi, pad: { l: o.l || 46, r: o.r || 14, t: o.top, b: c.h - o.bottom }, xstep: o.xstep || niceStep(o.xr[1] - o.xr[0], 6), ystep: o.ystep || niceStep(yhi - ylo, 3) });
  const d = c.d;
  d.rect(P.left, P.top, P.width, P.height, k.alpha(k.C.panel2 || "#111", .35));
  P.grid();
  // horizontal axis at y = 0 (or the lower edge), vertical axis at the left
  const y0 = clamp(0, ylo, yhi);
  d.line(P.left, P.Y(y0), P.left + P.width, P.Y(y0), k.C.muted, 1.2);
  d.line(P.left, P.top, P.left, P.top + P.height, k.C.muted, 1.2);
  const sy = o.ystep || niceStep(yhi - ylo, 3);
  for (let v = Math.ceil(ylo / sy) * sy; v <= yhi + 1e-9; v += sy) { if (P.Y(v) < P.top + 6 || P.Y(v) > P.top + P.height - 2) continue; d.text(s3(Math.abs(v) < 1e-9 ? 0 : +v.toFixed(6), 3).replace(/\.0+$/, ""), P.left - 5, P.Y(v), { font: `10.5px ${k.F.mono}`, color: k.C.faint, align: "right", base: "middle" }); }
  if (o.tlabels) { const sx = o.xstep || niceStep(o.xr[1] - o.xr[0], 6); for (let v = Math.ceil(o.xr[0] / sx) * sx; v <= o.xr[1] + 1e-9; v += sx) d.text(String(+v.toFixed(3)), P.X(v), P.top + P.height + 13, { font: `10.5px ${k.F.mono}`, color: k.C.faint, align: "center" }); d.text("t (s)", P.left + P.width, P.top + P.height + 26, { font: IT(k.F, 13), color: k.C.muted, align: "right" }); }
  if (o.name) plate(k, d, o.name, P.left + 6, P.top + 13, o.color, { font: IT(k.F, 14) });
  return P;
}

/* ---------------- Position, displacement & distance ---------------- */
L["mech-displacement"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const TRIPS = { back: [2, 7, -2], out: [-6, 5], lap: [-4, 6, -4], zig: [0, 6, 2, 8, -3] };
  let trip = TRIPS.back.slice(), s = 0, tt = 0, run = !k.reduce;
  const SPEED = 3; // m/s
  const legs = () => { const out = []; let t = 0; for (let i = 1; i < trip.length; i++) { const len = Math.abs(trip[i] - trip[i - 1]); out.push({ a: trip[i - 1], b: trip[i], t0: t, t1: t + len / SPEED }); t += len / SPEED; } return out; };
  const total = () => { const l = legs(); return l.length ? l[l.length - 1].t1 : 0; };
  const posAt = t => { for (const g of legs()) if (t <= g.t1) return g.a + (g.b - g.a) * (g.t1 > g.t0 ? clamp((t - g.t0) / (g.t1 - g.t0), 0, 1) : 1); return trip[trip.length - 1]; };
  const distAt = t => legs().reduce((acc, g) => acc + (t >= g.t1 ? Math.abs(g.b - g.a) : t > g.t0 ? Math.abs(g.b - g.a) * (t - g.t0) / (g.t1 - g.t0) : 0), 0);
  const random = () => { const n = 3 + Math.floor(Math.random() * 3); const r = [Math.round(Math.random() * 12 - 6)]; while (r.length < n) { const x = Math.round(Math.random() * 18 - 9); if (Math.abs(x - r[r.length - 1]) >= 2) r.push(x); } return r; };
  const sel = k.select("Trip", [["back", "Out and back"], ["out", "One way"], ["lap", "Round trip"], ["zig", "Zigzag"], ["rnd", "Random"]], "back", v => { trip = v === "rnd" ? random() : TRIPS[v].slice(); tt = 0; run = !k.reduce; if (k.reduce) tt = total(); });
  k.button("Walk", () => { tt = 0; run = !k.reduce; if (k.reduce) tt = total(); });
  k.button("Next leg", () => { run = false; const l = legs().find(g => g.t1 > tt + 1e-9); tt = l ? l.t1 : total(); }, "btn ghost");
  k.button("New random trip", () => { sel.set("rnd"); trip = random(); tt = 0; run = !k.reduce; if (k.reduce) tt = total(); }, "btn-s");
  k.slider("origin at", -5, 5, 1, 0, v => s = v, v => (v < 0 ? MI + Math.abs(v) : v) + " m");
  k.loop(dt => {
    const T = total();
    if (run) { tt += dt; if (tt >= T) { tt = T; run = false; } }
    c.begin(); const { w, h } = c;
    const mL = 24, mR = 24, X = wv => mL + (wv + 10) / 20 * (w - mL - mR);
    const topH = Math.max(170, Math.min(h * .46, 250)), yL = Math.round(66 + (topH - 170) * .35);
    const w0 = trip[0], wn = posAt(tt), x0 = w0 - s, xn = wn - s, dx = wn - w0, dist = distAt(tt);
    // number line
    d.text("POSITION ON THE LINE (m)", mL, 20, { font: UI(F, 11), color: C.faint });
    d.line(X(-10) - 6, yL, X(10) + 6, yL, C.muted, 1.5);
    for (let wv = -10; wv <= 10; wv++) {
      const xv = wv - s, big = xv % 2 === 0;
      d.line(X(wv), yL - (big ? 6 : 3), X(wv), yL + (big ? 6 : 3), xv === 0 ? C.text : C.muted, xv === 0 ? 2 : 1);
      if (big && (w > 420 || xv % 4 === 0)) d.text(xv < 0 ? MI + Math.abs(xv) : String(xv), X(wv), yL + 19, { font: `11px ${F.mono}`, color: xv === 0 ? C.text : C.faint, align: "center" });
    }
    if (Math.abs(s) <= 10) d.text("origin", X(s), yL + 32, { font: UI(F, 10), color: C.muted, align: "center" });
    // path legs (distance) below the line
    const done = legs(); const gap = Math.min(18, (topH - yL - 56) / Math.max(1, done.length));
    done.forEach((g, i) => {
      const f = tt >= g.t1 ? 1 : tt > g.t0 ? (tt - g.t0) / (g.t1 - g.t0) : 0; const y = yL + 46 + i * gap;
      d.line(X(g.a), y, X(g.b), y, k.alpha(C.pink, .22), 2);
      if (f > 0) { const xe = g.a + (g.b - g.a) * f; if (Math.abs(X(xe) - X(g.a)) > 9) d.arrow(X(g.a), y, X(xe), y, C.pink, 2.2); else d.line(X(g.a), y, X(xe), y, C.pink, 2.2); }
    });
    // displacement arrow above the line
    d.circle(X(w0), yL, 7, null, C.cyan, 2);
    if (Math.abs(dx) > 0.05) { if (Math.abs(X(wn) - X(w0)) > 10) d.arrow(X(w0), yL - 24, X(wn), yL - 24, C.amber, 3); else d.line(X(w0), yL - 24, X(wn), yL - 24, C.amber, 3); plate(k, d, `Δx = ${s3(dx, 2)} m`, (X(w0) + X(wn)) / 2, yL - 34, C.amber, { align: "center" }); }
    d.circle(X(wn), yL, 8, C.cyan); d.circle(X(wn), yL, 8, null, C.ink, 1.5);
    // position–time graph
    const Tm = Math.max(1, T), [lo, hi] = padRange([Math.min(...trip) - s, Math.max(...trip) - s], 4, .1);
    const P = panel(k, c, { top: topH + 8, bottom: h - 34, xr: [0, Tm], yr: [lo, hi], name: "x(t) (m)", color: C.cyan, tlabels: true, ystep: niceStep(hi - lo, 4) });
    P.fn(t => posAt(t) - s, k.alpha(C.cyan, .25), 2, 0, T, [4, 4]);
    if (tt > 0) P.fn(t => posAt(t) - s, C.cyan, 2.5, 0, tt);
    P.line(0, x0, Tm, x0, k.alpha(C.cyan, .5), 1, [3, 4]);
    if (Math.abs(dx) > .05) { P.clip(() => d.arrow(P.X(tt), P.Y(x0), P.X(tt), P.Y(xn), C.amber, 2)); }
    P.point(tt, xn, C.cyan, 5);
    // readout
    const finished = !run && tt >= T - 1e-9, back = finished && Math.abs(dx) < 1e-9, straight = Math.abs(dist - Math.abs(dx)) < 1e-6;
    let lm, note;
    if (back) { lm = `<span class="c1">Δ<i>x</i> = 0</span>, &nbsp;<span class="c3">distance = ${s3(dist, 2)} m</span>`; note = "Back where it started: the displacement is zero however far it walked."; }
    else if (finished && straight) { lm = M(`<span class="c3"><i>x</i><sub>total</sub></span> = |<span class="c1">Δ<i>x</i></span>| = ${s3(dist, 2)} m`); note = "It never turned around, so the distance equals the size of the displacement."; }
    else if (finished) { lm = M(`|<span class="c1">Δ<i>x</i></span>| = ${s3(Math.abs(dx), 2)} m &lt; <span class="c3">${s3(dist, 2)} m</span>`); note = "Every reversal adds distance but takes away from the displacement."; }
    else { lm = M(`|Δ<i>x</i>| ≤ <i>x</i><sub>total</sub>`); note = "The amber arrow joins start to now. The pink legs record every metre walked."; }
    k.setRO(`<div><h2>Displacement</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${s3(dx, 2)}</span> <span style="font-size:.5em;color:var(--muted)">m${Math.abs(dx) > 1e-9 ? (dx > 0 ? ", positive direction" : ", negative direction") : ""}</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`<i>x</i><sub>0</sub>`)} = <span class="v c2">${s3(x0, 2)} m</span><span class="lbl">starting position, measured from the origin</span></div>
        <div class="row">${M(`<i>x</i>`)} = <span class="v c2">${s3(xn, 2)} m</span><span class="lbl">position now (t = ${s3(tt, 2)} s)</span></div>
        <div class="row">${M(`Δ<i>x</i> = <i>x</i> − <i>x</i><sub>0</sub>`)} = <span class="v c1">${s3(dx, 2)} m</span><span class="lbl">final minus initial: route does not matter</span></div>
        <div class="row">${M(`<i>x</i><sub>total</sub> = Σ|Δ<i>x</i><sub><i>i</i></sub>|`)} = <span class="v c3">${s3(dist, 2)} m</span><span class="lbl">distance traveled: every leg counts as positive</span></div>
      </div>
      <div class="landmark${finished ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Move the origin: every position changes, the displacement does not.</p>`);
  });
};

/* ---------------- Average & instantaneous velocity ---------------- */
L["mech-velocity"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const CV = {
    car: { name: "x = 1.80t²", T: 6, f: t => 1.8 * t * t, df: t => 3.6 * t },
    cart: { name: "x = 2.0 + 6.0t − 1.5t²", T: 5, f: t => 2 + 6 * t - 1.5 * t * t, df: t => 6 - 3 * t },
    osc: { name: "x = 4.0 sin(0.80t)", T: 8, f: t => 4 * Math.sin(.8 * t), df: t => 3.2 * Math.cos(.8 * t) }
  };
  let cv = CV.car, t0 = 1, Dt = 2, shrink = false, P = null, drag = false;
  const st0 = k.slider("<i>t</i>₀", 0, cv.T - .05, .01, t0, v => { t0 = v; fix(); }, v => v.toFixed(2) + " s");
  const sdt = k.slider(`<span class="c4">Δ<i>t</i></span>`, .01, 3, .01, Dt, v => { Dt = v; shrink = false; fix(); }, v => v.toFixed(2) + " s");
  k.select("Motion", [["car", "car leaving a light"], ["cart", "cart that turns back"], ["osc", "oscillating glider"]], "car", v => { cv = CV[v]; st0.el.max = cv.T - .05; t0 = Math.min(t0, cv.T - .05); st0.set(t0); fix(); });
  k.button("Shrink Δt → 0", () => { if (k.reduce) { Dt = .01; sdt.set(Dt); } else shrink = true; });
  k.button("Reset Δt", () => { shrink = false; Dt = Math.min(2, cv.T - t0); sdt.set(Dt); }, "btn ghost");
  function fix(){ Dt = clamp(Dt, .01, Math.max(.01, cv.T - t0)); sdt.set(Dt); }
  const setT = e => { if (!P) return; const p = c.xy(e); t0 = clamp(Math.round(P.inv(p.x, p.y).x * 100) / 100, 0, cv.T - .05); st0.set(t0); fix(); };
  c.cv.style.cursor = "ew-resize";
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setT(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setT(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  k.loop(dt => {
    if (shrink) { Dt = Math.max(.01, Dt * Math.exp(-1.6 * dt)); sdt.set(+Dt.toFixed(2)); if (Dt <= .0100001) shrink = false; }
    c.begin(); const { w, h } = c;
    const yr = padRange(range(cv.f, 0, cv.T), 2, .14);
    const pt = w > 560 ? 34 : 56;
    P = panel(k, c, { top: pt, bottom: h - 36, xr: [0, cv.T], yr, l: 44, name: cv.name, color: C.cyan, tlabels: true, xstep: 1 });
    d.text("x (m)", P.left + 4, pt - 10, { font: IT(F, 13), color: C.muted });
    const x0 = cv.f(t0), t1 = t0 + Dt, x1 = cv.f(t1), vb = (x1 - x0) / Dt, v = cv.df(t0);
    P.fn(cv.f, C.cyan, 3);
    // tangent (amber) and secant (pink), extended across the plot
    P.line(0, x0 - v * t0, cv.T, x0 + v * (cv.T - t0), C.amber, 2, [7, 5]);
    P.line(0, x0 - vb * t0, cv.T, x0 + vb * (cv.T - t0), C.pink, 2.2);
    // Δt run (violet) and Δx rise
    P.line(t0, x0, t1, x0, C.violet, 3);
    P.line(t1, x0, t1, x1, k.alpha(C.pink, .8), 1.5, [3, 3]);
    if (P.X(t1) - P.X(t0) > 22) plate(k, d, "Δt", (P.X(t0) + P.X(t1)) / 2, P.Y(x0) + (x1 >= x0 ? 17 : -9), C.violet, { align: "center" });
    if (Math.abs(P.Y(x1) - P.Y(x0)) > 22) plate(k, d, "Δx", P.X(t1) + 6, (P.Y(x0) + P.Y(x1)) / 2 + 4, C.pink);
    P.point(t0, x0, C.amber, 6); P.point(t1, x1, C.pink, 5.5);
    const close = Math.abs(vb - v) <= Math.max(.005 * Math.abs(v), .02);
    const wide = w > 520;
    plate(k, d, `secant slope v̄ = ${s3(vb)} m/s`, w - 16, 20, C.pink, { align: "right", font: UI(F, wide ? 13 : 11.5) });
    plate(k, d, `tangent slope v = ${s3(v)} m/s`, w - 16, 38, C.amber, { align: "right", font: UI(F, wide ? 13 : 11.5) });
    const lm = close ? `<span class="c3">v̄</span> ≈ <span class="c1">v(t₀)</span> = ${s3(v)} m/s` : M(`<span class="c3"><i>v̄</i></span> − <span class="c1"><i>v</i></span> = ${s3(vb - v)} m/s`);
    const note = close ? `With Δt = ${Dt.toFixed(2)} s the secant is almost the tangent: the average velocity has converged on the instantaneous velocity.` : Math.abs(v) < .005 ? "The tangent is horizontal: the object is momentarily at rest here, turning around." : "Shrink Δt and watch the pink secant swing onto the amber tangent.";
    k.setRO(`<div><h2>Average velocity</h2><div class="ro-big" style="margin-top:8px"><span class="num c3">${s3(vb)}</span> <span style="font-size:.5em;color:var(--muted)">m/s over Δt = ${Dt.toFixed(2)} s</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`Δ<i>x</i> = <i>x</i>(${s3(t1)}) − <i>x</i>(${s3(t0)})`)} = <span class="v">${s3(x1 - x0)} m</span><span class="lbl">displacement over the interval</span></div>
        <div class="row">${M(`<span class="c3"><i>v̄</i></span> = Δ<i>x</i> / <span class="c4">Δ<i>t</i></span>`)} = <span class="v c3">${s3(vb)} m/s</span><span class="lbl">slope of the secant</span></div>
        <div class="row">${M(`<span class="c1"><i>v</i>(<i>t</i>₀)</span> = d<i>x</i>/d<i>t</i>`)} = <span class="v c1">${s3(v)} m/s</span><span class="lbl">slope of the tangent at t₀ = ${t0.toFixed(2)} s: the limit as Δt → 0</span></div>
      </div>
      <div class="landmark${close || Math.abs(v) < .005 ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Drag on the graph to move t₀. Try the cart that turns back: at its highest point the tangent is flat and v = 0.</p>`);
  });
};

/* ---------------- Acceleration: x, v, a linked ---------------- */
L["mech-acceleration"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PR = {
    bike: { T: 8, x: t => 6 * t * t - .5 * t ** 3, v: t => 12 * t - 1.5 * t * t, a: t => 12 - 3 * t, lab: "motorbike: v = 12.0t − 1.50t²" },
    ball: { T: 2.6, x: t => 1.5 + 12 * t - 4.9 * t * t, v: t => 12 - 9.8 * t, a: () => -9.8, lab: "ball thrown up: a = −9.80 m/s²" },
    rev: { T: 3, x: t => 2 * t ** 3 - 9 * t * t + 12 * t, v: t => 6 * t * t - 18 * t + 12, a: t => 12 * t - 18, lab: "x = 2.0t³ − 9.0t² + 12t" },
    osc: { T: 2 * Math.PI, x: t => 2 * Math.cos(2 * t), v: t => -4 * Math.sin(2 * t), a: t => -8 * Math.cos(2 * t), lab: "oscillator: x = 2.0 cos 2t" }
  };
  let pr = PR.bike, tt = 1, run = false;
  k.select("Motion", [["bike", "motorbike test run"], ["ball", "ball thrown up"], ["rev", "particle that reverses"], ["osc", "oscillator"]], "bike", v => { pr = PR[v]; st.el.max = pr.T; tt = Math.min(tt, pr.T); st.set(tt); run = false; bp.textContent = "Play"; });
  const bp = k.button("Play", () => { if (k.reduce) { tt = pr.T; st.set(tt); return; } run = !run; if (run && tt >= pr.T - 1e-6) tt = 0; bp.textContent = run ? "Pause" : "Play"; });
  k.button("Next v = 0", () => { run = false; bp.textContent = "Play"; const n = 800; let found = null; for (let i = 1; i <= n; i++) { const a = tt + (pr.T - tt) * (i - 1) / n, b = tt + (pr.T - tt) * i / n; if (pr.v(b) === 0 || pr.v(a) * pr.v(b) < 0) { found = b; break; } } if (found === null) for (let i = 1; i <= n; i++) { const a = pr.T * (i - 1) / n, b = pr.T * i / n; if (Math.abs(pr.v(a)) < 1e-9 && i === 1) { found = 0; break; } if (pr.v(a) * pr.v(b) < 0 || pr.v(b) === 0) { found = b; break; } }
    if (found !== null) { let lo = Math.max(0, found - pr.T / n), hi = found; if (pr.v(lo) * pr.v(hi) < 0) { for (let j = 0; j < 50; j++) { const m = (lo + hi) / 2; if (pr.v(lo) * pr.v(m) <= 0) hi = m; else lo = m; } found = (lo + hi) / 2; } tt = found; st.set(tt); } }, "btn ghost");
  const st = k.slider("<i>t</i>", 0, pr.T, .01, tt, v => { tt = v; run = false; bp.textContent = "Play"; }, v => v.toFixed(2) + " s");
  k.loop(dt => {
    if (run) { tt += dt * pr.T / 6; if (tt >= pr.T) { tt = pr.T; run = false; bp.textContent = "Play"; } st.set(+tt.toFixed(2)); }
    c.begin(); const { w, h } = c;
    const x = pr.x(tt), v = pr.v(tt), a = pr.a(tt);
    // track with the moving object
    const xr = padRange(range(pr.x, 0, pr.T), 2, .08), vmax = Math.max(1e-6, ...range(t => Math.abs(pr.v(t)), 0, pr.T)), amax = Math.max(1e-6, ...range(t => Math.abs(pr.a(t)), 0, pr.T));
    const tl = 46, tr = w - 14, TX = xv => tl + (xv - xr[0]) / (xr[1] - xr[0]) * (tr - tl), ty = 44;
    d.text(pr.lab, tl, 18, { font: IT(F, 14), color: C.muted });
    d.line(tl, ty, tr, ty, C.line2, 2);
    const ox = TX(x), vs = (tr - tl) * .22 / vmax, as = (tr - tl) * .22 / amax;
    if (Math.abs(v * vs) > 3) d.arrow(ox, ty - 12, ox + v * vs, ty - 12, C.pink, 2.5);
    if (Math.abs(a * as) > 3) d.arrow(ox, ty + 12, ox + a * as, ty + 12, C.amber, 2.5);
    d.circle(ox, ty, 7, C.cyan);
    // three stacked graphs
    const top = w > 560 ? 70 : 88, bottom = h - 34, gap = 10, ph = (bottom - top - 2 * gap) / 3;
    const mk = (i, f, name, color) => panel(k, c, { top: top + i * (ph + gap), bottom: top + i * (ph + gap) + ph, xr: [0, pr.T], yr: padRange(range(f, 0, pr.T), 1, .12), name, color, tlabels: i === 2, xstep: niceStep(pr.T, 6) });
    const Ps = [mk(0, pr.x, "x (m)", C.cyan), mk(1, pr.v, "v (m/s)", C.pink), mk(2, pr.a, "a (m/s²)", C.amber)];
    // speeding-up bands (v·a > 0) shaded behind all three graphs
    const N = 300;
    Ps.forEach(P => { let s0 = null; for (let i = 0; i <= N; i++) { const t = pr.T * i / N, su = pr.v(t) * pr.a(t) > 1e-9; if (su && s0 === null) s0 = t; if ((!su || i === N) && s0 !== null) { d.rect(P.X(s0), P.top, P.X(t) - P.X(s0), P.height, k.alpha(C.text, .09)); s0 = null; } } });
    Ps[0].fn(pr.x, C.cyan, 2.5); Ps[1].fn(pr.v, C.pink, 2.5); Ps[2].fn(pr.a, C.amber, 2.5);
    // slope of v at the cursor = a
    const P1 = Ps[1], span = pr.T * .12; P1.line(tt - span, v - a * span, tt + span, v + a * span, k.alpha(C.amber, .9), 1.8, [5, 4]);
    Ps.forEach(P => d.line(P.X(tt), P.top, P.X(tt), P.top + P.height, k.alpha(C.text, .5), 1));
    Ps[0].point(tt, x, C.cyan, 4.5); Ps[1].point(tt, v, C.pink, 4.5); Ps[2].point(tt, a, C.amber, 4.5);
    if (w > 560) plate(k, d, "shaded: speeding up (v·a > 0)", w - 16, 18, C.text, { align: "right", font: UI(F, 11) }); else plate(k, d, "shaded: speeding up (v·a > 0)", 46, top - 6, C.text, { font: UI(F, 10.5) });
    const va = v * a, still = Math.abs(v) < 1e-3, noA = Math.abs(a) < 1e-3;
    let lm, note, hit = true;
    if (still && !noA) { lm = M(`<span class="c3"><i>v</i> = 0</span>, &nbsp; <span class="c1"><i>a</i> = ${s3(a)} m/s<sup>2</sup></span>`); note = "Momentarily at rest, yet the acceleration is not zero: the velocity is still changing at this instant."; }
    else if (noA && !still) { lm = M(`<span class="c1"><i>a</i> = 0</span>: speed is at an extreme`); note = "The velocity graph is flat here, so the speed has stopped growing (or shrinking) for an instant."; }
    else if (va > 0) { lm = `<span class="c3">v</span> and <span class="c1">a</span> same sign: speeding up`; note = "The acceleration points along the motion, so the speed grows."; hit = false; }
    else if (va < 0) { lm = `<span class="c3">v</span> and <span class="c1">a</span> opposite signs: slowing down`; note = "The acceleration points against the motion, so the speed falls, whichever sign a has."; hit = false; }
    else { lm = "at rest, no acceleration"; note = "Nothing is changing at this instant."; }
    k.setRO(`<div><h2>Acceleration now</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${s3(a)}</span> <span style="font-size:.5em;color:var(--muted)">m/s² at t = ${tt.toFixed(2)} s</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>x</i></span>`)} = <span class="v c2">${s3(x)} m</span><span class="lbl">position</span></div>
        <div class="row">${M(`<span class="c3"><i>v</i></span> = d<i>x</i>/d<i>t</i>`)} = <span class="v c3">${s3(v)} m/s</span><span class="lbl">slope of the x graph</span></div>
        <div class="row">${M(`<span class="c1"><i>a</i></span> = d<i>v</i>/d<i>t</i>`)} = <span class="v c1">${s3(a)} m/s²</span><span class="lbl">slope of the v graph (amber dashed tangent)</span></div>
        <div class="row">${M(`<i>v</i> · <i>a</i>`)} = <span class="v">${s3(va)}</span><span class="lbl">positive: speeding up · negative: slowing down</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Pick the ball thrown up and stop at v = 0: the acceleration is still −9.80 m/s².</p>`);
  });
};

/* ---------------- Constant acceleration: four equations ---------------- */
L["mech-const-accel"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const T = 8;
  let x0 = 0, v0 = 20, a = -4, tt = 0, run = false, skip = "t";
  const sx = k.slider(`<span class="c2"><i>x</i>₀</span>`, -20, 20, 1, x0, v => x0 = v, v => (v < 0 ? MI + -v : v) + " m");
  const sv = k.slider(`<span class="c2"><i>v</i>₀</span>`, -20, 30, .5, v0, v => v0 = v, v => s3(v, 3).replace(/^0$/, "0") + " m/s");
  const sa = k.slider(`<span class="c3"><i>a</i></span>`, -8, 8, .1, a, v => a = v, v => (Math.abs(v) < 1e-9 ? "0" : k.fmt(v, 1)) + " m/s²");
  k.button("Drive", () => { if (k.reduce) { tt = T; st.set(T); } else { tt = 0; run = true; } });
  k.button("Show t = 8 s", () => { run = false; tt = T; st.set(T); }, "btn ghost");
  const st = k.slider("<i>t</i>", 0, T, .01, tt, v => { tt = v; run = false; }, v => v.toFixed(2) + " s");
  k.select("Not given, not needed", [["t", "time t"], ["dx", "displacement x − x₀"], ["v", "final velocity v"], ["a", "acceleration a"]], skip, v => skip = v);
  const xf = t => x0 + v0 * t + .5 * a * t * t, vf = t => v0 + a * t;
  function car(x, y, dir, col){ const L2 = 30, H2 = 13; d.rr(x - L2 / 2, y - H2 - 5, L2, H2, 4, col); d.rr(x + (dir >= 0 ? 2 : -12), y - H2 - 11, 10, 7, 2, k.alpha(col, .8)); d.circle(x - 9, y - 4, 4, C.ink, C.text, 1.5); d.circle(x + 9, y - 4, 4, C.ink, C.text, 1.5); }
  k.loop(dt => {
    if (run) { tt += dt * 1.6; if (tt >= T) { tt = T; run = false; } st.set(+tt.toFixed(2)); }
    c.begin(); const { w, h } = c;
    const x = xf(tt), v = vf(tt);
    // track
    const xr = padRange(range(xf, 0, T).map((q, i) => i ? Math.max(q, x0) : Math.min(q, x0)), 10, .06);
    const tl = 20, tr = w - 20, TX = q => tl + (q - xr[0]) / (xr[1] - xr[0]) * (tr - tl), ty = 64;
    d.line(tl, ty, tr, ty, C.line2, 2);
    const stp = niceStep(xr[1] - xr[0], w < 460 ? 4 : 7);
    for (let q = Math.ceil(xr[0] / stp) * stp; q <= xr[1]; q += stp) { d.line(TX(q), ty, TX(q), ty + 5, C.muted); d.text((q < 0 ? MI : "") + Math.abs(+q.toFixed(3)), TX(q), ty + 17, { font: `10.5px ${F.mono}`, color: C.faint, align: "center" }); }
    d.text("x (m)", tr, ty + 30, { font: IT(F, 13), color: C.muted, align: "right" });
    d.line(TX(x0), ty - 30, TX(x0), ty + 4, C.cyan, 1.5, [3, 3]);
    plate(k, d, "x₀", TX(x0), ty - 33, C.cyan, { align: "center" });
    car(TX(x), ty, v === 0 ? v0 : v, C.amber);
    const vs = (tr - tl) * .12 / 30;
    const vl = clamp(v * vs, -70, 70); if (Math.abs(vl) > 4) d.arrow(TX(x), ty - 26, TX(x) + vl, ty - 26, k.alpha(C.amber, .9), 2);
    // v(t) graph with the displacement area
    const vr = padRange(range(vf, 0, T), 4, .12); vr[0] = Math.min(vr[0], -1); vr[1] = Math.max(vr[1], 1);
    const P = panel(k, c, { top: ty + 46, bottom: h - 34, xr: [0, T], yr: vr, name: "v(t) (m/s)", color: C.text, tlabels: true, xstep: 1 });
    const tStop = a !== 0 ? -v0 / a : NaN, turns = a !== 0 && tStop > 0 && tStop < tt;
    // signed area from 0 to t
    P.clip(() => { const g = c.g; [[P.top, P.Y(0), .34], [P.Y(0), P.top + P.height, .14]].forEach(([y1, y2, al]) => { g.save(); g.beginPath(); g.rect(P.left, y1, P.width, y2 - y1); g.clip(); g.beginPath(); g.moveTo(P.X(0), P.Y(0)); const n = 120; for (let i = 0; i <= n; i++) { const t = tt * i / n; g.lineTo(P.X(t), P.Y(vf(t))); } g.lineTo(P.X(tt), P.Y(0)); g.closePath(); g.fillStyle = k.alpha(C.violet, al); g.fill(); g.strokeStyle = k.alpha(C.violet, .7); g.lineWidth = 1; g.stroke(); g.restore(); }); });
    if (turns) plate(k, d, "negative area", P.X((tStop + tt) / 2), P.Y(vf((tStop + tt) / 2) / 2) + 4, C.violet, { align: "center" });
    P.fn(vf, C.text, 2.2);
    P.line(0, v0, T, v0, k.alpha(C.cyan, .45), 1, [3, 4]); P.point(0, v0, C.cyan, 5);
    P.point(tt, v, C.amber, 5.5);
    if (a !== 0 && tStop > 0 && tStop < T) { P.point(tStop, 0, C.faint, 4, true); }
    plate(k, d, `slope = a = ${Math.abs(a) < 1e-9 ? "0" : s3(a, 2)} m/s²`, P.left + P.width - 6, P.top + 13, C.pink, { align: "right" });
    plate(k, d, `area = Δx = ${s3(x - x0)} m`, P.left + P.width - 6, P.top + 31, C.violet, { align: "right" });
    // readout: four equations, the one without the skipped quantity highlighted
    const rows = [
      { omits: "dx", f: `<span class="c1"><i>v</i></span> = <span class="c2"><i>v</i>₀</span> + <span class="c3"><i>a</i></span><i>t</i>`, val: `v = ${s3(v)} m/s`, lbl: "no displacement" },
      { omits: "v", f: `<span class="c1"><i>x</i></span> = <span class="c2"><i>x</i>₀</span> + <span class="c2"><i>v</i>₀</span><i>t</i> + ½<span class="c3"><i>a</i></span><i>t</i><sup>2</sup>`, val: `x = ${s3(x)} m`, lbl: "no final velocity" },
      { omits: "t", f: `<span class="c1"><i>v</i></span><sup>2</sup> = <span class="c2"><i>v</i>₀</span><sup>2</sup> + 2<span class="c3"><i>a</i></span>(<i>x</i> − <i>x</i>₀)`, val: `v² = ${s3(v * v)} m²/s²`, lbl: "no time" },
      { omits: "a", f: `<span class="c1"><i>x</i></span> = <span class="c2"><i>x</i>₀</span> + ½(<span class="c2"><i>v</i>₀</span> + <span class="c1"><i>v</i></span>)<i>t</i>`, val: `x = ${s3(x)} m`, lbl: "no acceleration" }
    ];
    const HL = "background:rgba(242,184,75,.09);box-shadow:inset 3px 0 0 var(--amber);padding:4px 6px;border-radius:3px";
    const pick = rows.find(r => r.omits === skip);
    let lm, note, hit = false;
    if (Math.abs(a) < 1e-9) { lm = M(`<i>a</i> = 0: &nbsp;<i>x</i> = <i>x</i>₀ + <i>v</i>₀<i>t</i>`); note = "With no acceleration the v(t) line is flat and the area is a rectangle: constant velocity."; hit = true; }
    else if (turns) { lm = `turned around at <span class="m"><i>t</i> = −<i>v</i>₀/<i>a</i> = ${s3(tStop)} s</span>`; note = "Area below the time axis is negative displacement: the car is now moving back."; hit = true; }
    else { lm = M(pick.f); note = `This is the equation to use when ${({ t: "the time", dx: "the displacement", v: "the final velocity", a: "the acceleration" })[skip]} is neither given nor asked for.`; }
    k.setRO(`<div><h2>Position at t = ${tt.toFixed(2)} s</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${s3(x)}</span> <span style="font-size:.5em;color:var(--muted)">m, moving at ${s3(v)} m/s</span></div></div>
      <div class="ro-rows">${rows.map(r => `<div class="row" style="${r.omits === skip ? HL : "padding:4px 6px"}">${M(r.f)} <span class="v${r.omits === skip ? " c1" : ""}">→ ${r.val}</span><span class="lbl">${r.lbl}${r.omits === skip ? " · the one to use" : ""}</span></div>`).join("")}</div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Set a negative and v₀ positive: the car brakes, stops where the line crosses zero, and reverses.</p>`);
  });
};

/* ---------------- Velocity and position by integration ---------------- */
L["mech-motion-integration"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const T = 6;
  const AF = {
    con: { lab: "a = 2.00", a: t => 2, V: t => 2 * t, X: t => t * t },
    lin: { lab: "a = 6.00 − 1.50t", a: t => 6 - 1.5 * t, V: t => 6 * t - .75 * t * t, X: t => 3 * t * t - .25 * t ** 3 },
    sin: { lab: "a = 3.00 cos 2t", a: t => 3 * Math.cos(2 * t), V: t => 1.5 * Math.sin(2 * t), X: t => .75 * (1 - Math.cos(2 * t)) }
  };
  let af = AF.lin, v0 = 0, N = 12, tt = 4, run = false;
  k.select("<span class=\"c1\"><i>a</i>(<i>t</i>)</span>", [["con", "constant"], ["lin", "linear (fading thrust)"], ["sin", "sinusoidal"]], "lin", v => af = AF[v]);
  const bp = k.button("Play", () => { if (k.reduce) { tt = T; st.set(T); return; } run = !run; if (run && tt >= T - 1e-6) tt = 0; bp.textContent = run ? "Pause" : "Play"; });
  k.button("Refine strips ×2", () => { N = N >= 96 ? 3 : N * 2; sn.set(N); }, "btn ghost");
  const sn = k.slider(`<span class="c4">strips</span>`, 3, 96, 1, N, v => N = v);
  const sv = k.slider(`<i>v</i>₀`, -5, 5, .5, v0, v => v0 = v, v => s3(v) + " m/s");
  const st = k.slider("<i>t</i>", 0, T, .01, tt, v => { tt = v; run = false; bp.textContent = "Play"; }, v => v.toFixed(2) + " s");
  const vEx = t => v0 + af.V(t), xEx = t => v0 * t + af.X(t);
  // left Riemann sums with strip width T/N, partial last strip
  const vEst = t => { const h = T / N; let s = v0; for (let i = 0; i * h < t - 1e-12; i++) s += af.a(i * h) * Math.min(h, t - i * h); return s; };
  const xEst = t => { const h = T / N; let s = 0; for (let i = 0; i * h < t - 1e-12; i++) s += vEst(i * h) * Math.min(h, t - i * h); return s; };
  k.loop(dt => {
    if (run) { tt += dt; if (tt >= T) { tt = T; run = false; bp.textContent = "Play"; } st.set(+tt.toFixed(2)); }
    c.begin(); const { w, h } = c;
    const top = 16, bottom = h - 34, gap = 12, ph = (bottom - top - 2 * gap) / 3;
    const box = i => ({ top: top + i * (ph + gap), bottom: top + i * (ph + gap) + ph });
    const Pa = panel(k, c, { ...box(0), xr: [0, T], yr: padRange(range(af.a, 0, T).map((q, i) => i ? Math.max(q, 0) : Math.min(q, 0)), 1, .12), name: `${af.lab} (m/s²)`, color: C.amber, xstep: 1 });
    const Pv = panel(k, c, { ...box(1), xr: [0, T], yr: padRange(range(vEx, 0, T).map((q, i) => i ? Math.max(q, 0) : Math.min(q, 0)), 1, .12), name: "v(t) (m/s)", color: C.pink, xstep: 1 });
    const Px = panel(k, c, { ...box(2), xr: [0, T], yr: padRange(range(xEx, 0, T).map((q, i) => i ? Math.max(q, 0) : Math.min(q, 0)), 1, .12), name: "x(t) (m)", color: C.cyan, xstep: 1, tlabels: true });
    const hs = T / N;
    // strips under a(t) up to t (violet)
    Pa.clip(() => { for (let i = 0; i * hs < tt - 1e-12; i++) { const t1 = i * hs, t2 = Math.min(tt, t1 + hs), y = af.a(t1); d.rect(Pa.X(t1), Math.min(Pa.Y(0), Pa.Y(y)), Pa.X(t2) - Pa.X(t1), Math.abs(Pa.Y(y) - Pa.Y(0)), k.alpha(C.violet, y >= 0 ? .38 : .22), k.alpha(C.violet, .8)); } });
    Pa.fn(af.a, C.amber, 2.5);
    // strips under v_est(t) up to t
    Pv.clip(() => { for (let i = 0; i * hs < tt - 1e-12; i++) { const t1 = i * hs, t2 = Math.min(tt, t1 + hs), y = vEst(t1); d.rect(Pv.X(t1), Math.min(Pv.Y(0), Pv.Y(y)), Pv.X(t2) - Pv.X(t1), Math.abs(Pv.Y(y) - Pv.Y(0)), k.alpha(C.violet, y >= 0 ? .28 : .16), k.alpha(C.violet, .55)); } });
    Pv.fn(vEx, k.alpha(C.pink, .35), 2, 0, T, [4, 4]); Pv.fn(vEx, C.pink, 2.5, 0, tt);
    Px.fn(xEx, k.alpha(C.cyan, .35), 2, 0, T, [4, 4]); Px.fn(xEx, C.cyan, 2.5, 0, tt);
    // Riemann estimates as dots at strip edges
    for (let i = 0; i * hs <= tt + 1e-9; i++) { const t1 = i * hs; Pv.point(t1, vEst(t1), C.violet, 2.6); Px.point(t1, xEst(t1), C.violet, 2.6); }
    [Pa, Pv, Px].forEach(P => d.line(P.X(tt), P.top, P.X(tt), P.top + P.height, k.alpha(C.text, .5), 1));
    Pv.point(tt, vEx(tt), C.pink, 5); Px.point(tt, xEx(tt), C.cyan, 5);
    const vE = vEst(tt), xE = xEst(tt), vT = vEx(tt), xT = xEx(tt), err = Math.abs(vE - vT), errx = Math.abs(xE - xT);
    const fine = N >= 48;
    const lm = fine ? `strips → integral: error ${s3(err)} m/s` : M(`Δ<i>v</i> ≈ Σ <i>a</i>(<i>t<sub>i</sub></i>) Δ<i>t</i> &nbsp;(${N} strips)`);
    const note = fine ? "With thin strips the sums match the exact integrals closely; in the limit they are equal (Fundamental Theorem of Calculus)." : "Each violet strip adds a(tᵢ)·Δt to the velocity. Double the strips and the error roughly halves.";
    k.setRO(`<div><h2>Velocity at t = ${tt.toFixed(2)} s</h2><div class="ro-big" style="margin-top:8px"><span class="num c3">${s3(vT)}</span> <span style="font-size:.5em;color:var(--muted)">m/s exact</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`<span class="c3"><i>v</i></span> = <i>v</i>₀ + <span class="c4">∫</span><sub>0</sub><sup><i>t</i></sup> <span class="c1"><i>a</i></span> d<i>t</i>′`)} = <span class="v c3">${s3(vT)} m/s</span><span class="lbl">strip sum: ${s3(vE)} m/s (off by ${s3(err)})</span></div>
        <div class="row">${M(`<span class="c2"><i>x</i></span> = <i>x</i>₀ + <span class="c4">∫</span><sub>0</sub><sup><i>t</i></sup> <span class="c3"><i>v</i></span> d<i>t</i>′`)} = <span class="v c2">${s3(xT)} m</span><span class="lbl">strip sum: ${s3(xE)} m (off by ${s3(errx)}), with x₀ = 0</span></div>
        <div class="row">${M(`Δ<i>t</i> = ${s3(T)} / ${N}`)} = <span class="v c4">${s3(hs)} s</span><span class="lbl">strip width (left-endpoint rule)</span></div>
      </div>
      <div class="landmark${fine ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Pick the sinusoidal a(t): its area goes negative, and the velocity falls back.</p>`);
  });
};

/* ---------------- Free fall ---------------- */
L["mech-free-fall"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const g = 9.80;
  let v0 = 12, h0 = 10, tt = 0, run = false;
  const land = () => { if (h0 <= 0 && v0 <= 0) return 0; return (v0 + Math.sqrt(v0 * v0 + 2 * g * h0)) / g; };
  const yf = t => h0 + v0 * t - .5 * g * t * t, vf = t => v0 - g * t;
  const fix = () => { tt = Math.min(tt, land()); };
  k.button("Throw", () => { tt = 0; run = !k.reduce; if (k.reduce) tt = land(); });
  k.button("Jump to apex", () => { run = false; tt = Math.max(0, v0 / g); fix(); }, "btn ghost");
  k.slider(`<i>v</i>₀ (up +)`, -10, 30, .5, v0, v => { v0 = v; fix(); }, v => s3(v) + " m/s");
  k.slider(`<i>y</i>₀`, 0, 60, 1, h0, v => { h0 = v; fix(); }, v => v + " m");
  k.loop(dt => {
    const tl = land();
    if (run) { tt += dt * Math.max(1, tl / 4); if (tt >= tl) { tt = tl; run = false; } }
    tt = clamp(tt, 0, tl);
    c.begin(); const { w, h } = c;
    const ta = Math.max(0, v0 / g), ymax = yf(ta), T1 = Math.max(.5, tl * 1.05), H1 = Math.max(5, ymax * 1.12);
    // graphs on the right; the tower on the left shares the y(t) scale
    const colW = w < 520 ? 64 : 110, top = 30, bot = h - 34, cx = colW / 2 + 8;
    const gl = colW + 56, mid = top + (bot - top) * .56;
    const Py = panel(k, c, { top, bottom: mid - 8, xr: [0, T1], yr: [0, H1], l: gl, name: "y(t) (m)", color: C.cyan });
    const vr = padRange([Math.min(v0, vf(tl), 0), Math.max(v0, 0)], 4, .12);
    const Pv = panel(k, c, { top: mid + 8, bottom: bot, xr: [0, T1], yr: vr, l: gl, name: "v(t) (m/s)", color: C.pink, tlabels: true });
    const Yc = Py.Y, gy = Py.Y(0);
    d.line(4, gy, colW + 14, gy, C.muted, 2);
    d.text("GROUND", cx, gy + 14, { font: UI(F, 10), color: C.faint, align: "center" });
    if (h0 > 0) d.rect(cx - 28, Yc(h0), 16, gy - Yc(h0), k.alpha(C.text, .08), C.line2);
    if (ta > 0) d.line(cx - 22, Yc(ymax), cx + 26, Yc(ymax), k.alpha(C.violet, .8), 1.2, [3, 3]);
    const bx = t => cx + (ta > 0 && t > ta ? 12 : 0);
    for (let t = 0; t <= tt + 1e-9; t += .25) d.circle(bx(t), Yc(yf(t)), 5, k.alpha(C.amber, .28), k.alpha(C.amber, .5), 1);
    const y = yf(tt), v = vf(tt);
    d.circle(bx(tt), Yc(y), 8, C.amber);
    if (Math.abs(v) > .3 && tt < tl - 1e-9) d.arrow(bx(tt) + 14, Yc(y), bx(tt) + 14, Yc(y) - clamp(v * 1.4, -Math.max(0, gy - Yc(y) - 4), 50), C.pink, 2.2);
    if (bot - gy > 60) { d.text("strobe: one image", cx + 4, gy + 34, { font: UI(F, 10), color: C.faint, align: "center" }); d.text("every 0.25 s", cx + 4, gy + 47, { font: UI(F, 10), color: C.faint, align: "center" }); }
    Py.fn(yf, k.alpha(C.cyan, .3), 2, 0, tl, [4, 4]); Py.fn(yf, C.cyan, 2.6, 0, tt);
    Pv.fn(vf, k.alpha(C.pink, .3), 2, 0, tl, [4, 4]); Pv.fn(vf, C.pink, 2.6, 0, tt);
    if (ta > 0 && tl > 0) { Py.line(ta, 0, ta, ymax, k.alpha(C.violet, .8), 1.2, [4, 3]); Pv.line(ta, vr[0], ta, vr[1], k.alpha(C.violet, .8), 1.2, [4, 3]); Py.point(ta, ymax, C.violet, 5); Pv.point(ta, 0, C.violet, 4.5); }
    d.line(bx(tt) + 10, Yc(y), Py.X(tt), Py.Y(y), k.alpha(C.amber, .3), 1, [2, 4]);
    Py.point(tt, y, C.amber, 5); Pv.point(tt, v, C.pink, 5);
    plate(k, d, "slope = −9.80 m/s²", Pv.left + Pv.width - 6, Pv.top + 13, C.pink, { align: "right" });
    const landed = tl > 0 && tt >= tl - 1e-9, atTop = !run && ta > 0 && Math.abs(tt - ta) < 1e-6;
    const vImp = vf(tl);
    let lm, note, hit = true;
    if (tl === 0) { lm = "nothing to throw"; note = "At ground level with no upward speed, the ball has nowhere to fall."; }
    else if (landed) { lm = `<span class="c2">lands at t = ${s3(tl)} s</span>, &nbsp;<span class="c3">v = ${s3(vImp)} m/s</span>`; note = "The positive root of y(t) = 0. The other root is before the throw and has no meaning here."; }
    else if (atTop) { lm = `<span class="c4">apex: v = 0</span>, &nbsp;<span class="c1">a = −9.80 m/s²</span>`; note = "Momentarily at rest, still accelerating downward. That is why it comes back."; }
    else if (v0 <= 0) { lm = M(`<i>v</i>₀ ≤ 0: highest point is the launch`); note = "Dropped or thrown down: the ball only speeds up on its way to the ground."; }
    else { lm = M(`<i>t</i><sub>top</sub> = <i>v</i>₀/<i>g</i>, &nbsp;<i>y</i><sub>max</sub> = <i>y</i>₀ + <i>v</i>₀²/2<i>g</i>`); note = "Wider gaps between strobe images mean higher speed; they bunch up near the top."; hit = false; }
    k.setRO(`<div><h2>Maximum height</h2><div class="ro-big" style="margin-top:8px"><span class="num c4">${s3(ymax)}</span> <span style="font-size:.5em;color:var(--muted)">m at t = ${s3(ta)} s</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>y</i></span> = <i>y</i>₀ + <i>v</i>₀<i>t</i> − 4.90<i>t</i><sup>2</sup>`)} = <span class="v c2">${s3(y)} m</span><span class="lbl">height now (t = ${s3(tt)} s)</span></div>
        <div class="row">${M(`<span class="c3"><i>v</i></span> = <i>v</i>₀ − 9.80<i>t</i>`)} = <span class="v c3">${s3(v)} m/s</span><span class="lbl">${v > 1e-6 ? "rising" : v < -1e-6 ? "falling" : "at rest for an instant"}</span></div>
        <div class="row">${M(`4.90<i>t</i><sup>2</sup>${v0 > 0 ? ` − ${s3(v0)}<i>t</i>` : v0 < 0 ? ` + ${s3(-v0)}<i>t</i>` : ""}${h0 > 0 ? ` − ${s3(h0)}` : ""} = 0`)} ⇒ <span class="v c2">${s3(tl)} s</span><span class="lbl">landing time: positive root of the quadratic</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Double v₀ from the ground: the apex time doubles and the height quadruples.</p>`);
  });
};
})();
