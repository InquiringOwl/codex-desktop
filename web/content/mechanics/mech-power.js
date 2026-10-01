window.ARITH = window.ARITH || {};

ARITH["mech-power"] = {
  title: "Power",
  short: "How fast work is done: watts, kW and horsepower",
  grade: "College PHYS 1xx · University Physics I",
  hours: 3,
  voice: "plain",
  eyebrow: "Mechanics · work and kinetic energy",
  hero: `<span class="m"><span class="c1"><i>P</i></span> = <span class="fr"><span>d<span class="c2"><i>W</i></span></span><span>d<span class="c3"><i>t</i></span></span></span> &nbsp;&nbsp; <span class="c1"><i>P</i></span> = <b>F</b> · <b>v</b></span>`,
  lede: `<span class="c1">Power</span> is the rate of doing <span class="c2">work</span>: joules per second, or watts. The same job done in less <span class="c3">time</span> takes more power. For a force on a moving body, power is force times velocity.`,
  plain: `<p>Walking up a flight of stairs and running up it take the same work: you lift the same body through the same height. Running feels harder because you do that work in less time. <b>Power</b> measures how fast work gets done. It is work divided by time, and its unit, the <b>watt</b>, is one joule per second.</p>
<p>A motor's power rating tells you how quickly it can deliver energy. A 1 kW hoist and a 10 kW hoist can lift the same load to the same height, but the bigger one does it ten times faster. Car and engine power is often quoted in <b>horsepower</b>; one horsepower is 746 W.</p>
<p>When a force pushes something that is already moving, the power is the force times the speed (the part of the force along the motion). A car cruising at constant speed has to push against drag and rolling resistance, so its engine must supply that force times its speed, all the time. Double the speed with the same force and you need double the power.</p>`,
  formal: `<p><b>Average power</b> over an interval and <b>instantaneous power</b> are</p>
<div class="display"><span class="c1"><i>P</i></span><sub>ave</sub> = <span class="fr"><span>Δ<span class="c2"><i>W</i></span></span><span>Δ<span class="c3"><i>t</i></span></span></span> &nbsp;&nbsp;&nbsp; <span class="c1"><i>P</i></span> = <span class="fr"><span>d<span class="c2"><i>W</i></span></span><span>d<span class="c3"><i>t</i></span></span></span> &nbsp;&nbsp;<span class="dim">(1 W = 1 J/s = 1 kg·m²/s³; 1 hp = 746 W)</span></div>
<p>For a force <span class="m"><b>F</b></span> acting on a particle with velocity <span class="m"><b>v</b></span>, <span class="m">d<i>W</i> = <b>F</b> · d<b>r</b></span> and <span class="m">d<b>r</b> = <b>v</b> d<i>t</i></span>, so</p>
<div class="display"><span class="c1"><i>P</i></span> = <b>F</b> · <b>v</b> = <i>F</i><i>v</i> cos θ</div>
<p>By the work–energy theorem the net power delivered to a particle is the rate of change of its kinetic energy, <span class="m"><i>P</i><sub>net</sub> = d<i>K</i>/d<i>t</i></span>. The work done over an interval is <span class="m"><i>W</i> = ∫ <i>P</i> d<i>t</i></span>, so energy can also be expressed as power × time, for example <span class="m">1 kW·h = 3.60 × 10<sup>6</sup> J</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>W</i>`, name: "Work", desc: "Energy transferred by the force, in joules, for example mgh to lift a load." },
    { c: "c3", sym: `<i>t</i>`, name: "Time", desc: "How long the transfer takes, in seconds. Less time for the same work means more power." },
    { c: "c1", sym: `<i>P</i>`, name: "Power", desc: "Rate of doing work, in watts (J/s). Also P = Fv for a force along the velocity. 1 hp = 746 W." }
  ],
  steps: { title: "How to find power", items: [
    `Decide which force's power you want (motor, engine, person) and whether you need the average over an interval or the value at an instant.`,
    `Average power: compute the <span class="c2">work</span> done by that force, often <span class="m"><i>mgh</i></span> or <span class="m">Δ<i>K</i></span> plus losses, and divide by the <span class="c3">time</span>.`,
    `Instantaneous power: find the force and the velocity at that instant and use <span class="m"><i>P</i> = <b>F</b> · <b>v</b> = <i>Fv</i> cos θ</span>. At constant velocity the driving force equals the total resisting force.`,
    `If the work is given as a function of time, differentiate: <span class="m"><i>P</i> = d<i>W</i>/d<i>t</i></span>.`,
    `Convert units as needed (1 kW = 1000 W, 1 hp = 746 W) and check the size against familiar values: a person sustains about 100 W, a car engine delivers tens of kilowatts.`
  ] },
  example: {
    prompt: `A loaded elevator car has a mass of 1.20 × 10<sup>3</sup> kg (no counterweight). It rises 30.0 m at a constant 2.50 m/s, and friction in the guide rails opposes it with 400 N. What power must the motor deliver, in kilowatts and horsepower?`,
    lines: [
      { math: `<span class="m"><i>T</i> = <i>mg</i> + <i>f</i> = (1.20 × 10<sup>3</sup> kg)(9.80 m/s²) + 400 N = 1.216 × 10<sup>4</sup> N</span>`, note: "Constant velocity means zero net force, so the cable force balances weight plus friction." },
      { math: `<span class="m"><span class="c1"><i>P</i></span> = <i>T</i><i>v</i> = (1.216 × 10<sup>4</sup> N)(2.50 m/s) = <span class="c1">3.04 × 10<sup>4</sup> W</span></span>`, note: "Force and velocity both point up, so P = Fv cos 0°." },
      { math: `<span class="m"><span class="c3"><i>t</i></span> = <span class="fr"><span>30.0 m</span><span>2.50 m/s</span></span> = <span class="c3">12.0 s</span>, &nbsp; <span class="c2"><i>W</i></span> = <i>T</i><i>h</i> = (1.216 × 10<sup>4</sup> N)(30.0 m) = <span class="c2">3.65 × 10<sup>5</sup> J</span></span>`, note: "Second route: the work done by the cable and the time it takes." },
      { math: `<span class="m"><span class="c1"><i>P</i></span> = <span class="fr"><span><span class="c2">3.648 × 10<sup>5</sup> J</span></span><span><span class="c3">12.0 s</span></span></span> = <span class="c1">3.04 × 10<sup>4</sup> W</span></span>`, note: "W/t agrees with Fv, as it must at constant speed." },
      { math: `<span class="m">3.04 × 10<sup>4</sup> W = 30.4 kW = <span class="fr"><span>3.04 × 10<sup>4</sup> W</span><span>746 W/hp</span></span> = 40.8 hp</span>`, note: "Unit conversions." },
      { math: `<span class="m"><i>P</i> ∝ <i>v</i></span>`, note: "Sanity check: a few tens of kilowatts is typical for a passenger elevator motor; halving the speed would halve the power but double the trip time." }
    ],
    answer: `The motor must deliver <span class="m c1">30.4 kW</span>, about <span class="m">40.8 hp</span>, while the car rises.`
  },
  why: `<p>Energy says whether a job can be done; power says how fast. Every motor, engine, battery, power plant and muscle has a power limit, so power sets how quickly a car accelerates, how fast an elevator climbs, how much a data centre's cooling must remove each second, and what your electricity bill charges (kilowatt-hours are power times time).</p>
<p>The form <span class="m"><i>P</i> = <b>F</b> · <b>v</b></span> explains why vehicles need so much more power at high speed: drag grows like <span class="m"><i>v</i><sup>2</sup></span>, so the power to overcome it grows like <span class="m"><i>v</i><sup>3</sup></span>.</p>`,
  careers: [
    { role: "Electrical power engineer", use: "Sizes generators, transformers and grid lines by peak power demand in kilowatts and megawatts." },
    { role: "Automotive engineer", use: "Computes the engine power needed to hold a speed as (drag + rolling resistance) × v, and power-to-weight for acceleration." },
    { role: "Elevator engineer", use: "Specifies motor ratings from load × g × rated speed plus friction and efficiency losses." },
    { role: "Exercise physiologist", use: "Measures an athlete's power output in watts on a cycle ergometer or from stair-climb tests." },
    { role: "Energy auditor", use: "Converts appliance power ratings and running hours into kilowatt-hours and cost." },
    { role: "Wind-turbine engineer", use: "Rates turbines by the power they extract, which grows with the cube of wind speed." }
  ],
  life: [
    "Reading watt ratings on a kettle, microwave or light bulb",
    "Paying an electricity bill charged per kilowatt-hour",
    "Comparing cars by horsepower or kilowatts",
    "Feeling the difference between walking and sprinting up stairs",
    "Seeing a cyclist's power meter display in watts"
  ],
  fields: [
    { name: "Electrical engineering", use: "Power ratings, P = IV, and energy use in kWh run through every circuit and grid design." },
    { name: "Mechanical engineering", use: "Engines, pumps and motors are specified and compared by power output and efficiency." },
    { name: "Exercise science", use: "Sustained and peak power output in watts are core measures of athletic performance." },
    { name: "Energy policy and economics", use: "Generation capacity is quoted in megawatts and consumption in kilowatt-hours." }
  ],
  prereqWhy: {
    "mech-work": "Power is the rate of doing work, so you must be able to compute the work done by a force, W = Fd cos θ or an integral, before dividing by time."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-literal": `Rearranging <span class="m"><i>P</i> = <i>W</i>/<i>t</i></span> and <span class="m"><i>P</i> = <i>Fv</i></span> to find the time a motor needs, the speed it can sustain, or the force it can supply.`,
    "calculus-1:Definition of the derivative": `Instantaneous power is the derivative <span class="m"><i>P</i> = d<i>W</i>/d<i>t</i></span>, the limit of <span class="m">Δ<i>W</i>/Δ<i>t</i></span>, and it leads to <span class="m"><i>P</i> = <b>F</b> · <b>v</b></span>. Co-requisite: average power needs only division.`
  },
  beyond: [
    { field: "Electricity & Magnetism", why: "Electrical power P = IV = I²R is the same rate-of-energy idea, and it links mechanical and electrical engineering." },
    { field: "Thermodynamics", why: "Heat engines are rated by power output and efficiency, the ratio of useful power to input heat rate." },
    { field: "Waves & Fluids", why: "Waves carry energy at a rate (power) and intensity is power per area; pumps deliver power as pressure × volume flow rate." },
    { field: "Mechanical Engineering", why: "Drivetrains, pumps and turbines are sized by power, with P = τω for rotating shafts." }
  ],
  mistakes: [
    { wrong: `Treating the kilowatt-hour as a unit of power.`, fix: `A kW·h is power × time, an <i>energy</i>: <span class="m">1 kW·h = (1000 W)(3600 s) = 3.60 × 10<sup>6</sup> J</span>.` },
    { wrong: `Thinking a stronger motor does more work to lift the same load the same height.`, fix: `The work <span class="m"><i>mgh</i></span> is the same; more power just does it in less time.` },
    { wrong: `Using average power <span class="m"><i>W</i>/<i>t</i></span> as the power at a particular instant when the speed is changing.`, fix: `The instantaneous power is <span class="m"><i>Fv</i></span> at that moment. For steady acceleration from rest it rises linearly, and the average is only half the final value.` },
    { wrong: `Confusing the symbol W for work with the unit W for watts.`, fix: `Work <span class="m"><i>W</i></span> (italic) is measured in joules; power is measured in watts (upright W).` }
  ],
  practice: [
    { q: `A 70.0 kg person runs up stairs that rise 4.00 m in 5.00 s. What is the average power of the lift, in watts and horsepower?`, a: `<span class="m"><i>W</i> = <i>mgh</i> = (70.0)(9.80)(4.00) = 2744 J</span>; <span class="m"><i>P</i> = 2744/5.00 = 549 W = 0.736 hp</span>.` },
    { q: `A car cruises at a constant 30.0 m/s while air drag and rolling resistance total 600 N. What power do the drive wheels deliver?`, a: `Constant speed, so the driving force is 600 N. <span class="m"><i>P</i> = <i>Fv</i> = (600)(30.0) = 1.80 × 10<sup>4</sup> W = 18.0 kW = 24.1 hp</span>.` },
    { q: `A 60.0 W lamp is left on for 24.0 h. How much energy does it use, in kilowatt-hours and in joules?`, a: `<span class="m">(0.0600 kW)(24.0 h) = 1.44 kW·h</span>, and <span class="m">(60.0 W)(24.0 × 3600 s) = 5.18 × 10<sup>6</sup> J</span>.` },
    { q: `A 1.50 × 10<sup>3</sup> kg car accelerates from rest at a constant 2.00 m/s² (ignore resistance). Find the power delivered at <span class="m"><i>t</i> = 5.00 s</span> and the average power over the first 5.00 s. Why do they differ?`, a: `<span class="m"><i>F</i> = <i>ma</i> = 3.00 × 10<sup>3</sup> N</span>, <span class="m"><i>v</i> = <i>at</i> = 10.0 m/s</span>, so <span class="m"><i>P</i> = <i>Fv</i> = 3.00 × 10<sup>4</sup> W</span>. Average: <span class="m">Δ<i>K</i>/Δ<i>t</i> = ½(1500)(10.0)<sup>2</sup>/5.00 = 1.50 × 10<sup>4</sup> W</span>. With constant force, <span class="m"><i>P</i> = <i>Fat</i></span> grows linearly from 0, so the average is half the final value.` }
  ],
  origin: `James Watt introduced the horsepower in the early 1780s to compare his steam engines with the draught horses they replaced, rating a horse at 33,000 foot-pounds per minute (about 746 W). The watt was adopted as the unit of power by the British Association in 1882 and became the SI unit in 1960.`
};
