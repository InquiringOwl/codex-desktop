window.ARITH = window.ARITH || {};

ARITH["g-constructions"] = {
  title: "Compass & Straightedge Constructions",
  short: "Copy, bisect, perpendiculars, parallels, Euclid I.1",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · constructions",
  hero: `<span class="m"><span class="c2"><i>PA</i> = <i>PB</i></span> ⟹ <i>P</i> is on the <span class="c1">perpendicular bisector</span> of <span class="c4"><span class="ov"><i>AB</i></span></span></span>`,
  lede: `A construction draws an exact figure with only two tools: a compass for circles and an unmarked straightedge for lines. No measuring is allowed, so each construction works because of a theorem about equal distances.`,
  plain: `<p>A <b>compass</b> draws a circle (or a piece of one, an arc) around a centre, and it can carry a length from one place to another. A <b>straightedge</b> draws the line through two points. It has no markings, so it cannot measure. Every new point in a construction is a place where these lines and arcs cross.</p>
<p>The key idea is that every point on a circle is the same distance from its centre. Draw arcs of equal size from two points <i>A</i> and <i>B</i>, and the places where they cross are equally far from <i>A</i> and <i>B</i>. Those crossing points lie on the line that cuts <span class="m"><span class="ov"><i>AB</i></span></span> in half at a right angle, the <b>perpendicular bisector</b>. Most constructions are variations on that move.</p>
<p>The standard list is: copy a segment, copy an angle, bisect a segment, bisect an angle, draw a perpendicular through a point, draw a parallel through a point, and build an equilateral triangle on a segment. Some figures can never be constructed this way. No method trisects every angle, and a 20° angle cannot be constructed at all.</p>`,
  formal: `<p>A <b>construction</b> produces points as intersections of lines and circles, starting from given points, using only: the line through two constructed points (straightedge), and the circle with a constructed centre and a radius equal to the distance between two constructed points (compass). Euclid's first three postulates allow the same operations, with a compass that draws a circle about a given centre through a given point and collapses when lifted; his Proposition I.2 shows that such a compass can still transfer a length, so both rules construct the same figures.</p>
<div class="display">Perpendicular Bisector Theorem and converse: in a plane, a point is equidistant from <i>A</i> and <i>B</i> if and only if it lies on the perpendicular bisector of <span class="ov"><i>AB</i></span>.<br>Angle copy and angle bisector: justified by SSS triangle congruence (equal compass settings give three pairs of equal sides).<br>Parallel through a point: copying a corresponding angle gives a parallel line (Converse of the Corresponding Angles Postulate).</div>
<p>Euclid I.1: on a given segment <span class="m"><span class="ov"><i>AB</i></span></span>, the circles centred at <i>A</i> through <i>B</i> and centred at <i>B</i> through <i>A</i> meet at <i>C</i>, and <span class="m"><i>CA</i> = <i>AB</i> = <i>BC</i></span>, so △<i>ABC</i> is equilateral. Not every figure is constructible: angle trisection in general and doubling the cube are impossible (Wantzel, 1837), and so is squaring the circle (π is transcendental, Lindemann, 1882).</p>`,
  legend: [
    { c: "c4", sym: `<span class="ov"><i>AB</i></span>, ∠<i>A</i>, <i>ℓ</i>`, name: "Given figure", desc: "What you start with: a segment, an angle, a line and a point. In the model you can drag it." },
    { c: "c2", sym: `arc`, name: "Compass arcs", desc: "Pieces of circles. Every point of an arc is the same distance from its centre, which is the whole reason constructions work." },
    { c: "c3", sym: `line`, name: "Straightedge lines", desc: "Lines drawn through two points already constructed. The straightedge never measures." },
    { c: "c1", sym: `result`, name: "Result", desc: "The finished figure: the copied segment or angle, a bisector, a perpendicular, a parallel or an equilateral triangle." }
  ],
  steps: { title: "How to construct the perpendicular bisector of a segment", items: [
    `Open the compass to more than half of <span class="m"><span class="ov"><i>AB</i></span></span>. A smaller opening gives arcs that do not meet.`,
    `With the point on <i>A</i>, draw an arc above and below the segment.`,
    `Without changing the opening, put the point on <i>B</i> and draw arcs that cross the first two. Call the crossings <i>X</i> and <i>Y</i>.`,
    `Use the straightedge to draw line <i>XY</i>. It is perpendicular to <span class="m"><span class="ov"><i>AB</i></span></span> and meets it at the midpoint <i>M</i>.`,
    `Justify: <span class="m"><i>XA</i> = <i>XB</i></span> and <span class="m"><i>YA</i> = <i>YB</i></span> (equal compass settings), so <i>X</i> and <i>Y</i> lie on the perpendicular bisector, and two points determine that line.`
  ] },
  example: {
    prompt: `A landscaper must place a sprinkler on a straight garden path so that it is the same distance from two taps. On her plan (grid in metres) the taps are at <span class="m"><i>A</i>(0, 0)</span> and <span class="m"><i>B</i>(8, 4)</span> and the path is the line <span class="m"><i>y</i> = 0</span>. She constructs the perpendicular bisector of <span class="m"><span class="ov"><i>AB</i></span></span> with a rope as a compass. How long must the rope be at least, and where does the sprinkler go?`,
    lines: [
      { math: `<span class="m"><i>AB</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">8<sup>2</sup> + 4<sup>2</sup></span> = √80 = 4√5, &nbsp; <span class="c2"><i>r</i> &gt; 2√5 ≈ 4.5</span></span>`, note: "Arcs from A and B cross only if the radius is more than half of AB (Distance Formula)." },
      { math: `<span class="m"><i>M</i> = (4, 2), &nbsp; slope <i>AB</i> = <span class="fr"><span>4</span><span>8</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>`, note: "The bisector passes through the midpoint (Midpoint Formula)." },
      { math: `<span class="m c1"><i>y</i> − 2 = −2(<i>x</i> − 4) &nbsp;→&nbsp; <i>y</i> = −2<i>x</i> + 10</span>`, note: "Perpendicular slope is the negative reciprocal, −2. This is the line the arcs construct." },
      { math: `<span class="m">0 = −2<i>x</i> + 10 &nbsp;→&nbsp; <i>x</i> = 5, &nbsp; <i>S</i>(5, 0)</span>`, note: "Intersect the bisector with the path y = 0." },
      { math: `<span class="m"><i>SA</i> = 5, &nbsp; <i>SB</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">3<sup>2</sup> + 4<sup>2</sup></span> = 5 ✓</span>`, note: "Check with the Perpendicular Bisector Theorem: S is equidistant from both taps." }
    ],
    answer: `The rope must be longer than <span class="m">2√5 ≈ 4.5</span> m, and the sprinkler goes at <span class="m">(5, 0)</span>, 5 m from each tap.`
  },
  why: `<p>Constructions show which facts about a figure follow from equal distances alone. Each one is a small proof: the compass guarantees equal lengths, and a congruence or bisector theorem turns those into the property you want. They are also practical. Layout crews, sign makers and woodworkers still use string, trammels and dividers to find centres, square corners and bisect angles where no measuring tool fits.</p>
<p>The same steps run inside software. Geometry and CAD programs build figures from line–line, line–circle and circle–circle intersections, exactly the operations of a compass and straightedge.</p>`,
  careers: [
    { role: "Carpenter", use: "Finds the centre of a circular tabletop by drawing perpendicular bisectors of two chords with a trammel." },
    { role: "Stonemason", use: "Lays out arches and rose windows from compass arcs, as medieval masons did with cords and pegs." },
    { role: "Landscape architect", use: "Marks a right angle on site with stakes and a rope by constructing a perpendicular, without a transit." },
    { role: "CAD drafter", use: "Uses perpendicular-bisector, tangent and parallel-offset tools that are compass-and-straightedge constructions in software." },
    { role: "Machinist", use: "Scribes centre lines and bolt circles on layout fluid with dividers and a scriber before drilling." }
  ],
  life: [
    "Finding the centre of a round lid or plate",
    "Marking a square corner for a garden bed with string",
    "Dividing a board exactly in half without a tape measure",
    "Drawing a six-petal flower with a compass",
    "Splitting the angle of a corner shelf evenly"
  ],
  fields: [
    { name: "Computer-aided design", use: "Geometric constraints such as midpoint, perpendicular and tangent are solved as compass-and-straightedge intersections." },
    { name: "Abstract algebra", use: "Field theory explains which lengths are constructible: those reached by square roots from rational numbers." },
    { name: "Architecture", use: "Gothic tracery and classical proportions were laid out with compass and straightedge geometry." },
    { name: "Drafting and technical drawing", use: "Bisectors, perpendiculars and tangent arcs are the basic hand-drafting constructions." }
  ],
  prereqWhy: {
    "g-segments": "Copying segments and bisecting them rely on equal lengths and on the midpoint of a segment.",
    "g-angles": "Copying and bisecting angles reproduce and split angle measures, and the result is checked with the Angle Addition Postulate."
  },
  unlocksWhy: {
    "g-bisectors": "The circumcentre and incentre are found by constructing perpendicular bisectors of the sides and bisectors of the angles."
  },
  beyond: [
    { field: "Abstract Algebra", why: "Galois theory proves which constructions are impossible: a constructible length has degree a power of 2 over the rationals." },
    { field: "Number Theory", why: "Gauss and Wantzel showed a regular n-gon is constructible exactly when n is a power of 2 times distinct Fermat primes." },
    { field: "Computational Geometry", why: "Robust intersection of lines and circles, the core construction step, is a basic problem in geometric algorithms." }
  ],
  mistakes: [
    { wrong: `Opening the compass to less than half of <span class="m"><span class="ov"><i>AB</i></span></span> when bisecting it.`, fix: `Arcs of radius <span class="m"><i>r</i> &lt; <i>AB</i>/2</span> never meet. Use an opening clearly more than half the segment.` },
    { wrong: `Changing the compass opening between the arc from <i>A</i> and the arc from <i>B</i>.`, fix: `The crossing points are equidistant from <i>A</i> and <i>B</i> only if both arcs have the same radius. Keep the setting fixed.` },
    { wrong: `Using the ruler's markings to find a midpoint "as a construction".`, fix: `A construction may not measure. Measuring gives an approximation; the compass method is exact and justified by a theorem.` },
    { wrong: `"I will trisect the angle the way I bisect it."`, fix: `There is no compass-and-straightedge method that trisects every angle. Pierre Wantzel proved this in 1837; for example, 60° cannot be trisected.` }
  ],
  practice: [
    { q: `To bisect a segment with <span class="m"><i>AB</i> = 10</span> cm, which compass openings work? With an opening of 6 cm, how far from <span class="m"><span class="ov"><i>AB</i></span></span> are the two crossing points?`, a: `Any opening greater than 5 cm. At exactly 5 cm the arcs touch only at the midpoint, which gives one point, not a line; below 5 cm they do not meet. With 6 cm each crossing point is <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">6<sup>2</sup> − 5<sup>2</sup></span> = √11 ≈ 3.3</span> cm from the segment (Pythagorean Theorem in the half-segment triangle).` },
    { q: `Starting from the 60° angle of an equilateral triangle, using only angle bisection, perpendiculars and angle copying, can you construct 15°, 45°, 75° and 20°?`, a: `15°: bisect 60° twice. 45°: bisect the 90° angle of a perpendicular. 75°: copy 15° next to 60° (Angle Addition). 20° is impossible: it would trisect 60°, and <span class="m">cos 20°</span> is a root of <span class="m">8<i>c</i><sup>3</sup> − 6<i>c</i> − 1 = 0</span>, a cubic with no rational roots, so 20° is not constructible by any compass-and-straightedge method.` },
    { q: `Construct an equilateral triangle on <span class="m"><span class="ov"><i>AB</i></span></span> with <span class="m"><i>A</i>(0, 0)</span> and <span class="m"><i>B</i>(6, 0)</span> (Euclid I.1). Where can the third vertex be, and what is the triangle's height?`, a: `The two circles of radius 6 centred at <i>A</i> and <i>B</i> meet at <span class="m"><i>C</i>(3, 3√3)</span> and <span class="m">(3, −3√3)</span>. Height <span class="m">3√3 ≈ 5.2</span>; check <span class="m"><i>CA</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">9 + 27</span> = 6</span> ✓.` },
    { q: `To drop a perpendicular from <span class="m"><i>P</i>(1, 7)</span> to the line <span class="m"><i>y</i> = <i>x</i> − 2</span>, an arc centred at <i>P</i> with radius 8 cuts the line at <i>X</i> and <i>Y</i>. Find <i>X</i>, <i>Y</i>, the foot <i>F</i> of the perpendicular and the distance <span class="m"><i>PF</i></span>.`, a: `Solve <span class="m">(<i>x</i> − 1)<sup>2</sup> + (<i>x</i> − 9)<sup>2</sup> = 64</span>: <span class="m"><i>x</i><sup>2</sup> − 10<i>x</i> + 9 = 0</span>, so <span class="m"><i>X</i>(1, −1)</span> and <span class="m"><i>Y</i>(9, 7)</span>. The perpendicular is the perpendicular bisector of <span class="m"><span class="ov"><i>XY</i></span></span>, so <span class="m"><i>F</i> = (5, 3)</span>. <span class="m"><i>PF</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">16 + 16</span> = 4√2 ≈ 5.7</span>; slope <span class="m"><i>PF</i> = −1</span> is perpendicular to slope 1 ✓.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) builds its geometry from compass-and-straightedge constructions, starting with the equilateral triangle in Proposition I.1. Carl Friedrich Gauss constructed the regular 17-gon in 1796, and Pierre Wantzel proved in 1837 that trisecting a general angle and doubling the cube are impossible.`
};
