/* ============ Labs: Algebra I, part 1 (equations, functions, exponents, lines) ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const lcm = (a, b) => a / gcd(a, b) * b;
const INF = Infinity;
const AR = `<span style="font-family:var(--sans)">→</span>`;
const neg = n => n === INF ? "∞" : n === -INF ? "−∞" : (n < 0 ? "−" + String(Math.abs(n)) : String(n));

/* ---- exact rationals ---- */
const Q = (n, d = 1) => { if (d === 0) throw new Error("zero denominator"); if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const qi = n => Q(n, 1);
const qa = (a, b) => Q(a.n * b.d + b.n * a.d, a.d * b.d);
const qs = (a, b) => Q(a.n * b.d - b.n * a.d, a.d * b.d);
const qm = (a, b) => Q(a.n * b.n, a.d * b.d);
const qd = (a, b) => Q(a.n * b.d, a.d * b.n);
const qabs = a => Q(Math.abs(a.n), a.d);
const qv = a => a.n / a.d;
const qeq = (a, b) => a.n === b.n && a.d === b.d;
const FR = (t, b) => `<span class="fr"><span>${t}</span><span>${b}</span></span>`;
const qh = a => a.d === 1 ? neg(a.n) : (a.n < 0 ? "−" : "") + FR(Math.abs(a.n), a.d);   // HTML
const qt = a => a.d === 1 ? neg(a.n) : neg(a.n) + "/" + a.d;                            // plain text
const X_ = `<i class="c2">x</i>`;
function termMag(c, v){ const a = qabs(c); if (!v) return qh(a); if (a.d === 1) return (a.n === 1 ? "" : a.n) + v; return FR((a.n === 1 ? "" : a.n) + v, a.d); }
function joinTerms(list){ if (!list.length) return "0"; return list.map(([s, m], i) => i === 0 ? (s < 0 ? "−" + m : m) : (s < 0 ? " − " : " + ") + m).join(""); }
function lin(a, b, v = X_){ const t = []; if (a.n) t.push([Math.sign(a.n), termMag(a, v)]); if (b.n) t.push([Math.sign(b.n), qh(qabs(b))]); return joinTerms(t); }
const linT = (a, b, v = "x") => { const t = []; if (a) t.push((a < 0 ? "−" : "") + (Math.abs(a) === 1 ? "" : Math.abs(a)) + v); if (b) t.push(b < 0 ? "−" + Math.abs(b) : String(b)); if (!t.length) return "0"; return t.map((s, i) => i === 0 ? s : s[0] === "−" ? " − " + s.slice(1) : " + " + s).join(""); };

/* ---- intervals ---- */
const IV = (lo, hi, loC, hiC) => ({ lo, hi, loC: !!loC, hiC: !!hiC });
const ivStr = iv => iv.lo === iv.hi ? `{${neg(iv.lo)}}` : `${iv.loC ? "[" : "("}${neg(iv.lo)}, ${neg(iv.hi)}${iv.hiC ? "]" : ")"}`;
const isAll = ivs => ivs.length === 1 && ivs[0].lo === -INF && ivs[0].hi === INF;
const setStr = ivs => !ivs.length ? "∅" : ivs.map(ivStr).join(" ∪ ");
function ivIneq(iv, v = "<i>x</i>"){
  if (iv.lo === -INF && iv.hi === INF) return "all real numbers";
  if (iv.lo === iv.hi) return `${v} = ${neg(iv.lo)}`;
  if (iv.lo === -INF) return `${v} ${iv.hiC ? "≤" : "&lt;"} ${neg(iv.hi)}`;
  if (iv.hi === INF) return `${v} ${iv.loC ? "≥" : "&gt;"} ${neg(iv.lo)}`;
  return `${neg(iv.lo)} ${iv.loC ? "≤" : "&lt;"} ${v} ${iv.hiC ? "≤" : "&lt;"} ${neg(iv.hi)}`;
}
const setIneq = ivs => !ivs.length ? "no solution" : ivs.map(iv => ivIneq(iv)).join(" or ");
const inIv = (iv, x) => (x > iv.lo || (iv.loC && x === iv.lo)) && (x < iv.hi || (iv.hiC && x === iv.hi));
const inSet = (ivs, x) => ivs.some(iv => inIv(iv, x));
function ivAnd(A, B){
  const lo = Math.max(A.lo, B.lo), hi = Math.min(A.hi, B.hi);
  const loC = A.lo > B.lo ? A.loC : B.lo > A.lo ? B.loC : A.loC && B.loC;
  const hiC = A.hi < B.hi ? A.hiC : B.hi < A.hi ? B.hiC : A.hiC && B.hiC;
  if (lo > hi || (lo === hi && !(loC && hiC))) return [];
  return [IV(lo, hi, loC, hiC)];
}
function ivOr(A, B){
  if (A.lo > B.lo || (A.lo === B.lo && !A.loC && B.loC)) [A, B] = [B, A];
  if (A.hi > B.lo || (A.hi === B.lo && (A.hiC || B.loC))) {
    const hi = Math.max(A.hi, B.hi), hiC = A.hi > B.hi ? A.hiC : B.hi > A.hi ? B.hiC : A.hiC || B.hiC;
    return [IV(A.lo, hi, A.loC || (A.lo === B.lo && B.loC), hiC)];
  }
  return [A, B];
}

/* ---- canvas helpers ---- */
function numLine(k, c, lo, hi, x0, x1, y){
  const { C, F } = k, d = c.d, X = v => x0 + (x1 - x0) * (v - lo) / (hi - lo);
  d.line(x0 - 6, y, x1 + 6, y, C.muted, 2);
  const tri = (x, dir) => { const g = c.g; g.fillStyle = C.muted; g.beginPath(); g.moveTo(x + dir * 9, y); g.lineTo(x, y - 5); g.lineTo(x, y + 5); g.closePath(); g.fill(); };
  tri(x1 + 6, 1); tri(x0 - 6, -1);
  const px = (x1 - x0) / (hi - lo), lab = px >= 26 ? 1 : px >= 12 ? 2 : px >= 5 ? 5 : 10;
  for (let v = Math.ceil(lo); v <= hi; v++) { const major = v % lab === 0; if (!major && px < 4) continue; d.line(X(v), y - (major ? 6 : 3), X(v), y + (major ? 6 : 3), v === 0 ? C.text : C.faint, v === 0 ? 1.5 : 1); if (major) d.text(neg(v), X(v), y + 22, { font: `${v === 0 ? 600 : 400} 12px ${F.mono}`, color: v === 0 ? C.text : C.faint, align: "center" }); }
  return X;
}
function drawSet(k, c, X, lo, hi, y, ivs, color, lw = 6){
  const { C } = k, d = c.d, g = c.g;
  ivs.forEach(iv => {
    const a = Math.max(lo, iv.lo), b = Math.min(hi, iv.hi);
    if (a > b) return;
    if (iv.lo === iv.hi) { d.circle(X(a), y, 7, color); return; }
    const xa = iv.lo === -INF ? X(lo) - 4 : X(a), xb = iv.hi === INF ? X(hi) + 4 : X(b);
    g.save(); g.strokeStyle = color; g.lineWidth = lw; g.beginPath(); g.moveTo(xa, y); g.lineTo(xb, y); g.stroke(); g.restore();
    const head = (x, dir) => { g.fillStyle = color; g.beginPath(); g.moveTo(x + dir * 13, y); g.lineTo(x, y - lw - 2); g.lineTo(x, y + lw + 2); g.closePath(); g.fill(); };
    if (iv.lo === -INF) head(xa, -1); else if (iv.lo >= lo) { if (iv.loC) d.circle(X(iv.lo), y, 7, color); else d.circle(X(iv.lo), y, 6.5, C.ink, color, 2.5); }
    if (iv.hi === INF) head(xb, 1); else if (iv.hi <= hi) { if (iv.hiC) d.circle(X(iv.hi), y, 7, color); else d.circle(X(iv.hi), y, 6.5, C.ink, color, 2.5); }
  });
}
// draw a centred sequence of text / powers on a canvas; parts: [text, color] or {b, e, bc, ec}
function seq(k, c, parts, cx, y, size, align = "center"){
  const d = c.d, f = `${size}px ${k.F.math}`;
  const wOf = p => Array.isArray(p) ? d.width(p[0], f) : d.powW(p.b, p.e, size);
  const tot = parts.reduce((s, p) => s + wOf(p), 0);
  let x = align === "center" ? cx - tot / 2 : align === "right" ? cx - tot : cx;
  parts.forEach(p => { if (Array.isArray(p)) { d.text(p[0], x, y, { font: f, color: p[1] || k.C.text }); } else d.pow(p.b, p.e, x, y, { size, color: p.bc, ecolor: p.ec }); x += wOf(p); });
  return tot;
}

/* ---- shared step-list styling (DOM steppers) ---- */
if (!document.getElementById("a1s-style")) {
  const s = document.createElement("style"); s.id = "a1s-style";
  s.textContent = `.a1s{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:34px 4px 18px;min-height:100%;box-sizing:border-box}
.a1s-eq{font:400 17px/1.5 var(--math);color:var(--muted);text-align:center;max-width:100%}
.a1s-eq.on{font-size:clamp(21px,3vw,33px);color:var(--text)}
.a1s-op{font:500 12px/1.3 var(--sans);color:var(--faint);border:1px solid var(--line);border-radius:10px;padding:2px 10px;text-align:center}
.a1s-op.on{color:var(--amber);border-color:rgba(242,184,75,.6);background:rgba(242,184,75,.12)}
.a1s-next{font:12.5px/1.4 var(--sans);color:var(--faint);margin-top:8px;text-align:center}
.a1s-brace{display:inline-flex;align-items:center;gap:4px}
.a1s-brace .br{font-size:2.6em;line-height:1;font-weight:200}
.a1s-brace table{border-collapse:collapse;font-size:15px}
.a1s-brace td{padding:1px 8px 1px 0;white-space:nowrap}
.a1s-brace tr.on td{color:var(--amber)}
.a1s .fr sup{font-size:.7em;line-height:0}
.a1s .fr>span:last-child:has(sup){padding-top:.3em}`;
  document.head.appendChild(s);
}
function stepsHTML(lines, cur, nextNote){
  let h = `<div class="a1s">`;
  for (let i = 0; i <= cur; i++) { const l = lines[i], on = i === cur;
    if (i > 0 && l.op) h += `<div class="a1s-op${on ? " on" : ""}">↓ ${l.op}</div>`;
    h += `<div class="a1s-eq${on ? " on" : ""}">${l.eq}</div>`; }
  if (nextNote) h += `<div class="a1s-next">${nextNote}</div>`;
  return h + `</div>`;
}

/* =============== a1-multi-step: LCD, distribute, collect, solve =============== */
L["a1-multi-step"] = k => {
  const { M } = k; const dom = k.dom();
  const G = (c, a, b, dec) => ({ c: typeof c === "number" ? qi(c) : c, a, b, dec: !!dec });
  const PRE = {
    frac: { name: "x/2 + (x − 1)/3 = 4", L: [G(Q(1, 2), 1, 0), G(Q(1, 3), 1, -1)], R: [G(1, 0, 4)] },
    dist: { name: "3(2x − 4) = 2(x + 5) + 2", L: [G(3, 2, -4)], R: [G(2, 1, 5), G(1, 0, 2)] },
    frac2: { name: "(2x + 1)/3 − (x − 2)/4 = 5/6", L: [G(Q(1, 3), 2, 1), G(Q(-1, 4), 1, -2)], R: [G(Q(5, 6), 0, 1)] },
    cross: { name: "(x + 3)/4 = (2x − 1)/6", L: [G(Q(1, 4), 1, 3)], R: [G(Q(1, 6), 2, -1)] },
    dec: { name: "0.5(x + 4) = 0.2x + 3.2", L: [G(Q(1, 2), 1, 4, 1)], R: [G(Q(1, 5), 1, 0, 1), G(Q(16, 5), 0, 1, 1)] },
    ident: { name: "2(x + 3) − x = x + 6 (identity)", L: [G(2, 1, 3), G(-1, 1, 0)], R: [G(1, 1, 0), G(1, 0, 6)] },
    contra: { name: "4x − 2(x − 1) = 2x + 5 (contradiction)", L: [G(4, 1, 0), G(-2, 1, -1)], R: [G(2, 1, 0), G(1, 0, 5)] }
  };
  const decS = q => k.fmt(Math.abs(qv(q)), 6);
  function gPart(g){
    const A = qi(g.a), B = qi(g.b);
    if (g.a === 0) { const v = qm(g.c, B); return [Math.sign(v.n) || 1, g.dec ? decS(v) : qh(qabs(v))]; }
    if (g.b === 0) { const v = qm(g.c, A); return [Math.sign(v.n), g.dec ? decS(v) + X_ : termMag(v, X_)]; }
    const inner = lin(A, B), s = Math.sign(g.c.n), m = qabs(g.c);
    if (g.dec) return [s, `${decS(m)}(${inner})`];
    if (m.d === 1) return [s, m.n === 1 ? (s < 0 ? `(${inner})` : inner) : `${m.n}(${inner})`];
    return [s, FR(m.n === 1 ? inner : `${m.n}(${inner})`, m.d)];
  }
  const sideG = gs => joinTerms(gs.map(gPart));
  const sideT = ts => joinTerms(ts.filter(t => t.v.n).map(t => [Math.sign(t.v.n), t.x ? termMag(t.v, X_) : qh(qabs(t.v))]));
  const evalG = (gs, x) => gs.reduce((s, g) => qa(s, qm(g.c, qa(qm(qi(g.a), x), qi(g.b)))), qi(0));
  let key = "frac", cur = PRE.frac, plan;
  function build(p){
    const lines = []; let Lg = p.L, Rg = p.R;
    const eqG = () => `${sideG(Lg)} = ${sideG(Rg)}`;
    lines.push({ eq: eqG(), say: "The original equation." });
    const all = [...Lg, ...Rg], lcd = all.map(g => g.c.d).reduce(lcm, 1), isDec = all.some(g => g.dec);
    if (lcd > 1) {
      Lg = Lg.map(g => ({ ...g, c: qm(g.c, qi(lcd)), dec: false })); Rg = Rg.map(g => ({ ...g, c: qm(g.c, qi(lcd)), dec: false }));
      lines.push({ eq: eqG(), op: `× <span class="c4">${lcd}</span> on both sides`, kind: "lcd", say: isDec ? `Multiply every term on both sides by ${lcd} to clear the decimals.` : `Multiply every term on both sides by the LCD, ${lcd}, to clear the fractions.` });
    }
    const toT = gs => { const t = []; gs.forEach(g => { if (g.a) t.push({ x: true, v: qm(g.c, qi(g.a)) }); if (g.b) t.push({ x: false, v: qm(g.c, qi(g.b)) }); }); return t; };
    const Lt = toT(Lg), Rt = toT(Rg);
    if ([...Lg, ...Rg].some(g => g.a && g.b && !qeq(g.c, qi(1)))) lines.push({ eq: `${sideT(Lt)} = ${sideT(Rt)}`, op: "distribute", say: "Distribute: multiply the number in front by each term inside the parentheses. Watch the signs." });
    const sum = (t, x) => t.filter(q => q.x === x).reduce((s, q) => qa(s, q.v), qi(0));
    const cnt = (t, x) => t.filter(q => q.x === x).length;
    let A = sum(Lt, true), B = sum(Lt, false), Cc = sum(Rt, true), D = sum(Rt, false);
    if (cnt(Lt, true) > 1 || cnt(Lt, false) > 1 || cnt(Rt, true) > 1 || cnt(Rt, false) > 1) lines.push({ eq: `${lin(A, B)} = ${lin(Cc, D)}`, op: "combine like terms", say: "Combine like terms on each side: x terms with x terms, numbers with numbers." });
    if (Cc.n) { const s = Cc.n > 0; A = qs(A, Cc); lines.push({ eq: `${lin(A, B)} = ${lin(qi(0), D)}`, op: `${s ? "−" : "+"} ${termMag(Cc, X_)} on both sides`, say: `${s ? "Subtract" : "Add"} ${termMag(Cc, "x")} on both sides so the variable is on one side only.` }); Cc = qi(0); }
    let type = "one", sol = null;
    if (!A.n) type = qeq(B, D) ? "all" : "none";
    else {
      if (B.n) { const s = B.n > 0; D = qs(D, B); lines.push({ eq: `${lin(A, qi(0))} = ${qh(D)}`, op: `${s ? "−" : "+"} ${qh(qabs(B))} on both sides`, say: `${s ? "Subtract" : "Add"} ${qh(qabs(B))} on both sides to isolate the x term.` }); B = qi(0); }
      sol = qd(D, A);
      const fin = `${X_} = <span class="c5">${qh(sol)}</span>`;
      if (qeq(A, qi(1))) lines[lines.length - 1].eq = fin;
      else lines.push({ eq: fin, op: `÷ ${A.n < 0 || A.d > 1 ? "(" + qh(A) + ")" : qh(A)} on both sides`, say: `Divide both sides by ${qh(A)}, the coefficient of x.` });
    }
    return { lines, type, sol, lcd, isDec, B, D, p };
  }
  function rnd(){
    const r = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
    let a, dd, b; do { a = r(2, 6); dd = r(1, 5); } while (a === dd); do { b = r(-6, 6); } while (!b);
    const cc = r(-9, 9) || 4, x0 = r(-6, 6), e = a * (x0 + b) + cc - dd * x0;
    const R = [G(dd, 1, 0)]; if (e) R.push(G(1, 0, e));
    return { name: "random", L: [G(a, 1, b), G(1, 0, cc)], R };
  }
  plan = build(cur);
  const sel = k.select("Equation", [...Object.entries(PRE).map(([kk, p]) => [kk, p.name]), ["rnd", "Random equation"]], key, v => { key = v; cur = v === "rnd" ? rnd() : PRE[v]; plan = build(cur); st.reset(); });
  const st = k.stepper(() => plan.lines.length - 1, render, { ms: 1300 });
  k.button("New random", () => { key = "rnd"; sel.set("rnd"); cur = rnd(); plan = build(cur); st.reset(); }, "btn ghost");
  function render(){
    const ln = plan.lines, K = Math.min(st.k, ln.length - 1), done = K === ln.length - 1, nxt = ln[K + 1];
    dom.innerHTML = stepsHTML(ln, K, done ? "" : `next: ${nxt.op}`);
    dom.scrollTop = dom.scrollHeight;
    const { type, sol, lcd } = plan;
    let big = `${X_} = ?`;
    if (done) big = type === "one" ? `${X_} = <span class="num c5">${qh(sol)}</span>` : `<span class="c5" style="font-size:.8em">${type === "all" ? "all real numbers" : "no solution"}</span>`;
    let rows = `<div class="row">${M("step")} <span class="v">${K} of ${ln.length - 1}</span><span class="lbl">LCD → distribute → combine → collect x → isolate</span></div>`;
    if (lcd > 1) rows += `<div class="row">${M("LCD")} = <span class="v c4">${lcd}</span><span class="lbl">${plan.isDec ? "a power of ten clears every decimal place" : "the smallest number every denominator divides into"}</span></div>`;
    if (done && type === "one") { const lv = evalG(cur.L, sol), rv = evalG(cur.R, sol); rows += `<div class="row">${M("check")} left = <span class="v">${qh(lv)}</span>, right = <span class="v">${qh(rv)}</span><span class="lbl">substitute ${X_} = ${qh(sol)} into the original equation: both sides agree</span></div>`; }
    let lm;
    if (done && type === "one") lm = `<div class="landmark hit"><div class="big">${M(`${X_} = <span class="c5">${qh(sol)}</span>`)}</div><div class="note">Exactly one solution. Every step did the same thing to both sides, so the balance was never broken.</div></div>`;
    else if (done && type === "all") lm = `<div class="landmark hit"><div class="big">${M(`${qh(plan.B)} = ${qh(plan.D)} is always true`)}</div><div class="note">Identity: the x terms cancelled and what remains is true, so every real number is a solution. Solution set ℝ.</div></div>`;
    else if (done) lm = `<div class="landmark hit"><div class="big">${M(`${qh(plan.B)} = ${qh(plan.D)} is never true`)}</div><div class="note">Contradiction: the x terms cancelled and what remains is false, so no value of x works. Solution set ∅.</div></div>`;
    else lm = `<div class="landmark"><div class="big">${M(nxt.op)}</div><div class="note">${nxt.say}</div></div>`;
    k.setRO(`<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px">${big}</div></div><div class="ro-rows">${rows}</div>${lm}<p class="narr">Press Step to apply one operation. Try the identity and contradiction presets, where x disappears.</p>`);
  }
  render();
};

/* =============== a1-functions: notation, domain & range =============== */
L["a1-functions"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const isSq = n => n >= 0 && Number.isInteger(Math.sqrt(n));
  const FN = {
    lin: { name: "f(x) = 2x − 1 on [−2, 3]", tex: "2<i>x</i> − 1", f: x => 2 * x - 1, ex: a => qh(qs(qm(qi(2), a), qi(1))), dom: [IV(-2, 3, 1, 1)], rng: [IV(-5, 5, 1, 1)], dSB: "−2 ≤ <i>x</i> ≤ 3", rSB: "−5 ≤ <i>y</i> ≤ 5", view: [-6, 6, -7, 7], why: "This function is only defined for −2 ≤ x ≤ 3.", note: "A line on a closed interval: the range runs from f(−2) to f(3)." },
    quad: { name: "f(x) = x² − 2 on [−2, 3)", tex: "<i>x</i><sup>2</sup> − 2", f: x => x * x - 2, ex: a => qh(qs(qm(a, a), qi(2))), dom: [IV(-2, 3, 1, 0)], rng: [IV(-2, 7, 1, 0)], dSB: "−2 ≤ <i>x</i> &lt; 3", rSB: "−2 ≤ <i>y</i> &lt; 7", view: [-5, 5, -4, 9], why: "This function is only defined for −2 ≤ x < 3.", note: "The lowest output, −2, comes from x = 0 inside the domain, not from an endpoint. The open circle at x = 3 keeps 7 out of the range." },
    sqrt: { name: "f(x) = √(x + 4)", tex: "√(<i>x</i> + 4)", f: x => x >= -4 ? Math.sqrt(x + 4) : NaN, ex: a => { const v = qa(a, qi(4)); return isSq(v.n) && isSq(v.d) ? qh(Q(Math.sqrt(v.n), Math.sqrt(v.d))) : `√${v.d === 1 ? v.n : "(" + qt(v) + ")"} ≈ ${k.fmt(Math.sqrt(qv(v)), 3)}`; }, dom: [IV(-4, INF, 1, 0)], rng: [IV(0, INF, 1, 0)], dSB: "<i>x</i> ≥ −4", rSB: "<i>y</i> ≥ 0", view: [-6, 8, -2, 5], why: "x + 4 would be negative, and a negative number has no real square root.", note: "The natural domain: x + 4 ≥ 0. Square roots are never negative, so the range starts at 0." },
    recip: { name: "f(x) = 1/(x − 1)", tex: "<span class=\"fr\"><span>1</span><span><i>x</i> − 1</span></span>", f: x => 1 / (x - 1), ex: a => qh(qd(qi(1), qs(a, qi(1)))), dom: [IV(-INF, 1, 0, 0), IV(1, INF, 0, 0)], rng: [IV(-INF, 0, 0, 0), IV(0, INF, 0, 0)], dSB: "<i>x</i> ≠ 1", rSB: "<i>y</i> ≠ 0", view: [-5, 6, -6, 6], why: "x − 1 = 0, and division by zero is undefined.", note: "One x is missing from the domain (the vertical asymptote x = 1) and one y is never reached: 1/(x − 1) is never 0." },
    abs: { name: "f(x) = |x| − 3 on (−4, 4]", tex: "|<i>x</i>| − 3", f: x => Math.abs(x) - 3, ex: a => qh(qs(qabs(a), qi(3))), dom: [IV(-4, 4, 0, 1)], rng: [IV(-3, 1, 1, 1)], dSB: "−4 &lt; <i>x</i> ≤ 4", rSB: "−3 ≤ <i>y</i> ≤ 1", view: [-6, 6, -5, 4], why: "This function is only defined for −4 < x ≤ 4.", note: "The open end at x = −4 would give 1, but x = 4 also gives 1 and is included, so 1 is in the range." }
  };
  let key = "lin", a = 1, lastP = null, drag = false;
  const sa = k.slider(`<span class="c1"><i>a</i></span>`, -6, 8, 0.5, a, v => a = v, v => neg(v));
  k.select("Function", Object.entries(FN).map(([kk, p]) => [kk, p.name]), key, v => { key = v; const [x0, x1] = FN[v].view; sa.setMin(x0); sa.setMax(x1); if (a < x0) a = x0; if (a > x1) a = x1; sa.set(a); });
  sa.setMin(-6); sa.setMax(6);
  k.hint("Drag across the graph to move a");
  const setFrom = e => { if (!lastP) return; const p = c.xy(e), v = lastP.inv(p.x, p.y).x; const [x0, x1] = FN[key].view; a = Math.max(x0, Math.min(x1, Math.round(v * 2) / 2)); sa.set(a); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setFrom(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setFrom(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "ew-resize";
  k.loop(() => {
    c.begin(); const p = FN[key], [x0, x1, y0, y1] = p.view;
    const P = k.plot(c, { xmin: x0, xmax: x1, ymin: y0, ymax: y1, pad: { l: 34, r: 14, t: 16, b: 28 }, xlabel: "x", ylabel: "y" }); lastP = P;
    P.grid(1); P.axes();
    const g = c.g;
    // domain band on the x-axis, range band on the y-axis
    const band = (ivs, horiz, color) => ivs.forEach(iv => {
      const lo = Math.max(iv.lo, horiz ? x0 : y0), hi = Math.min(iv.hi, horiz ? x1 : y1);
      g.save(); g.strokeStyle = k.alpha(color, .6); g.lineWidth = 7; g.beginPath();
      if (horiz) { g.moveTo(P.X(lo), P.Y(0)); g.lineTo(P.X(hi), P.Y(0)); } else { g.moveTo(P.X(0), P.Y(lo)); g.lineTo(P.X(0), P.Y(hi)); } g.stroke(); g.restore();
      [[iv.lo, iv.loC], [iv.hi, iv.hiC]].forEach(([v, cl]) => { if (!isFinite(v)) return; const px = horiz ? P.X(v) : P.X(0), py = horiz ? P.Y(0) : P.Y(v); if (cl) d.circle(px, py, 5.5, color); else d.circle(px, py, 5, C.ink, color, 2); });
    });
    band(p.dom, true, C.cyan); band(p.rng, false, C.pink);
    if (key === "recip") P.line(1, y0, 1, y1, k.alpha(C.muted, .8), 1, [5, 5]);
    p.dom.forEach(iv => {
      const lo = Math.max(iv.lo, x0), hi = Math.min(iv.hi, x1);
      P.fn(p.f, k.alpha(C.text, .9), 2.5, lo + (iv.lo === lo && !iv.loC ? 1e-4 : 0), hi - (iv.hi === hi && !iv.hiC ? 1e-4 : 0));
      if (isFinite(iv.lo)) P.point(iv.lo, p.f(iv.lo), C.text, 5, !iv.loC);
      if (isFinite(iv.hi)) P.point(iv.hi, p.f(iv.hi), C.text, 5, !iv.hiC);
    });
    d.text("domain", P.X(x1) - 4, P.Y(0) + 32 > c.h - 4 ? P.Y(0) - 10 : P.Y(0) + 32, { font: `600 11px ${F.ui}`, color: C.cyan, align: "right" });
    d.text("range", P.X(0) - 8, P.Y(y1) + 14, { font: `600 11px ${F.ui}`, color: C.pink, align: "right" });
    const inside = inSet(p.dom, a), aq = Q(Math.round(a * 2), 2);
    if (inside) {
      const fa = p.f(a);
      P.line(a, 0, a, fa, k.alpha(C.amber, .8), 1.5, [4, 4]); P.line(a, fa, 0, fa, k.alpha(C.amber, .8), 1.5, [4, 4]);
      P.point(a, 0, C.cyan, 4.5); P.point(0, fa, C.pink, 4.5); P.point(a, fa, C.amber, 7);
      const right = P.X(a) < c.w - 90;
      P.label(`f(${neg(a)})`, a, fa, C.amber, { dx: right ? 10 : -10, dy: fa > y1 - 1 ? 18 : -10, align: right ? "left" : "right", font: `italic 15px ${F.math}` });
    } else {
      const px = P.X(a), py = P.Y(0); d.line(px - 7, py - 7, px + 7, py + 7, C.red, 2.5); d.line(px - 7, py + 7, px + 7, py - 7, C.red, 2.5);
      d.text("not in domain", px, py - 14, { font: `12px ${F.sans}`, color: C.red, align: px < 60 ? "left" : px > c.w - 60 ? "right" : "center" });
    }
    const val = inside ? p.ex(aq) : null;
    k.setRO(`<div><h2>Evaluate</h2><div class="ro-big" style="margin-top:8px">${M(`<i>f</i>(<span class="c1">${neg(a)}</span>)`)} = ${inside ? `<span class="num c1">${val}</span>` : `<span class="c3" style="font-size:.7em">undefined</span>`}</div></div>
      <div class="ro-rows"><div class="row">${M(`<i>f</i>(<i>x</i>) = ${p.tex}`)}</div>
      <div class="row"><span class="m c2">domain</span> <span class="v c2">${setStr(p.dom)}</span><span class="lbl">every allowed input: ${M(`{<i>x</i> | ${p.dSB}}`)}</span></div>
      <div class="row"><span class="m c3">range</span> <span class="v c3">${setStr(p.rng)}</span><span class="lbl">every output that actually occurs: ${M(`{<i>y</i> | ${p.rSB}}`)}</span></div></div>
      ${inside ? `<div class="landmark"><div class="big">${M(`<i>f</i>(${neg(a)}) = ${val}`)}</div><div class="note">The point (${neg(a)}, ${val}) is on the graph. ${p.note}</div></div>`
        : `<div class="landmark hit"><div class="big">${M(`${neg(a)} ∉ domain`)}</div><div class="note">f(${neg(a)}) is undefined: ${p.why}</div></div>`}
      <p class="narr">f(a) means "the output when the input is a". Drag outside the cyan domain band.</p>`);
  });
};

/* =============== a1-exponents: ladder, simplify, scientific notation =============== */
L["a1-exponents"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const dom = k.dom(); dom.style.display = "none";
  let mode = "ladder", b = 2, n = 3, hy = null;
  const groups = { ladder: [], simp: [], sci: [] };
  const track = (g, el) => { groups[g].push(el); return el; };
  const wrap = x => x.el.parentNode;
  // ladder controls
  const sb = k.slider(`<span class="c2">base <i>b</i></span>`, 2, 10, 1, b, v => b = v); track("ladder", wrap(sb));
  const sn = k.slider(`<span class="c3">exponent <i>n</i></span>`, -4, 4, 1, n, v => n = v, v => neg(v)); track("ladder", wrap(sn));
  track("ladder", k.button("Step down (÷ b)", () => { n = Math.max(-4, n - 1); sn.set(n); }, "btn ghost"));
  track("ladder", k.button("Step up (× b)", () => { n = Math.min(4, n + 1); sn.set(n); }, "btn ghost"));
  // simplify presets
  const Bs = s => `<span class="c2">${s}</span>`, Es = s => `<sup class="c3">${s}</sup>`, pw = (x, e) => `${Bs(x)}${Es(e)}`;
  const fin = s => `<span class="c1">${s}</span>`;
  const SP = {
    mul: { name: "(2x³y⁻²)(3x⁻¹y⁵)", lines: [
      [`(2${pw("x", 3)}${pw("y", "−2")})(3${pw("x", "−1")}${pw("y", 5)})`],
      [`(2 · 3)(${pw("x", 3)} · ${pw("x", "−1")})(${pw("y", "−2")} · ${pw("y", 5)})`, "regroup", "Multiplication can be done in any order: coefficients together, then each base."],
      [`6 · ${pw("x", "3 + (−1)")} · ${pw("y", "−2 + 5")}`, "product rule", "Same base multiplied: keep the base, add the exponents. x³ · x⁻¹ = x·x·x ÷ x."],
      [fin(`6x<sup>2</sup>y<sup>3</sup>`), "simplify", "All exponents are positive, so this is fully simplified."]] },
    div: { name: "(6a⁵b⁻¹) ÷ (2a²b³)", lines: [
      [FR(`6${pw("a", 5)}${pw("b", "−1")}`, `2${pw("a", 2)}${pw("b", 3)}`)],
      [`${FR("6", "2")} · ${FR(pw("a", 5), pw("a", 2))} · ${FR(pw("b", "−1"), pw("b", 3))}`, "split the fraction", "Separate the coefficients and each base into its own fraction."],
      [`3 · ${pw("a", "5 − 2")} · ${pw("b", "−1 − 3")}`, "quotient rule", "Same base divided: keep the base, subtract the exponents (top minus bottom)."],
      [`3${pw("a", 3)}${pw("b", "−4")}`, "simplify exponents", "5 − 2 = 3 and −1 − 3 = −4."],
      [fin(FR("3a<sup>3</sup>", "b<sup>4</sup>")), "negative exponent", "b⁻⁴ = 1/b⁴: a negative exponent moves the factor to the denominator."]] },
    pow: { name: "(3x⁻²y)³", lines: [
      [`(3${pw("x", "−2")}${Bs("y")})${Es(3)}`],
      [`${pw("3", 3)} · ${pw("x", "(−2)·3")} · ${pw("y", "1·3")}`, "power of a product", "Raise every factor inside the parentheses to the 3rd power. y means y¹."],
      [`27${pw("x", "−6")}${pw("y", 3)}`, "power rule", "A power of a power: multiply the exponents."],
      [fin(FR("27y<sup>3</sup>", "x<sup>6</sup>")), "negative exponent", "x⁻⁶ = 1/x⁶."]] },
    pp: { name: "(x⁴)⁻² · x³", lines: [
      [`(${pw("x", 4)})${Es("−2")} · ${pw("x", 3)}`],
      [`${pw("x", "4·(−2)")} · ${pw("x", 3)}`, "power rule", "A power of a power: multiply the exponents."],
      [`${pw("x", "−8")} · ${pw("x", 3)}`, "simplify", "4 · (−2) = −8."],
      [`${pw("x", "−8 + 3")}`, "product rule", "Same base multiplied: add the exponents."],
      [`${pw("x", "−5")}`, "simplify", "−8 + 3 = −5."],
      [fin(FR("1", "x<sup>5</sup>")), "negative exponent", "x⁻⁵ is the reciprocal of x⁵, not a negative number."]] },
    zero: { name: "(5m²n)⁰ · 4m⁻³", lines: [
      [`(5${pw("m", 2)}${Bs("n")})${Es(0)} · 4${pw("m", "−3")}`],
      [`1 · 4${pw("m", "−3")}`, "zero exponent", "Anything nonzero to the power 0 is 1, however complicated it looks (assume m, n ≠ 0)."],
      [fin(FR("4", "m<sup>3</sup>")), "negative exponent", "Only m carries the exponent −3, so only m moves. The 4 stays on top."]] },
    neg: { name: "(12x⁻²y⁴) ÷ (−4x³y⁻¹)", lines: [
      [FR(`12${pw("x", "−2")}${pw("y", 4)}`, `−4${pw("x", 3)}${pw("y", "−1")}`)],
      [`${FR("12", "−4")} · ${FR(pw("x", "−2"), pw("x", 3))} · ${FR(pw("y", 4), pw("y", "−1"))}`, "split the fraction", "One fraction for the coefficients and one for each base."],
      [`−3 · ${pw("x", "−2 − 3")} · ${pw("y", "4 − (−1)")}`, "quotient rule", "Subtract exponents, top minus bottom. Subtracting −1 adds 1."],
      [`−3${pw("x", "−5")}${pw("y", 5)}`, "simplify exponents", "−2 − 3 = −5 and 4 + 1 = 5."],
      [fin(`−${FR("3y<sup>5</sup>", "x<sup>5</sup>")}`), "negative exponent", "x⁻⁵ moves to the denominator as x⁵."]] }
  };
  let sk = "mul";
  track("simp", wrap(k.select("Expression", Object.entries(SP).map(([kk, p]) => [kk, p.name]), sk, v => { sk = v; st.reset(); })));
  const before = k.ctl.children.length;
  const st = k.stepper(() => SP[sk].lines.length - 1, renderSimp, { ms: 1400 });
  [...k.ctl.children].slice(before).forEach(e => track("simp", e));
  // scientific notation
  let ca = 42, ma = 5, cb = 25, mb = -3, op = "*";
  track("sci", wrap(k.slider(`<i>a</i>`, 10, 99, 1, ca, v => ca = v, v => (v / 10).toFixed(1))));
  track("sci", wrap(k.slider(`<span class="c3"><i>m</i></span>`, -12, 12, 1, ma, v => ma = v, v => neg(v))));
  track("sci", wrap(k.select("op", [["*", "×"], ["/", "÷"]], op, v => op = v)));
  track("sci", wrap(k.slider(`<i>b</i>`, 10, 99, 1, cb, v => cb = v, v => (v / 10).toFixed(1))));
  track("sci", wrap(k.slider(`<span class="c3"><i>n</i></span>`, -12, 12, 1, mb, v => mb = v, v => neg(v))));
  function show(){ Object.entries(groups).forEach(([g, els]) => els.forEach(e => e.style.display = g === mode ? "" : "none")); c.cv.style.display = mode === "simp" ? "none" : ""; dom.style.display = mode === "simp" ? "" : "none"; if (mode === "simp") renderSimp(); }
  k.modes([["ladder", "Exponent ladder"], ["simp", "Simplify"], ["sci", "Scientific notation"]], mode, m => { mode = m; show(); });
  show();
  function renderSimp(){
    if (mode !== "simp") return;
    const ln = SP[sk].lines.map(([eq, op]) => ({ eq, op })), K = Math.min(st.k, ln.length - 1), done = K === ln.length - 1;
    dom.innerHTML = stepsHTML(ln, K, done ? "" : `next: ${ln[K + 1].op}`);
    const say = done ? "Simplified: each base appears once and every exponent is positive." : SP[sk].lines[K + 1][2];
    k.setRO(`<div><h2>Simplified</h2><div class="ro-big" style="margin-top:8px">${done ? ln[ln.length - 1].eq : "?"}</div></div>
      <div class="ro-rows"><div class="row">${M(`${pw("x", "m")} · ${pw("x", "n")} = ${pw("x", "m + n")}`)}<span class="lbl">product rule</span></div>
      <div class="row">${M(`${pw("x", "m")} ÷ ${pw("x", "n")} = ${pw("x", "m − n")}`)}<span class="lbl">quotient rule</span></div>
      <div class="row">${M(`(${pw("x", "m")})${Es("n")} = ${pw("x", "mn")}`)}<span class="lbl">power rule</span></div>
      <div class="row">${M(`${pw("x", "0")} = 1, ${pw("x", "−n")} = ${FR("1", pw("x", "n"))}`)}<span class="lbl">zero and negative exponents (x ≠ 0)</span></div></div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${M(done ? "done" : ln[K + 1].op)}</div><div class="note">${say}</div></div>
      <p class="narr">Press Step to apply one rule at a time.</p>`);
  }
  const sup = s => String(s).replace(/−|-/g, "⁻").replace(/\d/g, x => "⁰¹²³⁴⁵⁶⁷⁸⁹"[x]);
  function drawLadder(){
    const { w, h } = c; const top = 56, rowH = Math.min(52, (h - top - 14) / 9);
    const yOf = m => top + (4 - m + .5) * rowH;
    hy = hy === null || k.reduce ? yOf(n) : lerp(hy, yOf(n), .2);
    const wide = w >= 560, size = Math.max(14, Math.min(22, rowH * .5));
    const xP = wide ? w * .24 : w * .3, xE = w * .47, xV = wide ? w * .64 : w * .4, xA = w - 22;
    d.rr(12, hy - rowH / 2 + 2, w - 24, rowH - 4, 6, k.alpha(C.amber, .1), k.alpha(C.amber, .55), 1.5);
    for (let m = 4; m >= -4; m--) {
      const y = yOf(m), cur = m === n, base = { base: "middle" };
      const pwW = d.powW(String(b), neg(m), size);
      d.pow(String(b), neg(m), xP - pwW, y + size * .35, { size, color: C.cyan, ecolor: C.pink });
      d.text("=", xP + 10, y + size * .35, { font: `${size}px ${F.math}`, color: C.faint });
      if (wide) { const ex = m > 0 ? Array(m).fill(b).join(" · ") : m === 0 ? "1" : (m === -1 ? `1 ÷ ${b}` : `1 ÷ (${Array(-m).fill(b).join(" · ")})`); d.text(ex, xE, y, { font: `${Math.round(size * .72)}px ${F.math}`, color: cur ? C.text : C.faint, align: "center", ...base }); }
      const val = m >= 0 ? String(b ** m) : `1/${b ** -m}`;
      d.text(val, xV, y, { font: `${cur ? 600 : 400} ${Math.round(size * .85)}px ${F.mono}`, color: cur ? C.amber : m === 0 ? C.text : C.muted, ...base });
      if (m > -4) { const y2 = yOf(m - 1); d.arrow(xA, y + rowH * .25, xA, y2 - rowH * .25, k.alpha(C.pink, .7), 1.5); if (rowH > 26) d.text(`÷${b}`, xA - 6, (y + y2) / 2, { font: `11px ${F.mono}`, color: k.alpha(C.pink, .85), align: "right", ...base }); }
    }
    const val = n >= 0 ? `<span class="num c1">${(b ** n).toLocaleString("en-US")}</span>` : `<span class="num c1">${FR(1, (b ** -n).toLocaleString("en-US"))}</span>`;
    const dec = n < 0 ? k.fmt(1 / b ** -n, 6) : null;
    let lm;
    if (n === 0) lm = `<div class="landmark hit"><div class="big">${M(`${pw(b, 0)} = ${FR(pw(b, 1), Bs(b))} = 1`)}</div><div class="note">Each rung down divides by ${b}. One rung below ${b}¹ = ${b} is ${b} ÷ ${b} = 1. Any nonzero base to the 0 power is 1.</div></div>`;
    else if (n < 0) lm = `<div class="landmark hit"><div class="big">${M(`${pw(b, neg(n))} = ${FR(1, pw(b, -n))}`)}</div><div class="note">A negative exponent means reciprocal, not a negative number: ${b}${sup(n)} is small but positive.</div></div>`;
    else lm = `<div class="landmark"><div class="big">${M(`${pw(b, n)} = ${n === 1 ? b : Array(n).fill(b).join(" · ")}`)}</div><div class="note">${n} factor${n === 1 ? "" : "s"} of ${b}. Step down to see what happens below exponent 1.</div></div>`;
    k.setRO(`<div><h2>Power</h2><div class="ro-big" style="margin-top:8px">${M(pw(b, neg(n)))} = ${val}</div></div>
      <div class="ro-rows"><div class="row">${M(`${pw(b, "n − 1")} = ${pw(b, "n")} ÷ ${Bs(b)}`)}<span class="lbl">every rung down divides by the base</span></div>
      ${dec ? `<div class="row">${M("decimal")} <span class="v">${dec}</span><span class="lbl">rounded to 6 places</span></div>` : ""}
      <div class="row">${M(`${pw("b", "m")} · ${pw("b", "n")} = ${pw("b", "m + n")}`)}<span class="lbl">so ${b}${sup(n)} · ${b}${sup(-n)} = ${b}⁰ = 1: the two are reciprocals</span></div></div>${lm}`);
  }
  function drawSci(){
    const { w, h } = c;
    const size = Math.max(14, Math.min(26, w / 24)), f = x => k.fmt(x, 6);
    const A = ca / 10, B = cb / 10, T = { b: "10", bc: C.cyan, ec: C.pink };
    const P = e => ({ ...T, e: neg(e) });
    let raw, e = op === "*" ? ma + mb : ma - mb, norm, exact = true, shift = 0;
    if (op === "*") { const p = ca * cb; raw = f(p / 100); if (p >= 1000) { norm = f(p / 1000); shift = 1; } else norm = raw; }
    else { let q = Q(ca, cb), dd = q.d; while (dd % 2 === 0) dd /= 2; while (dd % 5 === 0) dd /= 5; exact = dd === 1; raw = exact ? f(ca / cb) : k.fmt(ca / cb, 4); if (ca < cb) { shift = -1; norm = exact ? f(10 * ca / cb) : k.fmt(10 * ca / cb, 3); } else norm = exact ? raw : k.fmt(ca / cb, 3); }
    const E2 = e + shift, sym = op === "*" ? " × " : " ÷ ", eq = exact ? " = " : " ≈ ";
    const cx = w / 2; let y = 80; const gap = size * 2.1;
    seq(k, c, [["(" + f(A) + " × "], P(ma), [")" + sym + "(" + f(B) + " × "], P(mb), [")"]], cx, y, size); y += gap;
    seq(k, c, [["= (" + f(A) + sym + f(B) + ") × ("], P(ma), [sym], P(mb), [")"]], cx, y, size); y += gap;
    seq(k, c, [[eq.trim() + " " + raw + " × "], { ...T, e: op === "*" ? `${neg(ma)}+${mb < 0 ? "(" + neg(mb) + ")" : mb}` : `${neg(ma)}−${mb < 0 ? "(" + neg(mb) + ")" : mb}` }], cx, y, size); y += gap;
    if (shift) { seq(k, c, [[eq.trim() + " " + raw + " × "], P(e)], cx, y, size); y += gap; }
    seq(k, c, [[eq.trim() + " ", C.amber], [norm + " × ", C.amber], { b: "10", e: neg(E2), bc: C.amber, ec: C.amber }], cx, y, size * 1.12);
    // log strip
    const sy = h - 44, x0 = 30, x1 = w - 30, lo = -26, hi = 26, X = v => x0 + (x1 - x0) * (v - lo) / (hi - lo);
    d.line(x0, sy, x1, sy, C.muted, 2);
    for (let v = -25; v <= 25; v += 5) { d.line(X(v), sy - 5, X(v), sy + 5, C.faint); if (w < 560 && v % 10) continue; d.pow("10", neg(v), X(v) - d.powW("10", neg(v), 11, F.mono) / 2, sy + 22, { size: 11, family: F.mono, color: C.faint, ecolor: C.faint }); }
    d.text("size on a powers-of-ten scale", x0, sy - 46, { font: `11px ${F.sans}`, color: C.faint });
    const mk = (v, col, lab, up) => { const px = X(Math.max(lo, Math.min(hi, v))); d.circle(px, sy, 6, col); d.text(lab, px, up ? sy - 12 : sy - 27, { font: `600 12px ${F.ui}`, color: col, align: "center" }); };
    mk(ma + Math.log10(A), C.text, "a", true); mk(mb + Math.log10(B), C.muted, "b", true);
    const rv = Math.log10(op === "*" ? A * B : A / B) + e; mk(rv, C.amber, "result", false);
    k.setRO(`<div><h2>Result</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${exact ? "" : "≈ "}<span class="num c1">${norm}</span> × ${pw(10, neg(E2))}</div></div>
      <div class="ro-rows"><div class="row">${M(`${pw(10, "m")} ${op === "*" ? "·" : "÷"} ${pw(10, "n")} = ${pw(10, op === "*" ? "m + n" : "m − n")}`)}<span class="lbl">${op === "*" ? "multiply the coefficients, add the exponents" : "divide the coefficients, subtract the exponents"}</span></div>
      <div class="row">${M("coefficient")} <span class="v">${raw}</span><span class="lbl">must end up with 1 ≤ coefficient &lt; 10</span></div>
      ${Math.abs(E2) <= 8 ? `<div class="row">${M("standard form")} <span class="v">${exact ? "" : "≈ "}${k.fmt((op === "*" ? ca * cb / 100 : ca / cb) * Math.pow(10, e), 12)}</span></div>` : ""}</div>
      <div class="landmark${shift ? " hit" : ""}"><div class="big">${shift ? M(`${raw} = ${norm} × ${pw(10, neg(shift))}`) : M(`1 ≤ ${raw} &lt; 10`)}</div><div class="note">${shift > 0 ? `The coefficient reached 10 or more, so move the decimal point one place left and add 1 to the exponent.` : shift < 0 ? `The coefficient fell below 1, so move the decimal point one place right and subtract 1 from the exponent.` : "The coefficient is already between 1 and 10, so no adjustment is needed."}${exact ? "" : " The quotient does not terminate; it is rounded."}</div></div>`);
  }
  k.loop(() => { if (mode === "simp") return; c.begin(); if (mode === "ladder") drawLadder(); else drawSci(); });
};

/* =============== a1-literal: formula rearranger =============== */
L["a1-literal"] = k => {
  const { M } = k; const dom = k.dom();
  const O = s => `<span class="c3">${/</.test(s) ? s : s.replace(/[A-Za-z]/g, "<i>$&</i>")}</span>`;
  const mk = (V, t) => { const v = n => `<i class="${n === t ? "c1" : "c2"}">${n}</i>`; return v; };
  const flip = (res, why = "Write the target variable on the left.") => ({ op: "swap sides", res, why });
  const FS = {
    drt: { name: "d = rt", vars: ["d", "r", "t"], vals: { d: 150, r: 50, t: 3 }, units: { d: "mi", r: "mph", t: "h" }, eq: v => `${v("d")} = ${v("r")}${v("t")}`,
      fn: { d: s => s.r * s.t, r: s => s.d / s.t, t: s => s.d / s.r }, cond: { r: "t ≠ 0", t: "r ≠ 0" },
      solve: { r: v => [{ op: `${O("÷ " + "t")} both sides`, eq: `${FR(v("d"), O("t"))} = ${FR(v("r") + v("t"), O("t"))}`, why: "t multiplies r, so undo it by dividing both sides by t." }, { op: "simplify", eq: `${FR(v("d"), v("t"))} = ${v("r")}`, why: "t ÷ t = 1 on the right." }, { op: "swap sides", eq: `${v("r")} = ${FR(v("d"), v("t"))}`, why: "Write the target on the left." }],
        t: v => [{ op: `${O("÷ r")} both sides`, eq: `${FR(v("d"), O("r"))} = ${FR(v("r") + v("t"), O("r"))}`, why: "r multiplies t, so divide both sides by r." }, { op: "simplify", eq: `${FR(v("d"), v("r"))} = ${v("t")}`, why: "r ÷ r = 1 on the right." }, { op: "swap sides", eq: `${v("t")} = ${FR(v("d"), v("r"))}`, why: "Write the target on the left." }] } },
    tri: { name: "A = ½bh", vars: ["A", "b", "h"], vals: { A: 24, b: 8, h: 6 }, units: { A: "cm²", b: "cm", h: "cm" }, eq: v => `${v("A")} = ${FR(1, 2)}${v("b")}${v("h")}`,
      fn: { A: s => s.b * s.h / 2, b: s => 2 * s.A / s.h, h: s => 2 * s.A / s.b }, cond: { b: "h ≠ 0", h: "b ≠ 0" },
      solve: { b: v => [{ op: `${O("× 2")} both sides`, eq: `${O("2 ·")} ${v("A")} = ${O("2 ·")} ${FR(1, 2)}${v("b")}${v("h")}`, why: "Clear the fraction ½ first: multiply both sides by 2." }, { op: "simplify", eq: `2${v("A")} = ${v("b")}${v("h")}`, why: "2 · ½ = 1." }, { op: `${O("÷ h")} both sides`, eq: `${FR("2" + v("A"), O("h"))} = ${FR(v("b") + v("h"), O("h"))}`, why: "h multiplies b, so divide both sides by h." }, { op: "simplify", eq: `${FR("2" + v("A"), v("h"))} = ${v("b")}`, why: "h ÷ h = 1." }, { op: "swap sides", eq: `${v("b")} = ${FR("2" + v("A"), v("h"))}`, why: "Write the target on the left." }],
        h: v => [{ op: `${O("× 2")} both sides`, eq: `${O("2 ·")} ${v("A")} = ${O("2 ·")} ${FR(1, 2)}${v("b")}${v("h")}`, why: "Clear the fraction ½ first: multiply both sides by 2." }, { op: "simplify", eq: `2${v("A")} = ${v("b")}${v("h")}`, why: "2 · ½ = 1." }, { op: `${O("÷ b")} both sides`, eq: `${FR("2" + v("A"), O("b"))} = ${FR(v("b") + v("h"), O("b"))}`, why: "b multiplies h, so divide both sides by b." }, { op: "simplify", eq: `${FR("2" + v("A"), v("b"))} = ${v("h")}`, why: "b ÷ b = 1." }, { op: "swap sides", eq: `${v("h")} = ${FR("2" + v("A"), v("b"))}`, why: "Write the target on the left." }] } },
    temp: { name: "C = 5/9 (F − 32)", vars: ["C", "F"], vals: { C: 100, F: 212 }, units: { C: "°C", F: "°F" }, eq: v => `${v("C")} = ${FR(5, 9)}(${v("F")} − 32)`,
      fn: { C: s => 5 / 9 * (s.F - 32), F: s => 9 / 5 * s.C + 32 }, cond: {},
      solve: { F: v => [{ op: `${O("× 9/5")} both sides`, eq: `${O(FR(9, 5))}${v("C")} = ${O(FR(9, 5))} · ${FR(5, 9)}(${v("F")} − 32)`, why: "Undo the factor 5/9 by multiplying by its reciprocal, 9/5." }, { op: "simplify", eq: `${FR(9, 5)}${v("C")} = ${v("F")} − 32`, why: "9/5 · 5/9 = 1." }, { op: `${O("+ 32")} both sides`, eq: `${FR(9, 5)}${v("C")} ${O("+ 32")} = ${v("F")} − 32 ${O("+ 32")}`, why: "32 is subtracted from F, so add 32 to both sides." }, { op: "simplify", eq: `${FR(9, 5)}${v("C")} + 32 = ${v("F")}`, why: "−32 + 32 = 0." }, { op: "swap sides", eq: `${v("F")} = ${FR(9, 5)}${v("C")} + 32`, why: "Write the target on the left." }] } },
    per: { name: "P = 2l + 2w", vars: ["P", "l", "w"], vals: { P: 30, l: 9, w: 6 }, units: { P: "m", l: "m", w: "m" }, eq: v => `${v("P")} = 2${v("l")} + 2${v("w")}`,
      fn: { P: s => 2 * s.l + 2 * s.w, l: s => (s.P - 2 * s.w) / 2, w: s => (s.P - 2 * s.l) / 2 }, cond: {},
      solve: { l: v => [{ op: `${O("− 2w")} both sides`, eq: `${v("P")} ${O("− 2w")} = 2${v("l")} + 2${v("w")} ${O("− 2w")}`, why: "2w is added to 2l, so subtract 2w from both sides." }, { op: "simplify", eq: `${v("P")} − 2${v("w")} = 2${v("l")}`, why: "2w − 2w = 0." }, { op: `${O("÷ 2")} both sides`, eq: `${FR(v("P") + " − 2" + v("w"), O("2"))} = ${FR("2" + v("l"), O("2"))}`, why: "2 multiplies l, so divide both sides by 2. The whole left side is divided." }, { op: "simplify", eq: `${FR(v("P") + " − 2" + v("w"), "2")} = ${v("l")}`, why: "2l ÷ 2 = l." }, { op: "swap sides", eq: `${v("l")} = ${FR(v("P") + " − 2" + v("w"), "2")}`, why: "Write the target on the left." }],
        w: v => [{ op: `${O("− 2l")} both sides`, eq: `${v("P")} ${O("− 2l")} = 2${v("l")} + 2${v("w")} ${O("− 2l")}`, why: "2l is added to 2w, so subtract 2l from both sides." }, { op: "simplify", eq: `${v("P")} − 2${v("l")} = 2${v("w")}`, why: "2l − 2l = 0." }, { op: `${O("÷ 2")} both sides`, eq: `${FR(v("P") + " − 2" + v("l"), O("2"))} = ${FR("2" + v("w"), O("2"))}`, why: "2 multiplies w, so divide both sides by 2." }, { op: "simplify", eq: `${FR(v("P") + " − 2" + v("l"), "2")} = ${v("w")}`, why: "2w ÷ 2 = w." }, { op: "swap sides", eq: `${v("w")} = ${FR(v("P") + " − 2" + v("l"), "2")}`, why: "Write the target on the left." }] } },
    int: { name: "I = Prt", vars: ["I", "P", "r", "t"], vals: { I: 150, P: 1000, r: 0.05, t: 3 }, units: { I: "$", P: "$", r: "per year", t: "yr" }, eq: v => `${v("I")} = ${v("P")}${v("r")}${v("t")}`,
      fn: { I: s => s.P * s.r * s.t, P: s => s.I / (s.r * s.t), r: s => s.I / (s.P * s.t), t: s => s.I / (s.P * s.r) }, cond: { P: "r ≠ 0 and t ≠ 0", r: "P ≠ 0 and t ≠ 0", t: "P ≠ 0 and r ≠ 0" },
      solve: {} },
    line: { name: "y = mx + b", vars: ["y", "m", "x", "b"], vals: { y: 11, m: 2, x: 4, b: 3 }, units: {}, eq: v => `${v("y")} = ${v("m")}${v("x")} + ${v("b")}`,
      fn: { y: s => s.m * s.x + s.b, m: s => (s.y - s.b) / s.x, x: s => (s.y - s.b) / s.m, b: s => s.y - s.m * s.x }, cond: { m: "x ≠ 0", x: "m ≠ 0" },
      solve: { b: v => [{ op: `${O("− mx")} both sides`, eq: `${v("y")} ${O("− mx")} = ${v("m")}${v("x")} + ${v("b")} ${O("− mx")}`, why: "mx is added to b, so subtract mx from both sides." }, { op: "simplify", eq: `${v("y")} − ${v("m")}${v("x")} = ${v("b")}`, why: "mx − mx = 0." }, { op: "swap sides", eq: `${v("b")} = ${v("y")} − ${v("m")}${v("x")}`, why: "Write the target on the left." }],
        x: v => [{ op: `${O("− b")} both sides`, eq: `${v("y")} ${O("− b")} = ${v("m")}${v("x")} + ${v("b")} ${O("− b")}`, why: "b is added to mx, so subtract b first (undo addition before multiplication)." }, { op: "simplify", eq: `${v("y")} − ${v("b")} = ${v("m")}${v("x")}`, why: "b − b = 0." }, { op: `${O("÷ m")} both sides`, eq: `${FR(v("y") + " − " + v("b"), O("m"))} = ${FR(v("m") + v("x"), O("m"))}`, why: "m multiplies x, so divide both sides by m." }, { op: "simplify", eq: `${FR(v("y") + " − " + v("b"), v("m"))} = ${v("x")}`, why: "m ÷ m = 1." }, { op: "swap sides", eq: `${v("x")} = ${FR(v("y") + " − " + v("b"), v("m"))}`, why: "Write the target on the left." }],
        m: v => [{ op: `${O("− b")} both sides`, eq: `${v("y")} ${O("− b")} = ${v("m")}${v("x")} + ${v("b")} ${O("− b")}`, why: "b is added to mx, so subtract b first." }, { op: "simplify", eq: `${v("y")} − ${v("b")} = ${v("m")}${v("x")}`, why: "b − b = 0." }, { op: `${O("÷ x")} both sides`, eq: `${FR(v("y") + " − " + v("b"), O("x"))} = ${FR(v("m") + v("x"), O("x"))}`, why: "x multiplies m, so divide both sides by x." }, { op: "simplify", eq: `${FR(v("y") + " − " + v("b"), v("x"))} = ${v("m")}`, why: "x ÷ x = 1." }, { op: "swap sides", eq: `${v("m")} = ${FR(v("y") + " − " + v("b"), v("x"))}`, why: "Write the target on the left." }] } }
  };
  // I = Prt: three one-division solutions
  [["P", "rt"], ["r", "Pt"], ["t", "Pr"]].forEach(([t, o]) => { FS.int.solve[t] = v => [{ op: `${O("÷ " + o)} both sides`, eq: `${FR(v("I"), O(o))} = ${FR(v("P") + v("r") + v("t"), O(o))}`, why: `${o} multiplies ${t}, so divide both sides by ${o}.` }, { op: "simplify", eq: `${FR(v("I"), o.split("").map(v).join(""))} = ${v(t)}`, why: `${o} ÷ ${o} = 1.` }, { op: "swap sides", eq: `${v(t)} = ${FR(v("I"), o.split("").map(v).join(""))}`, why: "Write the target on the left." }]; });
  void flip; void mk;
  let fk = "drt", tg = "r";
  const fs = k.select("Formula", Object.entries(FS).map(([kk, p]) => [kk, p.name]), fk, v => { fk = v; tg = FS[v].vars[1]; fillT(); st.reset(); });
  const ts = k.select("Solve for", [], tg, v => { tg = v; st.reset(); });
  const fillT = () => { ts.el.innerHTML = FS[fk].vars.map(x => `<option value="${x}"${x === tg ? " selected" : ""}>${x}</option>`).join(""); };
  fillT(); void fs;
  const lines = () => { const f = FS[fk], v = n => `<i class="${n === tg ? "c1" : "c2"}">${n}</i>`; return [{ eq: f.eq(v) }, ...(f.solve[tg] ? f.solve[tg](v) : [])]; };
  const st = k.stepper(() => lines().length - 1, render, { ms: 1300 });
  function render(){
    const f = FS[fk], ln = lines(), K = Math.min(st.k, ln.length - 1), done = K === ln.length - 1, given = ln.length === 1;
    dom.innerHTML = stepsHTML(ln, K, done ? "" : `next: ${ln[K + 1].op}`);
    const others = f.vars.filter(x => x !== tg), s = f.vals, val = f.fn[tg](s);
    const fmtV = x => (x === "r" && fk === "int") ? String(s[x]) : s[x].toLocaleString("en-US");
    const res = k.fmt(val, 4);
    const cond = f.cond[tg];
    k.setRO(`<div><h2>Solve for <span class="c1" style="text-transform:none;font-style:italic;font-family:var(--math);font-size:1.25em">${tg}</span></h2><div class="ro-big" style="margin-top:8px">${done ? ln[ln.length - 1].eq : `<i class="c1">${tg}</i> = ?`}</div></div>
      <div class="ro-rows"><div class="row">${M("step")} <span class="v">${K} of ${ln.length - 1}</span><span class="lbl">undo operations in reverse order, doing the same to both sides</span></div>
      <div class="row">${M("check")} ${others.map(x => `<i class="c2">${x}</i> = ${fmtV(x)}`).join(", ")} ${AR} <i class="c1">${tg}</i> = <span class="v c1">${res}</span>${f.units[tg] ? `<span class="v" style="color:var(--muted)"> ${f.units[tg]}</span>` : ""}<span class="lbl">sample values plugged into the rearranged formula give back the original ${tg} = ${fmtV(tg)}</span></div>
      ${cond ? `<div class="row">${M("restriction")} <span class="v c3">${cond}</span><span class="lbl">we divided by it, and division by zero is undefined</span></div>` : ""}</div>
      ${given ? `<div class="landmark hit"><div class="big">${M(ln[0].eq)}</div><div class="note">The formula is already solved for ${tg}: it stands alone on one side. Pick another target.</div></div>`
        : done ? `<div class="landmark hit"><div class="big">${M(ln[ln.length - 1].eq)}</div><div class="note">A new formula: plug in the other variables to get ${tg} directly.${cond ? ` Valid when ${cond}.` : ""}</div></div>`
        : `<div class="landmark"><div class="big">${M(ln[K + 1].op)}</div><div class="note">${ln[K + 1].why}</div></div>`}
      <p class="narr">Treat every letter except the amber target as if it were a number.</p>`);
  }
  render();
};

/* =============== a1-compound: AND / OR on stacked number lines =============== */
L["a1-compound"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let o1 = ">=", a = -2, join = "and", o2 = "<", b = 3, t = 0, drag = false, geo = null;
  const OPS = [["<", "&lt;"], ["<=", "≤"], [">", "&gt;"], [">=", "≥"]], sym = { "<": "<", "<=": "≤", ">": ">", ">=": "≥" }, symH = { "<": "&lt;", "<=": "≤", ">": "&gt;", ">=": "≥" };
  k.select(`<span class="c2"><i>x</i></span>`, OPS, o1, v => o1 = v);
  k.slider(`<span class="c2"><i>a</i></span>`, -8, 8, 1, a, v => a = v, neg);
  k.select("", [["and", "AND"], ["or", "OR"]], join, v => join = v);
  k.select(`<span class="c3"><i>x</i></span>`, OPS, o2, v => o2 = v);
  k.slider(`<span class="c3"><i>b</i></span>`, -8, 8, 1, b, v => b = v, neg);
  k.hint("Drag the test point");
  const toIv = (o, v) => o === "<" ? IV(-INF, v, 0, 0) : o === "<=" ? IV(-INF, v, 0, 1) : o === ">" ? IV(v, INF, 0, 0) : IV(v, INF, 1, 0);
  const setT = e => { if (!geo) return; const p = c.xy(e); t = Math.max(-10, Math.min(10, Math.round(((p.x - geo.x0) / (geo.x1 - geo.x0) * 20 - 10) * 2) / 2)); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setT(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setT(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "ew-resize";
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const A = toIv(o1, a), B = toIv(o2, b), R = join === "and" ? ivAnd(A, B) : ivOr(A, B);
    const x0 = 30, x1 = w - 30; geo = { x0, x1 };
    const ys = [h * .27, h * .5, h * .78];
    const rows = [[`x ${sym[o1]} ${neg(a)}`, [A], C.cyan, "first"], [`x ${sym[o2]} ${neg(b)}`, [B], C.pink, "second"], [join === "and" ? "both true (AND): overlap" : "at least one true (OR): union", R, C.amber, "result"]];
    let X;
    rows.forEach(([lab, ivs, col], i) => {
      X = numLine(k, c, -10, 10, x0, x1, ys[i]);
      drawSet(k, c, X, -10, 10, ys[i], ivs, i === 2 ? col : k.alpha(col, .9), i === 2 ? 7 : 5);
      d.text(lab, x0 - 4, ys[i] - 26, { font: `${i === 2 ? "600 13px " + F.sans : "italic 17px " + F.math}`, color: col });
      const ok = inSet(ivs, t); d.circle(X(t), ys[i], 4, ok ? C.green : C.red);
      d.text(ok ? "✓" : "✗", x1 + 4, ys[i] - 24, { font: `600 15px ${F.sans}`, color: ok ? C.green : C.red, align: "right" });
      if (i === 2 && !ivs.length) d.text("∅ — no number is on both", w / 2, ys[i] + 44, { font: `13px ${F.sans}`, color: C.amber, align: "center" });
    });
    // test point
    d.line(X(t), ys[0] - 40, X(t), ys[2] + 8, k.alpha(C.text, .45), 1.5, [4, 4]);
    d.circle(X(t), ys[0] - 44, 7, C.text); d.text(`t = ${neg(t)}`, X(t), ys[0] - 56, { font: `12px ${F.mono}`, color: C.text, align: X(t) < 50 ? "left" : X(t) > w - 50 ? "right" : "center" });
    const in1 = inSet([A], t), in2 = inSet([B], t), inR = inSet(R, t);
    const special = !R.length ? "empty" : isAll(R) ? "all" : R.length === 1 && R[0].lo === R[0].hi ? "point" : R.length === 2 && R[0].hi === R[1].lo ? "hole" : null;
    const cf = (o, v) => `<i>x</i> ${symH[o]} ${neg(v)}`;
    let note = join === "and" ? "AND keeps only numbers that satisfy both inequalities: the overlap (intersection ∩)." : "OR keeps numbers that satisfy at least one inequality: everything shaded on either line (union ∪).";
    if (special === "empty") note = "The two rays do not overlap, so no number satisfies both. The solution set is empty.";
    if (special === "all") note = "Together the two rays cover the whole line, so every real number works.";
    if (special === "point") note = `The rays meet in a single point: only ${neg(R[0].lo)} satisfies both.`;
    if (special === "hole") note = `Everything except ${neg(R[0].hi)} is covered: neither inequality includes that one point.`;
    k.setRO(`<div><h2>Solution set</h2><div class="ro-big" style="margin-top:8px"><span class="num c1" style="font-size:.85em">${isAll(R) ? "(−∞, ∞)" : setStr(R)}</span></div></div>
      <div class="ro-rows"><div class="row"><span class="m c2">${cf(o1, a)}</span> <span class="v c2">${ivStr(A)}</span></div>
      <div class="row"><span class="m c3">${cf(o2, b)}</span> <span class="v c3">${ivStr(B)}</span></div>
      <div class="row"><span class="m c1">${setIneq(R)}</span><span class="lbl">the combined statement ${join === "and" && R.length === 1 && isFinite(R[0].lo) && isFinite(R[0].hi) && R[0].lo < R[0].hi ? "(an AND of a lower and an upper bound can be written as one chain)" : ""}</span></div>
      <div class="row">${M(`t = ${neg(t)}`)} <span class="v"><span class="c2">${in1 ? "✓" : "✗"}</span> ${join.toUpperCase()} <span class="c3">${in2 ? "✓" : "✗"}</span> ${AR} <span class="${inR ? "c5" : ""}" style="${inR ? "" : "color:var(--red)"}">${inR ? "in the set" : "not in the set"}</span></span></div></div>
      <div class="landmark${special ? " hit" : ""}"><div class="big">${M(`${cf(o1, a)} ${join.toUpperCase()} ${cf(o2, b)}`)}</div><div class="note">${note}</div></div>
      <p class="narr">Brackets [ ] include an endpoint (closed dot); parentheses ( ) exclude it (open dot). ∞ always gets a parenthesis.</p>`);
  });
};

/* =============== a1-abs-eq: |ax + b| = c as distance =============== */
L["a1-abs-eq"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let a = 2, b = -3, cc = 5, lo = -10, hi = 10;
  k.slider(`<i>a</i>`, -4, 4, 1, a, v => a = v, neg);
  k.slider(`<i>b</i>`, -10, 10, 1, b, v => b = v, neg);
  k.slider(`<span class="c3"><i>c</i></span>`, -4, 12, 1, cc, v => cc = v, neg);
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    const A = qi(a), B = qi(b), Cq = qi(cc);
    let sols = [], centre = null, dist = null, kind;
    if (a === 0) kind = Math.abs(b) === cc ? "all" : "none0";
    else { centre = qd(qi(-b), A); dist = qd(Cq, qi(Math.abs(a)));
      if (cc < 0) kind = "neg"; else if (cc === 0) { kind = "one"; sols = [centre]; } else { kind = "two"; sols = [qd(qs(Cq, B), A), qd(qs(qi(-cc), B), A)].sort((p, q) => qv(p) - qv(q)); } }
    const need = [0, ...(centre ? [qv(centre)] : []), ...sols.map(qv)];
    const tlo = Math.min(-8, ...need) - 2, thi = Math.max(8, ...need) + 2;
    lo = k.reduce ? tlo : lerp(lo, tlo, Math.min(1, dt * 6)); hi = k.reduce ? thi : lerp(hi, thi, Math.min(1, dt * 6));
    const gb = h * .56;
    const ymax = Math.max(cc, 4) + 2;
    const P = k.plot(c, { xmin: lo, xmax: hi, ymin: -2, ymax, pad: { l: 30, r: 14, t: 14, b: h - gb } });
    P.grid(); P.axes();
    P.fn(x => Math.abs(a * x + b), k.alpha(C.text, .9), 2.5);
    P.line(lo, cc, hi, cc, C.pink, 2, [7, 5]);
    P.label(`y = ${neg(cc)}`, hi, cc, C.pink, { dx: -6, dy: -8, align: "right" });
    P.label(`y = |${linT(a, b)}|`, lo, Math.min(ymax - .5, Math.abs(a * lo + b)), C.text, { dx: 8, dy: 16, font: `italic 14px ${F.math}` });
    if (centre) P.point(qv(centre), 0, C.violet, 6);
    sols.forEach(s => { P.line(qv(s), 0, qv(s), cc, k.alpha(C.amber, .7), 1.5, [3, 3]); P.point(qv(s), cc, C.amber, 6); });
    // number line
    const y = h * .8, x0 = 30, x1 = w - 30;
    const X = numLine(k, c, lo, hi, x0, x1, y);
    if (centre) {
      const cx = X(qv(centre)); d.circle(cx, y, 7, C.violet);
      d.text("centre", cx, y + 40, { font: `600 11px ${F.ui}`, color: C.violet, align: "center" });
      sols.forEach((s, i) => { if (kind === "two") { const sx = X(qv(s)); d.hop(cx, sx, y - 4, Math.min(56, 16 + Math.abs(sx - cx) * .4), C.pink, 2.5); d.text(qt(dist), (cx + sx) / 2, y - Math.min(56, 16 + Math.abs(sx - cx) * .4) / 2 - 12, { font: `600 13px ${F.mono}`, color: C.pink, align: "center" }); void i; } d.circle(X(qv(s)), y, 7.5, C.amber); d.text(qt(s), X(qv(s)), y + 40, { font: `600 14px ${F.mono}`, color: C.amber, align: "center" }); });
    } else d.text(kind === "all" ? "every x works" : "no x works", w / 2, y - 18, { font: `600 14px ${F.sans}`, color: C.amber, align: "center" });
    const eqH = `|${a === 0 ? neg(b) : lin(A, B)}| = <span class="c3">${neg(cc)}</span>`;
    const big = kind === "two" ? `${X_} = <span class="num c1">${qh(sols[0])}</span> or <span class="num c1">${qh(sols[1])}</span>` : kind === "one" ? `${X_} = <span class="num c1">${qh(sols[0])}</span>` : kind === "all" ? `<span class="c1" style="font-size:.8em">all real numbers</span>` : `<span class="c1" style="font-size:.8em">no solution</span>`;
    let rows = "";
    if (a !== 0 && cc >= 0) rows = `<div class="row">${M(`${lin(A, B)} = <span class="c3">${neg(cc)}</span>`)} ${AR} ${M(`${X_} = ${qh(qd(qs(Cq, B), A))}`)}<span class="lbl">case 1: the inside equals c</span></div>
      <div class="row">${M(`${lin(A, B)} = <span class="c3">${neg(-cc)}</span>`)} ${AR} ${M(`${X_} = ${qh(qd(qs(qi(-cc), B), A))}`)}<span class="lbl">case 2: the inside equals −c${cc === 0 ? " (the same as case 1 when c = 0)" : ""}</span></div>
      <div class="row">${M(`|${X_} − (<span class="c4">${qh(centre)}</span>)| = <span class="c3">${qh(dist)}</span>`)}<span class="lbl">divide by |a| = ${Math.abs(a)}: x is ${qt(dist)} away from the centre ${qt(centre)}</span></div>`;
    else if (a !== 0) rows = `<div class="row">${M(`|…| ≥ 0 &gt; ${neg(cc)}`)}<span class="lbl">an absolute value is a distance, never negative</span></div>`;
    else rows = `<div class="row">${M(`|${neg(b)}| = ${Math.abs(b)}`)}<span class="lbl">with a = 0 there is no x left: the equation is simply ${Math.abs(b)} = ${neg(cc)}, which is ${Math.abs(b) === cc ? "true" : "false"}</span></div>`;
    const notes = { two: "Two points are the same distance from the centre, one on each side. That is why an absolute value equation usually has two solutions.", one: "Distance 0: only the centre itself works, so there is exactly one solution.", neg: `No distance can equal ${neg(cc)}. The graph of y = |${linT(a, b)}| never goes below 0, so it never meets y = ${neg(cc)}.`, all: `|${neg(b)}| = ${cc} is true no matter what x is: every real number is a solution.`, none0: `|${neg(b)}| = ${Math.abs(b)}, not ${neg(cc)}, for every x: no solution.` };
    k.setRO(`<div><h2>Solutions</h2><div class="ro-big" style="margin-top:8px">${big}</div></div>
      <div class="ro-rows"><div class="row">${M(eqH)}</div>${rows}</div>
      <div class="landmark${kind !== "two" ? " hit" : ""}"><div class="big">${kind === "two" ? M(`two solutions`) : kind === "one" ? M("c = 0: one solution") : kind === "neg" ? M("c &lt; 0: no solution") : kind === "all" ? M("identity") : M("no solution")}</div><div class="note">${notes[kind]}</div></div>
      <p class="narr">Set c to 0, then below 0. Set a to 0.</p>`);
  });
};

/* =============== a1-slope-forms: y = mx + b =============== */
L["a1-slope-forms"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let m = 0.5, b = 2, dm = 0.5, db = 2, lastP = null, drag = false;
  const sm = k.slider(`<span class="c3"><i>m</i></span>`, -4, 4, 0.25, m, v => m = v, v => qt(Q(Math.round(v * 4), 4)));
  const sb = k.slider(`<span class="c2"><i>b</i></span>`, -8, 8, 1, b, v => b = v, neg);
  k.button("Horizontal (m = 0)", () => { m = 0; sm.set(0); }, "btn ghost");
  k.button("Through origin (b = 0)", () => { b = 0; sb.set(0); }, "btn ghost");
  k.hint("Drag the y-intercept up or down");
  c.cv.addEventListener("pointerdown", e => { if (!lastP) return; const p = c.xy(e); if (Math.hypot(p.x - lastP.X(0), p.y - lastP.Y(b)) < 26) { drag = true; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (!drag) return; const p = c.xy(e); b = Math.max(-8, Math.min(8, Math.round(lastP.inv(p.x, p.y).y))); sb.set(b); });
  c.cv.addEventListener("pointerup", () => drag = false);
  k.loop(dt => {
    const e = k.reduce ? 1 : Math.min(1, dt * 10); dm = lerp(dm, m, e); db = lerp(db, b, e);
    c.begin();
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 30, r: 14, t: 14, b: 26 }, xlabel: "x", ylabel: "y" }); lastP = P;
    P.grid(1); P.axes();
    const mq = Q(Math.round(m * 4), 4), bq = qi(b);
    P.fn(x => dm * x + db, C.amber, 3);
    // slope triangle from the y-intercept
    let run = mq.d, rise = mq.n; if (Math.abs(rise) > 8) { run = 1; rise = m; }
    const x2 = run, ya = db, yb = db + dm * run;
    if (m !== 0) { P.line(0, ya, x2, ya, k.alpha(C.text, .8), 2, [5, 4]); P.line(x2, ya, x2, yb, C.pink, 3);
    P.label(`run ${run}`, x2 / 2, ya, C.muted, { dx: 0, dy: m >= 0 ? 16 : -8, align: "center", font: `12px ${F.mono}` });
    P.label(`rise ${qt(Q(Math.round(rise * 4), 4))}`, x2, (ya + yb) / 2, C.pink, { dx: 8, dy: 4, font: `600 12px ${F.mono}` }); }
    // intercepts
    if (m !== 0) { const xi = qd(qi(-b), mq); if (Math.abs(qv(xi)) <= 10) { P.point(qv(xi), 0, C.ink, 5); P.point(qv(xi), 0, C.text, 5, true); } }
    P.point(0, db, C.cyan, 8); P.label(`(0, ${neg(b)})`, 0, db, C.cyan, { dx: -10, dy: m > 0 ? -10 : 20, align: "right", font: `600 13px ${F.mono}` });
    const eq = `<i>y</i> = ${lin(mq, bq, "<i>x</i>").replace(/^0$/, "0")}`;
    const tbl = [-2, -1, 0, 1, 2].map(x => `<span style="display:inline-block;min-width:3.2em;text-align:center">${neg(x)}<br><b>${qt(qa(qm(mq, qi(x)), bq))}</b></span>`).join("");
    const xint = m !== 0 ? qd(qi(-b), mq) : null;
    const lm = m === 0 ? [`slope 0: horizontal`, `Rise 0 for every run. The line is y = ${neg(b)}: the same output for every input, and there is no x-intercept${b === 0 ? " apart from the whole x-axis" : ""}.`]
      : b === 0 ? [`b = 0: through the origin`, `y = ${qt(mq)}x is a proportional relationship. The ratio y/x is the constant ${qt(mq)}.`]
      : [m > 0 ? "rising line" : "falling line", `Every step of ${run} to the right moves the line ${m > 0 ? "up" : "down"} ${qt(qabs(Q(Math.round(rise * 4), 4)))}. ${Math.abs(m) > 1 ? "|m| > 1: steeper than 45°." : Math.abs(m) < 1 ? "|m| < 1: flatter than 45°." : "|m| = 1: exactly 45°."}`];
    k.setRO(`<div><h2>Slope-intercept form</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${M(eq)}</span></div></div>
      <div class="ro-rows"><div class="row"><span class="m c3"><i>m</i></span> = ${M(`${FR("rise", "run")} = ${FR(neg(mq.n), mq.d)}`)} = <span class="v c3">${qh(mq)}</span><span class="lbl">slope: change in y for each 1 step right</span></div>
      <div class="row"><span class="m c2"><i>b</i></span> = <span class="v c2">${neg(b)}</span><span class="lbl">y-intercept: where the line crosses the y-axis, (0, ${neg(b)})</span></div>
      <div class="row">${M("x-intercept")} <span class="v">${xint ? qh(xint) : m === 0 && b === 0 ? "every x" : "none"}</span><span class="lbl">set y = 0 and solve: x = −b/m</span></div>
      <div class="row" style="font-family:var(--mono);font-size:13px;gap:0"><span style="display:inline-block;min-width:2.6em;color:var(--faint)">x<br>y</span>${tbl}</div></div>
      <div class="landmark${m === 0 || b === 0 ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
      <p class="narr">Make m negative, then set it to 0. Drag the cyan point.</p>`);
  });
};

/* =============== a1-poly-add: algebra tiles =============== */
L["a1-poly-add"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PRE = { p1: [[2, 3, -1], [1, -2, 3], "+"], p2: [[3, -1, 2], [1, 2, -1], "-"], p3: [[1, 2, 0], [-1, 1, -2], "+"], p4: [[2, -1, 3], [2, -1, 3], "-"], p5: [[-2, 3, 1], [1, -3, 2], "-"] };
  let key = "p1", Pp = PRE.p1[0], Qp = PRE.p1[1], op = "+", tiles = [], phases = [];
  const DC = [C.amber, C.cyan, C.violet]; // index by degree
  const polyH = p => { const t = []; [2, 1, 0].forEach(dg => { const v = p[2 - dg]; if (!v) return; const mag = Math.abs(v), body = dg === 2 ? `${mag === 1 ? "" : mag}<i>x</i><sup>2</sup>` : dg === 1 ? `${mag === 1 ? "" : mag}<i>x</i>` : String(mag); t.push([Math.sign(v), `<span class="c${dg === 2 ? 4 : dg === 1 ? 2 : 1}">${body}</span>`]); }); return joinTerms(t); };
  const polyT = p => { const t = []; [2, 1, 0].forEach(dg => { const v = p[2 - dg]; if (!v) return; const mag = Math.abs(v); t.push((v < 0 ? "−" : "") + (dg === 2 ? `${mag === 1 ? "" : mag}x²` : dg === 1 ? `${mag === 1 ? "" : mag}x` : mag)); }); if (!t.length) return "0"; return t.map((s, i) => i === 0 ? s : s[0] === "−" ? " − " + s.slice(1) : " + " + s).join(""); };
  const res = () => [0, 1, 2].map(i => Pp[i] + (op === "+" ? Qp[i] : -Qp[i]));
  function build(){
    tiles = [];
    [[Pp, 0], [Qp, 1]].forEach(([p, src]) => [2, 1, 0].forEach(dg => { const v = p[2 - dg]; for (let i = 0; i < Math.abs(v); i++) tiles.push({ dg, s0: Math.sign(v), src, x: null, y: null, a: 1, flip: 0 }); }));
    tiles.forEach(t => t.s = src2sign(t));
    // zero pairs per degree after sign change
    [2, 1, 0].forEach(dg => { const pos = tiles.filter(t => t.dg === dg && t.s > 0), ng = tiles.filter(t => t.dg === dg && t.s < 0); pos.forEach((t, i) => t.pair = i < ng.length ? i : -1); ng.forEach((t, i) => t.pair = i < pos.length ? i : -1); });
    const anyPair = tiles.some(t => t.pair >= 0);
    phases = ["start", ...(op === "-" ? ["flip"] : []), "group", ...(anyPair ? ["cancel"] : []), "done"];
  }
  const src2sign = t => t.src === 1 && op === "-" ? -t.s0 : t.s0;
  build();
  const sel = k.select("Polynomials", Object.entries(PRE).map(([kk, p]) => [kk, `(${polyT(p[0])}) ${p[2] === "+" ? "+" : "−"} (${polyT(p[1])})`]).concat([["rnd", "Random"]]), key, v => { key = v; if (v === "rnd") rnd(); else { [Pp, Qp, op] = PRE[v]; opSel.set(op); } build(); st.reset(); });
  const opSel = k.select("Operation", [["+", "add +"], ["-", "subtract −"]], op, v => { op = v; build(); st.reset(); });
  const st = k.stepper(() => phases.length - 1, () => {}, { ms: 1500 });
  function rnd(){ const r = () => Math.floor(Math.random() * 7) - 3; do { Pp = [r(), r(), r()]; Qp = [r(), r(), r()]; } while (!Pp.some(v => v) || !Qp.some(v => v)); }
  k.button("Random", () => { key = "rnd"; sel.set("rnd"); rnd(); build(); st.reset(); }, "btn ghost");
  k.loop(dt => {
    c.begin(); const { w, h } = c; const K = Math.min(st.k, phases.length - 1), ph = phases[K], pi = i => phases.indexOf(i);
    const flipped = op === "-" && K >= pi("flip"), grouped = K >= pi("group"), cancel = pi("cancel") >= 0 && K >= pi("cancel"), done = ph === "done";
    const labW = 44, top = 64, avail = w - labW - 24;
    const Lx = Math.max(24, Math.min(66, avail / 6.9, (h - top - 110) / 2.9)), u = Lx * .38, sp = Math.max(4, Lx * .12);
    const sz = dg => dg === 2 ? [Lx, Lx] : dg === 1 ? [u, Lx] : [u, u];
    // targets
    const rowY = grouped ? [top + 10, top + 10 + Lx + sp * 3, top + 10 + 2 * (Lx + sp * 3)] : [top + 22, top + 22 + Lx + sp * 5];
    tiles.forEach(t => {
      const sign = flipped ? src2sign(t) : t.s0;
      t.sign = sign;
      if (!grouped) {
        const row = tiles.filter(q => q.src === t.src); let x = labW + 12;
        for (const q of row) { if (q === t) break; x += sz(q.dg)[0] + sp; if (q.dg !== row[row.indexOf(q) + 1]?.dg) x += sp * 2.5; }
        t.tx = x; t.ty = rowY[t.src];
      } else {
        const r = 2 - t.dg, same = tiles.filter(q => q.dg === t.dg), [tw] = sz(t.dg);
        const pos = same.filter(q => q.s > 0), ng = same.filter(q => q.s < 0), np = Math.min(pos.length, ng.length);
        // order: pairs (pos, neg) then leftovers; after cancel the leftovers slide left
        let slot;
        if (t.pair >= 0) slot = t.pair * 2 + (t.s > 0 ? 0 : 1);
        else { const left = same.filter(q => q.pair < 0); slot = (done ? 0 : np * 2) + left.indexOf(t); }
        const gapPairs = t.pair >= 0 ? t.pair * sp * 1.5 : (done ? 0 : np * sp * 1.5);
        t.tx = labW + 12 + slot * (tw + sp) + gapPairs; t.ty = rowY[r];
      }
      t.ta = done && t.pair >= 0 ? 0 : cancel && t.pair >= 0 ? .35 : 1;
      const e = k.reduce ? 1 : Math.min(1, dt * 7);
      if (t.x === null) { t.x = t.tx; t.y = t.ty; }
      t.x = lerp(t.x, t.tx, e); t.y = lerp(t.y, t.ty, e); t.a = lerp(t.a, t.ta, e);
      const tf = flipped && t.src === 1 ? 1 : 0; t.flip = k.reduce ? tf : lerp(t.flip, tf, Math.min(1, dt * 4));
    });
    // row labels
    const labs = grouped ? [["x²", C.violet], ["x", C.cyan], ["1", C.amber]] : [["first", C.text], [op === "-" ? (flipped ? "−(second)" : "second") : "second", C.text]];
    labs.forEach(([s, col], i) => d.text(s, 12, rowY[i] + (grouped && i === 2 ? u / 2 : Lx / 2), { font: `600 ${grouped ? 15 : 12}px ${grouped ? F.math : F.ui}`, color: col, base: "middle" }));
    // pair brackets
    if (cancel && !done) [2, 1, 0].forEach(dg => { const pr = tiles.filter(t => t.dg === dg && t.pair >= 0 && t.s > 0); pr.forEach(t => { const [tw, th] = sz(dg); d.rr(t.x - sp * .5, t.y - sp * .5, tw * 2 + sp * 2, th + sp, 5, null, k.alpha(C.text, .5), 1.2); d.text("0", t.x + tw + sp / 2, t.y + th + sp * .5 + 13, { font: `600 12px ${F.mono}`, color: C.text, align: "center" }); }); });
    tiles.forEach(t => {
      if (t.a < .02) return;
      const [tw, th] = sz(t.dg), shown = t.flip > .5 ? -t.s0 : t.s0;
      const col = shown > 0 ? DC[t.dg] : C.pink, sx = Math.max(.06, Math.abs(Math.cos(Math.PI * t.flip)));
      const g = c.g; g.save(); g.globalAlpha = t.a; g.translate(t.x + tw / 2, t.y + th / 2); g.scale(sx, 1);
      d.rr(-tw / 2, -th / 2, tw, th, 3, k.alpha(col, .3), col, 1.5);
      if (tw > 18) d.text((shown < 0 ? "−" : "") + (t.dg === 2 ? "x²" : t.dg === 1 ? "x" : "1"), 0, 0, { font: `${Math.min(15, tw * .42)}px ${F.math}`, color: C.text, align: "center", base: "middle" });
      else if (tw > 10) d.text(shown < 0 ? "−" : "+", 0, 0, { font: `600 ${Math.min(13, tw * .8)}px ${F.mono}`, color: C.text, align: "center", base: "middle" });
      g.restore();
    });
    // expression at the top and result at the bottom
    const fs = Math.max(13, Math.min(22, w / 30));
    d.text(`(${polyT(Pp)}) ${op === "+" ? "+" : "−"} (${polyT(Qp)})`, w / 2, 34, { font: `${fs}px ${F.math}`, color: C.text, align: "center" });
    if (flipped && !done) d.text(`= (${polyT(Pp)}) + (${polyT(Qp.map(v => -v))})`, w / 2, 34 + fs * 1.2, { font: `${fs * .8}px ${F.math}`, color: C.pink, align: "center" });
    const R = res();
    if (done) d.text(`= ${polyT(R)}`, w / 2, h - 24, { font: `600 ${fs * 1.2}px ${F.math}`, color: C.amber, align: "center" });
    const deg = ["1", "<i>x</i>", "<i>x</i><sup>2</sup>"], cls = ["c1", "c2", "c4"];
    const sg = v => v < 0 ? `(${neg(v)})` : v;
    const rows = [2, 1, 0].map(dg => `<div class="row"><span class="m ${cls[dg]}">${deg[dg]}:</span> ${M(`${neg(Pp[2 - dg])} ${op === "+" ? "+" : "−"} ${sg(Qp[2 - dg])} = <b>${neg(R[2 - dg])}</b>`)}</div>`).join("");
    const cancelled = tiles.filter(t => t.pair >= 0).length / 2;
    const say = { start: "Model each polynomial with tiles. Pink tiles are negative.", flip: "Subtracting a polynomial means adding its opposite: every tile of the second polynomial flips sign.", group: "Group like terms: x² tiles with x² tiles, x tiles with x tiles, units with units.", cancel: `A positive and a negative tile of the same kind make zero. ${cancelled} zero pair${cancelled === 1 ? "" : "s"} cancel.`, done: "What remains is the answer. Only like terms combine; x² and x tiles never merge." };
    const zero = R.every(v => !v);
    k.setRO(`<div><h2>${op === "+" ? "Sum" : "Difference"}</h2><div class="ro-big" style="margin-top:8px">${done ? polyH(R) : "?"}</div></div>
      <div class="ro-rows">${rows}<span class="lbl" style="font:12px var(--sans);color:var(--faint)">add or subtract the coefficients of each degree; the exponents do not change</span></div>
      <div class="landmark${done && (zero || cancelled) ? " hit" : ""}"><div class="big">${M(done ? (zero ? "everything cancels: 0" : `= ${polyH(R)}`) : ph === "flip" ? `− (${polyT(Qp)}) = + (${polyT(Qp.map(v => -v))})` : ph)}</div><div class="note">${say[ph]}${done && zero ? " The two polynomials were identical, so their difference is the zero polynomial." : ""}</div></div>
      <p class="narr">Step ${K} of ${phases.length - 1}. Press Step or Play.</p>`);
  });
};

/* =============== a1-radicals: simplify √n =============== */
L["a1-radicals"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let n = 72;
  const sl = k.slider(`<i>n</i>`, 1, 300, 1, n, v => { n = v; st.finish(); });
  const st = k.stepper(() => 4, () => {}, { ms: 1100 });
  k.button("Random", () => { n = 8 + Math.floor(Math.random() * 290); sl.set(n); st.reset(); }, "btn ghost");
  st.finish();
  const primes = m => { const f = []; for (let p = 2; p * p <= m; p++) while (m % p === 0) { f.push(p); m /= p; } if (m > 1) f.push(m); return f; };
  const sqrtAt = (x, y, inner, size, col, icol) => { const f = `${size}px ${F.math}`, rw = d.width("√", f), iw = d.width(inner, f); d.text("√", x, y, { font: f, color: col }); c.g.save(); c.g.strokeStyle = col; c.g.lineWidth = Math.max(1.2, size / 18); c.g.beginPath(); c.g.moveTo(x + rw * .92, y - size * .82); c.g.lineTo(x + rw + iw + 3, y - size * .82); c.g.stroke(); c.g.restore(); d.text(inner, x + rw + 1, y, { font: f, color: icol || col }); return rw + iw + 4; };
  k.loop(() => {
    c.begin(); const { w, h } = c; const K = st.k;
    const pf = primes(n); let s = 1, r = 1; const pairs = []; const singles = [];
    for (let i = 0; i < pf.length;) { if (pf[i + 1] === pf[i]) { pairs.push(pf[i]); s *= pf[i]; i += 2; } else { singles.push(pf[i]); r *= pf[i]; i++; } }
    const size = Math.max(24, Math.min(44, w / 14));
    // big radical
    const tw = d.width("√" + n, `${size}px ${F.math}`) + 4;
    sqrtAt(w / 2 - tw / 2, 64, String(n), size, C.text);
    // prime chips
    const yC = 64 + size * 1.25 + 22;
    const cr = Math.max(11, Math.min(20, (w - 40) / (pf.length * 2.9 + 1)));
    if (K >= 1 && n > 1) {
      // layout: pairs first then singles, grouped
      const items = K >= 2 ? [...pairs.flatMap(p => [[p, "pair"], [p, "pair"]]), ...singles.map(p => [p, "single"])] : pf.map(p => [p, "plain"]);
      const tot = items.length * cr * 2.4 + (K >= 2 ? pairs.length * cr * .8 : 0);
      let x = w / 2 - tot / 2 + cr * 1.2;
      items.forEach(([p, kind], i) => {
        const col = kind === "pair" ? C.amber : kind === "single" ? C.pink : C.text;
        d.circle(x, yC, cr, k.alpha(col, .18), col, 1.8); d.text(String(p), x, yC + 1, { font: `600 ${Math.round(cr * .85)}px ${F.mono}`, color: col, align: "center", base: "middle" });
        if (kind === "pair" && i % 2 === 1) { const xa = x - cr * 2.4; c.g.save(); c.g.strokeStyle = C.amber; c.g.lineWidth = 1.5; c.g.beginPath(); c.g.moveTo(xa, yC + cr + 4); c.g.quadraticCurveTo((xa + x) / 2, yC + cr + 18, x, yC + cr + 4); c.g.stroke(); c.g.restore(); d.text(`${p}²`, (xa + x) / 2, yC + cr + 30, { font: `12px ${F.mono}`, color: C.amber, align: "center" }); x += cr * .8; }
        x += cr * 2.4;
      });
      d.text(K >= 2 ? "pairs of equal primes form perfect squares" : `${n} = ${pf.join(" × ")}`, w / 2, yC - cr - 10, { font: `12px ${F.sans}`, color: C.faint, align: "center" });
    }
    // rewrite lines
    const fs2 = Math.max(18, Math.min(30, w / 20)), yR = yC + cr + 40 + fs2;
    if (K >= 3) {
      const f = `${fs2}px ${F.math}`; let parts = [];
      const W = (s2) => d.width(s2, f);
      // √(s² · r) = √(s²) · √r
      const str1 = `= √(${s}² · ${r})`, str2 = ` = √${s * s} · √${r}`;
      const total = W(str1) + (s > 1 && r > 1 ? W(str2) : 0); let x = w / 2 - total / 2;
      d.text("= √(", x, yR, { font: f, color: C.text }); x += W("= √(");
      d.text(`${s}²`, x, yR, { font: f, color: C.amber }); x += W(`${s}²`);
      d.text(" · ", x, yR, { font: f, color: C.text }); x += W(" · ");
      d.text(String(r), x, yR, { font: f, color: C.pink }); x += W(String(r));
      d.text(")", x, yR, { font: f, color: C.text }); x += W(")");
      if (s > 1 && r > 1) { d.text(" = √", x, yR, { font: f, color: C.text }); x += W(" = √"); d.text(String(s * s), x, yR, { font: f, color: C.amber }); x += W(String(s * s)); d.text(" · √", x, yR, { font: f, color: C.text }); x += W(" · √"); d.text(String(r), x, yR, { font: f, color: C.pink }); }
      void parts;
    }
    if (K >= 4) {
      const f = `600 ${fs2 * 1.25}px ${F.math}`, str = r === 1 ? `= ${s}` : s === 1 ? `= √${r}` : `= ${s}√${r}`;
      d.text(str, w / 2, yR + fs2 * 1.9, { font: f, color: C.cyan, align: "center" });
    }
    // perfect squares list
    const yL = h - 40, sq = []; for (let q = 1; q * q <= n; q++) sq.push(q);
    const cw = Math.min(46, (w - 30) / Math.max(1, sq.length));
    const x0 = w / 2 - sq.length * cw / 2;
    d.text("perfect squares ≤ n  (✓ = divides n)", w / 2, yL - 30, { font: `11px ${F.sans}`, color: C.faint, align: "center" });
    sq.forEach((q, i) => { const v = q * q, dv = n % v === 0, best = q === s, cx = x0 + (i + .5) * cw; if (best && K >= 3) d.rr(cx - cw / 2 + 2, yL - 17, cw - 4, 34, 4, k.alpha(C.amber, .15), C.amber, 1.2); d.text(dv || cw >= 26 ? String(v) : "", cx, yL, { font: `${cw < 30 ? 10 : 12}px ${F.mono}`, color: best && K >= 3 ? C.amber : dv ? C.text : C.faint, align: "center" }); d.text(dv ? "✓" : "·", cx, yL + 12, { font: `10px ${F.sans}`, color: dv ? C.green : C.faint, align: "center" }); });
    const done = K >= 4, resH = r === 1 ? `<span class="num c2">${s}</span>` : `<span class="c2">${s > 1 ? s : ""}√${r}</span>`;
    const kind = r === 1 ? "square" : s === 1 ? "free" : "simp";
    const steps = ["Write the radicand.", `Factor ${n} into primes.`, "Pair up equal primes: each pair is a perfect square that can leave the radical.", `The largest perfect-square factor is ${s * s} = ${s}². Split the root: √(ab) = √a · √b.`, `√${s * s} = ${s}. What is left under the root, ${r}, has no square factor.`];
    k.setRO(`<div><h2>Simplified radical</h2><div class="ro-big" style="margin-top:8px">√${n} = ${done ? resH : "?"}</div></div>
      <div class="ro-rows"><div class="row">${M("prime factors")} <span class="v">${n === 1 ? "none (1)" : pf.join(" × ")}</span></div>
      <div class="row"><span class="m c1">largest square factor</span> <span class="v c1">${s * s} = ${s}²</span><span class="lbl">one factor ${s > 1 ? pairs.join(" × ") : "(none bigger than 1)"} from each pair</span></div>
      <div class="row"><span class="m c3">leftover radicand</span> <span class="v c3">${r}</span><span class="lbl">${r === 1 ? "nothing left under the root" : "square-free: no pair left"}</span></div>
      <div class="row">${M("check")} <span class="v">${s}² × ${r} = ${s * s * r}</span>, <span class="v">√${n} ≈ ${k.fmt(Math.sqrt(n), 4)}</span></div></div>
      <div class="landmark${kind !== "simp" || done ? " hit" : ""}"><div class="big">${kind === "square" ? M(`${n} = ${s}² is a perfect square`) : kind === "free" ? M(`${n} is square-free`) : done ? M(`√${n} = ${s}√${r}`) : M(["Write the radicand", "Factor into primes", "Pair equal primes", "Split the root"][K])}</div><div class="note">${kind === "square" ? "Every prime pairs up, so the root is a whole number." : kind === "free" ? `No prime appears twice, so √${n} is already in simplest form.` : done ? `√${n} = √${s * s} · √${r} = ${s}√${r}. Simplest form: the radicand ${r} has no perfect-square factor.` : steps[K]}</div></div>
      <p class="narr">${done ? "Drag n or press Play to watch the steps." : "Press Step to continue."}</p>`);
  });
};

/* =============== a1-abs-ineq: between vs outside =============== */
L["a1-abs-ineq"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let op = "<", hh = 1, kk = 3, t = 3, lo = -10, hi = 10, drag = false, geo = null;
  const sym = { "<": "<", "<=": "≤", ">": ">", ">=": "≥" }, symH = { "<": "&lt;", "<=": "≤", ">": "&gt;", ">=": "≥" };
  k.select("|<i>x</i> − <i>h</i>|", [["<", "&lt;"], ["<=", "≤"], [">", "&gt;"], [">=", "≥"]], op, v => op = v);
  k.slider(`<span class="c4"><i>h</i></span>`, -8, 8, 1, hh, v => hh = v, neg);
  k.slider(`<span class="c3"><i>k</i></span>`, -3, 8, 1, kk, v => kk = v, neg);
  k.hint("Drag the test point");
  const setT = e => { if (!geo) return; const p = c.xy(e); t = Math.round((lo + (hi - lo) * (p.x - geo.x0) / (geo.x1 - geo.x0)) * 2) / 2; };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setT(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setT(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "ew-resize";
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    const tlo = Math.min(-10, hh - Math.max(kk, 0) - 3), thi = Math.max(10, hh + Math.max(kk, 0) + 3);
    lo = k.reduce ? tlo : lerp(lo, tlo, Math.min(1, dt * 6)); hi = k.reduce ? thi : lerp(hi, thi, Math.min(1, dt * 6));
    t = Math.max(Math.ceil(lo), Math.min(Math.floor(hi), t));
    let S;
    if (op === "<") S = kk > 0 ? [IV(hh - kk, hh + kk, 0, 0)] : [];
    else if (op === "<=") S = kk > 0 ? [IV(hh - kk, hh + kk, 1, 1)] : kk === 0 ? [IV(hh, hh, 1, 1)] : [];
    else if (op === ">") S = kk > 0 ? [IV(-INF, hh - kk, 0, 0), IV(hh + kk, INF, 0, 0)] : kk === 0 ? [IV(-INF, hh, 0, 0), IV(hh, INF, 0, 0)] : [IV(-INF, INF, 0, 0)];
    else S = kk > 0 ? [IV(-INF, hh - kk, 0, 1), IV(hh + kk, INF, 1, 0)] : [IV(-INF, INF, 0, 0)];
    // graph of y = |x − h| with y = k
    const gb = h * .5, ymax = Math.max(kk, 3) + 2;
    const P = k.plot(c, { xmin: lo, xmax: hi, ymin: -1.5, ymax, pad: { l: 30, r: 14, t: 14, b: h - gb } });
    P.grid(); P.axes();
    // shade where the graph satisfies the inequality
    P.clip(() => { const g = c.g; g.fillStyle = k.alpha(C.amber, .15); S.forEach(iv => { const a = Math.max(lo, iv.lo), b = Math.min(hi, iv.hi); g.fillRect(P.X(a), P.top, Math.max(2, P.X(b) - P.X(a)), P.height); }); });
    P.fn(x => Math.abs(x - hh), k.alpha(C.text, .9), 2.5);
    P.line(lo, kk, hi, kk, C.pink, 2, [7, 5]); P.label(`y = ${neg(kk)}`, hi, kk, C.pink, { dx: -6, dy: -8, align: "right" });
    P.point(hh, 0, C.violet, 5.5);
    // number line
    const y = h * .76, x0 = 30, x1 = w - 30; geo = { x0, x1 };
    const X = numLine(k, c, lo, hi, x0, x1, y);
    drawSet(k, c, X, lo, hi, y, S, C.amber, 7);
    d.circle(X(hh), y, 6, C.violet); d.text("h", X(hh), y + 40, { font: `italic 15px ${F.math}`, color: C.violet, align: "center" });
    if (kk > 0) { [-1, 1].forEach(sg => { const ex = X(hh + sg * kk); d.hop(X(hh), ex, y - 10, 34, C.pink, 2); }); d.text(`k = ${kk}`, X(hh), y - 40, { font: `600 12px ${F.mono}`, color: C.pink, align: "center" }); }
    // test point
    const dist = Math.abs(t - hh), ok = inSet(S, t);
    const ty = y - 62; d.line(X(t), ty + 6, X(t), y, k.alpha(C.text, .5), 1.5, [3, 3]); d.circle(X(t), ty, 7, ok ? C.green : C.red);
    d.text(`t = ${neg(t)}  ${ok ? "✓" : "✗"}`, X(t), ty - 12, { font: `12px ${F.mono}`, color: ok ? C.green : C.red, align: X(t) < 60 ? "left" : X(t) > w - 60 ? "right" : "center" });
    const outside = op === ">" || op === ">=";
    const special = !S.length ? "empty" : isAll(S) ? "all" : kk === 0 ? "zero" : null;
    const note = special === "empty" ? `A distance is never negative${kk === 0 ? "" : ` and never less than ${neg(kk)}`}: no x works.` : special === "all" ? `Every distance is ≥ 0${kk < 0 ? ` > ${neg(kk)}` : ""}, so every x works.` : special === "zero" ? (op === "<=" ? `Distance ≤ 0 means distance 0: only x = ${neg(hh)}.` : `Every x except the centre ${neg(hh)} is a positive distance away.`) : outside ? `Distance ${sym[op]} ${kk}: points farther than ${kk} from ${neg(hh)}. Two rays pointing outward, joined by OR.` : `Distance ${sym[op]} ${kk}: points within ${kk} of ${neg(hh)}. One segment between, an AND compound.`;
    k.setRO(`<div><h2>Solution set</h2><div class="ro-big" style="margin-top:8px"><span class="num c1" style="font-size:.85em">${isAll(S) ? "(−∞, ∞)" : setStr(S)}</span></div></div>
      <div class="ro-rows"><div class="row">${M(`|<i>x</i> − <span class="c4">${hh < 0 ? "(" + neg(hh) + ")" : hh}</span>| ${symH[op]} <span class="c3">${neg(kk)}</span>`)}<span class="lbl">the distance from x to ${neg(hh)} is ${op === "<" ? "less than" : op === "<=" ? "at most" : op === ">" ? "more than" : "at least"} ${neg(kk)}</span></div>
      <div class="row"><span class="m c1">${S.length ? setIneq(S) : "no solution"}</span><span class="lbl">${kk > 0 ? (outside ? `x ${sym[op === ">" ? "<" : "<="]} h − k  or  x ${sym[op]} h + k` : `h − k ${sym[op]} x ${sym[op]} h + k`) : "special case: k ≤ 0"}</span></div>
      <div class="row">${M(`|${neg(t)} − ${hh < 0 ? "(" + neg(hh) + ")" : hh}| = ${k.fmt(dist, 1)}`)} <span class="v" style="color:${ok ? "var(--green)" : "var(--red)"}">${ok ? "✓ satisfies" : "✗ fails"}</span><span class="lbl">test point t: its distance from the centre</span></div></div>
      <div class="landmark${special ? " hit" : ""}"><div class="big">${M(special === "empty" ? "∅" : special === "all" ? "all real numbers" : outside ? "outside: OR" : "between: AND")}</div><div class="note">${note}</div></div>
      <p class="narr">"Less than" stays between the arrows; "greater than" goes outside. Try k = 0 and k &lt; 0.</p>`);
  });
};

/* =============== a1-piecewise: piecewise and step functions =============== */
L["a1-piecewise"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const pc = (f, lo, hi, loC, hiC, tex, cond) => ({ f, lo, hi, loC, hiC, tex, cond });
  const PRE = {
    abs: { name: "|x|", fname: "f", view: [-6, 6, -2, 7], step: .5, pieces: [pc(x => -x, -INF, 0, 0, 0, "−<i>x</i>", "<i>x</i> &lt; 0"), pc(x => x, 0, INF, 1, 0, "<i>x</i>", "<i>x</i> ≥ 0")], x: -3, note: "|x| is a piecewise function: flip negative inputs, keep the rest." },
    three: { name: "three pieces", fname: "f", view: [-6, 7, -3, 7], step: .5, pieces: [pc(x => x + 4, -INF, -1, 0, 0, "<i>x</i> + 4", "<i>x</i> &lt; −1"), pc(x => x * x, -1, 2, 1, 1, "<i>x</i><sup>2</sup>", "−1 ≤ <i>x</i> ≤ 2"), pc(x => 6 - x, 2, INF, 0, 0, "6 − <i>x</i>", "<i>x</i> &gt; 2")], x: -1, note: "At x = −1 the graph jumps: the open circle belongs to neither output, the closed one is f(−1). At x = 2 the pieces meet, so there is no gap." },
    tax: { name: "tax brackets", fname: "T", view: [0, 70, 0, 16], step: 1, xlab: "income ($1000s)", pieces: [pc(x => .1 * x, 0, 20, 1, 1, "0.1<i>x</i>", "0 ≤ <i>x</i> ≤ 20"), pc(x => 2 + .2 * (x - 20), 20, 50, 0, 1, "2 + 0.2(<i>x</i> − 20)", "20 &lt; <i>x</i> ≤ 50"), pc(x => 8 + .3 * (x - 50), 50, INF, 0, 0, "8 + 0.3(<i>x</i> − 50)", "<i>x</i> &gt; 50")], x: 35, money: true, note: "Each rate applies only to the income inside its bracket, so the pieces join with no jumps: a raise never lowers take-home pay." },
    ship: { name: "shipping cost", fname: "S", view: [0, 11, 0, 13], step: .5, xlab: "weight (lb)", v: "w", pieces: [pc(() => 4, 0, 2, 0, 1, "$4", "0 &lt; <i>w</i> ≤ 2"), pc(() => 7, 2, 5, 0, 1, "$7", "2 &lt; <i>w</i> ≤ 5"), pc(() => 11, 5, 10, 0, 1, "$11", "5 &lt; <i>w</i> ≤ 10")], x: 2, dollars: true, note: "A step function: the cost stays flat, then jumps. Exactly 2 lb still costs $4 (closed dot); anything more costs $7." },
    floor: { name: "greatest integer ⌊x⌋", fname: "f", view: [-4, 5, -5, 6], step: .1, pieces: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map(n => pc(() => n, n, n + 1, 1, 0, String(n).replace("-", "−"), `${neg(n)} ≤ <i>x</i> &lt; ${neg(n + 1)}`)), x: 1.5, note: "⌊x⌋ rounds down to an integer. Each step includes its left end and excludes its right end." }
  };
  const COLS = [C.cyan, C.pink, C.violet];
  let key = "three", x = PRE.three.x, lastP = null, drag = false;
  const sx = k.slider(`<span class="c1"><i>x</i></span>`, -6, 7, .5, x, v => x = v, v => k.fmt(v, 1));
  k.select("Function", Object.entries(PRE).map(([kk, p]) => [kk, p.name]), key, v => { key = v; const p = PRE[v]; sx.setMin(p.view[0]); sx.setMax(p.view[1]); sx.el.step = p.step; x = p.x; sx.set(x); });
  sx.setMin(-6); sx.setMax(7);
  k.hint("Drag across the graph");
  const setX = e => { if (!lastP) return; const p = PRE[key], q = c.xy(e), v = lastP.inv(q.x, q.y).x; x = Math.max(p.view[0], Math.min(p.view[1], Math.round(v / p.step) * p.step)); x = Math.round(x * 10) / 10; sx.set(x); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setX(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setX(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "ew-resize";
  k.loop(() => {
    c.begin(); const p = PRE[key], [x0, x1, y0, y1] = p.view; x = Math.round(x * 10) / 10;
    const P = k.plot(c, { xmin: x0, xmax: x1, ymin: y0, ymax: y1, pad: { l: 36, r: 14, t: 16, b: 30 }, xlabel: p.xlab ? "" : "x" }); lastP = P;
    P.grid(); P.axes();
    if (p.xlab) c.d.text(p.xlab, P.X(x1), P.Y(y0) - 8, { font: `12px ${F.sans}`, color: C.muted, align: "right" });
    const idx = p.pieces.findIndex(q => inIv(q, x));
    p.pieces.forEach((q, i) => {
      const col = COLS[i % 3], a = Math.max(q.lo, x0), b = Math.min(q.hi, x1);
      if (a > b) return;
      P.fn(q.f, i === idx ? col : k.alpha(col, .75), i === idx ? 3.5 : 2.5, a, b);
    });
    [false, true].forEach(pass => p.pieces.forEach((q, i) => { const col = COLS[i % 3];
      [[q.lo, q.loC], [q.hi, q.hiC]].forEach(([v, cl]) => { if (!isFinite(v) || v < x0 || v > x1 || !!cl !== pass) return; const yv = q.f(v); if (cl) P.point(v, yv, col, 5); else P.point(v, yv, col, 5, true); }); }));
    let val = null;
    if (idx >= 0) {
      val = p.pieces[idx].f(x);
      P.line(x, 0, x, val, k.alpha(C.amber, .8), 1.5, [4, 4]); P.line(x, val, x0 > 0 ? x0 : 0, val, k.alpha(C.amber, .5), 1.2, [3, 4]);
      P.point(x, val, C.amber, 7);
    } else { const px = P.X(x), py = P.Y(Math.max(0, y0)); d.line(px - 6, py - 6, px + 6, py + 6, C.red, 2.5); d.line(px - 6, py + 6, px + 6, py - 6, C.red, 2.5); }
    const vs = v => p.money ? "$" + k.fmt(v * 1000, 0) : p.dollars ? "$" + k.fmt(v, 2) : k.fmt(v, 3);
    const xs = p.money ? "$" + k.fmt(x * 1000, 0) : k.fmt(x, 1);
    const win = p.pieces.length > 5 ? Math.max(0, Math.min(p.pieces.length - 5, (idx < 0 ? 0 : idx) - 2)) : 0, shown = (q, i) => p.pieces.length <= 5 || (i >= win && i < win + 5);
    const tbl = `<span class="a1s-brace">${M(`<i>${p.fname}</i>(<i>${p.v || "x"}</i>) =`)}<span class="br">{</span><table>${win > 0 ? `<tr><td>⋮</td><td></td></tr>` : ""}${p.pieces.map((q, i) => !shown(q, i) ? "" : `<tr class="${i === idx ? "on" : ""}"><td style="color:${i === idx ? "var(--amber)" : ["var(--cyan)", "var(--pink)", "var(--violet)"][i % 3]}">${q.tex}</td><td style="color:${i === idx ? "var(--amber)" : "var(--muted)"}">if ${q.cond}</td></tr>`).join("")}${p.pieces.length > 5 && win + 5 < p.pieces.length ? `<tr><td>⋮</td><td></td></tr>` : ""}</table></span>`;
    const edge = idx >= 0 && (x === p.pieces[idx].lo || x === p.pieces[idx].hi);
    k.setRO(`<div><h2>Evaluate</h2><div class="ro-big" style="margin-top:8px">${M(`<i>${p.fname}</i>(<span class="c1">${k.fmt(x, 1)}</span>)`)} = ${idx >= 0 ? `<span class="num c1">${vs(val)}</span>` : `<span style="font-size:.7em;color:var(--red)">undefined</span>`}</div></div>
      <div class="ro-rows"><div class="row" style="font-size:15px">${tbl}</div>
      <div class="row">${M("active piece")} <span class="v">${idx >= 0 ? `${p.pieces[idx].tex} (because ${p.pieces[idx].cond})` : "none"}</span><span class="lbl">${p.money ? `income ${xs} → tax ${idx >= 0 ? vs(val) : "—"}` : "find the condition x satisfies, then use only that formula"}</span></div></div>
      <div class="landmark${edge || idx < 0 ? " hit" : ""}"><div class="big">${idx < 0 ? M(`${k.fmt(x, 1)} is outside the domain`) : edge ? M(`boundary: x = ${k.fmt(x, 1)}`) : M(`<i>${p.fname}</i>(${k.fmt(x, 1)}) = ${vs(val)}`)}</div><div class="note">${idx < 0 ? "No piece's condition includes this input, so the function is undefined here." : edge ? `The closed dot decides: x = ${k.fmt(x, 1)} belongs to "${p.pieces[idx].cond.replace(/<[^>]+>/g, "")}". ` + p.note : p.note}</div></div>
      <p class="narr">Drag onto a boundary to see which piece owns it.</p>`);
  });
};

/* =============== a1-line-forms: one line, three forms =============== */
L["a1-line-forms"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let p1 = { x: -2, y: -1 }, p2 = { x: 3, y: 2 }, drag = null, lastP = null;
  k.button("Vertical example", () => { p1 = { x: 2, y: -3 }; p2 = { x: 2, y: 4 }; }, "btn ghost");
  k.button("Random points", () => { const r = () => Math.floor(Math.random() * 15) - 7; p1 = { x: r(), y: r() }; do { p2 = { x: r(), y: r() }; } while (p2.x === p1.x && p2.y === p1.y); }, "btn ghost");
  k.hint("Drag either point");
  c.cv.addEventListener("pointerdown", e => { if (!lastP) return; const q = c.xy(e); const d1 = Math.hypot(q.x - lastP.X(p1.x), q.y - lastP.Y(p1.y)), d2 = Math.hypot(q.x - lastP.X(p2.x), q.y - lastP.Y(p2.y)); const best = d1 <= d2 ? p1 : p2; if (Math.min(d1, d2) < 28) { drag = best; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (!drag) return; const q = c.xy(e), v = lastP.inv(q.x, q.y); drag.x = Math.max(-9, Math.min(9, Math.round(v.x))); drag.y = Math.max(-9, Math.min(9, Math.round(v.y))); });
  c.cv.addEventListener("pointerup", () => drag = null);
  c.cv.style.cursor = "grab";
  const c2 = s => `<span class="c2">${s}</span>`, c3 = s => `<span class="c3">${s}</span>`;
  k.loop(() => {
    c.begin();
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 30, r: 14, t: 14, b: 26 }, xlabel: "x", ylabel: "y" }); lastP = P;
    P.grid(1); P.axes();
    const dx = p2.x - p1.x, dy = p2.y - p1.y, same = !dx && !dy, vert = !dx && dy, horiz = dx && !dy;
    let m = null, b = null;
    if (!same) {
      if (vert) P.line(p1.x, P.ymin, p1.x, P.ymax, C.amber, 3);
      else { m = Q(dy, dx); b = qs(qi(p1.y), qm(m, qi(p1.x))); P.fn(x => qv(m) * x + qv(b), C.amber, 3); }
      // rise / run staircase
      P.line(p1.x, p1.y, p2.x, p1.y, k.alpha(C.text, .7), 1.5, [5, 4]); P.line(p2.x, p1.y, p2.x, p2.y, k.alpha(C.text, .7), 1.5, [5, 4]);
      if (dx) P.label(`run ${neg(dx)}`, (p1.x + p2.x) / 2, p1.y, C.muted, { dx: 0, dy: dy > 0 ? 16 : -8, align: "center", font: `12px ${F.mono}` });
      if (dy) P.label(`rise ${neg(dy)}`, p2.x, (p1.y + p2.y) / 2, C.muted, { dx: 6, dy: 4, font: `12px ${F.mono}` });
    }
    const lab = (p, col, other) => { const right = p.x >= other.x; P.point(p.x, p.y, col, 8); P.label(`(${neg(p.x)}, ${neg(p.y)})`, p.x, p.y, col, { dx: right ? 12 : -12, dy: p.y >= other.y ? -10 : 20, align: right ? "left" : "right", font: `600 13px ${F.mono}` }); };
    lab(p1, C.cyan, p2); lab(p2, C.pink, p1);
    const X1 = c2(neg(p1.x)), Y1 = c2(neg(p1.y));
    const sub = (v, n) => n === 0 ? `<i>${v}</i>` : n > 0 ? `(<i>${v}</i> − ${c2(n)})` : `(<i>${v}</i> + ${c2(-n)})`;
    let si, ps, sf, slope;
    if (same) { si = ps = sf = "—"; slope = "undefined"; }
    else if (vert) { si = "none"; ps = "none"; sf = `<i>x</i> = ${neg(p1.x)}`; slope = "undefined"; }
    else {
      slope = qh(m);
      si = `<i>y</i> = ${lin(m, b, "<i>x</i>")}`;
      const mc = m.n === 0 ? "0" : qeq(m, qi(1)) ? "" : qeq(m, qi(-1)) ? "−" : qh(m);
      const lhs = p1.y === 0 ? "<i>y</i>" : p1.y > 0 ? `<i>y</i> − ${Y1}` : `<i>y</i> + ${c2(-p1.y)}`;
      ps = m.n === 0 ? `${lhs} = 0` : `${lhs} = ${mc}${p1.x === 0 ? "<i>x</i>" : sub("x", p1.x)}`;
    }
    if (!same && !vert) {
      let A = dy, B = -dx, Cc = dy * p1.x - dx * p1.y; const g = gcd(gcd(A, B), Cc) || 1; A /= g; B /= g; Cc /= g; if (A < 0 || (A === 0 && B < 0)) { A = -A; B = -B; Cc = -Cc; }
      const tA = A ? [Math.sign(A), `${Math.abs(A) === 1 ? "" : Math.abs(A)}<i>x</i>`] : null, tB = B ? [Math.sign(B), `${Math.abs(B) === 1 ? "" : Math.abs(B)}<i>y</i>`] : null;
      sf = `${joinTerms([tA, tB].filter(Boolean))} = ${neg(Cc)}`;
    }
    const xn = p1.x < 0 ? `(${neg(p1.x)})` : p1.x, yn = p1.y < 0 ? `(${neg(p1.y)})` : p1.y;
    let lm;
    if (same) lm = [`one point, no unique line`, "Infinitely many lines pass through a single point. Drag the pink point away."];
    else if (vert) lm = [`vertical: <i>x</i> = ${neg(p1.x)}`, "Run = 0, so the slope rise/run is undefined. Slope-intercept and point-slope form need a slope, so only standard form (with B = 0) can describe this line."];
    else if (horiz) lm = [`horizontal: slope 0`, `Rise = 0. All three forms collapse to y = ${neg(p1.y)}; in standard form A = 0.`];
    else lm = ["same line, three forms", "Slope-intercept shows m and b at a glance, point-slope uses any known point, and standard form has integer coefficients and handles vertical lines."];
    k.setRO(`<div><h2>Slope</h2><div class="ro-big" style="margin-top:8px">${M(`<i>m</i> = ${FR(`${c3(neg(p2.y))} − ${c2(yn)}`, `${c3(neg(p2.x))} − ${c2(xn)}`)}`)} = <span class="num c1">${dx ? qh(Q(dy, dx)) : same ? "?" : "undefined"}</span></div></div>
      <div class="ro-rows"><div class="row"><span class="m">${si}</span><span class="lbl">slope-intercept form: y = mx + b</span></div>
      <div class="row"><span class="m">${ps}</span><span class="lbl">point-slope form: y − y₁ = m(x − x₁), using the cyan point (x₁, y₁)</span></div>
      <div class="row"><span class="m">${sf}</span><span class="lbl">standard form: Ax + By = C, integers with A ≥ 0</span></div>
      ${!same && !vert ? `<div class="row">${M("y-intercept")} <span class="v">${qh(b)}</span>${m.n ? `, ${M("x-intercept")} <span class="v">${qh(qd(qneg(b), m))}</span>` : ""}</div>` : ""}</div>
      <div class="landmark${same || vert || horiz ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
      <p class="narr">Drag the points. Line them up vertically or horizontally.</p>`);
    void slope;
  });
  const qneg = a => Q(-a.n, a.d);
};
})();
