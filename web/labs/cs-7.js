(function(){ const L = window.LABS;
L["cs-2d-data"] = k => { CSKit.attach(k);
  k.csModes([["memory", "Memory"], ["sums", "Row and column sums"], ["predict", "Predict"]], m => {
    if (m === "memory") return k.trace({ programs: [["cs-2d-data/trap", "[[0] * 3] * 3"], ["cs-2d-data/comp", "Comprehension"]], view: "memory", title: "One row or three?", narr: {
      "cs-2d-data/trap": { 1: "<code>[0] * 3</code> makes one row. Multiplying the outer list by 3 repeats the reference to that row, not the row itself.",
        2: "Every slot of <code>grid</code> points to the same inner list, so this one change shows up in all three rows.",
        4: "<code>is</code> confirms it: <code>grid[0]</code> and <code>grid[1]</code> are the same object.",
        end: "Three references to one list. Changing a cell changes the whole column." },
      "cs-2d-data/comp": { 1: "The comprehension runs <code>[0] * 3</code> once for each <code>r</code>, so it builds three separate inner lists.",
        2: "Only row 0 is changed, because each row is its own object.",
        4: "The rows are different objects now, so <code>is</code> gives False.",
        end: "Build a grid with a comprehension (or a loop with <code>append</code>) so every row is new." } } });
    if (m === "sums") return k.trace({ programs: [["cs-2d-data/sums", "Sums"]], title: "Walk a grid both ways", narr: { "cs-2d-data/sums": {
      1: "A 2 by 3 table stored row by row: <code>grid[0]</code> is the first row, <code>[3, 1, 4]</code>.",
      2: "<code>len(grid)</code> is the number of rows, 2.",
      4: "<code>len(grid[0])</code> is the number of columns, 3. For a row sum the column index moves fastest.",
      5: "<code>grid[r][c]</code> means: take row <code>r</code>, then item <code>c</code> of that row.",
      7: "For column sums the loops swap: the outer loop picks a column and the inner loop walks down the rows.",
      10: "Same expression, <code>grid[r][c]</code>, but now <code>r</code> changes fastest, so it reads down one column.",
      end: "The order of the loops decides whether you read across rows or down columns." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-2d-data/p-trap", choices: ["[[0, 0], [7, 0]]", "[[7, 0], [0, 0]]", "[[0, 7], [0, 7]]"], why: "Both slots of <code>t</code> refer to the same inner list, so setting <code>t[1][0]</code> also changes what <code>t[0][0]</code> shows." },
      { key: "cs-2d-data/p-index", choices: ["2 6 2 3", "4 3 3 2", "4 2 2 3"], why: "The first index picks the row and the second the column: <code>g[1][0]</code> is 4 and <code>g[0][2]</code> is 3. There are 2 rows of 3 items." },
      { key: "cs-2d-data/p-row", choices: ["[[1, 2], [3, 4]]", "[[1, 2], [3, 4], 9]", "[[1, 2], [3, 4, 9]]"], why: "<code>row = m[0]</code> copies nothing. <code>row</code> and <code>m[0]</code> are one list, so <code>append</code> changes the table." } ] });
  });
};

L["cs-files"] = k => { CSKit.attach(k);
  k.csModes([["read", "Read lines"], ["except", "Exceptions"], ["predict", "Predict"]], m => {
    if (m === "read") return k.trace({ programs: [["cs-files/read", "scores.txt"]], title: "Read a file line by line", narr: { "cs-files/read": {
      2: "<code>open</code> returns a file object for reading. <code>with</code> closes it when the block ends, even after an error.",
      3: "Looping over a file gives one line per pass, as a str.",
      4: "<code>repr</code> shows what the line really holds: the digits and the newline at the end.",
      5: "<code>int</code> ignores spaces and the newline around the digits, so <code>int(' 85\\n')</code> is 85.",
      6: "The <code>with</code> block has ended, so the file is closed here.",
      end: "Each line keeps its newline. <code>int</code> and <code>float</code> skip it; for text use <code>line.strip()</code>." } } });
    if (m === "except") return k.trace({ programs: [["cs-files/skip", "Skip a bad line"], ["cs-files/missing", "Missing file"]], title: "try and except", narr: {
      "cs-files/skip": { 4: "The <code>try</code> block holds the line that might fail.",
        5: "<code>int('oops\\n')</code> cannot be read as a number, so Python raises <code>ValueError</code> and skips the rest of the <code>try</code> block.",
        6: "The raised exception is a <code>ValueError</code>, so this <code>except</code> clause handles it.",
        9: "<code>else</code> runs only when the <code>try</code> block raised nothing, so only good numbers are added.",
        end: "The bad line was reported and skipped, and the program carried on: 90 + 77 = 167." },
      "cs-files/missing": { 2: "Opening a file that does not exist for reading raises <code>FileNotFoundError</code>.",
        4: "<code>as e</code> binds the exception object, whose text names the file.",
        6: "<code>finally</code> runs whether or not an exception happened.",
        end: "The <code>print('opened')</code> line never ran: the exception jumped straight to <code>except</code>." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-files/p-order", choices: ["ok 7", "bad\ndone", "done\nok 7"], why: "No exception, so <code>except</code> is skipped, <code>else</code> runs, and <code>finally</code> runs last." },
      { key: "cs-files/p-write", choices: ["['b']", "['a']", "['a\\n', 'b\\n']"], why: "Mode <code>'w'</code> starts the file empty, and <code>'a'</code> adds to its end. <code>split()</code> splits on whitespace, newlines included." },
      { key: "cs-files/p-len", choices: ["3 3\n2 2", "4 4\n3 3", "3 2\n2 1"], why: "Each line ends with its newline, one extra character, which <code>strip()</code> removes." } ] });
  });
};

L["cs-classes"] = k => { CSKit.attach(k);
  k.csModes([["memory", "Two points"], ["init", "__init__ and self"], ["predict", "Predict"]], m => {
    if (m === "memory") return k.trace({ programs: [["cs-classes/points", "Point"]], view: "memory", title: "One class, two objects", narr: { "cs-classes/points": {
      1: "The <code>class</code> statement runs its body and binds <code>Point</code> to a new class object.",
      3: "<code>self</code> is the new instance. This line gives that object its own attribute <code>x</code>.",
      6: "Calling <code>Point(1, 2)</code> makes an empty instance, runs <code>__init__</code> on it, and returns it. <code>p</code> refers to that object.",
      7: "A second call makes a second, separate instance with its own <code>x</code> and <code>y</code>.",
      8: "Assigning to <code>p.x</code> changes only the object <code>p</code> refers to.",
      end: "Both objects were made by one class, but each keeps its own attributes." } } });
    if (m === "init") return k.trace({ programs: [["cs-classes/init", "Point.dist2"]], title: "Calls into a class", narr: { "cs-classes/init": {
      2: "Inside <code>__init__</code>, <code>self</code> is bound to the instance being built and <code>x</code>, <code>y</code> to the arguments 3 and 4.",
      4: "<code>__init__</code> returns None. The call <code>Point(3, 4)</code> still evaluates to the instance.",
      6: "A method is a function in the class. Python passes the instance as its first argument, <code>self</code>.",
      7: "<code>self.x</code> and <code>self.y</code> look up the attributes of this instance: 9 + 16.",
      9: "<code>p</code> is now bound to the new Point.",
      10: "<code>p.dist2()</code> runs as <code>Point.dist2(p)</code>, so <code>self</code> is <code>p</code>.",
      end: "<code>self</code> is an ordinary parameter. Python fills it with the object before the dot." } } });
    if (m === "predict") return k.predict({ items: [
      { key: "cs-classes/p-classattr", choices: ["wolf wolf wolf", "wolf wolf canine", "canine canine canine"], why: "<code>a.kind = 'wolf'</code> makes an instance attribute on <code>a</code> only. <code>b</code> and the class still find the class attribute." },
      { key: "cs-classes/p-alias", choices: ["1 5", "5 1", "1 1"], why: "<code>q = p</code> binds a second name to the same object. Only one Point exists." },
      { key: "cs-classes/p-noself", choices: ["3", "None", "0"], why: "<code>n = n</code> rebinds the local parameter. Without <code>self.n</code> the instance never gets an attribute <code>n</code>." } ] });
  });
};
})();
