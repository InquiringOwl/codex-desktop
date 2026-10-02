window.ARITH = window.ARITH || {};
ARITH["cs-classes"] = {
  title: "Classes",
  short: "Defining your own types: class, __init__, self, attributes",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · classes",
  hero: `<code><span class="c2">p</span> = <span class="c4">Point</span>(<span class="c1">3, 4</span>)</code>`,
  lede: `A class is a type you define yourself. Calling the class makes a new object, an <b>instance</b>, and its <code>__init__</code> method gives that object its own attributes.`,
  plain: `<p>So far each value has had a built-in type: int, str, list, dict. Often you want a value that bundles several facts together, such as a point with an x and a y, or a student with a name and a list of marks. A class lets you describe that kind of value once and then make as many of them as you need.</p>
<p>Think of the class as a form and each instance as a filled-in copy. <code>Point(1, 2)</code> and <code>Point(3, 4)</code> are two separate objects made from one class. Each keeps its own <code>x</code> and <code>y</code>, and changing one does not touch the other.</p>
<p>Inside the class, functions describe what an object can do. They are called <b>methods</b>. Every method's first parameter is named <code>self</code> by convention: it is the particular object the method is working on. When you write <code>p.dist2()</code>, Python passes <code>p</code> in as <code>self</code>.</p>`,
  formal: `<p><b>Class statement.</b> <code>class Point:</code> runs its indented body once, collects the names it defines (functions and other values) and binds <code>Point</code> to a new class object. Functions defined in the body are the class's methods. A name assigned directly in the body, such as <code>count = 0</code>, is a <b>class attribute</b>, shared by all instances.</p>
<p><b>Instances.</b> Calling the class, <code>Point(3, 4)</code>, creates a new empty instance, then calls <code>__init__(instance, 3, 4)</code>, and the call evaluates to the instance. <code>__init__</code> must return <code>None</code>. Assigning <code>self.x = x</code> creates an <b>instance attribute</b> on that one object. For a method defined in the class, <code>p.dist2()</code> is the same call as <code>Point.dist2(p)</code>: the object before the dot becomes the first argument.</p>
<p><b>Lookup.</b> Reading <code>obj.name</code> looks in the instance first and then in its class; if neither has it, Python raises <code>AttributeError</code>. Assigning <code>obj.name = v</code> always sets an attribute on the instance, even if the class has an attribute with that name. A variable refers to an instance just as it refers to a list, so <code>q = p</code> makes a second name for the same object.</p>`,
  legend: [
    { c: "c1", sym: `<code>self.x = x</code>`, name: "Line about to run", desc: `The statement Python runs next. A call to the class jumps into <code>__init__</code>, and a method call jumps into the method.` },
    { c: "c2", sym: `<code>p</code>`, name: "Variable that just changed", desc: `A name the last step bound, such as <code>p</code> after <code>Point(3, 4)</code> or a parameter in a new frame.` },
    { c: "c3", sym: `<code>10 2 3 4</code>`, name: "Output", desc: `Text printed so far.` },
    { c: "c4", sym: `<code>Point</code> {x, y}`, name: "Objects", desc: `Instances and their attributes. Arrows show which object each name, including <code>self</code>, refers to.` },
    { c: "c5", sym: `<code>25</code>`, name: "Return value", desc: `The value a method hands back to the line that called it.` }
  ],
  steps: { title: "How to write and trace a class", items: [
    `Write <code>class Name:</code> with a capitalised name, then define <code>def __init__(self, …):</code> inside it.`,
    `In <code>__init__</code>, store each piece of data on the object: <code>self.x = x</code>. A plain <code>x = x</code> stores nothing.`,
    `Give every method <code>self</code> as its first parameter and use <code>self.name</code> to reach the object's attributes.`,
    `To trace <code>p = Point(3, 4)</code>: draw a new empty object, bind <code>self</code> to it, run <code>__init__</code>, then bind <code>p</code> to the object.`,
    `To trace <code>p.m(a)</code>: open a frame for <code>m</code> with <code>self</code> bound to <code>p</code> and the other parameters to the arguments.`,
    `Remember that each call to the class draws a new object; <code>q = p</code> draws only a new arrow.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">class Rect:
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h

a = Rect(3, 4)
b = Rect(2, 5)
a.w = 6
<span class="c1">print</span>(a.area(), b.area())</pre>`,
    lines: [
      { math: `<code><span class="c4">Rect</span></code> = class object`, note: "The class statement defines __init__ and area and binds the name Rect." },
      { math: `<code>__init__(<span class="c2">self</span>, 3, 4)</code>`, note: "Rect(3, 4) makes a new object and runs __init__ with self bound to it." },
      { math: `<code><span class="c2">a</span></code> → Rect {w: 3, h: 4}`, note: "The call evaluates to the new instance, and a is bound to it." },
      { math: `<code><span class="c2">b</span></code> → Rect {w: 2, h: 5}`, note: "A second call makes a second, separate instance." },
      { math: `<code>a.w = 6</code>`, note: "Only the object a refers to changes; b keeps w = 2." },
      { math: `<code>a.area()</code> → <span class="c5">24</span>`, note: "This runs Rect.area(a), so self.w * self.h is 6 * 4." },
      { math: `<code>b.area()</code> → <span class="c5">10</span>`, note: "Now self is b, so the method uses b's attributes: 2 * 5." }
    ],
    answer: `<pre class="code"><span class="out">24 10</span></pre>`
  },
  why: `<p>Programs grow by naming things. A function names a computation; a class names a kind of data together with the operations that make sense for it. Almost every Python library you will use hands you objects made from classes, from file objects to data frames, so knowing what <code>__init__</code> and <code>self</code> do lets you read their documentation and design types of your own.</p>`,
  careers: [
    { role: "Backend developer", use: "Defines Django or SQLAlchemy model classes, where each class maps to a database table and each instance to a row." },
    { role: "Game developer", use: "Writes classes for players, enemies and items, each instance holding its own position and health." },
    { role: "Data scientist", use: "Uses scikit-learn estimators, which are classes: create an instance with settings, then call its fit and predict methods." },
    { role: "Mobile developer", use: "Builds screens and view models as classes in Swift or Kotlin, with methods that respond to the user." },
    { role: "Test engineer", use: "Groups test cases as methods of a unittest.TestCase subclass with shared setup." },
    { role: "Simulation engineer", use: "Models vehicles, customers or particles as instances whose attributes change over each time step." }
  ],
  life: [
    "A blank form and the many filled-in copies of it",
    "A recipe card and each cake baked from it",
    "A contact entry in a phone, with the same fields for every person",
    "Library cards that all have a name and a number, but different ones",
    "A car model and the individual cars of that model on the road"
  ],
  fields: [
    { name: "Software engineering", use: "Object-oriented design decides which classes a system needs and what each one is responsible for." },
    { name: "Databases", use: "Object-relational mappers turn rows into instances and attribute changes into updates." },
    { name: "User interfaces", use: "Buttons, windows and widgets are instances of classes in GUI frameworks." },
    { name: "Simulation", use: "Each agent in a model is an object with its own state." }
  ],
  prereqWhy: {
    "cs-dicts-sets": `An instance's attributes are a mapping from names to values, much like a dict, and Python really stores them in one: <code>p.__dict__</code>. A class gives that record a fixed set of fields and a type name.`,
    "cs-functions": `Methods are functions defined inside a class. <code>self</code> is an ordinary parameter, and each method call opens a frame and returns a value just as a function call does.`
  },
  unlocksWhy: {
    "cs-objects": "Next, classes get methods that change an object's state, and new classes inherit and override the methods of old ones."
  },
  beyond: [
    { field: "Data Structures", why: "Linked lists, trees and graphs are built from small node classes that refer to one another." },
    { field: "Software Engineering", why: "Inheritance, interfaces and design patterns organise large programs around classes." },
    { field: "Programming Languages", why: "How different languages implement objects, method lookup and dynamic dispatch." }
  ],
  mistakes: [
    { wrong: `Writing <code>x = x</code> in <code>__init__</code> instead of <code>self.x = x</code>.`, fix: `<code>x = x</code> only rebinds the local parameter. The object gets no attribute, and reading <code>p.x</code> later raises <code>AttributeError</code>.` },
    { wrong: `Leaving <code>self</code> out of a method's parameters, <code>def area():</code>.`, fix: `Python always passes the instance as the first argument, so the call fails with a <code>TypeError</code>. Write <code>def area(self):</code>.` },
    { wrong: `Expecting <code>q = p</code> to copy a Point.`, fix: `It makes a second name for the same object. Call the class again, <code>Point(p.x, p.y)</code>, to make a new one.` },
    { wrong: `Storing a list as a class attribute, <code>marks = []</code>, for data each object should own.`, fix: `A class attribute is shared, so every instance appends to one list. Create it in <code>__init__</code> with <code>self.marks = []</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">class Pet:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Pet("Ivy", 3)
q = Pet("Rex", 5)
p.age += 1
<span class="c1">print</span>(p.name, p.age, q.age)</pre>`,
      a: `<pre class="code"><span class="out">Ivy 4 5</span></pre>Each call to <code>Pet</code> makes its own object. <code>p.age += 1</code> changes only Ivy's age.` },
    { q: `What does this print?<pre class="code">class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
q = p
r = Point(1, 2)
q.x = 5
<span class="c1">print</span>(p.x, p is q, p is r)</pre>`,
      a: `<pre class="code"><span class="out">5 True False</span></pre><code>q = p</code> is a second name for one object, so setting <code>q.x</code> changes <code>p.x</code>. <code>r</code> has equal values but is a different object.` },
    { q: `What does this print?<pre class="code">class Ticket:
    count = 0

    def __init__(self):
        Ticket.count += 1
        self.number = Ticket.count

a = Ticket()
b = Ticket()
<span class="c1">print</span>(a.number, b.number, Ticket.count)</pre>`,
      a: `<pre class="code"><span class="out">1 2 2</span></pre><code>count</code> is a class attribute, one value shared by the class. Each <code>__init__</code> adds 1 to it and stores the new value on the instance as <code>number</code>.` },
    { q: `What happens when this runs?<pre class="code">class Counter:
    def __init__(self):
        self.n = 0

    def add():
        self.n += 1

c = Counter()
c.add()</pre>`,
      a: `<pre class="code"><span class="out">TypeError: Counter.add() takes 0 positional arguments but 1 was given</span></pre><code>c.add()</code> runs as <code>Counter.add(c)</code>, passing one argument, but <code>add</code> was defined with no parameters. The fix is <code>def add(self):</code>.` }
  ],
  origin: `<p>Classes and objects first appeared in Simula 67, designed by Ole-Johan Dahl and Kristen Nygaard at the Norwegian Computing Center to write simulations. Alan Kay's Smalltalk at Xerox PARC in the 1970s made objects the centre of a whole language and gave the style the name object-oriented. Python has had classes since its first public release in 1991.</p>`
};
