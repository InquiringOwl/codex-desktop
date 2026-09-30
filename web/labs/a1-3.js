/* ============ Labs: Algebra I, part 3 (exponentials, elimination, special factoring, sequences, rational expressions, quadratics) ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;
const G = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const LCM = (a, b) => a && b ? Math.abs(a * b) / G(a, b) : 0;
const MI = "−";
const sg = n => (n < 0 ? MI + Math.abs(n) : String(n));
const FR = (a, b, cl = "") => `<span class="m ${cl}"><span class="fr"><span>${a}</span><span>${b}</span></span></span>`;
const X_ = "<i>x</i>";
const SQ = t => `√<span class="a13-ol">${t}</span>`;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

if (!document.getElementById("a13-css")) {
  const s = document.createElement("style"); s.id = "a13-css";
  s.textContent = `.a13-ol{border-top:1px solid currentColor;padding-top:1px;margin-left:1px}
.a13-wrap{display:flex;flex-wrap:wrap;gap:14px 22px;justify-content:center;align-items:flex-start}
.a13-steps{flex:1 1 300px;min-width:0;display:grid;gap:4px;font:400 19px/1.45 var(--math)}
.a13-steps .st{display:grid;grid-template-columns:92px minmax(0,1fr);align-items:baseline;gap:0 10px;padding:5px 8px;border-radius:4px;color:var(--muted)}
.a13-steps .st.cur{background:rgba(242,184,75,.07);color:var(--text);box-shadow:inset 2px 0 0 var(--amber)}
.a13-steps .tag{font:600 11px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.a13-steps .st.cur .tag{color:var(--amber)}
.a13-steps .eq{overflow-x:auto;overflow-y:hidden;min-width:0}
.a13-graph{flex:1 1 240px;max-width:400px;min-width:220px}
.a13-cap{font:12px/1.4 var(--sans);color:var(--faint);margin-top:4px;text-align:center}
.a13-x{text-decoration:line-through;text-decoration-color:var(--amber);text-decoration-thickness:2px;opacity:.65}
.a13-chip{display:inline-block;border:1px solid;border-radius:4px;padding:0 7px;margin:2px 3px;font:400 17px/1.5 var(--math)}
.a13-chips{display:flex;flex-wrap:wrap;align-items:center;gap:2px 4px;font:12px var(--sans);color:var(--faint)}
.a13-chips b{font:600 11px/1 var(--ui);letter-spacing:.14em;text-transform:uppercase;min-width:92px}
@media (max-width:560px){.a13-steps{font-size:17px}.a13-steps .st{grid-template-columns:minmax(0,1fr)}.a13-chips b{min-width:0;width:100%}}`;
  document.head.appendChild(s);
}

/* ---------- exact rationals ---------- */
const Q = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = G(n, d) || 1; return { n: n / g, d: d / g }; };
const qq = x => (typeof x === "number" ? Q(x) : x);
const qadd = (a, b) => { a = qq(a); b = qq(b); return Q(a.n * b.d + b.n * a.d, a.d * b.d); };
const qsub = (a, b) => { a = qq(a); b = qq(b); return Q(a.n * b.d - b.n * a.d, a.d * b.d); };
const qmul = (a, b) => { a = qq(a); b = qq(b); return Q(a.n * b.n, a.d * b.d); };
const qdiv = (a, b) => { a = qq(a); b = qq(b); return b.n === 0 ? null : Q(a.n * b.d, a.d * b.n); };
const qv = q => { q = qq(q); return q.n / q.d; };
const qeq = (a, b) => { a = qq(a); b = qq(b); return a.n === b.n && a.d === b.d; };
const qdec = (x, den = 100) => Q(Math.round(x * den), den);
const qT = q => { q = qq(q); return q.d === 1 ? sg(q.n) : sg(q.n) + "/" + q.d; };
const qH = (q, cl = "") => { q = qq(q); const s = q.d === 1 ? String(Math.abs(q.n)) : `<span class="fr"><span>${Math.abs(q.n)}</span><span>${q.d}</span></span>`; return `<span class="m ${cl}">${q.n < 0 ? MI : ""}${s}</span>`; };
const qP = (q, cl = "") => (qq(q).n < 0 ? `(${qH(q, cl)})` : qH(q, cl));
const rad = n => { let s = 1, t = n; for (let f = 2; f * f <= t; f++) while (t % (f * f) === 0) { t /= f * f; s *= f; } return [s, t]; };
// exact roots of A x² + B x + C = 0 (integers, A ≠ 0)
function quadExact(A, B, C){
  const D = B * B - 4 * A * C;
  if (D < 0) return { D, n: 0, vals: [], html: "no real roots" };
  const [s, t] = rad(D);
  if (t === 1) {
    const r1 = Q(-B - s, 2 * A), r2 = Q(-B + s, 2 * A), rs = qv(r1) <= qv(r2) ? [r1, r2] : [r2, r1];
    const roots = D === 0 ? [rs[0]] : rs;
    return { D, n: roots.length, rational: true, roots, vals: roots.map(qv), html: roots.map(r => qH(r)).join(", ") };
  }
  let p = -B, q = 2 * A, ss = s; const g = G(G(p, ss), q); p /= g; q /= g; ss /= g; if (q < 0) { p = -p; q = -q; }
  const num = (p ? sg(p) + " ± " : "±") + (ss === 1 ? "" : ss) + SQ(t);
  const v1 = (-B - Math.sqrt(D)) / (2 * A), v2 = (-B + Math.sqrt(D)) / (2 * A);
  return { D, n: 2, rational: false, vals: [Math.min(v1, v2), Math.max(v1, v2)], html: q === 1 ? `<span class="m">${num}</span>` : FR(num, q), s: ss, t, p, q };
}

/* ---------- integer polynomials, low degree first ---------- */
const ptrim = p => { p = p.slice(); while (p.length > 1 && p[p.length - 1] === 0) p.pop(); return p; };
const pmul = (a, b) => { const r = new Array(a.length + b.length - 1).fill(0); a.forEach((x, i) => b.forEach((y, j) => { r[i + j] += x * y; })); return ptrim(r); };
const padd = (a, b, s = 1) => { const r = []; for (let i = 0; i < Math.max(a.length, b.length); i++) r.push((a[i] || 0) + s * (b[i] || 0)); return ptrim(r); };
const pscale = (a, k) => ptrim(a.map(x => x * k));
const proots = (k, rs) => rs.reduce((p, r) => pmul(p, [-r, 1]), [k]);
const peval = (p, x) => p.reduceRight((acc, c) => acc * x + c, 0);
const pevalQ = (p, x) => p.reduceRight((acc, c) => qadd(qmul(acc, x), c), Q(0));
const pdivRoot = (p, r) => { const n = p.length - 1, out = new Array(Math.max(1, n)).fill(0); let acc = 0; for (let i = n; i >= 1; i--) { acc = p[i] + acc * r; out[i - 1] = acc; } return ptrim(out); };
const pdeg = p => ptrim(p).length - 1;
function polyH(cs, v = X_){
  let out = "";
  for (let i = cs.length - 1; i >= 0; i--) {
    const c = qq(cs[i]); if (c.n === 0) continue;
    const neg = c.n < 0, a = Q(Math.abs(c.n), c.d), one = a.n === 1 && a.d === 1 && i > 0;
    const mag = one ? "" : (a.d === 1 ? String(a.n) : `<span class="fr"><span>${a.n}</span><span>${a.d}</span></span>`);
    out += out ? (neg ? " − " : " + ") : (neg ? MI : "");
    out += mag + (i === 0 ? "" : i === 1 ? v : `${v}<sup>${i}</sup>`);
  }
  return out || "0";
}
const SUP = ["", "", "²", "³"];
function polyT(cs, v = "x", dp = 3){
  let out = "";
  for (let i = cs.length - 1; i >= 0; i--) {
    const c = cs[i]; if (Math.abs(c) < 1e-12) continue;
    const neg = c < 0, m = Math.abs(c), one = Math.abs(m - 1) < 1e-12 && i > 0;
    out += out ? (neg ? " − " : " + ") : (neg ? MI : "");
    out += (one ? "" : String(+m.toFixed(dp))) + (i === 0 ? "" : v + SUP[i]);
  }
  return out || "0";
}
// linear factor (x − r) for integer r
const facH = (r, cls = "") => { const s = r === 0 ? X_ : `(${X_} ${r > 0 ? "−" : "+"} ${Math.abs(r)})`; return cls ? `<span class="${cls}">${s}</span>` : s; };
// product k·(x − r1)(x − r2)… ; cls(i) gives a class for factor i; collapse repeats into powers when pow = true
function prodH(kc, roots, cls = () => "", pow = false){
  let f = "";
  if (pow) { const seen = []; roots.forEach(r => { const e = seen.find(z => z.r === r); if (e) e.n++; else seen.push({ r, n: 1 }); }); f = seen.map((z, i) => facH(z.r, cls(i)) + (z.n > 1 ? `<sup>${z.n}</sup>` : "")).join(""); }
  else f = roots.map((r, i) => facH(r, cls(i))).join("");
  if (!roots.length) return sg(kc);
  return (kc === 1 ? "" : kc === -1 ? MI : sg(kc)) + f;
}
const msetMinus = (a, b) => { const r = a.slice(); b.forEach(x => { const i = r.indexOf(x); if (i >= 0) r.splice(i, 1); }); return r; };
const msetCommon = (a, b) => { const r = [], bb = b.slice(); a.forEach(x => { const i = bb.indexOf(x); if (i >= 0) { r.push(x); bb.splice(i, 1); } }); return r; };

/* ---------- small SVG plot for DOM labs ---------- */
let svgId = 0;
function svgPlot(C, o){
  const W = o.w || 380, H = o.h || 270, pl = 28, pr = 8, pt = 8, pb = 20;
  const { xmin, xmax, ymin, ymax } = o, id = "a13clip" + (++svgId);
  const X = x => pl + (x - xmin) / (xmax - xmin) * (W - pl - pr), Y = y => pt + (ymax - y) / (ymax - ymin) * (H - pt - pb);
  const nice = span => { const raw = span / 6, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };
  const sx = o.xstep || nice(xmax - xmin), sy = o.ystep || nice(ymax - ymin);
  const f2 = v => String(+v.toFixed(4)).replace("-", MI);
  const n1 = v => v.toFixed(1);
  let s = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;height:auto" font-family="IBM Plex Mono, monospace" font-size="12">`;
  s += `<defs><clipPath id="${id}"><rect x="${pl}" y="${pt}" width="${W - pl - pr}" height="${H - pt - pb}"/></clipPath></defs>`;
  s += `<rect x="${pl}" y="${pt}" width="${W - pl - pr}" height="${H - pt - pb}" fill="rgba(0,0,0,.2)" stroke="${C.line}"/>`;
  let gp = "", tl = "";
  for (let x = Math.ceil(xmin / sx) * sx; x <= xmax + 1e-9; x += sx) { gp += `M${n1(X(x))} ${pt}V${H - pb}`; if (Math.abs(x) > 1e-9) tl += `<text x="${n1(X(x))}" y="${H - 6}" fill="${C.faint}" text-anchor="middle">${f2(x)}</text>`; }
  for (let y = Math.ceil(ymin / sy) * sy; y <= ymax + 1e-9; y += sy) { gp += `M${pl} ${n1(Y(y))}H${W - pr}`; if (Math.abs(y) > 1e-9) tl += `<text x="${pl - 4}" y="${n1(Y(y) + 3)}" fill="${C.faint}" text-anchor="end">${f2(y)}</text>`; }
  s += `<path d="${gp}" stroke="${C.line2}" stroke-opacity=".45" fill="none"/>` + tl;
  const ax = clamp(0, ymin, ymax), ay = clamp(0, xmin, xmax);
  s += `<path d="M${pl} ${n1(Y(ax))}H${W - pr}M${n1(X(ay))} ${pt}V${H - pb}" stroke="${C.muted}" stroke-width="1.3"/>`;
  s += `<g clip-path="url(#${id})">`;
  const dash = v => (v ? ` stroke-dasharray="${v}"` : "");
  (o.vlines || []).forEach(v => { s += `<path d="M${n1(X(v.x))} ${pt}V${H - pb}" stroke="${v.color}" stroke-width="${v.w || 1.5}"${dash(v.dash === undefined ? "5 4" : v.dash)}/>`; });
  (o.segs || []).forEach(q => { s += `<path d="M${n1(X(q.x1))} ${n1(Y(q.y1))}L${n1(X(q.x2))} ${n1(Y(q.y2))}" stroke="${q.color}" stroke-width="${q.w || 2}"${dash(q.dash)}/>`; });
  (o.fns || []).forEach(fn => {
    let dd = "", pen = false, px = null; const N = 360, brk = fn.breaks || [];
    for (let i = 0; i <= N; i++) {
      const x = xmin + (xmax - xmin) * i / N, y = fn.f(x);
      if (px !== null && brk.some(b => (px - b) * (x - b) <= 0)) pen = false;
      px = x;
      if (!isFinite(y) || Math.abs(y) > 1e5) { pen = false; continue; }
      dd += (pen ? "L" : "M") + n1(X(x)) + " " + n1(clamp(Y(y), -2000, 2000)); pen = true;
    }
    s += `<path d="${dd}" fill="none" stroke="${fn.color}" stroke-width="${fn.w || 2.2}"${dash(fn.dash)}/>`;
  });
  s += `</g>`;
  (o.pts || []).forEach(p => {
    if (p.x < xmin || p.x > xmax || p.y < ymin || p.y > ymax) return;
    s += `<circle cx="${n1(X(p.x))}" cy="${n1(Y(p.y))}" r="${p.r || 5}" fill="${p.open ? C.ink : p.color}" stroke="${p.color}" stroke-width="${p.open ? 2 : 0}"/>`;
    if (p.label) { const right = X(p.x) < W * .62; s += `<text x="${n1(X(p.x) + (right ? 8 : -8))}" y="${n1(Y(p.y) + (p.dy || -8))}" fill="${p.color}" font-size="13" font-family="STIX Two Text, Georgia, serif" text-anchor="${right ? "start" : "end"}">${p.label}</text>`; }
  });
  return s + `</svg>`;
}
const stepsH = (rows, cur) => `<div class="a13-steps">${rows.map((r, i) => `<div class="st${i === cur ? " cur" : ""}"><span class="tag">${r.tag}</span><span class="eq">${r.html}</span></div>`).join("")}</div>`;

/* ---------- exponential growth and decay ---------- */
L["a1-exp-functions"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let a = 2, b = 1.5, lin = true, xm = 2, ym = 10, drag = false, P = null;
  k.slider(`<span class="c2"><i>a</i></span>`, 0.5, 8, 0.5, a, v => a = v, v => k.fmt(v, 1));
  const sb = k.slider(`<span class="c3"><i>b</i></span>`, 0.1, 3, 0.05, b, v => b = Math.round(v * 100) / 100, v => v.toFixed(2));
  k.check("compare linear", lin, v => lin = v);
  k.button("Growth ×2", () => { b = 2; sb.set(2); }, "btn-s");
  k.button("Decay ×½", () => { b = 0.5; sb.set(0.5); }, "btn-s");
  k.hint("Drag across the graph to read f(x)");
  const setX = e => { if (!P) return; const p = c.xy(e); xm = clamp(Math.round(P.inv(p.x, p.y).x * 10) / 10, P.xmin, P.xmax); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setX(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setX(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "ew-resize";
  k.loop(dt => {
    const f = x => a * Math.pow(b, x), XMIN = -3, XMAX = 8;
    const hi = b >= 1 ? f(6) : f(-3);
    const top = Math.max(a * 2.6, Math.min(hi * 1.1, b >= 1 ? a * 14 : a * 6));
    ym = k.reduce ? top : lerp(ym, top, Math.min(1, dt * 6));
    c.begin(); const { w } = c;
    P = k.plot(c, { xmin: XMIN, xmax: XMAX, ymin: -ym * 0.08, ymax: ym, pad: { l: 46, r: 14, t: 16, b: 28 }, xstep: 1, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    if (lin) P.fn(x => a + a * (b - 1) * x, k.alpha(C.violet, .85), 1.8, XMIN, XMAX, [6, 5]);
    P.fn(f, C.amber, 3);
    // equal steps in x multiply y by b
    if (b !== 1) for (let i = 0; i < 4; i++) {
      const y1 = P.Y(f(i)), y2 = P.Y(f(i + 1)); if (Math.min(y1, y2) < P.top + 14) break;
      P.point(i + 1, f(i + 1), C.amber, 3.5);
      d.text("×" + b.toFixed(2).replace(/\.?0+$/, ""), (P.X(i) + P.X(i + 1)) / 2 - (b > 1 ? 10 : -10), Math.min(y1, y2) - 8 - (b > 1 ? 4 : 0), { font: `600 12px ${F.mono}`, color: C.pink, align: "center" });
    }
    // doubling time / half-life
    let tK = null; if (b > 1) tK = Math.log(2) / Math.log(b); else if (b < 1) tK = Math.log(2) / Math.log(1 / b);
    if (tK !== null && tK <= XMAX) {
      const yT = b > 1 ? 2 * a : a / 2;
      P.line(tK, 0, tK, yT, C.green, 1.5, [4, 4]); P.line(0, yT, tK, yT, C.green, 1.5, [4, 4]); P.point(tK, yT, C.green, 5);
      P.label(b > 1 ? "2a: doubled" : "a/2: halved", tK, yT, C.green, b > 1 ? { dx: 8, dy: 16, font: `600 12px ${F.ui}` } : { dx: -8, dy: 16, align: "right", font: `600 12px ${F.ui}` });
      if (2 * tK <= XMAX) { const y4 = b > 1 ? 4 * a : a / 4; if (y4 < ym) { P.line(2 * tK, 0, 2 * tK, y4, k.alpha(C.green, .5), 1, [3, 4]); P.point(2 * tK, y4, k.alpha(C.green, .7), 4); } }
    }
    P.point(0, a, C.cyan, 6); P.label("(0, a)", 0, a, C.cyan, { dx: -8, dy: b < 1 ? 18 : -10, align: "right", font: `italic 14px ${F.math}` });
    const yv = f(xm);
    P.line(xm, P.ymin, xm, P.ymax, k.alpha(C.text, .35), 1, [3, 3]); if (yv <= ym) P.point(xm, yv, C.text, 5, true);
    d.text(`f(${k.fmt(xm, 1)}) = ${k.fmt(yv, 3)}`, b < 1 ? w - 16 : P.left + 8, b < 1 ? P.top + 38 : P.top + 16, { font: `15px ${F.math}`, color: C.text, align: b < 1 ? "right" : "left" });
    const kind = b > 1 ? "growth" : b < 1 ? "decay" : "constant";
    d.text(kind === "growth" ? "GROWTH · b > 1" : kind === "decay" ? "DECAY · 0 < b < 1" : "CONSTANT · b = 1", w - 16, P.top + 16, { font: `600 12px ${F.ui}`, color: C.pink, align: "right" });
    const pct = Math.abs(b - 1) * 100, vals = [0, 1, 2, 3, 4].map(i => k.fmt(f(i), 4)).join(", ");
    const hit = b === 1 || (tK !== null && Math.abs(xm - tK) < .06);
    k.setRO(`<div><h2>Exponential ${kind}</h2><div class="ro-big" style="margin-top:8px"><i>y</i> = <span class="c2">${k.fmt(a, 1)}</span> · <span class="c3">${b.toFixed(2)}</span><sup><i>x</i></sup></div></div>
      <div class="ro-rows">
      <div class="row">${M(`<i>f</i>(${k.fmt(xm, 1)})`)} = <span class="v c1">${k.fmt(yv, 4)}</span><span class="lbl">value at the dragged x</span></div>
      <div class="row">${M(`<i>f</i>(0) = <span class="c2"><i>a</i></span>`)} = <span class="v c2">${k.fmt(a, 1)}</span><span class="lbl">starting value: b⁰ = 1, so the curve crosses the y-axis at a</span></div>
      <div class="row">${M("<i>f</i>(0) … <i>f</i>(4)")} <span class="v c1">${vals}</span><span class="lbl">each value is the previous one times b; equal steps in x multiply y</span></div>
      <div class="row">${M(b > 1 ? `<i>r</i> = <span class="c3"><i>b</i></span> − 1` : b < 1 ? `<i>r</i> = 1 − <span class="c3"><i>b</i></span>` : "<i>r</i>")} = <span class="v c3">${k.fmt(pct, 1)}%</span><span class="lbl">${b > 1 ? "grows" : b < 1 ? "shrinks" : "changes"} by ${k.fmt(pct, 1)}% of its current value per unit of x</span></div>
      ${lin ? `<div class="row">${M("at <i>x</i> = 8")} <span class="v">${k.fmt(f(8), 2)} vs ${k.fmt(a + a * (b - 1) * 8, 2)}</span><span class="lbl">exponential vs the violet linear model with the same start and first step, which adds ${k.fmt(a * (b - 1), 2)} each time instead of multiplying</span></div>` : ""}
      </div>
      <div class="landmark${hit ? " hit" : ""}">${b === 1 ? `<div class="big">${M(`<span class="c3"><i>b</i></span> = 1: <i>y</i> = ${k.fmt(a, 1)}`)}</div><div class="note">Multiplying by 1 changes nothing, so the graph is flat. An exponential function needs b &gt; 0 and b ≠ 1.</div>`
        : `<div class="big">${M(`<span class="c3">${b.toFixed(2)}</span><sup><i>t</i></sup> = ${b > 1 ? "2" : "½"}`)} at <i>t</i> ≈ ${k.fmt(tK, 2)}</div><div class="note">${b > 1 ? "Doubling time" : "Half-life"}: every ${k.fmt(tK, 2)} unit${k.fmt(tK, 2) === "1" ? "" : "s"} of x the value ${b > 1 ? "doubles" : "halves"}, whatever it started at.${Math.abs(xm - tK) < .06 ? ` Here f(${k.fmt(xm, 1)}) ≈ ${b > 1 ? "2a" : "a/2"}.` : ""} The curve never reaches 0: the x-axis is an asymptote.</div>`}</div>
      <p class="narr">Drag across the graph. Push b below 1 for decay; the dashed violet line shows how far a linear model falls behind.</p>`);
  });
};

/* ---------- systems by elimination ---------- */
L["a1-sys-elim"] = k => {
  const { C, M } = k; const dom = k.dom();
  const PRE = [["2x + 3y = 12 and 4x − 3y = 6", [2, 3, 12, 4, -3, 6]], ["3x + 2y = 16 and 5x − 4y = 34", [3, 2, 16, 5, -4, 34]], ["2x + 5y = 1 and 3x + 4y = 5", [2, 5, 1, 3, 4, 5]],
    ["5x + 3y = 1 and 2x + 7y = −1 (fractions)", [5, 3, 1, 2, 7, -1]], ["4x − 2y = 5 and −6x + 3y = 1 (parallel)", [4, -2, 5, -6, 3, 1]], ["x − 2y = 3 and −3x + 6y = −9 (same line)", [1, -2, 3, -3, 6, -9]]];
  let S = PRE[0][1].slice(), elim = "y", plan;
  function build(){
    const [a1, , c1] = S, iv = elim === "y" ? 1 : 0, ok = 1 - iv, p1 = S[iv], p2 = S[3 + iv];
    const Lc = LCM(p1, p2); const m1 = Lc / Math.abs(p1); let m2 = Lc / Math.abs(p2); if (Math.sign(p1) === Math.sign(p2)) m2 = -m2;
    const e1 = S.slice(0, 3).map(v => v * m1), e2 = S.slice(3).map(v => v * m2), sum = e1.map((v, i) => v + e2[i]);
    const coef = sum[ok], rhs = sum[2];
    let kind = "one", u = null, v = null;
    if (coef === 0) kind = rhs === 0 ? "same" : "none";
    else { u = Q(rhs, coef); v = qdiv(qsub(c1, qmul(S[ok], u)), p1); }
    void a1;
    plan = { m1, m2, e1, e2, sum, iv, ok, p1, p2, Lc, coef, rhs, kind, u, v, sol: kind === "one" ? (iv ? { x: u, y: v } : { x: v, y: u }) : null, steps: kind === "one" ? 5 : 3 };
  }
  const term = (co, v, first, cl) => { const s = co < 0 ? (first ? MI : " − ") : (first ? "" : " + "); const m = Math.abs(co) === 1 ? "" : Math.abs(co); return s + `<span class="${cl}">${m}<i>${v}</i></span>`; };
  const eqH = (e, hot = -1, zero = false) => { let s = ""; ["x", "y"].forEach((v, i) => { const co = e[i]; if (co === 0) { if (zero && hot === i) s += (s ? " + " : "") + `<span class="c1 a13-x">0<i>${v}</i></span>`; return; } s += term(co, v, !s, i === hot ? "c1" : ""); }); return (s || "0") + " = " + sg(e[2]); };
  const rnd = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
  const nz = () => { let v = 0; while (!v) v = rnd(-6, 6); return v; };
  const st = k.stepper(() => plan.steps, render, { ms: 1100 });
  const sel = k.select("System", PRE.map((p, i) => [i, p[0].replace(/(\d)x/g, "$1x")]), 0, v => { S = PRE[+v][1].slice(); build(); st.reset(); });
  k.select("Eliminate", [["y", "y"], ["x", "x"]], elim, v => { elim = v; build(); st.reset(); });
  k.button("Random", () => { for (let t = 0; t < 200; t++) { const x = rnd(-5, 5), y = rnd(-5, 5), a1 = nz(), b1 = nz(), a2 = nz(), b2 = nz(); if (a1 * b2 - a2 * b1 === 0 || Math.abs(a1) === Math.abs(a2) && Math.abs(b1) === Math.abs(b2)) continue; S = [a1, b1, a1 * x + b1 * y, a2, b2, a2 * x + b2 * y]; break; } sel.el.value = ""; build(); st.reset(); }, "btn ghost");
  function render(){
    const K = st.k, p = plan, vn = p.iv ? "y" : "x", kn = p.iv ? "x" : "y", [a1, b1, c1, a2, b2, c2] = S;
    const rows = [{ tag: "line up", html: `<span class="c2">${eqH(S.slice(0, 3), p.iv)}</span><br><span class="c3">${eqH(S.slice(3), p.iv)}</span>` }];
    if (K >= 1) rows.push({ tag: "scale", html: `<span class="c2">× ${sg(p.m1)}: ${eqH(p.e1, p.iv)}</span><br><span class="c3">× ${sg(p.m2)}: ${eqH(p.e2, p.iv)}</span>` });
    if (K >= 2) rows.push({ tag: "add", html: eqH(p.sum, p.iv, true) });
    if (K >= 3) rows.push({ tag: p.kind === "one" ? "solve" : "conclude", html: p.kind === "one" ? `${sg(p.coef)}<i>${kn}</i> = ${sg(p.rhs)} ⟹ <i>${kn}</i> = ${qH(p.u, "c5")}` : p.kind === "none" ? `0 = ${sg(p.rhs)} is false ⟹ <span class="c1">no solution</span>` : `0 = 0 is always true ⟹ <span class="c1">infinitely many solutions</span>` });
    if (K >= 4) { const q1 = S[p.ok]; rows.push({ tag: "substitute", html: `<span class="c2">${Math.abs(q1) === 1 ? (q1 < 0 ? MI : "") : sg(q1)}(${qH(p.u)}) ${p.p1 < 0 ? "−" : "+"} ${Math.abs(p.p1) === 1 ? "" : Math.abs(p.p1)}<i>${vn}</i> = ${sg(c1)}</span> ⟹ <i>${vn}</i> = ${qH(p.v, "c5")}` }); }
    if (K >= 5) { const chk = qadd(qmul(a2, p.sol.x), qmul(b2, p.sol.y)); rows.push({ tag: "check", html: `<span class="c3">${sg(a2)}(${qH(p.sol.x)}) + ${b2 < 0 ? `(${sg(b2)})` : b2}(${qH(p.sol.y)}) = ${qH(chk)}</span> ✓` }); }
    // graph
    const cx = p.sol ? qv(p.sol.x) : 0, cy = p.sol ? qv(p.sol.y) : 0;
    const xmin = Math.floor(Math.min(-2, cx - 5)), xmax = Math.ceil(Math.max(2, cx + 5)), ymin = Math.floor(Math.min(-2, cy - 5)), ymax = Math.ceil(Math.max(2, cy + 5));
    const fns = [], vlines = [], segs = [];
    const lineOf = (A, B, Cc, color, w, dsh) => { if (B !== 0) fns.push({ f: x => (Cc - A * x) / B, color, w, dash: dsh }); else if (A !== 0) vlines.push({ x: Cc / A, color, w, dash: dsh || "" }); };
    lineOf(a1, b1, c1, C.cyan, 2.4); lineOf(a2, b2, c2, C.pink, 2.4, p.kind === "same" ? "7 6" : "");
    if (K >= 3 && p.kind === "one") { if (kn === "x") vlines.push({ x: qv(p.u), color: C.amber, w: 1.6, dash: "5 4" }); else segs.push({ x1: xmin, y1: qv(p.u), x2: xmax, y2: qv(p.u), color: C.amber, w: 1.6, dash: "5 4" }); }
    const pts = K >= 5 && p.sol ? [{ x: cx, y: cy, color: C.green, r: 6, label: `(${qT(p.sol.x)}, ${qT(p.sol.y)})` }] : [];
    const svg = svgPlot(C, { xmin, xmax, ymin, ymax, fns, vlines, segs, pts });
    dom.innerHTML = `<div class="a13-wrap">${stepsH(rows, K)}<div class="a13-graph">${svg}<div class="a13-cap"><span class="c2">equation 1</span> · <span class="c3">equation 2</span>${K >= 3 && p.kind === "one" ? ` · <span class="c1">after adding: ${kn} = ${qT(p.u)}</span>` : ""}</div></div></div>`;
    const det = a1 * b2 - a2 * b1, done = K >= p.steps;
    const notes = [
      `Goal: make the <span class="c1">${vn}</span>-coefficients opposites (${sg(p.p1)} and ${sg(p.p2)} now), so adding the equations wipes ${vn} out.`,
      `Multiply every term, both sides. lcm(${Math.abs(p.p1)}, ${Math.abs(p.p2)}) = ${p.Lc}, so the ${vn}-terms become ${sg(p.e1[p.iv])}${vn} and ${sg(p.e2[p.iv])}${vn}. Scaling an equation does not move its line.`,
      `Adding equal things to equal things keeps a true equation. The ${vn}-terms cancel${p.kind === "one" ? `, leaving one equation in ${kn} alone.` : p.kind === "none" ? ", and so does everything else except the constants." : ", and so does everything else."}`,
      p.kind === "one" ? `One variable, one equation: divide by ${sg(p.coef)}. The amber line on the graph is this equation; it passes through the crossing point.` : p.kind === "none" ? `A false statement means no (x, y) satisfies both: the lines are parallel (same slope, different intercepts).` : `A true statement for every x and y means both equations describe the same line: every point on it is a solution.`,
      `Put ${kn} = ${p.u ? qT(p.u) : "?"} into equation 1 and solve for ${vn}.`,
      `Check in the other equation: it gives ${sg(c2)}, as it should. The lines cross at exactly one point.`][Math.min(K, 5)];
    k.setRO(`<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px">${done ? (p.kind === "one" ? `(<i>x</i>, <i>y</i>) = (${qH(p.sol.x, "c5")}, ${qH(p.sol.y, "c5")})` : `<span class="c1">${p.kind === "none" ? "no solution" : "infinitely many"}</span>`) : `(<i>x</i>, <i>y</i>) = (?, ?)`}</div></div>
      <div class="ro-rows"><div class="row">${M(`<span class="c2">eq 1</span> × ${sg(p.m1)}, <span class="c3">eq 2</span> × ${sg(p.m2)}`)}<span class="lbl">turns the ${vn}-coefficients into ${sg(p.e1[p.iv])} and ${sg(p.e2[p.iv])}</span></div>
      <div class="row">${M(`<i>a</i>₁<i>b</i>₂ − <i>a</i>₂<i>b</i>₁ = ${sg(det)}`)}<span class="lbl">${det ? "nonzero, so the lines have different slopes and cross once" : "zero: the lines are parallel or identical"}</span></div></div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${["Line up like terms", "Scale", "Add the equations", p.kind === "one" ? `Solve for ${kn}` : "Read the result", "Back-substitute", "Check"][Math.min(K, 5)]}</div><div class="note">${notes}</div></div>
      <p class="narr">Step through, then switch to eliminating ${p.iv ? "x" : "y"} instead: different multipliers, same answer.</p>`);
  }
  build(); render();
};

/*__NEXT__*/
})();
