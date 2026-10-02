/* ============ Labs: English · Active & Passive Voice (voice transformer + spot the passive) ============
   Also defines EngLab.vforms (verb forms and agreement), shared with eng-verbals and eng-modifiers-place:
   those labs call E.logic["eng-voice"] and E.vforms only at run time, after every lab file has loaded. */
(function(){
const L = window.LABS, E = window.EngLab, esc = E.esc;

/* ---------- shared verb forms ---------- */
const IRR = { take: ["took", "taken"], bite: ["bit", "bitten"], choose: ["chose", "chosen"], sing: ["sang", "sung"], break: ["broke", "broken"],
  steal: ["stole", "stolen"], write: ["wrote", "written"], find: ["found", "found"], hold: ["held", "held"], begin: ["began", "begun"],
  run: ["ran", "run"], teach: ["taught", "taught"], drive: ["drove", "driven"], feel: ["felt", "felt"], see: ["saw", "seen"], get: ["got", "gotten"],
  buy: ["bought", "bought"], make: ["made", "made"], give: ["gave", "given"], have: ["had", "had"], miss: ["missed", "missed"], stop: ["stopped", "stopped"], skip: ["skipped", "skipped"], read: ["read", "read"] };
const ING = { begin: "beginning", run: "running", get: "getting", stop: "stopping", see: "seeing", sit: "sitting", swim: "swimming" };
const V = E.vforms = {
  past: v => IRR[v] ? IRR[v][0] : V.ed(v),
  pp: v => IRR[v] ? IRR[v][1] : V.ed(v),
  ed: v => /e$/.test(v) ? v + "d" : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + "ied" : v + "ed",
  ing: v => ING[v] || (/[^e]e$/.test(v) ? v.slice(0, -1) + "ing" : v + "ing"),
  third: v => v === "have" ? "has" : /(s|sh|ch|x|z|o)$/.test(v) ? v + "es" : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + "ies" : v + "s",
  sg3: s => s.num === "sg" && s.p === 3,
  pres: (v, s) => V.sg3(s) ? V.third(v) : v,
  bePres: s => s.p === 1 && s.num === "sg" ? "am" : s.num === "pl" || s.p === 2 ? "are" : "is",
  bePast: s => s.num === "pl" || s.p === 2 ? "were" : "was",
  have: s => V.sg3(s) ? "has" : "have"
};
const NP = (nom, num = "sg", p = 3, acc) => ({ nom, acc: acc || nom, num, p });
const PRO = { I: NP("I", "sg", 1, "me"), you: NP("you", "pl", 2), she: NP("she", "sg", 3, "her"), he: NP("he", "sg", 3, "him"), we: NP("we", "pl", 1, "us"), they: NP("they", "pl", 3, "them") };

/* ---------- voice rules ---------- */
const TENSES = [["present", "Simple present"], ["past", "Simple past"], ["future", "Simple future (will)"], ["presProg", "Present progressive"],
  ["pastProg", "Past progressive"], ["presPerf", "Present perfect"], ["pastPerf", "Past perfect"], ["futPerf", "Future perfect"], ["must", "Modal (must)"]];
const PROG = new Set(["presProg", "pastProg"]);

// active verb chain: [word, role, label]
function activeChain(t, s, v){
  const pp = V.pp(v);
  return {
    present: [[V.pres(v, s), "verb", "V"]], past: [[V.past(v), "verb", "V-ed"]], future: [["will", "aux", "modal"], [v, "verb", "V"]],
    presProg: [[V.bePres(s), "aux", "prog"], [V.ing(v), "verb", "V-ing"]], pastProg: [[V.bePast(s), "aux", "prog"], [V.ing(v), "verb", "V-ing"]],
    presPerf: [[V.have(s), "aux", "perf"], [pp, "verb", "V-en"]], pastPerf: [["had", "aux", "perf"], [pp, "verb", "V-en"]],
    futPerf: [["will", "aux", "modal"], ["have", "aux", "perf"], [pp, "verb", "V-en"]], must: [["must", "aux", "modal"], [v, "verb", "V"]]
  }[t];
}
// passive chain: the passive auxiliary (be or get) in the right form, then the past participle
function passiveChain(t, s, v, get){
  const P = w => [w, "be", get ? "get" : "be"], pp = [V.pp(v), "verb", "V-en"];
  const pres = get ? V.pres("get", s) : V.bePres(s), past = get ? "got" : V.bePast(s);
  return {
    present: [P(pres), pp], past: [P(past), pp], future: [["will", "aux", "modal"], P(get ? "get" : "be"), pp],
    presProg: [[V.bePres(s), "aux", "prog"], P(get ? "getting" : "being"), pp], pastProg: [[V.bePast(s), "aux", "prog"], P(get ? "getting" : "being"), pp],
    presPerf: [[V.have(s), "aux", "perf"], P(get ? "gotten" : "been"), pp], pastPerf: [["had", "aux", "perf"], P(get ? "gotten" : "been"), pp],
    futPerf: [["will", "aux", "modal"], ["have", "aux", "perf"], P(get ? "gotten" : "been"), pp], must: [["must", "aux", "modal"], P(get ? "get" : "be"), pp]
  }[t];
}
const span = (text, role, lab) => text.split(" ").map((w, i) => [w, role, i ? "" : lab]);

const ITEMS = [
  { label: "The chef prepares the soup", agent: NP("the chef"), verb: "prepare", patient: NP("the soup") },
  { label: "A dog bites the mail carrier", agent: NP("a dog"), verb: "bite", patient: NP("the mail carrier") },
  { label: "The committee chooses me", agent: NP("the committee"), verb: "choose", patient: PRO.I },
  { label: "The nurses take blood samples", agent: NP("the nurses", "pl"), verb: "take", patient: NP("blood samples", "pl"), adv: "from each patient" },
  { label: "She sings the anthem", agent: PRO.she, verb: "sing", patient: NP("the anthem") },
  { label: "Someone steals my bike", agent: NP("someone"), verb: "steal", patient: NP("my bike"), empty: true },
  { label: "The storm breaks two windows", agent: NP("the storm"), verb: "break", patient: NP("two windows", "pl") },
  { label: "The auditors find an error", agent: NP("the auditors", "pl"), verb: "find", patient: NP("an error"), adv: "in the report" },
  { label: "The guests arrive early (no object)", agent: NP("the guests", "pl"), verb: "arrive", adv: "early", block: "intransitive" },
  { label: "The hall holds 300 people (middle verb)", agent: NP("the hall"), verb: "hold", patient: NP("three hundred people", "pl"), block: "middle", noProg: true },
  { label: "The soup tastes salty (linking verb)", agent: NP("the soup"), verb: "taste", comp: "salty", block: "linking", noProg: true }
];
const BLOCK = {
  intransitive: "No passive: arrive is intransitive. With no direct object, there is nothing to promote to subject (*The guests are arrived is not English).",
  middle: "No passive: hold here is a middle verb (a measure, not an action). *Three hundred people are held by the hall is not English. Have, resemble, weigh, cost and fit (the dress fits her) behave the same way.",
  linking: "No passive: taste is a linking verb here; salty is a subject complement, not an object. Only a direct object can become the subject of a passive."
};

const logic = E.logic["eng-voice"] = {
  NP, PRO, TENSES, items: ITEMS, forms: V,
  tenses: it => TENSES.filter(([t]) => !(it.noProg && PROG.has(t))).map(([t]) => t),
  canPassive: it => !it.block && !!it.patient,
  // voice: "active" | "passive" | "get"; opt.agent: keep the by-phrase (default true)
  build(it, t, voice = "active", opt = {}){
    if (voice === "active") {
      return [...span(it.agent.nom, "agent", "subject"), ...activeChain(t, it.agent, it.verb),
        ...(it.patient ? span(it.patient.acc, "patient", "object") : []), ...(it.comp ? span(it.comp, "comp", "compl") : []), ...(it.adv ? span(it.adv, "adv", "") : [])];
    }
    if (!logic.canPassive(it)) return null;
    const keep = opt.agent !== false;
    return [...span(it.patient.nom, "patient", "subject"), ...passiveChain(t, it.patient, it.verb, voice === "get"),
      ...(it.adv ? span(it.adv, "adv", "") : []), ...(keep ? [["by", "by", "by"], ...span(it.agent.acc, "agent", "agent")] : [])];
  },
  text(parts, end = ".", up = true){
    if (!parts) return "";
    const s = parts.map(p => p[0]).join(" ");
    return (up ? s.charAt(0).toUpperCase() : s.charAt(0)) + s.slice(1) + end;
  },
  // convenience: logic.passive("The dog bit the man"-style item) as {text, parts}
  passive(it, t = "past", opt){ const p = logic.build(it, t, "passive", opt); return p ? { text: logic.text(p), parts: p } : { text: "", parts: null, why: BLOCK[it.block] || "No direct object." }; },
  active(it, t = "past"){ const p = logic.build(it, t, "active"); return { text: logic.text(p), parts: p }; },
  why: it => BLOCK[it.block] || "",
  formula(t, voice){
    if (voice === "active") return { present: "V / V-s", past: "V-ed", future: "will + V", presProg: "be + V-ing", pastProg: "be + V-ing", presPerf: "have + V-en", pastPerf: "had + V-en", futPerf: "will have + V-en", must: "must + V" }[t];
    const b = voice === "get" ? "get" : "be";
    const pre = { present: "", past: "", future: "will + ", presProg: "be + ", pastProg: "be + ", presPerf: "have + ", pastPerf: "had + ", futPerf: "will have + ", must: "must + " }[t];
    const bf = { presProg: b === "be" ? "being" : "getting", pastProg: b === "be" ? "being" : "getting", presPerf: b === "be" ? "been" : "gotten", pastPerf: b === "be" ? "been" : "gotten", futPerf: b === "be" ? "been" : "gotten" }[t] || b;
    return pre + bf + " + V-en";
  },
  // spot the passive
  kinds: [["active", "Active"], ["passive", "Passive (be)"], ["get", "Passive (get)"], ["stative", "Stative (be + adjective)"]],
  spot: [
    { s: "Governments are instituted among Men.", a: "passive", why: "Are + the participle instituted; the doer is not named (among Men is a place, not a by-phrase)." },
    { s: "The guests have arrived.", a: "active", why: "Have + participle is the perfect, not the passive. A passive needs be or get before the participle." },
    { s: "My bike got stolen last night.", a: "get", why: "Got + stolen: a get-passive, common in speech for events that happen to someone, often bad luck." },
    { s: "The museum is closed on Mondays.", a: "stative", why: "Closed names a state, not an action; no one is doing any closing on Monday. It works like an adjective (the museum is shut)." },
    { s: "The museum was closed by the city in 1998.", a: "passive", why: "An event with a doer: the city closed the museum. The by-phrase shows it is a verbal passive." },
    { s: "She was very interested in linguistics.", a: "stative", why: "Very marks interested as an adjective. Participial adjectives describe a state; there is no corresponding active event." },
    { s: "The bridge is being repaired.", a: "passive", why: "Is (progressive) + being (passive be) + repaired: present progressive passive." },
    { s: "They were driving home.", a: "active", why: "Were + driving is the past progressive, active. The -ing form is not a past participle." },
    { s: "Ten soldiers were wounded in the attack.", a: "passive", why: "Were + wounded, an action done to the soldiers by an unnamed attacker." },
    { s: "The window is broken, so the room is cold.", a: "stative", why: "Broken describes the window's present condition (like cracked or open), not an act of breaking." },
    { s: "We hold these truths to be self-evident.", a: "active", why: "We is the doer and these truths the object of hold: active. (To be self-evident is an infinitive complement.)" },
    { s: "All men are created equal.", a: "passive", why: "Are + created, with the doer left unstated; the next clause names him (endowed by their Creator)." }
  ]
};

/* ---------- the lab ---------- */
const COL = { agent: "c1", verb: "c2", aux: "c2", patient: "c3", be: "c4", by: "c5" };
const toks = parts => [...parts.map((p, i) => ({ w: p[0], role: p[1], lab: p[2], glue: !i })), { w: ".", glue: true }];
const cap = arr => { if (arr.length) arr[0] = { ...arr[0], w: arr[0].w.charAt(0).toUpperCase() + arr[0].w.slice(1) }; return arr; };

L["eng-voice"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap");
  let mode = "tr", sel = 0, tense = "present", voice = "passive", agent = true;
  const quiz = E.quiz({ items: logic.spot, check: (it, v) => it.a === v, render: () => "" });

  function drawTr(){
    const it = ITEMS[sel], act = logic.build(it, tense, "active"), cur = logic.build(it, tense, voice, { agent });
    const show = cur || act;
    const W = (parts, lab) => E.words(cap(toks(parts)), { color: x => COL[x.role] || "", under: lab ? x => x.lab || "" : null, title: x => x.lab || "" });
    dom.innerHTML = `${E.chips([["active", "Active"], ["passive", "Passive (be)"], ["get", "Passive (get)"]], voice)}
      <div class="pos-src">${voice === "active" ? "Active sentence" : "Active source: <i>" + esc(logic.text(act)) + "</i>"}</div>
      <div class="pos-text">${W(show, true)}</div>`;
    const tn = TENSES.find(t => t[0] === tense)[1];
    if (!cur) {
      k.setRO(E.ro({ title: "Voice transformer", big: `${esc(logic.text(act))}`, rows: [{ label: "Verb", value: it.verb, c: "c2" }, { label: "Tense", value: tn }],
        landmark: { big: "No passive", note: esc(logic.why(it)), hit: false }, narr: "Only a transitive verb (one with a direct object) has a passive. Try another sentence." }));
      return;
    }
    const p = voice === "active";
    const rows = p ? [
      { label: "Subject (agent)", value: esc(it.agent.nom), c: "c1", note: "the doer" },
      { label: "Verb phrase", value: activeChain(tense, it.agent, it.verb).map(x => x[0]).join(" "), c: "c2", note: logic.formula(tense, "active") },
      { label: "Object (receiver)", value: esc(it.patient ? it.patient.acc : "none"), c: "c3" }
    ] : [
      { label: "Subject (receiver)", value: esc(it.patient.nom), c: "c3", note: `was the object${it.patient.nom !== it.patient.acc ? ` (${it.patient.acc} → ${it.patient.nom})` : ""}` },
      { label: "Verb phrase", value: passiveChain(tense, it.patient, it.verb, voice === "get").map(x => x[0]).join(" "), c: "c4", note: logic.formula(tense, voice) },
      { label: "By-phrase", value: agent ? "by " + esc(it.agent.acc) : "(left out)", c: "c5", note: agent ? "optional: names the doer" : "the doer goes unnamed" }
    ];
    const narr = p ? "Switch to Passive and watch the object move to the front, be appear in the tense of the old verb, and the subject drop to an optional by-phrase."
      : it.empty && agent ? "By someone adds nothing: an agent this vague is better dropped. This is a good passive: the bike matters, the thief is unknown."
      : `The tense lives on ${voice === "get" ? "get" : "be"} (${tn.toLowerCase()}); the main verb is always the past participle ${V.pp(it.verb)}, whatever the tense.`;
    k.setRO(E.ro({ title: `${p ? "Active" : voice === "get" ? "Get-passive" : "Passive"} · ${tn}`, big: logic.formula(tense, voice), rows,
      landmark: { big: p ? "subject = doer" : "subject = receiver", note: p ? "Active: the subject acts on the object." : "Passive: be/get + past participle; the object of the active is now the subject.", hit: !p }, narr }));
  }
  function drawSpot(){
    const it = quiz.item, st = quiz.state;
    dom.innerHTML = `<div class="pos-src">Active, passive or stative? (${quiz.index + 1} of ${quiz.total})</div>
      <div class="pos-text"><p>${esc(it.s)}</p></div>
      <div class="pos-quiz">${logic.kinds.map(([v, t]) => `<button type="button" data-v="${v}" class="${st.answered ? (v === it.a ? "right" : v === st.picked ? "wrong" : "") : ""}">${t}</button>`).join("")}</div>`;
    k.setRO(E.ro({ title: "Spot the passive", big: `${quiz.score.right} / ${quiz.score.tries}`,
      rows: [{ label: "Passive", value: "be/get + past participle", c: "c4" }, { label: "Stative", value: "be + participle as adjective", note: "takes very; no action" }],
      landmark: st.answered ? { big: st.correct ? "Right" : "Not quite: " + logic.kinds.find(x => x[0] === it.a)[1], note: esc(it.why), hit: st.correct } : { big: "Choose one", note: "Look for be or get followed by a past participle, then ask whether anything is being done." },
      narr: "Have + participle is the perfect, not the passive; be + -ing is the progressive." }));
  }
  const draw = () => mode === "tr" ? drawTr() : drawSpot();
  E.on(dom, ".el-chip", el => { voice = el.dataset.k; draw(); });
  E.on(dom, ".pos-quiz button", el => { quiz.pick(el.dataset.v); draw(); });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "tr") {
      k.select("Sentence", ITEMS.map((s, i) => [i, s.label]), sel, v => { sel = +v; if (!logic.tenses(ITEMS[sel]).includes(tense)) tense = "present"; controls(); draw(); });
      k.select("Tense", TENSES.filter(([t]) => logic.tenses(ITEMS[sel]).includes(t)), tense, v => { tense = v; draw(); });
      k.check("By-phrase", agent, v => { agent = v; draw(); });
    } else k.button("Next sentence", () => { quiz.next(); draw(); });
  }
  k.modes([["tr", "Transformer"], ["spot", "Spot the passive"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
