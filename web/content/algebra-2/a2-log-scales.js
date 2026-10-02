window.ARITH = window.ARITH || {};
ARITH["a2-log-scales"] = {
  title: "Logarithmic Scales",
  short: "pH, decibels and magnitudes: equal steps mean equal ratios",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Logarithmic functions · applications",
  hero: `<span class="m"><span class="c2">90 dB</span> − <span class="c2">60 dB</span> = 30 dB &nbsp;⇒&nbsp; <span class="c1"><i>I</i></span> is <span class="c3">10<sup>30/10</sup> = 1000</span> times larger</span>`,
  lede: `A <b>logarithmic scale</b> reports a <span class="c1">quantity</span> by its <span class="c2">common logarithm</span> instead of its size. Each step on the scale multiplies the quantity by the same factor, so subtracting two readings gives a <span class="c3">ratio</span>.`,
  plain: `<p>Some quantities range over many orders of magnitude. The quietest sound you can hear and a jet engine nearby differ in intensity by a factor of about 100 trillion. On an ordinary ruler-like axis the quiet sounds would all be squeezed into a dot at zero. A log scale counts powers of 10 instead: 10<sup>6</sup> becomes 6, 10<sup>12</sup> becomes 12, and the whole range fits on a short line.</p>
<p>The price is that the scale no longer adds. Moving one unit up a log scale multiplies the quantity by a fixed factor. One pH unit lower means 10 times as many hydrogen ions. Ten decibels louder means 10 times the sound intensity. One magnitude higher means 10 times the ground motion of an earthquake and about 32 times the energy.</p>
<p>So to compare two readings, subtract them. The difference tells you the exponent of the ratio. Two sounds 30 dB apart differ by a factor of 10<sup>3</sup> = 1000 in intensity, whatever the two levels are.</p>`,
  formal: `<p>A logarithmic scale assigns to a positive quantity <span class="m c1"><i>Q</i></span> the value <span class="m"><span class="c2"><i>S</i></span> = <i>k</i> log(<span class="c1"><i>Q</i></span>/<i>Q</i><sub>0</sub>)</span>, where log is the common logarithm, <span class="m"><i>Q</i><sub>0</sub></span> is a fixed reference and <span class="m"><i>k</i></span> is a constant. By the quotient rule, a difference of readings is the log of a ratio:</p>
<div class="display"><span class="c2"><i>S</i><sub>2</sub></span> − <span class="c2"><i>S</i><sub>1</sub></span> = <i>k</i> log<span class="fr"><span><span class="c1"><i>Q</i><sub>2</sub></span></span><span><span class="c1"><i>Q</i><sub>1</sub></span></span></span> &nbsp;⇔&nbsp; <span class="c3"><span class="fr"><span><i>Q</i><sub>2</sub></span><span><i>Q</i><sub>1</sub></span></span> = 10<sup>(<i>S</i><sub>2</sub> − <i>S</i><sub>1</sub>)/<i>k</i></sup></span></div>
<p>The standard scales: <b>pH</b> <span class="m"><span class="c2">pH</span> = −log<span class="c1">[H<sup>+</sup>]</span></span>, with the hydrogen-ion concentration in mol/L. <b>Sound intensity level</b> in decibels <span class="m"><span class="c2"><i>L</i></span> = 10 log(<span class="c1"><i>I</i></span>/<i>I</i><sub>0</sub>)</span>, with the threshold of hearing <span class="m"><i>I</i><sub>0</sub> = 10<sup>−12</sup> W/m<sup>2</sup></span>. <b>Earthquake magnitude</b> <span class="m c2"><i>M</i></span>: the Richter magnitude is the log of the largest wave amplitude compared with a reference amplitude, so one unit means 10 times the amplitude. Released energy satisfies <span class="m">log <span class="c1"><i>E</i></span> = 1.5<span class="c2"><i>M</i></span> + 4.8</span> (<span class="m"><i>E</i></span> in joules), so <span class="m"><span class="c1"><i>E</i><sub>2</sub>/<i>E</i><sub>1</sub></span> = <span class="c3">10<sup>1.5(<i>M</i><sub>2</sub> − <i>M</i><sub>1</sub>)</sup></span></span>: about 31.6 per unit and exactly 1000 per two units.</p>`,
  legend: [
    { c: "c1", sym: `<i>Q</i>`, name: "Quantity", desc: "What is measured: sound intensity I, hydrogen-ion concentration [H<sup>+</sup>], earthquake energy E." },
    { c: "c2", sym: `<i>S</i>`, name: "Log value", desc: "The reading on the scale: decibels L, pH, magnitude M. A power of 10, counted." },
    { c: "c3", sym: `<i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>`, name: "Ratio", desc: "How many times larger one quantity is: 10 to the power (difference of readings)/k." }
  ],
  steps: {
    title: "How to compare two readings on a log scale",
    items: [
      `Write the scale's formula <span class="m"><i>S</i> = <i>k</i> log(<i>Q</i>/<i>Q</i><sub>0</sub>)</span> and note <span class="m"><i>k</i></span>: 10 for decibels, 1 for pH and for magnitude (amplitude), with a minus sign for pH.`,
      `Subtract the two readings: <span class="m"><i>S</i><sub>2</sub> − <i>S</i><sub>1</sub></span>.`,
      `Divide the difference by <span class="m"><i>k</i></span>. That is the exponent of the ratio.`,
      `Raise 10 to that exponent: <span class="m"><i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = 10<sup>(<i>S</i><sub>2</sub> − <i>S</i><sub>1</sub>)/<i>k</i></sup></span>. For earthquake energy use <span class="m">10<sup>1.5Δ<i>M</i></sup></span>.`,
      `To find a quantity itself, undo the log: <span class="m"><i>Q</i> = <i>Q</i><sub>0</sub> · 10<sup><i>S</i>/<i>k</i></sup></span> (for pH, <span class="m">[H<sup>+</sup>] = 10<sup>−pH</sup></span>).`
    ]
  },
  example: {
    prompt: `A rock concert measures <span class="m c2">110 dB</span> and a conversation <span class="m c2">60 dB</span>. How many times more intense is the concert? What is its intensity in W/m<sup>2</sup>?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>L</i></span> = 10 log(<span class="c1"><i>I</i></span>/<i>I</i><sub>0</sub>) &nbsp;⇔&nbsp; <span class="c1"><i>I</i></span> = <i>I</i><sub>0</sub> · 10<sup><i>L</i>/10</sup></span>`, note: "Undo the log: divide by 10, then raise 10 to that power." },
      { math: `<span class="m"><span class="c1"><i>I</i><sub>concert</sub></span> = <i>I</i><sub>0</sub> · 10<sup>11</sup>, &nbsp; <span class="c1"><i>I</i><sub>talk</sub></span> = <i>I</i><sub>0</sub> · 10<sup>6</sup></span>`, note: "110/10 = 11 and 60/10 = 6." },
      { math: `<span class="m"><span class="fr"><span><i>I</i><sub>concert</sub></span><span><i>I</i><sub>talk</sub></span></span> = <span class="fr"><span>10<sup>11</sup></span><span>10<sup>6</sup></span></span> = <span class="c3">10<sup>5</sup></span></span>`, note: "The reference I0 cancels in the ratio." },
      { math: `<span class="m">110 − 60 = 50 dB, &nbsp; 10<sup>50/10</sup> = <span class="c3">10<sup>5</sup> = 100 000</span></span>`, note: "The shortcut: subtract the readings and divide by k = 10." },
      { math: `<span class="m"><span class="c1"><i>I</i><sub>concert</sub></span> = 10<sup>−12</sup> · 10<sup>11</sup> = 10<sup>−1</sup> = 0.1 W/m<sup>2</sup></span>`, note: "With the threshold of hearing I0 = 10^(−12) W/m²." }
    ],
    answer: `The concert is <span class="m c3">100 000</span> times as intense as the conversation; its intensity is <span class="m c1">0.1 W/m<sup>2</sup></span>.`
  },
  why: `<p>Nature is full of quantities that span many powers of ten: sound intensities, acid concentrations, earthquake energies, star brightness, signal strengths. Human senses also respond roughly to ratios, not differences: a sound must be multiplied in intensity, not increased by a fixed amount, to seem one step louder. A log scale matches both facts. It turns huge ranges into small numbers and turns multiplication into the subtraction you can do in your head.</p>
<p>Reading these scales correctly matters. A pH change from 7 to 5 is a hundredfold change in acidity, and a magnitude 8 earthquake releases about a thousand times the energy of a magnitude 6. Treating the numbers as if they added would understate the difference by orders of magnitude.</p>`,
  careers: [
    { role: "Audiologist", use: "Reads hearing thresholds in decibels and knows that every 10 dB of hearing loss is a tenfold loss in sensitivity to intensity." },
    { role: "Acoustical engineer", use: "Adds sources by converting dB to intensity and back, and designs walls by the dB reduction they give." },
    { role: "Seismologist", use: "Computes magnitudes from wave amplitudes and compares earthquakes by energy ratios of 10 to the 1.5 per unit." },
    { role: "Water treatment operator", use: "Keeps drinking water near pH 7 and doses acid or base knowing that one pH unit is a tenfold change in hydrogen ions." },
    { role: "Astronomer", use: "Uses the magnitude scale, on which 5 magnitudes is a factor of 100 in brightness." },
    { role: "RF and network engineer", use: "Budgets signal strength in dBm, adding gains and losses in decibels instead of multiplying power ratios." }
  ],
  life: [
    "Knowing that hearing protection is advised for long exposure above about 85 dB",
    "Testing pool or aquarium water and adjusting pH",
    "Understanding why a magnitude 7 earthquake in the news is far worse than a 6",
    "Reading Wi-Fi signal strength in dBm",
    "Seeing that a camera's f-stops each halve the light, a log scale in base 2"
  ],
  fields: [
    { name: "Chemistry", use: "pH, pOH and pKa are negative logarithms of concentrations and equilibrium constants." },
    { name: "Acoustics", use: "Sound pressure and intensity levels in decibels; noise limits and hearing safety." },
    { name: "Seismology", use: "Richter and moment magnitudes for comparing earthquakes by amplitude and energy." },
    { name: "Astronomy", use: "Apparent and absolute magnitudes of stars, defined by m1 − m2 = −2.5 log(F1/F2)." },
    { name: "Electrical engineering", use: "Gain and loss of amplifiers, cables and antennas in decibels." }
  ],
  prereqWhy: {
    "a2-logs": "Every log scale is S = k log(Q/Q0). Converting between log form and exponential form, and evaluating common logs, is all the algebra these scales need."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Chemistry", why: "pKa and the Henderson–Hasselbalch equation for buffers are log-scale statements about ratios of concentrations." },
    { field: "Physics", why: "Sound intensity falls with the inverse square of distance, which on the decibel scale is a drop of about 6 dB per doubling of distance." },
    { field: "Statistics", why: "Skewed data such as incomes or city sizes are analysed on log axes, where growth by a constant factor looks like a straight line." }
  ],
  mistakes: [
    { wrong: `A magnitude 8 earthquake is twice as strong as a magnitude 4.`, fix: `The difference is 4 units. The wave amplitude is <span class="m">10<sup>4</sup> = 10 000</span> times larger and the energy <span class="m">10<sup>1.5·4</sup> = 10<sup>6</sup></span>, a million times larger.` },
    { wrong: `Two machines of 60 dB each together make 120 dB.`, fix: `Intensities add, not decibels: <span class="m">2 · 10<sup>6</sup><i>I</i><sub>0</sub></span> gives <span class="m">10 log(2 · 10<sup>6</sup>) ≈ 63.0 dB</span>. Doubling the intensity adds only about 3 dB.` },
    { wrong: `pH 3 is twice as acidic as pH 6.`, fix: `Three pH units is a factor of <span class="m">10<sup>3</sup> = 1000</span> in hydrogen-ion concentration. Lower pH means more acidic.` }
  ],
  practice: [
    { q: `Black coffee has <span class="m">[H<sup>+</sup>] = 10<sup>−5</sup></span> mol/L. Find its pH. How many times the hydrogen-ion concentration of coffee does lemon juice at pH 2 have?`,
      a: `<span class="m">pH = −log 10<sup>−5</sup> = 5</span>. Lemon juice: <span class="m">10<sup>5 − 2</sup> = 10<sup>3</sup> = 1000</span> times the concentration.` },
    { q: `A sound has intensity <span class="m">10<sup>−4</sup> W/m<sup>2</sup></span>. Find its level in decibels (<span class="m"><i>I</i><sub>0</sub> = 10<sup>−12</sup> W/m<sup>2</sup></span>).`,
      a: `<span class="m"><i>L</i> = 10 log(10<sup>−4</sup>/10<sup>−12</sup>) = 10 log 10<sup>8</sup> = 80 dB</span>, about the level of busy city traffic.` },
    { q: `By how many decibels does the level rise when the intensity of a sound doubles?`,
      a: `<span class="m"><i>L</i><sub>2</sub> − <i>L</i><sub>1</sub> = 10 log(2<i>I</i>/<i>I</i>) = 10 log 2 ≈ 3.01 dB</span>, whatever the starting level.` },
    { q: `The 2011 Tōhoku earthquake had magnitude 9.1 and the 1994 Northridge earthquake 6.7. Compare their wave amplitudes and energies.`,
      a: `<span class="m">Δ<i>M</i> = 9.1 − 6.7 = 2.4</span>. Amplitude ratio <span class="m">10<sup>2.4</sup> ≈ 251</span>. Energy ratio <span class="m">10<sup>1.5 · 2.4</sup> = 10<sup>3.6</sup> ≈ 3981</span>: Tōhoku released about 4000 times the energy.` }
  ],
  origin: `<p>John Napier published logarithms in 1614, and Henry Briggs soon recast them in base 10, the common logarithms these scales use. The Danish chemist Søren Sørensen introduced pH in 1909 at the Carlsberg Laboratory to describe acidity in brewing. Engineers at the Bell Telephone system defined the bel, named after Alexander Graham Bell, in the 1920s for losses on telephone lines; the decibel, a tenth of a bel, became the practical unit. Charles Richter, working with Beno Gutenberg, defined the earthquake magnitude scale in 1935, and in 1979 Thomas Hanks and Hiroo Kanamori introduced the moment magnitude that seismologists report today.</p>`
};
