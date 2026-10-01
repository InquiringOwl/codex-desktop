window.ARITH = window.ARITH || {};

ARITH["mech-center-mass"] = {
  title: "Center of Mass",
  short: "The mass-weighted average position of a system",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · systems of particles",
  hero: `<span class="m"><span class="c1"><b>r</b><sub>CM</sub></span> = <span class="fr"><span>Σ <span class="c2"><i>m</i><sub>j</sub></span> <span class="c3"><b>r</b><sub>j</sub></span></span><span><i>M</i></span></span> &nbsp;&nbsp; <i>M</i><b>a</b><sub>CM</sub> = <b>F</b><sub>ext</sub></span>`,
  lede: `The <span class="c1">center of mass</span> is the average position of a system's mass, with each piece weighted by how much mass it has. However the parts spin and tumble, this one point moves as if all the mass were there and every external force acted on it.`,
  plain: `<p>Balance a ruler on one finger. There is exactly one spot where it stays level: the middle. Tape a coin to one end and the balance spot shifts toward the coin. That spot is the <b>center of mass</b>. It is an average of where the mass is, but a weighted average: heavier pieces pull it toward themselves.</p>
<p>For a few separate masses, multiply each mass by its position, add up, and divide by the total mass. Two equal masses put it halfway between them. A heavy mass and a light one put it much closer to the heavy one. For a solid object you do the same thing with tiny slices, which turns the sum into an integral. For a uniform, symmetric object it sits at the geometric centre, and it need not be inside the material at all: the center of mass of a ring is in the empty middle.</p>
<p>The payoff is in motion. Throw a wrench spinning through the air and every point on it traces a wobbly path, except the center of mass, which follows a clean parabola like a thrown ball. The <span class="c1">center of mass</span> moves as if the whole system were one particle feeling only the external forces.</p>`,
  formal: `<p>For a system of particles with masses <span class="m c2"><i>m</i><sub>j</sub></span> at positions <span class="m c3"><b>r</b><sub>j</sub></span> and total mass <span class="m"><i>M</i> = Σ<i>m</i><sub>j</sub></span>, and for a continuous body with mass element d<i>m</i>:</p>
<div class="display"><span class="c1"><b>r</b><sub>CM</sub></span> = <span class="fr"><span>1</span><span><i>M</i></span></span> Σ<sub><i>j</i></sub> <span class="c2"><i>m</i><sub>j</sub></span><span class="c3"><b>r</b><sub>j</sub></span> &nbsp;&nbsp;&nbsp; <span class="c1"><b>r</b><sub>CM</sub></span> = <span class="fr"><span>1</span><span><i>M</i></span></span> ∫ <b>r</b> d<i>m</i> &nbsp;&nbsp;<span class="dim">(rod: d<i>m</i> = λ(<i>x</i>) d<i>x</i>)</span><br><b>v</b><sub>CM</sub> = <span class="fr"><span>d<b>r</b><sub>CM</sub></span><span>d<i>t</i></span></span> = <span class="fr"><span><b>P</b></span><span><i>M</i></span></span> &nbsp;&nbsp;&nbsp; <i>M</i><b>a</b><sub>CM</sub> = <b>F</b><sub>ext</sub></div>
<p>Each component is a separate weighted average, e.g. <span class="m"><i>x</i><sub>CM</sub> = Σ<i>m</i><sub>j</sub><i>x</i><sub>j</sub>/<i>M</i></span>. Internal forces cancel in pairs, so only external forces accelerate the center of mass; if <span class="m"><b>F</b><sub>ext</sub> = 0</span> it moves at constant velocity, which is conservation of momentum restated. For a body of uniform density the center of mass lies on every symmetry axis. In a uniform gravitational field it coincides with the <b>center of gravity</b>, the point where the total weight may be taken to act.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i><sub>j</sub>`, name: "Masses", desc: "The mass of each particle or piece, in kg. They are the weights in the weighted average." },
    { c: "c3", sym: `<b>r</b><sub>j</sub>`, name: "Position vectors", desc: "Where each mass is, measured from a chosen origin. The origin is arbitrary; the center of mass lands at the same physical point." },
    { c: "c1", sym: `<b>r</b><sub>CM</sub>`, name: "Center of mass", desc: "The mass-weighted average position Σm<sub>j</sub><b>r</b><sub>j</sub>/M. It moves as a single particle of mass M acted on by the net external force." }
  ],
  steps: { title: "How to find a center of mass", items: [
    `Choose an origin and axes. Put the origin on a mass or on a symmetry axis to save work.`,
    `List each <span class="c2">mass</span> with the coordinates of its <span class="c3">position</span> (for an extended piece, the coordinates of its own center of mass).`,
    `Compute <span class="m"><i>x</i><sub>CM</sub> = Σ<i>m</i><sub>j</sub><i>x</i><sub>j</sub>/<i>M</i></span> and likewise for <span class="m"><i>y</i></span> and <span class="m"><i>z</i></span>.`,
    `For a continuous body, write <span class="m">d<i>m</i></span> in terms of a coordinate (for a rod, <span class="m">d<i>m</i> = λ d<i>x</i></span>), find <span class="m"><i>M</i> = ∫d<i>m</i></span>, then <span class="m"><i>x</i><sub>CM</sub> = ∫<i>x</i> d<i>m</i>/<i>M</i></span>.`,
    `Check: the <span class="c1">center of mass</span> lies within the span of the masses, closer to the heavier ones, and on any symmetry axis.`
  ] },
  example: {
    prompt: `The Moon (<span class="m">7.35 × 10<sup>22</sup> kg</span>) and Earth (<span class="m">5.97 × 10<sup>24</sup> kg</span>) orbit their common center of mass, the barycenter. Their centers are <span class="m">3.84 × 10<sup>8</sup> m</span> apart. Where is the barycenter, measured from Earth's center? Is it inside Earth (<span class="m"><i>R</i> = 6.37 × 10<sup>6</sup> m</span>)?`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>x</i><sub>E</sub></span> = 0, &nbsp; <span class="c3"><i>x</i><sub>M</sub></span> = 3.84 × 10<sup>8</sup> m</span>`, note: "Put the origin at Earth's center and the x-axis toward the Moon. Treat each body as a point at its own center." },
      { math: `<span class="m"><i>M</i> = 5.97 × 10<sup>24</sup> + 0.0735 × 10<sup>24</sup> = 6.04 × 10<sup>24</sup> kg</span>`, note: "Total mass of the system." },
      { math: `<span class="m"><span class="c1"><i>x</i><sub>CM</sub></span> = <span class="fr"><span>(<span class="c2">5.97 × 10<sup>24</sup></span>)(0) + (<span class="c2">7.35 × 10<sup>22</sup></span>)(3.84 × 10<sup>8</sup>)</span><span>6.04 × 10<sup>24</sup></span></span> m</span>`, note: "The weighted average; Earth's term vanishes because it sits at the origin." },
      { math: `<span class="m"><span class="c1"><i>x</i><sub>CM</sub></span> = <span class="c1">4.67 × 10<sup>6</sup> m</span></span>`, note: "About 1.2 % of the way to the Moon, because Earth has about 81 times the Moon's mass." },
      { math: `<span class="m"><i>R</i> − <i>x</i><sub>CM</sub> = 6.37 × 10<sup>6</sup> − 4.67 × 10<sup>6</sup> = 1.70 × 10<sup>6</sup> m</span>`, note: "Sanity check: it lies inside Earth, about 1700 km below the surface, and on the line joining the two centers." }
    ],
    answer: `The barycenter is <span class="m c1">4.67 × 10<sup>6</sup> m</span> from Earth's center toward the Moon, inside Earth, about <span class="m">1.70 × 10<sup>6</sup> m</span> below the surface. Earth wobbles around this point once a month.`
  },
  why: `<p>The center of mass turns a messy system into one particle. A diver twisting through the air, a tumbling satellite and an exploding firework all have a center of mass that obeys <span class="m"><i>M</i><b>a</b><sub>CM</sub> = <b>F</b><sub>ext</sub></span>, so you can predict where the system goes before worrying about how its parts move around that point. The rest of the motion is rotation about the center of mass, which the next topics handle.</p>
<p>It also decides balance and stability. A body resting on a base tips over when its center of gravity moves outside that base, which is why trucks have load limits on their height, why cranes carry counterweights and why you lean forward when you carry a heavy backpack.</p>`,
  careers: [
    { role: "Aircraft load planner", use: "Computes the airplane's center of gravity from the masses and positions of passengers, cargo and fuel and keeps it inside the certified range before every flight." },
    { role: "Naval architect", use: "Locates a ship's center of gravity relative to its center of buoyancy to check that it will right itself when it rolls." },
    { role: "Automotive engineer", use: "Keeps a vehicle's center of mass low and centred to reduce rollover risk and balance braking and cornering loads." },
    { role: "Astronomer", use: "Detects exoplanets from the small wobble of a star around the star–planet barycenter, measured by Doppler shifts." },
    { role: "Crane operator", use: "Sets counterweights and checks load charts so the combined center of gravity stays over the crane's base." },
    { role: "Biomechanist", use: "Tracks the body's center of mass from segment masses and positions to study balance, gait and jumping." }
  ],
  life: [
    "Balancing a broom upright on your palm by moving your hand under it",
    "Leaning forward under a heavy backpack so you do not tip over",
    "Loading heavy items low in a car or truck",
    "Stacking books so the top ones can overhang the edge of a table",
    "Carrying a long ladder by gripping it near its middle"
  ],
  fields: [
    { name: "Aerospace engineering", use: "Weight-and-balance calculations and rocket stability depend on where the center of mass is." },
    { name: "Naval architecture", use: "Ship stability is judged from the positions of the centers of gravity and buoyancy." },
    { name: "Astronomy", use: "Binary stars and planetary systems orbit their barycenter; its wobble reveals unseen companions." },
    { name: "Kinesiology", use: "Human balance and movement are analysed through the body's center of mass over its base of support." }
  ],
  prereqWhy: {
    "mech-momentum-cons": "The total momentum of a system equals M times the center-of-mass velocity, so conservation of momentum means the center of mass of an isolated system moves at constant velocity."
  },
  unlocksWhy: {
    "mech-equilibrium": "In static equilibrium a body's weight acts at its center of gravity, which fixes the weight's torque about any pivot and decides whether it tips."
  },
  mathWhy: {
    "averages": `The center of mass is a weighted mean: <span class="m"><i>x</i><sub>CM</sub> = Σ<i>m</i><sub>j</sub><i>x</i><sub>j</sub>/Σ<i>m</i><sub>j</sub></span>, the same calculation as a weighted grade average with masses as the weights.`,
    "calculus-2:Area, volume, arc length, work": `For rods, plates and solids the sums become integrals, <span class="m"><i>x</i><sub>CM</sub> = ∫<i>x</i> d<i>m</i>/∫d<i>m</i></span>, set up by slicing the body into thin pieces as in area and volume problems. This is a co-requisite: point masses and symmetric bodies need only the weighted mean.`
  },
  beyond: [
    { field: "Statics", why: "Centroids and centers of gravity of beams, plates and composite shapes set where distributed loads act." },
    { field: "Dynamics", why: "Rigid-body motion is split into translation of the center of mass plus rotation about it, the basis of every multibody model." },
    { field: "Astrophysics & Cosmology", why: "Orbits of binaries and star–planet systems are described about their barycenter, and its wobble is a main exoplanet detection method." },
    { field: "Aerospace Engineering", why: "Aircraft and rocket stability require the center of mass to stay ahead of the center of pressure." }
  ],
  mistakes: [
    { wrong: `Taking the plain average of positions, ignoring the masses.`, fix: `Weight each position by its mass: <span class="m"><i>x</i><sub>CM</sub> = Σ<i>m</i><sub>j</sub><i>x</i><sub>j</sub>/Σ<i>m</i><sub>j</sub></span>. Only equal masses give the ordinary average.` },
    { wrong: `Dividing by the number of masses instead of the total mass.`, fix: `The denominator is <span class="m"><i>M</i> = Σ<i>m</i><sub>j</sub></span> in kg, so the result has units of length.` },
    { wrong: `Assuming the center of mass must be inside the material.`, fix: `For a ring, a horseshoe or a boomerang it lies in empty space. It is a point defined by averaging, not a piece of the object.` },
    { wrong: `Thinking an explosion changes the path of the center of mass.`, fix: `The explosion forces are internal. The center of mass keeps following the same parabola (until a piece hits the ground and an external force acts).` }
  ],
  practice: [
    { q: `Masses of 2.00 kg, 3.00 kg and 5.00 kg sit on the x-axis at <span class="m">0</span>, <span class="m">4.00 m</span> and <span class="m">6.00 m</span>. Find the center of mass.`, a: `<span class="m"><i>x</i><sub>CM</sub> = (2.00·0 + 3.00·4.00 + 5.00·6.00)/10.0 = 42.0/10.0 = 4.20 m</span>.` },
    { q: `Find the center of mass of three particles: 1.00 kg at <span class="m">(0, 0)</span>, 2.00 kg at <span class="m">(3.00, 0)</span> and 3.00 kg at <span class="m">(0, 4.00)</span>, coordinates in metres.`, a: `<span class="m"><i>M</i> = 6.00 kg</span>. <span class="m"><i>x</i><sub>CM</sub> = (2.00)(3.00)/6.00 = 1.00 m</span>, <span class="m"><i>y</i><sub>CM</sub> = (3.00)(4.00)/6.00 = 2.00 m</span>. The center of mass is at <span class="m">(1.00 m, 2.00 m)</span>.` },
    { q: `A 2.00 m rod lies along the x-axis from <span class="m">0</span> to <span class="m">2.00 m</span> with linear density <span class="m">λ(<i>x</i>) = (3.00 kg/m²)<i>x</i></span>. Find its mass and center of mass.`, a: `<span class="m"><i>M</i> = ∫<sub>0</sub><sup>2</sup> 3<i>x</i> d<i>x</i> = 6.00 kg</span>. <span class="m">∫<sub>0</sub><sup>2</sup> <i>x</i>·3<i>x</i> d<i>x</i> = [<i>x</i><sup>3</sup>]<sub>0</sub><sup>2</sup> = 8.00 kg·m</span>, so <span class="m"><i>x</i><sub>CM</sub> = 8.00/6.00 = 1.33 m</span>, past the midpoint toward the denser end.` },
    { q: `A shell is fired at 50.0 m/s at 60.0° above level ground. At the top of its path it explodes into two equal pieces. One piece drops straight down from rest and lands directly below the explosion. Ignoring air resistance, where does the other piece land?`, a: `The center of mass keeps its parabola and would land at <span class="m"><i>R</i> = <i>v</i><sup>2</sup> sin 2θ/<i>g</i> = (50.0)<sup>2</sup> sin 120°/9.80 = 221 m</span>. The first piece lands at <span class="m"><i>R</i>/2 = 110.5 m</span>. Both pieces land at the same time, so <span class="m">(110.5 + <i>x</i>)/2 = 220.9</span> gives <span class="m"><i>x</i> = 331 m</span>.` }
  ],
  origin: `Archimedes (3rd century BCE) found centers of gravity of triangles, parabolic segments and other figures in <i>On the Equilibrium of Planes</i>. Newton proved in the <i>Principia</i> (1687, Corollary IV) that the common center of gravity of interacting bodies is either at rest or moves uniformly in a straight line.`
};
