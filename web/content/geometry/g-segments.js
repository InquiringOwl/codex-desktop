window.ARITH = window.ARITH || {};

ARITH["g-segments"] = {
  title: "Segments, Distance & Midpoints",
  short: "Ruler Postulate, distance formula, midpoint formula",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · measuring length",
  hero: `<span class="m"><span class="c1"><i>d</i></span> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)<sup>2</sup></span></span>`,
  lede: `A segment is the part of a line between two endpoints, and its length is the distance between them. On a number line that distance is an absolute value; in the coordinate plane it comes from the Pythagorean Theorem.`,
  plain: `<p>A <b>segment</b> <span class="m"><span class="ov"><i>AB</i></span></span> is two endpoints <i>A</i> and <i>B</i> and every point of the line between them. Its length is written <span class="m"><i>AB</i></span> with no bar. A <b>ray</b> starts at one endpoint and goes on forever in one direction.</p>
<p>To measure along a line, lay a ruler on it. Read the numbers at the two ends and subtract the smaller from the larger. That is the <b>Ruler Postulate</b>: points on a line match real numbers, and distance is the absolute value of the difference. If a point <i>B</i> sits between <i>A</i> and <i>C</i>, the two short pieces add up to the whole: <span class="m"><i>AB</i> + <i>BC</i> = <i>AC</i></span>.</p>
<p>In the coordinate plane, a slanted segment is the hypotenuse of a right triangle whose legs are the horizontal change and the vertical change. The Pythagorean Theorem gives its length. The <b>midpoint</b>, the point halfway along, has coordinates that are the averages of the endpoints' coordinates.</p>`,
  formal: `<p><b>Ruler Postulate.</b> The points of a line can be paired one-to-one with the real numbers so that the distance between any two points is the absolute value of the difference of their coordinates: <span class="m"><i>AB</i> = |<i>b</i> − <i>a</i>|</span>.</p>
<p><b>Segment Addition Postulate.</b> If <i>B</i> is between <i>A</i> and <i>C</i>, then <span class="m"><i>AB</i> + <i>BC</i> = <i>AC</i></span>. Segments are <b>congruent</b> (<span class="m"><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>CD</i></span></span>) when they have equal lengths (<span class="m"><i>AB</i> = <i>CD</i></span>). The <b>midpoint</b> of <span class="m"><span class="ov"><i>AB</i></span></span> is the point <i>M</i> on it with <span class="m"><i>AM</i> = <i>MB</i></span>; a <b>bisector</b> of the segment is a line, ray, segment or plane that intersects the segment at its midpoint <i>M</i> (and nowhere else).</p>
<div class="display">Distance Formula: &nbsp;<i>AB</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup> + (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)<sup>2</sup></span><br>Midpoint Formula: &nbsp;<i>M</i> = (<span class="fr"><span><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub></span><span>2</span></span>, <span class="fr"><span><i>y</i><sub>1</sub> + <i>y</i><sub>2</sub></span><span>2</span></span>) &nbsp;&nbsp;<span class="dim">on a number line: <i>m</i> = (<i>a</i> + <i>b</i>)/2</span></div>
<p>The Distance Formula is the Pythagorean Theorem applied to the right triangle with legs <span class="m">|<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>|</span> and <span class="m">|<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>|</span>. For distinct points, <span class="m"><i>AB</i> + <i>BC</i> = <i>AC</i></span> holds only when <i>B</i> lies on <span class="m"><span class="ov"><i>AC</i></span></span>; otherwise <span class="m"><i>AB</i> + <i>BC</i> &gt; <i>AC</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>A</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)`, name: "First endpoint", desc: "One end of the segment. Its coordinates are subtracted from the other endpoint's." },
    { c: "c3", sym: `<i>B</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)`, name: "Second endpoint", desc: "The other end. Swapping the endpoints changes the signs of the differences but not the distance." },
    { c: "c4", sym: `Δ<i>x</i>, Δ<i>y</i>`, name: "Legs", desc: "The horizontal and vertical changes, the legs of the right triangle whose hypotenuse is the segment." },
    { c: "c1", sym: `<i>d</i> = <i>AB</i>`, name: "Distance", desc: "The length of the segment, √(Δx² + Δy²), kept as a simplified radical when it is not a whole number." },
    { c: "c5", sym: `<i>M</i>`, name: "Midpoint", desc: "The point halfway from A to B. Its coordinates are the averages of the endpoints' coordinates." }
  ],
  steps: { title: "How to find a distance and a midpoint", items: [
    `Label the endpoints <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span>.`,
    `Compute the legs <span class="m">Δ<i>x</i> = <i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span> and <span class="m">Δ<i>y</i> = <i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span>. Signs do not matter after squaring.`,
    `Add the squares and take the principal square root. Simplify the radical by pulling out perfect-square factors, then give a decimal if one is asked for.`,
    `For the midpoint, average the <span class="m"><i>x</i></span>-coordinates and average the <span class="m"><i>y</i></span>-coordinates.`,
    `Check: the distance from each endpoint to the midpoint should be half of <span class="m"><i>AB</i></span>, and the two halves add to the whole (Segment Addition Postulate).`
  ] },
  example: {
    prompt: `On a site plan with a grid in metres, a cable must run straight from a junction box at <span class="m"><i>A</i>(−2, 3)</span> to a light pole at <span class="m"><i>B</i>(4, −1)</span>, with a support clip at the halfway point. How long is the cable run, to the nearest tenth of a metre, and where does the clip go?`,
    lines: [
      { math: `<span class="m c4">Δ<i>x</i> = 4 − (−2) = 6, &nbsp; Δ<i>y</i> = −1 − 3 = −4</span>`, note: "Legs of the right triangle under the cable." },
      { math: `<span class="m c1"><i>AB</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">6<sup>2</sup> + (−4)<sup>2</sup></span> = √52</span>`, note: "Distance Formula (the Pythagorean Theorem): 36 + 16 = 52." },
      { math: `<span class="m c1">√52 = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">4 · 13</span> = 2√13 ≈ 7.2</span>`, note: "Simplify the radical: 4 is the largest perfect-square factor of 52." },
      { math: `<span class="m c5"><i>M</i> = (<span class="fr"><span>−2 + 4</span><span>2</span></span>, <span class="fr"><span>3 + (−1)</span><span>2</span></span>) = (1, 1)</span>`, note: "Midpoint Formula: average each coordinate." },
      { math: `<span class="m"><i>AM</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">3<sup>2</sup> + 2<sup>2</sup></span> = √13, &nbsp; <i>MB</i> = √13, &nbsp; √13 + √13 = 2√13 ✓</span>`, note: "Check with the Segment Addition Postulate: the halves are equal and add to AB." }
    ],
    answer: `The cable run is <span class="m">2√13 ≈ 7.2</span> m long, and the clip goes at <span class="m">(1, 1)</span>.`
  },
  why: `<p>Distance is the most basic measurement in geometry, and nearly every later formula uses it: perimeter, the equation of a circle, slant heights, the side lengths in a coordinate proof. The midpoint is just as common, from locating the centre of a circle on a diameter to proving that a quadrilateral's diagonals bisect each other.</p>
<p>The Distance Formula is also the first example of a metric, a rule for measuring how far apart two things are. The same formula extended to three or more coordinates measures distance in space, in data and in colour.</p>`,
  careers: [
    { role: "Surveyor", use: "Computes the length of a property line from the coordinates of its corner monuments." },
    { role: "GIS analyst", use: "Calculates straight-line distances between mapped features from their projected grid coordinates." },
    { role: "Electrician", use: "Estimates conduit and cable lengths on a scaled floor plan before ordering material." },
    { role: "Game developer", use: "Uses the distance between two characters' coordinates to trigger collisions or in-range events." },
    { role: "Data scientist", use: "Groups similar records with k-nearest-neighbour and clustering methods that use the Euclidean distance formula." },
    { role: "Air traffic controller", use: "Reads separation between aircraft from radar positions, a distance computed from their coordinates." }
  ],
  life: [
    "Measuring a board with a tape that does not start at zero",
    "Finding the centre of a shelf to hang it evenly",
    "Estimating the straight-line distance between two places on a map grid",
    "Meeting a friend halfway between two homes",
    "Checking that a TV of a given diagonal size fits a wall space"
  ],
  fields: [
    { name: "Physics", use: "Displacement in a plane is the distance formula applied to the start and end coordinates." },
    { name: "Computer science", use: "Nearest-neighbour search and collision detection compare Euclidean distances between points." },
    { name: "Cartography", use: "Distances on projected maps are computed from easting and northing coordinates." },
    { name: "Statistics", use: "Clustering and multivariate methods measure how far apart observations are with the Euclidean distance." }
  ],
  prereqWhy: {
    "g-basics": "A segment is part of a line determined by two points, so you need points, lines and betweenness first.",
    "pa-pythagorean": "The Distance Formula is the Pythagorean Theorem applied to the right triangle formed by Δx and Δy.",
    "a1-radicals": "Distances usually come out as square roots that must be simplified, such as √52 = 2√13."
  },
  unlocksWhy: {
    "g-constructions": "Copying a segment and constructing a perpendicular bisector both depend on equal lengths and on locating a midpoint.",
    "g-proofs": "Segment Addition and the definitions of midpoint and congruent segments are reasons in the first two-column proofs.",
    "g-transformations": "A rigid motion is defined as a transformation that preserves distance, checked with the Distance Formula.",
    "g-coord-proofs": "Coordinate proofs classify figures by computing side lengths with the Distance Formula and diagonal midpoints with the Midpoint Formula.",
    "g-circle-equations": "The equation of a circle is the Distance Formula from the centre to a point on the circle, set equal to the radius."
  },
  beyond: [
    { field: "Algebra II", why: "The equations of circles, parabolas, ellipses and hyperbolas are all derived from distance conditions." },
    { field: "Multivariable Calculus", why: "Distance in space is √(Δx² + Δy² + Δz²), and the length of a curve is built from tiny distance-formula pieces." },
    { field: "Linear Algebra", why: "The length (norm) of a vector is the distance formula in n dimensions." }
  ],
  mistakes: [
    { wrong: `<span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">6<sup>2</sup> + 4<sup>2</sup></span> = 6 + 4 = 10</span>`, fix: `A square root does not split over a sum. <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">36 + 16</span> = √52 = 2√13 ≈ 7.2</span>.` },
    { wrong: `Midpoint as half the difference: <span class="m">((4 − (−2))/2, (−1 − 3)/2) = (3, −2)</span>.`, fix: `Average the coordinates: add, then divide by 2. <span class="m">((−2 + 4)/2, (3 + (−1))/2) = (1, 1)</span>. Half the difference gives half the legs, not a point.` },
    { wrong: `Assuming <span class="m"><i>AB</i> + <i>BC</i> = <i>AC</i></span> for any three points.`, fix: `The Segment Addition Postulate needs <i>B</i> between <i>A</i> and <i>C</i> on one line. If <i>B</i> is off the segment, <span class="m"><i>AB</i> + <i>BC</i> &gt; <i>AC</i></span>.` },
    { wrong: `Writing <span class="m"><span class="ov"><i>AB</i></span> = 5</span>.`, fix: `A segment is a figure and a length is a number. Write <span class="m"><i>AB</i> = 5</span> for the length and <span class="m"><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>CD</i></span></span> for congruent segments.` }
  ],
  practice: [
    { q: `On a number line, <i>P</i> has coordinate −7 and <i>Q</i> has coordinate 5. Find <span class="m"><i>PQ</i></span> and the coordinate of the midpoint.`, a: `<span class="m"><i>PQ</i> = |5 − (−7)| = 12</span> (Ruler Postulate). Midpoint <span class="m">(−7 + 5)/2 = −1</span>.` },
    { q: `<i>B</i> is between <i>A</i> and <i>C</i>. <span class="m"><i>AB</i> = 2<i>x</i> + 3</span>, <span class="m"><i>BC</i> = 3<i>x</i> − 1</span> and <span class="m"><i>AC</i> = 27</span>. Find <span class="m"><i>x</i></span>, <span class="m"><i>AB</i></span> and <span class="m"><i>BC</i></span>.`, a: `Segment Addition: <span class="m">(2<i>x</i> + 3) + (3<i>x</i> − 1) = 27</span>, so <span class="m">5<i>x</i> + 2 = 27</span> and <span class="m"><i>x</i> = 5</span>. Then <span class="m"><i>AB</i> = 13</span>, <span class="m"><i>BC</i> = 14</span>; check <span class="m">13 + 14 = 27</span> ✓.` },
    { q: `Find the distance between <span class="m">(−1, −4)</span> and <span class="m">(5, 8)</span> in simplest radical form and to the nearest tenth, and find the midpoint.`, a: `<span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">6<sup>2</sup> + 12<sup>2</sup></span> = √180 = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">36 · 5</span> = 6√5 ≈ 13.4</span>. Midpoint <span class="m">(2, 2)</span>.` },
    { q: `<span class="m"><i>M</i>(3, −2)</span> is the midpoint of <span class="m"><span class="ov"><i>AB</i></span></span> and <span class="m"><i>A</i>(−1, 5)</span>. Find <i>B</i> and <span class="m"><i>AB</i></span>. Is <span class="m"><i>P</i>(1, 1)</span> between <i>A</i> and <i>B</i>?`, a: `<span class="m"><i>B</i> = (2 · 3 − (−1), 2(−2) − 5) = (7, −9)</span>, and <span class="m"><i>AB</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">8<sup>2</sup> + 14<sup>2</sup></span> = √260 = 2√65 ≈ 16.1</span>. <i>P</i> is not between them: <span class="m"><i>AP</i> + <i>PB</i> = 2√5 + 2√34 ≈ 16.13</span>, slightly more than <span class="m">2√65 ≈ 16.12</span>. Slopes confirm it: <span class="m"><i>AP</i></span> has slope −2, <span class="m"><i>AB</i></span> has slope −7/4, so <i>P</i> is off the line.` }
  ],
  origin: `The Ruler Postulate comes from George David Birkhoff's 1932 paper "A Set of Postulates for Plane Geometry, Based on Scale and Protractor", which built geometry on measuring lengths and angles with real numbers. The School Mathematics Study Group adapted his postulates for US high-school textbooks in the 1960s.`
};
