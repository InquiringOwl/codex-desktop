window.ARITH = window.ARITH || {};

ARITH["multiplication"] = {
  title: "Multiplication",
  short: "Equal groups, counted fast.",
  grade: "Grades 2–5",
  hours: 12,
  voice: "young",
  eyebrow: "Operations · equal groups and area",
  hero: `<span class="m"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span></span>`,
  lede: `Multiplication counts equal groups: a groups of b. A rectangle a wide and b tall covers a × b unit squares.`,
  plain: `<p>You have 4 bags with 6 marbles in each. You could add <span class="m">6 + 6 + 6 + 6 = 24</span>. Multiplication is the fast way: <span class="m">4 × 6 = 24</span>. The numbers you multiply are <b>factors</b>. The answer is the <b>product</b>.</p>
<p>You can also picture a rectangle of dots with 4 rows and 6 columns. Count them and you get 24. Turn the rectangle sideways and it has 6 rows of 4. Still 24. So <span class="m">4 × 6 = 6 × 4</span>.</p>
<p>For bigger numbers, break them into tens and ones. To find <span class="m">23 × 47</span>, split the rectangle into four smaller boxes: 20 × 40, 20 × 7, 3 × 40 and 3 × 7. These are the <b>partial products</b>. Add them up and you have the answer.</p>
<p>Knowing the facts up to <span class="m">10 × 10</span> by heart makes all of this much faster.</p>`,
  formal: `<p><b>Multiplication</b> on the whole numbers can be defined recursively by <span class="m"><i>a</i> × 0 = 0</span> and <span class="m"><i>a</i> × (<i>b</i> + 1) = <i>a</i> × <i>b</i> + <i>a</i></span>. For sets, <span class="m"><i>a</i> × <i>b</i> = |<i>A</i> × <i>B</i>|</span>, the number of ordered pairs from sets of sizes <i>a</i> and <i>b</i>.</p>
<div class="display"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span> &nbsp;&nbsp;<span class="dim">(factor × factor = product)</span><br>(10<i>a</i><sub>1</sub> + <i>a</i><sub>0</sub>)(10<i>b</i><sub>1</sub> + <i>b</i><sub>0</sub>) = <span class="c1">100<i>a</i><sub>1</sub><i>b</i><sub>1</sub> + 10<i>a</i><sub>1</sub><i>b</i><sub>0</sub> + 10<i>a</i><sub>0</sub><i>b</i><sub>1</sub> + <i>a</i><sub>0</sub><i>b</i><sub>0</sub></span></div>
<p>The standard and area-model algorithms rest on the <b>distributive property</b> <span class="m"><i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i></span>. Multiplication is commutative and associative, has identity 1 (<span class="m"><i>a</i> × 1 = <i>a</i></span>), and satisfies the <b>zero property</b> <span class="m"><i>a</i> × 0 = 0</span>. Notation: <span class="m"><i>a</i> × <i>b</i></span>, <span class="m"><i>a</i> · <i>b</i></span>, or <span class="m"><i>ab</i></span> in algebra.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First factor", desc: "The number of groups, or the width of the rectangle." },
    { c: "c3", sym: `<i>b</i>`, name: "Second factor", desc: "The size of each group, or the height of the rectangle." },
    { c: "c1", sym: `20 × 40`, name: "Partial products", desc: "Products of the place-value parts of each factor. Each is one box of the area model." },
    { c: "c5", sym: `<i>p</i>`, name: "Product", desc: "The total: the sum of all the partial products." }
  ],
  steps: { title: "How to multiply two-digit numbers with an area model", items: [
    `Split each factor into tens and ones, for example <span class="m">23 = 20 + 3</span> and <span class="m">47 = 40 + 7</span>.`,
    `Draw a rectangle and divide it into a grid: one column per part of the first factor, one row per part of the second.`,
    `Multiply to fill each box. Use a basic fact and then attach zeros: <span class="m">20 × 40 = 2 × 4 × 100 = 800</span>.`,
    `Add all the partial products.`,
    `Check by estimating: round each factor and multiply.`
  ] },
  example: {
    prompt: `A concert hall has 23 rows with 47 seats in each row. How many seats are there?`,
    lines: [
      { math: `<span class="c2">23</span> × <span class="c3">47</span> = (20 + 3) × (40 + 7)`, note: "Split each factor by place value." },
      { math: `20 × 40 = <span class="c1">800</span>`, note: "Tens times tens." },
      { math: `20 × 7 = <span class="c1">140</span>`, note: "Tens times ones." },
      { math: `3 × 40 = <span class="c1">120</span>`, note: "Ones times tens." },
      { math: `3 × 7 = <span class="c1">21</span>`, note: "Ones times ones." },
      { math: `800 + 140 + 120 + 21 = <span class="c5">1,081</span>`, note: "Add the four partial products." },
      { math: `20 × 50 = 1,000 &nbsp;<span class="dim">(estimate)</span>`, note: "Rounded factors give about 1,000, so 1,081 is reasonable." }
    ],
    answer: `The hall has <span class="m c5">1,081</span> seats.`
  },
  why: `<p>Multiplication shows up whenever you have many copies of the same amount: the cost of 12 items at the same price, pay for 40 hours at an hourly rate, the area of a floor, the number of tiles for a wall. It turns long repeated additions into one step.</p>
<p>It is also the gateway to most of higher math. Division, fractions, ratios, percents and exponents are all defined through multiplication. Areas and volumes are products. In algebra, factoring and expanding expressions use the same distributive idea as the area model.</p>`,
  careers: [
    { role: "Nurse", use: "Multiplies a dose in mg per kg by a patient's weight in kg to find the total dose ordered." },
    { role: "Electrician", use: "Multiplies current by voltage to find the power a circuit draws in watts." },
    { role: "Flooring installer", use: "Multiplies room length by width to find square footage and order enough material." },
    { role: "Payroll specialist", use: "Multiplies hours worked by hourly rate, and overtime hours by 1.5 times the rate." },
    { role: "Chef", use: "Multiplies each ingredient amount in a recipe by a scale factor to cook for more guests." },
    { role: "Retail buyer", use: "Multiplies unit cost by order quantity to price a purchase order." }
  ],
  life: [
    "Finding the cost of several items with the same price",
    "Figuring weekly pay from an hourly wage",
    "Doubling or tripling a recipe",
    "Working out the area of a room for paint or carpet",
    "Counting items packed in rows and columns, like eggs in a carton"
  ],
  fields: [
    { name: "Geometry", use: "Areas of rectangles and volumes of boxes are products of lengths." },
    { name: "Physics", use: "Many laws are products, such as distance = rate × time and force = mass × acceleration." },
    { name: "Economics", use: "Revenue is price times quantity sold." },
    { name: "Computer science", use: "Counting the steps in nested loops and the size of a grid of data uses multiplication." }
  ],
  prereqWhy: {
    "addition": "Multiplication begins as repeated addition, and every multi-digit method finishes by adding partial products."
  },
  unlocksWhy: {
    "division": "Division asks how many times the divisor fits into the dividend, and each step of long division uses a multiplication fact.",
    "properties": "The commutative, associative and distributive laws describe how multiplication behaves and why the algorithms work.",
    "exponents": "An exponent is a count of repeated multiplications of the same base.",
    "decimal-ops": "Multiplying decimals is whole-number multiplication followed by placing the decimal point."
  },
  beyond: [
    { field: "Algebra I", why: "Expanding and factoring polynomials uses the same distributive pattern as the area model." },
    { field: "Linear algebra", why: "Matrix multiplication is built from many products and sums of numbers." },
    { field: "Number theory", why: "Primes, factors and divisibility are all questions about how numbers multiply." }
  ],
  mistakes: [
    { wrong: `Multiplying only tens by tens and ones by ones: <span class="m">23 × 47 = 800 + 21 = 821</span>.`, fix: `Every part of one factor multiplies every part of the other. There are four partial products, and the answer is <span class="m">1,081</span>.` },
    { wrong: `Thinking <span class="m">20 × 40 = 80</span>.`, fix: `<span class="m">20 × 40 = 2 × 4 × 10 × 10 = 800</span>. Both zeros count.` },
    { wrong: `Believing <span class="m">7 × 0 = 7</span>.`, fix: `Seven groups of zero is zero: <span class="m">7 × 0 = 0</span>. Multiplying by 1 leaves a number unchanged.` }
  ],
  practice: [
    { q: `<span class="m">7 × 8</span>`, a: `<b>56</b>.` },
    { q: `<span class="m">36 × 5</span>`, a: `<span class="m">30 × 5 + 6 × 5 = 150 + 30 = </span><b>180</b>.` },
    { q: `<span class="m">48 × 25</span>`, a: `<span class="m">40 × 20 + 40 × 5 + 8 × 20 + 8 × 5 = 800 + 200 + 160 + 40 = </span><b>1,200</b>.` },
    { q: `A school orders 124 boxes of pencils with 37 pencils in each box. How many pencils is that?`, a: `<span class="m">124 × 37 = 124 × 30 + 124 × 7 = 3,720 + 868 = </span><b>4,588</b> pencils.` }
  ],
  origin: `William Oughtred introduced the × sign in his <i>Clavis Mathematicae</i> (1631). Gottfried Leibniz favoured a raised dot for multiplication, in part to avoid confusion with the letter x. Multiplication tables appear on Babylonian clay tablets from about 4,000 years ago.`
};
