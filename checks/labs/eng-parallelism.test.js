module.exports = ({ logic, test, eq }) => {
  const want = [
    "I like hiking, swimming, and riding my bike.",
    "The job requires patience, attention to detail, and the ability to lift 50 pounds.",
    "She plays not only the piano but also the violin.",
    "The report was thorough, accurate, and punctual.",
    "We either leave now or miss the train.",
    "Writing a novel is harder than writing a short story.",
    "The candidate promised to lower taxes, improve schools, and fix the roads.",
    "Duties: Managed a team; Planned budgets; Trained new hires.",
    "We were taught to read critically, to write clearly, and to cite sources.",
    "The coach said that they had trained hard and that they deserved a rest."
  ];
  logic.items.forEach((it, i) => {
    test(`item ${i}: faulty version is not parallel`, !logic.parallel(it.bad));
    test(`item ${i}: exactly one rewrite is parallel`, it.opts.filter((_, j) => logic.parallel(logic.option(it, j))).length === 1);
    test(`item ${i}: the answer is the parallel rewrite`, logic.parallel(logic.option(it, it.ans)));
    test(`item ${i}: the original is one of the options`, it.opts.includes("bad"));
    eq(`item ${i}: fixed sentence`, logic.fill(logic.option(it, it.ans)), want[i]);
    it.opts.forEach((_, j) => { const v = logic.option(it, j), s = logic.fill(v);
      test(`item ${i} option ${j}: every slot filled`, (v.frame.match(/_/g) || []).length === v.m.length && !s.includes("_"));
      test(`item ${i} option ${j}: forms known`, v.m.every(x => logic.FORMS[x[1]]));
      test(`item ${i} option ${j}: sentence punctuation`, /^[A-Z].*[.]$/.test(s)); });
    test(`item ${i}: a mismatched member is found`, logic.odd(it.bad).length >= 1 && logic.odd(it.bad).length < it.bad.m.length);
    test(`item ${i}: label short`, it.label.length <= 36, it.label);
    test(`item ${i}: explains`, it.why.length > 40);
    if (it.corr) it.corr.forEach(w => test(`item ${i}: correlative "${w}" in faulty sentence`, logic.fill(it.bad).toLowerCase().includes(w)));
  });
  eq("odd member: infinitive among gerunds", logic.odd(logic.items[0].bad), [2]);
  eq("majority form", logic.majority(logic.items[0].bad), "ger");
  const dev = { 0: ["anaphora", "antithesis", "isocolon"], 1: ["anaphora", "tricolon"], 2: ["anaphora", "tricolon"], 3: ["anaphora", "epistrophe", "antithesis", "isocolon"], 4: ["anaphora", "tricolon", "isocolon"] };
  logic.patterns.forEach((p, i) => {
    eq(`pattern ${i} devices`, logic.devices(p), dev[i]);
    test(`pattern ${i}: rows have equal cells`, p.rows.every(r => r.length === p.rows[0].length));
    test(`pattern ${i}: label short`, p.label.length <= 36, p.label);
  });
  eq("Dickens members all six words", logic.lengths(logic.patterns[0]), [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
  eq("with-phrases 4, 4, 5", logic.lengths(logic.patterns[1]), [4, 4, 5]);
};
