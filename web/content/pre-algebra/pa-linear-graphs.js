window.ARITH = window.ARITH || {};

ARITH["pa-linear-graphs"] = {
  title: "Graphing Linear Equations",
  short: "Every solution of y = mx + b is a point on one line",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 6,
  voice: "mixed",
  eyebrow: "Linear relationships · equations as lines",
  hero: `<span class="m c1"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>`,
  lede: `The solutions of a linear equation in two variables fill a straight <span class="m c1">line</span>. In <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, <span class="m c3"><i>m</i></span> is the slope and <span class="m c2"><i>b</i></span> is where the line crosses the <span class="m"><i>y</i></span>-axis.`,
  plain: `<p>An equation like <span class="m"><i>y</i> = 2<i>x</i> − 1</span> has lots of solutions. Each one is a pair of numbers. If <span class="m"><i>x</i> = 2</span>, then <span class="m"><i>y</i> = 3</span>, so <span class="m">(2, 3)</span> is a solution. Plot a few of these pairs and they line up perfectly. Draw the line through them and you have the graph of the equation. Every point on the line is a solution, and every solution is on the line.</p>
<p>The form <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> tells you how to draw it fast. The number <span class="m"><i>b</i></span> is the starting height, where the line crosses the <span class="m"><i>y</i></span>-axis. The number <span class="m"><i>m</i></span> is the slope: from any point, go across 1 and up <span class="m"><i>m</i></span>.</p>
<p>Two points are special. The <b><i>y</i>-intercept</b> is where the line crosses the <span class="m"><i>y</i></span>-axis, so <span class="m"><i>x</i> = 0</span> there. The <b><i>x</i>-intercept</b> is where it crosses the <span class="m"><i>x</i></span>-axis, so <span class="m"><i>y</i> = 0</span> there. In a real problem these often mean "the starting amount" and "when it runs out".</p>`,
  formal: `<p>A <b>linear equation in two variables</b> can be written in <b>standard form</b> <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span>, where <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span> are not both zero. An ordered pair <span class="m">(<i>x</i>, <i>y</i>)</span> is a <b>solution</b> if it makes the equation true, and the graph of the equation, the set of all its solutions, is a straight line. When <span class="m"><i>B</i> ≠ 0</span> the equation can be solved for <span class="m"><i>y</i></span>:</p>
<div class="display"><b>Slope-intercept form:</b> <span class="c1"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>, &nbsp;slope <span class="c3"><i>m</i></span>, &nbsp;<i>y</i>-intercept (0, <span class="c2"><i>b</i></span>)<br><b><i>x</i>-intercept:</b> set <i>y</i> = 0 and solve, giving (<span class="c4"><i>a</i></span>, 0); for <i>m</i> ≠ 0, <span class="c4"><i>a</i></span> = −<i>b</i>/<i>m</i><br><b>Horizontal line:</b> <i>y</i> = <i>b</i> (slope 0) &nbsp;&nbsp; <b>Vertical line:</b> <i>x</i> = <i>a</i> (slope undefined)</div>
<p>A line can be graphed by <b>plotting points</b> from a table of values (at least three, the third as a check), by <b>intercepts</b>, or by starting at <span class="m">(0, <i>b</i>)</span> and using the <b>slope</b> as rise over run. A vertical line <span class="m"><i>x</i> = <i>a</i></span> is not of the form <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> and is not the graph of a function.</p>`,
  legend: [
    { c: "c3", sym: `<i>m</i>`, name: "Slope", desc: "Rise over run. From any point on the line, moving 1 unit right changes y by m." },
    { c: "c2", sym: `<i>b</i>`, name: "y-intercept", desc: "The value of y when x = 0, so the line crosses the y-axis at (0, b)." },
    { c: "c1", sym: `<i>y</i> = <i>mx</i> + <i>b</i>`, name: "The line", desc: "The set of all solutions (x, y) of the equation." },
    { c: "c4", sym: `(<i>a</i>, 0)`, name: "x-intercept", desc: "Where the line crosses the x-axis, found by setting y = 0." }
  ] ,
  steps: { title: "How to graph a linear equation", items: [
    `If needed, solve the equation for <span class="m"><i>y</i></span> to get <span class="m"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>.`,
    `Plot the <span class="m c2"><i>y</i>-intercept</span> <span class="m">(0, <i>b</i>)</span>.`,
    `Use the <span class="m c3">slope</span> as rise over run to plot a second point, and a third as a check.`,
    `Or find both intercepts: set <span class="m"><i>x</i> = 0</span> to get the <span class="m"><i>y</i></span>-intercept and <span class="m"><i>y</i> = 0</span> to get the <span class="m c4"><i>x</i>-intercept</span>.`,
    `Draw the <span class="m c1">line</span> through the points, extend it across the grid, and check one point in the original equation.`
  ] },
  example: {
    prompt: `A candle is 30 cm tall and burns down 2.5 cm per hour. Its height after <span class="m"><i>t</i></span> hours is <span class="m"><i>h</i> = −2.5<i>t</i> + 30</span>. Graph the relationship and find when the candle burns out.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>m</i> = −2.5</span>, &nbsp;<span class="c2"><i>b</i> = 30</span></span>`, note: "Read the slope and intercept: the height drops 2.5 cm each hour from a start of 30 cm." },
      { math: `<span class="m"><span class="c2">(0, 30)</span></span>`, note: "The vertical intercept: the height at time 0." },
      { math: `<span class="m"><i>t</i> = 4: &nbsp;<i>h</i> = −2.5(4) + 30 = 20, &nbsp;point (4, 20)</span>`, note: "A second point from the table of values." },
      { math: `<span class="m">0 = −2.5<i>t</i> + 30 &nbsp;⇒&nbsp; 2.5<i>t</i> = 30 &nbsp;⇒&nbsp; <i>t</i> = 12</span>`, note: "Set the height to 0 to find the horizontal intercept." },
      { math: `<span class="m"><span class="c4">(12, 0)</span></span>`, note: "The horizontal intercept: the candle is gone after 12 hours." },
      { math: `<span class="m">−2.5(12) + 30 = 0 ✓</span>`, note: "Check the intercept in the equation, then draw the line segment from (0, 30) to (12, 0)." }
    ],
    answer: `The graph is a line segment from <span class="m">(0, 30)</span> to <span class="m">(12, 0)</span>. The candle burns out after <span class="m">12</span> hours.`
  },
  why: `<p>A graph shows the whole relationship at a glance. You can see where a quantity starts, how fast it changes, when it reaches a target and when it runs out. Budgets, fuel, loan balances and phone plans all show up as lines, and comparing two lines on the same axes shows which option is better and when.</p>
<p>Graphing is also the bridge between algebra and geometry. It leads straight into functions, systems of equations (where lines cross), linear regression in statistics and, eventually, the tangent lines of calculus.</p>`,
  careers: [
    { role: "Data analyst", use: "Plots a linear trend line through data and reads its slope and intercept to report growth per month and the starting level." },
    { role: "Accountant", use: "Graphs straight-line depreciation of an asset, where the vertical intercept is the purchase cost and the slope is the yearly loss in value." },
    { role: "Medical laboratory scientist", use: "Builds a linear calibration curve from standards and reads unknown sample concentrations from the line." },
    { role: "Utility rate analyst", use: "Graphs bills as a fixed customer charge plus a price per kilowatt-hour to compare rate plans." },
    { role: "Operations manager", use: "Graphs cost and revenue lines to find the break-even quantity where they cross." },
    { role: "Physics teacher", use: "Uses position-time graphs from motion sensors, reading velocity as slope and starting position as intercept." }
  ],
  life: [
    "Reading how a loan or savings balance changes over time",
    "Comparing two phone or subscription plans on one graph",
    "Estimating when your car will need fuel from a steady rate of use",
    "Tracking a steady weight-loss or training goal on a chart",
    "Converting temperatures with a Celsius-Fahrenheit line"
  ],
  fields: [
    { name: "Physics", use: "Constant-velocity motion is graphed as a line with slope equal to velocity." },
    { name: "Chemistry", use: "Beer's law gives a linear graph of absorbance against concentration used to identify unknowns." },
    { name: "Economics", use: "Linear supply, demand, cost and revenue models are analysed by graphing and finding intercepts and intersections." },
    { name: "Statistics", use: "Scatter plots are summarised with a fitted line whose slope and intercept are interpreted in context." }
  ],
  prereqWhy: {
    "pa-slope": "The slope m tells you how far to rise for each run when drawing the line from its intercept.",
    "pa-two-step": "Finding an intercept or rewriting 3x + 4y = 12 as y = −(3/4)x + 3 means solving a two-step equation."
  },
  unlocksWhy: {
    "a1-functions": "A non-vertical line is the graph of a linear function f(x) = mx + b, the first family studied with function notation, domain and range."
  },
  beyond: [
    { field: "Algebra I", why: "Systems of linear equations are solved graphically by finding where two lines intersect." },
    { field: "Statistics", why: "Linear regression fits y = mx + b to data and interprets the slope and intercept." },
    { field: "Calculus I", why: "The tangent line at a point is a linear graph that approximates a curve near that point." },
    { field: "Economics", why: "Supply-and-demand and cost-revenue analysis rely on graphs of linear equations." }
  ],
  mistakes: [
    { wrong: `Plotting the <span class="m"><i>y</i></span>-intercept on the <span class="m"><i>x</i></span>-axis: graphing <span class="m"><i>y</i> = 2<i>x</i> + 3</span> through <span class="m">(3, 0)</span>.`, fix: `The <span class="m"><i>y</i></span>-intercept has <span class="m"><i>x</i> = 0</span>: plot <span class="m">(0, 3)</span>.` },
    { wrong: `Reading the slope of <span class="m">3<i>x</i> + 4<i>y</i> = 12</span> as 3.`, fix: `Solve for <span class="m"><i>y</i></span> first: <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>4</span></span><i>x</i> + 3</span>, so <span class="m"><i>m</i> = −<span class="fr"><span>3</span><span>4</span></span></span>.` },
    { wrong: `Mixing up <span class="m"><i>x</i> = 4</span> and <span class="m"><i>y</i> = 4</span>, or graphing <span class="m"><i>x</i> = 4</span> as a single point.`, fix: `<span class="m"><i>x</i> = 4</span> is the vertical line of all points with <span class="m"><i>x</i></span>-coordinate 4. <span class="m"><i>y</i> = 4</span> is a horizontal line.` },
    { wrong: `Using a negative slope as "up": for <span class="m"><i>m</i> = −<span class="fr"><span>2</span><span>3</span></span></span>, going up 2 and right 3.`, fix: `A negative slope means down 2 and right 3 (or up 2 and left 3).` }
  ],
  practice: [
    { q: `Make a table for <span class="m"><i>y</i> = 2<i>x</i> − 1</span> using <span class="m"><i>x</i> = −1, 0, 2</span>.`, a: `<span class="m">(−1, −3)</span>, <span class="m">(0, −1)</span>, <span class="m">(2, 3)</span>. The three points lie on one line with slope 2.` },
    { q: `Find the intercepts of <span class="m">3<i>x</i> + 4<i>y</i> = 12</span>.`, a: `<span class="m"><i>y</i> = 0</span>: <span class="m">3<i>x</i> = 12</span>, so the <span class="m"><i>x</i></span>-intercept is <span class="m">(4, 0)</span>. <span class="m"><i>x</i> = 0</span>: <span class="m">4<i>y</i> = 12</span>, so the <span class="m"><i>y</i></span>-intercept is <span class="m">(0, 3)</span>.` },
    { q: `Graph <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 4</span> using the slope and <span class="m"><i>y</i></span>-intercept. Name two more points and the <span class="m"><i>x</i></span>-intercept.`, a: `Start at <span class="m">(0, 4)</span>. Down 2, right 3 gives <span class="m">(3, 2)</span>, then <span class="m">(6, 0)</span>. The <span class="m"><i>x</i></span>-intercept is <span class="m">(6, 0)</span>: <span class="m">−<span class="fr"><span>2</span><span>3</span></span>(6) + 4 = 0</span>.` },
    { q: `Write <span class="m">4<i>x</i> − 2<i>y</i> = 8</span> in slope-intercept form. Give the slope and both intercepts. Then describe the graph of <span class="m">2<i>y</i> − 6 = 0</span>.`, a: `<span class="m">−2<i>y</i> = −4<i>x</i> + 8</span>, so <span class="m"><i>y</i> = 2<i>x</i> − 4</span>: slope 2, <span class="m"><i>y</i></span>-intercept <span class="m">(0, −4)</span>, <span class="m"><i>x</i></span>-intercept <span class="m">(2, 0)</span>. <span class="m">2<i>y</i> − 6 = 0</span> means <span class="m"><i>y</i> = 3</span>, a horizontal line with slope 0.` }
  ],
  origin: `Pierre de Fermat and René Descartes developed coordinate geometry independently in the 1630s. Fermat's <i>Ad locos planos et solidos isagoge</i>, circulated in manuscript around 1636, shows that an equation of the first degree in two unknowns describes a straight line, and Descartes published his method in <i>La Géométrie</i> (1637).`
};
