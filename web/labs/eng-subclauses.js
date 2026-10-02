/* ============ Labs: English · Relative, Noun & Adverb Clauses (clause-job tester) ============
   Uses the clause-analysis format and parser from eng-clauses.js (EngLab.logic["eng-clauses"]). */
(function(){
const L = window.LABS, E = window.EngLab, C = E.logic["eng-clauses"];
const JOB = { N: "n", R: "adj", A: "adv" };
const JOBNAME = { n: "Noun clause", adj: "Relative (adjective) clause", adv: "Adverb clause" };
const COL = { N: "c1", I: "c2", R: "c3", A: "c4" };

// 1. Substitution test. v: fits (grammatical, same job) · changes (grammatical, but the job is lost) · breaks (ungrammatical)
const jobs = [
  { label: "I know that the river will rise.", src: "{I I_s know_v {N:object that_m the river_s will_v rise_v } } .",
    n: { t: "I know it.", v: "fits", why: "<i>It</i> fills the object slot after <i>know</i>, exactly as the clause did." },
    adj: { t: "I know high.", v: "breaks", why: "<i>Know</i> needs an object here, and an adjective cannot be an object." },
    adv: { t: "I know then.", v: "changes", why: "Grammatical, but <i>then</i> only says when; the sentence no longer says what you know." } },
  { label: "What the widow wanted was obvious.", id: "widow",
    n: { t: "Something was obvious.", v: "fits", why: "A noun phrase can be the subject of <i>was</i>, so the clause is doing a noun’s job: subject." },
    adj: { t: "Tidy was obvious.", v: "breaks", why: "An adjective cannot be the subject of a verb." },
    adv: { t: "Then was obvious.", v: "breaks", why: "An adverb cannot be the subject of a verb." } },
  { label: "She asked who had left the gate …", id: "asked",
    n: { t: "She asked something.", v: "fits", why: "The clause is the object of <i>asked</i>: an indirect (reported) question." },
    adj: { t: "She asked careless.", v: "breaks", why: "An adjective cannot be the object of <i>asked</i>." },
    adv: { t: "She asked then.", v: "changes", why: "Grammatical, but now <i>asked</i> has no object: we no longer know what she asked." } },
  { label: "The trouble was that the raft …", src: "{I The trouble_s was_v {N:complement that_m the raft_s leaked_v } } .",
    n: { t: "The trouble was this.", v: "fits", why: "A pronoun fills the slot after <i>was</i>: the clause is a subject complement that names the trouble." },
    adj: { t: "The trouble was serious.", v: "changes", why: "Grammatical: <i>serious</i> describes the trouble. But the clause said what the trouble was, a noun’s job." },
    adv: { t: "The trouble was then.", v: "breaks", why: "<i>Then</i> cannot name what the trouble was, and a bare <i>then</i> after <i>was</i> is not idiomatic." } },
  { label: "The book that Huck found was wet.", id: "book",
    n: { t: "The book something was wet.", v: "breaks", why: "Two noun phrases cannot sit side by side as one subject here." },
    adj: { t: "The old book was wet.", v: "fits", why: "An adjective describes <i>book</i> and tells which one. It moves in front of the noun, but the job is the same." },
    adv: { t: "The book then was wet.", v: "changes", why: "<i>Then</i> attaches to <i>was</i> (at that time); it no longer tells which book." } },
  { label: "The woman whose cabin stood …", id: "whose",
    n: { t: "The woman something gave us bread.", v: "breaks", why: "There is no slot for a second noun phrase after <i>woman</i>." },
    adj: { t: "The kind woman gave us bread.", v: "fits", why: "An adjective describes <i>woman</i>, as the clause did." },
    adv: { t: "The woman then gave us bread.", v: "changes", why: "<i>Then</i> modifies <i>gave</i>; nothing describes the woman any more." } },
  { label: "Thoreau lived in a house which …", src: "{I Thoreau_s lived_v in a house {R which_m he_s had_v built_v himself } } .", free: { 1: "He had built the house himself." },
    n: { t: "Thoreau lived in a house something.", v: "breaks", why: "<i>A house something</i> is not a noun phrase." },
    adj: { t: "Thoreau lived in a small house.", v: "fits", why: "An adjective describes <i>house</i>: the clause is adjectival." },
    adv: { t: "Thoreau lived in a house then.", v: "changes", why: "<i>Then</i> says when he lived there; it does not describe the house." } },
  { label: "The man we met on the shore …", id: "zero",
    n: { t: "The man something was a pilot.", v: "breaks", why: "No slot for a noun after <i>man</i>." },
    adj: { t: "The old man was a pilot.", v: "fits", why: "The clause describes <i>man</i>. It has no relative word (a zero relative), but it is still a relative clause." },
    adv: { t: "The man then was a pilot.", v: "changes", why: "<i>Then</i> modifies <i>was</i>; it no longer tells which man." } },
  { label: "Because the fog was thick, we …", id: "fog",
    n: { t: "Something, we tied up at the island.", v: "breaks", why: "A noun phrase cannot hang in front of a complete clause like this." },
    adj: { t: "Thick, we tied up at the island.", v: "breaks", why: "A fronted adjective would describe <i>we</i>; <i>thick</i> cannot, and it gives no reason." },
    adv: { t: "For that reason, we tied up at the island.", v: "fits", why: "An adverbial of reason replaces the clause: it modifies the whole main clause, telling why." } },
  { label: "Jim waited where the river bends.", src: "{I Jim_s waited_v {A:place where_m the river_s bends_v } } .",
    n: { t: "Jim waited something.", v: "breaks", why: "<i>Waited</i> does not take an object like <i>something</i> here." },
    adj: { t: "Jim waited patient.", v: "changes", why: "Just grammatical: <i>patient</i> describes Jim, not the place." },
    adv: { t: "Jim waited there.", v: "fits", why: "<i>There</i> replaces the clause and says where: an adverb clause of place." } },
  { label: "When the storm broke, we ran …", src: "{I {A:time When_m the storm_s broke_v } , we_s ran_v for the woods } .",
    n: { t: "Something, we ran for the woods.", v: "breaks", why: "A bare noun phrase cannot open the sentence this way." },
    adj: { t: "Wet, we ran for the woods.", v: "changes", why: "Grammatical: <i>wet</i> describes <i>we</i>. It no longer says when." },
    adv: { t: "Then we ran for the woods.", v: "fits", why: "<i>Then</i> replaces the clause: an adverb clause of time." } },
  { label: "If the river rises, the island …", src: "{I {A:condition If_m the river_s rises_v } , the island_s will_v flood_v } .",
    n: { t: "Something, the island will flood.", v: "breaks", why: "A bare noun phrase cannot open the sentence this way." },
    adj: { t: "Muddy, the island will flood.", v: "changes", why: "<i>Muddy</i> would describe the island; the condition is gone." },
    adv: { t: "In that case, the island will flood.", v: "fits", why: "An adverbial of condition replaces it: <i>in that case</i> = <i>if the river rises</i>." } }
];
jobs.forEach(j => { if (j.id) { const b = C.byId(j.id); j.src = b.src; j.free = b.free; } });
const target = a => a.clauses.find(c => c.type !== "I");

// 2. Restrictive / nonrestrictive commas, that / which.
const rel = [
  { label: "The raft that we built …", pre: "The raft", pron: "that", rest: "we built", post: "leaked.", swap: true,
    res: "Restrictive: of several rafts, the one we built leaked.", non: "Nonrestrictive: there is one raft; the clause adds, in passing, that we built it." },
  { label: "My brother who lives in St. Louis …", pre: "My brother", pron: "who", rest: "lives in St. Louis", post: "sent a letter.",
    res: "Restrictive: I have more than one brother, and I mean the one in St. Louis.", non: "Nonrestrictive: I have one brother; he happens to live in St. Louis." },
  { label: "The passengers who had tickets …", pre: "The passengers", pron: "who", rest: "had tickets", post: "boarded the steamboat.",
    res: "Restrictive: only the passengers with tickets boarded.", non: "Nonrestrictive: all the passengers boarded, and all of them had tickets." },
  { label: "Mr. Sherlock Holmes, who …", pre: "Mr. Sherlock Holmes", pron: "who", rest: "was usually very late in the mornings", post: "was seated at the breakfast table.", unique: true,
    res: "Without commas the clause would pick out one Sherlock Holmes from several. A name already identifies him, so the clause needs commas (as Doyle has it).", non: "Nonrestrictive: the name identifies him; the clause is extra information." },
  { label: "The Mississippi, which flows …", pre: "The Mississippi", pron: "which", rest: "flows past Hannibal", post: "floods in the spring.", unique: true, swap: true,
    res: "Without commas the clause would pick out one Mississippi among several. There is only one, so the clause is nonrestrictive.", non: "Nonrestrictive: there is only one Mississippi; the clause adds where it flows." },
  { label: "The islands which lie below …", pre: "The islands", pron: "which", rest: "lie below the town", post: "are wooded.", swap: true,
    res: "Restrictive: only the islands below the town are wooded.", non: "Nonrestrictive: all the islands lie below the town, and all are wooded." },
  { label: "We met Huck’s father, who …", pre: "We met Huck’s father", pron: "who", rest: "had just come back to town", post: ".", unique: true,
    res: "Without a comma the clause would pick out one of Huck’s fathers. He has one, so it is nonrestrictive.", non: "Nonrestrictive: one comma before the clause, and the period closes it." }
];
function punctuate(it, commas, pron = it.pron){
  const end = it.post === ".";
  const text = commas ? `${it.pre}, ${pron} ${it.rest}${end ? "." : ", " + it.post}` : `${it.pre} ${pron} ${it.rest}${end ? "." : " " + it.post}`;
  let status = "ok", msg = commas ? it.non : it.res;
  if (commas && pron === "that") { status = "bad"; msg = "<i>That</i> cannot introduce a nonrestrictive clause. Use <i>which</i> (or <i>who</i> for people), or remove the commas."; }
  else if (!commas && it.unique) status = "odd";
  else if (!commas && pron === "which") { status = "note"; msg = it.res + " Restrictive <i>which</i> is standard in British English and common in edited American prose, but most US style guides prefer <i>that</i> here."; }
  return { text, status, msg };
}

// 3. Adverb clauses: meaning, marker, position, comma.
const adv = [
  { meaning: "time", sub: "when", dc: "the sun_s went_v down", main: "we_s pushed_v off" },
  { meaning: "time", sub: "until", dc: "the fog_s lifted_v", main: "we_s waited_v on the bank" },
  { meaning: "place", sub: "where", dc: "the river_s narrows_v", main: "the water_s runs_v fast" },
  { meaning: "cause", sub: "because", dc: "the current_s was_v strong", main: "we_s stayed_v near the shore" },
  { meaning: "condition", sub: "if", dc: "the river_s rises_v", main: "the island_s will_v flood_v" },
  { meaning: "condition", sub: "unless", dc: "the wind_s changes_v", main: "we_s will_v reach_v Cairo by morning" },
  { meaning: "concession", sub: "although", dc: "the night_s was_v cold", main: "nobody_s lit_v a fire", comma: true },
  { meaning: "contrast", sub: "whereas", dc: "Tom_s loved_v adventure", main: "Huck_s wanted_v only peace", comma: true },
  { meaning: "purpose", sub: "so that", dc: "nobody_s would_v see_v the fire", main: "we_s kept_v the lantern low" },
  { meaning: "result", fixed: "{I The fog_s was_v so thick {A:result that_m we_s lost_v the shore } } .", why: "A result clause follows <i>so</i> + adjective (or <i>such</i> + noun) and cannot move to the front." },
  { meaning: "comparison", fixed: "{I The raft_s moved_v more slowly {A:comparison than_m the canoe_s did_v } } .", why: "A comparative clause follows the comparative word (<i>more slowly … than</i>) and cannot move to the front." }
];
function adverb(it, pos){
  if (it.fixed) return pos === "front" ? { ok: false, src: it.fixed, rule: it.why } : { ok: true, src: it.fixed, rule: "Fixed position after the word it completes; no comma." };
  const m = it.sub.split(" ").map(w => w + "_m").join(" ");
  const dcl = `{A:${it.meaning} ${m} ${it.dc} }`;
  if (pos === "front") return { ok: true, src: `{I ${dcl} , ${it.main} } .`, rule: "Introductory adverb clause: comma after it. (Writers sometimes drop it after a very short clause, but the comma is never wrong.)" };
  return { ok: true, src: `{I ${it.main}${it.comma ? " ," : ""} ${dcl} } .`, rule: it.comma ? `A closing ${it.meaning} clause usually takes a comma: it adds a contrast rather than limiting the main clause.` : "Closing adverb clause: no comma, because it limits the main clause (when, where, why, on what condition)." };
}
const words = a => a.words.map((x, i) => i ? x : Object.assign({}, x, { w: C.cap(x.w) }));

const logic = E.logic["eng-subordinate"] = { jobs, rel, adv, punctuate, adverb, target, JOB, JOBNAME };

// ---------------- the lab ----------------
L["eng-subordinate"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "esc-wrap");
  E.css("css-eng-subclauses", `
.esc-wrap .esc-tests{display:grid;gap:8px}
.esc-wrap .esc-test{display:grid;grid-template-columns:22px minmax(0,1fr);gap:2px 8px;align-items:baseline;border:1px solid var(--line);border-radius:4px;background:rgba(0,0,0,.2);padding:7px 10px}
.esc-wrap .esc-test .mk{font:700 15px/1 var(--sans)}
.esc-wrap .esc-test .s{font:400 18px/1.45 var(--math);color:var(--text)}
.esc-wrap .esc-test .r{grid-column:2;font:400 13.5px/1.45 var(--sans);color:var(--muted)}
.esc-wrap .y{color:var(--green)} .esc-wrap .n{color:var(--red)} .esc-wrap .h{color:var(--amber)}
.esc-wrap .esc-big{font:400 clamp(19px,2.3vw,24px)/1.6 var(--math);color:var(--text)}
.esc-wrap .esc-big b{font-weight:600;color:var(--pink)}
.esc-wrap .esc-note{font:400 14px/1.45 var(--sans);color:var(--muted);border-left:2px solid var(--line-2);padding-left:10px}
.esc-wrap .esc-note.bad{border-color:var(--red)} .esc-wrap .esc-note.odd,.esc-wrap .esc-note.note{border-color:var(--amber)}`);
  let mode = "job", ji = 0, tried = {}, ri = 0, commas = false, pron = null, ai = 0, pos = "front";
  const mark = { fits: ["✓", "y"], breaks: ["✗", "n"], changes: ["~", "h"] };
  const color = a => x => x.clause < 0 ? "" : /^ms?$/.test(x.role) ? "c5" : COL[a.clauses[x.clause].type];

  function drawJob(){
    const it = jobs[ji], a = C.parse(it.src), tc = target(a), job = JOB[tc.type], t = tried[ji] || (tried[ji] = {});
    const found = t[job];
    const sent = E.words(words(a), found ? { color: color(a) } : { sel: new Set(tc.all) });
    const rows = ["n", "adj", "adv"].filter(s => t[s]).map(s => `<div class="esc-test"><span class="mk ${mark[it[s].v][1]}">${mark[it[s].v][0]}</span><span class="s">${it[s].t}</span><span class="r"><b>${it[s].v}</b> · ${it[s].why}</span></div>`).join("");
    dom.innerHTML = `<div class="pos-src">Clause-job tester · <i>replace the outlined clause and listen</i></div><div class="pos-text">${sent}</div>
      <div class="pos-quiz">${[["n", "Noun: it / something"], ["adj", "Adjective"], ["adv", "Adverb: then / there / so"]].map(([s, l]) => `<button type="button" data-s="${s}" class="${t[s] ? (s === job ? "right" : "wrong") : ""}">${l}</button>`).join("")}</div>
      <div class="esc-tests">${rows}</div>`;
    k.setRO(E.ro({ title: "What job does the clause do?", big: found ? JOBNAME[job] : "?",
      rows: found ? [{ label: "Marker", value: tc.mark.length ? tc.mark.map(i => a.words[i].w).join(" ") : "none (zero)", c: "c5" }, { label: "Job", value: tc.type === "R" ? "describes a noun" : tc.type === "A" ? tc.q[0] : tc.q[0] === "zero" ? "object" : tc.q[0], c: COL[tc.type] }] : [{ label: "Tests tried", value: Object.keys(t).length + " of 3" }],
      landmark: found ? { big: "The test that fits names the job", note: job === "n" ? "Noun clauses fill noun slots: subject, object, complement, appositive." : job === "adj" ? "Relative clauses follow the noun they describe; one adjective can replace them." : "Adverb clauses answer when, where, why, how, on what condition, in spite of what.", hit: true } : null,
      narr: "Only one substitution keeps both the grammar and the job. <b>✓</b> fits, <b>~</b> grammatical but the meaning’s role is lost, <b>✗</b> ungrammatical." }));
  }

  function drawRel(){
    const it = rel[ri], p = pron || it.pron, r = punctuate(it, commas, p);
    const shown = E.esc(r.text).replace(E.esc(`${p} ${it.rest}`), `<b>${p} ${E.esc(it.rest)}</b>`);
    dom.innerHTML = `<div class="pos-src">Restrictive or nonrestrictive? · <i>toggle the commas and read the meaning</i></div>
      <div class="esc-big">${shown}</div><div class="esc-note ${r.status}">${r.msg}</div>`;
    k.setRO(E.ro({ title: "Commas and relative clauses", big: commas ? "Nonrestrictive" : "Restrictive",
      rows: [{ label: "Commas", value: commas ? (it.post === "." ? "one, before the clause" : "a pair, around the clause") : "none" }, { label: "Relative word", value: p, c: "c5" },
        { label: "Verdict", value: { ok: "standard", note: "standard (style note)", odd: "odd meaning", bad: "error" }[r.status], c: r.status === "ok" ? "c2" : r.status === "bad" ? "" : "c1" }],
      landmark: { big: commas ? "Extra information" : "Identifies which one", note: commas ? "Remove the clause and the sentence still points to the same thing." : "Remove the clause and you no longer know which one is meant.", hit: r.status === "ok" || r.status === "note" },
      narr: "Restrictive (essential) clauses take no commas; nonrestrictive ones are set off. In US usage <i>that</i> is restrictive only, and <i>which</i> is preferred for nonrestrictive clauses about things." }));
  }

  function drawAdv(){
    const it = adv[ai], r = adverb(it, pos), a = C.parse(r.src), dcl = a.clauses.find(c => c.type === "A");
    dom.innerHTML = `<div class="pos-src">Adverb clauses · <i>${it.meaning}</i></div><div class="pos-text">${E.words(words(a), { color: color(a) })}</div>
      <div class="esc-note ${r.ok ? "" : "bad"}">${r.ok ? r.rule : "Cannot move: " + r.rule}</div>`;
    k.setRO(E.ro({ title: "Adverb clause", big: it.meaning,
      rows: [{ label: "Marker", value: dcl.mark.map(i => a.words[i].w).join(" "), c: "c5" }, { label: "Position", value: !r.ok ? "end only" : pos === "front" ? "before the main clause" : "after the main clause" }, { label: "Comma", value: a.words.some(x => x.w === ",") ? "yes" : "no" }],
      narr: "Adverb clauses modify a verb, adjective, adverb or the whole main clause. Most can move; the comma depends on where they stand and what they add." }));
  }

  function draw(){ ({ job: drawJob, rel: drawRel, adv: drawAdv })[mode](); }
  E.on(dom, "button[data-s]", el => { (tried[ji] = tried[ji] || {})[el.dataset.s] = true; draw(); });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "job") { k.select("Sentence", jobs.map((s, i) => [i, s.label]), ji, v => { ji = +v; draw(); }); k.button("Reset", () => { tried[ji] = {}; draw(); }, "btn ghost"); }
    if (mode === "rel") {
      k.select("Sentence", rel.map((s, i) => [i, s.label]), ri, v => { ri = +v; pron = null; commas = false; controls(); draw(); });
      k.check("Commas", commas, v => { commas = v; draw(); });
      if (rel[ri].swap) k.select("Relative word", [["that", "that"], ["which", "which"]], pron || rel[ri].pron, v => { pron = v; draw(); });
    }
    if (mode === "adv") {
      k.select("Meaning", adv.map((s, i) => [i, `${s.meaning}: ${s.sub || (s.meaning === "result" ? "so … that" : "than")}`]), ai, v => { ai = +v; draw(); });
      k.select("Position", [["front", "Before main clause"], ["end", "After main clause"]], pos, v => { pos = v; draw(); });
    }
  }
  k.modes([["job", "Job test"], ["rel", "Commas"], ["adv", "Adverb clauses"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
