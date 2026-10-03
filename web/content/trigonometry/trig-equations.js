window.ARITH = window.ARITH || {};
ARITH["trig-equations"] = {
  title: "Solving Trigonometric Equations",
  short: "sin x = k on [0, 2π), general solutions, quadratic type",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Trigonometry · equations",
  hero: `<span class="m">2 sin <i>x</i> − 1 = 0 &nbsp;⇒&nbsp; sin <i>x</i> = <span class="c3">1/2</span> &nbsp;⇒&nbsp; <i>x</i> = <span class="c5">π/6</span>, <span class="c5">5π/6</span> <span class="c4">+ 2π<i>n</i></span></span>`,
  lede: `A trigonometric equation asks which angles give a function a certain value. Because the functions repeat, an equation that has one solution has infinitely many, so we list the solutions in one turn, <span class="m">[0, 2π)</span>, and then add whole periods.`,
  plain: `<p>Solving <span class="m">sin <i>x</i> = <span class="c3">1/2</span></span> means finding every angle whose point on the unit circle sits at height <span class="m"><span class="c3">1/2</span></span>. Draw the horizontal line <span class="m"><i>y</i> = <span class="c3">1/2</span></span>: it crosses the circle twice, once in Quadrant I and once in Quadrant II. Those two points give the two solutions in one turn, <span class="m"><span class="c5">π/6</span></span> and <span class="m"><span class="c5">5π/6</span></span>.</p>
<p>Go once more around the circle and you land on the same two points again. So every solution is one of those two angles plus a whole number of turns. That full list is the <b>general solution</b>.</p>
<p>Harder equations are brought back to this simple form. Isolate the function as you would isolate <span class="m"><i>x</i></span> in algebra. If the function appears squared, factor like a quadratic. If two different functions appear, use an identity so only one is left. Then solve each simple piece.</p>`,
  formal: `<p>Let <span class="m"><i>n</i></span> be any integer and <span class="m"><span class="c1">α</span></span> the principal value from the inverse function.</p>
<div class="display">sin <i>x</i> = <span class="c3"><i>k</i></span> (|<i>k</i>| ≤ 1): &nbsp; <i>x</i> = <span class="c5">sin<sup>−1</sup> <i>k</i></span> <span class="c4">+ 2π<i>n</i></span> &nbsp;or&nbsp; <i>x</i> = <span class="c5">π − sin<sup>−1</sup> <i>k</i></span> <span class="c4">+ 2π<i>n</i></span><br>cos <i>x</i> = <span class="c3"><i>k</i></span> (|<i>k</i>| ≤ 1): &nbsp; <i>x</i> = <span class="c5">± cos<sup>−1</sup> <i>k</i></span> <span class="c4">+ 2π<i>n</i></span><br>tan <i>x</i> = <span class="c3"><i>k</i></span> (any <i>k</i>): &nbsp; <i>x</i> = <span class="c5">tan<sup>−1</sup> <i>k</i></span> <span class="c4">+ π<i>n</i></span></div>
<p>For <span class="m">|<i>k</i>| &gt; 1</span>, <span class="m">sin <i>x</i> = <i>k</i></span> and <span class="m">cos <i>x</i> = <i>k</i></span> have no solution. On <span class="m">[0, 2π)</span> they have two solutions when <span class="m">|<i>k</i>| &lt; 1</span> and one when <span class="m"><i>k</i> = ±1</span>; <span class="m">tan <i>x</i> = <i>k</i></span> always has two, a half turn apart. Tangent repeats every <span class="m">π</span>, so its general solution adds <span class="m"><span class="c4">π<i>n</i></span></span>, not <span class="m">2π<i>n</i></span>: <span class="m">tan <i>x</i> = −1</span> gives <span class="m"><span class="c5">3π/4</span>, <span class="c5">7π/4</span></span> on <span class="m">[0, 2π)</span> and <span class="m"><i>x</i> = 3π/4 <span class="c4">+ π<i>n</i></span></span>.</p>
<p>In practice, find the <b>reference angle</b> <span class="m"><span class="c1">α</span> = sin<sup>−1</sup>|<i>k</i>|</span> (or <span class="m">cos<sup>−1</sup>|<i>k</i>|</span>, <span class="m">tan<sup>−1</sup>|<i>k</i>|</span>) and place it in each quadrant where the function has the sign of <span class="m"><i>k</i></span>: QI gives <span class="m"><span class="c1">α</span></span>, QII <span class="m">π − <span class="c1">α</span></span>, QIII <span class="m">π + <span class="c1">α</span></span>, QIV <span class="m">2π − <span class="c1">α</span></span>. A <b>quadratic-type</b> equation such as <span class="m">2 cos<sup>2</sup> <i>x</i> − cos <i>x</i> − 1 = 0</span> is a quadratic in <span class="m"><i>u</i> = cos <i>x</i></span>; any root with <span class="m">|<i>u</i>| &gt; 1</span> gives no angle. Squaring both sides can create <b>extraneous solutions</b>, so every candidate is checked in the original equation. Dividing by an expression such as <span class="m">sin <i>x</i></span> loses the solutions where it is 0, so factor instead.</p>`,
  legend: [
    { c: "c3", sym: `<i>k</i>`, name: "Target value", desc: "The value the function must take: the line y = k on the circle or the graph." },
    { c: "c1", sym: `α`, name: "Reference angle", desc: "The acute angle sin⁻¹|k|, placed in each quadrant where the sign is right." },
    { c: "c5", sym: `<i>x</i>`, name: "Solutions", desc: "The angles in [0, 2π) that make the equation true." },
    { c: "c4", sym: `+ 2π<i>n</i>`, name: "Period ladder", desc: "Whole periods added to each solution: 2πn for sin and cos, πn for tan." }
  ],
  steps: {
    title: "How to solve a trigonometric equation",
    items: [
      `Get one trigonometric function of one angle. Isolate it if the equation is linear in it; use an identity such as <span class="m">cos<sup>2</sup> <i>x</i> = 1 − sin<sup>2</sup> <i>x</i></span> if two functions appear.`,
      `If the function appears squared, move everything to one side and factor (or use the quadratic formula). Set each factor equal to 0. Never divide by the function: you would lose the solutions where it is 0.`,
      `For each value <span class="m"><i>k</i></span>, find the reference angle <span class="m"><span class="c1">α</span></span> from the inverse function: exactly for special values, by calculator otherwise.`,
      `Place <span class="m"><span class="c1">α</span></span> in each quadrant where the function has the sign of <span class="m"><i>k</i></span>. This gives the solutions in <span class="m">[0, 2π)</span>; a calculator gives only the first, so build the second from the reference angle.`,
      `Write the general solution by adding <span class="m">2π<i>n</i></span> to each solution (<span class="m">π<i>n</i></span> for tangent), <span class="m"><i>n</i></span> an integer.`,
      `If you squared both sides, substitute every candidate into the original equation and discard the ones that fail.`
    ]
  },
  example: {
    prompt: `Solve <span class="m">2 cos<sup>2</sup> <i>x</i> − sin <i>x</i> − 1 = 0</span> on <span class="m">[0, 2π)</span>, then give the general solution.`,
    lines: [
      { math: `<span class="m">2(1 − sin<sup>2</sup> <i>x</i>) − sin <i>x</i> − 1 = 0</span>`, note: "Two functions appear. Replace cos² x by 1 − sin² x so only sine is left." },
      { math: `<span class="m">2 sin<sup>2</sup> <i>x</i> + sin <i>x</i> − 1 = 0</span>`, note: "Expand, collect, and multiply by −1. This is a quadratic in u = sin x: 2u² + u − 1 = 0." },
      { math: `<span class="m">(2 sin <i>x</i> − 1)(sin <i>x</i> + 1) = 0</span>`, note: "Factor, as with 2u² + u − 1 = (2u − 1)(u + 1)." },
      { math: `<span class="m">sin <i>x</i> = <span class="c3">1/2</span> ⇒ <i>x</i> = <span class="c5">π/6</span>, <span class="c5">5π/6</span></span>`, note: "Reference angle π/6. Sine is positive in Quadrants I and II: π/6 and π − π/6." },
      { math: `<span class="m">sin <i>x</i> = <span class="c3">−1</span> ⇒ <i>x</i> = <span class="c5">3π/2</span></span>`, note: "The line y = −1 touches the unit circle at one point only, the bottom." },
      { math: `<span class="m"><i>x</i> = π/6 <span class="c4">+ 2π<i>n</i></span>, &nbsp;5π/6 <span class="c4">+ 2π<i>n</i></span>, &nbsp;3π/2 <span class="c4">+ 2π<i>n</i></span></span>`, note: "Add whole turns to each solution; n is any integer." }
    ],
    answer: `On <span class="m">[0, 2π)</span>: <span class="m"><span class="c5">π/6</span>, <span class="c5">5π/6</span>, <span class="c5">3π/2</span></span>. General solution: <span class="m"><i>x</i> = π/6 + 2π<i>n</i></span>, <span class="m">5π/6 + 2π<i>n</i></span> or <span class="m">3π/2 + 2π<i>n</i></span>.`
  },
  why: `<p>Formulas with sines and cosines describe anything that repeats: alternating current, sound, tides, daylight, a piston, a spinning wheel. Asking when the voltage reaches 100 volts, or on which days the sun rises before 6:00, is asking you to solve a trigonometric equation. Because these quantities repeat, the answer is a list that goes on forever, and the general solution is the compact way to write that list. The same algebra (isolate, factor, use an identity, check) returns in calculus whenever you set a derivative equal to zero.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Finds the instants when an AC voltage V = 170 sin(120πt) crosses a switching threshold, which is a sine equation solved for t." },
    { role: "Solar energy engineer", use: "Computes sunrise and sunset from cos h = −tan φ tan δ, solving for the hour angle h at a site's latitude φ." },
    { role: "Oceanographer", use: "Solves a tide model for the times the water is deep enough for a ship to cross a bar, with one window per tidal cycle." },
    { role: "Audio DSP engineer", use: "Locates zero crossings and peaks of sine components to align and splice recorded waveforms." },
    { role: "Mechanical engineer", use: "Finds the crank angles at which a piston reaches a given position, a cosine equation with two solutions per turn." },
    { role: "Game developer", use: "Solves for the rotation angle at which a turret or camera faces a target, keeping both solutions from the inverse function." }
  ],
  life: [
    "Working out at what moments of a Ferris wheel ride you are exactly 30 m above the ground: twice each turn",
    "Reading a tide table that lists two high-water times a day, each the solution of one equation",
    "Sunrise and sunset times in weather apps come from solving a cosine equation for the sun's hour angle",
    "A pendulum clock passes the same angle twice each swing, once going and once coming back",
    "Planning when a lighthouse beam points straight at your boat, once every turn of the lamp"
  ],
  fields: [
    { name: "Electrical engineering", use: "Phase and timing problems in AC circuits reduce to sin(ωt + φ) = k." },
    { name: "Astronomy", use: "Rise and set times of the sun, moon and stars come from cosine equations in the hour angle." },
    { name: "Signal processing", use: "Zero crossings and peaks of periodic signals are the solutions of sin and cos equations." },
    { name: "Physics", use: "The times an oscillator reaches a given displacement solve A cos(ωt) = x." }
  ],
  prereqWhy: {
    "trig-inverse": "Every solution starts from a principal value such as sin⁻¹ k; the second angle and the periods are then added by hand.",
    "trig-fundamental-ids": "Equations with two functions, such as 2cos²x − sin x − 1 = 0, are rewritten in one function with a Pythagorean identity.",
    "a1-quad-factor": "A quadratic-type equation in sin x or cos x is solved by factoring the trinomial and setting each factor to zero."
  },
  unlocksWhy: {
    "trig-equations-multi": "Equations in 2x or 3x, and those that need a double-angle identity first, end with the same simple equations solved here."
  },
  beyond: [
    { field: "Calculus I", why: "Critical points of trigonometric functions come from setting the derivative to zero, such as cos x − sin x = 0." },
    { field: "Differential Equations", why: "Fitting y = A cos ωt + B sin ωt to initial conditions and finding when the motion reaches a level needs these equations." },
    { field: "Physics (Waves)", why: "Nodes and antinodes of a standing wave are the solutions of sin kx = 0 and sin kx = ±1." }
  ],
  mistakes: [
    { wrong: `Stopping at the calculator answer: <span class="m">sin <i>x</i> = 1/2 ⇒ <i>x</i> = π/6</span> only.`, fix: `The inverse function gives one angle. Sine is also positive in Quadrant II, so <span class="m">π − π/6 = 5π/6</span> is a second solution.` },
    { wrong: `Dividing by <span class="m">sin <i>x</i></span>: <span class="m">tan <i>x</i> sin <i>x</i> = sin <i>x</i> ⇒ tan <i>x</i> = 1</span>.`, fix: `Factor: <span class="m">sin <i>x</i>(tan <i>x</i> − 1) = 0</span>. Besides <span class="m">π/4</span> and <span class="m">5π/4</span>, the factor <span class="m">sin <i>x</i> = 0</span> gives <span class="m">0</span> and <span class="m">π</span>.` },
    { wrong: `Writing the general solution of <span class="m">tan <i>x</i> = 1</span> as <span class="m">π/4 + 2π<i>n</i></span>.`, fix: `Tangent has period <span class="m">π</span>, so <span class="m"><i>x</i> = π/4 + π<i>n</i></span>. With <span class="m">2π<i>n</i></span> you lose <span class="m">5π/4</span> and every other solution.` },
    { wrong: `Keeping every root after squaring both sides.`, fix: `Squaring can create solutions of <span class="m">(…)<sup>2</sup></span> that are not solutions of the original. Substitute each candidate back and discard the ones that fail.` }
  ],
  practice: [
    { q: `Solve <span class="m">√2 cos <i>x</i> + 1 = 0</span> on <span class="m">[0, 2π)</span> and give the general solution.`, a: `<span class="m">cos <i>x</i> = −√2/2</span>. Reference angle <span class="m">π/4</span>; cosine is negative in QII and QIII: <span class="m"><i>x</i> = 3π/4, 5π/4</span>. General: <span class="m">3π/4 + 2π<i>n</i></span>, <span class="m">5π/4 + 2π<i>n</i></span>.` },
    { q: `Solve <span class="m">2 cos<sup>2</sup> <i>x</i> − cos <i>x</i> − 1 = 0</span> on <span class="m">[0, 2π)</span>.`, a: `<span class="m">(2 cos <i>x</i> + 1)(cos <i>x</i> − 1) = 0</span>. <span class="m">cos <i>x</i> = −1/2</span>: <span class="m">2π/3, 4π/3</span>. <span class="m">cos <i>x</i> = 1</span>: <span class="m">0</span>. Solutions <span class="m">0, 2π/3, 4π/3</span>.` },
    { q: `Solve <span class="m">5 sin <i>x</i> + 2 = 0</span> on <span class="m">[0, 2π)</span>. Round to four decimal places.`, a: `<span class="m">sin <i>x</i> = −0.4</span>. Reference angle <span class="m">sin<sup>−1</sup> 0.4 ≈ 0.4115</span>. Sine is negative in QIII and QIV: <span class="m">π + 0.4115 ≈ 3.5531</span> and <span class="m">2π − 0.4115 ≈ 5.8717</span>.` },
    { q: `Solve <span class="m">sin <i>x</i> + cos <i>x</i> = 1</span> on <span class="m">[0, 2π)</span> by squaring both sides.`, a: `<span class="m">sin<sup>2</sup> <i>x</i> + 2 sin <i>x</i> cos <i>x</i> + cos<sup>2</sup> <i>x</i> = 1 ⇒ sin <i>x</i> cos <i>x</i> = 0</span>, candidates <span class="m">0, π/2, π, 3π/2</span>. Check: <span class="m">π</span> and <span class="m">3π/2</span> give <span class="m">−1</span>, extraneous. Solutions <span class="m">0, π/2</span>; general <span class="m">2π<i>n</i></span>, <span class="m">π/2 + 2π<i>n</i></span>.` }
  ]
};
