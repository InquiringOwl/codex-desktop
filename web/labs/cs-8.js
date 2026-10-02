(function(){ const L = window.LABS;
L["cs-objects"] = k => { CSKit.attach(k);
  k.csModes([["memory", "Methods change state"], ["stack", "What a method call is"], ["inherit", "Inheritance"], ["predict", "Predict"]], m => {
    if (m === "memory") return k.trace({ programs: [["cs-objects/account", "BankAccount"]], view: "memory", title: "Two accounts, one class", narr: { "cs-objects/account": {
      1: "The class body defines two functions, <code>__init__</code> and <code>deposit</code>. They live in the class, not in each object.",
      9: "<code>BankAccount(\"Ana\")</code> builds an instance and <code>__init__</code> gives it its own <code>owner</code> and <code>balance</code>.",
      11: "<code>a.deposit(5)</code> runs <code>deposit</code> with <code>self</code> bound to the object <code>a</code> refers to.",
      7: "<code>self.balance += amount</code> rebinds the attribute on this one object. That is how a method changes state.",
      12: "Same method, different object: now <code>self</code> is Ben's account, so only Ben's balance moves.",
      end: "One class, two objects. Each method call changed only the object before the dot: Ana 5 + 2 = 7, Ben 3." } } });
    if (m === "stack") return k.trace({ programs: [["cs-objects/call", "acct.deposit(5)"]], title: "acct.deposit(5) is BankAccount.deposit(acct, 5)", narr: { "cs-objects/call": {
      9: "Calling the class makes the instance and runs <code>__init__</code> on it.",
      10: "Python looks up <code>deposit</code> on the object, finds it in the class, and calls it with <code>acct</code> as the first argument.",
      6: "Look at the frame: <code>self</code> refers to the same object as <code>acct</code>, and <code>amount</code> holds the argument.",
      7: "The return value goes back to the caller, where it is bound to the name on the left.",
      11: "This spells the same call out by hand: the function from the class, with the instance passed in as <code>self</code>.",
      end: "Both calls opened the same kind of frame. The second deposit saw the balance the first one left: 5, then 10." } } });
    if (m === "inherit") return k.trace({ programs: [["cs-objects/inherit", "Savings(BankAccount)"]], title: "A subclass overrides one method", narr: { "cs-objects/inherit": {
      8: "<code>class Savings(BankAccount):</code> makes a subclass. It defines only <code>month_end</code>; everything else comes from <code>BankAccount</code>.",
      14: "<code>Savings</code> has no <code>__init__</code> of its own, so Python finds the one in <code>BankAccount</code>.",
      15: "For a plain account, <code>month_end</code> is the base version: take a 1 fee.",
      16: "Python looks for <code>month_end</code> in the instance's class first. <code>Savings</code> has one, so that version runs.",
      10: "The override adds interest: <code>50 // 10</code> is 5.",
      11: "<code>super().month_end()</code> calls the parent's version on the same object, so the fee still applies.",
      end: "49 for the plain account, 50 + 5 - 1 = 54 for the savings account." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-objects/p-private", choices: ["0", "AttributeError: 'Account' object has no attribute '_balance'"], why: "A leading underscore is only a convention meaning 'internal, please do not touch'. Python does not stop code outside the class from changing it." },
      { key: "cs-objects/p-mro", choices: ["A A", "B B", "C A"], why: "<code>C</code> defines no <code>hi</code>, so Python looks in its parent <code>B</code> and stops at the first match." },
      { key: "cs-objects/p-shared", choices: ["[1] [2]", "[1] []", "[] []"], why: "<code>items = []</code> in the class body is one class attribute shared by every Bag. <code>append</code> changes that one list. Make it in <code>__init__</code> as <code>self.items = []</code>." } ] });
  });
};

L["cs-efficiency"] = k => { CSKit.attach(k);
  const count = (name, label, note) => (s, i, T) => [{ label, value: k.CR.watch(T, name)[i] || "0", c: "c2", note }];
  k.csModes([["linear", "Linear search"], ["pairs", "Nested loops"], ["predict", "Predict"]], m => {
    if (m === "linear") { const n = { 3: "A counter for the work we care about: comparisons of an item with the target.",
        5: "One more comparison is about to happen.", 6: "Is this item the target? 5 is not in the list, so the answer is always no.",
        end: "The target was missing, so every item was checked: the worst case. n comparisons for n items." };
      return k.trace({ programs: [["cs-efficiency/lin4", "n = 4"], ["cs-efficiency/lin8", "n = 8"], ["cs-efficiency/lin16", "n = 16"]], view: "vars+bars", bars: { name: "xs", marks: { i: "c1" } },
        title: "Double the list, double the work", narr: { "cs-efficiency/lin4": n, "cs-efficiency/lin8": n, "cs-efficiency/lin16": n }, rows: count("comps", "Comparisons", "xs[i] == target checks so far") }); }
    if (m === "pairs") return k.trace({ programs: [["cs-efficiency/pairs", "Every (i, j)"], ["cs-efficiency/half", "Only i < j"]], title: "Counting pairs", rows: count("steps", "Pairs counted", "times the inner body has run"), narr: {
      "cs-efficiency/pairs": { 3: "The outer loop runs n times.", 4: "For each i the inner loop starts again and runs n times.", 5: "Count one pair (i, j).",
        end: "n times n: 4 · 4 = 16. Double n and the count goes up four times." },
      "cs-efficiency/half": { 4: "The inner loop starts at <code>i + 1</code>, so each pair is met once and never with itself.", 5: "Count one pair with i &lt; j.",
        end: "3 + 2 + 1 + 0 = 6, which is n(n - 1)/2. About half of n², but it still grows like n²." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-efficiency/p-count", choices: ["10", "5", "20"], why: "The inner body runs 5 times for each of 5 outer passes: 5 · 5." },
      { key: "cs-efficiency/p-half", choices: ["25", "15", "20"], why: "Pairs with i &lt; j: 4 + 3 + 2 + 1 + 0 = 10, which is 5 · 4 / 2." },
      { key: "cs-efficiency/p-grow", choices: ["100 1024\n200 2048", "100 1024\n400 2048", "20 100\n40 400"], why: "Doubling n multiplies n² by 4, but it squares 2<sup>n</sup>: 1024 becomes 1024 · 1024." } ] });
  });
};

L["cs-modules"] = k => { CSKit.attach(k);
  k.csModes([["math", "import math"], ["random", "random.seed"], ["main", "__main__"], ["predict", "Predict"]], m => {
    if (m === "math") return k.trace({ programs: [["cs-modules/math", "math"]], title: "Using a module", narr: { "cs-modules/math": {
      1: "<code>import math</code> runs the math module once and binds the name <code>math</code> to it. The variable pane hides module objects.",
      3: "<code>math.pi</code> is a float stored in the module: 3.141592653589793.",
      4: "<code>math.sqrt</code> is a function in the module. It always returns a float, so 4.0.",
      6: "<code>math.floor</code> rounds down to the integer below, so -2.7 goes to -3, not -2.",
      end: "The dot reaches into the module: <code>math.name</code>." } } });
    if (m === "random") return k.trace({ programs: [["cs-modules/random", "seed(1)"]], title: "Repeatable random numbers", narr: { "cs-modules/random": {
      2: "<code>random.seed(1)</code> sets the generator to a fixed starting state.",
      3: "<code>randint(1, 6)</code> picks a whole number from 1 to 6, both ends included.",
      4: "The next call moves the generator on, so this number can differ.",
      5: "Seeding with 1 again puts the generator back where it started.",
      end: "After the same seed the same numbers come out: <code>c</code> equals <code>a</code>. Without a seed each run differs." } } });
    if (m === "main") return k.trace({ programs: [["cs-modules/main", "__name__"]], title: "if __name__ == \"__main__\"", narr: { "cs-modules/main": {
      4: "Every module has a name in <code>__name__</code>. A file run directly gets <code>\"__main__\"</code>.",
      5: "This is run directly, so the test is True. If another file imported this one, <code>__name__</code> would be the module's name and this block would be skipped.",
      end: "Put code that should run only when the file is the program under this test. The function stays importable." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-modules/p-from", choices: ["3 True", "3.0 True", "3 False"], why: "<code>sqrt</code> returns a float, and <code>sqrt(2) ** 2</code> is 2.0000000000000004, not exactly 2." },
      { key: "cs-modules/p-floor", choices: ["-1 -2 -1", "-2 -1 -2", "-1 -1 -1"], why: "<code>floor</code> goes down, <code>ceil</code> goes up, and <code>int</code> drops the fraction, moving toward zero." },
      { key: "cs-modules/p-seed", choices: ["False 1", "True 2", "False 7"], why: "The same seed gives the same sequence, so both draws are equal. The value itself only comes from running it." } ] });
  });
};
})();
