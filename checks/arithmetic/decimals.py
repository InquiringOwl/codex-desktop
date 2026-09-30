# content: a6abf08e12d5
# decimals: Decimals
R = Rational

# formal: lowest-terms fraction terminates iff denominator has only primes 2, 5
check("formal", set(factorint(8)) <= {2, 5} and not set(factorint(12)) <= {2, 5}, "termination criterion")

# example
same("example", R(3, 8), R(375, 1000))
_b = [R(4, 10), R(38, 100), R(375, 1000)]
check("example", [v for v in _b if v == R(3, 8)] == [R(375, 1000)], "only 0.375 matches 3/8")
same("example", sorted(_b), [R(375, 1000), R(38, 100), R(4, 10)])

# practice[0]
same("practice[0]", 3 + R(7, 100), R(307, 100))

# practice[1]
_v = [R(6, 10), R(6, 100), R(66, 100), R(606, 1000)]
same("practice[1]", sorted(_v), [R(6, 100), R(6, 10), R(606, 1000), R(66, 100)])

# practice[2]
same("practice[2]", R(7, 20), R(35, 100))
same("practice[2]", R(7 * 5, 20 * 5), R(35, 100))

# practice[3]: 5/12 = 0.41666...
same("practice[3]", R(5, 12), R(41, 100) + R(6, 1000) / (1 - R(1, 10)))
check("practice[3]", factorint(12) == {2: 2, 3: 1}, "12 = 2^2 * 3")
check("practice[3]", not set(factorint(R(5, 12).q)) <= {2, 5}, "5/12 should not terminate")
