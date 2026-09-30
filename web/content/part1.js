window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["place-value"] = {
  title: "Place Value & Base Ten",
  short: "A digit's value depends on where it sits.",
  grade: "Grades 1–4",
  hours: 4,
  voice: "young",
  eyebrow: "Number sense · base-ten notation",
  hero: `<span class="m">4,306 = <span class="c4">4 × 1000</span> + <span class="c3">3 × 100</span> + <span class="c2">0 × 10</span> + <span class="c1">6 × 1</span></span>`,
  lede: `Ten ones make a ten, ten tens make a hundred, and ten hundreds make a thousand. Each place is worth ten times the place to its right.`,
  plain: `<p>We only have ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. So how do we write a number like four thousand three hundred six? We use places. The same digit means different amounts in different spots.</p>
<p>In 4,306, the 6 is in the <b>ones</b> place, so it means 6. The 0 is in the <b>tens</b> place, so there are no tens. The 3 is in the <b>hundreds</b> place, so it means 300. The 4 is in the <b>thousands</b> place, so it means 4,000.</p>
<p>Think of blocks. A small cube is one. Ten cubes in a stick make a ten. Ten sticks in a flat make a hundred. Ten flats in a big cube make a thousand. Whenever you get ten of something, you trade them for one of the next bigger size.</p>
<p>Zero matters here. Without it, 4,306 and 436 would look the same. The zero holds the empty tens place open.</p>`,
  formal: `<p>In <b>base ten</b> (decimal) positional notation, a string of digits <span class="m"><i>d</i><sub><i>k</i></sub> … <i>d</i><sub>2</sub><i>d</i><sub>1</sub><i>d</i><sub>0</sub></span>, each <span class="m"><i>d</i><sub><i>i</i></sub> ∈ {0, 1, …, 9}</span>, names the number</p>
<div class="display"><i>d</i><sub><i>k</i></sub>·10<sup><i>k</i></sup> + ⋯ + <span class="c3"><i>d</i><sub>2</sub>·10<sup>2</sup></span> + <span class="c2"><i>d</i><sub>1</sub>·10<sup>1</sup></span> + <span class="c1"><i>d</i><sub>0</sub>·10<sup>0</sup></span></div>
<p>The <b>face value</b> of a digit is the digit itself. Its <b>place value</b> is the digit times the power of ten for its position. Every positive whole number has exactly one such representation with a nonzero leading digit, so the notation is unambiguous. Writing a number as this sum is called <b>expanded form</b>.</p>`,
  legend: [
    { c: "c4", sym: `1000`, name: "Thousands", desc: "Each digit here counts groups of one thousand. One thousand is ten hundreds." },
    { c: "c3", sym: `100`, name: "Hundreds", desc: "Each digit here counts groups of one hundred. One hundred is ten tens." },
    { c: "c2", sym: `10`, name: "Tens", desc: "Each digit here counts groups of ten. One ten is ten ones." },
    { c: "c1", sym: `1`, name: "Ones", desc: "The rightmost digit of a whole number counts single units." }
  ],
  steps: { title: "How to find what each digit is worth", items: [
    `Start at the rightmost digit. That is the ones place.`,
    `Move one place left for each step up: ones, tens, hundreds, thousands. Each place is worth 10 times the one to its right.`,
    `Multiply each digit by its place: for example, a 3 in the hundreds place is worth <span class="m">3 × 100 = 300</span>.`,
    `Add all the place values to write the number in expanded form.`,
    `To read the number aloud, say the thousands part, then the hundreds, then the tens and ones. Skip any place that holds a 0.`
  ] },
  example: {
    prompt: `You are writing a check for a used car that costs $4,306. The check needs the amount in words. What do you write?`,
    lines: [
      { math: `<span class="c4">4</span> <span class="c3">3</span> <span class="c2">0</span> <span class="c1">6</span>`, note: "Label the places from the right: ones, tens, hundreds, thousands." },
      { math: `<span class="c4">4 × 1000</span> = 4,000`, note: "The 4 is in the thousands place." },
      { math: `<span class="c3">3 × 100</span> = 300`, note: "The 3 is in the hundreds place." },
      { math: `<span class="c2">0 × 10</span> = 0,&nbsp; <span class="c1">6 × 1</span> = 6`, note: "There are no tens, and 6 ones." },
      { math: `4,000 + 300 + 0 + 6 = 4,306`, note: "Expanded form adds back to the original number, so the reading is right." }
    ],
    answer: `Write "Four thousand three hundred six and 00/100 dollars." There is no "tens" word because the tens digit is 0.`
  },
  why: `<p>Place value lets ten symbols name any whole number, however large. Prices, populations, distances and bank balances are all written this way. Reading a digit in the wrong place is a tenfold error, and people make costly mistakes with money and medicine by misplacing a digit.</p>
<p>Every written method for adding, subtracting, multiplying and dividing works place by place. Later, decimals extend the same system to the right of the ones place, and scientific notation and binary numbers in computing use the same positional idea with other bases or powers.</p>`,
  careers: [
    { role: "Nurse", use: "Reads medication orders where 0.5 mg and 5 mg differ by one place, and knows a misplaced digit is a tenfold dosing error." },
    { role: "Accountant", use: "Lines up figures by place in ledgers and spreadsheets so columns of dollars can be totaled and audited." },
    { role: "Software developer", use: "Converts between base ten, binary (base two) and hexadecimal (base sixteen), which all use place value." },
    { role: "Bank teller", use: "Writes and verifies check amounts in both digits and words, which requires reading each place correctly." },
    { role: "Machinist", use: "Reads measurements to the thousandth of an inch, where each place to the right is one tenth the size of the last." }
  ],
  life: [
    "Reading prices, paychecks and bills correctly",
    "Writing the amount on a check in words",
    "Reading addresses, phone numbers and odometer readings",
    "Counting cash in hundreds, tens and ones",
    "Comparing house prices or car prices"
  ],
  fields: [
    { name: "Computer science", use: "Binary and hexadecimal are place-value systems in base 2 and base 16." },
    { name: "Accounting and finance", use: "Column alignment by place value is the basis of every ledger and financial statement." },
    { name: "Physics and chemistry", use: "Measurements and significant figures depend on knowing the place value of each digit." }
  ],
  prereqWhy: {
    "counting": "Place value is a way of recording counts, so you need to count reliably to 10 and beyond before grouping by tens."
  },
  unlocksWhy: {
    "rounding": "Rounding to the nearest ten, hundred or thousand means looking at the digit one place to the right of the rounding place.",
    "addition": "Column addition adds ones to ones, tens to tens and so on, and carrying is trading ten of one place for one of the next.",
    "decimals": "Decimals extend place value to the right of the ones place with tenths, hundredths and thousandths."
  },
  beyond: [
    { field: "Number theory", why: "Divisibility tests, such as the rule for 9 using digit sums, come from the base-ten expansion of a number." },
    { field: "Algebra I", why: "Polynomials in x look like expanded form with 10 replaced by x, and long division of polynomials copies long division of numbers." },
    { field: "Discrete math and computing", why: "Number bases, binary arithmetic and data representation all use positional notation." }
  ],
  mistakes: [
    { wrong: `Writing "four thousand six" as <span class="m">46</span> or <span class="m">4,0006</span>.`, fix: `Each place needs exactly one digit. Four thousand six is <span class="m">4,006</span>: 4 thousands, 0 hundreds, 0 tens, 6 ones.` },
    { wrong: `Saying the 7 in 3,782 is worth 7.`, fix: `The 7 is in the hundreds place, so it is worth <span class="m">7 × 100 = 700</span>.` },
    { wrong: `Thinking 4,560 has only 6 tens because the tens digit is 6.`, fix: `The tens digit is 6, but the total number of tens is 456, since <span class="m">4,560 = 456 × 10</span>.` }
  ],
  practice: [
    { q: `What is the value of the 7 in 3,782?`, a: `It is in the hundreds place: <span class="m">7 × 100 = </span><b>700</b>.` },
    { q: `Write 5,049 in expanded form.`, a: `<span class="m">5,000 + 0 + 40 + 9</span>, or <b>5 × 1000 + 4 × 10 + 9 × 1</b>.` },
    { q: `What number is 3 thousands, 14 hundreds, 2 tens and 5 ones?`, a: `14 hundreds is 1,400. <span class="m">3,000 + 1,400 + 20 + 5 = </span><b>4,425</b>.` },
    { q: `How many tens are in 4,560 altogether?`, a: `<span class="m">4,560 ÷ 10 = 456</span>, so <b>456 tens</b>.` }
  ],
  origin: `The Babylonians used a positional system in base 60 about 4,000 years ago. The base-ten place-value system with a digit for zero developed in India; Brahmagupta treated zero as a number in 628 CE. It reached the Islamic world through al-Khwarizmi's work around 825 CE and was spread in Europe by Fibonacci's <i>Liber Abaci</i> in 1202.`
};

/* ------------------------------------------------------------------ */
ARITH["number-line"] = {
  title: "Comparing & the Number Line",
  short: "Bigger numbers sit farther to the right.",
  grade: "Grades K–2",
  hours: 3,
  voice: "young",
  eyebrow: "Number sense · order and distance",
  hero: `<span class="m"><span class="c2"><i>a</i></span> <span class="c1">&lt;</span> <span class="c3"><i>b</i></span> &nbsp;·&nbsp; <span class="c4">|<i>a</i> − <i>b</i>|</span></span>`,
  lede: `A number line puts numbers in order with equal spacing. The number farther right is greater, and the gap between two points is their distance.`,
  plain: `<p>Draw a straight line. Put 0 on the left. Take equal steps to the right and label them 1, 2, 3, and so on. Now every number has its own spot. This is a <b>number line</b>.</p>
<p>To compare two numbers, find them on the line. The one on the right is bigger. We write <span class="m">3 &lt; 7</span> and say "3 is less than 7." We write <span class="m">7 &gt; 3</span> and say "7 is greater than 3." The open side of the sign always faces the bigger number.</p>
<p>The <b>distance</b> between two numbers is how many steps apart they are. From 3 to 7 is 4 steps. From 7 back to 3 is also 4 steps. Distance never comes out negative.</p>`,
  formal: `<p>The whole numbers are <b>totally ordered</b>: for any <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>, exactly one of <span class="m"><i>a</i> &lt; <i>b</i></span>, <span class="m"><i>a</i> = <i>b</i></span>, <span class="m"><i>a</i> &gt; <i>b</i></span> holds (the <b>trichotomy law</b>). The order is <b>transitive</b>: if <span class="m"><i>a</i> &lt; <i>b</i></span> and <span class="m"><i>b</i> &lt; <i>c</i></span>, then <span class="m"><i>a</i> &lt; <i>c</i></span>.</p>
<div class="display"><span class="c2"><i>a</i></span> &lt; <span class="c3"><i>b</i></span> &nbsp;⇔&nbsp; <i>b</i> = <i>a</i> + <i>k</i> for some natural number <i>k</i> ≥ 1<br>distance(<i>a</i>, <i>b</i>) = <span class="c4">|<i>a</i> − <i>b</i>|</span> = (larger) − (smaller)</div>
<p>On the number line, <span class="m"><i>a</i> &lt; <i>b</i></span> means the point for <i>a</i> lies to the left of the point for <i>b</i>. The symbols <span class="m">≤</span> and <span class="m">≥</span> mean "less than or equal to" and "greater than or equal to." The <b>midpoint</b> of <i>a</i> and <i>b</i> is <span class="m">(<i>a</i> + <i>b</i>) ÷ 2</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First point", desc: "One of the two numbers being compared, marked on the line." },
    { c: "c3", sym: `<i>b</i>`, name: "Second point", desc: "The other number being compared." },
    { c: "c1", sym: `&lt; = &gt;`, name: "Comparison symbol", desc: "Shows which number is less, or that they are equal. The open side faces the larger number." },
    { c: "c4", sym: `|<i>a</i> − <i>b</i>|`, name: "Distance", desc: "How far apart the two points are. It is the larger number minus the smaller, so it is never negative." }
  ],
  steps: { title: "How to compare two whole numbers", items: [
    `Count the digits. A whole number with more digits is greater (with no leading zeros): <span class="m">1,002 &gt; 998</span>.`,
    `If they have the same number of digits, compare the leftmost digits.`,
    `If those match, move one place right and compare again. Keep going until two digits differ.`,
    `The number with the larger digit at the first difference is greater.`,
    `Write the symbol with its open side toward the greater number, or <span class="m">=</span> if every digit matched.`
  ] },
  example: {
    prompt: `On a straight highway, a gas station is at mile marker 11 and a rest stop is at mile marker 18. You are at mile 0. Which is farther from you, and how far apart are they?`,
    lines: [
      { math: `<span class="c2">18</span> and <span class="c3">11</span>`, note: "Both have two digits, so compare the tens digits: 1 and 1 are equal." },
      { math: `8 &gt; 1`, note: "Move to the ones digits. They differ here." },
      { math: `<span class="c2">18</span> <span class="c1">&gt;</span> <span class="c3">11</span>`, note: "So the rest stop is farther right on the line, and farther from mile 0." },
      { math: `<span class="c4">|18 − 11|</span> = 7`, note: "Distance is the larger minus the smaller." }
    ],
    answer: `The rest stop is farther, and the two are <span class="m c4">7</span> miles apart.`
  },
  why: `<p>Comparing numbers is how you pick the cheaper price, check that a reading is within a safe range, or see which team is ahead. The number line turns that into a picture: left is less, right is more, and the gap is the difference.</p>
<p>The number line is also the stage for most of the math that follows. Negative numbers sit to the left of 0, fractions and decimals fill the spaces between whole numbers, and in algebra, inequalities such as <span class="m"><i>x</i> &gt; 3</span> are drawn as rays on it. In calculus, the real line is where functions live.</p>`,
  careers: [
    { role: "Nurse", use: "Compares vital signs and lab values to reference ranges to decide whether a result is low, normal or high." },
    { role: "Quality control inspector", use: "Checks that part measurements fall between the minimum and maximum allowed by the specification." },
    { role: "Surveyor", use: "Uses stationing along a road centerline, where distances between points are found by subtracting station numbers." },
    { role: "Purchasing agent", use: "Compares supplier bids to choose the lowest acceptable price." },
    { role: "Air traffic controller", use: "Compares aircraft altitudes and distances to keep required separation between planes." }
  ],
  life: [
    "Choosing the lower price between two stores",
    "Reading a thermometer or a ruler",
    "Checking whether you are under a speed limit or weight limit",
    "Finding how many miles are left between two mile markers",
    "Putting items in order by size, date or price"
  ],
  fields: [
    { name: "Statistics", use: "Sorting data from smallest to largest is the first step in finding the median and range." },
    { name: "Physics", use: "Position along a line is measured as a coordinate, and displacement is the difference of two coordinates." },
    { name: "Computer science", use: "Sorting and searching algorithms rely on comparing values with less-than and greater-than." }
  ],
  prereqWhy: {
    "counting": "The number line lays out the counting numbers in order, so you need to know that order and that each number is one more than the last."
  },
  unlocksWhy: {
    "rounding": "Rounding means finding which of two nearby landmarks on the number line a number is closer to.",
    "integers": "Negative numbers extend the number line to the left of 0, and comparison and distance work the same way there."
  },
  beyond: [
    { field: "Algebra I", why: "Inequalities are solved and graphed on the number line." },
    { field: "Analytic geometry", why: "The coordinate plane is two number lines crossing at right angles." },
    { field: "Real analysis", why: "The real number line and its order and distance are the foundation of limits and continuity." }
  ],
  mistakes: [
    { wrong: `Thinking <span class="m">406 &gt; 460</span> because 6 is bigger than 0.`, fix: `Compare from the left. Hundreds match (4 and 4). Tens: 0 &lt; 6. So <span class="m">406 &lt; 460</span>.` },
    { wrong: `Reading <span class="m">3 &lt; 7</span> as "3 is greater than 7."`, fix: `The small, pointed end faces the smaller number. Read left to right: "3 is less than 7."` },
    { wrong: `Counting the tick marks instead of the spaces, so the distance from 3 to 7 comes out as 5.`, fix: `Distance counts the jumps between marks: 3→4→5→6→7 is 4 jumps, and <span class="m">7 − 3 = 4</span>.` }
  ],
  practice: [
    { q: `Write &lt;, &gt; or = between 406 and 460.`, a: `<b><span class="m">406 &lt; 460</span></b>. Tens digits: 0 &lt; 6.` },
    { q: `What is the distance between 38 and 91 on a number line?`, a: `<span class="m">91 − 38 = </span><b>53</b>.` },
    { q: `Order from smallest to largest: 1,209; 1,092; 1,290; 1,029.`, a: `<b>1,029 &lt; 1,092 &lt; 1,209 &lt; 1,290</b>. All start with 1 thousand, so compare hundreds (0, 0, 2, 2), then tens.` },
    { q: `What number is exactly halfway between 36 and 84?`, a: `<span class="m">(36 + 84) ÷ 2 = 120 ÷ 2 = </span><b>60</b>. Check: 60 − 36 = 24 and 84 − 60 = 24.` }
  ],
  origin: `John Wallis is generally credited with describing the number line in his <i>Treatise of Algebra</i> (1685). The symbols &lt; and &gt; first appeared in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631 after his death.`
};

/* ------------------------------------------------------------------ */
ARITH["rounding"] = {
  title: "Rounding & Estimation",
  short: "Swap a number for a nearby easy one.",
  grade: "Grades 3–4",
  hours: 3,
  voice: "young",
  eyebrow: "Number sense · approximation",
  hero: `<span class="m"><span class="c1">4,372</span> ≈ <span class="c3">4,400</span></span>`,
  lede: `To round, find the two landmark numbers on either side and pick the closer one. An estimate made from rounded numbers tells you roughly what answer to expect.`,
  plain: `<p>Sometimes you don't need an exact number. "About 4,400 people came to the game" is easier to say and remember than "4,372 people came." Rounding swaps a number for a nearby number that is easier to work with.</p>
<p>Picture 4,372 on a number line between two landmarks: 4,300 and 4,400. Halfway between them is 4,350. Our number, 4,372, is past the halfway mark, so it is closer to 4,400. We round up to 4,400.</p>
<p>What if a number lands exactly on the halfway mark, like 4,350? Schools use a simple rule: round up. So 4,350 rounds to 4,400.</p>
<p><b>Estimating</b> means rounding first and then doing the math with the easy numbers. It lets you check whether an exact answer is reasonable.</p>`,
  formal: `<p>To round a whole number <span class="m c1"><i>x</i></span> to the nearest multiple of <span class="m"><i>u</i></span> (where <span class="m"><i>u</i></span> = 10, 100, 1000, …), let <span class="m c2"><i>L</i></span> be the greatest multiple of <i>u</i> with <span class="m"><i>L</i> ≤ <i>x</i></span> and <span class="m c3"><i>U</i> = <i>L</i> + <i>u</i></span>. The <b>halfway point</b> is <span class="m c4"><i>L</i> + <i>u</i>/2</span>.</p>
<div class="display">round(<span class="c1"><i>x</i></span>) = <span class="c2"><i>L</i></span> &nbsp;if <span class="c1"><i>x</i></span> &lt; <span class="c4"><i>L</i> + <i>u</i>/2</span><br>round(<span class="c1"><i>x</i></span>) = <span class="c3"><i>U</i></span> &nbsp;if <span class="c1"><i>x</i></span> ≥ <span class="c4"><i>L</i> + <i>u</i>/2</span> <span class="dim">(round half up)</span></div>
<p>The digit one place to the right of the rounding place decides the result: 0–4 rounds down, 5–9 rounds up. Other tie-breaking rules exist. <b>Round half to even</b> (banker's rounding) sends ties to the even neighbour, so 4,350 → 4,400 but 4,250 → 4,200; it is the default in IEEE 754 floating-point arithmetic because it avoids an upward bias. The <b>rounding error</b> <span class="m">|round(<i>x</i>) − <i>x</i>|</span> is at most <span class="m"><i>u</i>/2</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "The number", desc: "The exact value you want to round." },
    { c: "c2", sym: `<i>L</i>`, name: "Lower landmark", desc: "The nearest multiple of 10, 100, 1000 and so on at or below x." },
    { c: "c3", sym: `<i>U</i>`, name: "Upper landmark", desc: "The next multiple above the lower landmark." },
    { c: "c4", sym: `<i>L</i> + <i>u</i>/2`, name: "Halfway mark", desc: "The point exactly between the two landmarks. At or past it, round up; before it, round down." }
  ],
  steps: { title: "How to round a whole number", items: [
    `Find the place you are rounding to and underline that digit.`,
    `Look at the digit just to its right. This is the deciding digit.`,
    `If the deciding digit is 0, 1, 2, 3 or 4, keep the underlined digit the same.`,
    `If it is 5, 6, 7, 8 or 9, add 1 to the underlined digit. If that makes 10, write 0 and carry 1 to the next place left.`,
    `Change every digit to the right of the underlined place to 0.`
  ] },
  example: {
    prompt: `A school has three fundraisers. They raised $387, $214 and $529. The principal wants a quick estimate to the nearest hundred dollars, then the exact total.`,
    lines: [
      { math: `<span class="c1">387</span> → <span class="c3">400</span>`, note: "Tens digit is 8, so round up." },
      { math: `<span class="c1">214</span> → <span class="c2">200</span>`, note: "Tens digit is 1, so round down." },
      { math: `<span class="c1">529</span> → <span class="c2">500</span>`, note: "Tens digit is 2, so round down." },
      { math: `400 + 200 + 500 = 1,100`, note: "Add the easy numbers to get the estimate." },
      { math: `387 + 214 + 529 = 1,130`, note: "The exact total." },
      { math: `1,130 − 1,100 = 30`, note: "The estimate is close, which tells us the exact answer is reasonable." }
    ],
    answer: `The estimate is about <span class="m">$1,100</span>; the exact total is <span class="m">$1,130</span>.`
  },
  why: `<p>People estimate all the time: whether the cash in your wallet covers a grocery cart, how long a drive will take, roughly how much paint a room needs. Rounding makes mental math fast, and an estimate catches big errors, such as a misplaced digit, before they cost you.</p>
<p>In science and engineering, every measurement has limited precision, and results are rounded to match. Later topics such as significant figures, scientific notation and error bounds in calculus all build on the idea that a rounded number stands for a range of true values.</p>`,
  careers: [
    { role: "Construction estimator", use: "Rounds material quantities and costs to prepare fast bids before detailed takeoffs are done." },
    { role: "Journalist", use: "Rounds large figures like budgets and crowd sizes so readers can grasp them, while keeping the rounding honest." },
    { role: "Pharmacist", use: "Applies specific rounding rules when converting calculated doses to amounts that can actually be measured or dispensed." },
    { role: "Software engineer", use: "Chooses rounding modes, such as round half to even, in financial code so totals don't drift over millions of transactions." },
    { role: "Restaurant server", use: "Estimates a 20% tip quickly by rounding the bill to a nearby easy number." }
  ],
  life: [
    "Keeping a running estimate of the grocery total while shopping",
    "Estimating travel time from distance and speed",
    "Checking whether a calculator answer looks about right",
    "Rounding a price like $19.99 to $20 when budgeting",
    "Guessing how many people will come to a party to plan food"
  ],
  fields: [
    { name: "Chemistry and physics", use: "Measured values are rounded to the correct number of significant figures." },
    { name: "Numerical computing", use: "Computers store most real numbers rounded, and analysts track how rounding error grows in a calculation." },
    { name: "Economics", use: "Official statistics are reported in rounded units, such as millions of dollars or tenths of a percent." }
  ],
  prereqWhy: {
    "place-value": "You must know which digit is in the tens, hundreds or thousands place to know where to round and which digit decides.",
    "number-line": "Rounding asks which of two landmarks on the number line a number is closer to."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Numerical analysis", why: "Studies how rounding errors arise and spread in computer calculations." },
    { field: "Statistics", why: "Reported results are rounded, and rounding decisions affect accuracy and fairness in summaries." },
    { field: "Calculus", why: "Approximations and error bounds, such as in linearization and Taylor polynomials, generalize estimation." }
  ],
  mistakes: [
    { wrong: `Rounding 4,351 to the nearest hundred by looking at the ones digit and getting 4,300.`, fix: `Look only at the digit right after the hundreds place, the tens digit 5. It is 5 or more, so round up: <span class="m">4,400</span>.` },
    { wrong: `Rounding 2,961 to the nearest hundred and writing <span class="m">2,1000</span>.`, fix: `The hundreds digit 9 becomes 10, so write 0 there and carry 1 to the thousands: <span class="m">3,000</span>.` },
    { wrong: `Rounding in steps: 347 → 350 → 400.`, fix: `Round once, from the original number. 347 to the nearest hundred looks at the tens digit 4, so it rounds to <span class="m">300</span>.` }
  ],
  practice: [
    { q: `Round 67 to the nearest ten.`, a: `The ones digit is 7, so round up: <b>70</b>.` },
    { q: `Round 4,351 to the nearest hundred.`, a: `The tens digit is 5, so round up: <b>4,400</b>.` },
    { q: `Round 2,450 to the nearest hundred using round half up. What does round half to even give?`, a: `2,450 is exactly halfway. Round half up gives <b>2,500</b>. Round half to even gives <b>2,400</b>, because 4 is even.` },
    { q: `Estimate 612 + 287 + 405 by rounding each to the nearest hundred. Then find the exact sum.`, a: `<span class="m">600 + 300 + 400 = </span><b>1,300</b>. The exact sum is <b>1,304</b>.` }
  ],
  origin: `The IEEE 754 standard for floating-point arithmetic, first published in 1985, made round-to-nearest with ties going to the even neighbour the default rounding mode in computers.`
};

/* ------------------------------------------------------------------ */
ARITH["addition"] = {
  title: "Addition",
  short: "Put groups together and count the total.",
  grade: "Grades K–3",
  hours: 6,
  voice: "young",
  eyebrow: "Operations · combining quantities",
  hero: `<span class="m"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span></span>`,
  lede: `Addition joins two amounts into one total, called the sum. Column addition does it one place at a time, carrying whenever a place reaches ten.`,
  plain: `<p>You have 3 apples. A friend gives you 4 more. Now you have 7. That is addition: <span class="m">3 + 4 = 7</span>. The numbers you add are called <b>addends</b>. The answer is the <b>sum</b>.</p>
<p>For big numbers, stack them so the places line up: ones under ones, tens under tens. Add the ones first. If the ones make 10 or more, you have a full ten. Write down the leftover ones and <b>carry</b> the ten to the tens column as a little 1. Then add the tens, and so on.</p>
<p>Order doesn't matter. <span class="m">3 + 4</span> and <span class="m">4 + 3</span> both make 7. Adding 0 changes nothing: <span class="m">8 + 0 = 8</span>.</p>`,
  formal: `<p><b>Addition</b> on the whole numbers can be defined from the successor function: <span class="m"><i>a</i> + 0 = <i>a</i></span> and <span class="m"><i>a</i> + <i>S</i>(<i>b</i>) = <i>S</i>(<i>a</i> + <i>b</i>)</span>. Equivalently, if disjoint sets <i>A</i> and <i>B</i> have <span class="m">|<i>A</i>| = <i>a</i></span> and <span class="m">|<i>B</i>| = <i>b</i></span>, then <span class="m">|<i>A</i> ∪ <i>B</i>| = <i>a</i> + <i>b</i></span>.</p>
<div class="display"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span> &nbsp;&nbsp;<span class="dim">(addend + addend = sum)</span><br><i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; (<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; <i>a</i> + 0 = <i>a</i></div>
<p>The column algorithm adds digits in each place <span class="m"><i>i</i></span>: if <span class="m"><i>a</i><sub><i>i</i></sub> + <i>b</i><sub><i>i</i></sub> + <i>c</i><sub><i>i</i></sub> ≥ 10</span> (where <span class="m"><i>c</i><sub><i>i</i></sub></span> is the incoming <b>carry</b>), write the sum minus 10 and pass a carry of 1 to place <span class="m"><i>i</i> + 1</span>. This works because <span class="m">10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First addend", desc: "One of the amounts being added." },
    { c: "c3", sym: `<i>b</i>`, name: "Second addend", desc: "The other amount being added." },
    { c: "c1", sym: `1`, name: "Carry", desc: "When a column adds to 10 or more, ten of that place are traded for 1 in the next place left." },
    { c: "c5", sym: `<i>s</i>`, name: "Sum", desc: "The total you get when the addends are combined." }
  ],
  steps: { title: "How to add with columns", items: [
    `Write the numbers one above the other with the ones digits lined up on the right.`,
    `Add the ones column.`,
    `If the column total is 10 or more, write the ones digit of that total and carry the 1 to the top of the next column left.`,
    `Add the next column, including any carry. Repeat the carry rule.`,
    `Keep going left. If the last column makes 10 or more, write the whole total.`,
    `Check: estimate by rounding, or add the numbers in the other order.`
  ] },
  example: {
    prompt: `On a road trip you drive 478 miles on Saturday and 356 miles on Sunday. How many miles did you drive in all?`,
    lines: [
      { math: `<span class="c2">478</span> + <span class="c3">356</span>`, note: "Line up the ones, tens and hundreds." },
      { math: `8 + 6 = 14 → write 4, carry <span class="c1">1</span>`, note: "Ones: 14 is one ten and four ones." },
      { math: `<span class="c1">1</span> + 7 + 5 = 13 → write 3, carry <span class="c1">1</span>`, note: "Tens: 13 tens is one hundred and three tens." },
      { math: `<span class="c1">1</span> + 4 + 3 = 8 → write 8`, note: "Hundreds: no carry needed." },
      { math: `<span class="c5">834</span>`, note: "Read the digits from the hundreds down." },
      { math: `500 + 400 = 900 &nbsp;<span class="dim">(estimate)</span>`, note: "Rounding each addend gives about 900, so 834 is reasonable." }
    ],
    answer: `You drove <span class="m c5">834</span> miles.`
  },
  why: `<p>Adding is the most used operation in daily life. Totaling a bill, adding up hours worked, combining ingredients and tracking a budget are all addition. Doing it reliably, by hand or in your head, keeps you from depending on a device for every small total.</p>
<p>Addition is also the base of the rest of arithmetic. Multiplication is repeated addition, subtraction undoes addition, and the carrying rule is the first algorithm most people learn. In algebra you combine like terms by adding, and in calculus an integral is a limit of sums.</p>`,
  careers: [
    { role: "Cashier", use: "Totals purchases and counts back change, often mentally when a register goes down." },
    { role: "Bookkeeper", use: "Adds up daily receipts and expenses and checks that column totals match across accounts." },
    { role: "Payroll specialist", use: "Adds regular hours, overtime hours and paid leave to find each employee's total paid hours." },
    { role: "Nurse", use: "Totals a patient's fluid intake from IV fluids, oral drinks and medications over a shift." },
    { role: "Carpenter", use: "Adds lengths of boards and trim pieces to find how much lumber a job needs." },
    { role: "Logistics coordinator", use: "Adds package weights to confirm a shipment stays under a truck's load limit." }
  ],
  life: [
    "Totaling the cost of groceries before checkout",
    "Adding up hours worked in a week",
    "Keeping score in a game",
    "Planning a budget from several monthly bills",
    "Finding total travel time across several legs of a trip"
  ],
  fields: [
    { name: "Accounting", use: "Every financial statement is built from sums of transactions." },
    { name: "Computer science", use: "Processors add binary numbers with a carry chain that works just like column addition." },
    { name: "Statistics", use: "Totals and sums are the first step in computing averages and other summaries." },
    { name: "Physics", use: "Combined masses, total distances and net forces along a line are found by adding." }
  ],
  prereqWhy: {
    "place-value": "Column addition lines up digits by place, and carrying is trading ten ones for one ten, ten tens for one hundred, and so on."
  },
  unlocksWhy: {
    "subtraction": "Subtraction is the inverse of addition, and every subtraction can be checked by adding the answer back.",
    "multiplication": "Multiplication starts as repeated addition of equal groups, and multi-digit multiplication ends by adding partial products."
  },
  beyond: [
    { field: "Algebra I", why: "Combining like terms and adding polynomials follow the same place-by-place pattern as column addition." },
    { field: "Calculus", why: "Series and integrals are built from sums of many terms." },
    { field: "Abstract algebra", why: "Groups and rings are defined by generalizing the properties of addition." }
  ],
  mistakes: [
    { wrong: `Lining up numbers on the left: adding 356 and 42 as if the 4 sat under the 3.`, fix: `Always line up the ones on the right. The 4 in 42 is 4 tens and goes under the 5.` },
    { wrong: `Writing 14 in the ones column instead of carrying: 478 + 356 becomes "71214".`, fix: `Each column holds one digit. Write the 4 and carry the 1 ten to the next column.` },
    { wrong: `Forgetting to add the carried 1, giving <span class="m">478 + 356 = 724</span>.`, fix: `Write the carry at the top of the next column and include it in that column's total.` }
  ],
  practice: [
    { q: `<span class="m">36 + 47</span>`, a: `Ones: 6 + 7 = 13, write 3, carry 1. Tens: 1 + 3 + 4 = 8. <b>83</b>.` },
    { q: `<span class="m">509 + 287</span>`, a: `Ones: 16, write 6, carry 1. Tens: 1 + 0 + 8 = 9. Hundreds: 5 + 2 = 7. <b>796</b>.` },
    { q: `<span class="m">2,748 + 1,396</span>`, a: `Ones 14 (carry 1), tens 1 + 4 + 9 = 14 (carry 1), hundreds 1 + 7 + 3 = 11 (carry 1), thousands 1 + 2 + 1 = 4. <b>4,144</b>.` },
    { q: `A food bank collects 1,875 cans in week one, 2,409 in week two and 638 in week three. How many cans in total?`, a: `<span class="m">1,875 + 2,409 = 4,284</span>; <span class="m">4,284 + 638 = </span><b>4,922</b> cans.` }
  ],
  origin: `The plus sign + and minus sign − first appeared in print in Johannes Widmann's arithmetic book for merchants, published in Leipzig in 1489.`
};

/* ------------------------------------------------------------------ */
ARITH["subtraction"] = {
  title: "Subtraction",
  short: "Take away, or find how far apart.",
  grade: "Grades K–3",
  hours: 6,
  voice: "young",
  eyebrow: "Operations · taking away and comparing",
  hero: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;⇔&nbsp; <span class="c5"><i>d</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span></span>`,
  lede: `Subtraction finds what is left when you take some away, or how much bigger one number is than another. It undoes addition.`,
  plain: `<p>You have 9 stickers and give away 4. You have 5 left: <span class="m">9 − 4 = 5</span>. The number you start with is the <b>minuend</b>. The number you take away is the <b>subtrahend</b>. The answer is the <b>difference</b>.</p>
<p>Subtraction answers two kinds of questions. "How many are left?" and "How many more?" If Sam has 9 stickers and Ana has 4, Sam has <span class="m">9 − 4 = 5</span> more.</p>
<p>For big numbers, line up the places and start with the ones. Sometimes the top digit is too small, like 3 − 8. Then you <b>borrow</b>, also called <b>regrouping</b>: take one ten from the tens column and break it into ten ones. Now you have 13 − 8, which is 5.</p>
<p>You can always check. Add your answer to the number you took away. You should get the number you started with.</p>`,
  formal: `<p>For whole numbers with <span class="m"><i>a</i> ≥ <i>b</i></span>, the <b>difference</b> <span class="m"><i>a</i> − <i>b</i></span> is the unique whole number <span class="m"><i>d</i></span> such that <span class="m"><i>d</i> + <i>b</i> = <i>a</i></span>. Subtraction is thus the <b>inverse operation</b> of addition.</p>
<div class="display"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;&nbsp;<span class="dim">(minuend − subtrahend = difference)</span><br><i>a</i> − <i>b</i> ≠ <i>b</i> − <i>a</i> in general &nbsp;·&nbsp; (<i>a</i> − <i>b</i>) − <i>c</i> ≠ <i>a</i> − (<i>b</i> − <i>c</i>) in general</div>
<p>Subtraction is neither commutative nor associative. Within the whole numbers, <span class="m"><i>a</i> − <i>b</i></span> is undefined when <span class="m"><i>a</i> &lt; <i>b</i></span>; extending to the integers ℤ removes that restriction. In the column algorithm, when <span class="m"><i>a</i><sub><i>i</i></sub> &lt; <i>b</i><sub><i>i</i></sub></span>, one unit of place <span class="m"><i>i</i> + 1</span> is exchanged for ten units of place <span class="m"><i>i</i></span> (<b>regrouping</b>), which leaves the value of the minuend unchanged.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Minuend", desc: "The starting amount, the number you subtract from." },
    { c: "c3", sym: `<i>b</i>`, name: "Subtrahend", desc: "The amount being taken away." },
    { c: "c1", sym: `10`, name: "Borrow / regroup", desc: "One unit from the next place left traded for ten units in the current place when the top digit is too small." },
    { c: "c5", sym: `<i>d</i>`, name: "Difference", desc: "What is left, or how much larger the minuend is than the subtrahend." }
  ],
  steps: { title: "How to subtract with regrouping", items: [
    `Write the larger number (minuend) on top and line up the ones digits.`,
    `Start with the ones column. If the top digit is at least the bottom digit, subtract.`,
    `If the top digit is smaller, borrow: take 1 from the next place left (make that digit one less) and add 10 to the current top digit.`,
    `If the next place left is 0, keep moving left to a nonzero digit, borrow from it, and turn each 0 you passed into 9.`,
    `Subtract each column, moving left.`,
    `Check by adding the difference and the subtrahend. You should get the minuend.`
  ] },
  example: {
    prompt: `A bakery made 603 bagels. By noon it had sold 248. How many bagels are left?`,
    lines: [
      { math: `<span class="c2">603</span> − <span class="c3">248</span>`, note: "Line up the places. Ones: 3 is less than 8, so we need to borrow." },
      { math: `6 0 3 → 5 <span class="c1">10</span> 3 → 5 9 <span class="c1">13</span>`, note: "The tens digit is 0, so borrow from the hundreds: 6 hundreds becomes 5, the tens become 10, then one ten moves to the ones, leaving 9 tens and 13 ones." },
      { math: `13 − 8 = 5`, note: "Ones column." },
      { math: `9 − 4 = 5`, note: "Tens column." },
      { math: `5 − 2 = 3`, note: "Hundreds column." },
      { math: `<span class="c5">355</span> + <span class="c3">248</span> = <span class="c2">603</span>`, note: "Check by adding back. It matches the minuend." }
    ],
    answer: `The bakery has <span class="m c5">355</span> bagels left.`
  },
  why: `<p>Subtraction tells you what is left and how far apart two amounts are: the change from a purchase, the money left in a budget, the time until an appointment, how much one price beats another. Comparing any two measurements usually means subtracting them.</p>
<p>Subtraction is also the first operation that can break out of the whole numbers. Asking for <span class="m">3 − 5</span> leads to negative numbers. In algebra, solving equations means undoing operations, and subtraction undoes addition. In calculus, the derivative starts from a difference, <span class="m"><i>f</i>(<i>x</i> + <i>h</i>) − <i>f</i>(<i>x</i>)</span>.</p>`,
  careers: [
    { role: "Cashier", use: "Figures change due by subtracting the price from the amount paid, often by counting up." },
    { role: "Pharmacist", use: "Subtracts dispensed quantities from stock counts, especially for controlled substances that require exact records." },
    { role: "Accountant", use: "Computes net income as revenue minus expenses and finds variances between budgeted and actual amounts." },
    { role: "Pilot", use: "Subtracts fuel burned from fuel on board to track remaining fuel against required reserves." },
    { role: "Machinist", use: "Subtracts a measured dimension from the target dimension to find how much more material to remove." },
    { role: "Meteorologist", use: "Subtracts the overnight low from the daytime high to report the daily temperature range." }
  ],
  life: [
    "Checking your change after paying cash",
    "Finding how much is left in your budget this month",
    "Working out how many minutes until the bus leaves",
    "Comparing two prices to see how much you save",
    "Figuring out someone's age from their birth year"
  ],
  fields: [
    { name: "Accounting", use: "Profit, balances and variances are all found by subtracting." },
    { name: "Physics", use: "Change in position, velocity or temperature is a final value minus an initial value." },
    { name: "Statistics", use: "The range of a data set is the maximum minus the minimum, and deviations from the mean are differences." }
  ],
  prereqWhy: {
    "addition": "Subtraction is defined as the inverse of addition, and addition facts are what you use to find and check differences."
  },
  unlocksWhy: {
    "division": "Long division repeatedly subtracts multiples of the divisor to find each digit of the quotient and the remainder.",
    "integers": "Subtracting a larger number from a smaller one requires negative numbers, which is how the integers are introduced."
  },
  beyond: [
    { field: "Algebra I", why: "Solving equations uses subtraction to undo addition on both sides." },
    { field: "Calculus", why: "Derivatives are limits of differences divided by small intervals." },
    { field: "Linear algebra", why: "Vector subtraction gives displacement and the distance between points." }
  ],
  mistakes: [
    { wrong: `Subtracting the smaller digit from the larger in every column, so <span class="m">52 − 17 = 45</span>.`, fix: `In the ones, 2 is less than 7, so borrow: 12 − 7 = 5, and the tens become 4 − 1 = 3. The answer is <span class="m">35</span>.` },
    { wrong: `Borrowing across a zero in 603 − 248 without reducing the hundreds, giving 455.`, fix: `Borrowing across 0 changes the hundreds from 6 to 5 and the tens 0 to 9. The answer is <span class="m">355</span>.` },
    { wrong: `Assuming <span class="m">10 − 3</span> and <span class="m">3 − 10</span> are the same.`, fix: `Subtraction is not commutative. <span class="m">10 − 3 = 7</span>, while <span class="m">3 − 10 = −7</span>, a negative number.` }
  ],
  practice: [
    { q: `<span class="m">82 − 37</span>`, a: `Borrow: 12 − 7 = 5, then 7 − 3 = 4. <b>45</b>. Check: 45 + 37 = 82.` },
    { q: `<span class="m">700 − 264</span>`, a: `Borrow across two zeros: 700 becomes 6 hundreds, 9 tens, 10 ones. 10 − 4 = 6, 9 − 6 = 3, 6 − 2 = 4. <b>436</b>.` },
    { q: `<span class="m">5,003 − 1,847</span>`, a: `Regroup: 5,003 = 4 thousands, 9 hundreds, 9 tens, 13 ones. 13 − 7 = 6, 9 − 4 = 5, 9 − 8 = 1, 4 − 1 = 3. <b>3,156</b>. Check: 3,156 + 1,847 = 5,003.` },
    { q: `A club wants to raise $3,000. It has $1,762 so far. How much more does it need?`, a: `<span class="m">3,000 − 1,762 = </span><b>$1,238</b>. Check: 1,238 + 1,762 = 3,000.` }
  ],
  origin: `The minus sign − appeared in print alongside the plus sign in Johannes Widmann's 1489 commercial arithmetic. Widmann used them to mark surpluses and shortages in quantities of goods, not yet as general operation signs.`
};

/* ------------------------------------------------------------------ */
ARITH["multiplication"] = {
  title: "Multiplication",
  short: "Equal groups, counted fast.",
  grade: "Grades 2–5",
  hours: 12,
  voice: "young",
  eyebrow: "Operations · equal groups and area",
  hero: `<span class="m"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span></span>`,
  lede: `Multiplication counts equal groups: a groups of b. A rectangle a wide and b tall covers a × b unit squares.`,
  plain: `<p>You have 4 bags with 6 marbles in each. You could add <span class="m">6 + 6 + 6 + 6 = 24</span>. Multiplication is the fast way: <span class="m">4 × 6 = 24</span>. The numbers you multiply are <b>factors</b>. The answer is the <b>product</b>.</p>
<p>You can also picture a rectangle of dots with 4 rows and 6 columns. Count them and you get 24. Turn the rectangle sideways and it has 6 rows of 4. Still 24. So <span class="m">4 × 6 = 6 × 4</span>.</p>
<p>For bigger numbers, break them into tens and ones. To find <span class="m">23 × 47</span>, split the rectangle into four smaller boxes: 20 × 40, 20 × 7, 3 × 40 and 3 × 7. These are the <b>partial products</b>. Add them up and you have the answer.</p>
<p>Knowing the facts up to <span class="m">10 × 10</span> by heart makes all of this much faster.</p>`,
  formal: `<p><b>Multiplication</b> on the whole numbers can be defined recursively by <span class="m"><i>a</i> × 0 = 0</span> and <span class="m"><i>a</i> × (<i>b</i> + 1) = <i>a</i> × <i>b</i> + <i>a</i></span>. For sets, <span class="m"><i>a</i> × <i>b</i> = |<i>A</i> × <i>B</i>|</span>, the number of ordered pairs from sets of sizes <i>a</i> and <i>b</i>.</p>
<div class="display"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span> &nbsp;&nbsp;<span class="dim">(factor × factor = product)</span><br>(10<i>a</i><sub>1</sub> + <i>a</i><sub>0</sub>)(10<i>b</i><sub>1</sub> + <i>b</i><sub>0</sub>) = <span class="c1">100<i>a</i><sub>1</sub><i>b</i><sub>1</sub> + 10<i>a</i><sub>1</sub><i>b</i><sub>0</sub> + 10<i>a</i><sub>0</sub><i>b</i><sub>1</sub> + <i>a</i><sub>0</sub><i>b</i><sub>0</sub></span></div>
<p>The standard and area-model algorithms rest on the <b>distributive property</b> <span class="m"><i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i></span>. Multiplication is commutative and associative, has identity 1 (<span class="m"><i>a</i> × 1 = <i>a</i></span>), and satisfies the <b>zero property</b> <span class="m"><i>a</i> × 0 = 0</span>. Notation: <span class="m"><i>a</i> × <i>b</i></span>, <span class="m"><i>a</i> · <i>b</i></span>, or <span class="m"><i>ab</i></span> in algebra.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First factor", desc: "The number of groups, or the width of the rectangle." },
    { c: "c3", sym: `<i>b</i>`, name: "Second factor", desc: "The size of each group, or the height of the rectangle." },
    { c: "c1", sym: `20 × 40`, name: "Partial products", desc: "Products of the place-value parts of each factor. Each is one box of the area model." },
    { c: "c5", sym: `<i>p</i>`, name: "Product", desc: "The total: the sum of all the partial products." }
  ],
  steps: { title: "How to multiply two-digit numbers with an area model", items: [
    `Split each factor into tens and ones, for example <span class="m">23 = 20 + 3</span> and <span class="m">47 = 40 + 7</span>.`,
    `Draw a rectangle and divide it into a grid: one column per part of the first factor, one row per part of the second.`,
    `Multiply to fill each box. Use a basic fact and then attach zeros: <span class="m">20 × 40 = 2 × 4 × 100 = 800</span>.`,
    `Add all the partial products.`,
    `Check by estimating: round each factor and multiply.`
  ] },
  example: {
    prompt: `A concert hall has 23 rows with 47 seats in each row. How many seats are there?`,
    lines: [
      { math: `<span class="c2">23</span> × <span class="c3">47</span> = (20 + 3) × (40 + 7)`, note: "Split each factor by place value." },
      { math: `20 × 40 = <span class="c1">800</span>`, note: "Tens times tens." },
      { math: `20 × 7 = <span class="c1">140</span>`, note: "Tens times ones." },
      { math: `3 × 40 = <span class="c1">120</span>`, note: "Ones times tens." },
      { math: `3 × 7 = <span class="c1">21</span>`, note: "Ones times ones." },
      { math: `800 + 140 + 120 + 21 = <span class="c5">1,081</span>`, note: "Add the four partial products." },
      { math: `20 × 50 = 1,000 &nbsp;<span class="dim">(estimate)</span>`, note: "Rounded factors give about 1,000, so 1,081 is reasonable." }
    ],
    answer: `The hall has <span class="m c5">1,081</span> seats.`
  },
  why: `<p>Multiplication shows up whenever you have many copies of the same amount: the cost of 12 items at the same price, pay for 40 hours at an hourly rate, the area of a floor, the number of tiles for a wall. It turns long repeated additions into one step.</p>
<p>It is also the gateway to most of higher math. Division, fractions, ratios, percents and exponents are all defined through multiplication. Areas and volumes are products. In algebra, factoring and expanding expressions use the same distributive idea as the area model.</p>`,
  careers: [
    { role: "Nurse", use: "Multiplies a dose in mg per kg by a patient's weight in kg to find the total dose ordered." },
    { role: "Electrician", use: "Multiplies current by voltage to find the power a circuit draws in watts." },
    { role: "Flooring installer", use: "Multiplies room length by width to find square footage and order enough material." },
    { role: "Payroll specialist", use: "Multiplies hours worked by hourly rate, and overtime hours by 1.5 times the rate." },
    { role: "Chef", use: "Multiplies each ingredient amount in a recipe by a scale factor to cook for more guests." },
    { role: "Retail buyer", use: "Multiplies unit cost by order quantity to price a purchase order." }
  ],
  life: [
    "Finding the cost of several items with the same price",
    "Figuring weekly pay from an hourly wage",
    "Doubling or tripling a recipe",
    "Working out the area of a room for paint or carpet",
    "Counting items packed in rows and columns, like eggs in a carton"
  ],
  fields: [
    { name: "Geometry", use: "Areas of rectangles and volumes of boxes are products of lengths." },
    { name: "Physics", use: "Many laws are products, such as distance = rate × time and force = mass × acceleration." },
    { name: "Economics", use: "Revenue is price times quantity sold." },
    { name: "Computer science", use: "Counting the steps in nested loops and the size of a grid of data uses multiplication." }
  ],
  prereqWhy: {
    "addition": "Multiplication begins as repeated addition, and every multi-digit method finishes by adding partial products."
  },
  unlocksWhy: {
    "division": "Division asks how many times the divisor fits into the dividend, and each step of long division uses a multiplication fact.",
    "properties": "The commutative, associative and distributive laws describe how multiplication behaves and why the algorithms work.",
    "exponents": "An exponent is a count of repeated multiplications of the same base.",
    "decimal-ops": "Multiplying decimals is whole-number multiplication followed by placing the decimal point."
  },
  beyond: [
    { field: "Algebra I", why: "Expanding and factoring polynomials uses the same distributive pattern as the area model." },
    { field: "Linear algebra", why: "Matrix multiplication is built from many products and sums of numbers." },
    { field: "Number theory", why: "Primes, factors and divisibility are all questions about how numbers multiply." }
  ],
  mistakes: [
    { wrong: `Multiplying only tens by tens and ones by ones: <span class="m">23 × 47 = 800 + 21 = 821</span>.`, fix: `Every part of one factor multiplies every part of the other. There are four partial products, and the answer is <span class="m">1,081</span>.` },
    { wrong: `Thinking <span class="m">20 × 40 = 80</span>.`, fix: `<span class="m">20 × 40 = 2 × 4 × 10 × 10 = 800</span>. Both zeros count.` },
    { wrong: `Believing <span class="m">7 × 0 = 7</span>.`, fix: `Seven groups of zero is zero: <span class="m">7 × 0 = 0</span>. Multiplying by 1 leaves a number unchanged.` }
  ],
  practice: [
    { q: `<span class="m">7 × 8</span>`, a: `<b>56</b>.` },
    { q: `<span class="m">36 × 5</span>`, a: `<span class="m">30 × 5 + 6 × 5 = 150 + 30 = </span><b>180</b>.` },
    { q: `<span class="m">48 × 25</span>`, a: `<span class="m">40 × 20 + 40 × 5 + 8 × 20 + 8 × 5 = 800 + 200 + 160 + 40 = </span><b>1,200</b>.` },
    { q: `A school orders 124 boxes of pencils with 37 pencils in each box. How many pencils is that?`, a: `<span class="m">124 × 37 = 124 × 30 + 124 × 7 = 3,720 + 868 = </span><b>4,588</b> pencils.` }
  ],
  origin: `William Oughtred introduced the × sign in his <i>Clavis Mathematicae</i> (1631). Gottfried Leibniz favoured a raised dot for multiplication, in part to avoid confusion with the letter x. Multiplication tables appear on Babylonian clay tablets from about 4,000 years ago.`
};

/* ------------------------------------------------------------------ */
ARITH["division"] = {
  title: "Division",
  short: "Share equally, or count how many fit.",
  grade: "Grades 3–5",
  hours: 12,
  voice: "young",
  eyebrow: "Operations · equal sharing and the division algorithm",
  hero: `<span class="m"><span class="c2"><i>a</i></span> = <span class="c3"><i>b</i></span> · <span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp; 0 ≤ <span class="c4"><i>r</i></span> &lt; <span class="c3"><i>b</i></span></span>`,
  lede: `Dividing a by b finds how many whole groups of b fit into a (the quotient q) and what is left over (the remainder r), which is always smaller than b.`,
  plain: `<p>You have 12 cookies and 3 friends. If everyone gets the same amount, each friend gets 4: <span class="m">12 ÷ 3 = 4</span>. That is division. The number being split up is the <b>dividend</b>. The number you divide by is the <b>divisor</b>. The answer is the <b>quotient</b>.</p>
<p>Division answers two kinds of questions. "If I share 12 among 3, how many does each get?" And "How many groups of 3 can I make from 12?" Both give 4.</p>
<p>Sometimes things don't split evenly. Share 14 cookies among 3 friends: each gets 4, and 2 are left over. The 2 is the <b>remainder</b>. The remainder is always smaller than the divisor. If it weren't, you could give everyone one more.</p>
<p>Division undoes multiplication. Since <span class="m">3 × 4 = 12</span>, you know <span class="m">12 ÷ 3 = 4</span>.</p>`,
  formal: `<p><b>Division algorithm.</b> For any integers <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> with <span class="m"><i>b</i> &gt; 0</span>, there exist unique integers <span class="m c1"><i>q</i></span> (the <b>quotient</b>) and <span class="m c4"><i>r</i></span> (the <b>remainder</b>) such that</p>
<div class="display"><span class="c2"><i>a</i></span> = <span class="c3"><i>b</i></span><span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp;&nbsp; 0 ≤ <span class="c4"><i>r</i></span> &lt; <span class="c3"><i>b</i></span><br><span class="dim">dividend = divisor × quotient + remainder</span></div>
<p>When <span class="m"><i>r</i> = 0</span>, <span class="m"><i>b</i></span> <b>divides</b> <span class="m"><i>a</i></span>, written <span class="m"><i>b</i> | <i>a</i></span>, and <span class="m"><i>a</i> ÷ <i>b</i> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <i>q</i></span> is the unique number with <span class="m"><i>b</i> × <i>q</i> = <i>a</i></span>. <b>Division by zero is undefined</b>: <span class="m"><i>a</i> ÷ 0</span> would need a number <span class="m"><i>q</i></span> with <span class="m">0 × <i>q</i> = <i>a</i></span>, which is impossible for <span class="m"><i>a</i> ≠ 0</span> and not unique for <span class="m"><i>a</i> = 0</span>. Division is neither commutative nor associative.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Dividend", desc: "The amount being divided up." },
    { c: "c3", sym: `<i>b</i>`, name: "Divisor", desc: "The size of each group, or the number of equal shares. It cannot be 0." },
    { c: "c1", sym: `<i>q</i>`, name: "Quotient", desc: "How many whole groups fit, or how much each share gets." },
    { c: "c4", sym: `<i>r</i>`, name: "Remainder", desc: "What is left after taking out as many whole groups as possible. It is at least 0 and less than the divisor." }
  ],
  steps: { title: "How to do long division", items: [
    `Write the dividend under the division bracket and the divisor to its left.`,
    `Divide: take the fewest leading digits of the dividend that are at least the divisor, and find the largest digit whose product with the divisor fits. Write it above.`,
    `Multiply that digit by the divisor and write the product underneath.`,
    `Subtract. The result must be less than the divisor; if not, your digit was too small.`,
    `Bring down the next digit of the dividend and repeat divide, multiply, subtract.`,
    `When no digits are left, the number on top is the quotient and the last difference is the remainder.`,
    `Check: divisor × quotient + remainder should equal the dividend.`
  ] },
  example: {
    prompt: `A farm collects 347 eggs and packs them in cartons of 12. How many full cartons can it fill, and how many eggs are left over?`,
    lines: [
      { math: `<span class="c2">347</span> ÷ <span class="c3">12</span>`, note: "12 does not fit into 3, so start with the first two digits, 34." },
      { math: `34 ÷ 12 → <span class="c1">2</span>, &nbsp;2 × 12 = 24, &nbsp;34 − 24 = 10`, note: "12 fits into 34 twice. Write 2 above the 4." },
      { math: `bring down 7 → 107`, note: "Put the next digit beside the 10." },
      { math: `107 ÷ 12 → <span class="c1">8</span>, &nbsp;8 × 12 = 96, &nbsp;107 − 96 = <span class="c4">11</span>`, note: "12 fits into 107 eight times (9 × 12 = 108 is too big)." },
      { math: `<span class="c1"><i>q</i> = 28</span>, &nbsp;<span class="c4"><i>r</i> = 11</span>`, note: "No digits left. 11 is less than 12, so it is a valid remainder." },
      { math: `<span class="c3">12</span> × <span class="c1">28</span> + <span class="c4">11</span> = 336 + 11 = <span class="c2">347</span>`, note: "Check with the division algorithm." }
    ],
    answer: `The farm fills <span class="m c1">28</span> full cartons with <span class="m c4">11</span> eggs left over.`
  },
  why: `<p>Division splits things fairly and finds rates. You use it to split a bill among friends, find a price per ounce, work out miles per gallon, or figure out how many buses a group needs. The remainder often matters as much as the quotient: 11 leftover eggs, or one more bus for the last few riders.</p>
<p>Division opens the door to fractions, decimals, ratios and percents, which are all ways of writing a quotient. The division algorithm <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span> is the starting point of number theory, clock arithmetic and the Euclidean algorithm, and long division of polynomials in algebra follows the same steps.</p>`,
  careers: [
    { role: "Nurse", use: "Divides the dose ordered by the concentration on hand, such as 250 mg ordered from a 125 mg per 5 mL liquid, to find the volume to give." },
    { role: "Event planner", use: "Divides the guest count by table size and rounds up to find how many tables to rent." },
    { role: "Truck driver", use: "Divides miles driven by gallons used to track fuel economy and plan fuel stops." },
    { role: "Grocery store manager", use: "Divides package price by weight to set the unit price shown on shelf labels." },
    { role: "Software developer", use: "Uses integer division and the remainder (modulo) operator to split data into pages or batches." },
    { role: "Pharmacist", use: "Divides the total quantity dispensed by the daily dose to find how many days a prescription will last." }
  ],
  life: [
    "Splitting a restaurant bill evenly among friends",
    "Finding the price per ounce to compare two package sizes",
    "Working out how many cars or buses a group needs",
    "Figuring monthly payments from a yearly cost",
    "Sharing snacks or supplies equally"
  ],
  fields: [
    { name: "Number theory", use: "The division algorithm is the basis for divisibility, primes, greatest common divisors and modular arithmetic." },
    { name: "Computer science", use: "Integer division and the modulo operation are used in hashing, indexing and cryptography." },
    { name: "Chemistry", use: "Concentration is amount of substance divided by volume, and molar mass calculations divide mass by moles." },
    { name: "Economics", use: "Per-capita figures and unit costs are found by dividing totals." }
  ],
  prereqWhy: {
    "multiplication": "Each step of long division asks which multiple of the divisor fits, so multiplication facts must be quick and reliable.",
    "subtraction": "Long division subtracts each multiple of the divisor from part of the dividend to find what remains."
  },
  unlocksWhy: {
    "order-ops": "Order of operations treats multiplication and division as one level, done left to right, so you must be able to divide within expressions.",
    "factors": "A factor of n is a number that divides n with remainder 0, so testing factors is testing divisions.",
    "modular": "Clock arithmetic works entirely with the remainder r from the division algorithm.",
    "fractions": "A fraction a/b is the quotient a ÷ b, and simplifying fractions uses exact division.",
    "averages": "The mean is a total divided by the number of values."
  },
  beyond: [
    { field: "Number theory", why: "The division algorithm leads to the Euclidean algorithm, congruences and the Fundamental Theorem of Arithmetic." },
    { field: "Algebra I and II", why: "Polynomial long division and synthetic division follow the same divide, multiply, subtract, bring down pattern." },
    { field: "Abstract algebra", why: "Rings with a division algorithm, called Euclidean domains, generalize this property of the integers." }
  ],
  mistakes: [
    { wrong: `Leaving a remainder larger than the divisor, like <span class="m">347 ÷ 12 = 27</span> R 23.`, fix: `If the remainder is 12 or more, another 12 fits. Increase the quotient: <span class="m">28</span> R <span class="m">11</span>.` },
    { wrong: `Skipping a zero in the quotient: <span class="m">1,236 ÷ 12 = 13</span>.`, fix: `After 12 ÷ 12 = 1, bring down 3. 12 does not fit into 3, so write 0 above it before bringing down 6. The answer is <span class="m">103</span>.` },
    { wrong: `Saying <span class="m">5 ÷ 0 = 0</span> or <span class="m">5 ÷ 0 = 5</span>.`, fix: `Division by zero is undefined. No number times 0 gives 5.` },
    { wrong: `Rounding down when every item needs a place: 500 people, vans of 12, so 41 vans.`, fix: `41 vans hold 492 people and leave 8 behind. Context says round the quotient up: 42 vans.` }
  ],
  practice: [
    { q: `<span class="m">56 ÷ 7</span>`, a: `<span class="m">7 × 8 = 56</span>, so <b>8</b>.` },
    { q: `<span class="m">97 ÷ 4</span>. Give the quotient and remainder.`, a: `<span class="m">4 × 24 = 96</span>, <span class="m">97 − 96 = 1</span>. <b>24 R 1</b>. Check: 4 × 24 + 1 = 97.` },
    { q: `<span class="m">1,008 ÷ 12</span>`, a: `100 ÷ 12 → 8, 8 × 12 = 96, 100 − 96 = 4; bring down 8 → 48; 48 ÷ 12 = 4. <b>84</b>. Check: 12 × 84 = 1,008.` },
    { q: `500 people are going on a trip. Each van holds 12 people. How many vans are needed?`, a: `<span class="m">500 = 12 × 41 + 8</span>. 41 vans leave 8 people, so <b>42 vans</b> are needed.` }
  ],
  origin: `Book VII of Euclid's <i>Elements</i> (about 300 BCE) uses repeated subtraction of the smaller number from the larger, the idea behind the division algorithm. The ÷ symbol (obelus) was first used for division by Johann Rahn in his <i>Teutsche Algebra</i> (1659).`
};

/* ------------------------------------------------------------------ */
ARITH["properties"] = {
  title: "Laws of Arithmetic",
  short: "The rules that let you rearrange and regroup.",
  grade: "Grades 3–7",
  hours: 5,
  voice: "mixed",
  eyebrow: "Structure · commutative, associative, distributive",
  hero: `<span class="m"><span class="c2"><i>a</i></span>(<span class="c3"><i>b</i></span> + <span class="c4"><i>c</i></span>) = <span class="c2"><i>a</i></span><span class="c3"><i>b</i></span> + <span class="c2"><i>a</i></span><span class="c4"><i>c</i></span></span>`,
  lede: `A few laws hold for every number: you can swap the order of addends or factors, regroup them, and split a product over a sum. Mental math and all of algebra rely on them.`,
  plain: `<p>Some rules work no matter which numbers you pick. They are called the <b>laws</b> or <b>properties</b> of arithmetic. You already use them without naming them.</p>
<p><b>Commutative</b>: order doesn't matter for adding or multiplying. <span class="m">3 + 5 = 5 + 3</span>, and a 3-by-5 array turned on its side is a 5-by-3 array with the same 15 dots. <b>Associative</b>: grouping doesn't matter either. <span class="m">(2 + 7) + 3 = 2 + (7 + 3)</span>, and grouping the 7 and 3 first makes an easy 10.</p>
<p><b>Distributive</b>: multiplying a sum is the same as multiplying each part and adding. A rectangle 6 wide and <span class="m">10 + 4</span> tall splits into a 6 × 10 piece and a 6 × 4 piece. So <span class="m">6 × 14 = 60 + 24 = 84</span>.</p>
<p><b>Identity</b>: adding 0 or multiplying by 1 leaves a number alone. <b>Inverse</b>: every number has a partner that brings you back to the identity. Adding 5 is undone by adding −5. Multiplying by 5 is undone by multiplying by 1/5. Subtraction and division do not follow the commutative or associative laws.</p>`,
  formal: `<p>For all numbers <span class="m c2"><i>a</i></span>, <span class="m c3"><i>b</i></span>, <span class="m c4"><i>c</i></span> (whole numbers, integers, rationals or reals):</p>
<div class="display">Commutative: &nbsp;<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; <i>ab</i> = <i>ba</i><br>Associative: &nbsp;(<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; (<i>ab</i>)<i>c</i> = <i>a</i>(<i>bc</i>)<br>Distributive: &nbsp;<i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i><br>Identity: &nbsp;<i>a</i> + 0 = <i>a</i> &nbsp;·&nbsp; <i>a</i> · 1 = <i>a</i><br>Inverse: &nbsp;<i>a</i> + (−<i>a</i>) = 0 &nbsp;·&nbsp; <i>a</i> · <span class="fr"><span>1</span><span><i>a</i></span></span> = 1 for <i>a</i> ≠ 0</div>
<p>The additive inverse <span class="m">−<i>a</i></span> exists only once the integers ℤ are available, and the multiplicative inverse (<b>reciprocal</b>) <span class="m">1/<i>a</i></span> only in the rationals ℚ or reals ℝ; 0 has no reciprocal. A set with two operations obeying all of these laws is called a <b>field</b>; ℚ and ℝ are fields, while ℤ lacks multiplicative inverses and the whole numbers lack both kinds of inverse. The <b>zero property</b> <span class="m"><i>a</i> · 0 = 0</span> follows from the distributive, identity and additive inverse laws.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First number", desc: "In the distributive law, the multiplier applied to each part of the sum." },
    { c: "c3", sym: `<i>b</i>`, name: "Second number", desc: "The first part of the sum, or the second term being swapped or regrouped." },
    { c: "c4", sym: `<i>c</i>`, name: "Third number", desc: "The second part of the sum, or the third term in a regrouping." }
  ],
  steps: { title: "How to use the laws for mental math", items: [
    `Look for pairs that make friendly numbers, like 25 and 4 (100), or 7 and 3 (10).`,
    `Use the commutative law to move those numbers next to each other.`,
    `Use the associative law to group the friendly pair first.`,
    `For a product with an awkward factor like 98 or 14, write it as a sum or difference of easy numbers: <span class="m">98 = 100 − 2</span>.`,
    `Use the distributive law to multiply each part, then combine.`
  ] },
  example: {
    prompt: `Concert tickets cost $49 each. You buy 8 for a group. Work out the total in your head.`,
    lines: [
      { math: `<span class="c2">8</span> × 49 = <span class="c2">8</span> × (<span class="c3">50</span> − <span class="c4">1</span>)`, note: "Rewrite 49 as a friendly number minus a small one." },
      { math: `= <span class="c2">8</span> × <span class="c3">50</span> − <span class="c2">8</span> × <span class="c4">1</span>`, note: "Distributive law (it works over subtraction too)." },
      { math: `= 400 − 8`, note: "Each product is easy." },
      { math: `= 392`, note: "Subtract." },
      { math: `8 × 49 = 392 <span class="dim">(column check)</span>`, note: "Standard multiplication gives the same result." }
    ],
    answer: `The 8 tickets cost <span class="m">$392</span>.`
  },
  why: `<p>These laws are why mental math works. Rearranging a grocery list total to pair up round numbers, or pricing 6 items at $99 as $600 − $6, uses them directly. They also explain why the column algorithms for addition and multiplication give correct answers.</p>
<p>Algebra is mostly these laws applied to letters. Combining like terms, expanding <span class="m">3(<i>x</i> + 4)</span>, factoring and solving equations are all uses of the commutative, associative, distributive, identity and inverse laws. Higher algebra studies which systems obey which laws: matrices, for instance, are not commutative under multiplication.</p>`,
  careers: [
    { role: "Retail cashier", use: "Rearranges and regroups prices mentally to total a small order quickly when a register is down." },
    { role: "Software engineer", use: "Relies on associativity to split a sum across many processors and combine the partial results in any grouping." },
    { role: "Compiler engineer", use: "Writes optimizations that reorder or factor arithmetic using the commutative and distributive laws, while guarding cases where floating-point rounding breaks them." },
    { role: "Accountant", use: "Applies a tax or discount rate to a subtotal instead of to each line, which is the distributive law." },
    { role: "Actuary", use: "Simplifies long premium and reserve formulas by factoring out common rates." }
  ],
  life: [
    "Adding a list of prices in whatever order is easiest",
    "Finding the cost of 6 items at $99 as 600 − 6",
    "Figuring a 20% tip on the whole bill instead of each item",
    "Doubling a recipe by doubling each ingredient",
    "Grouping coins into dollars before counting the rest"
  ],
  fields: [
    { name: "Algebra", use: "Every simplification and equation-solving step is justified by one of these laws." },
    { name: "Computer science", use: "Parallel algorithms and compilers use associativity and commutativity to reorder calculations safely." },
    { name: "Physics", use: "Vector addition is commutative and associative, which lets forces be added in any order." }
  ],
  prereqWhy: {
    "multiplication": "Three of the laws concern multiplication, and the distributive law links multiplication to addition, so you need fluent products."
  },
  unlocksWhy: {
    "order-ops": "The distributive law explains why parentheses matter, and the associative and commutative laws explain which rearrangements are safe.",
    "exponents": "The rules for exponents, such as multiplying powers with the same base, are proved using the associative and commutative laws."
  },
  beyond: [
    { field: "Algebra I", why: "Expanding, factoring and solving equations are direct applications of these laws." },
    { field: "Abstract algebra", why: "Groups, rings and fields are defined by lists of exactly these properties." },
    { field: "Linear algebra", why: "Vector spaces are defined by these laws, and matrix multiplication shows what happens when commutativity fails." }
  ],
  mistakes: [
    { wrong: `Distributing to only the first term: <span class="m">6(10 + 4) = 60 + 4</span>.`, fix: `Multiply every term inside: <span class="m">6(10 + 4) = 60 + 24 = 84</span>.` },
    { wrong: `Assuming subtraction is associative: <span class="m">(10 − 4) − 3 = 10 − (4 − 3)</span>.`, fix: `The left side is 3 and the right side is 9. Subtraction and division are neither commutative nor associative.` },
    { wrong: `Distributing multiplication over multiplication: <span class="m">2 × (3 × 5) = (2 × 3) × (2 × 5)</span>.`, fix: `Multiplication distributes over addition only. <span class="m">2 × (3 × 5) = 30</span>, while the right side is 60.` }
  ],
  practice: [
    { q: `Which law says <span class="m">5 + (3 + 9) = (5 + 3) + 9</span>?`, a: `The <b>associative law of addition</b>. Only the grouping changed.` },
    { q: `Use the distributive law to find <span class="m">6 × 14</span>.`, a: `<span class="m">6 × (10 + 4) = 60 + 24 = </span><b>84</b>.` },
    { q: `Find <span class="m">25 × 17 × 4</span> in your head.`, a: `Commute and regroup: <span class="m">(25 × 4) × 17 = 100 × 17 = </span><b>1,700</b>.` },
    { q: `Find <span class="m">8 × 97</span> using the distributive law.`, a: `<span class="m">8 × (100 − 3) = 800 − 24 = </span><b>776</b>.` }
  ],
  origin: `François-Joseph Servois introduced the terms "commutative" and "distributive" in 1814. William Rowan Hamilton introduced "associative" in the 1840s, while working with quaternions, a number system whose multiplication is not commutative.`
};

/* ------------------------------------------------------------------ */
ARITH["order-ops"] = {
  title: "Order of Operations",
  short: "One expression, one correct value.",
  grade: "Grades 5–6",
  hours: 4,
  voice: "mixed",
  eyebrow: "Structure · reading expressions correctly",
  hero: `<span class="m">3 + <span class="c1">4 × 2</span> = <span class="c5">11</span></span>`,
  lede: `When an expression mixes operations, everyone must agree on which to do first. The convention: grouping, then exponents, then multiplication and division left to right, then addition and subtraction left to right.`,
  plain: `<p>What is <span class="m">3 + 4 × 2</span>? If you go left to right, you get 14. If you multiply first, you get 11. Both can't be right, so mathematicians agreed on a rule. Multiply first. The answer is 11.</p>
<p>The full order is: first anything in <b>parentheses</b> or other grouping. Then <b>exponents</b> (powers, which you will meet soon). Then <b>multiplication and division</b>, working left to right. Last, <b>addition and subtraction</b>, left to right.</p>
<p>Many people remember this as PEMDAS or BODMAS. Be careful with the letters. M and D are one step, done in the order they appear. So are A and S. <span class="m">12 ÷ 3 × 2</span> is 8, because you divide first when division comes first.</p>
<p>If you want a different order, add parentheses. <span class="m">(3 + 4) × 2 = 14</span>.</p>`,
  formal: `<p>The standard <b>precedence</b> convention evaluates an expression in levels, from highest to lowest:</p>
<div class="display">1. Grouping symbols: ( ), [ ], { }, fraction bars, radicals, absolute value<br>2. Exponents (evaluated right to left: 2<sup>3<sup>2</sup></sup> = 2<sup>9</sup>)<br>3. Multiplication and division, left to right<br>4. Addition and subtraction, left to right</div>
<p>Within a level, operations are <b>left-associative</b>: <span class="m"><i>a</i> − <i>b</i> + <i>c</i> = (<i>a</i> − <i>b</i>) + <i>c</i></span> and <span class="m"><i>a</i> ÷ <i>b</i> × <i>c</i> = (<i>a</i> ÷ <i>b</i>) × <i>c</i></span>. This is an agreed notational convention. It lets every well-formed expression have one value. A fraction bar groups its whole numerator and whole denominator: <span class="m"><span class="fr"><span>6 + 4</span><span>2</span></span> = 5</span>. Implied multiplication such as <span class="m">2(3 + 1)</span> or <span class="m">2<i>x</i></span> is sometimes given higher precedence in textbooks, so ambiguous forms like <span class="m">6 ÷ 2(1 + 2)</span> should be rewritten with explicit parentheses.</p>`,
  legend: [
    { c: "c1", sym: `4 × 2`, name: "Next operation", desc: "The operation with the highest precedence, or the leftmost one at that level. It is done next." },
    { c: "c5", sym: `11`, name: "Result", desc: "The value that replaces the operation just done, until one number remains." },
    { c: "c1", sym: `( )`, name: "Grouping", desc: "Parentheses and other grouping symbols override the usual order. Work inside them first." }
  ],
  steps: { title: "How to evaluate an expression", items: [
    `Find the innermost grouping symbols and evaluate what is inside them first, using these same steps.`,
    `Evaluate any exponents.`,
    `Scan left to right and do each multiplication or division as you meet it.`,
    `Scan left to right again and do each addition or subtraction as you meet it.`,
    `After each operation, rewrite the whole expression with the result in place. This avoids skipping or doubling a step.`
  ] },
  example: {
    prompt: `Two adults go to a museum at $12 each, with 3 children at $7 each. They have a $5-off coupon for the whole group. Write one expression for the cost and evaluate it.`,
    lines: [
      { math: `2 × 12 + 3 × 7 − 5`, note: "Each product is a group of tickets. The coupon comes off the total." },
      { math: `<span class="c1">2 × 12</span> + 3 × 7 − 5`, note: "Multiplication comes before addition and subtraction. Start at the left." },
      { math: `24 + <span class="c1">3 × 7</span> − 5`, note: "Next multiplication." },
      { math: `<span class="c1">24 + 21</span> − 5`, note: "No multiplication left. Add and subtract left to right." },
      { math: `<span class="c1">45 − 5</span>`, note: "Last operation." },
      { math: `<span class="c5">40</span>`, note: "One number remains." }
    ],
    answer: `The visit costs <span class="m c5">$40</span>. Going strictly left to right would give a wrong total of $184.`
  },
  why: `<p>Written math has to mean the same thing to everyone who reads it. A formula for a price, a dose or a load is useless if two people evaluate it differently. The order of operations is that shared agreement, and it is built into calculators, spreadsheets and programming languages.</p>
<p>Algebra depends on it. An expression like <span class="m">3<i>x</i><sup>2</sup> + 2<i>x</i> − 5</span> is only meaningful because everyone knows the square applies to <i>x</i> alone and the multiplications happen before the additions. Every formula in science, finance and engineering is written with this convention.</p>`,
  careers: [
    { role: "Software developer", use: "Writes expressions knowing each language's operator precedence, and adds parentheses so the code computes what is intended." },
    { role: "Financial analyst", use: "Builds spreadsheet formulas such as =B2*(1+C2)-D2 where misplaced parentheses would change every result." },
    { role: "Nurse", use: "Evaluates dosage formulas with several steps, such as (desired ÷ on hand) × volume, in the correct order." },
    { role: "Electrical engineer", use: "Evaluates circuit formulas like the parallel resistance 1/(1/R₁ + 1/R₂), where the grouping determines the answer." },
    { role: "Estimator", use: "Writes cost formulas combining quantities, unit prices and a markup percentage that must be applied at the right step." }
  ],
  life: [
    "Totaling a bill with several items at different prices and a coupon",
    "Typing a multi-step calculation into a phone calculator correctly",
    "Writing formulas in a spreadsheet for a household budget",
    "Following a recipe conversion that multiplies and then adds",
    "Checking a store's sale price math, such as a discount applied before tax"
  ],
  fields: [
    { name: "Computer programming", use: "Every language defines operator precedence and associativity, and parsers enforce them." },
    { name: "Algebra and all later math", use: "Formulas and equations are written assuming the standard order." },
    { name: "Physics and engineering", use: "Formulas like v = v₀ + at are read with multiplication before addition." }
  ],
  prereqWhy: {
    "division": "Division shares a precedence level with multiplication and is done left to right, so it must be fluent inside expressions.",
    "properties": "The laws of arithmetic show why grouping matters for subtraction and division and when regrouping is allowed."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Evaluating and simplifying expressions with variables requires the standard order at every step." },
    { field: "Computer science", why: "Parsing expressions into trees, as compilers and calculators do, encodes the precedence rules." },
    { field: "Calculus", why: "Reading formulas such as derivatives of composite functions depends on knowing what each operation applies to." }
  ],
  mistakes: [
    { wrong: `Treating PEMDAS as six steps and multiplying before dividing: <span class="m">12 ÷ 3 × 2 = 12 ÷ 6 = 2</span>.`, fix: `Multiplication and division share one level and go left to right: <span class="m">12 ÷ 3 × 2 = 4 × 2 = 8</span>.` },
    { wrong: `Adding before subtracting: <span class="m">10 − 3 + 2 = 10 − 5 = 5</span>.`, fix: `Addition and subtraction share one level, left to right: <span class="m">10 − 3 + 2 = 7 + 2 = 9</span>.` },
    { wrong: `Going strictly left to right: <span class="m">3 + 4 × 2 = 7 × 2 = 14</span>.`, fix: `Multiplication comes before addition: <span class="m">3 + 8 = 11</span>.` }
  ],
  practice: [
    { q: `<span class="m">8 + 2 × 5</span>`, a: `<span class="m">8 + 10 = </span><b>18</b>.` },
    { q: `<span class="m">(8 + 2) × 5</span>`, a: `<span class="m">10 × 5 = </span><b>50</b>.` },
    { q: `<span class="m">20 − 12 ÷ 4 × 2</span>`, a: `<span class="m">12 ÷ 4 = 3</span>, <span class="m">3 × 2 = 6</span>, <span class="m">20 − 6 = </span><b>14</b>.` },
    { q: `<span class="m">48 ÷ (2 + 6) × 3 − 5</span>`, a: `Parentheses: 8. Then <span class="m">48 ÷ 8 = 6</span>, <span class="m">6 × 3 = 18</span>, <span class="m">18 − 5 = </span><b>13</b>.` }
  ],
  origin: `The rule that multiplication comes before addition grew up with symbolic algebra in the 1500s and 1600s, where writing <span class="m"><i>ax</i> + <i>b</i></span> to mean <span class="m">(<i>ax</i>) + <i>b</i></span> was already standard. Mnemonics such as PEMDAS and BODMAS are much later school conventions.`
};
