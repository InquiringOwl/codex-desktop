/* ============ Math lab kit (Algebra II onward; usable by any math/physics lab) ============
   Two layers, so labs only write what is unique to their topic:
   1. window.MathRules (MR): pure, DOM-free rules: exact rationals, polynomials (division, synthetic division,
      rational roots, real/complex roots), exact complex numbers, radicals and exact quadratic roots, rational-function
      features (holes, asymptotes, zeros), transformations, logs, sequences and series, binomial coefficients,
      conic sections from general form, numeric zeros/intersections, nice ticks, collision-free label placement,
      HTML/text formatters and the reveal guard for step-by-step solutions.
      Tested in tests/math.test.js (node tools/labtest.js math). Put any new rule a lab needs HERE, with a test.
   2. window.MathKit.attach(k): drawing helpers on top of the lab kit `k` (web/src/labkit.js): k.plane (k.plot plus
      domain breaks, asymptotes, holes, implicit curves, parametric curves, shading, collision-free labels),
      k.cplane (complex plane), k.drag (draggable points), k.params (sliders from a config), k.smooth (eased windows),
      k.stepsPanel (step-by-step solution that never shows a step before it is reached), k.readout (standard readout).
   API summary and lab archetypes are in web/WRITER-PACK-MATH.md. */
(function(){
const W = window;
const MI = "−";

/* ---------------- 1. MathRules ---------------- */
const gcdI = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const lcmI = (a, b) => (a && b ? Math.abs(a * b) / gcdI(a, b) : 0);

// Exact rationals. Q(3), Q(3, 4), Q(0.75) (decimals → nearest fraction with denominator ≤ 10⁶), Q({n, d}).
function Q(n, d = 1){
  if (n && typeof n === "object") return n.isQ ? n : Q(n.n, n.d);
  if (!Number.isInteger(n) || !Number.isInteger(d)) { if (d !== 1) return Q.div(Q(n), Q(d)); return fromDec(n); }
  if (d === 0) throw new Error("MathRules.Q: zero denominator");
  if (d < 0) { n = -n; d = -d; }
  const g = gcdI(n, d) || 1;
  return Object.freeze({ isQ: true, n: n / g + 0, d: d / g, toString(){ return this.d === 1 ? String(this.n) : this.n + "/" + this.d; } });
}
function fromDec(x){
  if (!isFinite(x)) throw new Error("MathRules.Q: not finite");
  let h0 = 0, h1 = 1, k0 = 1, k1 = 0, v = Math.abs(x);
  for (let i = 0; i < 40; i++) { const a = Math.floor(v); [h0, h1] = [h1, a * h1 + h0]; [k0, k1] = [k1, a * k1 + k0]; if (k1 > 1e6) { h1 = h0; k1 = k0; break; } if (Math.abs(h1 / k1 - Math.abs(x)) < 1e-12) break; v = 1 / (v - a); if (!isFinite(v)) break; }
  return Q(x < 0 ? -h1 : h1, k1);
}
Q.add = (a, b) => { a = Q(a); b = Q(b); return Q(a.n * b.d + b.n * a.d, a.d * b.d); };
Q.sub = (a, b) => { a = Q(a); b = Q(b); return Q(a.n * b.d - b.n * a.d, a.d * b.d); };
Q.mul = (a, b) => { a = Q(a); b = Q(b); return Q(a.n * b.n, a.d * b.d); };
Q.div = (a, b) => { a = Q(a); b = Q(b); if (b.n === 0) throw new Error("MathRules.Q.div: division by zero"); return Q(a.n * b.d, a.d * b.n); };
Q.neg = a => { a = Q(a); return Q(-a.n, a.d); };
Q.inv = a => Q.div(1, a);
Q.pow = (a, e) => { a = Q(a); if (e < 0) return Q.pow(Q.inv(a), -e); let r = Q(1); for (let i = 0; i < e; i++) r = Q.mul(r, a); return r; };
Q.eq = (a, b) => { a = Q(a); b = Q(b); return a.n === b.n && a.d === b.d; };
Q.cmp = (a, b) => { a = Q(a); b = Q(b); return Math.sign(a.n * b.d - b.n * a.d); };
Q.lt = (a, b) => Q.cmp(a, b) < 0;
Q.val = a => { a = Q(a); return a.n / a.d; };
Q.isInt = a => Q(a).d === 1;
Q.zero = a => Q(a).n === 0;
Q.abs = a => { a = Q(a); return Q(Math.abs(a.n), a.d); };

/* Polynomials: arrays of Q, lowest degree first. Poly([1, 0, -2]) = 1 − 2x². */
const Poly = cs => trim(cs.map(c => Q(c)));
function trim(p){ p = p.slice(); while (p.length > 1 && p[p.length - 1].n === 0) p.pop(); return p.length ? p : [Q(0)]; }
Poly.deg = p => (p.length === 1 && p[0].n === 0 ? -Infinity : p.length - 1);
Poly.lead = p => p[p.length - 1];
Poly.isZero = p => p.length === 1 && p[0].n === 0;
Poly.add = (a, b) => { const r = []; for (let i = 0; i < Math.max(a.length, b.length); i++) r.push(Q.add(a[i] || 0, b[i] || 0)); return trim(r); };
Poly.sub = (a, b) => { const r = []; for (let i = 0; i < Math.max(a.length, b.length); i++) r.push(Q.sub(a[i] || 0, b[i] || 0)); return trim(r); };
Poly.scale = (a, k) => trim(a.map(c => Q.mul(c, k)));
Poly.mul = (a, b) => { const r = Array.from({ length: a.length + b.length - 1 }, () => Q(0)); a.forEach((x, i) => b.forEach((y, j) => { r[i + j] = Q.add(r[i + j], Q.mul(x, y)); })); return trim(r); };
Poly.pow = (a, e) => { let r = Poly([1]); for (let i = 0; i < e; i++) r = Poly.mul(r, a); return r; };
Poly.eval = (p, x) => p.reduceRight((acc, c) => Q.add(Q.mul(acc, x), c), Q(0));
Poly.evalN = (p, x) => p.reduceRight((acc, c) => acc * x + c.n / c.d, 0);
Poly.fn = p => x => Poly.evalN(p, x);
Poly.deriv = p => trim(p.slice(1).map((c, i) => Q.mul(c, i + 1)).concat(p.length === 1 ? [Q(0)] : []));
Poly.fromRoots = (roots, lead = 1) => roots.reduce((p, r) => Poly.mul(p, [Q.neg(r), Q(1)]), Poly([lead]));
Poly.compose = (f, g) => f.reduceRight((acc, c) => Poly.add(Poly.mul(acc, g), [c]), Poly([0]));
Poly.eq = (a, b) => a.length === b.length && a.every((c, i) => Q.eq(c, b[i]));
// Long division: a = b·q + r with deg r < deg b.
Poly.divmod = (a, b) => {
  if (Poly.isZero(b)) throw new Error("MathRules.Poly.divmod: division by the zero polynomial");
  let r = a.slice(); const q = Array.from({ length: Math.max(1, a.length - b.length + 1) }, () => Q(0)), steps = [];
  while (Poly.deg(r) >= Poly.deg(b) && !Poly.isZero(r)) {
    const sh = r.length - b.length, c = Q.div(Poly.lead(r), Poly.lead(b)); q[sh] = c;
    const sub = Array(sh).fill(Q(0)).concat(b.map(x => Q.mul(x, c)));
    steps.push({ term: { c, e: sh }, sub: trim(sub) });
    r = Poly.sub(r, sub);
  }
  return { q: trim(q), r: trim(r), steps };
};
// Synthetic division by (x − r): top = coefficients high→low, mid = carried products, bottom = results; rem = p(r).
Poly.synth = (p, r) => {
  r = Q(r); const top = p.slice().reverse(), mid = [null], bottom = [top[0]];
  for (let i = 1; i < top.length; i++) { const m = Q.mul(bottom[i - 1], r); mid.push(m); bottom.push(Q.add(top[i], m)); }
  const rem = bottom[bottom.length - 1];
  return { top, mid, bottom, rem, q: trim(bottom.slice(0, -1).reverse().length ? bottom.slice(0, -1).reverse() : [Q(0)]) };
};
Poly.gcd = (a, b) => { while (!Poly.isZero(b)) [a, b] = [b, Poly.divmod(a, b).r]; return Poly.isZero(a) ? a : Poly.scale(a, Q.inv(Poly.lead(a))); };
// Integer multiple with coprime integer coefficients (clears denominators).
Poly.primitive = p => { const L = p.reduce((m, c) => lcmI(m, c.d), 1), ints = p.map(c => c.n * (L / c.d)), g = ints.reduce((m, x) => gcdI(m, x), 0) || 1; return ints.map(x => x / g); };
const divisors = n => { n = Math.abs(n); const r = []; for (let i = 1; i * i <= n; i++) if (n % i === 0) { r.push(i); if (i * i !== n) r.push(n / i); } return r.sort((a, b) => a - b); };
// Rational Root Theorem candidates ±p/q (p | constant, q | leading), sorted, after removing x = 0 roots.
Poly.ratCandidates = p => {
  let ints = Poly.primitive(p); while (ints.length > 1 && ints[0] === 0) ints = ints.slice(1);
  if (ints.length < 2) return [];
  const ps = divisors(ints[0]), qs = divisors(ints[ints.length - 1]), seen = new Map();
  for (const a of ps) for (const b of qs) for (const s of [1, -1]) { const v = Q(s * a, b); seen.set(v.toString(), v); }
  return [...seen.values()].sort(Q.cmp);
};
// Rational roots with multiplicity, and the deflated rest: p = lead·Π(x − r)^m · rest.
Poly.ratRoots = p => {
  let rest = p.slice(); const roots = [];
  let m0 = 0; while (rest.length > 1 && rest[0].n === 0) { rest = rest.slice(1); m0++; }
  if (m0) roots.push({ r: Q(0), m: m0 });
  for (const c of Poly.ratCandidates(rest)) { let m = 0; while (Poly.deg(rest) >= 1 && Poly.eval(rest, c).n === 0) { rest = Poly.synth(rest, c).q; m++; } if (m) roots.push({ r: c, m }); }
  roots.sort((a, b) => Q.cmp(a.r, b.r));
  return { roots, rest };
};
// All complex roots, numerically (Durand–Kerner). Returns [{re, im}], real ones first by value.
Poly.roots = p => {
  const n = Poly.deg(p); if (n < 1) return [];
  const a = p.map(c => c.n / c.d), L = a[n], c = a.map(x => x / L);
  let z = Array.from({ length: n }, (_, k) => cpow({ re: .4, im: .9 }, k));
  const ev = x => { let r = { re: 1, im: 0 }; for (let i = n - 1; i >= 0; i--) r = cadd(cmul(r, x), { re: c[i], im: 0 }); return r; };
  for (let it = 0; it < 500; it++) { let delta = 0; z = z.map((zi, i) => { let den = { re: 1, im: 0 }; z.forEach((zj, j) => { if (j !== i) den = cmul(den, csub(zi, zj)); }); const step = cdiv(ev(zi), den); delta = Math.max(delta, Math.hypot(step.re, step.im)); return csub(zi, step); }); if (delta < 1e-14) break; }
  z = z.map(w => ({ re: Math.abs(w.re) < 1e-10 ? 0 : w.re, im: Math.abs(w.im) < 1e-8 ? 0 : w.im }));
  return z.sort((u, v) => (u.im !== 0) - (v.im !== 0) || u.re - v.re || u.im - v.im);
};
// Real roots with multiplicity: exact where rational ({x, q: Q, m}), numeric otherwise ({x, q: null, m}). Sorted by x.
Poly.realRoots = p => {
  if (Poly.deg(p) < 1) return [];
  const { roots, rest } = Poly.ratRoots(p), out = roots.map(o => ({ x: Q.val(o.r), q: o.r, m: o.m }));
  if (Poly.deg(rest) >= 1) {
    const nr = Poly.roots(rest).filter(z => z.im === 0).map(z => z.re).sort((a, b) => a - b);
    for (const x of nr) { const last = out.find(o => o.q === null && Math.abs(o.x - x) < 1e-6); if (last) last.m++; else out.push({ x: polish(rest, x), q: null, m: 1 }); }
  }
  return out.sort((a, b) => a.x - b.x);
};
function polish(p, x){ const f = Poly.fn(p), d = Poly.fn(Poly.deriv(p)); for (let i = 0; i < 30; i++) { const dv = d(x); if (!dv) break; const nx = x - f(x) / dv; if (!isFinite(nx) || Math.abs(nx - x) < 1e-15) break; x = nx; } return x; }
// End behaviour: signs of p(x) as x → −∞ and x → +∞.
Poly.ends = p => { const n = Poly.deg(p), s = Math.sign(Q.val(Poly.lead(p))); return { left: n % 2 === 0 ? s : -s, right: s }; };
Poly.turningMax = p => Math.max(0, Poly.deg(p) - 1);

/* complex numbers, numeric (internal for root finding) */
const cadd = (a, b) => ({ re: a.re + b.re, im: a.im + b.im }), csub = (a, b) => ({ re: a.re - b.re, im: a.im - b.im });
const cmul = (a, b) => ({ re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re });
const cdiv = (a, b) => { const d = b.re * b.re + b.im * b.im; return { re: (a.re * b.re + a.im * b.im) / d, im: (a.im * b.re - a.re * b.im) / d }; };
const cpow = (a, k) => { let r = { re: 1, im: 0 }; for (let i = 0; i < k; i++) r = cmul(r, a); return r; };

/* Exact complex numbers a + bi with rational parts. Z(3, -4), Z(Q(1,2), 2). */
function Z(re, im = 0){ if (re && re.isZ) return re; return Object.freeze({ isZ: true, re: Q(re), im: Q(im) }); }
Z.add = (a, b) => { a = Z(a); b = Z(b); return Z(Q.add(a.re, b.re), Q.add(a.im, b.im)); };
Z.sub = (a, b) => { a = Z(a); b = Z(b); return Z(Q.sub(a.re, b.re), Q.sub(a.im, b.im)); };
Z.mul = (a, b) => { a = Z(a); b = Z(b); return Z(Q.sub(Q.mul(a.re, b.re), Q.mul(a.im, b.im)), Q.add(Q.mul(a.re, b.im), Q.mul(a.im, b.re))); };
Z.conj = a => { a = Z(a); return Z(a.re, Q.neg(a.im)); };
Z.neg = a => { a = Z(a); return Z(Q.neg(a.re), Q.neg(a.im)); };
Z.norm = a => { a = Z(a); return Q.add(Q.mul(a.re, a.re), Q.mul(a.im, a.im)); };   // |a|², exact
Z.div = (a, b) => { const n = Z.norm(b); if (n.n === 0) throw new Error("MathRules.Z.div: division by zero"); const t = Z.mul(a, Z.conj(b)); return Z(Q.div(t.re, n), Q.div(t.im, n)); };
Z.pow = (a, e) => { if (e < 0) return Z.pow(Z.div(1, a), -e); let r = Z(1); for (let i = 0; i < e; i++) r = Z.mul(r, a); return r; };
Z.ipow = e => [Z(1), Z(0, 1), Z(-1), Z(0, -1)][((e % 4) + 4) % 4];
Z.eq = (a, b) => { a = Z(a); b = Z(b); return Q.eq(a.re, b.re) && Q.eq(a.im, b.im); };
Z.abs = a => Math.sqrt(Q.val(Z.norm(a)));
Z.arg = a => { a = Z(a); return Math.atan2(Q.val(a.im), Q.val(a.re)); };
Z.val = a => { a = Z(a); return { re: Q.val(a.re), im: Q.val(a.im) }; };

/* Radicals and exact quadratic roots */
// √n = s√t with t square-free (n ≥ 0 integer).  sqrtParts(72) = [6, 2]
function sqrtParts(n){ if (n < 0) throw new Error("MathRules.sqrtParts: negative"); let s = 1, t = n; for (let f = 2; f * f <= t; f++) while (t % (f * f) === 0) { t /= f * f; s *= f; } return [s, t]; }
// Roots of a x² + b x + c = 0 (rational a ≠ 0, b, c): x = p ± s√t, times i when imag.
// kind: "two rational" | "double" | "two irrational" | "complex"
function quadRoots(a, b, c){
  a = Q(a); b = Q(b); c = Q(c); if (a.n === 0) throw new Error("MathRules.quadRoots: a = 0");
  const D = Q.sub(Q.mul(b, b), Q.mul(4, Q.mul(a, c))), p = Q.div(Q.neg(b), Q.mul(2, a));
  const [s0, t] = sqrtParts(Math.abs(D.n) * D.d), s = Q.abs(Q.div(s0, Q.mul(D.d, Q.mul(2, a))));
  const imag = D.n < 0, kind = D.n === 0 ? "double" : imag ? "complex" : t === 1 ? "two rational" : "two irrational";
  const sv = Q.val(s) * Math.sqrt(t), pv = Q.val(p);
  const values = D.n === 0 ? [{ re: pv, im: 0 }] : imag ? [{ re: pv, im: -sv }, { re: pv, im: sv }] : [{ re: pv - sv, im: 0 }, { re: pv + sv, im: 0 }];
  const exact = kind === "two rational" ? [Q.sub(p, s), Q.add(p, s)] : kind === "double" ? [p] : null;
  return { D, kind, p, s: D.n === 0 ? Q(0) : s, t: D.n === 0 ? 1 : t, imag, values, exact };
}

/* Rational functions N(x)/D(x): holes, vertical/horizontal/slant asymptotes, zeros, intercept, domain. */
function rational(num, den){
  num = Poly(num); den = Poly(den);
  const g = Poly.gcd(num, den), n1 = Poly.divmod(num, g).q, d1 = Poly.divmod(den, g).q;
  const holes = Poly.deg(g) >= 1 ? Poly.realRoots(g).filter(r => Math.abs(Poly.evalN(d1, r.x)) > 1e-12).map(r => ({ x: r.x, q: r.q, y: Poly.evalN(n1, r.x) / Poly.evalN(d1, r.x), yq: r.q ? Q.div(Poly.eval(n1, r.q), Poly.eval(d1, r.q)) : null })) : [];
  const vas = Poly.realRoots(d1), zeros = Poly.realRoots(n1).filter(z => !holes.some(h => Math.abs(h.x - z.x) < 1e-12));
  const excluded = Poly.realRoots(den).map(r => ({ x: r.x, q: r.q }));
  const zeroIsOut = excluded.some(e => Math.abs(e.x) < 1e-12);
  const yint = zeroIsOut ? null : Q.div(Poly.eval(n1, 0), Poly.eval(d1, 0));
  const dn = Poly.deg(n1), dd = Poly.deg(d1); let asym;
  if (Poly.isZero(n1)) asym = { type: "horizontal", y: Q(0) };
  else if (dn < dd) asym = { type: "horizontal", y: Q(0) };
  else if (dn === dd) asym = { type: "horizontal", y: Q.div(Poly.lead(n1), Poly.lead(d1)) };
  else asym = { type: dn === dd + 1 ? "slant" : "polynomial", poly: Poly.divmod(n1, d1).q };
  // behaviour beside each vertical asymptote: sign of f just left/right
  const f = x => Poly.evalN(n1, x) / Poly.evalN(d1, x);
  vas.forEach(v => { const e = 1e-6 * Math.max(1, Math.abs(v.x)); v.left = Math.sign(f(v.x - e)); v.right = Math.sign(f(v.x + e)); });
  return { num, den, reduced: { num: n1, den: d1 }, common: g, holes, vas, zeros, excluded, yint, asym, f: x => (excluded.some(e => Math.abs(e.x - x) < 1e-12) ? NaN : f(x)) };
}

/* Transformations g(x) = a·f(b(x − h)) + k */
const transform = (f, t = {}) => { const { a = 1, b = 1, h = 0, k = 0 } = t; return x => a * f(b * (x - h)) + k; };
const transformPoint = ([x, y], t = {}) => { const { a = 1, b = 1, h = 0, k = 0 } = t; return [x / b + h, a * y + k]; };
const compose = (f, g) => x => f(g(x));
// Numeric inverse of a monotone f on [lo, hi]: returns x with f(x) = y, or NaN if y is outside f's range there.
function invert(f, y, lo, hi){ let a = lo, b = hi, fa = f(a) - y, fb = f(b) - y; if (fa === 0) return a; if (fb === 0) return b; if (fa * fb > 0) return NaN; for (let i = 0; i < 80; i++) { const m = (a + b) / 2, fm = f(m) - y; if (fm === 0) return m; if (fa * fm < 0) { b = m; fb = fm; } else { a = m; fa = fm; } } return (a + b) / 2; }
// One-to-one on [lo, hi] (sampled): no two samples share a value.
function isOneToOne(f, lo, hi, n = 400){ let s = 0; for (let i = 0; i <= n; i++) { const x0 = lo + (hi - lo) * i / n, x1 = lo + (hi - lo) * (i + 1) / n; const d = f(x1) - f(x0); if (i < n && isFinite(d) && Math.abs(d) > 1e-12) { const sg = Math.sign(d); if (s && sg !== s) return false; s = sg; } } return true; }

/* Exponentials and logs */
const logb = (b, x) => Math.log(x) / Math.log(b);
// Exact log when b^q = x for a rational q = m/n with n ≤ 12: logExact(8, 4) = 2/3, logExact(2, 1/8) = −3; else null.
function logExact(b, x){ b = Q(b); x = Q(x); if (b.n <= 0 || x.n <= 0 || Q.eq(b, 1)) return null; for (let n = 1; n <= 12; n++) { const m = Math.round(n * logb(Q.val(b), Q.val(x))); if (Math.abs(m) > 60) continue; try { if (Q.eq(Q.pow(b, m), Q.pow(x, n))) return Q(m, n); } catch (e) {} } return null; }
// Compound interest / continuous growth
const compound = (P, r, n, t) => P * Math.pow(1 + r / n, n * t), continuous = (P, r, t) => P * Math.exp(r * t);

/* Sequences and series (exact when given rationals) */
const arith = (a1, d) => ({ term: n => Q.add(a1, Q.mul(n - 1, d)), sum: n => Q.mul(Q(n, 2), Q.add(Q.mul(2, a1), Q.mul(n - 1, d))) });
const geom = (a1, r) => ({ term: n => Q.mul(a1, Q.pow(r, n - 1)), sum: n => (Q.eq(r, 1) ? Q.mul(a1, n) : Q.div(Q.mul(a1, Q.sub(1, Q.pow(r, n))), Q.sub(1, r))), sumInf: () => (Q.lt(Q.abs(r), 1) ? Q.div(a1, Q.sub(1, r)) : null) });
const sigma = (f, lo, hi) => { let s = Q(0); for (let i = lo; i <= hi; i++) s = Q.add(s, f(i)); return s; };

/* Binomial theorem */
function nCr(n, r){ if (r < 0 || r > n) return 0; r = Math.min(r, n - r); let v = 1; for (let i = 1; i <= r; i++) v = v * (n - r + i) / i; return Math.round(v); }
const pascalRow = n => Array.from({ length: n + 1 }, (_, r) => nCr(n, r));
// (a·x + b)^n as a polynomial (lowest degree first); term k of (A + B)^n is C(n,k) A^(n−k) B^k.
const binomialPoly = (a, b, n) => Poly.pow(Poly([b, a]), n);
const binomialTerm = (A, B, n, k) => Q.mul(nCr(n, k), Q.mul(Q.pow(A, n - k), Q.pow(B, k)));

/* Conic sections from A x² + C y² + D x + E y + F = 0 (no xy term). Exact centre/vertex and squared lengths. */
function conic({ A = 0, C = 0, D = 0, E = 0, F = 0 }){
  A = Q(A); C = Q(C); D = Q(D); E = Q(E); F = Q(F);
  const z = Q.zero, out = { A, C, D, E, F };
  if (z(A) && z(C)) return Object.assign(out, { type: "line" });
  if (z(A) || z(C)) {               // parabola
    const vertical = z(C);          // x² term → opens up/down
    const [Sq, Lin, Oth] = vertical ? [A, D, E] : [C, E, D];
    if (z(Oth)) return Object.assign(out, { type: "degenerate" });
    const h = Q.div(Q.neg(Lin), Q.mul(2, Sq)), k = Q.div(Q.sub(Q.div(Q.mul(Lin, Lin), Q.mul(4, Sq)), F), Oth);
    const p = Q.div(Q.neg(Oth), Q.mul(4, Sq));   // (x − h)² = 4p(y − k)  or  (y − k)² = 4p(x − h)
    const [vx, vy] = vertical ? [h, k] : [k, h], pv = Q.val(p);
    return Object.assign(out, { type: "parabola", axis: vertical ? "vertical" : "horizontal", h: vertical ? h : k, k: vertical ? k : h, p, e: 1,
      vertex: [Q.val(vx), Q.val(vy)], focus: vertical ? [Q.val(vx), Q.val(vy) + pv] : [Q.val(vx) + pv, Q.val(vy)], directrix: vertical ? { y: Q.val(vy) - pv } : { x: Q.val(vx) - pv } });
  }
  const h = Q.div(Q.neg(D), Q.mul(2, A)), k = Q.div(Q.neg(E), Q.mul(2, C));
  const R = Q.sub(Q.add(Q.mul(A, Q.mul(h, h)), Q.mul(C, Q.mul(k, k))), F);
  Object.assign(out, { h, k, center: [Q.val(h), Q.val(k)] });
  if (z(R)) return Object.assign(out, { type: "degenerate" });
  const X2 = Q.div(R, A), Y2 = Q.div(R, C);   // (x−h)²/X2 + (y−k)²/Y2 = 1
  Object.assign(out, { X2, Y2 });
  if (Q.val(X2) < 0 && Q.val(Y2) < 0) return Object.assign(out, { type: "empty" });
  const cx = Q.val(h), cy = Q.val(k);
  if (Q.val(X2) > 0 && Q.val(Y2) > 0) {
    if (Q.eq(X2, Y2)) return Object.assign(out, { type: "circle", r2: X2, r: Math.sqrt(Q.val(X2)), e: 0 });
    const horiz = Q.lt(Y2, X2), a2 = horiz ? X2 : Y2, b2 = horiz ? Y2 : X2, c2 = Q.sub(a2, b2), a = Math.sqrt(Q.val(a2)), b = Math.sqrt(Q.val(b2)), c = Math.sqrt(Q.val(c2));
    return Object.assign(out, { type: "ellipse", axis: horiz ? "horizontal" : "vertical", a2, b2, c2, a, b, c, e: c / a,
      vertices: horiz ? [[cx - a, cy], [cx + a, cy]] : [[cx, cy - a], [cx, cy + a]], covertices: horiz ? [[cx, cy - b], [cx, cy + b]] : [[cx - b, cy], [cx + b, cy]],
      foci: horiz ? [[cx - c, cy], [cx + c, cy]] : [[cx, cy - c], [cx, cy + c]] });
  }
  const horiz = Q.val(X2) > 0, a2 = horiz ? X2 : Y2, b2 = Q.neg(horiz ? Y2 : X2), c2 = Q.add(a2, b2), a = Math.sqrt(Q.val(a2)), b = Math.sqrt(Q.val(b2)), c = Math.sqrt(Q.val(c2));
  const m = horiz ? b / a : a / b;
  return Object.assign(out, { type: "hyperbola", axis: horiz ? "horizontal" : "vertical", a2, b2, c2, a, b, c, e: c / a,
    vertices: horiz ? [[cx - a, cy], [cx + a, cy]] : [[cx, cy - a], [cx, cy + a]], foci: horiz ? [[cx - c, cy], [cx + c, cy]] : [[cx, cy - c], [cx, cy + c]],
    asymptotes: [{ m, b: cy - m * cx }, { m: -m, b: cy + m * cx }] });
}
// Standard form → general coefficients. kind "ellipse"/"hyperbola": (x−h)²/X2 ± (y−k)²/Y2 = 1 (sign −1 for a hyperbola,
// with X2 negative for a vertical one handled by passing signX/signY); "parabolaV": (x−h)² = 4p(y−k); "parabolaH": (y−k)² = 4p(x−h).
function conicGeneral(kind, o){
  const h = Q(o.h || 0), k = Q(o.k || 0);
  if (kind === "parabolaV") { const p4 = Q.mul(4, o.p); return { A: Q(1), C: Q(0), D: Q.mul(-2, h), E: Q.neg(p4), F: Q.add(Q.mul(h, h), Q.mul(p4, k)) }; }
  if (kind === "parabolaH") { const p4 = Q.mul(4, o.p); return { A: Q(0), C: Q(1), D: Q.neg(p4), E: Q.mul(-2, k), F: Q.add(Q.mul(k, k), Q.mul(p4, h)) }; }
  // (x−h)²/X2 + (y−k)²/Y2 = 1, X2 or Y2 may be negative (hyperbola); multiply through by X2·Y2
  const X2 = Q(o.X2), Y2 = Q(o.Y2), A = Y2, C = X2;
  return { A, C, D: Q.mul(-2, Q.mul(A, h)), E: Q.mul(-2, Q.mul(C, k)), F: Q.sub(Q.add(Q.mul(A, Q.mul(h, h)), Q.mul(C, Q.mul(k, k))), Q.mul(X2, Y2)) };
}

/* Numeric zeros and intersections of y = f(x) on [lo, hi] (sign changes + touching minima of |f|). */
function zeros(f, lo, hi, n = 600){
  const out = [], xs = [], ys = [];
  for (let i = 0; i <= n; i++) { const x = lo + (hi - lo) * i / n; xs.push(x); ys.push(f(x)); }
  const add = x => { if (!out.some(o => Math.abs(o - x) < (hi - lo) * 1e-6)) out.push(x); };
  for (let i = 0; i < n; i++) {
    const a = ys[i], b = ys[i + 1]; if (!isFinite(a) || !isFinite(b)) continue;
    if (a === 0) add(xs[i]);
    else if (a * b < 0 && Math.abs(a - b) < 1e6) { let L = xs[i], R = xs[i + 1], fl = a; for (let k = 0; k < 70; k++) { const m = (L + R) / 2, fm = f(m); if (fl * fm <= 0) R = m; else { L = m; fl = fm; } } const x = (L + R) / 2; if (Math.abs(f(x)) < 1e-6 * Math.max(1, Math.abs(a), Math.abs(b))) add(x); }
    else if (i > 0 && isFinite(ys[i - 1]) && Math.abs(a) < Math.abs(ys[i - 1]) && Math.abs(a) <= Math.abs(b) && Math.sign(ys[i - 1]) === Math.sign(a) && Math.sign(b) === Math.sign(a)) {
      let L = xs[i - 1], R = xs[i + 1]; const g = x => Math.abs(f(x)); for (let k = 0; k < 80; k++) { const m1 = L + (R - L) / 3, m2 = R - (R - L) / 3; if (g(m1) < g(m2)) R = m2; else L = m1; } const x = (L + R) / 2; if (g(x) < 1e-9) add(x);
    }
  }
  if (ys[n] === 0) add(xs[n]);
  return out.sort((a, b) => a - b);
}
const intersect = (f, g, lo, hi, n) => zeros(x => f(x) - g(x), lo, hi, n).map(x => ({ x, y: f(x) }));

/* Ticks */
function niceStep(span, target = 8){ const raw = span / target, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; }
function ticks(min, max, step){ step = step || niceStep(max - min); const out = []; for (let v = Math.ceil(min / step - 1e-9) * step; v <= max + 1e-9; v += step) out.push(+v.toFixed(10)); return out; }

/* Collision-free label placement (greedy). Each label: {x, y: anchor in px, w, h}. Options:
   bounds {x, y, w, h}; boxes: [{x, y, w, h}] to avoid (mode buttons, legends); pts: [[x, y], …] samples of curves/lines to avoid.
   Returns, per label, {x, y, w, h} (top-left of the text box), the chosen offset name and its cost (0 = clean). */
const OFFS = [["ne", 1, -1], ["nw", -1, -1], ["se", 1, 1], ["sw", -1, 1], ["e", 1, 0], ["w", -1, 0], ["n", 0, -1], ["s", 0, 1]];
function placeLabels(labels, o = {}){
  const placed = [], boxes = (o.boxes || []).slice(), pts = o.pts || [], B = o.bounds, gap = o.gap ?? 6;
  const ov = (a, b) => Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return labels.map(L => {
    let best = null; const prefer = L.prefer ? [L.prefer] : [];
    const order = OFFS.slice().sort((a, b) => (prefer.includes(b[0]) - prefer.includes(a[0])));
    for (const ring of [gap, gap + 12, gap + 26]) for (const [name, sx, sy] of order) {
      const r = { x: sx > 0 ? L.x + ring : sx < 0 ? L.x - ring - L.w : L.x - L.w / 2, y: sy > 0 ? L.y + ring : sy < 0 ? L.y - ring - L.h : L.y - L.h / 2, w: L.w, h: L.h };
      let cost = 0;
      if (B) { const out = Math.max(0, B.x - r.x) + Math.max(0, r.x + r.w - B.x - B.w) + Math.max(0, B.y - r.y) + Math.max(0, r.y + r.h - B.y - B.h); cost += out * 50; }
      for (const p of placed) cost += ov(r, p) * 4;
      for (const b of boxes) cost += ov(r, b) * 4;
      for (const [px, py] of pts) if (px > r.x - 1 && px < r.x + r.w + 1 && py > r.y - 1 && py < r.y + r.h + 1) cost += 30;
      cost += (ring - gap) * 0.5 + order.findIndex(q => q[0] === name) * 0.05;
      if (!best || cost < best.cost) best = Object.assign(r, { name, cost: Math.round(cost * 100) / 100 });
      if (best.cost < 1) break;
    }
    placed.push(best); return best;
  });
}

/* Formatters: HTML for the readout and dossier-like markup, plain text for canvas. Minus is always U+2212. */
const sg = n => (n < 0 ? MI + Math.abs(n) : String(n));
const fmtN = (v, d = 3) => { if (!isFinite(v)) return "undefined"; const s = String(Math.round(v * 10 ** d) / 10 ** d); return (s === "-0" ? "0" : s).replace("-", MI); };
const qT = q => { q = Q(q); return (q.n < 0 ? MI : "") + Math.abs(q.n) + (q.d === 1 ? "" : "/" + q.d); };
const qH = (q, cls = "") => { q = Q(q); const m = q.d === 1 ? String(Math.abs(q.n)) : `<span class="fr"><span>${Math.abs(q.n)}</span><span>${q.d}</span></span>`; return `<span class="m${cls ? " " + cls : ""}">${q.n < 0 ? MI : ""}${m}</span>`; };
const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const supT = e => String(e).split("").map(c => SUP[c] || c).join("");
// Polynomial as text ("2x³ − x + 5") or HTML ("2<i>x</i><sup>3</sup> − …"). opts: v (variable), html, frac (HTML fractions)
function polyStr(p, o = {}){
  p = Poly(p); const html = !!o.html, v = o.v || (html ? "<i>x</i>" : "x"); let s = "";
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i]; if (c.n === 0) continue;
    const a = Q.abs(c), one = a.n === 1 && a.d === 1 && i > 0;
    const mag = one ? "" : html && a.d !== 1 && o.frac !== false ? `<span class="fr"><span>${a.n}</span><span>${a.d}</span></span>` : qT(a);
    const pw = i === 0 ? "" : i === 1 ? v : html ? `${v}<sup>${i}</sup>` : v + supT(i);
    s += s ? (c.n < 0 ? " − " : " + ") : c.n < 0 ? MI : ""; s += mag + pw;
  }
  return s || "0";
}
const polyT = (p, v) => polyStr(p, { v }), polyH = (p, v) => polyStr(p, { html: true, v });
// Complex a + bi: "3 − 4i" (text) / HTML with italic i
function zStr(z, html){ z = Z(z); const i = html ? "<i>i</i>" : "i", re = z.re, im = z.im, F = html ? q => qH(q) : qT;
  if (im.n === 0) return F(re);
  const ai = Q.abs(im), mag = ai.n === 1 && ai.d === 1 ? "" : html ? qH(ai) : qT(ai);
  if (re.n === 0) return (im.n < 0 ? MI : "") + mag + i;
  return F(re) + (im.n < 0 ? " − " : " + ") + mag + i; }
const zT = z => zStr(z, false), zH = z => zStr(z, true);
// a·√t, in text or HTML (overline radicand). sqrtStr(Q(3,2), 5) = "3/2√5"
const radStr = (s, t, html) => { s = Q(s); if (t === 1) return html ? qH(s) : qT(s); const r = html ? `√<span class="mk-ol">${t}</span>` : `√${t}`; return (Q.eq(Q.abs(s), 1) ? (s.n < 0 ? MI : "") : html ? qH(s) : qT(s)) + r; };
// Quadratic roots as text/HTML: "−1 ± 2√3", "2 ± i", "−3/2" …
function rootsStr(R, html){
  const F = html ? q => qH(q) : qT, i = html ? "<i>i</i>" : "i";
  if (R.kind === "double") return F(R.p);
  if (R.kind === "two rational") return R.exact.map(F).join(", ");
  const part = (Q.eq(R.s, 1) && R.t === 1 ? "" : radStr(R.s, R.t, html)) + (R.imag ? i : "");
  return (R.p.n === 0 ? "±" : F(R.p) + " ± ") + (part || "1");
}
// Reveal guard for step-by-step work: entries after index k become null (render as placeholders), so nothing
// ahead of the stepper is ever in the DOM.
const reveal = (lines, k) => lines.map((l, i) => (i <= k ? l : null));

W.MathRules = { Q, Poly, Z, gcd: gcdI, lcm: lcmI, divisors, sqrtParts, quadRoots, rational, transform, transformPoint, compose, invert, isOneToOne,
  logb, logExact, compound, continuous, arith, geom, sigma, nCr, pascalRow, binomialPoly, binomialTerm, conic, conicGeneral,
  zeros, intersect, niceStep, ticks, placeLabels, sg, fmtN, qT, qH, supT, polyT, polyH, polyStr, zT, zH, radStr, rootsStr, reveal, MI };

/* ---------------- 2. MathKit: drawing on top of the lab kit ---------------- */
const CSS = `.mk-ol{border-top:1px solid currentColor;padding-top:1px;margin-left:1px}
.mk-wrap{display:flex;flex-wrap:wrap;gap:14px 22px;justify-content:center;align-items:flex-start;padding:54px 16px 56px;height:100%;overflow:auto;box-sizing:border-box}
.mk-steps{flex:1 1 300px;min-width:0;display:grid;gap:4px;font:400 19px/1.45 var(--math);align-content:start}
.mk-steps .st{display:grid;grid-template-columns:96px minmax(0,1fr);align-items:baseline;gap:0 10px;padding:5px 8px;border-radius:4px;color:var(--muted)}
.mk-steps .st.cur{background:rgba(242,184,75,.07);color:var(--text);box-shadow:inset 2px 0 0 var(--amber)}
.mk-steps .st.todo{color:var(--faint)}
.mk-steps .tag{font:600 11px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.mk-steps .st.cur .tag{color:var(--amber)}
.mk-steps .eq{overflow-x:auto;overflow-y:hidden;min-width:0}
.mk-steps .why{grid-column:2;font:12.5px/1.4 var(--sans);color:var(--faint)}
.mk-chip{display:inline-block;border:1px solid;border-radius:4px;padding:0 7px;margin:2px 3px;font:400 17px/1.5 var(--math)}
table.mk-synth{border-collapse:collapse;font:400 18px/1.5 var(--math);margin:4px 0}
table.mk-synth td{padding:2px 10px;text-align:right;min-width:2.2em}
table.mk-synth td.r{border-right:1px solid var(--muted)} table.mk-synth tr.b td{border-top:1px solid var(--muted)}
@media (max-width:560px){.mk-steps{font-size:17px}.mk-steps .st{grid-template-columns:minmax(0,1fr)}.mk-steps .why{grid-column:1}}`;

function attach(k){
  const { C, F } = k;
  if (!document.getElementById("mk-css")) { const s = document.createElement("style"); s.id = "mk-css"; s.textContent = CSS; document.head.appendChild(s); }
  k.MR = W.MathRules;
  // Declare the answers of the current mode (strings as they would appear, e.g. "x = 3"); tools/layoutcheck.js reports
  // any of them visible when the mode first opens. Call again with [] or new answers when the mode changes.
  k.guard = list => { k.stage.dataset.answers = JSON.stringify(list || []); };

  // Eased window: k.smooth(view, {ymin, ymax}, dt) moves numeric fields toward the target (instant with reduced motion).
  k.smooth = (cur, target, dt, rate = 6) => { for (const key in target) cur[key] = k.reduce || cur[key] === undefined ? target[key] : cur[key] + (target[key] - cur[key]) * Math.min(1, dt * rate); return cur; };

  // Sliders from a config. defs: [{key, label, min, max, step, value, cls: "c2", fmt}] → state S (S.a, S.set("a", v)).
  k.params = (defs, onChange) => {
    const S = {}, ctl = {};
    defs.forEach(dd => { S[dd.key] = dd.value; ctl[dd.key] = k.slider(dd.label || `<span class="${dd.cls || "c1"}"><i>${dd.key}</i></span>`, dd.min, dd.max, dd.step, dd.value, v => { S[dd.key] = v; if (onChange) onChange(dd.key, v, S); }, dd.fmt || (v => fmtN(v, 2))); });
    Object.defineProperty(S, "set", { value: (key, v) => { S[key] = v; ctl[key].set(v); }, enumerable: false });
    Object.defineProperty(S, "ctl", { value: ctl, enumerable: false });
    return S;
  };

  // Coordinate plane: everything k.plot does, plus the helpers below. Call inside the loop after c.begin().
  k.plane = (c, o = {}) => {
    // keep the plot (tick labels, axis names) below the mode buttons when the stage has them
    const mb = k.stage.querySelector(".modes"); if (mb && o.modes !== false) { const top = mb.offsetTop + mb.offsetHeight + 6; o = Object.assign({}, o, { pad: Object.assign({ l: 40, r: 16, t: 16, b: 30 }, o.pad || {}) }); o.pad.t = Math.max(o.pad.t, top); }
    const P = k.plot(c, o), d = c.d, g = c.g; P.pts = []; P.boxes = (o.avoid || []).slice();
    const record = (x, y) => { if (x >= P.left && x <= P.left + P.width && y >= P.top && y <= P.top + P.height) P.pts.push([x, y]); };
    if (mb && o.modes !== false) { const r = mb.getBoundingClientRect(), s = c.cv.getBoundingClientRect(); P.boxes.push({ x: r.left - s.left - 4, y: r.top - s.top - 4, w: r.width + 8, h: r.height + 8 }); }
    // y = f(x) with breaks at given x values (vertical asymptotes / excluded points). opts: breaks, from, to, dash, w
    P.curve = (f, color = C.amber, opt = {}) => {
      const from = opt.from ?? P.xmin, to = opt.to ?? P.xmax, brk = (opt.breaks || []).filter(b => b > from && b < to).sort((a, b) => a - b);
      const cuts = [from, ...brk, to], eps = (P.xmax - P.xmin) * 1e-4;
      for (let i = 0; i < cuts.length - 1; i++) { const a = i ? cuts[i] + eps : cuts[i], b = i < cuts.length - 2 ? cuts[i + 1] - eps : cuts[i + 1]; if (b > a) P.fn(f, color, opt.w || 2.5, a, b, opt.dash); }
      const N = 120; for (let i = 0; i <= N; i++) { const x = from + (to - from) * i / N, y = f(x); if (isFinite(y)) record(P.X(x), P.Y(y)); }
    };
    P.vasym = (x, color = C.violet, w = 1.5) => { P.line(x, P.ymin, x, P.ymax, color, w, [6, 5]); for (let i = 0; i <= 20; i++) record(P.X(x), P.top + P.height * i / 20); };
    P.hasym = (y, color = C.violet, w = 1.5) => { P.line(P.xmin, y, P.xmax, y, color, w, [6, 5]); for (let i = 0; i <= 30; i++) record(P.left + P.width * i / 30, P.Y(y)); };
    P.asym = (f, color = C.violet, w = 1.5) => P.curve(f, color, { w, dash: [6, 5] });
    P.hole = (x, y, color = C.amber, r = 5) => { if (x >= P.xmin && x <= P.xmax && y >= P.ymin && y <= P.ymax) { d.circle(P.X(x), P.Y(y), r, C.ink, color, 2); record(P.X(x), P.Y(y)); } };
    P.dot = (x, y, color = C.amber, r = 5.5) => { if (x >= P.xmin && x <= P.xmax && y >= P.ymin && y <= P.ymax) { P.point(x, y, color, r); record(P.X(x), P.Y(y)); } };
    // Parametric curve (x(t), y(t)) for t in [t0, t1]
    P.param = (fx, fy, t0, t1, color = C.amber, w = 2.5, dash) => { P.clip(() => { g.save(); g.strokeStyle = color; g.lineWidth = w; if (dash) g.setLineDash(dash); g.beginPath(); const N = 360; for (let i = 0; i <= N; i++) { const t = t0 + (t1 - t0) * i / N, px = P.X(fx(t)), py = P.Y(fy(t)); i ? g.lineTo(px, py) : g.moveTo(px, py); if (i % 6 === 0) record(px, py); } g.stroke(); g.restore(); }); };
    // Implicit curve G(x, y) = 0 (conics, nonlinear systems) by marching squares on a cell grid of `res` px.
    P.implicit = (G, color = C.amber, w = 2.5, res = 5) => { P.clip(() => { g.save(); g.strokeStyle = color; g.lineWidth = w; g.lineCap = "round"; g.beginPath();
      const nx = Math.ceil(P.width / res), ny = Math.ceil(P.height / res), val = [];
      for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) { const q = P.inv(P.left + i * res, P.top + j * res); row.push(G(q.x, q.y)); } val.push(row); }
      const lerpT = (a, b) => (a === b ? .5 : a / (a - b));
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const v0 = val[j][i], v1 = val[j][i + 1], v2 = val[j + 1][i + 1], v3 = val[j + 1][i]; const x0 = P.left + i * res, y0 = P.top + j * res;
        const e = []; if ((v0 > 0) !== (v1 > 0)) e.push([x0 + res * lerpT(v0, v1), y0]); if ((v1 > 0) !== (v2 > 0)) e.push([x0 + res, y0 + res * lerpT(v1, v2)]);
        if ((v3 > 0) !== (v2 > 0)) e.push([x0 + res * lerpT(v3, v2), y0 + res]); if ((v0 > 0) !== (v3 > 0)) e.push([x0, y0 + res * lerpT(v0, v3)]);
        if (e.length >= 2 && [v0, v1, v2, v3].every(isFinite)) { g.moveTo(e[0][0], e[0][1]); g.lineTo(e[1][0], e[1][1]); record(e[0][0], e[0][1]); if (e.length === 4) { g.moveTo(e[2][0], e[2][1]); g.lineTo(e[3][0], e[3][1]); } }
      } g.stroke(); g.restore(); }); };
    // Shade between y = f and y = h (h defaults to the x-axis) for x in [from, to]
    P.shade = (f, h, from, to, color) => { h = h || (() => 0); P.clip(() => { g.save(); g.fillStyle = color; g.beginPath(); const N = 160; for (let i = 0; i <= N; i++) { const x = from + (to - from) * i / N; const y = Math.max(P.ymin - 1e3, Math.min(P.ymax + 1e3, f(x))); i ? g.lineTo(P.X(x), P.Y(y)) : g.moveTo(P.X(x), P.Y(y)); } for (let i = N; i >= 0; i--) { const x = from + (to - from) * i / N; const y = Math.max(P.ymin - 1e3, Math.min(P.ymax + 1e3, h(x))); g.lineTo(P.X(x), P.Y(y)); } g.closePath(); g.fill(); g.restore(); }); };
    P.seg = (x1, y1, x2, y2, color, w = 2, dash) => { P.line(x1, y1, x2, y2, color, w, dash); for (let i = 0; i <= 10; i++) record(P.X(x1 + (x2 - x1) * i / 10), P.Y(y1 + (y2 - y1) * i / 10)); };
    // Labels placed so they don't overlap each other, curves drawn so far, the mode buttons or the plot edges.
    // list: [{text, x, y (math coords), color, font, prefer: "ne"|"nw"|…}] — draw these LAST in the frame.
    P.labels = list => {
      const items = list.filter(l => l && l.x >= P.xmin && l.x <= P.xmax && l.y >= P.ymin && l.y <= P.ymax).map(l => { const font = l.font || `14px ${F.math}`; return Object.assign({}, l, { font, ax: P.X(l.x), ay: P.Y(l.y), w: d.width(l.text, font) + 2, h: parseInt(/(\d+)px/.exec(font)[1], 10) + 4 }); });
      const res = placeLabels(items.map(l => ({ x: l.ax, y: l.ay, w: l.w, h: l.h, prefer: l.prefer })), { bounds: { x: P.left, y: P.top, w: P.width, h: P.height }, boxes: P.boxes, pts: P.pts });
      items.forEach((l, i) => { const r = res[i]; if (l.halo !== false) d.rect(r.x - 1, r.y, r.w + 2, r.h, k.alpha(C.ink, .72)); d.text(l.text, r.x + 1, r.y + r.h / 2, { font: l.font, color: l.color || C.text, base: "middle" }); P.boxes.push(r); });
      return res;
    };
    return P;
  };

  // Complex plane: equal scale, axes labelled Re / Im. P.z(z, color, label) draws a point (and an arrow when opt.vec).
  k.cplane = (c, o = {}) => {
    const P = k.plane(c, Object.assign({ equal: true, xlabel: "Re", ylabel: "Im" }, o));
    P.z = (z, color = C.amber, opt = {}) => { const v = z.isZ ? Z.val(z) : z; if (opt.vec) { c.d.arrow(P.X(0), P.Y(0), P.X(v.re), P.Y(v.im), color, opt.w || 2); P.seg(0, 0, v.re, v.im, "rgba(0,0,0,0)", 0); } P.dot(v.re, v.im, color, opt.r || 5.5); };
    return P;
  };

  // Draggable points. pts: [{x, y, snap?: step, clamp?: [xmin, xmax, ymin, ymax], fixX?, fixY?}] in math coords.
  // getP: () => the current plane (from the loop). onMove(i, pt) after each move. Returns {active} (index or −1).
  k.drag = (c, getP, pts, onMove, opt = {}) => {
    const st = { active: -1, hover: -1 }, R = opt.r || 16;
    const hit = e => { const P = getP(); if (!P) return -1; const q = c.xy(e); let best = -1, bd = R; pts.forEach((p, i) => { const dd = Math.hypot(P.X(p.x) - q.x, P.Y(p.y) - q.y); if (dd < bd) { bd = dd; best = i; } }); return best; };
    const move = e => { const P = getP(); if (!P || st.active < 0) return; const q = c.xy(e), m = P.inv(q.x, q.y), p = pts[st.active]; let x = m.x, y = m.y;
      if (p.snap) { x = Math.round(x / p.snap) * p.snap; y = Math.round(y / p.snap) * p.snap; }
      const cl = p.clamp || [P.xmin, P.xmax, P.ymin, P.ymax]; x = Math.max(cl[0], Math.min(cl[1], x)); y = Math.max(cl[2], Math.min(cl[3], y));
      if (!p.fixX) p.x = +x.toFixed(6); if (!p.fixY) p.y = +y.toFixed(6); if (onMove) onMove(st.active, p); };
    c.cv.addEventListener("pointerdown", e => { const i = hit(e); if (i < 0) return; st.active = i; c.cv.setPointerCapture(e.pointerId); move(e); e.preventDefault(); });
    c.cv.addEventListener("pointermove", e => { if (st.active >= 0) move(e); else { st.hover = hit(e); c.cv.style.cursor = st.hover >= 0 ? "grab" : ""; } });
    const up = () => { st.active = -1; }; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
    c.cv.style.touchAction = "none";
    return st;
  };

  // Step-by-step solution panel. host: a DOM element (e.g. from k.dom()). set(lines, cur): lines = [{tag, eq, why?}];
  // lines after `cur` are rendered as empty placeholders (never their content), so the answer can't show early.
  k.stepsPanel = (host, opt = {}) => {
    const el = document.createElement("div"); el.className = "mk-steps"; host.appendChild(el); let last = "";
    return { el, set(lines, cur){ const html = reveal(lines, cur).map((l, i) => l ? `<div class="st${i === cur ? " cur" : ""}"><span class="tag">${l.tag || "step " + (i + 1)}</span><span class="eq">${l.eq}</span>${l.why ? `<span class="why">${l.why}</span>` : ""}</div>` : `<div class="st todo"><span class="tag">${opt.todo ? lines[i] && lines[i].tag || "" : ""}</span><span class="eq">·&nbsp;·&nbsp;·</span></div>`).join(""); if (html !== last) { el.innerHTML = html; last = html; } } };
  };

  // Standard readout. {title, big, rows: [{lhs, v, cls, lbl}], landmark: {hit, big, note}, narr}
  k.readout = o => {
    const rows = (o.rows || []).filter(Boolean).map(r => `<div class="row">${r.lhs ? `<span class="m">${r.lhs}</span>` : ""}${r.v !== undefined ? ` <span class="v ${r.cls || ""}">${r.v}</span>` : ""}${r.lbl ? `<span class="lbl">${r.lbl}</span>` : ""}</div>`).join("");
    const lm = o.landmark ? `<div class="landmark${o.landmark.hit ? " hit" : ""}"><div class="big">${o.landmark.big || ""}</div>${o.landmark.note ? `<div class="note">${o.landmark.note}</div>` : ""}</div>` : "";
    k.setRO(`<div>${o.title ? `<h2>${o.title}</h2>` : ""}${o.big ? `<div class="ro-big" style="margin-top:8px">${o.big}</div>` : ""}</div>${rows ? `<div class="ro-rows">${rows}</div>` : ""}${lm}${o.narr ? `<p class="narr">${o.narr}</p>` : ""}`);
  };

  // Synthetic-division table as HTML (top row, carried row, result row), `upto` columns revealed.
  k.synthHTML = (S, r, upto = Infinity) => { const cell = (q, i) => (i <= upto && q ? qH(q) : ""); return `<table class="mk-synth"><tr><td class="r">${qH(r)}</td>${S.top.map(q => `<td>${qH(q)}</td>`).join("")}</tr><tr><td class="r"></td>${S.mid.map((q, i) => `<td>${cell(q, i)}</td>`).join("")}</tr><tr class="b"><td class="r"></td>${S.bottom.map((q, i) => `<td${i === S.bottom.length - 1 ? ' class="c1"' : ""}>${cell(q, i)}</td>`).join("")}</tr></table>`; };
  return k;
}

W.MathKit = { attach };
})();
