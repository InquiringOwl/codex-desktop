/* ============ Labs: Pre-Algebra II (equations, proportion, slope, geometry) ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;
const G = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
/* exact rationals {n, d}, d > 0, lowest terms */
const Q = (n, dd = 1) => { if (dd < 0) { n = -n; dd = -dd; } const g = G(n, dd) || 1; return { n: n / g, d: dd / g }; };
const qa = (x, y) => Q(x.n * y.d + y.n * x.d, x.d * y.d);
const qsub = (x, y) => Q(x.n * y.d - y.n * x.d, x.d * y.d);
const qm = (x, y) => Q(x.n * y.n, x.d * y.d);
const qdv = (x, y) => Q(x.n * y.d, x.d * y.n);
const qv = x => x.n / x.d;
const qz = x => x.n === 0;
const qeq = (x, y) => x.n === y.n && x.d === y.d;
const qabs = x => Q(Math.abs(x.n), x.d);
const mn = s => String(s).replace(/-/g, "−");
const qs = x => mn(x.n) + (x.d > 1 ? "/" + x.d : "");
const qp = x => (x.n < 0 || x.d > 1) ? `(${qs(x)})` : qs(x);
const FR = (a, b, cl = "") => `<span class="m ${cl}"><span class="fr"><span>${a}</span><span>${b}</span></span></span>`;
const qh = (x, cl = "") => x.d === 1 ? `<span class="${cl}">${mn(x.n)}</span>` : `<span class="${cl}">${x.n < 0 ? "−" : ""}</span>${FR(Math.abs(x.n), x.d, cl)}`;
const dec = (k, x, p = 3) => x.d === 1 ? "" : ` ≈ ${k.fmt(qv(x), p)}`;
const COL = C => ({ c1: C.amber, c2: C.cyan, c3: C.pink, c4: C.violet, c5: C.green, t: C.text, m: C.muted, f: C.faint });
/* a fraction slider list */
const KL = [[-4,1],[-3,1],[-5,2],[-2,1],[-3,2],[-4,3],[-1,1],[-3,4],[-2,3],[-1,2],[-1,3],[-1,4],[0,1],[1,4],[1,3],[1,2],[2,3],[3,4],[1,1],[4,3],[3,2],[2,1],[5,2],[3,1],[4,1]].map(([n, dd]) => Q(n, dd));

/* expression parts: {t, c, i} rendered both on canvas and in HTML */
function side(x, u, cx, cv, cu, zx){
  const p = [];
  if (!qz(x) || zx) {
    let cs;
    if (qz(x)) cs = "0"; else if (x.n === x.d) cs = ""; else if (x.n === -x.d) cs = "−"; else if (x.d > 1) cs = (x.n < 0 ? "−" : "") + `(${Math.abs(x.n)}/${x.d})`; else cs = mn(x.n);
    if (cs) p.push({ t: cs, c: cx }); p.push({ t: "x", c: cv, i: 1 });
  }
  if (!qz(u)) { if (p.length) { p.push({ t: u.n < 0 ? " − " : " + ", c: "t" }); p.push({ t: qs(qabs(u)), c: cu }); } else p.push({ t: qs(u), c: cu }); }
  if (!p.length) p.push({ t: "0", c: cu });
  return p;
}
const eqParts = (l, rel, r, rc = "t") => [...l, { t: ` ${rel} `, c: rc }, ...r];
const esc = s => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
const partsHTML = ps => ps.map(p => `<span class="${/^c\d$/.test(p.c) ? p.c : ""}">${p.i ? `<i>${p.t}</i>` : esc(p.t)}</span>`).join("");
/* parse "48 + 6x = 12 + 10x": numbers pink, x cyan */
const parse = s => (s.match(/\d+|x|[^\dx]+/g) || []).map(t => /^\d+$/.test(t) ? { t, c: "c3" } : t === "x" ? { t, c: "c2", i: 1 } : { t: t.replace(/-/g, "−"), c: "t" });
function drawParts(k, d, ps, x, y, fs, align = "center", maxW = 1e9){
  const col = COL(k.C);
  const fnt = (p, s) => `${p.i ? "italic " : ""}${s}px ${k.F.math}`;
  let W = ps.reduce((s, p) => s + d.width(p.t, fnt(p, fs)), 0);
  if (W > maxW) { fs = fs * maxW / W; W = maxW; }
  let cx = align === "center" ? x - W / 2 : align === "right" ? x - W : x;
  ps.forEach(p => { cx += d.text(p.t, cx, y, { font: fnt(p, fs), color: col[p.c] || k.C.text }); });
  return W;
}

/* ---------- balance scale ---------- */
function drawPan(k, d, items, cx, py, pw){
  const { C, F } = k, col = COL(C);
  let y = py - 5; const y0 = y;
  const tw = Math.min(28, (pw - 10) / 6.6), th = tw * 1.25, us = Math.max(6, Math.min(14, (pw - 8) / 10.5));
  const chip = (txt, cl) => { const f = `600 15px ${F.mono}`, fw = d.width(txt, f) + 18; d.rr(cx - fw / 2, y - 28, fw, 26, 5, k.alpha(col[cl], .22), col[cl], 1.5); d.text(txt, cx, y - 14.5, { font: f, color: col[cl], align: "center", base: "middle" }); y -= 32; };
  items.forEach(it => {
    if (it.kind === "x") {
      const n = Math.abs(it.n); if (!n) return;
      if (n > 8 || !Number.isInteger(n)) { chip((it.n < 0 ? "−" : "") + n + "x", it.col); return; }
      const tot = n * (tw + 4) - 4;
      for (let i = 0; i < n; i++) { const x0 = cx - tot / 2 + i * (tw + 4); d.rr(x0, y - th, tw, th, 4, it.n > 0 ? k.alpha(col[it.col], .85) : k.alpha(col[it.col], .08), col[it.col], 1.5); d.text(it.n > 0 ? "x" : "−x", x0 + tw / 2, y - th / 2 + 1, { font: `italic ${Math.round(tw * .62)}px ${F.math}`, color: it.n > 0 ? C.ink : col[it.col], align: "center", base: "middle" }); }
      y -= th + 6;
    } else {
      const q = it.q; if (qz(q)) return;
      if (q.d !== 1 || Math.abs(q.n) > 40) { chip(qs(q), it.col); return; }
      const n = Math.abs(q.n), per = Math.max(1, Math.floor((pw - 8) / (us + 3))), rows = Math.ceil(n / per);
      for (let j = 0; j < n; j++) {
        const r = Math.floor(j / per), ci = j % per, rc = Math.min(per, n - r * per);
        const x0 = cx - (rc * (us + 3) - 3) / 2 + ci * (us + 3), yy = y - (r + 1) * (us + 3) + 3;
        if (q.n > 0) d.rect(x0, yy, us, us, k.alpha(col[it.col], .8), col[it.col]);
        else { d.rect(x0, yy, us, us, k.alpha(col[it.col], .06), col[it.col]); d.line(x0 + us * .25, yy + us / 2, x0 + us * .75, yy + us / 2, col[it.col], 1.5); }
      }
      y -= rows * (us + 3) + 4;
    }
  });
  if (y === y0) { d.text("0", cx, y - 8, { font: `16px ${F.mono}`, color: C.faint, align: "center" }); y -= 24; }
  return y0 - y;
}
function drawBalance(k, c, o){
  const { C, F } = k, d = c.d, g = c.g;
  const half = o.span / 2, by = o.y + 26, ca = Math.cos(o.tilt), sa = Math.sin(o.tilt);
  const base = Math.min(c.h - 12, by + 64), level = Math.abs(o.tilt) < .003;
  g.save(); g.fillStyle = C.panel3; g.strokeStyle = C.line2; g.lineWidth = 1; g.beginPath(); g.moveTo(o.cx, by); g.lineTo(o.cx - 24, base); g.lineTo(o.cx + 24, base); g.closePath(); g.fill(); g.stroke(); g.restore();
  d.line(o.cx - 70, base, o.cx + 70, base, C.muted, 3);
  const ends = [[o.cx - half * ca, by + half * sa], [o.cx + half * ca, by - half * sa]];
  d.line(ends[0][0], ends[0][1], ends[1][0], ends[1][1], level ? C.amber : C.muted, 5);
  d.circle(o.cx, by, 5, C.text);
  d.text(level ? "level" : "tipped", o.cx + 80, base - 4, { font: `600 11px ${F.ui}`, color: level ? C.amber : C.faint });
  const pw = Math.min(half * .9, 240);
  [[ends[0], o.left, o.opL], [ends[1], o.right, o.opR]].forEach(([[ex, ey], items, op]) => {
    const py = ey - 18;
    d.line(ex, ey, ex, py, C.muted, 2);
    d.rr(ex - pw / 2, py, pw, 7, 3, C.line2, C.muted, 1);
    const hh = drawPan(k, d, items, ex, py, pw);
    if (op && op.a > 0) { const f = `600 15px ${F.mono}`, fw = d.width(op.t, f) + 18, yy = py - hh - 32; d.rr(ex - fw / 2, yy, fw, 24, 12, k.alpha(C.amber, .16 * op.a), k.alpha(C.amber, op.a), 1.5); d.text(op.t, ex, yy + 12.5, { font: f, color: k.alpha(C.amber, op.a), align: "center", base: "middle" }); }
  });
}
/* shared stepper for equations on a balance.  o: {title, narr, build() -> states, sol(), parts(state, final), items(side, "L"|"R"), done(sol)} */
function balanceLab(k, o){
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let anim = 1, tilt = 0, S = o.build();
  const st = k.stepper(() => S.length - 1, K => { anim = K > 0 ? 0 : 1; }, { ms: 1800 });
  const eng = { reset(){ S = o.build(); st.reset(); } };
  k.loop(dt => {
    anim = Math.min(1, anim + dt / (k.reduce ? .2 : 1.3));
    const K = Math.min(st.k, S.length - 1), cur = S[K], prev = S[Math.max(0, K - 1)], done = K === S.length - 1;
    const sol = o.sol(), xv = sol.kind === "x" ? sol.q : Q(0);
    const val = s => qv(qa(qm(s.x, xv), s.u));
    const shL = K > 0 && anim < .3 ? prev.L : cur.L, shR = K > 0 && anim < .62 ? prev.R : cur.R;
    const diff = val(shL) - val(shR);
    const tgt = Math.abs(diff) < 1e-9 ? 0 : Math.sign(diff) * Math.min(.13, .05 + Math.abs(diff) * .006);
    tilt = k.reduce ? tgt : lerp(tilt, tgt, Math.min(1, dt * 7)); if (Math.abs(tilt - tgt) < 1e-4) tilt = tgt;
    c.begin(); const { w, h } = c;
    const fs = Math.min(34, w / 12), fin = done && sol.kind === "x";
    const ps = o.parts(cur, fin);
    drawParts(k, d, ps, w / 2, 50, fs, "center", w - 30);
    if (K > 0) d.text(cur.say, w / 2, 50 + fs * .95, { font: `14px ${F.sans}`, color: C.amber, align: "center" });
    else if (S.length > 1) d.text("Press Step to undo one operation on both pans", w / 2, 50 + fs * .95, { font: `13px ${F.sans}`, color: C.faint, align: "center" });
    const span = Math.min(w * .86, 640), py = Math.max(h * .64, 250);
    const opA = K > 0 ? (anim < 1 ? 1 : .55) : 0;
    drawBalance(k, c, { cx: w / 2, y: py, span, tilt, left: o.items(shL, "L"), right: o.items(shR, "R"),
      opL: K > 0 && anim > .05 ? { t: cur.op, a: opA } : null, opR: K > 0 && anim > .38 ? { t: cur.op, a: opA } : null });
    const rows = S.slice(0, K + 1).map((s, j) => `<div class="row">${M(partsHTML(o.parts(s, j === S.length - 1 && sol.kind === "x")))}<span class="lbl">${j ? `<span class="c1">${esc(s.op)}</span> · ${s.say}` : "the starting equation"}</span></div>`).join("");
    let lm, hit = false;
    if (done) { hit = true; lm = o.done(sol); }
    else { const nx = S[K + 1]; lm = `<div class="big">${M(`next: <span class="c1">${esc(nx.op)}</span> on both sides`)}</div><div class="note">${nx.why}</div>`; }
    k.setRO(`<div><h2>${o.title}</h2><div class="ro-big" style="margin-top:8px">${M(partsHTML(ps))}</div></div>
      <div class="ro-rows">${rows}</div><div class="landmark${hit ? " hit" : ""}">${lm}</div><p class="narr">${o.narr}</p>`);
  });
  return eng;
}
const xs = m => m === 1 ? "x" : m === -1 ? "−x" : mn(m) + "x";
/* ax + b = cx + d: collect x terms on the side with the larger coefficient, then constants, then divide */
function solveBoth(a, b, c, dd){
  const S = [{ L: { x: Q(a), u: Q(b) }, R: { x: Q(c), u: Q(dd) } }];
  let Ls = S[0].L, Rs = S[0].R;
  const xl = a >= c, m = xl ? c : a;
  if (m !== 0) {
    Ls = { x: Q(a - m), u: Ls.u }; Rs = { x: Q(c - m), u: Rs.u };
    S.push({ L: Ls, R: Rs, op: m > 0 ? `− ${xs(m)}` : `+ ${xs(-m)}`, say: m > 0 ? `subtract ${xs(m)} from both sides` : `add ${xs(-m)} to both sides`,
      why: a === c ? "Both sides have the same number of x's. Taking them away shows what is left to compare." : `Collect the x terms on one side. Removing ${xs(Math.abs(m))} from the side with fewer x's leaves a positive coefficient.` });
  }
  if (a === c) return S;
  const kx = xl ? a - c : c - a, cu = xl ? b : dd;
  if (cu !== 0) {
    Ls = { x: Ls.x, u: qsub(Ls.u, Q(cu)) }; Rs = { x: Rs.x, u: qsub(Rs.u, Q(cu)) };
    S.push({ L: Ls, R: Rs, op: cu > 0 ? `− ${cu}` : `+ ${-cu}`, say: cu > 0 ? `subtract ${cu} from both sides` : `add ${-cu} to both sides`, why: "Now move the constant away from the x terms, onto the other side." });
  }
  if (kx !== 1) {
    Ls = { x: qdv(Ls.x, Q(kx)), u: qdv(Ls.u, Q(kx)) }; Rs = { x: qdv(Rs.x, Q(kx)), u: qdv(Rs.u, Q(kx)) };
    S.push({ L: Ls, R: Rs, op: `÷ ${kx}`, say: `divide both sides by ${kx}`, why: `${kx} copies of x balance the other side, so one x balances a ${kx === 2 ? "half" : `${kx}th`} of it.` });
  }
  return S;
}

/* ---------- two-step equations ---------- */
L["pa-two-step"] = k => {
  const { M } = k;
  const PRE = [[3, 5, 20], [2, -7, 9], [-4, 6, -10], [5, 3, -9], [-2, -9, 4], [3, 1, 12], [0, 4, 4], [0, 3, 8]];
  let a = 3, b = 5, cc = 20, pi = 0, eng;
  const sa = k.slider(`<span class="c3"><i>a</i></span>`, -6, 6, 1, a, v => { a = v; eng.reset(); });
  const sb = k.slider(`<span class="c4"><i>b</i></span>`, -12, 12, 1, b, v => { b = v; eng.reset(); });
  const sc = k.slider(`<span class="c2"><i>c</i></span>`, -24, 24, 1, cc, v => { cc = v; eng.reset(); });
  eng = balanceLab(k, {
    title: "Solve for x",
    narr: "Whatever you do to one pan, do to the other. Undo the operations in reverse order: the + b first, then the × a.",
    build(){
      const S = [{ L: { x: Q(a), u: Q(b) }, R: { x: Q(0), u: Q(cc) }, zx: a === 0 }];
      if (b !== 0) S.push({ L: { x: Q(a), u: Q(0) }, R: { x: Q(0), u: Q(cc - b) }, zx: a === 0, op: b > 0 ? `− ${b}` : `+ ${-b}`, say: b > 0 ? `subtract ${b} from both sides` : `add ${-b} to both sides`,
        why: `${a === 0 ? "" : `x was multiplied by ${mn(a)}, then `}${b > 0 ? `${b} was added` : `${-b} was subtracted`}. Undo the last operation first.` });
      if (a !== 0 && a !== 1) S.push({ L: { x: Q(1), u: Q(0) }, R: { x: Q(0), u: Q(cc - b, a) }, op: a > 0 ? `÷ ${a}` : `÷ (${mn(a)})`, say: `divide both sides by ${mn(a)}`,
        why: `Now undo the multiplication by ${mn(a)}: share each pan into ${Math.abs(a)} equal parts${a < 0 ? " and change the sign" : ""}.` });
      return S;
    },
    sol: () => a === 0 ? { kind: b === cc ? "all" : "none" } : { kind: "x", q: Q(cc - b, a) },
    parts: (s, fin) => eqParts(side(s.L.x, s.L.u, "c3", "c5", "c4", s.zx), "=", side(s.R.x, s.R.u, "c3", "c5", fin ? "c5" : "c2")),
    items: (s, sd) => sd === "L" ? [{ kind: "x", n: qv(s.x), col: "c5" }, { kind: "u", q: s.u, col: "c4" }] : [{ kind: "u", q: s.u, col: "c2" }],
    done(sol){
      if (sol.kind === "x") { const chk = qa(qm(Q(a), sol.q), Q(b)); return `<div class="big">${M(`<i class="c5">x</i> = ${qh(sol.q, "c5")}`)}${dec(k, sol.q)}</div><div class="note">Check: ${mn(a)} · ${qp(sol.q)} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${qs(chk)} ${qeq(chk, Q(cc)) ? "✓" : "✗"}. The value makes the original equation true.</div>`; }
      if (sol.kind === "all") return `<div class="big">${M("every <i>x</i> works")}</div><div class="note">With a = 0 the x's vanish and ${mn(b)} = ${mn(cc)} is always true. This is an identity: infinitely many solutions.</div>`;
      return `<div class="big">${M("no solution")}</div><div class="note">With a = 0 the equation says 0 · x = ${mn(cc - b)}. Nothing times 0 is ${mn(cc - b)}, so the pans can never level.</div>`;
    }
  });
  k.button("Next example", () => { pi = (pi + 1) % PRE.length; [a, b, cc] = PRE[pi]; sa.set(a); sb.set(b); sc.set(cc); eng.reset(); }, "btn ghost");
};

/* ---------- variables on both sides ---------- */
L["pa-both-sides"] = k => {
  const { M } = k;
  const PRE = [[5, 3, 2, 12], [2, 9, 5, -3], [-2, 5, 1, -7], [6, 1, 2, 4], [4, -7, 4, 2], [3, 6, 3, 6]];
  let a = 5, b = 3, cc = 2, dd = 12, pi = 0, eng;
  const s1 = k.slider(`<span class="c2"><i>a</i></span>`, -6, 6, 1, a, v => { a = v; eng.reset(); });
  const s2 = k.slider(`<span class="c3"><i>b</i></span>`, -12, 12, 1, b, v => { b = v; eng.reset(); });
  const s3 = k.slider(`<span class="c2"><i>c</i></span>`, -6, 6, 1, cc, v => { cc = v; eng.reset(); });
  const s4 = k.slider(`<span class="c3"><i>d</i></span>`, -12, 12, 1, dd, v => { dd = v; eng.reset(); });
  eng = balanceLab(k, {
    title: "Solve for x",
    narr: "Collect x terms on one side, constants on the other, then divide. Try a = c to see an identity or an equation with no solution.",
    build: () => solveBoth(a, b, cc, dd),
    sol: () => a === cc ? { kind: b === dd ? "all" : "none" } : { kind: "x", q: Q(dd - b, a - cc) },
    parts: (s, fin) => eqParts(side(s.L.x, s.L.u, fin ? "c5" : "c2", fin ? "c5" : "c2", fin ? "c5" : "c3"), "=", side(s.R.x, s.R.u, fin ? "c5" : "c2", fin ? "c5" : "c2", fin ? "c5" : "c3")),
    items: s => [{ kind: "x", n: qv(s.x), col: "c2" }, { kind: "u", q: s.u, col: "c3" }],
    done(sol){
      const sd = (x, u) => partsHTML(side(Q(x), Q(u), "", "", ""));
      if (sol.kind === "x") { const l = qa(qm(Q(a), sol.q), Q(b)), r = qa(qm(Q(cc), sol.q), Q(dd)); return `<div class="big">${M(`<i class="c5">x</i> = ${qh(sol.q, "c5")}`)}${dec(k, sol.q)}</div><div class="note">Check: left ${mn(a)} · ${qp(sol.q)} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${qs(l)}, right ${mn(cc)} · ${qp(sol.q)} ${dd < 0 ? "−" : "+"} ${Math.abs(dd)} = ${qs(r)} ${qeq(l, r) ? "✓" : "✗"}</div>`; }
      if (sol.kind === "all") return `<div class="big">${M("identity: every <i>x</i> works")}</div><div class="note">${M(sd(a, b))} and ${M(sd(cc, dd))} are the same expression. The x's cancel and ${mn(b)} = ${mn(dd)} is always true.</div>`;
      return `<div class="big">${M("no solution")}</div><div class="note">Same number of x's on each side, but ${mn(b)} ≠ ${mn(dd)}. The x's cancel and leave a false statement, so no value of x balances the pans.</div>`;
    }
  });
  k.button("Next example", () => { pi = (pi + 1) % PRE.length; [a, b, cc, dd] = PRE[pi]; s1.set(a); s2.set(b); s3.set(cc); s4.set(dd); eng.reset(); }, "btn ghost");
};

/* ---------- solving linear inequalities ---------- */
L["pa-solve-ineq"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const col = COL(C);
  const FLIP = { "<": ">", ">": "<", "≤": "≥", "≥": "≤" };
  const PRE = [[-3, 4, 19, "<"], [2, -5, 7, "≥"], [4, 3, -9, ">"], [-2, -6, 1, "≤"], [0, 2, 5, "<"], [0, 6, 1, "<"]];
  let a = -3, b = 4, cc = 19, rel = "<", pi = 0, tp = 0, lo = -8, drag = false, anim = 1, shade = 0, lastKey = "";
  const test = (A, B, CC, R) => R === "<" ? A < B - 0 && false || (A + B) < CC : 0;
  void test;
  const cmp = (lv, rv, r) => r === "<" ? lv < rv : r === ">" ? lv > rv : r === "≤" ? lv <= rv : lv >= rv;
  const sa = k.slider(`<i>a</i>`, -6, 6, 1, a, v => { a = v; st.reset(); });
  const sb = k.slider(`<i>b</i>`, -12, 12, 1, b, v => { b = v; st.reset(); });
  const sc = k.slider(`<i>c</i>`, -24, 24, 1, cc, v => { cc = v; st.reset(); });
  const sr = k.select("relation", [["<", "&lt;"], ["≤", "≤"], [">", "&gt;"], ["≥", "≥"]], rel, v => { rel = v; st.reset(); });
  function build(){
    const S = [{ x: Q(a), u: Q(b), r: Q(cc), rel, zx: a === 0 }];
    if (b !== 0) S.push({ x: Q(a), u: Q(0), r: Q(cc - b), rel, zx: a === 0, op: b > 0 ? `− ${b}` : `+ ${-b}`, say: b > 0 ? `subtract ${b} from both sides` : `add ${-b} to both sides` });
    if (a !== 0 && a !== 1) S.push({ x: Q(1), u: Q(0), r: Q(cc - b, a), rel: a < 0 ? FLIP[rel] : rel, flip: a < 0, op: a > 0 ? `÷ ${a}` : `÷ (${mn(a)})`, say: `divide both sides by ${mn(a)}${a < 0 ? ", and flip the sign" : ""}` });
    return S;
  }
  let S = build();
  const st = k.stepper(() => (S = build()).length - 1, K => { anim = K ? 0 : 1; }, { ms: 1500 });
  k.button("Next example", () => { pi = (pi + 1) % PRE.length; [a, b, cc, rel] = PRE[pi]; sa.set(a); sb.set(b); sc.set(cc); sr.set(rel); st.reset(); }, "btn ghost");
  k.hint("Drag the test point along the line");
  let geo = { y: 0, X: v => v, inv: p => p };
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e); if (Math.abs(p.y - geo.y) < 44) { drag = true; c.cv.setPointerCapture(e.pointerId); tp = geo.inv(p.x); } });
  c.cv.addEventListener("pointermove", e => { if (drag) tp = geo.inv(c.xy(e).x); });
  c.cv.addEventListener("pointerup", () => drag = false);
  k.loop(dt => {
    S = build(); anim = Math.min(1, anim + dt / (k.reduce ? .2 : 1));
    const K = Math.min(st.k, S.length - 1), done = K === S.length - 1, fin = S[S.length - 1];
    const B = a === 0 ? null : Q(cc - b, a), fr = fin.rel;
    const allOK = a === 0 ? cmp(0, cc - b, rel) : false;
    shade = done ? (k.reduce ? 1 : Math.min(1, shade + dt * 2.5)) : 0;
    c.begin(); const { w, h } = c;
    const span = w < 520 ? 12 : 16, key = `${a},${b},${cc}`;
    if (key !== lastKey) { const cen = B ? Math.round(qv(B)) : 0; lo = cen - span / 2; if (!(tp >= lo && tp <= lo + span) || lastKey === "") tp = cen + 2; lastKey = key; }
    const fs = Math.min(30, w / 13), lh = fs * 1.55, top = 52;
    for (let j = 0; j <= K; j++) {
      const s = S[j], last = j === S.length - 1 && a !== 0;
      const ps = eqParts(side(s.x, s.u, "t", last ? "c2" : "t", "t", s.zx), s.rel, side(Q(0), s.r, "t", "t", last ? "c1" : "t"), s.flip ? "c3" : last ? "c2" : "t");
      const alpha = j === K ? 1 : .55; c.g.save(); c.g.globalAlpha = j === K && j > 0 ? Math.min(1, anim * 2) : alpha;
      const wd = drawParts(k, d, ps, w / 2, top + j * lh, j === K ? fs : fs * .82, "center", w - 150);
      if (j > 0) d.text(s.op, w / 2 - wd / 2 - 14, top + j * lh - fs * .12, { font: `600 14px ${F.mono}`, color: C.amber, align: "right" });
      c.g.restore();
    }
    let ny = Math.max(h * .7, top + 3 * lh + 70);
    const flipStep = S.findIndex(s => s.flip);
    if (flipStep > 0 && K >= flipStep) {
      const msg = `Dividing by ${mn(a)} reverses the order: ${rel} becomes ${fr}`, f = `600 13px ${F.sans}`, mw = Math.min(w - 30, d.width(msg, f) + 24), yy = top + K * lh + fs * .7;
      d.rr(w / 2 - mw / 2, yy, mw, 28, 6, k.alpha(C.pink, .14), C.pink, 1.5);
      d.text(msg, w / 2, yy + 14.5, { font: mw < d.width(msg, f) + 24 ? `600 11px ${F.sans}` : f, color: C.pink, align: "center", base: "middle" });
    }
    // number line
    const x0 = 30, x1 = w - 30, X = v => x0 + (x1 - x0) * (v - lo) / span;
    geo = { y: ny, X, inv: px => Math.max(lo, Math.min(lo + span, Math.round(((px - x0) / (x1 - x0) * span + lo) * 2) / 2)) };
    if (done && shade > 0) {
      c.g.save(); c.g.globalAlpha = shade;
      if (a === 0) { if (allOK) { d.line(x0, ny, x1, ny, C.cyan, 7); d.arrow(x0 + 10, ny, x0 - 6, ny, C.cyan, 3); d.arrow(x1 - 10, ny, x1 + 6, ny, C.cyan, 3); } }
      else { const bx = X(qv(B)), right = fr === ">" || fr === "≥"; const ex = right ? x1 + 6 : x0 - 6; d.line(bx, ny, ex, ny, C.cyan, 7); d.arrow(right ? x1 - 10 : x0 + 10, ny, ex, ny, C.cyan, 3); }
      c.g.restore();
    }
    d.line(x0 - 8, ny, x1 + 8, ny, k.alpha(C.muted, .9), 2);
    for (let v = lo; v <= lo + span; v++) { d.line(X(v), ny - 6, X(v), ny + 6, C.faint, 1.5); if (span <= 12 || v % 2 === 0) d.text(mn(v), X(v), ny + 24, { font: `12px ${F.mono}`, color: C.faint, align: "center" }); }
    if (done && a !== 0) {
      const bx = X(qv(B)), closed = fr === "≤" || fr === "≥";
      if (bx >= x0 - 1 && bx <= x1 + 1) { d.circle(bx, ny, 8, closed ? C.amber : C.ink, C.amber, 3); d.text(qs(B), bx, ny - 18, { font: `600 15px ${F.mono}`, color: C.amber, align: "center" }); }
    }
    if (done && a === 0 && !allOK) d.text("empty set: no number works", w / 2, ny - 22, { font: `600 14px ${F.sans}`, color: C.cyan, align: "center" });
    // test point
    const lv = a * tp + b, ok = cmp(lv, cc, rel), tx = X(tp);
    d.line(tx, ny - 48, tx, ny, k.alpha(C.text, .4), 1, [3, 3]);
    d.circle(tx, ny + 40, 7, C.text, ok ? C.green : C.red, 3);
    const tl = `x = ${mn(tp)}: ${mn(a)}·${tp < 0 ? `(${mn(tp)})` : mn(tp)} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${mn(lv)} ${rel} ${mn(cc)}? ${ok ? "true" : "false"}`;
    const tf = `12px ${F.mono}`, tw = d.width(tl, tf);
    d.text(tl, Math.max(8 + tw / 2, Math.min(w - 8 - tw / 2, tx)), ny + 66, { font: tf, color: ok ? C.green : C.red, align: "center" });
    // readout
    const H = r => esc(r);
    const rows = S.slice(0, K + 1).map((s, j) => `<div class="row">${M(partsHTML(eqParts(side(s.x, s.u, "", "", "", s.zx), s.rel, side(Q(0), s.r, "", "", ""), s.flip ? "c3" : "t")))}<span class="lbl">${j ? `<span class="${s.flip ? "c3" : "c1"}">${esc(s.op)}</span> · ${s.say}` : "the starting inequality"}</span></div>`).join("");
    const intv = B ? ({ "<": `(−∞, ${qs(B)})`, "≤": `(−∞, ${qs(B)}]`, ">": `(${qs(B)}, ∞)`, "≥": `[${qs(B)}, ∞)` })[fr] : allOK ? "(−∞, ∞)" : "∅";
    let lm, hit = false;
    if (done) {
      hit = true;
      if (a !== 0) lm = `<div class="big">${M(`<i class="c2">x</i> <span class="${fin.flip ? "c3" : "c2"}">${H(fr)}</span> ${qh(B, "c1")}`)}${dec(k, B)}</div><div class="note">${fr === "<" || fr === ">" ? "Open circle: the boundary itself is not a solution." : "Closed circle: the boundary is included."} Shade to the ${fr === ">" || fr === "≥" ? "right" : "left"}.${fin.flip ? " The sign flipped because both sides were divided by a negative." : ""}</div>`;
      else lm = `<div class="big">${M(allOK ? "every real number" : "no solution")}</div><div class="note">With a = 0 the x's vanish, leaving ${mn(b)} ${H(rel)} ${mn(cc)}, which is ${allOK ? "always true" : "always false"}.</div>`;
    } else { const nx = S[K + 1]; lm = `<div class="big">${M(`next: <span class="${nx.flip ? "c3" : "c1"}">${esc(nx.op)}</span> on both sides`)}</div><div class="note">${nx.flip ? "Dividing by a negative reverses the order of the two sides. The inequality sign must flip." : "Adding or subtracting keeps the order, so the sign stays the same."}</div>`; }
    k.setRO(`<div><h2>Solution set</h2><div class="ro-big" style="margin-top:8px">${done ? (a !== 0 ? M(`<i class="c2">x</i> <span class="${fin.flip ? "c3" : "c2"}">${H(fr)}</span> ${qh(B, "c1")}`) : M(allOK ? "all <i>x</i>" : "∅")) : M(partsHTML(eqParts(side(S[K].x, S[K].u, "", "", "", S[K].zx), S[K].rel, side(Q(0), S[K].r, "", "", ""))))}</div></div>
      <div class="ro-rows">${rows}${done ? `<div class="row">${M("interval")} <span class="v c2">${intv}</span><span class="lbl">interval notation</span></div>` : ""}
      <div class="row">${M(`test <i>x</i> = ${mn(tp)}`)} <span class="v" style="color:var(--${ok ? "green" : "red"})">${ok ? "true" : "false"}</span><span class="lbl">plug the test point into the original inequality</span></div></div>
      <div class="landmark${hit ? " hit" : ""}">${lm}</div><p class="narr">Step through, then drag the test point: it turns green exactly on the shaded side.</p>`);
  });
};

/* ---------- similar figures ---------- */
L["pa-similar"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const g = c.g;
  const TRI = { "3-4-5": [3, 4, 5], "4-6-8": [4, 6, 8], "5-5-6": [5, 5, 6], "4-5-6": [4, 5, 6], "6-6-6": [6, 6, 6] };
  let key = "4-6-8", kq = Q(3, 2), dk = 1.5, unk = "c";
  k.slider(`<span class="c4">scale factor <i>k</i></span>`, 1, 12, 1, 6, v => kq = Q(v, 4), v => qs(Q(v, 4)));
  k.select("Triangle", Object.keys(TRI).map(t => [t, t]), key, v => key = v);
  k.select("Unknown", [["a", "side a′"], ["b", "side b′"], ["c", "side c′"], ["none", "none"]], unk, v => unk = v);
  const tri = (a, b, cS) => { const cx = (b * b + cS * cS - a * a) / (2 * cS), cy = Math.sqrt(Math.max(0, b * b - cx * cx)); return [[0, 0], [cS, 0], [cx, cy]]; };
  k.loop(dt => {
    dk = k.reduce ? qv(kq) : lerp(dk, qv(kq), Math.min(1, dt * 8));
    c.begin(); const { w, h } = c;
    const [a, b, cS] = TRI[key], P = tri(a, b, cS);
    const minx = Math.min(0, P[2][0]), maxx = Math.max(cS, P[2][0]), W0 = maxx - minx, H0 = P[2][1];
    const gap = 50, s = Math.min((w - 70 - gap) / (W0 * (1 + dk)), (h - 150) / (H0 * Math.max(1, dk)));
    const tot = W0 * s * (1 + dk) + gap, left = (w - tot) / 2, base = h - 62;
    const place = (sc, ox) => P.map(([x, y]) => [ox + (x - minx) * s * sc, base - y * s * sc]);
    const T1 = place(1, left), T2 = place(dk, left + W0 * s + gap);
    const sides = [["a", 1, 2, a], ["b", 2, 0, b], ["c", 0, 1, cS]];
    const draw = (T, sc, orig) => {
      const cen = [(T[0][0] + T[1][0] + T[2][0]) / 3, (T[0][1] + T[1][1] + T[2][1]) / 3];
      g.save(); g.fillStyle = k.alpha(orig ? C.cyan : C.pink, .08); g.beginPath(); g.moveTo(...T[0]); g.lineTo(...T[1]); g.lineTo(...T[2]); g.closePath(); g.fill(); g.restore();
      sides.forEach(([nm, i, j, len]) => {
        const isU = !orig && nm === unk, colr = isU ? C.amber : orig ? C.cyan : C.pink;
        d.line(T[i][0], T[i][1], T[j][0], T[j][1], colr, 3, isU ? [7, 5] : null);
        const mx = (T[i][0] + T[j][0]) / 2, my = (T[i][1] + T[j][1]) / 2, vx = mx - cen[0], vy = my - cen[1], vl = Math.hypot(vx, vy) || 1;
        const txt = orig ? `${nm} = ${len}` : isU ? `${nm}′ = x` : `${nm}′ = ${qs(qm(kq, Q(len)))}`;
        d.text(txt, mx + vx / vl * 20, my + vy / vl * 20, { font: `${isU ? "600 " : ""}14px ${F.math}`, color: colr, align: "center", base: "middle" });
      });
      // angle arcs: vertex i gets i+1 arcs
      T.forEach((p, i) => { const q1 = T[(i + 1) % 3], q2 = T[(i + 2) % 3]; let t1 = Math.atan2(q1[1] - p[1], q1[0] - p[0]), t2 = Math.atan2(q2[1] - p[1], q2[0] - p[0]); let df = t2 - t1; while (df > Math.PI) df -= 2 * Math.PI; while (df < -Math.PI) df += 2 * Math.PI; if (df < 0) [t1, t2] = [t2, t1];
        for (let r = 0; r <= i; r++) { g.save(); g.strokeStyle = k.alpha(C.text, .55); g.lineWidth = 1.3; g.beginPath(); g.arc(p[0], p[1], 14 + r * 4, t1, t1 + Math.abs(df)); g.stroke(); g.restore(); }
        const vx = p[0] - cen[0], vy = p[1] - cen[1], vl = Math.hypot(vx, vy) || 1;
        d.text("ABC"[i] + (orig ? "" : "′"), p[0] + vx / vl * 16, p[1] + vy / vl * 16, { font: `italic 14px ${F.math}`, color: C.muted, align: "center", base: "middle" }); });
    };
    draw(T1, 1, true); draw(T2, dk, false);
    const ax1 = left + W0 * s + 6, ax2 = left + W0 * s + gap - 6, ay = base - Math.max(H0 * s, H0 * s * dk) - 32;
    d.arrow(ax1, Math.max(56, ay) + 12, ax2, Math.max(56, ay) + 12, C.violet, 2);
    d.text(`× k = ${qs(kq)}`, (ax1 + ax2) / 2, Math.max(56, ay), { font: `600 16px ${F.math}`, color: C.violet, align: "center" });
    d.text("ORIGINAL", left, h - 20, { font: `600 12px ${F.ui}`, color: C.cyan });
    d.text("IMAGE", left + W0 * s + gap, h - 20, { font: `600 12px ${F.ui}`, color: C.pink });
    // readout
    const kv = qv(kq), ang = (o1, o2, o3) => Math.acos((o2 * o2 + o3 * o3 - o1 * o1) / (2 * o2 * o3)) * 180 / Math.PI;
    const angs = [ang(a, b, cS), ang(b, cS, a), ang(cS, a, b)];
    const img = n => qm(kq, Q(n)), lenOf = { a, b, c: cS };
    let lm;
    if (unk !== "none") {
      const kn = unk === "a" ? "b" : "a", kno = lenOf[kn], kni = img(kno), xv = img(lenOf[unk]);
      lm = `<div class="big">${M(`${FR(`<i class="c1">x</i>`, `<span class="c2">${lenOf[unk]}</span>`)} = ${FR(`<span class="c3">${qs(kni)}</span>`, `<span class="c2">${kno}</span>`)} → <i class="c1">x</i> = ${qh(xv, "c1")}`)}</div><div class="note">Match ${unk}′ with its partner ${unk} and use a known pair (${kn}′ and ${kn}) for the ratio: <i>x</i> = ${lenOf[unk]} · ${qs(kni)} ÷ ${kno} = ${qs(xv)}${dec(k, xv, 2)}.</div>`;
    } else lm = kq.n === kq.d ? `<div class="big">${M("<i>k</i> = 1: congruent")}</div><div class="note">Same shape and same size. Congruent figures are similar with scale factor 1.</div>`
      : `<div class="big">${M(`<i>k</i> ${kv > 1 ? "&gt;" : "&lt;"} 1: ${kv > 1 ? "enlargement" : "reduction"}`)}</div><div class="note">Every length is multiplied by ${qs(kq)}. Angles stay the same.</div>`;
    const hit = unk !== "none" || kq.n === kq.d;
    k.setRO(`<div><h2>Scale factor</h2><div class="ro-big" style="margin-top:8px"><span class="m c4"><i>k</i></span> = ${qh(kq, "c4")}${kq.d > 1 ? `<span style="font-size:.6em;color:var(--muted)"> = ${k.fmt(kv, 2)}</span>` : ""}</div></div>
      <div class="ro-rows"><div class="row">${M(["a", "b", "c"].map(n => FR(`<span class="${unk === n ? "c1" : "c3"}">${unk === n ? "<i>x</i>" : qs(img(lenOf[n]))}</span>`, `<span class="c2">${lenOf[n]}</span>`)).join(" = ") + ` = <span class="c4">${qs(kq)}</span>`)}<span class="lbl">image ÷ original is the same for every pair of corresponding sides</span></div>
      <div class="row">${M("perimeter ratio")} <span class="v c4">${qs(kq)}</span><span class="lbl">${a + b + cS} → ${qs(img(a + b + cS))}: perimeters scale by k</span></div>
      <div class="row">${M("area ratio")} <span class="v">${qs(qm(kq, kq))}</span><span class="lbl">areas scale by k² = (${qs(kq)})²</span></div>
      <div class="row">${M("angles")} <span class="v">${angs.map(x => k.fmt(x, 1) + "°").join(", ")}</span><span class="lbl">A, B, C equal A′, B′, C′: matching arcs mark equal angles</span></div></div>
      <div class="landmark${hit ? " hit" : ""}">${lm}</div><p class="narr">Slide k below 1 for a reduction (a scale drawing) and above 1 for an enlargement.</p>`);
  });
};

/* ---------- proportional relationships ---------- */
L["pa-proportional"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const KP = KL.filter(q => q.n > 0);
  let ki = KP.findIndex(q => q.n === 3 && q.d === 2), add = 0, px = 4, drag = false, P = null;
  k.slider(`<span class="c4"><i>k</i></span>`, 0, KP.length - 1, 1, ki, v => ki = v, v => qs(KP[v]));
  k.select("Relationship", [["0", "proportional: y = kx"], ["2", "not proportional: y = kx + 2"]], "0", v => add = +v);
  k.hint("Drag along the line");
  const setX = e => { if (!P) return; const p = c.xy(e); px = Math.max(0, Math.min(8, Math.round(P.inv(p.x, p.y).x * 2) / 2)); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setX(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setX(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  k.loop(() => {
    c.begin(); const kq = KP[ki], kv = qv(kq);
    const ymax = Math.max(4, kv * 8 + add) * 1.08;
    P = k.plot(c, { xmin: -.7, xmax: 8.6, ymin: -ymax * .07, ymax, pad: { l: 44, r: 18, t: 24, b: 32 }, xlabel: "x", ylabel: "y", xstep: 1 });
    P.grid(); P.axes();
    P.fn(x => kv * x + add, C.violet, 2.5, 0, 8.6);
    P.fn(x => kv * x + add, k.alpha(C.violet, .35), 1.5, -.7, 0, [4, 4]);
    for (let x = 0; x <= 8; x++) P.point(x, kv * x + add, k.alpha(C.violet, .7), 3.5);
    // unit rate triangle
    P.line(0, add, 1, add, k.alpha(C.cyan, .8), 1.5, [4, 3]); P.line(1, add, 1, kv + add, k.alpha(C.pink, .8), 1.5, [4, 3]);
    d.text(`k = ${qs(kq)}`, P.X(1) + 8, P.Y(add + kv / 2), { font: `600 13px ${F.math}`, color: C.violet, base: "middle" });
    if (add) { P.point(0, add, C.red, 6, true); P.label("(0, 2)", 0, add, C.red, { dx: 10, dy: -8 }); P.point(0, 0, C.faint, 4, true); }
    else { P.point(0, 0, C.violet, 5); }
    const pq = Q(Math.round(px * 2), 2), yq = qa(qm(kq, pq), Q(add)), yv = qv(yq);
    P.line(px, 0, px, yv, C.cyan, 2, [5, 4]); P.line(0, yv, px, yv, C.pink, 2, [5, 4]);
    d.text(qs(pq), P.X(px), P.Y(0) + 18, { font: `600 13px ${F.mono}`, color: C.cyan, align: "center" });
    d.text(qs(yq), P.X(0) - 8, P.Y(yv), { font: `600 13px ${F.mono}`, color: C.pink, align: "right", base: "middle" });
    P.point(px, yv, C.amber, 8);
    const lbx = P.X(px) > c.w - 120;
    d.text(`(${qs(pq)}, ${qs(yq)})`, P.X(px) + (lbx ? -12 : 12), P.Y(yv) - 12, { font: `600 14px ${F.mono}`, color: C.amber, align: lbx ? "right" : "left" });
    // readout
    const tbl = [0, 1, 2, 3, 4, 5].map(x => { const y = qa(qm(kq, Q(x)), Q(add)); return [x, y, x ? qdv(y, Q(x)) : null]; });
    const cell = (s, cl, hl) => `<td style="padding:3px 4px;border-bottom:1px solid var(--line);${hl ? "background:rgba(242,184,75,.14)" : ""}" class="${cl}">${s}</td>`;
    const table = `<table style="width:100%;border-collapse:collapse;font:13px var(--mono);text-align:center">
      <tr>${cell("<i>x</i>", "c2")}${tbl.map(r => cell(r[0], "c2", r[0] === px)).join("")}</tr>
      <tr>${cell("<i>y</i>", "c3")}${tbl.map(r => cell(qs(r[1]), "c3", r[0] === px)).join("")}</tr>
      <tr>${cell("<i>y</i>/<i>x</i>", "c4")}${tbl.map(r => cell(r[2] ? qs(r[2]) : "—", add ? "" : "c4", r[0] === px)).join("")}</tr></table>`;
    const ratio = px ? qdv(yq, pq) : null;
    k.setRO(`<div><h2>${add ? "Linear, not proportional" : "Proportional"}</h2><div class="ro-big" style="margin-top:8px">${M(`<i class="c3">y</i> = ${kq.d > 1 ? `<span class="c4">(${qs(kq)})</span>` : kq.n === 1 ? "" : `<span class="c4">${kq.n}</span>`}<i class="c2">x</i>${add ? " + 2" : ""}`)}</div></div>
      <div class="ro-rows"><div class="row">${M("point")} <span class="v c1">(${qs(pq)}, ${qs(yq)})</span><span class="lbl">y = ${qs(kq)} · ${qs(pq)}${add ? " + 2" : ""} = ${qs(yq)}</span></div>
      <div class="row">${M("<i>y</i> ÷ <i>x</i>")} = <span class="v ${add ? "" : "c4"}">${ratio ? qs(ratio) : "undefined at x = 0"}</span><span class="lbl">${add ? "changes from point to point" : "the constant of proportionality k, the same at every point"}</span></div>
      <div class="row">${M("unit rate")} <span class="v c4">${qs(kq)}</span><span class="lbl">y increases by k for each 1 increase in x (the violet step)</span></div></div>${table}
      <div class="landmark${add ? " hit" : ""}">${add ? `<div class="big">${M("<i>y</i>/<i>x</i> is not constant")}</div><div class="note">The line starts at (0, 2), not the origin. Doubling x does not double y: x = 1 gives ${qs(tbl[1][1])}, x = 2 gives ${qs(tbl[2][1])}.</div>`
        : `<div class="big">${M(`<i>y</i>/<i>x</i> = <span class="c4">${qs(kq)}</span> for every point`)}</div><div class="note">A proportional relationship is a straight line through the origin. Doubling x doubles y.</div>`}</div>`);
  });
};

/* ---------- arithmetic sequences ---------- */
L["pa-sequences"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let a1 = 3, dd = 2, n = 5;
  k.slider(`<span class="c2"><i>a</i><sub>1</sub></span>`, 1, 12, 1, a1, v => a1 = v);
  k.slider(`<span class="c3"><i>d</i></span>`, -3, 5, 1, dd, v => dd = v);
  k.slider(`<span class="c1"><i>n</i></span>`, 1, 10, 1, n, v => n = v);
  const term = i => a1 + (i - 1) * dd;
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const wide = w >= 640;
    const pa = wide ? { x: 12, y: 12, w: w * .56 - 12, h: h - 24 } : { x: 8, y: 8, w: w - 16, h: h * .52 - 8 };
    const ga = wide ? { x: w * .56, y: 0, w: w * .44, h } : { x: 0, y: h * .52, w, h: h * .48 };
    const list = n <= 4 ? Array.from({ length: n }, (_, i) => i + 1) : [1, 2, 3, n];
    const baseCols = Math.ceil(a1 / 6), cols = i => baseCols + (dd > 0 ? i - 1 : 0);
    const totCols = list.reduce((s, i) => s + cols(i), 0) + (list.length - 1) * 1.6 + (n > 4 ? 1.2 : 0);
    const sp = Math.min(22, (pa.w - 20) / totCols, (pa.h - 90) / 6.2), r = sp * .38;
    let x = pa.x + (pa.w - totCols * sp) / 2; const by = pa.y + pa.h - 44;
    list.forEach((i, li) => {
      if (li === 3 && n > 4) { d.text("…", x + sp * .1, by - sp * 2, { font: `20px ${F.math}`, color: C.faint }); x += sp * 1.2; }
      const t = term(i), wdt = cols(i) * sp, cur = i === n;
      if (cur) d.rr(x - 6, by - 6.3 * sp, wdt + 12, 6.3 * sp + 12, 6, k.alpha(C.amber, .08), C.amber, 1.5);
      for (let j = 0; j < a1; j++) { const cx = x + Math.floor(j / 6) * sp + sp / 2, cy = by - (j % 6) * sp - sp / 2; const gone = dd < 0 && j >= a1 - Math.min(a1, (i - 1) * -dd);
        if (gone) { d.circle(cx, cy, r, null, k.alpha(C.pink, .8), 1.5); d.line(cx - r * .6, cy - r * .6, cx + r * .6, cy + r * .6, k.alpha(C.pink, .8), 1.2); } else d.circle(cx, cy, r, C.cyan); }
      if (dd > 0) for (let q = 1; q < i; q++) for (let j = 0; j < dd; j++) d.circle(x + (baseCols + q - 1) * sp + sp / 2, by - j * sp - sp / 2, r, C.pink);
      d.text(`n = ${i}`, x + wdt / 2, by + 20, { font: `${cur ? "600 " : ""}12px ${F.mono}`, color: cur ? C.amber : C.faint, align: "center" });
      d.text(t <= 0 ? mn(t) + "*" : String(t), x + wdt / 2, by + 38, { font: `600 14px ${F.mono}`, color: cur ? C.amber : C.text, align: "center" });
      x += wdt + sp * 1.6;
    });
    if (dd < 0 && term(n) <= 0) d.text("* no dots left to remove: the terms keep going below zero", pa.x + pa.w / 2, pa.y + 14, { font: `12px ${F.sans}`, color: C.pink, align: "center" });
    // graph
    const vals = Array.from({ length: 10 }, (_, i) => term(i + 1)), ymn = Math.min(0, ...vals), ymx = Math.max(1, ...vals);
    const mc = { w: ga.x + ga.w, h: ga.y + ga.h, g: c.g, d: c.d };
    const P = k.plot(mc, { xmin: 0, xmax: 10.6, ymin: ymn - (ymx - ymn) * .08 - .5, ymax: ymx + (ymx - ymn) * .1 + .5, pad: { l: ga.x + 38, r: 14, t: ga.y + 18, b: 30 }, xstep: 1, xlabel: "n", ylabel: "aₙ" });
    c.d = d; P.grid(); P.axes();
    P.fn(t => a1 + (t - 1) * dd, k.alpha(C.text, .22), 1.5, 0, 10.6, [5, 5]);
    for (let i = 1; i < n; i++) { P.line(i, term(i), i + 1, term(i), k.alpha(C.muted, .8), 1.5); P.line(i + 1, term(i), i + 1, term(i + 1), C.pink, 2.5); }
    for (let i = 1; i <= 10; i++) P.point(i, term(i), i === 1 ? C.cyan : i === n ? C.amber : i < n ? C.text : k.alpha(C.text, .25), i === n ? 7 : 4.5);
    // readout
    const b0 = a1 - dd, lin = partsHTML(side(Q(dd), Q(b0), "c3", "t", "t")).replace(/<i>x<\/i>/, "<i>n</i>");
    const S = n * (a1 + term(n)) / 2;
    const firstNeg = dd < 0 ? Math.floor(a1 / -dd) + 1 + (a1 % -dd === 0 ? 0 : 0) : null;
    let lm;
    if (dd === 0) lm = `<div class="big">${M("<i>d</i> = 0: constant sequence")}</div><div class="note">Every term is ${a1}. The points lie on a horizontal line.</div>`;
    else lm = `<div class="big">${M(`slope = <i class="c3">d</i> = ${mn(dd)}`)}</div><div class="note">${dd > 0 ? "Increasing" : "Decreasing"}: each step right on the graph moves ${dd > 0 ? "up" : "down"} ${Math.abs(dd)}. The terms are a linear function of n, sampled at whole numbers.${dd < 0 ? ` The first term ≤ 0 is term ${firstNeg}.` : ""}</div>`;
    k.setRO(`<div><h2>Term <i>n</i> = ${n}</h2><div class="ro-big" style="margin-top:8px">${M(`<i>a</i><sub>${n}</sub> = <span class="c2">${a1}</span> + (${n} − 1)·<span class="c3">${dd < 0 ? `(${mn(dd)})` : dd}</span> = <span class="num c1">${mn(term(n))}</span>`)}</div></div>
      <div class="ro-rows"><div class="row">${M(`<i>a<sub>n</sub></i> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span>`)}<span class="lbl">explicit rule: start at a₁, add d exactly n − 1 times</span></div>
      <div class="row">${M(`<i>a<sub>n</sub></i> = ${lin}`)}<span class="lbl">simplified: the same rule written as a linear function of n</span></div>
      <div class="row">${M(`<i>a<sub>n</sub></i> = <i>a</i><sub><i>n</i>−1</sub> + <span class="c3">${mn(dd)}</span>`)}<span class="lbl">recursive rule: each term is the one before plus d</span></div>
      <div class="row">${M("terms")} <span class="v">${vals.slice(0, 8).map((v, i) => i + 1 === n ? `<span class="c1">${mn(v)}</span>` : mn(v)).join(", ")}, …</span></div>
      <div class="row">${M(`<i>S</i><sub>${n}</sub>`)} = <span class="v">${mn(S)}</span><span class="lbl">sum of the first n terms: n(a₁ + aₙ) ÷ 2</span></div></div>
      <div class="landmark${dd === 0 ? " hit" : ""}">${lm}</div><p class="narr">Each new stage adds ${dd >= 0 ? `one column of ${dd} pink dot${dd === 1 ? "" : "s"}` : `${-dd} crossed-out dot${dd === -1 ? "" : "s"}`}. Set d negative for a decreasing sequence.</p>`);
  });
};

/* ---------- formulas & geometry ---------- */
L["pa-formulas"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const g = c.g;
  let mode = "rect", unit = "cm";
  const D = { l: 8, w: 5, b: 8, h: 5, r: 4, bl: 5, bw: 3, bh: 4, cr: 3, ch: 6 }, E = Object.assign({}, D);
  const SL = { rect: [["l", "length <i>l</i>"], ["w", "width <i>w</i>"]], tri: [["b", "base <i>b</i>"], ["h", "height <i>h</i>"]], circ: [["r", "radius <i>r</i>"]], box: [["bl", "length <i>l</i>"], ["bw", "width <i>w</i>"], ["bh", "height <i>h</i>"]], cyl: [["cr", "radius <i>r</i>"], ["ch", "height <i>h</i>"]] };
  k.modes([["rect", "Rectangle"], ["tri", "Triangle"], ["circ", "Circle"], ["box", "Box"], ["cyl", "Cylinder"]], mode, m => { mode = m; controls(); });
  const box = document.createElement("div"); box.style.display = "contents"; k.ctl.appendChild(box);
  function controls(){ box.innerHTML = ""; const hold = k.ctl; k.ctl = box; SL[mode].forEach(([key, lab]) => k.slider(`<span class="c2">${lab}</span>`, 1, 12, 1, D[key], v => D[key] = v)); k.ctl = hold; }
  controls();
  k.select("Units", [["cm", "cm"], ["m", "m"], ["in", "in"], ["ft", "ft"]], unit, v => unit = v);
  const lab = (v, x, y, align = "center", sq = "") => drawParts(k, d, [{ t: String(v), c: "c2" }, { t: " " + unit + sq, c: "c3" }], x, y, 15, align);
  const res = (name, v, sq) => `<span class="m">${name}</span> = <span class="num c1">${v}</span> <span class="c3" style="font-size:.7em">${unit}${sq}</span>`;
  const pi = (coef, sq) => `${coef === 1 ? "" : coef}π ≈ ${k.fmt(coef * Math.PI, 2)}`;
  void pi;
  k.loop(dt => {
    Object.keys(D).forEach(key => E[key] = k.reduce ? D[key] : lerp(E[key], D[key], Math.min(1, dt * 9)));
    c.begin(); const { w, h } = c;
    const top = 56, avW = w - 110, avH = h - top - 70, cx = w / 2, cy = top + avH / 2 + 10;
    let ro;
    if (mode === "rect") {
      const s = Math.min(avW / E.l, avH / E.w), W = E.l * s, H = E.w * s, x0 = cx - W / 2, y0 = cy - H / 2;
      d.rect(x0, y0, W, H, k.alpha(C.amber, .16), C.amber, 2);
      g.save(); g.strokeStyle = k.alpha(C.amber, .3); g.beginPath(); for (let i = 1; i < D.l; i++) { g.moveTo(x0 + i * s * E.l / D.l, y0); g.lineTo(x0 + i * s * E.l / D.l, y0 + H); } for (let j = 1; j < D.w; j++) { g.moveTo(x0, y0 + j * s * E.w / D.w); g.lineTo(x0 + W, y0 + j * s * E.w / D.w); } g.stroke(); g.restore();
      lab(D.l, cx, y0 - 12); lab(D.w, x0 - 10, cy + 5, "right");
      const A = D.l * D.w, Pm = 2 * (D.l + D.w);
      if (W > 110 && H > 40) drawParts(k, d, [{ t: `A = ${A}`, c: "c1" }, { t: ` ${unit}²`, c: "c3" }], cx, cy + 7, 20);
      ro = { big: res("<i>A</i>", A, "²"), rows: [[`<i>A</i> = <i>l</i> · <i>w</i> = <span class="c2">${D.l}</span> · <span class="c2">${D.w}</span> = <span class="c1">${A}</span>`, `area: ${A} unit squares fill the rectangle`, "²"], [`<i>P</i> = 2(<i>l</i> + <i>w</i>) = 2(<span class="c2">${D.l}</span> + <span class="c2">${D.w}</span>) = <span class="c1">${Pm}</span>`, "perimeter: the distance around", ""]], dbl: `area × 4 = ${4 * A} ${unit}²` };
    } else if (mode === "tri") {
      const s = Math.min(avW / E.b, avH / E.h), W = E.b * s, H = E.h * s, x0 = cx - W / 2, yb = cy + H / 2, ax = x0 + W * .35;
      d.rect(x0, yb - H, W, H, null, k.alpha(C.muted, .5), 1); g.save(); g.setLineDash([5, 4]); d.rect(x0, yb - H, W, H, null, k.alpha(C.faint, .7), 1); g.restore();
      g.save(); g.fillStyle = k.alpha(C.amber, .2); g.strokeStyle = C.amber; g.lineWidth = 2; g.beginPath(); g.moveTo(x0, yb); g.lineTo(x0 + W, yb); g.lineTo(ax, yb - H); g.closePath(); g.fill(); g.stroke(); g.restore();
      d.line(ax, yb, ax, yb - H, C.cyan, 2, [6, 4]); d.rect(ax, yb - 12, 12, 12, null, C.cyan, 1.2);
      lab(D.b, cx, yb + 22); lab(D.h, ax + 10, yb - H / 2, "left");
      const A2 = D.b * D.h, A = A2 / 2;
      if (W > 150) d.text("half of the dashed rectangle", x0 + W, yb - H - 8, { font: `12px ${F.sans}`, color: C.faint, align: "right" });
      ro = { big: res("<i>A</i>", k.fmt(A, 1), "²"), rows: [[`<i>A</i> = ${FR(1, 2)}<i>b</i><i>h</i> = ${FR(1, 2)} · <span class="c2">${D.b}</span> · <span class="c2">${D.h}</span> = ${A2 % 2 ? FR(A2, 2) + " = " : ""}<span class="c1">${k.fmt(A, 1)}</span>`, "a triangle is half the rectangle with the same base and height", "²"], [`<i>b</i> · <i>h</i> = <span class="c2">${D.b}</span> · <span class="c2">${D.h}</span> = ${A2}`, "the dashed rectangle; the apex can slide anywhere along the top without changing the area", "²"]], dbl: `area × 4 = ${k.fmt(4 * A, 1)} ${unit}²` };
    } else if (mode === "circ") {
      const s = Math.min(avW, avH) / (2 * 12) , R = E.r * s;
      d.circle(cx, cy, R, k.alpha(C.amber, .16), C.amber, 2.5);
      d.line(cx, cy, cx + R, cy, C.cyan, 2.5); d.circle(cx, cy, 3.5, C.text);
      lab(D.r, cx + R / 2, cy - 10); d.line(cx - R, cy + R + 16, cx + R, cy + R + 16, k.alpha(C.cyan, .5), 1.5, [4, 3]);
      d.text(`d = ${2 * D.r}`, cx, cy + R + 32, { font: `13px ${F.math}`, color: C.cyan, align: "center" });
      const A = D.r * D.r, Ci = 2 * D.r;
      ro = { big: res("<i>A</i>", `${A}π ≈ ${k.fmt(A * Math.PI, 2)}`, "²"), rows: [[`<i>A</i> = π<i>r</i><sup>2</sup> = π · <span class="c2">${D.r}</span><sup>2</sup> = <span class="c1">${A}π</span>`, `exact; ${A}π ≈ ${k.fmt(A * Math.PI, 2)} using π ≈ 3.14159`, "²"], [`<i>C</i> = 2π<i>r</i> = 2π · <span class="c2">${D.r}</span> = <span class="c1">${Ci}π</span>`, `circumference ≈ ${k.fmt(Ci * Math.PI, 2)}`, ""], [`<i>d</i> = 2<i>r</i> = <span class="c2">${2 * D.r}</span>`, "diameter", ""]], dbl: `area × 4 = ${4 * A}π ${unit}²` };
    } else if (mode === "box") {
      const ob = .5, cs = Math.cos(Math.PI / 4) * ob;
      const s = Math.min(avW / (E.bl + E.bw * cs), avH / (E.bh + E.bw * cs)), W = E.bl * s, H = E.bh * s, Dx = E.bw * s * cs, Dy = E.bw * s * cs;
      const x0 = cx - (W + Dx) / 2, y0 = cy + (H + Dy) / 2;
      const f = [[x0, y0], [x0 + W, y0], [x0 + W, y0 - H], [x0, y0 - H]], bk = f.map(([x, y]) => [x + Dx, y - Dy]);
      g.save(); g.setLineDash([4, 4]); g.strokeStyle = k.alpha(C.amber, .45); g.lineWidth = 1.2; g.beginPath(); g.moveTo(...f[0]); g.lineTo(...bk[0]); g.lineTo(...bk[1]); g.moveTo(...bk[0]); g.lineTo(...bk[3]); g.stroke(); g.restore();
      const poly = (pts, fill) => { g.save(); g.fillStyle = fill; g.strokeStyle = C.amber; g.lineWidth = 2; g.beginPath(); g.moveTo(...pts[0]); pts.slice(1).forEach(p => g.lineTo(...p)); g.closePath(); g.fill(); g.stroke(); g.restore(); };
      poly([f[3], f[2], bk[2], bk[3]], k.alpha(C.amber, .26)); poly([f[1], bk[1], bk[2], f[2]], k.alpha(C.amber, .12)); poly(f, k.alpha(C.amber, .18));
      lab(D.bl, x0 + W / 2, y0 + 22); lab(D.bh, x0 - 10, y0 - H / 2 + 5, "right"); lab(D.bw, x0 + W + Dx / 2 + 12, y0 - Dy / 2 + 5, "left");
      const V = D.bl * D.bw * D.bh, SA = 2 * (D.bl * D.bw + D.bl * D.bh + D.bw * D.bh);
      ro = { big: res("<i>V</i>", V, "³"), rows: [[`<i>V</i> = <i>l</i><i>w</i><i>h</i> = <span class="c2">${D.bl}</span> · <span class="c2">${D.bw}</span> · <span class="c2">${D.bh}</span> = <span class="c1">${V}</span>`, `${D.bh} layers of ${D.bl * D.bw} unit cubes`, "³"], [`<i>SA</i> = 2(<i>lw</i> + <i>lh</i> + <i>wh</i>) = 2(${D.bl * D.bw} + ${D.bl * D.bh} + ${D.bw * D.bh}) = <span class="c1">${SA}</span>`, "surface area: six faces in three matching pairs", "²"]], dbl: `volume × 8 = ${8 * V} ${unit}³` };
    } else {
      const s = Math.min(avW / (2 * 12), avH / (12 + 2 * 12 * .3)), R = E.cr * s, H = E.ch * s, ry = R * .3;
      const yt = cy - H / 2, yb = cy + H / 2;
      g.save(); g.fillStyle = k.alpha(C.amber, .16); g.beginPath(); g.moveTo(cx - R, yt); g.lineTo(cx - R, yb); g.ellipse(cx, yb, R, ry, 0, Math.PI, 0, true); g.lineTo(cx + R, yt); g.closePath(); g.fill(); g.restore();
      g.save(); g.strokeStyle = C.amber; g.lineWidth = 2; g.beginPath(); g.moveTo(cx - R, yt); g.lineTo(cx - R, yb); g.moveTo(cx + R, yt); g.lineTo(cx + R, yb); g.stroke();
      g.beginPath(); g.ellipse(cx, yb, R, ry, 0, 0, Math.PI); g.stroke(); g.setLineDash([4, 4]); g.strokeStyle = k.alpha(C.amber, .45); g.beginPath(); g.ellipse(cx, yb, R, ry, 0, Math.PI, 2 * Math.PI); g.stroke(); g.restore();
      g.save(); g.fillStyle = k.alpha(C.amber, .3); g.strokeStyle = C.amber; g.lineWidth = 2; g.beginPath(); g.ellipse(cx, yt, R, ry, 0, 0, 2 * Math.PI); g.fill(); g.stroke(); g.restore();
      d.line(cx, yt, cx + R, yt, C.cyan, 2.5); d.circle(cx, yt, 3, C.text); lab(D.cr, cx + R / 2, yt - 8);
      d.line(cx + R + 14, yt, cx + R + 14, yb, k.alpha(C.cyan, .7), 1.5, [4, 3]); lab(D.ch, cx + R + 22, cy + 5, "left");
      const B = D.cr * D.cr, V = B * D.ch, SAb = 2 * B, SAl = 2 * D.cr * D.ch;
      ro = { big: res("<i>V</i>", `${V}π ≈ ${k.fmt(V * Math.PI, 2)}`, "³"), rows: [[`<i>V</i> = π<i>r</i><sup>2</sup><i>h</i> = π · <span class="c2">${D.cr}</span><sup>2</sup> · <span class="c2">${D.ch}</span> = <span class="c1">${V}π</span>`, `base area ${B}π times height; ≈ ${k.fmt(V * Math.PI, 2)}`, "³"], [`<i>SA</i> = 2π<i>r</i><sup>2</sup> + 2π<i>r</i><i>h</i> = ${SAb}π + ${SAl}π = <span class="c1">${SAb + SAl}π</span>`, `two circles plus the label rolled flat; ≈ ${k.fmt((SAb + SAl) * Math.PI, 2)}`, "²"]], dbl: `volume × 8 = ${8 * V}π ${unit}³` };
    }
    const three = mode === "box" || mode === "cyl";
    k.setRO(`<div><h2>${three ? "Volume" : "Area"}</h2><div class="ro-big" style="margin-top:8px">${ro.big}</div></div>
      <div class="ro-rows">${ro.rows.map(([f, l, sq]) => `<div class="row">${M(f)} <span class="c3" style="font-size:13px">${unit}${sq}</span><span class="lbl">${l}</span></div>`).join("")}</div>
      <div class="landmark"><div class="big">${M(three ? `${unit}<sup>3</sup>: cubic units` : `${unit}<sup>2</sup>: square units`)}</div><div class="note">${three ? "Volume multiplies three lengths" : "Area multiplies two lengths"}, so the unit is ${three ? "cubed" : "squared"}. Double every dimension and the ${three ? "volume grows 8 times" : "area grows 4 times"}: ${ro.dbl}.</div></div>
      <p class="narr">Substitute each dimension into the formula, then compute. Switch shapes with the buttons above the drawing.</p>`);
  });
};

/* ---------- slope as rate of change ---------- */
L["pa-slope"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let p = [{ x: -4, y: -2 }, { x: 2, y: 2 }], drag = -1, steps = true, P = null;
  k.check("Show unit steps", true, v => steps = v);
  k.button("Swap points", () => { p = [p[1], p[0]]; }, "btn ghost");
  k.button("Random", () => { const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1)); p = [{ x: r(-7, -1), y: r(-5, 5) }, { x: r(0, 7), y: r(-5, 5) }]; }, "btn ghost");
  k.hint("Drag either point");
  c.cv.addEventListener("pointerdown", e => { if (!P) return; const m = c.xy(e); let best = -1, bd = 26; p.forEach((q, i) => { const dd = Math.hypot(P.X(q.x) - m.x, P.Y(q.y) - m.y); if (dd < bd) { bd = dd; best = i; } }); if (best >= 0) { drag = best; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (drag < 0 || !P) return; const m = c.xy(e), v = P.inv(m.x, m.y); p[drag] = { x: Math.max(Math.ceil(P.xmin), Math.min(Math.floor(P.xmax), Math.round(v.x))), y: Math.max(Math.ceil(P.ymin), Math.min(Math.floor(P.ymax), Math.round(v.y))) }; });
  c.cv.addEventListener("pointerup", () => drag = -1);
  c.cv.style.cursor = "pointer";
  k.loop(() => {
    c.begin();
    P = k.plot(c, { xmin: -8, xmax: 8, ymin: -6, ymax: 6, equal: true, pad: { l: 20, r: 14, t: 14, b: 22 } });
    P.grid(1); P.axes();
    const [A, B] = p, rise = B.y - A.y, run = B.x - A.x, same = rise === 0 && run === 0;
    if (!same) { if (run === 0) P.line(A.x, P.ymin, A.x, P.ymax, C.amber, 2.5); else P.fn(x => A.y + rise / run * (x - A.x), C.amber, 2.5); }
    if (steps && run && rise) { const gg = G(rise, run), sx = run / gg, sy = rise / gg; for (let i = 0; i < gg; i++) { const x = A.x + i * sx, y = A.y + i * sy; P.line(x, y, x + sx, y, k.alpha(C.cyan, .55), 1.5, [3, 3]); P.line(x + sx, y, x + sx, y + sy, k.alpha(C.pink, .55), 1.5, [3, 3]); } }
    if (run) { d.arrow(P.X(A.x), P.Y(A.y), P.X(B.x), P.Y(A.y), C.cyan, 3); d.text(`run ${mn(run)}`, (P.X(A.x) + P.X(B.x)) / 2, P.Y(A.y) + (rise > 0 ? 18 : -10), { font: `600 14px ${F.mono}`, color: C.cyan, align: "center" }); }
    if (rise) { d.arrow(P.X(B.x), P.Y(A.y), P.X(B.x), P.Y(B.y), C.pink, 3); const rt = P.X(B.x) < c.w - 80; d.text(`rise ${mn(rise)}`, P.X(B.x) + (rt ? 10 : -10), (P.Y(A.y) + P.Y(B.y)) / 2, { font: `600 14px ${F.mono}`, color: C.pink, align: rt ? "left" : "right", base: "middle" }); }
    p.forEach((q, i) => { d.circle(P.X(q.x), P.Y(q.y), drag === i ? 10 : 8, C.text, C.ink, 2); const up = i === 0 ? q.y <= B.y : q.y > A.y; d.text(`(${mn(q.x)}, ${mn(q.y)})`, P.X(q.x), P.Y(q.y) + (up ? -14 : 24), { font: `600 13px ${F.mono}`, color: C.text, align: "center" }); });
    const m = run ? Q(rise, run) : null;
    let lm, hit = true, big;
    if (same) { big = `<span class="c1">?</span>`; lm = `<div class="big">${M("the same point twice")}</div><div class="note">One point does not fix a direction. Drag one point away.</div>`; }
    else if (!run) { big = `<span class="c1">undefined</span>`; lm = `<div class="big">${M(`vertical line: run = 0`)}</div><div class="note">Slope would be ${mn(rise)} ÷ 0, and division by zero is undefined. The line is x = ${mn(A.x)}.</div>`; }
    else if (!rise) { big = `<span class="num c1">0</span>`; lm = `<div class="big">${M("horizontal line: slope 0")}</div><div class="note">No rise for any run. The quantity is not changing: y = ${mn(A.y)} everywhere.</div>`; }
    else { hit = false; big = `${FR(`<span class="c3">${mn(rise)}</span>`, `<span class="c2">${mn(run)}</span>`)}${m.d !== Math.abs(run) || m.n !== rise ? ` = ${qh(m, "c1")}` : ""}`; lm = `<div class="big">${M(`<span class="c1">${qs(m)}</span>: ${qv(m) > 0 ? "up" : "down"} ${Math.abs(m.n)} for every ${m.d} right`)}</div><div class="note">${qv(m) > 0 ? "Positive slope: the line rises left to right." : "Negative slope: the line falls left to right."} Any two points on this line give the same ratio. The dashed staircase repeats the smallest step ${G(rise, run)} time${G(rise, run) === 1 ? "" : "s"}.</div>`; }
    k.setRO(`<div><h2>Slope</h2><div class="ro-big" style="margin-top:8px"><span class="m"><i>m</i></span> = ${big}</div></div>
      <div class="ro-rows"><div class="row">${M(`<span class="c3">rise</span> = <i>y</i><sub>2</sub> − <i>y</i><sub>1</sub> = ${mn(B.y)} − ${A.y < 0 ? `(${mn(A.y)})` : A.y}`)} = <span class="v c3">${mn(rise)}</span><span class="lbl">vertical change</span></div>
      <div class="row">${M(`<span class="c2">run</span> = <i>x</i><sub>2</sub> − <i>x</i><sub>1</sub> = ${mn(B.x)} − ${A.x < 0 ? `(${mn(A.x)})` : A.x}`)} = <span class="v c2">${mn(run)}</span><span class="lbl">horizontal change</span></div>
      <div class="row">${M(`<i>m</i> = ${FR('<span class="c3">rise</span>', '<span class="c2">run</span>')}`)} = <span class="v c1">${m ? qs(m) + (m.d > 1 ? " ≈ " + k.fmt(qv(m), 3) : "") : "undefined"}</span><span class="lbl">rate of change: how much y changes per 1 unit of x</span></div></div>
      <div class="landmark${hit ? " hit" : ""}">${lm}</div><p class="narr">Swap the points: rise and run both change sign, and the slope stays the same.</p>`);
  });
};

/* ---------- word problems ---------- */
L["pa-word-problems"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PB = [
    { name: "Savings race", text: ["Maya has ", ["k", "$48"], " and saves ", ["k", "$6"], " a week. Leo has ", ["k", "$12"], " and saves ", ["k", "$10"], " a week. ", ["u", "After how many weeks"], " will they have the same amount?"],
      def: "weeks", eq: "48 + 6x = 12 + 10x", abcd: [6, 48, 10, 12], bars: [[48, { x: 6 }], [12, { x: 10 }]], ans: "After 9 weeks, when both have $102.", check: "48 + 6·9 = 102 and 12 + 10·9 = 102" },
    { name: "Consecutive integers", text: ["The sum of ", ["k", "three consecutive integers"], " is ", ["k", "72"], ". ", ["u", "What is the smallest"], "?"],
      def: "the smallest integer (the others are x + 1 and x + 2)", eq: "x + (x + 1) + (x + 2) = 72", simp: "3x + 3 = 72", abcd: [3, 3, 0, 72], bars: [[{ x: 1 }, { x: 1 }, 1, { x: 1 }, 2], [72]], ans: "The integers are 23, 24 and 25.", check: "23 + 24 + 25 = 72" },
    { name: "Taxi fare", text: ["A taxi charges ", ["k", "$3"], " to start plus ", ["k", "$2 per mile"], ". A ride cost ", ["k", "$19"], ". ", ["u", "How many miles"], " was it?"],
      def: "the number of miles", eq: "3 + 2x = 19", simp: "2x + 3 = 19", abcd: [2, 3, 0, 19], bars: [[3, { x: 2 }], [19]], ans: "The ride was 8 miles.", check: "3 + 2·8 = 19" },
    { name: "Rectangle", text: ["A rectangle has perimeter ", ["k", "54 cm"], ". Its length is ", ["k", "3 cm more than twice"], " its width. ", ["u", "Find the width"], "."],
      def: "the width in cm (the length is 2x + 3)", eq: "2x + 2(2x + 3) = 54", simp: "6x + 6 = 54", abcd: [6, 6, 0, 54], bars: [[{ x: 2 }, { x: 2 }, 3, { x: 2 }, 3], [54]], ans: "The width is 8 cm (length 19 cm).", check: "2·8 + 2·19 = 16 + 38 = 54" },
    { name: "Ages", text: ["Sam is ", ["k", "4 times"], " as old as his sister. ", ["k", "In 6 years"], " he will be ", ["k", "twice"], " as old as she will be. ", ["u", "How old is his sister now"], "?"],
      def: "the sister's age now (Sam is 4x)", eq: "4x + 6 = 2(x + 6)", simp: "4x + 6 = 2x + 12", abcd: [4, 6, 2, 12], bars: [[{ x: 4 }, 6], [{ x: 1 }, 6, { x: 1 }, 6]], ans: "His sister is 3; Sam is 12.", check: "in 6 years: 18 = 2 · 9" },
    { name: "Tickets", text: ["Adult tickets cost ", ["k", "$9"], ", child tickets ", ["k", "$5"], ". A family bought ", ["k", "2 adult tickets"], " and ", ["u", "some child tickets"], " for ", ["k", "$38"], "."],
      def: "the number of child tickets", eq: "2·9 + 5x = 38", simp: "5x + 18 = 38", abcd: [5, 18, 0, 38], bars: [[9, 9, { x: 5 }], [38]], ans: "They bought 4 child tickets.", check: "18 + 5·4 = 38" }
  ];
  let pi = 0, phases = [];
  const NAMES = { read: "Read", define: "Define x", eq: "Write the equation", simp: "Simplify", solve: "Solve", check: "Check" };
  function build(){
    const p = PB[pi]; phases = [{ kind: "read" }, { kind: "define" }, { kind: "eq", ps: parse(p.eq) }];
    if (p.simp) phases.push({ kind: "simp", ps: parse(p.simp) });
    solveBoth(...p.abcd).slice(1).forEach(s => phases.push({ kind: "solve", s }));
    phases.push({ kind: "check" });
  }
  build();
  const sel = k.select("Problem", PB.map((p, i) => [i, p.name]), 0, v => { pi = +v; build(); st.reset(); });
  const st = k.stepper(() => phases.length - 1, () => {}, { ms: 1600 });
  k.button("Next problem", () => { pi = (pi + 1) % PB.length; sel.set(pi); build(); st.reset(); }, "btn ghost");
  const sParts = s => eqParts(side(s.L.x, s.L.u, "c3", "c2", "c3"), "=", side(s.R.x, s.R.u, "c3", "c2", "c3"));
  const sol = p => { const [a, b, cc, dd] = p.abcd; return (dd - b) / (a - cc); };
  k.loop(() => {
    c.begin(); const { w, h } = c; const K = Math.min(st.k, phases.length - 1), ph = phases[K], p = PB[pi], xv = sol(p);
    // problem text, word-wrapped
    const fs = w < 500 ? 14 : 16, font = `${fs}px ${F.sans}`, lh = fs * 1.5, maxW = w - 36;
    const words = []; p.text.forEach(s => { const [t, cl] = Array.isArray(s) ? [s[1], s[0]] : [s, ""]; t.split(/(\s+)/).forEach(wd => { if (wd) words.push({ t: wd, c: cl }); }); });
    let x = 18, y = 28; const lineCol = cl => cl === "k" ? C.pink : cl === "u" ? (K >= 1 ? C.cyan : C.text) : C.muted;
    words.forEach(wd => { const ww = d.width(wd.t, font); if (/^\s+$/.test(wd.t)) { if (x > 18) x += ww; return; } if (x + ww > 18 + maxW) { x = 18; y += lh; }
      d.text(wd.t, x, y, { font: wd.c ? `600 ${fs}px ${F.sans}` : font, color: lineCol(wd.c) }); if (wd.c === "u" && K >= 1) d.line(x, y + 4, x + ww, y + 4, k.alpha(C.cyan, .6), 1.5); x += ww; });
    const textBottom = y + 16;
    // bar model
    const barTop = textBottom + 26, bh = Math.min(34, (h - textBottom) / 9);
    if (K >= 1) {
      const val = it => typeof it === "number" ? it : it.x * xv;
      const tot = p.bars[0].reduce((s, it) => s + val(it), 0), sc = (w - 60) / tot;
      p.bars.forEach((bar, bi) => { let bx = 30; const by = barTop + bi * (bh + 22);
        d.text(bi ? "right side" : "left side", 30, by - 5, { font: `11px ${F.ui}`, color: C.faint });
        bar.forEach(it => { const bw = val(it) * sc, isX = typeof it !== "number", cl = isX ? C.cyan : C.pink;
          d.rect(bx + 1, by, bw - 2, bh, k.alpha(cl, isX ? .3 : .22), cl, 1.5);
          const lbl = isX ? (K === phases.length - 1 ? mn(it.x * xv) : (it.x === 1 ? "x" : it.x + "x")) : String(it), f = `${isX && K < phases.length - 1 ? "italic " : ""}600 13px ${isX ? F.math : F.mono}`;
          if (d.width(lbl, f) + 6 < bw) d.text(lbl, bx + bw / 2, by + bh / 2 + 1, { font: f, color: cl, align: "center", base: "middle" });
          bx += bw; }); });
      d.text("same total length: the two sides are equal", w - 30, barTop + 2 * bh + 42, { font: `12px ${F.sans}`, color: C.faint, align: "right" });
    } else d.text("Read first: pink marks what is known, the question marks what is unknown.", w / 2, barTop + bh, { font: `13px ${F.sans}`, color: C.faint, align: "center" });
    // current step
    const sy = Math.max(barTop + 2 * bh + 90, h - 120), efs = Math.min(28, w / 16);
    d.text(`STEP ${K + 1} OF ${phases.length} · ${NAMES[ph.kind].toUpperCase()}`, w / 2, sy - efs - 8, { font: `600 12px ${F.ui}`, color: C.amber, align: "center" });
    const eqBox = ps => { const wd = drawParts(k, d, ps, w / 2, sy + efs * .35, efs, "center", w - 60); d.rr(w / 2 - wd / 2 - 14, sy - efs * .75, wd + 28, efs * 1.6, 6, null, C.amber, 1.5); };
    let foot = "";
    if (ph.kind === "read") drawParts(k, d, [{ t: "Known: pink.  Asked: ", c: "t" }, { t: "the question", c: "c2" }], w / 2, sy + 8, Math.min(20, efs * .8), "center", w - 40);
    else if (ph.kind === "define") { drawParts(k, d, [{ t: "Let ", c: "t" }, { t: "x", c: "c2", i: 1 }, { t: " = " + p.def, c: "t" }], w / 2, sy + 8, Math.min(20, efs * .8), "center", w - 40); }
    else if (ph.kind === "eq" || ph.kind === "simp") eqBox(ph.ps);
    else if (ph.kind === "solve") { eqBox(sParts(ph.s)); foot = ph.s.say; }
    else { drawParts(k, d, [{ t: "x", c: "c2", i: 1 }, { t: " = " + mn(xv), c: "c2" }], w / 2, sy + 4, efs, "center"); foot = "check: " + p.check + " ✓"; }
    if (foot) d.text(foot, w / 2, sy + efs + 22, { font: `13px ${F.sans}`, color: ph.kind === "check" ? C.green : C.amber, align: "center" });
    // readout
    const hist = phases.slice(1, K + 1).map(q => { const body = q.kind === "define" ? `let <i class="c2">x</i> = ${p.def}` : q.kind === "eq" || q.kind === "simp" ? M(partsHTML(q.ps)) : q.kind === "solve" ? M(partsHTML(sParts(q.s))) : `<i class="c2">x</i> = ${mn(xv)} ✓`;
      return `<div class="row">${body}<span class="lbl">${NAMES[q.kind]}${q.kind === "solve" ? ": " + q.s.say : ""}</span></div>`; }).join("");
    const tips = { read: "Find the numbers you know and the one thing being asked. Do not calculate yet.", define: "Name the unknown with a letter, with units. Write any other unknowns in terms of x.", eq: "Translate the sentence: the two sides describe the same quantity in two ways.", simp: "Distribute and combine like terms so each side is one x term and one number.", solve: "Undo operations on both sides until x stands alone.", check: "" };
    const done = ph.kind === "check";
    k.setRO(`<div><h2>${NAMES[ph.kind]}</h2><div class="ro-big" style="margin-top:8px">${K >= 2 ? M(partsHTML(ph.kind === "solve" ? sParts(ph.s) : (ph.ps || parse(p.simp || p.eq)))) : `<span class="m"><i class="c2">x</i> = ?</span>`}</div></div>
      <div class="ro-rows">${hist || `<div class="row"><span class="lbl">${p.name}: press Step to work through read, define, write, solve, check.</span></div>`}</div>
      <div class="landmark${done ? " hit" : ""}">${done ? `<div class="big">${p.ans}</div><div class="note">Check in the original words, not just the equation: ${p.check}. Answer with units.</div>` : `<div class="big">${NAMES[ph.kind]}</div><div class="note">${tips[ph.kind]}</div>`}</div>`);
  });
};

/* ---------- Pythagorean theorem ---------- */
L["pa-pythagorean"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const g = c.g;
  let mode = "hyp", a = 3, b = 4, hc = 13, la = 5, ea = 3, eb = 4;
  const rad = n => { for (let f = Math.floor(Math.sqrt(n)); f >= 1; f--) if (n % (f * f) === 0) return [f, n / (f * f)]; return [1, n]; };
  const radS = n => { const [o, i] = rad(n); return i === 1 ? String(o) : (o === 1 ? `√${i}` : `${o}√${i}`); };
  k.modes([["hyp", "Find the hypotenuse"], ["leg", "Find a leg"]], mode, m => { mode = m; controls(); });
  const box = document.createElement("div"); box.style.display = "contents"; k.ctl.appendChild(box);
  function controls(){ box.innerHTML = ""; const hold = k.ctl; k.ctl = box;
    if (mode === "hyp") { k.slider(`<span class="c2"><i>a</i></span>`, 1, 12, 1, a, v => a = v); k.slider(`<span class="c3"><i>b</i></span>`, 1, 12, 1, b, v => b = v); }
    else { k.slider(`<span class="c1"><i>c</i></span>`, 2, 15, 1, hc, v => hc = v); k.slider(`<span class="c2"><i>a</i></span>`, 1, 14, 1, la, v => la = v); }
    k.ctl = hold; }
  controls();
  k.button("Pythagorean triple", () => { const T = [[3, 4], [5, 12], [8, 6], [6, 8], [9, 12], [12, 5]]; const t = T[Math.floor(Math.random() * T.length)]; if (mode === "hyp") { a = t[0]; b = t[1]; } else { hc = Math.round(Math.hypot(t[0], t[1])); la = t[0]; } controls(); }, "btn ghost");
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    const A = mode === "hyp" ? a : la, C2 = mode === "hyp" ? a * a + b * b : hc * hc, B2 = mode === "hyp" ? b * b : hc * hc - la * la;
    if (mode === "leg" && B2 <= 0) {
      d.text(la === hc ? "a = c: the other leg would be 0" : "a leg cannot be longer than the hypotenuse", w / 2, h / 2, { font: `18px ${F.sans}`, color: C.pink, align: "center" });
      d.text(`b² = c² − a² = ${hc * hc} − ${la * la} = ${mn(B2)}`, w / 2, h / 2 + 30, { font: `16px ${F.math}`, color: C.muted, align: "center" });
      k.setRO(`<div><h2>Missing leg</h2><div class="ro-big" style="margin-top:8px"><span class="m"><i class="c3">b</i> = ?</span></div></div>
        <div class="ro-rows"><div class="row">${M(`<i class="c3">b</i><sup>2</sup> = <i class="c1">c</i><sup>2</sup> − <i class="c2">a</i><sup>2</sup> = ${hc * hc} − ${la * la} = ${mn(B2)}`)}</div></div>
        <div class="landmark hit"><div class="big">${M("no right triangle")}</div><div class="note">The hypotenuse is the longest side of a right triangle. With a ≥ c, b² would be ${B2 === 0 ? "0" : "negative"}, and no real length has that square.</div></div>`);
      return;
    }
    const Bv = Math.sqrt(B2), Av = A;
    ea = k.reduce ? Av : lerp(ea, Av, Math.min(1, dt * 8)); eb = k.reduce ? Bv : lerp(eb, Bv, Math.min(1, dt * 8));
    const s = Math.min((w - 40) / (ea + 2 * eb), (h - 60) / (2 * ea + eb));
    const ox = (w - (ea + 2 * eb) * s) / 2 + eb * s, oy = 50 + (ea + eb) * s + ((h - 60) - (2 * ea + eb) * s) / 2;
    const T = (x, y) => [ox + x * s, oy - y * s];
    const poly = (pts, fill, stroke) => { g.save(); g.fillStyle = fill; g.strokeStyle = stroke; g.lineWidth = 2; g.beginPath(); g.moveTo(...T(...pts[0])); pts.slice(1).forEach(q => g.lineTo(...T(...q))); g.closePath(); g.fill(); g.stroke(); g.restore(); };
    const grid = (pts, ux, uy, n1, n2, col) => { // unit grid inside square: origin pts[0], unit vectors ux, uy (math coords)
      g.save(); g.beginPath(); g.moveTo(...T(...pts[0])); pts.slice(1).forEach(q => g.lineTo(...T(...q))); g.closePath(); g.clip(); g.strokeStyle = k.alpha(col, .35); g.lineWidth = 1; g.beginPath();
      for (let i = 1; i < n1 + 1; i++) { const p0 = [pts[0][0] + ux[0] * i, pts[0][1] + ux[1] * i]; g.moveTo(...T(...p0)); g.lineTo(...T(p0[0] + uy[0] * n2, p0[1] + uy[1] * n2)); }
      for (let j = 1; j < n2 + 1; j++) { const p0 = [pts[0][0] + uy[0] * j, pts[0][1] + uy[1] * j]; g.moveTo(...T(...p0)); g.lineTo(...T(p0[0] + ux[0] * n1, p0[1] + ux[1] * n1)); }
      g.stroke(); g.restore(); };
    const cL = Math.hypot(ea, eb), nx = eb / cL, ny = ea / cL; // outward unit normal of hypotenuse
    const sqA = [[0, 0], [ea, 0], [ea, -ea], [0, -ea]], sqB = [[0, 0], [0, eb], [-eb, eb], [-eb, 0]];
    const sqC = [[ea, 0], [0, eb], [nx * cL, eb + ny * cL], [ea + nx * cL, ny * cL]];
    poly(sqA, k.alpha(C.cyan, .2), C.cyan); poly(sqB, k.alpha(C.pink, .2), C.pink); poly(sqC, k.alpha(C.amber, .18), C.amber);
    if (s > 5) { grid(sqA, [1, 0], [0, -1], Math.ceil(ea), Math.ceil(ea), C.cyan); grid(sqB, [0, 1], [-1, 0], Math.ceil(eb), Math.ceil(eb), C.pink);
      const ux = [-ea / cL, eb / cL]; grid(sqC, ux, [nx, ny], Math.ceil(cL), Math.ceil(cL), C.amber); }
    poly([[0, 0], [ea, 0], [0, eb]], k.alpha(C.text, .12), C.text);
    const rA = Math.min(12, s * .6); g.save(); g.strokeStyle = C.text; g.lineWidth = 1.3; g.beginPath(); g.moveTo(...T(rA / s, 0)); g.lineTo(...T(rA / s, rA / s)); g.lineTo(...T(0, rA / s)); g.stroke(); g.restore();
    const lbl = (txt, x, y, col, size) => { if (size >= 10) d.text(txt, ...T(x, y), { font: `600 ${size}px ${F.math}`, color: col, align: "center", base: "middle" }); };
    const cN = C2, cStr = radS(C2);
    lbl(`a² = ${A * A}`, ea / 2, -ea / 2, C.cyan, Math.min(18, ea * s / 4));
    lbl(`b² = ${B2}`, -eb / 2, eb / 2, C.pink, Math.min(18, eb * s / 4));
    lbl(`c² = ${cN}`, (ea + eb) / 2 + nx * cL / 2 - 0, (ea + eb) / 2 + ny * cL / 2 - (ea - eb) / 2 * 0, C.amber, Math.min(20, cL * s / 4.5));
    const midC = T(ea / 2 + nx * .2, eb / 2 + ny * .2);
    void midC;
    // side labels inside triangle area / next to legs
    d.text("a", ...T(ea / 2, 0).map((v, i) => v + (i ? -8 : 0)), { font: `italic 15px ${F.math}`, color: C.cyan, align: "center" });
    d.text("b", T(0, eb / 2)[0] + 8, T(0, eb / 2)[1], { font: `italic 15px ${F.math}`, color: C.pink, base: "middle" });
    const hm = T(ea / 2, eb / 2); d.text("c", hm[0] - nx * 12, hm[1] + ny * 12, { font: `italic 15px ${F.math}`, color: C.amber, align: "center", base: "middle" });
    // readout
    const triple = Number.isInteger(Math.sqrt(C2)) && Number.isInteger(Math.sqrt(B2));
    if (mode === "hyp") {
      k.setRO(`<div><h2>Hypotenuse</h2><div class="ro-big" style="margin-top:8px">${M(`<i class="c1">c</i> = √${C2}${cStr !== "√" + C2 ? ` = <span class="c1">${cStr}</span>` : ""}`)}${Number.isInteger(Math.sqrt(C2)) ? "" : ` <span style="font-size:.6em;color:var(--muted)">≈ ${k.fmt(Math.sqrt(C2), 3)}</span>`}</div></div>
        <div class="ro-rows"><div class="row">${M(`<i class="c2">a</i><sup>2</sup> + <i class="c3">b</i><sup>2</sup> = <i class="c1">c</i><sup>2</sup>`)}<span class="lbl">the two small squares together have exactly the area of the big one</span></div>
        <div class="row">${M(`<span class="c2">${a * a}</span> + <span class="c3">${b * b}</span> = <span class="c1">${C2}</span>`)}<span class="lbl">${a}² + ${b}²: count the unit tiles</span></div>
        <div class="row">${M(`<i class="c1">c</i> = √(<i class="c2">a</i><sup>2</sup> + <i class="c3">b</i><sup>2</sup>)`)}<span class="lbl">take the square root to get a length back from an area</span></div></div>
        <div class="landmark${triple ? " hit" : ""}">${triple ? `<div class="big">${M(`${a}, ${b}, ${Math.sqrt(C2)}: a Pythagorean triple`)}</div><div class="note">All three sides are whole numbers because ${C2} is a perfect square.</div>` : `<div class="big">${M(`<i>c</i> = ${cStr} is irrational`)}</div><div class="note">${C2} is not a perfect square, so c is not a whole number or a fraction. ${cStr.includes("√") && cStr[0] !== "√" ? `Simplified: ${C2} = ${rad(C2)[0] ** 2} × ${rad(C2)[1]}.` : ""}</div>`}</div>
        <p class="narr">Try a = 3, b = 4, then a = 1, b = 1: the diagonal of a unit square is √2.</p>`);
    } else {
      k.setRO(`<div><h2>Missing leg</h2><div class="ro-big" style="margin-top:8px">${M(`<i class="c3">b</i> = √${B2}${radS(B2) !== "√" + B2 ? ` = <span class="c3">${radS(B2)}</span>` : ""}`)}${Number.isInteger(Bv) ? "" : ` <span style="font-size:.6em;color:var(--muted)">≈ ${k.fmt(Bv, 3)}</span>`}</div></div>
        <div class="ro-rows"><div class="row">${M(`<i class="c3">b</i><sup>2</sup> = <i class="c1">c</i><sup>2</sup> − <i class="c2">a</i><sup>2</sup>`)}<span class="lbl">rearranged: the big square minus the known small square</span></div>
        <div class="row">${M(`<span class="c3">${B2}</span> = <span class="c1">${hc * hc}</span> − <span class="c2">${la * la}</span>`)}<span class="lbl">${hc}² − ${la}²</span></div></div>
        <div class="landmark${triple ? " hit" : ""}">${triple ? `<div class="big">${M(`${la}, ${Math.sqrt(B2)}, ${hc}: a Pythagorean triple`)}</div><div class="note">Subtracting areas gave a perfect square.</div>` : `<div class="big">${M(`<i>b</i> ≈ ${k.fmt(Bv, 3)}`)}</div><div class="note">${B2} is not a perfect square, so b is irrational. Subtract the squares first, then take the root: b ≠ c − a.</div>`}</div>`);
    }
  });
};

/* ---------- graphing linear equations ---------- */
L["pa-linear-graphs"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mi = KL.findIndex(q => q.n === 1 && q.d === 2), b = 1, tri = true, drag = false, P = null, pts = true;
  k.slider(`<span class="c3"><i>m</i></span>`, 0, KL.length - 1, 1, mi, v => mi = v, v => qs(KL[v]));
  const sb = k.slider(`<span class="c2"><i>b</i></span>`, -6, 6, 1, b, v => b = v);
  k.check("Slope triangle", true, v => tri = v);
  k.check("Table points", true, v => pts = v);
  k.hint("Drag the cyan point up or down");
  c.cv.addEventListener("pointerdown", e => { if (!P) return; const q = c.xy(e); if (Math.hypot(q.x - P.X(0), q.y - P.Y(b)) < 24) { drag = true; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (!drag || !P) return; const q = c.xy(e); b = Math.max(-6, Math.min(6, Math.round(P.inv(q.x, q.y).y))); sb.set(b); });
  c.cv.addEventListener("pointerup", () => drag = false);
  k.loop(() => {
    c.begin(); const m = KL[mi], mv = qv(m), bq = Q(b);
    P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 20, r: 14, t: 14, b: 22 }, xlabel: "x", ylabel: "y" });
    P.grid(1); P.axes();
    P.fn(x => mv * x + b, C.amber, 3);
    if (tri && m.n !== 0) { const run = m.d, rise = m.n; P.line(0, b, run, b, k.alpha(C.text, .7), 2, [5, 4]); P.line(run, b, run, b + rise, C.pink, 3);
      d.text(`run ${run}`, P.X(run / 2), P.Y(b) + (rise > 0 ? 16 : -8), { font: `600 12px ${F.mono}`, color: C.muted, align: "center" });
      d.text(`rise ${mn(rise)}`, P.X(run) + 8, P.Y(b + rise / 2), { font: `600 12px ${F.mono}`, color: C.pink, base: "middle" }); }
    const tbl = [-2, -1, 0, 1, 2].map(x => [x, qa(qm(m, Q(x)), bq)]);
    if (pts) tbl.forEach(([x, y]) => { if (Math.abs(qv(y)) <= P.ymax) P.point(x, qv(y), C.text, 3.5); });
    P.point(0, b, C.cyan, drag ? 9 : 7);
    d.text(`(0, ${mn(b)})`, P.X(0) - 10, P.Y(b) - 10, { font: `600 13px ${F.mono}`, color: C.cyan, align: "right" });
    let xi = null;
    if (m.n !== 0) { xi = qdv(Q(-b), m); const xv = qv(xi); if (Math.abs(xv) <= P.xmax) { P.point(xv, 0, C.violet, 7); d.text(`(${qs(xi)}, 0)`, P.X(xv) + 8, P.Y(0) + (mv > 0 ? 18 : -10), { font: `600 13px ${F.mono}`, color: C.violet }); } }
    else if (b === 0) { P.line(P.xmin, 0, P.xmax, 0, C.violet, 3); }
    const eq = eqParts([{ t: "y", c: "t", i: 1 }], "=", side(m, bq, "c3", "t", "c2"));
    let lm, hit = true;
    if (m.n === 0 && b === 0) lm = `<div class="big">${M("<i>y</i> = 0: the x-axis itself")}</div><div class="note">Every point of the line is on the x-axis, so every x is an x-intercept.</div>`;
    else if (m.n === 0) lm = `<div class="big">${M(`slope 0: horizontal line <i>y</i> = ${mn(b)}`)}</div><div class="note">The line never meets the x-axis, so there is no x-intercept.</div>`;
    else if (b === 0) lm = `<div class="big">${M("through the origin")}</div><div class="note">With b = 0 this is the proportional relationship y = ${qs(m)}x. Both intercepts are (0, 0).</div>`;
    else { hit = false; lm = `<div class="big">${M(`start at (0, <span class="c2">${mn(b)}</span>), then ${m.d} right, ${Math.abs(m.n)} ${m.n > 0 ? "up" : "down"}`)}</div><div class="note">Two points fix a line. The y-intercept gives one, the slope gives the next.</div>`; }
    k.setRO(`<div><h2>Slope-intercept form</h2><div class="ro-big" style="margin-top:8px">${M(partsHTML(eq))}</div></div>
      <div class="ro-rows"><div class="row">${M(`slope <i class="c3">m</i>`)} = <span class="v c3">${qs(m)}</span><span class="lbl">${m.n === 0 ? "no rise: flat" : `rise ${mn(m.n)} for every run ${m.d}`}</span></div>
      <div class="row">${M(`y-intercept`)} <span class="v c2">(0, ${mn(b)})</span><span class="lbl">set x = 0: y = b</span></div>
      <div class="row">${M(`x-intercept`)} <span class="v c4">${xi ? `(${qs(xi)}, 0)` + dec(k, xi, 2) : m.n === 0 && b === 0 ? "every point" : "none"}</span><span class="lbl">${m.n !== 0 ? `set y = 0: ${qs(m)}x + ${mn(b)} = 0, so x = −b ÷ m` : "a horizontal line off the axis never crosses it"}</span></div></div>
      <table style="width:100%;border-collapse:collapse;font:13px var(--mono);text-align:center"><tr><td style="padding:3px;border-bottom:1px solid var(--line);color:var(--muted)"><i>x</i></td>${tbl.map(r => `<td style="padding:3px;border-bottom:1px solid var(--line)">${mn(r[0])}</td>`).join("")}</tr>
      <tr><td style="padding:3px;color:var(--muted)"><i>y</i></td>${tbl.map(r => `<td style="padding:3px" class="${r[0] === 0 ? "c2" : ""}">${qs(r[1])}</td>`).join("")}</tr></table>
      <div class="landmark${hit ? " hit" : ""}">${lm}</div><p class="narr">Each step of 1 in x changes y by m. Watch the table: the y values go up by ${qs(m)} each time.</p>`);
  });
};
})();
