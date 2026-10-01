window.ARITH = window.ARITH || {};

ARITH["g-similar-triangles"] = {
  title: "Similar Triangles (AA, SSS∼, SAS∼)",
  short: "Two angles fix a triangle's shape",
  grade: "Grade 10 · college-prep Geometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Geometry · similarity",
  hero: `<span class="m">△<i>ABC</i> <span class="c4">∼</span> △<i>DEF</i> &nbsp;⇐&nbsp; <span class="c2">AA</span> · <span class="c3">SSS</span>∼ · <span class="c3">S</span><span class="c2">A</span><span class="c3">S</span>∼</span>`,
  lede: `Triangles are the one kind of polygon where equal angles alone guarantee the same shape. Two pairs of congruent angles, three proportional sides, or two proportional sides around a congruent angle each prove two triangles similar.`,
  plain: `<p>Draw a triangle with a 40° angle and a 75° angle. The third angle has to be 65°. Now draw another with the same two angles but a longer base. It comes out as an enlarged copy of the first. With triangles, once two angles match, the shape is fixed and only the size can change. That shortcut is <b>AA</b>.</p>
<p>Two more shortcuts work with sides. If all three sides of one triangle are the same multiple of the sides of the other, the triangles are similar (<b>SSS∼</b>). If two sides are in the same ratio and the angles between them are equal, they are similar too (<b>SAS∼</b>). These match the congruence tests SSS and SAS, with "equal sides" replaced by "proportional sides".</p>
<p>The payoff is <b>indirect measurement</b>. A tree and a fence post standing in the sun make two similar triangles with their shadows, because the sun's rays arrive at the same angle. Measure the post, the post's shadow and the tree's shadow, and a proportion gives the tree's height.</p>`,
  formal: `<div class="display"><b>AA Similarity Postulate.</b> If two angles of one triangle are congruent to two angles of another triangle, the triangles are similar.<br><b>SAS Similarity Theorem.</b> If an angle of one triangle is congruent to an angle of another and the sides including those angles are proportional, the triangles are similar.<br><b>SSS Similarity Theorem.</b> If the corresponding sides of two triangles are proportional, the triangles are similar.</div>
<p>In the transformational approach AA is a theorem: dilate <span class="m">△<i>ABC</i></span> by <span class="m"><i>k</i> = <i>DE</i>/<i>AB</i></span>; the image has a side congruent to <span class="m"><span class="ov"><i>DE</i></span></span> between angles congruent to <span class="m">∠<i>D</i></span> and <span class="m">∠<i>E</i></span>, so it is congruent to <span class="m">△<i>DEF</i></span> by ASA. SAS∼ and SSS∼ are proved the same way with SAS and SSS. In similar triangles with scale factor <span class="m"><i>k</i></span>, every pair of corresponding segments (sides, altitudes, medians, angle bisectors) has ratio <span class="m"><i>k</i></span>. Similarity of triangles is reflexive, symmetric and transitive. As with congruence, two proportional sides and a congruent angle that is <i>not</i> included (SSA) do not prove similarity.</p>`,
  legend: [
    { c: "c2", sym: `∠<i>A</i> ≅ ∠<i>D</i>`, name: "Congruent angles", desc: "Pairs of corresponding angles with equal measures, marked with matching arcs." },
    { c: "c3", sym: `<i>AB</i>, <i>DE</i>`, name: "Corresponding sides", desc: "Sides opposite congruent angles. Their lengths are compared by division." },
    { c: "c1", sym: `<i>k</i> = <i>DE</i>/<i>AB</i>`, name: "Ratio", desc: "The common value of all three side ratios, the scale factor from △<i>ABC</i> to △<i>DEF</i>." },
    { c: "c4", sym: `<i>A</i> ↔ <i>D</i>`, name: "Correspondence", desc: "Which vertex matches which. In △<i>ABC</i> ∼ △<i>DEF</i> the letter order records it, exactly as for congruence." }
  ],
  steps: { title: "How to prove triangles similar and use them", items: [
    `Mark what is known: congruent angles (from vertical angles, parallel lines, right angles, a shared angle) and side lengths.`,
    `Match the vertices: congruent angles correspond, and the shortest side corresponds to the shortest side.`,
    `Choose a test: two pairs of congruent angles (AA); three side ratios that agree (SSS∼); or one congruent angle with the ratios of its two including sides equal (SAS∼).`,
    `Write the similarity statement with the vertices in corresponding order.`,
    `Set up a proportion of corresponding sides, solve for the unknown, and check the result against the scale factor.`
  ] },
  example: {
    prompt: `To find the height of a tree on level ground, a ranger stands a 1.5 m pole <span class="m"><span class="ov"><i>PQ</i></span></span> upright. At the same moment, the pole's shadow <span class="m"><span class="ov"><i>QR</i></span></span> is 2.0 m long and the tree's shadow <span class="m"><span class="ov"><i>UV</i></span></span> is 14.8 m long. How tall is the tree <span class="m"><span class="ov"><i>TU</i></span></span>?`,
    lines: [
      { math: `<span class="m"><span class="c2">∠<i>PQR</i> ≅ ∠<i>TUV</i></span> (both 90°)</span>`, note: "The pole and the tree are vertical and the ground is level, so each meets the ground at a right angle." },
      { math: `<span class="m"><span class="c2">∠<i>PRQ</i> ≅ ∠<i>TVU</i></span></span>`, note: "The sun's rays are parallel, so the rays make congruent corresponding angles with the ground (Corresponding Angles Postulate)." },
      { math: `<span class="m">△<i>PQR</i> <span class="c4">∼</span> △<i>TUV</i></span>`, note: "AA Similarity Postulate, with P ↔ T, Q ↔ U, R ↔ V." },
      { math: `<span class="m"><span class="fr"><span class="c3"><i>TU</i></span><span class="c3"><i>PQ</i></span></span> = <span class="fr"><span class="c3"><i>UV</i></span><span class="c3"><i>QR</i></span></span> &nbsp;⇒&nbsp; <span class="fr"><span><i>h</i></span><span>1.5</span></span> = <span class="fr"><span>14.8</span><span>2.0</span></span></span>`, note: "Corresponding sides of similar triangles are proportional." },
      { math: `<span class="m"><i>h</i> = 1.5 · <span class="c1">7.4</span> = 11.1 m</span>`, note: "The scale factor is 14.8 ÷ 2.0 = 7.4." },
      { math: `<span class="m"><span class="fr"><span>11.1</span><span>14.8</span></span> = 0.75 = <span class="fr"><span>1.5</span><span>2.0</span></span> ✓</span>`, note: "Check: height divided by shadow is the same for both, as it must be when the sun is at one angle." }
    ],
    answer: `<span class="m">△<i>PQR</i> ∼ △<i>TUV</i></span> by AA, and the tree is <span class="m">11.1</span> m tall.`
  },
  why: `<p>Similar triangles let you measure what you cannot reach: the height of a building, the width of a river, the distance to a ship. Surveyors, astronomers and navigators have used them for over two thousand years, and the same reasoning sits inside optical rangefinders and every camera lens.</p>
<p>Inside mathematics, AA similarity is the key that opens the next units. The altitude to the hypotenuse of a right triangle creates similar triangles that prove the Pythagorean Theorem and the geometric-mean relations. A line parallel to one side of a triangle cuts off a similar triangle, which gives the Side-Splitter Theorem. And because all right triangles with one acute angle in common are similar, the ratios of their sides depend only on that angle: this is the starting point of trigonometry.</p>`,
  careers: [
    { role: "Surveyor", use: "Finds inaccessible distances, such as across a river, by laying out a small triangle similar to the large one and measuring it." },
    { role: "Forester", use: "Estimates tree heights with a clinometer or a measuring stick, using similar right triangles between eye, stick and tree." },
    { role: "Photographer", use: "Relates object size, image size and distances, since the lens forms similar triangles on either side of it." },
    { role: "Civil engineer", use: "Finds the cut or fill depth at intermediate points along a road on a uniform grade by proportion in similar right triangles." },
    { role: "Astronomer", use: "Uses similar triangles in parallax and eclipse geometry to compare sizes and distances of the Sun, Moon and stars." },
    { role: "Crime scene analyst", use: "Estimates a person's height from a photo by comparing it with an object of known size at the same distance." }
  ],
  life: [
    "Estimating the height of a flagpole from its shadow",
    "Judging how big an object is from how big it looks at a known distance",
    "Using a mirror on the ground to sight the top of a building",
    "Scaling a triangular sail or banner pattern up from a small sketch",
    "Lining up a shot in pool or mini-golf by bouncing off a wall at equal angles"
  ],
  fields: [
    { name: "Surveying and geodesy", use: "Triangulation networks and indirect measurement rely on similar triangles." },
    { name: "Optics", use: "Ray diagrams for lenses and pinhole cameras are pairs of similar triangles that give magnification." },
    { name: "Astronomy", use: "Parallax and the geometry of eclipses compare similar triangles of very different sizes." },
    { name: "Computer vision", use: "The pinhole camera model projects a scene through similar triangles to recover depth and size." }
  ],
  prereqWhy: {
    "g-similarity": "The definition of similar polygons, correspondence and scale factor are what the AA, SAS∼ and SSS∼ tests establish for triangles.",
    "g-congruence": "Each similarity test is proved by dilating one triangle to the other's size and then applying ASA, SAS or SSS congruence."
  },
  unlocksWhy: {
    "g-pythagorean": "The altitude to the hypotenuse splits a right triangle into two triangles similar to it (AA), and their proportions give a² + b² = c².",
    "g-geo-mean": "The same three similar right triangles give the geometric-mean relations h² = pq, a² = pc and b² = qc.",
    "g-proportionality": "A line parallel to one side cuts off a triangle similar to the whole (AA), which proves the Triangle Proportionality Theorem.",
    "g-circle-segments": "The products of chord, secant and tangent segments come from similar triangles formed by congruent inscribed angles.",
    "g-trig-ratios": "All right triangles with the same acute angle are similar by AA, so the ratios sine, cosine and tangent depend only on the angle."
  },
  beyond: [
    { field: "Trigonometry", why: "Sine, cosine and tangent are well defined only because right triangles sharing an acute angle are similar." },
    { field: "Calculus I", why: "Related-rates problems with shadows, ladders and conical tanks use similar triangles to link the changing lengths." },
    { field: "Physics", why: "Ray optics, lever arms and the components of vectors are worked out with similar triangles." },
    { field: "Projective Geometry", why: "Perspective drawing and camera projection are built from families of similar triangles through a centre." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m">△<i>PQR</i> ∼ △<i>UTV</i></span> when <span class="m"><i>P</i></span> matches <span class="m"><i>T</i></span>.`, fix: `The letter order is the correspondence. With <span class="m"><i>P</i> ↔ <i>T</i>, <i>Q</i> ↔ <i>U</i>, <i>R</i> ↔ <i>V</i></span>, write <span class="m">△<i>PQR</i> ∼ △<i>TUV</i></span>, and the proportions follow from it.` },
    { wrong: `Setting up <span class="m"><i>h</i>/1.5 = 2.0/14.8</span>.`, fix: `Keep each ratio in the same order: tree over pole on both sides, <span class="m"><i>h</i>/1.5 = 14.8/2.0</span>. A tree with a longer shadow must be taller than the pole.` },
    { wrong: `Using SAS∼ with an angle that is not between the two proportional sides.`, fix: `That is SSA, which does not prove similarity. The congruent angle must be formed by the two sides whose ratios are compared.` },
    { wrong: `Concluding <span class="m">△<i>ABC</i> ≅ △<i>DEF</i></span> from AA.`, fix: `AA proves similarity only. The triangles are congruent only if, in addition, one pair of corresponding sides is congruent (then ASA or AAS applies).` }
  ],
  practice: [
    { q: `Is each pair similar? Name the test or say why not. (a) △<i>ABC</i> has angles 40° and 75°; △<i>DEF</i> has angles 75° and 65°. (b) Sides 4, 6, 8 and sides 6, 9, 12. (c) Sides 5 and 7 with a 50° included angle, and sides 10 and 14 with a 50° included angle. (d) <span class="m"><i>AB</i> = 4</span>, <span class="m"><i>BC</i> = 6</span>, <span class="m">m∠<i>A</i> = 40°</span>, and <span class="m"><i>DE</i> = 8</span>, <span class="m"><i>EF</i> = 12</span>, <span class="m">m∠<i>D</i> = 40°</span>.`, a: `(a) Similar by AA: the third angle of △<i>ABC</i> is <span class="m">180° − 40° − 75° = 65°</span>, so both have 75° and 65°. (b) Similar by SSS∼: <span class="m">6/4 = 9/6 = 12/8 = 3/2</span>. (c) Similar by SAS∼: <span class="m">10/5 = 14/7 = 2</span> with congruent included angles. (d) Not enough information: the 40° angles are not between the proportional sides (SSA).` },
    { q: `In △<i>ABC</i>, <span class="m"><i>D</i></span> is on <span class="m"><span class="ov"><i>AB</i></span></span> and <span class="m"><i>E</i></span> is on <span class="m"><span class="ov"><i>AC</i></span></span> with <span class="m"><span class="ov"><i>DE</i></span> ∥ <span class="ov"><i>BC</i></span></span>. If <span class="m"><i>AD</i> = 4</span>, <span class="m"><i>DB</i> = 6</span> and <span class="m"><i>DE</i> = 5</span>, find <span class="m"><i>BC</i></span>.`, a: `∠<i>A</i> is shared and <span class="m">∠<i>ADE</i> ≅ ∠<i>ABC</i></span> (Corresponding Angles Postulate), so <span class="m">△<i>ADE</i> ∼ △<i>ABC</i></span> by AA. Then <span class="m"><i>BC</i>/<i>DE</i> = <i>AB</i>/<i>AD</i> = 10/4</span>, so <span class="m"><i>BC</i> = 5 · 10/4 = 12.5</span>.` },
    { q: `△<i>PQR</i> has <span class="m"><i>PQ</i> = 6</span>, <span class="m"><i>QR</i> = 9</span>, <span class="m"><i>RP</i> = 12</span>. △<i>XYZ</i> has <span class="m"><i>XY</i> = 16</span>, <span class="m"><i>YZ</i> = 8</span>, <span class="m"><i>ZX</i> = 12</span>. Write a correct similarity statement, give the scale factor from △<i>PQR</i>, and name the angle of △<i>XYZ</i> congruent to ∠<i>Q</i>.`, a: `Match shortest to shortest: <span class="m"><i>YZ</i>/<i>PQ</i> = 8/6</span>, <span class="m"><i>ZX</i>/<i>QR</i> = 12/9</span>, <span class="m"><i>XY</i>/<i>RP</i> = 16/12</span>, all <span class="m">4/3</span>. ∠<i>Q</i> lies between <span class="m"><span class="ov"><i>PQ</i></span></span> and <span class="m"><span class="ov"><i>QR</i></span></span>, which match <span class="m"><span class="ov"><i>YZ</i></span></span> and <span class="m"><span class="ov"><i>ZX</i></span></span>, so <span class="m"><i>Q</i> ↔ <i>Z</i></span>; likewise <span class="m"><i>P</i> ↔ <i>Y</i></span> and <span class="m"><i>R</i> ↔ <i>X</i></span>. So <span class="m">△<i>PQR</i> ∼ △<i>YZX</i></span> by SSS∼, <span class="m"><i>k</i> = 4/3</span>, and <span class="m">∠<i>Z</i> ≅ ∠<i>Q</i></span>.` },
    { q: `A student whose eyes are 1.6 m above level ground puts a small mirror on the ground 12 m from the base of a building. She steps back until, at 2.0 m from the mirror, she sees the top of the building in it. How tall is the building?`, a: `By the law of reflection the angles of incidence and reflection are congruent, and both the student and the building are perpendicular to the ground, so the two right triangles are similar by AA. <span class="m"><i>h</i>/1.6 = 12/2.0</span>, so <span class="m"><i>h</i> = 1.6 · 6 = 9.6</span> m.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) proves the three tests in Book VI: equiangular triangles have proportional sides (VI.4), triangles with proportional sides are equiangular (VI.5), and one equal angle with proportional sides about it gives similarity (VI.6). The theory of proportion behind them, in Book V, is credited to Eudoxus of Cnidus in the 4th century BCE.`
};
