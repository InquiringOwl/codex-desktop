/* ============ Labs: English · Commas (comma placer + name the rule) ============
   This file also holds the shared punctuation-join engine (logic.join, logic.segs, logic.render) used by
   eng-fragments.js and eng-punctuation.js: one place decides what may stand between two parts
   (independent clause, dependent clause, phrase, noun phrase, list). It loads first (alphabetical). */
(function(){
const L = window.LABS, E = window.EngLab;

// ---------------- shared join engine ----------------
// A part: { t: text as it stands mid-sentence (capitalised only if a proper noun or I), k: kind, comma?, open?, end? }
//   k: ic independent clause · dc dependent clause · phr phrase with no finite verb · np noun phrase (appositive)
//      list series of noun phrases · pred predicate with no subject
//   comma: true when the part, attached after a clause, is nonessential and takes a comma
//   open: an independent-looking clause that ends in a verb or preposition still waiting for its object
// A join: "period" "semi" "colon" "dash" "comma" "none" "cc:<conj>" "adv:<adverb>" (; adverb ,) "advc:<adverb>" (, adverb ,)
const CC = { and: "add", but: "contrast", yet: "contrast", or: "choice", nor: "choice", for: "cause", so: "result" };
const ADV = { however: "contrast", nevertheless: "contrast", therefore: "result", consequently: "result", thus: "result", moreover: "add", meanwhile: "time", instead: "contrast", otherwise: "choice" };
const NAME = { ic: "an independent clause", dc: "a dependent clause", phr: "a phrase with no finite verb", np: "a noun phrase", list: "a list", pred: "a predicate with no subject" };
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const pj = j => { const i = j.indexOf(":"); return i < 0 ? { k: j, w: "" } : { k: j.slice(0, i), w: j.slice(i + 1) }; };
const full = p => p.k === "ic" && !p.open;

// Segments of the joined sentence: r = "a" | "j" (the inserted mark or connector) | "w" (connector word) | "b" | "end"
function segs(a, j, b){
  const { k, w } = pj(j), end = b.end || ".", A = cap(a.t);
  const S = (...x) => x.filter(s => s[0] !== "");
  const mk = { period: ". ", semi: "; ", colon: ": ", dash: "—", comma: ", ", none: " " };
  if (k in mk) return S([A, "a"], [mk[k], "j"], [k === "period" ? cap(b.t) : b.t, "b"], [end, "end"]);
  if (k === "cc") return S([A, "a"], [", ", "j"], [w, "w"], [" ", ""], [b.t, "b"], [end, "end"]);
  if (k === "adv") return S([A, "a"], ["; ", "j"], [w, "w"], [", ", "j"], [b.t, "b"], [end, "end"]);
  if (k === "advc") return S([A, "a"], [", ", "j"], [w, "w"], [", ", "j"], [b.t, "b"], [end, "end"]);
  throw new Error("unknown join " + j);
}
const render = (a, j, b) => segs(a, j, b).map(s => s[0]).join("");

// Is this join correct? → { ok, kind: ok | splice | fused | fragment | misuse, why }
function join(a, j, b, rel){
  const { k, w } = pj(j), both = full(a) && full(b);
  const R = (ok, kind, why) => ({ ok, kind, why });
  const frag = !full(a) ? a : b, lead = a.k !== "ic";
  if (k === "period") return both ? R(true, "ok", "Two complete sentences, each with its own subject and finite verb.")
    : R(false, "fragment", a.open ? "The first part ends on a verb or preposition that still needs its object, so neither part is a sentence." : `A period leaves ${NAME[frag.k]} standing alone: that is a fragment.`);
  if (k === "semi") return both ? R(true, "ok", "A semicolon joins two closely related independent clauses as equals.")
    : R(false, "misuse", `A semicolon needs an independent clause on both sides; here one side is ${a.open ? "an unfinished clause" : NAME[frag.k]}.`);
  if (k === "adv") return both ? R(true, "ok", `Semicolon, conjunctive adverb (${w}), comma: the adverb shows the link, the semicolon does the joining.`)
    : R(false, "misuse", `“; ${w},” joins two independent clauses; here one side is ${NAME[frag.k]}.`);
  if (k === "advc") return both ? R(false, "splice", `${cap(w)} is a conjunctive adverb, not a conjunction: with commas alone the two clauses are still spliced. Use “; ${w},”.`)
    : R(false, "misuse", `${cap(w)} cannot join ${NAME[frag.k]} to a clause.`);
  if (k === "cc") return both ? R(true, "ok", `Comma + coordinating conjunction (${w}): the standard join for two independent clauses.`)
    : R(false, "misuse", `“, ${w}” joins two independent clauses; here one side is ${NAME[frag.k]}, so the halves are not equal.`);
  if (k === "comma") {
    if (both) return R(false, "splice", "Comma splice: a comma alone cannot join two independent clauses.");
    if (a.open) return R(false, "misuse", "No comma between a verb or preposition and its object.");
    if (!lead) {
      if (b.k === "list") return R(false, "misuse", "After a comma the list reads as more items in a series; introduce it with a colon or a dash.");
      if (b.k === "np") return R(true, "ok", "A comma sets off a closing appositive: correct, and the quietest choice.");
      if (b.k === "pred") return R(false, "misuse", "No comma between the two verbs of a compound predicate (one subject, two verbs).");
      return b.comma ? R(true, "ok", `A comma before ${NAME[b.k]} that adds nonessential information.`) : R(false, "misuse", `No comma before ${NAME[b.k]} that is essential to the meaning.`);
    }
    if (b.k === "ic" && !b.open) return R(true, "ok", `A comma after an introductory element (${NAME[a.k]}) before the main clause.`);
    return R(false, "fragment", "Neither part is an independent clause.");
  }
  if (k === "none") {
    if (both) return R(false, "fused", "Fused (run-on) sentence: two independent clauses with nothing between them.");
    if (a.open) return (b.k === "list" || b.k === "np") ? R(true, "ok", "No mark: the list is the object of the verb, so nothing comes between them.") : R(false, "fragment", "The clause is still unfinished.");
    if (!lead) {
      if (b.k === "list" || b.k === "np") return R(false, "misuse", "Run straight on, the closing phrase has nothing to introduce it; use a colon, a dash or (for one appositive) a comma.");
      return b.comma ? R(false, "misuse", `${cap(NAME[b.k])} that adds nonessential information is set off with a comma.`) : R(true, "ok", b.k === "pred" ? "One subject with two verbs: a compound predicate, no comma." : `${cap(NAME[b.k])} essential to the meaning follows the clause without a comma.`);
    }
    if (b.k === "ic") return R(false, "misuse", `An introductory element (${NAME[a.k]}) is followed by a comma before the main clause.`);
    return R(false, "fragment", "Neither part is an independent clause.");
  }
  if (k === "colon") {
    if (!full(a)) return R(false, "misuse", a.open ? "No colon after a verb or preposition: the list is its object, so no mark at all." : "A colon must follow a complete independent clause.");
    if (b.k === "list" || b.k === "np") return R(true, "ok", "After a complete clause, a colon introduces the list or appositive it promised.");
    if (b.k === "ic") return rel === "explain" ? R(true, "ok", "A colon between clauses says the second explains or illustrates the first.")
      : R(false, "misuse", "A colon promises that the second clause explains the first; this one does not, so use a semicolon or a period.");
    return R(false, "misuse", "A colon introduces a list, an appositive, a quotation or an explaining clause, not a dependent clause or phrase.");
  }
  if (k === "dash") {
    if (!full(a)) return R(false, "misuse", a.open ? "No dash between a verb and its object." : "A dash after a fragment does not make it a sentence.");
    if (b.k === "list" || b.k === "np") return R(true, "ok", "A dash introduces the list or appositive with more force than a colon, and less formality.");
    if (b.k === "ic") return R(true, "ok", "A dash between clauses is correct but informal: an abrupt break. Formal prose usually prefers a semicolon or colon.");
    return b.comma ? R(true, "ok", "A dash sets off the closing phrase with emphasis.") : R(false, "misuse", `A dash would cut off ${NAME[b.k]} that the sentence needs.`);
  }
  throw new Error("unknown join " + j);
}

// ---------------- comma rules ----------------
const RULES = {
  cc:    { n: 1, c: "c1", name: "Compound sentence", why: "Before a coordinating conjunction (<i>and, but, or, nor, for, so, yet</i>) that joins two independent clauses." },
  intro: { n: 2, c: "c2", name: "Introductory element", why: "After an introductory clause, phrase or word, before the main clause." },
  ser:   { n: 3, c: "c3", name: "Series", why: "Between three or more items in a series." },
  adj:   { n: 4, c: "c3", name: "Coordinate adjectives", why: "Between coordinate adjectives: <i>and</i> fits between them and they can be reversed." },
  nr:    { n: 5, c: "c4", name: "Nonrestrictive element", why: "Around a nonrestrictive (nonessential) clause, phrase or appositive: a pair of commas, unless the sentence ends first." },
  par:   { n: 6, c: "c4", name: "Parenthetical expression", why: "Around transitional and parenthetical words, <i>yes/no</i>, tag questions and contrasted elements." },
  addr:  { n: 6, c: "c5", name: "Direct address", why: "Around the name or title of the person spoken to." },
  quo:   { n: 7, c: "c5", name: "Quotation", why: "Between a quotation and its speech tag (<i>he said</i>); in US style the comma goes inside the closing quotation mark." },
  date:  { n: 8, c: "c5", name: "Date", why: "Between day and year in a month-day-year date, and after the year when the sentence goes on." },
  place: { n: 8, c: "c5", name: "Address / place", why: "Between city and state or country, and after the state when the sentence goes on." }
};
const RULE_BTNS = [[1, "1 · Compound"], [2, "2 · Introductory"], [3, "3 · Series"], [4, "4 · Coord. adjectives"], [5, "5 · Nonrestrictive"], [6, "6 · Parenthetical / address"], [7, "7 · Quotation"], [8, "8 · Dates & places"], [0, "No comma here"]];
const MISUSE = {
  sv: "Never put a single comma between a subject and its verb.",
  after: "The comma goes before the coordinating conjunction, never after it.",
  cp: "No comma between the two verbs of a compound predicate: there is only one subject.",
  res: "No commas around a restrictive (essential) clause: it identifies which one is meant.",
  cum: "No comma between cumulative adjectives: <i>and</i> does not fit between them and they cannot be reversed.",
  adjn: "No comma between the last adjective and its noun.",
  none: "No rule calls for a comma here."
};
const STYLES = [["either", "Either style"], ["cmos", "Chicago / MLA"], ["ap", "AP"]];

// Sentences. Word tokens separated by spaces; ",code" = a comma in the gap after the previous word
// (flag ~ optional, * serial comma: Chicago/MLA yes, AP no, ! serial comma every style needs);
// "^code" = a comma here would be that misuse; "~" inside a word keeps two words in one chip.
const SENT = [
  { label: "When the fog lifted…", src: "When the fog lifted ,intro the boats ^sv left the harbor." },
  { label: "Scrooge hated Christmas…", src: "Scrooge hated Christmas ,cc but ^after his nephew loved it." },
  { label: "The ship sailed…", src: "The ship sailed ,cc~ and the crew sang." },
  { label: "Meg, Jo, Beth and Amy…", src: "Meg ,ser Jo ,ser Beth ,ser* and Amy ^sv sat by the fire." },
  { label: "Breakfast was tea…", src: "Breakfast was tea ,ser toast ,ser! and bread and butter." },
  { label: "A cold damp fog…", src: "A cold ,adj damp fog hung over the old ^cum stone ^adjn bridge." },
  { label: "Marley, who had died…", src: "Marley ,nr who had died seven years earlier ,nr had been Scrooge’s partner." },
  { label: "The man who signed…", src: "The man ^res who signed the register ^sv was Scrooge." },
  { label: "Ishmael, the narrator…", src: "Ishmael ,nr the narrator ,nr signs on to a whaling ship." },
  { label: "The plan, however…", src: "The plan ,par however ,par came too late." },
  { label: "Scrooge saw a face…", src: "Scrooge saw a face ,par not a door knocker." },
  { label: "You saw the ghost…", src: "You saw the ghost ,par didn’t you?" },
  { label: "Yes, uncle…", src: "Yes ,par uncle ,addr I heard you." },
  { label: "“Come in, Bob,”…", src: "“Come in ,addr Bob ,quo ”~said the old man." },
  { label: "Scrooge muttered…", src: "Scrooge muttered ,quo “Humbug.”" },
  { label: "On July 4, 1776…", src: "On July 4 ,date 1776 ,date Congress approved the Declaration." },
  { label: "Talbot County, Maryland…", src: "Douglass was born in Talbot County ,place Maryland ,place in 1818." },
  { label: "In 1843…", src: "In 1843 ,intro~ Dickens published his Christmas story." },
  { label: "Huck slipped out…", src: "Huck slipped out of the window ^cp and climbed down the tree." }
];

function parse(src){
  const words = [], commas = {}, misuse = {};
  src.split(" ").forEach(t => {
    if (t[0] === ",") { const m = t.slice(1).match(/^([a-z]+)([~*!]?)$/); commas[words.length - 1] = { code: m[1], flag: m[2] }; }
    else if (t[0] === "^") misuse[words.length - 1] = t.slice(1);
    else words.push(t.replace(/~/g, " "));
  });
  return { words, commas, misuse };
}
// What the style expects in a gap that has a comma in the answer: "req" | "opt" | "no"
function expect(c, style){
  if (!c) return "no";
  if (c.flag === "~") return "opt";
  if (c.flag === "*") return style === "cmos" ? "req" : style === "ap" ? "no" : "opt";
  return "req";
}
const STYLE_NOTE = { "*": "Serial (Oxford) comma: Chicago and MLA require it; AP omits it in a simple series. Both are correct in their own style.",
  "!": "Here even AP uses the serial comma, because the last item contains <i>and</i> (<i>bread and butter</i>): without it the items blur.",
  "~": "Optional: the clause or phrase is short, so the comma may be left out (Chicago and AP both allow this)." };

function check(item, on, style){
  const p = parse(item.src), gaps = [];
  for (let g = 0; g < p.words.length - 1; g++) {
    const c = p.commas[g], ex = expect(c, style), placed = on.has(g);
    let state = "", why = "";
    if (placed && ex !== "no") { state = "ok"; why = RULES[c.code].why + (STYLE_NOTE[c.flag] ? " " + STYLE_NOTE[c.flag] : ""); }
    else if (placed) { state = "bad"; why = c ? "AP style omits the serial comma before the conjunction in a simple series (Chicago and MLA would keep it)." : MISUSE[p.misuse[g] || "none"]; }
    else if (ex === "req") { state = "miss"; why = RULES[c.code].why + (c.flag === "*" ? " Chicago and MLA require the serial comma." : c.flag === "!" ? " " + STYLE_NOTE["!"] : ""); }
    else if (ex === "opt") { state = "opt"; why = STYLE_NOTE[c.flag]; }
    gaps.push({ g, state, why, code: c && ex !== "no" ? c.code : null });
  }
  const n = s => gaps.filter(x => x.state === s).length;
  return { gaps, right: n("ok"), wrong: n("bad"), missing: n("miss"), ok: !n("bad") && !n("miss") };
}
const answer = (item, style) => { const p = parse(item.src); return new Set(Object.keys(p.commas).map(Number).filter(g => expect(p.commas[g], style) !== "no")); };
// Display tokens (for EngLab.words) with the commas in `on` inserted; tag = rule code of each comma
function tokens(item, on, extra){
  const p = parse(item.src), out = [];
  p.words.forEach((w, g) => {
    out.push({ w, glue: g === 0 || /^[”’]/.test(w) });
    if (on.has(g)) out.push({ w: ",", glue: true, tag: (p.commas[g] || {}).code || (extra === g ? "x" : ""), g });
  });
  return out;
}
const text = (item, on) => E.text(tokens(item, on));
// Quiz: one question per comma (its rule number) and per marked misuse (answer 0)
function questions(){
  const q = [];
  SENT.forEach((it, i) => { const p = parse(it.src);
    Object.keys(p.commas).forEach(g => q.push({ i, g: +g, ans: RULES[p.commas[g].code].n }));
    Object.keys(p.misuse).forEach(g => q.push({ i, g: +g, ans: 0, mis: p.misuse[g] })); });
  return q;
}

const logic = E.logic["eng-commas"] = { CC, ADV, NAME, cap, segs, render, join, RULES, RULE_BTNS, MISUSE, STYLES, SENT, parse, expect, check, answer, tokens, text, questions };

// ---------------- the lab ----------------
L["eng-commas"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "ecm-wrap");
  E.css("css-eng-commas", `
.ecm-wrap .ecm-list{display:grid;gap:6px;margin-top:10px}
.ecm-wrap .ecm-row{font:400 14px/1.45 var(--sans);color:var(--muted);display:flex;gap:8px;align-items:baseline}
.ecm-wrap .ecm-row b{font:600 11px/1.3 var(--ui);letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;min-width:96px}
.ecm-wrap .ecm-row.bad b,.ecm-wrap .ecm-row.miss b{color:var(--red)}
.ecm-wrap .ecm-h{font:600 10.5px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint);margin-top:12px}
.ecm-wrap .c1{color:var(--amber)} .ecm-wrap .c2{color:var(--cyan)} .ecm-wrap .c3{color:var(--pink)} .ecm-wrap .c4{color:var(--violet)} .ecm-wrap .c5{color:var(--green)}`);
  let mode = "place", sel = 0, style = "either", on = new Set(), res = null, tally = { right: 0, tries: 0 };
  const Q = questions();
  const quiz = E.quiz({ items: Q, check: (q, v) => +v === q.ans, render: () => "" });
  const rc = code => (RULES[code] || {}).c || "";

  function drawPlace(){
    const it = SENT[sel], p = parse(it.src);
    const st = res ? g => (!res.gaps[g] || res.gaps[g].state === "opt" ? "" : res.gaps[g].state) : null;
    let out = `<div class="pos-text">${E.gaps(p.words, { on, mark: ",", state: st })}</div>`;
    if (res) {
      const rows = res.gaps.filter(x => x.state && x.state !== "opt" || (x.state === "opt" && on.has(x.g))).concat(res.gaps.filter(x => x.state === "opt" && !on.has(x.g)));
      out += `<div class="ecm-list">${rows.map(x => {
        const r = RULES[x.code], lab = x.state === "bad" ? "✗ wrong comma" : x.state === "miss" ? `✗ missing · ${r.n}` : x.state === "opt" ? `optional · ${r.n}` : `✓ rule ${r.n}`;
        return `<div class="ecm-row ${x.state}"><b class="${x.state === "ok" || x.state === "opt" ? rc(x.code) : ""}">${lab}</b><span>after “${E.esc(p.words[x.g])}”: ${x.why}</span></div>`; }).join("") || `<div class="ecm-row ok"><b class="c5">✓ no commas</b><span>None of these gaps takes a comma.</span></div>`}</div>
        <div class="ecm-h">Corrected, coloured by rule</div><div class="pos-text">${E.words(tokens(it, answer(it, style === "either" ? "cmos" : style)), { color: x => rc(x.tag) })}</div>`;
    }
    dom.innerHTML = out;
    k.setRO(E.ro({ title: "Comma placer", big: res ? (res.ok ? "All correct" : `${res.wrong} wrong · ${res.missing} missing`) : `${on.size} comma${on.size === 1 ? "" : "s"} placed`,
      rows: [{ label: "Style", value: STYLES.find(s => s[0] === style)[1] }, { label: "Sentences right", value: `${tally.right} of ${tally.tries}`, c: "c5" }].concat(res ? [{ label: "Commas right", value: res.right, c: "c1" }] : []),
      landmark: res ? { big: res.ok ? "Every comma has a rule" : "Fix the red gaps", note: "Each correct comma shows its rule number: 1 compound · 2 introductory · 3 series · 4 coordinate adjectives · 5 nonrestrictive · 6 parenthetical / address · 7 quotation · 8 dates and places.", hit: res.ok } : null,
      narr: "Tap a gap between words to put a comma there (tap again to remove it), then Check. Some sentences need no commas at all; “Either style” accepts the serial comma with or without." }));
  }

  function drawRule(){
    const q = quiz.item, it = SENT[q.i], st = quiz.state, base = answer(it, "cmos");
    const on2 = new Set(base); on2.add(q.g);
    const toks = tokens(it, on2, q.ans ? null : q.g), ti = toks.findIndex(x => x.g === q.g);
    const right = RULE_BTNS.find(b => b[0] === q.ans)[1];
    dom.innerHTML = `<div class="ecm-h">Why is the outlined comma here?</div><div class="pos-text">${E.words(toks, { sel: ti, color: (x, i) => i === ti ? (st.answered ? (q.ans ? rc(x.tag) : "") : "c1") : "" })}</div>
      <div class="pos-quiz">${RULE_BTNS.map(([v, l]) => `<button type="button" data-r="${v}" class="${st.answered ? (v === q.ans ? "right" : +st.picked === v ? "wrong" : "") : ""}">${l}</button>`).join("")}</div>`;
    const p = parse(it.src), c = p.commas[q.g];
    k.setRO(E.ro({ title: "Name the rule", big: st.answered ? (st.correct ? "Right" : right) : "?",
      rows: [{ label: "Score", value: `${quiz.score.right} of ${quiz.score.tries}`, c: "c5" }, { label: "Question", value: `${quiz.index + 1} of ${quiz.total}` }],
      landmark: st.answered ? { big: right, note: q.ans ? RULES[c.code].why : MISUSE[q.mis], hit: st.correct } : null,
      narr: "Every comma should be able to name its rule. Some questions show a comma that does not belong: answer “No comma here”." }));
  }

  function draw(){ mode === "place" ? drawPlace() : drawRule(); }
  E.on(dom, ".el-gap", el => { const g = +el.dataset.g; on.has(g) ? on.delete(g) : on.add(g); res = null; draw(); });
  E.on(dom, "button[data-r]", el => { if (!quiz.state.answered) { quiz.pick(+el.dataset.r); draw(); } });
  function pickSent(i){ sel = i; on = new Set(); res = null; }
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "place") {
      k.select("Sentence", SENT.map((s, i) => [i, s.label]), sel, v => { pickSent(+v); draw(); });
      k.select("Style", STYLES, style, v => { style = v; if (res) res = check(SENT[sel], on, style); draw(); });
      k.button("Check", () => { const first = !res; res = check(SENT[sel], on, style); if (first) { tally.tries++; if (res.ok) tally.right++; } draw(); });
      k.button("Answer", () => { on = answer(SENT[sel], style === "either" ? "cmos" : style); res = check(SENT[sel], on, style); draw(); }, "btn ghost");
      k.button("Next", () => { pickSent((sel + 1) % SENT.length); controls(); draw(); }, "btn ghost");
    } else {
      k.button("Next", () => { quiz.next(); draw(); });
      k.button("Reset score", () => { quiz.reset(); draw(); }, "btn ghost");
    }
  }
  k.modes([["place", "Place commas"], ["rule", "Name the rule"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
