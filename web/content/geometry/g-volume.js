window.ARITH = window.ARITH || {};

ARITH["g-volume"] = {
  title: "Volume & Cavalieri's Principle",
  short: "Bh, one third of Bh, and 4/3 πr³ from slices",
  grade: "Grade 10 · college-prep Geometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Geometry · volume",
  hero: `<span class="m"><span style="white-space:nowrap"><span class="c1"><i>V</i></span> = <span class="c2"><i>B</i></span><span class="c3"><i>h</i></span></span> &nbsp;·&nbsp; <span style="white-space:nowrap"><span class="c1"><i>V</i></span> = <span class="fr"><span>1</span><span>3</span></span><span class="c2"><i>B</i></span><span class="c3"><i>h</i></span></span> &nbsp;·&nbsp; <span style="white-space:nowrap"><span class="c1"><i>V</i></span> = <span class="fr"><span>4</span><span>3</span></span>π<i>r</i><sup>3</sup></span></span>`,
  lede: `Volume is the amount of space a solid fills, counted in unit cubes. Think of a solid as a stack of thin slices: if two solids have equal slices at every height, they hold the same amount.`,
  plain: `<p>A box 5 cubes long, 4 wide and 3 high holds <span class="m">5 · 4 · 3 = 60</span> unit cubes. Another way to see it: the bottom layer has 20 cubes, the <b>base area</b>, and there are 3 layers, the <b>height</b>. Any prism or cylinder works the same way: volume = base area × height.</p>
<p>Now push a stack of coins or a deck of cards so that it leans. Every coin is still the same coin, so the leaning stack holds exactly as much as the straight one. That is <b>Cavalieri's Principle</b>: two solids with the same height and equal-area slices at every level have the same volume. It is why a slanted (oblique) prism still has volume base × height, with the height measured straight up, not along the slant.</p>
<p>A pyramid or a cone narrows to a point, so it holds less. Fill a cone with water and pour it into a cylinder with the same base and height: it takes exactly three cones to fill the cylinder. So a pyramid or cone has one third of base × height. A ball holds two thirds of the smallest cylinder that encloses it, which gives <span class="m"><span class="fr"><span>4</span><span>3</span></span>π<i>r</i><sup>3</sup></span>.</p>`,
  formal: `<p>The <b>volume</b> of a solid is the number of cubic units it contains. Postulates: the volume of a rectangular box is <span class="m"><i>ℓwh</i></span>, and the volume of a solid is the sum of the volumes of non-overlapping parts (Volume Addition). <b>Cavalieri's Principle:</b> if two solids have the same height and every plane parallel to their bases cuts them in cross-sections of equal area, then the solids have equal volumes.</p>
<div class="display">Prism, cylinder (right or oblique): &nbsp;<span class="c1"><i>V</i></span> = <span class="c2"><i>B</i></span><span class="c3"><i>h</i></span>, &nbsp; cylinder <span class="c1"><i>V</i></span> = π<i>r</i><sup>2</sup><span class="c3"><i>h</i></span><br>Pyramid, cone: &nbsp;<span class="c1"><i>V</i></span> = <span class="fr"><span>1</span><span>3</span></span><span class="c2"><i>B</i></span><span class="c3"><i>h</i></span>, &nbsp; cone <span class="c1"><i>V</i></span> = <span class="fr"><span>1</span><span>3</span></span>π<i>r</i><sup>2</sup><span class="c3"><i>h</i></span><br>Sphere: &nbsp;<span class="c1"><i>V</i></span> = <span class="fr"><span>4</span><span>3</span></span>π<i>r</i><sup>3</sup> &nbsp;&nbsp;<span class="dim"><i>h</i> is the perpendicular distance between the base planes, or from the vertex to the base plane</span></div>
<p>Cavalieri's Principle gives the oblique cases at once, since each slice of an oblique prism is a translated copy of the base. A triangular prism splits into three pyramids of equal volume (Euclid, <i>Elements</i> XII.7), which gives <span class="m"><span class="fr"><span>1</span><span>3</span></span><i>Bh</i></span>. For the sphere, cut a hemisphere of radius <span class="m"><i>r</i></span> and a cylinder of radius <span class="m"><i>r</i></span> and height <span class="m"><i>r</i></span> from which a cone (vertex at the centre of the bottom, base the top of the cylinder) has been removed. At height <span class="m"><i>y</i></span> both slices have area <span class="m c4">π(<i>r</i><sup>2</sup> − <i>y</i><sup>2</sup>)</span>, so the hemisphere's volume is <span class="m">π<i>r</i><sup>3</sup> − <span class="fr"><span>1</span><span>3</span></span>π<i>r</i><sup>3</sup> = <span class="fr"><span>2</span><span>3</span></span>π<i>r</i><sup>3</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>B</i>`, name: "Base area", desc: "The area of the base: a polygon area for prisms and pyramids, πr² for cylinders and cones." },
    { c: "c3", sym: `<i>h</i>`, name: "Height", desc: "The perpendicular distance between the bases (or from the vertex to the base), never the slanted edge." },
    { c: "c1", sym: `<i>V</i>`, name: "Volume", desc: "The space the solid fills, in cubic units." },
    { c: "c4", sym: `<i>A</i>(<i>y</i>)`, name: "Slice", desc: "The area of the cross-section at height y. Cavalieri's Principle compares solids slice by slice." }
  ],
  steps: { title: "How to find a volume", items: [
    `Identify the solid: prism or cylinder (same slice all the way up), pyramid or cone (narrows to a point), sphere, or a combination.`,
    `Find the base area <span class="m"><i>B</i></span> with the right plane formula: a rectangle, triangle or other polygon, or <span class="m">π<i>r</i><sup>2</sup></span> for a circle.`,
    `Find the height <span class="m"><i>h</i></span> perpendicular to the base. If you are given a slant height or a slanted edge, use the Pythagorean Theorem to get <span class="m"><i>h</i></span>.`,
    `Apply <span class="m"><i>Bh</i></span>, <span class="m"><span class="fr"><span>1</span><span>3</span></span><i>Bh</i></span> or <span class="m"><span class="fr"><span>4</span><span>3</span></span>π<i>r</i><sup>3</sup></span>. For a composite solid, add the parts (or subtract a hole).`,
    `Keep <span class="m">π</span> exact, round at the end, and state cubic units. Check that the answer is reasonable against a simple box around the solid.`
  ] },
  example: {
    prompt: `A grain silo is a cylinder with radius 3 m and height 12 m, topped by a hemispherical roof of the same radius. How much grain can it hold when full to the top of the dome? Give the exact volume and the volume to the nearest tenth of a cubic metre.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>B</i> = π · 3<sup>2</sup> = 9π</span> m²</span>`, note: "Base area of the cylinder, a circle of radius 3 m." },
      { math: `<span class="m"><span class="c1"><i>V</i></span><sub>cyl</sub> = 9π · <span class="c3">12</span> = 108π</span>`, note: "Volume of a cylinder, V = Bh." },
      { math: `<span class="m"><span class="c1"><i>V</i></span><sub>dome</sub> = ½ · <span class="fr"><span>4</span><span>3</span></span>π · 3<sup>3</sup> = 18π</span>`, note: "Half of the sphere volume (4/3)πr³ with r = 3: half of 36π." },
      { math: `<span class="m c1"><i>V</i> = 108π + 18π = 126π</span>`, note: "Volume Addition Postulate: the two parts do not overlap." },
      { math: `<span class="m c1">126π ≈ 395.8 m³</span>`, note: "Round once, at the end." },
      { math: `<span class="m">108π ≈ 339.3 &lt; 395.8 &lt; 424.1 ≈ 135π</span>`, note: "Reasonableness check: more than the cylinder alone, less than a cylinder 15 m tall that encloses the whole silo." }
    ],
    answer: `The silo holds <span class="m">126π ≈ 395.8</span> m³ of grain.`
  },
  why: `<p>Volume is how much something holds or how much material it takes: concrete for a footing, water in a tank, medicine in a syringe, air in a room, grain in a silo. Weight follows from volume times density, so engineers and shippers compute volumes constantly.</p>
<p>Cavalieri's Principle is the idea that turns into integral calculus: slice a solid, find the area of each slice, and add. In calculus the sum becomes an integral of the cross-sectional area, and the formulas on this page are its first examples.</p>`,
  careers: [
    { role: "Concrete contractor", use: "Orders concrete in cubic yards from the length, width and depth of a slab, plus the volume of cylindrical piers." },
    { role: "Civil engineer", use: "Estimates the earth to move for a road cut and the storage of a reservoir from cross-sections taken at regular intervals." },
    { role: "Agricultural engineer", use: "Rates grain bins and silos in bushels from the volume of the cylinder and its conical or domed roof." },
    { role: "Water-treatment operator", use: "Computes the capacity of cylindrical tanks and clarifiers to set chemical doses and detention times (volume divided by flow rate)." },
    { role: "Foundry technician", use: "Calculates how much molten metal a casting needs from the volume of the mould cavity." },
    { role: "Logistics planner", use: "Plans how many boxes fit in a shipping container from their volumes and dimensions." }
  ],
  life: [
    "Working out how much soil fills a raised garden bed",
    "Comparing the capacity of two different-shaped bottles or jars",
    "Buying the right size of fish tank, cooler or storage bin",
    "Estimating how much water a swimming pool or bathtub holds",
    "Choosing between a cone and a cup of ice cream"
  ],
  fields: [
    { name: "Physics", use: "Density, buoyancy and pressure all start from the volume of a body." },
    { name: "Chemistry", use: "Concentrations and gas laws use the volume of the container in litres." },
    { name: "Medicine", use: "Organ and tumour volumes are estimated from stacks of scan slices." },
    { name: "Construction", use: "Concrete, gravel and fill are priced and delivered by volume." }
  ],
  prereqWhy: {
    "g-solids": "Volume formulas belong to prisms, pyramids, cylinders, cones and spheres, and Cavalieri's Principle works with their cross-sections.",
    "g-circle-measure": "The base of a cylinder or cone and every slice of a sphere is a circle, whose area is πr²."
  },
  unlocksWhy: {
    "g-similar-solids": "The volumes of similar solids compare as the cube of the scale factor, which the volume formulas show directly."
  },
  beyond: [
    { field: "Calculus I", why: "Volumes by slicing, discs and washers integrate the cross-sectional area, which is Cavalieri's Principle made exact." },
    { field: "Multivariable Calculus", why: "Triple integrals compute the volume and mass of regions bounded by curved surfaces." },
    { field: "Physics", why: "Mass is density times volume, and buoyant force equals the weight of the displaced volume of fluid." }
  ],
  mistakes: [
    { wrong: `Using the slanted edge of an oblique prism, or the slant height of a cone, as <span class="m"><i>h</i></span>.`, fix: `The height is perpendicular to the base. For a cone with slant height <span class="m"><i>ℓ</i></span>, first find <span class="m"><i>h</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>ℓ</i><sup>2</sup> − <i>r</i><sup>2</sup></span></span>.` },
    { wrong: `Forgetting the <span class="m"><span class="fr"><span>1</span><span>3</span></span></span> for a pyramid or cone.`, fix: `A pyramid fills one third of the prism with the same base and height. Without the <span class="m"><span class="fr"><span>1</span><span>3</span></span></span> the answer is three times too big.` },
    { wrong: `Putting the diameter into <span class="m">π<i>r</i><sup>2</sup></span> or <span class="m"><span class="fr"><span>4</span><span>3</span></span>π<i>r</i><sup>3</sup></span>.`, fix: `Halve the diameter first. Using the diameter makes a cylinder's volume 4 times and a sphere's volume 8 times too big.` },
    { wrong: `Giving a volume in square units, or mixing centimetres and metres.`, fix: `Volume is in cubic units. Convert every length to one unit before multiplying: 1 m³ = 1,000,000 cm³, not 100 cm³.` }
  ],
  practice: [
    { q: `An oblique prism has a rectangular base 8 cm by 5 cm. Its height is 3 cm, and its slanted lateral edges are 4 cm long. Find its volume.`, a: `By Cavalieri's Principle the volume is the same as that of a right prism with the same base and height: <span class="m"><i>V</i> = <i>Bh</i> = 40 · 3 = 120</span> cm³. The 4 cm edge is not the height (using it would give 160 cm³).` },
    { q: `A glass paperweight is a square pyramid with base edge 6 cm and height 10 cm. Find its volume, and the volume of the prism with the same base and height.`, a: `<span class="m"><i>V</i> = <span class="fr"><span>1</span><span>3</span></span> · 6<sup>2</sup> · 10 = 120</span> cm³. The prism holds <span class="m">36 · 10 = 360</span> cm³, three times as much.` },
    { q: `An ice-cream cone has radius 3 cm and slant height 5 cm. How much does it hold, level with the top?`, a: `Height: <span class="m"><i>h</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">5<sup>2</sup> − 3<sup>2</sup></span> = 4</span> cm (Pythagorean Theorem). <span class="m"><i>V</i> = <span class="fr"><span>1</span><span>3</span></span>π · 3<sup>2</sup> · 4 = 12π ≈ 37.7</span> cm³.` },
    { q: `Three tennis balls, each 6.5 cm in diameter, fit snugly in a cylindrical can (the can's radius equals a ball's radius and its height is three diameters). What fraction of the can is empty, and how much empty space is there?`, a: `With <span class="m"><i>r</i> = 3.25</span>: balls <span class="m">3 · <span class="fr"><span>4</span><span>3</span></span>π<i>r</i><sup>3</sup> = 4π<i>r</i><sup>3</sup></span>, can <span class="m">π<i>r</i><sup>2</sup> · 6<i>r</i> = 6π<i>r</i><sup>3</sup></span>. Empty: <span class="m">2π<i>r</i><sup>3</sup></span>, which is <span class="m"><span class="fr"><span>1</span><span>3</span></span></span> of the can whatever the size. Here <span class="m">2π(3.25)<sup>3</sup> = <span class="fr"><span>2197π</span><span>32</span></span> ≈ 215.7</span> cm³.` }
  ],
  origin: `Archimedes credits Democritus with stating that a cone is one third of the cylinder with the same base and height, and Eudoxus with the first proof. Archimedes himself showed, in <i>On the Sphere and Cylinder</i>, that a sphere is two thirds of its enclosing cylinder. The slicing principle was used by Zu Gengzhi in China around 500 CE to find the volume of a sphere, and was published in Europe by Bonaventura Cavalieri in 1635.`
};
