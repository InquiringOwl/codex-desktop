window.ARITH = window.ARITH || {};
ARITH["trig-sum-product"] = {
  title: `Product-to-Sum & Sum-to-Product Formulas`,
  short: `Turn products of sines and cosines into sums, and back`,
  grade: `Grade 11–12 · college Trigonometry`,
  hours: 5,
  voice: `plain`,
  eyebrow: `Identities · products and sums`,
  hero: `<span class="m"><span class="c2">sin <i>a</i></span> + <span class="c3">sin <i>b</i></span> = <span class="c4">2 cos <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span></span> sin <span class="fr"><span><i>a</i> + <i>b</i></span><span>2</span></span></span>`,
  lede: `Add the sum and difference formulas and half of their terms cancel, leaving a product equal to a sum. Read the other way, a sum of two sines or cosines becomes a product, which is why two close notes played together pulse in loudness.`,
  plain: `<p>Write the sum and difference formulas for sine one under the other: <span class="m">sin(<i>α</i> + <i>β</i>) = sin <i>α</i> cos <i>β</i> + cos <i>α</i> sin <i>β</i></span> and <span class="m">sin(<i>α</i> − <i>β</i>) = sin <i>α</i> cos <i>β</i> − cos <i>α</i> sin <i>β</i></span>. Add them, and the <span class="m">cos <i>α</i> sin <i>β</i></span> terms cancel: <span class="m">sin(<i>α</i> + <i>β</i>) + sin(<i>α</i> − <i>β</i>) = 2 sin <i>α</i> cos <i>β</i></span>. A product of a sine and a cosine has become half of a sum of two sines.</p><p>The same move with the two cosine formulas gives <span class="m">cos <i>α</i> cos <i>β</i></span> and <span class="m">sin <i>α</i> sin <i>β</i></span>. These are the <b>product-to-sum formulas</b>. They turn products, which are hard to evaluate or integrate, into sums, which are easy.</p><p>Now rename the angles: <span class="m"><i>a</i> = <i>α</i> + <i>β</i></span> and <span class="m"><i>b</i> = <i>α</i> − <i>β</i></span>, so <span class="m"><i>α</i> = (<i>a</i> + <i>b</i>)/2</span> and <span class="m"><i>β</i> = (<i>a</i> − <i>b</i>)/2</span>. The same identities now say that a sum of two sines or cosines is a product. These are the <b>sum-to-product formulas</b>.</p><p>Two notes of close pitch let you hear this. <span class="m"><span class="c2">sin <i>a</i></span> + <span class="c3">sin <i>b</i></span></span> is a fast wave at the average frequency inside a slow <b>envelope</b> <span class="m"><span class="c4">2 cos <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span></span></span>. The loudness swells and fades. These pulses are <b>beats</b>, and musicians tune by making them slow down and stop.</p>`,
  formal: `<p><b>Product-to-sum formulas</b>:</p><div class="display">sin <i>α</i> cos <i>β</i> = <span class="fr"><span>1</span><span>2</span></span>[sin(<i>α</i> + <i>β</i>) + sin(<i>α</i> − <i>β</i>)]<br>cos <i>α</i> sin <i>β</i> = <span class="fr"><span>1</span><span>2</span></span>[sin(<i>α</i> + <i>β</i>) − sin(<i>α</i> − <i>β</i>)]<br>cos <i>α</i> cos <i>β</i> = <span class="fr"><span>1</span><span>2</span></span>[cos(<i>α</i> + <i>β</i>) + cos(<i>α</i> − <i>β</i>)]<br>sin <i>α</i> sin <i>β</i> = <span class="fr"><span>1</span><span>2</span></span>[cos(<i>α</i> − <i>β</i>) − cos(<i>α</i> + <i>β</i>)]</div><p><b>Sum-to-product formulas</b>:</p><div class="display">sin <i>a</i> + sin <i>b</i> = 2 sin <span class="fr"><span><i>a</i> + <i>b</i></span><span>2</span></span> cos <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span><br>sin <i>a</i> − sin <i>b</i> = 2 cos <span class="fr"><span><i>a</i> + <i>b</i></span><span>2</span></span> sin <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span><br>cos <i>a</i> + cos <i>b</i> = 2 cos <span class="fr"><span><i>a</i> + <i>b</i></span><span>2</span></span> cos <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span><br>cos <i>a</i> − cos <i>b</i> = −2 sin <span class="fr"><span><i>a</i> + <i>b</i></span><span>2</span></span> sin <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span></div><p>Each product-to-sum formula is the sum or the difference of two of the sum and difference formulas, divided by 2. Each sum-to-product formula is a product-to-sum formula with <span class="m"><i>α</i> = (<i>a</i> + <i>b</i>)/2</span> and <span class="m"><i>β</i> = (<i>a</i> − <i>b</i>)/2</span>, multiplied by 2.</p><p><b>Beats.</b> Two tones of frequencies <span class="m"><i>f</i><sub>1</sub></span> and <span class="m"><i>f</i><sub>2</sub></span> (in hertz) add to</p><div class="display"><span class="c2">sin 2π<i>f</i><sub>1</sub><i>t</i></span> + <span class="c3">sin 2π<i>f</i><sub>2</sub><i>t</i></span> = <span class="c4">2 cos(π(<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)<i>t</i>)</span> · sin(π(<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)<i>t</i>)</div><p>a tone at the average frequency <span class="m">(<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2</span> whose amplitude <span class="m">|2 cos(π(<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)<i>t</i>)|</span> rises and falls <span class="m">|<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|</span> times per second. Tones of 440 Hz and 444 Hz give 4 beats per second.</p>`,
  legend: [
    {
      c: `c2`,
      sym: `sin <i>a</i>`,
      name: `First wave`,
      desc: `One of the two terms added, for example a tone of frequency <span class="m"><i>f</i><sub>1</sub></span>.`
    },
    {
      c: `c3`,
      sym: `sin <i>b</i>`,
      name: `Second wave`,
      desc: `The other term, a tone of frequency <span class="m"><i>f</i><sub>2</sub></span>.`
    },
    {
      c: `c5`,
      sym: `sin <i>a</i> + sin <i>b</i>`,
      name: `Sum`,
      desc: `The two waves added: a fast wave at the average frequency.`
    },
    {
      c: `c4`,
      sym: `2 cos <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span>`,
      name: `Envelope`,
      desc: `The slow factor that sets the loudness. Each time it passes through 0 the sound fades: one beat.`
    }
  ],
  steps: {
    title: `How to evaluate with product-to-sum or sum-to-product`,
    items: [
      `Match the expression to a formula: sine times cosine, cosine times cosine, sine times sine, or a sum or difference of two sines or two cosines.`,
      `For a product, compute <span class="m"><i>α</i> + <i>β</i></span> and <span class="m"><i>α</i> − <i>β</i></span>. For a sum, compute the average <span class="m">(<i>a</i> + <i>b</i>)/2</span> and the half-difference <span class="m">(<i>a</i> − <i>b</i>)/2</span>.`,
      `Write the formula with those angles, keeping its order, its signs and its factor <span class="m"><span class="fr"><span>1</span><span>2</span></span></span> or 2.`,
      `Replace each value by its exact value from the unit circle.`,
      `Simplify. Check the size with a calculator if you like: <span class="m">sin 75° cos 15° ≈ 0.933</span>.`
    ]
  },
  example: {
    prompt: `Find <span class="m"><span class="c2">sin 75°</span> + <span class="c3">sin 15°</span></span> exactly.`,
    lines: [
      { math: `<span class="m">sin <i>a</i> + sin <i>b</i> = 2 sin <span class="fr"><span><i>a</i> + <i>b</i></span><span>2</span></span> cos <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span></span>`, note: `Sum-to-product for two sines.` },
      { math: `<span class="m"><span class="fr"><span>75° + 15°</span><span>2</span></span> = 45°, &nbsp; <span class="fr"><span>75° − 15°</span><span>2</span></span> = 30°</span>`, note: `Average and half-difference of the angles.` },
      { math: `<span class="m"><span class="c2">sin 75°</span> + <span class="c3">sin 15°</span> = 2 sin 45° <span class="c4">cos 30°</span></span>`, note: `Substitute into the formula.` },
      { math: `<span class="m">= 2 · <span class="fr"><span>√<span class="ov">2</span></span><span>2</span></span> · <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span></span>`, note: `Exact values.` },
      { math: `<span class="m">= <span class="c5"><span class="fr"><span>√<span class="ov">6</span></span><span>2</span></span></span></span>`, note: `√2 · √3 = √6, and 2 · ¼ = ½.` }
    ],
    answer: `<span class="m">sin 75° + sin 15° = <span class="fr"><span>√<span class="ov">6</span></span><span>2</span></span> ≈ 1.2247</span>`
  },
  why: `<p>Product-to-sum formulas turn a product into a sum, and sums are easier to evaluate, to graph and, in calculus, to integrate: the area under <span class="m">sin 3<i>x</i> cos <i>x</i></span> is found from <span class="m"><span class="fr"><span>1</span><span>2</span></span>(sin 4<i>x</i> + sin 2<i>x</i>)</span>. Sum-to-product formulas do the reverse, which factors equations such as <span class="m">sin 3<i>x</i> + sin <i>x</i> = 0</span> into <span class="m">2 sin 2<i>x</i> cos <i>x</i> = 0</span>.</p><p>The same identities describe beats in sound, the sidebands of an AM radio signal, and the moiré bands seen when two fine screens overlap.</p>`,
  careers: [
    { role: `Piano tuner`, use: `Listens to the beats between two strings of one note, or between a string and a reference, and adjusts the tension until the beat rate is right.` },
    { role: `Radio engineer`, use: `Uses product-to-sum to show that amplitude modulation places a voice signal in two sidebands, at the carrier frequency plus and minus the voice frequency.` },
    { role: `Signal processing engineer`, use: `Designs mixers that multiply two signals to shift a frequency, using cos A cos B = ½[cos(A − B) + cos(A + B)].` },
    { role: `Acoustics engineer`, use: `Predicts the beat rate and the loudness envelope when two fans, engines or speakers run at nearly the same frequency.` },
    { role: `Orchestral musician`, use: `Tunes to the oboe's A by listening for beats and adjusting until they slow down and stop.` },
    { role: `Mathematics teacher`, use: `Derives all eight formulas from the sum and difference formulas instead of asking students to memorise them.` }
  ],
  life: [
    `Two guitar strings slightly out of tune giving a slow wah-wah`,
    `The throbbing drone of a twin-engine plane whose propellers turn at slightly different speeds`,
    `An AM radio station carrying a voice on a high-frequency carrier`,
    `Moiré bands when two window screens overlap`,
    `Tuning a violin string against a tuning fork`
  ],
  fields: [
    { name: `Music acoustics`, use: `Beats between close frequencies are used to tune instruments and explain roughness between notes.` },
    { name: `Electrical engineering`, use: `Modulation and frequency mixing are product-to-sum formulas applied to signals.` },
    { name: `Calculus`, use: `Products like sin mx cos nx are integrated after rewriting them as sums.` },
    { name: `Physics`, use: `Superposed waves of close frequency form a fast carrier inside a slow envelope.` }
  ],
  prereqWhy: { "trig-sum-difference": `Each product-to-sum formula is the sum or difference of two of the sum and difference formulas.` },
  unlocksWhy: {  },
  beyond: [
    { field: `Calculus II`, why: `Integrals such as the integral of sin mx cos nx are done by product-to-sum first.` },
    { field: `Physics (Waves)`, why: `Two waves of close frequency travel as a wave group: a carrier at the average frequency inside an envelope.` },
    { field: `Music acoustics`, why: `Beats, roughness and the tuning of intervals are explained with sum-to-product.` },
    { field: `Engineering`, why: `Fourier analysis rests on the integral of sin mx sin nx over a full period being 0 for different whole numbers m and n, proved with product-to-sum.` }
  ],
  mistakes: [
    { wrong: `<span class="m">sin <i>a</i> + sin <i>b</i> = sin(<i>a</i> + <i>b</i>)</span>.`, fix: `With <span class="m"><i>a</i> = <i>b</i> = π/2</span> the left side is 2 and the right side is <span class="m">sin π = 0</span>. Use <span class="m">sin <i>a</i> + sin <i>b</i> = 2 sin <span class="fr"><span><i>a</i> + <i>b</i></span><span>2</span></span> cos <span class="fr"><span><i>a</i> − <i>b</i></span><span>2</span></span></span>.` },
    { wrong: `<span class="m">sin <i>α</i> cos <i>β</i> = sin(<i>α</i> + <i>β</i>) + sin(<i>α</i> − <i>β</i>)</span>.`, fix: `The sum of the two sines is twice the product. Divide by 2: <span class="m">sin <i>α</i> cos <i>β</i> = <span class="fr"><span>1</span><span>2</span></span>[sin(<i>α</i> + <i>β</i>) + sin(<i>α</i> − <i>β</i>)]</span>.` },
    { wrong: `<span class="m">sin <i>α</i> sin <i>β</i> = <span class="fr"><span>1</span><span>2</span></span>[cos(<i>α</i> + <i>β</i>) − cos(<i>α</i> − <i>β</i>)]</span>.`, fix: `That is the negative. With <span class="m"><i>α</i> = <i>β</i> = π/2</span>: <span class="m">sin(π/2) sin(π/2) = 1</span> and <span class="m"><span class="fr"><span>1</span><span>2</span></span>[cos 0 − cos π] = 1</span>. The order is <span class="m">cos(<i>α</i> − <i>β</i>) − cos(<i>α</i> + <i>β</i>)</span>.` },
    { wrong: `Tones of 440 Hz and 444 Hz beat 2 times per second, because the envelope is <span class="m">2 cos(2π · 2<i>t</i>)</span>.`, fix: `The envelope has frequency 2 Hz, but loudness follows its absolute value, which peaks twice in each cycle: 4 beats per second, the difference of the two frequencies.` }
  ],
  practice: [
    { q: `Write <span class="m">sin 4<i>x</i> cos 2<i>x</i></span> as a sum.`, a: `<span class="m"><span class="fr"><span>1</span><span>2</span></span>[sin(4<i>x</i> + 2<i>x</i>) + sin(4<i>x</i> − 2<i>x</i>)] = <span class="fr"><span>1</span><span>2</span></span>[sin 6<i>x</i> + sin 2<i>x</i>]</span>` },
    { q: `Find <span class="m">cos 75° cos 15°</span> exactly.`, a: `<span class="m"><span class="fr"><span>1</span><span>2</span></span>[cos 90° + cos 60°] = <span class="fr"><span>1</span><span>2</span></span>(0 + <span class="fr"><span>1</span><span>2</span></span>) = <span class="fr"><span>1</span><span>4</span></span></span>` },
    { q: `Write <span class="m">cos 7<i>x</i> − cos 3<i>x</i></span> as a product.`, a: `<span class="m">−2 sin <span class="fr"><span>7<i>x</i> + 3<i>x</i></span><span>2</span></span> sin <span class="fr"><span>7<i>x</i> − 3<i>x</i></span><span>2</span></span> = −2 sin 5<i>x</i> sin 2<i>x</i></span>` },
    { q: `Verify <span class="m"><span class="fr"><span>sin 3<i>x</i> + sin <i>x</i></span><span>cos 3<i>x</i> + cos <i>x</i></span></span> = tan 2<i>x</i></span>.`, a: `The top is <span class="m">2 sin 2<i>x</i> cos <i>x</i></span> and the bottom is <span class="m">2 cos 2<i>x</i> cos <i>x</i></span>. Cancel <span class="m">2 cos <i>x</i></span>: <span class="m"><span class="fr"><span>sin 2<i>x</i></span><span>cos 2<i>x</i></span></span> = tan 2<i>x</i></span>.` }
  ],
  origin: `Before logarithms, astronomers used product-to-sum formulas to multiply large numbers. Each factor was written as a cosine from a table, and cos α cos β was replaced by ½[cos(α + β) + cos(α − β)], which needs only table lookups, an addition and a halving. The method, called <b>prosthaphaeresis</b> (Greek for adding and subtracting), appeared in the 1580s; its originator is not certain, with Paul Wittich, Joost Bürgi and Christopher Clavius among those credited, and Tycho Brahe was its best-known user. John Napier, who invented logarithms (1614), also used it, and logarithms soon replaced it.`
};
