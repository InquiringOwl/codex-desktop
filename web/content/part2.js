window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
ARITH["integers"] = {
  title: "Integers & Negative Numbers",
  short: "Numbers below zero and how to compute with them",
  grade: "Grades 6–7",
  hours: 8,
  voice: "mixed",
  eyebrow: "Number systems · the integers",
  hero: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span> + (−<span class="c3"><i>b</i></span>)</span>`,
  lede: `Every whole number has a mirror image on the other side of zero. Subtracting a number is the same as adding its opposite.`,
  plain: `<p>Picture a thermometer. Above zero the numbers go 1, 2, 3. Below zero they keep going: −1, −2, −3. These numbers below zero are called negative numbers. Together with zero and the counting numbers they make the <b>integers</b>.</p>
<p>Each integer has an <b>opposite</b> the same distance from zero on the other side. The opposite of 5 is −5. A number plus its opposite is always 0, like earning $5 and then spending $5.</p>
<p>On a number line, adding a positive number is a hop to the right. Adding a negative number is a hop to the left. Subtracting a number flips the direction, so subtracting −4 is the same as adding 4.</p>
<p>For multiplying and dividing, count the minus signs. Two numbers with the same sign give a positive answer. Two numbers with different signs give a negative answer.</p>`,
  formal: `<p>The set of <b>integers</b> is <span class="m">ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}</span>. Every <span class="m"><i>a</i> ∈ ℤ</span> has a unique <b>additive inverse</b> <span class="m">−<i>a</i></span> with <span class="m"><i>a</i> + (−<i>a</i>) = 0</span>. Subtraction is defined as addition of the inverse, and the <b>absolute value</b> <span class="m">|<i>a</i>|</span> is the distance from <i>a</i> to 0.</p>
<div class="display"><span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span> + (−<span class="c3"><i>b</i></span>)</span><br><span class="m">(−<i>a</i>)<i>b</i> = <i>a</i>(−<i>b</i>) = −(<i>ab</i>)</span><br><span class="m">(−<i>a</i>)(−<i>b</i>) = <i>ab</i></span></div>
<p>ℤ is closed under addition, subtraction and multiplication. It is not closed under division: <span class="m">1 ÷ 2 ∉ ℤ</span>. The order on ℤ satisfies: if <span class="m"><i>a</i> &lt; <i>b</i></span> then <span class="m">−<i>a</i> &gt; −<i>b</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Starting value", desc: "The integer you begin with. On the lab's number line it is the point where the first hop starts." },
    { c: "c3", sym: `<i>b</i>`, name: "Change", desc: "The integer being added or subtracted. Its sign and the operation together decide which way you hop." },
    { c: "c1", sym: `<i>a</i> ± <i>b</i>`, name: "Result", desc: "Where you land after the hop. It can be positive, negative or zero." },
    { c: "c4", sym: `|<i>a</i>|`, name: "Absolute value", desc: "The distance from a number to zero, which is never negative. |−7| = 7." }
  ],
  steps: { title: "How to add and subtract integers", items: [
    `Rewrite every subtraction as adding the opposite: <span class="m">6 − (−2)</span> becomes <span class="m">6 + 2</span>.`,
    `If the two numbers have the same sign, add their absolute values and keep that sign.`,
    `If the signs differ, subtract the smaller absolute value from the larger one.`,
    `Give the result the sign of the number with the larger absolute value.`,
    `For multiplication or division, work with absolute values, then make the answer positive if the signs match and negative if they differ.`
  ] },
  example: {
    prompt: `At 6 a.m. the temperature in a mountain town is <span class="m">−8</span> °C. By noon it has risen 15 degrees. By midnight it has dropped 11 degrees from the noon reading. What is the midnight temperature?`,
    lines: [
      { math: `<span class="m"><span class="c2">−8</span> + <span class="c3">15</span></span>`, note: "A rise is adding a positive number. Signs differ, so subtract absolute values: 15 − 8 = 7." },
      { math: `<span class="m">= <span class="c1">7</span></span>`, note: "15 has the larger absolute value, so the result is positive. Noon is 7 °C." },
      { math: `<span class="m"><span class="c2">7</span> − <span class="c3">11</span> = 7 + (−11)</span>`, note: "A drop is subtracting. Rewrite it as adding the opposite." },
      { math: `<span class="m">= <span class="c1">−4</span></span>`, note: "Signs differ: 11 − 7 = 4, and −11 has the larger absolute value, so the result is negative." }
    ],
    answer: `The midnight temperature is <span class="m">−4</span> °C.`
  },
  why: `<p>Negative numbers describe anything with a direction or a debt: temperatures below freezing, overdrawn accounts, depths below sea level, losses in a business quarter, and a golf score under par. Without them, a subtraction like 3 − 10 has no answer.</p>
<p>Algebra depends on integers completely. Solving <span class="m"><i>x</i> + 10 = 3</span>, graphing on coordinate axes, and working with slopes all require confident sign rules.</p>`,
  careers: [
    { role: "Accountant", use: "Records losses and refunds as negative amounts and nets them against gains to report a period's profit or loss." },
    { role: "Meteorologist", use: "Computes temperature changes across zero, such as a fall from 4 °C to −9 °C being a change of −13 degrees." },
    { role: "Scuba instructor", use: "Tracks depth as a negative elevation relative to the surface and plans ascent rates between depths." },
    { role: "Electrician", use: "Works with positive and negative terminals and voltages whose signs set the direction of current in DC circuits." },
    { role: "Financial analyst", use: "Reports negative returns and compares them with gains to measure a portfolio's net performance." },
    { role: "Pilot", use: "Reads vertical speed as positive for climbing and negative for descending, in feet per minute." }
  ],
  life: [
    "Reading a bank balance that has gone below zero",
    "Working out how much colder it got overnight",
    "Tracking a golf score over and under par",
    "Finding the floor number of an underground parking level",
    "Measuring gains and losses on a budget month to month"
  ],
  fields: [
    { name: "Physics", use: "Signed quantities like velocity, charge and displacement point in one of two directions along an axis." },
    { name: "Finance", use: "Cash flows in and out are positive and negative values in every ledger and model." },
    { name: "Chemistry", use: "Ion charges such as −2 for oxide and +3 for aluminium must sum to zero in a neutral compound." },
    { name: "Computer science", use: "Signed integers are stored in two's complement form in every modern processor." }
  ],
  prereqWhy: {
    "subtraction": "Integer arithmetic extends subtraction so that a smaller number minus a larger one has an answer.",
    "number-line": "Negative numbers live to the left of zero, and hops on the number line are the main picture for integer addition."
  },
  unlocksWhy: {
    "modular": "Remainders of negative numbers, such as −7 mod 12, need integer arithmetic to compute correctly.",
    "real-numbers": "The integers are one of the nested sets inside the real numbers, sitting between the whole numbers and the rationals."
  },
  beyond: [
    { field: "Algebra I", why: "Solving equations and simplifying expressions uses sign rules on every line." },
    { field: "Number theory", why: "Divisibility, primes and congruences are all studied on the full set of integers." },
    { field: "Abstract algebra", why: "ℤ under addition is the model example of a group, and ℤ is the model example of a ring." }
  ],
  mistakes: [
    { wrong: `<span class="m">−3 − 5 = 2</span> or <span class="m">−2</span>`, fix: `Both numbers push left. <span class="m">−3 + (−5) = −8</span>.` },
    { wrong: `<span class="m">4 − (−6) = −2</span>`, fix: `Subtracting a negative adds its opposite: <span class="m">4 + 6 = 10</span>.` },
    { wrong: `<span class="m">−9 &lt; −2</span> is false because 9 is bigger`, fix: `−9 is further left on the number line, so <span class="m">−9 &lt; −2</span> is true.` },
    { wrong: `<span class="m">(−3)(−4) = −12</span>`, fix: `Two negative factors give a positive product: <span class="m">(−3)(−4) = 12</span>.` }
  ],
  practice: [
    { q: `<span class="m">−5 + 9</span>`, a: `<span class="m">4</span>. Signs differ: 9 − 5 = 4, and 9 is larger, so positive.` },
    { q: `<span class="m">3 − 10</span>`, a: `<span class="m">−7</span>. Rewrite as 3 + (−10); 10 − 3 = 7, and −10 is larger in size, so negative.` },
    { q: `<span class="m">−6 − (−14)</span>`, a: `<span class="m">8</span>. Rewrite as −6 + 14; 14 − 6 = 8, positive.` },
    { q: `<span class="m">(−4)(−7) − (−3)(5)</span>`, a: `<span class="m">43</span>. (−4)(−7) = 28 and (−3)(5) = −15, so 28 − (−15) = 28 + 15 = 43.` }
  ],
  origin: `The Chinese text <i>The Nine Chapters on the Mathematical Art</i> (compiled by about the 1st century CE) used red and black counting rods for positive and negative quantities. In 628 CE the Indian mathematician Brahmagupta wrote out rules for computing with "fortunes" and "debts", including that a debt times a debt is a fortune.`
};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["exponents"] = {
  title: "Exponents & Powers",
  short: "Repeated multiplication written compactly",
  grade: "Grades 6–8",
  hours: 6,
  voice: "mixed",
  eyebrow: "Operations · powers",
  hero: `<span class="m"><span class="c2"><i>b</i></span><sup class="c3"><i>n</i></sup> = <span class="c2"><i>b</i></span> × <span class="c2"><i>b</i></span> × ⋯ × <span class="c2"><i>b</i></span></span>`,
  lede: `An exponent counts how many times the base is used as a factor. Powers grow very fast.`,
  plain: `<p>Writing 2 × 2 × 2 × 2 × 2 gets tiring. An <b>exponent</b> is shorthand: <span class="m">2<sup>5</sup></span> means five 2s multiplied together, which is 32. The 2 is the <b>base</b> and the small raised 5 is the exponent.</p>
<p>Powers grow quickly. Fold a sheet of paper in half and it is 2 layers thick. Fold again and it is 4. After 10 folds it would be <span class="m">2<sup>10</sup> = 1,024</span> layers.</p>
<p>A few rules save a lot of work. When you multiply powers of the same base you add the exponents, because you are just counting all the factors. <span class="m">2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup></span>. Any nonzero number to the power 0 is 1, and a negative exponent means "one over": <span class="m">2<sup>−3</sup> = 1/8</span>.</p>`,
  formal: `<p>For a real number <i>b</i> and a positive integer <i>n</i>, the <b>power</b> <span class="m"><i>b</i><sup><i>n</i></sup></span> is the product of <i>n</i> factors of <i>b</i>. For <span class="m"><i>b</i> ≠ 0</span> define <span class="m"><i>b</i><sup>0</sup> = 1</span> and <span class="m"><i>b</i><sup>−<i>n</i></sup> = 1/<i>b</i><sup><i>n</i></sup></span>. These definitions are the ones that keep the laws below true for all integer exponents. The expression <span class="m">0<sup>0</sup></span> is left undefined in basic arithmetic, although algebra and combinatorics texts often set <span class="m">0<sup>0</sup> = 1</span> by convention.</p>
<div class="display"><span class="m"><i>b</i><sup><i>m</i></sup> · <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>+<i>n</i></sup></span><br><span class="m"><i>b</i><sup><i>m</i></sup> ÷ <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>−<i>n</i></sup></span> <span class="dim">(b ≠ 0)</span><br><span class="m">(<i>b</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>b</i><sup><i>mn</i></sup></span><br><span class="m">(<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup></span></div>
<p>Exponentiation is neither commutative nor associative: <span class="m">2<sup>3</sup> ≠ 3<sup>2</sup></span>, and a tower <span class="m"><i>a</i><sup><i>b</i><sup><i>c</i></sup></sup></span> is read top-down as <span class="m"><i>a</i><sup>(<i>b</i><sup><i>c</i></sup>)</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>b</i>`, name: "Base", desc: "The number being multiplied by itself." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "How many copies of the base are multiplied. Also called the power or index." },
    { c: "c1", sym: `<i>b</i><sup><i>n</i></sup>`, name: "Power", desc: "The value of the repeated product. In the lab it is the height of each growth bar." }
  ],
  steps: { title: "How to simplify an expression with exponents", items: [
    `Evaluate anything inside parentheses first, including a power of a product like <span class="m">(2 × 5)<sup>3</sup></span>.`,
    `Check what the exponent applies to. In <span class="m">−3<sup>2</sup></span> it applies to 3 only; in <span class="m">(−3)<sup>2</sup></span> it applies to −3.`,
    `Combine powers of the same base: add exponents when multiplying, subtract when dividing, multiply when raising a power to a power.`,
    `Rewrite any zero exponent as 1 and any negative exponent as a reciprocal.`,
    `Compute the final power by repeated multiplication.`
  ] },
  example: {
    prompt: `A lab culture starts with 50 bacteria, and the population doubles every 20 minutes. How many bacteria are there after 3 hours, assuming none die?`,
    lines: [
      { math: `<span class="m">180 ÷ 20 = <span class="c3">9</span></span>`, note: "3 hours is 180 minutes, which is 9 doubling periods." },
      { math: `<span class="m">50 × <span class="c2">2</span><sup class="c3">9</sup></span>`, note: "Each period multiplies by 2, so 9 periods multiply by 2 nine times." },
      { math: `<span class="m"><span class="c2">2</span><sup class="c3">9</sup> = <span class="c1">512</span></span>`, note: "2, 4, 8, 16, 32, 64, 128, 256, 512." },
      { math: `<span class="m">50 × 512 = 25,600</span>`, note: "Multiply the starting count by the growth factor." }
    ],
    answer: `After 3 hours there are <span class="m">25,600</span> bacteria.`
  },
  why: `<p>Exponents describe anything that grows or shrinks by the same factor each step: compound interest, population growth, radioactive decay, and computer memory sizes measured in powers of 2. They also give compact names to huge and tiny numbers, such as <span class="m">10<sup>9</sup></span> for a billion.</p>
<p>Square roots, scientific notation, polynomials, exponential functions and logarithms all rest on the exponent laws.</p>`,
  careers: [
    { role: "Financial advisor", use: "Projects savings with compound growth, where $P becomes P(1 + r)^t after t years at rate r." },
    { role: "Epidemiologist", use: "Models early outbreak growth as cases multiplying by a fixed factor each generation of infection." },
    { role: "Software engineer", use: "Sizes memory and address spaces in powers of 2, such as 2^32 addresses for a 32-bit system." },
    { role: "Sound engineer", use: "Uses the decibel scale, where every 10 dB increase is a factor of 10 in sound power." },
    { role: "Microbiologist", use: "Estimates cell counts from doubling times and dilution factors written as powers of 10." },
    { role: "Radiologic technologist", use: "Applies half-life decay, where the remaining activity is the initial amount times (1/2)^n after n half-lives." }
  ],
  life: [
    "Seeing how fast savings grow with compound interest",
    "Understanding storage sizes like 256 GB",
    "Reading area and volume units such as m² and cm³",
    "Following how a viral post spreads through shares",
    "Understanding why the Richter and decibel scales jump so quickly"
  ],
  fields: [
    { name: "Biology", use: "Cell division and population growth follow exponential patterns." },
    { name: "Computer science", use: "Binary representation and algorithm running times are measured in powers." },
    { name: "Physics", use: "Inverse-square laws and unit prefixes use exponents throughout." },
    { name: "Finance", use: "Compound interest and present-value formulas are built on powers." }
  ],
  prereqWhy: {
    "multiplication": "A power is defined as repeated multiplication, so fluent multiplication is required.",
    "properties": "The exponent laws follow from the associative and commutative laws of multiplication."
  },
  unlocksWhy: {
    "roots": "A square root undoes squaring, the power with exponent 2.",
    "sci-notation": "Scientific notation writes numbers as a coefficient times a power of 10.",
    "percent-apps": "Compound interest multiplies by (1 + r) once per period, which is a power."
  },
  beyond: [
    { field: "Algebra I", why: "Polynomials are sums of terms with whole-number exponents, and simplifying them uses the exponent laws." },
    { field: "Precalculus", why: "Exponential and logarithmic functions extend exponents to all real numbers." },
    { field: "Calculus", why: "The power rule for derivatives and many series are written in terms of powers." }
  ],
  mistakes: [
    { wrong: `<span class="m">2<sup>3</sup> = 6</span>`, fix: `The exponent counts factors, not a multiplier: <span class="m">2<sup>3</sup> = 2 × 2 × 2 = 8</span>.` },
    { wrong: `<span class="m">−3<sup>2</sup> = 9</span>`, fix: `The exponent applies only to 3: <span class="m">−3<sup>2</sup> = −9</span>. Write <span class="m">(−3)<sup>2</sup> = 9</span> to square −3.` },
    { wrong: `<span class="m">2<sup>3</sup> · 2<sup>4</sup> = 4<sup>7</sup></span>`, fix: `Keep the base and add exponents: <span class="m">2<sup>7</sup> = 128</span>.` },
    { wrong: `<span class="m">(3 + 4)<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup></span>`, fix: `Powers do not distribute over addition: <span class="m">7<sup>2</sup> = 49</span>, but <span class="m">9 + 16 = 25</span>.` }
  ],
  practice: [
    { q: `<span class="m">3<sup>4</sup></span>`, a: `<span class="m">81</span>. 3 × 3 × 3 × 3.` },
    { q: `<span class="m">2<sup>5</sup> × 2<sup>3</sup></span>`, a: `<span class="m">2<sup>8</sup> = 256</span>. Add exponents: 5 + 3 = 8.` },
    { q: `Compare <span class="m">(−2)<sup>4</sup></span> and <span class="m">−2<sup>4</sup></span>.`, a: `<span class="m">(−2)<sup>4</sup> = 16</span>, while <span class="m">−2<sup>4</sup> = −(2<sup>4</sup>) = −16</span>.` },
    { q: `<span class="m">(2<sup>3</sup>)<sup>2</sup> × 2<sup>−4</sup></span>`, a: `<span class="m">4</span>. (2³)² = 2⁶, then 2⁶ × 2⁻⁴ = 2² = 4.` }
  ],
  origin: `Archimedes, in <i>The Sand Reckoner</i> (3rd century BCE), worked with powers of a myriad (10,000) to name very large numbers. The raised-number notation such as <span class="m"><i>a</i><sup>3</sup></span> was popularized by René Descartes in <i>La Géométrie</i> (1637).`
};

/* ------------------------------------------------------------------ */
ARITH["modular"] = {
  title: "Remainders & Clock Arithmetic",
  short: "Arithmetic that wraps around, like a clock",
  grade: "Grades 4–5 (remainders); college (congruences)",
  hours: 6,
  voice: "plain",
  eyebrow: "Number theory · modular arithmetic",
  hero: `<span class="m"><span class="c2"><i>a</i></span> ≡ <span class="c3"><i>b</i></span> (mod <span class="c4"><i>m</i></span>)</span>`,
  lede: `Two integers are congruent mod m when they leave the same remainder after division by m. On a clock with m positions, they land in the same spot.`,
  plain: `<p>If it is 9 o'clock now, what time will it be in 5 hours? Not 14 o'clock on a 12-hour clock. It is 2. The clock wraps around after 12. Arithmetic that wraps around like this is called <b>modular arithmetic</b>, and the number where it wraps is the <b>modulus</b>.</p>
<p>The key tool is the remainder. To find where a number lands on a clock with 12 positions, divide by 12 and keep the remainder. 14 divided by 12 is 1 remainder 2, so 14 lands on 2. We write <span class="m">14 ≡ 2 (mod 12)</span> and say "14 is congruent to 2 mod 12".</p>
<p>The same idea works for days of the week with modulus 7, hours in a day with modulus 24, and even or odd with modulus 2. You can add and multiply first and take the remainder at the end, or take remainders first to keep the numbers small. Both give the same answer.</p>`,
  formal: `<p><b>Division algorithm.</b> For any integer <i>a</i> and positive integer <i>m</i> there are unique integers <i>q</i> and <i>r</i> with</p>
<div class="display"><span class="m"><span class="c2"><i>a</i></span> = <span class="c4"><i>m</i></span><i>q</i> + <span class="c1"><i>r</i></span>,  0 ≤ <span class="c1"><i>r</i></span> &lt; <span class="c4"><i>m</i></span></span></div>
<p>We write <span class="m"><i>r</i> = <i>a</i> mod <i>m</i></span>. Integers <i>a</i> and <i>b</i> are <b>congruent modulo <i>m</i></b>, written <span class="m"><i>a</i> ≡ <i>b</i> (mod <i>m</i>)</span>, if <span class="m"><i>m</i> | (<i>a</i> − <i>b</i>)</span>. This holds exactly when <i>a</i> and <i>b</i> have the same remainder mod <i>m</i>. Congruence is an equivalence relation, and it respects the operations: if <span class="m"><i>a</i> ≡ <i>a</i>′</span> and <span class="m"><i>b</i> ≡ <i>b</i>′ (mod <i>m</i>)</span>, then <span class="m"><i>a</i> + <i>b</i> ≡ <i>a</i>′ + <i>b</i>′</span> and <span class="m"><i>ab</i> ≡ <i>a</i>′<i>b</i>′ (mod <i>m</i>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Starting value", desc: "The integer you start from, such as the current hour." },
    { c: "c3", sym: `<i>b</i>`, name: "Step", desc: "The amount added or multiplied, such as hours to wait." },
    { c: "c1", sym: `<i>r</i>`, name: "Result (remainder)", desc: "Where you land on the clock. Always a whole number from 0 up to m − 1." },
    { c: "c4", sym: `<i>m</i>`, name: "Modulus", desc: "How many positions the clock has before it wraps back to 0." }
  ],
  steps: { title: "How to compute a mod m", items: [
    `Divide <i>a</i> by <i>m</i> and take the whole-number quotient <i>q</i>, rounding down (toward negative infinity for negative <i>a</i>).`,
    `Compute <span class="m"><i>r</i> = <i>a</i> − <i>mq</i></span>.`,
    `Check that <span class="m">0 ≤ <i>r</i> &lt; <i>m</i></span>. If <i>r</i> is negative, add <i>m</i>; if it is too large, subtract <i>m</i>.`,
    `For a long sum or product, reduce each piece mod <i>m</i> first, combine, then reduce again.`
  ] },
  example: {
    prompt: `A freight truck leaves at 19:00 on a Friday. The trip takes 58 hours. On what day and at what time does it arrive?`,
    lines: [
      { math: `<span class="m"><span class="c2">19</span> + <span class="c3">58</span> = 77</span>`, note: "Count hours from midnight at the start of Friday." },
      { math: `<span class="m">77 = <span class="c4">24</span> × 3 + <span class="c1">5</span></span>`, note: "Division algorithm with modulus 24: quotient 3, remainder 5." },
      { math: `<span class="m">77 ≡ <span class="c1">5</span> (mod <span class="c4">24</span>)</span>`, note: "The remainder is the clock time: 05:00." },
      { math: `<span class="m">Friday + 3 days = Monday</span>`, note: "The quotient 3 counts how many midnights were passed." }
    ],
    answer: `The truck arrives on Monday at 05:00.`
  },
  why: `<p>Anything that repeats in a cycle runs on modular arithmetic: hours, weekdays, rotating work shifts, and repeating patterns. Check digits on ISBNs, bank account numbers and credit cards use remainders to catch typing errors.</p>
<p>Modular arithmetic is also the engine of modern cryptography. Secure websites rely on systems such as RSA and elliptic-curve cryptography, which are built on arithmetic modulo very large numbers.</p>`,
  careers: [
    { role: "Cryptographer", use: "Designs and analyzes encryption such as RSA, which raises numbers to powers modulo a large product of two primes." },
    { role: "Software engineer", use: "Uses the % operator to place keys in hash tables and wrap indices in circular buffers." },
    { role: "Nurse", use: "Schedules a dose every 8 hours on a 24-hour clock, so a 22:00 dose is followed by 06:00 and 14:00." },
    { role: "Payment systems developer", use: "Validates card numbers with the Luhn check, which tests whether a weighted digit sum is divisible by 10." },
    { role: "Operations scheduler", use: "Plans rotating shift patterns that repeat on a fixed cycle of days." },
    { role: "Music theorist", use: "Treats pitch classes as integers mod 12, since notes an octave apart share a name." }
  ],
  life: [
    "Working out what time a long trip ends",
    "Finding what weekday a date falls on",
    "Telling whether a number is even or odd",
    "Planning a medicine schedule every 6 or 8 hours",
    "Splitting items into groups and finding how many are left over"
  ],
  fields: [
    { name: "Computer science", use: "Hashing, random number generators and checksums use modular reduction." },
    { name: "Cryptography", use: "Public-key systems depend on modular exponentiation and modular inverses." },
    { name: "Music theory", use: "Transposition and interval arithmetic on the 12 pitch classes is arithmetic mod 12." },
    { name: "Calendar science", use: "Algorithms for the day of the week of any date reduce counts of days mod 7." }
  ],
  prereqWhy: {
    "division": "Modular arithmetic keeps the remainder from division, so the division algorithm is the starting point.",
    "integers": "Remainders of negative numbers and differences like a − b require integer arithmetic."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Number theory", why: "Congruences are the main language for questions about primes and divisibility." },
    { field: "Abstract algebra", why: "The integers mod m form the ring ℤ/mℤ, a basic example of groups, rings and fields." },
    { field: "Cryptography", why: "RSA, Diffie–Hellman key exchange and digital signatures are built on modular arithmetic." },
    { field: "Discrete mathematics", why: "Proofs about cycles, hashing and divisibility use congruences directly." }
  ],
  mistakes: [
    { wrong: `<span class="m">−11 mod 4 = −3</span>`, fix: `The remainder must satisfy 0 ≤ r &lt; 4. Since <span class="m">−11 = 4(−3) + 1</span>, the answer is 1.` },
    { wrong: `Using 12 as a remainder on a 12-position clock`, fix: `Remainders mod 12 run from 0 to 11. The clock face labels position 0 as "12".` },
    { wrong: `Dividing both sides of a congruence freely: <span class="m">2 · 3 ≡ 2 · 6 (mod 6)</span> so <span class="m">3 ≡ 6</span>`, fix: `Cancelling is only safe when the factor shares no common factor with m. Here gcd(2, 6) = 2, and 3 is not congruent to 6 mod 6.` }
  ],
  practice: [
    { q: `<span class="m">17 mod 5</span>`, a: `<span class="m">2</span>, since 17 = 5 × 3 + 2.` },
    { q: `It is 08:00. What time will it be 50 hours from now?`, a: `10:00. 8 + 50 = 58 = 24 × 2 + 10, so 58 ≡ 10 (mod 24).` },
    { q: `<span class="m">−11 mod 4</span>`, a: `<span class="m">1</span>, since −11 = 4 × (−3) + 1 with 0 ≤ 1 &lt; 4.` },
    { q: `What is the last digit of <span class="m">3<sup>20</sup></span>?`, a: `1. Last digits of powers of 3 cycle 3, 9, 7, 1 with period 4, and 20 ≡ 0 (mod 4), so 3²⁰ ends like 3⁴ = 81. (3²⁰ = 3,486,784,401.)` }
  ],
  origin: `The Chinese text <i>Sunzi Suanjing</i> (between the 3rd and 5th centuries CE) poses a problem about a number with given remainders, the origin of the Chinese Remainder Theorem. Carl Friedrich Gauss introduced the ≡ notation and developed the theory of congruences in <i>Disquisitiones Arithmeticae</i> (1801).`
};

/* ------------------------------------------------------------------ */
ARITH["primes"] = {
  title: "Prime Numbers & Prime Factorization",
  short: "The building blocks of every whole number",
  grade: "Grades 4–6",
  hours: 5,
  voice: "mixed",
  eyebrow: "Number theory · the primes",
  hero: `<span class="m">360 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup> × <span class="c1">5</span></span>`,
  lede: `A prime has exactly two factors: 1 and itself. Every whole number above 1 is a product of primes in exactly one way.`,
  plain: `<p>Some numbers can only be arranged as a single row of tiles. 7 is one of them: the only rectangle is 1 by 7. Numbers like this are called <b>primes</b>. The first few are 2, 3, 5, 7, 11, 13 and 17. A number with more factors than that, like 12, is <b>composite</b>. The number 1 is neither.</p>
<p>Primes are the atoms of multiplication. Break any composite number into factors, then keep breaking those factors down, and you always end at primes. A factor tree shows this. The final list of primes is the <b>prime factorization</b>, and you get the same list no matter which split you start with.</p>
<p>To find primes, the Sieve of Eratosthenes crosses out multiples. Circle 2 and cross out every multiple of 2. Circle the next number left, 3, and cross out its multiples. Keep going. The circled numbers are the primes.</p>`,
  formal: `<p>An integer <span class="m"><i>p</i> &gt; 1</span> is <b>prime</b> if its only positive divisors are 1 and <i>p</i>. An integer <span class="m"><i>n</i> &gt; 1</span> that is not prime is <b>composite</b>. If <i>n</i> is composite it has a prime factor <span class="m"><i>p</i> ≤ √<i>n</i></span>, so trial division up to <span class="m">√<i>n</i></span> decides primality.</p>
<div class="display"><b>Fundamental Theorem of Arithmetic.</b> Every integer <span class="m"><i>n</i> &gt; 1</span> can be written as<br><span class="m"><i>n</i> = <span class="c1"><i>p</i></span><sub>1</sub><sup><i>e</i><sub>1</sub></sup> <span class="c1"><i>p</i></span><sub>2</sub><sup><i>e</i><sub>2</sub></sup> ⋯ <span class="c1"><i>p</i></span><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup></span>, with primes <span class="m"><i>p</i><sub>1</sub> &lt; ⋯ &lt; <i>p</i><sub><i>k</i></sub></span> and exponents <span class="m"><i>e</i><sub><i>i</i></sub> ≥ 1</span>,<br>and this representation is unique.</div>
<p><b>Euclid's theorem:</b> there are infinitely many primes. <b>Euclid's lemma:</b> if a prime <i>p</i> divides <span class="m"><i>ab</i></span>, then <span class="m"><i>p</i> | <i>a</i></span> or <span class="m"><i>p</i> | <i>b</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Prime", desc: "A whole number greater than 1 whose only factors are 1 and itself. Circled in the sieve." },
    { c: "c3", sym: `<i>kp</i>`, name: "Multiples of the current prime", desc: "Numbers crossed out in the sieve because p divides them, so they cannot be prime (except p itself)." },
    { c: "c2", sym: `<i>n</i>`, name: "Number being factored", desc: "The top of the factor tree." },
    { c: "c4", sym: `<i>e</i>`, name: "Exponent", desc: "How many times a prime appears in the factorization." }
  ],
  steps: { title: "How to find a prime factorization", items: [
    `Try the smallest prime, 2. While the number is even, divide by 2 and record a 2.`,
    `Move to the next prime (3, 5, 7, 11, …) and divide by it as many times as it goes evenly.`,
    `Stop testing once the prime squared is larger than what remains. If what remains is bigger than 1, it is prime; record it.`,
    `Group repeated primes with exponents and list them in increasing order.`,
    `Check by multiplying the factorization back out.`
  ] },
  example: {
    prompt: `A bakery has 360 cookies and wants to offer every possible box size that packs all of them into full, equal boxes. Find the prime factorization of 360 and use it to count the box sizes.`,
    lines: [
      { math: `<span class="m">360 = <span class="c1">2</span> × 180 = <span class="c1">2</span> × <span class="c1">2</span> × 90 = <span class="c1">2</span> × <span class="c1">2</span> × <span class="c1">2</span> × 45</span>`, note: "Divide by 2 while the number is even." },
      { math: `<span class="m">45 = <span class="c1">3</span> × 15 = <span class="c1">3</span> × <span class="c1">3</span> × <span class="c1">5</span></span>`, note: "45 is odd. Its digits sum to 9, so divide by 3 twice. 5 is prime." },
      { math: `<span class="m">360 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup> × <span class="c1">5</span><sup>1</sup></span>`, note: "Group the repeated primes. Check: 8 × 9 × 5 = 360." },
      { math: `<span class="m">(3 + 1)(2 + 1)(1 + 1) = 24</span>`, note: "A factor uses 0 to 3 twos, 0 to 2 threes and 0 or 1 five. Multiply the number of choices." }
    ],
    answer: `<span class="m">360 = 2<sup>3</sup> × 3<sup>2</sup> × 5</span>, so there are 24 box sizes, from 1 cookie per box up to 360.`
  },
  why: `<p>Prime factorization is the fastest way to simplify fractions, find common denominators, and compute the GCF and LCM. Knowing that 91 = 7 × 13 or that 1,001 = 7 × 11 × 13 turns many hard problems into easy ones.</p>
<p>Primes also protect your data. Online encryption relies on the fact that multiplying two large primes is easy, while recovering them from their product is extremely hard.</p>`,
  careers: [
    { role: "Cryptographer", use: "Generates RSA keys from pairs of large primes, often hundreds of digits long." },
    { role: "Security engineer", use: "Configures key sizes for TLS and SSH based on how hard it is to factor products of primes." },
    { role: "Mechanical engineer", use: "Chooses gear tooth counts with no common factor so each tooth meets every tooth on the mating gear, spreading wear." },
    { role: "Software developer", use: "Picks prime table sizes for some hash tables so keys spread evenly across slots." },
    { role: "Mathematician", use: "Researches the distribution of primes, including open problems such as the Riemann Hypothesis." }
  ],
  life: [
    "Simplifying a fraction in one step",
    "Finding how many ways items can be packed evenly",
    "Understanding why website padlock icons mean a connection is encrypted",
    "Checking quickly whether a number can be split into equal groups"
  ],
  fields: [
    { name: "Computer security", use: "Public-key encryption and digital signatures depend on properties of primes." },
    { name: "Number theory", use: "Primes are the central objects of the field." },
    { name: "Mechanical engineering", use: "Gear design uses tooth counts that share no common factor." },
    { name: "Biology", use: "Researchers have proposed that the 13- and 17-year cycles of periodical cicadas help them avoid predators with shorter cycles." }
  ],
  prereqWhy: {
    "factors": "A prime is defined by its factors, and factor trees are built from factor pairs."
  },
  unlocksWhy: {
    "gcf-lcm": "The GCF and LCM can be read off prime factorizations by taking the smaller or larger exponent of each prime."
  },
  beyond: [
    { field: "Number theory", why: "Primes, their distribution and unique factorization are its foundation." },
    { field: "Abstract algebra", why: "Prime and irreducible elements generalize primes to other number systems and polynomial rings." },
    { field: "Cryptography", why: "RSA and many other systems are built directly on prime numbers." }
  ],
  mistakes: [
    { wrong: `"1 is prime"`, fix: `A prime must have exactly two positive factors. 1 has only one, so it is neither prime nor composite.` },
    { wrong: `"51 and 91 are prime because they are odd"`, fix: `<span class="m">51 = 3 × 17</span> and <span class="m">91 = 7 × 13</span>. Odd does not mean prime.` },
    { wrong: `Stopping the factor tree at <span class="m">360 = 2 × 2 × 2 × 45</span>`, fix: `Every leaf must be prime. 45 splits further into <span class="m">3 × 3 × 5</span>.` }
  ],
  practice: [
    { q: `Is 51 prime?`, a: `No. Its digits sum to 6, so 3 divides it: 51 = 3 × 17.` },
    { q: `Find the prime factorization of 84.`, a: `<span class="m">84 = 2<sup>2</sup> × 3 × 7</span>. 84 → 42 → 21 → 7, dividing by 2, 2, 3.` },
    { q: `Is 211 prime?`, a: `Yes. √211 ≈ 14.5, and none of 2, 3, 5, 7, 11, 13 divides 211.` },
    { q: `Find the prime factorization of 1,001.`, a: `<span class="m">1,001 = 7 × 11 × 13</span>. 1,001 ÷ 7 = 143, and 143 = 11 × 13.` }
  ],
  origin: `Euclid's <i>Elements</i> (around 300 BCE) proves there are infinitely many primes (Book IX, Proposition 20). The sieve is credited to Eratosthenes of Cyrene (3rd century BCE) by the later writer Nicomachus. Gauss gave the first clear statement and proof of unique factorization in <i>Disquisitiones Arithmeticae</i> (1801).`
};

/* ------------------------------------------------------------------ */
ARITH["fractions"] = {
  title: "Fractions & Equivalence",
  short: "Parts of a whole, and many names for one amount",
  grade: "Grades 3–4",
  hours: 8,
  voice: "mixed",
  eyebrow: "Rational numbers · fractions",
  hero: `<span class="m"><span class="fr"><span class="c1"><i>n</i></span><span class="c2"><i>d</i></span></span> = <span class="fr"><span><span class="c1"><i>n</i></span> × <span class="c4"><i>k</i></span></span><span><span class="c2"><i>d</i></span> × <span class="c4"><i>k</i></span></span></span></span>`,
  lede: `A fraction names equal parts of a whole. Multiplying top and bottom by the same number changes the name, not the amount.`,
  plain: `<p>Cut a chocolate bar into 4 equal pieces and eat 3. You ate <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> of the bar. The bottom number, the <b>denominator</b>, says how many equal pieces the whole was cut into. The top number, the <b>numerator</b>, says how many of those pieces you have.</p>
<p>Now cut every piece in half. There are 8 pieces, and you ate 6 of them. You still ate the same amount of chocolate, so <span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>8</span></span></span>. Fractions that name the same amount are <b>equivalent</b>. You get one by multiplying or dividing the top and bottom by the same number.</p>
<p>A fraction is also a division. <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> is what each person gets when 3 pizzas are shared equally by 4 people. A fraction is in <b>simplest form</b> when the top and bottom have no common factor except 1.</p>`,
  formal: `<p>For integers <i>a</i> and <i>b</i> with <span class="m"><i>b</i> ≠ 0</span>, the <b>fraction</b> <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> denotes the quotient <span class="m"><i>a</i> ÷ <i>b</i></span>: the unique number that gives <i>a</i> when multiplied by <i>b</i>. Numbers expressible this way form the <b>rational numbers</b> ℚ.</p>
<div class="display"><span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span>  ⟺  <i>ad</i> = <i>bc</i></span>  <span class="dim">(b, d ≠ 0)</span><br><span class="m"><span class="fr"><span><span class="c1"><i>n</i></span></span><span><span class="c2"><i>d</i></span></span></span> = <span class="fr"><span><span class="c1"><i>n</i></span><span class="c4"><i>k</i></span></span><span><span class="c2"><i>d</i></span><span class="c4"><i>k</i></span></span></span></span>  for any <span class="m"><i>k</i> ≠ 0</span></div>
<p>A fraction <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> with <span class="m"><i>b</i> &gt; 0</span> is in <b>lowest terms</b> when <span class="m">gcd(<i>a</i>, <i>b</i>) = 1</span>. Every rational number has exactly one such representation.</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "Numerator", desc: "How many equal parts you have. The top number." },
    { c: "c2", sym: `<i>d</i>`, name: "Denominator", desc: "How many equal parts make one whole. The bottom number, never zero." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "The number both parts are multiplied or divided by to get an equivalent fraction. In the lab it splits every piece into k smaller pieces." }
  ],
  steps: { title: "How to simplify and compare fractions", items: [
    `Find the greatest common factor of the numerator and denominator.`,
    `Divide both by it. The result is in simplest form.`,
    `To compare two fractions, rewrite both with a common denominator, or cross-multiply.`,
    `With equal denominators, the fraction with the larger numerator is larger.`,
    `When cross-multiplying <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> and <span class="m"><span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> with positive denominators, compare <span class="m"><i>ad</i></span> with <span class="m"><i>bc</i></span>.`
  ] },
  example: {
    prompt: `In one office, 18 of 24 employees prefer a four-day work week. In another, 20 of 25 do. Write each as a fraction in simplest form and decide which office has the larger share in favour.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c1">18</span><span class="c2">24</span></span> = <span class="fr"><span>18 ÷ <span class="c4">6</span></span><span>24 ÷ <span class="c4">6</span></span></span> = <span class="fr"><span>3</span><span>4</span></span></span>`, note: "The GCF of 18 and 24 is 6." },
      { math: `<span class="m"><span class="fr"><span class="c1">20</span><span class="c2">25</span></span> = <span class="fr"><span>20 ÷ <span class="c4">5</span></span><span>25 ÷ <span class="c4">5</span></span></span> = <span class="fr"><span>4</span><span>5</span></span></span>`, note: "The GCF of 20 and 25 is 5." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>15</span><span>20</span></span>,  <span class="fr"><span>4</span><span>5</span></span> = <span class="fr"><span>16</span><span>20</span></span></span>`, note: "Rename both with the common denominator 20." },
      { math: `<span class="m"><span class="fr"><span>15</span><span>20</span></span> &lt; <span class="fr"><span>16</span><span>20</span></span></span>`, note: "Same size pieces, so compare numerators." }
    ],
    answer: `The first office is at <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> and the second at <span class="m"><span class="fr"><span>4</span><span>5</span></span></span>. The second office has the larger share in favour.`
  },
  why: `<p>Fractions show up whenever something is shared or measured: recipes, tape measures, medication doses, time ("a quarter past"), and survey results. Recognizing that 6/8 and 3/4 are the same amount is what lets you read a ruler or compare two offers.</p>
<p>Fractions are the first step into the rational numbers. Ratios, percents, probability, slope and every algebraic expression with division depend on them.</p>`,
  careers: [
    { role: "Carpenter", use: "Reads tape measures marked in sixteenths and recognizes that 12/16 inch is the same as 3/4 inch." },
    { role: "Chef", use: "Scales recipes and swaps measuring cups, knowing that two 1/4 cups equal 1/2 cup." },
    { role: "Pharmacy technician", use: "Works with partial tablets and fractional doses such as 1/2 of a 50 mg tablet." },
    { role: "Machinist", use: "Converts drill and wrench sizes like 5/16 inch to find the nearest matching tool." },
    { role: "Pollster", use: "Reports survey responses as fractions of the sample and compares groups of different sizes." }
  ],
  life: [
    "Reading a ruler or tape measure",
    "Following and adjusting a recipe",
    "Sharing a pizza or a bill fairly",
    "Understanding \"half off\" or \"a third more\"",
    "Telling time with quarter and half hours"
  ],
  fields: [
    { name: "Chemistry", use: "Mole ratios and concentrations are expressed and simplified as fractions." },
    { name: "Music", use: "Note lengths are fractions of a whole note, and time signatures look like fractions." },
    { name: "Probability", use: "The chance of an event is the fraction of equally likely outcomes where it happens." },
    { name: "Construction", use: "Plans and materials are measured in fractional inches." }
  ],
  prereqWhy: {
    "division": "A fraction is a division, so a/b means a ÷ b.",
    "factors": "Simplifying needs a common factor of the numerator and denominator."
  },
  unlocksWhy: {
    "mixed-numbers": "A mixed number rewrites a fraction larger than 1 as a whole number plus a proper fraction.",
    "ratios": "A ratio a : b is often written and compared as the fraction a/b.",
    "fraction-ops": "Adding and subtracting fractions depends on rewriting them as equivalent fractions with a common denominator.",
    "decimals": "A decimal is a fraction whose denominator is a power of 10."
  },
  beyond: [
    { field: "Algebra I", why: "Rational expressions and solving equations with fractions use equivalence and cross-multiplication." },
    { field: "Probability & statistics", why: "Probabilities and relative frequencies are fractions between 0 and 1." },
    { field: "Abstract algebra", why: "The construction of ℚ from ℤ uses exactly the rule a/b = c/d when ad = bc." }
  ],
  mistakes: [
    { wrong: `<span class="m"><span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>3</span><span>4</span></span></span> because 1 was added to both`, fix: `Equivalent fractions come from multiplying or dividing, never adding. <span class="m"><span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>4</span><span>6</span></span></span>.` },
    { wrong: `"1/8 is bigger than 1/4 because 8 is bigger than 4"`, fix: `A larger denominator means smaller pieces. <span class="m"><span class="fr"><span>1</span><span>8</span></span> &lt; <span class="fr"><span>1</span><span>4</span></span></span>.` },
    { wrong: `Cancelling digits: <span class="m"><span class="fr"><span>12</span><span>24</span></span> = <span class="fr"><span>1</span><span>4</span></span></span> by crossing out the 2s`, fix: `Cancel only common factors. <span class="m"><span class="fr"><span>12</span><span>24</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, dividing both by 12.` }
  ],
  practice: [
    { q: `Fill in the blank: <span class="m"><span class="fr"><span>2</span><span>5</span></span> = <span class="fr"><span>?</span><span>15</span></span></span>`, a: `6. The denominator was multiplied by 3, so the numerator is 2 × 3 = 6.` },
    { q: `Write <span class="m"><span class="fr"><span>42</span><span>56</span></span></span> in simplest form.`, a: `<span class="m"><span class="fr"><span>3</span><span>4</span></span></span>. The GCF is 14: 42 ÷ 14 = 3 and 56 ÷ 14 = 4.` },
    { q: `Are <span class="m"><span class="fr"><span>9</span><span>12</span></span></span> and <span class="m"><span class="fr"><span>15</span><span>20</span></span></span> equivalent?`, a: `Yes. Cross products 9 × 20 = 180 and 12 × 15 = 180 are equal. Both simplify to 3/4.` },
    { q: `Order from least to greatest: <span class="m"><span class="fr"><span>5</span><span>8</span></span>, <span class="fr"><span>2</span><span>3</span></span>, <span class="fr"><span>7</span><span>12</span></span></span>`, a: `<span class="m"><span class="fr"><span>7</span><span>12</span></span> &lt; <span class="fr"><span>5</span><span>8</span></span> &lt; <span class="fr"><span>2</span><span>3</span></span></span>. With denominator 24 they are 14/24, 15/24 and 16/24.` }
  ],
  origin: `The Egyptian Rhind Mathematical Papyrus (about 1550 BCE) works with unit fractions such as 1/3 and 1/10. The horizontal fraction bar was used by Arabic mathematicians, including al-Hassar in the 12th century, and spread in Europe through Fibonacci's <i>Liber Abaci</i> (1202).`
};

/* ------------------------------------------------------------------ */
ARITH["roots"] = {
  title: "Square Roots & Perfect Squares",
  short: "Finding the side of a square from its area",
  grade: "Grade 8",
  hours: 5,
  voice: "plain",
  eyebrow: "Operations · inverse of squaring",
  hero: `<span class="m">√<span class="c1"><i>A</i></span> = <span class="c2"><i>s</i></span>  ⟺  <span class="c2"><i>s</i></span><sup>2</sup> = <span class="c1"><i>A</i></span>, <span class="c2"><i>s</i></span> ≥ 0</span>`,
  lede: `The square root of an area is the side length of the square with that area. It undoes squaring.`,
  plain: `<p>A square tile pattern that is 5 tiles on each side has 25 tiles. Squaring goes from side to area: <span class="m">5<sup>2</sup> = 25</span>. The <b>square root</b> goes the other way, from area back to side: <span class="m">√25 = 5</span>.</p>
<p>Numbers like 1, 4, 9, 16, 25 and 36 are <b>perfect squares</b> because they come from squaring whole numbers. Their square roots are whole numbers. Most numbers are not perfect squares. √20 lies between √16 = 4 and √25 = 5, a little under 4.5.</p>
<p>You can close in on a square root by guessing and improving. Guess a side, divide the area by your guess, and average the two numbers. That average is a better guess. The ancient Babylonians used this method, and it gets very accurate after only a few rounds.</p>
<p>The √ symbol always means the non-negative root. Both 5 and −5 square to 25, but √25 is 5.</p>`,
  formal: `<p>For a real number <span class="m"><i>A</i> ≥ 0</span>, the <b>principal square root</b> <span class="m">√<i>A</i></span> is the unique real number <span class="m"><i>s</i> ≥ 0</span> with <span class="m"><i>s</i><sup>2</sup> = <i>A</i></span>. An integer <i>A</i> is a <b>perfect square</b> if <span class="m"><i>A</i> = <i>k</i><sup>2</sup></span> for some integer <i>k</i>. The equation <span class="m"><i>x</i><sup>2</sup> = <i>A</i></span> with <span class="m"><i>A</i> &gt; 0</span> has two solutions, <span class="m"><i>x</i> = ±√<i>A</i></span>.</p>
<div class="display"><span class="m">√(<i>ab</i>) = √<i>a</i> · √<i>b</i></span>,  <span class="m">√(<i>a</i>/<i>b</i>) = √<i>a</i> / √<i>b</i></span>  <span class="dim">(a ≥ 0, b &gt; 0)</span><br><span class="m">√(<i>x</i><sup>2</sup>) = |<i>x</i>|</span><br>Babylonian (Newton) iteration: <span class="m"><span class="c3"><i>x</i></span><sub><i>k</i>+1</sub> = <span class="fr"><span>1</span><span>2</span></span>(<span class="c3"><i>x</i></span><sub><i>k</i></sub> + <span class="c1"><i>A</i></span>/<span class="c3"><i>x</i></span><sub><i>k</i></sub>)</span></div>
<p>If a positive integer is not a perfect square, its square root is irrational. For example <span class="m">√2</span> cannot be written as a ratio of integers.</p>`,
  legend: [
    { c: "c1", sym: `<i>A</i>`, name: "Area (radicand)", desc: "The number under the root sign. In the lab it is the number of unit tiles." },
    { c: "c2", sym: `√<i>A</i>`, name: "Side (square root)", desc: "The non-negative number whose square is A: the side length of the square." },
    { c: "c3", sym: `<i>x</i><sub><i>k</i></sub>`, name: "Babylonian guess", desc: "Each improved estimate of √A. The average of a guess and A divided by the guess." }
  ],
  steps: { title: "How to estimate a square root", items: [
    `Find the two perfect squares on either side of <i>A</i>. Their roots bracket <span class="m">√<i>A</i></span>.`,
    `Take a first guess <span class="m"><i>x</i></span> between those roots.`,
    `Compute <span class="m"><i>A</i> ÷ <i>x</i></span>. If your guess is too big, this is too small, and the reverse.`,
    `Average the two: <span class="m">(<i>x</i> + <i>A</i>/<i>x</i>) ÷ 2</span>. This is the new guess.`,
    `Repeat until the guess stops changing to the accuracy you need.`
  ] },
  example: {
    prompt: `A community garden plot is a square with an area of 200 m². How long is each side, and about how much fencing is needed to enclose it?`,
    lines: [
      { math: `<span class="m">14<sup>2</sup> = 196 &lt; <span class="c1">200</span> &lt; 225 = 15<sup>2</sup></span>`, note: "The side is between 14 and 15 m, very close to 14." },
      { math: `<span class="m"><span class="c3"><i>x</i></span><sub>1</sub> = (14 + 200/14) ÷ 2 ≈ (14 + 14.2857) ÷ 2 ≈ <span class="c3">14.1429</span></span>`, note: "One Babylonian step from the guess 14." },
      { math: `<span class="m"><span class="c3"><i>x</i></span><sub>2</sub> = (14.1429 + 200/14.1429) ÷ 2 ≈ <span class="c3">14.1421</span></span>`, note: "A second step. The guess has settled to four decimal places." },
      { math: `<span class="m">√<span class="c1">200</span> = √(100 × 2) = 10√2 ≈ <span class="c2">14.142</span></span>`, note: "Exact form, using √(ab) = √a · √b." },
      { math: `<span class="m">4 × 14.142 ≈ 56.57</span>`, note: "The perimeter is four sides." }
    ],
    answer: `Each side is <span class="m">10√2 ≈ 14.14</span> m, and about <span class="m">56.6</span> m of fencing is needed.`
  },
  why: `<p>Square roots appear whenever you work backward from an area, or find a straight-line distance. The diagonal of a TV screen, the length of a ramp and the distance between two points on a map all use them. In statistics, the standard deviation is a square root.</p>
<p>Square roots lead to the Pythagorean theorem, the quadratic formula, and the discovery that some numbers, like √2, are irrational.</p>`,
  careers: [
    { role: "Carpenter", use: "Finds the diagonal of a rectangular frame as √(length² + width²) to check that it is square." },
    { role: "Electrician", use: "Relates peak and RMS voltage for AC sine waves, where RMS equals peak divided by √2." },
    { role: "Statistician", use: "Computes standard deviation as the square root of the variance." },
    { role: "Game developer", use: "Calculates the distance between two objects with the distance formula, which uses a square root." },
    { role: "Surveyor", use: "Computes straight-line distances between measured points from their coordinate differences." },
    { role: "Landscape designer", use: "Works out the side length of a square bed or patio from a target area." }
  ],
  life: [
    "Finding the side of a square room from its floor area",
    "Understanding a TV's size, which is measured along the diagonal",
    "Checking that a corner is square with a tape measure",
    "Estimating a straight-line shortcut across a field"
  ],
  fields: [
    { name: "Geometry", use: "The Pythagorean theorem and distance formula need square roots." },
    { name: "Statistics", use: "Standard deviation and standard error are square roots." },
    { name: "Physics", use: "Pendulum periods, wave speeds and root-mean-square values involve square roots." },
    { name: "Computer graphics", use: "Vector lengths and normalization use square roots constantly." }
  ],
  prereqWhy: {
    "exponents": "A square root undoes the exponent 2, so you need to know what squaring does."
  },
  unlocksWhy: {
    "real-numbers": "Roots of non-square integers such as √2 are the first irrational numbers most learners meet."
  },
  beyond: [
    { field: "Geometry", why: "Lengths of diagonals, distances and the Pythagorean theorem depend on square roots." },
    { field: "Algebra I", why: "Solving quadratic equations and using the quadratic formula require square roots." },
    { field: "Real analysis", why: "Proving that √2 exists as a real number motivates the completeness of ℝ." }
  ],
  mistakes: [
    { wrong: `<span class="m">√9 = ±3</span>`, fix: `The symbol √ means the non-negative root: <span class="m">√9 = 3</span>. The equation <span class="m"><i>x</i><sup>2</sup> = 9</span> has solutions ±3.` },
    { wrong: `<span class="m">√(9 + 16) = √9 + √16 = 7</span>`, fix: `Roots do not split over addition: <span class="m">√(9 + 16) = √25 = 5</span>.` },
    { wrong: `<span class="m">√16 = 8</span> (halving)`, fix: `A square root asks what number times itself gives 16: <span class="m">4 × 4 = 16</span>, so <span class="m">√16 = 4</span>.` }
  ],
  practice: [
    { q: `<span class="m">√144</span>`, a: `<span class="m">12</span>, since 12 × 12 = 144.` },
    { q: `Between which two whole numbers is <span class="m">√50</span>?`, a: `7 and 8, since 49 &lt; 50 &lt; 64. It is close to 7 (√50 ≈ 7.07).` },
    { q: `Simplify <span class="m">√72</span>.`, a: `<span class="m">6√2</span>. 72 = 36 × 2, so √72 = √36 · √2 = 6√2.` },
    { q: `Do one Babylonian step for <span class="m">√10</span> starting from the guess 3.`, a: `<span class="m">(3 + 10/3) ÷ 2 = 19/6 ≈ 3.1667</span>. The true value is √10 ≈ 3.1623.` }
  ],
  origin: `The Babylonian clay tablet YBC 7289 (about 1800–1600 BCE) gives √2 in base 60 as 1;24,51,10, about 1.414213, correct to roughly six decimal places. Greek mathematicians of the Pythagorean school proved that √2 is not a ratio of whole numbers. The √ sign appeared in print in Christoph Rudolff's <i>Coss</i> (1525).`
};

/* ------------------------------------------------------------------ */
ARITH["gcf-lcm"] = {
  title: "GCF, LCM & the Euclidean Algorithm",
  short: "The largest shared factor and smallest shared multiple",
  grade: "Grade 6 (Euclidean algorithm: college prep)",
  hours: 5,
  voice: "plain",
  eyebrow: "Number theory · common divisors and multiples",
  hero: `<span class="m"><span class="c1">gcd(<i>a</i>, <i>b</i>)</span> × <span class="c4">lcm(<i>a</i>, <i>b</i>)</span> = <span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span></span>`,
  lede: `The GCF is the biggest number that divides both. The LCM is the smallest number both divide. For positive integers, their product is a × b.`,
  plain: `<p>The <b>greatest common factor</b> (GCF, also called the greatest common divisor, gcd) of two numbers is the largest number that divides both. The factors of 12 are 1, 2, 3, 4, 6, 12 and the factors of 18 are 1, 2, 3, 6, 9, 18. The largest one on both lists is 6.</p>
<p>The <b>least common multiple</b> (LCM) is the smallest number that is a multiple of both. Counting by 6s gives 6, 12, 18, 24 and counting by 8s gives 8, 16, 24. The first number on both lists is 24.</p>
<p>Listing gets slow for big numbers. The <b>Euclidean algorithm</b> is a faster way to find the GCF. Picture an <i>a</i> by <i>b</i> rectangle. Cut off the biggest squares you can, then repeat on the leftover strip. The last square size that fits with nothing left over is the GCF. In numbers: divide, keep the remainder, and repeat with the divisor and remainder until the remainder is 0.</p>`,
  formal: `<p>For integers <i>a</i>, <i>b</i> not both zero, <span class="m">gcd(<i>a</i>, <i>b</i>)</span> is the largest integer dividing both. For nonzero <i>a</i>, <i>b</i>, <span class="m">lcm(<i>a</i>, <i>b</i>)</span> is the smallest positive integer that both divide. For positive integers, <span class="m">gcd(<i>a</i>, <i>b</i>) · lcm(<i>a</i>, <i>b</i>) = <i>ab</i></span>.</p>
<div class="display"><b>Euclidean algorithm.</b> If <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span> with <span class="m">0 ≤ <i>r</i> &lt; <i>b</i></span>, then <span class="m">gcd(<i>a</i>, <i>b</i>) = gcd(<i>b</i>, <i>r</i>)</span>, and <span class="m">gcd(<i>a</i>, 0) = |<i>a</i>|</span>.<br>From prime factorizations <span class="m"><i>a</i> = ∏ <i>p</i><sup><i>α</i><sub><i>p</i></sub></sup></span>, <span class="m"><i>b</i> = ∏ <i>p</i><sup><i>β</i><sub><i>p</i></sub></sup></span>:<br><span class="m">gcd = ∏ <i>p</i><sup>min(<i>α</i><sub><i>p</i></sub>, <i>β</i><sub><i>p</i></sub>)</sup></span>,  <span class="m">lcm = ∏ <i>p</i><sup>max(<i>α</i><sub><i>p</i></sub>, <i>β</i><sub><i>p</i></sub>)</sup></span></div>
<p><b>Bézout's identity:</b> there are integers <i>x</i>, <i>y</i> with <span class="m"><i>ax</i> + <i>by</i> = gcd(<i>a</i>, <i>b</i>)</span>. The extended Euclidean algorithm finds them. Numbers with gcd 1 are called <b>relatively prime</b> (coprime).</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First number", desc: "The long side of the rectangle in the lab." },
    { c: "c3", sym: `<i>b</i>`, name: "Second number", desc: "The short side of the rectangle." },
    { c: "c1", sym: `gcd(<i>a</i>, <i>b</i>)`, name: "Greatest common factor", desc: "The largest square that tiles the whole rectangle exactly." },
    { c: "c4", sym: `lcm(<i>a</i>, <i>b</i>)`, name: "Least common multiple", desc: "The smallest number both a and b divide. It equals a × b ÷ gcd." }
  ],
  steps: { title: "How to run the Euclidean algorithm", items: [
    `Divide the larger number <i>a</i> by the smaller <i>b</i> and find the remainder <i>r</i>, so <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span>.`,
    `If <span class="m"><i>r</i> = 0</span>, then <i>b</i> is the GCF. Stop.`,
    `Otherwise replace <span class="m">(<i>a</i>, <i>b</i>)</span> with <span class="m">(<i>b</i>, <i>r</i>)</span> and repeat.`,
    `The last nonzero remainder is the GCF.`,
    `For the LCM, compute <span class="m"><i>a</i> × <i>b</i> ÷ gcd(<i>a</i>, <i>b</i>)</span>. Dividing one number by the GCF first keeps the numbers small.`
  ] },
  example: {
    prompt: `A room is 1,071 cm by 462 cm. What is the largest square tile, in whole centimetres, that covers the floor exactly with no cutting, and how many tiles are needed?`,
    lines: [
      { math: `<span class="m"><span class="c2">1071</span> = <span class="c3">462</span> × 2 + 147</span>`, note: "Two 462 cm squares fit along the long side, leaving a 147 cm strip." },
      { math: `<span class="m"><span class="c3">462</span> = 147 × 3 + 21</span>`, note: "Three 147 cm squares fit in the strip, leaving 21 cm." },
      { math: `<span class="m">147 = <span class="c1">21</span> × 7 + 0</span>`, note: "Remainder 0, so the last divisor is the GCF." },
      { math: `<span class="m">gcd(<span class="c2">1071</span>, <span class="c3">462</span>) = <span class="c1">21</span></span>`, note: "Check: 1071 = 21 × 51 and 462 = 21 × 22." },
      { math: `<span class="m">51 × 22 = 1,122</span>`, note: "Tiles along each side, multiplied." }
    ],
    answer: `The largest tile is <span class="m">21</span> cm by 21 cm, and <span class="m">1,122</span> tiles are needed.`
  },
  why: `<p>The GCF answers "what is the biggest equal group or piece?" and the LCM answers "when will these cycles line up again?" You use them to cut materials without waste, to find when two buses or schedules coincide, and to simplify fractions or find common denominators.</p>
<p>The Euclidean algorithm is one of the oldest algorithms still in use. Its extended form computes modular inverses, which RSA encryption needs to build its private key.</p>`,
  careers: [
    { role: "Tile setter", use: "Chooses tile sizes that divide both room dimensions so rows finish without cut pieces." },
    { role: "Transit planner", use: "Finds when routes with different headways, such as 18 and 24 minutes, depart together again using the LCM." },
    { role: "Cryptographer", use: "Uses the extended Euclidean algorithm to compute the RSA private exponent as a modular inverse." },
    { role: "Production planner", use: "Uses the LCM of package sizes, such as 10 hot dogs and 8 buns, to order matching quantities with none left over." },
    { role: "Musician", use: "Lines up polyrhythms such as 3 against 4, which repeat every 12 beats, the LCM." },
    { role: "Mechanical engineer", use: "Checks that gear tooth counts are coprime so the same teeth do not always mesh." }
  ],
  life: [
    "Simplifying fractions in one step",
    "Working out when two repeating events happen on the same day",
    "Cutting ribbon or boards into equal pieces with no waste",
    "Buying packs of two items so the counts match"
  ],
  fields: [
    { name: "Computer science", use: "The Euclidean algorithm is a textbook example of an efficient algorithm and is used in rational arithmetic libraries." },
    { name: "Cryptography", use: "Key generation for RSA relies on the extended Euclidean algorithm." },
    { name: "Music", use: "Polyrhythms and pattern cycles repeat after the LCM of their lengths." },
    { name: "Engineering", use: "Gear trains and scheduling problems use gcd and lcm." }
  ],
  prereqWhy: {
    "primes": "One method reads the GCF and LCM from prime factorizations by comparing exponents."
  },
  unlocksWhy: {
    "fraction-ops": "Adding fractions uses the LCM of the denominators as the least common denominator, and the GCF simplifies the result."
  },
  beyond: [
    { field: "Number theory", why: "Bézout's identity and the Euclidean algorithm underlie solving linear Diophantine equations and congruences." },
    { field: "Abstract algebra", why: "The Euclidean algorithm generalizes to polynomials and defines Euclidean domains." },
    { field: "Cryptography", why: "Modular inverses computed by the extended Euclidean algorithm are required in RSA." }
  ],
  mistakes: [
    { wrong: `"The LCM of 6 and 8 is 48"`, fix: `6 × 8 is a common multiple, but not always the least. <span class="m">lcm(6, 8) = 48 ÷ gcd(6, 8) = 48 ÷ 2 = 24</span>.` },
    { wrong: `Mixing up GCF and LCM: answering 24 for the GCF of 6 and 8`, fix: `The GCF is never larger than the smaller number. The LCM is never smaller than the larger number.` },
    { wrong: `Using the larger exponents for the GCF`, fix: `The GCF takes the smaller exponent of each shared prime. The LCM takes the larger exponent of every prime present.` }
  ],
  practice: [
    { q: `<span class="m">gcd(12, 18)</span>`, a: `<span class="m">6</span>. Common factors are 1, 2, 3, 6.` },
    { q: `<span class="m">lcm(6, 8)</span>`, a: `<span class="m">24</span>. 6 × 8 ÷ gcd(6, 8) = 48 ÷ 2 = 24.` },
    { q: `Two buses leave a station together at 7:00 a.m. One returns every 18 minutes and the other every 24 minutes. When do they next leave together?`, a: `8:12 a.m. lcm(18, 24) = 18 × 24 ÷ 6 = 72 minutes after 7:00.` },
    { q: `Use the Euclidean algorithm to find <span class="m">gcd(252, 198)</span>, then find <span class="m">lcm(252, 198)</span>.`, a: `gcd = 18: 252 = 198 × 1 + 54, 198 = 54 × 3 + 36, 54 = 36 × 1 + 18, 36 = 18 × 2 + 0. lcm = 252 × 198 ÷ 18 = 2,772.` }
  ],
  origin: `The Euclidean algorithm appears in Euclid's <i>Elements</i>, Book VII, Propositions 1 and 2 (around 300 BCE), described as repeatedly subtracting the smaller number from the larger.`
};

/* ------------------------------------------------------------------ */
ARITH["decimals"] = {
  title: "Decimals",
  short: "Place value extended to the right of the point",
  grade: "Grades 4–5",
  hours: 6,
  voice: "mixed",
  eyebrow: "Place value · decimal fractions",
  hero: `<span class="m"><span class="c1">0.47</span> = <span class="fr"><span class="c2">4</span><span>10</span></span> + <span class="fr"><span class="c3">7</span><span>100</span></span> = <span class="fr"><span>47</span><span>100</span></span></span>`,
  lede: `Each place to the right of the decimal point is worth one tenth of the place to its left. A decimal is a fraction with a power of 10 underneath.`,
  plain: `<p>Place value keeps going past the ones. Each step to the left is worth ten times more, so each step to the right is worth ten times less. After the ones place, the decimal point marks the start of the <b>tenths</b>, then the <b>hundredths</b>, then the <b>thousandths</b>.</p>
<p>Money is a good picture. In $3.47, the 3 is three whole dollars, the 4 is four dimes (tenths of a dollar), and the 7 is seven pennies (hundredths). You read it as "three and forty-seven hundredths".</p>
<p>To compare decimals, line up the decimal points and compare place by place from the left. Writing zeros at the end does not change a decimal: 0.5 and 0.50 are the same amount. This makes it easy to see that 0.5 is larger than 0.45, even though 45 looks bigger than 5.</p>
<p>Some fractions turn into decimals that stop, like 3/8 = 0.375. Others repeat forever, like 1/3 = 0.333….</p>`,
  formal: `<p>A <b>decimal numeral</b> <span class="m"><i>d</i><sub><i>k</i></sub>⋯<i>d</i><sub>1</sub><i>d</i><sub>0</sub>.<i>d</i><sub>−1</sub><i>d</i><sub>−2</sub>⋯</span> with digits <span class="m"><i>d</i><sub><i>i</i></sub> ∈ {0, …, 9}</span> denotes</p>
<div class="display"><span class="m">∑ <i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup> = ⋯ + <i>d</i><sub>0</sub> + <span class="c2"><i>d</i><sub>−1</sub></span>·10<sup>−1</sup> + <span class="c3"><i>d</i><sub>−2</sub></span>·10<sup>−2</sup> + ⋯</span></div>
<p>A terminating decimal with <i>n</i> digits after the point equals a fraction with denominator <span class="m">10<sup><i>n</i></sup></span>. A fraction in lowest terms has a terminating decimal expansion if and only if its denominator has no prime factors other than 2 and 5. Every other rational number has an eventually repeating expansion, and every eventually repeating decimal is rational.</p>`,
  legend: [
    { c: "c2", sym: `<i>d</i><sub>−1</sub>`, name: "Tenths digit", desc: "First digit after the point. Each unit is one column of the 10×10 grid." },
    { c: "c3", sym: `<i>d</i><sub>−2</sub>`, name: "Hundredths digit", desc: "Second digit after the point. Each unit is one small square of the grid." },
    { c: "c1", sym: `<i>x</i>`, name: "Value", desc: "The number the decimal represents, shaded on the grid." },
    { c: "c4", sym: `10<sup>−<i>n</i></sup>`, name: "Place value", desc: "The worth of the nth place after the point: 0.1, 0.01, 0.001, …" }
  ],
  steps: { title: "How to compare and order decimals", items: [
    `Write the numbers in a column with the decimal points lined up.`,
    `Pad with zeros on the right so every number has the same number of decimal places.`,
    `Compare the whole-number parts first.`,
    `If they tie, compare tenths, then hundredths, and so on, until a digit differs.`,
    `The number with the larger digit in the first differing place is larger.`
  ] },
  example: {
    prompt: `A mechanic has three bolts with diameters 0.4 in, 0.38 in and 0.375 in. The hole is labelled 3/8 in. Which bolt matches exactly, and what is the order from smallest to largest?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>3</span><span>8</span></span> = 3 ÷ 8 = <span class="c1">0.375</span></span>`, note: "Convert the fraction by dividing numerator by denominator." },
      { math: `<span class="m">0.400,  0.380,  0.375</span>`, note: "Pad with zeros so all have three decimal places." },
      { math: `<span class="m">0.<span class="c2">4</span>00 vs 0.<span class="c2">3</span>80 vs 0.<span class="c2">3</span>75</span>`, note: "Tenths: 4 beats 3, so 0.4 is largest." },
      { math: `<span class="m">0.3<span class="c3">8</span>0 vs 0.3<span class="c3">7</span>5</span>`, note: "Tenths tie. Hundredths: 8 beats 7, so 0.38 > 0.375." }
    ],
    answer: `The 0.375 in bolt matches the 3/8 in hole. Order: <span class="m">0.375 &lt; 0.38 &lt; 0.4</span>.`
  },
  why: `<p>Decimals are how most measurements and all money are written: prices, fuel, lab results, sports times and nutrition labels. Calculators, spreadsheets and digital meters all show decimals.</p>
<p>Percents, scientific notation, and the real number line build directly on decimals. Seeing a decimal as a sum of tenths, hundredths and so on also prepares you for infinite series in calculus.</p>`,
  careers: [
    { role: "Pharmacist", use: "Reads and checks doses such as 0.25 mg against 2.5 mg, where a misplaced decimal point is a tenfold error." },
    { role: "Machinist", use: "Measures parts with calipers to thousandths of an inch, such as 0.375 in." },
    { role: "Bank teller", use: "Counts and records cash amounts to the hundredth of a dollar." },
    { role: "Lab technician", use: "Records measurements such as 2.45 mL and reports them to the correct number of decimal places." },
    { role: "Sports timer", use: "Ranks race results recorded to hundredths of a second." }
  ],
  life: [
    "Comparing prices per unit at the grocery store",
    "Reading a digital thermometer or scale",
    "Checking a receipt or bank statement",
    "Reading fuel prices and litres pumped",
    "Understanding race and lap times"
  ],
  fields: [
    { name: "Chemistry", use: "Measurements and concentrations are recorded as decimals with significant figures." },
    { name: "Finance", use: "Money, interest rates and exchange rates are decimal quantities." },
    { name: "Engineering", use: "Tolerances are specified in decimal units such as ±0.005 in." },
    { name: "Computer science", use: "Converting between decimal and binary fractions explains floating-point rounding." }
  ],
  prereqWhy: {
    "place-value": "Decimals extend the base-ten place-value chart to the right of the ones place.",
    "fractions": "A decimal is a fraction with denominator 10, 100, 1000 and so on, and converting between them needs fraction sense."
  },
  unlocksWhy: {
    "decimal-ops": "Adding, subtracting, multiplying and dividing decimals depends on lining up and tracking place value.",
    "percents": "A percent is a number of hundredths, so 0.35 = 35%.",
    "sci-notation": "The coefficient in scientific notation is a decimal between 1 and 10.",
    "real-numbers": "Every real number has a decimal expansion, and repeating versus non-repeating decimals separate rationals from irrationals."
  },
  beyond: [
    { field: "Statistics", why: "Data summaries, probabilities and p-values are reported as decimals." },
    { field: "Calculus", why: "Limits and infinite series are first understood through decimal approximations like 0.999… = 1." },
    { field: "Numerical analysis", why: "Rounding error and floating-point representation are studied on decimal and binary expansions." }
  ],
  mistakes: [
    { wrong: `"0.45 is larger than 0.5 because 45 &gt; 5"`, fix: `Pad to equal length: 0.45 vs 0.50. Fifty hundredths is more than forty-five hundredths.` },
    { wrong: `Reading 0.07 as "seven tenths"`, fix: `The 7 is in the hundredths place: "seven hundredths". Seven tenths is 0.7.` },
    { wrong: `<span class="m"><span class="fr"><span>1</span><span>3</span></span> = 0.3</span>`, fix: `0.3 is 3/10. One third is <span class="m">0.333…</span> with the 3 repeating forever.` }
  ],
  practice: [
    { q: `Write 3.07 in words and as a fraction.`, a: `Three and seven hundredths, <span class="m"><span class="fr"><span>307</span><span>100</span></span></span>.` },
    { q: `Order from least to greatest: 0.6, 0.06, 0.66, 0.606.`, a: `0.06 &lt; 0.6 &lt; 0.606 &lt; 0.66. Padded: 0.060, 0.600, 0.606, 0.660.` },
    { q: `Write <span class="m"><span class="fr"><span>7</span><span>20</span></span></span> as a decimal.`, a: `0.35. Multiply top and bottom by 5: 35/100.` },
    { q: `Write <span class="m"><span class="fr"><span>5</span><span>12</span></span></span> as a decimal. Does it terminate?`, a: `0.41666…, with the 6 repeating. It does not terminate because 12 = 2² × 3 has the prime factor 3.` }
  ],
  origin: `Decimal fractions were used by the Persian mathematician Jamshid al-Kashi in <i>The Key to Arithmetic</i> (1427). Simon Stevin's booklet <i>De Thiende</i> (1585) promoted them for everyday use in Europe.`
};

/* ------------------------------------------------------------------ */
ARITH["mixed-numbers"] = {
  title: "Mixed Numbers & Improper Fractions",
  short: "Two ways to write amounts bigger than one",
  grade: "Grades 4–5",
  hours: 3,
  voice: "mixed",
  eyebrow: "Fractions · amounts greater than one",
  hero: `<span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span> = <span class="fr"><span><span class="c1"><i>w</i></span> × <span class="c2"><i>d</i></span> + <span class="c3"><i>r</i></span></span><span class="c2"><i>d</i></span></span></span>`,
  lede: `A mixed number is a whole number plus a proper fraction. It names the same amount as an improper fraction.`,
  plain: `<p>Suppose you have two whole pies and three quarters of another. You could say "2 and 3/4 pies", written <span class="m">2 <span class="fr"><span>3</span><span>4</span></span></span>. That is a <b>mixed number</b>: a whole part and a fraction part.</p>
<p>You could also cut every pie into quarters and count the slices. Each whole pie gives 4 slices, so 2 pies give 8, plus 3 more makes 11 quarters. That is <span class="m"><span class="fr"><span>11</span><span>4</span></span></span>, an <b>improper fraction</b> because the top is at least as big as the bottom.</p>
<p>To go back, divide. 11 ÷ 4 is 2 with remainder 3, so <span class="m"><span class="fr"><span>11</span><span>4</span></span> = 2 <span class="fr"><span>3</span><span>4</span></span></span>. The quotient is the number of whole pies and the remainder is the leftover slices.</p>
<p>Mixed numbers are easier to picture and to measure with. Improper fractions are easier to calculate with.</p>`,
  formal: `<p>A fraction <span class="m"><span class="fr"><span><i>n</i></span><span><i>d</i></span></span></span> with <span class="m"><i>n</i> ≥ <i>d</i> &gt; 0</span> is <b>improper</b>. By the division algorithm, <span class="m"><i>n</i> = <i>dw</i> + <i>r</i></span> with integers <span class="m"><i>w</i> ≥ 1</span> and <span class="m">0 ≤ <i>r</i> &lt; <i>d</i></span>, so</p>
<div class="display"><span class="m"><span class="fr"><span><i>n</i></span><span><span class="c2"><i>d</i></span></span></span> = <span class="c1"><i>w</i></span> + <span class="fr"><span><span class="c3"><i>r</i></span></span><span><span class="c2"><i>d</i></span></span></span></span>, written <span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span></span><br><span class="dim">Juxtaposition here means addition, not multiplication.</span></div>
<p>For a negative mixed number the sign applies to the whole amount: <span class="m">−<i>w</i> <span class="fr"><span><i>r</i></span><span><i>d</i></span></span> = −(<i>w</i> + <span class="fr"><span><i>r</i></span><span><i>d</i></span></span>)</span>. The fraction part is in lowest terms when <span class="m">gcd(<i>r</i>, <i>d</i>) = 1</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>w</i>`, name: "Whole part", desc: "How many complete wholes there are. It is the quotient n ÷ d." },
    { c: "c3", sym: `<i>r</i>`, name: "Leftover numerator", desc: "The parts left over after the wholes. It is the remainder, always less than d." },
    { c: "c2", sym: `<i>d</i>`, name: "Denominator", desc: "How many equal parts make one whole. It stays the same in both forms." }
  ],
  steps: { title: "How to convert between the two forms", items: [
    `Mixed to improper: multiply the whole part by the denominator.`,
    `Add the numerator. Put the result over the same denominator.`,
    `Improper to mixed: divide the numerator by the denominator.`,
    `The quotient is the whole part. The remainder goes over the original denominator.`,
    `Simplify the fraction part if the remainder and denominator share a factor.`
  ] },
  example: {
    prompt: `A cook needs <span class="m">2 <span class="fr"><span>2</span><span>3</span></span></span> cups of broth but only has a <span class="m"><span class="fr"><span>1</span><span>3</span></span></span>-cup scoop. How many level scoops are needed?`,
    lines: [
      { math: `<span class="m"><span class="c1">2</span> <span class="fr"><span class="c3">2</span><span class="c2">3</span></span></span>`, note: "Whole part w = 2, leftover numerator r = 2, denominator d = 3." },
      { math: `<span class="m"><span class="c1">2</span> × <span class="c2">3</span> = 6</span>`, note: "Each whole cup holds 3 thirds, so 2 cups hold 6 thirds." },
      { math: `<span class="m">6 + <span class="c3">2</span> = 8</span>`, note: "Add the 2 extra thirds." },
      { math: `<span class="m"><span class="c1">2</span> <span class="fr"><span class="c3">2</span><span class="c2">3</span></span> = <span class="fr"><span>8</span><span class="c2">3</span></span></span>`, note: "Eight thirds of a cup." },
      { math: `<span class="m">8 ÷ <span class="c2">3</span> = <span class="c1">2</span> R <span class="c3">2</span></span>`, note: "Check by converting back: 2 wholes and 2 thirds." }
    ],
    answer: `The cook needs <span class="m">8</span> level <span class="m"><span class="fr"><span>1</span><span>3</span></span></span>-cup scoops.`
  },
  why: `<p>Mixed numbers are how people talk about measurements larger than one: 1 1/2 teaspoons, a 2 3/4-inch screw, 5 1/4 yards of fabric. Improper fractions are what you convert to before multiplying or dividing those amounts.</p>
<p>Switching between the two forms is a direct use of the division algorithm, and it prepares you for fraction operations and algebra, where improper fractions are the standard form.</p>`,
  careers: [
    { role: "Carpenter", use: "Adds and cuts lengths like 3 5/8 in from a tape measure marked in fractions of an inch." },
    { role: "Baker", use: "Scales recipe amounts such as 1 1/2 cups of flour by converting to 3/2 before multiplying." },
    { role: "Tailor", use: "Buys fabric in yardages like 2 1/4 yd and works with seam allowances such as 5/8 in." },
    { role: "Plumber", use: "Works with pipe and fitting sizes such as 1 1/4 in and 1 1/2 in." },
    { role: "Landscaper", use: "Orders mulch, soil and gravel in amounts such as 3 1/2 cubic yards." }
  ],
  life: [
    "Following a recipe that calls for 1 1/2 cups",
    "Measuring a shelf or picture frame in inches",
    "Reading a child's height as 4 1/2 feet",
    "Buying fabric or rope by the yard",
    "Saying a trip takes 2 1/2 hours"
  ],
  fields: [
    { name: "Construction", use: "US lumber, fasteners and plans use mixed-number inch measurements." },
    { name: "Culinary arts", use: "Recipe quantities are written as mixed numbers of cups and spoons." },
    { name: "Textiles", use: "Patterns and fabric are measured in mixed numbers of inches and yards." }
  ],
  prereqWhy: {
    "fractions": "Both forms are fractions, and converting keeps the denominator while regrouping the parts."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Expressions are simplified to improper fractions, and a mixed number like 2 1/3 must be read as a sum." },
    { field: "Precalculus", why: "Polynomial long division writes an improper rational expression as a polynomial plus a proper remainder term, the same shape as a mixed number." }
  ],
  mistakes: [
    { wrong: `<span class="m">2 <span class="fr"><span>3</span><span>4</span></span> = 2 × <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>4</span></span></span>`, fix: `A mixed number is a sum: <span class="m">2 + <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>11</span><span>4</span></span></span>.` },
    { wrong: `<span class="m">3 <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>3 × 1 + 4</span><span>4</span></span> = <span class="fr"><span>7</span><span>4</span></span></span>`, fix: `Multiply the whole part by the denominator: <span class="m"><span class="fr"><span>3 × 4 + 1</span><span>4</span></span> = <span class="fr"><span>13</span><span>4</span></span></span>.` },
    { wrong: `<span class="m">−2 <span class="fr"><span>1</span><span>3</span></span> = −2 + <span class="fr"><span>1</span><span>3</span></span></span>`, fix: `The minus sign covers both parts: <span class="m">−(2 + <span class="fr"><span>1</span><span>3</span></span>) = −<span class="fr"><span>7</span><span>3</span></span></span>.` }
  ],
  practice: [
    { q: `Write <span class="m">3 <span class="fr"><span>1</span><span>4</span></span></span> as an improper fraction.`, a: `<span class="m"><span class="fr"><span>13</span><span>4</span></span></span>. 3 × 4 + 1 = 13.` },
    { q: `Write <span class="m"><span class="fr"><span>17</span><span>5</span></span></span> as a mixed number.`, a: `<span class="m">3 <span class="fr"><span>2</span><span>5</span></span></span>. 17 ÷ 5 = 3 remainder 2.` },
    { q: `Write <span class="m"><span class="fr"><span>45</span><span>6</span></span></span> as a mixed number in simplest form.`, a: `<span class="m">7 <span class="fr"><span>1</span><span>2</span></span></span>. 45 ÷ 6 = 7 remainder 3, and 3/6 = 1/2.` },
    { q: `Which is longer: a <span class="m"><span class="fr"><span>29</span><span>7</span></span></span> m board or a <span class="m">4 <span class="fr"><span>1</span><span>3</span></span></span> m board?`, a: `The <span class="m">4 <span class="fr"><span>1</span><span>3</span></span></span> m board. 29/7 = 4 1/7, and 1/7 &lt; 1/3.` }
  ],
  origin: `The Egyptian Rhind Mathematical Papyrus (about 1550 BCE) writes quantities greater than one as a whole number followed by unit fractions, such as 2 plus 1/4.`
};
