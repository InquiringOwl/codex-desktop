window.ARITH = window.ARITH || {};

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
