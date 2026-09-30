window.ARITH = window.ARITH || {};

ARITH["properties"] = {
  title: "Laws of Arithmetic",
  short: "The rules that let you rearrange and regroup.",
  grade: "Grades 3–7",
  hours: 5,
  voice: "mixed",
  eyebrow: "Structure · commutative, associative, distributive",
  hero: `<span class="m"><span class="c2"><i>a</i></span>(<span class="c3"><i>b</i></span> + <span class="c4"><i>c</i></span>) = <span class="c2"><i>a</i></span><span class="c3"><i>b</i></span> + <span class="c2"><i>a</i></span><span class="c4"><i>c</i></span></span>`,
  lede: `A few laws hold for every number: you can swap the order of addends or factors, regroup them, and split a product over a sum. Mental math and all of algebra rely on them.`,
  plain: `<p>Some rules work no matter which numbers you pick. They are called the <b>laws</b> or <b>properties</b> of arithmetic. You already use them without naming them.</p>
<p><b>Commutative</b>: order doesn't matter for adding or multiplying. <span class="m">3 + 5 = 5 + 3</span>, and a 3-by-5 array turned on its side is a 5-by-3 array with the same 15 dots. <b>Associative</b>: grouping doesn't matter either. <span class="m">(2 + 7) + 3 = 2 + (7 + 3)</span>, and grouping the 7 and 3 first makes an easy 10.</p>
<p><b>Distributive</b>: multiplying a sum is the same as multiplying each part and adding. A rectangle 6 wide and <span class="m">10 + 4</span> tall splits into a 6 × 10 piece and a 6 × 4 piece. So <span class="m">6 × 14 = 60 + 24 = 84</span>.</p>
<p><b>Identity</b>: adding 0 or multiplying by 1 leaves a number alone. <b>Inverse</b>: every number has a partner that brings you back to the identity. Adding 5 is undone by adding −5. Multiplying by 5 is undone by multiplying by 1/5. Subtraction and division do not follow the commutative or associative laws.</p>`,
  formal: `<p>For all numbers <span class="m c2"><i>a</i></span>, <span class="m c3"><i>b</i></span>, <span class="m c4"><i>c</i></span> (whole numbers, integers, rationals or reals):</p>
<div class="display">Commutative: &nbsp;<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; <i>ab</i> = <i>ba</i><br>Associative: &nbsp;(<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; (<i>ab</i>)<i>c</i> = <i>a</i>(<i>bc</i>)<br>Distributive: &nbsp;<i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i><br>Identity: &nbsp;<i>a</i> + 0 = <i>a</i> &nbsp;·&nbsp; <i>a</i> · 1 = <i>a</i><br>Inverse: &nbsp;<i>a</i> + (−<i>a</i>) = 0 &nbsp;·&nbsp; <i>a</i> · <span class="fr"><span>1</span><span><i>a</i></span></span> = 1 for <i>a</i> ≠ 0</div>
<p>The additive inverse <span class="m">−<i>a</i></span> exists only once the integers ℤ are available, and the multiplicative inverse (<b>reciprocal</b>) <span class="m">1/<i>a</i></span> only in the rationals ℚ or reals ℝ; 0 has no reciprocal. A set with two operations obeying all of these laws is called a <b>field</b>; ℚ and ℝ are fields, while ℤ lacks multiplicative inverses and the whole numbers lack both kinds of inverse. The <b>zero property</b> <span class="m"><i>a</i> · 0 = 0</span> follows from the distributive, identity and additive inverse laws.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First number", desc: "In the distributive law, the multiplier applied to each part of the sum." },
    { c: "c3", sym: `<i>b</i>`, name: "Second number", desc: "The first part of the sum, or the second term being swapped or regrouped." },
    { c: "c4", sym: `<i>c</i>`, name: "Third number", desc: "The second part of the sum, or the third term in a regrouping." }
  ],
  steps: { title: "How to use the laws for mental math", items: [
    `Look for pairs that make friendly numbers, like 25 and 4 (100), or 7 and 3 (10).`,
    `Use the commutative law to move those numbers next to each other.`,
    `Use the associative law to group the friendly pair first.`,
    `For a product with an awkward factor like 98 or 14, write it as a sum or difference of easy numbers: <span class="m">98 = 100 − 2</span>.`,
    `Use the distributive law to multiply each part, then combine.`
  ] },
  example: {
    prompt: `Concert tickets cost $49 each. You buy 8 for a group. Work out the total in your head.`,
    lines: [
      { math: `<span class="c2">8</span> × 49 = <span class="c2">8</span> × (<span class="c3">50</span> − <span class="c4">1</span>)`, note: "Rewrite 49 as a friendly number minus a small one." },
      { math: `= <span class="c2">8</span> × <span class="c3">50</span> − <span class="c2">8</span> × <span class="c4">1</span>`, note: "Distributive law (it works over subtraction too)." },
      { math: `= 400 − 8`, note: "Each product is easy." },
      { math: `= 392`, note: "Subtract." },
      { math: `8 × 49 = 392 <span class="dim">(column check)</span>`, note: "Standard multiplication gives the same result." }
    ],
    answer: `The 8 tickets cost <span class="m">$392</span>.`
  },
  why: `<p>These laws are why mental math works. Rearranging a grocery list total to pair up round numbers, or pricing 6 items at $99 as $600 − $6, uses them directly. They also explain why the column algorithms for addition and multiplication give correct answers.</p>
<p>Algebra is mostly these laws applied to letters. Combining like terms, expanding <span class="m">3(<i>x</i> + 4)</span>, factoring and solving equations are all uses of the commutative, associative, distributive, identity and inverse laws. Higher algebra studies which systems obey which laws: matrices, for instance, are not commutative under multiplication.</p>`,
  careers: [
    { role: "Retail cashier", use: "Rearranges and regroups prices mentally to total a small order quickly when a register is down." },
    { role: "Software engineer", use: "Relies on associativity to split a sum across many processors and combine the partial results in any grouping." },
    { role: "Compiler engineer", use: "Writes optimizations that reorder or factor arithmetic using the commutative and distributive laws, while guarding cases where floating-point rounding breaks them." },
    { role: "Accountant", use: "Applies a tax or discount rate to a subtotal instead of to each line, which is the distributive law." },
    { role: "Actuary", use: "Simplifies long premium and reserve formulas by factoring out common rates." }
  ],
  life: [
    "Adding a list of prices in whatever order is easiest",
    "Finding the cost of 6 items at $99 as 600 − 6",
    "Figuring a 20% tip on the whole bill instead of each item",
    "Doubling a recipe by doubling each ingredient",
    "Grouping coins into dollars before counting the rest"
  ],
  fields: [
    { name: "Algebra", use: "Every simplification and equation-solving step is justified by one of these laws." },
    { name: "Computer science", use: "Parallel algorithms and compilers use associativity and commutativity to reorder calculations safely." },
    { name: "Physics", use: "Vector addition is commutative and associative, which lets forces be added in any order." }
  ],
  prereqWhy: {
    "multiplication": "Three of the laws concern multiplication, and the distributive law links multiplication to addition, so you need fluent products."
  },
  unlocksWhy: {
    "order-ops": "The distributive law explains why parentheses matter, and the associative and commutative laws explain which rearrangements are safe.",
    "exponents": "The rules for exponents, such as multiplying powers with the same base, are proved using the associative and commutative laws."
  },
  beyond: [
    { field: "Algebra I", why: "Expanding, factoring and solving equations are direct applications of these laws." },
    { field: "Abstract algebra", why: "Groups, rings and fields are defined by lists of exactly these properties." },
    { field: "Linear algebra", why: "Vector spaces are defined by these laws, and matrix multiplication shows what happens when commutativity fails." }
  ],
  mistakes: [
    { wrong: `Distributing to only the first term: <span class="m">6(10 + 4) = 60 + 4</span>.`, fix: `Multiply every term inside: <span class="m">6(10 + 4) = 60 + 24 = 84</span>.` },
    { wrong: `Assuming subtraction is associative: <span class="m">(10 − 4) − 3 = 10 − (4 − 3)</span>.`, fix: `The left side is 3 and the right side is 9. Subtraction and division are neither commutative nor associative.` },
    { wrong: `Distributing multiplication over multiplication: <span class="m">2 × (3 × 5) = (2 × 3) × (2 × 5)</span>.`, fix: `Multiplication distributes over addition only. <span class="m">2 × (3 × 5) = 30</span>, while the right side is 60.` }
  ],
  practice: [
    { q: `Which law says <span class="m">5 + (3 + 9) = (5 + 3) + 9</span>?`, a: `The <b>associative law of addition</b>. Only the grouping changed.` },
    { q: `Use the distributive law to find <span class="m">6 × 14</span>.`, a: `<span class="m">6 × (10 + 4) = 60 + 24 = </span><b>84</b>.` },
    { q: `Find <span class="m">25 × 17 × 4</span> in your head.`, a: `Commute and regroup: <span class="m">(25 × 4) × 17 = 100 × 17 = </span><b>1,700</b>.` },
    { q: `Find <span class="m">8 × 97</span> using the distributive law.`, a: `<span class="m">8 × (100 − 3) = 800 − 24 = </span><b>776</b>.` }
  ],
  origin: `François-Joseph Servois introduced the terms "commutative" and "distributive" in 1814. William Rowan Hamilton introduced "associative" in the 1840s, while working with quaternions, a number system whose multiplication is not commutative.`
};
