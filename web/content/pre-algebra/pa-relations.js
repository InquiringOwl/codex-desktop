window.ARITH = window.ARITH || {};

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
