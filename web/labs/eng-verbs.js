/* ============ Labs: English · Verbs: tense, aspect & mood ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- verb morphology ---------- */
// Irregular verbs: base → [past, past participle]. be / have / do / go / say have special -s forms below.
const IRR = {};
`arise arose arisen|awake awoke awoken|be was been|bear bore borne|beat beat beaten|become became become|begin began begun|bend bent bent|bet bet bet|bid bid bid|bind bound bound|bite bit bitten|bleed bled bled|blow blew blown|break broke broken|breed bred bred|bring brought brought|build built built|burst burst burst|buy bought bought|cast cast cast|catch caught caught|choose chose chosen|cling clung clung|come came come|cost cost cost|creep crept crept|cut cut cut|deal dealt dealt|dig dug dug|do did done|draw drew drawn|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed fed|feel felt felt|fight fought fought|find found found|flee fled fled|fling flung flung|fly flew flown|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten|give gave given|go went gone|grind ground ground|grow grew grown|hang hung hung|have had had|hear heard heard|hide hid hidden|hit hit hit|hold held held|hurt hurt hurt|keep kept kept|kneel knelt knelt|know knew known|lay laid laid|lead led led|leave left left|lend lent lent|let let let|lie lay lain|light lit lit|lose lost lost|make made made|mean meant meant|meet met met|pay paid paid|put put put|quit quit quit|read read read|ride rode ridden|ring rang rung|rise rose risen|run ran run|say said said|see saw seen|seek sought sought|sell sold sold|send sent sent|set set set|shake shook shaken|shine shone shone|shoot shot shot|show showed shown|shrink shrank shrunk|shut shut shut|sing sang sung|sink sank sunk|sit sat sat|sleep slept slept|slide slid slid|speak spoke spoken|spend spent spent|spin spun spun|split split split|spread spread spread|spring sprang sprung|stand stood stood|steal stole stolen|stick stuck stuck|sting stung stung|strike struck struck|strive strove striven|swear swore sworn|sweep swept swept|swim swam swum|swing swung swung|take took taken|teach taught taught|tear tore torn|tell told told|think thought thought|throw threw thrown|tread trod trodden|understand understood understood|wake woke woken|wear wore worn|weave wove woven|weep wept wept|win won won|wind wound wound|wring wrung wrung|write wrote written`
  .split("|").forEach(r => { const [b, p, pp] = r.split(" "); IRR[b] = [p, pp]; });
const PREFIX = ["under", "over", "with", "fore", "out", "mis", "re", "un", "up"];
const NOPREFIX = new Set(["relay"]);   // relay is regular (relayed), not re- + lay
// Two-syllable verbs stressed on the last syllable double their final consonant (prefer → preferred).
const DOUBLE = new Set("admit commit permit submit omit emit transmit remit prefer refer confer defer infer deter occur recur incur concur control patrol compel expel propel repel rebel regret abet equip acquit allot embed excel extol begin forget forbid beget".split(" "));
const STATIVE = new Set("know own believe seem belong contain mean understand want like love hate need prefer remember possess consist resemble owe".split(" "));
const LINKING = new Set("be seem become appear remain".split(" "));
const V = "aeiou";
const isV = ch => V.includes(ch);

function irregular(b){
  if (IRR[b]) return { forms: IRR[b], root: b };
  if (NOPREFIX.has(b)) return null;
  for (const p of PREFIX) if (b.startsWith(p) && b.length - p.length >= 2 && IRR[b.slice(p.length)] && b.slice(p.length) !== "be")
    return { forms: IRR[b.slice(p.length)].map(f => p + f), root: b.slice(p.length), prefix: p };
  return null;
}
// Does a one-syllable CVC verb double its consonant (stop → stopped)? w, x, y never double.
function cvc(b){
  const n = b.length; if (n < 3) return false;
  const c1 = b[n - 1], v = b[n - 2], c0 = b[n - 3];
  if (isV(c1) || "wxy".includes(c1) || !isV(v)) return false;
  if (isV(c0) && !(c0 === "u" && b[n - 4] === "q")) return false;          // rain, boat: two vowel letters
  const syll = (b.match(/[aeiouy]+/g) || []).length;
  return syll === 1 || DOUBLE.has(b);
}
function sForm(b){
  const irr = { be: "is", have: "has", do: "does", go: "goes", say: "says" };
  if (irr[b]) return { w: irr[b], rule: b === "be" ? "Irregular: is (with am and are for other persons)." : b === "say" ? "Spelled says; pronounced “sez”." : "Irregular -s form." };
  const pre = irregular(b); if (pre && pre.prefix && ["do", "go", "have", "say"].includes(pre.root)) return { w: pre.prefix + sForm(pre.root).w, rule: "Prefix + the -s form of " + pre.root + "." };
  if (/z$/.test(b) && cvc(b)) return { w: b + "zes", rule: "Short vowel + z: double the z and add -es." };
  if (/(s|x|z|ch|sh)$/.test(b)) return { w: b + "es", rule: "After s, x, z, ch or sh, add -es." };
  if (/[^aeiou]y$/.test(b)) return { w: b.slice(0, -1) + "ies", rule: "Consonant + y: change y to i and add -es." };
  if (/[^aeiou]o$/.test(b)) return { w: b + "es", rule: "Consonant + o: add -es." };
  return { w: b + "s", rule: "Add -s." };
}
function edForm(b){
  if (/e$/.test(b)) return { w: b + "d", rule: "Ends in e: add -d." };
  if (/[^aeiou]y$/.test(b)) return { w: b.slice(0, -1) + "ied", rule: "Consonant + y: change y to i and add -ed." };
  if (/[aeiou]c$/.test(b) && b.length > 3) return { w: b + "ked", rule: "Final -c becomes -ck before -ed." };
  if (cvc(b)) return { w: b + b[b.length - 1] + "ed", rule: "Short stressed vowel + one consonant: double it and add -ed." };
  return { w: b + "ed", rule: "Add -ed." };
}
function ingForm(b){
  if (b === "be") return { w: "being", rule: "Add -ing." };
  if (/ie$/.test(b)) return { w: b.slice(0, -2) + "ying", rule: "Ends in ie: change ie to y and add -ing." };
  if (/(ee|ye|oe)$/.test(b)) return { w: b + "ing", rule: "Ends in ee, ye or oe: keep the e and add -ing." };
  if (/[^aeiou]e$/.test(b) || /ue$/.test(b)) return { w: b.slice(0, -1) + "ing", rule: "Silent e: drop it and add -ing." };
  if (/[aeiou]c$/.test(b) && b.length > 3) return { w: b + "king", rule: "Final -c becomes -ck before -ing." };
  if (cvc(b)) return { w: b + b[b.length - 1] + "ing", rule: "Short stressed vowel + one consonant: double it and add -ing." };
  return { w: b + "ing", rule: "Add -ing." };
}
function forms(b){
  const ir = irregular(b), s = sForm(b);
  const ing = ir && ir.prefix ? { w: ir.prefix + ingForm(ir.root).w, rule: ingForm(ir.root).rule } : ingForm(b);
  if (ir) return { base: b, s: s.w, past: ir.forms[0], pp: ir.forms[1], ing: ing.w, irregular: true, rules: { s: s.rule, past: "Irregular past.", pp: "Irregular past participle.", ing: ing.rule }, root: ir.root, prefix: ir.prefix };
  const ed = edForm(b);
  return { base: b, s: s.w, past: ed.w, pp: ed.w, ing: ing.w, irregular: false, rules: { s: s.rule, past: ed.rule, pp: ed.rule + " (Same as the past.)", ing: ing.rule } };
}

/* ---------- verb phrase builder ---------- */
const SUBJ = [["I", 1, "sg"], ["you", 2, "pl"], ["he", 3, "sg"], ["she", 3, "sg"], ["we", 1, "pl"], ["they", 3, "pl"], ["Scrooge", 3, "sg"], ["the sailors", 3, "pl"]];
const VERBS = [
  ["sail", "to Nantucket"], ["walk", "home"], ["stop", "at the inn"], ["study", "the chart"], ["try", "again"], ["panic", ""],
  ["write", "a letter"], ["take", "the train"], ["go", "home"], ["see", "the whale"], ["begin", "the voyage"], ["run", "to the shore"],
  ["put", "the kettle on"], ["lie", "in the sun"], ["have", "dinner"], ["do", "the work"], ["know", "the answer"], ["be", "careful"]
];
const AUXLBL = { will: "modal: future", do: "do-support" };
function finite(b, F, subj, tense){
  const [w, per, num] = subj;
  if (b === "be") return tense === "past" ? (per === 2 || num === "pl" ? "were" : "was") : (w === "I" ? "am" : (per === 2 || num === "pl") ? "are" : "is");
  if (tense === "past") return F.past;
  return per === 3 && num === "sg" ? F.s : F.base;
}
// Returns { words: [{w, role, lbl}], ... } with role "s" subject, "ax" auxiliary, "v" main verb, "neg", "c" complement.
function build(verb, comp, subj, time, asp, kind){
  const perf = asp === "perf" || asp === "pp", prog = asp === "prog" || asp === "pp";
  const tense = time === "past" ? "past" : "present";
  const chain = []; let need = "fin";
  const formOf = (b, F) => need === "fin" ? finite(b, F, subj, tense) : need === "base" ? F.base : need === "pp" ? F.pp : F.ing;
  const needLbl = { fin: tense + " tense", base: "base form", pp: "past participle", ing: "present participle (-ing)" };
  if (time === "future") { chain.push({ w: "will", role: "ax", lbl: "modal will + base" }); need = "base"; }
  if (perf) { const F = forms("have"); chain.push({ w: formOf("have", F), role: "ax", lbl: "perfect have · " + needLbl[need] }); need = "pp"; }
  if (prog) { const F = forms("be"); chain.push({ w: formOf("be", F), role: "ax", lbl: "progressive be · " + needLbl[need] }); need = "ing"; }
  const FV = forms(verb);
  let doSupport = false;
  if (!chain.length && kind !== "stmt" && verb !== "be") {           // no auxiliary: borrow do
    chain.push({ w: finite("do", forms("do"), subj, tense), role: "ax", lbl: "do-support · " + needLbl.fin }); need = "base"; doSupport = true;
  }
  chain.push({ w: formOf(verb, FV), role: "v", lbl: "main verb · " + needLbl[need] });
  let words = chain.slice();
  if (kind === "neg") words.splice(1, 0, { w: "not", role: "neg", lbl: "" });
  const S = { w: subj[0], role: "s", lbl: "subject" };
  if (kind === "q") words = [words[0], S, ...words.slice(1)]; else words = [S, ...words];
  if (comp) words.push({ w: comp, role: "c", lbl: "" });
  words[0] = Object.assign({}, words[0], { w: words[0].w === "I" ? "I" : words[0].w[0].toUpperCase() + words[0].w.slice(1) });
  return { words, end: kind === "q" ? "?" : ".", doSupport, F: FV, chainLen: chain.length };
}

const TIMES = [["past", "Past"], ["present", "Present"], ["future", "Future"]];
const ASPS = [["simple", "Simple"], ["prog", "Progressive"], ["perf", "Perfect"], ["pp", "Perfect progressive"]];
const NAME = (t, a) => a === "simple" ? "simple " + t : t + " " + { prog: "progressive", perf: "perfect", pp: "perfect progressive" }[a];
const FORMULA = { simple: "one finite verb", prog: "be + -ing", perf: "have + past participle", pp: "have + been + -ing" };
const RELATION = {
  "past simple": "E = R &lt; S", "past prog": "R inside E, R &lt; S", "past perf": "E &lt; R &lt; S", "past pp": "E runs up to R, R &lt; S",
  "present simple": "E around R = S", "present prog": "R = S inside E", "present perf": "E &lt; R = S", "present pp": "E runs up to R = S",
  "future simple": "S &lt; R = E", "future prog": "S &lt; R, R inside E", "future perf": "S &lt; R, E &lt; R", "future pp": "S &lt; R, E runs up to R"
};
const MEANING = {
  "past simple": "A completed event at a definite past time. The default tense of narrative.",
  "past prog": "An event in progress at a past moment, often interrupted or used as background: when the bell rang, she was writing.",
  "past perfect": "An event completed before a past reference time: the “past of the past”. By the time the ship docked, she had written.",
  "past pp": "An activity that had been going on for some time up to a past moment: she had been writing for an hour when the bell rang.",
  "present simple": "A habit, a general truth or a present state: she writes every day; water boils at 100 °C.",
  "present prog": "An activity in progress now, or a temporary situation: she is writing (at the moment).",
  "present perf": "A past event seen from now, with present relevance, or a state continuing up to now: she has written (so the letter exists).",
  "present pp": "An activity that began in the past and continues up to now (or has just stopped): she has been writing since noon.",
  "future simple": "A prediction or decision about a future time: she will write tomorrow.",
  "future prog": "An activity that will be in progress at a future moment: at nine she will be writing.",
  "future perf": "An event that will be complete before a future reference time: by Friday she will have written. Only completion before R is asserted; the event may even lie before now.",
  "future pp": "An activity that will have been going on up to a future moment: by June she will have been writing for a year."
};

/* ---------- timeline (SVG) ---------- */
function layout(time, asp, stative){
  // positions as fractions of the line; E is either a point (e) or a span (a..b); dots = habitual repetitions
  const P = { past: [0.34, 0.78], present: [0.55, 0.55], future: [0.24, 0.76] }[time];
  let r = P[0], s = P[1]; if (time === "future") { s = P[0]; r = P[1]; }
  const o = { s, r, e: null, a: null, b: null, open: false, dots: null };
  if (time === "past" && (asp === "perf" || asp === "pp")) { o.r = 0.48; o.s = 0.84; }
  if (time === "present" && (asp === "perf" || asp === "pp")) { o.r = o.s = 0.68; }
  if (time === "future" && (asp === "perf" || asp === "pp")) { o.s = 0.2; o.r = 0.82; }
  if (asp === "simple") {
    if (time === "present") { if (stative) { o.a = 0.18; o.b = 0.92; o.open = true; } else o.dots = [0.2, 0.33, 0.46, 0.64, 0.77, 0.9]; }
    else o.e = o.r;
  } else if (asp === "prog") { o.a = o.r - 0.16; o.b = o.r + 0.16; o.open = true; }
  else if (asp === "perf") o.e = time === "future" ? 0.52 : o.r - (time === "past" ? 0.3 : 0.36);
  else { o.a = o.r - (time === "future" ? 0.44 : 0.34); o.b = o.r; }
  return o;
}
function svgTimeline(W, o, cols){
  const H = 150, pad = 18, X = f => pad + f * (W - 2 * pad), y = 78, fs = W < 420 ? 11.5 : 13;
  const { amber, violet, green, muted, faint, text } = cols;
  let g = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="timeline" style="display:block">`;
  g += `<defs><marker id="vbArr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8z" fill="${muted}"/></marker></defs>`;
  g += `<line x1="${pad - 6}" y1="${y}" x2="${W - pad + 8}" y2="${y}" stroke="${muted}" stroke-width="1.5" marker-end="url(#vbArr)"/>`;
  g += `<text x="${pad - 6}" y="${y - 10}" font-size="${fs - 1}" fill="${faint}" font-family="IBM Plex Sans, sans-serif">earlier</text><text x="${W - pad + 6}" y="${y - 10}" font-size="${fs - 1}" fill="${faint}" text-anchor="end" font-family="IBM Plex Sans, sans-serif">later</text>`;
  // event
  if (o.dots) o.dots.forEach(d => { g += `<circle cx="${X(d)}" cy="${y}" r="5" fill="${green}"/>`; });
  if (o.a != null) {
    const xa = X(o.a), xb = X(o.b);
    g += `<rect x="${xa}" y="${y - 6}" width="${xb - xa}" height="12" rx="6" fill="${green}" opacity=".85"/>`;
    if (o.open) g += `<line x1="${xa - 22}" y1="${y}" x2="${xa}" y2="${y}" stroke="${green}" stroke-width="6" stroke-dasharray="3 4" opacity=".6"/><line x1="${xb}" y1="${y}" x2="${xb + 22}" y2="${y}" stroke="${green}" stroke-width="6" stroke-dasharray="3 4" opacity=".6"/>`;
  }
  if (o.e != null) g += `<circle cx="${X(o.e)}" cy="${y}" r="8" fill="${green}"/>`;
  const ex = o.e != null ? X(o.e) : o.a != null ? (X(o.a) + X(o.b)) / 2 : X(0.55);
  g += `<text x="${ex}" y="${y - 42}" font-size="${fs}" fill="${green}" text-anchor="middle" font-family="STIX Two Text, serif" font-style="italic">E${o.dots ? " (repeated)" : o.open && o.a != null && o.b - o.a > 0.5 ? " (state)" : ""}</text>`;
  // perfect: arrow from E to R ("completed by R")
  if (o.e != null && Math.abs(X(o.e) - X(o.r)) > 20) g += `<path d="M${X(o.e) + 10} ${y - 12} Q${(X(o.e) + X(o.r)) / 2} ${y - 46} ${X(o.r) - 6} ${y - 14}" fill="none" stroke="${violet}" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#vbArr)"/>`;
  // R and S
  const same = Math.abs(o.r - o.s) < 1e-6;
  g += `<line x1="${X(o.r)}" y1="${y - 34}" x2="${X(o.r)}" y2="${y + 22}" stroke="${violet}" stroke-width="2" stroke-dasharray="${same ? "0" : "5 4"}"/>`;
  if (!same) g += `<line x1="${X(o.s)}" y1="${y - 34}" x2="${X(o.s)}" y2="${y + 22}" stroke="${violet}" stroke-width="2.5"/>`;
  const lab = (x, t, sub, anchor) => `<text x="${x}" y="${y + 38}" font-size="${fs + 1}" fill="${violet}" text-anchor="${anchor}" font-family="STIX Two Text, serif" font-style="italic">${t}</text><text x="${x}" y="${y + 54}" font-size="${fs - 1}" fill="${text}" opacity=".75" text-anchor="${anchor}" font-family="IBM Plex Sans, sans-serif">${sub}</text>`;
  const anc = x => x < W * 0.15 ? "start" : x > W * 0.85 ? "end" : "middle";
  if (same) g += lab(X(o.r), "R = S", "now", anc(X(o.r)));
  else { g += lab(X(o.r), "R", "time referred to", anc(X(o.r))); g += lab(X(o.s), "S", "now (speech)", anc(X(o.s))); }
  return g + `</svg>`;
}

/* ---------- mood ---------- */
const CLAUSES = [["he", "be", "on time"], ["she", "leave", "early"], ["Scrooge", "give", "to the poor"], ["the jury", "hear", "the case"]];
const MODALS = {
  can: ["ability or possibility", "can + base. Negative cannot (one word) or can’t."],
  could: ["past ability, or a tentative possibility", "The past form of can; in a present clause it sounds more remote or polite."],
  may: ["permission or possibility", "Epistemic (it may rain) or deontic (you may leave)."],
  might: ["a weaker or remote possibility", "Historically the past of may; now mostly a softer may."],
  must: ["obligation, or a confident conclusion", "Deontic: you must leave. Epistemic: it must be late. Must not forbids; need not only removes the obligation."],
  shall: ["future or obligation (formal)", "Future with I and we in traditional British usage; in contracts and statutes it imposes a duty."],
  should: ["advice or a weaker obligation; expectation", "Should is weaker than must: it says what is right or expected, not required."],
  will: ["prediction or willingness", "The usual way to mark future time, though English has no future inflection."],
  would: ["hypothesis, past habit or politeness", "The past of will; in a present clause it marks an unreal or polite statement."]
};
const MOODS = [["ind", "Indicative"], ["imp", "Imperative"], ["mand", "Subjunctive: mandative"], ["were", "Subjunctive: were (irrealis)"], ["modal", "Modal auxiliary"]];

/* ---------- the lab ---------- */
L["eng-verbs"] = k => {
  const { C } = k;
  const dom = k.dom(); dom.classList.add("vb-wrap");
  if (!document.getElementById("css-eng-verbs")) {
    const st = document.createElement("style"); st.id = "css-eng-verbs";
    st.textContent = `.stage .dom.vb-wrap{padding:58px 18px 18px;display:grid;gap:14px;align-content:start}
.vb-wrap .vb-src{font:500 11px/1.3 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.vb-wrap .vb-sent{display:flex;flex-wrap:wrap;align-items:flex-start;gap:10px 10px;font:400 clamp(20px,2.6vw,30px)/1.2 var(--math);color:var(--text)}
.vb-wrap .vb-t{display:inline-flex;flex-direction:column;align-items:flex-start;gap:5px}
.vb-wrap .vb-t>b{font-weight:600}
.vb-wrap .vb-t>small{font:500 10px/1.15 var(--ui);letter-spacing:.06em;text-transform:uppercase;color:var(--faint);max-width:9.5em}
.vb-wrap .vb-t.s>b{color:var(--amber)} .vb-wrap .vb-t.v>b{color:var(--cyan);border-bottom:2px solid var(--cyan)} .vb-wrap .vb-t.ax>b{color:var(--pink);border-bottom:2px solid var(--pink)}
.vb-wrap .vb-t.neg>b,.vb-wrap .vb-t.c>b{font-weight:400} .vb-wrap .vb-t.dim>b{font-weight:400;color:var(--muted)}
.vb-wrap .vb-tl{border:1px solid var(--line);border-radius:4px;background:rgba(0,0,0,.22);padding:6px 0;overflow:hidden}
.vb-wrap .vb-chip{display:inline-block;font:600 11px/1 var(--ui);letter-spacing:.14em;text-transform:uppercase;padding:5px 8px;border:1px solid currentColor;border-radius:2px;margin-right:6px}
.vb-wrap table.vb-forms{border-collapse:collapse;width:100%;font:400 16px/1.3 var(--sans)}
.vb-wrap .vb-forms td{padding:8px 6px;border-bottom:1px solid var(--line);vertical-align:top}
.vb-wrap .vb-forms td:first-child{font:500 11px/1.3 var(--ui);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);width:30%}
.vb-wrap .vb-forms td b{font:600 21px/1.2 var(--math);color:var(--cyan)}
.vb-wrap .vb-forms td span{display:block;font-size:12.5px;color:var(--faint);margin-top:3px}
.vb-wrap .vb-forms tr.irr td b{color:var(--amber)}
.vb-wrap .vb-cmp{font:400 15px/1.45 var(--sans);color:var(--muted)} .vb-wrap .vb-cmp i{font-family:var(--math);font-size:17px;color:var(--text)}
.ctl.vb-type input{width:8.5em;font:inherit;background:var(--panel-2);color:var(--text);border:1px solid var(--line-2);border-radius:4px;padding:6px 8px}`;
    document.head.appendChild(st);
  }
  const cols = { amber: C.amber, violet: C.violet, green: C.green, muted: C.muted, faint: C.faint, text: C.text };
  let mode = "ta", vi = 6, custom = "", si = 3, time = "past", asp = "pp", kind = "stmt";
  let mclause = 0, mood = "mand", modal = "must", mneg = false, fverb = "take";
  let W = 0;
  const ro = new ResizeObserver(() => { const w = Math.floor(dom.clientWidth - 36); if (w > 0 && Math.abs(w - W) > 2) { W = w; draw(); } });
  ro.observe(dom);

  const clean = s => String(s || "").toLowerCase().trim().replace(/^to\s+/, "").replace(/[^a-z]/g, "");
  const curVerb = () => custom ? [custom, ""] : VERBS[vi];
  function typeBox(val, onSet){
    const w = document.createElement("div"); w.className = "ctl vb-type";
    w.innerHTML = `<label for="vbType">or type a verb</label><input id="vbType" type="text" maxlength="20" autocomplete="off" spellcheck="false" placeholder="e.g. swim" value="${esc(val)}">`;
    k.ctl.appendChild(w);
    const inp = w.querySelector("input");
    inp.addEventListener("input", () => onSet(clean(inp.value)));
    return inp;
  }
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "ta") {
      k.select("Verb", VERBS.map(([b], i) => [i, b]), vi, v => { vi = +v; custom = ""; const t = document.getElementById("vbType"); if (t) t.value = ""; draw(); });
      typeBox(custom, v => { custom = v; draw(); });
      k.select("Subject", SUBJ.map((s, i) => [i, s[0]]), si, v => { si = +v; draw(); });
      k.select("Time", TIMES, time, v => { time = v; draw(); });
      k.select("Aspect", ASPS, asp, v => { asp = v; draw(); });
      k.select("Sentence", [["stmt", "Statement"], ["neg", "Negative"], ["q", "Question"]], kind, v => { kind = v; draw(); });
    } else if (mode === "forms") {
      k.select("Verb", ["take", "stop", "study", "write", "go", "be", "have", "do", "put", "lie", "lay", "panic", "prefer", "visit", "agree", "understand"].map(b => [b, b]), fverb, v => { fverb = v; const t = document.getElementById("vbType"); if (t) t.value = ""; draw(); });
      typeBox("", v => { if (v) fverb = v; draw(); });
    } else {
      k.select("Clause", CLAUSES.map((c, i) => [i, `${c[0]} / ${c[1]} / ${c[2]}`]), mclause, v => { mclause = +v; draw(); });
      k.select("Mood", MOODS, mood, v => { mood = v; controls(); draw(); });
      if (mood === "modal") k.select("Modal", Object.keys(MODALS).map(m => [m, m]), modal, v => { modal = v; draw(); });
      k.check("Negative", mneg, v => { mneg = v; draw(); });
    }
  }
  const tok = x => `<span class="vb-t ${x.role}"><b>${esc(x.w)}</b>${x.lbl ? `<small>${esc(x.lbl)}</small>` : ""}</span>`;
  const sentence = (words, end) => `<div class="vb-sent">${words.map((x, i) => i === words.length - 1 ? tok(Object.assign({}, x, { w: x.w + end })) : tok(x)).join("")}</div>`;

  function drawTA(){
    const [verb, comp] = curVerb();
    if (!verb) {
      dom.innerHTML = `<div class="vb-src">Tense–aspect machine</div><div class="vb-cmp">Type a verb in its base form (for example <i>swim</i>, <i>carry</i>, <i>hope</i>).</div>`;
      k.setRO(`<div><h2>Waiting for a verb</h2></div><div class="landmark"><div class="big">Base form only</div><div class="note">Type the plain form of the verb, the one that follows <i>to</i>: <i>to swim</i> → swim.</div></div>`); return;
    }
    const subj = SUBJ[si], B = build(verb, comp, subj, time, asp, kind), key = time + " " + asp;
    const stat = STATIVE.has(verb) || (verb === "be"), prog = asp === "prog" || asp === "pp";
    const o = layout(time, asp, stat);
    dom.innerHTML = `<div class="vb-src">Tense–aspect machine · <span class="c4">S</span> speech time · <span class="c4">R</span> reference time · <span class="c5">E</span> event</div>
      ${sentence(B.words, B.end)}
      <div class="vb-tl">${W > 0 ? svgTimeline(W, o, cols) : ""}</div>`;
    const finiteW = B.words.find(x => x.role === "ax" || x.role === "v");
    // special cases
    let land = null, hit = false;
    if (prog && STATIVE.has(verb)) { hit = true; land = [`<i>${esc(verb)}</i> is a stative verb`, `Stative verbs (know, own, believe, want) describe states, not activities, and normally refuse the progressive. Say <i>${esc((B2 => B2.words.map(x => x.w).join(" ") + B2.end)(build(verb, comp, subj, time, asp === "pp" ? "perf" : "simple", kind)))}</i> instead.`]; }
    else if (verb === "be" && prog) { hit = true; land = ["Progressive be", asp === "pp" ? "Grammatical in principle, but <i>been being</i> is so awkward that writers almost always avoid it." : "<i>Be</i> in the progressive describes temporary behaviour: <i>she is being careful</i> means she is acting carefully right now."]; }
    else if (B.doSupport) { hit = true; land = ["Do-support", `The verb phrase has no auxiliary, so the ${kind === "q" ? "question" : "negative"} borrows <i>do</i>. <i>Do</i> takes the tense (<i>${esc(finiteW.w.toLowerCase())}</i>) and the main verb goes back to its base form.${verb === "have" ? " (British English also allows <i>have</i> alone: <i>Have you a boat?</i>)" : ""}`]; }
    else if (verb === "be" && kind !== "stmt" && asp === "simple" && time !== "future") { hit = true; land = ["No do with main-verb be", `<i>Be</i> behaves like an auxiliary even as a main verb: it takes <i>not</i> and inverts on its own (<i>${kind === "q" ? "Was she careful?" : "She was not careful."}</i>), with no <i>do</i>.`]; }
    else if (time === "future") { land = ["Future = modal will", "English has no future inflection. <i>Will</i> is a modal auxiliary followed by the base form; <i>be going to</i> and the present progressive also refer to the future."]; }
    else if (verb === "have" && asp === "perf") { hit = true; land = ["have twice", "The first <i>have</i> is the perfect auxiliary; <i>had</i> after it is the past participle of main-verb <i>have</i>."]; }
    else land = ["What it means", MEANING[key]];
    const F = B.F;
    k.setRO(`<div><h2>Tense and aspect</h2><div class="ro-big" style="margin-top:8px"><span class="num c2" style="font-size:.78em">${NAME(time, asp)}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span>Tense (first verb)</span> <span class="v c3">${time === "future" ? "present + will" : time}</span><span class="lbl">${time === "future" ? "will is a modal; it has no -s and takes the base form" : `carried by <i>${esc(finiteW.w.toLowerCase())}</i>, the finite verb`}</span></div>
        <div class="row"><span>Aspect</span> <span class="v c5">${{ simple: "simple", prog: "progressive", perf: "perfect", pp: "perfect + progressive" }[asp]}</span><span class="lbl">${FORMULA[asp]}</span></div>
        <div class="row"><span>Timeline</span> <span class="v c4">${RELATION[key]}</span></div>
        <div class="row"><span>Principal parts</span> <span class="v c2" style="font-size:15px">${esc([F.base, F.past, F.pp].join(", "))}</span><span class="lbl">${F.irregular ? "irregular verb" : "regular verb: -ed for past and past participle"}${LINKING.has(verb) ? " · here a linking verb" : ""}</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${land[0]}</div><div class="note">${land[1]}${land[0] !== "What it means" ? `<br><br>${MEANING[key]}` : ""}</div></div>
      <p class="narr">Keep the verb and change only the aspect: watch which auxiliaries appear and how each one fixes the form of the next word.</p>`);
  }

  function drawForms(){
    const b = fverb;
    if (!b) { dom.innerHTML = `<div class="vb-src">The five forms</div><div class="vb-cmp">Type a verb in its base form.</div>`; k.setRO(`<div><h2>Waiting for a verb</h2></div>`); return; }
    const F = forms(b), be = b === "be";
    const row = (lbl, w, rule, irr) => `<tr class="${irr ? "irr" : ""}"><td>${lbl}</td><td><b>${esc(w)}</b><span>${esc(rule)}</span></td></tr>`;
    dom.innerHTML = `<div class="vb-src">The five forms of <i style="text-transform:none;font:italic 15px var(--math)">${esc(b)}</i>${F.prefix ? ` · prefix ${esc(F.prefix)}- + ${esc(F.root)}` : ""}</div>
      <table class="vb-forms">
      ${row("Base (plain form)", b, "Infinitive, imperative, subjunctive, and after modals and do: to " + b + ", " + b + "!, will " + b + ".", false)}
      ${row("-s form (3rd sg present)", be ? "am · is · are" : F.s, be ? "Be alone has three present forms: I am, she is, they are." : F.rules.s, be || ["have", "do", "go", "say"].includes(F.root || b))}
      ${row("Past", be ? "was · were" : F.past, be ? "Was for I, he, she, it; were for you, we, they (and the subjunctive)." : F.rules.past, F.irregular)}
      ${row("Past participle", F.pp, F.rules.pp + " After have (perfect) or be (passive).", F.irregular && F.pp !== F.past)}
      ${row("Present participle (-ing)", F.ing, F.rules.ing + " After be (progressive); also the gerund.", false)}
      </table>`;
    const same = F.past === F.pp, allSame = same && F.past === b;
    let land;
    if (be) land = ["Eight forms", "<i>Be</i> is the only English verb with more than five forms: be, am, is, are, was, were, been, being. It is also the only verb whose subjunctive differs from its indicative for every person (<i>that they be</i>, <i>if I were</i>)."];
    else if (b === "lie" || b === "lay") land = ["lie or lay?", "<i>Lie</i> (recline) is intransitive: lie, lay, lain, lying. <i>Lay</i> (put down) is transitive: lay, laid, laid, laying. The past of <i>lie</i> is spelled like the present of <i>lay</i>, which is the source of the confusion. (<i>Lie</i> meaning tell an untruth is regular: lied, lied.)"];
    else if (allSame) land = ["All three the same", `<i>${esc(b)}</i> uses one form for base, past and past participle. Only the context shows the tense: <i>they ${esc(b)} it yesterday</i>, <i>they ${esc(F.s)} it every day</i>.`];
    else if (F.irregular && !same) land = ["Irregular: three different parts", `Learn <i>${esc(b)}, ${esc(F.past)}, ${esc(F.pp)}</i> as a set. Using the past where the participle belongs (<i>have ${esc(F.past)}</i>) is one of the commonest verb errors.`];
    else if (F.irregular) land = ["Irregular, past = participle", `<i>${esc(F.past)}</i> serves as both past and past participle, but it is not formed with -ed.`];
    else land = ["Regular verb", "Regular verbs form the past and past participle the same way, with -ed. Nearly all new verbs are regular (<i>texted, googled</i>)."];
    k.setRO(`<div><h2>Principal parts</h2><div class="ro-big" style="margin-top:8px"><span class="num c2" style="font-size:.75em">${esc(b)}, ${esc(be ? "was/were" : F.past)}, ${esc(F.pp)}</span></div></div>
      <div class="ro-rows"><div class="row"><span>Type</span> <span class="v ${F.irregular ? "c1" : "c2"}">${F.irregular ? "irregular" : "regular"}</span><span class="lbl">${F.irregular ? "past and participle are learned, not built with -ed" : "past and participle built with -ed"}</span></div>
      <div class="row"><span>Distinct forms</span> <span class="v c5">${be ? 8 : new Set([b, F.s, F.past, F.pp, F.ing]).size}</span><span class="lbl">${be ? "be, am, is, are, was, were, been, being" : "most verbs have five; put, cut and hit have three"}</span></div></div>
      <div class="landmark${F.irregular || b === "lay" ? " hit" : ""}"><div class="big">${land[0]}</div><div class="note">${land[1]}</div></div>
      <p class="narr">Spelling rules for typed verbs follow American usage (traveled, not travelled). Try <i>stop</i>, <i>panic</i>, <i>agree</i>, <i>lie</i> and <i>understand</i>.</p>`);
  }

  function drawMood(){
    const [sw, vb, comp] = CLAUSES[mclause], F = forms(vb);   // all four subjects are third-person singular
    const subj = { w: sw, role: "s", lbl: "subject" }, cap = x => Object.assign({}, x, { w: x.w[0].toUpperCase() + x.w.slice(1) });
    const indPres = vb === "be" ? "is" : F.s, indPast = vb === "be" ? "was" : F.past;
    const fr = w => ({ w, role: "dim", lbl: "" }), C2 = { w: comp, role: "c", lbl: "" };
    let words, end = ".", title, note, form, contrast;
    if (mood === "ind") {
      words = mneg ? (vb === "be" ? [subj, { w: "is", role: "v", lbl: "present indicative" }, { w: "not", role: "neg" }, C2] : [subj, { w: "does", role: "ax", lbl: "do-support" }, { w: "not", role: "neg" }, { w: vb, role: "v", lbl: "base form" }, C2])
        : [subj, { w: indPres, role: "v", lbl: "present indicative" }, C2];
      words[0] = cap(words[0]); title = "Indicative"; form = mneg && vb !== "be" ? "does not " + vb : indPres;
      note = "The ordinary mood of statements and questions: it presents the clause as fact. Third-person singular present takes -s (or is), and negatives use do unless the verb is be.";
      contrast = `Past indicative: <i>${esc(sw)} ${esc(indPast)} ${esc(comp)}</i>.`;
    } else if (mood === "imp") {
      words = mneg ? [{ w: "Do", role: "ax", lbl: "do-support" }, { w: "not", role: "neg" }, { w: vb, role: "v", lbl: "base form" }, C2] : [{ w: vb[0].toUpperCase() + vb.slice(1), role: "v", lbl: "imperative = base form" }, C2];
      title = "Imperative"; form = mneg ? "do not " + vb : vb; end = "!";
      note = `A command or request addressed to <i>you</i>, which is understood, not written. The verb is the base form.${vb === "be" && mneg ? " Even <i>be</i> takes do-support in a negative imperative: <i>Do not be late</i>, never <i>Be not late</i> in modern English." : mneg ? " Negative imperatives always use <i>do not</i> (<i>don’t</i>)." : ""}`;
      contrast = `The clause's own subject (${esc(sw)}) drops out: imperatives speak to the listener.`;
    } else if (mood === "mand") {
      words = [fr("We"), fr("insist"), fr("that"), subj, ...(mneg ? [{ w: "not", role: "neg" }] : []), { w: vb, role: "v", lbl: "mandative subjunctive = base" }, C2];
      title = "Present (mandative) subjunctive"; form = (mneg ? "not " : "") + vb;
      note = `After verbs and adjectives of demand or necessity (<i>insist, demand, require, recommend, essential, vital</i>) the that-clause uses the base form for every person: no -s, and <i>be</i> rather than <i>is</i>. The negative puts <i>not</i> before the verb with no <i>do</i>. Common in American English; British English often uses <i>should</i> (<i>that ${esc(sw)} should ${esc(vb)}</i>).`;
      contrast = `Indicative would be <i>${esc(sw)} ${esc(mneg ? (vb === "be" ? "is not" : "does not " + vb) : indPres)}</i>; the subjunctive is <i>${esc(sw)} ${esc(form)}</i>.`;
    } else if (mood === "were") {
      const vw = vb === "be" ? "were" : F.past, lbl = vb === "be" ? "irrealis were" : "past form, unreal present";
      words = [fr("If"), subj, ...(mneg && vb !== "be" ? [{ w: "did", role: "ax", lbl: "do-support" }, { w: "not", role: "neg" }, { w: vb, role: "v", lbl: "base form" }] : [{ w: vw, role: "v", lbl }, ...(mneg ? [{ w: "not", role: "neg" }] : [])]), Object.assign({}, C2, { w: comp + "," }), fr("all"), fr("would"), fr("be"), fr("well")];
      title = vb === "be" ? "Past subjunctive (irrealis were)" : "Unreal condition (modal past)"; form = vb === "be" ? "were" : F.past;
      note = vb === "be" ? `For an unreal or hypothetical condition, formal English uses <i>were</i> even with <i>I, he, she, it</i>, where the indicative has <i>was</i>. <i>If ${esc(sw)} was on time</i> is common in speech, but formal writing keeps <i>were</i>.` : `Only <i>be</i> has a distinct past subjunctive. Other verbs use the ordinary past form (<i>${esc(F.past)}</i>) with present, unreal meaning: the past tense marks distance from reality, not past time.`;
      contrast = `Real condition (indicative): <i>If ${esc(sw)} ${esc(indPres)} ${esc(comp)}, all will be well.</i>`;
    } else {
      const M = MODALS[modal];
      words = [subj, { w: modal, role: "ax", lbl: "modal: " + M[0] }, ...(mneg ? [{ w: "not", role: "neg" }] : []), { w: vb, role: "v", lbl: "base form" }, C2];
      words[0] = cap(words[0]); title = "Modal: " + modal; form = modal + (mneg ? " not " : " ") + vb;
      note = `${M[1]} Modals have no -s (<i>${esc(sw)} ${esc(modal)}</i>, never <i>${esc(modal)}s</i>), no infinitive or participles, and are followed by the base form.${mneg && modal === "can" ? " The negative is normally written as one word, <i>cannot</i>." : ""}`;
      contrast = `Without the modal: <i>${esc(sw)} ${esc(indPres)} ${esc(comp)}</i>. The modal turns a fact into ${esc(M[0])}.`;
    }
    dom.innerHTML = `<div class="vb-src">Mood switcher · one clause, five ways</div>${sentence(words, end)}<div class="vb-cmp">${contrast}</div>`;
    k.setRO(`<div><h2>Mood</h2><div class="ro-big" style="margin-top:8px"><span class="num c3" style="font-size:.7em">${esc(title)}</span></div></div>
      <div class="ro-rows"><div class="row"><span>Verb form</span> <span class="v c2">${esc(form)}</span></div>
      <div class="row"><span>Subject</span> <span class="v c1">${mood === "imp" ? "you (understood)" : esc(sw)}</span><span class="lbl">third person singular</span></div></div>
      <div class="landmark${mood === "mand" || mood === "were" ? " hit" : ""}"><div class="big">${esc(title)}</div><div class="note">${note}</div></div>
      <p class="narr">Switch moods on the same clause and watch the verb form: <i>is</i>, <i>be</i>, <i>were</i>, <i>must be</i>.</p>`);
  }

  function draw(){ if (mode === "ta") drawTA(); else if (mode === "forms") drawForms(); else drawMood(); }
  const md = k.modes([["ta", "Tense & aspect"], ["forms", "Five forms"], ["mood", "Mood"]], mode, m => { mode = m; controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
  return () => ro.disconnect();
};

})();
