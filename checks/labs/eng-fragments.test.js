module.exports = ({ logic: L, EngLab: E, test, eq }) => {
  const C = E.logic["eng-commas"];
  test("uses the shared engine", !!(C && C.join));
  const fixes = L.FIXES.map(f => f[0]);
  L.ITEMS.forEach(it => {
    const n = `${it.id}`;
    test(`${n}: label short`, it.label.length <= 36);
    const f = L.faulty(it);
    eq(`${n}: faulty version is the stated error`, f.v.kind, { splice: "splice", fused: "fused", frag: "fragment" }[it.type]);
    if (it.cc) test(`${n}: conjunction fits`, C.CC[it.cc] === it.rel || (it.cc === "and" && /add|time/.test(it.rel)));
    if (it.adv) test(`${n}: conjunctive adverb known`, !!C.ADV[it.adv]);
    // which fixes should work
    const want = it.frag ? { period: false, semi: false, cc: false, adv: false, sub: "na", attach: true, complete: true }
                         : { period: true, semi: true, cc: true, adv: true, sub: true, attach: false, complete: "na" };
    fixes.forEach(x => {
      const r = L.apply(it, x);
      if (want[x] === "na") { test(`${n} ${x}: does not apply`, r.na && !!r.why); return; }
      eq(`${n} ${x}: works?`, r.ok, want[x]);
      test(`${n} ${x}: explained`, !!r.why);
      test(`${n} ${x}: text is clean`, /^[A-Z]/.test(r.text) && /\.$/.test(r.text) && !/  | ,|,,|\.\./.test(r.text), r.text);
      if (r.ok) test(`${n} ${x}: sentence-initial capital only after a period`, r.text.split(/(?<=\.) /).every(s => /^[A-Z]/.test(s)));
    });
    eq(`${n}: tally length`, L.tally(it).length, fixes.length);
  });
  const T = (id, fx) => L.apply(L.ITEMS.find(x => x.id === id), fx).text;
  eq("faulty splice text", L.faulty(L.ITEMS[0]).text, "The fog was thick, the boats stayed in the harbor.");
  eq("faulty however splice", L.faulty(L.ITEMS[2]).text, "The house was quiet, however, the clock kept ticking.");
  eq("fused text", L.faulty(L.ITEMS[3]).text, "Alice fell slowly she had time to look around.");
  eq("period fix", T("fog", "period"), "The fog was thick. The boats stayed in the harbor.");
  eq("cc fix", T("scrooge", "cc"), "Scrooge hated Christmas, but his nephew loved it.");
  eq("adverb fix", T("house", "adv"), "The house was quiet; however, the clock kept ticking.");
  eq("subordinate fix", T("alice", "sub"), "Because Alice fell slowly, she had time to look around.");
  eq("attach dependent clause", T("because", "attach"), "The boats stayed in the harbor because the fog was thick.");
  eq("attach introductory clause", T("although", "attach"), "Although the house was dark, Scrooge was not afraid.");
  eq("attach participial phrase", T("grumbling", "attach"), "Jo lay on the rug, grumbling about the presents.");
  eq("attach appositive", T("marley", "attach"), "Scrooge had one partner, Jacob Marley.");
  eq("attach absolute phrase", T("lawyers", "attach"), "Fog filled the streets, the lawyers waiting in the hall.");
  eq("attach predicate", T("huck", "attach"), "Huck slipped out of the window and climbed down the tree.");
  eq("complete fragment", T("marley", "complete"), "Scrooge had one partner. His name was Jacob Marley.");
  eq("faulty fragment", L.faulty(L.ITEMS[6]).text, "The boats stayed in the harbor. Because the fog was thick.");
  const S = L.spot();
  eq("spot: two per item", S.length, L.ITEMS.length * 2);
  S.forEach(q => test(`spot ${q.id}: answer is a button`, L.SPOT.some(s => s[0] === q.ans) && !!q.text));
  test("spot covers every answer", L.SPOT.every(s => S.some(q => q.ans === s[0])));
};
