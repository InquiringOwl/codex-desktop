window.ARITH = window.ARITH || {};
ARITH["cs-efficiency"] = {
  title: "Counting Steps: a First Look at Efficiency",
  short: "Count the work, see how it grows: n, n², 2ⁿ",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · efficiency",
  hero: `<code><span class="c2">comps</span> += <span class="c1">1</span></code>`,
  lede: `To judge how fast an algorithm is, count the basic steps it takes and watch how that count grows as the input gets bigger. Seconds depend on the machine; the growth does not.`,
  plain: `<p>A stopwatch tells you how long one run took on one computer. A better question is: if the list were twice as long, how much more work would the program do? To answer it, add a counter to the program and increase it each time the step you care about happens, such as comparing an item with the target.</p>
<p>Linear search on a list of 4 items that does not hold the target makes 4 comparisons. On 8 items it makes 8, on 16 it makes 16. The work grows in step with the size. A loop inside a loop is different: checking every pair of 4 items takes 16 steps, and 8 items take 64. Doubling the input made the work four times bigger.</p>
<p>Computer scientists name these growth rates with <b>Big-O</b>: linear search is O(n), all pairs is O(n²). The name ignores small details and keeps only how fast the count grows.</p>`,
  formal: `<p><b>Counting.</b> Pick a basic operation (a comparison, a loop body, a function call) and count how many times it runs as a function of the input size <span class="m">n</span>. The <b>worst case</b> is the largest count over all inputs of size n. Linear search makes at most <span class="m">n</span> comparisons, exactly n when the target is missing.</p>
<p><b>Nested loops.</b> <code>for i in range(n): for j in range(n):</code> runs its body exactly <span class="m">n · n = n²</span> times. With <code>for j in range(i + 1, n):</code> each unordered pair is visited once, <span class="m">(n − 1) + … + 1 + 0 = n(n − 1)/2</span> times. Halving <code>n</code> repeatedly with <code>n // 2</code> until it reaches 1 takes about <span class="m">log₂ n</span> steps (exactly 6 for 64).</p>
<p><b>Big-O, informally.</b> O(f(n)) means the count grows no faster than a constant times f(n) once n is large: constants and smaller terms are dropped, so <span class="m">n(n − 1)/2</span> is O(n²). Common rates from slow to fast growth: O(log n), O(n), O(n²), O(2ⁿ).</p>`,
  legend: [
    { c: "c1", sym: `<code>if xs[i] == target:</code>`, name: "Line about to run", desc: "The step being counted is the line that runs again and again." },
    { c: "c2", sym: `<code>comps</code>`, name: "Counter that just changed", desc: "The counter goes up by one each time the counted operation happens." },
    { c: "c3", sym: `<code>n = 8 comparisons: 8</code>`, name: "Output", desc: "The final count, printed so runs of different sizes can be compared." },
    { c: "c5", sym: `<code>return -1, comps</code>`, name: "Return value", desc: "A function can return its count alongside its answer." }
  ],
  steps: { title: "How to measure growth by counting", items: [
    "Choose the operation to count, usually the one inside the innermost loop.",
    "Add <code>count = 0</code> before the loops and <code>count += 1</code> right next to that operation.",
    "Run the program for several sizes, doubling n each time: 4, 8, 16.",
    "Compare the counts: doubling n doubles an O(n) count and multiplies an O(n²) count by four.",
    "Use the worst-case input (for search, a target that is not there) so the count is the most the algorithm can need.",
    "Name the growth rate, dropping constants: n(n − 1)/2 is O(n²)."
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">def linear_search(xs, target):
    comps = 0
    for i in range(len(xs)):
        comps += 1
        if xs[i] == target:
            return i, comps
    return -1, comps

<span class="c1">print</span>(linear_search([4, 8, 1, 6, 3], 1))
<span class="c1">print</span>(linear_search([4, 8, 1, 6, 3], 9))</pre>`,
    lines: [
      { math: `<code>linear_search(xs, 1)</code>, <code><span class="c2">comps</span> = 0</code>`, note: "The first call starts its counter at zero." },
      { math: `<code>i = 0, 1</code>: <code>comps = 2</code>`, note: "4 and 8 are not the target; each check adds one." },
      { math: `<code>i = 2</code>: <code>comps = 3</code>, <code>1 == 1</code>`, note: "Found on the third comparison." },
      { math: `<code><span class="c5">(2, 3)</span></code>`, note: "The function returns the index and the count together as a tuple." },
      { math: `<code>linear_search(xs, 9)</code>`, note: "A second call with a fresh counter, looking for a missing value." },
      { math: `<code>comps = 5</code>`, note: "Every one of the 5 items was compared: the worst case is n." },
      { math: `<code><span class="c5">(-1, 5)</span></code>`, note: "The loop finished without a match, so -1 is returned with the count." }
    ],
    answer: `<pre class="code"><span class="out">(2, 3)</span>
<span class="out">(-1, 5)</span></pre>`
  },
  why: `<p>Programs that are fast on ten items can be hopeless on a million. Counting steps lets you see that before it happens: an O(n) loop over a million items is a million steps, an O(n²) pair check is a million million. Choosing the algorithm with the slower-growing count matters far more than a faster computer, and this way of thinking is the start of every algorithms course.</p>`,
  careers: [
    { role: "Software engineer", use: "Replaces a nested loop that compares every pair of records with a dict lookup when a feature slows down as user numbers grow." },
    { role: "Site reliability engineer", use: "Spots that a request's latency grows with the size of a customer's data and traces it to a quadratic loop." },
    { role: "Database engineer", use: "Adds an index so a query no longer scans every row, changing a linear search into a much faster lookup." },
    { role: "Competitive programming coach", use: "Teaches students to estimate the step count from the input limits before writing a solution." },
    { role: "Data engineer", use: "Checks that a pipeline step grows linearly with the number of rows before running it on a full day of logs." },
    { role: "Game engine programmer", use: "Uses spatial grids so collision checks do not test every pair of objects each frame." }
  ],
  life: [
    "Looking for your keys by checking every pocket, one by one",
    "Everyone at a party shaking hands with everyone else",
    "Finding a word in a dictionary by halving the pages",
    "Folding a sheet of paper in half again and again",
    "A rumour that doubles the number of people who know it each day"
  ],
  fields: [
    { name: "Algorithms", use: "Analyses the exact and asymptotic step counts of sorting, searching and graph algorithms." },
    { name: "Databases", use: "Query planners estimate the cost of each way to answer a query and pick the cheapest." },
    { name: "Theory of computation", use: "Sorts problems into classes such as P by how the work to solve them grows." },
    { name: "Cryptography", use: "Relies on attacks needing exponentially many steps as the key gets longer." }
  ],
  prereqWhy: {
    "cs-search-sort": "Linear search, selection sort and insertion sort are the algorithms whose comparisons we now count and compare as the list grows.",
    "cs-recursion": "Recursive calls can be counted too, and naive recursive Fibonacci shows how fast the number of calls can grow."
  },
  mathWhy: {
    "a1-exp-functions": "Exponential functions explain why 2<span class=\"m\">ⁿ</span> soon dwarfs <span class=\"m\">n²</span>: doubling n multiplies n² by 4, but squares 2<span class=\"m\">ⁿ</span>. At n = 10 they are 100 and 1024; at n = 20 they are 400 and 1048576."
  },
  beyond: [
    { field: "Algorithms and Complexity", why: "Big-O, Big-Theta and Big-Omega are defined precisely and proved for real algorithms." },
    { field: "Data Structures", why: "Each structure is chosen for the step counts of its operations, such as O(1) dict lookup against O(n) list search." },
    { field: "Theory of Computation", why: "The question of P versus NP asks whether some exponential searches can be done in polynomial time." }
  ],
  mistakes: [
    { wrong: "Timing one run with a stopwatch and calling the algorithm fast.", fix: "Run it for several sizes and count steps. The growth, not one time, tells you how it will behave on big inputs." },
    { wrong: "Saying a pair loop with <code>range(i + 1, n)</code> does n² steps.", fix: "It does exactly n(n − 1)/2, about half. It is still O(n²), because constants are dropped." },
    { wrong: "Counting only the lucky case, such as a target found first.", fix: "Use the worst case: a missing target makes linear search compare all n items." },
    { wrong: "Thinking two loops one after the other give n².", fix: "Loops in sequence add: n + n = 2n, which is O(n). Only nesting multiplies." }
  ],
  practice: [
    { q: `What does this print?<pre class="code">steps = 0
for i in range(10):
    steps += 1
<span class="c1">print</span>(steps)</pre>`, a: `<pre class="code"><span class="out">10</span></pre>One loop over n = 10 items runs its body 10 times. The count grows linearly, O(n).` },
    { q: `What does this print?<pre class="code">for n in [3, 6]:
    count = 0
    for i in range(n):
        for j in range(i + 1, n):
            count += 1
    <span class="c1">print</span>(n, count)</pre>`, a: `<pre class="code"><span class="out">3 3</span>
<span class="out">6 15</span></pre>Each pair i &lt; j is counted once: n(n − 1)/2 is 3 for n = 3 and 15 for n = 6. Doubling n made the count five times bigger here, and the ratio heads towards 4 as n grows.` },
    { q: `What does this print?<pre class="code">n = 64
steps = 0
while n &gt; 1:
    n = n // 2
    steps += 1
<span class="c1">print</span>(steps)</pre>`, a: `<pre class="code"><span class="out">6</span></pre>64, 32, 16, 8, 4, 2, 1: six halvings. That is log₂ 64, the slow O(log n) growth behind binary search.` },
    { q: `What does this print?<pre class="code">calls = 0

def fib(n):
    global calls
    calls += 1
    if n &lt; 2:
        return n
    return fib(n - 1) + fib(n - 2)

for n in [5, 10, 20]:
    calls = 0
    fib(n)
    <span class="c1">print</span>(n, calls)</pre>`, a: `<pre class="code"><span class="out">5 15</span>
<span class="out">10 177</span>
<span class="out">20 21891</span></pre>Each call makes two more until the base case, so the count grows exponentially: going from n = 10 to n = 20 multiplies the calls by about 124. Each extra 1 in n multiplies them by roughly 1.6.` }
  ],
  origin: `<p>Donald Knuth's The Art of Computer Programming, begun in 1968, made counting the steps of an algorithm a standard method and in 1976 urged computer scientists to use Big-O, Big-Omega and Big-Theta. The O notation itself came from number theory, used by Paul Bachmann in 1894 and Edmund Landau after him.</p>`
};
