window.ARITH = window.ARITH || {};

ARITH["a1-radical-eq"] = {
  title: "Radical Equations",
  short: "Isolate the radical, square both sides, check",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Equations · the variable under a root",
  hero: `<span class="m">√<span class="c2"><i>A</i></span> = <span class="c3"><i>B</i></span> &nbsp;⟹&nbsp; <span class="c2"><i>A</i></span> = <span class="c3"><i>B</i></span><sup>2</sup> &nbsp;&nbsp;<span class="dim">then check</span></span>`,
  lede: `A radical equation has the variable inside a root. You isolate the radical, raise both sides to the power that undoes it, solve, and then check every answer, because squaring can create solutions that do not work.`,
  plain: `<p>To undo a square root, square it: <span class="m">(√<i>x</i>)<sup>2</sup> = <i>x</i></span>. So to solve <span class="m">√<span style="text-decoration:overline"><i>x</i> + 3</span> = 5</span>, square both sides to get <span class="m"><i>x</i> + 3 = 25</span>, and <span class="m"><i>x</i> = 22</span>. First, though, the radical has to be alone on one side. In <span class="m">√<span style="text-decoration:overline">2<i>x</i> − 1</span> + 4 = 7</span>, subtract 4 before squaring.</p>
<p>Squaring has a catch. It turns a false statement like <span class="m">−3 = 3</span> into a true one, <span class="m">9 = 9</span>. So squaring can add answers that do not satisfy the original equation. These are called <b>extraneous solutions</b>. The only protection is to substitute every answer back into the <b>original</b> equation and throw out any that fail.</p>
<p>Remember that <span class="m">√</span> means the principal (non-negative) square root. An equation like <span class="m">√<i>x</i> = −3</span> has no solution at all, because a square root is never negative. If you square it anyway you get <span class="m"><i>x</i> = 9</span>, and the check <span class="m">√9 = 3 ≠ −3</span> reveals it as extraneous.</p>`,
  formal: `<p>A <b>radical equation</b> is an equation in which the variable appears in a radicand. It is solved with the <b>power property</b>: if <span class="m"><i>a</i> = <i>b</i></span>, then <span class="m"><i>a</i><sup><i>n</i></sup> = <i>b</i><sup><i>n</i></sup></span>. The converse fails for even <span class="m"><i>n</i></span>, since <span class="m"><i>a</i><sup>2</sup> = <i>b</i><sup>2</sup></span> only gives <span class="m"><i>a</i> = ±<i>b</i></span>. So the solution set of the squared equation contains every solution of the original, and possibly more.</p>
<div class="display">√<span style="text-decoration:overline"><i>A</i></span> = <i>B</i> &nbsp;⟺&nbsp; <i>A</i> = <i>B</i><sup>2</sup> &nbsp;and&nbsp; <i>B</i> ≥ 0<br><sup>3</sup>√<span style="text-decoration:overline"><i>A</i></span> = <i>B</i> &nbsp;⟺&nbsp; <i>A</i> = <i>B</i><sup>3</sup> &nbsp;<span class="dim">(odd index: no extraneous roots)</span></div>
<p>A solution of the transformed equation that does not satisfy the original is an <b>extraneous solution</b> and is excluded from the solution set. When an equation contains two radicals that cannot both be isolated, square, simplify, isolate the remaining radical and square again.</p>`,
  legend: [
    { c: "c2", sym: `√<span style="text-decoration:overline"><i>x</i> + <i>a</i></span>`, name: "Left side", desc: "The isolated radical. Its graph starts at x = −a and only takes values ≥ 0." },
    { c: "c3", sym: `<i>x</i> + <i>b</i>`, name: "Right side", desc: "The other side of the equation. Where its graph meets the radical's graph is a true solution." },
    { c: "c5", sym: `<i>x</i> = <i>r</i>`, name: "Valid solution", desc: "An answer that checks in the original equation. A root of the squared equation that fails the check is extraneous, shown in red in the model." }
  ],
  steps: { title: "How to solve a radical equation", items: [
    `Isolate the radical on one side of the equation.`,
    `Raise both sides to the index of the root: square for a square root, cube for a cube root. Square the whole other side, as a binomial if it has two terms.`,
    `Solve the resulting equation. It may be linear or quadratic; a quadratic is set equal to 0 and factored.`,
    `If a radical remains, isolate it and repeat.`,
    `Check every answer in the <b>original</b> equation. Discard any that fail (extraneous solutions). If none work, the equation has no solution.`
  ] },
  example: {
    prompt: `Accident investigators estimate a car's speed from its skid marks with <span class="m"><i>S</i> = √<span style="text-decoration:overline">30<i>df</i></span></span>, where <span class="m"><i>S</i></span> is speed in mph, <span class="m"><i>d</i></span> the skid length in feet and <span class="m"><i>f</i></span> the road's drag factor. On a road with <span class="m"><i>f</i> = 0.75</span>, how long a skid does 45 mph produce? A driver who left 120 ft of skid marks says they were doing 45. Is that believable?`,
    lines: [
      { math: `<span class="m"><span class="c3">45</span> = √<span style="text-decoration:overline" class="c2">30 · <i>d</i> · 0.75</span> = √<span style="text-decoration:overline" class="c2">22.5<i>d</i></span></span>`, note: "Substitute S = 45 and f = 0.75. The radical is already isolated." },
      { math: `<span class="m">45<sup>2</sup> = 22.5<i>d</i> &nbsp;→&nbsp; 2,025 = 22.5<i>d</i></span>`, note: "Square both sides." },
      { math: `<span class="m c5"><i>d</i> = 90</span>`, note: "Divide by 22.5." },
      { math: `<span class="m">√<span style="text-decoration:overline">22.5 · 90</span> = √2,025 = 45 ✓</span>`, note: "Check in the original formula." },
      { math: `<span class="m"><i>S</i> = √<span style="text-decoration:overline">22.5 · 120</span> = √2,700 = 30√3 ≈ 52</span>`, note: "Now evaluate the formula for the measured 120 ft skid." }
    ],
    answer: `At 45 mph the car would skid about <span class="m">90</span> ft. A 120 ft skid corresponds to about <span class="m">52</span> mph, so the driver's claim of 45 mph is not believable.`
  },
  why: `<p>Square roots appear in formulas for speed from skid marks, the period of a pendulum, the distance to the horizon, and the side of a square from its area. Whenever you know the output of such a formula and want the input, you are solving a radical equation.</p>
<p>The habit of checking for extraneous solutions matters well beyond this topic. Squaring, multiplying by an expression containing the variable, and taking logarithms can all add or lose solutions, and a careful solver always checks answers in the original equation.</p>`,
  careers: [
    { role: "Accident reconstruction specialist", use: "Solves S = √(30df) for speed or skid distance to test drivers' statements against physical evidence." },
    { role: "Physicist", use: "Solves the pendulum formula T = 2π√(L/g) for the length L that gives a required period." },
    { role: "Electrical engineer", use: "Solves formulas like f = 1/(2π√(LC)) for the capacitance that tunes a circuit to a target frequency." },
    { role: "Ship's navigator", use: "Uses the horizon-distance formula, about 1.17√h nautical miles for height h in feet, to find the height needed to sight a light." },
    { role: "Structural engineer", use: "Solves for a column length or load in buckling and deflection formulas that contain square roots." }
  ],
  life: [
    "Working out how high you must stand to see a certain distance to the horizon",
    "Finding the side of a square garden from the area you want",
    "Estimating how long a playground swing's chain is from how long one swing takes",
    "Understanding how police estimate speed after a crash",
    "Checking whether a number you found by squaring really solves the problem"
  ],
  fields: [
    { name: "Physics", use: "Pendulum periods, escape velocity and wave speeds are square-root formulas solved for their inputs." },
    { name: "Forensic science", use: "Skid-mark speed estimates rest on solving S = √(30df) for either unknown." },
    { name: "Electrical engineering", use: "Resonant frequency formulas contain √(LC) and are solved for component values." },
    { name: "Geometry", use: "Distances from the Pythagorean theorem lead to equations with the unknown under a root." }
  ],
  prereqWhy: {
    "a1-radical-ops": "Squaring a side such as 3 + √x, and checking answers that involve radicals, uses radical multiplication and simplification.",
    "a1-multi-step": "After squaring, what remains is usually a multi-step linear equation to solve."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Equations with rational exponents and with two radicals are solved by the same raise-and-check method." },
    { field: "Precalculus", why: "Finding domains and inverses of radical functions requires solving radical equations and inequalities." },
    { field: "Physics", why: "Solving kinematics and energy formulas for a variable under a square root is routine." },
    { field: "Calculus I", why: "Optimisation problems with distance functions often lead to equations with radicals that must be checked for extraneous roots." }
  ],
  mistakes: [
    { wrong: `Squaring before isolating: <span class="m">√<i>x</i> + 2 = 5</span> becomes <span class="m"><i>x</i> + 4 = 25</span>.`, fix: `Isolate first: <span class="m">√<i>x</i> = 3</span>, then <span class="m"><i>x</i> = 9</span>. Note that <span class="m">(√<i>x</i> + 2)<sup>2</sup> = <i>x</i> + 4√<i>x</i> + 4</span>, not <span class="m"><i>x</i> + 4</span>.` },
    { wrong: `Squaring the right side of <span class="m">√<span style="text-decoration:overline"><i>x</i> + 7</span> = <i>x</i> + 1</span> as <span class="m"><i>x</i><sup>2</sup> + 1</span>.`, fix: `Square the binomial: <span class="m">(<i>x</i> + 1)<sup>2</sup> = <i>x</i><sup>2</sup> + 2<i>x</i> + 1</span>.` },
    { wrong: `Keeping both roots of the squared equation without checking.`, fix: `Substitute each into the original. For <span class="m">√<span style="text-decoration:overline"><i>x</i> + 7</span> = <i>x</i> + 1</span>, <span class="m"><i>x</i> = −3</span> gives <span class="m">2 = −2</span>, so it is extraneous.` },
    { wrong: `Solving <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> + 8 = 5</span> and reporting <span class="m"><i>x</i> = 12</span>.`, fix: `Isolating gives <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> = −3</span>. A principal square root is never negative, so there is no solution. The check <span class="m">√9 + 8 = 11 ≠ 5</span> confirms it.` }
  ],
  practice: [
    { q: `Solve <span class="m">√<span style="text-decoration:overline"><i>x</i> + 3</span> = 5</span>.`, a: `Square: <span class="m"><i>x</i> + 3 = 25</span>, <span class="m"><i>x</i> = 22</span>. Check: <span class="m">√25 = 5</span> ✓.` },
    { q: `Solve <span class="m">√<span style="text-decoration:overline">2<i>x</i> − 1</span> + 4 = 7</span>.`, a: `Isolate: <span class="m">√<span style="text-decoration:overline">2<i>x</i> − 1</span> = 3</span>. Square: <span class="m">2<i>x</i> − 1 = 9</span>, <span class="m"><i>x</i> = 5</span>. Check: <span class="m">√9 + 4 = 7</span> ✓.` },
    { q: `Solve <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> + 8 = 5</span>.`, a: `Isolate: <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> = −3</span>. A principal square root cannot be negative, so there is no solution (∅). Squaring would give <span class="m"><i>x</i> = 12</span>, which fails the check.` },
    { q: `Solve <span class="m">√<span style="text-decoration:overline"><i>x</i> + 7</span> = <i>x</i> + 1</span>.`, a: `Square: <span class="m"><i>x</i> + 7 = <i>x</i><sup>2</sup> + 2<i>x</i> + 1</span>, so <span class="m"><i>x</i><sup>2</sup> + <i>x</i> − 6 = 0</span>, <span class="m">(<i>x</i> + 3)(<i>x</i> − 2) = 0</span>, <span class="m"><i>x</i> = −3</span> or <span class="m"><i>x</i> = 2</span>. Check <span class="m">2</span>: <span class="m">√9 = 3 = 2 + 1</span> ✓. Check <span class="m">−3</span>: <span class="m">√4 = 2</span> but <span class="m">−3 + 1 = −2</span>, extraneous. Solution set <span class="m">{2}</span>.` }
  ]
};
