module.exports = ({ logic: L, EngLab: E, test, eq }) => {
  const C = E.logic["eng-clauses"];
  const opt = list => [null, ...list.map(x => x.id)];
  let n = 0, okN = 0;
  for (const lead of opt(L.DC)) for (const a of opt(L.IC)) for (const join of opt(L.JOIN)) for (const b of opt(L.IC)) for (const tail of opt(L.DC)) {
    if ((a && a === b) || (lead && lead === tail)) continue;
    n++;
    const st = { lead, a, join, b, tail }, r = L.build(st), name = JSON.stringify(st);
    const text = E.text(r.toks);
    const expectOk = !!a && (!!b === !!join) && join !== "comma";
    if (r.ok !== expectOk) { test(`${name}: ok flag`, false, r.error); continue; }
    if (b && a && (!join || join === "comma")) {
      test(`${name}: error kind`, r.kind === (join ? "splice" : "fused"));
      test(`${name}: three fixes`, r.fixes.length === 3 && r.fixes.every(f => /^[A-Z].*\.$/.test(f) && !/,,| ,/.test(f)));
    }
    if (!r.ok) continue;
    okN++;
    const p = C.parse(r.src), s = C.structure(p);
    if (C.check(p).length) test(`${name}: built source is well formed`, false, C.check(p).join("; "));
    if (s.type !== r.type || s.ic !== r.ic || s.dc !== r.dc) test(`${name}: type agrees with the shared parser`, false, `${r.type} vs ${s.type}`);
    if (C.cap(C.join(p.words)) !== text) test(`${name}: text agrees with the shared parser`, false, `${text} | ${C.join(p.words)}`);
    if (!/^[A-Z][^.;]*([;][^.;]*)?\.$/.test(text) || /,,| ,|,;|;,(?! )/.test(text)) test(`${name}: punctuation`, false, text);
    if (r.type !== ({ "1,0": "simple", "2,0": "compound", "1,1": "complex", "1,2": "complex", "2,1": "compound-complex", "2,2": "compound-complex" })[`${r.ic},${r.dc}`]) test(`${name}: type from counts`, false, r.type);
  }
  test("every combination was checked", n > 3000, String(n));
  test("many combinations are sentences", okN > 1000, String(okN));
  const T = st => E.text(L.build(Object.assign({ lead: null, a: null, join: null, b: null, tail: null }, st)).toks);
  eq("compound-complex with opening clause", T({ lead: "when", a: "river", join: "and", b: "huck" }), "When night fell, the river rose, and Huck slept.");
  eq("concessive closing clause takes a comma", T({ a: "jim", tail: "although" }), "Jim kept watch, although the air was cold.");
  eq("time clause at the end takes none", T({ a: "jim", tail: "while" }), "Jim kept watch while the town slept.");
  eq("semicolon + conjunctive adverb", T({ a: "river", join: "mean", b: "huck" }), "The river rose; meanwhile, Huck slept.");
  eq("semicolon alone", T({ a: "river", join: "semi", b: "jim" }), "The river rose; Jim kept watch.");
  eq("comma splice shown as written", T({ a: "river", join: "comma", b: "huck" }), "The river rose, Huck slept.");
  eq("fused sentence fixes", L.build({ a: "huck", b: "jim" }).fixes, ["Huck slept. Jim kept watch.", "Huck slept; Jim kept watch.", "Huck slept, and Jim kept watch."]);
  eq("dependent clause alone is a fragment", L.build({ lead: "because" }).kind, "fragment");
  eq("joiner without second clause", L.build({ a: "jim", join: "so" }).kind, "dangling");
  L.classIds.forEach(id => {
    const b = C.byId(id), a = C.get(id);
    test(`classify ${id}: in the bank`, !!b);
    eq(`classify ${id}: function agrees with end mark and subject`, L.fnAllowed(a), [b.fn]);
    test(`classify ${id}: type is one of four`, L.TYPES.includes(C.structure(a).type));
  });
  eq("all four structures appear in Classify", [...new Set(L.classIds.map(id => C.structure(C.get(id)).type))].sort(), ["complex", "compound", "compound-complex", "simple"]);
  eq("all four functions appear in Classify", [...new Set(L.classIds.map(id => C.byId(id).fn))].sort(), ["declarative", "exclamatory", "imperative", "interrogative"]);
};
