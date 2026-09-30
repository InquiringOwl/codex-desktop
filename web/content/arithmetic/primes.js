window.ARITH = window.ARITH || {};

ARITH["primes"] = {
  title: "Prime Numbers & Prime Factorization",
  short: "The building blocks of every whole number",
  grade: "Grades 4–6",
  hours: 5,
  voice: "mixed",
  eyebrow: "Number theory · the primes",
  hero: `<span class="m">360 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup> × <span class="c1">5</span></span>`,
  lede: `A prime has exactly two factors: 1 and itself. Every whole number above 1 is a product of primes in exactly one way.`,
  plain: `<p>Some numbers can only be arranged as a single row of tiles. 7 is one of them: the only rectangle is 1 by 7. Numbers like this are called <b>primes</b>. The first few are 2, 3, 5, 7, 11, 13 and 17. A number with more factors than that, like 12, is <b>composite</b>. The number 1 is neither.</p>
<p>Primes are the atoms of multiplication. Break any composite number into factors, then keep breaking those factors down, and you always end at primes. A factor tree shows this. The final list of primes is the <b>prime factorization</b>, and you get the same list no matter which split you start with.</p>
<p>To find primes, the Sieve of Eratosthenes crosses out multiples. Circle 2 and cross out every multiple of 2. Circle the next number left, 3, and cross out its multiples. Keep going. The circled numbers are the primes.</p>`,
  formal: `<p>An integer <span class="m"><i>p</i> &gt; 1</span> is <b>prime</b> if its only positive divisors are 1 and <i>p</i>. An integer <span class="m"><i>n</i> &gt; 1</span> that is not prime is <b>composite</b>. If <i>n</i> is composite it has a prime factor <span class="m"><i>p</i> ≤ √<i>n</i></span>, so trial division up to <span class="m">√<i>n</i></span> decides primality.</p>
<div class="display"><b>Fundamental Theorem of Arithmetic.</b> Every integer <span class="m"><i>n</i> &gt; 1</span> can be written as<br><span class="m"><i>n</i> = <span class="c1"><i>p</i></span><sub>1</sub><sup><i>e</i><sub>1</sub></sup> <span class="c1"><i>p</i></span><sub>2</sub><sup><i>e</i><sub>2</sub></sup> ⋯ <span class="c1"><i>p</i></span><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup></span>, with primes <span class="m"><i>p</i><sub>1</sub> &lt; ⋯ &lt; <i>p</i><sub><i>k</i></sub></span> and exponents <span class="m"><i>e</i><sub><i>i</i></sub> ≥ 1</span>,<br>and this representation is unique.</div>
<p><b>Euclid's theorem:</b> there are infinitely many primes. <b>Euclid's lemma:</b> if a prime <i>p</i> divides <span class="m"><i>ab</i></span>, then <span class="m"><i>p</i> | <i>a</i></span> or <span class="m"><i>p</i> | <i>b</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Prime", desc: "A whole number greater than 1 whose only factors are 1 and itself. Circled in the sieve." },
    { c: "c3", sym: `<i>kp</i>`, name: "Multiples of the current prime", desc: "Numbers crossed out in the sieve because p divides them, so they cannot be prime (except p itself)." },
    { c: "c2", sym: `<i>n</i>`, name: "Number being factored", desc: "The top of the factor tree." },
    { c: "c4", sym: `<i>e</i>`, name: "Exponent", desc: "How many times a prime appears in the factorization." }
  ],
  steps: { title: "How to find a prime factorization", items: [
    `Try the smallest prime, 2. While the number is even, divide by 2 and record a 2.`,
    `Move to the next prime (3, 5, 7, 11, …) and divide by it as many times as it goes evenly.`,
    `Stop testing once the prime squared is larger than what remains. If what remains is bigger than 1, it is prime; record it.`,
    `Group repeated primes with exponents and list them in increasing order.`,
    `Check by multiplying the factorization back out.`
  ] },
  example: {
    prompt: `A bakery has 360 cookies and wants to offer every possible box size that packs all of them into full, equal boxes. Find the prime factorization of 360 and use it to count the box sizes.`,
    lines: [
      { math: `<span class="m">360 = <span class="c1">2</span> × 180 = <span class="c1">2</span> × <span class="c1">2</span> × 90 = <span class="c1">2</span> × <span class="c1">2</span> × <span class="c1">2</span> × 45</span>`, note: "Divide by 2 while the number is even." },
      { math: `<span class="m">45 = <span class="c1">3</span> × 15 = <span class="c1">3</span> × <span class="c1">3</span> × <span class="c1">5</span></span>`, note: "45 is odd. Its digits sum to 9, so divide by 3 twice. 5 is prime." },
      { math: `<span class="m">360 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup> × <span class="c1">5</span><sup>1</sup></span>`, note: "Group the repeated primes. Check: 8 × 9 × 5 = 360." },
      { math: `<span class="m">(3 + 1)(2 + 1)(1 + 1) = 24</span>`, note: "A factor uses 0 to 3 twos, 0 to 2 threes and 0 or 1 five. Multiply the number of choices." }
    ],
    answer: `<span class="m">360 = 2<sup>3</sup> × 3<sup>2</sup> × 5</span>, so there are 24 box sizes, from 1 cookie per box up to 360.`
  },
  why: `<p>Prime factorization is the fastest way to simplify fractions, find common denominators, and compute the GCF and LCM. Knowing that 91 = 7 × 13 or that 1,001 = 7 × 11 × 13 turns many hard problems into easy ones.</p>
<p>Primes also protect your data. Online encryption relies on the fact that multiplying two large primes is easy, while recovering them from their product is extremely hard.</p>`,
  careers: [
    { role: "Cryptographer", use: "Generates RSA keys from pairs of large primes, often hundreds of digits long." },
    { role: "Security engineer", use: "Configures key sizes for TLS and SSH based on how hard it is to factor products of primes." },
    { role: "Mechanical engineer", use: "Chooses gear tooth counts with no common factor so each tooth meets every tooth on the mating gear, spreading wear." },
    { role: "Software developer", use: "Picks prime table sizes for some hash tables so keys spread evenly across slots." },
    { role: "Mathematician", use: "Researches the distribution of primes, including open problems such as the Riemann Hypothesis." }
  ],
  life: [
    "Simplifying a fraction in one step",
    "Finding how many ways items can be packed evenly",
    "Understanding why website padlock icons mean a connection is encrypted",
    "Checking quickly whether a number can be split into equal groups"
  ],
  fields: [
    { name: "Computer security", use: "Public-key encryption and digital signatures depend on properties of primes." },
    { name: "Number theory", use: "Primes are the central objects of the field." },
    { name: "Mechanical engineering", use: "Gear design uses tooth counts that share no common factor." },
    { name: "Biology", use: "Researchers have proposed that the 13- and 17-year cycles of periodical cicadas help them avoid predators with shorter cycles." }
  ],
  prereqWhy: {
    "factors": "A prime is defined by its factors, and factor trees are built from factor pairs."
  },
  unlocksWhy: {
    "gcf-lcm": "The GCF and LCM can be read off prime factorizations by taking the smaller or larger exponent of each prime."
  },
  beyond: [
    { field: "Number theory", why: "Primes, their distribution and unique factorization are its foundation." },
    { field: "Abstract algebra", why: "Prime and irreducible elements generalize primes to other number systems and polynomial rings." },
    { field: "Cryptography", why: "RSA and many other systems are built directly on prime numbers." }
  ],
  mistakes: [
    { wrong: `"1 is prime"`, fix: `A prime must have exactly two positive factors. 1 has only one, so it is neither prime nor composite.` },
    { wrong: `"51 and 91 are prime because they are odd"`, fix: `<span class="m">51 = 3 × 17</span> and <span class="m">91 = 7 × 13</span>. Odd does not mean prime.` },
    { wrong: `Stopping the factor tree at <span class="m">360 = 2 × 2 × 2 × 45</span>`, fix: `Every leaf must be prime. 45 splits further into <span class="m">3 × 3 × 5</span>.` }
  ],
  practice: [
    { q: `Is 51 prime?`, a: `No. Its digits sum to 6, so 3 divides it: 51 = 3 × 17.` },
    { q: `Find the prime factorization of 84.`, a: `<span class="m">84 = 2<sup>2</sup> × 3 × 7</span>. 84 → 42 → 21 → 7, dividing by 2, 2, 3.` },
    { q: `Is 211 prime?`, a: `Yes. √211 ≈ 14.5, and none of 2, 3, 5, 7, 11, 13 divides 211.` },
    { q: `Find the prime factorization of 1,001.`, a: `<span class="m">1,001 = 7 × 11 × 13</span>. 1,001 ÷ 7 = 143, and 143 = 11 × 13.` }
  ],
  origin: `Euclid's <i>Elements</i> (around 300 BCE) proves there are infinitely many primes (Book IX, Proposition 20). The sieve is credited to Eratosthenes of Cyrene (3rd century BCE) by the later writer Nicomachus. Gauss gave the first clear statement and proof of unique factorization in <i>Disquisitiones Arithmeticae</i> (1801).`
};
