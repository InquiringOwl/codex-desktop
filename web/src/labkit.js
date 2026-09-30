/* ============ Lab toolkit ============ */
(function(){
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const C = {};
["amber","cyan","pink","violet","green","red","text","muted","faint","line","line-2","panel","panel-2","panel-3","ink"].forEach(k => C[k.replace("-","")] = css("--" + k) || "#fff");
const F = {
  math: '"STIX Two Text", "Cambria Math", Georgia, serif',
  mono: '"IBM Plex Mono", ui-monospace, Menlo, monospace',
  ui: '"Saira Semi Condensed", "Arial Narrow", sans-serif',
  sans: '"IBM Plex Sans", system-ui, sans-serif'
};
const alpha = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`; };
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let uid = 0;
const live = { loops: new Set(), ros: new Set(), timers: new Set() };

function D(g){
  return {
    text(s, x, y, o = {}){ g.font = o.font || `16px ${F.math}`; g.fillStyle = o.color || C.text; g.textAlign = o.align || "left"; g.textBaseline = o.base || "alphabetic"; g.fillText(s, x, y); return g.measureText(s).width; },
    width(s, font){ g.font = font; return g.measureText(s).width; },
    line(x1, y1, x2, y2, color = C.line2, w = 1, dash){ g.save(); g.strokeStyle = color; g.lineWidth = w; if (dash) g.setLineDash(dash); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.restore(); },
    rect(x, y, w, h, fill, stroke, lw = 1){ if (fill) { g.fillStyle = fill; g.fillRect(x, y, w, h); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.strokeRect(x + .5, y + .5, w - 1, h - 1); } },
    rr(x, y, w, h, r, fill, stroke, lw = 1){ g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.stroke(); } },
    circle(x, y, r, fill, stroke, lw = 1){ g.beginPath(); g.arc(x, y, Math.max(0, r), 0, Math.PI * 2); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.stroke(); } },
    hop(x1, x2, y, hgt, color, w = 2){ g.save(); g.strokeStyle = color; g.lineWidth = w; g.beginPath(); g.moveTo(x1, y); g.quadraticCurveTo((x1 + x2) / 2, y - hgt, x2, y); g.stroke();
      const ang = Math.atan2(y - (y - hgt), x2 - (x1 + x2) / 2); g.fillStyle = color; g.beginPath(); g.moveTo(x2, y); g.lineTo(x2 - 8 * Math.cos(ang - .4), y - 8 * Math.sin(ang - .4)); g.lineTo(x2 - 8 * Math.cos(ang + .4), y - 8 * Math.sin(ang + .4)); g.closePath(); g.fill(); g.restore(); },
    arrow(x1, y1, x2, y2, color, w = 2){ g.save(); g.strokeStyle = color; g.fillStyle = color; g.lineWidth = w; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); const a = Math.atan2(y2 - y1, x2 - x1); g.beginPath(); g.moveTo(x2, y2); g.lineTo(x2 - 9 * Math.cos(a - .45), y2 - 9 * Math.sin(a - .45)); g.lineTo(x2 - 9 * Math.cos(a + .45), y2 - 9 * Math.sin(a + .45)); g.closePath(); g.fill(); g.restore(); },
    pow(base, exp, x, y, o = {}){ const size = o.size || 16; const f = `${size}px ${o.family || F.math}`; const w1 = this.text(base, x, y, { font: f, color: o.color, align: "left", base: o.base }); const w2 = this.text(exp, x + w1 + 1, y - size * .42, { font: `${Math.round(size * .66)}px ${o.family || F.math}`, color: o.ecolor || o.color, align: "left", base: o.base }); return w1 + w2 + 1; },
    powW(base, exp, size, family){ return this.width(base, `${size}px ${family || F.math}`) + this.width(exp, `${Math.round(size*.66)}px ${family || F.math}`) + 1; }
  };
}

const fmt = (v, d = 3) => { if (!isFinite(v)) return "undefined"; const s = (Math.round(v * 10 ** d) / 10 ** d).toLocaleString("en-US", { maximumFractionDigits: d }); return s.replace("-", "−"); };
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const lcm = (a, b) => a && b ? Math.abs(a * b) / gcd(a, b) : 0;
const M = s => `<span class="m">${s}</span>`;
const neg = n => (n < 0 ? "−" + Math.abs(n) : String(n));
const frac = (n, d, cls = "") => `<span class="m ${cls}"><span class="fr"><span>${n}</span><span>${d}</span></span></span>`;
function words(n){
  if (n === 0) return "zero";
  const a = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const t = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  const two = x => x < 20 ? a[x] : t[Math.floor(x / 10)] + (x % 10 ? "-" + a[x % 10] : "");
  const three = x => (x >= 100 ? a[Math.floor(x / 100)] + " hundred" + (x % 100 ? " " : "") : "") + (x % 100 ? two(x % 100) : "");
  const parts = []; const units = ["", " thousand", " million", " billion"]; let i = 0;
  while (n > 0) { const c = n % 1000; if (c) parts.unshift(three(c) + units[i]); n = Math.floor(n / 1000); i++; }
  return parts.join(" ");
}

function make(stage, ro, ctl){
  const kit = { C, F, alpha, reduce, fmt, gcd, lcm, M, neg, frac, words, stage, ro, ctl };
  let lastRO = "";
  kit.setRO = html => { if (html !== lastRO) { ro.innerHTML = html; lastRO = html; } };
  kit.canvas = () => {
    const cv = document.createElement("canvas"); stage.appendChild(cv);
    const g = cv.getContext("2d"); const o = { cv, g, w: 1, h: 1, dpr: 1, d: D(g) };
    const rs = () => { const r = stage.getBoundingClientRect(); o.w = Math.max(1, r.width); o.h = Math.max(1, r.height); o.dpr = Math.min(window.devicePixelRatio || 1, 2); cv.width = Math.round(o.w * o.dpr); cv.height = Math.round(o.h * o.dpr); };
    const obs = new ResizeObserver(rs); obs.observe(stage); live.ros.add(obs); rs();
    o.begin = () => { g.setTransform(o.dpr, 0, 0, o.dpr, 0, 0); g.clearRect(0, 0, o.w, o.h); };
    o.xy = e => { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    return o;
  };
  kit.dom = () => { const d = document.createElement("div"); d.className = "dom"; stage.appendChild(d); return d; };
  kit.loop = fn => { const L = { on: true }; live.loops.add(L); let last = performance.now(); const f = now => { if (!L.on) return; const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now; try { fn(dt, now / 1000); } catch(e) { console.error(e); L.on = false; return; } requestAnimationFrame(f); }; requestAnimationFrame(f); };
  kit.every = (ms, fn) => { const id = setInterval(fn, ms); live.timers.add(id); return () => { clearInterval(id); live.timers.delete(id); }; };
  kit.hint = t => { const e = document.createElement("div"); e.className = "hintc"; e.textContent = t; stage.appendChild(e); };
  kit.slider = (label, min, max, step, value, onInput, fmtFn) => {
    const id = "lab" + (++uid);
    const w = document.createElement("div"); w.className = "ctl grow";
    w.innerHTML = `<label for="${id}">${label}</label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}"><span class="val"></span>`;
    kit.ctl.appendChild(w);
    const inp = w.querySelector("input"), val = w.querySelector(".val");
    const show = () => { val.textContent = fmtFn ? fmtFn(+inp.value) : String(inp.value).replace("-", "−"); };
    inp.addEventListener("input", () => { show(); onInput(+inp.value); }); show();
    return { el: inp, get v(){ return +inp.value; }, set(v){ inp.value = v; show(); }, setMax(m){ inp.max = m; if (+inp.value > m) { inp.value = m; } show(); }, setMin(m){ inp.min = m; if (+inp.value < m) inp.value = m; show(); } };
  };
  kit.number = (label, min, max, value, onChange, width) => {
    const id = "lab" + (++uid);
    const w = document.createElement("div"); w.className = "ctl";
    w.innerHTML = `<label for="${id}">${label}</label><input type="number" id="${id}" min="${min}" max="${max}" value="${value}">`;
    kit.ctl.appendChild(w);
    const inp = w.querySelector("input"); if (width) inp.style.width = width;
    const read = () => { let v = Math.round(+inp.value); if (!isFinite(v)) v = value; v = Math.max(min, Math.min(max, v)); return v; };
    inp.addEventListener("change", () => { const v = read(); inp.value = v; onChange(v); });
    return { el: inp, get v(){ return read(); }, set(v){ inp.value = v; } };
  };
  kit.select = (label, options, value, onChange) => {
    const id = "lab" + (++uid);
    const w = document.createElement("div"); w.className = "ctl";
    w.innerHTML = `<label for="${id}">${label}</label><select id="${id}">${options.map(([v, t]) => `<option value="${v}"${String(v) === String(value) ? " selected" : ""}>${t}</option>`).join("")}</select>`;
    kit.ctl.appendChild(w);
    const s = w.querySelector("select"); s.addEventListener("change", () => onChange(s.value));
    return { el: s, get v(){ return s.value; }, set(v){ s.value = v; } };
  };
  kit.button = (label, onClick, cls = "btn") => { const b = document.createElement("button"); b.type = "button"; b.className = cls; b.textContent = label; b.addEventListener("click", onClick); kit.ctl.appendChild(b); return b; };
  kit.check = (label, value, onChange) => {
    const id = "lab" + (++uid);
    const w = document.createElement("div"); w.className = "ctl";
    w.innerHTML = `<input type="checkbox" id="${id}"${value ? " checked" : ""}><label for="${id}" style="font-family:var(--sans)">${label}</label>`;
    kit.ctl.appendChild(w); const c = w.querySelector("input"); c.addEventListener("change", () => onChange(c.checked)); return c;
  };
  kit.modes = (list, active, onPick) => {
    const w = document.createElement("div"); w.className = "modes"; w.setAttribute("role", "group");
    list.forEach(([k, t]) => { const b = document.createElement("button"); b.type = "button"; b.textContent = t; b.dataset.k = k; b.setAttribute("aria-pressed", String(k === active)); b.onclick = () => { w.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x === b))); onPick(k); }; w.appendChild(b); });
    stage.appendChild(w); return w;
  };
  // stepper: returns {play, pause, step, reset, playing}
  kit.stepper = (count, onStep, opts = {}) => {
    let k = opts.start ?? 0, playing = false, stop = null;
    const btnP = kit.button("Play", () => playing ? pause() : play());
    const btnS = kit.button("Step", () => { pause(); step(); }, "btn ghost");
    const btnR = kit.button("Reset", () => { pause(); k = 0; onStep(k); }, "btn ghost");
    function step(){ if (k < count()) { k++; onStep(k); } else pause(); }
    function play(){ if (k >= count()) { k = 0; onStep(k); } playing = true; btnP.textContent = "Pause"; stop = kit.every(opts.ms || 900, () => { if (k >= count()) pause(); else step(); }); }
    function pause(){ playing = false; btnP.textContent = "Play"; if (stop) stop(); stop = null; }
    return { play, pause, step, get k(){ return k; }, set k(v){ k = v; }, reset(){ pause(); k = 0; onStep(k); }, finish(){ pause(); k = count(); onStep(k); } };
  };
  kit.fontsReady = cb => { if (document.fonts && document.fonts.ready) document.fonts.ready.then(cb); };
  return kit;
}
function stopAll(){ live.loops.forEach(L => L.on = false); live.loops.clear(); live.ros.forEach(o => o.disconnect()); live.ros.clear(); live.timers.forEach(id => clearInterval(id)); live.timers.clear(); }
window.LabKit = { make, stopAll };
window.LABS = window.LABS || {};
})();
