window.ARITH = window.ARITH || {};

ARITH["mech-friction"] = {
  title: "Friction",
  short: "Static friction up to μsN, kinetic friction μkN",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · applications of Newton's laws",
  hero: `<span class="m">0 ≤ <span class="c4"><i>f</i><sub>s</sub></span> ≤ <span class="c1"><i>μ</i><sub>s</sub><i>N</i></span> &nbsp;&nbsp; <span class="c3"><i>f</i><sub>k</sub></span> = <i>μ</i><sub>k</sub><i>N</i></span>`,
  lede: `Friction opposes sliding between surfaces. While nothing slips, <span class="c4">static friction</span> matches the <span class="c2">applied force</span> up to a <span class="c1">maximum</span>; once sliding starts, <span class="c3">kinetic friction</span> takes over at a fixed, smaller value.`,
  plain: `<p>Push gently on a heavy box and it does not move. The floor pushes back sideways with exactly as much force as you apply. That is <b>static friction</b>, and it adjusts: push with 50 N and it gives 50 N; push with 100 N and it gives 100 N. But it has a limit. Push past that limit and the box breaks free.</p>
<p>Once the box slides, the friction is <b>kinetic friction</b>. It is roughly constant, whatever the speed, and usually smaller than the static limit. That is why a box is hardest to get started and easier to keep going, and why a stuck drawer suddenly lurches open.</p>
<p>Both kinds of friction are proportional to how hard the surfaces are pressed together, the normal force <span class="m"><i>N</i></span>. The constants of proportionality, the <b>coefficients of friction</b> <span class="m"><i>μ</i><sub>s</sub></span> and <span class="m"><i>μ</i><sub>k</sub></span>, depend on the two materials: rubber on dry concrete grips well (<span class="m"><i>μ</i><sub>s</sub> ≈ 1.0</span>), Teflon on steel hardly at all (<span class="m">≈ 0.04</span>). To a good approximation friction does not depend on the contact area.</p>`,
  formal: `<p>For two dry surfaces in contact with normal force <span class="m"><i>N</i></span>, the friction force acts parallel to the surfaces and opposes relative motion (or the relative motion that would occur without it).</p>
<div class="display"><b>static</b> (no slipping): &nbsp; 0 ≤ <span class="c4"><i>f</i><sub>s</sub></span> ≤ <span class="c1"><i>f</i><sub>s</sub><sup>max</sup> = <i>μ</i><sub>s</sub><i>N</i></span>, &nbsp; <span class="c4"><i>f</i><sub>s</sub></span> set by Σ<b>F</b> = <i>m</i><b>a</b><br><b>kinetic</b> (sliding): &nbsp; <span class="c3"><i>f</i><sub>k</sub></span> = <i>μ</i><sub>k</sub><i>N</i>, &nbsp; directed opposite the velocity relative to the surface<br><span class="dim">usually</span> 0 &lt; <i>μ</i><sub>k</sub> &lt; <i>μ</i><sub>s</sub></div>
<p>These are empirical laws (Amontons–Coulomb friction), accurate to a few percent for many dry surfaces. The coefficients are dimensionless and nearly independent of apparent contact area and, for kinetic friction, of speed over a wide range.</p>
<p>On an incline of angle θ with no other forces along it, a block stays at rest while <span class="m">tan θ ≤ <i>μ</i><sub>s</sub></span>; the <b>angle of repose</b> is <span class="m">θ<sub>max</sub> = tan<sup>−1</sup> <i>μ</i><sub>s</sub></span>. A block slides at constant velocity when <span class="m">tan θ = <i>μ</i><sub>k</sub></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>F</i><sub>app</sub>`, name: "Applied force", desc: "The pull or push parallel to the surface that tries to make the block slide." },
    { c: "c4", sym: `<i>f</i><sub>s</sub>`, name: "Static friction", desc: "Whatever force is needed to prevent slipping, from zero up to the threshold. It matches the applied force while the block is at rest." },
    { c: "c1", sym: `<i>μ</i><sub>s</sub><i>N</i>`, name: "Threshold", desc: "The largest static friction the surfaces can supply. Exceed it and the block starts to slide." },
    { c: "c3", sym: `<i>f</i><sub>k</sub> = <i>μ</i><sub>k</sub><i>N</i>`, name: "Kinetic friction", desc: "The nearly constant friction while sliding, opposite the velocity. Usually smaller than the static threshold." }
  ],
  steps: { title: "How to solve a friction problem", items: [
    `Draw the free-body diagram and find the <b>normal force</b> from the perpendicular equation. It is not always <span class="m"><i>mg</i></span>: an angled pull or an incline changes it.`,
    `Decide whether the surfaces are sliding. If not, assume static friction and find the <span class="c4"><i>f</i><sub>s</sub></span> needed for equilibrium (or the given acceleration).`,
    `Compare with the <span class="c1">threshold</span>: if <span class="m"><i>f</i><sub>s</sub> ≤ <i>μ</i><sub>s</sub><i>N</i></span> the assumption holds; if not, the object slides.`,
    `If sliding, use <span class="m"><span class="c3"><i>f</i><sub>k</sub></span> = <i>μ</i><sub>k</sub><i>N</i></span> opposite the velocity and solve <span class="m">Σ<i>F</i> = <i>ma</i></span> along the surface.`,
    `Check signs: friction must oppose the (attempted) sliding, and a kinetic friction force alone can slow an object to rest but never reverse it.`
  ] },
  example: {
    prompt: `A 30.0 kg wooden crate rests on a wooden floor (<span class="m"><i>μ</i><sub>s</sub> = 0.500</span>, <span class="m"><i>μ</i><sub>k</sub> = 0.300</span>). A worker pushes horizontally with 120 N, then with 160 N. Find the friction force and the crate's acceleration in each case.`,
    lines: [
      { math: `<span class="m"><i>N</i> = <i>mg</i> = (30.0 kg)(9.80 m/s²) = 294 N</span>`, note: "Level floor, horizontal push, no vertical acceleration." },
      { math: `<span class="m"><span class="c1"><i>μ</i><sub>s</sub><i>N</i></span> = (0.500)(294 N) = <span class="c1">147 N</span></span>`, note: "The largest static friction the floor can supply." },
      { math: `<span class="m">120 N &lt; 147 N &nbsp;⇒&nbsp; <span class="c4"><i>f</i><sub>s</sub> = 120 N</span>, <i>a</i> = 0</span>`, note: "Below the threshold: static friction exactly cancels the push and the crate stays put." },
      { math: `<span class="m">160 N &gt; 147 N &nbsp;⇒&nbsp; sliding, <span class="c3"><i>f</i><sub>k</sub></span> = (0.300)(294 N) = <span class="c3">88.2 N</span></span>`, note: "Above the threshold: the crate breaks free and kinetic friction applies." },
      { math: `<span class="m"><i>a</i> = <span class="fr"><span>160 N − 88.2 N</span><span>30.0 kg</span></span> = 2.39 m/s²</span>`, note: "Second law along the floor with the kinetic friction." },
      { math: `<span class="m">2.39 m/s² &lt; <i>g</i></span>`, note: "Sanity check: a modest fraction of g, and friction only reduced the acceleration, never reversed it." }
    ],
    answer: `At 120 N the crate stays at rest with <span class="m c4">120 N</span> of static friction. At 160 N it slides with <span class="m c3">88.2 N</span> of kinetic friction and accelerates at <span class="m">2.39 m/s²</span>.`
  },
  why: `<p>Friction is what lets you walk, drive, hold a pen and tie a knot, and it is also what wears out engines and wastes energy. Road safety depends on it: a car's braking distance, the fastest safe speed on a curve and the steepest drivable hill are all set by the tyre–road coefficients. Engineers work to increase friction in brakes, tyres and shoe soles and to reduce it in bearings, gears and joints.</p>
<p>Static friction is the textbook example of a force that adjusts itself up to a limit. Learning to test "does it slip?" before choosing a formula is a habit that carries over to every constrained system in mechanics.</p>`,
  careers: [
    { role: "Accident reconstructionist", use: "Estimates a car's speed from skid-mark length using v² = 2μk g d with a measured tyre–road coefficient." },
    { role: "Tyre engineer", use: "Designs tread compounds for high μ on wet roads and measures μ against slip on test rigs." },
    { role: "Brake engineer", use: "Chooses pad materials by their kinetic friction coefficient and how it holds up as the pads heat." },
    { role: "Geotechnical engineer", use: "Checks slope stability using friction angles of soil, the same tan θ = μ idea as the angle of repose." },
    { role: "Tribologist", use: "Measures and reduces friction and wear in bearings and engines with lubricants and coatings." },
    { role: "Occupational safety specialist", use: "Specifies floor surfaces by their slip-resistance coefficient to prevent falls in workplaces." }
  ],
  life: [
    "Braking on wet or icy roads, where lower μ means much longer stopping distances",
    "Getting a heavy piece of furniture moving and noticing it is easier once it slides",
    "Choosing shoes with grippy soles for hiking or a polished floor",
    "Spreading sand or grit on an icy path to raise the coefficient of friction",
    "Seeing how steep a pile of sand or gravel can be before it slides"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Brakes, clutches, belts, bolted joints and bearings are designed around friction coefficients." },
    { name: "Civil and geotechnical engineering", use: "Retaining walls, slopes and foundations rely on friction between soil particles and against structures." },
    { name: "Transportation safety", use: "Stopping distances and curve speed limits come from tyre–road friction." },
    { name: "Materials science (tribology)", use: "Friction, lubrication and wear of surfaces are studied to extend the life of machines." }
  ],
  prereqWhy: {
    "mech-common-forces": "Both static and kinetic friction are proportional to the normal force, so finding N correctly, including on inclines and with angled pulls, comes first."
  },
  unlocksWhy: {
    "mech-newton-apps": "Blocks on rough inclines and connected objects on rough tables add μN friction terms to each body's second-law equation.",
    "mech-drag": "Drag is the fluid counterpart of kinetic friction, a resistive force opposite the velocity, but one that grows with speed instead of staying constant."
  },
  mathWhy: {
    "a1-compound": `Static friction obeys the compound inequality <span class="m">0 ≤ <i>f</i><sub>s</sub> ≤ <i>μ</i><sub>s</sub><i>N</i></span>; deciding whether a push is in that interval tells you if the object slips.`,
    "g-trig-ratios": `An angled pull changes the normal force to <span class="m"><i>N</i> = <i>mg</i> − <i>F</i> sin θ</span>, and on a ramp <span class="m"><i>N</i> = <i>mg</i> cos θ</span>, giving the angle of repose <span class="m">tan θ = <i>μ</i><sub>s</sub></span>.`
  },
  beyond: [
    { field: "Dynamics", why: "Sliding and rolling contact, braking and slip in machines are modelled with Coulomb friction in the equations of motion." },
    { field: "Thermodynamics", why: "Work done against kinetic friction becomes internal energy, the standard example of an irreversible process." },
    { field: "Mechanical Engineering", why: "Clutches, brakes, belt drives and threaded fasteners are all sized with friction coefficients." },
    { field: "Condensed Matter Physics", why: "Nanotribology explains friction from atomic-scale contact, adhesion and surface roughness." }
  ],
  mistakes: [
    { wrong: `Setting static friction equal to <span class="m"><i>μ</i><sub>s</sub><i>N</i></span> whenever an object is at rest.`, fix: `<span class="m"><i>μ</i><sub>s</sub><i>N</i></span> is the maximum. A crate pushed with 120 N when the limit is 147 N feels exactly 120 N of static friction.` },
    { wrong: `Using <span class="m"><i>N</i> = <i>mg</i></span> when pulling at an angle.`, fix: `An upward-tilted pull lifts part of the weight: <span class="m"><i>N</i> = <i>mg</i> − <i>F</i> sin θ</span>. A downward push adds to it.` },
    { wrong: `Letting kinetic friction push an object backward after it stops.`, fix: `Kinetic friction only acts while sliding. At rest, switch back to static friction and test the threshold.` },
    { wrong: `Believing a wider tyre or bigger contact area gives proportionally more friction.`, fix: `In the Amontons–Coulomb model friction depends on <span class="m"><i>μ</i></span> and <span class="m"><i>N</i></span>, not on the apparent contact area.` }
  ],
  practice: [
    { q: `A 5.00 kg block rests on a level surface with <span class="m"><i>μ</i><sub>s</sub> = 0.400</span>. How large is the friction force when you push horizontally with (a) 0 N and (b) 10.0 N?`, a: `The threshold is <span class="m">(0.400)(5.00)(9.80) = 19.6 N</span>. (a) With no push there is no tendency to slide, so <span class="m"><i>f</i><sub>s</sub> = 0</span>. (b) 10.0 N is below 19.6 N, so the block stays at rest and <span class="m"><i>f</i><sub>s</sub> = 10.0 N</span>.` },
    { q: `A car moving at 25.0 m/s locks its wheels and skids to a stop on dry concrete (<span class="m"><i>μ</i><sub>k</sub> = 0.700</span>). Find the deceleration and the skid distance.`, a: `<span class="m"><i>a</i> = <i>μ</i><sub>k</sub><i>g</i> = (0.700)(9.80) = 6.86 m/s²</span> (mass cancels). <span class="m"><i>d</i> = <i>v</i><sup>2</sup>/(2<i>a</i>) = 625/13.72 = 45.6 m</span>.` },
    { q: `A 25.0 kg sled is pulled across snow by a rope at 30.0° above the horizontal with a tension of 80.0 N (<span class="m"><i>μ</i><sub>k</sub> = 0.150</span>). Find the normal force and the acceleration.`, a: `<span class="m"><i>N</i> = <i>mg</i> − <i>T</i> sin 30.0° = 245 − 40.0 = 205 N</span>; <span class="m"><i>f</i><sub>k</sub> = (0.150)(205) = 30.8 N</span>. <span class="m"><i>a</i> = (80.0 cos 30.0° − 30.8)/25.0 = (69.3 − 30.8)/25.0 = 1.54 m/s²</span>.` },
    { q: `A block on an adjustable ramp starts to slip when the ramp is raised to 31.0°. Once moving, it slides at constant speed when the ramp is lowered to 22.0°. Find <span class="m"><i>μ</i><sub>s</sub></span> and <span class="m"><i>μ</i><sub>k</sub></span>. Why does mass not matter?`, a: `At the slip point <span class="m"><i>mg</i> sin θ = <i>μ</i><sub>s</sub><i>mg</i> cos θ</span>, so <span class="m"><i>μ</i><sub>s</sub> = tan 31.0° = 0.601</span>. At constant speed <span class="m"><i>μ</i><sub>k</sub> = tan 22.0° = 0.404</span>. Both the driving force and the friction are proportional to <span class="m"><i>m</i></span>, so it cancels.` }
  ],
  origin: `Leonardo da Vinci recorded the main friction laws in his notebooks around 1500 but did not publish them. Guillaume Amontons rediscovered them in 1699, and Charles-Augustin de Coulomb extended them in 1781, distinguishing static from kinetic friction.`
};
