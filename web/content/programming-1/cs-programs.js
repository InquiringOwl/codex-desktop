window.ARITH = window.ARITH || {};
ARITH["cs-programs"] = {
  title: "Programs, Algorithms and the Interpreter",
  short: "What a program is and how Python runs it, line by line",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · programs",
  hero: `<code><span class="c1">print</span>(<span class="c3">"Hello, world!"</span>)</code>`,
  lede: `A program is a list of instructions written precisely enough for a computer to carry out. Python reads a program one statement at a time, from the top down, and does what each one says.`,
  plain: `<p>An <b>algorithm</b> is a step-by-step method for solving a problem, like a recipe or the long-division method. A <b>program</b> is an algorithm written in a <b>programming language</b>, so exact that a machine can follow it with no judgement of its own.</p>
<p>Python is run by a program called the <b>interpreter</b>. It reads your file, checks that every line is written in valid Python, and then runs the <b>statements</b> one after another, from the first line to the last. Each <code>print(...)</code> statement writes one line of <b>output</b>.</p>
<p>A line starting with <code>#</code> is a <b>comment</b>. It is a note for people, and the interpreter skips it.</p>
<p>Things go wrong in two ways. A <b>syntax error</b> means the text is not valid Python, such as a missing bracket; nothing runs at all. A <b>runtime error</b> (an <b>exception</b>) happens while the program runs, such as using a name that was never defined. The lines before it have already run; the program stops at the error.</p>`,
  formal: `<p>A Python program is a sequence of <b>statements</b>. Without control flow (later topics), the interpreter executes them in order, top to bottom, each exactly once. Inside a statement, Python <b>evaluates</b> each <b>expression</b> to a value first: <code>print(2 + 3)</code> evaluates <code>2 + 3</code> to <code>5</code> and then prints <code>5</code>.</p>
<p>A string literal is text in quotes and prints without the quotes. A name without quotes must already be bound to a value, or Python raises <code>NameError: name '…' is not defined</code> on that line. An uncaught exception ends the program; output already printed stays printed.</p>
<pre class="code"><span class="c1">print</span>("Hi")      <span class="out">Hi</span>
<span class="c1">print</span>(Hi)        <span class="out">NameError: name 'Hi' is not defined</span></pre>
<p>A <b>syntax error</b> is found before any line runs, so a program with one prints nothing.</p>`,
  legend: [
    { c: "c1", sym: `<code>print(…)</code>`, name: "Line about to run", desc: `The statement the interpreter will execute next. It moves down one line at a time.` },
    { c: "c2", sym: `<code>total</code>`, name: "Variable that just changed", desc: `A name that the last statement bound to a value.` },
    { c: "c3", sym: `<code>Hello, world!</code>`, name: "Output", desc: `Text the program has printed so far. Output stays even if a later line fails.` }
  ],
  steps: { title: "How to trace a short program by hand", items: [
    `Skip blank lines and comments, the lines that start with <code>#</code>.`,
    `Start at the first statement and work downward, one statement at a time.`,
    `For a <code>print</code>, evaluate what is inside the brackets first, then write the value as one output line.`,
    `Text in quotes prints as written, without the quotes; an expression such as <code>2 + 3</code> prints its value.`,
    `If a line uses a name that was never assigned, stop: Python raises a <code>NameError</code> there, and the lines below never run.`
  ] },
  example: {
    prompt: `What does this program print, and where does it stop?<pre class="code"><span class="c1">print</span>("start")
total = 10
<span class="c1">print</span>(total)
<span class="c1">print</span>(totl)
<span class="c1">print</span>("never printed")</pre>`,
    lines: [
      { math: `<code>print("start")</code>`, note: "The string is printed without its quotes: start." },
      { math: `<code><span class="c2">total</span> = 10</code>`, note: "The name total is bound to the value 10. Nothing is printed." },
      { math: `<code>print(total)</code>`, note: "total is a name with a value, so its value 10 is printed." },
      { math: `<code>print(totl)</code>`, note: "totl was never assigned. Python raises NameError on line 4." },
      { math: `<code>print("never printed")</code>`, note: "The exception ended the program, so line 5 never runs." }
    ],
    answer: `<pre class="code"><span class="out">start</span>
<span class="out">10</span>
<span class="out">NameError: name 'totl' is not defined</span></pre>Two lines print, then the program stops at line 4.`
  },
  why: `<p>Every later topic builds on one picture: the interpreter sits on one line, runs it, and moves on. Tracing that by hand, line by line, is the main skill of debugging. Reading an error message for its type and its line tells you where the program stopped and what it had already done.</p>`,
  careers: [
    { role: "Software engineer", use: "Reads tracebacks from failing programs every day to find the line and the exception type that stopped them." },
    { role: "Data analyst", use: "Writes short Python scripts that load, clean and summarise data, run top to bottom in a notebook or terminal." },
    { role: "Site reliability engineer", use: "Automates server checks with scripts and reads their error output when a job fails at night." },
    { role: "Research scientist", use: "Turns an analysis method into a Python program so that the same steps can be rerun on new measurements." },
    { role: "QA engineer", use: "Writes test programs that run the product step by step and report which step produced the wrong output." }
  ],
  life: [
    "Following a recipe exactly, one step after another",
    "Reading an error message for what failed rather than closing it",
    "Writing assembly instructions that someone else must follow without asking questions",
    "Setting up a spreadsheet formula that runs the same calculation every time"
  ],
  fields: [
    { name: "Data science", use: "Analyses are Python programs run by the same interpreter, statement by statement." },
    { name: "Web development", use: "Server code is a program that the interpreter runs for every request; errors appear as tracebacks in the logs." },
    { name: "Scientific computing", use: "Simulations are algorithms written as programs so the computer can repeat millions of steps." }
  ],
  prereqWhy: {},
  unlocksWhy: {
    "cs-binary": `A program's values, from numbers to text, are stored as bits; seeing <code>bin</code>, <code>hex</code> and <code>encode</code> in a traced program shows what the interpreter actually keeps in memory.`,
    "cs-types": `<code>print(2 + 3)</code> printed a value, not text. The next step is to see what kinds of values Python has and how each expression is evaluated.`
  },
  mathWhy: {},
  beyond: [
    { field: "Software Engineering", why: "Testing and debugging start from reading what a program printed and where it stopped." },
    { field: "Programming Languages", why: "Interpreters and compilers are themselves programs that read and run other programs." },
    { field: "Algorithms", why: "An algorithm is studied apart from any language, then written as a program to run it." }
  ],
  mistakes: [
    { wrong: `Writing <code>print(Hello)</code> and expecting it to print Hello.`, fix: `Without quotes, <code>Hello</code> is a name, and Python raises <code>NameError</code>. Text needs quotes: <code>print("Hello")</code>.` },
    { wrong: `Thinking an error halfway through means nothing ran.`, fix: `A runtime error stops the program at that line. Every line above it has already run, and its output is already on the screen.` },
    { wrong: `Expecting <code>print("2 + 3")</code> to print 5.`, fix: `In quotes it is a string and prints as written: <code>2 + 3</code>. Without quotes, <code>print(2 + 3)</code> prints <code>5</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">print</span>("Hello, world!")
<span class="c1">print</span>(2 + 3)</pre>`, a: `<pre class="code"><span class="out">Hello, world!</span>
<span class="out">5</span></pre>The string prints without quotes; <code>2 + 3</code> is evaluated first.` },
    { q: `What does this print?<pre class="code"><span class="c1">print</span>("first")
# print("second")
<span class="c1">print</span>("third")
<span class="c1">print</span>(1 + 1)</pre>`, a: `<pre class="code"><span class="out">first</span>
<span class="out">third</span>
<span class="out">2</span></pre>The second line is a comment and never runs.` },
    { q: `What does this print, and why?<pre class="code"><span class="c1">print</span>("2 + 3")
<span class="c1">print</span>(2 + 3)</pre>`, a: `<pre class="code"><span class="out">2 + 3</span>
<span class="out">5</span></pre>The first is a string, printed as written. The second is an expression, evaluated to 5.` },
    { q: `What does this print?<pre class="code"><span class="c1">print</span>("A")
<span class="c1">print</span>(B)
<span class="c1">print</span>("C")</pre>`, a: `<pre class="code"><span class="out">A</span>
<span class="out">NameError: name 'B' is not defined</span></pre><code>B</code> has no quotes, so it is a name, and no value was ever assigned to it. Line 1 already printed; line 3 never runs.` }
  ],
  origin: `Guido van Rossum began writing Python in December 1989 at CWI in Amsterdam and released it publicly in 1991; he named it after the comedy series <i>Monty Python's Flying Circus</i>. Python 3, the version taught here, was released in December 2008. The word <i>algorithm</i> comes from the name of the ninth-century Persian mathematician al-Khwarizmi.`
};
