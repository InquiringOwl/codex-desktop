window.ARITH = window.ARITH || {};
ARITH["trig-sin-cos-graphs"] = {
  title: "Graphs of Sine & Cosine",
  short: "Unwrapping the unit circle into two waves",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Graphs & inverses · sine and cosine",
  hero: `<span class="m"><span class="c3"><i>y</i> = sin <i>x</i></span> &nbsp;&nbsp; <span class="c2"><i>y</i> = cos <i>x</i> = sin(<i>x</i> + <span class="fr"><span>π</span><span>2</span></span>)</span> &nbsp;&nbsp; period <span class="c1">2π</span></span>`,
  lede: `Walk around the unit circle and record the height of the point at each moment. Laid out along a line, those heights draw the wave <span class="m c3"><i>y</i> = sin <i>x</i></span>; the horizontal positions draw <span class="m c2"><i>y</i> = cos <i>x</i></span>.`,
  plain: `<p>On the unit circle, the point reached after walking a distance <span class="m c1"><i>t</i></span> is <span class="m">(<span class="c2">cos <i>t</i></span>, <span class="c3">sin <i>t</i></span>)</span>. Now make a graph with <span class="m c1"><i>t</i></span> across and the height <span class="m c3">sin <i>t</i></span> up. As the point climbs from <span class="m">(1, 0)</span> to the top of the circle, the graph climbs from 0 to 1. As the point comes down the left side, the graph comes back to 0, then dips to −1 at the bottom and returns to 0 after one full trip.</p>
<p>After <span class="m">2π</span> the point is back where it started, so the graph repeats the same shape forever in both directions. That repeat length is the <b>period</b>.</p>
<p>Graph the horizontal position <span class="m c2">cos <i>t</i></span> instead and you get the same wave, started at its top: cosine is sine moved a quarter period to the left.</p>
<p>It is the custom to call the input <span class="m"><i>x</i></span> once the graph is drawn, so the graphs are <span class="m"><i>y</i> = sin <i>x</i></span> and <span class="m"><i>y</i> = cos <i>x</i></span>, with <span class="m"><i>x</i></span> a real number (an angle in radians).</p>`,
  formal: `<p>For every real <span class="m"><i>x</i></span>, <span class="m">sin <i>x</i></span> and <span class="m">cos <i>x</i></span> are the coordinates of the terminal point <span class="m"><i>P</i>(<i>x</i>)</span> on the unit circle. Both functions have <b>domain</b> <span class="m">(−∞, ∞)</span> and <b>range</b> <span class="m">[−1, 1]</span>. A function is <b>periodic</b> with <b>period</b> <span class="m"><i>p</i></span> when <span class="m"><i>f</i>(<i>x</i> + <i>p</i>) = <i>f</i>(<i>x</i>)</span> for all <span class="m"><i>x</i></span> and <span class="m"><i>p</i> &gt; 0</span> is the smallest such number; for sine and cosine <span class="m"><i>p</i> = 2π</span>. The <b>amplitude</b>, half the distance from the maximum to the minimum, is <span class="m">(1 − (−1))/2 = 1</span>.</p>
<div class="display"><span class="c3">sin <i>x</i> = 0</span> at <i>x</i> = <i>k</i>π, &nbsp; max 1 at <i>x</i> = <span class="fr"><span>π</span><span>2</span></span> + 2<i>k</i>π, &nbsp; min −1 at <i>x</i> = <span class="fr"><span>3π</span><span>2</span></span> + 2<i>k</i>π<br><span class="c2">cos <i>x</i> = 0</span> at <i>x</i> = <span class="fr"><span>π</span><span>2</span></span> + <i>k</i>π, &nbsp; max 1 at <i>x</i> = 2<i>k</i>π, &nbsp; min −1 at <i>x</i> = π + 2<i>k</i>π &nbsp;&nbsp; (<i>k</i> any integer)</div>
<p>Sine is <b>odd</b>, <span class="m">sin(−<i>x</i>) = −sin <i>x</i></span>, so its graph is symmetric about the origin. Cosine is <b>even</b>, <span class="m">cos(−<i>x</i>) = cos <i>x</i></span>, so its graph is symmetric about the <span class="m"><i>y</i></span>-axis. Since <span class="m">cos <i>x</i> = sin(<i>x</i> + π/2)</span>, the cosine graph is the sine graph shifted <span class="m">π/2</span> to the left. One period is sketched from five <b>key points</b> a quarter period (<span class="m">π/2</span>) apart:</p>
<div class="display"><span class="c3">sin</span>: (0, 0), (<span class="fr"><span>π</span><span>2</span></span>, 1), (π, 0), (<span class="fr"><span>3π</span><span>2</span></span>, −1), (2π, 0) &nbsp;&nbsp; <span class="c2">cos</span>: (0, 1), (<span class="fr"><span>π</span><span>2</span></span>, 0), (π, −1), (<span class="fr"><span>3π</span><span>2</span></span>, 0), (2π, 1)</div>`,
  legend: [
    { c: "c1", sym: `<i>t</i>, <i>x</i>`, name: "Input (arc length)", desc: "The distance walked on the unit circle, which becomes the horizontal axis of the graph." },
    { c: "c3", sym: `sin <i>x</i>`, name: "Sine", desc: "The y-coordinate of the point: its height above the x-axis." },
    { c: "c2", sym: `cos <i>x</i>`, name: "Cosine", desc: "The x-coordinate of the point: its horizontal position." },
    { c: "c4", sym: `1`, name: "Radius", desc: "The unit circle's radius, which caps both functions at 1 and −1." }
  ],
  steps: {
    title: "How to sketch y = sin x or y = cos x on an interval",
    items: [
      `Mark the <span class="m"><i>x</i></span>-axis in quarter periods: <span class="m">0, π/2, π, 3π/2, 2π</span>, and the <span class="m"><i>y</i></span>-axis at <span class="m">−1</span> and <span class="m">1</span>.`,
      `Plot the five key points of one period: sine goes 0, 1, 0, −1, 0; cosine goes 1, 0, −1, 0, 1.`,
      `Join them with a smooth wave, rounded at the peaks and steepest where it crosses the axis.`,
      `Repeat the same pattern every <span class="m">2π</span> to the left and right to cover the interval.`,
      `Read zeros, maxima and minima off the pattern, adding multiples of <span class="m">2π</span>.`
    ]
  },
  example: {
    prompt: `On <span class="m">[−2π, 2π]</span>, find every zero of <span class="m"><i>y</i> = cos <i>x</i></span> and every <span class="m"><i>x</i></span> where it reaches its maximum. Then say where on <span class="m">[0, 2π]</span> cosine is decreasing.`,
    lines: [
      { math: `<span class="m c2">(0, 1), (π/2, 0), (π, −1), (3π/2, 0), (2π, 1)</span>`, note: "The five key points of one period of cosine." },
      { math: `<span class="m">cos <i>x</i> = 0 at <i>x</i> = π/2 + <i>k</i>π</span>`, note: "The zeros are a half period apart." },
      { math: `<span class="m"><i>x</i> = −3π/2, −π/2, π/2, 3π/2</span>`, note: "The values of π/2 + kπ that lie in [−2π, 2π] (k = −2, −1, 0, 1)." },
      { math: `<span class="m">max 1 at <i>x</i> = 2<i>k</i>π: &nbsp;<i>x</i> = −2π, 0, 2π</span>`, note: "Cosine starts a period at its peak." },
      { math: `<span class="m">decreasing on [0, π], increasing on [π, 2π]</span>`, note: "It falls from 1 at x = 0 to −1 at x = π, then climbs back." }
    ],
    answer: `Zeros <span class="m c5">−3π/2, −π/2, π/2, 3π/2</span>; maximum at <span class="m c5">−2π, 0, 2π</span>; decreasing on <span class="m c5">[0, π]</span>`
  },
  why: `<p>Sine and cosine are the basic waves. Sound, light, alternating current, tides and the swing of a pendulum all rise and fall in this shape, and Fourier analysis builds every other periodic signal out of sines and cosines. Knowing the plain graphs by heart, with their key points, zeros and symmetry, is what makes the stretched and shifted waves of the next topics easy to read.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Reads AC voltage and current as sine waves and compares their peaks and zero crossings on an oscilloscope." },
    { role: "Audio engineer", use: "Treats a pure tone as a sine wave and lines up phase between microphones so the waves do not cancel." },
    { role: "Seismologist", use: "Reads ground motion traces as sums of waves with different periods." },
    { role: "Animator", use: "Uses sin and cos of time to make smooth back-and-forth and circular motion." },
    { role: "Signal processing engineer", use: "Breaks signals into sine and cosine components to filter noise." }
  ],
  life: [
    "The hum of a power line follows a sine wave 50 or 60 times a second",
    "A swing moving back and forth",
    "The height of a point on a turning bicycle wheel",
    "Ripples spreading on a pond",
    "Daylight hours rising and falling over a year"
  ],
  fields: [
    { name: "Physics", use: "Waves and simple harmonic motion are described by sine and cosine graphs in time." },
    { name: "Electrical engineering", use: "Alternating current, radio and signal timing are drawn as sine waves." },
    { name: "Music", use: "A pure note is a sine wave; its period sets the pitch." },
    { name: "Computer graphics", use: "Sine and cosine generate circles, waves and smooth oscillations on screen." }
  ],
  prereqWhy: {
    "trig-unit-circle": "Each point of the graphs is a coordinate of the terminal point (cos t, sin t), read off the unit circle and laid out along the t-axis."
  },
  unlocksWhy: {
    "trig-sinusoids": "Stretching and shifting these two graphs gives every wave y = A sin(B(x − C)) + D.",
    "trig-other-graphs": "Tangent, cotangent, secant and cosecant are built point by point from the sine and cosine graphs, with asymptotes at their zeros."
  },
  beyond: [
    { field: "Calculus I", why: "The slope of the sine graph at each point is the cosine graph: the derivative of sin x is cos x." },
    { field: "Physics (Waves)", why: "Travelling and standing waves are sine and cosine graphs in space and time." },
    { field: "Differential Equations", why: "Sine and cosine are the solutions of y″ = −y, the equation of every undamped oscillator." }
  ],
  mistakes: [
    { wrong: `The sine graph starts at its peak.`, fix: `That is cosine. Sine starts at <span class="m">(0, 0)</span> and rises: <span class="m">sin 0 = 0</span>, <span class="m">sin π/2 = 1</span>.` },
    { wrong: `<span class="m">cos <i>x</i> = sin(<i>x</i> + π/2)</span>, so cosine is sine shifted right.`, fix: `Adding <span class="m">π/2</span> inside moves the graph <span class="m">π/2</span> to the <b>left</b>: cosine reaches its peak at 0, a quarter period before sine.` },
    { wrong: `The amplitude of <span class="m">sin <i>x</i></span> is 2, from −1 up to 1.`, fix: `The amplitude is half that distance: <span class="m">(1 − (−1))/2 = 1</span>.` },
    { wrong: `Marking the axis 90, 180, 270, 360 and reading <span class="m">sin 90 = 1</span>.`, fix: `On these graphs <span class="m"><i>x</i></span> is in radians, so the peak of sine is at <span class="m"><i>x</i> = π/2 ≈ 1.57</span>, and <span class="m">sin 90 ≈ 0.894</span>.` }
  ],
  practice: [
    { q: `Use periodicity and the key points to find <span class="m">sin(5π/2)</span> and <span class="m">cos 3π</span>.`, a: `<span class="m">5π/2 − 2π = π/2</span>, so <span class="m">sin(5π/2) = sin(π/2) = 1</span>. <span class="m">3π − 2π = π</span>, so <span class="m">cos 3π = cos π = −1</span>.` },
    { q: `Which of sine and cosine is odd and which is even? Use that to find <span class="m">sin(−π/2)</span> and <span class="m">cos(−π)</span>.`, a: `Sine is odd: <span class="m">sin(−π/2) = −sin(π/2) = −1</span>. Cosine is even: <span class="m">cos(−π) = cos π = −1</span>.` },
    { q: `Find every <span class="m"><i>x</i></span> in <span class="m">[0, 4π]</span> with <span class="m">sin <i>x</i> = 1</span>, and every <span class="m"><i>x</i></span> in <span class="m">[0, 4π]</span> with <span class="m">sin <i>x</i> = 0</span>.`, a: `<span class="m">sin <i>x</i> = 1</span> at <span class="m">π/2 + 2<i>k</i>π</span>: <span class="m"><i>x</i> = π/2, 5π/2</span>. <span class="m">sin <i>x</i> = 0</span> at <span class="m"><i>k</i>π</span>: <span class="m"><i>x</i> = 0, π, 2π, 3π, 4π</span>.` },
    { q: `On <span class="m">[0, 2π]</span>, on which interval are <span class="m">sin <i>x</i></span> and <span class="m">cos <i>x</i></span> both decreasing?`, a: `Sine falls from its peak to its low point, on <span class="m">[π/2, 3π/2]</span>. Cosine falls on <span class="m">[0, π]</span>. Both fall on the overlap <span class="m">[π/2, π]</span>, the second quadrant, where the point moves left and down.` }
  ],
  origin: `Gilles Personne de Roberval drew a sine curve in the 1630s as the "companion of the cycloid" while finding the area under a cycloid, the first known graph of the sine. Leonhard Euler's <i>Introductio in analysin infinitorum</i> (1748) treated sine and cosine as functions of a real number on the unit circle, which is how their graphs are read today.`
};
