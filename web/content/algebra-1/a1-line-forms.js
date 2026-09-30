window.ARITH = window.ARITH || {};

ARITH["a1-line-forms"] = {
  title: "Point-Slope & Standard Form",
  short: "Write a line as y − y₁ = m(x − x₁) or Ax + By = C",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Linear equations · forms of a line",
  hero: `<span class="m c1"><i>y</i> − <span class="c2"><i>y</i><sub>1</sub></span> = <i>m</i>(<i>x</i> − <span class="c2"><i>x</i><sub>1</sub></span>)</span> &nbsp;&nbsp; <span class="m c1"><i>Ax</i> + <i>By</i> = <i>C</i></span>`,
  lede: `Point-slope form writes a line straight from one point and the slope. Standard form writes it with integer coefficients and both variables on one side. Both describe the same line as <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>.`,
  plain: `<p>Often you do not know where a line crosses the <span class="m"><i>y</i></span>-axis. You know one point on it and its slope, or two points. <b>Point-slope form</b> lets you write the equation at once: if the line has slope <span class="m"><i>m</i></span> and passes through <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span>, its equation is <span class="m"><i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)</span>. It is just the slope formula with the denominator multiplied across.</p>
<p><b>Standard form</b> <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span> puts both variables on the left and a constant on the right, with whole-number coefficients and <span class="m"><i>A</i></span> not negative. It is handy for finding intercepts (set <span class="m"><i>x</i> = 0</span>, then <span class="m"><i>y</i> = 0</span>) and for problems like "adult tickets cost $12, child tickets $8, total $960", which give <span class="m">12<i>a</i> + 8<i>c</i> = 960</span> directly.</p>
<p>All three forms describe the same line, and you move between them with ordinary algebra. Standard form can also describe vertical lines, like <span class="m"><i>x</i> = −2</span>, which have no slope and so have no point-slope or slope-intercept form.</p>`,
  formal: `<p>For a line of slope <span class="m"><i>m</i></span> through <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span>, every other point <span class="m">(<i>x</i>, <i>y</i>)</span> on it satisfies <span class="m">(<i>y</i> − <i>y</i><sub>1</sub>)/(<i>x</i> − <i>x</i><sub>1</sub>) = <i>m</i></span>, which gives:</p>
<div class="display"><b>Point-slope form:</b> <i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)<br><b>Slope-intercept form:</b> <i>y</i> = <i>mx</i> + <i>b</i><br><b>Standard form:</b> <i>Ax</i> + <i>By</i> = <i>C</i>, &nbsp;<span class="dim"><i>A</i>, <i>B</i>, <i>C</i> integers, <i>A</i> ≥ 0, <i>A</i> and <i>B</i> not both 0</span></div>
<p>If <span class="m"><i>B</i> ≠ 0</span>, the standard-form line has slope <span class="m">−<i>A</i>/<i>B</i></span> and y-intercept <span class="m">(0, <i>C</i>/<i>B</i>)</span>; if <span class="m"><i>A</i> ≠ 0</span>, its x-intercept is <span class="m">(<i>C</i>/<i>A</i>, 0)</span>. If <span class="m"><i>B</i> = 0</span> the line is vertical, <span class="m"><i>x</i> = <i>C</i>/<i>A</i></span>. Many texts also ask that <span class="m"><i>A</i>, <i>B</i>, <i>C</i></span> have no common factor greater than 1.</p>`,
  legend: [
    { c: "c2", sym: `(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)`, name: "Point 1", desc: "A known point on the line. It fills the x₁ and y₁ slots in point-slope form." },
    { c: "c3", sym: `(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)`, name: "Point 2", desc: "A second known point, used with point 1 to compute the slope." },
    { c: "c1", sym: `<i>Ax</i> + <i>By</i> = <i>C</i>`, name: "The line", desc: "The same line shown in slope-intercept, point-slope and standard form at once." }
  ],
  steps: { title: "How to write a line in point-slope and standard form", items: [
    `If you have two points, find the slope <span class="m"><i>m</i> = (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)</span>. If the run is 0, the line is vertical: <span class="m"><i>x</i> = <i>x</i><sub>1</sub></span>.`,
    `Substitute <span class="m"><i>m</i></span> and one point into <span class="m"><i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)</span>. Watch the signs when a coordinate is negative.`,
    `For slope-intercept form, distribute <span class="m"><i>m</i></span> and solve for <span class="m"><i>y</i></span>.`,
    `For standard form, move the <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> terms to the left and the constant to the right.`,
    `Multiply through by the LCD to clear fractions and decimals, and by −1 if needed so that <span class="m"><i>A</i> ≥ 0</span>.`,
    `Check that both points satisfy the final equation.`
  ] },
  example: {
    prompt: `A one-day van rental costs $87 if you drive 120 miles and $107 if you drive 200 miles, with cost a linear function of miles. Write the cost equation in point-slope, slope-intercept and standard form.`,
    lines: [
      { math: `<span class="m"><i>m</i> = <span class="fr"><span><span class="c3">107</span> − <span class="c2">87</span></span><span><span class="c3">200</span> − <span class="c2">120</span></span></span> = <span class="fr"><span>20</span><span>80</span></span> = 0.25</span>`, note: "The slope is the charge per mile: $0.25." },
      { math: `<span class="m"><i>y</i> − <span class="c2">87</span> = 0.25(<i>x</i> − <span class="c2">120</span>)</span>`, note: "Point-slope form using the point (120, 87)." },
      { math: `<span class="m"><i>y</i> = 0.25<i>x</i> − 30 + 87 = 0.25<i>x</i> + 57</span>`, note: "Distribute and add 87: a $57 daily fee plus $0.25 per mile." },
      { math: `<span class="m">4<i>y</i> = <i>x</i> + 228</span>`, note: "Multiply by 4 to clear the decimal." },
      { math: `<span class="m c1"><i>x</i> − 4<i>y</i> = −228</span>`, note: "Standard form: variables on the left, A = 1 is positive." },
      { math: `<span class="m">200 − 4(107) = 200 − 428 = −228 ✓</span>`, note: "Check with the other point, (200, 107)." }
    ],
    answer: `Point-slope <span class="m"><i>y</i> − 87 = 0.25(<i>x</i> − 120)</span>, slope-intercept <span class="m"><i>y</i> = 0.25<i>x</i> + 57</span>, standard <span class="m"><i>x</i> − 4<i>y</i> = −228</span>.`
  },
  why: `<p>Data rarely hand you the y-intercept. You usually have two measurements, and point-slope form turns them into an equation in one step. Standard form matches how many constraints are stated, such as a total budget split between two items, and makes intercepts easy to read.</p>
<p>Being able to move between forms is what you need for the next topics. Systems of equations are often solved from standard form, parallel and perpendicular lines are written in point-slope form, and in calculus the tangent line at a point is written <span class="m"><i>y</i> − <i>f</i>(<i>a</i>) = <i>f</i> ′(<i>a</i>)(<i>x</i> − <i>a</i>)</span>.</p>`,
  careers: [
    { role: "Operations analyst", use: "Writes a linear cost model from two observed cost-and-volume data points using point-slope form." },
    { role: "Event manager", use: "States a ticket budget as a standard-form constraint such as 12a + 8c = 960 and reads off the extreme cases from the intercepts." },
    { role: "Surveyor", use: "Writes the equation of a property boundary through two surveyed corner points." },
    { role: "Dietitian", use: "Uses a standard-form constraint such as 4p + 9f = 600 for calories from protein and fat grams in a meal plan." },
    { role: "Mechanical engineer", use: "Writes the tangent-line (linear) approximation of a sensor's response near an operating point in point-slope form." }
  ],
  life: [
    "Working out a rental or taxi pricing rule from two receipts",
    "Splitting a fixed budget between two kinds of items",
    "Estimating when a steadily filling tank will be full from two readings",
    "Planning how many hours at two different jobs reach an earnings target",
    "Converting a map route between two points into a straight-line equation"
  ],
  fields: [
    { name: "Economics", use: "Budget lines are written in standard form, p₁x + p₂y = I, with intercepts showing the most of each good you can buy." },
    { name: "Physics", use: "Linear relationships found from two measurements are written in point-slope form." },
    { name: "Operations research", use: "Linear programming constraints are written as standard-form equations and inequalities." },
    { name: "Computer graphics", use: "Lines and edges are stored in the form Ax + By = C to test which side of an edge a pixel is on." }
  ],
  prereqWhy: {
    "a1-slope-forms": "You need to compute slope and use slope-intercept form, the form the others are converted to and from."
  },
  unlocksWhy: {
    "a1-par-perp": "Lines parallel or perpendicular to a given line through a given point are written in point-slope form.",
    "a1-sys-graph": "Systems are often given in standard form and converted to slope-intercept form to graph.",
    "a1-linear-models": "A model line through two data points is written with point-slope form before being simplified."
  },
  beyond: [
    { field: "Calculus I", why: "The tangent line at x = a is written in point-slope form with slope f′(a)." },
    { field: "Linear Algebra", why: "Standard form Ax + By = C is one row of a linear system, and its coefficients become matrix entries." },
    { field: "Economics", why: "Budget constraints and isocost lines are standard-form linear equations." }
  ],
  mistakes: [
    { wrong: `Sign slips with a negative coordinate: through <span class="m">(−1, 6)</span> writing <span class="m"><i>y</i> − 6 = −2(<i>x</i> − 1)</span>.`, fix: `Subtract the coordinate itself: <span class="m"><i>x</i> − (−1) = <i>x</i> + 1</span>, so <span class="m"><i>y</i> − 6 = −2(<i>x</i> + 1)</span>.` },
    { wrong: `Leaving standard form with fractions or a negative <span class="m"><i>A</i></span>: <span class="m"><span class="fr"><span>2</span><span>3</span></span><i>x</i> + <i>y</i> = 5</span> or <span class="m">−2<i>x</i> − 3<i>y</i> = −15</span>.`, fix: `Multiply by the LCD, and by −1 if needed: <span class="m">2<i>x</i> + 3<i>y</i> = 15</span>.` },
    { wrong: `Trying to write a vertical line through <span class="m">(−2, 7)</span> and <span class="m">(−2, −1)</span> in point-slope form with <span class="m"><i>m</i> = 0</span>.`, fix: `The run is 0, so the slope is undefined, not 0. The equation is <span class="m"><i>x</i> = −2</span>, which is standard form with <span class="m"><i>A</i> = 1</span>, <span class="m"><i>B</i> = 0</span>, <span class="m"><i>C</i> = −2</span>.` }
  ],
  practice: [
    { q: `Write the line with slope 4 through <span class="m">(3, −2)</span> in point-slope and slope-intercept form.`, a: `<span class="m"><i>y</i> + 2 = 4(<i>x</i> − 3)</span>. Then <span class="m"><i>y</i> = 4<i>x</i> − 12 − 2 = 4<i>x</i> − 14</span>.` },
    { q: `Write <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 5</span> in standard form.`, a: `Multiply by 3: <span class="m">3<i>y</i> = −2<i>x</i> + 15</span>, so <span class="m">2<i>x</i> + 3<i>y</i> = 15</span>.` },
    { q: `Find the line through <span class="m">(−1, 6)</span> and <span class="m">(3, −2)</span> in all three forms.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>−2 − 6</span><span>3 − (−1)</span></span> = −2</span>. Point-slope: <span class="m"><i>y</i> − 6 = −2(<i>x</i> + 1)</span>. Slope-intercept: <span class="m"><i>y</i> = −2<i>x</i> + 4</span>. Standard: <span class="m">2<i>x</i> + <i>y</i> = 4</span>.` },
    { q: `Find the intercepts and slope of <span class="m">3<i>x</i> − 4<i>y</i> = 12</span>, and write the line through <span class="m">(−2, 7)</span> and <span class="m">(−2, −1)</span>.`, a: `x-intercept: <span class="m">3<i>x</i> = 12</span>, so <span class="m">(4, 0)</span>. y-intercept: <span class="m">−4<i>y</i> = 12</span>, so <span class="m">(0, −3)</span>. Slope <span class="m">−<i>A</i>/<i>B</i> = <span class="fr"><span>3</span><span>4</span></span></span>. The second line is vertical (run 0): <span class="m"><i>x</i> = −2</span>.` }
  ]
};
