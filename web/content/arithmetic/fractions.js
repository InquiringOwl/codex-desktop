window.ARITH = window.ARITH || {};

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
