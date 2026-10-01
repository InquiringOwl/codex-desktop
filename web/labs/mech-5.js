/* ============ Labs: Mechanics, part 5 (drag, work, kinetic energy, power, potential energy, conservation of energy) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const MI = "−";
const G0 = 9.80;
const D2R = Math.PI / 180;
// 3 significant figures, U+2212 minus; HTML (uses <sup> for large/small powers)
function sf(v, n = 3){
  if (!isFinite(v)) return "—";
  if (Math.abs(v) < 1e-9) return "0";
  const a = Math.abs(v); let s;
  if (a >= 1e5 || a < 1e-3) { let e = Math.floor(Math.log10(a)); let c = +(v / 10 ** e).toPrecision(n); if (Math.abs(c) >= 10) { c /= 10; e++; } s = c.toFixed(n - 1) + " × 10<sup>" + String(e).replace("-", MI) + "</sup>"; }
  else if (a >= 10 ** n) s = Math.round(+v.toPrecision(n)).toLocaleString("en-US");
  else { s = v.toPrecision(n); if (s.includes("e")) s = Math.round(+s).toLocaleString("en-US"); }
  return s.replace("-", MI);
}
const sfc = (v, n = 3) => sf(v, n).replace(/<sup>/g, "^").replace(/<\/sup>/g, "");
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
const J = v => sf(v) + " J";
// energy bar chart: items [{v, color, label}], drawn in box (x, y, w, h), shared zero line
function bars(k, d, items, x, y, w, h, vmax, vmin = 0){
  const { C, F } = k; const span = Math.max(1e-9, vmax - vmin), Y = v => y + (vmax - v) / span * h;
  const n = items.length, gap = Math.min(18, w / n * 0.3), bw = (w - gap * (n + 1)) / n;
  d.line(x, Y(0), x + w, Y(0), C.muted, 1.2);
  items.forEach((it, i) => {
    const bx = x + gap + i * (bw + gap), y0 = Y(0), y1 = Y(clamp(it.v, vmin, vmax));
    d.rect(bx, Math.min(y0, y1), bw, Math.max(1, Math.abs(y1 - y0)), k.alpha(it.color, .55), it.color, 1.2);
    d.text(it.label, bx + bw / 2, y + h + 15, { font: `italic 600 13px ${F.math}`, color: it.color, align: "center" });
  });
}

/* ---------- Drag force and terminal speed ---------- */
L["mech-drag"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const RHO = 1.21;
  const PRE = {
    belly: { name: "Skydiver, belly-down", m: 85, Cd: 1.00, A: 0.70 },
    head: { name: "Skydiver, head-down", m: 85, Cd: 0.70, A: 0.18 },
    rain: { name: "Raindrop, 2 mm across", m: 4.19e-6, Cd: 0.45, A: 3.14e-6 },
    pong: { name: "Ping-pong ball", m: 2.7e-3, Cd: 0.50, A: 1.26e-3 }
  };
  let model = "quad", pre = "belly", mult = 1, mL = 0.2, b = 0.5, t = 0, run = true;
  const restart = () => { t = 0; run = true; };
  k.modes([["quad", "Quadratic ½CρAv²"], ["lin", "Linear bv"]], model, v => { model = v; vis(); restart(); });
  const sPre = k.select("Object", Object.entries(PRE).map(([key, p]) => [key, p.name]), pre, v => { pre = v; restart(); });
  const sMul = k.slider(`<span class="c3"><i>m</i></span> ×`, 0.25, 4, 0.25, mult, v => { mult = v; restart(); }, v => v.toFixed(2));
  const sM = k.slider(`<span class="c3"><i>m</i></span>`, 0.05, 1, 0.05, mL, v => { mL = v; restart(); }, v => v.toFixed(2) + " kg");
  const sB = k.slider(`<i>b</i>`, 0.1, 2, 0.05, b, v => { b = v; restart(); }, v => v.toFixed(2) + " kg/s");
  k.button("Reset", () => { t = 0; run = false; }, "btn ghost");
  k.button("Drop", restart);
  function vis(){ showCtl([sPre, sMul], model === "quad"); showCtl([sM, sB], model === "lin"); }
  vis();
  k.loop(dt => {
    let m, vT, tc, vf, yf, FD, formula;
    if (model === "quad") {
      const p = PRE[pre]; m = p.m * mult; const cq = 0.5 * p.Cd * RHO * p.A;
      vT = Math.sqrt(m * G0 / cq); tc = vT / G0;
      vf = s => vT * Math.tanh(s / tc); yf = s => vT * tc * Math.log(Math.cosh(s / tc)); FD = v => cq * v * v;
      formula = `½<i>C</i><i>ρ</i><i>A</i><i>v</i><sup>2</sup>, &nbsp;<i>C</i> = ${p.Cd.toFixed(2)}, <i>A</i> = ${sf(p.A)} m²`;
    } else {
      m = mL; vT = m * G0 / b; tc = m / b;
      vf = s => vT * (1 - Math.exp(-s / tc)); yf = s => vT * (s - tc * (1 - Math.exp(-s / tc))); FD = v => b * v;
      formula = `<i>bv</i>, &nbsp;<i>b</i> = ${b.toFixed(2)} kg/s, &nbsp;<i>τ</i> = <i>m</i>/<i>b</i> = ${sf(tc)} s`;
    }
    const Tmax = (model === "quad" ? 4 : 5) * tc, rate = Tmax / 6;
    if (run) { t += dt * rate * (k.reduce ? 6 : 1); if (t >= Tmax) { t = Tmax; run = false; } }
    const v = vf(t), y = yf(t), w = m * G0, Fd = FD(v), a = (w - Fd) / m;
    c.begin(); const W = c.w, H = c.h;
    // falling-object column
    const sw = clamp(W * 0.28, 96, 200), top = 50, bot = H - 14, cx = sw / 2;
    d.rr(6, top, sw - 12, bot - top, 8, k.alpha(C.cyan, .04), C.line, 1);
    const spacing = 34, off = ((y / Math.max(vT, 1e-9)) * 150) % spacing;
    for (let yy = top + 6 - off + spacing; yy < bot - 4; yy += spacing) { d.line(cx - sw * 0.34, yy, cx - sw * 0.2, yy, k.alpha(C.muted, .5), 1); d.line(cx + sw * 0.2, yy + 12, cx + sw * 0.34, yy + 12, k.alpha(C.muted, .5), 1); }
    const cy = top + (bot - top) * 0.45, Lw = clamp((bot - top) * 0.3, 40, 90);
    d.circle(cx, cy, 13, k.alpha(C.pink, .2), C.pink, 2);
    vec(k, d, cx, cy + 14, 0, Lw, C.pink, "mg", { gap: 12 });
    vec(k, d, cx, cy - 14, 0, -Lw * Fd / w, C.cyan, "F", { gap: 12 });
    if (Fd / w > 0.12) d.text("D", cx + 7, cy - 14 - Lw * Fd / w - 7, { font: `italic 600 10px ${F.math}`, color: C.cyan });
    tag(k, d, "DOWN = +", cx, bot - 8, C.faint, "center");
    d.text(`fallen ${sfc(y)} m`, cx, top + 18, { font: `12px ${F.mono}`, color: C.muted, align: "center" });
    // v(t) plot
    const vmax = vT * 1.2;
    const P = k.plot(c, { xmin: 0, xmax: Tmax, ymin: 0, ymax: vmax, pad: { l: sw + 46, r: 16, t: 56, b: 34 }, xlabel: "t (s)", ylabel: "v (m/s)" });
    P.grid(); P.axes();
    P.fn(s => G0 * s, C.violet, 2, 0, Tmax, [6, 5]);
    P.line(0, vT, Tmax, vT, C.amber, 1.8, [7, 5]);
    P.label("v = gt", Math.min(Tmax * 0.5, vmax / G0 * 0.8), G0 * Math.min(Tmax * 0.5, vmax / G0 * 0.8), C.violet, { dx: 8, dy: 4, font: `italic 13px ${F.math}` });
    P.label("vT", Tmax, vT, C.amber, { dx: -6, dy: -8, align: "right", font: `italic 600 14px ${F.math}` });
    P.fn(vf, k.alpha(C.text, .25), 1.5, 0, Tmax);
    if (t > 0) P.fn(vf, C.text, 2.5, 0, t);
    P.point(t, v, C.text, 5.5);
    const hit = v >= 0.99 * vT;
    k.setRO(`<div><h2>Terminal speed</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>v</i><sub>T</sub></span> = <span class="num c1">${sf(vT)}</span> m/s</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c3"><i>mg</i></span>`)} = <span class="v c3">${sf(w)} N</span><span class="lbl">weight, m = ${sf(m)} kg</span></div>
      <div class="row">${M(`<span class="c2"><i>F</i><sub>D</sub></span>`)} = <span class="v c2">${sf(Fd)} N</span><span class="lbl">drag now: ${formula}</span></div>
      <div class="row">${M(`<i>a</i> = (<i>mg</i> − <i>F</i><sub>D</sub>)/<i>m</i>`)} = <span class="v">${sf(a)} m/s²</span><span class="lbl">${sf(100 * a / G0)} % of g</span></div>
      <div class="row">${M("<i>v</i>")} = <span class="v">${sf(v)} m/s</span><span class="lbl">at t = ${sf(t)} s; playback ×${sf(rate, 2)}</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}">${hit ? `<div class="big">${M(`<span class="c2"><i>F</i><sub>D</sub></span> = <span class="c3"><i>mg</i></span> ⇒ <i>a</i> = 0`)}</div><div class="note">Drag has grown to match the weight. The net force is zero, so the speed stays at v<sub>T</sub> = ${sf(vT)} m/s.</div>`
        : `<div class="big">${M(model === "quad" ? `<span class="c1"><i>v</i><sub>T</sub></span> = √<span style="text-decoration:overline">2<i>mg</i>/(<i>ρ</i><i>CA</i>)</span>` : `<span class="c1"><i>v</i><sub>T</sub></span> = <i>mg</i>/<i>b</i>`)}</div><div class="note">Early on the curve follows the violet no-drag line v = gt. As drag grows the acceleration shrinks and v levels off toward v<sub>T</sub>.</div>`}</div>
      <p class="narr">${model === "quad" ? "Compare belly-down with head-down (smaller C·A), then the raindrop. Raise the mass: v<sub>T</sub> grows like √m." : "Double b: v<sub>T</sub> and the time constant τ = m/b both halve."}</p>`);
  });
};

/* ---------- Work ---------- */
L["mech-work"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "const", Fm = 120, th = 30, dd = 6, s = 0, go = true;
  let kS = 200, x1 = 0, x2 = 0.2, xs = 0.2;
  k.modes([["const", "Constant force"], ["spring", "Spring F(x)"]], mode, v => { mode = v; vis(); s = 0; xs = x1; go = true; });
  const sF = k.slider(`<span class="c2"><i>F</i></span>`, 0, 200, 5, Fm, v => Fm = v, v => v + " N");
  const sT = k.slider(`<span class="c4">θ</span>`, 0, 180, 5, th, v => th = v, v => v + "°");
  const sD = k.slider(`<span class="c3"><i>d</i></span>`, 1, 10, 0.5, dd, v => { dd = v; s = Math.min(s, dd); }, v => v.toFixed(1) + " m");
  const sK = k.slider(`<i>k</i>`, 50, 500, 10, kS, v => kS = v, v => v + " N/m");
  const sX1 = k.slider(`<i>x</i><sub>1</sub>`, -0.3, 0.3, 0.01, x1, v => { x1 = v; xs = x1; go = true; }, v => sfc(v, 2) + " m");
  const sX2 = k.slider(`<i>x</i><sub>2</sub>`, -0.3, 0.3, 0.01, x2, v => { x2 = v; xs = x1; go = true; }, v => sfc(v, 2) + " m");
  k.button("Reset", () => { s = 0; xs = x1; go = false; }, "btn ghost");
  k.button("Move", () => { s = 0; xs = x1; go = true; });
  function vis(){ showCtl([sF, sT, sD], mode === "const"); showCtl([sK, sX1, sX2], mode === "spring"); }
  vis();
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    if (mode === "const") {
      if (go) { s += dt * dd / 2.5 * (k.reduce ? 10 : 1); if (s >= dd) { s = dd; go = false; } }
      const cth = Math.cos(th * D2R), sth = Math.sin(th * D2R), Fpar = Fm * cth, Wd = Fpar * s, Wtot = Fpar * dd;
      const gy = clamp(H * 0.42, 150, 250), cw = clamp(W * 0.1, 48, 70), chh = cw * 0.8, x0 = 22, ppm = (W - 2 * x0 - cw) / 10;
      d.line(0, gy, W, gy, C.muted, 1.5);
      tag(k, d, "THE CRATE SLIDES THROUGH d", W - 14, gy + 20, C.faint, "right");
      // ghost at start and at end
      d.rr(x0, gy - chh, cw, chh, 4, null, k.alpha(C.muted, .5), 1);
      d.rr(x0 + dd * ppm, gy - chh, cw, chh, 4, null, k.alpha(C.pink, .45), 1);
      const bx = x0 + s * ppm, bcx = bx + cw / 2, bcy = gy - chh / 2;
      d.rr(bx, gy - chh, cw, chh, 4, k.alpha(C.panel3 || C.panel2, .9), C.text, 1.5);
      // displacement arrow
      if (dd * ppm > 4) vec(k, d, x0 + cw / 2, gy + 34, dd * ppm, 0, C.pink, "d", { w: 2.5 });
      d.text(`${dd.toFixed(1)} m`, x0 + cw / 2 + dd * ppm / 2, gy + 52, { font: `12px ${F.mono}`, color: C.pink, align: "center" });
      // force arrow at angle, and its component along the motion
      const Lf = clamp(Fm * 0.55, 0, Math.min(110, gy - 60));
      if (Fm > 0) {
        vec(k, d, bcx, bcy, Lf * cth, -Lf * sth, C.cyan, "F", { w: 3.2 });
        if (Math.abs(cth) > 0.02) d.arrow(bcx, bcy + 2, bcx + Lf * cth, bcy + 2, k.alpha(C.cyan, .55), 2);
        if (Math.abs(cth) > 0.05) d.line(bcx + Lf * cth, bcy, bcx + Lf * cth, bcy - Lf * sth, k.alpha(C.cyan, .4), 1, [3, 3]);
        const r = 26; c.g.save(); c.g.strokeStyle = C.violet; c.g.lineWidth = 2; c.g.beginPath(); c.g.arc(bcx, bcy, r, -th * D2R, 0); c.g.stroke(); c.g.restore();
        const am = -th * D2R / 2; d.text("θ", bcx + (r + 10) * Math.cos(am), bcy + (r + 10) * Math.sin(am), { font: `italic 600 14px ${F.math}`, color: C.violet, align: "center", base: "middle" });
      }
      // F-parallel vs x graph with work area
      const Fr = 210;
      const P = k.plot(c, { xmin: 0, xmax: 10.5, ymin: -Fr, ymax: Fr, pad: { l: 50, r: 16, t: gy + 70, b: 30 }, xstep: 1, ystep: 100, xlabel: "x (m)", ylabel: "F cos θ (N)" });
      P.grid(); P.axes();
      P.clip(() => { const X0 = P.X(0), X1 = P.X(s), Y0 = P.Y(0), Y1 = P.Y(Fpar); d.rect(Math.min(X0, X1), Math.min(Y0, Y1), Math.abs(X1 - X0), Math.abs(Y1 - Y0), k.alpha(Fpar >= 0 ? C.amber : C.red, .35)); });
      P.line(0, Fpar, dd, Fpar, C.cyan, 2.5);
      P.line(dd, -Fr, dd, Fr, k.alpha(C.pink, .6), 1.2, [4, 4]);
      if (s > 0.3 && Math.abs(Fpar) > 15) d.text(`W = ${sfc(Wd)} J`, P.X(s / 2), P.Y(Fpar / 2), { font: `600 13px ${F.mono}`, color: Fpar >= 0 ? C.amber : C.red, align: "center", base: "middle" });
      const sign = Math.abs(cth) < 1e-9 || Fm === 0 ? 0 : Math.sign(Fpar);
      k.setRO(`<div><h2>Work done by F</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>W</i></span> = <span class="num c1">${sf(Wtot)}</span> J</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>F</i></span> cos <span class="c4">θ</span>`)} = <span class="v c2">${sf(Fpar)} N</span><span class="lbl">the part of F along the motion</span></div>
        <div class="row">${M(`<span class="c2"><i>F</i></span> sin <span class="c4">θ</span>`)} = <span class="v">${sf(Fm * sth)} N</span><span class="lbl">perpendicular part: does no work</span></div>
        <div class="row">${M(`<span class="c1"><i>W</i></span> = <i>Fd</i> cos θ`)} = <span class="v c1">${sf(Fm)} × ${dd.toFixed(1)} × ${sf(cth)}</span><span class="lbl">the shaded area on the graph</span></div>
        <div class="row">${M("so far")} <span class="v">${sf(Wd)} J</span><span class="lbl">after ${sf(s)} m of the ${dd.toFixed(1)} m</span></div>
        </div>
        <div class="landmark${sign <= 0 ? " hit" : ""}">${sign === 0 ? `<div class="big">${M(Fm === 0 ? "<i>F</i> = 0 ⇒ <i>W</i> = 0" : "θ = 90° ⇒ <i>W</i> = 0")}</div><div class="note">${Fm === 0 ? "No force, no work." : "A force perpendicular to the displacement does no work, like the normal force or your hand carrying a bag across a level floor."}</div>`
          : sign < 0 ? `<div class="big">${M("θ &gt; 90° ⇒ <i>W</i> &lt; 0")}</div><div class="note">The force has a component against the motion, so it takes energy out, as kinetic friction does.</div>`
          : `<div class="big">${M("0 ≤ θ &lt; 90° ⇒ <i>W</i> &gt; 0")}</div><div class="note">The force has a component along the motion and feeds energy in. Only F cos θ counts; the rest lifts or presses.</div>`}</div>
        <p class="narr">Sweep θ from 0° to 180°: W falls through zero at 90° and is most negative at 180°.</p>`);
    } else {
      if (go) { const dir = Math.sign(x2 - x1), step = dt * 0.25 * (k.reduce ? 10 : 1); xs += dir * step; if ((dir >= 0 && xs >= x2) || (dir < 0 && xs <= x2)) { xs = x2; go = false; } }
      const Wyou = 0.5 * kS * (x2 * x2 - x1 * x1), Wnow = 0.5 * kS * (xs * xs - x1 * x1);
      // spring picture
      const wallX = 24, top = 54, hh = 60, cyS = top + hh / 2 + 8, xr = W * 0.52, ppm = (W - wallX - 90) / 0.8, bw = 44;
      const X = xm => xr + xm * ppm;
      d.rect(wallX - 10, top, 10, hh + 16, k.alpha(C.muted, .3), C.muted, 1);
      d.line(wallX, top + hh + 16, W - 12, top + hh + 16, C.muted, 1.2);
      const xe = X(xs) - bw / 2, n = 12; c.g.save(); c.g.strokeStyle = C.text; c.g.lineWidth = 1.8; c.g.beginPath(); c.g.moveTo(wallX, cyS);
      for (let i = 1; i < n; i++) { const px = wallX + (xe - wallX) * i / n; c.g.lineTo(px, cyS + (i % 2 ? -10 : 10)); } c.g.lineTo(xe, cyS); c.g.stroke(); c.g.restore();
      d.rr(xe, cyS - bw / 2, bw, bw, 4, k.alpha(C.panel3 || C.panel2, .9), C.text, 1.5);
      d.line(X(0), top - 2, X(0), top + hh + 20, k.alpha(C.green, .7), 1.2, [3, 3]);
      tag(k, d, "RELAXED x = 0", X(0) + 4, top + 4, C.green);
      const Fh = kS * xs, fl = clamp(Fh * 0.5, -80, 80);
      if (Math.abs(fl) > 2) vec(k, d, xe + (fl > 0 ? bw : 0), cyS, fl, 0, C.cyan, "F", { w: 3 });
      // F vs x graph
      const Fmax = 500 * 0.32;
      const P = k.plot(c, { xmin: -0.32, xmax: 0.32, ymin: -Fmax, ymax: Fmax, pad: { l: 52, r: 16, t: top + hh + 40, b: 30 }, xstep: 0.1, ystep: 50, xlabel: "x (m)", ylabel: "F = kx (N)" });
      P.grid(); P.axes();
      P.clip(() => { const N = 60; for (let i = 0; i < N; i++) { const a = x1 + (xs - x1) * i / N, b2 = x1 + (xs - x1) * (i + 1) / N, mid = (a + b2) / 2, contrib = kS * mid * (b2 - a);
        const Xa = P.X(Math.min(a, b2)), Xb = P.X(Math.max(a, b2)), Y0 = P.Y(0), Y1 = P.Y(kS * mid); d.rect(Xa, Math.min(Y0, Y1), Math.max(1, Xb - Xa + .5), Math.abs(Y1 - Y0), k.alpha(contrib >= 0 ? C.amber : C.red, .35)); } });
      P.fn(x => kS * x, C.cyan, 2.5);
      P.line(x1, -Fmax, x1, Fmax, k.alpha(C.muted, .6), 1, [3, 3]); P.line(x2, -Fmax, x2, Fmax, k.alpha(C.pink, .7), 1, [3, 3]);
      P.label("x₁", x1, -Fmax, C.muted, { dx: 4, dy: -6 }); P.label("x₂", x2, -Fmax, C.pink, { dx: 4, dy: -22 });
      P.point(xs, kS * xs, C.cyan, 5);
      const zero = Math.abs(Wyou) < 1e-9;
      k.setRO(`<div><h2>Work you do on the spring</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>W</i></span> = <span class="num c1">${sf(Wyou)}</span> J</div></div>
        <div class="ro-rows">
        <div class="row">${M(`∫<sub><i>x</i><sub>1</sub></sub><sup><i>x</i><sub>2</sub></sup> <i>kx</i> d<i>x</i> = ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>)`)} <span class="v c1">${sf(Wyou)} J</span><span class="lbl">signed area under the line</span></div>
        <div class="row">${M("<i>W</i><sub>spring</sub>")} = <span class="v">${sf(-Wyou)} J</span><span class="lbl">the spring pulls the other way: F<sub>s</sub> = −kx</span></div>
        <div class="row">${M(`<span class="c2"><i>F</i></span> at <i>x</i>`)} = <span class="v c2">${sf(Fh)} N</span><span class="lbl">your force grows with the stretch</span></div>
        <div class="row">${M("so far")} <span class="v">${sf(Wnow)} J</span><span class="lbl">from x₁ to ${sfc(xs, 2)} m</span></div>
        </div>
        <div class="landmark${zero ? " hit" : ""}">${zero ? `<div class="big">${M("|<i>x</i><sub>2</sub>| = |<i>x</i><sub>1</sub>| ⇒ <i>W</i> = 0")}</div><div class="note">Start and end are equally stretched: the positive and negative areas cancel. The spring force is conservative.</div>`
          : `<div class="big">${M("<i>W</i> = area, not <i>kx</i> · <i>x</i>")}</div><div class="note">The force is not constant, so the work is the area of the trapezoid under F = kx, found by integrating. Amber area is positive work, red is negative.</div>`}</div>
        <p class="narr">Stretch from 0 to 0.1 m, then from 0.1 to 0.2 m: the second stretch needs three times the work.</p>`);
    }
  });
};

/* ---------- Kinetic energy and the work-energy theorem ---------- */
L["mech-kinetic"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let m = 40, v0 = 2, Fp = 150, mu = 0.2, dd = 10, tt = 0, go = true;
  const restart = () => { tt = 0; go = true; };
  k.slider(`<i>m</i>`, 5, 100, 1, m, v => { m = v; restart(); }, v => v + " kg");
  k.slider(`<i>v</i><sub>0</sub>`, 0, 10, 0.5, v0, v => { v0 = v; restart(); }, v => v.toFixed(1) + " m/s");
  k.slider(`<span class="c2"><i>F</i></span>`, 0, 300, 5, Fp, v => { Fp = v; restart(); }, v => v + " N");
  k.slider(`<span class="c3"><i>μ</i><sub>k</sub></span>`, 0, 0.5, 0.01, mu, v => { mu = v; restart(); }, v => v.toFixed(2));
  k.slider(`<i>d</i>`, 1, 20, 0.5, dd, v => { dd = v; restart(); }, v => v.toFixed(1) + " m");
  k.button("Reset", () => { tt = 0; go = false; }, "btn ghost");
  k.button("Go", restart);
  k.loop(dt => {
    const f = mu * m * G0, a = (Fp - f) / m, K0 = 0.5 * m * v0 * v0;
    // how far it goes: all the way, stops early, or never starts
    let send = dd, stuck = false, stops = false;
    if (v0 === 0 && Fp <= f) { send = 0; stuck = true; }
    else if (a < 0) { const ss = K0 / (f - Fp); if (ss < dd) { send = ss; stops = true; } }
    let tend;
    if (send === 0) tend = 0; else if (Math.abs(a) < 1e-9) tend = send / v0; else { const disc = Math.max(0, v0 * v0 + 2 * a * send); tend = (-v0 + Math.sqrt(disc)) / a; }
    if (go) { tt += dt * Math.max(tend, 0.01) / 3 * (k.reduce ? 10 : 1); if (tt >= tend) { tt = tend; go = false; } }
    const sNow = send === 0 ? 0 : Math.min(send, v0 * tt + 0.5 * a * tt * tt), vNow = Math.max(0, v0 + a * tt);
    const WF = Fp * sNow, Wf = -f * sNow, Wn = WF + Wf, Kn = Math.max(0, K0 + Wn);
    const WFe = Fp * send, Wfe = -f * send, Kf = Math.max(0, K0 + WFe + Wfe), vfin = Math.sqrt(2 * Kf / m);
    c.begin(); const W = c.w, H = c.h;
    // scene
    const gy = clamp(H * 0.36, 130, 200), x0 = 24, sw = 64, ppm = (W - 2 * x0 - sw) / dd;
    d.rect(0, gy, W, 5, k.alpha(C.text, .08)); d.line(0, gy, W, gy, C.muted, 1.5);
    tag(k, d, "LEVEL SNOW", 14, gy + 20);
    d.line(x0 + sw / 2, gy - 60, x0 + sw / 2, gy + 6, k.alpha(C.muted, .6), 1, [3, 3]);
    const fx = x0 + sw / 2 + dd * ppm; d.line(fx, gy - 60, fx, gy + 6, k.alpha(C.muted, .6), 1, [3, 3]);
    tag(k, d, "START", x0 + sw / 2, gy - 64, C.faint, "center"); tag(k, d, `d = ${dd.toFixed(1)} m`, fx, gy - 64, C.faint, "right");
    const sx = x0 + sNow * ppm, sy = gy - 8;
    d.line(sx - 2, gy - 2, sx + sw + 4, gy - 2, C.muted, 2); d.line(sx + sw + 4, gy - 2, sx + sw + 10, gy - 10, C.muted, 2);
    d.rr(sx, sy - 26, sw, 22, 4, k.alpha(C.violet, .2), C.violet, 1.6);
    d.text(`${m} kg`, sx + sw / 2, sy - 15, { font: `600 11px ${F.mono}`, color: C.violet, align: "center", base: "middle" });
    if (Fp > 0) vec(k, d, sx + sw + 2, sy - 15, clamp(Fp * 0.3, 8, 90), 0, C.cyan, "F", { w: 3 });
    if (f > 0 && (sNow > 0 || !stuck || Fp > 0)) vec(k, d, sx - 2, gy - 3, -clamp(f * 0.3, 8, 90) * (stuck ? Fp / Math.max(f, 1e-9) : 1), 0, C.pink, "f", { w: 3 });
    d.text(`v = ${sfc(vNow)} m/s`, W - 14, 64, { font: `14px ${F.math}`, color: C.violet, align: "right" });
    // bars: W_F, W_f, W_net, ΔK
    const narrow = W < 560, bTop = gy + 42, bH = H - bTop - 36;
    const bw = narrow ? W - 30 : W * 0.46, pH = narrow ? 0 : bH;
    const bh = narrow ? bH * 0.48 : bH;
    const vmx = Math.max(Math.abs(WFe), Math.abs(Wfe), K0, Kf, 1) * 1.1;
    tag(k, d, "WORK BY EACH FORCE = ΔK", 14, bTop - 6);
    bars(k, d, [{ v: WF, color: C.cyan, label: "W_F" }, { v: Wf, color: C.pink, label: "W_f" }, { v: Wn, color: C.amber, label: "W_net" }, { v: Kn - K0, color: C.violet, label: "ΔK" }], 14, bTop + 8, bw - 14, bh - 30, vmx, -vmx);
    // K vs v plot
    const vM = Math.max(v0, vfin, 1) * 1.25, KM = 0.5 * m * vM * vM;
    const pad = narrow ? { l: 54, r: 16, t: bTop + bh + 10, b: 30 } : { l: bw + 60, r: 16, t: bTop, b: 30 };
    if (narrow ? H - pad.t > 90 : pH > 60) {
      const P = k.plot(c, { xmin: 0, xmax: vM, ymin: 0, ymax: KM * 1.05, pad, xlabel: "v (m/s)", ylabel: "K (J)" });
      P.grid(); P.axes(); P.fn(v => 0.5 * m * v * v, C.violet, 2.4, 0, vM);
      P.line(0, K0, v0, K0, k.alpha(C.violet, .6), 1, [3, 3]); P.point(v0, K0, C.violet, 4, true);
      P.line(0, Kn, vNow, Kn, k.alpha(C.amber, .7), 1, [3, 3]); P.point(vNow, Kn, C.amber, 5.5);
    }
    k.setRO(`<div><h2>Final speed</h2><div class="ro-big" style="margin-top:8px"><i>v</i><sub>f</sub> = <span class="num">${sf(vfin)}</span> m/s</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c2"><i>W</i><sub>F</sub></span> = <i>F</i>·<i>s</i>`)} = <span class="v c2">${J(WFe)}</span><span class="lbl">pull along the motion</span></div>
      <div class="row">${M(`<span class="c3"><i>W</i><sub>f</sub></span> = −<i>μ</i><sub>k</sub><i>mg</i>·<i>s</i>`)} = <span class="v c3">${J(Wfe)}</span><span class="lbl">friction ${sf(f)} N against the motion</span></div>
      <div class="row">${M(`<span class="c1"><i>W</i><sub>net</sub></span>`)} = <span class="v c1">${J(WFe + Wfe)}</span><span class="lbl">weight and normal force do no work</span></div>
      <div class="row">${M(`<span class="c4"><i>K</i><sub>i</sub></span> → <span class="c4"><i>K</i><sub>f</sub></span>`)} <span class="v c4">${J(K0)} → ${J(Kf)}</span><span class="lbl">K = ½mv²</span></div>
      </div>
      <div class="landmark${stuck || stops ? " hit" : ""}">${stuck ? `<div class="big">${M("<i>F</i> ≤ <i>μ</i><sub>k</sub><i>mg</i>, &nbsp;<i>v</i><sub>0</sub> = 0")}</div><div class="note">The pull cannot beat friction, so the sled never moves (taking μ<sub>s</sub> ≈ μ<sub>k</sub>). No displacement, no work, no change in K.</div>`
        : stops ? `<div class="big">${M(`<i>K</i><sub>i</sub> = (<i>f</i> − <i>F</i>)<i>s</i> ⇒ <i>s</i> = ${sf(send)} m`)}</div><div class="note">Friction beats the pull, so the net work is negative and removes all ${J(K0)} before the finish. The sled stops short of d.</div>`
        : `<div class="big">${M(`<span class="c1"><i>W</i><sub>net</sub></span> = Δ<span class="c4"><i>K</i></span> = ${J(WFe + Wfe)}`)}</div><div class="note">The amber and violet bars always match. v<sub>f</sub> = √(v<sub>0</sub>² + 2W<sub>net</sub>/m), no acceleration or time needed.</div>`}</div>
      <p class="narr">Set F below friction with v<sub>0</sub> > 0 to watch the sled coast to a stop. Double v<sub>0</sub>: K<sub>i</sub> quadruples.</p>`);
  });
};

/* ---------- Power ---------- */
L["mech-power"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const HP = 746;
  let mode = "stairs", m = 70, h = 9, tS = 10, mM = 800, vM = 1.5, hM = 20, p = 0, go = true;
  const restart = () => { p = 0; go = true; };
  k.modes([["stairs", "Climb stairs"], ["motor", "Motor hoist"]], mode, v => { mode = v; vis(); restart(); });
  const s1 = k.slider(`<i>m</i>`, 40, 120, 1, m, v => { m = v; restart(); }, v => v + " kg");
  const s2 = k.slider(`<i>h</i>`, 3, 30, 3, h, v => { h = v; restart(); }, v => v + " m");
  const s3 = k.slider(`<span class="c3"><i>t</i></span>`, 2, 60, 0.5, tS, v => { tS = v; restart(); }, v => v.toFixed(1) + " s");
  const s4 = k.slider(`<i>m</i>`, 100, 2000, 50, mM, v => { mM = v; restart(); }, v => v + " kg");
  const s5 = k.slider(`<i>v</i>`, 0.2, 5, 0.1, vM, v => { vM = v; restart(); }, v => v.toFixed(1) + " m/s");
  const s6 = k.slider(`<i>h</i>`, 5, 50, 1, hM, v => { hM = v; restart(); }, v => v + " m");
  k.button("Reset", () => { p = 0; go = false; }, "btn ghost");
  k.button("Lift", restart);
  function vis(){ showCtl([s1, s2, s3], mode === "stairs"); showCtl([s4, s5, s6], mode === "motor"); }
  vis();
  k.loop(dt => {
    const st = mode === "stairs", mass = st ? m : mM, H0 = st ? h : hM, T = st ? tS : hM / vM;
    const Fl = mass * G0, Wt = Fl * H0, P = Wt / T;
    if (go) { p += dt / clamp(T, 2, 5) * (k.reduce ? 10 : 1); if (p >= 1) { p = 1; go = false; } }
    c.begin(); const W = c.w, H = c.h;
    const narrow = W < 560, sceneW = narrow ? W : W * 0.44, sTop = 52, sBot = narrow ? sTop + Math.max(170, (H - sTop) * 0.5) : H - 18;
    const x0 = 20, x1 = sceneW - 16, yb = sBot - 10, yt = sTop + 34;
    if (st) {
      const nSt = Math.round(H0 / 0.2 / 3) * 3 || 1, steps = Math.min(nSt, 30), sx = (x1 - x0 - 30) / steps, sy = (yb - yt) / steps;
      c.g.save(); c.g.strokeStyle = C.muted; c.g.lineWidth = 1.5; c.g.beginPath(); c.g.moveTo(x0, yb);
      for (let i = 0; i < steps; i++) { c.g.lineTo(x0 + i * sx, yb - (i + 1) * sy); c.g.lineTo(x0 + (i + 1) * sx, yb - (i + 1) * sy); } c.g.lineTo(x1, yb - steps * sy); c.g.stroke(); c.g.restore();
      const px = x0 + p * steps * sx + sx * 0.5, py = yb - p * (yb - yt) - sy;
      const hH = 6, body = 22;
      d.circle(px, py - body - hH - 12, hH, k.alpha(C.text, .2), C.text, 1.6);
      d.line(px, py - body - 12, px, py - 12, C.text, 2.4); d.line(px, py - 12, px - 5, py, C.text, 2); d.line(px, py - 12, px + 6, py - 4, C.text, 2);
      vec(k, d, px + 16, py - 20, 0, -34, C.cyan, "F = mg", { font: `italic 12px ${F.math}` });
      d.line(x1 - 4, yb, x1 - 4, yt - sy, k.alpha(C.muted, .6), 1, [3, 3]);
      d.text(`h = ${H0} m`, x1 - 8, (yb + yt) / 2, { font: `13px ${F.mono}`, color: C.muted, align: "right" });
    } else {
      const shx = (x0 + x1) / 2, bw = 56, bh = clamp(20 + mass / 40, 24, 64), ytop = yt + 10, ylo = yb - bh, yL = ylo - p * (ylo - ytop - 20);
      d.rect(shx - bw / 2 - 16, yt - 26, bw + 32, 26, k.alpha(C.amber, .15), C.amber, 1.4);
      d.text("MOTOR", shx, yt - 13, { font: `600 11px ${F.ui}`, color: C.amber, align: "center", base: "middle" });
      d.line(shx, yt, shx, yL, C.text, 1.6);
      d.rr(shx - bw / 2, yL, bw, bh, 4, k.alpha(C.panel3 || C.panel2, .9), C.text, 1.5);
      d.text(`${mass} kg`, shx, yL + bh / 2, { font: `600 11px ${F.mono}`, color: C.text, align: "center", base: "middle" });
      vec(k, d, shx + bw / 2 + 12, yL + bh / 2, 0, -34, C.cyan, "T", { font: `italic 600 13px ${F.math}` });
      d.line(x0, yb, x1, yb, C.muted, 1.5);
      d.text(`v = ${vM.toFixed(1)} m/s ↑`, x0, yt + 10, { font: `13px ${F.math}`, color: C.text });
      d.text(`h = ${H0} m`, x0, yt + 28, { font: `13px ${F.mono}`, color: C.muted });
    }
    // W vs t plot: slope is the power
    const tNow = p * T, Wnow = P * tNow;
    const pad = narrow ? { l: 60, r: 16, t: sBot + 18, b: 30 } : { l: sceneW + 62, r: 16, t: 56, b: 34 };
    const tM = T * 1.1, WM = Math.max(Wt, HP * T) * 1.1;
    const Pl = k.plot(c, { xmin: 0, xmax: tM, ymin: 0, ymax: WM, pad, xlabel: "t (s)", ylabel: "W (J)" });
    if (Pl.height > 50) {
      Pl.grid(); Pl.axes();
      Pl.fn(s => HP * s, k.alpha(C.muted, .7), 1.2, 0, tM, [4, 4]); Pl.label("1 hp", Math.min(tM * 0.9, WM / HP * 0.95), HP * Math.min(tM * 0.9, WM / HP * 0.95), C.muted, { dx: -6, dy: -8, align: "right", font: `12px ${F.mono}` });
      Pl.line(0, 0, T, Wt, k.alpha(C.amber, .35), 1.5); if (tNow > 0) Pl.line(0, 0, tNow, Wnow, C.amber, 2.8);
      Pl.line(T, 0, T, Wt, k.alpha(C.pink, .7), 1.2, [3, 3]); Pl.line(0, Wt, T, Wt, k.alpha(C.cyan, .7), 1.2, [3, 3]);
      Pl.point(tNow, Wnow, C.amber, 5);
      Pl.label("slope = P", T * 0.5, Wt * 0.5, C.amber, { dx: 10, dy: 14, font: `italic 13px ${F.math}` });
    }
    const big = P >= HP;
    k.setRO(`<div><h2>Power</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>P</i></span> = <span class="num c1">${sf(P)}</span> W</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c2"><i>W</i></span> = <i>mgh</i>`)} = <span class="v c2">${J(Wt)}</span><span class="lbl">${mass} kg raised ${H0} m at steady speed</span></div>
      <div class="row">${M(`<span class="c3"><i>t</i></span>`)} = <span class="v c3">${sf(T)} s</span><span class="lbl">${st ? "time for the climb" : "t = h/v"}</span></div>
      <div class="row">${M(`<span class="c1"><i>P</i></span> = <span class="c2"><i>W</i></span>/<span class="c3"><i>t</i></span>`)} = <span class="v c1">${sf(P / 1000)} kW = ${sf(P / HP)} hp</span><span class="lbl">1 hp = 746 W</span></div>
      <div class="row">${M("<i>P</i> = <i>Fv</i>")} = <span class="v">${sf(Fl)} N × ${sf(H0 / T)} m/s</span><span class="lbl">force times speed gives the same power</span></div>
      </div>
      <div class="landmark${big ? " hit" : ""}">${st ? (big ? `<div class="big">${M("<i>P</i> ≥ 1 hp")}</div><div class="note">More than one horsepower: a trained sprinter can manage this for a few seconds only. Slow down and the same work takes less power.</div>`
          : `<div class="big">${M("same <i>W</i>, longer <i>t</i> ⇒ smaller <i>P</i>")}</div><div class="note">Walking or running up the same stairs does the same work. People sustain roughly 100–300 W of useful mechanical power for long efforts.</div>`)
        : `<div class="big">${M("<i>P</i> = <i>mgv</i> ∝ <i>v</i>")}</div><div class="note">At constant speed the cable tension equals mg. Double the speed: the power doubles and the trip time halves, but the work is the same.</div>`}</div>
      <p class="narr">${st ? "Shrink t with the same h: the amber line steepens past the 1 hp line." : "Change v and watch W stay fixed while the slope (power) changes."}</p>`);
  });
};

/* ---------- Potential energy and conservative forces ---------- */
L["mech-potential"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "paths", path = "straight", m = 5, h = 2, mu = 0.3, p = 0, go = true;
  let yU = 3, xU = 0.15, mU = 2, kU = 200;
  const restart = () => { p = 0; go = true; };
  const Lx = 6;
  // each path: list of points (m); built densely so length and horizontal travel are exact enough
  const mkPath = (key, hh) => {
    if (key === "straight") return [[0, 0], [Lx, hh]];
    if (key === "hump") { const pts = []; for (let i = 0; i <= 80; i++) { const x = Lx * i / 80; pts.push([x, hh * x / Lx + 1.5 * Math.sin(Math.PI * x / Lx)]); } return pts; }
    return [[0, 0], [Lx, hh / 3], [1, 2 * hh / 3], [Lx, hh]];
  };
  const measure = pts => { let Ls = 0, Xs = 0; const cum = [0], cx = [0]; for (let i = 1; i < pts.length; i++) { Ls += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); Xs += Math.abs(pts[i][0] - pts[i - 1][0]); cum.push(Ls); cx.push(Xs); } return { Ls, Xs, cum, cx }; };
  const at = (pts, ms, s) => { for (let i = 1; i < pts.length; i++) if (s <= ms.cum[i] || i === pts.length - 1) { const seg = ms.cum[i] - ms.cum[i - 1] || 1, u = clamp((s - ms.cum[i - 1]) / seg, 0, 1); return { x: pts[i - 1][0] + u * (pts[i][0] - pts[i - 1][0]), y: pts[i - 1][1] + u * (pts[i][1] - pts[i - 1][1]), X: ms.cx[i - 1] + u * (ms.cx[i] - ms.cx[i - 1]) }; } return { x: 0, y: 0, X: 0 }; };
  const NAMES = { straight: "Straight ramp", hump: "Over a hump", zig: "Switchback" };
  k.modes([["paths", "Two paths"], ["curves", "U curves"]], mode, v => { mode = v; vis(); restart(); });
  const sP = k.select("Path", Object.entries(NAMES), path, v => { path = v; restart(); });
  const sm = k.slider(`<i>m</i>`, 1, 20, 1, m, v => { m = v; restart(); }, v => v + " kg");
  const sh = k.slider(`<i>h</i>`, 0.5, 4, 0.5, h, v => { h = v; restart(); }, v => v.toFixed(1) + " m");
  const smu = k.slider(`<i>μ</i><sub>k</sub>`, 0, 0.6, 0.05, mu, v => { mu = v; restart(); }, v => v.toFixed(2));
  const sy = k.slider(`<span class="c2"><i>y</i></span>`, 0, 5, 0.1, yU, v => yU = v, v => v.toFixed(1) + " m");
  const sx = k.slider(`<span class="c3"><i>x</i></span>`, -0.3, 0.3, 0.01, xU, v => xU = v, v => sfc(v, 2) + " m");
  const sk = k.slider(`<i>k</i>`, 50, 500, 10, kU, v => kU = v, v => v + " N/m");
  const bR = k.button("Reset", () => { p = 0; go = false; }, "btn ghost");
  const bG = k.button("Push", restart);
  function vis(){ const a = mode === "paths"; showCtl([sP, sm, sh, smu, bR, bG], a); showCtl([sy, sx, sk], !a); }
  vis();
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    if (mode === "paths") {
      const all = ["straight", "hump", "zig"].map(key => { const pts = mkPath(key, h); return { key, pts, ms: measure(pts) }; });
      const cur = all.find(q => q.key === path);
      if (go) { p += dt / 3.2 * (k.reduce ? 10 : 1); if (p >= 1) { p = 1; go = false; } }
      const pos = at(cur.pts, cur.ms, p * cur.ms.Ls);
      const narrow = W < 560, sceneH = narrow ? H - 60 : H - 20;
      const P = k.plot(c, { xmin: -0.8, xmax: Lx + 0.8, ymin: -0.6, ymax: h + 2.4, pad: { l: 20, r: 20, t: 56, b: H - sceneH }, equal: true });
      d.line(P.X(-0.8), P.Y(0), P.X(Lx + 0.8), P.Y(0), C.muted, 1.2);
      d.line(P.X(Lx - 0.2), P.Y(h), P.X(Lx + 0.8), P.Y(h), C.muted, 1.2);
      d.line(P.X(Lx + 0.5), P.Y(0), P.X(Lx + 0.5), P.Y(h), k.alpha(C.cyan, .8), 1.2, [3, 3]);
      d.text(`h = ${h.toFixed(1)} m`, P.X(Lx + 0.45), P.Y(h / 2), { font: `12px ${F.mono}`, color: C.cyan, align: "right", base: "middle" });
      all.forEach(q => { c.g.save(); c.g.strokeStyle = q.key === path ? C.violet : k.alpha(C.violet, .22); c.g.lineWidth = q.key === path ? 3 : 1.5; c.g.beginPath(); q.pts.forEach(([x, y], i) => i ? c.g.lineTo(P.X(x), P.Y(y)) : c.g.moveTo(P.X(x), P.Y(y))); c.g.stroke(); c.g.restore(); });
      d.circle(P.X(0), P.Y(0), 5, C.text); d.text("A", P.X(0) - 8, P.Y(0) - 8, { font: `600 14px ${F.ui}`, color: C.text, align: "right" });
      d.circle(P.X(Lx), P.Y(h), 5, C.text); d.text("B", P.X(Lx) + 8, P.Y(h) - 8, { font: `600 14px ${F.ui}`, color: C.text });
      const bs = 16; d.rr(P.X(pos.x) - bs / 2, P.Y(pos.y) - bs, bs, bs, 3, k.alpha(C.amber, .3), C.amber, 1.6);
      vec(k, d, P.X(pos.x), P.Y(pos.y) - bs / 2, 0, 30, k.alpha(C.text, .8), "mg", { font: `italic 12px ${F.math}`, w: 2 });
      const Wg = -m * G0 * pos.y, Wfr = -mu * m * G0 * pos.X;
      const rows = all.map(q => `<div class="row">${M(NAMES[q.key])} <span class="v">${sf(-m * G0 * h)} J · ${sf(-mu * m * G0 * q.ms.Xs)} J</span><span class="lbl">gravity · friction, path ${sf(q.ms.Ls)} m${q.key === path ? " (this one)" : ""}</span></div>`).join("");
      k.setRO(`<div><h2>Work done by gravity</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>W</i><sub>grav</sub></span> = <span class="num c1">${sf(Wg)}</span> J</div></div>
        <div class="ro-rows">
        <div class="row">${M(`Δ<span class="c2"><i>U</i><sub>g</sub></span> = <i>mg</i>Δ<i>y</i>`)} = <span class="v c2">${J(-Wg)}</span><span class="lbl">so far; −W<sub>grav</sub> at every point</span></div>
        <div class="row">${M("friction so far")} <span class="v">${J(Wfr)}</span><span class="lbl">−μ<sub>k</sub>mg × horizontal travel ${sf(pos.X)} m (slow push)</span></div>
        ${rows}
        </div>
        <div class="landmark hit"><div class="big">${M(`<span class="c1"><i>W</i><sub>grav</sub></span>(A→B) = −<i>mgh</i> = ${sf(-m * G0 * h)} J`)}</div><div class="note">Every path gives the same gravity work: gravity is conservative. Friction's work depends on the <span class="c4">path</span>, so it has no potential energy.</div></div>
        <p class="narr">Try the hump: gravity's work goes more negative on the way up, then recovers on the way down. The switchback travels farther sideways, so friction takes more.</p>`);
    } else {
      const narrow = W < 560, gap = 18;
      const box1 = narrow ? { l: 54, r: 16, t: 58, b: H / 2 + 12 } : { l: 56, r: W / 2 + gap / 2, t: 58, b: 34 };
      const box2 = narrow ? { l: 54, r: 16, t: H / 2 + 34, b: 30 } : { l: W / 2 + gap / 2 + 50, r: 16, t: 58, b: 34 };
      const Ug = mU * G0 * yU, Us = 0.5 * kU * xU * xU;
      const UgM = mU * G0 * 5.5;
      const P1 = k.plot(c, { xmin: 0, xmax: 5.5, ymin: 0, ymax: UgM, pad: box1, xstep: 1, xlabel: "y (m)", ylabel: "U_g (J)" });
      P1.grid(); P1.axes(); P1.fn(y => mU * G0 * y, C.cyan, 2.5); P1.point(yU, Ug, C.cyan, 5.5);
      P1.line(yU, 0, yU, Ug, k.alpha(C.cyan, .5), 1, [3, 3]);
      const Fg = -mU * G0; d.arrow(P1.X(yU), P1.Y(Ug) + 14, P1.X(yU) - 34, P1.Y(Ug) + 14, C.text, 2);
      d.text(`F = −dU/dy = ${sfc(Fg)} N`, P1.X(yU) - 38, P1.Y(Ug) + 14, { font: `12px ${F.mono}`, color: C.text, align: "right", base: "middle" });
      tag(k, d, `GRAVITY · m = ${mU} kg`, box1.l + 6, box1.t - 8, C.cyan);
      const UsM = 0.5 * 500 * 0.32 * 0.32;
      const P2 = k.plot(c, { xmin: -0.32, xmax: 0.32, ymin: 0, ymax: UsM, pad: box2, xstep: 0.1, xlabel: "x (m)", ylabel: "U_s (J)" });
      P2.grid(); P2.axes(); P2.fn(x => 0.5 * kU * x * x, C.pink, 2.5); P2.point(xU, Us, C.pink, 5.5);
      P2.fn(x => Us + kU * xU * (x - xU), k.alpha(C.pink, .45), 1.2, xU - 0.08, xU + 0.08, [4, 3]);
      const Fs = -kU * xU;
      if (Math.abs(Fs) > 0.5) d.arrow(P2.X(xU), P2.Y(Us) - 16, P2.X(xU) + Math.sign(Fs) * clamp(Math.abs(Fs) * 0.4, 10, 50), P2.Y(Us) - 16, C.text, 2);
      d.text(`F = −kx = ${sfc(Fs)} N`, P2.X(0), box2.t + 14, { font: `12px ${F.mono}`, color: C.text, align: "center" });
      tag(k, d, `SPRING · k = ${kU} N/m`, box2.l + 6, box2.t - 8, C.pink);
      const eq = Math.abs(xU) < 1e-9;
      k.setRO(`<div><h2>Potential energy</h2><div class="ro-big" style="margin-top:8px"><span class="c2"><i>U</i><sub>g</sub></span> = <span class="num c2">${sf(Ug)}</span> J · <span class="c3"><i>U</i><sub>s</sub></span> = <span class="num c3">${sf(Us)}</span> J</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>U</i><sub>g</sub></span> = <i>mgy</i>`)} = <span class="v c2">${J(Ug)}</span><span class="lbl">straight line, slope mg = ${sf(mU * G0)} N</span></div>
        <div class="row">${M(`<span class="c3"><i>U</i><sub>s</sub></span> = ½<i>kx</i><sup>2</sup>`)} = <span class="v c3">${J(Us)}</span><span class="lbl">parabola, same for +x and −x</span></div>
        <div class="row">${M("<i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i>")} = <span class="v">${sf(Fs)} N</span><span class="lbl">minus the slope of the dashed tangent</span></div>
        </div>
        <div class="landmark${eq ? " hit" : ""}">${eq ? `<div class="big">${M("<i>x</i> = 0: d<i>U</i>/d<i>x</i> = 0 ⇒ <i>F</i> = 0")}</div><div class="note">At the bottom of the parabola the slope is zero: the relaxed spring exerts no force.</div>`
          : `<div class="big">${M("<i>F</i> points downhill on <i>U</i>")}</div><div class="note">The force is minus the slope, so it always pushes toward lower potential energy: down for gravity, back toward x = 0 for the spring.</div>`}</div>
        <p class="narr">Change k and x: doubling x quadruples U<sub>s</sub> but only doubles the force.</p>`);
    }
  });
};

/* ---------- Conservation of energy ---------- */
L["mech-energy-cons"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const TR = {
    pipe: { name: "Half-pipe", y: x => 0.15 * (x - 6) ** 2 },
    hump: { name: "Central hump", y: x => 0.15 * (x - 6) ** 2 + 1.8 * Math.exp(-((x - 6) ** 2) / 1.6) },
    dip: { name: "Off-centre bump", y: x => 0.15 * (x - 6) ** 2 + 1.6 * Math.exp(-((x - 7.6) ** 2) / 0.9) }
  };
  let tr = "pipe", m = 60, fric = false, mu = 0.05, x0 = 1.2, x = x0, v = 0, Eth = 0, run = true, probe = 6, rest = false;
  const yf = xx => TR[tr].y(xx), dy = xx => (yf(xx + 1e-4) - yf(xx - 1e-4)) / 2e-4;
  const reset = go => { x = x0; v = 0; Eth = 0; run = go; rest = false; };
  k.select("Track", Object.entries(TR).map(([key, q]) => [key, q.name]), tr, val => { tr = val; reset(true); });
  k.slider(`<i>m</i>`, 20, 100, 1, m, val => { m = val; }, val => val + " kg");
  k.slider(`start <i>x</i>`, 0.5, 11.5, 0.1, x0, val => { x0 = val; reset(false); }, val => val.toFixed(1) + " m");
  k.check("friction", fric, val => { fric = val; reset(true); });
  k.slider(`<i>μ</i>`, 0.01, 0.2, 0.01, mu, val => { mu = val; }, val => val.toFixed(2));
  k.button("Reset", () => reset(false), "btn ghost");
  k.button("Release", () => reset(true));
  let geo = null;
  c.cv.addEventListener("pointermove", e => { if (!geo) return; const q = c.xy(e); probe = clamp(geo.inv(q.x), 0, 12); });
  k.loop(dt => {
    const mm = fric ? mu : 0;
    if (run && !rest) {
      const n = 40, hdt = dt / n * (k.reduce ? 1 : 1);
      for (let i = 0; i < n; i++) {
        const s1 = dy(x), cs = 1 / Math.sqrt(1 + s1 * s1), sn = s1 * cs;
        let at = -G0 * sn;
        if (mm > 0) { if (Math.abs(v) > 1e-3) at -= Math.sign(v) * mm * G0 * cs; else if (Math.abs(sn) <= mm * cs) { v = 0; rest = true; break; } else at -= Math.sign(at) * mm * G0 * cs; }
        v += at * hdt;
        const dx = v * cs * hdt; x = clamp(x + dx, 0.05, 11.95); Eth += mm * m * G0 * Math.abs(dx);
        const E0 = m * G0 * yf(x0), Kc = E0 - m * G0 * yf(x) - Eth;
        if (Kc <= 0) { v = 0; if (mm > 0) Eth = Math.max(0, E0 - m * G0 * yf(x)); }
        else v = (v === 0 ? Math.sign(at) || 1 : Math.sign(v)) * Math.sqrt(2 * Kc / m);
      }
    }
    const E0 = m * G0 * yf(x0), U = m * G0 * yf(x), K = Math.max(0, E0 - U - Eth), sp = Math.sqrt(2 * K / m);
    c.begin(); const W = c.w, H = c.h;
    const narrow = W < 560, barW = narrow ? 0 : clamp(W * 0.26, 150, 210);
    const ymax = 6;
    const P = k.plot(c, { xmin: 0, xmax: 12, ymin: -0.3, ymax, pad: { l: 40, r: 16 + barW, t: 56, b: narrow ? clamp(H * 0.33, 120, 190) : 30 }, xstep: 2, ystep: 1, xlabel: "x (m)", ylabel: "y (m)" });
    geo = { inv: px => P.inv(px, 0).x };
    P.grid(); P.axes();
    // fill under track
    c.g.save(); c.g.beginPath(); c.g.moveTo(P.X(0), P.Y(-0.3)); for (let i = 0; i <= 240; i++) { const xx = 12 * i / 240; c.g.lineTo(P.X(xx), P.Y(Math.min(yf(xx), ymax))); } c.g.lineTo(P.X(12), P.Y(-0.3)); c.g.closePath(); c.g.fillStyle = k.alpha(C.cyan, .07); c.g.fill(); c.g.restore();
    P.fn(yf, C.text, 2.5, 0, 12);
    // start-energy level: highest reachable height
    const yStart = yf(x0), yReach = (E0 - Eth) / (m * G0);
    P.line(0, yStart, 12, yStart, k.alpha(C.violet, .7), 1.2, [6, 5]);
    P.label("start height", 0.1, yStart, C.violet, { dx: 4, dy: -6, font: `12px ${F.mono}` });
    if (fric && Eth > 1) P.line(0, yReach, 12, yReach, k.alpha(C.pink, .6), 1, [2, 4]);
    // probe
    const yp = yf(probe), Kp = K + U - m * G0 * yp, vp = Kp > 0 ? Math.sqrt(2 * Kp / m) : NaN;
    P.line(probe, -0.3, probe, Math.min(yp, ymax), k.alpha(C.muted, .6), 1, [3, 3]);
    P.point(probe, Math.min(yp, ymax), C.muted, 4, true);
    const ptxt = isFinite(vp) ? `v = ${sfc(vp)} m/s here` : "can't reach";
    P.label(ptxt, probe, Math.min(yp, ymax), C.muted, { dx: probe > 8 ? -8 : 8, dy: 18, align: probe > 8 ? "right" : "left", font: `12px ${F.mono}` });
    // car
    const s1 = dy(x), ang = Math.atan(s1), px = P.X(x), py = P.Y(yf(x));
    const nx = Math.sin(ang), ny = -Math.cos(ang);  // screen normal (up-ish) of the track in data space, approximate
    c.g.save(); c.g.translate(px, py); c.g.rotate(-Math.atan2(P.Y(yf(x) + s1) - P.Y(yf(x)), P.X(x + 1) - P.X(x)) * -1);
    c.g.restore();
    const sAng = Math.atan2(P.Y(yf(x + 0.01)) - P.Y(yf(x - 0.01)), P.X(x + 0.01) - P.X(x - 0.01));
    c.g.save(); c.g.translate(px, py); c.g.rotate(sAng);
    d.rr(-13, -16, 26, 12, 3, k.alpha(C.amber, .35), C.amber, 1.6); d.circle(-8, -3, 3.2, C.text); d.circle(8, -3, 3.2, C.text);
    c.g.restore();
    void nx; void ny;
    // energy bars
    const Emax = Math.max(E0, 1);
    const items = [{ v: K, color: C.amber, label: "K" }, { v: U, color: C.cyan, label: "U" }, { v: Eth, color: C.pink, label: "E_th" }, { v: K + U + Eth, color: C.violet, label: "E" }];
    if (narrow) bars(k, d, items, 20, H - clamp(H * 0.33, 120, 190) + 40, W - 40, clamp(H * 0.33, 120, 190) - 76, Emax * 1.05);
    else { tag(k, d, "ENERGY (J)", W - barW + 8, 70); bars(k, d, items, W - barW + 4, 80, barW - 14, H - 80 - 40, Emax * 1.05); }
    const stopped = rest || (!run && x === x0);
    k.setRO(`<div><h2>Speed</h2><div class="ro-big" style="margin-top:8px"><i>v</i> = <span class="num">${sf(sp)}</span> m/s</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c1"><i>K</i></span> = ½<i>mv</i><sup>2</sup>`)} = <span class="v c1">${J(K)}</span><span class="lbl">largest at the lowest points</span></div>
      <div class="row">${M(`<span class="c2"><i>U</i></span> = <i>mgy</i>`)} = <span class="v c2">${J(U)}</span><span class="lbl">y = ${sf(yf(x))} m above the lowest point</span></div>
      <div class="row">${M(`<span class="c3"><i>E</i><sub>th</sub></span>`)} = <span class="v c3">${J(Eth)}</span><span class="lbl">${fric ? "μmg × horizontal distance travelled" : "friction off: nothing lost"}</span></div>
      <div class="row">${M(`<span class="c4"><i>E</i></span> = <i>K</i> + <i>U</i> + <i>E</i><sub>th</sub>`)} = <span class="v c4">${J(K + U + Eth)}</span><span class="lbl">set by the start height: mgy<sub>start</sub></span></div>
      </div>
      <div class="landmark${fric || rest ? " hit" : ""}">${rest ? `<div class="big">${M(`<span class="c3"><i>E</i><sub>th</sub></span> = ${sf(Eth)} J = <i>E</i> − <i>U</i>`)}</div><div class="note">The car has come to rest. The mechanical energy it lost is now thermal energy; the total is unchanged.</div>`
        : fric ? `<div class="big">${M(`<span class="c1"><i>K</i></span> + <span class="c2"><i>U</i></span> + <span class="c3"><i>E</i><sub>th</sub></span> = const`)}</div><div class="note">K + U falls as the pink thermal bar grows, so each swing turns back lower (pink dotted line). The violet total stays level.</div>`
        : `<div class="big">${M(`<span class="c1"><i>K</i></span> + <span class="c2"><i>U</i></span> = <i>mgy</i><sub>start</sub>`)}</div><div class="note">Without friction the car always turns back at the start height. At any point v = √(2g(y<sub>start</sub> − y)), whatever the mass or track shape.</div>`}</div>
      <p class="narr">${stopped && !rest ? "Press Release. " : ""}Move the pointer along the track to read the speed there from energy. Then tick friction.</p>`);
  });
};
})();
