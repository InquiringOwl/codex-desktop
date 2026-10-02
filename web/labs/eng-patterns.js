/* ============ Labs: English · Complements & Sentence Patterns ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cap = s => s[0].toUpperCase() + s.slice(1);

/* ---------- patterns ---------- */
const PAT = {
  sv:   { lbl: "S–V",       slots: ["s", "v", "adj"], type: "intransitive", hp: "intransitive", ex: "takes no object and no complement. Anything after it is an optional adjunct." },
  sva:  { lbl: "S–V–A",     slots: ["s", "v", "a"], type: "intransitive + obligatory adverbial", hp: "intransitive with a locative complement", ex: "needs a place (or direction) phrase to be complete. The adverbial is required, so it counts as part of the pattern." },
  svc:  { lbl: "S–LV–SC",   slots: ["s", "v", "sc"], type: "linking (copular)", hp: "complex-intransitive", ex: "links the subject to a subject complement that describes or renames it. No action passes to an object." },
  svo:  { lbl: "S–V–DO",    slots: ["s", "v", "do"], type: "transitive (monotransitive)", hp: "monotransitive", ex: "takes one object, the person or thing the action is done to." },
  svoo: { lbl: "S–V–IO–DO", slots: ["s", "v", "io", "do"], type: "ditransitive", hp: "ditransitive", ex: "takes two objects: the indirect object (the receiver or beneficiary) and then the direct object (the thing given, made or said)." },
  svoc: { lbl: "S–V–DO–OC", slots: ["s", "v", "do", "oc"], type: "complex-transitive", hp: "complex-transitive", ex: "takes a direct object and then an object complement that describes or renames that object." },
  svoa: { lbl: "S–V–DO–A",  slots: ["s", "v", "do", "a"], type: "transitive + obligatory adverbial", hp: "monotransitive with a locative complement", ex: "takes a direct object and a required place phrase saying where the object ends up." }
};
const VLBL = { sv: "intransitive verb", sva: "intransitive verb", svc: "linking verb", svo: "transitive verb", svoo: "ditransitive verb", svoc: "complex-transitive verb", svoa: "transitive verb" };
const ORDER = ["sv", "sva", "svc", "svo", "svoo", "svoc", "svoa"];
const ROLE = {
  s:   { name: "subject", c: "c1" },
  v:   { name: "verb", c: "c2" },
  do:  { name: "direct object", c: "c3" },
  io:  { name: "indirect object", c: "c4" },
  sc:  { name: "subject complement", c: "c5" },
  oc:  { name: "object complement", c: "c5" },
  a:   { name: "obligatory adverbial", c: "a" },
  adj: { name: "adjunct (optional)", c: "adj" },
  to:  { name: "to/for phrase", c: "c4" }
};

/* ---------- phrase cards ---------- */
const SUBJ = [
  { t: "Jo", n: "sg", obj: "Jo" }, { t: "The captain", n: "sg", obj: "the captain" }, { t: "She", n: "sg", obj: "her" },
  { t: "They", n: "pl", obj: "them" }, { t: "The sailors", n: "pl", obj: "the sailors" }
];
const PL = new Set(["them", "the twins", "the children", "the lights", "two letters", "two coins", "the beds", "the lost charts", "the tickets", "the boots", "the boats", "the charts", "the letters", "new boots", "the plans"]);
const SUBJFORM = { him: "He", her: "She", them: "They" };
const NP = (t) => ({ t, n: PL.has(t) ? "pl" : "sg", subj: SUBJFORM[t] || cap(t) });
const A = t => ({ k: "adj", t });                         // adjective complement
const N = (sg, pl) => ({ k: "np", sg, pl: pl || sg });    // noun-phrase complement (agrees in number)

/* verbs: past, past participle, patterns with their cards. dat: "to" or "for" (ditransitives);
   ioPass: the indirect object can become a passive subject; pass: false for verbs that resist the passive. */
const VERBS = {
  sleep:    { past: "slept", pats: { sv: { adj: ["soundly", "until noon", "on deck"] } } },
  arrive:   { past: "arrived", pats: { sv: { adj: ["late", "at dawn", "in Boston"] } } },
  be:       { past: "was", pastPl: "were", pats: { svc: { sc: [A("tired"), A("happy"), N("a sailor", "sailors"), N("the captain", "the captains")] }, sva: { a: ["in the garden", "at sea", "on deck", "here"] } } },
  seem:     { past: "seemed", pats: { svc: { sc: [A("tired"), A("uneasy"), A("happy")] } } },
  become:   { past: "became", pats: { svc: { sc: [A("famous"), A("anxious"), N("a doctor", "doctors"), N("a captain", "captains")] } } },
  feel:     { past: "felt", pats: { svc: { sc: [A("cold"), A("uneasy"), A("better")] } } },
  live:     { past: "lived", pats: { sva: { a: ["in Boston", "near the sea", "on a farm"] } } },
  lie:      { past: "lay", pats: { sva: { a: ["on the deck", "in bed", "in the sun"] } } },
  see:      { past: "saw", pp: "seen", pats: { svo: { do: ["the whale", "him", "the lights"] } } },
  write:    { past: "wrote", pp: "written", dat: "to", pats: { svo: { do: ["a letter", "the report", "two letters"] }, svoo: { io: ["her", "the captain"], do: ["a letter", "a long note"] } } },
  give:     { past: "gave", pp: "given", dat: "to", ioPass: true, pats: { svoo: { io: ["him", "her", "the boy", "the twins"], do: ["a book", "the money", "two coins"] } } },
  send:     { past: "sent", pp: "sent", dat: "to", ioPass: true, pats: { svoo: { io: ["him", "the captain"], do: ["a letter", "the plans"] } } },
  tell:     { past: "told", pp: "told", dat: "to", ioPass: true, pats: { svoo: { io: ["him", "the children"], do: ["a story", "the truth"] } } },
  buy:      { past: "bought", pp: "bought", dat: "for", pats: { svoo: { io: ["her", "the twins"], do: ["a ticket", "new boots"] } } },
  make:     { past: "made", pp: "made", dat: "for", pats: { svo: { do: ["a cake", "tea", "the beds"] }, svoo: { io: ["him", "the children"], do: ["a cake", "supper"] }, svoc: { do: ["him", "her", "the twins"], oc: [A("angry"), A("happy"), N("captain", "captains")] }, svc: { sc: [N("a good teacher", "good teachers"), N("a fine captain", "fine captains")] } } },
  find:     { past: "found", pp: "found", dat: "for", pats: { svo: { do: ["the key", "her", "the lost charts"] }, svoo: { io: ["him", "her"], do: ["a seat", "a job"] }, svoc: { do: ["the play", "the lecture", "the twins"], oc: [A("dull"), A("charming"), N("a bore", "bores")] } } },
  get:      { past: "got", pp: "got", dat: "for", pass: false, pats: { svo: { do: ["a letter", "the tickets"] }, svoo: { io: ["her", "them"], do: ["a ticket", "some water"] }, svc: { sc: [A("angry"), A("cold"), A("tired")] }, svoc: { do: ["the deck", "the boots"], oc: [A("clean"), A("dry")] }, sva: { a: ["home", "to the shore"] } } },
  call:     { past: "called", pp: "called", pats: { svo: { do: ["the doctor", "him"] }, svoc: { do: ["him", "her"], oc: [N("a hero"), N("a liar"), A("lazy"), A("clever")] } } },
  name:     { past: "named", pp: "named", pats: { svoc: { do: ["the ship", "the boat"], oc: [N("the Pequod"), N("the Rachel")] } } },
  elect:    { past: "elected", pp: "elected", pats: { svoc: { do: ["her", "him", "the twins"], oc: [N("captain", "captains"), N("leader", "leaders")] } } },
  consider: { past: "considered", pp: "considered", pats: { svoc: { do: ["him", "the plan"], oc: [A("reckless"), A("wise"), N("a risk", "risks")] } } },
  paint:    { past: "painted", pp: "painted", pats: { svo: { do: ["the door", "the fence"] }, svoc: { do: ["the door", "the fence", "the boats"], oc: [A("green"), A("white"), A("red")] } } },
  put:      { past: "put", pp: "put", pats: { svoa: { do: ["the book", "the kettle", "the charts"], a: ["on the shelf", "in the drawer"] } } },
  keep:     { past: "kept", pp: "kept", pats: { svoa: { do: ["the money", "the letters"], a: ["in a safe", "under the bed"] } } }
};
const VLIST = Object.keys(VERBS);

/* ---------- sentence builder ---------- */
// A sentence is a list of parts {w, r (role), lbl}. Everything is in the simple past, so only be agrees.
function finite(vk, subj){ const V = VERBS[vk]; return vk === "be" && subj.n === "pl" ? V.pastPl : V.past; }
function compText(card, n){ return card.k === "adj" ? card.t : (n === "pl" ? card.pl : card.sg); }
function compKind(card, slot){ return card.k === "adj" ? (slot === "sc" ? "predicate adjective" : "adjective") : (slot === "sc" ? "predicate nominative" : "noun"); }
function build(vk, pk, pick, toPhrase){
  const V = VERBS[vk], P = V.pats[pk], s = SUBJ[pick.s || 0];
  const parts = [{ w: s.t, r: "s", lbl: "subject" }, { w: finite(vk, s), r: "v", lbl: VLBL[pk] }];
  const DO = P.do ? NP(P.do[pick.do || 0]) : null, IO = P.io ? NP(P.io[pick.io || 0]) : null;
  if (pk === "sv" && pick.adj > 0) parts.push({ w: P.adj[pick.adj - 1], r: "adj", lbl: "adjunct (optional)" });
  if (pk === "sva" || pk === "svoa") { if (DO) parts.push({ w: DO.t, r: "do", lbl: "direct object" }); parts.push({ w: P.a[pick.a || 0], r: "a", lbl: "obligatory adverbial" }); }
  if (pk === "svc") { const c = P.sc[pick.sc || 0]; parts.push({ w: compText(c, s.n), r: "sc", lbl: "subject complement · " + compKind(c, "sc") }); }
  if (pk === "svo") parts.push({ w: DO.t, r: "do", lbl: "direct object" });
  if (pk === "svoo") {
    if (toPhrase) { parts.push({ w: DO.t, r: "do", lbl: "direct object" }); parts.push({ w: V.dat + " " + IO.t, r: "to", lbl: V.dat + "-phrase" }); }
    else { parts.push({ w: IO.t, r: "io", lbl: "indirect object" }); parts.push({ w: DO.t, r: "do", lbl: "direct object" }); }
  }
  if (pk === "svoc") { const c = P.oc[pick.oc || 0]; parts.push({ w: DO.t, r: "do", lbl: "direct object" }); parts.push({ w: compText(c, DO.n), r: "oc", lbl: "object complement · " + compKind(c, "oc") }); }
  return { parts, s, DO, IO, V, P };
}
// The passive of a built sentence: the object moves to subject position, be + past participle, by + agent.
function passive(B, pk, viaIO){
  const { s, DO, IO, V, P } = B, beOf = n => n === "pl" ? "were" : "was", by = { w: "by " + s.obj, r: "adj", lbl: "by-phrase (optional)" };
  if (!V.pp) return null;
  if (viaIO) return [{ w: IO.subj, r: "s", lbl: "subject (was the IO)" }, { w: beOf(IO.n) + " " + V.pp, r: "v", lbl: "be + past participle" }, { w: DO.t, r: "do", lbl: "direct object (retained)" }, by];
  const out = [{ w: DO.subj, r: "s", lbl: "subject (was the DO)" }, { w: beOf(DO.n) + " " + V.pp, r: "v", lbl: "be + past participle" }];
  if (pk === "svoo") out.push({ w: V.dat + " " + IO.t, r: "to", lbl: V.dat + "-phrase" });
  if (pk === "svoc") { const c = P.oc[B.pick.oc || 0]; out.push({ w: compText(c, DO.n), r: "sc", lbl: "now a subject complement" }); }
  if (pk === "svoa") out.push({ w: P.a[B.pick.a || 0], r: "a", lbl: "obligatory adverbial" });
  out.push(by); return out;
}
const say = (parts, end) => parts.map((p, i) => i === 0 ? cap(p.w) : p.w).join(" ") + (end || ".");

/* ---------- sentences to classify ---------- */
const QUIZ = [
  [[["The baby", "s"], ["slept", "v"], ["soundly", "adj"]], "sv", "Slept is intransitive. Soundly is an optional adjunct: The baby slept is already complete."],
  [[["Our guests", "s"], ["arrived", "v"], ["late", "adj"]], "sv", "Arrived takes no object. Late tells when and can be deleted."],
  [[["The meeting", "s"], ["lasted", "v"], ["two hours", "adj"]], "sv", "Two hours is a noun phrase but not an object: it says how long, and there is no passive (*Two hours were lasted). An adverbial noun phrase of duration."],
  [[["Lightning", "s"], ["struck", "v"], ["the old tower", "do"]], "svo", "Struck what? The old tower. Passive test: The old tower was struck by lightning."],
  [[["The jury", "s"], ["found", "v"], ["the missing key", "do"]], "svo", "Found means located. One object, which passivises: the missing key was found."],
  [[["The chef", "s"], ["tasted", "v"], ["the soup", "do"]], "svo", "Here tasted is transitive (the chef did the tasting): the soup was tasted by the chef."],
  [[["The milk", "s"], ["turned", "v"], ["sour", "sc"]], "svc", "Turned means became. Sour describes the milk (be test: the milk was sour), and there is no passive."],
  [[["The professor", "s"], ["seemed", "v"], ["tired", "sc"]], "svc", "Seem is a linking verb. Tired is a predicate adjective describing the subject."],
  [[["He", "s"], ["became", "v"], ["a pilot", "sc"]], "svc", "A pilot renames the subject: he = a pilot. A predicate nominative, not an object (*A pilot was become)."],
  [[["The soup", "s"], ["tastes", "v"], ["salty", "sc"]], "svc", "With the food as subject, tastes is a linking verb: the soup is salty. Compare The chef tasted the soup."],
  [[["She", "s"], ["found", "v"], ["him", "io"], ["a seat", "do"]], "svoo", "For-test: she found a seat for him. Him is the beneficiary, a seat the thing found."],
  [[["The students", "s"], ["sent", "v"], ["the dean", "io"], ["a petition", "do"]], "svoo", "To-test: the students sent a petition to the dean."],
  [[["She", "s"], ["made", "v"], ["him", "io"], ["a sandwich", "do"]], "svoo", "For-test: she made a sandwich for him. He is not a sandwich, so a sandwich is not a complement of him."],
  [[["She", "s"], ["made", "v"], ["him", "do"], ["captain", "oc"]], "svoc", "Captain renames him (he became captain), so it is an object complement. Passive: He was made captain."],
  [[["The news", "s"], ["made", "v"], ["her", "do"], ["happy", "oc"]], "svoc", "Happy describes her, the object: she was happy. An adjective object complement."],
  [[["The jury", "s"], ["found", "v"], ["the defendant", "do"], ["guilty", "oc"]], "svoc", "Found means judged. Guilty describes the defendant: the defendant was guilty."],
  [[["They", "s"], ["elected", "v"], ["her", "do"], ["president", "oc"]], "svoc", "President renames her. Titles of a unique office as object complements often take no article."],
  [[["Call", "v"], ["me", "do"], ["Ishmael", "oc"]], "svoc", "An imperative with an understood you. Me is the object, Ishmael renames it: I am called Ishmael."],
  [[["The kettle", "s"], ["is", "v"], ["on the stove", "a"]], "sva", "Be here locates the subject. Deleting the place phrase leaves *The kettle is: the adverbial is required."],
  [[["They", "s"], ["live", "v"], ["near the sea", "a"]], "sva", "Live in the sense reside needs a place: They live has a different meaning (they are alive)."],
  [[["She", "s"], ["put", "v"], ["the kettle", "do"], ["on the stove", "a"]], "svoa", "*She put the kettle is incomplete: put needs an object and a place."]
];

/* ---------- the lab ---------- */
L["eng-patterns"] = k => {
  const dom = k.dom(); dom.classList.add("pt-wrap");
  if (!document.getElementById("css-eng-patterns")) {
    const st = document.createElement("style"); st.id = "css-eng-patterns";
    st.textContent = `.stage .dom.pt-wrap{padding:58px 16px 18px;display:grid;gap:14px;align-content:start}
.pt-wrap .pt-src{font:500 11px/1.3 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.pt-wrap .pt-sent{display:flex;flex-wrap:wrap;align-items:flex-start;gap:10px 12px;font:400 clamp(19px,2.5vw,28px)/1.2 var(--math);color:var(--text)}
.pt-wrap .pt-sent.sm{font-size:clamp(16px,1.9vw,21px);gap:8px 10px}
.pt-wrap .pt-t{display:inline-flex;flex-direction:column;align-items:flex-start;gap:5px;min-width:0}
.pt-wrap .pt-t>b{font-weight:500;padding-bottom:2px;border-bottom:2px solid currentColor;overflow-wrap:anywhere}
.pt-wrap .pt-t>small{font:500 10px/1.15 var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--faint);max-width:11em}
.pt-wrap .pt-t.c1>b{color:var(--amber)} .pt-wrap .pt-t.c2>b{color:var(--cyan)} .pt-wrap .pt-t.c3>b{color:var(--pink)} .pt-wrap .pt-t.c4>b{color:var(--violet)} .pt-wrap .pt-t.c5>b{color:var(--green)}
.pt-wrap .pt-t.a>b{color:var(--text);border-bottom:2px dashed var(--muted)} .pt-wrap .pt-t.adj>b{color:var(--muted);font-weight:400;border-bottom:1px dotted var(--faint)}
.pt-wrap .pt-t.plain>b{border-bottom-color:transparent;color:var(--text)}
.pt-wrap .pt-slots{display:grid;gap:8px}
.pt-wrap .pt-slot{display:grid;grid-template-columns:8.2em 1fr;gap:8px;align-items:start}
.pt-wrap .pt-slot>span{font:600 10.5px/1.2 var(--ui);letter-spacing:.1em;text-transform:uppercase;padding-top:7px}
.pt-wrap .pt-cards{display:flex;flex-wrap:wrap;gap:6px}
.pt-wrap .pt-cards button{font:400 15px/1.1 var(--sans);color:var(--text);background:var(--panel-2);border:1px solid var(--line-2);border-radius:3px;padding:6px 9px;cursor:pointer}
.pt-wrap .pt-cards button.on{border-color:currentColor;box-shadow:inset 0 0 0 1px currentColor;background:rgba(255,255,255,.04)}
.pt-wrap .pt-cards.c1 button.on{color:var(--amber)} .pt-wrap .pt-cards.c3 button.on{color:var(--pink)} .pt-wrap .pt-cards.c4 button.on{color:var(--violet)} .pt-wrap .pt-cards.c5 button.on{color:var(--green)} .pt-wrap .pt-cards.a button.on,.pt-wrap .pt-cards.adj button.on{color:var(--text)}
.pt-wrap .pt-tests{border:1px solid var(--line);border-radius:4px;background:rgba(0,0,0,.22);padding:10px 12px;display:grid;gap:10px}
.pt-wrap .pt-test>div:first-child{font:500 10.5px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.pt-wrap .pt-test .ok{color:var(--green)} .pt-wrap .pt-test .no{color:var(--red)}
.pt-wrap .pt-bad{font:italic 17px/1.3 var(--math);color:var(--muted)}
.pt-wrap .pt-why{font:400 13.5px/1.45 var(--sans);color:var(--muted)}
.pt-wrap .pt-opts{display:flex;flex-wrap:wrap;gap:6px}
.pt-wrap .pt-opts button{font:600 13px/1 var(--mono);letter-spacing:.02em;color:var(--text);background:var(--panel-2);border:1px solid var(--line-2);border-radius:3px;padding:8px 10px;cursor:pointer}
.pt-wrap .pt-opts button.right{border-color:var(--green);color:var(--green)} .pt-wrap .pt-opts button.wrong{border-color:var(--red);color:var(--red)}
.pt-wrap .pt-row{display:grid;gap:6px;padding:10px 12px;border:1px solid var(--line);border-radius:4px;cursor:pointer;background:rgba(0,0,0,.14)}
.pt-wrap .pt-row.sel{border-color:var(--amber);background:rgba(242,184,75,.06)}
.pt-wrap .pt-row .pl{font:600 12px/1 var(--mono);color:var(--amber)}
@media (max-width:520px){.pt-wrap .pt-slot{grid-template-columns:1fr;gap:4px}.pt-wrap .pt-slot>span{padding-top:0}.stage .dom.pt-wrap{padding:54px 12px 14px}}`;
    document.head.appendChild(st);
  }
  let mode = "build", vk = "make", pk = "svoc", pick = {}, toPhrase = false;
  let qi = 0, qa = null, score = { right: 0, tries: 0 }, order = QUIZ.map((_, i) => i);
  let mv = "get", row = 0;
  const MULTI = VLIST.filter(v => Object.keys(VERBS[v].pats).length > 1);

  const tok = p => `<span class="pt-t ${ROLE[p.r].c}"><b>${esc(p.w)}</b>${p.lbl ? `<small>${esc(p.lbl)}</small>` : ""}</span>`;
  const sentence = (parts, end, cls) => `<div class="pt-sent ${cls || ""}">${parts.map((p, i) => tok(Object.assign({}, p, { w: (i === 0 ? cap(p.w) : p.w) + (i === parts.length - 1 ? (end || ".") : "") }))).join("")}</div>`;
  const patHTML = pkk => PAT[pkk].lbl.split("–").map(x => `<span class="${{ S: "c1", V: "c2", LV: "c2", DO: "c3", IO: "c4", SC: "c5", OC: "c5", A: "" }[x]}">${x}</span>`).join("–");
  const patsOf = v => ORDER.filter(p => VERBS[v].pats[p]);
  function shuffle(){ for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; } }

  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "build") {
      k.select("Verb", VLIST.map(v => [v, `${v} (${patsOf(v).length === 1 ? PAT[patsOf(v)[0]].lbl : patsOf(v).length + " patterns"})`]), vk, v => { vk = v; if (!VERBS[vk].pats[pk]) pk = patsOf(vk)[0]; pick = {}; toPhrase = false; controls(); draw(); });
      if (patsOf(vk).length > 1) k.select("Pattern", patsOf(vk).map(p => [p, PAT[p].lbl]), pk, v => { pk = v; pick = {}; toPhrase = false; controls(); draw(); });
      if (pk === "svoo") k.check(`Use a ${VERBS[vk].dat}-phrase`, toPhrase, v => { toPhrase = v; draw(); });
      k.button("Random cards", () => { const P = VERBS[vk].pats[pk]; pick = { s: Math.floor(Math.random() * SUBJ.length) }; ["do", "io", "sc", "oc", "a"].forEach(x => { if (P[x]) pick[x] = Math.floor(Math.random() * P[x].length); }); if (P.adj) pick.adj = Math.floor(Math.random() * (P.adj.length + 1)); draw(); }, "btn ghost");
    } else if (mode === "classify") {
      k.button("Next sentence", () => { qi = (qi + 1) % order.length; if (qi === 0) shuffle(); qa = null; draw(); });
      k.button("Reset score", () => { score = { right: 0, tries: 0 }; draw(); }, "btn ghost");
    } else {
      k.select("Verb", MULTI.map(v => [v, v]), mv, v => { mv = v; row = 0; draw(); });
      k.button("Next pattern", () => { row = (row + 1) % patsOf(mv).length; draw(); }, "btn ghost");
    }
  }

  function slotRow(slot, label, cls, opts, cur){
    return `<div class="pt-slot"><span class="${cls === "a" || cls === "adj" ? "" : cls}" style="${cls === "a" || cls === "adj" ? "color:var(--muted)" : ""}">${esc(label)}</span><div class="pt-cards ${cls}">${opts.map((o, i) => `<button type="button" data-slot="${slot}" data-i="${i}" class="${i === cur ? "on" : ""}">${esc(o)}</button>`).join("")}</div></div>`;
  }

  function drawBuild(){
    const V = VERBS[vk], P = V.pats[pk], B = build(vk, pk, pick, toPhrase); B.pick = pick;
    const sN = SUBJ[pick.s || 0].n, doN = P.do ? NP(P.do[pick.do || 0]).n : "sg";
    let slots = slotRow("s", "Subject", "c1", SUBJ.map(s => s.t), pick.s || 0);
    if (P.adj) slots += slotRow("adj", "Adjunct (optional)", "adj", ["(none)", ...P.adj], pick.adj || 0);
    if (P.io) slots += slotRow("io", "Indirect object", "c4", P.io, pick.io || 0);
    if (P.do) slots += slotRow("do", "Direct object", "c3", P.do, pick.do || 0);
    if (P.sc) slots += slotRow("sc", "Subject complement", "c5", P.sc.map(c => compText(c, sN)), pick.sc || 0);
    if (P.oc) slots += slotRow("oc", "Object complement", "c5", P.oc.map(c => compText(c, doN)), pick.oc || 0);
    if (P.a) slots += slotRow("a", "Obligatory adverbial", "a", P.a, pick.a || 0);

    // tests
    const tests = [];
    const bad = s => `<div class="pt-bad">*${esc(s)}</div>`;
    const s0 = B.parts[0].w, v0 = B.parts[1].w;
    if (pk === "sv") {
      tests.push(["Delete test", `<div class="pt-bad" style="font-style:normal;color:var(--text)">${esc(s0 + " " + v0)}. <span class="ok">✓</span></div>`, "The sentence is complete without anything after the verb, so whatever follows is an adjunct, not a complement."]);
      tests.push(["Passive test", bad("(no passive)"), "No object, no passive: intransitive verbs cannot be made passive."]);
    }
    if (pk === "sva") {
      const mark = vk === "live" ? `<div class="pt-bad">${esc(s0 + " " + v0)}. <span class="no">≠</span></div>` : vk === "lie" ? `<div class="pt-bad">?${esc(s0 + " " + v0)}.</div>` : bad(`${s0} ${v0}.`);
      tests.push(["Delete test", mark, vk === "live" ? "Without the place phrase, lived changes meaning (was alive). The adverbial is required: a complement in all but name." : vk === "lie" ? "Lie in this sense barely stands alone: it wants a place. Lay is its past tense: lie, lay, lain. It has no object (compare lay, laid, laid, which does)." : vk === "get" ? "Got alone is incomplete in this sense (arrived). The direction phrase is required." : "Be needs something after it. A place phrase makes S–V–A; an adjective or noun phrase would make S–LV–SC."]);
      tests.push(["Passive test", bad("(no passive)"), "No object, so no passive."]);
    }
    if (pk === "svc") {
      const c = P.sc[pick.sc || 0];
      tests.push(["Be test", vk === "be" ? `<div class="pt-why">The verb is already <i>be</i>, the model linking verb.</div>` : sentence([B.parts[0], { w: sN === "pl" ? "were" : "was", r: "v", lbl: "be" }, B.parts[2]], ".", "sm"), `The ${c.k === "adj" ? "adjective" : "noun phrase"} describes ${c.k === "adj" ? "" : "or renames "}the subject, and the sentence still makes sense with be: the verb is linking.${vk === "get" ? " (Got here means became.)" : vk === "make" ? " (Made here means became or turned out to be: she made a good teacher.)" : ""}`]);
      if (vk === "make") tests.push(["Passive test", bad(`${cap(compText(c, sN))} ${sN === "pl" ? "were" : "was"} made by ${B.s.obj}.`), "Not in this sense. The passive is grammatical only with a different meaning (made = created), which shows that a good teacher here is a complement, not an object."]);
      else tests.push(["Passive test", bad(`${cap(compText(c, sN))} ${c.k === "adj" ? "was" : sN === "pl" ? "were" : "was"} ${vk === "be" ? "been" : vk === "become" ? "become" : vk === "get" ? "got" : V.pp || (vk === "seem" ? "seemed" : "felt")} by ${B.s.obj}.`), "A subject complement is not an object: it cannot become the subject of a passive."]);
    }
    if (pk === "svo" || pk === "svoo" || pk === "svoc" || pk === "svoa") {
      const pv = passive(B, pk, false);
      if (V.pass === false) tests.push(["Passive test", bad(say(pv)), "Get in this sense resists the passive (as do have, lack and resemble). The passive test proves an object when it works; when it fails, use “verb what?” instead."]);
      else tests.push(["Passive test", sentence(pv, ".", "sm"), pk === "svoc" ? "The object becomes the subject, and the object complement becomes a subject complement." : pk === "svoo" ? "The direct object becomes the subject; the indirect object becomes a " + V.dat + "-phrase." : "The direct object becomes the subject: proof that it was an object."]);
      if (pk === "svoo" && V.ioPass && V.pass !== false && !toPhrase) tests.push(["Passive on the indirect object", sentence(passive(B, pk, true), ".", "sm"), "With verbs of giving and telling, the indirect object can also become the subject."]);
    }
    if (pk === "svoo") {
      tests.push([toPhrase ? "Back to two objects" : `${V.dat}-test`, sentence(build(vk, pk, pick, !toPhrase).parts, ".", "sm"), V.dat === "to" ? "A verb of transfer: the receiver can be moved after the direct object with to. Traditional grammar still calls it the indirect object; Huddleston and Pullum call the to-phrase a PP complement." : "A verb of making or getting: the beneficiary moves after the direct object with for."]);
    }
    if (pk === "svoc") {
      const DO = NP(P.do[pick.do || 0]), c = P.oc[pick.oc || 0];
      tests.push(["DO + be test", `<div class="pt-bad" style="font-style:normal;color:var(--text)"><span class="c3">${esc(DO.subj)}</span> ${DO.n === "pl" ? "were" : "was"} <span class="c5">${esc(compText(c, DO.n))}</span>. <span class="ok">✓</span></div>`, "The complement describes or renames the object, not the subject. That is what separates an object complement from a direct object after an indirect object."]);
    }
    if (pk === "svoa") tests.push(["Delete test", vk === "keep" ? `<div class="pt-bad">${esc(say(B.parts.slice(0, 3)))} <span class="no">≠</span></div>` : bad(say(B.parts.slice(0, 3))), vk === "keep" ? "Grammatical, but kept now means retained rather than stored somewhere: the place phrase belongs to this sense of keep." : "Without the place phrase the sentence is incomplete, so the adverbial is required."]);

    dom.innerHTML = `<div class="pt-src">Pattern builder · <span class="c2">${esc(vk)}</span> · ${patHTML(pk)}</div>
      ${sentence(B.parts)}
      <div class="pt-slots">${slots}</div>
      <div class="pt-tests">${tests.map(([h, body, why]) => `<div class="pt-test"><div>${esc(h)}</div>${body}<div class="pt-why" style="margin-top:4px">${esc(why)}</div></div>`).join("")}</div>`;
    dom.querySelectorAll(".pt-cards button").forEach(b => b.onclick = () => { pick[b.dataset.slot] = +b.dataset.i; draw(); });

    const comps = B.parts.slice(2).filter(p => p.r !== "adj").map(p => `<div class="row"><span class="${ROLE[p.r].c === "a" ? "" : ROLE[p.r].c}">${esc(p.lbl.replace(" · ", ": "))}</span> <span class="v ${ROLE[p.r].c === "a" ? "" : ROLE[p.r].c}" style="font-size:15px">${esc(p.w)}</span></div>`).join("");
    const n = patsOf(vk).length;
    let land, hit = false;
    if (vk === "make" || vk === "find") { hit = true; land = [`One verb, ${n} patterns`, pk === "svoo" ? `<i>${esc(vk)}</i> here means ${vk === "make" ? "create" : "obtain"} something for someone. The first noun phrase after it is a receiver (indirect object), not the thing it names: the for-test works and the DO + be test fails.` : pk === "svoc" ? `<i>${esc(vk)}</i> here means ${vk === "make" ? "cause to be" : "judge to be"}. The second phrase describes or renames the object: the DO + be test works, the for-test does not.` : pk === "svc" ? "Here make is a linking verb meaning turn out to be: she made a good teacher = she was a good teacher." : `<i>${esc(vk)}</i> with one object: ${vk === "make" ? "create" : "locate"}. Switch Pattern to see the same verb take an indirect object or an object complement.`]; }
    else if (vk === "get") { hit = true; land = ["get: five patterns", "Get is the most flexible verb in English: got a letter (S–V–DO), got her a ticket (S–V–IO–DO), got angry (S–LV–SC), got the deck clean (S–V–DO–OC), got home (S–V–A)."]; }
    else if (vk === "be") { hit = true; land = [pk === "svc" ? "be + complement" : "be + place", pk === "svc" ? "Be is the model linking verb: what follows describes (predicate adjective) or renames (predicate nominative) the subject." : "With a place phrase, be locates the subject. Traditional handbooks often fold this into S–V; Quirk et al. and Huddleston & Pullum treat the place phrase as required."]; }
    else if (vk === "lie") { hit = true; land = ["lie, lay, lain", "Lie is intransitive (S–V–A): The sailors lay on the deck. Lay (laid, laid) is transitive and needs a direct object: They laid the charts on the deck."]; }
    else if (pk === "sv" && pick.adj > 0) land = ["Adjunct, not complement", "The added phrase is optional: delete it and the sentence is still complete. Adjuncts can be added to any pattern and do not change it."];
    else land = [PAT[pk].lbl, `A ${PAT[pk].type} verb ${PAT[pk].ex}`];
    k.setRO(`<div><h2>Pattern</h2><div class="ro-big" style="margin-top:8px"><span class="num" style="font-size:.8em">${patHTML(pk)}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span>Verb type</span> <span class="v c2" style="font-size:15px">${esc(PAT[pk].type)}</span><span class="lbl">Huddleston &amp; Pullum: ${esc(PAT[pk].hp)}</span></div>
        ${comps || `<div class="row"><span>Complements</span> <span class="v">none</span></div>`}
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${land[0]}</div><div class="note">${land[1]}</div></div>
      <p class="narr">${pk === "svoo" ? "Tick the " + esc(V.dat) + "-phrase box to move the indirect object behind the direct object." : "Change a card: the pattern stays the same as long as the verb and its pattern do."}</p>`);
  }

  function drawClassify(){
    const [parts, ans, why] = QUIZ[order[qi]];
    const shown = parts.map(([w, r]) => qa ? { w, r, lbl: r === "v" && ans === "svc" ? "linking verb" : ROLE[r].name } : { w, r: "plain" });
    dom.innerHTML = `<div class="pt-src">Classify · sentence ${qi + 1} of ${order.length}</div>
      ${sentence(shown, ".")}
      <div class="pt-opts">${ORDER.map(p => `<button type="button" data-p="${p}" class="${qa ? (p === ans ? "right" : p === qa ? "wrong" : "") : ""}">${PAT[p].lbl}</button>`).join("")}</div>
      ${qa ? `<div class="pt-tests"><div class="pt-test"><div>Analysis</div><div class="pt-why" style="color:var(--text)">${esc(why)}</div></div></div>` : `<div class="pt-why">Find the verb, ask what (if anything) it needs after it, then pick the pattern. A stands for a required adverbial; optional adjuncts do not count.</div>`}`;
    dom.querySelectorAll(".pt-opts button").forEach(b => b.onclick = () => { if (qa) return; qa = b.dataset.p; score.tries++; if (qa === ans) score.right++; draw(); });
    k.setRO(`<div><h2>Score</h2><div class="ro-big" style="margin-top:8px"><span class="num c5">${score.right}</span> / <span class="num">${score.tries}</span></div></div>
      <div class="ro-rows"><div class="row"><span>Patterns</span> <span class="v c1">7</span><span class="lbl">Quirk et al.'s clause types, with A for a required adverbial</span></div></div>
      ${qa ? `<div class="landmark hit"><div class="big">${qa === ans ? "Right" : "Not quite"}: ${patHTML(ans)}</div><div class="note">${esc(PAT[ans].type)} verb. ${qa !== ans ? "You chose " + esc(PAT[qa].lbl) + "." : ""}</div></div>`
        : `<div class="landmark"><div class="big">Which pattern?</div><div class="note">Tests: passive (direct object), to/for (indirect object), be (subject complement), DO + be (object complement), delete (adjunct or required adverbial).</div></div>`}
      <p class="narr">${qa ? "Press Next sentence for another. Watch for the same verb in different patterns: found, made, tasted." : "The colours appear after you answer."}</p>`);
  }

  function drawVerb(){
    const ps = patsOf(mv);
    if (row >= ps.length) row = 0;
    dom.innerHTML = `<div class="pt-src">One verb, many patterns · <span class="c2">${esc(mv)}</span></div>
      ${ps.map((p, i) => `<div class="pt-row${i === row ? " sel" : ""}" data-i="${i}" role="button" tabindex="0"><span class="pl">${PAT[p].lbl}</span>${sentence(build(mv, p, {}, false).parts, ".", "sm")}</div>`).join("")}`;
    dom.querySelectorAll(".pt-row").forEach(el => { el.onclick = () => { row = +el.dataset.i; draw(); }; el.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.onclick(); } }; });
    const p = ps[row];
    const MEAN = { make: { svo: "create", svoo: "create for someone", svoc: "cause to be", svc: "turn out to be" }, find: { svo: "locate", svoo: "obtain for someone", svoc: "judge to be" }, get: { svo: "receive", svoo: "obtain for someone", svc: "become", svoc: "cause to be", sva: "arrive" }, write: { svo: "compose", svoo: "send in writing" }, call: { svo: "summon", svoc: "name or describe as" }, paint: { svo: "apply paint to", svoc: "make a colour by painting" }, be: { svc: "have a quality or identity", sva: "be located" } };
    const m = (MEAN[mv] || {})[p];
    k.setRO(`<div><h2>${esc(mv)} · ${ps.length} patterns</h2><div class="ro-big" style="margin-top:8px"><span class="num" style="font-size:.8em">${patHTML(p)}</span></div></div>
      <div class="ro-rows"><div class="row"><span>Verb type</span> <span class="v c2" style="font-size:15px">${esc(PAT[p].type)}</span></div>
      ${m ? `<div class="row"><span>Meaning here</span> <span class="v c5" style="font-size:15px">${esc(m)}</span></div>` : ""}</div>
      <div class="landmark hit"><div class="big">The pattern belongs to the use</div><div class="note">Dictionaries list a verb's patterns sense by sense. A change of pattern often signals a change of meaning, which is why the same words (<i>made him</i>, <i>found her</i>) can begin very different sentences.</div></div>
      <p class="narr">Click a row, or open the builder and choose the same verb to change the cards.</p>`);
  }

  function draw(){ if (mode === "build") drawBuild(); else if (mode === "classify") drawClassify(); else drawVerb(); }
  ROLE.plain = { name: "", c: "plain" };
  shuffle();
  const md = k.modes([["build", "Pattern builder"], ["classify", "Classify"], ["verb", "One verb, many patterns"]], mode, m => { mode = m; controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
};
})();
