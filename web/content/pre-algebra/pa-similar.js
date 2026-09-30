window.ARITH = window.ARITH || {};

ARITH["pa-similar"] = {
  title: "Similar Figures & Scale Drawings",
  short: "Same shape, different size, one scale factor",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Proportional reasoning · shape and scale",
  hero: `<span class="m"><span class="fr"><span class="c3"><i>a</i>′</span><span class="c2"><i>a</i></span></span> = <span class="fr"><span class="c3"><i>b</i>′</span><span class="c2"><i>b</i></span></span> = <span class="fr"><span class="c3"><i>c</i>′</span><span class="c2"><i>c</i></span></span> = <span class="c4"><i>k</i></span></span>`,
  lede: `Two figures are similar when one is an exact enlargement or reduction of the other. Every length is multiplied by the same <span class="m c4">scale factor <i>k</i></span>, and the angles stay the same.`,
  plain: `<p>A photo and a bigger print of the same photo have the same shape. Nothing is stretched. If the print is 3 times as wide, it is also 3 times as tall. Shapes like that are called <b>similar</b>. The number you multiply every length by is the <b>scale factor</b>.</p>
<p>This lets you find lengths you cannot measure. If you know one pair of matching sides, you know the scale factor, and then you can find any other side. That is how you can work out the height of a tree from its shadow, or the size of a room from a floor plan.</p>
<p>A <b>scale drawing</b> is a similar copy of something real, like a map or a blueprint. Its scale, such as 1 inch to 8 feet, tells you how drawing lengths compare to real lengths. Be careful with area: if lengths are doubled, area is multiplied by 4, not 2.</p>`,
  formal: `<p>Two polygons are <b>similar</b>, written <span class="m">△<i>ABC</i> ∼ △<i>A</i>′<i>B</i>′<i>C</i>′</span>, when their corresponding angles are congruent and their corresponding sides are proportional:</p>
<div class="display">∠<i>A</i> ≅ ∠<i>A</i>′, ∠<i>B</i> ≅ ∠<i>B</i>′, ∠<i>C</i> ≅ ∠<i>C</i>′ &nbsp;and&nbsp; <span class="fr"><span class="c3"><i>A</i>′<i>B</i>′</span><span class="c2"><i>AB</i></span></span> = <span class="fr"><span class="c3"><i>B</i>′<i>C</i>′</span><span class="c2"><i>BC</i></span></span> = <span class="fr"><span class="c3"><i>C</i>′<i>A</i>′</span><span class="c2"><i>CA</i></span></span> = <span class="c4"><i>k</i></span></div>
<p>The constant <span class="m c4"><i>k</i> &gt; 0</span> is the <b>scale factor</b> from the original to the image; <span class="m"><i>k</i> &gt; 1</span> is an enlargement and <span class="m">0 &lt; <i>k</i> &lt; 1</span> a reduction. For triangles, two pairs of congruent angles are enough to guarantee similarity (<b>AA similarity</b>). Perimeters scale by <span class="m"><i>k</i></span>, areas by <span class="m"><i>k</i><sup>2</sup></span> and volumes of similar solids by <span class="m"><i>k</i><sup>3</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>, <i>b</i>, <i>c</i>`, name: "Original sides", desc: "The side lengths of the starting figure." },
    { c: "c3", sym: `<i>a</i>′, <i>b</i>′, <i>c</i>′`, name: "Image sides", desc: "The matching side lengths of the enlarged or reduced figure." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "Image length divided by original length. It is the same for every pair of matching sides." },
    { c: "c1", sym: `<i>x</i>`, name: "Unknown side", desc: "A missing length, found from a proportion with one known pair." }
  ],
  steps: { title: "How to find a missing length in similar figures", items: [
    `Match the corresponding parts. The equal angles tell you which sides go together.`,
    `Find the scale factor from one complete pair: <span class="m"><span class="c4"><i>k</i></span> = image ÷ original</span>.`,
    `Write a proportion with the unknown, keeping image over original on both sides.`,
    `Solve by cross-multiplying, or multiply the known side by <span class="m c4"><i>k</i></span>.`,
    `For a scale drawing, convert units so both ratios use the same units, and check that your answer is sensible in size.`
  ] },
  example: {
    prompt: `At the same time of day, a 1.8 m tall person casts a shadow 2.4 m long and a tree casts a shadow 14 m long. How tall is the tree?`,
    lines: [
      { math: `<span class="m">△person ∼ △tree</span>`, note: "The sun's rays hit both at the same angle and both stand upright, so the triangles are similar by AA." },
      { math: `<span class="m"><span class="fr"><span class="c1"><i>h</i></span><span class="c3">14</span></span> = <span class="fr"><span class="c2">1.8</span><span class="c2">2.4</span></span></span>`, note: "Height over shadow length is the same in both triangles." },
      { math: `<span class="m">2.4<span class="c1"><i>h</i></span> = 1.8 × 14 = 25.2</span>`, note: "Cross-multiply." },
      { math: `<span class="m"><span class="c1"><i>h</i></span> = 25.2 ÷ 2.4 = 10.5</span>`, note: "Divide both sides by 2.4." },
      { math: `<span class="m"><span class="c4"><i>k</i></span> = 14 ÷ 2.4 ≈ 5.83, &nbsp;1.8 × 5.83 ≈ 10.5</span>`, note: "Check with the scale factor: the tree's triangle is about 5.83 times the person's." }
    ],
    answer: `The tree is <span class="m">10.5</span> m tall.`
  },
  why: `<p>Scale is how people plan things too big or too small to handle directly. Maps, architectural plans, engineering drawings, model kits and enlarged microscope images are all similar figures. Reading them correctly means using one scale factor for lengths and knowing that area and volume scale faster.</p>
<p>Similar triangles are the foundation of trigonometry. The sine, cosine and tangent of an angle are fixed ratios because all right triangles with that angle are similar.</p>`,
  careers: [
    { role: "Architect", use: "Draws floor plans at a scale such as 1/4 inch to 1 foot and converts drawing measurements to real dimensions." },
    { role: "Surveyor", use: "Uses similar triangles in indirect measurement to find heights and distances that cannot be taped directly." },
    { role: "Cartographer", use: "Produces maps at a stated representative fraction such as 1:24,000 so map distances convert to ground distances." },
    { role: "Model maker", use: "Builds scale models, for example 1:87 HO-scale trains, dividing every real dimension by the same factor." },
    { role: "Forensic photographer", use: "Places a scale ruler in evidence photos so that real sizes can be measured from the enlarged image." },
    { role: "Graphic designer", use: "Enlarges logos and layouts by a fixed percentage so the proportions do not distort." }
  ],
  life: [
    "Reading distances from a map scale",
    "Enlarging a photo without stretching it",
    "Estimating the height of a tree or building from its shadow",
    "Checking whether furniture fits using a floor plan",
    "Understanding why a pizza twice as wide has four times the area"
  ],
  fields: [
    { name: "Architecture", use: "Plans, elevations and sections are scale drawings read with a single scale factor." },
    { name: "Geography", use: "Map scales relate map distance to ground distance." },
    { name: "Optics", use: "Magnification of lenses and projectors is a scale factor between similar images." },
    { name: "Biology", use: "Scaling laws explain why surface-area-to-volume ratios limit the size of cells and animals." }
  ],
  prereqWhy: {
    "pa-one-step": "After writing the proportion, finding the missing side is a one-step equation such as 2.4h = 25.2.",
    "proportions": "Corresponding sides of similar figures form equal ratios, and solving for a missing side is solving a proportion."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Geometry", why: "Triangle similarity theorems (AA, SAS, SSS) and proofs with proportional sides build directly on this topic." },
    { field: "Trigonometry", why: "The trigonometric ratios are defined from similar right triangles." },
    { field: "Physics", why: "Dimensional scaling explains how strength, heat loss and drag change when an object is enlarged." }
  ],
  mistakes: [
    { wrong: `Mismatching sides, such as putting the image's short side over the original's long side.`, fix: `Pair sides by the equal angles opposite them, and keep image over original in every ratio.` },
    { wrong: `Adding instead of multiplying: "each side is 3 cm longer, so the triangles are similar."`, fix: `Similarity multiplies lengths. A 3-4-5 triangle and a 6-7-8 triangle are not similar, because 6/3, 7/4 and 8/5 are not equal.` },
    { wrong: `Scaling area by <span class="m"><i>k</i></span>: "the room is drawn at half size, so its area is half."`, fix: `Area scales by <span class="m"><i>k</i><sup>2</sup></span>. At half size the drawn area is <span class="m">(<span class="fr"><span>1</span><span>2</span></span>)<sup>2</sup> = <span class="fr"><span>1</span><span>4</span></span></span> of the real area.` }
  ],
  practice: [
    { q: `A triangle with sides 3, 4 and 5 cm is similar to a triangle whose two shorter sides are 9 and 12 cm. Find the third side.`, a: `<span class="m"><i>k</i> = 9 ÷ 3 = 3</span>, so the third side is <span class="m">5 × 3 = 15</span> cm.` },
    { q: `A floor plan uses the scale 1 in : 8 ft. A room measures 2.5 in by 1.75 in on the plan. What are its real dimensions?`, a: `<span class="m">2.5 × 8 = 20</span> ft and <span class="m">1.75 × 8 = 14</span> ft, so the room is 20 ft by 14 ft.` },
    { q: `A 1:24 scale model car is 7.5 in long. How long is the real car, in feet?`, a: `<span class="m">7.5 × 24 = 180</span> in, and <span class="m">180 ÷ 12 = 15</span> ft.` },
    { q: `Two similar rectangles have scale factor <span class="m"><i>k</i> = 3</span>. The smaller has area 12 cm². What is the area of the larger?`, a: `Area scales by <span class="m"><i>k</i><sup>2</sup> = 9</span>, so the area is <span class="m">12 × 9 = 108</span> cm².` }
  ],
  origin: `According to later Greek writers such as Plutarch, Thales of Miletus (6th century BCE) found the height of an Egyptian pyramid by comparing its shadow with the shadow of a stick. Book VI of Euclid's <i>Elements</i> (c. 300 BCE) develops the theory of similar figures.`
};
