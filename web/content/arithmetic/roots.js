window.ARITH = window.ARITH || {};

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
