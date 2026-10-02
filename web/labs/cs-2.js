(function(){ const L = window.LABS;
L["cs-variables"] = k => { CSKit.attach(k);
  k.csModes([["swap", "Swap"], ["memory", "Memory"], ["predict", "Predict"]], m => {
    if (m === "swap") return k.trace({ programs: [["cs-variables/swap-temp", "With a temp"], ["cs-variables/swap-tuple", "Tuple assignment"]], title: "Swap two values", narr: {
      "cs-variables/swap-temp": { 1: "An assignment evaluates the right side, 3, and then binds the name <code>a</code> to that value.",
        3: "<code>temp</code> is bound to the value <code>a</code> has now, 3, so it is saved before <code>a</code> changes.",
        4: "<code>a</code> is rebound to 5. Without <code>temp</code>, the 3 would now be lost.",
        5: "<code>b</code> gets the 3 that <code>temp</code> saved.",
        end: "Three assignments swap the two values. The order of the lines matters." },
      "cs-variables/swap-tuple": { 3: "Python evaluates the whole right side first, the tuple <code>(5, 3)</code>, then unpacks it into <code>a</code> and <code>b</code>.",
        4: "Both names changed in one statement, so no temporary name was needed.",
        end: "Tuple assignment is the usual way to swap in Python." } } });
    if (m === "memory") return k.trace({ programs: [["cs-variables/rebind", "Rebinding"]], view: "memory", title: "Names and objects", narr: { "cs-variables/rebind": {
      1: "Python makes the int object 5 and binds the name <code>x</code> to it.",
      2: "<code>y = x</code> binds <code>y</code> to the same object <code>x</code> refers to. Nothing is copied and the two names are not linked.",
      3: "<code>is</code> asks whether two names refer to the same object. Right now they do.",
      4: "Assignment rebinds <code>x</code> to the object 7. The 5 is not changed, and <code>y</code> still refers to it.",
      5: "Now the names refer to different objects, so <code>x is y</code> is False.",
      end: "Assigning to one name never changes another name: <code>y</code> is still 5." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-variables/bad-swap", choices: ["5 3", "3 3", "3 5"], why: "After <code>a = b</code> both names are 5 and the 3 is gone, so <code>b = a</code> gives <code>b</code> 5 as well." },
      { key: "cs-variables/alias-math", choices: ["11 11", "1 11", "11 10"], why: "<code>a + 10</code> makes a new value, 11, and only <code>a</code> is rebound to it. <code>b</code> still refers to 1." },
      { key: "cs-variables/count", choices: ["2", "1", "0"], why: "The right side uses the old value: 0 + 1 = 1, then <code>count += 2</code> means <code>count = count + 2</code>, giving 3." } ] });
  });
};

L["cs-io"] = k => { CSKit.attach(k);
  k.csModes([["input", "Input"], ["format", "Formatting"], ["predict", "Predict"]], m => {
    if (m === "input") return k.trace({ programs: [["cs-io/inputs", "Input is text"]], title: "input() returns a str", narr: { "cs-io/inputs": {
      1: "<code>input</code> prints the prompt, waits for a line, and returns that line as a str: <code>'3'</code>, not 3.",
      3: "<code>+</code> on two strings joins them, so this prints 34, not 7.",
      4: "<code>type</code> confirms it: what <code>input</code> gives back is always a str.",
      5: "<code>int</code> converts the string <code>'3'</code> into the integer 3.",
      7: "Now both values are ints, so <code>+</code> adds them.",
      end: "Convert input with <code>int()</code> or <code>float()</code> before doing arithmetic with it." } } });
    if (m === "format") return k.trace({ programs: [["cs-io/fstrings", "f-strings and print"]], title: "Formatting output", narr: { "cs-io/fstrings": {
      3: "2.5 times 3 is the float 7.5.",
      4: "In an f-string Python evaluates each expression in braces. The spec <code>:.2f</code> shows it with exactly 2 digits after the point: 7.50.",
      5: "With no format spec, each value appears as <code>str()</code> would show it.",
      6: "<code>sep</code> replaces the single space that <code>print</code> puts between values.",
      7: "<code>end</code> replaces the newline <code>print</code> normally adds, so the next output continues on this line.",
      9: "0.125 is exactly halfway and rounds to the even digit, 0.12. 2.675 is stored in binary as a little less than 2.675, so it rounds down to 2.67.",
      end: "<code>:.2f</code> rounds the stored binary value, ties to even. That is why 2.675 does not become 2.68." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-io/join", choices: ["n? 5\n15\n15", "n? 5\n555\n555", "n? 5\n8\n15"], why: "<code>n</code> is the str <code>'5'</code>, and a str times 3 repeats it. After <code>int(n)</code> it is the number 5, and 5 · 3 = 15." },
      { key: "cs-io/format", choices: ["2.33 3 4", "2.3 3 4", "2.333 2 4"], why: "<code>:.2f</code> keeps 2 digits after the point. <code>round</code> sends a tie to the even integer: 2.5 goes to 2 and 3.5 goes to 4." },
      { key: "cs-io/sepend", choices: ["1 2 3\ndone", "1, 2, 3.done", "1, 2, 3, .\ndone"], why: "<code>sep</code> goes only between values, and <code>end</code> replaces the final newline. Here <code>end</code> itself ends with a newline, so done starts a new line." },
      { key: "cs-io/bad-int", choices: ["x? 2.5\n2", "x? 2.5\n2.5", "x? 2.5\n3"], why: "<code>int</code> on a string accepts only an integer literal. <code>'2.5'</code> is not one, so Python raises a <code>ValueError</code>. <code>int(float('2.5'))</code> would give 2." } ] });
  });
};

L["cs-booleans"] = k => { CSKit.attach(k);
  k.csModes([["compare", "Compare"], ["short", "Short-circuit"], ["predict", "Truthiness"]], m => {
    if (m === "compare") return k.trace({ programs: [["cs-booleans/compare", "Comparisons"]], title: "Comparisons and logic", narr: { "cs-booleans/compare": {
      2: "Each comparison evaluates to a bool, True or False. <code>==</code> tests equality; a single <code>=</code> would be assignment.",
      3: "A chain <code>0 &lt; x &lt; 10</code> means <code>0 &lt; x and x &lt; 10</code>, with <code>x</code> evaluated once.",
      4: "<code>10 &lt; x</code> is False, so the chain is False and <code>x &lt; 20</code> is never checked.",
      5: "Strings compare character by character by code point, so <code>'apple'</code> comes before <code>'banana'</code>.",
      6: "Equal numbers are equal across int and float. A str is never equal to an int, so <code>'1' == 1</code> is False, not an error.",
      7: "<code>%</code> binds tighter than <code>==</code>, so this is <code>(x % 2) == 0</code>: 1 == 0, False.",
      8: "<code>and</code> needs both sides true. The right side is False.",
      9: "<code>or</code> needs at least one side true. The left side is True.",
      10: "<code>not</code> flips a bool.",
      end: "Comparisons make bools, and <code>and</code>, <code>or</code>, <code>not</code> combine them." } } });
    if (m === "short") return k.trace({ programs: [["cs-booleans/short", "Short-circuit"]], title: "and / or stop early", narr: { "cs-booleans/short": {
      2: "<code>x != 0</code> is False, so <code>and</code> stops there and never evaluates <code>10 / x</code>. No division by zero happens.",
      3: "<code>safe</code> is False, the left operand that <code>and</code> stopped on.",
      5: "<code>''</code> is falsy, so <code>or</code> evaluates and returns its right operand, <code>'guest'</code>.",
      7: "<code>and</code> and <code>or</code> return one of their operands, not always a bool: <code>3 and 4</code> is 4, and <code>0 or None</code> is None.",
      8: "Here the order is reversed. <code>10 / x</code> runs first and raises <code>ZeroDivisionError</code> before <code>x != 0</code> is checked.",
      end: "Put the guard first: the right side of <code>and</code> runs only when the left side is truthy." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-booleans/truthy", choices: ["False False False False", "True True True False", "False True True False"], why: "Zero, <code>0.0</code>, the empty string and the empty list are falsy. Any non-empty string is truthy, even <code>'0'</code>." },
      { key: "cs-booleans/operands", choices: ["True False", "x 5", "True 0"], why: "0 is falsy, so <code>or</code> returns its right operand <code>'x'</code>. 5 is truthy, so <code>and</code> returns its right operand, 0." },
      { key: "cs-booleans/notop", choices: ["True True 2", "False False True", "True False True"], why: "<code>not 0</code> is True. <code>'False'</code> is a non-empty string, so it is truthy and <code>not</code> gives False. bool is a subtype of int with True equal to 1, so <code>True + True</code> is 2." } ] });
  });
};
})();
