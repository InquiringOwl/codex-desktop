window.ARITH = window.ARITH || {};
ARITH["cs-files"] = {
  title: "Files and Exceptions",
  short: "Reading and writing text files; try, except, else, finally",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · files and exceptions",
  hero: `<code><span class="c1">with</span> open(<span class="c3">"scores.txt"</span>) <span class="c1">as</span> <span class="c2">f</span>:</code>`,
  lede: `A program keeps its data after it stops by writing it to a file, and reads it back as lines of text. When a step can fail, such as converting a bad line to a number or opening a missing file, a <code>try</code> statement lets the program handle the error and carry on.`,
  plain: `<p>Variables vanish when a program ends. A file on disk does not. A text file is just characters, usually split into lines, and Python reads it the same way you would: one line at a time, from the top.</p>
<p><code>open("scores.txt")</code> gives you a file object. Looping over it hands you each line as a string, and each line still ends with the newline character that separated it from the next. <code>int</code> and <code>float</code> ignore that newline, but for text you usually call <code>line.strip()</code> to remove it. Writing <code>with</code> before <code>open</code> makes Python close the file for you when the block ends.</p>
<p>Real files contain surprises: a blank line, a word where a number should be, a file that is not there at all. Python reports each of these by raising an <b>exception</b>, which normally stops the program with a traceback. If you put the risky line inside <code>try</code> and say what to do in <code>except</code>, the program handles that case and keeps going.</p>`,
  formal: `<p><b>Files.</b> <code>open(name, mode)</code> returns a file object. Mode <code>"r"</code> (the default) reads and raises <code>FileNotFoundError</code> if the file does not exist; <code>"w"</code> creates the file or empties an existing one; <code>"a"</code> appends to the end. Iterating over a text file yields its lines as <code>str</code>, each keeping its <code>"\\n"</code> (the last line has one only if the file ends with a newline). <code>f.read()</code> returns the rest of the file as one string. <code>f.write(s)</code> writes exactly <code>s</code>, adds no newline, and returns the number of characters written. <code>with open(...) as f:</code> closes the file when the block is left, normally or by an exception. <code>int(s)</code> accepts surrounding whitespace, so <code>int(" 90\\n")</code> is 90, and raises <code>ValueError</code> if the rest is not an integer literal.</p>
<pre class="code">try:
    <i>block</i>              # runs first
except ValueError:
    <i>handler</i>            # runs if block raised a ValueError
else:
    <i>no-error block</i>     # runs if block raised nothing
finally:
    <i>cleanup</i>            # always runs, last</pre>
<p><b>Exceptions.</b> When a statement in the <code>try</code> block raises, the rest of that block is skipped and the first <code>except</code> clause whose type matches handles it; <code>except T as e</code> binds the exception object to <code>e</code>. If no clause matches, the exception propagates to the caller, after <code>finally</code> has run.</p>`,
  legend: [
    { c: "c1", sym: `<code>n = int(line)</code>`, name: "Line about to run", desc: `The statement Python runs next. After an exception it jumps to the matching <code>except</code> line.` },
    { c: "c2", sym: `<code>line</code>`, name: "Variable that just changed", desc: `A name the last step rebound, such as the current line of the file or a running total.` },
    { c: "c3", sym: `<code>total 252</code>`, name: "Output", desc: `Text printed so far, including an error message when one ends the program.` },
    { c: "c4", sym: `<code>f</code>`, name: "Objects", desc: `The file object <code>open</code> returned. The variable refers to it; the file's text stays on disk.` }
  ],
  steps: { title: "How to read a data file safely", items: [
    `Open the file with <code>with open(name) as f:</code> so it is closed for you.`,
    `Loop with <code>for line in f:</code> and remember that each <code>line</code> ends with <code>"\\n"</code>.`,
    `Clean the line with <code>line.strip()</code>, or <code>line.split(",")</code> for comma-separated fields.`,
    `Put only the conversion that can fail inside <code>try</code>, and catch the exact exception, such as <code>ValueError</code>.`,
    `Use <code>else</code> for the work that should happen only when the conversion succeeded.`,
    `Catch <code>FileNotFoundError</code> around <code>open</code> if the file may be missing, and say which file it was.`
  ] },
  example: {
    prompt: `The file <code>temps.txt</code> holds three lines: <code>18</code>, <code>21</code> and <code>24</code>. Trace this program and give its output.<pre class="code">total = 0
count = 0
with open("temps.txt") as f:
    for line in f:
        total += int(line)
        count += 1
<span class="c1">print</span>(count, total / count)</pre>`,
    lines: [
      { math: `<code><span class="c2">f</span></code> = file object`, note: "open finds temps.txt and returns a file object for reading." },
      { math: `<code><span class="c2">line</span> = '18\\n'</code>`, note: "The first line is a str and still ends with its newline." },
      { math: `<code><span class="c2">total</span> = 18</code>, <code><span class="c2">count</span> = 1</code>`, note: "int ignores the newline and gives 18." },
      { math: `<code><span class="c2">total</span> = 39</code>, then <code>63</code>`, note: "The next two lines add 21 and 24, and count reaches 3." },
      { math: `<code>total / count</code> = 21.0`, note: "The with block has ended and closed the file. 63 / 3 is a float." }
    ],
    answer: `<pre class="code"><span class="out">3 21.0</span></pre>`
  },
  why: `<p>Almost every useful program reads data that someone else produced: a CSV export, a log, a settings file. That data is never perfect, and a program that stops with a traceback on the first bad line is not much use. Files teach that input lives outside the program, and exceptions teach how to plan for the steps that can fail instead of hoping they won't.</p>`,
  careers: [
    { role: "Data engineer", use: "Writes import jobs that read large CSV and log files, skip malformed rows and report how many were rejected." },
    { role: "Site reliability engineer", use: "Parses server log files line by line to find error rates and slow requests." },
    { role: "Bioinformatician", use: "Reads sequence files such as FASTA one line at a time, because they are too large to load at once." },
    { role: "Backend developer", use: "Loads configuration files at startup and handles a missing or invalid file with a clear message." },
    { role: "Systems administrator", use: "Scripts that read inventories and write reports, appending to log files with mode a." },
    { role: "QA engineer", use: "Writes tests that feed broken input files to a program and check that it raises or handles the right exception." }
  ],
  life: [
    "Saving a document so it is still there after the computer restarts",
    "A to-do list kept in a text file, one task per line",
    "A bank statement downloaded as a CSV file",
    "An app that says the file could not be found instead of crashing",
    "Skipping a smudged entry when adding up a column of handwritten numbers"
  ],
  fields: [
    { name: "Operating systems", use: "File systems store files as named sequences of bytes and hand programs a file object to read them." },
    { name: "Databases", use: "Durable storage builds on writing to files in a way that survives crashes." },
    { name: "Data science", use: "Most data arrives as text files that must be parsed and cleaned before analysis." }
  ],
  prereqWhy: {
    "cs-strings": `Every line read from a text file is a string, so cleaning it with <code>strip</code>, splitting it with <code>split</code> and converting it with <code>int</code> are string skills.`,
    "cs-testing": `Testing and debugging teach you to read a traceback and name the exception it reports. An <code>except</code> clause catches exactly the exception type you would have seen there.`
  },
  unlocksWhy: {
    "cs-modules": "Modules such as <code>csv</code> and <code>json</code> are imported to read and write data files in standard formats."
  },
  beyond: [
    { field: "Operating Systems", why: "How files, buffers and file descriptors work below the open call." },
    { field: "Software Engineering", why: "Error handling policy: which exceptions to catch, which to let propagate, and how to log them." },
    { field: "Databases", why: "Storing structured data so it can be queried, rather than reading whole files." }
  ],
  mistakes: [
    { wrong: `Printing each line with <code>print(line)</code> and getting a blank line after every one.`, fix: `The line already ends with <code>"\\n"</code> and <code>print</code> adds another. Print <code>line.strip()</code>, or use <code>print(line, end="")</code>.` },
    { wrong: `Opening a file with mode <code>"w"</code> to add one more line.`, fix: `<code>"w"</code> empties the file first. Use <code>"a"</code> to append.` },
    { wrong: `Wrapping the whole program in <code>try</code> with a bare <code>except:</code>.`, fix: `That hides every error, including your own typos. Put only the risky line in <code>try</code> and catch the specific exception, such as <code>ValueError</code>.` },
    { wrong: `Writing numbers with <code>f.write(n)</code>.`, fix: `<code>write</code> needs a str and adds no newline: write <code>f.write(str(n) + "\\n")</code> or <code>f.write(f"{n}\\n")</code>.` }
  ],
  practice: [
    { q: `The file <code>names.txt</code> holds the lines <code>Ann</code> and <code>Bo</code>. What does this print?<pre class="code">with open("names.txt") as f:
    for line in f:
        <span class="c1">print</span>(line)</pre>`,
      a: `<pre class="code"><span class="out">Ann

Bo
</span></pre>Each line is <code>'Ann\\n'</code> or <code>'Bo\\n'</code>, and <code>print</code> adds its own newline after it, so a blank line follows each name. <code>print(line.strip())</code> removes them.` },
    { q: `What does this print?<pre class="code">for s in ["4", "x", "6"]:
    try:
        n = int(s)
    except ValueError:
        <span class="c1">print</span>("bad", s)
    else:
        <span class="c1">print</span>("ok", n * 2)
    finally:
        <span class="c1">print</span>("next")</pre>`,
      a: `<pre class="code"><span class="out">ok 8
next
bad x
next
ok 12
next</span></pre><code>int("x")</code> raises <code>ValueError</code>, so that pass runs <code>except</code> instead of <code>else</code>. <code>finally</code> runs on every pass, last.` },
    { q: `What does this print?<pre class="code">with open("log.txt", "w") as f:
    f.write("start\\n")
with open("log.txt", "w") as f:
    f.write("again\\n")
with open("log.txt", "a") as f:
    f.write("end\\n")
with open("log.txt") as f:
    <span class="c1">print</span>(f.read(), end="")</pre>`,
      a: `<pre class="code"><span class="out">again
end</span></pre>The second <code>"w"</code> open empties the file, so <code>start</code> is lost. Mode <code>"a"</code> adds <code>end</code> after <code>again</code>.` },
    { q: `The file <code>scores.txt</code> holds <code>90</code>, <code>85</code> and <code>77</code>, and there is no file called <code>nope.txt</code>. What does this print?<pre class="code">def read_total(name):
    try:
        with open(name) as f:
            total = 0
            for line in f:
                total += int(line)
            return total
    except FileNotFoundError:
        return 0

<span class="c1">print</span>(read_total("scores.txt"), read_total("nope.txt"))</pre>`,
      a: `<pre class="code"><span class="out">252 0</span></pre>The first call reads 90 + 85 + 77 = 252. In the second, <code>open</code> raises <code>FileNotFoundError</code>, the <code>except</code> clause handles it, and the function returns 0 instead of crashing.` }
  ],
  origin: `<p>John Goodenough's 1975 paper on exception handling set out the ideas most languages now share: a failing operation raises a named condition, and a handler chosen by its type deals with it. Python's <code>with</code> statement, which closes files automatically, was added in Python 2.5 (2006) by PEP 343.</p>`
};
