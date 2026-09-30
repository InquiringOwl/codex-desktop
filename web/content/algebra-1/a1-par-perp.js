window.ARITH = window.ARITH || {};

ARITH["a1-par-perp"] = {
  title: "Parallel & Perpendicular Lines",
  short: "Equal slopes, or slopes whose product is −1",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Linear equations · comparing slopes",
  hero: `<span class="m"><span class="c3"><i>m</i><sub>∥</sub></span> = <span class="c2"><i>m</i></span> &nbsp;&nbsp;&nbsp; <span class="c1"><i>m</i><sub>⊥</sub></span> = −<span class="fr"><span>1</span><span class="c2"><i>m</i></span></span></span>`,
  lede: `Two lines are parallel when they have the same slope and never meet. They are perpendicular when they meet at a right angle, which happens exactly when their slopes are negative reciprocals.`,
  plain: `<p>Slope measures steepness and direction. Two different lines with the same slope rise at the same rate forever, so the gap between them never changes and they never cross. Those are <b>parallel lines</b>. The lines <span class="m"><i>y</i> = 2<i>x</i> + 1</span> and <span class="m"><i>y</i> = 2<i>x</i> − 4</span> are parallel: same slope 2, different y-intercepts.</p>
<p><b>Perpendicular lines</b> cross at a right angle. Turn a slope triangle a quarter turn and "rise 2, run 1" becomes "rise 1, run −2" (or "rise −1, run 2"). The new slope is <span class="m">−1/2</span>: flip the fraction and change its sign. That is the <b>negative reciprocal</b>. Check by multiplying: <span class="m">2 × (−1/2) = −1</span>.</p>
<p>Vertical and horizontal lines are the exception, because a vertical line has no slope. Any two vertical lines are parallel, any two horizontal lines are parallel, and every vertical line is perpendicular to every horizontal line.</p>`,
  formal: `<p>Let <span class="m"><i>ℓ</i><sub>1</sub></span> and <span class="m"><i>ℓ</i><sub>2</sub></span> be distinct non-vertical lines with slopes <span class="m"><i>m</i><sub>1</sub></span> and <span class="m"><i>m</i><sub>2</sub></span>.</p>
<div class="display"><i>ℓ</i><sub>1</sub> ∥ <i>ℓ</i><sub>2</sub> &nbsp;⟺&nbsp; <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub><br><i>ℓ</i><sub>1</sub> ⊥ <i>ℓ</i><sub>2</sub> &nbsp;⟺&nbsp; <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1 &nbsp;&nbsp;<span class="dim">(equivalently <i>m</i><sub>2</sub> = −1/<i>m</i><sub>1</sub>, <i>m</i><sub>1</sub> ≠ 0)</span></div>
<p>Two vertical lines <span class="m"><i>x</i> = <i>h</i><sub>1</sub></span>, <span class="m"><i>x</i> = <i>h</i><sub>2</sub></span> with <span class="m"><i>h</i><sub>1</sub> ≠ <i>h</i><sub>2</sub></span> are parallel, and a vertical line is perpendicular to a horizontal line. For lines in standard form <span class="m"><i>A</i><sub>1</sub><i>x</i> + <i>B</i><sub>1</sub><i>y</i> = <i>C</i><sub>1</sub></span> and <span class="m"><i>A</i><sub>2</sub><i>x</i> + <i>B</i><sub>2</sub><i>y</i> = <i>C</i><sub>2</sub></span>, the lines are perpendicular exactly when <span class="m"><i>A</i><sub>1</sub><i>A</i><sub>2</sub> + <i>B</i><sub>1</sub><i>B</i><sub>2</sub> = 0</span>, which covers the vertical and horizontal cases too.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i>`, name: "Base line", desc: "The given line and its slope. Everything else is measured against it." },
    { c: "c3", sym: `<i>m</i><sub>∥</sub> = <i>m</i>`, name: "Parallel line", desc: "Same slope as the base line, through the chosen point. It never meets the base line." },
    { c: "c1", sym: `<i>m</i><sub>⊥</sub> = −1/<i>m</i>`, name: "Perpendicular line", desc: "Slope is the negative reciprocal of the base slope. It crosses the base line at a right angle." }
  ],
  steps: { title: "How to write a parallel or perpendicular line through a point", items: [
    `Find the slope <span class="m"><i>m</i></span> of the given line. If it is in standard form, solve for <span class="m"><i>y</i></span> or use <span class="m"><i>m</i> = −<i>A</i>/<i>B</i></span>.`,
    `For a parallel line, use the same slope <span class="m"><i>m</i></span>. For a perpendicular line, use <span class="m">−1/<i>m</i></span>: flip the fraction and change the sign.`,
    `If the given line is vertical or horizontal, skip the slope: parallel to <span class="m"><i>x</i> = <i>h</i></span> is another vertical line, perpendicular to it is a horizontal line <span class="m"><i>y</i> = <i>k</i></span>.`,
    `Substitute the new slope and the given point <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> into <span class="m"><i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)</span>.`,
    `Rewrite in the form asked for, and check that the point satisfies it and that the slopes multiply to −1 (perpendicular) or match (parallel).`
  ] },
  example: {
    prompt: `On a town planning grid measured in blocks, Main Street follows <span class="m"><i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> + 2</span>. A new service road must run parallel to Main Street, and a footpath must cross Main Street at a right angle. Both start at the library at <span class="m">(12, 3)</span>. Find both equations.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>m</i> = <span class="fr"><span>3</span><span>4</span></span></span></span>`, note: "Main Street's slope, read from slope-intercept form." },
      { math: `<span class="m c3"><i>y</i> − 3 = <span class="fr"><span>3</span><span>4</span></span>(<i>x</i> − 12)</span>`, note: "Service road: same slope, through (12, 3)." },
      { math: `<span class="m c3"><i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> − 6</span>`, note: "Distribute: (3/4)(−12) = −9, then add 3." },
      { math: `<span class="m c1"><i>m</i><sub>⊥</sub> = −<span class="fr"><span>4</span><span>3</span></span></span>`, note: "Negative reciprocal of 3/4 for the footpath." },
      { math: `<span class="m c1"><i>y</i> − 3 = −<span class="fr"><span>4</span><span>3</span></span>(<i>x</i> − 12) &nbsp;→&nbsp; <i>y</i> = −<span class="fr"><span>4</span><span>3</span></span><i>x</i> + 19</span>`, note: "(−4/3)(−12) = 16, then add 3." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span> × (−<span class="fr"><span>4</span><span>3</span></span>) = −1 ✓ &nbsp;&nbsp; −<span class="fr"><span>4</span><span>3</span></span>(12) + 19 = 3 ✓</span>`, note: "The slopes multiply to −1 and the library lies on the footpath." }
    ],
    answer: `Service road: <span class="m"><i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> − 6</span> (standard form <span class="m">3<i>x</i> − 4<i>y</i> = 24</span>). Footpath: <span class="m"><i>y</i> = −<span class="fr"><span>4</span><span>3</span></span><i>x</i> + 19</span> (standard form <span class="m">4<i>x</i> + 3<i>y</i> = 57</span>).`
  },
  why: `<p>Right angles and parallel edges are everywhere in built things: walls, roads, shelves, circuit traces, the rows of a solar farm. When those objects are laid out on a coordinate grid, the slope tests are how you confirm that two edges really are parallel or square, and how you write the line for a new edge that must be.</p>
<p>The perpendicular slope also gives the shortest distance from a point to a line, which is the idea behind projection, least-squares fitting and the normal line in calculus.</p>`,
  careers: [
    { role: "Civil engineer", use: "Lays out a side road parallel to an existing highway alignment and a cross street perpendicular to it on a site plan." },
    { role: "Surveyor", use: "Checks on a coordinate plat that two property lines meet at a right angle by confirming their slopes multiply to −1." },
    { role: "Carpenter", use: "Uses the 3-4-5 rule to set a wall square to a foundation line before framing." },
    { role: "CAD drafter", use: "Constructs lines parallel and perpendicular to reference edges when drawing mechanical parts." },
    { role: "Game developer", use: "Computes the perpendicular (normal) direction of a wall to make a ball bounce off it correctly." },
    { role: "Printed circuit board designer", use: "Routes traces parallel to each other and at right angles to keep spacing consistent." }
  ],
  life: [
    "Hanging shelves level and parallel to each other",
    "Checking that a patio corner is square before pouring concrete",
    "Parking parallel to a curb or in a spot perpendicular to it",
    "Planning a garden with rows parallel to a fence",
    "Laying floor tiles so the grout lines stay at right angles"
  ],
  fields: [
    { name: "Geometry", use: "Proofs about rectangles, altitudes and perpendicular bisectors are done in coordinates with the slope tests." },
    { name: "Physics", use: "Force components are split along directions parallel and perpendicular to a surface or incline." },
    { name: "Computer graphics", use: "Surface normals, perpendicular to each face, control lighting and reflections." },
    { name: "Architecture", use: "Plans are drawn on orthogonal grids so walls are parallel or perpendicular by design." }
  ],
  prereqWhy: {
    "a1-line-forms": "You need to find a slope from any form of a line and write a new line from a point and a slope in point-slope form."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Geometry", why: "Coordinate proofs of properties like the diagonals of a rhombus being perpendicular rely on the slope tests." },
    { field: "Calculus I", why: "The normal line to a curve at a point has slope −1/f′(a), the negative reciprocal of the tangent slope." },
    { field: "Linear Algebra", why: "Perpendicularity generalises to orthogonal vectors, whose dot product is 0, the same test as A₁A₂ + B₁B₂ = 0." },
    { field: "Physics", why: "Resolving forces into parallel and perpendicular components is the standard way to analyse motion on a slope." }
  ],
  mistakes: [
    { wrong: `Perpendicular to slope <span class="m">3</span> is slope <span class="m">−3</span>.`, fix: `You need the reciprocal and the sign change: <span class="m">−<span class="fr"><span>1</span><span>3</span></span></span>. Check: <span class="m">3 × (−<span class="fr"><span>1</span><span>3</span></span>) = −1</span>.` },
    { wrong: `Reading the slope of <span class="m">2<i>x</i> + 3<i>y</i> = 6</span> as <span class="m">2</span>.`, fix: `Solve for <span class="m"><i>y</i></span> first: <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 2</span>, so the slope is <span class="m">−<span class="fr"><span>2</span><span>3</span></span></span> (that is, <span class="m">−<i>A</i>/<i>B</i></span>).` },
    { wrong: `Line perpendicular to <span class="m"><i>x</i> = 4</span> through <span class="m">(3, −1)</span>: "the slope is undefined, so there is no answer."`, fix: `A line perpendicular to a vertical line is horizontal. The answer is <span class="m"><i>y</i> = −1</span>.` },
    { wrong: `Calling <span class="m"><i>y</i> = 2<i>x</i> + 3</span> and <span class="m">4<i>x</i> − 2<i>y</i> = −6</span> parallel.`, fix: `The second line is <span class="m"><i>y</i> = 2<i>x</i> + 3</span>, the same line. Parallel lines must have the same slope and different y-intercepts.` }
  ],
  practice: [
    { q: `Give the slope of a line parallel to <span class="m"><i>y</i> = −5<i>x</i> + 1</span> and of a line perpendicular to it.`, a: `Parallel: <span class="m">−5</span>. Perpendicular: <span class="m"><span class="fr"><span>1</span><span>5</span></span></span>, since <span class="m">−5 × <span class="fr"><span>1</span><span>5</span></span> = −1</span>.` },
    { q: `Are <span class="m">2<i>x</i> + 3<i>y</i> = 6</span> and <span class="m">3<i>x</i> − 2<i>y</i> = 4</span> parallel, perpendicular or neither?`, a: `Slopes are <span class="m">−<span class="fr"><span>2</span><span>3</span></span></span> and <span class="m"><span class="fr"><span>3</span><span>2</span></span></span>. Their product is <span class="m">−1</span>, so the lines are perpendicular.` },
    { q: `Write the line through <span class="m">(−2, 5)</span> parallel to <span class="m">4<i>x</i> − 2<i>y</i> = 7</span> in slope-intercept form. Then write the line through <span class="m">(3, −1)</span> perpendicular to <span class="m"><i>x</i> = 4</span>.`, a: `<span class="m">4<i>x</i> − 2<i>y</i> = 7</span> has slope <span class="m">2</span>. <span class="m"><i>y</i> − 5 = 2(<i>x</i> + 2)</span>, so <span class="m"><i>y</i> = 2<i>x</i> + 9</span>. The line <span class="m"><i>x</i> = 4</span> is vertical, so the perpendicular is horizontal: <span class="m"><i>y</i> = −1</span>.` },
    { q: `Write the line through <span class="m">(−3, 4)</span> perpendicular to <span class="m">3<i>x</i> − 5<i>y</i> = 10</span>, in standard form.`, a: `Given slope <span class="m"><span class="fr"><span>3</span><span>5</span></span></span>, so the new slope is <span class="m">−<span class="fr"><span>5</span><span>3</span></span></span>. <span class="m"><i>y</i> − 4 = −<span class="fr"><span>5</span><span>3</span></span>(<i>x</i> + 3)</span> gives <span class="m"><i>y</i> = −<span class="fr"><span>5</span><span>3</span></span><i>x</i> − 1</span>. Multiply by 3: <span class="m">5<i>x</i> + 3<i>y</i> = −3</span>. Check: <span class="m">5(−3) + 3(4) = −3</span> ✓.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) defined parallel lines as straight lines in a plane that never meet however far they are extended. The slope tests came much later, after René Descartes and Pierre de Fermat developed coordinate geometry in the 1630s.`
};
