window.ARITH = window.ARITH || {};

ARITH["sci-notation"] = {
  title: "Scientific Notation",
  short: "Writing huge and tiny numbers with powers of ten",
  grade: "Grade 8",
  hours: 5,
  voice: "plain",
  eyebrow: "Powers of ten · orders of magnitude",
  hero: `<span class="m"><span class="c2"><i>c</i></span> × 10<sup class="c3"><i>n</i></sup>, &nbsp; 1 ≤ |<span class="c2"><i>c</i></span>| &lt; 10</span>`,
  lede: `Any nonzero number can be written as a coefficient between 1 and 10 times a power of ten. The exponent tells you its size at a glance.`,
  plain: `<p>The distance from Earth to the Sun is about 149,600,000,000 metres. A hydrogen atom is about 0.0000000001 metres across. Numbers like these are hard to read and easy to miscount. Scientific notation fixes that.</p>
<p>You write the number as a short decimal between 1 and 10, called the <b>coefficient</b>, times 10 to some power. The Sun's distance becomes <span class="m">1.496 × 10<sup>11</sup></span> m. The atom becomes <span class="m">1 × 10<sup>−10</sup></span> m. A positive exponent means a big number. A negative exponent means a small one.</p>
<p>It also makes arithmetic easier. To multiply, multiply the coefficients and add the exponents. To divide, divide the coefficients and subtract the exponents. Then tidy up so the coefficient is back between 1 and 10.</p>`,
  formal: `<p>Every nonzero real number <span class="m"><i>x</i></span> has a unique representation</p>
<div class="display"><i>x</i> = <span class="c2"><i>c</i></span> × 10<sup class="c3"><i>n</i></sup>, &nbsp; 1 ≤ |<span class="c2"><i>c</i></span>| &lt; 10, &nbsp; <span class="c3"><i>n</i></span> ∈ ℤ, &nbsp; <span class="dim"><span class="c3"><i>n</i></span> = ⌊log<sub>10</sub>|<i>x</i>|⌋</span></div>
<p>Using the laws of exponents, <span class="m">(<i>c</i><sub>1</sub> × 10<sup><i>m</i></sup>)(<i>c</i><sub>2</sub> × 10<sup><i>n</i></sup>) = <i>c</i><sub>1</sub><i>c</i><sub>2</sub> × 10<sup><i>m</i>+<i>n</i></sup></span> and <span class="m">(<i>c</i><sub>1</sub> × 10<sup><i>m</i></sup>) ÷ (<i>c</i><sub>2</sub> × 10<sup><i>n</i></sup>) = (<i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>) × 10<sup><i>m</i>−<i>n</i></sup></span>, followed by renormalising the coefficient. The digits of <span class="m c2"><i>c</i></span> are the <b>significant figures</b> of the measurement, and <span class="m c3"><i>n</i></span> is its <b>order of magnitude</b>. Calculators often display <span class="m">1.496 × 10<sup>11</sup></span> as <span class="m">1.496E11</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>c</i>`, name: "Coefficient", desc: "A number with absolute value at least 1 and less than 10. Its digits are the significant figures." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "An integer. It counts how many places the decimal point moved. Positive for large numbers, negative for small ones." },
    { c: "c1", sym: `10<sup><i>n</i></sup>`, name: "Power of ten", desc: "The scale. Each step of 1 in n is a factor of 10 on the lab's ruler." }
  ],
  steps: { title: "How to write and compute in scientific notation", items: [
    `Move the decimal point until exactly one nonzero digit is to its left. That gives the coefficient <span class="m c2"><i>c</i></span>.`,
    `Count the places moved. Moving left gives a positive <span class="m c3"><i>n</i></span>. Moving right gives a negative <span class="m c3"><i>n</i></span>.`,
    `To multiply, multiply coefficients and add exponents. To divide, divide coefficients and subtract exponents.`,
    `If the new coefficient is 10 or more, divide it by 10 and add 1 to the exponent. If it is less than 1, multiply by 10 and subtract 1.`,
    `Round the coefficient to the number of significant figures the data supports.`
  ] },
  example: {
    prompt: `Light travels about <span class="m">3.00 × 10<sup>8</sup></span> metres per second. The Sun is about <span class="m">1.496 × 10<sup>11</sup></span> metres from Earth. How long does sunlight take to reach us?`,
    lines: [
      { math: `<span class="m">time = <span class="fr"><span>distance</span><span>speed</span></span></span>`, note: "Time equals distance divided by speed." },
      { math: `<span class="m"><span class="fr"><span>1.496 × 10<sup>11</sup></span><span>3.00 × 10<sup>8</sup></span></span></span>`, note: "Set up the division." },
      { math: `<span class="m"><span class="c2">0.4987</span> × 10<sup class="c3">3</sup></span>`, note: "Divide coefficients (1.496 ÷ 3.00 ≈ 0.4987) and subtract exponents (11 − 8 = 3)." },
      { math: `<span class="m"><span class="c2">4.99</span> × 10<sup class="c3">2</sup> s</span>`, note: "Renormalise: multiply the coefficient by 10, subtract 1 from the exponent, round to 3 significant figures." },
      { math: `<span class="m">499 ÷ 60 ≈ 8.3</span> min`, note: "Convert seconds to minutes." }
    ],
    answer: `Sunlight takes about <span class="m">4.99 × 10<sup>2</sup></span> seconds, a little over 8 minutes, to reach Earth.`
  },
  why: `<p>Science works across enormous ranges of size, from 10<sup>−15</sup> m for an atomic nucleus to 10<sup>26</sup> m for the observable universe. Scientific notation makes those numbers readable, comparable and easy to multiply. It also shows how precise a measurement is through its significant figures.</p>
<p>Computers store real numbers in a binary version of the same idea, called floating point. Logarithms, which appear throughout algebra, chemistry (pH) and acoustics (decibels), are essentially the exponent part of scientific notation.</p>`,
  careers: [
    { role: "Chemist", use: "Converts between grams and numbers of particles using Avogadro's number, 6.022 × 10²³ per mole." },
    { role: "Astronomer", use: "Works with distances like 9.46 × 10¹⁵ m per light-year and stellar masses around 10³⁰ kg." },
    { role: "Microbiologist", use: "Reports bacterial counts from serial dilutions, such as 2.4 × 10⁷ colony-forming units per millilitre." },
    { role: "Electrical engineer", use: "Specifies components in picofarads and nanoseconds, which are 10⁻¹² F and 10⁻⁹ s." },
    { role: "Software engineer", use: "Chooses between floating-point types knowing a 64-bit double has about 15 to 17 significant decimal digits." },
    { role: "Environmental scientist", use: "Records pollutant concentrations such as 3.5 × 10⁻⁶ g per litre." }
  ],
  life: [
    "Reading a calculator result shown as 6.02E23",
    "Comparing the national debt in trillions to a household budget",
    "Understanding file and storage sizes in gigabytes and terabytes",
    "Making sense of distances and sizes in science news"
  ],
  fields: [
    { name: "Physics", use: "Physical constants such as Planck's constant, 6.626 × 10⁻³⁴ J·s, are routinely written this way." },
    { name: "Chemistry", use: "Moles, concentrations and equilibrium constants span many orders of magnitude." },
    { name: "Computer science", use: "IEEE 754 floating point stores a sign, significand and exponent, a base-2 scientific notation." },
    { name: "Astronomy", use: "Distances, masses and luminosities are handled almost entirely in powers of ten." }
  ],
  prereqWhy: {
    "exponents": "You need to know what 10<sup>n</sup> means, including negative exponents, and the rules for multiplying and dividing powers.",
    "decimals": "Writing the coefficient means moving a decimal point and understanding place value to the right of the point."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Logarithms and exponential functions generalise the exponent part of scientific notation." },
    { field: "Numerical analysis", why: "Floating-point error and significant-figure precision are studied through normalised scientific representations." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m">45 × 10<sup>6</sup></span> and calling it scientific notation.`, fix: `The coefficient must be at least 1 and less than 10: <span class="m">4.5 × 10<sup>7</sup></span>.` },
    { wrong: `Getting the sign of the exponent backwards: <span class="m">0.00032 = 3.2 × 10<sup>4</sup></span>.`, fix: `Small numbers have negative exponents: <span class="m">3.2 × 10<sup>−4</sup></span>.` },
    { wrong: `Multiplying the exponents: <span class="m">10<sup>5</sup> × 10<sup>−2</sup> = 10<sup>−10</sup></span>.`, fix: `Add the exponents when multiplying powers of the same base: <span class="m">10<sup>5 + (−2)</sup> = 10<sup>3</sup></span>.` }
  ],
  practice: [
    { q: `Write 45,000,000 in scientific notation.`, a: `Move the point 7 places left: <span class="m">4.5 × 10<sup>7</sup></span>` },
    { q: `Write 0.00032 in scientific notation.`, a: `Move the point 4 places right: <span class="m">3.2 × 10<sup>−4</sup></span>` },
    { q: `<span class="m">(3 × 10<sup>5</sup>)(4 × 10<sup>−2</sup>)</span>`, a: `<span class="m">12 × 10<sup>3</sup> = 1.2 × 10<sup>4</sup></span>` },
    { q: `<span class="m">(6.3 × 10<sup>8</sup>) ÷ (9 × 10<sup>3</sup>)</span>`, a: `<span class="m">0.7 × 10<sup>5</sup> = 7 × 10<sup>4</sup></span>` }
  ],
  origin: `In <i>The Sand Reckoner</i> (3rd century BCE), Archimedes built a system for naming very large numbers and estimated that fewer than 10<sup>63</sup> grains of sand would fill the universe as he pictured it. The modern form relies on exponent notation, which Descartes popularised in <i>La Géométrie</i> (1637).`
};
