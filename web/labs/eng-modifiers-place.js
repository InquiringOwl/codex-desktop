/* ============ Labs: English · Misplaced & Dangling Modifiers (modifier mover + dangler detector) ============
   Shares rules with the voice and verbals labs: a dangler whose main clause is passive is fixed by making the
   doer the subject, which is E.logic["eng-voice"].build(…, "active"); clause fixes use E.vforms (be/have
   agreement, participles); phrase names come from E.logic["eng-verbals"].phraseName. All looked up at run time. */
(function(){
const L = window.LABS, E = window.EngLab, esc = E.esc;
const VO = () => E.logic["eng-voice"], VF = () => E.vforms;

/* ---------- 1. movers: slide a modifier through every position ----------
   slot st: ok (attaches to t) · amb (could limit t or t2) · mis (grammatical, but attaches to t, not want) · bad (not English) */
const MOVERS = [
  { label: "only · Ana paid her brother…", mod: "only", limiting: true, words: ["Ana", "paid", "her", "brother", "ten", "dollars", "yesterday"], slots: [
    { st: "ok", t: [0], m: "Ana and no one else paid him." },
    { st: "amb", t: [1], t2: [4, 5], m: "Before the verb, only can point at anything after it. Strictly it limits paid (she paid, but did nothing more); in speech, stress often makes it mean only ten dollars. Careful writing moves it to its target." },
    { st: "ok", t: [2, 3], m: "She paid her brother and nobody else." },
    { st: "ok", t: [3], m: "Only is now an adjective: Ana has just one brother." },
    { st: "ok", t: [4, 5], m: "No more than ten dollars: the amount was small." },
    { st: "bad", m: "Only cannot split a number from its noun: *ten only dollars." },
    { st: "amb", t: [4, 5], t2: [6], m: "Squinting: only sits between ten dollars and yesterday. No more than ten dollars, or not until yesterday?" },
    { st: "ok", t: [6], m: "Yesterday, and on no other day." }
  ] },
  { label: "almost · The storm destroyed…", mod: "almost", limiting: true, words: ["the", "storm", "destroyed", "every", "house"], slots: [
    { st: "bad", m: "*Almost the storm destroyed every house: almost has nothing here it can limit." },
    { st: "bad", m: "*The almost storm: almost does not modify a noun after an article." },
    { st: "ok", t: [2], m: "Read strictly, the storm nearly destroyed them, so perhaps no house was destroyed at all. Casual speech uses this order to mean almost every house; edited prose does not." },
    { st: "ok", t: [3, 4], m: "Nearly all the houses were destroyed; a few survived." },
    { st: "bad", m: "*Every almost house: almost cannot come between a determiner and its noun." },
    { st: "bad", m: "*Destroyed every house almost: at the end, with no comma, almost has nothing to limit." }
  ] },
  { label: "phrase · on paper plates", mod: "on paper plates", limiting: false, words: ["she", "served", "sandwiches", "to", "the", "children"], slots: [
    { st: "ok", t: [1], m: "Fronted, the phrase modifies served: how she served them. Clear, if a little formal." },
    { st: "bad", m: "*She on paper plates served: the phrase cannot split subject and verb." },
    { st: "bad", m: "*Served on paper plates sandwiches: a phrase between verb and object reads badly." },
    { st: "ok", t: [2], m: "Right after sandwiches, so it describes them: the sandwiches are on paper plates." },
    { st: "bad", m: "*To on paper plates the children: it cannot split a preposition from its object." },
    { st: "bad", m: "*The on paper plates children: a prepositional phrase follows its noun." },
    { st: "mis", t: [4, 5], want: [2], m: "Misplaced: the nearest noun is children, so the children seem to be sitting on the plates." }
  ] },
  { label: "squinting · often", mod: "often", limiting: false, words: ["students", "who", "study", "pass", "the", "exam"], slots: [
    { st: "ok", t: [3], m: "At the front, often modifies the main verb pass: it happens often that studying students pass." },
    { st: "bad", m: "*Students often who study: often cannot split a noun from its relative clause." },
    { st: "ok", t: [2], m: "Inside the clause, before study: students who study often (regularly) pass." },
    { st: "amb", t: [2], t2: [3], m: "Squinting: often sits between study and pass. Do they study often, or pass often?" },
    { st: "bad", m: "*Pass often the exam: an adverb does not split a verb from its object in English." },
    { st: "bad", m: "*The often exam: often is an adverb and cannot modify exam." },
    { st: "ok", t: [3], m: "At the end, often modifies the main verb pass: they pass the exam often." }
  ] }
];

/* ---------- 2. danglers: introductory phrase + main clause ----------
   phrase.kind: ing · having · en · to · ellip (conj + -ing) · ellipbe (conj + complement) · abs (own subject) */
const DANGLERS = () => {
  const { NP, PRO } = VO();
  return [
    { label: "Having finished the report, …", phrase: { kind: "having", verb: "finish", rest: "the report" }, doer: PRO.I, main: { agent: PRO.I, verb: "save", patient: NP("the file") }, tense: "past", voice: "passive" },
    { label: "To get a good seat, …", phrase: { kind: "to", verb: "get", rest: "a good seat" }, doer: PRO.you, main: { agent: PRO.you, verb: "buy", patient: NP("tickets", "pl"), adv: "early" }, tense: "must", voice: "passive" },
    { label: "After reading the reviews, …", phrase: { kind: "ellip", conj: "after", verb: "read", rest: "the reviews" }, doer: PRO.we, main: { agent: PRO.we, verb: "skip", patient: NP("the film") }, tense: "past", voice: "passive" },
    { label: "Walking to the library, the rain…", phrase: { kind: "ing", verb: "walk", rest: "to the library" }, doer: PRO.I, main: { agent: NP("the rain"), verb: "begin" }, tense: "past", voice: "active", fixA: "Walking to the library, I felt the rain begin." },
    { label: "While driving to work, …", phrase: { kind: "ellip", conj: "while", verb: "drive", rest: "to work" }, doer: PRO.I, main: { agent: NP("a deer"), verb: "run", adv: "into the road" }, tense: "past", voice: "active", fixA: "While driving to work, I saw a deer run into the road." },
    { label: "When only six, …", phrase: { kind: "ellipbe", conj: "when", rest: "only six" }, doer: PRO.I, main: { agent: NP("my father"), verb: "teach", patient: PRO.I, adv: "to swim" }, tense: "past", voice: "active", fixA: "When only six, I learned to swim from my father." },
    { label: "Walking to the library, I…", phrase: { kind: "ing", verb: "walk", rest: "to the library" }, doer: PRO.I, main: { agent: PRO.I, verb: "notice", patient: NP("the rain") }, tense: "past", voice: "active" },
    { label: "Exhausted by the climb, …", phrase: { kind: "en", verb: "exhaust", rest: "by the climb" }, doer: NP("the hikers", "pl"), main: { agent: NP("the hikers", "pl"), verb: "rest" }, tense: "past", voice: "active" },
    { label: "The rain having stopped, …", phrase: { kind: "abs", subj: NP("the rain"), verb: "stop", rest: "" }, doer: PRO.we, main: { agent: PRO.we, verb: "walk", adv: "home" }, tense: "past", voice: "active" }
  ];
};
const KINDNAME = { ing: ["ing", "participle"], having: ["ing", "participle"], en: ["ed", "participle"], to: ["to", "infinitive"] };
const j = (...a) => a.filter(Boolean).join(" ");
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

const logic = E.logic["eng-modifier-placement"] = {
  movers: MOVERS,
  get danglers(){ return DANGLERS(); },
  // insert the modifier before word `at` (at = words.length: at the end)
  place(m, at){
    const mw = m.mod.split(" "), n = mw.length, s = m.slots[at];
    const words = [...m.words.slice(0, at), ...mw, ...m.words.slice(at)];
    const map = i => i < at ? i : i + n, idx = a => (a || []).map(map);
    const text = cap(words.join(" ")) + ".";
    return { words, mod: mw.map((_, i) => at + i), st: s.st, t: idx(s.t), t2: idx(s.t2), want: idx(s.want), m: s.m, text: s.st === "bad" ? "*" + text : text };
  },
  phraseText(p){
    const V = VF();
    return { ing: () => j(V.ing(p.verb), p.rest), having: () => j("having", V.pp(p.verb), p.rest), en: () => j(V.pp(p.verb), p.rest), to: () => j("to", p.verb, p.rest),
      ellip: () => j(p.conj, V.ing(p.verb), p.rest), ellipbe: () => j(p.conj, p.rest), abs: () => j(p.subj.nom, "having", V.pp(p.verb), p.rest) }[p.kind]();
  },
  phraseName(p){
    if (p.kind === "abs") return "absolute phrase";
    if (p.kind === "ellip" && /^(after|before)$/.test(p.conj)) return "preposition + gerund phrase";
    if (p.kind === "ellip" || p.kind === "ellipbe") return "elliptical clause";
    const [form, kind] = KINDNAME[p.kind];
    return E.logic["eng-verbals"].phraseName(form, kind);
  },
  mainParts: d => VO().build(d.main, d.tense, d.voice, { agent: false }),
  subject: d => d.voice === "passive" ? d.main.patient : d.main.agent,
  status: d => d.phrase.kind === "abs" ? "absolute" : logic.subject(d).nom === d.doer.nom ? "ok" : "dangling",
  sentence: d => cap(logic.phraseText(d.phrase)) + ", " + VO().text(logic.mainParts(d), ".", false),
  // what the sentence literally says: the main subject performs the phrase's action
  literal(d){
    const V = VF(), s = logic.subject(d), p = d.phrase, n = s.nom;
    const r = { ing: () => j(n, V.bePast(s), V.ing(p.verb), p.rest), having: () => j(n, V.past(p.verb), p.rest), en: () => j(n, V.bePast(s), V.pp(p.verb), p.rest),
      to: () => j(n, V.pres("want", s), "to", p.verb, p.rest), ellipbe: () => j(n, V.bePast(s), p.rest),
      ellip: () => /^(after|before)$/.test(p.conj) ? j(n, V.past(p.verb), p.rest) : j(n, V.bePast(s), V.ing(p.verb), p.rest), abs: () => j(p.subj.nom, "had", V.pp(p.verb)) }[p.kind]();
    return cap(r) + ".";
  },
  // fix A: name the doer as the subject of the main clause; fix B: give the phrase its own subject and verb
  fixA(d){
    if (logic.status(d) !== "dangling") return null;
    if (d.voice === "passive") return cap(logic.phraseText(d.phrase)) + ", " + VO().text(VO().build({ ...d.main, agent: d.doer }, d.tense, "active"), ".", false);
    return d.fixA;
  },
  fixB(d){
    if (logic.status(d) !== "dangling") return null;
    const V = VF(), p = d.phrase, s = d.doer, n = s.nom;
    const c = { ing: () => j("while", n, V.bePast(s), V.ing(p.verb), p.rest), having: () => j("after", n, "had", V.pp(p.verb), p.rest),
      to: () => j("if", n, V.pres("want", s), "to", p.verb, p.rest), ellipbe: () => j(p.conj, n, V.bePast(s), p.rest),
      ellip: () => /^(after|before)$/.test(p.conj) ? j(p.conj, n, V.past(p.verb), p.rest) : j(p.conj, n, V.bePast(s), V.ing(p.verb), p.rest) }[p.kind]();
    return cap(c) + ", " + VO().text(logic.mainParts(d), ".", false);
  }
};

/* ---------- the lab ---------- */
E.css("css-eng-modifiers-place", `
.mp-wrap .mp-arrow{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;font:400 16px/1.4 var(--math)}
.mp-wrap .mp-box{border:1px solid currentColor;border-radius:4px;padding:3px 8px}
.mp-wrap .mp-box.c1{color:var(--amber)} .mp-wrap .mp-box.c2{color:var(--cyan)} .mp-wrap .mp-box.c3{color:var(--pink)}
.mp-wrap .mp-ar{font:600 18px/1 var(--sans);color:var(--muted)}
.mp-wrap .mp-fix{font:400 clamp(17px,2vw,21px)/1.5 var(--math);color:var(--green);margin:0}
`);
const ST = { ok: "Attached", amb: "Ambiguous", mis: "Misplaced", bad: "Not English" };

L["eng-modifier-placement"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "mp-wrap");
  let mode = "move", mi = 0, at = 0, di = 0, fix = "";
  let slider = null;

  function drawMove(){
    const m = MOVERS[mi], r = logic.place(m, at), T = new Set(r.t), T2 = new Set(r.t2), MD = new Set(r.mod), W = new Set(r.want);
    const col = i => MD.has(i) ? (m.limiting ? "c4" : "c1") : r.st === "bad" ? "" : T.has(i) ? (r.st === "mis" ? "c3" : "c2") : T2.has(i) ? "c3" : W.has(i) ? "c2" : "";
    const toks = [...r.words.map((w, i) => ({ w: i ? w : cap(w), glue: !i, i })), { w: ".", glue: true }];
    dom.innerHTML = `<div class="pos-src">Slide <i>${esc(m.mod)}</i> through the sentence · position ${at} of ${m.words.length}</div>
      <div class="pos-text">${E.words(toks, { color: (x, i) => i < r.words.length ? col(i) : "", click: true, under: (x, i) => MD.has(i) && i === r.mod[0] ? (m.limiting ? "limits" : "modifier") : T.has(i) && i === r.t[0] && r.st !== "bad" ? (r.st === "mis" ? "attaches" : "target") : T2.has(i) && i === r.t2[0] ? "or this?" : W.has(i) && i === r.want[0] ? "intended" : "" })}</div>`;
    const tgt = a => a.length ? esc(a.map(i => r.words[i]).join(" ")) : "—";
    k.setRO(E.ro({ title: m.limiting ? `${cap(m.mod)} mover` : "Modifier mover", big: esc(r.text),
      rows: [{ label: m.limiting ? "Limiting word" : "Modifier", value: esc(m.mod), c: m.limiting ? "c4" : "c1" },
        { label: r.st === "mis" ? "Attaches to" : "Modifies", value: r.st === "bad" ? "—" : tgt(r.t), c: r.st === "mis" ? "c3" : "c2" },
        ...(r.t2.length ? [{ label: "Or", value: tgt(r.t2), c: "c3" }] : []), ...(r.want.length ? [{ label: "Intended", value: tgt(r.want), c: "c2" }] : [])],
      landmark: { big: ST[r.st], note: esc(r.m), hit: r.st === "ok" },
      narr: m.limiting ? "Rule: put a limiting modifier (only, just, almost, even, nearly) immediately before the word it limits." : "Rule: put a modifier next to the word it describes, and never where it could look both ways." }));
  }
  function drawDangle(){
    const D = logic.danglers, d = D[di], st = logic.status(d), subj = logic.subject(d), main = logic.mainParts(d);
    const ph = logic.phraseText(d.phrase).split(" ");
    const sc = st === "dangling" ? "c3" : "c2";
    const isSubj = p => p[1] === (d.voice === "passive" ? "patient" : "agent") && main.indexOf(p) < main.findIndex(q => q[1] !== p[1]);
    const toks = [...ph.map((w, i) => ({ w: i ? w : cap(w), glue: !i, c: "c1", u: i ? "" : (d.phrase.kind === "abs" ? "own subject" : "phrase") })), { w: ",", glue: true },
      ...main.map((p, i) => ({ w: p[0], c: isSubj(p) ? sc : "", u: isSubj(p) && !main.slice(0, i).some(isSubj) ? "subject" : "" })), { w: ".", glue: true }];
    const fixes = st === "dangling" ? E.chips([["a", "Make the doer the subject"], ["b", "Turn the phrase into a clause"]], fix) : "";
    const out = fix === "a" ? logic.fixA(d) : fix === "b" ? logic.fixB(d) : "";
    dom.innerHTML = `<div class="pos-src">Who does the action of the opening phrase?</div>
      <div class="pos-text">${E.words(toks, { color: x => x.c || "", under: x => x.u || "" })}</div>
      <div class="mp-arrow"><span class="mp-box c1">${esc(d.phrase.kind === "abs" ? d.phrase.subj.nom + " having " + VF().pp(d.phrase.verb) : logic.phraseText(d.phrase))}</span><span class="mp-ar">${d.phrase.kind === "abs" ? "has its own subject" : "→"}</span>${d.phrase.kind === "abs" ? "" : `<span class="mp-box ${sc}">${esc(subj.nom)}</span>`}</div>
      ${fixes}${out ? `<p class="mp-fix">${esc(out)}</p>` : ""}`;
    k.setRO(E.ro({ title: "Dangler detector", big: { dangling: "Dangling", ok: "Attached", absolute: "Absolute: not dangling" }[st],
      rows: [{ label: "Phrase", value: logic.phraseName(d.phrase), c: "c1" },
        { label: "Intended doer", value: esc(d.doer.nom), c: "c2" },
        { label: "Main subject", value: esc(subj.nom), c: sc },
        { label: "Literally says", value: esc(logic.literal(d)) }],
      landmark: st === "dangling" ? { big: fix ? (fix === "a" ? "Fixed: doer as subject" : "Fixed: phrase → clause") : "Choose a fix", note: fix === "a" && d.voice === "passive" ? "The main clause was passive; making it active puts the doer in subject position, right after the phrase." : fix === "b" ? "A full clause names its own subject, so it no longer needs to borrow one." : "An introductory phrase borrows the subject of the main clause as its doer.", hit: !!fix }
        : { big: st === "ok" ? "The subject is the doer" : "The phrase names its own subject", note: st === "ok" ? "Nothing to fix: the phrase attaches to the subject it should." : "An absolute phrase (noun + participle) does not borrow the main subject, so it cannot dangle.", hit: true },
      narr: "Test: put the main clause’s subject in front of the phrase’s verb. If the result is absurd or wrong, the phrase dangles." }));
  }
  const draw = () => mode === "move" ? drawMove() : drawDangle();
  E.on(dom, ".pos-w", el => { const i = +el.dataset.i, m = MOVERS[mi], r = logic.place(m, at); if (r.mod.includes(i) || i >= r.words.length) return; at = i < at ? i : i - r.mod.length; if (slider) slider.set(at); draw(); });
  E.on(dom, ".el-chip", el => { fix = el.dataset.k; draw(); });
  function controls(){
    k.ctl.innerHTML = ""; slider = null;
    if (mode === "move") {
      k.select("Sentence", MOVERS.map((m, i) => [i, esc(m.label)]), mi, v => { mi = +v; at = 0; controls(); draw(); });
      slider = k.slider("Position", 0, MOVERS[mi].words.length, 1, at, v => { at = v; draw(); });
    } else k.select("Sentence", logic.danglers.map((d, i) => [i, esc(d.label)]), di, v => { di = +v; fix = ""; draw(); });
  }
  k.modes([["move", "Modifier mover"], ["dangle", "Dangler detector"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
