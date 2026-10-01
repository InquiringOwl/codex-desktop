# content: 4f5611240134
# mech-units: Units, the SI & Unit Conversion
MI = Rational(1609344, 1000)   # 1 mi = 1609.344 m exactly

# formal: 1 m^3 = 10^6 cm^3; derived units
same("formal", 100**3, 10**6)
same("formal", Rational(90) * 1000 / 3600, 25)          # hero: 90.0 km/h = 25.0 m/s

# example: 100 m in 9.58 s
v = Rational(100) / Rational(958, 100)
near("example", v, 10.438, rel=0.0001)
near("example", v * 3600 / 1000, 37.6)
near("example", Rational(376, 10) / Rational(36, 10), 10.4)
check("example", 30 < v * Rational(36, 10) < 45, "plausible sprint speed in km/h")

# practice[0]: 47 000 m = 4.7e4 m = 47 km ; 0.0000025 s = 2.5e-6 s = 2.5 us
same("practice[0]", Rational(47000), Rational(47, 10) * 10**4)
same("practice[0]", Rational(47000) / 1000, 47)
same("practice[0]", Rational(25, 10**7), Rational(25, 10) * Rational(1, 10**6))

# practice[1]: 65.0 mi/h -> m/s
near("practice[1]", 65 * MI / 3600, 29.06, rel=0.0005)
near("practice[1]", 65 * MI / 3600, 29.1)

# practice[2]: 1.03 g/cm^3 -> kg/m^3
same("practice[2]", Rational(103, 100) / 1000 * 100**3, 1030)

# practice[3]: light-year
yr = Rational(36525, 100) * 24 * 3600
near("practice[3]", yr, 3.156e7)
near("practice[3]", Rational(2998, 10) * 10**6 * yr, 9.46e15)
near("practice[3]", 299792458 * yr, 9.46e15)
