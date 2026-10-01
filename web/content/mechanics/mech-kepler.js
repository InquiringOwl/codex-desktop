window.ARITH = window.ARITH || {};

ARITH["mech-kepler"] = {
  title: "Kepler's Laws",
  short: "Ellipses, equal areas and T² ∝ a³",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · gravitation",
  hero: `<span class="m"><span class="fr"><span>d<span class="c1"><i>A</i></span></span><span>d<i>t</i></span></span> = <span class="fr"><span><i>L</i></span><span>2<i>m</i></span></span> &nbsp;&nbsp; <i>T</i><sup>2</sup> = <span class="fr"><span>4π<sup>2</sup></span><span><i>GM</i></span></span> <span class="c4"><i>a</i></span><sup>3</sup></span>`,
  lede: `Planets move on <span class="c2">ellipses</span> with the Sun at one <span class="c3">focus</span>, sweep out <span class="c1">equal areas</span> in equal times, and have periods whose squares are proportional to the cubes of their <span class="c4">semi-major axes</span>.`,
  plain: `<p>Johannes Kepler spent years fitting Tycho Brahe's careful observations of Mars and found three rules that every planet obeys. First, orbits are not circles but <b>ellipses</b>, slightly squashed circles, with the Sun off-centre at a point called a focus. Most planetary orbits are nearly circular; comets can be very stretched.</p>
<p>Second, a line from the Sun to a planet sweeps out <b>equal areas in equal times</b>. Near the Sun the line is short, so the planet must move fast to sweep the same area; far away it creeps. Earth moves about 3% faster in early January, when it is closest to the Sun, than in early July.</p>
<p>Third, planets farther out take longer to go round, in a precise way: the square of the period is proportional to the cube of the orbit's size. Measure the period in years and the size (the semi-major axis) in astronomical units, and <span class="m"><i>T</i><sup>2</sup> = <i>a</i><sup>3</sup></span> for every planet. Mars, at 1.52 AU, takes 1.87 years.</p>
<p>Newton later showed that all three laws follow from his law of gravity: the ellipse from the inverse-square force, equal areas from conservation of angular momentum, and the third law with the constant <span class="m">4π<sup>2</sup>/<i>GM</i></span>, which lets us weigh the Sun and the planets.</p>`,
  formal: `<p><b>First law.</b> A bound orbit under an inverse-square attraction is an ellipse with the attracting body at one focus. In polar coordinates centred on that focus,</p>
<div class="display"><i>r</i>(θ) = <span class="fr"><span><span class="c4"><i>a</i></span>(1 − <i>e</i><sup>2</sup>)</span><span>1 + <i>e</i> cos θ</span></span>, &nbsp; 0 ≤ <i>e</i> &lt; 1 &nbsp;&nbsp; <i>r</i><sub>p</sub> = <i>a</i>(1 − <i>e</i>), &nbsp; <i>r</i><sub>a</sub> = <i>a</i>(1 + <i>e</i>), &nbsp; <span class="c3">focal distance <i>c</i> = <i>ae</i></span>, &nbsp; <i>b</i> = <i>a</i>√<span style="text-decoration:overline">1 − <i>e</i><sup>2</sup></span></div>
<p><b>Second law.</b> For any central force the torque about the centre is zero, so <span class="m"><b>L</b> = <b>r</b> × <i>m</i><b>v</b></span> is constant. The area swept per unit time is</p>
<div class="display"><span class="fr"><span>d<span class="c1"><i>A</i></span></span><span>d<i>t</i></span></span> = ½<i>r</i><sup>2</sup> <span class="fr"><span>dθ</span><span>d<i>t</i></span></span> = <span class="fr"><span><i>L</i></span><span>2<i>m</i></span></span> = constant &nbsp;&nbsp; ⇒ &nbsp; <i>r</i><sub>p</sub><i>v</i><sub>p</sub> = <i>r</i><sub>a</sub><i>v</i><sub>a</sub></div>
<p><b>Third law.</b> For a body of mass <span class="m"><i>m</i> ≪ <i>M</i></span>,</p>
<div class="display"><i>T</i><sup>2</sup> = <span class="fr"><span>4π<sup>2</sup></span><span><i>GM</i></span></span> <span class="c4"><i>a</i></span><sup>3</sup> &nbsp;<span class="dim">(exactly, <i>GM</i> → <i>G</i>(<i>M</i> + <i>m</i>))</span> &nbsp;&nbsp; <span class="dim">Sun, <i>T</i> in years, <i>a</i> in AU:</span> <i>T</i><sup>2</sup> = <i>a</i><sup>3</sup></div>
<p>The orbital energy depends only on <span class="m"><i>a</i></span>: <span class="m"><i>E</i> = −<i>GMm</i>/(2<i>a</i>)</span>, and the speed anywhere is given by the vis-viva equation <span class="m"><i>v</i><sup>2</sup> = <i>GM</i>(2/<i>r</i> − 1/<i>a</i>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>r</i>(θ)`, name: "Orbit", desc: "The elliptical path, with eccentricity e from 0 (circle) toward 1 (very stretched)." },
    { c: "c1", sym: `d<i>A</i>/d<i>t</i>`, name: "Swept area", desc: "Area swept by the Sun–planet line per unit time. Constant, equal to L/2m." },
    { c: "c3", sym: `<i>F</i><sub>1</sub>, <i>F</i><sub>2</sub>`, name: "Foci", desc: "Two points a distance ae from the centre. The Sun sits at one; the other is empty." },
    { c: "c4", sym: `<i>a</i>`, name: "Semi-major axis", desc: "Half the longest diameter, the average of the closest and farthest distances. It alone sets the period and the energy." }
  ],
  steps: { title: "How to use Kepler's laws", items: [
    `Identify the central body and its <span class="m"><i>GM</i></span>, or use <span class="m"><i>T</i><sup>2</sup> = <i>a</i><sup>3</sup></span> in years and AU for the Sun.`,
    `Find the <span class="c4">semi-major axis</span>: <span class="m"><i>a</i> = (<i>r</i><sub>p</sub> + <i>r</i><sub>a</sub>)/2</span>, with distances from the central body's centre.`,
    `Use the third law for the period or, from a measured period, for <span class="m"><i>a</i></span> or the central mass <span class="m"><i>M</i> = 4π<sup>2</sup><i>a</i><sup>3</sup>/(<i>GT</i><sup>2</sup>)</span>.`,
    `Use the geometry of the ellipse: <span class="m"><i>e</i> = (<i>r</i><sub>a</sub> − <i>r</i><sub>p</sub>)/(<i>r</i><sub>a</sub> + <i>r</i><sub>p</sub>)</span>, <span class="m"><i>r</i><sub>p</sub> = <i>a</i>(1 − <i>e</i>)</span>.`,
    `Use the second law (angular momentum) for speeds at the ends of the orbit: <span class="m"><i>v</i><sub>p</sub>/<i>v</i><sub>a</sub> = <i>r</i><sub>a</sub>/<i>r</i><sub>p</sub></span>; use vis-viva for the speed at any <span class="m"><i>r</i></span>.`,
    `Check units (seconds and metres with <span class="m"><i>G</i></span>, or years and AU without it) and that the planet is fastest at the closest point.`
  ] },
  example: {
    prompt: `Halley's Comet orbits the Sun with a period of 75.3 years and comes as close as 0.586 AU to the Sun. Find its semi-major axis, its farthest distance from the Sun, its eccentricity, and how much faster it moves at perihelion than at aphelion.`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>a</i></span> = <i>T</i><sup>2/3</sup> = (75.3)<sup>2/3</sup> AU = <span class="c4">17.8 AU</span></span>`, note: "Third law in years and AU: T² = a³." },
      { math: `<span class="m"><i>r</i><sub>a</sub> = 2<i>a</i> − <i>r</i><sub>p</sub> = 2(17.83) − 0.586 = 35.1 AU</span>`, note: "The long axis of the ellipse is r_p + r_a = 2a." },
      { math: `<span class="m"><i>e</i> = 1 − <span class="fr"><span><i>r</i><sub>p</sub></span><span><i>a</i></span></span> = 1 − <span class="fr"><span>0.586</span><span>17.83</span></span> = 0.967</span>`, note: "From r_p = a(1 − e): a very elongated ellipse." },
      { math: `<span class="m"><span class="fr"><span><i>v</i><sub>p</sub></span><span><i>v</i><sub>a</sub></span></span> = <span class="fr"><span><i>r</i><sub>a</sub></span><span><i>r</i><sub>p</sub></span></span> = <span class="fr"><span>35.08</span><span>0.586</span></span> = 59.9</span>`, note: "Second law: equal areas means r_p v_p = r_a v_a at the ends of the orbit." },
      { math: `<span class="m">30 AU &lt; 35.1 AU</span>`, note: "Sanity check: its aphelion lies just beyond Neptune's orbit, as observed." }
    ],
    answer: `Halley's Comet has <span class="m c4"><i>a</i> = 17.8 AU</span>, aphelion 35.1 AU and eccentricity 0.967, and moves about <span class="m">59.9</span> times faster at perihelion than at aphelion.`
  },
  why: `<p>Kepler's laws are the working rules of orbital mechanics. The third law weighs things: from a moon's period and distance we get a planet's mass, from stars orbiting the centre of the Milky Way we get the mass of its black hole, and from stars wobbling around their centre of mass we find planets around other stars. The second law explains why comets rush past the Sun and linger far away, and why spacecraft burn engines at perigee where they move fastest.</p>
<p>Historically, Newton's derivation of all three laws from one force law was the proof that his mechanics works in the heavens as on Earth, and the model for how a physical theory explains empirical rules.</p>`,
  careers: [
    { role: "Astronomer", use: "Finds the masses of planets, stars and black holes from the periods and sizes of orbits with M = 4π²a³/(GT²)." },
    { role: "Exoplanet scientist", use: "Converts the period of a planet's transits or its star's wobble into orbital distance with the third law." },
    { role: "Mission design engineer", use: "Plans transfer orbits whose travel time is half the period of an ellipse, set by its semi-major axis." },
    { role: "Satellite operations engineer", use: "Chooses the semi-major axis that gives a required period, such as 12-hour navigation or 24-hour geosynchronous orbits." },
    { role: "Planetary defence analyst", use: "Computes asteroid and comet orbits from observations to predict close approaches to Earth." },
    { role: "Science educator at a planetarium", use: "Explains seasons, comet returns and planetary motions with Kepler's three laws." }
  ],
  life: [
    "Predicting when a periodic comet like Halley's will return",
    "Knowing that Earth is closest to the Sun in January, not in summer in the north",
    "Understanding why outer planets take decades to go round the Sun",
    "Following news of newly found planets around other stars",
    "Seeing why satellites in higher orbits drift slowly across the sky"
  ],
  fields: [
    { name: "Astronomy", use: "Masses and distances of planets, binary stars and exoplanets come from Kepler's third law." },
    { name: "Aerospace engineering", use: "Orbit design and transfer timing use the ellipse geometry and period relations." },
    { name: "Planetary science", use: "Orbital elements of asteroids and comets are described by a, e and the other Keplerian elements." },
    { name: "History of science", use: "Kepler's laws and their derivation by Newton are a central episode of the Scientific Revolution." }
  ],
  prereqWhy: {
    "mech-orbits": "Bound orbits with negative energy are the ellipses of the first law, and the circular-orbit period T = 2π√(r³/GM) is the third law for e = 0.",
    "mech-ang-momentum": "The second law is conservation of angular momentum under a central force: dA/dt = L/(2m) stays constant."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-rational-exp": `The third law is solved with rational exponents: <span class="m"><i>a</i> = <i>T</i><sup>2/3</sup></span> and <span class="m"><i>T</i> = <i>a</i><sup>3/2</sup></span> (in years and AU), as in <span class="m">(75.3)<sup>2/3</sup> = 17.8</span> for Halley's Comet.`,
    "algebra-2:Conic sections": `The first law needs the ellipse: foci, semi-major and semi-minor axes, eccentricity <span class="m"><i>e</i> = <i>c</i>/<i>a</i></span>, and <span class="m"><i>b</i> = <i>a</i>√<span style="text-decoration:overline">1 − <i>e</i><sup>2</sup></span></span>; escape paths are the parabola and hyperbola of the same family.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "The Kepler problem is solved exactly with the effective potential and conserved energy and angular momentum; it is the model two-body problem." },
    { field: "Astrophysics & Cosmology", why: "Binary-star masses, exoplanet orbits and dark-matter evidence from rotation curves all apply Kepler's third law." },
    { field: "General Relativity", why: "Mercury's perihelion precession, a small departure from a fixed Keplerian ellipse, was one of the first confirmations of Einstein's theory." },
    { field: "Aerospace Engineering", why: "Keplerian orbital elements are the standard way to describe and propagate spacecraft orbits." }
  ],
  mistakes: [
    { wrong: `Putting the Sun at the centre of the ellipse.`, fix: `The Sun is at one focus, a distance <span class="m"><i>ae</i></span> from the centre. The other focus is empty.` },
    { wrong: `Using <span class="m"><i>T</i><sup>2</sup> = <i>a</i><sup>3</sup></span> with seconds and metres, or for a moon of Jupiter.`, fix: `That short form holds only for years and AU around the Sun. In SI units, or for another central body, use <span class="m"><i>T</i><sup>2</sup> = 4π<sup>2</sup><i>a</i><sup>3</sup>/(<i>GM</i>)</span>.` },
    { wrong: `Using the closest or farthest distance as <span class="m"><i>a</i></span>.`, fix: `<span class="m"><i>a</i></span> is half the long axis, <span class="m">(<i>r</i><sub>p</sub> + <i>r</i><sub>a</sub>)/2</span>, measured from the central body's centre.` },
    { wrong: `Thinking the second law means equal distances in equal times.`, fix: `It is equal areas. The planet covers more distance per day near perihelion, where the radius is short.` }
  ],
  practice: [
    { q: `Earth is 1.471 × 10<sup>11</sup> m from the Sun at perihelion and 1.521 × 10<sup>11</sup> m at aphelion. Where is it fastest, and by what factor is it faster there than at aphelion?`, a: `Fastest at perihelion (early January). <span class="m"><i>v</i><sub>p</sub>/<i>v</i><sub>a</sub> = <i>r</i><sub>a</sub>/<i>r</i><sub>p</sub> = 1.521/1.471 = 1.03</span>, about 3% faster.` },
    { q: `Mars has a semi-major axis of 1.52 AU. Find its orbital period.`, a: `<span class="m"><i>T</i> = <i>a</i><sup>3/2</sup> = (1.52)<sup>3/2</sup> = 1.87</span> years.` },
    { q: `Jupiter's moon Io orbits at 4.22 × 10<sup>8</sup> m from Jupiter's centre with a period of 1.77 days. Find the mass of Jupiter.`, a: `<span class="m"><i>T</i> = 1.77 × 86400 s = 1.529 × 10<sup>5</sup> s</span>. <span class="m"><i>M</i> = 4π<sup>2</sup><i>a</i><sup>3</sup>/(<i>GT</i><sup>2</sup>) = 4π<sup>2</sup>(4.22 × 10<sup>8</sup>)<sup>3</sup>/[(6.67 × 10<sup>−11</sup>)(1.529 × 10<sup>5</sup>)<sup>2</sup>] = 1.90 × 10<sup>27</sup> kg</span>, about 318 Earth masses.` },
    { q: `A satellite's elliptical orbit around Earth has perigee 6.67 × 10<sup>6</sup> m and apogee 4.22 × 10<sup>7</sup> m from Earth's centre. Find its eccentricity, period, and speeds at perigee and apogee.`, a: `<span class="m"><i>a</i> = 2.44 × 10<sup>7</sup> m</span>, <span class="m"><i>e</i> = (4.22 − 0.667)/(4.22 + 0.667) = 0.727</span>. <span class="m"><i>T</i> = 2π√<span style="text-decoration:overline"><i>a</i><sup>3</sup>/<i>GM</i></span> = 3.80 × 10<sup>4</sup> s</span> (10.6 h). Vis-viva at perigee: <span class="m"><i>v</i><sub>p</sub> = √<span style="text-decoration:overline"><i>GM</i>(2/<i>r</i><sub>p</sub> − 1/<i>a</i>)</span> = 1.02 × 10<sup>4</sup> m/s</span>; <span class="m"><i>v</i><sub>a</sub> = <i>v</i><sub>p</sub><i>r</i><sub>p</sub>/<i>r</i><sub>a</sub> = 1.60 × 10<sup>3</sup> m/s</span>.` }
  ],
  origin: `Kepler published the first two laws in <i>Astronomia nova</i> (1609), from Tycho Brahe's observations of Mars, and the third in <i>Harmonices mundi</i> (1619). Newton derived all three from the inverse-square law of gravitation in the <i>Principia</i> (1687).`
};
