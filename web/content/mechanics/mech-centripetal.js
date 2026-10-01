window.ARITH = window.ARITH || {};

ARITH["mech-centripetal"] = {
  title: "Centripetal Force & Circular Dynamics",
  short: "The net inward force that keeps a body on a curve",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · applications of Newton's laws",
  hero: `<span class="m"><span class="c1">Σ<i>F</i><sub>r</sub></span> = <i>m</i><span class="fr"><span><span class="c2"><i>v</i></span><sup>2</sup></span><span><i>r</i></span></span> &nbsp;&nbsp; tan θ = <span class="fr"><span><span class="c2"><i>v</i></span><sup>2</sup></span><span><i>rg</i></span></span></span>`,
  lede: `To move in a circle a body needs a <span class="c1">net force pointing toward the centre</span> of size <span class="m"><i>mv</i><sup>2</sup>/<i>r</i></span>. It is not a new kind of force: <span class="c3">friction</span>, the <span class="c4">normal force</span>, tension or gravity has to supply it.`,
  plain: `<p>A car rounding a curve at steady speed is still accelerating, because its direction keeps changing. That acceleration points toward the centre of the curve and has size <span class="m"><i>v</i><sup>2</sup>/<i>r</i></span>. By the second law something must push the car inward with a net force <span class="m"><i>mv</i><sup>2</sup>/<i>r</i></span>. On a flat road that something is sideways static friction between tyres and road.</p>
<p>Friction has a limit, so there is a top speed for every flat curve: <span class="m"><i>v</i><sub>max</sub> = √(<i>μ</i><sub>s</sub><i>gr</i>)</span>. Go faster and the tyres slip and the car slides toward the outside of the curve, in a nearly straight line. Nothing "throws" it outward; the road simply stops pulling it in hard enough.</p>
<p>Tilting the road helps. On a <b>banked</b> curve the normal force leans toward the centre, so part of it does the turning. At one special speed, set by <span class="m">tan θ = <i>v</i><sup>2</sup>/(<i>rg</i>)</span>, the normal force does all of it and the car needs no friction at all, even on ice. The same idea explains a ball on a string (tension supplies the force), a roller coaster in a loop (normal force plus gravity), and the Moon going around Earth (gravity).</p>`,
  formal: `<p>For a particle in circular motion of radius <span class="m"><i>r</i></span> at speed <span class="m"><i>v</i></span>, the radial (centripetal) component of acceleration is <span class="m"><i>a</i><sub>c</sub> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i></span>, toward the centre. Newton's second law along the inward radial direction gives</p>
<div class="display"><span class="c1">Σ<i>F</i><sub>r</sub></span> = <i>m</i><span class="fr"><span><i>v</i><sup>2</sup></span><span><i>r</i></span></span> = <i>mω</i><sup>2</sup><i>r</i>, &nbsp;&nbsp; Σ<i>F</i><sub>t</sub> = <i>m</i><span class="fr"><span>d<i>v</i></span><span>d<i>t</i></span></span> <span class="dim">(tangential, nonuniform motion)</span></div>
<p><span class="m">Σ<i>F</i><sub>r</sub></span> is called the <b>centripetal force</b>; it is the net inward component of real forces, never an extra force in the free-body diagram. Standard cases for a car of mass <span class="m"><i>m</i></span> on a curve of radius <span class="m"><i>r</i></span>:</p>
<div class="display">flat curve: &nbsp; <span class="c3"><i>f</i><sub>s</sub></span> = <i>m</i><span class="fr"><span><i>v</i><sup>2</sup></span><span><i>r</i></span></span> ≤ <i>μ</i><sub>s</sub><i>mg</i> &nbsp;⇒&nbsp; <i>v</i><sub>max</sub> = √<span style="text-decoration:overline"><i>μ</i><sub>s</sub><i>gr</i></span><br>banked at θ, no friction: &nbsp; <span class="c4"><i>N</i></span> sin θ = <i>m</i><span class="fr"><span><i>v</i><sup>2</sup></span><span><i>r</i></span></span>, &nbsp; <span class="c4"><i>N</i></span> cos θ = <i>mg</i> &nbsp;⇒&nbsp; tan θ = <span class="fr"><span><i>v</i><sup>2</sup></span><span><i>rg</i></span></span><br>banked with friction, maximum speed: &nbsp; <i>v</i><sub>max</sub><sup>2</sup> = <i>rg</i> <span class="fr"><span>sin θ + <i>μ</i><sub>s</sub> cos θ</span><span>cos θ − <i>μ</i><sub>s</sub> sin θ</span></span></div>
<p>In a vertical circle the radial equation holds at every point; at the top of a loop <span class="m"><i>N</i> + <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i></span>, so contact requires <span class="m"><i>v</i> ≥ √(<i>gr</i>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `Σ<i>F</i><sub>r</sub> = <i>mv</i><sup>2</sup>/<i>r</i>`, name: "Net inward force", desc: "The total component of all real forces toward the centre. It must equal mv²/r for the body to follow the circle." },
    { c: "c2", sym: `<b>v</b>`, name: "Velocity", desc: "Tangent to the circle. Its direction keeps changing, which is why an inward force is needed even at constant speed." },
    { c: "c3", sym: `<i>f</i><sub>s</sub>`, name: "Friction", desc: "Sideways static friction on the tyres. It supplies whatever inward (or outward) force the normal force does not, up to μsN." },
    { c: "c4", sym: `<i>N</i>`, name: "Normal force", desc: "Perpendicular to the road. On a banked curve it tilts toward the centre and supplies part or all of the inward force." }
  ],
  steps: { title: "How to solve a circular-dynamics problem", items: [
    `Find the centre of the circle and the radius. Take one axis pointing toward the centre (radial) and one perpendicular to the plane of the circle, usually vertical.`,
    `Draw the real forces only: weight, <span class="c4">normal</span>, <span class="c3">friction</span>, tension, gravity. Do not add a "centripetal" or "centrifugal" force.`,
    `Radial equation: sum of force components toward the centre <span class="m">= <i>mv</i><sup>2</sup>/<i>r</i></span>.`,
    `Vertical equation: <span class="m">Σ<i>F</i><sub>y</sub> = 0</span> for a horizontal circle (or the tangential equation for nonuniform motion).`,
    `Solve for the unknown. For friction, check <span class="m">|<i>f</i><sub>s</sub>| ≤ <i>μ</i><sub>s</sub><i>N</i></span>; for tension or normal force, check it is not negative.`,
    `Sanity check with limits: at <span class="m"><i>v</i> = 0</span> no inward force is needed; the required force grows as <span class="m"><i>v</i><sup>2</sup></span>.`
  ] },
  example: {
    prompt: `A 1.20 × 10<sup>3</sup> kg car takes a flat curve of radius 50.0 m. The tyre–road coefficient of static friction is 0.800. How much friction does the car need at 15.0 m/s, and what is the fastest it can take the curve?`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>f</i><sub>s</sub></span> = <i>m</i><span class="fr"><span><span class="c2"><i>v</i></span><sup>2</sup></span><span><i>r</i></span></span> = (1.20 × 10<sup>3</sup> kg) <span class="fr"><span>(15.0 m/s)<sup>2</sup></span><span>50.0 m</span></span> = <span class="c1">5.40 × 10<sup>3</sup> N</span></span>`, note: "On a flat road friction is the only horizontal force, so it is the whole centripetal force." },
      { math: `<span class="m"><span class="c4"><i>N</i></span> = <i>mg</i> = 1.176 × 10<sup>4</sup> N, &nbsp; <i>μ</i><sub>s</sub><i>N</i> = 9.41 × 10<sup>3</sup> N</span>`, note: "Vertical balance gives N; the grip limit is μs N." },
      { math: `<span class="m">5.40 × 10<sup>3</sup> N &lt; 9.41 × 10<sup>3</sup> N</span>`, note: "At 15.0 m/s the tyres hold with room to spare." },
      { math: `<span class="m"><i>μ</i><sub>s</sub><i>mg</i> = <i>m</i><span class="fr"><span><i>v</i><sub>max</sub><sup>2</sup></span><span><i>r</i></span></span> &nbsp;⇒&nbsp; <i>v</i><sub>max</sub> = √<span style="text-decoration:overline"><i>μ</i><sub>s</sub><i>gr</i></span></span>`, note: "At top speed static friction is at its maximum. Mass cancels." },
      { math: `<span class="m"><i>v</i><sub>max</sub> = √<span style="text-decoration:overline">(0.800)(9.80 m/s²)(50.0 m)</span> = 19.8 m/s</span>`, note: "That is about 71 km/h." },
      { math: `<span class="m">(19.8/15.0)<sup>2</sup> ≈ 1.74 ≈ 9.41/5.40</span>`, note: "Check: the needed friction scales as v², matching the ratio of the grip limit to the friction used." }
    ],
    answer: `At 15.0 m/s the car needs <span class="m c1">5.40 × 10<sup>3</sup> N</span> of inward friction, well under the 9.41 × 10³ N available; the maximum safe speed is <span class="m">19.8 m/s</span> (about 71 km/h).`
  },
  why: `<p>Every curved path needs an inward force, so this is where Newton's laws meet road design, amusement rides, centrifuges, satellites and planets. Highway engineers bank curves and post speed limits from these equations; roller-coaster designers shape loops so riders are pressed into their seats at the top; centrifuges separate blood and uranium isotopes because different parts need different inward forces.</p>
<p>The idea that "centripetal force" is only a label for a net force, supplied by gravity, tension, friction or a normal force, is the key step toward orbital motion. Setting gravity equal to <span class="m"><i>mv</i><sup>2</sup>/<i>r</i></span> gives orbital speeds, periods and Kepler's third law.</p>`,
  careers: [
    { role: "Highway engineer", use: "Sets curve radius, superelevation (bank angle) and speed limits so the needed side friction stays well below the tyre–road limit." },
    { role: "Roller-coaster designer", use: "Shapes loops and hills so riders' normal forces stay within safe g-limits, using N = m(v²/r ∓ g)." },
    { role: "Aerospace engineer", use: "Computes the bank angle and load factor of an aircraft in a level turn from tan θ = v²/(rg)." },
    { role: "Biomedical lab technician", use: "Runs centrifuges at a chosen relative centrifugal force, ω²r/g, to separate blood components." },
    { role: "Race engineer", use: "Estimates cornering speeds from tyre grip and track banking at circuits and ovals." },
    { role: "Railway engineer", use: "Chooses track cant (superelevation) on curves so that at the design speed the normal force from the rails supplies most of the inward force, keeping side loads on wheels and rails small." }
  ],
  life: [
    "Slowing down for a tight bend, especially when the road is wet",
    "Feeling pressed sideways against a car door on a sharp turn",
    "Swinging a bucket of water overhead without spilling it",
    "Noticing that race tracks and velodromes are steeply banked",
    "Spin cycles in washing machines throwing water out of clothes"
  ],
  fields: [
    { name: "Civil and transportation engineering", use: "Road and rail curves are designed with banking and radii from the centripetal-force equations." },
    { name: "Aerospace engineering", use: "Turn rates, load factors and orbital speeds come from ΣF = mv²/r." },
    { name: "Astronomy", use: "Orbital speeds of moons, planets and stars in galaxies are found by setting gravity equal to mv²/r." },
    { name: "Biomedical and chemical engineering", use: "Centrifuges and cyclones separate materials using large centripetal accelerations." }
  ],
  prereqWhy: {
    "mech-common-forces": "The inward force is supplied by a normal force, tension or friction, so you must be able to find each and resolve it along the radius.",
    "mech-circular": "The centripetal acceleration v²/r = ω²r comes from the kinematics of circular motion; this topic adds the forces that produce it."
  },
  unlocksWhy: {
    "mech-gravitation": "Setting the gravitational force GMm/r² equal to mv²/r gives orbital speeds and periods, and leads to Kepler's third law."
  },
  mathWhy: {
    "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `On a banked curve the normal force splits into <span class="m"><i>N</i> sin θ</span> (inward) and <span class="m"><i>N</i> cos θ</span> (up); dividing the two equations gives <span class="m">tan θ = <i>v</i><sup>2</sup>/(<i>rg</i>)</span>.`,
    "a1-radicals": `Speeds come out as square roots, such as <span class="m"><i>v</i><sub>max</sub> = √(<i>μ</i><sub>s</sub><i>gr</i>)</span> and <span class="m"><i>v</i><sub>min</sub> = √(<i>gr</i>)</span> at the top of a loop, and simplifying and estimating them is a radical skill.`
  },
  beyond: [
    { field: "Astrophysics & Cosmology", why: "Rotation curves of galaxies, found by setting gravity equal to mv²/r, are key evidence for dark matter." },
    { field: "Classical Mechanics", why: "Rotating reference frames introduce centrifugal and Coriolis terms, which only make sense once the inertial centripetal picture is clear." },
    { field: "Electricity & Magnetism", why: "A charge in a magnetic field moves in a circle where qvB = mv²/r, the basis of cyclotrons and mass spectrometers." },
    { field: "Civil Engineering", why: "Highway and railway curve design uses superelevation and side-friction factors derived from these equations." }
  ],
  mistakes: [
    { wrong: `Adding a separate "centripetal force" arrow to the free-body diagram.`, fix: `Draw only real forces. The centripetal force is their net inward component, <span class="m">Σ<i>F</i><sub>r</sub> = <i>mv</i><sup>2</sup>/<i>r</i></span>.` },
    { wrong: `Saying a centrifugal force throws a skidding car outward.`, fix: `In the inertial frame no outward force acts. The car keeps going nearly straight because friction can no longer supply <span class="m"><i>mv</i><sup>2</sup>/<i>r</i></span>.` },
    { wrong: `Using the diameter for <span class="m"><i>r</i></span>, or <span class="m"><i>v</i></span> instead of <span class="m"><i>v</i><sup>2</sup></span>.`, fix: `Use the radius of the path, and remember the required force grows as the square of the speed: double the speed needs four times the force.` },
    { wrong: `On a banked curve, writing <span class="m"><i>N</i> = <i>mg</i> cos θ</span> as on an incline.`, fix: `Here the acceleration is horizontal, not along the slope. Vertical balance gives <span class="m"><i>N</i> cos θ = <i>mg</i></span>, so <span class="m"><i>N</i> = <i>mg</i>/cos θ</span>, larger than <span class="m"><i>mg</i></span>.` }
  ],
  practice: [
    { q: `A 0.250 kg puck on a frictionless table is tied to a pin by a 1.20 m string and moves in a circle at 4.00 m/s. Find the tension in the string.`, a: `Tension is the only horizontal force: <span class="m"><i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> = (0.250)(4.00)<sup>2</sup>/1.20 = 3.33 N</span>, toward the pin.` },
    { q: `At what angle should a curve of radius 120 m be banked so that cars at 25.0 m/s need no friction?`, a: `<span class="m">tan θ = <i>v</i><sup>2</sup>/(<i>rg</i>) = 625/((120)(9.80)) = 0.531</span>, so <span class="m">θ = 28.0°</span>. The answer is independent of the car's mass.` },
    { q: `A roller-coaster car goes over the top of a vertical loop of radius 10.0 m, upside down. What is the minimum speed at the top? At 14.0 m/s, what force does the seat exert on a 60.0 kg rider there?`, a: `At the top both <span class="m"><i>N</i></span> and <span class="m"><i>mg</i></span> point down (toward the centre): <span class="m"><i>N</i> + <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i></span>. <span class="m"><i>N</i> ≥ 0</span> gives <span class="m"><i>v</i><sub>min</sub> = √((9.80)(10.0)) = 9.90 m/s</span>. At 14.0 m/s: <span class="m"><i>N</i> = 60.0(19.6 − 9.80) = 588 N</span>, equal to the rider's weight.` },
    { q: `A curve of radius 100 m is banked at 15.0°, and <span class="m"><i>μ</i><sub>s</sub> = 0.500</span>. What is the maximum speed before a car slides up and out?`, a: `At maximum speed friction points down the slope: <span class="m"><i>v</i><sup>2</sup> = <i>rg</i>(sin θ + <i>μ</i><sub>s</sub> cos θ)/(cos θ − <i>μ</i><sub>s</sub> sin θ) = 980(0.2588 + 0.4830)/(0.9659 − 0.1294) = 869 m²/s²</span>, so <span class="m"><i>v</i><sub>max</sub> = 29.5 m/s</span> (about 106 km/h, versus 22.1 m/s on the same curve if it were flat).` }
  ],
  origin: `Christiaan Huygens derived the magnitude of the outward tendency in circular motion, proportional to v²/r, in <i>De Vi Centrifuga</i> (written 1659, published 1703). Newton coined the term "centripetal force" (vis centripeta) in his tract <i>De motu corporum in gyrum</i> (1684) and used it in the <i>Principia</i> (1687) to explain planetary orbits.`
};
