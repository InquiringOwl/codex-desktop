window.ARITH = window.ARITH || {};
ARITH["cs-for"] = {
  title: "For Loops and Ranges",
  short: "Run a block once for each item, counting with range",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · for loops",
  hero: `<code><span class="c1">for</span> <span class="c2">i</span> in range(1, 6): total += i</code>`,
  lede: `A for loop runs its block once for each item of a sequence, binding the loop variable to each item in turn. With <code>range</code>, that sequence is a run of evenly spaced integers.`,
  plain: `<p>A while loop keeps going until a test fails. A <b>for loop</b> instead walks through a collection of items: for each one, it binds the loop variable to that item and runs the block. When the items run out, the loop ends. You never write the update yourself, so you cannot forget it.</p>
<p>The most common collection is a <b>range</b>. <code>range(5)</code> gives 0, 1, 2, 3, 4: five numbers, starting at 0 and stopping <b>before</b> 5. <code>range(1, 6)</code> gives 1 to 5, and <code>range(2, 11, 3)</code> counts by 3: 2, 5, 8. A negative step counts down, so <code>range(10, 0, -3)</code> gives 10, 7, 4, 1.</p>
<p>A loop often builds up an answer in an <b>accumulator</b>: a variable set to 0 before the loop, with each item added to it inside, as in <code>total += i</code>. A for loop can also walk through the characters of a string or the items of a list in exactly the same way.</p>`,
  formal: `<pre class="code"><span class="c1">for</span> name <span class="c1">in</span> iterable:
    block</pre>
<p><b>Rule.</b> Python asks the iterable for its items one at a time. For each item it binds <code>name</code> to it and runs the block; when there are no items left, the loop ends. After the loop, <code>name</code> keeps the last item it was bound to (if there were no items it was never assigned). Rebinding <code>name</code> inside the block does not change which item comes next. Strings give their characters and lists their elements, in order. <code>total += i</code> means <code>total = total + i</code>.</p>
<p><b>range.</b> <code>range(stop)</code> is <code>range(0, stop)</code>, and <code>range(start, stop)</code> has step 1. <code>range(start, stop, step)</code> gives <code>start</code>, <code>start + step</code>, <code>start + 2*step</code>, … for as long as the value is <b>below</b> <code>stop</code> (step &gt; 0) or <b>above</b> it (step &lt; 0); <code>stop</code> itself is never included. If the first value already fails, the range is empty and the body runs zero times. For <code>a &lt;= b</code>, <code>range(a, b)</code> has <code>b - a</code> items. A step of 0 is a <code>ValueError</code>.</p>`,
  legend: [
    { c: "c1", sym: `<code>for i in range(1, 6):</code>`, name: "Line about to run", desc: `The for line runs once per item to fetch the next one, and once more to find there are none left.` },
    { c: "c2", sym: `<code>i</code>`, name: "Variable that just changed", desc: `The loop variable, rebound to the next item, or the accumulator after an update.` },
    { c: "c3", sym: `<code>15</code>`, name: "Output", desc: `What the program has printed so far.` }
  ],
  steps: { title: "How to trace a for loop over a range", items: [
    `List the numbers the range gives: start at <code>start</code>, add <code>step</code>, and stop before reaching or passing <code>stop</code>.`,
    `Set up any accumulators exactly as the lines before the loop do.`,
    `For each number in the list, bind the loop variable to it and run the body once, updating your values.`,
    `When the list is used up, go to the first line after the body.`,
    `Remember that the loop variable still holds the last number after the loop.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">total = 0
<span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(1, 6):
    total = total + i
<span class="c1">print</span>(total)
<span class="c1">print</span>(i)</pre>`,
    lines: [
      { math: `<code>range(1, 6)</code> → 1, 2, 3, 4, 5`, note: "The range starts at 1 and stops before 6." },
      { math: `<code><span class="c2">i</span> = 1</code>, <code><span class="c2">total</span> = 1</code>`, note: "Pass 1: the loop binds i to the first number and the body adds it." },
      { math: `<code><span class="c2">i</span> = 2</code>, <code><span class="c2">total</span> = 3</code>`, note: "Pass 2." },
      { math: `<code><span class="c2">i</span> = 3, 4, 5</code>, <code><span class="c2">total</span> = 6, 10, 15</code>`, note: "Passes 3 to 5, then the range has no numbers left." },
      { math: `<code>print(total)</code>, <code>print(i)</code>`, note: "The sum is 15, and i keeps its last value, 5." }
    ],
    answer: `<pre class="code"><span class="out">15</span>
<span class="out">5</span></pre>`
  },
  why: `<p>Most repetition in real programs is "do this for each one": each row of a spreadsheet, each pixel of an image, each student in a class, each year of a loan. A for loop says that directly and cannot run forever over a range. Getting the ends of a range right, stopping before <code>stop</code> and counting down with a negative step, prevents the off-by-one errors that cause many loop bugs.</p>`,
  careers: [
    { role: "Data analyst", use: "Loops over the rows of a CSV file with Python's csv module, adding up sales by region in accumulators." },
    { role: "Bioinformatician", use: "Walks through a DNA string character by character to count G and C bases and compute GC content." },
    { role: "Machine learning engineer", use: "Writes training loops such as for epoch in range(num_epochs), with an inner loop over batches of data." },
    { role: "Graphics programmer", use: "Loops over every pixel of an image with nested for loops to apply a filter or change brightness." },
    { role: "Quantitative analyst", use: "Projects an investment year by year in a for loop over range(years), compounding the balance each pass." },
    { role: "Software test engineer", use: "Runs the same test on every input in a list of edge cases with a loop or pytest's parametrize." }
  ],
  life: [
    "Doing ten push-ups and counting each one",
    "Dealing one card to each player around a table",
    "Checking off every item on a shopping list in order",
    "Adding up the prices on a receipt line by line",
    "Counting down from 10 by threes in a game"
  ],
  fields: [
    { name: "Discrete mathematics", use: "Summation notation with an index from 1 to n is a for loop with an accumulator." },
    { name: "Statistics", use: "A mean is computed by looping over the data once to total the values and count them." },
    { name: "Numerical analysis", use: "A Riemann sum loops over the subintervals of a range and adds up the areas of the rectangles." },
    { name: "Signal processing", use: "Filters loop over the samples of a recording, combining each one with its neighbours." }
  ],
  prereqWhy: {
    "cs-conditionals": `A for loop's body is an ordinary block, and it often contains an if to choose which items to count or add, such as only the multiples of 3.`
  },
  unlocksWhy: {
    "cs-nested-loops": `A nested loop is a for loop inside the body of another for loop, so the inner range runs again on every outer pass.`,
    "cs-functions": `Many functions loop over their inputs with a for loop and return the accumulated result.`,
    "cs-strings": `A for loop over a string binds the loop variable to each character in turn, and range(len(s)) walks its indices.`
  },
  mathWhy: {
    "a1-sequences": `<code>range(a, b, d)</code> is the arithmetic sequence with first term <span class="m"><i>a</i></span> and common difference <span class="m"><i>d</i></span>, cut off before <span class="m"><i>b</i></span>: its <span class="m"><i>n</i></span>th term is <span class="m"><i>a</i> + (<i>n</i> − 1)<i>d</i></span>. An accumulator computes the sum of the terms, so the loop over <code>range(1, n + 1)</code> gives <span class="m"><i>n</i>(<i>n</i> + 1)/2</span>.`
  },
  beyond: [
    { field: "Data Structures", why: "The same for loop walks lists, dictionaries, sets and files, because they all follow Python's iterator protocol." },
    { field: "Algorithms", why: "Counting how many times a loop body runs is the first step in measuring how long an algorithm takes." },
    { field: "Functional Programming", why: "List comprehensions and map express many accumulator loops in one expression." }
  ],
  mistakes: [
    { wrong: `Expecting <code>range(1, 5)</code> to include 5.`, fix: `The stop value is never included: <code>range(1, 5)</code> is 1, 2, 3, 4. To count 1 to n, write <code>range(1, n + 1)</code>.` },
    { wrong: `Writing <code>range(10, 0)</code> to count down.`, fix: `The default step is +1, and 10 is not below 0, so the range is empty. Use a negative step: <code>range(10, 0, -1)</code>.` },
    { wrong: `Setting <code>total = 0</code> inside the loop body.`, fix: `The accumulator is reset on every pass and ends up holding only the last item. Initialise it once, before the loop.` },
    { wrong: `Changing <code>i</code> inside the body to skip ahead.`, fix: `On the next pass the loop rebinds <code>i</code> to the next item of the range anyway. Use a while loop when you need to control the steps.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(4):
    <span class="c1">print</span>(i)</pre>`,
      a: `<pre class="code"><span class="out">0</span>
<span class="out">1</span>
<span class="out">2</span>
<span class="out">3</span></pre><code>range(4)</code> starts at 0 and stops before 4, so it gives four numbers.` },
    { q: `What does this print?<pre class="code"><span class="c1">for</span> k <span class="c1">in</span> <span class="c1">range</span>(10, 0, -3):
    <span class="c1">print</span>(k)</pre>`,
      a: `<pre class="code"><span class="out">10</span>
<span class="out">7</span>
<span class="out">4</span>
<span class="out">1</span></pre>The step is −3, so the range counts down while the value is above 0. After 1 the next value would be −2, which is not above 0.` },
    { q: `What does this print?<pre class="code">total = 0
<span class="c1">for</span> n <span class="c1">in</span> <span class="c1">range</span>(1, 10, 2):
    total += n
<span class="c1">print</span>(total)</pre>`,
      a: `<pre class="code"><span class="out">25</span></pre>The range gives the odd numbers 1, 3, 5, 7, 9, and 1 + 3 + 5 + 7 + 9 = 25. The sum of the first <span class="m"><i>n</i></span> odd numbers is always <span class="m"><i>n</i><sup>2</sup></span>.` },
    { q: `What does this print?<pre class="code">count = 0
<span class="c1">for</span> x <span class="c1">in</span> <span class="c1">range</span>(1, 20):
    <span class="c1">if</span> x % 3 == 0:
        count += 1
<span class="c1">print</span>(count, x)</pre>`,
      a: `<pre class="code"><span class="out">6 19</span></pre>The multiples of 3 below 20 are 3, 6, 9, 12, 15, 18, so <code>count</code> is 6. The loop variable <code>x</code> keeps the last value of the range, 19, even though 19 is not a multiple of 3.` }
  ],
  origin: `<p>FORTRAN's DO loop (1957) counted an integer from a start value to an end value, and most languages since have had a counting loop. Python's for loop works differently: it takes each item of any iterable in turn, and <code>range</code> supplies the integers when you want to count.</p>`
};
