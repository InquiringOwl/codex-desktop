module.exports = ({ logic: L, test, eq }) => {
  const marks = L.MARKS.map(m => m[0]);
  // expected correct marks for each pair, written out independently of the engine
  const WANT = [
    ["colon", "dash", "comma"],           // appositive: money
    ["colon", "dash"],                    // list after a complete clause
    ["semi", "colon", "dash", "period"],  // second clause explains the first
    ["semi", "dash", "period"],           // contrast: no colon
    ["none"],                             // list after a verb: no mark
    ["semi", "colon", "dash", "period"]   // explains
  ];
  test("six pairs", L.PAIRS.length === WANT.length);
  L.PAIRS.forEach((p, i) => {
    eq(`pair ${i} (${p.label}): correct marks`, L.correctMarks(p), WANT[i]);
    test(`pair ${i}: label short`, p.label.length <= 36);
    marks.forEach(m => {
      const r = L.chooseMark(p, m);
      test(`pair ${i} ${m}: explained`, !!r.why);
      test(`pair ${i} ${m}: effect only when correct`, r.ok ? !!r.effect : r.effect === "");
      test(`pair ${i} ${m}: clean text`, /^[A-Z]/.test(r.text) && /\.$/.test(r.text) && !/  | [,;:.]/.test(r.text), r.text);
    });
  });
  eq("colon text", L.chooseMark(L.PAIRS[1], "colon").text, "Jo packed three things: a pen, a notebook, and an apple.");
  eq("dash text", L.chooseMark(L.PAIRS[0], "dash").text, "Scrooge loved one thing—money.");
  eq("splice named", L.chooseMark(L.PAIRS[2], "comma").kind, "splice");
  eq("colon after verb named", L.chooseMark(L.PAIRS[4], "colon").ok, false);
  // apostrophes, both styles
  const P = (w, st) => L.possessive(L.NOUNS.find(n => n.w === w), st).form;
  const want = { dog: ["dog’s", "dog’s"], boss: ["boss’s", "boss’s"], James: ["James’s", "James’"], Dickens: ["Dickens’s", "Dickens’"], dogs: ["dogs’", "dogs’"],
    children: ["children’s", "children’s"], women: ["women’s", "women’s"], Joneses: ["Joneses’", "Joneses’"], "mother-in-law": ["mother-in-law’s", "mother-in-law’s"],
    "mothers-in-law": ["mothers-in-law’s", "mothers-in-law’s"], it: ["its", "its"], who: ["whose", "whose"] };
  L.NOUNS.forEach(n => {
    eq(`possessive of ${n.w} (Chicago, AP)`, [P(n.w, "cmos"), P(n.w, "ap")], want[n.w]);
    test(`${n.w}: rule given`, !!L.possessive(n, "cmos").rule && !!L.possessive(n, "ap").rule);
    test(`${n.w}: label short`, n.label.length <= 36);
  });
  test("joint possession on last name only", /^Lewis and Clark’s /.test(L.JOINT.joint) && /Lewis’s and Clark’s/.test(L.JOINT.each));
  // quiz
  L.QUIZ.forEach((q, i) => {
    test(`quiz ${i}: one blank`, q.q.split("___").length === 2);
    test(`quiz ${i}: answers among options`, q.ok.length && q.ok.every(o => q.opts.includes(o)));
    test(`quiz ${i}: explained`, !!q.why);
  });
  test("a quiz item with two right answers", L.QUIZ.some(q => q.ok.length > 1));
};
