window.ARITH = window.ARITH || {};

ARITH["g-tri-inequality"] = {
  title: "Triangle Inequalities",
  short: "Two sides always beat the third; big sides face big angles",
  grade: "Grade 10 · college-prep Geometry",
  hours: 3,
  voice: "plain",
  eyebrow: "Geometry · inequalities in triangles",
  hero: `<span class="m"><span class="c1">|<span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span>| &lt; <span class="c4"><i>c</i></span> &lt; <span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span></span></span>`,
  lede: `Three lengths make a triangle only when each is shorter than the other two together. Inside a triangle the sizes of sides and angles line up: the longest side faces the largest angle.`,
  plain: `<p>Pick up three sticks and try to make a triangle. If one stick is longer than the other two laid end to end, the short ones cannot reach each other, and there is no triangle. If it is exactly as long as the other two together, they lie flat along it. Only when every stick is shorter than the other two combined do you get a real triangle. That is the <b>Triangle Inequality</b>.</p>
<p>It also tells you how long a third side can be. With sides 5 and 8, the third side must be more than <span class="m">8 − 5 = 3</span> and less than <span class="m">8 + 5 = 13</span>.</p>
<p>Sides and angles are linked. The longest side sits across from the largest angle, and the shortest side across from the smallest. And if you keep two sides fixed and open the angle between them like a door hinge, the side across from that angle grows. That is the <b>Hinge Theorem</b>.</p>`,
  formal: `<div class="display"><b>Triangle Inequality Theorem.</b> The sum of the lengths of any two sides of a triangle is greater than the length of the third side: <i>a</i> + <i>b</i> &gt; <i>c</i>, <i>b</i> + <i>c</i> &gt; <i>a</i>, <i>a</i> + <i>c</i> &gt; <i>b</i>.<br><b>Corollary.</b> If two sides measure <i>a</i> and <i>b</i>, the third side <i>c</i> satisfies |<i>a</i> − <i>b</i>| &lt; <i>c</i> &lt; <i>a</i> + <i>b</i>. Conversely, three positive lengths satisfying all three inequalities are the sides of a triangle.</div>
<div class="display"><b>Theorem.</b> If one side of a triangle is longer than a second side, then the angle opposite the first side is larger than the angle opposite the second. <span class="dim">Converse: the side opposite the larger angle is the longer side.</span><br><b>Exterior Angle Inequality Theorem.</b> An exterior angle of a triangle is greater than either remote interior angle.<br><b>Hinge Theorem (SAS Inequality).</b> If two sides of one triangle are congruent to two sides of another, and the included angle of the first is larger, then the third side of the first is longer. <span class="dim">Converse (SSS Inequality): if the third side of the first is longer, its included angle is larger.</span></div>
<p>A consequence: the perpendicular segment from a point to a line is the shortest segment from the point to the line, because in the right triangle it forms with any other segment, the hypotenuse lies opposite the 90° angle, the largest.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Side a", desc: "One of the two given sides. In the lab it swings from one end of side <span class=\"m\"><i>c</i></span>." },
    { c: "c3", sym: `<i>b</i>`, name: "Side b", desc: "The second given side, swinging from the other end of <span class=\"m\"><i>c</i></span>." },
    { c: "c4", sym: `<i>c</i>`, name: "Side c", desc: "The third side being tested, or the side opposite the hinge angle." },
    { c: "c1", sym: `|<i>a</i> − <i>b</i>| &lt; <i>c</i> &lt; <i>a</i> + <i>b</i>`, name: "Allowed range", desc: "The open interval of lengths that make a true (non-degenerate) triangle with sides <span class=\"m\"><i>a</i></span> and <span class=\"m\"><i>b</i></span>." }
  ],
  steps: { title: "How to test lengths and order parts of a triangle", items: [
    `To test three lengths, add the two shortest. If their sum is greater than the longest, they form a triangle; if it is equal or smaller, they do not.`,
    `To find the possible third side from sides <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>, write the compound inequality <span class="m">|<i>a</i> − <i>b</i>| &lt; <i>c</i> &lt; <i>a</i> + <i>b</i></span>. Both ends are strict.`,
    `To order angles from sides, match each angle with the side opposite it, then sort: the longest side faces the largest angle.`,
    `To order sides from angles, do the reverse: the largest angle faces the longest side.`,
    `For two triangles with two pairs of congruent sides, compare the included angles (Hinge Theorem) or the third sides (its converse).`
  ] },
  example: {
    prompt: `A welder is building a triangular bracket from a 7 ft steel bar and a 4 ft steel bar, plus a third bar cut to a whole number of feet. Which lengths are possible? If she uses the longest possible bar, which angle of the bracket is largest?`,
    lines: [
      { math: `<span class="m"><span class="c2">7</span> + <span class="c3">4</span> &gt; <span class="c4"><i>c</i></span> &nbsp;→&nbsp; <span class="c4"><i>c</i></span> &lt; 11</span>`, note: "Triangle Inequality: the two given bars must reach past the third." },
      { math: `<span class="m"><span class="c4"><i>c</i></span> + <span class="c3">4</span> &gt; <span class="c2">7</span> &nbsp;→&nbsp; <span class="c4"><i>c</i></span> &gt; 3</span>`, note: "The third bar plus the short bar must beat the long bar. The third inequality, c + 7 > 4, always holds." },
      { math: `<span class="m c1">3 &lt; <i>c</i> &lt; 11</span>`, note: "Corollary: |7 − 4| < c < 7 + 4." },
      { math: `<span class="m"><i>c</i> ∈ {4, 5, 6, 7, 8, 9, 10}</span>`, note: "Whole numbers strictly inside the interval: 7 choices." },
      { math: `<span class="m"><i>c</i> = 10: largest angle is opposite the 10 ft bar</span>`, note: "Larger side opposite larger angle: it is the angle where the 7 ft and 4 ft bars meet." },
      { math: `<span class="m">7 + 4 = 11 &gt; 10 ✓ &nbsp;&nbsp; 10 + 4 &gt; 7 ✓ &nbsp;&nbsp; 10 + 7 &gt; 4 ✓</span>`, note: "Check: with an 11 ft bar the three would lie flat, so 10 ft is the longest that works." }
    ],
    answer: `The third bar can be 4, 5, 6, 7, 8, 9 or 10 ft long. With the 10 ft bar, the largest angle is the one between the 7 ft and 4 ft bars.`
  },
  why: `<p>The Triangle Inequality is the formal version of "a straight line is the shortest path". It is why a detour is never shorter than going direct, why a GPS can reject impossible distance readings, and why a truss designer checks that member lengths can actually close up.</p>
<p>The side–angle and hinge relationships let you compare parts of triangles without measuring every angle: a door, a crane boom or a robot arm reaches farther as its joint opens. In higher mathematics the inequality becomes the defining property of any distance, from vectors to complex numbers to error measures in data science.</p>`,
  careers: [
    { role: "Structural engineer", use: "Checks that the three member lengths of each triangle in a truss satisfy the Triangle Inequality before detailing the joints." },
    { role: "Robotics engineer", use: "Uses the range |L₁ − L₂| ≤ d ≤ L₁ + L₂ to decide whether a two-link arm can reach a target at distance d, the endpoints being the fully folded and fully stretched arm." },
    { role: "Navigator", use: "Knows that a two-leg route between ports is never shorter than the direct course, and bounds the distance between two waypoints." },
    { role: "Surveyor", use: "Rejects inconsistent distance measurements between three stations that break the Triangle Inequality." },
    { role: "Data scientist", use: "Relies on the Triangle Inequality of a distance metric to prune searches in nearest-neighbour algorithms." },
    { role: "Mechanical designer", use: "Sizes the gas strut on a hinged hatch, since the distance between its two mounting points grows as the hatch opens (Hinge Theorem)." }
  ],
  life: [
    "Seeing why cutting across a park is shorter than walking around it",
    "Checking whether three planks can be nailed into a triangle",
    "Opening a folding ladder or laptop and watching the gap widen",
    "Estimating how far apart two friends could be if each lives a known distance from you",
    "Adjusting an ironing board or camera tripod by changing a hinge angle"
  ],
  fields: [
    { name: "Engineering", use: "Linkages, trusses and robot arms are checked for reachability with the Triangle Inequality." },
    { name: "Computer science", use: "Metric-space search structures and route planning use the inequality to skip impossible candidates." },
    { name: "Physics", use: "The magnitude of a sum of two vectors lies between the difference and the sum of their magnitudes." },
    { name: "Navigation", use: "Bounds on distances between positions follow from the inequality applied to known legs." }
  ],
  prereqWhy: {
    "g-congruence": "The side–angle theorems and the Hinge Theorem are proved by building congruent triangles inside a triangle and using the Isosceles Triangle Theorem and CPCTC.",
    "a1-compound": "The range of the third side is the compound inequality |a − b| < c < a + b, and hinge problems are solved as compound inequalities."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Trigonometry", why: "The Law of Cosines, c² = a² + b² − 2ab cos C, makes the Hinge Theorem quantitative: c grows as C grows from 0° to 180°." },
    { field: "Precalculus", why: "|u + v| ≤ |u| + |v| for vectors and complex numbers is the same inequality in algebraic form." },
    { field: "Linear Algebra", why: "Every norm must satisfy the Triangle Inequality; it is one of the axioms that define distance." },
    { field: "Real Analysis", why: "Proofs of limits and continuity use |x + y| ≤ |x| + |y| constantly." }
  ],
  mistakes: [
    { wrong: `Checking only one sum, such as <span class="m">4 + 11 &gt; 6</span>, and declaring 4, 6, 11 a triangle.`, fix: `All three sums must hold. The decisive one adds the two shortest sides: <span class="m">4 + 6 = 10 &lt; 11</span>, so there is no triangle.` },
    { wrong: `Sides 5, 7, 12 make a very flat triangle.`, fix: `<span class="m">5 + 7 = 12</span> gives a degenerate figure: the three segments lie on one line. The inequality is strict, so this is not a triangle.` },
    { wrong: `Writing the third-side range as <span class="m">3 ≤ <i>c</i> ≤ 11</span>.`, fix: `The endpoints give degenerate (flat) figures, so the range is open: <span class="m">3 &lt; <i>c</i> &lt; 11</span>.` },
    { wrong: `Matching an angle with an adjacent side when ordering parts.`, fix: `Pair each angle with the side opposite it, the one it does not touch. In △<i>ABC</i>, ∠<i>A</i> is opposite <span class="m"><span class="ov"><i>BC</i></span></span>.` }
  ],
  practice: [
    { q: `Can segments of lengths 4, 6 and 11 form a triangle? What about 5, 7 and 12?`, a: `No: <span class="m">4 + 6 = 10 &lt; 11</span>. No: <span class="m">5 + 7 = 12</span>, which is not greater than 12, so the segments lie flat (degenerate).` },
    { q: `Two sides of a triangle measure 9 cm and 15 cm. Write the possible lengths <span class="m"><i>x</i></span> of the third side as a compound inequality.`, a: `<span class="m">15 − 9 &lt; <i>x</i> &lt; 15 + 9</span>, so <span class="m">6 &lt; <i>x</i> &lt; 24</span>.` },
    { q: `In △<i>ABC</i>, <span class="m"><i>AB</i> = 8</span>, <span class="m"><i>BC</i> = 11</span> and <span class="m"><i>AC</i> = 6</span>. List the angles from smallest to largest.`, a: `Opposite sides: ∠<i>C</i> faces <span class="m"><i>AB</i> = 8</span>, ∠<i>A</i> faces <span class="m"><i>BC</i> = 11</span>, ∠<i>B</i> faces <span class="m"><i>AC</i> = 6</span>. Smallest to largest: <span class="m">∠<i>B</i>, ∠<i>C</i>, ∠<i>A</i></span>.` },
    { q: `In △<i>ABC</i> and △<i>DEF</i>, <span class="m"><i>AB</i> = <i>DE</i> = 7</span>, <span class="m"><i>BC</i> = <i>EF</i> = 9</span>, <span class="m">m∠<i>B</i> = (3<i>x</i> + 10)°</span>, <span class="m">m∠<i>E</i> = 55°</span> and <span class="m"><i>AC</i> &gt; <i>DF</i></span>. Find the possible values of <span class="m"><i>x</i></span>.`, a: `Converse of the Hinge Theorem: <span class="m">3<i>x</i> + 10 &gt; 55</span>, so <span class="m"><i>x</i> &gt; 15</span>. An angle of a triangle is less than 180°: <span class="m">3<i>x</i> + 10 &lt; 180</span>, so <span class="m"><i>x</i> &lt; 170/3</span>. Answer: <span class="m">15 &lt; <i>x</i> &lt; <span class="fr"><span>170</span><span>3</span></span> ≈ 56.7</span>.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) proves these in Book I: the Exterior Angle Inequality is Proposition 16, the side–angle theorems are 18 and 19, the Triangle Inequality is 20, and the Hinge Theorem and its converse are 24 and 25. Proclus reports that the Epicureans mocked Proposition 20 as obvious even to a donkey, which will walk straight to its food.`
};
