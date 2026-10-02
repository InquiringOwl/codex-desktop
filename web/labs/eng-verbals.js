/* ============ Labs: English · Verbals (-ing / to- tester + name the verbal) ============
   The substitution tests here (it-test, which-clause test, in-order-to test, be test) are reused by
   eng-modifiers-place, which calls E.logic["eng-verbals"].phraseName at run time. */
(function(){
const L = window.LABS, E = window.EngLab, esc = E.esc;

// s: tokens (_v the verbal itself, _p the rest of its phrase). form: ing | ed | to | bare.
// be: the word follows be/have in a verb chain; doer: the subject performs the -ing action.
// it / rel / why: the rewrite that passes the noun / adjective / adverb test (null when it fails).
const ITEMS = [
  { s: "Swimming_v laps_p every_p morning_p keeps him fit .", form: "ing", it: "It keeps him fit.", job: "subject of keeps" },
  { s: "She enjoys painting_v portraits_p .", form: "ing", it: "She enjoys it.", job: "direct object of enjoys" },
  { s: "There was no possibility of taking_v a_p walk_p that_p day_p .", form: "ing", it: "There was no possibility of it.", job: "object of the preposition of" },
  { s: "Her job is teaching_v chemistry_p .", form: "ing", be: "be", doer: false, it: "Her job is that.", job: "subject complement after is (her job does not teach)" },
  { s: "She is teaching_v chemistry_p this_p year_p .", form: "ing", be: "be", doer: true, job: "main verb: is teaching is present progressive" },
  { s: "I appreciate your_p helping_v us_p .", form: "ing", it: "I appreciate it.", job: "direct object; your is the gerund’s subject, in the possessive" },
  { s: "We stopped resting_v .", form: "ing", it: "We stopped it.", job: "direct object of stopped (we were resting, then quit)" },
  { s: "The girl reading_v by_p the_p window_p is my sister .", form: "ing", rel: "The girl who is reading by the window is my sister.", job: "modifies girl" },
  { s: "The rising_v tide covered the rocks .", form: "ing", rel: "The tide, which was rising, covered the rocks.", job: "modifies tide (one-word participle before the noun)" },
  { s: "Having_v missed_p the_p bus_p , Leo walked to work .", form: "ing", rel: "Leo, who had missed the bus, walked to work.", job: "modifies Leo (perfect participle)" },
  { s: "Exhausted_v by_p the_p climb_p , the hikers rested .", form: "ed", rel: "The hikers, who were exhausted by the climb, rested.", job: "modifies hikers (past participle)" },
  { s: "The letter was written_v in pencil .", form: "ed", be: "be", job: "main verb: was written is a passive verb phrase" },
  { s: "The guests have arrived_v .", form: "ed", be: "have", job: "main verb: have arrived is present perfect" },
  { s: "To_v finish_v the_p novel_p took three months .", form: "to", it: "It took three months.", job: "subject of took" },
  { s: "She wants to_v study_v law_p .", form: "to", it: "She wants it.", job: "direct object of wants" },
  { s: "He needs a place to_v stay_v .", form: "to", rel: "He needs a place where he can stay.", job: "modifies place (adjectival)" },
  { s: "She saved money to_v buy_v a_p car_p .", form: "to", why: "She saved money in order to buy a car.", job: "modifies saved: why? (adverbial)" },
  { s: "We stopped to_v rest_v .", form: "to", why: "We stopped in order to rest.", job: "modifies stopped: why? (we quit walking so as to rest)" },
  { s: "The coach made us run_v laps_p .", form: "bare", job: "object complement after made: bare infinitive (no to)" },
  { s: "Let the children stay_v up_p late_p .", form: "bare", job: "object complement after let: bare infinitive" }
];

const KIND = {
  gerund: { name: "Gerund", c: "c1", ab: "ger" }, verb: { name: "Finite verb, not a verbal", c: "c2", ab: "verb" },
  participle: { name: "Participle", c: "c3", ab: "part" }, infinitive: { name: "Infinitive", c: "c4", ab: "inf" }
};

const logic = E.logic["eng-verbals"] = {
  items: ITEMS, KIND,
  label: it => E.text(E.parse(it.s).filter(x => !x.br)).trim(),
  // the tests in order; each returns {key, q, pass, rewrite, says}
  tests(it){
    const out = [], ing = it.form === "ing", to = it.form === "to";
    out.push({ key: "be", q: `Does it follow ${it.form === "ed" ? "be or have" : "be"} as part of the verb?`, pass: !!it.be && (it.form === "ed" || it.doer),
      says: it.be ? (it.form === "ed" ? `Yes: ${it.be} + participle is ${it.be === "be" ? "a passive" : "a perfect"} verb phrase.` : it.doer ? "Yes, and the subject is doing it: a progressive verb." : "It follows is, but the subject is not doing it (a job cannot teach): is is a linking verb here.") : "No auxiliary in front of it." });
    if (it.form !== "bare") out.push({ key: "it", q: "Swap the phrase for it or that: still a sentence?", pass: !!it.it, rewrite: it.it || null, says: it.it ? "Yes: it does a noun’s job." : "No: the result is not a sentence, so it is not a noun." });
    if (it.form !== "bare") out.push({ key: "rel", q: "Rewrite it as a who/which clause on a noun?", pass: !!it.rel, rewrite: it.rel || null, says: it.rel ? "Yes: it describes a noun, an adjective’s job." : "No noun for it to describe." });
    if (to) out.push({ key: "why", q: "Put in order in front: does it answer why?", pass: !!it.why, rewrite: it.why || null, says: it.why ? "Yes: it modifies the verb, an adverb’s job." : "No." });
    if (it.form === "bare") out.push({ key: "bare", q: "Base form after make, let, have, help, see, hear or a modal?", pass: true, says: "Yes: a bare infinitive (an infinitive without to)." });
    // stop at the first decisive test
    const n = out.findIndex(t => t.pass);
    return n < 0 ? out : out.slice(0, n + 1);
  },
  classify(it){
    const t = logic.tests(it), last = t[t.length - 1];
    if (!last.pass) return null;
    const ing = it.form === "ing", to = it.form === "to" || it.form === "bare";
    switch (last.key) {
      case "be": return { kind: "verb", name: it.form === "ed" ? (it.be === "be" ? "Passive verb (finite)" : "Perfect verb (finite)") : "Progressive verb (finite)" };
      case "it": return ing ? { kind: "gerund", name: "Gerund (noun)" } : { kind: "infinitive", name: "Infinitive used as a noun" };
      case "rel": return to ? { kind: "infinitive", name: "Infinitive used as an adjective" } : { kind: "participle", name: ing ? "Present participle (adjective)" : "Past participle (adjective)" };
      case "why": return { kind: "infinitive", name: "Infinitive used as an adverb" };
      case "bare": return { kind: "infinitive", name: "Bare infinitive" };
    }
    return null;
  },
  phraseName(form, kind){ return kind === "gerund" ? "gerund phrase" : form === "to" ? "infinitive phrase" : form === "bare" ? "bare infinitive phrase" : "participial phrase"; }
};

/* ---------- the lab ---------- */
const short = t => t.length <= 34 ? t : t.slice(0, t.lastIndexOf(" ", 32)) + " …";
L["eng-verbals"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap");
  let mode = "test", sel = 0, run = 1;
  const quiz = E.quiz({ items: ITEMS, check: (it, v) => logic.classify(it).kind === v, render: () => "" });
  const sentence = (it, reveal) => {
    const c = logic.classify(it), K = KIND[c.kind];
    return E.words(E.parse(it.s), { color: x => x.tag === "v" ? (reveal ? K.c : "") : x.tag === "p" ? (reveal ? "c5" : "") : "",
      under: reveal ? x => x.tag === "v" ? K.ab : "" : null, sel: new Set(E.parse(it.s).map((x, i) => x.tag === "v" ? i : -1).filter(i => i >= 0)) });
  };
  function drawTest(){
    const it = ITEMS[sel], T = logic.tests(it), c = logic.classify(it), done = run >= T.length;
    dom.innerHTML = `<div class="pos-src">Test the highlighted ${it.form === "to" || it.form === "bare" ? "infinitive form" : it.form === "ing" ? "-ing form" : "participle"}</div>
      <div class="pos-text">${sentence(it, done)}</div>
      <div class="pos-jobs">${T.slice(0, run).map((t, i) => `<div class="pos-job${i === run - 1 ? " sel" : ""}"><span class="s">${i + 1}. ${esc(t.q)}${t.rewrite ? `<br><i>${esc(t.rewrite)}</i>` : ""}</span><span class="t ${t.pass ? "c5" : "c3"}" style="color:var(--${t.pass ? "green" : "pink"})">${t.pass ? "yes" : "no"}</span></div>`).join("")}</div>`;
    const cur = T[run - 1];
    k.setRO(E.ro({ title: "-ing / to- tester", big: done ? `<span class="${KIND[c.kind].c}">${c.name}</span>` : "Testing…",
      rows: [{ label: "Form", value: { ing: "-ing", ed: "-ed / -en", to: "to + base", bare: "base, no to" }[it.form] },
        { label: "Test " + run, value: esc(cur.says) },
        ...(done ? [{ label: "Job", value: esc(it.job), c: "c5" }, { label: "Phrase", value: c.kind === "verb" ? "none: part of the finite verb" : logic.phraseName(it.form, c.kind), c: "c5" }] : [])],
      landmark: done ? { big: c.kind === "verb" ? "Not a verbal" : "Verbal: " + KIND[c.kind].name.toLowerCase(), note: c.kind === "verb" ? "It belongs to the main verb phrase, which has tense." : "Non-finite: it has no tense and cannot be a sentence’s main verb alone.", hit: true } : { big: "Run the next test", note: "The first test that succeeds decides the job." },
      narr: "Order matters: rule out the progressive and passive first, then try noun, adjective, adverb." }));
  }
  function drawQuiz(){
    const it = quiz.item, st = quiz.state, c = logic.classify(it);
    dom.innerHTML = `<div class="pos-src">Name the highlighted form (${quiz.index + 1} of ${quiz.total})</div>
      <div class="pos-text">${sentence(it, st.answered)}</div>
      <div class="pos-quiz">${Object.entries(KIND).map(([v, K]) => `<button type="button" data-v="${v}" class="${st.answered ? (v === c.kind ? "right" : v === st.picked ? "wrong" : "") : ""}">${K.name}</button>`).join("")}</div>`;
    k.setRO(E.ro({ title: "Name the verbal", big: `${quiz.score.right} / ${quiz.score.tries}`,
      rows: [{ label: "Gerund", value: "-ing as a noun", c: "c1" }, { label: "Participle", value: "-ing / -ed as an adjective", c: "c3" }, { label: "Infinitive", value: "(to) + base form", c: "c4" }],
      landmark: st.answered ? { big: (st.correct ? "Right: " : "It is: ") + c.name, note: esc(it.job), hit: st.correct } : { big: "Choose one", note: "Try it, a who/which clause, and in order to in your head." },
      narr: "After be, an -ing word is usually the progressive, unless the subject is not doing it." }));
  }
  const draw = () => mode === "test" ? drawTest() : drawQuiz();
  E.on(dom, ".pos-quiz button", el => { quiz.pick(el.dataset.v); draw(); });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "test") {
      k.select("Sentence", ITEMS.map((s, i) => [i, esc(short(logic.label(s)))]), sel, v => { sel = +v; run = 1; draw(); });
      k.button("Run next test", () => { run = Math.min(run + 1, logic.tests(ITEMS[sel]).length); draw(); });
      k.button("All tests", () => { run = logic.tests(ITEMS[sel]).length; draw(); }, "btn ghost");
    } else k.button("Next sentence", () => { quiz.next(); draw(); });
  }
  k.modes([["test", "-ing / to- tester"], ["quiz", "Name the verbal"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
