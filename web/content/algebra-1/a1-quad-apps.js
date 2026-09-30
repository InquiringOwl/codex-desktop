window.ARITH = window.ARITH || {};

ARITH["a1-quad-apps"] = {
  title: "Applications of Quadratics",
  short: "Projectiles, maximum area and maximum revenue",
  grade: "Grade 10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Quadratic functions · modelling and optimisation",
  hero: `<span class="m"><span class="c2"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub></span> &nbsp;&nbsp; <span class="c1"><i>t</i><sub>max</sub> = <span class="fr"><span><i>v</i><sub>0</sub></span><span>32</span></span></span></span>`,
  lede: `Quadratic models answer two kinds of question: when does a quantity reach a given value (solve the equation, often for the <span class="c3">ground hits</span>), and what is its largest or smallest value (find the <span class="c1">vertex</span>).`,
  plain: `<p>Throw a ball straight up and it slows, stops for an instant at the top, then falls back faster and faster. Its height over time follows a parabola. In feet, <span class="m"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub></span>, where <span class="m"><i>v</i><sub>0</sub></span> is the launch speed upward and <span class="m"><i>h</i><sub>0</sub></span> the starting height. In metres the <span class="m">−16</span> becomes <span class="m">−4.9</span>. Both numbers are half the acceleration due to gravity.</p>
<p>Two questions come up. "When does it hit the ground?" means solve <span class="m"><i>h</i>(<i>t</i>) = 0</span> and keep the positive time. "How high does it go?" means find the vertex: its time is <span class="m">−<i>b</i>/(2<i>a</i>)</span>, and its height is the function at that time. If you ask whether it ever reaches some height and the discriminant is negative, the answer is no.</p>
<p>The same vertex idea solves <b>optimisation</b> problems. With a fixed length of fence, a rectangle's area is a quadratic function of its width, and the vertex gives the largest area. When raising a price loses customers, revenue is price times quantity, a quadratic, and the vertex gives the best price.</p>`,
  formal: `<p><b>Vertical motion</b> under constant gravitational acceleration, ignoring air resistance:</p>
<div class="display"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub> &nbsp;<span class="dim">(feet, <i>g</i> ≈ 32 ft/s²)</span> &nbsp;&nbsp; <i>h</i>(<i>t</i>) = −4.9<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub> &nbsp;<span class="dim">(metres, <i>g</i> ≈ 9.8 m/s²)</span><br>maximum at <i>t</i> = −<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span> = <span class="fr"><span><i>v</i><sub>0</sub></span><span><i>g</i></span></span>; &nbsp; ground hit where <i>h</i>(<i>t</i>) = 0, <i>t</i> &gt; 0</div>
<p>More generally, a quadratic function <span class="m"><i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> attains its <b>maximum</b> (if <span class="m"><i>a</i> &lt; 0</span>) or <b>minimum</b> (if <span class="m"><i>a</i> &gt; 0</span>) value <span class="m"><i>f</i>(−<i>b</i>/(2<i>a</i>))</span> at <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>. The equation <span class="m"><i>f</i>(<i>x</i>) = <i>k</i></span> has real solutions exactly when the discriminant of <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + (<i>c</i> − <i>k</i>)</span> is nonnegative. In every application the domain is restricted to values that make physical sense, such as <span class="m"><i>t</i> ≥ 0</span> and positive lengths.</p>`,
  legend: [
    { c: "c2", sym: `<i>h</i>(<i>t</i>)`, name: "The curve", desc: "The quadratic model, such as height versus time or area versus width." },
    { c: "c1", sym: `(<i>t</i><sub>max</sub>, <i>h</i><sub>max</sub>)`, name: "Maximum", desc: "The vertex of the parabola: the greatest height, area or revenue, and where it occurs." },
    { c: "c3", sym: `<i>h</i>(<i>t</i>) = 0`, name: "Ground hits", desc: "The times when the height is zero. The positive one is when the object lands." },
    { c: "c4", sym: `<i>v</i><sub>0</sub>, <i>h</i><sub>0</sub>`, name: "Initial conditions", desc: "Launch speed (positive upward) and starting height. They are the b and c of the quadratic." }
  ],
  steps: { title: "How to solve a quadratic application", items: [
    `Define the variable with units and write the quadratic model: from a formula (projectiles) or by building it (area = length × width, revenue = price × quantity).`,
    `Decide what is asked. A time, length or price at which the quantity equals some value: solve an equation. A largest or smallest value: find the <span class="c1">vertex</span>.`,
    `For an equation, move everything to one side and solve by factoring or the quadratic formula. Check the discriminant first if you only need to know whether a solution exists.`,
    `For an optimum, compute <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>, then evaluate the function there.`,
    `Discard solutions outside the sensible domain, such as negative times or lengths.`,
    `Answer in a sentence with units, and check that the numbers are reasonable.`
  ] },
  example: {
    prompt: `A ball is thrown upward at 48 ft/s from the edge of a cliff 64 ft above the ground. Find its maximum height and when it hits the ground.`,
    lines: [
      { math: `<span class="m c2"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + 48<i>t</i> + 64</span>`, note: "Height in feet after t seconds, with v₀ = 48 and h₀ = 64." },
      { math: `<span class="m"><i>t</i> = −<span class="fr"><span>48</span><span>2(−16)</span></span> = 1.5</span>`, note: "Time of the vertex, from t = −b/(2a)." },
      { math: `<span class="m"><i>h</i>(1.5) = −16(2.25) + 72 + 64 = <span class="c1">100</span></span>`, note: "Maximum height, 1.5 s after the throw." },
      { math: `<span class="m">−16<i>t</i><sup>2</sup> + 48<i>t</i> + 64 = 0 &nbsp;⇒&nbsp; <i>t</i><sup>2</sup> − 3<i>t</i> − 4 = 0</span>`, note: "It hits the ground when h = 0. Divide by −16." },
      { math: `<span class="m">(<i>t</i> − 4)(<i>t</i> + 1) = 0 &nbsp;⇒&nbsp; <span class="c3"><i>t</i> = 4</span></span>`, note: "Reject t = −1, which is before the throw." },
      { math: `<span class="m">−16(16) + 48(4) + 64 = −256 + 192 + 64 = 0 ✓</span>`, note: "Check the landing time." }
    ],
    answer: `The ball reaches a maximum height of <span class="m c1">100 ft</span> after 1.5 s and hits the ground after <span class="m c3">4 s</span>.`
  },
  why: `<p>Many practical questions are about the best possible value: the largest pen from a fixed roll of fence, the ticket price that brings in the most money, the angle and speed that send a ball highest. When the quantity is a quadratic function, the vertex answers these questions exactly, with no guessing.</p>
<p>This is the first real optimisation problem most students meet. Calculus generalises it to any function by finding where the rate of change is zero, and physics builds on the projectile model to handle motion in two dimensions and with air resistance.</p>`,
  careers: [
    { role: "Sports scientist", use: "Models the height of a jumper's centre of mass as −4.9t² + v₀t + h₀ to estimate take-off speed from hang time." },
    { role: "Pricing analyst", use: "Fits revenue as a quadratic function of price and uses the vertex to recommend the price that maximises revenue." },
    { role: "Farmer", use: "Finds the pen dimensions that give the largest area for a fixed length of fencing along a barn or river." },
    { role: "Forensic investigator", use: "Uses projectile equations to work backward from where an object landed to its launch speed or height." },
    { role: "Civil engineer", use: "Computes the maximum height or sag of a parabolic arch or cable from its quadratic model." },
    { role: "Fireworks technician", use: "Sets shell launch speeds so the burst happens near the vertex of the trajectory, at a planned altitude." }
  ],
  life: [
    "Working out how long a ball or a dropped object stays in the air",
    "Getting the biggest garden or dog run from a fixed amount of fencing",
    "Seeing why a small price increase can raise income but a large one lowers it",
    "Judging how high a basketball shot or a kicked ball will go"
  ],
  fields: [
    { name: "Physics", use: "Vertical and projectile motion under gravity are modelled by quadratic functions of time." },
    { name: "Economics", use: "Revenue and profit that rise and then fall with price or output are maximised at the vertex." },
    { name: "Agriculture and land management", use: "Maximum-area enclosures with fixed perimeter are classic quadratic optimisation problems." },
    { name: "Engineering", use: "Beam deflection, arch design and trajectory planning use quadratic models and their extreme values." }
  ],
  prereqWhy: {
    "a1-quad-graphs": "Every application relies on finding the vertex for a maximum or minimum and the intercepts for start and end times, which come from graphing quadratics."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "Optimisation problems are solved for any function by setting the derivative equal to zero, which for a quadratic gives the vertex." },
    { field: "Physics", why: "Kinematics with constant acceleration, including two-dimensional projectile motion, is built on these quadratic models." },
    { field: "Economics", why: "Profit maximisation and consumer-demand models often use quadratic functions of price or quantity." },
    { field: "Operations research", why: "Quadratic programming optimises quadratic cost functions subject to constraints." }
  ],
  mistakes: [
    { wrong: `Giving the time of the maximum as the maximum height: "the maximum is 1.5".`, fix: `The vertex has two coordinates. <span class="m"><i>t</i> = 1.5</span> s is when; <span class="m"><i>h</i>(1.5) = 100</span> ft is how high.` },
    { wrong: `Using <span class="m">−16</span> with metres or <span class="m">−4.9</span> with feet.`, fix: `Match the units: <span class="m">−16<i>t</i><sup>2</sup></span> for feet, <span class="m">−4.9<i>t</i><sup>2</sup></span> for metres.` },
    { wrong: `Keeping both roots: "the ball lands at <span class="m"><i>t</i> = 4</span> or <span class="m"><i>t</i> = −1</span>".`, fix: `Time after the throw is nonnegative, so reject <span class="m"><i>t</i> = −1</span>. Always check the domain of the situation.` },
    { wrong: `For a fence along a barn, using a perimeter of four sides: <span class="m">2<i>x</i> + 2<i>y</i> = 120</span>.`, fix: `Only three sides are fenced: <span class="m">2<i>x</i> + <i>y</i> = 120</span>, so the area is <span class="m"><i>x</i>(120 − 2<i>x</i>)</span>.` }
  ],
  practice: [
    { q: `A rock is dropped from a bridge 144 ft above the water. How long until it hits the water?`, a: `<span class="m"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + 144 = 0</span>, so <span class="m"><i>t</i><sup>2</sup> = 9</span> and <span class="m"><i>t</i> = 3</span> s (reject <span class="m">−3</span>).` },
    { q: `A farmer has 120 ft of fence to enclose a rectangular pen against a barn wall, fencing only the other three sides. What dimensions give the largest area?`, a: `Let <span class="m"><i>x</i></span> be each side perpendicular to the barn: <span class="m"><i>A</i> = <i>x</i>(120 − 2<i>x</i>) = −2<i>x</i><sup>2</sup> + 120<i>x</i></span>. Vertex <span class="m"><i>x</i> = −120/(2(−2)) = 30</span>. The pen is <span class="m">30</span> ft by <span class="m">60</span> ft, area <span class="m">1800</span> ft².` },
    { q: `A ball is kicked straight up from the ground at 14.7 m/s, so <span class="m"><i>h</i>(<i>t</i>) = −4.9<i>t</i><sup>2</sup> + 14.7<i>t</i></span>. Find its maximum height. Does it ever reach 12 m?`, a: `Vertex <span class="m"><i>t</i> = 14.7/9.8 = 1.5</span> s, <span class="m"><i>h</i>(1.5) = −11.025 + 22.05 = 11.025</span> m. For 12 m: <span class="m">−4.9<i>t</i><sup>2</sup> + 14.7<i>t</i> − 12 = 0</span> has discriminant <span class="m">216.09 − 235.2 = −19.11 &lt; 0</span>, so it <b>never reaches</b> 12 m.` },
    { q: `A club sells <span class="m">800 − 20<i>p</i></span> T-shirts when the price is <span class="m"><i>p</i></span> dollars. What price maximises revenue, and what is the maximum revenue?`, a: `<span class="m"><i>R</i>(<i>p</i>) = <i>p</i>(800 − 20<i>p</i>) = −20<i>p</i><sup>2</sup> + 800<i>p</i></span>. Vertex <span class="m"><i>p</i> = −800/(2(−20)) = 20</span>. Revenue <span class="m"><i>R</i>(20) = 20 · 400 = $8,000</span>.` }
  ],
  origin: `Galileo Galilei's <i>Two New Sciences</i> (1638) showed that a body falling from rest covers distances proportional to the square of the elapsed time, and that a projectile's path is a parabola, the result behind every model on this page.`
};
