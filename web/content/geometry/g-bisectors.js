window.ARITH = window.ARITH || {};

ARITH["g-bisectors"] = {
  title: "Bisectors, Medians, Altitudes & Triangle Centres",
  short: "Three special lines per triangle, each meeting at one point",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · concurrency",
  hero: `<span class="m"><span class="c1"><i>O</i></span><i>A</i> = <span class="c1"><i>O</i></span><i>B</i> = <span class="c1"><i>O</i></span><i>C</i> &nbsp;&nbsp;&nbsp; <i>A</i><span class="c1"><i>G</i></span> = <span class="fr"><span>2</span><span>3</span></span><i>AM</i></span>`,
  lede: `Every triangle has four classic sets of three lines: perpendicular bisectors, angle bisectors, medians and altitudes. In each set the three lines pass through one point, a centre of the triangle with its own job.`,
  plain: `<p>Lines that all pass through one point are <b>concurrent</b>, and the shared point is the <b>point of concurrency</b>. A triangle has four famous ones.</p>
<p>The <b>perpendicular bisector</b> of a side crosses it at its midpoint at a right angle. Every point on it is the same distance from the side's two ends. The three perpendicular bisectors meet at the <b>circumcentre</b> <span class="m"><i>O</i></span>, the one point equally far from all three corners. A circle centred there passes through all three vertices. The circumcentre is inside an acute triangle, at the middle of the hypotenuse of a right triangle, and outside an obtuse triangle.</p>
<p>An <b>angle bisector</b> splits a corner's angle in half. Its points are equally far from the two sides of that angle. The three meet at the <b>incentre</b> <span class="m"><i>I</i></span>, equally far from all three sides, the centre of the largest circle that fits inside.</p>
<p>A <b>median</b> runs from a corner to the midpoint of the opposite side. The three meet at the <b>centroid</b> <span class="m"><i>G</i></span>, the balance point of a triangular plate, two thirds of the way along each median from its corner. An <b>altitude</b> drops from a corner perpendicular to the line of the opposite side. The three altitude lines meet at the <b>orthocentre</b> <span class="m"><i>H</i></span>, which lands outside an obtuse triangle.</p>`,
  formal: `<div class="display"><b>Perpendicular Bisector Theorem.</b> In a plane, if a point is on the perpendicular bisector of a segment, then it is equidistant from the segment's endpoints. <span class="dim">Converse: a point equidistant from the endpoints lies on the perpendicular bisector.</span><br><b>Angle Bisector Theorem.</b> If a point is on the bisector of an angle, then it is equidistant from the sides of the angle. <span class="dim">Converse: a point in the interior of an angle that is equidistant from its sides lies on the bisector.</span></div>
<div class="display"><b>Concurrency theorems</b> for △<i>ABC</i>:<br>The perpendicular bisectors of the sides meet at the <b>circumcentre</b> <i>O</i>, and <i>OA</i> = <i>OB</i> = <i>OC</i>.<br>The angle bisectors meet at the <b>incentre</b> <i>I</i>, which is equidistant from the three sides.<br>The medians meet at the <b>centroid</b> <i>G</i>, and <i>AG</i> = <span class="fr"><span>2</span><span>3</span></span><i>AM</i> for the median <span class="ov"><i>AM</i></span> (likewise for the others).<br>The lines containing the altitudes meet at the <b>orthocentre</b> <i>H</i>.</div>
<p>The incentre and centroid always lie inside the triangle. The circumcentre and orthocentre are inside an acute triangle; for a right triangle <span class="m"><i>O</i></span> is the midpoint of the hypotenuse and <span class="m"><i>H</i></span> is the right-angle vertex; for an obtuse triangle both lie outside. In coordinates the centroid is the average of the vertices, <span class="m"><i>G</i> = ((<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub>)/3, (<i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub>)/3)</span>. <b>Euler line:</b> in any triangle that is not equilateral, <span class="m"><i>O</i></span>, <span class="m"><i>G</i></span> and <span class="m"><i>H</i></span> are collinear with <span class="m"><i>HG</i> = 2<i>GO</i></span>; in an equilateral triangle all four centres coincide.</p>`,
  legend: [
    { c: "c2", sym: `ℓ<sub>1</sub>, ℓ<sub>2</sub>, ℓ<sub>3</sub>`, name: "The three lines", desc: "Perpendicular bisectors, angle bisectors, medians or altitudes, one from each side or vertex." },
    { c: "c1", sym: `<i>O</i>, <i>I</i>, <i>G</i>, <i>H</i>`, name: "The centre", desc: "Where the three lines meet: circumcentre, incentre, centroid or orthocentre." },
    { c: "c3", sym: `<i>R</i>, <i>r</i>`, name: "Circles", desc: "The circumscribed circle (centre <span class=\"m\"><i>O</i></span>, radius <span class=\"m\"><i>R</i></span>, through the vertices) and the inscribed circle (centre <span class=\"m\"><i>I</i></span>, radius <span class=\"m\"><i>r</i></span>, tangent to the sides)." },
    { c: "c4", sym: `<i>OGH</i>`, name: "Euler line", desc: "The line through the circumcentre, centroid and orthocentre of a non-equilateral triangle, with <span class=\"m\"><i>HG</i> = 2<i>GO</i></span>." }
  ],
  steps: { title: "How to locate a triangle centre in coordinates", items: [
    `Decide which centre the problem needs: equal distance to three points is the circumcentre, equal distance to three lines is the incentre, the balance point is the centroid, the meeting of heights is the orthocentre.`,
    `Centroid: average the coordinates of the three vertices. No lines are needed.`,
    `Circumcentre: for two sides, find the midpoint and the negative-reciprocal slope, write each perpendicular bisector in point-slope form, and solve the pair of equations.`,
    `Orthocentre: for two vertices, write the line through the vertex with slope perpendicular to the opposite side, and solve the pair.`,
    `Check: the circumcentre should be equally far from all three vertices, and the third line of the set should pass through the point you found.`
  ] },
  example: {
    prompt: `Three villages sit at <span class="m"><i>A</i>(0, 0)</span>, <span class="m"><i>B</i>(12, 0)</span> and <span class="m"><i>C</i>(4, 8)</span> on a map grid measured in kilometres. A phone mast must be the same distance from all three. Where should it go, and how far is it from each village?`,
    lines: [
      { math: `<span class="m c2"><i>x</i> = 6</span>`, note: "Perpendicular bisector of AB: AB is horizontal with midpoint (6, 0), so the bisector is vertical." },
      { math: `<span class="m">midpoint of <span class="ov"><i>AC</i></span> = (2, 4), &nbsp;slope <i>AC</i> = 2</span>`, note: "Midpoint formula and slope formula for side AC." },
      { math: `<span class="m c2"><i>y</i> − 4 = −<span class="fr"><span>1</span><span>2</span></span>(<i>x</i> − 2)</span>`, note: "Perpendicular bisector of AC: through the midpoint with the negative reciprocal slope." },
      { math: `<span class="m"><i>x</i> = 6 &nbsp;→&nbsp; <i>y</i> = 4 − 2 = 2, &nbsp;<span class="c1"><i>O</i>(6, 2)</span></span>`, note: "The circumcentre is where the perpendicular bisectors meet." },
      { math: `<span class="m"><span class="c3"><i>R</i></span> = <i>OA</i> = √<span style="text-decoration:overline">6² + 2²</span> = √40 = <span class="c3">2√10 ≈ 6.3</span></span>`, note: "Distance formula from O to A." },
      { math: `<span class="m"><i>OB</i> = √<span style="text-decoration:overline">6² + 2²</span>, &nbsp;<i>OC</i> = √<span style="text-decoration:overline">2² + 6²</span> = √40 ✓</span>`, note: "Check: O is equidistant from all three villages. The triangle is acute, so O lies inside it, as expected." }
    ],
    answer: `Place the mast at the circumcentre <span class="m">(6, 2)</span>, <span class="m">2√10 ≈ 6.3</span> km from each village.`
  },
  why: `<p>Each centre answers a practical question. The circumcentre is the fair meeting point for three locations: a warehouse serving three stores, a mast for three villages, the centre of a round plate rebuilt from three points on a fragment. The incentre is the centre of the largest round object that fits in a triangular space. The centroid is where a triangular plate balances, which matters for brackets, signs and aircraft panels.</p>
<p>The proofs show a key pattern of geometry: a set of points defined by an equal-distance condition is a line, and two such lines force a third to agree. The same reasoning leads to circles through three points, Voronoi diagrams and the Euler line.</p>`,
  careers: [
    { role: "Logistics planner", use: "Finds a depot site equidistant from three delivery hubs by intersecting perpendicular bisectors on a map grid." },
    { role: "Archaeologist", use: "Recovers the diameter of a broken circular pot by finding the circumcentre of three points on its rim." },
    { role: "Structural engineer", use: "Places the support of a triangular gusset plate or sign at its centroid so it hangs without twisting." },
    { role: "Machinist", use: "Locates the centre of the largest circular hole that fits in a triangular plate at the incentre." },
    { role: "Wireless network engineer", use: "Positions an access point to cover three rooms equally, using the circumcentre of their locations." },
    { role: "GIS analyst", use: "Builds Voronoi service regions whose boundaries are perpendicular bisectors between neighbouring sites." }
  ],
  life: [
    "Choosing a meeting place equally far from three friends' homes",
    "Balancing a triangular piece of cardboard on a fingertip",
    "Finding the centre of a broken plate from three points on its edge",
    "Fitting the largest round table into a triangular corner nook",
    "Hanging a triangular shelf or sign so it sits level"
  ],
  fields: [
    { name: "Physics", use: "The centroid of a uniform triangular lamina is its centre of mass, used in statics and moments." },
    { name: "Geography and GIS", use: "Voronoi diagrams built from perpendicular bisectors divide a map into nearest-facility regions." },
    { name: "Engineering", use: "Centroids of cross-sections locate the neutral axis in beam bending calculations." },
    { name: "Computer graphics", use: "Delaunay triangulations, used for meshes, are defined through the circumscribed circles of triangles." }
  ],
  prereqWhy: {
    "g-congruence": "The Perpendicular Bisector and Angle Bisector Theorems are proved with SAS, HL and AAS congruence and CPCTC.",
    "g-constructions": "Perpendicular bisectors, angle bisectors and perpendiculars through a point are the compass constructions that draw these lines."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Trigonometry", why: "The Law of Sines gives the circumradius, a / sin A = 2R, and the inradius equals area divided by the semiperimeter." },
    { field: "Calculus II", why: "Centroids of regions are computed with integrals, generalising the average of three vertices." },
    { field: "Linear Algebra", why: "The centroid is the average of position vectors, and the Euler line has a short vector proof." },
    { field: "Physics", why: "Centre-of-mass and moment calculations for triangular plates use the centroid and its 2 : 1 median ratio." }
  ],
  mistakes: [
    { wrong: `The circumcentre is always inside the triangle.`, fix: `Only for acute triangles. It is the midpoint of the hypotenuse of a right triangle and lies outside an obtuse triangle. The incentre and centroid are the centres that are always inside.` },
    { wrong: `Using a median as an altitude.`, fix: `A median goes to the midpoint of the opposite side; an altitude is perpendicular to the opposite side. They coincide only when the two sides at that vertex are congruent.` },
    { wrong: `The centroid is halfway along each median.`, fix: `It is two thirds of the way from the vertex: <span class="m"><i>AG</i> : <i>GM</i> = 2 : 1</span>.` },
    { wrong: `The incentre is equidistant from the vertices.`, fix: `The incentre is equidistant from the <i>sides</i> (distances measured along perpendiculars). Equal distance to the vertices defines the circumcentre.` }
  ],
  practice: [
    { q: `Point <span class="m"><i>P</i></span> lies on the perpendicular bisector of <span class="m"><span class="ov"><i>AB</i></span></span>. If <span class="m"><i>PA</i> = 3<i>x</i> + 4</span> and <span class="m"><i>PB</i> = 5<i>x</i> − 6</span>, find <span class="m"><i>PA</i></span>.`, a: `Perpendicular Bisector Theorem: <span class="m">3<i>x</i> + 4 = 5<i>x</i> − 6</span>, so <span class="m"><i>x</i> = 5</span> and <span class="m"><i>PA</i> = <i>PB</i> = 19</span>.` },
    { q: `Find the centroid of the triangle with vertices <span class="m"><i>A</i>(0, 0)</span>, <span class="m"><i>B</i>(9, 0)</span>, <span class="m"><i>C</i>(3, 6)</span>, and verify the 2 : 1 ratio on the median from <span class="m"><i>A</i></span>.`, a: `<span class="m"><i>G</i> = (12/3, 6/3) = (4, 2)</span>. The midpoint of <span class="m"><span class="ov"><i>BC</i></span></span> is <span class="m"><i>M</i>(6, 3)</span>. <span class="m"><i>AG</i> = √20 = 2√5</span> and <span class="m"><i>GM</i> = √5</span>, so <span class="m"><i>AG</i> : <i>GM</i> = 2 : 1</span> ✓.` },
    { q: `A right triangle has legs 6 m and 8 m. How far is its incentre from each side? Where is its circumcentre?`, a: `Hypotenuse <span class="m">10</span> m. The inradius is area ÷ semiperimeter: <span class="m"><i>r</i> = 24 ÷ 12 = 2</span> m, so the incentre is 2 m from each side. The circumcentre is the midpoint of the hypotenuse, <span class="m">5</span> m from each vertex.` },
    { q: `For <span class="m"><i>A</i>(0, 0)</span>, <span class="m"><i>B</i>(6, 0)</span>, <span class="m"><i>C</i>(2, 4)</span>, find the orthocentre <span class="m"><i>H</i></span>, the centroid <span class="m"><i>G</i></span> and the circumcentre <span class="m"><i>O</i></span>, and check that they lie on one line with <span class="m"><i>HG</i> = 2<i>GO</i></span>.`, a: `Altitude from <span class="m"><i>C</i></span>: <span class="m"><i>x</i> = 2</span>. <span class="m"><span class="ov"><i>BC</i></span></span> has slope <span class="m">−1</span>, so the altitude from <span class="m"><i>A</i></span> is <span class="m"><i>y</i> = <i>x</i></span>; <span class="m"><i>H</i> = (2, 2)</span>. <span class="m"><i>G</i> = (8/3, 4/3)</span>. Perpendicular bisectors <span class="m"><i>x</i> = 3</span> and <span class="m"><i>y</i> − 2 = −½(<i>x</i> − 1)</span> give <span class="m"><i>O</i> = (3, 1)</span>. <span class="m"><i>G</i> − <i>H</i> = (2/3, −2/3)</span> and <span class="m"><i>O</i> − <i>G</i> = (1/3, −1/3)</span>: same direction, and <span class="m"><i>HG</i> = 2<i>GO</i></span> ✓.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE), Book IV Propositions 4 and 5, inscribes a circle in a triangle and circumscribes one about it. Archimedes (3rd century BCE) located the centre of gravity of a triangle on its medians. Leonhard Euler proved in the 1760s that the orthocentre, centroid and circumcentre are collinear.`
};
