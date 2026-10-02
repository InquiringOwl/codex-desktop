# @program sum
total = 0
for i in range(1, 6):
    total = total + i
print(total)
print(i)
# @program down
for k in range(10, 0, -3):
    print(k)
print("after the loop k is", k)
# @program range5
print(list(range(5)))
# @program range-step
print(list(range(2, 11, 3)))
# @program range-empty
print(list(range(5, 1)))
