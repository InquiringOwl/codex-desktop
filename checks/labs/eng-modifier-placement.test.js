module.exports = ({ logic, test, eq }) => {
  const M = logic.movers, D = logic.danglers, F = t => D.find(d => d.label.startsWith(t));
  // movers: every position of every sentence
  eq("only before the subject", logic.place(M[0], 0).text, "Only Ana paid her brother ten dollars yesterday.");
  eq("only as adjective", logic.place(M[0], 3).text, "Ana paid her only brother ten dollars yesterday.");
  eq("only before the amount", logic.place(M[0], 4).text, "Ana paid her brother only ten dollars yesterday.");
  eq("ungrammatical position starred", logic.place(M[0], 5).text, "*Ana paid her brother ten only dollars yesterday.");
  eq("only at the end", logic.place(M[0], 7).text, "Ana paid her brother ten dollars yesterday only.");
  eq("only targets amount", logic.place(M[0], 4).t, [5, 6]);
  eq("squinting only has two readings", [logic.place(M[0], 6).t, logic.place(M[0], 6).t2], [[4, 5], [7]]);
  eq("almost every house", logic.place(M[1], 3).text, "The storm destroyed almost every house.");
  eq("misplaced phrase", logic.place(M[2], 6).text, "She served sandwiches to the children on paper plates.");
  eq("misplaced phrase: wrong and intended", [logic.place(M[2], 6).t, logic.place(M[2], 6).want], [[4, 5], [2]]);
  eq("well-placed phrase", logic.place(M[2], 3).text, "She served sandwiches on paper plates to the children.");
  eq("squinting often", logic.place(M[3], 3).st, "amb");
  M.forEach((m, mi) => {
    test(`mover ${mi} has a slot for every position`, m.slots.length === m.words.length + 1);
    test(`mover ${mi} has a correct position`, m.slots.some(s => s.st === "ok"));
    test(`mover ${mi} label fits`, m.label.length <= 36);
    m.slots.forEach((s, at) => {
      const r = logic.place(m, at), n = `mover ${mi} pos ${at}`;
      test(n + " text well-formed", /^\*?[A-Z][A-Za-z ]+\.$/.test(r.text) && !/  /.test(r.text), r.text);
      test(n + " has meaning", s.m.length > 15);
      test(n + " modifier at its slot", r.words.slice(at, at + r.mod.length).join(" ") === m.mod);
      test(n + " targets exist for non-bad", s.st === "bad" ? !s.t : r.t.length > 0 && r.t.every(i => i >= 0 && i < r.words.length && !r.mod.includes(i)), r.text);
      test(n + " ambiguity has two readings", (s.st === "amb") === (r.t2.length > 0));
      test(n + " misplaced names the intended word", (s.st === "mis") === (r.want.length > 0));
    });
  });
  // danglers
  eq("dangling sentence", logic.sentence(F("Having")), "Having finished the report, the file was saved.");
  eq("literal reading", logic.literal(F("Having")), "The file finished the report.");
  eq("fix A uses the active voice", logic.fixA(F("Having")), "Having finished the report, I saved the file.");
  eq("fix B makes a clause", logic.fixB(F("Having")), "After I had finished the report, the file was saved.");
  eq("infinitive dangler", logic.sentence(F("To get")), "To get a good seat, tickets must be bought early.");
  eq("infinitive literal", logic.literal(F("To get")), "Tickets want to get a good seat.");
  eq("infinitive fix A (modal active)", logic.fixA(F("To get")), "To get a good seat, you must buy tickets early.");
  eq("infinitive fix B", logic.fixB(F("To get")), "If you want to get a good seat, tickets must be bought early.");
  eq("elliptical after", logic.sentence(F("After")), "After reading the reviews, the film was skipped.");
  eq("elliptical after fix A", logic.fixA(F("After")), "After reading the reviews, we skipped the film.");
  eq("elliptical after fix B", logic.fixB(F("After")), "After we read the reviews, the film was skipped.");
  eq("participle, active main", logic.literal(F("Walking to the library, the")), "The rain was walking to the library.");
  eq("participle fix B", logic.fixB(F("Walking to the library, the")), "While I was walking to the library, the rain began.");
  eq("elliptical while", logic.fixB(F("While")), "While I was driving to work, a deer ran into the road.");
  eq("elliptical be", logic.sentence(F("When")), "When only six, my father taught me to swim.");
  eq("elliptical be literal", logic.literal(F("When")), "My father was only six.");
  eq("elliptical be fix B", logic.fixB(F("When")), "When I was only six, my father taught me to swim.");
  eq("attached participle", logic.status(F("Walking to the library, I")), "ok");
  eq("attached sentence", logic.sentence(F("Walking to the library, I")), "Walking to the library, I noticed the rain.");
  eq("past participle attached", logic.sentence(F("Exhausted")), "Exhausted by the climb, the hikers rested.");
  eq("absolute", [logic.status(F("The rain")), logic.sentence(F("The rain"))], ["absolute", "The rain having stopped, we walked home."]);
  eq("phrase names", D.map(d => logic.phraseName(d.phrase)), ["participial phrase", "infinitive phrase", "preposition + gerund phrase", "participial phrase", "elliptical clause", "elliptical clause", "participial phrase", "participial phrase", "absolute phrase"]);
  D.forEach((d, i) => {
    const st = logic.status(d), n = `dangler ${i}`;
    test(n + " sentence well-formed", /^[A-Z][A-Za-z ]+, (I |[a-z])[a-zA-Z ]+\.$/.test(logic.sentence(d)), logic.sentence(d));
    test(n + " fixes only when dangling", st === "dangling" ? !!logic.fixA(d) && !!logic.fixB(d) : logic.fixA(d) === null && logic.fixB(d) === null);
    if (st === "dangling") {
      [logic.fixA(d), logic.fixB(d)].forEach((f, k) => test(`${n} fix ${k} well-formed`, /^[A-Z][A-Za-z ]+, (I |[a-z])[a-zA-Z ]+\.$/.test(f), f));
      test(n + " fix A puts the doer first in the main clause", logic.fixA(d).split(", ")[1].toLowerCase().startsWith(d.doer.nom.toLowerCase()), logic.fixA(d));
      test(n + " fix B names the doer", new RegExp(`\\b${d.doer.nom}\\b`, "i").test(logic.fixB(d).split(", ")[0]), logic.fixB(d));
    }
    test(n + " label fits", d.label.length <= 36);
  });
  test("has dangling, attached and absolute items", ["dangling", "ok", "absolute"].every(s => D.some(d => logic.status(d) === s)));
};
