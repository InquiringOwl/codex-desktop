(function(){ const L = window.LABS;
// value of a name in the innermost frame at a step ("" if not bound there)
const lv = (k, s, name) => { const f = s.f[s.f.length - 1], v = f.vars[name]; return v ? k.CR.show(v, s.h) : ""; };
const ret = (k, s) => s.r ? k.CR.show(s.r, s.h) : "";
// narration from per-program maps: keys "<line><c|r|e>" for call/return/exception events, "<line>" for lines, or a function
const by = maps => (s, i, T, key) => { const m = maps[key] || {};
  if (s.ev === "end") return m.end;
  const x = s.ev === "line" ? m[s.l] : m[s.l + s.ev[0]];
  return typeof x === "function" ? x(s, i, T) : x; };
const nextL = (k, T, i) => k.CR.stepAt(T, i + 1).l;

L["cs-nested-loops"] = k => { CSKit.attach(k);
  const g = (s, n) => lv(k, s, n);
  const table = by({ "cs-nested-loops/table": {
    1: (s, i, T) => nextL(k, T, i) === 2 ? `The outer loop takes its next number: <code>i</code> becomes ${g(k.CR.stepAt(T, i + 1), "i")}. The inner loop below will start over from 1.` : "<code>range(1, 4)</code> is used up, so the outer loop ends.",
    2: (s, i, T) => nextL(k, T, i) === 3 ? `The inner loop takes its next number: <code>j</code> becomes ${g(k.CR.stepAt(T, i + 1), "j")}, while <code>i</code> stays ${g(s, "i")}.` : `The inner range is used up, so the inner loop ends. Python goes on with line 4, still inside the outer loop's body.`,
    3: s => `Prints <code>${g(s, "i")} * ${g(s, "j")}</code> = ${Number(g(s, "i")) * Number(g(s, "j"))}. <code>end=" "</code> puts a space after it instead of a new line.`,
    4: "An empty <code>print()</code> ends the row. Then Python goes back to the outer <code>for</code> line.",
    5: "This line is after both loops, so it runs once.",
    end: "The outer loop ran 3 times and the inner body 3 times per outer pass: 3 × 3 = 9 products." } });
  const stars = by({ "cs-nested-loops/stars": {
    1: (s, i, T) => nextL(k, T, i) === 2 ? `<code>row</code> becomes ${g(k.CR.stepAt(T, i + 1), "row")}.` : "<code>range(1, 5)</code> is used up, so the outer loop ends.",
    2: "Each row starts with an empty string.",
    3: (s, i, T) => nextL(k, T, i) === 4 ? `<code>range(${g(s, "row")})</code> gives the next <code>col</code>. The inner loop runs <code>row</code> times, so it gets longer on each row.` : `The inner loop has run ${g(s, "row")} times and ends.`,
    4: s => `One more star: <code>line</code> will be <code>"${g(s, "line")}*"</code>.`,
    5: s => `Prints the row of ${g(s, "row")} stars.`,
    end: "1 + 2 + 3 + 4 = 10 stars in all. The inner range depends on the outer variable, so the passes are not a simple product." } });
  const rows = body => (s, i, T) => [{ label: "Inner passes", value: String(k.CR.hits(T, i, body)), note: "times the inner body has started" }];
  k.csModes([["table", "Times table"], ["stars", "Triangle"], ["predict", "Predict"]], m => {
    if (m === "table") return k.trace({ programs: [["cs-nested-loops/table", "3 × 3 table"]], title: "The inner loop restarts", narr: table, rows: rows(3) });
    if (m === "stars") return k.trace({ programs: [["cs-nested-loops/stars", "Triangle of stars"]], title: "An inner loop that grows", narr: stars, rows: rows(4) });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-nested-loops/count-grid", choices: ["7", "4", "3"], why: "The inner body runs 4 times for each of the 3 outer passes: 3 × 4 = 12. Counts multiply; they do not add." },
      { key: "cs-nested-loops/count-triangle", choices: ["16", "10", "4"], why: "<code>range(i)</code> gives 0, 1, 2, then 3 numbers as <code>i</code> goes 0 to 3, so the body runs 0 + 1 + 2 + 3 = 6 times." },
      { key: "cs-nested-loops/order", choices: ["0 0\n1 0\n0 1\n1 1\n0 2\n1 2", "0 1 2\n0 1 2"], why: "The inner loop finishes all of its values before the outer variable moves on, so <code>j</code> changes fastest, like the last digit of a counter." } ] });
  });
};

L["cs-functions"] = k => { CSKit.attach(k);
  const narr = by({
    "cs-functions/define-call": { 1: "<code>def</code> runs now, but only binds the name <code>greet</code> to a function object. The body is not run.",
      4: "The first line after the definition prints. Nothing has been greeted yet.",
      5: "A call: Python makes a new frame for <code>greet</code>.", "1c": s => `The new frame binds the parameter <code>name</code> to the argument, <code>${lv(k, s, "name")}</code>.`,
      2: s => `The body runs, using the local <code>name</code>, which is <code>${lv(k, s, "name")}</code>.`, "2r": "The body ends with no <code>return</code>, so the call gives back <code>None</code> and its frame is thrown away.",
      6: "A second call makes a fresh frame; the old <code>name</code> is gone.", 7: "Back in the main program.",
      end: "The body ran twice, once per call, and never when <code>def</code> ran." },
    "cs-functions/return-print": { 1: "Binds <code>square_print</code>; the body waits.", 4: "Binds <code>square_return</code>.",
      7: "Calls <code>square_print(4)</code>; whatever the call gives back will be bound to <code>a</code>.", "1c": "<code>x</code> is bound to 4 in the new frame.",
      2: "<code>print</code> shows 16 on the screen. That is output, not a value given back to the caller.", "2r": "No <code>return</code>: the call's value is <code>None</code>, so <code>a</code> is bound to <code>None</code>.",
      8: "Calls <code>square_return(4)</code>.", "4c": "<code>x</code> is bound to 4 in a new frame.", 5: "<code>return</code> evaluates <code>x * x</code> and ends the call at once.",
      "5r": "The return value 16 replaces the call, so <code>b</code> is bound to 16. Nothing was printed.", 9: "Prints both values.",
      end: "Printing shows a value to a person. Returning hands it to the code that made the call, which can store it or compute with it." },
    "cs-functions/nested-calls": { 1: "Binds <code>square</code>.", 4: "Binds <code>sum_squares</code>.", 7: "The argument of <code>print</code> is a call, so that call runs first.",
      "4c": "A frame for <code>sum_squares</code>, with <code>a</code> = 3 and <code>b</code> = 4.", 5: "To evaluate this line, Python must call <code>square</code> twice.",
      "1c": s => `A third frame stacks on top: <code>square</code> with <code>n</code> = ${lv(k, s, "n")}. <code>sum_squares</code> waits underneath.`,
      2: s => `Computes ${lv(k, s, "n")} × ${lv(k, s, "n")}.`, "2r": s => `Returns ${ret(k, s)}; the top frame is removed and <code>sum_squares</code> continues.`,
      "5r": "9 + 16 = 25 is returned to the main program.", end: "Frames form a stack: the newest call is on top and is always the first to finish." } });
  k.csModes([["define", "Define, then call"], ["return", "Return vs print"], ["predict", "Predict"]], m => {
    if (m === "define") return k.trace({ programs: [["cs-functions/define-call", "def and two calls"]], title: "def binds, a call runs", narr });
    if (m === "return") return k.trace({ programs: [["cs-functions/return-print", "print vs return"], ["cs-functions/nested-calls", "A call inside a call"]], title: "Return values", narr });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-functions/after-return", choices: ["never\n11", "10", "never\n10"], why: "<code>return</code> ends the call immediately, so the <code>print</code> after it never runs. The call's value is 10, and 10 + 1 = 11." },
      { key: "cs-functions/never-called", choices: ["in f\nbefore", "before\nin f"], why: "<code>def</code> only defines <code>f</code>. Nothing calls it, so its body never runs." },
      { key: "cs-functions/print-not-return", choices: ["5\n5", "5"], why: "<code>add</code> prints 5 but has no <code>return</code>, so the call's value is <code>None</code>, and that is what <code>total</code> holds." } ] });
  });
};

L["cs-scope"] = k => { CSKit.attach(k);
  const narr = by({
    "cs-scope/shadow": { 1: "A global <code>x</code>, bound to 10.", 3: "Binds the function <code>show</code>.", 7: "Calls <code>show</code>: a new, empty frame.",
      "3c": "The frame has no names yet.", 4: "This assignment creates a <b>local</b> <code>x</code> in the frame. The global <code>x</code> is not touched.",
      5: "Python looks up <code>x</code> in the local frame first and finds 99.", "5r": "The frame is thrown away, and its <code>x</code> with it.",
      8: "In the main program, <code>x</code> means the global one, still 10.", end: "Two different variables were both called <code>x</code>. The local one hid (shadowed) the global one only inside the call." },
    "cs-scope/read-global": { 1: "A global <code>rate</code>.", 3: "Binds <code>cost</code>.", 6: "Calls <code>cost(8)</code>.", "3c": "<code>n</code> is local, bound to 8.",
      4: "<code>rate</code> is not assigned anywhere in <code>cost</code>, so it is not local. Python finds it in the global scope.", "4r": "Returns 24.",
      end: "A function can read a global name it never assigns. Lookup goes local, then global, then built-in." },
    "cs-scope/params": { 1: "Binds <code>bump</code>.", 6: "A global <code>count</code>, bound to 5.", 7: "Calls <code>bump(count)</code>: the argument's value, 5, is passed.",
      "1c": "The parameter <code>n</code> is a new local name, bound to the same object 5. It is not another name for <code>count</code>.",
      2: "Rebinding <code>n</code> to 6 changes only the local name.", 3: "Inside the call, <code>n</code> is 6.",
      4: "Returns 6.", "4r": "The call's value is 6. The frame, and its <code>n</code>, are thrown away.", 8: "The returned 6 was not stored anywhere, and the global <code>count</code> is still 5.",
      9: "This time the return value is assigned back to <code>count</code>.", 10: "Now <code>count</code> is 6, because the caller rebound it.",
      end: "A function cannot rebind the caller's variable through a parameter. To change it, return the new value and assign it." },
    "cs-scope/unbound": { 1: "A global <code>total</code>, bound to 0.", 3: "Binds <code>add_one</code>. Python has already seen that the body assigns <code>total</code>, so <code>total</code> is local everywhere in it.",
      6: "Calls <code>add_one</code>.", "3c": "A new frame with no names.", 4: "To compute <code>total + 1</code>, Python looks up the local <code>total</code>, which has no value yet.",
      "4e": "UnboundLocalError: the global <code>total</code> is not used, because the name is local in this function.",
      "4r": "The exception ends the call. It returns nothing; its frame is dropped.", "6e": "Nothing catches the error, so the program stops here and line 7 never runs.",
      end: "Assigning to a name anywhere in a function makes that name local for the whole function, even on lines before the assignment." },
    "cs-scope/global-fix": { 1: "A global <code>total</code>, bound to 0.", 3: "Binds <code>add_one</code>.", 7: "First call.", 8: "Second call.",
      "3c": "A new frame.", 4: "<code>global total</code> tells Python that <code>total</code> in this function means the global name.",
      5: "So this line reads and rebinds the global <code>total</code>.", "5r": "The call ends; the global has changed.", 9: "Prints the global.",
      end: "With <code>global</code> the function changes the global variable. Returning a value is usually the clearer design." } });
  k.csModes([["shadow", "Local vs global"], ["params", "Parameters"], ["unbound", "UnboundLocalError"], ["predict", "Predict"]], m => {
    if (m === "shadow") return k.trace({ programs: [["cs-scope/shadow", "A local hides a global"], ["cs-scope/read-global", "Reading a global"]], title: "Which x?", narr });
    if (m === "params") return k.trace({ programs: [["cs-scope/params", "Rebinding a parameter"]], title: "Parameters are new names", narr });
    if (m === "unbound") return k.trace({ programs: [["cs-scope/unbound", "UnboundLocalError"], ["cs-scope/global-fix", "With global"]], title: "Assignment makes a name local", narr });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-scope/local-wins", choices: ["2 2", "1 1"], why: "The call returns its local <code>x</code>, 2. The global <code>x</code> is a different variable and is still 1." },
      { key: "cs-scope/change", choices: ["100", "None"], why: "<code>n = 100</code> rebinds the parameter, a local name. The global <code>n</code> is untouched and still 7." },
      { key: "cs-scope/tick", choices: ["0", "1"], why: "<code>global count</code> makes the assignment rebind the global name, so each of the two calls adds 1." } ] });
  });
};
})();
