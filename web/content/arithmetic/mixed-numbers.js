window.ARITH = window.ARITH || {};

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
