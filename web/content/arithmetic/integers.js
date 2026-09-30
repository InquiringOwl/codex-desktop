window.ARITH = window.ARITH || {};

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
