/* ============ Labs: Pre-Algebra 1 (expressions, equations, relations, functions) ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;
const sg = n => n < 0 ? "−" + Math.abs(n) : String(n);
const pn = n => n < 0 ? "(−" + Math.abs(n) + ")" : String(n);
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const ease = t => t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t);

/* ---- exact rationals ---- */
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const Q = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const qa = (a, b) => Q(a.n * b.d + b.n * a.d, a.d * b.d);
const qs = (a, b) => Q(a.n * b.d - b.n * a.d, a.d * b.d);
const qm = (a, b) => Q(a.n * b.n, a.d * b.d);
const qd = (a, b) => b.n === 0 ? null : Q(a.n * b.d, a.d * b.n);
const qp = (a, e) => { let r = Q(1); for (let i = 0; i < Math.abs(e); i++) r = qm(r, a); return e < 0 ? qd(Q(1), r) : r; };
const qv = a => a.n / a.d;
const qeq = (a, b) => a.n === b.n && a.d === b.d;
const qt = a => a.d === 1 ? sg(a.n) : sg(a.n) + "/" + a.d;
const FRH = (n, d) => `<span class="fr"><span>${n}</span><span>${d}</span></span>`;
const qh = a => a.d === 1 ? sg(a.n) : (a.n < 0 ? "−" : "") + FRH(Math.abs(a.n), a.d);

/* ---- canvas text runs: parts = [[text, color, font?], …] ---- */
function runs(d, parts, x, y, font, align = "center", base){
  const ws = parts.map(p => d.width(p[0], p[2] || font)); const tot = ws.reduce((s, v) => s + v, 0);
  let cx = align === "center" ? x - tot / 2 : align === "right" ? x - tot : x;
  parts.forEach((p, i) => { d.text(p[0], cx, y, { font: p[2] || font, color: p[1], base }); cx += ws[i]; });
  return tot;
}
// shrink a font size until the parts fit maxW
function fitSize(d, parts, size, family, maxW, weight = ""){
  let s = size; while (s > 11) { const f = `${weight}${s}px ${family}`; const tot = parts.reduce((a, p) => a + d.width(p[0], p[2] ? p[2].replace(/\d+px/, s + "px") : f), 0); if (tot <= maxW) break; s -= 1; }
  return s;
}

/* ---- balance scale (pa-equations, pa-one-step) ---- */
function flow(items, cx, baseY, maxW, gap){
  const rows = []; let row = [], rw = 0;
  items.forEach(it => { if (row.length && rw + it.w > maxW) { rows.push([row, rw - gap]); row = []; rw = 0; } row.push(it); rw += it.w + gap; });
  if (row.length) rows.push([row, rw - gap]);
  let y = baseY;
  rows.forEach(([r, w]) => { const hh = Math.max(...r.map(i => i.h)); let x = cx - w / 2; r.forEach(it => { it.draw(x, y - it.h); x += it.w + gap; }); y -= hh + gap; });
  return baseY - y;
}
function drawScale(k, c, o){
  const { C, F } = k, d = c.d, g = c.g;
  const ca = Math.cos(o.ang), sa = Math.sin(o.ang);
  const ends = [[o.cx - o.hl * ca, o.py + o.hl * sa], [o.cx + o.hl * ca, o.py - o.hl * sa]];
  // stand
  g.save(); g.fillStyle = k.alpha(C.line2, .55); g.strokeStyle = C.muted; g.lineWidth = 1.5; g.beginPath(); g.moveTo(o.cx, o.py); g.lineTo(o.cx - 16, o.baseY); g.lineTo(o.cx + 16, o.baseY); g.closePath(); g.fill(); g.stroke(); g.restore();
  d.rr(o.cx - 60, o.baseY, 120, 8, 3, k.alpha(C.line2, .8), C.muted, 1);
  // pans
  [0, 1].forEach(i => {
    const [ex, ey] = ends[i], col = i ? o.rightCol : o.leftCol, py = ey + o.hang;
    d.line(ex, ey, ex - o.pw / 2 + 6, py, k.alpha(C.muted, .7), 1.2); d.line(ex, ey, ex + o.pw / 2 - 6, py, k.alpha(C.muted, .7), 1.2);
    const used = flow(i ? o.right : o.left, ex, py - 3, o.pw - 14, o.gap || 3);
    const tag = i ? o.rightTag : o.leftTag;
    if (tag) { const f = `600 ${o.tagSize || 15}px ${F.math}`, tw = d.width(tag, f) + 18, ty = py - used - 30; d.rr(ex - tw / 2, ty, tw, 24, 12, k.alpha(C.amber, .2), C.amber, 1.5); d.text(tag, ex, ty + 13, { font: f, color: C.amber, align: "center", base: "middle" }); }
    d.rr(ex - o.pw / 2, py, o.pw, 7, 3, k.alpha(col, .45), col, 1.5);
    if (o.labels && o.labels[i]) runs(d, o.labels[i], ex, py + 26, `16px ${F.math}`);
  });
  d.line(ends[0][0], ends[0][1], ends[1][0], ends[1][1], o.beamCol, 5);
  d.circle(o.cx, o.py, 6, o.beamCol);
  return ends;
}
function bagItem(k, d, s, label, col, sub){
  const { C, F } = k;
  return { w: s * 1.25, h: s * 1.45, draw(x, y){ const g = d; const w = s * 1.25, h = s * 1.45;
    g.rr(x + w * .3, y, w * .4, h * .18, 3, k.alpha(col, .5), col, 1.2);
    g.rr(x, y + h * .16, w, h * .84, s * .3, k.alpha(col, .28), col, 1.8);
    g.text(label, x + w / 2, y + h * .6, { font: `italic ${Math.round(s * .62)}px ${F.math}`, color: C.text, align: "center", base: "middle" });
    if (sub) g.text(sub, x + w / 2, y + h * .88, { font: `${Math.max(9, Math.round(s * .3))}px ${F.mono}`, color: col, align: "center", base: "middle" }); } };
}
function unitItem(k, d, s, col){ return { w: s, h: s, draw(x, y){ d.rr(x, y, s, s, 3, k.alpha(col, .55), col, 1.2); } }; }
function boxItem(k, d, s, label, col, textCol, strike){
  const { C, F } = k; const f = `${Math.round(s * .5)}px ${F.math}`; const w = Math.max(s * 1.1, d.width(label, f) + s * .6);
  return { w, h: s, draw(x, y){ d.rr(x, y, w, s, 5, k.alpha(col, .25), col, 1.6); d.text(label, x + w / 2, y + s / 2 + 1, { font: f, color: textCol || C.text, align: "center", base: "middle" }); if (strike) d.line(x + 3, y + s - 3, x + w - 3, y + 3, C.amber, 2); } };
}

/* =================================================================== */
/* ---------- pa-variables: cups and counters ---------- */
L["pa-variables"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let x = 4, a = 3, b = 2, open = true, shown = 4, acc = 0;
  k.slider(`<span class="c2"><i>x</i></span>`, 0, 9, 1, x, v => x = v);
  k.slider(`<span class="c3">cups</span>`, 1, 5, 1, a, v => a = v);
  k.slider(`<span class="c4">loose</span>`, 0, 9, 1, b, v => b = v);
  k.check("Look inside the cups", true, v => open = v);
  k.hint("Every cup holds the same number, x");
  const cup = (cx, top, W, H) => { const g = c.g; g.beginPath(); g.moveTo(cx - W / 2, top); g.lineTo(cx + W / 2, top); g.lineTo(cx + W * .36, top + H); g.lineTo(cx - W * .36, top + H); g.closePath(); g.fillStyle = k.alpha(C.pink, open ? .08 : .32); g.fill(); g.strokeStyle = C.pink; g.lineWidth = 2; g.stroke(); d.line(cx - W / 2 - 3, top, cx + W / 2 + 3, top, C.pink, 3); };
  const dots = (cx, top, W, n, col) => { const r = W * .085; for (let i = 0; i < n; i++) { const col3 = i % 3, row = Math.floor(i / 3); d.circle(cx + (col3 - 1) * W * .22, top + W * .2 + row * W * .24, r, col); } };
  k.loop(dt => {
    acc += dt; if (acc > (k.reduce ? 0 : .07)) { acc = 0; if (shown < x) shown++; else if (shown > x) shown--; }
    c.begin(); const { w, h } = c;
    const val = a * x + b;
    const head = [[a === 1 ? "" : String(a), C.pink], ["x", C.cyan, `italic ${0}px ${F.math}`]];
    if (b) head.push([" + ", C.text], [String(b), C.violet]);
    head.push([" = ", C.text], [open ? String(val) : "?", open ? C.amber : C.muted]);
    const fs = fitSize(d, head.map(p => [p[0]]), Math.min(40, w / 9), F.math, w - 40);
    head[1][2] = `italic ${fs}px ${F.math}`;
    runs(d, head, w / 2, 16 + fs, `${fs}px ${F.math}`);
    // cups + loose box
    const items = a + (b ? 1 : 0), per = w < 520 ? 3 : 6, rows = Math.ceil(items / per);
    const top0 = fs + 44, bottom = h - 64, cellH = (bottom - top0) / rows, cellW = (w - 24) / Math.min(items, per);
    const W = Math.max(30, Math.min(120, cellW * .74, (cellH - 40) / 1.05)), H = W * 1.05;
    for (let i = 0; i < items; i++) {
      const r = Math.floor(i / per), inRow = Math.min(per, items - r * per), ci = i - r * per;
      const cx = w / 2 + (ci - (inRow - 1) / 2) * cellW, top = top0 + r * cellH + (cellH - H - 34) / 2;
      if (i < a) {
        cup(cx, top, W, H);
        if (open) dots(cx, top, W, shown, C.cyan);
        else d.text("x", cx, top + H * .5, { font: `italic ${Math.round(W * .5)}px ${F.math}`, color: C.cyan, align: "center", base: "middle" });
        runs(d, [["x", C.cyan, `italic 16px ${F.math}`], [open ? ` = ${x}` : " = ?", C.muted]], cx, top + H + 22, `15px ${F.math}`);
      } else {
        c.g.save(); c.g.setLineDash([5, 4]); d.rr(cx - W / 2, top, W, H, 8, k.alpha(C.violet, .06), k.alpha(C.violet, .8), 1.5); c.g.restore();
        dots(cx, top, W, b, C.violet);
        d.text(`+ ${b} loose`, cx, top + H + 22, { font: `15px ${F.math}`, color: C.violet, align: "center" });
      }
    }
    // bottom: substitution line
    const bl = open ? [[String(a), C.pink], [" · ", C.text], [String(x), C.cyan]].concat(b ? [[" + ", C.text], [String(b), C.violet]] : []).concat([[" = ", C.text], [String(val), C.amber]])
      : [["Close the cups and the value is unknown until you know ", C.muted], ["x", C.cyan]];
    const bf = open ? 22 : fitSize(d, bl, 14, F.sans, w - 30);
    runs(d, bl, w / 2, h - 28, open ? `22px ${F.math}` : `${bf}px ${F.sans}`);
    const exH = `<span class="c3">${a === 1 ? "" : a}</span><i class="c2">x</i>${b ? ` + <span class="c4">${b}</span>` : ""}`;
    k.setRO(`<div><h2>Value of the expression</h2><div class="ro-big" style="margin-top:8px">${M(exH)} = <span class="num ${open ? "c1" : ""}">${open ? val : "?"}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2"><i>x</i></span> = <span class="v c2">${open ? x : "?"}</span><span class="lbl">the variable: counters in each cup; it can change</span></div>
        <div class="row"><span class="m c3">coefficient</span> <span class="v c3">${a}</span><span class="lbl">how many cups: it multiplies x${a === 1 ? " (a coefficient of 1 is not written)" : ""}</span></div>
        <div class="row"><span class="m c4">constant</span> <span class="v c4">${b}</span><span class="lbl">loose counters: this term never changes</span></div>
        <div class="row">${M(`terms: <span class="c3">${a === 1 ? "" : a}</span><i class="c2">x</i>${b ? `, <span class="c4">${b}</span>` : ""}`)}<span class="lbl">parts joined by + or −</span></div>
      </div>
      <div class="landmark${open && x === 0 ? " hit" : ""}">${!open ? `<div class="big">${M(`${exH} = ?`)}</div><div class="note">An expression with a variable has no single value. It gets one when you choose x.</div>`
        : x === 0 ? `<div class="big">${M(`<span class="c3">${a}</span> · <span class="c2">0</span> + <span class="c4">${b}</span> = <span class="c1">${b}</span>`)}</div><div class="note">Empty cups: only the constant is left.</div>`
        : `<div class="big">${M(`<span class="c3">${a}</span> × <span class="c2">${x}</span> = ${a * x} in cups${b ? `, + <span class="c4">${b}</span> loose` : ""}`)}</div><div class="note">${a}${"x"} means ${a} times x: ${a} cups, each holding x counters.</div>`}</div>
      <p class="narr">Change x and every cup changes together. The constant stays put.</p>`);
  });
};

/* ---------- pa-coordinate: draggable point ---------- */
L["pa-coordinate"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let px = 3, py = 2, ex = 3, ey = 2, drag = false, P = null;
  const setFrom = e => { if (!P) return; const q = c.xy(e), v = P.inv(q.x, q.y); const lx = Math.min(9, Math.floor(P.xmax)), ly = Math.min(9, Math.floor(P.ymax)); px = Math.max(-lx, Math.min(lx, Math.round(v.x))); py = Math.max(-ly, Math.min(ly, Math.round(v.y))); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setFrom(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setFrom(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "crosshair";
  k.button("Reflect in x-axis", () => py = -py, "btn ghost");
  k.button("Reflect in y-axis", () => px = -px, "btn ghost");
  k.button("Random point", () => { px = rnd(-6, 6); py = rnd(-6, 6); }, "btn ghost");
  k.hint("Drag the point; it snaps to whole numbers");
  const quad = (x, y) => x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : x > 0 && y < 0 ? 4 : 0;
  const RN = ["", "I", "II", "III", "IV"], SG = ["", "(+, +)", "(−, +)", "(−, −)", "(+, −)"];
  k.loop(dt => {
    ex = lerp(ex, px, Math.min(1, dt * 14)); ey = lerp(ey, py, Math.min(1, dt * 14));
    c.begin(); const { w, h } = c;
    P = k.plot(c, { xmin: -7, xmax: 7, ymin: -7, ymax: 7, equal: true, xstep: 1, ystep: 1, pad: { l: 16, r: 16, t: 16, b: 16 } });
    const q = quad(px, py), X0 = P.X(0), Y0 = P.Y(0), R = P.left + P.width, B = P.top + P.height;
    const shade = [null, [X0, P.top, R - X0, Y0 - P.top], [P.left, P.top, X0 - P.left, Y0 - P.top], [P.left, Y0, X0 - P.left, B - Y0], [X0, Y0, R - X0, B - Y0]];
    for (let i = 1; i <= 4; i++) d.rect(...shade[i], k.alpha(C.violet, i === q ? .16 : .045));
    P.grid(); P.axes();
    d.text("x", R - 4, Y0 - 8, { font: `italic 15px ${F.math}`, color: C.muted, align: "right" });
    d.text("y", X0 + 8, P.top + 14, { font: `italic 15px ${F.math}`, color: C.muted });
    const qx = Math.min(P.xmax, 7) / 2, qy = Math.min(P.ymax, 7) / 2;
    [[1, qx, qy], [2, -qx, qy], [3, -qx, -qy], [4, qx, -qy]].forEach(([i, x, y]) => { d.text(RN[i], P.X(x), P.Y(y), { font: `${i === q ? 600 : 400} 22px ${F.math}`, color: k.alpha(C.violet, i === q ? 1 : .55), align: "center", base: "middle" }); d.text(SG[i], P.X(x), P.Y(y) + 20, { font: `12px ${F.mono}`, color: k.alpha(C.violet, i === q ? .9 : .45), align: "center", base: "middle" }); });
    const X = P.X(ex), Y = P.Y(ey);
    d.line(X, Y, X, Y0, C.cyan, 2, [5, 4]); d.line(X, Y, X0, Y, C.pink, 2, [5, 4]);
    // coordinate tags on the axes
    const tag = (s, x, y, col) => { const f = `600 13px ${F.mono}`, tw = d.width(s, f) + 10; d.rr(x - tw / 2, y - 10, tw, 20, 4, C.ink, col, 1.5); d.text(s, x, y + 1, { font: f, color: col, align: "center", base: "middle" }); };
    if (px !== 0) tag(sg(px), X, Y0 + (py > 0 ? 16 : -16), C.cyan);
    if (py !== 0) tag(sg(py), X0 + (px > 0 ? -18 : 18), Y, C.pink);
    d.circle(X, Y, 9, C.amber); d.circle(X, Y, 14, null, k.alpha(C.amber, .35), 2);
    const lab = [["(", C.text], [sg(px), C.cyan], [", ", C.text], [sg(py), C.pink], [")", C.text]];
    const lw = lab.reduce((s, p) => s + d.width(p[0], `600 17px ${F.math}`), 0);
    const lx = X + 16 + lw > R ? X - 16 - lw : X + 16, ly = Y - 16 < P.top + 14 ? Y + 26 : Y - 16;
    d.rr(lx - 5, ly - 16, lw + 10, 22, 4, k.alpha(C.ink, .8));
    runs(d, lab, lx, ly, `600 17px ${F.math}`, "left");
    const dirx = px > 0 ? `${px} right` : px < 0 ? `${-px} left` : "no move left or right";
    const diry = py > 0 ? `${py} up` : py < 0 ? `${-py} down` : "no move up or down";
    const special = px === 0 && py === 0 ? ["the origin", "Both coordinates are 0. The axes cross here, and it belongs to no quadrant."]
      : px === 0 ? ["on the y-axis", "x = 0, so the point sits on the y-axis, between quadrants. Points on an axis belong to no quadrant."]
      : py === 0 ? ["on the x-axis", "y = 0, so the point sits on the x-axis, between quadrants. Points on an axis belong to no quadrant."] : null;
    k.setRO(`<div><h2>Ordered pair</h2><div class="ro-big" style="margin-top:8px"><span class="c1">(</span><span class="c2">${sg(px)}</span><span class="c1">, </span><span class="c3">${sg(py)}</span><span class="c1">)</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2"><i>x</i></span> = <span class="v c2">${sg(px)}</span><span class="lbl">first: move ${dirx} from the origin</span></div>
        <div class="row"><span class="m c3"><i>y</i></span> = <span class="v c3">${sg(py)}</span><span class="lbl">second: move ${diry}</span></div>
        <div class="row"><span class="m c4">quadrant</span> <span class="v c4">${q ? RN[q] : "none"}</span><span class="lbl">${q ? `signs ${SG[q]}` : "the point is on an axis"}</span></div>
        <div class="row">${M(`(${sg(py)}, ${sg(px)})`)}<span class="lbl">${px === py ? "swapping gives the same point, because x = y" : "swapping the order names a different point"}</span></div>
      </div>
      <div class="landmark${special ? " hit" : ""}">${special ? `<div class="big">${M(`(${sg(px)}, ${sg(py)}) is ${special[0]}`)}</div><div class="note">${special[1]}</div>` : `<div class="big">${M(`Quadrant <span class="c4">${RN[q]}</span>: ${SG[q]}`)}</div><div class="note">Quadrants are numbered I to IV counterclockwise, starting top right. The signs of x and y decide the quadrant.</div>`}</div>
      <p class="narr">Reflect in an axis and watch which coordinate changes sign.</p>`);
  });
};

/* ---------- pa-translate: phrase builder (DOM) ---------- */
L["pa-translate"] = k => {
  const { M } = k; const dom = k.dom();
  const V = ["x", "v"], PL = ["+", "k"], MI = ["−", "k"], DI = ["÷", "k"], n = s => [s, "n"];
  const PH = [
    { name: "five more than a number", w: [["five", "n"], ["more than", "k"], ["a number", "v"]],
      s: [[2, [V], "“A number” is the unknown. Call it x."], [1, [PL], "“More than” means add."], [0, [n("5")], "Five is the amount added on: x + 5. (5 + x is equal, since addition is commutative.)"]], f: x => x + 5 },
    { name: "7 less than a number", rev: true, other: x => 7 - x, otherS: "7 − x", w: [["7", "n"], ["less than", "k"], ["a number", "v"]],
      s: [[2, [V], "Start from the number: 7 less than x starts at x."], [1, [MI], "“Less than” subtracts, and it flips the order of the words."], [0, [n("7")], "The 7 is taken away from x: x − 7, not 7 − x."]], f: x => x - 7 },
    { name: "the difference of a number and 7", w: ["the", ["difference of", "k"], ["a number", "v"], "and", ["7", "n"]],
      s: [[2, [V], "The first quantity named comes first."], [1, [MI], "“Difference” means subtract."], [4, [n("7")], "“The difference of A and B” keeps the order: A − B."]], f: x => x - 7 },
    { name: "twice a number, increased by 3", w: [["twice", "n"], ["a number", "v"], ",", ["increased by", "k"], ["3", "n"]],
      s: [[0, [n("2")], "“Twice” means 2 times."], [1, [V], "A number written right next to a variable means multiply: 2x."], [3, [PL], "“Increased by” means add."], [4, [n("3")], "Result: 2x + 3."]], f: x => 2 * x + 3 },
    { name: "the quotient of a number and 4", w: ["the", ["quotient of", "k"], ["a number", "v"], "and", ["4", "n"]],
      s: [[2, [V], "The first quantity named is divided."], [1, [DI], "“Quotient” means divide."], [4, [n("4")], "x ÷ 4, also written as the fraction x/4."]], f: x => x / 4 },
    { name: "three times the sum of a number and 2", w: [["three", "n"], ["times", "k"], "the", ["sum of", "k"], ["a number", "v"], ["and", "k"], ["2", "n"]],
      s: [[0, [n("3")], "Three is the multiplier."], [1, [], "“Times” multiplies. In front of parentheses the × sign is usually left out."], [3, [["(", "k"]], "“The sum of …” is one quantity, so it goes in parentheses."], [4, [V], "The first thing being added."], [5, [PL], "“And” joins the two things being added."], [6, [n("2"), [")", "k"]], "Close the group: 3(x + 2). Without the parentheses, 3x + 2 would mean something else."]], f: x => 3 * (x + 2) },
    { name: "the product of 6 and a number, minus 1", w: ["the", ["product of", "k"], ["6", "n"], "and", ["a number", "v"], ",", ["minus", "k"], ["1", "n"]],
      s: [[2, [n("6")], "The first factor."], [1, [], "“Product” means multiply. 6 times x is written 6x, with no sign."], [4, [V], "6x."], [6, [MI], "“Minus” subtracts."], [7, [n("1")], "6x − 1."]], f: x => 6 * x - 1 },
    { name: "the square of a number, decreased by 9", w: ["the", ["square of", "k"], ["a number", "v"], ",", ["decreased by", "k"], ["9", "n"]],
      s: [[2, [V], "The number being squared."], [1, [["<sup>2</sup>", "k"]], "“The square of” means raise to the power 2."], [4, [MI], "“Decreased by” subtracts."], [5, [n("9")], "x² − 9."]], f: x => x * x - 9 },
    { name: "10 subtracted from a number", rev: true, other: x => 10 - x, otherS: "10 − x", w: [["10", "n"], ["subtracted from", "k"], ["a number", "v"]],
      s: [[2, [V], "Start with the number you subtract from."], [1, [MI], "“Subtracted from” flips the order of the words."], [0, [n("10")], "x − 10: the 10 is taken away from x."]], f: x => x - 10 },
    { name: "4 less than twice a number", rev: true, other: x => 4 - 2 * x, otherS: "4 − 2x", w: [["4", "n"], ["less than", "k"], ["twice", "n"], ["a number", "v"]],
      s: [[2, [n("2")], "Start with what comes after “less than”: twice a number."], [3, [V], "Twice a number is 2x."], [1, [MI], "“Less than” subtracts and flips the order."], [0, [n("4")], "2x − 4."]], f: x => 2 * x - 4 },
    { name: "half of a number", w: [["half of", "k"], ["a number", "v"]],
      s: [[1, [V], "The number being halved."], [0, [DI, n("2")], "“Half of” means divide by 2 (the same as multiplying by ½)."]], f: x => x / 2 }
  ];
  const MEAN = { "more than": ["+", "add; written after the number"], "less than": ["−", "subtract; the order flips"], "difference of": ["−", "subtract, in the order given"], "increased by": ["+", "add"], "quotient of": ["÷", "divide, in the order given"], "times": ["×", "multiply"], "sum of": ["( + )", "add; the sum is one quantity"], "and": ["+", "joins the two parts of the sum"], "product of": ["×", "multiply"], "minus": ["−", "subtract"], "square of": ["²", "power of 2"], "decreased by": ["−", "subtract"], "subtracted from": ["−", "subtract; the order flips"], "half of": ["÷ 2", "divide by 2"] };
  const COL = { v: "var(--cyan)", n: "var(--pink)", k: "var(--amber)" };
  let pi = 0, xv = 6;
  k.select("Phrase", PH.map((p, i) => [i, p.name]), 0, v => { pi = +v; st.reset(); });
  k.slider(`<span class="c2"><i>x</i></span> =`, 0, 12, 1, xv, v => { xv = v; render(); });
  const st = k.stepper(() => PH[pi].s.length, render, { ms: 1100 });
  const tokH = (t, hot) => { const s = t[0]; const core = ["+", "−", "÷", "×"].includes(s) ? ` ${s} ` : s; return `<span class="${hot ? "tok hot" : ""}" style="color:${COL[t[1]]}">${t[1] === "v" ? `<i>${core}</i>` : core}</span>`; };
  const subH = toks => toks.map((t, i) => t[1] === "v" ? (i > 0 && /^\d/.test(toks[i - 1][0]) ? `<span class="c3">(${xv})</span>` : `<span class="c3">${xv}</span>`) : (["+", "−", "÷", "×"].includes(t[0]) ? ` ${t[0]} ` : t[0])).join("");
  function render(){
    const p = PH[pi], K = st.k, S = p.s, done = K >= S.length;
    const seen = new Set(S.slice(0, K).map(s => s[0])), cur = K > 0 ? S[K - 1][0] : -1;
    const phrase = p.w.map((wd, i) => { if (typeof wd === "string") return wd; const on = seen.has(i); return `<span class="${i === cur ? "tok hot" : "tok"}" style="color:${COL[wd[1]]};${on ? "" : "opacity:.5"}">${wd[0]}</span>`; }).join(" ").replace(/ ,/g, ",");
    const toks = []; S.slice(0, K).forEach((s, j) => s[1].forEach(t => toks.push([t, j === K - 1])));
    const allT = []; S.forEach(s => s[1].forEach(t => allT.push(t)));
    const expr = toks.map(([t, hot]) => tokH(t, hot)).join("");
    const exprAll = allT.map(t => tokH(t, false)).join("");
    const val = p.f(xv);
    const note = K === 0 ? "Press Step: each key phrase becomes one piece of the expression." : S[K - 1][2];
    dom.innerHTML = `<div style="text-align:center;padding-top:26px">
      <div style="font:600 11px var(--ui);letter-spacing:.14em;color:var(--faint)">WORDS</div>
      <div style="font:400 clamp(18px,2.3vw,26px)/1.7 var(--sans);margin:6px auto 10px;max-width:640px">${phrase}</div>
      <div style="font-size:22px;color:var(--faint)">↓</div>
      <div style="font:600 11px var(--ui);letter-spacing:.14em;color:var(--faint);margin-top:4px">ALGEBRA</div>
      <div class="dom-expr" style="padding-top:2px;min-height:1.5em">${expr || `<span style="color:var(--faint)">…</span>`}</div>
      <div class="hist" style="margin-top:4px;font-size:17px;max-width:620px;margin-left:auto;margin-right:auto">${note}</div>
      ${done ? `<div class="hist" style="margin-top:8px;color:var(--text)">check with <i class="c2">x</i> = <span class="c3">${xv}</span>: ${subH(allT)} = <span class="c5">${k.fmt(val, 3)}</span></div>` : ""}
    </div>`;
    const keys = p.w.filter(wd => typeof wd !== "string" && wd[1] === "k" && MEAN[wd[0]]);
    const lm = done && p.rev ? `<div class="big">${M(`${exprAll}, not ${p.otherS}`)}</div><div class="note">With x = ${xv}: the phrase gives ${k.fmt(val, 3)}, but ${p.otherS} gives ${k.fmt(p.other(xv), 3)}. “Less than” and “subtracted from” reverse the order of the words.</div>`
      : done ? `<div class="big">${M(exprAll)}</div><div class="note">Test the translation with a number: if x = ${xv}, the phrase should give ${k.fmt(val, 3)}.</div>`
      : `<div class="big">${K ? M(expr) : "Build it piece by piece"}</div><div class="note">${note}</div>`;
    k.setRO(`<div><h2>Expression</h2><div class="ro-big" style="margin-top:8px">${done ? M(exprAll) : `<span style="color:var(--faint)">${K ? M(expr) + " …" : "…"}</span>`}</div></div>
      <div class="ro-rows">${keys.map(wd => `<div class="row"><span class="m c1">“${wd[0]}”</span> → <span class="v c1">${MEAN[wd[0]][0]}</span><span class="lbl">${MEAN[wd[0]][1]}</span></div>`).join("")}
        <div class="row"><span class="m c2">“a number”</span> → <span class="v c2"><i>x</i></span><span class="lbl">the unknown gets a letter</span></div></div>
      <div class="landmark${done && p.rev ? " hit" : ""}">${lm}</div>
      <p class="narr">Step ${Math.min(K, S.length)} of ${S.length}. Pick another phrase, or change x to test the result.</p>`);
  }
  render();
};

/* ---------- pa-like-terms: algebra tiles ---------- */
L["pa-like-terms"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "comb", A = 3, B = 2, Cc = -1, D = -5, grp = 0, grpT = 0;
  let a = 3, b = 2, cc = -1, rev = 0;
  k.modes([["comb", "Combine like terms"], ["dist", "Distribute a(bx + c)"]], mode, m => { mode = m; controls(); });
  const box = document.createElement("div"); box.style.display = "contents"; k.ctl.appendChild(box);
  let gbtn;
  function controls(){
    box.innerHTML = ""; const hold = k.ctl; k.ctl = box;
    if (mode === "comb") {
      k.slider(`<span class="c2"><i>x</i></span>`, -4, 4, 1, A, v => { A = v; });
      k.slider(`<span class="c1">1</span>`, -4, 4, 1, B, v => { B = v; });
      k.slider(`<span class="c2"><i>x</i></span>`, -4, 4, 1, Cc, v => { Cc = v; });
      k.slider(`<span class="c1">1</span>`, -4, 4, 1, D, v => { D = v; });
      gbtn = k.button(grpT ? "Ungroup" : "Group like terms", () => { grpT = 1 - grpT; gbtn.textContent = grpT ? "Ungroup" : "Group like terms"; });
    } else {
      k.slider(`<span class="c4"><i>a</i></span>`, -3, 4, 1, a, v => { a = v; rev = 0; });
      k.slider(`<span class="c2"><i>b</i></span>`, -3, 3, 1, b, v => { b = v; });
      k.slider(`<span class="c1"><i>c</i></span>`, -4, 4, 1, cc, v => { cc = v; });
      k.button("Replay", () => rev = 0, "btn ghost");
    }
    k.ctl = hold;
  }
  controls();
  const lin = (p, q) => { const t = []; if (p) t.push((p === 1 ? "" : p === -1 ? "−" : sg(p)) + "x"); if (q) t.push(t.length ? (q < 0 ? "− " + (-q) : "+ " + q) : sg(q)); return t.length ? t.join(" ") : "0"; };
  const linH = (p, q) => { const t = []; if (p) t.push(`<span class="c2">${p === 1 ? "" : p === -1 ? "−" : sg(p)}<i>x</i></span>`); if (q) t.push(t.length ? (q < 0 ? "− " : "+ ") + `<span class="c1">${Math.abs(q)}</span>` : `<span class="c1">${sg(q)}</span>`); return t.length ? t.join(" ") : "0"; };
  const seq = terms => { let s = ""; terms.forEach(([n, isX]) => { if (!n) return; const body = isX ? (Math.abs(n) === 1 ? "" : Math.abs(n)) + "x" : String(Math.abs(n)); s += s ? (n < 0 ? " − " : " + ") + body : (n < 0 ? "−" : "") + body; }); return s || "0"; };
  const seqH = terms => { let s = ""; terms.forEach(([n, isX]) => { if (!n) return; const body = isX ? `<span class="c2">${Math.abs(n) === 1 ? "" : Math.abs(n)}<i>x</i></span>` : `<span class="c1">${Math.abs(n)}</span>`; s += s ? (n < 0 ? " − " : " + ") + body : (n < 0 ? "−" : "") + body; }); return s || "0"; };
  const tile = (x, y, W, H, pos, isX, al = 1) => { const col = pos ? (isX ? C.cyan : C.amber) : C.pink; d.rr(x, y, W, H, 3, k.alpha(col, .55 * al), k.alpha(col, al), 1.5); if (Math.min(W, H) > 11) d.text(isX ? (pos ? "x" : "−x") : (pos ? "+1" : "−1"), x + W / 2, y + H / 2 + 1, { font: `${isX ? "italic " : ""}${Math.round(Math.min(W, H) * (isX ? .5 : .42))}px ${isX ? F.math : F.mono}`, color: k.alpha(C.ink, .85 * al), align: "center", base: "middle" }); };
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    if (mode === "comb") {
      grp = k.reduce ? grpT : lerp(grp, grpT, Math.min(1, dt * 3.5));
      const T = [[A, true], [B, false], [Cc, true], [D, false]];
      const sx = A + Cc, su = B + D;
      // header
      const hs = grp < .5 ? seq(T) : `${lin(sx, su)}`;
      const fs = fitSize(d, [[hs]], 28, F.math, w - 30);
      d.text(hs, w / 2, 76, { font: `${fs}px ${F.math}`, color: C.text, align: "center" });
      // sizing
      const nz = T.filter(t => t[0]);
      const beforeU = nz.reduce((s, [n, isX]) => s + (isX ? Math.abs(n) * 1.2 : Math.ceil(Math.abs(n) / 2) * 1.2), 0) + Math.max(0, nz.length - 1) * 1.6;
      const xp = [A, Cc].reduce((s, v) => s + Math.max(0, v), 0), xn = [A, Cc].reduce((s, v) => s + Math.max(0, -v), 0);
      const up = [B, D].reduce((s, v) => s + Math.max(0, v), 0), un = [B, D].reduce((s, v) => s + Math.max(0, -v), 0);
      const afterU = Math.max(xp, xn, 1) * 1.2 + 2.4 + Math.max(up, un, 1) * 1.2;
      const u = Math.max(8, Math.min(30, (w - 40) / Math.max(beforeU, afterU, 1), (h - 190) / 9.5));
      const xH = u * 2.5;
      // before positions
      const yB = 104; let x = (w - beforeU * u) / 2;
      const before = { x: [], u: [] }, labels = [];
      nz.forEach(([n, isX], gi) => {
        const cnt = Math.abs(n), gx = x;
        for (let i = 0; i < cnt; i++) { if (isX) before.x.push([x + i * 1.2 * u, yB, n > 0]); else before.u.push([x + Math.floor(i / 2) * 1.2 * u, yB + (i % 2) * 1.25 * u + .25 * u, n > 0]); }
        const gw = (isX ? cnt : Math.ceil(cnt / 2)) * 1.2 * u - .2 * u;
        labels.push([isX ? (n === 1 ? "x" : n === -1 ? "−x" : sg(n) + "x") : sg(n), gx + gw / 2, isX ? C.cyan : C.amber, n < 0]);
        x += gw + .2 * u + (gi < nz.length - 1 ? 1.6 * u : 0);
      });
      // after positions
      const yA = yB + xH + 60 + (h - 190 - 9.5 * u) * .3;
      const axW = Math.max(xp, xn, 1) * 1.2 * u, x0 = (w - afterU * u) / 2, ux0 = x0 + axW + 2.4 * u;
      const after = { x: [], u: [] }; let ip = 0, ineg = 0;
      before.x.forEach(t => { if (t[2]) after.x.push([x0 + ip++ * 1.2 * u, yA, true, ip - 1]); else after.x.push([x0 + ineg++ * 1.2 * u, yA + xH + .3 * u, false, ineg - 1]); });
      ip = 0; ineg = 0;
      before.u.forEach(t => { if (t[2]) after.u.push([ux0 + ip++ * 1.2 * u, yA + xH * .5 - 1.3 * u, true, ip - 1]); else after.u.push([ux0 + ineg++ * 1.2 * u, yA + xH * .5 + .3 * u, false, ineg - 1]); });
      const zx = Math.min(xp, xn), zu = Math.min(up, un), e = ease(grp);
      if (e < .5) labels.forEach(([s, lx, col, neg]) => d.text(s, lx, yB + xH + 22, { font: `16px ${F.math}`, color: k.alpha(neg ? C.pink : col, 1 - e * 2), align: "center" }));
      if (e > .6) {
        const al = (e - .6) / .4;
        d.text("x-tiles", x0, yA - 12, { font: `600 11px ${F.ui}`, color: k.alpha(C.cyan, al) });
        d.text("unit tiles", ux0, yA + xH * .5 - 1.3 * u - 12, { font: `600 11px ${F.ui}`, color: k.alpha(C.amber, al) });
        for (let i = 0; i < zx; i++) { const zx0 = x0 + i * 1.2 * u; c.g.save(); c.g.setLineDash([3, 3]); d.rr(zx0 - 3, yA - 3, u + 6, 2 * xH + .3 * u + 6, 5, null, k.alpha(C.muted, al), 1.2); c.g.restore(); d.text("0", zx0 + u / 2, yA + 2 * xH + .3 * u + 18, { font: `600 13px ${F.mono}`, color: k.alpha(C.muted, al), align: "center" }); }
        for (let i = 0; i < zu; i++) { const zx0 = ux0 + i * 1.2 * u; c.g.save(); c.g.setLineDash([3, 3]); d.rr(zx0 - 3, yA + xH * .5 - 1.3 * u - 3, u + 6, 2.6 * u + 6, 5, null, k.alpha(C.muted, al), 1.2); c.g.restore(); d.text("0", zx0 + u / 2, yA + xH * .5 + 1.3 * u + 18, { font: `600 13px ${F.mono}`, color: k.alpha(C.muted, al), align: "center" }); }
      }
      const drawSet = (bs, as, isX) => bs.forEach((t, i) => { const [ax, ay, pos, col] = as[i]; const tx = lerp(t[0], ax, e), ty = lerp(t[1], ay, e); const zero = col < (isX ? zx : zu); tile(tx, ty, u, isX ? xH : u, pos, isX, zero ? 1 - .7 * Math.max(0, (e - .6) / .4) : 1); });
      drawSet(before.x, after.x, true); drawSet(before.u, after.u, false);
      if (e > .9) d.text(`= ${lin(sx, su)}`, w / 2, h - 22, { font: `22px ${F.math}`, color: C.green, align: "center" });
      const zp = zx + zu;
      k.setRO(`<div><h2>Simplified</h2><div class="ro-big" style="margin-top:8px">${M(seqH(T))}<br>= ${M(linH(sx, su))}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`<span class="c2">${sg(A)}<i>x</i></span> and <span class="c2">${sg(Cc)}<i>x</i></span>`)} → <span class="v c2">${lin(sx, 0)}</span><span class="lbl">like terms: same variable, same power. Add the coefficients: ${sg(A)} + ${pn(Cc)} = ${sg(sx)}</span></div>
          <div class="row">${M(`<span class="c1">${sg(B)}</span> and <span class="c1">${sg(D)}</span>`)} → <span class="v c1">${sg(su)}</span><span class="lbl">constants are like terms too: ${sg(B)} + ${pn(D)} = ${sg(su)}</span></div>
          <div class="row">${M("zero pairs")} <span class="v">${zp}</span><span class="lbl">a positive tile and a matching <span class="c3">negative</span> tile cancel to 0</span></div>
        </div>
        <div class="landmark${sx === 0 || zp ? " hit" : ""}">${sx === 0 && su === 0 ? `<div class="big">${M("everything cancels: 0")}</div><div class="note">Every tile has a partner of the opposite sign.</div>` : sx === 0 ? `<div class="big">${M(`the x-terms cancel`)}</div><div class="note">${sg(A)}x and ${sg(Cc)}x are opposites, so only the constant ${sg(su)} is left.</div>` : `<div class="big">${M(`<i>x</i> and 1 are not like terms`)}</div><div class="note">${lin(sx, su)} cannot be simplified further: an x-tile and a unit tile are different shapes. ${zp ? `${zp} zero pair${zp > 1 ? "s" : ""} cancelled on the way.` : ""}</div>`}</div>
        <p class="narr">Press Group like terms to slide matching tiles together.</p>`);
    } else {
      const n = Math.abs(a); rev = k.reduce ? n : Math.min(n, rev + dt * 2.2);
      const rx = a * b, rc = a * cc;
      const grpS = `${a === 1 ? "" : a === -1 ? "−" : sg(a)}(${lin(b, cc)})`;
      const hs = `${grpS} = ${lin(rx, rc)}`;
      const fs = fitSize(d, [[hs]], 28, F.math, w - 30);
      d.text(hs, w / 2, 76, { font: `${fs}px ${F.math}`, color: C.text, align: "center" });
      const rowU = 3 + Math.abs(b) * 2.7 + .8 + Math.abs(cc) * 1.2;
      const u = Math.max(8, Math.min(28, (w - 30) / Math.max(rowU, 8), (h - 170) / (2.6 + Math.max(n, 1) * 1.45 + 1.5)));
      const lx = (w - rowU * u) / 2 + 3 * u;
      const row = (y, sgn, al) => { let x = lx; for (let i = 0; i < Math.abs(b); i++) { tile(x, y, 2.5 * u, u, b * sgn > 0, true, al); x += 2.7 * u; } x += .8 * u; for (let i = 0; i < Math.abs(cc); i++) { tile(x, y, u, u, cc * sgn > 0, false, al); x += 1.2 * u; } };
      let y = 100;
      d.text("one group", lx - .6 * u, y + u / 2 + 1, { font: `600 11px ${F.ui}`, color: C.muted, align: "right", base: "middle" });
      if (b === 0 && cc === 0) d.text("(empty: 0)", lx, y + u / 2, { font: `14px ${F.math}`, color: C.faint, base: "middle" });
      row(y, 1, 1);
      c.g.save(); c.g.setLineDash([4, 4]); d.rr(lx - .4 * u, y - .4 * u, (rowU - 3) * u + .4 * u, 1.8 * u, 6, null, C.muted, 1); c.g.restore();
      y += 2.6 * u;
      d.text(a === 0 ? "× 0: no copies" : a > 0 ? `× ${a}: ${a} cop${a === 1 ? "y" : "ies"}` : `× (${sg(a)}): ${n} cop${n === 1 ? "y" : "ies"} of the opposite`, lx, y - .5 * u, { font: `14px ${F.sans}`, color: C.violet });
      for (let i = 0; i < n; i++) { const al = Math.max(0, Math.min(1, rev - i)); if (al <= 0) break; const yy = y + .3 * u + i * 1.45 * u; d.text(String(i + 1), lx - .6 * u, yy + u / 2 + 1, { font: `600 12px ${F.mono}`, color: k.alpha(C.violet, al), align: "right", base: "middle" }); row(yy, Math.sign(a), al); }
      if (rev >= n) d.text(`= ${lin(rx, rc)}`, w / 2, h - 22, { font: `22px ${F.math}`, color: C.green, align: "center" });
      k.setRO(`<div><h2>Distributed</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c4">${a === 1 ? "" : a === -1 ? "−" : sg(a)}</span>(${linH(b, cc)}) = ${linH(rx, rc)}`)}</div></div>
        <div class="ro-rows">
          <div class="row">${M(`<span class="c4">${pn(a)}</span> · <span class="c2">${b === 1 ? "" : b === -1 ? "−" : pn(b)}<i>x</i></span>`)} = <span class="v c2">${lin(rx, 0)}</span><span class="lbl">multiply the first term inside by a</span></div>
          <div class="row">${M(`<span class="c4">${pn(a)}</span> · <span class="c1">${pn(cc)}</span>`)} = <span class="v c1">${sg(rc)}</span><span class="lbl">and the second term too, not just the first</span></div>
          <div class="row">${M("a(b + c) = ab + ac")}<span class="lbl">the distributive property</span></div>
        </div>
        <div class="landmark${a <= 0 ? " hit" : ""}">${a === 0 ? `<div class="big">${M("0 · (anything) = 0")}</div><div class="note">No copies of the group means no tiles at all.</div>` : a < 0 ? `<div class="big">${M(`negative a flips every sign`)}</div><div class="note">Each copy is the opposite of the group: every cyan or amber tile turns pink and every pink tile turns positive.</div>` : `<div class="big">${M(`${a} copies of (${lin(b, cc)})`)}</div><div class="note">Multiplying a group means multiplying every term in it. A common slip is ${a}(${lin(b, cc)}) = ${lin(rx, cc)}, which forgets the ${sg(cc)}.</div>`}</div>
        <p class="narr">Count the tiles by type: that is the simplified expression.</p>`);
    }
  });
};

/* ---------- pa-evaluate: substitution stepper (DOM) ---------- */
L["pa-evaluate"] = k => {
  const { M } = k; const dom = k.dom();
  let uid = 0;
  const N = v => ({ t: "num", q: typeof v === "object" ? v : Q(v), id: ++uid });
  const Xv = nm => ({ t: "var", n: nm, id: ++uid });
  const O = (o, l, r) => ({ t: "op", o, l, r, id: ++uid });
  const Ng = e => ({ t: "neg", e, id: ++uid });
  const x = () => Xv("x"), y = () => Xv("y");
  const PRE = [
    ["3x + 2", () => O("+", O("*", N(3), x()), N(2))],
    ["2x² − 5", () => O("-", O("*", N(2), O("^", x(), N(2))), N(5))],
    ["4(x − 3)", () => O("*", N(4), O("-", x(), N(3)))],
    ["x² + 3x − 4", () => O("-", O("+", O("^", x(), N(2)), O("*", N(3), x())), N(4))],
    ["3x + 2y", () => O("+", O("*", N(3), x()), O("*", N(2), y()))],
    ["−x²", () => Ng(O("^", x(), N(2)))],
    ["(−x)²", () => O("^", Ng(x()), N(2))],
    ["(x + y) ÷ 2", () => O("/", O("+", x(), y()), N(2))],
    ["5 − 2(x + y)", () => O("-", N(5), O("*", N(2), O("+", x(), y())))],
    ["x² − 2xy + y²", () => O("+", O("-", O("^", x(), N(2)), O("*", O("*", N(2), x()), y())), O("^", y(), N(2)))]
  ];
  let pi = 0, vals = { x: 4, y: -2 }, frames = [], err = "";
  const hasY = n => n.t === "var" ? n.n === "y" : n.t === "op" ? hasY(n.l) || hasY(n.r) : n.t === "neg" ? hasY(n.e) : false;
  const subst = n => n.t === "var" ? { t: "num", q: Q(vals[n.n]), sub: true, id: ++uid } : n.t === "op" ? { ...n, l: subst(n.l), r: subst(n.r) } : n.t === "neg" ? { ...n, e: subst(n.e) } : { ...n };
  const find = n => n.t === "op" ? (find(n.l) || find(n.r) || (n.l.t === "num" && n.r.t === "num" ? n : null)) : n.t === "neg" ? (find(n.e) || (n.e.t === "num" ? n : null)) : null;
  const put = (n, tg, r) => n === tg ? r : n.t === "op" ? { ...n, l: put(n.l, tg, r), r: put(n.r, tg, r) } : n.t === "neg" ? { ...n, e: put(n.e, tg, r) } : n;
  const collapse = n => { if (n.t === "op") return { ...n, l: collapse(n.l), r: collapse(n.r) }; if (n.t === "neg") { const e = collapse(n.e); if (e.t === "num" && !e.sub) return { t: "num", q: Q(-e.q.n, e.q.d), id: e.id }; return { ...n, e }; } return n; };
  const SYM = { "+": "+", "-": "−", "*": "·", "/": "÷" };
  const NAME = { "+": "Add", "-": "Subtract", "*": "Multiply", "/": "Divide", "^": "Exponent", neg: "Opposite" };
  const WHY = { "^": "exponents come before multiplication and addition", "*": "multiply and divide, left to right, before adding", "/": "multiply and divide, left to right, before adding", "+": "add and subtract left to right, last", "-": "add and subtract left to right, last", neg: "the minus sign in front means “the opposite of”" };
  function calc(n){
    if (n.t === "neg") return { q: Q(-n.e.q.n, n.e.q.d), key: "neg" };
    const a = n.l.q, b = n.r.q;
    if (n.o === "+") return { q: qa(a, b), key: "+" }; if (n.o === "-") return { q: qs(a, b), key: "-" }; if (n.o === "*") return { q: qm(a, b), key: "*" };
    if (n.o === "/") { const r = qd(a, b); return r ? { q: r, key: "/" } : { err: true }; }
    return { q: qp(a, b.n), key: "^" };
  }
  const PR = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 4 };
  const neglike = n => n.t === "neg" || (n.t === "num" && !n.sub && n.q.n < 0);
  const atomBase = n => n.t === "var" || (n.t === "num" && (n.sub || (n.q.n >= 0 && n.q.d === 1)));
  const needR = n => { const r = n.r; if (n.o === "^") return false; if (neglike(r)) return true; if (r.t === "op") return PR[r.o] < PR[n.o] || (PR[r.o] === PR[n.o] && (n.o === "-" || n.o === "/")); return false; };
  const needL = n => { const l = n.l; if (n.o === "^") return !atomBase(l); return l.t === "op" && PR[l.o] < PR[n.o]; };
  const juxt = n => { const l = n.l, r = n.r; const lok = (l.t === "num" && !neglike(l) && l.q.d === 1) || l.t === "var" || (l.t === "op" && l.o === "*" && juxt(l)); const rok = r.t === "var" || (r.t === "num" && r.sub) || (r.t === "op" && r.o === "^" && (r.l.t === "var" || (r.l.t === "num" && r.l.sub))) || (r.t === "op" && needR(n)); return lok && rok && !(l.t === "num" && l.sub && r.t === "num" && r.sub && false); };
  const numH = q => qh(q);
  function R(n, hot, fresh){
    let s;
    if (n.t === "num") s = n.sub ? `<span class="c3">(${numH(n.q)})</span>` : numH(n.q);
    else if (n.t === "var") s = `<i class="c2">${n.n}</i>`;
    else if (n.t === "neg") { const e = R(n.e, hot, fresh); s = "−" + (n.e.t === "op" && PR[n.e.o] < 3 ? `(${e})` : e); }
    else { const l = R(n.l, hot, fresh), r = R(n.r, hot, fresh), Lh = needL(n) ? `(${l})` : l, Rh = needR(n) ? `(${r})` : r;
      if (n.o === "^") s = `${Lh}<sup>${r}</sup>`;
      else if (n.o === "*") s = juxt(n) ? Lh + Rh : `${Lh} · ${Rh}`;
      else s = `${Lh} ${SYM[n.o]} ${Rh}`; }
    if (n.id === hot) s = `<span class="tok hot">${s}</span>`; else if (n.id === fresh) s = `<span class="tok new">${s}</span>`;
    return s;
  }
  const opText = (n) => n.t === "neg" ? `−${n.e.sub ? "(" + qt(n.e.q) + ")" : qt(n.e.q)}` : n.o === "^" ? `${n.l.q.n < 0 || n.l.q.d > 1 || n.l.sub ? "(" + qt(n.l.q) + ")" : qt(n.l.q)}^${qt(n.r.q)}` : `${qt(n.l.q)} ${SYM[n.o] === "·" ? "×" : SYM[n.o]} ${n.r.q.n < 0 ? "(" + qt(n.r.q) + ")" : qt(n.r.q)}`;
  function build(){
    frames = []; err = ""; uid = 0;
    const t0 = PRE[pi][1](); const Y = hasY(t0);
    frames.push({ t: t0, say: "Start with the expression. The letters stand for numbers." });
    let t = subst(t0);
    frames.push({ t, say: `Substitute x = ${sg(vals.x)}${Y ? ` and y = ${sg(vals.y)}` : ""}. Each value goes in parentheses so signs and products stay clear.`, sub: true });
    let guard = 0;
    while (t.t !== "num" && guard++ < 40) {
      const n = find(t); if (!n) break; const r = calc(n);
      if (r.err) { err = "Division by zero: the expression is undefined for these values."; break; }
      frames.push({ t, hot: n.id, key: r.key, say: `${NAME[r.key]}: ${opText(n)} = ${qt(r.q)}. ${WHY[r.key][0].toUpperCase() + WHY[r.key].slice(1)}.` });
      const res = { t: "num", q: r.q, id: ++uid };
      t = collapse(put(t, n, res));
      frames.push({ t, fresh: res.id, key: r.key, say: `${NAME[r.key]}: ${opText(n)} = ${qt(r.q)}.` });
    }
  }
  k.select("Expression", PRE.map((p, i) => [i, p[0]]), 0, v => { pi = +v; build(); st.reset(); });
  k.slider(`<span class="c2"><i>x</i></span>`, -6, 6, 1, vals.x, v => { vals.x = v; build(); render(); });
  const sy = k.slider(`<span class="c2"><i>y</i></span>`, -6, 6, 1, vals.y, v => { vals.y = v; build(); render(); });
  void sy;
  const st = k.stepper(() => frames.length - 1, render, { ms: 950 });
  function render(){
    const K = Math.min(st.k, frames.length - 1), f = frames[K], done = K === frames.length - 1 && f.t.t === "num";
    const Y = hasY(frames[0].t);
    const hist = frames.slice(0, K).filter((fr, i) => i < 2 || fr.fresh).map(fr => `<div>= ${R(fr.t, -1, -1)}</div>`).join("").replace(/^<div>= /, "<div>");
    dom.innerHTML = `<div class="dom-expr">${K === 0 ? "" : "= "}${R(f.t, f.hot, f.fresh)}</div><div class="hist">${hist}</div>${err && K === frames.length - 1 ? `<div class="hist" style="color:var(--pink)">${err}</div>` : ""}`;
    const res = done ? f.t.q : null;
    const special = PRE[pi][0] === "−x²" || PRE[pi][0] === "(−x)²";
    const lm = err && K === frames.length - 1 ? `<div class="big">undefined</div><div class="note">${err}</div>`
      : done ? `<div class="big">${M(`${PRE[pi][0].replace(/x/g, "<i class='c2'>x</i>").replace(/y/g, "<i class='c2'>y</i>")} = <span class="c5">${qh(res)}</span>`)}</div><div class="note">${special ? (PRE[pi][0] === "−x²" ? `−x² squares first, then takes the opposite, so it is never positive. Compare (−x)² = ${vals.x * vals.x}.` : `(−x)² squares the opposite, so it is never negative. Compare −x² = ${sg(-vals.x * vals.x)}.`) : `when x = ${sg(vals.x)}${Y ? ` and y = ${sg(vals.y)}` : ""}. A different value gives a different result; the expression is a recipe, not a number.`}</div>`
      : `<div class="big">${f.hot ? `<span class="c1">${NAME[f.key]}</span>` : f.sub ? `<span class="c3">Substitute</span>` : M(PRE[pi][0])}</div><div class="note">${f.say}</div>`;
    k.setRO(`<div><h2>Value</h2><div class="ro-big" style="margin-top:8px">= <span class="num c5">${done ? qh(res) : err && K === frames.length - 1 ? "undefined" : "?"}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2"><i>x</i></span> = <span class="v c3">${sg(vals.x)}</span><span class="lbl">the value substituted for x</span></div>
        ${Y ? `<div class="row"><span class="m c2"><i>y</i></span> = <span class="v c3">${sg(vals.y)}</span><span class="lbl">the value substituted for y</span></div>` : `<div class="row"><span class="lbl">This expression has no y, so the y slider does nothing here.</span></div>`}
        <div class="row">${M("step")} <span class="v">${K} of ${frames.length - 1}</span><span class="lbl">substitute, then follow the order of operations</span></div>
      </div>
      <div class="landmark${done || err ? " hit" : ""}">${lm}</div>
      <p class="narr">Each Step either finds the next operation (amber) or carries it out (green).</p>`);
  }
  build(); render();
};

/* ---------- pa-exponent-laws: expanded factors ---------- */
L["pa-exponent-laws"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "prod", m = 3, n = 2, z = 2, cut = 0;
  k.modes([["prod", "Product"], ["quot", "Quotient"], ["pow", "Power"], ["zero", "Zero & negative"]], mode, v => { mode = v; controls(); cut = 0; });
  const box = document.createElement("div"); box.style.display = "contents"; k.ctl.appendChild(box);
  function controls(){
    box.innerHTML = ""; const hold = k.ctl; k.ctl = box;
    if (mode === "zero") k.slider(`<span class="c3"><i>n</i></span>`, -4, 4, 1, z, v => { z = v; cut = 0; }, v => sg(v));
    else {
      const mx = mode === "pow" ? 4 : 6, mn = mode === "pow" ? 1 : 0; m = Math.max(mn, Math.min(m, mx)); n = Math.min(n, mx);
      k.slider(`<span class="c3"><i>m</i></span>`, mn, mx, 1, m, v => { m = v; cut = 0; });
      k.slider(`<span class="c4"><i>n</i></span>`, 0, mx, 1, n, v => { n = v; cut = 0; });
    }
    k.button("Replay", () => cut = 0, "btn ghost");
    k.ctl = hold;
  }
  controls();
  const fb = (x, y, s, col, al = 1, strike = 0) => { d.rr(x, y, s, s, 5, k.alpha(col, .2 * al), k.alpha(col, al), 1.6); d.text("x", x + s / 2, y + s / 2 + 1, { font: `italic ${Math.round(s * .56)}px ${F.math}`, color: k.alpha(C.cyan, al), align: "center", base: "middle" }); if (strike > 0) d.line(x + 3, y + s - 3, x + 3 + (s - 6) * strike, y + s - 3 - (s - 6) * strike, C.amber, 2.5); };
  // power formula pieces: [base, bcol, exp?, ecol?]
  const pw = (items, cx, y, size) => { const f = `${size}px ${F.math}`, fe = `${Math.round(size * .62)}px ${F.math}`; const ws = items.map(([b, , e]) => d.width(b, f) + (e !== undefined ? d.width(e, fe) + 2 : 0)); let x = cx - ws.reduce((a, v) => a + v, 0) / 2; items.forEach(([b, bc, e, ec], i) => { const bw = d.text(b, x, y, { font: (b === "x" ? "italic " : "") + f, color: bc }); if (e !== undefined) d.text(e, x + bw + 1, y - size * .42, { font: fe, color: ec }); x += ws[i]; }); };
  const two = e => qh(qp(Q(2), e));
  const supH = (e, cl) => `<sup class="${cl}">${sg(e)}</sup>`;
  const xH = `<i class="c2">x</i>`;
  k.loop(dt => {
    cut = k.reduce ? 1 : Math.min(1, cut + dt * .9); const e = ease(cut);
    c.begin(); const { w, h } = c; const cx = w / 2;
    let ro;
    if (mode === "prod") {
      const s = Math.max(14, Math.min(46, (w - 40) / ((m + n) * 1.15 + 1.6)));
      pw([["x", C.cyan, String(m), C.pink], [" · ", C.text], ["x", C.cyan, String(n), C.violet], [" = ", C.text], ["x", C.cyan, String(m + n), C.amber]], cx, 84, Math.min(32, w / 12));
      const yA = 118, tot = (m + n) * 1.15 * s + 1.6 * s - .15 * s, x0 = cx - tot / 2;
      const yB = yA + s + 80;
      const gx = i => i < m ? x0 + i * 1.15 * s : x0 + (i * 1.15 + 1.6) * s;
      const tot2 = (m + n) * 1.15 * s - .15 * s, x2 = cx - tot2 / 2;
      if (e < 1) { if (m) d.text(`${m} factor${m === 1 ? "" : "s"}`, x0 + (m * 1.15 * s) / 2, yA + s + 20, { font: `13px ${F.sans}`, color: C.pink, align: "center" }); if (n) d.text(`${n} factor${n === 1 ? "" : "s"}`, gx(m) + (n * 1.15 * s) / 2, yA + s + 20, { font: `13px ${F.sans}`, color: C.violet, align: "center" }); d.text("·", x0 + m * 1.15 * s + .72 * s, yA + s / 2 + 2, { font: `${Math.round(s * .8)}px ${F.math}`, color: k.alpha(C.text, 1 - e), align: "center", base: "middle" }); }
      for (let i = 0; i < m + n; i++) { const bx = lerp(gx(i), x2 + i * 1.15 * s, e), by = lerp(yA, yB, e); fb(bx, by, s, e > .95 ? C.amber : i < m ? C.pink : C.violet); }
      if (m + n === 0) d.text("1", cx, yB + s / 2, { font: `${Math.round(s)}px ${F.math}`, color: C.amber, align: "center", base: "middle" });
      if (e > .95) d.text(`${m} + ${n} = ${m + n} factors of x`, cx, yB + s + 26, { font: `15px ${F.sans}`, color: C.amber, align: "center" });
      ro = `<div><h2>Product rule</h2><div class="ro-big" style="margin-top:8px">${M(`${xH}${supH(m, "c3")} · ${xH}${supH(n, "c4")} = ${xH}${supH(m + n, "c1")}`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<i>x</i><sup>m</sup> · <i>x</i><sup>n</sup> = <i>x</i><sup>m+n</sup>`)}<span class="lbl">same base: add the exponents</span></div>
        <div class="row">${M(`2${supH(m, "c3")} · 2${supH(n, "c4")} = ${two(m)} · ${two(n)} = ${two(m + n)}`)}<span class="lbl">check with x = 2: 2${"<sup>" + (m + n) + "</sup>"} = ${two(m + n)}</span></div></div>
        <div class="landmark${m === 0 || n === 0 ? " hit" : ""}">${m === 0 || n === 0 ? `<div class="big">${M(`${xH}<sup>0</sup> = 1`)}</div><div class="note">A power with exponent 0 contributes no factors, so multiplying by it changes nothing.</div>` : `<div class="big">${M(`${xH}${supH(m, "c3")} · ${xH}${supH(n, "c4")} ≠ ${xH}<sup>${m * n}</sup>`)}</div><div class="note">Count the boxes: the factors line up end to end, so the exponents add. They multiply only for a power of a power.</div>`}</div>`;
    } else if (mode === "quot") {
      const mx = Math.max(m, n, 1), s = Math.max(14, Math.min(44, (w - 60) / (mx * 1.15 + .4), (h - 250) / 4.2));
      const r = m - n, cn = Math.min(m, n);
      const rItems = r > 0 ? [["x", C.cyan, String(r), C.amber]] : r === 0 ? [["1", C.amber]] : [["x", C.cyan, sg(r), C.amber]];
      pw([["x", C.cyan, String(m), C.pink], [" ÷ ", C.text], ["x", C.cyan, String(n), C.violet], [" = ", C.text], ...rItems], cx, 84, Math.min(32, w / 12));
      const fw = mx * 1.15 * s - .15 * s, x0 = cx - fw / 2, yN = 112, yBar = yN + s + 10, yD = yBar + 10;
      for (let i = 0; i < m; i++) fb(x0 + i * 1.15 * s, yN, s, C.pink, i < cn ? 1 - .6 * e : 1, i < cn ? e : 0);
      d.line(x0 - 10, yBar, x0 + fw + 10, yBar, C.text, 2);
      for (let i = 0; i < n; i++) fb(x0 + i * 1.15 * s, yD, s, C.violet, i < cn ? 1 - .6 * e : 1, i < cn ? e : 0);
      if (m === 0) d.text("1", cx, yN + s / 2, { font: `${Math.round(s * .8)}px ${F.math}`, color: C.pink, align: "center", base: "middle" });
      if (n === 0) d.text("1", cx, yD + s / 2, { font: `${Math.round(s * .8)}px ${F.math}`, color: C.violet, align: "center", base: "middle" });
      if (cn && e > .3) d.text(`${cn} pair${cn > 1 ? "s" : ""} cancel: x ÷ x = 1`, cx, yD + s + 24, { font: `14px ${F.sans}`, color: k.alpha(C.amber, Math.min(1, (e - .3) * 2)), align: "center" });
      const yR = yD + s + 56;
      if (e > .9) {
        const rr = Math.abs(r), s2 = Math.min(s, (w - 80) / (rr * 1.15 + 1));
        d.text("=", cx - (rr * 1.15 * s2) / 2 - 22, yR + (r < 0 ? s2 + 6 : s2 / 2), { font: `26px ${F.math}`, color: C.text, align: "center", base: "middle" });
        if (r === 0) d.text("1", cx, yR + s2 / 2, { font: `${Math.round(s2)}px ${F.math}`, color: C.amber, align: "center", base: "middle" });
        else if (r > 0) for (let i = 0; i < r; i++) fb(cx - (r * 1.15 * s2) / 2 + i * 1.15 * s2, yR, s2, C.amber);
        else { d.text("1", cx, yR + s2 * .55, { font: `${Math.round(s2 * .8)}px ${F.math}`, color: C.amber, align: "center", base: "middle" }); d.line(cx - (rr * 1.15 * s2) / 2 - 6, yR + s2 + 6, cx + (rr * 1.15 * s2) / 2 + 6, yR + s2 + 6, C.text, 2); for (let i = 0; i < rr; i++) fb(cx - (rr * 1.15 * s2) / 2 + i * 1.15 * s2, yR + s2 + 12, s2, C.amber); }
      }
      ro = `<div><h2>Quotient rule</h2><div class="ro-big" style="margin-top:8px">${M(`${FRH(`${xH}${supH(m, "c3")}`, `${xH}${supH(n, "c4")}`)} = ${xH}${supH(r, "c1")}${r < 0 ? ` = ${FRH("1", `${xH}<sup class="c1">${-r}</sup>`)}` : r === 0 ? " = 1" : ""}`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<i>x</i><sup>m</sup> ÷ <i>x</i><sup>n</sup> = <i>x</i><sup>m−n</sup>`)}<span class="lbl">same base: subtract the exponents (x ≠ 0)</span></div>
        <div class="row">${M(`2${supH(m, "c3")} ÷ 2${supH(n, "c4")} = ${two(m)} ÷ ${two(n)} = ${two(r)}`)}<span class="lbl">check with x = 2</span></div></div>
        <div class="landmark${r <= 0 ? " hit" : ""}">${r === 0 ? `<div class="big">${M(`${xH}<sup>0</sup> = 1`)}</div><div class="note">Every factor cancels, leaving 1. That is why any nonzero base to the power 0 equals 1.</div>` : r < 0 ? `<div class="big">${M(`${xH}<sup>${sg(r)}</sup> = ${FRH("1", `${xH}<sup>${-r}</sup>`)}`)}</div><div class="note">More factors below than above: ${-r} x${-r > 1 ? "’s are" : " is"} left in the denominator. A negative exponent means “one over”.</div>` : `<div class="big">${M(`${m} − ${n} = ${r}`)}</div><div class="note">Each x on the bottom cancels one x on top. ${r} factor${r > 1 ? "s" : ""} survive${r > 1 ? "" : "s"}.</div>`}</div>`;
    } else if (mode === "pow") {
      const tot = m * n;
      pw([["(", C.text], ["x", C.cyan, String(m), C.pink], [")", C.text, String(n), C.violet], [" = ", C.text], ...(n ? [["x", C.cyan, String(tot), C.amber]] : [["1", C.amber]])], cx, 84, Math.min(32, w / 12));
      const s = Math.max(14, Math.min(40, (w - 40) / Math.min(m * 1.15 * 2 + 3, 12), (h - 250) / 5));
      const gw = m * 1.15 * s + 1.1 * s, per = Math.max(1, Math.floor((w - 30) / (gw + 8))), rows = Math.ceil(n / per);
      const y0 = 110;
      for (let gi = 0; gi < n; gi++) { const r = Math.floor(gi / per), inRow = Math.min(per, n - r * per), ci = gi - r * per; const gx = cx - (inRow * (gw + 8) - 8) / 2 + ci * (gw + 8), gy = y0 + r * (s + 22);
        const al = 1 - .5 * e;
        d.text("(", gx + .2 * s, gy + s / 2 + 1, { font: `${Math.round(s * 1.1)}px ${F.math}`, color: k.alpha(C.violet, al), align: "center", base: "middle" });
        for (let i = 0; i < m; i++) fb(gx + .5 * s + i * 1.15 * s, gy, s, C.pink, al);
        d.text(")", gx + gw - .3 * s, gy + s / 2 + 1, { font: `${Math.round(s * 1.1)}px ${F.math}`, color: k.alpha(C.violet, al), align: "center", base: "middle" }); }
      if (n === 0) d.text("no copies", cx, y0 + s / 2, { font: `15px ${F.sans}`, color: C.faint, align: "center", base: "middle" });
      const yR = y0 + Math.max(rows, 1) * (s + 22) + 30;
      if (e > .5) {
        const al = Math.min(1, (e - .5) * 2), per2 = Math.max(1, Math.min(tot, Math.floor((w - 30) / (1.15 * s)), 8));
        d.text(n ? `${n} group${n > 1 ? "s" : ""} of ${m} = ${tot} factors` : "(anything)⁰ = 1", cx, yR - 10, { font: `14px ${F.sans}`, color: k.alpha(C.amber, al), align: "center" });
        if (!n) d.text("1", cx, yR + s / 2 + 8, { font: `${Math.round(s)}px ${F.math}`, color: k.alpha(C.amber, al), align: "center", base: "middle" });
        for (let i = 0; i < tot; i++) { const r = Math.floor(i / per2), ci = i % per2, inRow = Math.min(per2, tot - r * per2); fb(cx - (inRow * 1.15 * s - .15 * s) / 2 + ci * 1.15 * s, yR + 4 + r * 1.15 * s, s, C.amber, al); }
      }
      ro = `<div><h2>Power rule</h2><div class="ro-big" style="margin-top:8px">${M(`(${xH}${supH(m, "c3")})${supH(n, "c4")} = ${xH}${supH(tot, "c1")}`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`(<i>x</i><sup>m</sup>)<sup>n</sup> = <i>x</i><sup>m·n</sup>`)}<span class="lbl">a power of a power: multiply the exponents</span></div>
        <div class="row">${M(`(2${supH(m, "c3")})${supH(n, "c4")} = ${two(m)}<sup>${n}</sup> = ${two(tot)}`)}<span class="lbl">check with x = 2</span></div>
        <div class="row">${M(`(<i>xy</i>)<sup>n</sup> = <i>x</i><sup>n</sup><i>y</i><sup>n</sup>`)}<span class="lbl">the exponent applies to every factor inside</span></div></div>
        <div class="landmark${n === 0 ? " hit" : ""}">${n === 0 ? `<div class="big">${M(`(${xH}${supH(m, "c3")})<sup>0</sup> = 1`)}</div><div class="note">Zero copies of the group: the empty product is 1.</div>` : `<div class="big">${M(`(${xH}<sup>${m}</sup>)<sup>${n}</sup> = ${xH}<sup>${tot}</sup>, but ${xH}<sup>${m}</sup> · ${xH}<sup>${n}</sup> = ${xH}<sup>${m + n}</sup>`)}</div><div class="note">${n} copies of ${m} factors multiply; two powers side by side add.</div>`}</div>`;
    } else {
      // ladder from 4 down to -4
      const cw = (w - 20) / 9, ly = 110, fs = Math.max(13, Math.min(22, cw * .4));
      for (let i = 0; i < 9; i++) { const ex = 4 - i, x = 10 + i * cw + cw / 2, on = ex === z;
        if (on) d.rr(x - cw / 2 + 2, ly - 30, cw - 4, 66, 6, k.alpha(C.amber, .14), C.amber, 1.5);
        pw([["x", C.cyan, sg(ex), ex < 0 ? C.violet : C.pink]], x, ly, fs);
        const v = qp(Q(2), ex); d.text(qt(v), x, ly + 24, { font: `${Math.max(10, Math.min(13, cw * .26))}px ${F.mono}`, color: on ? C.amber : C.faint, align: "center" });
        if (i < 8) { d.hop(x + cw * .12, x + cw * .88, ly - 34, 16, k.alpha(C.muted, .7), 1.2); if (cw > 52 || i % 2 === 0) d.text("÷x", x + cw / 2, ly - 52, { font: `11px ${F.mono}`, color: C.faint, align: "center" }); }
      }
      d.text("values when x = 2", w - 12, ly + 46, { font: `11px ${F.sans}`, color: C.faint, align: "right" });
      const yE = ly + 90, az = Math.abs(z), s = Math.max(14, Math.min(44, (w - 80) / (Math.max(az, 1) * 1.15 + 3)));
      const al = e;
      pw([["x", C.cyan, sg(z), z < 0 ? C.violet : C.pink], [" = ", C.text]], cx - (z === 0 ? 20 : (az * 1.15 * s) / 2 + 30), yE + (z < 0 ? s + 14 : s / 2 + 10), Math.min(30, s * .8));
      if (z === 0) d.text("1", cx + 20, yE + s / 2 + 2, { font: `${Math.round(s)}px ${F.math}`, color: k.alpha(C.amber, al), align: "center", base: "middle" });
      else if (z > 0) for (let i = 0; i < z; i++) fb(cx - (az * 1.15 * s) / 2 + 20 + i * 1.15 * s, yE, s, C.amber, al);
      else { d.text("1", cx + 20, yE + s * .5, { font: `${Math.round(s * .8)}px ${F.math}`, color: k.alpha(C.amber, al), align: "center", base: "middle" }); d.line(cx - (az * 1.15 * s) / 2 + 12, yE + s + 6, cx + (az * 1.15 * s) / 2 + 28, yE + s + 6, C.text, 2); for (let i = 0; i < az; i++) fb(cx - (az * 1.15 * s) / 2 + 20 + i * 1.15 * s, yE + s + 12, s, C.amber, al); }
      ro = `<div><h2>${z === 0 ? "Zero exponent" : z < 0 ? "Negative exponent" : "Positive exponent"}</h2><div class="ro-big" style="margin-top:8px">${M(`${xH}${supH(z, z < 0 ? "c4" : "c3")} = <span class="c1">${z === 0 ? "1" : z > 0 ? Array(z).fill("<i>x</i>").join("·") : FRH("1", Array(az).fill("<i>x</i>").join("·"))}</span>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<i>x</i><sup>0</sup> = 1`)}<span class="lbl">for any x ≠ 0 (0<sup>0</sup> is left undefined here)</span></div>
        <div class="row">${M(`<i>x</i><sup>−n</sup> = ${FRH("1", "<i>x</i><sup>n</sup>")}`)}<span class="lbl">a negative exponent is a reciprocal, not a negative number</span></div>
        <div class="row">${M(`2${supH(z, z < 0 ? "c4" : "c3")} = ${two(z)}`)}<span class="lbl">check with x = 2</span></div></div>
        <div class="landmark${z <= 0 ? " hit" : ""}">${z === 0 ? `<div class="big">${M(`${xH}<sup>1</sup> ÷ ${xH} = ${xH}<sup>0</sup> = 1`)}</div><div class="note">Each step left to right divides by x. One step below x¹ must be x ÷ x = 1, so the pattern forces x⁰ = 1.</div>` : z < 0 ? `<div class="big">${M(`${xH}<sup>${sg(z)}</sup> = ${FRH("1", `${xH}<sup>${az}</sup>`)}`)}</div><div class="note">Keep dividing by x past 1 and you get fractions: 2<sup>${sg(z)}</sup> = ${two(z)}, which is positive.</div>` : `<div class="big">${M(`${xH}<sup>${z}</sup> ÷ ${xH} = ${xH}<sup>${z - 1}</sup>`)}</div><div class="note">Move the slider down through 0 and follow the pattern.</div>`}</div>`;
    }
    k.setRO(ro + `<p class="narr">${mode === "zero" ? "Every step to the right divides by x once more." : "Each box is one factor of x. Watch how the boxes combine or cancel."}</p>`);
  });
};

/* ---------- pa-equations: balance scale for 2x + 3 = r ---------- */
L["pa-equations"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let x = 3, r = 13, ang = 0; const tried = [];
  const remember = () => { const i = tried.findIndex(t => t[0] === x && t[1] === r); if (i >= 0) tried.splice(i, 1); tried.push([x, r]); if (tried.length > 6) tried.shift(); };
  const sx = k.slider(`<span class="c2"><i>x</i></span>`, 0, 11, .5, x, v => { x = v; remember(); }, v => k.fmt(v, 1));
  const sr = k.slider(`<span class="c4">right side</span>`, 3, 25, 1, r, v => { r = v; tried.length = 0; });
  k.button("Solve it", () => { x = (r - 3) / 2; sx.set(x); remember(); }, "btn ghost");
  k.button("New right side", () => { r = rnd(3, 25); sr.set(r); tried.length = 0; }, "btn ghost");
  k.hint("Find the x that levels the beam");
  remember();
  k.loop(dt => {
    const lv = 2 * x + 3, bal = lv === r;
    const target = Math.max(-.26, Math.min(.26, (lv - r) * .03));
    ang = k.reduce ? target : lerp(ang, target, Math.min(1, dt * 5));
    c.begin(); const { w, h } = c;
    const rel = bal ? "=" : lv < r ? "<" : ">";
    const head = [["2", C.pink], ["x", C.cyan, `italic 30px ${F.math}`], [" + 3 ", C.pink], [rel, bal ? C.amber : C.text], [` ${r}`, C.violet]];
    const fs = fitSize(d, head, 30, F.math, w - 30);
    head[1][2] = `italic ${fs}px ${F.math}`;
    runs(d, head, w / 2, 18 + fs, `${fs}px ${F.math}`);
    const sub = [["2(", C.pink], [k.fmt(x, 1), C.cyan], [") + 3 = ", C.pink], [k.fmt(lv, 1), C.pink], [bal ? "  balanced" : lv < r ? "  too light" : "  too heavy", bal ? C.amber : C.muted]];
    runs(d, sub, w / 2, 26 + fs + 20, `${Math.min(16, fs * .6)}px ${F.math}`);
    const pw = Math.min(210, (w - 40) / 2 - 16), hl = pw / 2 + 22;
    const py = fs + 86, baseY = h - 34;
    const uS = Math.max(9, Math.min(pw / 5.8, (baseY - py - 90) / 6.4));
    const hang = 5 * (uS + 2) + 22;
    const left = [bagItem(k, d, uS * 1.25, "x", C.cyan, k.fmt(x, 1)), bagItem(k, d, uS * 1.25, "x", C.cyan, k.fmt(x, 1))];
    for (let i = 0; i < 3; i++) left.push(unitItem(k, d, uS, C.pink));
    const right = []; for (let i = 0; i < r; i++) right.push(unitItem(k, d, uS, C.violet));
    drawScale(k, c, { cx: w / 2, py, hl, pw, hang, ang, baseY, beamCol: bal ? C.amber : C.muted, leftCol: C.pink, rightCol: C.violet, left, right, gap: 2,
      labels: [[["2", C.pink], ["x", C.cyan, `italic 16px ${F.math}`], [" + 3", C.pink]], [[String(r), C.violet]]] });
    const sol = (r - 3) / 2;
    k.setRO(`<div><h2>${bal ? "Solution found" : "Is it a solution?"}</h2><div class="ro-big" style="margin-top:8px"><span class="c2"><i>x</i></span> = <span class="num ${bal ? "c1" : "c2"}">${k.fmt(x, 1)}</span> ${bal ? "✓" : "✗"}</div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c3">2<i>x</i> + 3</span> = <span class="v c3">${k.fmt(lv, 1)}</span><span class="lbl">left side with x = ${k.fmt(x, 1)}</span></div>
        <div class="row"><span class="m c4">right</span> = <span class="v c4">${r}</span><span class="lbl">right side: a fixed number</span></div>
        <div class="row">${M(`${k.fmt(lv, 1)} ${rel} ${r}`)}<span class="lbl">${bal ? "both sides equal: the equation is true" : "not equal: the equation is false for this x"}</span></div>
        <div class="row"><span class="m">tried</span> <span class="v" style="font-family:var(--mono);font-size:13px">${tried.filter(t => t[1] === r).map(t => `${k.fmt(t[0], 1)}${2 * t[0] + 3 === r ? "✓" : "✗"}`).join("  ")}</span></div>
      </div>
      <div class="landmark${bal ? " hit" : ""}">${bal ? `<div class="big">${M(`2(<span class="c2">${k.fmt(x, 1)}</span>) + 3 = <span class="c4">${r}</span>`)}</div><div class="note">x = ${k.fmt(x, 1)} makes the equation true, so it is the solution. Every other x tips the scale.${Number.isInteger(sol) ? "" : " The solution is not a whole number, which is why x moves in halves."}</div>`
        : `<div class="big">${M(lv < r ? "left side too light → try a larger x" : "left side too heavy → try a smaller x")}</div><div class="note">An equation is a claim that two sides are equal. A value of x is a solution only if substituting it makes the claim true.</div>`}</div>
      <p class="narr">Guess and check works, but it is slow. Undoing the operations (the next topic) finds x directly.</p>`);
  });
};

/* ---------- pa-relations: mapping + table + graph ---------- */
L["pa-relations"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PRE = { lin: [[-1, -3], [0, -1], [1, 1], [2, 3], [3, 5]], sq: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]], root: [[0, 0], [1, 1], [1, -1], [4, 2], [4, -2]], con: [[-3, 2], [-1, 2], [1, 2], [3, 2]], vert: [[2, -2], [2, 0], [2, 1], [2, 3]] };
  let pairs = PRE.lin.map(p => p.slice()), sel = -1, drag = -1, P = null, hits = [];
  const free = () => { for (let t = 0; t < 200; t++) { const p = [rnd(-5, 5), rnd(-5, 5)]; if (!pairs.some(q => q[0] === p[0] && q[1] === p[1])) return p; } return null; };
  k.select("Relation", [["lin", "y = 2x − 1"], ["sq", "squares"], ["root", "x = y²"], ["con", "constant"], ["vert", "vertical"]], "lin", v => { pairs = PRE[v].map(p => p.slice()); sel = -1; });
  k.button("Add pair", () => { if (pairs.length < 8) { const p = free(); if (p) { pairs.push(p); sel = pairs.length - 1; } } }, "btn ghost");
  k.button("Remove pair", () => { if (pairs.length > 1) { pairs.splice(sel >= 0 ? sel : pairs.length - 1, 1); sel = -1; } }, "btn ghost");
  k.button("Random", () => { pairs = []; const nn = rnd(4, 6); for (let i = 0; i < nn; i++) { const p = free(); if (p) pairs.push(p); } sel = -1; }, "btn ghost");
  k.hint("Drag points on the graph");
  c.cv.addEventListener("pointerdown", e => { const q = c.xy(e); if (!P) return; let best = -1, bd = 18; pairs.forEach((p, i) => { const dd = Math.hypot(P.X(p[0]) - q.x, P.Y(p[1]) - q.y); if (dd < bd) { bd = dd; best = i; } }); if (best >= 0) { drag = best; sel = best; c.cv.setPointerCapture(e.pointerId); return; } const hh = hits.find(t => q.x >= t[0] && q.x <= t[0] + t[2] && q.y >= t[1] && q.y <= t[1] + t[3]); if (hh) sel = hh[4]; });
  c.cv.addEventListener("pointermove", e => { if (drag < 0 || !P) return; const q = c.xy(e), v = P.inv(q.x, q.y); const nx = Math.max(-5, Math.min(5, Math.round(v.x))), ny = Math.max(-5, Math.min(5, Math.round(v.y))); if (!pairs.some((p, i) => i !== drag && p[0] === nx && p[1] === ny)) pairs[drag] = [nx, ny]; });
  c.cv.addEventListener("pointerup", () => drag = -1);
  k.loop(() => {
    c.begin(); const { w, h } = c; hits = [];
    const byX = {}; pairs.forEach(([x, y]) => (byX[x] = byX[x] || new Set()).add(y));
    const bad = Object.keys(byX).filter(x => byX[x].size > 1).map(Number);
    const dom_ = [...new Set(pairs.map(p => p[0]))].sort((a, b) => a - b), rng = [...new Set(pairs.map(p => p[1]))].sort((a, b) => a - b);
    const wide = w >= 640;
    const mR = wide ? { x: 8, y: 14, w: w * .34, h: h - 28 } : { x: 6, y: 10, w: w * .6, h: h * .42 };
    const tR = wide ? { x: mR.x + mR.w + 6, y: 14, w: w * .15, h: h - 28 } : { x: mR.x + mR.w + 4, y: 10, w: w - mR.w - 16, h: h * .42 };
    const gR = wide ? { x: tR.x + tR.w + 8, y: 10, w: w - (tR.x + tR.w + 8) - 8, h: h - 20 } : { x: 4, y: h * .42 + 18, w: w - 8, h: h * .58 - 22 };
    // mapping diagram
    const ovH = mR.h - 34, lx = mR.x + mR.w * .22, rx = mR.x + mR.w * .78, ow = Math.min(mR.w * .34, 90), oy = mR.y + 26;
    d.text("INPUT x", lx, mR.y + 12, { font: `600 11px ${F.ui}`, color: C.cyan, align: "center" }); d.text("OUTPUT y", rx, mR.y + 12, { font: `600 11px ${F.ui}`, color: C.pink, align: "center" });
    d.rr(lx - ow / 2, oy, ow, ovH, ow / 2, k.alpha(C.cyan, .06), k.alpha(C.cyan, .6), 1.5); d.rr(rx - ow / 2, oy, ow, ovH, ow / 2, k.alpha(C.pink, .06), k.alpha(C.pink, .6), 1.5);
    const yPos = (i, n) => oy + ovH * (i + 1) / (n + 1);
    const fsM = Math.max(12, Math.min(17, ovH / (Math.max(dom_.length, rng.length) + 1) * .6));
    pairs.forEach(([x, y], i) => { const y1 = yPos(dom_.indexOf(x), dom_.length), y2 = yPos(rng.indexOf(y), rng.length), isBad = bad.includes(x), on = i === sel; d.arrow(lx + 16, y1, rx - 18, y2, isBad ? C.red : k.alpha(C.amber, on ? 1 : .6), on ? 2.6 : 1.6); });
    dom_.forEach((x, i) => { const yy = yPos(i, dom_.length), isBad = bad.includes(x); if (isBad) d.circle(lx, yy, fsM * .9, null, C.red, 1.5); d.text(sg(x), lx, yy + 1, { font: `600 ${fsM}px ${F.mono}`, color: isBad ? C.red : C.cyan, align: "center", base: "middle" }); hits.push([lx - 16, yy - 12, 32, 24, pairs.findIndex(p => p[0] === x)]); });
    rng.forEach((y, i) => { const yy = yPos(i, rng.length); d.text(sg(y), rx, yy + 1, { font: `600 ${fsM}px ${F.mono}`, color: C.pink, align: "center", base: "middle" }); });
    // table
    const rh = Math.max(16, Math.min(28, (tR.h - 30) / Math.max(pairs.length + 1, 6))), cxA = tR.x + tR.w * .3, cxB = tR.x + tR.w * .72, fsT = Math.max(11, Math.min(15, rh * .58));
    d.rr(tR.x, tR.y, tR.w, rh * (pairs.length + 1) + 6, 5, k.alpha(C.panel3, .5), C.line2, 1);
    d.text("x", cxA, tR.y + rh * .7, { font: `italic 600 ${fsT + 1}px ${F.math}`, color: C.cyan, align: "center" }); d.text("y", cxB, tR.y + rh * .7, { font: `italic 600 ${fsT + 1}px ${F.math}`, color: C.pink, align: "center" });
    d.line(tR.x + 4, tR.y + rh + 2, tR.x + tR.w - 4, tR.y + rh + 2, C.line2); d.line(tR.x + tR.w * .51, tR.y + 4, tR.x + tR.w * .51, tR.y + rh * (pairs.length + 1) + 2, C.line2);
    pairs.forEach(([x, y], i) => { const yy = tR.y + rh * (i + 1) + 4; if (i === sel) d.rect(tR.x + 2, yy, tR.w - 4, rh, k.alpha(C.amber, .16)); const isBad = bad.includes(x); d.text(sg(x), cxA, yy + rh / 2 + 1, { font: `${fsT}px ${F.mono}`, color: isBad ? C.red : C.cyan, align: "center", base: "middle" }); d.text(sg(y), cxB, yy + rh / 2 + 1, { font: `${fsT}px ${F.mono}`, color: C.pink, align: "center", base: "middle" }); hits.push([tR.x, yy, tR.w, rh, i]); });
    // graph
    P = k.plot(c, { xmin: -6, xmax: 6, ymin: -6, ymax: 6, equal: true, xstep: 1, ystep: 1, pad: { l: gR.x + 10, r: w - gR.x - gR.w + 6, t: gR.y + 6, b: h - gR.y - gR.h + 6 } });
    P.grid(); P.axes(Math.min(P.width, P.height) > 200);
    bad.forEach(x => P.line(x, P.ymin, x, P.ymax, k.alpha(C.red, .7), 1.5, [5, 4]));
    pairs.forEach(([x, y], i) => { const isBad = bad.includes(x); P.point(x, y, C.amber, i === sel ? 8 : 6); if (isBad) d.circle(P.X(x), P.Y(y), 11, null, C.red, 1.5); });
    if (sel >= 0 && pairs[sel]) { const [x, y] = pairs[sel]; const lab = `(${sg(x)}, ${sg(y)})`, f = `600 14px ${F.math}`, lw = d.width(lab, f); const X = P.X(x) + 12 + lw > gR.x + gR.w ? P.X(x) - 12 - lw : P.X(x) + 12; d.rr(X - 4, P.Y(y) - 26, lw + 8, 20, 4, k.alpha(C.ink, .85)); d.text(lab, X, P.Y(y) - 11, { font: f, color: C.amber }); }
    const setH = a => "{" + a.map(sg).join(", ") + "}";
    const isF = !bad.length;
    const bx = bad[0], bys = bx !== undefined ? [...byX[bx]].sort((a, b) => a - b) : [];
    k.setRO(`<div><h2>Relation</h2><div class="ro-big c1" style="margin-top:8px;font-size:19px;line-height:1.5;white-space:normal">{${pairs.map(([x, y]) => `(<span class="c2">${sg(x)}</span>, <span class="c3">${sg(y)}</span>)`).join(", ")}}</div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2">domain</span> <span class="v c2">${setH(dom_)}</span><span class="lbl">all the inputs (x-values)</span></div>
        <div class="row"><span class="m c3">range</span> <span class="v c3">${setH(rng)}</span><span class="lbl">all the outputs (y-values)</span></div>
        <div class="row">${M("pairs")} <span class="v c1">${pairs.length}</span><span class="lbl">each ordered pair is one arrow, one table row and one point</span></div>
      </div>
      <div class="landmark${isF ? "" : " hit"}">${isF ? `<div class="big">${M("a function")}</div><div class="note">Every input has exactly one output. ${rng.length < dom_.length ? "Two inputs sharing an output is allowed." : ""}</div>` : `<div class="big">${M(`<span class="c2">${sg(bx)}</span> → ${bys.map(v => `<span class="c3">${sg(v)}</span>`).join(" and ")}`)}</div><div class="note">Input ${sg(bx)} has ${bys.length} outputs, so this relation is not a function. On the graph the points line up vertically.</div>`}</div>
      <p class="narr">Drag a point onto the same x as another to break the function rule. Click a row or an input to select it.</p>`);
  });
};

/* ---------- pa-one-step: inverse operation stepper on a balance ---------- */
L["pa-one-step"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const PRE = [["+", Q(7), Q(12)], ["-", Q(4), Q(9)], ["*", Q(3), Q(18)], ["/", Q(4), Q(5)], ["-", Q(9), Q(-3)], ["*", Q(-5), Q(20)], ["+", Q(5, 2), Q(6), true], ["*", Q(2, 5), Q(2), true], ["*", Q(2, 3), Q(8)], ["+", Q(3, 4), Q(1, 2)], ["/", Q(-2), Q(7)]];
  let E = PRE[0], ang = 0;
  const nt = q => E[3] ? k.fmt(qv(q), 4) : qt(q);
  const nh = q => E[3] ? k.fmt(qv(q), 4) : qh(q);
  const ntp = q => q.n < 0 ? `(${nt(q)})` : nt(q);
  const nhp = q => q.n < 0 ? `(${nh(q)})` : nh(q);
  const coef = (q, html) => { if (q.d === 1 || E[3]) return q.n === -1 && q.d === 1 ? "−" : (html ? nh(q) : nt(q)); return html ? `(${qh(q)})` : `(${qt(q)})`; };
  const lhs = (html) => { const [o, a] = E, X = html ? `<i class="c2">x</i>` : "x", A = html ? `<span class="c3">${nh(a)}</span>` : nt(a); if (o === "+") return `${X} + ${A}`; if (o === "-") return `${X} − ${A}`; if (o === "*") return `${html ? `<span class="c3">${coef(a, true)}</span>` : coef(a)}${X}`; return `${X} ÷ ${html ? `<span class="c3">${nhp(a)}</span>` : ntp(a)}`; };
  const eqS = e => { const h = E; E = e; const s = `${lhs()} = ${nt(e[2])}`; E = h; return s; };
  const sol = () => { const [o, a, b] = E; return o === "+" ? qs(b, a) : o === "-" ? qa(b, a) : o === "*" ? qd(b, a) : qm(b, a); };
  const inv = () => { const [o, a] = E; if (o === "+") return ["− " + nt(a), "subtract " + nt(a), `undo + ${nt(a)} by subtracting ${nt(a)}`]; if (o === "-") return ["+ " + nt(a), "add " + nt(a), `undo − ${nt(a)} by adding ${nt(a)}`];
    if (o === "*") { if (a.d !== 1 && !E[3]) { const r = Q(a.d, a.n); return ["× " + ntp(r), "multiply by " + nt(r), `dividing by ${qt(a)} is the same as multiplying by its reciprocal ${qt(r)}`]; } return ["÷ " + ntp(a), "divide by " + ntp(a), `undo × ${ntp(a)} by dividing by ${ntp(a)}`]; }
    return ["× " + ntp(a), "multiply by " + ntp(a), `undo ÷ ${ntp(a)} by multiplying by ${ntp(a)}`]; };
  const opts = PRE.map((e, i) => [i, eqS(e)]);
  const sel = k.select("Equation", opts, 0, v => { E = PRE[+v]; st.reset(); });
  k.button("New", () => { const o = ["+", "-", "*", "/"][rnd(0, 3)], a = rnd(2, 9); let b; if (o === "*") b = Q(a * rnd(-6, 9)); else if (o === "/") b = Q(rnd(-6, 9)); else b = Q(rnd(-8, 20)); E = [o, Q(a), b]; sel.el.selectedIndex = -1; st.reset(); }, "btn-s");
  const st = k.stepper(() => 4, () => {}, { ms: 1300 });
  k.loop(dt => {
    c.begin(); const { w, h } = c; const K = st.k, [o, a, b] = E, s = sol(), [tag, verb, why] = inv();
    // values for the tilt
    const vL = K >= 1 ? s : b, vR = K >= 2 ? s : b;
    const target = qeq(vL, vR) ? 0 : (qv(vL) > qv(vR) ? .16 : -.16);
    ang = k.reduce ? target : lerp(ang, target, Math.min(1, dt * 5));
    // header
    const L0 = lhs(), R0 = nt(b);
    let head;
    if (K === 0) head = [[L0, C.text], [" = ", C.text], [R0, C.pink]];
    else if (K === 1) head = [[L0 + " ", C.text], [tag, C.amber], ["  ≠  ", C.red], [R0, C.pink]];
    else if (K === 2) head = [[L0 + " ", C.text], [tag, C.amber], [" = ", C.text], [R0 + " ", C.pink], [tag, C.amber]];
    else if (K === 3) head = [["x", C.cyan, "italic"], [" = ", C.text], [nt(s), C.green]];
    else { const S = s.n < 0 ? `(${nt(s)})` : nt(s); const chk = o === "+" ? `${S} + ${nt(a)}` : o === "-" ? `${S} − ${nt(a)}` : o === "*" ? `${coef(a)}(${nt(s)})` : `${S} ÷ ${ntp(a)}`; head = [[chk, C.text], [" = ", C.text], [R0, C.pink], ["  ✓", C.green]]; }
    const fs = fitSize(d, head.map(p => [p[0]]), 30, F.math, w - 30);
    head.forEach(p => { if (p[2] === "italic") p[2] = `italic ${fs}px ${F.math}`; });
    runs(d, head, w / 2, 18 + fs, `${fs}px ${F.math}`);
    const narr = ["The scale is level: both sides are equal.", `Apply ${verb} to the left side only…`, `…and to the right side too. Level again.`, "Simplify both sides.", "Check: substitute the solution into the original equation."][K];
    const nf = fitSize(d, [[narr]], 15, F.sans, w - 30);
    d.text(narr, w / 2, 30 + fs + 18, { font: `${nf}px ${F.sans}`, color: K === 1 ? C.red : C.muted, align: "center" });
    // scale
    const pw = Math.min(220, (w - 40) / 2 - 14), hl = pw / 2 + 22, py = fs + 104, baseY = h - 30;
    const S = Math.max(20, Math.min(40, pw / 4.4, (baseY - py - 110) / 3));
    const xItems = () => { if (K >= 3) return [bagItem(k, d, S, "x", C.cyan)]; if (o === "*" && a.d === 1 && a.n >= 2 && a.n <= 4 && !E[3]) { const r = []; for (let i = 0; i < a.n; i++) r.push(bagItem(k, d, S * .92, "x", C.cyan)); return r; } if (o === "*" || o === "/") return [boxItem(k, d, S, lhs(), C.cyan)]; return [bagItem(k, d, S, "x", C.cyan)]; };
    const left = xItems(), right = [];
    if (K < 3 && (o === "+" || o === "-")) { left.push(boxItem(k, d, S, (o === "-" ? "−" : "+") + nt(a), C.pink)); if (K >= 1) left.push(boxItem(k, d, S, tag.replace(" ", ""), C.amber, C.amber)); }
    if (K < 3) { right.push(boxItem(k, d, S, nt(b), C.pink)); if (K >= 2 && (o === "+" || o === "-")) right.push(boxItem(k, d, S, tag.replace(" ", ""), C.amber, C.amber)); }
    else right.push(boxItem(k, d, S, nt(s), C.green, C.green));
    const mulTag = (o === "*" || o === "/") ? tag : null;
    drawScale(k, c, { cx: w / 2, py, hl, pw, hang: S * 2.6 + 34, ang, baseY, beamCol: qeq(vL, vR) ? (K >= 3 ? C.green : C.amber) : C.red, leftCol: C.pink, rightCol: C.pink, left, right, gap: 5,
      leftTag: K >= 1 && K < 3 ? mulTag : null, rightTag: K === 2 ? mulTag : null, tagSize: 14 });
    const lm = K === 0 ? `<div class="big">${M(`${lhs(true)} = <span class="c3">${nh(b)}</span>`)}</div><div class="note">Goal: get x alone. Look at what is being done to x, and undo it.</div>`
      : K === 1 ? `<div class="big">${M(`<span class="c1">${tag}</span> on one side only`)}</div><div class="note">Changing one side breaks the balance. Whatever you do to one side, do to the other.</div>`
      : K === 2 ? `<div class="big">${M(`<span class="c1">${tag}</span> on both sides`)}</div><div class="note">${why[0].toUpperCase() + why.slice(1)}. The two sides stay equal.</div>`
      : K === 3 ? `<div class="big">${M(`<i class="c2">x</i> = <span class="c5">${nh(s)}</span>`)}</div><div class="note">${o === "+" || o === "-" ? `The ${o === "+" ? "+" : "−"}${nt(a)} and ${tag.replace(" ", "")} cancel to 0, leaving x.` : `The operation on x is undone, leaving 1x = x.`}</div>`
      : `<div class="big">${M(`${lhs(true).replace(/<i class="c2">x<\/i>/, s.n < 0 || o === "*" ? `(<span class="c5">${nh(s)}</span>)` : `<span class="c5">${nh(s)}</span>`)} = <span class="c3">${nh(b)}</span> ✓`)}</div><div class="note">The solution makes the original equation true.</div>`;
    k.setRO(`<div><h2>Solution</h2><div class="ro-big" style="margin-top:8px"><i class="c2">x</i> = <span class="num ${K >= 3 ? "c5" : ""}">${K >= 3 ? nh(s) : "?"}</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`${lhs(true)} = <span class="c3">${nh(b)}</span>`)}<span class="lbl">the equation</span></div>
        <div class="row"><span class="m c1">inverse</span> <span class="v c1">${tag}</span><span class="lbl">${why}</span></div>
        <div class="row">${M("step")} <span class="v">${K} of 4</span><span class="lbl">one side, both sides, simplify, check</span></div>
      </div>
      <div class="landmark${K === 1 || K >= 3 ? " hit" : ""}">${lm}</div>
      <p class="narr">Addition and subtraction undo each other; so do multiplication and division.</p>`);
  });
};

/* ---------- pa-inequalities: number line ---------- */
L["pa-inequalities"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let op = "<", a = 2, t = -3, da = 2, dt_ = -3, drag = false, geo = null, back = false;
  const SYM = { "<": "<", "<=": "≤", ">": ">", ">=": "≥" }, HT = { "<": "&lt;", "<=": "≤", ">": "&gt;", ">=": "≥" }, REV = { "<": ">", "<=": ">=", ">": "<", ">=": "<=" };
  const WORD = { "<": "is less than", "<=": "is less than or equal to", ">": "is greater than", ">=": "is greater than or equal to" };
  k.select("Symbol", [["<", "&lt;"], ["<=", "≤"], [">", "&gt;"], [">=", "≥"]], op, v => op = v);
  k.slider(`<span class="c1"><i>a</i></span>`, -8, 8, .5, a, v => a = v, v => k.fmt(v, 1));
  const ts = k.slider(`<span class="c3">test</span>`, -10, 10, .5, t, v => t = v, v => k.fmt(v, 1));
  const bb = k.button("Read it backwards", () => { back = !back; bb.textContent = back ? "Read it forwards" : "Read it backwards"; }, "btn ghost");
  k.hint("Drag the pink test point");
  const setT = e => { if (!geo) return; const q = c.xy(e); t = Math.max(-10, Math.min(10, Math.round(geo.inv(q.x) * 2) / 2)); ts.set(t); };
  c.cv.addEventListener("pointerdown", e => { drag = true; c.cv.setPointerCapture(e.pointerId); setT(e); });
  c.cv.addEventListener("pointermove", e => { if (drag) setT(e); });
  c.cv.addEventListener("pointerup", () => drag = false);
  c.cv.style.cursor = "pointer";
  const holds = v => op === "<" ? v < a : op === "<=" ? v <= a : op === ">" ? v > a : v >= a;
  k.loop(dt => {
    da = lerp(da, a, Math.min(1, dt * 12)); dt_ = lerp(dt_, t, Math.min(1, dt * 16));
    c.begin(); const { w, h } = c;
    const x0 = 26, x1 = w - 26, y = h * .6, X = v => x0 + (x1 - x0) * (v + 10) / 20;
    geo = { inv: px => (px - x0) / (x1 - x0) * 20 - 10 };
    const S = SYM[op], left = op[0] === "<";
    // header
    const hd = back ? [[k.fmt(a, 1), C.amber], [` ${SYM[REV[op]]} `, C.text], ["x", C.cyan, "i"]] : [["x", C.cyan, "i"], [` ${S} `, C.text], [k.fmt(a, 1), C.amber]];
    const fs = Math.min(40, w / 9); hd.forEach(p => { if (p[2]) p[2] = `italic ${fs}px ${F.math}`; });
    runs(d, hd, w / 2, 16 + fs, `${fs}px ${F.math}`);
    const say = back ? `${k.fmt(a, 1)} ${WORD[REV[op]]} x  (the same statement)` : `x ${WORD[op]} ${k.fmt(a, 1)}`;
    d.text(say, w / 2, 16 + fs + 26, { font: `${Math.min(15, w / 26)}px ${F.sans}`, color: C.muted, align: "center" });
    // solution set
    const end = left ? x0 - 12 : x1 + 12;
    c.g.save(); c.g.fillStyle = k.alpha(C.cyan, .1); c.g.fillRect(Math.min(X(da), end), y - 22, Math.abs(end - X(da)), 44); c.g.restore();
    d.line(X(da), y, end + (left ? 6 : -6), y, C.cyan, 6);
    d.arrow(end + (left ? 12 : -12), y, end + (left ? -6 : 6), y, C.cyan, 6);
    d.line(x0 - 14, y, x1 + 14, y, k.alpha(C.muted, .8), 1.5);
    const every = w < 560 ? 2 : 1;
    for (let v = -10; v <= 10; v++) { d.line(X(v), y - (v % 5 ? 5 : 9), X(v), y + (v % 5 ? 5 : 9), v === 0 ? C.text : C.faint, v === 0 ? 2 : 1); if (v % every === 0) d.text(sg(v), X(v), y + 28, { font: `12px ${F.mono}`, color: v === 0 ? C.text : C.faint, align: "center" }); }
    d.text("solutions", left ? x0 : x1, y - 30, { font: `600 11px ${F.ui}`, color: C.cyan, align: left ? "left" : "right" });
    // boundary
    const closed = op.length === 2;
    if (closed) d.circle(X(da), y, 9, C.amber); else d.circle(X(da), y, 8, C.ink, C.amber, 3);
    d.text(`a = ${k.fmt(a, 1)}`, X(da), y + 50, { font: `600 14px ${F.mono}`, color: C.amber, align: "center" });
    d.text(closed ? "closed: included" : "open: not included", X(da), y + 68, { font: `12px ${F.sans}`, color: C.amber, align: "center" });
    // test point
    const ok = holds(t), tx = X(dt_), ty = y - 70;
    d.line(tx, y - 12, tx, ty + 12, k.alpha(C.pink, .7), 1.5, [3, 3]);
    d.circle(tx, y, 7, C.pink, C.ink, 2);
    const lab = [[k.fmt(t, 1), C.pink], [` ${S} `, C.text], [k.fmt(a, 1), C.amber], [ok ? "  true" : "  false", ok ? C.green : C.red]];
    const lw = runs(d, [], 0, 0, "") || lab.reduce((s2, p) => s2 + d.width(p[0], `600 15px ${F.math}`), 0);
    const bx = Math.max(6, Math.min(w - lw - 18, tx - lw / 2 - 6));
    d.rr(bx, ty - 14, lw + 12, 26, 5, k.alpha(C.ink, .9), ok ? C.green : C.red, 1.5);
    runs(d, lab, bx + 6, ty + 5, `600 15px ${F.math}`, "left");
    const eqB = Math.abs(t - a) < 1e-9;
    const iv = op === "<" ? `(−∞, ${k.fmt(a, 1)})` : op === "<=" ? `(−∞, ${k.fmt(a, 1)}]` : op === ">" ? `(${k.fmt(a, 1)}, ∞)` : `[${k.fmt(a, 1)}, ∞)`;
    const ex = [1, 2.5, 5].map(s2 => left ? a - s2 : a + s2);
    k.setRO(`<div><h2>Inequality</h2><div class="ro-big" style="margin-top:8px">${back ? `<span class="c1">${k.fmt(a, 1)}</span> ${HT[REV[op]]} <i class="c2">x</i>` : `<i class="c2">x</i> ${HT[op]} <span class="c1">${k.fmt(a, 1)}</span>`}</div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2">set</span> <span class="v c2">{<i>x</i> | <i>x</i> ${HT[op]} ${k.fmt(a, 1)}}</span><span class="lbl">set-builder notation</span></div>
        <div class="row"><span class="m c2">interval</span> <span class="v c2">${iv}</span><span class="lbl">a bracket includes the endpoint, a parenthesis excludes it; ∞ always gets a parenthesis</span></div>
        <div class="row"><span class="m c3">test</span> <span class="v c3">${k.fmt(t, 1)}</span> ${HT[op]} ${k.fmt(a, 1)} <span class="v" style="color:var(--${ok ? "green" : "red"})">${ok ? "true" : "false"}</span><span class="lbl">${ok ? "so it is a solution" : "so it is not a solution"}</span></div>
        <div class="row">${M("some solutions")} <span class="v">${ex.map(v => k.fmt(v, 1)).join(", ")}, …</span><span class="lbl">infinitely many, including fractions and decimals</span></div>
      </div>
      <div class="landmark${eqB ? " hit" : ""}">${eqB ? `<div class="big">${M(`<span class="c3">${k.fmt(t, 1)}</span> ${HT[op]} <span class="c1">${k.fmt(a, 1)}</span> is ${ok ? "true" : "false"}`)}</div><div class="note">The test point sits on the boundary. ${closed ? "With ≤ or ≥ the boundary is included: closed circle." : "With < or > the boundary itself is not a solution: open circle."}</div>`
        : `<div class="big">${M(closed ? "● closed circle: a is included" : "○ open circle: a is excluded")}</div><div class="note">An equation like x = ${k.fmt(a, 1)} has one solution. An inequality has a whole ray of them, shaded ${left ? "to the left" : "to the right"}.</div>`}</div>
      <p class="narr">Drag the test point onto the boundary, then switch between &lt; and ≤.</p>`);
  });
};

/* ---------- pa-functions: function machine + vertical-line test ---------- */
L["pa-functions"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const sq = n => { const r = Math.round(Math.sqrt(n)); return r * r === n ? r : null; };
  const RULES = [
    { name: "f(x) = 2x + 1", f: x => [2 * x + 1], y: [-10, 12], fn: true, sub: x => `2(${sg(x)}) + 1` },
    { name: "f(x) = x²", f: x => [x * x], y: [-3, 27], fn: true, sub: x => `(${sg(x)})²` },
    { name: "f(x) = |x| − 2", f: x => [Math.abs(x) - 2], y: [-5, 6], fn: true, sub: x => `|${sg(x)}| − 2` },
    { name: "f(x) = 3 − x", f: x => [3 - x], y: [-4, 9], fn: true, sub: x => `3 − ${pn(x)}` },
    { name: "x = y²", f: x => x < 0 ? [] : x === 0 ? [0] : [Math.sqrt(x), -Math.sqrt(x)], y: [-4, 4], fn: false, rad: x => x, sub: x => `y² = ${sg(x)}` },
    { name: "x² + y² = 25", f: x => { const r = 25 - x * x; return r < -1e-9 ? [] : Math.abs(r) < 1e-9 ? [0] : [Math.sqrt(r), -Math.sqrt(r)]; }, y: [-6, 6], fn: false, rad: x => 25 - x * x, sub: x => `y² = 25 − ${pn(x)}² = ${25 - x * x}` }
  ];
  let ri = 0, x = 2, dx = 2, anim = 1, sweep = -1, sweepFail = null, sweepDone = false, drag = false, P = null;
  const seen = new Set(["2"]);
  const setX = v => { if (v !== x) { x = v; anim = 0; seen.add(String(x)); } };
  k.select("Rule", RULES.map((r, i) => [i, r.name]), 0, v => { ri = +v; seen.clear(); seen.add(String(x)); anim = 0; sweepDone = false; sweepFail = null; });
  const sl = k.slider(`<span class="c2">input <i>x</i></span>`, -5, 5, 1, x, v => setX(v));
  k.button("Vertical-line test", () => { sweep = -6; sweepFail = null; sweepDone = false; });
  c.cv.addEventListener("pointerdown", e => { if (!P) return; const q = c.xy(e); if (q.x < P.left || q.y < P.top || q.y > P.top + P.height) return; drag = true; c.cv.setPointerCapture(e.pointerId); const v = Math.max(-5, Math.min(5, Math.round(P.inv(q.x, q.y).x))); setX(v); sl.set(v); });
  c.cv.addEventListener("pointermove", e => { if (!drag || !P) return; const q = c.xy(e); const v = Math.max(-5, Math.min(5, Math.round(P.inv(q.x, q.y).x))); setX(v); sl.set(v); });
  c.cv.addEventListener("pointerup", () => drag = false);
  k.hint("Drag on the graph to move the vertical line");
  const outLbl = (R, v) => { if (R.fn) return R.f(v).map(sg); const rad = R.rad(v); if (rad < 0) return []; if (rad === 0) return ["0"]; const s = sq(rad); return s !== null ? [String(s), "−" + s] : [`√${rad}`, `−√${rad}`]; };
  k.loop(dt => {
    const R = RULES[ri];
    anim = k.reduce ? 1 : Math.min(1, anim + dt * 1.6); dx = lerp(dx, x, Math.min(1, dt * 12));
    if (sweep > -99) { sweep += dt * (k.reduce ? 12 : 3.2); const ys = R.f(sweep); if (ys.length > 1 && !sweepFail) sweepFail = sweep; if (sweep > 6) { sweep = -100; sweepDone = true; } }
    c.begin(); const { w, h } = c;
    const wide = w >= 620;
    const mR = wide ? { x: 12, y: 16, w: w * .4, h: h - 32 } : { x: 8, y: 8, w: w - 16, h: Math.min(170, h * .36) };
    const gR = wide ? { x: mR.x + mR.w + 14, y: 12, w: w - mR.w - 38, h: h - 24 } : { x: 6, y: mR.y + mR.h + 6, w: w - 12, h: h - mR.h - 22 };
    // machine
    const outs = outLbl(R, x), vals = R.f(x);
    const my = mR.y + mR.h * (wide ? .42 : .5), bw = Math.min(mR.w * .5, 200), bh = Math.min(86, mR.h * (wide ? .22 : .46)), bx = mR.x + (mR.w - bw) / 2;
    const inX = mR.x + 24, outX = mR.x + mR.w - 30;
    d.rr(bx, my - bh / 2, bw, bh, 10, k.alpha(C.amber, anim > .35 && anim < .7 ? .22 : .1), C.amber, 2);
    d.text("RULE", bx + bw / 2, my - bh / 2 + 16, { font: `600 10px ${F.ui}`, color: k.alpha(C.amber, .8), align: "center" });
    const rf = fitSize(d, [[R.name]], 20, F.math, bw - 14);
    d.text(R.name, bx + bw / 2, my + 8, { font: `${rf}px ${F.math}`, color: C.amber, align: "center", base: "middle" });
    d.arrow(inX + 18, my, bx - 4, my, C.muted, 1.5); d.arrow(bx + bw + 4, my, outX - 22, my, C.muted, 1.5);
    const ph = ease(Math.min(1, anim / .4)), ballX = lerp(inX, bx + bw / 2, ph);
    if (anim < .45) { d.circle(ballX, my, 17, C.cyan); d.text(sg(x), ballX, my + 1, { font: `600 13px ${F.mono}`, color: C.ink, align: "center", base: "middle" }); }
    d.circle(inX, my, 17, null, k.alpha(C.cyan, .6), 1.5); d.text(sg(x), inX, my + 1, { font: `600 13px ${F.mono}`, color: C.cyan, align: "center", base: "middle" });
    d.text("input", inX, my - 26, { font: `600 10px ${F.ui}`, color: C.cyan, align: "center" }); d.text("output", outX, my - (outs.length > 1 ? 44 : 26), { font: `600 10px ${F.ui}`, color: C.pink, align: "center" });
    const oa = Math.max(0, (anim - .6) / .4);
    if (!outs.length) d.text("none", outX, my + 1, { font: `600 13px ${F.mono}`, color: k.alpha(C.red, oa), align: "center", base: "middle" });
    outs.forEach((o, i) => { const oy = my + (outs.length > 1 ? (i ? 20 : -20) : 0), rr = Math.max(17, d.width(o, `600 13px ${F.mono}`) / 2 + 6); d.circle(outX, oy, rr, k.alpha(C.pink, oa)); d.text(o, outX, oy + 1, { font: `600 13px ${F.mono}`, color: k.alpha(C.ink, oa), align: "center", base: "middle" }); });
    const subT = R.fn ? `${R.sub(x)} = ${outs[0]}` : outs.length ? `${R.sub(x)}, so y = ${outs.length > 1 ? "±" + outs[0] : outs[0]}` : `${R.sub(x)}: no real y`;
    const sf = fitSize(d, [[subT]], 16, F.math, mR.w - 10);
    d.text(subT, mR.x + mR.w / 2, my + bh / 2 + 26, { font: `${sf}px ${F.math}`, color: k.alpha(C.text, Math.max(.3, oa)), align: "center" });
    // graph
    P = k.plot(c, { xmin: -6, xmax: 6, ymin: R.y[0], ymax: R.y[1], xstep: 1, ystep: R.y[1] - R.y[0] > 16 ? 5 : 2, pad: { l: gR.x + 26, r: w - gR.x - gR.w + 8, t: gR.y + 8, b: h - gR.y - gR.h + 22 } });
    P.grid(); P.axes();
    if (R.fn) P.fn(v => R.f(v)[0], k.alpha(C.amber, .55), 2);
    else { P.fn(v => { const s = R.f(v); return s.length ? s[0] : NaN; }, k.alpha(C.amber, .55), 2); P.fn(v => { const s = R.f(v); return s.length ? s[s.length - 1] : NaN; }, k.alpha(C.amber, .55), 2); }
    seen.forEach(s => { const v = +s; R.f(v).forEach(yy => P.point(v, yy, k.alpha(C.pink, .45), 4)); });
    const lx = sweep > -99 ? sweep : dx;
    const hitsY = R.f(lx);
    P.line(lx, P.ymin, lx, P.ymax, hitsY.length > 1 ? C.red : C.cyan, 2, [6, 4]);
    hitsY.forEach(yy => { P.point(lx, yy, hitsY.length > 1 ? C.red : C.pink, 7); });
    if (sweep <= -99 && Math.abs(dx - x) < .05) vals.forEach((yy, i) => { const lab = `(${sg(x)}, ${outs[i]})`, f = `600 14px ${F.math}`, lw = d.width(lab, f); const X = P.X(x) + 12 + lw > gR.x + gR.w ? P.X(x) - 14 - lw : P.X(x) + 12; const Y = Math.max(P.top + 14, Math.min(P.top + P.height - 6, P.Y(yy) - 8)); d.rr(X - 4, Y - 15, lw + 8, 20, 4, k.alpha(C.ink, .85)); d.text(lab, X, Y, { font: f, color: C.amber }); });
    if (sweepFail !== null) d.text(`fails at x ≈ ${k.fmt(sweepFail, 1)}`, P.left + P.width - 6, P.top + 16, { font: `600 13px ${F.sans}`, color: C.red, align: "right" });
    else if (sweepDone) d.text("passes: never two hits", P.left + P.width - 6, P.top + 16, { font: `600 13px ${F.sans}`, color: C.green, align: "right" });
    const two = outs.length > 1, none = !outs.length;
    const pairsH = outs.map(o => `(<span class="c2">${sg(x)}</span>, <span class="c3">${o}</span>)`).join(", ");
    k.setRO(`<div><h2>Output</h2><div class="ro-big" style="margin-top:8px">${R.fn ? `<i>f</i>(<span class="c2">${sg(x)}</span>) = <span class="num c3">${outs[0]}</span>` : none ? `<span class="c2">${sg(x)}</span> → <span style="color:var(--red)">none</span>` : `<span class="c2">${sg(x)}</span> → <span class="c3">${two ? "±" + outs[0] : outs[0]}</span>`}</div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2">input</span> <span class="v c2">${sg(x)}</span><span class="lbl">an element of the domain you feed in</span></div>
        <div class="row"><span class="m c1">rule</span> <span class="v c1">${R.name}</span><span class="lbl">${R.fn ? "one formula, one answer" : "an equation in x and y, not yet solved for y"}</span></div>
        <div class="row"><span class="m c3">output${two ? "s" : ""}</span> <span class="v c3">${none ? "none" : outs.join(" and ")}</span><span class="lbl">${none ? `${sg(x)} is not in the domain` : two ? "two outputs for one input" : "exactly one output"}</span></div>
        ${outs.length ? `<div class="row"><span class="m c1">pair${two ? "s" : ""}</span> <span class="v">${pairsH}</span><span class="lbl">plotted as points on the graph</span></div>` : ""}
      </div>
      <div class="landmark${!R.fn ? " hit" : ""}">${R.fn ? `<div class="big">${M("a function: one input, one output")}</div><div class="note">Any vertical line meets the graph at most once. Run the vertical-line test to sweep a line across.</div>` : `<div class="big">${M(two ? `${sg(x)} → ${outs[0]} and ${outs[1]}` : none ? `${sg(x)}: no output` : `${R.name} is not a function`)}</div><div class="note">${R.name} is not a function of x: some inputs give two outputs, so a vertical line hits the graph twice.${none ? " Inputs with no output are simply outside the domain." : ""}</div>`}</div>
      <p class="narr">Feed in several inputs; each result leaves a point on the graph.</p>`);
  });
};
})();
