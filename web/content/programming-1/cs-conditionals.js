window.ARITH = window.ARITH || {};
ARITH["cs-conditionals"] = {
  title: "Conditionals",
  short: "if, elif and else: choosing which block runs",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · conditionals",
  hero: `<code><span class="c1">if</span> score &gt;= 90: <span class="c2">grade</span> = "A"</code>`,
  lede: `A conditional lets a program choose. Python tests a condition, and the indented block under it runs only when the condition is true.`,
  plain: `<p>Until now every line of a program ran, top to bottom. An <b>if statement</b> makes some lines optional. It has a condition, such as <code>score &gt;= 90</code>, and an indented block of lines. If the condition is true, the block runs. If it is false, Python skips the block and carries on after it.</p>
<p>An <code>else</code> block gives the other choice: it runs exactly when the condition was false. Between them you can add any number of <code>elif</code> ("else if") tests. Python tries the tests from the top and runs the block of the <b>first</b> one that is true. The rest of the chain is skipped, even if their tests would also be true.</p>
<p>So the order of the tests matters. A grade program must test <code>score &gt;= 90</code> before <code>score &gt;= 80</code>, because 95 passes both and only the first match counts.</p>`,
  formal: `<pre class="code"><span class="c1">if</span> condition1:
    block1
<span class="c1">elif</span> condition2:
    block2
<span class="c1">else</span>:
    block3</pre>
<p><b>Rule.</b> Python evaluates <code>condition1</code>, then <code>condition2</code>, and so on, in order. The block of the first condition that is truthy runs, and no later condition is evaluated. If none is truthy, the <code>else</code> block runs; with no <code>else</code>, nothing runs. There may be any number of <code>elif</code> parts, and both <code>elif</code> and <code>else</code> are optional. So at most one block of a chain runs, and exactly one when there is an <code>else</code>.</p>
<p><b>Conditions and blocks.</b> A condition is any expression; Python uses its truth value, as <code>bool()</code> would (<code>0</code>, <code>""</code>, <code>[]</code> and <code>None</code> are falsy). A block is one or more statements indented under the line ending in <code>:</code>; a missing block is an <code>IndentationError</code>. Blocks may contain further <code>if</code> statements (<b>nesting</b>). Separate <code>if</code> statements are tested independently, so several of their blocks can run. The <b>conditional expression</b> <code>a if c else b</code> is a value: <code>a</code> when <code>c</code> is truthy, otherwise <code>b</code>.</p>`,
  legend: [
    { c: "c1", sym: `<code>elif x &gt; 0:</code>`, name: "Line about to run", desc: `The test or statement Python runs next. Skipped branches are never highlighted.` },
    { c: "c2", sym: `<code>grade</code>`, name: "Variable that just changed", desc: `The name the chosen block has just bound.` },
    { c: "c3", sym: `<code>grade B</code>`, name: "Output", desc: `What the program has printed so far, including echoed input.` }
  ],
  steps: { title: "How to trace an if/elif/else chain", items: [
    `Work out the value of each variable the conditions use. Convert input with <code>int()</code> first.`,
    `Evaluate the first condition. If it is true, run its block and skip to the line after the whole chain.`,
    `If it is false, move to the next <code>elif</code> and repeat. Do not evaluate any test below the first true one.`,
    `If every test was false, run the <code>else</code> block, or nothing if there is none.`,
    `Treat a new <code>if</code> at the same indentation as a new statement: it is tested whatever happened above.`
  ] },
  example: {
    prompt: `The user types 85. Trace the program and give its output.<pre class="code">score = <span class="c1">int</span>(<span class="c1">input</span>("score? "))
<span class="c1">if</span> score &gt;= 90:
    grade = "A"
<span class="c1">elif</span> score &gt;= 80:
    grade = "B"
<span class="c1">elif</span> score &gt;= 70:
    grade = "C"
<span class="c1">else</span>:
    grade = "F"
<span class="c1">print</span>("grade", grade)</pre>`,
    lines: [
      { math: `<code><span class="c2">score</span> = 85</code>`, note: "input returns the str '85' and int converts it to the int 85." },
      { math: `<code>85 &gt;= 90</code> → False`, note: "The first test fails, so its block is skipped." },
      { math: `<code>85 &gt;= 80</code> → True`, note: "The first elif is true, so its block runs." },
      { math: `<code><span class="c2">grade</span> = "B"</code>`, note: "The remaining elif and the else are skipped without being tested." },
      { math: `<code>print("grade", grade)</code>`, note: "This line is after the chain, so it runs for every score." }
    ],
    answer: `<pre class="code"><span class="out">score? 85</span>
<span class="out">grade B</span></pre>`
  },
  why: `<p>Almost every useful program reacts to its data: it rejects a bad password, charges shipping only below a threshold, or shows an error when a file is missing. Conditionals are how the code chooses. Bugs in them are common and subtle: tests in the wrong order, an <code>if</code> where an <code>elif</code> was meant, or a comparison between a string and a number. Tracing which branch runs, for a few chosen inputs, is the surest way to find them.</p>`,
  careers: [
    { role: "Backend developer", use: "Validates every request with if checks, returning a 400 error for a missing field before any data is saved." },
    { role: "Payroll and tax software developer", use: "Encodes tax brackets as if/elif chains ordered by income threshold, with tests at each boundary value." },
    { role: "Embedded firmware engineer", use: "Writes thermostat and motor control logic that switches outputs when a sensor reading crosses a threshold." },
    { role: "Game developer", use: "Branches on game state each frame: whether the player is on the ground, out of health, or touching an enemy." },
    { role: "Software test engineer", use: "Designs test inputs so that every branch of a conditional runs at least once, measured as branch coverage." },
    { role: "Data analyst", use: "Writes rules that sort records into categories, such as age bands or risk levels, before summarising them." }
  ],
  life: [
    "A thermostat turning the heating on below 19 degrees and off above 21",
    "A shop giving free shipping only when the order is over a set amount",
    "A vending machine refusing to drop a snack until enough money is in",
    "A streaming service hiding films above a profile's age rating",
    "A phone locking itself after too many wrong passcodes"
  ],
  fields: [
    { name: "Machine learning", use: "A decision tree is a learned chain of nested if tests on the input features." },
    { name: "Digital logic", use: "A multiplexer is a conditional in hardware: a select signal chooses which input reaches the output." },
    { name: "Formal logic", use: "If-then-else matches case analysis in proofs: show the claim holds in each case and the cases cover everything." },
    { name: "Economics", use: "Tax and benefit rules are piecewise schedules that programs implement as ordered conditions." }
  ],
  prereqWhy: {
    "cs-booleans": `Every condition is a Boolean expression: comparisons, chained tests like <code>0 &lt;= x &lt; 10</code>, <code>and</code>/<code>or</code>/<code>not</code>, and the truthiness of values such as <code>""</code> and <code>0</code>.`,
    "cs-io": `Conditional programs usually react to input, and <code>input()</code> returns a str. It must be converted with <code>int()</code> or <code>float()</code> before a numeric comparison, since <code>"85" &gt;= 90</code> is a <code>TypeError</code>.`
  },
  unlocksWhy: {
    "cs-while": `A while loop is an if that repeats: its condition is tested, the block runs if it is true, and then the test happens again.`,
    "cs-for": `Loop bodies often hold an if to filter or count, such as adding only the numbers divisible by 3.`
  },
  mathWhy: {
    "a1-piecewise": `An if/elif/else chain is a piecewise function in code. Each piece has a condition on the input, and <span class="m">|<i>x</i>|</span> is <code>-x if x &lt; 0 else x</code>. Python adds one rule maths avoids by making pieces disjoint: if two conditions overlap, the first one listed wins.`
  },
  beyond: [
    { field: "Computer Organisation", why: "An if compiles to a compare instruction and a conditional jump, and processors guess the outcome in advance with branch prediction." },
    { field: "Software Testing", why: "Branch coverage and boundary-value testing choose inputs on each side of every condition." },
    { field: "Programming Languages", why: "Python 3.10's match statement and other languages' pattern matching generalise if/elif chains to the shape of data." }
  ],
  mistakes: [
    { wrong: `Writing <code>if x = 5:</code> to test equality.`, fix: `<code>=</code> is assignment and is a <code>SyntaxError</code> in a condition. Use <code>==</code> to compare.` },
    { wrong: `Testing <code>score &gt;= 70</code> before <code>score &gt;= 90</code>.`, fix: `Only the first true branch runs, so 95 would get a C. Put the most restrictive test first.` },
    { wrong: `Writing <code>if x == 1 or 2:</code> to mean "x is 1 or 2".`, fix: `This is <code>(x == 1) or 2</code>, and <code>2</code> is truthy, so the test is always true. Write <code>x == 1 or x == 2</code>.` },
    { wrong: `Using two separate <code>if</code> statements where only one answer should be chosen.`, fix: `Separate ifs are each tested, so both can run. Join them with <code>elif</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">x = -4
<span class="c1">if</span> x &lt; 0:
    <span class="c1">print</span>("negative")
<span class="c1">else</span>:
    <span class="c1">print</span>("not negative")
<span class="c1">print</span>("end")</pre>`,
      a: `<pre class="code"><span class="out">negative</span>
<span class="out">end</span></pre><code>-4 &lt; 0</code> is True, so the first block runs and the <code>else</code> block is skipped. The last line is outside the if statement, so it runs either way.` },
    { q: `What does this print?<pre class="code">score = 95
<span class="c1">if</span> score &gt;= 70:
    <span class="c1">print</span>("C")
<span class="c1">elif</span> score &gt;= 80:
    <span class="c1">print</span>("B")
<span class="c1">elif</span> score &gt;= 90:
    <span class="c1">print</span>("A")</pre>`,
      a: `<pre class="code"><span class="out">C</span></pre><code>95 &gt;= 70</code> is already True, so Python runs that block and never tests the other two. The tests are in the wrong order for a grade program.` },
    { q: `What does this print?<pre class="code">t = 30
<span class="c1">if</span> t &gt; 25:
    <span class="c1">print</span>("hot")
<span class="c1">if</span> t &gt; 15:
    <span class="c1">print</span>("warm")
<span class="c1">else</span>:
    <span class="c1">print</span>("cold")</pre>`,
      a: `<pre class="code"><span class="out">hot</span>
<span class="out">warm</span></pre>There are two separate if statements. The first prints <code>hot</code>; the second is tested anyway, and <code>30 &gt; 15</code> is True. The <code>else</code> belongs only to the second if.` },
    { q: `The user types 1900. What does this print?<pre class="code">year = <span class="c1">int</span>(<span class="c1">input</span>("year? "))
<span class="c1">if</span> year % 4 == 0:
    <span class="c1">if</span> year % 100 == 0 <span class="c1">and</span> year % 400 != 0:
        <span class="c1">print</span>("common year")
    <span class="c1">else</span>:
        <span class="c1">print</span>("leap year")
<span class="c1">else</span>:
    <span class="c1">print</span>("common year")</pre>`,
      a: `<pre class="code"><span class="out">year? 1900</span>
<span class="out">common year</span></pre>1900 is divisible by 4, so Python enters the outer block. There, 1900 is divisible by 100 but not by 400, so the inner test is True. This is the Gregorian rule: 2000 is a leap year, 1900 is not.` }
  ],
  origin: `<p>FORTRAN (1957) had an "arithmetic IF" that jumped to one of three labelled lines depending on whether a number was negative, zero or positive. John McCarthy introduced conditional expressions in his work on Lisp in the late 1950s and argued for them in ALGOL, and ALGOL 60 made <code>if … then … else</code> a standard part of programming languages. Python's <code>elif</code> is short for "else if" and keeps long chains from drifting to the right.</p>`
};
