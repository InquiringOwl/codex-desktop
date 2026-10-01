window.ARITH = window.ARITH || {};

ARITH["mech-dimensions"] = {
  title: "Dimensional Analysis & Estimation",
  short: "Check equations by their dimensions, estimate by powers of ten",
  grade: "College PHYS 1xx · University Physics I",
  hours: 4,
  voice: "plain",
  eyebrow: "Mechanics · measurement",
  hero: `<span class="m">[<i>v</i>] = <span class="c2">L</span><span class="c4">T</span><sup>−1</sup> &nbsp;&nbsp; <span class="c5"><i>T</i> = 2π√<span style="text-decoration:overline"><i>L</i>/<i>g</i></span></span></span>`,
  lede: `Every quantity in mechanics has a dimension built from length <span class="c2">L</span>, mass <span class="c3">M</span> and time <span class="c4">T</span>. Both sides of a true equation must have the same dimension, which catches errors and can even predict the form of a law.`,
  plain: `<p>Units say which ruler you used. <b>Dimensions</b> say what kind of thing you measured. A distance in metres, feet or light-years always has the dimension of length, written [L]. Mass is [M] and time is [T]. A speed is a length divided by a time, so its dimension is L/T, written <span class="m">LT<sup>−1</sup></span>, whatever units you pick.</p>
<p>You can only add, subtract or set equal things of the same kind. Three metres plus two seconds is meaningless. So in any correct equation every term has the same dimension. If you derive a formula for a time and it comes out in L/T, you have made an algebra mistake somewhere. That check takes ten seconds and catches most slips.</p>
<p>The same rule can work in reverse. If you suspect a pendulum's period depends only on its length, its mass and <span class="m"><i>g</i></span>, there is only one way to combine those into a time: <span class="m">√<span style="text-decoration:overline"><i>L</i>/<i>g</i></span></span>. Dimensional analysis cannot find pure numbers such as <span class="m">2π</span>, but it tells you how the answer scales.</p>
<p>Physicists also make quick <b>estimates</b>, often called Fermi problems. Break a big unknown into factors you can guess to within a factor of a few, multiply, and keep only the power of ten. The answer is an <b>order of magnitude</b>, good enough to tell whether an idea is sensible before any careful work.</p>`,
  formal: `<p>The <b>dimension</b> of a quantity states how it depends on the base quantities. In mechanics,</p>
<div class="display">[<i>Q</i>] = <span class="c2">L</span><sup><i>a</i></sup> <span class="c3">M</span><sup><i>b</i></sup> <span class="c4">T</span><sup><i>c</i></sup><br>[<i>v</i>] = LT<sup>−1</sup>, &nbsp;[<i>a</i>] = LT<sup>−2</sup>, &nbsp;[<i>F</i>] = MLT<sup>−2</sup>, &nbsp;[<i>E</i>] = ML<sup>2</sup>T<sup>−2</sup>, &nbsp;[<i>ρ</i>] = ML<sup>−3</sup></div>
<p>The full SI adds current I, temperature Θ, amount N and luminous intensity J. A quantity with all exponents zero is <b>dimensionless</b>, for example an angle in radians or a ratio of two lengths. <b>Dimensional homogeneity:</b> every term of a physically meaningful equation has the same dimension, and the argument of a function such as sin, exp or ln must be dimensionless. Calculus follows the same rule: <span class="m">[d<i>x</i>/d<i>t</i>] = [<i>x</i>]/[<i>t</i>]</span> and <span class="m">[∫ <i>f</i> d<i>x</i>] = [<i>f</i>][<i>x</i>]</span>.</p>
<p>Consistency is necessary but not sufficient: <span class="m"><i>x</i> = <i>at</i><sup>2</sup></span> and <span class="m"><i>x</i> = ½<i>at</i><sup>2</sup></span> both pass. Assuming <span class="m"><i>Q</i> = <i>C</i>·<i>x</i><sub>1</sub><sup><i>p</i><sub>1</sub></sup><i>x</i><sub>2</sub><sup><i>p</i><sub>2</sub></sup>⋯</span> and matching the exponents of L, M and T gives a linear system for the powers; the dimensionless constant <span class="m"><i>C</i></span> must come from theory or experiment. An <b>order-of-magnitude estimate</b> gives a result rounded to the nearest power of ten.</p>`,
  legend: [
    { c: "c2", sym: `L`, name: "Length", desc: "Dimension of any distance: metres, feet, light-years." },
    { c: "c3", sym: `M`, name: "Mass", desc: "Dimension of mass, measured in kilograms in the SI." },
    { c: "c4", sym: `T`, name: "Time", desc: "Dimension of time. Do not confuse it with the period, the quantity also written T." },
    { c: "c1", sym: `[LHS] = [RHS]`, name: "Verdict", desc: "Whether the exponents of L, M and T agree on both sides of the equation." },
    { c: "c5", sym: `✓`, name: "Consistent formula", desc: "A formula whose every term has the same dimension. It may still be missing a pure number." }
  ],
  steps: { title: "How to check or build a formula by dimensions", items: [
    `Write the dimension of each quantity in terms of <span class="c2">L</span>, <span class="c3">M</span> and <span class="c4">T</span>, for example <span class="m">[<i>g</i>] = LT<sup>−2</sup></span>.`,
    `To check an equation, find the dimension of every term. Pure numbers such as 2, ½ and π are dimensionless.`,
    `Compare exponents: if any term differs, the equation is wrong. If all agree, it is <span class="c5">consistent</span>, though a numerical factor could still be wrong.`,
    `To build a formula, assume <span class="m"><i>Q</i> = <i>C x</i><sup><i>a</i></sup><i>y</i><sup><i>b</i></sup><i>z</i><sup><i>c</i></sup></span>, write the dimensions of both sides and set the exponents of L, M and T equal.`,
    `Solve the resulting equations for the powers, and state that the constant <span class="m"><i>C</i></span> is unknown.`,
    `For an estimate, break the unknown into factors you can guess, round each to one significant figure, multiply, and report the power of ten.`
  ] },
  example: {
    prompt: `A clockmaker wants to know how the period <span class="m"><i>T</i></span> of a pendulum depends on its length <span class="m"><i>L</i></span>, bob mass <span class="m"><i>m</i></span> and <span class="m"><i>g</i> = 9.80 m/s<sup>2</sup></span>. Find the form by dimensional analysis, then use the full result <span class="m"><i>T</i> = 2π√<span style="text-decoration:overline"><i>L</i>/<i>g</i></span></span> for <span class="m"><i>L</i> = 1.00 m</span>.`,
    lines: [
      { math: `<span class="m"><i>T</i> = <i>C</i> <i>L</i><sup><i>a</i></sup> <i>m</i><sup><i>b</i></sup> <i>g</i><sup><i>c</i></sup></span>`, note: "Assume a power law with an unknown dimensionless constant C." },
      { math: `<span class="m"><span class="c4">T</span><sup>1</sup> = <span class="c2">L</span><sup><i>a</i></sup> <span class="c3">M</span><sup><i>b</i></sup> (<span class="c2">L</span><span class="c4">T</span><sup>−2</sup>)<sup><i>c</i></sup> = <span class="c2">L</span><sup><i>a</i> + <i>c</i></sup> <span class="c3">M</span><sup><i>b</i></sup> <span class="c4">T</span><sup>−2<i>c</i></sup></span>`, note: "Replace each quantity by its dimension and collect exponents." },
      { math: `<span class="m"><span class="c3">M</span>: <i>b</i> = 0 &nbsp; <span class="c4">T</span>: −2<i>c</i> = 1 &nbsp; <span class="c2">L</span>: <i>a</i> + <i>c</i> = 0</span>`, note: "The left side has no mass and no length, and time to the first power." },
      { math: `<span class="m"><i>b</i> = 0, &nbsp;<i>c</i> = −½, &nbsp;<i>a</i> = ½ &nbsp;⇒&nbsp; <span class="c5"><i>T</i> = <i>C</i>√<span style="text-decoration:overline"><i>L</i>/<i>g</i></span></span></span>`, note: "The period does not depend on the mass at all." },
      { math: `<span class="m"><i>T</i> = 2π √<span style="text-decoration:overline">(1.00 m)/(9.80 m/s<sup>2</sup>)</span> = 2π(0.319 s) = 2.01 s</span>`, note: "Theory supplies C = 2π for small swings. The units reduce to √(s²) = s." },
      { math: `<span class="m"><i>T</i> ≈ 2 s</span>`, note: "Sanity check: a tall case clock with a pendulum about 1 m long ticks once per second, one tick each way." }
    ],
    answer: `Dimensional analysis gives <span class="m"><i>T</i> ∝ √<span style="text-decoration:overline"><i>L</i>/<i>g</i></span></span>, independent of mass. With <span class="m"><i>C</i> = 2π</span>, a 1.00 m pendulum has period <span class="m">2.01 s</span>.`
  },
  why: `<p>Dimensional analysis is the fastest error check in physics. Engineers and physicists apply it to every new formula before trusting it, and it catches dropped squares, misplaced factors of <span class="m"><i>g</i></span> and upside-down fractions. It also tells you how results scale: a pendulum four times as long has twice the period.</p>
<p>Engineers use the same idea to test scale models. Wind tunnels and ship tanks work because a model and the full-size object behave alike when the right dimensionless numbers match. Order-of-magnitude estimates are the partner skill: before any detailed calculation you should already know roughly what size of answer to expect.</p>`,
  careers: [
    { role: "Aerospace engineer", use: "Matches the Reynolds and Mach numbers of a wind-tunnel model to the full-size aircraft so the measured forces scale correctly." },
    { role: "Naval architect", use: "Tests hull models in towing tanks at the same Froude number as the real ship to predict wave resistance." },
    { role: "Research physicist", use: "Checks each line of a derivation by its dimensions and uses order-of-magnitude estimates to decide whether an effect is measurable." },
    { role: "Chemical engineer", use: "Scales a reactor from lab to plant size using dimensionless groups for heat and mass transfer." },
    { role: "Management consultant", use: "Sizes a market with a Fermi estimate built from population, usage rate and price." }
  ],
  life: [
    "Estimating how many litres of water you drink in a year",
    "Checking whether a formula copied from the web gives an answer in the right units",
    "Guessing how long a road trip takes before opening a map",
    "Estimating how many bricks are in a wall from its size",
    "Judging whether a claimed statistic is even the right order of magnitude"
  ],
  fields: [
    { name: "Fluid mechanics", use: "Reynolds, Froude and Mach numbers classify flows and allow model testing." },
    { name: "Biology", use: "Scaling laws relate metabolic rate, heart rate and lifespan to body mass." },
    { name: "Engineering", use: "Similitude and dimensionless groups guide model tests and design rules." },
    { name: "Astronomy", use: "Order-of-magnitude estimates of energies, timescales and sizes guide what to observe." }
  ],
  prereqWhy: {
    "mech-units": "Dimensions are the abstract version of SI base units: metres become L, kilograms M and seconds T."
  },
  unlocksWhy: {
    "mech-sigfigs": "An estimate claims only a power of ten and a measurement only its precision, and significant figures make that claim exact for computed results."
  },
  mathWhy: {
    "pa-exponent-laws": `Combining dimensions uses the product and power rules: <span class="m">(LT<sup>−2</sup>)<sup><i>c</i></sup> = L<sup><i>c</i></sup>T<sup>−2<i>c</i></sup></span> and <span class="m">L<sup><i>a</i></sup>·L<sup><i>c</i></sup> = L<sup><i>a</i> + <i>c</i></sup></span>, including negative and fractional exponents.`,
    "a1-literal": `Matching exponents gives small equations such as <span class="m"><i>a</i> + <i>c</i> = 0</span> and <span class="m">−2<i>c</i> = 1</span> to solve, and checking a formula means rearranging it into the form you need.`,
    "proportions": `Scaling arguments are proportions: since <span class="m"><i>T</i> ∝ √<span style="text-decoration:overline"><i>L</i></span></span>, a pendulum four times as long has a period twice as long.`
  },
  beyond: [
    { field: "Waves & Fluids", why: "Dimensionless groups such as the Reynolds number decide whether flow is smooth or turbulent and make model testing possible." },
    { field: "Classical Mechanics", why: "Scaling arguments and dimensional checks are used on every Lagrangian, Hamiltonian and solution." },
    { field: "Astrophysics & Cosmology", why: "Order-of-magnitude estimates of timescales, luminosities and densities are the first step in almost every problem." },
    { field: "Aerospace Engineering", why: "Wind-tunnel testing relies on matching dimensionless numbers between model and aircraft." }
  ],
  mistakes: [
    { wrong: `Treating a pure number as if it had a dimension, or thinking a check that passes proves the formula: <span class="m"><i>x</i> = <i>at</i><sup>2</sup></span> "must be right".`, fix: `Pure numbers are dimensionless, so a consistent formula can still be missing a factor such as ½. The correct result is <span class="m"><i>x</i> = ½<i>at</i><sup>2</sup></span>.` },
    { wrong: `Checking only one term: in <span class="m"><i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i><sup>2</sup></span>, noting that <span class="m"><i>x</i></span> and <span class="m"><i>x</i><sub>0</sub></span> are lengths and stopping.`, fix: `Every term must match: <span class="m">[<i>v</i><sub>0</sub><i>t</i><sup>2</sup>] = LT<sup>−1</sup>·T<sup>2</sup> = LT</span>, not L, so the equation is wrong.` },
    { wrong: `Writing <span class="m">sin(<i>ωt</i> + 3 m)</span> or <span class="m"><i>e</i><sup>−<i>t</i></sup></span> with <span class="m"><i>t</i></span> in seconds.`, fix: `Arguments of sin, exp and ln must be dimensionless: use <span class="m">sin(<i>ωt</i> + <i>φ</i>)</span> with <span class="m">[<i>ω</i>] = T<sup>−1</sup></span>, and <span class="m"><i>e</i><sup>−<i>t</i>/<i>τ</i></sup></span>.` },
    { wrong: `Reporting a Fermi estimate as 2 945 376 000 heartbeats.`, fix: `The inputs are guesses to one significant figure, so report about 3 × 10<sup>9</sup>, an order of magnitude of 10<sup>9</sup>.` }
  ],
  practice: [
    { q: `Find the dimensions of force (<span class="m"><i>F</i> = <i>ma</i></span>) and of kinetic energy (<span class="m"><i>K</i> = ½<i>mv</i><sup>2</sup></span>). Is "work = force × distance" dimensionally consistent with energy?`, a: `<span class="m">[<i>F</i>] = M·LT<sup>−2</sup> = MLT<sup>−2</sup></span> and <span class="m">[<i>K</i>] = M(LT<sup>−1</sup>)<sup>2</sup> = ML<sup>2</sup>T<sup>−2</sup></span>. Force × distance gives <span class="m">MLT<sup>−2</sup>·L = ML<sup>2</sup>T<sup>−2</sup></span>, the same, so yes.` },
    { q: `Which is dimensionally consistent: (a) <span class="m"><i>x</i> = <i>vt</i><sup>2</sup></span>, (b) <span class="m"><i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> + ½<i>at</i><sup>2</sup></span>?`, a: `(a) <span class="m">[<i>vt</i><sup>2</sup>] = LT<sup>−1</sup>·T<sup>2</sup> = LT ≠ L</span>, inconsistent. (b) each term is <span class="m">L</span>: <span class="m">[<i>v</i><sub>0</sub><i>t</i>] = LT<sup>−1</sup>·T</span> and <span class="m">[<i>at</i><sup>2</sup>] = LT<sup>−2</sup>·T<sup>2</sup></span>, consistent.` },
    { q: `Assume the time <span class="m"><i>t</i></span> for an object to fall from rest through height <span class="m"><i>h</i></span> is <span class="m"><i>C h</i><sup><i>a</i></sup><i>m</i><sup><i>b</i></sup><i>g</i><sup><i>c</i></sup></span>. Find the powers. Then use the exact result <span class="m"><i>t</i> = √<span style="text-decoration:overline">2<i>h</i>/<i>g</i></span></span> for <span class="m"><i>h</i> = 20.0 m</span>.`, a: `<span class="m">T = L<sup><i>a</i> + <i>c</i></sup>M<sup><i>b</i></sup>T<sup>−2<i>c</i></sup></span> gives <span class="m"><i>b</i> = 0</span>, <span class="m"><i>c</i> = −½</span>, <span class="m"><i>a</i> = ½</span>, so <span class="m"><i>t</i> = <i>C</i>√<span style="text-decoration:overline"><i>h</i>/<i>g</i></span></span> with <span class="m"><i>C</i> = √2</span>. Then <span class="m"><i>t</i> = √<span style="text-decoration:overline">2(20.0 m)/(9.80 m/s<sup>2</sup>)</span> = 2.02 s</span>.` },
    { q: `Estimate the number of times a human heart beats in a lifetime. Give an order of magnitude.`, a: `About 70 beats/min × 60 min/h × 24 h/d × 365 d/yr × 80 yr ≈ 3 × 10<sup>9</sup> beats. The order of magnitude is <span class="m">10<sup>9</sup></span>. Any reasonable choice of rate (60–80 per minute) and lifespan (70–90 years) gives between 2 × 10<sup>9</sup> and 4 × 10<sup>9</sup>.` }
  ],
  origin: `Joseph Fourier stated the rule that each term of a physical equation must have the same dimensions in his <i>Analytical Theory of Heat</i> (1822). Edgar Buckingham formalised the method of building dimensionless groups in 1914 (the Buckingham π theorem). Enrico Fermi was famous for quick estimates; at the first atomic bomb test in 1945 he estimated its yield from how far the blast carried scraps of paper he dropped.`
};
