/* Music Fundamentals labs, part 2: rhythm. mus-durations, mus-simple-meter.
   Durations are exact fractions of a whole note (MusicTheory.R / dur); seconds are only used for sound. */
(function(){ const L = window.LABS;
const MT = window.MusicTheory;
const KINDS = ["whole", "half", "quarter", "eighth", "sixteenth"];
const US = { whole: "whole", half: "half", quarter: "quarter", eighth: "eighth", sixteenth: "sixteenth" };
const UK = { whole: "semibreve", half: "minim", quarter: "crotchet", eighth: "quaver", sixteenth: "semiquaver" };
const FLAGS = { whole: 0, half: 0, quarter: 0, eighth: 1, sixteenth: 2 };
const show = (el, on) => { const box = el.closest ? (el.closest(".ctl") || el) : el; box.style.display = on ? "" : "none"; };
const frH = (r, cls = "") => r.d === 1 ? `<span class="m ${cls}">${r.n}</span>` : `<span class="m ${cls}"><span class="fr"><span>${r.n}</span><span>${r.d}</span></span></span>`;
const frT = r => r.d === 1 ? String(r.n) : `${r.n}/${r.d}`;
const sumR = list => list.reduce((a, b) => a.add(b), MT.R(0));
const floorDiv = (a, b) => Math.floor((a.n * b.d) / (a.d * b.n));   // ⌊a / b⌋ for exact rationals
// Single dotted value equal to r (n dots ≤ 3), or null: the tie is needed.
function singleValue(r){ for (const kd of ["whole", "half", "quarter", "eighth", "sixteenth", "thirty-second"]) for (let n = 0; n <= 3; n++) if (MT.dur(kd, n).eq(r)) return { kind: kd, dots: n }; return null; }
const valueName = (v) => `${["", "dotted ", "double-dotted ", "triple-dotted "][v.dots]}${v.kind}`;

// Look-ahead sound scheduler: events {t: seconds, fn(at)} are handed to the audio clock 0.12 s before they are due,
// so Stop really stops (nothing far ahead is queued). Local helper: the kit has no cancellable sequencer.
function scheduler(k, mk){
  let q = [], t0 = 0, end = 0, on = false;
  const now = () => performance.now() / 1000;
  const pump = () => { if (!on) return; const n = now(); while (q.length && t0 + q[0].t < n + 0.12) { const e = q.shift(); e.fn(Math.max(0, t0 + e.t - n)); } if (!q.length && n > t0 + end) on = false; };
  k.every(25, pump);
  return {
    start(events, total){ mk.silence(); q = events.slice().sort((a, b) => a.t - b.t); t0 = now() + 0.08; end = total; on = true; pump(); },
    stop(){ q = []; on = false; mk.silence(); },
    get on(){ return on; },
    get pos(){ return on ? now() - t0 : -1; }
  };
}
// Tie (curved, below the noteheads when stems are up).
function tie(g, x1, x2, y, color, gap){ g.save(); g.fillStyle = color; g.beginPath(); g.moveTo(x1, y); g.quadraticCurveTo((x1 + x2) / 2, y + gap * 1.3, x2, y); g.quadraticCurveTo((x1 + x2) / 2, y + gap * 0.95, x1, y); g.fill(); g.restore(); }
// Rest at x on a one-line rhythm staff whose line is staff position 4 of S (the whole rest hangs from that line).
function rest1(mk, c, S, x, kind, color){ if (kind === "whole") mk.staff(c, { x: S.x, y: S.top + S.gap, w: S.w, gap: S.gap }).rest(x, "whole", { color }); else S.rest(x, kind, { color }); }
// Note value of a duration kind with dots, drawn as a note or rest; returns the note's geometry.
function drawItem(mk, c, S, x, it, color, o = {}){
  if (it.rest) { S.rest(x, it.kind, { color }); for (let i = 0; i < (it.dots || 0); i++) c.d.circle(x + S.gap * (0.9 + 0.45 * i), S.y(5), S.gap * 0.13, color); return null; }
  return S.note(x, o.pitch || "B4", { dur: it.kind, dots: it.dots, color, stem: o.stem || "up", beamed: o.beamed });
}

/* ================= Note values & rests ================= */
L["mus-durations"] = k => {
  const { C, F } = k, mk = MusicKit.attach(k), c = k.canvas(), d = c.d, g = c.g, sch = scheduler(k, mk);
  const Q = 0.6;                                   // quarter note = 0.6 s (♩ = 100); a whole note = 2.4 s
  let mode = "tree", row = 2, rests = false, cell = 2, chain = [{ kind: "half", dots: 1 }, { kind: "eighth", dots: 0 }], play = null;
  k.modes([["tree", "Note tree"], ["dots", "Dots & ties"], ["rests", "Rests"]], mode, m => { mode = m; sch.stop(); play = null; sync(); });

  const chk = k.check("Show rests", false, v => { rests = v; sch.stop(); });
  const bRow = k.button("Play row", () => playRow(row));
  const selBase = k.select("Base", KINDS.map(x => [x, x]), "eighth", v => { chain[chain.length - 1].kind = v; sch.stop(); });
  const selDots = k.select("Dots", [[0, "none"], [1, "1 dot"], [2, "2 dots"], [3, "3 dots"]], 0, v => { chain[chain.length - 1].dots = +v; sch.stop(); });
  const bTie = k.button("Tie on", () => { if (chain.length < 4) { chain.push({ ...chain[chain.length - 1] }); sch.stop(); } }, "btn ghost");
  const bUntie = k.button("Untie", () => { if (chain.length > 1) { chain.pop(); const l = chain[chain.length - 1]; selBase.set(l.kind); selDots.set(l.dots); sch.stop(); } }, "btn ghost");
  const bPlayD = k.button("Play", () => playChain());
  const bPlayR = k.button("Play note, then rest", () => playRest(cell));
  function sync(){ show(chk, mode === "tree"); show(bRow, mode === "tree"); [selBase.el, selDots.el].forEach(e => show(e, mode === "dots")); [bTie, bUntie, bPlayD].forEach(b => show(b, mode === "dots")); show(bPlayR, mode === "rests"); }
  sync();

  // Count-in of four quarter clicks, then `notes` ([[start, length] in whole notes]) against continuing clicks.
  function perform(notes, total, sound = true){
    const beats = 4 + Math.ceil(total.val * 4 - 1e-9), ev = [];
    for (let b = 0; b < beats; b++) ev.push({ t: b * Q, fn: at => mk.click(at, b % 4 === 0) });
    if (sound) for (const [s, len] of notes) ev.push({ t: 4 * Q + s.val * 4 * Q, fn: at => mk.play(72, { at, dur: Math.max(0.08, len.val * 4 * Q * 0.88), type: "organ", gain: 0.22 }) });
    sch.start(ev, beats * Q);
  }
  function playRow(r){ row = r; const n = 2 ** r, v = MT.R(1, n); play = { what: "row", r };
    perform(Array.from({ length: n }, (_, i) => [v.mul(MT.R(i)), v]), MT.R(1), !rests); }
  function playChain(){ const tot = total(); play = { what: "chain" }; perform([[MT.R(0), tot]], tot); }
  function playRest(i){ cell = i; const v = MT.dur(KINDS[i]); play = { what: "rest", i }; perform([[MT.R(0), v]], v.add(v)); }
  const elapsed = () => sch.on ? (sch.pos - 4 * Q) / (4 * Q) : null;   // whole notes since the count-in ended

  const parts = n => { const b = MT.dur(n.kind), out = [b]; let a = b; for (let i = 0; i < n.dots; i++) { a = a.mul(MT.R(1, 2)); out.push(a); } return out; };
  const total = () => sumR(chain.flatMap(parts));

  // Tree geometry (shared by drawing and clicks)
  const treeGeo = () => { const top = 58, bot = c.h - 18, rh = (bot - top) / 5, lx = c.w < 500 ? 40 : 56, W = c.w - lx - 14, gap = Math.max(5, Math.min(8.5, rh / 9.5));
    return { top, rh, lx, W, gap, lineY: r => top + rh * (r + 0.74) }; };
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e);
    if (mode === "tree") { const G = treeGeo(), r = Math.floor((p.y - G.top) / G.rh); if (r >= 0 && r < 5) playRow(r); }
    else if (mode === "rests") { const G = restGeo(); G.cells.forEach((b, i) => { if (p.x >= b.x && p.x <= b.x + b.w && p.y >= b.y && p.y <= b.y + b.h) { cell = i; sch.stop(); } }); } });
  const restGeo = () => { const cols = c.w < 520 ? 2 : 3, rows = Math.ceil(5 / cols), top = 56, cw = (c.w - 24) / cols, ch = (c.h - top - 14) / rows, cells = [];
    for (let i = 0; i < 5; i++) cells.push({ x: 12 + (i % cols) * cw + 4, y: top + Math.floor(i / cols) * ch + 4, w: cw - 8, h: ch - 8 }); return { cells }; };

  function drawTree(){
    const G = treeGeo(), el = play && play.what === "row" ? elapsed() : null;
    for (let b = 1; b < 4; b++) d.line(G.lx + b * G.W / 4, G.top + 4, G.lx + b * G.W / 4, c.h - 14, k.alpha(C.line2, 0.35), 1, [3, 4]);
    for (let r = 0; r < 5; r++) {
      const n = 2 ** r, kind = KINDS[r], cw = G.W / n, y = G.lineY(r), sel = r === row;
      if (sel) d.rr(4, G.top + r * G.rh + 2, c.w - 8, G.rh - 4, 5, k.alpha(C.amber, 0.07), k.alpha(C.amber, 0.35));
      d.line(G.lx - 4, y, G.lx + G.W, y, C.line2, 1);
      d.text(frT(MT.R(1, n)), G.lx - 10, y + 1, { font: `600 ${c.w < 500 ? 11 : 13}px ${F.mono}`, color: sel ? C.amber : C.muted, align: "right", base: "middle" });
      const S = mk.staff(c, { x: G.lx, y: y - 2 * G.gap, w: G.W, gap: G.gap });
      const heads = [];
      for (let i = 0; i < n; i++) {
        const x = G.lx + (i + 0.5) * cw, on = el !== null && el >= i / n && el < (i + 1) / n && sel;
        const col = rests ? (on ? C.text : C.violet) : (on ? C.text : sel ? C.amber : C.text);
        if (rests) rest1(mk, c, S, x, kind, col);
        else heads.push(S.note(x, "B4", { dur: kind, color: col, stem: "up", beamed: FLAGS[kind] > 0 }));
        if (r > 0) { const px = G.lx + (Math.floor(i / 2) + 0.5) * (G.W / (n / 2)), py = G.lineY(r - 1) + G.gap * 0.9; d.line(px, py, x, y - G.gap * 4.6, k.alpha(C.line2, 0.5), 1); }
      }
      if (!rests && FLAGS[kind]) { const per = kind === "eighth" ? 2 : 4; for (let i = 0; i < n; i += per) S.beam(heads.slice(i, i + per), FLAGS[kind], sel ? C.amber : C.text); }
      if (el !== null && sel && el >= 0 && el <= 1) d.line(G.lx + el * G.W, G.top + r * G.rh + 6, G.lx + el * G.W, G.top + (r + 1) * G.rh - 6, C.amber, 2);
    }
    const n = 2 ** row, kind = KINDS[row], v = MT.R(1, n);
    k.setRO(`<div><h2>${rests ? "Rest" : "Note"} value</h2><div class="ro-big"><span class="num ${rests ? "c4" : "c1"}">${US[kind]}</span> = ${frH(v, "c5")}</div></div>
<div class="ro-rows"><div class="row"><span class="v c1">${n}</span><span class="lbl">${US[kind]} ${rests ? "rests" : "notes"} fill one whole note</span></div>
<div class="row"><span class="v">${UK[kind]}</span><span class="lbl">British name</span></div>
${row < 4 ? `<div class="row"><span class="v c2">2 × ${frH(MT.R(1, 2 * n))}</span><span class="lbl">one ${US[kind]} = two ${US[KINDS[row + 1]]}s</span></div>` : `<div class="row"><span class="v c2">2 × ${frH(MT.R(1, 32))}</span><span class="lbl">one sixteenth = two thirty-seconds</span></div>`}
<div class="row"><span class="v">${FLAGS[kind] ? FLAGS[kind] + (FLAGS[kind] > 1 ? " beams" : " beam") : kind === "whole" ? "no stem" : kind === "half" ? "open + stem" : "filled + stem"}</span><span class="lbl">${FLAGS[kind] ? "flags become beams in groups" : "notehead and stem"}</span></div></div>
<p class="narr">Click a row to hear it after four count-in clicks; the clicks keep the quarter-note beat. ${rests ? "Rests are silent: count them against the clicks." : "Tick Show rests to see the matching rests."}</p>`);
  }

  function drawDots(){
    const gap = c.w < 500 ? 12 : 17, sw = Math.min(c.w - 28, 680), x0 = (c.w - sw) / 2, blockH = gap * 12 + 150, top = Math.max(70 + gap * 2, (c.h - blockH) / 2 + gap * 2);
    const S = mk.staff(c, { x: x0, y: top, w: sw, gap }); S.lines(); const cw = S.clef();
    const xs = x0 + cw + gap * 2.2, sp = (x0 + sw - xs - gap) / Math.max(chain.length, 2), heads = [];
    chain.forEach((n, i) => {
      const x = xs + sp * (i + 0.28), h = S.note(x, "A4", { dur: n.kind, color: C.amber, stem: "up" });
      for (let j = 0; j < n.dots; j++) d.circle(x + gap * 0.66 + gap * (0.45 + 0.45 * j), h.y, gap * 0.15, C.cyan);
      heads.push({ x, y: h.y, right: x + gap * 0.66 + (n.dots ? gap * (0.45 * n.dots + 0.3) : 0) });
    });
    for (let i = 0; i + 1 < heads.length; i++) tie(g, heads[i].right + gap * 0.2, heads[i + 1].x - gap * 0.6, heads[i].y + gap * 0.75, C.pink, gap);
    S.bar(x0 + sw, "final");
    // proportional bar
    const tot = total(), span = Math.max(1, Math.ceil(tot.val - 1e-9)), bx = x0, bw = sw, by = S.bottom + gap * 4 + 40, bh = 44, X = r => bx + bw * r / span;
    d.text("whole notes", bx, by - 24, { font: `12px ${F.sans}`, color: C.muted });
    for (let w = 0; w <= span; w++) d.text(String(w), X(w), by - 8, { font: `600 12px ${F.mono}`, color: C.faint, align: "center" });
    d.rect(bx, by, bw, bh, k.alpha(C.line2, 0.12), C.line2);
    let at = MT.R(0);
    chain.forEach((n, i) => {
      parts(n).forEach((p, j) => { const x1 = X(at.val), x2 = X(at.add(p).val), col = j === 0 ? C.amber : C.cyan;
        d.rect(x1 + 1, by + 1, Math.max(1, x2 - x1 - 2), bh - 2, k.alpha(col, j === 0 ? 0.75 : 0.6));
        if (x2 - x1 > 34) d.text(frT(p), (x1 + x2) / 2, by + bh / 2 + 1, { font: `600 12px ${F.mono}`, color: C.ink, align: "center", base: "middle" });
        at = at.add(p); });
      if (i + 1 < chain.length) { const x = X(at.val); d.line(x, by - 3, x, by + bh + 3, C.pink, 3); }
    });
    for (let q = 1; q < span * 4; q++) d.line(X(q / 4), by + bh, X(q / 4), by + bh + (q % 4 ? 4 : 8), C.line2, 1);
    const xe = X(tot.val), yb = by + bh + 16;
    d.line(bx, yb, xe, yb, C.green, 2); d.line(bx, yb - 5, bx, yb + 5, C.green, 2); d.line(xe, yb - 5, xe, yb + 5, C.green, 2);
    d.text(`total ${frT(tot)}`, Math.max(bx + 40, Math.min(bx + bw - 40, (bx + xe) / 2)), yb + 18, { font: `600 13px ${F.mono}`, color: C.green, align: "center" });
    const el = play && play.what === "chain" ? elapsed() : null;
    if (el !== null && el >= 0 && el <= tot.val) d.line(X(el), by - 4, X(el), by + bh + 4, C.text, 2);
    const one = singleValue(tot), rows = chain.map(n => { const ps = parts(n); return `<div class="row"><span class="v"><span class="m"><span class="c1">${frT(ps[0])}</span>${ps.slice(1).map(p => ` + <span class="c2">${frT(p)}</span>`).join("")}</span></span><span class="lbl">${valueName(n)}</span></div>`; }).join("");
    k.setRO(`<div><h2>Total duration</h2><div class="ro-big">${frH(tot, "c5")} <span class="lbl" style="font-size:14px">of a whole note</span></div></div>
<div class="ro-rows">${rows}<div class="row"><span class="v c5">${frT(tot.div(MT.R(1, 4)))}</span><span class="lbl">quarter notes</span></div><div class="row"><span class="v c5">${frT(tot.div(MT.R(1, 16)))}</span><span class="lbl">sixteenth notes</span></div></div>
<div class="landmark ${one ? "hit" : ""}"><div class="big">${one ? (chain.length > 1 ? "= one " : "") + valueName(one) : "needs a tie"}</div><div class="note">${one ? (chain.length > 1 ? "This tie can be written as a single note." : "Each dot adds half of the previous addition.") : "No single note, even dotted, has this length."}</div></div>
<p class="narr">${chain.length > 1 ? "Ties (pink) add the next note to the same sound." : "Add dots, or Tie on another note."} Play holds the value against quarter-note clicks.</p>`);
  }

  function drawRests(){
    const G = restGeo(), el = play && play.what === "rest" ? elapsed() : null;
    G.cells.forEach((b, i) => {
      const kind = KINDS[i], sel = i === cell, gap = Math.max(6, Math.min(16, (b.h - 46) / 8.6)), sw = Math.min(b.w - 20, gap * 15), oy = Math.max(0, (b.h - 46 - 8.6 * gap) / 2), sx = b.x + (b.w - sw) / 2;
      d.rr(b.x, b.y, b.w, b.h, 6, sel ? k.alpha(C.amber, 0.06) : null, sel ? C.amber : k.alpha(C.line2, 0.6), sel ? 1.5 : 1);
      d.text(`${US[kind]} · ${UK[kind]}`, b.x + b.w / 2, b.y + oy + 18, { font: `600 ${b.w < 170 ? 11 : 13}px ${F.sans}`, color: sel ? C.amber : C.text, align: "center" });
      const st = b.y + oy + 26 + gap * 2.2, S = mk.staff(c, { x: sx, y: st, w: sw, gap }); S.lines();
      const v = MT.dur(kind), onN = sel && el !== null && el >= 0 && el < v.val, onR = sel && el !== null && el >= v.val && el < 2 * v.val;
      S.note(sx + sw * 0.3, "A4", { dur: kind, color: onN ? C.text : C.amber, stem: "up" });
      S.rest(sx + sw * 0.72, kind, { color: onR ? C.text : C.violet });
      d.text(frT(v), b.x + b.w / 2, S.bottom + gap * 2.2 + 8, { font: `600 13px ${F.mono}`, color: C.green, align: "center" });
    });
    const kind = KINDS[cell], v = MT.dur(kind);
    const where = { whole: "hangs below the fourth line; also used for a whole measure of rest in any meter", half: "sits on top of the middle line", quarter: "a zigzag across the middle of the staff", eighth: "one hook on a slanted stroke", sixteenth: "two hooks, one for each flag" }[kind];
    k.setRO(`<div><h2>Rest</h2><div class="ro-big"><span class="num c4">${US[kind]} rest</span> = ${frH(v, "c5")}</div></div>
<div class="ro-rows"><div class="row"><span class="v">${UK[kind]} rest</span><span class="lbl">British name</span></div><div class="row"><span class="v c4">${where}</span></div>
<div class="row"><span class="v c1">${US[kind]} note</span><span class="lbl">same length, ${frT(v)}</span></div></div>
<p class="narr">Click a box, then play the note followed by its rest: the silence lasts exactly as long as the sound.</p>`);
  }

  k.loop(() => { c.begin(); if (play && !sch.on) play = null; if (mode === "tree") drawTree(); else if (mode === "dots") drawDots(); else drawRests(); });
  return mk.cleanup;
};

/* ================= Beat, meter & simple time signatures ================= */
L["mus-simple-meter"] = k => {
  const { C, F } = k, mk = MusicKit.attach(k), c = k.canvas(), d = c.d, g = c.g, sch = scheduler(k, mk);
  const SIGS = ["2/4", "3/4", "4/4", "2/2", "3/8"];
  const UNIT = { 2: "half", 4: "quarter", 8: "eighth" }, HALF = { half: "quarter", quarter: "eighth", eighth: "sixteenth" };
  const strength = (b, beats) => b === 0 ? 1 : beats === 4 && b === 2 ? 0.66 : 0.4;
  const sname = (b, beats) => b === 0 ? "strong" : beats === 4 && b === 2 ? "medium" : "weak";
  let mode = "meter", sig = "3/4", bpm = 96, div = false, items = [{ kind: "half", dots: 0 }, { kind: "quarter", dots: 0 }, { kind: "quarter", dots: 1 }, { kind: "eighth", dots: 0 }, { kind: "eighth", dots: 0 }], dotted = false, isRest = false, play = null;
  let quiz = { q: { type: "sig", sig: "3/4" }, answered: null, right: 0, asked: 0 };
  k.modes([["meter", "Meter"], ["fill", "Fill the bar"], ["classify", "Classify"]], mode, m => { mode = m; sch.stop(); play = null; sync(); });

  const selSig = k.select("Time signature", SIGS.map(s => [s, s + (s === "2/2" ? " (cut)" : s === "4/4" ? " (C)" : "")]), sig, v => { sig = v; items = []; sch.stop(); });
  const slT = k.slider("Beats per minute", 60, 160, 4, bpm, v => { bpm = v; sch.stop(); });
  const chkD = k.check("Sound divisions", false, v => { div = v; sch.stop(); });
  const bStart = k.button("Start", () => { if (sch.on) { sch.stop(); play = null; } else startMetro(); });
  const addB = KINDS.map(kd => k.button(kd === "sixteenth" ? "16th" : kd[0].toUpperCase() + kd.slice(1), () => add(kd), "btn ghost"));
  const chkDot = k.check("Dotted", false, v => { dotted = v; });
  const chkRest = k.check("Rest", false, v => { isRest = v; });
  const bUndo = k.button("Undo", () => { items.pop(); sch.stop(); }, "btn ghost");
  const bClear = k.button("Clear", () => { items = []; sch.stop(); }, "btn ghost");
  const bPlayF = k.button("Play", () => playFill());
  const ans = [["duple", "Duple"], ["triple", "Triple"], ["quadruple", "Quadruple"]].map(([v, t]) => k.button(t, () => answer(v), "btn ghost"));
  const bHear = k.button("Hear it", () => hear());
  const bNext = k.button("Next", () => nextQ(), "btn ghost");
  function sync(){
    show(selSig.el, mode !== "classify"); show(slT.el, mode === "meter"); show(chkD, mode === "meter"); show(bStart, mode === "meter");
    addB.concat([bUndo, bClear, bPlayF]).forEach(b => show(b, mode === "fill")); show(chkDot, mode === "fill"); show(chkRest, mode === "fill");
    ans.concat([bHear, bNext]).forEach(b => show(b, mode === "classify"));
  }
  sync();

  const M = () => MT.meter(sig);
  const beatSec = () => 60 / bpm;
  function startMetro(){ const m = M(), bs = beatSec(), ev = [], N = 32 * m.beats;
    for (let b = 0; b < N; b++) { ev.push({ t: b * bs, fn: at => mk.click(at, b % m.beats === 0) });
      if (div) ev.push({ t: (b + 0.5) * bs, fn: at => mk.play({ f: 2400 }, { at, dur: 0.03, type: "sine", gain: 0.06 }) }); }
    play = { what: "metro" }; sch.start(ev, N * bs); }

  /* ---- Fill the bar ---- */
  const val = it => MT.dur(it.kind, it.dots);
  const fillGap = () => c.w < 520 ? 10 : 13, MAXM = () => (c.w < 520 ? 2 : 3) * Math.max(2, Math.floor((c.h - 70) / (fillGap() * 13)));
  function add(kd){ const it = { kind: kd, dots: dotted && kd !== "sixteenth" ? 1 : 0, rest: isRest }, bars = MT.bar(sig, items.concat([it]).map(val));
    if (bars.length > MAXM()) return; items.push(it); sch.stop(); }
  function playFill(){ if (!items.length) return; const m = M(), bs = 60 / 96, wn = bs / m.beat.val, tot = sumR(items.map(val)), beats = m.beats + Math.ceil(tot.div(m.beat).val - 1e-9), ev = [];
    for (let b = 0; b < beats; b++) ev.push({ t: b * bs, fn: at => mk.click(at, b % m.beats === 0) });
    let at = MT.R(0); for (const it of items) { const v = val(it), s = m.beats * bs + at.val * wn; if (!it.rest) ev.push({ t: s, fn: a => mk.play(72, { at: a, dur: Math.max(0.08, v.val * wn * 0.85), type: "organ", gain: 0.22 }) }); at = at.add(v); }
    play = { what: "fill", wn, lead: m.beats * bs }; sch.start(ev, beats * bs); }

  /* ---- Classify ---- */
  const POOL = ["2/4", "3/4", "4/4", "2/2", "3/2", "4/2", "2/8", "3/8", "4/8", "C", "¢"];
  const sigOf = s => s === "C" ? "4/4" : s === "¢" ? "2/2" : s;
  function nextQ(){ const prev = quiz.q; let q;
    do { q = Math.random() < 0.35 ? { type: "ear", sig: ["2/4", "3/4", "4/4"][Math.floor(Math.random() * 3)] } : { type: "sig", sig: POOL[Math.floor(Math.random() * POOL.length)] }; } while (q.type === prev.type && q.sig === prev.sig);
    quiz.q = q; quiz.answered = null; sch.stop(); }
  function answer(v){ if (quiz.answered) return; const ok = MT.meter(sigOf(quiz.q.sig)).group === v; quiz.answered = { v, ok }; quiz.asked++; if (ok) quiz.right++; }
  function hear(){ const m = MT.meter(sigOf(quiz.q.sig)), bs = 0.5, N = 4 * m.beats, ev = [];
    for (let b = 0; b < N; b++) ev.push({ t: b * bs, fn: at => mk.click(at, b % m.beats === 0) });
    play = { what: "hear", beats: m.beats, bs }; sch.start(ev, N * bs); }

  // Time signature or C / cut-C sign, centred at x.
  function tsig(S, x, s, color){ if (s === "C" || s === "¢") { d.text("C", x, S.y(4), { font: `700 ${Math.round(S.gap * 3.3)}px ${F.math}`, color, align: "center", base: "middle" }); if (s === "¢") d.line(x + S.gap * 0.05, S.top - S.gap * 0.8, x + S.gap * 0.05, S.bottom + S.gap * 0.8, color, Math.max(1.5, S.gap * 0.16)); return S.gap * 2.2; }
    const [a, b] = s.split("/"); S.time(x, a, b, color); return S.gap * 1.8; }
  // Beam groups: consecutive unbeamed-kind notes (eighth or sixteenth, undotted, same kind) inside the same beat
  // (or the same measure when the beat is an eighth note, as in 3/8).
  function beamGroups(list, unit){ const out = []; let cur = [];
    const flush = () => { if (cur.length > 1) out.push(cur); cur = []; };
    for (const n of list) { const ok = !n.it.rest && !n.it.dots && FLAGS[n.it.kind] > 0;
      if (ok && cur.length && cur[0].it.kind === n.it.kind && floorDiv(cur[0].on, unit) === floorDiv(n.on, unit) && cur[cur.length - 1].end.eq(n.on)) cur.push(n); else { flush(); if (ok) cur.push(n); } }
    flush(); return out; }

  function drawMeter(){
    const m = M(), unit = UNIT[m.bottom], dv = HALF[unit], phone = c.w < 520, gap = phone ? 9 : 14, sw = Math.min(c.w - 28, 720), x0 = (c.w - sw) / 2, top = 70 + gap;
    const S = mk.staff(c, { x: x0, y: top, w: sw, gap }); S.lines(); let x = x0 + S.clef() + gap; x += tsig(S, x + gap * 0.9, sig, C.text) + gap * 0.8;
    const room = x0 + sw - x - gap, mw = room / 2, bs = beatSec(), pos = play && play.what === "metro" ? sch.pos : -1, bNow = pos >= 0 ? Math.floor(pos / bs) % m.beats : -1, half = pos >= 0 && (pos / bs) % 1 >= 0.5;
    const cy = S.bottom + gap * 4.6, f = `600 ${phone ? 12 : 14}px ${F.mono}`;
    const beatHeads = [];
    for (let b = 0; b < m.beats; b++) { const nx = x + (b + 0.35) * mw / m.beats, col = b === bNow ? C.amber : b === 0 ? C.cyan : C.text;
      beatHeads.push(S.note(nx, "B4", { dur: unit, color: col, stem: "up", beamed: unit === "eighth" })); d.text(String(b + 1), nx, cy, { font: f, color: col, align: "center" }); }
    if (unit === "eighth") S.beam(beatHeads, 1);
    S.bar(x + mw, "single", C.pink);
    const heads = [];
    for (let b = 0; b < m.beats; b++) for (let h = 0; h < 2; h++) { const nx = x + mw + (b + 0.3 + h * 0.42) * mw / m.beats, on = b === bNow && (h === 1) === half && pos >= 0;
      heads.push(S.note(nx, "B4", { dur: dv, color: on ? C.amber : C.violet, stem: "up", beamed: FLAGS[dv] > 0 }));
      d.text(h ? "&" : String(b + 1), nx, cy, { font: f, color: h ? C.violet : (b === 0 ? C.cyan : C.text), align: "center" }); }
    if (FLAGS[dv]) { const per = unit === "eighth" ? 2 * m.beats : 2; for (let i = 0; i < heads.length; i += per) S.beam(heads.slice(i, i + per), FLAGS[dv], C.violet); }
    S.bar(x0 + sw, "final", C.pink);
    // beat grid
    const gy = cy + 26, gh = Math.max(90, c.h - gy - 64), gx = x0, gw = sw, bw = gw / m.beats;
    d.rect(gx, gy, gw, gh, null, C.pink, 1.5);
    for (let b = 0; b < m.beats; b++) { const s = strength(b, m.beats), hh = (gh - 30) * s, bx = gx + b * bw, col = b === 0 ? C.cyan : C.amber, cur = b === bNow;
      d.rect(bx + bw * 0.18, gy + gh - 22 - hh, bw * 0.64, hh, k.alpha(col, cur ? 0.95 : 0.35), cur ? col : null, 2);
      d.line(bx + bw / 2, gy + gh - 22, bx + bw / 2, gy + gh - 18, C.violet, 2);
      d.line(bx + bw, gy + gh - 22, bx + bw, gy + gh - 18, C.violet, 1);
      if (b) d.line(bx, gy + 6, bx, gy + gh - 6, k.alpha(C.line2, 0.6), 1, [3, 4]);
      d.text(sname(b, m.beats), bx + bw / 2, gy + gh - 5, { font: `${phone ? 11 : 12}px ${F.sans}`, color: b === 0 ? C.cyan : C.muted, align: "center" }); }
    d.line(gx, gy + gh - 22, gx + gw, gy + gh - 22, C.line2, 1);
    d.text(`one measure = ${m.beats} × ${frT(m.unit)} = ${frT(m.measure)}`, gx + gw / 2, gy + gh + 22, { font: `600 13px ${F.mono}`, color: C.pink, align: "center" });
    const label = sig === "2/2" ? " · cut time (alla breve)" : sig === "4/4" ? " · common time, C" : "";
    k.setRO(`<div><h2>Meter</h2><div class="ro-big"><span class="ts"><span>${m.top}</span><span>${m.bottom}</span></span> <span class="num c2">simple ${m.group}</span></div></div>
<div class="ro-rows"><div class="row"><span class="v c1">${m.beats}</span><span class="lbl">beats per measure${label}</span></div>
<div class="row"><span class="v c1">${unit}</span><span class="lbl">beat unit = ${frT(m.unit)} of a whole note</span></div>
<div class="row"><span class="v c4">2 × ${dv}</span><span class="lbl">each beat divides in two</span></div>
<div class="row"><span class="v c3">${frT(m.measure)}</span><span class="lbl">measure length, whole notes</span></div></div>
<p class="narr">${sch.on ? "Downbeats click higher. Change the signature and compare the pattern." : "Press Start for a metronome: the downbeat clicks higher."}${sig === "3/8" ? " At fast tempos 3/8 is often felt as one beat per measure." : ""}</p>`);
  }

  function drawFill(){
    const m = M(), phone = c.w < 520, per = phone ? 2 : 3, gap = fillGap(), top = 64, rowH = (c.h - top - 10) / Math.ceil(MAXM() / per);
    const durs = items.map(val), bars = MT.bar(sig, durs), x0 = 14, W = c.w - 28;
    const nBars = Math.min(MAXM(), Math.max(1, bars.length + (bars.length && bars[bars.length - 1].full ? 1 : 0))), rowsN = Math.ceil(nBars / per);
    let idx = 0, el = play && play.what === "fill" && sch.on ? (sch.pos - play.lead) / play.wn : null, at0 = MT.R(0);
    for (let r = 0; r < rowsN; r++) {
      const st = top + r * rowH + gap * 2.2, S = mk.staff(c, { x: x0, y: st, w: W, gap }); S.lines();
      let xs = x0 + gap * 0.6; if (r === 0) xs += tsig(S, xs + gap * 0.9, sig, C.text) + gap * 0.6;
      const mw = (x0 + W - xs) / per;
      for (let j = 0; j < per; j++) {
        const bi = r * per + j; if (bi >= nBars) break;
        const mx = xs + j * mw, b = bars[bi] || { notes: [], sum: MT.R(0), full: false, short: m.measure };
        const len = b.full || b.short ? m.measure : b.sum, col = b.full ? C.green : b.over ? C.red : C.muted;
        if (b.full) d.rect(mx + 2, S.top - gap * 1.6, mw - 4, gap * 7.2, k.alpha(C.green, 0.07));
        const list = []; let on = MT.R(0);
        b.notes.forEach(() => { const it = items[idx], v = durs[idx]; list.push({ it, on, end: on.add(v), abs: at0.add(on) }); on = on.add(v); idx++; });
        const groups = beamGroups(list, m.beat.val >= 0.25 ? m.beat : m.measure), inGroup = new Set(groups.flat());
        list.forEach(n => { const x = mx + gap * 1.6 + (mw - gap * 3) * (n.on.val / len.val), playing = el !== null && el >= n.abs.val && el < n.abs.add(n.end.sub(n.on)).val;
          n.h = drawItem(mk, c, S, x, n.it, playing ? C.amber : n.it.rest ? C.muted : C.text, { beamed: inGroup.has(n) }); });
        groups.forEach(gr => S.beam(gr.map(n => n.h), FLAGS[gr[0].it.kind]));
        at0 = at0.add(b.sum);
        if (b.notes.length || bi === 0) { const t = b.full ? `${frT(b.sum)} full` : b.over ? `${frT(b.over)} over` : `${frT(b.sum)} of ${frT(m.measure)}`;
          d.text(t, mx + mw / 2, S.bottom + gap * 3.4, { font: `600 ${phone ? 11 : 13}px ${F.mono}`, color: col, align: "center" }); }
        S.bar(mx + mw, "single", b.full ? C.green : C.pink);
      }
    }
    const last = bars[bars.length - 1], full = bars.filter(b => b.full).length, over = bars.filter(b => b.over).length;
    const need = last && last.short ? last.short : null, fit = need ? singleValue(need) : null;
    k.setRO(`<div><h2>Fill the bar</h2><div class="ro-big"><span class="ts"><span>${m.top}</span><span>${m.bottom}</span></span> measure = ${frH(m.measure, "c3")}</div></div>
<div class="ro-rows"><div class="row"><span class="v c5">${full}</span><span class="lbl">full measure${full === 1 ? "" : "s"}</span></div>
${over ? `<div class="row"><span class="v" style="color:var(--red)">${over}</span><span class="lbl">over: a note crosses the bar line (split and tie it)</span></div>` : ""}
<div class="row"><span class="v c1">${need ? frT(need) : frT(m.measure)}</span><span class="lbl">${need ? "still needed in this measure" + (fit ? ", e.g. one " + valueName(fit) : "") : "left in the next measure"}</span></div></div>
<p class="narr">Add values with the buttons (tick Dotted or Rest first). Each measure must add up to exactly ${frT(m.measure)}.</p>`);
  }

  function drawClassify(){
    const q = quiz.q, phone = c.w < 520, gap = phone ? 13 : 16, sw = Math.min(c.w - 40, 300), x0 = (c.w - sw) / 2, top = Math.max(96, c.h * 0.26);
    const S = mk.staff(c, { x: x0, y: top, w: sw, gap }); S.lines(); const cw = S.clef();
    const A = quiz.answered, m = MT.meter(sigOf(q.sig));
    if (q.type === "sig") tsig(S, x0 + cw + (sw - cw) / 2, q.sig, A ? (A.ok ? C.green : C.red) : C.text);
    else d.text(A ? `${m.beats} beats` : "?", x0 + cw + (sw - cw) / 2, S.y(4), { font: `600 ${Math.round(gap * 1.6)}px ${F.math}`, color: A ? C.cyan : C.muted, align: "center", base: "middle" });
    // accent pattern of the heard or shown meter, after answering (and while it sounds)
    const pos = play && play.what === "hear" ? sch.pos : -1, by = S.bottom + gap * 3;
    if (A || pos >= 0) { const n = 2 * m.beats, bw = Math.min(46, (c.w - 40) / n), bx = (c.w - n * bw) / 2, cur = pos >= 0 ? Math.floor(pos / 0.5) % n : -1;
      for (let i = 0; i < n; i++) { const b = i % m.beats, hh = 50 * strength(b, m.beats), col = b === 0 ? C.cyan : C.amber;
        if (A) d.rect(bx + i * bw + 3, by + 54 - hh, bw - 6, hh, k.alpha(col, i === cur ? 0.95 : 0.4));
        else d.circle(bx + i * bw + bw / 2, by + 30, i === cur ? 8 : 4, i === cur ? C.amber : C.line2);
        if (b === 0 && i) d.line(bx + i * bw, by, bx + i * bw, by + 60, C.pink, 1.5); } }
    const sg = sigOf(q.sig), [tp, bt] = sg.split("/");
    const expl = `${q.sig === "C" ? "C = 4/4. " : q.sig === "¢" ? "Cut time = 2/2. " : ""}${m.beats} ${UNIT[bt]}-note beats per measure: simple ${m.group}, measure ${frT(m.measure)}.`;
    k.setRO(`<div><h2>${q.type === "sig" ? "Classify the signature" : "Classify what you hear"}</h2><div class="ro-big">${A ? `<span class="num ${A.ok ? "c5" : ""}" ${A.ok ? "" : 'style="color:var(--red)"'}>${A.ok ? "Right" : "Not quite"}</span>` : `<span class="num c1">${q.type === "sig" ? "duple, triple or quadruple?" : "press Hear it"}</span>`}</div></div>
<div class="ro-rows"><div class="row"><span class="v c5">${quiz.right} / ${quiz.asked}</span><span class="lbl">score</span></div>
${A ? `<div class="row"><span class="v c2">simple ${m.group}</span><span class="lbl">${q.type === "sig" ? expl : `downbeat every ${m.beats} clicks`}</span></div>` : ""}</div>
<p class="narr">${q.type === "sig" ? "Read the top number as beats, the bottom as the beat unit." : "Listen for the higher click: count the beats from one downbeat to the next."} Then press Next.</p>`);
  }

  k.loop(() => { c.begin(); if (play && !sch.on) play = null; bStart.textContent = sch.on && mode === "meter" ? "Stop" : "Start";
    if (mode === "meter") drawMeter(); else if (mode === "fill") drawFill(); else drawClassify(); });
  return mk.cleanup;
};
})();
