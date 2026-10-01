# content: de375335678f
# mech-orbits: Gravitational Potential Energy, Orbits & Escape Speed
Gc = 6.67e-11; ME = 5.97e24; RE = 6.37e6; GM = Gc*ME

# formal: U from the integral, Earth values
rr, s = symbols('rr s', positive=True)
Gs, Ms, ms = symbols('Gs Ms ms', positive=True)
same("formal", -integrate(-Gs*Ms*ms/s**2, (s, oo, rr)), -Gs*Ms*ms/rr)
near("formal", sqrt(2*GM/RE), 1.12e4)
near("formal", sqrt(GM/RE), 7.91e3)

# example: 1000 kg at 400 km
r = RE + 4.00e5
near("example", GM, 3.98e14)
v = sqrt(GM/r)
near("example", v, 7.67e3)
T = 2*pi*r/v
near("example", T, 5.55e3)
near("example", T/60, 92.4)
E = -GM*1000/(2*r)
near("example", E, -2.94e10)
near("example", GM*1000/r, 5.88e10)
near("example", -E, 2.94e10)
near("example", sqrt(2)*v, 1.08e4)
check("example", sqrt(2)*v > v, "bound orbit slower than local escape speed")

# practice[0]: Moon
near("practice[0]", sqrt(2*Gc*7.35e22/1.74e6), 2.37e3)
near("practice[0]", sqrt(2*Gc*7.35e22/1.74e6)/sqrt(2*GM/RE), 0.2, rel=0.08)

# practice[1]: 1 kg to 400 km
dU = GM*(1/RE - 1/r)
near("practice[1]", dU, 3.69e6)
near("practice[1]", 9.80*4.00e5, 3.92e6)
near("practice[1]", 9.80*4.00e5/dU - 1, 0.06, rel=0.1)

# practice[2]: 15.0 km/s
near("practice[2]", sqrt(2*GM/RE), 1.118e4)
vinf = sqrt(15.0e3**2 - 2*GM/RE)
near("practice[2]", vinf, 1.00e4)
check("practice[2]", 0.5*15.0e3**2 - GM/RE > 0, "E > 0: escapes")

# practice[3]: 500 kg, 7.00e6 -> 7.50e6
near("practice[3]", 0.5*GM*500*(1/7.00e6 - 1/7.50e6), 9.48e8)
near("practice[3]", sqrt(GM/7.00e6)/1000, 7.54)
near("practice[3]", sqrt(GM/7.50e6)/1000, 7.29)
check("practice[3]", sqrt(GM/7.50e6) < sqrt(GM/7.00e6), "higher orbit is slower")
