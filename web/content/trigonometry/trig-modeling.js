window.ARITH = window.ARITH || {};
ARITH["trig-modeling"] = {
  title: "Sinusoidal Models & Harmonic Motion",
  short: "Fitting waves to data, springs and damping",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Graphs & inverses · modelling",
  hero: `<span class="m"><i>d</i> = <span class="c3"><i>a</i></span> sin <span class="c2"><i>ω</i></span><i>t</i> &nbsp;&nbsp; frequency <span class="fr"><span><span class="c2"><i>ω</i></span></span><span>2π</span></span> &nbsp;&nbsp; damped: <span class="c5"><i>a</i><i>e</i><sup>−<i>ct</i></sup></span> sin <span class="c2"><i>ω</i></span><i>t</i></span>`,
  lede: `Anything that repeats on a steady cycle, such as temperature through the year, a rider on a Ferris wheel or a weight on a spring, can be described by a sinusoid. You read the four numbers <span class="m"><i>A</i></span>, <span class="m"><i>B</i></span>, <span class="m"><i>C</i></span>, <span class="m"><i>D</i></span> off the situation or the data.`,
  plain: `<p>Start with the highest and lowest values. The <span class="c4">midline</span> is halfway between them and the <span class="c3">amplitude</span> is half the gap. The <span class="c2">period</span> is how long one full cycle takes. The <span class="c1">phase shift</span> says when the cycle starts: a cosine model begins at a high point, so the phase shift is the time of a maximum.</p>
<p>For example, in New York's Central Park the monthly mean temperature (1991–2020 normals, approximate) peaks at about 25.3 °C in July and bottoms out at about 0.9 °C in January. That gives amplitude 12.2, midline 13.1 and period 12 months: <span class="m"><i>T</i>(<i>t</i>) = 12.2 cos(π/6 (<i>t</i> − 7)) + 13.1</span>, with <span class="m"><i>t</i></span> the month number. The model is not exact, but it is off by little more than 1 °C on average.</p>
<p>A weight bouncing on a spring with no friction moves in <b>simple harmonic motion</b>: its displacement is a plain sine or cosine of time. Real springs lose energy, so the swings shrink. Multiplying by a decaying exponential <span class="m c5"><i>e</i><sup>−<i>ct</i></sup></span> models this <b>damped</b> motion: the wave stays between the curves <span class="m c5">±<i>ae</i><sup>−<i>ct</i></sup></span>.</p>`,
  formal: `<p>A <b>sinusoidal model</b> <span class="m"><i>y</i> = <span class="c3"><i>A</i></span> cos(<span class="c2"><i>B</i></span>(<i>t</i> − <span class="c1"><i>C</i></span>)) + <span class="c4"><i>D</i></span></span> (or with sin) fitted from a maximum and a minimum uses</p>
<div class="display"><span class="c3"><i>A</i></span> = <span class="fr"><span>max − min</span><span>2</span></span>, &nbsp; <span class="c4"><i>D</i></span> = <span class="fr"><span>max + min</span><span>2</span></span>, &nbsp; <span class="c2"><i>B</i></span> = <span class="fr"><span>2π</span><span>period</span></span>, &nbsp; <span class="c1"><i>C</i></span> = time of a maximum (cosine form)</div>
<p>A high and the next low are half a period apart. For the sine form, <span class="m c1"><i>C</i></span> is the time of a midline crossing on the way up, a quarter period before the maximum.</p>
<p>An object in <b>simple harmonic motion</b> has displacement</p>
<div class="display"><i>d</i> = <span class="c3"><i>a</i></span> sin <span class="c2"><i>ω</i></span><i>t</i> &nbsp; or &nbsp; <i>d</i> = <span class="c3"><i>a</i></span> cos <span class="c2"><i>ω</i></span><i>t</i>, &nbsp; <span class="c2"><i>ω</i></span> &gt; 0<br>amplitude |<span class="c3"><i>a</i></span>|, &nbsp; period <span class="fr"><span>2π</span><span><span class="c2"><i>ω</i></span></span></span>, &nbsp; frequency <span class="fr"><span><span class="c2"><i>ω</i></span></span><span>2π</span></span> (cycles per unit time)</div>
<p>The sine form starts at the rest position, the cosine form at an extreme. Frequency is the reciprocal of the period; with time in seconds it is measured in hertz (cycles per second). <b>Damped harmonic motion</b> is modelled by</p>
<div class="display"><i>d</i> = <span class="c5"><i>a</i><i>e</i><sup>−<i>ct</i></sup></span> sin <span class="c2"><i>ω</i></span><i>t</i> &nbsp; (or cos <span class="c2"><i>ω</i></span><i>t</i>), &nbsp; <i>c</i> &gt; 0</div>
<p>The graph oscillates between the <span class="c5">envelope</span> curves <span class="m c5"><i>y</i> = ±<i>ae</i><sup>−<i>ct</i></sup></span>. The envelope halves every <span class="m">ln 2 / <i>c</i></span> time units, while the zeros stay <span class="m">π/<i>ω</i></span> apart.</p>`,
  legend: [
    { c: "c3", sym: `<i>A</i>, <i>a</i>`, name: "Amplitude", desc: "Half the distance from the lowest to the highest value." },
    { c: "c2", sym: `<i>B</i>, <i>ω</i>`, name: "Period factor", desc: "Period 2π/B; for motion ω is the angular frequency and ω/2π the frequency." },
    { c: "c1", sym: `<i>C</i>`, name: "Phase shift", desc: "When the cycle starts: the time of a maximum in the cosine form." },
    { c: "c4", sym: `<i>D</i>`, name: "Midline", desc: "The average level, halfway between the high and the low." },
    { c: "c5", sym: `±<i>ae</i><sup>−<i>ct</i></sup>`, name: "Envelope", desc: "The shrinking bounds of a damped oscillation." }
  ],
  steps: {
    title: "How to build a sinusoidal model",
    items: [
      `Choose the input: time in months, days, minutes or seconds, and where <span class="m"><i>t</i> = 0</span> is.`,
      `Find the maximum and minimum. Then <span class="m c3"><i>A</i> = (max − min)/2</span> and <span class="m c4"><i>D</i> = (max + min)/2</span>.`,
      `Find the period (twice the time from a high to the next low) and <span class="m c2"><i>B</i> = 2π/period</span>.`,
      `Pick the form. Cosine: <span class="m c1"><i>C</i></span> is the time of a maximum. Starting at a minimum, use <span class="m">−<i>A</i> cos</span>. Starting on the midline going up, use sine.`,
      `Check the model at a known point, then use it to predict.`,
      `For motion, write <span class="m"><i>d</i> = <i>a</i> sin <i>ωt</i></span> or <span class="m"><i>a</i> cos <i>ωt</i></span> with <span class="m"><i>ω</i> = 2π/period</span>; multiply by <span class="m"><i>e</i><sup>−<i>ct</i></sup></span> if the swings die out.`
    ]
  },
  example: {
    prompt: `A Ferris wheel is 50 m across, its centre is 27 m above the ground, and it turns once every 20 minutes. A rider boards at the bottom at <span class="m"><i>t</i> = 0</span>. Write the rider's height <span class="m"><i>h</i>(<i>t</i>)</span> in metres after <span class="m"><i>t</i></span> minutes and find the height after 8 minutes. (Illustrative numbers.)`,
    lines: [
      { math: `<span class="m">amplitude = radius = <span class="c3">25</span></span>`, note: "The rider swings 25 m above and below the centre." },
      { math: `<span class="m">midline <i>h</i> = <span class="c4">27</span></span>`, note: "The centre height: lowest 2 m, highest 52 m." },
      { math: `<span class="m"><span class="c2"><i>B</i></span> = 2π/20 = <span class="c2">π/10</span></span>`, note: "One turn every 20 minutes." },
      { math: `<span class="m"><i>h</i>(<i>t</i>) = −<span class="c3">25</span> cos(<span class="c2">π/10</span> <i>t</i>) + <span class="c4">27</span></span>`, note: "Boarding at the bottom: a cosine flipped upside down." },
      { math: `<span class="m"><i>h</i>(0) = −25 + 27 = 2, &nbsp; <i>h</i>(10) = 25 + 27 = 52</span>`, note: "Check: bottom at the start, top half a turn later." },
      { math: `<span class="m"><i>h</i>(8) = 27 − 25 cos(4π/5) ≈ 27 + 20.2 = 47.2</span>`, note: "cos(4π/5) ≈ −0.809." }
    ],
    answer: `<span class="m c5"><i>h</i>(<i>t</i>) = 27 − 25 cos(π<i>t</i>/10)</span>; after 8 minutes the rider is about <span class="m c5">47.2 m</span> up.`
  },
  why: `<p>Cycles run the physical world: seasons, tides, daylight, alternating current, sound, the swing of a pendulum, the bounce of a car's suspension. A sinusoid compresses a whole season of data, or an endless oscillation, into four numbers you can read and compare. Engineers then add damping on purpose: shock absorbers, door closers and building dampers are designed so that oscillations die out quickly. Fitting a model to data, checking how well it fits and predicting from it is the basic loop of applied mathematics.</p>`,
  careers: [
    { role: "Climatologist", use: "Fits annual temperature cycles and studies how the amplitude and midline shift over decades." },
    { role: "Oceanographer", use: "Predicts tides by adding sinusoids with periods near 12.42 and 23.93 hours." },
    { role: "Mechanical engineer", use: "Tunes the damping of springs and shock absorbers so vibrations fade within a few cycles." },
    { role: "Structural engineer", use: "Keeps a building's natural frequency away from the frequencies of wind and earthquakes, and adds tuned mass dampers." },
    { role: "Audio engineer", use: "Describes tones by frequency in hertz and shapes how fast a note's amplitude decays." },
    { role: "Solar energy analyst", use: "Models daylight hours and sun angle through the year to size solar panel systems." }
  ],
  life: [
    "Average temperature rising and falling over a year",
    "The height of a seat on a Ferris wheel",
    "High and low tide times on a tide table",
    "A car bouncing less and less after a speed bump",
    "A guitar string's note fading after it is plucked",
    "Sunrise coming earlier in spring and later in autumn"
  ],
  fields: [
    { name: "Physics", use: "Springs, pendulums and circuits oscillate with angular frequency ω, and friction or resistance adds damping." },
    { name: "Earth science", use: "Tides, seasons and daylight hours are modelled by sinusoids with known periods." },
    { name: "Engineering", use: "Vibration analysis and control design rely on damped sinusoids." },
    { name: "Music acoustics", use: "A plucked string's sound is a sum of damped sinusoids at a fundamental frequency and its multiples." }
  ],
  prereqWhy: {
    "trig-sinusoids": "A model is y = A sin(B(t − C)) + D with its amplitude, period, phase shift and midline read off a situation instead of a formula.",
    "trig-angular-speed": "A rider on a wheel turning at angular speed ω has height a cos ωt plus the centre height, and ω gives the period 2π/ω.",
    "a2-exp-func": "Damping multiplies the wave by the decaying exponential e^(−ct), which sets how fast the swings shrink."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Differential Equations", why: "Springs obey y″ + 2cy′ + ω₀²y = 0, whose solutions are exactly the damped sinusoids here." },
    { field: "Physics (Waves)", why: "Harmonic motion with frequency ω/2π is the building block of sound, light and every wave." },
    { field: "Engineering", why: "Damping ratios, resonance and natural frequency govern the design of cars, bridges and buildings." },
    { field: "Music acoustics", why: "Pitch is frequency and loudness fades like an exponential envelope." }
  ],
  mistakes: [
    { wrong: `For <span class="m"><i>d</i> = 3 sin 4π<i>t</i></span> the frequency is <span class="m">4π</span>.`, fix: `<span class="m">4π</span> is the angular frequency <span class="m"><i>ω</i></span>. The frequency is <span class="m"><i>ω</i>/2π = 2</span> cycles per unit time and the period is <span class="m">1/2</span>.` },
    { wrong: `The amplitude is the maximum value, so a temperature that ranges from 1 °C to 25 °C has amplitude 25.`, fix: `The amplitude is half the range: <span class="m">(25 − 1)/2 = 12</span>. The midline <span class="m">13</span> carries the rest.` },
    { wrong: `A model that starts at a minimum uses <span class="m"><i>A</i> cos <i>Bt</i> + <i>D</i></span> with <span class="m"><i>A</i> &gt; 0</span>.`, fix: `Cosine with <span class="m"><i>A</i> &gt; 0</span> starts at a maximum. Use <span class="m">−<i>A</i> cos <i>Bt</i> + <i>D</i></span>, or shift by half a period.` },
    { wrong: `In <span class="m">10<i>e</i><sup>−0.2<i>t</i></sup> sin 2π<i>t</i></span> the damping changes the period.`, fix: `In this model the zeros stay 1/2 apart, so the cycle length stays 1. Only the size of the swings shrinks, inside the envelope <span class="m">±10<i>e</i><sup>−0.2<i>t</i></sup></span>.` }
  ],
  practice: [
    { q: `A weight moves with <span class="m"><i>d</i> = 5 sin 4π<i>t</i></span> (cm, seconds). Find the amplitude, period and frequency.`, a: `Amplitude <span class="m">5</span> cm, period <span class="m">2π/4π = 1/2</span> s, frequency <span class="m">4π/2π = 2</span> cycles per second.` },
    { q: `At latitude 40° N the longest day (about day 172 of the year) has about 15.0 hours of daylight and the shortest about 9.3 hours (approximate). Model the daylight <span class="m"><i>H</i>(<i>t</i>)</span> on day <span class="m"><i>t</i></span> with period 365 days and estimate day 80.`, a: `<span class="m"><i>A</i> = (15.0 − 9.3)/2 = 2.85</span>, <span class="m"><i>D</i> = 12.15</span>, <span class="m"><i>B</i> = 2π/365</span>, maximum at day 172: <span class="m"><i>H</i>(<i>t</i>) = 2.85 cos(2π(<i>t</i> − 172)/365) + 12.15</span>. <span class="m"><i>H</i>(80) ≈ 12.11</span> hours, close to 12, as expected near the March equinox.` },
    { q: `At a harbour (illustrative numbers) high tide is 3.2 m at 4:00 and the next low tide is 0.4 m at 10:12. Write the depth <span class="m"><i>h</i>(<i>t</i>)</span>, <span class="m"><i>t</i></span> in hours after midnight, and find the depth at noon.`, a: `Half period <span class="m">6.2</span> h, so period <span class="m">12.4</span> h and <span class="m"><i>B</i> = 2π/12.4</span>. <span class="m"><i>A</i> = 1.4</span>, <span class="m"><i>D</i> = 1.8</span>, <span class="m"><i>C</i> = 4</span>: <span class="m"><i>h</i>(<i>t</i>) = 1.4 cos(2π(<i>t</i> − 4)/12.4) + 1.8</span>. <span class="m"><i>h</i>(12) = 1.4 cos(2π · 8/12.4) + 1.8 ≈ 0.94</span> m.` },
    { q: `A damped spring moves with <span class="m"><i>d</i> = 10<i>e</i><sup>−0.2<i>t</i></sup> sin 2π<i>t</i></span> (cm, seconds). What is the frequency, and when has the envelope shrunk to 5 cm?`, a: `<span class="m"><i>ω</i> = 2π</span>, so the frequency is <span class="m">1</span> cycle per second. <span class="m">10<i>e</i><sup>−0.2<i>t</i></sup> = 5</span> gives <span class="m"><i>e</i><sup>−0.2<i>t</i></sup> = 1/2</span>, <span class="m"><i>t</i> = ln 2 / 0.2 ≈ 3.47</span> s.` }
  ],
  origin: `Robert Hooke published his law of springs, "ut tensio, sic vis" (as the extension, so the force), in 1678; a force proportional to displacement is what produces simple harmonic motion. In the 1870s William Thomson (later Lord Kelvin) built a tide-predicting machine that added several sinusoids, each with its own amplitude, period and phase, to forecast the tides at a port.`
};
