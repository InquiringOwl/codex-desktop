window.ARITH = window.ARITH || {};

ARITH["g-solids"] = {
  title: "Solids, Nets & Cross-Sections",
  short: "Prisms, pyramids, Euler's formula, nets and slices",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · three dimensions",
  hero: `<span class="m"><span class="c1"><i>V</i></span> − <span class="c2"><i>E</i></span> + <span class="c4"><i>F</i></span> = 2</span>`,
  lede: `A box, a pyramid and a soccer ball are solids whose surfaces are made of flat or curved pieces. Counting their corners, edges and faces, unfolding them flat and slicing them with a plane are the three basic ways to study them.`,
  plain: `<p>A <b>polyhedron</b> is a solid whose surface is made only of flat polygons, called <b>faces</b>. Two faces meet along an <b>edge</b>, and edges meet at corners called <b>vertices</b>. A shoebox has 6 faces, 12 edges and 8 vertices. A <b>prism</b> has two matching ends, its <b>bases</b>, joined by side faces; a <b>pyramid</b> has one base and triangular sides that meet at a single top point. A can is a <b>cylinder</b>, a party hat is a <b>cone</b> and a ball is a <b>sphere</b>. These have curved surfaces, so they are not polyhedra.</p>
<p>Count the vertices, subtract the edges and add the faces of any box, pyramid or prism, and you always get 2. A cube gives 8 − 12 + 6 = 2; a triangular pyramid gives 4 − 6 + 4 = 2. This is <b>Euler's formula</b>, and it holds for every convex polyhedron.</p>
<p>Cut along some edges of a cardboard box and flatten it, and you get a <b>net</b>: one flat piece that folds back into the box. Slice a solid with a flat knife, and the cut surface is a <b>cross-section</b>. Slicing a loaf parallel to its end gives copies of the end. Slicing a cube at a slant can give a triangle, a rectangle, a pentagon or even a hexagon.</p>`,
  formal: `<p>A <b>polyhedron</b> is a solid bounded by polygonal regions, its <b>faces</b>; two faces meet in an <b>edge</b>, and three or more edges meet at a <b>vertex</b>. It is <b>convex</b> if the segment joining any two of its points lies inside it. A <b>prism</b> has two congruent polygonal <b>bases</b> in parallel planes, joined by <b>lateral faces</b> that are parallelograms (rectangles in a <b>right prism</b>). A <b>pyramid</b> has one polygonal base and triangular lateral faces that meet at a point, the <b>vertex</b> of the pyramid. A <b>cylinder</b> and a <b>cone</b> are the analogues with a circular base. A <b>sphere</b> is the set of all points in space at a given distance (the radius) from a given point (the centre).</p>
<div class="display"><b>Euler's Theorem.</b> For every convex polyhedron, &nbsp;<span class="c1"><i>V</i></span> − <span class="c2"><i>E</i></span> + <span class="c4"><i>F</i></span> = 2.<br><i>n</i>-gonal prism: &nbsp;<i>V</i> = 2<i>n</i>, &nbsp;<i>E</i> = 3<i>n</i>, &nbsp;<i>F</i> = <i>n</i> + 2<br><i>n</i>-gonal pyramid: &nbsp;<i>V</i> = <i>n</i> + 1, &nbsp;<i>E</i> = 2<i>n</i>, &nbsp;<i>F</i> = <i>n</i> + 1</div>
<p>A <b>cross-section</b> is the intersection of a solid with a plane. Cross-sections of a prism or cylinder parallel to its base are congruent to the base; those of a pyramid or cone parallel to its base are similar to the base. A <b>net</b> is a plane figure that folds along edges into the surface of a polyhedron. A convex polyhedron is <b>regular</b> if its faces are congruent regular polygons and the same number of faces meet at every vertex. There are exactly five (the <b>Platonic solids</b>): tetrahedron, cube, octahedron, dodecahedron and icosahedron.</p>`,
  legend: [
    { c: "c1", sym: `<i>V</i>`, name: "Vertices", desc: "The corner points, where three or more edges meet. A cube has 8." },
    { c: "c2", sym: `<i>E</i>`, name: "Edges", desc: "The segments where two faces meet. A cube has 12." },
    { c: "c4", sym: `<i>F</i>`, name: "Faces", desc: "The flat polygons that bound a polyhedron. A cube has 6, and they unfold into a net." },
    { c: "c3", sym: `cross-section`, name: "Cross-section", desc: "The flat shape where a plane cuts the solid. Its shape depends on the angle and position of the cut." }
  ],
  steps: { title: "How to analyse a solid", items: [
    `Decide whether every face is flat. If so it is a polyhedron; if some surface is curved it is a cylinder, cone, sphere or other curved solid.`,
    `For a prism or pyramid, find the base polygon and name the solid after it: "hexagonal prism", "square pyramid". Note whether a prism is right (rectangular lateral faces) or oblique.`,
    `Count faces, edges and vertices, using the prism and pyramid patterns for an <span class="m"><i>n</i></span>-gonal base.`,
    `Check with Euler's formula <span class="m"><i>V</i> − <i>E</i> + <i>F</i> = 2</span>. A different total means a miscount, or a solid with a hole through it.`,
    `For a net, keep every face exactly once and check that each edge pairs with one matching edge when folded. For a cross-section, find where the plane meets each edge and join those points face by face.`
  ] },
  example: {
    prompt: `A packaging designer is making a gift box shaped as a right hexagonal prism. Each base is a regular hexagon with side 5 cm and the box is 8 cm tall. Count its faces, edges and vertices and check them. The net is laid out as a strip of the six side rectangles with one hexagon attached to the top and one to the bottom of the same middle rectangle. What size of rectangular card does this layout need?`,
    lines: [
      { math: `<span class="m"><i>n</i> = 6</span>`, note: "The base is a hexagon, so the counts follow the n-gonal prism pattern with n = 6." },
      { math: `<span class="m"><span class="c4"><i>F</i> = 6 + 2 = 8</span>, <span class="c2"><i>E</i> = 18</span>, <span class="c1"><i>V</i> = 12</span></span>`, note: "Six lateral faces plus two bases; 6 edges on each base plus 6 lateral edges; 6 vertices on each base." },
      { math: `<span class="m">12 − 18 + 8 = 2 ✓</span>`, note: "Euler's Theorem: the prism is convex, so V − E + F must equal 2." },
      { math: `<span class="m">6 × 5 = 30 cm</span>`, note: "The six 5 cm by 8 cm lateral rectangles side by side make a strip 30 cm long and 8 cm high." },
      { math: `<span class="m">2 · <span class="fr"><span>5√3</span><span>2</span></span> = 5√3 ≈ 8.66 cm</span>`, note: "Each hexagon is six equilateral triangles of side 5. Its width across opposite sides is two triangle heights, and each height is 5√3/2 by the Pythagorean Theorem." },
      { math: `<span class="m">8 + 2 · 5√3 = 8 + 10√3 ≈ 25.3 cm</span>`, note: "Strip height plus one hexagon above and one below." },
      { math: `<span class="m">10 cm wide hexagon on a 5 cm side ✓</span>`, note: "Check the width: each hexagon is 10 cm from corner to corner and overhangs its 5 cm hinge by 2.5 cm on each side, which fits because it hangs from a middle rectangle." }
    ],
    answer: `The box has <span class="m">8</span> faces, <span class="m">18</span> edges and <span class="m">12</span> vertices, and <span class="m">12 − 18 + 8 = 2</span>. The net needs a card at least <span class="m">30</span> cm by <span class="m">8 + 10√3 ≈ 25.3</span> cm.`
  },
  why: `<p>Most real objects are solids, and drawings of them are flat. Being able to picture a solid from its faces, unfold it into a net and predict what a slice looks like is the basic skill behind packaging, sheet-metal work, architecture, medical imaging and 3-D modelling. A CT scanner, for example, produces a stack of cross-sections that a radiologist reads as a solid organ.</p>
<p>In the course, solids are where plane geometry is put to work. Surface area is the area of a net, volume is built from the areas of cross-sections (Cavalieri's Principle), and similar solids show how area and volume scale. Euler's formula is also the first result of topology: it depends only on how the faces are connected, not on lengths or angles.</p>`,
  careers: [
    { role: "Packaging engineer", use: "Designs the die-cut net of a carton so that it folds into the box with glue tabs in the right places." },
    { role: "Radiologist", use: "Reads CT and MRI scans, which are stacks of cross-sections of the body, and pictures the organ they come from." },
    { role: "Sheet-metal worker", use: "Lays out flat patterns for ducts and transitions that bend into prisms and pyramids." },
    { role: "3-D modeller", use: "Builds game and film objects as polyhedral meshes of vertices, edges and faces, and unwraps them into flat UV maps for texturing." },
    { role: "Geologist", use: "Interprets a vertical cut through rock layers or a mineral crystal as a cross-section of a solid." },
    { role: "Architect", use: "Draws plans and sections, horizontal and vertical cross-sections of a building, to show its interior." }
  ],
  life: [
    "Flattening a cardboard box for recycling",
    "Wrapping a gift and cutting the paper to the shape the box needs",
    "Slicing a loaf, a cucumber or a cake and predicting the shape of the cut",
    "Folding a paper model or a pop-up card",
    "Reading a building's floor plan as a slice through the building"
  ],
  fields: [
    { name: "Medical imaging", use: "CT, MRI and ultrasound build a picture of an organ from many cross-sections." },
    { name: "Computer graphics", use: "Solids are stored as polyhedral meshes, and Euler's formula checks that a closed mesh has no holes." },
    { name: "Crystallography", use: "Crystals grow as polyhedra, and their faces, edges and symmetry identify the mineral." },
    { name: "Engineering drawing", use: "Orthographic views and section views describe a part by its projections and cross-sections." }
  ],
  prereqWhy: {
    "g-polygons": "The faces and bases of a polyhedron are polygons, and a prism or pyramid is named after its base polygon.",
    "g-area-polygons": "A cross-section or a face of a net is a triangle, rectangle or other polygon whose area is found with those formulas."
  },
  unlocksWhy: {
    "g-surface-area": "The surface area of a polyhedron is the total area of the faces in its net.",
    "g-volume": "Cavalieri's Principle compares the volumes of solids through the areas of their cross-sections."
  },
  beyond: [
    { field: "Calculus", why: "Volumes by slicing integrate the area of a cross-section, and solids of revolution are built by rotating a region about an axis." },
    { field: "Topology", why: "Euler's formula generalises to the Euler characteristic, which tells a sphere (2) from a doughnut surface (0)." },
    { field: "Multivariable Calculus", why: "Level sets and cross-sections of surfaces such as cones and paraboloids are how three-dimensional graphs are drawn and read." }
  ],
  mistakes: [
    { wrong: `Counting the edges of a cube as 24 by adding 4 edges for each of its 6 faces.`, fix: `Each edge is shared by two faces, so <span class="m">6 · 4 = 24</span> counts every edge twice: <span class="m"><i>E</i> = 12</span>. In general <span class="m">2<i>E</i></span> equals the total number of sides of all the faces.` },
    { wrong: `Calling a cylinder or a cone a polyhedron and applying <span class="m"><i>V</i> − <i>E</i> + <i>F</i> = 2</span>.`, fix: `A polyhedron has only flat polygonal faces. Cylinders, cones and spheres have curved surfaces, so they are not polyhedra and Euler's formula does not apply.` },
    { wrong: `Expecting <span class="m"><i>V</i> − <i>E</i> + <i>F</i> = 2</span> for a picture frame with a square hole through it.`, fix: `The theorem is for convex polyhedra (more generally, polyhedra without holes). A frame-shaped polyhedron with one tunnel gives <span class="m"><i>V</i> − <i>E</i> + <i>F</i> = 0</span>.` },
    { wrong: `Accepting any six connected squares as a net of a cube.`, fix: `Only 11 arrangements of six squares fold into a cube. A row of four squares with two squares attached on the same side, for example, folds with two faces overlapping and one face missing.` }
  ],
  practice: [
    { q: `A pyramid has a hexagonal base. Find <span class="m"><i>V</i></span>, <span class="m"><i>E</i></span> and <span class="m"><i>F</i></span> and verify Euler's formula.`, a: `<span class="m"><i>V</i> = 6 + 1 = 7</span> (six base vertices and the apex), <span class="m"><i>E</i> = 2 · 6 = 12</span> (six base edges and six lateral edges), <span class="m"><i>F</i> = 6 + 1 = 7</span>. Then <span class="m">7 − 12 + 7 = 2</span>.` },
    { q: `A convex polyhedron has 12 vertices and 30 edges. How many faces does it have? If every face is a triangle, is that consistent?`, a: `Euler's formula: <span class="m"><i>F</i> = 2 − <i>V</i> + <i>E</i> = 2 − 12 + 30 = 20</span>. Twenty triangles have <span class="m">20 · 3 = 60</span> sides, and each edge is shared by two faces, so <span class="m"><i>E</i> = 60/2 = 30</span>: consistent. This is the icosahedron.` },
    { q: `A cube with edges of 6 cm is cut by the plane that contains one edge and the opposite (parallel, non-adjacent) edge. Name the cross-section and find its area.`, a: `The section is the rectangle with those two edges as opposite sides. Its other two sides are diagonals of the two faces the plane crosses, so its sides are 6 cm (an edge) and <span class="m">6√2</span> cm (a face diagonal, by the Pythagorean Theorem: <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">6<sup>2</sup> + 6<sup>2</sup></span> = 6√2</span>). Area <span class="m">6 · 6√2 = 36√2 ≈ 50.9</span> cm².` },
    { q: `Can a plane cut a cube of edge 6 in (a) an equilateral triangle, (b) a regular hexagon, (c) a heptagon? Give the area when it can.`, a: `(a) Yes: the plane through the three vertices adjacent to one corner. Each side is a face diagonal <span class="m">6√2</span>, so the area is <span class="m"><span class="fr"><span>√3</span><span>4</span></span>(6√2)<sup>2</sup> = 18√3 ≈ 31.2</span>. (b) Yes: the plane through the cube's centre perpendicular to a space diagonal passes through the midpoints of six edges. Each side joins midpoints of adjacent edges, <span class="m">3√2</span>, and the area is <span class="m"><span class="fr"><span>3√3</span><span>2</span></span>(3√2)<sup>2</sup> = 27√3 ≈ 46.8</span>. (c) No: each side of a cross-section lies in a different face, and a cube has only six faces.` }
  ],
  origin: `Book XIII of Euclid's <i>Elements</i> (about 300 BCE) constructs the five regular polyhedra and shows that no others exist; they are called Platonic solids because Plato's <i>Timaeus</i> linked them to the elements. Albrecht Dürer printed the first known nets of polyhedra in 1525. Leonhard Euler stated <span class="m"><i>V</i> − <i>E</i> + <i>F</i> = 2</span> in a 1750 letter to Christian Goldbach.`
};
