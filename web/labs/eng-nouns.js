/* ============ Labs: English · Nouns & Pronouns ============ */
(function(){
const L = window.LABS;
const nw = s => esc(s).replace(/(\S*-\S+)/g, '<span style="white-space:nowrap">$1</span>'); // keep "-es", "mother-in-law" unbroken
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- noun inflection: plural and possessive with the rule that produced them ---------- */
const IRREG = { man: "men", woman: "women", child: "children", foot: "feet", tooth: "teeth", goose: "geese", mouse: "mice", louse: "lice", ox: "oxen", person: "people", brother: "brothers", die: "dice" };
const IRREG_NOTE = { man: "An Old English vowel change (i-mutation): the vowel changes inside the word.", woman: "Like man: the vowel changes inside the word (and the first syllable is pronounced “wim-”).",
  child: "An old double plural: Old English cildru, with -en added later.", foot: "A vowel change inside the word, from Old English.", tooth: "A vowel change inside the word, from Old English.", goose: "A vowel change inside the word, from Old English.",
  mouse: "A vowel change inside the word. For computer mice, mouses is also seen.", louse: "A vowel change inside the word, like mouse, mice.", ox: "The Old English weak plural -en survives in oxen.",
  person: "People is the usual plural; persons is used in legal and formal writing (“no more than four persons”).", brother: "Regular. The old plural brethren survives for members of a religious order or society.", die: "One die, two dice (gaming cubes). A die for stamping metal has the plural dies." };
const ZERO = { sheep: "", deer: "", moose: "", swine: "", bison: "", aircraft: "", salmon: "", trout: "", cod: "", series: "", species: "", means: "", offspring: "",
  fish: "Fish is the usual plural; fishes is used for several kinds of fish." };
const FOREIGN = { criterion: ["criteria", "", "Greek -on → -a."], phenomenon: ["phenomena", "", "Greek -on → -a."], analysis: ["analyses", "", "Greek -is → -es."], crisis: ["crises", "", "Greek -is → -es."],
  thesis: ["theses", "", "Greek -is → -es."], hypothesis: ["hypotheses", "", "Greek -is → -es."], basis: ["bases", "", "Greek -is → -es."], diagnosis: ["diagnoses", "", "Greek -is → -es."], parenthesis: ["parentheses", "", "Greek -is → -es."],
  cactus: ["cacti", "cactuses", "Latin -us → -i; the English plural is also correct."], fungus: ["fungi", "funguses", "Latin -us → -i."], nucleus: ["nuclei", "", "Latin -us → -i."], stimulus: ["stimuli", "", "Latin -us → -i."],
  radius: ["radii", "radiuses", "Latin -us → -i."], alumnus: ["alumni", "", "Latin -us → -i (feminine alumna, alumnae)."], syllabus: ["syllabi", "syllabuses", "Latin-style -i; syllabuses is also standard."], focus: ["foci", "focuses", "Latin -i in science; focuses in general use."],
  datum: ["data", "", "Latin -um → -a. Data is now often treated as a noncount noun (the data is), especially outside science."], medium: ["media", "mediums", "Latin -um → -a; mediums for spiritualists and artists' materials."],
  curriculum: ["curricula", "curriculums", "Latin -um → -a."], bacterium: ["bacteria", "", "Latin -um → -a."], memorandum: ["memoranda", "memorandums", "Latin -um → -a."], millennium: ["millennia", "millenniums", "Latin -um → -a."],
  vertebra: ["vertebrae", "vertebras", "Latin -a → -ae."], formula: ["formulas", "formulae", "Formulas in general use; formulae in some science writing."], antenna: ["antennae", "antennas", "Antennae for insects, antennas for radios."], larva: ["larvae", "", "Latin -a → -ae."],
  index: ["indexes", "indices", "Indexes for books; indices in mathematics and economics."], appendix: ["appendixes", "appendices", "Both are standard; appendices is usual for books."], matrix: ["matrices", "matrixes", "Latin -ix → -ices."], axis: ["axes", "", "Latin -is → -es."],
  tableau: ["tableaux", "tableaus", "French -eau → -eaux."], bureau: ["bureaus", "bureaux", "Bureaus in US English; bureaux in British English."], cherub: ["cherubim", "cherubs", "Hebrew -im for angels; cherubs for chubby children in art."] };
const NONCOUNT = { advice: "a piece of advice", information: "a piece of information", furniture: "a piece of furniture", luggage: "a piece of luggage", baggage: "a piece of baggage", equipment: "a piece of equipment",
  homework: "an assignment", knowledge: "an area of knowledge", music: "a piece of music", research: "a study", rice: "a grain of rice", sand: "a grain of sand", honesty: "an act of honesty", happiness: "a moment of happiness",
  courage: "an act of courage", evidence: "a piece of evidence", news: "a piece of news", traffic: "a stream of traffic", weather: "a spell of weather", mud: "a lump of mud", wealth: "a fortune", poetry: "a poem", jewelry: "a piece of jewelry",
  mathematics: "a branch of mathematics", physics: "a law of physics", gold: "a bar of gold", milk: "a glass of milk", water: "a glass of water", bread: "a loaf of bread" };
const NC_TOO = { water: "waters (bodies of water: the waters of the Nile)", bread: "breads (kinds of bread)", milk: "", gold: "", rice: "", research: "", music: "", sand: "sands (stretches of sand)", happiness: "", courage: "" };
const ONLY_PL = { scissors: "a pair of scissors", trousers: "a pair of trousers", pants: "a pair of pants", jeans: "a pair of jeans", pliers: "a pair of pliers", tongs: "a pair of tongs", binoculars: "a pair of binoculars", shorts: "a pair of shorts",
  clothes: "an article of clothing", cattle: "a head of cattle", police: "a police officer", thanks: "", outskirts: "", premises: "", remains: "" };
const COLLECTIVE = ["family", "team", "committee", "jury", "class", "flock", "herd", "staff", "audience", "crew", "band", "choir", "army", "government", "crowd", "faculty", "public", "company", "orchestra", "council", "fleet", "swarm"];
const VES = { leaf: 1, loaf: 1, half: 1, knife: 1, wife: 1, life: 1, wolf: 1, calf: 1, shelf: 1, self: 1, thief: 1, elf: 1, sheaf: 1, scarf: "scarfs", hoof: "hoofs", dwarf: "dwarfs", wharf: "wharfs" };
const OES = { hero: 1, potato: 1, tomato: 1, echo: 1, veto: 1, torpedo: 1, embargo: 1, volcano: "volcanos", mosquito: "mosquitos", tornado: "tornados", cargo: "cargos", domino: 1, mango: "mangos", motto: "mottos" };
const CH_K = ["stomach", "monarch", "epoch", "patriarch", "matriarch", "eunuch", "tech", "loch"];
const MAN_S = ["human", "german", "roman", "talisman", "shaman", "caiman", "ottoman", "cayman", "walkman"];
const COMPOUND = { "attorney general": ["attorneys general", "attorney generals", "The head noun is attorney; attorney generals is common in speech."], "passer-by": ["passers-by"], "runner-up": ["runners-up"],
  "editor in chief": ["editors in chief"], "court-martial": ["courts-martial", "court-martials"], "spoonful": ["spoonfuls", "", "Measure nouns in -ful add -s at the end: spoonfuls, cupfuls."], "cupful": ["cupfuls", "", "Measure nouns in -ful add -s at the end: cupfuls, spoonfuls."], "forget-me-not": ["forget-me-nots", "", "No part is a noun head, so the whole compound takes -s."], "grown-up": ["grown-ups", "", "The compound as a whole is the noun, so -s goes on the end."], "toothbrush": ["toothbrushes"] };
const PREPS = ["in", "of", "by", "on", "at", "to", "for", "from"];
const PLURAL_OF = {}; // reverse lookup, so typing a plural shows its singular
Object.entries(IRREG).forEach(([s, p]) => { if (p !== s + "s") PLURAL_OF[p] = s; });
Object.entries(FOREIGN).forEach(([s, [p]]) => { if (!["axes", "bases"].includes(p)) PLURAL_OF[p] = s; }); // axes, bases are also plurals of axe, base
PLURAL_OF.axes = "axe"; PLURAL_OF.bases = "base";

const RULES = [
  ["irreg", "Irregular plural", "man → men, child → children"],
  ["zero", "Zero plural", "sheep → sheep"],
  ["foreign", "Foreign plural", "criterion → criteria"],
  ["noncount", "Noncount: no plural", "advice, furniture"],
  ["only", "Plural only", "scissors, cattle"],
  ["compound", "Compound: pluralise the head", "mother-in-law → mothers-in-law"],
  ["proper", "Name: add -s or -es, keep the spelling", "the Kennedys, the Joneses"],
  ["es", "After s, x, z, ch, sh: add -es", "church → churches"],
  ["ies", "Consonant + y: y → -ies", "city → cities"],
  ["ves", "Some -f, -fe: → -ves", "wife → wives"],
  ["oes", "Some consonant + o: add -es", "hero → heroes"],
  ["s", "Default: add -s", "girl → girls"]
];

function plural1(w){ // one lower-case word → {pl, alt, rule, note}
  if (IRREG[w]) return { pl: IRREG[w], rule: IRREG[w] === w + "s" ? "s" : "irreg", note: IRREG_NOTE[w] };
  if (ZERO[w] !== undefined) return { pl: w, rule: "zero", alt: w === "fish" ? "fishes" : "", note: ZERO[w] || "The plural has the same form as the singular: one " + w + ", two " + w + "." };
  if (FOREIGN[w]) { const [p, a, n] = FOREIGN[w]; return { pl: p, alt: a, rule: "foreign", note: n }; }
  for (const [end, p] of [["woman", "women"], ["man", "men"], ["child", "children"], ["mouse", "mice"], ["goose", "geese"], ["tooth", "teeth"], ["foot", "feet"]])
    if (w.endsWith(end) && w.length > end.length && !MAN_S.includes(w)) return { pl: w.slice(0, -end.length) + p, rule: "irreg", note: "A compound ending in " + end + " keeps that word's irregular plural." };
  if (VES[w]) return { pl: w.replace(/fe?$/, "ves"), alt: VES[w] === 1 ? "" : VES[w], rule: "ves", note: VES[w] === 1 ? "One of about a dozen common nouns where f or fe becomes -ves." : "Both plurals are standard." };
  if (/(?:s|x|z|ch|sh)$/.test(w)) {
    if (CH_K.includes(w)) return { pl: w + "s", rule: "s", note: "This ch is pronounced k, so there is no extra syllable and only -s is added." };
    if (/^(?:qu|[^aeiou])*[aeiou]z$/.test(w)) return { pl: w + "zes", rule: "es", note: "A one-syllable word in a single z doubles it: quiz, quizzes." };
    return { pl: w + "es", rule: "es", note: "The -es adds a syllable that keeps the hissing sounds apart: box, boxes." };
  }
  if (/[^aeiou]y$/.test(w) || /quy$/.test(w)) return { pl: w.slice(0, -1) + "ies", rule: "ies", note: "Change y to i and add -es. After a vowel, y stays: day, days." };
  if (/[^aeiou]o$/.test(w) && OES[w]) return { pl: w + "es", alt: OES[w] === 1 ? "" : OES[w], rule: "oes", note: OES[w] === 1 ? "One of a small set of common -o nouns that take -es." : "Both spellings are standard." };
  if (/[^aeiou]o$/.test(w)) return { pl: w + "s", rule: "s", note: "Most -o nouns, especially short forms (photo), music terms (piano, solo) and newer loans, add only -s. A few common ones (hero, potato, echo) take -es: check a dictionary." };
  if (/(?:f|fe)$/.test(w) && !/ff$/.test(w)) return { pl: w + "s", rule: "s", note: "Most -f nouns just add -s (roof, belief, chief). Only about a dozen change to -ves." };
  return { pl: w + "s", rule: "s", note: "The regular plural." };
}

function inflect(raw){
  let w = String(raw || "").trim().replace(/\s+/g, " ").replace(/'/g, "’");
  if (!w) return { err: "Type a noun, or pick one from the list." };
  if (w.length > 32) return { err: "That is too long for one noun. Try a single word or a short compound." };
  if (!/^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ -]*$/.test(w) || /--|- | -/.test(w)) return { err: "Use letters only (hyphens and spaces are fine for compounds such as mother-in-law)." };
  const badges = [];
  let low = w.toLowerCase(), proper = /^[A-Z]/.test(w) && !w.includes(" ") && !w.includes("-");
  const known = k => IRREG[k] || ZERO[k] !== undefined || FOREIGN[k] || NONCOUNT[k] !== undefined || ONLY_PL[k] !== undefined || COLLECTIVE.includes(k) || VES[k] || OES[k] || COMPOUND[k] || PLURAL_OF[k];
  if (proper && known(low)) proper = false;     // a capitalised common noun (start of a sentence)
  let from = "";
  if (!proper && PLURAL_OF[low]) { from = low; low = PLURAL_OF[low]; }
  const r = { sg: proper ? w : low, badges, from };
  if (proper) {
    r.pl = /(?:s|x|z|ch|sh)$/.test(w) ? w + "es" : w + "s"; r.rule = "proper"; r.note = "Names never change their spelling in the plural: the Kennedys, not the Kennedies; the Wolfs, not the Wolves. Hissing endings still add -es: the Joneses.";
    badges.push(["proper", "Proper noun"], ["count", "Count"]);
  } else if (NONCOUNT[low] !== undefined) {
    r.pl = null; r.rule = "noncount"; r.unit = NONCOUNT[low]; r.note = "No plural in this sense. Count it with a unit noun: " + r.unit + ", two " + r.unit.replace(/^an? /, "").replace(/^(\w+)/, m => plural1(m).pl) + "." + (NC_TOO[low] ? " Used as a count noun it has the plural " + NC_TOO[low] + "." : "");
    if (low === "news" || low === "mathematics" || low === "physics") r.note += " It ends in s but takes a singular verb: the news is good.";
    badges.push(["noncount", "Noncount (mass)"], [/^(advice|information|knowledge|research|honesty|happiness|courage|evidence|news|wealth|poetry|music|mathematics|physics|weather|homework)$/.test(low) ? "abstract" : "concrete", /^(advice|information|knowledge|research|honesty|happiness|courage|evidence|news|wealth|poetry|music|mathematics|physics|weather|homework)$/.test(low) ? "Abstract" : "Concrete"]);
  } else if (ONLY_PL[low] !== undefined) {
    r.only = true; r.sg = null; r.pl = low; r.rule = "only"; r.unit = ONLY_PL[low];
    r.note = (low === "cattle" || low === "police" ? "A plural noun with no -s and no singular form: the cattle are, the police are." : "A plural-only noun (plurale tantum), often for things made of two matching parts.") + (r.unit ? " To count it, use " + r.unit + "." : "");
    badges.push(["count", "Plural only"]);
  } else if (COMPOUND[low] || /[ -]/.test(low)) {
    const c = COMPOUND[low];
    if (c) { r.pl = c[0]; r.alt = c[1] || ""; r.note = c[2] || "Pluralise the head noun, the part the compound is a kind of."; }
    else {
      const parts = low.split(/([ -])/); // words and separators
      const words = parts.filter((_, i) => i % 2 === 0);
      let head = words.length - 1;
      const pi = words.findIndex((x, i) => i > 0 && PREPS.includes(x));
      if (pi > 0) head = pi - 1;                                   // man-of-war, mother-in-law, lady-in-waiting
      if (words[head] === "" || PREPS.includes(words[head])) head = words.length - 1;
      const p = plural1(words[head]); words[head] = p.pl;
      r.pl = words.map((x, i) => x + (parts[2 * i + 1] || "")).join("");
      r.note = head < (low.split(/[ -]/).length - 1) ? "The head noun comes first (" + low.split(/[ -]/)[head] + "), so it takes the plural: the rest of the compound is a modifying phrase." : "The last word is the head, so it takes the plural (by the " + RULES.find(x => x[0] === p.rule)[1].toLowerCase() + " rule).";
    }
    r.rule = "compound"; badges.push(["compound", "Compound"], ["count", "Count"]);
  } else {
    Object.assign(r, plural1(low)); badges.push(["count", r.rule === "zero" && /^(series|species|means)$/.test(low) ? "Count (same form)" : "Count"]);
  }
  if (r.sg && COLLECTIVE.includes(r.sg)) { badges.push(["collective", "Collective"]); r.note += " A collective noun names a group but is still a count noun: one " + r.sg + ", two " + r.pl + "."; }
  // possessives: singular + ’s; a plural ending in s + ’; other plurals + ’s
  if (r.sg) { r.sgPos = [r.sg, "’s"]; r.sgPosNote = /s$/i.test(r.sg) ? "Chicago and MLA add ’s even after s (" + r.sg + "’s); AP style uses the apostrophe alone (" + r.sg + "’), and so does everyone for a few classical names (Moses’, Jesus’)." : "Every singular noun takes ’s."; }
  if (r.pl) { const ends = /s$/i.test(r.pl); r.plPos = ends ? [r.pl, "’"] : [r.pl, "’s"]; r.plPosNote = ends ? "The plural already ends in s: add the apostrophe only." : "The plural does not end in s, so it takes ’s like a singular."; }
  if (r.rule === "compound") r.sgPosNote = "The ’s goes on the end of the whole compound, not on the head: " + r.sg + "’s, " + (r.pl) + (/s$/.test(r.pl) ? "’" : "’s") + ".";
  return r;
}

/* Colour the part of the plural that differs from the singular (the plural marker). */
function markDiff(sg, pl){
  if (!sg || sg === pl) return `<span class="c1">${esc(pl)}</span>`;
  let a = 0; while (a < sg.length && a < pl.length && sg[a] === pl[a]) a++;
  let b = 0; while (b < sg.length - a && b < pl.length - a && sg[sg.length - 1 - b] === pl[pl.length - 1 - b]) b++;
  const mid = pl.slice(a, pl.length - b);
  return `<span class="c1">${esc(pl.slice(0, a))}</span><span class="c3 nn-mark">${esc(mid)}</span><span class="c1">${esc(pl.slice(pl.length - b))}</span>`;
}

/* ---------- personal pronoun paradigm ---------- */
const CASES = [["subj", "Subjective", "Subj."], ["obj", "Objective", "Obj."], ["det", "Possessive determiner", "Poss. det."], ["pos", "Possessive pronoun", "Poss. pron."], ["refl", "Reflexive / intensive", "Refl."]];
const ROWS = [
  { id: "1s", p: "1st", n: "singular", g: "", f: ["I", "me", "my", "mine", "myself"] },
  { id: "2s", p: "2nd", n: "singular", g: "", f: ["you", "you", "your", "yours", "yourself"] },
  { id: "3m", p: "3rd", n: "singular", g: "masculine", f: ["he", "him", "his", "his", "himself"], ante: "Laurie" },
  { id: "3f", p: "3rd", n: "singular", g: "feminine", f: ["she", "her", "her", "hers", "herself"], ante: "Meg" },
  { id: "3n", p: "3rd", n: "singular", g: "neuter", f: ["it", "it", "its", "(its)", "itself"], ante: "The kitten" },
  { id: "3t", p: "3rd", n: "singular", g: "singular they", f: ["they", "them", "their", "theirs", "themselves"], ante: "The new student" },
  { id: "1p", p: "1st", n: "plural", g: "", f: ["we", "us", "our", "ours", "ourselves"] },
  { id: "2p", p: "2nd", n: "plural", g: "", f: ["you", "you", "your", "yours", "yourselves"] },
  { id: "3p", p: "3rd", n: "plural", g: "", f: ["they", "them", "their", "theirs", "themselves"], ante: "The sisters", be: "were" }
];
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const rowLabel = r => r.p + " " + (r.n === "singular" ? "sg" : "pl") + (r.g ? " " + ({ masculine: "m", feminine: "f", neuter: "n", "singular they": "they" })[r.g] : "");
const rowHTML = r => esc(r.p.replace(/\D/g, "") + " " + (r.n === "singular" ? "sg" : "pl")) + (r.g ? ` <small>${esc(({ masculine: "m", feminine: "f", neuter: "n", "singular they": "they" })[r.g])}</small>` : "");
// Sentence frame for a cell: [before, form, after]; the subject of a reflexive is the row's subjective form.
function frame(r, ci){
  const f = r.f[ci].replace(/[()]/g, ""), S = r.f[0];
  switch (ci) {
    case 0: return ["", cap(f), " came at last."];
    case 1: return ["Jo waited for ", f, "."];
    case 2: return ["", cap(f), " name was on the list."];
    case 3: return ["The last seat was ", f, "."];
    default: return [cap(S) + " saw ", f, " in the mirror."];
  }
}
const CELL_NOTE = {
  "2s.0": "You has the same form as subject and object, and in the singular and plural: only the reflexive (yourself / yourselves) shows the number.",
  "2s.1": "Objective you looks the same as subjective you. English lost the old singular thou / thee in everyday speech by about 1700.",
  "3f.1": "Her is both the objective case (Jo waited for her) and the possessive determiner (her name).",
  "3f.2": "Her is both the possessive determiner and the objective case. The possessive pronoun is hers, with no apostrophe.",
  "3m.2": "His is both the determiner (his name) and the independent possessive (the seat was his).",
  "3m.3": "His is both the determiner (his name) and the independent possessive (the seat was his).",
  "3n.2": "Its is the possessive and has no apostrophe. It’s always means it is or it has.",
  "3n.3": "Independent its is almost never used: speakers say the seat was the kitten’s, or rephrase.",
  "3t.0": "Singular they refers to one person whose gender is unknown or irrelevant, or who uses they. It takes a plural verb (they are) and is accepted by MLA, APA and Chicago style.",
  "3t.4": "With singular they the reflexive is usually themselves; themself is also used and APA style accepts it.",
  "1s.0": "I is the only pronoun written with a capital letter wherever it appears.",
  "1s.3": "Mine stands alone in place of a whole noun phrase (my seat). Possessive pronouns never take an apostrophe.",
  "1p.4": "Ourselves is plural; ourself survives only for the royal or editorial we."
};
const KINDS = [["personal", "Personal"], ["possessive", "Possessive"], ["reflexive", "Reflexive"], ["intensive", "Intensive"], ["demonstrative", "Demonstrative"], ["interrogative", "Interrogative"], ["relative", "Relative"], ["indefinite", "Indefinite"], ["reciprocal", "Reciprocal"]];
const QUIZ = [
  ["<b>Who</b> left the door open?", "interrogative", "It asks a question and stands for the unknown person."],
  ["The girl <b>who</b> won the prize is Amy.", "relative", "It opens a clause that describes girl, its antecedent, and is the subject of won."],
  ["<b>This</b> is the best day of the year.", "demonstrative", "It points to something and stands alone in place of a noun phrase."],
  ["<b>Somebody</b> took the last orange.", "indefinite", "It refers to a person without saying which one."],
  ["Meg and Jo helped <b>each other</b>.", "reciprocal", "Each one helped the other: a two-way relation."],
  ["Beth hurt <b>herself</b> on the stairs.", "reflexive", "It is the object of hurt and refers back to the subject, Beth. It cannot be dropped."],
  ["Amy <b>herself</b> painted the portrait.", "intensive", "It only emphasises Amy and can be removed: Amy painted the portrait."],
  ["The red umbrella is <b>mine</b>.", "possessive", "It stands alone in place of a noun phrase (my umbrella)."],
  ["Laurie sent <b>them</b> a letter.", "personal", "A personal pronoun, 3rd person plural, objective case (indirect object)."],
  ["<b>Which</b> of these books is yours?", "interrogative", "It asks the hearer to choose among a set."],
  ["The book <b>that</b> Jo wrote was burned.", "relative", "It opens a clause describing book and is the object of wrote."],
  ["<b>Everyone</b> brought a present.", "indefinite", "It refers to all members of a group without naming them; it takes a singular verb."],
  ["<b>Those</b> are Father’s boots.", "demonstrative", "It points to things and stands alone as the subject."],
  ["The sisters wrote to <b>one another</b> every week.", "reciprocal", "One another, like each other, expresses a mutual relation."],
  ["<b>We</b> have Father and Mother.", "personal", "A personal pronoun, 1st person plural, subjective case."],
  ["I made the cake <b>myself</b>.", "intensive", "It emphasises I, the subject, and the sentence still works without it."],
  ["<b>Nothing</b> could cheer her.", "indefinite", "It stands for “no thing” without naming one."],
  ["The scarf is <b>hers</b>, not <b>ours</b>.", "possessive", "Both stand alone and replace whole noun phrases (her scarf, our scarf)."]
];

function injectCss(){
  if (document.getElementById("css-eng-nouns")) return;
  const s = document.createElement("style"); s.id = "css-eng-nouns";
  s.textContent = `
.nn-wrap{padding:58px 20px 20px!important;display:grid;gap:14px;align-content:start}
.nn-wrap .c1{color:var(--amber)} .nn-wrap .c2{color:var(--cyan)} .nn-wrap .c3{color:var(--pink)} .nn-wrap .c4{color:var(--violet)} .nn-wrap .c5{color:var(--green)}
.nn-forms{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.nn-form{border:1px solid var(--line);border-radius:4px;background:rgba(0,0,0,.22);padding:8px 10px;min-width:0}
.nn-form .k{font:500 10px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.nn-form .w{font:400 clamp(19px,2.6vw,27px)/1.3 var(--math);overflow-wrap:anywhere;margin-top:3px}
.nn-form .w.none{color:var(--faint);font-size:15px;font-style:italic}
.nn-form .alt{font:12px/1.3 var(--sans);color:var(--muted);margin-top:2px}
.nn-mark{border-bottom:2px solid currentColor}
.nn-badges{display:flex;flex-wrap:wrap;gap:6px}
.nn-badges span{font:500 11px/1 var(--ui);letter-spacing:.08em;text-transform:uppercase;padding:5px 8px;border-radius:3px;border:1px solid var(--line-2);color:var(--muted)}
.nn-frame{font:400 17px/1.5 var(--math);color:var(--text)}
.nn-frame .sep{color:var(--faint);padding:0 .35em}
.nn-rules{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:4px 12px;font:12.5px/1.35 var(--sans)}
.nn-rules div{color:var(--faint);padding:3px 6px;border-left:2px solid transparent}
.nn-rules div i{font-family:var(--math);font-size:13px}
.nn-rules div.on{color:var(--text);border-left-color:var(--pink);background:rgba(240,124,160,.1)}
.nn-grid{display:grid;grid-template-columns:auto repeat(5,minmax(0,1fr));gap:3px;font:400 15px/1.2 var(--math)}
.nn-grid .h{font:500 10px/1.2 var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--faint);padding:4px 3px;align-self:end}
.nn-grid .h.c2{color:var(--cyan)} .nn-grid .h.c4{color:var(--violet)}
.nn-grid .r{font:500 11px/1.2 var(--mono);color:var(--muted);padding:6px 6px 6px 0;white-space:nowrap;align-self:center}
.nn-grid .r small{font-size:inherit;color:var(--faint)}
.nn-wrap .nn-ro5{color:var(--green)}
.nn-grid button{font:inherit;text-align:left;padding:6px 6px;border-radius:3px;border:1px solid var(--line);background:rgba(0,0,0,.2);cursor:pointer;min-width:0;overflow-wrap:anywhere}
.nn-grid button:hover{border-color:var(--line-2)}
.nn-grid button.dim{opacity:.55}
.nn-grid button.sel{border-color:currentColor;background:rgba(255,255,255,.08);box-shadow:0 0 0 1px currentColor}
.nn-sent{position:relative;font:400 clamp(19px,2.4vw,24px)/1.5 var(--math);padding:26px 4px 6px;min-height:56px}
.nn-sent .ante{color:var(--green);border-bottom:2px solid var(--green)}
.nn-sent .pro{color:var(--cyan);border-bottom:2px solid var(--cyan)}
.nn-sent .pro.c4{color:var(--violet);border-bottom-color:var(--violet)}
.nn-sent svg{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.nn-sent .deix{display:block;font:12px/1.4 var(--sans);color:var(--faint);margin-top:6px}
.nn-q{font:400 clamp(20px,2.6vw,26px)/1.5 var(--math)}
.nn-q b{color:var(--cyan);border-bottom:2px solid var(--cyan);font-weight:600}
@media (max-width:520px){ .nn-wrap{padding:54px 12px 14px!important} .nn-grid{font-size:13px;gap:2px} .nn-grid .h{font-size:8.5px;letter-spacing:.03em;padding:3px 1px} .nn-grid .r{font-size:9.5px;padding-right:3px;white-space:normal;width:30px} .nn-grid .r small{display:block} .nn-grid{font-size:12.5px} .nn-sent{font-size:18px;padding-top:22px} .nn-grid button{padding:5px 3px} .nn-rules{font-size:11.5px;gap:2px 8px} .nn-rules div i{font-size:12px} }`;
  document.head.appendChild(s);
}

L["eng-nouns-pronouns"] = k => {
  injectCss();
  const dom = k.dom(); dom.classList.add("nn-wrap");
  const NOUNS = [["girl", "girl (regular)"], ["church", "church (-es)"], ["city", "city (-ies)"], ["day", "day (vowel + y)"], ["wife", "wife (-ves)"], ["roof", "roof (-f + s)"], ["hero", "hero (-oes)"], ["piano", "piano (-o + s)"],
    ["man", "man (vowel change)"], ["child", "child (-ren)"], ["mouse", "mouse (mice)"], ["sheep", "sheep (zero)"], ["criterion", "criterion (Greek)"], ["cactus", "cactus (Latin)"], ["analysis", "analysis (-is → -es)"],
    ["mother-in-law", "mother-in-law (compound)"], ["toothbrush", "toothbrush (compound)"], ["passer-by", "passer-by (compound)"], ["family", "family (collective)"], ["advice", "advice (noncount)"], ["information", "information (noncount)"],
    ["scissors", "scissors (plural only)"], ["Jones", "Jones (name)"], ["Kennedy", "Kennedy (name)"], ["James", "James (name in s)"]];
  let mode = "nouns", noun = "wife", typed = "", cell = { r: 3, c: 2 }, q = 0, ans = null, score = { right: 0, tries: 0 }, order = [];
  const shuffle = () => { order = QUIZ.map((_, i) => i); for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; } q = 0; };
  shuffle();
  let arc = null; // measured link from antecedent to pronoun (mode 2)

  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "nouns") {
      const sel = k.select("Noun", NOUNS, NOUNS.some(n => n[0] === noun) ? noun : "girl", v => { noun = v; typed = ""; inp.value = ""; draw(); });
      const w = document.createElement("div"); w.className = "ctl grow";
      w.innerHTML = `<label for="nn-type">or type one</label><input type="text" id="nn-type" maxlength="40" placeholder="e.g. leaf, quiz, Smith" autocomplete="off" spellcheck="false" style="width:100%;min-width:0">`;
      k.ctl.appendChild(w);
      const inp = w.querySelector("input"); inp.value = typed;
      inp.addEventListener("input", () => { typed = inp.value; draw(); });
    } else if (mode === "grid") {
      k.select("Person · number", ROWS.map((r, i) => [i, rowLabel(r) + (r.g ? " (" + r.g + ")" : "")]), cell.r, v => { cell.r = +v; draw(); });
      k.select("Case", CASES.map((c, i) => [i, c[1]]), cell.c, v => { cell.c = +v; draw(); });
    } else {
      k.button("Next sentence", () => { q = (q + 1) % order.length; if (q === 0) shuffle(); ans = null; draw(); });
      k.button("Reset score", () => { score = { right: 0, tries: 0 }; ans = null; shuffle(); draw(); }, "btn ghost");
    }
  }

  function drawNouns(){
    const src = typed.trim() ? typed : noun;
    const r = inflect(src);
    if (r.err) {
      dom.innerHTML = `<div class="pos-src">Noun inflector</div><div class="nn-form"><div class="k">Input</div><div class="w none">${esc(r.err)}</div></div>
        <div class="nn-rules">${RULES.map(x => `<div><b>${nw(x[1])}</b><br><i>${nw(x[2])}</i></div>`).join("")}</div>`;
      k.setRO(`<div><h2>Waiting for a noun</h2><div class="ro-big" style="margin-top:8px;color:var(--faint)">—</div></div>
        <div class="landmark"><div class="big">Type a singular noun</div><div class="note">${esc(r.err)}</div></div>
        <p class="narr">Try leaf, quiz, potato, stomach, fireman, man-of-war or Smith.</p>`);
      return;
    }
    const rule = RULES.find(x => x[0] === r.rule);
    const posHTML = p => p ? `<span class="c1">${esc(p[0])}</span><span class="c4 nn-mark">${esc(p[1])}</span>` : "";
    const none = t => `<div class="w none">${esc(t)}</div>`;
    const sgW = r.sg ? `<div class="w"><span class="c1">${esc(r.sg)}</span></div>` : none("no singular");
    const plW = r.pl ? `<div class="w">${markDiff(r.sg || r.pl, r.pl)}</div>${r.alt ? `<div class="alt">also ${esc(r.alt)}</div>` : ""}` : none("no plural");
    const the = r.rule === "proper" ? "" : "the ";
    let fr;
    if (r.rule === "noncount") fr = `some <span class="c1">${esc(r.sg)}</span><span class="sep">·</span>much <span class="c1">${esc(r.sg)}</span><span class="sep">·</span>${esc(r.unit)}<span class="sep">·</span>${the}${posHTML(r.sgPos)} value`;
    else if (r.only) fr = `these <span class="c1">${esc(r.pl)}</span>${r.unit ? `<span class="sep">·</span>${esc(r.unit)}` : ""}<span class="sep">·</span>the ${posHTML(r.plPos)} owner`;
    else if (r.rule === "proper") fr = `${esc(r.sg)}<span class="sep">·</span>the ${markDiff(r.sg, r.pl)}<span class="sep">·</span>${posHTML(r.sgPos)} house<span class="sep">·</span>the ${posHTML(r.plPos)} house`;
    else fr = `one <span class="c1">${esc(r.sg)}</span><span class="sep">·</span>two ${markDiff(r.sg, r.pl)}<span class="sep">·</span>the ${posHTML(r.sgPos)} name<span class="sep">·</span>the ${posHTML(r.plPos)} names`;
    dom.innerHTML = `<div class="pos-src">Noun inflector${r.from ? ` · <i>${esc(r.from)}</i> is a plural: showing its singular` : r.rule === "proper" ? " · capitalised, so treated as a name (type it in lower case for a common noun)" : ""}</div>
      <div class="nn-forms">
        <div class="nn-form"><div class="k">Singular</div>${sgW}</div>
        <div class="nn-form"><div class="k">Plural</div>${plW}</div>
        <div class="nn-form"><div class="k">Singular possessive</div>${r.sgPos ? `<div class="w">${posHTML(r.sgPos)}</div>` : none("—")}</div>
        <div class="nn-form"><div class="k">Plural possessive</div>${r.plPos ? `<div class="w">${posHTML(r.plPos)}</div>` : none("—")}</div>
      </div>
      <div class="nn-badges">${r.badges.map(b => `<span>${esc(b[1])}</span>`).join("")}</div>
      <div class="nn-frame">${fr}</div>
      <div class="nn-rules">${RULES.map(x => `<div class="${x[0] === r.rule ? "on" : ""}"><b>${nw(x[1])}</b><br><i>${nw(x[2])}</i></div>`).join("")}</div>`;
    const special = ["irreg", "zero", "foreign", "noncount", "only", "compound", "proper"].includes(r.rule) || !!r.alt;
    k.setRO(`<div><h2>Rule applied</h2><div class="ro-big" style="margin-top:8px;font-size:24px"><span class="c3">${esc(rule[1])}</span></div></div>
      <div class="ro-rows">
        ${r.pl ? `<div class="row"><span>Plural</span> <span class="v c3">${esc(r.pl)}${r.alt ? " / " + esc(r.alt) : ""}</span></div>` : ""}
        ${r.sgPos ? `<div class="row"><span>Singular possessive</span> <span class="v c4">${esc(r.sgPos.join(""))}</span><span class="lbl">${esc(r.sgPosNote)}</span></div>` : ""}
        ${r.plPos ? `<div class="row"><span>Plural possessive</span> <span class="v c4">${esc(r.plPos.join(""))}</span><span class="lbl">${esc(r.plPosNote)}</span></div>` : ""}
      </div>
      <div class="landmark${special ? " hit" : ""}"><div class="big">${esc(special ? (r.rule === "noncount" ? "No plural" : r.alt && !["irreg","zero","foreign","only","compound","proper"].includes(r.rule) ? "Two accepted plurals" : rule[1]) : "Regular spelling rule")}</div><div class="note">${esc(r.note)}</div></div>
      <p class="narr">The possessive is built on the finished plural: form the plural first, then add ’s, or just ’ after an s.</p>`);
  }

  function drawGrid(){
    const R = ROWS[cell.r], ci = cell.c, form = R.f[ci], fr = frame(R, ci), rare = form.startsWith("(");
    const colour = ci === 0 || ci === 4 ? "c2" : "c4";
    const ante = R.ante;
    const sent = `${ante ? `<span class="ante" data-a>${esc(ante)}</span> ${R.be || "was"} late. ` : ""}${esc(fr[0])}<span class="pro ${colour === "c4" ? "c4" : ""}" data-p>${esc(fr[1])}</span>${esc(fr[2])}${rare ? ` <span class="dim" style="font-size:.7em">(rare)</span>` : ""}`;
    dom.innerHTML = `<div class="pos-src">Personal pronouns · person × number × case</div>
      <div class="nn-sent" id="nn-sent">${sent}${ante ? "" : `<span class="deix">${R.p === "1st" ? "1st person points to the speaker" : "2nd person points to the listener"}: no antecedent is needed.</span>`}<svg aria-hidden="true"></svg></div>
      <div class="nn-grid" role="grid"><span></span>${CASES.map((c, i) => `<span class="h ${i === 0 || i === 4 ? "c2" : "c4"}">${esc(c[2])}</span>`).join("")}
      ${ROWS.map((r, ri) => `<span class="r">${rowHTML(r)}</span>${r.f.map((f, i) => `<button type="button" data-r="${ri}" data-c="${i}" class="${i === 0 || i === 4 ? "c2" : "c4"}${f.startsWith("(") ? " dim" : ""}${ri === cell.r && i === ci ? " sel" : ""}" aria-label="${esc(rowLabel(r) + " " + CASES[i][1] + ": " + f)}">${esc(f).replace(/(self|selves)$/, "<wbr>$1")}</button>`).join("")}`).join("")}
      </div>`;
    dom.querySelectorAll(".nn-grid button").forEach(b => b.onclick = () => { cell = { r: +b.dataset.r, c: +b.dataset.c }; controls(); draw(); });
    arc = ante ? { key: "" } : null;
    const note = CELL_NOTE[R.id + "." + ci] || (ci === 4 ? "As a reflexive it is an object that refers back to the subject; the same form as an intensive adds emphasis: " + (R.ante || cap(R.f[0])) + " " + R.f[4] + " came." : ci === 2 ? "A possessive determiner comes before a noun, in the slot of an article: " + R.f[2] + " name." : ci === 3 ? "A possessive pronoun stands alone in place of a whole noun phrase: " + R.f[3] + " = " + R.f[2] + " seat." : ci === 1 ? "The objective case is used for objects of verbs and prepositions." : "The subjective case is used for the subject of a finite verb.");
    k.setRO(`<div><h2>${esc(CASES[ci][1])}</h2><div class="ro-big" style="margin-top:8px"><span class="${colour}">${esc(form)}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span>Person</span> <span class="v">${esc(R.p)}</span></div>
        <div class="row"><span>Number</span> <span class="v">${esc(R.n)}</span></div>
        ${R.g ? `<div class="row"><span>Gender</span> <span class="v">${esc(R.g)}</span></div>` : ""}
        <div class="row"><span>Antecedent</span> <span class="v c5">${ante ? esc(ante) : "none (deictic)"}</span></div>
      </div>
      <div class="landmark${CELL_NOTE[R.id + "." + ci] ? " hit" : ""}"><div class="big">${ante ? `<span class="c5">${esc(ante)}</span> ${R.be || "was"} late. ` : ""}${esc(fr[0])}<span class="${colour}">${esc(fr[1])}</span>${esc(fr[2])}</div><div class="note">${esc(note)}</div></div>
      <p class="narr">Cyan columns are the subject-related forms, violet the object and possessive forms. Click any cell.</p>`);
  }

  function drawQuiz(){
    const [s, truth, why] = QUIZ[order[q]];
    dom.innerHTML = `<div class="pos-src">Which kind of pronoun? · ${q + 1} of ${QUIZ.length}</div><div class="nn-q">${s}</div>
      <div class="pos-quiz">${KINDS.map(([kk, t]) => `<button type="button" data-t="${kk}" class="${ans ? (kk === truth ? "right" : kk === ans ? "wrong" : "") : ""}">${esc(t)}</button>`).join("")}</div>`;
    dom.querySelectorAll(".pos-quiz button").forEach(b => b.onclick = () => { if (ans) return; ans = b.dataset.t; score.tries++; if (ans === truth) score.right++; draw(); });
    const name = KINDS.find(x => x[0] === truth)[1];
    k.setRO(`<div><h2>Score</h2><div class="ro-big" style="margin-top:8px"><span class="num c5">${score.right}</span> / <span class="num">${score.tries}</span></div></div>
      ${ans ? `<div class="landmark hit"><div class="big">${ans === truth ? "Right" : "Not quite"}: <span class="c2">${esc(name)}</span></div><div class="note">${esc(why)}</div></div>`
        : `<div class="landmark"><div class="big">Classify the pronoun in bold</div><div class="note">Ask what it does: asks (interrogative), points (demonstrative), opens a describing clause (relative), refers back to the subject (reflexive) or only emphasises it (intensive).</div></div>`}
      <p class="narr">${ans ? "Press Next sentence for another." : "Reflexive or intensive? Delete the -self word: if the sentence still works, it was intensive."}</p>`);
  }

  function draw(){ if (mode === "nouns") drawNouns(); else if (mode === "grid") drawGrid(); else drawQuiz(); }

  // Antecedent link: an arc from the antecedent to the pronoun, re-measured when the layout changes.
  k.loop(() => {
    const pt = Math.round(md.offsetHeight + 24) + "px"; if (md.offsetHeight && dom.style.paddingTop !== pt) dom.style.setProperty("padding-top", pt, "important");
    if (mode !== "grid" || !arc) return;
    const box = dom.querySelector("#nn-sent"); if (!box) return;
    const a = box.querySelector("[data-a]"), p = box.querySelector("[data-p]"), sv = box.querySelector("svg"); if (!a || !p || !sv) return;
    const B = box.getBoundingClientRect(), A = a.getBoundingClientRect(), P = p.getBoundingClientRect();
    const x1 = A.left - B.left + A.width / 2, y1 = A.top - B.top - 2, x2 = P.left - B.left + P.width / 2, y2 = P.top - B.top - 2;
    const key = [B.width, x1, y1, x2, y2].map(Math.round).join(",");
    if (key === arc.key) return; arc.key = key;
    const top = Math.max(2, Math.min(y1, y2) - 20);
    const same = Math.abs(y1 - y2) < 4;
    const d = same ? `M${x1} ${y1} C${x1} ${top} ${x2} ${top} ${x2} ${y2}` : `M${x1} ${y1} C${x1} ${y1 - 18} ${x2} ${y2 - 30} ${x2} ${y2}`;
    sv.innerHTML = `<path d="${d}" fill="none" stroke="${k.C.green}" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M${x2 - 4} ${y2 - 7} L${x2} ${y2} L${x2 + 4} ${y2 - 7}" fill="none" stroke="${k.C.green}" stroke-width="1.6"/>`;
  });

  const md = k.modes([["nouns", "Plurals & possessives"], ["grid", "Pronoun grid"], ["quiz", "Pronoun types"]], mode, m => { mode = m; ans = null; controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
};
})();
