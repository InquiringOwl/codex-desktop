(function(){ const L = window.LABS;
// value of a global variable at a step, as Python shows it ("" if not yet bound)
const gv = (k, s, name) => { const v = s.f[0].vars[name]; return v ? k.CR.show(v, s.h) : ""; };
const comps = k => (s, i, T) => [{ label: "Comparisons", value: gv(k, s, "comps") || "0", note: "the comps counter: one per xs[…] test" }];

L["cs-lists"] = k => { CSKit.attach(k);
  k.csModes([["alias", "Alias or copy"], ["func", "In a function"], ["predict", "Predict"]], m => {
    if (m === "alias") return k.trace({ programs: [["cs-lists/alias", "ys = xs vs xs[:]"]], view: "memory", title: "Aliases and copies", narr: { "cs-lists/alias": {
      1: "Python builds one list object and binds <code>xs</code> to it.",
      2: "<code>ys = xs</code> copies nothing. It binds <code>ys</code> to the same list, so the two names are aliases.",
      3: "The slice <code>xs[:]</code> builds a new list with the same items, and <code>zs</code> is bound to that copy.",
      4: "<code>append</code> changes the list object itself. Both <code>xs</code> and <code>ys</code> refer to it, so both see the 4.",
      5: "<code>xs</code> shows the 4 even though the program never mentioned <code>xs</code> when it appended.",
      6: "The copy was made before the append, so <code>zs</code> is unchanged.",
      7: "<code>is</code> asks whether two names refer to one object: True for the alias, False for the copy.",
      end: "Assignment shares a list; <code>xs[:]</code> or <code>list(xs)</code> makes a new one." } } });
    if (m === "func") return k.trace({ programs: [["cs-lists/in-function", "append vs +"]], view: "memory", title: "Lists passed to functions", narr: (s, i, T) => { const fn = s.f.length ? s.f[s.f.length - 1].fn : "";
      if (s.ev === "call") return `Calling <code>${fn}</code> binds the parameter <code>xs</code> to the caller's list: one more arrow into the same box.`;
      if (s.ev === "return") return fn === "add_append" ? "<code>add_append</code> returns <code>None</code>. The list it mutated is the caller's, so <code>a</code> keeps the 4." : "<code>add_plus</code> returns <code>None</code>. Its local <code>xs</code> and the new list vanish with its frame; <code>b</code> never saw them.";
      return ({
      1: "<code>def</code> creates the function; its body runs only when it is called.", 4: "A second function, also not run yet.",
      7: "<code>a</code> refers to a new list.",
      8: "Call <code>add_append</code> with <code>a</code>.",
      2: "<code>xs.append(4)</code> mutates the shared list, so the change is visible through <code>a</code> after the call.",
      9: "<code>b</code> refers to another list with the same items.",
      10: "Call <code>add_plus</code> with <code>b</code>.",
      5: "<code>xs + [4]</code> builds a new list, and the assignment rebinds only the local name <code>xs</code>. The caller's list is not touched.",
      11: "<code>a</code> was changed in place by <code>append</code>.",
      12: "<code>b</code> is still <code>[1, 2, 3]</code>: the new list was dropped when the function returned.",
      end: "A function can change a list it is given by mutating it. Rebinding its parameter changes nothing outside." })[s.ev === "end" ? "end" : s.l]; } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-lists/append-none", choices: ["[3, 1, 2, 5]\n[3, 1, 2, 5]", "[3, 1, 2]\n[3, 1, 2, 5]"], why: "<code>append</code> changes <code>xs</code> in place and returns <code>None</code>, so <code>ys</code> is bound to <code>None</code>." },
      { key: "cs-lists/sort-sorted", choices: ["[1, 2, 3] [1, 2, 3]\n[1, 2, 3]", "[3, 1, 2] [1, 2, 3]\nNone"], why: "<code>sorted(xs)</code> returns a new sorted list and leaves <code>xs</code> alone. <code>xs.sort()</code> sorts <code>xs</code> itself." },
      { key: "cs-lists/shallow", choices: ["[[1], [2]]\n[[1, 9], [7]]", "[[1, 9], [7]]\n[[1, 9], [7]]"], why: "<code>a[:]</code> is a shallow copy: a new outer list holding the same inner lists. Appending to <code>b[0]</code> changes an inner list both share; <code>b[1] = [7]</code> replaces a slot only in <code>b</code>." } ] });
  });
};

L["cs-search-sort"] = k => { CSKit.attach(k);
  const lin = (s, i, T) => {
    const x = gv(k, s, "i"), v = x !== "" ? (k.CR.nums(T, i, "xs") || [])[+x] : null;
    if (s.ev === "end") return "Found at index 3 after 4 comparisons. A target not in the list would take all 5.";
    return { 1: "The list to search, in no particular order.", 2: "We look for the value 4.", 3: "<code>comps</code> counts how many items we compare with the target.",
      4: "<code>-1</code> means not found yet; it is never a valid index from the front.",
      5: "The loop visits the indices 0, 1, 2, … in order.", 6: "One more comparison is about to happen.",
      7: `Is <code>xs[${x}]</code>, which is ${v}, equal to 4? ${v === 4 ? "Yes." : "No, so move on."}`,
      8: `Remember the index ${x}.`, 9: "<code>break</code> stops the loop at the first match.", 10: "Prints the index and the count." }[s.l];
  };
  const sel = (s, i, T) => {
    const a = k.CR.nums(T, i, "xs") || [], I = gv(k, s, "i"), M = gv(k, s, "m"), J = gv(k, s, "j");
    if (s.ev === "end") return "Passes compared 4 + 3 + 2 + 1 = 10 pairs. Selection sort always makes that many on 5 items, sorted or not.";
    return { 1: "The unsorted list.", 2: "<code>comps</code> counts item comparisons.", 3: "Each pass puts the right value at index <code>i</code>. After the last-but-one pass the last item is in place too.",
      4: `Assume the smallest of <code>xs[${I}:]</code> is at index ${I} (marked <code>m</code>).`, 5: "<code>j</code> scans the rest of the unsorted part.",
      6: "One more comparison.", 7: `Is <code>xs[${J}]</code> = ${a[+J]} smaller than the smallest so far, <code>xs[${M}]</code> = ${a[+M]}?`,
      8: `Yes: the new smallest is at index ${J}.`, 9: `Swap the smallest, ${a[+M]}, into index ${I}. Everything left of <code>i</code> is now sorted.`, 10: "The list is sorted." }[s.l];
  };
  const ins = (s, i, T) => {
    const a = k.CR.nums(T, i, "xs") || [], I = gv(k, s, "i"), J = gv(k, s, "j"), K = gv(k, s, "key");
    if (s.ev === "end") return "8 comparisons, fewer than selection sort's 10: insertion sort stops each pass as soon as it finds a smaller or equal item.";
    return { 1: "The unsorted list.", 2: "<code>comps</code> counts item comparisons.", 3: "The items left of index <code>i</code> are already sorted. Each pass inserts <code>xs[i]</code> among them.",
      4: `Take out <code>key = xs[${I}]</code>, the value ${a[+I]}.`, 5: "<code>j</code> starts just left of the gap.",
      6: J === "-1" ? "<code>j</code> ran off the front: key is the smallest so far." : `<code>j = ${J}</code> is still a valid index, so compare.`, 7: "One more comparison.",
      8: `Is <code>xs[${J}]</code> = ${a[+J]} at most key = ${K}?`, 9: "Yes: key belongs right after it, so stop shifting.",
      10: `No: shift ${a[+J]} one place right. For a moment the value appears twice; key is safe in its own variable.`, 11: "Move left.",
      12: `Drop key = ${K} into the gap at index ${+J + 1}.`, 13: "The list is sorted." }[s.l];
  };
  k.csModes([["linear", "Linear search"], ["selection", "Selection sort"], ["insertion", "Insertion sort"]], m => {
    if (m === "linear") return k.trace({ programs: [["cs-search-sort/linear", "Find 4"]], view: "vars+bars", bars: { name: "xs", marks: { i: "c1" } }, title: "Linear search", narr: lin, rows: comps(k) });
    if (m === "selection") return k.trace({ programs: [["cs-search-sort/selection", "Selection sort"]], view: "vars+bars", bars: { name: "xs", marks: { i: "c1", m: "c2" } }, title: "Selection sort", narr: sel, rows: comps(k) });
    if (m === "insertion") return k.trace({ programs: [["cs-search-sort/insertion", "Insertion sort"]], view: "vars+bars", bars: { name: "xs", marks: { i: "c1", j: "c2" } }, title: "Insertion sort", narr: ins, rows: comps(k) });
  });
};

L["cs-dicts-sets"] = k => { CSKit.attach(k);
  const wc = (s, i, T) => {
    const w = gv(k, s, "w");
    if (s.ev === "end") return "Each distinct word became one key. The dict keeps keys in the order they were first inserted.";
    return { 1: "Six words, with repeats.", 2: "<code>{}</code> is an empty dict.", 3: "The loop takes each word in turn.",
      4: `Is ${w} already a key? <code>in</code> on a dict tests keys, not values.`, 5: `Seen before: add 1 to the count stored under ${w}.`,
      7: `New word: insert the key ${w} with count 1. Writing <code>counts[w] += 1</code> here would raise <code>KeyError</code>.`,
      8: "Keys print in insertion order.", 9: "<code>get</code> returns the default 0 for a missing key instead of raising <code>KeyError</code>." }[s.l];
  };
  k.csModes([["count", "Word count"], ["sets", "Set operations"], ["predict", "Predict"]], m => {
    if (m === "count") return k.trace({ programs: [["cs-dicts-sets/word-count", "Count words"]], view: "memory", title: "A dict of counts", narr: wc });
    if (m === "sets") return k.trace({ programs: [["cs-dicts-sets/set-ops", "Set operations"]], title: "Sets", narr: { "cs-dicts-sets/set-ops": {
      1: "A set holds each value at most once, so the repeated 3 and 2 vanish.", 2: "A second set.",
      3: "Three items remain.", 4: "<code>|</code> is union: everything in either set.", 5: "<code>&amp;</code> is intersection: only what is in both.",
      6: "<code>-</code> is difference: in <code>a</code> but not in <code>b</code>.", 7: "A list keeps duplicates and order.",
      8: "<code>set(nums)</code> drops the duplicates; <code>sorted</code> gives a list in a fixed order.",
      end: "A set has no order you can rely on, so sort it when the order of the output matters." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-dicts-sets/tuple-assign", choices: ["4\n(9, 2, 3)", "4\n(1, 2, 3)", "6"], why: "Unpacking a tuple into names is fine: <code>x + z</code> is 4. A tuple is immutable, so assigning to <code>t[0]</code> raises <code>TypeError</code>." },
      { key: "cs-dicts-sets/key-lookup", choices: ["None\nNone", "KeyError: 'cy'", "0\nNone"], why: "<code>get</code> returns <code>None</code> for a missing key. Square brackets raise <code>KeyError</code>." },
      { key: "cs-dicts-sets/list-key", choices: ["point\n{(1, 2): 'point', [3, 4]: 'list'}", "point"], why: "A tuple of ints is hashable, so it can be a key. A list is mutable and unhashable, so it cannot." } ] });
  });
};
})();
