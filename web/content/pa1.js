window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
ARITH["pa-variables"] = {
  title: "Variables & Algebraic Expressions",
  short: "Letters that stand for numbers, built into expressions",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Algebra begins · variables, terms and coefficients",
  hero: `<span class="m"><span class="c3">3</span><span class="c2"><i>x</i></span> + <span class="c4">2</span></span>`,
  lede: `A <span class="m c2">variable</span> is a letter that stands for a number. An expression like <span class="m"><span class="c3">3</span><span class="c2"><i>x</i></span> + <span class="c4">2</span></span> is a recipe: once you know <span class="m c2"><i>x</i></span>, you know its <span class="m c1">value</span>.`,
  plain: `<p>Picture 3 cups and 2 loose counters on a table. Each cup holds the same number of counters, but you cannot see inside. Call that hidden number <span class="m c2"><i>x</i></span>. The total number of counters is "3 cups of <span class="m"><i>x</i></span>, plus 2", which we write <span class="m"><span class="c3">3</span><span class="c2"><i>x</i></span> + <span class="c4">2</span></span>.</p>
<p>The letter is a <b>variable</b> because its value can change. If each cup holds 5 counters, the total is <span class="m">3 × 5 + 2 = 17</span>. If each cup holds 10, the total is 32. The expression stays the same. Only the number inside the cups changes.</p>
<p>The pieces have names. <span class="m">3<i>x</i></span> and <span class="m">2</span> are <b>terms</b>, the parts joined by + or −. The 3 in front of <span class="m"><i>x</i></span> is the <b>coefficient</b>: it says how many <span class="m"><i>x</i></span>'s there are. The 2 on its own is the <b>constant</b>, because it never changes.</p>`,
  formal: `<p>A <b>variable</b> is a symbol, usually a letter, that represents a number from some set (in this course, a real number). A <b>constant</b> is a symbol whose value is fixed. An <b>algebraic expression</b> is a combination of variables, constants and operation symbols (+, −, ×, ÷, exponents, grouping symbols) that names a number once values are assigned to the variables. It contains no equals sign or inequality symbol.</p>
<div class="display"><span class="c3">4</span><span class="c2"><i>x</i></span><sup>2</sup> − <span class="c2"><i>x</i></span> + <span class="c4">7</span> &nbsp;<span class="dim">has terms 4<i>x</i><sup>2</sup>, −<i>x</i>, 7; coefficients 4, −1; constant term 7</span></div>
<p>The <b>terms</b> of an expression are the parts added together; a subtraction <span class="m"><i>a</i> − <i>b</i></span> is read as <span class="m"><i>a</i> + (−<i>b</i>)</span>, so the sign belongs to the term. The <b>coefficient</b> of a term is its numerical factor; <span class="m"><i>x</i></span> has coefficient 1 and <span class="m">−<i>x</i></span> has coefficient −1. Juxtaposition means multiplication: <span class="m">3<i>x</i> = 3 · <i>x</i></span> and <span class="m"><i>ab</i> = <i>a</i> · <i>b</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The unknown or changing number. In the lab it is the number of counters in each cup." },
    { c: "c3", sym: `3`, name: "Coefficient", desc: "The number multiplying the variable. It counts how many cups there are." },
    { c: "c4", sym: `2`, name: "Constant", desc: "A term with no variable. Its value never changes: the loose counters." },
    { c: "c1", sym: `3<i>x</i> + 2`, name: "Value of the expression", desc: "The single number the expression equals once x is known: the total count of counters." }
  ],
  steps: { title: "How to read an algebraic expression", items: [
    `Rewrite any subtraction as adding a negative, so <span class="m">5<i>y</i> − 8</span> becomes <span class="m">5<i>y</i> + (−8)</span>.`,
    `Split the expression at each + sign that is not inside parentheses. Each piece is a <b>term</b>.`,
    `For each term, the number in front is the <b>coefficient</b>. A bare <span class="m"><i>y</i></span> has coefficient 1; <span class="m">−<i>y</i></span> has coefficient −1.`,
    `A term with no variable is a <b>constant</b>.`,
    `Check that there is no = or &lt; sign. If there is, you have an equation or inequality, not an expression.`
  ] },
  example: {
    prompt: `A phone plan charges a one-time $40 activation fee plus $15 per month. Write an expression for the total cost after <span class="m"><i>m</i></span> months, name its parts, and find the cost for one year.`,
    lines: [
      { math: `<span class="m"><span class="c3">15</span><span class="c2"><i>m</i></span> + <span class="c4">40</span></span>`, note: "Each month adds 15 dollars, so m months add 15 × m. The fee is added once." },
      { math: `<span class="m">terms: 15<i>m</i>, 40</span>`, note: "The variable is m, the coefficient is 15 (dollars per month), and the constant is 40 (dollars)." },
      { math: `<span class="m"><i>m</i> = 12</span>`, note: "One year is 12 months." },
      { math: `<span class="m">15(12) + 40 = 180 + 40</span>`, note: "Replace m by 12. Multiply before adding." },
      { math: `<span class="m c1">220</span>`, note: "The value of the expression when m = 12." },
      { math: `<span class="m">40 + 12 × 15 = 220</span>`, note: "Check: the fee plus twelve monthly payments gives the same total." }
    ],
    answer: `The cost is <span class="m">15<i>m</i> + 40</span> dollars, which is <span class="m">$220</span> for one year.`
  },
  why: `<p>Variables let you write one rule that covers every case. A pay rate, a phone plan, a recipe or a tax rule is really an expression: plug in the hours, months, servings or income and the rule gives the answer. Spreadsheets work the same way, with a cell name playing the role of the variable.</p>
<p>Every later part of algebra is built from expressions. Equations set two expressions equal, functions are expressions with an input, and formulas in science are expressions with named quantities.</p>`,
  careers: [
    { role: "Accountant", use: "Builds spreadsheet formulas such as =B2*0.0765 where the cell reference acts as a variable for each employee's wages." },
    { role: "Electrician", use: "Quotes jobs with an expression like a flat call-out fee plus an hourly rate times the hours worked." },
    { role: "Software developer", use: "Stores changing values in named variables and writes expressions that compute new values from them." },
    { role: "Pharmacist", use: "Applies dose rules written as expressions in the patient's weight, such as 15 mg times weight in kilograms." },
    { role: "Sales representative", use: "Estimates pay from an expression such as base salary plus a commission rate times total sales." }
  ],
  life: [
    "Working out a monthly phone or streaming bill with a setup fee",
    "Reading a spreadsheet formula that uses cell names",
    "Estimating a taxi fare from a base charge plus a per-mile rate",
    "Scaling a recipe where each serving needs the same amounts"
  ],
  fields: [
    { name: "Computer science", use: "Programs are built from variables and expressions that the computer evaluates." },
    { name: "Physics", use: "Laws are written as expressions in named quantities, such as the distance vt travelled at speed v for time t." },
    { name: "Business", use: "Cost, revenue and profit are modelled as expressions in the number of units sold." }
  ],
  prereqWhy: {
    "order-ops": "An expression like 3x + 2 means multiply first and then add, so you must know the order of operations to read it correctly.",
    "properties": "Rewriting subtraction as adding a negative and treating 3x as 3 · x rely on the laws of arithmetic."
  },
  unlocksWhy: {
    "pa-translate": "Turning a phrase like \"5 more than twice a number\" into 2n + 5 needs a variable and an expression to write it with.",
    "pa-like-terms": "Combining like terms means recognising terms and coefficients inside an expression.",
    "pa-evaluate": "Evaluating an expression means replacing its variables with numbers and computing its value.",
    "pa-exponent-laws": "Exponent laws describe how powers of a variable, such as x² and x³, combine inside expressions."
  },
  beyond: [
    { field: "Algebra I", why: "Polynomials, rational expressions and radical expressions are all algebraic expressions with more structure." },
    { field: "Statistics", why: "Formulas such as the sample mean are expressions in variables that stand for data values." },
    { field: "Computer programming", why: "Variables and expressions are the basic building blocks of every program." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m">3<i>x</i></span> with <span class="m"><i>x</i> = 4</span> as 34.`, fix: `Juxtaposition means multiply: <span class="m">3<i>x</i> = 3 · 4 = 12</span>.` },
    { wrong: `Saying the coefficient of <span class="m"><i>x</i></span> in <span class="m">5 − <i>x</i></span> is 1.`, fix: `The term is <span class="m">−<i>x</i></span>, so the coefficient is <span class="m">−1</span>. The sign belongs to the term.` },
    { wrong: `Calling <span class="m">2<i>x</i> + 1 = 9</span> an expression.`, fix: `It has an equals sign, so it is an <b>equation</b>. The expressions are <span class="m">2<i>x</i> + 1</span> and <span class="m">9</span>.` }
  ],
  practice: [
    { q: `Find the value of <span class="m">5<i>n</i> + 3</span> when <span class="m"><i>n</i> = 4</span>.`, a: `<span class="m">5(4) + 3 = 20 + 3 = 23</span>.` },
    { q: `List the terms, the coefficients and the constant of <span class="m">4<i>x</i><sup>2</sup> − <i>x</i> + 7</span>.`, a: `Terms <span class="m">4<i>x</i><sup>2</sup></span>, <span class="m">−<i>x</i></span>, <span class="m">7</span>. Coefficients 4 and −1. Constant 7.` },
    { q: `Which are expressions and which are equations: (a) <span class="m">6<i>y</i> − 2</span> (b) <span class="m">6<i>y</i> − 2 = 10</span> (c) <span class="m"><i>ab</i> + <i>c</i></span>?`, a: `(a) and (c) are expressions. (b) is an equation because it contains an equals sign.` },
    { q: `A gym charges a $25 sign-up fee plus $30 per month. Write an expression for the cost of <span class="m"><i>m</i></span> months and find the cost of 8 months.`, a: `<span class="m">30<i>m</i> + 25</span>. For <span class="m"><i>m</i> = 8</span>: <span class="m">30(8) + 25 = 240 + 25 = $265</span>.` }
  ],
  origin: `François Viète, in <i>In artem analyticem isagoge</i> (1591), was the first to use letters systematically for both unknown and known quantities, with vowels for unknowns and consonants for knowns. René Descartes, in <i>La Géométrie</i> (1637), set the modern habit of using <i>x</i>, <i>y</i>, <i>z</i> for unknowns and <i>a</i>, <i>b</i>, <i>c</i> for known values.`
};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["pa-translate"] = {
  title: "Translating Words into Algebra",
  short: "Turning verbal phrases into expressions and equations",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Algebraic language · phrases to symbols",
  hero: `<span class="m">"<span class="c3">5</span> <span class="c1">less than</span> a <span class="c2">number</span>" &nbsp;→&nbsp; <span class="c2"><i>n</i></span> − <span class="c3">5</span></span>`,
  lede: `Word problems are written in English. Algebra is written in symbols. Translating means matching each <span class="m c1">key phrase</span> to an operation and each unknown to a <span class="m c2">variable</span>.`,
  plain: `<p>Algebra is a short language. "The sum of a number and 8" becomes <span class="m"><i>n</i> + 8</span>. "Three times a number" becomes <span class="m">3<i>n</i></span>. Once a sentence is in symbols, you can work with it using the rules you already know.</p>
<p>Most phrases have a keyword that tells you the operation. "Sum", "more than" and "increased by" mean add. "Difference", "less than" and "decreased by" mean subtract. "Product", "times" and "twice" mean multiply. "Quotient" and "divided by" mean divide. The word "is" usually becomes an equals sign.</p>
<p>Watch the order. "5 less than a number" means start with the number and take away 5, so it is <span class="m"><i>n</i> − 5</span>, not <span class="m">5 − <i>n</i></span>. Test it with a real number: 5 less than 12 is 7, and <span class="m">12 − 5 = 7</span>.</p>`,
  formal: `<p>A <b>verbal expression</b> describes a quantity; it translates to an <b>algebraic expression</b>. A verbal sentence that states two quantities are equal (signalled by <i>is</i>, <i>equals</i>, <i>gives</i>, <i>results in</i>) translates to an <b>equation</b>. For numbers <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>:</p>
<div class="display">the sum of <i>a</i> and <i>b</i>: <i>a</i> + <i>b</i> &nbsp;&nbsp; the difference of <i>a</i> and <i>b</i>: <i>a</i> − <i>b</i><br><i>a</i> more than <i>b</i>: <i>b</i> + <i>a</i> &nbsp;&nbsp; <i>a</i> less than <i>b</i>: <i>b</i> − <i>a</i> <span class="dim">(order reverses)</span><br>the product of <i>a</i> and <i>b</i>: <i>ab</i> &nbsp;&nbsp; the quotient of <i>a</i> and <i>b</i>: <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> <span class="dim">(<i>b</i> ≠ 0)</span></div>
<p>Grouping words such as "the sum of … and …" or "the difference of … and …" create a single quantity, which must be put in parentheses when another operation acts on it: "twice the sum of <span class="m"><i>x</i></span> and 3" is <span class="m">2(<i>x</i> + 3)</span>, while "twice <span class="m"><i>x</i></span>, plus 3" is <span class="m">2<i>x</i> + 3</span>.</p>`,
  legend: [
    { c: "c1", sym: `less than`, name: "Key phrase", desc: "The word or phrase that names the operation, such as sum, product, less than or is." },
    { c: "c2", sym: `<i>n</i>`, name: "Variable", desc: "The letter chosen to stand for the unknown number. Say what it means, with units, before you write anything." },
    { c: "c3", sym: `5`, name: "Numbers", desc: "The known quantities stated in the words." }
  ],
  steps: { title: "How to translate a phrase or sentence", items: [
    `Read the whole phrase. Decide what the unknown is and name it with a variable, for example "let <span class="m c2"><i>h</i></span> = hours worked".`,
    `Underline each <span class="c1">key phrase</span> and write its operation above it.`,
    `Watch for order-reversing phrases: "<i>a</i> less than <i>b</i>" is <span class="m"><i>b</i> − <i>a</i></span> and "subtracted from" works the same way.`,
    `Put parentheses around any "sum of", "difference of" or "quantity" that another operation acts on.`,
    `If the sentence contains "is" or "equals", put the = there and translate each side.`,
    `Test your expression with an easy number to see if it matches the words.`
  ] },
  example: {
    prompt: `A plumber charges a $65 service fee plus $90 for each hour of work. Translate "the bill is 65 dollars plus 90 dollars times the number of hours" into an expression for <span class="m"><i>h</i></span> hours, then find the bill for a 2.5-hour job.`,
    lines: [
      { math: `<span class="m">let <span class="c2"><i>h</i></span> = hours worked</span>`, note: "Name the unknown and its units." },
      { math: `<span class="m"><span class="c3">90</span> · <span class="c2"><i>h</i></span></span>`, note: "\"90 dollars times the number of hours\" is a product." },
      { math: `<span class="m"><span class="c3">65</span> + <span class="c3">90</span><span class="c2"><i>h</i></span></span>`, note: "\"plus\" joins the fee to the hourly charge." },
      { math: `<span class="m">65 + 90(2.5) = 65 + 225</span>`, note: "Replace h by 2.5 and multiply first." },
      { math: `<span class="m">290</span>`, note: "The bill in dollars." },
      { math: `<span class="m">2 × 90 + 0.5 × 90 + 65 = 180 + 45 + 65 = 290</span>`, note: "Check: two full hours, half an hour, and the fee." }
    ],
    answer: `The bill is <span class="m">65 + 90<i>h</i></span> dollars, and a 2.5-hour job costs <span class="m">$290</span>.`
  },
  why: `<p>Real problems arrive in words: a contract, a price list, a rule at work. Before any algebra can help, the words have to become symbols. Most errors in word problems happen at this step, usually by reversing the order of a subtraction or leaving out parentheses.</p>
<p>Translation is also the skill behind writing formulas in spreadsheets and code, where a business rule stated in a sentence must become an exact expression.</p>`,
  careers: [
    { role: "Paralegal", use: "Turns contract terms such as a late fee of 5% of the balance plus $25 into a calculation of the amount owed." },
    { role: "Payroll clerk", use: "Converts overtime rules like time-and-a-half for hours over 40 into a pay formula." },
    { role: "Programmer", use: "Translates written requirements into exact expressions in code, including the right order of operations." },
    { role: "Insurance agent", use: "Writes premium quotes from rules stated in words, such as a base rate plus a charge per driver." },
    { role: "Construction estimator", use: "Turns job specifications into material formulas, such as twice the length plus twice the width for trim." }
  ],
  life: [
    "Turning a taxi or delivery price list into a quick cost calculation",
    "Writing a spreadsheet formula for a budget rule",
    "Checking a store offer such as 3 dollars off twice the regular price",
    "Setting up a savings plan from a starting amount plus a monthly deposit"
  ],
  fields: [
    { name: "Business", use: "Pricing rules, commissions and fees are stated in words and must be written as formulas." },
    { name: "Computer science", use: "Specifications in plain language are translated into precise expressions and conditions." },
    { name: "Physics", use: "Problem statements are translated into equations relating the given and unknown quantities." }
  ],
  prereqWhy: {
    "pa-variables": "A translation needs a variable for the unknown and the vocabulary of terms, coefficients and expressions."
  },
  unlocksWhy: {
    "pa-word-problems": "Solving a word problem starts by translating the story into an equation in one variable."
  },
  beyond: [
    { field: "Algebra I", why: "Systems, mixture, motion and rate problems all begin by translating sentences into equations." },
    { field: "Calculus I", why: "Optimisation and related-rates problems require turning a described situation into a function or equation." },
    { field: "Economics", why: "Verbal assumptions about cost, demand and supply are turned into equations that can be analysed." }
  ],
  mistakes: [
    { wrong: `Writing "7 less than a number" as <span class="m">7 − <i>x</i></span>.`, fix: `"Less than" reverses order: <span class="m"><i>x</i> − 7</span>. Test with 10: 7 less than 10 is 3, and <span class="m">10 − 7 = 3</span>.` },
    { wrong: `Writing "twice the sum of a number and 4" as <span class="m">2<i>x</i> + 4</span>.`, fix: `The sum is one quantity, so use parentheses: <span class="m">2(<i>x</i> + 4)</span>.` },
    { wrong: `Writing "the quotient of 12 and a number" as <span class="m"><span class="fr"><span><i>x</i></span><span>12</span></span></span>.`, fix: `The first number named is the dividend: <span class="m"><span class="fr"><span>12</span><span><i>x</i></span></span></span>.` }
  ],
  practice: [
    { q: `Translate: "the sum of a number and 8".`, a: `<span class="m"><i>x</i> + 8</span>.` },
    { q: `Translate: "7 less than three times a number".`, a: `Three times a number is <span class="m">3<i>x</i></span>; take 7 away from it: <span class="m">3<i>x</i> − 7</span>.` },
    { q: `Translate: "the product of 4 and the difference of a number and 2".`, a: `The difference is one quantity: <span class="m">4(<i>x</i> − 2)</span>.` },
    { q: `Translate into an equation: "Twice a number, decreased by 5, is 17." Then check whether 11 is a solution.`, a: `<span class="m">2<i>x</i> − 5 = 17</span>. With <span class="m"><i>x</i> = 11</span>: <span class="m">2(11) − 5 = 22 − 5 = 17</span>, so yes, 11 is the solution.` }
  ],
  origin: `Early algebra was written entirely in words. Muhammad ibn Musa al-Khwarizmi's <i>al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala</i> (c. 820 CE), the book that gave algebra its name, states and solves every problem in sentences with no symbols at all. Symbolic notation replaced this "rhetorical" algebra gradually between the 15th and 17th centuries.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-like-terms"] = {
  title: "Like Terms & the Distributive Property",
  short: "Simplify expressions by distributing and combining",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Simplifying expressions · like terms and distribution",
  hero: `<span class="m">3(2<span class="c2"><i>x</i></span> + <span class="c1">4</span>) = 6<span class="c2"><i>x</i></span> + <span class="c1">12</span></span>`,
  lede: `The distributive property opens parentheses. Combining like terms collects <span class="m c2"><i>x</i></span>'s with <span class="m c2"><i>x</i></span>'s and <span class="m c1">numbers</span> with numbers. Together they put any linear expression in its simplest form.`,
  plain: `<p>Suppose a drawer holds 5 pencils and 3 erasers, and you add 2 more pencils. You now have 7 pencils and 3 erasers. You can add pencils to pencils, but you cannot turn pencils and erasers into one pile of "10 pencilerasers". Algebra works the same way: <span class="m">5<i>x</i> + 2<i>x</i> = 7<i>x</i></span>, but <span class="m">7<i>x</i> + 3</span> cannot be squeezed any further.</p>
<p>Terms that have exactly the same variable part are <b>like terms</b>. <span class="m">5<i>x</i></span> and <span class="m">−2<i>x</i></span> are like terms. <span class="m">5<i>x</i></span> and <span class="m">5<i>x</i><sup>2</sup></span> are not, because <span class="m"><i>x</i></span> and <span class="m"><i>x</i><sup>2</sup></span> are different kinds of thing, just as a length and an area are.</p>
<p>The <b>distributive property</b> gets rid of parentheses. <span class="m">3(2<i>x</i> + 4)</span> means three copies of <span class="m">2<i>x</i> + 4</span>. Three copies give 6 <span class="m"><i>x</i></span>'s and 12 ones, so <span class="m">3(2<i>x</i> + 4) = 6<i>x</i> + 12</span>. The number outside multiplies every term inside.</p>`,
  formal: `<p><b>Like terms</b> are terms whose variable factors are identical, including exponents (constants are like terms of each other). The <b>distributive property</b> holds for all real numbers <span class="m"><i>a</i>, <i>b</i>, <i>c</i></span>:</p>
<div class="display"><i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i> &nbsp;&nbsp; <i>a</i>(<i>b</i> − <i>c</i>) = <i>ab</i> − <i>ac</i> &nbsp;&nbsp; −(<i>b</i> − <i>c</i>) = −<i>b</i> + <i>c</i><br><span class="c2"><i>bx</i></span> + <span class="c2"><i>cx</i></span> = (<i>b</i> + <i>c</i>)<span class="c2"><i>x</i></span> <span class="dim">(combining like terms is the distributive property read right to left)</span></div>
<p>To <b>combine like terms</b>, add their coefficients and keep the variable part unchanged. An expression is <b>simplified</b> when it has no grouping symbols that can be removed and no two like terms; by convention, terms are written in descending order of degree with the constant last.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "x-tiles (variable terms)", desc: "Long tiles worth x each. Only x-terms combine with x-terms." },
    { c: "c1", sym: `1`, name: "Unit tiles (constants)", desc: "Small square tiles worth 1 each. Constants combine with constants." },
    { c: "c3", sym: `−<i>x</i>, −1`, name: "Negative tiles", desc: "Tiles worth −x or −1. A positive and a negative tile of the same kind cancel to zero." }
  ],
  steps: { title: "How to simplify a linear expression", items: [
    `Distribute any factor in front of parentheses to every term inside. A minus sign in front means multiply every term by −1.`,
    `Rewrite subtractions as adding negatives so every term carries its own sign.`,
    `Group like terms: all the <span class="m c2"><i>x</i></span>-terms together, all the <span class="m c1">constants</span> together.`,
    `Add the coefficients of each group. Keep the variable part the same.`,
    `Write the result with the variable term first and the constant last.`,
    `Check by substituting a value such as <span class="m"><i>x</i> = 2</span> into the original and the simplified form. They must agree.`
  ] },
  example: {
    prompt: `A rectangular garden is <span class="m"><i>x</i></span> metres long and 3 metres shorter than that in width. Write and simplify an expression for its perimeter, then find the perimeter when <span class="m"><i>x</i> = 10</span>.`,
    lines: [
      { math: `<span class="m">width = <span class="c2"><i>x</i></span> <span class="c3">− 3</span></span>`, note: "3 metres shorter than the length." },
      { math: `<span class="m">2<span class="c2"><i>x</i></span> + 2(<span class="c2"><i>x</i></span> <span class="c3">− 3</span>)</span>`, note: "Perimeter is two lengths plus two widths." },
      { math: `<span class="m">2<span class="c2"><i>x</i></span> + 2<span class="c2"><i>x</i></span> <span class="c3">− 6</span></span>`, note: "Distribute the 2 to both terms in the parentheses." },
      { math: `<span class="m">4<span class="c2"><i>x</i></span> <span class="c3">− 6</span></span>`, note: "Combine like terms: 2x + 2x = 4x." },
      { math: `<span class="m">4(10) − 6 = 34</span>`, note: "Substitute x = 10." },
      { math: `<span class="m">10 + 7 + 10 + 7 = 34</span>`, note: "Check: a 10 m by 7 m rectangle has perimeter 34 m." }
    ],
    answer: `The perimeter is <span class="m">4<i>x</i> − 6</span> metres, which is <span class="m">34</span> m when <span class="m"><i>x</i> = 10</span>.`
  },
  why: `<p>Simplifying makes an expression shorter and easier to use. A long cost formula with repeated pieces, such as several items at the same unit price, collapses into one clean expression. Mental math tricks like <span class="m">6 × 98 = 6(100 − 2) = 588</span> are the distributive property in action.</p>
<p>Almost every equation you solve later needs this step first. Before you can isolate <span class="m"><i>x</i></span>, you distribute and collect like terms so that each side has at most one <span class="m"><i>x</i></span>-term and one constant.</p>`,
  careers: [
    { role: "Carpenter", use: "Simplifies trim or framing totals such as 2(l + w) plus extra pieces into one expression before cutting stock." },
    { role: "Retail buyer", use: "Combines costs of several orders at the same unit price into one expression to compare suppliers." },
    { role: "Software engineer", use: "Refactors code by factoring out repeated terms, which is the distributive property applied to expressions." },
    { role: "Cashier", use: "Multiplies mentally with the distributive property, such as 4 × $2.99 = 4 × $3 − 4 × $0.01 = $11.96." },
    { role: "Engineer", use: "Simplifies load or cost expressions by collecting like terms before plugging in design values." }
  ],
  life: [
    "Multiplying 7 × 49 in your head as 7 × 50 − 7",
    "Totalling a shopping list with several items at the same price",
    "Working out the perimeter of a room for baseboard trim",
    "Splitting a group bill where everyone had the same meal plus a shared dish"
  ],
  fields: [
    { name: "Physics", use: "Expressions for forces or energies are simplified by collecting like terms before solving." },
    { name: "Accounting", use: "Totals built from repeated line items are simplified by grouping like costs." },
    { name: "Computer science", use: "Compilers simplify arithmetic expressions using the distributive and combining rules." }
  ],
  prereqWhy: {
    "pa-variables": "You must be able to identify terms, coefficients and constants before deciding which terms are alike.",
    "properties": "Combining like terms and removing parentheses are direct uses of the distributive, commutative and associative properties."
  },
  unlocksWhy: {
    "pa-both-sides": "Equations such as 3(x − 2) + x = 2x + 8 must be distributed and have like terms combined before the variable can be isolated."
  },
  beyond: [
    { field: "Algebra I", why: "Adding, subtracting and multiplying polynomials are like-term combination and repeated distribution." },
    { field: "Algebra II", why: "Simplifying rational and complex-number expressions relies on the same two moves." },
    { field: "Linear Algebra", why: "Linear combinations of vectors are combined by adding coefficients of like components." }
  ],
  mistakes: [
    { wrong: `<span class="m">3<i>x</i> + 2 = 5<i>x</i></span>`, fix: `<span class="m">3<i>x</i></span> and 2 are not like terms, so <span class="m">3<i>x</i> + 2</span> is already simplified.` },
    { wrong: `<span class="m">2(<i>x</i> + 4) = 2<i>x</i> + 4</span>`, fix: `The 2 multiplies every term inside: <span class="m">2(<i>x</i> + 4) = 2<i>x</i> + 8</span>.` },
    { wrong: `<span class="m">−(<i>x</i> − 3) = −<i>x</i> − 3</span>`, fix: `The minus sign is −1 times every term: <span class="m">−(<i>x</i> − 3) = −<i>x</i> + 3</span>.` },
    { wrong: `<span class="m">4<i>x</i><sup>2</sup> + 3<i>x</i> = 7<i>x</i><sup>3</sup></span>`, fix: `<span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>x</i></span> terms are unlike. The expression cannot be combined.` }
  ],
  practice: [
    { q: `Simplify <span class="m">7<i>y</i> + 3 − 2<i>y</i> + 8</span>.`, a: `<span class="m">(7 − 2)<i>y</i> + (3 + 8) = 5<i>y</i> + 11</span>.` },
    { q: `Simplify <span class="m">4(3<i>a</i> − 5)</span>.`, a: `<span class="m">12<i>a</i> − 20</span>.` },
    { q: `Simplify <span class="m">−2(<i>x</i> − 6) + 5<i>x</i></span>.`, a: `<span class="m">−2<i>x</i> + 12 + 5<i>x</i> = 3<i>x</i> + 12</span>.` },
    { q: `Simplify <span class="m">3(2<i>x</i><sup>2</sup> − <i>x</i> + 4) − (<i>x</i><sup>2</sup> − 5<i>x</i>) − 7</span>.`, a: `<span class="m">6<i>x</i><sup>2</sup> − 3<i>x</i> + 12 − <i>x</i><sup>2</sup> + 5<i>x</i> − 7 = 5<i>x</i><sup>2</sup> + 2<i>x</i> + 5</span>.` }
  ],
  origin: `The distributive law was used in geometric form long before symbols: Book II of Euclid's <i>Elements</i> (c. 300 BCE) proves it with rectangles, showing that a rectangle split into parts has the same area as the sum of the parts. The name "distributive" was introduced by François-Joseph Servois in 1814.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-evaluate"] = {
  title: "Evaluating Expressions",
  short: "Substitute numbers for variables, then compute",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Algebraic expressions · substitution",
  hero: `<span class="m"><span class="c2"><i>x</i></span><sup>2</sup> − 3<span class="c2"><i>x</i></span> &nbsp;at&nbsp; <span class="c2"><i>x</i></span> = <span class="c3">−2</span>: &nbsp;(<span class="c3">−2</span>)<sup>2</sup> − 3(<span class="c3">−2</span>) = <span class="c5">10</span></span>`,
  lede: `To evaluate an expression, replace each <span class="m c2">variable</span> with its <span class="m c3">value</span>, in parentheses, and follow the order of operations to a single <span class="m c5">result</span>.`,
  plain: `<p>An expression is like a machine with empty slots. <span class="m"><i>x</i><sup>2</sup> − 3<i>x</i></span> has two slots marked <span class="m"><i>x</i></span>. When someone tells you <span class="m"><i>x</i> = −2</span>, you drop −2 into every slot and work out the answer. That is called <b>evaluating</b> the expression.</p>
<p>Always put the number in parentheses when you substitute, especially if it is negative. <span class="m">(−2)<sup>2</sup></span> means <span class="m">(−2) × (−2) = 4</span>. Without the parentheses you might write <span class="m">−2<sup>2</sup></span>, which means <span class="m">−(2 × 2) = −4</span>. That one slip changes the answer.</p>
<p>After substituting, the variables are gone and you have an ordinary arithmetic problem. Do it in the usual order: grouping symbols, exponents, multiplication and division left to right, then addition and subtraction left to right.</p>`,
  formal: `<p>To <b>evaluate</b> an algebraic expression at given values of its variables, <b>substitute</b> each value for every occurrence of its variable, then simplify the resulting numerical expression using the order of operations. The result is the <b>value of the expression</b> at those values.</p>
<div class="display"><i>E</i>(<span class="c2"><i>x</i></span>) = <span class="c2"><i>x</i></span><sup>2</sup> − 3<span class="c2"><i>x</i></span>, &nbsp; <span class="c2"><i>x</i></span> = <span class="c3">−2</span><br>(<span class="c3">−2</span>)<sup>2</sup> − 3(<span class="c3">−2</span>) = 4 − (−6) = 4 + 6 = <span class="c5">10</span></div>
<p>Note that <span class="m">−<i>a</i><sup><i>n</i></sup> = −(<i>a</i><sup><i>n</i></sup>)</span>, because exponentiation takes precedence over negation; so <span class="m">−<i>x</i><sup>2</sup></span> at <span class="m"><i>x</i> = −3</span> is <span class="m">−(−3)<sup>2</sup> = −9</span>. An expression may be <b>undefined</b> at some values, for example <span class="m"><span class="fr"><span>5</span><span><i>x</i> − 1</span></span></span> at <span class="m"><i>x</i> = 1</span>, since division by zero is undefined.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The slot to be filled. Every occurrence gets the same value." },
    { c: "c3", sym: `−2`, name: "Substituted value", desc: "The number put in place of the variable, always inside parentheses." },
    { c: "c1", sym: `×, −`, name: "Current operation", desc: "The next operation to carry out, chosen by the order of operations." },
    { c: "c5", sym: `10`, name: "Result", desc: "The single number the expression equals at that value." }
  ],
  steps: { title: "How to evaluate an expression", items: [
    `Write the expression again with empty parentheses in place of each variable.`,
    `Fill each pair of parentheses with the given <span class="m c3">value</span>.`,
    `Work inside grouping symbols first, including a numerator or denominator treated as a group.`,
    `Evaluate powers, remembering that <span class="m">(−3)<sup>2</sup> = 9</span> but <span class="m">−3<sup>2</sup> = −9</span>.`,
    `Multiply and divide from left to right, then add and subtract from left to right.`,
    `Check that the answer is reasonable, for example by estimating.`
  ] },
  example: {
    prompt: `A weather site gives a winter morning temperature of −15 °C. The conversion formula is <span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span><i>C</i> + 32</span>. What is the temperature in degrees Fahrenheit?`,
    lines: [
      { math: `<span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span>(<span class="c3">−15</span>) + 32</span>`, note: "Substitute C = −15 in parentheses." },
      { math: `<span class="m"><span class="fr"><span>9</span><span>5</span></span>(−15) = 9 × (−3) = −27</span>`, note: "Multiply first: −15 ÷ 5 = −3, then 9 × (−3)." },
      { math: `<span class="m">−27 + 32 = <span class="c5">5</span></span>`, note: "Then add." },
      { math: `<span class="m"><i>C</i> = <span class="fr"><span>5</span><span>9</span></span>(5 − 32) = <span class="fr"><span>5</span><span>9</span></span>(−27) = −15</span>`, note: "Check with the reverse formula C = 5/9 (F − 32): it returns −15." }
    ],
    answer: `−15 °C is <span class="m">5</span> °F.`
  },
  why: `<p>Formulas are only useful when you can plug numbers into them. Converting temperatures, working out a loan payment, finding a medication dose, estimating a stopping distance or checking a spreadsheet all come down to evaluating an expression correctly.</p>
<p>Evaluation is also how you check work in algebra. You test whether a number solves an equation by substituting it, and you build tables and graphs of functions by evaluating at many inputs.</p>`,
  careers: [
    { role: "Nurse", use: "Evaluates dose formulas such as dose = weight in kg × mg per kg to prepare a prescribed amount." },
    { role: "Electrician", use: "Substitutes measured values into P = VI or V = IR to find power or voltage in a circuit." },
    { role: "Meteorologist", use: "Evaluates wind-chill and heat-index formulas at measured temperatures and wind speeds." },
    { role: "Loan officer", use: "Plugs principal, rate and term into a payment formula to quote a monthly payment." },
    { role: "Civil engineer", use: "Evaluates load and stress formulas at design values to check that a beam is strong enough." }
  ],
  life: [
    "Converting a recipe's oven temperature between °C and °F",
    "Working out a taxi fare from a posted rate formula",
    "Finding the area of a room to buy flooring",
    "Checking a spreadsheet total by recomputing one row by hand"
  ],
  fields: [
    { name: "Physics", use: "Every calculation with a law such as d = vt or KE = ½mv² is an evaluation." },
    { name: "Chemistry", use: "Gas-law and concentration formulas are evaluated at measured values." },
    { name: "Finance", use: "Interest and payment formulas are evaluated to price loans and investments." }
  ],
  prereqWhy: {
    "pa-variables": "You need to know what a variable and an expression are before you can replace one with a number.",
    "integers": "Substituted values are often negative, so you need the sign rules for adding, multiplying and squaring integers."
  },
  unlocksWhy: {
    "pa-equations": "Checking whether a number is a solution means evaluating both sides of the equation at that number.",
    "pa-relations": "Tables of ordered pairs for a rule are made by evaluating the rule at each input."
  },
  beyond: [
    { field: "Algebra I", why: "Function notation f(3) is evaluation, and it is used to build tables, graphs and models." },
    { field: "Calculus I", why: "Limits, derivatives and definite integrals all end with evaluating an expression at specific values." },
    { field: "Statistics", why: "Test statistics and confidence intervals are found by evaluating formulas at sample values." }
  ],
  mistakes: [
    { wrong: `Evaluating <span class="m"><i>x</i><sup>2</sup></span> at <span class="m"><i>x</i> = −3</span> as <span class="m">−3<sup>2</sup> = −9</span>.`, fix: `Use parentheses: <span class="m">(−3)<sup>2</sup> = 9</span>.` },
    { wrong: `Evaluating <span class="m">−<i>x</i><sup>2</sup></span> at <span class="m"><i>x</i> = −3</span> as 9.`, fix: `The square comes first, then the negation: <span class="m">−(−3)<sup>2</sup> = −9</span>.` },
    { wrong: `Evaluating <span class="m">4 + 2<i>x</i></span> at <span class="m"><i>x</i> = 5</span> as <span class="m">6 × 5 = 30</span>.`, fix: `Multiply before adding: <span class="m">4 + 2(5) = 4 + 10 = 14</span>.` }
  ],
  practice: [
    { q: `Evaluate <span class="m">4<i>a</i> + 7</span> when <span class="m"><i>a</i> = 3</span>.`, a: `<span class="m">4(3) + 7 = 12 + 7 = 19</span>.` },
    { q: `Evaluate <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> + 6</span> when <span class="m"><i>x</i> = −1</span>.`, a: `<span class="m">(−1)<sup>2</sup> − 5(−1) + 6 = 1 + 5 + 6 = 12</span>.` },
    { q: `Evaluate <span class="m"><span class="fr"><span>2<i>x</i> − <i>y</i></span><span><i>x</i> + <i>y</i></span></span></span> when <span class="m"><i>x</i> = 4</span> and <span class="m"><i>y</i> = −2</span>.`, a: `Numerator <span class="m">2(4) − (−2) = 10</span>, denominator <span class="m">4 + (−2) = 2</span>, so the value is <span class="m">10 ÷ 2 = 5</span>.` },
    { q: `Evaluate <span class="m">−<i>x</i><sup>2</sup> + 3<i>xy</i></span> when <span class="m"><i>x</i> = −3</span> and <span class="m"><i>y</i> = 2</span>.`, a: `<span class="m">−(−3)<sup>2</sup> + 3(−3)(2) = −9 + (−18) = −27</span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["pa-exponent-laws"] = {
  title: "Exponent Laws with Variables",
  short: "Product, quotient, power, zero and negative exponents",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 6,
  voice: "mixed",
  eyebrow: "Exponents · rules for powers of a variable",
  hero: `<span class="m"><span class="c2"><i>x</i></span><sup class="c3"><i>m</i></sup> · <span class="c2"><i>x</i></span><sup class="c4"><i>n</i></sup> = <span class="c1"><i>x</i><sup><i>m</i> + <i>n</i></sup></span></span>`,
  lede: `Every exponent law comes from one idea: <span class="m"><span class="c2"><i>x</i></span><sup class="c3"><i>n</i></sup></span> means <span class="m c3"><i>n</i></span> factors of <span class="m c2"><i>x</i></span>. Count the factors and the rules follow.`,
  plain: `<p><span class="m"><i>x</i><sup>3</sup></span> is short for <span class="m"><i>x</i> · <i>x</i> · <i>x</i></span>, three copies of <span class="m"><i>x</i></span> multiplied together. So <span class="m"><i>x</i><sup>3</sup> · <i>x</i><sup>4</sup></span> is three copies times four copies, which is seven copies: <span class="m"><i>x</i><sup>7</sup></span>. When you multiply powers of the same base, you <b>add</b> the exponents.</p>
<p>Dividing works the other way. In <span class="m"><i>x</i><sup>5</sup> ÷ <i>x</i><sup>2</sup></span>, two of the five <span class="m"><i>x</i></span>'s on top cancel with the two on the bottom, leaving <span class="m"><i>x</i><sup>3</sup></span>. You <b>subtract</b> the exponents. And <span class="m">(<i>x</i><sup>2</sup>)<sup>3</sup></span> is three groups of two <span class="m"><i>x</i></span>'s, so you <b>multiply</b>: <span class="m"><i>x</i><sup>6</sup></span>.</p>
<p>What about <span class="m"><i>x</i><sup>0</sup></span>? Since <span class="m"><i>x</i><sup>3</sup> ÷ <i>x</i><sup>3</sup> = 1</span> and the subtraction rule gives <span class="m"><i>x</i><sup>0</sup></span>, we define <span class="m"><i>x</i><sup>0</sup> = 1</span>. In the same way <span class="m"><i>x</i><sup>2</sup> ÷ <i>x</i><sup>5</sup> = <i>x</i><sup>−3</sup></span> must mean <span class="m">1/<i>x</i><sup>3</sup></span>. A negative exponent means "one over".</p>`,
  formal: `<p>For real numbers <span class="m"><i>a</i>, <i>b</i></span> (nonzero wherever they appear in a denominator or with a zero or negative exponent) and integers <span class="m"><i>m</i>, <i>n</i></span>:</p>
<div class="display">Product: <i>a</i><sup><i>m</i></sup> · <i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i> + <i>n</i></sup> &nbsp;&nbsp; Quotient: <span class="fr"><span><i>a</i><sup><i>m</i></sup></span><span><i>a</i><sup><i>n</i></sup></span></span> = <i>a</i><sup><i>m</i> − <i>n</i></sup><br>Power: (<i>a</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup> &nbsp;&nbsp; Product to a power: (<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup> &nbsp;&nbsp; Quotient to a power: (<i>a</i>/<i>b</i>)<sup><i>n</i></sup> =<span class="fr"><span><i>a</i><sup><i>n</i></sup></span><span><i>b</i><sup><i>n</i></sup></span></span><br>Zero exponent: <i>a</i><sup>0</sup> = 1 &nbsp;&nbsp; Negative exponent: <i>a</i><sup>−<i>n</i></sup> = <span class="fr"><span>1</span><span><i>a</i><sup><i>n</i></sup></span></span></div>
<p>The zero and negative exponent definitions are chosen so that the product and quotient rules hold for all integer exponents. The expression <span class="m">0<sup>0</sup></span> is left undefined in this course. The laws apply to products and quotients only: in general <span class="m">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup> ≠ <i>a</i><sup><i>n</i></sup> + <i>b</i><sup><i>n</i></sup></span>, and <span class="m"><i>a</i><sup><i>m</i></sup> + <i>a</i><sup><i>n</i></sup></span> cannot be combined unless <span class="m"><i>m</i> = <i>n</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Base", desc: "The factor being repeated. The laws only combine powers of the same base." },
    { c: "c3", sym: `<i>m</i>`, name: "First exponent", desc: "How many factors of the base the first power contains." },
    { c: "c4", sym: `<i>n</i>`, name: "Second exponent", desc: "How many factors the second power contains, or how many times a power is raised again." },
    { c: "c1", sym: `<i>x</i><sup><i>m</i>+<i>n</i></sup>`, name: "Result", desc: "The single power left after the factors are combined or cancelled." }
  ],
  steps: { title: "How to simplify an expression with exponents", items: [
    `Apply any power outside parentheses to every factor inside, multiplying exponents: <span class="m">(2<i>x</i><sup>3</sup>)<sup>2</sup> = 4<i>x</i><sup>6</sup></span>.`,
    `Multiply the numerical coefficients together, then deal with each variable separately.`,
    `For each base, add exponents of factors being multiplied and subtract exponents in a quotient (top minus bottom).`,
    `Replace any factor with exponent 0 by 1.`,
    `Rewrite negative exponents as positive ones by moving that factor across the fraction bar: <span class="m"><i>y</i><sup>−4</sup> = 1/<i>y</i><sup>4</sup></span>.`,
    `Check a simple case with a number, such as <span class="m"><i>x</i> = 2</span>.`
  ] },
  example: {
    prompt: `A storage cube has edge length <span class="m">2<i>x</i></span> metres. A warehouse cube has edge <span class="m">6<i>x</i></span> metres. Find each volume, how many times larger the warehouse is, and the small cube's volume when <span class="m"><i>x</i> = 1.5</span>.`,
    lines: [
      { math: `<span class="m">(2<span class="c2"><i>x</i></span>)<sup class="c3">3</sup> = 2<sup>3</sup><span class="c2"><i>x</i></span><sup>3</sup> = <span class="c1">8<i>x</i><sup>3</sup></span></span>`, note: "Volume of a cube is edge cubed. The power applies to both factors." },
      { math: `<span class="m">(6<span class="c2"><i>x</i></span>)<sup class="c3">3</sup> = <span class="c1">216<i>x</i><sup>3</sup></span></span>`, note: "6³ = 216." },
      { math: `<span class="m"><span class="fr"><span>216<i>x</i><sup>3</sup></span><span>8<i>x</i><sup>3</sup></span></span> = 27<i>x</i><sup>3 − 3</sup> = 27<i>x</i><sup>0</sup> = 27</span>`, note: "Quotient rule: subtract exponents, and x⁰ = 1." },
      { math: `<span class="m">8(1.5)<sup>3</sup> = 8(3.375) = 27</span>`, note: "Evaluate the small cube's volume at x = 1.5." },
      { math: `<span class="m">2(1.5) = 3, &nbsp;3<sup>3</sup> = 27</span>`, note: "Check: the edge is 3 m, and a 3 m cube holds 27 m³." }
    ],
    answer: `The volumes are <span class="m">8<i>x</i><sup>3</sup></span> m³ and <span class="m">216<i>x</i><sup>3</sup></span> m³. The warehouse cube holds 27 times as much, and the small cube holds <span class="m">27</span> m³ when <span class="m"><i>x</i> = 1.5</span>.`
  },
  why: `<p>Exponent laws are how scientists and engineers handle very large and very small numbers. Multiplying <span class="m">3 × 10<sup>8</sup></span> by <span class="m">2 × 10<sup>−3</sup></span> is quick when you add the exponents. They also explain scaling: tripling the edge of a box multiplies its volume by <span class="m">3<sup>3</sup> = 27</span>.</p>
<p>In algebra, multiplying polynomials, simplifying rational expressions and working with exponential growth all use these rules constantly.</p>`,
  careers: [
    { role: "Chemist", use: "Multiplies and divides quantities in scientific notation, such as moles times 6.022 × 10²³ particles per mole, by adding and subtracting powers of ten." },
    { role: "Software engineer", use: "Works with powers of two, knowing that 2¹⁰ × 2¹⁰ = 2²⁰ bytes is one mebibyte." },
    { role: "Audio engineer", use: "Uses powers of ten in decibel calculations, where each 10 dB step is a factor of 10¹ in power." },
    { role: "Structural engineer", use: "Uses the moment of inertia bh³/12, knowing that doubling a beam's depth multiplies its stiffness by 2³ = 8." },
    { role: "Astronomer", use: "Divides distances such as 9.46 × 10¹⁵ m by 3 × 10⁸ m/s by subtracting exponents to get travel times." }
  ],
  life: [
    "Understanding why a 12-inch pizza has more than twice the area of an 8-inch one",
    "Comparing storage sizes in kilobytes, megabytes and gigabytes",
    "Reading very large or small numbers written in scientific notation",
    "Seeing how fast repeated doubling grows"
  ],
  fields: [
    { name: "Physics", use: "Units such as m/s² and inverse-square laws are handled with exponent rules." },
    { name: "Computer science", use: "Memory sizes and algorithm running times are expressed as powers." },
    { name: "Biology", use: "Bacterial growth by repeated doubling is modelled with powers of 2." }
  ],
  prereqWhy: {
    "pa-variables": "The laws are stated for a variable base, so you need to read expressions such as 3x²y.",
    "exponents": "The rules come from the meaning of a power as repeated multiplication of the base."
  },
  unlocksWhy: {
    "a1-exponents": "Integer exponents and scientific notation in Algebra I apply these laws to longer expressions and to powers of ten."
  },
  beyond: [
    { field: "Algebra II", why: "Rational exponents and logarithms extend the same laws to fractional and unknown exponents." },
    { field: "Calculus I", why: "The power rule for derivatives works on terms written as xⁿ, often after rewriting 1/x² as x⁻²." },
    { field: "Chemistry", why: "Scientific-notation calculations with Avogadro's number and concentrations rely on exponent laws." }
  ],
  mistakes: [
    { wrong: `<span class="m"><i>x</i><sup>3</sup> · <i>x</i><sup>4</sup> = <i>x</i><sup>12</sup></span>`, fix: `Multiplying powers adds exponents: <span class="m"><i>x</i><sup>7</sup></span>. Multiply exponents only for a power of a power.` },
    { wrong: `<span class="m">(3<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup></span>`, fix: `The power applies to every factor: <span class="m">(3<i>x</i>)<sup>2</sup> = 9<i>x</i><sup>2</sup></span>.` },
    { wrong: `<span class="m">5<sup>0</sup> = 0</span>`, fix: `Any nonzero base to the 0 power is 1: <span class="m">5<sup>0</sup> = 1</span>.` },
    { wrong: `<span class="m">2<i>x</i><sup>−3</sup> = <span class="fr"><span>1</span><span>2<i>x</i><sup>3</sup></span></span></span>`, fix: `The exponent belongs only to <span class="m"><i>x</i></span>: <span class="m">2<i>x</i><sup>−3</sup> = <span class="fr"><span>2</span><span><i>x</i><sup>3</sup></span></span></span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m"><i>x</i><sup>4</sup> · <i>x</i><sup>7</sup></span>.`, a: `<span class="m"><i>x</i><sup>4 + 7</sup> = <i>x</i><sup>11</sup></span>.` },
    { q: `Simplify <span class="m">(<i>y</i><sup>3</sup>)<sup>5</sup></span>.`, a: `<span class="m"><i>y</i><sup>3 · 5</sup> = <i>y</i><sup>15</sup></span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>12<i>a</i><sup>7</sup><i>b</i><sup>3</sup></span><span>4<i>a</i><sup>2</sup><i>b</i><sup>3</sup></span></span></span>.`, a: `<span class="m">3<i>a</i><sup>7 − 2</sup><i>b</i><sup>3 − 3</sup> = 3<i>a</i><sup>5</sup><i>b</i><sup>0</sup> = 3<i>a</i><sup>5</sup></span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>(2<i>x</i><sup>3</sup><i>y</i><sup>−2</sup>)<sup>2</sup></span><span>8<i>x</i><sup>4</sup><i>y</i><sup>−7</sup></span></span></span> and write it with positive exponents.`, a: `Numerator <span class="m">4<i>x</i><sup>6</sup><i>y</i><sup>−4</sup></span>. Divide: <span class="m"><span class="fr"><span>4</span><span>8</span></span><i>x</i><sup>6 − 4</sup><i>y</i><sup>−4 − (−7)</sup> = <span class="fr"><span><i>x</i><sup>2</sup><i>y</i><sup>3</sup></span><span>2</span></span></span>.` }
  ],
  origin: `The raised-number notation such as <i>x</i><sup>3</sup> was popularised by René Descartes in <i>La Géométrie</i> (1637), although he usually still wrote <i>xx</i> for <i>x</i><sup>2</sup>. John Wallis discussed negative and fractional exponents in <i>Arithmetica Infinitorum</i> (1656), and Isaac Newton used them in their modern written form in letters of 1676.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-equations"] = {
  title: "Equations & Their Solutions",
  short: "What an equation says and how to test a solution",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 3,
  voice: "mixed",
  eyebrow: "Equations · solutions and solution sets",
  hero: `<span class="m"><span class="c3">2<span class="c2"><i>x</i></span> + 3</span> = <span class="c4">11</span> &nbsp;⇔&nbsp; <span class="c2"><i>x</i></span> = <span class="c1">4</span></span>`,
  lede: `An equation claims two expressions have the same value. A <span class="m c1">solution</span> is a value of the variable that makes the claim true, and the balance levels only there.`,
  plain: `<p>Think of a balance scale. On the left pan you put 2 bags with the same unknown number of marbles in each, plus 3 loose marbles. On the right pan you put 11 marbles. The scale says <span class="m">2<i>x</i> + 3 = 11</span>. If each bag holds 4 marbles, both sides weigh 11 and the beam is level. Any other number tips it.</p>
<p>An <b>equation</b> is a sentence with an equals sign. It can be true or false depending on the value of the variable. A number that makes it true is a <b>solution</b>. To test a number, substitute it on both sides and see if the two sides match.</p>
<p>Some equations have no solution, such as <span class="m"><i>x</i> + 1 = <i>x</i> + 2</span>: nothing is one more than itself and also two more. Others, like <span class="m"><i>x</i> + <i>x</i> = 2<i>x</i></span>, are true for every number. Most equations in this course have exactly one solution.</p>`,
  formal: `<p>An <b>equation</b> is a statement that two expressions are equal, <span class="m"><i>A</i> = <i>B</i></span>. A <b>solution</b> of an equation in one variable is a number that, when substituted for the variable, produces a true statement. The <b>solution set</b> is the set of all solutions. Two equations are <b>equivalent</b> if they have the same solution set.</p>
<div class="display"><b>conditional equation</b>: true for some values, false for others &nbsp; <span class="dim">2<i>x</i> + 3 = 11, solution set {4}</span><br><b>identity</b>: true for every real number &nbsp; <span class="dim"><i>x</i> + <i>x</i> = 2<i>x</i>, solution set ℝ</span><br><b>contradiction</b>: true for no value &nbsp; <span class="dim"><i>x</i> + 1 = <i>x</i> + 2, solution set ∅</span></div>
<p>An expression names a number and cannot be "solved"; it can only be simplified or evaluated. An equation makes a claim, which can be tested and solved. Solving uses properties of equality (adding or subtracting the same number on both sides, or multiplying or dividing both sides by the same nonzero number) that produce equivalent equations.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The unknown. On the balance, the number of marbles in each bag." },
    { c: "c3", sym: `2<i>x</i> + 3`, name: "Left side", desc: "The expression on the left pan. Its value changes as x changes." },
    { c: "c4", sym: `11`, name: "Right side", desc: "The expression on the right pan. Here it is a fixed number." },
    { c: "c1", sym: `=`, name: "Balanced state", desc: "Both sides have the same value. This happens only at a solution." }
  ],
  steps: { title: "How to check whether a number is a solution", items: [
    `Copy the equation, leaving parentheses where the variable appears.`,
    `Substitute the number into <b>every</b> occurrence of the variable on both sides.`,
    `Evaluate the left side on its own, using the order of operations.`,
    `Evaluate the right side on its own.`,
    `If the two values are equal, the number is a solution. If not, it is not.`
  ] },
  example: {
    prompt: `A moving company charges $120 plus $85 per hour. Your bill was $417.50, so the number of hours <span class="m"><i>h</i></span> satisfies <span class="m">120 + 85<i>h</i> = 417.50</span>. The crew says they worked 3 hours; the invoice says 3.5. Which is right?`,
    lines: [
      { math: `<span class="m"><span class="c3">120 + 85(3)</span> = 120 + 255 = 375</span>`, note: "Test h = 3 on the left side." },
      { math: `<span class="m">375 ≠ <span class="c4">417.50</span></span>`, note: "The sides differ, so 3 is not a solution." },
      { math: `<span class="m"><span class="c3">120 + 85(3.5)</span> = 120 + 297.50 = 417.50</span>`, note: "Test h = 3.5." },
      { math: `<span class="m">417.50 = <span class="c4">417.50</span> <span class="c1">✓</span></span>`, note: "The sides match, so 3.5 is a solution." },
      { math: `<span class="m">85 × 0.5 = 42.50 = 417.50 − 375</span>`, note: "Check: the extra half hour accounts for the extra $42.50." }
    ],
    answer: `<span class="m"><i>h</i> = 3.5</span> is the solution, so the invoice is correct: the crew worked 3.5 hours.`
  },
  why: `<p>Equations are how we write down a condition that must be met: a budget that must balance, a dose that must reach a target, a load a beam must carry. Checking a proposed answer by substitution is a quick, reliable way to catch mistakes on a bill, in a spreadsheet or in your own algebra.</p>
<p>The idea of a solution set, and the three cases of one solution, no solution and every number, carries through all of algebra, from linear equations to systems and quadratics.</p>`,
  careers: [
    { role: "Bookkeeper", use: "Checks that an invoice total satisfies the equation fee + rate × hours = amount billed before paying it." },
    { role: "Pharmacy technician", use: "Verifies that a prepared quantity satisfies the prescribed concentration equation before dispensing." },
    { role: "Quality-control inspector", use: "Tests whether measured values satisfy a specification equation within tolerance." },
    { role: "Software tester", use: "Writes test cases that substitute inputs and check that computed outputs equal the expected values." },
    { role: "Mathematics tutor", use: "Teaches students to verify every solution by substituting it back into the original equation." }
  ],
  life: [
    "Checking a bill by plugging the hours or items back into the rate",
    "Verifying that a budget balances: income equals spending plus savings",
    "Testing a guess in a puzzle such as a sudoku sum",
    "Confirming a recipe conversion gives the original amount when reversed"
  ],
  fields: [
    { name: "Physics", use: "Laws of motion and conservation are equations that measured quantities must satisfy." },
    { name: "Chemistry", use: "Balanced chemical equations state that atoms on both sides must be equal in number." },
    { name: "Economics", use: "Equilibrium is found where the supply equation and demand equation give the same value." }
  ],
  prereqWhy: {
    "pa-evaluate": "Testing a possible solution means evaluating both sides of the equation at that value."
  },
  unlocksWhy: {
    "pa-one-step": "Solving one-step equations uses the properties of equality that turn an equation into an equivalent one with the same solution set.",
    "pa-inequalities": "Inequalities extend the idea of a solution set from a single value to a whole range of values."
  },
  beyond: [
    { field: "Algebra I", why: "Linear, quadratic, radical and rational equations are all solved and checked using solution sets, including extraneous solutions." },
    { field: "Linear Algebra", why: "Systems of equations may have one, none or infinitely many solutions, the same three cases seen here." },
    { field: "Physics", why: "Problems are solved by writing equations that relate unknown and known quantities." }
  ],
  mistakes: [
    { wrong: `Trying to "solve" the expression <span class="m">3<i>x</i> + 5</span>.`, fix: `An expression has no equals sign and makes no claim. You can simplify or evaluate it. Only an equation can be solved.` },
    { wrong: `Substituting into one side only and deciding it "works".`, fix: `Evaluate both sides separately and compare them.` },
    { wrong: `Saying <span class="m"><i>x</i> + 1 = <i>x</i> + 2</span> has solution 0.`, fix: `Substituting 0 gives <span class="m">1 = 2</span>, false. No number works, so the solution set is ∅.` }
  ],
  practice: [
    { q: `Is <span class="m"><i>x</i> = 5</span> a solution of <span class="m">3<i>x</i> − 4 = 11</span>?`, a: `<span class="m">3(5) − 4 = 15 − 4 = 11</span>. Yes.` },
    { q: `Is <span class="m"><i>y</i> = −2</span> a solution of <span class="m"><i>y</i><sup>2</sup> + <i>y</i> = 6</span>?`, a: `<span class="m">(−2)<sup>2</sup> + (−2) = 4 − 2 = 2 ≠ 6</span>. No.` },
    { q: `Which numbers in <span class="m">{−3, 0, 2}</span> are solutions of <span class="m"><i>x</i><sup>2</sup> + <i>x</i> − 6 = 0</span>?`, a: `<span class="m">−3</span>: <span class="m">9 − 3 − 6 = 0</span>, yes. <span class="m">0</span>: <span class="m">−6 ≠ 0</span>, no. <span class="m">2</span>: <span class="m">4 + 2 − 6 = 0</span>, yes. The solutions are −3 and 2.` },
    { q: `Classify each equation as an identity or a contradiction and give its solution set: (a) <span class="m">3(<i>x</i> + 2) = 3<i>x</i> + 6</span> (b) <span class="m">2(<i>x</i> + 1) = 2<i>x</i> + 5</span>.`, a: `(a) Both sides equal <span class="m">3<i>x</i> + 6</span> for every <span class="m"><i>x</i></span>: identity, solution set ℝ. (b) The left side is <span class="m">2<i>x</i> + 2</span>, which is never <span class="m">2<i>x</i> + 5</span> since <span class="m">2 ≠ 5</span>: contradiction, solution set ∅.` }
  ],
  origin: `The equals sign was introduced by the Welsh mathematician Robert Recorde in <i>The Whetstone of Witte</i> (1557). He chose two parallel lines of the same length "bicause noe .2. thynges, can be moare equalle".`
};

/* ------------------------------------------------------------------ */
ARITH["pa-relations"] = {
  title: "Relations: Tables, Mappings & Graphs",
  short: "Sets of ordered pairs, their domain and range",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 3,
  voice: "mixed",
  eyebrow: "Relations · ordered pairs, domain and range",
  hero: `<span class="m"><span class="c1">{(1, 4), (2, 5), (3, 4)}</span>: &nbsp;<span class="c2"><i>D</i> = {1, 2, 3}</span>, &nbsp;<span class="c3"><i>R</i> = {4, 5}</span></span>`,
  lede: `A relation pairs <span class="m c2">inputs</span> with <span class="m c3">outputs</span>. The same pairing can be written as a list of <span class="m c1">ordered pairs</span>, a table, a mapping diagram or a graph.`,
  plain: `<p>Any time you match one list of things with another, you have a relation. Days of the week matched with the day's high temperature. Students matched with their shoe sizes. Hours worked matched with pay. Each match is an <b>ordered pair</b>, with the first item and then the second.</p>
<p>You can show a relation in four ways. List the pairs in braces. Make a two-column <b>table</b>. Draw a <b>mapping diagram</b> with the inputs in one oval, the outputs in another, and arrows between them. Or plot the pairs as points on a coordinate <b>graph</b>. All four carry the same information.</p>
<p>The set of all first items is the <b>domain</b>. The set of all second items is the <b>range</b>. When you list them, write each value once, even if it appears in several pairs.</p>`,
  formal: `<p>A <b>relation</b> is any set of ordered pairs <span class="m">(<i>x</i>, <i>y</i>)</span>. The <b>domain</b> of the relation is the set of all first components (inputs, <span class="m"><i>x</i></span>-values); the <b>range</b> is the set of all second components (outputs, <span class="m"><i>y</i></span>-values).</p>
<div class="display"><i>R</i> = {(<span class="c2">−2</span>, <span class="c3">3</span>), (<span class="c2">0</span>, <span class="c3">3</span>), (<span class="c2">4</span>, <span class="c3">−1</span>)}<br><span class="c2">domain</span> = {−2, 0, 4} &nbsp;&nbsp; <span class="c3">range</span> = {−1, 3}</div>
<p>A relation may be given by a rule, such as <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> on a stated set of inputs, in which case its pairs are found by evaluating the rule. In a relation an input may be paired with more than one output. A relation in which each input has exactly one output is called a <b>function</b>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Inputs (domain)", desc: "The first components of the pairs. Together they form the domain." },
    { c: "c3", sym: `<i>y</i>`, name: "Outputs (range)", desc: "The second components of the pairs. Together they form the range." },
    { c: "c1", sym: `(<i>x</i>, <i>y</i>)`, name: "Ordered pairs", desc: "Each matched input and output, shown as a row of the table, an arrow in the mapping, or a point on the graph." }
  ],
  steps: { title: "How to find the domain and range of a relation", items: [
    `Write the relation as a list of ordered pairs, reading them from the table, mapping diagram or graph.`,
    `Collect every first coordinate. Remove repeats and list them in increasing order: that is the <span class="c2">domain</span>.`,
    `Collect every second coordinate the same way: that is the <span class="c3">range</span>.`,
    `If the relation is given by a rule and a set of inputs, evaluate the rule at each input first.`,
    `Note any input that appears with two different outputs. You will need this for functions.`
  ] },
  example: {
    prompt: `A small weather station records each day's high temperature (°F): day 1: 68, day 2: 71, day 3: 68, day 4: 75, day 5: 71. Write the relation (day, temperature) as ordered pairs, find its domain and range, and say whether any output comes from more than one input.`,
    lines: [
      { math: `<span class="m c1">{(1, 68), (2, 71), (3, 68), (4, 75), (5, 71)}</span>`, note: "Each day and its high form one ordered pair, day first." },
      { math: `<span class="m c2">domain = {1, 2, 3, 4, 5}</span>`, note: "All the first coordinates." },
      { math: `<span class="m c3">range = {68, 71, 75}</span>`, note: "All the second coordinates, each listed once." },
      { math: `<span class="m">68 ← 1, 3; &nbsp;71 ← 2, 5</span>`, note: "Two outputs repeat. That is allowed: different days can have the same high." },
      { math: `<span class="m">5 pairs, 5 inputs</span>`, note: "Check: every day appears exactly once, so no input has two outputs." }
    ],
    answer: `Domain <span class="m">{1, 2, 3, 4, 5}</span>, range <span class="m">{68, 71, 75}</span>. The temperatures 68 and 71 each occur on two days, but each day has only one high.`
  },
  why: `<p>Relations are how we record data that comes in pairs: time and temperature, price and quantity, height and weight. Choosing between a table, a diagram and a graph is choosing the clearest way to show that data, and reading domain and range tells you what inputs were measured and what outputs occurred.</p>
<p>Relations are the setting for functions. Once you can list pairs and spot an input with two outputs, you have the tool to decide what is and is not a function.</p>`,
  careers: [
    { role: "Data analyst", use: "Stores paired observations such as date and sales in two-column tables and plots them to look for trends." },
    { role: "Database administrator", use: "Designs relational database tables, where each row pairs a key with related values." },
    { role: "Meteorologist", use: "Records time and temperature pairs and graphs them to show the day's pattern." },
    { role: "Nurse", use: "Charts pairs of time and vital-sign readings on a patient's flow sheet." },
    { role: "Market researcher", use: "Pairs price points with units sold to study demand." }
  ],
  life: [
    "Reading a bus timetable that pairs stops with times",
    "Tracking your weekly spending in a two-column list",
    "Looking at a fitness app's graph of steps per day",
    "Matching friends to their birthdays in a contact list"
  ],
  fields: [
    { name: "Computer science", use: "Relational databases store data as sets of tuples, which generalise ordered pairs." },
    { name: "Statistics", use: "Bivariate data are relations displayed in tables and scatter plots." },
    { name: "Discrete mathematics", use: "Relations are studied for properties such as reflexive, symmetric and transitive." }
  ],
  prereqWhy: {
    "pa-coordinate": "The graph of a relation is its ordered pairs plotted as points in the coordinate plane.",
    "pa-evaluate": "When a relation is given by a rule, its pairs are produced by evaluating the rule at each input."
  },
  unlocksWhy: {
    "pa-functions": "A function is a relation in which each input has exactly one output, tested on tables, mappings and graphs."
  },
  beyond: [
    { field: "Algebra I", why: "Domain and range of functions, including those given by graphs and restricted rules, build directly on this." },
    { field: "Discrete Mathematics", why: "Equivalence relations and orderings are special relations used throughout mathematics and computing." },
    { field: "Statistics", why: "Scatter plots and correlation study relations between two measured variables." }
  ],
  mistakes: [
    { wrong: `Listing the range of <span class="m">{(1, 4), (2, 5), (3, 4)}</span> as <span class="m">{4, 5, 4}</span>.`, fix: `A set lists each element once: the range is <span class="m">{4, 5}</span>.` },
    { wrong: `Mixing up domain and range.`, fix: `The domain is the first coordinates (inputs, <span class="m"><i>x</i></span>). The range is the second coordinates (outputs, <span class="m"><i>y</i></span>).` },
    { wrong: `Reading a table's pair as (output, input).`, fix: `The input column is the first coordinate, so a row with <span class="m"><i>x</i> = 2</span>, <span class="m"><i>y</i> = 7</span> gives <span class="m">(2, 7)</span>.` }
  ],
  practice: [
    { q: `Find the domain and range of <span class="m">{(−2, 3), (0, 3), (4, −1)}</span>.`, a: `Domain <span class="m">{−2, 0, 4}</span>, range <span class="m">{−1, 3}</span>.` },
    { q: `A table has <span class="m"><i>x</i></span>: 1, 2, 3 and <span class="m"><i>y</i></span>: 2, 4, 6. Write the relation as ordered pairs.`, a: `<span class="m">{(1, 2), (2, 4), (3, 6)}</span>.` },
    { q: `List the ordered pairs of <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> for inputs <span class="m">{−2, −1, 0, 1, 2}</span> and give the range.`, a: `<span class="m">(−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4)</span>. Range <span class="m">{0, 1, 4}</span>.` },
    { q: `A graph shows the points <span class="m">(3, 1)</span>, <span class="m">(3, −2)</span> and <span class="m">(−1, 0)</span>. Give the domain and range, and name any input with two outputs.`, a: `Domain <span class="m">{−1, 3}</span>, range <span class="m">{−2, 0, 1}</span>. The input 3 is paired with both 1 and −2.` }
  ],
  origin: `Defining a relation as simply a set of ordered pairs took its modern form in set theory around the start of the 20th century. Kazimierz Kuratowski gave the standard set-theoretic definition of an ordered pair in 1921, which made this definition of a relation precise.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-one-step"] = {
  title: "One-Step Equations",
  short: "Undo one operation on both sides to isolate x",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Solving equations · properties of equality",
  hero: `<span class="m"><span class="c2"><i>x</i></span> + <span class="c3"><i>a</i></span> = <i>b</i> &nbsp;⇒&nbsp; <span class="c2"><i>x</i></span> = <i>b</i> <span class="c1">− <i>a</i></span></span>`,
  lede: `To solve an equation, get <span class="m c2"><i>x</i></span> alone. If one operation has been done to <span class="m c2"><i>x</i></span>, apply its <span class="m c1">inverse</span> to both sides and read off the <span class="m c5">solution</span>.`,
  plain: `<p>Picture a balance with <span class="m"><i>x</i> + 7</span> on one side and 12 on the other. You want <span class="m"><i>x</i></span> by itself. Take 7 away from the left pan. To keep the beam level, you must take 7 away from the right pan too. Now the left side is <span class="m"><i>x</i></span> and the right side is 5, so <span class="m"><i>x</i> = 5</span>.</p>
<p>The trick is to do the <b>opposite</b> of what was done to <span class="m"><i>x</i></span>. Addition and subtraction undo each other. Multiplication and division undo each other. If <span class="m"><i>x</i></span> was multiplied by 4, divide both sides by 4. If <span class="m"><i>x</i></span> was divided by 3, multiply both sides by 3.</p>
<p>The golden rule is: whatever you do to one side, do to the other. Then check by putting your answer back into the original equation.</p>`,
  formal: `<p>For real numbers <span class="m"><i>a</i>, <i>b</i>, <i>c</i></span>, the <b>properties of equality</b> state that if <span class="m"><i>a</i> = <i>b</i></span>, then</p>
<div class="display"><b>Addition</b>: <i>a</i> + <i>c</i> = <i>b</i> + <i>c</i> &nbsp;&nbsp; <b>Subtraction</b>: <i>a</i> − <i>c</i> = <i>b</i> − <i>c</i><br><b>Multiplication</b>: <i>ac</i> = <i>bc</i> &nbsp;&nbsp; <b>Division</b>: <span class="fr"><span><i>a</i></span><span><i>c</i></span></span> = <span class="fr"><span><i>b</i></span><span><i>c</i></span></span> &nbsp;<span class="dim">(<i>c</i> ≠ 0)</span></div>
<p>Each property, applied to both sides (with a nonzero multiplier or divisor), produces an <b>equivalent equation</b>: one with the same solution set. A <b>one-step equation</b> has the form <span class="m"><i>x</i> + <i>a</i> = <i>b</i></span>, <span class="m"><i>x</i> − <i>a</i> = <i>b</i></span>, <span class="m"><i>ax</i> = <i>b</i></span> or <span class="m"><i>x</i>/<i>a</i> = <i>b</i></span> (<span class="m"><i>a</i> ≠ 0</span>) and is solved by a single inverse operation. For <span class="m"><span class="fr"><span><i>p</i></span><span><i>q</i></span></span><i>x</i> = <i>b</i></span>, multiply both sides by the reciprocal <span class="m"><span class="fr"><span><i>q</i></span><span><i>p</i></span></span></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The unknown you want alone on one side." },
    { c: "c3", sym: `<i>a</i>`, name: "Constant or coefficient", desc: "The number that has been added to, subtracted from, multiplied by or divided into x." },
    { c: "c1", sym: `− <i>a</i>`, name: "Inverse operation", desc: "The opposite operation, applied to both sides to undo what was done to x." },
    { c: "c5", sym: `<i>x</i> = …`, name: "Solution", desc: "The value left when x is isolated. It makes the original equation true." }
  ],
  steps: { title: "How to solve a one-step equation", items: [
    `Identify the one operation being done to <span class="m c2"><i>x</i></span>.`,
    `Choose its <span class="c1">inverse</span>: subtract to undo adding, add to undo subtracting, divide to undo multiplying, multiply to undo dividing.`,
    `Apply the inverse to <b>both</b> sides of the equation.`,
    `Simplify to get <span class="m c5"><i>x</i> = number</span>. For a fractional coefficient, multiply by its reciprocal.`,
    `Check by substituting the solution into the original equation.`
  ] },
  example: {
    prompt: `A cookie recipe uses <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> cup of sugar per batch. You used exactly 4 cups of sugar. How many batches did you make?`,
    lines: [
      { math: `<span class="m">let <span class="c2"><i>b</i></span> = number of batches</span>`, note: "Name the unknown." },
      { math: `<span class="m"><span class="c3"><span class="fr"><span>2</span><span>3</span></span></span><span class="c2"><i>b</i></span> = 4</span>`, note: "Sugar per batch times batches equals total sugar." },
      { math: `<span class="m"><span class="c1"><span class="fr"><span>3</span><span>2</span></span> ·</span> <span class="fr"><span>2</span><span>3</span></span><i>b</i> = <span class="c1"><span class="fr"><span>3</span><span>2</span></span> ·</span> 4</span>`, note: "Multiply both sides by the reciprocal of 2/3." },
      { math: `<span class="m c5"><i>b</i> = 6</span>`, note: "3/2 × 4 = 12/2 = 6." },
      { math: `<span class="m"><span class="fr"><span>2</span><span>3</span></span>(6) = <span class="fr"><span>12</span><span>3</span></span> = 4 ✓</span>`, note: "Check: 6 batches use 4 cups." }
    ],
    answer: `You made <span class="m">6</span> batches.`
  },
  why: `<p>One-step equations answer everyday "how many" and "how much" questions: how many hours at $18 an hour make $270, what price before tax gives a given total, how many servings a bag of rice makes. Each is one inverse operation away from the answer.</p>
<p>More importantly, the rule "do the same thing to both sides" is the engine of all equation solving. Every longer equation is solved by a sequence of these single steps.</p>`,
  careers: [
    { role: "Nurse", use: "Solves 250x = 125 to find that x = 0.5 mL of a 250 mg/mL stock solution delivers a 125 mg dose." },
    { role: "Retail manager", use: "Finds the pre-tax price p from 1.08p = total when the sales tax rate is 8%." },
    { role: "Electrician", use: "Solves V = IR for the current I by dividing the voltage by the resistance." },
    { role: "Chef", use: "Divides total ingredient on hand by the amount per batch to find how many batches can be made." },
    { role: "Pilot", use: "Solves d = 450t for flight time t when cruising at 450 knots over a known distance." }
  ],
  life: [
    "Working out how many hours of work pay for a purchase",
    "Finding the original price when you know the price after tax",
    "Figuring out how many servings a package makes",
    "Splitting a bill evenly: 4x = total"
  ],
  fields: [
    { name: "Physics", use: "Many problems reduce to one-step equations such as F = ma solved for a." },
    { name: "Chemistry", use: "Concentration equations such as c = n/V are solved for the unknown amount or volume." },
    { name: "Accounting", use: "Unknown pre-tax or pre-discount amounts are found with a single division." }
  ],
  prereqWhy: {
    "pa-equations": "You need to know what a solution and an equivalent equation are, and how to check a solution by substitution.",
    "fraction-ops": "Equations with fractional coefficients are solved by multiplying by a reciprocal and simplifying fractions.",
    "decimal-ops": "Many real equations, such as prices with tax, have decimal coefficients that must be divided accurately."
  },
  unlocksWhy: {
    "pa-two-step": "A two-step equation is solved by applying two of these inverse operations in reverse order.",
    "pa-similar": "Finding a missing side of similar figures ends with a one-step equation such as 4x = 30."
  },
  beyond: [
    { field: "Algebra I", why: "Multi-step, literal and systems problems are all built from repeated one-step moves on both sides." },
    { field: "Chemistry", why: "Solving PV = nRT or c = n/V for one quantity is a one-step equation with letters." },
    { field: "Physics", why: "Kinematics and circuit formulas are routinely solved for one variable by a single inverse operation." }
  ],
  mistakes: [
    { wrong: `Solving <span class="m"><i>x</i> − 9 = −4</span> as <span class="m"><i>x</i> = −13</span>.`, fix: `Undo subtracting 9 by <b>adding</b> 9: <span class="m"><i>x</i> = −4 + 9 = 5</span>.` },
    { wrong: `Solving <span class="m">−3<i>x</i> = 12</span> by dividing by 3 to get <span class="m"><i>x</i> = 4</span>.`, fix: `The coefficient is −3, so divide by −3: <span class="m"><i>x</i> = −4</span>.` },
    { wrong: `Solving <span class="m"><span class="fr"><span>2</span><span>3</span></span><i>x</i> = 4</span> by multiplying both sides by <span class="m"><span class="fr"><span>2</span><span>3</span></span></span>.`, fix: `Multiply by the reciprocal <span class="m"><span class="fr"><span>3</span><span>2</span></span></span>: <span class="m"><i>x</i> = 6</span>.` },
    { wrong: `Reading <span class="m">−<i>x</i> = 8</span> as <span class="m"><i>x</i> = 8</span>.`, fix: `<span class="m">−<i>x</i></span> means <span class="m">−1 · <i>x</i></span>. Divide by −1: <span class="m"><i>x</i> = −8</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i> − 9 = −4</span>.`, a: `Add 9 to both sides: <span class="m"><i>x</i> = 5</span>. Check: <span class="m">5 − 9 = −4</span>.` },
    { q: `Solve <span class="m">−6<i>y</i> = 42</span>.`, a: `Divide both sides by −6: <span class="m"><i>y</i> = −7</span>. Check: <span class="m">−6(−7) = 42</span>.` },
    { q: `Solve <span class="m">−<span class="fr"><span>3</span><span>5</span></span><i>w</i> = 12</span>.`, a: `Multiply by <span class="m">−<span class="fr"><span>5</span><span>3</span></span></span>: <span class="m"><i>w</i> = −20</span>. Check: <span class="m">−<span class="fr"><span>3</span><span>5</span></span>(−20) = 12</span>.` },
    { q: `With 8% sales tax, a jacket costs $45.36. Solve <span class="m">1.08<i>p</i> = 45.36</span> for the price before tax.`, a: `<span class="m"><i>p</i> = 45.36 ÷ 1.08 = 42</span>, so $42. Check: <span class="m">1.08 × 42 = 45.36</span>.` }
  ],
  origin: `The word <i>algebra</i> comes from <i>al-jabr</i>, "restoration", in the title of al-Khwarizmi's book (c. 820 CE). <i>Al-jabr</i> was the step of removing a subtracted quantity by adding it to both sides, and <i>al-muqabala</i>, "balancing", was cancelling equal quantities from both sides: the properties of equality used here.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-inequalities"] = {
  title: "Inequalities & Their Graphs",
  short: "Solution sets on the number line and in interval notation",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Inequalities · graphs and interval notation",
  hero: `<span class="m"><i>x</i> ≤ <span class="c1">3</span> &nbsp;⇔&nbsp; <span class="c2">(−∞, <span class="c1">3</span>]</span></span>`,
  lede: `An inequality has many solutions, usually infinitely many. On a number line they form a shaded <span class="m c2">solution set</span> that starts at a <span class="m c1">boundary point</span>.`,
  plain: `<p>A sign on a ride says "You must be at least 48 inches tall." That rule is an <b>inequality</b>: height ≥ 48. A child who is 48 inches can ride, so can one who is 50 or 52.5. There is no single answer. The answer is every number from 48 upward.</p>
<p>We draw that on a number line. Put a dot at the <b>boundary</b>, 48, and shade everything to the right. The dot is <b>filled in</b> (closed) because 48 itself counts. If the rule were "taller than 48", 48 would not count, and we would draw an <b>open</b> circle.</p>
<p>The four symbols are: <span class="m">&lt;</span> less than, <span class="m">&gt;</span> greater than, <span class="m">≤</span> less than or equal to, <span class="m">≥</span> greater than or equal to. The pointy end always points to the smaller number.</p>`,
  formal: `<p>An <b>inequality</b> is a statement that two expressions are related by <span class="m">&lt;</span>, <span class="m">&gt;</span>, <span class="m">≤</span> or <span class="m">≥</span>. Its <b>solution set</b> is the set of all values that make it true. For a linear inequality in one variable, the solution set is usually an interval such as the ones below, described in three equivalent ways:</p>
<div class="display"><i>x</i> &gt; <i>a</i> &nbsp; {<i>x</i> | <i>x</i> &gt; <i>a</i>} &nbsp; (<i>a</i>, ∞) &nbsp;<span class="dim">open circle at <i>a</i>, shade right</span><br><i>x</i> ≥ <i>a</i> &nbsp; {<i>x</i> | <i>x</i> ≥ <i>a</i>} &nbsp; [<i>a</i>, ∞) &nbsp;<span class="dim">closed circle at <i>a</i>, shade right</span><br><i>x</i> &lt; <i>a</i> &nbsp; {<i>x</i> | <i>x</i> &lt; <i>a</i>} &nbsp; (−∞, <i>a</i>) &nbsp;<span class="dim">open circle, shade left</span><br><i>x</i> ≤ <i>a</i> &nbsp; {<i>x</i> | <i>x</i> ≤ <i>a</i>} &nbsp; (−∞, <i>a</i>] &nbsp;<span class="dim">closed circle, shade left</span></div>
<p>In <b>interval notation</b>, a parenthesis means the endpoint is excluded and a bracket means it is included. The symbols ∞ and −∞ are not real numbers, so they always take a parenthesis. The statement <span class="m"><i>a</i> &lt; <i>x</i></span> is equivalent to <span class="m"><i>x</i> &gt; <i>a</i></span>, and the double inequality <span class="m"><i>a</i> &lt; <i>x</i> ≤ <i>b</i></span> describes the bounded interval <span class="m">(<i>a</i>, <i>b</i>]</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Boundary point", desc: "Where the solution set starts. Closed circle if included (≤, ≥), open circle if not (&lt;, &gt;)." },
    { c: "c2", sym: `(−∞, <i>a</i>]`, name: "Solution set", desc: "Every number that makes the inequality true, shaded on the number line." },
    { c: "c3", sym: `<i>t</i>`, name: "Test point", desc: "Any single value you substitute to check whether it lies in the solution set." }
  ],
  steps: { title: "How to graph an inequality and write its interval", items: [
    `If the variable is on the right, rewrite so it is on the left, turning the symbol around: <span class="m">5 &gt; <i>x</i></span> becomes <span class="m"><i>x</i> &lt; 5</span>.`,
    `Mark the <span class="c1">boundary point</span> on the number line.`,
    `Use a closed circle for ≤ or ≥ and an open circle for &lt; or &gt;.`,
    `Shade right for &gt; or ≥, left for &lt; or ≤.`,
    `Write the interval from left to right, with a bracket for an included endpoint, a parenthesis for an excluded one, and always a parenthesis at ±∞.`,
    `Check with a <span class="c3">test point</span> in the shaded region and one outside it.`
  ] },
  example: {
    prompt: `Food safety guidance says a freezer should stay at or below −18 °C. Write this as an inequality, graph it, give the interval, and decide whether readings of −20 °C and −15 °C are safe.`,
    lines: [
      { math: `<span class="m"><i>t</i> ≤ <span class="c1">−18</span></span>`, note: "\"At or below\" means less than or equal to." },
      { math: `<span class="m">closed circle at <span class="c1">−18</span>, shade left</span>`, note: "−18 itself is allowed, and colder means further left." },
      { math: `<span class="m c2">(−∞, −18]</span>`, note: "Bracket at −18 because it is included; parenthesis at −∞." },
      { math: `<span class="m"><span class="c3">−20</span> ≤ −18</span>`, note: "True: −20 is to the left of −18, so −20 °C is safe." },
      { math: `<span class="m"><span class="c3">−15</span> ≤ −18</span>`, note: "False: −15 is to the right of −18, so −15 °C is too warm." }
    ],
    answer: `The rule is <span class="m"><i>t</i> ≤ −18</span>, or <span class="m">(−∞, −18]</span>. −20 °C is safe and −15 °C is not.`
  },
  why: `<p>Many real rules are limits, not exact values: a speed limit, a weight limit on a bridge, a minimum age, a budget ceiling, a safe temperature range. Inequalities state those rules precisely, and their graphs show at a glance which values are allowed.</p>
<p>Interval notation is the standard language for sets of real numbers. It is used to state domains and ranges of functions, answers to inequalities, and where a graph is increasing or decreasing in later courses.</p>`,
  careers: [
    { role: "Food safety inspector", use: "Checks that cold-holding temperatures satisfy t ≤ 5 °C (41 °F) and hot-holding temperatures satisfy t ≥ 57 °C (135 °F)." },
    { role: "Civil engineer", use: "Designs so that the load on a member stays at or below its rated capacity." },
    { role: "Pharmacist", use: "Confirms that a dose falls within the safe range between a minimum effective and a maximum safe amount." },
    { role: "Quality-control technician", use: "Accepts a part only if its measurement lies in a tolerance interval such as [9.95, 10.05] mm." },
    { role: "Financial planner", use: "Sets spending so that monthly expenses stay at or below net income." }
  ],
  life: [
    "Reading a speed limit as speed ≤ 65",
    "Checking a minimum age such as at least 18 to vote",
    "Keeping luggage within an airline weight limit",
    "Staying under a monthly data or spending cap"
  ],
  fields: [
    { name: "Engineering", use: "Safety factors and tolerances are expressed as inequalities that designs must satisfy." },
    { name: "Economics", use: "Budget constraints are inequalities limiting what a consumer can buy." },
    { name: "Computer science", use: "Conditions in code such as if (x <= limit) are inequalities that control program flow." }
  ],
  prereqWhy: {
    "pa-equations": "An inequality's solution set extends the idea of an equation's solution set, and both are checked by substitution.",
    "number-line": "Solution sets are graphed on the number line, and deciding which of two numbers is smaller is ordering on that line."
  },
  unlocksWhy: {
    "pa-solve-ineq": "Solving linear inequalities produces solution sets that are graphed and written in the interval notation learned here."
  },
  beyond: [
    { field: "Algebra I", why: "Compound, absolute-value and two-variable inequalities all describe their solutions with intervals and shaded regions." },
    { field: "Precalculus", why: "Domains, ranges and intervals of increase or decrease are written in interval notation." },
    { field: "Calculus I", why: "Limits are defined with inequalities, and intervals are where functions are continuous or differentiable." },
    { field: "Economics", why: "Linear programming maximises profit subject to a system of inequality constraints." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m">5 &gt; <i>x</i></span> as "x is greater than 5".`, fix: `Read it from <span class="m"><i>x</i></span>'s side: <span class="m"><i>x</i> &lt; 5</span>, "x is less than 5".` },
    { wrong: `Writing <span class="m">[3, ∞]</span>.`, fix: `∞ is not a number and is never included: <span class="m">[3, ∞)</span>.` },
    { wrong: `Using a closed circle for <span class="m"><i>x</i> &gt; −2</span>.`, fix: `&gt; excludes the boundary, so the circle at −2 is open and the interval is <span class="m">(−2, ∞)</span>.` },
    { wrong: `Translating "at most 40" as <span class="m"><i>x</i> ≥ 40</span>.`, fix: `"At most" means no more than: <span class="m"><i>x</i> ≤ 40</span>. "At least" means <span class="m">≥</span>.` }
  ],
  practice: [
    { q: `Write <span class="m"><i>x</i> &gt; −2</span> in interval notation and describe its graph.`, a: `<span class="m">(−2, ∞)</span>: open circle at −2, shaded to the right.` },
    { q: `A driver must be at least 16 years old. Write an inequality for the age <span class="m"><i>a</i></span> and its interval.`, a: `<span class="m"><i>a</i> ≥ 16</span>, <span class="m">[16, ∞)</span>.` },
    { q: `Is <span class="m"><i>x</i> = 4</span> a solution of <span class="m">3<i>x</i> − 5 ≤ 7</span>? Is <span class="m"><i>x</i> = 5</span>?`, a: `<span class="m">3(4) − 5 = 7</span> and <span class="m">7 ≤ 7</span> is true, so 4 is a solution. <span class="m">3(5) − 5 = 10</span> and <span class="m">10 ≤ 7</span> is false, so 5 is not.` },
    { q: `Write "all numbers greater than −1 and at most 5" as a double inequality, in interval notation and in set-builder notation.`, a: `<span class="m">−1 &lt; <i>x</i> ≤ 5</span>, <span class="m">(−1, 5]</span>, <span class="m">{<i>x</i> | −1 &lt; <i>x</i> ≤ 5}</span>.` }
  ],
  origin: `The symbols &lt; and &gt; first appeared in print in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631, ten years after his death. The symbols for "less than or equal to" and "greater than or equal to", in the form ≦ and ≧, are usually credited to the French mathematician Pierre Bouguer (1734).`
};

/* ------------------------------------------------------------------ */
ARITH["pa-functions"] = {
  title: "Introduction to Functions",
  short: "Each input gets exactly one output",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Functions · input, rule, output",
  hero: `<span class="m"><span class="c2"><i>x</i></span> &nbsp;→&nbsp; <span class="c1">[ 2<i>x</i> + 1 ]</span> &nbsp;→&nbsp; <span class="c3"><i>y</i></span></span>`,
  lede: `A function is a rule that gives each <span class="m c2">input</span> exactly one <span class="m c3">output</span>. Put a number in, apply the <span class="m c1">rule</span>, and one answer comes out.`,
  plain: `<p>Think of a vending machine. You press B4 and you get one particular snack. Press B4 again and you get the same snack. If pressing B4 sometimes gave chips and sometimes gave a candy bar, the machine would be broken. A <b>function</b> is a rule that behaves like a working machine: one input, one predictable output.</p>
<p>Two different buttons can give the same snack; that is fine. The only thing a function cannot do is give two different outputs for the same input. So <span class="m">{(1, 5), (2, 5)}</span> is a function, but <span class="m">{(4, 2), (4, −2)}</span> is not, because the input 4 has two outputs.</p>
<p>On a graph there is a quick test. Imagine sliding a vertical line across the picture. If it ever touches the graph in two places, some input has two outputs, and the graph is not a function. This is the <b>vertical line test</b>.</p>`,
  formal: `<p>A <b>function</b> is a relation in which each element of the domain corresponds to <b>exactly one</b> element of the range. The input variable is the <b>independent variable</b> and the output variable is the <b>dependent variable</b>, since its value depends on the input.</p>
<div class="display">function: for each <span class="c2"><i>x</i></span> in the domain there is exactly one <span class="c3"><i>y</i></span> with (<span class="c2"><i>x</i></span>, <span class="c3"><i>y</i></span>) in the relation<br><span class="dim">{(1, 5), (2, 5), (3, 7)} is a function; &nbsp;{(4, 2), (4, −2), (9, 3)} is not</span></div>
<p><b>Vertical line test</b>: a graph in the coordinate plane is the graph of a function of <span class="m"><i>x</i></span> if and only if no vertical line intersects it in more than one point. An equation such as <span class="m"><i>y</i> = 2<i>x</i> + 1</span> defines <span class="m"><i>y</i></span> as a function of <span class="m"><i>x</i></span>; the equation <span class="m"><i>y</i><sup>2</sup> = <i>x</i></span> does not, since <span class="m"><i>x</i> = 4</span> gives <span class="m"><i>y</i> = 2</span> and <span class="m"><i>y</i> = −2</span>. In function notation the output for input <span class="m"><i>x</i></span> is written <span class="m"><i>f</i>(<i>x</i>)</span>, read "<i>f</i> of <i>x</i>".</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Input", desc: "The independent variable: the value fed into the rule. The set of allowed inputs is the domain." },
    { c: "c1", sym: `2<i>x</i> + 1`, name: "Rule", desc: "What the function does to the input. It must give only one result for each input." },
    { c: "c3", sym: `<i>y</i>`, name: "Output", desc: "The dependent variable: the single value the rule produces. All outputs together form the range." }
  ],
  steps: { title: "How to decide whether a relation is a function", items: [
    `From a list or table: look for any input that appears more than once. If it has two different outputs, it is not a function.`,
    `From a mapping diagram: if any <span class="c2">input</span> has two or more arrows leaving it, it is not a function.`,
    `From a graph: apply the vertical line test. Two intersection points on one vertical line means not a function.`,
    `From an equation: solve for <span class="m"><i>y</i></span> if you can, and see whether one <span class="m"><i>x</i></span> can give two <span class="m"><i>y</i></span>-values (a ± or an even power of <span class="m"><i>y</i></span> is a warning sign).`,
    `Remember that repeated <span class="c3">outputs</span> are allowed. Only repeated inputs with different outputs break the rule.`
  ] },
  example: {
    prompt: `A café worker earns $18 an hour. Is weekly pay a function of hours worked? Make a table for 0, 10, 20 and 40 hours, and find the pay for a 32.5-hour week.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>P</i></span> = <span class="c1">18</span><span class="c2"><i>h</i></span></span>`, note: "Input h is hours, output P is pay in dollars, and the rule is multiply by 18." },
      { math: `<span class="m">(0, 0), (10, 180), (20, 360), (40, 720)</span>`, note: "Evaluate the rule at each input." },
      { math: `<span class="m">one <span class="c3"><i>P</i></span> for each <span class="c2"><i>h</i></span></span>`, note: "The same hours always give the same pay, so P is a function of h." },
      { math: `<span class="m"><span class="c3"><i>P</i></span> = 18(<span class="c2">32.5</span>) = <span class="c3">585</span></span>`, note: "Evaluate at h = 32.5." },
      { math: `<span class="m">18 × 32 + 18 × 0.5 = 576 + 9 = 585</span>`, note: "Check: 32 full hours plus half an hour." }
    ],
    answer: `Yes, pay is a function of hours, <span class="m"><i>P</i> = 18<i>h</i></span>. A 32.5-hour week pays <span class="m">$585</span>.`
  },
  why: `<p>Functions describe dependence: your pay depends on hours worked, a shipping cost depends on weight, the distance a car travels depends on time. Saying "y is a function of x" means that once you know x, y is completely determined, which is what makes prediction possible.</p>
<p>Functions are the central object of algebra, precalculus and calculus. Graphs, formulas, spreadsheets and computer programs are all ways of representing functions.</p>`,
  careers: [
    { role: "Actuary", use: "Models insurance cost as a function of age and risk factors to set premiums." },
    { role: "Software developer", use: "Writes functions in code that return one output for each set of inputs." },
    { role: "Economist", use: "Studies demand as a function of price to predict how sales respond to price changes." },
    { role: "HVAC technician", use: "Reads performance charts that give output capacity as a function of outdoor temperature." },
    { role: "Shipping clerk", use: "Looks up postage as a function of package weight from a rate table." }
  ],
  life: [
    "Using a price list where each item has one price",
    "Reading a tax table that gives one tax amount for each income",
    "Predicting a phone bill from the number of gigabytes used",
    "Converting temperatures, where each °C value has one °F value"
  ],
  fields: [
    { name: "Physics", use: "Position, velocity and energy are treated as functions of time." },
    { name: "Computer science", use: "Functions and procedures map inputs to outputs, and pure functions always return the same output for the same input." },
    { name: "Economics", use: "Cost, revenue and demand functions relate quantities to prices." }
  ],
  prereqWhy: {
    "pa-relations": "A function is a special kind of relation, so you need ordered pairs, tables, mappings, graphs, domain and range first."
  },
  unlocksWhy: {
    "pa-proportional": "A proportional relationship y = kx is a function whose rule multiplies every input by the same constant.",
    "pa-sequences": "An arithmetic sequence is a function whose inputs are the term numbers 1, 2, 3, ….",
    "a1-functions": "Function notation f(x), domain and range build directly on the definition and vertical line test introduced here."
  },
  beyond: [
    { field: "Algebra I", why: "Linear, quadratic and exponential functions and their graphs are the main models of the course." },
    { field: "Precalculus", why: "Composition, inverses, and polynomial, rational and trigonometric functions all extend this definition." },
    { field: "Calculus I", why: "Derivatives and integrals are operations performed on functions." },
    { field: "Statistics", why: "Regression finds a function that predicts one variable from another." }
  ],
  mistakes: [
    { wrong: `Saying <span class="m">{(1, 3), (2, 3), (5, 3)}</span> is not a function because 3 repeats.`, fix: `Repeated outputs are allowed. Each input has one output, so it is a function.` },
    { wrong: `Using a horizontal line to test a graph.`, fix: `Use a <b>vertical</b> line. A vertical line picks one input, and it must meet the graph at most once.` },
    { wrong: `Deciding that a circle such as <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25</span> is a function.`, fix: `The vertical line <span class="m"><i>x</i> = 3</span> meets it at <span class="m">(3, 4)</span> and <span class="m">(3, −4)</span>, so it is not a function of <span class="m"><i>x</i></span>.` }
  ],
  practice: [
    { q: `Is <span class="m">{(1, 3), (2, 5), (3, 5)}</span> a function?`, a: `Yes. Each input 1, 2, 3 has exactly one output; the repeated output 5 is allowed.` },
    { q: `Is <span class="m">{(4, 2), (4, −2), (9, 3)}</span> a function?`, a: `No. The input 4 is paired with two outputs, 2 and −2.` },
    { q: `Does <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> define <span class="m"><i>y</i></span> as a function of <span class="m"><i>x</i></span>? Does <span class="m"><i>y</i><sup>2</sup> = <i>x</i></span>?`, a: `<span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> is a function: each <span class="m"><i>x</i></span> has one square. <span class="m"><i>y</i><sup>2</sup> = <i>x</i></span> is not: <span class="m"><i>x</i> = 4</span> gives <span class="m"><i>y</i> = 2</span> or <span class="m"><i>y</i> = −2</span>.` },
    { q: `A function has rule <span class="m"><i>y</i> = 3<i>x</i> − 4</span>. Find the outputs for the inputs −2, 0 and 5, write the ordered pairs, and say which of these inputs gives the output 11.`, a: `<span class="m">3(−2) − 4 = −10</span>, <span class="m">3(0) − 4 = −4</span>, <span class="m">3(5) − 4 = 11</span>. Pairs <span class="m">(−2, −10), (0, −4), (5, 11)</span>. The input 5 gives 11.` }
  ],
  origin: `Gottfried Wilhelm Leibniz used the word "function" in the 1670s to 1690s for quantities related to a curve. Leonhard Euler introduced the notation <i>f</i>(<i>x</i>) in 1734, and Peter Gustav Lejeune Dirichlet in 1837 described a function as any rule that assigns to each <i>x</i> a single <i>y</i>, the idea used today.`
};
