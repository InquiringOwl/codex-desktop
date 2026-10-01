/* ============ Labs: Mechanics, part 7 (rotational kinematics, moment of inertia, torque, rotational dynamics, static equilibrium) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
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
const tag = (k, d, s, x, y, color, align = "left") => d.text(s, x, y, { font: `600 11px ${k.F.ui}`, color: color || k.C.faint, align, base: "alphabetic" });
const showCtl = (items, on) => items.forEach(it => { const el = it && (it.el || it); const box = el && (el.closest ? el.closest(".ctl") : null) || el; if (box) box.style.display = on ? "" : "none"; });
// physics angle (counterclockwise +, y up) → canvas point
const P2 = (cx, cy, r, a) => [cx + r * Math.cos(a), cy - r * Math.sin(a)];
// curved arrow from physics angle a0 to a1 (counterclockwise if a1 > a0)
function arcArrow(g, cx, cy, r, a0, a1, color, w = 2.5){
  if (Math.abs(a1 - a0) < 0.04) return;
  g.save(); g.strokeStyle = color; g.fillStyle = color; g.lineWidth = w; g.lineCap = "round";
  g.beginPath(); g.arc(cx, cy, r, -a0, -a1, a1 > a0); g.stroke();
  const s = a1 > a0 ? 1 : -1, [ex, ey] = P2(cx, cy, r, a1);
  const ang = Math.atan2(-Math.cos(a1) * s, -Math.sin(a1) * s), h = 6 + w * 1.6;
  g.beginPath(); g.moveTo(ex + Math.cos(ang) * 2, ey + Math.sin(ang) * 2);
  g.lineTo(ex - h * Math.cos(ang - .45), ey - h * Math.sin(ang - .45)); g.lineTo(ex - h * Math.cos(ang + .45), ey - h * Math.sin(ang + .45)); g.closePath(); g.fill(); g.restore();
}
// ⊙ (out of page) or ⊗ (into page)
function axisMark(d, x, y, r, color, out){
  d.circle(x, y, r, null, color, 2);
  if (out) d.circle(x, y, 2.6, color);
  else { const q = r * 0.62; d.line(x - q, y - q, x + q, y + q, color, 2); d.line(x - q, y + q, x + q, y - q, color, 2); }
}

/* ---------- Rotational kinematics ---------- */
L["mech-rot-kinematics"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const RW = 0.50, TMAX = 12, WMAX = 25;
  let w0 = 4, al = -1, rp = 0.40, t = 0, run = true, stopped = "";
  const reset = () => { t = 0; stopped = ""; };
  k.slider(`<span class="c3">ω</span><sub>0</sub>`, -10, 10, 0.5, w0, v => { w0 = v; reset(); }, v => sfc(v) + " rad/s");
  k.slider(`<span class="c1">α</span>`, -3, 3, 0.1, al, v => { al = Math.round(v * 10) / 10; reset(); }, v => sfc(v) + " rad/s²");
  k.slider(`<i>r</i>`, 0.05, 0.50, 0.01, rp, v => rp = v, v => v.toFixed(2) + " m");
  const bRun = k.button("Pause", () => { if (stopped) { reset(); run = true; } else run = !run; bRun.textContent = run ? "Pause" : "Run"; });
  k.button("Reset", () => { reset(); }, "btn ghost");
  k.loop(dt => {
    if (run && !stopped) {
      t += dt;
      const wn = w0 + al * t;
      if (t >= TMAX) { t = TMAX; stopped = "time"; }
      else if (Math.abs(wn) > WMAX) { t = (Math.sign(wn) * WMAX - w0) / al; stopped = "fast"; }
      if (stopped) { run = false; bRun.textContent = "Run again"; }
    }
    const th = w0 * t + 0.5 * al * t * t, w = w0 + al * t;
    const vt = rp * w, at = rp * al, ac = rp * w * w;
    c.begin(); const W = c.w, H = c.h, wide = W >= 560;
    // layout
    const wheelBox = wide ? { x: 0, y: 0, w: W * 0.5, h: H } : { x: 0, y: 0, w: W, h: H * 0.6 };
    const cx = wheelBox.x + wheelBox.w / 2, cy = wheelBox.y + wheelBox.h / 2 + 6;
    const Rpx = Math.max(40, Math.min(wheelBox.w, wheelBox.h) / 2 - 46);
    // reference line (θ = 0)
    d.line(cx, cy, cx + Rpx + 26, cy, C.line2, 1.2, [4, 4]);
    tag(k, d, "θ = 0", cx + Rpx + 28, cy + 4, C.faint);
    // wheel
    d.circle(cx, cy, Rpx, k.alpha(C.panel3 || C.panel2, .6), C.muted, 3);
    for (let i = 0; i < 6; i++) { const a = th + i * Math.PI / 3; const [x2, y2] = P2(cx, cy, Rpx - 2, a); d.line(cx, cy, x2, y2, i === 0 ? C.cyan : k.alpha(C.muted, .55), i === 0 ? 2.5 : 1.3); }
    d.circle(cx, cy, 6, C.panel2, C.muted, 2);
    // swept angle within the current revolution
    const frac = ((th % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI), revs = th / (2 * Math.PI);
    if (Math.abs(th) > 0.02) {
      const aEnd = th >= 0 ? frac : frac - 2 * Math.PI;
      g.save(); g.fillStyle = k.alpha(C.cyan, .13); g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, Rpx * 0.3, 0, -aEnd, aEnd > 0); g.closePath(); g.fill(); g.restore();
      arcArrow(g, cx, cy, Rpx * 0.3, 0, aEnd, C.cyan, 2);
    }
    // ω arrow around the rim
    if (Math.abs(w) > 0.05) { const span = Math.sign(w) * Math.min(Math.abs(w) / WMAX, 1) * 4.6 + Math.sign(w) * 0.35; arcArrow(g, cx, cy, Rpx + 14, th + 1.2, th + 1.2 + span, C.pink, 3); }
    // α arrow near hub
    if (Math.abs(al) > 0.05) { const span = Math.sign(al) * (0.5 + Math.min(Math.abs(al) / 3, 1) * 3.6); arcArrow(g, cx, cy, Rpx * 0.55, Math.PI * 0.75, Math.PI * 0.75 + span, C.amber, 2.5); }
    d.text("α", ...P2(cx, cy, Rpx * 0.55 + 14, Math.PI * 0.75), { font: `italic 600 15px ${F.math}`, color: al ? C.amber : C.faint, align: "center", base: "middle" });
    d.text("ω", ...P2(cx, cy, Rpx + 30, th + 1.2), { font: `italic 600 16px ${F.math}`, color: C.pink, align: "center", base: "middle" });
    // tracked point and tangential velocity
    const rpx = rp / RW * Rpx, [px, py] = P2(cx, cy, rpx, th);
    const vs = Math.min(Rpx * 0.9 / 12.5, 14), vx = -Math.sin(th) * vt * vs, vy = -Math.cos(th) * vt * vs;
    if (Math.abs(vt) * vs > 4) d.arrow(px, py, px + vx, py + vy, C.violet, 3);
    d.circle(px, py, 6, C.violet, C.ink, 1.5);
    d.text(`v = ${sfc(vt)} m/s`, px + vx + (vx >= 0 ? 8 : -8), py + vy + (vy >= 0 ? 14 : -8), { font: `italic 13px ${F.math}`, color: C.violet, align: vx >= 0 ? "left" : "right" });
    d.text(`t = ${t.toFixed(2)} s`, wheelBox.x + 14, wheelBox.y + 22, { font: `13px ${F.mono}`, color: C.faint });
    // ω(t) graph with θ as the area under it
    const gb = wide ? { l: W * 0.5 + 40, r: 16, t: 34, b: 34 } : { l: 44, r: 14, t: H * 0.6 + 22, b: 28 };
    const P = k.plot(c, { xmin: 0, xmax: TMAX, ymin: -WMAX, ymax: WMAX, pad: gb, xstep: 2, ystep: 5, xlabel: "t (s)", ylabel: "ω (rad/s)" });
    P.grid(); P.axes();
    P.clip(() => { g.save(); g.fillStyle = k.alpha(C.cyan, .18); g.beginPath(); g.moveTo(P.X(0), P.Y(0)); const N = 60; for (let i = 0; i <= N; i++) { const s = t * i / N; g.lineTo(P.X(s), P.Y(w0 + al * s)); } g.lineTo(P.X(t), P.Y(0)); g.closePath(); g.fill(); g.restore(); });
    P.fn(s => w0 + al * s, k.alpha(C.pink, .45), 1.6, 0, TMAX, [5, 4]);
    P.fn(s => w0 + al * s, C.pink, 2.6, 0, t);
    P.point(t, w, C.pink, 5);
    tag(k, d, "SHADED AREA = θ", gb.l + 6, gb.t - 8, C.cyan);
    // readout
    const tStop = al !== 0 && w0 !== 0 && Math.sign(al) !== Math.sign(w0) ? -w0 / al : null;
    let land;
    if (al === 0) land = `<div class="landmark hit"><div class="big">${M("α = 0 ⇒ θ = ω<i>t</i>")}</div><div class="note">Uniform rotation: equal angles in equal times, and the point's speed rω stays ${sf(Math.abs(vt))} m/s. Only its direction changes, so it still has centripetal acceleration.</div></div>`;
    else if (tStop !== null && t > tStop) land = `<div class="landmark hit"><div class="big">${M("ω changed sign")}</div><div class="note">α kept pointing the same way, so the wheel slowed, stopped for an instant at t = ${sf(tStop)} s and is now spinning the other way, faster and faster.</div></div>`;
    else if (tStop !== null) land = `<div class="landmark"><div class="big">${M("α opposes ω: slowing down")}</div><div class="note">ω and α have opposite signs. If nothing changes, ω reaches zero at t = −ω₀/α = ${sf(tStop)} s.</div></div>`;
    else land = `<div class="landmark"><div class="big">${M("ω = ω<sub>0</sub> + α<i>t</i>")}</div><div class="note">${w0 === 0 ? "Starting from rest, the wheel turns the way α points." : "ω and α have the same sign, so the wheel speeds up."} Every point shares this ω; only v = rω depends on where the point is.</div></div>`;
    k.setRO(`<div><h2>Angular velocity</h2><div class="ro-big" style="margin-top:8px"><span class="c3">ω</span> = <span class="num c3">${sf(w)}</span> rad/s</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c2">θ</span> = ω<sub>0</sub><i>t</i> + ½α<i>t</i><sup>2</sup>`)} = <span class="v c2">${sf(th)} rad</span><span class="lbl">${sf(revs)} rev from the dashed line</span></div>
      <div class="row">${M(`<span class="c1">α</span>`)} = <span class="v c1">${sf(al)} rad/s²</span><span class="lbl">slope of the ω(t) line</span></div>
      <div class="row">${M(`<span class="c3">ω</span>`)} = <span class="v c3">${sf(w * 60 / (2 * Math.PI))} rpm</span><span class="lbl">× 60/(2π) converts rad/s to rpm</span></div>
      <div class="row">${M(`<span class="c4"><i>v</i><sub>t</sub></span> = <i>r</i>ω`)} = <span class="v c4">${sf(vt)} m/s</span><span class="lbl">point at r = ${rp.toFixed(2)} m</span></div>
      <div class="row">${M("<i>a</i><sub>t</sub> = <i>r</i>α, &nbsp;<i>a</i><sub>c</sub> = <i>r</i>ω<sup>2</sup>")} <span class="v">${sf(at)}, ${sf(ac)} m/s²</span><span class="lbl">tangential and centripetal</span></div>
      </div>${land}
      <p class="narr">${stopped === "fast" ? "Stopped at |ω| = 25 rad/s. " : stopped === "time" ? "Stopped at 12 s. " : ""}Set ω₀ and α with opposite signs to watch the wheel stop and reverse. Move r: ω stays the same, v changes.</p>`);
  });
};

/* ---------- Moment of inertia & rotational KE ---------- */
L["mech-rot-inertia"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const SH = {
    hoop:   { n: "Thin hoop", f: 1, fh: "<i>MR</i><sup>2</sup>", rod: false },
    shell:  { n: "Spherical shell", f: 2 / 3, fh: "⅔<i>MR</i><sup>2</sup>", rod: false },
    disk:   { n: "Solid disk", f: 1 / 2, fh: "½<i>MR</i><sup>2</sup>", rod: false },
    sphere: { n: "Solid sphere", f: 2 / 5, fh: "⅖<i>MR</i><sup>2</sup>", rod: false },
    rode:   { n: "Rod about end", f: 1 / 3, fh: "⅓<i>ML</i><sup>2</sup>", rod: true },
    rodc:   { n: "Rod about centre", f: 1 / 12, fh: "<span class=\"fr\"><span>1</span><span>12</span></span><i>ML</i><sup>2</sup>", rod: true }
  };
  let mode = "shape", sh = "disk", Mm = 2, Rr = 0.4, om = 6, mb = 0.5, db = 0.3, dd = 0.2, phi = 0;
  const LROD = 1.0;
  k.modes([["shape", "Shapes"], ["beads", "Beads on a rod"], ["axis", "Parallel axis"]], mode, v => { mode = v; vis(); });
  const sS = k.select("Shape", Object.entries(SH).map(([key, o]) => [key, o.n]), sh, v => sh = v);
  const sM = k.slider(`<span class="c2"><i>M</i></span>`, 0.5, 10, 0.5, Mm, v => Mm = v, v => v.toFixed(1) + " kg");
  const sR = k.slider(`<i>R</i>`, 0.10, 0.50, 0.01, Rr, v => Rr = v, v => v.toFixed(2) + " m");
  const sMb = k.slider(`bead <i>m</i>`, 0, 2, 0.1, mb, v => mb = v, v => v.toFixed(1) + " kg");
  const sDb = k.slider(`bead <i>d</i>`, 0, 0.5, 0.01, db, v => db = v, v => v.toFixed(2) + " m");
  const sD = k.slider(`axis offset <i>d</i>`, 0, 0.5, 0.01, dd, v => dd = v, v => v.toFixed(2) + " m");
  k.slider(`ω`, 0, 20, 0.5, om, v => om = v, v => v.toFixed(1) + " rad/s");
  function vis(){ showCtl([sS], mode === "shape"); showCtl([sMb, sDb], mode === "beads"); showCtl([sD], mode === "axis"); showCtl([sR], mode !== "beads"); sR.el.previousElementSibling.innerHTML = mode === "shape" && SH[sh].rod ? "<i>L</i>" : "<i>R</i>"; }
  sS.el.addEventListener("change", vis);
  vis();
  k.loop(dt => {
    phi += om * dt; if (phi > 1e4) phi -= 2 * Math.PI * 1000;
    if (Math.abs(+sD.el.max - Rr) > 1e-9) { sD.setMax(Rr); dd = sD.v; }
    c.begin(); const W = c.w, H = c.h, wide = W >= 560;
    const box = wide ? { x: 0, y: 44, w: W * 0.55, h: H - 44 } : { x: 0, y: 44, w: W, h: (H - 44) * 0.58 };
    const cx = box.x + box.w / 2, cy = box.y + box.h / 2;
    const reach = Math.min(box.w, box.h) / 2 - 16;
    const pink = C.pink, cyan = C.cyan;
    let I, desc, IR;   // IR: comparison value
    const shapeLen = mode === "shape" && SH[sh].rod ? Rr * 2 : Rr;   // slider R → rod length L = 2R (0.2–1.0 m)
    if (mode === "shape") {
      const o = SH[sh];
      const Ls = shapeLen;
      I = o.f * Mm * Ls * Ls;
      const ppm = reach / 1.0;
      if (!o.rod) {
        const rp = Rr * ppm * 1.9;
        if (sh === "hoop") { d.circle(cx, cy, rp, null, cyan, 7); }
        else if (sh === "disk") { d.circle(cx, cy, rp, k.alpha(cyan, .28), cyan, 2); }
        else if (sh === "sphere") { const gr = g.createRadialGradient(cx - rp * .3, cy - rp * .3, rp * .1, cx, cy, rp); gr.addColorStop(0, k.alpha(cyan, .55)); gr.addColorStop(1, k.alpha(cyan, .15)); d.circle(cx, cy, rp, gr, cyan, 2); }
        else { d.circle(cx, cy, rp, k.alpha(cyan, .07), cyan, 4.5); }
        for (let i = 0; i < 3; i++) { const a = phi + i * 2 * Math.PI / 3; const [x2, y2] = P2(cx, cy, rp * (sh === "hoop" || sh === "shell" ? 1 : 0.85), a); d.circle(x2, y2, 4, C.text); }
        d.line(cx, cy + rp + 12, cx + rp, cy + rp + 12, C.faint, 1); tag(k, d, `R = ${Rr.toFixed(2)} m`, cx + rp / 2, cy + rp + 26, C.faint, "center");
      } else {
        const lp = Ls * ppm * (sh === "rode" ? 0.95 : 0.95);
        const off = sh === "rode" ? 0 : -lp / 2;
        g.save(); g.translate(cx, cy); g.rotate(-phi);
        d.rr(off, -6, lp, 12, 4, k.alpha(cyan, .35), cyan, 2);
        g.restore();
        tag(k, d, `L = ${Ls.toFixed(2)} m`, cx, box.y + box.h - 4, C.faint, "center");
      }
      axisMark(d, cx, cy, 8, pink, true);
      desc = `${o.n}: ${M(`<span class="c1"><i>I</i></span> = ${o.fh}`)}`;
      IR = o.f;
    } else if (mode === "beads") {
      const Irod = Mm * LROD * LROD / 12, Ib = 2 * mb * db * db;
      I = Irod + Ib;
      const ppm = reach / 0.55;
      g.save(); g.translate(cx, cy); g.rotate(-phi);
      d.rr(-0.5 * ppm, -4, ppm, 8, 3, k.alpha(C.muted, .35), C.muted, 1.5);
      const br = 5 + 9 * Math.sqrt(mb / 2);
      if (mb > 0) [-1, 1].forEach(s => d.circle(s * db * ppm, 0, br, k.alpha(cyan, .6), cyan, 2));
      g.restore();
      axisMark(d, cx, cy, 8, pink, true);
      tag(k, d, `ROD 1.00 m, ${Mm.toFixed(1)} kg · BEADS ${mb.toFixed(1)} kg EACH`, box.x + 14, box.y + box.h - 4, C.faint);
      desc = M(`<span class="c1"><i>I</i></span> = <span class="fr"><span>1</span><span>12</span></span><i>ML</i><sup>2</sup> + 2<i>md</i><sup>2</sup>`);
      IR = null;
    } else {
      const dEff = Math.min(dd, Rr); I = 0.5 * Mm * Rr * Rr + Mm * dEff * dEff;
      const ppm = reach / 1.0, rp = Rr * ppm * 0.95;
      // disk rotating about the offset axis at (cx, cy)
      const [dx, dy] = P2(cx, cy, dEff * ppm * 0.95, phi);
      d.circle(dx, dy, rp, k.alpha(cyan, .25), cyan, 2);
      const [mx, my] = P2(dx, dy, rp * 0.8, phi + 1.3); d.circle(mx, my, 4, C.text);
      d.line(dx - 6, dy, dx + 6, dy, C.text, 1.5); d.line(dx, dy - 6, dx, dy + 6, C.text, 1.5);
      if (dEff > 0.005) { d.line(cx, cy, dx, dy, C.faint, 1.2, [4, 3]); d.text("d", (cx + dx) / 2 + 6, (cy + dy) / 2 - 6, { font: `italic 14px ${F.math}`, color: C.muted }); }
      axisMark(d, cx, cy, 8, pink, true);
      tag(k, d, "+ CENTRE OF MASS", box.x + 14, box.y + box.h - 4, C.faint);
      desc = M(`<span class="c1"><i>I</i></span> = ½<i>MR</i><sup>2</sup> + <i>Md</i><sup>2</sup>`);
      IR = null;
    }
    const K = 0.5 * I * om * om;
    // right / bottom panel
    const pb = wide ? { x: W * 0.57, y: 56, w: W * 0.43 - 16, h: H - 70 } : { x: 14, y: box.y + box.h + 8, w: W - 28, h: H - box.y - box.h - 14 };
    if (mode === "shape") {
      tag(k, d, "I ÷ MR²  (RODS: I ÷ ML²)", pb.x, pb.y + 4, C.faint);
      const keys = Object.keys(SH), rowH = Math.min(26, (pb.h - 14) / keys.length), lw = Math.min(118, pb.w * 0.42), bw = pb.w - lw - 44;
      keys.forEach((key, i) => {
        const y = pb.y + 14 + i * rowH, on = key === sh, o = SH[key];
        d.text(o.n, pb.x, y + rowH * 0.62, { font: `${on ? 600 : 400} 12px ${F.sans}`, color: on ? C.text : C.muted });
        d.rr(pb.x + lw, y + rowH * 0.2, Math.max(2, bw * o.f), rowH * 0.56, 3, on ? C.amber : k.alpha(C.amber, .3));
        d.text(o.f === 1 ? "1" : o.f === 0.5 ? "0.5" : o.f.toFixed(3), pb.x + lw + bw * o.f + 6, y + rowH * 0.62, { font: `11px ${F.mono}`, color: on ? C.amber : C.faint });
      });
    } else {
      const beads = mode === "beads";
      const xmax = 0.5, f = beads ? (x => Mm / 12 + 2 * mb * x * x) : (x => 0.5 * Mm * Rr * Rr + Mm * x * x);
      const xcur = beads ? db : Math.min(dd, Rr), xTo = beads ? 0.5 : Rr;
      const ymax = Math.max(f(xmax), 0.05) * 1.15;
      const P = k.plot(c, { xmin: 0, xmax, ymin: 0, ymax, pad: { l: pb.x + 40, r: W - pb.x - pb.w, t: pb.y + 14, b: H - pb.y - pb.h + 22 }, xstep: 0.1, xlabel: "d (m)", ylabel: "I (kg·m²)" });
      P.grid(); P.axes(); P.fn(f, C.amber, 2.4, 0, xTo); P.point(xcur, f(xcur), C.amber, 5.5);
      if (!beads && Rr < 0.5) tag(k, d, "d ≤ R", P.X(Rr) + 4, P.Y(f(Rr)) - 6, C.faint);
    }
    // readout
    const hoopI = Mm * Rr * Rr;
    let land;
    if (mode === "shape") land = sh === "hoop"
      ? `<div class="landmark hit"><div class="big">${M("<i>I</i> = <i>MR</i><sup>2</sup>, the largest")}</div><div class="note">All of a hoop's mass is at distance R, so no round body of that M and R has a larger moment of inertia.</div></div>`
      : `<div class="landmark"><div class="big">${M(`<i>I</i> = ${sf(IR)} × ${SH[sh].rod ? "<i>ML</i><sup>2</sup>" : "<i>MR</i><sup>2</sup>"}`)}</div><div class="note">${SH[sh].rod ? "A rod about its end has 4 times the I it has about its centre: more of its mass is far from the axis." : "Mass nearer the axis counts for less: r² weights every piece by the square of its distance."}</div></div>`;
    else if (mode === "beads") land = db < 0.005 || mb === 0
      ? `<div class="landmark hit"><div class="big">${M("<i>d</i> = 0 ⇒ beads add nothing")}</div><div class="note">Mass on the axis has r = 0, so it contributes m·0² = 0 to I, however heavy it is.</div></div>`
      : `<div class="landmark"><div class="big">${M(`2<i>md</i><sup>2</sup> = ${sf(2 * mb * db * db)} kg·m²`)}</div><div class="note">Double the beads' distance and their contribution quadruples. The curve is a parabola in d.</div></div>`;
    else land = dd < 0.005
      ? `<div class="landmark hit"><div class="big">${M("<i>d</i> = 0 ⇒ <i>I</i> = <i>I</i><sub>cm</sub>")}</div><div class="note">The axis through the centre of mass gives the smallest I of all parallel axes.</div></div>`
      : `<div class="landmark"><div class="big">${M(`<i>Md</i><sup>2</sup> = ${sf(Mm * Math.min(dd, Rr) ** 2)} kg·m²`)}</div><div class="note">Moving the axis a distance d from the centre of mass adds Md² to I<sub>cm</sub> = ${sf(0.5 * Mm * Rr * Rr)} kg·m².</div></div>`;
    k.setRO(`<div><h2>Moment of inertia</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>I</i></span> = <span class="num c1">${sf(I)}</span> kg·m²</div></div>
      <div class="ro-rows">
      <div class="row">${desc}<span class="lbl">about the <span class="c3">pink axis</span>, perpendicular to the screen</span></div>
      <div class="row">${M(`<span class="c4"><i>K</i></span> = ½<i>I</i>ω<sup>2</sup>`)} = <span class="v c4">${sf(K)} J</span><span class="lbl">at ω = ${om.toFixed(1)} rad/s</span></div>
      ${mode === "shape" && !SH[sh].rod ? `<div class="row">${M("<i>MR</i><sup>2</sup>")} = <span class="v">${sf(hoopI)} kg·m²</span><span class="lbl">a hoop of the same M and R, for comparison</span></div>` : ""}
      ${mode === "beads" ? `<div class="row">${M("<i>ML</i><sup>2</sup>/12")} = <span class="v">${sf(Mm / 12)} kg·m²</span><span class="lbl">the bare rod about its centre</span></div>` : ""}
      ${mode === "axis" ? `<div class="row">${M("<i>I</i><sub>cm</sub> = ½<i>MR</i><sup>2</sup>")} = <span class="v">${sf(0.5 * Mm * Rr * Rr)} kg·m²</span><span class="lbl">disk about its own centre</span></div>` : ""}
      </div>${land}
      <p class="narr">${mode === "shape" ? "Switch between hoop, disk and sphere at the same M and R: only the mass distribution changes." : mode === "beads" ? "Slide the beads outward and watch I and K grow with d²." : "Move the axis from the centre to the rim: I grows from ½MR² to 1.5MR²."}</p>`);
  });
};

/* ---------- Torque ---------- */
L["mech-torque"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const WL = 0.45, FMAX = 400, TMAX = 160;
  let Fm = 200, thd = 60, r = 0.30;
  const sF = k.slider(`<span class="c2"><i>F</i></span>`, 0, FMAX, 5, Fm, v => Fm = v, v => v + " N");
  const sT = k.slider(`<span class="c4">θ</span>`, 0, 360, 1, thd, v => thd = v, v => v + "°");
  k.slider(`<i>r</i> (grip)`, 0.05, 0.40, 0.01, r, v => r = v, v => v.toFixed(2) + " m");
  k.hint("drag to aim the force");
  let geo = null, drag = false;
  const aim = e => { if (!geo) return; const p = c.xy(e); const dx = p.x - geo.gx, dy = p.y - geo.gy; const len = Math.hypot(dx, dy);
    Fm = clamp(Math.round(len / geo.fpx * FMAX / 5) * 5, 0, FMAX); if (len > 6) thd = Math.round(((Math.atan2(-dy, dx) * R2D) + 360) % 360); sF.set(Fm); sT.set(thd); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); aim(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) aim(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.addEventListener("pointercancel", () => drag = false);
  k.loop(() => {
    const th = thd * D2R, s = Math.sin(th), tau = r * Fm * s, rperp = r * Math.abs(s), Fperp = Fm * s;
    c.begin(); const W = c.w, H = c.h;
    const topH = H * 0.66;
    const bx = clamp(W * 0.3, 70, 200), by = topH * 0.5 + 6;
    const ppm = Math.min((W - bx - 30) / WL, 1100), fpx = Math.min(topH * 0.4, W * 0.3, 130);
    const gx = bx + r * ppm, gy = by; geo = { gx, gy, fpx };
    const ux = Math.cos(th), uy = -Math.sin(th), fl = Fm / FMAX * fpx;
    // line of action
    if (Fm > 0) { const Lx = W + H; d.line(gx - ux * Lx, gy - uy * Lx, gx + ux * Lx, gy + uy * Lx, k.alpha(C.cyan, .35), 1.2, [6, 5]); }
    // wrench
    const hw = Math.max(9, ppm * 0.022);
    d.rr(bx, by - hw / 2, WL * ppm, hw, hw / 2, k.alpha(C.muted, .35), C.muted, 1.5);
    d.circle(bx, by, hw * 1.7, k.alpha(C.muted, .35), C.muted, 1.5);
    g.save(); g.beginPath(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6, x = bx + hw * 1.05 * Math.cos(a), y = by + hw * 1.05 * Math.sin(a); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.closePath(); g.fillStyle = C.panel2; g.fill(); g.strokeStyle = C.text; g.lineWidth = 1.5; g.stroke(); g.restore();
    // r vector along the handle
    d.line(bx, by + hw + 10, gx, by + hw + 10, C.faint, 1); d.line(gx, by + hw + 5, gx, by + hw + 15, C.faint, 1);
    tag(k, d, `r = ${r.toFixed(2)} m`, (bx + gx) / 2, by + hw + 26, C.faint, "center");
    // extension of r beyond the grip (reference for θ)
    d.line(gx, gy, gx + 46, gy, C.line2, 1, [3, 3]);
    // lever arm: from the bolt perpendicular to the line of action
    if (Fm > 0) {
      const t = (bx - gx) * ux + (by - gy) * uy, fx = gx + t * ux, fy = gy + t * uy;
      if (rperp * ppm > 3) {
        d.line(bx, by, fx, fy, C.pink, 3);
        const nx = (bx - fx) / Math.hypot(bx - fx, by - fy), ny = (by - fy) / Math.hypot(bx - fx, by - fy), q = 9;
        const sgn = t > 0 ? 1 : -1;
        g.save(); g.strokeStyle = C.pink; g.lineWidth = 1.3; g.beginPath(); g.moveTo(fx + nx * q, fy + ny * q); g.lineTo(fx + nx * q + ux * q * sgn, fy + ny * q + uy * q * sgn); g.lineTo(fx + ux * q * sgn, fy + uy * q * sgn); g.stroke(); g.restore();
        d.text("r⊥", (bx + fx) / 2 - ny * 0, (by + fy) / 2, { font: `italic 600 14px ${F.math}`, color: C.pink, align: "center", base: "middle" });
      }
    }
    // angle arc at the grip
    if (Fm > 0 && thd > 0 && thd < 360) { arcArrow(g, gx, gy, 24, 0, th, C.violet, 1.8); d.text("θ", ...P2(gx, gy, 36, th / 2), { font: `italic 600 14px ${F.math}`, color: C.violet, align: "center", base: "middle" }); }
    // force arrow
    if (fl > 3) d.arrow(gx, gy, gx + ux * fl, gy + uy * fl, C.cyan, 3.5);
    d.circle(gx, gy, 4.5, C.cyan);
    d.text("F", gx + ux * (fl + 14), gy + uy * (fl + 14), { font: `italic 700 16px ${F.math}`, color: C.cyan, align: "center", base: "middle" });
    // torque curved arrow around the bolt
    if (Math.abs(tau) > 0.05) { const span = Math.sign(tau) * (0.4 + Math.min(Math.abs(tau) / TMAX, 1) * 4.2); arcArrow(g, bx, by, hw * 1.7 + 14, Math.PI / 2, Math.PI / 2 + span, C.amber, 3); }
    if (Math.abs(tau) > 0.05) axisMark(d, bx - hw * 1.7 - 34, by - hw * 1.7 - 16, 9, C.amber, tau > 0);
    d.text(Math.abs(tau) > 0.05 ? (tau > 0 ? "out of page" : "into page") : "no torque", bx - hw * 1.7 - 34, by - hw * 1.7 - 34, { font: `600 11px ${F.ui}`, color: C.amber, align: "center" });
    // τ(θ) graph
    const P = k.plot(c, { xmin: 0, xmax: 360, ymin: -TMAX, ymax: TMAX, pad: { l: 50, r: 14, t: topH + 14, b: 24 }, xstep: 90, ystep: 80, xlabel: "θ (°)", ylabel: "τ (N·m)" });
    P.grid(); P.axes(); P.fn(x => r * Fm * Math.sin(x * D2R), C.amber, 2.2); P.point(thd, tau, C.amber, 5);
    // readout
    const zero = Fm > 0 && Math.abs(s) < 0.009, max = Fm > 0 && Math.abs(s) > 0.99985;
    const dir = Math.abs(tau) < 0.005 ? "no turning effect" : tau > 0 ? "counterclockwise, out of the page" : "clockwise, into the page";
    let land;
    if (Fm === 0) land = `<div class="landmark"><div class="big">${M("<i>F</i> = 0 ⇒ τ = 0")}</div><div class="note">Drag in the picture to apply a force at the grip.</div></div>`;
    else if (zero) land = `<div class="landmark hit"><div class="big">${M("θ = " + (thd % 360 === 0 ? "0°" : thd + "°") + " ⇒ <span class=\"c3\"><i>r</i><sub>⊥</sub></span> = 0")}</div><div class="note">The line of action passes through the bolt. However hard you pull along the handle, it does not turn.</div></div>`;
    else if (max) land = `<div class="landmark hit"><div class="big">${M("sin θ = ±1 ⇒ |τ| = <i>rF</i>")}</div><div class="note">A perpendicular pull: the lever arm equals the full grip distance, so this force gives its largest possible torque, ${sf(r * Fm)} N·m.</div></div>`;
    else land = `<div class="landmark"><div class="big">${M(`τ = <span class="c3"><i>r</i><sub>⊥</sub></span><span class="c2"><i>F</i></span> = <i>r</i><span class="c2"><i>F</i><sub>⊥</sub></span>`)}</div><div class="note">Only the part of the force perpendicular to the handle turns the bolt. Here that is ${sf(Math.abs(s) * 100)}% of the force.</div></div>`;
    k.setRO(`<div><h2>Torque</h2><div class="ro-big" style="margin-top:8px"><span class="c1">τ</span> = <span class="num c1">${sf(tau)}</span> N·m</div><div class="note" style="margin-top:4px;color:var(--muted)">${dir}</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c3"><i>r</i><sub>⊥</sub></span> = <i>r</i> |sin θ|`)} = <span class="v c3">${sf(rperp)} m</span><span class="lbl">lever arm: bolt to the line of action</span></div>
      <div class="row">${M(`<span class="c2"><i>F</i><sub>⊥</sub></span> = <i>F</i> sin θ`)} = <span class="v c2">${sf(Fperp)} N</span><span class="lbl">force component across the handle</span></div>
      <div class="row">${M(`<span class="c4">θ</span>`)} = <span class="v c4">${thd}°</span><span class="lbl">from the handle direction to F</span></div>
      <div class="row">${M("<i>rF</i>")} = <span class="v">${sf(r * Fm)} N·m</span><span class="lbl">the most this force can give from this grip</span></div>
      </div>${land}
      <p class="narr">${tau < -0.005 ? "Clockwise as seen here: this tightens a standard right-hand bolt. " : ""}Slide the grip toward the bolt, or swing θ toward 0° or 180°, and watch the lever arm shrink.</p>`);
  });
};

/* ---------- Rotational dynamics: massive pulley ---------- */
L["mech-rot-dynamics"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const H0 = 2.00;
  let m = 2, Mp = 8, R = 0.10, kind = "disk", t = 0, going = false;
  const reset = () => { t = 0; going = false; bGo.textContent = "Release"; };
  k.slider(`<span class="c2"><i>m</i></span>`, 0.1, 10, 0.1, m, v => { m = v; reset(); }, v => v.toFixed(1) + " kg");
  k.slider(`pulley <i>M</i>`, 0, 20, 0.5, Mp, v => { Mp = v; reset(); }, v => v.toFixed(1) + " kg");
  k.slider(`<i>R</i>`, 0.05, 0.30, 0.01, R, v => { R = v; reset(); }, v => v.toFixed(2) + " m");
  k.select("Pulley", [["disk", "uniform disk ½MR²"], ["hoop", "hoop MR²"]], kind, v => { kind = v; reset(); });
  const bGo = k.button("Release", () => { if (!going && t > 0) { t = 0; } going = !going; bGo.textContent = going ? "Pause" : "Release"; });
  k.button("Reset", reset, "btn ghost");
  k.loop(dt => {
    const I = (kind === "disk" ? 0.5 : 1) * Mp * R * R, meff = I / (R * R);
    const a = m * G0 / (m + meff), T = meff * a, al = a / R;
    const tLand = Math.sqrt(2 * H0 / a);
    if (going) { t += dt * (k.reduce ? 3 : 1); if (t >= tLand) { t = tLand; going = false; bGo.textContent = "Release"; } }
    const y = 0.5 * a * t * t, v = a * t, w = v / R, landed = t >= tLand - 1e-9;
    c.begin(); const W = c.w, H = c.h, wide = W >= 560;
    const sceneW = W * (wide ? 0.6 : 0.56);
    // pulley
    const Rpx = (wide ? 26 : 20) + (R - 0.05) / 0.25 * (wide ? 44 : 30), px = sceneW * 0.4, py = 26 + Rpx + 10;
    d.rect(px - 50, 10, 100, 8, k.alpha(C.muted, .4)); d.line(px, 18, px, py, C.muted, 3);
    const ang = -y / R;   // falling mass on the right turns the pulley clockwise
    if (Mp > 0) {
      d.circle(px, py, Rpx, kind === "disk" ? k.alpha(C.violet, .28) : k.alpha(C.violet, .08), C.violet, kind === "hoop" ? 6 : 2.5);
      for (let i = 0; i < 4; i++) { const [x2, y2] = P2(px, py, Rpx - 3, ang + i * Math.PI / 2); d.line(px, py, x2, y2, k.alpha(C.violet, .7), 1.4); }
    } else { d.circle(px, py, Rpx, null, k.alpha(C.violet, .5), 1.2); d.text("massless", px, py + Rpx + 14, { font: `600 11px ${F.ui}`, color: C.faint, align: "center" }); }
    d.circle(px, py, 4, C.text);
    // rope wound over the top of the pulley
    g.save(); g.strokeStyle = k.alpha(C.pink, .6); g.lineWidth = 2; g.beginPath(); g.arc(px, py, Rpx + 1.5, -0.02, Math.PI * 0.9, true); g.stroke(); g.restore();
    // rope and mass
    const floorY = H - 26, side = 22 + 22 * Math.cbrt(m / 10), topMass0 = py + Math.max(30, Rpx * 0.6), fallPx = Math.max(40, floorY - topMass0 - side - 1), ppm = fallPx / H0;
    const mx = px + Rpx, my = topMass0 + y * ppm;
    d.line(mx, py, mx, my, C.pink, 2);
    d.rr(mx - side / 2, my, side, side, 3, k.alpha(C.cyan, .25), C.cyan, 2);
    d.text("m", mx, my + side / 2 + 1, { font: `italic 600 ${Math.round(12 + side * 0.2)}px ${F.math}`, color: C.cyan, align: "center", base: "middle" });
    d.line(0, floorY, sceneW, floorY, C.muted, 1.5); tag(k, d, `DROP ${H0.toFixed(2)} m`, 12, floorY + 16);
    // tension on the pulley rim
    const fs = 56 / Math.max(m * G0, 1);
    if (T * fs > 3 && Mp > 0) { d.arrow(mx + 12, py, mx + 12, py + T * fs, C.pink, 3); d.text("T", mx + 22, py + T * fs * 0.6, { font: `italic 700 15px ${F.math}`, color: C.pink }); }
    // α arrow (clockwise)
    if (Mp > 0) { arcArrow(g, px, py, Rpx + 14, Math.PI * 0.95, Math.PI * 0.95 - 1.6, C.amber, 3); d.text("α", ...P2(px, py, Rpx + 27, Math.PI * 1.02), { font: `italic 700 16px ${F.math}`, color: C.amber, align: "center", base: "middle" }); }
    d.text(landed ? `landed · v = ${sfc(v)} m/s` : t > 0 ? `t = ${t.toFixed(2)} s` : "press Release", sceneW - 8, floorY - 8, { font: `12px ${F.mono}`, color: C.faint, align: "right" });
    // side panel: a vs g, energy split, free-body diagram of the mass
    const bx = sceneW + 14, bw = W - bx - 14, by = 30;
    tag(k, d, "ACCELERATION vs g", bx, by, C.faint);
    d.rr(bx, by + 8, bw, 12, 3, k.alpha(C.muted, .25)); d.rr(bx, by + 8, bw * a / G0, 12, 3, C.amber);
    d.text(`a = ${(a / G0 * 100).toFixed(0)}% of g`, bx, by + 36, { font: `12px ${F.mono}`, color: C.amber });
    tag(k, d, "WHERE mgh GOES", bx, by + 62, C.faint);
    const fT = m / (m + meff);
    d.rr(bx, by + 70, bw * fT, 12, 3, C.cyan); if (fT < 0.999) d.rr(bx + bw * fT, by + 70, bw * (1 - fT), 12, 3, C.violet);
    d.text(`½mv² ${(fT * 100).toFixed(0)}%`, bx, by + 98, { font: `12px ${F.mono}`, color: C.cyan });
    d.text(`½Iω² ${((1 - fT) * 100).toFixed(0)}%`, bx, by + 114, { font: `12px ${F.mono}`, color: C.violet });
    const fy0 = by + 140, fcy = fy0 + Math.max(70, Math.min(90, (H - fy0) / 2));
    if (H - fy0 > 120) {
      tag(k, d, "FORCES ON m", bx, fy0, C.faint);
      const fcx = bx + Math.min(bw / 2, 60);
      d.circle(fcx, fcy, 5, C.cyan);
      if (T * fs > 3) { d.arrow(fcx, fcy, fcx, fcy - T * fs, C.pink, 3); d.text(`T = ${sfc(T)} N`, fcx + 10, fcy - T * fs + 10, { font: `italic 13px ${F.math}`, color: C.pink }); }
      else d.text("T = 0", fcx + 10, fcy - 10, { font: `italic 13px ${F.math}`, color: C.faint });
      d.arrow(fcx, fcy, fcx, fcy + 56, C.cyan, 3); d.text(`mg = ${sfc(m * G0)} N`, fcx + 10, fcy + 50, { font: `italic 13px ${F.math}`, color: C.cyan });
    }
    // readout
    const land = Mp === 0
      ? `<div class="landmark hit"><div class="big">${M("<i>I</i> = 0 ⇒ <i>T</i> = 0, <i>a</i> = <i>g</i>")}</div><div class="note">A massless pulley needs no torque to spin, so the rope carries no tension and the mass is in free fall. Real pulleys always take a share.</div></div>`
      : `<div class="landmark"><div class="big">${M(`<i>a</i> = <span class="fr"><span><span class="c2"><i>m</i></span><i>g</i></span><span><span class="c2"><i>m</i></span> + <span class="c4"><i>I</i></span>/<i>R</i><sup>2</sup></span></span>`)}</div><div class="note">The pulley behaves like an extra ${sf(meff)} kg that must be accelerated but is not pulled by gravity. Changing R alone does not change a: I/R² = ${kind === "disk" ? "½" : ""}M for any R.</div></div>`;
    k.setRO(`<div><h2>Acceleration of the mass</h2><div class="ro-big" style="margin-top:8px"><i>a</i> = <span class="num">${sf(a)}</span> m/s²</div></div>
      <div class="ro-rows">
      <div class="row">${M(`<span class="c4"><i>I</i></span> = ${kind === "disk" ? "½" : ""}<i>MR</i><sup>2</sup>`)} = <span class="v c4">${sf(I)} kg·m²</span><span class="lbl">pulley about its axle</span></div>
      <div class="row">${M(`<span class="c3"><i>T</i></span> = <i>m</i>(<i>g</i> − <i>a</i>)`)} = <span class="v c3">${sf(T)} N</span><span class="lbl">less than mg = ${sf(m * G0)} N</span></div>
      <div class="row">${M(`<span class="c1">α</span> = <i>a</i>/<i>R</i> = <i>TR</i>/<i>I</i>`)} = <span class="v c1">${Mp > 0 ? sf(al) + " rad/s²" : "—"}</span><span class="lbl">rope does not slip on the rim</span></div>
      <div class="row">${M("<i>v</i>, ω")} <span class="v">${sf(v)} m/s, ${sf(w)} rad/s</span><span class="lbl">${landed ? "at the floor: v = √(2aH)" : "grow linearly while it falls"}</span></div>
      </div>${land}
      <p class="narr">Set the pulley mass to 0, then make it much heavier than the hanging mass. Switch disk → hoop at the same M.</p>`);
  });
};

/* ---------- Static equilibrium: plank on two supports ---------- */
L["mech-equilibrium"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const LP = 6.00;
  let Mb = 20, m1 = 60, m2 = 20, x1 = 4.5, x2 = 1.5, xA = 1.0, xB = 4.0, piv = "A", tilt = 0, dragI = -1;
  k.slider(`plank <span class="c3"><i>M</i></span>`, 0, 100, 1, Mb, v => Mb = v, v => v + " kg");
  k.slider(`load 1 <span class="c3"><i>m</i><sub>1</sub></span>`, 0, 100, 1, m1, v => m1 = v, v => v + " kg");
  k.slider(`load 2 <span class="c3"><i>m</i><sub>2</sub></span>`, 0, 100, 1, m2, v => m2 = v, v => v + " kg");
  k.slider(`support <span class="c2">A</span>`, 0, 2.5, 0.1, xA, v => xA = v, v => v.toFixed(1) + " m");
  k.slider(`support <span class="c2">B</span>`, 3.5, 6, 0.1, xB, v => xB = v, v => v.toFixed(1) + " m");
  k.select(`<span class="c4">Pivot</span>`, [["A", "about A"], ["B", "about B"], ["0", "about left end"], ["c", "about centre"]], piv, v => piv = v);
  k.hint("drag the loads along the plank");
  let geo = null;
  const px2x = px => geo ? (px - geo.x0) / geo.ppm : 0;
  c.cv.addEventListener("pointerdown", e => { if (!geo) return; const p = c.xy(e); const xs = [x1, x2].map(x => geo.x0 + x * geo.ppm); const dd = xs.map(X => Math.abs(p.x - X)); const i = dd[0] <= dd[1] ? 0 : 1; if (dd[i] < 50 && p.y < geo.py + 40 && p.y > geo.py - 140) { dragI = i; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (dragI < 0) return; const x = clamp(Math.round(px2x(c.xy(e).x) * 10) / 10, 0.1, LP - 0.1); if (dragI === 0) x1 = x; else x2 = x; });
  c.cv.addEventListener("pointerup", () => dragI = -1);
  c.cv.addEventListener("pointercancel", () => dragI = -1);
  k.loop(dt => {
    const loads = [ { n: "Mg", m: Mb, x: LP / 2, plank: true }, { n: "m₁g", m: m1, x: x1 }, { n: "m₂g", m: m2, x: x2 } ];
    const Wt = loads.reduce((s, o) => s + o.m * G0, 0);
    const NB = loads.reduce((s, o) => s + o.m * G0 * (o.x - xA), 0) / (xB - xA), NA = Wt - NB;
    const tipB = NA < -1e-6, tipA = NB < -1e-6, tips = tipB || tipA;
    // tilt animation
    c.begin(); const W = c.w, H = c.h;
    const x0 = 24, ppm = (W - 48) / LP, py = Math.max(170, H * 0.55), supH = Math.min(70, H * 0.16), gy = py + 8 + supH;
    const maxTiltB = Math.atan2(supH + 8, (LP - xB) * ppm), maxTiltA = Math.atan2(supH + 8, xA * ppm);
    const target = tipB ? -Math.min(0.28, maxTiltB) : tipA ? Math.min(0.28, maxTiltA) : 0;
    tilt += (target - tilt) * Math.min(1, dt * (k.reduce ? 30 : 6));
    geo = { x0, ppm, py };
    // ground and supports
    d.line(0, gy, W, gy, C.muted, 1.5);
    const pX = piv === "A" ? xA : piv === "B" ? xB : piv === "0" ? 0 : LP / 2;
    [["A", xA], ["B", xB]].forEach(([nm, xs]) => {
      const X = x0 + xs * ppm;
      g.save(); g.beginPath(); g.moveTo(X, py + 8); g.lineTo(X - 16, gy); g.lineTo(X + 16, gy); g.closePath(); g.fillStyle = k.alpha(C.cyan, .15); g.fill(); g.strokeStyle = C.cyan; g.lineWidth = 2; g.stroke(); g.restore();
      d.text(nm, X, gy + 16, { font: `600 13px ${F.ui}`, color: C.cyan, align: "center" });
    });
    // plank transform (rotate about the tipping support)
    const ox = tipB || (tilt < -0.001) ? x0 + xB * ppm : x0 + xA * ppm;
    const tp = (xm, dy) => { const X = x0 + xm * ppm - ox; const cs = Math.cos(tilt), sn = Math.sin(tilt); return [ox + X * cs + dy * sn, py - X * sn + dy * cs]; };
    g.save(); g.translate(ox, py); g.rotate(-tilt);
    d.rr(x0 - ox, -8, LP * ppm, 16, 3, k.alpha(C.muted, .3), C.muted, 1.5);
    for (let i = 0; i <= 6; i++) d.line(x0 - ox + i * ppm, 8, x0 - ox + i * ppm, 3, C.faint, 1);
    g.restore();
    // loads and weight arrows
    const fs = 90 / Math.max(Wt, 200);
    loads.forEach((o, i) => {
      const [X, Y] = tp(o.x, -8);
      if (o.plank) { if (o.m > 0) { d.arrow(X, Y + 8, X, Y + 8 + Math.max(o.m * G0 * fs, 6), k.alpha(C.pink, .75), 2.5); d.text("Mg", X + 6, Y + 8 + Math.max(o.m * G0 * fs, 6) + 12, { font: `italic 600 13px ${F.math}`, color: C.pink }); } return; }
      const s = o.m > 0 ? 16 + 22 * Math.cbrt(o.m / 100) : 14;
      d.rr(X - s / 2, Y - s, s, s, 3, o.m > 0 ? k.alpha(C.pink, .25) : null, o.m > 0 ? C.pink : C.faint, dragI === i - 1 ? 3 : 2);
      d.text(`${o.m} kg`, X, Y - s - 8, { font: `600 11px ${F.mono}`, color: o.m > 0 ? C.pink : C.faint, align: "center" });
      d.text(`${o.x.toFixed(1)} m`, X, Y - s - 21, { font: `11px ${F.mono}`, color: C.faint, align: "center" });
      if (o.m > 0) d.arrow(X, Y - s / 2, X, Y - s / 2 + Math.max(o.m * G0 * fs, 6), C.pink, 3);
    });
    // support forces
    [[xA, NA, tipA], [xB, NB, tipB]].forEach(([xs, N]) => {
      const X = x0 + xs * ppm; const n = Math.max(0, tips ? (N < 0 ? 0 : Wt) : N);
      if (n * fs > 4) { d.arrow(X + 20, py + 8 + supH * 0.9, X + 20, py + 8 + supH * 0.9 - n * fs, C.cyan, 3); }
      d.text(tips ? (N < -1e-6 ? "0 N" : "—") : `${sfc(N)} N`, X + 26, py + 8 + supH * 0.9 - 6, { font: `600 12px ${F.mono}`, color: C.cyan });
    });
    // pivot marker
    const [pvx, pvy] = tp(pX, 0);
    d.circle(pvx, pvy, 10, null, C.violet, 2.5); d.circle(pvx, pvy, 3, C.violet);
    // torque balance bars about the pivot (using the level plank's geometry)
    const terms = loads.map(o => ({ n: o.n, tau: -o.m * G0 * (o.x - pX) }));
    if (!tips) { terms.push({ n: "N_A", tau: NA * (xA - pX) }); terms.push({ n: "N_B", tau: NB * (xB - pX) }); }
    const ccw = terms.reduce((s, o) => s + Math.max(0, o.tau), 0), cw = terms.reduce((s, o) => s + Math.max(0, -o.tau), 0);
    const bw = Math.min(W * 0.45, 240), bx = W - bw - 14, by0 = 56, top = Math.max(ccw, cw, 1);
    tag(k, d, "TORQUES ABOUT THE PIVOT", bx, by0 - 6, C.amber);
    d.rr(bx, by0, bw, 11, 3, k.alpha(C.amber, .15)); d.rr(bx, by0, bw * ccw / top, 11, 3, C.amber);
    d.rr(bx, by0 + 16, bw, 11, 3, k.alpha(C.amber, .15)); d.rr(bx, by0 + 16, bw * cw / top, 11, 3, k.alpha(C.amber, .55));
    d.text(`CCW ${sfc(ccw)}`, bx - 6, by0 + 10, { font: `11px ${F.mono}`, color: C.amber, align: "right" });
    d.text(`CW ${sfc(cw)} N·m`, bx - 6, by0 + 26, { font: `11px ${F.mono}`, color: C.amber, align: "right" });
    if (tips) d.text(`TIPS about ${tipB ? "B" : "A"}`, W / 2, gy + 34 > H - 6 ? gy - supH - 60 : gy + 34, { font: `700 15px ${F.ui}`, color: C.red || C.pink, align: "center" });
    // readout
    const pname = piv === "A" ? "A" : piv === "B" ? "B" : piv === "0" ? "the left end" : "the centre";
    const rows = terms.map(o => `<div class="row">${M(o.n.replace("N_A", "<span class=\"c2\"><i>N</i><sub>A</sub></span>").replace("N_B", "<span class=\"c2\"><i>N</i><sub>B</sub></span>").replace("Mg", "<span class=\"c3\"><i>Mg</i></span>").replace("m₁g", "<span class=\"c3\"><i>m</i><sub>1</sub><i>g</i></span>").replace("m₂g", "<span class=\"c3\"><i>m</i><sub>2</sub><i>g</i></span>"))}<span class="v c1">${sf(o.tau)} N·m</span><span class="lbl">${Math.abs(o.tau) < 1e-9 ? "acts through the pivot" : o.tau > 0 ? "counterclockwise" : "clockwise"}</span></div>`).join("");
    const land = tips
      ? `<div class="landmark hit"><div class="big">${M(`<span class="c2"><i>N</i><sub>${tipB ? "A" : "B"}</sub></span> would be ${sf(tipB ? NA : NB)} N`)}</div><div class="note">Support ${tipB ? "A" : "B"} can only push up. The torques about ${tipB ? "B" : "A"} cannot balance, so the plank tips about ${tipB ? "B" : "A"}. Move the loads back or the support out.</div></div>`
      : `<div class="landmark${Math.min(NA, NB) < 0.5 ? " hit" : ""}"><div class="big">${M(`<span class="c1">Στ</span> = 0 &nbsp; Σ<i>F</i><sub>y</sub> = 0`)}</div><div class="note">${Math.min(NA, NB) < 0.5 ? `On the edge of tipping: support ${NA < NB ? "A" : "B"} carries almost nothing.` : `Torques about ${pname} balance. Pick another pivot: the terms change but still sum to zero, and N<sub>A</sub>, N<sub>B</sub> stay the same.`}</div></div>`;
    k.setRO(`<div><h2>Support forces</h2><div class="ro-big" style="margin-top:8px"><span class="c2"><i>N</i><sub>A</sub></span> = <span class="num c2">${tips ? (tipA ? "—" : "0") : sf(NA)}</span> N &nbsp; <span class="c2"><i>N</i><sub>B</sub></span> = <span class="num c2">${tips ? (tipB ? "—" : "0") : sf(NB)}</span> N</div></div>
      <div class="ro-rows">
      <div class="row">${M("Σ<i>w</i>")} = <span class="v c3">${sf(Wt)} N</span><span class="lbl">total weight; ${tips ? "no balance possible" : "N<sub>A</sub> + N<sub>B</sub> equals it"}</span></div>
      ${tips ? "" : rows}
      </div>${land}
      <p class="narr">Drag load 1 past support B until the plank tips. Switch the pivot: the torque about the pivot's own support is always zero.</p>`);
  });
};
})();
