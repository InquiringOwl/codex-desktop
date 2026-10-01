window.ARITH = window.ARITH || {};

ARITH["g-basics"] = {
  title: "Points, Lines & Planes",
  short: "The undefined terms and the first postulates",
  grade: "Grade 10 · college-prep Geometry",
  hours: 3,
  voice: "plain",
  eyebrow: "Geometry · foundations",
  hero: `<span class="m"><span class="c1"><i>A</i> ≠ <i>B</i></span> ⟹ exactly one <span class="c2">line <i>AB</i></span></span>`,
  lede: `Geometry starts from three terms it never defines: point, line and plane. A short list of postulates says how they behave, and every later theorem is built on those rules.`,
  plain: `<p>A <b>point</b> marks a location and has no size. A <b>line</b> is perfectly straight, has no thickness and goes on forever in both directions. A <b>plane</b> is a perfectly flat surface with no thickness that goes on forever. A dot of ink, a taut string and a tabletop are only models of these ideas.</p>
<p>The basic rules feel obvious once you say them. Two different points sit on exactly one line, so a straightedge laid against two dots can only go one way. Three points that are not in a row fix exactly one plane, which is why a three-legged stool never wobbles while a four-legged table can. If two points of a line lie in a plane, the whole line lies in it. Two different planes that meet, like a wall and the floor, meet in a line.</p>
<p>Points that lie on one line are <b>collinear</b>. Points that lie in one plane are <b>coplanar</b>. Any two points are collinear and any three points are coplanar, so these words only say something for three or more points (collinear) or four or more points (coplanar).</p>`,
  formal: `<p><b>Undefined terms:</b> point, line, plane. <b>Space</b> is the set of all points. Points are <b>collinear</b> if one line contains them all and <b>coplanar</b> if one plane contains them all. The <b>intersection</b> of two figures is the set of points they have in common.</p>
<div class="display">Postulate. A line contains at least two points; a plane contains at least three points not all on one line; space contains at least four points not all in one plane.<br>Postulate. Through any two points there is exactly one line.<br>Postulate. Through any three points there is at least one plane, and through any three noncollinear points there is exactly one plane.<br>Postulate. If two points are in a plane, then the line that contains them is in that plane.<br>Postulate. If two planes intersect, then their intersection is a line.</div>
<p>Theorems proved from them: if two lines intersect, they intersect in exactly one point; through a line and a point not on the line there is exactly one plane; if two lines intersect, exactly one plane contains both. In the coordinate plane, distinct points <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span>, <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span>, <span class="m">(<i>x</i><sub>3</sub>, <i>y</i><sub>3</sub>)</span> are collinear exactly when <span class="m">(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)(<i>y</i><sub>3</sub> − <i>y</i><sub>1</sub>) − (<i>x</i><sub>3</sub> − <i>x</i><sub>1</sub>)(<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>) = 0</span>, which says the slopes from the first point agree (or both are undefined).</p>`,
  legend: [
    { c: "c1", sym: `<i>A</i>, <i>B</i>, <i>C</i>`, name: "Points", desc: "Locations with no size, named by capital letters. In the model they can be dragged around a plane." },
    { c: "c2", sym: `line <i>AB</i>`, name: "Line", desc: "The unique straight line through two distinct points. It extends without end in both directions." },
    { c: "c3", sym: `<i>P</i> ∩ <i>Q</i>`, name: "Intersection", desc: "The points two figures share. Two distinct intersecting lines share one point; two intersecting planes share a line." },
    { c: "c4", sym: `plane <i>P</i>`, name: "Plane", desc: "A flat surface without edges, drawn as a parallelogram in perspective. Named by one script letter or by three noncollinear points in it." }
  ],
  steps: { title: "How to decide what a set of points determines", items: [
    `Two distinct points: they determine exactly one line. Name it line <span class="m"><i>AB</i></span> or by a single letter like <span class="m"><i>ℓ</i></span>.`,
    `Three points: first test whether they are collinear. In coordinates, compare the slopes from one point to each of the other two.`,
    `If the three points are noncollinear, they determine exactly one plane. If they are collinear, infinitely many planes contain them (every plane through their line).`,
    `For a fourth point, decide whether it lies in the plane of the first three. If it does not, the four points are noncoplanar and fix the corners of a tetrahedron.`,
    `When two planes meet, look for two points they share. The line through those two points is the whole intersection.`
  ] },
  example: {
    prompt: `A fence crew uses a site grid measured in metres. Stakes are set at <span class="m"><i>A</i>(2, 1)</span>, <span class="m"><i>B</i>(6, 4)</span> and <span class="m"><i>C</i>(14, 10)</span>, and a fourth stake at <span class="m"><i>D</i>(10, 8)</span>. A straight fence must run through <i>A</i> and <i>B</i>. Which other stakes does it pass through, and what is the fence line's equation?`,
    lines: [
      { math: `<span class="m">slope <i>AB</i> = <span class="fr"><span>4 − 1</span><span>6 − 2</span></span> = <span class="fr"><span>3</span><span>4</span></span></span>`, note: "Through two points there is exactly one line, so this slope fixes the fence." },
      { math: `<span class="m">slope <i>BC</i> = <span class="fr"><span>10 − 4</span><span>14 − 6</span></span> = <span class="fr"><span>6</span><span>8</span></span> = <span class="fr"><span>3</span><span>4</span></span></span>`, note: "Same slope from B, so A, B and C are collinear." },
      { math: `<span class="m">slope <i>BD</i> = <span class="fr"><span>8 − 4</span><span>10 − 6</span></span> = 1 ≠ <span class="fr"><span>3</span><span>4</span></span></span>`, note: "D is not on line AB." },
      { math: `<span class="m c2"><i>y</i> − 1 = <span class="fr"><span>3</span><span>4</span></span>(<i>x</i> − 2) &nbsp;→&nbsp; <i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> − <span class="fr"><span>1</span><span>2</span></span></span>`, note: "Point-slope form through A, then slope-intercept form." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span>(14) − <span class="fr"><span>1</span><span>2</span></span> = 10 ✓ &nbsp;&nbsp; <span class="fr"><span>3</span><span>4</span></span>(10) − <span class="fr"><span>1</span><span>2</span></span> = 7 ≠ 8</span>`, note: "Check: C satisfies the equation. At x = 10 the line is at y = 7, but D has y = 8." }
    ],
    answer: `The fence <span class="m"><i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> − <span class="fr"><span>1</span><span>2</span></span></span> passes through <i>A</i>, <i>B</i> and <i>C</i> (they are collinear). Stake <i>D</i> is off the fence: the fence passes through <span class="m">(10, 7)</span>, 1 m from <i>D</i> in the <span class="m"><i>y</i></span>-direction.`
  },
  why: `<p>Every geometric argument eventually rests on these postulates. When a proof says "draw the line through <i>P</i> and <i>Q</i>", it is using the fact that exactly one such line exists. When an engineer says three survey points fix a ground plane, or a machinist says three contact points seat a part, they are using the plane postulate.</p>
<p>The same ideas carry into coordinates and vectors. Testing collinearity with slopes, finding where two lines meet, and finding where two planes meet in 3D are the computational versions of the postulates on this page.</p>`,
  careers: [
    { role: "Surveyor", use: "Sets intermediate stakes on the straight line between two control points and checks them for collinearity." },
    { role: "Machinist", use: "Locates a part with the 3-2-1 principle: three points define the primary datum plane, two the secondary, one the tertiary." },
    { role: "Carpenter", use: "Snaps a chalk line between two marks, relying on there being exactly one straight line through them." },
    { role: "3D graphics programmer", use: "Builds every surface from triangles because three noncollinear vertices always define a single flat plane." },
    { role: "Civil engineer", use: "Computes where a sloped road surface meets a level grade plane, which is a line on the site plan." },
    { role: "Photogrammetrist", use: "Intersects lines of sight from two camera positions to locate a point in space." }
  ],
  life: [
    "Using a three-legged stool or tripod on uneven ground without wobble",
    "Lining up three fence posts by sighting along them",
    "Hanging a picture straight with two nails",
    "Seeing a wall meet the floor along a straight edge",
    "Folding a sheet of paper, where the crease is a line on two flat halves"
  ],
  fields: [
    { name: "Engineering drawing", use: "Datum points, lines and planes are the reference features every dimension on a drawing is measured from." },
    { name: "Computer graphics", use: "Triangle meshes, ray–plane intersection and clipping planes are direct uses of points, lines and planes in space." },
    { name: "Physics", use: "Motion along a line and forces in a plane are modelled with the same undefined terms and their coordinates." },
    { name: "Surveying and geodesy", use: "Alignments, sightlines and reference planes for elevations are all lines and planes fixed by measured points." }
  ],
  prereqWhy: {
    "pa-coordinate": "Points become ordered pairs on the coordinate plane, which lets you test collinearity with slopes and write the line through two points."
  },
  unlocksWhy: {
    "g-segments": "Segments and rays are pieces of a line between or beyond named points, and the Ruler Postulate puts coordinates on a line.",
    "g-angles": "An angle is two rays with a common endpoint, built from the points and lines defined here."
  },
  beyond: [
    { field: "Linear Algebra", why: "Lines and planes through the origin are the one- and two-dimensional subspaces of R³, and collinearity becomes linear dependence." },
    { field: "Multivariable Calculus", why: "Equations of lines and planes in space, and the line where two planes meet, are computed with vectors and cross products." },
    { field: "Axiomatic Geometry", why: "Hilbert's axioms and non-Euclidean geometries start from the same undefined terms with different postulates." }
  ],
  mistakes: [
    { wrong: `"Any three points determine a plane."`, fix: `Only three <b>noncollinear</b> points do. Three collinear points lie in infinitely many planes, all containing their line.` },
    { wrong: `Drawing a line as a segment with two endpoints and stopping it there.`, fix: `A line has no endpoints. Draw arrowheads on both ends; a figure with two endpoints is a segment.` },
    { wrong: `Saying two lines that do not meet must be parallel.`, fix: `In space, two lines that do not meet may be <b>skew</b>: not parallel and not coplanar. Parallel lines must also be coplanar.` },
    { wrong: `Checking collinearity by eye on a sketch.`, fix: `Compute it. In coordinates, collinear points give equal slopes from one point (or all share one <span class="m"><i>x</i></span>-value).` }
  ],
  practice: [
    { q: `Six points lie in a plane with no three collinear. How many different lines do they determine?`, a: `Each pair determines one line and no line contains three of the points, so the count is the number of pairs: <span class="m">6 · 5 ÷ 2 = 15</span>.` },
    { q: `Are <span class="m"><i>A</i>(−1, 4)</span>, <span class="m"><i>B</i>(2, −2)</span> and <span class="m"><i>C</i>(5, −8)</span> collinear? If so, give the line.`, a: `Slope <span class="m"><i>AB</i> = −6/3 = −2</span> and slope <span class="m"><i>BC</i> = −6/3 = −2</span>. Equal slopes through the shared point <i>B</i>, so yes. The line is <span class="m"><i>y</i> = −2<i>x</i> + 2</span>; check <span class="m">−2(−1) + 2 = 4</span> ✓.` },
    { q: `A student says points <span class="m"><i>J</i>(1, 1)</span>, <span class="m"><i>K</i>(3, 4)</span> and <span class="m"><i>L</i>(7, 10)</span> "determine plane <i>JKL</i>". Is that right?`, a: `No. Slope <span class="m"><i>JK</i> = 3/2</span> and slope <span class="m"><i>KL</i> = 6/4 = 3/2</span>, so the points are collinear. Infinitely many planes contain them, so "plane <i>JKL</i>" does not name a unique plane.` },
    { q: `Four points in space are noncoplanar, and no three of them are collinear. How many lines and how many planes do they determine?`, a: `Lines: one per pair, <span class="m">4 · 3 ÷ 2 = 6</span>. Planes: one per set of three noncollinear points, <span class="m">4</span> (the faces of a tetrahedron). No two triples share a plane, because a plane through two triples would contain all four points.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) opens by defining a point as "that which has no part" and a line as "breadthless length". David Hilbert's <i>Grundlagen der Geometrie</i> (1899) took the modern view: point, line and plane are left undefined and are described only by the axioms they satisfy.`
};
