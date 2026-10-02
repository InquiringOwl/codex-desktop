/* ============ Labs: English · Parallelism (aligner + famous patterns in columns) ============
   Word counts for isocolon come from E.logic["eng-style"].count, looked up at run time (after every lab file has loaded). */
(function(){
const L = window.LABS, E = window.EngLab, esc = E.esc;

const FORMS = { np: "noun phrase", ger: "gerund phrase", inf: "infinitive phrase", vp: "verb phrase", past: "past-tense verb phrase", adj: "adjective", cl: "clause", thatcl: "that-clause" };
const V = (frame, ...m) => ({ frame, m });
// each item: the faulty sentence, three rewrites (one parallel), corr = correlative words to mark
const ITEMS = [
  { label: "I like hiking, swimming, and to ride", bad: V("I like _, _, and _.", ["hiking", "ger"], ["swimming", "ger"], ["to ride my bike", "inf"]),
    opts: [V("I like _, _, and _.", ["to hike", "inf"], ["swimming", "ger"], ["riding my bike", "ger"]), V("I like _, _, and _.", ["hiking", "ger"], ["swimming", "ger"], ["riding my bike", "ger"]), "bad"], ans: 1,
    why: "Two gerunds set the pattern, so the third item becomes a gerund too: hiking, swimming, and riding." },
  { label: "Patience, attention, and that you…", bad: V("The job requires _, _, and _.", ["patience", "np"], ["attention to detail", "np"], ["that you be able to lift 50 pounds", "thatcl"]),
    opts: [V("The job requires _, _, and _.", ["patience", "np"], ["attention to detail", "np"], ["the ability to lift 50 pounds", "np"]), "bad", V("The job requires _, _, and _.", ["being patient", "ger"], ["attention to detail", "np"], ["the ability to lift 50 pounds", "np"])], ans: 0,
    why: "Requires takes three objects; make all three noun phrases. The ability to lift 50 pounds is a noun phrase with an infinitive inside it." },
  { label: "Not only plays the piano but also…", corr: ["not only", "but also"], bad: V("She not only _ but also _.", ["plays the piano", "vp"], ["the violin", "np"]),
    opts: ["bad", V("She not only _ but also _.", ["plays the piano", "vp"], ["the violin is something she plays", "cl"]), V("She plays not only _ but also _.", ["the piano", "np"], ["the violin", "np"])], ans: 2,
    why: "What follows not only must match what follows but also. Move plays in front of the pair, so each correlative introduces a noun phrase." },
  { label: "Thorough, accurate, and it was…", bad: V("The report was _, _, and _.", ["thorough", "adj"], ["accurate", "adj"], ["it was delivered on time", "cl"]),
    opts: [V("The report was _, _, and _.", ["thorough", "adj"], ["accurate", "adj"], ["it arrived on time", "cl"]), V("The report was _, _, and _.", ["thorough", "adj"], ["accurate", "adj"], ["punctual", "adj"]), "bad"], ans: 1,
    why: "A series of subject complements after was: three adjectives. A clause cannot be the third item of a series of adjectives." },
  { label: "Either we leave now or miss…", corr: ["either", "or"], bad: V("Either _ or _.", ["we leave now", "cl"], ["miss the train", "vp"]),
    opts: [V("We either _ or _.", ["leave now", "vp"], ["miss the train", "vp"]), "bad", V("We either _ or _.", ["leave now", "vp"], ["we miss the train", "cl"])], ans: 0,
    why: "Either … or must join matching parts. Put either after the shared subject we, so both correlatives introduce a verb phrase. (Either we leave now or we miss the train also works: two clauses.)" },
  { label: "Writing is harder than to write", bad: V("_ is harder than _.", ["Writing a novel", "ger"], ["to write a short story", "inf"]),
    opts: [V("_ is harder than _.", ["To write a novel", "inf"], ["writing a short story", "ger"]), "bad", V("_ is harder than _.", ["Writing a novel", "ger"], ["writing a short story", "ger"])], ans: 2,
    why: "A comparison with than sets two things side by side, so they take the same form: writing … than writing." },
  { label: "To lower, improving, and that…", bad: V("The candidate promised _, _, and _.", ["to lower taxes", "inf"], ["improving schools", "ger"], ["that she would fix the roads", "thatcl"]),
    opts: ["bad", V("The candidate promised to _, _, and _.", ["lower taxes", "vp"], ["improve schools", "vp"], ["fix the roads", "vp"]), V("The candidate promised _, _, and _.", ["to lower taxes", "inf"], ["improve schools", "vp"], ["that she would fix the roads", "thatcl"])], ans: 1,
    why: "Three promises, three infinitives. The to can be stated once before the series (to lower, improve, and fix) or repeated before each item, but not dropped from some and kept on others." },
  { label: "Résumé: Managed / Budget planning", bad: V("Duties: _; _; _.", ["Managed a team", "past"], ["Budget planning", "np"], ["Trained new hires", "past"]),
    opts: [V("Duties: _; _; _.", ["Managing a team", "ger"], ["Planned budgets", "past"], ["Training new hires", "ger"]), "bad", V("Duties: _; _; _.", ["Managed a team", "past"], ["Planned budgets", "past"], ["Trained new hires", "past"])], ans: 2,
    why: "Items in a list, a set of headings or résumé bullets should share one form. Past-tense verbs are the convention for past jobs." },
  { label: "To read, to write, and that we…", bad: V("We were taught _, _, and _.", ["to read critically", "inf"], ["to write clearly", "inf"], ["that we should cite sources", "thatcl"]),
    opts: [V("We were taught _, _, and _.", ["to read critically", "inf"], ["writing clearly", "ger"], ["to cite sources", "inf"]), V("We were taught _, _, and _.", ["to read critically", "inf"], ["to write clearly", "inf"], ["to cite sources", "inf"]), "bad"], ans: 1,
    why: "Finish the series the way it began: to read, to write, to cite. Repeating to before each item keeps the items distinct." },
  { label: "Said that… and they deserved", bad: V("The coach said _ and _.", ["that they had trained hard", "thatcl"], ["they deserved a rest", "cl"]),
    opts: [V("The coach said _ and _.", ["that they had trained hard", "thatcl"], ["deserving a rest", "ger"]), "bad", V("The coach said _ and _.", ["that they had trained hard", "thatcl"], ["that they deserved a rest", "thatcl"])], ans: 2,
    why: "Repeat the function word. Without the second that, a reader can take they deserved a rest as the writer’s own statement rather than part of what the coach said." }
];

// famous patterns: rows of cells [text, role]; r = repeated in every row, a = first term, b = its opposite
const PATTERNS = [
  { label: "Dickens: it was the best of times…", src: "A Tale of Two Cities (1859)", anti: true, rows: [
    [["It was the", "r"], ["best", "a"], ["of", "r"], ["times", "a"]], [["it was the", "r"], ["worst", "b"], ["of", "r"], ["times", "b"]],
    [["it was the", "r"], ["age", "a"], ["of", "r"], ["wisdom", "a"]], [["it was the", "r"], ["age", "b"], ["of", "r"], ["foolishness", "b"]],
    [["it was the", "r"], ["epoch", "a"], ["of", "r"], ["belief", "a"]], [["it was the", "r"], ["epoch", "b"], ["of", "r"], ["incredulity", "b"]],
    [["it was the", "r"], ["season", "a"], ["of", "r"], ["Light", "a"]], [["it was the", "r"], ["season", "b"], ["of", "r"], ["Darkness", "b"]],
    [["it was the", "r"], ["spring", "a"], ["of", "r"], ["hope", "a"]], [["it was the", "r"], ["winter", "b"], ["of", "r"], ["despair", "b"]]] },
  { label: "Lincoln: with malice toward none…", src: "Second Inaugural Address (1865)", rows: [
    [["With", "r"], ["malice", "a"], ["toward none", "a"]], [["with", "r"], ["charity", "a"], ["for all", "a"]], [["with", "r"], ["firmness", "a"], ["in the right", "a"]]] },
  { label: "Lincoln: to finish… to bind up…", src: "Second Inaugural Address (1865)", rows: [
    [["to", "r"], ["finish", "a"], ["the work we are in", "a"]], [["to", "r"], ["bind up", "a"], ["the nation’s wounds", "a"]], [["to", "r"], ["care for", "a"], ["him who shall have borne the battle", "a"]]] },
  { label: "Lincoln: what we say / what they did", src: "Gettysburg Address (1863)", anti: true, rows: [
    [["what", "r"], ["we", "a"], ["say", "a"], ["here", "r"]], [["what", "r"], ["they", "b"], ["did", "b"], ["here", "r"]]] },
  { label: "Caesar: I came, I saw, I conquered", src: "Julius Caesar (47 BC), in English", rows: [
    [["I", "r"], ["came", "a"]], [["I", "r"], ["saw", "a"]], [["I", "r"], ["conquered", "a"]]] }
];

const words = s => { const st = E.logic["eng-style"]; return st && st.count ? st.count(s) : s.trim().split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length; };
const logic = E.logic["eng-parallelism"] = {
  FORMS, items: ITEMS, patterns: PATTERNS,
  option: (it, o) => it.opts[o] === "bad" ? it.bad : it.opts[o],
  fill(v){ let i = 0; return v.frame.replace(/_/g, () => v.m[i++][0]); },
  parallel: v => v.m.every(x => x[1] === v.m[0][1]),
  // the form most members share, and the members that break it
  majority(v){ const c = {}; v.m.forEach(x => c[x[1]] = (c[x[1]] || 0) + 1); return Object.keys(c).sort((a, b) => c[b] - c[a] || v.m.findIndex(x => x[1] === a) - v.m.findIndex(x => x[1] === b))[0]; },
  odd(v){ const f = logic.majority(v); return v.m.map((x, i) => x[1] === f ? -1 : i).filter(i => i >= 0); },
  rowText: row => row.map(c => c[0]).join(" "),
  devices(p){
    const R = p.rows, n = R.length, out = [];
    const same = col => R.every(r => r[col] && r[col][0].toLowerCase() === R[0][col][0].toLowerCase());
    if (n >= 2 && same(0)) out.push("anaphora");
    if (n >= 2 && R.every(r => r.length === R[0].length) && same(R[0].length - 1)) out.push("epistrophe");
    if (p.anti) out.push("antithesis");
    if (n === 3) out.push("tricolon");
    const lens = R.map(r => words(logic.rowText(r)));
    if (n >= 2 && lens.every(l => l === lens[0])) out.push("isocolon");
    return out;
  },
  lengths: p => p.rows.map(r => words(logic.rowText(r)))
};

/* ---------- the lab ---------- */
const DEV = { anaphora: "Anaphora: the same word(s) open each member.", epistrophe: "Epistrophe: the same word(s) close each member.",
  antithesis: "Antithesis: opposites set in matching structures.", tricolon: "Tricolon: a series of three parallel members.", isocolon: "Isocolon: members of equal length." };
E.css("css-eng-parallel", `.epar .epar-stack{display:grid;grid-template-columns:auto 1fr;gap:6px 12px;margin:14px 0 4px;align-items:baseline;font-size:16px}
.epar .epar-f{font-family:var(--mono);font-size:11px;letter-spacing:.04em;text-transform:uppercase;padding:2px 6px;border:1px solid currentColor;border-radius:3px;white-space:nowrap;justify-self:start}
.epar .epar-m{font-family:var(--serif, "STIX Two Text", Georgia, serif)}
.epar .epar-grid{display:grid;gap:6px 12px;margin:14px 0;font-size:18px;align-items:baseline;overflow-x:auto}
.epar .epar-grid span{white-space:nowrap} .epar .epar-r{opacity:.95}
.epar .epar-len{font-family:var(--mono);font-size:11px;color:var(--muted)}
.epar .pos-quiz button{text-align:left;white-space:normal;max-width:100%}
@media (max-width:560px){.epar .epar-stack{grid-template-columns:1fr;gap:2px}.epar .epar-stack .epar-m{margin-bottom:6px}.epar .epar-grid{font-size:15px;gap:4px 8px}}`);

L["eng-parallelism"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "epar");
  let mode = "al", sel = 0, pick = null, pi = 0;

  // a sentence with members coloured: col(i) gives the colour of member i; correlatives in c4
  function sentence(v, col, corr){
    let i = 0;
    const markCorr = t => { let h = esc(t); (corr || []).forEach(w => { h = h.replace(new RegExp(`\\b(${w})\\b`, "i"), `<span class="c4" style="font-weight:600">$1</span>`); }); return h; };
    return v.frame.split("_").map((part, j, arr) => markCorr(part) + (j < arr.length - 1 ? `<span class="${col(i)}" style="font-weight:600">${esc(v.m[i++][0])}</span>` : "")).join("");
  }
  const stack = (v, col) => `<div class="epar-stack">${v.m.map((x, i) => `<span class="epar-f ${col(i)}">${FORMS[x[1]]}</span><span class="epar-m ${col(i)}">${esc(x[0])}</span>`).join("")}</div>`;
  function drawAl(){
    const it = ITEMS[sel], done = pick != null, right = done && pick === it.ans;
    const show = done ? logic.option(it, it.ans) : it.bad, odd = new Set(logic.odd(it.bad));
    const col = done ? () => "c5" : i => odd.has(i) ? "c3" : "c2";
    dom.innerHTML = `<div class="pos-src">${done ? "Parallel version" : "Faulty: one item breaks the pattern"}</div>
      <div class="pos-text"><p>${sentence(show, col, it.corr)}</p></div>${stack(show, col)}
      <div class="pos-quiz">${it.opts.map((o, j) => `<button type="button" data-v="${j}" class="${done ? (j === it.ans ? "right" : j === pick ? "wrong" : "") : ""}">${o === "bad" ? "Leave it as it is" : esc(logic.fill(o))}</button>`).join("")}</div>`;
    const maj = logic.majority(it.bad);
    k.setRO(E.ro({ title: "Aligner", big: done ? `all ${FORMS[logic.majority(show)]}s` : `${FORMS[maj]} ≠ ${FORMS[it.bad.m[[...odd][0]][1]]}`,
      rows: [{ label: "Pattern", value: FORMS[maj], c: "c2", note: `${it.bad.m.length - odd.size} of ${it.bad.m.length} items` }, { label: "Breaks it", value: [...odd].map(i => esc(it.bad.m[i][0])).join(", "), c: "c3" },
        ...(it.corr ? [{ label: "Correlative pair", value: it.corr.join(" … "), c: "c4", note: "each half must introduce the same form" }] : [])],
      landmark: done ? { big: right ? "Parallel" : "Not that one", note: esc(it.why), hit: right } : { big: "Choose the rewrite", note: "Pick the version in which every member of the series or pair has the same grammatical form." },
      narr: "Items joined by and, or, but, a correlative pair or than should be grammatically equal: noun with noun, gerund with gerund, clause with clause." }));
  }
  function drawCol(){
    const p = PATTERNS[pi], ncol = Math.max(...p.rows.map(r => r.length)), lens = logic.lengths(p), dev = logic.devices(p);
    const C = { r: "c1", a: "c2", b: "c5" };
    const grid = p.rows.map((r, j) => r.map(c => `<span class="${C[c[1]]}${c[1] === "r" ? " epar-r" : ""}">${esc(c[0])}</span>`).join("") + `<span class="epar-len">${lens[j]}</span>`).join("");
    dom.innerHTML = `<div class="pos-src">${esc(p.src)}: the repeated words line up in columns</div>
      <div class="epar-grid" style="grid-template-columns:repeat(${ncol}, auto) 1fr">${grid}</div>`;
    k.setRO(E.ro({ title: "Patterns in columns", big: dev.join(" · "),
      rows: [{ label: "Repeated frame", value: "amber", c: "c1" }, { label: p.anti ? "First term" : "Varying member", value: "cyan", c: "c2" }, ...(p.anti ? [{ label: "Its opposite", value: "green", c: "c5" }] : []),
        { label: "Words per member", value: lens.every(l => l === lens[0]) ? `all ${lens[0]}` : lens.join(" · "), note: lens.every(l => l === lens[0]) ? "equal: isocolon" : "unequal" }],
      landmark: { big: dev.length + " device" + (dev.length === 1 ? "" : "s"), note: dev.map(d => DEV[d]).join(" "), hit: true },
      narr: "Rhetorical parallelism repeats a grammatical frame so that the changing words stand out." }));
  }
  const draw = () => mode === "al" ? drawAl() : drawCol();
  E.on(dom, ".pos-quiz button", el => { if (pick == null) { pick = +el.dataset.v; draw(); } });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "al") { k.select("Sentence", ITEMS.map((s, i) => [i, s.label]), sel, v => { sel = +v; pick = null; draw(); }); k.button("Next", () => { sel = (sel + 1) % ITEMS.length; pick = null; controls(); draw(); }); }
    else k.select("Passage", PATTERNS.map((s, i) => [i, s.label]), pi, v => { pi = +v; draw(); });
  }
  k.modes([["al", "Aligner"], ["col", "Famous patterns"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
