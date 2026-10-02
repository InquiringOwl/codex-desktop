// Logic tests for the math lab kit's rules (web/src/kit-math.js → MathRules).
const MR = load('web/src/kit-math.js').MathRules;
const { Q, Poly, Z } = MR;
const S = q => q.toString(), PS = p => p.map(S);
const near = (a, b, what, tol = 1e-9) => ok(Math.abs(a - b) < tol, `${what}: got ${a}, want ${b}`);

test('rationals: reduce, sign, arithmetic, decimals', () => {
  eq(S(Q(6, -8)), '-3/4', 'sign to numerator'); eq(S(Q(0, 5)), '0', 'zero'); eq(S(Q(0.75)), '3/4', 'decimal'); eq(S(Q(-0.125)), '-1/8', 'neg decimal'); eq(S(Q(1 / 3)), '1/3', 'repeating');
  eq(S(Q.add(Q(1, 6), Q(1, 4))), '5/12', 'add'); eq(S(Q.sub(1, Q(1, 3))), '2/3', 'sub'); eq(S(Q.mul(Q(2, 3), Q(9, 4))), '3/2', 'mul'); eq(S(Q.div(Q(2, 3), Q(4, 9))), '3/2', 'div');
  eq(S(Q.pow(Q(2, 3), 3)), '8/27', 'pow'); eq(S(Q.pow(Q(2, 3), -2)), '9/4', 'neg pow'); ok(Q.lt(Q(1, 3), Q(1, 2)), 'lt'); eq(Q.cmp(Q(2, 4), Q(1, 2)), 0, 'cmp eq');
  let threw = false; try { Q.div(1, 0); } catch (e) { threw = true; } ok(threw, 'divide by zero throws');
});

test('polynomials: arithmetic, evaluation, composition', () => {
  const p = Poly([1, -3, 2]);            // 2x² − 3x + 1
  eq(PS(Poly.mul(Poly([-1, 1]), Poly([1, 1]))), ['-1', '0', '1'], '(x−1)(x+1)');
  eq(S(Poly.eval(p, Q(1, 2))), '0', 'p(1/2)'); eq(Poly.evalN(p, 3), 10, 'p(3)');
  eq(PS(Poly.deriv(p)), ['-3', '4'], "p'"); eq(PS(Poly.deriv(Poly([5]))), ['0'], 'constant derivative');
  eq(PS(Poly.compose(Poly([0, 0, 1]), Poly([1, 1]))), ['1', '2', '1'], '(x+1)²'); eq(PS(Poly.pow(Poly([1, 1]), 3)), ['1', '3', '3', '1'], '(x+1)³');
  eq(Poly.deg(Poly([0])), -Infinity, 'deg 0 poly'); eq(Poly.deg(Poly([1, 0, 0])), 0, 'trailing zeros trimmed');
  eq(MR.polyT(Poly([5, -1, 0, 2])), '2x³ − x + 5', 'text'); eq(MR.polyT(Poly([0, -1])), '−x', 'leading minus'); eq(MR.polyT(Poly([Q(1, 2), 0, -3])), '−3x² + 1/2', 'fraction');
  eq(MR.polyH(Poly([0, 0, 1])), '<i>x</i><sup>2</sup>', 'html');
});

test('long and synthetic division agree (remainder theorem)', () => {
  for (let trial = 0; trial < 60; trial++) {
    const deg = 1 + trial % 4, cs = Array.from({ length: deg + 1 }, (_, i) => ((trial * 7 + i * 13) % 11) - 5); if (cs[deg] === 0) cs[deg] = 2;
    const p = Poly(cs), r = Q((trial % 9) - 4, 1 + trial % 3);
    const L = Poly.divmod(p, Poly([Q.neg(r), 1])), Sy = Poly.synth(p, r);
    eq(PS(Sy.q), PS(L.q), 'quotients ' + cs + ' / (x − ' + r + ')'); eq(S(Sy.rem), S(Poly.eval(p, r)), 'remainder = p(r)');
    ok(Poly.eq(Poly.add(Poly.mul(L.q, Poly([Q.neg(r), 1])), L.r), p), 'p = q·d + r');
  }
  const D = Poly.divmod(Poly([-4, 0, -2, 1]), Poly([1, 0, 1]));   // (x³ − 2x² − 4) ÷ (x² + 1)
  eq(PS(D.q), ['-2', '1'], 'quotient x − 2'); eq(PS(D.r), ['-2', '-1'], 'remainder −x − 2'); eq(D.steps.length, 2, 'two steps');
  const T = Poly.synth(Poly([-6, 11, -6, 1]), 1); eq(PS(T.bottom), ['1', '-5', '6', '0'], 'synthetic bottom row'); eq(T.mid.map(x => x && S(x)), [null, '1', '-5', '6'], 'carried row');
});

test('rational roots, multiplicities, numeric roots', () => {
  eq(Poly.ratCandidates(Poly([-6, 11, -6, 2])).map(S).slice(0, 4), ['-6', '-3', '-2', '-3/2'], 'candidates ±p/q');
  const R = Poly.ratRoots(Poly.fromRoots([Q(1, 2), 2, 2, -3], 4)); eq(R.roots.map(o => [S(o.r), o.m]), [['-3', 1], ['1/2', 1], ['2', 2]], 'roots with multiplicity'); eq(PS(R.rest), ['4'], 'rest is the leading coefficient');
  const p = Poly.mul(Poly([-2, 0, 1]), Poly([3, 1]));   // (x² − 2)(x + 3)
  const rr = Poly.realRoots(p); eq(rr.length, 3, 'three real roots'); near(rr[0].x, -3, 'x=−3'); eq(S(rr[0].q), '-3', 'exact'); near(rr[1].x, -Math.SQRT2, '−√2'); eq(rr[1].q, null, 'irrational is numeric'); near(rr[2].x, Math.SQRT2, '√2');
  const cz = Poly.roots(Poly([5, -2, 1]));   // x² − 2x + 5 → 1 ± 2i
  eq(cz.length, 2, 'two complex'); near(cz[0].re, 1, 're'); near(Math.abs(cz[0].im), 2, 'im');
  eq(Poly.realRoots(Poly([0, 0, 0, 1])).map(o => o.m), [3], 'x³ triple root at 0');
  const four = Poly.roots(Poly.fromRoots([1, 2, 3, 4])); four.forEach((z, i) => near(z.re, i + 1, 'root ' + (i + 1), 1e-8));
  eq(Poly.ends(Poly([0, 0, 0, -2])), { left: 1, right: -1 }, '−2x³ ends'); eq(Poly.ends(Poly([1, 0, 3])), { left: 1, right: 1 }, '3x² ends');
});

test('complex numbers, exact', () => {
  const a = Z(3, -4), b = Z(1, 2);
  eq(MR.zT(Z.add(a, b)), '4 − 2i', 'add'); eq(MR.zT(Z.mul(a, b)), '11 + 2i', 'mul'); eq(MR.zT(Z.div(a, b)), '−1 − 2i', 'div'); eq(S(Z.norm(a)), '25', '|a|²'); near(Z.abs(a), 5, '|a|');
  eq([0, 1, 2, 3, 4, 5, -1].map(e => MR.zT(Z.ipow(e))), ['1', 'i', '−1', '−i', '1', 'i', '−i'], 'powers of i');
  eq(MR.zT(Z.pow(Z(1, 1), 4)), '−4', '(1+i)⁴'); eq(MR.zT(Z.div(1, Z(0, 1))), '−i', '1/i'); eq(MR.zT(Z(Q(1, 2), Q(-3, 2))), '1/2 − 3/2i', 'fractions'); eq(MR.zT(Z(0, 1)), 'i', 'i'); eq(MR.zT(Z(0, -2)), '−2i', '−2i');
  ok(Z.eq(Z.mul(a, Z.conj(a)), Z(25)), 'z·z̄ = |z|²');
});

test('radicals and exact quadratic roots', () => {
  eq(MR.sqrtParts(72), [6, 2], '√72'); const sq = MR.sqrtQ(Q(9, 8)); eq([S(sq.s), sq.t], ['3/4', 2], '√(9/8) = (3/4)√2'); eq([S(MR.sqrtQ(Q(25, 4)).s), MR.sqrtQ(Q(25, 4)).t], ['5/2', 1], '√(25/4)');
  for (let n = 0; n < 40; n++) for (let dd = 1; dd < 12; dd++) { const r = MR.sqrtQ(Q(n, dd)); near(Q.val(r.s) * Math.sqrt(r.t), Math.sqrt(n / dd), 'sqrtQ ' + n + '/' + dd, 1e-12); } eq(MR.sqrtParts(49), [7, 1], '√49'); eq(MR.sqrtParts(30), [1, 30], '√30');
  const r1 = MR.quadRoots(1, -5, 6); eq(r1.kind, 'two rational'); eq(r1.exact.map(S), ['2', '3'], 'x²−5x+6');
  const r2 = MR.quadRoots(1, 2, -11); eq(r2.kind, 'two irrational'); eq([S(r2.p), S(r2.s), r2.t], ['-1', '2', 3], '−1 ± 2√3'); eq(MR.rootsStr(r2), '−1 ± 2√3', 'text');
  const r3 = MR.quadRoots(1, -4, 5); eq(r3.kind, 'complex'); eq(MR.rootsStr(r3), '2 ± i', '2 ± i');
  const r4 = MR.quadRoots(4, 12, 9); eq(r4.kind, 'double'); eq(MR.rootsStr(r4), '−3/2', 'double root');
  const r5 = MR.quadRoots(2, 0, 3); eq(MR.rootsStr(r5), '±1/2√6i', '±(√6/2)i');
  for (let a = 1; a <= 3; a++) for (let b = -6; b <= 6; b++) for (let c = -6; c <= 6; c++) { const R = MR.quadRoots(a, b, c); for (const v of R.values) { const re = a * (v.re * v.re - v.im * v.im) + b * v.re + c, im = a * 2 * v.re * v.im + b * v.im; ok(Math.abs(re) < 1e-9 && Math.abs(im) < 1e-9, `root of ${a}x²+${b}x+${c}`); } }
});

test('rational functions: holes, asymptotes, zeros', () => {
  const f = MR.rational([-4, 0, 1], [-6, 1, 1]);   // (x²−4)/(x²+x−6) = (x+2)/(x+3), hole at x=2
  eq(f.holes.map(h => [S(h.q), S(h.yq)]), [['2', '4/5']], 'hole (2, 4/5)'); eq(f.vas.map(v => S(v.q)), ['-3'], 'VA x=−3'); eq(f.zeros.map(z => S(z.q)), ['-2'], 'zero −2');
  eq(f.asym.type, 'horizontal'); eq(S(f.asym.y), '1', 'HA y=1'); eq(S(f.yint), '2/3', 'y-intercept'); eq(f.excluded.map(e => S(e.q)), ['-3', '2'], 'domain excludes'); ok(isNaN(f.f(2)), 'f undefined at hole');
  eq([f.vas[0].left, f.vas[0].right], [1, -1], 'sides of VA: (x+2)/(x+3) → +∞ left, −∞ right');
  const g = MR.rational([1, 0, 1], [0, 1]); eq(g.asym.type, 'slant'); eq(PS(g.asym.poly), ['0', '1'], 'slant y = x'); eq(g.yint, null, 'no y-intercept');
  const h = MR.rational([1], [0, 0, 1]); eq(h.holes.length, 0, '1/x² has no hole'); eq(h.vas.map(v => v.m), [2], 'even VA'); eq([h.vas[0].left, h.vas[0].right], [1, 1], 'both sides +∞');
  const k2 = MR.rational([0, 1], [0, 0, 1]); eq(k2.holes.length, 0, 'x/x²: x=0 is a VA, not a hole'); eq(k2.vas.map(v => S(v.q)), ['0'], 'VA 0');
  const m = MR.rational([3, 0, 2], [1, 0, -1]); eq(S(m.asym.y), '-2', 'HA ratio of leads'); eq(m.vas.map(v => S(v.q)), ['-1', '1'], 'VAs ±1');
});

test('transformations, inverses, logs', () => {
  const f = x => x * x, g = MR.transform(f, { a: 2, b: 1, h: 3, k: -1 }); eq(g(3), -1, 'vertex moves to (3,−1)'); eq(g(4), 1, 'g(4)');
  eq(MR.transformPoint([1, 1], { a: 2, b: 2, h: 3, k: -1 }), [3.5, 1], 'point map x/b + h, a·y + k');
  near(MR.invert(x => x * x * x + x, 10, -5, 5), 2, 'inverse of x³+x at 10'); ok(isNaN(MR.invert(x => x * x, -1, 0, 3)), 'out of range');
  ok(MR.isOneToOne(x => x * x * x, -3, 3), 'x³ one-to-one'); ok(!MR.isOneToOne(x => x * x, -3, 3), 'x² not one-to-one'); ok(MR.isOneToOne(x => x * x, 0, 3), 'x² on [0,3]');
  eq(S(MR.logExact(8, 4)), '2/3', 'log₈4'); eq(S(MR.logExact(2, Q(1, 8))), '-3', 'log₂(1/8)'); eq(S(MR.logExact(Q(1, 9), 27)), '-3/2', 'log_{1/9}27'); eq(MR.logExact(2, 3), null, 'log₂3 irrational');
  near(MR.logb(10, 1000), 3, 'log 1000'); near(MR.compound(1000, .05, 12, 10), 1647.00949769028, 'compound'); near(MR.continuous(1000, .05, 10), 1648.721270700128, 'continuous');
});

test('sequences, series, binomial', () => {
  const A = MR.arith(3, 4); eq(S(A.term(10)), '39', 'a10'); eq(S(A.sum(10)), '210', 'S10'); eq(S(MR.sigma(i => 3 + 4 * (i - 1), 1, 10)), '210', 'sigma agrees');
  const G = MR.geom(Q(1, 2), Q(1, 2)); eq(S(G.term(5)), '1/32', 'g5'); eq(S(G.sum(5)), '31/32', 'S5'); eq(S(G.sumInf()), '1', 'infinite sum'); eq(MR.geom(1, 2).sumInf(), null, 'diverges');
  eq(S(MR.geom(5, 1).sum(4)), '20', 'r = 1'); eq(S(MR.sigma(i => Q(1, i * (i + 1)), 1, 9)), '9/10', 'telescoping');
  eq(MR.pascalRow(5), [1, 5, 10, 10, 5, 1], 'row 5'); eq(MR.nCr(20, 10), 184756, 'C(20,10)'); eq(MR.nCr(5, 7), 0, 'C(5,7)');
  eq(PS(MR.binomialPoly(2, -1, 3)), ['-1', '6', '-12', '8'], '(2x − 1)³'); eq(S(MR.binomialTerm(Q(2), Q(-3), 5, 2)), '720', 'C(5,2)·2³·(−3)²');
});

test('conic sections from general form', () => {
  const c = MR.conic({ A: 1, C: 1, D: -4, E: 6, F: -12 }); eq(c.type, 'circle'); eq([S(c.h), S(c.k), S(c.r2)], ['2', '-3', '25'], 'centre (2,−3), r²=25');
  const e = MR.conic({ A: 9, C: 4, D: -36, E: 8, F: 4 }); eq(e.type, 'ellipse'); eq([S(e.h), S(e.k), S(e.a2), S(e.b2), S(e.c2), e.axis], ['2', '-1', '9', '4', '5', 'vertical'], 'ellipse (x−2)²/4 + (y+1)²/9 = 1');
  const h = MR.conic({ A: 1, C: -4, D: 0, E: 0, F: -16 }); eq(h.type, 'hyperbola'); eq([S(h.a2), S(h.b2), S(h.c2), h.axis], ['16', '4', '20', 'horizontal'], 'x²/16 − y²/4 = 1'); near(h.asymptotes[0].m, .5, 'asymptote slope b/a');
  const hv = MR.conic({ A: -1, C: 4, F: -4 }); eq([hv.type, hv.axis, S(hv.a2), S(hv.b2)], ['hyperbola', 'vertical', '1', '4'], 'y² − x²/4 = 1'); near(hv.asymptotes[0].m, .5, 'vertical asymptote slope a/b');
  const p = MR.conic({ A: 1, D: -4, E: -8, F: 12 }); eq(p.type, 'parabola'); eq([S(p.h), S(p.k), S(p.p), p.axis], ['2', '1', '2', 'vertical'], '(x−2)² = 8(y−1)'); eq(p.focus, [2, 3], 'focus'); eq(p.directrix, { y: -1 }, 'directrix');
  const ph = MR.conic({ C: 1, D: 12 }); eq([ph.type, ph.axis, S(ph.p)], ['parabola', 'horizontal', '-3'], 'y² = −12x'); eq(ph.focus, [-3, 0], 'focus (−3,0)');
  eq(MR.conic({ A: 1, C: 1, F: 4 }).type, 'empty', 'x²+y²=−4'); eq(MR.conic({ A: 1, C: 1 }).type, 'degenerate', 'point');
  for (const [kind, o] of [['ellipse', { h: 1, k: -2, X2: 9, Y2: 4 }], ['hyperbola', { h: -1, k: 3, X2: 4, Y2: -9 }]]) { const G = MR.conicGeneral(kind, o), back = MR.conic(G); eq([back.type, S(back.h), S(back.k)], [kind, String(o.h), String(o.k)], 'round trip ' + kind); }
  const pg = MR.conic(MR.conicGeneral('parabolaV', { h: 2, k: 1, p: 2 })); eq([pg.type, S(pg.h), S(pg.k), S(pg.p)], ['parabola', '2', '1', '2'], 'round trip parabola');
});

test('numeric zeros and intersections', () => {
  const z = MR.zeros(x => x * x * x - x, -3, 3); eq(z.length, 3, 'three zeros'); [-1, 0, 1].forEach((v, i) => near(z[i], v, 'zero ' + v, 1e-9));
  const t = MR.zeros(x => (x - 1) * (x - 1), -3, 3); eq(t.length, 1, 'touching zero found'); near(t[0], 1, 'double root', 1e-6);
  eq(MR.zeros(x => 1 / x, -2, 2).length, 0, 'pole is not a zero');
  const I = MR.intersect(x => x * x, x => x + 2, -5, 5); eq(I.map(p => Math.round(p.x)), [-1, 2], 'x² = x + 2');
});

test('ticks and label placement', () => {
  eq(MR.niceStep(20), 2, '20 → 2'); eq(MR.niceStep(7), 1, '7 → 1'); eq(MR.niceStep(0.9), 0.1, '0.9 → 0.1'); eq(MR.ticks(-1, 1, 0.5), [-1, -0.5, 0, 0.5, 1], 'ticks');
  const bounds = { x: 0, y: 0, w: 300, h: 200 };
  const L = MR.placeLabels([{ x: 100, y: 100, w: 40, h: 16 }, { x: 104, y: 100, w: 40, h: 16 }, { x: 98, y: 102, w: 40, h: 16 }], { bounds });
  const ov = (a, b) => Math.min(a.x + a.w, b.x + b.w) > Math.max(a.x, b.x) && Math.min(a.y + a.h, b.y + b.h) > Math.max(a.y, b.y);
  ok(!ov(L[0], L[1]) && !ov(L[0], L[2]) && !ov(L[1], L[2]), 'three labels at one point do not overlap');
  const edge = MR.placeLabels([{ x: 295, y: 5, w: 50, h: 16 }], { bounds })[0]; ok(edge.x >= 0 && edge.x + edge.w <= 300 && edge.y >= 0, 'label at the corner stays inside');
  const pts = []; for (let x = 0; x <= 300; x += 3) pts.push([x, 100 - (x - 100)]);   // a line through the anchor going up-right
  const c = MR.placeLabels([{ x: 100, y: 100, w: 30, h: 14 }], { bounds, pts })[0]; eq(c.cost < 1, true, 'finds a spot off the curve'); ok(!pts.some(([px, py]) => px > c.x && px < c.x + c.w && py > c.y && py < c.y + c.h), 'no curve sample under the label');
  const box = { x: 90, y: 60, w: 80, h: 40 }; const b = MR.placeLabels([{ x: 100, y: 100, w: 30, h: 14 }], { bounds, boxes: [box] })[0]; ok(!ov(b, box), 'avoids a box');
});

test('reveal guard and formatters', () => {
  eq([MR.factorStr(3), MR.factorStr(-2), MR.factorStr(Q(1, 2)), MR.factorStr(Q(-1, 2), { integer: true }), MR.factorStr(0)], ['x − 3', 'x + 2', 'x − 1/2', '2x + 1', 'x'], 'factorStr');
  eq(MR.reveal(['a', 'b', 'c'], 0), ['a', null, null], 'only the first step'); eq(MR.reveal(['a', 'b', 'c'], 2), ['a', 'b', 'c'], 'all');
  eq(MR.fmtN(-0.0001, 2), '0', 'no negative zero'); eq(MR.fmtN(-2.5, 1), '−2.5', 'unicode minus'); eq(MR.qT(Q(-3, 4)), '−3/4', 'qT'); eq(MR.radStr(Q(3), 2), '3√2', 'radStr'); eq(MR.radStr(Q(-1), 5), '−√5', '−√5');
  ok(MR.qH(Q(-1, 2)).includes('class="fr"'), 'qH fraction markup'); eq(MR.zH(Z(2, -1)), '<span class="m">2</span> − <i>i</i>', 'zH');
});
