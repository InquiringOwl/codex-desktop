/* ============ Labs: English · Concision & Sentence Variety (trimmer, rhythm chart, name the cut) ============
   Also defines E.logic["eng-style"].count and .sentences, used at run time by eng-parallel (isocolon word counts). */
(function(){
const L = window.LABS, E = window.EngLab, esc = E.esc;

/* ---------- counting ---------- */
const count = s => String(s).trim().split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length;
const sentences = text => (String(text).match(/[^.!?]+[.!?]+[”’)]*/g) || []).map(s => s.trim()).filter(Boolean);
function stats(lens){
  const n = lens.length, mean = lens.reduce((a, b) => a + b, 0) / n, min = Math.min(...lens), max = Math.max(...lens);
  const sd = Math.sqrt(lens.reduce((a, b) => a + (b - mean) ** 2, 0) / n);
  return { n, mean: Math.round(mean * 10) / 10, min, max, range: max - min, sd: Math.round(sd * 10) / 10 };
}

/* ---------- trimmer ---------- */
// segments: [text, type, replacement]; type k = kept, red = redundancy, nom = nominalisation → verb, exp = expletive / empty phrase
const ITEMS = [
  { label: "Due to the fact that the meeting…", segs: [["Due to the fact that", "exp", "Because"], ["the meeting ran long, we", "k"], ["made a decision", "nom", "decided"], ["to postpone the vote", "k"], ["until a later time", "red", ""], [".", "k"]] },
  { label: "In my personal opinion, I think…", segs: [["In my personal opinion,", "exp", ""], ["I think that", "exp", ""], ["the", "k"], ["final", "red", ""], ["outcome of the experiment was", "k"], ["basically", "exp", ""], ["very", "exp", ""], ["successful.", "k"]] },
  { label: "There is a need for the committee…", segs: [["There is a need for the committee to", "exp", "The committee must"], ["conduct an investigation of", "nom", "investigate"], ["the complaints", "k"], ["that have been made", "red", ""], [".", "k"]] },
  { label: "It is important to note that…", segs: [["It is important to note that the", "exp", "The"], ["new policy will", "k"], ["have an effect on", "nom", "affect"], ["each and every", "red", "every"], ["employee.", "k"]] },
  { label: "At this point in time, the…", segs: [["At this point in time,", "exp", ""], ["the university is", "k"], ["in the process of making revisions to", "nom", "revising"], ["its policies.", "k"]] },
  { label: "Past history shows that the end…", segs: [["Past history", "red", "History"], ["shows that the", "k"], ["end result", "red", "result"], ["of", "k"], ["free and open", "red", "open"], ["debate is usually a better decision.", "k"]] },
  { label: "The committee reached a conclusion…", segs: [["The committee", "k"], ["reached a conclusion", "nom", "concluded"], ["that the proposal", "k"], ["was in need of", "nom", "needed"], ["further revision.", "k"]] },
  { label: "There are many students who…", segs: [["There are many students who", "exp", "Many students"], ["really", "exp", ""], ["struggle with statistics in their first year.", "k"]] }
];
const cuts = it => it.segs.map((s, i) => s[1] === "k" ? -1 : i).filter(i => i >= 0);
function revise(it, on){
  const parts = [];
  it.segs.forEach((s, i) => { const t = s[1] !== "k" && on.has(i) ? s[2] : s[0]; if (t) parts.push(t); });
  let out = parts.reduce((a, t) => a + (a && !/^[,.;:!?]/.test(t) ? " " : "") + t, "");
  return out.charAt(0).toUpperCase() + out.slice(1);
}
const TYPES = { red: ["Redundancy", "c2", "says the same thing twice; cut the echo"], nom: ["Nominalisation → verb", "c3", "the action hidden in a noun becomes the verb"], exp: ["Expletive / empty phrase", "c4", "filler that delays or pads; cut or shorten"] };

/* ---------- rhythm ---------- */
const PASSAGES = [
  { label: "Lincoln: Gettysburg (3 sentences)", src: "Gettysburg Address (1863)", text: "We are met on a great battlefield of that war. We have come to dedicate a portion of that field as a final resting place for those who here gave their lives that this nation might live. It is altogether fitting and proper that we should do this." },
  { label: "Dickens: Marley was dead", src: "A Christmas Carol (1843)", text: "MARLEY was dead: to begin with. There is no doubt whatever about that." },
  { label: "A uniform, wordy paragraph", src: "Constructed example", text: "It is a well-known fact that the library is in need of more funding at this point in time. There are many students who are of the opinion that the hours of operation are too short. The decision was made by the board to conduct a review of the budget in the near future. It is important to note that the results of the review will have an effect on every department. There is a possibility that the board will make a recommendation to raise student fees next year." },
  { label: "The same paragraph, revised", src: "Constructed example", text: "The library needs more money. Many students think it closes too early. The board will soon review the budget, and the results will reach every department, perhaps in the form of a proposal to raise student fees next year. Students should speak up now." }
];

/* ---------- name the cut ---------- */
const QUIZ = [
  { s: "We will <b>collaborate together</b> on the report.", a: "red", fix: "We will collaborate on the report.", why: "Collaborate already means work together." },
  { s: "The team <b>conducted an analysis of</b> the data.", a: "nom", fix: "The team analysed the data.", why: "The action, analyse, is buried in the noun analysis; make it the verb. (US spelling: analyzed.)" },
  { s: "<b>There are</b> three reasons <b>that</b> explain the delay.", a: "exp", fix: "Three reasons explain the delay.", why: "Expletive there are plus that: delete both and the real subject comes first." },
  { s: "<b>In order to</b> qualify, apply by May 1.", a: "exp", fix: "To qualify, apply by May 1.", why: "In order adds nothing; to alone says the same." },
  { s: "The results were <b>completely unanimous</b>.", a: "red", fix: "The results were unanimous.", why: "Unanimous is absolute: it cannot be partly so." },
  { s: "We <b>gave consideration to</b> every proposal.", a: "nom", fix: "We considered every proposal.", why: "Gave consideration to is a weak verb plus a nominalisation; considered is the action itself." },
  { s: "She left early <b>due to the fact that</b> she was ill.", a: "exp", fix: "She left early because she was ill.", why: "A five-word empty phrase for because." },
  { s: "Please <b>make a decision</b> by Friday.", a: "nom", fix: "Please decide by Friday.", why: "Make a decision → decide." },
  { s: "The <b>basic fundamentals</b> of the course are simple.", a: "red", fix: "The fundamentals of the course are simple.", why: "Fundamentals are basic by definition." },
  { s: "The <b>implementation</b> of the plan <b>by the staff</b> went well.", a: "nom", fix: "The staff implemented the plan well.", why: "Actor as subject, action as verb: the staff (actor) implemented (action)." },
  { s: "We hold these truths to be self-evident.", a: "ok", fix: "", why: "Nothing to cut: a plain subject (We), a strong verb (hold) and no padding." },
  { s: "<b>There is</b> no doubt whatever about that.", a: "ok", fix: "", why: "Existential there is is the natural way to say that something exists or does not. Dickens uses it for emphasis; No doubt exists about that would be stiffer, not tighter." }
];

const logic = E.logic["eng-style"] = { count, sentences, stats, items: ITEMS, cuts, revise, TYPES, passages: PASSAGES, quiz: QUIZ,
  full: it => revise(it, new Set(cuts(it))),
  lengths: p => sentences(p.text).map(count),
  kinds: [["red", "Redundancy"], ["nom", "Nominalisation"], ["exp", "Expletive / empty"], ["ok", "Fine as is"]] };

/* ---------- the lab ---------- */
E.css("css-eng-style", `.esty .esty-seg{cursor:pointer;border:0;background:none;padding:0 1px;margin:0;font:inherit;color:inherit;border-radius:3px;text-decoration:underline dotted;text-underline-offset:4px}
.esty .esty-seg.c2{color:var(--cyan)} .esty .esty-seg.c3{color:var(--pink)} .esty .esty-seg.c4{color:var(--violet)}
.esty .esty-seg.cut{text-decoration:line-through;text-decoration-style:solid;text-decoration-thickness:2px;opacity:.75}
.esty .esty-seg:focus-visible{outline:2px solid var(--amber)}
.esty .esty-new{font-weight:600;margin-left:3px}
.esty .esty-out{margin-top:10px;font-size:16px}
.esty .esty-bars{display:grid;gap:10px;margin:12px 0}
.esty .esty-row{display:grid;grid-template-columns:28px 1fr;gap:8px;align-items:center}
.esty .esty-k{font-family:var(--mono);font-size:11px;color:var(--muted)}
.esty .esty-track{position:relative;height:22px;border-left:1px solid var(--line-2)}
.esty .esty-bar{height:100%;background:var(--green);opacity:.8;border-radius:0 3px 3px 0;min-width:2px}
.esty .esty-v{position:absolute;top:2px;font-family:var(--mono);font-size:12px;color:var(--text)}
.esty .esty-mean{position:absolute;top:-4px;bottom:-4px;border-left:2px dashed var(--amber)}
.esty .esty-s{grid-column:2;font-size:12.5px;color:var(--muted);line-height:1.35;margin-top:-4px}
.esty .esty-scale{display:flex;justify-content:space-between;margin-left:36px;font-family:var(--mono);font-size:10px;color:var(--faint, var(--muted))}`);

L["eng-style"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "esty");
  let mode = "trim", sel = 0, on = new Set(), pi = 0;
  const quiz = E.quiz({ items: QUIZ, check: (it, v) => it.a === v, render: () => "" });

  function drawTrim(){
    const it = ITEMS[sel], before = count(revise(it, new Set())), now = revise(it, on), n = count(now), all = cuts(it);
    const segs = it.segs.map((s, i) => {
      if (s[1] === "k") return `<span class="c1">${esc(s[0])}</span>`;
      const [name, c] = TYPES[s[1]], cut = on.has(i);
      return `<button type="button" class="esty-seg ${c}${cut ? " cut" : ""}" data-s="${i}" title="${esc(name)}">${esc(s[0])}</button>${cut && s[2] ? `<span class="esty-new ${c}">${esc(s[2])}</span>` : ""}`;
    }).join(" ").replace(/ <span class="c1">([,.])/g, `<span class="c1">$1`);
    dom.innerHTML = `<div class="pos-src">Click a coloured phrase to cut or replace it</div>
      <div class="pos-text"><p>${segs}</p></div>
      <div class="esty-out"><span class="pos-src">Result</span><p>${esc(now)}</p></div>`;
    const by = t => all.filter(i => it.segs[i][1] === t);
    k.setRO(E.ro({ title: "Trimmer", big: `${before} → ${n} words`,
      rows: Object.keys(TYPES).filter(t => by(t).length).map(t => ({ label: TYPES[t][0], value: `${by(t).filter(i => on.has(i)).length} / ${by(t).length}`, c: TYPES[t][1], note: TYPES[t][2] })),
      landmark: on.size === all.length ? { big: `−${Math.round((before - n) / before * 100)}%`, note: "Every cut made. Read the result aloud: the meaning is the same, with fewer words and the action in the verb.", hit: true }
        : { big: `${all.length - on.size} cut${all.length - on.size === 1 ? "" : "s"} left`, note: "Each cut works on its own; the sentence stays grammatical at every step.", hit: false },
      narr: "Concise is not the same as short: cut words that repeat, pad or hide the action, never words that carry meaning." }));
  }
  function drawRhythm(){
    const p = PASSAGES[pi], ss = sentences(p.text), lens = ss.map(count), st = stats(lens), scale = Math.max(30, st.max);
    const bars = ss.map((s, i) => `<div class="esty-row"><span class="esty-k">S${i + 1}</span><div class="esty-track">
      <div class="esty-bar" style="width:${(lens[i] / scale * 100).toFixed(1)}%"></div><span class="esty-v" style="left:calc(${(lens[i] / scale * 100).toFixed(1)}% + 6px)">${lens[i]}</span>
      <span class="esty-mean" style="left:${(st.mean / scale * 100).toFixed(1)}%"></span></div><div class="esty-s">${esc(s)}</div></div>`).join("");
    dom.innerHTML = `<div class="pos-src">${esc(p.src)}: words per sentence (dashed line = average)</div>
      <div class="esty-bars">${bars}</div><div class="esty-scale"><span>0</span><span>${Math.round(scale / 2)}</span><span>${scale} words</span></div>`;
    const varied = st.range >= 10;
    k.setRO(E.ro({ title: "Rhythm chart", big: `avg ${st.mean} words`,
      rows: [{ label: "Sentences", value: st.n }, { label: "Shortest", value: st.min, c: "c5" }, { label: "Longest", value: st.max, c: "c5" }, { label: "Range", value: st.range, c: "c5" }, { label: "Spread (SD)", value: st.sd }],
      landmark: { big: varied ? "Varied" : "Uniform", note: varied ? "Short sentences give emphasis; a long one gathers detail. The contrast keeps a reader’s attention." : "Every sentence about the same length: the rhythm drones, and nothing stands out.", hit: varied },
      narr: "Vary length and openings, but let the content decide: a short sentence after long ones lands hardest." }));
  }
  function drawQuiz(){
    const it = quiz.item, st = quiz.state;
    dom.innerHTML = `<div class="pos-src">What should be cut? (${quiz.index + 1} of ${quiz.total})</div>
      <div class="pos-text"><p>${it.s}</p></div>
      <div class="pos-quiz">${logic.kinds.map(([v, t]) => `<button type="button" data-v="${v}" class="${st.answered ? (v === it.a ? "right" : v === st.picked ? "wrong" : "") : ""}">${t}</button>`).join("")}</div>
      ${st.answered && it.fix ? `<div class="esty-out"><span class="pos-src">Revised</span><p class="c5">${esc(it.fix)}</p></div>` : ""}`;
    k.setRO(E.ro({ title: "Name the cut", big: `${quiz.score.right} / ${quiz.score.tries}`,
      rows: Object.keys(TYPES).map(t => ({ label: TYPES[t][0], value: "", c: TYPES[t][1], note: TYPES[t][2] })),
      landmark: st.answered ? { big: st.correct ? "Right" : "Not quite: " + logic.kinds.find(x => x[0] === it.a)[1], note: esc(it.why), hit: st.correct } : { big: "Choose one", note: "Look at the bold words: do they repeat, hide a verb, pad, or earn their place?" },
      narr: "Some there is sentences and some long phrases are the clearest way to say it: cut only what adds nothing." }));
  }
  const draw = () => mode === "trim" ? drawTrim() : mode === "rhythm" ? drawRhythm() : drawQuiz();
  E.on(dom, ".esty-seg", el => { const i = +el.dataset.s; on.has(i) ? on.delete(i) : on.add(i); draw(); });
  E.on(dom, ".pos-quiz button", el => { quiz.pick(el.dataset.v); draw(); });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "trim") {
      k.select("Sentence", ITEMS.map((s, i) => [i, s.label]), sel, v => { sel = +v; on = new Set(); draw(); });
      k.button("Cut all", () => { on = new Set(cuts(ITEMS[sel])); draw(); }); k.button("Restore", () => { on = new Set(); draw(); }, "btn ghost");
    } else if (mode === "rhythm") k.select("Passage", PASSAGES.map((s, i) => [i, s.label]), pi, v => { pi = +v; draw(); });
    else k.button("Next sentence", () => { quiz.next(); draw(); });
  }
  k.modes([["trim", "Trimmer"], ["rhythm", "Rhythm chart"], ["quiz", "Name the cut"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
