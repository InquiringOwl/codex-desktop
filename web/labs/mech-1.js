/* ============ Labs: Mechanics 1 (units, dimensions, significant figures, vectors, components, vector products) ============ */
(function(){
const L = window.LABS;
const MI = "−";
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const snap = (v, s) => Math.round(v / s) * s;
const deg = r => r * 180 / Math.PI, rad = d => d * Math.PI / 180;
const ang360 = (x, y) => { let a = deg(Math.atan2(y, x)); if (a < 0) a += 360; return Math.abs(a - 360) < 1e-9 ? 0 : a; };
const SUPS = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const supT = n => String(n).split("").map(ch => SUPS[ch] || ch).join("");
// n significant figures; html → "× 10<sup>e</sup>", otherwise Unicode superscripts
function sig(x, n = 3, html = true){
  if (!isFinite(x)) return "undefined";
  if (x === 0) return "0";
  let e = Math.floor(Math.log10(Math.abs(x))), m = +(x / 10 ** e).toFixed(n - 1);
  if (Math.abs(m) >= 10) { m /= 10; e++; }
  if (e >= 6 || e <= -4) { const ms = m.toFixed(n - 1).replace("-", MI); return html ? `${ms} × 10<sup>${String(e).replace("-", MI)}</sup>` : `${ms} × 10${supT(e)}`; }
  const dec = Math.max(0, n - 1 - e), v = +(m * 10 ** e).toFixed(dec);
  return v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }).replace("-", MI);
}
const pm = v => (v < 0 ? MI : "") + Math.abs(v);
const fx = (v, d = 1) => { const s = (Math.abs(v) < 0.5 * 10 ** -d ? 0 : v).toFixed(d); return s.replace("-", MI); };

if (!document.getElementById("m1-css")) {
  const s = document.createElement("style"); s.id = "m1-css";
  s.textContent = `.m1-dom{padding:58px 14px 18px!important}
.m1-x{text-decoration:line-through;text-decoration-color:var(--violet);text-decoration-thickness:2px;color:var(--violet);opacity:.8}
.m1-chain{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 12px;font:400 20px/1.3 var(--math)}
.m1-chain .fb{display:inline-flex;flex-direction:column;align-items:center;min-width:78px;padding:6px 10px;border:1px solid var(--line-2);border-radius:4px;background:rgba(17,24,39,.8)}
.m1-chain .fb .t{padding:2px 4px;border-bottom:1px solid var(--muted);white-space:nowrap}
.m1-chain .fb .b{padding:2px 4px;white-space:nowrap}
.m1-chain .fb.given{border-color:var(--cyan);box-shadow:0 0 0 1px rgba(92,200,224,.25)}
.m1-chain .fb.fac{border-color:rgba(240,124,160,.55)}
.m1-chain .fb.new{animation:m1in .45s ease-out}
@keyframes m1in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
.m1-chain .pw{display:inline-flex;align-items:center}
.m1-chain .pw>sup{font-size:15px;color:var(--pink);margin-left:2px;align-self:flex-start}
.m1-chain .op{color:var(--faint)}
.m1-chain .res{font-size:23px;white-space:nowrap}
.m1-cap{text-align:center;color:var(--muted);font:14px/1.5 var(--sans);margin:22px auto 0;max-width:520px}
.m1-lad{display:grid;gap:3px;max-width:600px;margin:0 auto;font:400 17px/1.35 var(--math)}
.m1-rung{display:grid;grid-template-columns:34px 82px 64px minmax(0,1fr);align-items:baseline;gap:0 8px;padding:5px 10px;border-radius:4px;color:var(--muted)}
.m1-rung .sym{font:600 16px var(--mono);color:var(--text)}
.m1-rung .nm{font:12px var(--sans);color:var(--faint);letter-spacing:.04em}
.m1-rung .pw{font:13px var(--mono);color:var(--pink)}
.m1-rung .val{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.m1-rung.base{border:1px dashed var(--line-2)}
.m1-rung.best{background:rgba(242,184,75,.09);box-shadow:inset 3px 0 0 var(--amber);color:var(--text)}
.m1-rung.best .val{color:var(--amber)}
.m1-head{font:600 11px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint);text-align:center;margin-bottom:10px}
.m1-q{font:400 19px/1.4 var(--math);text-align:center;margin-bottom:14px}
.m1-calc{display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;gap:10px 14px;font:400 22px/1.3 var(--math)}
.m1-card{border:1px solid var(--line-2);border-radius:5px;padding:8px 14px;text-align:center;background:rgba(17,24,39,.8)}
.m1-card.lim{border-color:var(--amber)}
.m1-card .n{color:var(--cyan)}
.m1-card .s{display:block;font:11px/1.4 var(--mono);color:var(--faint);margin-top:4px}
.m1-card.lim .s{color:var(--amber)}
.m1-calc .op{align-self:center;color:var(--faint)}
.m1-raw{margin:20px auto 0;text-align:center;font:400 26px/1.4 var(--math)}
.m1-raw .k{color:var(--amber)} .m1-raw .d{color:var(--violet);text-decoration:line-through;text-decoration-thickness:1px;opacity:.85}
.m1-raw .lbl{display:block;font:11px/1.4 var(--sans);color:var(--faint);letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px}
.m1-final{margin-top:10px;text-align:center;font:400 30px/1.3 var(--math);color:var(--amber)}
@media (max-width:560px){.m1-chain{font-size:17px}.m1-chain .fb{min-width:60px;padding:4px 6px}.m1-rung{grid-template-columns:28px 64px 52px minmax(0,1fr);font-size:15px;padding:4px 6px}.m1-calc{font-size:19px}.m1-raw{font-size:22px}.m1-final{font-size:25px}}`;
  document.head.appendChild(s);
}

// controls created by fn(), so a mode can show or hide them together
const group = (k, fn) => { const n = k.ctl.children.length; const r = fn(); return { els: Array.from(k.ctl.children).slice(n), r }; };
const show = (g, on) => g.els.forEach(e => { e.style.display = on ? "" : "none"; });
// drag handles on a k.plot: handles = [{get:() => [x, y], set:(x, y) => …}]
function dragger(c, getP, handles, onDone){
  let act = null;
  c.cv.addEventListener("pointerdown", e => { const P = getP(); if (!P) return; const p = c.xy(e); let best = 30;
    handles().forEach(h => { const [x, y] = h.get(); const dd = Math.hypot(p.x - P.X(x), p.y - P.Y(y)); if (dd < best) { best = dd; act = h; } });
    if (act) { c.cv.setPointerCapture(e.pointerId); e.preventDefault(); } });
  c.cv.addEventListener("pointermove", e => { if (!act) return; const P = getP(); const p = c.xy(e); const q = P.inv(p.x, p.y); act.set(q.x, q.y); });
  const up = () => { if (act && onDone) onDone(); act = null; };
  c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
}
function arrowP(d, P, x1, y1, x2, y2, color, w = 3){ if (Math.hypot(P.X(x2) - P.X(x1), P.Y(y2) - P.Y(y1)) < 2) return; d.arrow(P.X(x1), P.Y(y1), P.X(x2), P.Y(y2), color, w); }
function handleP(d, P, x, y, color){ d.circle(P.X(x), P.Y(y), 9, "rgba(0,0,0,0)", color, 1.5); d.circle(P.X(x), P.Y(y), 3.5, color); }
function labelAt(d, F, P, s, x, y, color, dx = 10, dy = -10){ d.text(s, P.X(x) + dx, P.Y(y) + dy, { font: `italic 700 17px ${F.math}`, color, align: "center", base: "middle" }); }
// label beside a vector's midpoint, offset perpendicular to it
function vecLabel(d, F, P, s, x1, y1, x2, y2, color, side = 1){
  const mx = (P.X(x1) + P.X(x2)) / 2, my = (P.Y(y1) + P.Y(y2)) / 2, dx = P.X(x2) - P.X(x1), dy = P.Y(y2) - P.Y(y1), l = Math.hypot(dx, dy) || 1;
  d.text(s, mx - dy / l * 15 * side, my + dx / l * 15 * side, { font: `italic 700 17px ${F.math}`, color, align: "center", base: "middle" });
}
function subLab(d, F, rest, sb, x, y, color, align){
  const f1 = `italic 600 14px ${F.math}`, f2 = `italic 600 10px ${F.math}`, f3 = `600 13px ${F.mono}`;
  const w = d.width("A", f1) + d.width(sb, f2) + 3 + d.width(rest, f3);
  let x0 = align === "center" ? x - w / 2 : align === "right" ? x - w : x;
  x0 += d.text("A", x0, y, { font: f1, color }); x0 += d.text(sb, x0, y + 4, { font: f2, color }) + 3; d.text(rest, x0, y, { font: f3, color });
}
function angArc(g, P, a0, a1, r, color){ g.save(); g.strokeStyle = color; g.lineWidth = 2; g.beginPath(); g.arc(P.X(0), P.Y(0), r, -rad(a0), -rad(a1), a1 > a0); g.stroke(); g.restore(); }

/* =============== mech-units: conversion chain + prefix ladder =============== */
L["mech-units"] = k => {
  const { M } = k; const dom = k.dom(); dom.classList.add("m1-dom");
  const P = {
    kmh: { name: "Speed: km/h → m/s", v: 90, min: 5, max: 200, step: 1, dec: 1, num: [["km", 1]], den: [["h", 1]],
      f: [{ n: 1000, nu: [["m", 1]], d: 1, du: [["km", 1]], def: "1 km = 1000 m" }, { n: 1, nu: [["h", 1]], d: 3600, du: [["s", 1]], def: "1 h = 3600 s" }] },
    mph: { name: "Speed: mi/h → m/s", v: 65, min: 5, max: 150, step: 1, dec: 1, num: [["mi", 1]], den: [["h", 1]],
      f: [{ n: 1609.344, nu: [["m", 1]], d: 1, du: [["mi", 1]], def: "1 mi = 1609.344 m (exact)" }, { n: 1, nu: [["h", 1]], d: 3600, du: [["s", 1]], def: "1 h = 3600 s" }] },
    dens: { name: "Density: g/cm³ → kg/m³", v: 1.03, min: 0.5, max: 20, step: 0.01, dec: 2, num: [["g", 1]], den: [["cm", 3]],
      f: [{ n: 1, nu: [["kg", 1]], d: 1000, du: [["g", 1]], def: "1 kg = 1000 g" }, { n: 100, nu: [["cm", 1]], d: 1, du: [["m", 1]], p: 3, def: "1 m = 100 cm, so 1 m³ = 10⁶ cm³" }] },
    area: { name: "Area: ft² → m²", v: 1500, min: 100, max: 5000, step: 50, dec: 0, num: [["ft", 2]], den: [],
      f: [{ n: 0.3048, nu: [["m", 1]], d: 1, du: [["ft", 1]], p: 2, def: "1 ft = 0.3048 m (exact)" }] },
    fuel: { name: "Fuel economy: mi/gal → km/L", v: 30, min: 10, max: 60, step: 0.5, dec: 1, num: [["mi", 1]], den: [["gal", 1]],
      f: [{ n: 1.609344, nu: [["km", 1]], d: 1, du: [["mi", 1]], def: "1 mi = 1.609344 km (exact)" }, { n: 1, nu: [["gal", 1]], d: 3.785411784, du: [["L", 1]], def: "1 US gal = 3.785411784 L (exact)" }] }
  };
  const S = [
    { name: "Earth–Moon distance", x: 3.84e8 }, { name: "Radius of the Earth", x: 6.37e6 }, { name: "Height of Mount Everest", x: 8849 },
    { name: "A 100 m sprint", x: 100 }, { name: "Thickness of paper (about)", x: 1.0e-4 }, { name: "Red blood cell (about)", x: 8e-6 },
    { name: "Wavelength of green light", x: 5.5e-7 }, { name: "Hydrogen atom (about)", x: 1.06e-10 }
  ];
  const R = [["G", "giga", 9], ["M", "mega", 6], ["k", "kilo", 3], ["", "base unit", 0], ["c", "centi", -2], ["m", "milli", -3], ["μ", "micro", -6], ["n", "nano", -9], ["p", "pico", -12]];
  let mode = "chain", key = "kmh", val = P.kmh.v, sIdx = 0, lastK = -1;
  k.modes([["chain", "Conversion chain"], ["ladder", "Prefix ladder"]], mode, m => { mode = m; show(gC, m === "chain"); show(gL, m === "ladder"); render(); });
  const gC = group(k, () => {
    k.select("Quantity", Object.entries(P).map(([kk, p]) => [kk, p.name]), key, v => { key = v; const p = P[v]; val = p.v; sl.el.min = p.min; sl.el.max = p.max; sl.el.step = p.step; sl.set(val); st.reset(); });
    const sl = k.slider("start value", P.kmh.min, P.kmh.max, P.kmh.step, val, v => { val = v; render(); }, v => v.toFixed(P[key].dec));
    const st = k.stepper(() => P[key].f.length, () => render(), { ms: 1100 });
    return { sl, st };
  });
  const { sl, st } = gC.r;
  const gL = group(k, () => k.select("Length", S.map((s, i) => [i, s.name]), 0, v => { sIdx = +v; render(); }));
  show(gL, false);
  const uH = (u, e, x) => `<span class="${x ? "m1-x" : ""}">${u}${e !== 1 ? `<sup>${e}</sup>` : ""}</span>`;
  const nf = v => v.toLocaleString("en-US", { maximumFractionDigits: 9 });
  function unitsH(rem){ // rem: [[u, e]] with signed e
    const top = rem.filter(r => r[1] > 0), bot = rem.filter(r => r[1] < 0);
    const t = top.map(([u, e]) => u + (e !== 1 ? `<sup>${e}</sup>` : "")).join("·") || (bot.length ? "1" : "");
    const b = bot.map(([u, e]) => u + (e !== -1 ? `<sup>${-e}</sup>` : "")).join("·");
    return b ? `${t}/${bot.length > 1 ? "(" + b + ")" : b}` : t;
  }
  function chain(kk){
    const p = P[key], K = Math.min(kk === undefined ? st.k : kk, p.f.length);
    const toks = [];
    p.num.forEach(([u, e], j) => toks.push({ id: "g" + "n" + j, u, e, s: 1, o: 0 }));
    p.den.forEach(([u, e], j) => toks.push({ id: "g" + "d" + j, u, e, s: -1, o: 0 }));
    p.f.slice(0, K).forEach((f, i) => { const pw = f.p || 1;
      f.nu.forEach(([u, e], j) => toks.push({ id: i + "n" + j, u, e: e * pw, s: 1, o: i + 1 }));
      f.du.forEach(([u, e], j) => toks.push({ id: i + "d" + j, u, e: e * pw, s: -1, o: i + 1 })); });
    const x = new Set();
    toks.filter(t => t.o > 0).forEach(t => { const m = toks.find(q => q.o < t.o && !x.has(q.id) && q.s !== t.s && q.u === t.u && q.e === t.e); if (m) { x.add(m.id); x.add(t.id); } });
    const rem = []; toks.filter(t => !x.has(t.id)).forEach(t => { const r = rem.find(q => q[0] === t.u); if (r) r[1] += t.s * t.e; else rem.push([t.u, t.s * t.e]); });
    let v = val; p.f.slice(0, K).forEach(f => { v *= (f.n / f.d) ** (f.p || 1); });
    return { p, K, x, rem: rem.filter(r => r[1] !== 0), v };
  }
  function render(){
    if (mode === "ladder") return ladder();
    const { p, K, x, rem, v } = chain(), done = K === p.f.length;
    const gv = val.toFixed(p.dec);
    const given = `<span class="fb given"><span class="t"><span class="c2">${gv}</span> ${p.num.map(([u, e], j) => uH(u, e, x.has("gn" + j))).join("·")}</span><span class="b">${p.den.length ? p.den.map(([u, e], j) => uH(u, e, x.has("gd" + j))).join("·") : "1"}</span></span>`;
    const facs = p.f.slice(0, K).map((f, i) => {
      const box = `<span class="fb fac${i === K - 1 && K !== lastK ? " new" : ""}"><span class="t"><span class="c3">${nf(f.n)}</span> ${f.nu.map(([u, e], j) => uH(u, e, x.has(i + "n" + j))).join("·")}</span><span class="b"><span class="c3">${nf(f.d)}</span> ${f.du.map(([u, e], j) => uH(u, e, x.has(i + "d" + j))).join("·")}</span></span>`;
      return `<span class="op">×</span>` + (f.p ? `<span class="pw">(${box})<sup>${f.p}</sup></span>` : box);
    }).join("");
    lastK = K;
    const outU = unitsH(rem);
    const res = `<span class="op">=</span><span class="res ${done ? "c1" : ""}" style="${done ? "" : "color:var(--muted)"}">${sig(v, 3)} ${outU}</span>`;
    const next = p.f[K];
    const nextC = next ? (() => { const a = chain(K + 1).x; return [...new Set(Array.from(a).filter(id => !x.has(id) && id[0] === "g").map(id => (id[1] === "n" ? p.num : p.den)[+id.slice(2)]).map(t => t[0] + (t[1] !== 1 ? supT(t[1]) : "")))]; })() : [];
    const cancelled = [...new Set(Array.from(x).map(id => { const t = id[0] === "g" ? (id[1] === "n" ? p.num : p.den)[+id.slice(2)] : (id[1] === "n" ? p.f[+id[0]].nu : p.f[+id[0]].du)[+id.slice(2)]; return t[0]; }))];
    dom.innerHTML = `<div class="m1-chain">${given}${facs}${res}</div>
      <p class="m1-cap">${done ? `Every unit except the target has cancelled. The factors each equal 1, so the quantity itself never changed.` : K === 0 ? `Press Step to multiply by the first conversion factor.` : `The ${cancelled.length ? cancelled.join(" and ") : "unit"} ${cancelled.length > 1 ? "have" : "has"} cancelled. Step again for the next factor.`}</p>`;
    const inU = unitsH([...p.num.map(([u, e]) => [u, e]), ...p.den.map(([u, e]) => [u, -e])]);
    k.setRO(`<div><h2>Result</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${done ? sig(v, 3) : "?"}</span> <span style="font-size:.6em">${done ? outU : ""}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2">${gv} ${inU}</span><span class="lbl">starting quantity</span></div>
        ${p.f.map((f, i) => `<div class="row" style="${i < K ? "" : "opacity:.45"}">${M(`<span class="fr"><span>${nf(f.n)} ${f.nu.map(q => q[0]).join("")}</span><span>${nf(f.d)} ${f.du.map(q => q[0]).join("")}</span></span>${f.p ? `<sup>${f.p}</sup>` : ""} = 1`)}<span class="lbl">${f.def}</span></div>`).join("")}
        <div class="row"><span class="m">${sig(v, 3)} ${outU}</span><span class="lbl">${done ? "result, 3 significant figures" : `after ${K} of ${p.f.length} factor${p.f.length > 1 ? "s" : ""}`}</span></div>
      </div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${done ? M(`${gv} ${inU} = ${sig(v, 3)} ${outU}`) : M(`× <span class="fr"><span>${nf(next.n)} ${next.nu.map(q => q[0]).join("")}</span><span>${nf(next.d)} ${next.du.map(q => q[0]).join("")}</span></span>${next.p ? `<sup>${next.p}</sup>` : ""}`)}</div>
        <div class="note">${done ? (p.f.some(f => f.p) ? "A squared or cubed unit needs the whole factor squared or cubed, so the number changes by 10⁶ for cm³ → m³, not by 100." : "Units cancel like algebraic factors: one on top, one below.") : `Next factor: it cancels the ${nextC.join(" and ")} by putting ${nextC.length > 1 ? "them" : "it"} on the opposite side of the fraction line.`}</div></div>
      <p class="narr">Change the quantity or the starting value. Try the density: the length factor must be cubed.</p>`);
  }
  function ladder(){
    const s = S[sIdx], X = s.x;
    const best = R.filter(r => r[0] !== "c").reduce((b, r) => (X / 10 ** r[2] >= 1 && (b === null || r[2] > b[2]) ? r : b), null) || R[R.length - 1];
    const rows = R.map(r => { const v = X / 10 ** r[2];
      return `<div class="m1-rung${r === best ? " best" : ""}${r[2] === 0 ? " base" : ""}"><span class="sym">${r[0] || "—"}</span><span class="nm">${r[1]}</span><span class="pw">10<sup>${pm(r[2])}</sup></span><span class="val">${sig(v, 3)} ${r[0]}m</span></div>`; }).join("");
    dom.innerHTML = `<div class="m1-head">${s.name}: the same length on every rung</div><div class="m1-lad">${rows}</div>`;
    const bv = X / 10 ** best[2];
    k.setRO(`<div><h2>${s.name}</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${sig(bv, 3)}</span> <span style="font-size:.6em">${best[0]}m</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2">${sig(X, 3)} m</span><span class="lbl">in the base unit, scientific notation</span></div>
        <div class="row"><span class="m c3">1 ${best[0]}m = 10<sup>${pm(best[2])}</sup> m</span><span class="lbl">the conversion factor for the best prefix</span></div>
        <div class="row"><span class="m">${sig(X, 3)} m × <span class="fr"><span>1 ${best[0]}m</span><span>10<sup>${pm(best[2])}</sup> m</span></span> = ${sig(bv, 3)} ${best[0]}m</span></div>
      </div>
      <div class="landmark"><div class="big">${M(`unit × 1000 ⇒ number ÷ 1000`)}</div><div class="note">Each rung up makes the unit 1000 times bigger (100 or 10 times near the base unit), so the number shrinks by the same factor. The usual choice (amber) is the prefix that leaves a number from 1 to 999. Prefixes work on any unit: ns, MHz, kN. The kilogram is the one base unit that already has a prefix, so 1 mg = 10⁻⁶ kg.</div></div>
      <p class="narr">Pick another length and watch the amber rung move.</p>`);
  }
  render();
};

/* =============== mech-dimensions: dimension balancer + Fermi estimate =============== */
L["mech-dimensions"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const T = {
    pend: { name: "Pendulum period T(L, m, g)", q: "T", qd: [0, 0, 1], v: ["L", "m", "g"], vd: [[1, 0, 0], [0, 1, 0], [1, 0, -2]], vn: ["length", "bob mass", "gravity"], sol: [0.5, 0, -0.5], Cn: "2π", full: "T = 2π√(L/g)", fullH: "<i>T</i> = 2π√(<i>L</i>/<i>g</i>)", num: "L = 1.00 m: T = 2π√(1.00/9.80) s = 2.01 s" },
    fall: { name: "Fall time t(h, m, g)", q: "t", qd: [0, 0, 1], v: ["h", "m", "g"], vd: [[1, 0, 0], [0, 1, 0], [1, 0, -2]], vn: ["height", "mass", "gravity"], sol: [0.5, 0, -0.5], Cn: "√2", full: "t = √(2h/g)", fullH: "<i>t</i> = √(2<i>h</i>/<i>g</i>)", num: "h = 20.0 m: t = √(2·20.0/9.80) s = 2.02 s" },
    wave: { name: "Wave speed on a string v(F, μ, ℓ)", q: "v", qd: [1, 0, -1], v: ["F", "μ", "ℓ"], vd: [[1, 1, -2], [-1, 1, 0], [1, 0, 0]], vn: ["tension", "mass per length", "string length"], sol: [0.5, -0.5, 0], Cn: "1", full: "v = √(F/μ)", fullH: "<i>v</i> = √(<i>F</i>/<i>μ</i>)", num: "F = 100 N, μ = 0.0100 kg/m: v = 100 m/s" },
    esc: { name: "Escape speed v(G, m, R)", q: "v", qd: [1, 0, -1], v: ["G", "m", "R"], vd: [[3, -1, -2], [0, 1, 0], [1, 0, 0]], vn: ["gravitational constant", "planet mass", "planet radius"], sol: [0.5, 0.5, -0.5], Cn: "√2", full: "v = √(2Gm/R)", fullH: "<i>v</i> = √(2<i>Gm</i>/<i>R</i>)", num: "Earth: v = √(2·6.67×10⁻¹¹·5.97×10²⁴/6.37×10⁶) m/s = 11.2 km/s" }
  };
  const FP = {
    heart: { name: "Heartbeats in a lifetime", unit: "beats", f: [{ n: "beats per minute", s: 0 }, { n: "minutes per day", v: 1440 }, { n: "days per year", v: 365 }, { n: "years", s: 1 }] },
    water: { name: "Litres of water drunk in a lifetime", unit: "L", f: [{ n: "litres per day", s: 0 }, { n: "days per year", v: 365 }, { n: "years", s: 1 }] }
  };
  let mode = "bal", key = "pend", ex = [0, 0, 0], shown = [0, 0, 0], fkey = "heart";
  const fr = v => { const n = Math.round(v * 2); if (n === 0) return "0"; const s = n % 2 === 0 ? String(Math.abs(n / 2)) : (Math.abs(n) === 1 ? "½" : Math.abs(n) + "/2"); return (n < 0 ? MI : "") + s; };
  k.modes([["bal", "Dimension balancer"], ["fermi", "Fermi estimate"]], mode, m => { mode = m; show(gB, m === "bal"); show(gF, m === "fermi"); showF(); });
  const gB = group(k, () => {
    k.select("Formula for", Object.entries(T).map(([kk, t]) => [kk, t.name]), key, v => { key = v; ex = [0, 0, 0]; S.forEach((s, i) => { s.set(0); setLab(i); }); });
    const S = [0, 1, 2].map(i => k.slider(`power of <i>${T.pend.v[i]}</i>`, -2, 2, 0.5, 0, v => { ex[i] = v; }, fr));
    k.button("All zero", () => { ex = [0, 0, 0]; S.forEach(s => s.set(0)); }, "btn ghost");
    k.button("Solve", () => { ex = T[key].sol.slice(); S.forEach((s, i) => s.set(ex[i])); });
    return S;
  });
  const S = gB.r;
  const setLab = i => { S[i].el.parentElement.querySelector("label").innerHTML = `power of <i>${T[key].v[i]}</i>`; };
  const fv = [70, 80, 2, 80];
  const gF = group(k, () => {
    k.select("Estimate", Object.entries(FP).map(([kk, p]) => [kk, p.name]), fkey, v => { fkey = v; showF(); });
    const a = k.slider("beats per minute", 50, 100, 1, 70, v => fv[0] = v);
    const b = k.slider("years", 50, 100, 1, 80, v => fv[1] = v);
    const cL = k.slider("litres per day", 1, 4, 0.5, 2, v => fv[2] = v);
    const dY = k.slider("years", 50, 100, 1, 80, v => fv[3] = v);
    return { a, b, cL, dY };
  });
  const showF = () => { if (mode !== "fermi") return; const { a, b, cL, dY } = gF.r; const h = fkey === "heart"; [a, b].forEach(s => s.el.parentElement.style.display = h ? "" : "none"); [cL, dY].forEach(s => s.el.parentElement.style.display = h ? "none" : ""); };
  show(gF, false);
  const DC = () => [C.cyan, C.pink, C.violet], DN = ["L", "M", "T"];
  function balancer(dt){
    const t = T[key], W = c.w, H = c.h, e = k.reduce ? 1 : Math.min(1, dt * 10);
    const rhs = [0, 1, 2].map(j => t.vd.reduce((s, vd, i) => s + ex[i] * vd[j], 0));
    shown = shown.map((s, j) => lerp(s, rhs[j], e));
    const ok = rhs.every((r, j) => Math.abs(r - t.qd[j]) < 1e-9);
    // formula line
    const fs = Math.max(17, Math.min(26, W / 22)), y0 = 78;
    let parts = [[t.q, null, C.text], [" = C · ", null, C.muted]];
    t.v.forEach((v, i) => { parts.push([v, fr(ex[i]), C.text]); if (i < 2) parts.push([" · ", null, C.muted]); });
    const wOf = p => p[1] === null ? d.width(p[0], `italic ${fs}px ${F.math}`) : d.powW(p[0], p[1], fs);
    let tw = parts.reduce((s, p) => s + wOf(p), 0), x = W / 2 - tw / 2;
    parts.forEach(p => { if (p[1] === null) x += d.text(p[0], x, y0, { font: `${p[0].trim() === t.q ? "italic " : ""}${fs}px ${F.math}`, color: p[2] }); else x += d.pow(p[0], p[1], x, y0, { size: fs, color: C.text, ecolor: C.amber }); });
    // dimension line
    const dimS = arr => arr.map((v, j) => v === 0 ? "" : DN[j] + (v === 1 ? "" : `<sup>${fr(v)}</sup>`)).join("") || "1";
    const rowY = y0 + 30;
    d.text("outline = left side    solid = right side", W / 2, rowY, { font: `12px ${F.sans}`, color: C.faint, align: "center" });
    // bars
    const top = rowY + 44, bot = H - 50, mid = (top + bot) / 2, R2 = 2.4, unit = (bot - top) / 2 / R2;
    const gw = Math.min(150, (W - 40) / 3), bw = Math.min(34, gw / 3.2), x0 = W / 2 - gw * 1.5;
    d.line(20, mid, W - 20, mid, C.line2, 1);
    for (let u = -2; u <= 2; u++) if (u) d.line(W / 2 - gw * 1.5 - 6, mid - u * unit, W / 2 + gw * 1.5 + 6, mid - u * unit, k.alpha(C.line2, .35), 1, [3, 4]);
    [0, 1, 2].forEach(j => {
      const cx = x0 + gw * (j + .5), col = DC()[j], lv = t.qd[j], rv = shown[j], match = Math.abs(rhs[j] - lv) < 1e-9;
      const bar = (bx, v, fill) => { const h = clamp(v, -R2, R2) * unit; if (Math.abs(h) < 1) { d.line(bx, mid, bx + bw, mid, col, 3); return; } d.rect(bx, h > 0 ? mid - h : mid, bw, Math.abs(h), fill ? col : k.alpha(col, .18), fill ? null : col, 1.5); if (Math.abs(v) > R2) d.text("…", bx + bw / 2, h > 0 ? mid - h - 4 : mid - h + 14, { font: `14px ${F.mono}`, color: col, align: "center" }); };
      bar(cx - bw - 3, lv, false); bar(cx + 3, rv, true);
      d.text(fr(lv), cx - bw / 2 - 3, lv >= 0 ? mid - Math.min(lv, R2) * unit - 6 : mid - Math.max(lv, -R2) * unit + 15, { font: `12px ${F.mono}`, color: C.muted, align: "center" });
      d.text(fr(rhs[j]), cx + bw / 2 + 3, rhs[j] >= 0 ? mid - Math.min(rv, R2) * unit - 6 : mid - Math.max(rv, -R2) * unit + 15, { font: `600 12px ${F.mono}`, color: col, align: "center" });
      d.text(DN[j], cx - 10, bot + 30, { font: `600 20px ${F.math}`, color: col, align: "center" });
      d.text(match ? "✓" : "✗", cx + 10, bot + 29, { font: `600 15px ${F.sans}`, color: match ? C.green : C.faint, align: "center" });
    });
    d.text(ok ? `✓ dimensionally consistent: ${t.full}` : "move the power sliders until every pair of bars matches", W / 2, rowY + 22, { font: ok ? `600 14px ${F.sans}` : `13px ${F.sans}`, color: ok ? C.green : C.muted, align: "center" });
    const off = rhs.map((r, j) => r - t.qd[j]);
    const worst = off.map((o, j) => [o, j]).filter(z => Math.abs(z[0]) > 1e-9);
    const expH = v => fr(v);
    k.setRO(`<div><h2>Candidate formula</h2><div class="ro-big" style="margin-top:8px;font-size:30px">${M(`<i>${t.q}</i> = <i>C</i> ${t.v.map((v, i) => `<i>${v}</i><sup class="c1">${expH(ex[i])}</sup>`).join(" ")}`)}</div></div>
      <div class="ro-rows">
        ${t.v.map((v, i) => `<div class="row">${M(`[<i>${v}</i>] = ${dimS(t.vd[i])}`)}<span class="lbl">${t.vn[i]}</span></div>`).join("")}
        <div class="row">${DN.map((n, j) => `<span class="m ${["c2", "c3", "c4"][j]}">${n}: ${fr(rhs[j])}</span>`).join(" &nbsp; ")}<span class="lbl">exponents on the right; the left needs ${DN.map((n, j) => n + " " + fr(t.qd[j])).join(", ")}</span></div>
      </div>
      <div class="landmark${ok ? " hit" : ""}"><div class="big">${ok ? `<span class="c5">${M(t.fullH)}</span>` : M(`not balanced: ${worst.map(([o, j]) => `${DN[j]} off by ${o > 0 ? "+" : ""}${fr(o)}`).join(", ")}`)}</div>
        <div class="note">${ok ? `Dimensions fix the powers but not the constant: here <i>C</i> = ${t.Cn}, which comes from theory or experiment. ${t.num}.` : `Each pair of bars must match: left side (outline) against right side (solid). A variable whose power must be 0 does not affect the result at all.`}</div></div>
      <p class="narr">${ok ? "Pick another formula, or set a power to a wrong value and see which bars break." : "Start with the dimension that only one variable carries."}</p>`);
  }
  function fermi(){
    const p = FP[fkey], W = c.w, H = c.h;
    const vals = p.f.map(f => f.s === undefined ? f.v : (fkey === "heart" ? fv[f.s] : fv[2 + f.s]));
    const tot = vals.reduce((a, b) => a * b, 1), lg = Math.log10(tot), om = Math.round(lg);
    const maxE = Math.max(6, Math.ceil(lg) + 1);
    const pl = 26, pr = 26, X = e => pl + e / maxE * (W - pl - pr), yA = H * .52;
    d.text(p.name, W / 2, 76, { font: `600 16px ${F.sans}`, color: C.text, align: "center" });
    d.text("multiplying = adding lengths on a log scale", W / 2, 98, { font: `12px ${F.sans}`, color: C.faint, align: "center" });
    d.line(X(0), yA, X(maxE), yA, C.muted, 1.5);
    for (let e = 0; e <= maxE; e++) { d.line(X(e), yA - 5, X(e), yA + 5, C.muted, 1); if (W > 420 || e % 2 === 0) d.pow("10", String(e), X(e) - 8, yA + 24, { size: 12, family: F.mono, color: C.faint }); }
    let acc = 0; const cols = [C.cyan, C.muted, C.pink, C.violet];
    vals.forEach((v, i) => { const a0 = acc, a1 = acc + Math.log10(v); acc = a1; const slider = p.f[i].s !== undefined; const col = slider ? (p.f[i].s === 0 ? C.cyan : C.pink) : k.alpha(C.text, .45);
      const yy = yA - 28 - (i % 2) * 46; d.rr(X(a0) + 1, yy, Math.max(2, X(a1) - X(a0) - 2), 16, 3, k.alpha(col, .35), col, 1.2);
      const lbl = `× ${v.toLocaleString("en-US")}`; const mx = clamp((X(a0) + X(a1)) / 2, 40, W - 40);
      d.text(lbl, mx, yy - 5, { font: `600 12px ${F.mono}`, color: col, align: "center" });
      d.text(p.f[i].n, mx, yy - 19, { font: `11px ${F.sans}`, color: C.faint, align: "center" }); });
    d.line(X(lg), yA - 30, X(lg), yA + 8, C.amber, 2.5); d.circle(X(lg), yA, 6, C.amber);
    d.circle(X(om), yA, 9, null, C.amber, 1.5);
    const est = +tot.toPrecision(1);
    d.text(`≈ ${sig(est, 1, false)} ${p.unit}`, clamp(X(lg), 90, W - 90), yA + 58, { font: `600 18px ${F.math}`, color: C.amber, align: "center" });
    d.text(`order of magnitude 10${supT(om)}`, clamp(X(lg), 90, W - 90), yA + 80, { font: `13px ${F.sans}`, color: C.muted, align: "center" });
    k.setRO(`<div><h2>Estimate</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${sig(est, 1)}</span> <span style="font-size:.6em">${p.unit}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m">${vals.map(v => v.toLocaleString("en-US")).join(" × ")}</span><span class="lbl">each factor is a rough guess</span></div>
        <div class="row"><span class="m">= ${sig(tot, 3)}</span><span class="lbl">calculator value: too many digits for the inputs</span></div>
        <div class="row"><span class="m">log₁₀ = ${lg.toFixed(2)}</span><span class="lbl">the sum of the lengths of the bars</span></div>
      </div>
      <div class="landmark hit"><div class="big">${M(`≈ 10<sup>${om}</sup> ${p.unit}`)}</div><div class="note">Report one significant figure, or just the power of ten. Changing a guess by 20% barely moves the amber line; only a wrong factor of 10 would change the answer.</div></div>
      <p class="narr">Drag the sliders across their whole range and see how little the order of magnitude changes.</p>`);
  }
  showF();
  k.loop(dt => { c.begin(); if (mode === "bal") balancer(dt); else fermi(); });
};

/* =============== mech-sigfigs: reading a scale + arithmetic with measured values =============== */
L["mech-sigfigs"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d; const dom = k.dom(); dom.classList.add("m1-dom"); dom.style.display = "none";
  const INS = { cm: { name: "Ruler, 1 cm marks", div: 1 }, mm: { name: "Ruler, 1 mm marks", div: 0.1 }, cal: { name: "Caliper, 0.1 mm", div: 0.01 } };
  const V = [["12.52", "m"], ["3.1", "m"], ["0.456", "m"], ["125.4", "m"], ["0.0500", "m"], ["11.2", "s"], ["0.250", "s"], ["9.80", "m/s²"], ["2.0", "kg"], ["1.25", "kg"]];
  const UD = { "m": { m: 1 }, "s": { s: 1 }, "m/s²": { m: 1, s: -2 }, "kg": { kg: 1 } };
  let mode = "read", ins = "mm", len = 4.263, shownL = len, ia = 0, ib = 1, op = "+";
  k.modes([["read", "Read a scale"], ["calc", "Calculate"]], mode, m => { mode = m; c.cv.style.display = m === "read" ? "" : "none"; dom.style.display = m === "read" ? "none" : ""; const hn = k.stage.querySelector(".hintc"); if (hn) hn.style.display = m === "read" ? "" : "none"; show(gR, m === "read"); show(gC, m === "calc"); calc(); });
  const gR = group(k, () => {
    k.select("Instrument", Object.entries(INS).map(([kk, v]) => [kk, v.name]), ins, v => ins = v);
    k.slider("object end", 1, 9.5, 0.001, len, v => len = v, () => "");
    k.button("New object", () => { len = 1.5 + Math.random() * 7.5; sL.set(len); }, "btn ghost");
  });
  const sL = { set: v => { gR.els[1].querySelector("input").value = v; } };
  const gC = group(k, () => {
    const opt = V.map((v, i) => [i, `${v[0]} ${v[1]}`]);
    k.select("first", opt, ia, v => { ia = +v; calc(); });
    k.select("operation", [["+", "+ add"], ["−", "− subtract"], ["×", "× multiply"], ["÷", "÷ divide"]], op, v => { op = v; calc(); });
    k.select("second", opt, ib, v => { ib = +v; calc(); });
  });
  show(gC, false);
  const sfOf = s => { const t = s.replace("-", ""); if (t.includes(".")) { const dgt = t.replace(".", "").replace(/^0+/, ""); return dgt.length; } return t.replace(/0+$/, "").replace(/^0+/, "").length; };
  const dpOf = s => (s.includes(".") ? s.split(".")[1].length : 0);
  const uMul = (a, b, sgn) => { const r = Object.assign({}, a); Object.entries(b).forEach(([u, e]) => { r[u] = (r[u] || 0) + sgn * e; if (!r[u]) delete r[u]; }); return r; };
  const uStr = u => { const ord = ["kg", "m", "s"]; const top = ord.filter(x => u[x] > 0).map(x => x + (u[x] > 1 ? supT(u[x]) : "")), bot = ord.filter(x => u[x] < 0).map(x => x + (u[x] < -1 ? supT(-u[x]) : ""));
    if (!top.length && !bot.length) return "(no unit)"; return (top.join("·") || "1") + (bot.length ? "/" + bot.join("·") : ""); };
  function calc(){
    if (mode !== "calc") return;
    const A = V[ia], B = V[ib], a = +A[0], b = +B[0], add = op === "+" || op === "−";
    const same = A[1] === B[1];
    const sa = sfOf(A[0]), sb = sfOf(B[0]), da = dpOf(A[0]), db = dpOf(B[0]);
    const card = (v, s, dp, lim) => `<div class="m1-card${lim ? " lim" : ""}"><span class="n">${v[0]}</span> ${v[1]}<span class="s">${s} s.f. · ${dp} d.p.</span></div>`;
    if (add && !same) {
      dom.innerHTML = `<div class="m1-head">Arithmetic with measured values</div><div class="m1-calc">${card(A, sa, da, false)}<span class="op">${op}</span>${card(B, sb, db, false)}</div>
        <div class="m1-final" style="color:var(--red)">cannot ${op === "+" ? "add" : "subtract"} ${A[1]} and ${B[1]}</div>`;
      k.setRO(`<div><h2>Result</h2><div class="ro-big" style="margin-top:8px"><span class="num" style="color:var(--red)">none</span></div></div>
        <div class="landmark hit"><div class="big">${M(`[${A[1]}] ≠ [${B[1]}]`)}</div><div class="note">Only quantities with the same dimension can be added or subtracted. Precision rules never rescue a dimensional error.</div></div>
        <p class="narr">Pick two lengths to add, or switch to × or ÷.</p>`);
      return;
    }
    const raw = op === "+" ? a + b : op === "−" ? a - b : op === "×" ? a * b : a / b;
    const unit = add ? UD[A[1]] : uMul(UD[A[1]], UD[B[1]], op === "×" ? 1 : -1);
    const n = Math.min(sa, sb), dpm = Math.min(da, db);
    let last; // power of ten of the last kept digit
    if (raw === 0) last = add ? -dpm : 0; else { const e = Math.floor(Math.log10(Math.abs(raw)) + 1e-12); last = add ? -dpm : e - n + 1; }
    const rounded = Math.round(raw / 10 ** last) * 10 ** last;
    const showDec = Math.max(0, -last + 3);
    let rs = Math.abs(raw).toFixed(showDec); if (rs.includes(".")) { rs = rs.replace(/0+$/, ""); if (rs.endsWith(".")) rs = rs.slice(0, -1); }
    // split rs into kept / dropped at place `last`
    const ip = rs.split(".")[0].length; let cut = last >= 0 ? ip - last : ip + 1 + (-last);
    cut = clamp(cut, 0, rs.length);
    const kept = rs.slice(0, cut), dropped = rs.slice(cut);
    const nKeptSf = add ? null : n;
    let fin;
    if (last > 0 && rounded !== 0) { const e = Math.floor(Math.log10(Math.abs(rounded)) + 1e-12); fin = `${(rounded / 10 ** e).toFixed(Math.max(0, e - last))} × 10<sup>${e}</sup>`; }
    else fin = rounded.toFixed(Math.max(0, -last));
    fin = fin.replace("-", MI);
    const firstDrop = dropped.replace(".", "")[0];
    dom.innerHTML = `<div class="m1-head">Arithmetic with measured values</div>
      <div class="m1-calc">${card(A, sa, da, add ? da === dpm : sa === n)}<span class="op">${op}</span>${card(B, sb, db, add ? db === dpm && da !== dpm : sb === n && sa !== n)}</div>
      <div class="m1-raw"><span class="lbl">calculator shows</span>${raw < 0 ? MI : ""}<span class="k">${kept}</span><span class="d">${dropped}</span> <span style="font-size:.7em;color:var(--muted)">${uStr(unit)}</span></div>
      <div class="m1-final">${fin} ${uStr(unit)}</div>`;
    k.setRO(`<div><h2>Reported result</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${fin}</span> <span style="font-size:.6em">${uStr(unit)}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2">${A[0]} ${A[1]}</span><span class="lbl">${sa} significant figures, ${da} decimal place${da === 1 ? "" : "s"}</span></div>
        <div class="row"><span class="m c2">${B[0]} ${B[1]}</span><span class="lbl">${sb} significant figures, ${db} decimal place${db === 1 ? "" : "s"}</span></div>
        <div class="row"><span class="m">${add ? `fewest decimal places: ${dpm}` : `fewest significant figures: ${n}`}</span><span class="lbl">${add ? "rule for + and −" : "rule for × and ÷"}</span></div>
      </div>
      <div class="landmark hit"><div class="big">${M(`<span class="c1">${kept || "0"}</span><span class="c4">${dropped}</span> → ${fin}`)}</div>
        <div class="note">${add ? `For a sum or difference the least precise decimal place limits the answer, however many figures the numbers have.` : `For a product or quotient the factor with the fewest significant figures limits the answer (${nKeptSf} here).`} ${firstDrop ? `The first dropped digit is ${firstDrop}, so the last kept digit ${+firstDrop >= 5 ? "rounds up" : "stays"}.` : ""}</div></div>
      <p class="narr">Try 12.52 m + 3.1 m, then 12.52 m × 3.1 m: same numbers, different rules.</p>`);
  }
  k.hint("Drag the object end slider; the true value stays hidden");
  k.loop(dt => {
    if (mode !== "read") return;
    c.begin(); const W = c.w, H = c.h, e = k.reduce ? 1 : Math.min(1, dt * 12); shownL = lerp(shownL, len, e);
    const I = INS[ins], dv = I.div, reading = Math.round(len / dv) * dv, dl = dv / 2;
    const dec = ins === "cm" ? 1 : ins === "mm" ? 2 : 3; // value quoted to the uncertainty's place
    const rS = reading.toFixed(dec), uS = dl.toFixed(dec);
    const nsf = rS.replace(".", "").replace(/^0+/, "").length;
    // main ruler 0..10 cm
    const pl = 22, pr = 22, X = v => pl + v / 10 * (W - pl - pr), yR = 90;
    d.rr(pl - 8, yR, W - pl - pr + 16, 44, 4, "rgba(242,184,75,.06)", C.line2);
    for (let i = 0; i <= 100; i++) { const cm = i % 10 === 0, half = i % 5 === 0; if (!cm && ins === "cm") continue; const x = X(i / 10); if (!cm && (W - pl - pr) / 100 < 3) continue;
      d.line(x, yR, x, yR + (cm ? 18 : half ? 12 : 7), cm ? C.text : C.muted, 1); if (cm) d.text(String(i / 10), x, yR + 32, { font: `11px ${F.mono}`, color: C.muted, align: "center" }); }
    d.text("cm", X(10) + 4, yR - 6, { font: `11px ${F.mono}`, color: C.faint, align: "right" });
    // object (a rod) above the ruler
    d.rr(X(0), yR - 18, X(shownL) - X(0), 14, 3, k.alpha(C.text, .22), C.muted, 1);
    // uncertainty band and reading on the main ruler
    d.rect(X(reading - dl), yR - 24, Math.max(2, X(reading + dl) - X(reading - dl)), 70, k.alpha(C.pink, .18));
    d.line(X(reading), yR - 26, X(reading), yR + 46, C.cyan, 2);
    // zoom window around the end
    const zTop = yR + 70, zH = Math.max(120, H - zTop - 70), zL = 22, zW = W - 44, span = dv * 4, z0 = reading - span / 2;
    const ZX = v => zL + (v - z0) / span * zW;
    d.rr(zL, zTop, zW, zH, 6, "rgba(8,12,20,.6)", C.line2);
    d.text("magnified ×" + Math.round(zW / span / ((W - pl - pr) / 10)), zL + 8, zTop + 16, { font: `11px ${F.mono}`, color: C.faint });
    const g = c.g; g.save(); g.beginPath(); g.rect(zL, zTop, zW, zH); g.clip();
    const yZ = zTop + zH * .52;
    d.rect(ZX(reading - dl), zTop + 22, ZX(reading + dl) - ZX(reading - dl), zH - 30, k.alpha(C.pink, .2));
    d.line(ZX(reading - dl), zTop + 22, ZX(reading - dl), zTop + zH - 8, C.pink, 1.5, [4, 3]); d.line(ZX(reading + dl), zTop + 22, ZX(reading + dl), zTop + zH - 8, C.pink, 1.5, [4, 3]);
    d.rr(ZX(z0 - span), yZ - 40, ZX(shownL) - ZX(z0 - span), 26, 3, k.alpha(C.text, .22), C.muted, 1);
    for (let v = Math.ceil(z0 / dv) * dv - dv; v <= z0 + span + dv; v += dv) { const x = ZX(v); d.line(x, yZ, x, yZ + 30, C.text, 1.5); if (x > zL + 18 && x < zL + zW - 18) d.text(v.toFixed(dec - 1 < 0 ? 0 : dec - 1), x, yZ + 48, { font: `12px ${F.mono}`, color: C.muted, align: "center" }); }
    d.line(zL, yZ, zL + zW, yZ, C.muted, 1);
    d.line(ZX(reading), zTop + 22, ZX(reading), yZ + 30, C.cyan, 2.5);
    g.restore();
    d.text(`reading ${rS} ± ${uS} cm`, W / 2, Math.min(H - 16, zTop + zH + 26), { font: `600 16px ${F.math}`, color: C.cyan, align: "center" });
    const pct = dl / reading * 100;
    k.setRO(`<div><h2>Measurement</h2><div class="ro-big" style="margin-top:8px"><span class="num c2">${rS}</span> <span class="c3" style="font-size:.7em">± ${uS}</span> <span style="font-size:.55em">cm</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2">${rS} cm</span><span class="lbl">read to the nearest mark (${dv >= 1 ? dv + " cm" : dv * 10 + " mm"})</span></div>
        <div class="row"><span class="m c3">± ${uS} cm</span><span class="lbl">half the smallest division, a common convention</span></div>
        <div class="row"><span class="m">${nsf}</span><span class="lbl">significant figures, ending at the uncertain digit</span></div>
        <div class="row"><span class="m">${pct.toFixed(pct < 1 ? 2 : 1)}%</span><span class="lbl">percent uncertainty, δA/A × 100%</span></div>
      </div>
      <div class="landmark${ins === "cal" ? " hit" : ""}"><div class="big">${M(`<span class="c2">${rS}</span> ± <span class="c3">${uS}</span> cm`)}</div><div class="note">The true end lies somewhere in the pink band. A finer instrument narrows the band and earns one more significant figure; it cannot tell you digits beyond its own resolution.</div></div>
      <p class="narr">Switch instruments with the object where it is: 1, then 2, then 3 decimal places.</p>`);
  });
};

/* =============== mech-vectors: tip-to-tail, parallelogram, subtraction =============== */
L["mech-vectors"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let A = [6, 1.5], B = [-2, 5], mode = "add", lastP = null;
  const sA = [...A], sB = [...B];
  const lim = 9.5, sn = v => clamp(snap(v, 0.5), -lim, lim);
  k.modes([["add", "Tip to tail"], ["para", "Parallelogram"], ["sub", "A − B"]], mode, m => mode = m);
  k.button("Antiparallel", () => { A = [6, 2]; B = [-3, -1]; }, "btn ghost");
  k.button("Perpendicular", () => { A = [6, 0]; B = [0, 4.5]; }, "btn ghost");
  k.button("Parallel", () => { A = [4, 2]; B = [4, 2]; }, "btn ghost");
  k.hint("Drag the arrow tips");
  dragger(c, () => lastP, () => [
    { get: () => A, set: (x, y) => { A = [sn(x), sn(y)]; } },
    { get: () => (mode === "add" ? [A[0] + B[0], A[1] + B[1]] : B), set: (x, y) => { B = mode === "add" ? [sn(x - A[0]), sn(y - A[1])] : [sn(x), sn(y)]; } }
  ]);
  const mag = v => Math.hypot(v[0], v[1]);
  const dirS = v => (mag(v) < 1e-9 ? "no direction" : `${ang360(v[0], v[1]).toFixed(1)}°`);
  k.loop(dt => {
    const e = k.reduce ? 1 : Math.min(1, dt * 12);
    [0, 1].forEach(i => { sA[i] = lerp(sA[i], A[i], e); sB[i] = lerp(sB[i], B[i], e); });
    c.begin();
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 14, r: 14, t: 50, b: 14 } }); lastP = P;
    P.grid(1); P.axes(false);
    const sub = mode === "sub", nb = [-sB[0], -sB[1]];
    const Rr = sub ? [A[0] - B[0], A[1] - B[1]] : [A[0] + B[0], A[1] + B[1]], Rs = sub ? [sA[0] - sB[0], sA[1] - sB[1]] : [sA[0] + sB[0], sA[1] + sB[1]];
    if (mode === "add") {
      arrowP(d, P, 0, 0, sA[0], sA[1], C.cyan); arrowP(d, P, sA[0], sA[1], Rs[0], Rs[1], C.pink); arrowP(d, P, 0, 0, Rs[0], Rs[1], C.amber, 3.5);
      vecLabel(d, F, P, "A", 0, 0, sA[0], sA[1], C.cyan, -1); vecLabel(d, F, P, "B", sA[0], sA[1], Rs[0], Rs[1], C.pink, -1); vecLabel(d, F, P, "R", 0, 0, Rs[0], Rs[1], C.amber, 1);
      handleP(d, P, sA[0], sA[1], C.cyan); handleP(d, P, Rs[0], Rs[1], C.pink);
    } else if (mode === "para") {
      P.line(sA[0], sA[1], Rs[0], Rs[1], k.alpha(C.pink, .6), 1.5, [6, 5]); P.line(sB[0], sB[1], Rs[0], Rs[1], k.alpha(C.cyan, .6), 1.5, [6, 5]);
      arrowP(d, P, 0, 0, sA[0], sA[1], C.cyan); arrowP(d, P, 0, 0, sB[0], sB[1], C.pink); arrowP(d, P, 0, 0, Rs[0], Rs[1], C.amber, 3.5);
      vecLabel(d, F, P, "A", 0, 0, sA[0], sA[1], C.cyan, -1); vecLabel(d, F, P, "B", 0, 0, sB[0], sB[1], C.pink, 1); vecLabel(d, F, P, "R", 0, 0, Rs[0], Rs[1], C.amber, 1);
      handleP(d, P, sA[0], sA[1], C.cyan); handleP(d, P, sB[0], sB[1], C.pink);
    } else {
      arrowP(d, P, 0, 0, sB[0], sB[1], k.alpha(C.pink, .45), 2); vecLabel(d, F, P, "B", 0, 0, sB[0], sB[1], k.alpha(C.pink, .7), 1);
      arrowP(d, P, 0, 0, sA[0], sA[1], C.cyan); arrowP(d, P, sA[0], sA[1], sA[0] + nb[0], sA[1] + nb[1], C.violet); arrowP(d, P, 0, 0, Rs[0], Rs[1], C.amber, 3.5);
      vecLabel(d, F, P, "A", 0, 0, sA[0], sA[1], C.cyan, -1); vecLabel(d, F, P, "−B", sA[0], sA[1], sA[0] + nb[0], sA[1] + nb[1], C.violet, -1); vecLabel(d, F, P, "A − B", 0, 0, Rs[0], Rs[1], C.amber, 1);
      handleP(d, P, sA[0], sA[1], C.cyan); handleP(d, P, sB[0], sB[1], C.pink);
    }
    d.circle(P.X(0), P.Y(0), 3.5, C.text);
    d.text("1 square = 1 m", P.left + P.width - 6, P.top + 14, { font: `11px ${F.mono}`, color: C.faint, align: "right" });
    const a = mag(A), b = mag(B), r = mag(Rr), cr = A[0] * B[1] - A[1] * B[0], dot = A[0] * B[0] + A[1] * B[1];
    const par = a > 0 && b > 0 && Math.abs(cr) < 1e-9, perp = a > 0 && b > 0 && Math.abs(dot) < 1e-9;
    const Rn = sub ? "<b>A</b> − <b>B</b>" : "<b>R</b> = <b>A</b> + <b>B</b>";
    let lm;
    if (r < 1e-9) lm = [`${Rn.replace(/ =.*/, "")} = 0`, sub ? "A and B are equal vectors, so their difference is the zero vector." : "B exactly undoes A: equal magnitudes, opposite directions. The trip ends where it started."];
    else if (par) { const same = dot > 0; const plus = sub ? !same : same;
      lm = [plus ? `${sub ? "|A − B|" : "R"} = A + B` : `${sub ? "|A − B|" : "R"} = |A − B|`, `${same ? "Parallel" : "Antiparallel"} vectors: the ${sub ? "difference" : "sum"} has the ${plus ? "largest" : "smallest"} possible magnitude, ${sig(r)} m. ${plus ? "Magnitudes simply add." : "Magnitudes subtract."}`]; }
    else if (perp) lm = [`${sub ? "|A − B|" : "R"} = √(A² + B²)`, `Perpendicular vectors form a right triangle, so the Pythagorean theorem gives ${sig(r)} m exactly.`];
    else lm = [`${sig(Math.abs(a - b))} m ≤ ${sig(r)} m ≤ ${sig(a + b)} m`, `Whatever the angle, the ${sub ? "difference" : "resultant"} is at least |A − B| and at most A + B, where A and B are the magnitudes. It reaches A + B only when the ${sub ? "−B arrow lines up with A" : "arrows line up"}.`];
    k.setRO(`<div><h2>${sub ? "Difference" : "Resultant"}</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${sig(r)}</span> <span style="font-size:.6em">m at ${dirS(Rr)}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span class="m c2"><b>A</b></span> <span class="v c2">${sig(a)} m</span><span class="lbl">at ${dirS(A)} from +x</span></div>
        <div class="row"><span class="m c3"><b>B</b></span> <span class="v c3">${sig(b)} m</span><span class="lbl">at ${dirS(B)} from +x</span></div>
        ${sub ? `<div class="row"><span class="m c4">−<b>B</b></span> <span class="v c4">${sig(b)} m</span><span class="lbl">at ${dirS([-B[0], -B[1]])}: same length, reversed</span></div>` : ""}
        <div class="row"><span class="m c1">${Rn}</span> <span class="v c1">${sig(r)} m</span><span class="lbl">measured on the grid; angles counterclockwise from +x</span></div>
        <div class="row"><span class="m">${sig(a + b)} m</span><span class="lbl">A + B, what you would get by adding magnitudes</span></div>
      </div>
      <div class="landmark${par || perp || r < 1e-9 ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
      <p class="narr">${mode === "add" ? "Switch to Parallelogram: the same R is the diagonal, so A + B = B + A." : mode === "para" ? "Try A − B: reverse B and add it tip to tail." : "Compare with A + B: the two diagonals of the same parallelogram."}</p>`);
  });
};

/* =============== mech-components: resolve a vector; add by components =============== */
L["mech-components"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let Am = 5, th = 36.9, mode = "one", lastP = null, V1 = [5, 2], V2 = [-2, 4];
  const sv = [0, 0], s1 = [...V1], s2 = [...V2];
  const tip = () => [Am * Math.cos(rad(th)), Am * Math.sin(rad(th))];
  k.modes([["one", "Resolve one vector"], ["add", "Add by components"]], mode, m => { mode = m; show(gO, m === "one"); });
  const gO = group(k, () => {
    const a = k.slider(`<span class="c1"><i>A</i></span>`, 0, 9, 0.1, Am, v => { Am = v; }, v => v.toFixed(1));
    const t = k.slider(`<span class="c4"><i>θ</i></span>`, 0, 359, 0.1, th, v => { th = v; }, v => v.toFixed(1) + "°");
    k.button("On the y-axis", () => { Am = 5; th = 90; a.set(Am); t.set(th); }, "btn ghost");
    k.button("(−3, 4)", () => { Am = 5; th = 126.9; a.set(Am); t.set(th); }, "btn ghost");
    return { a, t };
  });
  const { a: sA, t: sT } = gO.r;
  k.hint("Drag the arrow tip");
  dragger(c, () => lastP, () => mode === "one" ? [{ get: tip, set: (x, y) => { x = clamp(x, -9, 9); y = clamp(y, -9, 9); Am = Math.min(9, Math.round(Math.hypot(x, y) * 10) / 10); th = Am ? Math.round(ang360(x, y) * 10) / 10 % 360 : th; sA.set(Am); sT.set(th); } }]
    : [{ get: () => V1, set: (x, y) => { V1 = [clamp(snap(x, .5), -9, 9), clamp(snap(y, .5), -9, 9)]; } },
       { get: () => [V1[0] + V2[0], V1[1] + V2[1]], set: (x, y) => { V2 = [clamp(snap(x - V1[0], .5), -9, 9), clamp(snap(y - V1[1], .5), -9, 9)]; } }]);
  const f2 = v => fx(v, 2);
  function one(P, e){
    const [tx, ty] = tip(); sv[0] = lerp(sv[0], tx, e); sv[1] = lerp(sv[1], ty, e);
    const ax = sv[0], ay = sv[1];
    // components: x along the axis, y from the end of x
    if (Math.abs(ax) > .02) arrowP(d, P, 0, 0, ax, 0, C.cyan, 3);
    if (Math.abs(ay) > .02) arrowP(d, P, ax, 0, ax, ay, C.pink, 3);
    P.line(0, ay, ax, ay, k.alpha(C.pink, .35), 1, [4, 4]);
    // angle arc
    const ta = ang360(ax, ay);
    if (Am > 0.05) { angArc(c.g, P, 0, ta, 30, C.violet); const mid = rad(ta / 2); d.text(`θ = ${th.toFixed(1)}°`, P.X(0) + 50 * Math.cos(mid) + (Math.cos(mid) < 0 ? -26 : 26), P.Y(0) - 50 * Math.sin(mid), { font: `600 13px ${F.mono}`, color: C.violet, align: "center", base: "middle" }); }
    arrowP(d, P, 0, 0, ax, ay, C.amber, 3.5); handleP(d, P, ax, ay, C.amber);
    if (Math.abs(ax) > .3) subLab(d, F, `= ${f2(tx)}`, "x", P.X(ax / 2), P.Y(0) + (ay >= 0 ? 18 : -10), C.cyan, "center");
    if (Math.abs(ay) > .3) subLab(d, F, `= ${f2(ty)}`, "y", P.X(ax) + (ax >= 0 ? 8 : -8), P.Y(ay / 2) + 5, C.pink, ax >= 0 ? "left" : "right");
    // readout
    const Ax = +f2(tx).replace(MI, "-"), Ay = +f2(ty).replace(MI, "-");
    const calc = Math.abs(tx) < 1e-9 ? null : deg(Math.atan(ty / tx));
    let lm;
    if (Am === 0) lm = ["A = 0", "The zero vector has no direction: θ is undefined and both components are 0."];
    else if (Math.abs(tx) < 1e-9) lm = [`<i>A</i><sub>x</sub> = 0 → <i>θ</i> = ${ty > 0 ? 90 : 270}°`, "tan θ = A<sub>y</sub>/A<sub>x</sub> is undefined when A<sub>x</sub> = 0, so read the direction from the sketch: straight up or straight down."];
    else if (tx < 0) lm = [`<i>θ</i> = ${fx(calc)}° + 180° = ${fx(calc + 180)}°`, `The calculator gives tan⁻¹(A<sub>y</sub>/A<sub>x</sub>) = ${fx(calc)}°, but A<sub>x</sub> is negative, so the vector is in quadrant II or III. tan⁻¹ only returns −90° to 90°; add 180° to get the true direction.`];
    else if (ty < 0) lm = [`${fx(calc)}° + 360° = ${fx(calc + 360)}°`, `Quadrant IV: the calculator gives ${fx(calc)}°, measured clockwise from +x. That is the same direction as the angle plus 360°.`];
    else lm = [`<i>θ</i> = tan<sup>−1</sup>(<i>A</i><sub>y</sub>/<i>A</i><sub>x</sub>) = ${fx(calc)}°`, "Quadrant I: the calculator's inverse tangent gives the direction directly."];
    k.setRO(`<div><h2>Component form</h2><div class="ro-big" style="margin-top:8px;font-size:30px">${M(`<span class="c1"><b>A</b></span> = <span class="c2">${f2(tx)}</span> î + <span class="c3">${f2(ty)}</span> ĵ`)}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><i>A</i><sub>x</sub></span> = <i>A</i> cos <i>θ</i> = ${Am.toFixed(1)} cos ${th.toFixed(1)}°`)} = <span class="v c2">${f2(tx)}</span></div>
        <div class="row">${M(`<span class="c3"><i>A</i><sub>y</sub></span> = <i>A</i> sin <i>θ</i> = ${Am.toFixed(1)} sin ${th.toFixed(1)}°`)} = <span class="v c3">${f2(ty)}</span></div>
        <div class="row">${M(`√(<i>A</i><sub>x</sub><sup>2</sup> + <i>A</i><sub>y</sub><sup>2</sup>)`)} = <span class="v c1">${fx(Math.hypot(Ax, Ay), 2)}</span><span class="lbl">back to the magnitude (from the rounded components)</span></div>
      </div>
      <div class="landmark${Am === 0 || tx <= 1e-9 || ty < 0 ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
      <p class="narr">Drag the tip into each quadrant and watch the signs of the components.</p>`);
  }
  function add(P, e){
    [0, 1].forEach(i => { s1[i] = lerp(s1[i], V1[i], e); s2[i] = lerp(s2[i], V2[i], e); });
    const R = [s1[0] + s2[0], s1[1] + s2[1]];
    // component staircase: A's part, then B's part starting where A's ends, then R's total
    const bx = (y, x0, x1, col, lbl) => { if (Math.abs(x1 - x0) > .05) d.arrow(P.X(x0), P.Y(y), P.X(x1), P.Y(y), col, 4); d.text(lbl, P.X(Math.min(x0, x1)) - 6, P.Y(y) + 4, { font: `italic 600 11px ${F.math}`, color: col, align: "right" }); };
    const by = (x, y0, y1, col, lbl) => { if (Math.abs(y1 - y0) > .05) d.arrow(P.X(x), P.Y(y0), P.X(x), P.Y(y1), col, 4); d.text(lbl, P.X(x), P.Y(Math.min(y0, y1)) + 14, { font: `italic 600 11px ${F.math}`, color: col, align: "center" }); };
    bx(-0.6, 0, s1[0], k.alpha(C.cyan, .9), "A"); bx(-1.2, s1[0], R[0], k.alpha(C.cyan, .55), "B"); bx(-1.8, 0, R[0], C.cyan, "R");
    by(-0.6, 0, s1[1], k.alpha(C.pink, .9), "A"); by(-1.2, s1[1], R[1], k.alpha(C.pink, .55), "B"); by(-1.8, 0, R[1], C.pink, "R");
    P.line(R[0], 0, R[0], R[1], k.alpha(C.cyan, .5), 1, [4, 4]); P.line(0, R[1], R[0], R[1], k.alpha(C.pink, .5), 1, [4, 4]);
    arrowP(d, P, 0, 0, s1[0], s1[1], k.alpha(C.text, .85), 2.5); arrowP(d, P, s1[0], s1[1], R[0], R[1], k.alpha(C.text, .55), 2.5);
    arrowP(d, P, 0, 0, R[0], R[1], C.amber, 3.5);
    vecLabel(d, F, P, "A", 0, 0, s1[0], s1[1], C.text, -1); vecLabel(d, F, P, "B", s1[0], s1[1], R[0], R[1], C.muted, -1); vecLabel(d, F, P, "R", 0, 0, R[0], R[1], C.amber, 1);
    handleP(d, P, s1[0], s1[1], C.text); handleP(d, P, R[0], R[1], C.muted);
    const Rx = V1[0] + V2[0], Ry = V1[1] + V2[1], Rm = Math.hypot(Rx, Ry), t = Rm ? ang360(Rx, Ry) : null;
    const n1 = v => fx(v, 1);
    const tbl = `<div class="row" style="font-family:var(--mono);font-size:13px;display:grid;grid-template-columns:repeat(4,auto);gap:2px 14px;justify-content:start">
      <span></span><span style="color:var(--faint)">A</span><span style="color:var(--faint)">B</span><span style="color:var(--amber)">R</span>
      <span class="c2">x</span><span>${n1(V1[0])}</span><span>${n1(V2[0])}</span><span class="c2"><b>${n1(Rx)}</b></span>
      <span class="c3">y</span><span>${n1(V1[1])}</span><span>${n1(V2[1])}</span><span class="c3"><b>${n1(Ry)}</b></span></div>`;
    k.setRO(`<div><h2>Resultant</h2><div class="ro-big" style="margin-top:8px;font-size:30px">${M(`<span class="c1"><b>R</b></span> = <span class="c2">${n1(Rx)}</span> î + <span class="c3">${n1(Ry)}</span> ĵ`)}</div></div>
      <div class="ro-rows">${tbl}
        <div class="row">${M(`<i>R</i> = √(${n1(Rx)}<sup>2</sup> + ${n1(Ry)}<sup>2</sup>)`)} = <span class="v c1">${Rm ? sig(Rm) : "0"}</span></div>
        <div class="row">${M(`<i>θ</i><sub>R</sub>`)} = <span class="v c4">${t === null ? "undefined" : t.toFixed(1) + "°"}</span><span class="lbl">${t === null ? "zero vector" : Rx < 0 ? "tan⁻¹ plus 180°, since R<sub>x</sub> &lt; 0" : "from tan⁻¹(R<sub>y</sub>/R<sub>x</sub>)"}</span></div>
      </div>
      <div class="landmark${Rm === 0 ? " hit" : ""}"><div class="big">${M(`<i>R</i><sub>x</sub> = <i>A</i><sub>x</sub> + <i>B</i><sub>x</sub>, &nbsp;<i>R</i><sub>y</sub> = <i>A</i><sub>y</sub> + <i>B</i><sub>y</sub>`)}</div><div class="note">${Rm === 0 ? "The components cancel on both axes: B is exactly −A." : "Below the x-axis, B's x part (cyan) starts where A's ends, and the bottom arrow is their total, R<sub>x</sub>. Left of the y-axis the pink arrows do the same for y."}</div></div>
      <p class="narr">Make B point partly left: its x bar runs backwards and subtracts.</p>`);
  }
  k.loop(dt => {
    const e = k.reduce ? 1 : Math.min(1, dt * 12);
    c.begin();
    const P = k.plot(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad: { l: 14, r: 14, t: 50, b: 14 }, xlabel: "x", ylabel: "y" }); lastP = P;
    P.grid(1); P.axes(false);
    d.text("x", P.left + P.width - 6, P.Y(0) - 8, { font: `italic 14px ${F.math}`, color: C.muted, align: "right" });
    d.text("y", P.X(0) + 8, P.top + 12, { font: `italic 14px ${F.math}`, color: C.muted });
    if (mode === "one") one(P, e); else add(P, e);
  });
};

/* =============== mech-vector-products: dot as projection, cross as area =============== */
L["mech-vector-products"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let A = [4, 1], B = [1.5, 3.5], mode = "dot", lastP = null;
  const sA = [...A], sB = [...B], lim = 6.5, sn = v => clamp(snap(v, 0.5), -lim, lim);
  k.modes([["dot", "Dot product"], ["cross", "Cross product"]], mode, m => mode = m);
  k.button("Parallel", () => { A = [4, 1]; B = [2, 0.5]; }, "btn ghost");
  k.button("Perpendicular", () => { A = [4, 1]; B = [-1, 4]; }, "btn ghost");
  k.button("Swap A and B", () => { const t = A; A = B; B = t; }, "btn ghost");
  k.hint("Drag the arrow tips");
  dragger(c, () => lastP, () => [{ get: () => A, set: (x, y) => { A = [sn(x), sn(y)]; } }, { get: () => B, set: (x, y) => { B = [sn(x), sn(y)]; } }]);
  const n1 = v => fx(v, 1), n2 = v => fx(v, 2);
  k.loop(dt => {
    const e = k.reduce ? 1 : Math.min(1, dt * 12);
    [0, 1].forEach(i => { sA[i] = lerp(sA[i], A[i], e); sB[i] = lerp(sB[i], B[i], e); });
    c.begin();
    const P = k.plot(c, { xmin: -7, xmax: 7, ymin: -7, ymax: 7, equal: true, pad: { l: 14, r: 14, t: 50, b: 14 } }); lastP = P;
    P.grid(1); P.axes(false);
    const a = Math.hypot(A[0], A[1]), b = Math.hypot(B[0], B[1]);
    const dot = A[0] * B[0] + A[1] * B[1], cr = A[0] * B[1] - A[1] * B[0];
    const phi = a && b ? deg(Math.acos(clamp(dot / (a * b), -1, 1))) : null;
    const sa = Math.hypot(sA[0], sA[1]);
    if (mode === "dot") {
      if (sa > 0.05) {
        const u = [sA[0] / sa, sA[1] / sa], pr = sB[0] * u[0] + sB[1] * u[1], foot = [u[0] * pr, u[1] * pr];
        P.line(-u[0] * 12, -u[1] * 12, u[0] * 12, u[1] * 12, k.alpha(C.cyan, .25), 1, [5, 5]);
        const g = c.g; g.save(); g.fillStyle = k.alpha(C.amber, .16); g.beginPath(); g.moveTo(P.X(0), P.Y(0)); g.lineTo(P.X(foot[0]), P.Y(foot[1])); g.lineTo(P.X(sB[0]), P.Y(sB[1])); g.closePath(); g.fill(); g.restore();
        P.line(sB[0], sB[1], foot[0], foot[1], k.alpha(C.amber, .8), 1.5, [4, 3]);
        d.line(P.X(0), P.Y(0), P.X(foot[0]), P.Y(foot[1]), C.amber, 7);
        const fx2 = P.X(foot[0]), fy2 = P.Y(foot[1]);
        d.text(`B cos φ = ${n2(b ? dot / (a || 1) : 0)}`, fx2 + (u[1] >= 0 ? 12 : -12) * 1, fy2 + 22, { font: `600 13px ${F.mono}`, color: C.amber, align: "center" });
      }
    } else {
      const g = c.g; g.save(); g.fillStyle = k.alpha(C.amber, .2); g.strokeStyle = k.alpha(C.amber, .7); g.lineWidth = 1;
      g.beginPath(); g.moveTo(P.X(0), P.Y(0)); g.lineTo(P.X(sA[0]), P.Y(sA[1])); g.lineTo(P.X(sA[0] + sB[0]), P.Y(sA[1] + sB[1])); g.lineTo(P.X(sB[0]), P.Y(sB[1])); g.closePath(); g.fill(); g.stroke(); g.restore();
      const cx = P.X((sA[0] + sB[0]) / 2), cy = P.Y((sA[1] + sB[1]) / 2);
      if (Math.abs(cr) > 1e-9) { d.circle(cx, cy, 13, C.ink, C.amber, 2); if (cr > 0) d.circle(cx, cy, 3.5, C.amber); else { d.line(cx - 7, cy - 7, cx + 7, cy + 7, C.amber, 2); d.line(cx - 7, cy + 7, cx + 7, cy - 7, C.amber, 2); } }
    }
    if (phi !== null && phi > 0.5) { const a0 = ang360(sA[0], sA[1]), b0 = ang360(sB[0], sB[1]); let dA = b0 - a0; if (dA > 180) dA -= 360; if (dA < -180) dA += 360;
      angArc(c.g, P, a0, a0 + dA, 26, C.violet); const m = rad(a0 + dA / 2); d.text("φ", P.X(0) + 40 * Math.cos(m), P.Y(0) - 40 * Math.sin(m), { font: `italic 700 16px ${F.math}`, color: C.violet, align: "center", base: "middle" }); }
    arrowP(d, P, 0, 0, sA[0], sA[1], C.cyan, 3.5); arrowP(d, P, 0, 0, sB[0], sB[1], C.pink, 3.5);
    labelAt(d, F, P, "A", sA[0], sA[1], C.cyan, 14 * Math.sign(sA[0] || 1), -12); labelAt(d, F, P, "B", sB[0], sB[1], C.pink, 14 * Math.sign(sB[0] || 1), -12);
    handleP(d, P, sA[0], sA[1], C.cyan); handleP(d, P, sB[0], sB[1], C.pink); d.circle(P.X(0), P.Y(0), 3.5, C.text);
    const phS = phi === null ? "undefined" : phi.toFixed(1) + "°";
    let lm;
    if (mode === "dot") {
      if (!a || !b) lm = ["A · B = 0", "One vector is zero, so there is nothing to project."];
      else if (Math.abs(dot) < 1e-9) lm = ["A · B = 0 ⇔ A ⊥ B", "Perpendicular: B has no part along A. A force perpendicular to the motion does no work."];
      else if (Math.abs(cr) < 1e-9) lm = [dot > 0 ? "A · B = AB" : "A · B = −AB", dot > 0 ? "Parallel: B lies entirely along A, so the dot product is as large as it can be." : "Antiparallel: B points straight against A; the dot product is as negative as it can be."];
      else lm = [dot > 0 ? "φ < 90° → A · B > 0" : "φ > 90° → A · B < 0", dot > 0 ? "B has a positive part along A. For a force and a displacement, this means positive work." : "B's projection points backwards along A. A force like this does negative work, like friction."];
    } else {
      if (!a || !b || Math.abs(cr) < 1e-9) lm = ["A × B = 0", "Parallel or antiparallel vectors (or a zero vector) span no area, so the cross product is zero. A force along the wrench handle gives no torque."];
      else lm = [cr > 0 ? "A × B along +k̂ ⊙" : "A × B along −k̂ ⊗", `Right-hand rule: curl your fingers from A to B through φ; your thumb points ${cr > 0 ? "out of the page, toward you" : "into the page, away from you"}. Swap A and B and the direction flips.`];
    }
    k.setRO(`<div><h2>${mode === "dot" ? "Scalar product" : "Vector product"}</h2><div class="ro-big" style="margin-top:8px;font-size:30px">${mode === "dot" ? M(`<span class="c2"><b>A</b></span> · <span class="c3"><b>B</b></span> = <span class="c1">${n2(dot)}</span>`) : M(`<span class="c2"><b>A</b></span> × <span class="c3"><b>B</b></span> = <span class="c1">${n2(cr)}</span> k̂`)}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`<span class="c2"><b>A</b></span> = ${n1(A[0])}î + ${n1(A[1])}ĵ, &nbsp;<span class="c3"><b>B</b></span> = ${n1(B[0])}î + ${n1(B[1])}ĵ`)}</div>
        ${mode === "dot" ? `<div class="row">${M(`<i>A</i><sub>x</sub><i>B</i><sub>x</sub> + <i>A</i><sub>y</sub><i>B</i><sub>y</sub> = (${n1(A[0])})(${n1(B[0])}) + (${n1(A[1])})(${n1(B[1])})`)} = <span class="v c1">${n2(dot)}</span></div>
        <div class="row">${M(`<i>AB</i> cos <span class="c4"><i>φ</i></span> = (${n2(a)})(${n2(b)}) cos ${phS}`)} = <span class="v c1">${n2(dot)}</span><span class="lbl">same number, geometric form</span></div>`
        : `<div class="row">${M(`<i>A</i><sub>x</sub><i>B</i><sub>y</sub> − <i>A</i><sub>y</sub><i>B</i><sub>x</sub> = (${n1(A[0])})(${n1(B[1])}) − (${n1(A[1])})(${n1(B[0])})`)} = <span class="v c1">${n2(cr)}</span><span class="lbl">the k̂ component</span></div>
        <div class="row">${M(`<i>AB</i> sin <span class="c4"><i>φ</i></span> = (${n2(a)})(${n2(b)}) sin ${phS}`)} = <span class="v c1">${n2(Math.abs(cr))}</span><span class="lbl">magnitude = shaded parallelogram area</span></div>`}
        <div class="row">${M(`<span class="c4"><i>φ</i></span>`)} = <span class="v c4">${phS}</span><span class="lbl">angle between the vectors, 0° to 180°</span></div>
      </div>
      <div class="landmark${(mode === "dot" ? Math.abs(dot) < 1e-9 || Math.abs(cr) < 1e-9 : Math.abs(cr) < 1e-9) ? " hit" : ""}"><div class="big">${M(lm[0])}</div><div class="note">${lm[1]}</div></div>
      <p class="narr">${mode === "dot" ? "Drag B past 90° from A and watch the projection flip behind the origin." : "Press Swap: the area stays, the direction reverses (A × B = −B × A)."}</p>`);
  });
};
})();
