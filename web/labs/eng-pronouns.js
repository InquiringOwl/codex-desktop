/* ============ Labs: English · Pronoun Case & Reference (who/whom tester, case chooser, reference linker) ============ */
(function(){
const L = window.LABS, E = window.EngLab, esc = E.esc;

/* ---------- case ---------- */
// subjective, objective, possessive (determiner), possessive (independent)
const PRON = { I: ["I", "me", "my", "mine"], he: ["he", "him", "his", "his"], she: ["she", "her", "her", "hers"], we: ["we", "us", "our", "ours"],
  they: ["they", "them", "their", "theirs"], who: ["who", "whom", "whose", "whose"], whoever: ["whoever", "whomever", "whosever", "whosever"] };
const ROLE = {
  subj: ["subjective", "subject of a verb"], subjComp: ["subjective", "subject complement after be (formal)"],
  obj: ["objective", "direct object"], pobj: ["objective", "object of a preposition"], gen: ["possessive", "possessor before a gerund (formal)"]
};
const CASE_IX = { subjective: 0, objective: 1, possessive: 2 };
const caseOf = role => ROLE[role][0];
const form = (p, role) => PRON[p][CASE_IX[caseOf(role)]];
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const fill = (s, w) => { const i = s.indexOf("___"); return s.slice(0, i) + (i === 0 ? cap(w) : w) + s.slice(i + 3); };

/* ---------- who / whom ---------- */
// test: the clause in statement order, "_" where the pronoun sits; role inside its own clause
const WHO = [
  { label: "Give the prize to ___ finishes first", s: "Give the prize to ___ finishes first.", clause: "___ finishes first", test: ["_", "finishes first"], role: "subj", ever: true,
    why: "The preposition to takes the whole clause as its object. Inside that clause the pronoun is the subject of finishes, so it is whoever." },
  { label: "The candidate ___ we chose", s: "The candidate ___ we chose has resigned.", clause: "___ we chose", test: ["we chose", "_"], role: "obj",
    why: "In the relative clause, we is the subject and the pronoun is the object of chose: we chose him → whom." },
  { label: "The student ___ I think deserves it", s: "She is the student ___ I think deserves the award.", clause: "___ I think deserves the award", test: ["I think", "_", "deserves the award"], role: "subj",
    why: "I think is an interrupting clause. Set it aside: he deserves the award, so who. Whom here is a common hypercorrection." },
  { label: "___ should I ask?", s: "___ should I ask about the deadline?", clause: "___ should I ask about the deadline", test: ["I should ask", "_", "about the deadline"], role: "obj",
    why: "Put the question in statement order: I should ask him about the deadline. The pronoun is the object of ask → Whom (formal). In speech, Who should I ask is normal." },
  { label: "I wonder ___ the letter was from", s: "I wonder ___ the letter was from.", clause: "___ the letter was from", test: ["the letter was from", "_"], role: "pobj",
    why: "Statement order: the letter was from him. The pronoun is the object of the stranded preposition from → whom." },
  { label: "We will hire ___ they recommend", s: "We will hire ___ the committee recommends.", clause: "___ the committee recommends", test: ["the committee recommends", "_"], role: "obj", ever: true,
    why: "The whole clause is the object of hire, but case is decided inside the clause: the committee recommends him → whomever." },
  { label: "___ wrote this note forgot to sign", s: "___ wrote this note forgot to sign it.", clause: "___ wrote this note", test: ["_", "wrote this note"], role: "subj",
    why: "The pronoun is the subject of wrote: he wrote this note → Who." },
  { label: "The guide, ___ everyone trusted", s: "The guide, ___ everyone trusted, led us home.", clause: "___ everyone trusted", test: ["everyone trusted", "_"], role: "obj",
    why: "Everyone is the subject of trusted; the pronoun is its object: everyone trusted him → whom." },
  { label: "Tell me ___ you think will win", s: "Tell me ___ you think will win.", clause: "___ you think will win", test: ["you think", "_", "will win"], role: "subj",
    why: "Set aside you think: he will win → who. The pronoun is the subject of will win, not the object of think." },
  { label: "The colleague with ___ I shared", s: "This is the colleague with ___ I shared an office.", clause: "with ___ I shared an office", test: ["I shared an office with", "_"], role: "pobj",
    why: "A preposition directly before the pronoun takes the objective case: with whom. (Who cannot follow a preposition: *with who.)" }
];

/* ---------- compounds, comparisons, reflexives ---------- */
const CASE = [
  { label: "Between you and ___", s: "Between you and ___, the plan won’t work.", p: "I", opts: ["I", "me", "myself"], role: "pobj", test: "Just between ___ and the wall…",
    why: "Between is a preposition; both of its objects take the objective case: between you and me. Between you and I is a hypercorrection." },
  { label: "Jamal and ___ finished the project", s: "Jamal and ___ finished the project.", p: "I", opts: ["I", "me", "myself"], role: "subj", test: "___ finished the project.",
    why: "Drop Jamal and: I finished the project. Part of a compound subject takes the subjective case." },
  { label: "The coach praised Lena and ___", s: "The coach praised Lena and ___.", p: "he", opts: ["he", "him", "himself"], role: "obj", test: "The coach praised ___.",
    why: "Drop Lena and: praised him. Part of a compound object takes the objective case." },
  { label: "___ students deserve a break", s: "___ students deserve a longer break.", p: "we", opts: ["We", "Us"], role: "subj", test: "___ deserve a longer break.",
    why: "Drop the noun students: We deserve a longer break. The pronoun before an appositive noun takes the case of the whole phrase." },
  { label: "The award went to ___ volunteers", s: "The award went to ___ volunteers.", p: "we", opts: ["we", "us"], role: "pobj", test: "The award went to ___.",
    why: "Drop volunteers: went to us. The phrase is the object of to." },
  { label: "My brother is taller than ___", s: "My brother is taller than ___.", p: "I", opts: ["I", "me"], role: "subj", test: "My brother is taller than ___ am.",
    why: "Finish the comparison: than I am. In formal writing the pronoun is the subject of an understood verb. Than me is standard in speech, where than works as a preposition." },
  { label: "Ana trusts Leo more than ___ (me)", s: "Ana trusts Leo more than ___.", p: "I", opts: ["I", "me"], role: "obj", test: "Ana trusts Leo more than she trusts ___.",
    why: "Meant here: than she trusts me, so the pronoun is an object. Than I would mean than I trust Leo. With than, the case can change the meaning." },
  { label: "Everyone except ___ had left", s: "Everyone except ___ had left.", p: "she", opts: ["she", "her"], role: "pobj", test: "except ___",
    why: "Except is a preposition here, so its object takes the objective case: except her." },
  { label: "They invited my wife and ___", s: "The Johnsons invited my wife and ___ to dinner.", p: "I", opts: ["I", "me", "myself"], role: "obj", test: "The Johnsons invited ___ to dinner.",
    why: "Drop my wife and: invited me. Myself is reflexive: use it only when the subject is also I (I cooked for myself) or for emphasis (I did it myself)." },
  { label: "We were surprised by ___ leaving", s: "We were surprised by ___ leaving early.", p: "he", opts: ["him", "his"], role: "gen", test: "We were surprised by ___ departure.",
    why: "Before a gerund, formal usage puts the possessive: his leaving (compare his departure). Him leaving is common and accepted in informal English." },
  { label: "It was ___ who called", s: "It was ___ who called.", p: "she", opts: ["she", "her"], role: "subjComp", test: "___ was the one who called.",
    why: "After be, traditional grammar requires the subjective case: It was she. In speech It was her (like It’s me) is normal; in formal writing many writers recast: She was the one who called." }
];

/* ---------- reference ---------- */
// nouns: word/n:<gender><number> (gender m, f, x = person of unstated gender, n = thing); analysed pronouns: word/p=<intended referent | ? | clause | none>
const PF = {
  he: { num: "s", g: "mx" }, him: { num: "s", g: "mx" }, his: { num: "s", g: "mx" },
  she: { num: "s", g: "fx" }, her: { num: "s", g: "fx" }, it: { num: "s", g: "n" }, its: { num: "s", g: "n" },
  they: { num: "p", sgThey: true }, them: { num: "p", sgThey: true }, their: { num: "p", sgThey: true },
  which: { num: "sp", g: "n" }, this: { num: "s", g: "n" }, who: { num: "sp", g: "mfx" }
};
const REF = [
  { label: "When Maria called her sister…", t: "When Maria/n:fs called her/p=Maria sister/n:fs , she/p=? was upset .", fix: "Maria was upset when she called her sister." },
  { label: "The manager told Sam that he…", t: "The manager/n:xs told Sam/n:ms that he/p=? had been promoted .", fix: "The manager told Sam, “You have been promoted.”" },
  { label: "Each student must bring their…", t: "Each student/n:xs must bring their/p=student own laptop/n:ns .", fix: "" },
  { label: "The committee announced its…", t: "The committee/n:ns announced its/p=committee decision/n:ns .", fix: "" },
  { label: "The lecture ran long, which…", t: "The lecture/n:ns ran long , which/p=clause annoyed everyone .", fix: "The lecture ran long, a delay that annoyed everyone." },
  { label: "In the report, it says…", t: "In the report/n:ns , it/p=none says that sales/n:np fell .", fix: "The report says that sales fell." },
  { label: "The dog chased the cat until it…", t: "The dog/n:ns chased the cat/n:ns until it/p=? was exhausted .", fix: "The dog chased the cat until the cat was exhausted." },
  { label: "Students who skip the reading…", t: "Students/n:xp who/p=students skip the reading/n:ns find that they/p=students fall behind .", fix: "" },
  { label: "My aunt is a nurse, but… it", t: "My aunt/n:fs is a nurse/n:xs , but I have never considered it/p=none as a career/n:ns .", fix: "My aunt is a nurse, but I have never considered nursing as a career." },
  { label: "Holmes glanced at Watson before he…", t: "Holmes/n:ms glanced at Watson/n:ms before he/p=? answered .", fix: "Before answering, Holmes glanced at Watson." },
  { label: "The council cut the budget. This…", t: "The council/n:ns cut the library budget/n:ns . This/p=clause angered readers .", fix: "The council cut the library budget. This decision angered readers." }
];
function parseRef(t){
  return t.split(" ").map((raw, i) => {
    const m = raw.match(/^(.+?)\/(n:([mfxn])([sp])|p=(.+))$/);
    if (!m) return { w: raw, i, glue: /^[,.;:!?]$/.test(raw) };
    return m[3] ? { w: m[1], i, noun: true, g: m[3], num: m[4] } : { w: m[1], i, pro: true, ref: m[5] };
  });
}
function agrees(p, n){
  const f = PF[p.w.toLowerCase()];
  if (!f) return false;
  if (f.sgThey) return n.num === "p" || n.g === "x";
  return f.num.includes(n.num) && f.g.includes(n.g);
}
function analyse(t, pi){
  const W = parseRef(t), p = W[pi];
  const cands = W.slice(0, pi).filter(n => n.noun && agrees(p, n)).map(n => n.i);
  const f = PF[p.w.toLowerCase()];
  let verdict = cands.length > 1 ? "ambiguous" : cands.length === 1 ? "clear" : "vague";
  if (p.ref === "clause") verdict = "broad"; else if (p.ref === "none") verdict = "vague";
  const target = verdict === "clear" ? cands[0] : null;
  const sgThey = !!(f.sgThey && target != null && W[target].num === "s");
  return { cands, verdict, target, sgThey };
}
const VERDICT = {
  clear: "Clear: exactly one noun before the pronoun agrees with it.",
  ambiguous: "Ambiguous: more than one noun could be the antecedent. Name the noun, or recast.",
  broad: "Broad reference: the pronoun points at a whole clause or idea, not a noun. Add a summarising noun.",
  vague: "Vague: no noun in the sentence is the antecedent the pronoun needs. Supply the noun."
};

const logic = E.logic["eng-pronoun-usage"] = {
  PRON, ROLE, caseOf, form, fill, who: WHO, caseItems: CASE, ref: REF, parseRef, agrees, analyse, VERDICT,
  whoAnswer: it => (it.ever ? PRON.whoever : PRON.who)[CASE_IX[caseOf(it.role)]],
  // statement-order test with he/him in the gap
  whoTest: (it, c) => it.test.map(x => x === "_" ? (c === "subjective" ? "he" : "him") : x).join(" "),
  caseAnswer: it => it.opts.find(o => o.toLowerCase() === form(it.p, it.role).toLowerCase()),
  pronouns: t => parseRef(t).filter(x => x.pro).map(x => x.i)
};

/* ---------- the lab ---------- */
const CC = { subjective: "c3", objective: "c4", possessive: "c5" };
E.css("css-eng-pronouns", `.eprn .pos-text{position:relative;padding-top:26px;line-height:2.4}
.eprn .eprn-arc{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.eprn .eprn-test{margin:10px 0 0;font-family:var(--sans);font-size:15px;color:var(--muted)}
.eprn .eprn-test b{color:var(--text)} .eprn .eprn-test .bad{text-decoration:line-through;opacity:.65}
.eprn .eprn-gap{display:inline-block;min-width:3.2em;border-bottom:2px dashed var(--line-2);text-align:center}`);

L["eng-pronoun-usage"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "eprn");
  let mode = "who", wi = 0, ci = 0, ri = 0, pick = null, pro = null, showFix = false;

  const gapSentence = (s, w, c) => {
    const i = s.indexOf("___"), shown = w == null ? `<span class="eprn-gap">?</span>` : `<span class="${c}" style="font-weight:600">${esc(i === 0 ? cap(w) : w)}</span>`;
    return `<p>${esc(s.slice(0, i))}${shown}${esc(s.slice(i + 3))}</p>`;
  };
  function drawWho(){
    const it = WHO[wi], ans = logic.whoAnswer(it), c = caseOf(it.role), opts = it.ever ? ["whoever", "whomever"] : ["who", "whom"];
    const ok = pick != null && pick === ans;
    const cl = it.clause.replace("___", pick || "___");
    dom.innerHTML = `<div class="pos-src">Choose the pronoun. Then test it inside its own clause.</div>
      <div class="pos-text">${gapSentence(it.s, pick, pick ? (pick === ans ? CC[c] : "c3") : "")}</div>
      <div class="pos-quiz">${opts.map(o => `<button type="button" data-v="${o}" class="${pick ? (o === ans ? "right" : o === pick ? "wrong" : "") : ""}">${o}</button>`).join("")}</div>
      ${pick ? `<p class="eprn-test">Clause: <b>${esc(cl)}</b><br>Statement order: <b class="${c === "subjective" ? "c3" : ""}">${esc(logic.whoTest(it, "subjective"))}</b>${c === "subjective" ? " ✓" : ""} · <span class="${c === "subjective" ? "bad" : ""}">${esc(logic.whoTest(it, "objective"))}</span>${c !== "subjective" ? " ✓" : ""}</p>` : ""}`;
    k.setRO(E.ro({ title: "Who or whom?", big: pick ? `${esc(ans)} = ${c === "subjective" ? "he" : "him"}` : "he → who · him → whom",
      rows: [{ label: "Clause", value: esc(it.clause), c: "c2" }, ...(pick ? [{ label: "Job in its clause", value: ROLE[it.role][1], c: CC[c] }, { label: "Case", value: c, c: CC[c] }] : [])],
      landmark: pick ? { big: ok ? "Right" : "Not quite: " + esc(ans), note: esc(it.why), hit: ok } : { big: "Isolate the clause", note: "Find the clause the pronoun belongs to, put it in statement order, and try he / him in the gap." },
      narr: "The case of who depends only on its job inside its own clause, never on the words outside it." }));
  }
  function drawCase(){
    const it = CASE[ci], ans = logic.caseAnswer(it), c = caseOf(it.role), ok = pick != null && pick === ans;
    dom.innerHTML = `<div class="pos-src">Choose the form for formal written English.</div>
      <div class="pos-text">${gapSentence(it.s, pick, pick ? (ok ? CC[c] : "c3") : "")}</div>
      <div class="pos-quiz">${it.opts.map(o => `<button type="button" data-v="${o}" class="${pick ? (o === ans ? "right" : o === pick ? "wrong" : "") : ""}">${o}</button>`).join("")}</div>
      ${pick ? `<p class="eprn-test">Test: <b class="${CC[c]}">${esc(fill(it.test, ans))}</b></p>` : ""}`;
    k.setRO(E.ro({ title: "Case in context", big: pick ? esc(ans) : `${PRON[it.p].slice(0, 3).join(" / ")}`,
      rows: [{ label: "Subjective", value: esc(PRON[it.p][0]), c: "c3" }, { label: "Objective", value: esc(PRON[it.p][1]), c: "c4" }, { label: "Possessive", value: esc(PRON[it.p][2]), c: "c5" },
        ...(pick ? [{ label: "Job here", value: ROLE[it.role][1], c: CC[c] }] : [])],
      landmark: pick ? { big: ok ? "Right" : "Not quite: " + esc(ans), note: esc(it.why), hit: ok } : { big: "Drop the partner", note: "Cover the other half of a compound, or finish the comparison, and the right case is usually obvious." },
      narr: "Subject → subjective (I, he, she, we, they, who). Object of a verb or preposition → objective (me, him, her, us, them, whom)." }));
  }
  function drawRef(){
    const it = REF[ri], W = parseRef(it.t), pros = logic.pronouns(it.t);
    if (pro == null || !pros.includes(pro)) pro = pros[pros.length - 1];
    const a = analyse(it.t, pro), cset = new Set(a.cands);
    const words = W.map(x => ({ w: x.w, glue: x.glue || x.i === 0 }));
    const html = E.words(words, { click: true, sel: pro,
      color: (x, i) => i === pro ? "c2" : W[i].pro ? "c2" : cset.has(i) ? (a.verdict === "clear" ? "c1" : "c3") : "",
      under: (x, i) => i === pro ? "pronoun" : cset.has(i) ? (a.verdict === "clear" ? "antecedent" : "candidate") : /[A-Za-z]/.test(x.w) ? "" : "\u00a0" });
    dom.innerHTML = `<div class="pos-src">Click a pronoun (cyan) to see which nouns it could point back to.</div>
      <div class="pos-text">${html}</div>
      ${it.fix ? `<p class="eprn-test">${showFix ? `Rewrite: <b class="c5">${esc(it.fix)}</b>` : `<button type="button" class="btn ghost eprn-fix">Show a rewrite</button>`}</p>` : ""}`;
    arcs(a);
    const f = PF[W[pro].w.toLowerCase()];
    const feat = f.sgThey ? "plural, or singular of unstated gender" : `${f.num === "s" ? "singular" : "singular or plural"}, ${f.g === "n" ? "thing or idea" : f.g === "mx" ? "masculine (or unstated)" : f.g === "fx" ? "feminine (or unstated)" : "person"}`;
    k.setRO(E.ro({ title: "Reference linker", big: esc(W[pro].w) + " → " + (a.target != null ? esc(W[a.target].w) : a.verdict === "ambiguous" ? a.cands.map(i => esc(W[i].w)).join(" or ") : a.verdict === "broad" ? "a whole clause" : "nothing"),
      rows: [{ label: "Pronoun", value: esc(W[pro].w), c: "c2", note: feat }, { label: "Agreeing nouns before it", value: a.cands.length ? a.cands.map(i => esc(W[i].w)).join(", ") : "none", c: a.verdict === "clear" ? "c1" : "c3" }],
      landmark: { big: a.verdict === "clear" ? (a.sgThey ? "Clear · singular they" : "Clear") : a.verdict.charAt(0).toUpperCase() + a.verdict.slice(1), note: VERDICT[a.verdict], hit: a.verdict === "clear" },
      narr: a.sgThey ? "Singular they with an antecedent of unstated gender (each student, someone) is accepted by MLA, APA and Chicago style; his or her is the older formal alternative." :
        a.verdict === "clear" && W[a.target].w === "committee" ? "US usage treats a collective noun acting as one body as singular (its). British usage often allows their." :
        "A pronoun should point to one noun the reader can find, and agree with it in number and gender." }));
  }
  function arcs(a){
    const box = dom.querySelector(".pos-text"); if (!box || !box.getBoundingClientRect) return;
    const b = box.getBoundingClientRect(), from = box.querySelector(`[data-i="${pro}"]`); if (!from) return;
    const pt = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2 - b.left, r.top - b.top + 2]; };
    const [x1, y1] = pt(from), col = a.verdict === "clear" ? "var(--amber)" : "var(--pink)";
    const paths = a.cands.map(i => { const el = box.querySelector(`[data-i="${i}"]`); if (!el) return ""; const [x2, y2] = pt(el); const top = Math.min(y1, y2) - 18;
      return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} C${x1.toFixed(1)} ${top} ${x2.toFixed(1)} ${top} ${x2.toFixed(1)} ${(y2 - 1).toFixed(1)}" fill="none" stroke="${col}" stroke-width="2"${a.verdict === "clear" ? "" : ' stroke-dasharray="5 4"'}/><circle cx="${x2.toFixed(1)}" cy="${(y2 - 1).toFixed(1)}" r="3" fill="${col}"/>`; }).join("");
    box.insertAdjacentHTML("beforeend", `<svg class="eprn-arc" aria-hidden="true">${paths}</svg>`);
  }
  const draw = () => mode === "who" ? drawWho() : mode === "case" ? drawCase() : drawRef();
  E.on(dom, ".pos-quiz button", el => { if (pick == null) { pick = el.dataset.v; draw(); } });
  E.on(dom, ".pos-w", el => { const i = +el.dataset.i; if (mode === "ref" && parseRef(REF[ri].t)[i].pro) { pro = i; draw(); } });
  E.on(dom, ".eprn-fix", () => { showFix = true; draw(); });
  let lastW = 0;
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(() => { const w = Math.round(dom.clientWidth); if (w !== lastW) { lastW = w; if (mode === "ref") requestAnimationFrame(draw); } }).observe(dom);
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "who") { k.select("Sentence", WHO.map((s, i) => [i, s.label]), wi, v => { wi = +v; pick = null; draw(); }); k.button("Next", () => { wi = (wi + 1) % WHO.length; pick = null; controls(); draw(); }); }
    else if (mode === "case") { k.select("Sentence", CASE.map((s, i) => [i, s.label]), ci, v => { ci = +v; pick = null; draw(); }); k.button("Next", () => { ci = (ci + 1) % CASE.length; pick = null; controls(); draw(); }); }
    else k.select("Sentence", REF.map((s, i) => [i, s.label]), ri, v => { ri = +v; pro = null; showFix = false; draw(); });
  }
  k.modes([["who", "Who / whom"], ["case", "I or me?"], ["ref", "Reference"]], mode, m => { mode = m; pick = null; controls(); draw(); });
  controls(); draw();
};
})();
