# content: ed5ed3917c13
# pa-coordinate: The Coordinate Plane
def quad(px, py):
    if px == 0 or py == 0: return None
    return {(1, 1): 'I', (-1, 1): 'II', (-1, -1): 'III', (1, -1): 'IV'}[(sign(px), sign(py))]

# example
check("example", quad(-3, 2) == 'II', "home in II")
check("example", quad(4, -5) == 'IV', "school in IV")
same("example", Abs(4 - (-3)), 7)
same("example", Abs(-5 - 2), 7)
same("example", Abs(4 - (-3)) + Abs(-5 - 2), 14)
check("example", -3 + 7 == 4 and 2 - 7 == -5, "check legs")
# practice[0]
check("practice[0]", quad(-4, 7) == 'II', "(-4,7) in II")
# practice[1]
check("practice[1]", quad(0, -3) is None, "on an axis, no quadrant")
same("practice[1]", Abs(-3), 3)
# practice[2]
w_, h_ = Abs(5 - (-2)), Abs(1 - (-3))
same("practice[2]", w_, 7); same("practice[2]", h_, 4)
same("practice[2]", 2*(w_ + h_), 22); same("practice[2]", w_*h_, 28)
# practice[3]
px, py = 3, -5
check("practice[3]", (px, -py) == (3, 5) and quad(px, -py) == 'I', "x-axis reflection")
check("practice[3]", (-px, py) == (-3, -5) and quad(-px, py) == 'III', "y-axis reflection")
check("practice[3]", (-px, -py) == (-3, 5) and quad(-px, -py) == 'II', "origin reflection")
