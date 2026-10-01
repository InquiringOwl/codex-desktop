/* ============ Labs: Mechanics, part 8 (rolling, angular momentum, gravitation, orbits, Kepler's laws) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const MI = "−";
const G0 = 9.80, GN = 6.67e-11, ME = 5.97e24, RE = 6.37e6, GME = GN * ME;
const D2R = Math.PI / 180, TAU = Math.PI * 2;
// 3 significant figures, U+2212 minus; HTML (uses <sup> for large/small powers)
function sf(v, n = 3){
  if (!isFinite(v)) return "—";
  if (Math.abs(v) < 1e-12) return "0";
  const a = Math.abs(v); let s;
  if (a >= 1e5 || a < 1e-3) { let e = Math.floor(Math.log10(a)); let c = +(v / 10 ** e).toPrecision(n); if (Math.abs(c) >= 10) { c /= 10; e++; } s = c.toFixed(n - 1) + " × 10<sup>" + String(e).replace("-", MI) + "</sup>"; }
  else if (a >= 10 ** n) s = Math.round(+v.toPrecision(n)).toLocaleString("en-US");
  else { s = v.toPrecision(n); if (s.includes("e")) s = Math.round(+s).toLocaleString("en-US"); }
  return s.replace("-", MI);
}
// plain-text version for canvas (Unicode superscripts)
const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "−": "⁻" };
const sfu = (v, n = 3) => sf(v, n).replace(/<sup>(.*?)<\/sup>/g, (m, e) => [...e].map(ch => SUP[ch] || ch).join(""));
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
// horizontal bar with label and value
function hbar(k, d, x, y, w, h, frac, color, label, val){
  d.rr(x, y, w, h, 3, k.alpha(k.C.line2, .35));
  d.rr(x, y, Math.max(0, Math.min(1, frac)) * w, h, 3, k.alpha(color, .75));
  d.text(label, x - 6, y + h / 2, { font: `italic 600 14px ${k.F.math}`, color, align: "right", base: "middle" });
  if (val) d.text(val, x + w + 6, y + h / 2, { font: `12px ${k.F.mono}`, color: k.C.muted, align: "left", base: "middle" });
}

/* ---------- Rolling motion ---------- */
L["mech-rolling"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const SH = [
    { key: "sphere", name: "Solid sphere", b: 0.4, bs: "⅖" },
    { key: "disk", name: "Solid disk", b: 0.5, bs: "½" },
    { key: "hoop", name: "Hoop", b: 1, bs: "1" }
  ];
  const BLOCK = { key: "block", name: "Block, no friction", b: 0, bs: "—" };
  let mode = "race", th = 20, h = 1.0, block = false, t = -1, v = 3, R = 0.3, mass = 2, shape = "disk", xw = 0, phiw = 0;
  const SLOW = 0.5;
  k.modes([["race", "Race down a ramp"], ["wheel", "Rolling wheel"]], mode, m => { mode = m; vis(); });
  const bGo = k.button("Release", () => { t = 0; });
  const bRs = k.button("Reset", () => { t = -1; }, "btn ghost");
  const sT = k.slider("θ", 5, 60, 1, th, x => { th = x; t = -1; }, x => x + "°");
  const sH = k.slider("<i>h</i>", 0.2, 2, 0.05, h, x => { h = x; t = -1; }, x => x.toFixed(2) + " m");
  const cB = k.check("sliding block (frictionless)", block, x => { block = x; t = -1; });
  const sV = k.slider(`<span class="c1"><i>v</i><sub>cm</sub></span>`, 0, 10, 0.1, v, x => v = x, x => x.toFixed(1) + " m/s");
  const sR = k.slider("<i>R</i>", 0.1, 0.5, 0.01, R, x => R = x, x => x.toFixed(2) + " m");
  const sM = k.slider("<i>M</i>", 0.5, 20, 0.5, mass, x => mass = x, x => x.toFixed(1) + " kg");
  const sS = k.select("Shape", SH.map(s => [s.key, s.name]), shape, x => shape = x);
  function vis(){ showCtl([bGo, bRs, sT, sH, cB], mode === "race"); showCtl([sV, sR, sM, sS], mode === "wheel"); }
  vis();
  const drawBody = (s, cx, cy, r, ang, col) => {
    if (s.key === "hoop") { d.circle(cx, cy, r - 1.5, null, col, 3); }
    else if (s.key === "disk") { d.circle(cx, cy, r, k.alpha(col, .30), col, 2); d.circle(cx, cy, r * 0.18, col); }
    else { const g = c.g; const gr = g.createRadialGradient(cx - r * .35, cy - r * .35, r * .1, cx, cy, r); gr.addColorStop(0, k.alpha(col, .85)); gr.addColorStop(1, k.alpha(col, .25)); g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, r, 0, TAU); g.fill(); d.circle(cx, cy, r, null, col, 1.5); }
    d.line(cx, cy, cx + (r - 2) * Math.cos(ang), cy + (r - 2) * Math.sin(ang), C.text, 2);
  };
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    if (mode === "race") {
      if (t >= 0) t += dt * SLOW * (k.reduce ? 3 : 1);
      const list = block ? [...SH, BLOCK] : SH, n = list.length;
      const s = Math.sin(th * D2R), Lr = h / s;
      const y0 = 54, y1 = H - 16, LH = (y1 - y0) / n;
      const barW = clamp(W * 0.26, 80, 200), x0 = 14, rampW = W - barW - 70 - x0;
      const tanT = Math.tan(th * D2R);
      let rise = Math.min(LH - 34, rampW * tanT), run = rise / tanT;
      if (run > rampW) { run = rampW; rise = run * tanT; }
      const info = list.map(sh => { const a = G0 * s / (1 + sh.b); return { sh, a, tf: Math.sqrt(2 * Lr / a), vf: Math.sqrt(2 * G0 * h / (1 + sh.b)) }; });
      const done = info.filter(o => t >= o.tf).sort((p, q) => p.tf - q.tf);
      info.forEach((o, i) => {
        const base = y0 + LH * (i + 1) - 8, top = base - rise, xs = x0 + 4, xe = xs + run;
        d.g = null;
        const g = c.g; g.beginPath(); g.moveTo(xs, top); g.lineTo(xe, base); g.lineTo(xs, base); g.closePath(); g.fillStyle = k.alpha(C.line2, .25); g.fill();
        d.line(xs, top, xe, base, C.muted, 1.5); d.line(xs, base, xe + 24, base, C.muted, 1.5);
        tag(k, d, o.sh.name.toUpperCase(), xe + 24, base - LH + 26, C.faint, "right");
        const tt = Math.max(0, t), sd = Math.min(Lr, 0.5 * o.a * tt * tt), f = sd / Lr;
        const ux = Math.cos(th * D2R), uy = Math.sin(th * D2R), nx = uy, ny = -ux;
        const rr = clamp(LH * 0.16, 6, 13), px = xs + f * run, py = top + f * rise;
        const col = o.sh.key === "block" ? C.violet : C.amber;
        if (o.sh.key === "block") {
          g.save(); g.translate(px + nx * rr, py + ny * rr); g.rotate(th * D2R); d.rr(-rr, -rr, 2 * rr, 2 * rr, 2, k.alpha(col, .3), col, 2); g.restore();
        } else {
          const ang = (f * Math.hypot(run, rise)) / rr;
          drawBody(o.sh, px + nx * rr, py + ny * rr, rr, ang, col);
        }
        // energy bar: translational (cyan) + rotational (pink) + remaining potential (faint)
        const bx = W - barW - 50, bh = clamp(LH * 0.22, 8, 16), by = base - LH * 0.45;
        const Kt = f / (1 + o.sh.b), Kr = f * o.sh.b / (1 + o.sh.b);
        d.rr(bx, by, barW, bh, 3, k.alpha(C.line2, .35));
        d.rect(bx, by, Kt * barW, bh, k.alpha(C.cyan, .8));
        d.rect(bx + Kt * barW, by, Kr * barW, bh, k.alpha(C.pink, .8));
        const vnow = o.a * Math.min(tt, o.tf);
        d.text(`v = ${(t < 0 ? 0 : vnow).toFixed(2)} m/s`, bx, by + bh + 14, { font: `12px ${F.mono}`, color: C.amber, align: "left" });
        const rank = done.indexOf(o);
        if (rank >= 0) d.text(["1st", "2nd", "3rd", "4th"][rank] + " · " + o.tf.toFixed(2) + " s", bx + barW + 44, by + bh / 2, { font: `600 12px ${F.ui}`, color: rank === 0 ? C.amber : C.muted, align: "right", base: "middle" });
      });
      tag(k, d, "ENERGY:  ", W - barW - 50, 44, C.faint);
      d.text("K", W - barW - 50 + 52, 44, { font: `italic 600 13px ${F.math}`, color: C.cyan }); d.text("trans", W - barW - 50 + 61, 47, { font: `10px ${F.mono}`, color: C.cyan });
      d.text("K", W - barW - 50 + 100, 44, { font: `italic 600 13px ${F.math}`, color: C.pink }); d.text("rot", W - barW - 50 + 109, 47, { font: `10px ${F.mono}`, color: C.pink });
      d.text(t < 0 ? "press Release" : "slow motion ×0.5", W - 12, 20, { font: `12px ${F.mono}`, color: C.faint, align: "right" });
      const all = done.length === n;
      const rows = info.map(o => `<div class="row">${M(o.sh.key === "block" ? "√(2<i>gh</i>)" : `β = ${o.sh.bs}`)} <span class="v c1">${sf(o.vf)} m/s</span><span class="lbl">${o.sh.name}: ${o.sh.key === "block" ? "no spin, all energy is translational" : `needs μ<sub>s</sub> ≥ ${sf(o.sh.b * Math.tan(th * D2R) / (1 + o.sh.b))}; K<sub>rot</sub> is ${Math.round(100 * o.sh.b / (1 + o.sh.b))}% of the total`}</span></div>`).join("");
      k.setRO(`<div><h2>Speed at the bottom</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>v</i></span> = √<span style="text-decoration:overline"><span class="fr"><span>2<i>gh</i></span><span>1 + β</span></span></span></div></div>
        <div class="ro-rows">${rows}
        <div class="row">${M("<i>a</i> = <i>g</i> sin θ/(1 + β)")}<span class="lbl">ramp ${sf(Lr)} m long; mass and radius cancel</span></div></div>
        <div class="landmark${all ? " hit" : ""}">${all ? `<div class="big">${M(`${done[0].sh.name.toLowerCase()} wins`)}</div><div class="note">The smaller β, the less of the energy <span class="m"><i>Mgh</i></span> goes into spin (pink), so more is left for speed. ${block ? "The frictionless block has no spin at all and beats every roller." : "The hoop puts half its energy into spin and comes last."}</div>`
          : `<div class="big">${M(`<span class="c2"><i>K</i><sub>trans</sub></span> : <span class="c3"><i>K</i><sub>rot</sub></span> = 1 : β`)}</div><div class="note">Every body starts with the same energy per kilogram. Predict the finishing order, then press Release.</div>`}</div>
        <p class="narr">Change θ and h: the order never changes. Tick the sliding block to compare with no rotation.</p>`);
    } else {
      const sh = SH.find(s => s.key === shape);
      const gy = H * 0.66, Rp = clamp(Math.min(H * 0.2, W * 0.16), 36, 78);
      const Vv = 14 * v * (k.reduce ? 0.5 : 1), wv = Vv / Rp;
      xw += Vv * dt; phiw += wv * dt;
      const span = W + 2 * Rp; let cx = ((xw % span) + span) % span - Rp; const cy = gy - Rp;
      d.line(0, gy, W, gy, C.muted, 1.5);
      for (let X = -((xw % 30) + 30) % 30; X < W; X += 30) d.line(X, gy + 1, X - 8, gy + 9, C.line2, 1);
      // cycloid trace of a rim point
      const g = c.g; g.save(); g.strokeStyle = k.alpha(C.text, .25); g.lineWidth = 1.2; g.setLineDash([3, 4]); g.beginPath();
      for (let i = 0; i <= 120; i++) { const p = phiw - i * 0.06, xc = cx - i * 0.06 * Rp; const x = xc - Rp * Math.sin(p), y = cy + Rp * Math.cos(p); i ? g.lineTo(x, y) : g.moveTo(x, y); }
      g.stroke(); g.restore();
      drawBody(sh, cx, cy, Rp, phiw + Math.PI / 2, C.amber);
      d.circle(cx - Rp * Math.sin(phiw), cy + Rp * Math.cos(phiw), 4, C.text);
      // velocity arrows at rim points (v_P = v_cm + ω × r), same scale
      const sc = v > 0 ? 0.55 * Rp / v : 0;
      for (let i = 0; i < 8; i++) {
        const a = i * TAU / 8, dx = Rp * Math.cos(a), dy = Rp * Math.sin(a);
        const vx = v - (v / R) * (dy / Rp) * R, vy = (v / R) * (dx / Rp) * R;
        const px = cx + dx, py = cy + dy;
        if (Math.hypot(vx, vy) * sc > 3) d.arrow(px, py, px + vx * sc, py + vy * sc, k.alpha(C.amber, .9), 2); else d.circle(px, py, 3.5, C.amber);
      }
      // decomposition at top and bottom
      if (v > 0) {
        const L1 = v * sc;
        d.arrow(cx, cy - Rp - 16, cx + L1, cy - Rp - 16, C.cyan, 2.5); d.arrow(cx + L1, cy - Rp - 16, cx + 2 * L1, cy - Rp - 16, C.pink, 2.5);
        d.text("v", cx + L1 / 2, cy - Rp - 26, { font: `italic 600 13px ${F.math}`, color: C.cyan, align: "center" });
        d.text("Rω", cx + 1.5 * L1, cy - Rp - 26, { font: `italic 600 13px ${F.math}`, color: C.pink, align: "center" });
        d.text("top: 2v", cx + 2 * L1 + 8, cy - Rp - 12, { font: `12px ${F.mono}`, color: C.amber });
        d.text("contact point: v − Rω = 0", cx, gy + 26, { font: `12px ${F.mono}`, color: C.amber, align: "center" });
        vec(k, d, cx, cy, L1, 0, C.amber, "", { w: 3.5 });
      } else d.text("v = 0: at rest", cx, gy + 26, { font: `12px ${F.mono}`, color: C.muted, align: "center" });
      d.text("slow motion", W - 12, 60, { font: `12px ${F.mono}`, color: C.faint, align: "right" });
      const w = v / R, Kt = 0.5 * mass * v * v, Kr = 0.5 * sh.b * mass * v * v, Kt2 = Kt + Kr;
      const by = gy + 44, bw = Math.max(60, W - 150);
      if (by + 30 < H) { hbar(k, d, 70, by, bw, 10, Kt2 ? Kt / Kt2 : 0, C.cyan, "Kₜ", sf(Kt).replace(/<[^>]+>/g, "") + " J"); if (by + 44 < H) hbar(k, d, 70, by + 20, bw, 10, Kt2 ? Kr / Kt2 : 0, C.pink, "Kᵣ", sf(Kr).replace(/<[^>]+>/g, "") + " J"); }
      k.setRO(`<div><h2>Rolling without slipping</h2><div class="ro-big" style="margin-top:8px">ω = <span class="fr"><span class="c1"><i>v</i></span><span><i>R</i></span></span> = <span class="num">${sf(w)}</span> rad/s</div></div>
        <div class="ro-rows">
        <div class="row">${M("<i>v</i><sub>top</sub> = 2<i>v</i><sub>cm</sub>")} = <span class="v c1">${sf(2 * v)} m/s</span><span class="lbl">spin and translation add at the top</span></div>
        <div class="row">${M("<i>v</i><sub>contact</sub> = <i>v</i><sub>cm</sub> − <i>R</i>ω")} = <span class="v">0 m/s</span><span class="lbl">the point touching the ground is momentarily at rest</span></div>
        <div class="row">${M(`<span class="c2">½<i>Mv</i><sup>2</sup></span>`)} = <span class="v c2">${sf(Kt)} J</span><span class="lbl">translational kinetic energy</span></div>
        <div class="row">${M(`<span class="c3">½<i>I</i>ω<sup>2</sup></span> = <span class="c3">½β<i>Mv</i><sup>2</sup></span>`)} = <span class="v c3">${sf(Kr)} J</span><span class="lbl">${sh.name.toLowerCase()}, β = ${sh.bs}</span></div>
        </div>
        <div class="landmark${v === 0 ? "" : " hit"}"><div class="big">${M(`<b>v</b><sub>P</sub> = <span class="c2"><b>v</b><sub>cm</sub></span> + <span class="c3"><b>ω</b> × <b>r</b></span>`)}</div><div class="note">Every rim point moves at the hub's velocity plus its spin velocity. They cancel at the ground and add at the top, so the dotted rim point traces a cycloid.</div></div>
        <p class="narr">Change R at fixed v: ω changes but the arrows do not. Switch shape to see K split as 1 : β.</p>`);
    }
  });
};

/* ---------- Angular momentum ---------- */
L["mech-ang-momentum"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const IB = 1.00, MA = 2.00, RMAX = 0.85, RMIN = 0.20;
  const Iof = r => IB + 2 * MA * r * r;
  let mode = "skate", Lm = 15, rT = RMAX, r = RMAX, phi = 0, bb = 1.5, vp = 2, mp = 1, xp = -6;
  k.modes([["skate", "Spinning skater"], ["particle", "Particle: L = r × p"]], mode, m => { mode = m; vis(); });
  const bPull = k.button("Pull arms in", () => { rT = rT > (RMAX + RMIN) / 2 ? RMIN : RMAX; sR.set(rT); });
  const sR = k.slider("arm reach", RMIN, RMAX, 0.01, rT, x => rT = x, x => x.toFixed(2) + " m");
  const sL = k.slider(`<span class="c1"><i>L</i></span>`, 5, 30, 0.5, Lm, x => Lm = x, x => x.toFixed(1) + " kg·m²/s");
  const sB = k.slider(`<i>r</i><sub>⊥</sub>`, 0.5, 3, 0.1, bb, x => bb = x, x => x.toFixed(1) + " m");
  const sVp = k.slider("<i>v</i>", 0.5, 4, 0.1, vp, x => vp = x, x => x.toFixed(1) + " m/s");
  const sMp = k.slider("<i>m</i>", 0.5, 5, 0.5, mp, x => mp = x, x => x.toFixed(1) + " kg");
  function vis(){ showCtl([bPull, sR, sL], mode === "skate"); showCtl([sB, sVp, sMp], mode === "particle"); }
  vis();
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    if (mode === "skate") {
      r = k.reduce ? rT : lerp(r, rT, 1 - Math.exp(-dt * 4));
      bPull.textContent = rT > (RMAX + RMIN) / 2 ? "Pull arms in" : "Push arms out";
      const I = Iof(r), w = Lm / I, K = Lm * Lm / (2 * I);
      const I0 = Iof(RMAX), w0 = Lm / I0, K0 = Lm * Lm / (2 * I0);
      phi += w * dt;
      const wide = W >= 560;
      const fx = wide ? W * 0.3 : W / 2, fy = wide ? (H + 30) / 2 : 44 + (H * 0.56 - 44) / 2;
      const ppm = Math.min(wide ? W * 0.27 : W * 0.42, (wide ? H - 90 : H * 0.56 - 60) / 2) / 1.0;
      // ice + rotation arc
      d.circle(fx, fy, ppm * 0.98, k.alpha(C.cyan, .04), k.alpha(C.line2, .5), 1);
      const ar = ppm * 0.98 + 0, a0 = phi % TAU;
      c.g.save(); c.g.strokeStyle = C.pink; c.g.lineWidth = 3; c.g.beginPath(); c.g.arc(fx, fy, ar - 8, a0, a0 + 1.2); c.g.stroke(); c.g.restore();
      const ae = a0 + 1.2; d.arrow(fx + (ar - 8) * Math.cos(ae - 0.15), fy + (ar - 8) * Math.sin(ae - 0.15), fx + (ar - 8) * Math.cos(ae), fy + (ar - 8) * Math.sin(ae), C.pink, 3);
      d.text("ω", fx + (ar + 6) * Math.cos(a0 + 0.6), fy + (ar + 6) * Math.sin(a0 + 0.6), { font: `italic 600 16px ${F.math}`, color: C.pink, align: "center", base: "middle" });
      // skater from above: shoulders, arms, hands, head
      const ca = Math.cos(phi), sa = Math.sin(phi), P = (u, v) => [fx + (u * ca - v * sa) * ppm, fy + (u * sa + v * ca) * ppm];
      const hw = 0.2;
      const [s1x, s1y] = P(-hw, 0), [s2x, s2y] = P(hw, 0), [h1x, h1y] = P(-r, 0.05), [h2x, h2y] = P(r, 0.05);
      d.line(s1x, s1y, h1x, h1y, C.cyan, 5); d.line(s2x, s2y, h2x, h2y, C.cyan, 5);
      d.circle(h1x, h1y, 6, C.cyan); d.circle(h2x, h2y, 6, C.cyan);
      c.g.save(); c.g.translate(fx, fy); c.g.rotate(phi); c.g.beginPath(); c.g.ellipse(0, 0, hw * ppm, 0.1 * ppm, 0, 0, TAU); c.g.fillStyle = k.alpha(C.cyan, .28); c.g.fill(); c.g.strokeStyle = C.cyan; c.g.lineWidth = 2; c.g.stroke(); c.g.restore();
      d.circle(fx, fy, 0.09 * ppm, C.panel2, C.muted, 1.5);
      // L out of the page
      d.circle(fx, fy, 7, null, C.amber, 2); d.circle(fx, fy, 2.2, C.amber);
      d.text("L ⊙", fx + 12, fy - 12, { font: `italic 600 14px ${F.math}`, color: C.amber });
      tag(k, d, "TOP VIEW · NO FRICTION", 14, H - 12);
      // bars relative to arms-out values
      const bx = wide ? W * 0.62 + 30 : 70, bw = wide ? W * 0.38 - 110 : W - 150, by0 = wide ? H * 0.28 : H * 0.62, gap = wide ? 42 : Math.max(22, (H - H * 0.62 - 20) / 4);
      tag(k, d, "RELATIVE TO ARMS OUT", bx, by0 - 16);
      const scale = 3.6;
      hbar(k, d, bx, by0, bw, 12, I / I0 / scale * 1, C.cyan, "I", sf(I) + " kg·m²");
      hbar(k, d, bx, by0 + gap, bw, 12, w / w0 / scale, C.pink, "ω", sf(w) + " rad/s");
      hbar(k, d, bx, by0 + 2 * gap, bw, 12, 1 / scale, C.amber, "L", sf(Lm) + " kg·m²/s");
      hbar(k, d, bx, by0 + 3 * gap, bw, 12, K / K0 / scale, C.violet, "K", sf(K) + " J");
      const base = bx + bw / scale; d.line(base, by0 - 6, base, by0 + 3 * gap + 18, k.alpha(C.text, .35), 1, [3, 3]);
      const tucked = r < RMIN + 0.01;
      k.setRO(`<div><h2>Angular momentum</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>L</i></span> = <span class="c2"><i>I</i></span><span class="c3">ω</span> = <span class="num c1">${sf(Lm)}</span> kg·m²/s</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>I</i></span> = <i>I</i><sub>body</sub> + 2<i>m</i><sub>arm</sub><i>r</i><sup>2</sup>`)} = <span class="v c2">${sf(I)} kg·m²</span><span class="lbl">1.00 kg·m² body + two 2.00 kg arms at ${r.toFixed(2)} m</span></div>
        <div class="row">${M(`<span class="c3">ω</span> = <i>L</i>/<i>I</i>`)} = <span class="v c3">${sf(w)} rad/s</span><span class="lbl">${sf(w / TAU)} rev/s</span></div>
        <div class="row">${M(`<span class="c4"><i>K</i></span> = <i>L</i><sup>2</sup>/2<i>I</i>`)} = <span class="v c4">${sf(K)} J</span><span class="lbl">${K > K0 + 0.01 ? `${sf(K - K0)} J more than with arms out: work done by the arms` : "arms fully out"}</span></div>
        </div>
        <div class="landmark${tucked ? " hit" : ""}"><div class="big">${M(`<span class="c2"><i>I</i><sub>i</sub></span><span class="c3">ω<sub>i</sub></span> = <span class="c2"><i>I</i><sub>f</sub></span><span class="c3">ω<sub>f</sub></span>`)}</div><div class="note">${tucked ? `Arms in: I fell by a factor ${sf(I0 / I)}, so ω rose by the same factor and K rose by it too. L did not change: no external torque.` : "The ice exerts no torque about the vertical axis, so L stays fixed while I and ω trade off."}</div></div>
        <p class="narr">Press "Pull arms in". Change L to see what a harder push-off does.</p>`);
    } else {
      const X = 6, ppm = Math.min(W / (2 * X + 1), (H - 100) / 4.2), ox = W / 2, oy = H - 40 - 0.3 * ppm;
      const dtS = k.reduce ? dt * 2 : dt;
      xp += vp * dtS; if (xp > X) xp = -X;
      const SX = x => ox + x * ppm, SY = y => oy - y * ppm;
      // swept triangles in equal time intervals
      const tau = 1.0, start = -X;
      let n = 0;
      for (let xa = start; xa < xp - 1e-9; xa += vp * tau, n++) {
        const xb = Math.min(xa + vp * tau, xp);
        const g = c.g; g.beginPath(); g.moveTo(ox, oy); g.lineTo(SX(xa), SY(bb)); g.lineTo(SX(xb), SY(bb)); g.closePath();
        g.fillStyle = k.alpha(C.amber, n % 2 ? .12 : .26); g.fill();
      }
      d.line(0, SY(bb), W, SY(bb), k.alpha(C.text, .3), 1, [5, 5]);
      d.line(ox, oy, ox, SY(bb), C.muted, 1.5, [3, 3]);
      d.text("r⊥", ox + 6, (oy + SY(bb)) / 2, { font: `italic 13px ${F.math}`, color: C.muted, base: "middle" });
      d.circle(ox, oy, 4, C.text); d.text("O", ox - 8, oy + 14, { font: `italic 14px ${F.math}`, color: C.text, align: "right" });
      const px = SX(xp), py = SY(bb);
      vec(k, d, ox, oy, px - ox, py - oy, k.alpha(C.text, .8), "", { w: 2 });
      d.text("r", (ox + px) / 2 - 10, (oy + py) / 2, { font: `italic 700 15px ${F.math}`, color: C.text, align: "right", base: "middle" });
      const pl = clamp(mp * vp * 14, 18, W * 0.3);
      vec(k, d, px, py, pl, 0, C.pink, "p = mv", { font: `italic 600 13px ${F.math}` });
      d.circle(px, py, 7, C.text);
      d.circle(ox + 22, oy - 8, 7, null, C.amber, 2); d.line(ox + 17, oy - 13, ox + 27, oy - 3, C.amber, 2); d.line(ox + 27, oy - 13, ox + 17, oy - 3, C.amber, 2);
      d.text("L into page", ox + 34, oy - 4, { font: `12px ${F.mono}`, color: C.amber });
      tag(k, d, "SWEPT AREA EVERY 1.00 s", 14, H - 12);
      const rr = Math.hypot(xp, bb), sphi = bb / rr, Lp = mp * vp * bb, dA = 0.5 * bb * vp;
      k.setRO(`<div><h2>Angular momentum about O</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>L</i></span> = <i>r</i><sub>⊥</sub><i>mv</i> = <span class="num c1">${sf(Lp)}</span> kg·m²/s</div></div>
        <div class="ro-rows">
        <div class="row">${M("<i>r</i>")} = <span class="v">${sf(rr)} m</span><span class="lbl">distance from O, changing all the time</span></div>
        <div class="row">${M("sin φ")} = <span class="v">${sf(sphi)}</span><span class="lbl">angle between <b>r</b> and <b>p</b></span></div>
        <div class="row">${M("<i>rp</i> sin φ")} = <span class="v c1">${sf(rr * mp * vp * sphi)} kg·m²/s</span><span class="lbl">the same at every instant: no force, so no torque</span></div>
        <div class="row">${M("d<i>A</i>/d<i>t</i> = <i>L</i>/2<i>m</i>")} = <span class="v c1">${sf(dA)} m²/s</span><span class="lbl">every shaded triangle has area ${sf(dA)} m²</span></div>
        </div>
        <div class="landmark"><div class="big">${M("<b>L</b> = <b>r</b> × <b>p</b> = constant")}</div><div class="note">A free particle has angular momentum about any point off its path. As it moves, r grows and sin φ shrinks in exact proportion, and the line from O sweeps equal areas in equal times.</div></div>
        <p class="narr">This equal-area rule is Kepler's second law in its simplest form. Change r⊥ and v to change L.</p>`);
    }
  });
};

/* ---------- Universal gravitation ---------- */
L["mech-gravitation"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PRE = {
    cav: { name: "Cavendish lead spheres", m1: 158, m2: 0.730, r0: 0.230, n1: "158 kg lead", n2: "0.730 kg lead" },
    em: { name: "Earth and Moon", m1: 5.97e24, m2: 7.35e22, r0: 3.84e8, n1: "Earth", n2: "Moon" },
    se: { name: "Sun and Earth", m1: 1.99e30, m2: 5.97e24, r0: 1.50e11, n1: "Sun", n2: "Earth" }
  };
  let mode = "two", pre = "em", k1 = 1, k2 = 1, kr = 1, hkm = 400;
  k.modes([["two", "Two masses"], ["alt", "g with altitude"]], mode, m => { mode = m; vis(); });
  const sPre = k.select("Pair", Object.entries(PRE).map(([key, p]) => [key, p.name]), pre, x => pre = x);
  const s1 = k.slider(`<span class="c2"><i>m</i><sub>1</sub></span> ×`, 0.25, 4, 0.25, k1, x => k1 = x, x => "×" + x);
  const s2 = k.slider(`<span class="c3"><i>m</i><sub>2</sub></span> ×`, 0.25, 4, 0.25, k2, x => k2 = x, x => "×" + x);
  const sr = k.slider(`<span class="c4"><i>r</i></span> ×`, 0.5, 3, 0.05, kr, x => kr = x, x => "×" + x.toFixed(2));
  const sh = k.slider("altitude <i>h</i>", 0, 40000, 10, hkm, x => hkm = x, x => x.toLocaleString("en-US") + " km");
  function vis(){ showCtl([sPre, s1, s2, sr], mode === "two"); showCtl([sh], mode === "alt"); }
  vis();
  k.loop(() => {
    c.begin(); const W = c.w, H = c.h;
    if (mode === "two") {
      const P = PRE[pre], m1 = P.m1 * k1, m2 = P.m2 * k2, r = P.r0 * kr, Fv = GN * m1 * m2 / (r * r), F0 = GN * P.m1 * P.m2 / (P.r0 * P.r0);
      const topH = Math.max(170, H * 0.46), cy = 44 + (topH - 44) / 2 + 6;
      const base = (W - 120) / 3.2, sep = base * kr, cx = W / 2;
      const x1 = cx - sep / 2, x2 = cx + sep / 2;
      const rad1 = clamp(26 * Math.cbrt(k1), 10, 46), rad2 = clamp(14 * Math.cbrt(k2), 6, 30) * (pre === "cav" ? 0.8 : 1);
      d.line(x1, cy + 52, x2, cy + 52, C.violet, 1.5);
      d.line(x1, cy + 46, x1, cy + 58, C.violet, 1.5); d.line(x2, cy + 46, x2, cy + 58, C.violet, 1.5);
      d.text("r = " + sfu(r) + " m", cx, cy + 72, { font: `italic 14px ${F.math}`, color: C.violet, align: "center" });
      d.circle(x1, cy, rad1, k.alpha(C.cyan, .3), C.cyan, 2); d.circle(x2, cy, rad2, k.alpha(C.pink, .3), C.pink, 2);
      d.text(P.n1, x1, cy - rad1 - 10, { font: `600 12px ${F.ui}`, color: C.cyan, align: "center" });
      d.text(P.n2, x2, cy - Math.max(rad2, 12) - 10, { font: `600 12px ${F.ui}`, color: C.pink, align: "center" });
      const fl = clamp(40 * Math.sqrt(Fv / F0), 4, Math.max(8, sep / 2 - Math.max(rad1, rad2) - 6));
      d.arrow(x1 + rad1 + 2, cy, x1 + rad1 + 2 + fl, cy, C.amber, 3.5); d.arrow(x2 - rad2 - 2, cy, x2 - rad2 - 2 - fl, cy, C.amber, 3.5);
      d.text("F", x1 + rad1 + 2 + fl / 2, cy - 10, { font: `italic 600 14px ${F.math}`, color: C.amber, align: "center" });
      d.text("F", x2 - rad2 - 2 - fl / 2, cy - 10, { font: `italic 600 14px ${F.math}`, color: C.amber, align: "center" });
      tag(k, d, "SIZES NOT TO SCALE", W - 12, 20, C.faint, "right");
      const pm = k1 * k2, ymax = pm * 4.4;
      const Pp = k.plot(c, { xmin: 0, xmax: 3.2, ymin: 0, ymax, pad: { l: 46, r: 16, t: topH + 22, b: 30 }, xstep: 0.5, xlabel: "r / r₀", ylabel: "F / F₀" });
      Pp.grid(); Pp.axes();
      Pp.fn(x => 1 / (x * x), k.alpha(C.text, .35), 1.5, 0.3, 3.2, [4, 4]);
      Pp.fn(x => pm / (x * x), C.amber, 2.4, 0.3, 3.2);
      Pp.line(kr, 0, kr, Fv / F0, k.alpha(C.violet, .7), 1.2, [3, 3]);
      Pp.point(kr, Fv / F0, C.amber, 5.5);
      d.text("dashed: masses ×1", W - 18, topH + 36, { font: `11px ${F.mono}`, color: C.faint, align: "right" });
      const quarter = Math.abs(kr - 2) < 1e-9, half = Math.abs(kr - 0.5) < 1e-9;
      k.setRO(`<div><h2>Gravitational force</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>F</i></span> = <span class="num c1">${sf(Fv)}</span> N</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>m</i><sub>1</sub></span>`)} = <span class="v c2">${sf(m1)} kg</span><span class="lbl">${P.n1}${k1 !== 1 ? ` × ${k1}` : ""}</span></div>
        <div class="row">${M(`<span class="c3"><i>m</i><sub>2</sub></span>`)} = <span class="v c3">${sf(m2)} kg</span><span class="lbl">${P.n2}${k2 !== 1 ? ` × ${k2}` : ""}</span></div>
        <div class="row">${M(`<span class="c4"><i>r</i></span>`)} = <span class="v c4">${sf(r)} m</span><span class="lbl">centre to centre</span></div>
        <div class="row">${M("<i>F</i>/<i>F</i><sub>0</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub><i>r</i></sub><sup>2</sup>")} = <span class="v c1">${sf(Fv / F0)}</span><span class="lbl">compared with the real pair, F₀ = ${sf(F0).replace(/<[^>]+>/g, m => m === "<sup>" ? "^" : "")} N</span></div>
        </div>
        <div class="landmark${quarter || half ? " hit" : ""}"><div class="big">${M(quarter ? "<i>r</i> × 2 ⇒ <i>F</i> ÷ 4" : half ? "<i>r</i> ÷ 2 ⇒ <i>F</i> × 4" : "<i>F</i> ∝ <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>")}</div><div class="note">${quarter || half ? "Inverse square: the force changes by the square of the distance factor." : "Double one mass and the force doubles. Double the distance and it drops to a quarter."} The two arrows are always equal: a third-law pair.</div></div>
        <p class="narr">Set r × 2, then r × 3: F falls to 1/4 and 1/9. Try the Cavendish spheres to see how tiny everyday gravity is.</p>`);
    } else {
      const h = hkm * 1000, r = RE + h, g = GME / (r * r), g0 = GME / (RE * RE), ratio = g / g0;
      const wide = W >= 600;
      // picture: Earth arc at the bottom-left, altitude drawn to scale
      const picW = wide ? W * 0.42 : W, picH = wide ? H - 50 : H * 0.44;
      const scale = (picH - 50) / (RE + 40000e3) * 1.0;
      const ex = wide ? picW * 0.18 : W * 0.5, ey = 44 + picH - 6 + RE * scale * 0.0;
      const Rpx = RE * scale;
      c.g.save(); c.g.beginPath(); c.g.rect(0, 40, picW, picH); c.g.clip();
      d.circle(ex, ey, Rpx, k.alpha(C.cyan, .25), C.cyan, 2);
      [[400, "ISS"], [20200, "GPS"], [35786, "GEO"]].forEach(([hk, nm]) => { c.g.save(); c.g.strokeStyle = k.alpha(C.text, .18); c.g.setLineDash([3, 5]); c.g.beginPath(); c.g.arc(ex, ey, (RE + hk * 1000) * scale, Math.PI, TAU); c.g.stroke(); c.g.restore(); d.text(nm, ex + (RE + hk * 1000) * scale * Math.cos(-1.2) + 4, ey + (RE + hk * 1000) * scale * Math.sin(-1.2), { font: `11px ${F.mono}`, color: C.faint }); });
      const sx = ex, sy = ey - r * scale;
      d.line(ex, ey, sx, sy, C.violet, 1.5, [4, 3]);
      d.text("r = R + h", ex + 8, (ey + sy) / 2 + 30, { font: `italic 13px ${F.math}`, color: C.violet });
      d.circle(sx, sy, 5, C.pink);
      vec(k, d, sx, sy, 0, clamp(34 * ratio, 4, 40), C.amber, "", { w: 3 });
      d.text("g", sx + 10, sy + 20, { font: `italic 600 14px ${F.math}`, color: C.amber });
      c.g.restore();
      d.text("Earth", ex, ey - Rpx * 0.3, { font: `600 12px ${F.ui}`, color: C.cyan, align: "center" });
      const pad = wide ? { l: picW + 46, r: 16, t: 60, b: 34 } : { l: 46, r: 16, t: 44 + picH + 16, b: 30 };
      const Pp = k.plot(c, { xmin: 0, xmax: 40000, ymin: 0, ymax: 10.5, pad, xstep: 10000, ystep: 2, xlabel: "h (km)", ylabel: "g (m/s²)" });
      Pp.grid(); Pp.axes();
      Pp.fn(x => GME / Math.pow(RE + x * 1000, 2), C.amber, 2.4);
      Pp.line(0, g0 / 2, 40000, g0 / 2, k.alpha(C.text, .3), 1, [4, 4]);
      Pp.point(hkm, g, C.pink, 5.5);
      const hit = Math.abs(ratio - 0.5) < 0.003;
      k.setRO(`<div><h2>Gravity at altitude</h2><div class="ro-big" style="margin-top:8px"><i>g</i> = <span class="fr"><span><i>GM</i></span><span><span class="c4"><i>r</i></span><sup>2</sup></span></span> = <span class="num c1">${sf(g)}</span> m/s²</div></div>
        <div class="ro-rows">
        <div class="row">${M(`<span class="c4"><i>r</i></span> = <i>R</i> + <i>h</i>`)} = <span class="v c4">${sf(r)} m</span><span class="lbl">measured from Earth's centre</span></div>
        <div class="row">${M("<i>g</i>/<i>g</i><sub>0</sub> = (<i>R</i>/<i>r</i>)<sup>2</sup>")} = <span class="v">${sf(ratio)}</span><span class="lbl">g₀ = GM/R² = ${sf(g0)} m/s² at the surface</span></div>
        <div class="row">${M("<i>F</i> on 75.0 kg")} = <span class="v c1">${sf(75 * g)} N</span><span class="lbl">the pull on an astronaut at this height</span></div>
        </div>
        <div class="landmark${hit ? " hit" : ""}">${hit ? `<div class="big">${M("<i>g</i> = ½<i>g</i><sub>0</sub> at <i>r</i> = √2 <i>R</i>")}</div><div class="note">Half the surface value at h = (√2 − 1)R ≈ 2640 km: only about 0.41 Earth radii up.</div>`
          : `<div class="big">${M("<i>g</i> ∝ 1/<i>r</i><sup>2</sup>")}</div><div class="note">At the ISS (400 km) gravity is still 88.5% of its surface value. Astronauts float because they are in free fall, not because g is zero.</div>`}</div>
        <p class="narr">Find where g is half its surface value (dashed line), then compare GPS and geostationary heights.</p>`);
    }
  });
};

/* ---------- Orbits and escape speed ---------- */
L["mech-orbits"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const VU = Math.sqrt(GME / RE), TU = Math.sqrt(RE ** 3 / GME);   // velocity and time units (GM = R = 1)
  let vkm = 7.35, hkm = 1000, path = [], kind = "", info = {}, st = null, trail = [], done = false, view = 3;
  const sV = k.slider(`<span class="c1"><i>v</i><sub>0</sub></span>`, 0, 14, 0.01, vkm, x => { vkm = x; rebuild(); }, x => x.toFixed(2) + " km/s");
  const sHh = k.slider("launch height", 0, 3000, 50, hkm, x => { hkm = x; rebuild(); }, x => x.toLocaleString("en-US") + " km");
  k.button("Launch", () => fire());
  k.button("v = v_circ", () => { const r0 = 1 + hkm * 1000 / RE; vkm = Math.round(VU / Math.sqrt(r0) / 10) / 100; sV.set(vkm); rebuild(); }, "btn ghost");
  k.button("v = v_esc", () => { const r0 = 1 + hkm * 1000 / RE; vkm = Math.ceil(VU * Math.sqrt(2 / r0) / 10) / 100; sV.set(vkm); rebuild(); }, "btn ghost");
  const acc = (x, y) => { const r3 = Math.pow(x * x + y * y, 1.5); return [-x / r3, -y / r3]; };
  function rk4(s, h){
    const f = q => { const [ax, ay] = acc(q[0], q[1]); return [q[2], q[3], ax, ay]; };
    const k1 = f(s), s2 = s.map((v, i) => v + h / 2 * k1[i]), k2 = f(s2), s3 = s.map((v, i) => v + h / 2 * k2[i]), k3 = f(s3), s4 = s.map((v, i) => v + h * k3[i]), k4 = f(s4);
    return s.map((v, i) => v + h / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
  }
  function rebuild(){
    const r0 = 1 + hkm * 1000 / RE, v0 = vkm * 1000 / VU;
    const E = v0 * v0 / 2 - 1 / r0, vc = 1 / Math.sqrt(r0), ve = Math.sqrt(2 / r0);
    let s = [0, r0, v0, 0], ang = 0, prevA = Math.atan2(r0, 0), rmax = r0, n = 0, t = 0, hitG = false, esc = false;
    path = [[0, r0]];
    while (n++ < 60000) {
      const rr = Math.hypot(s[0], s[1]), hstep = 0.004 * Math.pow(rr, 1.5);
      s = rk4(s, hstep); t += hstep;
      const r2 = Math.hypot(s[0], s[1]); rmax = Math.max(rmax, r2);
      if (n % 3 === 0) path.push([s[0], s[1]]);
      const a = Math.atan2(s[1], s[0]); let da = a - prevA; if (da > Math.PI) da -= TAU; if (da < -Math.PI) da += TAU; ang += da; prevA = a;
      if (r2 < 1) { hitG = true; break; }
      if (r2 > 60) { esc = true; break; }
      if (Math.abs(ang) >= TAU) break;
    }
    path.push([s[0], s[1]]);
    const range = hitG ? Math.abs(ang) * RE / 1000 : 0;
    const circ = Math.abs(v0 - vc) / vc < 0.002;
    kind = hitG ? "sub" : E >= -1e-9 ? "esc" : circ ? "circ" : "ell";
    const a = E < 0 ? -1 / (2 * E) : Infinity;
    info = { r0, v0, E, vc, ve, a, rmax, range, T: E < 0 ? TAU * Math.pow(a, 1.5) : Infinity, rp: Math.min(r0, 2 * a - rmax) };
    const want = kind === "esc" ? 6 : Math.max(2.2, rmax * 1.12);
    view = Math.min(want, 6.5);
    fire();
  }
  function fire(){ st = [0, 1 + hkm * 1000 / RE, vkm * 1000 / VU, 0]; trail = [[st[0], st[1]]]; done = false; }
  let vsm = 3;
  rebuild();
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    vsm = k.reduce ? view : lerp(vsm, view, 1 - Math.exp(-dt * 5));
    // advance the projectile
    if (!done && st) {
      let tl = dt * 0.9 * (k.reduce ? 3 : 1);
      while (tl > 0) { const rr = Math.hypot(st[0], st[1]), hs = Math.min(tl, 0.004 * Math.pow(rr, 1.5)); st = rk4(st, hs); tl -= hs; const r2 = Math.hypot(st[0], st[1]); if (r2 < 1) { const f = 1 / r2; st[0] *= f; st[1] *= f; done = true; break; } if (r2 > vsm * 1.6) { done = true; break; } }
      const last = trail[trail.length - 1]; if (Math.hypot(st[0] - last[0], st[1] - last[1]) > 0.01) trail.push([st[0], st[1]]); if (trail.length > 4000) trail.shift();
    }
    const wide = W >= 620;
    const oW = wide ? Math.min(W * 0.56, H - 20) : W, oH = wide ? H : H * 0.6;
    const ocx = oW / 2, ocy = wide ? (H + 34) / 2 : 40 + (oH - 40) / 2, sc = (Math.min(oW, oH - 44) / 2 - 10) / vsm;
    const X = x => ocx + x * sc, Y = y => ocy - y * sc;
    c.g.save(); c.g.beginPath(); c.g.rect(0, 0, oW, oH); c.g.clip();
    // planet
    const gr = c.g.createRadialGradient(ocx - sc * .3, ocy - sc * .3, sc * .1, ocx, ocy, sc); gr.addColorStop(0, k.alpha(C.cyan, .55)); gr.addColorStop(1, k.alpha(C.cyan, .18));
    c.g.fillStyle = gr; c.g.beginPath(); c.g.arc(ocx, ocy, sc, 0, TAU); c.g.fill(); d.circle(ocx, ocy, sc, null, C.cyan, 2);
    // tower
    const r0 = info.r0; d.line(X(0), Y(1), X(0), Y(r0), C.muted, 2.5);
    // predicted path (faint) and trail (bright)
    const g = c.g; g.save(); g.strokeStyle = k.alpha(C.amber, .35); g.lineWidth = 1.5; g.setLineDash([4, 4]); g.beginPath(); path.forEach(([x, y], i) => i ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y))); g.stroke(); g.restore();
    g.save(); g.strokeStyle = C.amber; g.lineWidth = 2.5; g.beginPath(); trail.forEach(([x, y], i) => i ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y))); g.stroke(); g.restore();
    if (st) d.circle(X(st[0]), Y(st[1]), 5, C.text);
    if (info.v0 > 0) vec(k, d, X(0), Y(r0), clamp(info.v0 * 40, 8, 70), 0, C.amber, "", { w: 2.5 });
    c.g.restore();
    const lab = { sub: "SUB-ORBITAL: FALLS BACK", circ: "CIRCULAR ORBIT", ell: "ELLIPTICAL ORBIT", esc: info.E > 1e-6 ? "ESCAPE: HYPERBOLA" : "ESCAPE: PARABOLA" }[kind];
    tag(k, d, lab, 14, 60, kind === "esc" ? C.violet : C.amber);
    tag(k, d, "IGNORES AIR AND EARTH'S SPIN", 14, oH - 10);
    // energy well
    const pad = wide ? { l: oW + 50, r: 16, t: 56, b: 34 } : { l: 50, r: 16, t: oH + 18, b: 30 };
    const umin = -GME / RE / 1e6;   // MJ/kg
    const Pp = k.plot(c, { xmin: 0, xmax: 8, ymin: umin * 1.12, ymax: 30, pad, xstep: 1, ystep: 20, xlabel: "r / R", ylabel: "MJ/kg" });
    Pp.grid(); Pp.axes();
    Pp.clip(() => { const gg = c.g; gg.beginPath(); gg.moveTo(Pp.X(1), Pp.Y(umin * 1.12)); for (let i = 0; i <= 140; i++) { const x = 1 + 7 * i / 140; gg.lineTo(Pp.X(x), Pp.Y(umin / x)); } gg.lineTo(Pp.X(8), Pp.Y(umin * 1.12)); gg.closePath(); gg.fillStyle = k.alpha(C.pink, .12); gg.fill(); });
    Pp.fn(x => x >= 1 ? umin / x : NaN, C.pink, 2.4, 1, 8);
    Pp.line(0, 0, 8, 0, C.violet, 1.5, [6, 4]);
    const Em = info.E * VU * VU / 1e6;
    Pp.line(1, Em, 8, Em, C.amber, 2.2);
    if (st) { const rn = Math.hypot(st[0], st[1]); if (rn <= 8) { Pp.line(rn, umin / rn, rn, Em, k.alpha(C.text, .6), 1.5, [2, 3]); Pp.point(rn, Em, C.text, 4.5); } }
    Pp.label("U = −GMm/r", 3.2, umin / 3.2, C.pink, { dy: 18 });
    Pp.label("E = 0: escape threshold", 1.2, 0, C.violet, { dy: -8 });
    const v0 = vkm * 1000, vc = info.vc * VU, ve = info.ve * VU, Tm = info.T * TU;
    const rowsB = kind === "esc" ? `<div class="row">${M("<i>v</i><sub>∞</sub> = √(<i>v</i><sub>0</sub><sup>2</sup> − <i>v</i><sub>esc</sub><sup>2</sup>)")} = <span class="v c4">${sf(Math.sqrt(Math.max(0, v0 * v0 - ve * ve)))} m/s</span><span class="lbl">speed left over far from Earth</span></div>`
      : kind === "sub" ? `<div class="row">${M("range")} <span class="v c1">${sf(info.range)} km</span><span class="lbl">measured along the surface before it lands</span></div>`
      : `<div class="row">${M("<i>T</i> = 2π√(<i>a</i><sup>3</sup>/<i>GM</i>)")} = <span class="v c1">${sf(Tm)} s</span><span class="lbl">${sf(Tm / 60)} min; semi-major axis a = ${sf(info.a * RE)} m</span></div>
        <div class="row">${M("highest altitude")} <span class="v">${sf((info.rmax - 1) * RE / 1000)} km</span><span class="lbl">lowest ${sf((info.rp - 1) * RE / 1000)} km</span></div>`;
    k.setRO(`<div><h2>Total energy per kg</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>E</i>/<i>m</i></span> = ½<i>v</i><sup>2</sup> − <i>GM</i>/<i>r</i> = <span class="num c1">${sf(Em)}</span> MJ/kg</div></div>
      <div class="ro-rows">
      <div class="row">${M("<i>v</i><sub>circ</sub> = √(<i>GM</i>/<i>r</i><sub>0</sub>)")} = <span class="v">${sf(vc / 1000)} km/s</span><span class="lbl">circular-orbit speed at the launch height</span></div>
      <div class="row">${M(`<span class="c4"><i>v</i><sub>esc</sub></span> = √(2<i>GM</i>/<i>r</i><sub>0</sub>)`)} = <span class="v c4">${sf(ve / 1000)} km/s</span><span class="lbl">escape speed there, √2 times larger</span></div>
      ${rowsB}
      </div>
      <div class="landmark${kind === "circ" || kind === "esc" ? " hit" : ""}"><div class="big">${M(kind === "esc" ? "<i>E</i> ≥ 0: unbound" : kind === "circ" ? "<i>v</i><sub>0</sub> = √(<i>GM</i>/<i>r</i>): circle" : kind === "sub" ? "<i>E</i> &lt; 0, orbit meets the ground" : "<i>E</i> &lt; 0: bound ellipse")}</div><div class="note">${kind === "esc" ? "The energy line is at or above zero, so the body climbs out of the well and never returns." : kind === "circ" ? "Gravity supplies exactly the centripetal force, and K = −E = ½|U| everywhere." : kind === "sub" ? "The path is part of an ellipse that intersects the planet, like any thrown ball." : "The energy line sits below zero: the body is trapped in the well and repeats the same ellipse."} The gap between the energy line and the well is the kinetic energy.</div></div>
      <p class="narr">Use the v_circ and v_esc buttons, then nudge the speed up and down around them.</p>`);
  });
};

/* ---------- Kepler's laws ---------- */
L["mech-kepler"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PL = [["Mercury", 0.387, 0.241], ["Venus", 0.723, 0.615], ["Earth", 1.000, 1.000], ["Mars", 1.524, 1.881], ["Jupiter", 5.203, 11.86], ["Saturn", 9.537, 29.46], ["Uranus", 19.19, 84.02], ["Neptune", 30.07, 164.8]];
  const NS = 12, PER = 10;   // sectors per orbit, display seconds per orbit
  let mode = "area", e = 0.6, a = 1.0, Mn = 0, run = true, sect = true;
  k.modes([["area", "Equal areas"], ["third", "T² vs a³"]], mode, m => { mode = m; vis(); });
  const bRun = k.button("Pause", () => { run = !run; bRun.textContent = run ? "Pause" : "Run"; });
  const sE = k.slider("<i>e</i>", 0, 0.95, 0.01, e, x => e = x, x => x.toFixed(2));
  const sA = k.slider(`<span class="c4"><i>a</i></span>`, 0.3, 40, 0.01, a, x => a = x, x => x.toFixed(2) + " AU");
  const cS = k.check("equal-time sectors", sect, x => sect = x);
  function vis(){ showCtl([bRun, sE, cS], mode === "area"); }
  vis();
  const kepE = (Mm, ee) => { let E = ee < 0.8 ? Mm : Math.PI; for (let i = 0; i < 40; i++) { const f = E - ee * Math.sin(E) - Mm, fp = 1 - ee * Math.cos(E); const dE = f / fp; E -= dE; if (Math.abs(dE) < 1e-12) break; } return E; };
  const SUPD = n => String(n).replace("-", "⁻").replace(/[0-9]/g, ch => SUP[ch]);
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    const T = Math.pow(a, 1.5), vp = 29.78 * Math.sqrt((1 + e) / (a * (1 - e))), va = 29.78 * Math.sqrt((1 - e) / (a * (1 + e)));
    if (mode === "area") {
      if (run) Mn = (Mn + dt * TAU / PER * (k.reduce ? 0.5 : 1)) % TAU;
      const b = Math.sqrt(1 - e * e);   // in units of a
      const s = Math.min((W - 40) / 2, (H - 110) / (2 * b)), cx = W / 2 + e * s * 0, cy = 44 + (H - 70) / 2 + 10;
      // centre of ellipse at (cx, cy); Sun focus at (cx + e s, cy)
      const fx = cx + e * s, X = (E) => cx + s * Math.cos(E), Y = (E) => cy - s * b * Math.sin(E);
      const g = c.g;
      if (sect) for (let i = 0; i < NS; i++) {
        const E1 = kepE(TAU * i / NS, e), E2 = kepE(TAU * (i + 1) / NS, e) + (i === NS - 1 ? TAU : 0);
        g.beginPath(); g.moveTo(fx, cy); for (let j = 0; j <= 30; j++) { const E = E1 + (E2 - E1) * j / 30; g.lineTo(X(E), Y(E)); } g.closePath();
        g.fillStyle = k.alpha(C.amber, i % 2 ? .10 : .22); g.fill();
      }
      // current sector being swept
      const cur = Math.floor(Mn / (TAU / NS)), E0 = kepE(cur * TAU / NS, e), En = kepE(Mn, e), Enn = En < E0 ? En + TAU : En;
      g.beginPath(); g.moveTo(fx, cy); for (let j = 0; j <= 30; j++) { const E = E0 + (Enn - E0) * j / 30; g.lineTo(X(E), Y(E)); } g.closePath(); g.fillStyle = k.alpha(C.amber, .5); g.fill();
      // orbit
      g.save(); g.strokeStyle = C.cyan; g.lineWidth = 2.2; g.beginPath(); g.ellipse(cx, cy, s, s * b, 0, 0, TAU); g.stroke(); g.restore();
      // semi-major axis
      d.line(cx, cy, cx + s, cy, C.violet, 2);
      d.circle(cx, cy, 2.5, C.violet);
      d.text("a", cx + s * 0.5, cy + 16, { font: `italic 600 15px ${F.math}`, color: C.violet, align: "center" });
      // foci
      const gr = g.createRadialGradient(fx, cy, 1, fx, cy, 14); gr.addColorStop(0, k.alpha(C.pink, .9)); gr.addColorStop(1, k.alpha(C.pink, 0)); g.fillStyle = gr; g.beginPath(); g.arc(fx, cy, 14, 0, TAU); g.fill();
      d.circle(fx, cy, 6, C.pink); d.text("Sun", fx, cy - 14, { font: `600 11px ${F.ui}`, color: C.pink, align: "center" });
      if (e > 0.02) { d.circle(cx - e * s, cy, 5, C.ink, C.pink, 2); d.text("empty focus", cx - e * s, cy - 12, { font: `600 11px ${F.ui}`, color: C.pink, align: "center" }); }
      // planet
      const px = X(En), py = Y(En);
      d.line(fx, cy, px, py, k.alpha(C.text, .6), 1.2);
      d.circle(px, py, 6.5, C.text);
      const rN = 1 - e * Math.cos(En), vN = Math.sqrt(2 / rN - 1);   // r in a, speed in sqrt(GM/a)
      const vx = -Math.sin(En), vy = b * Math.cos(En), vl = Math.hypot(vx, vy), vlen = 30 * vN;
      d.arrow(px, py, px + vx / vl * vlen, py - vy / vl * vlen, C.text, 2);
      tag(k, d, `ONE ORBIT = ${PER} s ON SCREEN · ${NS} SECTORS OF T/${NS}`, 14, H - 10);
      d.text("perihelion", Math.min(cx + s + 4, W - 4), cy + 30, { font: `11px ${F.mono}`, color: C.faint, align: "right" });
      const area = Math.PI * a * a * b;
      k.setRO(`<div><h2>Kepler's second law</h2><div class="ro-big" style="margin-top:8px"><span class="fr"><span>Δ<span class="c1"><i>A</i></span></span><span>Δ<i>t</i></span></span> = <span class="num c1">${sf(area / T)}</span> AU²/yr</div></div>
        <div class="ro-rows">
        <div class="row">${M("<i>r</i><sub>p</sub> = <i>a</i>(1 − <i>e</i>), &nbsp;<i>r</i><sub>a</sub> = <i>a</i>(1 + <i>e</i>)")} <span class="v">${sf(a * (1 - e))}, ${sf(a * (1 + e))} AU</span><span class="lbl">closest and farthest distances from the Sun</span></div>
        <div class="row">${M(`<i>T</i> = <span class="c4"><i>a</i></span><sup>3/2</sup>`)} = <span class="v">${sf(T)} yr</span><span class="lbl">third law, years and AU</span></div>
        <div class="row">${M("<i>v</i><sub>p</sub>/<i>v</i><sub>a</sub> = <i>r</i><sub>a</sub>/<i>r</i><sub>p</sub>")} = <span class="v">${e >= 0.999 ? "—" : sf((1 + e) / (1 - e))}</span><span class="lbl">${sf(vp)} km/s at perihelion, ${sf(va)} km/s at aphelion</span></div>
        <div class="row">${M("now")} <span class="v">${sf(a * rN)} AU, ${sf(29.78 * vN / Math.sqrt(a))} km/s</span><span class="lbl">vis-viva: v² = GM(2/r − 1/a)</span></div>
        </div>
        <div class="landmark${e >= 0.5 ? " hit" : ""}"><div class="big">${M(`each sector = π<i>ab</i>/${NS} = ${sf(area / NS)} AU²`)}</div><div class="note">${e < 0.05 ? "A near-circle: every sector is the same wedge. Raise e to stretch the orbit." : "Near the Sun the sectors are short and fat, far away long and thin, yet every one has the same area and takes the same time T/12."}</div></div>
        <p class="narr">Raise e toward 0.9: the planet whips round the Sun and crawls at aphelion. Equal areas is conservation of angular momentum.</p>`);
    } else {
      const Pp = k.plot(c, { xmin: -2, xmax: 5, ymin: -2, ymax: 5, pad: { l: 52, r: 18, t: 54, b: 40 }, xstep: 1, ystep: 1 });
      Pp.grid();
      d.line(Pp.left, Pp.top + Pp.height, Pp.left + Pp.width, Pp.top + Pp.height, C.muted, 1.5); d.line(Pp.left, Pp.top, Pp.left, Pp.top + Pp.height, C.muted, 1.5);
      for (let p = -2; p <= 5; p++) {
        d.text("10" + SUPD(p), Pp.X(p), Pp.top + Pp.height + 16, { font: `11px ${F.mono}`, color: C.faint, align: "center" });
        d.text("10" + SUPD(p), Pp.left - 6, Pp.Y(p), { font: `11px ${F.mono}`, color: C.faint, align: "right", base: "middle" });
      }
      d.text("a³ (AU³)", Pp.left + Pp.width, Pp.top + Pp.height - 8, { font: `italic 14px ${F.math}`, color: C.muted, align: "right" });
      d.text("T² (yr²)", Pp.left + 8, Pp.top + 12, { font: `italic 14px ${F.math}`, color: C.muted });
      Pp.line(-2, -2, 5, 5, k.alpha(C.amber, .8), 2);
      PL.forEach(([nm, A, Tp], i) => { const x = Math.log10(A ** 3), y = Math.log10(Tp ** 2); Pp.point(x, y, C.cyan, 5); d.text(nm, Pp.X(x) + (i % 2 ? -8 : 8), Pp.Y(y) + (i % 2 ? 4 : -6), { font: `11px ${F.ui}`, color: C.cyan, align: i % 2 ? "right" : "left", base: "middle" }); });
      const xa = Math.log10(a ** 3);
      Pp.point(xa, xa, C.violet, 7, true);
      d.text(`a = ${a.toFixed(2)} AU`, Pp.X(xa) + 10, Pp.Y(xa) + 16, { font: `600 12px ${F.mono}`, color: C.violet });
      tag(k, d, "LOG–LOG AXES · LINE T² = a³", Pp.left + Pp.width, 20, C.faint, "right");
      const rows = PL.map(([nm, A, Tp]) => `<div class="row">${nm} <span class="v">${sf(Tp * Tp / (A ** 3))}</span><span class="lbl">a = ${A} AU, T = ${Tp} yr</span></div>`).join("");
      k.setRO(`<div><h2>Kepler's third law</h2><div class="ro-big" style="margin-top:8px"><i>T</i> = <span class="c4"><i>a</i></span><sup>3/2</sup> = <span class="num">${sf(T)}</span> yr</div></div>
        <div class="ro-rows"><div class="row">${M("<i>T</i><sup>2</sup>/<i>a</i><sup>3</sup>")}<span class="lbl">for each planet (yr²/AU³)</span></div>${rows}</div>
        <div class="landmark hit"><div class="big">${M("<i>T</i><sup>2</sup> = <span class=\"fr\"><span>4π<sup>2</sup></span><span><i>GM</i><sub>Sun</sub></span></span> <i>a</i><sup>3</sup>")}</div><div class="note">Every planet gives T²/a³ = 1.00 in these units, across a factor of 80 in distance. The constant depends only on the Sun's mass.</div></div>
        <p class="narr">Move the a slider: the violet ring slides along the same line. Mars at 1.52 AU takes 1.87 yr.</p>`);
    }
  });
};
})();
