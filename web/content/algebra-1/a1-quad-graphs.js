window.ARITH = window.ARITH || {};

ARITH["a1-quad-graphs"] = {
  title: "Graphing Quadratic Functions",
  short: "Parabolas: vertex, axis of symmetry and intercepts",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Functions · parabolas",
  hero: `<span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup> + <span class="c1"><i>k</i></span> &nbsp;&nbsp; vertex <span class="c1">(<i>h</i>, <i>k</i>)</span>, &nbsp;axis <span class="c4"><i>x</i> = <i>h</i></span></span>`,
  lede: `The graph of a quadratic function is a parabola. It is symmetric about the <span class="c4">axis of symmetry</span>, turns at the <span class="c1">vertex</span>, opens up when <span class="m"><i>a</i> &gt; 0</span> and down when <span class="m"><i>a</i> &lt; 0</span>, and crosses the axes at its <span class="c2">intercepts</span>.`,
  plain: `<p>The simplest quadratic function is <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span>. Its graph is a U shape called a parabola, with its lowest point at the origin. Every other quadratic graph is this same shape, stretched or squashed, possibly flipped upside down, and slid to a new position.</p>
<p>Vertex form <span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> shows all of that directly. The number <span class="m"><i>h</i></span> slides the graph right, <span class="m"><i>k</i></span> slides it up, and the turning point, the <b>vertex</b>, lands at <span class="m">(<i>h</i>, <i>k</i>)</span>. Watch the sign: <span class="m">(<i>x</i> − 3)<sup>2</sup></span> moves the graph 3 to the right, and <span class="m">(<i>x</i> + 3)<sup>2</sup></span> moves it 3 to the left. The number <span class="m"><i>a</i></span> controls direction and width: positive opens up, negative opens down, and a bigger size means a narrower parabola.</p>
<p>A quadratic in standard form <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> hides the vertex, but one formula finds it: the axis of symmetry is <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>. Plug that <span class="m"><i>x</i></span> in to get the <span class="m"><i>y</i></span>-value of the vertex. The <span class="m"><i>y</i></span>-intercept is just <span class="m"><i>c</i></span>, and the <span class="m"><i>x</i></span>-intercepts are the solutions of <span class="m"><i>f</i>(<i>x</i>) = 0</span>.</p>`,
  formal: `<p>A <b>quadratic function</b> is <span class="m"><i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> with <span class="m"><i>a</i> ≠ 0</span> (<b>standard form</b>), or equivalently <span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> (<b>vertex form</b>). Its graph is a <b>parabola</b>.</p>
<div class="display">axis of symmetry: <i>x</i> = <i>h</i> = −<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span> &nbsp;&nbsp; vertex: (<i>h</i>, <i>k</i>) = (−<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>, <i>f</i>(−<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>))<br>domain: (−∞, ∞) &nbsp;&nbsp; range: [<i>k</i>, ∞) if <i>a</i> &gt; 0 <span class="dim">(minimum <i>k</i>)</span>, &nbsp;(−∞, <i>k</i>] if <i>a</i> &lt; 0 <span class="dim">(maximum <i>k</i>)</span><br><i>y</i>-intercept: (0, <i>c</i>) &nbsp;&nbsp; <i>x</i>-intercepts: real solutions of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</div>
<p>The number of <span class="m"><i>x</i></span>-intercepts is 2, 1 or 0 according as the discriminant <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span> is positive, zero or negative. The graph of <span class="m"><i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> is the graph of <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> stretched vertically by <span class="m">|<i>a</i>|</span>, reflected in the <span class="m"><i>x</i></span>-axis if <span class="m"><i>a</i> &lt; 0</span>, and translated <span class="m"><i>h</i></span> units horizontally and <span class="m"><i>k</i></span> units vertically. Standard form is converted to vertex form by completing the square.</p>`,
  legend: [
    { c: "c1", sym: `(<i>h</i>, <i>k</i>)`, name: "Vertex", desc: "The turning point: the minimum if the parabola opens up, the maximum if it opens down." },
    { c: "c4", sym: `<i>x</i> = <i>h</i>`, name: "Axis of symmetry", desc: "The vertical line through the vertex. The two halves of the parabola are mirror images across it. In standard form h = −b/(2a)." },
    { c: "c2", sym: `(0, <i>c</i>), (<i>x</i><sub>1</sub>, 0)`, name: "Intercepts", desc: "Where the graph crosses the axes. The y-intercept is c; the x-intercepts are the real roots, if any." },
    { c: "c3", sym: `<i>a</i>`, name: "Leading coefficient", desc: "Its sign sets the direction (up if positive, down if negative) and its size sets the width." }
  ],
  steps: { title: "How to graph a quadratic function", items: [
    `Determine the direction: opens up if <span class="m"><i>a</i> &gt; 0</span>, down if <span class="m"><i>a</i> &lt; 0</span>.`,
    `Find the <span class="c4">axis of symmetry</span>: <span class="m"><i>x</i> = <i>h</i></span> from vertex form, or <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span> from standard form.`,
    `Find the <span class="c1">vertex</span> by evaluating the function at that <span class="m"><i>x</i></span>-value.`,
    `Find the <span class="c2"><i>y</i>-intercept</span> <span class="m">(0, <i>f</i>(0))</span> and reflect it across the axis of symmetry to get a second point.`,
    `Find the <span class="c2"><i>x</i>-intercepts</span> by solving <span class="m"><i>f</i>(<i>x</i>) = 0</span> (factoring or the quadratic formula). If the discriminant is negative, there are none.`,
    `Plot the points, draw a smooth U-shaped curve through them, and state the domain and range.`
  ] },
  example: {
    prompt: `The water from a fountain jet follows <span class="m"><i>h</i>(<i>x</i>) = −0.5<i>x</i><sup>2</sup> + 4<i>x</i> + 1</span>, where <span class="m"><i>x</i></span> is the horizontal distance from the nozzle and <span class="m"><i>h</i></span> is the height, both in metres. Find the highest point of the arc and where the water lands.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>a</i> = −0.5</span>, &nbsp;<i>b</i> = 4, &nbsp;<i>c</i> = 1</span>`, note: "a is negative, so the parabola opens down and the vertex is a maximum." },
      { math: `<span class="m"><span class="c4"><i>x</i> = −<span class="fr"><span>4</span><span>2(−0.5)</span></span> = 4</span></span>`, note: "Axis of symmetry from x = −b/(2a)." },
      { math: `<span class="m"><i>h</i>(4) = −0.5(16) + 16 + 1 = <span class="c1">9</span></span>`, note: "The vertex is (4, 9)." },
      { math: `<span class="m"><span class="c2">(0, 1)</span></span>`, note: "y-intercept: the nozzle is 1 m above the ground." },
      { math: `<span class="m">−0.5<i>x</i><sup>2</sup> + 4<i>x</i> + 1 = 0 &nbsp;⇒&nbsp; <i>x</i><sup>2</sup> − 8<i>x</i> − 2 = 0</span>`, note: "The water lands where h = 0. Multiply by −2 to simplify." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>8 ± √72</span><span>2</span></span> = 4 ± 3√2, &nbsp; <span class="c2"><i>x</i> ≈ 8.24</span></span>`, note: "Quadratic formula; the negative root 4 − 3√2 is behind the nozzle and is rejected." }
    ],
    answer: `The water reaches a maximum height of <span class="m c1">9 m</span> at 4 m from the nozzle and lands about <span class="m c2">8.24 m</span> away.`
  },
  why: `<p>Quadratic functions model anything with a single peak or a single low point: the path of a thrown object, the shape of a satellite dish or a bridge cable, revenue as price rises, the cost per unit as production grows. The vertex answers the most common question, "what is the best or worst value and where does it occur?", and the intercepts answer "when does it start or stop?".</p>
<p>Graphing a parabola also brings together everything about quadratics: factoring and the quadratic formula give the <span class="m"><i>x</i></span>-intercepts, completing the square gives vertex form, and the discriminant tells you how many intercepts to expect. The ideas of shifting, stretching and reflecting a parent graph apply to every function family in precalculus.</p>`,
  careers: [
    { role: "Civil engineer", use: "Designs parabolic vertical curves on roads so drivers pass smoothly over hills, using the vertex to set the high point." },
    { role: "Antenna engineer", use: "Shapes satellite dishes as parabolas so incoming signals reflect to the receiver at the focus." },
    { role: "Sports analyst", use: "Fits quadratic functions to tracked ball flight data to estimate peak height and landing distance." },
    { role: "Marketing analyst", use: "Graphs revenue as a quadratic function of price to find the vertex, the price that maximises revenue." },
    { role: "Architect", use: "Uses parabolic arches in bridges and roofs, choosing the vertex height and the width at the base." },
    { role: "Fountain and lighting designer", use: "Aims water jets and stage effects using the parabolic path of the stream to control where it lands." }
  ],
  life: [
    "Predicting how high and how far a thrown ball will go",
    "Recognising the curved shape of a satellite dish or car headlight reflector",
    "Seeing why raising a price too far can lower total sales income",
    "Aiming a garden hose to reach a particular spot"
  ],
  fields: [
    { name: "Physics", use: "Projectile paths under gravity are parabolas, and height versus time is a quadratic function." },
    { name: "Engineering", use: "Parabolic reflectors, arches and road curves are designed from quadratic functions." },
    { name: "Economics", use: "Quadratic revenue and profit models are maximised at the vertex." },
    { name: "Statistics", use: "Quadratic regression fits a parabola to data that rise and then fall." }
  ],
  prereqWhy: {
    "a1-quad-formula": "The x-intercepts of a parabola are found with the quadratic formula, and the discriminant tells how many there are.",
    "a1-functions": "A parabola is the graph of a function, so evaluating f(x) and stating the domain and range are needed to describe it."
  },
  unlocksWhy: {
    "a1-quad-apps": "Maximum height, maximum area and maximum revenue problems are answered by finding the vertex of a parabola."
  },
  beyond: [
    { field: "Algebra II", why: "Transformations of the parent graph y = x² extend to every function family, and quadratic inequalities are solved from the graph." },
    { field: "Precalculus", why: "The parabola is one of the conic sections, defined by a focus and directrix." },
    { field: "Calculus I", why: "The vertex is the first example of an extreme value, which calculus finds for any function by setting the derivative to zero." },
    { field: "Physics", why: "Motion graphs with constant acceleration are parabolas, and their vertices mark where the velocity is zero." }
  ],
  mistakes: [
    { wrong: `Reading the vertex of <span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − 3)<sup>2</sup> − 5</span> as <span class="m">(−3, −5)</span>.`, fix: `In <span class="m"><i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span>, <span class="m"><i>h</i> = 3</span>. The vertex is <span class="m">(3, −5)</span>. For <span class="m">(<i>x</i> + 3)<sup>2</sup></span>, <span class="m"><i>h</i> = −3</span>.` },
    { wrong: `Using <span class="m"><i>x</i> = <i>b</i>/(2<i>a</i>)</span> for the axis of symmetry.`, fix: `The formula has a negative sign: <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>. For <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> + 5</span> that is <span class="m"><i>x</i> = 3</span>, not <span class="m">−3</span>.` },
    { wrong: `Giving the range as <span class="m">(−∞, ∞)</span> like a line.`, fix: `A parabola has a highest or lowest point. If <span class="m"><i>a</i> &gt; 0</span> the range is <span class="m">[<i>k</i>, ∞)</span>; if <span class="m"><i>a</i> &lt; 0</span> it is <span class="m">(−∞, <i>k</i>]</span>.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − 3)<sup>2</sup> − 5</span>, give the vertex, axis of symmetry, direction and range.`, a: `Vertex <span class="m">(3, −5)</span>, axis <span class="m"><i>x</i> = 3</span>, opens up since <span class="m"><i>a</i> = 2 &gt; 0</span>, range <span class="m">[−5, ∞)</span>.` },
    { q: `Find the vertex and all intercepts of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 6<i>x</i> + 5</span>.`, a: `Axis <span class="m"><i>x</i> = 6/2 = 3</span>, <span class="m"><i>f</i>(3) = 9 − 18 + 5 = −4</span>, vertex <span class="m">(3, −4)</span>. <span class="m"><i>y</i></span>-intercept <span class="m">(0, 5)</span>. <span class="m">(<i>x</i> − 1)(<i>x</i> − 5) = 0</span> gives <span class="m"><i>x</i></span>-intercepts <span class="m">(1, 0)</span> and <span class="m">(5, 0)</span>.` },
    { q: `Write <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 4<i>x</i> + 7</span> in vertex form and find its <span class="m"><i>x</i></span>-intercepts.`, a: `<span class="m"><i>x</i><sup>2</sup> + 4<i>x</i> + 4 + 3 = (<i>x</i> + 2)<sup>2</sup> + 3</span>, vertex <span class="m">(−2, 3)</span>. It opens up from a minimum of 3, and the discriminant is <span class="m">16 − 28 = −12 &lt; 0</span>, so there are <b>no <span class="m"><i>x</i></span>-intercepts</b>.` },
    { q: `Find the quadratic function with vertex <span class="m">(1, −8)</span> whose graph passes through <span class="m">(3, 0)</span>. Give it in standard form.`, a: `<span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − 1)<sup>2</sup> − 8</span>. Then <span class="m">0 = <i>a</i>(2)<sup>2</sup> − 8</span>, so <span class="m"><i>a</i> = 2</span>. <span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − 1)<sup>2</sup> − 8 = 2<i>x</i><sup>2</sup> − 4<i>x</i> − 6</span>.` }
  ],
  origin: `Apollonius of Perga named the parabola in his <i>Conics</i> (about 200 BCE), studying it as a slice of a cone. In <i>Two New Sciences</i> (1638), Galileo Galilei showed that a projectile, ignoring air resistance, follows a parabolic path.`
};
