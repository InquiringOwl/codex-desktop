window.ARITH = window.ARITH || {};

ARITH["pa-coordinate"] = {
  title: "The Coordinate Plane",
  short: "Locating points with ordered pairs (x, y)",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 3,
  voice: "mixed",
  eyebrow: "Graphing · the rectangular coordinate system",
  hero: `<span class="m"><span class="c1"><i>P</i></span> = (<span class="c2"><i>x</i></span>, <span class="c3"><i>y</i></span>)</span>`,
  lede: `Two number lines crossing at right angles turn a flat sheet into a map. Every point <span class="m c1"><i>P</i></span> has an address: how far across, <span class="m c2"><i>x</i></span>, and how far up or down, <span class="m c3"><i>y</i></span>.`,
  plain: `<p>Think of a city laid out in a grid of streets. To tell someone where the library is, you might say "4 blocks east, 2 blocks north" of the town square. The coordinate plane works the same way. The town square is the <b>origin</b>, and you always give the east-west move first, then the north-south move.</p>
<p>The horizontal number line is the <b><i>x</i>-axis</b> and the vertical one is the <b><i>y</i>-axis</b>. A point is named by an <b>ordered pair</b> <span class="m">(<span class="c2"><i>x</i></span>, <span class="c3"><i>y</i></span>)</span>. Positive <span class="m c2"><i>x</i></span> means right, negative means left. Positive <span class="m c3"><i>y</i></span> means up, negative means down.</p>
<p>The order matters. <span class="m">(4, 2)</span> and <span class="m">(2, 4)</span> are different points. The two axes also split the plane into four regions called <b>quadrants</b>, numbered I to IV counterclockwise starting at the upper right.</p>`,
  formal: `<p>The <b>rectangular (Cartesian) coordinate system</b> consists of a horizontal real number line, the <i>x</i>-axis, and a vertical real number line, the <i>y</i>-axis, that intersect at their zero points, the <b>origin</b> <span class="m">(0, 0)</span>. Each point <span class="m"><i>P</i></span> in the plane corresponds to exactly one <b>ordered pair</b> <span class="m">(<i>x</i>, <i>y</i>)</span> of real numbers: <span class="m"><i>x</i></span> is the <b>x-coordinate</b> (horizontal position) and <span class="m"><i>y</i></span> is the <b>y-coordinate</b> (vertical position).</p>
<div class="display"><span class="c4">I</span>: <i>x</i> &gt; 0, <i>y</i> &gt; 0 &nbsp;&nbsp; <span class="c4">II</span>: <i>x</i> &lt; 0, <i>y</i> &gt; 0 &nbsp;&nbsp; <span class="c4">III</span>: <i>x</i> &lt; 0, <i>y</i> &lt; 0 &nbsp;&nbsp; <span class="c4">IV</span>: <i>x</i> &gt; 0, <i>y</i> &lt; 0</div>
<p>Points with <span class="m"><i>y</i> = 0</span> lie on the <i>x</i>-axis and points with <span class="m"><i>x</i> = 0</span> lie on the <i>y</i>-axis; these belong to no quadrant. Two points on the same horizontal line are <span class="m">|<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>|</span> units apart, and two points on the same vertical line are <span class="m">|<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>|</span> units apart.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "x-coordinate", desc: "Horizontal position: how far right (positive) or left (negative) of the origin." },
    { c: "c3", sym: `<i>y</i>`, name: "y-coordinate", desc: "Vertical position: how far up (positive) or down (negative) from the origin." },
    { c: "c1", sym: `(<i>x</i>, <i>y</i>)`, name: "Point", desc: "The ordered pair that names one exact location. The x-coordinate always comes first." },
    { c: "c4", sym: `I, II, III, IV`, name: "Quadrant", desc: "One of the four regions cut out by the axes, numbered counterclockwise from the upper right." }
  ],
  steps: { title: "How to plot a point (x, y)", items: [
    `Start at the origin <span class="m">(0, 0)</span>.`,
    `Move along the <i>x</i>-axis by <span class="m c2"><i>x</i></span>: right if positive, left if negative, stay put if 0.`,
    `From there, move parallel to the <i>y</i>-axis by <span class="m c3"><i>y</i></span>: up if positive, down if negative.`,
    `Mark the point and label it with its ordered pair.`,
    `Name its quadrant from the signs of the coordinates, or say which axis it lies on if a coordinate is 0.`
  ] },
  example: {
    prompt: `On a city map, each grid unit is one block, with east and north positive. Your home is at <span class="m">(−3, 2)</span>, the library at <span class="m">(4, 2)</span> and the school at <span class="m">(4, −5)</span>. You walk home → library → school along the streets. Which quadrants are home and school in, and how many blocks do you walk?`,
    lines: [
      { math: `<span class="m">(<span class="c2">−3</span>, <span class="c3">2</span>) ∈ <span class="c4">II</span>, &nbsp;(<span class="c2">4</span>, <span class="c3">−5</span>) ∈ <span class="c4">IV</span></span>`, note: "Home has x negative and y positive. School has x positive and y negative." },
      { math: `<span class="m">|4 − (−3)| = 7</span>`, note: "Home and library share y = 2, so the walk is straight east. Distance is the change in x." },
      { math: `<span class="m">|−5 − 2| = 7</span>`, note: "Library and school share x = 4, so the walk is straight south. Distance is the change in y." },
      { math: `<span class="m">7 + 7 = 14</span>`, note: "Add the two legs." },
      { math: `<span class="m">−3 + 7 = 4, &nbsp;2 − 7 = −5</span>`, note: "Check: 7 blocks east from x = −3 reaches x = 4, and 7 blocks south from y = 2 reaches y = −5." }
    ],
    answer: `Home is in Quadrant II, the school is in Quadrant IV, and the walk is <span class="m">14</span> blocks.`
  },
  why: `<p>Coordinates are how we describe location. Maps, GPS (latitude and longitude), seating charts, spreadsheets (column and row), video-game screens and computer graphics all name positions with an ordered pair of numbers.</p>
<p>In algebra the coordinate plane is where equations become pictures. Every graph of a line, parabola or data set is a set of points <span class="m">(<i>x</i>, <i>y</i>)</span>, so reading and plotting coordinates is the entry point to functions and graphing.</p>`,
  careers: [
    { role: "Surveyor", use: "Records property corners as coordinates in a grid system and computes boundary lengths from them." },
    { role: "Game developer", use: "Positions sprites on the screen with x and y pixel coordinates, where y often increases downward." },
    { role: "CNC machinist", use: "Programs a cutting tool with G-code moves to X and Y coordinates measured from a chosen origin on the part." },
    { role: "GIS analyst", use: "Places features such as roads and wells on digital maps using coordinate pairs." },
    { role: "Data analyst", use: "Plots paired data as points on a scatter plot to look for patterns." }
  ],
  life: [
    "Finding a square on a map or chessboard from its letter and number",
    "Reading latitude and longitude from a phone's map app",
    "Locating a cell in a spreadsheet by column and row",
    "Following directions such as 3 blocks east and 2 blocks north"
  ],
  fields: [
    { name: "Geography", use: "Latitude and longitude form a coordinate system for positions on Earth." },
    { name: "Computer graphics", use: "Every pixel and shape on a screen is located by coordinates." },
    { name: "Physics", use: "Positions and motion are described by coordinates relative to a chosen origin." }
  ],
  prereqWhy: {
    "integers": "Points left of or below the origin have negative coordinates, and distances across an axis use integer subtraction.",
    "number-line": "Each axis is a number line, so plotting a coordinate is locating a number on a number line."
  },
  unlocksWhy: {
    "pa-relations": "A relation is a set of ordered pairs, and its graph is those points plotted in the coordinate plane."
  },
  beyond: [
    { field: "Algebra I", why: "Graphing lines, systems of equations and quadratics all take place in the coordinate plane." },
    { field: "Geometry", why: "Coordinate geometry uses the distance and midpoint formulas to prove facts about shapes." },
    { field: "Linear Algebra", why: "Ordered pairs generalise to vectors with any number of coordinates." },
    { field: "Physics", why: "Motion is analysed by splitting position and velocity into x and y components." }
  ],
  mistakes: [
    { wrong: `Plotting <span class="m">(2, 5)</span> by going up 2 and right 5.`, fix: `The first coordinate is horizontal. Go right 2, then up 5.` },
    { wrong: `Saying <span class="m">(0, −4)</span> is in Quadrant III or IV.`, fix: `A point with a zero coordinate lies on an axis. <span class="m">(0, −4)</span> is on the <i>y</i>-axis and belongs to no quadrant.` },
    { wrong: `Numbering the quadrants clockwise, so the lower right is II.`, fix: `Quadrants go counterclockwise from the upper right: I upper right, II upper left, III lower left, IV lower right.` }
  ],
  practice: [
    { q: `In which quadrant is <span class="m">(−4, 7)</span>?`, a: `x is negative and y is positive, so Quadrant II.` },
    { q: `Describe where <span class="m">(0, −3)</span> is.`, a: `On the <i>y</i>-axis, 3 units below the origin. It is in no quadrant.` },
    { q: `A rectangle has vertices <span class="m">(−2, 1)</span>, <span class="m">(5, 1)</span>, <span class="m">(5, −3)</span> and <span class="m">(−2, −3)</span>. Find its perimeter and area in square units.`, a: `Width <span class="m">|5 − (−2)| = 7</span>, height <span class="m">|1 − (−3)| = 4</span>. Perimeter <span class="m">2(7 + 4) = 22</span> units, area <span class="m">7 × 4 = 28</span> square units.` },
    { q: `Reflect <span class="m">(3, −5)</span> across the <i>x</i>-axis, across the <i>y</i>-axis, and through the origin. Give each image and its quadrant.`, a: `Across the <i>x</i>-axis: <span class="m">(3, 5)</span>, Quadrant I. Across the <i>y</i>-axis: <span class="m">(−3, −5)</span>, Quadrant III. Through the origin: <span class="m">(−3, 5)</span>, Quadrant II.` }
  ],
  origin: `The idea of describing points by coordinates so that curves can be studied with algebra was published by René Descartes in <i>La Géométrie</i> (1637) and developed independently by Pierre de Fermat at about the same time, which is why the system is called Cartesian. The modern picture of two perpendicular axes with negative coordinates on both became standard later.`
};
