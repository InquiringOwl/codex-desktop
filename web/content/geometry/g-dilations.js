window.ARITH = window.ARITH || {};

ARITH["g-dilations"] = {
  title: "Dilations",
  short: "Scale a figure from a centre by a factor k",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · transformations",
  hero: `<span class="m"><span class="c4"><i>O</i></span><span class="c3"><i>P</i>′</span> = |<span class="c1"><i>k</i></span>| · <span class="c4"><i>O</i></span><span class="c2"><i>P</i></span> &nbsp;&nbsp; <span class="c3"><i>P</i>′<i>Q</i>′</span> = |<span class="c1"><i>k</i></span>| · <span class="c2"><i>PQ</i></span></span>`,
  lede: `A dilation enlarges or shrinks a figure from a fixed centre. Every distance from the centre, and every length in the figure, is multiplied by the same scale factor, while every angle stays the same.`,
  plain: `<p>Shine a lamp at a cut-out shape and its shadow on the wall is a larger copy. Each point of the shadow lies on a straight line from the lamp through the matching point of the shape. That is a <b>dilation</b>. The lamp is the <b>centre</b>, and the <b>scale factor</b> <span class="m"><i>k</i></span> tells how many times farther from the centre each image point is.</p>
<p>When <span class="m"><i>k</i> = 3</span> every length triples; when <span class="m"><i>k</i> = <span class="fr"><span>1</span><span>2</span></span></span> every length halves. The shape does not change: angles stay the same, and each side of the image is parallel to the side it came from. Only the size changes, so a dilation is not a rigid motion (unless <span class="m"><i>k</i> = ±1</span>).</p>
<p>A negative scale factor puts the image on the other side of the centre, upside down, like the image in a pinhole camera. With the centre at the origin the rule is just "multiply both coordinates by <span class="m"><i>k</i></span>".</p>`,
  formal: `<p>Let <span class="m"><i>O</i></span> be a point and <span class="m"><i>k</i> ≠ 0</span> a real number. The <b>dilation</b> <span class="m"><i>D</i><sub><i>O</i>, <i>k</i></sub></span> maps <span class="m"><i>O</i></span> to itself and maps each point <span class="m"><i>P</i> ≠ <i>O</i></span> to the point <span class="m"><i>P</i>′</span> on line <span class="m"><i>OP</i></span> with <span class="m"><i>OP</i>′ = |<i>k</i>| · <i>OP</i></span>, where <span class="m"><i>P</i>′</span> is on ray <span class="m"><i>OP</i></span> if <span class="m"><i>k</i> &gt; 0</span> and on the opposite ray if <span class="m"><i>k</i> &lt; 0</span>. <span class="dim">(Many geometry texts use only <i>k</i> &gt; 0.)</span></p>
<div class="display">centre (0, 0): &nbsp;(<i>x</i>, <i>y</i>) ↦ (<span class="c1"><i>k</i></span><i>x</i>, <span class="c1"><i>k</i></span><i>y</i>)<br>centre (<i>a</i>, <i>b</i>): &nbsp;(<i>x</i>, <i>y</i>) ↦ (<i>a</i> + <span class="c1"><i>k</i></span>(<i>x</i> − <i>a</i>), &nbsp;<i>b</i> + <span class="c1"><i>k</i></span>(<i>y</i> − <i>b</i>))</div>
<p><b>Properties.</b> For every segment, <span class="m"><i>P</i>′<i>Q</i>′ = |<i>k</i>| · <i>PQ</i></span>. A line through the centre maps to itself; a line not through the centre maps to a parallel line. Angle measures, collinearity and betweenness are preserved. The dilation is an <b>enlargement</b> if <span class="m">|<i>k</i>| &gt; 1</span> and a <b>reduction</b> if <span class="m">0 &lt; |<i>k</i>| &lt; 1</span>; <span class="m"><i>k</i> = 1</span> is the identity and <span class="m"><i>k</i> = −1</span> is the 180° rotation about <span class="m"><i>O</i></span>. Areas are multiplied by <span class="m"><i>k</i><sup>2</sup></span>.</p>`,
  legend: [
    { c: "c4", sym: `<i>O</i>`, name: "Centre", desc: "The one fixed point. Every image point lies on the line from <i>O</i> through its original." },
    { c: "c2", sym: `<i>P</i>, <i>PQ</i>`, name: "Preimage", desc: "The original figure and its lengths." },
    { c: "c3", sym: `<i>P</i>′, <i>P</i>′<i>Q</i>′`, name: "Image", desc: "The scaled copy. Each image length is |<i>k</i>| times the original length." },
    { c: "c1", sym: `<i>k</i>`, name: "Scale factor", desc: "The ratio <i>OP</i>′ : <i>OP</i>. Its size says how much the figure grows or shrinks; a negative sign puts the image on the far side of the centre." }
  ],
  steps: { title: "How to dilate a figure", items: [
    `Identify the centre <span class="m"><i>O</i></span> and the scale factor <span class="m"><i>k</i></span>.`,
    `If the centre is the origin, multiply both coordinates of each vertex by <span class="m"><i>k</i></span>.`,
    `If the centre is <span class="m">(<i>a</i>, <i>b</i>)</span>, subtract the centre, multiply by <span class="m"><i>k</i></span>, then add the centre back: <span class="m">(<i>a</i> + <i>k</i>(<i>x</i> − <i>a</i>), <i>b</i> + <i>k</i>(<i>y</i> − <i>b</i>))</span>.`,
    `Join the image vertices in the same order and label them with primes.`,
    `Check: each image point lies on line <span class="m"><i>OP</i></span>, image sides are <span class="m">|<i>k</i>|</span> times the original sides, and corresponding sides are parallel.`
  ] },
  example: {
    prompt: `A sign maker has a triangular logo drawn on a grid in centimetres with corners <span class="m"><i>A</i>(2, 1)</span>, <span class="m"><i>B</i>(4, 1)</span>, <span class="m"><i>C</i>(2, 4)</span>. For a shop sign it is enlarged by a scale factor of 2.5 about the corner of the sheet, <span class="m"><i>O</i>(0, 0)</span>. Find the new corners, the new side lengths and the new area.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>D</i><sub><i>O</i>, 2.5</sub></span>: (<i>x</i>, <i>y</i>) ↦ (2.5<i>x</i>, 2.5<i>y</i>)</span>`, note: "Centre at the origin, so multiply both coordinates by k." },
      { math: `<span class="m"><span class="c3"><i>A</i>′(5, 2.5)</span>, &nbsp;<span class="c3"><i>B</i>′(10, 2.5)</span>, &nbsp;<span class="c3"><i>C</i>′(5, 10)</span></span>`, note: "Image of each vertex." },
      { math: `<span class="m"><i>AB</i> = 2 → <i>A</i>′<i>B</i>′ = 5, &nbsp;<i>AC</i> = 3 → <i>A</i>′<i>C</i>′ = 7.5</span>`, note: "Image lengths are 2.5 times the original lengths." },
      { math: `<span class="m"><i>BC</i> = √13 → <i>B</i>′<i>C</i>′ = √<span style="text-decoration:overline">5² + 7.5²</span> = 2.5√13 ≈ 9.0</span>`, note: "Distance formula: 25 + 56.25 = 81.25 = 6.25 × 13." },
      { math: `<span class="m">slope <i>BC</i> = <span class="fr"><span>3</span><span>−2</span></span> = −1.5 = <span class="fr"><span>7.5</span><span>−5</span></span> = slope <i>B</i>′<i>C</i>′</span>`, note: "Corresponding sides are parallel, as the dilation properties promise." },
      { math: `<span class="m">area: <span class="fr"><span>1</span><span>2</span></span>(2)(3) = 3 → 2.5² × 3 = 18.75</span>`, note: "Areas scale by k². Check directly: ½(5)(7.5) = 18.75 cm²." }
    ],
    answer: `The enlarged logo has corners <span class="m"><i>A</i>′(5, 2.5)</span>, <span class="m"><i>B</i>′(10, 2.5)</span>, <span class="m"><i>C</i>′(5, 10)</span>, sides 5 cm, 7.5 cm and <span class="m">2.5√13 ≈ 9.0</span> cm, and area 18.75 cm², with the right angle at <span class="m"><i>A</i>′</span> unchanged.`
  },
  why: `<p>Dilations are the transformation behind every scale drawing, map, model and photo enlargement. They also define similarity: two figures are similar when a dilation followed by rigid motions maps one onto the other. That definition is what makes "corresponding sides are proportional and corresponding angles are equal" a theorem instead of a guess.</p>
<p>Optics runs on dilations. A pinhole camera or a thin lens maps a flat object to an image by a dilation centred at the pinhole or lens centre with a negative scale factor, which is why the image is inverted.</p>`,
  careers: [
    { role: "Graphic designer", use: "Scales a vector logo about a chosen reference point so it keeps its proportions on business cards and billboards." },
    { role: "Architect", use: "Draws floor plans at a fixed scale such as 1 : 50, so every real length is the drawn length times 50." },
    { role: "Cartographer", use: "Produces map insets that enlarge a region about a fixed point by a stated scale factor." },
    { role: "Optical engineer", use: "Computes image size from the magnification of a lens, a negative factor for an inverted real image." },
    { role: "Model maker", use: "Builds railway models in HO scale, 1 : 87, dividing every prototype length by 87." },
    { role: "Forensic photographer", use: "Places a scale ruler in the frame so measurements can be recovered from an enlarged print." }
  ],
  life: [
    "Zooming a photo on a phone with two fingers",
    "Enlarging or reducing a document on a photocopier, such as 141 % from A4 to A3",
    "Reading distances from a map scale",
    "Watching a shadow grow as you walk toward a lamp",
    "Resizing a picture in a document while keeping its proportions"
  ],
  fields: [
    { name: "Optics", use: "Lens and pinhole images are dilations of the object plane, with magnification as the scale factor." },
    { name: "Architecture", use: "Scale drawings and models are dilations of the real building." },
    { name: "Computer graphics", use: "Scaling transforms resize objects about a chosen pivot point." },
    { name: "Cartography", use: "Map scale is the scale factor of the dilation from the ground to the paper." }
  ],
  prereqWhy: {
    "g-transformations": "A dilation is another transformation of the plane with a coordinate rule, and comparing it with rigid motions shows what it keeps (angles) and what it changes (lengths).",
    "proportions": "The scale factor is the constant ratio OP′ : OP = P′Q′ : PQ, and missing lengths are found by solving that proportion."
  },
  unlocksWhy: {
    "g-similarity": "Similar figures are defined as figures related by a dilation followed by rigid motions, so the scale factor of the dilation is the scale factor of the similarity."
  },
  beyond: [
    { field: "Linear Algebra", why: "A dilation about the origin is the matrix kI, the simplest linear transformation, and it multiplies areas by the determinant k²." },
    { field: "Precalculus", why: "Stretching graphs, y = a·f(x) and y = f(bx), are one-direction versions of a dilation." },
    { field: "Calculus I", why: "Related-rates problems about shadows and filling cones rest on the similar triangles that dilations produce." },
    { field: "Physics", why: "Lens and mirror equations give magnification, the scale factor of the image." }
  ],
  mistakes: [
    { wrong: `Dilating <span class="m">(3, 3)</span> by 3 about <span class="m">(1, 2)</span> as <span class="m">(9, 9)</span>.`, fix: `The rule <span class="m">(<i>kx</i>, <i>ky</i>)</span> works only when the centre is the origin. Here <span class="m">(1 + 3·2, 2 + 3·1) = (7, 5)</span>.` },
    { wrong: `Multiplying the angles by <span class="m"><i>k</i></span> as well.`, fix: `A dilation keeps every angle measure. Only lengths are multiplied by <span class="m">|<i>k</i>|</span>.` },
    { wrong: `A scale factor of 3 makes the area 3 times as large.`, fix: `Area is multiplied by <span class="m"><i>k</i><sup>2</sup> = 9</span>, because both the base and the height triple.` },
    { wrong: `For <span class="m"><i>k</i> = −2</span>, placing the image on the same side of the centre as the original.`, fix: `A negative factor sends each point through the centre to the opposite ray, twice as far away. The image is turned 180° relative to the original.` }
  ],
  practice: [
    { q: `Dilate <span class="m"><i>P</i>(−3, 6)</span> about the origin by <span class="m"><i>k</i> = <span class="fr"><span>1</span><span>3</span></span></span> and by <span class="m"><i>k</i> = −2</span>.`, a: `<span class="m"><i>k</i> = <span class="fr"><span>1</span><span>3</span></span></span>: <span class="m">(−1, 2)</span>. <span class="m"><i>k</i> = −2</span>: <span class="m">(6, −12)</span>.` },
    { q: `Dilate <span class="m"><i>P</i>(3, 3)</span> by a scale factor of 3 about the centre <span class="m"><i>C</i>(1, 2)</span>, and verify that <span class="m"><i>CP</i>′ = 3 · <i>CP</i></span>.`, a: `<span class="m"><i>P</i>′ = (1 + 3·2, 2 + 3·1) = (7, 5)</span>. <span class="m"><i>CP</i> = √<span style="text-decoration:overline">2² + 1²</span> = √5</span> and <span class="m"><i>CP</i>′ = √<span style="text-decoration:overline">6² + 3²</span> = √45 = 3√5</span> ✓.` },
    { q: `A dilation centred at <span class="m"><i>O</i></span> maps a segment of length 10 to a segment of length 4. What is the scale factor?`, a: `<span class="m">|<i>k</i>| = <span class="fr"><span>4</span><span>10</span></span> = <span class="fr"><span>2</span><span>5</span></span></span>. The lengths alone do not give the sign: <span class="m"><i>k</i> = <span class="fr"><span>2</span><span>5</span></span></span> if the image is on the same side of <span class="m"><i>O</i></span>, <span class="m"><i>k</i> = −<span class="fr"><span>2</span><span>5</span></span></span> if it is on the opposite side. Not enough information to decide.` },
    { q: `A dilation maps <span class="m"><i>A</i>(1, 1)</span> to <span class="m"><i>A</i>′(4, 7)</span> and <span class="m"><i>B</i>(3, 2)</span> to <span class="m"><i>B</i>′(8, 9)</span>. Find the scale factor and the centre.`, a: `<span class="m"><i>A</i>′<i>B</i>′</span> runs <span class="m">⟨4, 2⟩</span> and <span class="m"><i>AB</i></span> runs <span class="m">⟨2, 1⟩</span>, so <span class="m"><i>k</i> = 2</span>. The centre <span class="m"><i>O</i></span> satisfies <span class="m"><i>A</i>′ − <i>O</i> = 2(<i>A</i> − <i>O</i>)</span>, so <span class="m"><i>O</i> = 2<i>A</i> − <i>A</i>′ = (−2, −5)</span>. Check: <span class="m">(−2 + 2·5, −5 + 2·7) = (8, 9)</span> ✓.` }
  ],
  origin: `The pinhole camera, whose inverted image is a dilation with a negative scale factor centred at the pinhole, is described in the Chinese Mohist writings of about the 4th century BCE and was analysed by Ibn al-Haytham in his <i>Book of Optics</i> (about 1011 to 1021).`
};
