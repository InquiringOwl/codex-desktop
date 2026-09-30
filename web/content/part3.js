window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
ARITH["ratios"] = {
  title: "Ratios & Rates",
  short: "Comparing two quantities by division",
  grade: "Grade 6",
  hours: 5,
  voice: "mixed",
  eyebrow: "Multiplicative reasoning · ratios and rates",
  hero: `<span class="m"><span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>a</i></span> : <span class="c4"><i>k</i></span><span class="c3"><i>b</i></span></span>`,
  lede: `A ratio says how much of one thing there is for each amount of another. Scaling both parts by the same number <span class="m c4"><i>k</i></span> keeps the ratio the same.`,
  plain: `<p>Say a lemonade recipe uses 2 cups of concentrate for every 5 cups of water. That is a <b>ratio</b> of 2 to 5, written <span class="m">2 : 5</span>. It tells you the mix, not the size of the batch.</p>
<p>Double the batch and you use 4 cups and 10 cups. Triple it and you use 6 and 15. The drink tastes the same each time because both parts grew by the same factor. Those are <b>equivalent ratios</b>.</p>
<p>A <b>rate</b> is a ratio between two different kinds of things, like miles and hours or dollars and ounces. When you shrink a rate so the second amount is 1, you get a <b>unit rate</b>: 60 miles per 1 hour, or 29 cents per 1 ounce. Unit rates make comparisons easy.</p>`,
  formal: `<p>For quantities <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> with <span class="m"><i>b</i> ≠ 0</span>, the <b>ratio</b> <span class="m"><i>a</i> : <i>b</i></span> is the comparison of <span class="m"><i>a</i></span> to <span class="m"><i>b</i></span> by division, with associated value <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span>. Order matters: <span class="m"><i>a</i> : <i>b</i></span> and <span class="m"><i>b</i> : <i>a</i></span> are different ratios.</p>
<div class="display">Equivalence: <span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <i>c</i> : <i>d</i> &nbsp;⇔&nbsp; <i>ad</i> = <i>bc</i> &nbsp;<span class="dim">(<i>b</i>, <i>d</i> ≠ 0)</span><br>Scaling: <span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>a</i></span> : <span class="c4"><i>k</i></span><span class="c3"><i>b</i></span> &nbsp;for any <span class="c4"><i>k</i></span> ≠ 0<br>Unit rate of <i>a</i> per <i>b</i>: <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> : 1</div>
<p>A ratio of whole numbers is in <b>simplest form</b> when <span class="m">gcd(<i>a</i>, <i>b</i>) = 1</span>. A <b>rate</b> is a ratio of quantities measured in different units. Its unit is the quotient of the two units, such as mi/h.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First quantity", desc: "The amount named first. In 2 : 5 lemonade, it is the 2 cups of concentrate." },
    { c: "c3", sym: `<i>b</i>`, name: "Second quantity", desc: "The amount it is compared to. Here, the 5 cups of water." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "The number both parts are multiplied by. Any nonzero k gives an equivalent ratio." },
    { c: "c1", sym: `<span class="fr"><span><i>a</i></span><span><i>b</i></span></span>`, name: "Value of the ratio", desc: "The single number a ÷ b. Equivalent ratios all have the same value." }
  ],
  steps: { title: "How to work with a ratio", items: [
    `Write the quantities in the order the question names them, as <span class="m"><i>a</i> : <i>b</i></span>.`,
    `Simplify by dividing both parts by their greatest common factor.`,
    `To scale up or down, multiply both parts by the same factor <span class="m c4"><i>k</i></span>.`,
    `If you know the total, add the parts to get the number of equal shares, then find the size of one share.`,
    `For a rate, divide so the second quantity is 1 to get the unit rate. Keep the units attached.`
  ] },
  example: {
    prompt: `A lemonade mix uses concentrate and water in the ratio <span class="m">2 : 5</span>. You need 21 cups of lemonade for a party. How much of each do you use?`,
    lines: [
      { math: `<span class="m"><span class="c2">2</span> + <span class="c3">5</span> = 7</span>`, note: "Each batch unit has 7 equal parts in total." },
      { math: `<span class="m">21 ÷ 7 = <span class="c4">3</span></span>`, note: "Each part is 3 cups, so the scale factor is 3." },
      { math: `<span class="m"><span class="c4">3</span> × <span class="c2">2</span> = 6</span>`, note: "Cups of concentrate." },
      { math: `<span class="m"><span class="c4">3</span> × <span class="c3">5</span> = 15</span>`, note: "Cups of water." },
      { math: `<span class="m">6 : 15 = 2 : 5</span>`, note: "Check: dividing both by 3 gives back the original ratio, and 6 + 15 = 21." }
    ],
    answer: `Use <span class="m">6</span> cups of concentrate and <span class="m">15</span> cups of water.`
  },
  why: `<p>Ratios and rates are how people compare prices, mix ingredients, read maps and talk about speed. A unit price on a grocery shelf tag is a rate. So is a car's fuel economy and a nurse's drip rate.</p>
<p>In later math, ratios become slopes of lines, the trigonometric ratios of triangles, and the scale factors of similar figures. Nearly every formula in science that has a "per" in it is a rate.</p>`,
  careers: [
    { role: "Pharmacy technician", use: "Mixes solutions in fixed ratios, such as 1 part concentrate to 4 parts diluent, and scales them to the volume ordered." },
    { role: "Chef", use: "Scales recipes up or down by multiplying every ingredient by the same factor so flavours stay balanced." },
    { role: "Cartographer", use: "Sets and reads map scales such as 1 : 24,000, where one unit on the map equals 24,000 of the same units on the ground." },
    { role: "Retail buyer", use: "Compares supplier offers by unit cost per item or per ounce before placing orders." },
    { role: "Concrete finisher", use: "Mixes cement, sand and gravel in ratios such as 1 : 2 : 3 by volume for the required strength." },
    { role: "Sports analyst", use: "Reports rates such as points per game and strikeouts per nine innings to compare players with different playing time." }
  ],
  life: [
    "Comparing unit prices to find the better buy at the grocery store",
    "Mixing concentrate, fertiliser or paint thinner at the label's ratio",
    "Working out your car's miles per gallon",
    "Scaling a recipe for more or fewer people",
    "Reading a map scale to estimate walking distance"
  ],
  fields: [
    { name: "Chemistry", use: "Mole ratios from balanced equations tell how much of each reactant combines." },
    { name: "Physics", use: "Speed, density and pressure are all rates: distance per time, mass per volume, force per area." },
    { name: "Economics", use: "Prices, exchange rates and debt-to-income ratios compare one quantity to another." },
    { name: "Architecture", use: "Scale drawings use a fixed ratio between drawing length and building length." }
  ],
  prereqWhy: {
    "fractions": "A ratio a : b has the value a/b, and simplifying or scaling a ratio works exactly like finding equivalent fractions."
  },
  unlocksWhy: {
    "proportions": "A proportion is a statement that two ratios are equal, used to find a missing quantity."
  },
  beyond: [
    { field: "Algebra I", why: "The slope of a line is the rate of change in y per unit change in x." },
    { field: "Geometry", why: "Similar figures have corresponding sides in the same ratio, which drives scale drawings and indirect measurement." },
    { field: "Trigonometry", why: "Sine, cosine and tangent are defined as ratios of side lengths in a right triangle." }
  ],
  mistakes: [
    { wrong: `Writing the ratio of 12 girls to 15 boys as <span class="m">15 : 12</span>.`, fix: `Keep the order of the words. Girls to boys is <span class="m">12 : 15 = 4 : 5</span>.` },
    { wrong: `Scaling by adding: turning <span class="m">2 : 5</span> into <span class="m">4 : 7</span> by adding 2 to each part.`, fix: `Scale by multiplying both parts by the same factor. <span class="m">2 : 5 = 4 : 10</span>.` },
    { wrong: `Mixing part-to-part with part-to-whole: saying 2 : 5 lemonade is "2/5 concentrate".`, fix: `With 2 parts concentrate and 5 parts water there are 7 parts in all, so concentrate is <span class="m"><span class="fr"><span>2</span><span>7</span></span></span> of the drink.` }
  ],
  practice: [
    { q: `Write <span class="m">18 : 24</span> in simplest form.`, a: `<span class="m">gcd(18, 24) = 6</span>, so <span class="m">18 : 24 = 3 : 4</span>.` },
    { q: `A class has 12 girls and 15 boys. What is the ratio of girls to all students, in simplest form?`, a: `There are <span class="m">12 + 15 = 27</span> students. <span class="m">12 : 27 = 4 : 9</span>.` },
    { q: `A car goes 222 miles on 6 gallons of gas. What is its unit rate?`, a: `<span class="m">222 ÷ 6 = 37</span>, so 37 miles per gallon.` },
    { q: `Which is the better buy: 12 oz of cereal for $3.48 or 20 oz for $5.40?`, a: `<span class="m">3.48 ÷ 12 = 0.29</span> and <span class="m">5.40 ÷ 20 = 0.27</span>. The 20 oz box is cheaper per ounce ($0.27 vs $0.29).` }
  ],
  origin: `The Greek mathematician Eudoxus of Cnidus (4th century BCE) developed a theory of ratio and proportion that works even for lengths with no common measure. Euclid preserved it in Book V of the <i>Elements</i> (c. 300 BCE).`
};

/* ------------------------------------------------------------------ */
ARITH["fraction-ops"] = {
  title: "Operations with Fractions",
  short: "Add, subtract, multiply and divide fractions",
  grade: "Grades 4–6",
  hours: 10,
  voice: "mixed",
  eyebrow: "Rational numbers · the four operations",
  hero: `<span class="m"><span class="c2"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> + <span class="c3"><span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> = <span class="c1"><span class="fr"><span><i>ad</i> + <i>bc</i></span><span class="c4"><i>bd</i></span></span></span></span>`,
  lede: `You can only add pieces that are the same size. Rewrite both fractions over a <span class="m c4">common denominator</span>, then add the numerators.`,
  plain: `<p>Two thirds of a pizza plus three quarters of a pizza. How much is that? You cannot just add the tops and bottoms. Thirds and quarters are different-sized slices, so first you cut both pizzas into slices of the same size. Twelfths work: two thirds is 8 twelfths, three quarters is 9 twelfths, and together they make 17 twelfths.</p>
<p>That is the whole idea behind adding and subtracting fractions. Find a <b>common denominator</b>, rename each fraction, then add or subtract the numerators. The denominator stays the same because the slice size did not change.</p>
<p>Multiplying is simpler. "Two thirds of three quarters" means multiply tops and multiply bottoms. Dividing asks "how many of these fit into that?" You answer it by flipping the second fraction and multiplying.</p>`,
  formal: `<p>For integers <span class="m"><i>a</i>, <i>b</i>, <i>c</i>, <i>d</i></span> with <span class="m"><i>b</i>, <i>d</i> ≠ 0</span>, the operations on ℚ are defined by:</p>
<div class="display"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> ± <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>ad</i> ± <i>bc</i></span><span><i>bd</i></span></span> &nbsp;&nbsp; <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> × <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>ac</i></span><span><i>bd</i></span></span> &nbsp;&nbsp; <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> ÷ <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> × <span class="fr"><span><i>d</i></span><span><i>c</i></span></span> <span class="dim">(<i>c</i> ≠ 0)</span></div>
<p>The <b>least common denominator</b> is <span class="m c4"><i>L</i> = lcm(<i>b</i>, <i>d</i>)</span>, giving <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> + <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>a</i>(<i>L</i>/<i>b</i>) + <i>c</i>(<i>L</i>/<i>d</i>)</span><span><i>L</i></span></span></span>. The fraction <span class="m"><span class="fr"><span><i>d</i></span><span><i>c</i></span></span></span> is the <b>reciprocal</b> (multiplicative inverse) of <span class="m"><span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span>. Results are usually reduced to lowest terms by dividing numerator and denominator by their gcd.</p>`,
  legend: [
    { c: "c2", sym: `<span class="fr"><span><i>a</i></span><span><i>b</i></span></span>`, name: "First fraction", desc: "The first operand. On the lab's top bar." },
    { c: "c3", sym: `<span class="fr"><span><i>c</i></span><span><i>d</i></span></span>`, name: "Second fraction", desc: "The second operand. On the lab's lower bar." },
    { c: "c4", sym: `<i>L</i>`, name: "Common denominator", desc: "A shared slice size both fractions can be written in. The least one is lcm(b, d)." },
    { c: "c1", sym: `<i>R</i>`, name: "Result", desc: "The sum, difference, product or quotient, reduced to lowest terms." }
  ],
  steps: { title: "How to operate on fractions", items: [
    `<b>Add or subtract:</b> find the least common denominator <span class="m c4">lcm(<i>b</i>, <i>d</i>)</span>.`,
    `Rename each fraction by multiplying its numerator and denominator by the same number so the denominator is <span class="m c4"><i>L</i></span>.`,
    `Add or subtract the numerators. Keep the denominator.`,
    `<b>Multiply:</b> multiply numerators and multiply denominators. Cancel common factors first to keep numbers small.`,
    `<b>Divide:</b> keep the first fraction, change ÷ to ×, and use the reciprocal of the second.`,
    `Reduce the answer to lowest terms. Convert to a mixed number if the context calls for it.`
  ] },
  example: {
    prompt: `You are baking. The cookies need <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> cup of flour and the bread needs <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> cup. Your bag holds <span class="m">2<span class="fr"><span>1</span><span>2</span></span></span> cups. How much flour do you use, and how much is left?`,
    lines: [
      { math: `<span class="m"><span class="c4">lcm(3, 4) = 12</span></span>`, note: "Twelfths are the smallest slice both thirds and quarters fit into." },
      { math: `<span class="m"><span class="c2"><span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>8</span><span>12</span></span></span>, &nbsp;<span class="c3"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>9</span><span>12</span></span></span></span>`, note: "Multiply 2/3 by 4/4 and 3/4 by 3/3." },
      { math: `<span class="m"><span class="fr"><span>8</span><span>12</span></span> + <span class="fr"><span>9</span><span>12</span></span> = <span class="c1"><span class="fr"><span>17</span><span>12</span></span></span> = 1<span class="fr"><span>5</span><span>12</span></span></span>`, note: "Flour used." },
      { math: `<span class="m">2<span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>5</span><span>2</span></span> = <span class="fr"><span>30</span><span>12</span></span></span>`, note: "Write the bag's amount in twelfths too." },
      { math: `<span class="m"><span class="fr"><span>30</span><span>12</span></span> − <span class="fr"><span>17</span><span>12</span></span> = <span class="c1"><span class="fr"><span>13</span><span>12</span></span></span> = 1<span class="fr"><span>1</span><span>12</span></span></span>`, note: "Flour left over." }
    ],
    answer: `You use <span class="m">1<span class="fr"><span>5</span><span>12</span></span></span> cups and have <span class="m">1<span class="fr"><span>1</span><span>12</span></span></span> cups left.`
  },
  why: `<p>Fractions show up whenever something is shared or measured in parts: recipes, tape measures in inches, music time signatures, stock splits and medicine doses. Being able to combine them exactly, without rounding to decimals, avoids small errors that add up.</p>
<p>Algebra is built on these rules. Adding rational expressions such as <span class="m"><span class="fr"><span>1</span><span><i>x</i></span></span> + <span class="fr"><span>1</span><span><i>x</i> + 1</span></span></span> uses the same common-denominator method, and solving equations constantly multiplies by reciprocals.</p>`,
  careers: [
    { role: "Carpenter", use: "Adds and subtracts measurements such as 5 3/8 in and 2 11/16 in read off a tape measure marked in sixteenths." },
    { role: "Machinist", use: "Works to fractional-inch tolerances and subtracts cut widths from stock lengths." },
    { role: "Baker", use: "Multiplies fractional ingredient amounts when scaling a recipe by 3/4 or 1 1/2." },
    { role: "Nurse", use: "Divides a prescribed dose by the strength of a tablet, such as 3/4 mg ÷ 1/4 mg per tablet = 3 tablets." },
    { role: "Musician", use: "Checks that note values in a bar, like 1/4 + 1/8 + 1/8 + 1/2, add up to the time signature." },
    { role: "Tailor", use: "Adds seam allowances such as 5/8 in to pattern measurements." }
  ],
  life: [
    "Doubling or halving a recipe with 2/3 or 3/4 cup amounts",
    "Adding lengths on a tape measure marked in eighths and sixteenths",
    "Splitting a pizza or bill into equal fractional shares",
    "Working out how many 3/4-cup servings are in a container"
  ],
  fields: [
    { name: "Engineering drafting", use: "Imperial drawings dimension parts in fractions of an inch that must be added and subtracted exactly." },
    { name: "Music theory", use: "Rhythms are fractions of a whole note that must sum to the measure." },
    { name: "Probability", use: "Probabilities of combined events are found by adding and multiplying fractions." }
  ],
  prereqWhy: {
    "fractions": "You need to understand what a fraction means and how to make equivalent fractions before you can combine them.",
    "gcf-lcm": "The least common denominator is the LCM of the denominators, and reducing results uses the GCF."
  },
  unlocksWhy: {
    "proportions": "Solving a proportion means working with equal fractions, cross-multiplying and simplifying.",
    "real-numbers": "The rational numbers ℚ are defined by fractions, and their closure under these four operations is a key property of the number system."
  },
  beyond: [
    { field: "Algebra I", why: "Solving equations with fractional coefficients and clearing denominators uses these rules directly." },
    { field: "Algebra II", why: "Rational expressions are added, subtracted, multiplied and divided with exactly the same procedures." },
    { field: "Calculus", why: "Partial fractions and simplifying difference quotients depend on fluent fraction algebra." }
  ],
  mistakes: [
    { wrong: `<span class="m"><span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>3</span></span> = <span class="fr"><span>2</span><span>5</span></span></span> (adding tops and bottoms).`, fix: `Use a common denominator: <span class="m"><span class="fr"><span>3</span><span>6</span></span> + <span class="fr"><span>2</span><span>6</span></span> = <span class="fr"><span>5</span><span>6</span></span></span>. A sum of two positive numbers cannot be smaller than one of them, and 2/5 is less than 1/2.` },
    { wrong: `Flipping the first fraction when dividing: <span class="m"><span class="fr"><span>2</span><span>3</span></span> ÷ <span class="fr"><span>4</span><span>5</span></span> = <span class="fr"><span>3</span><span>2</span></span> × <span class="fr"><span>4</span><span>5</span></span></span>.`, fix: `Flip only the divisor: <span class="m"><span class="fr"><span>2</span><span>3</span></span> × <span class="fr"><span>5</span><span>4</span></span> = <span class="fr"><span>10</span><span>12</span></span> = <span class="fr"><span>5</span><span>6</span></span></span>.` },
    { wrong: `Finding a common denominator before multiplying.`, fix: `It is not wrong, just unnecessary. For multiplication, multiply straight across: <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> × <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>ac</i></span><span><i>bd</i></span></span></span>.` }
  ],
  practice: [
    { q: `<span class="m"><span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>3</span><span>8</span></span></span>`, a: `<span class="m"><span class="fr"><span>2</span><span>8</span></span> + <span class="fr"><span>3</span><span>8</span></span> = <span class="fr"><span>5</span><span>8</span></span></span>` },
    { q: `<span class="m"><span class="fr"><span>5</span><span>6</span></span> − <span class="fr"><span>3</span><span>4</span></span></span>`, a: `LCD 12: <span class="m"><span class="fr"><span>10</span><span>12</span></span> − <span class="fr"><span>9</span><span>12</span></span> = <span class="fr"><span>1</span><span>12</span></span></span>` },
    { q: `<span class="m"><span class="fr"><span>4</span><span>9</span></span> × <span class="fr"><span>3</span><span>8</span></span></span>`, a: `Cancel first: <span class="m"><span class="fr"><span>1</span><span>3</span></span> × <span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>1</span><span>6</span></span></span> (check: 12/72 = 1/6).` },
    { q: `A container holds <span class="m">2<span class="fr"><span>1</span><span>4</span></span></span> cups of yogurt. How many <span class="m"><span class="fr"><span>3</span><span>8</span></span></span>-cup servings is that?`, a: `<span class="m"><span class="fr"><span>9</span><span>4</span></span> ÷ <span class="fr"><span>3</span><span>8</span></span> = <span class="fr"><span>9</span><span>4</span></span> × <span class="fr"><span>8</span><span>3</span></span> = <span class="fr"><span>72</span><span>12</span></span> = 6</span> servings.` }
  ],
  origin: `Egyptian scribes of the Rhind papyrus (c. 1550 BCE) calculated with unit fractions such as 1/3 and 1/5. The Indian mathematician Brahmagupta gave general rules for fraction arithmetic in 628 CE, and the horizontal fraction bar reached Europe through Fibonacci's <i>Liber Abaci</i> (1202).`
};

/* ------------------------------------------------------------------ */
ARITH["decimal-ops"] = {
  title: "Operations with Decimals",
  short: "Add, subtract, multiply and divide decimals",
  grade: "Grades 5–6",
  hours: 8,
  voice: "mixed",
  eyebrow: "Base ten · decimal arithmetic",
  hero: `<span class="m"><span class="c2">0.3</span> × <span class="c3">0.4</span> = <span class="c1">0.12</span></span>`,
  lede: `Three tenths of four tenths is twelve hundredths. The decimal places of the factors add up in the product.`,
  plain: `<p>Decimals are just base-ten numbers that keep going to the right of the ones place. So adding and subtracting them works like whole numbers, as long as you line up the decimal points. Tenths go under tenths, hundredths under hundredths.</p>
<p>Multiplying is where people get surprised. Take <span class="m">0.3 × 0.4</span>. Picture a square cut into a 10 by 10 grid. Shade 3 columns and 4 rows. The overlap is 12 little squares out of 100, so the answer is 0.12. Tenths times tenths gives hundredths. That is why you count the decimal places in both numbers and put that many in the answer.</p>
<p>To divide by a decimal, slide the decimal point in both numbers the same number of places until the divisor is a whole number. The answer does not change, because you multiplied both by the same power of ten.</p>`,
  formal: `<p>A terminating decimal with <span class="m"><i>j</i></span> digits after the point is the fraction <span class="m"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> for some integer <span class="m"><i>m</i></span>. The operations follow from fraction arithmetic:</p>
<div class="display"><span class="c2"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> × <span class="c3"><span class="fr"><span><i>n</i></span><span>10<sup><i>k</i></sup></span></span></span> = <span class="c1"><span class="fr"><span><i>mn</i></span><span>10<sup><i>j</i>+<i>k</i></sup></span></span></span><br><i>x</i> ÷ <i>y</i> = (<i>x</i> · 10<sup><i>k</i></sup>) ÷ (<i>y</i> · 10<sup><i>k</i></sup>) &nbsp;<span class="dim">(<i>y</i> ≠ 0)</span></div>
<p>For addition and subtraction, write both numbers over the common denominator <span class="m">10<sup>max(<i>j</i>,<i>k</i>)</sup></span>, which is what aligning decimal points does. A quotient of terminating decimals may be a repeating decimal, for example <span class="m">1 ÷ 0.3 = 3.333…</span></p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "First factor", desc: "Shown as shaded columns on the hundredths grid." },
    { c: "c3", sym: `<i>y</i>`, name: "Second factor", desc: "Shown as shaded rows on the grid." },
    { c: "c1", sym: `<i>xy</i>`, name: "Product", desc: "The overlap of the rows and columns. Its decimal places equal the sum of the factors' decimal places." },
    { c: "c4", sym: `10<sup><i>k</i></sup>`, name: "Power of ten", desc: "Multiplying by 10 moves every digit one place left. Used to clear the decimal from a divisor." }
  ],
  steps: { title: "How to compute with decimals", items: [
    `<b>Add or subtract:</b> line up the decimal points. Fill empty places with zeros.`,
    `Compute as with whole numbers and bring the decimal point straight down.`,
    `<b>Multiply:</b> ignore the points and multiply the digits as whole numbers.`,
    `Count the total decimal places in both factors and place the point that many places from the right.`,
    `<b>Divide:</b> move the point in the divisor right until it is a whole number. Move the dividend's point the same number of places.`,
    `Divide as usual, putting the quotient's point directly above the dividend's point.`,
    `Estimate with rounded numbers to check the size of the answer.`
  ] },
  example: {
    prompt: `Cheese costs $6.40 per pound. You buy 2.75 pounds and pay with a $20 bill. What is the cost, and what is your change?`,
    lines: [
      { math: `<span class="m">275 × 640 = 176,000</span>`, note: "Multiply the digits as whole numbers." },
      { math: `<span class="m">2 + 2 = 4</span> decimal places`, note: "2.75 has two decimal places and 6.40 has two." },
      { math: `<span class="m"><span class="c2">2.75</span> × <span class="c3">6.40</span> = <span class="c1">17.6000</span> = 17.60</span>`, note: "Place the point four places from the right." },
      { math: `<span class="m">3 × 6 = 18</span>`, note: "Estimate: about 3 lb at about $6 is about $18, so $17.60 is reasonable." },
      { math: `<span class="m">20.00 − 17.60 = 2.40</span>`, note: "Line up the points to subtract." }
    ],
    answer: `The cheese costs <span class="m">$17.60</span> and your change is <span class="m">$2.40</span>.`
  },
  why: `<p>Money, measurements and data are almost always decimals. Every receipt, fuel pump, bank statement and lab reading needs decimal arithmetic, and one misplaced point is a factor-of-ten error.</p>
<p>Calculators and spreadsheets do the digits for you, but you still need to know where the point should go to catch mistakes. Decimal fluency also underlies percents, scientific notation, statistics and the metric system.</p>`,
  careers: [
    { role: "Bank teller", use: "Adds and subtracts deposits and withdrawals to the cent and balances the cash drawer at the end of a shift." },
    { role: "Machinist", use: "Adds and subtracts dimensions measured to thousandths of an inch, like 1.250 in − 0.375 in, when setting cuts." },
    { role: "Pharmacist", use: "Multiplies decimal doses such as 0.25 mg per tablet by the number of tablets, where a misplaced point is a tenfold error." },
    { role: "Payroll clerk", use: "Multiplies hours such as 37.5 by hourly rates such as $22.80 to compute gross pay." },
    { role: "Lab technician", use: "Divides measured masses and volumes read off digital instruments to get concentrations." },
    { role: "Construction estimator", use: "Multiplies areas in square feet by decimal unit costs to price materials." }
  ],
  life: [
    "Totalling a grocery receipt and checking your change",
    "Working out the cost of 12.6 gallons of gas at $3.49 a gallon",
    "Splitting a restaurant bill evenly among friends",
    "Following a metric recipe or medicine label in millilitres",
    "Checking a paycheck's hours times rate"
  ],
  fields: [
    { name: "Accounting", use: "All ledger arithmetic is decimal arithmetic to two places." },
    { name: "Chemistry", use: "Measurements from balances and burettes are decimals combined in calculations." },
    { name: "Computer science", use: "Floating-point numbers are binary analogues of decimals, and understanding decimal rounding helps explain their errors." }
  ],
  prereqWhy: {
    "decimals": "You need to read decimal place values and know that 0.1 is one tenth before you can compute with them.",
    "multiplication": "Decimal multiplication is whole-number multiplication followed by placing the point."
  },
  unlocksWhy: {
    "averages": "Means are usually decimals, and computing them means adding decimal data and dividing.",
    "units": "Metric and other conversions multiply and divide by decimal conversion factors such as 2.54 cm per inch."
  },
  beyond: [
    { field: "Statistics", why: "Means, standard deviations and regression coefficients are computed and reported as decimals." },
    { field: "Numerical analysis", why: "Rounding and truncation in decimal computation are the starting point for studying computer error." }
  ],
  mistakes: [
    { wrong: `Lining up the right-hand digits: <span class="m">4.7 + 12.35</span> computed as <span class="m">0.47 + 12.35 = 12.82</span>.`, fix: `Line up the decimal points: <span class="m">4.70 + 12.35 = 17.05</span>.` },
    { wrong: `<span class="m">0.3 × 0.4 = 1.2</span>.`, fix: `The factors have one decimal place each, so the product has two: <span class="m">0.12</span>. A positive number less than 1 times another positive number less than 1 is less than both.` },
    { wrong: `Moving the point in the divisor but not the dividend: <span class="m">7.56 ÷ 0.36</span> treated as <span class="m">7.56 ÷ 36</span>.`, fix: `Move both points two places: <span class="m">756 ÷ 36 = 21</span>.` }
  ],
  practice: [
    { q: `<span class="m">4.7 + 12.35</span>`, a: `<span class="m">4.70 + 12.35 = 17.05</span>` },
    { q: `<span class="m">10 − 3.46</span>`, a: `<span class="m">10.00 − 3.46 = 6.54</span>` },
    { q: `<span class="m">0.06 × 2.5</span>`, a: `<span class="m">6 × 25 = 150</span>, with 2 + 1 = 3 decimal places: <span class="m">0.150 = 0.15</span>` },
    { q: `<span class="m">7.56 ÷ 0.36</span>`, a: `Multiply both by 100: <span class="m">756 ÷ 36 = 21</span>` }
  ],
  origin: `The Persian astronomer Jamshid al-Kashi used decimal fractions systematically in <i>The Key to Arithmetic</i> (1427). In Europe, Simon Stevin's pamphlet <i>De Thiende</i> (1585) argued for decimals in everyday measurement and trade.`
};

/* ------------------------------------------------------------------ */
ARITH["percents"] = {
  title: "Percents",
  short: "Parts per hundred",
  grade: "Grades 6–7",
  hours: 6,
  voice: "mixed",
  eyebrow: "Rational numbers · per hundred",
  hero: `<span class="m"><span class="c2">part</span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> × <span class="c3">whole</span></span>`,
  lede: `A percent is a ratio out of 100. The same equation answers all three percent questions: find the part, the percent, or the whole.`,
  plain: `<p>"Percent" means "out of a hundred". If 35% of a grid of 100 squares is shaded, 35 squares are shaded. So 35% is the fraction 35/100, which is also the decimal 0.35.</p>
<p>Percents are handy because they put everything on the same scale. Getting 42 out of 48 on one test and 70 out of 80 on another is hard to compare. Turn both into percents, 87.5% and 87.5%, and you see they are equal.</p>
<p>Every percent problem has three pieces: the percent, the part, and the whole. If you know any two, you can find the third with one equation. Just remember that the whole is the thing you are taking a percent <i>of</i>.</p>`,
  formal: `<p>For a real number <span class="m"><i>p</i></span>, <span class="m"><i>p</i>%</span> denotes <span class="m"><span class="fr"><span><i>p</i></span><span>100</span></span> = <i>p</i> × 0.01</span>. The <b>percent equation</b> relates a part <span class="m c2"><i>A</i></span>, a whole <span class="m c3"><i>B</i></span> (<span class="m"><i>B</i> ≠ 0</span>) and a percent <span class="m c1"><i>p</i></span>:</p>
<div class="display"><span class="c2"><i>A</i></span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> · <span class="c3"><i>B</i></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c1"><i>p</i></span> = 100 · <span class="fr"><span class="c2"><i>A</i></span><span class="c3"><i>B</i></span></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c3"><i>B</i></span> = <span class="fr"><span>100<span class="c2"><i>A</i></span></span><span class="c1"><i>p</i></span></span> <span class="dim">(<i>p</i> ≠ 0)</span></div>
<p>Percents greater than 100 and less than 1 are valid: 250% = 2.5 and 0.4% = 0.004. Conversions: decimal to percent multiplies by 100; percent to decimal divides by 100.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Percent", desc: "How many out of every 100. On the grid, the number of shaded squares." },
    { c: "c2", sym: `<i>A</i>`, name: "Part", desc: "The amount that is p percent of the whole." },
    { c: "c3", sym: `<i>B</i>`, name: "Whole", desc: "The base amount the percent is taken of. It counts as 100%." }
  ],
  steps: { title: "How to solve a percent problem", items: [
    `Identify the whole (the amount after "of"), the part, and the percent. One of them is unknown.`,
    `Write the percent as a decimal by dividing by 100.`,
    `To find the part, multiply: <span class="m"><span class="c2">part</span> = <span class="c1">decimal</span> × <span class="c3">whole</span></span>.`,
    `To find the percent, divide part by whole, then multiply by 100.`,
    `To find the whole, divide the part by the decimal.`,
    `Check that the answer is sensible: a part smaller than the whole means a percent under 100.`
  ] },
  example: {
    prompt: `In a survey, 312 of 480 residents said they want a new park. What percent is that? If the same rate holds across the town's 2,000 residents, about how many want the park?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">312</span><span class="c3">480</span></span> = 0.65</span>`, note: "Divide part by whole." },
      { math: `<span class="m">0.65 × 100 = <span class="c1">65</span>%</span>`, note: "Convert the decimal to a percent." },
      { math: `<span class="m"><span class="c1">0.65</span> × <span class="c3">2,000</span> = <span class="c2">1,300</span></span>`, note: "Apply the percent to the new whole." },
      { math: `<span class="m">0.65 × 480 = 312</span>`, note: "Check with the original numbers." }
    ],
    answer: `<span class="m">65%</span> of those surveyed want the park, which suggests about <span class="m">1,300</span> of the town's 2,000 residents.`
  },
  why: `<p>Percents are the everyday language of comparison: test scores, sale prices, tax rates, battery levels, polling results, nutrition labels and interest rates. Understanding which number is the whole keeps you from being misled by a headline.</p>
<p>Percents lead straight into percent change, interest and growth rates, and into probability and statistics, where results are routinely reported as percentages.</p>`,
  careers: [
    { role: "Registered dietitian", use: "Reads % Daily Value on nutrition labels and computes the percent of calories from fat, carbohydrate and protein." },
    { role: "Pollster", use: "Reports survey results as percentages of respondents and states margins of error in percentage points." },
    { role: "Real estate agent", use: "Calculates a commission as a percent of the sale price, such as 2.5% of $340,000 = $8,500." },
    { role: "Teacher", use: "Converts raw scores to percentages to assign grades." },
    { role: "Quality control inspector", use: "Tracks the percent of units that fail inspection in each production batch." },
    { role: "Server", use: "Estimates tips as 15% to 20% of a bill and splits tip pools." }
  ],
  life: [
    "Working out a 20% tip on a restaurant bill",
    "Reading your phone's battery percentage",
    "Converting a test score to a percent",
    "Using % Daily Value on food labels",
    "Understanding a 30% chance of rain"
  ],
  fields: [
    { name: "Statistics", use: "Relative frequencies, confidence levels and many survey results are reported as percents." },
    { name: "Nutrition science", use: "Diets and labels describe nutrient intake as percents of daily targets." },
    { name: "Business", use: "Profit margins, market share and commissions are percents." }
  ],
  prereqWhy: {
    "decimals": "Converting a percent to a decimal, such as 35% = 0.35, is the key step in every calculation."
  },
  unlocksWhy: {
    "percent-apps": "Discounts, tax, percent change and interest all apply the percent equation, often repeatedly."
  },
  beyond: [
    { field: "Statistics", why: "Percentiles, relative frequency tables and confidence intervals are all expressed in percents." },
    { field: "Probability", why: "Probabilities are often stated as percents, and converting between forms is routine." }
  ],
  mistakes: [
    { wrong: `Using the wrong whole: "18 is what percent of 72?" answered as <span class="m">72 ÷ 18 = 4 = 400%</span>.`, fix: `The whole follows "of". <span class="m">18 ÷ 72 = 0.25 = 25%</span>.` },
    { wrong: `Writing 5% as 0.5.`, fix: `Divide by 100: <span class="m">5% = 0.05</span>. And <span class="m">0.5 = 50%</span>.` },
    { wrong: `Thinking a percent over 100 is impossible.`, fix: `It just means more than the whole. If sales went from 40 to 100 units, the new amount is <span class="m">250%</span> of the old.` }
  ],
  practice: [
    { q: `What is 20% of 45?`, a: `<span class="m">0.20 × 45 = 9</span>` },
    { q: `Write <span class="m"><span class="fr"><span>3</span><span>8</span></span></span> as a percent.`, a: `<span class="m">3 ÷ 8 = 0.375 = 37.5%</span>` },
    { q: `18 is what percent of 72?`, a: `<span class="m">18 ÷ 72 = 0.25 = 25%</span>` },
    { q: `30 is 12% of what number?`, a: `<span class="m">30 ÷ 0.12 = 250</span>. Check: <span class="m">0.12 × 250 = 30</span>.` }
  ],
  origin: `The word comes from the Latin <i>per centum</i>, "by the hundred". The % sign grew out of abbreviations of the Italian "per cento" in merchants' manuscripts of the 1400s.`
};

/* ------------------------------------------------------------------ */
ARITH["sci-notation"] = {
  title: "Scientific Notation",
  short: "Writing huge and tiny numbers with powers of ten",
  grade: "Grade 8",
  hours: 5,
  voice: "plain",
  eyebrow: "Powers of ten · orders of magnitude",
  hero: `<span class="m"><span class="c2"><i>c</i></span> × 10<sup class="c3"><i>n</i></sup>, &nbsp; 1 ≤ |<span class="c2"><i>c</i></span>| &lt; 10</span>`,
  lede: `Any nonzero number can be written as a coefficient between 1 and 10 times a power of ten. The exponent tells you its size at a glance.`,
  plain: `<p>The distance from Earth to the Sun is about 149,600,000,000 metres. A hydrogen atom is about 0.0000000001 metres across. Numbers like these are hard to read and easy to miscount. Scientific notation fixes that.</p>
<p>You write the number as a short decimal between 1 and 10, called the <b>coefficient</b>, times 10 to some power. The Sun's distance becomes <span class="m">1.496 × 10<sup>11</sup></span> m. The atom becomes <span class="m">1 × 10<sup>−10</sup></span> m. A positive exponent means a big number. A negative exponent means a small one.</p>
<p>It also makes arithmetic easier. To multiply, multiply the coefficients and add the exponents. To divide, divide the coefficients and subtract the exponents. Then tidy up so the coefficient is back between 1 and 10.</p>`,
  formal: `<p>Every nonzero real number <span class="m"><i>x</i></span> has a unique representation</p>
<div class="display"><i>x</i> = <span class="c2"><i>c</i></span> × 10<sup class="c3"><i>n</i></sup>, &nbsp; 1 ≤ |<span class="c2"><i>c</i></span>| &lt; 10, &nbsp; <span class="c3"><i>n</i></span> ∈ ℤ, &nbsp; <span class="dim"><span class="c3"><i>n</i></span> = ⌊log<sub>10</sub>|<i>x</i>|⌋</span></div>
<p>Using the laws of exponents, <span class="m">(<i>c</i><sub>1</sub> × 10<sup><i>m</i></sup>)(<i>c</i><sub>2</sub> × 10<sup><i>n</i></sup>) = <i>c</i><sub>1</sub><i>c</i><sub>2</sub> × 10<sup><i>m</i>+<i>n</i></sup></span> and <span class="m">(<i>c</i><sub>1</sub> × 10<sup><i>m</i></sup>) ÷ (<i>c</i><sub>2</sub> × 10<sup><i>n</i></sup>) = (<i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>) × 10<sup><i>m</i>−<i>n</i></sup></span>, followed by renormalising the coefficient. The digits of <span class="m c2"><i>c</i></span> are the <b>significant figures</b> of the measurement, and <span class="m c3"><i>n</i></span> is its <b>order of magnitude</b>. Calculators often display <span class="m">1.496 × 10<sup>11</sup></span> as <span class="m">1.496E11</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>c</i>`, name: "Coefficient", desc: "A number with absolute value at least 1 and less than 10. Its digits are the significant figures." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "An integer. It counts how many places the decimal point moved. Positive for large numbers, negative for small ones." },
    { c: "c1", sym: `10<sup><i>n</i></sup>`, name: "Power of ten", desc: "The scale. Each step of 1 in n is a factor of 10 on the lab's ruler." }
  ],
  steps: { title: "How to write and compute in scientific notation", items: [
    `Move the decimal point until exactly one nonzero digit is to its left. That gives the coefficient <span class="m c2"><i>c</i></span>.`,
    `Count the places moved. Moving left gives a positive <span class="m c3"><i>n</i></span>. Moving right gives a negative <span class="m c3"><i>n</i></span>.`,
    `To multiply, multiply coefficients and add exponents. To divide, divide coefficients and subtract exponents.`,
    `If the new coefficient is 10 or more, divide it by 10 and add 1 to the exponent. If it is less than 1, multiply by 10 and subtract 1.`,
    `Round the coefficient to the number of significant figures the data supports.`
  ] },
  example: {
    prompt: `Light travels about <span class="m">3.00 × 10<sup>8</sup></span> metres per second. The Sun is about <span class="m">1.496 × 10<sup>11</sup></span> metres from Earth. How long does sunlight take to reach us?`,
    lines: [
      { math: `<span class="m">time = <span class="fr"><span>distance</span><span>speed</span></span></span>`, note: "Time equals distance divided by speed." },
      { math: `<span class="m"><span class="fr"><span>1.496 × 10<sup>11</sup></span><span>3.00 × 10<sup>8</sup></span></span></span>`, note: "Set up the division." },
      { math: `<span class="m"><span class="c2">0.4987</span> × 10<sup class="c3">3</sup></span>`, note: "Divide coefficients (1.496 ÷ 3.00 ≈ 0.4987) and subtract exponents (11 − 8 = 3)." },
      { math: `<span class="m"><span class="c2">4.99</span> × 10<sup class="c3">2</sup> s</span>`, note: "Renormalise: multiply the coefficient by 10, subtract 1 from the exponent, round to 3 significant figures." },
      { math: `<span class="m">499 ÷ 60 ≈ 8.3</span> min`, note: "Convert seconds to minutes." }
    ],
    answer: `Sunlight takes about <span class="m">4.99 × 10<sup>2</sup></span> seconds, a little over 8 minutes, to reach Earth.`
  },
  why: `<p>Science works across enormous ranges of size, from 10<sup>−15</sup> m for an atomic nucleus to 10<sup>26</sup> m for the observable universe. Scientific notation makes those numbers readable, comparable and easy to multiply. It also shows how precise a measurement is through its significant figures.</p>
<p>Computers store real numbers in a binary version of the same idea, called floating point. Logarithms, which appear throughout algebra, chemistry (pH) and acoustics (decibels), are essentially the exponent part of scientific notation.</p>`,
  careers: [
    { role: "Chemist", use: "Converts between grams and numbers of particles using Avogadro's number, 6.022 × 10²³ per mole." },
    { role: "Astronomer", use: "Works with distances like 9.46 × 10¹⁵ m per light-year and stellar masses around 10³⁰ kg." },
    { role: "Microbiologist", use: "Reports bacterial counts from serial dilutions, such as 2.4 × 10⁷ colony-forming units per millilitre." },
    { role: "Electrical engineer", use: "Specifies components in picofarads and nanoseconds, which are 10⁻¹² F and 10⁻⁹ s." },
    { role: "Software engineer", use: "Chooses between floating-point types knowing a 64-bit double has about 15 to 17 significant decimal digits." },
    { role: "Environmental scientist", use: "Records pollutant concentrations such as 3.5 × 10⁻⁶ g per litre." }
  ],
  life: [
    "Reading a calculator result shown as 6.02E23",
    "Comparing the national debt in trillions to a household budget",
    "Understanding file and storage sizes in gigabytes and terabytes",
    "Making sense of distances and sizes in science news"
  ],
  fields: [
    { name: "Physics", use: "Physical constants such as Planck's constant, 6.626 × 10⁻³⁴ J·s, are routinely written this way." },
    { name: "Chemistry", use: "Moles, concentrations and equilibrium constants span many orders of magnitude." },
    { name: "Computer science", use: "IEEE 754 floating point stores a sign, significand and exponent, a base-2 scientific notation." },
    { name: "Astronomy", use: "Distances, masses and luminosities are handled almost entirely in powers of ten." }
  ],
  prereqWhy: {
    "exponents": "You need to know what 10<sup>n</sup> means, including negative exponents, and the rules for multiplying and dividing powers.",
    "decimals": "Writing the coefficient means moving a decimal point and understanding place value to the right of the point."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Logarithms and exponential functions generalise the exponent part of scientific notation." },
    { field: "Numerical analysis", why: "Floating-point error and significant-figure precision are studied through normalised scientific representations." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m">45 × 10<sup>6</sup></span> and calling it scientific notation.`, fix: `The coefficient must be at least 1 and less than 10: <span class="m">4.5 × 10<sup>7</sup></span>.` },
    { wrong: `Getting the sign of the exponent backwards: <span class="m">0.00032 = 3.2 × 10<sup>4</sup></span>.`, fix: `Small numbers have negative exponents: <span class="m">3.2 × 10<sup>−4</sup></span>.` },
    { wrong: `Multiplying the exponents: <span class="m">10<sup>5</sup> × 10<sup>−2</sup> = 10<sup>−10</sup></span>.`, fix: `Add the exponents when multiplying powers of the same base: <span class="m">10<sup>5 + (−2)</sup> = 10<sup>3</sup></span>.` }
  ],
  practice: [
    { q: `Write 45,000,000 in scientific notation.`, a: `Move the point 7 places left: <span class="m">4.5 × 10<sup>7</sup></span>` },
    { q: `Write 0.00032 in scientific notation.`, a: `Move the point 4 places right: <span class="m">3.2 × 10<sup>−4</sup></span>` },
    { q: `<span class="m">(3 × 10<sup>5</sup>)(4 × 10<sup>−2</sup>)</span>`, a: `<span class="m">12 × 10<sup>3</sup> = 1.2 × 10<sup>4</sup></span>` },
    { q: `<span class="m">(6.3 × 10<sup>8</sup>) ÷ (9 × 10<sup>3</sup>)</span>`, a: `<span class="m">0.7 × 10<sup>5</sup> = 7 × 10<sup>4</sup></span>` }
  ],
  origin: `In <i>The Sand Reckoner</i> (3rd century BCE), Archimedes built a system for naming very large numbers and estimated that fewer than 10<sup>63</sup> grains of sand would fill the universe as he pictured it. The modern form relies on exponent notation, which Descartes popularised in <i>La Géométrie</i> (1637).`
};

/* ------------------------------------------------------------------ */
ARITH["proportions"] = {
  title: "Proportions",
  short: "Two equal ratios, one missing value",
  grade: "Grades 6–7",
  hours: 6,
  voice: "mixed",
  eyebrow: "Multiplicative reasoning · equal ratios",
  hero: `<span class="m"><span class="fr"><span class="c2"><i>a</i></span><span class="c2"><i>b</i></span></span> = <span class="fr"><span class="c2"><i>c</i></span><span class="c1"><i>x</i></span></span> &nbsp;⇒&nbsp; <span class="c1"><i>x</i></span> = <span class="fr"><span><i>bc</i></span><span><i>a</i></span></span></span>`,
  lede: `A proportion says two ratios are equal. If three of the four numbers are known, the fourth is determined.`,
  plain: `<p>Suppose your car used 9 gallons to drive 252 miles. How much gas will a 420-mile trip take? If the car burns gas at a steady rate, the ratio of gallons to miles stays the same. So you set up two equal ratios, one you know and one with a blank, and fill in the blank.</p>
<p>That equation, <span class="m">9/252 = <i>x</i>/420</span>, is a <b>proportion</b>. The quick way to solve it is <b>cross-multiplication</b>: multiply diagonally across the equals sign and you get <span class="m">252<i>x</i> = 9 × 420</span>. Then divide.</p>
<p>The important check is whether the situation really is proportional. Twice the distance means twice the gas, so yes. But twice the workers usually means half the time, not twice the time. That is a different kind of relationship.</p>`,
  formal: `<p>A <b>proportion</b> is an equation <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> with <span class="m"><i>b</i>, <i>d</i> ≠ 0</span>. The <b>cross-product property</b> states</p>
<div class="display"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> &nbsp;⇔&nbsp; <i>ad</i> = <i>bc</i> &nbsp;<span class="dim">(multiply both sides by <i>bd</i>)</span></div>
<p>Two quantities <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> are <b>directly proportional</b> if <span class="m"><i>y</i> = <i>kx</i></span> for a constant <span class="m"><i>k</i> ≠ 0</span>, the <b>constant of proportionality</b>. Then <span class="m"><i>y</i>/<i>x</i></span> is the same for every pair, so any two pairs form a proportion. They are <b>inversely proportional</b> if <span class="m"><i>xy</i> = <i>k</i></span>, which does not give a proportion of this form.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i> : <i>b</i>`, name: "Known pair", desc: "A matched pair of values you already know, such as 9 gallons for 252 miles." },
    { c: "c2", sym: `<i>c</i>`, name: "Known value of the new pair", desc: "The value you have for the new situation, such as 420 miles." },
    { c: "c1", sym: `<i>x</i>`, name: "Unknown", desc: "The missing value that keeps the two ratios equal." },
    { c: "c4", sym: `<i>k</i>`, name: "Constant of proportionality", desc: "The fixed ratio y/x. On the double number line it is how far one line stretches relative to the other." }
  ],
  steps: { title: "How to solve a proportion", items: [
    `Check that the situation is proportional: doubling one quantity should double the other.`,
    `Write the known ratio with units, such as <span class="m">gallons/miles</span>.`,
    `Write the second ratio in the same order, with <span class="m c1"><i>x</i></span> for the unknown.`,
    `Cross-multiply to get <span class="m"><i>ad</i> = <i>bc</i></span>.`,
    `Divide to isolate <span class="m c1"><i>x</i></span>.`,
    `Check by comparing the unit rates or plugging back in.`
  ] },
  example: {
    prompt: `Your car used 9 gallons of gas to drive 252 miles. At the same rate, how many gallons will a 420-mile trip use?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">9</span><span class="c2">252</span></span> = <span class="fr"><span class="c1"><i>x</i></span><span class="c2">420</span></span></span>`, note: "Gallons over miles on both sides." },
      { math: `<span class="m">252<span class="c1"><i>x</i></span> = 9 × 420</span>`, note: "Cross-multiply." },
      { math: `<span class="m">252<span class="c1"><i>x</i></span> = 3,780</span>`, note: "Multiply out the right side." },
      { math: `<span class="m"><span class="c1"><i>x</i></span> = 3,780 ÷ 252 = 15</span>`, note: "Divide both sides by 252." },
      { math: `<span class="m">252 ÷ 9 = 28 = 420 ÷ 15</span>`, note: "Check: both trips get 28 miles per gallon." }
    ],
    answer: `The trip will use <span class="m">15</span> gallons of gas.`
  },
  why: `<p>Proportions are the everyday tool for scaling. Map distances, recipe adjustments, currency exchange, dosing by weight, and estimating a whole population from a sample all rely on setting two ratios equal.</p>
<p>Direct proportion <span class="m"><i>y</i> = <i>kx</i></span> is the simplest linear function and the first model of how one quantity depends on another. Similar triangles, which are the foundation of trigonometry, are proportions about lengths.</p>`,
  careers: [
    { role: "Nurse", use: "Uses proportions to find a liquid dose, such as 250 mg is to 5 mL as 400 mg is to x mL, giving 8 mL." },
    { role: "Wildlife biologist", use: "Estimates population size by capture-recapture, setting marked animals in a sample equal in ratio to marked animals in the whole population." },
    { role: "Architect", use: "Converts scale-drawing measurements to real dimensions with a fixed ratio such as 1/4 in : 1 ft." },
    { role: "Pharmacist", use: "Scales compounding formulas proportionally to make a different total quantity." },
    { role: "Travel agent", use: "Converts prices between currencies using the proportion set by the exchange rate." },
    { role: "Graphic designer", use: "Resizes images while keeping the width-to-height ratio fixed so they do not distort." }
  ],
  life: [
    "Figuring out how much gas a longer trip will need",
    "Converting prices while travelling abroad",
    "Scaling a recipe from 4 servings to 10",
    "Resizing a photo without stretching it",
    "Estimating distances from a map scale"
  ],
  fields: [
    { name: "Chemistry", use: "Stoichiometry uses proportions from balanced equations to scale reactant and product amounts." },
    { name: "Ecology", use: "Mark-recapture and quadrat sampling estimate totals by proportion." },
    { name: "Physics", use: "Many laws, such as Hooke's law F = kx, are direct proportions." }
  ],
  prereqWhy: {
    "ratios": "A proportion is a statement that two ratios are equal, so you need to read and write ratios first.",
    "fraction-ops": "Cross-multiplying and simplifying the result are fraction operations."
  },
  unlocksWhy: {
    "units": "Each conversion factor is a proportion between equal amounts in two units, and dimensional analysis chains them together."
  },
  beyond: [
    { field: "Algebra I", why: "Direct variation y = kx is a linear function through the origin with slope k." },
    { field: "Geometry", why: "Similar figures have proportional sides, which is used to find unknown lengths." },
    { field: "Trigonometry", why: "Trigonometric ratios are constant because right triangles with the same angles are similar." }
  ],
  mistakes: [
    { wrong: `Mixing the order: <span class="m"><span class="fr"><span>9</span><span>252</span></span> = <span class="fr"><span>420</span><span><i>x</i></span></span></span>, with gallons over miles on one side and miles over gallons on the other.`, fix: `Keep the same units in the same positions on both sides: <span class="m"><span class="fr"><span>9</span><span>252</span></span> = <span class="fr"><span><i>x</i></span><span>420</span></span></span>.` },
    { wrong: `Using a proportion for an inverse relationship: "3 painters take 6 hours, so 6 painters take 12 hours."`, fix: `More painters means less time. Here the work is 3 × 6 = 18 painter-hours, so 6 painters take <span class="m">18 ÷ 6 = 3</span> hours.` },
    { wrong: `Cross-adding or multiplying straight across instead of diagonally.`, fix: `Multiply each numerator by the opposite denominator: <span class="m"><i>ad</i> = <i>bc</i></span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><span class="fr"><span>3</span><span>5</span></span> = <span class="fr"><span><i>x</i></span><span>40</span></span></span>.`, a: `<span class="m">5<i>x</i> = 120</span>, so <span class="m"><i>x</i> = 24</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span>7</span><span><i>x</i></span></span> = <span class="fr"><span>21</span><span>12</span></span></span>.`, a: `<span class="m">21<i>x</i> = 84</span>, so <span class="m"><i>x</i> = 4</span>.` },
    { q: `4 notebooks cost $10. At the same price each, what do 14 notebooks cost?`, a: `<span class="m"><span class="fr"><span>10</span><span>4</span></span> = <span class="fr"><span><i>x</i></span><span>14</span></span></span>, so <span class="m">4<i>x</i> = 140</span> and <span class="m"><i>x</i> = $35</span>.` },
    { q: `A map's scale is 1 cm : 2.5 km. Two towns are 18.4 km apart. How far apart are they on the map?`, a: `<span class="m"><span class="fr"><span>1</span><span>2.5</span></span> = <span class="fr"><span><i>x</i></span><span>18.4</span></span></span>, so <span class="m"><i>x</i> = 18.4 ÷ 2.5 = 7.36</span> cm.` }
  ],
  origin: `Euclid's <i>Elements</i> (c. 300 BCE) sets out a theory of proportion attributed to Eudoxus. Solving for a missing fourth term was taught as the "rule of three", which appears in the <i>Aryabhatiya</i> of the Indian mathematician Aryabhata (499 CE) and was a staple of European merchant arithmetic for centuries.`
};

/* ------------------------------------------------------------------ */
ARITH["averages"] = {
  title: "Mean, Median & Mode",
  short: "Three ways to describe a typical value",
  grade: "Grade 6",
  hours: 5,
  voice: "mixed",
  eyebrow: "Data · measures of center",
  hero: `<span class="m"><span class="c1"><i>x̄</i></span> = <span class="fr"><span><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + ⋯ + <i>x</i><sub><i>n</i></sub></span><span><i>n</i></span></span></span>`,
  lede: `The mean is the balance point of the data. The median is the middle value, and the mode is the most common one.`,
  plain: `<p>If someone asks how long your commute usually takes, one number has to stand for many days. There are three common ways to pick that number.</p>
<p>The <b>mean</b> is what most people call the average. Add all the values and divide by how many there are. It is the point where the data would balance if each value were a weight on a ruler. The <b>median</b> is the middle value once you line them up in order. The <b>mode</b> is the value that shows up most often.</p>
<p>They can disagree. One awful 90-minute commute drags the mean up, but barely moves the median. That is why reports on house prices and incomes usually give the median. The mean uses every value. The median resists extreme ones.</p>`,
  formal: `<p>For data values <span class="m"><i>x</i><sub>1</sub>, …, <i>x</i><sub><i>n</i></sub></span>, let <span class="m"><i>x</i><sub>(1)</sub> ≤ <i>x</i><sub>(2)</sub> ≤ ⋯ ≤ <i>x</i><sub>(<i>n</i>)</sub></span> be the values in increasing order.</p>
<div class="display"><b>Mean:</b> <span class="c1"><i>x̄</i></span> = <span class="fr"><span>1</span><span><i>n</i></span></span> ∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>x</i><sub><i>i</i></sub> &nbsp;&nbsp; <span class="dim">∑ (<i>x</i><sub><i>i</i></sub> − <i>x̄</i>) = 0</span><br><b>Median:</b> <span class="c2"><i>x</i><sub>((<i>n</i>+1)/2)</sub></span> if <i>n</i> is odd; &nbsp;<span class="c2"><span class="fr"><span><i>x</i><sub>(<i>n</i>/2)</sub> + <i>x</i><sub>(<i>n</i>/2+1)</sub></span><span>2</span></span></span> if <i>n</i> is even<br><b>Mode:</b> any value of greatest frequency</div>
<p>The deviations from the mean sum to zero, which is why the mean is the balance point. A data set may have one mode, several modes, or none (when every value occurs equally often). The mean minimises the sum of squared deviations, and the median minimises the sum of absolute deviations.</p>`,
  legend: [
    { c: "c1", sym: `<i>x̄</i>`, name: "Mean", desc: "The sum divided by the count. The balance point of the dot plot." },
    { c: "c2", sym: `<i>M</i>`, name: "Median", desc: "The middle value of the ordered data, or the average of the two middle values." },
    { c: "c3", sym: `Mo`, name: "Mode", desc: "The most frequent value. There can be more than one." },
    { c: "c4", sym: `<i>n</i>`, name: "Count", desc: "The number of data values." }
  ],
  steps: { title: "How to find the mean, median and mode", items: [
    `Write the data in order from least to greatest and count the values <span class="m"><i>n</i></span>.`,
    `<b>Mean:</b> add all the values and divide by <span class="m"><i>n</i></span>.`,
    `<b>Median:</b> if <span class="m"><i>n</i></span> is odd, take the middle value. If even, average the two middle values.`,
    `<b>Mode:</b> find the value or values that appear most often.`,
    `Compare them. If the mean is far from the median, look for an outlier or skew.`
  ] },
  example: {
    prompt: `Your commute times this week (in minutes) were 22, 25, 34, 28, 25, 90 and 31. The 90 was a day with a road closure. Find the mean, median and mode. Which best describes a typical day?`,
    lines: [
      { math: `<span class="m">22, 25, 25, 28, 31, 34, 90</span>`, note: "Sort the data. There are n = 7 values." },
      { math: `<span class="m">22 + 25 + 25 + 28 + 31 + 34 + 90 = 255</span>`, note: "Add all the values." },
      { math: `<span class="m"><span class="c1"><i>x̄</i></span> = 255 ÷ 7 ≈ <span class="c1">36.4</span></span>`, note: "Mean, rounded to one decimal place." },
      { math: `<span class="m"><span class="c2"><i>M</i></span> = <i>x</i><sub>(4)</sub> = <span class="c2">28</span></span>`, note: "With 7 values the median is the 4th." },
      { math: `<span class="m"><span class="c3">Mo</span> = <span class="c3">25</span></span>`, note: "25 appears twice. Every other value appears once." }
    ],
    answer: `Mean <span class="m">≈ 36.4</span> min, median <span class="m">28</span> min, mode <span class="m">25</span> min. The median best describes a typical day, because the one 90-minute outlier pulls the mean higher than six of the seven commutes.`
  },
  why: `<p>Averages turn a pile of numbers into one you can use: a grade point average, a typical wait time, a batting average, a median home price. Knowing which average is being quoted, and why, is basic data literacy.</p>
<p>In statistics the mean is the starting point for variance, standard deviation and nearly every model. The median and other quantiles lead to box plots and robust methods that are not thrown off by outliers.</p>`,
  careers: [
    { role: "Real estate appraiser", use: "Uses median sale prices of comparable homes because a few luxury sales would distort the mean." },
    { role: "Teacher", use: "Computes mean scores to set grades and compares class medians to spot uneven results." },
    { role: "Meteorologist", use: "Reports normal temperatures as 30-year means for each calendar day." },
    { role: "Human resources analyst", use: "Compares median salaries across roles when setting pay bands." },
    { role: "Quality engineer", use: "Tracks the mean of sample measurements on control charts to see if a process has drifted." },
    { role: "Retail manager", use: "Uses the mode of shoe or clothing sizes sold to decide which sizes to stock most." }
  ],
  life: [
    "Working out what score you need on the next test to hit a target average",
    "Understanding median home prices in a news report",
    "Tracking your average monthly spending",
    "Comparing typical wait times at two clinics",
    "Choosing the most common size when ordering team shirts"
  ],
  fields: [
    { name: "Statistics", use: "Measures of centre are the first summary of any data set." },
    { name: "Economics", use: "Median household income and mean GDP per person describe living standards." },
    { name: "Psychology", use: "Experiments compare mean responses between groups." },
    { name: "Public health", use: "Median age, mean blood pressure and similar summaries describe populations." }
  ],
  prereqWhy: {
    "division": "The mean is a sum divided by a count.",
    "decimal-ops": "Means and medians are often decimals, and data such as prices or times are decimals to begin with."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Statistics", why: "The mean leads to variance, standard deviation, sampling distributions and hypothesis tests." },
    { field: "Probability", why: "The expected value of a random variable is a weighted mean." },
    { field: "Linear algebra", why: "Least-squares fitting generalises the fact that the mean minimises squared deviations." }
  ],
  mistakes: [
    { wrong: `Finding the median without sorting: the median of 13, 7, 21, 9, 15, 4 taken as the middle of the list as written.`, fix: `Sort first: 4, 7, 9, 13, 15, 21. The median is <span class="m">(9 + 13) ÷ 2 = 11</span>.` },
    { wrong: `Averaging averages: two classes with means 80 and 90 have an overall mean of 85.`, fix: `Only if the classes are the same size. With 10 students at 80 and 30 at 90, the mean is <span class="m">(800 + 2,700) ÷ 40 = 87.5</span>.` },
    { wrong: `Saying the mode is the frequency: "8 appears 3 times, so the mode is 3."`, fix: `The mode is the value, <span class="m">8</span>. The 3 is its frequency.` }
  ],
  practice: [
    { q: `Find the mean of 4, 8, 9, 11.`, a: `<span class="m">(4 + 8 + 9 + 11) ÷ 4 = 32 ÷ 4 = 8</span>` },
    { q: `Find the median of 13, 7, 21, 9, 15, 4.`, a: `Sorted: 4, 7, 9, 13, 15, 21. <span class="m">(9 + 13) ÷ 2 = 11</span>` },
    { q: `Find the mode of 3, 5, 5, 6, 8, 8, 8, 10.`, a: `<span class="m">8</span>, which appears three times.` },
    { q: `Your first four quiz scores are 82, 90, 76 and 88. What score do you need on the fifth quiz for a mean of 85?`, a: `You need a total of <span class="m">85 × 5 = 425</span>. You have <span class="m">82 + 90 + 76 + 88 = 336</span>. So you need <span class="m">425 − 336 = 89</span>.` }
  ],
  origin: `Averaging repeated measurements to reduce error became standard practice among astronomers in the 1600s and 1700s. Francis Galton popularised the term "median" in the 1880s, and Karl Pearson introduced "mode" in 1895.`
};

/* ------------------------------------------------------------------ */
ARITH["percent-apps"] = {
  title: "Percent Change, Tax & Interest",
  short: "Discounts, tax, growth and interest",
  grade: "Grades 7–8; revisited in personal finance",
  hours: 8,
  voice: "plain",
  eyebrow: "Applied percents · growth and interest",
  hero: `<span class="m"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span>)<sup><i>t</i></sup></span>`,
  lede: `Compound interest multiplies by the same factor <span class="m">1 + <span class="c4"><i>r</i></span></span> each period. Simple interest adds the same amount each period instead.`,
  plain: `<p>Most real uses of percents are about change. A price goes up 15%, a jacket is 30% off, sales tax adds 8%, a savings account earns 5% a year. The trick that ties them together is the <b>multiplier</b>. A 15% increase means multiply by 1.15. A 30% discount means multiply by 0.70. Adding 8% tax means multiply by 1.08.</p>
<p><b>Percent change</b> compares the change to where you started: new minus old, divided by old. Always divide by the old value.</p>
<p>Interest is the price of borrowing money. With <b>simple interest</b>, you earn the same amount every year, based only on the original deposit. With <b>compound interest</b>, each year's interest is added to the balance, and next year you earn interest on that too. Over short times the difference is small. Over decades it is huge, which is why compound growth matters so much for savings and debt.</p>`,
  formal: `<p>For an original value <span class="m"><i>V</i><sub>0</sub> ≠ 0</span> and a new value <span class="m"><i>V</i><sub>1</sub></span>, the <b>percent change</b> is <span class="m">100 · (<i>V</i><sub>1</sub> − <i>V</i><sub>0</sub>)/<i>V</i><sub>0</sub></span>. A change by rate <span class="m"><i>r</i></span> (as a decimal) multiplies by <span class="m">1 + <i>r</i></span>, so a price with tax rate <span class="m"><i>s</i></span> totals <span class="m"><i>x</i>(1 + <i>s</i>)</span> and a discount <span class="m"><i>d</i></span> leaves <span class="m"><i>x</i>(1 − <i>d</i>)</span>.</p>
<div class="display">Simple interest: &nbsp;<span class="c2"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span><i>t</i>)</span> &nbsp;<span class="dim">(<i>I</i> = <i>Prt</i>)</span><br>Compound interest: &nbsp;<span class="c3"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span>/<i>n</i>)<sup><i>nt</i></sup></span><br><span class="dim">Continuous compounding: <i>A</i> = <i>P</i>e<sup><i>rt</i></sup></span></div>
<p>Here <span class="m c1"><i>P</i></span> is the principal, <span class="m c4"><i>r</i></span> the annual rate as a decimal, <span class="m"><i>t</i></span> the time in years and <span class="m"><i>n</i></span> the number of compounding periods per year. Simple interest grows linearly in <span class="m"><i>t</i></span>. Compound interest grows exponentially. Successive percent changes multiply: an increase of <span class="m"><i>r</i><sub>1</sub></span> then <span class="m"><i>r</i><sub>2</sub></span> gives the factor <span class="m">(1 + <i>r</i><sub>1</sub>)(1 + <i>r</i><sub>2</sub>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>`, name: "Principal", desc: "The starting amount deposited or borrowed." },
    { c: "c4", sym: `<i>r</i>`, name: "Rate", desc: "The annual interest rate or percent change, written as a decimal (5% = 0.05)." },
    { c: "c2", sym: `<i>P</i>(1 + <i>rt</i>)`, name: "Simple interest balance", desc: "Grows by the same amount P·r each year. A straight line on the chart." },
    { c: "c3", sym: `<i>P</i>(1 + <i>r</i>)<sup><i>t</i></sup>`, name: "Compound balance", desc: "Grows by the same factor each year. A curve that bends upward." },
    { c: "c5", sym: `<i>t</i>`, name: "Time", desc: "Number of years. With n periods per year the exponent becomes nt." }
  ],
  steps: { title: "How to handle percent change and interest", items: [
    `Convert the percent to a decimal rate <span class="m c4"><i>r</i></span>.`,
    `For an increase (tax, markup, growth), multiply by <span class="m">1 + <i>r</i></span>. For a decrease (discount, depreciation), multiply by <span class="m">1 − <i>r</i></span>.`,
    `For percent change, compute <span class="m">(new − old) ÷ old</span> and convert to a percent.`,
    `For simple interest, compute <span class="m"><i>I</i> = <span class="c1"><i>P</i></span><span class="c4"><i>r</i></span><i>t</i></span> and add it to the principal.`,
    `For compound interest, divide the annual rate by the periods per year <span class="m"><i>n</i></span>, raise <span class="m">1 + <i>r</i>/<i>n</i></span> to the power <span class="m"><i>nt</i></span>, and multiply by <span class="m c1"><i>P</i></span>.`,
    `Round money to the cent only at the end.`
  ] },
  example: {
    prompt: `You deposit $2,000 at 5% annual interest for 3 years. How much do you have with simple interest? With interest compounded once a year?`,
    lines: [
      { math: `<span class="m"><i>I</i> = <span class="c1">2,000</span> × <span class="c4">0.05</span> × 3 = 300</span>`, note: "Simple interest earns $100 each year for 3 years." },
      { math: `<span class="m c2">2,000 + 300 = 2,300</span>`, note: "Simple interest balance." },
      { math: `<span class="m"><span class="c1">2,000</span> × (1 + <span class="c4">0.05</span>)<sup>3</sup></span>`, note: "Compound annually: multiply by 1.05 once per year." },
      { math: `<span class="m">1.05<sup>3</sup> = 1.157625</span>`, note: "1.05 × 1.05 × 1.05." },
      { math: `<span class="m c3">2,000 × 1.157625 = 2,315.25</span>`, note: "Compound balance." },
      { math: `<span class="m">2,315.25 − 2,300 = 15.25</span>`, note: "Extra earned from interest on interest." }
    ],
    answer: `Simple interest gives <span class="m">$2,300.00</span>. Annual compounding gives <span class="m">$2,315.25</span>, which is $15.25 more.`
  },
  why: `<p>These are the percent calculations that cost or earn you money: sale prices, sales tax, raises, inflation, credit card balances, car loans, mortgages and retirement savings. A credit card at 24% a year compounds against you. A retirement account at 7% a year compounds for you, and over 30 years it multiplies the principal by more than 7.</p>
<p>Compound interest is the everyday face of exponential growth. The same formula models population growth, radioactive decay and the spread of disease, and it is how the constant e was first discovered.</p>`,
  careers: [
    { role: "Loan officer", use: "Explains how the interest rate and compounding on a mortgage or car loan determine the total repaid." },
    { role: "Financial planner", use: "Projects retirement balances with compound growth at assumed annual returns." },
    { role: "Retail buyer", use: "Sets prices with percent markups over cost and plans percent-off promotions that keep a target margin." },
    { role: "Tax preparer", use: "Applies percentage tax rates to income brackets and calculates sales and use tax." },
    { role: "Actuary", use: "Discounts future payments to present value using compound interest when pricing insurance and pensions." },
    { role: "Economist", use: "Measures inflation as the percent change in the Consumer Price Index from one year to the next." }
  ],
  life: [
    "Working out the sale price of an item that is 30% off",
    "Adding sales tax to a purchase",
    "Comparing savings accounts by their annual percentage yield",
    "Understanding how a credit card balance grows if unpaid",
    "Calculating the percent raise in a new job offer",
    "Seeing how inflation changes prices over time"
  ],
  fields: [
    { name: "Finance", use: "Present value, annuities and loan amortisation are all built on the compound interest formula." },
    { name: "Economics", use: "Growth rates of GDP, prices and wages are percent changes." },
    { name: "Biology", use: "Population growth with a constant rate follows the compound growth model." },
    { name: "Accounting", use: "Depreciation, tax and markups are percent-of-value calculations." }
  ],
  prereqWhy: {
    "percents": "Every application here starts from finding a percent of an amount and converting percents to decimals.",
    "exponents": "Compound interest repeats the same multiplication each period, which is written as a power."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Exponential growth and decay functions, and solving for time with logarithms, extend the compound interest formula." },
    { field: "Precalculus", why: "The limit of (1 + 1/n)ⁿ as n grows defines e and continuous compounding." },
    { field: "Financial mathematics", why: "Annuities, amortisation and bond pricing are sums of compound interest terms." }
  ],
  mistakes: [
    { wrong: `A price drops 20% and then rises 20%, so it is back to where it started.`, fix: `The factors multiply: <span class="m">0.80 × 1.20 = 0.96</span>. The price ends 4% lower.` },
    { wrong: `Dividing by the new value: from $40 to $46 is <span class="m">6 ÷ 46 ≈ 13%</span>.`, fix: `Percent change divides by the original: <span class="m">6 ÷ 40 = 0.15 = 15%</span>.` },
    { wrong: `Using the annual rate every month: 6% compounded monthly as <span class="m">(1.06)<sup>12<i>t</i></sup></span>.`, fix: `Divide the rate by the periods: <span class="m">(1 + 0.06/12)<sup>12<i>t</i></sup> = 1.005<sup>12<i>t</i></sup></span>.` },
    { wrong: `Confusing percent with percentage points: a rate rising from 4% to 5% "rose 1%".`, fix: `It rose 1 percentage point, which is a <span class="m">25%</span> increase in the rate.` }
  ],
  practice: [
    { q: `A price rises from $40 to $46. What is the percent change?`, a: `<span class="m">(46 − 40) ÷ 40 = 0.15</span>, a 15% increase.` },
    { q: `An item costs $68 and sales tax is 7.5%. What is the total?`, a: `<span class="m">68 × 1.075 = 73.10</span>, so $73.10.` },
    { q: `$1,200 earns 4% simple interest per year for 5 years. Find the interest and the final balance.`, a: `<span class="m"><i>I</i> = 1,200 × 0.04 × 5 = 240</span>. Balance <span class="m">$1,440</span>.` },
    { q: `$5,000 is invested at 6% annual interest, compounded monthly, for 2 years. What is the balance?`, a: `<span class="m">5,000 × (1 + 0.06/12)<sup>24</sup> = 5,000 × 1.005<sup>24</sup> ≈ 5,635.80</span>, so about $5,635.80.` }
  ],
  origin: `Clay tablets from ancient Mesopotamia, around 2000 to 1700 BCE, include problems about loans with interest. In 1683 Jacob Bernoulli, studying interest compounded more and more often, found the limit now called e ≈ 2.718.`
};

/* ------------------------------------------------------------------ */
ARITH["real-numbers"] = {
  title: "The Real Number System",
  short: "Naturals, integers, rationals, irrationals, reals",
  grade: "Grade 8; formalised in college",
  hours: 6,
  voice: "plain",
  eyebrow: "Number systems · the real line",
  hero: `<span class="m"><span class="c1">ℕ</span> ⊂ 𝕎 ⊂ <span class="c2">ℤ</span> ⊂ <span class="c3">ℚ</span> ⊂ ℝ</span>`,
  lede: `Each number system contains the one before it. The real numbers fill every point on the number line, including <span class="m c4">irrational</span> numbers like √2 and π that no fraction can equal.`,
  plain: `<p>Numbers came in layers, each added to solve a problem the last one could not. The counting numbers 1, 2, 3, … are the <b>natural numbers</b>. Add 0 and you get the <b>whole numbers</b>. Add the negatives and you get the <b>integers</b>, so that subtraction always works. Add fractions and you get the <b>rational numbers</b>, so that division by anything except zero always works.</p>
<p>You might think fractions fill the whole number line. They do not. A square with sides of 1 has a diagonal of length √2, and no fraction equals √2 exactly. Numbers like this are <b>irrational</b>. Their decimals go on forever with no repeating pattern. π is another one.</p>
<p>Put the rationals and irrationals together and you have the <b>real numbers</b>: every point on the number line. The real numbers are what you use for measuring anything that can vary smoothly, like length, time or temperature.</p>`,
  formal: `<div class="display"><span class="c1">ℕ</span> = {1, 2, 3, …} &nbsp; 𝕎 = {0, 1, 2, …} &nbsp; <span class="c2">ℤ</span> = {…, −2, −1, 0, 1, 2, …}<br><span class="c3">ℚ</span> = { <span class="fr"><span><i>p</i></span><span><i>q</i></span></span> : <i>p</i>, <i>q</i> ∈ ℤ, <i>q</i> ≠ 0 } &nbsp;&nbsp; <span class="c4">irrationals</span> = ℝ ∖ ℚ</div>
<p>A real number is rational if and only if its decimal expansion terminates or eventually repeats. √2 is irrational: if <span class="m">√2 = <i>p</i>/<i>q</i></span> in lowest terms, then <span class="m"><i>p</i><sup>2</sup> = 2<i>q</i><sup>2</sup></span>, so <span class="m"><i>p</i></span> is even, which forces <span class="m"><i>q</i></span> to be even too, a contradiction. More generally, <span class="m">√<i>n</i></span> for a positive integer <span class="m"><i>n</i></span> is rational only when <span class="m"><i>n</i></span> is a perfect square.</p>
<p>ℝ is a <b>complete ordered field</b>: it obeys the field axioms and an order, and every nonempty set of reals that is bounded above has a least upper bound. ℚ fails completeness. Both ℚ and the irrationals are <b>dense</b> in ℝ, but ℚ is countable while ℝ is uncountable (Cantor, 1874). (Some texts include 0 in ℕ; this page uses ℕ = {1, 2, 3, …}.)</p>`,
  legend: [
    { c: "c1", sym: `ℕ`, name: "Natural numbers", desc: "The counting numbers 1, 2, 3, …. Adding 0 gives the whole numbers 𝕎." },
    { c: "c2", sym: `ℤ`, name: "Integers", desc: "Whole numbers and their negatives. Closed under subtraction." },
    { c: "c3", sym: `ℚ`, name: "Rational numbers", desc: "Quotients p/q of integers with q ≠ 0. Their decimals terminate or repeat." },
    { c: "c4", sym: `ℝ ∖ ℚ`, name: "Irrational numbers", desc: "Real numbers that are not rational, such as √2, π and e. Their decimals never terminate or repeat." }
  ],
  steps: { title: "How to classify a real number", items: [
    `Simplify first. For example, <span class="m">√49 = 7</span> and <span class="m">12/4 = 3</span>.`,
    `If it is a positive whole number, it is natural, whole, integer, rational and real.`,
    `If it is 0 or a negative whole number, it is an integer (and whole if 0), rational and real.`,
    `If it can be written as a fraction of integers, or its decimal terminates or repeats, it is rational.`,
    `If it is the square root of a positive integer that is not a perfect square, or a known constant like π, it is irrational.`,
    `Every number on this list is real. Name every set it belongs to, not just the smallest.`
  ] },
  example: {
    prompt: `You want a square garden with an area of exactly 50 m². Is the side length a rational number? About how long is each side, and how much fencing goes around it?`,
    lines: [
      { math: `<span class="m"><i>s</i><sup>2</sup> = 50</span>`, note: "Area of a square is side squared." },
      { math: `<span class="m"><i>s</i> = √50 = 5√2</span>`, note: "50 = 25 × 2, and √25 = 5." },
      { math: `<span class="m">7<sup>2</sup> = 49 &lt; 50 &lt; 64 = 8<sup>2</sup></span>`, note: "50 is not a perfect square, so √50 is irrational. It lies between 7 and 8." },
      { math: `<span class="m">7.07<sup>2</sup> = 49.9849, &nbsp;7.08<sup>2</sup> = 50.1264</span>`, note: "So √50 is between 7.07 and 7.08, closer to 7.07." },
      { math: `<span class="m c4"><i>s</i> ≈ 7.071</span>`, note: "A calculator gives 7.0710678…, which never repeats." },
      { math: `<span class="m">4<i>s</i> = 20√2 ≈ 28.28</span>`, note: "Perimeter for the fence." }
    ],
    answer: `The side is <span class="m">√50 = 5√2</span> m, an irrational number about <span class="m">7.07</span> m. You need about <span class="m">28.3</span> m of fencing.`
  },
  why: `<p>Knowing which kind of number you have tells you what you can do with it. Counts of people are natural numbers. Temperatures can be negative. Money is rational, to the cent. Lengths like the diagonal of a square or the circumference of a circle are often irrational, so any decimal you write is an approximation, and you need to decide how precise it must be.</p>
<p>The real numbers are the setting for algebra, geometry and calculus. Graphs, limits, continuity and derivatives all depend on ℝ having no gaps.</p>`,
  careers: [
    { role: "Software engineer", use: "Chooses integer types for counts and floating-point types for measurements, knowing floats only approximate most real numbers." },
    { role: "Carpenter", use: "Cuts diagonal braces whose lengths, like 12√2 in, are irrational and must be rounded to the nearest sixteenth." },
    { role: "Surveyor", use: "Works with distances computed from square roots that are irrational and rounded to a stated precision." },
    { role: "Machinist", use: "Uses π, an irrational number, to compute circumferences and cutting speeds, rounding to the tolerance required." },
    { role: "Mathematics teacher", use: "Teaches students to classify numbers and to explain why √2 cannot be a fraction." }
  ],
  life: [
    "Rounding π or √2 on a calculator to a sensible number of places",
    "Knowing a count of people must be a whole number",
    "Understanding why a temperature can be negative but a length cannot",
    "Measuring the diagonal of a TV or a room"
  ],
  fields: [
    { name: "Computer science", use: "Integer, rational and floating-point data types mirror the number sets and their limits." },
    { name: "Physics", use: "Physical quantities are modelled as real numbers so that calculus can be applied." },
    { name: "Engineering", use: "Tolerances decide how many digits of an irrational value are needed." }
  ],
  prereqWhy: {
    "integers": "The integers ℤ are one layer of the system, and you need negatives to see how ℤ extends the whole numbers.",
    "fraction-ops": "The rationals ℚ are exactly the fractions, and their closure under the four operations defines their place in the system.",
    "roots": "Square roots of non-perfect squares, like √2, are the first irrational numbers most people meet.",
    "decimals": "Classifying numbers by whether their decimals terminate, repeat or do neither depends on reading decimal expansions."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Solutions of equations are stated as real numbers, and the domain of a function is a subset of ℝ." },
    { field: "Calculus", why: "Limits and continuity rely on the completeness of ℝ." },
    { field: "Real analysis", why: "The course constructs ℝ rigorously and proves its completeness, density and uncountability." },
    { field: "Number theory", why: "Irrationality proofs and rational approximation of irrationals are central topics." }
  ],
  mistakes: [
    { wrong: `Calling <span class="m">√49</span> irrational because it has a root sign.`, fix: `Simplify first: <span class="m">√49 = 7</span>, a natural number.` },
    { wrong: `Treating 3.14 or 22/7 as equal to π.`, fix: `Both are rational approximations. π is irrational: <span class="m">22/7 = 3.142857…</span> while <span class="m">π = 3.141592…</span>.` },
    { wrong: `Thinking a long decimal like 0.142857142857… is irrational.`, fix: `It repeats, so it is rational. In fact it equals <span class="m"><span class="fr"><span>1</span><span>7</span></span></span>.` },
    { wrong: `Naming only one set: "−12 is an integer."`, fix: `It belongs to every set containing ℤ: −12 is an integer, a rational number and a real number.` }
  ],
  practice: [
    { q: `Name every set that <span class="m">−12</span> belongs to.`, a: `Integers ℤ, rationals ℚ and reals ℝ. It is not natural or whole.` },
    { q: `Write <span class="m">0.<span style="text-decoration:overline">36</span> = 0.3636…</span> as a fraction in lowest terms.`, a: `Let <span class="m"><i>x</i> = 0.3636…</span>. Then <span class="m">100<i>x</i> − <i>x</i> = 36</span>, so <span class="m"><i>x</i> = 36/99 = 4/11</span>.` },
    { q: `Is <span class="m">√45</span> rational? Between which two integers does it lie?`, a: `45 is not a perfect square, so <span class="m">√45 = 3√5</span> is irrational. Since <span class="m">36 &lt; 45 &lt; 49</span>, it lies between 6 and 7 (≈ 6.708).` },
    { q: `Write <span class="m">2.1<span style="text-decoration:overline">45</span> = 2.14545…</span> as a fraction in lowest terms.`, a: `<span class="m">1000<i>x</i> = 2145.45…</span> and <span class="m">10<i>x</i> = 21.45…</span>, so <span class="m">990<i>x</i> = 2124</span> and <span class="m"><i>x</i> = 2124/990 = 118/55</span>.` }
  ],
  origin: `Greek mathematicians of the Pythagorean school discovered, around the 5th century BCE, that the diagonal of a square has no common measure with its side, which in modern terms shows √2 is irrational. Rigorous constructions of the real numbers came in 1872 from Richard Dedekind and Georg Cantor.`
};

/* ------------------------------------------------------------------ */
ARITH["units"] = {
  title: "Units & Dimensional Analysis",
  short: "Converting units by multiplying by one",
  grade: "Grades 6–8; central in high school chemistry and physics",
  hours: 7,
  voice: "plain",
  eyebrow: "Measurement · dimensional analysis",
  hero: `<span class="m">60 <span class="fr"><span>mi</span><span>h</span></span> × <span class="c2"><span class="fr"><span>5280 ft</span><span>1 mi</span></span></span> × <span class="c2"><span class="fr"><span>1 h</span><span>3600 s</span></span></span> = <span class="c1">88 <span class="fr"><span>ft</span><span>s</span></span></span></span>`,
  lede: `Each conversion factor equals 1, so multiplying by it changes the units without changing the quantity. Units cancel like factors in a fraction.`,
  plain: `<p>A measurement is a number <i>and</i> a unit. "60" means nothing until you say 60 miles per hour, or 60 kilograms. Changing units is a matter of rewriting the same amount in a different way.</p>
<p>The key idea is that a fraction like <span class="m">5280 ft / 1 mi</span> is equal to 1, because 5280 feet and 1 mile are the same length. Multiplying by 1 never changes a value. So you can multiply by as many of these <b>conversion factors</b> as you like, choosing each one so that the unit you want to get rid of is on the opposite side of the fraction bar. Then the units cancel, just like numbers do.</p>
<p>This method is called <b>dimensional analysis</b>. It is also a built-in error check. If the units at the end are not the ones you wanted, you set something up upside down.</p>`,
  formal: `<p>A physical quantity is a product <span class="m"><i>Q</i> = {<i>Q</i>} · [<i>Q</i>]</span> of a numerical value and a unit. A <b>conversion factor</b> is a ratio of two equal quantities expressed in different units, so its value is 1:</p>
<div class="display"><span class="c2"><span class="fr"><span>2.54 cm</span><span>1 in</span></span></span> = 1 &nbsp;&nbsp;⇒&nbsp;&nbsp; <i>Q</i> × <span class="c2"><span class="fr"><span>new unit</span><span>old unit</span></span></span> × ⋯ = <span class="c1"><i>Q</i> in new units</span><br><span class="dim">For area or volume, square or cube the factor: (<span class="fr"><span>0.3048 m</span><span>1 ft</span></span>)<sup>2</sup> = <span class="fr"><span>0.09290304 m<sup>2</sup></span><span>1 ft<sup>2</sup></span></span></span></div>
<p>Units obey the algebra of multiplication and division, so they cancel between numerator and denominator. A physically meaningful equation must be <b>dimensionally homogeneous</b>: every term has the same dimension (length, mass, time, and so on), and only like quantities are added. The International System of Units (SI) is built on seven base units, including the metre, kilogram and second. Some factors are exact by definition (1 in = 2.54 cm exactly), while others are rounded (1 kg ≈ 2.2046 lb).</p>`,
  legend: [
    { c: "c2", sym: `<span class="fr"><span>new</span><span>old</span></span>`, name: "Conversion factor", desc: "A ratio of equal amounts in two units. Its value is 1, so it changes only the units." },
    { c: "c1", sym: `<i>Q</i>`, name: "Result", desc: "The same quantity expressed in the target units after the unwanted units cancel." },
    { c: "c4", sym: `[ ]`, name: "Unit", desc: "The label attached to a number. Units multiply, divide and cancel like variables." }
  ],
  steps: { title: "How to convert with dimensional analysis", items: [
    `Write the given quantity with its units as a fraction, such as <span class="m">60 mi / 1 h</span>.`,
    `Write the units you want at the end.`,
    `Choose a conversion factor that puts the unwanted unit on the opposite side of the fraction bar.`,
    `Chain more factors until only the target units remain.`,
    `Cancel units, then multiply all numerators and divide by all denominators.`,
    `Check the final units and whether the size of the number makes sense.`
  ] },
  example: {
    prompt: `A child weighs 22 lb. A medication order is 15 mg per kg of body weight, and the liquid contains 160 mg per 5 mL. How many millilitres is one dose? (Use 1 kg = 2.2 lb.)`,
    lines: [
      { math: `<span class="m">22 lb × <span class="c2"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span></span> = 10 kg</span>`, note: "Pounds cancel, leaving kilograms." },
      { math: `<span class="m">10 kg × <span class="c2"><span class="fr"><span>15 mg</span><span>1 kg</span></span></span> = 150 mg</span>`, note: "The order is a rate: mg per kg. Kilograms cancel." },
      { math: `<span class="m">150 mg × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span> = <span class="fr"><span>750</span><span>160</span></span> mL</span>`, note: "Milligrams cancel, leaving millilitres." },
      { math: `<span class="m"><span class="fr"><span>750</span><span>160</span></span> = <span class="c1">4.6875 mL</span> ≈ 4.7 mL</span>`, note: "Round to a measurable amount." },
      { math: `<span class="m">22 lb × <span class="c2"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span></span> × <span class="c2"><span class="fr"><span>15 mg</span><span>1 kg</span></span></span> × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span></span>`, note: "The whole chain in one line. Only mL survives." }
    ],
    answer: `One dose is about <span class="m">4.7</span> mL.`
  },
  why: `<p>Units errors are some of the costliest mistakes in the real world. In 1999 NASA lost the Mars Climate Orbiter because one team used pound-force seconds while another expected newton-seconds. The same kind of error in medicine can mean a tenfold overdose. Dimensional analysis catches these errors because the units themselves tell you whether the setup is right.</p>
<p>Chemistry and physics courses rely on it constantly for converting moles, energy, pressure and speed. It is also a quick way to check any formula: if the units on both sides do not match, the formula is wrong.</p>`,
  careers: [
    { role: "Nurse", use: "Converts mg/kg dosing orders into millilitres of liquid medication and sets IV pumps in mL/h." },
    { role: "Chemist", use: "Chains conversion factors from grams to moles to molecules using molar mass and Avogadro's number." },
    { role: "Aircraft mechanic", use: "Converts between metric and imperial torque and pressure units such as N·m and ft·lb, or kPa and psi." },
    { role: "Civil engineer", use: "Converts flow rates between cubic feet per second and gallons per minute when sizing pipes and culverts." },
    { role: "Chef", use: "Converts recipes between cups, millilitres, ounces and grams." },
    { role: "Pilot", use: "Converts fuel between gallons, pounds and litres and speeds between knots and km/h." }
  ],
  life: [
    "Converting a recipe from metric to cups and ounces",
    "Working out a speed limit in km/h when driving abroad",
    "Figuring out how many square feet of flooring a room needs",
    "Reading medicine labels in mL and mg",
    "Comparing gas prices per litre and per gallon"
  ],
  fields: [
    { name: "Chemistry", use: "Stoichiometry and gas-law problems are solved as chains of conversion factors." },
    { name: "Physics", use: "Checking that an equation's units balance is a standard test of any derivation." },
    { name: "Engineering", use: "Designs mix units from different standards, and consistent conversion is required for safety." },
    { name: "Pharmacology", use: "Dose calculations convert between body mass, concentration and volume." }
  ],
  prereqWhy: {
    "proportions": "Every conversion factor states a proportion between equal amounts, such as 1 mi : 5280 ft.",
    "decimal-ops": "Conversion factors like 2.54 cm per inch and 0.3048 m per foot mean multiplying and dividing decimals."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus", why: "Rates of change carry units, such as m/s for a derivative of position, and integrals multiply units, such as m/s × s = m." },
    { field: "Differential equations", why: "Nondimensionalisation simplifies models by dividing out characteristic units." },
    { field: "Mathematical modelling", why: "The Buckingham π theorem uses dimensional analysis to find the form of physical laws." }
  ],
  mistakes: [
    { wrong: `Setting a factor upside down: <span class="m">22 lb × <span class="fr"><span>2.2 lb</span><span>1 kg</span></span></span>, giving lb²/kg.`, fix: `Put the unit you want to cancel on the bottom: <span class="m">22 lb × <span class="fr"><span>1 kg</span><span>2.2 lb</span></span> = 10 kg</span>.` },
    { wrong: `Converting area with a length factor: 1 yd² = 3 ft².`, fix: `Square the factor: <span class="m">1 yd² × (3 ft / 1 yd)<sup>2</sup> = 9 ft²</span>.` },
    { wrong: `Dropping units in the middle of a calculation.`, fix: `Write units on every number so you can see them cancel. The final unit is your check.` }
  ],
  practice: [
    { q: `Convert 3.5 ft to inches.`, a: `<span class="m">3.5 ft × <span class="fr"><span>12 in</span><span>1 ft</span></span> = 42 in</span>` },
    { q: `Convert 2.5 L to millilitres.`, a: `<span class="m">2.5 L × <span class="fr"><span>1000 mL</span><span>1 L</span></span> = 2,500 mL</span>` },
    { q: `Convert 45 km/h to metres per second.`, a: `<span class="m">45 <span class="fr"><span>km</span><span>h</span></span> × <span class="fr"><span>1000 m</span><span>1 km</span></span> × <span class="fr"><span>1 h</span><span>3600 s</span></span> = <span class="fr"><span>45,000</span><span>3600</span></span> = 12.5 m/s</span>` },
    { q: `A room is 150 ft². What is its area in square metres? (1 ft = 0.3048 m exactly.)`, a: `<span class="m">150 ft² × (0.3048 m / 1 ft)<sup>2</sup> = 150 × 0.09290304 ≈ 13.9 m²</span>` }
  ],
  origin: `France introduced the metric system in the 1790s, basing the metre on the size of the Earth. In 1959 the United States and other English-speaking countries agreed to define the inch as exactly 2.54 cm, and in 1960 the metric system was formalised as the International System of Units (SI).`
};
