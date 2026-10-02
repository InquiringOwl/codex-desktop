(function(){ const L = window.LABS;
// the innermost frame's value of a name, as Python shows it ("" if unbound)
const tv = (k, s, name) => { const f = s.f[s.f.length - 1], v = f && f.vars[name]; return v ? k.CR.show(v, s.h) : ""; };
const calls = (T, i) => T.steps.slice(0, i + 1).filter(s => s.ev === "call").length;

L["cs-recursion"] = k => { CSKit.attach(k);
  const depth = (s, i, T) => [{ label: "Frames", value: String(s.f.length), note: "global + calls waiting" }, { label: "Calls", value: String(calls(T, i)), note: "made so far" }];
  const fact = (s, i, T) => {
    const n = Number(tv(k, s, "n"));
    if (s.ev === "end") return "24 = 4 × 3 × 2 × 1. The stack grew to five frames (global plus four calls), then unwound one frame at a time, each return value finishing the multiplication waiting below it.";
    if (s.ev === "call") return `A new frame for <code>fact</code> with its own <code>n = ${n}</code>. The frames below it are paused, each with its own <code>n</code>.`;
    if (s.ev === "return") return `<code>fact(${n})</code> returns ${k.CR.show(s.r, s.h)}. Its frame is removed and the caller below resumes with that value.`;
    return { 1: "<code>def</code> binds the name <code>fact</code> to a function. The body does not run yet.", 5: "To print, Python first needs <code>fact(4)</code>, so it calls the function.",
      2: n <= 1 ? `<code>${n} &lt;= 1</code> is True: this is the base case.` : `<code>${n} &lt;= 1</code> is False, so this is not the base case.`,
      3: "The base case returns 1 without calling <code>fact</code> again. This is what stops the recursion.",
      4: `<code>fact(${n})</code> needs <code>${n} * fact(${n - 1})</code>. It waits here while Python calls <code>fact(${n - 1})</code>, a smaller problem.` }[s.l];
  };
  const fib = (s, i, T) => {
    const n = Number(tv(k, s, "n"));
    if (s.ev === "end") return "<code>fib(4)</code> made 9 calls: <code>fib(2)</code> ran twice, <code>fib(1)</code> three times, <code>fib(0)</code> twice. Each call recomputes its answer from scratch, so the count grows quickly with n.";
    if (s.ev === "call") { const again = T.steps.slice(0, i).filter(x => x.ev === "call" && tv(k, x, "n") === String(n)).length;
      return `Call ${calls(T, i)}: a new frame for <code>fib(${n})</code>.` + (again ? ` <code>fib(${n})</code> was already computed before; Python does all the work again.` : ""); }
    if (s.ev === "return") return `<code>fib(${n})</code> returns ${k.CR.show(s.r, s.h)} and its frame is removed.`;
    return { 1: "<code>def</code> binds <code>fib</code> to a function.", 5: "Python calls <code>fib(4)</code>.",
      2: n < 2 ? `<code>${n} &lt; 2</code> is True: a base case.` : `<code>${n} &lt; 2</code> is False, so <code>fib(${n})</code> needs two smaller calls.`,
      3: `Base case: <code>fib(${n})</code> is ${n}.`, 4: `Python calls <code>fib(${n - 1})</code> first and finishes it completely, then calls <code>fib(${n - 2})</code>, then adds.` }[s.l];
  };
  k.csModes([["fact", "fact(4)"], ["fib", "fib(4)"], ["predict", "Predict"]], m => {
    if (m === "fact") return k.trace({ programs: [["cs-recursion/fact", "fact(4)"]], title: "The stack grows, then unwinds", narr: fact, rows: depth });
    if (m === "fib") return k.trace({ programs: [["cs-recursion/fib", "fib(4)"]], title: "Two calls per frame", narr: fib, rows: depth });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-recursion/before", choices: ["1\n2\n3", "3\n2\n1\n0"], why: "Each call prints its <code>n</code> before calling the smaller one, so the numbers come out on the way down. <code>countdown(0)</code> returns at the base case without printing." },
      { key: "cs-recursion/after", choices: ["3\n2\n1", "0\n1\n2\n3"], why: "Here the print comes after the recursive call. <code>countup(3)</code> cannot print until <code>countup(2)</code> has returned, so the prints happen while the stack unwinds: smallest first." },
      { key: "cs-recursion/calls", choices: ["5 5", "5 9", "8 15"], why: "<code>fib(5)</code> is 5. It made 15 calls: 1 for <code>fib(5)</code> plus the 9 of <code>fib(4)</code> plus the 5 of <code>fib(3)</code>." } ] });
  });
};

L["cs-testing"] = k => { CSKit.attach(k);
  const common = { 1: "<code>def</code> binds <code>average</code>. Nothing is tested yet.", 2: "<code>total</code> starts at 0.", 4: "Adds the next item to <code>total</code>.", 5: "Divides the total by the number of items.",
    6: "Test 1: <code>average([0, 6])</code> should be 3.0. If the comparison is True, <code>assert</code> does nothing.", 7: "No AssertionError, so test 1 passed.",
    9: "No AssertionError, so test 2 passed." };
  k.csModes([["buggy", "A bug caught"], ["fixed", "Fixed"], ["predict", "Which test fails?"]], m => {
    if (m === "buggy") return k.trace({ programs: [["cs-testing/buggy", "Buggy average"]], title: "assert catches a bug", narr: { "cs-testing/buggy": { ...common,
      3: "<code>range(1, len(nums))</code> starts at index 1, so <code>nums[0]</code> is never added. That is the bug.",
      8: "Test 2: <code>average([4, 4])</code> should be 4.0. The skipped item here is a 4, so the comparison is False and <code>assert</code> raises AssertionError with the message.",
      end: "The program stopped at the failing assert; line 9 never ran. Test 1 passed only because the skipped item was 0. A test can pass and still miss a bug." } } });
    if (m === "fixed") return k.trace({ programs: [["cs-testing/fixed", "Fixed average"]], title: "The same tests pass", narr: { "cs-testing/fixed": { ...common,
      3: "<code>for x in nums</code> takes every item, the first one included.", 8: "Test 2: <code>average([4, 4])</code> is now 8 / 2 = 4.0, so the comparison is True.",
      end: "Both asserts held, so they did nothing and every line ran. Keep the tests: they will catch the bug if it ever comes back." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-testing/largest", choices: ["9\n-2", "9\n-8"], why: "<code>best</code> starts at 0 and no item of <code>[-5, -2, -8]</code> is greater than 0, so it is never replaced. Only a test with all-negative numbers shows the bug; start with <code>best = nums[0]</code>." },
      { key: "cs-testing/message", choices: ["ok", "False\nok"], why: "<code>4 % 2 == 1</code> is False, so <code>is_even(4)</code> returns False and the assert raises AssertionError with its message. The program stops; <code>ok</code> is never printed." },
      { key: "cs-testing/empty", choices: ["3.0\n0", "3.0\n0.0"], why: "The empty list is the edge case: <code>len([])</code> is 0 and dividing by 0 raises ZeroDivisionError. Test the edges, not only the typical inputs." } ] });
  });
};

L["cs-strings"] = k => { CSKit.attach(k);
  const vow = (s, i, T) => {
    const ch = tv(k, s, "ch"), c = Number(tv(k, s, "count"));
    if (s.ev === "end") return "Three of the six characters of <code>\"banana\"</code> are vowels. A for loop over a string gives one character at a time.";
    if (s.l === 3) return k.CR.stepAt(T, i + 1).l === 4 ? `The loop hands out the next character: <code>ch</code> becomes ${tv(k, k.CR.stepAt(T, i + 1), "ch")}.` : "No characters are left, so the loop ends.";
    return { 1: "<code>word</code> is bound to a 6-character string.", 2: "<code>count</code> starts at 0.",
      4: `<code>${ch} in "aeiou"</code> is ${"aeiou".includes(ch.replace(/'/g, "")) ? "True" : "False"}: <code>in</code> checks whether the character occurs in the string.`,
      5: `A vowel: <code>count</code> becomes ${c + 1}.`, 6: "Prints the count." }[s.l];
  };
  k.csModes([["slices", "Index and slice"], ["vowels", "Count vowels"], ["predict", "Immutable"]], m => {
    if (m === "slices") return k.trace({ programs: [["cs-strings/slices", "s = \"python\""]], title: "Indexes 0 to 5, or −6 to −1", narr: { "cs-strings/slices": {
      1: "<code>s</code> is bound to <code>\"python\"</code>: 6 characters, indexes 0 to 5 (or −6 to −1 from the end).", 2: "<code>s[0]</code> is the first character, <code>'p'</code>. Indexes start at 0.",
      3: "A negative index counts from the end: <code>s[-1]</code> is the last character, <code>'n'</code>.", 4: "<code>s[1:4]</code> starts at index 1 and stops before index 4: <code>'yth'</code>, 4 − 1 = 3 characters.",
      5: "<code>s[::-1]</code> has no ends and step −1, so it runs from the last character back to the first: <code>'nohtyp'</code>.",
      6: "Slice ends past the string do not raise: <code>s[2:100]</code> just stops at the end, <code>'thon'</code>.", 7: "<code>print</code> shows the strings without quotes, separated by spaces.",
      end: "None of these changed <code>s</code>. Indexing and slicing build new strings; <code>s</code> is still <code>'python'</code>." } } });
    if (m === "vowels") return k.trace({ programs: [["cs-strings/vowels", "Vowels in banana"]], title: "A loop over characters", narr: vow, rows: (s, i, T) => [{ label: "count", value: tv(k, s, "count") || "—", c: "c2" }] });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-strings/upper", choices: ["HELLO"], why: "Strings are immutable. <code>s.upper()</code> returns a new string, and line 2 throws it away; <code>s</code> still names <code>'hello'</code>." },
      { key: "cs-strings/new", choices: ["HELLO HELLO", "hello hello"], why: "<code>t</code> keeps the new string <code>upper</code> returned, and <code>s</code> is unchanged. To change what <code>s</code> names, rebind it: <code>s = s.upper()</code>." },
      { key: "cs-strings/assign", choices: ["bat", "cat"], why: "A string cannot be changed in place, so item assignment raises TypeError. Build a new string instead: <code>s = \"b\" + s[1:]</code>." } ] });
  });
};
})();
