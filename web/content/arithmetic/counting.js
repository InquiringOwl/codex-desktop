window.ARITH = window.ARITH || {};

ARITH["counting"] = {
  title: "Counting & the Natural Numbers",
  short: "Say one number for each thing, then stop.",
  grade: "Pre-K – Kindergarten",
  hours: 2,
  voice: "young",
  eyebrow: "Number sense · the natural numbers",
  hero: `<span class="m">1, 2, 3, …, <span class="c1"><i>n</i></span>, <span class="c2"><i>n</i> + 1</span>, …</span>`,
  lede: `Every counting number has a next number. Counting a group means matching each object to one number, in order, and the last number you say is how many there are.`,
  plain: `<p>Counting is matching. You point at one thing and say "one." You point at the next thing and say "two." You never skip a thing and you never count a thing twice. The last number you say tells you how many things there are.</p>
<p>The counting numbers never run out. After any number, there is always one more. After 9 comes 10. After 99 comes 100. After a million comes a million and one. We call the number right after <span class="m c1"><i>n</i></span> its <b>successor</b>, and it is <span class="m c2"><i>n</i> + 1</span>.</p>
<p>It does not matter what order you count things in. Count the dots left to right or right to left. You get the same answer both ways.</p>`,
  formal: `<p>The <b>natural numbers</b> are <span class="m">ℕ = {1, 2, 3, …}</span>. Many texts, especially in set theory and computer science, include 0 and write <span class="m">ℕ = {0, 1, 2, …}</span>; the set <span class="m">{0, 1, 2, …}</span> is also called the <b>whole numbers</b> <span class="m">𝕎</span>. Always check which convention a book uses.</p>
<p>The Peano axioms describe ℕ with a starting element and a <b>successor function</b> <span class="m"><i>S</i>(<i>n</i>) = <i>n</i> + 1</span> that is one-to-one and never returns the starting element. The <b>axiom of induction</b> says any set that contains the starting element and is closed under <i>S</i> contains every natural number.</p>
<div class="display">A finite set <i>A</i> has <b>cardinality</b> <span class="c1"><i>n</i></span>, written |<i>A</i>| = <span class="c1"><i>n</i></span>,<br>when there is a one-to-one correspondence (bijection) between <i>A</i> and {1, 2, …, <span class="c1"><i>n</i></span>}.</div>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "The count", desc: "How many objects are in the group. It is the last number said when you count them one by one." },
    { c: "c2", sym: `<i>n</i> + 1`, name: "The successor", desc: "The next counting number after n. Adding one more dot to a ten-frame moves the count from n to n + 1." },
    { c: "c1", sym: `ℕ`, name: "Natural numbers", desc: "The set of counting numbers 1, 2, 3, and so on without end. Some books start it at 0." }
  ],
  steps: { title: "How to count a group of objects", items: [
    `Pick a starting object. Move each object aside, or touch it, as you count so none gets counted twice.`,
    `Say the counting numbers in order, <span class="m">1, 2, 3, …</span>, one number for each object.`,
    `Stop when every object has a number. Do not skip any.`,
    `The last number you said is the count <span class="m c1"><i>n</i></span>.`,
    `For big groups, count in tens: fill a ten-frame, set it aside, and count the full frames by tens before counting the leftovers.`
  ] },
  example: {
    prompt: `Seats in a theater row are numbered 14 through 22. Your class has 9 students. Is that row exactly the right size?`,
    lines: [
      { math: `14, 15, 16, 17, 18, 19, 20, 21, 22`, note: "List every seat number in the row." },
      { math: `1, 2, 3, 4, 5, 6, 7, 8, 9`, note: "Match each seat to a counting number, starting from 1." },
      { math: `<span class="c1"><i>n</i></span> = 9`, note: "The last counting number said is the number of seats." },
      { math: `22 − 14 = 8`, note: "Subtracting alone gives 8, which is one short. It counts the gaps between seats." },
      { math: `22 − 14 + 1 = 9`, note: "Counting from a to b including both ends gives b − a + 1 numbers." }
    ],
    answer: `The row has <span class="m c1">9</span> seats, exactly one for each of the 9 students.`
  },
  why: `<p>Counting is the first place numbers show up in daily life: how many people are coming, how many days until a trip, how many pills are left. Every other part of arithmetic is a shortcut for some kind of counting. Addition is counting on. Multiplication is counting equal groups.</p>
<p>In later math, counting grows into combinatorics and probability, where you count arrangements instead of objects. The idea of matching one thing to one number becomes the idea of a bijection, which is how mathematicians compare the sizes of sets, even infinite ones.</p>`,
  careers: [
    { role: "Pharmacy technician", use: "Counts tablets into prescription bottles, usually in groups of five on a counting tray, and double-checks the total against the order." },
    { role: "Inventory clerk", use: "Performs cycle counts of stock on shelves and reconciles them with the numbers in the inventory system." },
    { role: "Wildlife biologist", use: "Counts animals in survey plots or along transects to estimate the size of a population." },
    { role: "Bank teller", use: "Counts cash drawers at the start and end of each shift so the totals match the day's transactions." },
    { role: "Surgical nurse", use: "Counts sponges, needles and instruments before and after an operation so nothing is left inside the patient." },
    { role: "Election official", use: "Counts ballots by hand during audits and recounts to confirm machine totals." }
  ],
  life: [
    "Checking that everyone is back on the bus after a field trip",
    "Counting days on a calendar until an event",
    "Making sure a bag has the right number of items at checkout",
    "Counting stitches or rows when knitting",
    "Counting reps and sets during exercise"
  ],
  fields: [
    { name: "Combinatorics", use: "Counts arrangements and selections, such as how many ways to choose a team, using rules built on simple counting." },
    { name: "Computer science", use: "Loop counters, array indexes and memory addresses are natural numbers, and off-by-one errors are counting mistakes." },
    { name: "Statistics", use: "Frequency tables and histograms start with counting how many data values fall in each group." },
    { name: "Logic and set theory", use: "Cardinality and mathematical induction are both built on the natural numbers." }
  ],
  prereqWhy: {},
  unlocksWhy: {
    "place-value": "Place value groups counted objects into tens, hundreds and thousands so large counts can be written with only ten digits.",
    "number-line": "The number line puts the counting numbers in order at equal spacing, so the successor n + 1 is always one step to the right of n."
  },
  beyond: [
    { field: "Discrete mathematics", why: "Proof by induction, a core method there, rests directly on the successor structure of ℕ." },
    { field: "Combinatorics and probability", why: "Probabilities of equally likely outcomes are counts divided by counts." },
    { field: "Set theory", why: "Cardinality, defined by one-to-one matching, extends counting to compare infinite sets." }
  ],
  mistakes: [
    { wrong: `Touching the same object twice, or skipping one, while saying the numbers.`, fix: `Move each object to a "done" pile as you count it, so each gets exactly one number.` },
    { wrong: `Saying pages 45 to 112 make <span class="m">112 − 45 = 67</span> pages.`, fix: `When both ends count, add one: <span class="m">112 − 45 + 1 = 68</span> pages.` },
    { wrong: `Counting "…28, 29, 20-10" or "…109, 200" when crossing a ten or a hundred.`, fix: `After 29 comes 30; after 109 comes 110. The ones digit resets to 0 and the tens digit goes up by one.` }
  ],
  practice: [
    { q: `Count by 5s from 5 to 40. How many numbers do you say?`, a: `5, 10, 15, 20, 25, 30, 35, 40 is <b>8</b> numbers (40 ÷ 5 = 8).` },
    { q: `What number comes right after 99? What number comes right before 1,000?`, a: `After 99 comes <b>100</b>. Before 1,000 comes <b>999</b>.` },
    { q: `How many whole numbers are there from 7 to 31, counting both 7 and 31?`, a: `<span class="m">31 − 7 + 1 = 25</span>. There are <b>25</b>.` },
    { q: `You must read pages 45 through 112 of a book. How many pages is that?`, a: `<span class="m">112 − 45 + 1 = 68</span>. It is <b>68</b> pages.` }
  ],
  origin: `Notched bones such as the Lebombo bone from southern Africa (about 43,000 years old) and the Ishango bone from central Africa (about 20,000 years old) are often read as early tally records, though what they were used for is debated. Richard Dedekind (1888) and Giuseppe Peano (1889) gave the first axiom systems for the natural numbers.`
};
