window.ARITH = window.ARITH || {};

ARITH["g-coord-proofs"] = {
  title: "Coordinate Geometry & Coordinate Proofs",
  short: "Prove shapes with slopes, lengths and midpoints",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · coordinate methods",
  hero: `<span class="m"><span class="c3"><i>m</i> = <span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></span> &nbsp;&nbsp; <span class="c4"><i>d</i> = √<span style="text-decoration:overline">(Δ<i>x</i>)² + (Δ<i>y</i>)²</span></span></span>`,
  lede: `Put a figure on a coordinate grid and its geometry becomes arithmetic. Slopes decide parallel and perpendicular, the distance formula decides congruent, and midpoints decide bisection, so a shape can be classified, or a theorem proved, by calculation.`,
  plain: `<p>Every geometric property you test with a ruler or protractor has a coordinate version. Two segments are <b>parallel</b> when their slopes are equal, and <b>perpendicular</b> when their slopes multiply to −1 (or one is vertical and the other horizontal). Two segments are <b>congruent</b> when the distance formula gives the same length. Two segments <b>bisect each other</b> when they have the same midpoint.</p>
<p>To classify a quadrilateral from its corners, compute what you need and match it against the theorems: diagonals with a common midpoint make a parallelogram; add equal diagonals for a rectangle, perpendicular diagonals for a rhombus, both for a square. One pair of parallel sides makes a trapezoid.</p>
<p>A <b>coordinate proof</b> does this for every figure of a kind at once. Place the figure cleverly, with a vertex at the origin and a side along the x-axis, and use letters such as <span class="m">(2<i>a</i>, 0)</span> for the coordinates. The algebra then works for all such figures, not one drawing.</p>
<p>Coordinates also split a segment in any ratio. To go one third of the way from <span class="m"><i>A</i></span> to <span class="m"><i>B</i></span>, add one third of the run and one third of the rise to <span class="m"><i>A</i></span>.</p>`,
  formal: `<p>For <span class="m"><i>A</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m"><i>B</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span>:</p>
<div class="display"><i>AB</i> = √<span style="text-decoration:overline">(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)² + (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)²</span> &nbsp;&nbsp; <i>M</i> = (<span class="fr"><span><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub></span><span>2</span></span>, <span class="fr"><span><i>y</i><sub>1</sub> + <i>y</i><sub>2</sub></span><span>2</span></span>) &nbsp;&nbsp; <i>m</i> = <span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span> (<i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub>)<br>The point <i>P</i> on <span class="ov"><i>AB</i></span> with <i>AP</i> : <i>PB</i> = <i>m</i> : <i>n</i> is <i>P</i> = (<span class="fr"><span><i>n</i><i>x</i><sub>1</sub> + <i>m</i><i>x</i><sub>2</sub></span><span><i>m</i> + <i>n</i></span></span>, <span class="fr"><span><i>n</i><i>y</i><sub>1</sub> + <i>m</i><i>y</i><sub>2</sub></span><span><i>m</i> + <i>n</i></span></span>) = <i>A</i> + <span class="fr"><span><i>m</i></span><span><i>m</i> + <i>n</i></span></span>(<i>B</i> − <i>A</i>).<br>Two distinct non-vertical lines are parallel iff <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> and perpendicular iff <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1; a vertical line is perpendicular to a horizontal line.</div>
<p>A <b>coordinate proof</b> places a general figure with variable coordinates (choosing the origin and axes to simplify the algebra without losing generality) and derives the conclusion from these formulas. Using coordinates such as <span class="m">2<i>a</i></span> keeps midpoints free of fractions. Example, the Triangle Midsegment Theorem: let <span class="m"><i>A</i>(0, 0)</span>, <span class="m"><i>B</i>(2<i>a</i>, 0)</span>, <span class="m"><i>C</i>(2<i>b</i>, 2<i>c</i>)</span> with <span class="m"><i>a</i>, <i>c</i> ≠ 0</span>. The midpoints of <span class="m"><span class="ov"><i>AC</i></span></span> and <span class="m"><span class="ov"><i>BC</i></span></span> are <span class="m"><i>M</i>(<i>b</i>, <i>c</i>)</span> and <span class="m"><i>N</i>(<i>a</i> + <i>b</i>, <i>c</i>)</span>. Both <span class="m"><span class="ov"><i>MN</i></span></span> and <span class="m"><span class="ov"><i>AB</i></span></span> have slope 0, so they are parallel, and <span class="m"><i>MN</i> = |<i>a</i>| = ½ · <i>AB</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>A</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)`, name: "Vertices", desc: "The given corner points. In a proof they carry letters so that one calculation covers every case." },
    { c: "c3", sym: `<i>m</i>`, name: "Slopes", desc: "Equal slopes mean parallel; slopes with product −1 mean perpendicular." },
    { c: "c4", sym: `<i>d</i>`, name: "Lengths", desc: "From the distance formula, kept as exact radicals. Equal lengths mean congruent segments." },
    { c: "c1", sym: `?`, name: "Current check", desc: "The test being carried out right now: a slope comparison, a length comparison or a midpoint comparison." },
    { c: "c5", sym: `∴`, name: "Conclusion", desc: "The classification the checks prove, named with the theorem that justifies it." }
  ],
  steps: { title: "How to write a coordinate proof or classification", items: [
    `Plot the points, or place a general figure: one vertex at the origin, one side on the x-axis, and letters like <span class="m">(2<i>a</i>, 0)</span> for the rest.`,
    `Decide which theorem you will use and what it needs: equal slopes for parallel sides, slope product −1 for perpendicular, equal lengths for congruent, equal midpoints for bisecting diagonals.`,
    `Compute only those quantities, exactly: simplified fractions for slopes, simplified radicals for lengths.`,
    `Watch for vertical segments: their slope is undefined, so test perpendicularity with a horizontal partner or with midpoints and lengths instead.`,
    `Write the conclusion with its reason, for example "diagonals have the same midpoint, so <span class="m"><i>ABCD</i></span> is a parallelogram", and give the most specific name the evidence supports.`
  ] },
  example: {
    prompt: `A landscape architect's plan puts the corners of a flower bed at <span class="m"><i>A</i>(1, 1)</span>, <span class="m"><i>B</i>(9, 3)</span>, <span class="m"><i>C</i>(11, 11)</span> and <span class="m"><i>D</i>(3, 9)</span> (units in metres). The client asked for a square bed. Classify the bed exactly.`,
    lines: [
      { math: `<span class="m">midpoint of <span class="ov"><i>AC</i></span> = (6, 6) = midpoint of <span class="ov"><i>BD</i></span></span>`, note: "The diagonals bisect each other, so ABCD is a parallelogram." },
      { math: `<span class="m c4"><i>AB</i> = √<span style="text-decoration:overline">8² + 2²</span> = √68 = 2√17, &nbsp;<i>AD</i> = √<span style="text-decoration:overline">2² + 8²</span> = 2√17</span>`, note: "Distance formula. A parallelogram with two consecutive sides congruent has all four sides congruent: a rhombus." },
      { math: `<span class="m c3"><i>m</i><sub><i>AC</i></sub> = <span class="fr"><span>10</span><span>10</span></span> = 1, &nbsp;<i>m</i><sub><i>BD</i></sub> = <span class="fr"><span>6</span><span>−6</span></span> = −1</span>`, note: "Slope formula. The product is −1, so the diagonals are perpendicular, as a rhombus requires." },
      { math: `<span class="m c4"><i>AC</i> = √200 = 10√2, &nbsp;<i>BD</i> = √72 = 6√2</span>`, note: "The diagonals are not congruent, so the parallelogram is not a rectangle, and so not a square." },
      { math: `<span class="m"><i>m</i><sub><i>AB</i></sub> · <i>m</i><sub><i>AD</i></sub> = <span class="fr"><span>1</span><span>4</span></span> · 4 = 1 ≠ −1 ✓</span>`, note: "Check: angle A is not a right angle, consistent with a rhombus that is not a square." }
    ],
    answer: `<span class="m c5"><i>ABCD</i></span> is a rhombus with sides <span class="m">2√17 ≈ 8.2</span> m, but not a square: its diagonals are <span class="m">10√2 ≈ 14.1</span> m and <span class="m">6√2 ≈ 8.5</span> m.`
  },
  why: `<p>Coordinates turn drawings into data. Surveyors, CAD software and GPS systems store shapes as lists of points, so every question about them, whether two walls are square, whether a lot is a parallelogram, where a point two fifths of the way along a pipe lies, is answered with the slope, distance and midpoint formulas.</p>
<p>Coordinate proof is also a second method of proof. Some theorems that need clever auxiliary lines in a synthetic proof fall out of a few lines of algebra once the figure is placed well. That idea, geometry by algebra, runs through analytic geometry, vectors and linear algebra.</p>`,
  careers: [
    { role: "Surveyor", use: "Checks from a plat's corner coordinates that lot lines are parallel or perpendicular and computes their lengths." },
    { role: "CAD drafter", use: "Positions a hole two fifths of the way along an edge using the section formula on its endpoint coordinates." },
    { role: "Civil engineer", use: "Lays out road alignments and verifies perpendicular intersections from design coordinates." },
    { role: "Game developer", use: "Detects whether a player's path is parallel or perpendicular to a wall from vertex coordinates." },
    { role: "GIS analyst", use: "Computes distances and midpoints between mapped features to place facilities and boundaries." },
    { role: "Robotics programmer", use: "Plans waypoints that divide a straight path into equal segments with the partition formula." }
  ],
  life: [
    "Finding the halfway point between two places on a map grid",
    "Checking that a garden or patio laid out with stakes is truly rectangular",
    "Placing shelf brackets one third and two thirds of the way along a wall",
    "Reading distances between points in a video game or map app",
    "Arranging furniture on graph-paper floor plans"
  ],
  fields: [
    { name: "Analytic geometry", use: "Lines, circles and conics are studied entirely through equations in coordinates." },
    { name: "Computer graphics", use: "Every shape is stored as coordinates, and interpolation along segments uses the partition formula." },
    { name: "Surveying and GIS", use: "Coordinate geometry (COGO) computes boundaries, areas and bearings from point lists." },
    { name: "Physics", use: "Positions, displacements and centres of mass are computed from coordinates." }
  ],
  prereqWhy: {
    "g-quadrilaterals": "Classifying a quadrilateral means testing the parallelogram, rectangle, rhombus, trapezoid and kite theorems, so you need to know which properties prove which shape.",
    "g-segments": "Lengths come from the distance formula and bisection from the midpoint formula.",
    "a1-par-perp": "Parallel and perpendicular sides are recognised by equal slopes and by slopes whose product is −1."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Precalculus", why: "Vectors restate these tests: parallel vectors are scalar multiples and perpendicular vectors have dot product 0." },
    { field: "Linear Algebra", why: "The section formula is a convex combination (1 − t)A + tB, the basis of interpolation and affine geometry." },
    { field: "Calculus I", why: "Secant slopes between two points on a curve lead to the derivative as a limit." },
    { field: "Computer Science", why: "Computational geometry algorithms test orientation, intersection and parallelism from coordinates." }
  ],
  mistakes: [
    { wrong: `Showing that all four sides of a quadrilateral are congruent and calling it a square.`, fix: `Four congruent sides prove only a rhombus. A square also needs a right angle (or congruent diagonals).` },
    { wrong: `Testing a vertical side for perpendicularity with the product rule.`, fix: `A vertical segment has undefined slope, so the product rule does not apply. It is perpendicular exactly to horizontal segments (slope 0).` },
    { wrong: `The point one third of the way from <span class="m"><i>A</i>(−2, 1)</span> to <span class="m"><i>B</i>(10, 7)</span> is <span class="m">(10/3, 7/3)</span>.`, fix: `Start from <span class="m"><i>A</i></span> and add one third of the change: <span class="m">(−2 + 12/3, 1 + 6/3) = (2, 3)</span>.` },
    { wrong: `Proving a theorem for one drawn example such as <span class="m">(0, 0), (4, 0), (1, 3)</span>.`, fix: `A coordinate proof uses general coordinates like <span class="m">(2<i>a</i>, 0)</span> and <span class="m">(2<i>b</i>, 2<i>c</i>)</span> so it covers every figure of that kind.` }
  ],
  practice: [
    { q: `Find the point <span class="m"><i>P</i></span> on <span class="m"><span class="ov"><i>AB</i></span></span> from <span class="m"><i>A</i>(−2, 1)</span> to <span class="m"><i>B</i>(10, 7)</span> with <span class="m"><i>AP</i> : <i>PB</i> = 1 : 2</span>.`, a: `<span class="m"><i>P</i> = <i>A</i> + <span class="fr"><span>1</span><span>3</span></span>(<i>B</i> − <i>A</i>) = (−2 + 4, 1 + 2) = (2, 3)</span>.` },
    { q: `Show that <span class="m"><i>A</i>(1, 2)</span>, <span class="m"><i>B</i>(5, 4)</span>, <span class="m"><i>C</i>(3, 8)</span> form a right isosceles triangle.`, a: `<span class="m"><i>m</i><sub><i>AB</i></sub> = 2/4 = 1/2</span> and <span class="m"><i>m</i><sub><i>BC</i></sub> = 4/(−2) = −2</span>; the product is <span class="m">−1</span>, so ∠<i>B</i> is a right angle. <span class="m"><i>AB</i> = <i>BC</i> = √20 = 2√5</span>, so the legs are congruent. Check: <span class="m"><i>AC</i> = √40</span> and <span class="m">20 + 20 = 40</span> ✓.` },
    { q: `Classify <span class="m"><i>A</i>(0, 0)</span>, <span class="m"><i>B</i>(6, 0)</span>, <span class="m"><i>C</i>(4, 3)</span>, <span class="m"><i>D</i>(1, 3)</span>.`, a: `<span class="m"><span class="ov"><i>AB</i></span></span> and <span class="m"><span class="ov"><i>DC</i></span></span> both have slope 0, so they are parallel. <span class="m"><i>m</i><sub><i>AD</i></sub> = 3</span> and <span class="m"><i>m</i><sub><i>BC</i></sub> = −3/2</span>, so the legs are not parallel: exactly one pair, a trapezoid. <span class="m"><i>AD</i> = √10 ≠ <i>BC</i> = √13</span>, so it is not isosceles.` },
    { q: `Prove that joining the midpoints of the sides of any quadrilateral, in order, gives a parallelogram. Use <span class="m"><i>A</i>(0, 0)</span>, <span class="m"><i>B</i>(2<i>a</i>, 0)</span>, <span class="m"><i>C</i>(2<i>b</i>, 2<i>c</i>)</span>, <span class="m"><i>D</i>(2<i>d</i>, 2<i>e</i>)</span>.`, a: `The midpoints are <span class="m"><i>P</i>(<i>a</i>, 0)</span>, <span class="m"><i>Q</i>(<i>a</i> + <i>b</i>, <i>c</i>)</span>, <span class="m"><i>R</i>(<i>b</i> + <i>d</i>, <i>c</i> + <i>e</i>)</span>, <span class="m"><i>S</i>(<i>d</i>, <i>e</i>)</span>. The diagonals <span class="m"><span class="ov"><i>PR</i></span></span> and <span class="m"><span class="ov"><i>QS</i></span></span> both have midpoint <span class="m">((<i>a</i> + <i>b</i> + <i>d</i>)/2, (<i>c</i> + <i>e</i>)/2)</span>, so they bisect each other and <span class="m"><i>PQRS</i></span> is a parallelogram (Varignon's Theorem).` }
  ],
  origin: `René Descartes published the method of coordinates in <i>La Géométrie</i> (1637), and Pierre de Fermat developed it independently in a manuscript that circulated at about the same time. The theorem that the midpoints of any quadrilateral form a parallelogram is named after Pierre Varignon, whose <i>Élémens de mathématique</i> containing it was published in 1731, after his death.`
};
