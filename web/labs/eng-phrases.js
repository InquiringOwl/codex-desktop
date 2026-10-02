/* ============ Labs: English · Phrases (phrase bracketer + constituency tests) ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const CSS = `
.stage .dom.phx-wrap{padding:58px 20px 22px;display:grid;gap:14px;align-content:start}
.phx-wrap .phx-sent{font:400 clamp(18px,2.2vw,23px)/2.3 var(--math);color:var(--text);overflow-wrap:anywhere}
.phx-wrap .phx-p{border-radius:3px;transition:background .15s}
.phx-wrap .phx-p.sel{background:rgba(255,255,255,.10);box-shadow:0 0 0 1px currentColor}
.phx-wrap .phx-b{font:600 1.05em/1 var(--math);cursor:pointer;padding:0 1px}
.phx-wrap .phx-b sub{font:600 10px/1 var(--ui);letter-spacing:.06em;vertical-align:-2px;margin:0 2px 0 1px}
.phx-wrap .phx-w{font:inherit;color:var(--text);background:none;border:0;margin:0;padding:0 1px;line-height:inherit;cursor:pointer;border-radius:2px}
.phx-wrap .phx-w:hover{background:rgba(255,255,255,.07)}
.phx-wrap .phx-w:focus-visible{outline:2px solid var(--cyan);outline-offset:1px}
.phx-wrap .phx-w.hd{font-weight:700}
.phx-wrap .c1{color:var(--amber)} .phx-wrap .c2{color:var(--cyan)} .phx-wrap .c3{color:var(--pink)} .phx-wrap .c4{color:var(--violet)} .phx-wrap .c5{color:var(--green)} .phx-wrap .cx{color:var(--muted)}
.phx-wrap .phx-lv{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;font:500 11px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.phx-wrap .phx-lv .bar{display:inline-flex;gap:3px}
.phx-wrap .phx-lv .bar i{display:inline-block;width:16px;height:5px;border-radius:2px;background:var(--line-2)}
.phx-wrap .phx-lv .bar i.on{background:var(--amber)}
.phx-wrap .phx-tree{display:grid;gap:3px;border-top:1px dashed var(--line);padding-top:10px}
.phx-wrap .phx-row{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:baseline;padding:3px 6px;border-radius:3px;cursor:pointer;font:400 15px/1.4 var(--math);color:var(--muted)}
.phx-wrap .phx-row:hover{background:rgba(255,255,255,.05)}
.phx-wrap .phx-row.sel{background:rgba(255,255,255,.09);color:var(--text)}
.phx-wrap .phx-row .lb{font:600 10.5px/1.6 var(--ui);letter-spacing:.08em;min-width:30px}
.phx-wrap .phx-row b{color:var(--text)}
.phx-wrap .phx-q{font:400 clamp(19px,2.3vw,24px)/1.7 var(--math);color:var(--text)}
.phx-wrap .phx-q .span{border:1px dashed var(--amber);border-radius:3px;padding:1px 3px}
.phx-wrap .phx-q .span.done{border-style:solid;background:rgba(255,255,255,.07)}
.phx-wrap .phx-ans{display:flex;flex-wrap:wrap;gap:8px}
.phx-wrap .phx-ans button{font:500 13px/1 var(--sans);padding:9px 12px;border-radius:4px;border:1px solid var(--line-2);background:var(--panel-2);color:var(--text);cursor:pointer}
.phx-wrap .phx-ans button:hover{border-color:var(--cyan)}
.phx-wrap .phx-ans button.right{border-color:var(--green);background:#16351f}
.phx-wrap .phx-ans button.wrong{border-color:var(--red);background:#3a1a17}
.phx-wrap .phx-tests{display:grid;gap:8px}
.phx-wrap .phx-test{display:grid;grid-template-columns:22px minmax(0,1fr);gap:2px 8px;align-items:baseline;border:1px solid var(--line);border-radius:4px;background:rgba(0,0,0,.2);padding:7px 10px}
.phx-wrap .phx-test .mk{font:700 15px/1 var(--sans)}
.phx-wrap .phx-test .mk.y{color:var(--green)} .phx-wrap .phx-test .mk.n{color:var(--red)}
.phx-wrap .phx-test .h{font:600 10.5px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.phx-wrap .phx-test .ex{grid-column:2;font:400 16px/1.45 var(--math);color:var(--text)}
.phx-wrap .phx-hint{font-size:13.5px;line-height:1.5;color:var(--muted);border-top:1px dashed var(--line);padding-top:8px}
@media (max-width:560px){ .stage .dom.phx-wrap{padding:54px 12px 16px;gap:12px} .phx-wrap .phx-sent{font-size:17px;line-height:2.25} .phx-wrap .phx-row{font-size:14px} .phx-wrap .phx-test .ex{font-size:15px} }
`;

/* Sentences as labelled bracketings.
   [LABEL:job{substitute}  … ]   LABEL: S Cl Abs NP VP AjP AvP PP; job codes below; ~ = space in the substitute.
   *word or *[ marks the head; bare , . are punctuation. */
const SENTS = [
  { name: "The very old sailor …", note: "A noun phrase with an adjective phrase inside it, and an adverb phrase inside that.",
    src: "[S [NP:subj{He} The [AjP [AvP *very ] *old ] *sailor ] [VP:pred{did~so} *mended [NP:dobj{them} his [AjP *torn ] *nets ] ] . ]" },
  { name: "A girl with a lantern …", note: "Two kinds of prepositional phrase: with a lantern and of the churchyard describe nouns (adjectival); at the gate … tells where she waited (adverbial).",
    src: "[S [NP:subj{She} A *girl [PP *with [NP a *lantern ] ] ] [VP:pred{did~so} *waited [PP{there} *at [NP{it} the *gate [PP *of [NP the *churchyard ] ] ] ] ] . ]" },
  { name: "The children have been reading …", note: "A verb phrase with two auxiliaries before its head, and an adverb phrase nested in an adverb phrase.",
    src: "[S [NP:subj{They} The *children ] [VP:pred{have~been~doing~so} have been *reading [AvP{fast} [AvP *remarkably ] *quickly ] ] . ]" },
  { name: "Our captain, a man of great courage …", note: "An appositive: a second noun phrase, set off by commas, that renames the first.",
    src: "[S [NP:subj{He} *[NP Our *captain ] , [NP:app a *man [PP *of [NP [AjP *great ] *courage ] ] ] , ] [VP:pred{did~so} *nodded ] . ]" },
  { name: "Its sails torn, the ship …", note: "An absolute phrase: a noun phrase plus a participle, modifying the whole clause.",
    src: "[S [Abs:abs [NP:asubj Its *sails ] *[VP *torn ] ] , [NP:subj{it} the *ship ] [VP:pred{did~so} *limped [PP{there} *into [NP{it} the *harbour ] ] ] . ]" },
  { name: "The gulls followed us until …", note: "A prepositional phrase whose complement is a whole clause (the modern analysis; handbooks call until the tide turned an adverb clause).",
    src: "[S [NP:subj{They} The *gulls ] [VP:pred{did~so} *followed [NP:dobj *us ] [PP *until [Cl:pcomp{then} [NP:subj{it} the *tide ] [VP:pred *turned ] ] ] ] . ]" },
  { name: "The harbour water was much too cold …", note: "An adjective phrase with a stacked degree modifier (much too) and a PP complement, after the linking verb was.",
    src: "[S [NP:subj{It} The [NP *harbour ] *water ] [VP:pred *was [AjP:scomp{icy} [AvP [AvP *much ] *too ] *cold [PP *for [NP *swimming ] ] ] ] . ]" }
];
const TYPE = {
  S: ["Clause (sentence)", "cx"], Cl: ["Clause", "cx"], Abs: ["Absolute phrase", "cx"],
  NP: ["Noun phrase", "c1"], VP: ["Verb phrase", "c2"], AjP: ["Adjective phrase", "c3"], AvP: ["Adverb phrase", "c4"], PP: ["Prepositional phrase", "c5"]
};
const DET = new Set("the a an his her its our their my your this that these those some any no every each".split(" "));
const PUNCT = /^[,.;:!?]$/;
const TEST = {
  NP: "Pronoun test: a noun phrase can be replaced by he, she, it or they, and answers who? or what?",
  VP: "Do-so test: the whole predicate can be replaced by do so (did so, have been doing so).",
  AjP: "Slot test: an adjective phrase fills the slot after a linking verb (was ___) or before a noun, and answers how …? or what kind?",
  AvP: "Movement and question test: an adverb phrase answers how, when, where or how much, and can often move.",
  PP: "There/then test and fronting: an adverbial PP can usually be replaced by there or then, or moved to the front.",
  Cl: "Clause test: it has its own subject and finite verb.", S: "Clause test: subject noun phrase + finite verb phrase.",
  Abs: "Movement test: an absolute phrase can move to the end of the sentence; it can also be deleted."
};

function parse(src){
  const toks = src.match(/\*?\[[^\s]+|\]|[^\s\[\]]+/g), words = [], phrases = [];
  let i = 0;
  function node(parent, depth){
    const t = toks[i++], head = t[0] === "*";
    const m = t.replace(/^\*?\[/, "").match(/^([A-Za-z]+)(?::([a-z]+))?(?:\{([^}]*)\})?$/);
    const p = { id: phrases.length, t: m[1], job: m[2] || null, sub: m[3] ? m[3].replace(/~/g, " ") : null, kids: [], parent, depth, isHead: head };
    phrases.push(p);
    while (toks[i] !== "]") {
      const x = toks[i];
      if (/^\*?\[/.test(x)) p.kids.push(node(p, depth + 1));
      else { i++; const w = { w: x.replace(/^\*/, ""), isHead: x[0] === "*" && !PUNCT.test(x.slice(1)), punct: PUNCT.test(x), idx: words.length, parent: p, word: true }; words.push(w); p.kids.push(w); }
    }
    i++;
    p.ht = 1 + Math.max(0, ...p.kids.filter(k => !k.word).map(k => k.ht));
    const ws = []; (function walk(n){ n.kids.forEach(k => k.word ? ws.push(k.idx) : walk(k)); })(p);
    p.from = ws[0]; p.to = ws[ws.length - 1];
    p.headKid = p.kids.find(k => k.isHead) || null;
    return p;
  }
  const root = node(null, 0);
  const headWord = p => { const h = p.headKid; return !h ? null : h.word ? h : headWord(h); };
  phrases.forEach(p => { p.hw = headWord(p); });
  return { root, words, phrases };
}

/* Join words with English spacing (no space before punctuation). */
function join(list){ return list.reduce((s, w) => s + (s && !PUNCT.test(w) ? " " : "") + w, ""); }
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* Constituency tests: is the boxed string a unit? */
const ITEMS = [
  { s: "The very old sailor mended his torn nets.", span: "The very old sailor", ok: 1, type: "Noun phrase (the subject)", c: "c1",
    tests: [["Pronoun", "He mended his torn nets.", 1], ["Cleft (movement)", "It was the very old sailor who mended his torn nets.", 1], ["Fragment answer", "Who mended the nets? — The very old sailor.", 1]] },
  { s: "The very old sailor mended his torn nets.", span: "old sailor mended", ok: 0,
    tests: [["Pro-form", "The very he his torn nets.", 0], ["Cleft (movement)", "It was old sailor mended that the very … his torn nets.", 0], ["Fragment answer", "What happened? — Old sailor mended.", 0]] },
  { s: "A girl with a lantern waited at the gate of the churchyard.", span: "at the gate of the churchyard", ok: 1, type: "Prepositional phrase (adverbial: where she waited)", c: "c5",
    tests: [["Pro-form", "A girl with a lantern waited there.", 1], ["Fronting", "At the gate of the churchyard, a girl with a lantern waited.", 1], ["Fragment answer", "Where did she wait? — At the gate of the churchyard.", 1]] },
  { s: "A girl with a lantern waited at the gate of the churchyard.", span: "lantern waited at", ok: 0,
    tests: [["Pro-form", "A girl with a there the gate of the churchyard.", 0], ["Fronting", "Lantern waited at, a girl with a … the gate.", 0], ["Fragment answer", "What did the girl do? — Lantern waited at.", 0]] },
  { s: "The gulls followed us until the tide turned.", span: "until the tide turned", ok: 1, type: "Prepositional phrase with a clause complement (handbooks: an adverb clause)", c: "c5",
    tests: [["Pro-form", "The gulls followed us until then. (then replaces the clause after until)", 1], ["Fronting", "Until the tide turned, the gulls followed us.", 1], ["Fragment answer", "How long did the gulls follow us? — Until the tide turned.", 1]] },
  { s: "The gulls followed us until the tide turned.", span: "us until the", ok: 0,
    tests: [["Pro-form", "The gulls followed them tide turned.", 0], ["Fronting", "Us until the, the gulls followed … tide turned.", 0], ["Fragment answer", "Whom did they follow, and how long? — Us until the.", 0]] },
  { s: "The very old sailor mended his torn nets.", span: "mended his torn nets", ok: 1, type: "Verb phrase (the predicate)", c: "c2",
    tests: [["Do so", "The young sailor mended his torn nets, and the very old sailor did so too.", 1], ["Fronting", "He swore he would mend his torn nets, and mend his torn nets he did.", 1], ["Fragment answer", "What did the very old sailor do? — Mended his torn nets.", 1]] },
  { s: "A girl with a lantern waited at the gate of the churchyard.", span: "A girl with a lantern", ok: 1, type: "Noun phrase (subject), with an adjectival PP inside it", c: "c1",
    tests: [["Pronoun", "She waited at the gate of the churchyard. (she replaces the PP too)", 1], ["Cleft (movement)", "It was a girl with a lantern who waited at the gate.", 1], ["Fragment answer", "Who waited at the gate? — A girl with a lantern.", 1]] },
  { s: "Our captain, a man of great courage, nodded.", span: "a man of great courage", ok: 1, type: "Appositive noun phrase", c: "c1",
    tests: [["Deletion", "Our captain nodded. (an appositive is an optional extra)", 1], ["Replacement", "A man of great courage nodded. (it can stand in for the phrase it renames)", 1], ["Fragment answer", "What sort of man is our captain? — A man of great courage.", 1]] },
  { s: "Its sails torn, the ship limped into the harbour.", span: "Its sails torn", ok: 1, type: "Absolute phrase (a noun phrase + a participle)", c: "cx",
    tests: [["Movement", "The ship limped into the harbour, its sails torn.", 1], ["Deletion", "The ship limped into the harbour.", 1], ["Stands alone as a sentence?", "Its sails torn. No: torn is a participle, not a finite verb, so this is a phrase, not a clause. (Its sails were torn. is a clause.)", 0]] },
  { s: "The harbour water was much too cold for swimming.", span: "much too cold for swimming", ok: 1, type: "Adjective phrase (subject complement)", c: "c3",
    tests: [["Pro-form", "The harbour water was icy. (one adjective fills the same slot)", 1], ["Coordination", "The harbour water was much too cold for swimming and far too dirty for fishing.", 1], ["Fragment answer", "How cold was the water? — Much too cold for swimming.", 1]] },
  { s: "The harbour water was much too cold for swimming.", span: "cold for", ok: 0,
    tests: [["Pro-form", "The harbour water was much too icy swimming.", 0], ["Coordination", "… much too cold for and dark swimming.", 0], ["Fragment answer", "How was the water? — Cold for.", 0]] }
];

L["eng-phrases"] = k => {
  if (!document.getElementById("css-eng-phrases")) { const s = document.createElement("style"); s.id = "css-eng-phrases"; s.textContent = CSS; document.head.appendChild(s); }
  const dom = k.dom(); dom.classList.add("phx-wrap");
  const P = SENTS.map(s => parse(s.src));
  let mode = "bracket", si = 0, level = 0, sel = null, st = null;
  let qi = 0, pick = null, score = { right: 0, tries: 0 };

  const cur = () => P[si];
  const vis = p => p.ht <= level;
  const lbl = p => p.t === "S" ? "S" : p.t;
  const text = (p, bold) => { const ws = cur().words.slice(p.from, p.to + 1); return ws.reduce((s, w) => s + (s && !w.punct ? " " : "") + (bold && w === p.hw ? `<b>${esc(w.w)}</b>` : esc(w.w)), ""); };
  const parentVis = p => { let q = p.parent; while (q && !vis(q)) q = q.parent; return q; };

  function jobOf(p){
    const par = p.parent, h = par && par.hw ? par.hw.w : "";
    const before = par && par.hw ? p.to < par.hw.idx : false;
    switch (p.job) {
      case "subj": return `Subject of the ${par && par.t === "Cl" ? "clause" : "sentence"}: who or what the clause is about.`;
      case "pred": return "Predicate: the verb with everything that completes or modifies it.";
      case "dobj": return `Direct object of the verb ${h}.`;
      case "scomp": return `Subject complement after the linking verb ${h}: it describes the subject.`;
      case "app": { const ren = par.headKid && !par.headKid.word ? text(par.headKid) : ""; return `Appositive: it renames ${ren}. Set off by commas, it could be deleted.`; }
      case "abs": return "Modifies the whole main clause: it gives the circumstances of the ship's limping.";
      case "asubj": return "The noun phrase of the absolute: what the participle torn is said of.";
      case "pcomp": return `Complement of the preposition ${h}: a whole clause, with its own subject and finite verb.`;
    }
    if (!par) return "The whole sentence: one independent clause, subject + predicate.";
    if (par.t === "PP") return `Object of the preposition ${h}.`;
    if (par.t === "NP") return before ? `Pre-modifier of the noun ${h}.` : `Post-modifier of the noun ${h} (adjectival).`;
    if (par.t === "VP") return `Adverbial: it modifies the verb ${h} (where, when or how).`;
    if (par.t === "AjP") return before ? `Degree modifier of the adjective ${h}.` : `Complement of the adjective ${h}: ${h} for what?`;
    if (par.t === "AvP") return `Degree modifier of the adverb ${h}.`;
    if (par.t === "Abs") return "The participle: the verb part of the absolute phrase.";
    return "Modifies the whole clause.";
  }
  function parts(p){
    const rows = [], hw = p.hw; if (!hw && !p.headKid) return rows;
    const hk = p.headKid, hi = p.kids.indexOf(hk);
    p.kids.forEach((x, i) => {
      if (x.word && x.punct) return;
      const pos = i < hi ? "pre" : i > hi ? "post" : "head";
      const s = x.word ? esc(x.w) : text(x);
      let role;
      if (pos === "head") role = "Head" + (x.word ? "" : ` (${lbl(x)})`);
      else if (p.t === "NP") role = pos === "pre" ? (x.word && DET.has(x.w.toLowerCase()) ? "Determiner" : x.word ? "Pre-modifier" : `Pre-modifier (${lbl(x)})`) : (x.job === "app" ? "Appositive (NP)" : `Post-modifier (${lbl(x)})`);
      else if (p.t === "VP") role = pos === "pre" ? "Auxiliary" : x.job === "dobj" ? "Direct object (NP)" : x.job === "scomp" ? `Subject complement (${lbl(x)})` : `Adverbial (${lbl(x)})`;
      else if (p.t === "PP") role = x.t === "Cl" ? "Complement (clause)" : "Object (NP)";
      else if (p.t === "AjP" || p.t === "AvP") role = pos === "pre" ? `Degree modifier (${lbl(x)})` : `Complement (${lbl(x)})`;
      else role = lbl(x);
      rows.push([role, s, x.word ? (pos === "head" ? TYPE[p.t][1] : "") : TYPE[x.t][1]]);
    });
    return rows;
  }
  function subst(p){
    if (!p.sub) return null;
    const ws = cur().words.map(w => w.w), out = [...ws.slice(0, p.from), p.sub, ...ws.slice(p.to + 1)];
    if (p.from > 0 && /^[A-Z]/.test(ws[0]) && ws[0] !== "I") out[0] = ws[0];
    return cap(join(out));
  }
  function modern(p){
    if (p.t === "PP" && p.kids.some(x => x.t === "Cl")) return ["Clause inside a phrase", "Handbooks call until a subordinating conjunction and until the tide turned an adverb clause. Modern grammars (Huddleston & Pullum) call until a preposition whose complement is a clause, so the whole group is a PP. Both agree the tide turned is a clause."];
    if (p.t === "Abs") return ["Absolute phrase", "A noun phrase plus a participle, with no finite verb. Modern grammars call it a non-finite clause with its own subject. It modifies the whole sentence, so commas set it off."];
    if (p.job === "app") return ["Appositive", "A noun phrase that renames the one beside it. This one is nonrestrictive, so commas set it off; the larger NP, captain plus appositive, is still the subject."];
    if (p.t === "VP" && p.kids.some(x => x.word && !x.punct && !x.isHead && x.idx < (p.hw ? p.hw.idx : 0))) return ["Two senses of verb phrase", `Handbooks call the verb string (${p.kids.filter(x => x.word && x.idx <= p.hw.idx).map(x => x.w).join(" ")}) the verb phrase. Here VP is the whole predicate: the verb string is its head, and the phrases after it are inside it.`];
    if (p.t === "NP" && p.kids.some(x => x.word && DET.has(x.w.toLowerCase()) && x.idx < p.hw.idx)) return ["Determiners", "Traditional grammar counts the, a and his as adjectives. Modern grammars give them their own function, determiner, the first slot of the noun phrase."];
    if (p.t === "NP" && p.from === p.to) return ["A one-word phrase", "A single word that fills a phrase's slot and passes the same tests is a phrase in its own right."];
    if (p.t === "S" || p.t === "Cl") return ["Phrase vs clause", "A clause has a subject and a finite verb; a phrase does not. Everything inside the brackets is built from phrases."];
    return null;
  }

  function controls(){
    k.ctl.innerHTML = ""; st = null;
    if (mode === "bracket") {
      k.select("Sentence", SENTS.map((s, i) => [i, s.name]), si, v => { si = +v; sel = null; st.reset(); });
      st = k.stepper(() => cur().root.ht, v => { level = v; if (sel != null && !vis(cur().phrases[sel])) sel = null; draw(); }, { ms: 1000 });
      k.button("Show all", () => st.finish(), "btn ghost");
    } else {
      k.button("Next item", () => { qi = (qi + 1) % ITEMS.length; pick = null; draw(); });
      k.button("Reset score", () => { score = { right: 0, tries: 0 }; draw(); }, "btn ghost");
    }
  }

  function bracketHTML(){
    const S = cur(); let html = "", prev = null;
    const sp = () => (prev && prev !== "open" ? " " : "");
    (function walk(p){
      const v = vis(p), [, c] = TYPE[p.t];
      if (v) { html += sp() + `<span class="phx-p ${c}${sel === p.id ? " sel" : ""}"><span class="phx-b ${c}" data-p="${p.id}">[<sub>${lbl(p)}</sub></span>`; prev = "open"; }
      p.kids.forEach(x => {
        if (!x.word) { walk(x); return; }
        if (x.punct) { html += esc(x.w); prev = "w"; return; }
        let cls = "phx-w";
        if (x.isHead && vis(x.parent)) cls += " hd " + TYPE[x.parent.t][1];
        // a head phrase's head word (appositive, absolute) is shown through the inner phrase
        html += sp() + `<button type="button" class="${cls}" data-w="${x.idx}">${esc(x.w)}</button>`; prev = "w";
      });
      if (v) { html += `<span class="phx-b ${c}" data-p="${p.id}">]</span></span>`; prev = "close"; }
    })(S.root);
    return html;
  }
  function treeHTML(){
    const S = cur(), rows = [];
    S.phrases.forEach(p => { if (!vis(p)) return; let d = 0, q = p.parent; while (q) { if (vis(q)) d++; q = q.parent; }
      rows.push(`<div class="phx-row${sel === p.id ? " sel" : ""}" data-p="${p.id}" role="button" tabindex="0" style="padding-left:${6 + d * 14}px"><span class="lb ${TYPE[p.t][1]}">${lbl(p)}</span><span>${text(p, true)}</span></div>`); });
    return rows.join("");
  }

  function draw(){
    if (mode === "bracket") {
      const S = cur(), N = S.root.ht, shown = S.phrases.filter(vis);
      dom.innerHTML = `<div class="phx-lv"><span>Level ${level} of ${N}</span><span class="bar">${Array.from({ length: N }, (_, i) => `<i class="${i < level ? "on" : ""}"></i>`).join("")}</span><span>${level === 0 ? "words only" : level === N ? "the whole clause" : shown.length + " phrases bracketed"}</span></div>
        <div class="phx-sent">${bracketHTML()}</div>
        ${level ? `<div class="phx-tree">${treeHTML()}</div>` : ""}`;
      const choose = id => { sel = id; draw(); };
      dom.querySelectorAll(".phx-b").forEach(b => b.onclick = e => { e.stopPropagation(); choose(+b.dataset.p); });
      dom.querySelectorAll(".phx-row").forEach(r => { r.onclick = () => choose(+r.dataset.p); r.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); r.onclick(); } }; });
      dom.querySelectorAll(".phx-w").forEach(b => b.onclick = () => {
        const w = S.words[+b.dataset.w], list = []; let q = w.parent; while (q) { if (vis(q)) list.push(q.id); q = q.parent; }
        if (!list.length) return; const at = list.indexOf(sel); choose(at >= 0 && at < list.length - 1 ? list[at + 1] : list[0]); });
      const p = sel != null ? S.phrases[sel] : null;
      if (p) {
        const [tn, c] = TYPE[p.t], pr = parts(p), sb = subst(p), md = modern(p), hw = p.hw;
        const fin = (p.t === "S" || p.t === "Cl") ? p.kids.find(x => x.t === "VP") : null;
        k.setRO(`<div><h2>${esc(tn)}</h2><div class="ro-big" style="margin-top:8px;font-size:clamp(18px,2vw,24px);line-height:1.35"><span class="${c}">${text(p, true)}</span></div></div>
          <div class="ro-rows">
            ${hw ? `<div class="row"><span>Head</span> <span class="v ${c}">${esc(hw.w)}</span><span class="lbl">${p.headKid && !p.headKid.word ? "inside the " + esc(TYPE[p.headKid.t][0].toLowerCase()) + " " + text(p.headKid) : "the word the phrase is built on"}</span></div>` : ""}
            ${fin ? `<div class="row"><span>Subject + finite verb</span> <span class="v c2">${esc(fin.hw.w)}</span><span class="lbl">so this is a clause, not a phrase</span></div>` : ""}
            <div class="row"><span>Job</span><span class="lbl">${esc(jobOf(p))}</span></div>
            ${pr.filter(r => !/^Head/.test(r[0])).map(r => `<div class="row"><span>${esc(r[0])}</span> <span class="v ${r[2]}">${r[1]}</span></div>`).join("")}
            ${sb ? `<div class="row"><span>Substitution ✓</span><span class="lbl">${esc(sb)}</span></div>` : `<div class="row"><span>Test</span><span class="lbl">${esc(TEST[p.t])}</span></div>`}
          </div>
          ${md ? `<div class="landmark hit"><div class="big">${esc(md[0])}</div><div class="note">${esc(md[1])}</div></div>` : `<div class="landmark"><div class="big">One unit</div><div class="note">${esc(TEST[p.t])}</div></div>`}
          <p class="narr">Click the same word again to climb to the next phrase out.</p>`);
      } else {
        const counts = {}; shown.forEach(q => { counts[q.t] = (counts[q.t] || 0) + 1; });
        k.setRO(`<div><h2>Phrases bracketed</h2><div class="ro-big" style="margin-top:8px"><span class="num">${shown.filter(q => q.t !== "S").length}</span> at level ${level}</div></div>
          <div class="ro-rows">${["NP", "VP", "AjP", "AvP", "PP", "Abs", "Cl"].filter(t => counts[t]).map(t => `<div class="row"><span class="${TYPE[t][1]}">${esc(TYPE[t][0])}</span> <span class="v ${TYPE[t][1]}">${counts[t]}</span></div>`).join("") || `<div class="row"><span class="lbl">Level 0: just the words. Press Step to group them.</span></div>`}</div>
          <div class="landmark${level === N ? " hit" : ""}"><div class="big">${level === N ? "The whole clause" : "Build from the inside out"}</div><div class="note">${esc(SENTS[si].note)}</div></div>
          <p class="narr">${level ? "Click a bracket, a word or a row to see the phrase's type, head and job. Bold words are heads." : "Each step brackets the next layer of phrases, from the smallest up to the clause."}</p>`);
      }
    } else {
      const it = ITEMS[qi], right = pick != null && (pick === "y") === !!it.ok;
      const i0 = it.s.indexOf(it.span), col = pick && it.ok ? it.c : "";
      const sent = esc(it.s.slice(0, i0)) + `<span class="span ${pick ? "done " + col : ""}">${esc(it.span)}</span>` + esc(it.s.slice(i0 + it.span.length));
      dom.innerHTML = `<div class="pos-src">Is the boxed string a unit? · item ${qi + 1} of ${ITEMS.length}</div>
        <div class="phx-q">${sent}</div>
        <div class="phx-ans"><button type="button" data-a="y" class="${pick ? (it.ok ? "right" : pick === "y" ? "wrong" : "") : ""}">A phrase: it works as a unit</button><button type="button" data-a="n" class="${pick ? (!it.ok ? "right" : pick === "n" ? "wrong" : "") : ""}">Not a phrase</button></div>
        ${pick ? `<div class="phx-tests">${it.tests.map(([h, ex, ok]) => `<div class="phx-test"><span class="mk ${ok ? "y" : "n"}">${ok ? "✓" : "✗"}</span><span class="h">${esc(h)}</span><span class="ex">${esc(ex)}</span></div>`).join("")}</div>`
          : `<div class="phx-hint">Try it in your head first: can one word (he, it, there, do so) replace the boxed words? Can they move together? Can they answer a question?</div>`}`;
      dom.querySelectorAll(".phx-ans button").forEach(b => b.onclick = () => { if (pick) return; pick = b.dataset.a; score.tries++; if ((pick === "y") === !!it.ok) score.right++; draw(); });
      k.setRO(`<div><h2>Score</h2><div class="ro-big" style="margin-top:8px"><span class="num c5">${score.right}</span> / <span class="num">${score.tries}</span></div></div>
        <div class="ro-rows">
          <div class="row"><span>Substitution</span><span class="lbl">one word replaces the whole string</span></div>
          <div class="row"><span>Movement</span><span class="lbl">the string moves as a block (fronting, a cleft: It was … that)</span></div>
          <div class="row"><span>Fragment answer</span><span class="lbl">the string alone answers a question</span></div>
        </div>
        ${pick ? `<div class="landmark hit"><div class="big">${right ? "Right" : "Not quite"}: ${it.ok ? `<span class="${it.c}">${esc(it.type)}</span>` : "not a constituent"}</div><div class="note">${esc(it.ok ? "It passes the tests, so it is a constituent: one unit in the sentence's structure." : "It fails every test. These words sit next to each other, but they belong to different phrases.")}</div></div>`
          : `<div class="landmark"><div class="big">Phrase or not?</div><div class="note">Words next to each other are not always a phrase. Only a real unit passes the tests.</div></div>`}
        <p class="narr">${pick ? "Press Next item for another string." : "After you answer, the three tests are run on the boxed words."}</p>`);
    }
  }

  const md = k.modes([["bracket", "Bracket a sentence"], ["tests", "Is it a phrase?"]], mode, m => { mode = m; controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
};
})();
