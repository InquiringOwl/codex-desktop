window.ARITH = window.ARITH || {};
ARITH["cs-while"] = {
  title: "While Loops",
  short: "Repeat a block while a condition stays true",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · while loops",
  hero: `<code><span class="c1">while</span> n &gt; 0: <span class="c2">n</span> = n // 10</code>`,
  lede: `A while loop repeats a block of code for as long as its condition is true. Python tests the condition before every pass, so something in the body must eventually make it false.`,
  plain: `<p>A <b>while loop</b> looks like an if statement, with <code>while</code> in place of <code>if</code>. The difference is what happens after the block. An if runs its block once and moves on. A while loop goes back up and tests the condition again. If it is still true, the block runs again; the first time it is false, Python skips to the line after the loop.</p>
<p>Each run of the block is called a <b>pass</b> (or an iteration). Usually one variable controls the loop: it is set before the loop, tested in the condition and changed in the body, like <code>n</code> in a countdown. If nothing in the body moves it toward making the condition false, the loop never ends.</p>
<p>The test comes first, so a loop whose condition is false at the start runs zero times. Use a while loop when you do not know in advance how many passes you need: keep asking until the input is valid, or keep dividing until a number reaches 0.</p>`,
  formal: `<pre class="code"><span class="c1">while</span> condition:
    block</pre>
<p><b>Rule.</b> Python evaluates <code>condition</code>. If it is truthy, the block runs and Python returns to the <code>while</code> line to evaluate the condition again. If it is falsy, the loop ends and execution continues after the block. The condition is evaluated once more than the block runs: the last evaluation is the false one. If it is false the first time, the block runs zero times.</p>
<p><b>Termination and digits.</b> A loop whose condition never becomes false is an <b>infinite loop</b>; in a terminal, Ctrl+C stops it with <code>KeyboardInterrupt</code>. Inside the body, <code>break</code> ends the loop at once and <code>continue</code> jumps straight back to the test. For an int <code>n &gt;= 0</code>, <code>n % 10</code> is its last decimal digit and <code>n // 10</code> is <code>n</code> with that digit removed, so <code>while n &gt; 0:</code> with <code>n = n // 10</code> runs once per digit.</p>`,
  legend: [
    { c: "c1", sym: `<code>while n &gt; 0:</code>`, name: "Line about to run", desc: `The test or statement Python runs next. Watch it jump back up to the while line after each pass.` },
    { c: "c2", sym: `<code>n</code>`, name: "Variable that just changed", desc: `The loop variable or accumulator the last line updated.` },
    { c: "c3", sym: `<code>3</code>`, name: "Output", desc: `What the loop has printed so far, one line per print call.` }
  ],
  steps: { title: "How to trace a while loop", items: [
    `Write down the variables and their values before the loop.`,
    `Evaluate the condition with the current values. If it is false, the loop is over: go to the line after the block.`,
    `If it is true, run the body line by line and update your values.`,
    `Go back to the while line and test again. Count the passes as you go.`,
    `Check that the loop variable moves toward making the condition false, so the loop ends.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">n = 472
total = 0
<span class="c1">while</span> n &gt; 0:
    total = total + n % 10
    n = n // 10
<span class="c1">print</span>(total)</pre>`,
    lines: [
      { math: `<code><span class="c2">n</span> = 472</code>, <code><span class="c2">total</span> = 0</code>`, note: "The loop variable and the accumulator are set before the loop." },
      { math: `<code>472 &gt; 0</code> → True: <code><span class="c2">total</span> = 2</code>, <code><span class="c2">n</span> = 47</code>`, note: "Pass 1: 472 % 10 is 2, the last digit, and 472 // 10 drops it." },
      { math: `<code>47 &gt; 0</code> → True: <code><span class="c2">total</span> = 9</code>, <code><span class="c2">n</span> = 4</code>`, note: "Pass 2 adds the digit 7." },
      { math: `<code>4 &gt; 0</code> → True: <code><span class="c2">total</span> = 13</code>, <code><span class="c2">n</span> = 0</code>`, note: "Pass 3 adds the digit 4, and 4 // 10 is 0." },
      { math: `<code>0 &gt; 0</code> → False`, note: "The fourth test fails, so the loop ends after three passes." },
      { math: `<code>print(total)</code>`, note: "4 + 7 + 2 = 13." }
    ],
    answer: `<pre class="code"><span class="out">13</span></pre>`
  },
  why: `<p>Many tasks repeat until something happens rather than a fixed number of times: re-ask until the user types a valid value, retry a network request until it succeeds, iterate a numerical method until the error is small enough. A server or a game is one long while loop. Most loop bugs are a pass too many or too few, or a loop that never stops, and both show up clearly when you trace the condition before each pass.</p>`,
  careers: [
    { role: "Game developer", use: "Writes the main game loop, which reads input, updates the world and draws a frame while the game is still running." },
    { role: "Embedded firmware engineer", use: "Writes the main loop of a microcontroller that polls sensors and updates outputs for as long as the device is powered." },
    { role: "Backend developer", use: "Retries a failed call to another service while attempts remain, waiting longer after each failure." },
    { role: "Data engineer", use: "Pages through a web API, requesting the next page while the response says more results exist." },
    { role: "Scientific programmer", use: "Repeats Newton's method while the change between estimates is larger than a tolerance." },
    { role: "Systems programmer", use: "Writes event loops that wait for the next network connection or key press and handle it, over and over." }
  ],
  life: [
    "A microwave counting down the seconds until it reaches zero",
    "A login page asking for the password again until it is right or you are locked out",
    "Stirring a sauce until it thickens, without knowing how long that takes",
    "A dishwasher rinsing until the water sensor reads clean",
    "Shuffling a deck again while the top card is a joker"
  ],
  fields: [
    { name: "Number theory", use: "Euclid's algorithm for the greatest common divisor repeats a division step while the remainder is not zero." },
    { name: "Numerical analysis", use: "Iterative methods such as bisection and Newton's method loop until the answer is accurate enough." },
    { name: "Operating systems", use: "A scheduler loops for as long as the machine runs, choosing which program gets the processor next." },
    { name: "Control engineering", use: "A feedback controller measures, corrects and repeats while the system is switched on." }
  ],
  prereqWhy: {
    "cs-conditionals": `A while loop is an if statement that repeats. Its condition is evaluated exactly like an if condition, with the same truthiness rules, and the loop body often contains ifs of its own.`
  },
  unlocksWhy: {
    "cs-functions": `A while loop inside a function can end with return, which stops both the loop and the call and hands back the answer.`
  },
  beyond: [
    { field: "Algorithms", why: "A loop invariant, a fact true before every pass, is how a loop is proved correct, and a decreasing quantity proves it ends." },
    { field: "Theory of Computation", why: "The halting problem shows that no program can decide, for every program and input, whether its loops eventually stop." },
    { field: "Operating Systems", why: "Event loops and busy-waiting versus blocking are while loops at the scale of a whole system." }
  ],
  mistakes: [
    { wrong: `Forgetting to change the loop variable, as in <code>while n &gt; 0: print(n)</code>.`, fix: `The condition stays true forever. Update the variable in the body, for example <code>n = n - 1</code>, so the loop moves toward its end.` },
    { wrong: `Using <code>&lt;</code> when the last value should be included.`, fix: `<code>while i &lt; 4</code> stops before 4; <code>while i &lt;= 4</code> includes it. Trace the last pass to check which one you need.` },
    { wrong: `Writing <code>while n != 0: n = n - 2</code> with <code>n = 5</code>.`, fix: `n goes 5, 3, 1, −1 and skips 0, so the loop never ends. Test with <code>n &gt; 0</code> so stepping past the target also stops it.` },
    { wrong: `Updating the variable before using it, so a countdown from 3 prints 2, 1, 0.`, fix: `The order inside the body matters. Print first and decrease afterwards, or start from a different value.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">n = 10
<span class="c1">while</span> n &gt; 0:
    <span class="c1">print</span>(n)
    n = n - 4
<span class="c1">print</span>("after", n)</pre>`,
      a: `<pre class="code"><span class="out">10</span>
<span class="out">6</span>
<span class="out">2</span>
<span class="out">after -2</span></pre>The tests are 10 &gt; 0, 6 &gt; 0, 2 &gt; 0 (all True) and then −2 &gt; 0 (False). After the loop <code>n</code> holds −2, the value that ended it.` },
    { q: `What does this print?<pre class="code">i = 0
<span class="c1">while</span> i &lt;= 3:
    <span class="c1">print</span>(i * i)
    i = i + 1</pre>`,
      a: `<pre class="code"><span class="out">0</span>
<span class="out">1</span>
<span class="out">4</span>
<span class="out">9</span></pre><code>&lt;=</code> includes 3, so there are four passes, for i = 0, 1, 2, 3. When i is 4 the test is False.` },
    { q: `What does this print?<pre class="code">x = 1
steps = 0
<span class="c1">while</span> x &lt;= 1000:
    x = x * 2
    steps = steps + 1
<span class="c1">print</span>(steps, x)</pre>`,
      a: `<pre class="code"><span class="out">10 1024</span></pre>x doubles on each pass: 2, 4, …, 512, 1024. After 9 passes x is 512, which is still at most 1000, so a tenth pass makes it 1024 and the next test fails. You could not easily know the pass count in advance, which is why this is a while loop.` },
    { q: `The user types -3, then -1, then 20. What does this print?<pre class="code">age = <span class="c1">int</span>(<span class="c1">input</span>("age? "))
<span class="c1">while</span> age &lt; 0:
    <span class="c1">print</span>("must be 0 or more")
    age = <span class="c1">int</span>(<span class="c1">input</span>("age? "))
<span class="c1">print</span>("ok", age)</pre>`,
      a: `<pre class="code"><span class="out">age? -3</span>
<span class="out">must be 0 or more</span>
<span class="out">age? -1</span>
<span class="out">must be 0 or more</span>
<span class="out">age? 20</span>
<span class="out">ok 20</span></pre>The first input is read before the loop. Each pass complains and reads a new value; the loop ends at the first value that is not negative. This input-validation loop is one of the most common uses of while.` }
  ],
  origin: `<p>Repeating a step until a condition holds is far older than computers. Euclid's algorithm for the greatest common divisor, in Book VII of the <i>Elements</i> (about 300 BC), repeats one subtraction or division step until the remainder is zero, and it is still written today as a while loop.</p>`
};
