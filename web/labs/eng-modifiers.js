/* ============ Labs: English · Adjectives & Adverbs ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function css(){
  if (document.getElementById("css-eng-modifiers")) return;
  const s = document.createElement("style"); s.id = "css-eng-modifiers";
  s.textContent = `
.mod-lab .mod-h{font:500 11px/1.3 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin:0 0 6px}
.mod-lab .mod-phrase{font:400 clamp(20px,2.6vw,28px)/1.45 var(--math);color:var(--text)}
.mod-lab .mod-phrase .x{color:var(--faint)}
.mod-lab .mod-phrase .bad{color:var(--red)}
.mod-lab .mod-phrase .ok{color:var(--green)}
.mod-lab .mod-phrase button{font:inherit;line-height:inherit;background:none;border:0;padding:0 2px;margin:0;color:var(--pink);cursor:pointer;border-bottom:2px solid currentColor;border-radius:2px}
.mod-lab .mod-phrase button:hover{background:rgba(255,255,255,.07)}
.mod-lab .mod-ruler{display:grid;grid-template-columns:repeat(auto-fit,minmax(68px,1fr));gap:4px}
.mod-lab .mod-slot{border:1px solid var(--line);border-radius:3px;padding:5px 6px 6px;min-height:48px;background:rgba(0,0,0,.18);display:flex;flex-direction:column;gap:3px}
.mod-lab .mod-slot .k{font:600 9px/1.1 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.mod-lab .mod-slot .w{font:400 15px/1.2 var(--math);color:var(--pink);overflow-wrap:anywhere}
.mod-lab .mod-slot.full{border-color:rgba(240,124,160,.55);background:rgba(240,124,160,.07)}
.mod-lab .mod-slot.noun{border-color:rgba(242,184,75,.6);background:rgba(242,184,75,.08)}
.mod-lab .mod-slot.noun .w{color:var(--amber)}
.mod-lab .mod-slot.clash{border-color:var(--red)}
.mod-lab .mod-arrow{font:500 11px/1.3 var(--ui);color:var(--faint);letter-spacing:.06em}
.mod-lab .mod-bins{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px}
.mod-lab .mod-bin{border:1px solid var(--line);border-radius:4px;padding:7px 8px;background:rgba(0,0,0,.15)}
.mod-lab .mod-bin .k{font:600 10px/1 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.mod-lab .mod-chips{display:flex;flex-wrap:wrap;gap:5px}
.mod-lab .mod-chip{font:400 14px/1 var(--math);padding:6px 8px;border-radius:3px;border:1px solid var(--line-2);background:var(--panel-2);color:var(--text);cursor:pointer}
.mod-lab .mod-chip:hover{border-color:var(--pink)}
.mod-lab .mod-chip[aria-pressed="true"]{background:rgba(240,124,160,.18);border-color:var(--pink);color:var(--pink)}
.mod-lab .mod-stairs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;align-items:end;min-height:170px}
.mod-lab .mod-step{all:unset;box-sizing:border-box;cursor:pointer;border:1px solid var(--line-2);border-radius:4px 4px 0 0;background:rgba(0,0,0,.2);padding:8px 6px;display:flex;flex-direction:column;justify-content:flex-start;gap:6px;text-align:center;transition:height .25s}
.mod-lab .mod-step:hover{border-color:var(--muted)}
.mod-lab .mod-step:focus-visible{outline:2px solid var(--cyan)}
.mod-lab .mod-step.sel{border-color:var(--amber);background:rgba(242,184,75,.08)}
.mod-lab .mod-step .k{font:600 9px/1.1 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.mod-lab .mod-step .f{font:400 clamp(15px,2vw,21px)/1.25 var(--math);overflow-wrap:anywhere}
.mod-lab .mod-step.no .f{color:var(--faint);text-decoration:line-through}
.mod-lab .mod-frame{font:400 clamp(18px,2.2vw,23px)/1.5 var(--math);border-left:2px solid var(--line-2);padding:2px 0 2px 12px}
.mod-lab .mod-sent{position:relative;font:400 clamp(21px,2.6vw,28px)/2.3 var(--math);padding-top:26px}
.mod-lab .mod-sent svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.mod-lab .mod-sent .w{font:inherit;line-height:1.2;background:none;border:0;margin:0;padding:0 2px;color:var(--text);cursor:pointer;border-radius:3px;border-bottom:2px solid transparent}
.mod-lab .mod-sent .w:hover{background:rgba(255,255,255,.08)}
.mod-lab .mod-sent .w:focus-visible{outline:2px solid var(--cyan)}
.mod-lab .mod-sent .w.adv{color:var(--violet);box-shadow:0 0 0 1px var(--violet);cursor:default;background:rgba(180,155,255,.1)}
.mod-lab .mod-sent .w.wrong{color:var(--red);border-bottom-color:var(--red)}
.mod-lab .mod-sent .w.c1{color:var(--amber);border-bottom-color:currentColor} .mod-lab .mod-sent .w.c2{color:var(--cyan);border-bottom-color:currentColor}
.mod-lab .mod-sent .w.c3{color:var(--pink);border-bottom-color:currentColor} .mod-lab .mod-sent .w.c4{color:var(--violet);border-bottom-color:currentColor}
.mod-lab .mod-sent .w.cl{border-bottom-color:var(--muted)}
.mod-lab .mod-sent .p{color:var(--muted)}
.mod-lab .mod-row{display:flex;flex-wrap:wrap;gap:8px}
.mod-lab .mod-row button{font:500 13px/1 var(--sans);padding:9px 12px;border-radius:4px;border:1px solid var(--line-2);background:var(--panel-2);color:var(--text);cursor:pointer}
.mod-lab .mod-row button:hover{border-color:var(--cyan)}
.mod-lab .mod-row button.right{border-color:var(--green);background:#16351f}
.mod-lab .mod-row button.wrong{border-color:var(--red);background:#3a1a17}
.mod-lab .mod-src{font:italic 13px/1.4 var(--math);color:var(--muted);letter-spacing:0;text-transform:none}
.mod-lab .mod-facts{display:grid;grid-template-columns:auto minmax(0,1fr);gap:6px 14px;font:400 15px/1.4 var(--sans);color:var(--muted)}
.mod-lab .mod-facts b{font:600 10px/1.9 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.mod-lab .mod-facts .m{font:400 18px/1.3 var(--math);color:var(--text)}
.mod-lab .mod-facts s{color:var(--red);text-decoration-thickness:1.5px}
.mod-lab .mod-key{display:flex;flex-wrap:wrap;gap:6px}
.mod-lab .mod-key span{font:500 12px/1 var(--sans);padding:7px 9px;border-radius:3px;border:1px solid var(--line);color:var(--faint)}
.mod-lab .mod-key span.on{color:var(--ink);font-weight:600}
.mod-lab .mod-key span.on.c1{background:var(--amber);border-color:var(--amber)} .mod-lab .mod-key span.on.c2{background:var(--cyan);border-color:var(--cyan)}
.mod-lab .mod-key span.on.c3{background:var(--pink);border-color:var(--pink)} .mod-lab .mod-key span.on.c4{background:var(--violet);border-color:var(--violet)}
.mod-lab .mod-key span.on.cl{background:var(--muted);border-color:var(--muted)}
`;
  document.head.appendChild(s);
}

/* ---------- data: adjective order ---------- */
const CATS = [["opinion", "Opinion"], ["size", "Size"], ["age", "Age"], ["shape", "Shape"], ["colour", "Colour"], ["origin", "Origin"], ["material", "Material"], ["purpose", "Purpose"]];
const CI = Object.fromEntries(CATS.map(([c], i) => [c, i]));
const BINS = { opinion: ["lovely", "strange", "ugly", "elegant"], size: ["big", "little", "tiny", "huge"], age: ["old", "new", "ancient", "antique"],
  shape: ["round", "square", "oval", "flat"], colour: ["red", "green", "black", "white"], origin: ["French", "Persian", "Japanese", "Italian"],
  material: ["wooden", "silver", "woollen", "leather"] };
const NOUNS = { box: ["sewing", "jewellery", "music"], table: ["dining", "writing", "card"], bag: ["travelling", "shopping", "sleeping"], rug: ["prayer", "hearth", "picnic"] };
const article = w => /^[aeiou]/i.test(w) ? "an" : "a";

/* ---------- data: comparison ---------- */
// forms: "base|suffix" (inflected; c5 suffix) · "more |base" (periphrastic; c5 word) · "=form" (irregular; whole word c5) · null (no form)
const WORDS = [
  { w: "tall", k: "adj", c: ["tall|er", "tall|est"], rule: "One syllable: add -er and -est." },
  { w: "big", k: "adj", c: ["bigg|er", "bigg|est"], rule: "One syllable ending in a single vowel + single consonant: double the consonant, then add -er, -est." },
  { w: "nice", k: "adj", c: ["nic|er", "nic|est"], rule: "Ends in a silent e: drop it and add -er, -est (nicer, nicest)." },
  { w: "happy", k: "adj", c: ["happi|er", "happi|est"], rule: "Two syllables ending in -y: change y to i and add -er, -est." },
  { w: "narrow", k: "adj", c: ["narrow|er", "narrow|est"], rule: "Two syllables ending in -ow: usually -er, -est (more narrow is also correct)." },
  { w: "clever", k: "adj", c: ["clever|er", "clever|est"], rule: "Two syllables ending in -er: either form is correct (cleverer or more clever)." },
  { w: "careful", k: "adj", c: ["more |careful", "most |careful"], rule: "Two syllables not ending in -y, -ow, -le or -er: use more and most." },
  { w: "beautiful", k: "adj", c: ["more |beautiful", "most |beautiful"], rule: "Three or more syllables: always more and most." },
  { w: "good", k: "adj", c: ["=better", "=best"], rule: "Irregular (suppletive): good, better, best. The adverb well shares the same forms." },
  { w: "bad", k: "adj", c: ["=worse", "=worst"], rule: "Irregular: bad, worse, worst. The adverb badly shares them." },
  { w: "far", k: "adj", c: ["=farther", "=farthest"], alt: "further, furthest", rule: "Irregular: farther, farthest for physical distance; further, furthest for distance and for figurative senses (further study)." },
  { w: "little", k: "adj", c: ["=less", "=least"], rule: "Irregular for amount: little, less, least (little time, less time). For size, smaller and smallest are usual.", down: null },
  { w: "many", k: "adj", c: ["=more", "=most"], rule: "Irregular: many and much both compare as more, most.", down: ["=fewer", "=fewest"] },
  { w: "unique", k: "adj", c: [null, null], abs: true, rule: "Absolute (non-gradable): unique means “the only one of its kind”, so it has no degrees in formal usage. Say nearly unique, or choose a gradable word: more unusual." },
  { w: "perfect", k: "adj", c: [null, null], abs: true, rule: "Absolute in formal usage: write more nearly perfect. The Constitution’s “a more perfect Union” shows the rule is a matter of style, not grammar." },
  { w: "fast", k: "adv", v: ["She runs", "he does", "Of the three, she runs"], c: ["fast|er", "fast|est"], rule: "A flat adverb (same form as the adjective): one syllable, so -er, -est." },
  { w: "hard", k: "adv", v: ["She works", "he does", "Of the three, she works"], c: ["hard|er", "hard|est"], rule: "A flat adverb: works hard. Hardly is a different word, meaning “barely”." },
  { w: "soon", k: "adv", v: ["She arrived", "he did", "Of the three, she arrived"], c: ["soon|er", "soon|est"], rule: "A one-syllable adverb: -er, -est." },
  { w: "early", k: "adv", v: ["She arrived", "he did", "Of the three, she arrived"], c: ["earli|er", "earli|est"], rule: "Early is both adjective and adverb. Its -ly is part of the root, not the adverb suffix, so it takes -er, -est (y → i)." },
  { w: "quickly", k: "adv", v: ["She reads", "he does", "Of the three, she reads"], c: ["more |quickly", "most |quickly"], rule: "Adverbs formed with the suffix -ly take more and most. (Quicker is the flat adverb, common in speech.)" },
  { w: "often", k: "adv", v: ["She visits", "he does", "Of the three, she visits"], c: ["more |often", "most |often"], rule: "Usually more and most; oftener and oftenest exist but are rare." },
  { w: "well", k: "adv", v: ["She sings", "he does", "Of the three, she sings"], c: ["=better", "=best"], rule: "Irregular: well, better, best, the same forms as the adjective good." },
  { w: "badly", k: "adv", v: ["She plays", "he does", "Of the three, she plays"], c: ["=worse", "=worst"], rule: "Irregular: badly, worse, worst, the same forms as the adjective bad." }
];
const DEG = ["Positive", "Comparative", "Superlative"];
const SYL = { tall: "tall", big: "big", nice: "nice", happy: "hap·py", narrow: "nar·row", clever: "clev·er", careful: "care·ful", beautiful: "beau·ti·ful", good: "good", bad: "bad", far: "far",
  little: "lit·tle", many: "man·y", unique: "u·nique", perfect: "per·fect", fast: "fast", hard: "hard", soon: "soon", early: "ear·ly", quickly: "quick·ly", often: "of·ten", well: "well", badly: "bad·ly" };
const NOT = { big: "biger", nice: "niceer", happy: "happyer", careful: "carefuller", beautiful: "beautifuller", good: "gooder", bad: "badder", far: "farer", little: "littler (for amount)",
  many: "manier", unique: "more unique", perfect: "most perfect", fast: "more faster", hard: "more harder", soon: "more sooner", early: "more earlier", quickly: "quicklier", well: "weller", badly: "badlier", tall: "more taller" };

/* ---------- data: what does the adverb modify? ---------- */
// t: index of the word modified, or "cl" for the whole clause; c: colour of the target class
const SENTS = [
  { s: "She sang beautifully .", a: 2, t: 1, c: "c2", type: "manner", why: "Beautifully tells how she sang: an adverb of manner modifying the verb." },
  { s: "The soup was extremely hot .", a: 3, t: 4, c: "c3", type: "degree", why: "Extremely tells how hot: an adverb of degree modifying the adjective." },
  { s: "He spoke very softly .", a: 2, t: 3, c: "c4", type: "degree", why: "Very tells how softly: an adverb modifying another adverb. Softly in turn modifies spoke." },
  { s: "Unfortunately , the train was late .", a: 0, t: "cl", type: "sentence adverb", why: "Unfortunately comments on the whole statement, not on one word: a sentence adverb modifying the clause." },
  { s: "They arrived yesterday .", a: 2, t: 1, c: "c2", type: "time", why: "Yesterday tells when they arrived: an adverb of time modifying the verb." },
  { s: "Put the box there .", a: 3, t: 0, c: "c2", type: "place", why: "There tells where to put it: an adverb of place modifying the verb put." },
  { s: "She almost always wins .", a: 1, t: 2, c: "c4", type: "degree", why: "Almost limits always (not quite always): an adverb modifying an adverb. Always, an adverb of frequency, modifies wins." },
  { s: "She almost always wins .", a: 2, t: 3, c: "c2", type: "frequency", why: "Always tells how often she wins: an adverb of frequency modifying the verb." },
  { s: "We had now reached the summit .", a: 2, t: 3, c: "c2", type: "time", src: "Poe, “A Descent into the Maelstrom”", why: "Now is an adverb of time inside the verb phrase had now reached, modifying the verb reached." },
  { s: "The old man seemed too much exhausted to speak .", a: 4, t: 5, c: "c4", type: "degree", src: "Poe, “A Descent into the Maelstrom”", why: "Too modifies the adverb much: a degree adverb on a degree adverb." },
  { s: "The old man seemed too much exhausted to speak .", a: 5, t: 6, c: "c3", type: "degree", src: "Poe, “A Descent into the Maelstrom”", why: "Much modifies the predicative adjective exhausted: how exhausted?" },
  { s: "She is not handsome enough to tempt me .", a: 4, t: 3, c: "c3", type: "degree", src: "Austen, Pride and Prejudice", why: "Enough modifies the adjective handsome. Unlike very or too, enough follows the word it modifies." },
  { s: "He coldly said it .", a: 1, t: 2, c: "c2", type: "manner", src: "after Austen, Pride and Prejudice", why: "Coldly tells how he said it: an adverb of manner, here placed before its verb." },
  { s: "an utterly abandoned feeling", a: 1, t: 2, c: "c3", type: "degree", src: "Fitzgerald, The Great Gatsby", why: "Utterly modifies the adjective abandoned, which in turn modifies the noun feeling." },
  { s: "Only Tom laughed .", a: 0, t: 1, c: "c1", type: "focusing", why: "Only picks out Tom: a focusing adverb modifying a noun phrase. Move it and the meaning changes: Tom only laughed (he did nothing else)." }
];
const CLS = { c1: "a noun", c2: "a verb", c3: "an adjective", c4: "an adverb" };

L["eng-modifiers"] = k => {
  css();
  const dom = k.dom(); dom.classList.add("pos-wrap", "mod-lab");
  let mode = "order";
  // order state
  let noun = "box", picked = [];
  // compare state
  let wi = 0, deg = 1, down = false;
  // modifies state
  let si = 0, ans = null, score = { right: 0, tries: 0 }, geom = "";

  /* ----- adjective order ----- */
  const binsFor = () => ({ ...BINS, purpose: NOUNS[noun] });
  const std = () => picked.map((p, i) => ({ ...p, i })).sort((a, b) => CI[a.c] - CI[b.c] || a.i - b.i);
  function phraseHTML(list, clickable){
    if (!list.length) return `<span class="x">a</span> <span class="c1">${esc(noun)}</span>`;
    let h = `${article(list[0].w)} `;
    list.forEach((p, j) => {
      const comma = j > 0 && list[j - 1].c === p.c && p.c !== "purpose" ? "," : "";
      if (comma) h = h.replace(/ $/, ", ");
      h += clickable ? `<button type="button" data-w="${esc(p.w)}" aria-label="Remove ${esc(p.w)}">${esc(p.w)}</button> ` : `<span class="c3">${esc(p.w)}</span> `;
    });
    return h + `<span class="c1">${esc(noun)}</span>`;
  }
  function drawOrder(){
    const s = std();
    const same = picked.map((p, j) => p.w === s[j].w).every(Boolean);
    let inv = null;
    for (let a = 0; a < picked.length && !inv; a++) for (let b = a + 1; b < picked.length; b++) if (CI[picked[a].c] > CI[picked[b].c]) { inv = [picked[b], picked[a]]; break; }
    const pairs = []; s.forEach((p, j) => { if (j && s[j - 1].c === p.c && p.c !== "purpose") pairs.push([s[j - 1], p]); });
    const purposeTwo = picked.filter(p => p.c === "purpose").length > 1;
    const bins = binsFor(), slots = CATS.map(([c, n]) => { const ws = s.filter(p => p.c === c).map(p => p.w);
      return `<div class="mod-slot${ws.length ? " full" : ""}${inv && (inv[0].c === c || inv[1].c === c) ? " clash" : ""}"><span class="k">${n}</span><span class="w">${ws.map(esc).join(", ")}</span></div>`; }).join("");
    dom.innerHTML = `<div class="pos-src">Order of adjectives · tap words to build a noun phrase</div>
      <div><div class="mod-h">Your order ${picked.length ? "(tap a word to remove it)" : ""}</div><div class="mod-phrase">${phraseHTML(picked, true)} ${picked.length > 1 ? (same ? `<span class="ok">✓</span>` : `<span class="bad">✗</span>`) : ""}</div></div>
      <div><div class="mod-h">Standard order</div><div class="mod-phrase">${phraseHTML(s, false)}</div></div>
      <div><div class="mod-ruler">${slots}<div class="mod-slot noun"><span class="k">Noun</span><span class="w">${esc(noun)}</span></div></div>
      <div class="mod-arrow" style="margin-top:6px">determiner → opinion → size → age → shape → colour → origin → material → purpose → noun. The closer to the noun, the more the adjective says what the thing is.</div></div>
      <div class="mod-bins">${CATS.map(([c, n]) => `<div class="mod-bin"><div class="k">${n}</div><div class="mod-chips">${bins[c].map(w => `<button type="button" class="mod-chip" data-c="${c}" data-w="${esc(w)}" aria-pressed="${picked.some(p => p.w === w)}">${esc(w)}</button>`).join("")}</div></div>`).join("")}</div>`;
    dom.querySelectorAll(".mod-chip").forEach(b => b.onclick = () => {
      const w = b.dataset.w, at = picked.findIndex(p => p.w === w);
      if (at >= 0) picked.splice(at, 1); else if (picked.length < 6) picked.push({ w, c: b.dataset.c });
      drawOrder(); });
    dom.querySelectorAll(".mod-phrase button").forEach(b => b.onclick = () => { picked = picked.filter(p => p.w !== b.dataset.w); drawOrder(); });
    const rows = s.map((p, j) => `<div class="row"><span class="c3">${esc(p.w)}</span> <span class="v c4">${j + 1}</span><span class="lbl">${CATS[CI[p.c]][1]}${p.c === "purpose" ? ": often a noun or -ing form, almost part of a compound with the noun" : ""}</span></div>`).join("");
    let land;
    if (!picked.length) land = `<div class="landmark"><div class="big">Pick some adjectives</div><div class="note">Choose words from the bins in any order. The lab rebuilds the phrase in the order a native speaker expects and labels each slot.</div></div>`;
    else if (picked.length === 1) land = `<div class="landmark"><div class="big">One adjective</div><div class="note">A single attributive adjective goes straight before its noun. Add a second from another bin to see the order at work.</div></div>`;
    else if (inv) land = `<div class="landmark hit"><div class="big"><span class="c3">${esc(inv[0].w)}</span> before <span class="c3">${esc(inv[1].w)}</span></div><div class="note">${CATS[CI[inv[0].c]][1]} comes before ${CATS[CI[inv[1].c]][1].toLowerCase()}. Your order, “${esc(picked.map(p => p.w).join(" "))} ${esc(noun)}”, is one a native speaker would reject.</div></div>`;
    else if (pairs.length) land = `<div class="landmark hit"><div class="big">Coordinate: <span class="c3">${esc(pairs[0][0].w)}</span>, <span class="c3">${esc(pairs[0][1].w)}</span></div><div class="note">Two adjectives of the same kind each modify the noun separately. They can be reversed or joined with and, so a comma separates them. Adjectives of different kinds are cumulative and take no comma.</div></div>`;
    else land = `<div class="landmark hit"><div class="big">Natural order ✓</div><div class="note">These adjectives are cumulative: each modifies everything to its right, so there are no commas. ${picked.length > 3 ? "Grammatical, but writers rarely stack more than three." : ""}</div></div>`;
    k.setRO(`<div><h2>Your noun phrase</h2><div class="ro-big" style="margin-top:8px;font-size:clamp(20px,2.2vw,28px)">${phraseHTML(s, false)}</div></div>
      ${rows ? `<div class="ro-rows">${rows}</div>` : ""}
      ${land}
      <p class="narr">${purposeTwo ? "Two purpose words rarely stack before one noun: pick just one. " : ""}${picked.length >= 6 ? "Six adjectives is the limit here. " : ""}Try the same words in a different order, or press Random.</p>`);
  }

  /* ----- comparison ----- */
  function form(spec, base){
    if (spec == null) return null;
    if (spec[0] === "=") return `<span class="c5">${esc(spec.slice(1))}</span>`;
    const [a, b] = spec.split("|");
    return /^(more|most|less|least) $/.test(a) ? `<span class="c5">${a.trim()}</span> <span class="${base}">${esc(b)}</span>` : `<span class="${base}">${esc(a)}</span><span class="c5">${esc(b)}</span>`;
  }
  const strip = h => h ? h.replace(/<[^>]+>/g, "") : null;
  function drawCompare(){
    const W = WORDS[wi], base = W.k === "adj" ? "c3" : "c4";
    let F = [`<span class="${base}">${esc(W.w)}</span>`, form(W.c[0], base), form(W.c[1], base)];
    if (down && !W.abs) {
      const dn = W.down !== undefined ? W.down : ["less |" + W.w, "least |" + W.w];
      F = [F[0], dn ? form(dn[0], base) : null, dn ? form(dn[1], base) : null];
    }
    const none = W.abs ? [`<span class="${base}">more ${esc(W.w)}</span>`, `<span class="${base}">most ${esc(W.w)}</span>`] : null;
    const H = down ? [96, 72, 48] : [48, 72, 96];
    const steps = DEG.map((d, i) => { const f = F[i], no = !f;
      return `<button type="button" class="mod-step${i === deg ? " sel" : ""}${no ? " no" : ""}" data-i="${i}" style="height:${H[i] + 52}px"><span class="k">${d}</span><span class="f">${f || (none && i ? none[i - 1] : "—")}</span></button>`; }).join("");
    const cur = F[deg];
    let frame;
    if (!cur) frame = W.abs ? `<span class="x">Formal usage does not compare <i>${esc(W.w)}</i>.</span>` : `<span class="x">No ${down ? "downward " : ""}${DEG[deg].toLowerCase()} for <i>${esc(W.w)}</i> in this sense.</span>`;
    else if (W.k === "adj") {
      frame = deg === 0 ? `<span class="c1">This one</span> is <span class="c5">as</span> ${cur} <span class="c5">as</span> that one.` :
        deg === 1 ? `<span class="c1">This one</span> is ${cur} <span class="c5">than</span> that one.` : `<span class="c1">This one</span> is <span class="c5">the</span> ${cur} of the three.`;
      if (W.w === "many") frame = deg === 0 ? `We have <span class="c5">as</span> ${cur} <span class="c1">books</span> <span class="c5">as</span> they do.` : deg === 1 ? `We have ${cur} <span class="c1">books</span> <span class="c5">than</span> they do.` : `We have <span class="c5">the</span> ${cur} <span class="c1">books</span> of all.`;
      if (W.w === "little") frame = deg === 0 ? `We have <span class="c5">as</span> ${cur} <span class="c1">time</span> <span class="c5">as</span> they do.` : deg === 1 ? `We have ${cur} <span class="c1">time</span> <span class="c5">than</span> they do.` : `We have <span class="c5">the</span> ${cur} <span class="c1">time</span> of all.`;
    } else {
      const [sv, aux, sup] = W.v, vb = sv.split(" ")[1], subj = sv.split(" ")[0], supSubj = sup.slice(0, sup.lastIndexOf(" "));
      frame = deg === 0 ? `${subj} <span class="c2">${vb}</span> <span class="c5">as</span> ${cur} <span class="c5">as</span> ${aux}.` :
        deg === 1 ? `${subj} <span class="c2">${vb}</span> ${cur} <span class="c5">than</span> ${aux}.` : `${supSubj} <span class="c2">${vb}</span> <span class="dim">(the)</span> ${cur}.`;
    }
    const kind = W.k === "adj" ? "Adjective" : "Adverb";
    dom.innerHTML = `<div class="pos-src">Degrees of comparison · <i>${esc(W.w)}</i> (${kind.toLowerCase()})</div>
      <div class="mod-stairs">${steps}</div>
      <div><div class="mod-h">In a sentence</div><div class="mod-frame">${frame}</div></div>
      <div class="mod-facts"><b>Syllables</b><span><span class="m">${esc(SYL[W.w])}</span> · ${SYL[W.w].split("·").length}</span>
        ${W.alt ? `<b>Also</b><span class="m">${esc(W.alt)}</span>` : ""}
        ${NOT[W.w] ? `<b>Not</b><span><s class="m">${esc(NOT[W.w])}</s>${/^(more|most) /.test(NOT[W.w]) && !W.abs ? " (a double comparative)" : ""}</span>` : ""}</div>`;
    dom.querySelectorAll(".mod-step").forEach(b => b.onclick = () => { deg = +b.dataset.i; degSel.set(String(deg)); drawCompare(); });
    const how = W.abs ? "none" : down ? (W.down === null ? "none downward" : W.down ? "irregular (fewer, fewest)" : "less, least") : W.c[0][0] === "=" ? "irregular" : W.c[0].includes("more ") ? "more, most" : "-er, -est";
    const special = W.abs || how === "irregular" || (deg > 0 && !cur);
    k.setRO(`<div><h2>${DEG[deg]}${down && deg ? " (downward)" : ""}</h2><div class="ro-big" style="margin-top:8px">${cur || `<span style="color:var(--faint)">—</span>`}</div></div>
      <div class="ro-rows">
        <div class="row"><span>Word class</span> <span class="v ${base}">${kind}</span></div>
        <div class="row"><span>Comparison</span> <span class="v c5">${how}</span></div>
        <div class="row"><span>Forms</span> <span class="v">${F.map(f => f ? strip(f) : "—").join(" · ")}</span></div>
      </div>
      <div class="landmark${special ? " hit" : ""}"><div class="big">${W.abs ? "Absolute adjective" : how === "irregular" ? "Irregular forms" : "The rule"}</div><div class="note">${esc(W.rule)}</div></div>
      <p class="narr">${deg === 1 ? "The comparative compares two things." : deg === 2 ? "The superlative picks one out of three or more." : "The positive is the plain form; as … as compares equals."} ${down ? "Less and least compare downward for any gradable word." : "Tick Downward to see less and least."}</p>`);
  }

  /* ----- what does it modify? ----- */
  function drawMod(){
    const S = SENTS[si], toks = S.s.split(" ");
    const isClause = j => S.t === "cl" && j !== S.a && toks[j] !== ",";
    dom.innerHTML = `<div class="pos-src">What does the adverb modify? · ${si + 1} / ${SENTS.length}${S.src ? ` · <span class="mod-src">${esc(S.src)}</span>` : ""}</div>
      <div class="mod-sent" id="mod-sent"><svg aria-hidden="true"></svg>${toks.map((w, j) => /^[.,]$/.test(w) ? `<span class="p">${w}</span>` :
        `${j ? " " : ""}<button type="button" class="w${j === S.a ? " adv" : ""}${ans != null ? (j === S.t ? " " + S.c : isClause(j) ? " cl" : j === ans ? " wrong" : "") : ""}" data-j="${j}"${j === S.a ? ' tabindex="-1" aria-disabled="true"' : ""}>${esc(w)}</button>`).join("").replace(/ <span class="p">/g, '<span class="p">')}</div>
      <div class="mod-row"><button type="button" data-cl="1" class="${ans != null ? (S.t === "cl" ? "right" : ans === "cl" ? "wrong" : "") : ""}">The whole clause</button></div>
      <div><div class="mod-h">An adverb can modify</div><div class="mod-key">${[["c2", "a verb"], ["c3", "an adjective"], ["c4", "another adverb"], ["cl", "a whole clause"], ["c1", "a noun phrase (focusing)"]].map(([c, t]) =>
        `<span class="${c}${ans != null && (S.t === "cl" ? c === "cl" : S.c === c) ? " on" : ""}">${t}</span>`).join("")}</div></div>`;
    geom = "";
    const pickA = v => { if (ans != null) return; ans = v; score.tries++; if (v === S.t) score.right++; drawMod(); };
    dom.querySelectorAll(".mod-sent .w").forEach(b => b.onclick = () => { const j = +b.dataset.j; if (j !== S.a) pickA(j); });
    dom.querySelector("[data-cl]").onclick = () => pickA("cl");
    const ok = ans === S.t, advW = toks[S.a];
    const tgt = S.t === "cl" ? "the whole clause" : `${CLS[S.c]}, <span class="${S.c}">${esc(toks[S.t])}</span>`;
    k.setRO(`<div><h2>Score</h2><div class="ro-big" style="margin-top:8px"><span class="num c5">${score.right}</span> / <span class="num">${score.tries}</span></div></div>
      <div class="ro-rows"><div class="row"><span>Adverb</span> <span class="v c4">${esc(advW)}</span><span class="lbl">${ans != null ? `Type: ${esc(S.type)}` : "Boxed in violet. Tap the word it modifies, or The whole clause."}</span></div>
      ${ans != null ? `<div class="row"><span>Modifies</span> <span class="v">${tgt}</span></div>` : ""}</div>
      ${ans != null ? `<div class="landmark hit"><div class="big">${ok ? "Right" : "Not quite"}: <span class="c4">${esc(advW)}</span> → ${S.t === "cl" ? "clause" : `<span class="${S.c}">${esc(toks[S.t])}</span>`}</div><div class="note">${esc(S.why)}</div></div>`
        : `<div class="landmark"><div class="big">Ask “${esc(advW)} describes what?”</div><div class="note">An adverb can modify a verb, an adjective, another adverb, a whole clause, and (for focusing adverbs) a noun phrase.</div></div>`}
      <p class="narr">${ans != null ? "Press Next sentence for another." : "Colours: verb cyan, adjective pink, adverb violet, noun amber."}</p>`);
  }
  function arrows(){
    if (mode !== "mod") return;
    const box = dom.querySelector("#mod-sent"); if (!box) return;
    const svgEl = box.querySelector("svg"), S = SENTS[si];
    if (ans == null) { if (geom !== "none") { svgEl.innerHTML = ""; geom = "none"; } return; }
    const R = box.getBoundingClientRect(), btn = j => box.querySelector(`.w[data-j="${j}"]`);
    const a = btn(S.a); if (!a) return;
    const ra = a.getBoundingClientRect();
    let rt;
    if (S.t === "cl") { const ws = [...box.querySelectorAll(".w.cl")]; if (!ws.length) return; const r0 = ws[0].getBoundingClientRect(), r1 = ws[ws.length - 1].getBoundingClientRect();
      rt = r0.top === r1.top ? { left: r0.left, right: r1.right, top: r0.top } : { left: r0.left, right: r0.right, top: r0.top }; }
    else { const t = btn(S.t); if (!t) return; rt = t.getBoundingClientRect(); }
    const x1 = ra.left + ra.width / 2 - R.left, y1 = ra.top - R.top - 2, x2 = (rt.left + rt.right) / 2 - R.left, y2 = rt.top - R.top - (S.t === "cl" ? 7 : 2);
    const lift = Math.min(24, 10 + Math.abs(x2 - x1) * 0.12), cy = Math.min(y1, y2) - lift;
    const col = S.t === "cl" ? k.C.muted : { c1: k.C.amber, c2: k.C.cyan, c3: k.C.pink, c4: k.C.violet }[S.c];
    const g = [x1, y1, x2, y2, cy].map(v => Math.round(v)).join(",");
    if (g === geom) return; geom = g;
    const ang = Math.atan2(y2 - cy, x2 - (x1 + x2) / 2), hx = x2, hy = y2, s = 7;
    const p1 = [hx - s * Math.cos(ang - 0.45), hy - s * Math.sin(ang - 0.45)], p2 = [hx - s * Math.cos(ang + 0.45), hy - s * Math.sin(ang + 0.45)];
    const bracket = S.t === "cl" ? `<path d="M${rt.left - R.left} ${y2 + 5} v-5 H${rt.right - R.left} v5" stroke="${col}" stroke-width="1.5" fill="none"/>` : "";
    svgEl.innerHTML = `<path d="M${x1} ${y1} Q${(x1 + x2) / 2} ${cy} ${x2} ${y2}" stroke="${col}" stroke-width="2" fill="none"/><path d="M${hx} ${hy} L${p1[0]} ${p1[1]} L${p2[0]} ${p2[1]}Z" fill="${col}"/>${bracket}`;
  }

  /* ----- controls ----- */
  let degSel = { set(){} };
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "order") {
      k.select("Noun", Object.keys(NOUNS).map(n => [n, n]), noun, v => { noun = v; picked = picked.filter(p => p.c !== "purpose"); drawOrder(); });
      k.button("Random", () => {
        const cats = CATS.map(c => c[0]).sort(() => Math.random() - 0.5).slice(0, 3), bins = binsFor();
        picked = cats.map(c => ({ c, w: bins[c][Math.floor(Math.random() * bins[c].length)] }));
        drawOrder(); });
      k.button("Clear", () => { picked = []; drawOrder(); }, "btn ghost");
    } else if (mode === "compare") {
      k.select("Word", WORDS.map((W, i) => [i, `${W.w} (${W.k === "adj" ? "adj." : "adv."})`]), wi, v => { wi = +v; drawCompare(); });
      degSel = k.select("Degree", DEG.map((d, i) => [i, d]), deg, v => { deg = +v; drawCompare(); });
      k.check("Downward (less, least)", down, v => { down = v; drawCompare(); });
    } else {
      k.button("Next sentence", () => { si = (si + 1) % SENTS.length; ans = null; drawMod(); });
      k.button("Reset score", () => { score = { right: 0, tries: 0 }; drawMod(); }, "btn ghost");
    }
  }
  const draw = () => mode === "order" ? drawOrder() : mode === "compare" ? drawCompare() : drawMod();
  k.modes([["order", "Adjective order"], ["compare", "Degrees"], ["mod", "What it modifies"]], mode, m => { mode = m; controls(); draw(); });
  controls(); draw();
  k.loop(arrows);
};
})();
