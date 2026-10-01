# content: c452c816216f
# mech-sigfigs: Significant Figures, Precision & Uncertainty
# example
A = 21.6*27.9
near("example", A, 602.64, rel=1e-6)
near("example", A, 603)
near("example", 2*(21.6 + 27.9), 99.0)
near("example", 0.1/21.6, 0.0046, rel=0.02); near("example", 0.1/27.9, 0.0036, rel=0.02)
p = 0.1/21.6 + 0.1/27.9
near("example", p, 0.0082, rel=0.01)
check("example", round(p*603) == 5, "uncertainty rounds to 5 cm^2")
near("example", 21.59*27.94, 603.2, rel=0.001)
check("example", abs(21.59*27.94 - 603) <= 5, "true area within range")

# practice[0]: counting
def sf(s):
    s = s.lstrip('0.').replace('.', '') if '.' in s else s.rstrip('0')
    return len(s)
same("practice[0]", sf("0.00420"), 3)
same("practice[0]", sf("6.020"), 4)
same("practice[0]", sf("5030"), 3)   # at least 3 (ambiguous)

# practice[1]
near("practice[1]", 12.52 + 3.1 + 0.456, 16.076, rel=1e-9)
same("practice[1]", round(12.52 + 3.1 + 0.456, 1), 16.1)

# practice[2]
near("practice[2]", 125.4/11.2, 11.196, rel=1e-4)
near("practice[2]", 125.4/11.2, 11.2)

# practice[3]
v = 0.0500/0.250
near("practice[3]", v, 0.200)
pct = 0.05/5.00 + 0.005/0.250
near("practice[3]", pct, 0.03)
near("practice[3]", pct*v, 0.006)
