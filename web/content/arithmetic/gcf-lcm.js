window.ARITH = window.ARITH || {};

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
