window.ARITH = window.ARITH || {};

ARITH["g-circle-equations"] = {
  title: "Equations of Circles",
  short: "The distance formula from the centre, set equal to r",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · circles in coordinates",
  hero: `<span class="m">(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup> + (<i>y</i> − <span class="c1"><i>k</i></span>)<sup>2</sup> = <span class="c2"><i>r</i></span><sup>2</sup></span>`,
  lede: `A point is on a circle exactly when its distance from the centre equals the radius. Written with the Distance Formula and squared, that condition is the equation of the circle.`,
  plain: `<p>Put a circle on a coordinate grid with its centre at <span class="m">(<i>h</i>, <i>k</i>)</span> and radius <i>r</i>. A point <span class="m">(<i>x</i>, <i>y</i>)</span> is on the circle when it is exactly <i>r</i> away from the centre. The horizontal gap is <span class="m"><i>x</i> − <i>h</i></span>, the vertical gap is <span class="m"><i>y</i> − <i>k</i></span>, and by the Pythagorean Theorem the squares of the gaps add up to <span class="m"><i>r</i><sup>2</sup></span>. That one sentence is the equation.</p>
<p>In this <b>standard form</b> you can read the centre and radius straight off, minding the signs: <span class="m">(<i>x</i> + 4)<sup>2</sup></span> means <span class="m"><i>h</i> = −4</span>. Multiplied out, the equation turns into a <b>general form</b> such as <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 6<i>x</i> + 4<i>y</i> − 12 = 0</span>, which hides the centre. To get it back you complete the square in <i>x</i> and in <i>y</i>.</p>
<p>Completing the square can end in three ways. A positive number on the right is <span class="m"><i>r</i><sup>2</sup></span>, and the graph is a circle. Zero means the only solution is the centre itself, a single point. A negative number means no point works, because squares cannot add to a negative number.</p>`,
  formal: `<p><b>Theorem.</b> The circle with centre <span class="m c1">(<i>h</i>, <i>k</i>)</span> and radius <span class="m c2"><i>r</i> &gt; 0</span> is the graph of</p>
<div class="display">(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup> + (<i>y</i> − <span class="c1"><i>k</i></span>)<sup>2</sup> = <span class="c2"><i>r</i></span><sup>2</sup> &nbsp;<span class="dim">standard form</span><br><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>Dx</i> + <i>Ey</i> + <i>F</i> = 0, &nbsp;<i>D</i> = −2<i>h</i>, <i>E</i> = −2<i>k</i>, <i>F</i> = <i>h</i><sup>2</sup> + <i>k</i><sup>2</sup> − <i>r</i><sup>2</sup> &nbsp;<span class="dim">general form</span></div>
<p>Proof: <span class="m c3"><i>P</i>(<i>x</i>, <i>y</i>)</span> is on the circle if and only if <span class="m"><i>PC</i> = <i>r</i></span>, that is, <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup></span> = <i>r</i></span> by the Distance Formula. Both sides are nonnegative, so squaring gives an equivalent equation.</p>
<p>Conversely, completing the square in the general form gives</p>
<div class="display">(<i>x</i> + <span class="c4"><i>D</i>/2</span>)<sup>2</sup> + (<i>y</i> + <span class="c4"><i>E</i>/2</span>)<sup>2</sup> = <span class="fr"><span><i>D</i><sup>2</sup> + <i>E</i><sup>2</sup> − 4<i>F</i></span><span>4</span></span></div>
<p>If the right side is positive the graph is the circle with centre <span class="m">(−<i>D</i>/2, −<i>E</i>/2)</span> and radius <span class="m">½√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>D</i><sup>2</sup> + <i>E</i><sup>2</sup> − 4<i>F</i></span></span>; if it is zero the graph is the single point <span class="m">(−<i>D</i>/2, −<i>E</i>/2)</span>; if it is negative the solution set is empty. An equation <span class="m"><i>Ax</i><sup>2</sup> + <i>Ay</i><sup>2</sup> + … = 0</span> with <span class="m"><i>A</i> ≠ 0</span> is first divided by <i>A</i>; unequal <span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>y</i><sup>2</sup></span> coefficients, or an <span class="m"><i>xy</i></span> term, never give a circle. A point <span class="m">(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>)</span> is inside, on or outside the circle as <span class="m">(<i>x</i><sub>0</sub> − <i>h</i>)<sup>2</sup> + (<i>y</i><sub>0</sub> − <i>k</i>)<sup>2</sup></span> is less than, equal to or greater than <span class="m"><i>r</i><sup>2</sup></span>.</p>`,
  legend: [
    { c: "c1", sym: `(<i>h</i>, <i>k</i>)`, name: "Centre", desc: "Subtracted from x and y inside the squares. (x + 4)² means h = −4." },
    { c: "c2", sym: `<i>r</i>`, name: "Radius", desc: "The distance from the centre to every point of the circle. The right side of standard form is r², not r." },
    { c: "c3", sym: `(<i>x</i>, <i>y</i>)`, name: "Point on the circle", desc: "Any point whose horizontal and vertical gaps from the centre have squares adding to r²." },
    { c: "c4", sym: `(<i>D</i>/2)<sup>2</sup>`, name: "Completed-square terms", desc: "Half the coefficient of x (or y), squared, added to both sides to turn general form into standard form." }
  ],
  steps: { title: "How to go from general form to centre and radius", items: [
    `If <span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>y</i><sup>2</sup></span> have a common coefficient other than 1, divide every term by it.`,
    `Group the <i>x</i>-terms and the <i>y</i>-terms, and move the constant to the right side.`,
    `Complete each square: add <span class="m">(<i>D</i>/2)<sup>2</sup></span> and <span class="m">(<i>E</i>/2)<sup>2</sup></span> to <b>both</b> sides.`,
    `Factor each group as a perfect square: <span class="m">(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></span>.`,
    `Read the centre <span class="m">(<i>h</i>, <i>k</i>)</span> with the signs reversed from inside the parentheses, and take <span class="m"><i>r</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">right side</span></span>. If the right side is 0 the graph is one point; if it is negative there is no graph.`,
    `Check by substituting a point you know is on the circle, such as <span class="m">(<i>h</i> + <i>r</i>, <i>k</i>)</span>, into the original equation.`
  ] },
  example: {
    prompt: `A delivery app stores a drone's flying zone as <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 6<i>x</i> + 4<i>y</i> − 12 = 0</span>, in kilometres on the city grid. Find the zone's centre and radius, and decide whether a customer at <span class="m">(6, 1)</span> is inside it.`,
    lines: [
      { math: `<span class="m">(<i>x</i><sup>2</sup> − 6<i>x</i>) + (<i>y</i><sup>2</sup> + 4<i>y</i>) = 12</span>`, note: "Group the x-terms and the y-terms; add 12 to both sides." },
      { math: `<span class="m">(<i>x</i><sup>2</sup> − 6<i>x</i> <span class="c4">+ 9</span>) + (<i>y</i><sup>2</sup> + 4<i>y</i> <span class="c4">+ 4</span>) = 25</span>`, note: "Complete the squares: (−6 ÷ 2)² = 9 and (4 ÷ 2)² = 4, added to both sides, so the right side is 12 + 9 + 4 = 25." },
      { math: `<span class="m">(<i>x</i> − <span class="c1">3</span>)<sup>2</sup> + (<i>y</i> + <span class="c1">2</span>)<sup>2</sup> = <span class="c2">5</span><sup>2</sup></span>`, note: "Factor each perfect-square trinomial: standard form." },
      { math: `<span class="m">centre <span class="c1">(3, −2)</span>, &nbsp;<span class="c2"><i>r</i> = 5</span></span>`, note: "Reverse the signs inside the parentheses; r = √25." },
      { math: `<span class="m c3">(6 − 3)<sup>2</sup> + (1 + 2)<sup>2</sup> = 18 &lt; 25</span>`, note: "The customer's squared distance from the centre is less than r², so the point is inside. The distance is √18 = 3√2 ≈ 4.2 km." },
      { math: `<span class="m">8<sup>2</sup> + (−2)<sup>2</sup> − 48 − 8 − 12 = 0 ✓</span>`, note: "Check: (8, −2), one radius to the right of the centre, satisfies the original equation: 64 + 4 − 6·8 + 4·(−2) − 12 = 0." }
    ],
    answer: `The zone is a circle with centre <span class="m">(3, −2)</span> and radius <span class="m">5</span> km. The customer at <span class="m">(6, 1)</span> is <span class="m">3√2 ≈ 4.2</span> km from the centre, so inside the zone.`
  },
  why: `<p>The equation of a circle is how software sees a circle. Map searches for everything within 5 km, phone coverage zones, collision tests in games and the circular moves of a CNC machine all test or trace <span class="m">(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></span>. Comparing squared distances with <span class="m"><i>r</i><sup>2</sup></span> even saves a square root every time.</p>
<p>It is also the first curve you meet whose equation is of second degree in both variables. Completing the square to find its centre is the same move used for parabolas, ellipses and hyperbolas in Algebra II, and the circle is where the unit circle of trigonometry and the parametric equations of precalculus start.</p>`,
  careers: [
    { role: "Seismologist", use: "Locates an earthquake's epicentre by intersecting circles drawn around three stations, each with a radius found from the delay between P and S waves." },
    { role: "Game developer", use: "Detects a collision between two round objects by checking whether the squared distance between their centres is at most the square of the sum of their radii." },
    { role: "GIS analyst", use: "Selects every mapped feature within a buffer radius of a site by testing (x − h)² + (y − k)² ≤ r²." },
    { role: "CNC programmer", use: "Writes circular moves (G02 and G03) by giving the arc's end point and its centre or radius." },
    { role: "Wireless network planner", use: "Models each access point's coverage as a circle and checks that every work area lies inside at least one." },
    { role: "Robotics engineer", use: "Describes the reach of a two-link arm and the circles its joints can trace, then solves for where those circles meet." }
  ],
  life: [
    "Searching a map app for restaurants within 2 km of you",
    "Placing a lawn sprinkler so its circle covers the whole bed",
    "Drawing a circle in a graphing calculator or spreadsheet",
    "Checking whether your house is inside a delivery radius",
    "Setting a geofence alert around home or school on a phone"
  ],
  fields: [
    { name: "Computer graphics", use: "Circles and arcs are rasterised and hit-tested from their equations." },
    { name: "Seismology", use: "Epicentres are located by the intersection of distance circles around stations." },
    { name: "Geographic information systems", use: "Buffer zones and radius queries use the circle inequality on map coordinates." },
    { name: "Robotics", use: "Workspaces and joint paths of arms are unions of circles and arcs." }
  ],
  prereqWhy: {
    "g-circles": "The equation writes in coordinates the definition of a circle as all points at distance r from the centre.",
    "g-segments": "The Distance Formula from the centre (h, k) to a point (x, y), set equal to r and squared, is the standard form.",
    "a1-quad-sqrt": "Completing the square in x and in y turns general form into standard form, and the square root property gives r from r²."
  },
  unlocksWhy: {
    "a2-conic-sections": "The circle <span class=\"m\">(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></span> is the first conic, and expanding it gives the general form with equal <span class=\"m\"><i>x</i><sup>2</sup></span> and <span class=\"m\"><i>y</i><sup>2</sup></span> coefficients.",
    "trig-unit-circle": "The unit circle is the circle <span class=\"m\"><i>x</i>² + <i>y</i>² = 1</span>, and its equation becomes <span class=\"m\">sin² <i>t</i> + cos² <i>t</i> = 1</span>."
  },
  beyond: [
    { field: "Algebra II", why: "Circles are the first conic section; parabolas, ellipses and hyperbolas are brought to standard form by the same completing of the square." },
    { field: "Precalculus", why: "The parametric equations x = h + r cos t, y = k + r sin t and the unit circle x² + y² = 1 underlie trigonometric functions." },
    { field: "Calculus I", why: "Implicit differentiation of (x − h)² + (y − k)² = r² gives slope −(x − h)/(y − k), confirming the tangent is perpendicular to the radius." }
  ],
  mistakes: [
    { wrong: `Reading the centre of <span class="m">(<i>x</i> + 4)<sup>2</sup> + (<i>y</i> − 1)<sup>2</sup> = 9</span> as <span class="m">(4, −1)</span>.`, fix: `Standard form subtracts the centre: <span class="m"><i>x</i> + 4 = <i>x</i> − (−4)</span>, so the centre is <span class="m">(−4, 1)</span>.` },
    { wrong: `Taking the right side as the radius: <span class="m">(<i>x</i> − 1)<sup>2</sup> + <i>y</i><sup>2</sup> = 16</span> has <span class="m"><i>r</i> = 16</span>.`, fix: `The right side is <span class="m"><i>r</i><sup>2</sup></span>, so <span class="m"><i>r</i> = 4</span>. A right side of 7 gives <span class="m"><i>r</i> = √7</span>.` },
    { wrong: `Adding the completed-square terms on the left only.`, fix: `Adding 9 and 4 to the left changes the equation unless the same 13 is added to the right.` },
    { wrong: `Completing the square in <span class="m">2<i>x</i><sup>2</sup> + 2<i>y</i><sup>2</sup> − 8<i>x</i> = 10</span> without dividing by 2 first.`, fix: `Divide by 2: <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 4<i>x</i> = 5</span>, so <span class="m">(<i>x</i> − 2)<sup>2</sup> + <i>y</i><sup>2</sup> = 9</span>.` }
  ],
  practice: [
    { q: `Write the equation of the circle with centre <span class="m">(−4, 1)</span> and radius 3, in standard form and in general form.`, a: `<span class="m">(<i>x</i> + 4)<sup>2</sup> + (<i>y</i> − 1)<sup>2</sup> = 9</span>. Expanding, <span class="m"><i>x</i><sup>2</sup> + 8<i>x</i> + 16 + <i>y</i><sup>2</sup> − 2<i>y</i> + 1 = 9</span>, so <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 8<i>x</i> − 2<i>y</i> + 8 = 0</span>.` },
    { q: `A circle has centre <span class="m">(2, −3)</span> and passes through <span class="m">(5, 1)</span>. Write its equation.`, a: `<span class="m"><i>r</i><sup>2</sup> = (5 − 2)<sup>2</sup> + (1 + 3)<sup>2</sup> = 9 + 16 = 25</span> (Distance Formula), so <span class="m">(<i>x</i> − 2)<sup>2</sup> + (<i>y</i> + 3)<sup>2</sup> = 25</span>, with <span class="m"><i>r</i> = 5</span>.` },
    { q: `The endpoints of a diameter are <span class="m">(−1, 4)</span> and <span class="m">(5, −4)</span>. Write the circle's equation.`, a: `Centre = midpoint <span class="m">(2, 0)</span>. The diameter is <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">6<sup>2</sup> + 8<sup>2</sup></span> = 10</span>, so <span class="m"><i>r</i> = 5</span> and the equation is <span class="m">(<i>x</i> − 2)<sup>2</sup> + <i>y</i><sup>2</sup> = 25</span>.` },
    { q: `Describe the graph of each equation. (a) <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 4<i>x</i> − 10<i>y</i> + 29 = 0</span> (b) <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 2<i>x</i> + 6<i>y</i> + 15 = 0</span>`, a: `(a) <span class="m">(<i>x</i> + 2)<sup>2</sup> + (<i>y</i> − 5)<sup>2</sup> = −29 + 4 + 25 = 0</span>: only the single point <span class="m">(−2, 5)</span>. (b) <span class="m">(<i>x</i> − 1)<sup>2</sup> + (<i>y</i> + 3)<sup>2</sup> = −15 + 1 + 9 = −5</span>: no points, since a sum of squares cannot be negative. Neither graph is a circle.` }
  ],
  origin: `Describing curves by equations in two unknowns was developed independently by Pierre de Fermat, whose introduction to plane and solid loci was written around 1636 and circulated in manuscript, and René Descartes, in <i>La Géométrie</i> (1637).`
};
