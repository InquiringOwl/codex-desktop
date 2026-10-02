window.ARITH = window.ARITH || {};
ARITH["cs-booleans"] = {
  title: "Booleans and Comparisons",
  short: "True and False; comparisons, and, or, not, truthiness",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · booleans",
  hero: `<code><span class="c1">0 &lt; x &lt; 10</span> → <span class="c2">True</span></code>`,
  lede: `A comparison such as <code>x &gt; 3</code> asks a yes-or-no question, and its answer is a bool: <code>True</code> or <code>False</code>. The operators <code>and</code>, <code>or</code> and <code>not</code> combine these answers into larger tests.`,
  plain: `<p>Python has six comparison operators: <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>==</code> (equal) and <code>!=</code> (not equal). Each one gives <code>True</code> or <code>False</code>. Note the double <code>==</code>: a single <code>=</code> is assignment.</p>
<p>Comparisons can be chained as in maths. <code>0 &lt; x &lt; 10</code> is True when <code>x</code> is between 0 and 10.</p>
<p><code>a and b</code> is true only when both are true. <code>a or b</code> is true when at least one is. <code>not a</code> flips the answer. Python stops as soon as it knows the result: in <code>x != 0 and 10 / x &gt; 1</code>, if <code>x</code> is 0 the division is never done. This is called <b>short-circuit</b> evaluation.</p>
<p>Any value can be used as a test. Zero, empty text <code>""</code>, an empty list <code>[]</code> and <code>None</code> count as false; almost everything else counts as true. This is called <b>truthiness</b>.</p>`,
  formal: `<p><b>Comparisons.</b> <code>&lt; &lt;= &gt; &gt;= == !=</code> return a bool. Numbers compare by value across int and float (<code>1 == 1.0</code> is True); strings compare character by character by Unicode code point (<code>"Apple" &lt; "apple"</code>, since 65 &lt; 97). <code>==</code> between a str and an int is False, but an ordering such as <code>"1" &lt; 2</code> raises <code>TypeError</code>. A chain <code>a &lt; b &lt; c</code> means <code>a &lt; b and b &lt; c</code> with <code>b</code> evaluated once.</p>
<p><b>Logic.</b> <code>x and y</code>: if <code>x</code> is falsy the result is <code>x</code> and <code>y</code> is not evaluated; otherwise the result is <code>y</code>. <code>x or y</code>: if <code>x</code> is truthy the result is <code>x</code>; otherwise <code>y</code>. So <code>and</code> and <code>or</code> return an operand, not always a bool. <code>not x</code> always returns a bool. Precedence, highest first: arithmetic, comparisons, <code>not</code>, <code>and</code>, <code>or</code>.</p>
<pre class="code">3 and 4         <span class="out">4</span>
0 or "x"        <span class="out">'x'</span>
None and 1 / 0  <span class="out">None</span>
not []          <span class="out">True</span></pre>
<p><b>Truthiness.</b> <code>bool(v)</code> is False for <code>False</code>, <code>None</code>, <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>()</code>, <code>{}</code> and other empty containers, and True for every other built-in value. <code>bool</code> is a subtype of <code>int</code>: <code>True == 1</code> and <code>True + True</code> is 2.</p>`,
  legend: [
    { c: "c1", sym: `<code>x != 0 and …</code>`, name: "Line about to run", desc: `The test Python evaluates next, left to right, stopping as soon as the result is known.` },
    { c: "c2", sym: `<code>even = False</code>`, name: "Variable that just changed", desc: `A name just bound to the result of a test. It holds a bool, or for <code>and</code>/<code>or</code> whichever operand was returned.` },
    { c: "c3", sym: `<code>True False</code>`, name: "Output", desc: `What <code>print</code> showed, or the error a test raised when its right side did run.` }
  ],
  steps: { title: "How to evaluate a boolean expression", items: [
    `Do the arithmetic first, then each comparison, turning it into True or False.`,
    `For a chain such as <code>10 &lt;= x &lt; 20</code>, check each link; if one is False, the chain is False and the rest is skipped.`,
    `Apply <code>not</code>, then <code>and</code>, then <code>or</code>.`,
    `For <code>and</code>, look at the left operand: if it is falsy, that is the result and the right side never runs.`,
    `For <code>or</code>, look at the left operand: if it is truthy, that is the result and the right side never runs.`,
    `Otherwise the result is the right operand, whatever its type.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">x = 15
in_range = 10 &lt;= x &lt; 20
is_odd = x % 2 == 1
<span class="c1">print</span>(in_range, is_odd)
<span class="c1">print</span>(in_range <span class="c1">and not</span> is_odd)
<span class="c1">print</span>(x &gt; 100 <span class="c1">or</span> x == 15)</pre>`,
    lines: [
      { math: `<code><span class="c2">x</span> = 15</code>`, note: "An int." },
      { math: `<code><span class="c2">in_range</span> = True</code>`, note: "10 <= 15 is True and 15 < 20 is True, so the chain is True." },
      { math: `<code><span class="c2">is_odd</span> = True</code>`, note: "% goes before ==: 15 % 2 is 1, and 1 == 1 is True." },
      { math: `<code>True and not True</code> → <code>False</code>`, note: "not binds tighter than and, so this is True and False." },
      { math: `<code>False or True</code> → <code>True</code>`, note: "The left side is False, so or returns the right side." }
    ],
    answer: `<pre class="code"><span class="out">True True</span>
<span class="out">False</span>
<span class="out">True</span></pre>`
  },
  why: `<p>Every decision a program makes, in an <code>if</code> or a loop, is a boolean test. Writing the test correctly is where many bugs live: <code>=</code> for <code>==</code>, a range check with the wrong end, or a guard placed after the operation it was meant to protect. Short-circuit evaluation is what makes guards like <code>x != 0 and 10 / x &gt; 1</code> safe, and knowing that <code>or</code> returns an operand explains the common idiom <code>name or "guest"</code>.</p>`,
  careers: [
    { role: "Backend developer", use: "Writes permission checks such as user.is_admin or user.id == post.owner_id before allowing an action." },
    { role: "Data analyst", use: "Filters pandas rows with boolean masks such as (df.age >= 18) & (df.country == \"US\")." },
    { role: "Hardware design engineer", use: "Designs circuits from AND, OR and NOT gates that compute the same logic in silicon." },
    { role: "Security engineer", use: "Reviews authentication code for conditions that short-circuit past a check they should not skip." },
    { role: "Test automation engineer", use: "Writes assert statements whose comparisons decide whether a test passes." },
    { role: "Database developer", use: "Writes SQL WHERE clauses combining comparisons with AND, OR and NOT." }
  ],
  life: [
    "A search filter for flights under 300 and with no stops",
    "A thermostat that heats when the room is below the set temperature",
    "A shop that gives free delivery if the order is over 50 or you are a member",
    "A form that will not submit while a required field is empty",
    "An age check: at least 18 and under 65"
  ],
  fields: [
    { name: "Digital logic", use: "Builds and, or and not as gates and combines them into adders and memory." },
    { name: "Mathematical logic", use: "Studies propositions, truth tables and the laws such as De Morgan's that relate and, or and not." },
    { name: "Databases", use: "Evaluates boolean conditions on every row to answer a query." }
  ],
  prereqWhy: {
    "cs-variables": `Tests compare the values of variables and are often stored in variables, such as <code>even = x % 2 == 0</code>, so tracing names and values comes first.`,
    "cs-binary": `A bool holds one bit of information, and Python stores True and False as the ints 1 and 0, which is why <code>True + True</code> is 2.`
  },
  unlocksWhy: {
    "cs-conditionals": `An <code>if</code> statement runs its block only when its boolean test is truthy, so every conditional is built on a comparison or a combination of them.`
  },
  mathWhy: {
    "pa-inequalities": `A chained comparison is a compound inequality: <code>0 &lt; x &lt; 10</code> is <span class="m">0 &lt; <i>x</i> &lt; 10</span>, the numbers strictly between 0 and 10. <code>&lt;=</code> is <span class="m">≤</span>, so the endpoint is included.`
  },
  beyond: [
    { field: "Discrete Mathematics", why: "Propositional logic, truth tables and De Morgan's laws make boolean expressions precise." },
    { field: "Computer Organisation", why: "Logic gates compute and, or and not on bits in hardware." },
    { field: "Algorithms", why: "Comparisons are the basic step counted when analysing searching and sorting." }
  ],
  mistakes: [
    { wrong: `Writing <code>if x = 5:</code> to test equality.`, fix: `<code>=</code> is assignment and is a <code>SyntaxError</code> here. Use <code>==</code>.` },
    { wrong: `Writing <code>x == 1 or 2</code> to mean "x is 1 or 2".`, fix: `It means <code>(x == 1) or 2</code>, which is always truthy. Write <code>x == 1 or x == 2</code>.` },
    { wrong: `Putting the guard second: <code>10 / x &gt; 1 and x != 0</code>.`, fix: `The division runs first and raises <code>ZeroDivisionError</code> when <code>x</code> is 0. Put <code>x != 0</code> on the left of <code>and</code>.` },
    { wrong: `Expecting <code>bool("False")</code> or <code>bool("0")</code> to be False.`, fix: `Any non-empty string is truthy. Only the empty string <code>""</code> is falsy.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(5 == 5.0, 5 != 4, "Hi" == "hi")</pre>`, a: `<pre class="code"><span class="out">True True False</span></pre>An int and a float with the same value are equal. String comparison is case-sensitive.` },
    { q: `What does this print?<pre class="code">x = 12
<span class="c1">print</span>(0 &lt; x &lt; 10, 10 &lt;= x &lt;= 20)</pre>`, a: `<pre class="code"><span class="out">False True</span></pre>12 &lt; 10 fails, so the first chain is False. 10 ≤ 12 and 12 ≤ 20 both hold.` },
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(<span class="c1">bool</span>(0), <span class="c1">bool</span>(" "), <span class="c1">bool</span>([]), <span class="c1">bool</span>(None))</pre>`, a: `<pre class="code"><span class="out">False True False False</span></pre>0, the empty list and None are falsy. <code>" "</code> contains a space, so it is not empty and is truthy.` },
    { q: `What does this print, and where does it stop?<pre class="code">d = 0
<span class="c1">print</span>(d != 0 <span class="c1">and</span> 10 / d)
<span class="c1">print</span>("" <span class="c1">or</span> "none")
<span class="c1">print</span>(10 / d <span class="c1">or</span> "none")</pre>`, a: `<pre class="code"><span class="out">False</span>
<span class="out">none</span>
<span class="out">ZeroDivisionError: division by zero</span></pre><code>d != 0</code> is False, so <code>and</code> returns it without dividing. <code>""</code> is falsy, so <code>or</code> returns <code>"none"</code>. On the last line the division is the left operand, so it runs and raises the error.` }
  ]
};
