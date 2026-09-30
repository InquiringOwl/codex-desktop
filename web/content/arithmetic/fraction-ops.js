window.ARITH = window.ARITH || {};

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
