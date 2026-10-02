window.ARITH = window.ARITH || {};
ARITH["cs-functions"] = {
  title: "Functions",
  short: "Name a block of code, call it, and get a value back",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · functions",
  hero: `<code><span class="c1">def</span> square(<span class="c2">x</span>): <span class="c1">return</span> <span class="c5">x * x</span></code>`,
  lede: `A function is a named block of code that runs when it is called. The caller passes in arguments, and the function can hand back one value with <code>return</code>.`,
  plain: `<p>A recipe card says "to make the sauce, do these steps". Writing the card does not make any sauce. Later, whenever a dish needs sauce, you follow the card. A <b>function</b> is that card: <code>def</code> writes it and gives it a name, and a <b>call</b> such as <code>square(4)</code> follows it.</p>
<p>A function can take inputs, called <b>parameters</b>. Each call fills them in with the values you pass, the <b>arguments</b>. When the function is done it can give a result back to the line that called it with <code>return</code>. The call then stands for that value, so <code>square(4) + 1</code> is 17.</p>
<p>Printing and returning are different. <code>print</code> shows text to a person and gives nothing to the program. <code>return</code> gives a value to the program, which can store it, print it or compute with it. A function that never reaches a <code>return</code> gives back the special value <code>None</code>.</p>`,
  formal: `<pre class="code"><span class="c1">def</span> name(param1, param2):
    body
    <span class="c1">return</span> <span class="c5">expression</span>

result = name(arg1, arg2)</pre>
<p><b>Definition.</b> Executing a <code>def</code> statement creates a function object and binds <code>name</code> to it. The body is not run. A name must be defined before the line that calls it runs.</p>
<p><b>Call.</b> <code>name(arg1, arg2)</code> evaluates the arguments, creates a new <b>frame</b> for the call, binds each parameter in that frame to the matching argument's object (by position, so the counts must match or Python raises <code>TypeError</code>), and runs the body. The caller waits until the call ends. A function may call another function; the frames then form a <b>call stack</b>, newest on top.</p>
<p><b>Return.</b> <code>return expression</code> evaluates the expression and ends the call at once; any lines after it in that call do not run. The call expression then evaluates to that <b>return value</b>. If the body ends without a <code>return</code>, or with a bare <code>return</code>, the value is <code>None</code>. When the call ends its frame is discarded.</p>`,
  legend: [
    { c: "c1", sym: `<code>def area(w, h):</code>`, name: "Line about to run", desc: `On a call, the highlight jumps into the function's body, then back to the calling line when it returns.` },
    { c: "c2", sym: `<code>w</code>, <code>h</code>`, name: "Variable that just changed", desc: `Parameters bound to the arguments in the new frame, and names assigned in the body.` },
    { c: "c3", sym: `<code>12</code>`, name: "Output", desc: `What <code>print</code> has shown. Printing is not returning.` },
    { c: "c4", sym: `<code>area</code>`, name: "Function object", desc: `<code>def</code> binds the name to a function object; nothing in the body has run yet.` },
    { c: "c5", sym: `<code>return a</code>`, name: "Return value", desc: `The value the call hands back to the caller, or <code>None</code> if there is no return.` }
  ],
  steps: { title: "How to trace a program with functions", items: [
    `When you reach a <code>def</code>, note the function's name and parameters, and skip its body.`,
    `When you reach a call, evaluate the arguments first.`,
    `Start a new box (frame) for the call and write each parameter in it with its argument's value.`,
    `Run the body line by line inside that box. A call inside the body starts another box on top.`,
    `At <code>return</code>, note the value, cross out the box, and go back to the calling line with that value in place of the call. No return means the value is <code>None</code>.`,
    `Finish the calling line, then continue the program.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code"><span class="c1">def</span> area(w, h):
    a = w * h
    <span class="c1">return</span> a

result = area(3, 4)
<span class="c1">print</span>(result)
<span class="c1">print</span>(area(2, 5) + 1)</pre>`,
    lines: [
      { math: `<code><span class="c4">area</span></code> → function`, note: "The def line binds the name area. The body does not run yet." },
      { math: `<code>area(3, 4)</code>: <code><span class="c2">w</span> = 3</code>, <code><span class="c2">h</span> = 4</code>`, note: "The call makes a new frame and binds the parameters to the arguments." },
      { math: `<code><span class="c2">a</span> = 12</code>, <code><span class="c5">return 12</span></code>`, note: "The body computes 3 * 4 and returns it; the frame is discarded." },
      { math: `<code><span class="c2">result</span> = 12</code>`, note: "The call is replaced by its return value, which is assigned to result and printed." },
      { math: `<code>area(2, 5)</code> → <code><span class="c5">10</span></code>, <code>10 + 1 = 11</code>`, note: "A second call with a fresh frame. Its return value is used in an expression." }
    ],
    answer: `<pre class="code"><span class="out">12</span>
<span class="out">11</span></pre>`
  },
  why: `<p>Functions are how programs are built. Instead of one long script, you write small named pieces that each do one job, test each piece, and combine them. A function written once can be called from a hundred places, and fixing it fixes all of them. Telling print from return, and knowing that a call gets its own frame, is what lets you read any program larger than a page.</p>`,
  careers: [
    { role: "Software engineer", use: "Splits a feature into small functions with clear parameters and return values so each can be reviewed and unit-tested on its own." },
    { role: "Data scientist", use: "Writes a cleaning function once and calls it on every column of a pandas data frame." },
    { role: "Web developer", use: "Writes a view function in Django or Flask that takes a request and returns the response the server sends." },
    { role: "Embedded systems engineer", use: "Wraps each sensor reading in a function that returns a value in physical units, so the control loop never handles raw bits." },
    { role: "Quantitative analyst", use: "Writes a pricing function that takes market inputs as parameters and returns a price, then calls it across thousands of scenarios." },
    { role: "Game developer", use: "Calls an update function once per frame for every object in the scene." }
  ],
  life: [
    "A recipe card that you follow whenever a dish needs it",
    "A calculator button: put in numbers, get one number back",
    "A vending machine: money and a choice go in, one snack comes out",
    "Asking a friend to look something up and tell you the answer",
    "A form letter where only the name changes each time"
  ],
  fields: [
    { name: "Algebra", use: "f(x) = x squared is a function: an input goes in and exactly one output comes back." },
    { name: "Spreadsheets", use: "SUM and AVERAGE are functions called with cell ranges as arguments." },
    { name: "Statistics", use: "Mean and standard deviation are written once as functions and applied to every data set." },
    { name: "Engineering", use: "A unit conversion written as a function is reused everywhere a value changes units." }
  ],
  prereqWhy: {
    "cs-while": `Function bodies often contain while loops, and a return inside a loop ends both the loop and the call at once.`,
    "cs-for": `Many functions loop over their inputs with a for loop and return the accumulated result, such as a sum or a count.`
  },
  unlocksWhy: {
    "cs-scope": `Each call's frame holds its own local names, and scope explains which variable a name means inside and outside a function.`,
    "cs-testing": `A function with parameters and a return value can be tested by calling it with chosen arguments and checking what it returns.`,
    "cs-strings": `String work is done with calls such as len(s) and methods such as s.upper(), which take arguments and return new values.`,
    "cs-classes": `A method is a function defined inside a class, called on an object that is passed in as its first parameter, self.`
  },
  mathWhy: {
    "pa-functions": `Like a function rule in mathematics, a Python function takes an input and produces an output: <code>def f(x): return 2 * x + 1</code> is the rule <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> + 1</span>, and <code>f(3)</code> evaluates it at 3.`,
    "a1-functions": `Function notation carries over directly: a parameter plays the role of the variable in <span class="m"><i>f</i>(<i>x</i>)</span>, an argument is the input value, and the return value is <span class="m"><i>f</i>(<i>a</i>)</span>. A composition <span class="m"><i>f</i>(<i>g</i>(<i>x</i>))</span> is a call inside a call. Unlike a mathematical function, a Python function can also print or change things, and can return different values for the same input if it reads input or randomness.`
  },
  beyond: [
    { field: "Software Engineering", why: "Designing programs as small functions with clear inputs and outputs is the basis of modular design and unit testing." },
    { field: "Programming Languages", why: "Functions can be passed as arguments and returned as values, which leads to closures, higher-order functions and functional programming." },
    { field: "Operating Systems", why: "A program asks the operating system for files, memory and the network through function-like system calls." }
  ],
  mistakes: [
    { wrong: `Using <code>print</code> inside a function and then trying to use the result, as in <code>total = add(2, 3)</code>.`, fix: `A function that only prints returns <code>None</code>. Use <code>return a + b</code> so the caller gets the value, and print it in the caller if you need to.` },
    { wrong: `Writing lines after <code>return</code> and expecting them to run.`, fix: `<code>return</code> ends the call immediately. Put any work you need before it.` },
    { wrong: `Writing <code>greet</code> without parentheses and expecting the function to run.`, fix: `The bare name is the function object. Only <code>greet()</code> with parentheses calls it.` },
    { wrong: `Calling a function on a line above its <code>def</code>.`, fix: `The <code>def</code> line must have run before the call runs, otherwise the name is not bound yet and Python raises <code>NameError</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">def</span> hello():
    <span class="c1">print</span>("hi")

hello()
hello()</pre>`, a: `<pre class="code"><span class="out">hi</span>
<span class="out">hi</span></pre>The <code>def</code> prints nothing. Each of the two calls runs the body once.` },
    { q: `What does this print?<pre class="code"><span class="c1">def</span> triple(n):
    <span class="c1">return</span> 3 * n

<span class="c1">print</span>(triple(4) + triple(1))</pre>`, a: `<pre class="code"><span class="out">15</span></pre>The two calls return 12 and 3, and the expression adds the return values.` },
    { q: `What does this print?<pre class="code"><span class="c1">def</span> show(n):
    <span class="c1">print</span>(n * 2)

x = show(5)
<span class="c1">print</span>(x)</pre>`, a: `<pre class="code"><span class="out">10</span>
<span class="out">None</span></pre>The call prints 10 while it runs. It has no <code>return</code>, so its value is <code>None</code>, and <code>x</code> is bound to <code>None</code>.` },
    { q: `What does this print?<pre class="code"><span class="c1">def</span> sign(n):
    <span class="c1">if</span> n &lt; 0:
        <span class="c1">return</span> "negative"
    <span class="c1">return</span> "not negative"
    <span class="c1">print</span>("done")

<span class="c1">print</span>(sign(-3))
<span class="c1">print</span>(sign(0))</pre>`, a: `<pre class="code"><span class="out">negative</span>
<span class="out">not negative</span></pre>For −3 the first <code>return</code> ends the call. For 0 the test is False and the second <code>return</code> ends it. Either way <code>print("done")</code> is never reached.` }
  ]
};
