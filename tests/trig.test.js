// Logic tests for the trigonometry rules (web/src/kit-trig.js → MathRules additions).
const MR = load('web/src/kit-math.js', 'web/src/kit-trig.js').MathRules;
const { Q } = MR, PI = Math.PI;
const near = (a, b, what, tol = 1e-9) => ok(Math.abs(a - b) < tol, `${what}: got ${a}, want ${b}`);
const FN = { sin: Math.sin, cos: Math.cos, tan: Math.tan, csc: t => 1 / Math.sin(t), sec: t => 1 / Math.cos(t), cot: t => Math.cos(t) / Math.sin(t) };

test('exact values of all six functions at every multiple of π/12 (−2π … 4π)', () => {
  for (const f of Object.keys(FN)) for (let n = -24; n <= 48; n++) {
    const q = Q(n, 12), v = MR.trigExact(f, q), num = FN[f](n * PI / 12);
    if (Math.abs(num) > 1e6) ok(v.undef, `${f}(${n}π/12) undefined`); else { ok(!v.undef, `${f}(${n}π/12) defined`); near(v.value, num, `${f}(${n}π/12)`); }
  }
  eq(MR.trigExact('sin', Q(1, 5)), null, 'π/5 is not exact here');
  eq([MR.trigExact('cos', Q(5, 6)).text, MR.trigExact('tan', Q(7, 12)).text, MR.trigExact('sec', 135, { deg: true }).text, MR.trigExact('sin', Q(-1, 3)).text], ['−√3/2', '−2 − √3', '−√2', '−√3/2'], 'text forms');
  eq(MR.trigExact('csc', Q(4, 3)).text, '−2√3/3', 'rationalised');
});

test('angles: quadrant, reference angle, coterminal, π text, DMS', () => {
  eq([MR.quadrant(Q(5, 6)), MR.quadrant(Q(7, 4)), MR.quadrant(Q(1)), MR.quadrant(-30, { deg: true }), MR.quadrant(400, { deg: true })], [2, 4, 0, 4, 1], 'quadrants');
  eq(MR.axisOf(Q(3, 2)), '−y', 'axis');
  eq([MR.refAngle(Q(5, 6)), MR.refAngle(Q(4, 3)), MR.refAngle(Q(-1, 4)), MR.refAngle(Q(11, 6))].map(String), ['1/6', '1/3', '1/4', '1/6'], 'reference angles');
  eq([MR.refAngle(225, { deg: true }), MR.refAngle(-200, { deg: true }), MR.refAngle(480, { deg: true })], [45, 20, 60], 'reference degrees');
  eq(String(MR.normQ(Q(-7, 4))), '1/4', 'normalise'); eq(MR.coterminal(-45, 1, { deg: true }), 315, 'coterminal');
  eq([MR.piT(Q(5, 6)), MR.piT(Q(-1, 2)), MR.piT(Q(2)), MR.piT(Q(1)), MR.piT(Q(0))], ['5π/6', '−π/2', '2π', 'π', '0'], 'piT');
  eq(String(MR.degQ(150)), '5/6', 'degrees → π'); eq(MR.qDeg(Q(7, 4)), 315, 'π → degrees'); eq(String(MR.piQ(3 * PI / 4)), '3/4', 'piQ');
  const d = MR.dms(35.425); eq([d.d, d.m, d.s], [35, 25, 30], '35.425° = 35°25′30″'); near(MR.fromDms(35, 25, 30), 35.425, 'back');
  eq(MR.dms(-12.5).text, '−12° 30′ 0″', 'negative'); eq(MR.dms(29.99999999).text, '30° 0′ 0″', 'rounding carries');
});

test('trigSolve: every solution satisfies the equation and none is missed', () => {
  const cases = [['sin', .5, {}], ['sin', -Math.sqrt(3) / 2, {}], ['cos', -1, {}], ['cos', 0, {}], ['tan', -1, {}], ['sin', 1, { B: 2 }], ['cos', .5, { B: 3 }], ['tan', Math.sqrt(3), { B: 2, C: PI / 6 }], ['sec', 2, {}], ['csc', -2, { B: 2 }], ['cot', 1, {}], ['sin', .3, {}]];
  for (const [f, k, o] of cases) {
    const R = MR.trigSolve(f, k, o), B = o.B || 1, C = o.C || 0, g = x => FN[f](B * (x - C)) - k;
    R.sols.forEach(s => { ok(s.x >= -1e-12 && s.x < 2 * PI, 'in [0, 2π)'); near(g(s.x), 0, `${f}=${k} at ${s.x}`, 1e-7); });
    let cnt = 0; const N = 200000; for (let i = 0; i < N; i++) { const a = 2 * PI * i / N, b = 2 * PI * (i + 1) / N, ga = g(a), gb = g(b); if (Math.abs(ga) < 1e-12 || (ga * gb < 0 && Math.abs(ga - gb) < 1)) cnt++; }
    const touch = (f === 'sin' || f === 'cos') && Math.abs(Math.abs(k) - 1) < 1e-12;   // tangency: count by hand
    if (!touch) eq(R.sols.length, cnt, `${f} = ${k} count`);
  }
  eq(MR.trigSolve('sin', 1).sols.map(s => MR.piT(s.q)), ['π/2'], 'sin x = 1'); eq(MR.trigSolve('cos', 1).sols.map(s => MR.piT(s.q)), ['0'], 'cos x = 1');
  eq(MR.trigSolve('sin', 2).none, true, 'no solution'); eq(MR.trigSolve('sec', .5).none, true, 'sec x = 1/2 none');
  eq(MR.trigSolve('tan', 1).general, ['x = π/4 + πn'], 'tan general'); eq(MR.trigSolve('sin', .5, { B: 2 }).sols.map(s => MR.piT(s.q)), ['π/12', '5π/12', '13π/12', '17π/12'], 'sin 2x = 1/2');
});

test('solveTriangle: all cases satisfy the laws of sines and cosines', () => {
  const law = t => { const r = t.a / MR.sinD(t.A); near(t.b / MR.sinD(t.B), r, 'law of sines b', 1e-7); near(t.c / MR.sinD(t.C), r, 'law of sines c', 1e-7); near(t.c * t.c, t.a * t.a + t.b * t.b - 2 * t.a * t.b * MR.cosD(t.C), 'law of cosines', 1e-6); near(t.A + t.B + t.C, 180, 'sum', 1e-9); };
  const ref = { a: 7, b: 9, c: 12 }; const full = MR.solveTriangle(ref).tris[0]; law(full);
  for (const g of [{ a: 7, b: 9, c: 12 }, { a: 7, b: 9, C: full.C }, { A: full.A, B: full.B, c: 12 }, { A: full.A, C: full.C, a: 7 }, { b: 9, c: 12, A: full.A }]) { const R = MR.solveTriangle(g); eq(R.count, 1, R.kind); law(R.tris[0]); ['a', 'b', 'c'].forEach(s => near(R.tris[0][s], full[s], `${R.kind} ${s}`, 1e-7)); }
  eq(MR.solveTriangle({ a: 7, b: 9, C: 30 }).kind, 'SAS', 'SAS'); eq(MR.solveTriangle({ a: 1, b: 2, c: 4 }).count, 0, 'triangle inequality');
  eq(MR.solveTriangle({ A: 100, B: 90, a: 3 }).count, 0, 'angles over 180');
  // SSA: compare the count with a brute-force construction (side a swings from C, how many points on ray AB)
  for (const [A, b, a] of [[40, 10, 5], [40, 10, 10 * MR.sinD(40)], [40, 10, 7], [40, 10, 12], [120, 5, 7], [120, 7, 5], [90, 5, 5], [30, 10, 5]]) {
    const R = MR.solveTriangle({ A, b, a }), h = b * MR.sinD(A); R.tris.forEach(law);
    const ax = b * MR.cosD(A), disc = a * a - h * h; let want = 0; if (disc >= -1e-12) { const r = Math.sqrt(Math.max(0, disc)); want = [ax - r, ax + r].filter((x, i, s) => x > 1e-9 && (i === 0 || Math.abs(x - s[0]) > 1e-6)).length; }
    eq(R.count, want, `SSA A=${A}, b=${b}, a=${a}`); eq(R.case, want, 'case number');
  }
});

test('areas, vectors, polar and complex polar form', () => {
  near(MR.heron(3, 4, 5), 6, 'Heron 3-4-5'); near(MR.triArea(3, 4, 90), 6, 'SAS area'); near(MR.heron(13, 14, 15), 84, '13-14-15');
  const V = MR.V; near(V.mag([3, -4]), 5, 'mag'); near(V.dir([-1, 1]), 135, 'dir QII'); near(V.dir([-1, -1]), 225, 'dir QIII'); near(V.dir([1, -1]), 315, 'dir QIV'); near(V.naiveDir([-1, 1]), -45, 'naive tan⁻¹ is wrong in QII');
  const u = V.fromPolar(10, 30); near(u[0], 5 * Math.sqrt(3), 'x comp'); near(u[1], 5, 'y comp');
  near(V.dot([2, 3], [4, -1]), 5, 'dot'); near(V.angle([1, 0], [1, 1]), 45, 'angle'); eq(V.proj([3, 4], [1, 0]), [3, 0], 'proj'); near(V.comp([3, 4], [0, 2]), 4, 'scalar comp');
  near(V.fromBearing(30), 60, 'bearing 030° → 60°'); near(V.toBearing(135), 315, '135° → bearing 315°');
  const p = MR.toPolar(-1, Math.sqrt(3)); near(p.r, 2, 'r'); near(p.t, 2 * PI / 3, 'θ'); const b = MR.toRect(2, 2 * PI / 3); near(b.x, -1, 'x'); near(b.y, Math.sqrt(3), 'y');
  MR.polarNames(3, Q(1, 6)).forEach(n => { const r = MR.toRect(n.r, MR.qRad(n.q)), r0 = MR.toRect(3, PI / 6); near(r.x, r0.x, 'same point x'); near(r.y, r0.y, 'same point y'); });
  const C = MR.cplx, z = C.mul({ r: 2, t: PI / 3 }, { r: 3, t: PI / 6 }), w = C.cis(z.r, z.t); near(w.re, 0, 'product re'); near(w.im, 6, 'product im');
  const R = C.roots(8, PI, 3, Q(1)); eq(R.map(r => MR.piT(r.q)), ['π/3', 'π', '5π/3'], 'cube roots of −8'); R.forEach(r => { const v = C.cis(r.r, r.t), p3 = C.pow({ r: r.r, t: r.t }, 3), c3 = C.cis(p3.r, p3.t); near(c3.re, -8, 'root³ re', 1e-9); near(c3.im, 0, 'root³ im', 1e-9); });
  const pw = C.pow({ r: Math.SQRT2, t: PI / 4 }, 8), c8 = C.cis(pw.r, pw.t); near(c8.re, 16, '(1+i)^8'); near(c8.im, 0, '(1+i)^8 im');
});

test('exact values from a point, sides and the unit circle', () => {
  const s = MR.sixFrom(-3, 4); eq([s.r.text, s.sin.text, s.cos.text, s.tan.text, s.csc.text, s.sec.text, s.cot.text], ['5', '4/5', '−3/5', '−4/3', '5/4', '−5/3', '−3/4'], '(−3, 4)');
  const t = MR.sixFrom(2, -1); eq([t.r.text, t.sin.text, t.cos.text, t.csc.text], ['√5', '−√5/5', '2√5/5', '−√5'], '(2, −1)');
  const a = MR.sixFrom(0, -2); eq([a.sin.text, a.cos.text, a.tan.text, a.sec.text, a.cot.text], ['−1', '0', 'undefined', 'undefined', '0'], 'on the −y axis');
  for (const [x, y] of [[1, 1], [-2, 3], [5, -12], [-1, -7], [3, 0]]) { const r = Math.hypot(x, y), S = MR.sixFrom(x, y), th = Math.atan2(y, x);
    for (const f of Object.keys(FN)) { const num = FN[f](th); if (Math.abs(num) > 1e6) ok(S[f].undef, `${f} undefined at (${x},${y})`); else near(S[f].value, num, `${f} at (${x}, ${y})`); } }
  eq([MR.sideT(41), MR.sideT(8), MR.sideT(25)], ['√41', '2√2', '5'], 'sideT'); eq(MR.sqrtRatio(9, 41).text, '3√41/41', 'sqrtRatio');
  eq(MR.ucPoint(Q(5, 6)).text, '(−√3/2, 1/2)', 'ucPoint 5π/6'); eq(MR.ucPoint(Q(3, 2)).text, '(0, −1)', 'ucPoint 3π/2');
});

test('sinusoids: functions, key points, periods, asymptotes, equation text', () => {
  const f = MR.sinusoid('sin', 2, 3, PI / 4, 1); near(f(PI / 4), 1, 'starts on the midline'); near(f(PI / 4 + PI / 6), 3, 'max a quarter period later');
  const K = MR.keyPts('sin', 2, 3, PI / 4, 1); eq(K.length, 5, 'five points'); K.forEach(p => near(f(p.x), p.y, 'key point on curve')); near(K[4].x - K[0].x, 2 * PI / 3, 'one period');
  const Kc = MR.keyPts('cos', -1, 1, 0, 0); Kc.forEach(p => near(-Math.cos(p.x), p.y, 'cos key point'));
  const Kt = MR.keyPts('tan', 1, 2, 0, 0); Kt.forEach(p => near(Math.tan(2 * p.x), p.y, 'tan key point'));
  const Kk = MR.keyPts('cot', 1, 1, 0, 0); Kk.forEach(p => near(1 / Math.tan(p.x), p.y, 'cot key point'));
  near(MR.period('tan', 2), PI / 2, 'tan period'); near(MR.period('sin', 0.5), 4 * PI, 'sin period');
  const A = MR.asymptotes('tan', 1, 0, -PI, PI); eq(A.length, 2, 'tan asymptotes in [−π, π]'); A.forEach(x => ok(Math.abs(Math.cos(x)) < 1e-9, 'cos = 0 there'));
  MR.asymptotes('csc', 2, PI / 3, 0, 2 * PI).forEach(x => ok(Math.abs(Math.sin(2 * (x - PI / 3))) < 1e-9, 'csc asymptote')); eq(MR.asymptotes('sin'), [], 'sin has none');
  ok(MR.sameCurve(x => Math.cos(x), MR.sinusoid('sin', 1, 1, -PI / 2, 0)), 'cos x = sin(x + π/2)'); ok(!MR.sameCurve(Math.sin, Math.cos), 'sin ≠ cos');
  eq(MR.sinEq('sin', 2, 3, PI / 4, 1), 'y = 2 sin(3(x − π/4)) + 1', 'text'); eq(MR.sinEq('cos', -1, 0.5, -PI / 3, -2), 'y = −cos((1/2)(x + π/3)) − 2', 'negative A, fractional B');
  eq(MR.sinEq('tan', 1, 1, 0, 0), 'y = tan(x)', 'plain'); eq(MR.piFmt(5 * PI / 6), '5π/6', 'piFmt'); eq(MR.piFmt(1.25), '1.25', 'piFmt decimal');
});

test('which law', () => {
  eq(['AAS', 'ASA', 'SSA', 'SAS', 'SSS', 'AAA'].map(MR.lawFor), ['sines', 'sines', 'sines', 'cosines', 'cosines', null], 'lawFor');
  for (const g of [{ a: 3, b: 4, c: 5 }, { a: 3, b: 4, C: 50 }, { A: 30, B: 70, c: 4 }, { A: 30, b: 8, a: 5 }]) ok(MR.lawFor(MR.solveTriangle(g).kind), 'kind has a law');
});
