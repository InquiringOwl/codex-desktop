window.ARITH = window.ARITH || {};

ARITH["g-surface-area"] = {
  title: "Surface Area of Solids",
  short: "Lateral area, base area and total, from the net",
  grade: "Grade 10 · college-prep Geometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Geometry · surface area",
  hero: `<span class="m"><span style="white-space:nowrap"><span class="c1"><i>T</i></span> = <span class="c2"><i>L</i></span> + <span class="c3"><i>B</i></span></span> &nbsp;·&nbsp; <span style="white-space:nowrap"><span class="c4"><i>ℓ</i></span><sup>2</sup> = <i>h</i><sup>2</sup> + <i>a</i><sup>2</sup></span></span>`,
  lede: `The surface area of a solid is the area of everything you could paint on the outside. Unfold the solid into its net and add up the areas of the pieces.`,
  plain: `<p>To find how much cardboard a box needs, cut it open and lay it flat. The flat pattern, its <b>net</b>, is made of rectangles, and the box's <b>surface area</b> is just their total area. The sides alone (without the top and bottom) give the <b>lateral area</b>; the top and bottom are the <b>bases</b>.</p>
<p>A can unrolls the same way. Its label is a rectangle whose width is the distance around the can, the circumference <span class="m">2π<i>r</i></span>, and whose height is the can's height. A pyramid's sides are triangles. Their height is not the pyramid's height but the <b>slant height</b>, measured down the middle of a side face. The slant height is the long side of a right triangle hidden inside the pyramid, so the Pythagorean Theorem finds it.</p>
<p>A cone's side unrolls into a fan-shaped piece of a circle, which gives the neat formula <span class="m">π<i>r</i><i>ℓ</i></span>. A sphere cannot be flattened without stretching, but Archimedes proved that its area is exactly four times the area of its largest circle: <span class="m">4π<i>r</i><sup>2</sup></span>.</p>`,
  formal: `<p>The <b>lateral area</b> <span class="m c2"><i>L</i></span> of a prism, cylinder, pyramid or cone is the area of its surface other than its bases. The <b>total surface area</b> <span class="m c1"><i>T</i></span> adds the base areas <span class="m c3"><i>B</i></span>. The <b>slant height</b> <span class="m c4"><i>ℓ</i></span> of a regular pyramid is the height of a lateral face; that of a right cone is the distance from the vertex to any point of the base circle. Here <span class="m"><i>p</i></span> is the base perimeter, <span class="m"><i>h</i></span> the height and <span class="m"><i>a</i></span> the apothem of the base.</p>
<div class="display">Right prism: &nbsp;<span class="c2"><i>L</i> = <i>ph</i></span>, &nbsp;<span class="c1"><i>T</i></span> = <span class="c2"><i>L</i></span> + 2<span class="c3"><i>B</i></span><br>Right cylinder: &nbsp;<span class="c2"><i>L</i> = 2π<i>rh</i></span>, &nbsp;<span class="c1"><i>T</i></span> = 2π<i>rh</i> + 2π<i>r</i><sup>2</sup><br>Regular pyramid: &nbsp;<span class="c2"><i>L</i> = ½<i>p</i><i>ℓ</i></span>, &nbsp;<span class="c1"><i>T</i></span> = <span class="c2"><i>L</i></span> + <span class="c3"><i>B</i></span>, &nbsp;<span class="c4"><i>ℓ</i></span><sup>2</sup> = <i>h</i><sup>2</sup> + <i>a</i><sup>2</sup><br>Right cone: &nbsp;<span class="c2"><i>L</i> = π<i>r</i><i>ℓ</i></span>, &nbsp;<span class="c1"><i>T</i></span> = π<i>r</i><i>ℓ</i> + π<i>r</i><sup>2</sup>, &nbsp;<span class="c4"><i>ℓ</i></span><sup>2</sup> = <i>h</i><sup>2</sup> + <i>r</i><sup>2</sup><br>Sphere: &nbsp;<span class="c1"><i>S</i> = 4π<i>r</i><sup>2</sup></span></div>
<p>The cone formula comes from its net: the lateral surface unrolls into a sector of radius <span class="m"><i>ℓ</i></span> whose arc is the base circumference <span class="m">2π<i>r</i></span>, so its area is <span class="m">½ · <i>ℓ</i> · 2π<i>r</i> = π<i>r</i><i>ℓ</i></span>, and its central angle is <span class="m">360° · <i>r</i>/<i>ℓ</i></span>. The pyramid's slant-height relation is the Pythagorean Theorem in the right triangle formed by the height, the apothem of the base and the slant height.</p>`,
  legend: [
    { c: "c2", sym: `<i>L</i>`, name: "Lateral area", desc: "The area of the side faces or the curved side: everything except the bases." },
    { c: "c3", sym: `<i>B</i>`, name: "Base area", desc: "The area of one base. A prism or cylinder has two bases, a pyramid or cone has one." },
    { c: "c1", sym: `<i>T</i>`, name: "Total surface area", desc: "Lateral area plus all base areas: the area of the whole net, in square units." },
    { c: "c4", sym: `<i>ℓ</i>`, name: "Slant height", desc: "The height of a pyramid's side face, or the distance down the side of a cone. Found from the height with the Pythagorean Theorem." }
  ],
  steps: { title: "How to find a surface area", items: [
    `Identify the solid and sketch its net: which faces are bases and which are lateral.`,
    `For a pyramid or cone, find the slant height first: <span class="m"><i>ℓ</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>h</i><sup>2</sup> + <i>a</i><sup>2</sup></span></span> (apothem) or <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>h</i><sup>2</sup> + <i>r</i><sup>2</sup></span></span> (radius).`,
    `Compute the lateral area: <span class="m"><i>ph</i></span>, <span class="m">2π<i>rh</i></span>, <span class="m">½<i>p</i><i>ℓ</i></span> or <span class="m">π<i>r</i><i>ℓ</i></span>.`,
    `Add each base that is actually present. An open box, a cup or a tent without a floor leaves some out.`,
    `Keep <span class="m">π</span> and radicals exact, then round once at the end. Give the answer in square units.`
  ] },
  example: {
    prompt: `A camping tent is a regular square pyramid with a base 8 ft on each side and a height of 6 ft. How much fabric is needed for the four sides and the floor? Give the exact area and the area to the nearest tenth of a square foot.`,
    lines: [
      { math: `<span class="m"><i>a</i> = 8 ÷ 2 = 4 ft</span>`, note: "The apothem of a square base is half its side: the distance from the centre to the midpoint of a side." },
      { math: `<span class="m c4"><i>ℓ</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">6<sup>2</sup> + 4<sup>2</sup></span> = √52 = 2√13</span>`, note: "Pythagorean Theorem in the right triangle formed by the height, the apothem and the slant height. 2√13 ≈ 7.21 ft." },
      { math: `<span class="m c2"><i>L</i> = ½ · 32 · 2√13 = 32√13</span>`, note: "Lateral area of a regular pyramid, L = ½pℓ, with base perimeter p = 4 · 8 = 32 ft." },
      { math: `<span class="m c3"><i>B</i> = 8<sup>2</sup> = 64</span>`, note: "The floor is the square base." },
      { math: `<span class="m c1"><i>T</i> = 64 + 32√13 ≈ 179.4 ft²</span>`, note: "Total surface area T = L + B. 32√13 ≈ 115.38, so T ≈ 179.38." },
      { math: `<span class="m">4 · (½ · 8 · 2√13) = 32√13 ✓</span>`, note: "Check: four triangles, each with base 8 and height ℓ, give the same lateral area, about 28.8 ft² each." }
    ],
    answer: `The tent needs <span class="m">64 + 32√13 ≈ 179.4</span> ft² of fabric: about <span class="m">115.4</span> ft² for the sides and <span class="m">64</span> ft² for the floor.`
  },
  why: `<p>Surface area measures how much material covers a solid: paint for a wall, sheet metal for a duct, fabric for a tent, foil for a can, insulation for a tank. It also controls how fast heat, water and chemicals move in and out, because exchange happens through the surface. Radiators, lungs and catalyst pellets are all shaped to have a large surface for their size.</p>
<p>In the course, surface area combines the net of a solid with plane area formulas, the circumference of a circle and the Pythagorean Theorem. In calculus the same idea, unrolling thin strips and adding their areas, gives the area of any surface of revolution.</p>`,
  careers: [
    { role: "Painter", use: "Estimates the paint for a room or a tank from the area of its walls and surfaces, then divides by the coverage per litre." },
    { role: "Sheet-metal worker", use: "Cuts flat stock for cylindrical and conical ducts using the circumference and the slant height." },
    { role: "Roofer", use: "Orders shingles for a pyramid (hip) roof from the lateral area of its sloped faces, using the slant height rather than the building's height." },
    { role: "Packaging engineer", use: "Minimises the board or film needed for a box or can of a given capacity by comparing surface areas." },
    { role: "Thermal engineer", use: "Sizes the fins of a heat sink, since the heat it sheds by convection grows with the surface area exposed to the air." },
    { role: "Chemical engineer", use: "Chooses catalyst pellet shapes with a large surface area, because reactions happen at the surface." }
  ],
  life: [
    "Buying wrapping paper for a box-shaped gift",
    "Working out how much paint a room or a fence needs",
    "Covering a cylindrical cake or a lampshade with icing or fabric",
    "Comparing how much packaging two products use",
    "Making a paper party hat or a cone for a funnel"
  ],
  fields: [
    { name: "Manufacturing", use: "Material cost for cans, cartons and ducts is set by surface area." },
    { name: "Heat transfer", use: "The rate of heat loss through a wall, pipe or fin is proportional to its area." },
    { name: "Biology", use: "Cells, lungs and gut linings depend on a large surface area relative to their volume." },
    { name: "Chemistry", use: "Reaction rates of solids increase with surface area, which is why powders react faster than lumps." }
  ],
  prereqWhy: {
    "g-solids": "Surface area is the area of a solid's net, so you need to know which faces a solid has and how they unfold.",
    "g-circle-measure": "The circumference 2πr gives the width of a cylinder's unrolled side and the arc of a cone's sector, and πr² gives the circular bases.",
    "g-pythagorean": "The slant height of a pyramid or cone is the hypotenuse of a right triangle whose legs are the height and the apothem or radius."
  },
  unlocksWhy: {
    "g-similar-solids": "Comparing the surface areas of similar solids shows that they grow as the square of the scale factor."
  },
  beyond: [
    { field: "Calculus II", why: "The surface area of a solid of revolution is found by integrating 2π times the radius along the arc length of the curve." },
    { field: "Multivariable Calculus", why: "Surface integrals measure the area of curved surfaces and the flow of a field through them." },
    { field: "Physics", why: "Pressure, heat flux and Gauss's law all work with a quantity spread over, or flowing through, a surface." }
  ],
  mistakes: [
    { wrong: `Using the pyramid's height <span class="m"><i>h</i></span> in <span class="m"><i>L</i> = ½<i>p</i><i>ℓ</i></span>.`, fix: `The side faces are triangles whose height is the slant height <span class="m"><i>ℓ</i></span>. Find it first: <span class="m"><i>ℓ</i><sup>2</sup> = <i>h</i><sup>2</sup> + <i>a</i><sup>2</sup></span>. The slant height is always longer than the height.` },
    { wrong: `Adding both bases for an open container, such as a cup or a tank with no lid.`, fix: `Draw the net and include only the pieces that are really there. An open cylindrical cup has <span class="m"><i>T</i> = 2π<i>rh</i> + π<i>r</i><sup>2</sup></span>.` },
    { wrong: `Writing the cone's lateral area as <span class="m">π<i>rh</i></span>.`, fix: `The unrolled side is a sector of radius <span class="m"><i>ℓ</i></span>, not <span class="m"><i>h</i></span>, so <span class="m"><i>L</i> = π<i>r</i><i>ℓ</i></span> with <span class="m"><i>ℓ</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>h</i><sup>2</sup> + <i>r</i><sup>2</sup></span></span>.` },
    { wrong: `Adding the hidden circles where solids are joined, for example the ends of a cylinder capped by hemispheres.`, fix: `Faces glued together are inside the solid, not on its surface. Add only the exposed pieces.` }
  ],
  practice: [
    { q: `A closed rectangular box is 10 cm long, 6 cm wide and 4 cm high. Find its lateral area and total surface area, taking the 10 by 6 faces as the bases.`, a: `<span class="m"><i>p</i> = 2(10 + 6) = 32</span>, so <span class="m"><i>L</i> = <i>ph</i> = 32 · 4 = 128</span> cm². <span class="m"><i>B</i> = 60</span>, so <span class="m"><i>T</i> = 128 + 2 · 60 = 248</span> cm². Check: <span class="m">2(60 + 40 + 24) = 248</span>.` },
    { q: `A soup can has radius 3 cm and height 10 cm. How much paper does the label (the lateral surface) need, and what is the can's total surface area?`, a: `<span class="m"><i>L</i> = 2π · 3 · 10 = 60π ≈ 188.5</span> cm². <span class="m"><i>T</i> = 60π + 2π · 3<sup>2</sup> = 78π ≈ 245.0</span> cm².` },
    { q: `A cone has radius 5 in. and height 12 in. Find its slant height, lateral area and total surface area.`, a: `<span class="m"><i>ℓ</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">12<sup>2</sup> + 5<sup>2</sup></span> = 13</span> in. <span class="m"><i>L</i> = π · 5 · 13 = 65π ≈ 204.2</span> in². <span class="m"><i>T</i> = 65π + 25π = 90π ≈ 282.7</span> in².` },
    { q: `A capsule is a cylinder of radius 2 mm and length 6 mm with a hemisphere on each end. Find its surface area.`, a: `The two hemispheres make one sphere: <span class="m">4π · 2<sup>2</sup> = 16π</span>. The cylinder contributes only its lateral area, since its ends are covered: <span class="m">2π · 2 · 6 = 24π</span>. Total <span class="m">40π ≈ 125.7</span> mm².` }
  ],
  origin: `Archimedes proved in <i>On the Sphere and Cylinder</i> (3rd century BCE) that a sphere's surface is four times the area of its greatest circle, and equal to the lateral area of the cylinder that just encloses it. He asked for a sphere inside a cylinder to be carved on his tomb; Cicero reported finding it in Sicily in 75 BCE.`
};
