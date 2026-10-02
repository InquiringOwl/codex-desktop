window.ARITH = window.ARITH || {};
ARITH["a2-nonlinear-sys"] = {
  title: "Nonlinear Systems of Equations",
  short: "Where a line and a conic, or two conics, meet",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Conic sections · systems of nonlinear equations",
  hero: `<span class="m"><span class="c1"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 4</span>, &nbsp; <span class="c2"><i>y</i> = <i>x</i><sup>2</sup> − 2</span> &nbsp;⇒&nbsp; <span class="c5">(±√<span class="ov">3</span>, 1), (0, −2)</span></span>`,
  lede: `A <b>system of nonlinear equations</b> has at least one equation that is not linear, such as a circle, a parabola or a hyperbola. Its real solutions are the <span class="c5">points where the graphs cross or touch</span>, and you find them by substitution or elimination, just as for lines.`,
  plain: `<p>Two lines meet at most once. A line and a circle can miss each other, touch at one point or cut through at two. Two curves can meet even more often: a circle and a parabola can share up to four points. Each shared point is an ordered pair that makes both equations true.</p>
<p>The graph shows how many solutions to expect. The algebra finds them exactly. With <b>substitution</b>, solve one equation for one variable, or for <span class="m"><i>x</i><sup>2</sup></span>, and put that into the other. You get one equation in one variable, usually a quadratic. With <b>elimination</b>, add or subtract multiples of the equations so one variable drops out. This works well when both equations have only <span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>y</i><sup>2</sup></span> terms.</p>
<p>Every value you find for one variable must be put back to find the other. Some values give no real partner. If <span class="m"><i>x</i><sup>2</sup></span> comes out negative, there is no real point there. Such solutions are complex, and the graphs do not meet at them.</p>`,
  formal: `<p>A <b>solution</b> of a system of two equations in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> is an ordered pair that satisfies both. Real solutions are the intersection points of the two graphs. A line and a conic meet in at most 2 points, because substituting the line gives an equation of degree at most 2 in one variable. Two distinct conics meet in at most 4 points: in the cases here, eliminating <span class="m"><i>x</i><sup>2</sup></span> leaves a quadratic in <span class="m"><i>y</i></span>, and each of its roots gives at most two values of <span class="m"><i>x</i></span>, one positive and one negative.</p>
<div class="display"><span class="c1"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 13</span>, <span class="c2"><i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 5</span> &nbsp;⇒&nbsp; 2<i>x</i><sup>2</sup> = 18 &nbsp;⇒&nbsp; <span class="c5">(±3, ±2)</span>: 4 solutions<br><span class="c1"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 1</span>, <span class="c2"><i>y</i> = <i>x</i> + 3</span> &nbsp;⇒&nbsp; 2<i>x</i><sup>2</sup> + 6<i>x</i> + 8 = 0, &nbsp; <i>b</i><sup>2</sup> − 4<i>ac</i> = −28 &lt; 0: <span class="dim">no real solution</span></div>
<p>When the one-variable equation is a quadratic, its discriminant counts the real roots: positive gives two, zero gives one (the graphs are tangent), negative gives none. A system with no real solution still has complex solutions; they are not points of the graph.</p>`,
  legend: [
    { c: "c1", sym: `<i>G</i><sub>1</sub> = 0`, name: "First curve", desc: "Usually the conic: a circle, ellipse, hyperbola or parabola." },
    { c: "c2", sym: `<i>G</i><sub>2</sub> = 0`, name: "Second curve", desc: "A line or a second conic. Solve it for one variable (or for x²) to substitute." },
    { c: "c5", sym: `(<i>x</i>, <i>y</i>)`, name: "Intersection points", desc: "The real solutions of the system: pairs that satisfy both equations." }
  ],
  steps: {
    title: "How to solve a nonlinear system",
    items: [
      `Identify each graph and sketch them to see how many intersection points to expect.`,
      `Choose a method. Substitution: solve the simpler equation (often the line) for one variable, or for <span class="m"><i>x</i><sup>2</sup></span>. Elimination: line up the <span class="m"><i>x</i><sup>2</sup></span> or <span class="m"><i>y</i><sup>2</sup></span> terms so adding or subtracting removes one.`,
      `Solve the resulting one-variable equation, usually by factoring or the quadratic formula.`,
      `Put each value back into the substituted equation to find the other coordinate. Reject values that give no real partner, such as <span class="m"><i>x</i><sup>2</sup> &lt; 0</span>.`,
      `Check each ordered pair in both original equations and write the solution set.`
    ]
  },
  example: {
    prompt: `Solve the system <span class="m"><span class="c1"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 4</span></span> and <span class="m"><span class="c2"><i>y</i> = <i>x</i><sup>2</sup> − 2</span></span>.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>x</i><sup>2</sup> = <i>y</i> + 2</span></span>`, note: "The circle (radius 2) and the parabola (vertex (0, −2)) both contain x². Solve the parabola for x²." },
      { math: `<span class="m">(<i>y</i> + 2) + <i>y</i><sup>2</sup> = 4</span>`, note: "Substitute into the circle. Now only y is left." },
      { math: `<span class="m"><i>y</i><sup>2</sup> + <i>y</i> − 2 = 0 &nbsp;⇒&nbsp; (<i>y</i> + 2)(<i>y</i> − 1) = 0</span>`, note: "A quadratic in y. It factors." },
      { math: `<span class="m"><i>y</i> = 1 &nbsp; or &nbsp; <i>y</i> = −2</span>`, note: "Two y-values. Each one still needs its x-values." },
      { math: `<span class="m"><i>y</i> = 1: &nbsp; <i>x</i><sup>2</sup> = 3, &nbsp; <i>x</i> = ±√<span class="ov">3</span></span>`, note: "x² = y + 2 = 3 is positive, so there are two points at this height." },
      { math: `<span class="m"><i>y</i> = −2: &nbsp; <i>x</i><sup>2</sup> = 0, &nbsp; <i>x</i> = 0</span>`, note: "Only one point here: the parabola's vertex touches the bottom of the circle." },
      { math: `<span class="m">(√<span class="ov">3</span>)<sup>2</sup> + 1<sup>2</sup> = 4 ✓, &nbsp; 0<sup>2</sup> + (−2)<sup>2</sup> = 4 ✓</span>`, note: "Check in the circle; the parabola holds by construction." }
    ],
    answer: `Three solutions: <span class="m c5">{(−√<span class="ov">3</span>, 1), (√<span class="ov">3</span>, 1), (0, −2)}</span>. The parabola crosses the circle twice and touches it once at the bottom.`
  },
  why: `<p>Many real constraints are not straight lines. A GPS receiver finds its position where spheres of known radius around satellites meet; on a map that becomes the intersection of circles. A rectangle with a given area and perimeter gives one hyperbola-shaped condition and one linear one. Two orbits cross where two ellipses meet, and a projectile hits a slope where a parabola meets a line.</p>
<p>Solving these systems exactly uses everything from earlier in the course: substitution and elimination from linear systems, factoring and the quadratic formula, and the shape of each conic to know how many answers to expect and which ones to reject.</p>`,
  careers: [
    { role: "Navigation systems engineer", use: "Locates a receiver by intersecting circles or spheres of known range around transmitters, the idea behind trilateration in GPS." },
    { role: "Robotics engineer", use: "Finds the joint positions of a two-link arm by intersecting two circles centred at the shoulder and the target." },
    { role: "Seismologist", use: "Locates an earthquake epicentre where distance circles from three stations meet." },
    { role: "Computer graphics programmer", use: "Ray-traces scenes by solving a line against a sphere or quadric; the discriminant says hit, graze or miss." },
    { role: "Mechanical engineer", use: "Computes where a cam profile meets a follower path, often a conic against a line." },
    { role: "Economist", use: "Finds market equilibrium where a nonlinear supply curve meets a demand curve." }
  ],
  life: [
    "Working out a rectangle's sides from its area and perimeter",
    "Finding where a sprinkler's circular spray reaches a straight path",
    "Seeing that a ball's arc and a sloping hill meet at the landing spot",
    "Locating a phone from its distance to two or three towers",
    "Checking whether a thrown ball clears a curved arch"
  ],
  fields: [
    { name: "Physics", use: "Collision and interception problems intersect a trajectory with a surface or another path." },
    { name: "Computer graphics", use: "Ray–sphere and ray–quadric intersections are line–conic systems solved by the quadratic formula." },
    { name: "Geodesy and navigation", use: "Trilateration intersects circles and spheres of known radius." },
    { name: "Economics", use: "Equilibria where nonlinear supply and demand curves cross." }
  ],
  prereqWhy: {
    "a2-conic-sections": "Recognising each equation as a circle, ellipse, parabola or hyperbola tells you the shapes and so how many intersection points to expect.",
    "a1-sys-sub": "Substitution and elimination for linear systems are the same two methods used here, applied to x² and y² as well as x and y."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Precalculus", why: "Systems with exponential, logarithmic and trigonometric equations are solved the same way, often only numerically." },
    { field: "Calculus I", why: "Finding where curves meet sets the limits for the area between two curves." },
    { field: "Computer science", why: "Ray tracing, collision detection and geometric constraint solving all intersect lines with conics and quadric surfaces." }
  ],
  mistakes: [
    { wrong: `From <span class="m"><i>y</i><sup>2</sup> + <i>y</i> − 2 = 0</span> reporting the solutions as <span class="m"><i>y</i> = 1</span> and <span class="m"><i>y</i> = −2</span> only.`, fix: `A solution of a system is an ordered pair. Put each y back to find x: <span class="m">(±√<span class="ov">3</span>, 1)</span> and <span class="m">(0, −2)</span>, three points in all.` },
    { wrong: `Writing <span class="m"><i>x</i> = √<span class="ov">3</span></span> and forgetting <span class="m">−√<span class="ov">3</span></span> when <span class="m"><i>x</i><sup>2</sup> = 3</span>.`, fix: `<span class="m"><i>x</i><sup>2</sup> = 3</span> has two solutions, <span class="m"><i>x</i> = ±√<span class="ov">3</span></span>. Both conics are symmetric, so points come in mirror pairs.` },
    { wrong: `Keeping a point with <span class="m"><i>x</i><sup>2</sup> = −5</span> as a real intersection.`, fix: `No real <span class="m"><i>x</i></span> has a negative square. That value gives complex solutions only, and the graphs do not meet there.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>y</i> = 2<i>x</i> − 3</span> and <span class="m"><i>y</i> = <i>x</i><sup>2</sup> − 6</span>.`,
      a: `<span class="m"><i>x</i><sup>2</sup> − 6 = 2<i>x</i> − 3</span>, so <span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> − 3 = 0</span> and <span class="m">(<i>x</i> − 3)(<i>x</i> + 1) = 0</span>. <span class="m"><i>x</i> = 3</span> gives <span class="m"><i>y</i> = 3</span>; <span class="m"><i>x</i> = −1</span> gives <span class="m"><i>y</i> = −5</span>. Solutions <span class="m">(3, 3)</span> and <span class="m">(−1, −5)</span>.` },
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 13</span> and <span class="m"><i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 5</span> by elimination.`,
      a: `Add: <span class="m">2<i>x</i><sup>2</sup> = 18</span>, <span class="m"><i>x</i><sup>2</sup> = 9</span>. Then <span class="m"><i>y</i><sup>2</sup> = 13 − 9 = 4</span>. So <span class="m"><i>x</i> = ±3</span>, <span class="m"><i>y</i> = ±2</span>: four solutions <span class="m">(3, 2), (3, −2), (−3, 2), (−3, −2)</span>.` },
    { q: `Show that the line <span class="m"><i>y</i> = <i>x</i> + 4</span> misses the circle <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 4</span>.`,
      a: `<span class="m"><i>x</i><sup>2</sup> + (<i>x</i> + 4)<sup>2</sup> = 4</span> gives <span class="m">2<i>x</i><sup>2</sup> + 8<i>x</i> + 12 = 0</span>, or <span class="m"><i>x</i><sup>2</sup> + 4<i>x</i> + 6 = 0</span>. The discriminant is <span class="m">16 − 24 = −8 &lt; 0</span>, so there is no real solution. The complex solutions <span class="m"><i>x</i> = −2 ± <i>i</i>√<span class="ov">2</span></span> are not points of the graph.` },
    { q: `A rectangle has area 24 m² and perimeter 22 m. Find its length and width.`,
      a: `<span class="m"><i>xy</i> = 24</span> and <span class="m">2<i>x</i> + 2<i>y</i> = 22</span>, so <span class="m"><i>y</i> = 11 − <i>x</i></span>. Then <span class="m"><i>x</i>(11 − <i>x</i>) = 24</span>, <span class="m"><i>x</i><sup>2</sup> − 11<i>x</i> + 24 = 0</span>, <span class="m">(<i>x</i> − 3)(<i>x</i> − 8) = 0</span>. Either way the sides are 8 m and 3 m.` }
  ],
  origin: `<p>Systems like these are among the oldest problems in mathematics. Old Babylonian clay tablets from about 1800 BC ask for the length and width of a rectangle given its area and the sum or difference of its sides, and solve them by a step equal to completing the square. Diophantus, around 250 AD, solved many pairs of equations with squares. In 1779 Étienne Bézout published the theorem that two curves of degrees <span class="m"><i>m</i></span> and <span class="m"><i>n</i></span> meet in at most <span class="m"><i>mn</i></span> points unless they share a component, which is why two conics meet at most four times.</p>`
};
