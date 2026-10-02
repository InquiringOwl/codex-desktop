window.ARITH = window.ARITH || {};
ARITH["cs-variables"] = {
  title: "Variables and Assignment",
  short: "Names bound to values; rebinding, updating and swapping",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · variables",
  hero: `<code><span class="c2">a</span>, <span class="c2">b</span> = <span class="c1">b, a</span></code>`,
  lede: `A variable is a name that refers to a value. An assignment statement works out the value on the right and then binds the name on the left to it, so later lines can use the value by name.`,
  plain: `<p>A program needs to remember values: a price, a count, a name typed by the user. In Python you give a value a name with <code>=</code>. After <code>price = 4</code>, the name <code>price</code> stands for 4 wherever you use it.</p>
<p>The <code>=</code> sign is not the equals sign of algebra. It is an instruction: work out the right side, then make the left name refer to the result. That is why <code>x = x + 1</code> makes sense in a program. It takes the old value of <code>x</code>, adds 1, and makes <code>x</code> refer to the new value.</p>
<p>A name can be given a new value at any time. This is called <b>rebinding</b>. The old value is not changed; the name just points somewhere else. If another name was given the old value earlier, it still has it.</p>
<p>To swap two values you must not lose one of them on the way. Either save one in a third name first, or let Python do both at once with <code>a, b = b, a</code>.</p>`,
  formal: `<p><b>Assignment.</b> The statement <code>name = expression</code> evaluates the expression to an object, then binds <code>name</code> to that object in the current namespace, creating the name if it is new. Assignment copies nothing: after <code>y = x</code>, both names refer to the same object, and <code>x is y</code> is True. Assigning to a name rebinds only that name.</p>
<pre class="code">x = 5
y = x
x = 7
<span class="c1">print</span>(x, y)     <span class="out">7 5</span></pre>
<p><b>Forms.</b> <code>x += 2</code> means <code>x = x + 2</code> for numbers and strings. In <code>a, b = b, a</code> the whole right side is evaluated first, as the tuple <code>(b, a)</code>, and then unpacked into the names on the left. <code>a = b = 0</code> binds both names to 0.</p>
<p><b>Names.</b> A name (identifier) is letters, digits and underscores, not starting with a digit, and not a keyword such as <code>class</code> or <code>if</code>. Names are case-sensitive: <code>cost</code> and <code>Cost</code> are different. Using a name that was never bound raises <code>NameError</code>; <code>1x = 3</code> and <code>3 = x</code> are syntax errors.</p>`,
  legend: [
    { c: "c1", sym: `<code>a, b = b, a</code>`, name: "Line about to run", desc: `The assignment Python runs next. The right side is evaluated before any name changes.` },
    { c: "c2", sym: `<code>a</code>`, name: "Variable that just changed", desc: `The name the last assignment created or rebound, with its new value.` },
    { c: "c3", sym: `<code>5 3</code>`, name: "Output", desc: `What <code>print</code> showed, the values the names had at that moment.` },
    { c: "c4", sym: `<code>y → 5</code>`, name: "References", desc: `In the Memory view, an arrow from a name to the object it is bound to. Two arrows can lead to one object.` }
  ],
  steps: { title: "How to trace assignments", items: [
    `Keep a table with one row per name and its current value.`,
    `For each assignment, evaluate the right side using the values in the table as they are now.`,
    `Then write the result next to the name on the left, crossing out the old value. Only that row changes.`,
    `For <code>a, b = b, a</code>, work out every value on the right first, then update all the names on the left.`,
    `For <code>print</code>, read the current values from the table.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">a = 3
b = 5
a, b = b, a
c = a + b
a = a * 2
<span class="c1">print</span>(a, b, c)</pre>`,
    lines: [
      { math: `<code><span class="c2">a</span> = 3</code>`, note: "The name a is bound to 3." },
      { math: `<code><span class="c2">b</span> = 5</code>`, note: "The name b is bound to 5." },
      { math: `<code><span class="c2">a</span> = 5, <span class="c2">b</span> = 3</code>`, note: "The right side (b, a) is (5, 3), worked out before either name changes." },
      { math: `<code><span class="c2">c</span> = 5 + 3 = 8</code>`, note: "c uses the swapped values." },
      { math: `<code><span class="c2">a</span> = 5 * 2 = 10</code>`, note: "The old value of a is used on the right, then a is rebound. c stays 8." }
    ],
    answer: `<pre class="code"><span class="out">10 3 8</span></pre>`
  },
  why: `<p>Every program larger than one line keeps its working values in variables. Most beginner bugs in the first weeks are assignment bugs: a value overwritten before it was used, a line run in the wrong order, or an expectation that changing one name changes another. Tracing a table of names and values is the skill that finds them, and the same model (names bound to objects) explains lists, functions and objects later in the course.</p>`,
  careers: [
    { role: "Software engineer", use: "Reads stack traces and debugger variable panes to find where a value was overwritten." },
    { role: "Data analyst", use: "Names intermediate results in a Jupyter notebook so each step of a cleaning pipeline can be checked." },
    { role: "Embedded systems engineer", use: "Tracks which variables hold sensor readings and which hold derived values in a control loop." },
    { role: "Quality assurance engineer", use: "Writes test scripts that store expected and actual values and compare them." },
    { role: "Game developer", use: "Keeps a player's score, health and position in variables updated every frame." },
    { role: "Site reliability engineer", use: "Writes Python automation scripts that store hostnames, counts and timeouts in named variables." }
  ],
  life: [
    "Writing a running total on paper and crossing out the old number each time you add",
    "Swapping two drinks between glasses with the help of a third glass",
    "A contact name in your phone that you point to a new number when a friend changes theirs",
    "Labelling a box so you can refer to it without opening it",
    "Updating a scoreboard after each point"
  ],
  fields: [
    { name: "Compilers", use: "Decide where each variable is stored and when its value is no longer needed." },
    { name: "Programming languages", use: "Compare binding models such as Python names, C memory cells and immutable bindings in functional languages." },
    { name: "Software testing", use: "Track the values of variables along each path through a program." }
  ],
  prereqWhy: {
    "cs-types": `An assignment binds a name to the value of an expression, so you need to evaluate expressions and know their types first.`
  },
  unlocksWhy: {
    "cs-booleans": `Comparisons and logical tests are usually stored in or made from variables, such as <code>even = x % 2 == 0</code>.`
  },
  mathWhy: {
    "pa-variables": `A program variable is like an algebra variable in that a letter stands for a number, but it holds one value at a time and can be rebound. <code>x = x + 1</code> is false as an equation and fine as an instruction.`,
    "pa-evaluate": `Evaluating the right side of an assignment is substituting the current values into an expression, exactly as in evaluating <span class="m">2<i>a</i> + <i>b</i></span> for <span class="m"><i>a</i> = 5, <i>b</i> = 3</span>.`
  },
  beyond: [
    { field: "Data Structures", why: "Aliasing, two names bound to one list, is the same binding rule applied to mutable objects." },
    { field: "Computer Organisation", why: "Shows how a compiled language maps variables onto registers and memory addresses." },
    { field: "Programming Languages", why: "Studies scope, binding time and immutability in different languages." }
  ],
  mistakes: [
    { wrong: `Swapping with <code>a = b</code> then <code>b = a</code>.`, fix: `After the first line both names are equal and the old value of <code>a</code> is lost. Use <code>a, b = b, a</code> or save one value in a third name first.` },
    { wrong: `Expecting <code>y</code> to change after <code>y = x</code> and then <code>x = 7</code>.`, fix: `Assignment rebinds only the name on the left. <code>y</code> still refers to the old value.` },
    { wrong: `Writing <code>3 = x</code> or <code>x + 1 = y</code>.`, fix: `The left side must be a name. Python raises a <code>SyntaxError</code>; write <code>x = 3</code> and <code>y = x + 1</code>.` },
    { wrong: `Typing <code>Cost</code> where the variable is <code>cost</code>.`, fix: `Names are case-sensitive, so Python raises <code>NameError: name 'Cost' is not defined</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">x = 4
x = x + 3
x += 1
<span class="c1">print</span>(x)</pre>`, a: `<pre class="code"><span class="out">8</span></pre>Each line uses the current value: 4 + 3 = 7, then <code>x += 1</code> means <code>x = x + 1</code>, giving 8.` },
    { q: `What does this print?<pre class="code">x = 5
y = x
x = 7
<span class="c1">print</span>(x, y)</pre>`, a: `<pre class="code"><span class="out">7 5</span></pre><code>y = x</code> binds <code>y</code> to the object 5. Rebinding <code>x</code> to 7 does not touch <code>y</code>.` },
    { q: `This was meant to swap <code>a</code> and <code>b</code>. What does it print, and how do you fix it?<pre class="code">a = 3
b = 5
a = b
b = a
<span class="c1">print</span>(a, b)</pre>`, a: `<pre class="code"><span class="out">5 5</span></pre>After <code>a = b</code> both names are 5 and the 3 is gone. Replace the two middle lines with <code>a, b = b, a</code>, which prints <code>5 3</code>.` },
    { q: `What happens when this runs?<pre class="code">price = 4
qty = 3
cost = price * qty
<span class="c1">print</span>(Cost)</pre>`, a: `<pre class="code"><span class="out">NameError: name 'Cost' is not defined</span></pre>The first three lines run and bind <code>cost</code> to 12, but <code>Cost</code> with a capital C is a different name that was never bound.` }
  ]
};
