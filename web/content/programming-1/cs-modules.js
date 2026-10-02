window.ARITH = window.ARITH || {};
ARITH["cs-modules"] = {
  title: "Modules and Libraries",
  short: "import, math, random with a seed, __name__",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · modules",
  hero: `<code><span class="c1">import</span> <span class="c4">math</span></code>`,
  lede: `A <b>module</b> is a file of Python code you can reuse. <code>import</code> runs that file once and gives you a name for it, so <code>math.sqrt</code> means "the sqrt function from the math module".`,
  plain: `<p>You do not have to write everything yourself. Python ships with a <b>standard library</b> of modules: <code>math</code> for square roots and pi, <code>random</code> for random numbers, <code>csv</code> and <code>json</code> for data files, and many more. Thousands more libraries can be installed with <code>pip</code>.</p>
<p>To use a module, import it at the top of your file. <code>import math</code> makes the name <code>math</code>, and a dot reaches inside it: <code>math.pi</code>, <code>math.floor(2.7)</code>. If you only need one or two names, <code>from math import sqrt</code> brings <code>sqrt</code> in directly.</p>
<p>Random numbers from a computer are produced by a formula that starts from a <b>seed</b>. Set the same seed with <code>random.seed(1)</code> and you get the same numbers every run, which makes testing possible.</p>
<p>Any <code>.py</code> file you write is a module too. The test <code>if __name__ == "__main__":</code> lets a file run its main code when you run it, but stay quiet when another file imports it for its functions.</p>`,
  formal: `<p><b>import.</b> <code>import m</code> finds module <code>m</code>, runs its code once in a fresh namespace, stores the module object in <code>sys.modules</code> and binds the name <code>m</code> to it. A second <code>import m</code> reuses the stored module and does not run it again. <code>import m as k</code> binds the name <code>k</code> instead. <code>from m import a, b</code> runs <code>m</code> the same way but binds only <code>a</code> and <code>b</code>; the name <code>m</code> itself is not defined.</p>
<p><b>math and random.</b> <code>math.sqrt(x)</code> returns a float; <code>math.floor</code> and <code>math.ceil</code> round down and up to an int; <code>math.pi</code> is a float. <code>random.randint(a, b)</code> returns an int with <span class="m">a ≤ n ≤ b</span>; <code>random.seed(s)</code> resets the generator, so the same seed gives the same sequence on the same Python version.</p>
<p><b>__name__.</b> Each module has a global <code>__name__</code>. It is <code>"__main__"</code> in the file Python was started with and the module's own name (such as <code>"helper"</code>) when the file is imported.</p>`,
  legend: [
    { c: "c1", sym: `<code>import math</code>`, name: "Line about to run", desc: "The statement Python runs next. An import line runs the module the first time." },
    { c: "c2", sym: `<code>roll</code>`, name: "Variable that just changed", desc: "A name bound to a value a module function returned." },
    { c: "c3", sym: `<code>7.0 3</code>`, name: "Output", desc: "What <code>print</code> writes." },
    { c: "c4", sym: `<code>math</code>`, name: "References and objects", desc: "A module is an object; <code>math.</code> reaches the names inside it. The lab's variable pane hides module objects." },
    { c: "c5", sym: `<code>math.sqrt(49)</code>`, name: "Return value", desc: "The value a library function hands back, here 7.0." }
  ],
  steps: { title: "How to use a module", items: [
    "Put your <code>import</code> lines at the top of the file.",
    "Use <code>import math</code> and write <code>math.name</code>, so readers can see where each name comes from.",
    "Use <code>from math import sqrt</code> only for a few names you use often.",
    "Read the module's documentation for what each function returns, such as a float from <code>sqrt</code>.",
    "Call <code>random.seed(…)</code> once at the start when you need repeatable results.",
    "In your own files, put the code that runs the program under <code>if __name__ == \"__main__\":</code>."
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">import math
import random

random.seed(3)
roll = random.randint(1, 6)
<span class="c1">print</span>(math.sqrt(49), math.floor(3.99))
<span class="c1">print</span>(roll, math.pi &gt; 3)</pre>`,
    lines: [
      { math: `<code><span class="c4">math</span></code>, <code><span class="c4">random</span></code> = module objects`, note: "Each import runs the module once and binds its name." },
      { math: `<code>random.seed(3)</code>`, note: "The generator starts from a fixed state, so the next number is the same every run." },
      { math: `<code><span class="c2">roll</span> = 2</code>`, note: "With seed 3, the first randint(1, 6) is 2. This value comes from running the code." },
      { math: `<code>math.sqrt(49)</code> = <code><span class="c5">7.0</span></code>`, note: "sqrt always returns a float." },
      { math: `<code>math.floor(3.99)</code> = <code><span class="c5">3</span></code>`, note: "floor rounds down to an int." },
      { math: `<code><span class="c3">7.0 3</span></code>`, note: "The first line of output." },
      { math: `<code>math.pi &gt; 3</code> is True`, note: "pi is about 3.14159." },
      { math: `<code><span class="c3">2 True</span></code>`, note: "The second line of output." }
    ],
    answer: `<pre class="code"><span class="out">7.0 3</span>
<span class="out">2 True</span></pre>`
  },
  why: `<p>Real programs are mostly other people's code. Knowing how <code>import</code> works lets you use the standard library and installed packages, split your own program into files, and share functions between projects. Seeding random numbers is how simulations, games and tests become repeatable, and the <code>__main__</code> test is in almost every Python script you will read.</p>`,
  careers: [
    { role: "Data scientist", use: "Imports pandas, NumPy and matplotlib at the top of every notebook, and sets a random seed so a train and test split can be reproduced." },
    { role: "Python library maintainer", use: "Organises a package into modules, decides what each one exports, and publishes it to PyPI." },
    { role: "DevOps engineer", use: "Writes command-line tools whose main function runs under if __name__ == \"__main__\" so the same file can be imported by tests." },
    { role: "Game developer", use: "Seeds the random module so a procedurally generated level can be rebuilt from its seed." },
    { role: "Scientific programmer", use: "Uses math and SciPy functions instead of hand-written formulas, and records the seed of every Monte Carlo run." },
    { role: "Security engineer", use: "Checks that tokens are made with the secrets module, because random is predictable once its seed is known." }
  ],
  life: [
    "Borrowing a recipe book instead of inventing every dish",
    "A toolbox where each drawer holds one kind of tool",
    "A board game that comes with the same shuffled deck when you use the same deal number",
    "A chapter of a book that can also be read on its own",
    "Plugging in an appliance instead of building your own power plant"
  ],
  fields: [
    { name: "Software engineering", use: "Large systems are split into modules and packages with clear interfaces between them." },
    { name: "Data science", use: "Work is built from libraries such as NumPy, pandas and scikit-learn." },
    { name: "Simulation", use: "Seeded pseudo-random numbers make Monte Carlo experiments repeatable." },
    { name: "Security", use: "The difference between predictable random and cryptographic randomness decides whether keys can be guessed." }
  ],
  prereqWhy: {
    "cs-files": "A module is a Python file that <code>import</code> finds and runs, and modules such as <code>csv</code> and <code>json</code> are the usual way to read the data files you have been opening.",
    "cs-2d-data": "Tables of numbers are where libraries pay off: <code>csv</code> reads them, and packages like NumPy work on whole grids at once."
  },
  beyond: [
    { field: "Software Engineering", why: "Packages, dependency management and virtual environments organise the modules a project uses." },
    { field: "Data Science", why: "Nearly every analysis is written on top of imported libraries." },
    { field: "Modelling and Simulation", why: "Pseudo-random number generators and their seeds are studied for quality and reproducibility." }
  ],
  mistakes: [
    { wrong: "Calling <code>sqrt(16)</code> after <code>import math</code>.", fix: "<code>import math</code> binds only the name <code>math</code>. Write <code>math.sqrt(16)</code>, or use <code>from math import sqrt</code>." },
    { wrong: "Naming your own file <code>random.py</code> or <code>math.py</code>.", fix: "Python finds your file first, so <code>import random</code> imports it instead of the library. Rename it." },
    { wrong: "Calling <code>random.seed(1)</code> inside a loop before each <code>randint</code>.", fix: "Every draw restarts from the same state, so you get the same number every time. Seed once, at the start." },
    { wrong: "Expecting <code>math.floor(-2.7)</code> to be -2.", fix: "floor rounds down, towards minus infinity, so it is -3. <code>int(-2.7)</code> is the one that goes towards zero." }
  ],
  practice: [
    { q: `What does this print?<pre class="code">from math import sqrt, pi
<span class="c1">print</span>(sqrt(25), round(pi, 3))</pre>`, a: `<pre class="code"><span class="out">5.0 3.142</span></pre><code>from math import</code> binds <code>sqrt</code> and <code>pi</code> directly, so no <code>math.</code> is needed. <code>sqrt</code> returns a float.` },
    { q: `What does this print?<pre class="code">import math as m
<span class="c1">print</span>(m.ceil(2.1), m.floor(-0.5), m.ceil(-0.5))</pre>`, a: `<pre class="code"><span class="out">3 -1 0</span></pre><code>as m</code> binds the module to the name <code>m</code>. ceil goes up to 3 and to 0; floor goes down to -1.` },
    { q: `What happens when this runs?<pre class="code">import math
<span class="c1">print</span>(math.sqrt(16))
<span class="c1">print</span>(sqrt(16))</pre>`, a: `<pre class="code"><span class="out">4.0</span>
<span class="out">NameError: name 'sqrt' is not defined</span></pre>The first line works. <code>import math</code> did not create the name <code>sqrt</code>, so the second call fails.` },
    { q: `What does this print?<pre class="code">import random

random.seed(7)
first = [random.randint(1, 10) for _ in range(4)]
random.seed(7)
again = [random.randint(1, 10) for _ in range(4)]
<span class="c1">print</span>(first)
<span class="c1">print</span>(first == again)</pre>`, a: `<pre class="code"><span class="out">[6, 3, 7, 1]</span>
<span class="out">True</span></pre>The numbers themselves can only be found by running the code. What you can predict is the second line: the same seed gives the same four numbers.` }
  ]
};
