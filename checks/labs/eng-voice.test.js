module.exports = ({ logic, test, eq }) => {
  const I = logic.items, T = t => logic.items.find(x => x.label.startsWith(t));
  const P = (it, t, v, o) => logic.text(logic.build(it, t, v, o));
  // known forms
  eq("active present", P(T("The chef"), "present", "active"), "The chef prepares the soup.");
  eq("passive present", P(T("The chef"), "present", "passive"), "The soup is prepared by the chef.");
  eq("passive past, irregular", P(T("A dog"), "past", "passive"), "The mail carrier was bitten by a dog.");
  eq("pronoun object becomes I", P(T("The committee"), "present", "passive"), "I am chosen by the committee.");
  eq("pronoun past", P(T("The committee"), "past", "passive"), "I was chosen by the committee.");
  eq("plural, adverbial before by-phrase", P(T("The nurses"), "presPerf", "passive"), "Blood samples have been taken from each patient by the nurses.");
  eq("agent pronoun takes object case", P(T("She sings"), "past", "passive"), "The anthem was sung by her.");
  eq("present progressive passive", P(T("She sings"), "presProg", "passive"), "The anthem is being sung by her.");
  eq("past progressive passive, plural", P(T("The storm"), "pastProg", "passive"), "Two windows were being broken by the storm.");
  eq("future passive", P(T("The auditors"), "future", "passive"), "An error will be found in the report by the auditors.");
  eq("future perfect passive", P(T("The chef"), "futPerf", "passive"), "The soup will have been prepared by the chef.");
  eq("past perfect passive", P(T("A dog"), "pastPerf", "passive"), "The mail carrier had been bitten by a dog.");
  eq("modal passive", P(T("The nurses"), "must", "passive"), "Blood samples must be taken from each patient by the nurses.");
  eq("agentless", P(T("Someone"), "past", "passive", { agent: false }), "My bike was stolen.");
  eq("get-passive past", P(T("Someone"), "past", "get", { agent: false }), "My bike got stolen.");
  eq("get-passive perfect (US gotten)", P(T("The committee"), "presPerf", "get"), "I have gotten chosen by the committee.");
  eq("active progressive, 3sg", P(T("The chef"), "presProg", "active"), "The chef is preparing the soup.");
  eq("active progressive, plural", P(T("The nurses"), "pastProg", "active"), "The nurses were taking blood samples from each patient.");
  eq("active perfect", P(T("The storm"), "presPerf", "active"), "The storm has broken two windows.");
  eq("intransitive active", P(T("The guests"), "past", "active"), "The guests arrived early.");
  eq("linking active", P(T("The soup tastes"), "present", "active"), "The soup tastes salty.");
  test("intransitive has no passive", logic.build(T("The guests"), "past", "passive") === null);
  test("middle verb has no passive", logic.build(T("The hall"), "present", "passive") === null);
  test("linking verb has no passive", logic.build(T("The soup tastes"), "present", "passive") === null);
  test("blocked items explain why", I.filter(x => x.block).every(x => logic.why(x).length > 20));
  test("stative verbs offer no progressive", !logic.tenses(T("The hall")).includes("presProg"));
  eq("passive() helper", logic.passive(T("A dog"), "past").text, "The mail carrier was bitten by a dog.");
  eq("active() helper", logic.active(T("A dog"), "past").text, "A dog bit the mail carrier.");
  eq("formula", logic.formula("presProg", "passive"), "be + being + V-en");
  // every combination the lab offers
  const BE = /\b(am|is|are|was|were|be|being|been|get|gets|got|getting|gotten)\b/;
  I.forEach((it, i) => logic.tenses(it).forEach(t => ["active", "passive", "get"].forEach(v => [true, false].forEach(ag => {
    const parts = logic.build(it, t, v, { agent: ag }), name = `item ${i} ${t} ${v} agent=${ag}`;
    if (v !== "active" && !logic.canPassive(it)) { test(name + " blocked", parts === null); return; }
    const s = logic.text(parts);
    test(name + " well-formed", /^[A-Z][a-z ]*[a-zA-Z0-9 ]*\.$/.test(s) && !/  /.test(s), s);
    test(name + " one main verb", parts.filter(p => p[1] === "verb").length === 1, s);
    if (v !== "active") {
      const vi = parts.findIndex(p => p[1] === "verb"), bi = parts.findIndex(p => p[1] === "be");
      test(name + " be/get then participle", bi >= 0 && bi === vi - 1 && parts[vi][0] === logic.forms.pp(it.verb) && BE.test(parts[bi][0]), s);
      test(name + " subject is old object", s.toLowerCase().startsWith(it.patient.nom.toLowerCase()), s);
      test(name + " by-phrase only when kept", ag === / by /.test(s), s);
      test(name + " agent in object case", !ag || s.endsWith("by " + it.agent.acc + "."), s);
    }
  }))));
  // spot quiz
  const keys = logic.kinds.map(k => k[0]);
  logic.spot.forEach((q, i) => { test(`spot ${i} answer is an option`, keys.includes(q.a)); test(`spot ${i} explained`, q.why.length > 20); });
  keys.forEach(k => test(`spot has a ${k} item`, logic.spot.some(q => q.a === k)));
};
