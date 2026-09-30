# content: fdadfd234a38
# a1-compound: Compound Inequalities & Interval Notation
R = Rational
# formal examples
same("formal", Intersection(Interval.open(3, oo), Interval.open(-oo, 2)), S.EmptySet)
same("formal", Union(Interval.open(-oo, 5), Interval.open(1, oo)), S.Reals)

# example: 72, 85, 79, final x
same("example", 72 + 85 + 79, 236)
avg = (236 + x)/4
s1 = Intersection(solveset(avg >= 80, x, Reals), solveset(avg < 90, x, Reals))
same("example", s1, Interval.Ropen(84, 124))
same("example", Intersection(s1, Interval(0, 100)), Interval(84, 100))
same("example", R(236 + 84, 4), 80)

same("practice[0]", Intersection(solveset(x > -2, x, Reals), solveset(x <= 5, x, Reals)), Interval.Lopen(-2, 5))
same("practice[1]", Union(solveset(2*x + 1 < -1, x, Reals), solveset(3*x >= 12, x, Reals)),
     Union(Interval.open(-oo, -1), Interval(4, oo)))
same("practice[2]", Intersection(solveset(-7 < 3 - 2*x, x, Reals), solveset(3 - 2*x <= 5, x, Reals)), Interval.Ropen(-1, 5))
same("practice[3]", Intersection(solveset(2*x + 1 > 7, x, Reals), solveset(3*x - 4 < 2, x, Reals)), S.EmptySet)
