window.ARITH = window.ARITH || {};

ARITH["pa-slope"] = {
  title: "Slope as Rate of Change",
  short: "Rise over run: how fast y changes as x changes",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Linear relationships · steepness and rate",
  hero: `<span class="m"><span class="c1"><i>m</i></span> = <span class="fr"><span class="c3">rise</span><span class="c2">run</span></span> = <span class="fr"><span class="c3"><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span class="c2"><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></span>`,
  lede: `The <span class="m c1">slope</span> of a line is the vertical change, the <span class="m c3">rise</span>, divided by the horizontal change, the <span class="m c2">run</span>. In a real situation it is a rate: how much one quantity changes for each unit of the other.`,
  plain: `<p>Slope measures steepness. Pick two points on a line. Count how far you go up or down between them, the <b>rise</b>. Count how far you go across, the <b>run</b>. Slope is rise divided by run. A line that goes up 6 while going across 3 has slope <span class="m">6 ÷ 3 = 2</span>.</p>
<p>Going left to right, a line that goes uphill has a positive slope. A line that goes downhill has a negative slope. A flat, horizontal line has slope 0, because there is no rise. A vertical line has no slope at all: the run is 0, and you cannot divide by 0, so its slope is <b>undefined</b>.</p>
<p>In real life, slope is a rate. If a car's distance goes from 90 miles to 240 miles while time goes from 1.5 hours to 4 hours, the slope is <span class="m">150 ÷ 2.5 = 60</span> miles per hour. The units of slope are "units of y per unit of x".</p>`,
  formal: `<p>The <b>slope</b> of the line through two points <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span> with <span class="m"><i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub></span> is</p>
<div class="display"><span class="c1"><i>m</i></span> = <span class="fr"><span class="c3">Δ<i>y</i></span><span class="c2">Δ<i>x</i></span></span> = <span class="fr"><span class="c3"><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span class="c2"><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></div>
<p>The value does not depend on which two points of the line are chosen, or on their order, as long as both differences are taken in the same order. <span class="m"><i>m</i> &gt; 0</span>: the line rises from left to right; <span class="m"><i>m</i> &lt; 0</span>: it falls; <span class="m"><i>m</i> = 0</span>: it is horizontal. If <span class="m"><i>x</i><sub>1</sub> = <i>x</i><sub>2</sub></span> the line is vertical and its slope is <b>undefined</b>. When <span class="m"><i>y</i></span> depends on <span class="m"><i>x</i></span>, the slope is the constant <b>rate of change</b> of <span class="m"><i>y</i></span> with respect to <span class="m"><i>x</i></span>, in units of <span class="m"><i>y</i></span> per unit of <span class="m"><i>x</i></span>. For a proportional relationship <span class="m"><i>y</i> = <i>kx</i></span>, the slope is <span class="m"><i>k</i></span>.</p>`,
  legend: [
    { c: "c3", sym: `Δ<i>y</i>`, name: "Rise", desc: "The vertical change y₂ − y₁ between the two points. Negative when the second point is lower." },
    { c: "c2", sym: `Δ<i>x</i>`, name: "Run", desc: "The horizontal change x₂ − x₁ between the two points. It cannot be zero." },
    { c: "c1", sym: `<i>m</i>`, name: "Slope", desc: "Rise divided by run: the steepness of the line and the rate of change of y per unit of x." }
  ],
  steps: { title: "How to find slope from two points", items: [
    `Label the points <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span>.`,
    `Find the <span class="m c3">rise</span>: <span class="m"><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span>.`,
    `Find the <span class="m c2">run</span>: <span class="m"><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span>, subtracting in the same order.`,
    `Divide: <span class="m"><span class="c1"><i>m</i></span> = rise ÷ run</span>, and simplify the fraction. If the run is 0, the slope is undefined.`,
    `In an application, attach units (for example litres per minute) and say what the sign means: increasing or decreasing.`
  ] },
  example: {
    prompt: `A water tank is draining at a steady rate. Two minutes after the valve opens it holds 340 L. Seven minutes after, it holds 215 L. Find the rate of change of the volume.`,
    lines: [
      { math: `<span class="m">(2, 340) and (7, 215)</span>`, note: "Write the readings as (time in minutes, volume in litres)." },
      { math: `<span class="m"><span class="c3">rise</span> = 215 − 340 = <span class="c3">−125</span> L</span>`, note: "Change in volume, second reading minus first." },
      { math: `<span class="m"><span class="c2">run</span> = 7 − 2 = <span class="c2">5</span> min</span>`, note: "Change in time, in the same order." },
      { math: `<span class="m"><span class="c1"><i>m</i></span> = <span class="fr"><span class="c3">−125</span><span class="c2">5</span></span> = <span class="c1">−25</span> L/min</span>`, note: "Divide rise by run. The negative sign means the volume is decreasing." },
      { math: `<span class="m">340 + (−25)(5) = 215 ✓</span>`, note: "Check: five minutes at minus 25 litres per minute takes 340 down to 215." }
    ],
    answer: `The volume changes at <span class="m">−25</span> L/min: the tank loses 25 litres every minute.`
  },
  why: `<p>Slope is how people describe change: dollars per hour, kilometres per litre, degrees per day, people per year. Any time a quantity changes at a steady rate, its graph is a line and its slope is that rate. Reading a slope off a graph or a table lets you compare rates and make predictions.</p>
<p>Slope is also the central idea of calculus. The derivative is the slope of a curve at a single point, found by taking the slope between two points that get closer and closer together.</p>`,
  careers: [
    { role: "Civil engineer", use: "Designs road grades as slopes, where a 6% grade means a rise of 6 ft for every 100 ft of horizontal run." },
    { role: "Accessibility consultant", use: "Checks that wheelchair ramps meet the ADA maximum running slope of 1:12, one inch of rise per 12 inches of run." },
    { role: "Roofer", use: "Measures roof pitch as rise per 12 inches of run, such as a 6/12 pitch, to choose materials and safety equipment." },
    { role: "Financial analyst", use: "Reports the rate of change of revenue or costs per quarter from the slope between two data points." },
    { role: "Hydrologist", use: "Computes a river's gradient in metres of drop per kilometre to estimate flow speed and erosion." },
    { role: "Physical therapist", use: "Tracks a patient's range-of-motion gains in degrees per week to judge progress." }
  ],
  life: [
    "Reading a road sign that warns of a 7% downhill grade",
    "Working out your average speed on a trip from two odometer readings",
    "Comparing how fast two savings accounts are growing",
    "Judging how steep a hiking trail is from a map's elevation profile",
    "Seeing how quickly a phone battery drains per hour"
  ],
  fields: [
    { name: "Physics", use: "Velocity is the slope of a position-time graph and acceleration is the slope of a velocity-time graph." },
    { name: "Economics", use: "Marginal cost and the slope of supply and demand lines measure how one quantity responds to another." },
    { name: "Geography", use: "Terrain slope and stream gradient are computed from elevation change over horizontal distance." },
    { name: "Chemistry", use: "Reaction rate is the slope of a concentration-time graph." }
  ],
  prereqWhy: {
    "pa-proportional": "The constant k in y = kx is a slope, and slope generalises it to any line, including lines that miss the origin."
  },
  unlocksWhy: {
    "pa-linear-graphs": "Graphing y = mx + b starts at the intercept and uses the slope's rise and run to find more points.",
    "a1-slope-forms": "Slope-intercept and point-slope forms are built around the slope m computed here."
  },
  beyond: [
    { field: "Algebra I", why: "Parallel lines have equal slopes and perpendicular lines have slopes whose product is −1." },
    { field: "Calculus I", why: "The derivative is the limit of slopes between two points as they move together." },
    { field: "Statistics", why: "The slope of a regression line estimates how much the response variable changes per unit of the explanatory variable." },
    { field: "Physics", why: "Velocity, acceleration and many other rates are read as slopes of graphs." }
  ],
  mistakes: [
    { wrong: `Putting run over rise: slope of the line through <span class="m">(1, 2)</span> and <span class="m">(4, 11)</span> as <span class="m"><span class="fr"><span>3</span><span>9</span></span></span>.`, fix: `Vertical change goes on top: <span class="m"><i>m</i> = <span class="fr"><span>11 − 2</span><span>4 − 1</span></span> = <span class="fr"><span>9</span><span>3</span></span> = 3</span>.` },
    { wrong: `Subtracting in different orders: <span class="m"><span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>1</sub> − <i>x</i><sub>2</sub></span></span></span>, which gives the wrong sign.`, fix: `Start both differences from the same point. Either order works if it is the same on top and bottom.` },
    { wrong: `Saying a vertical line has slope 0.`, fix: `A horizontal line has slope 0 (no rise). A vertical line has run 0, so its slope is undefined.` }
  ],
  practice: [
    { q: `Find the slope of the line through <span class="m">(1, 2)</span> and <span class="m">(4, 11)</span>.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>11 − 2</span><span>4 − 1</span></span> = <span class="fr"><span>9</span><span>3</span></span> = 3</span>.` },
    { q: `Find the slope of the line through <span class="m">(−2, 5)</span> and <span class="m">(3, −5)</span>.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>−5 − 5</span><span>3 − (−2)</span></span> = <span class="fr"><span>−10</span><span>5</span></span> = −2</span>. The line falls from left to right.` },
    { q: `Find the slope of the line through <span class="m">(3, −1)</span> and <span class="m">(3, 4)</span>, and of the line through <span class="m">(−4, 6)</span> and <span class="m">(2, 6)</span>.`, a: `First: run <span class="m">= 3 − 3 = 0</span>, so the slope is undefined (a vertical line, <span class="m"><i>x</i> = 3</span>). Second: rise <span class="m">= 6 − 6 = 0</span>, so <span class="m"><i>m</i> = 0</span> (a horizontal line, <span class="m"><i>y</i> = 6</span>).` },
    { q: `An ADA-compliant ramp can have a slope of at most <span class="m"><span class="fr"><span>1</span><span>12</span></span></span>. A doorway is 30 in above the ground. What is the shortest horizontal run the ramp can have, in feet?`, a: `<span class="m"><span class="fr"><span>30</span><span><i>r</i></span></span> ≤ <span class="fr"><span>1</span><span>12</span></span></span> requires <span class="m"><i>r</i> ≥ 30 × 12 = 360</span> in, which is <span class="m">360 ÷ 12 = 30</span> ft.` }
  ],
  origin: `Builders have described steepness as rise over run for millennia; the Rhind Papyrus (c. 1550 BCE) gives the slope of pyramid faces as a <i>seked</i>, the horizontal run in palms for a rise of one cubit. The coordinate formula became possible after Descartes and Fermat introduced coordinate geometry in the 1630s. Why the letter <i>m</i> is used for slope is not known.`
};
