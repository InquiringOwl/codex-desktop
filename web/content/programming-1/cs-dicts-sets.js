window.ARITH = window.ARITH || {};
ARITH["cs-dicts-sets"] = {
  title: "Dictionaries, Sets and Tuples",
  short: "Key-value lookup, collections without duplicates, fixed records",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · dicts, sets and tuples",
  hero: `<code><span class="c2">counts</span>[w] = counts.get(w, 0) + 1</code>`,
  lede: `A dictionary finds a value by its key instead of by its position. A set keeps each value at most once, and a tuple is a fixed sequence that cannot be changed after it is made.`,
  plain: `<p>A list answers "what is at position 3?". Often you want to ask "what is the phone number for Ana?" instead. A <b>dictionary</b>, or dict, stores pairs: a key such as <code>"ana"</code> and the value that goes with it. <code>phones["ana"]</code> looks the number up directly, without searching.</p>
<p>A <b>set</b> is a collection where duplicates vanish: putting 3 into a set that already has 3 changes nothing. Sets are good for questions like "which students are in both classes?".</p>
<p>A <b>tuple</b> is like a list that is sealed once it is made: <code>point = (3, 4)</code>. You can read <code>point[0]</code>, but you cannot change it. Tuples suit small fixed groups of values, such as a pair of coordinates or the two results a function returns.</p>`,
  formal: `<p><b>Dicts.</b> A dict maps keys to values: <code>d = {"a": 1, "b": 2}</code>. <code>d[k]</code> returns the value for <code>k</code> and raises <code>KeyError</code> if <code>k</code> is not a key; <code>d.get(k)</code> returns <code>None</code> instead, and <code>d.get(k, default)</code> returns <code>default</code>. <code>d[k] = v</code> inserts a new key or replaces the value of an existing one, so each key appears once. <code>k in d</code> tests keys, not values. Since Python 3.7 a dict keeps its keys in insertion order; <code>d.keys()</code>, <code>d.values()</code> and <code>d.items()</code> give them in that order. Keys must be <b>hashable</b>: ints, strs and tuples of hashable items are; lists, dicts and sets are not, and using one as a key raises <code>TypeError</code>. Dicts are mutable, so <code>e = d</code> makes an alias.</p>
<p><b>Sets.</b> A set is a mutable, unordered collection of distinct hashable items: <code>{1, 2, 2}</code> is <code>{1, 2}</code>. <code>{}</code> is an empty dict; an empty set is <code>set()</code>. <code>a | b</code> is the union, <code>a &amp; b</code> the intersection and <code>a - b</code> the difference. <code>s.add(x)</code> inserts, <code>s.remove(x)</code> raises <code>KeyError</code> if <code>x</code> is missing and <code>s.discard(x)</code> does not. A set has no indices, and its printed order is not something to rely on, so use <code>sorted(s)</code> when order matters.</p>
<p><b>Tuples.</b> A tuple is an immutable sequence: <code>t = (1, 2, 3)</code>, or <code>(5,)</code> for one item. It supports indexing, slicing, <code>len</code> and <code>in</code>, but <code>t[0] = 9</code> raises <code>TypeError</code>. <code>x, y = t</code> unpacks a tuple into names, and <code>return a, b</code> returns one tuple.</p>`,
  legend: [
    { c: "c1", sym: `<code>counts[w] += 1</code>`, name: "Line about to run", desc: "The statement Python runs next." },
    { c: "c2", sym: `<code>counts</code>`, name: "Variable that just changed", desc: "A name just bound, or a dict whose key or value just changed." },
    { c: "c4", sym: `<code>{'to': 2}</code>`, name: "References and objects", desc: "The dict, set or tuple object a name refers to, drawn as a box of keys and values." },
    { c: "c3", sym: `<code>{1, 2, 3, 4, 5}</code>`, name: "Output", desc: "What <code>print</code> shows. A dict prints its pairs in insertion order." }
  ],
  steps: { title: "How to trace dict and set code", items: [
    "Draw a dict as a two-column table: keys on the left, values on the right, in the order they were inserted.",
    "For <code>d[k] = v</code>, change the row for <code>k</code> if it exists, or add a new row at the bottom.",
    "For <code>d[k]</code>, find the row for <code>k</code>. If there is none, the program stops with <code>KeyError</code>.",
    "For a set, write each value once; adding a value already there does nothing.",
    "For <code>|</code>, <code>&amp;</code> and <code>-</code>, build a new set by checking each value against both sets.",
    "For a tuple, remember it never changes: any change must build a new tuple."
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">counts = {}
<span class="c1">for</span> w <span class="c1">in</span> ["a", "b", "a"]:
    counts[w] = counts.get(w, 0) + 1
<span class="c1">print</span>(counts)
<span class="c1">print</span>(counts["a"], len(counts))</pre>`,
    lines: [
      { math: `<code><span class="c2">counts</span> = {}</code>`, note: "An empty dict." },
      { math: `<code>w = 'a': get → 0</code>`, note: "'a' is not a key yet, so get returns the default 0; counts['a'] becomes 1." },
      { math: `<code>w = 'b': get → 0</code>`, note: "A new key 'b' is inserted after 'a' with count 1." },
      { math: `<code>w = 'a': get → 1</code>`, note: "'a' is already a key, so its value is replaced by 2. No second 'a' key is made." },
      { math: `<code><span class="c3">{'a': 2, 'b': 1}</span></code>`, note: "Keys print in the order they were first inserted." },
      { math: `<code><span class="c3">2 2</span></code>`, note: "counts['a'] is 2, and the dict has 2 keys." }
    ],
    answer: `<pre class="code"><span class="out">{'a': 2, 'b': 1}
2 2</span></pre>`
  },
  why: `<p>Many problems are really lookups: a price for each product code, a count for each word, the set of users who have already voted. A dict answers "what goes with this key?" without searching a list item by item, and a set answers "have I seen this before?" the same way.</p>
<p>Choosing the right collection makes code shorter and faster. Counting words with two parallel lists takes a search for every word; with a dict it is one line.</p>`,
  careers: [
    { role: "Backend developer", use: "Reads and builds JSON objects, which arrive in Python as dicts keyed by field name." },
    { role: "Data analyst", use: "Counts categories with a dict or collections.Counter before charting them." },
    { role: "Security engineer", use: "Keeps a set of blocked IP addresses and checks each request against it." },
    { role: "Natural language processing engineer", use: "Builds a vocabulary dict that maps each word to an index for a model." },
    { role: "DevOps engineer", use: "Reads configuration files into nested dicts and looks settings up with get and a default." },
    { role: "Bioinformatician", use: "Counts k-mers in DNA sequences with a dict keyed by short strings." }
  ],
  life: [
    "A phone's contact list: you look up a number by the person's name",
    "A dictionary of words, where each word leads straight to its meaning",
    "A guest list where writing the same name twice still means one guest",
    "The students who are in both of two classes",
    "A date written as day, month and year that you do not change once it is set"
  ],
  fields: [
    { name: "Databases", use: "Indexes map key values to rows so a query can jump straight to the data." },
    { name: "Web development", use: "Request headers, form fields and JSON bodies are all key-value maps." },
    { name: "Compilers", use: "A symbol table maps each variable name to what the compiler knows about it." },
    { name: "Data science", use: "Grouping and counting by category is a dict from category to totals." }
  ],
  prereqWhy: {
    "cs-lists": "Dicts and sets are mutable collections like lists, so aliasing and in-place change work the same way, and tuples are the immutable counterpart of lists."
  },
  unlocksWhy: {
    "cs-classes": "An instance keeps its attributes in a dict of names to values, which <code>vars(obj)</code> shows, and like a dict an object is mutable and can be aliased."
  },
  beyond: [
    { field: "Data Structures", why: "Hash tables explain how a dict finds a key in about the same time however many keys it holds, and why keys must be hashable." },
    { field: "Discrete Mathematics", why: "Union, intersection and difference are set theory, and a dict is a function from a finite set of keys to values." },
    { field: "Databases", why: "Key-value stores such as Redis are dicts shared over a network." }
  ],
  mistakes: [
    { wrong: `<code>counts[w] += 1</code> for a word not seen yet.`, fix: `The key does not exist, so Python raises <code>KeyError</code>. Use <code>counts[w] = counts.get(w, 0) + 1</code> or test <code>if w in counts</code> first.` },
    { wrong: `<code>s = {}</code> to make an empty set.`, fix: `<code>{}</code> is an empty dict. Write <code>s = set()</code>.` },
    { wrong: `Using a list as a key, as in <code>d[[1, 2]] = "p"</code>.`, fix: `Lists are mutable and unhashable, so this raises <code>TypeError</code>. Use a tuple: <code>d[(1, 2)] = "p"</code>.` },
    { wrong: `Expecting <code>print({"pear", "fig"})</code> to show the items in the order written.`, fix: `A set has no order you can rely on. Use <code>sorted(s)</code> when the order of the output matters.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">ages = {"ana": 20, "ben": 19}
ages["cy"] = 21
ages["ana"] = 22
<span class="c1">print</span>(ages)
<span class="c1">print</span>(len(ages), "ben" <span class="c1">in</span> ages, 19 <span class="c1">in</span> ages)</pre>`, a: `<pre class="code"><span class="out">{'ana': 22, 'ben': 19, 'cy': 21}
3 True False</span></pre>Assigning to <code>"ana"</code> replaces its value and keeps its place; <code>"cy"</code> is a new key at the end. <code>in</code> tests keys, and 19 is only a value.` },
    { q: `What does this print?<pre class="code">a = {1, 2, 3, 4}
b = {3, 4, 5}
<span class="c1">print</span>(sorted(a | b), sorted(a &amp; b), sorted(b - a))
<span class="c1">print</span>(len(set([2, 2, 2, 7])))</pre>`, a: `<pre class="code"><span class="out">[1, 2, 3, 4, 5] [3, 4] [5]
2</span></pre>Union takes everything in either set, intersection what is in both, and <code>b - a</code> what is in <code>b</code> only. The set of <code>[2, 2, 2, 7]</code> is <code>{2, 7}</code>.` },
    { q: `What does this print?<pre class="code">def min_max(xs):
    <span class="c1">return</span> min(xs), max(xs)

lo, hi = min_max([4, 9, 1])
<span class="c1">print</span>(lo, hi)
<span class="c1">print</span>(min_max([4, 9, 1]))</pre>`, a: `<pre class="code"><span class="out">1 9
(1, 9)</span></pre><code>return min(xs), max(xs)</code> returns one tuple. Unpacking it binds <code>lo</code> and <code>hi</code>; printed whole, it shows as a tuple.` },
    { q: `What does this print?<pre class="code">inv = {}
<span class="c1">for</span> k, v <span class="c1">in</span> {"a": 1, "b": 2, "c": 1}.items():
    inv[v] = inv.get(v, []) + [k]
<span class="c1">print</span>(inv)</pre>`, a: `<pre class="code"><span class="out">{1: ['a', 'c'], 2: ['b']}</span></pre><code>items()</code> gives the pairs in insertion order. Each value becomes a key of <code>inv</code>, holding the list of keys that had it; the first <code>get</code> for a value returns the default <code>[]</code>.` }
  ]
};
