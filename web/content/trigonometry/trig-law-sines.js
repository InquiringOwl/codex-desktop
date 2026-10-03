window.ARITH = window.ARITH || {};
ARITH["trig-law-sines"] = {
  title: "The Law of Sines",
  short: "a/sin A = b/sin B = c/sin C: solving AAS and ASA, bearings",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Trigonometry · oblique triangles",
  hero: `<span class="m"><span class="fr"><span class="c3"><i>a</i></span><span>sin <span class="c1"><i>A</i></span></span></span> = <span class="fr"><span class="c2"><i>b</i></span><span>sin <i>B</i></span></span> = <span class="fr"><span><i>c</i></span><span>sin <i>C</i></span></span></span>`,
  lede: `In any triangle, each side divided by the sine of the angle opposite it gives the same number. That one fact solves a triangle without a right angle once you know two angles and one side (<b>AAS</b> or <b>ASA</b>).`,
  plain: `<p>A triangle with no right angle is called <b>oblique</b>. SOH-CAH-TOA does not apply to it directly, because those ratios need a right angle. The trick is to make one: drop a perpendicular from a vertex to the opposite side. The two right triangles it creates share that height.</p>
<p>Write the height twice, once from each right triangle, and set the two expressions equal. Out comes the rule: a side and the sine of its opposite angle always come in the same proportion. A long side sits across from a large angle, and the law of sines says exactly how much larger.</p>
<p>The standard labels make the rule easy to use: vertices <i>A</i>, <i>B</i>, <i>C</i>, and side <i>a</i> across from angle <i>A</i>, side <i>b</i> across from <i>B</i>, side <i>c</i> across from <i>C</i>. To use the law you need one full pair, a side and its opposite angle, plus one more part. Two angles and any side give such a pair, since the third angle is 180° minus the other two.</p>
<p>Surveyors and navigators use it constantly. Two observers a known distance apart each take a bearing on the same far point. The bearings give two angles of a triangle, the distance between the observers is a side, and the law of sines gives the distance to the point.</p>`,
  formal: `<p><b>Law of Sines.</b> In any triangle <span class="m"><i>ABC</i></span> with sides <span class="m"><span class="c3"><i>a</i></span>, <span class="c2"><i>b</i></span>, <i>c</i></span> opposite angles <span class="m"><span class="c1"><i>A</i></span>, <i>B</i>, <i>C</i></span>,</p>
<div class="display"><span class="fr"><span class="c3"><i>a</i></span><span>sin <span class="c1"><i>A</i></span></span></span> = <span class="fr"><span class="c2"><i>b</i></span><span>sin <i>B</i></span></span> = <span class="fr"><span><i>c</i></span><span>sin <i>C</i></span></span> &nbsp; <span class="dim">equivalently</span> &nbsp; <span class="fr"><span>sin <span class="c1"><i>A</i></span></span><span class="c3"><i>a</i></span></span> = <span class="fr"><span>sin <i>B</i></span><span class="c2"><i>b</i></span></span> = <span class="fr"><span>sin <i>C</i></span><span><i>c</i></span></span></div>
<p><b>Proof (altitude).</b> Let <span class="m c4"><i>h</i></span> be the altitude from <span class="m"><i>C</i></span> to the line <span class="m"><i>AB</i></span>, with foot <span class="m"><i>D</i></span>. If <span class="m"><span class="c1"><i>A</i></span></span> and <span class="m"><i>B</i></span> are acute, <span class="m"><i>D</i></span> lies on side <span class="m"><i>c</i></span>, and the right triangles <span class="m"><i>ADC</i></span> and <span class="m"><i>BDC</i></span> give <span class="m"><span class="c4"><i>h</i></span> = <span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span></span> and <span class="m"><span class="c4"><i>h</i></span> = <span class="c3"><i>a</i></span> sin <i>B</i></span>. If <span class="m c1"><i>A</i></span> is obtuse, <span class="m"><i>D</i></span> lies on the extension of <span class="m"><i>AB</i></span> beyond <span class="m"><i>A</i></span>; the angle at <span class="m"><i>A</i></span> inside right triangle <span class="m"><i>ADC</i></span> is <span class="m">180° − <span class="c1"><i>A</i></span></span>, so <span class="m"><span class="c4"><i>h</i></span> = <span class="c2"><i>b</i></span> sin(180° − <span class="c1"><i>A</i></span>) = <span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span></span>, and still <span class="m"><span class="c4"><i>h</i></span> = <span class="c3"><i>a</i></span> sin <i>B</i></span>. (If <span class="m"><i>A</i></span> = 90°, then <span class="m"><i>h</i> = <i>b</i></span> and sin <i>A</i> = 1.) In every case <span class="m"><span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span> = <span class="c3"><i>a</i></span> sin <i>B</i></span>; dividing by <span class="m">sin <span class="c1"><i>A</i></span> sin <i>B</i></span> gives <span class="m"><span class="c3"><i>a</i></span>/sin <span class="c1"><i>A</i></span> = <span class="c2"><i>b</i></span>/sin <i>B</i></span>. The altitude from <span class="m"><i>A</i></span> gives <span class="m"><i>b</i>/sin <i>B</i> = <i>c</i>/sin <i>C</i></span> the same way. The common ratio equals <span class="m">2<i>R</i></span>, the diameter of the circumscribed circle.</p>
<p><b>When it applies.</b> <b>AAS</b> (two angles and a side not between them) and <b>ASA</b> (two angles and the side between them) each determine exactly one triangle: find the third angle from <span class="m"><i>A</i> + <i>B</i> + <i>C</i> = 180°</span>, then each unknown side from a known pair. <b>SSA</b> (two sides and an angle opposite one of them) also gives a known pair, but may fit 0, 1 or 2 triangles: the ambiguous case. <b>SAS</b> and <b>SSS</b> give no side together with its opposite angle, so the law of sines cannot start; they need the law of cosines.</p>
<p><b>Bearings.</b> A <b>quadrant bearing</b> such as N 35° E starts at north and turns 35° toward east (always less than 90°). A <b>navigation bearing</b> such as 035° or 290° is the angle measured clockwise from north, written with three digits. So N 35° E = 035°, S 20° E = 160° and N 70° W = 290°. Unknown values here are rounded only at the end: sides to the nearest tenth, angles to the nearest tenth of a degree.</p>`,
  legend: [
    { c: "c1", sym: "<i>A</i>", name: "Angle A", desc: "The angle at vertex A. Every angle is paired with the side across from it." },
    { c: "c3", sym: "<i>a</i>", name: "Side a", desc: "The side opposite angle A, from B to C." },
    { c: "c2", sym: "<i>b</i>", name: "Side b", desc: "The side opposite angle B, from A to C." },
    { c: "c4", sym: "<i>h</i>", name: "Altitude", desc: "The perpendicular from C to line AB. It equals b sin A and a sin B, which proves the law." },
    { c: "c5", sym: "<i>x</i>", name: "Found part", desc: "An angle or side computed from the law, shown once its step is taken." }
  ],
  steps: {
    title: "How to solve an AAS or ASA triangle",
    items: [
      "Sketch the triangle and label it in the standard way: side <span class=\"m\"><i>a</i></span> across from angle <span class=\"m\"><i>A</i></span>, and so on. Mark which three parts are given.",
      "Find the third angle: <span class=\"m\"><i>C</i> = 180° − <i>A</i> − <i>B</i></span>. If the two given angles add to 180° or more, no triangle exists.",
      "Choose the known pair: the given side and the angle opposite it. Now you know the common ratio, for example <span class=\"m\"><i>c</i>/sin <i>C</i></span>.",
      "For each unknown side, set its ratio equal to the known one and solve: <span class=\"m\"><i>a</i> = <i>c</i> sin <i>A</i>/sin <i>C</i></span>.",
      "Round only at the end, and check that the longest side is across from the largest angle."
    ]
  },
  example: {
    prompt: `Fire towers <i>A</i> and <i>B</i> are 10.0 miles apart, with <i>B</i> due east of <i>A</i>. A fire <i>F</i> is seen from <i>A</i> on bearing N 50° E and from <i>B</i> on bearing N 30° W. How far is the fire from each tower? Round to the nearest tenth of a mile.`,
    lines: [
      { math: `<span class="m">∠<span class="c1"><i>A</i></span> = 90° − 50° = 40°, &nbsp; ∠<i>B</i> = 90° − 30° = 60°</span>`, note: "Line AB runs east-west. A bearing measures from north, so the angle with the east-west line is 90° minus the bearing angle." },
      { math: `<span class="m">∠<i>F</i> = 180° − 40° − 60° = <span class="c5">80°</span></span>`, note: "The angles of a triangle sum to 180°. This is ASA: two angles and the side AB between them." },
      { math: `<span class="m"><span class="fr"><span><i>f</i></span><span>sin <i>F</i></span></span> = <span class="fr"><span>10.0</span><span>sin 80°</span></span></span>`, note: "The known pair is the side AB = 10.0, opposite the angle at F." },
      { math: `<span class="m"><i>AF</i> = <span class="fr"><span>10.0 sin 60°</span><span>sin 80°</span></span> ≈ <span class="c5">8.8</span> mi</span>`, note: "AF is across from the angle at B, so it pairs with sin 60°." },
      { math: `<span class="m"><i>BF</i> = <span class="fr"><span>10.0 sin 40°</span><span>sin 80°</span></span> ≈ <span class="c5">6.5</span> mi</span>`, note: "BF is across from the angle at A, so it pairs with sin 40°." },
      { math: `<span class="m">6.5 &lt; 8.8 &lt; 10.0 &nbsp; and &nbsp; 40° &lt; 60° &lt; 80°</span>`, note: "Check: the sides are in the same order as their opposite angles." }
    ],
    answer: `The fire is about <span class="m c5">8.8</span> miles from tower <i>A</i> and <span class="m c5">6.5</span> miles from tower <i>B</i>.`
  },
  why: `<p>Right-triangle trigonometry stops working the moment the right angle disappears, and most triangles in the world have none. The law of sines is the first tool that handles any triangle. With it, a single measured baseline and two sightings fix the position of a point you cannot reach: a fire, a ship, a mountain peak or a star.</p>
<p>It is also the first place where the sine of an obtuse angle matters. The proof uses sin(180° − A) = sin A, which is why the unit-circle definition of sine had to come first. The same relation is behind the ambiguous case, where one sine value belongs to two different angles.</p>`,
  careers: [
    { role: "Land surveyor", use: "Fixes the position of a corner or a peak by triangulation: a measured baseline plus two angles, then the law of sines for the distances." },
    { role: "Wildland fire lookout", use: "Reports a smoke column by bearing; dispatchers combine bearings from two towers to locate the fire." },
    { role: "Marine navigator", use: "Plots a ship's distance from a lighthouse from two bearings taken a known run apart (a running fix)." },
    { role: "Civil engineer", use: "Finds member lengths in a non-right truss or the span of a bridge across a gorge from angles measured on one side." },
    { role: "Astronomer", use: "Computes distances to nearby stars by parallax, a very thin triangle whose base is the diameter of Earth's orbit." },
    { role: "Forester", use: "Estimates the height of a tree on a slope from two angle readings and the distance walked between them." }
  ],
  life: [
    "Two friends on a beach 200 m apart can locate a swimmer by each pointing a phone compass at them",
    "A hiker can estimate the distance to a summit by taking compass bearings from two points on a straight trail",
    "Phone tower triangulation uses the same geometry as two fire lookouts",
    "Measuring the width of a river without crossing it takes one baseline and two angle readings",
    "Rangefinders in some cameras use a small baseline and an angle to find focus distance"
  ],
  fields: [
    { name: "Surveying and geodesy", use: "Triangulation networks that mapped whole countries were solved with the law of sines, triangle by triangle." },
    { name: "Navigation", use: "Bearings from two known points give a position fix at their intersection." },
    { name: "Astronomy", use: "Parallax distances and the geometry of the Earth-Sun-planet triangle." },
    { name: "Physics", use: "Resolving forces with Lami's theorem, the law of sines for three forces in equilibrium." }
  ],
  prereqWhy: {
    "trig-any-angle": "The proof and every obtuse triangle need the sine of an angle between 90° and 180°, defined there, together with sin(180° − θ) = sin θ from reference angles.",
    "g-triangle-angles": "The angle sum of 180° gives the third angle in every AAS and ASA problem, and the larger side lies opposite the larger angle."
  },
  unlocksWhy: {
    "trig-ambiguous": "Given two sides and an angle opposite one of them, the law of sines gives a sine value that may fit no angle, one angle or two supplementary angles.",
    "trig-law-cosines": "SAS and SSS give no side with its opposite angle, so the law of sines cannot start; the law of cosines fills that gap, and the two laws are then used together."
  },
  beyond: [
    { field: "Physics (Mechanics)", why: "Lami's theorem for three concurrent forces in equilibrium is the law of sines applied to the triangle of forces." },
    { field: "Navigation/Surveying", why: "Triangulation, resection and running fixes all reduce to solving oblique triangles." },
    { field: "Precalculus", why: "The law of sines and vectors together solve force and velocity problems where the triangle is not right." },
    { field: "Calculus III", why: "The spherical law of sines extends the result to triangles on a sphere, used for great-circle routes." }
  ],
  mistakes: [
    { wrong: `Pairing a side with an angle next to it: <span class="m"><i>a</i>/sin <i>B</i></span>`, fix: `Each side goes with the angle across from it. Side <span class="m"><i>a</i></span> runs from <span class="m"><i>B</i></span> to <span class="m"><i>C</i></span>, so it pairs with <span class="m">sin <i>A</i></span>.` },
    { wrong: `Using the law of sines on an SAS triangle`, fix: `With two sides and the included angle, no side is known together with its opposite angle. Use the law of cosines first.` },
    { wrong: `Taking the bearing angle as the interior angle`, fix: `A bearing is measured from north. Draw the north line at each observer and find the angle between the sight line and the baseline, often 90° minus the bearing or a difference of two bearings.` },
    { wrong: `Rounding the third angle or a side early and reusing it`, fix: `Keep full calculator values until the end. Rounded intermediate values can shift the final answer by a tenth or more.` }
  ],
  practice: [
    { q: `In triangle <span class="m"><i>ABC</i></span>, <span class="m"><i>A</i> = 40°</span>, <span class="m"><i>B</i> = 60°</span> and <span class="m"><i>a</i> = 10</span>. Solve the triangle. Round sides to the nearest tenth.`, a: `<span class="m"><i>C</i> = 180° − 40° − 60° = 80°</span>. The known pair is <span class="m">10/sin 40°</span>. <span class="m"><i>b</i> = 10 sin 60°/sin 40° ≈ 13.5</span>, <span class="m"><i>c</i> = 10 sin 80°/sin 40° ≈ 15.3</span>.` },
    { q: `In triangle <span class="m"><i>ABC</i></span>, <span class="m"><i>A</i> = 28°</span>, <span class="m"><i>C</i> = 110°</span> and the side between them is <span class="m"><i>b</i> = 15</span>. Solve the triangle. Round sides to the nearest tenth.`, a: `ASA. <span class="m"><i>B</i> = 180° − 28° − 110° = 42°</span>, so the known pair is <span class="m">15/sin 42°</span>. <span class="m"><i>a</i> = 15 sin 28°/sin 42° ≈ 10.5</span>, <span class="m"><i>c</i> = 15 sin 110°/sin 42° ≈ 21.1</span>.` },
    { q: `A ship at <span class="m"><i>A</i></span> sights a lighthouse <span class="m"><i>L</i></span> on bearing 040°. It sails 8.0 km on bearing 110° to point <span class="m"><i>B</i></span>, where the lighthouse bears 340°. How far is the ship from the lighthouse at <span class="m"><i>B</i></span>? Round to the nearest tenth of a kilometre.`, a: `At <span class="m"><i>A</i></span>: <span class="m">110° − 40° = 70°</span>. At <span class="m"><i>B</i></span> the bearing back to <span class="m"><i>A</i></span> is <span class="m">110° + 180° = 290°</span>, so the angle is <span class="m">340° − 290° = 50°</span>. Then <span class="m">∠<i>L</i> = 60°</span> and <span class="m"><i>BL</i> = 8.0 sin 70°/sin 60° ≈ 8.7</span> km.` },
    { q: `From point <span class="m"><i>A</i></span> on level ground the angle of elevation to a hilltop <span class="m"><i>T</i></span> is 22°. From point <span class="m"><i>B</i></span>, 200 m closer in a straight line toward the hill, it is 35°. Find the height of the hill to the nearest tenth of a metre.`, a: `In triangle <span class="m"><i>ABT</i></span>: <span class="m">∠<i>A</i> = 22°</span>, <span class="m">∠<i>ABT</i> = 180° − 35° = 145°</span>, so <span class="m">∠<i>T</i> = 13°</span>. <span class="m"><i>BT</i> = 200 sin 22°/sin 13° ≈ 333.06</span> m. Height <span class="m">= <i>BT</i> sin 35° ≈ 191.0</span> m.` }
  ],
  origin: `Ptolemy's Almagest (2nd century) worked with tables of chords rather than sines, so its triangle rules are related to the law of sines but are not stated in that form. Nasir al-Din al-Tusi stated and proved the law of sines for plane triangles in his Treatise on the Quadrilateral (13th century), the first work to treat trigonometry as a subject of its own apart from astronomy. In Europe, Regiomontanus gave it in De triangulis omnimodis (written 1464).`
};
