# content: e0053d70b647
# g-reasoning: Inductive & Deductive Reasoning
from itertools import product
imp = lambda a, b: (not a) or b
regions = lambda N: binomial(N, 4) + binomial(N, 2) + 1
# formal: region sequence and validity of the laws
same("formal", [regions(N) for N in range(1, 8)], [1, 2, 4, 8, 16, 31, 57])
check("formal", all(regions(N) == 2**(N - 1) for N in range(1, 6)) and regions(6) != 2**5, "2^(n-1) first fails at n = 6")
cases3 = list(product([True, False], repeat=3))
check("formal", all(imp(imp(P, Q) and P, Q) for P, Q, R in cases3), "detachment valid")
check("formal", all(imp(imp(P, Q) and imp(Q, R), imp(P, R)) for P, Q, R in cases3), "syllogism valid")
check("formal", any(imp(P, Q) and Q and not P for P, Q, R in cases3), "affirming the conclusion invalid")
check("formal", any(imp(P, Q) and (not P) and Q for P, Q, R in cases3), "denying the hypothesis invalid")
# example: sum of first n odd numbers
k_ = symbols('k_', integer=True, positive=True)
nn = symbols('nn', integer=True, positive=True)
same("example", [sum(range(1, 2*m, 2)) for m in range(1, 5)], [1, 4, 9, 16])
same("example", summation(2*k_ - 1, (k_, 1, nn)), nn**2)
same("example", expand(nn**2 - (nn - 1)**2), 2*nn - 1)
same("example", expand((1 + (2*nn - 1)) * nn / 2), nn**2)
same("example", sum(range(1, 24, 2)), 144)
same("example", 2*12 - 1, 23)
same("example", 11**2 + 23, 144)
# practice[0]
seq = [3, 7, 11, 15]
check("practice[0]", all(seq[i+1] - seq[i] == 4 for i in range(3)), "common difference 4")
same("practice[0]", [4*m - 1 for m in range(1, 5)], seq)
same("practice[0]", 4*5 - 1, 19)
same("practice[0]", 4*10 - 1, 39)
# practice[1]: affirming the conclusion; two right angles are supplementary
check("practice[1]", 90 + 90 == 180, "two right angles are supplementary")
check("practice[1]", any(imp(P, Q) and Q and not P for P, Q in product([True, False], repeat=2)), "form is invalid")
# practice[2]: syllogism then detachment; square diagonals
check("practice[2]", all(imp(imp(P, Q) and imp(Q, R) and P, R) for P, Q, R in cases3), "syllogism + detachment valid")
same("practice[2]", sqrt(5**2 + 5**2), 5*sqrt(2))
# practice[3]
same("practice[3]", [binomial(6, 4), binomial(6, 2)], [15, 15])
same("practice[3]", regions(6), 31)
same("practice[3]", 2**5, 32)
same("practice[3]", regions(7), 57)
same("practice[3]", 2**6, 64)
