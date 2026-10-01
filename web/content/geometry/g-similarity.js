window.ARITH = window.ARITH || {};

ARITH["g-similarity"] = {
  title: "Similar Polygons & Scale Factor",
  short: "Same shape, any size: equal angles, proportional sides",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · similarity",
  hero: `<span class="m"><span class="fr"><span class="c3"><i>A</i>′<i>B</i>′</span><span class="c2"><i>AB</i></span></span> = <span class="fr"><span class="c3"><i>B</i>′<i>C</i>′</span><span class="c2"><i>BC</i></span></span> = ⋯ = <span class="c1"><i>k</i></span>, &nbsp; <span class="fr"><span class="c3">area′</span><span class="c2">area</span></span> = <span class="c4"><i>k</i><sup>2</sup></span></span>`,
  lede: `Two polygons are similar when one is a scaled copy of the other: matching angles are equal and every pair of matching sides has the same ratio, the scale factor. Perimeters scale by that factor and areas by its square.`,
  plain: `<p>A photo enlarged on a copier, a model car and the real car, a floor plan and the house: each pair has the <b>same shape</b> at different sizes. Geometry calls such figures <b>similar</b>. Every length in the copy is the original length times one fixed number, the <b>scale factor</b> <span class="m c1"><i>k</i></span>. If <span class="m"><i>k</i> = 3</span>, every side is three times as long; if <span class="m"><i>k</i> = ½</span>, every side is half as long.</p>
<p>Scaling does not bend corners, so matching angles stay equal. For polygons you need both facts. A 2 by 3 rectangle and a 2 by 6 rectangle have the same four right angles, but the long one is stretched, so they are not similar. A square and a thin rhombus can have all sides in the same ratio, yet the corners differ, so they are not similar either.</p>
<p>Perimeter is a length, so it grows by <span class="m c1"><i>k</i></span> too. Area grows faster. Doubling every side of a square turns one tile into four, because both the width and the height double. Areas of similar figures scale by <span class="m c4"><i>k</i><sup>2</sup></span>.</p>`,
  formal: `<p>Two polygons are <b>similar</b> (<span class="m">∼</span>) when there is a correspondence of their vertices under which all pairs of corresponding angles are congruent and all ratios of corresponding sides are equal. That common ratio, image side over original side, is the <b>scale factor</b> <span class="m c1"><i>k</i> &gt; 0</span>. Equivalently, a <b>similarity transformation</b> (a dilation with scale factor <span class="m"><i>k</i></span> followed by a sequence of rigid motions) maps one polygon onto the other. The scale factor from the second polygon back to the first is <span class="m">1/<i>k</i></span>.</p>
<div class="display"><i>ABCD</i> ∼ <i>A</i>′<i>B</i>′<i>C</i>′<i>D</i>′ &nbsp;⇔&nbsp; ∠<i>A</i> ≅ ∠<i>A</i>′, ∠<i>B</i> ≅ ∠<i>B</i>′, ∠<i>C</i> ≅ ∠<i>C</i>′, ∠<i>D</i> ≅ ∠<i>D</i>′ &nbsp;and&nbsp; <span class="fr"><span><i>A</i>′<i>B</i>′</span><span><i>AB</i></span></span> = <span class="fr"><span><i>B</i>′<i>C</i>′</span><span><i>BC</i></span></span> = <span class="fr"><span><i>C</i>′<i>D</i>′</span><span><i>CD</i></span></span> = <span class="fr"><span><i>D</i>′<i>A</i>′</span><span><i>DA</i></span></span> = <i>k</i><br><span class="dim">Perimeters:</span> <i>P</i>′ = <i>k</i> · <i>P</i> &nbsp;&nbsp; <span class="dim">Areas:</span> <i>A</i>′ = <i>k</i><sup>2</sup> · <i>A</i></div>
<p>Similarity is reflexive, symmetric and transitive. Congruence is the case <span class="m"><i>k</i> = 1</span>. For polygons with four or more sides, neither condition implies the other: all rectangles have congruent angles, and all rhombuses have proportional sides, yet neither family is all similar. For triangles, congruent angles alone are enough (the AA Similarity Postulate, next topic). The area ratio <span class="m"><i>k</i><sup>2</sup></span> holds because a polygon splits into triangles, and each triangle's base and height both scale by <span class="m"><i>k</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>ABCD</i>`, name: "Original polygon", desc: "The preimage. Its sides are the denominators of the ratios." },
    { c: "c3", sym: `<i>A</i>′<i>B</i>′<i>C</i>′<i>D</i>′`, name: "Image polygon", desc: "The scaled copy. Its vertices are listed in the same order, so <i>A</i>′ matches <i>A</i>." },
    { c: "c1", sym: `<i>k</i>`, name: "Scale factor", desc: "The common ratio image side ÷ original side. <span class=\"m\"><i>k</i> &gt; 1</span> enlarges, <span class=\"m\">0 &lt; <i>k</i> &lt; 1</span> reduces, and it is also the perimeter ratio." },
    { c: "c4", sym: `<i>k</i><sup>2</sup>`, name: "Area ratio", desc: "Image area ÷ original area. Lengths scale by <i>k</i> in two directions at once, so areas scale by <i>k</i> squared." }
  ],
  steps: { title: "How to test similarity and use a scale factor", items: [
    `Match the vertices in order, using the similarity statement or the angles: <span class="m"><i>A</i></span> with <span class="m"><i>A</i>′</span>, and so on.`,
    `Check that every pair of corresponding angles is congruent.`,
    `Form every ratio image side ÷ original side. If they are all equal, that value is <span class="m c1"><i>k</i></span>; if any differs, the polygons are not similar.`,
    `Find an unknown side by multiplying its partner by <span class="m"><i>k</i></span> (or by solving a proportion).`,
    `Multiply perimeters by <span class="m"><i>k</i></span> and areas by <span class="m"><i>k</i><sup>2</sup></span>. Check that the answer is bigger when <span class="m"><i>k</i> &gt; 1</span> and smaller when <span class="m"><i>k</i> &lt; 1</span>.`
  ] },
  example: {
    prompt: `A furniture maker built a prototype tabletop shaped like an isosceles trapezoid <span class="m"><i>ABCD</i></span> with bases <span class="m"><i>AB</i> = 40</span> cm and <span class="m"><i>CD</i> = 20</span> cm, legs <span class="m"><i>BC</i> = <i>DA</i> = 26</span> cm and height 24 cm. The full-size table <span class="m"><i>A</i>′<i>B</i>′<i>C</i>′<i>D</i>′</span> is similar to it with <span class="m"><i>A</i>′<i>B</i>′ = 100</span> cm. Find the other sides, the perimeter for the edge banding, and the area of laminate for the top.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>k</i></span> = <span class="fr"><span class="c3">100</span><span class="c2">40</span></span> = <span class="c1"><span class="fr"><span>5</span><span>2</span></span></span></span>`, note: "Scale factor: image side over the corresponding original side." },
      { math: `<span class="m"><span class="c3"><i>B</i>′<i>C</i>′ = <i>D</i>′<i>A</i>′</span> = <span class="fr"><span>5</span><span>2</span></span> · 26 = 65</span>`, note: "Corresponding sides of similar polygons are proportional." },
      { math: `<span class="m"><span class="c3"><i>C</i>′<i>D</i>′</span> = <span class="fr"><span>5</span><span>2</span></span> · 20 = 50</span>`, note: "Same scale factor for every side." },
      { math: `<span class="m"><i>P</i>′ = <span class="fr"><span>5</span><span>2</span></span> · 112 = 280 cm</span>`, note: "Perimeters of similar polygons have ratio k. The prototype's perimeter is 40 + 26 + 20 + 26 = 112 cm." },
      { math: `<span class="m"><span class="c2">area</span> = ½(40 + 20)(24) = 720 cm<sup>2</sup></span>`, note: "Area of a trapezoid: half the sum of the bases times the height." },
      { math: `<span class="m"><span class="c3">area′</span> = <span class="c4"><span class="fr"><span>25</span><span>4</span></span></span> · 720 = 4500 cm<sup>2</sup></span>`, note: "Areas of similar polygons have ratio k² = 25/4." },
      { math: `<span class="m">½(100 + 50)(60) = 4500 ✓</span>`, note: "Check directly: the full-size height is 5/2 × 24 = 60 cm, and the trapezoid formula gives the same area." }
    ],
    answer: `<span class="m"><i>k</i> = 5/2</span>. The full-size sides are 100, 65, 50 and 65 cm, the edge banding is 280 cm, and the top needs 4500 cm² (0.45 m²) of laminate.`
  },
  why: `<p>Similarity is how a small picture stands for a large object. Maps, blueprints, scale models, microscope images and computer screens all depend on lengths scaling by one factor while angles stay fixed. The area and volume rules that follow from it explain why paint, fabric and material costs grow much faster than the dimensions of a design.</p>
<p>In the rest of geometry, similar triangles do most of the work: indirect measurement, the Pythagorean Theorem, the geometric mean, and right-triangle trigonometry all rest on them. This topic sets up the language they use: correspondence, ratio of corresponding parts, and scale factor.</p>`,
  careers: [
    { role: "Architect", use: "Draws plans at a fixed scale such as 1:50 and converts every measured plan length to a real length with the scale factor." },
    { role: "Cartographer", use: "Sets a map's representative fraction and knows that map areas convert to ground areas by the square of the scale." },
    { role: "Graphic designer", use: "Resizes logos with the aspect ratio locked so that the artwork stays similar instead of being stretched." },
    { role: "Model maker", use: "Builds film and museum models at scales such as 1:24, multiplying every dimension of the original by the same factor." },
    { role: "Textile pattern grader", use: "Scales a garment pattern between sizes and estimates how much more fabric each larger size needs." },
    { role: "Microscopist", use: "Converts lengths measured on a micrograph to true sizes using the magnification, which is a scale factor." }
  ],
  life: [
    "Enlarging a photo to a new print size without cropping or distortion",
    "Reading distances from a map using its scale bar",
    "Doubling a recipe for a square pan and realising a pan with doubled sides holds four times as much",
    "Choosing a TV or monitor with the same aspect ratio as the content",
    "Following a sewing or woodworking pattern drawn at reduced scale"
  ],
  fields: [
    { name: "Architecture and engineering drawing", use: "Plans, elevations and details are similar figures of the real structure at stated scales." },
    { name: "Cartography and GIS", use: "Map scale relates lengths by a factor and areas by its square." },
    { name: "Computer graphics", use: "Uniform scaling transforms keep models similar, while non-uniform scaling distorts them." },
    { name: "Biology", use: "Allometry studies how body proportions change when organisms grow, often departing from simple similarity." }
  ],
  prereqWhy: {
    "g-dilations": "A similarity transformation is a dilation followed by rigid motions, so the dilation's scale factor becomes the scale factor of the similar figures.",
    "g-polygons": "Naming vertices in order and knowing the polygon angle sums are needed to match corresponding angles and sides.",
    "pa-similar": "Scale drawings and solving proportions for a missing side are the arithmetic used in every similarity problem."
  },
  unlocksWhy: {
    "g-similar-triangles": "For triangles, two pairs of congruent angles already force the sides to be proportional, which gives the shortcuts AA, SSS∼ and SAS∼.",
    "g-similar-solids": "The rule that lengths scale by <i>k</i> and areas by <i>k</i><sup>2</sup> extends to solids, where volumes scale by <i>k</i><sup>3</sup>."
  },
  beyond: [
    { field: "Trigonometry", why: "Right triangles with the same acute angle are similar, so ratios of their sides depend only on the angle; that is what sine, cosine and tangent measure." },
    { field: "Linear Algebra", why: "A similarity of the plane is a scalar multiple of an orthogonal matrix plus a translation, and uniform scaling is the matrix kI." },
    { field: "Physics", why: "Scaling laws and dimensional analysis use the fact that areas grow as k² and volumes as k³ when every length grows by k." }
  ],
  mistakes: [
    { wrong: `"Both rectangles have four right angles, so they are similar."`, fix: `For polygons, equal angles are not enough. A 2 × 3 and a 2 × 6 rectangle have ratios <span class="m">2/2 = 1</span> and <span class="m">6/3 = 2</span>, which differ, so they are not similar.` },
    { wrong: `Doubling the sides of a garden doubles its area.`, fix: `Areas scale by <span class="m"><i>k</i><sup>2</sup></span>. With <span class="m"><i>k</i> = 2</span> the area is 4 times as large.` },
    { wrong: `Making a copy "bigger by 5 cm" on every side.`, fix: `Adding the same amount to each side changes the shape. Similar copies multiply every side by the same factor.` },
    { wrong: `Writing <span class="m"><i>k</i> = <i>AB</i>/<i>A</i>′<i>B</i>′</span> for the scale factor from <span class="m"><i>ABCD</i></span> to <span class="m"><i>A</i>′<i>B</i>′<i>C</i>′<i>D</i>′</span>.`, fix: `The scale factor is image over original, <span class="m"><i>A</i>′<i>B</i>′/<i>AB</i></span>. The upside-down ratio is the scale factor in the other direction, <span class="m">1/<i>k</i></span>.` }
  ],
  practice: [
    { q: `Which pairs are similar? (a) A 4 by 6 rectangle and a 6 by 9 rectangle. (b) A 4 by 6 rectangle and an 8 by 10 rectangle. (c) A square with side 5 and a rhombus with side 10 and a 60° angle.`, a: `(a) Similar: all angles are 90° and <span class="m">6/4 = 9/6 = 3/2</span>, so <span class="m"><i>k</i> = 3/2</span>. (b) Not similar: <span class="m">8/4 = 2</span> but <span class="m">10/6 = 5/3</span> (the other matching, <span class="m">8/6</span> and <span class="m">10/4</span>, also fails). (c) Not similar: the sides are proportional (<span class="m"><i>k</i> = 2</span>) but the angles are 90° and 60°.` },
    { q: `Pentagon <span class="m"><i>ABCDE</i> ∼</span> pentagon <span class="m"><i>PQRST</i></span> with <span class="m"><i>AB</i> = 6</span>, <span class="m"><i>PQ</i> = 9</span>, <span class="m"><i>BC</i> = 8</span> and <span class="m">m∠<i>C</i> = 110°</span>. Find the scale factor from <span class="m"><i>ABCDE</i></span> to <span class="m"><i>PQRST</i></span>, then <span class="m"><i>QR</i></span> and <span class="m">m∠<i>R</i></span>. What is the scale factor from <span class="m"><i>PQRST</i></span> to <span class="m"><i>ABCDE</i></span>?`, a: `<span class="m"><i>k</i> = 9/6 = 3/2</span>. <span class="m"><i>QR</i> = (3/2)(8) = 12</span>. <span class="m">m∠<i>R</i> = m∠<i>C</i> = 110°</span> (corresponding angles). The reverse scale factor is <span class="m">2/3</span>.` },
    { q: `Two similar hexagons have perimeters 24 cm and 36 cm. The smaller one has area 30 cm². Find the area of the larger one.`, a: `<span class="m"><i>k</i> = 36/24 = 3/2</span>, so the area ratio is <span class="m"><i>k</i><sup>2</sup> = 9/4</span>. Area <span class="m">= (9/4)(30) = 67.5</span> cm².` },
    { q: `ISO paper (A4, A5, …) is designed so that cutting a sheet in half across its long side gives a smaller sheet similar to the original. Find the ratio of long side to short side, and the length of an A4 sheet that is 210 mm wide, to the nearest millimetre.`, a: `Let the sheet be 1 by <span class="m"><i>r</i></span> with <span class="m"><i>r</i> &gt; 1</span>. The half sheet is <span class="m"><i>r</i>/2</span> by 1, with long side 1. Similarity gives <span class="m"><i>r</i>/1 = 1/(<i>r</i>/2)</span>, so <span class="m"><i>r</i><sup>2</sup> = 2</span> and <span class="m"><i>r</i> = √2</span>. The length is <span class="m">210√2 ≈ 297</span> mm, the real A4 size. Each halving has scale factor <span class="m">1/√2</span> and halves the area.` }
  ],
  origin: `Book VI of Euclid's <i>Elements</i> (about 300 BCE) opens by defining similar rectilinear figures as those with their angles equal one by one and the sides about the equal angles proportional. Proposition VI.20 proves that similar polygons split into similar triangles and that their areas are in the duplicate ratio, the square, of corresponding sides.`
};
