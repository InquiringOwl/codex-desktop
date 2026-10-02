window.ARITH = window.ARITH || {};
ARITH["cs-binary"] = {
  title: "Bits and Data Representation",
  short: "Binary, hexadecimal, two's complement and UTF-8",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · bits",
  hero: `<code><span class="c1">int</span>(<span class="c3">"1101"</span>, 2) == <span class="c2">13</span></code>`,
  lede: `Inside a computer every value is a pattern of bits, each 0 or 1. Numbers are written in base 2, negative numbers use two's complement, and text is stored as numbered characters encoded into bytes.`,
  plain: `<p>A <b>bit</b> holds one of two values, 0 or 1. Eight bits make a <b>byte</b>. With one bit you can tell 2 things apart, with two bits 4, and with eight bits <span class="m">2<sup>8</sup> = 256</span>.</p>
<p><b>Binary</b> is place value in base 2. Decimal places are worth 1, 10, 100; binary places are worth 1, 2, 4, 8, 16 and so on, doubling to the left. So <code>1101</code> in binary is <span class="m">8 + 4 + 0 + 1 = 13</span>.</p>
<p>Long binary strings are hard to read, so programmers group them in fours and write each group as one <b>hexadecimal</b> digit, 0 to 9 then a to f for 10 to 15. The byte <code>11111111</code> is <code>ff</code> in hex, 255 in decimal.</p>
<p>Text is numbers too. Each character has a number called its <b>code point</b> (A is 65). <b>UTF-8</b> stores each code point as one to four bytes: plain English letters take one byte, and a letter like é takes two.</p>`,
  formal: `<p><b>Unsigned.</b> A string of <i>w</i> bits <span class="m"><i>b</i><sub><i>w</i>−1</sub> … <i>b</i><sub>1</sub><i>b</i><sub>0</sub></span> stands for <span class="m"><i>b</i><sub><i>w</i>−1</sub>·2<sup><i>w</i>−1</sup> + … + <i>b</i><sub>1</sub>·2 + <i>b</i><sub>0</sub></span>, from 0 to <span class="m">2<sup><i>w</i></sup> − 1</span> (0…255 for 8 bits).</p>
<p><b>Two's complement.</b> The top bit is worth <span class="m">−2<sup><i>w</i>−1</sup></span> instead of <span class="m">+2<sup><i>w</i>−1</sup></span>, giving the range <span class="m">−2<sup><i>w</i>−1</sup></span> to <span class="m">2<sup><i>w</i>−1</sup> − 1</span>: −128…127 for 8 bits. To negate, flip every bit and add 1: 3 is <code>00000011</code>, −3 is <code>11111101</code>. Python's own <code>int</code> has no fixed width, so it never overflows; fixed widths matter in files, networks and hardware.</p>
<pre class="code"><span class="c1">bin</span>(13)          <span class="out">'0b1101'</span>
<span class="c1">int</span>("1101", 2)   <span class="out">13</span>
<span class="c1">hex</span>(255)         <span class="out">'0xff'</span>
<span class="c1">ord</span>("A")         <span class="out">65</span>
"é".<span class="c1">encode</span>()    <span class="out">b'\\xc3\\xa9'</span></pre>
<p><code>bin</code> and <code>hex</code> return strings; <code>0b…</code> and <code>0x…</code> are also valid int literals. <code>str.encode()</code> uses UTF-8 by default and returns a <code>bytes</code> object.</p>`,
  legend: [
    { c: "c1", sym: `<code>bin(n)</code>`, name: "Line about to run", desc: `In the trace, the statement that converts or encodes next. In the bit board, a bit that is on.` },
    { c: "c2", sym: `<code>m</code>`, name: "Variable that just changed", desc: `The name bound to the converted value; in the bit board, the hexadecimal spelling.` },
    { c: "c3", sym: `<code>0b1101</code>`, name: "Output", desc: `What the program printed: a value in decimal, or a string in binary or hex.` },
    { c: "c4", sym: `<code>11111101</code>`, name: "Bit pattern", desc: `The bits as stored. The same pattern means 253 unsigned or −3 in two's complement.` }
  ],
  steps: { title: "How to convert between decimal, binary and hex", items: [
    `Binary to decimal: write the place values 128, 64, 32, 16, 8, 4, 2, 1 above the bits and add the ones under a 1.`,
    `Decimal to binary: take the largest power of 2 that fits, write 1, subtract it, and continue down to 1, writing 0 for powers that do not fit.`,
    `Binary to hex: split into groups of four from the right and write each group as one hex digit (<code>1101</code> is d).`,
    `For an 8-bit signed value, read the top bit as −128 and add the rest as usual.`,
    `To find −<i>n</i> in two's complement, write <i>n</i>, flip every bit, then add 1.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">n = 13
b = <span class="c1">bin</span>(n)
<span class="c1">print</span>(b)
m = <span class="c1">int</span>("1101", 2)
<span class="c1">print</span>(m)
h = <span class="c1">hex</span>(255)
<span class="c1">print</span>(h)
<span class="c1">print</span>(0xFF, 0b11111111)</pre>`,
    lines: [
      { math: `<code><span class="c2">n</span> = 13</code>`, note: "13 = 8 + 4 + 1, so its bits are 1101." },
      { math: `<code><span class="c2">b</span> = '0b1101'</code>`, note: "bin returns a string that starts with the prefix 0b." },
      { math: `<code><span class="c2">m</span> = 13</code>`, note: "int with base 2 reads 1101 as 8 + 4 + 0 + 1." },
      { math: `<code><span class="c2">h</span> = '0xff'</code>`, note: "255 = 15 times 16 + 15, and f is the hex digit for 15." },
      { math: `<code>print(0xFF, 0b11111111)</code>`, note: "Both literals are the int 255; print shows ints in decimal." }
    ],
    answer: `<pre class="code"><span class="out">0b1101</span>
<span class="out">13</span>
<span class="out">0xff</span>
<span class="out">255 255</span></pre>`
  },
  why: `<p>Bits explain behaviour that otherwise looks strange: why a byte stops at 255, why an 8-bit counter jumps from 127 to −128, why a file of plain text can be smaller than a file of accented text, and why colours are written <code>#FF8800</code>. Reading binary and hex is everyday work wherever programs touch files, networks or hardware.</p>`,
  careers: [
    { role: "Embedded systems engineer", use: "Sets and tests individual bits in hardware registers and chooses 8-, 16- or 32-bit types so sensor values cannot overflow." },
    { role: "Network engineer", use: "Reads IPv4 addresses and subnet masks in binary, such as /24 meaning 24 one bits, and MAC addresses in hex." },
    { role: "Security analyst", use: "Reads hex dumps of files and network packets to spot malware signatures and malformed headers." },
    { role: "Front-end developer", use: "Writes colours as hex bytes, such as #F2B84B, and fixes text that shows as garbled characters because of a wrong encoding." },
    { role: "Database administrator", use: "Picks column types by their byte size and range and sets UTF-8 so that names in every language store correctly." },
    { role: "Game developer", use: "Packs flags into the bits of one integer and stores colours as 8-bit red, green and blue channels." }
  ],
  life: [
    "Reading a web colour code such as #FF0000 as full red, no green, no blue",
    "Seeing why a 1 TB drive shows less than 1000 GB in some operating systems",
    "Fixing an email or file where é shows up as Ã©",
    "Counting to 31 on one hand with each finger as a bit",
    "Understanding why an old game score rolls over after 255"
  ],
  fields: [
    { name: "Computer architecture", use: "Processors add and subtract signed integers in two's complement with the same circuit." },
    { name: "Networking", use: "Packet headers are defined bit by bit, and addresses are written in binary, decimal and hex." },
    { name: "Digital media", use: "Images and sound are stored as fixed-width numbers, such as 8 bits per colour channel." },
    { name: "Internationalisation", use: "UTF-8 is the standard encoding for text on the web and in most files." }
  ],
  prereqWhy: {
    "cs-programs": `The conversions here are shown as traced Python programs, so reading a program line by line and predicting its output comes first.`
  },
  unlocksWhy: {
    "cs-booleans": `A bool is a single bit of information, and Python stores True and False as the ints 1 and 0.`
  },
  mathWhy: {
    "place-value": `Binary is place value with base 2 instead of 10: each place is worth twice the one to its right, and a number is the sum of its digits times their place values.`,
    "exponents": `The place values are powers of 2, and <i>w</i> bits give <span class="m">2<sup><i>w</i></sup></span> patterns; the 8-bit ranges 0…255 and −128…127 come from <span class="m">2<sup>8</sup> − 1</span> and <span class="m">2<sup>7</sup></span>.`
  },
  beyond: [
    { field: "Computer Organisation", why: "Machine arithmetic, overflow and floating-point formats are all built on these bit patterns." },
    { field: "Computer Networks", why: "Protocols specify headers field by field in bits and bytes." },
    { field: "Cryptography", why: "Ciphers and hash functions work on bytes and bitwise operations." }
  ],
  mistakes: [
    { wrong: `Reading binary from the left with place values 1, 2, 4, 8.`, fix: `The rightmost bit is worth 1. In <code>1101</code> the leftmost 1 is worth 8, so the value is 13, not 11.` },
    { wrong: `Thinking <code>bin(13)</code> returns a number.`, fix: `It returns the string <code>'0b1101'</code>. Use <code>int("1101", 2)</code> or <code>int("0b1101", 2)</code> to get the int back.` },
    { wrong: `Assuming one character is always one byte.`, fix: `In UTF-8, <code>len("é")</code> is 1 but <code>len("é".encode())</code> is 2. Only code points below 128 take one byte.` },
    { wrong: `Saying 8 signed bits reach 128.`, fix: `The range is −128 to 127. There are 128 negative values but only 127 positive ones, because zero uses a pattern with the top bit 0.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(<span class="c1">int</span>("101101", 2))</pre>`, a: `<pre class="code"><span class="out">45</span></pre><span class="m">32 + 8 + 4 + 1 = 45</span>.` },
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(<span class="c1">bin</span>(37), <span class="c1">hex</span>(200))</pre>`, a: `<pre class="code"><span class="out">0b100101 0xc8</span></pre>37 = 32 + 4 + 1. 200 = 12 · 16 + 8, and c is the hex digit for 12.` },
    { q: `In 8-bit two's complement, what value does <code>11111011</code> stand for? Check it with Python, where the pattern is first read as unsigned.<pre class="code">u = <span class="c1">int</span>("11111011", 2)
<span class="c1">print</span>(u, u - 256)</pre>`, a: `<pre class="code"><span class="out">251 -5</span></pre>Unsigned it is 251. The top bit is worth −128 instead of +128, a difference of 256, so the signed value is <span class="m">251 − 256 = −5</span>. Check: 5 is <code>00000101</code>, flip to <code>11111010</code>, add 1 to get <code>11111011</code>.` },
    { q: `What does this print?<pre class="code">data = "café".<span class="c1">encode</span>()
<span class="c1">print</span>(<span class="c1">len</span>("café"), <span class="c1">len</span>(data))
<span class="c1">print</span>(data)</pre>`, a: `<pre class="code"><span class="out">4 5</span>
<span class="out">b'caf\\xc3\\xa9'</span></pre>The string has four characters. In UTF-8, c, a and f take one byte each and é takes two (C3 A9), five bytes in all.` }
  ],
  origin: `Gottfried Wilhelm Leibniz described binary arithmetic in his 1703 paper <i>Explication de l'Arithmétique Binaire</i>. Claude Shannon showed in his 1937 master's thesis that switching circuits can carry out Boolean logic, and the word <i>bit</i>, credited to John Tukey, appeared in print in Shannon's 1948 paper on information theory. UTF-8 was designed by Ken Thompson and Rob Pike in 1992.`
};
