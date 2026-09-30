window.ARITH = window.ARITH || {};

ARITH["a1-sys-graph"] = {
  title: "Systems of Equations by Graphing",
  short: "Where two lines cross is the solution to both",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Systems · two lines, one point",
  hero: `<span class="m"><span class="c2"><i>y</i> = <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub></span> &nbsp;∩&nbsp; <span class="c3"><i>y</i> = <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub></span> = <span class="c1">(<i>x</i>, <i>y</i>)</span></span>`,
  lede: `A system of linear equations asks for the ordered pairs that satisfy every equation at once. On a graph, that is where the lines meet: one point, no point, or every point of a shared line.`,
  plain: `<p>Each linear equation in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> has infinitely many solutions, and they all lie on its line. When you have two equations, you want the pairs that work in <b>both</b>. Those are the points that lie on both lines, so you graph the two lines and look for where they cross.</p>
<p>There are only three possibilities. The lines cross once, giving exactly one solution. The lines are parallel and never cross, so there is no solution. Or the two equations describe the same line, and every point on it is a solution. You can tell which case you have before graphing: different slopes mean one solution; the same slope with different intercepts means none; the same slope and the same intercept means infinitely many.</p>
<p>Graphing is the clearest way to see what a system means, but it is only as accurate as your drawing. A crossing at <span class="m">(2.4, 3.7)</span> is hard to read off graph paper. That is why the algebraic methods, substitution and elimination, come next. Always check a graphed answer by substituting it into both equations.</p>`,
  formal: `<p>A <b>system of two linear equations in two variables</b> is a pair <span class="m"><i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> = <i>c</i><sub>1</sub></span>, <span class="m"><i>a</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub><i>y</i> = <i>c</i><sub>2</sub></span>. A <b>solution</b> is an ordered pair that satisfies both equations, and the <b>solution set</b> is the intersection of the two lines.</p>
<div class="display">Different slopes → one solution &nbsp;<span class="dim">(consistent, independent)</span><br>Same slope, different intercepts → no solution, ∅ &nbsp;<span class="dim">(inconsistent)</span><br>Same line → infinitely many solutions &nbsp;<span class="dim">(consistent, dependent)</span></div>
<p>A system is <b>consistent</b> if it has at least one solution and <b>inconsistent</b> if it has none. Consistent equations are <b>dependent</b> if they describe the same line, so that the solution set is <span class="m">{(<i>x</i>, <i>y</i>) | <i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> = <i>c</i><sub>1</sub>}</span>, and <b>independent</b> otherwise.</p>`,
  legend: [
    { c: "c2", sym: `<i>y</i> = <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub>`, name: "Line 1", desc: "Every point on this line satisfies the first equation." },
    { c: "c3", sym: `<i>y</i> = <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub>`, name: "Line 2", desc: "Every point on this line satisfies the second equation." },
    { c: "c1", sym: `(<i>x</i>, <i>y</i>)`, name: "Intersection", desc: "The point on both lines, which is the solution of the system. It is missing when the lines are parallel." }
  ],
  steps: { title: "How to solve a system by graphing", items: [
    `Write each equation in slope-intercept form <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, or find its two intercepts if it is in standard form.`,
    `Compare slopes and intercepts to predict the case: one solution, none, or infinitely many.`,
    `Graph both lines carefully on the same axes, using a ruler and a scale that fits the numbers.`,
    `Read the coordinates of the intersection point.`,
    `Check by substituting the point into both original equations. If the lines are parallel, write "no solution" (∅); if they coincide, describe the solution set as the points of that line.`
  ] },
  example: {
    prompt: `Gym A charges a $100 joining fee plus $20 per month. Gym B has no joining fee and charges $45 per month. After how many months have both cost the same total, and what is that total?`,
    lines: [
      { math: `<span class="m c2"><i>y</i> = 20<i>x</i> + 100</span>`, note: "Gym A: total cost y after x months. Slope 20, y-intercept 100." },
      { math: `<span class="m c3"><i>y</i> = 45<i>x</i></span>`, note: "Gym B: slope 45, y-intercept 0." },
      { math: `<span class="m">20 ≠ 45</span>`, note: "Different slopes, so the lines cross exactly once." },
      { math: `<span class="m"><i>x</i> = 2: &nbsp;140 vs 90 &nbsp;&nbsp; <i>x</i> = 4: &nbsp;180 vs 180</span>`, note: "Plotting points from each line, they meet at x = 4." },
      { math: `<span class="m c1">(4, 180)</span>`, note: "Read the intersection from the graph." },
      { math: `<span class="m">20(4) + 100 = 180 ✓ &nbsp;&nbsp; 45(4) = 180 ✓</span>`, note: "The point satisfies both equations." }
    ],
    answer: `After <span class="m">4</span> months both gyms have cost <span class="m">$180</span>. Before that Gym B is cheaper; after that Gym A is cheaper.`
  },
  why: `<p>Many decisions come down to comparing two linear costs: two phone plans, leasing versus buying, a job with a higher base versus one with higher commission. The intersection is the break-even point, and the graph shows at a glance which option wins on each side of it.</p>
<p>Systems are also how you find a single answer when two conditions must hold at once, such as supply equal to demand, or a mixture that meets both a volume and a concentration target. The graph is the picture behind every algebraic method you will use later.</p>`,
  careers: [
    { role: "Small-business owner", use: "Graphs cost and revenue lines to find the break-even number of units where profit starts." },
    { role: "Economist", use: "Finds market equilibrium as the intersection of a linear supply curve and a linear demand curve." },
    { role: "Logistics planner", use: "Compares two carriers' rate lines (fixed fee plus per-mile charge) to see which is cheaper for a given distance." },
    { role: "Air traffic controller", use: "Uses projected straight-line tracks of two aircraft to see whether and where their paths cross." },
    { role: "Financial advisor", use: "Shows a client where two savings or loan plans reach the same total, using a graph of both." }
  ],
  life: [
    "Choosing between two phone or streaming plans with different fixed and monthly costs",
    "Deciding when buying a bike becomes cheaper than paying per ride",
    "Working out when a slower runner with a head start will be caught",
    "Comparing two job offers with different base pay and commission",
    "Seeing whether renting or buying a tool makes sense for a project"
  ],
  fields: [
    { name: "Economics", use: "Equilibrium price and quantity are the intersection of supply and demand." },
    { name: "Physics", use: "The time and place two objects meet is the intersection of their position-time graphs." },
    { name: "Business", use: "Break-even analysis intersects the cost and revenue lines." },
    { name: "Chemistry", use: "Two linear calibration or concentration relationships are compared by finding where they agree." }
  ],
  prereqWhy: {
    "a1-line-forms": "You need to turn each equation, often given in standard form, into a graphable line and read slopes and intercepts."
  },
  unlocksWhy: {
    "a1-sys-ineq": "A system of inequalities is graphed the same way, with shaded half-planes instead of single lines.",
    "a1-sys-sub": "Substitution finds the same intersection point exactly, and the graph tells you what kind of answer to expect."
  },
  beyond: [
    { field: "Linear Algebra", why: "A system Ax = b is studied through the geometry of intersecting lines, planes and hyperplanes." },
    { field: "Economics", why: "Equilibrium models in micro- and macroeconomics are systems of equations solved at an intersection." },
    { field: "Precalculus", why: "Solving f(x) = g(x) graphically for curves generalises the intersection idea to nonlinear functions." }
  ],
  mistakes: [
    { wrong: `Reading an intersection from a rough sketch as <span class="m">(2, 3)</span> and not checking it.`, fix: `Substitute into both equations. If either fails, the true point is nearby and needs an algebraic method or a more careful graph.` },
    { wrong: `Graphing <span class="m">2<i>x</i> + <i>y</i> = 6</span> with slope 2.`, fix: `Solve for <span class="m"><i>y</i></span>: <span class="m"><i>y</i> = −2<i>x</i> + 6</span>, so the slope is <span class="m">−2</span>. Or plot the intercepts <span class="m">(3, 0)</span> and <span class="m">(0, 6)</span>.` },
    { wrong: `For two equations of the same line, writing the answer as "infinitely many solutions: all real numbers".`, fix: `Not every pair works, only pairs on that line. Write the solution set as <span class="m">{(<i>x</i>, <i>y</i>) | <i>x</i> − 2<i>y</i> = 4}</span>, for example.` }
  ],
  practice: [
    { q: `Is <span class="m">(2, −1)</span> a solution of the system <span class="m"><i>x</i> + <i>y</i> = 1</span>, <span class="m">2<i>x</i> − <i>y</i> = 5</span>?`, a: `<span class="m">2 + (−1) = 1</span> ✓ and <span class="m">2(2) − (−1) = 5</span> ✓. Yes, it satisfies both.` },
    { q: `Solve by graphing: <span class="m"><i>y</i> = 2<i>x</i> − 3</span> and <span class="m"><i>y</i> = −<i>x</i> + 3</span>.`, a: `The first line starts at <span class="m">(0, −3)</span> and rises 2 per unit; the second starts at <span class="m">(0, 3)</span> and falls 1 per unit. They meet at <span class="m">(2, 1)</span>. Check: <span class="m">2(2) − 3 = 1</span> and <span class="m">−2 + 3 = 1</span> ✓.` },
    { q: `Classify the system <span class="m"><i>y</i> = 3<i>x</i> + 2</span>, <span class="m">6<i>x</i> − 2<i>y</i> = 8</span>.`, a: `The second equation is <span class="m"><i>y</i> = 3<i>x</i> − 4</span>. Same slope, different intercepts: parallel lines, no solution (∅). The system is inconsistent.` },
    { q: `Classify the system <span class="m">2<i>x</i> − 4<i>y</i> = 8</span>, <span class="m"><i>x</i> = 2<i>y</i> + 4</span>, and describe its solution set.`, a: `Both become <span class="m"><i>y</i> = <span class="fr"><span>1</span><span>2</span></span><i>x</i> − 2</span>. Same line: infinitely many solutions, consistent and dependent. Solution set <span class="m">{(<i>x</i>, <i>y</i>) | <i>x</i> − 2<i>y</i> = 4}</span>.` }
  ],
  origin: `Solving a system by graphing depends on coordinate geometry, which René Descartes and Pierre de Fermat developed independently in the 1630s. Systems of linear equations themselves are much older: the Chinese text <i>The Nine Chapters on the Mathematical Art</i>, compiled by about the first century CE, solves them with counting rods.`
};
