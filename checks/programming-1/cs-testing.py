# content: ce304e0cdaf8
from cs import *
import warnings
check("traces", traces_current("cs-testing"))
out, err = run_err("""
def average(nums):
    total = 0
    for i in range(1, len(nums)):
        total += nums[i]
    return total / len(nums)
assert average([0, 6]) == 3.0
print("test 1 passed")
assert average([4, 4]) == 4.0, "average([4, 4])"
print("test 2 passed")
""")
text("example", out + err, "test 1 passed\nAssertionError: average([4, 4])")
text("example: fixed version passes", run("""
def average(nums):
    total = 0
    for x in nums:
        total += x
    return total / len(nums)
assert average([0, 6]) == 3.0
print("test 1 passed")
assert average([4, 4]) == 4.0, "average([4, 4])"
print("test 2 passed")
"""), "test 1 passed\ntest 2 passed\n")
text("practice[0]", run("""
x = 5
assert x > 0
print("positive")
"""), "positive\n")
out, err = run_err("""
def double(n):
    return n + 2
assert double(2) == 4
assert double(3) == 6, "double(3)"
print("done")
""")
text("practice[1]", out + err, "AssertionError: double(3)")
text("practice[2]", run("""
def largest(nums):
    best = 0
    for x in nums:
        if x > best:
            best = x
    return best
print(largest([3, 9, 2]))
print(largest([-5, -2, -8]))
"""), "9\n0\n")
P3 = """
n = -1
assert (n > 0, "n must be positive")
print("passed")
"""
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")
    got = run(P3)
text("practice[3]", got, "passed\n")
check("practice[3]: Python warns assertion is always true", any("assertion is always true, perhaps remove parentheses?" in str(x.message) for x in w))
# formal rules
check("formal: true assert does nothing", run("assert 1 == 1\nprint('next')\n") == "next\n")
out, err = run_err("assert 1 == 2\n")
check("formal: false assert raises AssertionError", err == "AssertionError: ")
out, err = run_err("def m():\n    print('evaluated')\n    return 'msg'\nassert True, m()\nprint('ok')\n")
check("formal: message evaluated only on failure", out == "ok\n")
out, err = run_err("assert 0, 'zero'\n")
check("formal: falsy condition fails with message", err == "AssertionError: zero")
check("formal: 0.1 + 0.2 == 0.3 is False", value("0.1 + 0.2 == 0.3") == "False" and value("abs(0.1 + 0.2 - 0.3) < 1e-9") == "True")
import subprocess, sys
r = subprocess.run([sys.executable, "-O", "-c", "assert False\nprint('skipped')"], capture_output=True, text=True)
check("formal: -O skips asserts", r.stdout == "skipped\n")
out, err = run_err("def is_even(n):\n    return n % 2 == 1\nassert is_even(4), '4 should be even'\nprint('ok')\n")
check("lab: is_even bug", out == "" and err == "AssertionError: 4 should be even")
out, err = run_err("def average(nums):\n    return sum(nums) / len(nums)\nprint(average([2, 4]))\nprint(average([]))\n")
check("lab: empty list edge case", out == "3.0\n" and err == "ZeroDivisionError: division by zero")
check("mistakes: tuple is truthy", value("bool((False, 'x'))") == "True")
