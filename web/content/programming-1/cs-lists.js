window.ARITH = window.ARITH || {};
ARITH["cs-lists"] = {
  title: "Lists, Mutability and Aliasing",
  short: "Mutable sequences; aliases, copies and in-place methods",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · lists",
  hero: `<code><span class="c2">ys</span> = <span class="c4">xs</span></code>`,
  lede: `A list is an ordered collection of values that can be changed after it is made. Because a name refers to a list object rather than holding the items itself, two names can share one list, and a change made through one shows up through the other.`,
  plain: `<p>A list keeps several values in order under one name: <code>scores = [90, 72, 85]</code>. You reach the items by position, counting from 0, just as with the characters of a string. <code>scores[0]</code> is 90 and <code>len(scores)</code> is 3.</p>
<p>Unlike a string, a list can be changed. <code>scores.append(60)</code> adds an item at the end, and <code>scores[1] = 75</code> replaces one. The list object itself changes; no new list is made.</p>
<p>That matters because of how names work. <code>backup = scores</code> does not copy the list. It gives the same list a second name. Change the list through either name and both names see the change. To get a separate list you must ask for a copy, for example <code>backup = scores[:]</code>.</p>`,
  formal: `<p><b>Lists.</b> A list is a mutable sequence. <code>xs[i]</code> is the item at index <code>i</code> (0 to <code>len(xs) - 1</code>; negative indices count from the end, so <code>xs[-1]</code> is the last item), and an index outside that range raises <code>IndexError</code>. A slice <code>xs[a:b]</code> builds a new list. <code>xs[i] = v</code> replaces an item in place.</p>
<p><b>Aliasing.</b> <code>ys = xs</code> binds a second name to the same object: <code>ys is xs</code> is True and every mutation is visible through both names. <code>xs[:]</code>, <code>list(xs)</code> and <code>xs.copy()</code> make a new list holding the same items. These are <b>shallow</b> copies: if the items are themselves lists, the inner lists are shared. <code>==</code> compares items; <code>is</code> asks whether two names refer to one object.</p>
<p><b>Mutate or rebind.</b> <code>append</code>, <code>extend</code>, <code>insert</code>, <code>remove</code> and <code>sort</code> change the list in place and return <code>None</code>; <code>pop()</code> removes and returns the last item. <code>xs + ys</code> and <code>sorted(xs)</code> return a new list and leave <code>xs</code> alone. <code>xs = xs + [4]</code> rebinds <code>xs</code> to a new list, but <code>xs += [4]</code> extends the existing list in place. A function that receives a list gets a reference to the caller's object, so mutating its parameter changes the caller's list, while rebinding the parameter does not.</p>`,
  legend: [
    { c: "c1", sym: `<code>ys.append(4)</code>`, name: "Line about to run", desc: "The statement Python runs next. A method call like this changes the list object itself." },
    { c: "c2", sym: `<code>zs</code>`, name: "Variable that just changed", desc: "A name that was just bound, or whose list was just changed." },
    { c: "c4", sym: `<code>xs</code> → <code>[1, 2, 3]</code>`, name: "References and objects", desc: "Arrows from names to list objects. Two arrows into one box mean two aliases of one list." },
    { c: "c3", sym: `<code>[1, 2, 3, 4]</code>`, name: "Output", desc: "What <code>print</code> shows: the current items of the list the name refers to." }
  ],
  steps: { title: "How to trace list code", items: [
    "Draw each list as a box of items and each name as an arrow to a box.",
    "For <code>ys = xs</code>, draw a second arrow to the same box. Nothing is copied.",
    "For a slice, <code>list(xs)</code>, <code>+</code> or <code>sorted</code>, draw a new box and point the assigned name at it.",
    "For <code>append</code>, <code>xs[i] = v</code>, <code>sort</code> and the other methods, change the box itself. Every arrow into that box sees the change.",
    "At a function call, draw the parameter as another arrow to the caller's box.",
    "At <code>print</code>, follow the arrow and read the box as it is now."
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">xs = [4, 1]
ys = xs
ys.append(7)
zs = xs + [2]
xs[0] = 9
<span class="c1">print</span>(xs, ys, zs)</pre>`,
    lines: [
      { math: `<code><span class="c2">xs</span> → [4, 1]</code>`, note: "Python makes a list object and binds xs to it." },
      { math: `<code><span class="c2">ys</span> → <span class="c4">same list</span></code>`, note: "ys is an alias: both names refer to one list." },
      { math: `<code>[4, 1, 7]</code>`, note: "append changes that list, so xs and ys both see 4, 1, 7." },
      { math: `<code><span class="c2">zs</span> → [4, 1, 7, 2]</code>`, note: "The + operator builds a new list from the current items; xs is not changed." },
      { math: `<code>[9, 1, 7]</code>`, note: "Item assignment changes the shared list in place. zs is a separate list and keeps its 4." },
      { math: `<code><span class="c3">[9, 1, 7] [9, 1, 7] [4, 1, 7, 2]</span></code>`, note: "xs and ys print the same list; zs prints its own." }
    ],
    answer: `<pre class="code"><span class="out">[9, 1, 7] [9, 1, 7] [4, 1, 7, 2]</span></pre>`
  },
  why: `<p>Almost every real program keeps collections: rows read from a file, items in a cart, players in a game. Lists are the first collection you meet, and the mutability that makes them useful is also the source of a classic bug: a list changed in one part of a program and silently changed everywhere else because two names shared it.</p>
<p>Knowing exactly when Python shares an object and when it makes a new one lets you predict that bug and avoid it, and it is the same rule that later governs dicts, sets and objects of your own classes.</p>`,
  careers: [
    { role: "Software engineer", use: "Tracks down bugs where one function mutated a list that another part of the program still relied on." },
    { role: "Backend developer", use: "Avoids the shared mutable default argument, def f(items=[]), which keeps one list across every call." },
    { role: "Data analyst", use: "Builds lists of cleaned records before loading them into a pandas DataFrame." },
    { role: "Game developer", use: "Keeps lists of active entities and removes them safely while the game loop runs." },
    { role: "QA engineer", use: "Writes tests that check a function did not change the list it was given." },
    { role: "Machine learning engineer", use: "Copies a list of samples before shuffling it so the original order is kept for evaluation." }
  ],
  life: [
    "Sharing a link to one online document instead of sending a copy: everyone edits the same thing",
    "Photocopying a form before writing on it so the blank original stays clean",
    "A shopping list on the fridge that anyone in the house can add to",
    "A playlist you reorder in place versus a new playlist you make from it",
    "Two contacts saved under different names that are really the same phone number"
  ],
  fields: [
    { name: "Concurrency", use: "Shared mutable data touched by two threads at once is the main source of race conditions." },
    { name: "Data science", use: "Columns of data begin as lists and are copied or changed in place by library functions." },
    { name: "Web development", use: "JSON arrays arrive as Python lists, and handlers must not mutate data another request still uses." },
    { name: "Functional programming", use: "Prefers building new lists over mutating old ones so that aliasing can never cause surprises." }
  ],
  prereqWhy: {
    "cs-strings": "Lists use the same indexing, slicing, <code>len</code> and <code>for</code> loops as strings. The new part is that a list, unlike a string, can be changed in place."
  },
  unlocksWhy: {
    "cs-search-sort": "Searching walks a list by index, and the simple sorts swap items inside one list, which works because lists are mutable.",
    "cs-dicts-sets": "Dicts and sets are the other built-in collections. They are mutable too, so the same alias-versus-copy rule applies to them.",
    "cs-2d-data": "A table is a list whose items are lists. Aliasing explains why <code>[[0] * 3] * 3</code> gives three references to one row."
  },
  beyond: [
    { field: "Data Structures", why: "A Python list is a dynamic array; you will see why append is fast on average and insert at the front is slow." },
    { field: "Programming Languages", why: "Pass-by-object-reference, value semantics and immutability are compared across languages." },
    { field: "Concurrent Programming", why: "Shared mutable state is what locks and immutable data structures are designed to tame." }
  ],
  mistakes: [
    { wrong: `<code>xs = xs.sort()</code>`, fix: `<code>sort</code> sorts in place and returns <code>None</code>, so this throws the list away. Write <code>xs.sort()</code> on its own line, or <code>ys = sorted(xs)</code> for a new list.` },
    { wrong: `<code>backup = scores</code>, then changing <code>scores</code> and expecting <code>backup</code> to keep the old items.`, fix: `Both names refer to one list. Make a copy: <code>backup = scores[:]</code> or <code>list(scores)</code>.` },
    { wrong: `<code>xs[len(xs)]</code> to get the last item.`, fix: `Indices run from 0 to <code>len(xs) - 1</code>, so this raises <code>IndexError</code>. Use <code>xs[-1]</code> or <code>xs[len(xs) - 1]</code>.` },
    { wrong: `Expecting <code>xs = xs + [x]</code> inside a function to change the caller's list.`, fix: `That rebinds the local name to a new list. Mutate instead with <code>xs.append(x)</code>, or return the new list.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">xs = [10, 20, 30, 40]
<span class="c1">print</span>(xs[0], xs[-1], len(xs))
<span class="c1">print</span>(xs[1:3])</pre>`, a: `<pre class="code"><span class="out">10 40 4
[20, 30]</span></pre>Index 0 is the first item and <code>-1</code> the last. The slice <code>[1:3]</code> takes indices 1 and 2 and stops before 3.` },
    { q: `What does this print?<pre class="code">a = [1, 2]
b = a
b.append(3)
<span class="c1">print</span>(a)</pre>`, a: `<pre class="code"><span class="out">[1, 2, 3]</span></pre><code>b = a</code> makes <code>b</code> an alias of the same list, so appending through <code>b</code> changes what <code>a</code> refers to.` },
    { q: `What does this print?<pre class="code">def f(xs):
    xs[0] = 0
    xs = [5, 5]
    xs.append(6)

nums = [1, 2]
f(nums)
<span class="c1">print</span>(nums)</pre>`, a: `<pre class="code"><span class="out">[0, 2]</span></pre>The parameter starts as an alias of <code>nums</code>, so <code>xs[0] = 0</code> changes the caller's list. <code>xs = [5, 5]</code> rebinds only the local name; the append goes to that new list, which is dropped when <code>f</code> returns.` },
    { q: `What happens?<pre class="code">xs = [3, 1, 2]
xs = xs.sort()
<span class="c1">print</span>(xs[0])</pre>`, a: `<pre class="code"><span class="out">TypeError: 'NoneType' object is not subscriptable</span></pre><code>sort</code> returns <code>None</code>, so <code>xs</code> is rebound to <code>None</code> and cannot be indexed. Write <code>xs.sort()</code> alone; then <code>xs[0]</code> is 1.` }
  ]
};
