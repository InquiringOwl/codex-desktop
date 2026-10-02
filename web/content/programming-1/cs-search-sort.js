window.ARITH = window.ARITH || {};
ARITH["cs-search-sort"] = {
  title: "Searching and Simple Sorting",
  short: "Linear search, selection sort and insertion sort",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · searching and sorting",
  hero: `<code><span class="c1">if</span> xs[j] &lt; xs[m]: <span class="c2">m</span> = j</code>`,
  lede: `Linear search checks the items of a list one by one until it finds the target. Selection sort and insertion sort put a list in order by repeating a simple step inside a loop, and counting their comparisons shows how much work each one does.`,
  plain: `<p>To find a name in an unsorted list, there is nothing clever to do: look at the first item, then the next, and stop when you find it. That is <b>linear search</b>. If the name is not there, you look at every item before you can say so.</p>
<p><b>Selection sort</b> works like sorting a hand of cards face up on a table. Find the smallest card and put it first. Then find the smallest of the rest and put it second, and so on.</p>
<p><b>Insertion sort</b> works like picking up cards one at a time. Each new card slides left past the larger cards already in your hand until it reaches its place.</p>
<p>Both sorts are loops inside a loop. Counting how many times they compare two items tells you how the work grows as the list gets longer.</p>`,
  formal: `<p><b>Linear search</b> compares the target with <code>xs[0]</code>, <code>xs[1]</code>, … in order and stops at the first match, returning its index. On a list of <span class="m"><i>n</i></span> items it makes at most <span class="m"><i>n</i></span> comparisons, and exactly <span class="m"><i>n</i></span> when the target is absent. The operator <code>in</code> and the method <code>xs.index(v)</code> search the same way; <code>index</code> raises <code>ValueError</code> when <code>v</code> is not in the list.</p>
<p><b>Selection sort.</b> For <code>i</code> from 0 to <span class="m"><i>n</i> − 2</span>, find the index <code>m</code> of the smallest item in <code>xs[i:]</code> and swap <code>xs[i]</code> with <code>xs[m]</code>. After pass <code>i</code>, <code>xs[:i + 1]</code> holds the smallest items in order. It always makes <span class="m">(<i>n</i> − 1) + (<i>n</i> − 2) + … + 1 = <i>n</i>(<i>n</i> − 1)/2</span> comparisons. Its long-distance swaps can reorder equal items, so it is not stable.</p>
<p><b>Insertion sort.</b> For <code>i</code> from 1 to <span class="m"><i>n</i> − 1</span>, save <code>key = xs[i]</code>, shift every larger item of the sorted part <code>xs[:i]</code> one place right, and put <code>key</code> in the gap. It makes <span class="m"><i>n</i> − 1</span> comparisons on a sorted list and <span class="m"><i>n</i>(<i>n</i> − 1)/2</span> on a reversed one, and it is stable: equal items keep their order. Python's own <code>sort</code> and <code>sorted</code> use Timsort, which is also stable and much faster on long lists.</p>`,
  legend: [
    { c: "c1", sym: `<code>i</code>`, name: "Line about to run · outer index", desc: "The next line to run, and in the bars the index held by <code>i</code>: the place the current pass works on." },
    { c: "c2", sym: `<code>m</code>, <code>j</code>`, name: "Variable that just changed · inner index", desc: "A variable that just changed. In the bars it marks <code>m</code>, the smallest so far, in selection sort, or <code>j</code>, the item being compared, in insertion sort." },
    { c: "c4", sym: `<code>xs</code>`, name: "The list object", desc: "One list sorted in place: the bars are its items, and swaps change that same object." },
    { c: "c3", sym: `<code>[1, 2, 4, 5, 8] 10</code>`, name: "Output", desc: "The sorted list and the number of comparisons counted by <code>comps</code>." }
  ],
  steps: { title: "How to trace a sort by hand", items: [
    "Write the list as a row of boxes with their indices underneath.",
    "Mark the outer index <code>i</code>. Everything on one side of it is the part already done.",
    "Run the inner loop one comparison at a time, adding 1 to a comparison count each time two items are compared.",
    "Selection sort: remember the index of the smallest item seen, then make one swap at the end of the pass.",
    "Insertion sort: lift out the key, shift larger items right one at a time, then drop the key into the gap.",
    "Rewrite the row after every pass and check that the done part is in order."
  ] },
  example: {
    prompt: `Trace this selection sort and give its output.<pre class="code">xs = [3, 1, 2]
comps = 0
<span class="c1">for</span> i <span class="c1">in</span> range(len(xs) - 1):
    m = i
    <span class="c1">for</span> j <span class="c1">in</span> range(i + 1, len(xs)):
        comps += 1
        <span class="c1">if</span> xs[j] &lt; xs[m]:
            m = j
    xs[i], xs[m] = xs[m], xs[i]
<span class="c1">print</span>(xs, comps)</pre>`,
    lines: [
      { math: `<code><span class="c2">i</span> = 0, <span class="c2">m</span> = 0</code>`, note: "Pass 1 looks for the smallest item in all of xs." },
      { math: `<code>xs[1] &lt; xs[0]: 1 &lt; 3</code>`, note: "True, so m becomes 1. comps is 1." },
      { math: `<code>xs[2] &lt; xs[1]: 2 &lt; 1</code>`, note: "False, m stays 1. comps is 2." },
      { math: `<code><span class="c2">xs</span> = [1, 3, 2]</code>`, note: "Swap xs[0] and xs[1]. Index 0 now holds the smallest item." },
      { math: `<code><span class="c2">i</span> = 1: xs[2] &lt; xs[1]: 2 &lt; 3</code>`, note: "True, so m becomes 2. comps is 3." },
      { math: `<code><span class="c2">xs</span> = [1, 2, 3]</code>`, note: "Swap xs[1] and xs[2]. The last item is then in place without a pass of its own." }
    ],
    answer: `<pre class="code"><span class="out">[1, 2, 3] 3</span></pre>`
  },
  why: `<p>Searching and sorting are the first algorithms most programmers meet because the problems are easy to state and the solutions fit in a few lines. They are also the first place where two correct programs can do very different amounts of work.</p>
<p>Tracing these loops builds two habits that carry through the rest of computer science: keeping a loop invariant in mind (the part to the left of <code>i</code> is done) and counting operations to compare algorithms instead of guessing.</p>`,
  careers: [
    { role: "Software engineer", use: "Chooses between a linear scan and a sorted or indexed structure when a lookup runs millions of times." },
    { role: "Database engineer", use: "Decides when a query can use an index and when it must scan every row, which is linear search at scale." },
    { role: "Embedded systems engineer", use: "Uses insertion sort on small, nearly sorted sensor buffers where memory is tight and code must be simple." },
    { role: "Technical interviewer", use: "Asks candidates to trace and count comparisons in simple sorts to check loop reasoning." },
    { role: "Data engineer", use: "Sorts records by key before merging or deduplicating large files in a pipeline." },
    { role: "Language runtime developer", use: "Tunes hybrid sorts such as Timsort, which switch to insertion sort on short runs." }
  ],
  life: [
    "Looking for your keys by checking each pocket in turn",
    "Arranging a hand of cards by sliding each new card into place",
    "Lining students up by height by repeatedly picking the shortest one left",
    "Scanning a receipt line by line for one item",
    "Putting books back on a shelf in alphabetical order one at a time"
  ],
  fields: [
    { name: "Databases", use: "Full table scans and sorting for ORDER BY are the same ideas applied to rows on disk." },
    { name: "Information retrieval", use: "Search engines avoid linear scans by building sorted indexes ahead of time." },
    { name: "Embedded systems", use: "Simple in-place sorts are used where code size and memory matter more than speed." }
  ],
  prereqWhy: {
    "cs-lists": "Search and sort read items by index and swap them inside one list, which needs indexing and in-place mutation of lists.",
    "cs-nested-loops": "Both sorts are a loop inside a loop: the outer loop picks a position, the inner loop scans or shifts the rest."
  },
  unlocksWhy: {
    "cs-efficiency": "Counting the comparisons these searches and sorts make as the list grows is the first step in measuring efficiency."
  },
  beyond: [
    { field: "Data Structures", why: "Binary search finds an item in a sorted list by halving the range each step, far fewer comparisons than linear search." },
    { field: "Algorithms", why: "Merge sort and quicksort sort in about n log n comparisons, and you will prove why n(n - 1)/2 is too many for large n." },
    { field: "Analysis of Algorithms", why: "Best, worst and average case counts become big-O bounds such as O(n) and O(n²)." }
  ],
  mistakes: [
    { wrong: `Returning <code>-1</code> in an <code>else</code> inside the search loop.`, fix: `That gives up after the first item that does not match. Return <code>-1</code> only after the loop has finished.` },
    { wrong: `Swapping with <code>xs[i] = xs[m]</code> then <code>xs[m] = xs[i]</code>.`, fix: `The first line overwrites <code>xs[i]</code>, so both slots end up equal. Use <code>xs[i], xs[m] = xs[m], xs[i]</code>.` },
    { wrong: `Starting the inner loop of selection sort at 0 instead of <code>i + 1</code>.`, fix: `The inner loop must search only the unsorted part <code>xs[i:]</code>; otherwise it finds an item already placed.` },
    { wrong: `In insertion sort, writing <code>xs[j + 1] = xs[j]</code> without saving <code>xs[i]</code> first.`, fix: `The first shift overwrites the item being inserted. Save it as <code>key</code> before the inner loop.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">def find(xs, target):
    <span class="c1">for</span> i <span class="c1">in</span> range(len(xs)):
        <span class="c1">if</span> xs[i] == target:
            <span class="c1">return</span> i
    <span class="c1">return</span> -1

<span class="c1">print</span>(find([5, 8, 8, 2], 8), find([5, 8], 3))</pre>`, a: `<pre class="code"><span class="out">1 -1</span></pre>The search returns at the first match, index 1, not the second 8. A missing target falls out of the loop to <code>return -1</code>.` },
    { q: `How many comparisons does this make?<pre class="code">xs = [4, 9, 2, 7]
comps = 0
<span class="c1">for</span> x <span class="c1">in</span> xs:
    comps += 1
    <span class="c1">if</span> x == 5:
        <span class="c1">break</span>
<span class="c1">print</span>(comps)</pre>`, a: `<pre class="code"><span class="out">4</span></pre>5 is not in the list, so the loop never breaks and compares every item: <span class="m"><i>n</i> = 4</span>.` },
    { q: `What does this print?<pre class="code">xs = [6, 4, 9, 1]
<span class="c1">for</span> i <span class="c1">in</span> range(len(xs) - 1):
    m = i
    <span class="c1">for</span> j <span class="c1">in</span> range(i + 1, len(xs)):
        <span class="c1">if</span> xs[j] &lt; xs[m]:
            m = j
    xs[i], xs[m] = xs[m], xs[i]
    <span class="c1">print</span>(xs)</pre>`, a: `<pre class="code"><span class="out">[1, 4, 9, 6]
[1, 4, 9, 6]
[1, 4, 6, 9]</span></pre>Pass 1 swaps the 1 to the front. In pass 2 the smallest of <code>[4, 9, 6]</code> is already at index 1, so it swaps 4 with itself. Pass 3 swaps 9 and 6.` },
    { q: `What does this print?<pre class="code">def isort(xs):
    comps = 0
    <span class="c1">for</span> i <span class="c1">in</span> range(1, len(xs)):
        key = xs[i]
        j = i - 1
        <span class="c1">while</span> j &gt;= 0:
            comps += 1
            <span class="c1">if</span> xs[j] &lt;= key:
                <span class="c1">break</span>
            xs[j + 1] = xs[j]
            j -= 1
        xs[j + 1] = key
    <span class="c1">return</span> comps

<span class="c1">print</span>(isort([1, 2, 3, 4]), isort([4, 3, 2, 1]))</pre>`, a: `<pre class="code"><span class="out">3 6</span></pre>On a sorted list each pass stops after one comparison: <span class="m"><i>n</i> − 1 = 3</span>. On a reversed list each key shifts past every item before it: <span class="m">1 + 2 + 3 = 6 = <i>n</i>(<i>n</i> − 1)/2</span>.` }
  ]
};
