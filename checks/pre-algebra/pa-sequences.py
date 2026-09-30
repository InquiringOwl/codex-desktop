# content: b91d18bbc08c
# pa-sequences: Arithmetic Sequences
R = Rational
# formal: explicit form equals dn + (a1 - d)
same("formal", a + (n - 1)*d, d*n + (a - d))

# example: a1 = 18, d = 2
an = 18 + (n - 1)*2
same("example", expand(an), 2*n + 16)
same("example", an.subs(n, 25), 66)
solves("example", Eq(an, 50), n, {17})
same("example", 18 + 16*2, 50)

# practice[0]: 7, 11, 15, 19
seq = [7, 11, 15, 19]
check("practice[0]", all(seq[i+1] - seq[i] == 4 for i in range(3)), "d should be 4")
same("practice[0]", expand(7 + 4*(n - 1)), 4*n + 3)
same("practice[0]", (7 + 4*(n - 1)).subs(n, 10), 43)

# practice[1]: 20, 14, 8, 2
seq = [20, 14, 8, 2]
check("practice[1]", all(seq[i+1] - seq[i] == -6 for i in range(3)), "d should be -6")
same("practice[1]", expand(20 - 6*(n - 1)), 26 - 6*n)
same("practice[1]", 6*12, 72)
same("practice[1]", (20 - 6*(n - 1)).subs(n, 12), -46)

# practice[2]: a1 = 3, a15 = 59
solves("practice[2]", Eq(3 + 14*d, 59), d, {4})
same("practice[2]", 59 - 3, 56)

# practice[3]: is 100 a term of 3, 8, 13, 18?
nn = solve(Eq(3 + 5*(n - 1), 100), n)[0]
same("practice[3]", 5*nn, 102)
same("practice[3]", nn, R(204, 10))
check("practice[3]", not nn.is_integer, "100 should not be a term")
same("practice[3]", 3 + 5*19, 98)
same("practice[3]", 3 + 5*20, 103)
