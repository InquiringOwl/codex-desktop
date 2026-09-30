/* ============ Labs: Algebra I, part 3b (special factoring, quadratics, sequences, systems in context, rational expressions and equations) ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;
const G = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const LCM = (a, b) => a && b ? Math.abs(a * b) / G(a, b) : 0;
const MI = "−";
const sg = n => (n < 0 ? MI + Math.abs(n) : String(n));
const FR = (a, b, cl = "") => `<span class="m ${cl}"><span class="fr"><span>${a}</span><span>${b}</span></span></span>`;
const X_ = "<i>x</i>";
const SQ = t => `√<span class="a3b-ol">${t}</span>`;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = t => (t < .5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t));
const toward = (v, target, step) => (Math.abs(target - v) <= step ? target : v + Math.sign(target - v) * step);
const RO0 = `<i class="a3b-k" hidden></i>`;

if (!document.getElementById("a3b-css")) {
  const s = document.createElement("style"); s.id = "a3b-css";
  s.textContent = `.readout:has(> .a3b-k) > *{flex-shrink:0}
.a3b-ol{border-top:1px solid currentColor;padding-top:1px;margin-left:1px}
.a3b-wrap{display:flex;flex-wrap:wrap;gap:14px 22px;justify-content:center;align-items:flex-start}
.a3b-steps{flex:1 1 320px;min-width:0;display:grid;gap:4px;font:400 19px/1.45 var(--math)}
.a3b-steps .st{display:grid;grid-template-columns:92px minmax(0,1fr);align-items:baseline;gap:0 10px;padding:5px 8px;border-radius:4px;color:var(--muted)}
.a3b-steps .st.cur{background:rgba(242,184,75,.07);color:var(--text);box-shadow:inset 2px 0 0 var(--amber)}
.a3b-steps .tag{font:600 11px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.a3b-steps .st.cur .tag{color:var(--amber)}
.a3b-steps .eq{overflow-x:auto;overflow-y:hidden;min-width:0;padding:2px 0}
.a3b-side{flex:1 1 240px;max-width:400px;min-width:220px;display:grid;gap:10px}
.a3b-cap{font:12px/1.4 var(--sans);color:var(--faint);margin-top:4px;text-align:center}
.a3b-x{text-decoration:line-through;text-decoration-color:var(--amber);text-decoration-thickness:2px;opacity:.6}
.a3b-chip{display:inline-block;border:1px solid;border-radius:4px;padding:0 7px;margin:2px 3px;font:400 17px/1.5 var(--math)}
.a3b-chip.dim{opacity:.35}
.a3b-chips{display:flex;flex-wrap:wrap;align-items:center;gap:2px 4px;font:12px var(--sans);color:var(--faint)}
.a3b-chips b{font:600 11px/1 var(--ui);letter-spacing:.14em;text-transform:uppercase;min-width:52px}
.a3b-prob{font:14.5px/1.5 var(--sans);color:var(--muted);border-left:2px solid var(--line-2);padding:4px 0 4px 12px;margin:0 0 12px;max-width:760px}
.a3b-prob b{color:var(--text);font-weight:500}
@media (max-width:560px){.a3b-steps{font-size:17px}.a3b-steps .st{grid-template-columns:minmax(0,1fr)}}`;
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
const isSq = n => n >= 0 && Math.round(Math.sqrt(n)) ** 2 === n;
// √(q) for a rational q ≥ 0: {rational: Q} or {s, t, d} meaning s√t / d
function sqrtQ(q){ q = qq(q); if (isSq(q.n) && isSq(q.d)) return { rational: Q(Math.round(Math.sqrt(q.n)), Math.round(Math.sqrt(q.d))) }; const [s, t] = rad(q.n * q.d); const g = G(s, q.d); return { s: s / g, t, d: q.d / g }; }
const sqrtQT = q => { const r = sqrtQ(q); return r.rational ? qT(r.rational) : `${r.s === 1 ? "" : r.s}√${r.t}${r.d === 1 ? "" : "/" + r.d}`; };
const sqrtQH = q => { const r = sqrtQ(q); if (r.rational) return qH(r.rational); const top = `${r.s === 1 ? "" : r.s}${SQ(r.t)}`; return r.d === 1 ? `<span class="m">${top}</span>` : FR(top, r.d); };
// exact roots of A x² + B x + C = 0 (integers, A ≠ 0)
function quadExact(A, B, C){
  const D = B * B - 4 * A * C;
  if (D < 0) return { D, n: 0, vals: [], html: "no real roots", text: "no real roots" };
  const [s, t] = rad(D);
  if (t === 1) {
    const r1 = Q(-B - s, 2 * A), r2 = Q(-B + s, 2 * A), rs = qv(r1) <= qv(r2) ? [r1, r2] : [r2, r1];
    const roots = D === 0 ? [rs[0]] : rs;
    return { D, n: roots.length, rational: true, roots, vals: roots.map(qv), html: roots.map(r => qH(r)).join(", "), text: roots.map(qT).join(" or ") };
  }
  let p = -B, q = 2 * A, ss = s; const g = G(G(p, ss), q); p /= g; q /= g; ss /= g; if (q < 0) { p = -p; q = -q; }
  const num = (p ? sg(p) + " ± " : "±") + (ss === 1 ? "" : ss) + SQ(t);
  const numT = (p ? sg(p) + " ± " : "±") + (ss === 1 ? "" : ss) + "√" + t;
  const v1 = (-B - Math.sqrt(D)) / (2 * A), v2 = (-B + Math.sqrt(D)) / (2 * A);
  return { D, n: 2, rational: false, vals: [Math.min(v1, v2), Math.max(v1, v2)], html: q === 1 ? `<span class="m">${num}</span>` : FR(num, q), text: q === 1 ? numT : `(${numT})/${q}`, s: ss, t, p, q };
}

/* ---------- integer polynomials, low degree first ---------- */
const ptrim = p => { p = p.slice(); while (p.length > 1 && p[p.length - 1] === 0) p.pop(); return p; };
const pmul = (a, b) => { const r = new Array(a.length + b.length - 1).fill(0); a.forEach((x, i) => b.forEach((y, j) => { r[i + j] += x * y; })); return ptrim(r); };
const padd = (a, b, s = 1) => { const r = []; for (let i = 0; i < Math.max(a.length, b.length); i++) r.push((a[i] || 0) + s * (b[i] || 0)); return ptrim(r); };
const pscale = (a, k) => ptrim(a.map(x => x * k));
const proots = (k, rs) => rs.reduce((p, r) => pmul(p, [-r, 1]), [k]);
const peval = (p, x) => p.reduceRight((acc, c) => acc * x + c, 0);
const pdivRoot = (p, r) => { const n = p.length - 1, out = new Array(Math.max(1, n)).fill(0); let acc = 0; for (let i = n; i >= 1; i--) { acc = p[i] + acc * r; out[i - 1] = acc; } return ptrim(out); };
const pdeg = p => ptrim(p).length - 1;
const pzero = p => ptrim(p).length === 1 && ptrim(p)[0] === 0;
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
const nTerms = p => p.filter(x => qq(x).n !== 0).length;
// linear factor (x − r) for integer r
const facH = (r, v = X_) => (r === 0 ? v : `(${v} ${r > 0 ? "−" : "+"} ${Math.abs(r)})`);
const facBare = (r, v = X_) => (r === 0 ? v : `${v} ${r > 0 ? "−" : "+"} ${Math.abs(r)}`);
// k·(x − r1)(x − r2)… ; a lone monic factor loses its brackets
function prodH(kc, roots, v = X_){
  if (!roots.length) return sg(kc);
  roots = roots.filter(r => r === 0).concat(roots.filter(r => r !== 0));
  if (roots.length === 1 && kc === 1) return facBare(roots[0], v);
  return (kc === 1 ? "" : kc === -1 ? MI : sg(kc)) + roots.map(r => facH(r, v)).join("");
}
const msetMinus = (a, b) => { const r = a.slice(); b.forEach(x => { const i = r.indexOf(x); if (i >= 0) r.splice(i, 1); }); return r; };
const msetCommon = (a, b) => { const r = [], bb = b.slice(); a.forEach(x => { const i = bb.indexOf(x); if (i >= 0) { r.push(x); bb.splice(i, 1); } }); return r; };
const uniq = a => [...new Set(a)].sort((p, q) => p - q);
const ri = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));

/* ---------- canvas math text: short letter runs in italic ---------- */
const ROMAN = new Set(["or", "and", "no", "if", "max", "min", "for", "LCD", "real", "not", "all", "ft", "m", "s", "sq"]);
function MT(k){
  const { C, F } = k;
  const runs = s => s.match(/[a-zA-Z]+|[^a-zA-Z]+/g) || [];
  const it = r => /^[a-zA-Z]{1,3}$/.test(r) && !ROMAN.has(r);
  const fnt = (r, size, wt) => `${it(r) ? "italic " : ""}${wt ? wt + " " : ""}${size}px ${F.math}`;
  const mw = (d, s, size, wt) => runs(s).reduce((w, r) => w + d.width(r, fnt(r, size, wt)), 0);
  function mt(d, s, x, y, o = {}){ const size = o.size || 16, W = mw(d, s, size, o.wt); let cx = o.align === "center" ? x - W / 2 : o.align === "right" ? x - W : x; for (const r of runs(s)) cx += d.text(r, cx, y, { font: fnt(r, size, o.wt), color: o.color || C.text, base: o.base || "alphabetic" }); return W; }
  // label with a dark backing plate
  function tag(d, s, x, y, o = {}){ const size = o.size || 14, W = mw(d, s, size); const x0 = o.align === "center" ? x - W / 2 : o.align === "right" ? x - W : x; d.rr(x0 - 4, y - size * .95, W + 8, size * 1.3, 3, k.alpha(C.ink, .82)); mt(d, s, x0, y, { size, color: o.color }); return W; }
  return { mt, mw, tag };
}
const mix = (h1, h2, t) => { const a = parseInt(h1.slice(1), 16), b = parseInt(h2.slice(1), 16); const ch = sh => Math.round(lerp(a >> sh & 255, b >> sh & 255, t)); return "#" + ((1 << 24) + (ch(16) << 16) + (ch(8) << 8) + ch(0)).toString(16).slice(1); };

/* ---------- small SVG plot for DOM labs ---------- */
let svgId = 0;
function svgPlot(C, o){
  const W = o.w || 380, H = o.h || 270, pl = 30, pr = 8, pt = 8, pb = 20;
  const { xmin, xmax, ymin, ymax } = o, id = "a3bclip" + (++svgId);
  const X = x => pl + (x - xmin) / (xmax - xmin) * (W - pl - pr), Y = y => pt + (ymax - y) / (ymax - ymin) * (H - pt - pb);
  const nice = span => { const raw = span / 6, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };
  const sx = o.xstep || nice(xmax - xmin), sy = o.ystep || nice(ymax - ymin);
  const f2 = v => String(+v.toFixed(4)).replace("-", MI);
  const n1 = v => v.toFixed(1);
  let s = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;height:auto" font-family="IBM Plex Mono, monospace" font-size="10">`;
  s += `<defs><clipPath id="${id}"><rect x="${pl}" y="${pt}" width="${W - pl - pr}" height="${H - pt - pb}"/></clipPath></defs>`;
  s += `<rect x="${pl}" y="${pt}" width="${W - pl - pr}" height="${H - pt - pb}" fill="rgba(0,0,0,.2)" stroke="${C.line}"/>`;
  let gp = "", tl = "";
  for (let x = Math.ceil(xmin / sx) * sx; x <= xmax + 1e-9; x += sx) { gp += `M${n1(X(x))} ${pt}V${H - pb}`; if (Math.abs(x) > 1e-9) tl += `<text x="${n1(X(x))}" y="${H - 6}" fill="${C.faint}" text-anchor="middle">${f2(x)}</text>`; }
  for (let y = Math.ceil(ymin / sy) * sy; y <= ymax + 1e-9; y += sy) { gp += `M${pl} ${n1(Y(y))}H${W - pr}`; if (Math.abs(y) > 1e-9) tl += `<text x="${pl - 4}" y="${n1(Y(y) + 3)}" fill="${C.faint}" text-anchor="end">${f2(y)}</text>`; }
  s += `<path d="${gp}" stroke="${C.line2}" stroke-opacity=".45" fill="none"/>` + tl;
  const ax = clamp(0, ymin, ymax), ay = clamp(0, xmin, xmax);
  s += `<path d="M${pl} ${n1(Y(ax))}H${W - pr}M${n1(X(ay))} ${pt}V${H - pb}" stroke="${C.muted}" stroke-width="1.3"/>`;
  if (o.xlabel) s += `<text x="${W - pr - 4}" y="${n1(Y(ax) - 5)}" fill="${C.muted}" font-size="12" font-style="italic" font-family="STIX Two Text, Georgia, serif" text-anchor="end">${o.xlabel}</text>`;
  if (o.ylabel) s += `<text x="${n1(X(ay) + 5)}" y="${pt + 12}" fill="${C.muted}" font-size="12" font-style="italic" font-family="STIX Two Text, Georgia, serif">${o.ylabel}</text>`;
  s += `<g clip-path="url(#${id})">`;
  const dash = v => (v ? ` stroke-dasharray="${v}"` : "");
  (o.vlines || []).forEach(v => { s += `<path d="M${n1(X(v.x))} ${pt}V${H - pb}" stroke="${v.color}" stroke-width="${v.w || 1.5}"${dash(v.dash === undefined ? "5 4" : v.dash)}/>`; });
  (o.segs || []).forEach(q => { s += `<path d="M${n1(X(q.x1))} ${n1(Y(q.y1))}L${n1(X(q.x2))} ${n1(Y(q.y2))}" stroke="${q.color}" stroke-width="${q.w || 2}"${dash(q.dash)}/>`; });
  (o.fns || []).forEach(fn => {
    let dd = "", pen = false, px = null; const N = 480, brk = fn.breaks || [];
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
    if (p.label) { const right = X(p.x) < W * .62; s += `<text x="${n1(X(p.x) + (right ? 8 : -8))}" y="${n1(Y(p.y) + (p.dy || -8))}" fill="${p.color}" font-size="12" font-family="STIX Two Text, Georgia, serif" text-anchor="${right ? "start" : "end"}">${p.label}</text>`; }
  });
  return s + `</svg>`;
}
const stepsH = (rows, cur) => `<div class="a3b-steps">${rows.map((r, i) => `<div class="st${i === cur ? " cur" : ""}"><span class="tag">${r.tag}</span><span class="eq">${r.html}</span></div>`).join("")}</div>`;

/* =====================================================================
   a1-factor-special: pictures of a² − b², (a ± b)², a³ − b³
   ===================================================================== */
L["a1-factor-special"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d, g = c.g; const T = MT(k);
  let mode = "diff", a = 7, b = 3, tA = 0;
  const st = k.stepper(() => 2, () => {}, { ms: 1400 });
  k.modes([["diff", "a² − b²"], ["plus", "(a + b)²"], ["minus", "(a − b)²"], ["cube", "a³ ± b³"]], mode, v => { mode = v; st.reset(); tA = 0; });
  let sb = null;
  k.slider(`<span class="c2"><i>a</i></span>`, 2, 10, 1, a, v => { a = v; sb.setMax(a - 1); b = sb.v; });
  sb = k.slider(`<span class="c3"><i>b</i></span>`, 1, 6, 1, b, v => b = v);
  const lab = (s, x, y, col, size = 15, align = "center") => T.mt(d, s, x, y, { size, color: col, align });
  const vbar = (x, y1, y2, col) => { d.line(x, y1 + 2, x, y2 - 2, k.alpha(col, .7), 1); d.line(x - 3, y1 + 2, x + 3, y1 + 2, k.alpha(col, .7)); d.line(x - 3, y2 - 2, x + 3, y2 - 2, k.alpha(col, .7)); };
  const hbar = (x1, x2, y, col) => { d.line(x1 + 2, y, x2 - 2, y, k.alpha(col, .7), 1); d.line(x1 + 2, y - 3, x1 + 2, y + 3, k.alpha(col, .7)); d.line(x2 - 2, y - 3, x2 - 2, y + 3, k.alpha(col, .7)); };

  function drawDiff(w, h, p1, p2){
    const top = 70, avail = h - top - 96, s = Math.min((w - 110) / (a + b), avail / a);
    const A = a * s, B = b * s, R = (a - b) * s, ox = (w - (a + b) * s) / 2 + 28, oy = top + (avail - A) / 2;
    const e = ease(p2), fs = Math.max(12, Math.min(18, s * .9));
    // R1 (top strip) stays put
    d.rect(ox, oy, A, R, k.alpha(C.cyan, .16), p2 > .98 ? null : C.cyan, 1.5);
    // corner b² fades out as it is removed
    if (p2 < 1) { const al = 1 - p1; d.rect(ox + R, oy + R, B, B, k.alpha(C.pink, .28 * al + .03), null); g.save(); g.setLineDash(p1 > .5 ? [5, 4] : []); g.strokeStyle = k.alpha(C.pink, .9 - .5 * p2); g.lineWidth = 1.5; g.strokeRect(ox + R + .5, oy + R + .5, B - 1, B - 1); g.restore();
      lab(p1 < .5 ? "b²" : "− b²", ox + R + B / 2, oy + R + B / 2 + fs * .35, k.alpha(C.pink, 1 - .6 * p2), fs); }
    // R2 (bottom-left piece) swings round to the right
    const cx = lerp(ox + R / 2, ox + A + B / 2, e), cy = lerp(oy + R + B / 2, oy + R / 2, e);
    g.save(); g.translate(cx, cy); g.rotate(-Math.PI / 2 * e);
    d.rect(-R / 2, -B / 2, R, B, k.alpha(C.cyan, .16), p2 > .98 ? null : C.cyan, 1.5); g.restore();
    if (p2 > .98) d.rect(ox, oy, A + B, R, null, C.amber, 2.5);
    // labels
    if (p2 < .5) {
      hbar(ox, ox + A, oy - 12, C.cyan); lab("a", ox + A / 2, oy - 18, C.cyan, fs);
      vbar(ox - 12, oy, oy + A, C.cyan); lab("a", ox - 20, oy + A / 2 + 5, C.cyan, fs, "right");
      hbar(ox + R, ox + A, oy + A + 12, C.pink); lab("b", ox + R + B / 2, oy + A + 28, C.pink, fs);
      if (p1 < .5) lab("a²", ox + R / 2, oy + R / 2 + fs * .35, C.cyan, fs + 2);
      else { lab("a(a − b)", ox + A / 2, oy + R / 2 + 5, C.muted, 13); if (B > 20) lab("b(a − b)", ox + R / 2, oy + R + B / 2 + 5, C.muted, 13); }
    } else {
      hbar(ox, ox + A, oy - 12, C.cyan); lab("a", ox + A / 2, oy - 18, C.cyan, fs);
      hbar(ox + A, ox + A + B, oy - 12, C.pink); lab("b", ox + A + B / 2, oy - 18, C.pink, fs);
      hbar(ox, ox + A + B, oy + R + 14, C.amber); lab("a + b", ox + (A + B) / 2, oy + R + 32, C.amber, fs);
      vbar(ox - 12, oy, oy + R, C.amber); lab("a − b", ox - 20, oy + R / 2 + 5, C.amber, fs, "right");
    }
  }
  function drawSq(w, h, p1, p2, plus){
    const top = 70, avail = h - top - 96, S = plus ? a + b : a, s = Math.min((w - 90) / S, avail / S);
    const A = a * s, B = b * s, R = (a - b) * s, ox = (w - S * s) / 2 + 12, oy = top + (avail - S * s) / 2, fs = Math.max(12, Math.min(18, s * .9));
    if (plus) {
      const gp = 10 * ease(p2), al = p1;
      const piece = (x, y, ww, hh, col, txt, dx, dy) => { d.rect(x + dx * gp, y + dy * gp, ww, hh, k.alpha(col, .1 + .12 * al), k.alpha(col, .35 + .6 * al), 1.5); if (al > .3 && ww > 16 && hh > 16) lab(txt, x + dx * gp + ww / 2, y + dy * gp + hh / 2 + 5, k.alpha(col, al), Math.min(fs, ww / 2.4 + 6)); };
      piece(ox, oy, A, A, C.cyan, "a²", -.5, -.5);
      piece(ox + A, oy, B, A, C.text, "ab", .5, -.5);
      piece(ox, oy + A, A, B, C.text, "ab", -.5, .5);
      piece(ox + A, oy + A, B, B, C.pink, "b²", .5, .5);
      if (p1 < .5) d.rect(ox, oy, A + B, A + B, null, C.amber, 2.5);
      hbar(ox, ox + A, oy - 14, C.cyan); lab("a", ox + A / 2, oy - 20, C.cyan, fs); hbar(ox + A, ox + A + B, oy - 14, C.pink); lab("b", ox + A + B / 2, oy - 20, C.pink, fs);
      vbar(ox - 14, oy, oy + A, C.cyan); lab("a", ox - 22, oy + A / 2 + 5, C.cyan, fs, "right"); vbar(ox - 14, oy + A, oy + A + B, C.pink); lab("b", ox - 22, oy + A + B / 2 + 5, C.pink, fs, "right");
      if (p1 < .5) lab("(a + b)²", ox + (A + B) / 2, oy + (A + B) / 2 + 6, C.amber, fs + 2);
    } else {
      // (a − b)²: remove two a×b strips, add the corner back
      d.rect(ox, oy, A, A, k.alpha(C.cyan, .08), C.cyan, 1.5);
      const al = p1;
      if (al > 0) { d.rect(ox + R, oy, B, A, k.alpha(C.pink, .22 * al)); d.rect(ox, oy + R, A, B, k.alpha(C.pink, .22 * al)); }
      const e = ease(p2);
      if (e > 0) { d.rect(ox + R, oy + R, B, B, k.alpha(C.ink, .9 * e)); g.save(); g.setLineDash([5, 4]); g.strokeStyle = C.pink; g.lineWidth = 1.5; g.strokeRect(ox + R + .5, oy + R + .5, B - 1, B - 1); g.restore(); }
      d.rect(ox, oy, R, R, k.alpha(C.amber, .06 + .16 * e), e > .5 ? C.amber : null, 2.5);
      if (al > .3) { if (B > 26 && R > 40) { lab("− ab", ox + R + B / 2, oy + R / 2 + 5, C.pink, Math.min(15, B / 2 + 4)); lab("− ab", ox + R / 2, oy + R + B / 2 + 5, C.pink, Math.min(15, B / 2 + 4)); }
        if (B > 22) lab(e > .5 ? "+ b²" : "−2×", ox + R + B / 2, oy + R + B / 2 + 5, e > .5 ? C.pink : C.muted, Math.min(14, B / 2 + 3)); }
      if (R > 30) lab(al < .5 ? "a²" : "(a − b)²", ox + R / 2, oy + R / 2 + 6, al < .5 ? C.cyan : C.amber, fs + 1);
      hbar(ox, ox + R, oy - 14, C.amber); lab("a − b", ox + R / 2, oy - 20, C.amber, fs); hbar(ox + R, ox + A, oy - 14, C.pink); lab("b", ox + R + B / 2, oy - 20, C.pink, fs);
      vbar(ox - 14, oy, oy + A, C.cyan); lab("a", ox - 22, oy + A / 2 + 5, C.cyan, fs, "right");
    }
  }
  function drawCube(w, h, p1, p2){
    const top = 64, avail = h - top - 100, s = Math.min((w - 60) / (1.732 * (a + 1.4)), avail / (2.55 * a + .8));
    const cx = w / 2, cy = top + (1.55 * a + .4) * s;
    const iso = (x, y, z) => [cx + (x - y) * .866 * s, cy + (x + y) * .5 * s - z * s];
    const poly = (pts, fill, stroke, dash) => { g.beginPath(); pts.forEach((p, i) => { const q = iso(p[0], p[1], p[2]); i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]); }); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } g.save(); if (dash) g.setLineDash(dash); g.strokeStyle = stroke; g.lineWidth = 1.2; g.stroke(); g.restore(); };
    const box = (x0, y0, z0, dx, dy, dz, col, ghost) => { const x1 = x0 + dx, y1 = y0 + dy, z1 = z0 + dz;
      const f = t => (ghost ? null : mix(col, C.ink, t)), st2 = ghost ? k.alpha(col, .8) : mix(col, "#ffffff", .15), dsh = ghost ? [4, 4] : null;
      poly([[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], f(.72), st2, dsh);
      poly([[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]], f(.58), st2, dsh);
      poly([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], f(.4), st2, dsh); };
    const m = a - b, ex = .9 * ease(p2), lift = 1.1 * a * ease(p1);
    const col1 = C.cyan, col2 = mix(C.cyan, C.violet, .45), col3 = C.violet;
    box(-ex, 0, 0, m, a, a, p2 > 0 ? col1 : C.cyan);
    box(m, 0, 0, b, m, a, p2 > 0 ? col2 : C.cyan);
    box(m, m + ex, 0, b, b, m, p2 > 0 ? col3 : C.cyan);
    box(m, m, m + lift, b, b, b, C.pink, p1 > .5);
    if (p2 > .5) {
      const lb = (x, y, z, s1) => { const q = iso(x, y, z); T.tag(d, s1, q[0], q[1] + 5, { size: 13, color: C.text, align: "center" }); };
      lb(-ex + m / 2, a / 2, a, `(a − b)·a·a`);
      lb(a, m / 2, a * .55, `(a − b)·a·b`);
      lb(a - b / 2 + .2, m + ex + b, m * .5, `(a − b)·b·b`);
    }
    if (p1 > .5) { const q = iso(a, a, m + lift + b); lab("b³ removed", q[0] + 12, q[1] - 6, C.pink, 13, "left"); }
    // edge labels
    const e1 = iso(-ex, a, 0), e2 = iso(a, a + (p2 > 0 ? ex : 0), 0);
    lab("a", (iso(-ex, 0, 0)[0] + e1[0]) / 2 - 12, (iso(-ex, 0, 0)[1] + e1[1]) / 2 + 12, C.cyan, 15);
    void e2;
  }

  k.loop(dt => {
    tA = k.reduce ? st.k : toward(tA, st.k, dt * 1.4);
    c.begin(); const { w, h } = c;
    const p1 = clamp(tA, 0, 1), p2 = clamp(tA - 1, 0, 1), K = st.k, done = K >= 2;
    if (mode === "diff") drawDiff(w, h, p1, p2); else if (mode === "cube") drawCube(w, h, p1, p2); else drawSq(w, h, p1, p2, mode === "plus");
    // bottom equation with numbers
    const A2 = a * a, B2 = b * b, A3 = a * a * a, B3 = b * b * b;
    let eq = "", eq2 = "";
    if (mode === "diff") { eq = `a² − b² = ${A2} − ${B2} = ${A2 - B2}`; eq2 = K >= 2 ? `(a + b)(a − b) = ${a + b} × ${a - b} = ${(a + b) * (a - b)}` : K >= 1 ? "cut the L into two strips…" : "take the b × b corner away"; }
    else if (mode === "plus") { eq = `(a + b)² = ${a + b}² = ${(a + b) ** 2}`; eq2 = K >= 1 ? `a² + 2ab + b² = ${A2} + ${2 * a * b} + ${B2} = ${A2 + 2 * a * b + B2}` : "split each side into a and b"; }
    else if (mode === "minus") { eq = `(a − b)² = ${a - b}² = ${(a - b) ** 2}`; eq2 = K >= 2 ? `a² − 2ab + b² = ${A2} − ${2 * a * b} + ${B2} = ${A2 - 2 * a * b + B2}` : K >= 1 ? "two strips removed: the corner went twice" : "start from the a × a square"; }
    else { eq = `a³ − b³ = ${A3} − ${B3} = ${A3 - B3}`; eq2 = K >= 2 ? `(a − b)(a² + ab + b²) = ${a - b} × ${A2 + a * b + B2} = ${(a - b) * (A2 + a * b + B2)}` : K >= 1 ? "what is left splits into three slabs…" : "an a-cube with a b-cube in its corner"; }
    const fsz = w < 460 ? 15 : 19;
    T.mt(d, eq, w / 2, h - 44, { size: fsz, color: C.text, align: "center" });
    if (/^[a-z]/.test(eq2) && !/^[a-z][²³ ]/.test(eq2)) d.text(eq2, w / 2, h - 18, { font: `13px ${F.sans}`, color: C.muted, align: "center" });
    else T.mt(d, eq2, w / 2, h - 18, { size: fsz - 2, color: done ? C.amber : C.muted, align: "center" });
    // readout
    const ca = t => `<span class="c2">${t}</span>`, cb = t => `<span class="c3">${t}</span>`, aI = ca("<i>a</i>"), bI = cb("<i>b</i>");
    let title, big, rows, lm, note;
    if (mode === "diff") {
      title = "Difference of squares"; big = `${aI}<sup>2</sup> − ${bI}<sup>2</sup> = <span class="c1">(${aI} + ${bI})(${aI} − ${bI})</span>`;
      rows = `<div class="row">${M(`${ca(a)}<sup>2</sup> − ${cb(b)}<sup>2</sup> = ${A2} − ${B2}`)} = <span class="v c1">${A2 - B2}</span><span class="lbl">the L-shaped area left after cutting out the corner</span></div>
        <div class="row">${M(`(${ca(a)} + ${cb(b)})(${ca(a)} − ${cb(b)}) = ${a + b} · ${a - b}`)} = <span class="v c1">${(a + b) * (a - b)}</span><span class="lbl">the same area, rearranged into one rectangle</span></div>
        <div class="row">${M(`${X_}<sup>2</sup> − ${B2} = (${X_} + ${b})(${X_} − ${b})`)}<span class="lbl">with a = x: the pattern to spot in algebra (no middle term, both squares, a minus sign)</span></div>`;
      lm = done ? M(`${A2} − ${B2} = ${a + b} × ${a - b}`) : "Cut, then swing"; note = done ? "The strip b × (a − b) turns 90° and joins the top strip: one rectangle, a + b long and a − b tall. Note a² + b² has no such factoring over the reals." : "Removing the b × b corner leaves an L. Step on to rearrange it.";
    } else if (mode === "plus" || mode === "minus") {
      const pl = mode === "plus", sgn = pl ? "+" : "−";
      title = pl ? "Square of a sum" : "Square of a difference"; big = `<span class="c1">(${aI} ${sgn} ${bI})<sup>2</sup></span> = ${aI}<sup>2</sup> ${sgn} 2${aI}${bI} + ${bI}<sup>2</sup>`;
      const v = pl ? (a + b) ** 2 : (a - b) ** 2;
      rows = `<div class="row">${M(`(${ca(a)} ${sgn} ${cb(b)})<sup>2</sup>`)} = <span class="v c1">${v}</span><span class="lbl">the ${pl ? "whole" : "amber"} square</span></div>
        <div class="row">${M(`${ca(A2)} ${sgn} 2·${ca(a)}·${cb(b)} + ${cb(B2)}`)} = <span class="v c1">${A2 + (pl ? 1 : -1) * 2 * a * b + B2}</span><span class="lbl">${pl ? "one a², two a×b rectangles, one b²" : "a², minus two a×b strips, plus the corner counted twice"}</span></div>
        <div class="row">${M(`(${ca(a)} ${sgn} ${cb(b)})<sup>2</sup> ≠ ${ca(a)}<sup>2</sup> ${sgn} ${cb(b)}<sup>2</sup>`)}<span class="lbl">off by ${2 * a * b}: the middle term 2ab is the part people forget</span></div>
        <div class="row">${M(`${X_}<sup>2</sup> ${sgn} ${2 * b}${X_} + ${B2} = (${X_} ${sgn} ${b})<sup>2</sup>`)}<span class="lbl">perfect-square trinomial: first and last terms squares, middle = 2 × their roots</span></div>`;
      lm = done ? M(`${A2} ${sgn} ${2 * a * b} + ${B2} = ${v}`) : pl ? "Four pieces" : "Remove two strips";
      note = pl ? (K >= 1 ? "The big square splits into a², b² and two identical a × b rectangles: that's where 2ab comes from." : "Step on to cut the square along a and b.") : (done ? "Taking away two a × b strips removes the corner b² twice, so it has to be added back once." : "Each strip is a × b. They overlap in the b × b corner.");
    } else {
      title = "Difference and sum of cubes"; big = `${aI}<sup>3</sup> − ${bI}<sup>3</sup> = <span class="c1">(${aI} − ${bI})(${aI}<sup>2</sup> + ${aI}${bI} + ${bI}<sup>2</sup>)</span>`;
      rows = `<div class="row">${M(`${ca(a)}<sup>3</sup> − ${cb(b)}<sup>3</sup> = ${A3} − ${B3}`)} = <span class="v c1">${A3 - B3}</span><span class="lbl">volume left when the small cube is removed</span></div>
        <div class="row">${M(`(${a - b})(${A2} + ${a * b} + ${B2})`)} = <span class="v c1">${(a - b) * (A2 + a * b + B2)}</span><span class="lbl">three slabs, each a − b thick: a·a, a·b and b·b faces</span></div>
        <div class="row">${M(`${ca(a)}<sup>3</sup> + ${cb(b)}<sup>3</sup> = (${a + b})(${A2} − ${a * b} + ${B2})`)} = <span class="v c1">${A3 + B3}</span><span class="lbl">sum of cubes: same shape, signs Same, Opposite, Always Positive</span></div>
        <div class="row">${M(`${X_}<sup>3</sup> − ${B3} = (${X_} − ${b})(${X_}<sup>2</sup> + ${b}${X_} + ${B2})`)}<span class="lbl">the quadratic factor never factors further over the reals</span></div>`;
      lm = done ? M(`${A3 - B3} = ${a - b} × ${A2 + a * b + B2}`) : "Remove, then slice"; note = done ? "The (a − b)-thick slabs have faces a × a, a × b and b × b, so their volumes add to (a − b)(a² + ab + b²)." : "Lift out the b-cube, then split what remains into slabs.";
    }
    k.setRO(`${RO0}<div><h2>${title}</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${big}</div></div>
      <div class="ro-rows">${rows}</div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Press Play, then change a and b: the picture and both sides of the identity move together.</p>`);
  });
};

/* =====================================================================
   a1-quad-factor: y = a(x − r)(x − s), zero-product property
   ===================================================================== */
L["a1-quad-factor"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = MT(k);
  let r = -2, s = 3, a = 1, xp = 0.5, show = true, P = null, drag = null, y0 = -8, y1 = 8;
  const fm = v => k.fmt(v, 2);
  const sr = k.slider(`<span class="c2"><i>r</i></span>`, -6, 6, 0.5, r, v => r = v, fm);
  const ss = k.slider(`<span class="c3"><i>s</i></span>`, -6, 6, 0.5, s, v => s = v, fm);
  k.slider("<i>a</i>", -3, 3, 0.5, a, v => a = v, fm);
  k.check("factor lines", show, v => show = v);
  k.button("Double root", () => { s = r; ss.set(s); }, "btn-s");
  k.button("Probe at r", () => { xp = r; }, "btn-s");
  k.hint("Drag a root along the axis, or drag anywhere to probe");
  const snap = v => clamp(Math.round(v * 2) / 2, -6, 6);
  c.cv.addEventListener("pointerdown", e => { if (!P) return; const p = c.xy(e); const dr = Math.hypot(p.x - P.X(r), p.y - P.Y(0)), ds = Math.hypot(p.x - P.X(s), p.y - P.Y(0));
    drag = Math.min(dr, ds) < 16 ? (dr <= ds ? "r" : "s") : "p"; c.cv.setPointerCapture(e.pointerId); move(e); });
  const move = e => { if (!drag || !P) return; const q = P.inv(c.xy(e).x, 0); if (drag === "r") { r = snap(q.x); sr.set(r); } else if (drag === "s") { s = snap(q.x); ss.set(s); } else xp = clamp(Math.round(q.x * 10) / 10, P.xmin, P.xmax); };
  c.cv.addEventListener("pointermove", move);
  c.cv.addEventListener("pointerup", () => drag = null);
  c.cv.style.cursor = "crosshair";
  const numD = v => k.fmt(v || 0, 4);
  // decimal coefficients (high → low) as HTML
  const polyD = cs => { let out = ""; cs.forEach(([cf, v]) => { if (Math.abs(cf) < 1e-12) return; const neg = cf < 0, m = Math.abs(cf), one = Math.abs(m - 1) < 1e-12 && v; out += out ? (neg ? " − " : " + ") : (neg ? MI : ""); out += (one ? "" : numD(m)) + v; }); return out || "0"; };
  const aPre = () => (a === 1 ? "" : a === -1 ? MI : numD(a));
  const fac = (q, cl) => `<span class="${cl}">${q === 0 ? X_ : `(${X_} ${q > 0 ? "−" : "+"} ${numD(Math.abs(q))})`}</span>`;
  k.loop(dt => {
    const f = x => a * (x - r) * (x - s), vx = (r + s) / 2, vy = f(vx);
    const lo = Math.min(vy, 0), hi = Math.max(vy, 0), span = Math.max(8, (hi - lo) * 1.7);
    let t0, t1; if (a >= 0) { t0 = lo - span * .2; t1 = t0 + span; } else { t1 = hi + span * .2; t0 = t1 - span; }
    const kf = k.reduce ? 1 : Math.min(1, dt * 6); y0 = lerp(y0, t0, kf); y1 = lerp(y1, t1, kf);
    c.begin(); const { w } = c;
    P = k.plot(c, { xmin: -8, xmax: 8, ymin: y0, ymax: y1, pad: { l: 42, r: 14, t: 16, b: 28 }, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    if (show) { P.fn(x => x - r, k.alpha(C.cyan, .8), 1.6, P.xmin, P.xmax, [6, 5]); P.fn(x => x - s, k.alpha(C.pink, .8), 1.6, P.xmin, P.xmax, [6, 5]); }
    P.fn(f, C.text, 3);
    // probe
    const f1 = xp - r, f2 = xp - s, pv = f(xp) || 0;
    P.line(xp, P.ymin, xp, P.ymax, k.alpha(C.text, .3), 1, [3, 3]);
    const inY = y => y >= P.ymin && y <= P.ymax;
    if (show) { if (inY(f1)) P.point(xp, f1, C.cyan, 4.5); if (inY(f2)) P.point(xp, f2, C.pink, 4.5); }
    if (pv >= P.ymin && pv <= P.ymax) P.point(xp, pv, C.text, 5.5, true);
    // roots
    const same = r === s;
    [[r, "r"], [s, "s"]].forEach(([q, nm], i) => { if (same && i) return; P.point(q, 0, C.amber, 7); d.text(`${nm}${same ? " = s" : ""}`, P.X(q), P.Y(0) + (i ? 22 : -12), { font: `italic 600 14px ${F.math}`, color: C.amber, align: "center" }); });
    const zero = Math.abs(pv) < 1e-9 && a !== 0;
    const tx = `(x − r) = ${k.fmt(f1, 2)},  (x − s) = ${k.fmt(f2, 2)}`;
    T.tag(d, `x = ${k.fmt(xp, 1)}:  y = ${k.fmt(a, 2)}·(${k.fmt(f1, 2)})·(${k.fmt(f2, 2)}) = ${k.fmt(pv, 3)}`, P.left + 8, P.top + 18, { size: w < 460 ? 13 : 15, color: zero ? C.amber : C.text });
    if (w > 420) T.tag(d, tx, P.left + 8, P.top + 40, { size: 13, color: C.muted });
    const B = -a * (r + s), Cc = a * r * s;
    const rs = same ? `${X_} = <span class="c1">${numD(r)}</span> (double)` : `${X_} = <span class="c1">${numD(Math.min(r, s))}</span> or ${X_} = <span class="c1">${numD(Math.max(r, s))}</span>`;
    let lm, note, hit = true;
    if (a === 0) { lm = M("<i>a</i> = 0 ⟹ <i>y</i> = 0"); note = "With a = 0 every x gives 0: not a quadratic any more, and every x is a root. Move a off zero."; }
    else if (same) { lm = M(`<i>y</i> = ${aPre()}${fac(r, "c2")}<sup>2</sup>`); note = "A double root: both factors vanish at the same x, so the parabola only touches the x-axis, at its vertex."; }
    else if (zero) { lm = M(`${Math.abs(f1) < 1e-9 ? fac(r, "c2") : fac(s, "c3")} = 0`); note = `Zero-product property: at x = ${numD(xp)} one factor is 0, so the whole product is 0, whatever the other factor is.`; }
    else { hit = false; lm = M(`${fac(r, "c2")}${fac(s, "c3")} = 0`); note = `So x = ${numD(r)} or x = ${numD(s)}: a product is 0 only when a factor is 0. Between the roots the factors have opposite signs, so the sign of y flips.`; }
    k.setRO(`${RO0}<div><h2>Solutions of y = 0</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${a === 0 ? "every <i>x</i>" : rs}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`<i>y</i> = ${aPre()}${fac(r, "c2")}${fac(s, "c3")}`)}<span class="lbl">factored form: roots can be read straight off</span></div>
        <div class="row">${M(`<i>y</i> = ${polyD([[a, `${X_}<sup>2</sup>`], [B, X_], [Cc, ""]])}`)}<span class="lbl">standard form: multiply out the factors</span></div>
        <div class="row">${M(`<i>r</i> + <i>s</i> = ${numD(r + s)}, <i>rs</i> = ${numD(r * s)}`)}<span class="lbl">${a !== 0 ? `sum = −b/a and product = c/a, so a monic x² + bx + c factors when two numbers multiply to c and add to −b` : "sum and product of the roots"}</span></div>
        <div class="row">${M(`<i>y</i>(${numD(xp)})`)} = <span class="v">${k.fmt(pv, 4)}</span><span class="lbl">probe: ${numD(a)} × (${k.fmt(f1, 2)}) × (${k.fmt(f2, 2)})</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Drag a root onto the other for a double root, or flip the sign of a.</p>`);
  });
};

/* =====================================================================
   a1-sequences: arithmetic vs geometric, bars and partial sums
   ===================================================================== */
L["a1-sequences"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = MT(k);
  let mode = "arith", a1 = 3, dd = 2, r = 1.5, n = 6, lo = 0, hi = 25;
  k.modes([["arith", "Arithmetic"], ["geom", "Geometric"]], mode, v => { mode = v; vis(); });
  k.slider(`<span class="c2"><i>a</i>₁</span>`, -10, 10, 1, a1, v => a1 = v);
  const sd = k.slider(`<span class="c3"><i>d</i></span>`, -5, 5, 1, dd, v => dd = v);
  const sr = k.slider(`<span class="c3"><i>r</i></span>`, -2, 2.5, 0.25, r, v => r = v, v => k.fmt(v, 2));
  k.slider(`<span class="c1"><i>n</i></span>`, 1, 10, 1, n, v => n = v);
  const vis = () => { sd.el.parentElement.style.display = mode === "arith" ? "" : "none"; sr.el.parentElement.style.display = mode === "geom" ? "" : "none"; };
  vis();
  const f4 = v => k.fmt(v, 4), inex = v => Math.abs(v * 1e4 - Math.round(v * 1e4)) > 1e-6, EQ = v => (inex(v) ? "≈" : "=");
  k.loop(dt => {
    const ar = mode === "arith";
    const term = i => (ar ? a1 + (i - 1) * dd : a1 * Math.pow(r, i - 1));
    const Tm = []; for (let i = 1; i <= 10; i++) Tm.push(term(i));
    const tlo = Math.min(0, ...Tm), thi = Math.max(0, ...Tm), sp = thi - tlo || 1;
    const kf = k.reduce ? 1 : Math.min(1, dt * 7); lo = lerp(lo, tlo - (tlo < 0 ? sp * .06 : 0), kf); hi = lerp(hi, thi + (thi > 0 || tlo === 0 ? sp * .06 : 0) + (sp === 1 && thi === 0 && tlo === 0 ? 1 : 0), kf);
    c.begin(); const { w, h } = c;
    const pl = 16, pr = 16, pt = 92, pb = 40, W = w - pl - pr, H = h - pt - pb;
    const Y = v => pt + (hi - v) / (hi - lo || 1) * H, slot = W / 10, bw = slot * .62;
    const Sn = Tm.slice(0, n).reduce((p, q) => p + q, 0);
    // header
    T.mt(d, `S${String(n).split("").map(ch => "₀₁₂₃₄₅₆₇₈₉"[+ch]).join("")} ${EQ(Sn)} ${f4(Sn)}`, w - 16, 30, { size: 18, color: C.text, align: "right" });
    d.text(ar ? "ARITHMETIC · ADD d EACH STEP" : "GEOMETRIC · MULTIPLY BY r EACH STEP", w - 16, 50, { font: `600 11px ${F.ui}`, color: C.pink, align: "right" });
    // zero line
    d.line(pl, Y(0), pl + W, Y(0), C.muted, 1.5);
    // trend through the bar tops
    const g = c.g; g.save(); g.strokeStyle = k.alpha(C.violet, .7); g.lineWidth = 1.5; g.setLineDash([5, 5]); g.beginPath();
    if (ar || r > 0) { for (let i = 0; i <= 90; i++) { const x = 1 + i / 10, v = ar ? a1 + (x - 1) * dd : a1 * Math.pow(r, x - 1), px = pl + (x - .5) * slot, py = Y(v); i ? g.lineTo(px, py) : g.moveTo(px, py); } g.stroke(); }
    g.restore();
    const fs = slot < 34 ? 10 : 12;
    Tm.forEach((v, i) => {
      const x = pl + i * slot + (slot - bw) / 2, yv = Y(v), y0 = Y(0), top = Math.min(yv, y0), hh = Math.max(1.5, Math.abs(yv - y0));
      const cur = i + 1 === n, inS = i + 1 <= n;
      d.rect(x, top, bw, hh, cur ? k.alpha(C.amber, .55) : inS ? k.alpha(C.cyan, .26) : k.alpha(C.text, .05), cur ? C.amber : inS ? k.alpha(C.cyan, .8) : C.line2, cur ? 2 : 1);
      const lbl = Math.abs(v) >= 1000 ? k.fmt(v, 0) : Math.abs(v) >= 100 ? k.fmt(v, 1) : k.fmt(v, 2);
      d.text(lbl, x + bw / 2, v >= 0 ? top - 5 : top + hh + 13, { font: `${cur ? "600 " : ""}${fs}px ${F.mono}`, color: cur ? C.amber : C.muted, align: "center" });
      d.text(String(i + 1), x + bw / 2, h - pb + 18, { font: `${cur ? "600 " : ""}12px ${F.mono}`, color: cur ? C.amber : C.faint, align: "center" });
      if (i < 9) d.text(ar ? (dd < 0 ? MI + Math.abs(dd) : "+" + dd) : "×" + k.fmt(r, 2), pl + (i + 1) * slot, 74, { font: `600 ${slot < 34 ? 9 : 11}px ${F.mono}`, color: C.pink, align: "center" });
    });
    d.text("n", pl + W, h - 6, { font: `italic 13px ${F.math}`, color: C.muted, align: "right" });
    // readout
    const an = term(n), cA = t => `<span class="c2">${t}</span>`, cP = t => `<span class="c3">${t}</span>`, sub = t => `<sub>${t}</sub>`;
    const aN = `<i>a</i>${sub("<i>n</i>")}`, aNum = `<i>a</i>${sub(n)}`, a1H = cA(`<i>a</i>${sub(1)}`);
    const list = Tm.slice(0, 5).map(v => f4(v)).join(", ") + ", …";
    let rows, lm, note, hit = false;
    if (ar) {
      rows = `<div class="row">${M(`${aNum} = ${cA(a1)} + (${n} − 1)·${cP(dd < 0 ? `(${sg(dd)})` : dd)}`)} = <span class="v c1">${sg(an)}</span><span class="lbl">explicit: ${aN} = a₁ + (n − 1)d</span></div>
        <div class="row">${M(`${aN} = <i>a</i>${sub("<i>n</i>−1")} + ${cP("<i>d</i>")}`)}<span class="lbl">recursive: each term is the previous one plus d</span></div>
        <div class="row">${M(`<i>S</i>${sub(n)} = ${FR(`${n}(${cA(a1)} + <span class="c1">${sg(an)}</span>)`, 2)}`)} = <span class="v">${sg(Sn)}</span><span class="lbl">pair first with last: n terms average (a₁ + aₙ)/2</span></div>
        <div class="row"><span class="m">terms</span> <span class="v">${list}</span></div>`;
      if (dd === 0) { hit = true; lm = M(`<i>d</i> = 0: every term is ${sg(a1)}`); note = "A constant sequence. It is also geometric, with r = 1."; }
      else { lm = M(`${aN} = ${cP(dd)}<i>n</i> ${a1 - dd < 0 ? "−" : "+"} ${Math.abs(a1 - dd)}`); note = `A linear function of n with slope d = ${sg(dd)}: the bar tops lie on a straight line.`; }
    } else {
      const rT = k.fmt(r, 2), SnF = r === 1 ? `<i>n</i>·${cA("<i>a</i>₁")}` : FR(`${cA(a1)}(1 − ${cP(r < 0 ? `(${rT})` : rT)}<sup>${n}</sup>)`, `1 − ${cP(r < 0 ? `(${rT})` : rT)}`);
      rows = `<div class="row">${M(`${aNum} = ${cA(a1)} · ${cP(r < 0 ? `(${rT})` : rT)}<sup>${n - 1}</sup>`)} ${EQ(an)} <span class="v c1">${f4(an)}</span><span class="lbl">explicit: ${aN} = a₁ · r<sup>n−1</sup></span></div>
        <div class="row">${M(`${aN} = <i>a</i>${sub("<i>n</i>−1")} · ${cP("<i>r</i>")}`)}<span class="lbl">recursive: each term is the previous one times r</span></div>
        <div class="row">${M(`<i>S</i>${sub(n)} = ${SnF}`)} ${EQ(Sn)} <span class="v">${f4(Sn)}</span><span class="lbl">${r === 1 ? "r = 1: n copies of a₁" : "partial sum: Sₙ − rSₙ telescopes to a₁ − a₁rⁿ"}</span></div>
        ${Math.abs(r) < 1 && r !== 0 ? `<div class="row">${M(`<i>S</i><sub>∞</sub> = ${FR(cA(a1), `1 − ${cP(rT)}`)}`)} ${EQ(a1 / (1 - r))} <span class="v">${f4(a1 / (1 - r))}</span><span class="lbl">|r| &lt; 1: the terms shrink and the partial sums settle</span></div>` : ""}
        <div class="row"><span class="m">terms</span> <span class="v">${list}</span></div>`;
      if (a1 === 0) { hit = true; lm = "every term is 0"; note = "With a₁ = 0 multiplying changes nothing. Pick a nonzero first term."; }
      else if (r === 0) { hit = true; lm = M(`${cP("<i>r</i>")} = 0`); note = "After the first term everything is 0. Geometric sequences normally require r ≠ 0."; }
      else if (r === 1) { hit = true; lm = M(`${cP("<i>r</i>")} = 1: constant`); note = "Multiplying by 1 changes nothing, so the sum formula a₁(1 − rⁿ)/(1 − r) would divide by zero; use Sₙ = n·a₁."; }
      else if (r < 0) { hit = true; lm = M(`${cP("<i>r</i>")} &lt; 0: signs alternate`); note = "A negative ratio flips the sign at every step, so the bars zig-zag across 0."; }
      else if (r < 1) { hit = true; lm = M(`0 &lt; ${cP("<i>r</i>")} &lt; 1: decay`); note = `Each term is ${k.fmt(r * 100, 0)}% of the one before, and the whole infinite sum is finite: ${f4(a1 / (1 - r))}.`; }
      else { lm = M(`${aN} = ${FR(cA(a1), cP(rT))} · ${cP(rT)}<sup><i>n</i></sup>`); note = "An exponential function of n: equal steps in n multiply the term by r, so the bars curve upward."; }
    }
    k.setRO(`${RO0}<div><h2>${ar ? "Arithmetic" : "Geometric"} sequence</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${aNum}</span> ${ar ? "=" : EQ(an)} <span class="num c1">${ar ? sg(an) : f4(an)}</span></div></div>
      <div class="ro-rows">${rows}</div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">The cyan bars are the ones added into S${sub(n)}. Switch modes with the same a₁ to compare adding and multiplying.</p>`);
  });
};

/* =====================================================================
   a1-sys-apps: word problems → 2×2 system → graph
   ===================================================================== */
L["a1-sys-apps"] = k => {
  const { C, M } = k; const dom = k.dom();
  // each preset: slider spec and a builder returning the system a1 u + b1 v = c1, a2 u + b2 v = c2
  const PRE = {
    tickets: { name: "Tickets", sl: ["total sales $", 1000, 1600, 3, 1360], u: "a", v: "s", build: R => ({
      text: `A school play sold <b>200 tickets</b>. Adult tickets cost <b>$8</b> and student tickets <b>$5</b>. Sales came to <b>$${R}</b>. How many of each were sold?`,
      du: "adult tickets", dv: "student tickets", e1: [1, 1, 200], e2: [8, 5, R], w1: "tickets: a + s = 200", w2: "dollars: 8a + 5s = total",
      win: [0, 220, 0, 320], ans: (u, v) => `${u} adult and ${v} student tickets` }) },
    mix: { name: "Mixture", sl: ["target strength %", 20, 50, 1, 40], u: "x", v: "y", build: p => ({
      text: `A chemist mixes a <b>20%</b> acid solution with a <b>50%</b> acid solution to make <b>30 L</b> of a <b>${p}%</b> solution. How many litres of each?`,
      du: "litres of 20%", dv: "litres of 50%", e1: [1, 1, 30], e2: [20, 50, 30 * p], w1: "litres: x + y = 30", w2: "acid: 0.20x + 0.50y = " + (p / 100).toFixed(2) + "·30, times 100",
      win: [0, 34, 0, 34], ans: (u, v) => `${u} L of 20% and ${v} L of 50%` }) },
    boat: { name: "Boat & current", sl: ["distance (mi)", 12, 60, 6, 36], u: "b", v: "c", build: D => ({
      text: `A boat travels <b>${D} miles</b> downstream in <b>2 hours</b> and the same distance back upstream in <b>3 hours</b>. Find the boat's speed in still water and the speed of the current.`,
      du: "boat speed (mph)", dv: "current (mph)", e1: [2, 2, D], e2: [3, -3, D], w1: "downstream: 2(b + c) = " + D, w2: "upstream: 3(b − c) = " + D,
      win: [0, Math.max(10, D / 2 * 1.25), -D / 10, D / 4 + 2], ans: (u, v) => `boat ${u} mph, current ${v} mph` }) },
    even: { name: "Break-even", sl: ["setup cost $", 300, 1200, 60, 600], u: "x", v: "y", build: F => ({
      text: `A food truck pays <b>$${F}</b> to set up for a festival plus <b>$4</b> per meal in ingredients. It sells meals for <b>$10</b>. How many meals must it sell to break even, and what is the revenue then?`,
      du: "meals sold", dv: "dollars", e1: [-4, 1, F], e2: [-10, 1, 0], w1: "cost: y = " + F + " + 4x", w2: "revenue: y = 10x",
      win: [0, F / 6 * 2, 0, F / 6 * 20], ans: (u, v) => `${u} meals, $${v} of revenue (= cost)` }) }
  };
  let key = "tickets", val = PRE.tickets.sl[4], plan;
  const st = k.stepper(() => 4, render, { ms: 1300 });
  const sel = k.select("Problem", Object.keys(PRE).map(q => [q, PRE[q].name]), key, v => { key = v; const s = PRE[v].sl; sl.el.min = s[1]; sl.el.max = s[2]; sl.el.step = s[3]; sl.set(s[4]); val = s[4]; lblEl.textContent = s[0]; build(); st.reset(); });
  const sl = k.slider(PRE.tickets.sl[0], PRE.tickets.sl[1], PRE.tickets.sl[2], PRE.tickets.sl[3], val, v => { val = v; build(); render(); });
  const lblEl = sl.el.parentElement.querySelector("label"); void sel;
  const eqH = (e, u, v) => { let s = ""; [[e[0], u, "c2"], [e[1], v, "c3"]].forEach(([co, nm, cl]) => { if (co === 0) return; const sgn = co < 0 ? (s ? " − " : MI) : (s ? " + " : ""); s += sgn + `<span class="${cl}">${Math.abs(co) === 1 ? "" : Math.abs(co)}<i>${nm}</i></span>`; }); return s + " = " + sg(e[2]); };
  function build(){
    const p = PRE[key], S = p.build(val), [a1, b1, c1] = S.e1, [a2, b2, c2] = S.e2, det = a1 * b2 - a2 * b1;
    const u = Q(c1 * b2 - c2 * b1, det), v = Q(a1 * c2 - a2 * c1, det);
    plan = { p, S, det, u, v, m1: b2, m2: b1 };
  }
  function render(){
    const K = st.k, { p, S, u, v, det } = plan, U = p.u, V = p.v;
    const rows = [{ tag: "unknowns", html: `<span class="c2"><i>${U}</i></span> = ${S.du}, <span class="c3"><i>${V}</i></span> = ${S.dv}` }];
    if (K >= 1) rows.push({ tag: "equation 1", html: `${eqH(S.e1, U, V)} <span style="font:12px var(--sans);color:var(--faint)">(${S.w1})</span>` });
    if (K >= 2) rows.push({ tag: "equation 2", html: `${eqH(S.e2, U, V)} <span style="font:12px var(--sans);color:var(--faint)">(${S.w2})</span>` });
    if (K >= 3) { const [a1, b1, c1] = S.e1, [a2, b2, c2] = S.e2; rows.push({ tag: "eliminate", html: `${sg(b2)}·(eq 1) − ${b1 < 0 ? `(${sg(b1)})` : b1}·(eq 2): ${sg(det)}<i class="c2">${U}</i> = ${sg(c1 * b2 - c2 * b1)} ⟹ <i class="c2">${U}</i> = ${qH(u, "c1")}, then <i class="c3">${V}</i> = ${qH(v, "c1")}` }); void a2; }
    if (K >= 4) { const ok1 = qadd(qmul(S.e1[0], u), qmul(S.e1[1], v)), ok2 = qadd(qmul(S.e2[0], u), qmul(S.e2[1], v)); rows.push({ tag: "answer", html: `<span class="c1">${S.ans(qT(u), qT(v))}</span> <span style="font:12px var(--sans);color:var(--faint)">check: ${qT(ok1)} = ${S.e1[2]} ✓, ${qT(ok2)} = ${S.e2[2]} ✓</span>` }); }
    const [xmin, xmax, ymin, ymax] = S.win, fns = [];
    const lineOf = (e, color) => { if (e[1] !== 0) fns.push({ f: x => (e[2] - e[0] * x) / e[1], color, w: 2.4 }); };
    if (K >= 1) lineOf(S.e1, C.cyan); if (K >= 2) lineOf(S.e2, C.pink);
    const pts = K >= 3 ? [{ x: qv(u), y: qv(v), color: C.amber, r: 6, label: `(${qT(u)}, ${qT(v)})` }] : [];
    const svg = svgPlot(C, { xmin, xmax, ymin, ymax, fns, pts, xlabel: U, ylabel: V });
    dom.innerHTML = `<p class="a3b-prob">${S.text}</p><div class="a3b-wrap">${stepsH(rows, K)}<div class="a3b-side"><div>${svg}<div class="a3b-cap"><span class="c2">horizontal: ${U}</span> · <span class="c3">vertical: ${V}</span> · the crossing satisfies both conditions</div></div></div></div>`;
    const done = K >= 4, neg = qv(u) < 0 || qv(v) < 0;
    const notes = [
      "Name the two unknowns first. Two unknowns need two independent facts from the story.",
      `Fact 1 as an equation: ${S.w1}. Every point on the cyan line fits this fact.`,
      `Fact 2: ${S.w2}. The pink line holds every pair that fits this one.`,
      `Scale and subtract to cancel ${V}; the lines' crossing point is the only pair that fits both facts.`,
      `Answer in the story's units, then check both original conditions.`][K];
    k.setRO(`${RO0}<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${K >= 3 ? `(<i class="c2">${U}</i>, <i class="c3">${V}</i>) = (${qH(u, "c1")}, ${qH(v, "c1")})` : `(<i class="c2">${U}</i>, <i class="c3">${V}</i>) = (?, ?)`}</div></div>
      <div class="ro-rows"><div class="row">${M(eqH(S.e1, U, V))}<span class="lbl">${S.w1}</span></div>
      <div class="row">${M(eqH(S.e2, U, V))}<span class="lbl">${S.w2}</span></div>
      ${(qq(u).d !== 1 || qq(v).d !== 1) && K >= 3 ? `<div class="row"><span class="m">${qT(u)} ≈ ${k.fmt(qv(u), 3)}, ${qT(v)} ≈ ${k.fmt(qv(v), 3)}</span><span class="lbl">exact fractions; fine for speeds, but a count of tickets would have to be whole</span></div>` : ""}</div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${done ? S.ans(qT(u), qT(v)) : ["Define variables", "Translate fact 1", "Translate fact 2", "Solve the system", "Answer and check"][K]}</div><div class="note">${neg ? "A negative value can't happen in this story: the numbers given are inconsistent. " : ""}${notes}</div></div>
      <p class="narr">Move the slider to change the story's numbers; the lines and the answer follow.</p>`);
  }
  build(); render();
};

/* =====================================================================
   a1-rational-simplify: factor, restrict, cancel (× and ÷ too)
   ===================================================================== */
L["a1-rational-simplify"] = k => {
  const { C, M } = k; const dom = k.dom();
  const F1 = (nk, nr, dr, dk = 1) => ({ nk, nr, dk, dr });
  const PRE = [
    ["(x² − 9) / (x² + 5x + 6)", "simp", [F1(1, [3, -3], [-2, -3])]],
    ["(2x² − 8) / (x² − 4x + 4)", "simp", [F1(2, [2, -2], [2, 2])]],
    ["(x² − x − 6) / (x − 3)", "simp", [F1(1, [3, -2], [3])]],
    ["(x + 4) / (x² + 4x)", "simp", [F1(1, [-4], [0, -4])]],
    ["(3 − x) / (x − 3)", "simp", [F1(-1, [3], [3])]],
    ["× (x² − 1)/(x + 2) · (x + 2)/(x − 1)", "mul", [F1(1, [1, -1], [-2]), F1(1, [-2], [1])]],
    ["× (x² + 3x)/(x² − 4) · (x − 2)/(x + 3)", "mul", [F1(1, [0, -3], [2, -2]), F1(1, [2], [-3])]],
    ["÷ (x² − 4)/(x + 3) ÷ (x − 2)/(x² + 3x)", "div", [F1(1, [2, -2], [-3]), F1(1, [2], [0, -3])]]
  ];
  let cur = PRE[0], plan;
  const st = k.stepper(() => plan.rows.length - 1, render, { ms: 1300 });
  const sel = k.select("Expression", PRE.map((p, i) => [i, p[0]]), 0, v => { cur = PRE[+v]; build(); st.reset(); });
  k.button("Random", () => {
    let c0, p0, q0; do { c0 = ri(-5, 5); p0 = ri(-5, 5); q0 = ri(-5, 5); } while (c0 === p0 || c0 === q0 || p0 === q0);
    const kk = [1, 1, 2, -1, 3][ri(0, 4)], shape = ri(0, 2);
    const fr = shape === 0 ? F1(kk, [c0, p0], [c0, q0]) : shape === 1 ? F1(kk, [c0, p0], [c0]) : F1(kk, [c0], [c0, q0]);
    cur = ["random", "simp", [fr]]; sel.el.value = ""; build(); st.reset(); }, "btn ghost");
  const expH = f => FR(`<span class="c2">${polyH(proots(f.nk, f.nr))}</span>`, polyH(proots(f.dk, f.dr)));
  // factored product with the common factors marked (pool is consumed)
  const facsH = (kc, roots, pool, strike) => {
    if (!roots.length) return sg(kc);
    const parts = roots.map(r => { const i = pool.indexOf(r); const s = facH(r); if (i >= 0) { pool.splice(i, 1); return `<span class="c1${strike ? " a3b-x" : ""}">${s}</span>`; } return s; });
    return (kc === 1 ? "" : kc === -1 ? MI : sg(kc)) + parts.join("");
  };
  const fracFac = (nk, nr, dk, dr, com, strike) => { const p1 = com.slice(), p2 = com.slice(); return FR(`<span class="c2">${facsH(nk, nr, p1, strike)}</span>`, facsH(dk, dr, p2, strike)); };
  function build(){
    const [, op, fr] = cur, A = fr[0], B = fr[1];
    let nr, dr, nk, dk, excl;
    if (op === "simp") { nr = A.nr; dr = A.dr; nk = A.nk; dk = A.dk; excl = A.dr; }
    else if (op === "mul") { nr = A.nr.concat(B.nr); dr = A.dr.concat(B.dr); nk = A.nk * B.nk; dk = A.dk * B.dk; excl = A.dr.concat(B.dr); }
    else { nr = A.nr.concat(B.dr); dr = A.dr.concat(B.nr); nk = A.nk * B.dk; dk = A.dk * B.nk; excl = A.dr.concat(B.dr, B.nr); }
    excl = uniq(excl);
    const com = msetCommon(nr, dr), rn = msetMinus(nr, com), rd = msetMinus(dr, com), K = Q(nk, dk);
    const numH = prodH(K.n, rn), res = rd.length || K.d !== 1 ? FR(`<span class="c1">${numH}</span>`, `<span class="c1">${prodH(K.d, rd)}</span>`) : `<span class="c1">${numH}</span>`;
    const exH = excl.map(v => `<span class="c3">${sg(v)}</span>`).join(", ");
    const rows = [];
    if (op === "simp") rows.push({ tag: "given", html: expH(A) });
    else rows.push({ tag: "given", html: `${expH(A)} ${op === "mul" ? "·" : "÷"} ${expH(B)}` });
    if (op === "div") rows.push({ tag: "flip", html: `${expH(A)} · ${FR(`<span class="c2">${polyH(proots(B.dk, B.dr))}</span>`, polyH(proots(B.nk, B.nr)))}` });
    if (op === "simp") rows.push({ tag: "factor", html: fracFac(nk, nr, dk, dr, com, false) });
    else { const b2 = op === "div" ? F1(B.dk, B.dr, B.nr, B.nk) : B; rows.push({ tag: "factor", html: `${fracFac(A.nk, A.nr, A.dk, A.dr, [], false)} · ${fracFac(b2.nk, b2.nr, b2.dk, b2.dr, [], false)}` });
      rows.push({ tag: "combine", html: fracFac(nk, nr, dk, dr, com, false) }); }
    rows.push({ tag: "restrict", html: `${X_} ≠ ${exH}` + (op === "div" && B.nr.length ? ` <span style="font:12px var(--sans);color:var(--faint)">(includes the divisor's zeros ${B.nr.map(sg).join(", ")})</span>` : "") });
    rows.push({ tag: "cancel", html: com.length ? fracFac(nk, nr, dk, dr, com, true) : `no common factor: ${fracFac(nk, nr, dk, dr, [], false)} is already in lowest terms` });
    rows.push({ tag: "result", html: `${res}, &nbsp;${X_} ≠ ${exH}` });
    plan = { op, nr, dr, nk, dk, excl, com, rn, rd, K, res, exH, rows };
  }
  function render(){
    const K = st.k, p = plan, rows = p.rows.slice(0, K + 1), done = K >= p.rows.length - 1;
    const f = x => qv(p.K) * p.rn.reduce((acc, r) => acc * (x - r), 1) / p.rd.reduce((acc, r) => acc * (x - r), 1);
    const holes = p.excl.filter(v => !p.rd.includes(v)), asy = uniq(p.rd);
    const showR = K >= p.rows.length - 3;
    const svg = svgPlot(C, { xmin: -7, xmax: 7, ymin: -8, ymax: 8, fns: [{ f, color: C.text, w: 2.4, breaks: asy }], vlines: showR ? asy.map(x => ({ x, color: C.pink, w: 1.4 })) : [],
      pts: showR ? holes.map(x => ({ x, y: f(x), color: C.pink, r: 5, open: true, label: `hole x = ${sg(x)}` })) : [], xlabel: "x", ylabel: "y" });
    dom.innerHTML = `<div class="a3b-wrap">${stepsH(rows, K)}<div class="a3b-side"><div>${svg}<div class="a3b-cap">graph of the expression${showR ? ` · <span class="c3">excluded x: holes (open) and asymptotes (dashed)</span>` : ""}</div></div></div></div>`;
    const tag = p.rows[K].tag;
    const constRes = !p.rn.length && !p.rd.length;
    const notes = {
      given: p.op === "simp" ? "A rational expression is a fraction of polynomials. To simplify, factor first; never cancel terms that are added." : p.op === "mul" ? "Multiply fractions as usual: factor everything first so the cancelling is easy to see." : "Dividing by a fraction means multiplying by its reciprocal.",
      flip: "Flip the second fraction. Its numerator is now a denominator, so its zeros become excluded values too.",
      factor: "Factor each numerator and denominator completely (GCF, trinomials, difference of squares).",
      combine: "Write it as one fraction. Factors that appear on both top and bottom are marked in amber.",
      restrict: "Division by zero is undefined: any x that makes an original denominator 0 is excluded, even after cancelling.",
      cancel: p.com.length ? "A common factor over itself is 1 (for x where it isn't 0). Cancel factors, not terms." : "Nothing cancels: no factor is shared.",
      result: constRes ? `The result is a constant ${qT(p.K)}${qq(p.K).n === -1 ? ": (3 − x) and (x − 3) are opposites" : ""}; the graph is a flat line with holes.` : holes.length ? `Same values as the original everywhere except the holes at x = ${holes.map(sg).join(", ")}, where the original was undefined.` : "The simplified form and the original agree for every allowed x."
    };
    k.setRO(`${RO0}<div><h2>Simplified</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${done ? M(p.res) : "…"}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`${X_} ≠ ${p.exH}`)}<span class="lbl">excluded values: zeros of every denominator used along the way</span></div>
        <div class="row">${M(p.com.length ? p.com.map(r => `<span class="c1">${facH(r)}</span>`).join(" ") : "none")}<span class="lbl">common factors (cancel to 1)</span></div>
        ${holes.length ? `<div class="row">${M(holes.map(sg).join(", "))}<span class="lbl">holes: cancelled factors, the function is missing a single point</span></div>` : ""}
        ${asy.length ? `<div class="row">${M(asy.map(v => `${X_} = ${sg(v)}`).join(", "))}<span class="lbl">vertical asymptotes: denominator factors that remain</span></div>` : ""}
      </div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${tag[0].toUpperCase() + tag.slice(1)}</div><div class="note">${notes[tag]}</div></div>
      <p class="narr">Step through, then try a product or a quotient, or press Random.</p>`);
  }
  build(); render();
};

/* =====================================================================
   a1-quad-sqrt: completing the square with tiles
   ===================================================================== */
L["a1-quad-sqrt"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d, g = c.g; const T = MT(k);
  let b = 6, cc = 16, tA = 0;
  const st = k.stepper(() => 5, () => {}, { ms: 1400 });
  k.slider(`<span class="c3"><i>b</i></span>`, 0, 12, 1, b, v => b = v);
  k.slider(`<i>c</i>`, -12, 40, 1, cc, v => cc = v);
  const lab = (s, x, y, col, size, align = "center") => T.mt(d, s, x, y, { size, color: col, align });
  k.loop(dt => {
    tA = k.reduce ? st.k : toward(tA, st.k, dt * 1.4);
    c.begin(); const { w, h } = c;
    const K = st.k, hb = Q(b, 2), hbT = qT(hb), hbX = hb.d === 1 ? hbT + "x" : `(${hbT})x`, sqq = Q(b * b, 4), sqT = qT(sqq), rhs = Q(4 * cc + b * b, 4), DD = 4 * cc + b * b, ex = quadExact(1, b, -cc);
    const pos = DD >= 0 ? (-b + Math.sqrt(DD)) / 2 : -1, scaleOK = pos > .25, xd = scaleOK ? pos : Math.max(2.5, b / 2);
    const p1 = clamp(tA, 0, 1), p2 = ease(clamp(tA - 1, 0, 1)), p3 = clamp(tA - 2, 0, 1);
    const top = 62, avail = h - top - 116, HB = b / 2, s = Math.min((w - 90) / (xd + b), avail / (xd + HB));
    const X = xd * s, Bw = HB * s, fs = w < 460 ? 14 : 16;
    const ox = lerp((w - (xd + b) * s) / 2, (w - (xd + HB) * s) / 2, p2) + 12, oy = top + 12 + (avail - (xd + HB) * s) / 2;
    // x² square
    d.rect(ox, oy, X, X, k.alpha(C.cyan, .18), C.cyan, 1.5);
    lab("x²", ox + X / 2, oy + X / 2 + 6, C.cyan, fs + 2);
    d.line(ox + 2, oy - 12, ox + X - 2, oy - 12, k.alpha(C.cyan, .7)); lab("x", ox + X / 2, oy - 18, C.cyan, fs);
    d.line(ox - 12, oy + 2, ox - 12, oy + X - 2, k.alpha(C.cyan, .7)); lab("x", ox - 20, oy + X / 2 + 5, C.cyan, fs, "right");
    if (b > 0) {
      // strip A (fixed)
      d.rect(ox + X, oy, Bw, X, k.alpha(C.pink, .2), C.pink, 1.5);
      // strip B (moves under the square)
      const cx = lerp(ox + X + Bw * 1.5, ox + X / 2, p2), cy = lerp(oy + X / 2, oy + X + Bw / 2, p2);
      g.save(); g.translate(cx, cy); g.rotate(Math.PI / 2 * p2); d.rect(-Bw / 2, -X / 2, Bw, X, k.alpha(C.pink, .2), C.pink, 1.5); g.restore();
      if (p1 < .5) { d.rect(ox + X + Bw - 1, oy + 1, 2, X - 2, k.alpha(C.pink, .2)); lab(`${b}x`, ox + X + Bw, oy + X / 2 + 5, C.pink, fs); d.line(ox + X + 2, oy - 12, ox + X + 2 * Bw - 2, oy - 12, k.alpha(C.pink, .7)); lab(`b = ${b}`, ox + X + Bw, oy - 18, C.pink, fs); }
      else {
        d.line(ox + X + Bw, oy, ox + X + Bw, oy + X, k.alpha(C.pink, p2 > .05 ? 0 : 1), 1.5, [4, 3]);
        if (Bw > 22) { lab(hbX, ox + X + Bw / 2, oy + X / 2 + 5, C.pink, Math.min(fs, Bw / 2 + 5)); lab(hbX, cx, cy + 5, C.pink, Math.min(fs, Bw / 2 + 5)); }
        lab(hbT, ox + X + Bw / 2, oy - 18, C.pink, fs); if (p2 < .1) lab(hbT, ox + X + Bw * 1.5, oy - 18, C.pink, fs);
      }
      // missing corner
      if (p2 > .98) {
        d.rect(ox + X, oy + X, Bw, Bw, k.alpha(C.amber, .35 * p3)); g.save(); g.setLineDash([5, 4]); g.strokeStyle = C.amber; g.lineWidth = 1.5; g.strokeRect(ox + X + .5, oy + X + .5, Bw - 1, Bw - 1); g.restore();
        lab(p3 > .5 ? sqT : "?", ox + X + Bw / 2, oy + X + Bw / 2 + 5, C.amber, Math.min(fs, Bw / 2 + 6));
        lab(`b/2 = ${hbT}`, ox + X + Bw + 8, oy + X + Bw / 2 + 5, C.pink, fs - 2, "left");
        if (p3 > .98) { d.rect(ox, oy, X + Bw, X + Bw, null, C.amber, 2.5); d.line(ox - 12, oy + X + 2, ox - 12, oy + X + Bw - 2, k.alpha(C.pink, .7)); lab(hbT, ox - 20, oy + X + Bw / 2 + 5, C.pink, fs, "right"); }
      }
    } else lab("b = 0: already a perfect square", w / 2, oy + X + 34, C.muted, 14);
    if (!scaleOK) d.text("x drawn at a sample length: there is no positive solution to measure", w / 2, h - 72, { font: `12px ${F.sans}`, color: C.faint, align: "center" });
    // equations
    const eqs = [
      b ? `x² + ${b}x = ${cc}` : `x² = ${cc}`,
      b ? `x² + ${hbX} + ${hbX} = ${cc}` : `x² = ${cc}`,
      b ? `x² + 2·${hb.d === 1 ? `(${hbX})` : hbX} = ${cc}` : `x² = ${cc}`,
      b ? `(x + ${hbT})² = ${cc} + ${sqT} = ${qT(rhs)}` : `x² = ${cc}`,
      DD < 0 ? `(x + ${hbT})² = ${qT(rhs)} < 0: no real solution` : DD === 0 ? `x + ${hbT} = 0` : `x${b ? ` + ${hbT}` : ""} = ±${sqrtQT(rhs)}`,
      DD < 0 ? "no real solution" : `x = ${ex.text}`];
    const says = ["x² + bx: a square and a b × x strip", "split the strip into two b/2 halves", "move one half below: an L with a missing corner", `complete the square: add (b/2)² = ${sqT} to both sides`, DD < 0 ? "a square can't equal a negative number" : "square root property: take ± roots", DD < 0 ? "the equation has no real solution" : "subtract b/2"];
    T.mt(d, eqs[K], w / 2, h - 44, { size: w < 460 ? 17 : 21, color: K >= 5 ? C.amber : C.text, align: "center" });
    d.text(says[K], w / 2, h - 20, { font: `13px ${F.sans}`, color: C.muted, align: "center" });
    // readout
    const cP = t => `<span class="c3">${t}</span>`, cA = t => `<span class="c1">${t}</span>`;
    const lines = [
      [`${X_}<sup>2</sup> + ${cP(b)}${X_} = ${sg(cc)}`, "start"],
      [`${X_}<sup>2</sup> + ${cP(b)}${X_} + ${cA(qH(sqq))} = ${sg(cc)} + ${cA(qH(sqq))}`, `add (b/2)² = (${hbT})²`],
      [`(${X_} + ${cP(qH(hb))})<sup>2</sup> = ${qH(rhs)}`, "left side is now a perfect square"],
      [DD < 0 ? "no real square root of a negative" : `${X_} + ${cP(qH(hb))} = ±${sqrtQH(rhs)}`, "square root property"],
      [DD < 0 ? "no real solution" : `${X_} = ${ex.html}`, "solve"]];
    const shown = b ? lines.slice(0, K >= 3 ? Math.min(K - 1, 4) + 1 : 1) : [lines[0], ...(K >= 4 ? lines.slice(3) : [])];
    const done = K >= 5;
    let lm, note, hit = done;
    if (DD < 0 && K >= 3) { hit = true; lm = M(`(${X_} + ${qH(hb)})<sup>2</sup> = ${qH(rhs)}`); note = "A real square is never negative, so there is no real solution. (The parabola y = x² + bx − c stays above the x-axis.)"; }
    else if (done) { lm = M(`${X_} = ${ex.html}`); note = DD === 0 ? "One repeated solution: the right side became 0." : `${ex.rational ? "Both solutions are rational" : "The square root doesn't simplify to a whole number, so the solutions are irrational"}. ${scaleOK ? `The picture uses x = ${k.fmt(pos, 3)}: its big square has area ${qT(rhs)}.` : ""}`; }
    else { lm = ["x² + bx = c", "Halve b", "Rearrange", "Add the corner", "Square root property", "Solve"][K]; note = ["The left side is a square plus a strip of area bx.", `Two strips of width b/2 = ${hbT}.`, `The L-shape has the same area, x² + ${b}x, but is missing a ${hbT} × ${hbT} corner.`, `Adding ${sqT} fills the corner: the square has side x + ${hbT}.`, "If u² = k with k ≥ 0, then u = √k or u = −√k. Don't forget the negative root.", ""][K]; }
    k.setRO(`${RO0}<div><h2>Completing the square</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${done && DD >= 0 ? M(`${X_} = <span class="c1">${ex.html}</span>`) : M(`${X_}<sup>2</sup> + ${cP(b)}${X_} = ${sg(cc)}`)}</div></div>
      <div class="ro-rows">${shown.map(([e, l]) => `<div class="row">${M(e)}<span class="lbl">${l}</span></div>`).join("")}</div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">${b ? "Try an odd b: the corner becomes a fraction but the method is the same." : "With b = 0 this is the square root property on its own."}</p>`);
  });
};

/* =====================================================================
   a1-rational-add: LCD construction
   ===================================================================== */
L["a1-rational-add"] = k => {
  const { C, M } = k; const dom = k.dom();
  const PRE = [
    ["3/(x + 2) + 2/(x − 1)", [{ n: [3], r: [-2] }, { n: [2], r: [1] }], 1],
    ["x/(x² − 9) − 1/(x + 3)", [{ n: [0, 1], r: [3, -3] }, { n: [1], r: [-3] }], -1],
    ["2/(x² + 3x + 2) + 1/(x² + x − 2)", [{ n: [2], r: [-1, -2] }, { n: [1], r: [-2, 1] }], 1],
    ["1/(x − 1) − 2/(x² − 1)", [{ n: [1], r: [1] }, { n: [2], r: [1, -1] }], -1],
    ["5/x + 3/x²", [{ n: [5], r: [0] }, { n: [3], r: [0, 0] }], 1],
    ["(x + 1)/(x − 2) − (x − 1)/(x + 2)", [{ n: [1, 1], r: [2] }, { n: [-1, 1], r: [-2] }], -1]
  ];
  let cur = PRE[0], plan;
  const st = k.stepper(() => 5, render, { ms: 1300 });
  k.select("Problem", PRE.map((p, i) => [i, p[0]]), 0, v => { cur = PRE[+v]; build(); st.reset(); });
  const opS = s => (s > 0 ? "+" : "−");
  const denPow = rs => { const seen = []; rs.forEach(r => { const e = seen.find(z => z.r === r); if (e) e.n++; else seen.push({ r, n: 1 }); }); return seen; };
  const denFH = (rs, cl) => { if (!rs.length) return "1"; const z = denPow(rs); if (z.length === 1 && z[0].n === 1) return `<span class="${cl}">${facBare(z[0].r)}</span>`; return z.map(q => `<span class="${cl}">${z.length === 1 && q.r === 0 ? X_ : facH(q.r)}${q.n > 1 ? `<sup>${q.n}</sup>` : ""}</span>`).join(""); };
  const numTimes = (n, miss) => { const nh = polyH(n); if (!miss.length) return nh; const wrap = nTerms(n) > 1 ? `(${nh})` : nh === "1" ? "" : nh; return wrap + miss.map(r => `<span class="c4">${facH(r)}</span>`).join(""); };
  function build(){
    const [, [t1, t2], op] = cur;
    const lcd = t1.r.concat(msetMinus(t2.r, t1.r)).sort((p, q) => p - q), m1 = msetMinus(lcd, t1.r), m2 = msetMinus(lcd, t2.r);
    const N1 = pmul(t1.n, proots(1, m1)), N2 = pmul(t2.n, proots(1, m2)), Nc = padd(N1, N2, op);
    let cn = Nc, den = lcd.slice(); const canc = [];
    if (!pzero(Nc)) { let go = true; while (go) { go = false; for (const r of uniq(den)) if (pdeg(cn) >= 1 && peval(cn, r) === 0) { cn = pdivRoot(cn, r); den.splice(den.indexOf(r), 1); canc.push(r); go = true; break; } } }
    plan = { t1, t2, op, lcd, m1, m2, N1, N2, Nc, cn, den, canc, zero: pzero(Nc), excl: uniq(lcd) };
  }
  function render(){
    const K = st.k, p = plan, { t1, t2, op } = p, done = K >= 5;
    const fr = (t, cl, expand) => FR(polyH(t.n), expand ? `<span class="${cl}">${polyH(proots(1, t.r))}</span>` : denFH(t.r, cl));
    const lcdH = denFH(p.lcd, "c4");
    const resH = p.zero ? "0" : p.den.length ? FR(`<span class="c1">${polyH(p.cn)}</span>`, `<span class="c1">${denFH(p.den, "")}</span>`) : `<span class="c1">${polyH(p.cn)}</span>`;
    const rows = [{ tag: "given", html: `${fr(t1, "", true)} ${opS(op)} ${fr(t2, "", true)}` }];
    if (K >= 1) rows.push({ tag: "factor", html: `${fr(t1, "c2", false)} ${opS(op)} ${fr(t2, "c3", false)}` });
    if (K >= 2) rows.push({ tag: "LCD", html: `<span class="c4">${lcdH}</span>` });
    if (K >= 3) rows.push({ tag: "rewrite", html: `${FR(numTimes(t1.n, p.m1), lcdH)} ${opS(op)} ${FR(numTimes(t2.n, p.m2), lcdH)}` });
    if (K >= 4) rows.push({ tag: "combine", html: `${FR(`${polyH(p.N1)} ${opS(op)} ${op < 0 && nTerms(p.N2) > 1 ? `(${polyH(p.N2)})` : polyH(p.N2)}`, lcdH)} = ${FR(polyH(p.Nc), lcdH)}` });
    if (K >= 5) rows.push({ tag: "result", html: p.canc.length ? `${FR(`<span class="c1 a3b-x">${p.canc.map(r => facH(r)).join("")}</span>${polyH(p.cn) === "1" ? "" : nTerms(p.cn) > 1 ? `(${polyH(p.cn)})` : polyH(p.cn)}`, `${denFH(p.lcd, "")}`)} = ${resH}` : resH });
    // chips
    const chip = (r, col, dim) => `<span class="a3b-chip${dim ? " dim" : ""}" style="border-color:${col};color:${col}">${facBare(r) === X_ ? X_ : facH(r)}</span>`;
    const lcdChips = p.lcd.map(r => chip(r, C.violet, K < 2)).join("");
    const chips = `<div class="a3b-chips"><b class="c2">den 1</b>${t1.r.map(r => chip(r, C.cyan)).join("")}</div>
      <div class="a3b-chips"><b class="c3">den 2</b>${t2.r.map(r => chip(r, C.pink)).join("")}</div>
      <div class="a3b-chips"><b class="c4">LCD</b>${lcdChips}</div>
      ${K >= 3 ? `<div class="a3b-chips"><b>missing</b><span>den 1 × </span>${p.m1.length ? p.m1.map(r => chip(r, C.violet)).join("") : "<span>nothing</span>"}<span>&nbsp; den 2 × </span>${p.m2.length ? p.m2.map(r => chip(r, C.violet)).join("") : "<span>nothing</span>"}</div>` : ""}`;
    const f1 = x => peval(t1.n, x) / t1.r.reduce((a, r) => a * (x - r), 1), f2 = x => peval(t2.n, x) / t2.r.reduce((a, r) => a * (x - r), 1), f = x => f1(x) + op * f2(x);
    const svg = K >= 4 ? svgPlot(C, { xmin: -6, xmax: 6, ymin: -6, ymax: 6, fns: [{ f, color: C.amber, w: 2.4, breaks: p.excl }], vlines: uniq(p.den).map(x => ({ x, color: C.violet, w: 1.3 })),
      pts: p.canc.map(x => { const g = x2 => peval(p.cn, x2) / p.den.reduce((a, r) => a * (x2 - r), 1); return { x, y: g(x), color: C.amber, open: true, r: 5, label: `hole x = ${sg(x)}` }; }), xlabel: "x", ylabel: "y" }) + `<div class="a3b-cap"><span class="c1">the sum as one function</span> · <span class="c4">asymptotes at LCD zeros that remain</span></div>` : "";
    dom.innerHTML = `<div class="a3b-wrap">${stepsH(rows, K)}<div class="a3b-side">${chips}<div>${svg}</div></div></div>`;
    const notes = [
      "Fractions can only be added when their denominators match. Find the least common denominator first.",
      "Factor both denominators so their building blocks are visible.",
      "The LCD uses every factor, each as many times as it appears in whichever denominator has the most of it.",
      "Multiply each fraction by (missing factors)/(missing factors), a form of 1, so both share the LCD.",
      op < 0 ? "Subtract the whole second numerator: the minus sign reaches every term, so the parentheses matter." : "Add the numerators; keep the LCD.",
      p.zero ? "The numerators cancel completely: the difference is 0 for every allowed x." : p.canc.length ? `The new numerator shares ${p.canc.map(r => facH(r)).join("")} with the LCD, so it cancels (x = ${p.canc.map(sg).join(", ")} stays excluded: a hole).` : "Check for a common factor with the LCD: none here, so this is simplest form."][K];
    k.setRO(`${RO0}<div><h2>${op > 0 ? "Sum" : "Difference"}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${done ? M(resH) : "…"}</div></div>
      <div class="ro-rows"><div class="row">${M(`LCD = <span class="c4">${lcdH}</span>`)}<span class="lbl">union of the denominator factors, highest power of each</span></div>
      <div class="row">${M(`${X_} ≠ ${p.excl.map(v => sg(v)).join(", ")}`)}<span class="lbl">excluded: zeros of the original denominators</span></div>
      ${K >= 4 ? `<div class="row">${M(polyH(p.N1) + ` ${opS(op)} ` + (op < 0 && nTerms(p.N2) > 1 ? `(${polyH(p.N2)})` : polyH(p.N2)) + ` = ${polyH(p.Nc)}`)}<span class="lbl">combined numerator</span></div>` : ""}</div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${["Common denominator needed", "Factor", "Build the LCD", "Rewrite", "Combine", "Simplify"][K]}</div><div class="note">${notes}</div></div>
      <p class="narr">Step through; the violet chips show which factors each fraction was missing.</p>`);
  }
  build(); render();
};

/* =====================================================================
   a1-quad-formula: sliders a, b, c; discriminant; roots
   ===================================================================== */
L["a1-quad-formula"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = MT(k);
  let a = 1, b = -2, cc = -3, xc = 1, xs = 6, yl = -6, yh = 6;
  const sa = k.slider(`<span class="c2"><i>a</i></span>`, -5, 5, 1, a, v => a = v);
  const sb = k.slider(`<span class="c2"><i>b</i></span>`, -10, 10, 1, b, v => b = v);
  const sc = k.slider(`<span class="c2"><i>c</i></span>`, -10, 10, 1, cc, v => cc = v);
  const pre = (A, B, Cc) => { a = A; b = B; cc = Cc; sa.set(A); sb.set(B); sc.set(Cc); };
  k.button("D = 0", () => pre(1, -4, 4), "btn-s");
  k.button("D < 0", () => pre(1, 2, 5), "btn-s");
  k.button("Irrational", () => pre(2, 4, -3), "btn-s");
  const P_ = n => (n < 0 ? `(${sg(n)})` : String(n));
  k.loop(dt => {
    const quad = a !== 0, D = b * b - 4 * a * cc, f = x => a * x * x + b * x + cc;
    const vx = quad ? -b / (2 * a) : 0, vy = quad ? f(vx) : 0, ex = quad ? quadExact(a, b, cc) : null;
    const spread = quad && D > 0 ? Math.sqrt(D) / (2 * Math.abs(a)) : 0;
    const tx = quad ? vx : (b !== 0 ? -cc / b : 0), ts = Math.max(5, spread * 1.5 + 2);
    const lo = Math.min(vy, 0, cc), hi = Math.max(vy, 0, cc), sp = Math.max(8, (hi - lo) * 1.5);
    let t0, t1; if (!quad) { t0 = -sp / 2; t1 = sp / 2; } else if (a > 0) { t0 = Math.min(lo, 0) - sp * .2; t1 = t0 + sp * 1.2; } else { t1 = Math.max(hi, 0) + sp * .2; t0 = t1 - sp * 1.2; }
    const kf = k.reduce ? 1 : Math.min(1, dt * 6); xc = lerp(xc, tx, kf); xs = lerp(xs, ts, kf); yl = lerp(yl, t0, kf); yh = lerp(yh, t1, kf);
    c.begin(); const { w } = c;
    const P = k.plot(c, { xmin: xc - xs, xmax: xc + xs, ymin: yl, ymax: yh, pad: { l: 42, r: 14, t: 16, b: 28 }, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    if (quad) P.line(vx, P.ymin, vx, P.ymax, k.alpha(C.text, .3), 1, [4, 4]);
    P.fn(f, C.text, 3);
    if (quad) {
      P.point(vx, vy, C.text, 4);
      if (D > 0) {
        const yb = 0, Xv = P.X(vx), yB = P.Y(yb) + (a > 0 ? 26 : -26);
        d.line(Xv, yB, P.X(vx - spread), yB, C.violet, 1.5); d.line(Xv, yB, P.X(vx + spread), yB, C.violet, 1.5);
        [vx - spread, vx + spread].forEach(x => d.line(P.X(x), yB - 5, P.X(x), yB + 5, C.violet, 1.5));
        if (P.X(vx + spread) - Xv > 50) T.tag(d, "√D / 2|a|", (Xv + P.X(vx + spread)) / 2, yB + (a > 0 ? 18 : -8), { size: 13, color: C.violet, align: "center" });
      }
      ex.vals.forEach(x => P.point(x, 0, C.amber, 7));
      d.text(`x = ${k.fmt(vx, 3)}`, P.X(vx) + 6, P.top + P.height - 8, { font: `12px ${F.mono}`, color: C.faint });
    } else if (b !== 0) P.point(-cc / b, 0, C.amber, 7);
    // discriminant gauge
    const gx = w - 150, gy = P.top + 22;
    if (quad) {
      d.rr(gx - 12, gy - 16, 148, 52, 4, k.alpha(C.ink, .85), C.line);
      d.text("DISCRIMINANT", gx, gy, { font: `600 10px ${F.ui}`, color: C.faint });
      T.mt(d, `D = ${sg(D)}`, gx, gy + 24, { size: 18, color: C.violet });
      d.text(D > 0 ? "> 0 · 2 roots" : D === 0 ? "= 0 · 1 root" : "< 0 · none", gx + 124, gy + 24, { font: `600 11px ${F.ui}`, color: D > 0 ? C.amber : C.violet, align: "right" });
    }
    // readout
    const cA = t => `<span class="c2">${t}</span>`, dV = t => `<span class="c4">${t}</span>`;
    if (!quad) {
      const msg = b !== 0 ? `${X_} = ${qH(Q(-cc, b), "c1")}` : cc === 0 ? "every real x" : "no solution";
      k.setRO(`${RO0}<div><h2>Not quadratic</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(msg)}</div></div>
        <div class="ro-rows"><div class="row">${M(`${cA(0)}${X_}<sup>2</sup> ${b < 0 ? "−" : "+"} ${cA(Math.abs(b))}${X_} ${cc < 0 ? "−" : "+"} ${cA(Math.abs(cc))} = 0`)}<span class="lbl">with a = 0 the x² term vanishes</span></div></div>
        <div class="landmark hit"><div class="big">${M("<i>a</i> = 0")}</div><div class="note">The formula divides by 2a, so it can't be used. ${b !== 0 ? "The equation is linear: one solution." : cc === 0 ? "0 = 0 holds for every x." : `${sg(cc)} = 0 is false: no solution.`}</div></div>`);
      return;
    }
    const Pc = n => (n < 0 ? `(${cA(sg(n))})` : cA(n));
    const sub = FR(`−${Pc(b)} ± ${SQ(`${Pc(b)}<sup>2</sup> − 4·${Pc(a)}·${Pc(cc)}`)}`, `2·${Pc(a)}`);
    const mid = FR(`${sg(-b)} ± ${SQ(dV(D))}`, sg(2 * a));
    const kinds = D > 0 ? (ex.rational ? "two rational roots (D is a perfect square)" : "two irrational roots (D is not a perfect square)") : D === 0 ? "one repeated root: the vertex sits on the axis" : "no real roots: the parabola misses the x-axis";
    const hit = D <= 0;
    k.setRO(`${RO0}<div><h2>Roots</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${D >= 0 ? M(`${X_} = <span class="c1">${ex.html}</span>`) : `<span class="c4">no real roots</span>`}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`${X_} = ${sub}`)}<span class="lbl">substitute a, b, c into x = (−b ± √(b² − 4ac)) / 2a</span></div>
        <div class="row">${M(`${dV("<i>D</i>")} = ${P_(b)}<sup>2</sup> − 4·${P_(a)}·${P_(cc)} = ${dV(sg(D))}`)}<span class="lbl">the discriminant, the part under the root</span></div>
        <div class="row">${M(`${X_} = ${mid}`)}${D >= 0 ? ` <span class="v c1">≈ ${ex.vals.map(v => k.fmt(v, 3)).join(", ")}</span>` : ""}<span class="lbl">${D < 0 ? "√ of a negative is not real" : "then simplify the radical and the fraction"}</span></div>
        <div class="row">${M(`vertex ${X_} = −<i>b</i>/2<i>a</i> = ${k.fmt(vx, 3)}`)}<span class="lbl">the roots sit symmetrically, √D / 2|a| = ${D >= 0 ? k.fmt(spread, 3) : "—"} either side</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${M(`${dV("<i>D</i>")} ${D > 0 ? "&gt;" : D === 0 ? "=" : "&lt;"} 0`)}</div><div class="note">${kinds}.</div></div>
      <p class="narr">Slide c up until the roots merge and vanish; watch D pass through 0.</p>`);
  });
};

/* =====================================================================
   a1-rational-eq: multiply by the LCD, check for extraneous roots
   ===================================================================== */
L["a1-rational-eq"] = k => {
  const { C, M } = k; const dom = k.dom();
  const t = (n, r = [], kk = 1) => ({ n, r, k: kk });
  const PRE = [
    { name: "x/(x − 3) = 3/(x − 3) + 2", L: [t([0, 1], [3])], R: [t([3], [3]), t([2])] },
    { name: "1/(x − 2) + 1/(x + 2) = 4/(x² − 4)", L: [t([1], [2]), t([1], [-2])], R: [t([4], [2, -2])] },
    { name: "2x/(x − 3) = 6/(x − 3) + x", L: [t([0, 2], [3])], R: [t([6], [3]), t([0, 1])] },
    { name: "x/(x + 1) = 2/x", L: [t([0, 1], [-1])], R: [t([2], [0])] },
    { name: "1/x + 1/(2x) = 1/4", L: [t([1], [0]), t([1], [0], 2)], R: [t([1], [], 4)], yl: [-2, 2] },
    { name: "Work: 1/3 + 1/6 = 1/t", v: "t", L: [t([1], [], 3), t([1], [], 6)], R: [t([1], [0])], yl: [-2, 2.5],
      text: "Pipe A fills a tank in <b>3 hours</b>, pipe B in <b>6 hours</b>. Working together they fill 1/t of the tank per hour, where t is the time together. Rates add: <b>1/3 + 1/6 = 1/t</b>.", ans: v => `together: ${v} hours` },
    { name: "Current: 10/(r + 2) = 6/(r − 2)", v: "r", L: [t([10], [-2])], R: [t([6], [2])], yl: [-6, 6],
      text: "A boat goes <b>10 miles</b> downstream in the same time it goes <b>6 miles</b> upstream. The current is <b>2 mph</b>. Time = distance / speed, so <b>10/(r + 2) = 6/(r − 2)</b>, with r the boat's speed in still water.", ans: v => `boat speed ${v} mph` }
  ];
  let cur = PRE[0], plan;
  const st = k.stepper(() => 6, render, { ms: 1300 });
  k.select("Equation", PRE.map((p, i) => [i, p.name]), 0, v => { cur = PRE[+v]; build(); st.reset(); });
  function build(){
    const v = `<i>${cur.v || "x"}</i>`, all = cur.L.concat(cur.R);
    let lr = []; all.forEach(q => { lr = lr.concat(msetMinus(q.r, lr)); }); lr.sort((p, q) => p - q);
    const lk = all.reduce((acc, q) => LCM(acc, q.k), 1);
    const mult = q => { const miss = msetMinus(lr, q.r), f = lk / q.k; return { miss, f, poly: pscale(pmul(q.n, proots(1, miss)), f) }; };
    const Lm = cur.L.map(mult), Rm = cur.R.map(mult);
    const sum = arr => arr.reduce((acc, m) => padd(acc, m.poly), [0]);
    const Ls = sum(Lm), Rs = sum(Rm); let P = padd(Ls, Rs, -1);
    if (P[P.length - 1] < 0) P = pscale(P, -1);
    const excl = uniq(lr), deg = pdeg(P);
    let sols = [], kind = "roots", irr = null;
    if (deg <= 0) kind = P[0] === 0 ? "identity" : "none";
    else if (deg === 1) sols = [Q(-P[0], P[1])];
    else { const ex = quadExact(P[2], P[1], P[0]); if (ex.n === 0) kind = "noreal"; else if (ex.rational) sols = ex.roots; else irr = ex; }
    const good = sols.filter(s => !(s.d === 1 && excl.includes(s.n))), bad = sols.filter(s => s.d === 1 && excl.includes(s.n));
    plan = { v, lr, lk, Lm, Rm, Ls, Rs, P, excl, deg, sols, kind, irr, good, bad };
  }
  const denH = (q, v, expand) => { const pre = q.k === 1 ? "" : String(q.k); if (!q.r.length) return pre || "1"; if (expand) return polyH(proots(q.k, q.r), v); const body = q.r.length === 1 && !pre ? facBare(q.r[0], v) : q.r.map(r => facH(r, v)).join(""); return pre + body; };
  const termH = (q, v, expand) => (q.r.length || q.k !== 1 ? FR(polyH(q.n, v), denH(q, v, expand)) : polyH(q.n, v));
  const sideH = (arr, v, expand) => arr.map(q => termH(q, v, expand)).join(" + ");
  const multH = (m, v) => { const nh = polyH(m.poly, v); return nTerms(m.poly) > 1 && m.miss.length ? `(${nh})` : nh; };
  const prodT = (m, q, v) => { const nh = polyH(q.n, v), wrap = nTerms(q.n) > 1 ? `(${nh})` : nh; const f = m.f === 1 ? "" : String(m.f);
    const ms = m.miss.filter(r => r === 0).concat(m.miss.filter(r => r !== 0)), miss = ms.map(r => `<span class="c4">${facH(r, v)}</span>`).join("");
    if (!miss) return f ? (nh === "1" ? f : `${f}·${wrap}`) : nh;
    const head = `${f}${wrap === "1" ? "" : f && nTerms(q.n) === 1 && /^\d/.test(wrap) ? "·" + wrap : wrap}`;
    return head + (head && ms[0] === 0 && /<\/i>(<sup>\d<\/sup>)?$/.test(head) ? "·" : "") + miss; };
  function render(){
    const K = st.k, p = plan, v = p.v, done = K >= 6;
    const lcdH = `<span class="c4" style="white-space:nowrap">${(p.lk === 1 ? "" : p.lk) + (p.lr.length === 1 && p.lk === 1 ? facBare(p.lr[0], v) : p.lr.map(r => facH(r, v)).join(""))}</span>`;
    const rows = [{ tag: "given", html: `${sideH(cur.L, v, true)} = ${sideH(cur.R, v, true)}` }];
    if (K >= 1) rows.push({ tag: "restrict", html: `${sideH(cur.L, v, false)} = ${sideH(cur.R, v, false)}; ${p.excl.length ? `${v} ≠ ${p.excl.map(x => `<span class="c3">${sg(x)}</span>`).join(", ")}` : "no restrictions"}` });
    if (K >= 2) rows.push({ tag: "LCD", html: `multiply both sides by ${lcdH}` });
    if (K >= 3) rows.push({ tag: "clear", html: `${cur.L.map((q, i) => prodT(p.Lm[i], q, v)).join(" + ")} = ${cur.R.map((q, i) => prodT(p.Rm[i], q, v)).join(" + ")}` });
    if (K >= 4) rows.push({ tag: "collect", html: `${polyH(p.P, v)} = 0` });
    if (K >= 5) rows.push({ tag: "solve", html: p.kind === "identity" ? "0 = 0: every allowed value works" : p.kind === "none" ? `${polyH(p.P, v)} = 0 is false: no solution` : p.kind === "noreal" ? "negative discriminant: no real solution" : p.irr ? `${v} = ${p.irr.html}` : `${v} = ${p.sols.map(s => qH(s)).join(" or ")}` });
    if (K >= 6) rows.push({ tag: "check", html: p.irr ? `<span class="c5">both valid</span> (irrational, so neither equals ${p.excl.map(sg).join(" or ")})` : p.sols.length ? p.sols.map(s => p.bad.some(b => qeq(b, s)) ? `<span class="c3">${v} = ${qT(s)} extraneous ✗ (makes a denominator 0)</span>` : `<span class="c5">${v} = ${qT(s)} ✓</span>`).join("<br>") : "nothing to check" });
    const fL = x => cur.L.reduce((acc, q) => acc + peval(q.n, x) / (q.k * q.r.reduce((a, r) => a * (x - r), 1)), 0);
    const fR = x => cur.R.reduce((acc, q) => acc + peval(q.n, x) / (q.k * q.r.reduce((a, r) => a * (x - r), 1)), 0);
    const xsAll = p.excl.concat(p.sols.map(qv), p.irr ? p.irr.vals : []);
    const xmin = Math.floor(Math.min(-5, ...xsAll.map(x => x - 3))), xmax = Math.ceil(Math.max(5, ...xsAll.map(x => x + 3)));
    const [ymin, ymax] = cur.yl || [-8, 8];
    const pts = [];
    if (K >= 6) { p.good.forEach(s => pts.push({ x: qv(s), y: fL(qv(s)), color: C.green, r: 6, label: `${cur.v || "x"} = ${qT(s)}` })); if (p.irr) p.irr.vals.forEach(x => pts.push({ x, y: fL(x), color: C.green, r: 6, label: `${k.fmt(x, 3)}` }));
      p.bad.forEach(s => pts.push({ x: qv(s), y: 0, color: C.pink, r: 6, open: true, label: `${qT(s)} ✗`, dy: 18 })); }
    const svg = svgPlot(C, { xmin, xmax, ymin, ymax, fns: [{ f: fL, color: C.cyan, w: 2.4, breaks: p.excl }, { f: fR, color: C.amber, w: 2.4, breaks: p.excl, dash: "7 4" }],
      vlines: K >= 1 ? p.excl.map(x => ({ x, color: C.violet, w: 1.3 })) : [], pts, xlabel: cur.v || "x", ylabel: "y" });
    dom.innerHTML = `${cur.text ? `<p class="a3b-prob">${cur.text}</p>` : ""}<div class="a3b-wrap">${stepsH(rows, K)}<div class="a3b-side"><div>${svg}<div class="a3b-cap"><span class="c2">left side</span> · <span class="c1">right side (dashed)</span> · <span class="c4">excluded values</span></div></div></div></div>`;
    let big = "…";
    if (done) { if (p.kind === "identity") big = `every ${v} ≠ ${p.excl.map(sg).join(", ")}`; else if (p.irr) big = `${v} = <span class="c5">${p.irr.html}</span>`; else if (p.good.length) big = p.good.map(s => `${v} = ${qH(s, "c5")}`).join(", "); else big = `<span class="c3">no solution</span>`; }
    const special = done && (p.bad.length || p.kind !== "roots" || !p.good.length && !p.irr);
    const notes = [
      "An equation with the variable in a denominator. Clearing the fractions turns it into a polynomial equation.",
      "First record the values that make any denominator 0. They can never be solutions.",
      "The LCD contains every denominator factor. Multiplying every term by it cancels all the denominators.",
      "Each term keeps only the LCD factors its own denominator was missing (violet).",
      "Move everything to one side and combine like terms.",
      "Solve the polynomial equation. Clearing denominators can create solutions the original doesn't have.",
      p.bad.length ? `${p.bad.map(qT).join(", ")} was produced by the algebra but makes a denominator 0: it is extraneous. ${p.good.length || p.irr ? "The other root stands." : "So the equation has no solution; the two graphs never meet."}` : cur.ans && (p.good.length) ? `In context: ${cur.ans(qT(p.good[0]))}.` : "Every candidate passed the check: the graphs cross exactly there."][K];
    k.setRO(`${RO0}<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(big)}</div></div>
      <div class="ro-rows"><div class="row">${M(`LCD = ${lcdH}`)}<span class="lbl">multiply every term by it</span></div>
      <div class="row">${M(p.excl.length ? `${v} ≠ ${p.excl.map(x => `<span class="c3">${sg(x)}</span>`).join(", ")}` : "no excluded values")}<span class="lbl">zeros of the denominators</span></div>
      ${K >= 4 ? `<div class="row">${M(`${polyH(p.P, v)} = 0`)}<span class="lbl">the cleared equation (degree ${Math.max(0, p.deg)})</span></div>` : ""}</div>
      <div class="landmark${special || done ? " hit" : ""}"><div class="big">${done ? (p.bad.length ? `<span class="c3">extraneous: ${v} = ${p.bad.map(qT).join(", ")}</span>` : "all candidates valid") : ["Rational equation", "Restrictions", "Find the LCD", "Clear denominators", "Collect terms", "Solve", ""][K]}</div><div class="note">${notes}</div></div>
      <p class="narr">Try the first three equations: each hides an extraneous root.</p>`);
  }
  build(); render();
};

/* =====================================================================
   a1-quad-graphs: vertex form with a draggable vertex
   ===================================================================== */
L["a1-quad-graphs"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = MT(k);
  let a = 1, h0 = 2, k0 = -3, P = null, drag = false;
  const fm = v => k.fmt(v, 2);
  const sa = k.slider("<i>a</i>", -3, 3, 0.25, a, v => a = v, fm);
  const sh = k.slider(`<span class="c1"><i>h</i></span>`, -6, 6, 0.5, h0, v => h0 = v, fm);
  const sk = k.slider(`<span class="c1"><i>k</i></span>`, -8, 8, 0.5, k0, v => k0 = v, fm);
  k.button("y = x²", () => { a = 1; h0 = 0; k0 = 0; sa.set(1); sh.set(0); sk.set(0); }, "btn-s");
  k.button("Flip a", () => { a = -a; sa.set(a); }, "btn-s");
  k.hint("Drag the vertex");
  c.cv.addEventListener("pointerdown", e => { if (!P) return; const p = c.xy(e); if (Math.hypot(p.x - P.X(h0), p.y - P.Y(k0)) < 22) { drag = true; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (!drag || !P) return; const p = c.xy(e), q = P.inv(p.x, p.y); h0 = clamp(Math.round(q.x * 2) / 2, -6, 6); k0 = clamp(Math.round(q.y * 2) / 2, -8, 8); sh.set(h0); sk.set(k0); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "grab";
  k.loop(() => {
    c.begin(); const { w } = c;
    const f = x => a * (x - h0) * (x - h0) + k0;
    P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, pad: { l: 40, r: 14, t: 16, b: 28 }, xstep: 2, ystep: 2, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    P.line(h0, P.ymin, h0, P.ymax, C.violet, 1.8, [7, 5]);
    d.text(`x = ${k.fmt(h0, 2)}`, P.X(h0) + 6, P.top + P.height - 8, { font: `italic 13px ${F.math}`, color: C.violet });
    P.fn(f, C.text, 3);
    const AQ = qdec(a, 4), HQ = qdec(h0, 2), KQ = qdec(k0, 2);
    const bQ = qmul(-2, qmul(AQ, HQ)), cQ = qadd(qmul(AQ, qmul(HQ, HQ)), KQ);
    // step pattern
    if (a !== 0) [1, 2].forEach(s => [-1, 1].forEach(sd => { const x = h0 + sd * s, y = f(x); if (y > P.ymin && y < P.ymax) P.point(x, y, k.alpha(C.text, .6), 3.5); }));
    if (a !== 0 && w > 420) { const y1 = f(h0 + 1); if (y1 > P.ymin && y1 < P.ymax) { P.line(h0, k0, h0 + 1, k0, k.alpha(C.text, .4), 1, [2, 3]); P.line(h0 + 1, k0, h0 + 1, y1, k.alpha(C.text, .4), 1, [2, 3]); P.label(`1 over, ${k.fmt(Math.abs(a), 2)} ${a > 0 ? "up" : "down"}`, h0 + 1, y1, C.faint, { dx: 8, dy: a > 0 ? 4 : 16, font: `12px ${F.sans}` }); } }
    // intercepts
    const yI = qv(cQ); if (yI > P.ymin && yI < P.ymax) { P.point(0, yI, C.cyan, 5.5); if (h0 !== 0) P.point(2 * h0, yI, C.cyan, 4.5, true); }
    let xi = null, xiH = "none", ratio = a !== 0 ? qdiv(qmul(-1, KQ), AQ) : null;
    if (a !== 0 && qv(ratio) >= 0) { const r0 = sqrtQ(ratio); const sp = Math.sqrt(qv(ratio)); xi = qv(ratio) === 0 ? [h0] : [h0 - sp, h0 + sp];
      xiH = qv(ratio) === 0 ? qH(HQ) : r0.rational ? `${qH(qsub(HQ, r0.rational))}, ${qH(qadd(HQ, r0.rational))}` : `${qv(HQ) !== 0 ? qH(HQ) + " " : ""}± ${sqrtQH(ratio)} <span class="v">≈ ${xi.map(x => k.fmt(x, 3)).join(", ")}</span>`;
      xi.forEach(x => { if (x > P.xmin && x < P.xmax) P.point(x, 0, C.cyan, 5.5); }); }
    if (k0 > P.ymin && k0 < P.ymax) { P.point(h0, k0, C.amber, 8); P.label(`(${k.fmt(h0, 2)}, ${k.fmt(k0, 2)})`, h0, k0, C.amber, { dx: 12, dy: a >= 0 ? 20 : -12, font: `600 14px ${F.math}` }); }
    const aP = a === 1 ? "" : a === -1 ? "−" : k.fmt(a, 2), hT = k.fmt(Math.abs(h0), 2), kT = k.fmt(Math.abs(k0), 2);
    const vT = `y = ${aP}${h0 === 0 ? (aP ? "x²" : "x²") : `(x ${h0 > 0 ? "−" : "+"} ${hT})²`}${k0 === 0 ? "" : ` ${k0 > 0 ? "+" : "−"} ${kT}`}`;
    T.tag(d, vT, P.left + 10, P.top + 20, { size: w < 460 ? 14 : 17, color: C.text });
    // readout
    const hH = `<span class="c1">${k.fmt(h0, 2)}</span>`, kH = `<span class="c1">${k.fmt(k0, 2)}</span>`;
    const vf = `<i>y</i> = ${aP}${h0 === 0 ? `${X_}<sup>2</sup>` : `(${X_} ${h0 > 0 ? "−" : "+"} <span class="c1">${hT}</span>)<sup>2</sup>`}${k0 === 0 ? "" : ` ${k0 > 0 ? "+" : "−"} <span class="c1">${kT}</span>`}`;
    if (a === 0) {
      k.setRO(`${RO0}<div><h2>Not a parabola</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<i>y</i> = ${kH}`)}</div></div>
        <div class="landmark hit"><div class="big">${M("<i>a</i> = 0")}</div><div class="note">The squared term disappears and the graph is the horizontal line y = k. A quadratic needs a ≠ 0.</div></div>`);
      return;
    }
    const hit = k0 === 0 || qv(ratio) < 0;
    k.setRO(`${RO0}<div><h2>Vertex form</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(vf)}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`vertex (${hH}, ${kH})`)}<span class="lbl">${a > 0 ? "minimum" : "maximum"} value ${k.fmt(k0, 2)}; range y ${a > 0 ? "≥" : "≤"} ${k.fmt(k0, 2)}</span></div>
        <div class="row">${M(`<span class="c4">${X_} = ${k.fmt(h0, 2)}</span>`)}<span class="lbl">axis of symmetry; |a| = ${k.fmt(Math.abs(a), 2)}: ${Math.abs(a) > 1 ? "narrower than" : Math.abs(a) < 1 ? "wider than" : "same shape as"} y = x², opens ${a > 0 ? "up" : "down"}</span></div>
        <div class="row">${M(`<i>y</i> = ${polyH([cQ, bQ, AQ])}`)}<span class="lbl">standard form: b = −2ah = ${qT(bQ)}, c = ah² + k = ${qT(cQ)}</span></div>
        <div class="row">${M(`<span class="c2">(0, ${qH(cQ)})</span>`)}<span class="lbl">y-intercept c, mirrored at x = 2h</span></div>
        <div class="row">${M(xi ? `<span class="c2">${X_} = ${xiH}</span>` : "no x-intercepts")}<span class="lbl">${xi ? "x-intercepts: solve a(x − h)² + k = 0, x = h ± √(−k/a)" : "no x-intercepts: −k/a is negative"}</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${k0 === 0 ? "vertex on the x-axis" : qv(ratio) < 0 ? "no x-intercepts" : M(`${X_} = ${k.fmt(h0, 2)} ± ${k.fmt(Math.sqrt(qv(ratio)), 3)}`)}</div><div class="note">${k0 === 0 ? "One x-intercept, the vertex itself: a double root." : qv(ratio) < 0 ? `The vertex is ${a > 0 ? "above" : "below"} the axis and the parabola opens ${a > 0 ? "up" : "down"}, so it never crosses y = 0.` : "h shifts the graph right, k shifts it up; a stretches and flips it. The intercepts sit symmetrically about x = h."}</div></div>
      <p class="narr">Drag the vertex; the standard form updates. Note the sign: (x − h) means a shift right by h.</p>`);
  });
};

/* =====================================================================
   a1-quad-apps: projectile and maximum area
   ===================================================================== */
L["a1-quad-apps"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = MT(k);
  let mode = "proj", unit = "ft", v0 = 64, h0 = 80, tt = 0, run = false, Pp = 120, wall = false, xw = 18, P = null, drag = false;
  k.modes([["proj", "Projectile"], ["fence", "Fence"]], mode, v => { mode = v; vis(); });
  const bL = k.button("Launch", () => { tt = 0; run = !k.reduce; if (k.reduce) tt = land(); }, "btn");
  const bM = k.button("Jump to top", () => { run = false; tt = tStar(); }, "btn ghost");
  const su = k.select("Units", [["ft", "feet (−16t²)"], ["m", "metres (−4.9t²)"]], unit, v => { unit = v; const ft = v === "ft"; sv.el.step = ft ? 1 : 0.1; sh.el.step = ft ? 1 : 0.5; sv.setMax(ft ? 96 : 30); sh.setMax(ft ? 200 : 60); v0 = ft ? 64 : 14.7; h0 = ft ? 80 : 0; sv.set(v0); sh.set(h0); tt = 0; run = false; });
  const sv = k.slider(`<span class="c2"><i>v</i>₀</span>`, 0, 96, 1, v0, v => { v0 = v; tt = Math.min(tt, land()); }, v => k.fmt(v, 1));
  const sh = k.slider(`<span class="c2"><i>h</i>₀</span>`, 0, 200, 1, h0, v => { h0 = v; tt = Math.min(tt, land()); }, v => k.fmt(v, 1));
  const sp = k.slider("fence length", 40, 200, 4, Pp, v => { Pp = v; xw = Math.min(xw, Pp / 2); sx.setMax(Pp / 2); }, v => v + " m");
  const sx = k.slider(`width <i>x</i>`, 0, 60, 0.5, xw, v => xw = v, v => k.fmt(v, 1) + " m");
  const cw = k.check("wall on one side", wall, v => wall = v);
  const vis = () => { const pr = mode === "proj"; [bL, bM].forEach(b => b.style.display = pr ? "" : "none"); [su.el, sv.el, sh.el].forEach(e => e.parentElement.style.display = pr ? "" : "none"); [sp.el, sx.el, cw].forEach(e => e.parentElement.style.display = pr ? "none" : ""); c.cv.style.cursor = pr ? "default" : "ew-resize"; };
  vis();
  const A = () => (unit === "ft" ? -16 : -4.9), hf = t => A() * t * t + v0 * t + h0;
  const tStar = () => v0 / (-2 * A());
  const land = () => { const a = A(), D = v0 * v0 - 4 * a * h0; return (-v0 - Math.sqrt(D)) / (2 * a); };
  c.cv.addEventListener("pointerdown", e => { if (mode !== "fence" || !P) return; drag = true; c.cv.setPointerCapture(e.pointerId); setX(e); });
  const setX = e => { const p = c.xy(e); if (p.x < P.left - 10) return; const q = P.inv(p.x, p.y); xw = clamp(Math.round(q.x * 2) / 2, 0, Pp / 2); sx.set(xw); };
  c.cv.addEventListener("pointermove", e => { if (drag && P) setX(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  const u = () => unit;
  function proj(dt){
    const tl = land(), ts = tStar(), hm = hf(ts), sped = Math.max(1, tl / 3.5);
    if (run) { tt += dt * sped; if (tt >= tl) { tt = tl; run = false; } }
    tt = clamp(tt, 0, tl);
    c.begin(); const { w } = c;
    const T1 = Math.max(1, tl * 1.08), H1 = Math.max(10, hm * 1.18);
    P = k.plot(c, { xmin: 0, xmax: T1, ymin: 0, ymax: H1, pad: { l: 96, r: 16, t: 50, b: 30 }, xlabel: "t (s)", ylabel: `h (${u()})` });
    P.grid(); P.axes();
    // tower column
    const colX = 38; d.line(colX, P.Y(0), colX, P.Y(H1), k.alpha(C.line2, .7), 1, [2, 4]); d.line(colX - 22, P.Y(0), colX + 22, P.Y(0), C.muted, 2);
    if (h0 > 0) { d.rect(colX - 16, P.Y(h0), 10, P.Y(0) - P.Y(h0), k.alpha(C.text, .08), C.line2); }
    P.fn(hf, C.cyan, 3, 0, tl);
    // max
    if (ts > 0) { P.line(ts, 0, ts, hm, k.alpha(C.amber, .6), 1.2, [4, 4]); P.line(0, hm, ts, hm, k.alpha(C.amber, .6), 1.2, [4, 4]); d.line(colX - 22, P.Y(hm), colX + 22, P.Y(hm), k.alpha(C.amber, .6), 1, [3, 3]); }
    P.point(ts, hm, C.amber, 6.5);
    P.label(`max ${k.fmt(hm, 2)} ${u()}`, ts, hm, C.amber, { dx: ts > T1 * .6 ? -8 : 8, dy: -10, align: ts > T1 * .6 ? "right" : "left", font: `600 13px ${F.ui}` });
    if (tl > 0) { P.point(tl, 0, C.pink, 6.5); P.label(`lands t = ${k.fmt(tl, 2)}`, tl, 0, C.pink, { dx: -8, dy: -12, align: "right", font: `600 13px ${F.ui}` }); }
    const hn = hf(tt);
    P.point(tt, hn, C.text, 5, true);
    d.circle(colX, P.Y(hn), 8, C.text); d.circle(colX, P.Y(hn), 8, null, C.cyan, 2);
    T.tag(d, `h(t) = −${u() === "ft" ? 16 : 4.9}t²${v0 ? ` + ${k.fmt(v0, 1)}t` : ""}${h0 ? ` + ${k.fmt(h0, 1)}` : ""}`, w - 16, 30, { size: w < 460 ? 14 : 17, color: C.cyan, align: "right" });
    const atTop = !run && Math.abs(tt - ts) < 1e-6, landed = tt >= tl - 1e-9 && tt > 0;
    const aH = `<span class="c2">−${u() === "ft" ? 16 : 4.9}</span>`;
    let lm, note;
    if (tl === 0) { lm = "nothing to launch"; note = "With v₀ = 0 and h₀ = 0 the ball starts on the ground and stays there."; }
    else if (ts === 0) { lm = M(`max at <i>t</i> = 0`); note = "With no upward speed the ball is dropped: its highest point is where it starts."; }
    else if (landed) { lm = `<span class="c3">lands at t ≈ ${k.fmt(tl, 3)} s</span>`; note = "The positive root of h(t) = 0. The negative root (the other side of the parabola) has no meaning here: time starts at 0."; }
    else if (atTop) { lm = `<span class="c1">top: ${k.fmt(hm, 3)} ${u()} at t = ${k.fmt(ts, 3)} s</span>`; note = "At the vertex the ball is momentarily at rest: going up turns into coming down."; }
    else { lm = M(`<i>t</i> = −<i>b</i>/2<i>a</i> = ${k.fmt(ts, 3)}`); note = "The vertex gives the maximum height; the roots give when the ball is on the ground."; }
    k.setRO(`${RO0}<div><h2>Maximum height</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${k.fmt(hm, 2)}</span> <span style="font-size:.5em;color:var(--muted)">${u()} at t = ${k.fmt(ts, 3)} s</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`<i>h</i>(<i>t</i>) = ${aH}<i>t</i><sup>2</sup>${v0 ? ` + <span class="c2">${k.fmt(v0, 1)}</span><i>t</i>` : ""}${h0 ? ` + <span class="c2">${k.fmt(h0, 1)}</span>` : ""}`)}<span class="lbl">a = half of gravity's pull (${u() === "ft" ? "32 ft/s²" : "9.8 m/s²"}), b = launch speed, c = launch height</span></div>
        <div class="row">${M(`<i>t</i>* = ${FR(k.fmt(v0, 1), `2·${u() === "ft" ? 16 : 4.9}`)}`)} = <span class="v c1">${k.fmt(ts, 3)} s</span><span class="lbl">vertex time −b / 2a</span></div>
        <div class="row">${M(`<i>t</i> = ${FR(`${v0 ? "−" + k.fmt(v0, 1) + " " : ""}− √(${k.fmt(v0 * v0, 2)} + ${k.fmt(-4 * A() * h0, 2)})`, k.fmt(2 * A(), 1))}`)} = <span class="v c3">${k.fmt(tl, 3)} s</span><span class="lbl">time aloft: quadratic formula, positive root</span></div>
        <div class="row">${M(`<i>h</i>(${k.fmt(tt, 2)})`)} = <span class="v">${k.fmt(hn, 2)} ${u()}</span><span class="lbl">the ball now</span></div>
      </div>
      <div class="landmark${atTop || landed || tl === 0 || ts === 0 ? " hit" : ""}"><div class="big">${lm}</div><div class="note">${note}</div></div>
      <p class="narr">Launch, then change v₀: doubling the speed makes the rise four times higher.</p>`);
  }
  function fence(){
    c.begin(); const { w, h } = c;
    const Af = x => (wall ? x * (Pp - 2 * x) : x * (Pp / 2 - x)), L_ = x => (wall ? Pp - 2 * x : Pp / 2 - x), xm = Pp / 4, Am = Af(xm), x0 = clamp(xw, 0, Pp / 2);
    const wide = w > 600;
    const bx = 20, by = 56, bw = wide ? w * .42 - 30 : w - 40, bh = wide ? h - by - 40 : (h - by) * .38;
    const gp = wide ? { l: w * .42 + 40, r: 16, t: 56, b: 30 } : { l: 44, r: 16, t: by + bh + 30, b: 30 };
    // rectangle picture
    const maxS = Pp / 2, s = Math.min(bw / maxS, bh / (Pp / 4 + 2)) * .95, RW = L_(x0) * s, RH = x0 * s;
    const rx = bx + (bw - RW) / 2, ry = by + (bh - RH) / 2 + 8;
    d.rect(rx, ry, RW, RH, k.alpha(C.cyan, .12));
    const fcol = C.text;
    if (wall) { d.line(rx - 10, ry, rx + RW + 10, ry, C.muted, 5); d.text("WALL", rx + RW / 2, ry - 8, { font: `600 11px ${F.ui}`, color: C.faint, align: "center" }); }
    else d.line(rx, ry, rx + RW, ry, fcol, 2);
    d.line(rx, ry, rx, ry + RH, fcol, 2); d.line(rx + RW, ry, rx + RW, ry + RH, fcol, 2); d.line(rx, ry + RH, rx + RW, ry + RH, fcol, 2);
    T.mt(d, `x = ${k.fmt(x0, 1)}`, rx - 6, ry + RH / 2 + 5, { size: 14, color: C.text, align: "right" });
    T.mt(d, `${wall ? "P − 2x" : "P/2 − x"} = ${k.fmt(L_(x0), 1)}`, rx + RW / 2, ry + RH + 20, { size: 14, color: C.text, align: "center" });
    if (RH > 24 && RW > 60) T.mt(d, `A = ${k.fmt(Af(x0), 1)}`, rx + RW / 2, ry + RH / 2 + 6, { size: 15, color: Math.abs(x0 - xm) < 1e-9 ? C.amber : C.cyan, align: "center" });
    // graph
    const X1 = Pp / 2, Y1 = Am * 1.2 || 1;
    P = k.plot(c, { xmin: 0, xmax: X1 * 1.04, ymin: 0, ymax: Y1, pad: gp, xlabel: "x", ylabel: "A" });
    P.grid(); P.axes();
    P.fn(Af, C.cyan, 3, 0, X1);
    P.point(0, 0, C.pink, 6); P.point(X1, 0, C.pink, 6); P.label(`x = ${k.fmt(X1, 1)}`, X1, 0, C.pink, { dx: -6, dy: -10, align: "right", font: `600 12px ${F.ui}` });
    P.line(xm, 0, xm, Am, k.alpha(C.amber, .6), 1.2, [4, 4]); P.point(xm, Am, C.amber, 6.5); P.label(`max ${k.fmt(Am, 1)} m²`, xm, Am, C.amber, { dx: 8, dy: -10, font: `600 12px ${F.ui}` });
    P.point(x0, Af(x0), C.text, 5, true);
    const at = Math.abs(x0 - xm) < 1e-9, edge = x0 === 0 || x0 === X1;
    k.setRO(`${RO0}<div><h2>Maximum area</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${k.fmt(Am, 2)}</span> <span style="font-size:.5em;color:var(--muted)">m² at x = ${k.fmt(xm, 2)} m</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`<i>A</i>(<i>x</i>) = <i>x</i>(${wall ? `${Pp} − 2<i>x</i>` : `${Pp / 2} − <i>x</i>`}) = ${wall ? `−2<i>x</i><sup>2</sup> + ${Pp}<i>x</i>` : `−<i>x</i><sup>2</sup> + ${Pp / 2}<i>x</i>`}`)}<span class="lbl">${wall ? "fence on three sides: two widths and one length use P" : "fence on four sides: the length is half the perimeter minus x"}</span></div>
        <div class="row">${M(`<i>x</i> = −<i>b</i>/2<i>a</i> = ${k.fmt(xm, 2)}`)}<span class="lbl">vertex: halfway between the zeros</span></div>
        <div class="row">${M(`<span class="c3"><i>x</i> = 0, <i>x</i> = ${k.fmt(X1, 2)}</span>`)}<span class="lbl">zeros: no width, or no length left</span></div>
        <div class="row">${M(`<i>A</i>(${k.fmt(x0, 1)})`)} = <span class="v">${k.fmt(Af(x0), 2)} m²</span><span class="lbl">your rectangle: ${k.fmt(x0, 1)} × ${k.fmt(L_(x0), 1)}</span></div>
      </div>
      <div class="landmark${at || edge ? " hit" : ""}"><div class="big">${at ? `<span class="c1">maximum: ${k.fmt(xm, 1)} × ${k.fmt(L_(xm), 1)}</span>` : edge ? "zero area" : M(`${k.fmt(Am - Af(x0), 2)} m² short of the max`)}</div><div class="note">${at ? (wall ? "With a wall, the best pen is twice as long as it is wide." : "Without a wall the best rectangle is a square.") : edge ? "At a zero of A(x) the rectangle collapses to a line." : "Drag across the graph or use the slider to find the top of the parabola."}</div></div>`);
  }
  k.loop(dt => { if (mode === "proj") proj(dt); else fence(); });
};

})();
