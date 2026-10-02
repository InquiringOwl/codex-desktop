window.ARITH = window.ARITH || {};
ARITH["cs-nested-loops"] = {
  title: "Nested Loops",
  short: "A loop inside a loop: rows and columns, pairs, grids",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · nested loops",
  hero: `<code><span class="c1">for</span> <span class="c2">i</span> in range(3): <span class="c1">for</span> <span class="c2">j</span> in range(4): ...</code>`,
  lede: `A nested loop is a loop inside the body of another loop. The inner loop runs all the way through, from its first value to its last, on every single pass of the outer loop.`,
  plain: `<p>Think of a clock. The minute hand goes all the way around once for each step of the hour hand. A nested loop works the same way: the <b>outer loop</b> takes one step, then the <b>inner loop</b> runs completely, then the outer loop takes its next step and the inner loop starts over from the beginning.</p>
<p>This is how a program walks through anything with rows and columns: a times table, the seats in a theatre, the pixels of an image. The outer variable says which row you are on; the inner variable says which column.</p>
<p>Because the inner loop restarts on every outer pass, the work multiplies. An outer loop of 3 passes around an inner loop of 4 passes runs the inner body 3 × 4 = 12 times. If the inner range depends on the outer variable, as in a triangle of stars, you add up the passes row by row instead.</p>`,
  formal: `<pre class="code"><span class="c1">for</span> i <span class="c1">in</span> outer:
    <span class="c1">for</span> j <span class="c1">in</span> inner:
        body
    after_inner</pre>
<p><b>Rule.</b> The inner <code>for</code> statement is an ordinary statement in the outer loop's body, so it is executed from the start on every outer pass: the inner iterable is evaluated again and <code>j</code> takes all of its items before <code>i</code> moves on. Lines indented under the outer loop but after the inner loop (<code>after_inner</code>) run once per outer pass. The inner variable therefore changes fastest, like the last digit of a counter.</p>
<p><b>Counting.</b> If the outer loop has <span class="m"><i>m</i></span> passes and the inner loop always has <span class="m"><i>n</i></span>, the inner body runs <span class="m"><i>m</i> × <i>n</i></span> times. If the inner loop is <code>range(i)</code> with <code>i</code> going 0 to <span class="m"><i>m</i> − 1</span>, it runs <span class="m">0 + 1 + … + (<i>m</i> − 1) = <i>m</i>(<i>m</i> − 1)/2</span> times. A <code>break</code> in the inner body ends only the inner loop; the outer loop goes on with its next pass.</p>`,
  legend: [
    { c: "c1", sym: `<code>for j in range(1, 4):</code>`, name: "Line about to run", desc: `The inner for line runs once per inner item, plus once more per outer pass to find the inner range used up.` },
    { c: "c2", sym: `<code>i</code>, <code>j</code>`, name: "Variable that just changed", desc: `<code>j</code> changes on every inner pass; <code>i</code> changes only when the inner loop has finished.` },
    { c: "c3", sym: `<code>2 4 6</code>`, name: "Output", desc: `What the program has printed so far, often one row per outer pass.` }
  ],
  steps: { title: "How to trace a nested loop", items: [
    `Write down the outer loop's values and the inner loop's values. If the inner range uses the outer variable, write the inner values for each outer value separately.`,
    `Bind the outer variable to its first value.`,
    `Run the whole inner loop: bind the inner variable to each of its values in turn and run the inner body each time.`,
    `When the inner loop ends, run any lines after it that are still inside the outer body.`,
    `Move the outer variable to its next value and start the inner loop again from its first value.`,
    `To count how many times the inner body runs, multiply the pass counts, or add the inner counts row by row when they differ.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">count = 0
<span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(2):
    <span class="c1">for</span> j <span class="c1">in</span> <span class="c1">range</span>(3):
        count = count + 1
        <span class="c1">print</span>(i, j)
<span class="c1">print</span>("count:", count)</pre>`,
    lines: [
      { math: `<code>range(2)</code> → 0, 1 · <code>range(3)</code> → 0, 1, 2`, note: "The outer loop has 2 passes and the inner loop 3 passes each time." },
      { math: `<code><span class="c2">i</span> = 0</code>: <code><span class="c2">j</span> = 0, 1, 2</code>`, note: "First outer pass: the inner loop runs fully, printing 0 0, 0 1, 0 2. count is 3." },
      { math: `<code><span class="c2">i</span> = 1</code>: <code><span class="c2">j</span> = 0, 1, 2</code>`, note: "Second outer pass: the inner loop starts again at 0, printing 1 0, 1 1, 1 2. count is 6." },
      { math: `<code>2 × 3 = 6</code>`, note: "The outer range is used up. The inner body ran 2 times 3 times." },
      { math: `<code>print("count:", count)</code>`, note: "This line is outside both loops, so it runs once." }
    ],
    answer: `<pre class="code"><span class="out">0 0</span>
<span class="out">0 1</span>
<span class="out">0 2</span>
<span class="out">1 0</span>
<span class="out">1 1</span>
<span class="out">1 2</span>
<span class="out">count: 6</span></pre>`
  },
  why: `<p>Whenever data has two dimensions, a program walks it with two loops: rows and columns of a spreadsheet, a game board, an image, a seating chart. Nested loops are also how a program compares every item with every other item, which is the heart of simple searching and sorting. Knowing that the work multiplies tells you early whether a program will finish in a blink or take hours: two nested loops over a million items run a million million times.</p>`,
  careers: [
    { role: "Data analyst", use: "Loops over each region and, inside that, each month to fill a summary table of sales." },
    { role: "Image processing engineer", use: "Visits every pixel of an image with a loop over rows around a loop over columns to apply a filter." },
    { role: "Game developer", use: "Draws a tile map by looping over the rows of the board and, inside, over the tiles in each row." },
    { role: "Bioinformatician", use: "Compares every position of one DNA sequence with every position of another when filling an alignment table." },
    { role: "Operations research analyst", use: "Tries every pairing of workers and shifts in a small schedule to find the cheapest assignment." },
    { role: "Test engineer", use: "Runs a function on every combination of two input lists so that no pair of settings is left untested." }
  ],
  life: [
    "Reading a book page by page, and each page line by line",
    "A clock, where the minute hand goes round once for each hour",
    "Setting the table: for each table, put down each place setting",
    "Trying every shirt with every pair of trousers",
    "Checking every seat in every row of a theatre"
  ],
  fields: [
    { name: "Mathematics", use: "A multiplication table and a double sum over i and j are nested loops." },
    { name: "Combinatorics", use: "Counting ordered pairs from two sets is the product rule, which is what a nested loop's pass count follows." },
    { name: "Physics simulation", use: "Grid-based simulations update every cell in a 2D grid on each time step." },
    { name: "Spreadsheets", use: "Filling a block of cells works row by row, then cell by cell." }
  ],
  prereqWhy: {
    "cs-for": `A nested loop is a for loop placed inside the body of another for loop, so you need to know exactly which values each range gives.`
  },
  unlocksWhy: {
    "cs-search-sort": `Selection and insertion sort use an outer loop over positions and an inner loop that scans or shifts the rest of the list.`,
    "cs-2d-data": `A grid stored as a list of rows is visited with an outer loop over the rows and an inner loop over the items in each row.`
  },
  mathWhy: {
    "multiplication": `A nested loop with <span class="m"><i>m</i></span> outer passes and <span class="m"><i>n</i></span> inner passes runs its inner body <span class="m"><i>m</i> × <i>n</i></span> times, the same as counting the cells of an <span class="m"><i>m</i></span> by <span class="m"><i>n</i></span> rectangle. A times table is the classic nested loop.`
  },
  beyond: [
    { field: "Algorithms", why: "The number of times nested loops run is the first step in measuring running time, where two loops over n items give about n squared steps." },
    { field: "Data Structures", why: "Matrices, tables and adjacency matrices of graphs are processed with nested loops over rows and columns." },
    { field: "Computer Graphics", why: "Rasterising a shape fills it pixel by pixel with nested loops over screen rows and columns." }
  ],
  mistakes: [
    { wrong: `Using the same name for both loop variables, as in <code>for i in range(3):</code> with <code>for i in range(4):</code> inside.`, fix: `The inner loop rebinds <code>i</code>, so lines after it see the inner value. Give each loop its own name, such as <code>i</code> and <code>j</code> or <code>row</code> and <code>col</code>.` },
    { wrong: `Putting a line meant to run once per row inside the inner loop, or at the wrong indent.`, fix: `Indentation decides which loop a line belongs to. A line at the outer body's indent, after the inner loop, runs once per outer pass.` },
    { wrong: `Expecting <code>break</code> in the inner loop to stop both loops.`, fix: `<code>break</code> ends only the innermost loop it is in. The outer loop continues with its next pass.` },
    { wrong: `Resetting a row's accumulator outside the outer loop, so it carries over from one row to the next.`, fix: `Set per-row values, such as <code>line = ""</code>, at the top of the outer body, before the inner loop starts.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(2):
    <span class="c1">for</span> j <span class="c1">in</span> <span class="c1">range</span>(2):
        <span class="c1">print</span>(i, j)</pre>`, a: `<pre class="code"><span class="out">0 0</span>
<span class="out">0 1</span>
<span class="out">1 0</span>
<span class="out">1 1</span></pre>For each value of <code>i</code>, <code>j</code> takes both of its values before <code>i</code> moves on.` },
    { q: `What does this print?<pre class="code">n = 0
<span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(3):
    <span class="c1">for</span> j <span class="c1">in</span> <span class="c1">range</span>(5):
        n = n + 1
<span class="c1">print</span>(n)</pre>`, a: `<pre class="code"><span class="out">15</span></pre>The inner body runs 5 times on each of the 3 outer passes: 3 × 5 = 15.` },
    { q: `What does this print?<pre class="code"><span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(1, 4):
    <span class="c1">for</span> j <span class="c1">in</span> <span class="c1">range</span>(i):
        <span class="c1">print</span>(i, end="")
    <span class="c1">print</span>()</pre>`, a: `<pre class="code"><span class="out">1</span>
<span class="out">22</span>
<span class="out">333</span></pre>The inner loop runs <code>i</code> times, printing <code>i</code> without a new line; the empty <code>print()</code> then ends the row.` },
    { q: `What does this print?<pre class="code"><span class="c1">for</span> i <span class="c1">in</span> <span class="c1">range</span>(3):
    <span class="c1">for</span> j <span class="c1">in</span> <span class="c1">range</span>(3):
        <span class="c1">if</span> j == i:
            <span class="c1">break</span>
        <span class="c1">print</span>(i, j)</pre>`, a: `<pre class="code"><span class="out">1 0</span>
<span class="out">2 0</span>
<span class="out">2 1</span></pre>When <code>i</code> is 0 the inner loop breaks at once. When <code>i</code> is 1 it prints <code>1 0</code> then breaks at <code>j = 1</code>; when <code>i</code> is 2 it prints two pairs. Each <code>break</code> ends only the inner loop, so the outer loop always goes on.` }
  ]
};
