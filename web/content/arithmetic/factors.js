window.ARITH = window.ARITH || {};

ARITH["factors"] = {
  title: "Factors, Multiples & Divisibility",
  short: "Which numbers divide evenly into which",
  grade: "Grade 4",
  hours: 5,
  voice: "mixed",
  eyebrow: "Number theory · divisibility",
  hero: `<span class="m"><span class="c1"><i>n</i></span> = <span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span></span>`,
  lede: `A factor of a number divides it with no remainder. Each way to write n as a product is one rectangle of n tiles.`,
  plain: `<p>Take 12 square tiles and try to arrange them into a full rectangle. You can make 1 by 12, 2 by 6 and 3 by 4. The side lengths 1, 2, 3, 4, 6 and 12 are the <b>factors</b> of 12. They are the numbers that divide 12 with nothing left over.</p>
<p>A <b>multiple</b> goes the other way. The multiples of 3 are what you get by counting in threes: 3, 6, 9, 12, 15 and so on. Since 12 is on that list, 12 is a multiple of 3 and 3 is a factor of 12. These are two ways of saying the same fact.</p>
<p>Factors come in pairs that multiply to the number. Once the pairs start repeating, you have found them all. For 36 the pairs are 1 × 36, 2 × 18, 3 × 12, 4 × 9 and 6 × 6.</p>
<p>Divisibility rules let you test a big number quickly without doing the division. For example, a number is divisible by 3 when its digits add to a multiple of 3.</p>`,
  formal: `<p>For integers <i>a</i> and <i>n</i> with <span class="m"><i>a</i> ≠ 0</span>, we say <b><i>a</i> divides <i>n</i></b>, written <span class="m"><i>a</i> | <i>n</i></span>, if there is an integer <i>k</i> with <span class="m"><i>n</i> = <i>ak</i></span>. Then <i>a</i> is a <b>factor</b> (divisor) of <i>n</i> and <i>n</i> is a <b>multiple</b> of <i>a</i>. Equivalently, the division algorithm gives remainder <span class="m"><i>r</i> = 0</span>.</p>
<div class="display">Divisibility tests for a positive integer <i>n</i> in base ten:<br>2: last digit is even · 5: last digit is 0 or 5 · 10: last digit is 0<br>4: the number formed by the last two digits is divisible by 4<br>3 (or 9): the digit sum is divisible by 3 (or 9)<br>6: divisible by both 2 and 3</div>
<p>Divisibility is transitive: if <span class="m"><i>a</i> | <i>b</i></span> and <span class="m"><i>b</i> | <i>c</i></span> then <span class="m"><i>a</i> | <i>c</i></span>. If <span class="m"><i>a</i> | <i>m</i></span> and <span class="m"><i>a</i> | <i>n</i></span> then <span class="m"><i>a</i> | (<i>m</i> + <i>n</i>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "The number", desc: "The whole number being factored. In the lab it is the area of every rectangle." },
    { c: "c2", sym: `<i>a</i>`, name: "First factor", desc: "One side of the rectangle. It divides n with no remainder." },
    { c: "c3", sym: `<i>b</i>`, name: "Partner factor", desc: "The other side, equal to n ÷ a. Together a and b form a factor pair." },
    { c: "c4", sym: `<i>a</i> | <i>n</i>`, name: "Divides", desc: "Read \"a divides n\". It means n is a multiple of a." }
  ],
  steps: { title: "How to list every factor of a number", items: [
    `Start with the pair <span class="m">1 × <i>n</i></span>.`,
    `Try each whole number 2, 3, 4, … in turn. Use divisibility rules to skip quickly.`,
    `Each time a number <i>a</i> divides <i>n</i>, record the pair <span class="m"><i>a</i> × (<i>n</i> ÷ <i>a</i>)</span>.`,
    `Stop once <span class="m"><i>a</i> × <i>a</i></span> is larger than <i>n</i>. Every pair has been found by then.`,
    `List all the numbers from the pairs in order.`
  ] },
  example: {
    prompt: `An event planner has 84 chairs to set out in equal rows. Each row must hold at least 6 and at most 15 chairs. What row sizes work, and how many rows does each give?`,
    lines: [
      { math: `<span class="m"><span class="c1">84</span> = <span class="c2">1</span> × <span class="c3">84</span> = <span class="c2">2</span> × <span class="c3">42</span> = <span class="c2">3</span> × <span class="c3">28</span></span>`, note: "Test 1, 2 and 3. 84 is even, and its digits add to 12, so 2 and 3 both work." },
      { math: `<span class="m"><span class="c1">84</span> = <span class="c2">4</span> × <span class="c3">21</span> = <span class="c2">6</span> × <span class="c3">14</span> = <span class="c2">7</span> × <span class="c3">12</span></span>`, note: "5 fails because 84 does not end in 0 or 5. 4, 6 and 7 work." },
      { math: `<span class="m">8 × 8 = 64, 9 × 9 = 81, 10 × 10 = 100 &gt; 84</span>`, note: "8 and 9 do not divide 84. Since 10 × 10 passes 84, all pairs are found." },
      { math: `<span class="m">1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84</span>`, note: "The 12 factors of 84." },
      { math: `<span class="m">6, 7, 12, 14</span>`, note: "The factors between 6 and 15." }
    ],
    answer: `Rows of 6, 7, 12 or 14 chairs work, giving 14, 12, 7 or 6 rows.`
  },
  why: `<p>Factors answer everyday grouping questions: how to split a class into equal teams, pack items into full boxes, or lay out a grid of tiles. Divisibility rules let you check a total quickly in your head.</p>
<p>Later math uses factors constantly. Simplifying fractions, finding common denominators, prime factorization, and factoring polynomials in algebra all build on this idea.</p>`,
  careers: [
    { role: "Warehouse manager", use: "Picks case and pallet counts that divide a shipment evenly, such as 144 units as 12 cases of 12." },
    { role: "Teacher", use: "Uses the factors of a class size to form equal-sized groups for activities." },
    { role: "Event planner", use: "Chooses table and row layouts whose sizes divide the guest count." },
    { role: "Software developer", use: "Tests divisibility with the modulo operator to paginate lists, stripe table rows, or batch jobs." },
    { role: "Graphic designer", use: "Picks column counts for a layout grid that divide the page width in pixels evenly." }
  ],
  life: [
    "Splitting a bill or a bag of snacks evenly among friends",
    "Arranging photos in a grid with no gaps",
    "Checking whether a year is a leap year",
    "Buying packs so there are no leftovers",
    "Planning equal teams for a game"
  ],
  fields: [
    { name: "Computer science", use: "Divisibility tests drive hashing, scheduling and memory alignment." },
    { name: "Music", use: "Time signatures divide a measure into equal beats, such as 12/8 into four groups of 3." },
    { name: "Manufacturing", use: "Batch and packaging sizes are chosen to divide production runs evenly." }
  ],
  prereqWhy: {
    "division": "A factor is a divisor that leaves remainder 0, so you must be able to divide and read the remainder."
  },
  unlocksWhy: {
    "primes": "A prime is defined by having exactly two factors, so listing factors is how you recognize one.",
    "fractions": "Simplifying and building equivalent fractions means dividing or multiplying top and bottom by a common factor."
  },
  beyond: [
    { field: "Number theory", why: "Divisibility is the central relation that the whole subject studies." },
    { field: "Algebra I", why: "Factoring polynomials follows the same idea of writing something as a product." },
    { field: "Discrete mathematics", why: "Divisibility is a standard example of a partial order and appears in counting problems." }
  ],
  mistakes: [
    { wrong: `Confusing factors and multiples: "the factors of 6 are 6, 12, 18"`, fix: `Factors are at most the number: 1, 2, 3, 6. The list 6, 12, 18 is multiples.` },
    { wrong: `Forgetting 1 and the number itself as factors`, fix: `Every whole number <span class="m"><i>n</i> &gt; 1</span> has at least the factors 1 and <i>n</i>.` },
    { wrong: `"The digits of 128 add to 11, so 128 is not divisible by 2"`, fix: `The digit-sum test is for 3 and 9. For 2, check the last digit. 128 ends in 8, so it is even.` }
  ],
  practice: [
    { q: `List all factors of 18.`, a: `1, 2, 3, 6, 9, 18. Pairs: 1 × 18, 2 × 9, 3 × 6.` },
    { q: `Write the first five multiples of 7.`, a: `7, 14, 21, 28, 35.` },
    { q: `Is 234 divisible by 3? By 9?`, a: `Yes to both. The digit sum is 2 + 3 + 4 = 9. 234 ÷ 3 = 78 and 234 ÷ 9 = 26.` },
    { q: `Without dividing, decide whether 7,416 is divisible by 4, by 6 and by 9.`, a: `All three. Last two digits 16 are divisible by 4. It is even with digit sum 18, so divisible by 6 and by 9. (7,416 ÷ 9 = 824.)` }
  ],
  origin: `Euclid's <i>Elements</i> (around 300 BCE) treats divisibility in Book VII, where one number "measures" another if it divides it exactly.`
};
