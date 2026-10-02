module.exports = ({ logic, test, eq }) => {
  const W = t => logic.who.find(x => x.label.startsWith(t)), C = t => logic.caseItems.find(x => x.label.startsWith(t));
  // who / whom: every item
  const whoWant = ["whoever", "whom", "who", "whom", "whom", "whomever", "who", "whom", "who", "whom"];
  logic.who.forEach((it, i) => {
    eq(`who item ${i} answer`, logic.whoAnswer(it), whoWant[i]);
    test(`who item ${i} sentence has one gap`, it.s.split("___").length === 2 && it.clause.includes("___"));
    test(`who item ${i} test has one slot`, it.test.filter(x => x === "_").length === 1);
    test(`who item ${i} label short`, it.label.length <= 36, it.label);
    test(`who item ${i} explains`, it.why.length > 40);
  });
  eq("statement-order test, subject", logic.whoTest(W("The student"), "subjective"), "I think he deserves the award");
  eq("statement-order test, object", logic.whoTest(W("___ should"), "objective"), "I should ask him about the deadline");
  eq("statement-order test, stranded preposition", logic.whoTest(W("I wonder"), "objective"), "the letter was from him");
  eq("fill capitalises at start", logic.fill("___ should I ask?", "whom"), "Whom should I ask?");

  // case chooser: every item
  const caseWant = ["me", "I", "him", "We", "us", "I", "me", "her", "me", "his", "she"];
  logic.caseItems.forEach((it, i) => {
    eq(`case item ${i} answer`, logic.caseAnswer(it), caseWant[i]);
    test(`case item ${i} answer is an option`, it.opts.includes(logic.caseAnswer(it)));
    test(`case item ${i} label short`, it.label.length <= 36, it.label);
  });
  eq("case test line", logic.fill(C("Jamal").test, "I"), "I finished the project.");
  eq("comparison test line", logic.fill(C("My brother").test, "I"), "My brother is taller than I am.");
  eq("object comparison", logic.fill(C("Ana").test, "me"), "Ana trusts Leo more than she trusts me.");
  eq("possessive before gerund", logic.form("he", "gen"), "his");
  eq("case of subject complement", logic.caseOf("subjComp"), "subjective");

  // reference: every pronoun in every item
  const verdicts = {
    0: ["clear", "ambiguous"], 1: ["ambiguous"], 2: ["clear"], 3: ["clear"], 4: ["broad"], 5: ["vague"], 6: ["ambiguous"],
    7: ["clear", "clear"], 8: ["vague"], 9: ["ambiguous"], 10: ["broad"]
  };
  logic.ref.forEach((it, i) => {
    const W = logic.parseRef(it.t), ps = logic.pronouns(it.t);
    eq(`ref item ${i} verdicts`, ps.map(p => logic.analyse(it.t, p).verdict), verdicts[i]);
    ps.forEach(p => {
      const a = logic.analyse(it.t, p), ref = W[p].ref;
      if (a.verdict === "clear") eq(`ref item ${i} "${W[p].w}" links to intended noun`, W[a.target].w.toLowerCase(), ref.toLowerCase());
      if (a.verdict !== "clear" && W[p].w !== "her") test(`ref item ${i} offers a rewrite`, it.fix.length > 10);
    });
    test(`ref item ${i} label short`, it.label.length <= 36, it.label);
    test(`ref item ${i} every annotation parsed`, !W.some(x => x.w.includes("/")));
  });
  const a0 = logic.analyse(logic.ref[0].t, logic.pronouns(logic.ref[0].t)[1]);
  eq("Maria/sister both candidates for she", a0.cands.length, 2);
  test("singular they flagged", logic.analyse(logic.ref[2].t, logic.pronouns(logic.ref[2].t)[0]).sgThey);
  test("plural they not flagged as singular", !logic.analyse(logic.ref[7].t, logic.pronouns(logic.ref[7].t)[1]).sgThey);
  test("he agrees with person of unstated gender", logic.analyse(logic.ref[1].t, logic.pronouns(logic.ref[1].t)[0]).cands.length === 2);
  test("it does not agree with a person", logic.analyse(logic.ref[8].t, logic.pronouns(logic.ref[8].t)[0]).cands.length === 0);
};
