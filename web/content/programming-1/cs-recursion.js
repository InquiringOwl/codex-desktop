window.ARITH = window.ARITH || {};
ARITH["cs-recursion"] = {
  title: "Recursion",
  short: "A function that calls itself on a smaller problem",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · recursion",
  hero: `<code><span class="c5">return</span> n * <span class="c1">fact</span>(<span class="c2">n</span> - 1)</code>`,
  lede: `A recursive function solves a problem by calling itself on a smaller version of the same problem. Every call gets its own frame, and a base case stops the chain.`,
  plain: `<p>Some problems contain smaller copies of themselves. The factorial 4! is 4 × 3!, and 3! is 3 × 2!, and so on down to 1! = 1. A function can follow that description exactly: to find <code>fact(4)</code>, it multiplies 4 by <code>fact(3)</code>. A function that calls itself is <b>recursive</b>.</p>
<p>The smallest case is answered directly, with no further call. That is the <b>base case</b>, and without it the calls would never stop. Every other call is a <b>recursive case</b>: it makes the problem smaller and calls the function again.</p>
<p>Each call is a separate run of the function with its own <code>n</code>. While <code>fact(1)</code> runs, the calls for 4, 3 and 2 are paused, each waiting for an answer. When the base case returns, the waiting calls finish one by one, last started first finished.</p>`,
  formal: `<pre class="code"><span class="c1">def</span> fact(n):
    <span class="c1">if</span> n &lt;= 1:              # base case
        <span class="c5">return</span> 1
    <span class="c5">return</span> n * fact(n - 1)   # recursive case</pre>
<p><b>Rule.</b> Every call creates a new <b>frame</b> on the <b>call stack</b> holding that call's parameters and local variables, so the <code>n</code> of one call is a different variable from the <code>n</code> of the call that made it. A call that reaches <code>return</code> removes its frame and hands the <b>return value</b> to the caller, which resumes at the point where it made the call. The stack therefore unwinds in the reverse order of the calls.</p>
<p>A correct recursive function has at least one base case that returns without recursing, and every recursive case moves the argument closer to a base case. Python limits the depth of the stack: <code>sys.getrecursionlimit()</code> is 1000 by default, and recursing deeper raises <code>RecursionError: maximum recursion depth exceeded</code>. Two recursive calls per frame, as in <code>fib(n - 1) + fib(n - 2)</code>, make the same smaller calls many times over.</p>`,
  legend: [
    { c: "c1", sym: `<code>return n * fact(n - 1)</code>`, name: "Line about to run", desc: "The line where a call pauses: it cannot finish the multiplication until the call it makes has returned." },
    { c: "c2", sym: `<code>n = 3</code>`, name: "Variable that just changed", desc: "A new frame binds its own <code>n</code>. The frames below keep their values." },
    { c: "c5", sym: `<code>return 6</code>`, name: "Return value", desc: "What a finishing call hands back to the frame below it on the stack." },
    { c: "c3", sym: `<code>24</code>`, name: "Output", desc: "Printed only after the whole chain of calls has unwound." }
  ],
  steps: { title: "How to trace a recursive call", items: [
    `Write the call, such as <code>fact(4)</code>, and check the base case test with its argument.`,
    `If it is not the base case, write the expression it returns, such as <code>4 * fact(3)</code>, and leave it waiting.`,
    `Trace the new call the same way, one level deeper, until a call reaches the base case.`,
    `Work back up: put each return value into the expression waiting above it and finish that expression.`,
    `The value of the first call is the last one you compute.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code"><span class="c1">def</span> fact(n):
    <span class="c1">if</span> n &lt;= 1:
        <span class="c5">return</span> 1
    <span class="c5">return</span> n * fact(n - 1)
<span class="c1">print</span>(fact(4))</pre>`,
    lines: [
      { math: `<code>fact(4)</code>: <code>4 * fact(3)</code> waits`, note: "4 <= 1 is False, so the call needs fact(3) first. Frames: global, fact(4)." },
      { math: `<code>fact(3)</code>: <code>3 * fact(2)</code> waits`, note: "A new frame with its own n = 3." },
      { math: `<code>fact(2)</code>: <code>2 * fact(1)</code> waits`, note: "Frames: global, fact(4), fact(3), fact(2)." },
      { math: `<code>fact(1)</code> <span class="c5">returns 1</span>`, note: "1 <= 1 is True: the base case returns without calling again. The stack is five frames deep." },
      { math: `<code>fact(2)</code> <span class="c5">returns 2 * 1 = 2</span>`, note: "The frame for fact(1) is gone; fact(2) resumes and finishes its multiplication." },
      { math: `<code>fact(3)</code> <span class="c5">returns 3 * 2 = 6</span>`, note: "The stack keeps unwinding." },
      { math: `<code>fact(4)</code> <span class="c5">returns 4 * 6 = 24</span>`, note: "The first call finishes last, and print shows its value." }
    ],
    answer: `<pre class="code"><span class="out">24</span></pre>`
  },
  why: `<p>Many structures are nested: folders inside folders, expressions inside expressions, branches of a game tree, comments replying to comments. A recursive function handles any depth of nesting with a few lines, because it only has to say how one level relates to the next. Tracing the stack also explains what an error traceback is: a list of the frames that were waiting when something went wrong.</p>`,
  careers: [
    { role: "Compiler engineer", use: "Writes recursive descent parsers, where a function for expressions calls the function for terms, which can call the one for expressions again inside parentheses." },
    { role: "Game AI programmer", use: "Uses minimax search, which scores a board position by recursively scoring every position reachable from it, a few moves deep." },
    { role: "Front-end developer", use: "Renders nested comment threads and menus with a component that renders its own children." },
    { role: "Data engineer", use: "Flattens deeply nested JSON from web APIs into table rows with a function that recurses into each nested object." },
    { role: "Systems programmer", use: "Walks directory trees to compute disk usage, recursing into each subfolder and adding the sizes as the calls return." },
    { role: "Computational linguist", use: "Builds and walks parse trees of sentences, where a phrase can contain smaller phrases of the same kind." }
  ],
  life: [
    "Russian nesting dolls, each holding a smaller doll until the last solid one",
    "Two mirrors facing each other, showing a picture inside a picture",
    "Looking up a word in a dictionary, then looking up a word in its definition",
    "Counting the people in a queue by asking the person in front how many are ahead of them",
    "A family tree, where each parent has a family tree of their own"
  ],
  fields: [
    { name: "Discrete mathematics", use: "Proof by induction mirrors recursion: prove the base case, then show each case follows from the one before." },
    { name: "Linguistics", use: "Grammars are recursive: a sentence can contain a clause that contains another sentence." },
    { name: "Biology", use: "Branching structures such as trees, lungs and blood vessels are modelled by rules that repeat on smaller branches." }
  ],
  prereqWhy: {
    "cs-scope": "Recursion depends on local scope: each call's parameter <code>n</code> lives in that call's own frame, so <code>fact(3)</code> changing its <code>n</code> cannot disturb the <code>n</code> of the <code>fact(4)</code> call waiting below it."
  },
  unlocksWhy: {
    "cs-efficiency": "Counting recursive calls shows how quickly work can grow, as naive Fibonacci's exponential call count makes plain."
  },
  mathWhy: {
    "a1-sequences": "A recursive function is a recursively defined sequence. <span class=\"m\"><i>a</i><sub>1</sub> = 1, <i>a<sub>n</sub></i> = <i>n</i> · <i>a</i><sub><i>n</i>−1</sub></span> is the factorial, and <span class=\"m\"><i>F</i><sub>0</sub> = 0, <i>F</i><sub>1</sub> = 1, <i>F<sub>n</sub></i> = <i>F</i><sub><i>n</i>−1</sub> + <i>F</i><sub><i>n</i>−2</sub></span> is <code>fib</code>: the given first terms are the base cases and the recursive formula is the recursive case."
  },
  beyond: [
    { field: "Data Structures", why: "Trees and linked lists are recursive structures, and their algorithms (traversal, insertion, height) are written recursively." },
    { field: "Algorithms", why: "Merge sort, quicksort and binary search split a problem into smaller copies; their running times are found by solving recurrences." },
    { field: "Programming Languages", why: "Interpreters evaluate an expression by recursively evaluating its parts, and functional languages replace loops with recursion." }
  ],
  mistakes: [
    { wrong: `Leaving out the base case, or writing one the calls never reach, such as <code>if n == 0</code> when <code>n</code> goes down by 2 from an odd number.`, fix: `Python keeps adding frames until the limit and raises RecursionError. Check that every chain of calls ends at a base case.` },
    { wrong: `Calling the function in the recursive case but not returning its value, as in <code>fact(n - 1)</code> on its own line.`, fix: `The result is thrown away and the function returns None. Write <code>return n * fact(n - 1)</code>.` },
    { wrong: `Recursing on the same argument, as in <code>return n * fact(n)</code>.`, fix: `The problem never gets smaller. Each recursive call must move toward the base case, here <code>n - 1</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">def</span> total(n):
    <span class="c1">if</span> n == 0:
        <span class="c5">return</span> 0
    <span class="c5">return</span> n + total(n - 1)
<span class="c1">print</span>(total(4))</pre>`, a: `<pre class="code"><span class="out">10</span></pre><code>total(4)</code> is 4 + <code>total(3)</code> = 4 + 3 + 2 + 1 + <code>total(0)</code>, and the base case gives 0.` },
    { q: `What does this print?<pre class="code"><span class="c1">def</span> countup(n):
    <span class="c1">if</span> n == 0:
        <span class="c5">return</span>
    countup(n - 1)
    <span class="c1">print</span>(n)
countup(3)</pre>`, a: `<pre class="code"><span class="out">1</span>
<span class="out">2</span>
<span class="out">3</span></pre>Each call prints after its recursive call has returned. <code>countup(1)</code> is the first to get past that line, so the prints happen while the stack unwinds, smallest first.` },
    { q: `What does this print?<pre class="code"><span class="c1">def</span> power(b, e):
    <span class="c1">if</span> e == 0:
        <span class="c5">return</span> 1
    <span class="c5">return</span> b * power(b, e - 1)
<span class="c1">print</span>(power(2, 5))
<span class="c1">print</span>(power(7, 0))</pre>`, a: `<pre class="code"><span class="out">32</span>
<span class="out">1</span></pre><code>power(2, 5)</code> makes six calls (e = 5 down to 0) and multiplies 2 five times. <code>power(7, 0)</code> is the base case at once.` },
    { q: `What happens when this runs?<pre class="code"><span class="c1">def</span> total(n):
    <span class="c5">return</span> n + total(n - 1)
<span class="c1">print</span>(total(3))</pre>`, a: `Nothing is printed. There is no base case, so <code>n</code> goes 3, 2, 1, 0, −1, … and every call adds a frame. After about 1000 frames Python stops with<pre class="code"><span class="out">RecursionError: maximum recursion depth exceeded</span></pre>` }
  ],
  origin: `<p>John McCarthy built Lisp (1958) around recursive functions, described in his 1960 paper "Recursive Functions of Symbolic Expressions and Their Computation by Machine". ALGOL 60, published the same year, allowed procedures to call themselves, and its first compilers kept each call's variables on a stack, the design Python and almost every later language use.</p>`
};
