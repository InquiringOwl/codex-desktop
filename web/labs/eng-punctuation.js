/* ============ Labs: English · Semicolons, Colons, Dashes & Apostrophes (mark chooser, apostrophe builder, quick check) ============
   The mark chooser's verdicts come from the shared join engine in eng-commas.js (EngLab.logic["eng-commas"].join),
   looked up when called, so this file never depends on load order. */
(function(){
const L = window.LABS, E = window.EngLab;
const P = () => E.logic["eng-commas"];

// ---- 1. mark chooser ----
const MARKS = [["semi", ";"], ["colon", ":"], ["dash", "—"], ["comma", ","], ["period", "."], ["none", "no mark"]];
const PAIRS = [
  { label: "Scrooge loved one thing… money", a: { t: "Scrooge loved one thing", k: "ic" }, b: { t: "money", k: "np" } },
  { label: "Jo packed three things… a list", a: { t: "Jo packed three things", k: "ic" }, b: { t: "a pen, a notebook, and an apple", k: "list" } },
  { label: "The night was cold… the wind cut", a: { t: "the night was cold", k: "ic" }, b: { t: "the wind cut through every coat", k: "ic" }, rel: "explain" },
  { label: "The town slept… the river moved", a: { t: "the town slept", k: "ic" }, b: { t: "the river kept moving", k: "ic" }, rel: "contrast" },
  { label: "The kit included… a list", a: { t: "the kit included", k: "ic", open: true }, b: { t: "a rope, a lantern, and a map", k: "list" } },
  { label: "The plan had one flaw… nobody…", a: { t: "the plan had one flaw", k: "ic" }, b: { t: "nobody owned a boat", k: "ic" }, rel: "explain" }
];
// What each correct mark does to meaning and emphasis
const EFFECT = {
  semi: "Equal weight: two statements the writer says belong together, without saying how.",
  colon: "Points forward: what follows delivers what the first clause promised (an explanation, a list, a name).",
  dash: "The same pointing as a colon, but louder and less formal: a sudden, emphatic break.",
  comma: "The quietest choice: the appositive is added smoothly, without a pause for effect.",
  period: "Two separate sentences: a full stop between them, and the reader supplies the link.",
  none: "No pause at all: the list is simply the object of the verb."
};
const chooseMark = (pair, mark) => { const E2 = P(), v = E2.join(pair.a, mark, pair.b, pair.rel); return { ok: v.ok, kind: v.kind, why: v.why, effect: v.ok ? EFFECT[mark] : "", text: E2.render(pair.a, mark, pair.b), segs: E2.segs(pair.a, mark, pair.b) }; };
const correctMarks = pair => MARKS.map(m => m[0]).filter(m => chooseMark(pair, m).ok);

// ---- 2. apostrophe builder ----
// num: sg | pl; proper: a name. Chicago and MLA add ’s to every singular, names in s included; AP adds only ’ to a singular proper name ending in s.
const NOUNS = [
  { w: "dog", num: "sg", label: "dog (singular)" },
  { w: "boss", num: "sg", label: "boss (singular in s)" },
  { w: "James", num: "sg", proper: true, label: "James (name in s)" },
  { w: "Dickens", num: "sg", proper: true, label: "Dickens (name in s)" },
  { w: "dogs", num: "pl", label: "dogs (regular plural)" },
  { w: "children", num: "pl", label: "children (irregular plural)" },
  { w: "women", num: "pl", label: "women (irregular plural)" },
  { w: "Joneses", num: "pl", proper: true, label: "the Joneses (family)" },
  { w: "mother-in-law", num: "sg", label: "mother-in-law (compound)" },
  { w: "mothers-in-law", num: "pl", label: "mothers-in-law (plural)" },
  { w: "it", num: "sg", pron: "its", label: "it (pronoun)" },
  { w: "who", num: "sg", pron: "whose", label: "who (pronoun)" }
];
function possessive(n, style){
  if (n.pron) return { form: n.pron, rule: `Possessive pronouns never take an apostrophe: <i>${n.pron}</i>. <i>${n.w === "it" ? "It’s" : "Who’s"}</i> means <i>${n.w} is</i> or <i>${n.w} has</i>.` };
  const s = /s$/.test(n.w);
  if (n.num === "pl" && s) return { form: n.w + "’", rule: "A plural already ending in <i>s</i> takes an apostrophe alone." };
  if (n.num === "pl") return { form: n.w + "’s", rule: n.w.includes("-") ? "In a compound the plural is inside (<i>mothers</i>-in-law), so the end has no <i>s</i>: add ’s to the end of the whole compound." : "An irregular plural that does not end in <i>s</i> takes ’s, like a singular." };
  if (s && n.proper && style === "ap") return { form: n.w + "’", rule: "AP style: a singular proper name ending in <i>s</i> takes an apostrophe alone." };
  if (s) return { form: n.w + "’s", rule: n.proper ? "Chicago and MLA: a singular name ending in <i>s</i> still takes ’s (pronounced as an extra syllable)." : "A singular common noun ending in <i>s</i> takes ’s in every major style (AP drops the <i>s</i> only before a word beginning with <i>s</i>)." };
  return { form: n.w + "’s", rule: n.w.includes("-") ? "A compound noun takes ’s on its last word." : "A singular noun takes ’s." };
}
// Joint and individual possession
const JOINT = { joint: "Lewis and Clark’s expedition", each: "Lewis’s and Clark’s journals" };

// ---- 3. quick check ----
const QUIZ = [
  { q: "The ship lost ___ mast in the storm.", opts: ["its", "it’s", "its’"], ok: ["its"], why: "Possessive pronoun: no apostrophe (like <i>his</i>, <i>hers</i>)." },
  { q: "___ going to snow before Christmas.", opts: ["Its", "It’s", "Its’"], ok: ["It’s"], why: "<i>It’s</i> = <i>it is</i>: the apostrophe marks the missing letter." },
  { q: "___ coat is on the chair?", opts: ["Whose", "Who’s"], ok: ["Whose"], why: "<i>Whose</i> is the possessive; <i>who’s</i> = <i>who is</i>." },
  { q: "___ coming to dinner on Christmas Day?", opts: ["Whose", "Who’s"], ok: ["Who’s"], why: "<i>Who’s</i> = <i>who is</i>." },
  { q: "The ___ toys were under the tree.", opts: ["childrens’", "children’s", "childrens"], ok: ["children’s"], why: "<i>Children</i> is already plural and does not end in <i>s</i>: add ’s." },
  { q: "We visited the ___ house. (family name Jones)", opts: ["Jones’s", "Joneses’", "Jones’"], ok: ["Joneses’"], why: "Plural of <i>Jones</i> is <i>Joneses</i>; a plural in <i>s</i> takes an apostrophe alone." },
  { q: "She gave two ___ notice.", opts: ["weeks", "week’s", "weeks’"], ok: ["weeks’"], why: "A possessive of time with a plural: <i>two weeks’ notice</i> (but <i>one week’s notice</i>)." },
  { q: "Jazz changed in the ___.", opts: ["1920s", "1920’s"], ok: ["1920s"], why: "Chicago, MLA, APA and AP all write decades with no apostrophe: <i>1920s</i>." },
  { q: "She is a well___known author.", opts: ["-", "–", "—"], ok: ["-"], why: "A hyphen joins a compound modifier before a noun (<i>well-known author</i>)." },
  { q: "Chicago style: read pages 10___25.", opts: ["-", "–", "—"], ok: ["–"], why: "Chicago uses the en dash for ranges. AP has no en dash and uses a hyphen (10-25)." },
  { q: "He had one goal___freedom.", opts: [";", ":", "—"], ok: [":", "—"], why: "Both work after a complete clause: the colon is formal, the dash more emphatic. A semicolon cannot introduce a noun phrase." },
  { q: "The recipe calls for___flour, eggs and milk.", opts: [":", "no mark", ";"], ok: ["no mark"], why: "No colon after a verb or preposition: the list is the object of <i>calls for</i>." }
];

const logic = E.logic["eng-punctuation"] = { MARKS, PAIRS, EFFECT, chooseMark, correctMarks, NOUNS, possessive, JOINT, QUIZ };

// ---------------- the lab ----------------
L["eng-punctuation"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "epn-wrap");
  E.css("css-eng-punctuation", `
.epn-wrap .epn-s{font:400 clamp(17px,2vw,21px)/1.6 var(--math);color:var(--text)}
.epn-wrap .epn-s .m{font-weight:700;padding:0 1px}
.epn-wrap .epn-h{font:600 10.5px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint);margin:12px 0 4px}
.epn-wrap .epn-why{font:400 14px/1.45 var(--sans);color:var(--muted)}
.epn-wrap .epn-why.bad{color:var(--red)}
.epn-wrap .epn-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.epn-wrap .epn-card{border:1px solid var(--line-2);border-radius:4px;padding:8px 10px;background:rgba(0,0,0,.2)}
.epn-wrap .epn-card .h{font:600 9.5px/1.2 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.epn-wrap .epn-card .f{font:400 22px/1.4 var(--math);color:var(--text)}
.epn-wrap .c1{color:var(--amber)} .epn-wrap .c2{color:var(--cyan)} .epn-wrap .c3{color:var(--pink)} .epn-wrap .c4{color:var(--violet)} .epn-wrap .c5{color:var(--green)}`);
  const MC = { semi: "c1", colon: "c2", dash: "c3", comma: "c5", period: "c5", none: "c5" };
  let mode = "mark", pi = 0, picked = {}, ni = 0;
  const quiz = E.quiz({ items: QUIZ, check: (q, v) => q.ok.includes(v), render: () => "" });
  const score = { right: 0, tries: 0 };

  function drawMark(){
    const pr = PAIRS[pi], m = picked[pi], r = m ? chooseMark(pr, m) : null, good = correctMarks(pr);
    const sent = r ? r.segs.map(([t, role]) => role === "j" ? `<span class="m ${MC[m]}">${E.esc(t)}</span>` : E.esc(t)).join("")
      : `${E.esc(P().cap(pr.a.t))} <span class="m c3">▢</span> ${E.esc(pr.b.t)}.`;
    dom.innerHTML = `<div class="epn-h">Which mark goes in the box?</div><div class="epn-s">${sent}</div>
      <div class="pos-quiz">${MARKS.map(([key, lab]) => `<button type="button" data-m="${key}" class="${m ? (good.includes(key) ? "right" : m === key ? "wrong" : "") : ""}">${lab}</button>`).join("")}</div>
      ${r ? `<div class="epn-why ${r.ok ? "" : "bad"}">${r.ok ? "✓ " : "✗ "}${r.why}</div>${r.ok ? `<div class="epn-h">Effect</div><div class="epn-why">${r.effect}</div>` : ""}` : ""}`;
    k.setRO(E.ro({ title: "Mark chooser", big: r ? (r.ok ? "Correct" : { splice: "Comma splice", fused: "Fused sentence", fragment: "Fragment" }[r.kind] || "Not standard") : "?",
      rows: [{ label: "Correct marks here", value: m ? good.map(g => MARKS.find(x => x[0] === g)[1]).join("  ") : "…", c: "c1" }, { label: "First tries right", value: `${score.right} of ${score.tries}`, c: "c5" }],
      landmark: r ? { big: good.length > 1 ? `${good.length} marks work` : "Only one mark works", note: good.length > 1 ? "When several marks are correct, the choice changes emphasis and formality, not grammar. Tap the other green ones to compare." : "", hit: r.ok } : null,
      narr: "Every mark is judged by the same rule engine as the comma and fragment labs: what kind of part stands on each side." }));
  }

  function drawApos(){
    const n = NOUNS[ni], c = possessive(n, "cmos"), a = possessive(n, "ap"), same = c.form === a.form;
    const card = (h, f) => `<div class="epn-card"><div class="h">${h}</div><div class="f">${E.esc(f.form).replace(/’/, `<span class="c4">’</span>`)}</div></div>`;
    dom.innerHTML = `<div class="epn-h">Possessive of <i>${E.esc(n.w)}</i></div>
      <div class="epn-grid">${same ? card("Chicago · MLA · AP", c) : card("Chicago · MLA", c) + card("AP", a)}</div>
      <div class="epn-why" style="margin-top:8px">${c.rule}${same ? "" : " " + a.rule}</div>
      <div class="epn-h">Joint or separate?</div><div class="epn-why"><i>${JOINT.joint}</i>: one expedition they shared, so ’s on the last name only. <i>${JOINT.each}</i>: two sets of journals, so each name takes ’s.</div>`;
    k.setRO(E.ro({ title: "Apostrophe builder", big: same ? c.form : `${c.form} · ${a.form}`,
      rows: [{ label: "Number", value: n.num === "pl" ? "plural" : "singular" }, { label: "Ends in s", value: /s$/.test(n.w) ? "yes" : "no" }],
      landmark: { big: n.pron ? "No apostrophe" : n.num === "pl" && /s$/.test(n.w) ? "s’" : "’s", note: "Write the plural first if you need it (<i>Jones → Joneses</i>), then decide: ends in <i>s</i> and plural → add ’; otherwise → add ’s.", hit: true },
      narr: "Styles differ only on singular names ending in s. Ordinary plurals never take an apostrophe: the dogs barked." }));
  }

  function drawQuiz(){
    const q = quiz.item, st = quiz.state;
    dom.innerHTML = `<div class="epn-h">Fill the blank</div><div class="epn-s">${E.esc(q.q).replace("___", `<span class="m c3">${st.answered ? E.esc(st.picked === "no mark" ? "∅" : st.picked) : "___"}</span>`)}</div>
      <div class="pos-quiz">${q.opts.map(o => `<button type="button" data-o="${E.esc(o)}" class="${st.answered ? (q.ok.includes(o) ? "right" : st.picked === o ? "wrong" : "") : ""}">${E.esc(o)}</button>`).join("")}</div>`;
    k.setRO(E.ro({ title: "Quick check", big: st.answered ? (st.correct ? "Right" : q.ok.join(" or ")) : "?",
      rows: [{ label: "Score", value: `${quiz.score.right} of ${quiz.score.tries}`, c: "c5" }, { label: "Question", value: `${quiz.index + 1} of ${quiz.total}` }],
      landmark: st.answered ? { big: q.ok.join(" or "), note: q.why, hit: st.correct } : null,
      narr: "Apostrophes, hyphens, dashes and colons in one round. Some blanks allow more than one mark." }));
  }

  function draw(){ mode === "mark" ? drawMark() : mode === "apos" ? drawApos() : drawQuiz(); }
  E.on(dom, "button[data-m]", el => { if (!picked[pi]) { score.tries++; if (chooseMark(PAIRS[pi], el.dataset.m).ok) score.right++; } picked[pi] = el.dataset.m; draw(); });
  E.on(dom, "button[data-o]", el => { if (!quiz.state.answered) { quiz.pick(el.dataset.o); draw(); } });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "mark") {
      k.select("Pair", PAIRS.map((p, i) => [i, p.label]), pi, v => { pi = +v; draw(); });
      k.button("Next", () => { pi = (pi + 1) % PAIRS.length; controls(); draw(); });
    } else if (mode === "apos") {
      k.select("Noun", NOUNS.map((n, i) => [i, n.label]), ni, v => { ni = +v; draw(); });
    } else {
      k.button("Next", () => { quiz.next(); draw(); });
      k.button("Reset score", () => { quiz.reset(); draw(); }, "btn ghost");
    }
  }
  k.modes([["mark", "Choose the mark"], ["apos", "Apostrophes"], ["quiz", "Quick check"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
