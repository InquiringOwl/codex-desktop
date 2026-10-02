/* ============ Labs: English · Independent & Dependent Clauses (clause finder) ============
   Also defines the clause-analysis format shared with eng-sentences.js and eng-subclauses.js
   (they load after this file and read EngLab.logic["eng-clauses"]).
   Format: story-style tokens plus clause braces.
     {I …}  independent clause ({I:imp …} imperative, subject understood)
     {N:role …} noun clause   {R …} relative (adjective) clause   {A:meaning …} adverb clause
     extra qualifiers after a comma: zero (no marker word), non (nonrestrictive)
     word tags: _s simple subject · _v finite verb (with its auxiliaries) · _m marker word
                _ms marker that is also the clause's subject · _c coordinating conjunction
   Words outside every brace (coordinators, joining punctuation, the end mark) belong to the sentence. */
(function(){
const L = window.LABS, E = window.EngLab;

const TYPE = { I: "Independent clause", N: "Noun clause", R: "Relative (adjective) clause", A: "Adverb clause" };
const WEAK = ["that", "whether", "if"];          // noun-clause markers you can simply drop
const join = ws => ws.map((x, k) => (k && !x.glue ? " " : "") + x.w).join("");
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function parse(src){
  const clauses = [], stack = [], toks = [], owner = [];
  src.trim().split(/\s+/).forEach(t => {
    if (t[0] === "{") {
      const [code, q = ""] = t.slice(1).split(":");
      clauses.push({ i: clauses.length, type: code, q: q ? q.split(",") : [], parent: stack.length ? stack[stack.length - 1] : -1, depth: stack.length });
      stack.push(clauses.length - 1); return;
    }
    if (t === "}") { stack.pop(); return; }
    toks.push(t); owner.push(stack.length ? stack[stack.length - 1] : -1);
  });
  const words = E.parse(toks.join(" ")).map((x, i) => ({ w: x.w, glue: x.glue, role: x.tag || "", clause: owner[i], key: x.key }));
  const under = (ci, cj) => { while (ci >= 0) { if (ci === cj) return true; ci = clauses[ci].parent; } return false; };
  clauses.forEach(c => {
    c.all = words.map((x, i) => i).filter(i => words[i].clause >= 0 && under(words[i].clause, c.i));
    c.own = c.all.filter(i => words[i].clause === c.i);
    c.from = c.all[0]; c.to = c.all[c.all.length - 1];
    c.subj = c.own.filter(i => /^m?s$/.test(words[i].role));
    c.verb = c.own.filter(i => words[i].role === "v");
    c.mark = c.own.filter(i => /^ms?$/.test(words[i].role));
    c.kids = clauses.filter(d => d.parent === c.i).map(d => d.i);
  });
  const last = words[words.length - 1];
  return { src, words, clauses, under, end: /^[.?!]$/.test(last.w) ? last.w : "." };
}

const label = c => c.type === "I" ? (c.q.includes("imp") ? "Independent clause · imperative" : "Independent clause")
  : TYPE[c.type] + (c.q.filter(q => q !== "zero" && q !== "non").length ? " · " + c.q.filter(q => q !== "zero" && q !== "non")[0] : "")
    + (c.q.includes("non") ? " · nonrestrictive" : "") + (c.q.includes("zero") ? " · no marker" : "");
const short = c => ({ I: "Main", N: "Noun", R: "Relative", A: "Adverb" })[c.type];

// Words of clause ci with some descendant clauses removed (and the commas that set them off).
function without(a, ci, drop){
  const W = a.words, keep = new Set(a.clauses[ci].all);
  const hit = d => d.i !== ci && a.under(d.i, ci) && drop(d);
  a.clauses.filter(d => hit(d) && !(d.parent !== ci && a.clauses.some(e => hit(e) && e.i !== d.i && a.under(d.i, e.i)))).forEach(d => {
    d.all.forEach(i => keep.delete(i));
    const before = d.from - 1, after = d.to + 1, c = a.clauses[ci];
    const comma = i => W[i] && W[i].w === "," && keep.has(i);
    if (comma(before) && comma(after)) { keep.delete(before); keep.delete(after); }
    else if (d.from === c.from && comma(after)) keep.delete(after);
    else if (comma(before) && (after > c.to || !keep.has(after))) keep.delete(before);
  });
  return [...keep].sort((x, y) => x - y);
}
// The clause as a sentence on its own: a main clause keeps the noun clauses it needs and drops removable
// relative and adverb clauses; a dependent clause is shown whole, as the fragment it would be.
function alone(a, ci){
  const c = a.clauses[ci];
  if (c.type !== "I") return cap(join(c.all.map(i => a.words[i]))) + ".";
  const ids = without(a, ci, d => d.type === "R" || d.type === "A");
  return cap(join(ids.map(i => a.words[i]))) + a.end;
}
// The dependent clause turned into a sentence: drop a simple marker, or use the item's rewrite.
function free(a, ci, item){
  const c = a.clauses[ci];
  if (c.type === "I") return null;
  if (item && item.free && item.free[ci]) return item.free[ci];
  if (needsRewrite(a, ci)) return null;
  return cap(join(c.all.filter(i => !c.mark.includes(i)).map(i => a.words[i]))) + ".";
}
const needsRewrite = (a, ci) => { const c = a.clauses[ci]; return c.type === "R" || (c.type === "N" && c.mark.some(i => !WEAK.includes(a.words[i].w.toLowerCase()))) || c.mark.some(i => a.words[i].role === "ms"); };

function structure(a){
  const ic = a.clauses.filter(c => c.type === "I").length, dc = a.clauses.length - ic;
  const type = ic >= 2 && dc ? "compound-complex" : ic >= 2 ? "compound" : dc ? "complex" : "simple";
  return { ic, dc, type };
}

// Problems with an analysis (used by the tests; an empty list means the item is well formed).
function check(a, item){
  const out = [];
  if (!a.clauses.some(c => c.type === "I")) out.push("no independent clause");
  a.clauses.forEach(c => {
    const t = `clause ${c.i} (${join(c.all.map(i => a.words[i])).slice(0, 30)})`;
    if (!TYPE[c.type]) out.push(t + ": unknown type " + c.type);
    if (!c.verb.length) out.push(t + ": no finite verb");
    const subjClause = c.kids.some(k => a.clauses[k].type === "N" && a.clauses[k].q.includes("subject"));
    if (!c.subj.length && !c.q.includes("imp") && !subjClause) out.push(t + ": no subject");
    if (c.type === "I" && c.mark.length) out.push(t + ": independent clause with a marker");
    if (c.type !== "I" && !c.mark.length && !c.q.includes("zero")) out.push(t + ": dependent clause without a marker");
    if (c.type !== "I" && c.parent < 0) out.push(t + ": dependent clause not inside another clause");
    if (c.type !== "I" && !free(a, c.i, item)) out.push(t + ": needs a free (stand-alone) rewrite");
  });
  a.words.forEach((x, i) => { if (x.clause < 0 && /[A-Za-z]/.test(x.w) && x.role !== "c") out.push(`word "${x.w}" is outside every clause`); });
  return out;
}

// Display list: words with coloured brackets around every clause; each entry keeps wi (word index) or ci.
function display(a){
  const out = [];
  a.words.forEach((x, i) => {
    const opens = a.clauses.filter(c => c.from === i).sort((p, q) => p.depth - q.depth);
    const closes = a.clauses.filter(c => c.to === i).sort((p, q) => q.depth - p.depth);
    opens.forEach((c, k) => out.push({ w: "[", glue: k ? true : x.glue, ci: c.i, wi: -1 }));
    out.push(Object.assign({}, x, { glue: opens.length ? true : x.glue, wi: i }));
    closes.forEach(c => out.push({ w: "]", glue: true, ci: c.i, wi: -1 }));
  });
  return out;
}
// Nested-bracket tree for EngLab.nest.
function tree(a, ci){
  const kids = [], c = a.clauses[ci], seen = new Set();
  c.all.forEach(i => {
    const x = a.words[i];
    if (x.clause !== ci) { let k = x.clause; while (a.clauses[k].parent !== ci) k = a.clauses[k].parent; if (!seen.has(k)) { seen.add(k); kids.push(tree(a, k)); } return; }
    if (x.glue && typeof kids[kids.length - 1] === "string") kids[kids.length - 1] += x.w; else kids.push(x.w);
  });
  return { c: c.type === "I" ? "c1" : "c2", label: short(c) + (c.type === "A" && c.q[0] ? " · " + c.q[0] : c.type === "N" && c.q[0] && c.q[0] !== "zero" ? " · " + c.q[0] : ""), kids };
}

// Sentence bank (shared). Every sentence is grammatical as given; story sentences are quoted exactly.
const bank = [
  { id: "huck", label: "Twain: “You don’t know about me …”", fn: "declarative",
    src: "{I You_s don’t_v know_v about me {A:condition without_m you_s have_v read_v a book by the name of The Adventures of Tom Sawyer } } ; but_c {I that_s ain’t_v no matter } .",
    note: "Dialect <i>without</i> means <i>unless</i> here: Huck’s narration uses it as a subordinating conjunction." },
  { id: "walden", label: "Thoreau: “When I wrote …”", fn: "declarative",
    src: "{I {A:time When_m I_s wrote_v the following pages , or rather the bulk of them } , I_s lived_v alone , in the woods , a mile from any neighbor , in a house {R which_m I_s had_v built_v myself } , on the shore of Walden Pond , in Concord , Massachusetts , and earned_v my living by the labor of my hands only } .",
    free: { 2: "I had built the house myself." }, note: "One main clause with a compound predicate: <i>lived … and earned</i> share the subject <i>I</i>." },
  { id: "hound", label: "Doyle: “Mr. Sherlock Holmes, who …”", fn: "declarative",
    src: "{I Mr._s Sherlock_s Holmes_s , {R:non who_ms was_v usually very late in the mornings , save upon those not infrequent occasions {R when_m he_s was_v up all night } } , was_v seated_v at the breakfast table } .",
    free: { 1: "Mr. Sherlock Holmes was usually very late in the mornings, save upon those not infrequent occasions when he was up all night.", 2: "He was up all night on those occasions." },
    note: "A relative clause inside a relative clause: <i>when he was up all night</i> describes <i>occasions</i>." },
  { id: "pride", label: "Austen: “It is a truth …”", fn: "declarative",
    src: "{I It_s is_v a truth universally acknowledged , {N:subject that_m a single man_s in possession of a good fortune must_v be_v in want of a wife } } .",
    note: "<i>It</i> holds the subject’s place; the <i>that</i>-clause is the real subject, moved to the end (some read it as renaming <i>truth</i>)." },
  { id: "gettys", label: "Lincoln: “It is altogether fitting…”", fn: "declarative",
    src: "{I It_s is_v altogether fitting and proper {N:subject that_m we_s should_v do_v this } } .",
    note: "<i>It</i> holds the subject position; the real subject is the <i>that</i>-clause, moved to the end." },
  { id: "book", label: "The book that Huck found was wet.", fn: "declarative",
    src: "{I The book_s {R that_m Huck_s found_v } was_v wet } .", free: { 1: "Huck found the book." } },
  { id: "widow", label: "What the widow wanted was obvious.", fn: "declarative",
    src: "{I {N:subject What_m the widow_s wanted_v } was_v obvious } .", free: { 1: "The widow wanted something." },
    note: "The noun clause is the subject of <i>was</i>; the main clause has no one-word subject." },
  { id: "deep", label: "I think that the man who sold us …", fn: "declarative",
    src: "{I I_s think_v {N:object that_m the man_s {R who_ms sold_v us the raft } knew_v {N:object that_m it_s leaked_v } } } .",
    free: { 2: "The man sold us the raft." }, note: "Three levels: a relative clause and a noun clause inside a noun clause inside the main clause." },
  { id: "jim", label: "Jim kept watch while Huck slept, …", fn: "declarative",
    src: "{I Jim_s kept_v watch {A:time while_m Huck_s slept_v } } , and_c {I the raft_s drifted_v on } ." },
  { id: "whose", label: "The woman whose cabin stood …", fn: "declarative",
    src: "{I The woman_s {R whose_m cabin_s stood_v by the river } gave_v us bread } .", free: { 1: "Her cabin stood by the river." } },
  { id: "zero", label: "The man we met on the shore …", fn: "declarative",
    src: "{I The man_s {R:zero we_s met_v on the shore } was_v a pilot } .", free: { 1: "We met the man on the shore." },
    note: "A zero relative: <i>(whom/that) we met</i>. The marker is left out, but the clause is still dependent." },
  { id: "knew", label: "I knew the raft was gone.", fn: "declarative",
    src: "{I I_s knew_v {N:object,zero the raft_s was_v gone } } .", note: "A zero <i>that</i>: <i>I knew (that) the raft was gone.</i>" },
  { id: "fog", label: "Because the fog was thick, we …", fn: "declarative",
    src: "{I {A:cause Because_m the fog_s was_v thick } , we_s tied_v up at the island } ." },
  { id: "drift", label: "The old raft drifted past …", fn: "declarative",
    src: "{I The old raft_s drifted_v past the sleeping town and slid_v into the fog } .", note: "Long, but one clause: one subject with two verbs (a compound predicate)." },
  { id: "canoe", label: "Did you see where the canoe went?", fn: "interrogative",
    src: "{I Did_v you_s see_v {N:object where_m the canoe_s went_v } } ?", free: { 1: "The canoe went somewhere." } },
  { id: "storm", label: "Tie the raft up before …", fn: "imperative",
    src: "{I:imp Tie_v the raft up {A:time before_m the storm_s breaks_v } } ." },
  { id: "night", label: "What a long night it was!", fn: "exclamatory",
    src: "{I What a long night it_s was_v } !" },
  { id: "lantern", label: "Bring the lantern, and keep …", fn: "imperative",
    src: "{I:imp Bring_v the lantern } , and_c {I:imp keep_v your voice down } ." },
  { id: "watson", label: "Twain: “Miss Watson she kept …”", fn: "declarative",
    src: "{I Miss_s Watson_s she_s kept_v pecking at me } , and_c {I it_s got_v tiresome and lonesome } .",
    note: "<i>Miss Watson she</i> is a dialect doubled subject (standard: <i>Miss Watson kept pecking at me</i>)." },
  { id: "steamboat", label: "If you hear a steamboat, wake me.", fn: "imperative",
    src: "{I:imp {A:condition If_m you_s hear_v a steamboat } , wake_v me } ." },
  { id: "cold", label: "Although the night was cold, …", fn: "declarative",
    src: "{I {A:concession Although_m the night_s was_v cold } , nobody_s lit_v a fire } ." },
  { id: "asked", label: "She asked who had left the gate …", fn: "declarative",
    src: "{I She_s asked_v {N:object who_ms had_v left_v the gate open } } .", free: { 1: "Someone had left the gate open." } }
];
const byId = id => bank.find(b => b.id === id);
const memo = {};
const get = id => memo[id] || (memo[id] = parse(byId(id).src));

// Clause or phrase? Highlighted words (_h): a clause has its own subject and finite verb.
const phraseQuiz = [
  { t: "After_h the_h storm_h , we walked down to the river .", a: "phrase", why: "No verb at all: <i>after</i> is a preposition with the object <i>the storm</i>. A prepositional phrase." },
  { t: "After_h the_h storm_h ended_h , we walked down to the river .", a: "clause", why: "<i>The storm</i> (subject) + <i>ended</i> (finite verb, past tense), opened by the subordinator <i>after</i>: a dependent clause." },
  { t: "I went to the woods to_h live_h deliberately_h .", a: "phrase", why: "<i>To live</i> is an infinitive: it shows no tense and has no subject. Handbooks call this an infinitive phrase; modern grammars call it a non-finite clause." },
  { t: "Hoping_h for_h rain_h , the farmer watched the sky .", a: "phrase", why: "<i>Hoping</i> is a present participle, not a finite verb, and the group has no subject of its own: a participial phrase." },
  { t: "The farmer watched the sky because_h he_h hoped_h for_h rain_h .", a: "clause", why: "<i>He</i> + <i>hoped</i> (past tense): a subject and a finite verb, made dependent by <i>because</i>." },
  { t: "We stayed home because_h of_h the_h fog_h .", a: "phrase", why: "<i>Because of</i> is a two-word preposition; <i>the fog</i> is its object. No verb, so no clause." },
  { t: "The_h chores_h finished_h , Tom ran outside .", a: "phrase", why: "An absolute phrase: a noun plus a participle. <i>Finished</i> here is a participle; it would need <i>were</i> to be a finite verb (<i>The chores were finished</i>)." },
  { t: "Thoreau lived in a house which_h he_h had_h built_h himself .", a: "clause", why: "<i>Which</i> (object) + <i>he</i> (subject) + <i>had built</i> (finite verb phrase): a relative clause." },
  { t: "The raft , drifting_h slowly_h downstream_h , passed the town .", a: "phrase", why: "<i>Drifting</i> is a participle with no subject: a participial phrase describing <i>the raft</i>." },
  { t: "Whoever_h knocks_h will be let in .", a: "clause", why: "<i>Whoever</i> is the subject and <i>knocks</i> the finite verb (present tense, agrees with a singular subject): a noun clause serving as the sentence’s subject." },
  { t: "While_h sleeping_h , Huck dreamed of the river .", a: "phrase", why: "<i>While</i> is followed by a participle, with no subject and no finite verb. Grammarians call this a reduced (elliptical) clause, but by the handbook test it is a phrase: compare <i>while he was sleeping</i>." },
  { t: "I knew that_h the_h raft_h had_h sunk_h .", a: "clause", why: "<i>The raft</i> + <i>had sunk</i>, introduced by <i>that</i>: a noun clause, the object of <i>knew</i>." }
];

const logic = E.logic["eng-clauses"] = { parse, label, short, alone, free, needsRewrite, structure, check, display, tree, without, join, cap, bank, byId, get, phraseQuiz,
  labIds: ["huck", "walden", "hound", "pride", "gettys", "book", "widow", "deep", "jim", "whose", "zero", "knew", "storm"] };

// ---------------- the lab ----------------
L["eng-clauses"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "ecl-wrap");
  E.css("css-eng-clauses", `
.ecl-wrap .ecl-b{font-weight:700;padding:0 1px}
.ecl-wrap .pos-w.c3 .el-uw{outline:1px solid currentColor;outline-offset:1px;border-radius:2px}
.ecl-wrap .ecl-cards{display:grid;gap:10px}
.ecl-wrap .ecl-card{border:1px solid var(--line);border-radius:4px;background:rgba(0,0,0,.2);padding:10px 12px;display:grid;gap:8px}
.ecl-wrap .ecl-card .h{font:600 10.5px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase}
.ecl-wrap .ecl-card .s{font:400 18px/1.45 var(--math);color:var(--text)}
.ecl-wrap .ecl-card .r{font:400 14px/1.45 var(--sans);color:var(--muted)}
.ecl-wrap .ecl-card .r i{font-family:var(--math);color:var(--text)}
.ecl-wrap .ecl-nest{font:400 clamp(15px,1.8vw,18px)/1.6 var(--math);overflow-wrap:anywhere}
.ecl-wrap .ecl-nest .el-nb{max-width:100%}
.ecl-wrap .ecl-nest .el-nk{display:block;text-align:left}
.ecl-wrap .c1{color:var(--amber)} .ecl-wrap .c2{color:var(--cyan)} .ecl-wrap .c3{color:var(--pink)} .ecl-wrap .c4{color:var(--violet)} .ecl-wrap .c5{color:var(--green)}
.ecl-wrap .ecl-q{font:400 clamp(18px,2.2vw,23px)/1.8 var(--math)}
.ecl-wrap .ecl-q .hl{border-bottom:2px dashed var(--amber);color:var(--amber)}`);
  let mode = "find", sel = 0, pickC = -1, picks = {};
  const items = logic.labIds.map(byId);
  const quiz = E.quiz({ items: phraseQuiz, check: (it, v) => it.a === v, render: () => "" });
  const roleC = { s: "c4", v: "c5", m: "c3", ms: "c3" }, roleU = { s: "S", v: "V", m: "MK", ms: "S·MK" };

  function sentence(a, opt = {}){
    const disp = display(a);
    return E.words(disp, { click: true,
      color: x => x.wi < 0 ? (a.clauses[x.ci].type === "I" ? "c1" : "c2") : roleC[x.role] || (x.clause < 0 ? "" : a.clauses[x.clause].type === "I" ? "c1" : "c2"),
      under: x => x.wi >= 0 ? roleU[x.role] || "" : "",
      dim: x => pickC >= 0 && !(x.wi >= 0 ? a.clauses[pickC].all.includes(x.wi) : a.under(x.ci, pickC)),
      title: x => x.wi >= 0 && x.clause >= 0 ? label(a.clauses[x.clause]) : x.wi < 0 ? label(a.clauses[x.ci]) : "joins the clauses" });
  }
  const src = it => { const m = it.label.match(/^([A-Z][a-z]+):/); return it.note ? `<div class="pos-src">${m ? m[1] : "Note"} · <i>${it.note}</i></div>` : ""; };

  function drawFind(){
    const it = items[sel], a = get(it.id), st = structure(a);
    dom.innerHTML = `${src(it)}<div class="pos-text">${sentence(a)}</div>`;
    const c = pickC >= 0 ? a.clauses[pickC] : null, W = i => a.words[i].w;
    k.setRO(E.ro({ title: "Clause finder", big: c ? label(c) : `${a.clauses.length} clause${a.clauses.length > 1 ? "s" : ""}`,
      rows: c ? [
        { label: "Subject", value: c.subj.length ? c.subj.map(W).join(" ") : c.q.includes("imp") ? "(you), understood" : "the noun clause before the verb", c: "c4" },
        { label: "Finite verb", value: c.verb.map(W).join(" "), c: "c5" },
        { label: "Marker", value: c.mark.length ? c.mark.map(W).join(" ") : c.type === "I" ? "none: it is independent" : "none written (zero)", c: "c3" },
        { label: "Inside", value: c.parent < 0 ? "the sentence" : short(a.clauses[c.parent]) + " clause" },
        { label: "Alone", value: c.type === "I" ? "can stand alone" : "cannot stand alone", c: c.type === "I" ? "c1" : "c2" }
      ] : [
        { label: "Independent", value: st.ic, c: "c1" }, { label: "Dependent", value: st.dc, c: "c2" },
        { label: "Deepest level", value: Math.max(...a.clauses.map(c => c.depth)) + 1 }
      ],
      landmark: c && c.type !== "I" ? { big: "Marker → dependent", note: c.mark.length ? `<i>${c.mark.map(W).join(" ")}</i> ties this clause to another one. ${free(a, c.i, it) ? "As a sentence it would read: <i>" + free(a, c.i, it) + "</i>" : ""}` : `No marker is written, but the clause still fills a slot in another clause. On its own: <i>${free(a, c.i, it)}</i>`, hit: true } : null,
      narr: c ? "Tap another word to inspect its clause, or tap outside the clauses to see the whole sentence." : "Every clause has a subject (violet, S) and a finite verb (green, V). Amber brackets mark independent clauses, cyan ones dependent clauses; pink boxes are marker words. Tap a word to inspect its clause." }));
  }

  function drawAlone(){
    const it = items[sel], a = get(it.id), p = picks[sel] || (picks[sel] = {});
    let right = 0, done = 0;
    const cards = a.clauses.map(c => {
      const ans = c.type === "I", got = p[c.i];
      if (got != null) { done++; if (got === ans) right++; }
      const fr = free(a, c.i, it);
      const why = got == null ? "" : ans
        ? `<div class="r">Yes: subject + finite verb and no marker word. ${c.kids.some(d => a.clauses[d].type === "N") ? "It keeps its noun clause, which fills a slot it needs." : ""}</div>`
        : `<div class="r">No: ${c.mark.length ? `the marker <i>${c.mark.map(i => a.words[i].w).join(" ")}</i> makes it depend on another clause` : "it fills a slot (subject, object, modifier) in another clause even with no marker written"}. As a sentence: <i>${fr}</i></div>`;
      return `<div class="ecl-card"><div class="h ${ans ? "c1" : "c2"}">${got == null ? "Clause " + (c.i + 1) : label(c)}</div><div class="s">${E.esc(alone(a, c.i))}</div>
        <div class="pos-quiz">${[[1, "Stands alone"], [0, "Cannot stand alone"]].map(([v, t]) => `<button type="button" data-c="${c.i}" data-v="${v}" class="${got == null ? "" : (!!v === ans ? "right" : (got === !!v ? "wrong" : ""))}">${t}</button>`).join("")}</div>${why}</div>`;
    }).join("");
    dom.innerHTML = `${src(it)}<div class="ecl-cards">${cards}</div>`;
    k.setRO(E.ro({ title: "Stand-alone test", big: `${right} / ${a.clauses.length}`,
      rows: [{ label: "Answered", value: `${done} of ${a.clauses.length}` }, { label: "Independent", value: structure(a).ic, c: "c1" }, { label: "Dependent", value: structure(a).dc, c: "c2" }],
      landmark: done === a.clauses.length ? { big: right === done ? "All correct" : "Check the red ones", note: "A main clause is shown without its removable relative and adverb clauses, so you can hear that it still makes a sentence.", hit: right === done } : null,
      narr: "Read each clause as if it ended with a full stop. A dependent clause leaves the listener waiting: <i>Because the fog was thick.</i> … what happened?" }));
  }

  function drawNest(){
    const it = items[sel], a = get(it.id);
    const tops = a.clauses.filter(c => c.parent < 0);
    const outside = a.words.filter(x => x.clause < 0);
    let html = "";
    a.words.forEach((x, i) => {
      if (x.clause < 0) { html += (x.glue ? "" : " ") + `<span class="el-nw">${E.esc(x.w)}</span>`; return; }
      const top = tops.find(c => c.all.includes(i));
      if (top.from === i) html += " " + E.nest(tree(a, top.i));
    });
    dom.innerHTML = `${src(it)}<div class="ecl-nest">${html}</div>`;
    const depth = Math.max(...a.clauses.map(c => c.depth)) + 1;
    k.setRO(E.ro({ title: "Clauses inside clauses", big: depth === 1 ? "No embedding" : `${depth} levels`,
      rows: a.clauses.map(c => ({ label: "·".repeat(c.depth) + " " + short(c), value: E.esc(join(c.all.map(i => a.words[i])).slice(0, 28)) + (c.all.length > 6 ? "…" : ""), c: c.type === "I" ? "c1" : "c2" })),
      narr: `A dependent clause sits <b>inside</b> the clause it serves: a noun clause in a subject or object slot, a relative clause inside a noun phrase, an adverb clause beside the verb it modifies. ${outside.length > 1 ? "Coordinators and joining punctuation stand outside the clauses they link." : ""}` }));
  }

  function drawQuiz(){
    const it = quiz.item, st = quiz.state;
    dom.innerHTML = `<div class="pos-src">Clause or phrase? · <i>does the underlined group have its own subject and finite verb?</i></div>
      <div class="ecl-q">${E.words(it.t, { color: x => x.tag === "h" ? "c1" : "" })}</div>
      <div class="pos-quiz">${["clause", "phrase"].map(v => `<button type="button" data-q="${v}" class="${st.answered ? (v === it.a ? "right" : v === st.picked ? "wrong" : "") : ""}">${v === "clause" ? "Clause" : "Phrase"}</button>`).join("")}</div>
      ${st.answered ? `<div class="ecl-card"><div class="r">${it.why}</div></div>` : ""}`;
    k.setRO(E.ro({ title: "Clause or phrase?", big: `${quiz.score.right} / ${quiz.score.tries}`,
      rows: [{ label: "Item", value: `${quiz.index + 1} of ${quiz.total}` }],
      landmark: st.answered ? { big: st.correct ? "Right" : "Not quite", note: it.a === "clause" ? "Subject + finite verb = clause." : "No subject–finite verb pair = phrase.", hit: st.correct } : null,
      narr: "A finite verb shows tense and agrees with a subject (<i>ended, hoped, knocks</i>). Infinitives (<i>to live</i>) and participles (<i>hoping, finished</i>) are not finite, so the groups they head are phrases." }));
  }

  function draw(){ ({ find: drawFind, alone: drawAlone, nest: drawNest, quiz: drawQuiz })[mode](); }
  E.on(dom, ".pos-w", el => {
    if (mode !== "find") return;
    const a = get(items[sel].id), x = display(a)[+el.dataset.i];
    const ci = x.wi >= 0 ? x.clause : x.ci;
    pickC = ci === pickC ? -1 : ci; draw();
  });
  E.on(dom, "button[data-c]", el => { (picks[sel] = picks[sel] || {})[+el.dataset.c] = el.dataset.v === "1"; draw(); });
  E.on(dom, "button[data-q]", el => { quiz.pick(el.dataset.q); draw(); });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "quiz") { k.button("Next", () => { quiz.next(); draw(); }); k.button("Reset score", () => { quiz.reset(); draw(); }, "btn ghost"); return; }
    k.select("Sentence", items.map((s, i) => [i, s.label]), sel, v => { sel = +v; pickC = -1; draw(); });
    if (mode === "alone") k.button("Clear answers", () => { picks[sel] = {}; draw(); }, "btn ghost");
  }
  k.modes([["find", "Find"], ["alone", "Alone?"], ["nest", "Nesting"], ["quiz", "Phrase?"]], mode, m => { mode = m; pickC = -1; controls(); draw(); });
  controls(); draw();
};
})();
