# @program buggy
def average(nums):
    total = 0
    for i in range(1, len(nums)):
        total += nums[i]
    return total / len(nums)
assert average([0, 6]) == 3.0
print("test 1 passed")
assert average([4, 4]) == 4.0, "average([4, 4])"
print("test 2 passed")
# @program fixed
def average(nums):
    total = 0
    for x in nums:
        total += x
    return total / len(nums)
assert average([0, 6]) == 3.0
print("test 1 passed")
assert average([4, 4]) == 4.0, "average([4, 4])"
print("test 2 passed")
# @program largest
def largest(nums):
    best = 0
    for x in nums:
        if x > best:
            best = x
    return best
print(largest([3, 9, 2]))
print(largest([-5, -2, -8]))
# @program message
def is_even(n):
    return n % 2 == 1
assert is_even(4), "4 should be even"
print("ok")
# @program empty
def average(nums):
    return sum(nums) / len(nums)
print(average([2, 4]))
print(average([]))
