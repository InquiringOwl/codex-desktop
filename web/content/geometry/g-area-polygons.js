window.ARITH = window.ARITH || {};

ARITH["g-area-polygons"] = {
  title: "Area of Triangles & Quadrilaterals",
  short: "Cut, slide and double: every area from bh",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · area",
  hero: `<span class="m"><span class="c1"><i>A</i></span> = <span class="c2"><i>b</i></span><span class="c3"><i>h</i></span> &nbsp;·&nbsp; <span class="c1"><i>A</i></span> = ½<span class="c2"><i>b</i></span><span class="c3"><i>h</i></span> &nbsp;·&nbsp; <span class="c1"><i>A</i></span> = ½(<span class="c2"><i>b</i><sub>1</sub></span> + <span class="c2"><i>b</i><sub>2</sub></span>)<span class="c3"><i>h</i></span> &nbsp;·&nbsp; <span class="c1"><i>A</i></span> = ½<i>d</i><sub>1</sub><i>d</i><sub>2</sub></span>`,
  lede: `Every area formula for triangles and quadrilaterals comes from the rectangle. A parallelogram is a rectangle with one end moved, a triangle is half a parallelogram, and a trapezoid doubled is a parallelogram.`,
  plain: `<p>Area counts how many unit squares fit inside a shape. A rectangle 5 units long and 3 units high holds 3 rows of 5, so its area is 15 square units: base times height.</p>
<p>A slanted parallelogram does not fill neat rows, but you can fix that. Cut off the triangle at one end along a line straight down from a top corner, slide it to the other end, and the pieces form a rectangle with the same base and the same height. Nothing was added or lost, so the area is still base times height. The slanted side's length does not matter. What matters is the <b>height</b>: the straight-up distance between the base and the opposite side.</p>
<p>Two copies of any triangle fit together into a parallelogram, so a triangle is half: <span class="m">½<i>bh</i></span>. Two copies of a trapezoid, one turned upside down, make a parallelogram whose base is the two parallel sides added together, so a trapezoid is <span class="m">½(<i>b</i><sub>1</sub> + <i>b</i><sub>2</sub>)<i>h</i></span>. A rhombus or kite sits inside a rectangle made by its diagonals and fills exactly half of it.</p>`,
  formal: `<p><b>Area postulates.</b> Every polygonal region has a unique positive area. Congruent figures have equal areas (Area Congruence Postulate). If a region is the union of non-overlapping regions, its area is the sum of their areas (Area Addition Postulate). The area of a square is the square of its side, and the area of a rectangle is the product of its base and height (texts differ on which of these two is the postulate and which is proved).</p>
<p>A <b>base</b> is any side chosen as the reference; the corresponding <b>height</b> (altitude) is the perpendicular distance from the line containing the base to the opposite vertex or to the line containing the opposite side. For an obtuse triangle the altitude to a side next to the obtuse angle falls outside the triangle, on the extension of the base.</p>
<div class="display">parallelogram &nbsp;<span class="c1"><i>A</i></span> = <span class="c2"><i>b</i></span><span class="c3"><i>h</i></span><br>triangle &nbsp;<span class="c1"><i>A</i></span> = ½<span class="c2"><i>b</i></span><span class="c3"><i>h</i></span><br>trapezoid &nbsp;<span class="c1"><i>A</i></span> = ½(<span class="c2"><i>b</i><sub>1</sub> + <i>b</i><sub>2</sub></span>)<span class="c3"><i>h</i></span> &nbsp;<span class="dim"><i>b</i><sub>1</sub>, <i>b</i><sub>2</sub> the parallel sides</span><br>rhombus, kite &nbsp;<span class="c1"><i>A</i></span> = ½<i>d</i><sub>1</sub><i>d</i><sub>2</sub> &nbsp;<span class="dim">also any convex quadrilateral with perpendicular diagonals <i>d</i><sub>1</sub>, <i>d</i><sub>2</sub></span></div>
<p>Each is a theorem proved with the postulates: the parallelogram by cutting off a right triangle and translating it (Area Congruence and Area Addition), the triangle and trapezoid by rotating a congruent copy 180° about the midpoint of a side to form a parallelogram, and the kite by splitting it along a diagonal into two triangles with that diagonal as base. A consequence: parallelograms (or triangles) with the same base between the same two parallel lines have equal areas, however far they are sheared.</p>`,
  legend: [
    { c: "c2", sym: `<i>b</i>`, name: "Base", desc: "The side chosen as reference. A trapezoid has two bases, its parallel sides b<sub>1</sub> and b<sub>2</sub>." },
    { c: "c3", sym: `<i>h</i>`, name: "Height", desc: "The perpendicular distance from the base's line to the opposite vertex or side. It is never a slanted side unless that side is perpendicular to the base." },
    { c: "c1", sym: `<i>A</i>`, name: "Area", desc: "The number of unit squares the region covers, in square units such as cm² or ft²." },
    { c: "c4", sym: `▱`, name: "Moved piece", desc: "The triangle that is cut and slid, or the congruent copy that is rotated, to turn the shape into a rectangle or parallelogram." }
  ],
  steps: { title: "How to find the area of a polygon", items: [
    `Name the shape and pick its formula: parallelogram <span class="m"><i>bh</i></span>, triangle <span class="m">½<i>bh</i></span>, trapezoid <span class="m">½(<i>b</i><sub>1</sub> + <i>b</i><sub>2</sub>)<i>h</i></span>, rhombus or kite <span class="m">½<i>d</i><sub>1</sub><i>d</i><sub>2</sub></span>.`,
    `Choose a <span class="c2">base</span> and find the <span class="c3">height</span> perpendicular to it. If only slanted sides are given, find the height with the Pythagorean Theorem.`,
    `For an irregular figure, split it into rectangles, triangles and trapezoids, or subtract a cut-out from a larger shape (Area Addition Postulate).`,
    `Substitute, keeping all lengths in the same unit, and multiply.`,
    `State the answer in square units, and check that it is reasonable against a rectangle that encloses the figure.`
  ] },
  example: {
    prompt: `A corner lot is a right trapezoid. Its two street frontages are parallel, 80 ft and 120 ft long, and the side that meets both at right angles is 90 ft. Sod comes in pallets that cover 450 ft² each. Find the area of the lot and the number of pallets.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>b</i><sub>1</sub> = 80, <i>b</i><sub>2</sub> = 120</span>, <span class="c3"><i>h</i> = 90</span></span>`, note: "The parallel frontages are the bases. The side perpendicular to both is the height." },
      { math: `<span class="m"><span class="c1"><i>A</i></span> = ½(<span class="c2">80 + 120</span>)(<span class="c3">90</span>)</span>`, note: "Trapezoid Area Theorem." },
      { math: `<span class="m"><span class="c1"><i>A</i></span> = ½(200)(90) = 9000 ft²</span>`, note: "Add the bases first, then multiply." },
      { math: `<span class="m">80 · 90 + ½ · 40 · 90 = 9000</span>`, note: "Check by Area Addition: an 80 by 90 rectangle plus a right triangle with legs 120 − 80 = 40 and 90." },
      { math: `<span class="m">9000 ÷ 450 = 20</span>`, note: "Pallets needed, with no allowance for waste." }
    ],
    answer: `The lot covers <span class="m">9000</span> ft², which takes 20 pallets of sod.`
  },
  why: `<p>Area is how materials are bought and land is valued: paint, flooring, roofing, sod, solar panels and property taxes are all priced per square foot or square metre. Real shapes are rarely rectangles, so the trick of splitting a region into triangles and trapezoids is used daily by estimators, surveyors and designers.</p>
<p>The formulas also carry forward. Surface area of a prism or pyramid is a sum of these polygon areas, the area of a regular polygon is a sum of triangles, and the area of a circle is the limit of those polygons. In calculus, the area under a curve is first approximated by rectangles and trapezoids, exactly the shapes on this page.</p>`,
  careers: [
    { role: "Construction estimator", use: "Splits irregular floor plans into rectangles and trapezoids to price flooring, drywall and roofing by the square foot." },
    { role: "Land surveyor", use: "Computes a parcel's acreage by dividing it into triangles and trapezoids from measured boundary lines." },
    { role: "Roofer", use: "Measures a hip roof as trapezoid and triangle planes and orders shingles by the square (100 ft²)." },
    { role: "Landscape designer", use: "Calculates sod, mulch and paver quantities for beds shaped as trapezoids and triangles." },
    { role: "Sail maker", use: "Finds the area of a triangular sail as half base times height to set its size and the cloth needed." },
    { role: "Painter", use: "Adds the triangular gable ends to the rectangular walls when estimating gallons of paint." }
  ],
  life: [
    "Buying the right number of floor tiles for an L-shaped room",
    "Working out how much paint a wall with a sloping top needs",
    "Comparing the sizes of two plots of land in a listing",
    "Cutting fabric for a triangular pennant or a kite",
    "Spreading the right amount of fertilizer on a lawn"
  ],
  fields: [
    { name: "Surveying", use: "Parcel areas are computed by splitting a boundary into triangles and trapezoids." },
    { name: "Architecture", use: "Floor areas set building codes, occupancy limits and cost estimates." },
    { name: "Calculus", use: "Riemann sums and the Trapezoidal Rule approximate areas under curves with rectangles and trapezoids." },
    { name: "Computer graphics", use: "Polygons are broken into triangles, and triangle areas drive shading and collision tests." }
  ],
  prereqWhy: {
    "g-quadrilaterals": "The proofs use parallelogram facts, such as opposite sides being parallel and congruent and a diagonal splitting it into two congruent triangles.",
    "pa-formulas": "The rectangle and triangle formulas and the habit of substituting into a formula and solving for a missing dimension come from pre-algebra."
  },
  unlocksWhy: {
    "g-solids": "The faces of prisms and pyramids are rectangles, triangles and other polygons, so a net's total area is a sum of these formulas.",
    "g-circle-measure": "A regular polygon is a ring of congruent triangles with area ½aP, and letting the number of sides grow gives the area of a circle."
  },
  beyond: [
    { field: "Calculus I", why: "Definite integrals are limits of sums of rectangle areas, and the Trapezoidal Rule uses ½(b₁ + b₂)h directly." },
    { field: "Linear Algebra", why: "The determinant of a 2 × 2 matrix is the signed area of the parallelogram its columns span." },
    { field: "Physics", why: "Work, impulse and distance travelled are areas under force or velocity graphs, often triangles and trapezoids." }
  ],
  mistakes: [
    { wrong: `Multiplying the base by the slanted side of a parallelogram: sides 10 and 6 give 60.`, fix: `Use the height perpendicular to the base. If the height to the side of 10 is 5, the area is <span class="m">10 · 5 = 50</span>.` },
    { wrong: `Forgetting the ½ for a triangle or trapezoid.`, fix: `A triangle is half of a parallelogram with the same base and height, and a trapezoid is half of a parallelogram with base <span class="m"><i>b</i><sub>1</sub> + <i>b</i><sub>2</sub></span>.` },
    { wrong: `Using <span class="m">½<i>d</i><sub>1</sub><i>d</i><sub>2</sub></span> for a rectangle or any quadrilateral.`, fix: `It holds only when the diagonals are perpendicular. A 3 by 4 rectangle has diagonals of 5 but area 12, not 12.5.` },
    { wrong: `Giving an area in ft instead of ft².`, fix: `Area multiplies two lengths, so the unit is squared.` }
  ],
  practice: [
    { q: `(a) Find the area of a triangle with base 14 cm and height 9 cm. (b) A parallelogram has sides 10 cm and 6 cm, and the height to the 10 cm side is 5 cm. Find its area.`, a: `(a) <span class="m">½ · 14 · 9 = 63</span> cm². (b) <span class="m">10 · 5 = 50</span> cm². The 6 cm side is slanted and is not the height.` },
    { q: `A trapezoid has bases 9 cm and 15 cm and area 96 cm². Find its height.`, a: `<span class="m">96 = ½(9 + 15)<i>h</i> = 12<i>h</i></span>, so <span class="m"><i>h</i> = 8</span> cm.` },
    { q: `An isosceles trapezoid has bases 10 and 22 and legs of 10. Find its height and area.`, a: `Dropping altitudes from the ends of the short base leaves two right triangles with bottom legs <span class="m">(22 − 10)/2 = 6</span>. Height <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">10<sup>2</sup> − 6<sup>2</sup></span> = 8</span>; area <span class="m">½(10 + 22)(8) = 128</span>.` },
    { q: `(a) A rhombus has sides of 5. Is that enough to find its area? (b) The same rhombus has one diagonal of 6. Find the other diagonal and the area.`, a: `(a) No. The rhombus can be flattened or opened while its sides stay 5, so its area can be anything greater than 0 and up to 25 (the square). (b) The diagonals of a rhombus are perpendicular bisectors of each other, so half-diagonals 3 and <span class="m"><i>x</i></span> form a right triangle with hypotenuse 5: <span class="m"><i>x</i> = 4</span>. The other diagonal is 8 and the area is <span class="m">½ · 6 · 8 = 24</span>.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) proves that parallelograms on the same base and between the same parallels are equal in area (Proposition I.35) and that a parallelogram with the same base as a triangle, between the same parallels, is double the triangle (I.41), the two facts behind the shear slider in the lab.`
};
