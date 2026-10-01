/* ============ Labs: Mechanics, part 6 (impulse, momentum conservation, collisions, center of mass, energy diagrams) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const MI = "−";
const G0 = 9.80;
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
const sfc = (v, n = 3) => sf(v, n).replace(/<\/?sup>/g, "").replace(" × 10", "e");
const tag = (k, d, s, x, y, color, align = "left") => d.text(s, x, y, { font: `600 11px ${k.F.ui}`, color: color || k.C.faint, align, base: "alphabetic" });
const showCtl = (items, on) => items.forEach(it => { const el = it && (it.el || it); const box = el && (el.closest ? el.closest(".ctl") : null) || el; if (box) box.style.display = on ? "" : "none"; });
// labelled arrow; tiny arrows become a dot
function vec(k, d, x, y, dx, dy, color, label, o = {}){
  const Lh = Math.hypot(dx, dy);
  if (Lh >= 4) d.arrow(x, y, x + dx, y + dy, color, o.w || 3); else d.circle(x, y, 3, color);
  if (!label) return;
  const ux = Lh >= 4 ? dx / Lh : (o.ux ?? 0), uy = Lh >= 4 ? dy / Lh : (o.uy ?? -1);
  d.text(label, x + dx + ux * (o.gap ?? 10) + (o.ox || 0), y + dy + uy * (o.gap ?? 10) + (o.oy || 0), { font: o.font || `italic 600 13px ${k.F.math}`, color, align: o.align || (Math.abs(ux) > 0.5 ? (ux > 0 ? "left" : "right") : "center"), base: "middle" });
}
// a cart on a track: centre x (px), wheel line y, width, height
function cart(k, d, cx, gy, w, h, col, label){
  const top = gy - 8 - h;
  d.rr(cx - w / 2, top, w, h, 5, k.alpha(col, .18), col, 2);
  [-0.3, 0.3].forEach(f => d.circle(cx + f * w, gy - 5, 5, k.C.panel2, k.C.muted, 1.3));
  if (label) d.text(label, cx, top + h / 2 + 1, { font: `600 12px ${k.F.mono}`, color: col, align: "center", base: "middle" });
  return top;
}
function spring(d, x1, x2, y, color, coils = 6, amp = 6){
  const n = coils * 2, dx = (x2 - x1) / (n + 2);
  const g = d; let px = x1, py = y;
  g.line(x1, y, x1 + dx, y, color, 1.6);
  px = x1 + dx;
  for (let i = 1; i <= n; i++) { const nx = x1 + dx * (i + 1), ny = y + (i % 2 ? -amp : amp); g.line(px, py, nx, ny, color, 1.6); px = nx; py = ny; }
  g.line(px, py, x2, y, color, 1.6);
}

/* ---------- Momentum & impulse: egg drop ---------- */
L["mech-impulse"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const g = c.g;
  const m = 0.0600, CRACK = 40, FLOOR = 1.0;
  const SURF = { floor: ["Tile floor", 1.0], towel: ["Folded towel", 8], pillow: ["Pillow", 40], custom: ["Custom", null] };
  let surf = "towel", dtms = 8, h = 1.0, cmp = false;
  let phase = "ready", tfall = 0, tc = 0;
  const S0 = 0.5, SR = 120;               // slider 0..100 → 0.5 ms … 60 ms (log)
  const toMs = s => S0 * Math.pow(SR, s / 100), toS = ms => 100 * Math.log(ms / S0) / Math.log(SR);
  const reset = () => { phase = "ready"; tfall = 0; tc = 0; };
  const sel = k.select("Surface", Object.entries(SURF).map(([key, [n, t]]) => [key, t ? `${n} · Δt = ${t} ms` : n]), surf, v => { surf = v; if (SURF[v][1]) { dtms = SURF[v][1]; sDt.set(toS(dtms)); } reset(); });
  const sDt = k.slider(`<span class="c3">Δ<i>t</i></span>`, 0, 100, 0.5, toS(dtms), v => { dtms = +toMs(v).toPrecision(2); surf = "custom"; sel.set("custom"); reset(); }, v => (+toMs(v).toPrecision(2)) + " ms");
  k.slider(`drop <i>h</i>`, 0.1, 2.0, 0.05, h, v => { h = v; reset(); }, v => v.toFixed(2) + " m");
  k.check("compare with tile floor", cmp, v => cmp = v);
  k.button("Drop", () => { reset(); phase = k.reduce ? "contact" : "fall"; });
  const CONTACT_REAL = k.reduce ? 0.6 : 1.8;
  k.loop(dt => {
    const v0 = Math.sqrt(2 * G0 * h), J = m * v0, Dt = dtms / 1000;
    const Fmax = Math.PI * J / (2 * Dt), Favg = J / Dt, sStop = v0 * Dt / 2;
    const FmaxFloor = Math.PI * J / (2 * FLOOR / 1000);
    const tFall = Math.sqrt(2 * h / G0);
    if (phase === "fall") { tfall += dt; if (tfall >= tFall) { tfall = tFall; phase = "contact"; } }
    else if (phase === "contact") { tc += dt / CONTACT_REAL; if (tc >= 1) { tc = 1; phase = "done"; } }
    const tNow = tc * Dt;                                   // time into contact (s)
    const Fnow = phase === "contact" || phase === "done" ? (phase === "done" ? 0 : Fmax * Math.sin(Math.PI * tc)) : 0;
    const Jnow = phase === "done" ? J : (phase === "contact" ? (Fmax * Dt / Math.PI) * (1 - Math.cos(Math.PI * tc)) : 0);
    const cracked = Fmax > CRACK;
    c.begin(); const W = c.w, H = c.h;
    // ---- scene ----
    const sh = clamp(H * 0.42, 150, 250), gy = sh - 26, ex = Math.min(W * 0.3, 150);
    const eR = 13, topY = 58, ppm = (gy - topY - 2 * eR) / 2.0;
    // height ruler
    const rx = ex - eR - 40;
    d.line(rx, gy, rx, gy - 2.0 * ppm, C.line2, 1);
    [0, 0.5, 1, 1.5, 2].forEach(y => { d.line(rx - 4, gy - y * ppm, rx + 4, gy - y * ppm, C.line2, 1); d.text(y.toFixed(1), rx - 7, gy - y * ppm, { font: `10px ${F.mono}`, color: C.faint, align: "right", base: "middle" }); });
    d.text("m", rx, gy - 2.0 * ppm - 10, { font: `10px ${F.mono}`, color: C.faint, align: "center" });
    d.line(rx + 4, gy - h * ppm, ex - eR - 4, gy - h * ppm, k.alpha(C.muted, .6), 1, [3, 3]);
    // surface with dent
    const pen = (phase === "contact" || phase === "done") ? Math.min((v0 / 2) * (tNow + Dt / Math.PI * Math.sin(Math.PI * tc)), sStop) : 0;
    const penPx = Math.min(pen * ppm, 34);
    const sx1 = ex - 70, sx2 = ex + 70;
    const col = C.pink;
    const hard = surf === "floor" || (surf === "custom" && dtms < 3), thick = hard ? 14 : (dtms > 20 ? 34 : 14);
    if (hard) {
      d.rect(sx1, gy, sx2 - sx1, 14, k.alpha(C.muted, .18), C.muted, 1);
      for (let x = sx1 + 20; x < sx2; x += 20) d.line(x, gy, x, gy + 14, C.line2, 1);
    } else {
      g.save(); g.beginPath(); g.moveTo(sx1, gy + thick);
      g.lineTo(sx1, gy + 4); g.quadraticCurveTo(sx1, gy, sx1 + 12, gy);
      g.lineTo(ex - eR * 2.2, gy); g.quadraticCurveTo(ex, gy + penPx * 2, ex + eR * 2.2, gy);
      g.lineTo(sx2 - 12, gy); g.quadraticCurveTo(sx2, gy, sx2, gy + 4); g.lineTo(sx2, gy + thick); g.closePath();
      g.fillStyle = k.alpha(col, .14); g.fill(); g.strokeStyle = k.alpha(col, .8); g.lineWidth = 1.5; g.stroke(); g.restore();
    }
    d.line(sx1 - 16, gy + thick, sx2 + 16, gy + thick, C.muted, 1.5);
    // egg
    let ey;
    if (phase === "ready") ey = gy - h * ppm - eR * 1.25;
    else if (phase === "fall") ey = gy - (h - 0.5 * G0 * tfall * tfall) * ppm - eR * 1.25;
    else ey = gy - eR * 1.25 + penPx;
    const sq = phase === "contact" ? 0.22 * Math.min(Fnow / Math.max(Fmax, CRACK), 1) : 0;
    g.save(); g.beginPath(); g.ellipse(ex, ey + eR * 1.25 * sq, eR * (1 + sq * 0.8), eR * 1.25 * (1 - sq), 0, 0, Math.PI * 2);
    g.fillStyle = "#EDE3CF"; g.fill(); g.strokeStyle = C.muted; g.lineWidth = 1; g.stroke(); g.restore();
    if (phase === "done" && cracked) { d.line(ex - eR, ey - 2, ex - 4, ey + 4, C.red, 1.6); d.line(ex - 4, ey + 4, ex + 2, ey - 3, C.red, 1.6); d.line(ex + 2, ey - 3, ex + eR, ey + 3, C.red, 1.6); }
    // contact force arrow on egg (up) during contact
    if (phase === "contact" && Fnow > 0) { const len = 50 * Fnow / Math.max(Fmax, CRACK); vec(k, d, ex + eR + 16, gy - 2, 0, -Math.max(len, 5), C.cyan, "F", { w: 3 }); }
    // scene labels
    const lx = Math.max(ex + 90, W * 0.5);
    const info = [[`60 g egg · v = ${sfc(v0)} m/s at impact`, C.muted], [`${SURF[surf][0]}${surf === "custom" ? ` (Δt = ${dtms} ms)` : ""}`, surf === "floor" ? C.muted : C.pink]];
    if (lx + 80 < W) info.forEach(([s, cl], i) => d.text(s, lx, 64 + i * 20, { font: `13px ${F.sans}`, color: cl }));
    if (phase === "contact") d.text(`slow motion ×${sfc(CONTACT_REAL / Dt, 2)}`, W - 12, sh - 8, { font: `11px ${F.mono}`, color: C.faint, align: "right" });
    // ---- F–t graph ----
    const tmax = Math.max(dtms, cmp ? FLOOR : 0) * 1.12;
    const ymax = Math.max(Fmax, cmp ? FmaxFloor : 0, CRACK) * 1.15;
    const P = k.plot(c, { xmin: 0, xmax: tmax, ymin: 0, ymax, pad: { l: 50, r: 16, t: sh + 22, b: 30 }, xlabel: "t (ms)", ylabel: "F (N)" });
    P.grid(); P.axes();
    tag(k, d, "FORCE ON THE EGG DURING CONTACT", 50, sh + 12);
    const f = tt => (tt >= 0 && tt <= dtms) ? Fmax * Math.sin(Math.PI * tt / dtms) : 0;
    if (cmp) { P.fn(tt => (tt <= FLOOR ? FmaxFloor * Math.sin(Math.PI * tt / FLOOR) : 0), k.alpha(C.cyan, .5), 1.6, 0, FLOOR, [5, 4]); if (FLOOR < tmax * 0.6) P.label("tile floor, same J", FLOOR, FmaxFloor * 0.92, k.alpha(C.cyan, .8), { dx: 6, font: `12px ${F.sans}` }); }
    P.line(0, CRACK, tmax, CRACK, k.alpha(C.red, .7), 1.2, [6, 4]);
    d.text("shell cracks ≈ 40 N", P.X(tmax) - 4, P.Y(CRACK) - 5, { font: `11px ${F.sans}`, color: k.alpha(C.red, .9), align: "right" });
    if (phase === "contact" || phase === "done") {
      const upto = tc * dtms;
      P.clip(() => { g.save(); g.beginPath(); g.moveTo(P.X(0), P.Y(0)); const N = 120; for (let i = 0; i <= N; i++) { const tt = upto * i / N; g.lineTo(P.X(tt), P.Y(f(tt))); } g.lineTo(P.X(upto), P.Y(0)); g.closePath(); g.fillStyle = k.alpha(C.amber, .3); g.fill(); g.restore(); });
      P.fn(f, C.cyan, 2.4, 0, upto);
      if (phase === "done") {
        P.line(0, Fmax, dtms, Fmax, C.violet, 1.4, [4, 3]);
        P.label(`F max = ${sfc(Fmax)} N`, dtms * 0.5, Fmax, C.violet, { dx: 0, dy: -7, align: "center", font: `12px ${F.sans}` });
        P.line(0, Favg, dtms, Favg, k.alpha(C.text, .5), 1, [2, 3]);
        const yb = P.Y(0) - 10;
        d.line(P.X(0), yb, P.X(dtms), yb, C.pink, 2); d.line(P.X(0), yb - 5, P.X(0), yb + 5, C.pink, 2); d.line(P.X(dtms), yb - 5, P.X(dtms), yb + 5, C.pink, 2);
        d.text(`Δt = ${dtms} ms`, P.X(dtms / 2), yb - 8, { font: `12px ${F.sans}`, color: C.pink, align: "center" });
        d.text(`area J = ${sfc(J)} N·s`, P.X(dtms * 0.5), P.Y(Fmax * 0.45), { font: `600 12px ${F.sans}`, color: C.amber, align: "center" });
      } else d.circle(P.X(upto), P.Y(f(upto)), 4, C.cyan);
    } else d.text("Press Drop", P.left + P.width / 2, P.top + P.height / 2, { font: `14px ${F.sans}`, color: C.faint, align: "center" });
    const done = phase === "done";
    k.setRO(`<div><h2>Impulse = change in momentum</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>J</i></span> = <i>m</i><i>v</i> = <span class="num c1">${sf(done ? J : Jnow)}</span> N·s</div></div>
      <div class="ro-rows">
      <div class="row">${M("<i>v</i> = √(2<i>gh</i>)")} = <span class="v">${sf(v0)} m/s</span><span class="lbl">impact speed; the egg stops, so Δp = mv</span></div>
      <div class="row">${M(`<span class="c3">Δ<i>t</i></span>`)} = <span class="v c3">${dtms} ms</span><span class="lbl">contact time set by the surface</span></div>
      <div class="row">${M("<i>F</i><sub>ave</sub> = <i>J</i>/Δ<i>t</i>")} = <span class="v">${done ? sf(Favg) + " N" : "—"}</span><span class="lbl">average force over the contact</span></div>
      <div class="row">${M(`<span class="c4"><i>F</i><sub>max</sub></span> = π<i>J</i>/(2Δ<i>t</i>)`)} = <span class="v c4">${done ? sf(Fmax) + " N" : "—"}</span><span class="lbl">peak of a half-sine pulse</span></div>
      <div class="row">${M("<i>F</i>(<i>t</i>)")} = <span class="v c2">${sf(Fnow)} N</span><span class="lbl">force right now</span></div>
      </div>
      ${done ? `<div class="landmark${cracked ? " hit" : ""}"><div class="big">${cracked ? "Cracked" : "Survived"}: ${M(`<i>F</i><sub>max</sub> = ${sf(Fmax)} N ${cracked ? "&gt;" : "&lt;"} 40 N`)}</div><div class="note">${cracked ? "The same impulse delivered in too short a time gives a peak force above what the shell can take." : "The long contact time spreads the same impulse out, so the peak force stays below the shell's strength."}</div></div>`
        : `<div class="landmark"><div class="big">${M(`<span class="c1"><i>J</i></span> = ∫<span class="c2"><i>F</i></span> d<i>t</i> = Δ<i>p</i>`)}</div><div class="note">The shaded area under the curve grows to exactly mv, whatever the surface.</div></div>`}
      <p class="narr">Drop onto the towel, then the pillow and the floor from the same height: the area stays ${sf(J)} N·s while the peak changes.</p>`);
  });
};

/* ---------- Conservation of momentum: two carts ---------- */
L["mech-momentum-cons"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const TL = 3.0, TREL = 0.8;
  let mode = "spring", mA = 1.0, mB = 3.0, vA = 1.2, vB = -0.4, v0 = 0.3, Es = 1.5;
  let xA, xB, uA, uB, t, ev, joined, over, before;
  const wOf = m => 0.2 + 0.09 * Math.sqrt(m);
  function reset(){
    const wA = wOf(mA), wB = wOf(mB); t = 0; ev = false; joined = false; over = false;
    if (mode === "spring") { const xc = TL / 2 - v0 * TREL; xA = xc - wA / 2; xB = xc + wB / 2; uA = uB = v0; }
    else { xA = 0.45; xB = 2.45; uA = vA; uB = vB; }
    before = { pA: mA * uA, pB: mB * uB, K: 0.5 * mA * uA * uA + 0.5 * mB * uB * uB };
  }
  k.modes([["spring", "Spring release"], ["stick", "Carts stick"]], mode, v => { mode = v; showCtl([s0, sE], v === "spring"); showCtl([sA, sB], v === "stick"); reset(); });
  k.slider(`<span class="c2"><i>m</i><sub>A</sub></span>`, 0.5, 5, 0.5, mA, v => { mA = v; reset(); }, v => v.toFixed(1) + " kg");
  k.slider(`<span class="c3"><i>m</i><sub>B</sub></span>`, 0.5, 5, 0.5, mB, v => { mB = v; reset(); }, v => v.toFixed(1) + " kg");
  const s0 = k.slider(`<i>v</i><sub>0</sub> both`, -0.6, 0.6, 0.1, v0, v => { v0 = v; reset(); }, v => sfc(v) + " m/s");
  const sE = k.slider(`spring <i>E</i>`, 0, 4, 0.25, Es, v => { Es = v; reset(); }, v => v.toFixed(2) + " J");
  const sA = k.slider(`<span class="c2"><i>v</i><sub>A</sub></span>`, -1.5, 1.5, 0.1, vA, v => { vA = v; reset(); }, v => sfc(v) + " m/s");
  const sB = k.slider(`<span class="c3"><i>v</i><sub>B</sub></span>`, -1.5, 1.5, 0.1, vB, v => { vB = v; reset(); }, v => sfc(v) + " m/s");
  k.button("Run again", reset);
  showCtl([sA, sB], false);
  reset();
  k.loop(dt => {
    const wA = wOf(mA), wB = wOf(mB), Mt = mA + mB;
    if (!over) {
      const sub = 4; for (let i = 0; i < sub; i++) {
        const h = dt / sub; t += h;
        if (mode === "spring" && !ev && t >= TREL) { ev = true; if (Es > 0) { uA = v0 - Math.sqrt(2 * Es * mB / (mA * Mt)); uB = v0 + Math.sqrt(2 * Es * mA / (mB * Mt)); } }
        if (mode === "stick" && !joined && xB - xA <= (wA + wB) / 2 && uA > uB) { joined = true; ev = true; const u = (mA * uA + mB * uB) / Mt; uA = uB = u; xB = xA + (wA + wB) / 2; }
        xA += uA * h; xB += uB * h;
      }
      if (xA - wA / 2 < 0 || xB + wB / 2 > TL || t > 14) over = true;
    }
    c.begin(); const W = c.w, H = c.h;
    const x0 = 18, ppm = (W - 36) / TL, gy = clamp(H * 0.38, 130, 200);
    const X = x => x0 + x * ppm;
    // track
    d.line(x0, gy, X(TL), gy, C.muted, 1.5);
    for (let s = 0; s <= TL + 1e-9; s += 0.5) { d.line(X(s), gy, X(s), gy + 5, C.line2, 1); d.text(s.toFixed(1), X(s), gy + 17, { font: `10px ${F.mono}`, color: C.faint, align: "center" }); }
    d.text("m", X(TL), gy + 30, { font: `10px ${F.mono}`, color: C.faint, align: "right" });
    const hA = 22 + 12 * Math.sqrt(mA), hB = 22 + 12 * Math.sqrt(mB);
    const pwA = wA * ppm, pwB = wB * ppm;
    // system boundary
    const bx1 = X(xA) - pwA / 2 - 10, bx2 = X(xB) + pwB / 2 + 10, by1 = gy - 8 - Math.max(hA, hB) - 38, by2 = gy + 6;
    c.g.save(); c.g.setLineDash([5, 4]); c.g.strokeStyle = k.alpha(C.amber, .55); c.g.lineWidth = 1.2; c.g.beginPath(); c.g.roundRect ? c.g.roundRect(bx1, by1, bx2 - bx1, by2 - by1, 8) : c.g.rect(bx1, by1, bx2 - bx1, by2 - by1); c.g.stroke(); c.g.restore();
    tag(k, d, "SYSTEM", bx1 + 6, by1 + 13, k.alpha(C.amber, .8));
    // spring
    if (mode === "spring") {
      const sxL = X(xA) + pwA / 2, cy = gy - 8 - Math.min(hA, hB) / 2;
      if (!ev || Es === 0) spring(d, sxL - 4, sxL + 4, cy, C.text, 5, 7); else spring(d, sxL, sxL + Math.min(0.12 * ppm, 40), cy, C.faint, 4, 5);
    }
    const tA = cart(k, d, X(xA), gy, pwA, hA, C.cyan, "A"), tB = cart(k, d, X(xB), gy, pwB, hB, C.pink, "B");
    const vs = 40;
    vec(k, d, X(xA), tA - 14, uA * vs, 0, C.cyan, "", { w: 2.5 });
    vec(k, d, X(xB), tB - 14, uB * vs, 0, C.pink, "", { w: 2.5 });
    // momentum bars
    const pNow = { pA: mA * uA, pB: mB * uB }, Pb = before.pA + before.pB, Pn = pNow.pA + pNow.pB;
    const pm = Math.max(0.5, Math.abs(before.pA), Math.abs(before.pB), Math.abs(pNow.pA), Math.abs(pNow.pB), Math.abs(Pb)) * 1.15;
    const top = gy + 52, rowH = clamp((H - top - 16) / 3, 34, 60), bw = rowH * 0.36;
    const lw = 64, zx = lw + (W - lw - 14) / 2, sc = (W - lw - 14) / 2 / pm;
    tag(k, d, "MOMENTUM  (outline = before, solid = now)", 12, top - 10);
    d.line(zx, top, zx, top + rowH * 3, C.line2, 1);
    [["p_A", before.pA, pNow.pA, C.cyan], ["p_B", before.pB, pNow.pB, C.pink], ["P total", Pb, Pn, C.amber]].forEach(([lab, b, n, col], i) => {
      const y = top + i * rowH + rowH / 2;
      d.text(lab, 12, y + 4, { font: `italic 600 13px ${F.math}`, color: col });
      d.rect(Math.min(zx, zx + b * sc), y - bw - 2, Math.abs(b * sc), bw, null, col, 1.4);
      d.rect(Math.min(zx, zx + n * sc), y + 2, Math.abs(n * sc), bw, k.alpha(col, .75));
      d.text(sfc(n) + " kg·m/s", n >= 0 ? Math.min(zx + n * sc + 6, W - 90) : Math.max(zx + n * sc - 6, lw + 70), y + 2 + bw / 2, { font: `11px ${F.mono}`, color: col, align: n >= 0 ? "left" : "right", base: "middle" });
    });
    const Kn = 0.5 * mA * uA * uA + 0.5 * mB * uB * uB;
    const neverMeet = mode === "stick" && !joined && vA <= vB;
    const noSpring = mode === "spring" && Es === 0;
    const note = !ev ? (mode === "spring" ? "Before release: the carts move together." : neverMeet ? "B moves away at least as fast as A approaches, so they never meet." : "Before the collision.")
      : mode === "spring" ? (noSpring ? "With no stored energy the carts simply keep moving together." : `The spring gave the carts ${sf(Es)} J of kinetic energy, yet their momenta changed by equal and opposite amounts.`)
      : `The carts stuck: ${sf(before.K - Kn)} J of kinetic energy became heat and sound, but no momentum was lost.`;
    k.setRO(`<div><h2>Total momentum</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>P</i></span> = <span class="num c1">${sf(Pn)}</span> kg·m/s</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c2"><i>p</i><sub>A</sub></span> = <i>m</i><sub>A</sub><i>v</i><sub>A</sub>`)} = <span class="v c2">${sf(pNow.pA)}</span><span class="lbl">${sf(mA)} kg × ${sf(uA)} m/s</span></div>
      <div class="row">${M(`<span class="c3"><i>p</i><sub>B</sub></span> = <i>m</i><sub>B</sub><i>v</i><sub>B</sub>`)} = <span class="v c3">${sf(pNow.pB)}</span><span class="lbl">${sf(mB)} kg × ${sf(uB)} m/s</span></div>
      <div class="row">${M(`<span class="c1"><i>P</i></span><sub>before</sub>`)} = <span class="v c1">${sf(Pb)}</span><span class="lbl">kg·m/s, fixed by the start</span></div>
      <div class="row">${M("<i>K</i>")} = <span class="v">${sf(Kn)} J</span><span class="lbl">was ${sf(before.K)} J before</span></div>
      <div class="row">${M("<i>v</i><sub>CM</sub> = <i>P</i>/<i>M</i>")} = <span class="v">${sf(Pn / Mt)} m/s</span><span class="lbl">never changes</span></div>
      </div>
      <div class="landmark${ev || neverMeet ? " hit" : ""}"><div class="big">${M(`<span class="c2"><i>p</i><sub>A</sub></span> + <span class="c3"><i>p</i><sub>B</sub></span> = ${sf(Pn)} = <span class="c1"><i>P</i></span><sub>before</sub>`)}</div><div class="note">${note}${over ? " Press Run again to repeat." : ""}</div></div>
      <p class="narr">Make one cart much heavier than the other: the light cart gets the big velocity change, the momentum changes stay equal and opposite.</p>`);
  });
};

/* ---------- Collisions ---------- */
L["mech-collisions"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "1d", mA = 2.0, mB = 1.0, vA = 1.5, vB = -0.5, e = 0.5, bImp = 0.5;
  const TL = 3.0, R = 0.12;
  let st;
  function reset(){
    if (mode === "1d") st = { xA: 0.5, xB: 2.2, uA: vA, uB: vB, hit: false, over: false, t: 0 };
    else st = { A: { x: 0.35, y: 0, vx: vA, vy: 0 }, B: { x: 1.5, y: bImp * 2 * R, vx: 0, vy: 0 }, hit: false, over: false, t: 0, trA: [], trB: [] };
  }
  k.modes([["1d", "Head-on (1-D)"], ["2d", "Glancing (2-D)"]], mode, v => { mode = v; showCtl([sB], v === "1d"); showCtl([sb], v === "2d"); reset(); });
  k.slider(`<span class="c2"><i>m</i><sub>A</sub></span>`, 0.5, 5, 0.5, mA, v => { mA = v; reset(); }, v => v.toFixed(1) + " kg");
  k.slider(`<span class="c3"><i>m</i><sub>B</sub></span>`, 0.5, 5, 0.5, mB, v => { mB = v; reset(); }, v => v.toFixed(1) + " kg");
  k.slider(`<span class="c2"><i>v</i><sub>A</sub></span>`, 0.2, 2, 0.1, vA, v => { vA = v; reset(); }, v => sfc(v) + " m/s");
  const sB = k.slider(`<span class="c3"><i>v</i><sub>B</sub></span>`, -1.5, 1.5, 0.1, vB, v => { vB = v; reset(); }, v => sfc(v) + " m/s");
  const sb = k.slider(`offset <i>b</i>/2<i>R</i>`, 0, 0.95, 0.05, bImp, v => { bImp = v; reset(); }, v => v.toFixed(2));
  k.slider(`<i>e</i>`, 0, 1, 0.05, e, v => { e = v; reset(); }, v => v.toFixed(2) + (v === 1 ? " elastic" : v === 0 ? " stick" : ""));
  k.button("Run again", reset);
  showCtl([sb], false);
  reset();
  k.loop(dt => {
    const Mt = mA + mB;
    c.begin(); const W = c.w, H = c.h;
    let KAb, KBb, KAa, KBa, pb, pa, lost, hit, never = false, extra = "";
    if (mode === "1d") {
      const wA = 0.2 + 0.09 * Math.sqrt(mA), wB = 0.2 + 0.09 * Math.sqrt(mB);
      if (!st.over) {
        for (let i = 0; i < 4; i++) { const h = dt / 4; st.t += h;
          if (!st.hit && st.xB - st.xA <= (wA + wB) / 2 && st.uA > st.uB) {
            const P = mA * st.uA + mB * st.uB, rel = st.uA - st.uB;
            st.uA = (P - mB * e * rel) / Mt; st.uB = (P + mA * e * rel) / Mt; st.hit = true;
          }
          st.xA += st.uA * h; st.xB += st.uB * h; }
        if (st.xA - wA / 2 < 0 || st.xB + wB / 2 > TL || st.t > 12) st.over = true;
      }
      never = vA <= vB;
      const P0 = mA * vA + mB * vB, rel0 = vA - vB;
      const vAa = never ? vA : (P0 - mB * e * rel0) / Mt, vBa = never ? vB : (P0 + mA * e * rel0) / Mt;
      KAb = 0.5 * mA * vA * vA; KBb = 0.5 * mB * vB * vB; KAa = 0.5 * mA * vAa * vAa; KBa = 0.5 * mB * vBa * vBa;
      pb = P0; pa = mA * vAa + mB * vBa; hit = st.hit; lost = (KAb + KBb) - (KAa + KBa);
      const x0 = 18, ppm = (W - 36) / TL, gy = clamp(H * 0.34, 120, 180), X = x => x0 + x * ppm;
      d.line(x0, gy, X(TL), gy, C.muted, 1.5);
      for (let s = 0; s <= TL + 1e-9; s += 0.5) { d.line(X(s), gy, X(s), gy + 5, C.line2, 1); d.text(s.toFixed(1), X(s), gy + 17, { font: `10px ${F.mono}`, color: C.faint, align: "center" }); }
      const hA = 22 + 12 * Math.sqrt(mA), hB = 22 + 12 * Math.sqrt(mB);
      const tA = cart(k, d, X(st.xA), gy, wA * ppm, hA, C.cyan, "A"), tB = cart(k, d, X(st.xB), gy, wB * ppm, hB, C.pink, "B");
      vec(k, d, X(st.xA), tA - 12, st.uA * 40, 0, C.cyan, "", { w: 2.5 });
      vec(k, d, X(st.xB), tB - 12, st.uB * 40, 0, C.pink, "", { w: 2.5 });
      if (hit) extra = `<div class="row">${M("<i>v</i>′<sub>A</sub>, <i>v</i>′<sub>B</sub>")} = <span class="v">${sf(vAa)}, ${sf(vBa)}</span><span class="lbl">m/s after</span></div>`;
      bars(gy + 44);
    } else {
      const A = st.A, B = st.B;
      if (!st.over) {
        for (let i = 0; i < 6; i++) { const h = dt / 6; st.t += h;
          const dx = B.x - A.x, dy = B.y - A.y, dist = Math.hypot(dx, dy);
          if (!st.hit && dist <= 2 * R) {
            const nx = dx / dist, ny = dy / dist, u = (A.vx - B.vx) * nx + (A.vy - B.vy) * ny;
            if (u > 0) { const Jn = (1 + e) * (mA * mB / Mt) * u; A.vx -= Jn / mA * nx; A.vy -= Jn / mA * ny; B.vx += Jn / mB * nx; B.vy += Jn / mB * ny; st.hit = true; }
          }
          A.x += A.vx * h; A.y += A.vy * h; B.x += B.vx * h; B.y += B.vy * h; }
        if ((st.t * 60 | 0) % 2 === 0) { st.trA.push([A.x, A.y]); st.trB.push([B.x, B.y]); }
        const out = p => p.x < -0.2 || p.x > 3.2 || Math.abs(p.y) > 1.2;
        if ((out(A) && out(B)) || st.t > 8) st.over = true;
      }
      // predicted result (independent of animation)
      const b = bImp * 2 * R, nx = Math.sqrt(4 * R * R - b * b) / (2 * R), ny = b / (2 * R);
      const u = vA * nx, Jn = (1 + e) * (mA * mB / Mt) * u;
      const aX = vA - Jn / mA * nx, aY = -Jn / mA * ny, bX = Jn / mB * nx, bY = Jn / mB * ny;
      KAb = 0.5 * mA * vA * vA; KBb = 0; KAa = 0.5 * mA * (aX * aX + aY * aY); KBa = 0.5 * mB * (bX * bX + bY * bY);
      pb = mA * vA; pa = mA * aX + mB * bX; hit = st.hit; lost = (KAb + KBb) - (KAa + KBa);
      // table (top view)
      const fh = clamp(H * 0.5, 170, 280), fy0 = 50, fcy = fy0 + (fh - fy0) / 2;
      const s = Math.min((W - 30) / 3.0, (fh - fy0) / 1.9), fx0 = (W - 3.0 * s) / 2;
      const TX = x => fx0 + x * s, TY = y => fcy - y * s;
      d.rr(TX(0), TY(0.95), 3.0 * s, 1.9 * s, 6, k.alpha(C.panel2, .5), C.line2, 1);
      const trail = (tr, col) => { for (let i = 1; i < tr.length; i++) d.line(TX(tr[i - 1][0]), TY(tr[i - 1][1]), TX(tr[i][0]), TY(tr[i][1]), k.alpha(col, .45), 1.5); };
      c.g.save(); c.g.beginPath(); c.g.rect(TX(0), TY(0.95), 3.0 * s, 1.9 * s); c.g.clip();
      trail(st.trA, C.cyan); trail(st.trB, C.pink);
      d.circle(TX(A.x), TY(A.y), R * s, k.alpha(C.cyan, .25), C.cyan, 2); d.text("A", TX(A.x), TY(A.y) + 1, { font: `600 11px ${F.mono}`, color: C.cyan, align: "center", base: "middle" });
      d.circle(TX(B.x), TY(B.y), R * s, k.alpha(C.pink, .25), C.pink, 2); d.text("B", TX(B.x), TY(B.y) + 1, { font: `600 11px ${F.mono}`, color: C.pink, align: "center", base: "middle" });
      if (!st.hit) d.line(TX(0), TY(0), TX(3), TY(0), k.alpha(C.cyan, .25), 1, [4, 4]);
      c.g.restore();
      tag(k, d, "TOP VIEW · equal radii, masses as set", TX(0) + 6, TY(0.95) + 14);
      if (bImp >= 1) never = true;
      // momentum vector diagram
      const vy0 = fh + 18, vh = H - vy0 - 12;
      const bxw = Math.min(W * 0.45, 220);
      const vs = Math.min((W - bxw - 70) / Math.max(pb, 0.1), (vh / 2 - 14) / Math.max(Math.abs(mA * aY), 1e-6), 120);
      const ox = 24, oy = vy0 + vh / 2;
      tag(k, d, hit ? "MOMENTUM AFTER: p′A + p′B = P" : "MOMENTUM BEFORE: P = pA", ox, vy0 + 4);
      if (hit) {
        vec(k, d, ox, oy, mA * aX * vs, -mA * aY * vs, C.cyan, "p′A", { w: 2.5 });
        vec(k, d, ox + mA * aX * vs, oy - mA * aY * vs, mB * bX * vs, -mB * bY * vs, C.pink, "p′B", { w: 2.5 });
        vec(k, d, ox, oy, pb * vs, 0, C.amber, "P", { w: 2, gap: 12 });
      } else vec(k, d, ox, oy, pb * vs, 0, C.amber, "P", { w: 3, gap: 12 });
      extra = hit ? `<div class="row">${M("θ<sub>A</sub>, θ<sub>B</sub>")} = <span class="v">${sf(Math.atan2(aY, aX) * 180 / Math.PI)}°, ${sf(Math.atan2(bY, bX) * 180 / Math.PI)}°</span><span class="lbl">directions after, from +x</span></div>
        <div class="row">${M("<i>P</i><sub>y</sub>")} = <span class="v c1">${sf(mA * aY + mB * bY)}</span><span class="lbl">sideways momenta cancel</span></div>` : "";
      // KE bars at right
      barsKE(W - bxw - 10, vy0 + 4, bxw, vh - 4);
    }
    function bars(top){
      const colW = Math.min(90, (W - 40) / 4 - 10), bh = H - top - 30;
      tag(k, d, "MOMENTUM", 18, top);
      const pm = Math.max(Math.abs(pb), 0.1) * 1.25;
      const zy = top + 14 + bh / 2 - 6;
      d.line(14, zy, 14 + 2 * (colW + 12) + 10, zy, C.line2, 1);
      [[pb, "before"], [pa, "after"]].filter((_, i) => i === 0 || hit || never).forEach(([p, lab], i) => {
        const x = 22 + i * (colW + 12), hh = p / pm * (bh / 2 - 12);
        d.rect(x, Math.min(zy, zy - hh), colW, Math.abs(hh), k.alpha(C.amber, .75));
        d.text(lab, x + colW / 2, top + bh + 20, { font: `11px ${F.sans}`, color: C.faint, align: "center" });
        d.text(sfc(p), x + colW / 2, hh >= 0 ? zy - hh - 5 : zy - hh + 13, { font: `11px ${F.mono}`, color: C.amber, align: "center" });
      });
      barsKE(W / 2 + 10, top, W / 2 - 24, bh + 4);
    }
    function barsKE(x0, top, w, bh){
      const colW = Math.min(80, (w - 16) / 2), Kb = KAb + KBb, km = Math.max(Kb, 0.01) * 1.12;
      const base = top + bh - 8, sc = (bh - 30) / km;
      tag(k, d, "KINETIC ENERGY", x0, top);
      const stack = (x, parts) => { let y = base; parts.forEach(([v, col]) => { const hh = v * sc; if (hh > 0.3) d.rect(x, y - hh, colW, hh, col); y -= hh; }); return y; };
      const y1 = stack(x0 + 4, [[KAb, k.alpha(C.cyan, .8)], [KBb, k.alpha(C.pink, .8)]]);
      d.text(sfc(Kb) + " J", x0 + 4 + colW / 2, y1 - 5, { font: `11px ${F.mono}`, color: C.text, align: "center" });
      d.text("before", x0 + 4 + colW / 2, base + 13, { font: `11px ${F.sans}`, color: C.faint, align: "center" });
      if (hit || never) {
        const lostNow = never ? 0 : Math.max(0, lost);
        const x2 = x0 + 16 + colW;
        const y2 = stack(x2, [[never ? KAb : KAa, k.alpha(C.cyan, .8)], [never ? KBb : KBa, k.alpha(C.pink, .8)], [lostNow, k.alpha(C.violet, .8)]]);
        if (lostNow * sc > 12) d.text("lost", x2 + colW / 2, y2 + lostNow * sc / 2 + 4, { font: `600 11px ${F.sans}`, color: C.ink, align: "center" });
        d.text("after", x2 + colW / 2, base + 13, { font: `11px ${F.sans}`, color: C.faint, align: "center" });
      }
      d.line(x0, base, x0 + 2 * colW + 20, base, C.line2, 1);
    }
    const kind = e === 1 ? "elastic" : e === 0 ? "perfectly inelastic" : "inelastic";
    const showAfter = hit;
    k.setRO(`<div><h2>${mode === "1d" ? "Head-on collision" : "Glancing collision"} · ${kind}</h2><div class="ro-big" style="margin-top:8px"><span class="c1">Σ<i>p</i></span> = <span class="num c1">${sf(pb)}</span> kg·m/s</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c1">Σ<i>p</i></span><sub>after</sub>`)} = <span class="v c1">${showAfter ? sf(pa) : "—"}</span><span class="lbl">${mode === "2d" ? "x-component; " : ""}equal to before</span></div>
      <div class="row">${M("<i>K</i><sub>before</sub>")} = <span class="v">${sf(KAb + KBb)} J</span><span class="lbl">total kinetic energy</span></div>
      <div class="row">${M("<i>K</i><sub>after</sub>")} = <span class="v">${showAfter ? sf(KAa + KBa) + " J" : "—"}</span><span class="lbl">after the collision</span></div>
      <div class="row">${M(`<span class="c4">Δ<i>K</i><sub>lost</sub></span>`)} = <span class="v c4">${showAfter ? sf(Math.max(0, lost)) + " J" : "—"}</span><span class="lbl">${showAfter && KAb + KBb > 0 ? sf(100 * Math.max(0, lost) / (KAb + KBb)) + " % to heat, sound, deformation" : "to heat, sound, deformation"}</span></div>
      ${extra}
      </div>
      ${never ? `<div class="landmark hit"><div class="big">No collision</div><div class="note">${mode === "1d" ? "B is not slower than A, so A never catches up. Raise vA or lower vB." : "With b ≥ 2R the pucks miss each other."}</div></div>`
        : showAfter ? `<div class="landmark hit"><div class="big">${M(`<i>e</i> = ${e.toFixed(2)} &nbsp; ⇒ &nbsp; <span class="c4">Δ<i>K</i></span> = ½μ(1 − <i>e</i><sup>2</sup>)<i>v</i><sub>rel,n</sub><sup>2</sup>`)}</div><div class="note">${e === 1 ? "Elastic: momentum and kinetic energy are both conserved." : e === 0 ? "The bodies move off together along the line of impact: the largest loss momentum allows." : "Momentum is conserved exactly; only part of the kinetic energy survives."}${mode === "1d" && e === 1 && mA === mB && vB === 0 ? " Equal masses, target at rest: A stops dead and B takes its velocity." : ""}</div></div>`
        : `<div class="landmark"><div class="big">${M(`<span class="c2"><i>m</i><sub>A</sub><i>v</i><sub>A</sub></span> + <span class="c3"><i>m</i><sub>B</sub><i>v</i><sub>B</sub></span> = <span class="c1">${sf(pb)}</span>`)}</div><div class="note">Watch the momentum bar: the collision cannot change it. Watch the energy bar: it depends on e.</div></div>`}
      <p class="narr">${mode === "1d" ? "Try e = 1 with equal masses and vB = 0, then e = 0: the carts stick and the most energy is lost." : "Slide b toward 0 for a head-on hit, toward 0.95 for a graze. With e = 1 and equal masses the pucks leave at 90° to each other."}</p>`);
  });
};

/* ---------- Center of mass ---------- */
L["mech-center-mass"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "points", n = 4, sel = 0, drag = -1;
  const pts = [{ x: 0.8, y: 0.8, m: 2 }, { x: 3.4, y: 0.6, m: 1 }, { x: 2.6, y: 2.8, m: 4 }, { x: 0.6, y: 2.4, m: 1.5 }, { x: 3.8, y: 2.2, m: 3 }];
  // wrench
  const LW = 0.40, mH = 0.75, mE = 0.25, dH = mE * LW / (mH + mE), dE = LW - dH;
  let v0 = 5.5, ang = 60, om = 12, wt = -1, trC = [], trH = [];
  k.modes([["points", "Point masses"], ["wrench", "Thrown wrench"]], mode, v => { mode = v; showCtl([sN, sM], v === "points"); showCtl([sV, sA, sW, bT], v === "wrench"); if (v === "wrench") throwIt(); });
  const sN = k.select("Masses", [[2, "2"], [3, "3"], [4, "4"], [5, "5"]], n, v => { n = +v; sel = Math.min(sel, n - 1); sM.set(pts[sel].m); });
  const sM = k.slider(`selected <span class="c2"><i>m</i></span>`, 0.5, 10, 0.5, pts[sel].m, v => { pts[sel].m = v; }, v => v.toFixed(1) + " kg");
  const sV = k.slider(`<i>v</i><sub>0</sub>`, 3, 7, 0.1, v0, v => { v0 = v; }, v => v.toFixed(1) + " m/s");
  const sA = k.slider(`θ`, 20, 80, 1, ang, v => { ang = v; }, v => v + "°");
  const sW = k.slider(`spin ω`, 0, 25, 1, om, v => { om = v; }, v => v + " rad/s");
  const bT = k.button("Throw", () => throwIt());
  function throwIt(){ wt = 0; trC = []; trH = []; }
  showCtl([sV, sA, sW, bT], false);
  let P = null;
  const pick = e => { if (!P) return -1; const p = c.xy(e); let best = -1, bd = 26; for (let i = 0; i < n; i++) { const dd = Math.hypot(P.X(pts[i].x) - p.x, P.Y(pts[i].y) - p.y); if (dd < bd) { bd = dd; best = i; } } return best; };
  const move = e => { if (drag < 0 || !P) return; const p = c.xy(e), q = P.inv(p.x, p.y); pts[drag].x = Math.round(clamp(q.x, P.xmin + 0.1, P.xmax - 0.1) * 10) / 10; pts[drag].y = Math.round(clamp(q.y, P.ymin + 0.1, P.ymax - 0.1) * 10) / 10; };
  c.cv.addEventListener("pointerdown", e => { if (mode !== "points") return; const i = pick(e); if (i >= 0) { drag = i; sel = i; sM.set(pts[i].m); c.cv.setPointerCapture(e.pointerId); move(e); } });
  c.cv.addEventListener("pointermove", move);
  c.cv.addEventListener("pointerup", () => drag = -1);
  c.cv.addEventListener("pointercancel", () => drag = -1);
  k.loop(dt => {
    c.begin(); const W = c.w, H = c.h;
    if (mode === "points") {
      P = k.plot(c, { xmin: -0.6, xmax: 4.6, ymin: -0.6, ymax: 3.6, equal: true, pad: { l: 34, r: 14, t: 52, b: 28 }, xstep: 1, ystep: 1, xlabel: "x (m)", ylabel: "y (m)" });
      P.grid(); P.axes();
      const act = pts.slice(0, n), Mt = act.reduce((s, p) => s + p.m, 0);
      const xc = act.reduce((s, p) => s + p.m * p.x, 0) / Mt, yc = act.reduce((s, p) => s + p.m * p.y, 0) / Mt;
      act.forEach(p => d.arrow(P.X(0), P.Y(0), P.X(p.x), P.Y(p.y), k.alpha(C.pink, .75), 1.6));
      act.forEach((p, i) => {
        const r = 7 + 4 * Math.sqrt(p.m);
        d.circle(P.X(p.x), P.Y(p.y), r, k.alpha(C.cyan, i === sel ? .45 : .25), C.cyan, i === sel ? 2.5 : 1.5);
        d.text(`${p.m.toFixed(1)}`, P.X(p.x), P.Y(p.y) + 1, { font: `600 11px ${F.mono}`, color: C.text, align: "center", base: "middle" });
        d.text(`m${i + 1}`, P.X(p.x) + r + 3, P.Y(p.y) - r + 2, { font: `italic 12px ${F.math}`, color: C.cyan });
      });
      d.arrow(P.X(0), P.Y(0), P.X(xc), P.Y(yc), C.amber, 2.2);
      const X = P.X(xc), Y = P.Y(yc);
      d.circle(X, Y, 9, null, C.amber, 2.5); d.line(X - 14, Y, X + 14, Y, C.amber, 2); d.line(X, Y - 14, X, Y + 14, C.amber, 2);
      d.text("CM", X + 12, Y + 16, { font: `600 12px ${F.ui}`, color: C.amber });
      const rows = act.map((p, i) => `<div class="row">${M(`<span class="c2"><i>m</i><sub>${i + 1}</sub></span> = ${p.m.toFixed(1)}`)} at <span class="v c3">(${sf(p.x, 2)}, ${sf(p.y, 2)})</span><span class="lbl">${M(`<i>m</i><i>x</i> = ${sf(p.m * p.x)}, <i>m</i><i>y</i> = ${sf(p.m * p.y)}`)}</span></div>`).join("");
      const maxM = Math.max(...act.map(p => p.m)), heavy = act.findIndex(p => p.m === maxM);
      k.setRO(`<div><h2>Center of mass</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><b>r</b><sub>CM</sub></span> = (<span class="num c1">${sf(xc)}</span>, <span class="num c1">${sf(yc)}</span>) m</div></div>
        <div class="ro-rows">${rows}
        <div class="row">${M("<i>M</i> = Σ<i>m</i>")} = <span class="v">${sf(Mt)} kg</span><span class="lbl">${M(`Σ<i>mx</i> = ${sf(xc * Mt)}, Σ<i>my</i> = ${sf(yc * Mt)}`)}</span></div></div>
        <div class="landmark"><div class="big">${M(`<span class="c1"><i>x</i><sub>CM</sub></span> = <span class="fr"><span>Σ<span class="c2"><i>m</i></span><span class="c3"><i>x</i></span></span><span><i>M</i></span></span> = <span class="fr"><span>${sf(xc * Mt)}</span><span>${sf(Mt)}</span></span> = ${sf(xc)} m`)}</div><div class="note">A weighted average: the heaviest mass (m${heavy + 1}, ${sf(maxM)} kg) pulls the center of mass toward itself.</div></div>
        <p class="narr">Drag the masses. Make one mass 10 kg and watch the center of mass run to it; make all masses equal and it sits at the plain average.</p>`);
    } else {
      P = null;
      const th = ang * Math.PI / 180, vx = v0 * Math.cos(th), vy = v0 * Math.sin(th), y0 = 0.5;
      const tLand = (vy + Math.sqrt(vy * vy + 2 * G0 * y0)) / G0, R = vx * tLand, hmax = y0 + vy * vy / (2 * G0);
      if (wt >= 0 && wt < tLand) wt = Math.min(tLand, wt + dt * (k.reduce ? 2 : 0.6));
      const Q = k.plot(c, { xmin: -0.4, xmax: 5.6, ymin: -0.2, ymax: 3.2, equal: true, pad: { l: 34, r: 14, t: 52, b: 28 }, xstep: 1, ystep: 1, xlabel: "x (m)", ylabel: "y (m)" });
      Q.grid(); Q.axes();
      Q.fn(x => { const tt = x / vx; return y0 + vy * tt - 0.5 * G0 * tt * tt; }, k.alpha(C.amber, .45), 1.3, 0, R, [5, 4]);
      const pos = tt => { const cx = vx * tt, cy = y0 + vy * tt - 0.5 * G0 * tt * tt, phi = th + om * tt; return { cx, cy, hx: cx + dH * Math.cos(phi), hy: cy + dH * Math.sin(phi), ex: cx - dE * Math.cos(phi), ey: cy - dE * Math.sin(phi) }; };
      const tt = Math.max(0, wt);
      if (wt >= 0) { const N = 90; const trail = (sel2, col, w) => { c.g.save(); c.g.strokeStyle = col; c.g.lineWidth = w; c.g.beginPath(); for (let i = 0; i <= N; i++) { const q = pos(tt * i / N), [x, y] = sel2(q); i ? c.g.lineTo(Q.X(x), Q.Y(y)) : c.g.moveTo(Q.X(x), Q.Y(y)); } c.g.stroke(); c.g.restore(); };
        trail(q => [q.ex, q.ey], k.alpha(C.cyan, .35), 1.2); trail(q => [q.hx, q.hy], k.alpha(C.cyan, .7), 1.6); trail(q => [q.cx, q.cy], C.amber, 2.4); }
      const q = pos(tt);
      d.line(Q.X(q.ex), Q.Y(q.ey), Q.X(q.hx), Q.Y(q.hy), C.muted, 5);
      d.circle(Q.X(q.hx), Q.Y(q.hy), 7, k.alpha(C.cyan, .5), C.cyan, 2);
      d.circle(Q.X(q.ex), Q.Y(q.ey), 4, k.alpha(C.cyan, .5), C.cyan, 1.5);
      d.circle(Q.X(q.cx), Q.Y(q.cy), 4, C.amber);
      d.line(Q.X(-0.4), Q.Y(0), Q.X(5.6), Q.Y(0), C.muted, 1.5);
      tag(k, d, "wrench drawn to scale: 0.40 m, head 0.75 kg, handle end 0.25 kg", Q.X(-0.3), Q.Y(3.05) + 4);
      const landed = wt >= tLand;
      k.setRO(`<div><h2>Center of mass of a tumbling wrench</h2><div class="ro-big" style="margin-top:8px"><span class="c1">(<i>x</i>, <i>y</i>)<sub>CM</sub></span> = (<span class="num c1">${sf(q.cx)}</span>, <span class="num c1">${sf(q.cy)}</span>) m</div></div>
        <div class="ro-rows">
        <div class="row">${M("<i>d</i><sub>head</sub> = <i>m</i><sub>end</sub><i>L</i>/<i>M</i>")} = <span class="v">${sf(dH)} m</span><span class="lbl">CM sits 0.100 m from the head</span></div>
        <div class="row">${M("<i>t</i>")} = <span class="v">${sf(tt)} s</span><span class="lbl">flight time ${sf(tLand)} s</span></div>
        <div class="row">${M("<i>y</i><sub>max</sub>")} = <span class="v">${sf(hmax)} m</span><span class="lbl">released 0.500 m above the ground</span></div>
        <div class="row">${M("<i>x</i><sub>land</sub>")} = <span class="v">${landed ? sf(R) + " m" : "—"}</span><span class="lbl">where the CM comes down</span></div>
        <div class="row">${M("spin")} = <span class="v">${sf(om * tt / (2 * Math.PI), 2)} turns</span><span class="lbl">does not affect the CM path</span></div>
        </div>
        <div class="landmark${landed ? " hit" : ""}"><div class="big">${M("<i>M</i><b>a</b><sub>CM</sub> = <i>M</i><b>g</b>")}</div><div class="note">Only gravity acts from outside, so the center of mass (amber) follows the same parabola as a thrown ball while the head (cyan) loops around it.</div></div>
        <p class="narr">Change the spin: the head's path changes completely, the amber path does not change at all.</p>`);
    }
  });
};

/* ---------- Potential energy diagrams ---------- */
L["mech-energy-diagrams"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const m = 0.500;
  const PRE = {
    spring: { name: "Spring  U = ½kx²", U: x => x * x, dU: x => 2 * x, x0: -2.6, x1: 2.6, y0: -0.4, y1: 5, E: [0.1, 4.5, 2.0], eq: [[0, "stable"]], start: 0, ts: 1, desc: "½(2.00 N/m)x²" },
    double: { name: "Double well  U = x⁴ − 2x²", U: x => x ** 4 - 2 * x * x, dU: x => 4 * x ** 3 - 4 * x, x0: -1.9, x1: 1.9, y0: -1.4, y1: 2.2, E: [-0.95, 1.8, -0.75], eq: [[-1, "stable"], [0, "unstable"], [1, "stable"]], start: 1, ts: 1, desc: "x⁴ − 2x² (the worked example)" },
    mol: { name: "Molecular (Lennard-Jones type)", U: x => Math.pow(1 / x, 12) - 2 * Math.pow(1 / x, 6), dU: x => -12 * Math.pow(1 / x, 13) + 12 * Math.pow(1 / x, 7), x0: 0.82, x1: 3.2, y0: -1.3, y1: 1.4, E: [-0.95, 0.6, -0.5], eq: [[1, "stable"]], start: 1, ts: 0.25, desc: "(1/x)¹² − 2(1/x)⁶" }
  };
  let pre = "double", p = PRE[pre], E = p.E[2], x = p.start, vel = 0, run = true, esc = false, drag = false;
  const allowed = xx => p.U(xx) <= E + 1e-12;
  function place(){ // keep x in an allowed spot
    if (allowed(x)) return;
    let best = null, bd = 1e9; for (let i = 0; i <= 800; i++) { const xx = p.x0 + (p.x1 - p.x0) * i / 800; if (allowed(xx) && Math.abs(xx - x) < bd) { bd = Math.abs(xx - x); best = xx; } }
    if (best !== null) x = best;
  }
  const sel = k.select("Potential", Object.entries(PRE).map(([key, q]) => [key, q.name]), pre, v => { pre = v; p = PRE[v]; sE.setMin(p.E[0]); sE.setMax(p.E[1]); E = p.E[2]; sE.set(E); x = p.start; vel = 0; esc = false; place(); });
  void sel;
  const sE = k.slider(`<span class="c1"><i>E</i></span>`, p.E[0], p.E[1], 0.05, E, v => { E = v; esc = false; place(); }, v => sfc(v) + " J");
  const bRun = k.button("Pause", () => { run = !run; bRun.textContent = run ? "Pause" : "Play"; });
  k.button("Reset", () => { x = p.start; vel = 0; esc = false; place(); }, "btn ghost");
  let P = null;
  const setX = e => { if (!P) return; const q = P.inv(c.xy(e).x, 0); x = clamp(q.x, p.x0 + 0.02, p.x1 - 0.02); esc = false; if (p.U(x) > E) { E = Math.min(p.E[1], Math.round(p.U(x) * 100) / 100 + 0.001); sE.set(E); if (p.U(x) > E) place(); } };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setX(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setX(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.addEventListener("pointercancel", () => drag = false);
  // turning points: roots of U − E on a grid + bisection
  function turning(){
    const out = [], N = 1200; let xa = p.x0, fa = p.U(xa) - E;
    for (let i = 1; i <= N; i++) { const xb = p.x0 + (p.x1 - p.x0) * i / N, fb = p.U(xb) - E;
      if (fa === 0) out.push(xa); else if (fa * fb < 0) { let lo = xa, hi = xb; for (let j = 0; j < 50; j++) { const mid = (lo + hi) / 2; ((p.U(lo) - E) * (p.U(mid) - E) <= 0) ? hi = mid : lo = mid; } out.push((lo + hi) / 2); }
      xa = xb; fa = fb; }
    return out;
  }
  k.loop(dt => {
    // motion: velocity Verlet, then speed re-set from energy so E stays exact; reflect at turning points
    if (run && !drag && !esc) {
      const steps = 24, h = dt / steps * p.ts * (k.reduce ? 0.5 : 1);
      for (let i = 0; i < steps; i++) {
        const a0 = -p.dU(x) / m;
        let xn = x + vel * h + 0.5 * a0 * h * h;
        if (p.U(xn) > E) { vel = -vel; continue; }
        const a1 = -p.dU(xn) / m; let vn = vel + 0.5 * (a0 + a1) * h;
        const sp = Math.sqrt(Math.max(0, 2 * (E - p.U(xn)) / m));
        vn = (vn === 0 ? Math.sign(a1) : Math.sign(vn)) * sp;
        x = xn; vel = vn;
        if (x > p.x1 + 0.05 || x < p.x0 - 0.05) { esc = true; break; }
      }
    }
    c.begin(); const W = c.w, H = c.h;
    P = k.plot(c, { xmin: p.x0, xmax: p.x1, ymin: p.y0, ymax: p.y1, pad: { l: 44, r: 16, t: 54, b: 30 }, xlabel: "x (m)", ylabel: "U (J)" });
    P.grid(); P.axes();
    const tp = turning();
    // forbidden shading where U > E
    P.clip(() => { const g = c.g; const N = Math.round(P.width); for (let i = 0; i < N; i++) { const xx = P.inv(P.left + i + 0.5, 0).x; if (p.U(xx) > E) { g.fillStyle = k.alpha(C.text, .06); g.fillRect(P.left + i, P.top, 1, P.height); } } });
    P.fn(p.U, C.cyan, 2.6);
    P.line(p.x0, E, p.x1, E, C.amber, 2);
    d.text(`E = ${sfc(E)} J`, P.X(p.x1) - 4, P.Y(E) - 6, { font: `600 12px ${F.sans}`, color: C.amber, align: "right" });
    tp.forEach(t => { P.point(t, E, C.amber, 4.5, true); });
    p.eq.forEach(([xe, kind]) => { const ye = p.U(xe); if (ye > p.y1) return; P.point(xe, ye, C.violet, 5.5); d.text(kind, P.X(xe), P.Y(ye) + (kind === "stable" ? 18 : -10), { font: `12px ${F.sans}`, color: C.violet, align: "center" }); });
    const inView = x >= p.x0 && x <= p.x1;
    const U = inView ? p.U(x) : 0, K = Math.max(0, E - U), Fx = inView ? -p.dU(x) : 0, v = Math.sqrt(2 * K / m);
    if (inView) {
      const px = P.X(x), py = P.Y(Math.min(U, p.y1));
      if (K > 0.004) { d.line(px, P.Y(E), px, py, k.alpha(C.text, .45), 1.5, [2, 3]); if (P.Y(U) - P.Y(E) > 22) d.text("K", px + 5, (P.Y(E) + py) / 2 + 4, { font: `italic 13px ${F.math}`, color: C.muted }); }
      const fl = clamp(Fx * 26, -110, 110);
      if (Math.abs(fl) > 3) vec(k, d, px, py - 14, fl, 0, C.pink, "F", { w: 2.8 });
      d.circle(px, py - 7, 7, C.text, C.ink, 1.5);
    }
    tag(k, d, p.desc.toUpperCase(), P.left + 6, P.top + 14);
    const bound = tp.length >= 2 || (pre === "spring");
    const atEq = p.eq.find(([xe]) => Math.abs(xe - x) < 0.02 && K < 0.01);
    const unb = pre === "mol" && E >= 0;
    const tps = tp.map(t => sf(t)).join(", ");
    k.setRO(`<div><h2>Reading the diagram</h2><div class="ro-big" style="margin-top:8px"><span class="c3"><i>F</i><sub>x</sub></span> = −d<i>U</i>/d<i>x</i> = <span class="num c3">${inView ? sf(Fx) : "0"}</span> N</div></div>
      <div class="ro-rows">
      <div class="row">${M("<i>x</i>")} = <span class="v">${inView ? sf(x) + " m" : "off the graph"}</span><span class="lbl">drag on the graph to move the particle</span></div>
      <div class="row">${M(`<span class="c2"><i>U</i>(<i>x</i>)</span>`)} = <span class="v c2">${inView ? sf(U) + " J" : "≈ 0"}</span><span class="lbl">height of the curve here</span></div>
      <div class="row">${M(`<i>K</i> = <span class="c1"><i>E</i></span> − <span class="c2"><i>U</i></span>`)} = <span class="v">${sf(inView ? K : E)} J</span><span class="lbl">${M("<i>v</i> = √(2<i>K</i>/<i>m</i>)")} = ${sf(inView ? v : Math.sqrt(2 * E / m))} m/s, m = 0.500 kg</span></div>
      <div class="row">turning points <span class="v c1">${tps ? tps + " m" : "none"}</span><span class="lbl">where ${M("<i>U</i> = <i>E</i>")}</span></div>
      </div>
      ${unb ? `<div class="landmark hit"><div class="big">${M("<i>E</i> ≥ 0")}: unbound</div><div class="note">The energy line never meets the curve on the right, so the particle flies apart to large x: the molecule dissociates. Press Reset or lower E.</div></div>`
        : atEq ? `<div class="landmark hit"><div class="big">Equilibrium at ${M(`<i>x</i> = ${sf(atEq[0])}`)} (${atEq[1]})</div><div class="note">${M("d<i>U</i>/d<i>x</i> = 0")}, so there is no force. ${atEq[1] === "stable" ? "A small push is met by a restoring force." : "Any small push grows: the particle rolls away."}</div></div>`
        : pre === "double" && E < 0 ? `<div class="landmark hit"><div class="big">Trapped in one well: ${M("<i>E</i> &lt; <i>U</i>(0) = 0")}</div><div class="note">The barrier at x = 0 is higher than the total energy, so the particle oscillates between ${tps} m and cannot reach the other well.</div></div>`
        : `<div class="landmark"><div class="big">${bound ? "Bound motion" : "Motion"} between the turning points</div><div class="note">The force (pink) always points downhill on the curve, toward lower U. The particle is fastest where the curve is lowest.</div></div>`}
      <p class="narr">${pre === "double" ? "Raise E above 0 and the particle rolls over the unstable hump into the other well." : pre === "mol" ? "Raise E to 0 or above: the energy line no longer meets the curve on the right." : "The turning points sit at ±√(2E/k); raise E and they spread out."}</p>`);
  });
};
})();
