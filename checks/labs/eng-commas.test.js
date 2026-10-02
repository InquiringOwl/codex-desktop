module.exports = ({ logic: L, test, eq }) => {
  // ---- shared join engine (also used by eng-fragments and eng-punctuation) ----
  const ic = t => ({ t, k: "ic" });
  const A = ic("the fog was thick"), B = ic("the boats stayed in");
  const J = j => L.join(A, j, B, "result");
  eq("period between clauses", [J("period").ok, L.render(A, "period", B)], [true, "The fog was thick. The boats stayed in."]);
  eq("comma splice", [J("comma").kind, L.render(A, "comma", B)], ["splice", "The fog was thick, the boats stayed in."]);
  eq("fused", J("none").kind, "fused");
  eq("semicolon", J("semi").ok, true);
  eq("comma + so", [J("cc:so").ok, L.render(A, "cc:so", B)], [true, "The fog was thick, so the boats stayed in."]);
  eq("; therefore,", [J("adv:therefore").ok, L.render(A, "adv:therefore", B)], [true, "The fog was thick; therefore, the boats stayed in."]);
  eq(", however, is a splice", J("advc:however").kind, "splice");
  eq("colon needs an explaining clause", [J("colon").ok, L.join(A, "colon", B, "explain").ok], [false, true]);
  eq("dash between clauses: informal but correct", J("dash").ok, true);
  const list = { t: "a lamp, a map, and a knife", k: "list" }, np = { t: "money", k: "np" }, open = { t: "the kit included", k: "ic", open: true };
  eq("list after clause: colon, dash ok; comma, semicolon, period, none not", ["colon", "dash", "comma", "semi", "period", "none"].map(j => L.join(ic("she packed three things"), j, list).ok), [true, true, false, false, false, false]);
  eq("appositive: colon, dash, comma ok", ["colon", "dash", "comma", "semi", "period", "none"].map(j => L.join(ic("he loved one thing"), j, np).ok), [true, true, true, false, false, false]);
  eq("after a verb: no mark only", ["colon", "dash", "comma", "semi", "period", "none"].map(j => L.join(open, j, list).ok), [false, false, false, false, false, true]);
  const dcLead = { t: "because the fog was thick", k: "dc" }, dcEss = { t: "because the fog was thick", k: "dc", comma: false }, dcNon = { t: "although the fog was thick", k: "dc", comma: true };
  eq("introductory clause: comma yes, none no", [L.join(dcLead, "comma", B).ok, L.join(dcLead, "none", B).ok], [true, false]);
  eq("closing essential clause: no comma", [L.join(B, "none", dcEss).ok, L.join(B, "comma", dcEss).ok], [true, false]);
  eq("closing nonessential clause: comma", [L.join(B, "comma", dcNon).ok, L.join(B, "none", dcNon).ok], [true, false]);
  eq("compound predicate: no comma", [L.join(ic("Huck slipped out"), "none", { t: "and climbed down", k: "pred" }).ok, L.join(ic("Huck slipped out"), "comma", { t: "and climbed down", k: "pred" }).ok], [true, false]);
  eq("period after a fragment stays a fragment", L.join(B, "period", dcEss).kind, "fragment");
  test("every CC and ADV has a relation", Object.values(L.CC).concat(Object.values(L.ADV)).every(Boolean));

  // ---- comma placer: every sentence, every style ----
  const styles = L.STYLES.map(s => s[0]);
  test("19 sentences", L.SENT.length === 19);
  L.SENT.forEach((it, i) => {
    const p = L.parse(it.src), n = `sentence ${i} (${it.label})`;
    test(`${n}: label short`, it.label.length <= 36);
    test(`${n}: has gaps`, p.words.length > 2);
    Object.values(p.commas).forEach(c => test(`${n}: rule ${c.code} known`, !!L.RULES[c.code]));
    Object.values(p.misuse).forEach(m => test(`${n}: misuse ${m} known`, !!L.MISUSE[m]));
    Object.keys(p.commas).forEach(g => test(`${n}: comma and misuse do not share gap ${g}`, !(g in p.misuse)));
    test(`${n}: ends with end punctuation`, /[.?!][”’]?$/.test(p.words[p.words.length - 1]));
    styles.forEach(st => {
      const ans = L.answer(it, st), r = L.check(it, ans, st);
      test(`${n} [${st}]: answer passes`, r.ok && r.wrong === 0 && r.missing === 0);
      // every single-gap change from the answer
      for (let g = 0; g < p.words.length - 1; g++) {
        const s = new Set(ans); s.has(g) ? s.delete(g) : s.add(g);
        const r2 = L.check(it, s, st), ex = L.expect(p.commas[g], st);
        const want = ex === "opt" ? true : false;
        if (r2.ok !== want) test(`${n} [${st}] toggling gap ${g}`, false, `expected ok=${want}`);
        if (!r2.ok) test(`${n} [${st}] gap ${g} explained`, !!r2.gaps[g].why);
      }
      const none = L.check(it, new Set(), st);
      test(`${n} [${st}]: no commas is right only if none required`, none.ok === Object.values(p.commas).every(c => L.expect(c, st) !== "req"));
    });
    test(`${n}: corrected text spacing`, !/ ,|,,| ”|“ /.test(L.text(it, L.answer(it, "cmos"))));
  });
  const T = (i, st) => L.text(L.SENT[i], L.answer(L.SENT[i], st));
  eq("serial comma, Chicago", T(3, "cmos"), "Meg, Jo, Beth, and Amy sat by the fire.");
  eq("serial comma, AP", T(3, "ap"), "Meg, Jo, Beth and Amy sat by the fire.");
  eq("both accepted in either style", [L.check(L.SENT[3], L.answer(L.SENT[3], "cmos"), "either").ok, L.check(L.SENT[3], L.answer(L.SENT[3], "ap"), "either").ok], [true, true]);
  eq("AP rejects the simple serial comma", L.check(L.SENT[3], L.answer(L.SENT[3], "cmos"), "ap").wrong, 1);
  eq("Chicago requires it", L.check(L.SENT[3], L.answer(L.SENT[3], "ap"), "cmos").missing, 1);
  eq("AP keeps it for clarity", T(4, "ap"), "Breakfast was tea, toast, and bread and butter.");
  eq("quotation comma inside the mark", T(13, "cmos"), "“Come in, Bob,” said the old man.");
  eq("restrictive clause: no commas", T(7, "cmos"), "The man who signed the register was Scrooge.");
  eq("date", T(15, "cmos"), "On July 4, 1776, Congress approved the Declaration.");
  eq("place", T(16, "cmos"), "Douglass was born in Talbot County, Maryland, in 1818.");
  eq("subject-verb comma explained", L.check(L.SENT[0], new Set([3, 5]), "cmos").gaps[5].why, L.MISUSE.sv);

  // ---- quiz ----
  const Q = L.questions();
  test("quiz has questions for commas and misuses", Q.length > 30 && Q.some(q => q.ans === 0));
  Q.forEach((q, j) => test(`question ${j} answer is a button`, L.RULE_BTNS.some(b => b[0] === q.ans)));
  test("every rule number 1–8 is asked", [1, 2, 3, 4, 5, 6, 7, 8].every(n => Q.some(q => q.ans === n)));
};
