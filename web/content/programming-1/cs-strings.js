window.ARITH = window.ARITH || {};
ARITH["cs-strings"] = {
  title: "Strings",
  short: "Index, slice and loop over text that never changes",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · strings",
  hero: `<code><span class="c2">s</span> = <span class="c4">"python"</span>; s[1:4]</code>`,
  lede: `A string is a sequence of characters, numbered from 0. You can read one character by its index, cut out a piece with a slice, and loop over the characters, but you can never change a string in place.`,
  plain: `<p>Text in a program is a <b>string</b>: <code>"python"</code> is six characters in a row. Each character has a position called its <b>index</b>, and counting starts at 0, so <code>s[0]</code> is <code>'p'</code> and the last one, <code>'n'</code>, is <code>s[5]</code>. Negative indexes count back from the end: <code>s[-1]</code> is the last character.</p>
<p>A <b>slice</b> cuts out a piece. <code>s[1:4]</code> starts at index 1 and stops just before index 4, giving <code>'yth'</code>. Leave out an end to go all the way to it, and add a step to skip or go backwards: <code>s[::-1]</code> is the string reversed.</p>
<p>Strings are <b>immutable</b>: once made, a string never changes. <code>s.upper()</code> does not alter <code>s</code>; it builds a new string and returns it. To keep the result, bind a name to it.</p>`,
  formal: `<p><b>Indexing.</b> For a string <code>s</code> of length <code>len(s)</code>, <code>s[i]</code> is the character at index <code>i</code> for <code>0 &lt;= i &lt; len(s)</code>; a negative <code>i</code> means <code>s[len(s) + i]</code>. Any other index raises <code>IndexError: string index out of range</code>. A character is itself a string of length 1.</p>
<p><b>Slicing.</b> <code>s[a:b:c]</code> takes the characters from index <code>a</code> up to, but not including, index <code>b</code>, moving by <code>c</code> (default 1). A missing <code>a</code> or <code>b</code> means the start or end (the end or start when <code>c</code> is negative), and ends beyond the string are cut back to it, so a slice never raises. For <code>0 &lt;= a &lt;= b &lt;= len(s)</code>, <code>len(s[a:b])</code> is <code>b - a</code>.</p>
<p><b>Immutability.</b> <code>s[0] = "x"</code> raises <code>TypeError: 'str' object does not support item assignment</code>. Methods such as <code>upper</code>, <code>lower</code>, <code>strip</code> and <code>replace</code> return new strings; <code>find</code> returns an index (−1 if absent). <code>+</code> joins strings, <code>*</code> repeats one, <code>sub in s</code> tests whether <code>sub</code> occurs in <code>s</code>, and <code>for ch in s</code> visits the characters in order.</p>`,
  legend: [
    { c: "c1", sym: `<code>c = s[1:4]</code>`, name: "Line about to run", desc: "Python works out the index or slice on the right before binding the name." },
    { c: "c2", sym: `<code>c = 'yth'</code>`, name: "Variable that just changed", desc: "The name is bound to a new string; the original string is untouched." },
    { c: "c4", sym: `<code>"python"</code>`, name: "String object", desc: "An immutable object. Every slice or method call makes another object instead of changing this one." },
    { c: "c3", sym: `<code>p n yth</code>`, name: "Output", desc: "print shows strings without their quotes." }
  ],
  steps: { title: "How to work out an index or a slice", items: [
    `Write the characters in a row and number them 0, 1, 2, … underneath; under that, −len, …, −2, −1.`,
    `For <code>s[i]</code>, read the character above <code>i</code>; if there is none, it is an IndexError.`,
    `For <code>s[a:b]</code>, start at <code>a</code> and take characters until just before <code>b</code>; fill in a missing end with the start or the end of the string.`,
    `For a step <code>c</code>, take every <code>c</code>th character; a negative step walks right to left.`,
    `For a method call, write the new string it returns and leave the original as it was.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">s = <span class="c4">"python"</span>
a = s[0]
b = s[-1]
c = s[1:4]
d = s[::-1]
e = s[2:100]
<span class="c1">print</span>(a, b, c, d, e)</pre>`,
    lines: [
      { math: `p y t h o n → indexes 0 1 2 3 4 5`, note: "Six characters, so the last index is 5, and -1 is the same character as 5." },
      { math: `<code><span class="c2">a</span> = 'p'</code>`, note: "Index 0 is the first character." },
      { math: `<code><span class="c2">b</span> = 'n'</code>`, note: "Index -1 is the last character." },
      { math: `<code><span class="c2">c</span> = 'yth'</code>`, note: "Indexes 1, 2, 3: the slice stops before 4." },
      { math: `<code><span class="c2">d</span> = 'nohtyp'</code>`, note: "Step -1 with no ends walks from the last character to the first." },
      { math: `<code><span class="c2">e</span> = 'thon'</code>`, note: "The end 100 is past the string, so the slice stops at the end without an error." }
    ],
    answer: `<pre class="code"><span class="out">p n yth nohtyp thon</span></pre>`
  },
  why: `<p>Names, messages, file lines, web pages, DNA sequences and passwords are all strings, so most programs spend much of their time taking text apart and building new text. Knowing exactly where a slice starts and stops, and that every operation makes a new string, prevents off-by-one errors and the classic bug of calling a method and losing its result.</p>`,
  careers: [
    { role: "Bioinformatician", use: "Treats DNA as strings of A, C, G and T, slicing out genes by position and searching for motifs with in and find." },
    { role: "Data engineer", use: "Cleans text fields from CSV exports with strip, lower and replace before loading them into a database." },
    { role: "Natural language processing engineer", use: "Splits text into words and characters, the first step before counting words or training a language model." },
    { role: "Web developer", use: "Builds URLs and HTML from pieces of text and checks user input such as email addresses." },
    { role: "Security analyst", use: "Searches log lines for suspicious substrings such as failed-login messages and extracts the IP address with slicing." },
    { role: "Localization engineer", use: "Handles Unicode text in many scripts, where len counts characters rather than bytes." }
  ],
  life: [
    "Reading a word backwards to check whether it is a palindrome",
    "Taking the first three letters of a month, Jan, Feb, Mar",
    "The last four digits of a card number shown on a receipt",
    "Counting the vowels in your name",
    "Finding a word with a search box in a long document"
  ],
  fields: [
    { name: "Biology", use: "Genome sequences are long strings, and finding a gene is searching for a substring." },
    { name: "Linguistics", use: "Corpus studies count words, prefixes and suffixes in millions of strings of text." },
    { name: "Cryptography", use: "Classical ciphers such as Caesar shifts transform a message one character at a time." }
  ],
  prereqWhy: {
    "cs-for": "A for loop over a string visits its characters one at a time, and <code>for i in range(len(s))</code> visits its indexes, which is how you count, search or build strings character by character.",
    "cs-functions": "String methods are functions attached to the string: <code>s.replace(\"a\", \"@\")</code> takes arguments and returns a new string, and <code>len(s)</code> is a call whose return value you use."
  },
  unlocksWhy: {
    "cs-lists": "Lists use the same indexing, negative indexes, slices, <code>len</code>, <code>in</code> and for loops as strings. The big difference is that lists are mutable, so <code>xs[0] = 5</code> works where <code>s[0] = \"x\"</code> fails.",
    "cs-files": "Reading a text file gives each line as a string ending in <code>\"\\n\"</code>; <code>strip</code>, <code>split</code> and slicing turn those strings into data you can convert with <code>int</code>."
  },
  beyond: [
    { field: "Theory of Computation", why: "Formal languages and regular expressions describe sets of strings and the machines that recognise them." },
    { field: "Algorithms", why: "String matching, edit distance and compression are classic algorithm problems over strings." },
    { field: "Computer Systems", why: "Characters are stored as Unicode code points and encoded into bytes, often with UTF-8." }
  ],
  mistakes: [
    { wrong: `Using <code>s[len(s)]</code> for the last character.`, fix: `Indexes go from 0 to <code>len(s) - 1</code>, so this raises IndexError. Use <code>s[-1]</code> or <code>s[len(s) - 1]</code>.` },
    { wrong: `Expecting <code>s[1:4]</code> to include the character at index 4.`, fix: `A slice stops before its end index. <code>s[1:4]</code> has 4 − 1 = 3 characters.` },
    { wrong: `Calling <code>s.upper()</code> on its own line and expecting <code>s</code> to change.`, fix: `Strings are immutable; the method returns a new string. Keep it: <code>s = s.upper()</code>.` },
    { wrong: `Trying to change one character with <code>s[0] = "C"</code>.`, fix: `That raises TypeError. Build a new string: <code>s = "C" + s[1:]</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">s = <span class="c4">"computer"</span>
<span class="c1">print</span>(s[0], s[3], s[-2])</pre>`, a: `<pre class="code"><span class="out">c p e</span></pre>Index 0 is <code>c</code>, index 3 is the fourth character <code>p</code>, and index −2 is the second from the end, <code>e</code>.` },
    { q: `What does this print?<pre class="code">s = <span class="c4">"computer"</span>
<span class="c1">print</span>(s[2:5])
<span class="c1">print</span>(s[:3])
<span class="c1">print</span>(s[5:])</pre>`, a: `<pre class="code"><span class="out">mpu</span>
<span class="out">com</span>
<span class="out">ter</span></pre>Indexes 2, 3, 4; then 0, 1, 2; then 5 to the end. <code>s[:3] + s[3:]</code> is always the whole string.` },
    { q: `What does this print?<pre class="code">name = <span class="c4">"  Ada Lovelace "</span>
clean = name.strip()
<span class="c1">print</span>(clean.upper())
<span class="c1">print</span>(clean.replace(<span class="c4">"a"</span>, <span class="c4">"@"</span>))
<span class="c1">print</span>(<span class="c1">len</span>(name), <span class="c1">len</span>(clean))</pre>`, a: `<pre class="code"><span class="out">ADA LOVELACE</span>
<span class="out">Ad@ Lovel@ce</span>
<span class="out">15 12</span></pre><code>strip</code> removes the spaces at both ends. <code>replace</code> is case-sensitive, so the capital A stays. Each method returns a new string, and <code>name</code> still has its 15 characters, spaces included.` },
    { q: `What happens when this runs?<pre class="code">word = <span class="c4">"level"</span>
<span class="c1">print</span>(word == word[::-1])
s = <span class="c4">"abc"</span>
s[0] = <span class="c4">"x"</span></pre>`, a: `<pre class="code"><span class="out">True</span>
<span class="out">TypeError: 'str' object does not support item assignment</span></pre>"level" reversed is "level", a palindrome. Then the item assignment fails, because a string cannot be changed in place.` }
  ],
  origin: `<p>Python 3.0, released in 2008, made every <code>str</code> a sequence of Unicode characters, so <code>len</code> and indexing count characters in any script; Python 2's default string type held bytes.</p>`
};
