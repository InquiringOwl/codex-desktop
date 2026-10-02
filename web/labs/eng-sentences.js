/* ============ Labs: English · Simple, Compound & Complex Sentences (sentence builder + classifier) ============
   Uses the clause-analysis format and parser from eng-clauses.js (EngLab.logic["eng-clauses"]). */
(function(){
const L = window.LABS, E = window.EngLab, C = E.logic["eng-clauses"];

// Cards. Clause text is in the shared format (_s subject, _v finite verb, _m marker) so every built
// sentence can be re-parsed and counted by the same code that analyses the clause lab's sentences.
const IC = [
  { id: "river", t: "the river_s rose_v" },
  { id: "jim", t: "Jim_s kept_v watch" },
  { id: "huck", t: "Huck_s slept_v" },
  { id: "raft", t: "the raft_s drifted_v on" }
];
const DC = [
  { id: "when", t: "when_m night_s fell_v", meaning: "time" },
  { id: "because", t: "because_m the current_s was_v strong", meaning: "cause" },
  { id: "although", t: "although_m the air_s was_v cold", meaning: "concession", comma: true },
  { id: "after", t: "after_m the fog_s lifted_v", meaning: "time" },
  { id: "while", t: "while_m the town_s slept_v", meaning: "time" }
];
const JOIN = [
  { id: "and", t: ", and", label: ", and", kind: "coord", rule: "comma + coordinating conjunction" },
  { id: "but", t: ", but", label: ", but", kind: "coord", rule: "comma + coordinating conjunction" },
  { id: "so", t: ", so", label: ", so", kind: "coord", rule: "comma + coordinating conjunction" },
  { id: "semi", t: ";", label: ";", kind: "semi", rule: "semicolon alone" },
  { id: "mean", t: "; meanwhile ,", label: "; meanwhile,", kind: "adv", rule: "semicolon + conjunctive adverb + comma" },
  { id: "comma", t: ",", label: ", (comma alone)", kind: "splice", rule: "a comma alone cannot join two main clauses" }
];
const SLOTS = ["lead", "a", "join", "b", "tail"];
const SLOT_KIND = { lead: "dc", a: "ic", join: "jn", b: "ic", tail: "dc" };
const find = (kind, id) => (kind === "ic" ? IC : kind === "dc" ? DC : JOIN).find(x => x.id === id);
const words = t => t.split(" ").map(w => w.replace(/_[a-z]+$/, ""));

// Build a sentence from the five slots. Returns the shared-format source (null when the frame is not a sentence),
// tagged tokens for display, the counts, the type and any error.
function build(st){
  const g = k => st[k] ? find(SLOT_KIND[k], st[k]) : null;
  const lead = g("lead"), a = g("a"), j = g("join"), b = g("b"), tail = g("tail");
  const res = { ok: false, error: "", kind: "", ic: (a ? 1 : 0) + (b ? 1 : 0), dc: (lead ? 1 : 0) + (tail ? 1 : 0), type: "", toks: [], src: null, fixes: [] };
  const tk = [];
  const push = (t, tag) => words(t).forEach(w => tk.push({ w, tag }));
  const dcToks = d => words(d.t).forEach((w, i) => tk.push({ w, tag: i ? "dc" : "sub" }));
  if (lead) { dcToks(lead); if (a || b) tk.push({ w: ",", tag: "" }); }
  if (a) push(a.t, "ic");
  if (j) push(j.t, "cc");
  if (b) push(b.t, "ic");
  if (tail) { if (tail.comma && (a || b)) tk.push({ w: ",", tag: "" }); dcToks(tail); }
  if (tk.length) tk.push({ w: ".", tag: "end" });
  tk.forEach((x, i) => { x.glue = i === 0 || /^[,.;]$/.test(x.w); if (i === 0) x.w = C.cap(x.w); });
  res.toks = tk;
  if (!a && !b) { res.error = tk.length ? "Fragment: a dependent clause cannot be a sentence by itself. Add a main clause." : "Tap a card to start: every sentence needs at least one main (independent) clause."; res.kind = tk.length ? "fragment" : "empty"; return res; }
  if (!a) { res.error = "Fill the first main-clause slot before the second."; res.kind = "order"; return res; }
  if (j && !b) { res.error = `A joiner links two main clauses: add a second main clause after “${j.label.trim()}”, or remove the joiner.`; res.kind = "dangling"; return res; }
  const A = words(a.t).join(" "), B = b ? words(b.t).join(" ") : "";
  if (b && (!j || j.kind === "splice")) {
    res.kind = j ? "splice" : "fused";
    res.error = j ? "Comma splice: a comma alone cannot join two independent clauses." : "Fused (run-on) sentence: two independent clauses with nothing between them.";
    res.fixes = [`${C.cap(A)}. ${C.cap(B)}.`, `${C.cap(A)}; ${B}.`, `${C.cap(A)}, and ${B}.`];
    return res;
  }
  res.ok = true;
  res.type = res.ic >= 2 && res.dc ? "compound-complex" : res.ic >= 2 ? "compound" : res.dc ? "complex" : "simple";
  // shared-format source: a leading dependent clause sits inside the first main clause, a trailing one inside the last
  const dcSrc = d => `{A:${d.meaning} ${d.t} }`;
  const first = `{I ${lead ? dcSrc(lead) + " , " : ""}${a.t}${!b && tail ? (tail.comma ? " , " : " ") + dcSrc(tail) : ""} }`;
  const tailB = tail ? (tail.comma ? " , " : " ") + dcSrc(tail) : "";
  const second = !b ? "" : j.kind === "adv" ? ` ; {I meanwhile , ${b.t}${tailB} }` : ` ${j.t.replace(/^, (and|but|so)$/, ", $1_c")} {I ${b.t}${tailB} }`;
  res.src = first + second + " .";
  res.rule = [lead ? "introductory clause + comma" : "", j ? j.rule : "", tail ? (tail.comma ? "comma before a concessive clause at the end" : "no comma before a closing adverb clause") : ""].filter(Boolean);
  return res;
}

// Functional type from the end mark and the clauses (imperative = every main clause has an understood you).
function fnAllowed(a){
  const imp = a.clauses.filter(c => c.type === "I").every(c => c.q.includes("imp"));
  if (a.end === "?") return ["interrogative"];
  if (imp) return ["imperative"];
  return a.end === "!" ? ["exclamatory"] : ["declarative"];
}
const classIds = ["drift", "watson", "lantern", "fog", "storm", "canoe", "night", "gettys", "jim", "huck", "steamboat", "cold", "deep", "asked", "book"];
const TYPES = ["simple", "compound", "complex", "compound-complex"], FUNCS = ["declarative", "interrogative", "imperative", "exclamatory"];

const logic = E.logic["eng-sentence-types"] = { IC, DC, JOIN, SLOTS, SLOT_KIND, build, fnAllowed, classIds, TYPES, FUNCS };

// ---------------- the lab ----------------
L["eng-sentence-types"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap", "est-wrap");
  E.css("css-eng-sentences", `
.est-wrap .est-frame{display:flex;flex-wrap:wrap;gap:6px;align-items:stretch}
.est-wrap .est-slot{min-width:92px;flex:1 1 92px;display:grid;gap:4px;align-content:start;text-align:left;padding:7px 9px;border:1px dashed var(--line-2);border-radius:4px;background:rgba(0,0,0,.2);cursor:pointer;color:var(--muted);font:400 15px/1.35 var(--math)}
.est-wrap .est-slot.full{border-style:solid}
.est-wrap .est-slot.act{border-color:var(--amber);box-shadow:0 0 0 1px var(--amber)}
.est-wrap .est-slot .h{font:600 9.5px/1.2 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.est-wrap .est-slot.jn{flex:0 1 80px;min-width:80px}
.est-wrap .est-pal{display:grid;gap:6px}
.est-wrap .est-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.est-wrap .est-row .h{font:600 10px/1.2 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint);min-width:72px}
.est-wrap .est-card{font:400 15px/1.2 var(--math);padding:7px 10px;border-radius:4px;border:1px solid var(--line-2);background:var(--panel-2);cursor:pointer}
.est-wrap .est-card:disabled{opacity:.35;cursor:default}
.est-wrap .c1{color:var(--amber)} .est-wrap .c2{color:var(--cyan)} .est-wrap .c3{color:var(--pink)} .est-wrap .c4{color:var(--violet)} .est-wrap .c5{color:var(--green)}
.est-wrap .est-err{font:400 14px/1.45 var(--sans);color:var(--red)}
.est-wrap .est-fix{font:400 15px/1.5 var(--math);color:var(--text)}
.est-wrap .est-h{font:600 10.5px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}`);
  let mode = "build", st = { lead: "when", a: "river", join: "and", b: "huck", tail: null }, act = "tail";
  let ci = 0, ans = { type: null, fn: null };
  const items = classIds.map(id => C.byId(id));
  const tagC = { ic: "c1", dc: "c2", cc: "c3", sub: "c4", end: "c5" };
  const cardC = { ic: "c1", dc: "c2", jn: "c3" };

  function cardText(kind, id){ const x = find(kind, id); return kind === "jn" ? x.label : words(x.t).join(" "); }
  function place(kind, id){
    let slot = SLOT_KIND[act] === kind ? act : SLOTS.find(s => SLOT_KIND[s] === kind && !st[s]) || SLOTS.find(s => SLOT_KIND[s] === kind);
    SLOTS.forEach(s => { if (st[s] === id && SLOT_KIND[s] === kind) st[s] = null; });
    st[slot] = id;
    act = SLOTS.find(s => !st[s]) || slot;
  }

  function drawBuild(){
    const r = build(st);
    const names = { lead: "Opening clause", a: "Main clause", join: "Joiner", b: "Main clause", tail: "Closing clause" };
    const frame = SLOTS.map(s => `<button type="button" class="est-slot ${s === "join" ? "jn" : ""} ${st[s] ? "full" : ""} ${s === act ? "act" : ""}" data-s="${s}"><span class="h">${names[s]}${s === "lead" || s === "tail" || s === "b" || s === "join" ? " · optional" : ""}</span>${st[s] ? `<span class="${cardC[SLOT_KIND[s]]}">${E.esc(cardText(SLOT_KIND[s], st[s]))}</span>` : "<span>…</span>"}</button>`).join("");
    const used = new Set(SLOTS.map(s => st[s]).filter(Boolean));
    const row = (h, kind, list) => `<div class="est-row"><span class="h">${h}</span>${list.map(x => `<button type="button" class="est-card ${cardC[kind]}" data-k="${kind}" data-id="${x.id}"${kind !== "jn" && used.has(x.id) ? " disabled" : ""}>${E.esc(cardText(kind, x.id))}</button>`).join("")}</div>`;
    const sent = r.toks.length ? E.words(r.toks, { color: x => tagC[x.tag] || "" }) : "";
    dom.innerHTML = `<div class="est-frame">${frame}</div>
      <div class="est-pal">${row("Main", "ic", IC)}${row("Dependent", "dc", DC)}${row("Joiners", "jn", JOIN)}</div>
      <div class="pos-text">${sent}</div>
      ${r.ok ? "" : `<div class="est-err">${r.error}</div>${r.fixes.length ? `<div class="est-h">Three standard fixes</div><div class="est-fix">${r.fixes.map(f => E.esc(f)).join("<br>")}</div>` : ""}`}`;
    k.setRO(E.ro({ title: "Sentence builder", big: r.ok ? r.type : r.kind === "splice" ? "comma splice" : r.kind === "fused" ? "fused sentence" : r.kind === "fragment" ? "fragment" : "not yet a sentence",
      rows: [{ label: "Independent clauses", value: r.ic, c: "c1" }, { label: "Dependent clauses", value: r.dc, c: "c2" }].concat(r.ok ? r.rule.map(x => ({ label: "Punctuation", value: x })) : []),
      landmark: r.ok ? { big: { simple: "1 main · 0 dependent", compound: "2 main · 0 dependent", complex: "1 main · 1+ dependent", "compound-complex": "2 main · 1+ dependent" }[r.type], note: "The type comes from counting clauses, not from length.", hit: true } : null,
      narr: "Tap a card to drop it into the highlighted slot; tap a highlighted slot again to empty it. Remove the joiner and the second main clause and a compound sentence turns simple." }));
  }

  function drawClass(){
    const it = items[ci], a = C.get(it.id), s = C.structure(a), fnOk = fnAllowed(a);
    const done = ans.type && ans.fn;
    const color = (x, i) => {
      if (!done) return "";
      if (x.clause < 0) return i === a.words.length - 1 ? "c5" : (x.role === "c" || x.w === ";") ? "c3" : "";
      if (/^ms?$/.test(x.role)) return "c4";
      return a.clauses[x.clause].type === "I" ? "c1" : "c2";
    };
    const btns = (list, key, right) => `<div class="pos-quiz">${list.map(v => `<button type="button" data-${key}="${v}" class="${ans[key] ? (right.includes(v) ? "right" : ans[key] === v ? "wrong" : "") : ""}">${v}</button>`).join("")}</div>`;
    dom.innerHTML = `${it.note ? `<div class="pos-src">Note · <i>${it.note}</i></div>` : ""}<div class="pos-text">${E.words(a.words, { color })}</div>
      <div class="est-h">Structure: count the clauses</div>${btns(TYPES, "type", [s.type])}
      <div class="est-h">Function: what does it do?</div>${btns(FUNCS, "fn", fnOk)}`;
    k.setRO(E.ro({ title: "Classify", big: done ? `${s.type} · ${fnOk[0]}` : "?",
      rows: done ? [{ label: "Independent clauses", value: s.ic, c: "c1" }, { label: "Dependent clauses", value: s.dc, c: "c2" }, { label: "End mark", value: a.end, c: "c5" }] : [{ label: "Sentence", value: `${ci + 1} of ${items.length}` }],
      landmark: done ? { big: ans.type === s.type && fnOk.includes(ans.fn) ? "Both right" : "Check the red answer", note: fnOk[0] === "imperative" ? "Imperative: the subject is an understood <i>you</i>." : fnOk[0] === "exclamatory" ? "Exclamatory: <i>What a …</i> / <i>How …</i> with statement word order and an exclamation mark." : fnOk[0] === "interrogative" ? "Interrogative: the auxiliary comes before the subject (<i>Did you see</i>)." : "Declarative: subject before verb, ending in a period.", hit: ans.type === s.type && fnOk.includes(ans.fn) } : null,
      narr: "Count independent clauses (amber) and dependent clauses (cyan) once you answer. A compound predicate (two verbs, one subject) is still one clause." }));
  }

  function draw(){ mode === "build" ? drawBuild() : drawClass(); }
  E.on(dom, ".est-slot", el => { const s = el.dataset.s; if (act === s && st[s]) st[s] = null; act = s; draw(); });
  E.on(dom, ".est-card", el => { place(el.dataset.k, el.dataset.id); draw(); });
  E.on(dom, "button[data-type]", el => { if (!ans.type) ans.type = el.dataset.type; draw(); });
  E.on(dom, "button[data-fn]", el => { if (!ans.fn) ans.fn = el.dataset.fn; draw(); });
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "build") {
      k.button("Clear", () => { SLOTS.forEach(s => st[s] = null); act = "a"; draw(); }, "btn ghost");
      k.button("Example", () => { const ex = [{ lead: null, a: "jim", join: null, b: null, tail: null }, { lead: null, a: "jim", join: "but", b: "huck", tail: null }, { lead: "after", a: "raft", join: null, b: null, tail: null }, { lead: null, a: "river", join: "semi", b: "jim", tail: "although" }]; const cur = ex.findIndex(e => SLOTS.every(s => e[s] === st[s])); st = Object.assign({}, ex[(cur + 1) % ex.length]); act = SLOTS.find(s => !st[s]) || "a"; draw(); }, "btn ghost");
    } else {
      k.select("Sentence", items.map((s, i) => [i, s.label]), ci, v => { ci = +v; ans = { type: null, fn: null }; draw(); });
      k.button("Next", () => { ci = (ci + 1) % items.length; ans = { type: null, fn: null }; controls(); draw(); });
    }
  }
  k.modes([["build", "Build a sentence"], ["class", "Classify"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
};
})();
