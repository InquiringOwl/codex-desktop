(function(){ const L = window.LABS;
// value of a global variable at a step, as Python shows it ("" if not yet bound)
const gv = (k, s, name) => { const v = s.f[0].vars[name]; return v ? k.CR.show(v, s.h) : ""; };

L["cs-conditionals"] = k => { CSKit.attach(k);
  const tests = [[2, 90, "A"], [4, 80, "B"], [6, 70, "C"]];
  const grade = (s, i, T, key) => {
    const sc = Number(key.split("-").pop()), hit = tests.find(t => sc >= t[1]), t = tests.find(t => t[0] === s.l);
    if (s.ev === "end") return hit ? `Only one branch ran. With ${sc}, the first true test was <code>score &gt;= ${hit[1]}</code>, and every branch below it was skipped without being tested.` : `With ${sc}, all three tests were False, so the <code>else</code> block was the one branch that ran.`;
    if (s.l === 1) return `<code>input</code> returns the text <code>"${sc}"</code> and <code>int</code> converts it, so the comparisons below compare numbers.`;
    if (t) return sc >= t[1] ? `<code>${sc} &gt;= ${t[1]}</code> is True, so this branch's block runs.` : `<code>${sc} &gt;= ${t[1]}</code> is False, so Python skips this block and tests the next condition.`;
    if (s.l === 9) return "No condition was True, so the <code>else</code> block runs.";
    if (s.l === 10) return "The rest of the chain is skipped. Python continues after the whole <code>if</code> statement.";
    return "The chosen block binds <code>grade</code>.";
  };
  k.csModes([["grade", "One program, three inputs"], ["nested", "Nested vs elif"], ["predict", "Predict"]], m => {
    if (m === "grade") return k.trace({ programs: [["cs-conditionals/grade-92", "score 92"], ["cs-conditionals/grade-85", "score 85"], ["cs-conditionals/grade-59", "score 59"]], title: "Which branch runs?", narr: grade });
    if (m === "nested") return k.trace({ programs: [["cs-conditionals/nested", "Nested if"], ["cs-conditionals/elif", "elif chain"], ["cs-conditionals/two-ifs", "Two ifs"]], title: "Nested if, elif, separate ifs", narr: {
      "cs-conditionals/nested": { 2: "<code>18 &gt; 25</code> is False, so Python jumps to the <code>else</code> block.",
        5: "Inside the <code>else</code> block is a second <code>if</code>: <code>18 &gt; 15</code> is True.", 6: "The inner block prints.", 9: "This line is outside both <code>if</code> statements, so it always runs.",
        end: "Same output as the elif chain: <code>elif</code> is an <code>else</code> holding one <code>if</code>, written without the extra indent." },
      "cs-conditionals/elif": { 2: "<code>18 &gt; 25</code> is False, so Python moves to the <code>elif</code>.", 4: "<code>18 &gt; 15</code> is True, so this block runs.", 5: "One branch has run, so the <code>else</code> is skipped.",
        8: "Python continues after the whole chain.", end: "At most one block of an if/elif/else chain runs." },
      "cs-conditionals/two-ifs": { 2: "<code>30 &gt; 25</code> is True.", 3: "The first block prints <code>hot</code>.", 4: "This is a separate <code>if</code> statement, so Python tests it too: <code>30 &gt; 15</code> is True.",
        5: "The second block runs as well.", 8: "Both statements are finished.", end: "Two separate <code>if</code>s can both run. With <code>elif</code> on line 4, only <code>hot</code> would print." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-conditionals/order", choices: ["B", "C\nB"], why: "Python tests the conditions in order and runs only the first true one. <code>85 &gt;= 70</code> is already True, so the <code>elif</code> is never tested. Put the strictest test first." },
      { key: "cs-conditionals/falls", choices: ["a", "a\nc", "b"], why: "These are two separate <code>if</code> statements. Both tests are True, and the <code>else</code> belongs only to the second one." },
      { key: "cs-conditionals/empty", choices: ["hello ", "nothing is printed"], why: "A condition does not have to be a comparison. The empty string is falsy, so <code>if name:</code> takes the <code>else</code> branch." } ] });
  });
};

L["cs-while"] = k => { CSKit.attach(k);
  const passes = body => (s, i, T) => [{ label: "Passes", value: String(k.CR.hits(T, i, body)), note: "times the body has started" }];
  const count = (s, i, T) => {
    const n = gv(k, s, "n"), p = k.CR.hits(T, i, 3);
    if (s.ev === "end") return "The test ran 4 times and the body 3 times. The last test is the one that comes out False.";
    return { 1: "<code>n</code> starts at 3.", 2: n !== "0" ? `<code>${n} &gt; 0</code> is True, so the body runs (pass ${p + 1}).` : "<code>0 &gt; 0</code> is False: the loop ends and Python goes to the first line after the body.",
      3: `Prints <code>${n}</code>.`, 4: `<code>n</code> goes down to ${Number(n) - 1}. Then Python goes back to the <code>while</code> line and tests again.`,
      5: "After the loop <code>n</code> is 0, the value that made the test False." }[s.l];
  };
  const digits = (s, i, T) => {
    const n = Number(gv(k, s, "n")), t = Number(gv(k, s, "total"));
    if (s.ev === "end") return "4 + 7 + 2 = 13. Each pass removes one digit, so the loop runs once per digit and stops when <code>n</code> reaches 0.";
    return { 1: "<code>n</code> is the number whose digits we add.", 2: "<code>total</code> is an accumulator: it starts at 0 and grows on each pass.",
      3: n > 0 ? `<code>${n} &gt; 0</code> is True, so the body runs.` : "<code>0 &gt; 0</code> is False, so the loop ends.",
      4: `<code>${n} % 10</code> is ${n % 10}, the last digit, so <code>total</code> becomes ${t + n % 10}.`,
      5: `<code>${n} // 10</code> drops the last digit: <code>n</code> becomes ${Math.floor(n / 10)}.`, 6: "Prints the digit sum." }[s.l];
  };
  k.csModes([["count", "Countdown"], ["digits", "Digit sum"], ["predict", "Predict"]], m => {
    if (m === "count") return k.trace({ programs: [["cs-while/countdown", "Countdown"]], title: "A while loop", narr: count, rows: passes(3) });
    if (m === "digits") return k.trace({ programs: [["cs-while/digits", "Digit sum"]], title: "Peeling off digits", narr: digits, rows: passes(4) });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-while/less", choices: ["1\n2\n3\n4", "2\n3\n4"], why: "When <code>i</code> becomes 4, <code>4 &lt; 4</code> is False, so 4 is never printed. The body ran 3 times." },
      { key: "cs-while/less-equal", choices: ["1\n2\n3", "1\n2\n3\n4\n5"], why: "<code>4 &lt;= 4</code> is True, so 4 prints; then <code>i</code> is 5 and <code>5 &lt;= 4</code> is False. One character changed the pass count from 3 to 4." },
      { key: "cs-while/never", choices: ["0\ndone 0", "done -1"], why: "The test comes first. <code>0 &gt; 0</code> is False on the very first test, so the body runs zero times and <code>n</code> is unchanged." } ] });
  });
};

L["cs-for"] = k => { CSKit.attach(k);
  const next = (T, i, name) => gv(k, k.CR.stepAt(T, i + 1), name);
  const sum = (s, i, T) => {
    if (s.ev === "end") return "1 + 2 + 3 + 4 + 5 = 15. The body ran once for each number <code>range(1, 6)</code> produced.";
    const tot = Number(gv(k, s, "total")), v = Number(gv(k, s, "i"));
    if (s.l === 2) return k.CR.stepAt(T, i + 1).l === 3 ? `<code>range(1, 6)</code> hands out its next number: <code>i</code> becomes ${next(T, i, "i")}.` : "The range has no numbers left (it stops before 6), so the loop ends.";
    return { 1: "<code>total</code> is the accumulator, starting at 0.", 3: `<code>total</code> becomes ${tot} + ${v} = ${tot + v}.`, 4: "Prints the sum.", 5: "<code>i</code> still holds 5, the last value the loop gave it." }[s.l];
  };
  const down = (s, i, T) => {
    if (s.ev === "end") return "<code>range(10, 0, -3)</code> counts down by 3: 10, 7, 4, 1. The next value, −2, is past the stop 0, so it is never produced.";
    if (s.l === 1) return k.CR.stepAt(T, i + 1).l === 2 ? `The next number is ${next(T, i, "k")}; <code>k</code> is bound to it.` : "Going on would reach −2, which is not above the stop 0, so the loop ends.";
    return { 2: `Prints <code>${gv(k, s, "k")}</code>.`, 3: "After the loop <code>k</code> keeps its last value, 1." }[s.l];
  };
  k.csModes([["sum", "Accumulator"], ["down", "Counting down"], ["predict", "Predict"]], m => {
    if (m === "sum") return k.trace({ programs: [["cs-for/sum", "Sum 1 to 5"]], title: "A for loop with an accumulator", narr: sum });
    if (m === "down") return k.trace({ programs: [["cs-for/down", "range(10, 0, -3)"]], title: "A negative step", narr: down });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-for/range5", choices: ["[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]"], why: "<code>range(5)</code> starts at 0 and stops before 5: five numbers, 0 to 4." },
      { key: "cs-for/range-step", choices: ["[2, 5, 8, 11]", "[2, 3, 4, 5, 6, 7, 8, 9, 10]"], why: "Start at 2 and add 3 while the value is below 11: 2, 5, 8. The next, 11, is not below 11." },
      { key: "cs-for/range-empty", choices: ["[5, 4, 3, 2]", "[5, 4, 3, 2, 1]"], why: "The step is +1 by default, and 5 is already not below 1, so the range is empty. Counting down needs a negative step: <code>range(5, 1, -1)</code>." } ] });
  });
};
})();
