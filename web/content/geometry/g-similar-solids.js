window.ARITH = window.ARITH || {};

ARITH["g-similar-solids"] = {
  title: "Similar Solids: Area & Volume Ratios",
  short: "Lengths scale by k, areas by k², volumes by k³",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · scaling solids",
  hero: `<span class="m"><span class="c2"><i>k</i></span> &nbsp;:&nbsp; <span class="c3"><i>k</i><sup>2</sup></span> &nbsp;:&nbsp; <span class="c4"><i>k</i><sup>3</sup></span></span>`,
  lede: `Double every length of a solid and its surface becomes 4 times as large while its volume becomes 8 times as large. Lengths, areas and volumes of similar solids scale by different powers of the same factor.`,
  plain: `<p>Two solids are <b>similar</b> when one is an exact scaled copy of the other: same shape, every length multiplied by the same <b>scale factor</b> <span class="m c1"><i>k</i></span>. A toy car and the real car, or a small and a large can of the same design, are examples.</p>
<p>Build a cube from 1 unit cube, then scale it by 2. Each edge is now 2 units, so each face is a 2-by-2 square of 4 small squares, and the whole cube is 2 × 2 × 2 = 8 small cubes. Scale by 3 instead and each face holds 9 squares while the cube holds 27 cubes. Lengths grow by <span class="m"><i>k</i></span>, areas by <span class="m"><i>k</i><sup>2</sup></span> and volumes by <span class="m"><i>k</i><sup>3</sup></span>, for any solid, because an area is a product of two lengths and a volume a product of three.</p>
<p>This has real consequences, called the <b>square–cube law</b>. Make an animal or a beam 10 times larger in every direction and its weight, which goes with volume, is 1000 times larger, while the strength of its bones or cross-section, which goes with area, is only 100 times larger. Large animals need disproportionately thick legs, and a structure cannot be scaled up forever.</p>`,
  formal: `<p>Two solids are <b>similar</b> if one is congruent to a dilation of the other, so that all pairs of corresponding lengths have the same ratio, the <b>scale factor</b>. Similar polyhedra have corresponding faces similar and corresponding edges proportional. Any two cubes are similar, and so are any two spheres. Two cylinders (or two cones) are similar exactly when their radii and heights are in the same ratio.</p>
<div class="display"><b>Similar Solids Theorem.</b> If two similar solids have scale factor <span class="c1"><i>a</i> : <i>b</i></span>, then<br>corresponding lengths (edges, heights, radii, perimeters) &nbsp;<span class="c2"><i>a</i> : <i>b</i></span><br>corresponding areas (base, lateral, total) &nbsp;<span class="c3"><i>a</i><sup>2</sup> : <i>b</i><sup>2</sup></span><br>volumes &nbsp;<span class="c4"><i>a</i><sup>3</sup> : <i>b</i><sup>3</sup></span></div>
<p>For a box with edges <span class="m"><i>ℓ</i>, <i>w</i>, <i>h</i></span> scaled by <span class="m"><i>k</i></span>: <span class="m">2(<i>kℓ</i> · <i>kw</i> + <i>kℓ</i> · <i>kh</i> + <i>kw</i> · <i>kh</i>) = <i>k</i><sup>2</sup> · 2(<i>ℓw</i> + <i>ℓh</i> + <i>wh</i>)</span> and <span class="m"><i>kℓ</i> · <i>kw</i> · <i>kh</i> = <i>k</i><sup>3</sup><i>ℓwh</i></span>. The same holds for every formula on the surface-area and volume pages, since each area term multiplies two lengths and each volume term three. Conversely, if two similar solids have volume ratio <span class="m"><i>V</i><sub>1</sub> : <i>V</i><sub>2</sub></span>, the scale factor is <span class="m"><sup>3</sup>√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>V</i><sub>1</sub>/<i>V</i><sub>2</sub></span></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>k</i>`, name: "Scale factor", desc: "The ratio of corresponding lengths, image to original. k > 1 enlarges, 0 < k < 1 shrinks." },
    { c: "c2", sym: `<i>k</i>`, name: "Length ratio", desc: "Edges, heights, radii, perimeters and slant heights all scale by k." },
    { c: "c3", sym: `<i>k</i><sup>2</sup>`, name: "Area ratio", desc: "Base, lateral and total surface areas scale by k squared." },
    { c: "c4", sym: `<i>k</i><sup>3</sup>`, name: "Volume ratio", desc: "Volume, capacity and (for the same material) weight scale by k cubed." }
  ],
  steps: { title: "How to compare similar solids", items: [
    `Check similarity: every pair of corresponding lengths must have the same ratio. One matching ratio is not enough.`,
    `Find the scale factor <span class="m"><i>k</i></span> from any pair of corresponding lengths, image over original.`,
    `If you are given an area ratio instead, take its square root; a volume ratio, its cube root.`,
    `Multiply lengths by <span class="m"><i>k</i></span>, areas by <span class="m"><i>k</i><sup>2</sup></span> and volumes or weights by <span class="m"><i>k</i><sup>3</sup></span>.`,
    `Check direction and size: an enlargement should give a larger answer, and volume should change more than area.`
  ] },
  example: {
    prompt: `A soup company sells two similar cylindrical cans. The small can is 8 cm tall, its label covers 150 cm² and it holds 340 mL. The large can is 12 cm tall. How large is its label and how much does it hold?`,
    lines: [
      { math: `<span class="m c1"><i>k</i> = <span class="fr"><span>12</span><span>8</span></span> = <span class="fr"><span>3</span><span>2</span></span></span>`, note: "Scale factor from the corresponding heights, large over small." },
      { math: `<span class="m"><span class="c3"><i>k</i><sup>2</sup></span> = <span class="fr"><span>9</span><span>4</span></span>, &nbsp; <span class="c4"><i>k</i><sup>3</sup></span> = <span class="fr"><span>27</span><span>8</span></span></span>`, note: "Similar Solids Theorem: areas scale by k², volumes by k³." },
      { math: `<span class="m c3">150 · <span class="fr"><span>9</span><span>4</span></span> = 337.5 cm²</span>`, note: "The label is the lateral area, an area." },
      { math: `<span class="m c4">340 · <span class="fr"><span>27</span><span>8</span></span> = 1147.5 mL</span>`, note: "Capacity is a volume." },
      { math: `<span class="m"><span class="fr"><span>1147.5</span><span>340</span></span> = 3.375 = 1.5<sup>3</sup> ✓</span>`, note: "Check: the volume ratio is the cube of the height ratio, and the label ratio 337.5/150 = 2.25 is its square." }
    ],
    answer: `The large can's label is <span class="m">337.5</span> cm² and it holds <span class="m">1147.5</span> mL. It uses 2.25 times the label for 3.375 times the soup.`
  },
  why: `<p>Scale models, maps, enlargements and every "family size" package rely on the fact that areas and volumes do not scale like lengths. A model 1/50 the length of a building has 1/2500 of its wall area and 1/125,000 of its volume. Ignoring this is a classic, costly error: doubling the size of a tank multiplies the steel by 4 and the contents by 8.</p>
<p>The square–cube law explains a great deal of biology and engineering. Small animals lose heat fast because they have much surface for their volume; elephants have thick legs; insects can walk on water; ship and aircraft models need careful scaling before wind-tunnel and towing-tank results apply to the full size.</p>`,
  careers: [
    { role: "Architect", use: "Builds scale models and knows that a 1:100 model has 1/10,000 of the real surface and 1/1,000,000 of the real volume." },
    { role: "Structural engineer", use: "Checks that a scaled-up design still carries its own weight, since weight grows as k³ while member cross-sections grow as k²." },
    { role: "Biologist", use: "Studies allometry, how heart rate, bone thickness and heat loss change with body size following the square–cube law." },
    { role: "Naval architect", use: "Tests small ship models in towing tanks and scales the measured resistance up to full size." },
    { role: "Sculptor", use: "Estimates the bronze for an enlargement of a small model: a statue three times taller needs about 27 times the metal if it is cast solid." },
    { role: "Packaging designer", use: "Sizes a larger version of a container and predicts its material use from k² and its capacity from k³." }
  ],
  life: [
    "Comparing the value of a small and a large pizza, pot or can of the same shape",
    "Understanding why a large ice block melts more slowly than the same ice crushed",
    "Knowing why a small child gets cold faster than an adult",
    "Reading the scale of a model car, train or building",
    "Estimating how much more paint and how much more water a larger tank needs"
  ],
  fields: [
    { name: "Biology", use: "Allometric scaling laws relate metabolism, surface area and skeleton to body size." },
    { name: "Engineering", use: "Scale-model testing uses similarity rules to carry results to full size." },
    { name: "Physics", use: "Dimensional analysis predicts how quantities change when every length is multiplied by k." },
    { name: "Chemistry", use: "Grinding a solid finer multiplies its surface area for the same volume, speeding reactions." }
  ],
  prereqWhy: {
    "g-surface-area": "The k² rule is seen by computing the surface areas of a solid and its scaled copy with the lateral and base area formulas.",
    "g-volume": "The k³ rule follows from the volume formulas, each of which multiplies three lengths.",
    "g-similarity": "Similar solids extend scale factor from polygons, where corresponding lengths have ratio k and areas have ratio k²."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus", why: "A dilation by k multiplies every area integral by k² and every volume integral by k³, the simplest case of the change-of-variables rule." },
    { field: "Physics", why: "Dimensional analysis and scaling laws, from pendulums to fluid flow, rest on how quantities depend on powers of length." },
    { field: "Fractal geometry", why: "The dimension of a fractal is defined by how its measure scales when lengths are multiplied by k." }
  ],
  mistakes: [
    { wrong: `Doubling the radius of a sphere and doubling its volume.`, fix: `Volume scales by <span class="m"><i>k</i><sup>3</sup></span>: doubling every length multiplies the volume by <span class="m">2<sup>3</sup> = 8</span> and the surface area by 4.` },
    { wrong: `Calling two cylinders similar because their radii have ratio 1 : 2.`, fix: `Every corresponding length must have the same ratio. Radii 2 and 4 with heights 5 and 8 give <span class="m">1/2 ≠ 5/8</span>: not similar.` },
    { wrong: `From a volume ratio of 8 : 27, taking the scale factor as 8 : 27 or its square root.`, fix: `Take the cube root: <span class="m"><sup>3</sup>√8 : <sup>3</sup>√27 = 2 : 3</span>. Then the area ratio is 4 : 9.` },
    { wrong: `Applying the ratios to solids that are only similar in part, such as a can whose height doubled but whose radius did not.`, fix: `The <span class="m"><i>k</i><sup>2</sup></span> and <span class="m"><i>k</i><sup>3</sup></span> rules need every length scaled by <span class="m"><i>k</i></span>. Otherwise compute the areas and volumes directly.` }
  ],
  practice: [
    { q: `Two similar square pyramids have heights 4 cm and 10 cm. Find the ratio of their lateral areas and of their volumes.`, a: `<span class="m"><i>k</i> = 4 : 10 = 2 : 5</span>. Areas <span class="m">2<sup>2</sup> : 5<sup>2</sup> = 4 : 25</span>; volumes <span class="m">2<sup>3</sup> : 5<sup>3</sup> = 8 : 125</span>.` },
    { q: `Two similar solids have volumes 64 cm³ and 343 cm³. The smaller has surface area 80 cm². Find the scale factor and the larger one's surface area.`, a: `Scale factor <span class="m"><sup>3</sup>√64 : <sup>3</sup>√343 = 4 : 7</span>. Area ratio <span class="m">16 : 49</span>, so the larger surface area is <span class="m">80 · <span class="fr"><span>49</span><span>16</span></span> = 245</span> cm².` },
    { q: `Cylinder A has radius 2 cm and height 5 cm; cylinder B has radius 4 cm and height 8 cm. Are they similar? What height would make B similar to A, and what would B's volume be then?`, a: `<span class="m">2/4 = 1/2</span> but <span class="m">5/8 ≠ 1/2</span>, so they are not similar. A height of 10 cm would make <span class="m"><i>k</i> = 2</span>. Then <span class="m"><i>V</i><sub>B</sub> = 2<sup>3</sup> · <i>V</i><sub>A</sub> = 8 · 20π = 160π ≈ 502.7</span> cm³, which agrees with <span class="m">π · 4<sup>2</sup> · 10 = 160π</span>.` },
    { q: `A solid stone statue 2 m tall weighs 150 kg and stands on a base of area 0.25 m². A similar statue 6 m tall is carved from the same stone. Find its weight, its base area and the load on each square metre of its base, compared with the original.`, a: `<span class="m"><i>k</i> = 3</span>. Weight <span class="m">150 · 3<sup>3</sup> = 4050</span> kg; base area <span class="m">0.25 · 3<sup>2</sup> = 2.25</span> m². Load per square metre: <span class="m">150/0.25 = 600</span> kg/m² becomes <span class="m">4050/2.25 = 1800</span> kg/m², three times as much (<span class="m"><i>k</i><sup>3</sup>/<i>k</i><sup>2</sup> = <i>k</i></span>). This is the square–cube law.` }
  ],
  origin: `Euclid proves in Book XII of the <i>Elements</i> that spheres are to one another as the cubes of their diameters (Proposition XII.18). Galileo Galilei used the square–cube law in <i>Two New Sciences</i> (1638) to argue that neither animals nor machines can be scaled up indefinitely without changing their proportions.`
};
