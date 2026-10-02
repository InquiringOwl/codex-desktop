/* ============ Labs: English · Prepositions & Conjunctions ("joiner") ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

const CSS = `
.stage .dom.jn-wrap{padding:58px 20px 22px;display:grid;gap:14px;align-content:start}
.jn-wrap .jn-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.jn-wrap .jn-card{border:1px solid var(--line);border-left:3px solid currentColor;border-radius:4px;background:rgba(0,0,0,.22);padding:8px 10px;display:grid;gap:3px}
.jn-wrap .jn-card .h{font:600 10.5px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase}
.jn-wrap .jn-card .t{font:400 17px/1.35 var(--math);color:var(--text)}
.jn-wrap .jn-card .st{font:500 11px/1.2 var(--ui);letter-spacing:.06em;color:var(--muted)}
.jn-wrap .jn-card.dep{border-style:dashed;border-left-style:solid}
.jn-wrap .jn-out{border:1px solid var(--line-2);border-radius:4px;background:rgba(0,0,0,.32);padding:12px 14px;display:grid;gap:6px}
.jn-wrap .jn-sent{font:400 clamp(19px,2.2vw,24px)/1.5 var(--math);color:var(--text)}
.jn-wrap .jn-sent .mk{font-weight:700;color:#fff;background:rgba(242,184,75,.22);border-radius:2px;padding:0 2px;margin:0 1px}
.jn-wrap .jn-sent .cn{font-weight:600;border-bottom:2px solid currentColor}
.jn-wrap .jn-bad{font:400 15px/1.45 var(--math);color:var(--faint)}
.jn-wrap .jn-bad s{color:var(--red);text-decoration-thickness:1px}
.jn-wrap .jn-bad b{font:600 10.5px/1 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-right:6px}
.jn-wrap .jn-tog{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center;font:500 12px/1.2 var(--sans);color:var(--muted)}
.jn-wrap .jn-seg{display:inline-flex;border:1px solid var(--line-2);border-radius:4px;overflow:hidden}
.jn-wrap .jn-seg button{font:500 12px/1 var(--sans);padding:6px 9px;border:0;background:var(--panel-2);color:var(--muted);cursor:pointer}
.jn-wrap .jn-seg button+button{border-left:1px solid var(--line-2)}
.jn-wrap .jn-seg button[aria-pressed="true"]{background:var(--cyan);color:var(--ink)}
.jn-wrap .jn-grp{display:grid;gap:6px}
.jn-wrap .jn-grp .h{font:600 10.5px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.jn-wrap .jn-chips{display:flex;flex-wrap:wrap;gap:6px}
.jn-wrap .jn-chips button{font:400 15px/1 var(--math);padding:7px 10px;border-radius:4px;border:1px solid var(--line-2);background:var(--panel-2);color:var(--text);cursor:pointer}
.jn-wrap .jn-chips button:hover{border-color:var(--cyan)}
.jn-wrap .jn-chips button.on{border-color:currentColor;background:rgba(255,255,255,.08);font-weight:600}
.jn-wrap .jn-chips button.on.c5{color:var(--green)} .jn-wrap .jn-chips button.on.c4{color:var(--violet)}
.jn-wrap .jn-chips button .fit{display:inline-block;width:6px;height:6px;border-radius:50%;margin-left:6px;vertical-align:middle;background:var(--line-2)}
.jn-wrap .jn-chips button .fit.y{background:var(--green)}
.jn-wrap .jn-q{font:400 clamp(19px,2.3vw,24px)/1.6 var(--math);color:var(--text)}
.jn-wrap .jn-q b{font-weight:600;border-bottom:2px solid currentColor;padding:0 2px}
.jn-wrap .jn-q .fo{border-bottom:1px dashed currentColor}
.jn-wrap .jn-ans{display:flex;flex-wrap:wrap;gap:8px}
.jn-wrap .jn-ans button{font:500 13px/1 var(--sans);padding:9px 12px;border-radius:4px;border:1px solid var(--line-2);background:var(--panel-2);color:var(--text);cursor:pointer}
.jn-wrap .jn-ans button:hover{border-color:var(--cyan)}
.jn-wrap .jn-ans button.right{border-color:var(--green);background:#16351f}
.jn-wrap .jn-ans button.wrong{border-color:var(--red);background:#3a1a17}
.jn-wrap .jn-test{font-size:13.5px;line-height:1.5;color:var(--muted);border-top:1px dashed var(--line);padding-top:8px}
@media (max-width:560px){ .stage .dom.jn-wrap{padding:54px 12px 16px;gap:12px} .jn-wrap .jn-card .t{font-size:15.5px} .jn-wrap .jn-chips button{font-size:14px;padding:6px 8px} }
`;

/* Connectors. kind: cc coordinating conjunction, sc subordinating conjunction, ca conjunctive adverb.
   claim(X, Y): what the connector says about the clauses (X = the clause it introduces). */
const CON = [
  { w: "and", kind: "cc", rel: "addition", claim: "Clause B is added to clause A, often as the next event." },
  { w: "but", kind: "cc", rel: "contrast", claim: "Clause B contrasts with A or goes against what A leads you to expect." },
  { w: "yet", kind: "cc", rel: "concession", claim: "Clause B is true in spite of A." },
  { w: "or", kind: "cc", rel: "alternative", claim: "One of the two holds. After a must or a command it means “if not A, then B”." },
  { w: "nor", kind: "cc", rel: "negative addition", claim: "Clause A is negative and B is not true either. The clause after nor inverts: nor did…, nor will…." },
  { w: "for", kind: "cc", rel: "cause", claim: "Clause B gives the reason for A. Formal; always written after a comma." },
  { w: "so", kind: "cc", rel: "result", claim: "Clause B is a result of A." },
  { w: "because", kind: "sc", rel: "cause", claim: "The because-clause is the reason for the other clause." },
  { w: "since", kind: "sc", rel: "cause", claim: "The since-clause is the reason for the other clause. (Since can also mean “from the time that”.)" },
  { w: "although", kind: "sc", rel: "concession", claim: "The main clause is true in spite of the although-clause." },
  { w: "while", kind: "sc", rel: "contrast", claim: "The two clauses contrast. (While can also mean “during the time that”.)" },
  { w: "when", kind: "sc", rel: "time", tc: 1, claim: "The main clause happens at the time of the when-clause." },
  { w: "before", kind: "sc", rel: "time", tc: 1, claim: "The main clause happens earlier than the before-clause." },
  { w: "after", kind: "sc", rel: "time", tc: 1, claim: "The main clause happens later than the after-clause." },
  { w: "until", kind: "sc", rel: "time", tc: 1, claim: "The main clause lasts up to the moment of the until-clause." },
  { w: "if", kind: "sc", rel: "condition", tc: 1, claim: "The main clause depends on the if-clause coming true." },
  { w: "unless", kind: "sc", rel: "condition", tc: 1, claim: "The main clause happens if the unless-clause does not." },
  { w: "so that", kind: "sc", rel: "purpose", claim: "The so-that clause is the purpose of the main clause." },
  { w: "however", kind: "ca", rel: "contrast", claim: "Clause B contrasts with clause A." },
  { w: "nevertheless", kind: "ca", rel: "concession", claim: "Clause B is true in spite of A." },
  { w: "therefore", kind: "ca", rel: "result", claim: "Clause B follows from A as a conclusion or result." },
  { w: "consequently", kind: "ca", rel: "result", claim: "Clause B is a consequence of A." },
  { w: "moreover", kind: "ca", rel: "addition", claim: "Clause B adds a further point in the same direction as A." },
  { w: "otherwise", kind: "ca", rel: "condition", claim: "If A does not happen, B will." },
  { w: "meanwhile", kind: "ca", rel: "time", claim: "Clause B happens at the same time as A." },
  { w: "then", kind: "ca", rel: "time", claim: "Clause B happens next, after A." }
];
const KIND = { cc: ["Coordinating conjunction", "c5"], sc: ["Subordinating conjunction", "c5"], ca: ["Conjunctive adverb", "c4"] };
const CONCESSIVE_COMMA = new Set(["although", "while"]);   // set off by a comma even at the end of the sentence
/* Clause pairs. t: as a main clause; sub: inside a time or condition clause (present for future);
   inv: inverted after nor. fits: connector choices whose meaning suits the pair ("w:A" = subordinator on clause A). */
const PAIRS = [
  { name: "storm / ferry", A: { t: "the storm broke" }, B: { t: "the ferry stayed in port", inv: "did the ferry stay in port" },
    fits: ["and", "so", "because:A", "since:A", "when:A", "after:A", "until:A", "therefore", "consequently", "then"] },
  { name: "tickets / hall", A: { t: "the tickets were expensive" }, B: { t: "the hall was full", inv: "was the hall full" },
    fits: ["and", "but", "yet", "although:A", "while:A", "however", "nevertheless"] },
  { name: "frost / apples", A: { t: "the frost comes early" }, B: { t: "the apples will ripen", sub: "the apples ripen", inv: "will the apples ripen" },
    fits: ["but", "yet", "although:A", "while:A", "unless:A", "however", "nevertheless"] },
  { name: "lamp / ships", A: { t: "the keeper lit the lamp" }, B: { t: "the ships could see the rocks", inv: "could the ships see the rocks" },
    fits: ["and", "so", "because:A", "since:A", "when:A", "after:A", "so that:B", "therefore", "consequently", "then"] },
  { name: "letter / messenger", A: { t: "the letter did not arrive", neg: 1 }, B: { t: "the messenger did not return", inv: "did the messenger return" },
    fits: ["and", "nor", "moreover", "meanwhile"] },
  { name: "sails / mast", A: { t: "the crew must reef the sails" }, B: { t: "the mast will snap", sub: "the mast snaps", inv: "will the mast snap" },
    fits: ["or", "for", "because:B", "since:B", "otherwise", "before:B"] }
];

/* Mode 2: one word, several jobs. Answer keys: p preposition, sc subordinating conj., cc coordinating conj., av adverb (particle). */
const JOBS = {
  before: [
    ["We sailed <b>before</b> <span class='fo c3'>dawn</span>.", "p", "A noun phrase follows (<i>dawn</i>): it is the object. <i>Before dawn</i> is a prepositional phrase that moves as a unit: <i>Before dawn, we sailed.</i>"],
    ["We sailed <b>before</b> <span class='fo c2'>the sun rose</span>.", "sc", "A whole clause follows, with its own subject (<i>the sun</i>) and finite verb (<i>rose</i>). Modern grammars call this a preposition with a clause as its complement."],
    ["We had sailed there <b>before</b>.", "av", "Nothing follows it. It means “earlier” and modifies the verb: an adverb."]],
  since: [
    ["The light has burned <b>since</b> <span class='fo c3'>Tuesday</span>.", "p", "A noun phrase follows (<i>Tuesday</i>): a preposition of time."],
    ["<b>Since</b> <span class='fo c2'>you ask</span>, I will tell you.", "sc", "A clause follows (<i>you ask</i>). Here since means “because”: a subordinating conjunction of cause."],
    ["We have not met <b>since</b>.", "av", "Nothing follows: an adverb meaning “from then until now”."]],
  for: [
    ["The keeper lit a lamp <b>for</b> <span class='fo c3'>the ships</span>.", "p", "A noun phrase follows (<i>the ships</i>): a preposition."],
    ["We hurried, <b>for</b> <span class='fo c2'>the tide was turning</span>.", "cc", "It joins two independent clauses after a comma and means “because”. Unlike because, for cannot open the sentence (<i>For the tide was turning, we hurried</i> fails): a coordinating conjunction."]],
  but: [
    ["Everyone <b>but</b> <span class='fo c3'>the captain</span> slept.", "p", "A noun phrase follows and but means “except”: a preposition. Test: swap in <i>except</i>."],
    ["The captain slept, <b>but</b> <span class='fo c2'>the crew kept watch</span>.", "cc", "It joins two independent clauses after a comma and signals contrast: a coordinating conjunction."],
    ["He is <b>but</b> a boy.", "av", "It means “only” and modifies the phrase <i>a boy</i>: an adverb (formal style)."]],
  up: [
    ["She ran <b>up</b> <span class='fo c3'>the hill</span>.", "p", "Movement test: <i>Up the hill she ran</i> works, so <i>up the hill</i> is a prepositional phrase."],
    ["She looked <b>up</b> the word.", "av", "A particle of the phrasal verb <i>look up</i>. Tests: it can follow the object (<i>looked the word up</i>), a pronoun must go before it (<i>looked it up</i>, not <i>looked up it</i>), and <i>Up the word she looked</i> is impossible."],
    ["She looked the word <b>up</b>.", "av", "The same particle after the object. A preposition can never be separated from its object like this."]],
  after: [
    ["The gulls followed us <b>after</b> <span class='fo c3'>lunch</span>.", "p", "A noun phrase follows (<i>lunch</i>): a preposition."],
    ["The gulls followed us <b>after</b> <span class='fo c2'>the nets came up</span>.", "sc", "A clause follows (subject <i>the nets</i>, verb <i>came</i>): a subordinating conjunction of time."],
    ["The gulls came soon <b>after</b>.", "av", "Nothing follows: an adverb meaning “afterwards”, itself modified by <i>soon</i>."]]
};
const ANS = [["p", "Preposition"], ["sc", "Subordinating conjunction"], ["cc", "Coordinating conjunction"], ["av", "Adverb (particle)"]];

L["eng-function-words"] = k => {
  if (!document.getElementById("css-eng-joiners")) { const s = document.createElement("style"); s.id = "css-eng-joiners"; s.textContent = CSS; document.head.appendChild(s); }
  const dom = k.dom(); dom.classList.add("jn-wrap");
  let mode = "join", pi = 0, ci = 6, att = "A", depFirst = true;   // start on "so" with storm / ferry
  let word = "before", ji = 0, pick = null, score = { right: 0, tries: 0 };

  /* Build the joined sentence as coloured parts and say what it means. */
  function build(){
    const P = PAIRS[pi], c = CON[ci], A = P.A, B = P.B;
    const seg = (s, cls) => `<span class="${cls}">${esc(s)}</span>`, mk = s => `<span class="mk">${esc(s)}</span>`;
    const cn = s => `<span class="cn ${KIND[c.kind][1]}">${esc(s)}</span>`;
    let html, plain, rule, bad = "", dep = null, fitKey = c.w;
    if (c.kind === "cc") {
      const second = c.w === "nor" ? B.inv : B.t;
      html = seg(cap(A.t), "c1") + mk(",") + " " + cn(c.w) + " " + seg(second, "c2") + mk(".");
      plain = `${cap(A.t)}, ${c.w} ${second}.`;
      rule = c.w === "nor"
        ? "Comma + nor between two independent clauses. Nor is followed by inverted order (auxiliary before the subject): nor did…"
        : "Comma + coordinating conjunction between two independent clauses. With two very short clauses the comma may be dropped (except before for and so, where it prevents misreading).";
      bad = `<b>Comma splice</b><s>${esc(cap(A.t))}, ${esc(B.t)}.</s> A comma alone cannot join two independent clauses.`;
    } else if (c.kind === "sc") {
      const X = att === "A" ? A : B, Y = att === "A" ? B : A, xc = att === "A" ? "c1" : "c2", yc = att === "A" ? "c2" : "c1";
      const xs = c.tc && X.sub ? X.sub : X.t; dep = att; fitKey = c.w + ":" + att;
      if (depFirst) {
        html = cn(cap(c.w)) + " " + seg(xs, xc) + mk(",") + " " + seg(Y.t, yc) + mk(".");
        plain = `${cap(c.w)} ${xs}, ${Y.t}.`;
        rule = "An introductory dependent clause is followed by a comma.";
      } else {
        const cm = CONCESSIVE_COMMA.has(c.w);
        html = seg(cap(Y.t), yc) + (cm ? mk(",") : "") + " " + cn(c.w) + " " + seg(xs, xc) + mk(".");
        plain = `${cap(Y.t)}${cm ? "," : ""} ${c.w} ${xs}.`;
        rule = cm ? `A dependent clause at the end usually takes no comma, but a clause of contrast or concession (${c.w}) is set off by one.` : "A dependent clause at the end of the sentence takes no comma.";
      }
      bad = `<b>Fragment</b><s>${esc(cap(c.w))} ${esc(xs)}.</s> The dependent clause cannot stand alone as a sentence.`;
      if (c.tc && X.sub) rule += ` In a clause of time or condition English uses the present for future time: ${c.w} ${X.sub}, not ${c.w} ${X.t}.`;
    } else {
      const after = c.w === "then" ? "" : ",";
      html = seg(cap(A.t), "c1") + mk(";") + " " + cn(c.w) + (after ? mk(after) : "") + " " + seg(B.t, "c2") + mk(".");
      plain = `${cap(A.t)}; ${c.w}${after} ${B.t}.`;
      rule = c.w === "then"
        ? "Semicolon before the adverb (a period also works). Short adverbs such as then usually take no comma after them."
        : `Semicolon before the conjunctive adverb and a comma after it. A period also works: ${cap(A.t)}. ${cap(c.w)}, ${B.t}. The adverb can also move inside clause B, set off by commas.`;
      bad = `<b>Comma splice</b><s>${esc(cap(A.t))}, ${esc(c.w)}${after} ${esc(B.t)}.</s> ${esc(cap(c.w))} is an adverb, not a conjunction, so a comma before it does not join the clauses.`;
    }
    let fit = P.fits.includes(fitKey), why = c.claim;
    if (c.w === "nor" && !A.neg) why = "Nor needs a negative first clause (not, never, no…). Clause A here is positive.";
    return { html, plain, rule, bad, dep, fit, why };
  }

  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "join") {
      k.select("Clause pair", PAIRS.map((p, i) => [i, p.name]), pi, v => { pi = +v; draw(); });
      k.button("Next connector", () => { ci = (ci + 1) % CON.length; draw(); });
      k.button("Swap subordinate clause", () => { att = att === "A" ? "B" : "A"; draw(); }, "btn ghost");
    } else {
      k.select("Word", Object.keys(JOBS).map(w => [w, w]), word, v => { word = v; ji = 0; pick = null; draw(); });
      k.button("Next sentence", () => { ji = (ji + 1) % JOBS[word].length; pick = null; draw(); });
      k.button("Reset score", () => { score = { right: 0, tries: 0 }; draw(); }, "btn ghost");
    }
  }

  function draw(){
    if (mode === "join") {
      const P = PAIRS[pi], c = CON[ci], r = build(), sub = c.kind === "sc";
      const card = (id, cl, cc) => { const isDep = r.dep === id; return `<div class="jn-card ${cc}${isDep ? " dep" : ""}"><span class="h">Clause ${id}</span><span class="t">${esc(cap(cl.t))}.</span><span class="st">${isDep ? "now dependent: it needs the other clause" : "independent: can stand alone"}</span></div>`; };
      const chip = (x, i) => { const key = x.kind === "sc" ? x.w + ":" + att : x.w;
        return `<button type="button" data-i="${i}" class="${KIND[x.kind][1]}${i === ci ? " on" : ""}" title="${esc(x.rel)}">${esc(x.w)}<span class="fit${P.fits.includes(key) ? " y" : ""}"></span></button>`; };
      const grp = (kind, h) => `<div class="jn-grp"><span class="h">${h}</span><div class="jn-chips">${CON.map((x, i) => x.kind === kind ? chip(x, i) : "").join("")}</div></div>`;
      const seg = (lbl, opts, val, key) => `<span>${lbl}</span><span class="jn-seg">${opts.map(([v, t]) => `<button type="button" data-${key}="${v}" aria-pressed="${String(v === val)}">${t}</button>`).join("")}</span>`;
      dom.innerHTML = `<div class="jn-cards">${card("A", P.A, "c1")}${card("B", P.B, "c2")}</div>
        <div class="jn-out"><div class="jn-sent">${r.html}</div><div class="jn-bad">${r.bad}</div></div>
        ${sub ? `<div class="jn-tog">${seg("Subordinator on", [["A", "Clause A"], ["B", "Clause B"]], att, "att")}${seg("Dependent clause", [["1", "first"], ["0", "second"]], depFirst ? "1" : "0", "ord")}</div>` : ""}
        ${grp("cc", "Coordinating conjunctions (FANBOYS)")}${grp("sc", "Subordinating conjunctions")}${grp("ca", "Conjunctive adverbs")}`;
      dom.querySelectorAll(".jn-chips button").forEach(b => b.onclick = () => { ci = +b.dataset.i; draw(); });
      dom.querySelectorAll("[data-att]").forEach(b => b.onclick = () => { att = b.dataset.att; draw(); });
      dom.querySelectorAll("[data-ord]").forEach(b => b.onclick = () => { depFirst = b.dataset.ord === "1"; draw(); });
      const [kn, kc] = KIND[c.kind];
      const status = r.dep ? `Clause ${r.dep} is dependent; clause ${r.dep === "A" ? "B" : "A"} is the main clause.` : "Both clauses stay independent.";
      k.setRO(`<div><h2>${esc(kn)}</h2><div class="ro-big" style="margin-top:8px"><span class="${kc}">${esc(c.w)}</span></div></div>
        <div class="ro-rows">
          <div class="row"><span>Relation</span> <span class="v ${kc}">${esc(c.rel)}</span><span class="lbl">${esc(c.claim)}</span></div>
          <div class="row"><span>Clauses</span><span class="lbl">${esc(status)}</span></div>
          <div class="row"><span>Punctuation</span><span class="lbl">${esc(r.rule)}</span></div>
        </div>
        <div class="landmark${r.fit ? " hit" : ""}"><div class="big">${r.fit ? "Grammatical, and the meaning fits" : "Grammatical, but the logic is off"}</div><div class="note">${esc(r.fit ? r.why : (r.why === c.claim ? "The punctuation is right, but this connector claims: " + c.claim.charAt(0).toLowerCase() + c.claim.slice(1) + " That is not how these two events relate." : r.why))}</div></div>
        <p class="narr">${c.kind === "ca" ? "A conjunctive adverb is an adverb: it needs a semicolon or a period before it." : c.kind === "sc" ? "Flip the order and watch the comma come and go." : "Green dots mark the connectors whose meaning suits this pair. Try a subordinator next."}</p>`);
    } else {
      const list = JOBS[word], [s, ans, test] = list[ji], right = pick === ans;
      const name = ANS.find(a => a[0] === ans)[1], col = ans === "av" ? "c4" : "c5";
      dom.innerHTML = `<div class="pos-src">One word, different jobs: <i>${esc(word)}</i> · sentence ${ji + 1} of ${list.length}</div>
        <div class="jn-q">${pick ? s.replace("<b>", `<b class="${col}">`) : s.replace(/<span class='fo c\d'>([^<]*)<\/span>/, "$1")}</div>
        <div class="jn-ans">${ANS.map(([v, t]) => `<button type="button" data-a="${v}" class="${pick ? (v === ans ? "right" : v === pick ? "wrong" : "") : ""}">${t}</button>`).join("")}</div>
        ${pick ? `<div class="jn-test">${test}</div>` : `<div class="jn-test">Look at what follows the word: a noun phrase, a whole clause, or nothing?</div>`}`;
      dom.querySelectorAll(".jn-ans button").forEach(b => b.onclick = () => { if (pick) return; pick = b.dataset.a; score.tries++; if (pick === ans) score.right++; draw(); });
      k.setRO(`<div><h2>Score</h2><div class="ro-big" style="margin-top:8px"><span class="num c5">${score.right}</span> / <span class="num">${score.tries}</span></div></div>
        <div class="ro-rows">
          <div class="row"><span class="c3">Noun phrase after it</span><span class="lbl">preposition (the noun phrase is its object)</span></div>
          <div class="row"><span class="c2">Clause after it</span><span class="lbl">subordinating conjunction, or a coordinating one between two independent clauses</span></div>
          <div class="row"><span class="c4">Nothing after it</span><span class="lbl">adverb (a particle if it belongs to a phrasal verb)</span></div>
        </div>
        ${pick ? `<div class="landmark hit"><div class="big">${right ? "Right" : "Not quite"}: <span class="${col}">${esc(name)}</span></div><div class="note">The class depends on what the word takes after it in this sentence, not on the word itself.</div></div>`
          : `<div class="landmark"><div class="big">Choose a class</div><div class="note">The underlined word is spelled the same in every sentence. Its job changes.</div></div>`}
        <p class="narr">${pick ? "Press Next sentence for another use of the same word." : "After you answer, the object or clause it takes is underlined."}</p>`);
    }
  }
  const md = k.modes([["join", "Join two clauses"], ["jobs", "One word, different jobs"]], mode, m => { mode = m; controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
};
})();
