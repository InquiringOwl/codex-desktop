window.ARITH = window.ARITH || {};
ARITH["cs-2d-data"] = {
  title: "Tables and 2-D Data",
  short: "Lists of lists: grid[r][c], row and column loops",
  grade: "College CS 1xx · Programming Fundamentals",
  hours: 2,
  voice: "plain",
  eyebrow: "Programming Fundamentals · lists of lists",
  hero: `<code><span class="c2">grid</span>[<span class="c1">r</span>][<span class="c1">c</span>]</code>`,
  lede: `A table of values is stored in Python as a list of rows, where each row is itself a list. <code>grid[r][c]</code> picks row <code>r</code> first and then the item in column <code>c</code> of that row.`,
  plain: `<p>Many kinds of data come as a table: marks for each student in each test, the squares of a game board, the pixels of an image. Python has no special table type. You make one from lists you already know: an outer list whose items are the rows.</p>
<p>In <code>grid = [[3, 1, 4], [1, 5, 9]]</code> the outer list has 2 items, and each of them is a list of 3 numbers. <code>grid[1]</code> is the second row, <code>[1, 5, 9]</code>, and <code>grid[1][2]</code> is the last number in that row, 9. The first index always chooses the row.</p>
<p>To visit every cell you use two loops, one inside the other. If the outer loop runs over rows, you read the table across, one row at a time. If the outer loop runs over columns, you read it down, one column at a time.</p>
<p>One trap catches almost everyone. <code>[[0] * 3] * 3</code> looks like a 3 by 3 table of zeros, but it holds the same row three times. Change one cell and the whole column changes. Build each row separately instead.</p>`,
  formal: `<p><b>Indexing.</b> <code>grid[r][c]</code> is evaluated as <code>(grid[r])[c]</code>: the first subscript returns the inner list for row <code>r</code>, and the second indexes into it. Storing a table as a list of rows is <b>row-major</b> order. For a rectangular table <code>len(grid)</code> is the number of rows and <code>len(grid[0])</code> the number of columns. Negative indices count from the end, so <code>grid[-1][-1]</code> is the bottom-right cell. A row index or column index out of range raises <code>IndexError</code>.</p>
<p><b>References, not copies.</b> The outer list holds references to the row objects. <code>row = grid[0]</code> and <code>for row in grid</code> bind <code>row</code> to the existing inner list, so mutating <code>row</code> mutates the table. <code>[[0] * 3] * 3</code> builds one inner list and repeats the reference to it three times, so <code>grid[0] is grid[1]</code> is <code>True</code>. A comprehension evaluates its expression once per pass, so <code>[[0] * 3 for r in range(3)]</code> makes three distinct rows.</p>
<pre class="code">for r in range(len(grid)):        # row by row
    for c in range(len(grid[0])):
        ... grid[r][c] ...</pre>`,
  legend: [
    { c: "c1", sym: `<code>for c in …</code>`, name: "Line about to run", desc: `The statement Python runs next. In nested loops the inner loop runs all its passes for each pass of the outer loop.` },
    { c: "c2", sym: `<code>total</code>`, name: "Variable that just changed", desc: `A name that the last step rebound, such as a running total or a loop index <code>r</code> or <code>c</code>.` },
    { c: "c3", sym: `<code>row 0 8</code>`, name: "Output", desc: `Text printed so far.` },
    { c: "c4", sym: `<code>[ ]</code> → <code>[0, 0, 0]</code>`, name: "References", desc: `Arrows from the outer list to its row objects. Two arrows to one box mean two slots share one row.` }
  ],
  steps: { title: "How to work with a 2-D list", items: [
    `Draw the table with row numbers down the side and column numbers across the top, both starting at 0.`,
    `Read <code>grid[r][c]</code> left to right: first find row <code>r</code>, then go across to column <code>c</code>.`,
    `Get the size from the data: <code>len(grid)</code> rows and <code>len(grid[0])</code> columns.`,
    `To go across rows, put the row loop outside. To go down columns, put the column loop outside.`,
    `Reset a per-row or per-column total inside the outer loop, before the inner loop starts.`,
    `Build a new table with a comprehension, <code>[[0] * cols for r in range(rows)]</code>, never with <code>* rows</code> on the outside.`
  ] },
  example: {
    prompt: `Trace this program and give its output.<pre class="code">grid = [[3, 1, 4], [1, 5, 9]]
for row in grid:
    total = 0
    for x in row:
        total += x
    <span class="c1">print</span>(total)
<span class="c1">print</span>(grid[1][2], len(grid), len(grid[0]))</pre>`,
    lines: [
      { math: `<code><span class="c2">grid</span> = [[3, 1, 4], [1, 5, 9]]</code>`, note: "A list of 2 rows, each a list of 3 numbers." },
      { math: `<code><span class="c2">row</span> = [3, 1, 4]</code>`, note: "The outer loop binds row to the first inner list." },
      { math: `<code><span class="c2">total</span></code>: 3, 4, 8`, note: "The inner loop adds 3, then 1, then 4." },
      { math: `<code><span class="c3">8</span></code>`, note: "The inner loop is done, so the row total is printed." },
      { math: `<code><span class="c2">row</span> = [1, 5, 9]</code>, <code><span class="c2">total</span></code>: 0, 1, 6, 15`, note: "The total is reset to 0 for the second row, then 1 + 5 + 9 is added." },
      { math: `<code><span class="c3">15</span></code>`, note: "The second row total." },
      { math: `<code>grid[1][2]</code> = 9`, note: "Row 1 is [1, 5, 9] and its item at index 2 is 9. There are 2 rows and 3 columns." }
    ],
    answer: `<pre class="code"><span class="out">8
15
9 2 3</span></pre>`
  },
  why: `<p>Tables are everywhere in computing: spreadsheets, images, game boards, distance charts, the results of a database query. Learning to index a list of lists and to choose the order of two loops is the first step to all of them. The aliasing trap matters too: it is one of the most common bugs in first-year assignments, and it teaches that a list holds references to objects, not copies of them.</p>`,
  careers: [
    { role: "Data analyst", use: "Loads spreadsheet and CSV exports as rows of values and totals them by row or by column." },
    { role: "Game developer", use: "Stores board and tile maps as grids and looks up neighbouring cells by row and column." },
    { role: "Image processing engineer", use: "Treats an image as a 2-D array of pixels and runs filters across every row and column." },
    { role: "Scientific programmer", use: "Holds temperatures or pressures on a grid and updates each cell from its neighbours in a simulation." },
    { role: "GIS analyst", use: "Works with raster maps, where each cell of a grid holds an elevation or land-use value." },
    { role: "Machine learning engineer", use: "Shapes data as matrices with one row per example and one column per feature." }
  ],
  life: [
    "A seating chart where each seat is found by row and then seat number",
    "A spreadsheet of monthly spending with a total at the end of each row and the foot of each column",
    "A crossword or sudoku grid",
    "A train timetable with stations down the side and departures across the top",
    "A multiplication table"
  ],
  fields: [
    { name: "Numerical computing", use: "Matrices are stored and processed as 2-D arrays, usually with NumPy." },
    { name: "Computer graphics", use: "Images and textures are grids of colour values." },
    { name: "Databases", use: "A query result is a table of rows, each with the same columns." },
    { name: "Operations research", use: "Cost and distance tables drive scheduling and routing." }
  ],
  prereqWhy: {
    "cs-lists": `A 2-D list is a list whose items are lists, so indexing, <code>len</code>, <code>append</code> and mutation all work as they do on one list, one level down.`,
    "cs-nested-loops": `Visiting every cell of a table is a loop inside a loop: one runs over the rows and the other over the columns.`
  },
  unlocksWhy: {
    "cs-modules": "Libraries such as <code>csv</code> and NumPy are imported to load and work on whole tables at once."
  },
  mathWhy: {
    "pa-coordinate": `A cell is found by an ordered pair, like a point <span class="m">(<i>x</i>, <i>y</i>)</span>, and the order matters. Here the row comes first and rows count downward from 0 at the top, so <code>grid[r][c]</code> is closer to (down, across) than to (<i>x</i>, <i>y</i>).`
  },
  beyond: [
    { field: "Data Structures", why: "Matrices and adjacency matrices for graphs are 2-D arrays." },
    { field: "Algorithms", why: "Dynamic programming fills in a table one cell at a time from cells already filled." },
    { field: "Computer Systems", why: "Row-major and column-major layout decide how a 2-D array sits in memory and how fast loops over it run." }
  ],
  mistakes: [
    { wrong: `Making a table with <code>grid = [[0] * 3] * 3</code>.`, fix: `That repeats one row three times, so <code>grid[0][0] = 5</code> changes every row. Use <code>[[0] * 3 for r in range(3)]</code>.` },
    { wrong: `Writing <code>grid[c][r]</code> when you mean the cell in row <code>r</code>, column <code>c</code>.`, fix: `The row index comes first. Swapped indices give the wrong cell, or <code>IndexError</code> when the table is not square.` },
    { wrong: `Setting <code>total = 0</code> once, before both loops, when you want one total per row.`, fix: `Reset the total inside the outer loop, just before the inner loop, so each row starts at 0.` },
    { wrong: `Using <code>len(grid)</code> as the number of columns.`, fix: `<code>len(grid)</code> counts rows. The number of columns is the length of a row, <code>len(grid[0])</code>.` }
  ],
  practice: [
    { q: `What does this print?<pre class="code">g = [[2, 4], [6, 8], [1, 3]]
<span class="c1">print</span>(g[2][0], g[0][1])
<span class="c1">print</span>(len(g), len(g[0]))</pre>`,
      a: `<pre class="code"><span class="out">1 4
3 2</span></pre><code>g[2]</code> is the last row <code>[1, 3]</code> and its first item is 1. <code>g[0][1]</code> is 4. The table has 3 rows of 2 items.` },
    { q: `What does this print?<pre class="code">g = [[2, 4], [6, 8], [1, 3]]
for c in range(len(g[0])):
    total = 0
    for r in range(len(g)):
        total += g[r][c]
    <span class="c1">print</span>(total)</pre>`,
      a: `<pre class="code"><span class="out">9
15</span></pre>The outer loop picks a column and the inner loop walks down it, so these are column sums: 2 + 6 + 1 = 9 and 4 + 8 + 3 = 15.` },
    { q: `What does this print, and how do you fix it so only one square is marked?<pre class="code">board = [["."] * 3] * 2
board[0][1] = "X"
<span class="c1">print</span>(board)</pre>`,
      a: `<pre class="code"><span class="out">[['.', 'X', '.'], ['.', 'X', '.']]</span></pre>Both rows are the same list object, so the change shows in each. Build the rows separately with <code>board = [["."] * 3 for r in range(2)]</code>; then only <code>board[0]</code> changes.` },
    { q: `What does this print?<pre class="code">m = [[1, 2, 3], [4, 5, 6]]
t = [[m[r][c] for r in range(len(m))] for c in range(len(m[0]))]
<span class="c1">print</span>(t)</pre>`,
      a: `<pre class="code"><span class="out">[[1, 4], [2, 5], [3, 6]]</span></pre>The outer comprehension runs over the 3 columns, and each inner one collects that column down the 2 rows. Column <code>c</code> of <code>m</code> becomes row <code>c</code> of <code>t</code>: this is the transpose.` }
  ],
  origin: `<p>Arrays with more than one subscript were already in the first FORTRAN (1957), which stores them column by column; C and most later languages store them row by row. Python has no built-in 2-D array type, so a list of lists is the usual table, and the NumPy library (2006) adds true rectangular arrays for numerical work.</p>`
};
