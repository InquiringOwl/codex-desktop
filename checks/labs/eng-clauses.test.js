module.exports = ({ logic: L, test, eq }) => {
  const quotes = {
    huck: "You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter.",
    walden: "When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor, in a house which I had built myself, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only.",
    hound: "Mr. Sherlock Holmes, who was usually very late in the mornings, save upon those not infrequent occasions when he was up all night, was seated at the breakfast table.",
    pride: "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
    gettys: "It is altogether fitting and proper that we should do this.",
    watson: "Miss Watson she kept pecking at me, and it got tiresome and lonesome."
  };
  const types = { huck: "compound-complex", walden: "complex", hound: "complex", pride: "complex", gettys: "complex", book: "complex", widow: "complex", deep: "complex",
    jim: "compound-complex", whose: "complex", zero: "complex", knew: "complex", fog: "complex", drift: "simple", canoe: "complex", storm: "complex", night: "simple",
    lantern: "compound", watson: "compound", steamboat: "complex", cold: "complex", asked: "complex" };
  L.bank.forEach(b => {
    const a = L.parse(b.src), txt = L.join(a.words);
    eq(`${b.id}: analysis is well formed`, L.check(a, b), []);
    if (quotes[b.id]) eq(`${b.id}: quotation exact`, txt, quotes[b.id]);
    test(`${b.id}: sentence capitalised and end-punctuated`, /^[A-Z]/.test(txt) && /[.?!]$/.test(txt) && !/ [,.;?!]/.test(txt));
    eq(`${b.id}: structure`, L.structure(a).type, types[b.id]);
    test(`${b.id}: label under 37 chars`, b.label.length <= 36, b.label);
    a.clauses.forEach(c => {
      const al = L.alone(a, c.i);
      test(`${b.id} clause ${c.i}: alone() is a capitalised, punctuated string`, /^[A-Z]/.test(al) && /[.?!]$/.test(al) && !/,[.?!]$/.test(al) && !/ ,|,,/.test(al), al);
      if (c.type !== "I") { const f = L.free(a, c.i, b); test(`${b.id} clause ${c.i}: free version`, !!f && /^[A-Z].*[.?!]$/.test(f), f); }
      else test(`${b.id} clause ${c.i}: main clause has no free rewrite`, L.free(a, c.i, b) === null);
      test(`${b.id} clause ${c.i}: label`, !!L.label(c));
    });
    const disp = L.display(a);
    eq(`${b.id}: display has two brackets per clause`, disp.filter(x => x.wi < 0).length, 2 * a.clauses.length);
    eq(`${b.id}: display keeps every word in order`, disp.filter(x => x.wi >= 0).map(x => x.wi), a.words.map((x, i) => i));
    let depth = 0, ok = true; disp.forEach(x => { if (x.w === "[" && x.wi < 0) depth++; if (x.w === "]" && x.wi < 0) depth--; if (depth < 0) ok = false; });
    test(`${b.id}: brackets balance`, ok && depth === 0);
    const flat = n => typeof n === "string" ? [n] : n.kids.flatMap(flat);
    a.clauses.filter(c => c.parent < 0).forEach(c => eq(`${b.id}: nest tree of clause ${c.i} keeps its words`, flat(L.tree(a, c.i)).join(" ").replace(/ /g, ""), L.join(c.all.map(i => a.words[i])).replace(/ /g, "")));
  });
  // specific stand-alone results
  const A = id => L.get(id);
  eq("Walden main clause without its adverb and relative clauses", L.alone(A("walden"), 0), "I lived alone, in the woods, a mile from any neighbor, in a house, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only.");
  eq("Holmes main clause drops the paired commas", L.alone(A("hound"), 0), "Mr. Sherlock Holmes was seated at the breakfast table.");
  eq("Huck's second clause without the coordinator", L.alone(A("huck"), 2), "That ain’t no matter.");
  eq("Huck's dependent clause made free by dropping the marker", L.free(A("huck"), 1), "You have read a book by the name of The Adventures of Tom Sawyer.");
  eq("Main clause keeps its noun clause object", L.alone(A("deep"), 0), "I think that the man knew that it leaked.");
  eq("Imperative keeps no subject", L.alone(A("steamboat"), 0), "Wake me.");
  test("relative and wh-clauses need a rewrite", L.needsRewrite(A("book"), 1) && L.needsRewrite(A("asked"), 1) && !L.needsRewrite(A("fog"), 1));
  eq("Huck's sentence counts", L.structure(A("huck")), { ic: 2, dc: 1, type: "compound-complex" });
  eq("deep embedding: three dependent clauses", L.structure(A("deep")).dc, 3);
  eq("deepest level of 'deep'", Math.max(...A("deep").clauses.map(c => c.depth)), 2);
  L.labIds.forEach(id => test(`lab sentence ${id} is in the bank`, !!L.byId(id)));
  L.phraseQuiz.forEach((q, i) => {
    test(`quiz ${i}: has highlighted words`, /_h\b/.test(q.t));
    test(`quiz ${i}: answer is clause or phrase`, q.a === "clause" || q.a === "phrase");
    test(`quiz ${i}: explanation`, q.why.length > 20);
  });
  eq("quiz has both answers", [...new Set(L.phraseQuiz.map(q => q.a))].sort(), ["clause", "phrase"]);
};
