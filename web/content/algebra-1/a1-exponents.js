window.ARITH = window.ARITH || {};

ARITH["a1-exponents"] = {
  title: "Integer Exponents & Scientific Notation",
  short: "Zero and negative exponents; computing in powers of ten",
  grade: "Grade 8 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Exponents · the integer powers",
  hero: `<span class="m"><span class="c2"><i>a</i></span><sup class="c3">0</sup> = <span class="c1">1</span>, &nbsp; <span class="c2"><i>a</i></span><sup class="c3">−<i>n</i></sup> = <span class="c1"><span class="fr"><span>1</span><span><i>a</i><sup><i>n</i></sup></span></span></span></span>`,
  lede: `A negative exponent means a reciprocal, and a zero exponent gives 1. With those two definitions, every exponent rule works for all integer exponents.`,
  plain: `<p>Count down the powers of 2: <span class="m">2<sup>3</sup> = 8</span>, <span class="m">2<sup>2</sup> = 4</span>, <span class="m">2<sup>1</sup> = 2</span>. Each step down divides by 2. Keep going and the pattern forces <span class="m">2<sup>0</sup> = 1</span>, <span class="m">2<sup>−1</sup> = <span class="fr"><span>1</span><span>2</span></span></span>, <span class="m">2<sup>−2</sup> = <span class="fr"><span>1</span><span>4</span></span></span>. A negative exponent does not make the number negative. It moves the power to the denominator.</p>
<p>These definitions are chosen so the rules you already know keep working. For example, <span class="m"><i>x</i><sup>5</sup> ÷ <i>x</i><sup>5</sup></span> must be 1, and subtracting exponents gives <span class="m"><i>x</i><sup>0</sup></span>. So <span class="m"><i>x</i><sup>0</sup> = 1</span>. To simplify an expression, apply the rules and then write the answer with positive exponents only.</p>
<p><b>Scientific notation</b> uses this to write very large and very small numbers compactly: a number from 1 up to (but not including) 10, times a power of ten. A red blood cell is about <span class="m">7 × 10<sup>−6</sup></span> m across. To multiply or divide in scientific notation, work on the front numbers and the powers of ten separately.</p>`,
  formal: `<p>For a real number <span class="m"><i>a</i> ≠ 0</span> and a positive integer <span class="m"><i>n</i></span>, define <span class="m"><i>a</i><sup>0</sup> = 1</span> and <span class="m"><i>a</i><sup>−<i>n</i></sup> = 1/<i>a</i><sup><i>n</i></sup></span>. (The expression <span class="m">0<sup>0</sup></span> is left undefined in elementary algebra.) Then for nonzero <span class="m"><i>a</i>, <i>b</i></span> and all integers <span class="m"><i>m</i>, <i>n</i></span>:</p>
<div class="display"><i>a</i><sup><i>m</i></sup><i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i>+<i>n</i></sup> &nbsp;&nbsp; <span class="fr"><span><i>a</i><sup><i>m</i></sup></span><span><i>a</i><sup><i>n</i></sup></span></span> = <i>a</i><sup><i>m</i>−<i>n</i></sup> &nbsp;&nbsp; (<i>a</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup><br>(<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup> &nbsp;&nbsp; <span class="dim">(</span><span class="fr"><span><i>a</i></span><span><i>b</i></span></span><span class="dim">)</span><sup><i>n</i></sup> = <span class="fr"><span><i>a</i><sup><i>n</i></sup></span><span><i>b</i><sup><i>n</i></sup></span></span> &nbsp;&nbsp; <span class="dim">(</span><span class="fr"><span><i>a</i></span><span><i>b</i></span></span><span class="dim">)</span><sup>−<i>n</i></sup> = <span class="dim">(</span><span class="fr"><span><i>b</i></span><span><i>a</i></span></span><span class="dim">)</span><sup><i>n</i></sup></div>
<p>A number is in <b>scientific notation</b> when written <span class="m"><i>c</i> × 10<sup><i>n</i></sup></span> with <span class="m">1 ≤ |<i>c</i>| &lt; 10</span> and <span class="m"><i>n</i> ∈ ℤ</span>. The exponent <span class="m"><i>n</i></span> counts how many places the decimal point moves: right for positive <span class="m"><i>n</i></span>, left for negative <span class="m"><i>n</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Base", desc: "The nonzero number being repeatedly multiplied. In scientific notation the base is 10." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "Any integer. Positive means repeated multiplication, zero gives 1, negative means the reciprocal of the positive power." },
    { c: "c1", sym: `<i>a</i><sup><i>n</i></sup>`, name: "Result", desc: "The value of the power, or the simplified expression written with positive exponents." }
  ],
  steps: { title: "How to simplify with integer exponents", items: [
    `Apply the power rules first: raise every factor inside parentheses to the outside exponent, multiplying exponents.`,
    `Combine powers of the same <span class="c2">base</span>: add <span class="c3">exponents</span> when multiplying, subtract when dividing.`,
    `Simplify numerical coefficients as ordinary fractions.`,
    `Rewrite any negative exponent as a positive one by moving that factor across the fraction bar: <span class="m"><i>x</i><sup>−3</sup> = 1/<i>x</i><sup>3</sup></span>.`,
    `For scientific notation, multiply or divide the coefficients, then apply the exponent rules to the powers of ten.`,
    `Adjust the result so the coefficient is at least 1 and less than 10, changing the exponent to compensate.`
  ] },
  example: {
    prompt: `The average distance from the Sun to Earth is about <span class="m">1.496 × 10<sup>11</sup></span> m, and light travels about <span class="m">3.00 × 10<sup>8</sup></span> m per second. How long does sunlight take to reach Earth?`,
    lines: [
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>1.496 × 10<sup>11</sup></span><span>3.00 × 10<sup>8</sup></span></span></span>`, note: "Time equals distance divided by speed." },
      { math: `<span class="m">= <span class="fr"><span>1.496</span><span>3.00</span></span> × 10<sup>11 − 8</sup></span>`, note: "Divide the coefficients and the powers of ten separately." },
      { math: `<span class="m">≈ 0.4987 × 10<sup>3</sup></span>`, note: "1.496 ÷ 3.00 ≈ 0.4987, and subtracting exponents gives 10³." },
      { math: `<span class="m">≈ 4.99 × 10<sup>2</sup></span> s`, note: "Move the decimal one place right and lower the exponent by 1 so the coefficient is between 1 and 10." },
      { math: `<span class="m">499 ÷ 60 ≈ 8.3</span> min`, note: "Convert seconds to minutes." }
    ],
    answer: `Sunlight takes about <span class="m">4.99 × 10<sup>2</sup></span> seconds, a little over 8 minutes, to reach Earth.`
  },
  why: `<p>Science and engineering constantly deal with sizes from atoms to galaxies. Scientific notation and negative exponents let you write and compute with those numbers without long strings of zeros, and they show the order of magnitude at a glance. Calculators display <span class="m">4.99E2</span> for exactly this reason.</p>
<p>In algebra, negative exponents turn division into multiplication, which makes rational expressions and formulas easier to handle. The same rules are extended to fractional exponents for roots and to real exponents for exponential growth and decay.</p>`,
  careers: [
    { role: "Chemist", use: "Computes with Avogadro's number, 6.022 × 10²³ per mole, and with concentrations such as 3.2 × 10⁻⁵ mol/L." },
    { role: "Electrical engineer", use: "Works with capacitances in microfarads (10⁻⁶ F) and frequencies in gigahertz (10⁹ Hz) using exponent rules." },
    { role: "Astronomer", use: "Divides distances in metres by the speed of light in scientific notation to get light-travel times." },
    { role: "Microbiologist", use: "Tracks serial dilutions such as 10⁻⁶ and multiplies back by the dilution factor to estimate bacteria per millilitre." },
    { role: "Pharmacist", use: "Converts between milligrams, micrograms and nanograms, which differ by factors of 10³." },
    { role: "Data engineer", use: "Estimates storage in powers of ten or two, such as 10¹² bytes in a terabyte." }
  ],
  life: [
    "Reading a calculator result like 3.2E−4",
    "Comparing file sizes in kilobytes, megabytes and gigabytes",
    "Understanding the national debt or a country's population written in powers of ten",
    "Reading a medicine label in micrograms",
    "Converting between millimetres, metres and kilometres"
  ],
  fields: [
    { name: "Physics", use: "Physical constants and measurements span dozens of orders of magnitude and are written in scientific notation." },
    { name: "Chemistry", use: "Molar quantities, pH and equilibrium constants use powers of ten with negative exponents." },
    { name: "Biology", use: "Cell sizes, cell counts and dilution series are recorded in scientific notation." },
    { name: "Computer science", use: "Memory sizes, floating-point numbers and algorithm running times use powers and exponent rules." }
  ],
  prereqWhy: {
    "pa-exponent-laws": "The product, quotient and power rules for variables are the rules extended here to zero and negative exponents.",
    "sci-notation": "Writing numbers as a coefficient times a power of ten is the starting point for calculating with them using exponent rules."
  },
  unlocksWhy: {
    "a1-poly-add": "Polynomials are sums of terms whose variables have whole-number exponents, and like terms are identified by matching exponents.",
    "a1-radicals": "Simplifying square roots relies on writing factors as powers, such as x⁴ = (x²)²."
  },
  beyond: [
    { field: "Algebra II", why: "Rational exponents, exponential functions and logarithms all extend the integer exponent rules." },
    { field: "Calculus I", why: "The power rule for derivatives is applied after rewriting expressions like 1/x³ as x⁻³." },
    { field: "Chemistry", why: "Concentrations, reaction rates and pH calculations depend on fluency with negative powers of ten." },
    { field: "Physics", why: "Unit prefixes and physical constants require multiplying and dividing in scientific notation." }
  ],
  mistakes: [
    { wrong: `Treating a negative exponent as a negative number: <span class="m">5<sup>−2</sup> = −25</span>.`, fix: `A negative exponent means the reciprocal: <span class="m">5<sup>−2</sup> = <span class="fr"><span>1</span><span>25</span></span></span>.` },
    { wrong: `Moving the coefficient with the variable: <span class="m">3<i>x</i><sup>−2</sup> = <span class="fr"><span>1</span><span>3<i>x</i><sup>2</sup></span></span></span>.`, fix: `The exponent belongs only to <span class="m"><i>x</i></span>: <span class="m">3<i>x</i><sup>−2</sup> = <span class="fr"><span>3</span><span><i>x</i><sup>2</sup></span></span></span>. Only <span class="m">(3<i>x</i>)<sup>−2</sup> = <span class="fr"><span>1</span><span>9<i>x</i><sup>2</sup></span></span></span>.` },
    { wrong: `Leaving a result like <span class="m">27 × 10<sup>5</sup></span> or <span class="m">0.4987 × 10<sup>3</sup></span> as scientific notation.`, fix: `The coefficient must be at least 1 and less than 10: <span class="m">27 × 10<sup>5</sup> = 2.7 × 10<sup>6</sup></span> and <span class="m">0.4987 × 10<sup>3</sup> = 4.987 × 10<sup>2</sup></span>.` }
  ],
  practice: [
    { q: `Evaluate <span class="m">5<sup>−2</sup></span> and <span class="m">(−7)<sup>0</sup></span>.`, a: `<span class="m">5<sup>−2</sup> = <span class="fr"><span>1</span><span>25</span></span></span> and <span class="m">(−7)<sup>0</sup> = 1</span>.` },
    { q: `Simplify <span class="m">(2<i>x</i><sup>3</sup><i>y</i><sup>−2</sup>)<sup>−2</sup></span> using positive exponents.`, a: `<span class="m">2<sup>−2</sup><i>x</i><sup>−6</sup><i>y</i><sup>4</sup> = <span class="fr"><span><i>y</i><sup>4</sup></span><span>4<i>x</i><sup>6</sup></span></span></span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>3<i>x</i><sup>−2</sup><i>y</i></span><span>12<i>x</i><sup>3</sup><i>y</i><sup>−4</sup></span></span></span>.`, a: `<span class="m"><span class="fr"><span>3</span><span>12</span></span> · <i>x</i><sup>−2−3</sup> · <i>y</i><sup>1−(−4)</sup> = <span class="fr"><span>1</span><span>4</span></span><i>x</i><sup>−5</sup><i>y</i><sup>5</sup> = <span class="fr"><span><i>y</i><sup>5</sup></span><span>4<i>x</i><sup>5</sup></span></span></span>.` },
    { q: `Compute <span class="m">(6.0 × 10<sup>−4</sup>)(4.5 × 10<sup>9</sup>)</span> in scientific notation.`, a: `<span class="m">6.0 × 4.5 = 27</span> and <span class="m">10<sup>−4</sup> · 10<sup>9</sup> = 10<sup>5</sup></span>, so <span class="m">27 × 10<sup>5</sup> = 2.7 × 10<sup>6</sup></span>.` }
  ],
  origin: `René Descartes's <i>La Géométrie</i> (1637) popularised writing powers as raised numbers such as <span class="m"><i>x</i><sup>3</sup></span>. John Wallis explained negative and fractional exponents in <i>Arithmetica Infinitorum</i> (1656), and Isaac Newton used them freely in his letters of 1676.`
};
