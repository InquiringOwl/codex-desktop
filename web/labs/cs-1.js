(function(){ const L = window.LABS;
L["cs-programs"] = k => { CSKit.attach(k);
  k.csModes([["hello", "Run"], ["error", "Error"], ["predict", "Predict"]], m => {
    if (m === "hello") return k.trace({ programs: [["cs-programs/hello", "Hello"]], title: "Run a program", narr: { "cs-programs/hello": {
      2: "Line 1 is a comment, so Python never runs it. The first statement is this call to <code>print</code>.",
      3: "Each <code>print</code> writes one line of output and then Python moves to the next line down.",
      4: "Python evaluates <code>2 + 3</code> first, then prints the result, <code>5</code>, not the text of the expression.",
      end: "Three statements ran in order, top to bottom, and the program ended normally." } } });
    if (m === "error") return k.trace({ programs: [["cs-programs/error", "NameError"]], title: "A runtime error", narr: { "cs-programs/error": {
      1: "The program starts running. Nothing has been checked except the syntax.",
      2: "This assignment binds the name <code>total</code> to 10.",
      3: "<code>total</code> exists, so its value prints.",
      4: "<code>totl</code> is a typo. No name <code>totl</code> exists, so Python raises a <code>NameError</code> here.",
      end: "The error stopped the program. Lines 1 to 3 had already run and printed; line 5 never ran." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-programs/order", choices: ["first\nsecond\nthird\n2", "first\nthird\n1 + 1", "third\nfirst\n2"], why: "Lines run top to bottom, the commented line is skipped, and <code>print(1 + 1)</code> prints the value 2." },
      { key: "cs-programs/crash", choices: ["A\nB\nC", "A\nC", "NameError: name 'B' is not defined"], why: "<code>B</code> has no quotes, so it is a name, and no such name exists. <code>A</code> was already printed; the error stops the program before <code>C</code>." } ] });
  });
};

L["cs-binary"] = k => { CSKit.attach(k);
  const sum = bits => bits.split("").map((b, j) => b === "1" ? 2 ** (bits.length - 1 - j) : 0).filter(x => x).join(" + ") || "0";
  k.csModes([["unsigned", "Unsigned"], ["signed", "Signed"], ["python", "In Python"]], m => {
    if (m === "unsigned") return k.bits({ width: 8, value: 13, extra: (v, b) => [{ label: "place values", value: sum(b) }, { label: "range", value: "0 … 255" }] });
    if (m === "signed") return k.bits({ width: 8, signed: true, value: -3, extra: (v, b) => [{ label: "top bit", value: b[0] === "1" ? "−128 (negative)" : "0 (not negative)" }, { label: "range", value: "−128 … 127" }] });
    if (m === "python") return k.trace({ programs: [["cs-binary/bases", "Bases"], ["cs-binary/text", "Text"]], title: "Bits in Python", narr: {
      "cs-binary/bases": { 2: "<code>bin</code> returns a string: <code>0b</code> and the binary digits of 13 = 8 + 4 + 1.",
        4: "<code>int</code> with base 2 reads the string as binary digits and gives back the integer 13.",
        6: "<code>hex(255)</code> is <code>'0xff'</code>: 255 = 15·16 + 15, and f is the hex digit for 15.",
        8: "<code>0xFF</code> and <code>0b11111111</code> are just other ways to type the int 255.",
        end: "One value, three spellings: decimal, binary and hexadecimal." },
      "cs-binary/text": { 1: "<code>ord</code> gives the Unicode code point of a character: A is 65.",
        3: "<code>encode()</code> turns the text into bytes using UTF-8. The code point of é is 233, too big for one byte.",
        5: "The string has one character, but its UTF-8 encoding has two bytes.",
        6: "<code>list</code> of a bytes object shows each byte as an int: 0xC3 = 195 and 0xA9 = 169.",
        end: "Text is stored as numbers: code points, then bytes." } } });
  });
};

L["cs-types"] = k => { CSKit.attach(k);
  k.csModes([["types", "Types"], ["mixed", "Mixing"], ["predict", "Predict"]], m => {
    if (m === "types") return k.trace({ programs: [["cs-types/types", "Arithmetic"]], title: "Expressions and types", narr: { "cs-types/types": {
      1: "<code>/</code> is true division and always gives a float, even when it divides evenly.",
      2: "<code>//</code> is floor division: two ints give the int 3.",
      3: "<code>%</code> gives the remainder that goes with <code>//</code>: 7 = 2·3 + 1.",
      4: "Floor division rounds down, toward minus infinity, so <code>-7 // 2</code> is −4, not −3.",
      5: "<code>**</code> is exponentiation. Python ints have no size limit.",
      6: "0.1 and 0.2 have no exact binary form, so the float sum is slightly off.",
      9: "The tiny error makes <code>f == 0.3</code> False.",
      end: "Every value has a type, and the operator and the types decide the type of the result." } } });
    if (m === "mixed") return k.trace({ programs: [["cs-types/mixed", "Mixing types"]], title: "Mixing types", narr: { "cs-types/mixed": {
      1: "An int plus a float: Python converts 3 to 3.0, so the result is the float 7.0.",
      2: "<code>+</code> on two strings joins them: <code>'34'</code>, not 7.",
      3: "A string times an int repeats the string.",
      5: "An int plus a str has no meaning, so Python raises a <code>TypeError</code>.",
      end: "Python never guesses: mixing int and str is an error until you convert one of them." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-types/prec", choices: ["400", "162", "50.0"], why: "<code>**</code> goes first (16), then <code>*</code> (48), then <code>+</code>: 2 + 48 = 50, an int." },
      { key: "cs-types/floor", choices: ["-3 1", "-4 -1", "-3 -1"], why: "<code>-7 // 2</code> rounds −3.5 down to −4, and the remainder then has to be 1, since −7 = 2·(−4) + 1." },
      { key: "cs-types/negpow", choices: ["4 4", "-4 -4", "4 -4"], why: "<code>**</code> binds tighter than unary minus, so <code>-2 ** 2</code> means −(2²) = −4. The parentheses give (−2)² = 4." } ] });
  });
};
})();
