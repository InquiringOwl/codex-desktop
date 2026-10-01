window.ARITH = window.ARITH || {};

ARITH["mech-circular"] = {
  title: "Uniform & Nonuniform Circular Motion",
  short: "Centripetal acceleration v²/r and the period",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in two dimensions",
  hero: `<span class="m"><span class="c1"><i>a</i><sub>c</sub></span> = <span class="fr"><span><span class="c3"><i>v</i></span><sup>2</sup></span><span><span class="c2"><i>r</i></span></span></span> = <span class="c2"><i>r</i></span>ω<sup>2</sup> &nbsp;&nbsp; <i>T</i> = <span class="fr"><span>2π<span class="c2"><i>r</i></span></span><span><span class="c3"><i>v</i></span></span></span></span>`,
  lede: `An object moving on a circle at constant speed is still accelerating, because its velocity keeps changing direction. That <span class="c1">centripetal acceleration</span> points to the centre and has size <span class="m"><i>v</i><sup>2</sup>/<i>r</i></span>.`,
  plain: `<p>Swing a ball on a string in a circle. Its speed can stay the same, yet at every instant it is heading in a new direction. Velocity is a vector, so a change of direction is a change of velocity, and that is acceleration. If you let go, the ball flies off along the <span class="c3">tangent</span>, the direction it was moving at that moment.</p>
<p>For steady motion on a circle the acceleration points straight at the centre. It is called <b>centripetal</b> ("centre-seeking") acceleration. Its size grows with the square of the speed and shrinks with the radius: take the same bend twice as fast and the acceleration is four times as large; take it on a curve twice as wide and it halves.</p>
<p>The time for one lap is the <b>period</b> <span class="m"><i>T</i></span>, and the number of laps per second is the <b>frequency</b> <span class="m"><i>f</i> = 1/<i>T</i></span>. If the object is also speeding up or slowing down, it has a second, <span class="c4">tangential</span> acceleration along the path. The total acceleration is the vector sum of the two, and it no longer points at the centre.</p>`,
  formal: `<p>For a particle on a circle of radius <span class="m c2"><i>r</i></span> centred at the origin, with constant angular frequency <span class="m">ω</span> (rad/s),</p>
<div class="display"><b>r</b>(<i>t</i>) = <i>r</i> cos ω<i>t</i> î + <i>r</i> sin ω<i>t</i> ĵ<br><span class="c3"><b>v</b>(<i>t</i>) = −<i>r</i>ω sin ω<i>t</i> î + <i>r</i>ω cos ω<i>t</i> ĵ</span>, &nbsp; <span class="c3"><i>v</i> = <i>r</i>ω</span><br><span class="c1"><b>a</b>(<i>t</i>) = −<i>r</i>ω<sup>2</sup> cos ω<i>t</i> î − <i>r</i>ω<sup>2</sup> sin ω<i>t</i> ĵ = −ω<sup>2</sup><b>r</b>(<i>t</i>)</span>, &nbsp; <span class="c1"><i>a</i><sub>c</sub> = <i>r</i>ω<sup>2</sup> = <span class="fr"><span><i>v</i><sup>2</sup></span><span><i>r</i></span></span></span></div>
<p>So in <b>uniform circular motion</b> the velocity is tangent, the acceleration points toward the centre, and <span class="m"><b>v</b> ⟂ <b>a</b></span>. The period and frequency are <span class="m"><i>T</i> = 2π<i>r</i>/<i>v</i> = 2π/ω</span> and <span class="m"><i>f</i> = 1/<i>T</i></span>, which gives the equivalent form <span class="m"><i>a</i><sub>c</sub> = 4π<sup>2</sup><i>r</i>/<i>T</i><sup>2</sup></span>.</p>
<p>In <b>nonuniform circular motion</b> the speed changes as well. The acceleration then has a <span class="c4">tangential component</span> <span class="m c4"><i>a</i><sub>T</sub> = d|<b>v</b>|/d<i>t</i></span> along the velocity and the centripetal component <span class="m c1"><i>a</i><sub>c</sub> = <i>v</i><sup>2</sup>/<i>r</i></span> toward the centre; they are perpendicular, so <span class="m">|<b>a</b>| = √(<i>a</i><sub>c</sub><sup>2</sup> + <i>a</i><sub>T</sub><sup>2</sup>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>r</i>`, name: "Radius", desc: "Distance from the centre to the object, in metres. The position vector points outward along it." },
    { c: "c3", sym: `<b>v</b>`, name: "Velocity", desc: "Tangent to the circle, with magnitude <span class=\"m\"><i>v</i> = <i>r</i>ω = 2π<i>r</i>/<i>T</i></span>." },
    { c: "c1", sym: `<b>a</b><sub>c</sub>`, name: "Centripetal acceleration", desc: "Points to the centre, magnitude <span class=\"m\"><i>v</i><sup>2</sup>/<i>r</i></span>. It changes the direction of the velocity only." },
    { c: "c4", sym: `<b>a</b><sub>T</sub>`, name: "Tangential acceleration", desc: "Along the velocity, magnitude <span class=\"m\">d|<b>v</b>|/d<i>t</i></span>. Nonzero only when the speed changes." }
  ],
  steps: { title: "How to solve a circular-motion problem", items: [
    `Identify the radius <span class="m c2"><i>r</i></span> of the circle actually travelled (for an orbit, planet radius plus altitude).`,
    `Find the speed: given directly, or from <span class="m"><i>v</i> = 2π<i>r</i>/<i>T</i></span> or <span class="m"><i>v</i> = <i>r</i>ω</span>. Convert rpm to rad/s with <span class="m">× 2π/60</span>.`,
    `Compute the centripetal acceleration <span class="m c1"><i>a</i><sub>c</sub> = <i>v</i><sup>2</sup>/<i>r</i></span> (or <span class="m"><i>r</i>ω<sup>2</sup></span>), directed toward the centre.`,
    `If the speed is changing, find <span class="m c4"><i>a</i><sub>T</sub></span> and combine: <span class="m">|<b>a</b>| = √(<i>a</i><sub>c</sub><sup>2</sup> + <i>a</i><sub>T</sub><sup>2</sup>)</span>, at angle <span class="m">tan<sup>−1</sup>(<i>a</i><sub>T</sub>/<i>a</i><sub>c</sub>)</span> from the inward radius.`,
    `Check units (m/s²) and compare with <span class="m"><i>g</i> = 9.80 m/s²</span> to judge whether the size is sensible.`
  ] },
  example: {
    prompt: `A laboratory centrifuge spins blood samples at 12,000 rpm. The samples sit 10.0 cm from the axis. Find the samples' angular frequency, speed, period and centripetal acceleration, and express the acceleration in multiples of <span class="m"><i>g</i></span>.`,
    lines: [
      { math: `<span class="m">ω = 12,000 <span class="fr"><span>rev</span><span>min</span></span> × <span class="fr"><span>2π rad</span><span>1 rev</span></span> × <span class="fr"><span>1 min</span><span>60 s</span></span> = 1.26 × 10<sup>3</sup> rad/s</span>`, note: "Convert rpm to rad/s (unrounded 1256.6 rad/s)." },
      { math: `<span class="m"><span class="c3"><i>v</i></span> = <span class="c2"><i>r</i></span>ω = (0.100 m)(1256.6 rad/s) = <span class="c3">126 m/s</span></span>`, note: "Radius in metres. Radians are dimensionless, so rad·m/s is m/s." },
      { math: `<span class="m"><i>T</i> = 2π/ω = 5.00 × 10<sup>−3</sup> s</span>`, note: "One revolution every 5.00 ms, which is 1/200 s since 12,000 rpm is 200 rev/s." },
      { math: `<span class="m"><span class="c1"><i>a</i><sub>c</sub></span> = <span class="c2"><i>r</i></span>ω<sup>2</sup> = (0.100 m)(1256.6 rad/s)<sup>2</sup> = <span class="c1">1.58 × 10<sup>5</sup> m/s²</span></span>`, note: "Centripetal acceleration, directed toward the axis." },
      { math: `<span class="m"><span class="fr"><span><i>v</i><sup>2</sup></span><span><i>r</i></span></span> = <span class="fr"><span>(125.66 m/s)<sup>2</sup></span><span>0.100 m</span></span> = 1.58 × 10<sup>5</sup> m/s² ✓</span>`, note: "Check with the other form of the formula." },
      { math: `<span class="m"><span class="fr"><span>1.58 × 10<sup>5</sup> m/s²</span><span>9.80 m/s²</span></span> = 1.61 × 10<sup>4</sup></span>`, note: "About 16,100 g. Enormous, which is why dense blood cells separate from plasma in minutes." }
    ],
    answer: `<span class="m">ω = 1.26 × 10<sup>3</sup></span> rad/s, <span class="m c3"><i>v</i> = 126 m/s</span>, <span class="m"><i>T</i> = 5.00 ms</span>, and <span class="m c1"><i>a</i><sub>c</sub> = 1.58 × 10<sup>5</sup> m/s²</span>, about <span class="m">1.61 × 10<sup>4</sup> <i>g</i></span>, toward the axis.`
  },
  why: `<p>Circular motion is everywhere: wheels, gears, turbines, hard drives, centrifuges, cars on curves, satellites in orbit. In every case something must supply the inward acceleration <span class="m"><i>v</i><sup>2</sup>/<i>r</i></span>: friction for a car, tension for a swung ball, gravity for a satellite. Knowing its size tells engineers how strong a part must be, how fast a curve can be taken, and how much force a pilot's body can take in a tight turn.</p>
<p>It is also the first place where acceleration clearly does not mean "speeding up". The centripetal result feeds directly into circular dynamics, Newton's law of gravitation and orbits, and rotational kinematics, where <span class="m"><i>v</i> = <i>r</i>ω</span> links the motion of a point to the spin of the whole body.</p>`,
  careers: [
    { role: "Clinical laboratory scientist", use: "Sets centrifuge speeds in rpm to reach a specified relative centrifugal force (multiples of g) for separating blood components." },
    { role: "Highway engineer", use: "Chooses curve radii and design speeds so the required centripetal acceleration stays within what tyres and passengers tolerate." },
    { role: "Aerospace medicine physician", use: "Plans human-centrifuge training for pilots, whose tolerance is rated in g for a given radius and rotation rate." },
    { role: "Satellite operations engineer", use: "Relates orbital radius, speed and period for circular orbits, such as the roughly 92-minute period of the ISS." },
    { role: "Amusement ride engineer", use: "Keeps riders' centripetal accelerations on loops and spinning rides within safety limits." },
    { role: "Mechanical engineer", use: "Computes rim speeds and centripetal accelerations of flywheels and turbine blades to check stresses." }
  ],
  life: [
    "Feeling pushed toward the outside of a car taking a sharp curve",
    "Seeing water fly off a spinning bicycle wheel along the tangent",
    "Understanding why a washing machine's spin cycle removes water",
    "Knowing why a sharp bend on a motorway has a lower speed limit",
    "Reading the rpm rating on a drill, blender or centrifuge"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Rotating machinery design depends on rim speeds and centripetal accelerations." },
    { name: "Clinical and biomedical science", use: "Centrifugation protocols are specified by acceleration in multiples of g." },
    { name: "Astronomy and space science", use: "Circular-orbit speeds and periods come from setting gravity equal to the centripetal requirement." },
    { name: "Transportation engineering", use: "Road and rail curve design uses v²/r to set radii, speed limits and banking." }
  ],
  prereqWhy: {
    "mech-2d-motion": "Circular motion is a curved 2-D path; its velocity and acceleration are found by differentiating the position vector r(t) component by component."
  },
  unlocksWhy: {
    "mech-centripetal": "Newton's second law turns the centripetal acceleration v²/r into the inward net force mv²/r that friction, tension, the normal force or gravity must supply.",
    "mech-rot-kinematics": "The relations v = rω and T = 2π/ω carry over to describing the spin of a rigid body with angle, angular velocity and angular acceleration."
  },
  mathWhy: {
    "trigonometry:Radian and degree measure": `Angular frequency <span class="m">ω</span> is in rad/s, and <span class="m"><i>v</i> = <i>r</i>ω</span> and <span class="m"><i>s</i> = <i>r</i>θ</span> hold only when angles are in radians; converting rpm uses <span class="m">1 rev = 2π rad</span>.`,
    "trigonometry:The unit circle": `The position on the circle is <span class="m">(<i>r</i> cos ω<i>t</i>, <i>r</i> sin ω<i>t</i>)</span>, a scaled unit-circle point that sweeps around at rate <span class="m">ω</span>.`,
    "calculus-1:Derivatives of trig, exponential and log functions": `Differentiating <span class="m"><i>r</i> cos ω<i>t</i></span> and <span class="m"><i>r</i> sin ω<i>t</i></span> twice gives <span class="m"><b>a</b> = −ω<sup>2</sup><b>r</b></span>, the derivation of <span class="m"><i>v</i><sup>2</sup>/<i>r</i></span>. Co-requisite: the result can be used with algebra alone, and the derivative shows where it comes from.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Polar coordinates split any acceleration into radial and tangential parts, including the centripetal term −rω² and the Coriolis term." },
    { field: "Electricity & Magnetism", why: "Charged particles in a uniform magnetic field move in circles, and the cyclotron radius comes from setting qvB equal to mv²/r." },
    { field: "Astrophysics & Cosmology", why: "Circular orbital speeds of stars and gas clouds trace galaxy rotation curves, a key line of evidence for dark matter." },
    { field: "Mechanical Engineering", why: "Stresses in flywheels, rotors and turbine blades scale with rω², which limits safe rotation speeds." }
  ],
  mistakes: [
    { wrong: `"Constant speed on a circle means zero acceleration."`, fix: `The direction of <span class="m"><b>v</b></span> changes continuously, so there is an acceleration <span class="m"><i>v</i><sup>2</sup>/<i>r</i></span> toward the centre even at constant speed.` },
    { wrong: `Drawing the acceleration outward, or calling "centrifugal force" the cause of the motion.`, fix: `In an inertial frame the acceleration points inward. The outward push a passenger feels is the tendency to continue in a straight line, not an outward force.` },
    { wrong: `Using rpm directly as ω: <span class="m"><i>v</i> = <i>r</i> × 12,000</span>.`, fix: `Convert first: <span class="m">ω = 12,000 × 2π/60 = 1257</span> rad/s. The formula <span class="m"><i>v</i> = <i>r</i>ω</span> needs radians per second.` },
    { wrong: `Adding <span class="m"><i>a</i><sub>c</sub></span> and <span class="m"><i>a</i><sub>T</sub></span> as numbers: <span class="m">2.00 + 1.50 = 3.50</span> m/s².`, fix: `They are perpendicular vectors: <span class="m">|<b>a</b>| = √(2.00<sup>2</sup> + 1.50<sup>2</sup>) = 2.50</span> m/s².` }
  ],
  practice: [
    { q: `A car rounds a flat curve of radius 50.0 m at a constant 15.0 m/s. What are the magnitude and direction of its acceleration?`, a: `<span class="m"><i>a</i><sub>c</sub> = <i>v</i><sup>2</sup>/<i>r</i> = (15.0)<sup>2</sup>/50.0 = 4.50</span> m/s², directed toward the centre of the curve.` },
    { q: `The International Space Station orbits 400 km above Earth's surface (<span class="m"><i>R</i><sub>E</sub> = 6.37 × 10<sup>6</sup></span> m) with a period of 92.4 min. Find its orbital speed and centripetal acceleration.`, a: `<span class="m"><i>r</i> = 6.77 × 10<sup>6</sup></span> m, <span class="m"><i>T</i> = 5544</span> s. <span class="m"><i>v</i> = 2π<i>r</i>/<i>T</i> = 7.67 × 10<sup>3</sup></span> m/s (7.67 km/s). <span class="m"><i>a</i><sub>c</sub> = <i>v</i><sup>2</sup>/<i>r</i> = 8.70</span> m/s², which is the strength of gravity at that altitude.` },
    { q: `A race car on a circular track of radius 200 m is speeding up at 1.50 m/s². At the instant its speed is 20.0 m/s, find the magnitude of its total acceleration and its angle from the inward radius.`, a: `<span class="m"><i>a</i><sub>c</sub> = 20.0<sup>2</sup>/200 = 2.00</span> m/s², <span class="m"><i>a</i><sub>T</sub> = 1.50</span> m/s². <span class="m">|<b>a</b>| = √(2.00<sup>2</sup> + 1.50<sup>2</sup>) = 2.50</span> m/s², at <span class="m">tan<sup>−1</sup>(1.50/2.00) = 36.9°</span> from the inward radius, tilted toward the direction of motion.` },
    { q: `A carousel turns once every 4.00 s. A rider moves from 1.00 m to 2.00 m from the centre. By what factor do her speed and centripetal acceleration change? Why does this not contradict <span class="m"><i>a</i><sub>c</sub> = <i>v</i><sup>2</sup>/<i>r</i></span> shrinking with <span class="m"><i>r</i></span>?`, a: `The period is fixed, so <span class="m"><i>v</i> = 2π<i>r</i>/<i>T</i></span> doubles (1.57 → 3.14 m/s) and <span class="m"><i>a</i><sub>c</sub> = 4π<sup>2</sup><i>r</i>/<i>T</i><sup>2</sup></span> doubles (2.47 → 4.93 m/s²). <span class="m"><i>a</i><sub>c</sub> ∝ 1/<i>r</i></span> holds only at fixed speed; here the speed grows with <span class="m"><i>r</i></span>, and <span class="m"><i>v</i><sup>2</sup></span> grows faster.` }
  ],
  origin: `Christiaan Huygens derived that the outward tendency of a body on a circle grows as <span class="m"><i>v</i><sup>2</sup>/<i>r</i></span> in <i>De vi centrifuga</i>, written in 1659 and published in 1703. Isaac Newton reached the same result independently and used it in the <i>Principia</i> (1687) to link Kepler's third law to an inverse-square force.`
};
