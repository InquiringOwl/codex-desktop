window.ARITH = window.ARITH || {};

ARITH["a2-inverses"] = {
  title: "Inverse Functions",
  short: "Undo a one-to-one function: swap x and y, then solve",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · one-to-one functions and inverses",
  hero: `<span class="m"><span class="c1"><i>f</i>(<i>x</i>) = 2<i>x</i> − 3</span> &nbsp;⇔&nbsp; <span class="c2"><i>f</i><sup>−1</sup>(<i>x</i>) = <span class="fr"><span><i>x</i> + 3</span><span>2</span></span></span></span>`,
  lede: `The <span class="c2">inverse</span> of a function <span class="c1"><i>f</i></span> runs it backwards: it takes each output of <span class="c1"><i>f</i></span> back to the input that made it. Only <b>one-to-one</b> functions have inverses, and the graph of the inverse is the mirror image of the graph of <span class="c1"><i>f</i></span> in the line <span class="c4"><i>y</i> = <i>x</i></span>.`,
  plain: `<p>The function <span class="m"><span class="c1"><i>f</i>(<i>x</i>) = 2<i>x</i> − 3</span></span> doubles a number and then subtracts 3. To undo it, do the opposite steps in the opposite order: add 3, then halve. That undoing function is the inverse, <span class="m"><span class="c2"><i>f</i><sup>−1</sup>(<i>x</i>) = (<i>x</i> + 3)/2</span></span>. Since <span class="m"><i>f</i>(4) = 5</span>, the inverse gives <span class="m"><i>f</i><sup>−1</sup>(5) = 4</span>.</p>
<p>Undoing only works if every output comes from just one input. The squaring function sends both 3 and −3 to 9, so when you are handed 9 you cannot tell which number to go back to. A function where different inputs always give different outputs is called <b>one-to-one</b>. On a graph, that means no horizontal line crosses it more than once.</p>
<p>The inverse swaps the roles of inputs and outputs. Every point <span class="m">(<i>a</i>, <i>b</i>)</span> on the graph of <span class="c1"><i>f</i></span> becomes the point <span class="m">(<i>b</i>, <i>a</i>)</span> on the graph of <span class="c2"><i>f</i><sup>−1</sup></span>. Swapping the coordinates is a reflection in the line <span class="m"><span class="c4"><i>y</i> = <i>x</i></span></span>, and the domain and range trade places.</p>`,
  formal: `<p>A function <span class="m"><i>f</i></span> is <b>one-to-one</b> if <span class="m"><i>f</i>(<i>x</i><sub>1</sub>) = <i>f</i>(<i>x</i><sub>2</sub>)</span> implies <span class="m"><i>x</i><sub>1</sub> = <i>x</i><sub>2</sub></span>. Graphically this is the <b>horizontal line test</b>: no horizontal line meets the graph more than once. A one-to-one function <span class="m"><span class="c1"><i>f</i></span></span> with domain <span class="m"><i>D</i></span> and range <span class="m"><i>R</i></span> has an <b>inverse function</b> <span class="m"><span class="c2"><i>f</i><sup>−1</sup></span></span> with domain <span class="m"><i>R</i></span> and range <span class="m"><i>D</i></span>, defined by</p>
<div class="display"><span class="c2"><i>f</i><sup>−1</sup>(<i>y</i>)</span> = <i>x</i> &nbsp;⇔&nbsp; <span class="c1"><i>f</i>(<i>x</i>)</span> = <i>y</i><br><i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = <i>x</i> for <i>x</i> in <i>R</i>, &nbsp; <i>f</i><sup>−1</sup>(<i>f</i>(<i>x</i>)) = <i>x</i> for <i>x</i> in <i>D</i></div>
<p>To find <span class="m"><i>f</i><sup>−1</sup></span>, write <span class="m"><i>y</i> = <i>f</i>(<i>x</i>)</span>, interchange <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>, solve for <span class="m"><i>y</i></span>, and state the domain as the range of <span class="m"><i>f</i></span>. The graphs of <span class="m"><i>f</i></span> and <span class="m"><i>f</i><sup>−1</sup></span> are reflections of each other in the line <span class="m"><span class="c4"><i>y</i> = <i>x</i></span></span>. A function that is not one-to-one can be given an inverse by <b>restricting its domain</b>: <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>, <i>x</i> ≥ 0</span> has inverse <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = √<span class="ov"><i>x</i></span></span>. The notation <span class="m"><i>f</i><sup>−1</sup></span> is not a reciprocal: for <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> − 3</span>, <span class="m"><i>f</i><sup>−1</sup>(5) = 4</span> but <span class="m">1/<i>f</i>(5) = 1/7</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>f</i>`, name: "Function", desc: "The original one-to-one function, input x and output y." },
    { c: "c2", sym: `<i>f</i><sup>−1</sup>`, name: "Inverse function", desc: "Takes each output of f back to its input. Its graph is f reflected in y = x." },
    { c: "c4", sym: `<i>y</i> = <i>x</i>`, name: "Mirror line", desc: "Swapping coordinates (a, b) → (b, a) reflects a point in this line." },
    { c: "c3", sym: `<i>y</i> = <i>c</i>`, name: "Horizontal test line", desc: "If some horizontal line meets the graph twice, f is not one-to-one and has no inverse on that domain." }
  ],
  steps: {
    title: "How to find an inverse function",
    items: [
      `Check that <span class="c1"><i>f</i></span> is one-to-one (horizontal line test). If it is not, restrict the domain to a piece where it is.`,
      `Replace <span class="m"><i>f</i>(<i>x</i>)</span> by <span class="m"><i>y</i></span>.`,
      `Interchange <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>.`,
      `Solve the new equation for <span class="m"><i>y</i></span>, and write <span class="m"><span class="c2"><i>f</i><sup>−1</sup>(<i>x</i>)</span></span> for it.`,
      `State the domain of <span class="m"><i>f</i><sup>−1</sup></span>: it is the range of <span class="m"><i>f</i></span>.`,
      `Verify that <span class="m"><i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = <i>x</i></span> and <span class="m"><i>f</i><sup>−1</sup>(<i>f</i>(<i>x</i>)) = <i>x</i></span>, or at least test one point.`
    ]
  },
  example: {
    prompt: `Find the inverse of <span class="m"><span class="c1"><i>f</i>(<i>x</i>) = <span class="fr"><span><i>x</i> + 1</span><span><i>x</i> − 2</span></span></span></span>, give the domain and range of both functions, and verify the answer.`,
    lines: [
      { math: `<span class="m"><i>y</i> = <span class="fr"><span><i>x</i> + 1</span><span><i>x</i> − 2</span></span> &nbsp;→&nbsp; <i>x</i> = <span class="fr"><span><i>y</i> + 1</span><span><i>y</i> − 2</span></span></span>`, note: "f is one-to-one (a transformed 1/x). Write y for f(x) and interchange x and y." },
      { math: `<span class="m"><i>x</i>(<i>y</i> − 2) = <i>y</i> + 1 &nbsp;⇒&nbsp; <i>xy</i> − 2<i>x</i> = <i>y</i> + 1</span>`, note: "Clear the fraction and expand." },
      { math: `<span class="m"><i>xy</i> − <i>y</i> = 2<i>x</i> + 1 &nbsp;⇒&nbsp; <i>y</i>(<i>x</i> − 1) = 2<i>x</i> + 1</span>`, note: "Collect the y-terms on one side and factor out y." },
      { math: `<span class="m"><span class="c2"><i>f</i><sup>−1</sup>(<i>x</i>) = <span class="fr"><span>2<i>x</i> + 1</span><span><i>x</i> − 1</span></span></span></span>`, note: "Divide by x − 1." },
      { math: `<span class="m"><span class="c1"><i>f</i></span>: <i>x</i> ≠ 2, <i>y</i> ≠ 1; &nbsp; <span class="c2"><i>f</i><sup>−1</sup></span>: <i>x</i> ≠ 1, <i>y</i> ≠ 2</span>`, note: "f has vertical asymptote x = 2 and horizontal asymptote y = 1; the inverse swaps them." },
      { math: `<span class="m"><i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = <span class="fr"><span>(2<i>x</i> + 1) + (<i>x</i> − 1)</span><span>(2<i>x</i> + 1) − 2(<i>x</i> − 1)</span></span> = <span class="fr"><span>3<i>x</i></span><span>3</span></span> = <i>x</i></span>`, note: "Multiply top and bottom by x − 1 to simplify the compound fraction." },
      { math: `<span class="m"><i>f</i>(3) = 4, &nbsp; <i>f</i><sup>−1</sup>(4) = <span class="fr"><span>9</span><span>3</span></span> = 3</span> ✓`, note: "A point check: (3, 4) on f matches (4, 3) on the inverse." }
    ],
    answer: `<span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = <span class="fr"><span>2<i>x</i> + 1</span><span><i>x</i> − 1</span></span></span>. Domain of <span class="m"><i>f</i></span> = range of <span class="m"><i>f</i><sup>−1</sup></span> = <span class="m">(−∞, 2) ∪ (2, ∞)</span>; range of <span class="m"><i>f</i></span> = domain of <span class="m"><i>f</i><sup>−1</sup></span> = <span class="m">(−∞, 1) ∪ (1, ∞)</span>.`
  },
  why: `<p>Whenever you know the output and want the input, you need an inverse. A formula gives the cost of a taxi ride from its distance; the inverse tells you how far you can go for the money in your pocket. A thermometer converts Celsius to Fahrenheit; the inverse converts back. Solving an equation <span class="m"><i>f</i>(<i>x</i>) = <i>c</i></span> is the same as computing <span class="m"><i>f</i><sup>−1</sup>(<i>c</i>)</span>.</p>
<p>Inverses also create new functions. The square root is the inverse of squaring on <span class="m"><i>x</i> ≥ 0</span>, the cube root undoes cubing, and logarithms, later in this field, are defined as the inverses of exponential functions. Their graphs and domains follow from the reflection in <span class="m"><i>y</i> = <i>x</i></span>.</p>`,
  careers: [
    { role: "Cryptographer", use: "Designs encryption functions that are one-to-one so every message decrypts uniquely, and that are hard to invert without the key." },
    { role: "Pharmacist", use: "Inverts a dose-to-concentration formula to find the dose that reaches a target blood level." },
    { role: "Calibration engineer", use: "Inverts a sensor's response curve so a measured voltage can be converted back to the temperature or pressure that caused it." },
    { role: "Financial analyst", use: "Inverts a growth formula to find the time or rate needed to reach a target value." },
    { role: "Audio software developer", use: "Converts between decibels and amplitude in both directions, a function and its inverse." },
    { role: "Logistics planner", use: "Inverts a cost-per-distance formula to find the delivery radius a fixed budget allows." }
  ],
  life: [
    "Converting a recipe's Fahrenheit oven temperature back to Celsius",
    "Working out how many hours you worked from the size of your paycheck",
    "Finding how far a taxi can take you for the cash you have",
    "Undoing a currency conversion when you return from a trip",
    "Decoding a message written with a letter-shifting code"
  ],
  fields: [
    { name: "Cryptography", use: "Encryption and decryption are a one-to-one function and its inverse." },
    { name: "Chemistry", use: "pH and hydrogen-ion concentration are inverse functions of each other." },
    { name: "Physics", use: "Solving a motion formula for time given position uses the inverse of the position function." },
    { name: "Computer science", use: "Lossless compression and encoding schemes must be one-to-one so they can be inverted." }
  ],
  prereqWhy: {
    "a2-func-ops": "An inverse is defined and verified by composition: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x on the right domains.",
    "a1-literal": "Finding f⁻¹ means solving x = f(y) for y, the same skill as solving a literal equation for one variable."
  },
  unlocksWhy: {
    "a2-radical-func": "Square-root and cube-root functions are the inverses of x² on x ≥ 0 and of x³, so their graphs are reflections in y = x.",
    "a2-logs": "The logarithm log_b x is defined as the inverse of the exponential function bˣ, so its domain and range swap with those of bˣ."
  },
  beyond: [
    { field: "Precalculus", why: "Inverse trigonometric functions need restricted domains, exactly like x² restricted to x ≥ 0." },
    { field: "Calculus I", why: "The derivative of an inverse function comes from the reflection in y = x: slopes at matching points are reciprocals." },
    { field: "Linear Algebra", why: "An invertible matrix is a one-to-one linear map, and its inverse undoes it." },
    { field: "Computer science", why: "Hash functions are built not to be invertible, while encryption must be." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = <span class="fr"><span>1</span><span>2<i>x</i> − 3</span></span></span> for <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> − 3</span>.`, fix: `That is the reciprocal <span class="m">1/<i>f</i>(<i>x</i>)</span>. The inverse undoes <span class="m"><i>f</i></span>: <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = (<i>x</i> + 3)/2</span>.` },
    { wrong: `Saying the inverse of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span> is <span class="m">√<span class="ov"><i>x</i></span></span> with no restriction.`, fix: `<span class="m"><i>x</i><sup>2</sup></span> is not one-to-one: <span class="m">√<span class="ov">(−3)<sup>2</sup></span> = 3 ≠ −3</span>. Restrict to <span class="m"><i>x</i> ≥ 0</span> first; then <span class="m">√<span class="ov"><i>x</i></span></span> is its inverse.` },
    { wrong: `Giving <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = (<i>x</i><sup>2</sup> + 6)/2</span> for <span class="m"><i>f</i>(<i>x</i>) = √<span class="ov">2<i>x</i> − 6</span></span> with domain all real numbers.`, fix: `The domain of <span class="m"><i>f</i><sup>−1</sup></span> is the range of <span class="m"><i>f</i></span>, which is <span class="m">[0, ∞)</span>. Without it, <span class="m"><i>f</i><sup>−1</sup></span> would not be one-to-one.` }
  ],
  practice: [
    { q: `Find the inverse of <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> − 3</span> and check it at one point.`, a: `<span class="m"><i>x</i> = 2<i>y</i> − 3</span> gives <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = (<i>x</i> + 3)/2</span>. Check: <span class="m"><i>f</i>(4) = 5</span> and <span class="m"><i>f</i><sup>−1</sup>(5) = 8/2 = 4</span>.` },
    { q: `Is <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4</span> one-to-one? Restrict it to <span class="m"><i>x</i> ≥ 0</span> and find the inverse with its domain and range.`, a: `No: <span class="m"><i>f</i>(−1) = <i>f</i>(1) = −3</span>. On <span class="m"><i>x</i> ≥ 0</span>: <span class="m"><i>x</i> = <i>y</i><sup>2</sup> − 4</span>, <span class="m"><i>y</i> = √<span class="ov"><i>x</i> + 4</span></span> (positive root, since <span class="m"><i>y</i> ≥ 0</span>). Domain <span class="m">[−4, ∞)</span>, range <span class="m">[0, ∞)</span>.` },
    { q: `Find the inverse of <span class="m"><i>f</i>(<i>x</i>) = ∛<span class="ov"><i>x</i> − 1</span> + 2</span> and verify <span class="m"><i>f</i><sup>−1</sup>(<i>f</i>(9)) = 9</span>.`, a: `<span class="m"><i>x</i> − 2 = ∛<span class="ov"><i>y</i> − 1</span></span>, so <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = (<i>x</i> − 2)<sup>3</sup> + 1</span>. <span class="m"><i>f</i>(9) = ∛<span class="ov">8</span> + 2 = 4</span> and <span class="m"><i>f</i><sup>−1</sup>(4) = 2<sup>3</sup> + 1 = 9</span>.` },
    { q: `Find the inverse of <span class="m"><i>f</i>(<i>x</i>) = √<span class="ov">2<i>x</i> − 6</span></span>, with the domain and range of both.`, a: `<span class="m"><i>f</i></span>: domain <span class="m">[3, ∞)</span>, range <span class="m">[0, ∞)</span>. <span class="m"><i>x</i> = √<span class="ov">2<i>y</i> − 6</span></span> gives <span class="m"><i>x</i><sup>2</sup> = 2<i>y</i> − 6</span>, so <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = (<i>x</i><sup>2</sup> + 6)/2</span> with domain <span class="m">[0, ∞)</span> and range <span class="m">[3, ∞)</span>.` }
  ],
  origin: `<p>Inverse operations are as old as arithmetic: subtraction undoes addition and root extraction undoes powers, both in Babylonian tables. The idea of an inverse function grew with the function concept in the eighteenth century. John Herschel introduced the notation f⁻¹ in 1813, writing cos⁻¹ e for the inverse cosine, and remarked that it must not be read as the reciprocal 1/cos e.</p>`
};
