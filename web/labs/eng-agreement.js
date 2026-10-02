/* ============ Labs: English · Subject–verb agreement ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const CSS = `.stage .dom.ag-wrap{padding:58px 18px 18px;display:grid;gap:14px;align-content:start}
.ag-wrap .ag-src{font:500 11px/1.35 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.ag-wrap .ag-sent{position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;gap:30px 9px;padding-top:46px;font:400 clamp(19px,2.5vw,28px)/1.2 var(--math);color:var(--text)}
.ag-wrap .ag-t{display:inline-flex;flex-direction:column;align-items:flex-start;gap:5px;position:relative;z-index:1}
.ag-wrap .ag-t>b{font-weight:400;white-space:nowrap}
.ag-wrap .ag-t>small{font:500 9.5px/1.15 var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--faint);white-space:nowrap}
.ag-wrap .ag-t.h>b{color:var(--amber);font-weight:600}
.ag-wrap .ag-t.v>b{color:var(--cyan);font-weight:600;border-bottom:2px solid var(--cyan)}
.ag-wrap .ag-t.x>b{color:var(--pink);opacity:.6;border-bottom:1px dashed rgba(240,124,160,.5)}
.ag-wrap .ag-t.x>small{color:var(--pink);opacity:.7}
.ag-wrap .ag-t.r>b{color:var(--violet);font-weight:600}
.ag-wrap .ag-t.c>b{color:var(--muted)}
.ag-wrap .ag-t.h>small{color:var(--amber)} .ag-wrap .ag-t.v>small{color:var(--green)} .ag-wrap .ag-t.r>small{color:var(--violet)}
.ag-wrap .ag-t.plain>b{color:var(--text)}
.ag-wrap svg.ag-arr{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:0}
.ag-wrap .ag-gap{display:inline-flex;gap:6px;align-items:center}
.ag-wrap .ag-gap button{font:400 clamp(17px,2.2vw,24px)/1.1 var(--math);color:var(--text);background:var(--panel-2);border:1px solid var(--line-2);border-radius:4px;padding:4px 10px;cursor:pointer}
.ag-wrap .ag-gap button:hover{border-color:var(--cyan);color:var(--cyan)}
.ag-wrap .ag-gap button.wrong{border-color:var(--red);color:var(--red);text-decoration:line-through}
.ag-wrap .ag-why{font:400 14.5px/1.5 var(--sans);color:var(--muted);max-width:44em}
.ag-wrap .ag-why i{font-family:var(--math);font-size:16px;color:var(--text)}
.ag-wrap .ag-chip{display:inline-block;font:600 10.5px/1 var(--ui);letter-spacing:.13em;text-transform:uppercase;padding:5px 8px;border:1px solid currentColor;border-radius:2px;margin:0 6px 6px 0}
.ag-wrap .ag-warn{border-left:2px solid var(--amber);padding:6px 10px;font:400 13.5px/1.45 var(--sans);color:var(--muted);background:rgba(242,184,75,.06)}`;

/* ---------- mode 1: the agreement engine ---------- */
// Heads: number, person, a pronoun for the substitution test. All nouns name people so every verb fits.
const NP = {
  captain:   { w: "captain", num: "sg", per: 3, pro: "she" },
  captains:  { w: "captains", num: "pl", per: 3, pro: "they" },
  mate:      { w: "mate", num: "sg", per: 3, pro: "he" },
  sailors:   { w: "sailors", num: "pl", per: 3, pro: "they" },
  passenger: { w: "passenger", num: "sg", per: 3, pro: "she" },
  passengers:{ w: "passengers", num: "pl", per: 3, pro: "they" },
  I:    { w: "I", num: "sg", per: 1, pron: true },
  you:  { w: "you", num: "sg", per: 2, pron: true },
  she:  { w: "she", num: "sg", per: 3, pron: true },
  we:   { w: "we", num: "pl", per: 1, pron: true },
  they: { w: "they", num: "pl", per: 3, pron: true }
};
const SG = { captains: "captain", sailors: "sailor", passengers: "passenger" };
const HEADS = ["captain", "captains", "mate", "sailors", "passenger", "passengers", "I", "you", "she", "we", "they"];
const STRUCT = [["one", "One subject"], ["and", "X and Y"], ["or", "Either X or Y"], ["nor", "Neither X nor Y"], ["every", "Every X and every Y"]];
// Intervening words, attached after the last head of the subject.
const INT = {
  none:     { t: "(none)" },
  fleet:    { t: "of the fleet", num: "sg", kind: "of-phrase", noun: true },
  ships:    { t: "of the old ships", num: "pl", kind: "of-phrase", noun: true },
  ports:    { t: "from the northern ports", num: "pl", kind: "prepositional phrase", noun: true },
  officers: { t: "as well as the officers", num: "pl", kind: "as well as phrase", comma: true },
  crew:     { t: "along with the crew", num: "sg", kind: "along with phrase", comma: true },
  who:      { t: "who sailed with them", kind: "relative clause", noun: true }
};
const VERBS = [["be", "be · present"], ["was", "be · past"], ["have", "have · present"], ["belong", "belong · present"], ["belonged", "belong · past"], ["can", "can (modal)"]];
const COMP = { be: "on board", was: "on board", have: "been checked", belong: "here", belonged: "here", can: "stay on board" };
// person 1/2/3, number sg/pl → the agreeing form
function vform(v, per, num){
  const s3 = per === 3 && num === "sg";
  if (v === "be") return per === 1 && num === "sg" ? "am" : s3 ? "is" : "are";
  if (v === "was") return (per !== 2 && num === "sg") ? "was" : "were";
  if (v === "have") return s3 ? "has" : "have";
  if (v === "belong") return s3 ? "belongs" : "belong";
  if (v === "belonged") return "belonged";
  return "can";
}
const shows = v => !(v === "belonged" || v === "can");     // does this verb show agreement at all?
const PER = { 1: "1st", 2: "2nd", 3: "3rd" };
const desc = (per, num) => per === 2 ? "2nd person (plural form)" : `${PER[per]} person ${num === "sg" ? "singular" : "plural"}`;
const cap = s => s[0].toUpperCase() + s.slice(1);
const SUBJPRO = (per, num) => per === 1 ? (num === "sg" ? "I" : "we") : per === 2 ? "you" : num === "sg" ? null : "they";

/* ---------- mode 2: indefinite pronouns, collectives, number/majority ---------- */
const IND = {
  each: "sg", either: "sg", neither: "sg", one: "sg", everyone: "sgc", somebody: "sgc", nothing: "sgc",
  both: "pl", few: "pl", many: "pl", several: "pl",
  some: "var", any: "var", none: "var", all: "var", most: "var"
};
const COLL = ["crew", "jury", "committee", "team", "family"];
const QUANT = ["a number", "the number", "the majority"];
const OFS = { none: { t: "(none)" }, pass: { t: "of the passengers", noun: "passengers", type: "pl" }, cargo: { t: "of the cargo", noun: "cargo", type: "nc" }, ship: { t: "of the ship", noun: "ship", type: "sg" } };
const COMP2 = { unit: { be: "on board", was: "on board", have: "been checked", belong: "here", belonged: "here", can: "stay on board" },
  ind: { be: "arguing among themselves", was: "arguing among themselves", have: "gone their separate ways", belong: "to different unions", belonged: "to different unions", can: "disagree among themselves" } };

/* ---------- mode 3: tricky cases. word_role (h head · x ignored · r rule word · c plain), ^ = arrow target, * = italic; {a|b} = the gap ---------- */
const TRICKY = [
  { cat: "Amounts", s: "Ten_h dollars_h^ {is|are} too much for a ticket.", a: 0, why: "A sum of money, a distance or a period of time is treated as one quantity: notional agreement overrides the plural form. Compare <i>Ten dollar bills are on the table</i>, where the bills are separate things." },
  { cat: "-ics nouns", s: "Mathematics_h^ {is|are} her best subject.", a: 0, why: "Nouns in <i>-ics</i> naming a field of study (<i>mathematics, physics, economics, linguistics</i>) are singular, despite the <i>-s</i>." },
  { cat: "-ics nouns", s: "His politics_h^ {is|are} hard to pin down.", a: 1, why: "With a possessive, <i>politics</i> means a person's political opinions, a plural sense, so the verb is plural. As a field or activity it is singular: <i>Politics is a rough trade</i>." },
  { cat: "Titles", s: "Great_h* Expectations_h*^ {was|were} published in 1861.", a: 0, why: "A title names one work, so it takes a singular verb whatever its form. The same holds for names of companies and words cited as words: <i>“Cats” is a plural noun</i>." },
  { cat: "the number / a number", s: "The number_h^ of_x passengers_x {has|have} risen.", a: 0, why: "<i>The number</i> is a singular head; <i>of passengers</i> is an intervening phrase. The sentence is about one number." },
  { cat: "the number / a number", s: "A_r number_r of_r passengers_h^ {has|have} complained.", a: 1, why: "<i>A number of</i> works as a quantifier meaning “several”, like <i>many</i>: the real head is <i>passengers</i>, so the verb is plural." },
  { cat: "one of those who", s: "She is one of those captains_h^ who_r {sail|sails} in any weather.", a: 0, why: "The relative pronoun <i>who</i> takes its number from its antecedent, <i>captains</i>: there are captains who sail in any weather, and she is one of them. Handbooks require the plural; the singular is common in informal writing." },
  { cat: "one of those who", s: "She is the only one_h^ of the captains who_r {sail|sails} in winter.", a: 1, why: "With <i>the only one</i>, the antecedent of <i>who</i> is <i>one</i>: only one captain sails in winter. Singular." },
  { cat: "Linking verbs", s: "The biggest problem_h^ {is|are} the_x long_x winters_x.", a: 0, why: "A linking verb agrees with its subject (<i>problem</i>), never with the complement after it, even when the complement is plural." },
  { cat: "Linking verbs", s: "The long winters_h^ {is|are} the_x biggest_x problem_x.", a: 1, why: "Reverse the sentence and the subject is <i>winters</i>, plural. The singular complement <i>problem</i> does not count." },
  { cat: "each / every", s: "Every_r captain_h^ and_r every_r mate_h^ {has|have} a cabin.", a: 0, why: "When <i>each</i> or <i>every</i> comes before the nouns of a compound subject, the verb is singular: the sentence is about each one separately." },
  { cat: "each / every", s: "The captains_h^ each_r {has|have} a cabin.", a: 1, why: "<i>Each</i> after a plural subject does not change it: the subject is still <i>captains</i>, so the verb is plural. (Compare <i>Each of the captains has a cabin</i>, where <i>each</i> is the subject.)" },
  { cat: "more than one", s: "More_r than_r one_r ship_h^ {was|were} lost.", a: 0, why: "<i>More than one</i> + a singular noun takes a singular verb, by grammatical concord with <i>one ship</i>, although the meaning is plural. With a plural noun the verb is plural: <i>More ships than one were lost</i>." },
  { cat: "Compound, one idea", s: "Bread_h^ and_r butter_h^ {is|are} his usual breakfast.", a: 0, why: "A compound that names a single thing or idea is singular (notional agreement): <i>bread and butter</i> is one dish, like <i>fish and chips</i> or <i>rock and roll</i>. If two separate items are meant, use the plural: <i>The bread and the butter are on the shelf</i>." },
  { cat: "Inverted order", s: "Here_r {comes|come} the captain_h^ and_r the mate_h^.", a: 1, why: "After <i>here</i> or <i>there</i> the subject follows the verb. It is a compound with <i>and</i>, so the verb is plural. In speech <i>Here comes</i> with a compound is common; edited prose keeps the agreement." },
  { cat: "Inverted order", s: "There_r {is|are} a crate_h^ and_r a barrel_h^ on the dock.", a: 1, why: "<i>There</i> is not the subject. The subject comes after the verb, <i>a crate and a barrel</i>, plural. <i>There's a crate and a barrel</i> (agreement with the first noun) is very common in speech." },
  { cat: "Verbal subjects", s: "Reading_h^ old_x novels_x {is|are} a pleasure.", a: 0, why: "A gerund phrase (or an infinitive phrase or a clause) used as a subject is singular. Its head is <i>reading</i>; the plural <i>novels</i> is the gerund's object." },
  { cat: "Indefinite pronouns", s: "Neither_h^ of_x the_x ships_x {is|are} ready.", a: 0, why: "<i>Neither</i> (like <i>either</i> and <i>each</i>) is singular in formal writing; <i>of the ships</i> is intervening. A plural verb after <i>neither of</i> is common in speech and informal prose, but handbooks call for the singular." },
  { cat: "Collective nouns", s: "The jury_h^ {has|have} reached its verdict.", a: 0, why: "In American English a collective noun acting as one unit takes a singular verb, and <i>its</i> confirms the unit reading. British English often uses the plural: <i>The jury have reached their verdict</i>." },
  { cat: "Intervening phrase", s: "The captain_h^ ,_c as_x well_x as_x the_x officers_x ,_c {is|are} on board.", a: 0, why: "<i>As well as, along with, together with</i> and <i>in addition to</i> introduce intervening phrases, not compound subjects. The head is <i>captain</i>; to make both the subject, use <i>and</i>: <i>The captain and the officers are on board</i>." },
  { cat: "or / nor", s: "Either_r the mate or_r the sailors_h^ {is|are} on deck.", a: 1, why: "With <i>or</i> and <i>nor</i> the verb agrees with the nearer subject, <i>sailors</i>. Putting the plural subject second, as here, gives the most natural sentence." }
];

L["eng-agreement"] = k => {
  if (!document.getElementById("css-eng-agreement")) { const s = document.createElement("style"); s.id = "css-eng-agreement"; s.textContent = CSS; document.head.appendChild(s); }
  const dom = k.dom(); dom.classList.add("ag-wrap");
  let mode = "build";
  // mode 1 state
  let st = "one", h1 = "captain", h2 = "passengers", iv = "ships", vb = "be", there = false;
  // mode 2 state
  let word = "each", of = "pass", vb2 = "be", sense = "unit", variety = "US";
  // mode 3 state
  let qi = 0, pick = null, score = { right: 0, tries: 0 }, seen = new Set();

  /* ---- shared rendering: tokens + arrows ---- */
  // token: { w, role: h|v|x|r|c|plain, lbl, tgt (arrow target), p (trailing punctuation), it (italic) }
  const tokHTML = x => `<span class="ag-t ${x.role}${x.tgt ? " ag-tgt" : ""}${x.isV ? " ag-v" : ""}"><b>${x.it ? "<i>" : ""}${esc(x.w)}${x.it ? "</i>" : ""}${x.p ? `<span style="color:var(--text);opacity:1;text-decoration:none">${esc(x.p)}</span>` : ""}</b>${x.lbl ? `<small>${esc(x.lbl)}</small>` : "<small>&nbsp;</small>"}</span>`;
  const sentHTML = toks => `<div class="ag-sent">${toks.map(x => x.gap ? x.gap : tokHTML(x)).join("")}</div>`;
  function arrows(){
    dom.querySelectorAll(".ag-sent").forEach(sn => {
      const old = sn.querySelector("svg.ag-arr"); if (old) old.remove();
      const v = sn.querySelector(".ag-v"), ts = [...sn.querySelectorAll(".ag-tgt")];
      if (!v || !ts.length) return;
      const R = sn.getBoundingClientRect(), vb = v.querySelector("b").getBoundingClientRect();
      const x1 = vb.left + vb.width / 2 - R.left, y1 = vb.top - R.top - 3;
      let path = `<circle cx="${x1.toFixed(1)}" cy="${(y1 + 1).toFixed(1)}" r="3" fill="#7BD88F"/>`;
      const vt = v.getBoundingClientRect(), f = n => n.toFixed(1); let lowDot = false;
      const head = (x, y, up) => `<path d="M${f(x - 5)} ${f(up ? y + 8 : y - 8)} L${f(x)} ${f(y)} L${f(x + 5)} ${f(up ? y + 8 : y - 8)}Z" fill="#7BD88F"/>`;
      const curve = (xa, ya, yc, xb, yb) => `<path d="M${f(xa)} ${f(ya)} C${f(xa)} ${f(yc)} ${f(xb)} ${f(yc)} ${f(xb)} ${f(yb)}" fill="none" stroke="#7BD88F" stroke-width="2"/>`;
      ts.forEach(t => {
        const tb = t.querySelector("b").getBoundingClientRect(), tt = t.getBoundingClientRect();
        const x2 = tb.left + tb.width / 2 - R.left, y2 = tb.top - R.top - 3;
        if (Math.abs(tb.top - vb.top) < 10) {
          // same row: arc above the words
          let top = Math.max(4, Math.min(y1, y2) - Math.min(40, 16 + Math.abs(x2 - x1) * 0.12));
          if (vt.top - R.top > 60) top = Math.max(top, vt.top - R.top - 27);   // a row above: stay inside the row gap
          path += curve(x1, y1, top, x2, y2 - 4) + head(x2, y2 - 1, false);
        } else if (tb.top < vb.top) {
          // the head is on an earlier row: run through the gap above the verb's row and point up at the head from below
          const yb = tt.bottom - R.top + 3, mid = (yb + vt.top - R.top) / 2;
          path += curve(x1, y1, mid, x2, yb + 4) + head(x2, yb + 1, true);
        } else {
          // the head is on a later row (there + be): leave from under the verb and come down to the head
          const ya = vt.bottom - R.top + 3, mid = (ya + tt.top - R.top) / 2;
          if (!lowDot) { lowDot = true; path += `<circle cx="${f(x1)}" cy="${f(ya)}" r="3" fill="#7BD88F"/>`; }
          path += curve(x1, ya, mid, x2, y2 - 4) + head(x2, y2 - 1, false);
        }
      });
      sn.insertAdjacentHTML("afterbegin", `<svg class="ag-arr" aria-hidden="true">${path}</svg>`);
    });
  }
  let W = 0;
  const ro = new ResizeObserver(() => { const w = dom.clientWidth; if (Math.abs(w - W) > 1) { W = w; arrows(); } });
  ro.observe(dom);
  const later = () => { requestAnimationFrame(arrows); setTimeout(() => { if (dom.isConnected) arrows(); }, 350); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (dom.isConnected) arrows(); });

  /* ---- controls ---- */
  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "build") {
      k.select("Subject", STRUCT, st, v => { st = v; fix(); controls(); draw(); });
      const pool = st === "every" ? HEADS.filter(x => !NP[x].pron) : HEADS;
      k.select(st === "one" ? "Head" : "First", pool.map(x => [x, x]), h1, v => { h1 = v; fix(); controls(); draw(); });
      if (st !== "one") k.select("Second", pool.map(x => [x, x]), h2, v => { h2 = v; fix(); controls(); draw(); });
      const last = st === "one" ? h1 : h2;
      k.select("Intervening", Object.keys(INT).filter(x => !(NP[last].pron && INT[x].noun)).map(x => [x, INT[x].t]), iv, v => { iv = v; draw(); });
      k.select("Verb", VERBS, vb, v => { vb = v; fix(); controls(); draw(); });
      if (canThere()) k.check("There + be", there, v => { there = v; draw(); });
    } else if (mode === "groups") {
      k.select("Subject word", [...Object.keys(IND), ...COLL.map(c => "the " + c), ...QUANT].map(x => [x, x]), word, v => { word = v; controls(); draw(); });
      if (!COLL.includes(word.replace(/^the /, ""))) k.select("of-phrase", Object.keys(OFS).map(x => [x, OFS[x].t]), of, v => { of = v; draw(); });
      else {
        k.select("Members act", [["unit", "as one unit"], ["ind", "as individuals"]], sense, v => { sense = v; draw(); });
        k.select("Usage", [["US", "American"], ["UK", "British"]], variety, v => { variety = v; draw(); });
      }
      k.select("Verb", VERBS, vb2, v => { vb2 = v; draw(); });
    } else {
      k.select("Case", TRICKY.map((q, i) => [i, `${i + 1}. ${q.cat}`]), qi, v => { qi = +v; pick = null; draw(); });
      k.button("Next case", () => { qi = (qi + 1) % TRICKY.length; pick = null; controls(); draw(); });
      k.button("Reset score", () => { score = { right: 0, tries: 0 }; seen = new Set(); draw(); }, "btn ghost");
    }
  }
  const canThere = () => (vb === "be" || vb === "was") && !NP[h1].pron && (st === "one" || !NP[h2].pron) && st !== "every";
  function fix(){
    if (st === "every") { if (NP[h1].pron) h1 = "captain"; if (NP[h2].pron) h2 = "mate"; }
    const last = st === "one" ? h1 : h2;
    if (NP[last].pron && INT[iv].noun) iv = "none";
    if (!canThere()) there = false;
  }

  /* ---- mode 1 ---- */
  function drawBuild(){
    const A = NP[h1], B = NP[h2], I = INT[iv];
    const everyFix = st === "every" && (SG[h1] || SG[h2]);
    const nounW = (key, n) => st === "every" && SG[key] ? SG[key] : n.w;
    const det = (key, n) => n.pron ? null : st === "every" ? null : there ? (n.num === "sg" ? "a" : "two") : "the";
    const lblH = n => n.pron ? `head · ${n.per === 2 ? "2nd" : PER[n.per] + " " + n.num}` : `head · ${n.num}`;
    // controller
    let per, num, ctrl, rule, ruleWord;
    if (st === "one") { per = A.per; num = A.num; ctrl = [1]; }
    else if (st === "and") { num = "pl"; per = (A.per === 1 || B.per === 1) ? 1 : (A.per === 2 || B.per === 2) ? 2 : 3; ctrl = [1, 2]; }
    else if (st === "every") { num = "sg"; per = 3; ctrl = [1, 2]; }
    else { per = B.per; num = B.num; ctrl = [2]; }
    const form = vform(vb, per, num);
    const toks = [];
    const NPt = (key, n, which) => {
      const d = det(key, n); if (d) toks.push({ w: d, role: "plain" });
      toks.push({ w: nounW(key, n), role: ctrl.includes(which) ? "h" : "plain", lbl: ctrl.includes(which) ? (st === "every" ? "head · sg" : lblH(n)) : (st === "or" || st === "nor" ? "farther" : ""), tgt: ctrl.includes(which) });
    };
    const subj = () => {
      if (st === "one") NPt(h1, A, 1);
      else if (st === "and") { NPt(h1, A, 1); toks.push({ w: "and", role: "r", lbl: "rule" }); NPt(h2, B, 2); }
      else if (st === "or") { toks.push({ w: "either", role: "r", lbl: "rule" }); NPt(h1, A, 1); toks.push({ w: "or", role: "r", lbl: "nearer →" }); NPt(h2, B, 2); }
      else if (st === "nor") { toks.push({ w: "neither", role: "r", lbl: "rule" }); NPt(h1, A, 1); toks.push({ w: "nor", role: "r", lbl: "nearer →" }); NPt(h2, B, 2); }
      else { toks.push({ w: "every", role: "r", lbl: "rule" }); NPt(h1, A, 1); toks.push({ w: "and", role: "r" }); toks.push({ w: "every", role: "r" }); NPt(h2, B, 2); }
      if (iv !== "none") {
        const ws = I.t.split(" ");
        if (I.comma) toks[toks.length - 1].p = ",";
        ws.forEach((w, i) => toks.push({ w, role: "x", lbl: i === 0 ? "ignored" : "" }));
        if (I.comma) toks[toks.length - 1].p = ",";
      }
    };
    const verbTok = () => { toks.push({ w: form, role: "v", isV: true, lbl: shows(vb) ? (per === 2 ? "2nd person" : PER[per] + " " + num) : "no agreement" }); };
    if (there) { toks.push({ w: "there", role: "r", lbl: "not the subject" }); verbTok(); subj(); }
    else { subj(); verbTok(); }
    COMP[vb].split(" ").forEach(w => toks.push({ w, role: "c" }));
    toks[toks.length - 1].p = (toks[toks.length - 1].p || "") + ".";
    toks[0].w = toks[0].w === "I" ? "I" : cap(toks[0].w);
    if (!shows(vb)) toks.forEach(t => { t.tgt = false; });

    const heads = ctrl.map(i => i === 1 ? nounW(h1, A) : nounW(h2, B));
    const pro = SUBJPRO(per, num) || (st === "one" ? A.pro || A.w : st === "every" ? "each one" : B.pro || B.w);
    const ruleTxt = { one: "agrees with the head", and: "and → plural", or: "or → nearer subject", nor: "nor → nearer subject", every: "every → singular" }[st];
    // landmark
    let land, hit = false;
    const firstOff = (st === "or" || st === "nor") ? A : null;
    if (!shows(vb)) { hit = true; land = ["No agreement to show", `<i>${esc(form)}</i> has one form for every subject: ${vb === "can" ? "modals never take <i>-s</i>" : "past-tense verbs other than <i>be</i> (was/were) do not change"}. Switch the verb to <i>be</i> or <i>have</i> to see the rule at work.`]; }
    else if (st === "one" && iv !== "none" && I.num && I.num !== num) { hit = true; land = ["Skip the intervening words", `The ${I.kind} <i>${esc(I.t)}</i> ends in a ${I.num === "pl" ? "plural" : "singular"} noun right next to the verb. It is a trap: the verb agrees with the head <i>${esc(heads[0])}</i>, so <i>${esc(heads[0])} ${esc(form)}</i>.${I.comma ? " Phrases with <i>as well as</i> or <i>along with</i> never make a compound subject." : ""}`]; }
    else if (st === "one") land = ["Agreement with the head", `The head <i>${esc(heads[0])}</i> is ${desc(per, num)}, so the verb is <i>${esc(form)}</i>.${iv !== "none" ? ` The ${esc(I.kind)} <i>${esc(I.t)}</i> does not count.` : ""}${per === 2 ? " <i>You</i> takes the plural forms (are, were, have) even when it means one person." : ""}${A.w === "I" && vb === "be" ? " <i>I</i> is the only subject that takes <i>am</i>." : ""}`];
    else if (st === "and") { hit = A.num === "sg" && B.num === "sg"; land = ["And makes a plural", `Two subjects joined by <i>and</i> are plural${A.num === "sg" && B.num === "sg" ? ", even when each one is singular" : ""}: <i>${esc(nounW(h1, A))} and ${esc(nounW(h2, B))} ${esc(form)}</i>.${per !== 3 ? ` With ${per === 1 ? "<i>I</i> or <i>we</i>" : "<i>you</i>"} in the pair the substitute pronoun is <i>${per === 1 ? "we" : "you"}</i>, still plural (${vb === "be" ? "never <i>am</i>" : "plural form"}).` : ""}${there ? " In speech <i>there’s a … and a …</i> (agreeing with the first noun) is common; edited prose keeps the plural." : ""}`]; }
    else if (st === "every") { hit = true; land = ["Each / every makes it singular", `<i>Every</i> before the nouns makes the sentence about each one separately, so the verb is singular even with <i>and</i>.${everyFix ? " <i>Every</i> also needs a singular noun, so the plural you chose is shown in its singular form." : ""}`]; }
    else {
      hit = true;
      const clashN = firstOff && firstOff.num === "pl" && B.num === "sg", clashP = firstOff && firstOff.per !== B.per && vb === "be";
      land = [`${st === "or" ? "Or" : "Nor"}: the nearer subject decides`, `<i>${st === "or" ? "Or" : "Nor"}</i> does not add the subjects together. The verb agrees with the one nearer to it, <i>${esc(B.w)}</i>, in number${vb === "be" ? " and person" : ""}: <i>${esc(B.w)} ${esc(form)}</i>.${clashN ? " Grammatical, but the plural so close to a singular verb reads oddly: put the plural subject second." : ""}${clashP && !clashN ? " The two subjects need different forms of <i>be</i>, which many readers find awkward; recast if you can (<i>Either you are wrong, or she is</i>)." : ""}`];
    }
    if (there && shows(vb) && st !== "and") land[1] += " <i>There</i> holds the subject's place only: look after the verb for the real subject.";

    dom.innerHTML = `<div class="ag-src">Agreement engine · <span class="c1">head</span> · <span class="c2">verb</span> · <span class="c3">ignored</span> · <span class="c4">rule word</span> · <span class="c5">agreement</span></div>
      ${sentHTML(toks)}
      <div class="ag-why"><span class="ag-chip c4">${esc(there ? "there + be" : ruleTxt)}</span><span class="ag-chip c5">${shows(vb) ? desc(per, num) : "no agreement"}</span>${shows(vb) && pro ? ` Test: <i>${esc(cap(pro))} ${esc(vform(vb, per, num))}</i> ${esc(COMP[vb])}.` : ""}</div>`;
    later();
    k.setRO(`<div><h2>The verb</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${esc(form)}</span> <span class="c5" style="font-size:.6em">${shows(vb) ? desc(per, num) : "same for every subject"}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span>Controlled by</span> <span class="v c1">${esc(heads.join(" + "))}</span><span class="lbl">${st === "or" || st === "nor" ? "the nearer of the two subjects" : st === "one" ? "the head of the subject" : "both nouns together"}</span></div>
        <div class="row"><span>Ignored</span> <span class="v c3">${iv === "none" ? "nothing" : esc(I.t)}</span><span class="lbl">${iv === "none" ? "add an intervening phrase to test the rule" : esc(I.kind) + ": a modifier, not part of the head"}</span></div>
        <div class="row"><span>Rule word</span> <span class="v c4">${esc({ one: there ? "there" : "none", and: "and", or: "either … or", nor: "neither … nor", every: "every … and every" }[st])}</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${land[0]}</div><div class="note">${land[1]}</div></div>
      <p class="narr">Add a plural intervening phrase to a singular head, then switch to <i>or</i> and swap which subject comes second.</p>`);
  }

  /* ---- mode 2 ---- */
  function drawGroups(){
    const coll = COLL.includes(word.replace(/^the /, "")), O = OFS[of];
    const toks = []; let num, why, title, hit = false, bad = null, dual = false, group;
    const ofToks = (role, tgtNoun) => O.t.split(" ").forEach((w, i) => toks.push({ w, role: role === "x" ? "x" : (w === O.noun ? "h" : "plain"), lbl: role === "x" ? (i === 0 ? "ignored" : "") : (w === O.noun ? "decides" : ""), tgt: tgtNoun && w === O.noun }));
    if (coll) {
      group = "collective noun";
      toks.push({ w: "the", role: "plain" }, { w: word.slice(4), role: "h", lbl: "head · collective", tgt: true });
      if (variety === "US") {
        if (sense === "unit") { num = "sg"; title = "US: singular for the unit"; why = `American English treats a collective noun acting as one body as singular: <i>the ${esc(word.slice(4))} ${esc(vform(vb2, 3, "sg"))}</i>.`; }
        else { num = "pl"; hit = true; title = "Members acting separately"; why = `When the members act individually the plural is correct in American English too (Chicago style allows it). Many US editors still recast with a plural noun: <i>the ${esc(word.slice(4))} members ${esc(vform(vb2, 3, "pl"))} ${esc(COMP2.ind[vb2])}</i>.`; }
      } else {
        if (sense === "unit") { dual = true; num = "sg"; hit = true; title = "British: singular or plural"; why = `British English uses both: the singular stresses the body as a whole, the plural its members, and the plural is especially common with <i>team, government, family</i> and sports teams (<i>England are batting</i>). Keep the choice consistent with later pronouns (<i>its</i> or <i>their</i>).`; }
        else { num = "pl"; title = "British: plural for the members"; why = `With the members acting as individuals, British English uses the plural: <i>the ${esc(word.slice(4))} ${esc(vform(vb2, 3, "pl"))} ${esc(COMP2.ind[vb2])}</i>.`; }
      }
    } else if (QUANT.includes(word)) {
      group = word === "the number" ? "singular head" : "quantifier phrase";
      const [d, n] = word.split(" ");
      if (word === "a number") {
        toks.push({ w: d, role: "r", lbl: "quantifier" }, { w: n, role: "r", lbl: "" });
        if (of !== "pass") { bad = `<i>A number of</i> means “several” and needs a plural count noun: <i>a number of the passengers</i>.`; num = "pl"; }
        else { ofToks("h", true); num = "pl"; title = "A number of = several"; why = "<i>A number of</i> works like <i>many</i> or <i>several</i>: the noun after <i>of</i> is the real head, so the verb is plural."; }
      } else if (word === "the number") {
        toks.push({ w: d, role: "plain" }, { w: n, role: "h", lbl: "head · sg", tgt: true });
        if (of === "none") { num = "sg"; title = "The number: singular"; why = "<i>The number</i> names one figure, so the verb is singular."; }
        else if (of !== "pass") { bad = `<i>The number of</i> needs a plural count noun: <i>the number of passengers</i>. For a noncount noun use <i>the amount of</i>.`; num = "sg"; }
        else { ofToks("x"); num = "sg"; title = "The number: singular"; why = "<i>The number</i> is the head and is singular; <i>of the passengers</i> is an intervening phrase. Compare <i>A number of the passengers are</i>."; }
      } else {
        if (of === "pass" || of === "cargo") { toks.push({ w: d, role: "plain" }, { w: n, role: "r", lbl: "like some, most" }); ofToks("h", true); num = O.type === "pl" ? "pl" : "sg"; title = "Majority follows its of-phrase"; why = `With an <i>of</i>-phrase, <i>the majority</i> usually takes the number of its noun: <i>the majority of the passengers are</i>, <i>the majority of the cargo is</i>.`; }
        else if (of === "none") { toks.push({ w: d, role: "plain" }, { w: n, role: "h", lbl: "head · collective", tgt: true }); num = "sg"; dual = true; hit = true; title = "The majority alone"; why = "Standing alone, <i>the majority</i> is a collective noun: singular for the group as a unit (<i>The majority has spoken</i>), plural for its members (<i>The majority are against it</i>)."; }
        else { bad = "<i>Majority</i> means more than half of a number of things or people; <i>the majority of the ship</i> is not idiomatic. Use <i>most of the ship</i>."; num = "sg"; }
      }
    } else {
      const g = IND[word];
      group = { sg: "always singular", sgc: "always singular", pl: "always plural", var: "variable: some, any, none, all, most" }[g];
      if (g === "var") {
        if (of === "none") { toks.push({ w: word, role: "h", lbl: "head · variable", tgt: true }); num = "sg"; dual = true; hit = true; title = "Number comes from what it refers to"; why = `On its own, <i>${esc(word)}</i> takes the number of the noun it stands for: <i>${esc(cap(word))} ${esc(vform(vb2, 3, "sg"))} ${esc(COMP2.unit[vb2])}</i> (of the cargo) but <i>${esc(word)} ${esc(vform(vb2, 3, "pl"))}</i> (of the passengers). Add an <i>of</i>-phrase to fix it.`; }
        else {
          toks.push({ w: word, role: "r", lbl: "variable" }); ofToks("h", true);
          num = O.type === "pl" ? "pl" : "sg";
          title = `${cap(word)} + ${O.type === "pl" ? "plural count noun → plural" : O.type === "nc" ? "noncount noun → singular" : "singular noun → singular"}`;
          why = `<i>${esc(cap(word))}</i> belongs to the variable group (<i>some, any, none, all, most</i>): it takes the number of the noun in its <i>of</i>-phrase. ${O.type === "pl" ? "<i>Passengers</i> is a plural count noun, so the verb is plural." : O.type === "nc" ? "<i>Cargo</i> is a noncount noun, so the verb is singular." : "<i>Ship</i> is singular, so the verb is singular: part of one ship."}`;
          if (word === "none" && O.type === "pl") { dual = true; hit = true; num = "pl"; title = "None: both are standard"; why = "<i>None</i> has been singular and plural since Old English. Usage guides such as <i>Merriam-Webster’s Dictionary of English Usage</i> accept both; the plural is more common with a plural noun. AP style and many handbooks prefer the singular when <i>none</i> means “not one”: <i>None of the passengers is on board</i>."; }
          if (word === "any" && O.type === "pl") why += " The singular is possible when <i>any</i> means “any one”: <i>Is any of the passengers on board?</i>";
        }
      } else if (g === "pl") {
        toks.push({ w: word, role: "h", lbl: "head · pl", tgt: true });
        if (of !== "none" && O.type !== "pl") { bad = `<i>${esc(cap(word))}</i> counts separate things, so its <i>of</i>-phrase needs a plural count noun: <i>${esc(word)} of the passengers</i>.`; }
        else if (of !== "none") ofToks("x");
        num = "pl"; title = `${cap(word)}: always plural`; why = `<i>Both, few, many, several</i> and <i>others</i> always refer to more than one, so the verb is always plural.`;
      } else {
        toks.push({ w: word, role: "h", lbl: "head · sg", tgt: true });
        if (of !== "none" && g === "sgc") bad = `Compounds in <i>-one, -body, -thing</i> do not take an <i>of</i>-phrase. Use <i>every one of</i>, <i>one of</i> or <i>each of</i> instead: <i>each of the passengers</i>.`;
        else if (of !== "none" && O.type !== "pl") bad = `<i>${esc(cap(word))} of</i> picks individuals out of a group, so it needs a plural noun: <i>${esc(word)} of the passengers</i>.`;
        else if (of !== "none") ofToks("x");
        num = "sg"; title = `${cap(word)}: always singular`;
        why = `<i>Each, either, neither, one, another, much</i> and the compounds in <i>-one, -body, -thing</i> are singular${of !== "none" && !bad ? `, and the plural noun in <i>${esc(O.t)}</i> is intervening` : ""}.${(word === "either" || word === "neither") && of === "pass" ? " (Formal usage keeps <i>either</i> and <i>neither</i> for two; in speech a plural verb after <i>neither of</i> is common.)" : ""}${word === "everyone" ? " <i>Everyone</i> means many people but is grammatically singular, like <i>every person</i>." : ""}`;
      }
    }
    const comp = coll && sense === "ind" ? COMP2.ind[vb2] : COMP2.unit[vb2];
    const f1 = vform(vb2, 3, num), f2 = vform(vb2, 3, num === "sg" ? "pl" : "sg");
    const formW = dual && shows(vb2) ? (num === "sg" ? `${f1} / ${f2}` : `${f1} / ${f2}`) : f1;
    toks.push({ w: formW, role: "v", isV: true, lbl: !shows(vb2) ? "no agreement" : dual ? "both used" : "3rd " + num });
    comp.split(" ").forEach(w => toks.push({ w, role: "c" }));
    toks[toks.length - 1].p = ".";
    toks[0].w = cap(toks[0].w);
    if (!shows(vb2) || bad) toks.forEach(t => { t.tgt = false; });
    if (!shows(vb2) && !bad) { hit = true; why = `<i>${esc(f1)}</i> is the same for every subject, so this verb hides the rule. ${why}`; }
    dom.innerHTML = `<div class="ag-src">Pronouns and groups · what decides the number</div>
      ${bad ? `<div class="ag-warn">${bad}</div>` : sentHTML(toks)}
      <div class="ag-why"><span class="ag-chip c4">${esc(group)}</span>${!bad && shows(vb2) ? `<span class="ag-chip c5">${dual ? "singular or plural" : num === "sg" ? "singular" : "plural"}</span>` : ""}</div>`;
    later();
    k.setRO(bad ? `<div><h2>Not a usable subject</h2><div class="ro-big" style="margin-top:8px"><span class="c3" style="font-size:.7em">${esc(word)}${of !== "none" ? " " + esc(O.t) : ""}</span></div></div>
        <div class="landmark hit"><div class="big">Change the of-phrase</div><div class="note">${bad}</div></div>`
      : `<div><h2>The verb</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${esc(formW)}</span> <span class="c5" style="font-size:.6em">${dual ? "both standard" : num === "sg" ? "singular" : "plural"}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span>Subject word</span> <span class="v c1">${esc(word)}</span><span class="lbl">${esc(group)}</span></div>
        <div class="row"><span>Decided by</span> <span class="v ${toks.some(t => t.role === "r") ? "c4" : "c1"}">${toks.some(t => t.role === "r") ? `the noun after of (${esc(O.noun || "")})` : coll ? "meaning and usage" : "the word itself"}</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${title}</div><div class="note">${why}</div></div>
      <p class="narr">Compare <i>some of the cargo</i> with <i>some of the passengers</i>, then try <i>none</i> and the collective nouns in British usage.</p>`);
  }

  /* ---- mode 3 ---- */
  function parseTricky(q){
    const toks = [];
    q.s.split(" ").forEach(raw => {
      const g = raw.match(/^\{(.+)\|(.+)\}([.,]?)$/);
      if (g) { toks.push({ gapA: [g[1], g[2]], p: g[3] }); return; }
      const m = raw.match(/^(.*?)(?:_([hxrc]))?(\*)?(\^)?([.,]?)$/);
      let w = m[1], p = m[5];
      if (!w && p) { toks[toks.length - 1].p = (toks[toks.length - 1].p || "") + p; return; }
      if (m[2] === "c" && /^[,.]$/.test(w)) { toks[toks.length - 1].p = (toks[toks.length - 1].p || "") + w; return; }
      toks.push({ w, role: m[2] && m[2] !== "c" ? m[2] : "plain", it: !!m[3], tgt: !!m[4], p });
    });
    return toks;
  }
  function drawTricky(){
    const q = TRICKY[qi], raw = parseTricky(q), done = pick !== null, right = q.a;
    const vword = raw.find(t => t.gapA).gapA[right];
    const toks = raw.map((t, i) => {
      if (t.gapA) {
        if (!done) return { gap: `<span class="ag-t"><span class="ag-gap">${t.gapA.map((o, j) => `<button type="button" data-o="${j}">${esc(o)}</button>`).join("")}</span><small>choose</small></span>` };
        return { w: t.gapA[right], role: "v", isV: true, lbl: pick === right ? "agrees" : `not ${t.gapA[pick]}`, p: t.p };
      }
      const r = Object.assign({}, t);
      if (!done) { r.role = "plain"; r.tgt = false; }
      else r.lbl = t.role === "h" && t.tgt ? "head" : t.role === "r" && !raw.slice(0, i).some(z => z.role === "r") ? "rule" : t.role === "x" && !(raw[i - 1] && raw[i - 1].role === "x") ? "ignored" : "";
      return r;
    });
    if (toks[0].w) toks[0].w = cap(toks[0].w);
    dom.innerHTML = `<div class="ag-src">Tricky cases · ${qi + 1} of ${TRICKY.length} · ${esc(q.cat)}</div>
      ${sentHTML(toks)}
      <div class="ag-why">${done ? q.why : "Choose the verb form that agrees. Then the lab shows the head it agrees with and the rule."}</div>`;
    dom.querySelectorAll(".ag-gap button").forEach(b => b.onclick = () => { pick = +b.dataset.o; if (!seen.has(qi)) { seen.add(qi); score.tries++; if (pick === right) score.right++; } draw(); });
    later();
    k.setRO(`<div><h2>Score</h2><div class="ro-big" style="margin-top:8px"><span class="num c5">${score.right}</span> / <span class="num">${score.tries}</span></div></div>
      <div class="ro-rows"><div class="row"><span>Case</span> <span class="v c4">${esc(q.cat)}</span><span class="lbl">first answer to each case counts toward the score</span></div>
      ${done ? `<div class="row"><span>Agreeing form</span> <span class="v c2">${esc(vword)}</span></div>` : ""}</div>
      ${done ? `<div class="landmark hit"><div class="big">${pick === right ? "Right" : "Not quite"}: <span class="c2">${esc(vword)}</span></div><div class="note">${q.why}</div></div>`
        : `<div class="landmark"><div class="big">Find the head first</div><div class="note">Ask who or what does the verb, strip away intervening words, then check for a rule word: and, or, each, every, there, here.</div></div>`}
      <p class="narr">${done ? "Press Next case for another." : "Some of these are rules where meaning overrides form (notional agreement)."}</p>`);
  }

  function draw(){ if (mode === "build") drawBuild(); else if (mode === "groups") drawGroups(); else drawTricky(); }
  const md = k.modes([["build", "Build a subject"], ["groups", "Pronouns & groups"], ["tricky", "Tricky cases"]], mode, m => { mode = m; controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
  return () => ro.disconnect();
};
})();
