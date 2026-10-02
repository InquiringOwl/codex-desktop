/* ============ Labs: English · Fragments, Run-ons & Comma Splices (fixer + spot the error) ============
   Every verdict comes from the shared join engine in eng-commas.js (EngLab.logic["eng-commas"].join),
   looked up when called, so this file never depends on load order. */
(function(){
const L = window.LABS, E = window.EngLab;
const P = () => E.logic["eng-commas"];

// Faulty items. a, b: parts in the engine's format; bad: the faulty join as written; rel: how b relates to a.
// cc / adv / sub: the connector each standard fix uses (chosen to fit rel); complete: a full clause to replace the fragment.
const ITEMS = [
  { id: "fog", label: "Splice · The fog was thick…", type: "splice", bad: "comma", rel: "result",
    a: { t: "the fog was thick", k: "ic" }, b: { t: "the boats stayed in the harbor", k: "ic" }, cc: "so", adv: "therefore", sub: { w: "because", on: "a" } },
  { id: "scrooge", label: "Splice · Scrooge hated Christmas…", type: "splice", bad: "comma", rel: "contrast",
    a: { t: "Scrooge hated Christmas", k: "ic" }, b: { t: "his nephew loved it", k: "ic" }, cc: "but", adv: "however", sub: { w: "although", on: "a" } },
  { id: "house", label: "Splice · …quiet, however, …", type: "splice", bad: "advc:however", rel: "contrast",
    a: { t: "the house was quiet", k: "ic" }, b: { t: "the clock kept ticking", k: "ic" }, cc: "but", adv: "however", sub: { w: "although", on: "a" } },
  { id: "alice", label: "Fused · Alice fell slowly…", type: "fused", bad: "none", rel: "result",
    a: { t: "Alice fell slowly", k: "ic" }, b: { t: "she had time to look around", k: "ic" }, cc: "so", adv: "consequently", sub: { w: "because", on: "a" } },
  { id: "jo", label: "Fused · Jo grumbled…", type: "fused", bad: "none", rel: "contrast",
    a: { t: "Jo grumbled about the presents", k: "ic" }, b: { t: "Beth tried to cheer her up", k: "ic" }, cc: "but", adv: "meanwhile", sub: { w: "while", on: "a" } },
  { id: "ship", label: "Fused · Ishmael wanted…", type: "fused", bad: "none", rel: "result",
    a: { t: "Ishmael wanted to see the world", k: "ic" }, b: { t: "he signed on to a whaling ship", k: "ic" }, cc: "so", adv: "therefore", sub: { w: "because", on: "a" } },
  { id: "because", label: "Fragment · Because the fog…", type: "frag", bad: "period", frag: "b",
    a: { t: "the boats stayed in the harbor", k: "ic" }, b: { t: "because the fog was thick", k: "dc", comma: false }, complete: "the fog was too thick for sailing", what: "a dependent clause alone" },
  { id: "although", label: "Fragment · Although the house…", type: "frag", bad: "period", frag: "a",
    a: { t: "although the house was dark", k: "dc" }, b: { t: "Scrooge was not afraid", k: "ic" }, complete: "the house was dark", what: "a dependent clause alone" },
  { id: "grumbling", label: "Fragment · Grumbling about…", type: "frag", bad: "period", frag: "b",
    a: { t: "Jo lay on the rug", k: "ic" }, b: { t: "grumbling about the presents", k: "phr", comma: true }, complete: "she grumbled about the presents", what: "a verbal (participial) phrase alone" },
  { id: "marley", label: "Fragment · Jacob Marley.", type: "frag", bad: "period", frag: "b",
    a: { t: "Scrooge had one partner", k: "ic" }, b: { t: "Jacob Marley", k: "np", comma: true }, complete: "his name was Jacob Marley", what: "an appositive alone" },
  { id: "lawyers", label: "Fragment · The lawyers waiting…", type: "frag", bad: "period", frag: "b",
    a: { t: "fog filled the streets", k: "ic" }, b: { t: "the lawyers waiting in the hall", k: "phr", comma: true }, complete: "the lawyers waited in the hall", what: "a subject with no finite verb (waiting is a participle)" },
  { id: "huck", label: "Fragment · And climbed down…", type: "frag", bad: "period", frag: "b",
    a: { t: "Huck slipped out of the window", k: "ic" }, b: { t: "and climbed down the tree", k: "pred", comma: false }, complete: "then he climbed down the tree", what: "a predicate with no subject" }
];
const FIXES = [
  ["period", "Period"], ["semi", "Semicolon"], ["cc", "Comma + conjunction"], ["adv", "; adverb ,"],
  ["sub", "Subordinate a clause"], ["attach", "Attach the fragment"], ["complete", "Complete the fragment"]
];
const TYPE_NAME = { splice: "comma splice", fused: "fused sentence", frag: "fragment" };

// Apply a fix → { a, j, b, na, why? } in engine terms (na = the fix does not apply to this item)
function plan(it, fix){
  const { a, b } = it;
  if (fix === "period" || fix === "semi") return { a, j: fix, b };
  if (fix === "cc") return { a, j: "cc:" + (it.cc || "and"), b };
  if (fix === "adv") return { a, j: "adv:" + (it.adv || "however"), b };
  if (fix === "sub") {
    if (!it.sub) return { na: true, why: it.frag ? "The fragment has no independent clause to subordinate: attach or complete it instead." : "" };
    const s = it.sub;
    if (s.on === "a") return { a: { t: s.w + " " + a.t, k: "dc" }, j: "comma", b };
    return { a, j: s.comma ? "comma" : "none", b: { t: s.w + " " + b.t, k: "dc", comma: !!s.comma } };
  }
  if (fix === "attach") {
    if (!it.frag) return { a, j: "none", b,};
    return { a, j: it.frag === "a" ? "comma" : (b.comma ? "comma" : "none"), b };
  }
  if (fix === "complete") {
    if (!it.frag) return { na: true, why: "Both parts are already complete clauses: nothing to complete." };
    const c = { t: it.complete, k: "ic" };
    return it.frag === "a" ? { a: c, j: "period", b } : { a, j: "period", b: c };
  }
  throw new Error("unknown fix " + fix);
}
function apply(it, fix){
  const p = plan(it, fix);
  if (p.na) return { na: true, ok: false, why: p.why, text: "" };
  const E2 = P(), v = E2.join(p.a, p.j, p.b, it.rel);
  return { ok: v.ok, kind: v.kind, why: v.why, text: E2.render(p.a, p.j, p.b), segs: E2.segs(p.a, p.j, p.b), plan: p };
}
const faulty = it => { const E2 = P(); return { text: E2.render(it.a, it.bad, it.b), segs: E2.segs(it.a, it.bad, it.b), v: E2.join(it.a, it.bad, it.b, it.rel) }; };
const tally = it => FIXES.map(([f]) => { const r = apply(it, f); return { fix: f, ok: r.ok, na: !!r.na }; });

// Spot the error: each item's faulty version and its first working fix
function spot(){
  const out = [];
  ITEMS.forEach(it => {
    out.push({ id: it.id, text: faulty(it).text, ans: it.type });
    const f = FIXES.map(x => x[0]).find(x => apply(it, x).ok);
    out.push({ id: it.id + "-ok", text: apply(it, f).text, ans: "ok" });
  });
  return out;
}
const SPOT = [["ok", "Correct"], ["frag", "Fragment"], ["splice", "Comma splice"], ["fused", "Fused sentence"]];

const logic = E.logic["eng-fragments"] = { ITEMS, FIXES, TYPE_NAME, plan, apply, faulty, tally, spot, SPOT };

// ---------------- the lab ----------------
L["eng-fragments"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "efr-wrap");
  E.css("css-eng-fragments", `
.efr-wrap .efr-s{font:400 clamp(17px,2vw,21px)/1.6 var(--math);color:var(--text)}
.efr-wrap .efr-s .j{border-bottom:2px solid currentColor}
.efr-wrap .efr-h{font:600 10.5px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint);margin:12px 0 4px}
.efr-wrap .efr-why{font:400 14px/1.45 var(--sans);color:var(--muted)}
.efr-wrap .efr-why.bad{color:var(--red)}
.efr-wrap .c1{color:var(--amber)} .efr-wrap .c2{color:var(--cyan)} .efr-wrap .c3{color:var(--pink)} .efr-wrap .c4{color:var(--violet)} .efr-wrap .c5{color:var(--green)}`);
  let mode = "fix", sel = 0, fix = null, tried = {}, spotQ = null;
  const spotItems = spot();
  const quiz = E.quiz({ items: spotItems, check: (q, v) => v === q.ans, render: () => "" });

  // colour a segment list: clauses c1, the fragment c2, faulty break c3, inserted mark c4, connector word c5
  const segHtml = (sg, it, isFaulty, pl) => sg.map(([t, r]) => {
    let c = "";
    if (r === "a" || r === "b") { const part = pl ? pl[r] : it[r]; c = part.k === "ic" && !part.open ? "c1" : "c2"; }
    else if (r === "j") c = isFaulty ? "c3 j" : "c4 j";
    else if (r === "w") c = "c5";
    return c ? `<span class="${c}">${E.esc(t)}</span>` : E.esc(t);
  }).join("");

  function drawFix(){
    const it = ITEMS[sel], f = faulty(it), r = fix ? apply(it, fix) : null, t = tried[it.id] || {};
    dom.innerHTML = `<div class="efr-h">As written · ${TYPE_NAME[it.type]}${it.what ? ": " + it.what : ""}</div><div class="efr-s">${segHtml(f.segs, it, true)}</div>
      <div class="efr-h">Choose a fix</div>${E.chips(FIXES.map(([key, lab]) => [key, (t[key] === true ? "✓ " : t[key] === false ? "✗ " : "") + lab, t[key] === true ? "c5" : ""]), fix)}
      ${r ? `<div class="efr-h">Result</div>${r.na ? `<div class="efr-why">${r.why}</div>` : `<div class="efr-s">${segHtml(r.segs, it, false, r.plan)}</div><div class="efr-why ${r.ok ? "" : "bad"}">${r.ok ? "✓ " : "✗ "}${r.why}</div>`}` : ""}`;
    const all = tally(it), works = all.filter(x => x.ok).map(x => FIXES.find(y => y[0] === x.fix)[1]);
    const done = Object.keys(t).length;
    k.setRO(E.ro({ title: "Fixer", big: r ? (r.na ? "Does not apply" : r.ok ? "Grammatical" : ({ splice: "Comma splice", fused: "Fused sentence", fragment: "Still a fragment" }[r.kind] || "Not standard")) : TYPE_NAME[it.type],
            rows: [{ label: "Fixes tried", value: `${done} of ${FIXES.length}` }, { label: "That work", value: `${Object.values(t).filter(x => x === true).length}`, c: "c5" }],
      landmark: done >= FIXES.length ? { big: `${works.length} fixes work`, note: works.join(" · "), hit: true } : { big: it.frag ? "Attach it or complete it" : "Five standard fixes", note: it.frag ? "A fragment needs a subject and a finite verb of its own, or a sentence to belong to." : "Period · semicolon · comma + conjunction · subordinate one clause · semicolon + conjunctive adverb + comma.", hit: false },
      narr: "The pink mark is the break point. Try every fix: the tally shows which ones make a grammatical sentence (violet = what the fix inserted, green = the connector word)." }));
  }

  function drawSpot(){
    const q = quiz.item, st = quiz.state, it = ITEMS.find(x => q.id.startsWith(x.id));
    dom.innerHTML = `<div class="efr-h">Correct, or which error?</div><div class="efr-s">${E.esc(q.text)}</div>
      <div class="pos-quiz">${SPOT.map(([v, l]) => `<button type="button" data-a="${v}" class="${st.answered ? (v === q.ans ? "right" : st.picked === v ? "wrong" : "") : ""}">${l}</button>`).join("")}</div>`;
    const f = faulty(it);
    k.setRO(E.ro({ title: "Spot the error", big: st.answered ? (st.correct ? "Right" : SPOT.find(s => s[0] === q.ans)[1]) : "?",
      rows: [{ label: "Score", value: `${quiz.score.right} of ${quiz.score.tries}`, c: "c5" }, { label: "Sentence", value: `${quiz.index + 1} of ${quiz.total}` }],
      landmark: st.answered ? { big: SPOT.find(s => s[0] === q.ans)[1], note: q.ans === "ok" ? "Every independent clause is joined or separated correctly, and every piece has a subject and a finite verb." : f.v.why, hit: st.correct } : null,
      narr: "Find each subject and finite verb. Two independent clauses need a period, a semicolon or a comma plus a conjunction between them; a piece with no independent clause is a fragment." }));
  }

  function draw(){ mode === "fix" ? drawFix() : drawSpot(); }
  E.on(dom, ".el-chip", el => { const it = ITEMS[sel]; fix = el.dataset.k; const r = apply(it, fix); (tried[it.id] = tried[it.id] || {})[fix] = r.na ? "na" : r.ok; draw(); });
  E.on(dom, "button[data-a]", el => { if (!quiz.state.answered) { quiz.pick(el.dataset.a); draw(); } });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "fix") {
      k.select("Item", ITEMS.map((x, i) => [i, x.label]), sel, v => { sel = +v; fix = null; draw(); });
      k.button("Next", () => { sel = (sel + 1) % ITEMS.length; fix = null; controls(); draw(); });
    } else {
      k.button("Next", () => { quiz.next(); draw(); });
      k.button("Reset score", () => { quiz.reset(); draw(); }, "btn ghost");
    }
  }
  k.modes([["fix", "Fix it"], ["spot", "Spot the error"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
