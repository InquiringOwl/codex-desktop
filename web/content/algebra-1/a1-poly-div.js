window.ARITH = window.ARITH || {};

ARITH["a1-poly-div"] = {
  title: "Dividing Polynomials",
  short: "Long division and synthetic division for polynomials",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomials · division algorithm",
  hero: `<span class="m"><span class="c2"><i>P</i>(<i>x</i>)</span> = <span class="c3"><i>D</i>(<i>x</i>)</span> · <span class="c1"><i>Q</i>(<i>x</i>)</span> + <span class="c4"><i>R</i>(<i>x</i>)</span></span>`,
  lede: `Dividing polynomials works like long division of whole numbers: divide the leading terms, multiply back, subtract, bring down, repeat. The result is a quotient and a remainder of lower degree than the divisor.`,
  plain: `<p>Dividing by a monomial is the easy case. Split the fraction and divide each term separately: <span class="m">(12<i>x</i><sup>4</sup> − 8<i>x</i><sup>3</sup> + 4<i>x</i><sup>2</sup>) ÷ 4<i>x</i><sup>2</sup> = 3<i>x</i><sup>2</sup> − 2<i>x</i> + 1</span>. Every term of the top must be divided, not just the first.</p>
<p>Dividing by a binomial such as <span class="m"><i>x</i> + 2</span> uses <b>polynomial long division</b>, the same routine you learned for numbers. Ask "what times <span class="m"><i>x</i></span> gives the leading term?" Write that in the quotient, multiply it by the whole divisor, subtract, and bring down the next term. Keep going until what is left has a lower degree than the divisor. What is left is the <b>remainder</b>.</p>
<p>Two habits prevent most errors. Write the dividend in descending order and put in a <span class="m">0</span> placeholder for any missing power, such as <span class="m"><i>x</i><sup>3</sup> + 0<i>x</i><sup>2</sup> + 0<i>x</i> − 27</span>. And subtract the whole product, which means changing the sign of every term. When the divisor has the form <span class="m"><i>x</i> − <i>a</i></span>, a shortcut called <b>synthetic division</b> does the same work using only the coefficients.</p>`,
  formal: `<p><b>Division algorithm for polynomials.</b> If <span class="m"><i>P</i>(<i>x</i>)</span> and <span class="m"><i>D</i>(<i>x</i>)</span> are polynomials with <span class="m"><i>D</i>(<i>x</i>) ≠ 0</span>, there are unique polynomials <span class="m"><i>Q</i>(<i>x</i>)</span> (quotient) and <span class="m"><i>R</i>(<i>x</i>)</span> (remainder) such that</p>
<div class="display"><i>P</i>(<i>x</i>) = <i>D</i>(<i>x</i>) <i>Q</i>(<i>x</i>) + <i>R</i>(<i>x</i>), &nbsp;&nbsp;<span class="dim"><i>R</i> = 0 or deg <i>R</i> &lt; deg <i>D</i></span><br><span class="fr"><span><i>P</i>(<i>x</i>)</span><span><i>D</i>(<i>x</i>)</span></span> = <i>Q</i>(<i>x</i>) + <span class="fr"><span><i>R</i>(<i>x</i>)</span><span><i>D</i>(<i>x</i>)</span></span></div>
<p>When <span class="m"><i>D</i>(<i>x</i>) = <i>x</i> − <i>a</i></span>, the remainder is a constant and equals <span class="m"><i>P</i>(<i>a</i>)</span> (the <b>remainder theorem</b>). So <span class="m"><i>x</i> − <i>a</i></span> is a factor of <span class="m"><i>P</i></span> exactly when <span class="m"><i>P</i>(<i>a</i>) = 0</span>. <b>Synthetic division</b> by <span class="m"><i>x</i> − <i>a</i></span> lists the coefficients of <span class="m"><i>P</i></span>, brings down the first, and repeatedly multiplies by <span class="m"><i>a</i></span> and adds.</p>`,
  legend: [
    { c: "c2", sym: `<i>P</i>(<i>x</i>)`, name: "Dividend", desc: "The polynomial being divided, written in descending powers with 0 for any missing terms." },
    { c: "c3", sym: `<i>D</i>(<i>x</i>)`, name: "Divisor", desc: "The polynomial you divide by. For synthetic division it must have the form x − a." },
    { c: "c1", sym: `<i>Q</i>(<i>x</i>)`, name: "Quotient", desc: "Built one term at a time by dividing leading terms." },
    { c: "c4", sym: `<i>R</i>(<i>x</i>)`, name: "Remainder", desc: "What is left when its degree is less than the divisor's. A remainder of 0 means the divisor is a factor." }
  ],
  steps: { title: "How to divide a polynomial by a binomial", items: [
    `Write the dividend and divisor in descending powers. Insert <span class="m">0</span> coefficients for missing powers.`,
    `Divide the leading term of the dividend by the leading term of the divisor. Write the result as the first term of the quotient.`,
    `Multiply that term by the entire divisor and write the product under the matching terms.`,
    `Subtract: change the sign of every term of the product and add. Bring down the next term.`,
    `Repeat with the new leading term until the remainder has lower degree than the divisor.`,
    `Write the answer as quotient + remainder/divisor, and check that divisor × quotient + remainder gives the dividend.`
  ] },
  example: {
    prompt: `A shipping crate is designed so that its volume is <span class="m"><i>V</i> = 2<i>x</i><sup>3</sup> + 9<i>x</i><sup>2</sup> + 7<i>x</i> − 6</span> cubic feet and its height is <span class="m"><i>x</i> + 2</span> feet. Find an expression for the area of its base, and check it for <span class="m"><i>x</i> = 3</span>.`,
    lines: [
      { math: `<span class="m">(<span class="c2">2<i>x</i><sup>3</sup> + 9<i>x</i><sup>2</sup> + 7<i>x</i> − 6</span>) ÷ (<span class="c3"><i>x</i> + 2</span>)</span>`, note: "Base area = volume ÷ height." },
      { math: `<span class="m"><span class="c1">2<i>x</i><sup>2</sup></span>(<i>x</i> + 2) = 2<i>x</i><sup>3</sup> + 4<i>x</i><sup>2</sup> → remainder so far 5<i>x</i><sup>2</sup> + 7<i>x</i></span>`, note: "2x³ ÷ x = 2x². Multiply, subtract, bring down 7x." },
      { math: `<span class="m"><span class="c1">5<i>x</i></span>(<i>x</i> + 2) = 5<i>x</i><sup>2</sup> + 10<i>x</i> → −3<i>x</i> − 6</span>`, note: "5x² ÷ x = 5x. Subtract, bring down −6." },
      { math: `<span class="m"><span class="c1">−3</span>(<i>x</i> + 2) = −3<i>x</i> − 6 → <span class="c4">0</span></span>`, note: "−3x ÷ x = −3. The remainder is 0, so x + 2 divides evenly." },
      { math: `<span class="m c1"><i>Q</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> + 5<i>x</i> − 3</span>`, note: "The base area in square feet." },
      { math: `<span class="m"><i>x</i> = 3: &nbsp; <i>V</i> = 54 + 81 + 21 − 6 = 150, &nbsp; 5 × (18 + 15 − 3) = 5 × 30 = 150 ✓</span>`, note: "Height 5 ft times base 30 ft² matches the volume." }
    ],
    answer: `The base area is <span class="m">2<i>x</i><sup>2</sup> + 5<i>x</i> − 3</span> square feet, which factors as <span class="m">(2<i>x</i> − 1)(<i>x</i> + 3)</span>, so the base is <span class="m">2<i>x</i> − 1</span> ft by <span class="m"><i>x</i> + 3</span> ft.`
  },
  why: `<p>Division undoes multiplication. If you know a total, such as an area, a volume or a cost, and one of its factors, dividing gives the other factor. It is also how you break a polynomial into simpler pieces: once you know one factor, division hands you the rest.</p>
<p>In later courses, polynomial division finds all the roots of a cubic or quartic once one root is known, rewrites rational functions to reveal their slant asymptotes, and underlies partial fractions in calculus. The same algorithm, run on binary polynomials, is how cyclic redundancy checks detect errors in network data.</p>`,
  careers: [
    { role: "Network engineer", use: "Relies on cyclic redundancy checks, where a data block is divided by a generator polynomial and the remainder detects transmission errors." },
    { role: "Control systems engineer", use: "Divides polynomials in transfer functions to simplify them and study a system's long-run behaviour." },
    { role: "Cryptographer", use: "Performs polynomial division over finite fields in algorithms such as AES and Reed-Solomon codes." },
    { role: "Structural engineer", use: "Divides a polynomial load or volume expression by a known dimension to get the remaining dimension in a design formula." },
    { role: "Mathematics teacher", use: "Uses synthetic division and the remainder theorem to test candidate roots when teaching polynomial factoring." }
  ],
  life: [
    "Finding the missing side of a rectangle when its area and one side are known expressions",
    "Checking a factoring answer by dividing it back out",
    "Splitting a total cost formula by a number of units to get cost per unit",
    "Understanding how a file checksum catches corrupted downloads",
    "Doing long division of numbers faster by seeing it as polynomial division in base 10"
  ],
  fields: [
    { name: "Computer science", use: "Error-detecting codes such as CRC-32 are polynomial division with coefficients 0 and 1." },
    { name: "Engineering", use: "Transfer functions are ratios of polynomials, simplified by division and factoring." },
    { name: "Coding theory", use: "Reed-Solomon codes on QR codes and storage devices encode and decode by dividing polynomials." },
    { name: "Algebra II", use: "Synthetic division and the remainder and factor theorems are used to find all zeros of a polynomial." }
  ],
  prereqWhy: {
    "a1-poly-mult": "Each step multiplies a quotient term by the whole divisor, and the answer is checked by multiplying back out."
  },
  unlocksWhy: {
    "a2-synthetic": "Synthetic division is the long-division algorithm with the powers of <i>x</i> left out, so each column repeats a step of long division.",
    "a2-rational-asym": "The quotient of polynomial long division is the slant asymptote of a rational function, and the remainder shows how the graph approaches it."
  },
  beyond: [
    { field: "Algebra II", why: "The remainder and factor theorems use division to find zeros and factor higher-degree polynomials." },
    { field: "Precalculus", why: "Dividing numerator by denominator gives the slant asymptote of a rational function." },
    { field: "Calculus II", why: "Improper rational integrands are divided first, then split by partial fractions." },
    { field: "Abstract Algebra", why: "The division algorithm in polynomial rings leads to greatest common divisors and field extensions." }
  ],
  mistakes: [
    { wrong: `<span class="m"><span class="fr"><span>6<i>x</i><sup>2</sup> + 3<i>x</i></span><span>3<i>x</i></span></span> = 2<i>x</i> + 3<i>x</i></span>, or cancelling to get <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> + 5</span><span><i>x</i></span></span> = <i>x</i> + 5</span>.`, fix: `Divide every term by the divisor: <span class="m">2<i>x</i> + 1</span>, and <span class="m"><i>x</i> + <span class="fr"><span>5</span><span><i>x</i></span></span></span>. You can only cancel common factors, not terms.` },
    { wrong: `Dividing <span class="m"><i>x</i><sup>3</sup> − 27</span> by <span class="m"><i>x</i> − 3</span> without placeholders, so the columns misalign.`, fix: `Write <span class="m"><i>x</i><sup>3</sup> + 0<i>x</i><sup>2</sup> + 0<i>x</i> − 27</span>. The quotient is <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> + 9</span>, remainder 0.` },
    { wrong: `Subtracting only the first term of the product: <span class="m">(5<i>x</i><sup>2</sup> + 7<i>x</i>) − (5<i>x</i><sup>2</sup> + 10<i>x</i>) = 17<i>x</i></span>.`, fix: `Change the sign of every term in the product: <span class="m">5<i>x</i><sup>2</sup> + 7<i>x</i> − 5<i>x</i><sup>2</sup> − 10<i>x</i> = −3<i>x</i></span>.` },
    { wrong: `Using <span class="m">−2</span> in synthetic division for the divisor <span class="m"><i>x</i> − 2</span>.`, fix: `For <span class="m"><i>x</i> − <i>a</i></span> use <span class="m"><i>a</i></span>. The divisor <span class="m"><i>x</i> − 2</span> uses 2; <span class="m"><i>x</i> + 2 = <i>x</i> − (−2)</span> uses −2.` }
  ],
  practice: [
    { q: `Divide <span class="m">(12<i>x</i><sup>4</sup> − 8<i>x</i><sup>3</sup> + 4<i>x</i><sup>2</sup>) ÷ 4<i>x</i><sup>2</sup></span>.`, a: `Divide each term: <span class="m">3<i>x</i><sup>2</sup> − 2<i>x</i> + 1</span>.` },
    { q: `Divide <span class="m">(<i>x</i><sup>2</sup> + 7<i>x</i> + 10) ÷ (<i>x</i> + 2)</span>.`, a: `<span class="m"><i>x</i>(<i>x</i> + 2) = <i>x</i><sup>2</sup> + 2<i>x</i></span>, leaving <span class="m">5<i>x</i> + 10 = 5(<i>x</i> + 2)</span>. Quotient <span class="m"><i>x</i> + 5</span>, remainder 0.` },
    { q: `Use synthetic division: <span class="m">(2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + 4<i>x</i> − 5) ÷ (<i>x</i> − 2)</span>.`, a: `Use 2 with coefficients 2, −3, 4, −5: bring down 2; <span class="m">2·2 − 3 = 1</span>; <span class="m">1·2 + 4 = 6</span>; <span class="m">6·2 − 5 = 7</span>. Quotient <span class="m">2<i>x</i><sup>2</sup> + <i>x</i> + 6</span>, remainder 7: <span class="m">2<i>x</i><sup>2</sup> + <i>x</i> + 6 + <span class="fr"><span>7</span><span><i>x</i> − 2</span></span></span>. Check: <span class="m"><i>P</i>(2) = 16 − 12 + 8 − 5 = 7</span> ✓.` },
    { q: `Divide <span class="m">(4<i>x</i><sup>3</sup> − 7<i>x</i> + 5) ÷ (2<i>x</i> + 3)</span>.`, a: `Write <span class="m">4<i>x</i><sup>3</sup> + 0<i>x</i><sup>2</sup> − 7<i>x</i> + 5</span>. <span class="m">2<i>x</i><sup>2</sup>(2<i>x</i> + 3) = 4<i>x</i><sup>3</sup> + 6<i>x</i><sup>2</sup></span>, leaving <span class="m">−6<i>x</i><sup>2</sup> − 7<i>x</i></span>; <span class="m">−3<i>x</i>(2<i>x</i> + 3) = −6<i>x</i><sup>2</sup> − 9<i>x</i></span>, leaving <span class="m">2<i>x</i> + 5</span>; <span class="m">1(2<i>x</i> + 3)</span> leaves 2. Answer <span class="m">2<i>x</i><sup>2</sup> − 3<i>x</i> + 1 + <span class="fr"><span>2</span><span>2<i>x</i> + 3</span></span></span>.` }
  ],
  origin: `Paolo Ruffini described the shortcut now called synthetic division (Ruffini's rule) in the early 1800s, and William George Horner published a closely related method for evaluating polynomials in 1819.`
};
