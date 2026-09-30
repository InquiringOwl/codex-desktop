window.ARITH = window.ARITH || {};

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
