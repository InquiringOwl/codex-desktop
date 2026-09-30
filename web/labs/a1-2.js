/* ============ Labs: Algebra I (polynomials, radicals, lines, systems) ============ */
(function(){
const L = window.LABS;

/* ---------- shared helpers ---------- */
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const ng = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const SUPD = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const sup = n => String(n).split("").map(ch => ch === "-" ? "⁻" : SUPD[+ch]).join("");
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ipow = (b, e) => { let r = 1; for (let i = 0; i < e; i++) r *= b; return r; };
// exact rationals
function Q(n, d = 1){ if (typeof n === "object") return n; if (d === 0) throw new Error("zero denominator"); if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; }
const qa = (a, b) => (a = Q(a), b = Q(b), Q(a.n * b.d + b.n * a.d, a.d * b.d));
const qs = (a, b) => (a = Q(a), b = Q(b), Q(a.n * b.d - b.n * a.d, a.d * b.d));
const qm = (a, b) => (a = Q(a), b = Q(b), Q(a.n * b.n, a.d * b.d));
const qd = (a, b) => (a = Q(a), b = Q(b), Q(a.n * b.d, a.d * b.n));
const qneg = a => (a = Q(a), Q(-a.n, a.d));
const qv = a => (a = Q(a), a.n / a.d);
const qz = a => Q(a).n === 0;
const qeq = (a, b) => (a = Q(a), b = Q(b), a.n === b.n && a.d === b.d);
const qcmp = (a, b) => Math.sign(qs(a, b).n);
const fracH = (n, d, cls = "") => `<span class="m ${cls}"><span class="fr"><span>${n}</span><span>${d}</span></span></span>`;
const qh = (a, cls = "") => { a = Q(a); return a.d === 1 ? `<span class="${cls}">${ng(a.n)}</span>` : `${a.n < 0 ? `<span class="${cls}">−</span>` : ""}${fracH(Math.abs(a.n), a.d, cls)}`; };
const qt = a => { a = Q(a); return (a.n < 0 ? "−" : "") + Math.abs(a.n) + (a.d !== 1 ? "/" + a.d : ""); };
const xp = (e, v = "x") => e <= 0 ? "" : `<i>${v}</i>${e > 1 ? `<sup>${e}</sup>` : ""}`;
const xt = (e, v = "x") => e <= 0 ? "" : v + (e > 1 ? sup(e) : "");
// terms: [{c (number|Q), vh (variable html), cls, keep}]
function polyH(terms, zero = "0"){
  let out = "", first = true;
  for (const t of terms) {
    const q = Q(t.c); if (q.n === 0 && !t.keep) continue;
    const cls = t.cls || "", neg = q.n < 0, a = Math.abs(q.n), v = t.vh || "";
    const coef = (a === 1 && q.d === 1 && v) ? "" : (q.d === 1 ? String(a) : fracH(a, q.d));
    out += first ? (neg ? `<span class="${cls}">−</span>` : "") : ` <span class="${cls}">${neg ? "−" : "+"}</span> `;
    out += `<span class="${cls}">${coef}${v}</span>`; first = false;
  }
  return first ? zero : out;
}
// text version for canvas: terms [{c, vt}]
function polyT(terms, zero = "0"){
  let out = "", first = true;
  for (const t of terms) {
    const q = Q(t.c); if (q.n === 0 && !t.keep) continue;
    const a = Math.abs(q.n), v = t.vt || "";
    const coef = (a === 1 && q.d === 1 && v) ? "" : (q.d === 1 ? String(a) : a + "/" + q.d);
    out += first ? (q.n < 0 ? "−" : "") : (q.n < 0 ? " − " : " + ");
    out += coef + v; first = false;
  }
  return first ? zero : out;
}
// coefficient array (high → low degree) as terms
const arrTerms = (arr, cls, v = "x") => arr.map((c, i) => ({ c, vh: xp(arr.length - 1 - i, v), vt: xt(arr.length - 1 - i, v), cls }));
const lineH = (m, b) => `<i>y</i> = ${polyH([{ c: m, vh: "<i>x</i>" }, { c: b }])}`;
const radH = (coef, rad, cc = "c2", rc = "c4") => { if (rad === 1) return `<span class="${cc}">${ng(coef)}</span>`; const cs = coef === 1 ? "" : coef === -1 ? "−" : ng(coef); return `<span class="${cc}">${cs}</span>√<span class="a12-rad ${rc}">${rad}</span>`; };
function sqf(n){ let f = 1; for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) if (n % (i * i) === 0) { f = i; break; } return [f, n / (f * f)]; }
const isSq = n => n >= 0 && Math.round(Math.sqrt(n)) ** 2 === n;
// scroll a DOM stage just enough to show its current step (never scrolls the page)
const showCur = dom => { const el = dom.querySelector(".a12-st.cur"); if (!el) return; const r = el.getBoundingClientRect(), R = dom.getBoundingClientRect(); if (r.bottom > R.bottom) dom.scrollTop += r.bottom - R.bottom + 8; else if (r.top < R.top) dom.scrollTop -= R.top - r.top + 8; };

(function css(){
  if (document.getElementById("a12-css")) return;
  const s = document.createElement("style"); s.id = "a12-css";
  s.textContent = `
.a12-rad{border-top:1.5px solid currentColor;padding:0 .08em;margin-left:.04em}
.a12-flex{display:flex;flex-wrap:wrap;gap:14px 18px;align-items:flex-start;justify-content:center;padding-top:44px}
.a12-steps{flex:1 1 300px;min-width:0}
.a12-gbox{flex:1 1 260px;min-width:0;max-width:420px;height:280px;position:relative;border:1px solid var(--line);border-radius:4px;background:rgba(9,13,21,.55)}
.a12-st{font:400 clamp(17px,2.2vw,22px)/1.45 var(--math);text-align:center;padding:5px 4px;color:var(--faint);border-radius:4px}
.a12-st.cur{color:var(--text);background:rgba(255,255,255,.03)}
.a12-st .say{display:block;font:12.5px/1.4 var(--sans);color:var(--faint);margin-top:2px}
.a12-st.cur .say{color:var(--muted)}
.a12-st .ok{color:var(--green)} .a12-st .bad{color:var(--red)}
.a12-ld{border-collapse:collapse;margin:6px auto 0;font:400 clamp(15px,2.2vw,23px)/1.35 var(--math)}
.a12-ld td{padding:2px 7px;text-align:right;white-space:nowrap;color:var(--muted)}
.a12-ld td.bar{border-top:2px solid var(--muted)}
.a12-ld td.dv{border-right:2px solid var(--muted);border-bottom-right-radius:10px}
.a12-ld td.ul{border-bottom:1px solid var(--line-2)}
.a12-ld td.z{color:var(--faint)}
.a12-ld .tok{padding:0 .1em}
.a12-say{font:14px/1.45 var(--sans);color:var(--muted);text-align:center;max-width:560px;margin:14px auto 0}
.a12-fl{font:400 clamp(15px,2vw,20px)/1.7 var(--math);text-align:center;color:var(--muted)}
.a12-fl .amb{color:var(--amber)}`;
  document.head.appendChild(s);
})();

function X(k){
  const { C, F } = k;
  const runs = s => s.match(/[a-zA-Z]+|[^a-zA-Z]+/g) || [];
  const fnt = (r, size, wt) => `${/[a-zA-Z]/.test(r) ? "italic " : ""}${wt ? wt + " " : ""}${size}px ${F.math}`;
  const mw = (d, s, size, wt) => runs(s).reduce((w, r) => w + d.width(r, fnt(r, size, wt)), 0);
  function mt(d, s, x, y, o = {}){ const size = o.size || 16, W = mw(d, s, size, o.wt); let cx = o.align === "center" ? x - W / 2 : o.align === "right" ? x - W : x; for (const r of runs(s)) cx += d.text(r, cx, y, { font: fnt(r, size, o.wt), color: o.color || C.text, base: o.base || "alphabetic" }); return W; }
  // expression items: "text" | [text, color] | {rad:[items], c} | {fr:[[num],[den]], c} | {sp: em}
  function ex(d, items, x, y, size, color, draw = true){
    let cx = x;
    for (const it of items) {
      if (it == null || it === "") continue;
      if (typeof it === "string" || Array.isArray(it)) { const s = Array.isArray(it) ? it[0] : it, col = Array.isArray(it) ? it[1] : color; if (draw) mt(d, s, cx, y, { size, color: col }); cx += mw(d, s, size); }
      else if (it.rad) { const iw = ex(d, it.rad, 0, 0, size, color, false), col = it.c || color, lw = Math.max(1.2, size / 16);
        if (draw) { d.line(cx, y - .30 * size, cx + .12 * size, y - .36 * size, col, lw); d.line(cx + .12 * size, y - .36 * size, cx + .28 * size, y + .06 * size, col, lw); d.line(cx + .28 * size, y + .06 * size, cx + .52 * size, y - .86 * size, col, lw); d.line(cx + .52 * size, y - .86 * size, cx + .64 * size + iw, y - .86 * size, col, lw); ex(d, it.rad, cx + .58 * size, y, size, color, true); }
        cx += .58 * size + iw + .1 * size; }
      else if (it.fr) { const s2 = size * .82, nw = ex(d, it.fr[0], 0, 0, s2, color, false), dw = ex(d, it.fr[1], 0, 0, s2, color, false), W = Math.max(nw, dw) + .3 * size;
        if (draw) { const bar = y - .3 * size; d.line(cx, bar, cx + W, bar, it.c || color, Math.max(1, size / 18)); ex(d, it.fr[0], cx + (W - nw) / 2, bar - .26 * size, s2, color, true); ex(d, it.fr[1], cx + (W - dw) / 2, bar + .26 * size + s2 * .72, s2, color, true); }
        cx += W + .08 * size; }
      else if (it.sp) cx += it.sp * size;
    }
    return cx - x;
  }
  const exW = (d, items, size) => ex(d, items, 0, 0, size, C.text, false);
  // put a canvas from k.canvas() inside a DOM box and keep it sized to that box
  function boxCanvas(host){
    const o = k.canvas(); host.appendChild(o.cv);
    const sync = () => { const r = host.getBoundingClientRect(); const w = Math.max(1, r.width), h = Math.max(1, r.height); if (Math.abs(w - o.w) > .5 || Math.abs(h - o.h) > .5 || o.cv.width !== Math.round(w * o.dpr)) { o.w = w; o.h = h; o.cv.width = Math.round(w * o.dpr); o.cv.height = Math.round(h * o.dpr); } };
    const b = o.begin; o.begin = () => { sync(); b(); };
    return o;
  }
  return { mw, mt, ex, exW, boxCanvas };
}
// draggable points on a plot: getGeo() returns the last plot; pts: {name: obj with x,y}; onMove(name, dataXY)
function dragger(c, getGeo, pick, onMove){
  let drag = null;
  c.cv.style.cursor = "pointer";
  c.cv.addEventListener("pointerdown", e => { const P = getGeo(); if (!P) return; const p = c.xy(e); drag = pick(p, P); if (drag == null) return; c.cv.setPointerCapture(e.pointerId); onMove(drag, P.inv(p.x, p.y), P); });
  c.cv.addEventListener("pointermove", e => { if (drag == null) return; const P = getGeo(); const p = c.xy(e); onMove(drag, P.inv(p.x, p.y), P); });
  const up = () => drag = null; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  return () => drag;
}

/* ---------- a1-poly-mult: generic rectangle ---------- */
L["a1-poly-mult"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = X(k);
  let mode = "bb", a = 2, b = 3; const S2 = { bb: [1, -4], bt: [1, -2, 3] };
  let st = null;
  const cnt = () => 2 * (mode === "bb" ? 2 : 3) + 1;
  k.modes([["bb", "Binomial × binomial"], ["bt", "Binomial × trinomial"]], mode, m => { mode = m; build(); });
  const full = () => { if (st) st.k = cnt(); };
  function build(){
    if (st) st.pause(); k.ctl.innerHTML = "";
    const sA = k.slider(`<span class="c2"><i>a</i></span>`, 1, 5, 1, a, v => { a = v; full(); });
    const sB = k.slider(`<span class="c2"><i>b</i></span>`, -9, 9, 1, b, v => { b = v; full(); });
    const s2 = S2[mode], names = mode === "bb" ? ["c", "d"] : ["c", "d", "e"];
    const sl = names.map((nm, i) => k.slider(`<span class="c3"><i>${nm}</i></span>`, i === 0 ? 1 : -9, i === 0 ? (mode === "bb" ? 5 : 4) : 9, 1, s2[i], v => { s2[i] = v; full(); }));
    st = k.stepper(cnt, () => {}, { ms: 700 }); st.k = cnt();
    if (mode === "bb") {
      k.button("Square (ax + b)²", () => { s2[0] = Math.min(5, a); s2[1] = b; sl[0].set(s2[0]); sl[1].set(s2[1]); full(); }, "btn ghost");
      k.button("Conjugates", () => { if (b === 0) { b = 3; sB.set(3); } s2[0] = a; s2[1] = -b; sl[0].set(a); sl[1].set(-b); full(); }, "btn ghost");
    }
    void sA;
  }
  build();
  const termT = (cf, e, lead) => { const aa = Math.abs(cf), v = xt(e); return (cf < 0 ? "−" : lead ? "" : "+") + ((aa === 1 && v) ? "" : String(aa)) + v; };
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const P = [[a, 1], [b, 0]], R = mode === "bb" ? [[S2.bb[0], 1], [S2.bb[1], 0]] : [[S2.bt[0], 2], [S2.bt[1], 1], [S2.bt[2], 0]];
    const rows = 2, cols = R.length, n = rows * cols, K = st.k, combine = K > n;
    const top = 70, bottom = 96, left = w < 520 ? 52 : 90;
    const cw = Math.min(170, (w - left - 20) / cols), ch = Math.min(120, (h - top - bottom) / rows);
    const gw = cw * cols, gh = ch * rows, ox = left + (w - left - 20 - gw) / 2, oy = top + (h - top - bottom - gh) / 2;
    const sz = Math.max(13, Math.min(24, cw / 4.6, ch / 2.6));
    // like-term counts
    const cells = []; const byDeg = {};
    for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) { const cf = P[i][0] * R[j][0], dg = P[i][1] + R[j][1]; cells.push({ i, j, cf, dg }); if (cf !== 0) byDeg[dg] = (byDeg[dg] || 0) + 1; }
    const like = dg => byDeg[dg] > 1;
    // edge labels
    for (let i = 0; i < rows; i++) T.mt(d, termT(P[i][0], P[i][1], i === 0), ox - 12, oy + (i + .5) * ch + sz * .35, { size: sz, color: C.cyan, align: "right" });
    for (let j = 0; j < cols; j++) T.mt(d, termT(R[j][0], R[j][1], j === 0), ox + (j + .5) * cw, oy - 14, { size: sz, color: C.pink, align: "center" });
    d.line(ox - 4, oy, ox - 4, oy + gh, k.alpha(C.cyan, .6), 3); d.line(ox, oy - 4, ox + gw, oy - 4, k.alpha(C.pink, .6), 3);
    cells.forEach((cl, idx) => {
      const x = ox + cl.j * cw, y = oy + cl.i * ch, vis = K > idx, green = combine && cl.cf !== 0 && like(cl.dg), hot = !combine && K === idx + 1;
      d.rect(x, y, cw, ch, vis ? k.alpha(green ? C.green : C.amber, green ? .16 : hot ? .2 : .08) : null, green ? C.green : hot ? C.amber : C.line2, green || hot ? 2 : 1);
      if (vis) T.mt(d, cl.cf === 0 ? "0" : termT(cl.cf, cl.dg, true), x + cw / 2, y + ch / 2 + sz * .35, { size: sz, color: cl.cf === 0 ? C.faint : green ? C.green : C.amber, align: "center" });
      else d.text("?", x + cw / 2, y + ch / 2 + 6, { font: `${sz}px ${F.math}`, color: C.faint, align: "center" });
    });
    // sum line
    const ry = oy + gh + 44, rs = Math.min(22, Math.max(14, w / 30));
    let segs;
    if (!combine) { segs = cells.slice(0, Math.min(K, n)).filter(x => x.cf !== 0).map((x, i) => [termT(x.cf, x.dg, i === 0).replace(/^([+−])/, " $1 ").trimStart(), C.amber]); if (!segs.length) segs = [["…", C.faint]]; }
    else { const degs = Object.keys(byDeg).map(Number).sort((p, q) => q - p); const tot = {}; cells.forEach(x => tot[x.dg] = (tot[x.dg] || 0) + x.cf); segs = []; degs.filter(dg => tot[dg] !== 0).forEach((dg, i) => segs.push([termT(tot[dg], dg, i === 0).replace(/^([+−])/, " $1 ").trimStart(), like(dg) ? C.green : C.amber])); if (!segs.length) segs = [["0", C.amber]]; }
    const all = [["= ", C.muted], ...segs.map((s, i) => [i === 0 ? s[0].replace(/^−\s*/, "−") : s[0].replace(/^([+−])\s*/, " $1 "), s[1]])];
    const tw = T.exW(d, all, rs); T.ex(d, all, (w - tw) / 2, ry, rs, C.text);
    d.text(combine ? "like terms combined (green)" : K === 0 ? "each cell = row term × column term" : `partial products: ${Math.min(K, n)} of ${n}`, w / 2, ry + 26, { font: `12px ${F.sans}`, color: C.faint, align: "center" });
    // readout
    const f1 = polyH([{ c: a, vh: xp(1) }, { c: b }]), f2 = polyH(arrTerms(R.map(r => r[0]), ""));
    const tot = {}; cells.forEach(x => tot[x.dg] = (tot[x.dg] || 0) + x.cf);
    const maxd = Math.max(...cells.map(x => x.dg));
    const res = polyH(Array.from({ length: maxd + 1 }, (_, i) => maxd - i).map(dg => ({ c: tot[dg] || 0, vh: xp(dg), cls: like(dg) ? "c5" : "c1" })));
    const tH = (cf, dg, cls) => `<span class="${cls}">${polyH([{ c: cf, vh: xp(dg) }])}</span>`;
    let rows_ = "";
    if (mode === "bb") {
      const nm = ["First", "Outer", "Inner", "Last"], pr = [[0, 0], [0, 1], [1, 0], [1, 1]];
      rows_ = pr.map(([i, j], q) => { const cl = cells[i * 2 + j]; return `<div class="row">${M(`(<span class="c2">${polyH([{ c: P[i][0], vh: xp(P[i][1]) }])}</span>)(<span class="c3">${polyH([{ c: R[j][0], vh: xp(R[j][1]) }])}</span>)`)} = ${M(tH(cl.cf, cl.dg, "c1"))}<span class="lbl">${nm[q]}</span></div>`; }).join("");
    } else {
      rows_ = [0, 1].map(i => `<div class="row">${M(`<span class="c2">${polyH([{ c: P[i][0], vh: xp(P[i][1]) }])}</span> × (${f2})`)} = ${M(polyH(cells.filter(x => x.i === i).map(x => ({ c: x.cf, vh: xp(x.dg), cls: "c1" }))))}<span class="lbl">${i === 0 ? "first term of the binomial times every term" : "second term times every term"}</span></div>`).join("");
    }
    const likeRows = Object.keys(byDeg).map(Number).filter(like).sort((p, q) => q - p).map(dg => `<div class="row">${M(polyH(cells.filter(x => x.dg === dg && x.cf !== 0).map(x => ({ c: x.cf, vh: xp(dg), cls: "c5" }))))} = ${M(tH(tot[dg], dg, "c5"))}<span class="lbl">like terms (same power of <i>x</i>) combine</span></div>`).join("");
    const bbq = S2.bb, sq = mode === "bb" && bbq[0] === a && bbq[1] === b && b !== 0, dos = mode === "bb" && bbq[0] === a && bbq[1] === -b && b !== 0, cancel = mode === "bb" && !dos && b !== 0 && bbq[1] !== 0 && a * bbq[1] + b * bbq[0] === 0;
    let lm;
    if (sq) lm = `<div class="landmark hit"><div class="big">${M(`(<i>a</i><i>x</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup><i>x</i><sup>2</sup> + 2<i>abx</i> + <i>b</i><sup>2</sup>`)}</div><div class="note">A perfect square trinomial: the two middle cells are equal (${ng(a * b)}<i>x</i> each), so the middle term is twice their product, ${ng(2 * a * b)}<i>x</i>. Squaring is not just squaring each term.</div></div>`;
    else if (dos) lm = `<div class="landmark hit"><div class="big">${M(`(<i>a</i><i>x</i> + <i>b</i>)(<i>a</i><i>x</i> − <i>b</i>) = <i>a</i><sup>2</sup><i>x</i><sup>2</sup> − <i>b</i><sup>2</sup>`)}</div><div class="note">Difference of squares: the middle cells are ${ng(a * -b)}<i>x</i> and ${ng(a * b)}<i>x</i>, opposites that cancel.</div></div>`;
    else if (cancel) lm = `<div class="landmark hit"><div class="big">middle terms cancel</div><div class="note">Outer + inner = 0, so the product has no <i>x</i> term.</div></div>`;
    else lm = `<div class="landmark"><div class="big">${M(`${rows} × ${cols} = ${n}`)} partial products</div><div class="note">Every term of one factor meets every term of the other. Degrees add: ${1} + ${cols - 1} = ${maxd}, so the product has degree ${maxd}.</div></div>`;
    k.setRO(`<div><h2>Product</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(`(<span class="c2">${f1}</span>)(<span class="c3">${f2}</span>)`)}<br>${M(`= ${res}`)}</div></div>
      <div class="ro-rows">${rows_}${likeRows}</div>${lm}
      <p class="narr">Press Play to fill the rectangle one cell at a time. ${mode === "bb" ? "Try the Square and Conjugates presets." : ""}</p>`);
  });
};

/* ---------- a1-rational-exp ---------- */
L["a1-rational-exp"] = k => {
  const { C, F, M, fmt } = k; const c = k.canvas(); const d = c.d; const T = X(k);
  let x = 8, m = 2, n = 3;
  const sX = k.slider(`base <i>x</i>`, -64, 128, 1, x, v => x = v);
  const sM = k.slider(`<span class="c3"><i>m</i></span>`, -4, 6, 1, m, v => m = v);
  const sN = k.slider(`<span class="c4"><i>n</i></span>`, 1, 6, 1, n, v => n = v);
  const pre = (bx, bm, bn) => { x = bx; m = bm; n = bn; sX.set(bx); sM.set(bm); sN.set(bn); };
  k.button("16^(3/4)", () => pre(16, 3, 4), "btn ghost");
  k.button("27^(−2/3)", () => pre(27, -2, 3), "btn ghost");
  k.button("(−8)^(2/3)", () => pre(-8, 2, 3), "btn ghost");
  k.button("2^(1/2)", () => pre(2, 1, 2), "btn ghost");
  const rs = q => q === 1 ? "" : q === 2 ? "√" : q === 3 ? "∛" : q === 4 ? "∜" : sup(q) + "√";
  function compute(){
    const g = gcd(m, n) || n, mm = m / g, nn = n / g;
    const o = { mm, nn, reduced: g > 1 };
    if (x === 0) { o.root = { ex: true, v: 0 }; if (mm > 0) { o.st = "ok"; o.res = Q(0); } else { o.st = "undef"; } return o; }
    if (x < 0 && nn % 2 === 0) { o.st = "nonreal"; return o; }
    const rr = Math.sign(x) * Math.round(Math.pow(Math.abs(x), 1 / nn)), exact = ipow(rr, nn) === x;
    const rv = exact ? rr : Math.sign(x) * Math.pow(Math.abs(x), 1 / nn);
    o.root = { ex: exact, v: rv }; o.st = "ok"; o.val = Math.pow(rv, mm);
    if (exact) o.res = mm >= 0 ? Q(ipow(rr, mm)) : Q(1, ipow(rr, -mm));
    return o;
  }
  const numT = q => q.d === 1 ? q.n.toLocaleString("en-US").replace("-", "−") : qt(q);
  k.loop(() => {
    c.begin(); const { w, h } = c; const R = compute();
    // pipeline
    const aw = Math.min(78, w * .14), bw = Math.min(140, (w - 32 - 2 * aw) / 3), bh = 58, tot = 3 * bw + 2 * aw, x0 = (w - tot) / 2, by = 76;
    const boxes = [
      { lab: "x", val: String(x).replace("-", "−"), col: C.text },
      { lab: R.nn === 1 ? "x" : rs(R.nn) + "x", val: R.st === "nonreal" ? "not real" : R.root ? (R.root.ex ? String(R.root.v).replace("-", "−") : "≈ " + fmt(R.root.v, 4)) : "—", col: C.violet },
      { lab: "result", val: R.st === "nonreal" ? "—" : R.st === "undef" ? "undefined" : R.res ? numT(R.res) : "≈ " + fmt(R.val, 4), col: C.amber }];
    boxes.forEach((B, i) => {
      const bx = x0 + i * (bw + aw);
      d.rr(bx, by, bw, bh, 6, k.alpha(B.col, i ? .12 : .05), B.col, i ? 1.6 : 1);
      d.text(B.lab, bx + bw / 2, by - 8, { font: `${/[a-z]/.test(B.lab) && B.lab.length < 5 ? "italic " : ""}13px ${F.math}`, color: C.muted, align: "center" });
      let fs = 22; while (fs > 10 && d.width(B.val, `600 ${fs}px ${F.mono}`) > bw - 12) fs--;
      d.text(B.val, bx + bw / 2, by + bh / 2, { font: `600 ${fs}px ${F.mono}`, color: B.val === "not real" || B.val === "undefined" ? C.red : B.col, align: "center", base: "middle" });
      if (i < 2) { const ax1 = bx + bw + 6, ax2 = bx + bw + aw - 6; d.arrow(ax1, by + bh / 2, ax2, by + bh / 2, i === 0 ? C.violet : C.pink, 2);
        const lab = i === 0 ? (R.nn === 1 ? "n = 1" : rs(R.nn) + " ") : "^" + String(R.mm).replace("-", "−");
        d.text(lab, (ax1 + ax2) / 2, by + bh / 2 - 10, { font: `600 15px ${F.math}`, color: i === 0 ? C.violet : C.pink, align: "center" }); }
    });
    d.text(i18("take the root", "then the power"), w / 2, by + bh + 22, { font: `12px ${F.sans}`, color: C.faint, align: "center" });
    // graph of y = x^(1/nn)
    const nnG = R.nn, X1 = Math.max(10, Math.abs(x) * 1.15), odd = nnG % 2 === 1;
    const rt = v => odd ? Math.sign(v) * Math.pow(Math.abs(v), 1 / nnG) : (v < 0 ? NaN : Math.pow(v, 1 / nnG));
    const Ym = Math.max(2, Math.pow(X1, 1 / nnG) * 1.2);
    const P = k.plot(c, { xmin: odd ? -X1 : -X1 * .06, xmax: X1, ymin: odd ? -Ym : -Ym * .12, ymax: Ym, pad: { l: 40, r: 16, t: by + bh + 40, b: 26 } });
    if (P.height > 60) {
      P.grid(); P.axes(); P.fn(rt, C.violet, 2.5);
      const lx = P.left + 10, ly = P.top + 16; const wv = d.pow("y = x", nnG === 1 ? "1" : "1/" + nnG, lx, ly, { size: 15, color: C.violet });
      void wv;
      if (R.st === "ok" && x !== 0) { const ry = R.root.v; P.clip(() => { d.line(P.X(x), P.Y(0), P.X(x), P.Y(ry), k.alpha(C.text, .35), 1, [4, 3]); d.line(P.X(0), P.Y(ry), P.X(x), P.Y(ry), k.alpha(C.violet, .6), 1, [4, 3]); }); P.point(x, ry, C.violet, 6); }
    }
    // readout
    const exH = `${x < 0 ? `(${ng(x)})` : x}<sup><span class="c3">${ng(m)}</span>/<span class="c4">${n}</span></sup>`;
    const resH = R.st === "nonreal" ? `<span class="c1">not real</span>` : R.st === "undef" ? `<span class="c1">undefined</span>` : R.res ? qh(R.res, "num c1") : `<span class="num c1">${fmt(R.val, 4)}</span>`;
    const eqS = R.st === "ok" && !R.res ? " ≈ " : " = ";
    const bx_ = x < 0 ? `(${ng(x)})` : String(x);
    const rootH = R.nn === 1 ? bx_ : `${R.nn === 2 ? "" : `<sup class="c4">${R.nn}</sup>`}<span class="c4">√</span><span class="a12-rad">${ng(x)}</span>`;
    let rowsH = "";
    if (R.reduced) rowsH += `<div class="row">${M(`<span class="c3">${ng(m)}</span>/<span class="c4">${n}</span> = <span class="c3">${ng(R.mm)}</span>/<span class="c4">${R.nn}</span>`)}<span class="lbl">reduce the exponent first</span></div>`;
    rowsH += `<div class="row">${M(`<i>x</i><sup><span class="c3">m</span>/<span class="c4">n</span></sup> = (<sup class="c4">n</sup><span class="c4">√</span><i>x</i>)<sup class="c3">m</sup>`)}<span class="lbl">the denominator is the root, the numerator is the power</span></div>`;
    if (R.st === "ok") {
      rowsH += `<div class="row">${M(`(${rootH})<sup class="c3">${ng(R.mm)}</sup> = ${R.root.ex ? `(<span class="c4">${ng(R.root.v)}</span>)` : `(≈ <span class="c4">${fmt(R.root.v, 4)}</span>)`}<sup class="c3">${ng(R.mm)}</sup>`)}${eqS}${resH}<span class="lbl">root first keeps the numbers small</span></div>`;
      if (R.mm < 0 && x !== 0) rowsH += `<div class="row">${M(`<i>x</i><sup>−<i>p</i></sup> = 1 / <i>x</i><sup><i>p</i></sup>`)}<span class="lbl">a negative exponent means reciprocal</span></div>`;
    }
    let lm;
    if (R.st === "nonreal") lm = `<div class="landmark hit"><div class="big">${M(`${R.nn === 2 ? "" : `<sup>${R.nn}</sup>`}√(${ng(x)})`)} is not real</div><div class="note">An even root of a negative number has no real value: no real number to an even power is negative.</div></div>`;
    else if (R.st === "undef") lm = `<div class="landmark hit"><div class="big">${M(R.mm === 0 ? "0<sup>0</sup>" : `0<sup>${ng(R.mm)}</sup> = 1/0`)} is undefined</div><div class="note">${R.mm === 0 ? "Zero to the zero power is left undefined here." : "A negative exponent on zero would divide by zero."}</div></div>`;
    else if (R.res) lm = `<div class="landmark hit"><div class="big">${M(`${exH} = `)}${qh(R.res, "c1")}</div><div class="note">${R.nn === 1 ? "The exponent reduces to a whole number, so no root is needed and the answer is exact." : `${ng(x)} is a perfect ${["", "", "square", "cube", "fourth power", "fifth power", "sixth power"][R.nn]}: ${R.root.v < 0 ? `(${ng(R.root.v)})` : R.root.v}${sup(R.nn)} = ${ng(x)}, so the answer is exact.`}</div></div>`;
    else lm = `<div class="landmark"><div class="big">${M(`${exH} ≈ ${fmt(R.val, 4)}`)}</div><div class="note">${ng(x)} is not a perfect ${["", "", "square", "cube", "fourth power", "fifth power", "sixth power"][R.nn]}, so the root is irrational. In radical form: ${M(`(${rootH})<sup>${ng(R.mm)}</sup>`)}.</div></div>`;
    k.setRO(`<div><h2>Rational exponent</h2><div class="ro-big" style="margin-top:8px">${M(exH)}${eqS}${resH}</div></div>
      <div class="ro-rows">${rowsH}</div>${lm}
      <p class="narr">Try a negative base with an even root, or set <i>m</i> = 0.</p>`);
  });
  function i18(a1, b1){ return a1 + ", " + b1; }
};

/* ---------- a1-par-perp ---------- */
L["a1-par-perp"] = k => {
  const { C, F, M, fmt } = k; const c = k.canvas(); const d = c.d; const T = X(k);
  let rise = 1, run = 2; const A = { x: -2, y: 1 }, Pt = { x: 2, y: 7 }; let geo = null;
  k.slider(`<span class="c2">rise</span>`, -6, 6, 1, rise, v => rise = v);
  k.slider(`<span class="c2">run</span>`, 0, 6, 1, run, v => run = v);
  k.button("Reset", () => { A.x = -2; A.y = 1; Pt.x = 2; Pt.y = 7; }, "btn ghost");
  k.hint("Drag P (or the cyan point A)");
  dragger(c, () => geo, (p, P) => { const dA = Math.hypot(p.x - P.X(A.x), p.y - P.Y(A.y)); const dP = Math.hypot(p.x - P.X(Pt.x), p.y - P.Y(Pt.y)); return dA < 24 && dA < dP ? "A" : "P"; },
    (nm, v, P) => { const o = nm === "A" ? A : Pt; o.x = clamp(Math.round(v.x), Math.ceil(P.xmin), Math.floor(P.xmax)); o.y = clamp(Math.round(v.y), Math.ceil(P.ymin), Math.floor(P.ymax)); });
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 30, r: 12, t: 48, b: 24 } }); geo = P;
    const ok = rise !== 0 || run !== 0;
    P.grid(1); P.axes();
    if (!ok) { d.text("rise = run = 0 gives no direction", w / 2, h / 2, { font: `16px ${F.sans}`, color: C.red, align: "center" });
      k.setRO(`<div><h2>Slopes</h2></div><div class="landmark hit"><div class="big">no line</div><div class="note">A slope needs a direction: set rise or run to something other than 0.</div></div>`); return; }
    const u = { x: run, y: rise }, v = { x: -rise, y: run }, ul = Math.hypot(u.x, u.y);
    const far = (p, dir, col, wd) => { const L_ = 400 / Math.hypot(dir.x, dir.y); P.line(p.x - dir.x * L_, p.y - dir.y * L_, p.x + dir.x * L_, p.y + dir.y * L_, col, wd); };
    const onBase = (Pt.x - A.x) * rise - (Pt.y - A.y) * run === 0;
    far(A, u, C.cyan, 2.5); if (!onBase) far(Pt, u, C.pink, 2.5); else far(Pt, u, C.pink, 2, ); far(Pt, v, C.amber, 2.5);
    // foot of perpendicular (exact)
    const t = Q((Pt.x - A.x) * u.x + (Pt.y - A.y) * u.y, u.x * u.x + u.y * u.y);
    const Fx = qa(A.x, qm(t, u.x)), Fy = qa(A.y, qm(t, u.y)), fx = P.X(qv(Fx)), fy = P.Y(qv(Fy));
    const uh = { x: u.x / ul, y: -u.y / ul }; let vh = { x: v.x / ul, y: -v.y / ul };
    if (!onBase) { const dx = P.X(Pt.x) - fx, dy = P.Y(Pt.y) - fy; if (dx * vh.x + dy * vh.y < 0) vh = { x: -vh.x, y: -vh.y }; }
    const sq = (px, py, a1, b1, s) => { const g = c.g; g.save(); g.strokeStyle = C.amber; g.lineWidth = 1.6; g.beginPath(); g.moveTo(px + a1.x * s, py + a1.y * s); g.lineTo(px + a1.x * s + b1.x * s, py + a1.y * s + b1.y * s); g.lineTo(px + b1.x * s, py + b1.y * s); g.stroke(); g.restore(); };
    sq(fx, fy, uh, vh, 12); if (!onBase) sq(P.X(Pt.x), P.Y(Pt.y), uh, { x: -vh.x, y: -vh.y }, 10);
    d.circle(fx, fy, 3.5, C.amber);
    P.point(A.x, A.y, C.cyan, 7); P.label("A", A.x, A.y, C.cyan, { dx: 10, dy: 16 });
    d.circle(P.X(Pt.x), P.Y(Pt.y), 8, C.ink, C.text, 2.5); P.label(`P(${ng(Pt.x)}, ${ng(Pt.y)})`, Pt.x, Pt.y, C.text, { dx: 12, dy: -10, font: `600 13px ${F.mono}` });
    // equations
    const vert = run === 0, horiz = rise === 0, m = vert ? null : Q(rise, run), mp = horiz ? null : vert ? Q(0) : Q(-run, rise);
    const eq = (slope, p, cls) => slope === null ? `<span class="${cls}"><i>x</i> = ${ng(p.x)}</span>` : `<span class="${cls}">${lineH(slope, qs(p.y, qm(slope, p.x)))}</span>`;
    const slopeH = (s, cls) => s === null ? `<span class="${cls}">undefined</span>` : qh(s, cls);
    const dist = Math.abs((Pt.x - A.x) * rise - (Pt.y - A.y) * run) / ul;
    let lm;
    if (vert || horiz) lm = `<div class="landmark hit"><div class="big">vertical ⟂ horizontal</div><div class="note">The ${vert ? "base line is vertical (undefined slope)" : "base line is horizontal (slope 0)"}, so the perpendicular is ${vert ? "horizontal" : "vertical"}. The product-equals −1 rule needs both slopes to exist, so it does not apply here.</div></div>`;
    else if (onBase) lm = `<div class="landmark hit"><div class="big">P lies on the base line</div><div class="note">The parallel through P is the base line itself (a line is parallel to itself here). The perpendicular still crosses it at P.</div></div>`;
    else lm = `<div class="landmark"><div class="big">${M(`${slopeH(m, "c3")} · ${mp && mp.n < 0 ? `(${slopeH(mp, "c1")})` : slopeH(mp, "c1")} = −1`)}</div><div class="note">Perpendicular slopes are negative reciprocals: flip rise/run to run/rise and change the sign. Parallel lines share a slope and never meet.</div></div>`;
    k.setRO(`<div><h2>Slopes</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<i>m</i> = ${slopeH(m, "c2")}`)} <span style="color:var(--faint)">·</span> ${M(`<i>m</i><sub>⟂</sub> = ${slopeH(mp, "c1")}`)}</div></div>
      <div class="ro-rows">
        <div class="row">${M(eq(m, A, "c2"))}<span class="lbl">base line, slope ${vert ? "undefined" : `rise/run = ${ng(rise)}/${run}`}, through A(${ng(A.x)}, ${ng(A.y)})</span></div>
        <div class="row">${M(eq(m, Pt, "c3"))}<span class="lbl">parallel: same slope, through P</span></div>
        <div class="row">${M(eq(mp === null ? null : mp, Pt, "c1"))}<span class="lbl">perpendicular: ${vert ? "horizontal" : horiz ? "vertical" : `slope −run/rise = ${qt(Q(-run, rise))}`}, through P</span></div>
        <div class="row">${M("distance P to base")} <span class="v">${onBase ? "0" : "≈ " + fmt(dist, 3)}</span><span class="lbl">measured along the perpendicular, to the amber foot point</span></div>
      </div>${lm}
      <p class="narr">Change the slope and watch the amber line keep its right angle.</p>`);
    void T;
  });
};

/* ---------- a1-sys-graph ---------- */
L["a1-sys-graph"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let m1 = 1, b1 = 1, m2 = -0.5, b2 = 4;
  const s1 = k.slider(`<span class="c2"><i>m</i>₁</span>`, -4, 4, .5, m1, v => m1 = v, v => String(v).replace("-", "−"));
  const t1 = k.slider(`<span class="c2"><i>b</i>₁</span>`, -8, 8, 1, b1, v => b1 = v);
  const s2 = k.slider(`<span class="c3"><i>m</i>₂</span>`, -4, 4, .5, m2, v => m2 = v, v => String(v).replace("-", "−"));
  const t2 = k.slider(`<span class="c3"><i>b</i>₂</span>`, -8, 8, 1, b2, v => b2 = v);
  const set = (a, b, c_, e) => { m1 = a; b1 = b; m2 = c_; b2 = e; s1.set(a); t1.set(b); s2.set(c_); t2.set(e); };
  k.button("Parallel", () => set(m1, b1, m1, b1 + (b1 <= 4 ? 3 : -3)), "btn ghost");
  k.button("Same line", () => set(m1, b1, m1, b1), "btn ghost");
  k.button("Reset", () => set(1, 1, -.5, 4), "btn ghost");
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, pad: { l: 32, r: 12, t: 16, b: 24 } });
    P.grid(1); P.axes();
    const M1 = Q(Math.round(m1 * 2), 2), M2 = Q(Math.round(m2 * 2), 2), B1 = Q(b1), B2 = Q(b2);
    const same = qeq(M1, M2) && qeq(B1, B2), par = qeq(M1, M2) && !same;
    P.fn(x => m1 * x + b1, C.cyan, 3);
    P.fn(x => m2 * x + b2, C.pink, same ? 2 : 2.5, P.xmin, P.xmax, same ? [8, 8] : null);
    let sx = null, sy = null, onGrid = false, vis = false;
    if (!same && !par) { sx = qd(qs(B2, B1), qs(M1, M2)); sy = qa(qm(M1, sx), B1); onGrid = sx.d === 1 && sy.d === 1; vis = Math.abs(qv(sx)) <= 10 && Math.abs(qv(sy)) <= 10;
      if (vis) { d.circle(P.X(qv(sx)), P.Y(qv(sy)), 11, k.alpha(C.amber, .2)); P.point(qv(sx), qv(sy), C.amber, 6); const lab = `(${qt(sx)}, ${qt(sy)})`; const right = P.X(qv(sx)) < w - 110, lf = `600 14px ${F.mono}`, lw_ = d.width(lab, lf), lx = P.X(qv(sx)) + (right ? 12 : -12 - lw_), ly = P.Y(qv(sy)) - 12; d.rr(lx - 4, ly - 14, lw_ + 8, 19, 4, k.alpha(C.ink, .85)); P.label(lab, qv(sx), qv(sy), C.amber, { dx: right ? 12 : -12, dy: -12, align: right ? "left" : "right", font: lf }); } }
    const lab = (m, b, col, y0) => { const mx = m === 0 ? "" : (m === 1 ? "" : m === -1 ? "−" : ng(m)) + "x", bs = b === 0 ? (mx ? "" : "0") : mx ? ` ${b < 0 ? "−" : "+"} ${Math.abs(b)}` : ng(b); d.text(`y = ${mx}${bs}`, P.left + 8, y0, { font: `italic 15px ${F.math}`, color: col }); };
    lab(m1, b1, C.cyan, P.top + 18); lab(m2, b2, C.pink, P.top + 38);
    const eq1 = `<span class="c2">${lineH(M1, B1)}</span>`, eq2 = `<span class="c3">${lineH(M2, B2)}</span>`;
    let big, lm, rows = `<div class="row">${M(eq1)}<span class="lbl">line 1: slope ${qt(M1)}, y-intercept ${ng(b1)}</span></div><div class="row">${M(eq2)}<span class="lbl">line 2: slope ${qt(M2)}, y-intercept ${ng(b2)}</span></div>`;
    if (same) { big = `<span class="c1">infinitely many</span>`; lm = `<div class="landmark hit"><div class="big">same line: every point is a solution</div><div class="note">Equal slopes and equal intercepts mean the two equations describe one line. The system is dependent.</div></div>`; }
    else if (par) { big = `<span class="c1">no solution</span>`; lm = `<div class="landmark hit"><div class="big">parallel: the lines never meet</div><div class="note">Same slope ${qt(M1)} but different intercepts (${ng(b1)} and ${ng(b2)}). No point is on both lines, so the system is inconsistent.</div></div>`; }
    else {
      big = `(${qh(sx, "num c1")}, ${qh(sy, "num c1")})`;
      rows += `<div class="row">${M(`${polyH([{ c: M1, vh: "<i>x</i>", cls: "c2" }, { c: B1, cls: "c2" }])} = ${polyH([{ c: M2, vh: "<i>x</i>", cls: "c3" }, { c: B2, cls: "c3" }])}`)}<span class="lbl">at the crossing both lines have the same y, so set them equal</span></div>
        <div class="row">${M(`<i>x</i> = ${qh(sx, "c1")}, <i>y</i> = ${qh(sy, "c1")}`)}<span class="lbl">solve for x, then substitute to get y</span></div>`;
      lm = onGrid ? `<div class="landmark hit"><div class="big">one solution: (${qt(sx)}, ${qt(sy)})</div><div class="note">Different slopes always cross exactly once. This crossing sits on a grid point${vis ? "" : " outside the visible window"}; check it in both equations.</div></div>`
        : `<div class="landmark"><div class="big">one solution, between grid lines</div><div class="note">The crossing (${qt(sx)}, ${qt(sy)}) ${vis ? "is not on a grid point, so reading the graph only estimates it" : "is outside the visible window"}. Algebra gives the exact value.</div></div>`;
    }
    k.setRO(`<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${big}</div></div><div class="ro-rows">${rows}</div>${lm}
      <p class="narr">Different slopes: one crossing. Same slope: parallel or the same line.</p>`);
  });
};

/* ---------- a1-linear-models ---------- */
L["a1-linear-models"] = k => {
  const { C, F, M, fmt } = k; const c = k.canvas(); const d = c.d;
  const PRE = {
    study: { t: "Study hours vs test score", xmin: 0, xmax: 10, ymin: 40, ymax: 100, xl: "hours", yl: "score", pts: [[1, 52], [2, 58], [2.5, 61], [3, 65], [4, 63], [4.5, 72], [5, 70], [6, 78], [6.5, 76], [7, 85], [8, 84], [9, 93]], say: s => `each extra hour of study goes with about ${fmt(s, 1)} more points` },
    car: { t: "Car age vs value", xmin: 0, xmax: 12, ymin: 0, ymax: 35, xl: "years", yl: "$1000s", pts: [[1, 30], [2, 27], [3, 24.5], [4, 22], [5, 19], [6, 18], [7, 14.5], [8, 13], [9, 10], [10, 9], [11, 6]], say: s => `each year of age goes with about $${fmt(Math.abs(s) * 1000, 0)} ${s < 0 ? "less" : "more"} value` },
    cocoa: { t: "Temperature vs cocoa sales", xmin: 0, xmax: 30, ymin: 0, ymax: 60, xl: "°C", yl: "cups", pts: [[2, 52], [5, 44], [7, 50], [10, 38], [12, 45], [15, 31], [18, 36], [20, 27], [23, 30], [25, 20], [28, 24]], say: s => `each degree warmer goes with about ${fmt(Math.abs(s), 1)} ${s < 0 ? "fewer" : "more"} cups sold` },
    none: { t: "Shoe size vs quiz score", xmin: 4, xmax: 13, ymin: 0, ymax: 10, xl: "size", yl: "score", pts: [[5, 7], [6, 3], [6.5, 8], [7, 5], [8, 9], [8.5, 4], [9, 6], [10, 3], [10.5, 8], [11, 5], [12, 7], [12.5, 4]], say: s => `slope ${fmt(s, 2)}, close to no trend` },
    outlier: { t: "Study hours, with an outlier", xmin: 0, xmax: 10, ymin: 40, ymax: 100, xl: "hours", yl: "score", pts: [[1, 52], [2, 58], [2.5, 61], [3, 65], [4, 63], [4.5, 72], [5, 70], [6, 78], [6.5, 76], [7, 85], [8, 84], [9, 45]], say: s => `one point pulls the slope down to ${fmt(s, 1)} points per hour` } };
  let key = "study", pr, pts, h1, h2, toBest = false, geo = null;
  function load(){ pr = PRE[key]; pts = pr.pts.map(p => ({ x: p[0], y: p[1] })); const my = pts.reduce((s, p) => s + p.y, 0) / pts.length; const xr = pr.xmax - pr.xmin; h1 = { x: pr.xmin + xr * .15, y: my }; h2 = { x: pr.xmin + xr * .85, y: my }; }
  load();
  k.select("Data", Object.entries(PRE).map(([kk, v]) => [kk, v.t]), key, v => { key = v; load(); });
  const fit = () => { const n = pts.length, mx = pts.reduce((s, p) => s + p.x, 0) / n, my = pts.reduce((s, p) => s + p.y, 0) / n; let sxx = 0, sxy = 0, syy = 0; pts.forEach(p => { sxx += (p.x - mx) ** 2; sxy += (p.x - mx) * (p.y - my); syy += (p.y - my) ** 2; }); const ok = sxx > 1e-12, m = ok ? sxy / sxx : NaN; return { n, mx, my, sxx, sxy, syy, ok, m, b: my - m * mx, r: ok && syy > 1e-12 ? sxy / Math.sqrt(sxx * syy) : NaN }; };
  k.button("Snap to best fit", () => { const S = fit(); if (!S.ok) return; h1.y = S.m * h1.x + S.b; h2.y = S.m * h2.x + S.b; });
  k.button("Reset", () => load(), "btn ghost");
  k.check("Residuals to best-fit line", toBest, v => toBest = v);
  k.hint("Drag the white handles or any data point");
  dragger(c, () => geo, (p, P) => { let best = null, bd = 18; [["h1", h1], ["h2", h2]].forEach(([nm, o]) => { const dd = Math.hypot(p.x - P.X(o.x), p.y - P.Y(o.y)); if (dd < bd + 4) { bd = dd; best = nm; } }); if (best) return best; pts.forEach((o, i) => { const dd = Math.hypot(p.x - P.X(o.x), p.y - P.Y(o.y)); if (dd < bd) { bd = dd; best = i; } }); return best; },
    (nm, v) => { const cx = clamp(v.x, pr.xmin, pr.xmax), cy = clamp(v.y, pr.ymin, pr.ymax); if (nm === "h1" || nm === "h2") { const o = nm === "h1" ? h1 : h2, other = nm === "h1" ? h2 : h1; if (Math.abs(cx - other.x) > (pr.xmax - pr.xmin) * .08) o.x = cx; o.y = cy; } else { pts[nm].x = Math.round(cx * 10) / 10; pts[nm].y = Math.round(cy * 10) / 10; } });
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const S = fit();
    const P = k.plot(c, { xmin: pr.xmin, xmax: pr.xmax, ymin: pr.ymin, ymax: pr.ymax, pad: { l: 40, r: 14, t: 34, b: 46 }, xlabel: pr.xl, ylabel: pr.yl }); geo = P;
    P.grid(); P.axes();
    d.text(pr.t, P.left + P.width, 22, { font: `600 13px ${F.ui}`, color: C.muted, align: "right" });
    const tm = (h2.y - h1.y) / (h2.x - h1.x), tb = h1.y - tm * h1.x;
    const lm_ = toBest && S.ok ? S.m : tm, lb_ = toBest && S.ok ? S.b : tb;
    P.clip(() => pts.forEach(p => { const yh = lm_ * p.x + lb_; d.line(P.X(p.x), P.Y(p.y), P.X(p.x), P.Y(yh), C.violet, 2); }));
    if (S.ok) P.fn(x => S.m * x + S.b, C.amber, 2.5);
    P.fn(x => tm * x + tb, k.alpha(C.text, .85), 1.8, P.xmin, P.xmax, [7, 5]);
    [h1, h2].forEach(o => d.circle(P.X(o.x), P.Y(o.y), 7, C.ink, C.text, 2.5));
    pts.forEach(p => d.circle(P.X(p.x), P.Y(p.y), 5.5, C.cyan, C.ink, 1.5));
    const sse = (m, b) => pts.reduce((s, p) => s + (p.y - (m * p.x + b)) ** 2, 0);
    const tS = sse(tm, tb), bS = S.ok ? sse(S.m, S.b) : NaN;
    const ar = Math.abs(S.r), words = !isFinite(S.r) ? "undefined" : ar >= .8 ? "strong" : ar >= .5 ? "moderate" : ar >= .3 ? "weak" : "little or no";
    const dir = !isFinite(S.r) || ar < .3 ? "" : S.r > 0 ? " positive" : " negative";
    const close = S.ok && tS <= bS * 1.01 + 1e-9;
    const lin = (m, b) => Math.abs(m) < .005 ? `<i>ŷ</i> = ${fmt(b, 1)}` : `<i>ŷ</i> = ${fmt(m, 2)}<i>x</i> ${b < 0 ? "−" : "+"} ${fmt(Math.abs(b), 1)}`;
    k.setRO(`<div><h2>Least-squares line</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${S.ok ? M(`<span class="c1">${lin(S.m, S.b)}</span>`) : `<span class="c1">no line</span>`}</div></div>
      <div class="ro-rows">
        <div class="row">${M("<i>r</i>")} = <span class="v">${isFinite(S.r) ? fmt(S.r, 3) : "undefined"}</span><span class="lbl">${isFinite(S.r) ? `${words}${dir} correlation (−1 to 1)` : S.ok ? "all y-values are equal, so there is no spread to correlate" : "all x-values are equal"}</span></div>
        <div class="row">${M("<i>r</i><sup>2</sup>")} = <span class="v">${isFinite(S.r) ? fmt(S.r * S.r, 3) : "—"}</span><span class="lbl">${isFinite(S.r) ? `the line explains about ${Math.round(S.r * S.r * 100)}% of the variation in ${pr.yl}` : ""}</span></div>
        <div class="row"><span class="m">your line</span> ${M(lin(tm, tb))}<span class="lbl">dashed white; drag its handles</span></div>
        <div class="row"><span class="m c4">Σ residual²</span> <span class="v">${fmt(tS, 1)}</span> <span class="lbl">yours vs the smallest possible, ${isFinite(bS) ? fmt(bS, 1) : "—"} (the amber line)</span></div>
      </div>
      <div class="landmark${close || !S.ok ? " hit" : ""}"><div class="big">${!S.ok ? "all x equal: no best-fit line" : close ? "you found the best-fit line" : bS > 1e-9 ? `${fmt(tS / bS, 2)} × the minimum` : "the data lie on one line"}</div><div class="note">${!S.ok ? "Least squares needs at least two different x-values." : close ? "No line has a smaller total of squared residuals. " + pr.say(S.m).replace(/^./, ch => ch.toUpperCase()) + "." : "The least-squares line makes the total of squared vertical misses (violet) as small as possible. Try to match it."}</div></div>
      <p class="narr">${S.ok ? `Slope in context: ${pr.say(S.m)}.` : ""} Correlation is not causation.</p>`);
  });
};

/* ---------- a1-poly-div ---------- */
L["a1-poly-div"] = k => {
  const { M } = k; const dom = k.dom();
  const PRE = [
    { N: [1, -2, -5, 6], D: [1, -1] },
    { N: [2, 3, -4, 5], D: [1, 2] },
    { N: [1, 0, 0, 0, -16], D: [1, -2] },
    { N: [3, -5, 0, 4], D: [1, -3] },
    { N: [6, 11, -10], D: [2, 5] },
    { N: [1, 2, 0, 3], D: [1, 0, 1] }];
  const pH = (arr, cls) => polyH(arrTerms(arr, cls));
  let pi = 0, mode = "long", S;
  function build(){
    const N = PRE[pi].N.map(v => Q(v)), D = PRE[pi].D.map(v => Q(v)), n = N.length - 1, m = D.length - 1;
    // low→high index arrays
    const r = N.slice().reverse(), dd = D.slice().reverse(), steps = [], q = [];
    for (let i = n - m; i >= 0; i--) { const qi = qd(r[i + m], dd[m]); q[i] = qi; const prod = []; for (let j = 0; j <= m; j++) { prod[i + j] = qm(qi, dd[j]); r[i + j] = qs(r[i + j], prod[i + j]); } steps.push({ i, qi, prod, rem: r.slice(), lead: qd(Q(1), Q(1)) }); }
    const rem = r.slice(0, m); while (rem.length > 1 && qz(rem[rem.length - 1])) rem.pop();
    S = { N, D, n, m, steps, q: q.map(v => v || Q(0)), rem, synth: m === 1 && qeq(D[0], 1) };
    if (S.synth) { const a = qneg(D[1]), b = [N[0]], mid = [null]; for (let j = 1; j <= n; j++) { mid[j] = qm(a, b[j - 1]); b[j] = qa(N[j], mid[j]); } S.a = a; S.sb = b; S.smid = mid; }
  }
  build();
  k.modes([["long", "Long division"], ["syn", "Synthetic"]], mode, v => { mode = v; st.reset(); });
  k.select("Problem", PRE.map((p, i) => [i, `(${polyT(arrTerms(p.N).map(t => ({ ...t, vt: t.vt })))}) ÷ (${polyT(arrTerms(p.D))})`]), pi, v => { pi = +v; build(); st.reset(); });
  const count = () => mode === "long" ? 3 * S.steps.length : (S.synth ? 1 + 2 * S.n : 0);
  const st = k.stepper(count, render, { ms: 900 });
  const termCell = (q, e, first, cls, zeroOk) => { q = Q(q); if (q.n === 0 && !zeroOk) return ""; const a = Math.abs(q.n), v = xp(e); const co = (a === 1 && q.d === 1 && v) ? "" : (q.d === 1 ? String(a) : fracH(a, q.d)); return `${first ? (q.n < 0 ? "−" : "") : (q.n < 0 ? "− " : "+ ")}<span class="${cls}">${co}${v}</span>`; };
  function rowCells(map, lo, hi, cls, opts = {}){ // map: degree → Q ; returns tds for degrees n..0
    let out = "", first = true;
    for (let e = S.n; e >= 0; e--) {
      if (e > hi || e < lo || map[e] === undefined) { out += `<td${opts.bar ? ' class="bar"' : ""}></td>`; continue; }
      const z = qz(map[e]); const hot = opts.hot && opts.hot.includes(e);
      const tdc = [opts.bar ? "bar" : "", opts.ul ? "ul" : "", z ? "z" : ""].filter(Boolean).join(" ");
      out += `<td class="${tdc}"><span class="tok${hot ? " hot" : ""}">${termCell(map[e], e, first, cls, true)}</span></td>`; first = false;
    }
    return out;
  }
  function render(){
    const K = st.k, N = S.N, D = S.D, n = S.n, m = S.m, Sn = S.steps.length;
    const divH = pH(PRE[pi].D, "c3"), numH = pH(PRE[pi].N, "c2");
    const qArr = []; for (let e = n - m; e >= 0; e--) qArr.push(S.q[e]);
    const qH = pH(qArr, "c1"), remZero = S.rem.every(qz), remH = polyH(S.rem.map((c, e) => ({ c, vh: xp(e), cls: "c4" })).reverse());
    let body = "", say = "";
    if (mode === "long") {
      const s = K === 0 ? -1 : Math.floor((K - 1) / 3), ph = K === 0 ? -1 : (K - 1) % 3;
      // quotient row
      const qmap = {}; S.steps.forEach((x, idx) => { if (idx < s || (idx === s && ph >= 0)) qmap[x.i] = x.qi; });
      const curI = s >= 0 ? S.steps[s].i : null;
      let html = `<table class="a12-ld"><tr><td></td>${rowCells(qmap, 0, n, "c1", { hot: ph === 0 ? [curI] : [] })}</tr>`;
      const dmap = {}; N.forEach((c, j) => dmap[n - j] = c);
      html += `<tr><td class="dv">${divH}</td>${rowCells(dmap, 0, n, "c2", { bar: true, hot: s === 0 && ph === 0 ? [n] : [] })}</tr>`;
      for (let idx = 0; idx <= s; idx++) {
        const x = S.steps[idx], showP = idx < s || ph >= 1, showR = idx < s || ph >= 2;
        if (showP) { const pm = {}; for (let e = x.i; e <= x.i + m; e++) pm[e] = x.prod[e]; html += `<tr><td style="color:var(--faint)">−(</td>${rowCells(pm, x.i, x.i + m, "", { ul: true, hot: idx === s && ph === 1 ? Object.keys(pm).map(Number) : [] })}<td style="color:var(--faint);text-align:left;padding-left:0">)</td></tr>`; }
        if (showR) { const last = idx === Sn - 1, lo = last ? 0 : Math.max(0, x.i - 1), hi = x.i + m - 1, rm = {}; for (let e = lo; e <= hi; e++) rm[e] = x.rem[e]; html += `<tr><td></td>${rowCells(rm, lo, hi, last ? "c4" : "", { hot: idx === s && ph === 2 ? [] : [], })}</tr>`;
          if (idx + 1 === s + 1 && idx + 1 < Sn && idx === s && ph === 2) {} }
      }
      html += `</table>`;
      body = html;
      if (K === 0) say = `Write the dividend in descending powers${N.some(qz) ? ", with 0 placeholders for missing powers" : ""}. Divide by ${M(`(${divH})`)}.`;
      else { const x = S.steps[s], lead = s === 0 ? N[0] : S.steps[s - 1].rem[x.i + m];
        const leadH = polyH([{ c: lead, vh: xp(x.i + m) }]), dlead = polyH([{ c: D[0], vh: xp(m) }]), qiH = polyH([{ c: x.qi, vh: xp(x.i), cls: "c1" }]);
        if (ph === 0) say = `Divide the leading terms: ${M(`${leadH} ÷ ${dlead} = ${qiH}`)}.`;
        else if (ph === 1) say = `Multiply: ${M(`${qiH} · (${divH}) = ${pH(D.map(dv => qm(dv, x.qi)).concat(Array(x.i).fill(Q(0))), "")}`)}, lined up under like terms.`;
        else if (s < Sn - 1) say = `Subtract (change the signs and add), then bring down the next term.`;
        else say = `Subtract. What is left has degree ${S.rem.length - 1 < 0 || remZero ? 0 : S.rem.length - 1}, less than the divisor's degree ${m}: stop. Remainder ${M(remH)}.`; }
    } else {
      if (!S.synth) { body = `<div class="dom-expr" style="font-size:22px;color:var(--muted)">Synthetic division only works for a divisor of the form ${M("<i>x</i> − <i>a</i>")}.<br>This divisor is ${M(`(${divH})`)}.</div>`; say = PRE[pi].D.length === 2 ? `Use long division, or divide by ${M(`<i>x</i> ${qv(Q(PRE[pi].D[1], PRE[pi].D[0])) < 0 ? "−" : "+"} ${qh(Q(Math.abs(PRE[pi].D[1]), PRE[pi].D[0]))}`)} and then divide the quotient by ${PRE[pi].D[0]}.` : "A quadratic divisor needs long division."; }
      else {
        const a = S.a, b = S.sb, mid = S.smid; const td = (v, cls, show, hot) => `<td style="padding:4px 12px;text-align:center"><span class="tok ${cls}${hot ? " hot" : ""}">${show ? qh(v) : ""}</span></td>`;
        let r1 = `<tr><td class="dv" style="padding:4px 12px"><span class="c3">${qh(a)}</span></td>${N.map(v => td(v, "c2", true, false)).join("")}</tr>`;
        let r2 = `<tr><td class="dv"></td>${N.map((_, j) => j === 0 ? td(null, "", false) : td(mid[j], "", K >= 2 * j, K === 2 * j)).join("")}</tr>`;
        let r3 = `<tr><td></td>${N.map((_, j) => { const shown = j === 0 ? K >= 1 : K >= 2 * j + 1; return `<td class="bar" style="padding:4px 12px;text-align:center"><span class="tok ${j === n ? "c4" : "c1"}${K === (j === 0 ? 1 : 2 * j + 1) ? " hot" : ""}"${j === n && shown ? ' style="box-shadow:0 0 0 1.5px var(--violet);border-radius:3px"' : ""}>${shown ? qh(b[j]) : ""}</span></td>`; }).join("")}</tr>`;
        body = `<table class="a12-ld" style="margin-top:14px">${r1}${r2}${r3}</table>`;
        if (K === 0) say = `Write ${M("<i>a</i> = " + qh(a, "c3"))} (from ${M(`<i>x</i> − <i>a</i>`)}) and the dividend's coefficients${N.some(qz) ? ", using 0 for missing powers" : ""}.`;
        else if (K === 1) say = `Bring down the first coefficient, ${qh(b[0], "c1")}.`;
        else { const j = Math.floor(K / 2); if (K % 2 === 0) say = `Multiply ${qh(a, "c3")} × ${qv(b[j - 1]) < 0 ? `(${qh(b[j - 1], "c1")})` : qh(b[j - 1], "c1")} = ${qh(mid[j])} and write it under the next coefficient.`; else say = `Add: ${qh(N[j], "c2")} + ${qv(mid[j]) < 0 ? `(${qh(mid[j])})` : qh(mid[j])} = ${qh(b[j], j === n ? "c4" : "c1")}.${j === n ? " The last number is the remainder; the others are the quotient's coefficients, one degree lower." : ""}`; }
      }
    }
    const done = K >= count();
    dom.innerHTML = `<div style="padding-top:44px">${body}<div class="a12-say">${say}</div></div>`;
    const lin = m === 1 && qeq(S.D[0], 1);
    k.setRO(`<div><h2>Quotient</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${done || mode === "syn" && !S.synth ? M(qH) : "…"}</div><div class="narr" style="margin-top:6px">remainder ${done || mode === "syn" && !S.synth ? M(remH) : "…"}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`(${numH}) ÷ (${divH})`)}<span class="lbl">dividend ÷ divisor</span></div>
        <div class="row">${M(`<span class="c2">dividend</span> = <span class="c3">divisor</span> · <span class="c1">quotient</span> + <span class="c4">remainder</span>`)}<span class="lbl">the check for every division</span></div>
        ${lin ? `<div class="row">${M(`<i>P</i>(${qh(qneg(S.D[1]), "c3")}) = ${remH}`)}<span class="lbl">remainder theorem: dividing by x − a leaves P(a)</span></div>` : ""}
      </div>
      <div class="landmark${done && remZero ? " hit" : ""}">${done ? (remZero ? `<div class="big">remainder 0: ${M(`(${divH})`)} is a factor</div><div class="note">${M(`${numH} = (${divH})(${qH})`)}</div>` : `<div class="big">${M(`${qH} + <span class="fr"><span>${remH}</span><span>${divH}</span></span>`)}</div><div class="note">The remainder is left over, written over the divisor.</div>`) : `<div class="big">divide, multiply, subtract, bring down</div><div class="note">Repeat until what is left has a lower degree than the divisor.</div>`}</div>
      <p class="narr">Step through, then switch to Synthetic for the shortcut.</p>`);
  }
  st.finish ? st.finish() : render();
  st.reset(); render();
};

/* ---------- a1-factor-gcf ---------- */
L["a1-factor-gcf"] = k => {
  const { M } = k; const dom = k.dom();
  const PRE = {
    gcf: [ [[12, 4, 0], [-18, 3, 0], [6, 2, 0]], [[8, 2, 1], [20, 1, 2], [-4, 1, 1]], [[-5, 3, 0], [10, 2, 0], [-15, 1, 0]], [[9, 3, 0], [12, 1, 0]], [[7, 2, 0], [3, 1, 0], [1, 0, 0]] ],
    grp: [ [[1, 3, 0], [3, 2, 0], [2, 1, 0], [6, 0, 0]], [[2, 3, 0], [-6, 2, 0], [5, 1, 0], [-15, 0, 0]], [[6, 2, 0], [9, 1, 0], [-4, 1, 0], [-6, 0, 0]], [[1, 3, 0], [-4, 2, 0], [-3, 1, 0], [12, 0, 0]], [[3, 3, 0], [6, 2, 0], [3, 1, 0], [6, 0, 0]], [[1, 3, 0], [1, 2, 0], [1, 1, 0], [2, 0, 0]] ] };
  let mode = "gcf", idx = 0, lines = [];
  const T = a => ({ c: a[0], x: a[1], y: a[2] });
  const vh = t => xp(t.x) + xp(t.y, "y");
  const pH = (ts, cls) => polyH(ts.map(t => ({ c: t.c, vh: vh(t), cls })));
  const mH = (t, cls) => `<span class="${cls}">${polyH([{ c: t.c, vh: vh(t) }], "1")}</span>`;
  const gcfOf = ts => { let g = 0; ts.forEach(t => g = gcd(g, t.c)); const s = ts[0].c < 0 ? -1 : 1; return { c: s * (g || 1), x: Math.min(...ts.map(t => t.x)), y: Math.min(...ts.map(t => t.y)) }; };
  const dv = (t, g) => ({ c: t.c / g.c, x: t.x - g.x, y: t.y - g.y });
  const isOne = g => g.c === 1 && g.x === 0 && g.y === 0;
  const same = (a, b) => a.length === b.length && a.every((t, i) => t.c === b[i].c && t.x === b[i].x && t.y === b[i].y);
  const primes = n => { const out = []; for (let p = 2; p * p <= n; p++) while (n % p === 0) { out.push(p); n /= p; } if (n > 1) out.push(n); return out; };
  const label = ts => pH(ts.map(T)).replace(/<sup>(\d+)<\/sup>/g, (_, e) => sup(e)).replace(/<[^>]+>/g, "");
  let sel;
  function build(){
    const ts = PRE[mode][idx].map(T); lines = [];
    if (mode === "gcf") {
      const g = gcfOf(ts);
      lines.push({ h: pH(ts, "c2"), say: "Look for what every term has in common." });
      // prime breakdown with shared factors in amber
      const pl = ts.map(t => primes(Math.abs(t.c))); const common = {}; primes(Math.abs(g.c)).forEach(p => common[p] = (common[p] || 0) + 1);
      const rowsH = ts.map((t, i) => { const used = {}; const parts = []; if (t.c < 0) parts.push(g.c < 0 ? `<span class="c1">−1</span>` : "−1");
        pl[i].forEach(p => { used[p] = (used[p] || 0) + 1; parts.push(used[p] <= (common[p] || 0) ? `<span class="c1">${p}</span>` : String(p)); });
        for (let j = 0; j < t.x; j++) parts.push(j < g.x ? `<span class="c1"><i>x</i></span>` : "<i>x</i>"); for (let j = 0; j < t.y; j++) parts.push(j < g.y ? `<span class="c1"><i>y</i></span>` : "<i>y</i>");
        if (!parts.length) parts.push("1");
        return `<div>${mH(t, "")} = ${parts.join(" · ")}</div>`; }).join("");
      lines.push({ h: `<div class="a12-fl">${rowsH}</div>`, say: "Break each term into prime factors and variables. Amber factors appear in every term." });
      lines.push({ h: `GCF = ${mH(g, "c1")}`, say: isOne(g) ? "Nothing is shared except 1." : `Multiply the shared factors.${g.c < 0 ? " The leading term is negative, so factor out the negative too." : ""}` });
      if (!isOne(g)) {
        const rest = ts.map(t => dv(t, g));
        lines.push({ h: `<div class="a12-fl">${ts.map((t, i) => `<div>${mH(t, "")} ÷ ${mH(g, "c1")} = ${mH(rest[i], "c2")}</div>`).join("")}</div>`, say: "Divide every term by the GCF." });
        lines.push({ h: `${mH(g, "c1")}(${pH(rest, "c2")})`, say: "Write the GCF times what is left.", fin: true });
        lines.push({ h: `${ts.map((t, i) => `${i ? (rest[i].c < 0 ? " − " : " + ") : (rest[0].c < 0 ? "−" : "")}${mH(g, "c1")} · ${mH({ ...rest[i], c: Math.abs(rest[i].c) }, "c2")}`).join("")} = ${pH(ts, "")} <span class="ok">✓</span>`, say: "Check: distribute the GCF back over every term." });
      } else lines[lines.length - 1].fin = true;
      return { g, rest: isOne(g) ? null : ts.map(t => dv(t, g)), ts };
    }
    // grouping
    const [t1, t2, t3, t4] = ts, g1 = gcfOf([t1, t2]), g2raw = gcfOf([t3, t4]), g2 = { ...g2raw, c: Math.abs(g2raw.c) * (t3.c < 0 ? -1 : 1) };
    const b1 = [dv(t1, g1), dv(t2, g1)], b2 = [dv(t3, g2), dv(t4, g2)], ok = same(b1, b2);
    lines.push({ h: pH(ts, ""), say: "Four terms: try grouping them in pairs." });
    lines.push({ h: `<span class="c3">(</span>${pH([t1, t2], "")}<span class="c3">)</span> + <span class="c3">(</span>${pH([t3, t4], "")}<span class="c3">)</span>`, say: "Group the first two terms and the last two terms." });
    const g2s = g2.c < 0 ? " − " : " + ", g2a = { ...g2, c: Math.abs(g2.c) };
    lines.push({ h: `${mH(g1, "c1")}(${pH(b1, "c2")})${g2s}${mH(g2a, "c1")}(${pH(b2, "c2")})`, say: `Factor the GCF out of each group${t3.c < 0 ? " (take out a negative from the second group so its binomial starts the same way)" : ""}.` });
    if (!ok) { lines.push({ h: `(${pH(b1, "c2")}) ≠ (${pH(b2, "c3")})`, say: "The binomials differ, so this grouping does not factor. The polynomial does not factor by grouping.", fin: true, fail: true }); return { ok }; }
    lines.push({ h: `${mH(g1, "c1")}<span class="tok hot">(${pH(b1, "c2")})</span>${g2s}${mH(g2a, "c1")}<span class="tok hot">(${pH(b2, "c2")})</span>`, say: "Both groups share the same binomial." });
    const lead = [g1, g2];
    lines.push({ h: `(${pH(lead, "c1")})(${pH(b1, "c2")})`, say: "Factor out the common binomial; the group GCFs form the other factor.", fin: true });
    const cg = gcfOf(lead);
    if (!isOne(cg)) { lines[lines.length - 1].fin = false; lines.push({ h: `${mH(cg, "c1")}(${pH(lead.map(t => dv(t, cg)), "c1")})(${pH(b1, "c2")})`, say: `${M(`(${pH(lead, "")})`)} still has a GCF of ${mH(cg, "")}; take it out for a complete factorization.`, fin: true }); }
    return { ok, g1, g2, b1, lead, cg };
  }
  let info = build();
  k.modes([["gcf", "Greatest common factor"], ["grp", "Grouping"]], mode, v => { mode = v; idx = 0; rebuildSel(); info = build(); st.reset(); });
  const wrap = document.createElement("div"); wrap.className = "ctl"; k.ctl.appendChild(wrap);
  function rebuildSel(){ wrap.innerHTML = `<label for="a12-gsel">Polynomial</label><select id="a12-gsel">${PRE[mode].map((p, i) => `<option value="${i}">${label(p)}</option>`).join("")}</select>`; sel = wrap.querySelector("select"); sel.value = idx; sel.onchange = () => { idx = +sel.value; info = build(); st.reset(); }; }
  rebuildSel();
  const st = k.stepper(() => lines.length - 1, render, { ms: 1100 });
  function render(){
    const K = Math.min(st.k, lines.length - 1);
    dom.innerHTML = `<div style="padding-top:46px">${lines.slice(0, K + 1).map((ln, i) => `<div class="a12-st${i === K ? " cur" : ""}">${i ? "" : ""}${ln.h}<span class="say">${ln.say}</span></div>`).join("")}</div>`;
    showCur(dom);
    const done = K >= lines.length - 1, fin = lines[lines.length - 1];
    let big = done ? fin.h.replace(/<span class="ok">.*?<\/span>/, "").replace(/ = .*$/, "") : "…";
    if (mode === "grp" && !info.ok && done) big = `<span class="c3" style="font-size:.8em">no common binomial</span>`;
    if (mode === "gcf") { const g = info.g; if (done && info.rest) big = `${mH(g, "c1")}(${pH(info.rest, "c2")})`; else if (done) big = pH(info.ts, ""); }
    let rows = "", lm;
    if (mode === "gcf") {
      const g = info.g;
      rows = `<div class="row">${M(`GCF = ${mH(g, "c1")}`)}<span class="lbl">largest number dividing every coefficient, times the lowest power of each shared variable</span></div>
        ${info.rest ? `<div class="row">${M(`<span class="c2">${pH(info.rest, "c2")}</span>`)}<span class="lbl">remaining factor: each term divided by the GCF</span></div>` : ""}`;
      lm = isOne(g) ? `<div class="landmark hit"><div class="big">GCF = 1</div><div class="note">No factor greater than 1 divides every term, so there is nothing to pull out. (That alone doesn't mean the polynomial is prime; other methods may still factor it.)</div></div>`
        : `<div class="landmark${done ? " hit" : ""}"><div class="big">${M(`${mH(g, "c1")} · (…)`)}</div><div class="note">${done ? "Factored. Inside the parentheses no common factor is left." : "Factoring out the GCF is always the first move."}</div></div>`;
    } else {
      rows = `<div class="row">${M(`<span class="c3">(</span><i>t</i><sub>1</sub> + <i>t</i><sub>2</sub><span class="c3">)</span> + <span class="c3">(</span><i>t</i><sub>3</sub> + <i>t</i><sub>4</sub><span class="c3">)</span>`)}<span class="lbl">groups of two terms</span></div>`;
      if (info.ok) rows += `<div class="row">${M(`<span class="c1">${mH(info.g1, "")}</span>, <span class="c1">${mH(info.g2, "")}</span>`)}<span class="lbl">GCF of each group</span></div><div class="row">${M(`(${pH(info.b1, "c2")})`)}<span class="lbl">the shared binomial</span></div>`;
      lm = !info.ok ? `<div class="landmark hit"><div class="big">no common binomial</div><div class="note">After factoring each group, the binomials don't match, so grouping fails. This polynomial does not factor by grouping (it may not factor over the integers at all).</div></div>`
        : `<div class="landmark${done ? " hit" : ""}"><div class="big">${M(`<i>a</i>(<span class="c2">B</span>) + <i>b</i>(<span class="c2">B</span>) = (<i>a</i> + <i>b</i>)(<span class="c2">B</span>)`)}</div><div class="note">Grouping is the distributive property run backwards, twice.</div></div>`;
    }
    k.setRO(`<div><h2>Factored form</h2><div class="ro-big" style="margin-top:8px;font-size:23px">${M(big)}</div></div><div class="ro-rows">${rows}</div>${lm}<p class="narr">Press Step to move through the method; pick another polynomial above.</p>`);
  }
  render();
};

/* ---------- a1-radical-ops ---------- */
L["a1-radical-ops"] = k => {
  const { C, F, M, fmt } = k; const c = k.canvas(); const d = c.d; const T = X(k);
  let mode = "add";
  const S = { a: 2, m: 12, op: "+", b: 1, n: 27, ma: 2, mm: 3, mb: 3, mn: 6, form: "conj", rc: 6, ra: 3, rb: 1, rn: 2 };
  k.modes([["add", "Add & subtract"], ["mul", "Multiply"], ["rat", "Rationalize"]], mode, v => { mode = v; build(); });
  function build(){
    k.ctl.innerHTML = "";
    const cl = s => `<span class="c2">${s}</span>`, rl = s => `<span class="c4">${s}</span>`;
    if (mode === "add") { k.slider(cl("<i>a</i>"), -6, 6, 1, S.a, v => S.a = v); k.slider(rl("√<i>m</i>"), 1, 75, 1, S.m, v => S.m = v); k.select("", [["+", "+"], ["−", "−"]], S.op, v => S.op = v); k.slider(cl("<i>b</i>"), -6, 6, 1, S.b, v => S.b = v); k.slider(rl("√<i>n</i>"), 1, 75, 1, S.n, v => S.n = v); }
    else if (mode === "mul") { k.slider(cl("<i>a</i>"), 1, 6, 1, S.ma, v => S.ma = v); k.slider(rl("√<i>m</i>"), 1, 30, 1, S.mm, v => S.mm = v); k.slider(cl("<i>b</i>"), 1, 6, 1, S.mb, v => S.mb = v); k.slider(rl("√<i>n</i>"), 1, 30, 1, S.mn, v => S.mn = v); }
    else { k.select("Form", [["conj", "c / (a + b√n)"], ["one", "c / √n"]], S.form, v => { S.form = v; build(); }); k.slider("<i>c</i>", 1, 12, 1, S.rc, v => S.rc = v); if (S.form === "conj") { k.slider(cl("<i>a</i>"), -6, 6, 1, S.ra, v => S.ra = v); k.slider(cl("<i>b</i>"), -4, 4, 1, S.rb, v => S.rb = v); } k.slider(rl("√<i>n</i>"), 2, 24, 1, S.rn, v => S.rn = v); }
  }
  build();
  // canvas items for coef·√r (coef cyan, radicand violet)
  const ri = (coef, r, lead, col) => { const cc = col || C.cyan, rc = col || C.violet; const out = []; const sg = coef < 0 ? "−" : lead ? "" : "+"; if (sg) out.push([lead ? sg : ` ${sg} `, col || C.text]); const ac = Math.abs(coef);
    if (r === 1) { out.push([String(ac), cc]); return out; } if (ac !== 1) out.push([String(ac), cc]); out.push({ rad: [[String(r), rc]], c: col || C.muted }); return out; };
  const riH = (coef, r, lead, cc = "c2", rc = "c4") => { const sg = coef < 0 ? "−" : lead ? "" : "+"; const ac = Math.abs(coef); const body = r === 1 ? `<span class="${cc}">${ac}</span>` : `${ac !== 1 ? `<span class="${cc}">${ac}</span>` : ""}√<span class="a12-rad ${rc}">${r}</span>`; return (sg ? (lead ? sg : ` ${sg} `) : "") + body; };
  k.loop(() => {
    c.begin(); const { w, h } = c; const sz = Math.max(16, Math.min(26, w / 26));
    const line = (items, y, s = sz) => { const W = T.exW(d, items, s); T.ex(d, items, (w - W) / 2, y, s, C.text); };
    if (mode === "add") {
      const bb = S.op === "−" ? -S.b : S.b; const [f1, r1] = sqf(S.m), [f2, r2] = sqf(S.n); const A = S.a * f1, B = bb * f2, like = r1 === r2;
      line([...ri(S.a, S.m, true), ` ${S.op} `, ...ri(S.b, S.n, true)], 82);
      line([["= ", C.muted], ...ri(A, r1, true), ...ri(B, r2, false)], 82 + sz * 1.8);
      const res = like ? ri(A + B, r1, true, C.amber) : [["can't combine: unlike radicands", C.red]];
      line([["= ", C.muted], ...(like && A + B === 0 ? [["0", C.amber]] : res)], 82 + sz * 3.6, like ? sz : sz * .7);
      // bars
      const rows = [[A, r1, C.violet], [B, r2, C.violet]]; if (like) rows.push([A + B, r1, C.amber]);
      const maxL = Math.max(1e-6, ...rows.map(([n_, r]) => Math.abs(n_) * Math.sqrt(r))), y0 = 82 + sz * 4.6, avail = h - y0 - 30, bh = Math.min(30, avail / rows.length - 12);
      const lx = w < 500 ? 64 : 96, sc = (w - lx - 24) / maxL;
      if (bh > 8) rows.forEach(([n_, r, col], i) => {
        const y = y0 + i * (bh + 12) + (i === 2 ? 6 : 0), len = Math.sqrt(r) * sc;
        T.ex(d, ri(n_, r, true, i === 2 ? C.amber : null), 8, y + bh * .72, Math.min(16, sz * .7), C.text);
        for (let j = 0; j < Math.abs(n_); j++) { const x = lx + j * len; d.rect(x, y, Math.max(1, len - 1), bh, k.alpha(col, n_ < 0 ? .08 : .22), col, 1.2); if (n_ < 0) d.line(x + 2, y + bh - 2, x + len - 3, y + 2, k.alpha(col, .6), 1); if (len > 30 && r > 1) T.ex(d, [{ rad: [[String(r), col]], c: col }], x + len / 2 - T.exW(d, [{ rad: [String(r)] }], 12) / 2, y + bh * .7, 12, col); }
        if (n_ === 0) d.text("0", lx, y + bh * .7, { font: `13px ${F.mono}`, color: C.faint });
      });
      const val = S.a * Math.sqrt(S.m) + bb * Math.sqrt(S.n);
      const resH = like ? (A + B === 0 ? `<span class="c1">0</span>` : riH(A + B, r1, true, "c1", "c1")) : `${riH(A, r1, true)}${riH(B, r2, false)}`;
      k.setRO(`<div><h2>${S.op === "+" ? "Sum" : "Difference"}</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(resH)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`${riH(S.a, S.m, true)} = ${riH(A, r1, true)}`)}<span class="lbl">${f1 > 1 ? `√${S.m} = √${f1 * f1}·√${r1} = ${f1}√${r1}` : "already simplified"}</span></div>
          <div class="row">${M(`${riH(bb, S.n, true)} = ${riH(B, r2, true)}`)}<span class="lbl">${f2 > 1 ? `√${S.n} = √${f2 * f2}·√${r2} = ${f2}√${r2}` : "already simplified"}</span></div>
          <div class="row">${M("≈")} <span class="v">${fmt(val, 4)}</span><span class="lbl">decimal check</span></div>
        </div>
        <div class="landmark${like ? " hit" : ""}"><div class="big">${like ? M(`${ng(A)} + ${B < 0 ? `(${ng(B)})` : B} = <span class="c1">${ng(A + B)}</span>`) + " pieces" : "unlike radicals"}</div><div class="note">${like ? (r1 === 1 ? "Both terms are whole numbers, so just add." : `Once simplified, both are counts of the same piece √${r1}. Add the coefficients; the radicand stays.`) : `√${r1} and √${r2} are different sizes (the bars don't match), so the sum can't be written as one radical.`}</div></div>
        <p class="narr">Always simplify first: radicals that look unlike often aren't.</p>`);
    } else if (mode === "mul") {
      const { ma, mm, mb, mn } = S, pr = mm * mn, [f, r] = sqf(pr), co = ma * mb * f;
      line([...ri(ma, mm, true), " · ", ...ri(mb, mn, true), ["  =  ", C.muted], [String(ma * mb), C.cyan], { rad: [[`${mm}·${mn}`, C.violet]], c: C.muted }, ["  =  ", C.muted], ...ri(co, r, true, C.amber)], 80, Math.min(sz, w / 22));
      // rectangle a√m by b√n
      const W0 = ma * Math.sqrt(mm), H0 = mb * Math.sqrt(mn), top = 118, sc = Math.min((w - 110) / W0, (h - top - 50) / H0), rw = W0 * sc, rh = H0 * sc, ox = (w - rw) / 2 + 20, oy = top + 10;
      for (let i = 0; i < ma; i++) for (let j = 0; j < mb; j++) { const cw = rw / ma, chh = rh / mb; d.rect(ox + i * cw, oy + j * chh, cw, chh, k.alpha(C.amber, .1), k.alpha(C.amber, .6), 1); if (cw > 44 && chh > 22) T.ex(d, [{ rad: [[String(pr), C.violet]], c: C.muted }], ox + i * cw + cw / 2 - T.exW(d, [{ rad: [String(pr)] }], 13) / 2, oy + j * chh + chh / 2 + 5, 13, C.text); }
      d.rect(ox, oy, rw, rh, null, C.amber, 2);
      const tl = ri(ma, mm, true), tlW = T.exW(d, tl, 16); T.ex(d, tl, ox + rw / 2 - tlW / 2, oy - 8, 16, C.text);
      const ll = ri(mb, mn, true), llW = T.exW(d, ll, 16); T.ex(d, ll, ox - llW - 8, oy + rh / 2 + 5, 16, C.text);
      d.text(`area = ${ma * mb} cells of √${mm}·√${mn} = √${pr}`, w / 2, h - 16, { font: `13px ${F.sans}`, color: C.faint, align: "center" });
      k.setRO(`<div><h2>Product</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(riH(co, r, true, "c1", "c1"))}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`√<span class="a12-rad"><i>m</i></span> · √<span class="a12-rad"><i>n</i></span> = √<span class="a12-rad"><i>mn</i></span>`)}<span class="lbl">multiply radicands under one root</span></div>
          <div class="row">${M(`(<span class="c2">${ma}</span>·<span class="c2">${mb}</span>)√<span class="a12-rad c4">${mm}·${mn}</span> = <span class="c2">${ma * mb}</span>√<span class="a12-rad c4">${pr}</span>`)}<span class="lbl">coefficients multiply with coefficients</span></div>
          <div class="row">${M(`√<span class="a12-rad c4">${pr}</span> = ${f > 1 ? `√${f * f}·√${r} = ${riH(f, r, true)}` : "simplest form"}`)}<span class="lbl">pull out the largest perfect-square factor</span></div>
        </div>
        <div class="landmark${r === 1 ? " hit" : ""}"><div class="big">${M(`${riH(ma, mm, true)} · ${riH(mb, mn, true)} = ${riH(co, r, true, "c1", "c1")}`)}</div><div class="note">${r === 1 ? `${pr} is a perfect square, so the product is a whole number.` : mm === mn ? `√${mm} · √${mm} = ${mm}: a root times itself gives the radicand.` : "The rectangle's area is the product of its side lengths."}</div></div>`);
    } else {
      const cc = S.rc, [f, r] = sqf(S.rn);
      let lines = [], result = null, undef = false, resH = "", why = "";
      const frI = (num, den) => ({ fr: [num, den] });
      if (S.form === "one") {
        lines.push([frI([[String(cc), C.text]], [{ rad: [[String(S.rn), C.violet]], c: C.muted }])]);
        if (r === 1) { const q = Q(cc, f); lines.push([["= ", C.muted], ...(q.d === 1 ? [[String(q.n), C.amber]] : [frI([[String(q.n), C.amber]], [[String(q.d), C.amber]])])]); result = q; resH = qh(q, "c1"); why = `√${S.rn} = ${f} is a whole number, so there is no radical to clear.`; }
        else {
          if (f > 1) lines.push([["= ", C.muted], frI([[String(cc), C.text]], ri(f, r, true))]);
          lines.push([["= ", C.muted], frI([[String(cc), C.text]], ri(f, r, true)), " · ", frI([{ rad: [[String(r), C.violet]], c: C.pink }], [{ rad: [[String(r), C.violet]], c: C.pink }])]);
          const den = f * r, g = gcd(cc, den), nc = cc / g, nd = den / g;
          lines.push([["= ", C.muted], frI(ri(cc, r, true), [[String(den), C.text]])]);
          const numI = ri(nc, r, true, C.amber); lines.push([["= ", C.muted], ...(nd === 1 ? numI : [frI(numI, [[String(nd), C.amber]])])]);
          resH = nd === 1 ? riH(nc, r, true, "c1", "c1") : fracH(riH(nc, r, true, "c1", "c1"), nd, "c1"); why = `√${r} · √${r} = ${r}, a whole number, so the denominator loses its root.`;
        }
      } else {
        const a = S.ra, B = S.rb * f;
        lines.push([frI([[String(cc), C.text]], [...(a !== 0 ? [[String(a).replace("-", "−"), C.cyan]] : []), ...(S.rb !== 0 ? ri(S.rb, S.rn, a === 0) : [])])]);
        if (S.rb === 0 || r === 1) {
          const den = a + B; if (den === 0) { undef = true; why = "The denominator is 0, so the expression is undefined."; lines.push([["undefined: denominator = 0", C.red]]); }
          else { const q = Q(cc, den); lines.push([["= ", C.muted], ...(q.d === 1 ? [[ng(q.n), C.amber]] : [...(q.n < 0 ? [["−", C.amber]] : []), frI([[String(Math.abs(q.n)), C.amber]], [[String(q.d), C.amber]])])]); resH = qh(q, "c1"); why = S.rb === 0 ? "No radical in the denominator; nothing to rationalize." : `√${S.rn} = ${f} is a whole number, so the denominator is just ${den}.`; }
        } else {
          const denI = [...(a !== 0 ? [[ng(a), C.cyan]] : []), ...ri(B, r, a === 0)], conjI = [...(a !== 0 ? [[ng(a), C.pink]] : []), ...ri(-B, r, a === 0, C.pink)];
          if (f > 1) lines.push([["= ", C.muted], frI([[String(cc), C.text]], denI)]);
          lines.push([["= ", C.muted], frI([[String(cc), C.text]], denI), " · ", frI(conjI, conjI)]);
          const D0 = a * a - B * B * r, P0 = cc * a, Q0 = -cc * B;
          lines.push([["= ", C.muted], frI([...(P0 !== 0 ? [[ng(P0), C.text]] : []), ...ri(Q0, r, P0 === 0)], [[`${a < 0 ? `(${ng(a)})` : a}² − ${Math.abs(B) === 1 ? "" : Math.abs(B) + "²·"}${r}`, C.text]])]);
          let g = gcd(gcd(P0, Q0), D0), s = D0 < 0 ? -1 : 1; const Pn = s * P0 / g, Qn = s * Q0 / g, Dn = Math.abs(D0) / g;
          const numI = [...(Pn !== 0 ? [[ng(Pn), C.amber]] : []), ...ri(Qn, r, Pn === 0, C.amber)];
          lines.push([["= ", C.muted], ...(Dn === 1 ? numI : [frI(numI, [[String(Dn), C.amber]])])]);
          const numH = `${Pn !== 0 ? `<span class="c1">${ng(Pn)}</span>` : ""}${riH(Qn, r, Pn === 0, "c1", "c1")}`;
          resH = Dn === 1 ? numH : fracH(numH, Dn, "c1");
          why = `The conjugate ${ng(a)} ${B < 0 ? "+" : "−"} ${Math.abs(B) === 1 ? "" : Math.abs(B)}√${r} makes a difference of squares: (${ng(a)})² − ${B * B}·${r} = ${ng(D0)}, a whole number.`;
          result = { P: Pn, Q: Qn, D: Dn, r };
        }
      }
      let s2 = Math.min(Math.max(sz, Math.min(26, w / 17)), (h - 70) / (lines.length * 2.6)); while (s2 > 12 && Math.max(...lines.map(ln => T.exW(d, ln, s2))) > w - 24) s2 -= 1;
      lines.forEach((ln, i) => line(ln, 70 + s2 * 1.4 + i * s2 * 2.6, s2));
      const orig = S.form === "one" ? cc / Math.sqrt(S.rn) : cc / (S.ra + S.rb * Math.sqrt(S.rn));
      const origH = S.form === "one" ? fracH(cc, `√<span class="a12-rad c4">${S.rn}</span>`) : fracH(cc, `${S.ra !== 0 ? `<span class="c2">${ng(S.ra)}</span>` : ""}${S.rb !== 0 ? riH(S.rb, S.rn, S.ra === 0) : ""}${S.ra === 0 && S.rb === 0 ? "0" : ""}`);
      k.setRO(`<div><h2>Rationalized</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(undef ? `<span class="c1">undefined</span>` : resH)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(origH)}<span class="lbl">the original, with a radical in the denominator</span></div>
          ${S.form === "conj" ? `<div class="row">${M(`(<i>a</i> + <i>b</i>√<span class="a12-rad"><i>n</i></span>)(<i>a</i> − <i>b</i>√<span class="a12-rad"><i>n</i></span>) = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup><i>n</i>`)}<span class="lbl">conjugates clear the root</span></div>` : `<div class="row">${M(`√<span class="a12-rad"><i>n</i></span> · √<span class="a12-rad"><i>n</i></span> = <i>n</i>`)}<span class="lbl">multiply top and bottom by the root</span></div>`}
          <div class="row">${M("≈")} <span class="v">${undef ? "—" : fmt(orig, 5)}</span><span class="lbl">same value before and after: we multiplied by a form of 1</span></div>
        </div>
        <div class="landmark${undef ? " hit" : result ? " hit" : ""}"><div class="big">${undef ? "division by zero" : "no radical in the denominator"}</div><div class="note">${why}</div></div>`);
    }
  });
};

/* ---------- a1-sys-ineq ---------- */
L["a1-sys-ineq"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let m1 = .5, b1 = 3, s1 = "≤", m2 = -1, b2 = -1, s2 = ">"; const Tp = { x: 2, y: 1 }; let geo = null;
  const syms = [["≥", "≥"], [">", ">"], ["≤", "≤"], ["<", "<"]];
  const fm = v => String(v).replace("-", "−");
  const A1 = k.select(`<span class="c2">1:</span> <i>y</i>`, syms, s1, v => s1 = v);
  const M1 = k.slider(`<span class="c2"><i>m</i>₁</span>`, -4, 4, .5, m1, v => m1 = v, fm);
  const B1 = k.slider(`<span class="c2"><i>b</i>₁</span>`, -8, 8, 1, b1, v => b1 = v);
  const A2 = k.select(`<span class="c3">2:</span> <i>y</i>`, syms, s2, v => s2 = v);
  const M2 = k.slider(`<span class="c3"><i>m</i>₂</span>`, -4, 4, .5, m2, v => m2 = v, fm);
  const B2 = k.slider(`<span class="c3"><i>b</i>₂</span>`, -8, 8, 1, b2, v => b2 = v);
  const setAll = (a, b, s, c_, e, t) => { m1 = a; b1 = b; s1 = s; m2 = c_; b2 = e; s2 = t; M1.set(a); B1.set(b); A1.set(s); M2.set(c_); B2.set(e); A2.set(t); };
  k.button("Parallel band", () => setAll(1, 3, "≤", 1, -2, "≥"), "btn ghost");
  k.button("No overlap", () => setAll(1, -2, "≤", 1, 3, "≥"), "btn ghost");
  k.button("Reset", () => { setAll(.5, 3, "≤", -1, -1, ">"); Tp.x = 2; Tp.y = 1; }, "btn ghost");
  k.hint("Drag the test point");
  dragger(c, () => geo, () => "T", (nm, v, P) => { Tp.x = clamp(Math.round(v.x), Math.ceil(P.xmin), Math.floor(P.xmax)); Tp.y = clamp(Math.round(v.y), Math.ceil(P.ymin), Math.floor(P.ymax)); });
  const up = s => s === "≥" || s === ">", strict = s => s === ">" || s === "<";
  const holds = (lhs, rhs, s) => { const cmp = qcmp(lhs, rhs); return s === "≥" ? cmp >= 0 : s === ">" ? cmp > 0 : s === "≤" ? cmp <= 0 : cmp < 0; };
  k.loop(() => {
    c.begin(); const { w, h } = c; const g = c.g;
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, pad: { l: 32, r: 12, t: 16, b: 24 } }); geo = P;
    P.grid(1);
    const hp = (m, b, u) => { g.beginPath(); const xl = P.xmin - 1, xr = P.xmax + 1, yy = u ? -1e4 : 1e4; g.moveTo(P.X(xl), P.Y(m * xl + b)); g.lineTo(P.X(xr), P.Y(m * xr + b)); g.lineTo(P.X(xr), yy); g.lineTo(P.X(xl), yy); g.closePath(); };
    P.clip(() => { hp(m1, b1, up(s1)); g.fillStyle = k.alpha(C.cyan, .13); g.fill(); hp(m2, b2, up(s2)); g.fillStyle = k.alpha(C.pink, .13); g.fill(); g.save(); hp(m1, b1, up(s1)); g.clip(); hp(m2, b2, up(s2)); g.fillStyle = k.alpha(C.amber, .32); g.fill(); g.restore(); });
    P.axes();
    P.fn(x => m1 * x + b1, C.cyan, 2.5, P.xmin, P.xmax, strict(s1) ? [8, 6] : null);
    P.fn(x => m2 * x + b2, C.pink, 2.5, P.xmin, P.xmax, strict(s2) ? [8, 6] : null);
    const Mq1 = Q(Math.round(m1 * 2), 2), Mq2 = Q(Math.round(m2 * 2), 2);
    // emptiness
    let empty = false, lineOnly = false;
    if (qeq(Mq1, Mq2) && up(s1) !== up(s2)) { const lo = up(s1) ? b1 : b2, hi = up(s1) ? b2 : b1; if (lo > hi) empty = true; else if (lo === hi) { if (strict(s1) || strict(s2)) empty = true; else lineOnly = true; } }
    // vertex
    if (!qeq(Mq1, Mq2)) { const vx = qd(Q(b2 - b1), qs(Mq1, Mq2)), vy = qa(qm(Mq1, vx), b1); if (Math.abs(qv(vx)) < 10 && Math.abs(qv(vy)) < 10) { P.point(qv(vx), qv(vy), C.amber, 5, strict(s1) || strict(s2)); P.label(`(${qt(vx)}, ${qt(vy)})`, qv(vx), qv(vy), C.amber, { dx: 9, dy: 18, font: `12px ${F.mono}` }); } }
    const r1 = qa(qm(Mq1, Tp.x), b1), r2 = qa(qm(Mq2, Tp.x), b2), ok1 = holds(Q(Tp.y), r1, s1), ok2 = holds(Q(Tp.y), r2, s2), both = ok1 && ok2;
    d.circle(P.X(Tp.x), P.Y(Tp.y), 9, both ? C.amber : C.ink, C.text, 2.5);
    P.label(`(${ng(Tp.x)}, ${ng(Tp.y)})`, Tp.x, Tp.y, C.text, { dx: 13, dy: -10, font: `600 13px ${F.mono}` });
    const lab = (m, b, s, col, y0) => d.text(`y ${s} ${m === 0 ? "" : (m === 1 ? "" : m === -1 ? "−" : fm(m)) + "x "}${m === 0 ? fm(b) : (b < 0 ? "− " : "+ ") + Math.abs(b)}`, P.left + 8, y0, { font: `italic 15px ${F.math}`, color: col });
    lab(m1, b1, s1, C.cyan, P.top + 18); lab(m2, b2, s2, C.pink, P.top + 38);
    const ineqH = (m, b, s, cls) => `<span class="${cls}"><i>y</i> ${s} ${polyH([{ c: m, vh: "<i>x</i>" }, { c: b }])}</span>`;
    const chk = (m, b, s, r, ok, cls) => `<div class="row">${M(ineqH(m, b, s, cls))}<span class="lbl">${ng(Tp.y)} ${s} ${qt(m)}·(${ng(Tp.x)}) ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${qt(r)} → <b style="color:var(${ok ? "--green" : "--red"})">${ok ? "true" : "false"}</b>${strict(s) ? " · dashed: boundary not included" : " · solid: boundary included"}</span></div>`;
    const onB = !qz(qs(Q(Tp.y), r1)) && !qz(qs(Q(Tp.y), r2)) ? "" : " It sits on a boundary line, which counts only if that line is solid.";
    k.setRO(`<div><h2>Test point</h2><div class="ro-big" style="margin-top:8px;font-size:24px"><span class="num">(${ng(Tp.x)}, ${ng(Tp.y)})</span> ${both ? `<span class="c1">is a solution</span>` : `<span style="color:var(--faint)">is not a solution</span>`}</div></div>
      <div class="ro-rows">${chk(Mq1, b1, s1, r1, ok1, "c2")}${chk(Mq2, b2, s2, r2, ok2, "c3")}</div>
      <div class="landmark${empty || both || lineOnly ? " hit" : ""}"><div class="big">${empty ? "no solution" : lineOnly ? "solutions lie only on the line" : both ? "in the amber overlap" : !ok1 && !ok2 ? "fails both" : `fails inequality ${ok1 ? 2 : 1}`}</div><div class="note">${empty ? "The boundaries are parallel and the half-planes point away from each other, so no point satisfies both." : lineOnly ? "Same boundary line, opposite directions, both inclusive: only points on the line work." : both ? "It satisfies both inequalities, so it is in the solution set." + onB : "A solution must make both inequalities true. Only the amber region does." + onB}</div></div>
      <p class="narr">Shade each half-plane, keep the overlap. Test a point to check the side.</p>`);
  });
};

/* ---------- a1-sys-sub ---------- */
L["a1-sys-sub"] = k => {
  const { C, F, M } = k; const T = X(k); const dom = k.dom();
  const PRE = [
    ["2x + y = 7, 3x − 2y = 7", [2, 1, 7], [3, -2, 7]],
    ["3x + 2y = 12, x − 4y = −10", [3, 2, 12], [1, -4, -10]],
    ["x + y = 10, x − y = 2", [1, 1, 10], [1, -1, 2]],
    ["2x + 3y = 5, 3x + 5y = 7", [2, 3, 5], [3, 5, 7]],
    ["2x + 3y = 6, 4x + 6y = 12", [2, 3, 6], [4, 6, 12]],
    ["x − 2y = 4, 2x − 4y = 3", [1, -2, 4], [2, -4, 3]]];
  let E1 = PRE[0][1].slice(), E2 = PRE[0][2].slice(), lines = [], R = {};
  dom.innerHTML = `<div class="a12-flex"><div class="a12-steps"></div><div class="a12-gbox"></div></div>`;
  const stepsEl = dom.querySelector(".a12-steps"), gbox = dom.querySelector(".a12-gbox"); const c = T.boxCanvas(gbox); const d = c.d;
  const eqH = (e, cls) => `<span class="${cls}">${polyH([{ c: e[0], vh: "<i>x</i>" }, { c: e[1], vh: "<i>y</i>" }])} = ${ng(e[2])}</span>`;
  function build(){
    lines = []; R = {};
    lines.push({ h: `${eqH(E1, "c2")}<br>${eqH(E2, "c3")}`, say: "Solve one equation for one variable, then substitute it into the other." });
    if ((E1[0] === 0 && E1[1] === 0) || (E2[0] === 0 && E2[1] === 0)) { R.bad = true; lines.push({ h: `<span class="bad">an equation has no variables</span>`, say: "Each equation needs an x or a y term to describe a line." }); return; }
    // choose equation and variable to isolate
    const cand = [[0, 1], [0, 0], [1, 1], [1, 0]]; const E = [E1, E2];
    let pick = cand.find(([ei, vi]) => Math.abs(E[ei][vi]) === 1) || cand.find(([ei, vi]) => E[ei][vi] !== 0);
    const [ei, vi] = pick, e = E[ei], f = E[1 - ei], oi = 1 - vi, vn = vi ? "y" : "x", un = vi ? "x" : "y";
    const eCls = ei ? "c3" : "c2", fCls = ei ? "c2" : "c3";
    const p = Q(e[2], e[vi]), q = Q(-e[oi], e[vi]);
    const exprH = polyH([{ c: p }, { c: q, vh: `<i>${un}</i>` }]);
    R.v = vn; R.u = un; R.p = p; R.q = q; R.ei = ei;
    lines.push({ h: `<i>${vn}</i> = <span class="c1">${exprH}</span>`, say: `Solve ${ei ? "equation 2" : "equation 1"} for ${vn}${Math.abs(e[vi]) === 1 ? " (its coefficient is " + ng(e[vi]) + ", so no fractions)" : ""}.` });
    // substitute into f
    const fv = f[vi], fo = f[oi];
    const subTerm = (lead) => { if (fv === 0) return ""; const co = fv === 1 ? "" : fv === -1 ? "−" : String(Math.abs(fv)); const sg = fv < 0 ? (lead ? "−" : " − ") : (lead ? "" : " + "); return `${sg}${fv === -1 || fv === 1 ? "" : co}(<span class="c1">${exprH}</span>)`; };
    const oTerm = lead => polyH([{ c: fo, vh: `<i>${un}</i>` }]).replace(/^/, fo === 0 ? "" : lead ? "" : (fo < 0 ? "" : "")) ;
    let subH;
    if (fv === 0) subH = `<span class="${fCls}">${polyH([{ c: fo, vh: `<i>${un}</i>` }])} = ${ng(f[2])}</span>`;
    else if (vi === 1) subH = `${fo !== 0 ? polyH([{ c: fo, vh: `<i>${un}</i>` }]) : ""}${subTerm(fo === 0)} = ${ng(f[2])}`;
    else subH = `${subTerm(true)}${fo !== 0 ? (fo < 0 ? " − " : " + ") + polyH([{ c: Math.abs(fo), vh: `<i>${un}</i>` }]) : ""} = ${ng(f[2])}`;
    void oTerm;
    lines.push({ h: subH, say: fv === 0 ? `Equation ${ei ? 1 : 2} has no ${vn}, so it already involves only ${un}.` : `Substitute into ${ei ? "equation 1" : "equation 2"}: replace ${vn} with the amber expression.` });
    const cst = qm(fv, p), cu = qm(fv, q);
    if (fv !== 0) lines.push({ h: `${polyH(vi === 1 ? [{ c: fo, vh: `<i>${un}</i>` }, { c: cst }, { c: cu, vh: `<i>${un}</i>` }] : [{ c: cst }, { c: cu, vh: `<i>${un}</i>` }, { c: fo, vh: `<i>${un}</i>` }])} = ${ng(f[2])}`, say: "Distribute." });
    const K = qa(cu, fo), Rr = qs(f[2], cst);
    lines.push({ h: `${polyH([{ c: K, vh: `<i>${un}</i>` }])} = ${qh(Rr)}`, say: qz(K) ? `The ${un}-terms cancel.` : `Combine like terms and move the constant: ${qh(f[2])} − ${qz(cst) ? "0" : `(${qh(cst)})`} = ${qh(Rr)}.` });
    if (qz(K)) { R.kind = qz(Rr) ? "inf" : "none"; lines.push({ h: R.kind === "inf" ? `<span class="c5">0 = 0: always true</span>` : `<span class="bad">0 = ${qh(Rr)}: never true</span>`, say: R.kind === "inf" ? "Every solution of one equation solves the other: the equations describe the same line. Infinitely many solutions." : "A false statement: the lines are parallel and never meet. No solution." }); return; }
    const u = qd(Rr, K), v = qa(p, qm(q, u));
    R.kind = "one"; R.x = vi ? u : v; R.y = vi ? v : u;
    lines.push({ h: `<i>${un}</i> = <span class="c5">${qh(u)}</span>`, say: qeq(K, 1) ? "Solved." : `Divide both sides by ${qh(K)}.` });
    lines.push({ h: `<i>${vn}</i> = ${polyH([{ c: p }, { c: q, vh: `(<span class="c5">${qh(u)}</span>)` }]).replace(/<span class=""><\/span>/g, "")} = <span class="c5">${qh(v)}</span>`, say: `Back-substitute into ${vn} = … to find ${vn}.` });
    const c1 = qa(qm(E1[0], R.x), qm(E1[1], R.y)), c2 = qa(qm(E2[0], R.x), qm(E2[1], R.y));
    lines.push({ h: `<span class="c5">(${qh(R.x)}, ${qh(R.y)})</span>`, say: `Check: equation 1 gives ${qt(c1)} = ${ng(E1[2])} ✓, equation 2 gives ${qt(c2)} = ${ng(E2[2])} ✓.` });
  }
  const sel = k.select("System", PRE.map((p, i) => [i, p[0]]), 0, v => { E1 = PRE[+v][1].slice(); E2 = PRE[+v][2].slice(); nums.forEach((n_, i) => n_.set(i < 3 ? E1[i] : E2[i - 3])); build(); st.reset(); });
  void sel;
  const labels = [`<span class="c2"><i>a</i>₁</span>`, `<span class="c2"><i>b</i>₁</span>`, `<span class="c2"><i>c</i>₁</span>`, `<span class="c3"><i>a</i>₂</span>`, `<span class="c3"><i>b</i>₂</span>`, `<span class="c3"><i>c</i>₂</span>`];
  const nums = labels.map((lb, i) => k.number(lb, -20, 20, i < 3 ? E1[i] : E2[i - 3], v => { if (i < 3) E1[i] = v; else E2[i - 3] = v; build(); st.reset(); }, "58px"));
  const st = k.stepper(() => lines.length - 1, render, { ms: 1100 });
  build();
  function render(){
    const K = Math.min(st.k, lines.length - 1);
    stepsEl.innerHTML = lines.slice(0, K + 1).map((ln, i) => `<div class="a12-st${i === K ? " cur" : ""}">${ln.h}<span class="say">${ln.say}</span></div>`).join("");
    showCur(dom);
    const done = K >= lines.length - 1;
    const big = !done ? "…" : R.bad ? "—" : R.kind === "one" ? `<span class="c5">(${qh(R.x)}, ${qh(R.y)})</span>` : R.kind === "inf" ? `<span class="c5">infinitely many</span>` : `<span class="c5">no solution</span>`;
    k.setRO(`<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(big)}</div></div>
      <div class="ro-rows"><div class="row">${M(eqH(E1, "c2"))}<span class="lbl">equation 1: a₁x + b₁y = c₁</span></div><div class="row">${M(eqH(E2, "c3"))}<span class="lbl">equation 2</span></div>
      ${R.v ? `<div class="row">${M(`<i>${R.v}</i> = <span class="c1">${polyH([{ c: R.p }, { c: R.q, vh: `<i>${R.u}</i>` }])}</span>`)}<span class="lbl">the substituted expression, from equation ${R.ei + 1}</span></div>` : ""}</div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${done ? (R.kind === "one" ? "one solution, where the lines cross" : R.kind === "inf" ? "identity: same line" : R.kind === "none" ? "contradiction: parallel lines" : "not a system of lines") : "substitute, then solve one variable"}</div><div class="note">${done ? (R.kind === "one" ? "The exact crossing point, even when it isn't on a grid point." : R.kind === "inf" ? "The variable vanished and left a true statement." : R.kind === "none" ? "The variable vanished and left a false statement." : "Enter a nonzero coefficient.") : "Substitution turns two equations in two unknowns into one equation in one unknown."}</div></div>
      <p class="narr">Pick a system, or type your own coefficients.</p>`);
  }
  render();
  k.loop(() => {
    const wide = dom.clientWidth > 640; gbox.style.height = (wide ? Math.max(260, dom.clientHeight - 70) : 250) + "px";
    c.begin(); if (c.w < 20) return;
    let span = 10; if (R.kind === "one") span = Math.max(10, Math.ceil(Math.max(Math.abs(qv(R.x)), Math.abs(qv(R.y)))) + 2);
    const P = k.plot(c, { xmin: -span, xmax: span, ymin: -span, ymax: span, equal: true, pad: { l: 26, r: 8, t: 8, b: 20 } });
    P.grid(span > 12 ? 5 : 1); P.axes();
    const drawEq = (e, col) => { if (e[1] !== 0) P.fn(x => (e[2] - e[0] * x) / e[1], col, 2.5); else if (e[0] !== 0) { const xv = e[2] / e[0]; P.line(xv, P.ymin - 1, xv, P.ymax + 1, col, 2.5); } };
    drawEq(E1, C.cyan); if (R.kind === "inf") { c.g.save(); c.g.setLineDash([7, 7]); } drawEq(E2, C.pink); if (R.kind === "inf") c.g.restore();
    if (R.kind === "one" && st.k >= lines.length - 1) { P.point(qv(R.x), qv(R.y), C.green, 6); }
    d.text("1", P.left + 6, P.top + 14, { font: `600 12px ${F.mono}`, color: C.cyan }); d.text("2", P.left + 18, P.top + 14, { font: `600 12px ${F.mono}`, color: C.pink });
  });
};

/* ---------- a1-factor-tri ---------- */
L["a1-factor-tri"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const T = X(k);
  let a = 2, b = -5, cc = -12, st;
  const full = () => { if (st) st.k = count(); };
  k.slider("<i>a</i>", 1, 6, 1, a, v => { a = v; full(); });
  k.slider(`<span class="c3"><i>b</i></span>`, -15, 15, 1, b, v => { b = v; full(); });
  k.slider(`<span class="c2"><i>c</i></span>`, -24, 24, 1, cc, v => { cc = v; full(); });
  function pairs(){
    const ac = a * cc, out = [];
    if (ac === 0) return [[b, 0]];
    const N = Math.abs(ac);
    for (let dd = 1; dd * dd <= N; dd++) if (N % dd === 0) { const e = N / dd; if (ac > 0) { const s = b < 0 ? -1 : 1; out.push([s * dd, s * e]); } else { out.push(b >= 0 ? [-dd, e] : [dd, -e]); } }
    return out;
  }
  const win = () => pairs().findIndex(([p, q]) => p + q === b);
  const count = () => { const wi = win(); return wi < 0 ? pairs().length + 1 : wi + 2; };
  st = k.stepper(count, () => {}, { ms: 650 }); st.k = count();
  const tT = (cf, e, lead) => { const aa = Math.abs(cf), v = xt(e); return (cf < 0 ? (lead ? "−" : "− ") : (lead ? "" : "+ ")) + ((aa === 1 && v) ? "" : String(aa)) + v; };
  const binT = (p1, p0) => polyT([{ c: p1, vt: "x" }, { c: p0 }]);
  const binH = (p1, p0, cls) => polyH([{ c: p1, vh: "<i>x</i>", cls }, { c: p0, cls }]);
  const wrapH = (p1, p0) => p0 === 0 ? binH(p1, 0) : `(${binH(p1, p0)})`;
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const ac = a * cc, PR = pairs(), wi = win(), K = st.k, found = wi >= 0 && K >= wi + 1, done = K >= count();
    const wide = w > 640;
    // list panel
    const lx = wide ? 24 : 16, lw = wide ? w * .44 : w - 32, ly = 26, lh = wide ? h - 50 : h * .46;
    T.mt(d, `ac = ${a}·(${ng(cc)}) = ${ng(ac)}`, lx, ly + 4, { size: 16, color: C.cyan });
    T.mt(d, `want p + q = ${ng(b)}`, lx + lw, ly + 4, { size: 16, color: C.pink, align: "right" });
    const rh = Math.min(28, (lh - 30) / Math.max(1, PR.length));
    PR.forEach(([p, q], i) => {
      const y = ly + 22 + i * rh, tested = K > i, isW = i === wi && tested;
      if (isW) d.rr(lx - 6, y, lw + 12, rh - 3, 4, k.alpha(C.amber, .16), C.amber, 1.5);
      const col = isW ? C.amber : tested ? C.text : C.faint, fs = Math.min(15, rh * .62);
      d.text(`${ng(p)} × ${ng(q)} = ${ng(p * q)}`, lx, y + rh * .66, { font: `${fs}px ${F.mono}`, color: col });
      d.text(`${ng(p)} + ${ng(q)} = ${ng(p + q)}`, lx + lw * .62, y + rh * .66, { font: `${fs}px ${F.mono}`, color: col, align: "center" });
      if (tested) d.text(p + q === b ? "✓" : "✗", lx + lw, y + rh * .66, { font: `600 ${fs}px ${F.sans}`, color: p + q === b ? C.amber : C.red, align: "right" });
    });
    if (ac === 0) d.text("c = 0: split b as b + 0", lx, ly + 22 + rh + 18, { font: `12px ${F.sans}`, color: C.faint });
    // area model
    const ax0 = wide ? w * .52 + 40 : 70, ay0 = wide ? 80 : ly + lh + 40, aW = wide ? w * .48 - 90 : w - 110, aH = wide ? h - 190 : h - ay0 - 64;
    const sq = Math.max(40, Math.min(aW, aH)), cw = sq / 2, ox = ax0 + (aW - sq) / 2, oy = ay0;
    let cells, top = null, left = null;
    if (found) { const [p, q] = PR[wi]; const g = gcd(a, p) || a, g2 = q * g / a; top = [a / g, p / g]; left = [g, g2]; cells = [[tT(a, 2, true), C.text], [tT(p, 1, true), C.amber], [tT(q, 1, true), C.amber], [tT(cc, 0, true), C.cyan]]; }
    else cells = [[tT(a, 2, true), C.text], ["?x", C.faint], ["?x", C.faint], [tT(cc, 0, true), C.cyan]];
    const fs = Math.max(13, Math.min(22, cw / 4));
    cells.forEach(([s, col], i) => { const x = ox + (i % 2) * cw, y = oy + Math.floor(i / 2) * cw; d.rect(x, y, cw, cw, k.alpha(col === C.faint ? C.line2 : col, .1), col === C.faint ? C.line2 : col, 1.5); T.mt(d, s, x + cw / 2, y + cw / 2 + fs * .35, { size: fs, color: col, align: "center" }); });
    if (found) { T.mt(d, tT(top[0], 1, true), ox + cw / 2, oy - 10, { size: fs * .85, color: C.text, align: "center" }); T.mt(d, tT(top[1], 0, true), ox + cw * 1.5, oy - 10, { size: fs * .85, color: C.text, align: "center" });
      T.mt(d, tT(left[0], 1, true), ox - 8, oy + cw / 2 + 6, { size: fs * .85, color: C.text, align: "right" }); T.mt(d, tT(left[1], 0, true), ox - 8, oy + cw * 1.5 + 6, { size: fs * .85, color: C.text, align: "right" }); }
    // result line
    const G = gcd(gcd(a, b), cc) || 1;
    let resT = "", resH = "";
    if (done && found) { const [p, q] = PR[wi]; const a1 = a / G, p1 = p / G, q1 = q / G; const g = gcd(a1, p1) || a1, g2 = q1 * g / a1; const L1 = [g, g2], R1 = [a1 / g, p1 / g];
      resT = `${G > 1 ? G : ""}${L1[1] === 0 ? binT(L1[0], 0) : `(${binT(L1[0], L1[1])})`}${R1[1] === 0 ? binT(R1[0], 0) : `(${binT(R1[0], R1[1])})`}`;
      resH = `${G > 1 ? `<span class="c1">${G}</span>` : ""}${wrapH(L1[0], L1[1])}${wrapH(R1[0], R1[1])}`; 
      if (b === 0 && cc === 0) { resT = tT(a, 2, true); resH = polyH([{ c: a, vh: xp(2) }]); } }
    const ry = oy + sq + 36;
    if (done) { if (found) T.mt(d, "= " + resT, ox + sq / 2, ry, { size: Math.min(22, w / 18), color: C.amber, align: "center" }); else d.text("no pair works: prime over the integers", w / 2, Math.min(h - 14, ry), { font: `600 14px ${F.sans}`, color: C.red, align: "center" }); }
    // readout
    const triH = polyH([{ c: a, vh: xp(2) }, { c: b, vh: xp(1), cls: "c3" }, { c: cc, cls: "c2" }]);
    const D = b * b - 4 * a * cc;
    const wp = wi >= 0 ? PR[wi] : null;
    k.setRO(`<div><h2>Factored</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(done ? (found ? resH : `<span class="c1">prime</span>`) : "…")}</div><div class="narr" style="margin-top:4px">${M(triH)}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`<i>a</i>·<span class="c2"><i>c</i></span> = <span class="c2">${ng(ac)}</span>`)}<span class="lbl">find two numbers whose product is ac…</span></div>
        <div class="row">${M(`<i>p</i> + <i>q</i> = <span class="c3">${ng(b)}</span>`)}<span class="lbl">…and whose sum is b</span></div>
        ${found && wp ? `<div class="row">${M(`<span class="c1">${ng(wp[0])}</span>, <span class="c1">${ng(wp[1])}</span>`)}<span class="lbl">the winning pair; split the middle term</span></div>
        <div class="row">${M(polyH([{ c: a, vh: xp(2) }, { c: wp[0], vh: xp(1), cls: "c1" }, { c: wp[1], vh: xp(1), cls: "c1" }, { c: cc, cls: "c2" }]))}<span class="lbl">then factor by grouping (the rows and columns of the area model)</span></div>` : ""}
        <div class="row">${M(`<i>b</i><sup>2</sup> − 4<i>ac</i> = ${ng(D)}`)}<span class="lbl">${D >= 0 && isSq(D) ? `a perfect square (${Math.sqrt(D)}²), so it factors over the integers` : "not a perfect square, so no integer pair exists"}</span></div>
      </div>
      <div class="landmark${done ? " hit" : ""}">${done ? (found ? `<div class="big">${M(resH)}</div><div class="note">${G > 1 ? `First the common factor ${G}, then the binomials. ` : ""}Multiply back to check: the area model's four cells add up to the trinomial.</div>` : `<div class="big">prime over the integers</div><div class="note">No factor pair of ${ng(ac)} adds to ${ng(b)}. The trinomial can't be written as a product of binomials with integer coefficients.</div>`) : `<div class="big">searching pairs of ${ng(ac)}…</div><div class="note">Each row is a factor pair; only one sum matches b.</div>`}</div>
      <p class="narr">Press Play to watch the search.</p>`);
  });
};

/* ---------- a1-radical-eq ---------- */
L["a1-radical-eq"] = k => {
  const { C, F, M, fmt } = k; const T = X(k); const dom = k.dom();
  let A = 7, B = 1;
  dom.innerHTML = `<div class="a12-flex"><div class="a12-steps"></div><div class="a12-gbox"></div></div>`;
  const stepsEl = dom.querySelector(".a12-steps"), gbox = dom.querySelector(".a12-gbox"); const c = T.boxCanvas(gbox); const d = c.d;
  let lines = [], R = {};
  const lin = (a1, a0, cls) => `<span class="${cls}">${polyH([{ c: a1, vh: "<i>x</i>" }, { c: a0 }])}</span>`;
  const sq = (cls) => `<span class="${cls}">√<span class="a12-rad">${polyH([{ c: 1, vh: "<i>x</i>" }, { c: A }])}</span></span>`;
  function build(){
    lines = []; R = {};
    const D = 1 - 4 * B + 4 * A; R.D = D;
    lines.push({ h: `${sq("c2")} = ${lin(1, B, "c3")}`, say: "The radical is already alone on one side." });
    lines.push({ h: `<span class="c2">${polyH([{ c: 1, vh: "<i>x</i>" }, { c: A }])}</span> = <span class="c3">(${polyH([{ c: 1, vh: "<i>x</i>" }, { c: B }])})<sup>2</sup></span>`, say: "Square both sides. Squaring can add solutions, so every answer must be checked." });
    lines.push({ h: `${polyH([{ c: 1, vh: "<i>x</i>" }, { c: A }])} = ${polyH([{ c: 1, vh: xp(2) }, { c: 2 * B, vh: xp(1) }, { c: B * B }])}`, say: `Expand: (x + b)² = x² + 2bx + b².` });
    lines.push({ h: `0 = ${polyH([{ c: 1, vh: xp(2) }, { c: 2 * B - 1, vh: xp(1) }, { c: B * B - A }])}`, say: "Move everything to one side." });
    if (D < 0) { R.none = true; lines.push({ h: `<span class="bad">no real solutions</span>`, say: `Discriminant (2b − 1)² − 4(b² − a) = ${ng(D)} < 0: the quadratic has no real roots, so the radical equation has none either.` }); return; }
    const s = Math.sqrt(D), exact = isSq(D); const p = 1 - 2 * B;
    let roots;
    if (exact) { const r1 = (p + Math.round(s)) / 2, r2 = (p - Math.round(s)) / 2; roots = [{ v: r1, h: ng(r1), plus: true }, { v: r2, h: ng(r2), plus: false }];
      lines.push({ h: `0 = ${`(${polyH([{ c: 1, vh: "<i>x</i>" }, { c: -r1 }])})(${polyH([{ c: 1, vh: "<i>x</i>" }, { c: -r2 }])})`} → <i>x</i> = ${ng(r1)} or <i>x</i> = ${ng(r2)}`, say: `Factor (discriminant ${D} = ${Math.round(s)}²).` }); }
    else { const [f, r] = sqf(D); const rad = `${f > 1 ? f : ""}√<span class="a12-rad">${r}</span>`; roots = [{ v: (p + s) / 2, h: fracH(`${ng(p)} + ${rad}`, 2), plus: true }, { v: (p - s) / 2, h: fracH(`${ng(p)} − ${rad}`, 2), plus: false }];
      lines.push({ h: `<i>x</i> = ${fracH(`${ng(p)} ± √<span class="a12-rad">${D}</span>`, 2)}`, say: `Quadratic formula (discriminant ${D} is not a perfect square).` }); }
    // check: valid iff x + b >= 0 ; x + b = (1 ± s)/2
    roots.forEach(rt => { rt.ok = rt.plus || s <= 1; rt.rhs = rt.v + B; });
    R.roots = roots;
    roots.forEach(rt => {
      const lhs = Math.sqrt(rt.v + A);
      const txt = exact ? `√<span class="a12-rad">${ng(rt.v)}${A === 0 ? "" : ` ${A < 0 ? "−" : "+"} ${Math.abs(A)}`}</span> = ${Math.round(lhs)} ${rt.ok ? "=" : "≠"} ${ng(rt.v + B)}` : `√<span class="a12-rad">${polyH([{ c: 1, vh: "<i>x</i>" }, { c: A }])}</span> ≈ ${fmt(lhs, 3)} ${rt.ok ? "=" : "≠"} ${fmt(rt.rhs, 3)}`;
      lines.push({ h: `<i>x</i> = ${rt.h}: ${txt} <span class="${rt.ok ? "ok" : "bad"}">${rt.ok ? "✓ valid" : "✗ extraneous"}</span>`, say: rt.ok ? "It checks in the original equation." : `The right side ${exact ? ng(rt.v + B) : "≈ " + fmt(rt.rhs, 3)} is negative, but a square root is never negative. This root came from squaring.` });
    });
  }
  const sA = k.slider("<i>a</i>", -6, 12, 1, A, v => { A = v; build(); st.k = lines.length - 1; render(); });
  const sB = k.slider("<i>b</i>", -6, 6, 1, B, v => { B = v; build(); st.k = lines.length - 1; render(); });
  void sA; void sB;
  const st = k.stepper(() => lines.length - 1, render, { ms: 1100 });
  build(); st.k = lines.length - 1;
  function render(){
    const K = Math.min(st.k, lines.length - 1);
    stepsEl.innerHTML = lines.slice(0, K + 1).map((ln, i) => `<div class="a12-st${i === K ? " cur" : ""}">${ln.h}<span class="say">${ln.say}</span></div>`).join("");
    showCur(dom);
    const done = K >= lines.length - 1, good = R.roots ? R.roots.filter(r => r.ok) : [], bad = R.roots ? R.roots.filter(r => !r.ok) : [];
    const big = !done ? "…" : R.none || !good.length ? `<span class="c5">no solution</span>` : good.map(r => `<span class="c5"><i>x</i> = ${r.h}</span>`).join(", ");
    k.setRO(`<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(big)}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`${sq("c2")} = ${lin(1, B, "c3")}`)}<span class="lbl">left side (cyan curve) = right side (pink line)</span></div>
        <div class="row">${M(`<i>x</i> + <i>a</i> = (<i>x</i> + <i>b</i>)<sup>2</sup>`)}<span class="lbl">after squaring: also true where −√(x + a) = x + b (dashed curve)</span></div>
        ${R.roots ? R.roots.map(r => `<div class="row">${M(`<i>x</i> = ${r.h}`)} <span class="v" style="color:var(${r.ok ? "--green" : "--red"})">${r.ok ? "valid" : "extraneous"}</span><span class="lbl">≈ ${fmt(r.v, 3)}; x + b ${r.ok ? "≥" : "<"} 0</span></div>`).join("") : ""}
      </div>
      <div class="landmark${done && (bad.length || R.none) ? " hit" : ""}"><div class="big">${done ? (R.none ? "no real solution" : bad.length ? `${bad.length} extraneous root` : "both roots check") : "square, solve, then check"}</div><div class="note">${done ? (R.none ? "The line misses the curve and the squared equation has no real roots." : bad.length ? "The red point is where the line meets the mirror image −√(x + a). Squaring can't tell √ from −√, so it lets that root in." : "Both crossings are on the real curve.") : "Checking is part of the method, not an extra."}</div></div>
      <p class="narr">Change a and b: watch the red point move onto and off the dashed branch.</p>`);
  }
  render();
  k.loop(() => {
    const wide = dom.clientWidth > 640; gbox.style.height = (wide ? Math.max(260, dom.clientHeight - 70) : 250) + "px";
    c.begin(); if (c.w < 20) return;
    const xs = [-A, ...(R.roots || []).map(r => r.v)], ys = (R.roots || []).map(r => r.rhs);
    const xmin = Math.floor(Math.min(...xs) - 2), xmax = Math.ceil(Math.max(-A + 10, ...xs.map(x => x + 3)));
    const yM = Math.max(4, Math.sqrt(xmax + A) + 1, ...ys.map(y => Math.abs(y) + 1.5));
    const P = k.plot(c, { xmin, xmax, ymin: -yM, ymax: yM, pad: { l: 28, r: 8, t: 8, b: 20 } });
    P.grid(); P.axes();
    P.fn(x => x + A >= 0 ? -Math.sqrt(x + A) : NaN, k.alpha(C.cyan, .5), 1.6, -A, P.xmax, [6, 5]);
    P.fn(x => x + A >= 0 ? Math.sqrt(x + A) : NaN, C.cyan, 2.8, -A, P.xmax);
    P.fn(x => x + B, C.pink, 2.5);
    P.point(-A, 0, C.cyan, 3.5);
    const K = st.k;
    (R.roots || []).forEach((r, i) => { if (K >= 5 + i || K >= lines.length - 1) { P.point(r.v, r.rhs, r.ok ? C.green : C.red, 6); } });
    d.text("√(x + a)", P.left + 6, P.top + 14, { font: `italic 13px ${F.math}`, color: C.cyan }); d.text("x + b", P.left + 6, P.top + 30, { font: `italic 13px ${F.math}`, color: C.pink });
  });
};

})();
