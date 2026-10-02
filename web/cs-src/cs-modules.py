# @program math
import math
r = 3
area = math.pi * r ** 2
side = math.sqrt(16)
print(round(area, 2), side)
print(math.floor(2.7), math.floor(-2.7))
# @program random
import random
random.seed(1)
a = random.randint(1, 6)
b = random.randint(1, 6)
random.seed(1)
c = random.randint(1, 6)
print(a, b, c)
# @program main
def double(x):
    return 2 * x

print("__name__ is", __name__)
if __name__ == "__main__":
    print(double(21))
# @program p-from
from math import sqrt
print(sqrt(9), sqrt(2) ** 2 == 2)
# @program p-floor
import math
print(math.floor(-1.5), math.ceil(-1.5), int(-1.5))
# @program p-seed
import random
random.seed(2)
a = random.randint(1, 10)
random.seed(2)
b = random.randint(1, 10)
print(a == b, a)
