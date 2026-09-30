window.ARITH = window.ARITH || {};

ARITH["averages"] = {
  title: "Mean, Median & Mode",
  short: "Three ways to describe a typical value",
  grade: "Grade 6",
  hours: 5,
  voice: "mixed",
  eyebrow: "Data · measures of center",
  hero: `<span class="m"><span class="c1"><i>x̄</i></span> = <span class="fr"><span><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + ⋯ + <i>x</i><sub><i>n</i></sub></span><span><i>n</i></span></span></span>`,
  lede: `The mean is the balance point of the data. The median is the middle value, and the mode is the most common one.`,
  plain: `<p>If someone asks how long your commute usually takes, one number has to stand for many days. There are three common ways to pick that number.</p>
<p>The <b>mean</b> is what most people call the average. Add all the values and divide by how many there are. It is the point where the data would balance if each value were a weight on a ruler. The <b>median</b> is the middle value once you line them up in order. The <b>mode</b> is the value that shows up most often.</p>
<p>They can disagree. One awful 90-minute commute drags the mean up, but barely moves the median. That is why reports on house prices and incomes usually give the median. The mean uses every value. The median resists extreme ones.</p>`,
  formal: `<p>For data values <span class="m"><i>x</i><sub>1</sub>, …, <i>x</i><sub><i>n</i></sub></span>, let <span class="m"><i>x</i><sub>(1)</sub> ≤ <i>x</i><sub>(2)</sub> ≤ ⋯ ≤ <i>x</i><sub>(<i>n</i>)</sub></span> be the values in increasing order.</p>
<div class="display"><b>Mean:</b> <span class="c1"><i>x̄</i></span> = <span class="fr"><span>1</span><span><i>n</i></span></span> ∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>x</i><sub><i>i</i></sub> &nbsp;&nbsp; <span class="dim">∑ (<i>x</i><sub><i>i</i></sub> − <i>x̄</i>) = 0</span><br><b>Median:</b> <span class="c2"><i>x</i><sub>((<i>n</i>+1)/2)</sub></span> if <i>n</i> is odd; &nbsp;<span class="c2"><span class="fr"><span><i>x</i><sub>(<i>n</i>/2)</sub> + <i>x</i><sub>(<i>n</i>/2+1)</sub></span><span>2</span></span></span> if <i>n</i> is even<br><b>Mode:</b> any value of greatest frequency</div>
<p>The deviations from the mean sum to zero, which is why the mean is the balance point. A data set may have one mode, several modes, or none (when every value occurs equally often). The mean minimises the sum of squared deviations, and the median minimises the sum of absolute deviations.</p>`,
  legend: [
    { c: "c1", sym: `<i>x̄</i>`, name: "Mean", desc: "The sum divided by the count. The balance point of the dot plot." },
    { c: "c2", sym: `<i>M</i>`, name: "Median", desc: "The middle value of the ordered data, or the average of the two middle values." },
    { c: "c3", sym: `Mo`, name: "Mode", desc: "The most frequent value. There can be more than one." },
    { c: "c4", sym: `<i>n</i>`, name: "Count", desc: "The number of data values." }
  ],
  steps: { title: "How to find the mean, median and mode", items: [
    `Write the data in order from least to greatest and count the values <span class="m"><i>n</i></span>.`,
    `<b>Mean:</b> add all the values and divide by <span class="m"><i>n</i></span>.`,
    `<b>Median:</b> if <span class="m"><i>n</i></span> is odd, take the middle value. If even, average the two middle values.`,
    `<b>Mode:</b> find the value or values that appear most often.`,
    `Compare them. If the mean is far from the median, look for an outlier or skew.`
  ] },
  example: {
    prompt: `Your commute times this week (in minutes) were 22, 25, 34, 28, 25, 90 and 31. The 90 was a day with a road closure. Find the mean, median and mode. Which best describes a typical day?`,
    lines: [
      { math: `<span class="m">22, 25, 25, 28, 31, 34, 90</span>`, note: "Sort the data. There are n = 7 values." },
      { math: `<span class="m">22 + 25 + 25 + 28 + 31 + 34 + 90 = 255</span>`, note: "Add all the values." },
      { math: `<span class="m"><span class="c1"><i>x̄</i></span> = 255 ÷ 7 ≈ <span class="c1">36.4</span></span>`, note: "Mean, rounded to one decimal place." },
      { math: `<span class="m"><span class="c2"><i>M</i></span> = <i>x</i><sub>(4)</sub> = <span class="c2">28</span></span>`, note: "With 7 values the median is the 4th." },
      { math: `<span class="m"><span class="c3">Mo</span> = <span class="c3">25</span></span>`, note: "25 appears twice. Every other value appears once." }
    ],
    answer: `Mean <span class="m">≈ 36.4</span> min, median <span class="m">28</span> min, mode <span class="m">25</span> min. The median best describes a typical day, because the one 90-minute outlier pulls the mean higher than six of the seven commutes.`
  },
  why: `<p>Averages turn a pile of numbers into one you can use: a grade point average, a typical wait time, a batting average, a median home price. Knowing which average is being quoted, and why, is basic data literacy.</p>
<p>In statistics the mean is the starting point for variance, standard deviation and nearly every model. The median and other quantiles lead to box plots and robust methods that are not thrown off by outliers.</p>`,
  careers: [
    { role: "Real estate appraiser", use: "Uses median sale prices of comparable homes because a few luxury sales would distort the mean." },
    { role: "Teacher", use: "Computes mean scores to set grades and compares class medians to spot uneven results." },
    { role: "Meteorologist", use: "Reports normal temperatures as 30-year means for each calendar day." },
    { role: "Human resources analyst", use: "Compares median salaries across roles when setting pay bands." },
    { role: "Quality engineer", use: "Tracks the mean of sample measurements on control charts to see if a process has drifted." },
    { role: "Retail manager", use: "Uses the mode of shoe or clothing sizes sold to decide which sizes to stock most." }
  ],
  life: [
    "Working out what score you need on the next test to hit a target average",
    "Understanding median home prices in a news report",
    "Tracking your average monthly spending",
    "Comparing typical wait times at two clinics",
    "Choosing the most common size when ordering team shirts"
  ],
  fields: [
    { name: "Statistics", use: "Measures of centre are the first summary of any data set." },
    { name: "Economics", use: "Median household income and mean GDP per person describe living standards." },
    { name: "Psychology", use: "Experiments compare mean responses between groups." },
    { name: "Public health", use: "Median age, mean blood pressure and similar summaries describe populations." }
  ],
  prereqWhy: {
    "division": "The mean is a sum divided by a count.",
    "decimal-ops": "Means and medians are often decimals, and data such as prices or times are decimals to begin with."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Statistics", why: "The mean leads to variance, standard deviation, sampling distributions and hypothesis tests." },
    { field: "Probability", why: "The expected value of a random variable is a weighted mean." },
    { field: "Linear algebra", why: "Least-squares fitting generalises the fact that the mean minimises squared deviations." }
  ],
  mistakes: [
    { wrong: `Finding the median without sorting: the median of 13, 7, 21, 9, 15, 4 taken as the middle of the list as written.`, fix: `Sort first: 4, 7, 9, 13, 15, 21. The median is <span class="m">(9 + 13) ÷ 2 = 11</span>.` },
    { wrong: `Averaging averages: two classes with means 80 and 90 have an overall mean of 85.`, fix: `Only if the classes are the same size. With 10 students at 80 and 30 at 90, the mean is <span class="m">(800 + 2,700) ÷ 40 = 87.5</span>.` },
    { wrong: `Saying the mode is the frequency: "8 appears 3 times, so the mode is 3."`, fix: `The mode is the value, <span class="m">8</span>. The 3 is its frequency.` }
  ],
  practice: [
    { q: `Find the mean of 4, 8, 9, 11.`, a: `<span class="m">(4 + 8 + 9 + 11) ÷ 4 = 32 ÷ 4 = 8</span>` },
    { q: `Find the median of 13, 7, 21, 9, 15, 4.`, a: `Sorted: 4, 7, 9, 13, 15, 21. <span class="m">(9 + 13) ÷ 2 = 11</span>` },
    { q: `Find the mode of 3, 5, 5, 6, 8, 8, 8, 10.`, a: `<span class="m">8</span>, which appears three times.` },
    { q: `Your first four quiz scores are 82, 90, 76 and 88. What score do you need on the fifth quiz for a mean of 85?`, a: `You need a total of <span class="m">85 × 5 = 425</span>. You have <span class="m">82 + 90 + 76 + 88 = 336</span>. So you need <span class="m">425 − 336 = 89</span>.` }
  ],
  origin: `Averaging repeated measurements to reduce error became standard practice among astronomers in the 1600s and 1700s. Francis Galton popularised the term "median" in the 1880s, and Karl Pearson introduced "mode" in 1895.`
};
