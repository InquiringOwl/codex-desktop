window.ARITH = window.ARITH || {};

ARITH["mech-rolling"] = {
  title: "Rolling Motion",
  short: "Wheels, balls and cylinders that roll without slipping",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · rotation",
  hero: `<span class="m"><span class="c1"><i>v</i><sub>cm</sub></span> = <i>R</i>ω &nbsp;&nbsp; <i>K</i> = <span class="c2">½<i>Mv</i><sub>cm</sub><sup>2</sup></span> + <span class="c3">½<i>I</i><sub>cm</sub>ω<sup>2</sup></span></span>`,
  lede: `A body that rolls without slipping both moves and spins, locked together by <span class="m"><i>v</i><sub>cm</sub> = <i>R</i>ω</span>. Its kinetic energy splits into a <span class="c2">translational</span> part and a <span class="c3">rotational</span> part, and that split decides how <span class="c1">fast</span> it rolls.`,
  plain: `<p>Watch a bicycle wheel roll along the road. The hub moves forward at the bike's speed, and the wheel also spins. If the tyre does not skid, the distance the hub travels equals the length of tyre that has touched the road, so one turn of a wheel of radius <span class="m"><i>R</i></span> moves it forward <span class="m">2π<i>R</i></span>. That gives the rolling condition <span class="m"><i>v</i><sub>cm</sub> = <i>R</i>ω</span>.</p>
<p>A surprising result follows: the point of the tyre touching the road is momentarily at rest. The spin carries it backward at <span class="m"><i>R</i>ω</span> while the hub carries it forward at <span class="m"><i>v</i><sub>cm</sub></span>, and the two cancel. The top of the wheel moves at twice the hub's speed.</p>
<p>Now roll a hoop, a solid disk and a ball down the same ramp. Gravity gives each the same energy per kilogram, but some of that energy must go into spinning. A hoop has all its mass at the rim, so half its energy goes into spin and it rolls slowly. A solid ball keeps most of its mass near the axis and puts only 2/7 of its energy into spin, so it wins. Mass and size do not matter, only the shape.</p>`,
  formal: `<p><b>Rolling without slipping</b> means the contact point has zero velocity relative to the surface. For a round body of radius <span class="m"><i>R</i></span>:</p>
<div class="display"><span class="c1"><i>v</i><sub>cm</sub></span> = <i>R</i>ω, &nbsp; <i>a</i><sub>cm</sub> = <i>R</i>α, &nbsp; <i>d</i><sub>cm</sub> = <i>R</i>θ<br><i>K</i> = <span class="c2">½<i>Mv</i><sub>cm</sub><sup>2</sup></span> + <span class="c3">½<i>I</i><sub>cm</sub>ω<sup>2</sup></span> = ½<i>M</i>(1 + β)<i>v</i><sub>cm</sub><sup>2</sup>, &nbsp; <span class="c4"><i>I</i><sub>cm</sub> = β<i>MR</i><sup>2</sup></span></div>
<p>Here β = 1 for a thin hoop, ½ for a solid disk or cylinder, ⅔ for a thin spherical shell and ⅖ for a solid sphere. The velocity of any point P of the body is <span class="m"><b>v</b><sub>P</sub> = <b>v</b><sub>cm</sub> + <b>ω</b> × <b>r</b><sub>P</sub></span>, which is zero at the contact point and <span class="m">2<b>v</b><sub>cm</sub></span> at the top.</p>
<p>On an incline of angle θ, Newton's laws for translation and rotation (<span class="m"><i>Mg</i> sin θ − <i>f</i><sub>s</sub> = <i>Ma</i><sub>cm</sub></span>, <span class="m"><i>f</i><sub>s</sub><i>R</i> = <i>I</i><sub>cm</sub>α</span>) give</p>
<div class="display"><i>a</i><sub>cm</sub> = <span class="fr"><span><i>g</i> sin θ</span><span>1 + β</span></span>, &nbsp; <i>f</i><sub>s</sub> = <span class="fr"><span>β</span><span>1 + β</span></span><i>Mg</i> sin θ, &nbsp; rolls without slipping only if &nbsp;μ<sub>s</sub> ≥ <span class="fr"><span>β tan θ</span><span>1 + β</span></span><br>from rest down a height <i>h</i>: &nbsp; <span class="c1"><i>v</i><sub>cm</sub></span> = √<span style="text-decoration:overline"><span class="fr"><span>2<i>gh</i></span><span>1 + β</span></span></span></div>
<p>Static friction acts at a point with zero velocity, so it does no work: mechanical energy is conserved in rolling without slipping, and <span class="m"><i>Mgh</i> = <i>K</i><sub>trans</sub> + <i>K</i><sub>rot</sub></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>v</i><sub>cm</sub> = <i>R</i>ω`, name: "Rolling speed", desc: "Speed of the centre of mass in m/s. Rolling without slipping ties it to the spin rate ω and the radius R." },
    { c: "c2", sym: `½<i>Mv</i><sub>cm</sub><sup>2</sup>`, name: "Translational KE", desc: "Energy of the whole mass moving along with the centre of mass, in joules." },
    { c: "c3", sym: `½<i>I</i><sub>cm</sub>ω<sup>2</sup>`, name: "Rotational KE", desc: "Energy of spinning about the centre of mass. It is the share that slows a rolling body compared with a sliding one." },
    { c: "c4", sym: `<i>I</i><sub>cm</sub> = β<i>MR</i><sup>2</sup>`, name: "Shape factor β", desc: "How far the mass sits from the axis: 1 for a hoop, ½ for a disk, ⅔ for a hollow ball, ⅖ for a solid ball." }
  ],
  steps: { title: "How to solve a rolling problem", items: [
    `Check that the body rolls without slipping, then write the constraint <span class="m"><i>v</i><sub>cm</sub> = <i>R</i>ω</span> (and <span class="m"><i>a</i><sub>cm</sub> = <i>R</i>α</span>).`,
    `Look up <span class="m"><i>I</i><sub>cm</sub></span> for the shape and write it as <span class="m">β<i>MR</i><sup>2</sup></span>.`,
    `For speeds, use energy: <span class="m"><i>Mgh</i> = ½<i>M</i>(1 + β)<i>v</i><sub>cm</sub><sup>2</sup></span>. Static friction does no work.`,
    `For accelerations or the friction force, write <span class="m">Σ<i>F</i> = <i>Ma</i><sub>cm</sub></span> and <span class="m">Στ = <i>I</i><sub>cm</sub>α</span>, substitute <span class="m">α = <i>a</i><sub>cm</sub>/<i>R</i></span>, and solve the pair.`,
    `Check that the required friction does not exceed <span class="m">μ<sub>s</sub><i>N</i></span>; if it does, the body slips and kinetic friction takes over.`,
    `Sanity check: a rolling body is always slower than a frictionless sliding block, <span class="m"><i>v</i> &lt; √<span style="text-decoration:overline">2<i>gh</i></span></span>.`
  ] },
  example: {
    prompt: `A 7.00 kg bowling ball of radius 0.109 m (a solid sphere, <span class="m"><i>I</i><sub>cm</sub> = ⅖<i>MR</i><sup>2</sup></span>) starts from rest and rolls without slipping down a ramp that drops 0.800 m. Find its speed and spin rate at the bottom and how its kinetic energy is shared.`,
    lines: [
      { math: `<span class="m"><i>Mgh</i> = <span class="c2">½<i>Mv</i><sup>2</sup></span> + <span class="c3">½<i>I</i><sub>cm</sub>ω<sup>2</sup></span></span>`, note: "Energy is conserved: static friction at the contact point does no work." },
      { math: `<span class="m"><span class="c3">½(⅖<i>MR</i><sup>2</sup>)(<i>v</i>/<i>R</i>)<sup>2</sup></span> = ⅕<i>Mv</i><sup>2</sup> &nbsp;⇒&nbsp; <i>Mgh</i> = <span class="fr"><span>7</span><span>10</span></span><i>Mv</i><sup>2</sup></span>`, note: "Substitute ω = v/R. Mass and radius cancel." },
      { math: `<span class="m"><span class="c1"><i>v</i></span> = √<span style="text-decoration:overline">10<i>gh</i>/7</span> = √<span style="text-decoration:overline">10(9.80 m/s²)(0.800 m)/7</span> = <span class="c1">3.35 m/s</span></span>`, note: "Speed of the centre of mass at the bottom." },
      { math: `<span class="m">ω = <i>v</i>/<i>R</i> = (3.347 m/s)/(0.109 m) = 30.7 rad/s</span>`, note: "About 4.9 revolutions per second." },
      { math: `<span class="m"><i>Mgh</i> = (7.00 kg)(9.80 m/s²)(0.800 m) = 54.9 J</span>`, note: "Total kinetic energy at the bottom." },
      { math: `<span class="m"><span class="c2"><i>K</i><sub>trans</sub></span> = <span class="fr"><span>5</span><span>7</span></span>(54.9 J) = <span class="c2">39.2 J</span>, &nbsp; <span class="c3"><i>K</i><sub>rot</sub></span> = <span class="fr"><span>2</span><span>7</span></span>(54.9 J) = <span class="c3">15.7 J</span></span>`, note: "The ratio K_rot : K_trans is β = 2/5, so 2/7 of the energy is spin." },
      { math: `<span class="m">3.35 m/s &lt; √<span style="text-decoration:overline">2<i>gh</i></span> = 3.96 m/s</span>`, note: "Sanity check: slower than a frictionless sliding block, as it must be." }
    ],
    answer: `The ball reaches <span class="m c1">3.35 m/s</span> spinning at 30.7 rad/s, with <span class="m c2">39.2 J</span> of translational and <span class="m c3">15.7 J</span> of rotational kinetic energy.`
  },
  why: `<p>Almost everything that moves on land rolls: wheels, bearings, balls, tyres, rollers on conveyors. The rolling condition explains why a wheel's contact patch does not scrub the road, why tyres grip through static friction rather than kinetic, and why a car's braking and traction are limited by <span class="m">μ<sub>s</sub></span>. The energy split explains why heavy flywheel-like wheels make a vehicle slower to accelerate than its mass alone suggests.</p>
<p>Rolling is also the first place where translation and rotation are solved together, with a constraint linking them. The same method (write both Newton equations, add the constraint, solve the system) handles yo-yos, spools, pulleys with slipping belts and the rigid-body dynamics of later courses.</p>`,
  careers: [
    { role: "Automotive engineer", use: "Adds the rotational inertia of wheels, axles and drivetrain to the vehicle mass as an 'equivalent mass' when predicting acceleration." },
    { role: "Tyre engineer", use: "Designs tread and rubber compounds so static friction at the contact patch can supply the forces needed for rolling, braking and cornering." },
    { role: "Bearing designer", use: "Sizes ball and roller bearings so the rolling elements roll without skidding, which keeps friction and wear low." },
    { role: "Sports equipment engineer", use: "Chooses the mass distribution of bowling balls and golf balls, which sets how their energy divides between spin and travel." },
    { role: "Railway engineer", use: "Uses the rolling condition to relate wheel rotation to train speed for odometry and to detect wheel slip under braking." },
    { role: "Robotics engineer", use: "Converts wheel encoder counts to distance with d = Rθ for wheeled robots and flags slip when the two disagree." }
  ],
  life: [
    "Seeing that the top of a bike wheel blurs in photos while the bottom looks sharp",
    "Noticing that a full can rolls down a slope differently from an empty one",
    "Knowing why car tyres grip best when they are not skidding",
    "Rolling a heavy drum or barrel instead of sliding it",
    "Reading a bicycle speedometer that counts wheel turns"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Gears, cams, bearings and wheels all rely on rolling contact and the v = Rω constraint." },
    { name: "Vehicle dynamics", use: "Traction, braking and wheel-slip control are analysed with the rolling constraint and friction limits." },
    { name: "Robotics", use: "Wheeled robot odometry and motion planning use rolling without slipping as a kinematic constraint." },
    { name: "Sports science", use: "Ball roll in golf, bowling and snooker depends on how kinetic energy divides between spin and translation." }
  ],
  prereqWhy: {
    "mech-rot-dynamics": "Rolling down an incline is solved by writing ΣF = Ma for the centre of mass and τ = Iα about it, then linking them with a = Rα.",
    "mech-energy-cons": "The speed of a rolling body comes from conserving mechanical energy, Mgh = ½Mv² + ½Iω², since static friction does no work."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-radicals": `The rolling speed <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>gh</i>/(1 + β)</span></span> is found by solving the energy equation for <span class="m"><i>v</i><sup>2</sup></span> and taking the principal square root, including simplifying radicals like <span class="m">√<span style="text-decoration:overline">10<i>gh</i>/7</span></span>.`,
    "a1-sys-sub": `On an incline the unknowns <span class="m"><i>a</i><sub>cm</sub></span> and <span class="m"><i>f</i><sub>s</sub></span> satisfy two equations, <span class="m"><i>Mg</i> sin θ − <i>f</i><sub>s</sub> = <i>Ma</i></span> and <span class="m"><i>f</i><sub>s</sub> = β<i>Ma</i></span>; substituting the second into the first gives <span class="m"><i>a</i> = <i>g</i> sin θ/(1 + β)</span>.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Rolling without slipping is the standard example of a constraint in Lagrangian mechanics, and rolling on curved surfaces leads to nonholonomic constraints." },
    { field: "Dynamics", why: "Engineering dynamics courses solve rolling wheels, gears and linkages with the same constraint v = Rω and combined force and moment equations." },
    { field: "Mechanical Engineering", why: "Rolling-element bearings, gear trains and cam followers are designed around rolling contact to keep friction and wear low." },
    { field: "Aerospace Engineering", why: "Aircraft landing gear and rover wheels are sized using the rolling constraint, spin-up friction at touchdown and traction limits." }
  ],
  mistakes: [
    { wrong: `Using only <span class="m">½<i>Mv</i><sup>2</sup></span> for a rolling ball, so <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>gh</i></span></span>.`, fix: `A rolling body also spins: <span class="m"><i>K</i> = ½<i>M</i>(1 + β)<i>v</i><sup>2</sup></span>, so <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>gh</i>/(1 + β)</span></span>, which is smaller.` },
    { wrong: `Subtracting the work of static friction from the energy, as for a sliding block.`, fix: `The contact point is instantaneously at rest, so static friction does no work in rolling without slipping. Energy is conserved.` },
    { wrong: `Saying heavier or bigger balls roll down faster.`, fix: `Mass and radius cancel. Only the shape factor β matters: every solid sphere rolls down a given ramp at the same rate.` },
    { wrong: `Setting the static friction force to <span class="m">μ<sub>s</sub><i>N</i></span>.`, fix: `<span class="m">μ<sub>s</sub><i>N</i></span> is the maximum. The actual friction is whatever rolling needs, <span class="m">β<i>Mg</i> sin θ/(1 + β)</span>, found from the equations.` }
  ],
  practice: [
    { q: `A hoop, a solid disk and a solid sphere are released together from rest at the top of the same incline and roll without slipping. In what order do they reach the bottom? Would a heavier sphere win against a lighter one?`, a: `<span class="m"><i>a</i> = <i>g</i> sin θ/(1 + β)</span> with β = ⅖, ½, 1. The <b>sphere</b> arrives first, then the <b>disk</b>, then the <b>hoop</b>. Mass and radius cancel, so two solid spheres tie whatever their masses.` },
    { q: `A car tyre of radius 0.300 m rolls without slipping at 15.0 m/s. Find its angular speed, and the speeds of the top of the tyre and of the point touching the road.`, a: `<span class="m">ω = <i>v</i>/<i>R</i> = 15.0/0.300 = 50.0 rad/s</span>. Top: <span class="m">2<i>v</i><sub>cm</sub> = 30.0 m/s</span> forward. Contact point: <span class="m">0</span> (instantaneously at rest).` },
    { q: `A solid cylinder rolls without slipping down a 30.0° incline. Find its acceleration and the smallest coefficient of static friction that allows rolling without slipping.`, a: `β = ½: <span class="m"><i>a</i> = <i>g</i> sin θ/(1 + ½) = ⅔(9.80)(0.500) = 3.27 m/s²</span>. <span class="m">μ<sub>s</sub> ≥ β tan θ/(1 + β) = ⅓ tan 30.0° = 0.192</span>.` },
    { q: `A thin spherical shell (<span class="m">β = ⅔</span>) rolls without slipping at 4.00 m/s onto the bottom of a 20.0° ramp. How far up the ramp does it roll? Compare with a block sliding up a frictionless ramp at the same speed.`, a: `<span class="m">½<i>M</i>(1 + ⅔)<i>v</i><sup>2</sup> = <i>Mgh</i></span>, so <span class="m"><i>h</i> = (5/3)(4.00)<sup>2</sup>/(2 · 9.80) = 1.36 m</span>, a distance <span class="m">1.36/sin 20.0° = 3.98 m</span> along the ramp. The block rises only <span class="m"><i>v</i><sup>2</sup>/(2<i>g</i>) = 0.816 m</span>: the shell's rotational energy also turns into height.` }
  ],
  origin: `Galileo timed balls rolling down inclined planes for <i>Two New Sciences</i> (1638) without allowing for their spin, which makes a rolling ball's acceleration 5/7 of a sliding block's. The equations for rigid bodies that both translate and rotate were set out by Leonhard Euler in <i>Theoria motus corporum solidorum seu rigidorum</i> (1765).`
};
