window.ARITH = window.ARITH || {};

ARITH["mech-drag"] = {
  title: "Drag Force & Terminal Speed",
  short: "Air resistance grows with speed until it balances weight",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · applications of Newton's laws",
  hero: `<span class="m"><span class="c2"><i>F</i><sub>D</sub></span> = ½<i>C</i><i>ρ</i><i>A</i><i>v</i><sup>2</sup> &nbsp;&nbsp; <span class="c1"><i>v</i><sub>T</sub></span> = √<span style="text-decoration:overline"><span class="fr"><span>2<span class="c3"><i>mg</i></span></span><span><i>ρ</i><i>C</i><i>A</i></span></span></span></span>`,
  lede: `A body moving through air or water feels a <span class="c2">drag force</span> that opposes its velocity and grows with speed. A falling body speeds up until drag equals its <span class="c3">weight</span>; from then on it falls at a constant <span class="c1">terminal speed</span>.`,
  plain: `<p>Put your hand out of a car window. At walking pace you barely feel the air; on the highway it shoves your hand back hard. That push is <b>drag</b>. It always points against the motion through the fluid, and it gets bigger the faster you go. For everyday objects in air (balls, cars, people) it grows roughly with the <i>square</i> of the speed: twice as fast, four times the drag.</p>
<p>Drop a skydiver from a plane. At first she is slow, drag is tiny and she accelerates at almost <span class="m"><i>g</i></span>. As she speeds up, drag grows and eats into the net force, so the acceleration shrinks. Eventually drag is as large as her weight. The net force is zero, the acceleration is zero, and she keeps falling at one steady speed, the <b>terminal speed</b>. Spreading her arms and legs makes her area bigger and her terminal speed lower; diving head first does the opposite.</p>
<p>Very small or very slow objects, like dust, pollen or a bead sinking in syrup, follow a simpler rule: drag grows in proportion to speed, not its square. Both rules lead to the same picture of a speed that climbs quickly at first and then levels off at a ceiling it approaches but never quite reaches.</p>`,
  formal: `<p>The <b>drag force</b> on a body moving at speed <span class="m"><i>v</i></span> relative to a fluid points opposite to that relative velocity. At the high Reynolds numbers typical of objects in air,</p>
<div class="display"><span class="c2"><i>F</i><sub>D</sub></span> = ½<i>C</i><i>ρ</i><i>A</i><i>v</i><sup>2</sup> &nbsp;&nbsp;<span class="dim">(C drag coefficient, ρ fluid density, A cross-sectional area)</span><br><span class="dim">slow, small bodies (Stokes regime):</span>&nbsp; <span class="c2"><i>F</i></span> = <i>b</i><i>v</i>, &nbsp; <i>b</i> = 6π<i>η</i><i>r</i> <span class="dim">for a sphere of radius r in a fluid of viscosity η</span></div>
<p>For a body falling from rest (down positive), Newton's second law is a first-order differential equation. Setting <span class="m"><i>dv</i>/<i>dt</i> = 0</span> gives the <b>terminal speed</b>:</p>
<div class="display"><span class="dim">linear:</span>&nbsp; <i>m</i> <span class="fr"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class="c3"><i>mg</i></span> − <i>bv</i> &nbsp;⇒&nbsp; <i>v</i>(<i>t</i>) = <span class="c1"><i>v</i><sub>T</sub></span>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>), &nbsp; <span class="c1"><i>v</i><sub>T</sub></span> = <span class="fr"><span><i>mg</i></span><span><i>b</i></span></span>, &nbsp; <i>τ</i> = <span class="fr"><span><i>m</i></span><span><i>b</i></span></span><br><span class="dim">quadratic:</span>&nbsp; <i>m</i> <span class="fr"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class="c3"><i>mg</i></span> − ½<i>C</i><i>ρ</i><i>A</i><i>v</i><sup>2</sup> &nbsp;⇒&nbsp; <i>v</i>(<i>t</i>) = <span class="c1"><i>v</i><sub>T</sub></span> tanh(<i>g</i><i>t</i>/<span class="c1"><i>v</i><sub>T</sub></span>), &nbsp; <span class="c1"><i>v</i><sub>T</sub></span> = √<span style="text-decoration:overline">2<i>mg</i>/(<i>ρ</i><i>C</i><i>A</i>)</span></div>
<p>In both cases <span class="m">lim<sub><i>t</i>→∞</sub> <i>v</i>(<i>t</i>) = <i>v</i><sub>T</sub></span>, and for early times <span class="m"><i>v</i> ≈ <i>g</i><i>t</i></span>, the <span class="c4">no-drag</span> free-fall line. Typical values: <span class="m"><i>ρ</i><sub>air</sub> ≈ 1.21 kg/m³</span> at 20 °C, <span class="m"><i>C</i> ≈ 0.45</span> for a sphere, 0.25–0.35 for a car, about 1.0 for a spread-eagle skydiver.</p>`,
  legend: [
    { c: "c3", sym: `<i>mg</i>`, name: "Weight", desc: "The constant downward pull of gravity on the falling body, in newtons. It drives the fall." },
    { c: "c2", sym: `<i>F</i><sub>D</sub>`, name: "Drag force", desc: "The fluid's resistive force, opposite the velocity. It is <span class=\"m\">½<i>C</i><i>ρ</i><i>A</i><i>v</i><sup>2</sup></span> in the quadratic model or <span class=\"m\"><i>bv</i></span> in the linear model." },
    { c: "c1", sym: `<i>v</i><sub>T</sub>`, name: "Terminal speed", desc: "The speed at which drag equals weight, so the net force and the acceleration are zero. The fall speed approaches it and levels off." },
    { c: "c4", sym: `<i>v</i> = <i>g</i><i>t</i>`, name: "No-drag reference", desc: "Free fall in a vacuum. The real speed starts along this line and then falls below it as drag builds." }
  ],
  steps: { title: "How to find terminal speed and the approach to it", items: [
    `Draw the free-body diagram: <span class="c3">weight</span> <span class="m"><i>mg</i></span> down, <span class="c2">drag</span> up (opposite the velocity). Take down as positive for a falling body.`,
    `Pick the drag model: <span class="m">½<i>C</i><i>ρ</i><i>A</i><i>v</i><sup>2</sup></span> for ordinary objects in air, <span class="m"><i>bv</i></span> for tiny or very slow bodies in a viscous fluid.`,
    `Set the net force to zero, <span class="m"><i>mg</i> = <i>F</i><sub>D</sub>(<i>v</i><sub>T</sub>)</span>, and solve for <span class="m c1"><i>v</i><sub>T</sub></span>.`,
    `For the approach, write <span class="m"><i>m</i> d<i>v</i>/d<i>t</i> = <i>mg</i> − <i>F</i><sub>D</sub>(<i>v</i>)</span>, separate variables and integrate, or use the standard results <span class="m"><i>v</i><sub>T</sub>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>)</span> and <span class="m"><i>v</i><sub>T</sub> tanh(<i>g</i><i>t</i>/<i>v</i><sub>T</sub>)</span>.`,
    `Check the limits: <span class="m"><i>v</i> ≈ <i>g</i><i>t</i></span> at small <span class="m"><i>t</i></span>, and <span class="m"><i>v</i> → <i>v</i><sub>T</sub></span> at large <span class="m"><i>t</i></span>.`
  ] },
  example: {
    prompt: `An 85.0 kg skydiver (with gear) falls belly-down with a cross-sectional area of 0.700 m² and a drag coefficient of 1.00. The air density is 1.21 kg/m³. Find her terminal speed, and how long after leaving the plane (from rest vertically) she reaches 90.0 % of it.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>mg</i></span> = (85.0 kg)(9.80 m/s²) = <span class="c3">833 N</span></span>`, note: "The weight, which drag must eventually balance." },
      { math: `<span class="m">½<i>C</i><i>ρ</i><i>A</i><span class="c1"><i>v</i><sub>T</sub></span><sup>2</sup> = <i>mg</i> &nbsp;⇒&nbsp; <span class="c1"><i>v</i><sub>T</sub></span> = √<span style="text-decoration:overline"><span class="fr"><span>2<i>mg</i></span><span><i>ρ</i><i>C</i><i>A</i></span></span></span></span>`, note: "At terminal speed the net force is zero, so drag equals weight." },
      { math: `<span class="m"><span class="c1"><i>v</i><sub>T</sub></span> = √<span style="text-decoration:overline"><span class="fr"><span>2(833 N)</span><span>(1.21 kg/m³)(1.00)(0.700 m²)</span></span></span> = <span class="c1">44.4 m/s</span></span>`, note: "Units: N/(kg/m³ · m²) = (kg·m/s²)/(kg/m) = m²/s², and its square root is m/s." },
      { math: `<span class="m">tanh(<i>g</i><i>t</i>/<i>v</i><sub>T</sub>) = 0.900 &nbsp;⇒&nbsp; <i>g</i><i>t</i>/<i>v</i><sub>T</sub> = tanh<sup>−1</sup>(0.900) = 1.47</span>`, note: "Quadratic drag from rest gives v(t) = vT tanh(gt/vT)." },
      { math: `<span class="m"><i>t</i> = (1.472)(44.35 m/s)/(9.80 m/s²) = 6.66 s</span>`, note: "Keep unrounded values in the chain, then round." },
      { math: `<span class="m">44.4 m/s × 3.6 = 160 km/h</span>`, note: "Sanity check: the same order as the roughly 190 km/h (120 mph) usually quoted for belly-down skydivers, and far below the 65 m/s that free fall without air would give after 6.66 s." }
    ],
    answer: `Her terminal speed is <span class="m c1">44.4 m/s</span> (about 160 km/h), and she reaches 90 % of it about <span class="m">6.66 s</span> after leaving the plane.`
  },
  why: `<p>Drag decides how fast raindrops hit the ground, how far a golf ball carries, how much fuel a truck burns at highway speed and how a parachute lets a person land at a walking-pace speed. It is the reason real falling objects do not follow the textbook free-fall formulas for long, and why cyclists and car designers fight for every hundredth of a drag coefficient.</p>
<p>It is also the first force in mechanics that depends on velocity. That turns Newton's second law into a genuine differential equation whose solution approaches a limit, the same mathematics that describes a capacitor charging, a cup of coffee cooling and a drug reaching a steady level in the blood.</p>`,
  careers: [
    { role: "Automotive aerodynamicist", use: "Lowers the product C·A in the wind tunnel because highway fuel use is dominated by drag that grows as v²." },
    { role: "Parachute and recovery-system engineer", use: "Sizes canopy area from 2mg/(ρCv²) so a payload or skydiver lands below a target speed." },
    { role: "Sports engineer", use: "Tests dimple patterns and cycling suits to lower drag coefficients, which changes a golf ball's carry or a time-trial speed." },
    { role: "Atmospheric scientist", use: "Uses terminal fall speeds of raindrops, hail and aerosol particles to model precipitation and how long pollution stays aloft." },
    { role: "Chemical engineer", use: "Designs settling tanks and centrifuges from the Stokes terminal speed of particles in a liquid." },
    { role: "Aerospace engineer", use: "Computes reentry and ascent loads from ½ρv²CA with air density that changes with altitude." }
  ],
  life: [
    "Feeling the wind push harder on your hand out of a car window as the car speeds up",
    "Noticing that fuel economy drops sharply above about 100 km/h",
    "Seeing a feather or a sheet of paper drift down while a stone drops",
    "Tucking low on a bike to go faster downhill",
    "Watching fine dust hang in a sunbeam long after it was stirred up"
  ],
  fields: [
    { name: "Aerospace engineering", use: "Drag, with lift, sets the thrust and fuel needed for every phase of flight." },
    { name: "Meteorology", use: "Terminal speeds of drops and ice particles control precipitation rates and cloud lifetimes." },
    { name: "Sports science", use: "Drag on balls, bikes and athletes sets ranges, top speeds and equipment rules." },
    { name: "Environmental engineering", use: "Settling speeds decide how particles are removed in water treatment and how smoke disperses." }
  ],
  prereqWhy: {
    "mech-friction": "Drag is a resistive force like kinetic friction and enters the free-body diagram the same way, but its size depends on speed rather than on the normal force.",
    "mech-motion-integration": "Because drag depends on v, the acceleration a(v) is not constant, and v(t) must be found by integrating dv/dt as done for variable acceleration."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-exp-functions": `The linear-drag speed <span class="m"><i>v</i>(<i>t</i>) = <i>v</i><sub>T</sub>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>)</span> is an exponential approach; reading the time constant <span class="m"><i>τ</i> = <i>m</i>/<i>b</i></span> and solving for a time with a logarithm are exponential-function skills.`,
    "calculus-1:Limits and continuity": `Terminal speed is the limit <span class="m">lim<sub><i>t</i>→∞</sub> <i>v</i>(<i>t</i>)</span>; the speed gets as close as you like but never reaches it in finite time. Co-requisite: terminal speed itself only needs algebra (drag = weight).`,
    "diff-eq:First-order equations: separable, linear, exact": `<span class="m"><i>m</i> d<i>v</i>/d<i>t</i> = <i>mg</i> − <i>bv</i></span> is separable (and linear); separating and integrating gives the exponential solution, and the quadratic case gives tanh. Needed outright only for <span class="m"><i>v</i>(<i>t</i>)</span>; the page quotes the results so the method can be learned alongside.`
  },
  beyond: [
    { field: "Waves & Fluids", why: "Drag is where fluid dynamics begins: viscosity, Stokes' law and the Reynolds number that separates the linear and quadratic regimes." },
    { field: "Classical Mechanics", why: "Velocity-dependent damping forces appear in damped oscillators and projectile motion with air resistance." },
    { field: "Computational Physics", why: "Realistic trajectories with quadratic drag have no closed form in 2-D and are integrated numerically." },
    { field: "Aerospace Engineering", why: "Drag with altitude-dependent density sets launch, cruise and reentry performance." }
  ],
  mistakes: [
    { wrong: `Saying that at terminal speed there is no force on the falling body.`, fix: `Both forces are still there and large. They cancel: <span class="m"><i>F</i><sub>D</sub> = <i>mg</i></span>, so the <i>net</i> force and the acceleration are zero.` },
    { wrong: `Treating drag as constant, like kinetic friction: "the drag is 400 N, so the acceleration stays the same."`, fix: `Drag depends on speed. In the quadratic model doubling <span class="m"><i>v</i></span> quadruples <span class="m"><i>F</i><sub>D</sub></span>, so the acceleration keeps changing until terminal speed.` },
    { wrong: `Assuming a heavier object of the same shape has the same terminal speed.`, fix: `<span class="m"><i>v</i><sub>T</sub> ∝ √<i>m</i></span> for quadratic drag at fixed <span class="m"><i>C</i></span>, <span class="m"><i>A</i></span>. A heavier body needs a larger drag, so a larger speed, to balance its weight.` },
    { wrong: `Using the diameter, or the surface area, for <span class="m"><i>A</i></span>.`, fix: `<span class="m"><i>A</i></span> is the cross-sectional area facing the flow, <span class="m">π<i>r</i><sup>2</sup></span> for a sphere.` }
  ],
  practice: [
    { q: `A skydiver falls at 50.0 % of her terminal speed (quadratic drag). What fraction of her weight is the drag force, and what is her downward acceleration?`, a: `<span class="m"><i>F</i><sub>D</sub> ∝ <i>v</i><sup>2</sup></span>, so at half speed drag is <span class="m">(0.500)<sup>2</sup> = 0.250</span> of the weight. Net force <span class="m">0.750<i>mg</i></span>, so <span class="m"><i>a</i> = 0.750<i>g</i> = 7.35 m/s²</span> downward, whatever her mass.` },
    { q: `A car with <span class="m"><i>C</i> = 0.300</span> and frontal area 2.20 m² drives at 30.0 m/s through air of density 1.21 kg/m³. Find the drag force, and the drag at 15.0 m/s.`, a: `<span class="m"><i>F</i><sub>D</sub> = ½(0.300)(1.21)(2.20)(30.0)<sup>2</sup> = 359 N</span>. Halving the speed divides drag by 4: <span class="m">359/4 = 89.8 N</span>.` },
    { q: `A 0.200 kg bead sinks through a viscous liquid with linear drag, <span class="m"><i>b</i> = 0.500 kg/s</span> (ignore buoyancy). Find its terminal speed and its speed 1.00 s after release from rest.`, a: `<span class="m"><i>v</i><sub>T</sub> = <i>mg</i>/<i>b</i> = (0.200)(9.80)/0.500 = 3.92 m/s</span>, <span class="m"><i>τ</i> = <i>m</i>/<i>b</i> = 0.400 s</span>. <span class="m"><i>v</i>(1.00 s) = 3.92(1 − <i>e</i><sup>−2.50</sup>) = 3.60 m/s</span>.` },
    { q: `For the bead in the previous problem, separate variables in <span class="m"><i>m</i> d<i>v</i>/d<i>t</i> = <i>mg</i> − <i>bv</i></span> to derive <span class="m"><i>v</i>(<i>t</i>)</span>, then find when it reaches 99.0 % of terminal speed.`, a: `<span class="m">∫<sub>0</sub><sup><i>v</i></sup> d<i>v</i>′/(<i>v</i><sub>T</sub> − <i>v</i>′) = ∫<sub>0</sub><sup><i>t</i></sup> d<i>t</i>′/<i>τ</i></span> gives <span class="m">−ln(1 − <i>v</i>/<i>v</i><sub>T</sub>) = <i>t</i>/<i>τ</i></span>, so <span class="m"><i>v</i> = <i>v</i><sub>T</sub>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>)</span>. For 99.0 %: <span class="m"><i>t</i> = <i>τ</i> ln 100 = (0.400 s)(4.605) = 1.84 s</span>.` }
  ],
  origin: `Newton analysed motion against resistances proportional to <span class="m"><i>v</i></span> and to <span class="m"><i>v</i><sup>2</sup></span> in Book II of the <i>Principia</i> (1687). George Gabriel Stokes derived the linear law <span class="m"><i>F</i> = 6π<i>η</i><i>r</i><i>v</i></span> for a small sphere in a viscous fluid in 1851.`
};
