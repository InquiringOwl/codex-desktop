window.ARITH = window.ARITH || {};
ARITH["cs-testing"] = {
  title: "Testing and Debugging",
  short: "Check code with assert, then find and fix what fails",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · testing",
  hero: `<code><span class="c1">assert</span> average([4, 4]) == 4.0</code>`,
  lede: `A test runs your code on an input whose answer you already know and checks that the code agrees. Python's <code>assert</code> statement does nothing when the check holds and stops the program with an AssertionError when it does not.`,
  plain: `<p>A program that runs without an error can still give wrong answers. The only way to know is to try it on inputs where you have worked out the right answer yourself, by hand. That is a <b>test case</b>: an input together with its expected output.</p>
<p>Good tests include the ordinary inputs and the awkward ones: an empty list, a single item, zero, negative numbers, the values right at a boundary. These are <b>edge cases</b>, and they are where most bugs hide.</p>
<p>When a test fails, <b>debugging</b> is finding out why. Read the error message, trace the program on the failing input (by hand, with a tracer, or by printing variables), find the first line where a value differs from what you expected, fix it, and run every test again.</p>`,
  formal: `<pre class="code"><span class="c1">assert</span> condition
<span class="c1">assert</span> condition, message</pre>
<p><b>Rule.</b> <code>assert</code> is a statement. Python evaluates the condition: if it is truthy, nothing happens and the next line runs. If it is falsy, Python raises <code>AssertionError</code>, with the message (evaluated only then) as its text, and the program stops unless the exception is handled. A traceback's last line names the exception, such as <code>AssertionError: average([4, 4])</code>, and the lines above it show where it was raised.</p>
<p>A passing test shows only that the code is right for that input. Asserts are skipped entirely when Python runs with the <code>-O</code> option, so they are for checking your own code, never for validating a user's input. Compare floats with a tolerance, such as <code>abs(x - 0.3) &lt; 1e-9</code>, because <code>0.1 + 0.2 == 0.3</code> is False.</p>`,
  legend: [
    { c: "c1", sym: `<code>assert average([0, 6]) == 3.0</code>`, name: "Line about to run", desc: "A test line: it calls the function and compares the result with the answer worked out by hand." },
    { c: "c2", sym: `<code>total = 4</code>`, name: "Variable that just changed", desc: "Watching values change on a failing input is how you find the line where the bug is." },
    { c: "c5", sym: `<code>return 2.0</code>`, name: "Return value", desc: "What the function under test gives back; the assert compares it with the expected value." },
    { c: "c3", sym: `<code>AssertionError</code>`, name: "Output", desc: "Printed lines, and at the end the error that stopped the program when a test failed." }
  ],
  steps: { title: "How to test and debug a function", items: [
    `Pick inputs and work out each expected answer by hand before running anything.`,
    `Include edge cases: empty, one item, zero, negatives, and values at a boundary.`,
    `Write each case as <code>assert f(input) == expected, "label"</code> and run them all.`,
    `For a failure, read the last line of the traceback, then trace the function on that input until a value differs from what you expected.`,
    `Fix the line, then rerun every test, not only the one that failed.`
  ] },
  example: {
    prompt: `This <code>average</code> has a bug. Trace the tests and give the output.<pre class="code"><span class="c1">def</span> average(nums):
    total = 0
    <span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(1, <span class="c1">len</span>(nums)):
        total += nums[i]
    <span class="c5">return</span> total / <span class="c1">len</span>(nums)
<span class="c1">assert</span> average([0, 6]) == 3.0
<span class="c1">print</span>(<span class="c3">"test 1 passed"</span>)
<span class="c1">assert</span> average([4, 4]) == 4.0, <span class="c3">"average([4, 4])"</span>
<span class="c1">print</span>(<span class="c3">"test 2 passed"</span>)</pre>`,
    lines: [
      { math: `<code>range(1, 2)</code> → only <code>i = 1</code>`, note: "The loop starts at index 1, so nums[0] is never added. That is the bug." },
      { math: `<code>average([0, 6])</code> <span class="c5">returns 6 / 2 = 3.0</span>`, note: "The skipped item is 0, so the bug has no effect on this input." },
      { math: `<code>3.0 == 3.0</code> → True`, note: "The first assert does nothing and the program goes on." },
      { math: `<span class="c3">test 1 passed</span>`, note: "Line 7 prints." },
      { math: `<code>average([4, 4])</code> <span class="c5">returns 4 / 2 = 2.0</span>`, note: "Only the second 4 is added." },
      { math: `<code>2.0 == 4.0</code> → False`, note: "The second assert raises AssertionError with its message, and the program stops before line 9." }
    ],
    answer: `<pre class="code"><span class="out">test 1 passed</span>
<span class="out">AssertionError: average([4, 4])</span></pre>The second line is the last line of the traceback. Test 1 passed even though the function was wrong; the fix is <code>for x in nums: total += x</code>.`
  },
  why: `<p>Professional programmers spend a large share of their time reading and checking code rather than writing new lines. Tests written once keep paying off: every later change is checked against them in seconds, so a bug that comes back is caught at once. Thinking of edge cases before writing a function also makes the function itself better.</p>`,
  careers: [
    { role: "Software engineer in test", use: "Writes pytest suites with hundreds of small test functions, each asserting one expected result, that run on every change." },
    { role: "Build and release engineer", use: "Sets up continuous integration, such as GitHub Actions, so the whole test suite runs on every commit and blocks a merge when a test fails." },
    { role: "Security engineer", use: "Uses fuzzing tools that feed programs millions of random and malformed inputs, the edge cases no one thought to write by hand." },
    { role: "Data scientist", use: "Puts asserts in analysis notebooks to check that a table has no missing values and the expected number of rows before computing statistics." },
    { role: "Embedded software engineer", use: "Runs unit tests of firmware functions on a simulator, then hardware-in-the-loop tests on the real device." },
    { role: "Site reliability engineer", use: "Debugs production failures by reading tracebacks and logs to find the first point where a value went wrong." }
  ],
  life: [
    "Tasting a recipe before serving it to guests",
    "Checking a long division by multiplying the answer back",
    "Testing a smoke alarm with its test button",
    "Trying the one key that is left to see which lock it opens",
    "A mechanic checking each part in turn to find the source of a noise"
  ],
  fields: [
    { name: "Engineering", use: "Bridges and circuits are tested against expected loads, including the extreme ones, before they are trusted." },
    { name: "Experimental science", use: "A test predicts an outcome first and then checks it, and a failure means a hypothesis must change." },
    { name: "Mathematics", use: "Checking a formula on small cases, such as n = 0 and n = 1, catches errors before any proof is attempted." }
  ],
  prereqWhy: {
    "cs-functions": "A test calls a function with chosen arguments and compares its return value with the expected one. Code you want to test must therefore be a function that returns its answer instead of only printing it."
  },
  unlocksWhy: {
    "cs-files": "AssertionError is the first exception you meet; files bring others, such as a missing file or a line that is not a number. Handling them with try and except, and testing edge cases like an empty file, builds on the habits from this topic."
  },
  beyond: [
    { field: "Software Engineering", why: "Unit, integration and regression testing, test-driven development and continuous integration all grow out of assert-based tests." },
    { field: "Formal Methods", why: "Preconditions, postconditions and loop invariants turn assertions into statements that can be proved for every input, not just tested." },
    { field: "Algorithms", why: "Checking an algorithm against a slow but obviously correct version on many random inputs is a standard way to find bugs." }
  ],
  mistakes: [
    { wrong: `Writing <code>assert (x &gt; 0, "x must be positive")</code> with parentheses.`, fix: `That asserts a two-item tuple, which is always truthy, so it never fails; Python even warns "assertion is always true". Write <code>assert x &gt; 0, "x must be positive"</code>.` },
    { wrong: `Testing only typical inputs, such as <code>[3, 9, 2]</code>.`, fix: `Add edge cases: an empty list, one item, all negative numbers. Those are the inputs that expose wrong starting values and division by zero.` },
    { wrong: `Changing the expected value until the test passes.`, fix: `Work the expected answer out by hand first. If the test fails, either the code or your hand calculation is wrong; find out which.` },
    { wrong: `Comparing floats with <code>==</code>, as in <code>assert 0.1 + 0.2 == 0.3</code>.`, fix: `Floats are rounded in binary, so this fails. Compare with a tolerance: <code>assert abs(0.1 + 0.2 - 0.3) &lt; 1e-9</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">x = 5
<span class="c1">assert</span> x &gt; 0
<span class="c1">print</span>(<span class="c3">"positive"</span>)</pre>`, a: `<pre class="code"><span class="out">positive</span></pre><code>5 &gt; 0</code> is True, so the assert does nothing and the next line runs.` },
    { q: `What happens when this runs?<pre class="code"><span class="c1">def</span> double(n):
    <span class="c5">return</span> n + 2
<span class="c1">assert</span> double(2) == 4
<span class="c1">assert</span> double(3) == 6, <span class="c3">"double(3)"</span>
<span class="c1">print</span>(<span class="c3">"done"</span>)</pre>`, a: `<pre class="code"><span class="out">AssertionError: double(3)</span></pre>The first test passes by coincidence, because 2 + 2 equals 2 × 2. <code>double(3)</code> returns 5, so the second assert fails and <code>done</code> is never printed.` },
    { q: `What does this print, and which kind of test would reveal the bug?<pre class="code"><span class="c1">def</span> largest(nums):
    best = 0
    <span class="c1">for</span> x <span class="c1">in</span> nums:
        <span class="c1">if</span> x &gt; best:
            best = x
    <span class="c5">return</span> best
<span class="c1">print</span>(largest([3, 9, 2]))
<span class="c1">print</span>(largest([-5, -2, -8]))</pre>`, a: `<pre class="code"><span class="out">9</span>
<span class="out">0</span></pre>The largest of <code>[-5, -2, -8]</code> is −2, but no item beats the starting value 0. A test with only negative numbers catches it; the fix is <code>best = nums[0]</code>.` },
    { q: `What does this print?<pre class="code">n = -1
<span class="c1">assert</span> (n &gt; 0, <span class="c3">"n must be positive"</span>)
<span class="c1">print</span>(<span class="c3">"passed"</span>)</pre>`, a: `<pre class="code"><span class="out">passed</span></pre>The parentheses make one tuple, <code>(False, "n must be positive")</code>. A non-empty tuple is truthy, so the assert never fails; Python only warns "assertion is always true, perhaps remove parentheses?".` }
  ],
  origin: `<p>Alan Turing's short 1949 paper "Checking a Large Routine" proposed that a programmer state assertions about the values at points in a program so that its correctness could be checked. The log of the Harvard Mark II for 9 September 1947 has a moth taped into it with the note "First actual case of bug being found"; engineers already called faults bugs, and the joke helped the word stick.</p>`
};
