/* Glossary: Computer Science. Spec: web/GLOSSARY-SPEC.md. */
DB.addGlossary("computer-science", [
  { w: "function", field: "programming-1", node: "cs-functions", pos: "n", ipa: "/ˈfʌŋkʃən/", register: "technical",
    senses: ["A named, reusable block of code that takes arguments, runs its body and can return a value: <code>def area(r): return 3.14 * r * r</code>."], forms: ["functions"] },
  { w: "argument", field: "programming-1", node: "cs-functions", pos: "n", ipa: "/ˈɑrɡjəmənt/", register: "technical",
    senses: ["A value passed to a function when it is called; it is bound to the matching parameter. In <code>area(2)</code>, 2 is the argument and <code>r</code> the parameter."], forms: ["arguments"] },
  { w: "string", field: "programming-1", node: "cs-strings", pos: "n", ipa: "/strɪŋ/", register: "technical",
    senses: ["A sequence of characters, such as <code>\"hello\"</code>. In Python strings are immutable and indexed from 0."], forms: ["strings"] },
  { w: "variable", field: "programming-1", node: "cs-variables", pos: "n", ipa: "/ˈvɛriəbəl/", register: "technical",
    senses: ["A name that refers to a value in a program. In Python, assignment (<code>x = 5</code>) binds the name to an object; assigning again rebinds it."], forms: ["variables"] },
  { w: "key", field: "programming-1", node: "cs-dicts-sets", pos: "n", ipa: "/ki/", register: "technical",
    senses: ["In a dictionary (map), the value used to look up an entry: in <code>{\"a\": 1}</code> the key is <code>\"a\"</code>. Keys are unique and, in Python, must be hashable."], forms: ["keys"] },
  { w: "root", field: "data-structures", pos: "n", ipa: "/rut/", register: "technical",
    senses: ["The topmost node of a tree data structure, the one node with no parent."], forms: ["roots"] }
]);
