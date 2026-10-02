window.ARITH = window.ARITH || {};
ARITH["cs-io"] = {
  title: "Input, Output and Formatting",
  short: "input() returns a str; print, sep, end and f-strings",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · input and output",
  hero: `<code><span class="c1">print</span>(f"<span class="c3">Total: {</span><span class="c2">total</span><span class="c3">:.2f}</span>")</code>`,
  lede: `A program talks to its user through input and output. <code>input()</code> reads a line of text from the keyboard, and <code>print()</code> writes values to the screen, with f-strings to control exactly how numbers look.`,
  plain: `<p><code>input("Name? ")</code> shows the prompt, waits for the user to type a line and press Enter, and gives back what they typed. It always gives back text, a str, even if the user typed digits. If you want a number, convert it: <code>int("42")</code> is the integer 42 and <code>float("7.5")</code> is the float 7.5.</p>
<p>Forgetting to convert is the classic bug. <code>"3" + "4"</code> joins two strings into <code>"34"</code>, while <code>3 + 4</code> is 7.</p>
<p><code>print</code> writes its values separated by spaces and then moves to a new line. You can change both: <code>sep</code> sets what goes between the values and <code>end</code> sets what goes at the end.</p>
<p>An <b>f-string</b> is a string with an <code>f</code> in front, like <code>f"Total: {total:.2f}"</code>. Python fills in each <code>{…}</code> with the value of the expression inside. After a colon you can give a <b>format spec</b>: <code>.2f</code> means a fixed number of digits, 2, after the decimal point.</p>`,
  formal: `<p><b>input.</b> <code>input(prompt)</code> writes <code>prompt</code> without a newline, reads one line from standard input, removes the trailing newline and returns it as a str. <code>int(s)</code> accepts an optional sign and decimal digits, with surrounding whitespace allowed (<code>int(" 42 ")</code> is 42); anything else, such as <code>"2.5"</code>, raises <code>ValueError: invalid literal for int() with base 10</code>. <code>float(s)</code> accepts decimal and exponent forms.</p>
<p><b>print.</b> <code>print(*values, sep=" ", end="\\n")</code> writes <code>str()</code> of each value, <code>sep</code> between them and <code>end</code> after the last.</p>
<p><b>f-strings.</b> <code>f"…{expr:spec}…"</code> evaluates <code>expr</code> and formats it with <code>spec</code>. Common specs: <code>.2f</code> fixed point with 2 decimals, <code>,.2f</code> with thousands separators, <code>&gt;5</code> right-aligned in 5 characters, <code>03d</code> an int padded with zeros to 3 digits. Rounding in <code>.nf</code> and in <code>round()</code> works on the exact binary value of the float, and an exact tie goes to the even digit.</p>
<pre class="code">f"{1234567.891:,.2f}"  <span class="out">'1,234,567.89'</span>
f"{42:&gt;5}|"           <span class="out">'   42|'</span>
f"{3:03d}"            <span class="out">'003'</span>
f"{0.125:.2f}"        <span class="out">'0.12'</span>
f"{2.675:.2f}"        <span class="out">'2.67'</span>
round(2.5), round(3.5) <span class="out">(2, 4)</span></pre>`,
  legend: [
    { c: "c1", sym: `<code>x = int(a)</code>`, name: "Line about to run", desc: `The statement Python runs next, such as a call to <code>input</code> that will wait for a line.` },
    { c: "c2", sym: `<code>a = '3'</code>`, name: "Variable that just changed", desc: `The name just bound. Quotes in the value show it is a str; no quotes means a number.` },
    { c: "c3", sym: `<code>Total: 7.50</code>`, name: "Output", desc: `What the program wrote, including each prompt and the line the user typed after it.` }
  ],
  steps: { title: "How to read a number and print it neatly", items: [
    `Call <code>input</code> with a prompt that ends in a space, such as <code>"Hours? "</code>.`,
    `Convert the str it returns with <code>int()</code> or <code>float()</code> before any arithmetic.`,
    `Compute with the converted values.`,
    `Print with an f-string, putting each value in braces and a format spec after a colon, such as <code>{pay:.2f}</code>.`,
    `Use <code>sep</code> and <code>end</code> only when the default single space and newline are not what you want.`
  ] },
  example: {
    prompt: `Trace this program when the user types <code>Ada</code> and then <code>7.5</code>, and give everything on the screen.<pre class="code">name = <span class="c1">input</span>("Name? ")
hours = <span class="c1">float</span>(<span class="c1">input</span>("Hours? "))
rate = 12
pay = hours * rate
<span class="c1">print</span>(f"Pay for {name}: {pay:.2f}")</pre>`,
    lines: [
      { math: `<code><span class="c2">name</span> = 'Ada'</code>`, note: "The prompt and the typed line appear on screen. input returns the str 'Ada'." },
      { math: `<code><span class="c2">hours</span> = 7.5</code>`, note: "input returns '7.5' and float converts it to the number 7.5." },
      { math: `<code><span class="c2">rate</span> = 12</code>`, note: "An int literal." },
      { math: `<code><span class="c2">pay</span> = 7.5 * 12 = 90.0</code>`, note: "A float times an int is a float." },
      { math: `<code>{pay:.2f}</code> → <code>90.00</code>`, note: "The format spec shows exactly two digits after the point." }
    ],
    answer: `<pre class="code"><span class="out">Name? Ada</span>
<span class="out">Hours? 7.5</span>
<span class="out">Pay for Ada: 90.00</span></pre>`
  },
  why: `<p>Almost every program reads data and reports results. Input always arrives as text, from a keyboard, a file or a web form, so converting and validating it is a daily task, and a missing conversion gives answers like 34 for 3 + 4 without any error. Formatting matters too: money needs exactly two decimals, tables need aligned columns, and knowing that formatting rounds the binary value to even explains why 2.675 shows as 2.67.</p>`,
  careers: [
    { role: "Backend developer", use: "Converts and validates the strings that arrive in web form fields and query parameters before using them." },
    { role: "Data engineer", use: "Parses text fields from CSV files into ints and floats and handles the ValueError rows that do not convert." },
    { role: "DevOps engineer", use: "Writes command-line tools that prompt for options and print aligned status tables." },
    { role: "Financial software developer", use: "Formats amounts to two decimals and uses the decimal module where binary float rounding is not acceptable." },
    { role: "Scientific programmer", use: "Prints results with a fixed number of significant digits using format specs such as .3e." },
    { role: "Technical support engineer", use: "Reads program logs whose lines were written with print and f-strings." }
  ],
  life: [
    "A checkout screen that shows 7.50, not 7.5",
    "A form that rejects a typed age of twenty because it wants digits",
    "A receipt with prices lined up in a column",
    "Splitting a bill and seeing each share rounded to two decimals",
    "A chat program that prints a prompt and waits for you to type"
  ],
  fields: [
    { name: "Human-computer interaction", use: "Designs prompts, messages and input validation that people can use without errors." },
    { name: "Numerical computing", use: "Controls how floating-point results are rounded and displayed." },
    { name: "Operating systems", use: "Provides standard input and output streams that input and print read and write." }
  ],
  prereqWhy: {
    "cs-types": `<code>input</code> returns a str and arithmetic needs an int or a float, so the difference between types and how to convert between them comes first.`
  },
  unlocksWhy: {
    "cs-conditionals": `Conditionals usually test values that the user typed, after they have been read with <code>input</code> and converted with <code>int</code> or <code>float</code>.`
  },
  mathWhy: {
    "rounding": `<code>:.2f</code> rounds to the hundredths place. Unlike the school rule of rounding halves up, Python sends an exact tie to the even digit (<code>round(2.5)</code> is 2) and rounds the stored binary value, which for 2.675 is slightly below the tie.`
  },
  beyond: [
    { field: "Files and Exceptions", why: "Reading lines from a file works like input, and a ValueError from int() can be caught and handled." },
    { field: "Computer Organisation", why: "Explains the binary floating-point values that formatting rounds." },
    { field: "Software Engineering", why: "Input validation is a core part of writing programs that cannot be crashed by bad data." }
  ],
  mistakes: [
    { wrong: `Adding two inputs directly: <code>input("a? ") + input("b? ")</code>.`, fix: `Both are strs, so <code>+</code> joins them: 3 and 4 give 34. Convert first: <code>int(input("a? ")) + int(input("b? "))</code>.` },
    { wrong: `Calling <code>int</code> on a decimal string like <code>"2.5"</code>.`, fix: `It raises <code>ValueError</code>. Use <code>float("2.5")</code>, or <code>int(float("2.5"))</code> if you want 2.` },
    { wrong: `Writing <code>print("Total:" + total)</code> with a number <code>total</code>.`, fix: `A str and a number cannot be joined with <code>+</code>. Use <code>print("Total:", total)</code> or an f-string <code>f"Total: {total}"</code>.` },
    { wrong: `Expecting <code>f"{2.675:.2f}"</code> to give 2.68.`, fix: `2.675 is stored as a value slightly below 2.675, so it rounds to 2.67. Use the decimal module when exact decimal rounding is required.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code"><span class="c1">print</span>("3" + "4", 3 + 4)</pre>`, a: `<pre class="code"><span class="out">34 7</span></pre>Two strings join; two ints add. <code>print</code> puts one space between the two values.` },
    { q: `The user types <code>6</code>. What appears on the screen?<pre class="code">n = <span class="c1">input</span>("n? ")
<span class="c1">print</span>(n * 2, <span class="c1">int</span>(n) * 2)</pre>`, a: `<pre class="code"><span class="out">n? 6</span>
<span class="out">66 12</span></pre><code>n</code> is the str <code>'6'</code>, and a str times 2 repeats it. <code>int(n)</code> is the number 6, and 6 · 2 = 12.` },
    { q: `What does this print?<pre class="code"><span class="c1">print</span>(f"{1.75:.1f}", f"{2.25:.1f}", <span class="c1">round</span>(0.5), <span class="c1">round</span>(1.5))</pre>`, a: `<pre class="code"><span class="out">1.8 2.2 0 2</span></pre>1.75 and 2.25 are exact in binary, so each is a true tie, and a tie goes to the even digit: 1.8 and 2.2. In the same way <code>round(0.5)</code> is 0 and <code>round(1.5)</code> is 2.` },
    { q: `The user types <code>twenty</code>. What happens?<pre class="code">age = <span class="c1">int</span>(<span class="c1">input</span>("Age? "))
<span class="c1">print</span>(age + 1)</pre>`, a: `<pre class="code"><span class="out">Age? twenty</span>
<span class="out">ValueError: invalid literal for int() with base 10: 'twenty'</span></pre><code>input</code> returns <code>'twenty'</code>, which is not an integer literal, so <code>int</code> raises a <code>ValueError</code> and the second line never runs.` }
  ]
};
