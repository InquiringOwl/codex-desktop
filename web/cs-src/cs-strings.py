# @program slices
s = "python"
a = s[0]
b = s[-1]
c = s[1:4]
d = s[::-1]
e = s[2:100]
print(a, b, c, d, e)
# @program vowels
word = "banana"
count = 0
for ch in word:
    if ch in "aeiou":
        count += 1
print(count)
# @program upper
s = "hello"
s.upper()
print(s)
# @program new
s = "hello"
t = s.upper()
print(s, t)
# @program assign
s = "cat"
s[0] = "b"
print(s)
