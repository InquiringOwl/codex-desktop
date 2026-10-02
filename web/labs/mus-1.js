/* ============ Labs: Music Fundamentals 1 (pitch and the keyboard, the staff and clefs, sound and the harmonic series) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const show = (el, on) => { const box = el.closest ? (el.closest(".ctl") || el) : el; box.style.display = on ? "" : "none"; };
const sgn = (v, dp) => { const r = Math.abs(v).toFixed(dp); return +r === 0 ? r : (v > 0 ? "+" : "−") + r; };
// Text that stays inside the canvas horizontally.
function label(c, s, x, y, o = {}){ const g = c.g; g.save(); g.font = o.font; const w = g.measureText(s).width; g.restore();
  const al = o.align || "center", x0 = al === "left" ? x : al === "right" ? x - w : x - w / 2, sh = Math.max(0, 4 - x0) - Math.max(0, x0 + w - (c.w - 4));
  return c.d.text(s, x + sh, y, o); }

/* =============== mus-pitch: keyboard, half and whole steps, octaves =============== */
L["mus-pitch"] = k => {
  const { C, F } = k, MT = MusicTheory, mk = MusicKit.attach(k), c = k.canvas(), d = c.d;
  let mode = "kb", sel = 61, start = 64, path = [{ from: 64, to: 65, size: 1, dir: 1 }, { from: 65, to: 67, size: 2, dir: 1 }, { from: 67, to: 69, size: 2, dir: 1 }], ocpc = 0, ocSel = 60;
  const K = mk.keyboard({ lo: 48, hi: 72 });
  const KOw = mk.keyboard({ lo: 36, hi: 96 }), KOn = mk.keyboard({ lo: 48, hi: 84 });
  const KO = () => (c.w >= 620 ? KOw : KOn);
  const nm = (m, prefer = 1) => MT.name(MT.fromMidi(m, prefer));
  const spell = m => MT.spellings(m).map(s => MT.name(s));
  const cur = () => (path.length ? path[path.length - 1].to : start);
  k.modes([["kb", "Keyboard"], ["steps", "Steps"], ["oct", "Octaves"]], mode, m => { mode = m; sync(); });
  const bPlay = k.button("Play", () => mk.play(sel));
  const hop = (dir, size) => { const from = cur(), to = from + dir * size; if (to < K.lo || to > K.hi) return; path.push({ from, to, size, dir });
    if (path.length > 8) { start = path[0].to; path.shift(); } mk.play(to); };
  const bDW = k.button("− W", () => hop(-1, 2), "btn ghost"), bDH = k.button("− H", () => hop(-1, 1), "btn ghost");
  const bUH = k.button("+ H", () => hop(1, 1)), bUW = k.button("+ W", () => hop(1, 2));
  const bPath = k.button("Play path", () => mk.seq([start, ...path.map(p => p.to)].map(m => [m, 0.42])), "btn ghost");
  const bClr = k.button("Clear", () => { path = []; }, "btn ghost");
  const bOct = k.button("Play octaves", () => { const KK = KO(), list = []; for (let m = KK.lo; m <= KK.hi; m++) if (((m % 12) + 12) % 12 === ocpc) list.push(m); mk.seq(list.map(m => [m, 0.4])); });
  function sync(){ show(bPlay, mode === "kb"); [bDW, bDH, bUH, bUW, bPath, bClr].forEach(b => show(b, mode === "steps")); show(bOct, mode === "oct"); }
  sync();
  let geo = null;
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e), KK = mode === "oct" ? KO() : K, m = KK.hit(p.x, p.y); if (m === null) return;
    if (mode === "kb") sel = m; else if (mode === "steps") { start = m; path = []; } else { ocpc = ((m % 12) + 12) % 12; ocSel = m; }
    mk.play(m); });

  k.loop(() => {
    c.begin();
    const kh = clamp(c.h * 0.45, 90, 200), ky = c.h - kh - 14, kx = 12, kw = c.w - 24, top = 52;
    const big = Math.round(clamp(c.w / 9, 30, 54));
    if (mode === "kb") {
      const sp = spell(sel), main = nm(sel), others = sp.filter(s => s !== main);
      geo = K.draw(c, kx, ky, kw, kh, { marks: { [sel]: C.amber } });
      const cx = c.w / 2, y1 = top + (ky - top) * 0.38;
      d.text(main, cx, y1, { font: `600 ${big}px ${F.math}`, color: C.amber, align: "center", base: "middle" });
      if (others.length) label(c, "= " + others.join(" = "), cx, y1 + big * 0.85, { font: `500 ${Math.round(big * 0.5)}px ${F.math}`, color: C.cyan, align: "center", base: "middle" });
      label(c, `MIDI ${sel} · pitch class ${sel % 12} · ${MT.freq(sel).toFixed(2)} Hz`, cx, y1 + big * 1.55, { font: `12px ${F.mono}`, color: C.muted, align: "center", base: "middle" });
      const x = K.center(sel); d.arrow(x, ky - 18, x, ky - 3, C.amber, 2);
      const sH = sp.length > 1 ? `= ${sp.slice(1).map(s => mk.nameH(s, "c2")).join(" = ")}` : "";
      k.setRO(`<div><h2>Selected key</h2><div class="ro-big">${mk.nameH(main, "c1")} <span style="font-size:.6em">${sH}</span></div></div>
<div class="ro-rows"><div class="row">Key colour <span class="v">${K.isBlack(sel) ? "black" : "white"}</span></div>
<div class="row">MIDI number <span class="v c1">${sel}</span><span class="lbl">12(octave + 1) + letter + accidental</span></div>
<div class="row">Pitch class <span class="v c5">${sel % 12}</span><span class="lbl">${sel} mod 12</span></div>
<div class="row">Frequency <span class="v">${MT.freq(sel).toFixed(2)} Hz</span></div></div>
<p class="narr">Click any key. Black keys have a sharp name and a flat name; white keys B, C, E and F also have sharp or flat spellings (B♯ = C, F♭ = E).</p>`);
    } else if (mode === "steps") {
      const marks = { [start]: C.amber };
      path.forEach(p => { marks[p.to] = p.size === 1 ? C.pink : C.violet; });
      marks[cur()] = C.amber;
      K.draw(c, kx, ky, kw, kh, { marks });
      const names = [start, ...path.map(p => p.to)].map((m, i) => nm(m, i && path[i - 1].dir < 0 ? -1 : 1));
      const net = cur() - start;
      label(c, names.join(" → "), c.w / 2, top + 14, { font: `600 ${c.w < 480 ? 13 : 16}px ${F.math}`, color: C.text, align: "center", base: "middle" });
      label(c, path.length ? `net ${net >= 0 ? "+" : "−"}${Math.abs(net)} half step${Math.abs(net) === 1 ? "" : "s"}` : "Press + H or + W", c.w / 2, top + 36, { font: `12px ${F.mono}`, color: C.muted, align: "center", base: "middle" });
      const n = path.length, y0 = top + 56, rowH = n ? Math.min(26, (ky - 10 - y0) / n) : 0;
      path.forEach((p, i) => { const col = p.size === 1 ? C.pink : C.violet, y = y0 + (i + 0.7) * rowH, x1 = K.center(p.from), x2 = K.center(p.to);
        d.line(x1, y, x1, ky, k.alpha(col, 0.25), 1, [3, 3]);
        d.arrow(x1, y, x2, y, col, 2.2);
        d.text(p.size === 1 ? "H" : "W", (x1 + x2) / 2, y - 4, { font: `700 ${Math.round(clamp(rowH * 0.55, 10, 13))}px ${F.mono}`, color: col, align: "center" }); });
      const nH = path.filter(p => p.size === 1).length, nW = path.length - nH;
      k.setRO(`<div><h2>Steps from ${mk.nameH(nm(start), "c1")}</h2><div class="ro-big">${mk.nameH(nm(cur(), path.length && path[path.length - 1].dir < 0 ? -1 : 1), "c1")} <span style="font-size:.6em">(${net >= 0 ? "+" : "−"}${Math.abs(net)})</span></div></div>
<div class="ro-rows"><div class="row">Half steps <span class="v c3">${nH}</span><span class="lbl">H = next key</span></div>
<div class="row">Whole steps <span class="v c4">${nW}</span><span class="lbl">W = 2 half steps</span></div>
<div class="row">Distance <span class="v">${net >= 0 ? "+" : "−"}${Math.abs(net)}</span><span class="lbl">MIDI ${cur()} − ${start}</span></div></div>
<p class="narr">Click a key to start there. Try + W from E or B: the whole step needs a black key (F♯, C♯), because E–F and B–C are already half steps.</p>`);
    } else {
      const KK = KO(), marks = {}, lit = [];
      for (let m = KK.lo; m <= KK.hi; m++) if (((m % 12) + 12) % 12 === ocpc) { marks[m] = C.green; lit.push(m); }
      if (ocSel >= KK.lo && ocSel <= KK.hi && ((ocSel % 12) + 12) % 12 === ocpc) marks[ocSel] = C.amber;
      const kh2 = clamp(c.h * 0.5, 80, 220), ky2 = c.h - kh2 - 34;
      KK.draw(c, kx, ky2, kw, kh2, { marks });
      lit.forEach(m => { const x = KK.center(m); const col = m === ocSel ? C.amber : C.green;
        d.line(x, ky2 - 22, x, ky2 - 2, k.alpha(col, 0.6), 1.5);
        label(c, nm(m), x, ky2 - 28, { font: `600 ${c.w < 480 ? 11 : 13}px ${F.math}`, color: col, align: "center" }); });
      const xc = KK.center(60);
      d.arrow(xc, ky2 + kh2 + 22, xc, ky2 + kh2 + 6, C.green, 2);
      label(c, "middle C", xc + 8, ky2 + kh2 + 22, { font: `600 11px ${F.sans}`, color: C.green, align: "left", base: "middle" });
      const pcName = MT.spellings(ocpc + 60).map(s => MT.name(s, { octave: false })).filter(s => !/𝄪|𝄫/.test(s)).join(" / ");
      label(c, `pitch class ${ocpc}: ${pcName}`, c.w / 2, top + 16, { font: `600 ${c.w < 480 ? 14 : 18}px ${F.math}`, color: C.green, align: "center", base: "middle" });
      label(c, `${lit.length} keys, 12 half steps apart`, c.w / 2, top + 40, { font: `12px ${F.mono}`, color: C.muted, align: "center", base: "middle" });
      const rows = lit.slice(0, 7).map(m => `<div class="row">${mk.nameH(nm(m), m === ocSel ? "c1" : "c5")} <span class="v">${MT.freq(m).toFixed(2)} Hz</span><span class="lbl">MIDI ${m}</span></div>`).join("");
      k.setRO(`<div><h2>Same pitch class</h2><div class="ro-big"><span class="num c5">${pcName}</span> <span style="font-size:.6em">= ${ocpc}</span></div></div>
<div class="ro-rows">${rows}</div>
<p class="narr">Click a key to light every key of its pitch class. The octave number goes up at each C; each octave doubles the frequency.</p>`);
    }
  });
  return mk.cleanup;
};

/* =============== mus-staff: clefs, lines and spaces, ledger lines, grand staff, quiz =============== */
L["mus-staff"] = k => {
  const { C, F } = k, MT = MusicTheory, mk = MusicKit.attach(k), c = k.canvas(), d = c.d, g = c.g;
  const CL = ["treble", "bass", "alto", "tenor"];
  let mode = "read", clef = "treble", pos = 2, acc = 0, names = true, prefer = 1, hist = [60];
  let q = null, score = 0, total = 0, fb = null;
  const rnd = n => Math.floor(Math.random() * n);
  // keyboards that cover each clef's range of positions −6…14
  const KB = {}; CL.forEach(cl => { const lo = MT.midi(MT.fromStaffPos(-6, cl)), hi = MT.midi(MT.fromStaffPos(14, cl)); KB[cl] = mk.keyboard({ lo: lo - (lo % 12), hi }); });
  const KGw = mk.keyboard({ lo: 36, hi: 84 }), KGn = mk.keyboard({ lo: 43, hi: 81 });
  const KG = () => (c.w >= 560 ? KGw : KGn);
  const pitch = () => { const p = MT.fromStaffPos(pos, clef); p.a = acc; return p; };
  const where = p => { if (p >= 0 && p <= 8) return p % 2 === 0 ? `line ${p / 2 + 1}` : `space ${(p + 1) / 2}`; if (p === -1) return "space below the staff"; if (p === 9) return "space above the staff";
    const n = MT.ledgers(p).length, side = p < 0 ? "below" : "above"; return p % 2 === 0 ? `ledger line ${n} ${side}` : `space ${side} ledger line ${n}`; };
  const kind = p => (p % 2 === 0 ? (p >= 0 && p <= 8 ? "line" : "ledger") : "space");
  const KCOL = { line: () => C.cyan, space: () => C.pink, ledger: () => C.violet };

  k.modes([["read", "Read"], ["grand", "Grand staff"], ["quiz", "Quiz"]], mode, m => { mode = m; sync(); });
  const sClef = k.select("Clef", CL.map(x => [x, x[0].toUpperCase() + x.slice(1)]), clef, v => { clef = v; });
  const bDn = k.button("▼", () => { pos = Math.max(-6, pos - 1); mk.play(MT.midi(pitch())); }, "btn ghost");
  const bUp = k.button("▲", () => { pos = Math.min(14, pos + 1); mk.play(MT.midi(pitch())); }, "btn ghost");
  const sAcc = k.select("Accidental", [["-1", "♭"], ["0", "♮ none"], ["1", "♯"]], "0", v => { acc = +v; });
  const cNames = k.check("Names", true, v => { names = v; });
  const bPlay = k.button("Play", () => mk.play(MT.midi(pitch())));
  const sPref = k.select("Black keys", [["1", "♯"], ["-1", "♭"]], "1", v => { prefer = +v; });
  const qClefSel = k.select("Clef", [["mixed", "Mixed"], ...CL.map(x => [x, x[0].toUpperCase() + x.slice(1)])], "treble", v => { qClef = v; newQ(); });
  let qClef = "treble";
  const bL = "CDEFGAB".split("").map((L0, i) => k.button(L0, () => answer(i), "btn ghost"));
  const bNext = k.button("Next", () => newQ());
  function newQ(){ const cl = qClef === "mixed" ? CL[rnd(4)] : qClef; let p; do { p = rnd(17) - 4; } while (q && q.clef === cl && q.pos === p); q = { clef: cl, pos: p, p: MT.fromStaffPos(p, cl) }; fb = null; }
  function answer(i){ if (!q || fb) return; total++; const ok = i === q.p.l; if (ok) score++; fb = { ok, pick: i }; mk.play(MT.midi(q.p)); }
  newQ();
  function sync(){ [sClef.el, bDn, bUp, sAcc.el, cNames, bPlay].forEach(e => show(e, mode === "read")); show(sPref.el, mode === "grand"); [qClefSel.el, ...bL, bNext].forEach(e => show(e, mode === "quiz")); }
  sync();

  let S = null, SB = null;
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e);
    if (mode === "read") { const K = KB[clef], m = K.hit(p.x, p.y);
      if (m !== null) { const sp = MT.fromMidi(m, acc < 0 ? -1 : 1), np = MT.staffPos(sp, clef); if (np >= -6 && np <= 14) { pos = np; acc = sp.a; sAcc.set(String(acc)); } mk.play(m); return; }
      if (S && p.y > S.y(15) && p.y < S.y(-7)) { pos = clamp(S.pos(p.y), -6, 14); mk.play(MT.midi(pitch())); } }
    else if (mode === "grand") { const m = KG().hit(p.x, p.y); if (m !== null) { hist.push(m); if (hist.length > 6) hist.shift(); mk.play(m); } } });

  // Staff positions are drawn with the kit; this adds the brace for the grand staff.
  const brace = (x, y1, y2, col) => { const ym = (y1 + y2) / 2, w = 7; g.save(); g.strokeStyle = col; g.lineWidth = 2.2; g.beginPath(); g.moveTo(x + w, y1); g.quadraticCurveTo(x, y1, x + 2, (y1 + ym) / 2); g.quadraticCurveTo(x + 3, ym, x - 2, ym); g.quadraticCurveTo(x + 3, ym, x + 2, (ym + y2) / 2); g.quadraticCurveTo(x, y2, x + w, y2); g.stroke(); g.restore(); };
  const nameCols = (S0, cl, x) => { for (let p = 0; p <= 8; p++) { const s = MT.name(MT.fromStaffPos(p, cl)), line = p % 2 === 0;
    d.text(s, line ? x : x - 22, S0.y(p), { font: `600 ${Math.round(clamp(S0.gap * 0.78, 9, 12))}px ${F.mono}`, color: k.alpha(line ? C.cyan : C.pink, 0.85), align: "right", base: "middle" }); } };

  k.loop(() => {
    c.begin();
    const top = 48;
    if (mode === "read") {
      const K = KB[clef], kh = clamp(c.h * 0.2, 60, 100), ky = c.h - kh - 10;
      const gap = clamp((ky - top - 24) / 11.6, 8, 21), sx = 14, sw = c.w - 28, off = Math.max(0, (ky - top - 24 - 11.6 * gap) / 2);
      S = mk.staff(c, { x: sx, y: top + off + 3.6 * gap, w: names ? sw - 46 : sw, gap, clef });
      const p = pitch(), k0 = kind(pos), col = KCOL[k0]();
      if (k0 === "space") { const yA = S.y(pos + 1), yB = S.y(pos - 1); d.rect(sx, Math.min(yA, yB), S.w, Math.abs(yB - yA), k.alpha(C.pink, 0.13)); }
      S.lines();
      if (k0 === "line") d.line(sx, S.y(pos), sx + S.w, S.y(pos), C.cyan, 2.4);
      const cw = S.clef();
      const nx = sx + cw + (sw - cw - (names ? 46 : 0)) / 2;
      // middle C marker in C clefs and outside
      const mc = MT.staffPos("C4", clef);
      d.text("C4", sx + cw + 4, S.y(mc), { font: `600 10px ${F.mono}`, color: C.green, align: "left", base: "middle" });
      if (names) nameCols(S, clef, sx + sw);
      S.note(nx, p, { dur: "whole", color: C.amber, acc: true, ledgerColor: C.violet });
      if (k0 === "ledger") MT.ledgers(pos).forEach(Lp => d.line(nx - gap * 1.1, S.y(Lp), nx + gap * 1.1, S.y(Lp), C.violet, 2));
      label(c, `${MT.name(p)} · ${where(pos)}`, nx, Math.min(S.y(Math.min(-7, pos - 3)), ky - 12), { font: `600 ${c.w < 480 ? 13 : 15}px ${F.math}`, color: C.amber, align: "center", base: "middle" });
      const m = MT.midi(p), marks = { [m]: C.amber }; if (m !== 60) marks[60] = C.green;
      K.draw(c, 12, ky, c.w - 24, kh, { marks });
      const nl = MT.ledgers(pos).length;
      k.setRO(`<div><h2>${clef[0].toUpperCase() + clef.slice(1)} clef</h2><div class="ro-big">${mk.nameH(p, "c1")}</div></div>
<div class="ro-rows"><div class="row">Position <span class="v ${k0 === "line" ? "c2" : k0 === "space" ? "c3" : "c4"}">${pos}</span><span class="lbl">${where(pos)}</span></div>
<div class="row">Ledger lines <span class="v c4">${nl}</span></div>
<div class="row">Reference <span class="v c5">${{ treble: "line 2 = G4", bass: "line 4 = F3", alto: "line 3 = C4", tenor: "line 4 = C4" }[clef]}</span></div>
<div class="row">MIDI <span class="v">${m}</span></div></div>
<p class="narr">Click the staff or use ▲ ▼ to move the note one position (one letter). Click a key to see where it is written. Switch clefs: the same position names a different pitch.</p>`);
    } else if (mode === "grand") {
      const KK = KG(), kh = clamp(c.h * 0.22, 64, 110), ky = c.h - kh - 10;
      const gap = clamp((ky - top - 20) / 16, 7, 19), sx = 26, sw = c.w - sx - 14;
      const ty = top + 4 * gap + Math.max(0, (ky - top - 20 - 16 * gap) / 2);
      S = mk.staff(c, { x: sx, y: ty, w: sw, gap, clef: "treble" });
      SB = mk.staff(c, { x: sx, y: ty + 6 * gap, w: sw, gap, clef: "bass" });   // bass top line 2 gaps below treble bottom: middle C's ledger is shared
      S.lines(); SB.lines(); d.line(sx, ty, sx, SB.bottom, C.line2, 1.4); brace(sx - 14, ty, SB.bottom, C.text);
      const cw = S.clef(); SB.clef();
      const yC = S.y(-2);
      d.line(sx + cw + 2, yC, sx + sw, yC, k.alpha(C.green, 0.35), 1, [4, 4]);
      label(c, "middle C", sx + sw - 2, yC - 6, { font: `600 10px ${F.sans}`, color: C.green, align: "right" });
      const n = hist.length, x0 = sx + cw + 22, step = (sw - cw - 50) / Math.max(1, 6);
      hist.forEach((m, i) => { const p = MT.fromMidi(m, prefer), last = i === n - 1, col = m === 60 ? C.green : last ? C.amber : k.alpha(C.text, 0.55);
        const St = m >= 60 ? S : SB; St.note(x0 + i * step + gap, p, { dur: "quarter", color: col, acc: true, ledgerColor: m === 60 ? C.green : C.violet }); });
      const marks = {}; hist.forEach(m => marks[m] = C.muted); marks[60] = C.green; const lm = hist[n - 1]; marks[lm] = lm === 60 ? C.green : C.amber;
      KK.draw(c, 12, ky, c.w - 24, kh, { marks });
      const lp = MT.fromMidi(lm, prefer), onT = lm >= 60, sp = MT.staffPos(lp, onT ? "treble" : "bass");
      k.setRO(`<div><h2>Grand staff</h2><div class="ro-big">${mk.nameH(lp, lm === 60 ? "c5" : "c1")}</div></div>
<div class="ro-rows"><div class="row">Staff <span class="v">${onT ? "treble (right hand)" : "bass (left hand)"}</span></div>
<div class="row">Position <span class="v">${where(sp)}</span></div>
<div class="row">Ledger lines <span class="v c4">${MT.ledgers(sp).length}</span></div></div>
<p class="narr">Click keys. Notes from middle C up go on the treble staff, notes below it on the bass staff. Middle C's ledger line sits between the staves, one line below the treble and one above the bass.</p>`);
    } else {
      const gap = clamp((c.h - top - 90) / 12, 9, 22), sw = Math.min(c.w - 28, 520), sx = (c.w - sw) / 2;
      S = mk.staff(c, { x: sx, y: top + 5 * gap, w: sw, gap, clef: q.clef });
      S.lines(); const cw = S.clef(); const nx = sx + cw + (sw - cw) / 2;
      S.note(nx, q.p, { dur: "whole", color: C.amber, ledgerColor: C.violet });
      label(c, q.clef + " clef", sx, top + 5 * gap - gap * 2.6, { font: `600 12px ${F.sans}`, color: C.muted, align: "left" });
      if (fb) label(c, fb.ok ? `${MT.name(q.p)}  ✓` : `${MT.name(q.p)}  (not ${"CDEFGAB"[fb.pick]})`, nx, S.y(Math.min(-6, q.pos - 4)), { font: `600 ${c.w < 480 ? 15 : 18}px ${F.math}`, color: fb.ok ? C.green : C.pink, align: "center", base: "middle" });
      k.setRO(`<div><h2>Name the note</h2><div class="ro-big"><span class="num c5">${score}</span> / ${total}</div></div>
<div class="ro-rows"><div class="row">Clef <span class="v">${q.clef}</span></div>
<div class="row">Answer <span class="v ${fb ? (fb.ok ? "c5" : "c3") : ""}">${fb ? MT.name(q.p) + " · " + where(q.pos) : "?"}</span></div></div>
<p class="narr">Press the letter of the note, then Next. Find the clef's reference line first and count steps from it.</p>`);
    }
  });
  return mk.cleanup;
};

/* =============== mus-sound: frequency, period, amplitude; the harmonic series =============== */
L["mus-sound"] = k => {
  const { C, F } = k, MT = MusicTheory, mk = MusicKit.attach(k), c = k.canvas(), d = c.d, g = c.g;
  let mode = "wave", s = 4800, A = 0.7, oct = false, f0p = "A2", on = [1, 1, 1, 1, 1, 1, 1, 1].map(Boolean), selN = 7;
  const fOf = v => 27.5 * Math.pow(2, v / 1200);
  const near = f => { const r = MT.nearest(f); return { name: MT.name(MT.fromMidi(r.midi)), cents: r.cents }; };
  // interval of harmonic n above the fundamental (equal-tempered size used for spelling)
  const IV = ["P1", "P8", "P12", "P15", "M17", "P19", "m21", "P22"];
  const IVL = ["unison", "octave", "octave + fifth", "two octaves", "two octaves + major third", "two octaves + fifth", "two octaves + minor seventh", "three octaves"];
  const RAT = { 2: "octave", 3: "perfect fifth", 4: "perfect fourth", 5: "major third", 6: "minor third", 7: "septimal minor third", 8: "septimal whole tone" };
  const hName = n => MT.name(MT.up(f0p, IV[n - 1]));
  const hCents = n => 1200 * Math.log2(n) - 100 * MT.ivSemis(IV[n - 1]);
  const fmtF = f => (f < 100 ? f.toFixed(2) : f < 1000 ? f.toFixed(1) : f.toFixed(0));
  k.modes([["wave", "Wave"], ["harm", "Harmonics"]], mode, m => { mode = m; sync(); });
  const slF = k.slider("Frequency", 0, 8700, 1, s, v => { s = v; }, v => fmtF(fOf(v)) + " Hz");
  const slA = k.slider("Amplitude", 0.1, 1, 0.05, A, v => { A = v; }, v => v.toFixed(2));
  const sPre = k.select("Snap", [["", "…"], ["A0", "A0"], ["C4", "C4 (middle C)"], ["A4", "A4 = 440"], ["A5", "A5"], ["C8", "C8"]], "", v => { if (!v) return; s = Math.round(1200 * Math.log2(MT.freq(v) / 27.5)); slF.set(s); sPre.set(""); });
  const cOct = k.check("Octave 2f", false, v => { oct = v; });
  const bPlay = k.button("Play", () => { const f = fOf(s); mk.play({ f, amp: A }, { type: "sine", dur: 1.1, gain: 0.32 }); if (oct) { mk.play({ f: 2 * f, amp: A }, { type: "sine", dur: 1.1, at: 1.3, gain: 0.32 }); } });
  const sF0 = k.select("Fundamental", [["A2", "A2 (110 Hz)"], ["C2", "C2"], ["E2", "E2"], ["G2", "G2"], ["C3", "C3"]], f0p, v => { f0p = v; });
  const bSum = k.button("Play sum", () => { const f0 = MT.freq(f0p), list = []; on.forEach((o, i) => { if (o) list.push({ f: (i + 1) * f0, amp: 1 / (i + 1) }); }); if (list.length) mk.play(list, { type: "sine", dur: 1.6, gain: 0.4 }); });
  const bEach = k.button("Play each", () => { const f0 = MT.freq(f0p); mk.seq(on.map((o, i) => o ? [{ f: (i + 1) * f0 }, 0.45] : null).filter(Boolean), { type: "sine" }); }, "btn ghost");
  const bAll = k.button("All on", () => { on = on.map(() => true); }, "btn ghost");
  const bOne = k.button("Fundamental only", () => { on = on.map((_, i) => i === 0); selN = 1; }, "btn ghost");
  function sync(){ [slF.el, slA.el, sPre.el, cOct, bPlay].forEach(e => show(e, mode === "wave")); [sF0.el, bSum, bEach, bAll, bOne].forEach(e => show(e, mode === "harm")); }
  sync();
  let bars = [];
  c.cv.addEventListener("pointerdown", e => { if (mode !== "harm") return; const p = c.xy(e);
    for (const b of bars) if (p.x >= b.x && p.x <= b.x + b.w && p.y >= b.y && p.y <= b.y + b.h) { on[b.n - 1] = !on[b.n - 1]; selN = b.n; return; } });

  const wavePath = (fn, x0, x1, y0, col, w, dash) => { g.save(); g.strokeStyle = col; g.lineWidth = w; if (dash) g.setLineDash(dash); g.beginPath(); for (let x = x0; x <= x1; x += 1) { const y = y0 - fn(x); x === x0 ? g.moveTo(x, y) : g.lineTo(x, y); } g.stroke(); g.restore(); };

  k.loop((dt, now) => {
    c.begin();
    const top = 50;
    if (mode === "wave") {
      const f = fOf(s), T = 1 / f;
      const wins = [100, 50, 20, 10, 5, 2, 1]; let win = 1; for (const w of wins) if (f * w / 1000 <= 8) { win = w; break; }
      const px0 = 30, px1 = c.w - 14, py0 = top + 24, py1 = c.h - 40, yc = (py0 + py1) / 2, hh = (py1 - py0) / 2 * 0.9;
      const X = t => px0 + t / (win / 1000) * (px1 - px0);
      d.line(px0, yc, px1, yc, C.line2, 1); d.line(px0, py0, px0, py1, C.line2, 1);
      for (let i = 0; i <= 5; i++) { const t = win / 5 * i, x = X(t / 1000); d.line(x, yc - 3, x, yc + 3, C.muted); label(c, `${+t.toFixed(1)} ms`, x, py1 + 18, { font: `11px ${F.mono}`, color: C.muted, align: i === 0 ? "left" : i === 5 ? "right" : "center" }); }
      g.save(); g.translate(px0 - 12, py1 - 4); g.rotate(-Math.PI / 2); d.text("pressure", 0, 0, { font: `italic 12px ${F.math}`, color: C.muted }); g.restore();
      d.text("t", px1 - 4, yc - 8, { font: `italic 14px ${F.math}`, color: C.muted, align: "right" });
      const ph = x => 2 * Math.PI * f * ((x - px0) / (px1 - px0)) * (win / 1000);
      if (oct) wavePath(x => A * hh * Math.sin(2 * ph(x)), px0, px1, yc, C.violet, 1.6, [5, 4]);
      wavePath(x => A * hh * Math.sin(ph(x)), px0, px1, yc, C.amber, 2.4);
      // one period and the amplitude
      const xT = X(T), yT = yc - hh - 10;
      if (xT - px0 > 6) { d.line(px0, yT, xT, yT, C.cyan, 2); d.line(px0, yT - 5, px0, yT + 5, C.cyan, 2); d.line(xT, yT - 5, xT, yT + 5, C.cyan, 2); d.line(xT, yT, xT, yc, k.alpha(C.cyan, 0.4), 1, [3, 3]);
        label(c, `T = ${(T * 1000).toFixed(T < 0.001 ? 3 : 2)} ms`, Math.max(px0 + 40, xT / 2 + px0 / 2), yT - 6, { font: `600 12px ${F.mono}`, color: C.cyan, align: "left" }); }
      const xA = X(T / 4); d.arrow(xA, yc, xA, yc - A * hh, C.pink, 2); label(c, "A", xA + 8, yc - A * hh / 2, { font: `italic 600 14px ${F.math}`, color: C.pink, align: "left", base: "middle" });
      const nr = near(f), lam = 343 / f;
      label(c, `${fmtF(f)} Hz ≈ ${nr.name} ${sgn(nr.cents, 0)}¢`, c.w - 14, top + 6, { font: `600 ${c.w < 480 ? 13 : 15}px ${F.mono}`, color: C.amber, align: "right" });
      k.setRO(`<div><h2>Pure tone</h2><div class="ro-big"><span class="num c2">${fmtF(f)} Hz</span></div></div>
<div class="ro-rows"><div class="row">Period <span class="v c2">${(T * 1000).toFixed(3)} ms</span><span class="lbl">T = 1/f</span></div>
<div class="row">Nearest note <span class="v c1">${MT.name(MT.fromMidi(MT.nearest(f).midi))}</span><span class="lbl">${sgn(nr.cents, 1)} cents</span></div>
<div class="row">Wavelength in air <span class="v">${lam < 1 ? (lam * 100).toFixed(1) + " cm" : lam.toFixed(2) + " m"}</span><span class="lbl">343 m/s ÷ f</span></div>
<div class="row">Amplitude <span class="v c3">${A.toFixed(2)}</span><span class="lbl">loudness, not pitch</span></div>
${oct ? `<div class="row">Octave 2f <span class="v c4">${fmtF(2 * f)} Hz</span><span class="lbl">period ${(T * 500).toFixed(3)} ms</span></div>` : ""}</div>
<p class="narr">The slider is logarithmic: equal distances are equal ratios, as the ear hears them. Turn on 2f: two cycles fit in every one, an octave higher.</p>`);
    } else {
      const f0 = MT.freq(f0p), wide = c.w >= 600;
      // layout
      let mB, sB, wB;
      if (wide) { const cw = Math.round(c.w * 0.3); mB = { x: 12, y: top + 4, w: cw - 12, h: c.h - top - 14 }; sB = { x: cw + 16, y: top + 4, w: c.w - cw - 28, h: (c.h - top) * 0.55 }; wB = { x: cw + 16, y: sB.y + sB.h + 8, w: sB.w, h: c.h - (sB.y + sB.h + 8) - 10 }; }
      else { const H = c.h - top - 8; mB = { x: 10, y: top + 2, w: c.w - 20, h: H * 0.3 }; sB = { x: 10, y: mB.y + mB.h + 6, w: c.w - 20, h: H * 0.42 }; wB = { x: 10, y: sB.y + sB.h + 6, w: c.w - 20, h: c.h - (sB.y + sB.h + 6) - 8 }; }
      // string modes
      const cols = wide ? 1 : 2, rowsN = 8 / cols, rh = mB.h / rowsN, cwM = mB.w / cols, tt = k.reduce ? 0 : now;
      for (let i = 0; i < 8; i++) { const n = i + 1, cx = mB.x + Math.floor(i / rowsN) * cwM, cy = mB.y + (i % rowsN) * rh + rh / 2, x0 = cx + 22, x1 = cx + cwM - 8, amp = Math.min(rh * 0.36, 14) * Math.cos(2 * Math.PI * 0.5 * n * tt);
        const col = on[i] ? (n === 1 ? C.amber : C.violet) : k.alpha(C.muted, 0.35);
        d.text(String(n), cx + 4, cy, { font: `600 11px ${F.mono}`, color: on[i] ? (n === 1 ? C.amber : C.violet) : C.muted, base: "middle" });
        d.line(x0, cy, x1, cy, k.alpha(C.line2, 0.6), 1);
        wavePath(x => amp * Math.sin(n * Math.PI * (x - x0) / (x1 - x0)), x0, x1, cy, col, on[i] ? 1.8 : 1.2);
        d.circle(x0, cy, 2.5, C.text); d.circle(x1, cy, 2.5, C.text); }
      // spectrum
      bars = []; const slot = sB.w / 8, base = sB.y + sB.h - 30, maxH = base - sB.y - 18, fs = slot < 44 ? 10 : 12;
      d.line(sB.x, base, sB.x + sB.w, base, C.line2, 1);
      for (let n = 1; n <= 8; n++) { const x = sB.x + (n - 1) * slot, bw = Math.min(slot * 0.55, 34), bx = x + (slot - bw) / 2, h = maxH / n, o = on[n - 1];
        const col = n === 1 ? C.amber : C.violet;
        d.rr(bx, base - h, bw, h, 2, o ? k.alpha(col, n === selN ? 0.95 : 0.7) : null, o ? null : k.alpha(C.muted, 0.6), 1);
        if (n === selN) d.rr(bx - 3, base - h - 3, bw + 6, h + 6, 3, null, C.text, 1.2);
        d.text(String(n), x + slot / 2, base - h - 6, { font: `600 ${fs}px ${F.mono}`, color: o ? col : C.muted, align: "center" });
        d.text(hName(n), x + slot / 2, base + 13, { font: `600 ${fs + 1}px ${F.math}`, color: o ? C.text : C.muted, align: "center" });
        const ce = hCents(n); d.text(Math.abs(ce) < 0.05 ? "0¢" : sgn(ce, 0) + "¢", x + slot / 2, base + 26, { font: `${fs}px ${F.mono}`, color: Math.abs(ce) > 10 ? C.pink : C.muted, align: "center" });
        bars.push({ n, x, y: sB.y, w: slot, h: sB.h }); }
      // summed wave, two periods of the fundamental
      const yc = wB.y + 16 + (wB.h - 16) / 2, hh = (wB.h - 16) / 2 - 4, x0 = wB.x + 4, x1 = wB.x + wB.w - 4;
      let mx = 0; const N = 240, sum = t => on.reduce((a, o, i) => a + (o ? Math.sin(2 * Math.PI * (i + 1) * t) / (i + 1) : 0), 0);
      for (let j = 0; j <= N; j++) mx = Math.max(mx, Math.abs(sum(2 * j / N)));
      d.line(x0, yc, x1, yc, k.alpha(C.line2, 0.6), 1);
      const xm = (x0 + x1) / 2; d.line(xm, wB.y + 16, xm, wB.y + wB.h - 2, k.alpha(C.cyan, 0.35), 1, [3, 3]);
      if (on[0]) wavePath(x => hh / Math.max(mx, 1e-9) * Math.sin(2 * Math.PI * 2 * (x - x0) / (x1 - x0)), x0, x1, yc, k.alpha(C.amber, 0.35), 1.2);
      if (mx > 0) wavePath(x => hh / mx * sum(2 * (x - x0) / (x1 - x0)), x0, x1, yc, C.green, 2.2);
      d.text("sum of the partials on, 2 periods", x0 + 2, wB.y + 7, { font: `11px ${F.mono}`, color: C.green, base: "middle" });
      const fn = selN * f0, prev = selN > 1 ? `${selN} : ${selN - 1} ${RAT[selN]}` : "the fundamental";
      const nOn = on.filter(Boolean).length, ce = hCents(selN);
      k.setRO(`<div><h2>Harmonic ${selN} of ${mk.nameH(f0p, "c1")}</h2><div class="ro-big">${mk.nameH(hName(selN), selN === 1 ? "c1" : "c4")} <span style="font-size:.55em">${fmtF(fn)} Hz</span></div></div>
<div class="ro-rows"><div class="row">Frequency <span class="v c2">${selN} × ${fmtF(f0)}</span><span class="lbl">= ${fmtF(fn)} Hz</span></div>
<div class="row">Above the fundamental <span class="v">${IVL[selN - 1]}</span></div>
<div class="row">Versus the piano <span class="v ${Math.abs(ce) > 10 ? "c3" : ""}">${Math.abs(ce) < 0.005 ? "0" : sgn(ce, 2)} ¢</span></div>
<div class="row">From harmonic ${selN - 1 || "–"} <span class="v">${prev}</span></div>
<div class="row">Partials on <span class="v c5">${nOn}</span><span class="lbl">amplitude 1/n</span></div></div>
<p class="narr">Click a bar to switch that partial on or off. The green sum changes shape (timbre) but always repeats with the fundamental's period.</p>`);
    }
  });
  return mk.cleanup;
};
})();
