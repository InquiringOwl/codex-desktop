window.ARITH = window.ARITH || {};

ARITH["modular"] = {
  title: "Remainders & Clock Arithmetic",
  short: "Arithmetic that wraps around, like a clock",
  grade: "Grades 4–5 (remainders); college (congruences)",
  hours: 6,
  voice: "plain",
  eyebrow: "Number theory · modular arithmetic",
  hero: `<span class="m"><span class="c2"><i>a</i></span> ≡ <span class="c3"><i>b</i></span> (mod <span class="c4"><i>m</i></span>)</span>`,
  lede: `Two integers are congruent mod m when they leave the same remainder after division by m. On a clock with m positions, they land in the same spot.`,
  plain: `<p>If it is 9 o'clock now, what time will it be in 5 hours? Not 14 o'clock on a 12-hour clock. It is 2. The clock wraps around after 12. Arithmetic that wraps around like this is called <b>modular arithmetic</b>, and the number where it wraps is the <b>modulus</b>.</p>
<p>The key tool is the remainder. To find where a number lands on a clock with 12 positions, divide by 12 and keep the remainder. 14 divided by 12 is 1 remainder 2, so 14 lands on 2. We write <span class="m">14 ≡ 2 (mod 12)</span> and say "14 is congruent to 2 mod 12".</p>
<p>The same idea works for days of the week with modulus 7, hours in a day with modulus 24, and even or odd with modulus 2. You can add and multiply first and take the remainder at the end, or take remainders first to keep the numbers small. Both give the same answer.</p>`,
  formal: `<p><b>Division algorithm.</b> For any integer <i>a</i> and positive integer <i>m</i> there are unique integers <i>q</i> and <i>r</i> with</p>
<div class="display"><span class="m"><span class="c2"><i>a</i></span> = <span class="c4"><i>m</i></span><i>q</i> + <span class="c1"><i>r</i></span>,  0 ≤ <span class="c1"><i>r</i></span> &lt; <span class="c4"><i>m</i></span></span></div>
<p>We write <span class="m"><i>r</i> = <i>a</i> mod <i>m</i></span>. Integers <i>a</i> and <i>b</i> are <b>congruent modulo <i>m</i></b>, written <span class="m"><i>a</i> ≡ <i>b</i> (mod <i>m</i>)</span>, if <span class="m"><i>m</i> | (<i>a</i> − <i>b</i>)</span>. This holds exactly when <i>a</i> and <i>b</i> have the same remainder mod <i>m</i>. Congruence is an equivalence relation, and it respects the operations: if <span class="m"><i>a</i> ≡ <i>a</i>′</span> and <span class="m"><i>b</i> ≡ <i>b</i>′ (mod <i>m</i>)</span>, then <span class="m"><i>a</i> + <i>b</i> ≡ <i>a</i>′ + <i>b</i>′</span> and <span class="m"><i>ab</i> ≡ <i>a</i>′<i>b</i>′ (mod <i>m</i>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Starting value", desc: "The integer you start from, such as the current hour." },
    { c: "c3", sym: `<i>b</i>`, name: "Step", desc: "The amount added or multiplied, such as hours to wait." },
    { c: "c1", sym: `<i>r</i>`, name: "Result (remainder)", desc: "Where you land on the clock. Always a whole number from 0 up to m − 1." },
    { c: "c4", sym: `<i>m</i>`, name: "Modulus", desc: "How many positions the clock has before it wraps back to 0." }
  ],
  steps: { title: "How to compute a mod m", items: [
    `Divide <i>a</i> by <i>m</i> and take the whole-number quotient <i>q</i>, rounding down (toward negative infinity for negative <i>a</i>).`,
    `Compute <span class="m"><i>r</i> = <i>a</i> − <i>mq</i></span>.`,
    `Check that <span class="m">0 ≤ <i>r</i> &lt; <i>m</i></span>. If <i>r</i> is negative, add <i>m</i>; if it is too large, subtract <i>m</i>.`,
    `For a long sum or product, reduce each piece mod <i>m</i> first, combine, then reduce again.`
  ] },
  example: {
    prompt: `A freight truck leaves at 19:00 on a Friday. The trip takes 58 hours. On what day and at what time does it arrive?`,
    lines: [
      { math: `<span class="m"><span class="c2">19</span> + <span class="c3">58</span> = 77</span>`, note: "Count hours from midnight at the start of Friday." },
      { math: `<span class="m">77 = <span class="c4">24</span> × 3 + <span class="c1">5</span></span>`, note: "Division algorithm with modulus 24: quotient 3, remainder 5." },
      { math: `<span class="m">77 ≡ <span class="c1">5</span> (mod <span class="c4">24</span>)</span>`, note: "The remainder is the clock time: 05:00." },
      { math: `<span class="m">Friday + 3 days = Monday</span>`, note: "The quotient 3 counts how many midnights were passed." }
    ],
    answer: `The truck arrives on Monday at 05:00.`
  },
  why: `<p>Anything that repeats in a cycle runs on modular arithmetic: hours, weekdays, rotating work shifts, and repeating patterns. Check digits on ISBNs, bank account numbers and credit cards use remainders to catch typing errors.</p>
<p>Modular arithmetic is also the engine of modern cryptography. Secure websites rely on systems such as RSA and elliptic-curve cryptography, which are built on arithmetic modulo very large numbers.</p>`,
  careers: [
    { role: "Cryptographer", use: "Designs and analyzes encryption such as RSA, which raises numbers to powers modulo a large product of two primes." },
    { role: "Software engineer", use: "Uses the % operator to place keys in hash tables and wrap indices in circular buffers." },
    { role: "Nurse", use: "Schedules a dose every 8 hours on a 24-hour clock, so a 22:00 dose is followed by 06:00 and 14:00." },
    { role: "Payment systems developer", use: "Validates card numbers with the Luhn check, which tests whether a weighted digit sum is divisible by 10." },
    { role: "Operations scheduler", use: "Plans rotating shift patterns that repeat on a fixed cycle of days." },
    { role: "Music theorist", use: "Treats pitch classes as integers mod 12, since notes an octave apart share a name." }
  ],
  life: [
    "Working out what time a long trip ends",
    "Finding what weekday a date falls on",
    "Telling whether a number is even or odd",
    "Planning a medicine schedule every 6 or 8 hours",
    "Splitting items into groups and finding how many are left over"
  ],
  fields: [
    { name: "Computer science", use: "Hashing, random number generators and checksums use modular reduction." },
    { name: "Cryptography", use: "Public-key systems depend on modular exponentiation and modular inverses." },
    { name: "Music theory", use: "Transposition and interval arithmetic on the 12 pitch classes is arithmetic mod 12." },
    { name: "Calendar science", use: "Algorithms for the day of the week of any date reduce counts of days mod 7." }
  ],
  prereqWhy: {
    "division": "Modular arithmetic keeps the remainder from division, so the division algorithm is the starting point.",
    "integers": "Remainders of negative numbers and differences like a − b require integer arithmetic."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Number theory", why: "Congruences are the main language for questions about primes and divisibility." },
    { field: "Abstract algebra", why: "The integers mod m form the ring ℤ/mℤ, a basic example of groups, rings and fields." },
    { field: "Cryptography", why: "RSA, Diffie–Hellman key exchange and digital signatures are built on modular arithmetic." },
    { field: "Discrete mathematics", why: "Proofs about cycles, hashing and divisibility use congruences directly." }
  ],
  mistakes: [
    { wrong: `<span class="m">−11 mod 4 = −3</span>`, fix: `The remainder must satisfy 0 ≤ r &lt; 4. Since <span class="m">−11 = 4(−3) + 1</span>, the answer is 1.` },
    { wrong: `Using 12 as a remainder on a 12-position clock`, fix: `Remainders mod 12 run from 0 to 11. The clock face labels position 0 as "12".` },
    { wrong: `Dividing both sides of a congruence freely: <span class="m">2 · 3 ≡ 2 · 6 (mod 6)</span> so <span class="m">3 ≡ 6</span>`, fix: `Cancelling is only safe when the factor shares no common factor with m. Here gcd(2, 6) = 2, and 3 is not congruent to 6 mod 6.` }
  ],
  practice: [
    { q: `<span class="m">17 mod 5</span>`, a: `<span class="m">2</span>, since 17 = 5 × 3 + 2.` },
    { q: `It is 08:00. What time will it be 50 hours from now?`, a: `10:00. 8 + 50 = 58 = 24 × 2 + 10, so 58 ≡ 10 (mod 24).` },
    { q: `<span class="m">−11 mod 4</span>`, a: `<span class="m">1</span>, since −11 = 4 × (−3) + 1 with 0 ≤ 1 &lt; 4.` },
    { q: `What is the last digit of <span class="m">3<sup>20</sup></span>?`, a: `1. Last digits of powers of 3 cycle 3, 9, 7, 1 with period 4, and 20 ≡ 0 (mod 4), so 3²⁰ ends like 3⁴ = 81. (3²⁰ = 3,486,784,401.)` }
  ],
  origin: `The Chinese text <i>Sunzi Suanjing</i> (between the 3rd and 5th centuries CE) poses a problem about a number with given remainders, the origin of the Chinese Remainder Theorem. Carl Friedrich Gauss introduced the ≡ notation and developed the theory of congruences in <i>Disquisitiones Arithmeticae</i> (1801).`
};
