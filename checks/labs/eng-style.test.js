module.exports = ({ logic, test, eq }) => {
  eq("count words", logic.count("MARLEY was dead: to begin with."), 6);
  eq("count ignores punctuation tokens", logic.count("one — two , three"), 3);
  eq("sentences split", logic.sentences("A b. C d! E f?").length, 3);
  const want = [
    "Because the meeting ran long, we decided to postpone the vote.",
    "The outcome of the experiment was successful.",
    "The committee must investigate the complaints.",
    "The new policy will affect every employee.",
    "The university is revising its policies.",
    "History shows that the result of open debate is usually a better decision.",
    "The committee concluded that the proposal needed further revision.",
    "Many students struggle with statistics in their first year."
  ];
  logic.items.forEach((it, i) => {
    eq(`item ${i}: full revision`, logic.full(it), want[i]);
    const C = logic.cuts(it), base = logic.count(logic.revise(it, new Set()));
    test(`item ${i}: has cuts`, C.length >= 2);
    test(`item ${i}: cut types known`, C.every(j => logic.TYPES[it.segs[j][1]]));
    test(`item ${i}: label short`, it.label.length <= 36, it.label);
    // every combination of cuts the reader can toggle
    for (let mask = 0; mask < 1 << C.length; mask++) {
      const on = new Set(C.filter((_, b) => mask & 1 << b)), s = logic.revise(it, on);
      test(`item ${i} combo ${mask}: capital, full stop, single spaces`, /^[A-Z]/.test(s) && /\.$/.test(s) && !/\s{2}|\s[,.]/.test(s), s);
      test(`item ${i} combo ${mask}: never longer than the original`, logic.count(s) <= base, s);
      C.forEach(j => { if (!on.has(j)) { const more = new Set(on); more.add(j); test(`item ${i} combo ${mask}+${j}: each cut shortens`, logic.count(logic.revise(it, more)) < logic.count(s)); } });
    }
  });
  eq("Gettysburg lengths", logic.lengths(logic.passages[0]), [10, 27, 11]);
  eq("Christmas Carol lengths", logic.lengths(logic.passages[1]), [6, 7]);
  eq("uniform paragraph lengths", logic.lengths(logic.passages[2]), [19, 17, 18, 18, 17]);
  eq("revised paragraph lengths", logic.lengths(logic.passages[3]), [5, 7, 27, 5]);
  eq("stats", logic.stats([10, 27, 11]), { n: 3, mean: 16, min: 10, max: 27, range: 17, sd: 7.8 });
  test("uniform paragraph has a small range", logic.stats(logic.lengths(logic.passages[2])).range <= 3);
  test("revision has a wide range", logic.stats(logic.lengths(logic.passages[3])).range >= 15);
  logic.passages.forEach((p, i) => test(`passage ${i} label short`, p.label.length <= 36));
  logic.quiz.forEach((q, i) => {
    test(`quiz ${i}: answer is a kind`, logic.kinds.some(k => k[0] === q.a));
    test(`quiz ${i}: cut items give a fix`, q.a === "ok" ? q.fix === "" : q.fix.length > 5 && logic.count(q.fix) < logic.count(q.s.replace(/<[^>]+>/g, "")));
  });
};
