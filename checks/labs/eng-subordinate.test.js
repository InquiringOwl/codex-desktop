module.exports = ({ logic: L, EngLab: E, test, eq }) => {
  const C = E.logic["eng-clauses"];
  L.jobs.forEach((j, i) => {
    const a = C.parse(j.src), t = L.target(a), name = `job ${i} (${j.label})`;
    eq(`${name}: analysis well formed`, C.check(a, j), []);
    test(`${name}: has a dependent clause`, !!t);
    const fits = ["n", "adj", "adv"].filter(s => j[s].v === "fits");
    eq(`${name}: exactly one substitution fits, matching the clause type`, fits, [L.JOB[t.type]]);
    ["n", "adj", "adv"].forEach(s => test(`${name}: ${s} substitution complete`, /^[A-Z].*\.$/.test(j[s].t) && ["fits", "breaks", "changes"].includes(j[s].v) && j[s].why.length > 15));
    test(`${name}: label under 37 chars`, j.label.length <= 36);
  });
  eq("all three jobs are tested", [...new Set(L.jobs.map(j => L.JOB[L.target(C.parse(j.src)).type]))].sort(), ["adj", "adv", "n"]);
  L.rel.forEach((it, i) => {
    const prons = it.swap ? ["that", "which"] : [it.pron];
    [false, true].forEach(cm => prons.forEach(p => {
      const r = L.punctuate(it, cm, p), name = `rel ${i} commas=${cm} ${p}`;
      test(`${name}: text`, /^[A-Z].*\.$/.test(r.text) && !/,,| ,|,\./.test(r.text), r.text);
      test(`${name}: commas count`, (r.text.match(/,/g) || []).length - (it.pre.match(/,/g) || []).length === (cm ? (it.post === "." ? 1 : 2) : 0));
      test(`${name}: status`, ["ok", "note", "odd", "bad"].includes(r.status) && r.msg.length > 15);
      if (cm && p === "that") eq(`${name}: comma + that is an error`, r.status, "bad");
      if (cm && p !== "that") eq(`${name}: nonrestrictive with ${p} is standard`, r.status, "ok");
    }));
  });
  eq("restrictive that", L.punctuate(L.rel[0], false).text, "The raft that we built leaked.");
  eq("nonrestrictive who", L.punctuate(L.rel[1], true).text, "My brother, who lives in St. Louis, sent a letter.");
  eq("clause at the end: one comma", L.punctuate(L.rel[6], true).text, "We met Huck’s father, who had just come back to town.");
  eq("proper name without commas is odd", L.punctuate(L.rel[3], false).status, "odd");
  eq("restrictive which gets a style note", L.punctuate(L.rel[5], false).status, "note");
  L.adv.forEach((it, i) => ["front", "end"].forEach(pos => {
    const r = L.adverb(it, pos), a = C.parse(r.src), name = `adv ${i} (${it.meaning}) ${pos}`;
    eq(`${name}: analysis well formed`, C.check(a), []);
    const d = a.clauses.find(c => c.type === "A");
    test(`${name}: adverb clause with the right meaning`, !!d && d.q[0] === it.meaning);
    test(`${name}: rule text`, r.rule.length > 15);
    if (it.fixed) eq(`${name}: fixed clause cannot front`, r.ok, pos === "end");
    else {
      const txt = C.cap(C.join(a.words));
      test(`${name}: comma rule`, pos === "front" ? /^[A-Z][^,]*, [^,]*\.$/.test(txt) && d.from === 0 : (txt.includes(",") === !!it.comma) && d.to === a.words.length - 2, txt);
    }
  }));
  const T = (i, p) => { const a = C.parse(L.adverb(L.adv[i], p).src); return C.cap(C.join(a.words)); };
  eq("front time clause", T(0, "front"), "When the sun went down, we pushed off.");
  eq("end cause clause", T(3, "end"), "We stayed near the shore because the current was strong.");
  eq("end concession clause", T(6, "end"), "Nobody lit a fire, although the night was cold.");
  eq("two-word marker", T(8, "front"), "So that nobody would see the fire, we kept the lantern low.");
  eq("result clause", T(9, "end"), "The fog was so thick that we lost the shore.");
};
