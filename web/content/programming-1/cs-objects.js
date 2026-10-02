window.ARITH = window.ARITH || {};
ARITH["cs-objects"] = {
  title: "Objects, Methods and Encapsulation",
  short: "Methods that change state, self, inheritance, super()",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Programming Fundamentals · objects",
  hero: `<code><span class="c4">acct</span>.<span class="c1">deposit</span>(<span class="c2">5</span>)</code>`,
  lede: `An object keeps its own data, and its <b>methods</b> are the operations that read and change that data. A subclass can reuse a class and replace just the methods that should behave differently.`,
  plain: `<p>A bank account is more than a number. It has a balance, and there are rules for changing it: you deposit, you withdraw, and you cannot take out more than is there. An object lets you keep the data and those rules together, so the rest of the program says <code>acct.deposit(5)</code> instead of fiddling with the balance directly.</p>
<p>A method is just a function that lives in the class. When you write <code>acct.deposit(5)</code>, Python finds <code>deposit</code> in the class of <code>acct</code> and calls it with <code>acct</code> as the first argument. Inside, that argument is called <code>self</code>, so <code>self.balance</code> means "this account's balance".</p>
<p>Keeping the data behind methods is called <b>encapsulation</b>. In Python it is a habit, not a lock: a name that starts with an underscore, like <code>_balance</code>, tells other programmers "use the methods, not this".</p>
<p>A new class can be built on an old one. <code>class Savings(BankAccount):</code> gets every method of <code>BankAccount</code> for free and can <b>override</b> one by defining a method with the same name.</p>`,
  formal: `<p><b>Method call.</b> For an instance <code>obj</code> of class <code>C</code>, <code>obj.m(a, b)</code> looks up <code>m</code> on the object; when the name is not an instance attribute, Python finds the function in the class and calls <code>C.m(obj, a, b)</code>. <code>self</code> is an ordinary first parameter. A method defined without it fails when called on an instance with <code>TypeError</code>.</p>
<p><b>Instance and class attributes.</b> <code>self.x = v</code> creates or rebinds an attribute on that one instance. A name assigned in the class body is a class attribute shared by all instances; reading <code>obj.x</code> finds an instance attribute first, then the class. Python has no truly private attributes: <code>_name</code> is a convention, and <code>__name</code> inside a class is only renamed to <code>_ClassName__name</code>.</p>
<p><b>Inheritance.</b> <code>class Sub(Base):</code> makes <code>Sub</code> a subclass. Attribute lookup searches the instance, then <code>Sub</code>, then <code>Base</code> (the method resolution order, <code>Sub.__mro__</code>), and uses the first match. <code>super().m(…)</code> inside a method calls the next class's version on the same <code>self</code>. <code>isinstance(obj, Base)</code> is True for instances of any subclass.</p>`,
  legend: [
    { c: "c1", sym: `<code>self.balance += amount</code>`, name: "Line about to run", desc: "The statement Python runs next. A method call jumps into the method's body in the class." },
    { c: "c2", sym: `<code>balance</code>`, name: "Attribute that just changed", desc: "A method changes state by rebinding an attribute of <code>self</code>." },
    { c: "c3", sym: `<code>False 15</code>`, name: "Output", desc: "What <code>print</code> writes." },
    { c: "c4", sym: `<code>self → acct</code>`, name: "References and objects", desc: "<code>self</code> and <code>acct</code> are two names for the same object while the method runs." },
    { c: "c5", sym: `<code>return True</code>`, name: "Return value", desc: "What a method hands back to the caller, often a sign of success or a computed answer." }
  ],
  steps: { title: "How to design and trace an object", items: [
    "List the data each object must keep (attributes) and the things it must do (methods).",
    "Set every attribute in <code>__init__</code> through <code>self</code>, so each object gets its own copy.",
    "Write each method with <code>self</code> first. Change state only through <code>self.attr</code>.",
    "When tracing <code>obj.m(x)</code>, open a frame for <code>m</code> with <code>self</code> pointing at <code>obj</code>.",
    "For a subclass, look for the method in the object's own class first, then its parent.",
    "Use <code>super().m(…)</code> when the override should add to the parent's behaviour rather than replace it."
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount &gt; self.balance:
            return False
        self.balance -= amount
        return True

acct = BankAccount("Ana", 10)
acct.deposit(5)
ok = acct.withdraw(20)
<span class="c1">print</span>(ok, acct.balance)</pre>`,
    lines: [
      { math: `<code><span class="c4">BankAccount</span></code> = class object`, note: "The class statement stores __init__, deposit and withdraw in the class." },
      { math: `<code><span class="c4">acct</span>.owner = "Ana"</code>, <code>acct.balance = 10</code>`, note: "Calling the class makes an instance and __init__ sets its two attributes." },
      { math: `<code>BankAccount.deposit(acct, 5)</code>`, note: "acct.deposit(5) calls the class's function with self bound to acct." },
      { math: `<code>self.<span class="c2">balance</span> = 15</code>`, note: "10 + 5. The method changed the object's state." },
      { math: `<code>BankAccount.withdraw(acct, 20)</code>`, note: "A new frame: self is acct again, amount is 20." },
      { math: `<code>20 &gt; 15</code> is True`, note: "The rule in the method refuses to overdraw." },
      { math: `<code>ok = <span class="c5">False</span></code>`, note: "The method returns early, so the balance is untouched." },
      { math: `<code><span class="c3">False 15</span></code>`, note: "print shows the returned flag and the unchanged balance." }
    ],
    answer: `<pre class="code"><span class="out">False 15</span></pre>`
  },
  why: `<p>Objects let a program grow without every part knowing every detail. Code that uses an account only needs to know <code>deposit</code> and <code>withdraw</code>; how the balance is stored can change later without breaking it. Inheritance lets one class serve as the base for many related ones, and a method call that picks the right version for each object is how frameworks, games and GUIs plug your code into theirs.</p>`,
  careers: [
    { role: "Backend developer", use: "Writes Django model classes with methods such as save and clean, and subclasses Django's generic views, overriding a method like get_queryset." },
    { role: "Game developer", use: "Gives each enemy or item class its own update method, so one loop can call update on every object in the scene." },
    { role: "Android developer", use: "Subclasses Activity or ViewModel and overrides lifecycle methods like onCreate that the framework calls." },
    { role: "Machine learning engineer", use: "Subclasses torch.nn.Module and overrides forward, calling super().__init__() so the base class can track the layers." },
    { role: "Test automation engineer", use: "Subclasses unittest.TestCase and overrides setUp so every test method starts from a fresh object." },
    { role: "Fintech software engineer", use: "Puts account rules such as overdraft checks inside methods so no other code can change a balance without them." }
  ],
  life: [
    "A vending machine that only lets you change its stock through its buttons",
    "Every car has a brake pedal, but each model brakes in its own way",
    "A new employee who inherits the standard job description plus one extra duty",
    "A thermostat you set through its dial instead of rewiring it",
    "Each library card tracks its own borrowed books"
  ],
  fields: [
    { name: "Software engineering", use: "Object-oriented design and patterns decide which classes exist and which methods each one exposes." },
    { name: "Graphical user interfaces", use: "Toolkits such as Tkinter and Qt are class hierarchies where you subclass a widget and override its event methods." },
    { name: "Simulation", use: "Each simulated agent is an object whose methods update its own state step by step." },
    { name: "Data science", use: "Libraries like scikit-learn give every model the same fit and predict methods, so models can be swapped." }
  ],
  prereqWhy: {
    "cs-classes": "You already define a class with <code>__init__</code> and attributes. Here those objects get methods that change their state, and classes start building on one another."
  },
  beyond: [
    { field: "Data Structures", why: "A stack or linked list class hides its nodes behind methods like push and pop." },
    { field: "Software Design", why: "Interfaces, design patterns and the choice between inheritance and composition all build on method lookup." },
    { field: "Programming Languages", why: "Dynamic dispatch, method resolution order and how languages enforce privacy are studied side by side." }
  ],
  mistakes: [
    { wrong: "Defining a method without <code>self</code>: <code>def toggle():</code>.", fix: "Python always passes the instance as the first argument, so the call fails with <code>TypeError</code>. Write <code>def toggle(self):</code>." },
    { wrong: "Putting a list in the class body, <code>items = []</code>, to give each object its own list.", fix: "That one list is a class attribute shared by every instance. Create it in <code>__init__</code> with <code>self.items = []</code>." },
    { wrong: "Overriding <code>__init__</code> in a subclass and forgetting the parent's.", fix: "The parent's attributes are never set. Call <code>super().__init__(…)</code> first, then add the new ones." },
    { wrong: "Thinking <code>_balance</code> is protected by Python.", fix: "The underscore is only a signal to people. Any code can still read or change it; keep to the methods yourself." }
  ],
  practice: [
    { q: `What does this print?<pre class="code">class Counter:
    def __init__(self):
        self.n = 0

    def tick(self):
        self.n += 1
        return self.n

c = Counter()
d = Counter()
c.tick()
c.tick()
<span class="c1">print</span>(c.tick(), d.tick())</pre>`, a: `<pre class="code"><span class="out">3 1</span></pre>Each counter has its own <code>n</code>. <code>c</code> is ticked three times in all, <code>d</code> once.` },
    { q: `What does this print?<pre class="code">class Greeter:
    def __init__(self, name):
        self.name = name

    def greet(self, other):
        return self.name + " greets " + other

g = Greeter("Ana")
<span class="c1">print</span>(g.greet("Ben"))
<span class="c1">print</span>(Greeter.greet(g, "Cy"))</pre>`, a: `<pre class="code"><span class="out">Ana greets Ben</span>
<span class="out">Ana greets Cy</span></pre><code>g.greet("Ben")</code> is the same call as <code>Greeter.greet(g, "Ben")</code>. The second line just writes it out by hand.` },
    { q: `What happens when this runs?<pre class="code">class Lamp:
    def toggle():
        <span class="c1">print</span>("click")

Lamp().toggle()</pre>`, a: `<pre class="code"><span class="out">TypeError: Lamp.toggle() takes 0 positional arguments but 1 was given</span></pre>Python passes the instance as the first argument, but <code>toggle</code> has no parameter to receive it. Add <code>self</code>.` },
    { q: `What does this print?<pre class="code">class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

    def intro(self):
        return self.name + " says " + self.speak()

class Dog(Animal):
    def __init__(self, name, trick):
        super().__init__(name)
        self.trick = trick

    def speak(self):
        return "woof"

d = Dog("Rex", "sit")
<span class="c1">print</span>(Animal("Gen").intro())
<span class="c1">print</span>(d.intro(), d.trick)</pre>`, a: `<pre class="code"><span class="out">Gen says ...</span>
<span class="out">Rex says woof sit</span></pre><code>intro</code> is inherited, but inside it <code>self.speak()</code> is looked up on the actual object. For a Dog that finds <code>Dog.speak</code>. <code>super().__init__(name)</code> sets <code>name</code> before the Dog adds <code>trick</code>.` }
  ],
  origin: `<p>Inheritance and virtual methods, where a call picks the version that belongs to the object's class, were introduced in Simula 67 by Ole-Johan Dahl and Kristen Nygaard. Smalltalk, built by Alan Kay's group at Xerox PARC in the 1970s, described a method call as sending a message to an object. Python's classes, added by Guido van Rossum in its first releases around 1991, follow the same model with <code>self</code> written out explicitly.</p>`
};
