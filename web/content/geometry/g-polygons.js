window.ARITH = window.ARITH || {};

ARITH["g-polygons"] = {
  title: "Polygons & Angle Sums",
  short: "Interior angles total (n − 2)·180°, exterior 360°",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · polygons",
  hero: `<span class="m"><span class="c1"><i>S</i></span> = (<span class="c3"><i>n</i></span> − 2) · 180° &nbsp;&nbsp;&nbsp; <span class="c2">Σ ext</span> = 360°</span>`,
  lede: `Cut a convex polygon into triangles from one corner and you always get two fewer triangles than sides. That fixes the total of its interior angles, and walking once around it always turns you through exactly 360°.`,
  plain: `<p>A <b>polygon</b> is a closed figure in a plane made of straight sides that meet only at their ends. Triangles have 3 sides, quadrilaterals 4, pentagons 5, hexagons 6, octagons 8, decagons 10. A polygon with <span class="m"><i>n</i></span> sides is an <b><i>n</i>-gon</b>.</p>
<p>Pick one corner of a convex polygon and draw every diagonal from it. The diagonals cannot go to the corner itself or to its two neighbours, so they split the polygon into <span class="m"><i>n</i> − 2</span> triangles. Each triangle's angles add to 180°, and together the triangles' angles make up exactly the polygon's corners. So the interior angles add to <span class="m">(<i>n</i> − 2) · 180°</span>: 360° for a quadrilateral, 540° for a pentagon, 720° for a hexagon.</p>
<p>Now walk around the outside. At each corner you turn by the <b>exterior angle</b>, the amount you swing from one side's direction to the next. After one lap you face the way you started, having turned one full circle. So the exterior angles of a convex polygon always add to 360°, whether it has 3 sides or 300.</p>
<p>A <b>regular polygon</b> has all sides equal and all angles equal. Its angles are the total shared equally: each exterior angle is <span class="m">360°/<i>n</i></span>, and each interior angle is <span class="m">180°</span> minus that.</p>`,
  formal: `<p>A <b>polygon</b> is a plane figure formed by three or more segments (its <b>sides</b>) such that each side intersects exactly two other sides, one at each endpoint, and no two sides with a common endpoint are collinear. A polygon is <b>convex</b> if no line that contains a side contains a point in the polygon's interior. A <b>diagonal</b> joins two non-consecutive vertices; an <span class="m"><i>n</i></span>-gon has <span class="m"><i>n</i>(<i>n</i> − 3)/2</span> diagonals.</p>
<div class="display"><b>Polygon Interior Angle-Sum Theorem.</b> The sum of the measures of the interior angles of a convex <i>n</i>-gon is (<i>n</i> − 2) · 180°.<br><b>Polygon Exterior Angle-Sum Theorem.</b> The sum of the measures of the exterior angles of a convex polygon, one angle at each vertex, is 360°.<br><b>Corollary.</b> Each interior angle of a regular <i>n</i>-gon measures <span class="fr"><span>(<i>n</i> − 2) · 180°</span><span><i>n</i></span></span>, and each exterior angle measures <span class="fr"><span>360°</span><span><i>n</i></span></span>.</div>
<p>Proof sketch: the <span class="m"><i>n</i> − 3</span> diagonals from one vertex divide a convex <span class="m"><i>n</i></span>-gon into <span class="m"><i>n</i> − 2</span> triangles whose angles exactly fill the polygon's angles (Angle Addition Postulate), and each triangle contributes 180° (Triangle Angle-Sum Theorem). At each vertex an interior angle and its exterior angle form a linear pair, so the <span class="m"><i>n</i></span> pairs total <span class="m"><i>n</i> · 180°</span>; subtracting the interior sum leaves <span class="m"><i>n</i> · 180° − (<i>n</i> − 2) · 180° = 360°</span>. The interior-sum formula holds for every simple polygon, convex or not, but the one-vertex triangulation proof needs convexity.</p>`,
  legend: [
    { c: "c3", sym: `<i>n</i>`, name: "Number of sides", desc: "Also the number of vertices and of interior angles. A polygon needs <span class=\"m\"><i>n</i> ≥ 3</span>." },
    { c: "c4", sym: `<i>n</i> − 2`, name: "Triangles", desc: "The diagonals from one vertex cut a convex <span class=\"m\"><i>n</i></span>-gon into this many triangles." },
    { c: "c1", sym: `<i>S</i>`, name: "Interior angle sum", desc: "<span class=\"m\"><i>S</i> = (<i>n</i> − 2) · 180°</span>, the triangles' 180° each added up." },
    { c: "c2", sym: `Σ ext`, name: "Exterior angle sum", desc: "One exterior angle at each vertex of a convex polygon. Always 360°, one full turn." }
  ],
  steps: { title: "How to find polygon angle measures", items: [
    `Count the sides <span class="m"><i>n</i></span>. Check that the polygon is convex before using the exterior-angle sum.`,
    `Interior angle sum: <span class="m"><i>S</i> = (<i>n</i> − 2) · 180°</span>.`,
    `If the polygon is regular, divide: each interior angle is <span class="m"><i>S</i>/<i>n</i></span> and each exterior angle is <span class="m">360°/<i>n</i></span>. They form a linear pair, so they add to 180°.`,
    `If the angles are given as expressions, set their total equal to <span class="m"><i>S</i></span> and solve, then check each angle is between 0° and 180° (convex).`,
    `To find <span class="m"><i>n</i></span> from a regular polygon's angle, find the exterior angle <span class="m"><i>e</i> = 180° − interior</span> and compute <span class="m"><i>n</i> = 360°/<i>e</i></span>. If that is not a whole number at least 3, no such regular polygon exists.`
  ] },
  example: {
    prompt: `A carpenter is framing the floor of a gazebo as a regular octagon, joining eight equal boards end to end with mitre joints. Find each interior angle of the octagon and the angle to set on the mitre saw, measured from a square (90°) cut.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>n</i> = 8</span> &nbsp;→&nbsp; <span class="c4">8 − 2 = 6</span> triangles</span>`, note: "Diagonals from one corner split the octagon into n − 2 triangles." },
      { math: `<span class="m"><span class="c1"><i>S</i></span> = (8 − 2) · 180° = <span class="c1">1080°</span></span>`, note: "Polygon Interior Angle-Sum Theorem." },
      { math: `<span class="m">1080° ÷ 8 = 135°</span>`, note: "Regular: all eight interior angles are equal." },
      { math: `<span class="m c2">180° − 135° = 45° = 360° ÷ 8</span>`, note: "Each exterior angle, found two ways: linear pair, and Exterior Angle-Sum Theorem." },
      { math: `<span class="m">45° ÷ 2 = 22.5°</span>`, note: "Each joint turns the frame 45°, shared equally by the two board ends, so each end is cut 22.5° off square." },
      { math: `<span class="m">8 · 45° = 360° ✓ &nbsp;&nbsp; 2 · (90° − 22.5°) = 135° ✓</span>`, note: "The eight turns make one full lap, and each board end meets the joint at 67.5°, so two ends make the 135° corner." }
    ],
    answer: `Each interior angle is <span class="m">135°</span>, and each board end is mitred at <span class="m">22.5°</span>.`
  },
  why: `<p>Polygon angle sums decide whether pieces fit. Tiles, frames, gears, honeycomb panels and nuts all depend on angles that close up exactly: regular hexagons tile a floor because three 120° angles make 360°, while regular pentagons (108° each) leave gaps. The exterior-angle sum is how a robot, a drone or a turtle-graphics program knows it has driven a closed loop: its total turning is 360°.</p>
<p>The triangulation idea behind the proof is used again and again: areas of polygons, surveying a plot from one corner, and the triangle meshes that every computer-graphics model is built from.</p>`,
  careers: [
    { role: "Carpenter", use: "Sets a mitre saw to 180°/n for each joint of an n-sided frame, such as 22.5° for an octagonal gazebo or 30° for a hexagonal planter." },
    { role: "Tile and flooring installer", use: "Checks that the angles meeting at each point of a tile pattern total 360° so the layout has no gaps." },
    { role: "Mechanical engineer", use: "Designs hexagonal nuts and bolt heads with 120° interior angles so a six-point wrench grips every face." },
    { role: "Robotics programmer", use: "Programs a robot to drive a closed polygonal path by making its turns add up to 360°." },
    { role: "Architect", use: "Lays out polygonal rooms, bay windows and towers, computing each wall angle from the interior angle sum." },
    { role: "3D modeller", use: "Splits polygonal faces into triangles for rendering, using the n − 2 triangle count of a convex face." }
  ],
  life: [
    "Cutting the corners of a hexagonal or octagonal picture frame",
    "Laying out a stop-sign-shaped garden bed",
    "Seeing why hexagon tiles fit together and pentagon tiles do not",
    "Walking around a block and noticing you have turned one full circle",
    "Folding paper into a regular polygon for a craft project"
  ],
  fields: [
    { name: "Architecture", use: "Polygonal plans and vaults are drawn from interior and exterior angle measures." },
    { name: "Crystallography", use: "Only regular polygons whose interior angle divides 360° (triangle, square, hexagon) tile the plane alone, matching the 3-, 4- and 6-fold symmetries allowed in crystal lattices." },
    { name: "Computer graphics", use: "Convex polygons are triangulated into n − 2 triangles before they are drawn." },
    { name: "Surveying", use: "A closed traverse is checked by confirming its measured interior angles total (n − 2)·180°." }
  ],
  prereqWhy: {
    "g-triangle-angles": "The polygon formula is built from triangles whose angles total 180°, and an interior angle with its exterior angle forms a linear pair, as in the Exterior Angle Theorem."
  },
  unlocksWhy: {
    "g-quadrilaterals": "A quadrilateral's angles total 360°, which is why a parallelogram's consecutive angles are supplementary and a rectangle's four right angles fit.",
    "g-similarity": "Similar polygons have equal corresponding angles, and the angle sums show which angle sets are possible for each n.",
    "g-circles": "A regular n-gon inscribed in a circle has central angles of 360°/n, the same as its exterior angles.",
    "g-solids": "The faces of polyhedra are polygons, and at each vertex of a convex polyhedron the face angles total less than 360°, which limits the regular solids to five."
  },
  beyond: [
    { field: "Trigonometry", why: "Regular polygon problems (apothem, side, perimeter) are solved with the central angle 360°/n and right-triangle trig." },
    { field: "Calculus I", why: "Archimedes bounded π with inscribed and circumscribed regular polygons, an early limit argument that calculus makes precise." },
    { field: "Discrete Mathematics", why: "Triangulations of polygons are counted by the Catalan numbers and appear in graph theory." },
    { field: "Computer Science", why: "Polygon triangulation and turning-angle tests are standard algorithms in computational geometry." }
  ],
  mistakes: [
    { wrong: `Interior angle sum of a hexagon is <span class="m">6 · 180° = 1080°</span>.`, fix: `A hexagon splits into <span class="m">6 − 2 = 4</span> triangles, so the sum is <span class="m">4 · 180° = 720°</span>.` },
    { wrong: `The exterior angles of an octagon add to more than those of a triangle.`, fix: `For every convex polygon the exterior angles, one at each vertex, total <span class="m">360°</span>. Only each individual angle shrinks as <span class="m"><i>n</i></span> grows.` },
    { wrong: `Dividing the interior sum by <span class="m"><i>n</i></span> to get each angle of an irregular pentagon.`, fix: `Dividing gives each angle only when the polygon is regular (equiangular). An irregular pentagon's angles total 540° but can differ.` },
    { wrong: `A regular polygon with interior angles of 130° has <span class="m">360/130 ≈ 2.8</span> sides.`, fix: `Divide 360° by the exterior angle, not the interior one: <span class="m">180° − 130° = 50°</span>, and <span class="m">360/50 = 7.2</span> is not a whole number, so no such regular polygon exists.` }
  ],
  practice: [
    { q: `Find the interior angle sum of a convex decagon and the measure of each interior angle of a regular decagon.`, a: `<span class="m">(10 − 2) · 180° = 1440°</span>. Each angle of a regular decagon: <span class="m">1440° ÷ 10 = 144°</span>.` },
    { q: `Each interior angle of a regular polygon measures 156°. How many sides does it have?`, a: `Exterior angle <span class="m">180° − 156° = 24°</span>, so <span class="m"><i>n</i> = 360° ÷ 24° = 15</span>. Check: <span class="m">(15 − 2) · 180° ÷ 15 = 156°</span> ✓.` },
    { q: `Is there a regular polygon whose interior angles each measure 130°?`, a: `No. The exterior angle would be <span class="m">50°</span>, and <span class="m">360° ÷ 50° = 7.2</span> is not a whole number, so no regular polygon has that angle.` },
    { q: `The interior angles of a convex pentagon measure <span class="m"><i>x</i>°</span>, <span class="m">(<i>x</i> + 20)°</span>, <span class="m">(<i>x</i> + 40)°</span>, <span class="m">(<i>x</i> + 60)°</span> and <span class="m">(<i>x</i> + 80)°</span>. Find each angle.`, a: `The sum is <span class="m">(5 − 2) · 180° = 540°</span>, so <span class="m">5<i>x</i> + 200 = 540</span> and <span class="m"><i>x</i> = 68</span>. The angles are 68°, 88°, 108°, 128° and 148°, all less than 180°, as a convex pentagon needs.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE), Book I Proposition 32, proves that a triangle's angles total two right angles. Proclus, in his fifth-century commentary on Book I, extends it to rectilinear figures: their interior angles total twice as many right angles as the figure has sides, less four, and their exterior angles total four right angles.`
};
