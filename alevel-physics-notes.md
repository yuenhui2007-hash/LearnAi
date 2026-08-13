# A-Level Physics Complete Notes

**Last Updated:** 2026-08-13

---

## 1. Physical Quantities & Units

### 1.1 Base SI Units
| Quantity | Symbol | Unit | Unit Symbol |
|----------|--------|------|-------------|
| Mass | m | kilogram | kg |
| Length | l | metre | m |
| Time | t | second | s |
| Electric current | I | ampere | A |
| Temperature | T | kelvin | K |
| Amount of substance | n | mole | mol |
| Luminous intensity | Iᵥ | candela | cd |

### 1.2 Derived Units
All other units are combinations of base units. Examples:
- **Force**: kg m s⁻² (newton, N)
- **Energy**: kg m² s⁻² (joule, J)
- **Power**: kg m² s⁻³ (watt, W)
- **Pressure**: kg m⁻¹ s⁻² (pascal, Pa)
- **Charge**: A s (coulomb, C)
- **Potential difference**: kg m² s⁻³ A⁻¹ (volt, V)

### 1.3 Prefixes
| Prefix | Symbol | Multiplier |
|--------|--------|------------|
| tera | T | 10¹² |
| giga | G | 10⁹ |
| mega | M | 10⁶ |
| kilo | k | 10³ |
| centi | c | 10⁻² |
| milli | m | 10⁻³ |
| micro | μ | 10⁻⁶ |
| nano | n | 10⁻⁹ |
| pico | p | 10⁻¹² |
| femto | f | 10⁻¹⁵ |

### 1.4 Uncertainties & Errors
- **Random errors**: Cause readings to scatter about the true value. Reduced by taking repeated measurements and averaging.
- **Systematic errors**: Cause readings to deviate in one direction from the true value. Cannot be reduced by repeating; need recalibration or improved technique.
- **Absolute uncertainty**: ± value (e.g., 5.0 ± 0.1 cm)
- **Fractional uncertainty**: absolute uncertainty / measured value
- **Percentage uncertainty**: fractional uncertainty × 100%

**Combining uncertainties:**
- Addition/subtraction: add absolute uncertainties
- Multiplication/division: add percentage (or fractional) uncertainties
- Powers: multiply percentage uncertainty by the power

---

## 2. Kinematics

### 2.1 Equations of Motion (SUVAT)
For constant acceleration:

$$v = u + at$$
$$s = ut + \frac{1}{2}at^2$$
$$v^2 = u^2 + 2as$$
$$s = \frac{(u + v)}{2}t$$

Where:
- **s** = displacement (m)
- **u** = initial velocity (m s⁻¹)
- **v** = final velocity (m s⁻¹)
- **a** = acceleration (m s⁻²)
- **t** = time (s)

### 2.2 Motion Graphs
| Graph | Gradient gives | Area gives |
|-------|----------------|------------|
| Displacement-time | Velocity | — |
| Velocity-time | Acceleration | Displacement |
| Acceleration-time | — | Change in velocity |

- **Displacement** is a vector; **distance** is a scalar.
- **Velocity** is a vector; **speed** is a scalar.

### 2.3 Projectile Motion
Resolve into horizontal and vertical components:
- **Horizontal**: $u_x = u \cos\theta$, $a_x = 0$, so $v_x$ is constant
- **Vertical**: $u_y = u \sin\theta$, $a_y = -g$ (taking up as positive)

Key results:
- Time to max height: $t = \frac{u \sin\theta}{g}$
- Max height: $h = \frac{u^2 \sin^2\theta}{2g}$
- Range: $R = \frac{u^2 \sin 2\theta}{g}$ (max at θ = 45°)

---

## 3. Dynamics

### 3.1 Newton's Laws of Motion
1. **First Law**: A body remains at rest or in uniform motion unless acted upon by a resultant force.
2. **Second Law**: Resultant force equals rate of change of momentum.
   $$F = ma$$
   or more generally: $$F = \frac{\Delta p}{\Delta t}$$
3. **Third Law**: If body A exerts a force on body B, then B exerts an equal and opposite force on A.

### 3.2 Momentum & Impulse
- **Momentum**: $p = mv$ (vector, kg m s⁻¹)
- **Impulse**: $I = F \Delta t = \Delta p = mv - mu$
- Impulse equals the area under a force-time graph.

### 3.3 Conservation of Momentum
In a closed system with no external forces:
$$\sum p_{\text{before}} = \sum p_{\text{after}}$$

### 3.4 Collisions
| Type | Momentum | Kinetic Energy |
|------|----------|----------------|
| Elastic | Conserved | Conserved |
| Inelastic | Conserved | Not conserved |
| Perfectly inelastic | Conserved | Max loss; bodies stick together |

For elastic collisions in 1D:
$$v_1 - v_2 = -(u_1 - u_2)$$
(Relative speed of separation = relative speed of approach)

**Coefficient of restitution** ($e$):
$$e = \frac{\text{speed of separation}}{\text{speed of approach}}$$
- $e = 1$: perfectly elastic
- $e = 0$: perfectly inelastic

---

## 4. Forces

### 4.1 Types of Force
- **Weight**: $W = mg$ (acts towards centre of Earth)
- **Normal contact force**: Perpendicular to surface
- **Tension**: In ropes, cables, springs
- **Friction**: Opposes relative motion
- **Drag/air resistance**: Opposes motion through fluid; increases with speed
- **Upthrust**: Buoyant force; equal to weight of displaced fluid (Archimedes' principle)

### 4.2 Friction
- **Static friction**: $F_s \leq \mu_s N$ (adjusts to prevent motion)
- **Kinetic friction**: $F_k = \mu_k N$ (constant during sliding)
- $\mu_s > \mu_k$ typically

### 4.3 Centre of Gravity
The point where the entire weight of an object appears to act.
- For uniform objects: at geometric centre
- Finding it: suspend object from two points; plumb lines intersect at CoG

### 4.4 Moments & Torque
- **Moment of a force**: $M = F \times d$ (force × perpendicular distance from pivot)
- **Torque** of a couple: $\tau = F \times d$ (one force × perpendicular distance between forces)

**Principle of moments**: For equilibrium, sum of clockwise moments = sum of anticlockwise moments.

**Conditions for equilibrium:**
1. Resultant force = 0
2. Resultant moment = 0

---

## 5. Work, Energy & Power

### 5.1 Work Done
$$W = F s \cos\theta$$
Where θ is the angle between force and displacement.
- Work done by a force in direction of motion: $W = Fs$
- Work done against friction: energy dissipated as heat

### 5.2 Forms of Energy
| Type | Formula | Notes |
|------|---------|-------|
| Kinetic | $E_k = \frac{1}{2}mv^2$ | Energy of motion |
| Gravitational PE | $\Delta E_p = mg\Delta h$ | Near Earth's surface |
| Elastic PE | $E_e = \frac{1}{2}kx^2$ | For springs; k = spring constant |
| Electrical | $E = QV$ | — |

### 5.3 Conservation of Energy
Energy cannot be created or destroyed, only transferred from one form to another.
$$\Delta E_k + \Delta E_p + \text{work against friction} = 0$$

### 5.4 Power
$$P = \frac{W}{t} = Fv$$
- Measured in watts (W)
- **Efficiency**:
$$\text{Efficiency} = \frac{\text{useful power output}}{\text{total power input}} = \frac{\text{useful energy output}}{\text{total energy input}}$$

---

## 6. Circular Motion

### 6.1 Angular Quantities
- **Angular displacement**: θ (radians)
- **Angular velocity**: $\omega = \frac{\Delta \theta}{\Delta t}$ (rad s⁻¹)
- Relationship: $v = r\omega$ and $a = r\omega^2$

### 6.2 Centripetal Force & Acceleration
An object moving in a circle at constant speed is accelerating towards the centre.

$$a = \frac{v^2}{r} = r\omega^2$$
$$F = ma = \frac{mv^2}{r} = mr\omega^2$$

This **centripetal force** is always directed towards the centre and is provided by tension, friction, gravity, etc.

### 6.3 Banked Curves
For a road banked at angle θ, with no friction needed:
$$\tan\theta = \frac{v^2}{rg}$$

### 6.4 Vertical Circles
- **Top**: $T + mg = \frac{mv^2}{r}$ (minimum speed: $v = \sqrt{gr}$ for tension = 0)
- **Bottom**: $T - mg = \frac{mv^2}{r}$

---

## 7. Gravitational Fields

### 7.1 Newton's Law of Gravitation
$$F = \frac{Gm_1m_2}{r^2}$$
Where $G = 6.67 \times 10^{-11}$ N m² kg⁻²

### 7.2 Gravitational Field Strength
$$g = \frac{F}{m} = \frac{GM}{r^2}$$
At Earth's surface: $g \approx 9.81$ N kg⁻¹

### 7.3 Gravitational Potential
$$V = -\frac{GM}{r}$$
- Negative because work must be done to escape the field
- Scalar quantity
- Unit: J kg⁻¹

### 7.4 Gravitational Potential Energy
$$E_p = -\frac{GMm}{r}$$

### 7.5 Orbital Mechanics
For a circular orbit, gravitational force provides centripetal force:
$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

**Orbital speed**: $v = \sqrt{\frac{GM}{r}}$
**Orbital period**: $T^2 = \frac{4\pi^2}{GM}r^3$ (Kepler's 3rd law)

### 7.6 Escape Velocity
Minimum speed to escape gravitational field:
$$v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$$

### 7.7 Geostationary Orbits
- Period = 24 hours
- Above equator, moving west to east
- Fixed position relative to ground
- Altitude ≈ 36,000 km

---

## 8. Temperature & Ideal Gases

### 8.1 Temperature Scales
| Scale | Symbol | Water Freezing | Water Boiling |
|-------|--------|----------------|---------------|
| Celsius | °C | 0 | 100 |
| Kelvin | K | 273.15 | 373.15 |
| Fahrenheit | °F | 32 | 212 |

Conversion: $T(K) = T(°C) + 273.15$

### 8.2 Gas Laws
| Law | Relationship | Constant | Equation |
|-----|-------------|----------|----------|
| Boyle's | P vs V | T, n | $P \propto \frac{1}{V}$ or $PV = \text{const}$ |
| Charles' | V vs T | P, n | $V \propto T$ |
| Pressure | P vs T | V, n | $P \propto T$ |
| Avogadro | V vs n | P, T | $V \propto n$ |

### 8.3 Ideal Gas Equation
$$PV = nRT$$
Where $R = 8.31$ J mol⁻¹ K⁻¹

Alternative form: $PV = NkT$ where $k = 1.38 \times 10^{-23}$ J K⁻¹ (Boltzmann constant)

### 8.4 Kinetic Theory Assumptions
1. Large number of molecules in random motion
2. Volume of molecules negligible compared to container
3. No intermolecular forces except during collisions
4. Collisions are perfectly elastic
5. Time of collision negligible compared to time between collisions

### 8.5 Molecular Speeds
- **Mean square speed**: $\overline{c^2}$
- **Root-mean-square speed**: $c_{\text{rms}} = \sqrt{\overline{c^2}}$
- From kinetic theory: $pV = \frac{1}{3}Nm\overline{c^2}$
- Combining with ideal gas: $\frac{1}{2}m\overline{c^2} = \frac{3}{2}kT$

**Key result**: Mean kinetic energy of a molecule is proportional to absolute temperature.

### 8.6 Maxwell-Boltzmann Distribution
- Asymmetric distribution of molecular speeds
- Peak shifts right and flattens as T increases
- Area under curve is constant (total number of molecules)

---

## 9. Thermodynamics

### 9.1 First Law of Thermodynamics
$$\Delta U = q + w$$
Where:
- ΔU = change in internal energy
- q = heat supplied to system
- w = work done on system

Sign convention (physics): work done **on** gas is positive; heat **supplied** is positive.

### 9.2 Specific Heat Capacity
$$Q = mc\Delta\theta$$
Where c = specific heat capacity (J kg⁻¹ K⁻¹)

### 9.3 Specific Latent Heat
$$Q = mL$$
Where L = specific latent heat (J kg⁻¹)
- **Fusion** (solid → liquid)
- **Vaporisation** (liquid → gas)

### 9.4 Thermal Processes
| Process | Condition | Equation |
|---------|-----------|----------|
| Conduction | Through solids; no bulk movement | Rate $\propto \frac{\Delta T}{\text{thickness}}$ |
| Convection | Through fluids; bulk movement | Hot fluid rises, cool sinks |
| Radiation | Electromagnetic waves; no medium | $\propto T^4$ (Stefan-Boltzmann) |

### 9.5 Conduction Equation
$$\frac{dQ}{dt} = -kA\frac{dT}{dx}$$
Where k = thermal conductivity

---

## 10. Oscillations

### 10.1 Simple Harmonic Motion (SHM)
Motion where acceleration is proportional to displacement from equilibrium and directed towards it:
$$a = -\omega^2 x$$

### 10.2 SHM Equations
$$x = A \cos(\omega t)$$ or $$x = A \sin(\omega t)$$
$$v = -A\omega \sin(\omega t)$$
$$v_{\text{max}} = A\omega$$
$$a = -A\omega^2 \cos(\omega t)$$
$$a_{\text{max}} = A\omega^2$$

Where A = amplitude, ω = angular frequency

### 10.3 Period & Frequency
$$T = \frac{2\pi}{\omega} = \frac{1}{f}$$

### 10.4 Examples of SHM
| System | Period Formula |
|--------|---------------|
| Mass on spring | $T = 2\pi\sqrt{\frac{m}{k}}$ |
| Simple pendulum | $T = 2\pi\sqrt{\frac{l}{g}}$ |

### 10.5 Energy in SHM
- Total energy is constant
- $E_{\text{total}} = \frac{1}{2}mA^2\omega^2 = \frac{1}{2}kA^2$
- KE max at equilibrium; PE max at extremes
- $E_k = \frac{1}{2}m\omega^2(A^2 - x^2)$
- $E_p = \frac{1}{2}m\omega^2x^2$

### 10.6 Damped Oscillations
- **Light damping**: Amplitude decreases gradually
- **Critical damping**: Returns to equilibrium in shortest time without oscillating
- **Heavy damping**: Returns slowly without oscillating

### 10.7 Forced Oscillations & Resonance
- **Natural frequency** ($f_0$): frequency of free oscillations
- **Forced oscillations**: driven by external periodic force
- **Resonance**: when driving frequency = natural frequency; amplitude maximum
- Damping reduces peak amplitude and broadens resonance curve

---

## 11. Waves

### 11.1 Wave Basics
- **Displacement** (y): distance from equilibrium
- **Amplitude** (A): maximum displacement
- **Wavelength** (λ): distance between identical points
- **Period** (T): time for one complete cycle
- **Frequency** (f): cycles per second
- **Wave speed**: $v = f\lambda = \frac{\lambda}{T}$

### 11.2 Phase
- **In phase**: points with same displacement and velocity (phase difference = 0, 2π, etc.)
- **Antiphase**: phase difference = π, 3π, etc.
- Phase difference: $\Delta\phi = \frac{2\pi \Delta x}{\lambda}$

### 11.3 Types of Waves
| Feature | Transverse | Longitudinal |
|---------|-----------|--------------|
| Oscillation direction | Perpendicular to wave direction | Parallel to wave direction |
| Examples | Light, waves on string | Sound, compression in spring |
| Can travel through vacuum? | Yes (EM) | No |

### 11.4 Wave Equation
$$y = A \sin(kx - \omega t)$$
Where $k = \frac{2\pi}{\lambda}$ (wave number) and $\omega = 2\pi f$

### 11.5 Electromagnetic Spectrum
| Region | Wavelength (approx) | Source/Use |
|--------|---------------------|------------|
| Radio | > 1 m | Communications |
| Microwave | 1 mm – 1 m | Cooking, mobile phones |
| Infrared | 700 nm – 1 mm | Thermal imaging |
| Visible | 400 – 700 nm | Light |
| Ultraviolet | 10 – 400 nm | Tanning, sterilisation |
| X-ray | 0.01 – 10 nm | Medical imaging |
| Gamma | < 0.01 nm | Cancer treatment |

All travel at $c = 3.00 \times 10^8$ m s⁻¹ in vacuum.

### 11.6 Superposition Principle
When two or more waves meet, the resultant displacement equals the vector sum of individual displacements.

### 11.7 Interference
- **Constructive**: path difference = nλ
- **Destructive**: path difference = $(n + \frac{1}{2})\lambda$
- Requires coherent sources (constant phase relationship)

**Young's double slit**:
$$w = \frac{\lambda D}{s}$$
Where w = fringe spacing, D = slit-screen distance, s = slit separation

### 11.8 Standing Waves
Formed by interference of two waves of same frequency travelling in opposite directions.
- **Nodes**: points of zero amplitude (destructive interference)
- **Antinodes**: points of maximum amplitude (constructive interference)

For string fixed at both ends: $f_n = \frac{nv}{2L}$ where n = 1, 2, 3...

### 11.9 Diffraction
Spreading of waves through an aperture or around an obstacle.
- Significant when aperture ≈ wavelength
- Single slit: central maximum has width $\propto \frac{\lambda}{a}$ where a = slit width

---

## 12. Electric Fields

### 12.1 Coulomb's Law
$$F = \frac{Q_1Q_2}{4\pi\varepsilon_0 r^2}$$
Where $\varepsilon_0 = 8.85 \times 10^{-12}$ F m⁻¹

### 12.2 Electric Field Strength
$$E = \frac{F}{Q} = \frac{Q}{4\pi\varepsilon_0 r^2}$$
- Vector; direction is force on positive charge
- Unit: N C⁻¹ or V m⁻¹

**Field patterns:**
- Point charge: radial lines
- Parallel plates: uniform field, $E = \frac{V}{d}$

### 12.3 Electric Potential
$$V = \frac{Q}{4\pi\varepsilon_0 r}$$
- Scalar
- Unit: volt (V = J C⁻¹)
- Work done moving charge: $W = Q\Delta V$

### 12.4 Electric Potential Energy
$$E_p = \frac{Q_1Q_2}{4\pi\varepsilon_0 r}$$

### 12.5 Capacitance
$$C = \frac{Q}{V}$$
Unit: farad (F)

**Parallel plate capacitor:**
$$C = \frac{\varepsilon_0 \varepsilon_r A}{d}$$

**Energy stored:**
$$E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$

**Charging/dischcharging:**
- Charge: $Q = Q_0(1 - e^{-t/RC})$
- Discharge: $Q = Q_0e^{-t/RC}$
- Time constant: $\tau = RC$

---

## 13. Current Electricity

### 13.1 Basics
- **Current**: $I = \frac{\Delta Q}{\Delta t}$ (rate of flow of charge)
- **Drift velocity**: $I = nAve$ where n = charge carrier density, A = cross-sectional area, v = drift velocity, e = electron charge

### 13.2 Ohm's Law
$$V = IR$$
For ohmic conductors at constant temperature.

### 13.3 Resistance & Resistivity
$$R = \frac{\rho L}{A}$$
Where ρ = resistivity (Ω m)

**Temperature dependence:**
- Metals: R increases with T (more lattice vibrations)
- Semiconductors/thermistors: R decreases with T (more charge carriers)

### 13.4 Kirchhoff's Laws
1. **Current Law (KCL)**: Sum of currents entering a junction = sum leaving
2. **Voltage Law (KVL)**: Sum of emfs = sum of p.d.s around any closed loop

### 13.5 Resistor Combinations
- **Series**: $R_{\text{total}} = R_1 + R_2 + R_3 + ...$
- **Parallel**: $\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...$

### 13.6 Potential Dividers
$$V_{\text{out}} = V_{\text{in}} \times \frac{R_2}{R_1 + R_2}$$

With a sensor (e.g., thermistor or LDR):
- As temperature increases, thermistor resistance decreases → output voltage changes
- As light increases, LDR resistance decreases

### 13.7 emf & Internal Resistance
$$\mathcal{E} = I(R + r) = V + Ir$$
Where:
- $\mathcal{E}$ = emf
- r = internal resistance
- V = terminal p.d.
- Lost volts = Ir

---

## 14. Electronics

### 14.1 Operational Amplifiers (Op-amps)
- High open-loop gain (typically > 10⁵)
- Very high input impedance
- Very low output impedance
- Two inputs: inverting (−) and non-inverting (+)

**Inverting amplifier:**
$$V_{\text{out}} = -\frac{R_f}{R_{\text{in}}}V_{\text{in}}$$

**Non-inverting amplifier:**
$$V_{\text{out}} = \left(1 + \frac{R_f}{R_1}\right)V_{\text{in}}$$

**Comparator**: Compares two voltages; output saturates high or low

### 14.2 Diodes
- Allow current in one direction only
- Forward bias: conducts when V > threshold (~0.6 V for Si)
- Reverse bias: negligible current until breakdown

### 14.3 Rectification
- **Half-wave**: Only positive half-cycles pass
- **Full-wave bridge**: Both half-cycles, same polarity; uses 4 diodes
- **Smoothing**: Capacitor in parallel with load reduces ripple

### 14.4 Logic Gates
| Gate | Symbol | Truth Table |
|------|--------|-------------|
| AND | A·B | Output 1 only if all inputs 1 |
| OR | A+B | Output 1 if any input 1 |
| NOT | Ā | Output opposite of input |
| NAND | $\overline{A \cdot B}$ | NOT AND |
| NOR | $\overline{A + B}$ | NOT OR |
| XOR | A ⊕ B | Output 1 if inputs are different |

---

## 15. Magnetic Fields

### 15.1 Magnetic Field Patterns
- Bar magnet: field lines N → S externally
- Current-carrying wire: concentric circles (right-hand grip rule)
- Solenoid: similar to bar magnet

### 15.2 Force on a Current-Carrying Conductor
$$F = BIL\sin\theta$$
Where:
- B = magnetic flux density (tesla, T)
- I = current
- L = length of conductor in field
- θ = angle between current and field

### 15.3 Force on a Moving Charge
$$F = BQv\sin\theta$$
For an electron: $F = Bev$

### 15.4 Fleming's Left-Hand Rule (Motor Rule)
- **Thumb**: Motion/force
- **First finger**: Field (N → S)
- **Second finger**: Current (conventional + to −)

### 15.5 Circular Motion of Charged Particles
In uniform magnetic field (perpendicular entry):
$$r = \frac{mv}{BQ}$$
Period: $T = \frac{2\pi m}{BQ}$

### 15.6 Hall Effect
When current flows through conductor in magnetic field, p.d. develops across it.
$$V_H = \frac{BI}{ntq}$$
Used to measure B or determine charge carrier density.

---

## 16. Electromagnetic Induction

### 16.1 Magnetic Flux
$$\Phi = BA$$
For angle θ between B and normal to area:
$$\Phi = BA\cos\theta$$
Unit: weber (Wb)

### 16.2 Magnetic Flux Linkage
$$N\Phi = BAN\cos\theta$$
Where N = number of turns

### 16.3 Faraday's Law
Induced emf equals rate of change of magnetic flux linkage:
$$\mathcal{E} = -N\frac{d\Phi}{dt}$$

### 16.4 Lenz's Law
Induced current flows in a direction to oppose the change causing it.
(The minus sign in Faraday's law)

### 16.5 AC Generator
- Rotating coil in magnetic field
- $\mathcal{E} = BAN\omega \sin(\omega t)$
- Slip rings maintain contact

### 16.6 Transformers
$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$
For ideal transformer (100% efficient):
$$V_p I_p = V_s I_s$$

- **Step-up**: $N_s > N_p$, $V_s > V_p$
- **Step-down**: $N_s < N_p$, $V_s < V_p$
- Require AC (changing flux)
- Laminated iron core reduces eddy currents

---

## 17. Alternating Current

### 17.1 AC Basics
$$I = I_0 \sin(\omega t)$$
$$V = V_0 \sin(\omega t)$$
Where $I_0$, $V_0$ = peak values

### 17.2 RMS Values
Root-mean-square values give same heating effect as DC:
$$I_{\text{rms}} = \frac{I_0}{\sqrt{2}}$$
$$V_{\text{rms}} = \frac{V_0}{\sqrt{2}}$$

Mains electricity: 230 V rms, 50 Hz, so $V_0 \approx 325$ V

### 17.3 AC Circuits
| Component | Phase Relationship | Reactance |
|-----------|-------------------|-----------|
| Resistor | V and I in phase | R |
| Capacitor | I leads V by 90° | $X_C = \frac{1}{\omega C}$ |
| Inductor | V leads I by 90° | $X_L = \omega L$ |

### 17.4 Impedance
$$Z = \sqrt{R^2 + (X_L - X_C)^2}$$
$$I_{\text{rms}} = \frac{V_{\text{rms}}}{Z}$$

### 17.5 Resonance in LCR Circuits
At resonance: $X_L = X_C$, so $\omega_0 = \frac{1}{\sqrt{LC}}$
- Impedance is minimum (= R)
- Current is maximum
- Phase difference = 0

---

## 18. Quantum Physics

### 18.1 Photoelectric Effect
Light incident on metal surface can eject electrons.

**Einstein's equation:**
$$hf = \phi + \frac{1}{2}mv_{\text{max}}^2$$
Where:
- hf = photon energy
- φ = work function (minimum energy to escape)
- $\frac{1}{2}mv_{\text{max}}^2$ = maximum kinetic energy of emitted electrons

**Key observations explained by photon model:**
- No emission below threshold frequency ($f_0 = \frac{\phi}{h}$)
- KE of electrons depends on frequency, not intensity
- Emission is instantaneous
- Number of electrons ∝ intensity

**Stopping potential:** $eV_s = \frac{1}{2}mv_{\text{max}}^2$

### 18.2 de Broglie Wavelength
$$\lambda = \frac{h}{p} = \frac{h}{mv}$$
All particles have wave-like properties.

### 18.3 Wave-Particle Duality
- Light shows wave properties (interference, diffraction)
- Light shows particle properties (photoelectric effect)
- Electrons show particle properties (deflection by fields)
- Electrons show wave properties (electron diffraction)

### 18.4 Energy Levels
Electrons in atoms exist in discrete energy levels.

- **Emission**: electron drops to lower level; photon emitted with $hf = E_2 - E_1$
- **Absorption**: electron excited by photon with exactly right energy
- **Ionisation**: electron removed from atom (energy → 0)

### 18.5 Spectra
| Type | Appearance | Cause |
|------|-----------|-------|
| Continuous | All wavelengths | Hot dense object (e.g., filament) |
| Line emission | Bright lines | Excited gas/low pressure |
| Line absorption | Dark lines on continuous | Cool gas absorbing |

### 18.6 Hydrogen Spectrum
$$hf = 13.6\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right) \text{ eV}$$

---

## 19. Nuclear Physics

### 19.1 Atomic Structure
- Nucleon number (A) = protons + neutrons
- Proton number (Z) = number of protons
- Neutron number (N) = A − Z
- Isotopes: same Z, different N

### 19.2 Radioactive Decay
| Radiation | Symbol | Charge | Mass | Penetration | Ionisation |
|-----------|--------|--------|------|-------------|------------|
| Alpha | α | +2e | 4u | Stopped by paper | Strong |
| Beta | β⁻ | −e | ≈0 | Stopped by few mm Al | Moderate |
| Gamma | γ | 0 | 0 | Reduced by thick lead | Weak |

**Decay equations:**
- α decay: $^A_Z X \rightarrow ^{A-4}_{Z-2}Y + ^4_2\alpha$
- β⁻ decay: $^A_Z X \rightarrow ^A_{Z+1}Y + ^0_{-1}\beta + \bar{\nu}_e$
- β⁺ decay: $^A_Z X \rightarrow ^A_{Z-1}Y + ^0_{+1}\beta + \nu_e$

### 19.3 Decay Law
$$N = N_0 e^{-\lambda t}$$
$$A = A_0 e^{-\lambda t}$$
Where λ = decay constant

**Half-life:**
$$t_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}$$

**Activity:**
$$A = \lambda N$$
Unit: becquerel (Bq) = decays per second

### 19.4 Mass-Energy Equivalence
$$E = mc^2$$
$$1 \text{ u} = 931.5 \text{ MeV/c}^2$$

### 19.5 Binding Energy
Energy needed to separate nucleus into constituent nucleons.
- **Binding energy per nucleon** peaks at iron-56 (~8.8 MeV/nucleon)
- Higher BE per nucleon = more stable

### 19.6 Fission & Fusion
- **Fission**: Heavy nucleus splits (e.g., uranium); releases energy because products have higher BE per nucleon
- **Fusion**: Light nuclei combine; releases energy because product has higher BE per nucleon
- Both release energy because total mass decreases (mass defect)

---

## 20. Medical Physics

### 20.1 X-rays
- Produced when high-energy electrons decelerate in target
- **Bremsstrahlung**: continuous spectrum from deceleration
- **Characteristic**: line spectrum from electron transitions

$$I = I_0 e^{-\mu x}$$
Where μ = attenuation coefficient

**Half-value thickness (HVT):** thickness to reduce intensity by half
$$x_{1/2} = \frac{\ln 2}{\mu}$$

**Uses:**
- Radiography (conventional X-ray images)
- CT scans (3D imaging from multiple angles)
- Radiotherapy (cancer treatment)

### 20.2 Ultrasound
- Frequencies > 20 kHz (medical: 1–15 MHz)
- Produced by piezoelectric effect (crystal vibrates when AC applied)
- Partial reflection at boundaries

$$Z = \rho c$$ (acoustic impedance)
Intensity reflection coefficient:
$$\frac{I_r}{I_0} = \frac{(Z_2 - Z_1)^2}{(Z_2 + Z_1)^2}$$

**A-scan**: amplitude vs time (depth measurement)
**B-scan**: brightness modulated (2D image)

### 20.3 MRI (Magnetic Resonance Imaging)
- Hydrogen nuclei (protons) align in strong magnetic field
- Radio frequency pulse flips spin
- As protons relax, they emit RF signals
- Different tissues have different relaxation times (T1, T2)
- No ionising radiation; excellent soft tissue contrast

### 20.4 PET (Positron Emission Tomography)
- Radioactive tracer (e.g., fluorodeoxyglucose with ¹⁸F)
- Positron emitted; annihilates with electron → two gamma photons in opposite directions
- Detectors around patient detect coincident photons
- Used to detect cancer, brain activity, heart function

### 20.5 Dosimetry
| Quantity | Symbol | Unit | Meaning |
|----------|--------|------|---------|
| Exposure | X | C kg⁻¹ | Ionisation in air |
| Absorbed dose | D | gray (Gy = J kg⁻¹) | Energy absorbed per unit mass |
| Dose equivalent | H | sievert (Sv) | Biological effect; $H = DQ$ |
| Quality factor | Q | — | Q = 1 (X, γ, β); Q = 20 (α) |

**Effective dose** takes into account tissue weighting factors.

---

## 21. Astrophysics

### 21.1 Stellar Properties
| Property | Definition | Units |
|----------|-----------|-------|
| Luminosity (L) | Total power radiated | W |
| Apparent brightness (b) | Power per unit area at Earth | W m⁻² |
| Distance (d) | Distance from Earth | m, pc, ly |

**Inverse square law:**
$$b = \frac{L}{4\pi d^2}$$

### 21.2 Distance Measurement
- **Parallax**: $d (\text{pc}) = \frac{1}{p (\text{arcseconds})}$
- **1 parsec (pc)** ≈ 3.26 light-years ≈ $3.09 \times 10^{16}$ m
- **Standard candles** (e.g., Cepheid variables, Type Ia supernovae) have known luminosity

### 21.3 Stefan-Boltzmann Law
$$L = 4\pi r^2 \sigma T^4$$
Where σ = Stefan-Boltzmann constant = $5.67 \times 10^{-8}$ W m⁻² K⁻⁴

**Wien's displacement law:**
$$\lambda_{\text{max}} T = 2.898 \times 10^{-3} \text{ m K}$$

### 21.4 H-R Diagram
- **X-axis**: Temperature (decreasing left to right) or spectral class (O B A F G K M)
- **Y-axis**: Luminosity
- **Main sequence**: diagonal band; stars fusing H → He
- **Red giants**: upper right; evolved, expanded, cool surface
- **White dwarfs**: lower left; hot, small, dense

### 21.5 Stellar Evolution
| Initial Mass | Evolution |
|-------------|-----------|
| Low (< 0.5 M☉) | Main sequence for trillions of years; becomes white dwarf (very long timescale) |
| Medium (~1 M☉) | Main sequence → red giant → planetary nebula → white dwarf |
| High (> 8 M☉) | Main sequence → red supergiant → supernova → neutron star or black hole |

### 21.6 Doppler Effect
For electromagnetic radiation:
$$\frac{\Delta\lambda}{\lambda} = \frac{v}{c}$$
- Redshift: source moving away (λ increases)
- Blueshift: source moving towards

### 21.7 Cosmology
**Hubble's Law:**
$$v = H_0 d$$
Where $H_0 \approx 70$ km s⁻¹ Mpc⁻¹ (Hubble constant)

Implies universe is expanding.

**Age of universe** ≈ $\frac{1}{H_0} \approx 14$ billion years

### 21.8 Dark Matter & Dark Energy
- **Dark matter**: Does not emit light; detected by gravitational effects on visible matter and light bending
- **Dark energy**: Causes accelerating expansion of universe; makes up ~68% of energy density
- Ordinary matter: ~5%
- Dark matter: ~27%

---

## Exam Tips

### General Strategies
- **Always check units** — convert to SI before calculating.
- **Show working clearly** — method marks are generous even if final answer is wrong.
- **State assumptions** when required (e.g., ideal gas, negligible air resistance).
- **Sketch diagrams** — forces, field lines, ray diagrams, and circuit diagrams earn marks and clarify thinking.

### Definitions
- Define terms **precisely** using standard phrasing (e.g., "SHM is motion where acceleration is proportional to displacement from equilibrium and directed towards it").
- Distinguish between **scalar** and **vector** quantities where relevant.

### Calculations
- **Rearrange before substituting** — reduces calculator errors.
- **Use standard form** for very large/small numbers.
- **Check orders of magnitude** — is your answer reasonable?
- Remember: $g = 9.81$ m s⁻² unless told otherwise.

### Graphs
- Label **axes with quantities and units**.
- Draw **best-fit lines** (straight or smooth curves as appropriate).
- For linear relationships, state what **gradient and intercept** represent physically.

### Uncertainties
- Quote final answers to **appropriate significant figures** (usually 2–3).
- Show percentage uncertainty calculations explicitly.
- Remember: percentage uncertainties **add** for multiplication/division.

### Common Mistakes to Avoid
| Topic | Common Error |
|-------|-------------|
| SUVAT | Using equations when acceleration is not constant |
| Momentum | Forgetting momentum is a vector; mixing up signs |
| Circular motion | Thinking centrifugal force exists; it doesn't |
| Fields | Confusing field strength (vector) with potential (scalar) |
| Thermodynamics | Sign errors in first law; confusing heat and work |
| Capacitors | Using wrong equation for energy; forgetting time constant |
| AC | Confusing peak and rms values |
| Photoelectric effect | Thinking intensity affects KE of electrons |
| Nuclear | Not conserving nucleon/proton numbers in decay equations |
| Astrophysics | Mixing up luminosity and brightness |

### Key Equations to Memorise
While a data booklet is usually provided, instantly recalling these saves time:
- $v = u + at$ and other SUVAT equations
- $F = ma$ and $p = mv$
- $E_k = \frac{1}{2}mv^2$ and $\Delta E_p = mg\Delta h$
- $v = f\lambda$ and $E = hf$
- $V = IR$ and $P = IV = I^2R$
- $F = BIL$ and $F = BQv$
- $\mathcal{E} = -N\frac{d\Phi}{dt}$
- $E = mc^2$

### Before the Exam
- Practise **past papers** under timed conditions.
- Review **mark schemes** to learn expected phrasing.
- Make a **formulae sheet** of weak areas.
- Get comfortable with your calculator — especially standard form and roots.

---

*End of A-Level Physics Notes*
