window.ARITH = window.ARITH || {};
ARITH["cs-types"] = {
  title: "Values, Types and Expressions",
  short: "int, float, str and bool; operators and precedence",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · types",
  hero: `<code><span class="c1">7 / 2</span> → <span class="c2">3.5</span> &nbsp; <span class="c1">7 // 2</span> → <span class="c2">3</span></code>`,
  lede: `Every value in Python has a type, such as a whole number, a decimal number, text or true/false. An expression combines values with operators, and the types decide both what the operator does and the type of the answer.`,
  plain: `<p>Python keeps different kinds of values apart. <code>7</code> is an <b>int</b> (integer), <code>3.5</code> is a <b>float</b> (a number with a decimal point), <code>"7"</code> is a <b>str</b> (a string of text), and <code>True</code> and <code>False</code> are the two <b>bool</b> values. The built-in <code>type()</code> tells you which one you have.</p>
<p>An <b>expression</b> is anything Python can work out to a single value, like <code>2 + 3 * 4</code>. Python follows the same order of operations as algebra: powers first, then multiplication and division, then addition and subtraction.</p>
<p>Division comes in two kinds. <code>7 / 2</code> is ordinary division and gives <code>3.5</code>. <code>7 // 2</code> is <b>floor division</b>: it rounds down to <code>3</code>. <code>7 % 2</code> gives the remainder, <code>1</code>.</p>
<p>Floats are stored in binary, and most decimals, such as 0.1, have no exact binary form. So <code>0.1 + 0.2</code> is very slightly more than 0.3.</p>`,
  formal: `<p><b>Arithmetic.</b> For ints, <code>+ - * // % **</code> (with a non-negative exponent) give ints; <code>/</code> always gives a float. If either operand is a float, the result is a float. <code>a // b</code> is the floor of <span class="m"><i>a</i>/<i>b</i></span> and <code>a % b</code> satisfies <span class="m"><i>a</i> = <i>b</i>·(<i>a</i> // <i>b</i>) + <i>a</i> % <i>b</i></span>, with the remainder taking the sign of <i>b</i>. ints have arbitrary precision; floats are IEEE 754 doubles.</p>
<pre class="code">7 / 2      <span class="out">3.5</span>
7 // 2     <span class="out">3</span>
-7 // 2    <span class="out">-4</span>
-7 % 2     <span class="out">1</span>
2 ** 10    <span class="out">1024</span>
0.1 + 0.2  <span class="out">0.30000000000000004</span></pre>
<p><b>Precedence</b>, highest first: <code>**</code> (right to left), then unary <code>-</code>, then <code>* / // %</code>, then <code>+ -</code>; operators on one level group left to right. So <code>-2 ** 2</code> is <code>-4</code> and <code>2 ** 3 ** 2</code> is <code>512</code>.</p>
<p><b>Strings.</b> <code>str + str</code> joins, <code>str * int</code> repeats, and <code>int + str</code> raises <code>TypeError: unsupported operand type(s) for +: 'int' and 'str'</code>.</p>`,
  legend: [
    { c: "c1", sym: `<code>7 // 2</code>`, name: "Line about to run", desc: `The statement whose expression Python evaluates next.` },
    { c: "c2", sym: `<code>b</code>`, name: "Variable that just changed", desc: `The name just bound to the result. Its value shows the type: <code>3</code> is an int, <code>3.5</code> a float, <code>'34'</code> a str.` },
    { c: "c3", sym: `<code>&lt;class 'float'&gt;</code>`, name: "Output", desc: `What <code>print</code> showed, including the types reported by <code>type()</code>.` }
  ],
  steps: { title: "How to evaluate an expression the way Python does", items: [
    `Find the operator with the highest precedence: <code>**</code>, then unary minus, then <code>* / // %</code>, then <code>+ -</code>. Parentheses come before all of them.`,
    `Evaluate it, noting the type of the result: <code>/</code> always gives a float, and any float operand makes the result a float.`,
    `For <code>//</code>, round the true quotient down toward minus infinity, so −3.5 becomes −4. Then <code>%</code> is whatever makes <span class="m"><i>a</i> = <i>b</i>·<i>q</i> + <i>r</i></span> true.`,
    `Repeat, left to right on one level, until one value is left.`,
    `If an operator gets types it cannot combine, such as an int and a str with <code>+</code>, stop: Python raises a <code>TypeError</code>.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">a = 7 / 2
b = 7 // 2
c = 7 % 2
d = -7 // 2
e = 2 ** 10
f = 0.1 + 0.2
<span class="c1">print</span>(a, b, c, d, e)
<span class="c1">print</span>(<span class="c1">type</span>(a), <span class="c1">type</span>(b))
<span class="c1">print</span>(f, f == 0.3)
<span class="c1">print</span>(<span class="c1">type</span>("7"), <span class="c1">type</span>(True))</pre>`,
    lines: [
      { math: `<code><span class="c2">a</span> = 3.5</code>`, note: "True division always gives a float." },
      { math: `<code><span class="c2">b</span> = 3</code>, <code><span class="c2">c</span> = 1</code>`, note: "7 = 2 times 3 + 1: quotient 3, remainder 1, both ints." },
      { math: `<code><span class="c2">d</span> = -4</code>`, note: "-7 / 2 is -3.5, and floor division rounds down to -4." },
      { math: `<code><span class="c2">e</span> = 1024</code>`, note: "2 to the 10th power, still an int." },
      { math: `<code><span class="c2">f</span> = 0.30000000000000004</code>`, note: "0.1 and 0.2 are stored as nearby binary fractions, so the sum is not exactly 0.3." },
      { math: `<code>f == 0.3</code> → <code>False</code>`, note: "The two floats differ in the last bit." }
    ],
    answer: `<pre class="code"><span class="out">3.5 3 1 -4 1024</span>
<span class="out">&lt;class 'float'&gt; &lt;class 'int'&gt;</span>
<span class="out">0.30000000000000004 False</span>
<span class="out">&lt;class 'str'&gt; &lt;class 'bool'&gt;</span></pre>`
  },
  why: `<p>A program is only correct if each expression has the value and type you expect. Integer and true division, the sign of a floor-divided negative, and float rounding cause real bugs: an average that comes out as 3 instead of 3.5, an index that is off by one for negative inputs, or a comparison of money amounts that is never equal.</p>`,
  careers: [
    { role: "Data scientist", use: "Checks column types with pandas dtypes and converts strings like \"3.5\" to floats before computing averages." },
    { role: "Financial software developer", use: "Uses Python's decimal.Decimal or integer cents for money, because 0.1 + 0.2 is not exactly 0.3 in floats." },
    { role: "Backend engineer", use: "Validates that JSON fields have the right types and uses // and % to split totals into pages and remainders." },
    { role: "Computational scientist", use: "Compares floats with a tolerance such as math.isclose instead of == when checking simulation results." },
    { role: "Game programmer", use: "Uses % to wrap angles and positions around a range and // to turn pixel positions into grid cells." }
  ],
  life: [
    "Seeing a program print 0.30000000000000004 for 0.1 + 0.2",
    "Splitting 17 cookies among 5 people: 3 each with 2 left over",
    "Working out which day of the week it will be in 100 days with a remainder",
    "Noticing a form treat a phone number as text rather than as a number"
  ],
  fields: [
    { name: "Numerical analysis", use: "Studies rounding error in floating-point arithmetic and how to keep it small." },
    { name: "Data engineering", use: "Pipelines convert and check the type of every field when loading data." },
    { name: "Cryptography", use: "Relies on exact big-integer arithmetic with ** and % on numbers hundreds of digits long." }
  ],
  prereqWhy: {
    "cs-programs": `Evaluating an expression is what happens inside each statement as the interpreter runs it, and the traced programs here are read the same way, line by line.`
  },
  unlocksWhy: {
    "cs-variables": `An assignment evaluates an expression and binds a name to the resulting value, so its type decides what the variable holds.`,
    "cs-io": `<code>input</code> always returns a str, so reading a number means converting between the types met here with <code>int()</code> or <code>float()</code>.`
  },
  mathWhy: {
    "order-ops": `Python's precedence is the algebra order of operations: <code>**</code>, then <code>*</code> and the divisions, then <code>+</code> and <code>-</code>, with parentheses first. So <code>-2 ** 2</code> is −4, just as algebra's <span class="m">−2<sup>2</sup></span> means −4.`,
    "decimals": `Floats are decimals written in binary. Decimals like 0.1 that have no finite binary form are rounded, which is why <code>0.1 + 0.2</code> prints 0.30000000000000004.`,
    "integers": `Floor division and remainder on negative integers follow the number line: <code>-7 // 2</code> rounds −3.5 down to −4, and the remainder 1 makes <span class="m">−7 = 2·(−4) + 1</span>.`
  },
  beyond: [
    { field: "Computer Organisation", why: "The IEEE 754 float format explains exactly which decimals are stored exactly and which are rounded." },
    { field: "Programming Languages", why: "Type systems, static and dynamic, decide which operations are allowed on which values." },
    { field: "Numerical Methods", why: "Algorithms are designed to limit the growth of floating-point rounding error." }
  ],
  mistakes: [
    { wrong: `Expecting <code>7 / 2</code> to give 3 because both numbers are ints.`, fix: `In Python 3, <code>/</code> always gives a float: 3.5. Use <code>//</code> when you want the rounded-down integer.` },
    { wrong: `Thinking <code>-7 // 2</code> is −3 because the decimal part is dropped.`, fix: `Floor division rounds toward minus infinity, so it is −4. <code>int(-7 / 2)</code> is the one that truncates to −3.` },
    { wrong: `Testing <code>0.1 + 0.2 == 0.3</code> and expecting True.`, fix: `The sum is 0.30000000000000004, so the test is False. Compare floats with a tolerance, for example <code>abs(x - 0.3) &lt; 1e-9</code>.` },
    { wrong: `Writing <code>"Total: " + 5</code>.`, fix: `A str and an int cannot be added; Python raises <code>TypeError</code>. Convert first: <code>"Total: " + str(5)</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(2 + 3 * 4 ** 2)</pre>`, a: `<pre class="code"><span class="out">50</span></pre><code>**</code> first gives 16, then <code>*</code> gives 48, then 2 + 48 = 50. All ints, so no decimal point.` },
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(17 // 5, 17 % 5, 17 / 5)
<span class="c1">print</span>(<span class="c1">type</span>(10 / 5))</pre>`, a: `<pre class="code"><span class="out">3 2 3.4</span>
<span class="out">&lt;class 'float'&gt;</span></pre>17 = 5 · 3 + 2. True division gives a float even when it divides evenly: <code>10 / 5</code> is <code>2.0</code>.` },
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(-7 // 2, -7 % 2)
<span class="c1">print</span>(-2 ** 2, (-2) ** 2)</pre>`, a: `<pre class="code"><span class="out">-4 1</span>
<span class="out">-4 4</span></pre>−3.5 floors to −4, and the remainder is 1 because <span class="m">2·(−4) + 1 = −7</span>. <code>**</code> binds tighter than unary minus, so <code>-2 ** 2</code> is −(2²).` },
    { q: `What does this print, and where does it stop?<pre class="code">x = 3 + 4.0
s = "3" + "4"
r = "ab" * 3
<span class="c1">print</span>(x, s, r)
n = 3 + "4"</pre>`, a: `<pre class="code"><span class="out">7.0 34 ababab</span>
<span class="out">TypeError: unsupported operand type(s) for +: 'int' and 'str'</span></pre>An int plus a float is a float. Two strings join, and a string times an int repeats. The last line mixes an int and a str, so Python raises a <code>TypeError</code>.` }
  ]
};
