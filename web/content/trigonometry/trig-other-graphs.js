window.ARITH = window.ARITH || {};
ARITH["trig-other-graphs"] = {
  title: "Graphs of Tangent, Cotangent, Secant & Cosecant",
  short: "tan, cot, sec and csc: branches between asymptotes",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Graphs & inverses · the other four graphs",
  hero: `<span class="m"><span class="c5">tan <i>x</i></span> = <span class="fr"><span class="c3">sin <i>x</i></span><span class="c2">cos <i>x</i></span></span> &nbsp;&nbsp; asymptotes <span class="c4"><i>x</i> = π/2 + <i>n</i>π</span> &nbsp;&nbsp; period π</span>`,
  lede: `The other four trigonometric functions are built from sine and cosine by dividing. Wherever the denominator is zero the graph breaks at a <b>vertical asymptote</b>, so each graph is a row of separate <b>branches</b>.`,
  plain: `<p>Take the sine and cosine curves and divide one by the other, point by point. Where <span class="m c2">cos <i>x</i></span> is small, <span class="m c5">tan <i>x</i> = <span class="c3">sin <i>x</i></span>/<span class="c2">cos <i>x</i></span></span> is huge. Where <span class="m c2">cos <i>x</i> = 0</span>, at <span class="m">π/2</span>, <span class="m">3π/2</span> and so on, there is no value at all: the graph shoots up on one side and down on the other. These breaks are vertical asymptotes, the same as for a rational function whose denominator is zero.</p>
<p>Between two asymptotes the tangent graph is one rising branch through a zero. The next branch is an exact copy, so tangent repeats every <span class="m">π</span>, half the period of sine. Cotangent is cosine over sine: its asymptotes sit where sine is zero and its branches fall.</p>
<p>Secant and cosecant are 1 over cosine and 1 over sine. Where cosine is 1, secant is 1 too; where cosine shrinks toward 0, secant grows without bound. The result is a row of U-shaped branches, opening up above the peaks of the cosine curve and down below its troughs, each touching the cosine curve at its tip. These graphs never come between <span class="m">−1</span> and <span class="m">1</span>.</p>`,
  formal: `<div class="display"><span class="c5">tan <i>x</i></span> = <span class="fr"><span class="c3">sin <i>x</i></span><span class="c2">cos <i>x</i></span></span>: &nbsp; domain <i>x</i> ≠ π/2 + <i>n</i>π, &nbsp; range ℝ, &nbsp; period π, &nbsp; odd, &nbsp; zeros <i>x</i> = <i>n</i>π<br>cot <i>x</i> = <span class="fr"><span class="c2">cos <i>x</i></span><span class="c3">sin <i>x</i></span></span>: &nbsp; domain <i>x</i> ≠ <i>n</i>π, &nbsp; range ℝ, &nbsp; period π, &nbsp; odd, &nbsp; zeros <i>x</i> = π/2 + <i>n</i>π<br>sec <i>x</i> = <span class="fr"><span>1</span><span class="c2">cos <i>x</i></span></span>: &nbsp; domain <i>x</i> ≠ π/2 + <i>n</i>π, &nbsp; range (−∞, −1] ∪ [1, ∞), &nbsp; period 2π, &nbsp; even<br>csc <i>x</i> = <span class="fr"><span>1</span><span class="c3">sin <i>x</i></span></span>: &nbsp; domain <i>x</i> ≠ <i>n</i>π, &nbsp; range (−∞, −1] ∪ [1, ∞), &nbsp; period 2π, &nbsp; odd</div>
<p>Here <span class="m"><i>n</i></span> is any integer. The <span class="c4">vertical asymptotes</span> of tan and sec are the zeros of cosine, <span class="m c4"><i>x</i> = π/2 + <i>n</i>π</span>; those of cot and csc are the zeros of sine, <span class="m c4"><i>x</i> = <i>n</i>π</span>. On each interval between asymptotes, tan is increasing and cot is decreasing. Secant has its local minimum value 1 where <span class="m">cos <i>x</i> = 1</span> and its local maximum value −1 where <span class="m">cos <i>x</i> = −1</span>; cosecant does the same with sine.</p>
<p>For <span class="m"><i>y</i> = <span class="c3"><i>A</i></span> tan(<span class="c2"><i>B</i></span>(<i>x</i> − <span class="c1"><i>C</i></span>)) + <span class="c4"><i>D</i></span></span> (and cot), the period is <span class="m">π/|<i>B</i>|</span>. Tangent and cotangent have no amplitude: <span class="m"><i>A</i></span> is a vertical stretch that puts the quarter points at <span class="m"><i>y</i> = <i>D</i> ± <i>A</i></span>. For sec and csc the period is <span class="m">2π/|<i>B</i>|</span> and the range is <span class="m">(−∞, <i>D</i> − |<i>A</i>|] ∪ [<i>D</i> + |<i>A</i>|, ∞)</span>. In every case the asymptotes are spaced <span class="m">π/|<i>B</i>|</span> apart.</p>`,
  legend: [
    { c: "c3", sym: `sin <i>x</i>`, name: "Sine", desc: "The numerator of tan and the denominator of cot and csc." },
    { c: "c2", sym: `cos <i>x</i>`, name: "Cosine", desc: "The denominator of tan and sec; its zeros are their asymptotes." },
    { c: "c5", sym: `tan, cot, sec, csc`, name: "Result", desc: "The quotient or reciprocal, built point by point." },
    { c: "c4", sym: `<i>x</i> = π/2 + <i>n</i>π`, name: "Vertical asymptote", desc: "Where the denominator is 0; the graph runs off to ±∞ beside it." },
    { c: "c1", sym: `<i>C</i>`, name: "Phase shift", desc: "Slides the whole graph, asymptotes included, left or right." }
  ],
  steps: {
    title: "How to graph y = A tan(B(x − C)) + D",
    items: [
      `Find the period <span class="m">π/|<span class="c2"><i>B</i></span>|</span>. For sec and csc use <span class="m">2π/|<span class="c2"><i>B</i></span>|</span>.`,
      `Find two neighbouring asymptotes: solve <span class="m"><i>B</i>(<i>x</i> − <i>C</i>) = −π/2</span> and <span class="m"><i>B</i>(<i>x</i> − <i>C</i>) = π/2</span>. Draw them dashed.`,
      `Plot the centre point <span class="m">(<span class="c1"><i>C</i></span>, <span class="c4"><i>D</i></span>)</span>, halfway between them.`,
      `Plot the quarter points a quarter period either side of the centre, at heights <span class="m"><i>D</i> − <i>A</i></span> and <span class="m"><i>D</i> + <i>A</i></span>.`,
      `Draw the branch through the three points, bending toward the asymptotes. Repeat it every period.`,
      `For sec or csc, sketch the matching cosine or sine curve dashed instead. Its midline crossings are the asymptotes; draw a U at each peak and trough.`
    ]
  },
  example: {
    prompt: `Graph one period of <span class="m"><i>y</i> = <span class="c3">2</span> tan(<span class="c2">2</span>(<i>x</i> − <span class="c1">π/4</span>)) + <span class="c4">1</span></span>. Give the period, the asymptotes, three key points, the domain and the range.`,
    lines: [
      { math: `<span class="m">period = <span class="fr"><span>π</span><span><span class="c2">2</span></span></span> = π/2</span>`, note: "Tangent repeats every π, so divide π by B, not 2π." },
      { math: `<span class="m">2(<i>x</i> − π/4) = −π/2 ⇒ <span class="c4"><i>x</i> = 0</span>; &nbsp; 2(<i>x</i> − π/4) = π/2 ⇒ <span class="c4"><i>x</i> = π/2</span></span>`, note: "These two asymptotes bound one branch." },
      { math: `<span class="m">asymptotes <span class="c4"><i>x</i> = <i>n</i>π/2</span></span>`, note: "Neighbouring asymptotes are one period apart." },
      { math: `<span class="m">centre (<span class="c1">π/4</span>, <span class="c4">1</span>)</span>`, note: "Halfway between 0 and π/2, at height D = 1." },
      { math: `<span class="m"><i>y</i>(π/8) = 2 tan(−π/4) + 1 = −1, &nbsp; <i>y</i>(3π/8) = 2 tan(π/4) + 1 = 3</span>`, note: "A quarter period, π/8, either side of the centre." },
      { math: `<span class="m">domain <i>x</i> ≠ <i>n</i>π/2, &nbsp; range ℝ</span>`, note: "Each branch still takes every real value." }
    ],
    answer: `Period <span class="m">π/2</span>; asymptotes <span class="m c4"><i>x</i> = <i>n</i>π/2</span>; key points <span class="m c5">(π/8, −1)</span>, <span class="m c5">(π/4, 1)</span>, <span class="m c5">(3π/8, 3)</span>; domain <span class="m"><i>x</i> ≠ <i>n</i>π/2</span>, range <span class="m">ℝ</span>. The branch rises from the asymptote <span class="m"><i>x</i> = 0</span> to the asymptote <span class="m"><i>x</i> = π/2</span>.`
  },
  why: `<p>Tangent is the slope of a line at angle θ, so it shows up wherever a ratio of two sides changes as something turns: the height a searchlight beam reaches on a wall, the length of a shadow, the position of a spot swept along a straight track by a rotating beam. Those quantities blow up exactly where the graph has an asymptote, when the beam turns parallel to the wall. Secant and cosecant appear as reciprocals in physics and engineering formulas. Knowing the shapes, the periods and where the breaks fall lets you read those formulas at a glance and avoid dividing by zero.</p>`,
  careers: [
    { role: "Surveyor", use: "Converts measured angles to heights and distances with tangent, and knows the readings near 90° are the least reliable." },
    { role: "Optical engineer", use: "Uses tangent and secant in lens and mirror formulas, where small angle changes near the asymptote cause large image shifts." },
    { role: "Lighting designer", use: "Works out where a tilted beam lands on a wall or stage with distance × tan θ." },
    { role: "Civil engineer", use: "Relates road grade, slope angle and rise over run through tangent." },
    { role: "Game programmer", use: "Builds the camera's field of view from tan of half the viewing angle in the projection matrix." },
    { role: "Astronomer", use: "Finds the height of lunar mountains from shadow lengths, height = shadow × tan of the sun's elevation." }
  ],
  life: [
    "The spot of a lighthouse beam racing along a straight shoreline",
    "A shadow that gets very long as the sun nears the horizon",
    "Road signs giving a hill's grade as a percentage",
    "The field-of-view setting in a video game",
    "A rotating security camera sweeping a long wall"
  ],
  fields: [
    { name: "Physics", use: "A beam sweeping at a steady angular speed moves along a wall at a rate that grows like sec² of the angle." },
    { name: "Calculus", use: "The derivative of tan x is sec² x, and secant integrals appear in arc length problems." },
    { name: "Computer graphics", use: "Perspective projection divides by depth using tan of half the field-of-view angle." },
    { name: "Navigation", use: "Mercator map charts space their latitude lines with an integral of sec φ." }
  ],
  prereqWhy: {
    "trig-sin-cos-graphs": "Every graph here is built point by point from the sine and cosine curves: their zeros become asymptotes and their peaks become the tips of the secant and cosecant branches.",
    "trig-fundamental-ids": "The quotient and reciprocal identities tan x = sin x / cos x, sec x = 1/cos x and csc x = 1/sin x say what to divide, and periodicity gives tan and cot period π.",
    "a2-rational-func": "A vertical asymptote appears where a denominator is 0 and the numerator is not, exactly as for a rational function."
  },
  unlocksWhy: {
    "trig-inverse": "Restricting tan x to the single branch between −π/2 and π/2 makes it one-to-one, and that branch reflected in y = x is the graph of tan⁻¹ x."
  },
  beyond: [
    { field: "Calculus I", why: "The derivatives of tan, cot, sec and csc, and limits beside their asymptotes, rely on these graphs." },
    { field: "Calculus II", why: "Integrals of sec x and tan x, and the substitution x = a tan θ, use their domains and ranges." },
    { field: "Physics (Optics)", why: "Refraction and lens formulas use tan and sec of angles of incidence." },
    { field: "Computer graphics", why: "Projection matrices and field of view are written with tan of half an angle." }
  ],
  mistakes: [
    { wrong: `<span class="m">sec <i>x</i> = 1/sin <i>x</i></span>.`, fix: `Secant goes with cosine: <span class="m">sec <i>x</i> = 1/cos <i>x</i></span> and <span class="m">csc <i>x</i> = 1/sin <i>x</i></span>. Each reciprocal pair has exactly one "co": secant with cosine, cosecant with sine.` },
    { wrong: `The period of <span class="m"><i>y</i> = tan 2<i>x</i></span> is <span class="m">2π/2 = π</span>.`, fix: `Tangent repeats every <span class="m">π</span>, so the period is <span class="m">π/2</span>. Use <span class="m">2π/|<i>B</i>|</span> only for sin, cos, sec and csc.` },
    { wrong: `The amplitude of <span class="m"><i>y</i> = 3 tan <i>x</i></span> is 3.`, fix: `Tangent has no maximum, so no amplitude. The 3 is a vertical stretch: the quarter points move to <span class="m">(±π/4, ±3)</span>.` },
    { wrong: `<span class="m">csc <i>x</i></span> crosses zero where <span class="m">sin <i>x</i></span> does.`, fix: `Where <span class="m">sin <i>x</i> = 0</span>, <span class="m">csc <i>x</i></span> is undefined: an asymptote. The values of csc never lie strictly between <span class="m">−1</span> and <span class="m">1</span>.` }
  ],
  practice: [
    { q: `Find the period, the asymptotes and the domain of <span class="m"><i>y</i> = tan 3<i>x</i></span>.`, a: `Period <span class="m">π/3</span>. Asymptotes where <span class="m">3<i>x</i> = π/2 + <i>n</i>π</span>, so <span class="m"><i>x</i> = π/6 + <i>n</i>π/3</span>. Domain: all <span class="m"><i>x</i> ≠ π/6 + <i>n</i>π/3</span>.` },
    { q: `Find the period and range of <span class="m"><i>y</i> = 3 sec <i>x</i> − 1</span>, and its turning points on <span class="m">[0, 2π)</span>.`, a: `Period <span class="m">2π</span>. Since <span class="m">sec <i>x</i> ≥ 1</span> or <span class="m">≤ −1</span>, <span class="m">3 sec <i>x</i> − 1 ≥ 2</span> or <span class="m">≤ −4</span>: range <span class="m">(−∞, −4] ∪ [2, ∞)</span>. Local minimum <span class="m">(0, 2)</span>, local maximum <span class="m">(π, −4)</span>.` },
    { q: `Describe one period of <span class="m"><i>y</i> = −csc 2<i>x</i></span> starting at <span class="m"><i>x</i> = 0</span>.`, a: `Period <span class="m">2π/2 = π</span>; asymptotes where <span class="m">sin 2<i>x</i> = 0</span>: <span class="m"><i>x</i> = 0, π/2, π</span>. On <span class="m">(0, π/2)</span>, <span class="m">sin 2<i>x</i> &gt; 0</span>, so the branch opens down with local maximum <span class="m">(π/4, −1)</span>. On <span class="m">(π/2, π)</span> it opens up with local minimum <span class="m">(3π/4, 1)</span>.` },
    { q: `A tangent graph has neighbouring asymptotes <span class="m"><i>x</i> = −π/4</span> and <span class="m"><i>x</i> = π/4</span>, passes through <span class="m">(0, 0)</span> and <span class="m">(π/8, 3)</span>. Write it as <span class="m"><i>y</i> = <i>A</i> tan <i>Bx</i></span>.`, a: `The period is <span class="m">π/4 − (−π/4) = π/2</span>, so <span class="m"><i>B</i> = π/(π/2) = 2</span>. Then <span class="m"><i>A</i> tan(2 · π/8) = <i>A</i> tan(π/4) = <i>A</i> = 3</span>: <span class="m"><i>y</i> = 3 tan 2<i>x</i></span>.` }
  ]
};
