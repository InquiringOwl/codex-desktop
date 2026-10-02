window.ARITH = window.ARITH || {};
ARITH["cs-scope"] = {
  title: "Scope and the Call Stack",
  short: "Which variable a name means, and where each call keeps its names",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · scope",
  hero: `<code>x = 10; <span class="c1">def</span> f(): <span class="c2">x</span> = 99</code>`,
  lede: `Each function call has its own frame of local names. The scope rules decide whether a name inside a function means one of those locals or a global name from the main program.`,
  plain: `<p>Every call of a function gets a fresh, private notepad, its <b>frame</b>. Parameters and any names assigned inside the function are written on that notepad. They are <b>local</b>: other code cannot see them, and they disappear when the call ends. Names assigned in the main program are <b>global</b>.</p>
<p>When a function uses a name, Python looks on the call's own notepad first. If the name is not there, it looks among the globals, and then among Python's built-in names like <code>print</code> and <code>len</code>. So a function can read a global it never assigns.</p>
<p>The catch is assignment. If a function assigns a name anywhere, that name is local for the whole function. A local with the same name as a global simply hides the global inside the call; the global keeps its value. And if the function reads that local before assigning it, Python stops with an <code>UnboundLocalError</code>.</p>
<p>The frames of calls that are still running form the <b>call stack</b>: the main program at the bottom, each new call on top, and the top one always the first to finish.</p>`,
  formal: `<p><b>Local names.</b> A name is local to a function if the function binds it: as a parameter, or by assignment (including <code>+=</code> and a <code>for</code> loop variable) anywhere in its body. Python decides this when the <code>def</code> is compiled, not line by line, so the name is local even on lines before the assignment. Each call creates a new frame holding its own locals, which are discarded when the call ends.</p>
<p><b>Lookup.</b> A name that is not local is looked up in the module's global names, then in the built-ins (the LEGB rule: local, enclosing function, global, built-in). Reading a local that has no value yet raises <code>UnboundLocalError</code>; a name found nowhere raises <code>NameError</code>.</p>
<p><b>Parameters.</b> A call binds each parameter, a new local name, to the argument's object. Rebinding the parameter inside the function changes only the local name; the caller's variable still refers to its old object. To give a new value back, return it and let the caller assign it. The statement <code>global name</code> at the top of a function makes assignments to <code>name</code> rebind the global instead.</p>`,
  legend: [
    { c: "c1", sym: `<code>x = 99</code>`, name: "Line about to run", desc: `Watch which frame the line runs in: the main program's, or a call's.` },
    { c: "c2", sym: `<code>x</code>`, name: "Variable that just changed", desc: `A name that was just bound, in the frame shown with it. Two frames may each have an <code>x</code>.` },
    { c: "c3", sym: `<code>inside: 99</code>`, name: "Output", desc: `What the program has printed so far.` },
    { c: "c4", sym: `<code>show</code>`, name: "Function object", desc: `A global name bound to a function. The function's own locals live in its call's frame, not here.` },
    { c: "c5", sym: `<code>return n</code>`, name: "Return value", desc: `The only value a call hands back to its caller's frame.` }
  ],
  steps: { title: "How to trace names across frames", items: [
    `Draw a box for the global frame and write each global name in it as it is assigned.`,
    `For each function, list its local names: its parameters and every name it assigns anywhere in its body.`,
    `On a call, draw a new box on top of the stack and bind the parameters to the argument values.`,
    `For each name used in the body, look in the top box if it is local; otherwise use the global box.`,
    `If a local is read before it has a value, stop: that is an <code>UnboundLocalError</code>.`,
    `When the call returns, cross out its box. Only the return value goes back to the caller.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">x = 5

<span class="c1">def</span> f(y):
    x = y * 2
    <span class="c1">return</span> x

<span class="c1">print</span>(f(3))
<span class="c1">print</span>(x)</pre>`,
    lines: [
      { math: `global: <code><span class="c2">x</span> = 5</code>, <code><span class="c4">f</span></code>`, note: "Two global names: x, and the function f." },
      { math: `frame f: <code><span class="c2">y</span> = 3</code>`, note: "The call f(3) makes a new frame with the parameter y bound to 3." },
      { math: `frame f: <code><span class="c2">x</span> = 6</code>`, note: "f assigns x, so x is local to f. This makes a new local x; the global x is untouched." },
      { math: `<code><span class="c5">return 6</span></code>`, note: "The local x is returned and printed. The frame, with its x and y, is discarded." },
      { math: `global: <code>x = 5</code>`, note: "In the main program x is still the global one." }
    ],
    answer: `<pre class="code"><span class="out">6</span>
<span class="out">5</span></pre>`
  },
  why: `<p>Local scope is what makes functions safe to combine. You can name a variable <code>total</code> or <code>i</code> inside a function without worrying that some other function, or the main program, uses the same name. The call stack is also what a debugger shows you and what a traceback prints when a program crashes: the chain of calls, newest last, that led to the error.</p>`,
  careers: [
    { role: "Software engineer", use: "Reads a traceback, which lists the call stack frame by frame, to find the call that went wrong." },
    { role: "Debugging and QA engineer", use: "Steps through frames in a debugger such as pdb or the VS Code debugger, checking each call's local variables." },
    { role: "Security engineer", use: "Studies how frames are laid out on the stack to find and prevent stack buffer overflow attacks in C programs." },
    { role: "Compiler engineer", use: "Implements scope resolution, deciding for every name in a program which declaration it refers to." },
    { role: "Data scientist", use: "Moves notebook code into functions so that leftover global variables from earlier cells stop changing results." },
    { role: "Site reliability engineer", use: "Reads stack traces in production error reports to see which chain of calls failed." }
  ],
  life: [
    "Two classrooms that each have a student named Sam",
    "Scrap paper for one exam question, thrown away when the question is done",
    "A stack of plates: the last one put on is the first one taken off",
    "Calling a colleague, who puts you on hold to call someone else",
    "A sticky note on your own desk versus the notice board everyone reads"
  ],
  fields: [
    { name: "Mathematics", use: "Bound variables: the x in a definition of f(x) has no connection to an x elsewhere on the page." },
    { name: "Logic", use: "A quantified variable is bound inside its formula, much like a local name inside a function." },
    { name: "Law and contracts", use: "Defined terms in a contract mean something specific only within that contract." }
  ],
  prereqWhy: {
    "cs-functions": `Scope is about the names a call creates. You need to know that each call gets a frame with its parameters bound to the arguments.`
  },
  unlocksWhy: {
    "cs-recursion": `A recursive function calls itself, and each call's separate frame keeps its own n on the call stack until it returns.`
  },
  beyond: [
    { field: "Programming Languages", why: "Lexical scope, closures and the nonlocal statement extend these rules to functions defined inside functions." },
    { field: "Computer Architecture", why: "The call stack is a region of memory, and each frame is pushed and popped by machine instructions on every call and return." },
    { field: "Compilers", why: "A compiler builds symbol tables to resolve every name to the right scope before the program runs." }
  ],
  mistakes: [
    { wrong: `Expecting a function to change the caller's variable by rebinding its parameter, as in <code>def reset(n): n = 0</code>.`, fix: `The parameter is a new local name. Return the new value and assign it in the caller: <code>k = reset(k)</code>.` },
    { wrong: `Updating a global counter inside a function with <code>count = count + 1</code>.`, fix: `The assignment makes <code>count</code> local, so reading it first raises <code>UnboundLocalError</code>. Pass the value in and return the new one, or declare <code>global count</code>.` },
    { wrong: `Using a variable that was assigned inside a function after the call has finished.`, fix: `Locals disappear when the call ends, so outside the function the name is not defined. Return the value instead.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">name = "Ada"

<span class="c1">def</span> greet():
    <span class="c1">print</span>("Hi", name)

greet()</pre>`, a: `<pre class="code"><span class="out">Hi Ada</span></pre><code>greet</code> never assigns <code>name</code>, so it is not local, and Python finds the global.` },
    { q: `What does this print?<pre class="code"><span class="c1">def</span> f():
    z = 1

f()
<span class="c1">print</span>(z)</pre>`, a: `<pre class="code"><span class="out">NameError: name 'z' is not defined</span></pre><code>z</code> was local to the call, and the call's frame is gone. There is no global <code>z</code>.` },
    { q: `What does this print?<pre class="code"><span class="c1">def</span> reset(n):
    n = 0
    <span class="c1">return</span> n

k = 9
reset(k)
<span class="c1">print</span>(k)</pre>`, a: `<pre class="code"><span class="out">9</span></pre><code>n = 0</code> rebinds only the local parameter. The return value 0 is not assigned to anything, so the global <code>k</code> is still 9.` },
    { q: `What happens when this runs?<pre class="code">count = 0

<span class="c1">def</span> inc():
    count = count + 1

inc()
<span class="c1">print</span>(count)</pre>`, a: `<pre class="code"><span class="out">UnboundLocalError: local variable 'count' referenced before assignment</span></pre>The assignment makes <code>count</code> local to <code>inc</code>, so <code>count + 1</code> reads a local that has no value yet; the global is not used. The program stops before the last line. Python 3.11 and later word the message as <code>cannot access local variable 'count' where it is not associated with a value</code>.` }
  ]
};
