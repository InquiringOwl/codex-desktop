window.ARITH = window.ARITH || {};

ARITH["g-circle-measure"] = {
  title: "Circumference, Arc Length & Area of Circles",
  short: "C = 2πr, A = πr², and the slice that fits a central angle",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · measuring circles",
  hero: `<span class="m"><i>C</i> = 2π<span class="c2"><i>r</i></span> &nbsp;·&nbsp; <span class="c1"><i>A</i></span> = π<span class="c2"><i>r</i></span><sup>2</sup> &nbsp;·&nbsp; <span class="c3"><i>s</i></span> = <span class="fr"><span><i>θ</i></span><span>360°</span></span> · 2π<span class="c2"><i>r</i></span></span>`,
  lede: `Every circle's circumference is the same multiple of its diameter, the number π. From that one constant come the circle's area, the length of any arc and the area of any sector.`,
  plain: `<p>Wrap a string once around a can and lay it next to the can's width. It is a little more than three times as long. For a coin, a wheel or a planet's orbit the ratio is exactly the same, about 3.14159, because all circles are scaled copies of each other. That number is <b>π</b>. So the distance around a circle, its <b>circumference</b>, is π times the diameter, or <span class="m">2π<i>r</i></span>.</p>
<p>To find the area, slice a circle into many thin wedges like a pizza and lay them alternately point up and point down. They form something close to a parallelogram whose height is the radius and whose base is half the circumference, <span class="m">π<i>r</i></span>. Its area is <span class="m">π<i>r</i> · <i>r</i> = π<i>r</i><sup>2</sup></span>, and the more slices you cut, the closer the fit.</p>
<p>A slice with a central angle of 90° is a quarter of the circle, so its curved edge is a quarter of the circumference and its area a quarter of the circle's area. Any central angle works the same way: take the fraction <span class="m"><i>θ</i>/360°</span> of the whole.</p>`,
  formal: `<p>All circles are similar, so the ratio of circumference to diameter is the same for every circle; this constant is <b>π</b> ≈ 3.14159, an irrational number. The <b>circumference</b> is the limit of the perimeters of inscribed regular polygons as the number of sides increases, and the area of the circle is the limit of their areas. For a regular polygon with <b>apothem</b> <span class="m"><i>a</i></span> (the distance from the centre to a side) and perimeter <span class="m"><i>P</i></span>, the area is <span class="m">½<i>aP</i></span>; as the number of sides <span class="m"><i>n</i></span> grows without bound, <span class="m"><i>a</i></span> approaches <span class="m"><i>r</i></span> and <span class="m"><i>P</i></span> approaches <span class="m"><i>C</i></span>, so <span class="m"><i>A</i> = ½<i>rC</i> = π<i>r</i><sup>2</sup></span>.</p>
<div class="display"><i>C</i> = π<i>d</i> = 2π<span class="c2"><i>r</i></span> &nbsp;&nbsp; <span class="c1"><i>A</i></span> = π<span class="c2"><i>r</i></span><sup>2</sup><br>arc length &nbsp;<span class="c3"><i>s</i></span> = <span class="fr"><span>m⌢<i>AB</i></span><span>360°</span></span> · 2π<span class="c2"><i>r</i></span> &nbsp;&nbsp; sector area &nbsp;<span class="c1"><i>A</i></span> = <span class="fr"><span>m⌢<i>AB</i></span><span>360°</span></span> · π<span class="c2"><i>r</i></span><sup>2</sup><br>regular polygon &nbsp;<i>A</i> = ½<i>aP</i> &nbsp;&nbsp; radian measure &nbsp;<i>θ</i> = <span class="fr"><span><i>s</i></span><span><i>r</i></span></span>, &nbsp;180° = π rad</div>
<p>A <b>sector</b> is the region bounded by two radii and their intercepted arc; a <b>segment</b> of a circle is the region between a chord and its arc, with area (sector) − (triangle) for a minor arc. Arc <i>measure</i> m⌢<i>AB</i> is in degrees and depends only on the central angle; arc <i>length</i> is a distance and also depends on <span class="m"><i>r</i></span>. The radian measure of a central angle is the arc length divided by the radius, so a full turn is <span class="m">2π<i>r</i>/<i>r</i> = 2π</span> radians.</p>`,
  legend: [
    { c: "c2", sym: `<i>r</i>`, name: "Radius", desc: "The distance from the centre to the circle. The diameter is 2<i>r</i>." },
    { c: "c3", sym: `<i>s</i>`, name: "Arc length", desc: "The distance along the circle between the ends of an arc: the fraction θ/360° of the circumference." },
    { c: "c1", sym: `<i>A</i>`, name: "Area", desc: "The area of the circle, πr², or of a sector, the fraction θ/360° of it." },
    { c: "c4", sym: `<i>n</i>-gon`, name: "Inscribed polygon", desc: "A regular polygon with its vertices on the circle. Its perimeter and area approach the circle's as the number of sides grows." }
  ],
  steps: { title: "How to measure a circle, arc or sector", items: [
    `Find the radius. If a diameter is given, halve it.`,
    `For the whole circle, use <span class="m"><i>C</i> = 2π<i>r</i></span> and <span class="m"><i>A</i> = π<i>r</i><sup>2</sup></span>.`,
    `For an arc or sector, write the fraction of the circle, <span class="m"><i>θ</i>/360°</span>, using the central angle (the arc's measure), and simplify it.`,
    `Multiply the fraction by <span class="m">2π<i>r</i></span> for arc length or by <span class="m">π<i>r</i><sup>2</sup></span> for sector area. Keep π symbolic for the exact answer.`,
    `Round at the end, give units (length or square units), and check against the whole circle: a 90° sector must be a quarter of it.`
  ] },
  example: {
    prompt: `A rotary lawn sprinkler throws water 12 m and is set to sweep a 135° arc. What area does it water, and how long is the curved outer edge of the wet region? Give exact answers and answers to the nearest tenth.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>r</i> = 12</span>, &nbsp;<span class="fr"><span>135°</span><span>360°</span></span> = <span class="fr"><span>3</span><span>8</span></span></span>`, note: "The watered region is a sector with radius 12 m and central angle 135°, which is 3/8 of the full circle." },
      { math: `<span class="m"><span class="c1"><i>A</i></span> = <span class="fr"><span>3</span><span>8</span></span> · π(<span class="c2">12</span>)<sup>2</sup> = 54π</span>`, note: "Sector area: the fraction times πr² = 144π." },
      { math: `<span class="m"><span class="c1"><i>A</i></span> ≈ 169.6 m²</span>`, note: "54 × 3.14159… ≈ 169.65." },
      { math: `<span class="m"><span class="c3"><i>s</i></span> = <span class="fr"><span>3</span><span>8</span></span> · 2π(<span class="c2">12</span>) = 9π</span>`, note: "Arc length: the fraction times the circumference 24π." },
      { math: `<span class="m"><span class="c3"><i>s</i></span> ≈ 28.3 m</span>`, note: "9 × 3.14159… ≈ 28.27." },
      { math: `<span class="m"><span class="fr"><span>9π</span><span>12</span></span> = <span class="fr"><span>3π</span><span>4</span></span> rad = 135°</span>`, note: "Check with radian measure: s/r = 3π/4, and 3π/4 × 180°/π = 135°." }
    ],
    answer: `The sprinkler waters <span class="m">54π ≈ 169.6</span> m², and the outer edge is <span class="m">9π ≈ 28.3</span> m long.`
  },
  why: `<p>Circles are everywhere things turn or spread out evenly: wheels, pipes, gears, tanks, round tables, sprinkler patterns, radar sweeps. Circumference tells you how far a wheel rolls in one turn and how much trim goes around a round table. Area tells you how much a pipe can carry, how much pizza you get for the price, or how much ground a sprinkler covers.</p>
<p>The ideas here lead straight into later math. Arc length divided by radius is the radian, the natural angle unit of trigonometry and calculus. The polygon argument that squeezes the circle between straight-sided shapes is an early limit, and the formulas <span class="m">2π<i>r</i></span> and <span class="m">π<i>r</i><sup>2</sup></span> feed the surface area and volume of cylinders, cones and spheres.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Relates a wheel or pulley's rotation to the distance moved, one circumference 2πr per revolution, when sizing drives and belts." },
    { role: "Plumber", use: "Compares pipe capacities by cross-sectional area πr², so doubling the diameter gives four times the area." },
    { role: "Irrigation technician", use: "Computes the sector area each sprinkler head covers from its throw radius and arc setting to balance water output." },
    { role: "Machinist", use: "Sets lathe speeds from surface speed, which is the circumference πd times the revolutions per minute." },
    { role: "Civil engineer", use: "Lays out curved roads and rail by arc length, s = rθ with θ in radians, from the curve's radius and central angle." },
    { role: "Baker", use: "Scales recipes between round pans by area: a 10 in pan holds (10/8)² ≈ 1.56 times as much as an 8 in pan." }
  ],
  life: [
    "Comparing the price per square inch of a 12 in and a 16 in pizza",
    "Working out how far a bicycle goes in one turn of its wheels",
    "Buying edging for a round flower bed",
    "Setting a sprinkler to cover a wedge of lawn",
    "Choosing a round tablecloth that hangs down the right amount"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Gear ratios, belt drives and rotational speed all use circumference." },
    { name: "Physics", use: "Circular motion uses arc length s = rθ and angular speed in radians per second." },
    { name: "Astronomy", use: "Orbital distances and angular sizes are worked out from arcs of circles." },
    { name: "Fluid dynamics", use: "Flow through a pipe depends on its circular cross-sectional area." }
  ],
  prereqWhy: {
    "g-area-polygons": "The area of a circle is reached through regular polygons, whose areas are sums of triangle areas ½bh.",
    "g-special-right": "The apothem and side of an inscribed square, hexagon or equilateral triangle come from 45°-45°-90° and 30°-60°-90° triangles.",
    "g-circles": "Arc length and sector area use the central angle and the arc measure m⌢AB defined there."
  },
  unlocksWhy: {
    "g-surface-area": "A cylinder's lateral surface unrolls into a rectangle 2πr wide, and a cone's into a sector of a circle, giving 2πrh and πrℓ.",
    "g-volume": "Cylinders and cones have circular bases of area πr², which multiply into V = πr²h and V = ⅓πr²h."
  },
  beyond: [
    { field: "Trigonometry", why: "Radian measure, s/r, is the angle unit for the unit circle and for graphs of sine and cosine." },
    { field: "Calculus I", why: "The derivative of sin x is cos x only when x is in radians, and the area of a circle is a classic integral." },
    { field: "Physics", why: "Rotational motion uses arc length s = rθ, speed v = rω and centripetal acceleration, all built on the circle." },
    { field: "Calculus II", why: "Arc length and area of polar regions generalise the sector formulas to curves." }
  ],
  mistakes: [
    { wrong: `Using the diameter as the radius: a 10 in circle has area <span class="m">100π</span>.`, fix: `The radius is half the diameter. <span class="m"><i>A</i> = π(5)<sup>2</sup> = 25π</span>.` },
    { wrong: `Mixing up <span class="m">2π<i>r</i></span> and <span class="m">π<i>r</i><sup>2</sup></span>.`, fix: `Circumference is a length, so it has <span class="m"><i>r</i></span> to the first power; area is in square units, so it has <span class="m"><i>r</i><sup>2</sup></span>.` },
    { wrong: `Saying an arc of 60° is 60 units long.`, fix: `Arc measure is an angle in degrees. Arc length is a distance: in a circle of radius 6, a 60° arc is <span class="m">(60/360) · 12π = 2π ≈ 6.3</span> units.` },
    { wrong: `Doubling the radius doubles the area.`, fix: `Area grows with the square of the radius, so doubling <span class="m"><i>r</i></span> multiplies the area by 4. Circumference doubles.` }
  ],
  practice: [
    { q: `A circle has diameter 10 in. Find its circumference and area, exactly and to the nearest tenth.`, a: `<span class="m"><i>r</i> = 5</span>. <span class="m"><i>C</i> = 10π ≈ 31.4</span> in; <span class="m"><i>A</i> = 25π ≈ 78.5</span> in².` },
    { q: `A bicycle wheel is 26 in in diameter. About how many full turns does it make in 1 mile (63,360 in)?`, a: `One turn covers <span class="m">26π ≈ 81.68</span> in. <span class="m">63,360 ÷ 26π ≈ 775.7</span>, so about 776 turns (775 complete turns).` },
    { q: `Find the area of a regular hexagon with side 8.`, a: `The hexagon is six equilateral triangles of side 8, so the apothem is the long leg of a 30°-60°-90° triangle with short leg 4: <span class="m"><i>a</i> = 4√3</span>. Perimeter <span class="m">48</span>. <span class="m"><i>A</i> = ½ · 4√3 · 48 = 96√3 ≈ 166.3</span>.` },
    { q: `In a circle of radius 6, chord <span class="ov"><i>AB</i></span> cuts off a 60° arc. Find the arc length, the area of the sector and the area of the segment between the chord and the arc.`, a: `Arc: <span class="m">(60/360) · 12π = 2π ≈ 6.3</span>. Sector: <span class="m">(60/360) · 36π = 6π ≈ 18.8</span>. △<i>OAB</i> is equilateral (two radii and a 60° angle), with area <span class="m">(√3/4) · 6<sup>2</sup> = 9√3</span>. Segment: <span class="m">6π − 9√3 ≈ 3.3</span>.` }
  ],
  origin: `In <i>Measurement of a Circle</i> (3rd century BCE) Archimedes proved that a circle's area equals that of a right triangle with legs equal to the radius and the circumference, and, using inscribed and circumscribed regular 96-gons, that <span class="m">3<span class="fr"><span>10</span><span>71</span></span> &lt; π &lt; 3<span class="fr"><span>1</span><span>7</span></span></span>.`
};
