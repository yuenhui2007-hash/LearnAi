const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

// ============================================================================
// CONTENT DATABASE — Comprehensive syllabus notes
// ============================================================================

const DB = {};
function reg(key, detailed, summary, tips, formulas = []) {
  DB[key] = { detailed, summary, tips, formulas };
}

// ============== CAIE PHYSICS ==============
reg('physics-p1',
`<h3>1. Physical Quantities & SI Units</h3>
<ul>
<li><strong>Base quantities:</strong> Length (m), Mass (kg), Time (s), Temperature (K), Current (A), Amount (mol), Luminous intensity (cd)</li>
<li><strong>Derived quantities:</strong> Velocity (m/s), Acceleration (m/s²), Force (N = kg·m/s²), Energy (J = N·m), Power (W = J/s), Pressure (Pa = N/m²)</li>
<li><strong>Prefixes:</strong> p (10⁻¹²), n (10⁻⁹), μ (10⁻⁶), m (10⁻³), c (10⁻²), d (10⁻¹), k (10³), M (10⁶), G (10⁹), T (10¹²)</li>
<li><strong>Homogeneity:</strong> Both sides of an equation must have the same base units</li>
<li><strong>Scalars:</strong> Magnitude only (mass, speed, temperature, energy, power, distance)</li>
<li><strong>Vectors:</strong> Magnitude and direction (displacement, velocity, acceleration, force, momentum, weight)</li>
</ul>
<h3>2. Measurement Techniques</h3>
<ul>
<li><strong>Precision:</strong> Degree of exactness (smallest division on instrument)</li>
<li><strong>Accuracy:</strong> Closeness to true value</li>
<li><strong>Uncertainty:</strong> ± half smallest division (analogue); ±1 digit (digital)</li>
<li><strong>Percentage uncertainty:</strong> (uncertainty / measured value) × 100%</li>
<li><strong>Combining uncertainties:</strong> Add absolute for ±; add percentage for ×÷</li>
<li><strong>Vernier calipers:</strong> Precision 0.01 mm — main scale + vernier alignment</li>
<li><strong>Micrometer screw gauge:</strong> Precision 0.01 mm — barrel + thimble scales</li>
</ul>`,
[`All physical quantities have units; base units are fundamental`,
 `Scalars: magnitude only; Vectors: magnitude + direction`,
 `Uncertainty = ±½ smallest division (analogue) or ±1 digit (digital)`,
 `Percentage uncertainty = (absolute uncertainty / reading) × 100%`,
 `For ×÷: add % uncertainties; For ±: add absolute uncertainties`,
 `Vernier reads to 0.01 mm; micrometer reads to 0.01 mm`]);

reg('physics-p2',
`<h3>1. Kinematics</h3>
<ul>
<li><strong>Displacement (s):</strong> Distance in a specified direction — vector</li>
<li><strong>Velocity (v):</strong> Rate of change of displacement; v = Δs/Δt</li>
<li><strong>Speed:</strong> Rate of change of distance — scalar</li>
<li><strong>Acceleration (a):</strong> Rate of change of velocity; a = Δv/Δt</li>
<li><strong>SUVAT equations</strong> (constant acceleration): v = u + at; s = ½(u+v)t; s = ut + ½at²; v² = u² + 2as; s = vt − ½at²</li>
<li><strong>Displacement-time graph:</strong> Gradient = velocity</li>
<li><strong>Velocity-time graph:</strong> Gradient = acceleration; Area = displacement</li>
<li><strong>Free fall:</strong> a = g ≈ 9.81 m/s² downward; mass-independent (no air resistance)</li>
<li><strong>Projectile motion:</strong> Horizontal: constant velocity; Vertical: a = −g</li>
</ul>
<h3>2. Dynamics</h3>
<ul>
<li><strong>Newton's First Law:</strong> Body at rest or uniform motion unless acted on by resultant force</li>
<li><strong>Newton's Second Law:</strong> F = ma</li>
<li><strong>Newton's Third Law:</strong> Equal and opposite forces on interacting bodies</li>
<li><strong>Weight:</strong> W = mg — gravitational force on mass</li>
<li><strong>Terminal velocity:</strong> When drag = weight; net force = 0</li>
</ul>`,
[`SUVAT equations only for constant acceleration`,
 `v-t graph: gradient = acceleration, area = displacement`,
 `Projectile: horizontal velocity constant, vertical a = −g`,
 `F = ma — resultant force causes acceleration`,
 `Newton's Third Law: forces on DIFFERENT bodies`,
 `Terminal velocity: drag = weight, a = 0`]);

reg('physics-p3',
`<h3>1. Forces & Moments</h3>
<ul>
<li><strong>Resolving:</strong> Fₓ = F cos θ, Fᵧ = F sin θ</li>
<li><strong>Equilibrium:</strong> ΣF = 0; Σ(clockwise moments) = Σ(anticlockwise moments)</li>
<li><strong>Moment:</strong> Force × perpendicular distance from pivot</li>
<li><strong>Couple:</strong> Pair of equal opposite parallel forces; torque = F × d</li>
</ul>
<h3>2. Momentum</h3>
<ul>
<li><strong>Momentum (p):</strong> p = mv — vector</li>
<li><strong>Conservation:</strong> Total momentum before = total momentum after (closed system)</li>
<li><strong>Impulse:</strong> FΔt = Δp = m(v−u)</li>
<li><strong>Elastic collision:</strong> KE conserved; relative speed of approach = separation</li>
<li><strong>Inelastic collision:</strong> KE not conserved; objects may stick</li>
</ul>
<h3>3. Work, Energy & Power</h3>
<ul>
<li><strong>Work:</strong> W = F·d·cos θ</li>
<li><strong>KE:</strong> Eₖ = ½mv²</li>
<li><strong>GPE:</strong> Eₚ = mgh</li>
<li><strong>Elastic PE:</strong> Eₑ = ½kx²</li>
<li><strong>Conservation of energy:</strong> Energy cannot be created or destroyed</li>
<li><strong>Efficiency:</strong> (useful output / total input) × 100%</li>
<li><strong>Power:</strong> P = W/t = Fv</li>
</ul>`,
[`Momentum p = mv — conserved in all collisions`,
 `Impulse = FΔt = Δp`,
 `Elastic: KE conserved; Inelastic: KE not conserved`,
 `Work = F·d·cos θ`,
 `KE = ½mv²; GPE = mgh; Elastic PE = ½kx²`,
 `Power P = W/t = Fv`,
 `Efficiency = (useful output / total input) × 100%`]);

reg('physics-p4',
`<h3>1. Wave Properties</h3>
<ul>
<li><strong>Wave equation:</strong> v = fλ</li>
<li><strong>Period:</strong> T = 1/f</li>
<li><strong>Transverse:</strong> Oscillations ⊥ to direction of travel (light, EM)</li>
<li><strong>Longitudinal:</strong> Oscillations ∥ to direction (sound)</li>
<li><strong>Intensity:</strong> I ∝ amplitude²; inverse square law: I ∝ 1/r²</li>
</ul>
<h3>2. EM Spectrum</h3>
<ul>
<li>Radio → Microwave → IR → Visible → UV → X-ray → Gamma</li>
<li>All travel at c = 3.0 × 10⁸ m/s in vacuum</li>
<li>Visible: 400 nm (violet) to 700 nm (red)</li>
</ul>
<h3>3. Reflection & Refraction</h3>
<ul>
<li><strong>Law of reflection:</strong> i = r (from normal)</li>
<li><strong>Refractive index:</strong> n = c/v = sin i / sin r</li>
<li><strong>Critical angle:</strong> sin c = 1/n</li>
<li><strong>TIR:</strong> i > c; basis of optical fibres</li>
</ul>
<h3>4. Interference & Diffraction</h3>
<ul>
<li><strong>Superposition:</strong> Resultant = sum of individual displacements</li>
<li><strong>Constructive:</strong> Path diff = nλ</li>
<li><strong>Destructive:</strong> Path diff = (n+½)λ</li>
<li><strong>Young's double slit:</strong> w = λD/a</li>
<li><strong>Diffraction grating:</strong> d sin θ = nλ</li>
</ul>
<h3>5. Polarisation</h3>
<ul>
<li>Only transverse waves can be polarised</li>
<li><strong>Malus's Law:</strong> I = I₀ cos² θ</li>
</ul>`,
[`v = fλ`,
 `Intensity ∝ amplitude²; I ∝ 1/r²`,
 `Snell's Law: n = sin i / sin r`,
 `Critical angle: sin c = 1/n`,
 `Young's slit: w = λD/a`,
 `Grating: d sin θ = nλ`,
 `Only transverse waves can be polarised`]);

reg('physics-p5',
`<h3>1. Charge & Current</h3>
<ul>
<li><strong>Q = It</strong></li>
<li><strong>Drift velocity:</strong> I = nAqv</li>
</ul>
<h3>2. Potential Difference & Resistance</h3>
<ul>
<li><strong>V = W/Q = IR</strong></li>
<li><strong>Ohm's Law:</strong> V = IR (ohmic conductors at constant T)</li>
<li><strong>Resistivity:</strong> R = ρL/A</li>
<li><strong>Metals:</strong> R increases with T (more lattice vibrations)</li>
<li><strong>Thermistors:</strong> R decreases with T (more charge carriers)</li>
</ul>
<h3>3. Power</h3>
<ul>
<li><strong>P = VI = I²R = V²/R</strong></li>
<li><strong>Energy:</strong> E = VIt</li>
<li><strong>1 kWh = 3.6 MJ</strong></li>
</ul>
<h3>4. DC Circuits</h3>
<ul>
<li><strong>Series:</strong> I same; V adds; R = R₁+R₂+...</li>
<li><strong>Parallel:</strong> V same; I adds; 1/R = 1/R₁+1/R₂+...</li>
<li><strong>Potential divider:</strong> V_out = V_in × R₂/(R₁+R₂)</li>
<li><strong>EMF:</strong> ε = V + Ir (terminal p.d. + lost volts)</li>
</ul>
<h3>5. Kirchhoff's Laws</h3>
<ul>
<li><strong>First:</strong> ΣI_in = ΣI_out (junction)</li>
<li><strong>Second:</strong> ΣEMF = ΣIR (loop)</li>
</ul>`,
[`Q = It; I = nAqv`,
 `Ohm's Law: V = IR`,
 `Resistivity: R = ρL/A`,
 `P = VI = I²R = V²/R`,
 `Series: R_total = R₁+R₂+...`,
 `Parallel: 1/R_total = 1/R₁+1/R₂+...`,
 `ε = V + Ir`,
 `Kirchhoff 1st: ΣI_in = ΣI_out; 2nd: ΣEMF = ΣIR`]);

reg('physics-p6',
`<h3>1. Magnetic Fields</h3>
<ul>
<li><strong>Flux density (B):</strong> Tesla (T)</li>
<li><strong>Uniform field:</strong> Parallel equally spaced lines</li>
</ul>
<h3>2. Force on Current</h3>
<ul>
<li><strong>F = BIL sin θ</strong></li>
<li><strong>Fleming's left-hand rule:</strong> Thumb (force), First (field), seCond (current)</li>
</ul>
<h3>3. Force on Moving Charge</h3>
<ul>
<li><strong>F = Bqv sin θ</strong></li>
<li><strong>Circular path:</strong> Bqv = mv²/r → r = mv/(Bq)</li>
</ul>
<h3>4. Electromagnetic Induction</h3>
<ul>
<li><strong>Faraday's Law:</strong> ε = −N dΦ/dt</li>
<li><strong>Flux:</strong> Φ = BA</li>
<li><strong>Lenz's Law:</strong> Induced effect opposes the change</li>
<li><strong>Moving conductor:</strong> ε = BLv</li>
</ul>
<h3>5. Transformers</h3>
<ul>
<li><strong>Vₚ/Vₛ = Nₚ/Nₛ</strong></li>
<li><strong>Ideal:</strong> VₚIₚ = VₛIₛ</li>
</ul>`,
[`F = BIL sin θ`,
 `F = Bqv sin θ`,
 `r = mv/(Bq)`,
 `ε = −N dΦ/dt`,
 `Lenz's Law: opposes the change`,
 `Transformer: Vₚ/Vₛ = Nₚ/Nₛ`]);

reg('physics-p7',
`<h3>1. Atomic Structure</h3>
<ul>
<li><strong>Proton number (Z):</strong> Defines element</li>
<li><strong>Nucleon number (A):</strong> Protons + neutrons</li>
<li><strong>Isotopes:</strong> Same Z, different neutron number</li>
</ul>
<h3>2. Radioactive Decay</h3>
<ul>
<li><strong>Alpha (α):</strong> ⁴₂He; stopped by paper; strongly ionising</li>
<li><strong>Beta (β⁻):</strong> ⁰_−₁e; stopped by aluminium</li>
<li><strong>Gamma (γ):</strong> EM radiation; stopped by thick lead</li>
</ul>
<h3>3. Decay Equations</h3>
<ul>
<li><strong>Alpha:</strong> ᴬ_Z X → ᴬ⁻⁴_Z₋₂ Y + ⁴₂α</li>
<li><strong>Beta:</strong> ᴬ_Z X → ᴬ_Z₊₁ Y + ⁰_−₁β + ν̄ₑ</li>
</ul>
<h3>4. Half-Life</h3>
<ul>
<li><strong>Activity (A):</strong> Decays per second; Bq</li>
<li><strong>t½:</strong> Time for activity to halve</li>
<li><strong>Decay constant:</strong> λ = ln(2)/t½ ≈ 0.693/t½</li>
<li><strong>Exponential:</strong> N = N₀e^(−λt); A = A₀e^(−λt)</li>
</ul>
<h3>5. Nuclear Energy</h3>
<ul>
<li><strong>E = mc²</strong></li>
<li><strong>1 u = 931.5 MeV/c²</strong></li>
<li><strong>Binding energy per nucleon peaks at Fe-56</strong></li>
<li><strong>Fission:</strong> Heavy splits → energy</li>
<li><strong>Fusion:</strong> Light combine → energy</li>
</ul>`,
[`Alpha: ⁴₂He; Beta: ⁰_−₁e; Gamma: photon`,
 `Conservation: A and Z balance`,
 `t½ = ln(2)/λ`,
 `N = N₀e^(−λt)`,
 `E = mc²; 1 u = 931.5 MeV`,
 `Binding energy peaks at Fe-56`,
 `Fission: heavy splits; Fusion: light combines`]);

reg('physics-p8',
`<h3>1. Temperature</h3>
<ul>
<li><strong>Thermal equilibrium:</strong> No net heat transfer at same temperature</li>
<li><strong>Kelvin:</strong> T(K) = T(°C) + 273.15</li>
<li><strong>Absolute zero:</strong> 0 K = −273.15°C</li>
</ul>
<h3>2. Thermal Expansion</h3>
<ul>
<li><strong>Linear:</strong> ΔL = αL₀ΔT</li>
<li><strong>Water anomaly:</strong> Contracts 0→4°C, then expands</li>
</ul>
<h3>3. Specific Heat Capacity</h3>
<ul>
<li><strong>c = Q/(mΔT)</strong></li>
<li><strong>Method of mixtures:</strong> Heat lost = heat gained</li>
</ul>
<h3>4. Specific Latent Heat</h3>
<ul>
<li><strong>Q = mL</strong></li>
<li><strong>Fusion:</strong> solid → liquid</li>
<li><strong>Vaporisation:</strong> liquid → gas</li>
<li>Temperature constant during phase change</li>
</ul>
<h3>5. Ideal Gases</h3>
<ul>
<li><strong>Boyle's:</strong> pV = const (T const)</li>
<li><strong>Charles's:</strong> V/T = const (p const)</li>
<li><strong>Pressure Law:</strong> p/T = const (V const)</li>
<li><strong>Ideal gas:</strong> pV = nRT = NkT</li>
<li><strong>Mean KE:</strong> ½m⟨c²⟩ = (3/2)kT</li>
<li><strong>c_rms:</strong> √(3kT/m) = √(3RT/M)</li>
</ul>`,
[`T(K) = T(°C) + 273.15`,
 `Q = mcΔT`,
 `Q = mL (phase change)`,
 `Ideal gas: pV = nRT`,
 `Mean KE = (3/2)kT`,
 `c_rms = √(3RT/M)`]);

reg('physics-p9',
`<h3>1. Simple Harmonic Motion</h3>
<ul>
<li><strong>Definition:</strong> a = −ω²x</li>
<li><strong>Displacement:</strong> x = A cos(ωt)</li>
<li><strong>Velocity:</strong> v = ±ω√(A²−x²); v_max = ωA</li>
<li><strong>Acceleration:</strong> a = −ω²x; a_max = ω²A</li>
<li><strong>Period:</strong> T = 2π/ω</li>
<li><strong>Energy:</strong> Total = ½mω²A² (constant)</li>
</ul>
<h3>2. Mass-Spring</h3>
<ul>
<li><strong>T = 2π√(m/k)</strong></li>
</ul>
<h3>3. Simple Pendulum</h3>
<ul>
<li><strong>T = 2π√(L/g)</strong></li>
<li>Valid for small angles (θ < 10°)</li>
<li>Independent of mass and amplitude</li>
</ul>
<h3>4. Damping</h3>
<ul>
<li><strong>Light:</strong> Amplitude decreases gradually</li>
<li><strong>Critical:</strong> Fastest return without oscillating</li>
<li><strong>Heavy:</strong> Slow return without oscillating</li>
</ul>
<h3>5. Resonance</h3>
<ul>
<li><strong>Resonance:</strong> Maximum amplitude when driving freq = natural freq</li>
<li>Damping reduces resonance peak</li>
</ul>`,
[`SHM: a = −ω²x`,
 `v_max = ωA; a_max = ω²A`,
 `Spring: T = 2π√(m/k)`,
 `Pendulum: T = 2π√(L/g)`,
 `Resonance: driving freq = natural freq`]);

reg('physics-p10',
`<h3>1. Electric Fields</h3>
<ul>
<li><strong>E = F/Q = V/d</strong> (uniform)</li>
<li><strong>Point charge:</strong> E = Q/(4πε₀r²)</li>
<li><strong>Coulomb:</strong> F = Q₁Q₂/(4πε₀r²)</li>
</ul>
<h3>2. Electric Potential</h3>
<ul>
<li><strong>V = Q/(4πε₀r)</strong></li>
<li><strong>E = −dV/dr</strong></li>
</ul>
<h3>3. Gravitational Fields</h3>
<ul>
<li><strong>g = GM/r²</strong></li>
<li><strong>F = GMm/r²</strong></li>
<li><strong>φ = −GM/r</strong></li>
<li><strong>Escape velocity:</strong> v = √(2GM/R)</li>
</ul>
<h3>4. Orbital Mechanics</h3>
<ul>
<li><strong>v = √(GM/r)</strong></li>
<li><strong>T² = (4π²/GM)r³</strong> (Kepler's 3rd)</li>
<li><strong>Total energy:</strong> E = −GMm/(2r)</li>
</ul>`,
[`E = Q/(4πε₀r²)`,
 `g = GM/r²`,
 `φ = −GM/r`,
 `v_orbital = √(GM/r)`,
 `T² ∝ r³`,
 `E_total = −GMm/(2r)`]);

reg('physics-p11',
`<h3>1. Capacitance</h3>
<ul>
<li><strong>C = Q/V</strong></li>
<li><strong>Parallel plate:</strong> C = ε₀A/d</li>
</ul>
<h3>2. Energy Stored</h3>
<ul>
<li><strong>W = ½CV² = ½QV = ½Q²/C</strong></li>
</ul>
<h3>3. Charging & Discharging</h3>
<ul>
<li><strong>Charging:</strong> Q = Q₀(1−e^(−t/RC))</li>
<li><strong>Discharging:</strong> Q = Q₀e^(−t/RC)</li>
<li><strong>Time constant:</strong> τ = RC</li>
<li>After 5τ: >99% complete</li>
</ul>`,
[`C = Q/V`,
 `W = ½CV²`,
 `τ = RC`,
 `Discharge: Q = Q₀e^(−t/RC)`]);

reg('physics-p12',
`<h3>1. Photoelectric Effect</h3>
<ul>
<li><strong>Einstein:</strong> hf = Φ + ½mv²_max</li>
<li><strong>Threshold:</strong> f₀ = Φ/h</li>
<li><strong>Stopping potential:</strong> eVₛ = hf − Φ</li>
</ul>
<h3>2. Wave-Particle Duality</h3>
<ul>
<li><strong>de Broglie:</strong> λ = h/p = h/(mv)</li>
</ul>
<h3>3. Energy Levels</h3>
<ul>
<li><strong>ΔE = hf = hc/λ</strong></li>
<li>Ionisation: electron removed to infinity</li>
</ul>
<h3>4. Nuclear Structure</h3>
<ul>
<li><strong>Nuclear radius:</strong> R = R₀A^(1/3)</li>
</ul>
<h3>5. Particle Physics</h3>
<ul>
<li><strong>Quarks:</strong> u (+2/3), d (−1/3), s (−1/3)</li>
<li><strong>Proton:</strong> uud; <strong>Neutron:</strong> udd</li>
</ul>`,
[`hf = Φ + ½mv²_max`,
 `λ = h/p`,
 `ΔE = hf`,
 `Proton = uud; Neutron = udd`]);

reg('physics-p13',
`<h3>1. Stellar Properties</h3>
<ul>
<li><strong>L = 4πR²σT⁴</strong> (Stefan-Boltzmann)</li>
<li><strong>Wien:</strong> λ_max T = 2.898×10⁻³ m·K</li>
<li><strong>Brightness:</strong> b = L/(4πd²)</li>
</ul>
<h3>2. H-R Diagram</h3>
<ul>
<li>Main sequence, red giants, white dwarfs</li>
<li>Spectral: O, B, A, F, G, K, M</li>
</ul>
<h3>3. Star Evolution</h3>
<ul>
<li><strong>Sun-like:</strong> Main seq → Red giant → White dwarf</li>
<li><strong>Massive:</strong> → Red supergiant → Supernova → Neutron star/Black hole</li>
</ul>
<h3>4. Cosmology</h3>
<ul>
<li><strong>Hubble:</strong> v = H₀d</li>
<li><strong>Redshift:</strong> z = Δλ/λ ≈ v/c</li>
<li><strong>CMB:</strong> 2.7 K radiation from Big Bang</li>
</ul>`,
[`L = 4πR²σT⁴`,
 `λ_max T = 2.898×10⁻³`,
 `v = H₀d`,
 `CMB = 2.7 K`]);

reg('physics-p14',
`<h3>1. Measurement</h3>
<ul>
<li><strong>Systematic:</strong> Consistent bias</li>
<li><strong>Random:</strong> Statistical fluctuations</li>
</ul>
<h3>2. Data Analysis</h3>
<ul>
<li><strong>Linearisation:</strong> y = mx + c</li>
<li><strong>Log plots:</strong> For power laws</li>
</ul>
<h3>3. Graphical Analysis</h3>
<ul>
<li><strong>Error bars</strong></li>
<li><strong>Worst acceptable lines</strong></li>
</ul>`,
[`Systematic: consistent bias; Random: fluctuations`,
 `Linearise to y = mx + c`,
 `Use error bars and worst acceptable lines`]);

// ============== CAIE CHEMISTRY ==============
reg('chemistry-c1',
`<h3>1. Atomic Structure</h3>
<ul>
<li><strong>Protons:</strong> mass 1, charge +1</li>
<li><strong>Neutrons:</strong> mass 1, charge 0</li>
<li><strong>Electrons:</strong> mass 1/1836, charge −1</li>
<li><strong>A =</strong> protons + neutrons; <strong>Z =</strong> protons</li>
</ul>
<h3>2. Isotopes</h3>
<ul>
<li>Same Z, different neutron number</li>
<li><strong>Aᵣ =</strong> Σ(isotope mass × abundance)/100</li>
</ul>
<h3>3. Mass Spectrometry</h3>
<ul>
<li>Vaporisation → Ionisation → Acceleration → Deflection → Detection</li>
<li>m/z gives mass of ion</li>
</ul>
<h3>4. Electron Configuration</h3>
<ul>
<li><strong>Order:</strong> 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...</li>
<li><strong>Special:</strong> Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹</li>
</ul>
<h3>5. Ionisation Energy</h3>
<ul>
<li>Energy to remove 1 mole of electrons from gaseous atoms</li>
<li>Dips at Group 13 (3p higher energy) and Group 16 (paired e⁻ repulsion)</li>
</ul>`,
[`Aᵣ = Σ(isotope mass × % abundance)/100`,
 `Aufbau: 1s, 2s, 2p, 3s, 3p, 4s, 3d...`,
 `Cr = 3d⁵ 4s¹; Cu = 3d¹⁰ 4s¹`,
 `IE dips at Groups 13 and 16`]);

reg('chemistry-c2',
`<h3>1. Ionic Bonding</h3>
<ul>
<li>Electrostatic attraction between oppositely charged ions</li>
<li>High mp; conduct when molten/aqueous</li>
</ul>
<h3>2. Covalent Bonding</h3>
<ul>
<li>Sharing of electron pairs</li>
<li><strong>Coordinate:</strong> Both e⁻ from one atom</li>
</ul>
<h3>3. VSEPR Shapes</h3>
<ul>
<li>2 pairs = linear (180°)</li>
<li>3 pairs = trigonal planar (120°)</li>
<li>4 pairs = tetrahedral (109.5°)</li>
<li>3+1 = trigonal pyramidal (107°)</li>
<li>2+2 = bent (104.5°)</li>
<li>6 pairs = octahedral (90°)</li>
</ul>
<h3>4. Intermolecular Forces</h3>
<ul>
<li><strong>van der Waals:</strong> Present in all; increases with e⁻ number</li>
<li><strong>Dipole-dipole:</strong> Polar molecules</li>
<li><strong>H-bonding:</strong> H bonded to N, O, F</li>
</ul>
<h3>5. Metallic & Giant Covalent</h3>
<ul>
<li><strong>Metallic:</strong> Cations in sea of delocalised e⁻</li>
<li><strong>Diamond:</strong> Each C bonded to 4 others; hard</li>
<li><strong>Graphite:</strong> Layers; delocalised e⁻ between layers</li>
</ul>`,
[`VSEPR: lone pairs repel more → smaller angles`,
 `2 = linear; 3 = trigonal planar; 4 = tetrahedral`,
 `H-bonding: H with N, O, or F`,
 `Metallic: cations + delocalised electrons`]);

reg('chemistry-c3',
`<h3>1. The Mole</h3>
<ul>
<li><strong>n = mass/M = C×V = V(gas)/24</strong> (rtp)</li>
<li>L = 6.022 × 10²³ mol⁻¹</li>
</ul>
<h3>2. Formulae</h3>
<ul>
<li><strong>Empirical:</strong> Simplest ratio</li>
<li><strong>Molecular:</strong> (empirical)ₙ where n = Mᵣ/empirical mass</li>
</ul>
<h3>3. Calculations</h3>
<ul>
<li>Limiting reagent determines max product</li>
<li>% yield = (actual/theoretical) × 100</li>
</ul>
<h3>4. Gas Laws</h3>
<ul>
<li>Molar volume = 24.0 dm³/mol at rtp</li>
<li><strong>pV = nRT</strong></li>
</ul>
<h3>5. Titration</h3>
<ul>
<li>n = C × V (dm³)</li>
<li>Use mole ratio from equation</li>
</ul>`,
[`n = mass/M = C×V`,
 `Empirical = simplest ratio`,
 `% yield = (actual/theoretical) × 100`,
 `pV = nRT`,
 `Titration: n = C×V, use mole ratio`]);

reg('chemistry-c4',
`<h3>1. Enthalpy Changes</h3>
<ul>
<li><strong>Exothermic:</strong> ΔH < 0 (heat released)</li>
<li><strong>Endothermic:</strong> ΔH > 0 (heat absorbed)</li>
</ul>
<h3>2. Types</h3>
<ul>
<li><strong>Formation:</strong> Elements → compound</li>
<li><strong>Combustion:</strong> Substance + O₂ → oxides</li>
<li><strong>Neutralisation:</strong> Acid + base → salt + water</li>
</ul>
<h3>3. Calorimetry</h3>
<ul>
<li><strong>q = mcΔT</strong></li>
</ul>
<h3>4. Hess's Law</h3>
<ul>
<li>ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants)</li>
<li>Bond enthalpies: ΔH = Σ(broken) − Σ(formed)</li>
</ul>
<h3>5. Gibbs Free Energy</h3>
<ul>
<li><strong>ΔG = ΔH − TΔS</strong></li>
<li>Spontaneous when ΔG < 0</li>
</ul>`,
[`Exothermic: ΔH < 0; Endothermic: ΔH > 0`,
 `Hess: ΔH = ΣΔHf(products) − ΣΔHf(reactants)`,
 `Bond: ΔH = Σ(broken) − Σ(formed)`,
 `ΔG = ΔH − TΔS; spontaneous if ΔG < 0`]);

reg('chemistry-c5',
`<h3>1. Factors Affecting Rate</h3>
<ul>
<li>Concentration, pressure, surface area, temperature, catalyst</li>
</ul>
<h3>2. Collision Theory</h3>
<ul>
<li>Need: sufficient energy (≥ Eₐ) AND correct orientation</li>
</ul>
<h3>3. Rate Equations</h3>
<ul>
<li><strong>Rate = k[A]ᵐ[B]ⁿ</strong></li>
<li>0 order: [A] vs t linear</li>
<li>1st order: ln[A] vs t linear, constant t½</li>
<li>2nd order: 1/[A] vs t linear</li>
</ul>
<h3>4. Arrhenius</h3>
<ul>
<li><strong>k = Ae^(−Eₐ/RT)</strong></li>
<li>ln k vs 1/T → gradient = −Eₐ/R</li>
</ul>`,
[`Rate = k[A]ᵐ[B]ⁿ`,
 `1st order: ln[A] vs t linear`,
 `t½ constant for 1st order`,
 `k = Ae^(−Eₐ/RT)`]);

reg('chemistry-c6',
`<h3>1. Dynamic Equilibrium</h3>
<ul>
<li>Forward rate = reverse rate; concentrations constant</li>
<li><strong>Kc =</strong> [products]/[reactants] (stoichiometric powers)</li>
</ul>
<h3>2. Le Chatelier</h3>
<ul>
<li>System opposes the change</li>
<li>Conc: add reactant → shifts right</li>
<li>Pressure: increase → fewer gas moles</li>
<li>Temperature: increase → endothermic direction</li>
<li>Catalyst: no effect on position</li>
</ul>
<h3>3. Kp</h3>
<ul>
<li>Kp = (partial pressure products)/(partial pressure reactants)</li>
<li>Kp = Kc(RT)^Δn</li>
</ul>`,
[`Kc only changes with temperature`,
 `Le Chatelier: system opposes change`,
 `Catalyst: speeds both directions equally`,
 `Kp = Kc(RT)^Δn`]);

reg('chemistry-c7',
`<h3>1. Oxidation Numbers</h3>
<ul>
<li>Elements = 0; ions = charge</li>
<li>O = −2 (usually); H = +1 (usually)</li>
<li>Sum in compound = 0; in ion = charge</li>
</ul>
<h3>2. Redox Equations</h3>
<ul>
<li>Balance atoms, then charge with e⁻</li>
<li>Combine half-equations</li>
</ul>
<h3>3. Electrochemical Cells</h3>
<ul>
<li>E°cell = E°cathode − E°anode = E°right − E°left</li>
<li>E°cell > 0 → spontaneous</li>
</ul>
<h3>4. Electrolysis</h3>
<ul>
<li>Anode = oxidation; Cathode = reduction</li>
<li>n = Q/(zF) = It/(zF)</li>
</ul>`,
[`OIL RIG: Oxidation Is Loss`,
 `E°cell = E°right − E°left`,
 `E°cell > 0 = spontaneous`,
 `n = It/(zF)`]);

reg('chemistry-c8',
`<h3>1. Group 2</h3>
<ul>
<li>Reactivity increases down group</li>
<li>Hydroxide solubility increases down group</li>
<li>Sulfate solubility decreases down group</li>
</ul>
<h3>2. Group 17</h3>
<ul>
<li>Reactivity decreases down group</li>
<li>Displacement: more reactive displaces less reactive</li>
</ul>
<h3>3. Transition Metals</h3>
<ul>
<li>Variable oxidation states, coloured, catalytic</li>
<li>d-d transitions cause colour</li>
</ul>`,
[`Group 2: reactivity ↑ down; OH⁻ solubility ↑; SO₄²⁻ solubility ↓`,
 `Halogens: reactivity ↓ down`,
 `Transition metals: variable oxidation states, coloured, catalytic`]);

reg('chemistry-c9',
`<h3>1. Nomenclature</h3>
<ul>
<li>Longest carbon chain; lowest locants</li>
</ul>
<h3>2. Alkanes</h3>
<ul>
<li>CₙH₂ₙ₊₂; free radical substitution</li>
</ul>
<h3>3. Alkenes</h3>
<ul>
<li>CₙH₂ₙ; electrophilic addition</li>
<li>Markovnikov: H adds to C with more H</li>
<li>Br₂ test: red-brown → colourless</li>
</ul>
<h3>4. Stereoisomerism</h3>
<ul>
<li>E/Z: priority groups same side = Z, opposite = E</li>
</ul>`,
[`Alkanes: CₙH₂ₙ₊₂`,
 `Alkenes: CₙH₂ₙ; Markovnikov addition`,
 `Br₂ test for unsaturation`,
 `E/Z isomerism at C=C`]);

reg('chemistry-c10',
`<h3>1. Alcohols</h3>
<ul>
<li>1° → aldehyde → acid; 2° → ketone; 3° → resistant</li>
</ul>
<h3>2. Aldehydes & Ketones</h3>
<ul>
<li>Tollens': silver mirror (aldehydes only)</li>
<li>Fehling's: red precipitate (aldehydes only)</li>
</ul>
<h3>3. Carboxylic Acids</h3>
<ul>
<li>Weak acids; react with metals, carbonates, alcohols</li>
</ul>
<h3>4. Esters</h3>
<ul>
<li>Acid + alcohol ⇌ ester + water</li>
</ul>
<h3>5. IR Spectroscopy</h3>
<ul>
<li>O-H broad ~3300 cm⁻¹</li>
<li>C=O sharp ~1700 cm⁻¹</li>
</ul>`,
[`1° alcohol → aldehyde → acid`,
 `Tollens': silver mirror with aldehydes`,
 `Esterification: reversible`,
 `IR: O-H ~3300, C=O ~1700`]);

reg('chemistry-c11',
`<h3>1. Acyl Chlorides</h3>
<ul>
<li>Most reactive derivative; react with alcohols, amines, water</li>
</ul>
<h3>2. Benzene</h3>
<ul>
<li>Substitution not addition (preserves aromaticity)</li>
<li>Nitration: NO₂⁺ electrophile</li>
</ul>
<h3>3. Phenol</h3>
<ul>
<li>More acidic than alcohols</li>
<li>Br₂ water → white precipitate</li>
</ul>
<h3>4. Amines</h3>
<ul>
<li>Basicity: aliphatic > ammonia > aromatic</li>
</ul>`,
[`Benzene: substitution preserves aromaticity`,
 `Phenol: more acidic than alcohol`,
 `Amine basicity: aliphatic > ammonia > aromatic`]);

reg('chemistry-c12',
`<h3>1. Polymerisation</h3>
<ul>
<li>Addition: monomers with C=C</li>
<li>Condensation: loss of small molecule</li>
</ul>
<h3>2. Amino Acids</h3>
<ul>
<li>H₂N-CH(R)-COOH; zwitterion at pH 7</li>
</ul>
<h3>3. DNA</h3>
<ul>
<li>A-T (2 H-bonds), G-C (3 H-bonds)</li>
</ul>
<h3>4. MS & NMR</h3>
<ul>
<li>MS: M⁺ gives molecular mass</li>
<li>NMR: n+1 rule; integration = proton count</li>
</ul>`,
[`Addition: C=C monomers`,
 `Condensation: loss of H₂O`,
 `DNA: A-T (2 bonds), G-C (3 bonds)`,
 `NMR n+1 rule for splitting`]);

reg('chemistry-c13',
`<h3>1. Organic Synthesis</h3>
<ul>
<li>Retrosynthesis: work backward from target</li>
</ul>
<h3>2. Synthetic Routes</h3>
<ul>
<li>1° alcohol → aldehyde (distill) → acid (reflux)</li>
<li>NaBH₄ reduces C=O; LiAlH₄ reduces C=O, COOH, CN</li>
</ul>
<h3>3. Purification</h3>
<ul>
<li>Recrystallisation, distillation, chromatography</li>
</ul>`,
[`Retrosynthesis: work backward`,
 `LiAlH₄ stronger than NaBH₄`,
 `Recrystallisation for purification`]);

reg('chemistry-c14',
`<h3>1. Titration</h3>
<ul>
<li>Acid-base: suitable indicator</li>
<li>Redox: KMnO₄ self-indicating</li>
</ul>
<h3>2. Analysis</h3>
<ul>
<li>Chromatography: Rf = distance spot/distance solvent</li>
<li>Colorimetry: A = εcl</li>
</ul>`,
[`KMnO₄ self-indicating in redox titrations`,
 `Rf = spot distance/solvent distance`,
 `Beer-Lambert: A = εcl`]);

// ============== CAIE BIOLOGY ==============
reg('biology-b1',
`<h3>1. Cell Theory</h3>
<ul>
<li>All organisms composed of cells</li>
<li>Cell is basic unit of life</li>
<li>Cells arise from pre-existing cells</li>
</ul>
<h3>2. Prokaryotic vs Eukaryotic</h3>
<ul>
<li><strong>Prokaryotes:</strong> No nucleus, 70S ribosomes, no membrane-bound organelles, peptidoglycan wall</li>
<li><strong>Eukaryotes:</strong> True nucleus, 80S ribosomes, membrane-bound organelles</li>
</ul>
<h3>3. Organelles</h3>
<ul>
<li><strong>Nucleus:</strong> Chromatin, nucleolus, nuclear pores</li>
<li><strong>Mitochondria:</strong> Cristae, own DNA, aerobic respiration</li>
<li><strong>RER:</strong> Protein synthesis</li>
<li><strong>SER:</strong> Lipid synthesis, detoxification</li>
<li><strong>Golgi:</strong> Modifies, packages proteins</li>
<li><strong>Lysosomes:</strong> Hydrolytic enzymes</li>
<li><strong>Chloroplasts:</strong> Thylakoids, grana, photosynthesis</li>
</ul>
<h3>4. Cell Division</h3>
<ul>
<li><strong>Mitosis:</strong> Prophase → Metaphase → Anaphase → Telophase → Cytokinesis; 2 identical diploid cells</li>
<li><strong>Meiosis:</strong> Two divisions; 4 genetically different haploid gametes</li>
</ul>`,
[`Prokaryotes: no nucleus, 70S ribosomes`,
 `Eukaryotes: true nucleus, 80S ribosomes`,
 `Mitosis: 2 identical diploid cells`,
 `Meiosis: 4 genetically different haploid cells`,
 `Mitochondria and chloroplasts have own DNA`]);

reg('biology-b2',
`<h3>1. Biological Molecules</h3>
<ul>
<li><strong>Carbohydrates:</strong> C, H, O; monosaccharides, disaccharides, polysaccharides</li>
<li><strong>Proteins:</strong> C, H, O, N; amino acids joined by peptide bonds</li>
<li><strong>Lipids:</strong> Glycerol + fatty acids; ester bonds</li>
</ul>
<h3>2. Enzymes</h3>
<ul>
<li>Biological catalysts; proteins (mostly)</li>
<li><strong>Active site:</strong> Specific shape for substrate</li>
<li><strong>Lock and key / induced fit</strong></li>
<li><strong>Factors:</strong> Temperature, pH, substrate concentration, enzyme concentration</li>
<li><strong>Inhibition:</strong> Competitive (same active site), Non-competitive (allosteric site)</li>
</ul>`,
[`Enzymes are biological catalysts`,
 `Active site specific to substrate`,
 `Competitive: same active site`,
 `Non-competitive: different site`,
 `Optimum temperature and pH`]);

reg('biology-b3',
`<h3>1. Cell Membrane Structure</h3>
<ul>
<li><strong>Fluid mosaic:</strong> Phospholipid bilayer with proteins</li>
<li><strong>Integral proteins:</strong> Span membrane</li>
<li><strong>Peripheral proteins:</strong> On surface</li>
<li><strong>Glycoproteins/glycolipids:</strong> Cell recognition</li>
<li><strong>Cholesterol:</strong> Maintains fluidity</li>
</ul>
<h3>2. Transport</h3>
<ul>
<li><strong>Diffusion:</strong> Down concentration gradient; no energy; small/non-polar</li>
<li><strong>Osmosis:</strong> Diffusion of water; down water potential gradient</li>
<li><strong>Active transport:</strong> Against gradient; requires energy (ATP) and carrier proteins</li>
<li><strong>Facilitated diffusion:</strong> Down gradient; through channel/carrier proteins</li>
<li><strong>Endocytosis/exocytosis:</strong> Bulk transport</li>
</ul>`,
[`Fluid mosaic: phospholipid bilayer + proteins`,
 `Diffusion: down gradient, no energy`,
 `Osmosis: water down water potential gradient`,
 `Active transport: against gradient, uses ATP`,
 `Facilitated: through proteins, down gradient`]);

reg('biology-b4',
`<h3>1. DNA Structure</h3>
<ul>
<li>Double helix; antiparallel strands</li>
<li>Sugar-phosphate backbone</li>
<li>A-T (2 H-bonds), G-C (3 H-bonds)</li>
</ul>
<h3>2. DNA Replication</h3>
<ul>
<li>Semi-conservative</li>
<li>Helicase unwinds; DNA polymerase adds nucleotides</li>
</ul>
<h3>3. Protein Synthesis</h3>
<ul>
<li><strong>Transcription:</strong> DNA → mRNA in nucleus</li>
<li><strong>Translation:</strong> mRNA → protein at ribosomes</li>
<li><strong>Triplet code:</strong> 3 bases = 1 amino acid</li>
</ul>
<h3>4. Mutations</h3>
<ul>
<li><strong>Substitution:</strong> One base changed</li>
<li><strong>Insertion/deletion:</strong> Frameshift; more severe</li>
</ul>`,
[`DNA: double helix, A-T (2 bonds), G-C (3 bonds)`,
 `Replication: semi-conservative`,
 `Transcription: DNA → mRNA`,
 `Translation: mRNA → protein`,
 `Frameshift: insertion/deletion`]);

reg('biology-b5',
`<h3>1. Genetics</h3>
<ul>
<li><strong>Genotype:</strong> Genetic makeup</li>
<li><strong>Phenotype:</strong> Observable characteristics</li>
<li><strong>Homozygous:</strong> Same alleles</li>
<li><strong>Heterozygous:</strong> Different alleles</li>
</ul>
<h3>2. Monohybrid & Dihybrid</h3>
<ul>
<li>Punnett squares for prediction</li>
<li>Ratios: 3:1 (mono), 9:3:3:1 (dihybrid)</li>
</ul>
<h3>3. Sex Linkage</h3>
<ul>
<li>X-linked: more common in males</li>
</ul>
<h3>4. Genetic Disorders</h3>
<ul>
<li><strong>Cystic fibrosis:</strong> Recessive</li>
<li><strong>Huntington's:</strong> Dominant</li>
</ul>`,
[`Genotype = genetic makeup; Phenotype = observable`,
 `Monohybrid ratio: 3:1`,
 `Dihybrid ratio: 9:3:3:1`,
 `X-linked more common in males`]);

reg('biology-b6',
`<h3>1. Transport in Animals</h3>
<ul>
<li><strong>Blood:</strong> Plasma, red blood cells, white blood cells, platelets</li>
<li><strong>Haemoglobin:</strong> Transports O₂; affinity varies with pO₂ (Bohr effect)</li>
<li><strong>Double circulation:</strong> Pulmonary and systemic</li>
</ul>
<h3>2. Transport in Plants</h3>
<ul>
<li><strong>Xylem:</strong> Water and minerals; transpiration stream</li>
<li><strong>Phloem:</strong> Translocation of sugars; source to sink</li>
</ul>`,
[`Haemoglobin transports O₂`,
 `Double circulation: pulmonary + systemic`,
 `Xylem: water; Phloem: sugars`]);

reg('biology-b7',
`<h3>1. Gas Exchange</h3>
<ul>
<li><strong>Alveoli:</strong> Large surface area, thin walls, good blood supply</li>
</ul>
<h3>2. Respiration</h3>
<ul>
<li><strong>Aerobic:</strong> Glucose + O₂ → CO₂ + H₂O + ATP</li>
<li><strong>Anaerobic (animals):</strong> Glucose → lactate + ATP</li>
<li><strong>Anaerobic (yeast):</strong> Glucose → ethanol + CO₂ + ATP</li>
</ul>`,
[`Alveoli: large SA, thin walls`,
 `Aerobic: uses O₂`,
 `Anaerobic: no O₂; lactate in animals, ethanol in yeast`]);

reg('biology-b8',
`<h3>1. Photosynthesis</h3>
<ul>
<li><strong>Equation:</strong> 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</li>
<li><strong>Light-dependent:</strong> Thylakoids; photolysis of water; ATP and NADPH produced</li>
<li><strong>Light-independent (Calvin cycle):</strong> Stroma; CO₂ fixation by RuBP; glucose produced</li>
<li><strong>Factors:</strong> Light intensity, CO₂ concentration, temperature</li>
</ul>`,
[`Light-dependent: thylakoids, produces ATP and NADPH`,
 `Calvin cycle: stroma, fixes CO₂`,
 `Limiting factors: light, CO₂, temperature`]);

reg('biology-b9',
`<h3>1. Homeostasis</h3>
<ul>
<li>Maintenance of constant internal environment</li>
<li><strong>Nervous system:</strong> Fast, short-lived</li>
<li><strong>Endocrine system:</strong> Slow, long-lasting</li>
</ul>
<h3>2. Coordination</h3>
<ul>
<li><strong>Neurone structure:</strong> Cell body, dendrites, axon</li>
<li><strong>Synapse:</strong> Neurotransmitter across cleft</li>
<li><strong>Reflex arc:</strong> Receptor → sensory → CNS → motor → effector</li>
</ul>`,
[`Homeostasis: constant internal environment`,
 `Nervous: fast; Endocrine: slow`,
 `Reflex arc: receptor → sensory → CNS → motor → effector`]);

reg('biology-b10',
`<h3>1. Immunity</h3>
<ul>
<li><strong>Antigens:</strong> Foreign proteins triggering immune response</li>
<li><strong>Antibodies:</strong> Specific proteins binding to antigens</li>
<li><strong>Phagocytes:</strong> Engulf pathogens</li>
<li><strong>Lymphocytes:</strong> B cells (antibodies), T cells (cell-mediated)</li>
</ul>
<h3>2. Disease</h3>
<ul>
<li><strong>HIV:</strong> Attacks T-helper cells; weakens immune system</li>
<li><strong>Antibiotics:</strong> Effective against bacteria, not viruses</li>
</ul>`,
[`Antibodies specific to antigens`,
 `Phagocytes engulf; Lymphocytes produce antibodies`,
 `HIV attacks T-helper cells`,
 `Antibiotics: bacteria only`]);

reg('biology-b11',
`<h3>1. Ecosystems</h3>
<ul>
<li><strong>Food chains/webs:</strong> Energy flow; trophic levels</li>
<li><strong>Energy transfer:</strong> ~10% between levels</li>
</ul>
<h3>2. Nutrient Cycles</h3>
<ul>
<li><strong>Carbon cycle:</strong> Photosynthesis, respiration, decomposition, combustion</li>
<li><strong>Nitrogen cycle:</strong> Nitrogen fixation, nitrification, denitrification</li>
</ul>
<h3>3. Conservation</h3>
<ul>
<li>Sustainable management of resources</li>
</ul>`,
[`10% energy transfer between trophic levels`,
 `Carbon cycle: photosynthesis, respiration, combustion`,
 `Nitrogen cycle: fixation, nitrification, denitrification`]);

reg('biology-b12',
`<h3>1. Natural Selection</h3>
<ul>
<li>Variation → competition → survival of fittest → reproduction → inheritance</li>
</ul>
<h3>2. Speciation</h3>
<ul>
<li>Geographic isolation → different selection pressures → reproductive isolation</li>
</ul>
<h3>3. Classification</h3>
<ul>
<li>Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species</li>
</ul>`,
[`Natural selection: variation → competition → survival → reproduction`,
 `Speciation needs isolation`,
 `Classification: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species`]);

reg('biology-b13',
`<h3>1. Genetic Engineering</h3>
<ul>
<li>Restriction enzymes cut DNA</li>
<li>Ligase joins DNA fragments</li>
<li>Vectors carry genes (plasmids, viruses)</li>
</ul>
<h3>2. Applications</h3>
<ul>
<li>Insulin production in bacteria</li>
<li>Gene therapy</li>
<li>GM crops</li>
</ul>`,
[`Restriction enzymes cut; Ligase joins`,
 `Plasmids as vectors`,
 `Insulin from recombinant bacteria`]);

reg('biology-b14',
`<h3>1. Practical Skills</h3>
<ul>
<li>Microscopy techniques</li>
<li>Drawing and labelling</li>
<li>Measurement and calculation</li>
</ul>
<h3>2. Data Analysis</h3>
<ul>
<li>Graph plotting</li>
<li>Error identification</li>
<li>Statistical tests</li>
</ul>`,
[`Always label diagrams fully`,
 `Include units in calculations`,
 `Identify errors and suggest improvements`]);

reg('biology-b15',
`<h3>1. Human Reproduction</h3>
<ul>
<li><strong>Male:</strong> Testes produce sperm; testosterone</li>
<li><strong>Female:</strong> Ovaries produce eggs; oestrogen, progesterone</li>
<li><strong>Menstrual cycle:</strong> FSH, LH, oestrogen, progesterone regulation</li>
</ul>
<h3>2. Development</h3>
<ul>
<li>Fertilisation → zygote → embryo → fetus</li>
<li>Placenta: exchange between mother and fetus</li>
</ul>`,
[`FSH: follicle development`,
 `LH: ovulation`,
 `Placenta: gas and nutrient exchange`]);

// ============== CAIE MATHS ==============
reg('maths-m1',
`<h3>1. Quadratics</h3>
<ul>
<li><strong>Solving:</strong> Factorising, formula, completing square</li>
<li><strong>Formula:</strong> x = [−b ± √(b²−4ac)]/(2a)</li>
<li><strong>Discriminant:</strong> b²−4ac > 0 (2 roots), = 0 (1 root), < 0 (no real roots)</li>
</ul>
<h3>2. Functions</h3>
<ul>
<li><strong>Domain:</strong> Allowed input values</li>
<li><strong>Range:</strong> Output values</li>
<li><strong>Inverse:</strong> f⁻¹(x); reflection in y = x</li>
<li><strong>Composite:</strong> fg(x) = f(g(x))</li>
</ul>
<h3>3. Inequalities</h3>
<ul>
<li>Solve like equations; reverse sign when ×/÷ by negative</li>
</ul>`,
[`Quadratic formula: x = [−b ± √(b²−4ac)]/(2a)`,
 `Discriminant determines number of roots`,
 `Domain = inputs; Range = outputs`,
 `Reverse inequality when ×/÷ by negative`]);

reg('maths-m2',
`<h3>1. Coordinate Geometry</h3>
<ul>
<li><strong>Distance:</strong> √[(x₂−x₁)² + (y₂−y₁)²]</li>
<li><strong>Midpoint:</strong> [(x₁+x₂)/2, (y₁+y₂)/2]</li>
<li><strong>Gradient:</strong> (y₂−y₁)/(x₂−x₁)</li>
</ul>
<h3>2. Straight Lines</h3>
<ul>
<li><strong>y = mx + c</strong></li>
<li><strong>Parallel:</strong> Same gradient</li>
<li><strong>Perpendicular:</strong> m₁ × m₂ = −1</li>
</ul>`,
[`Distance formula: √[(x₂−x₁)² + (y₂−y₁)²]`,
 `Gradient: m = (y₂−y₁)/(x₂−x₁)`,
 `Parallel: same m; Perpendicular: m₁m₂ = −1`]);

reg('maths-m3',
`<h3>1. Circle Equation</h3>
<ul>
<li><strong>Centre (a,b), radius r:</strong> (x−a)² + (y−b)² = r²</li>
<li><strong>General:</strong> x² + y² + 2gx + 2fy + c = 0; centre (−g,−f), radius √(g²+f²−c)</li>
</ul>
<h3>2. Tangents & Normals</h3>
<ul>
<li>Tangent perpendicular to radius at point of contact</li>
</ul>`,
[`Circle: (x−a)² + (y−b)² = r²`,
 `Tangent ⊥ radius at contact point`]);

reg('maths-m4',
`<h3>1. Trigonometry</h3>
<ul>
<li><strong>SOH CAH TOA</strong></li>
<li><strong>Sine rule:</strong> a/sin A = b/sin B = c/sin C</li>
<li><strong>Cosine rule:</strong> a² = b² + c² − 2bc cos A</li>
<li><strong>Area:</strong> ½ab sin C</li>
</ul>
<h3>2. Radians</h3>
<ul>
<li>π rad = 180°</li>
<li>Arc length: s = rθ</li>
<li>Sector area: A = ½r²θ</li>
</ul>`,
[`Sine rule: a/sin A = b/sin B`,
 `Cosine rule: a² = b² + c² − 2bc cos A`,
 `Arc: s = rθ; Sector: A = ½r²θ`]);

reg('maths-m5',
`<h3>1. Series</h3>
<ul>
<li><strong>Arithmetic:</strong> uₙ = a + (n−1)d; Sₙ = n/2(2a + (n−1)d) = n/2(a + l)</li>
<li><strong>Geometric:</strong> uₙ = ar^(n−1); Sₙ = a(1−rⁿ)/(1−r); S∞ = a/(1−r) for |r|<1</li>
</ul>
<h3>2. Binomial Expansion</h3>
<ul>
<li><strong>(a+b)ⁿ:</strong> Use nCr coefficients</li>
<li><strong>(1+x)ⁿ:</strong> Valid for |x|<1 when n not positive integer</li>
</ul>`,
[`Arithmetic: uₙ = a + (n−1)d`,
 `Geometric: S∞ = a/(1−r) for |r|<1`,
 `Binomial: use nCr coefficients`]);

reg('maths-m6',
`<h3>1. Differentiation</h3>
<ul>
<li><strong>Power rule:</strong> d/dx(xⁿ) = nxⁿ⁻¹</li>
<li><strong>Chain rule:</strong> dy/dx = dy/du × du/dx</li>
<li><strong>Product rule:</strong> d(uv)/dx = u dv/dx + v du/dx</li>
<li><strong>Quotient rule:</strong> d(u/v)/dx = (v du/dx − u dv/dx)/v²</li>
</ul>
<h3>2. Applications</h3>
<ul>
<li><strong>Gradient of curve:</strong> dy/dx</li>
<li><strong>Stationary points:</strong> dy/dx = 0; d²y/dx² > 0 = min, < 0 = max</li>
<li><strong>Rate of change:</strong> Connected rates</li>
</ul>`,
[`Power rule: d/dx(xⁿ) = nxⁿ⁻¹`,
 `Chain, product, quotient rules`,
 `Stationary: dy/dx = 0; d²y/dx² for nature`]);

reg('maths-m7',
`<h3>1. Integration</h3>
<ul>
<li><strong>Power rule:</strong> ∫xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ −1)</li>
<li><strong>∫1/x dx = ln|x| + c</strong></li>
<li><strong>∫eˣ dx = eˣ + c</strong></li>
</ul>
<h3>2. Applications</h3>
<ul>
<li><strong>Area under curve:</strong> ∫y dx</li>
<li><strong>Volume of revolution:</strong> π∫y² dx</li>
</ul>`,
[`∫xⁿ = xⁿ⁺¹/(n+1)`,
 `∫1/x = ln|x|`,
 `Area = ∫y dx; Volume = π∫y² dx`]);

reg('maths-m8',
`<h3>1. Vectors</h3>
<ul>
<li><strong>Components:</strong> ai + bj</li>
<li><strong>Magnitude:</strong> √(a²+b²)</li>
<li><strong>Direction:</strong> tan θ = b/a</li>
</ul>
<h3>2. Operations</h3>
<ul>
<li><strong>Addition:</strong> Parallelogram law</li>
<li><strong>Dot product:</strong> a·b = |a||b|cos θ</li>
</ul>`,
[`Magnitude: √(a²+b²)`,
 `Dot product: a·b = |a||b|cos θ`]);

reg('maths-m9',
`<h3>1. Forces & Equilibrium</h3>
<ul>
<li>Resolve into components</li>
<li>ΣF = 0 for equilibrium</li>
<li>Triangle of forces</li>
</ul>
<h3>2. Moments</h3>
<ul>
<li>Moment = F × d</li>
<li>Principle of moments for equilibrium</li>
</ul>`,
[`Resolve forces into components`,
 `Moment = F × d`,
 `ΣF = 0 and Σmoments = 0 for equilibrium`]);

reg('maths-m10',
`<h3>1. Kinematics</h3>
<ul>
<li><strong>SUVAT:</strong> v = u + at; s = ut + ½at²; v² = u² + 2as</li>
<li><strong>Graphs:</strong> v-t gradient = a, area = s</li>
</ul>
<h3>2. Newton's Laws</h3>
<ul>
<li>F = ma</li>
<li>Weight = mg</li>
<li>Normal reaction, friction, tension</li>
</ul>`,
[`SUVAT equations for constant acceleration`,
 `F = ma`,
 `v-t graph: gradient = a, area = displacement`]);

reg('maths-m11',
`<h3>1. Probability</h3>
<ul>
<li><strong>AND:</strong> Multiply (independent)</li>
<li><strong>OR:</strong> Add (mutually exclusive)</li>
<li><strong>Conditional:</strong> P(A|B) = P(A∩B)/P(B)</li>
</ul>
<h3>2. Statistics</h3>
<ul>
<li><strong>Mean, median, mode</strong></li>
<li><strong>Standard deviation:</strong> σ = √(Σ(x−x̄)²/n)</li>
<li><strong>Quartiles, interquartile range</strong></li>
</ul>`,
[`AND = multiply; OR = add`,
 `Conditional: P(A|B) = P(A∩B)/P(B)`,
 `Standard deviation: σ = √(Σ(x−x̄)²/n)`]);

reg('maths-m12',
`<h3>1. Distributions</h3>
<ul>
<li><strong>Binomial:</strong> X ~ B(n,p); P(X=r) = nCr pʳ(1−p)^(n−r); E(X) = np; Var(X) = np(1−p)</li>
<li><strong>Normal:</strong> X ~ N(μ,σ²); standardise: Z = (X−μ)/σ</li>
</ul>
<h3>2. Normal Approximation</h3>
<ul>
<li>Binomial → Normal when np > 5 and n(1−p) > 5</li>
<li>Continuity correction needed</li>
</ul>`,
[`Binomial: E(X) = np, Var(X) = np(1−p)`,
 `Normal: Z = (X−μ)/σ`,
 `Continuity correction for normal approx to binomial`]);

reg('maths-m13',
`<h3>1. Hypothesis Testing</h3>
<ul>
<li><strong>Null (H₀):</strong> Default assumption</li>
<li><strong>Alternative (H₁):</strong> What we suspect</li>
<li><strong>Type I error:</strong> Reject H₀ when true</li>
<li><strong>Type II error:</strong> Accept H₀ when false</li>
</ul>
<h3>2. Tests</h3>
<ul>
<li>One-tailed and two-tailed</li>
<li>Critical values and p-values</li>
</ul>`,
[`H₀ = null hypothesis`,
 `Type I: false positive`,
 `Type II: false negative`]);

// ============== CAIE ADDITIONAL MATHS ==============
reg('additional-maths-am1',
`<h3>1. Functions</h3>
<ul>
<li>Domain, range, inverse functions</li>
<li>Composite functions: fg(x) = f(g(x))</li>
</ul>`,
[`Domain = inputs; Range = outputs`,
 `Inverse: reflection in y = x`,
 `Composite: fg(x) = f(g(x))`]);

reg('additional-maths-am2',
`<h3>1. Quadratic Functions</h3>
<ul>
<li>Solving by factorising, formula, completing square</li>
<li>Discriminant: b² − 4ac</li>
</ul>`,
[`Quadratic formula`,
 `Discriminant determines roots`]);

reg('additional-maths-am3',
`<h3>1. Equations & Inequalities</h3>
<ul>
<li>Solving linear and quadratic inequalities</li>
<li>Graphical solutions</li>
</ul>`,
[`Reverse inequality when ×/÷ by negative`]);

reg('additional-maths-am4',
`<h3>1. Indices & Surds</h3>
<ul>
<li>Laws of indices: aᵐ × aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ</li>
<li>Rationalising denominators</li>
</ul>`,
[`aᵐ × aⁿ = aᵐ⁺ⁿ`,
 `Rationalise denominators with surds`]);

reg('additional-maths-am5',
`<h3>1. Polynomials</h3>
<ul>
<li>Factor and remainder theorems</li>
<li>Long division</li>
</ul>`,
[`Factor theorem: f(a) = 0 → (x−a) is factor`,
 `Remainder theorem: remainder = f(a)`]);

reg('additional-maths-am6',
`<h3>1. Logarithms & Exponentials</h3>
<ul>
<li>log(ab) = log a + log b</li>
<li>log(a/b) = log a − log b</li>
<li>log(aⁿ) = n log a</li>
<li>Solving aˣ = b using logs</li>
</ul>`,
[`log(ab) = log a + log b`,
 `log(aⁿ) = n log a`,
 `Change of base: logₐb = log b / log a`]);

reg('additional-maths-am7',
`<h3>1. Straight Line Graphs</h3>
<ul>
<li>y = mx + c</li>
<li>Gradient, intercepts</li>
<li>Linearising non-linear relationships</li>
</ul>`,
[`y = mx + c`,
 `Linearise to find unknown constants`]);

reg('additional-maths-am8',
`<h3>1. Circular Measure</h3>
<ul>
<li>Radians: π rad = 180°</li>
<li>Arc length: s = rθ</li>
<li>Sector area: A = ½r²θ</li>
</ul>`,
[`s = rθ`,
 `A = ½r²θ`]);

reg('additional-maths-am9',
`<h3>1. Trigonometry</h3>
<ul>
<li>Sine, cosine, tangent</li>
<li>Sine and cosine rules</li>
<li>Trigonometric equations</li>
</ul>`,
[`Sine rule`,
 `Cosine rule`,
 `CAST diagram for solving equations`]);

reg('additional-maths-am10',
`<h3>1. Permutations & Combinations</h3>
<ul>
<li>nPr = n!/(n−r)!</li>
<li>nCr = n!/(r!(n−r)!)</li>
</ul>`,
[`Permutations: order matters`,
 `Combinations: order doesn't matter`]);

reg('additional-maths-am11',
`<h3>1. Series</h3>
<ul>
<li>Arithmetic and geometric series</li>
<li>Sum to infinity</li>
</ul>`,
[`Arithmetic: Sₙ = n/2(2a + (n−1)d)`,
 `Geometric: S∞ = a/(1−r) for |r|<1`]);

reg('additional-maths-am12',
`<h3>1. Vectors</h3>
<ul>
<li>Components, magnitude, direction</li>
</ul>`,
[`Magnitude: √(a²+b²)`]);

reg('additional-maths-am13',
`<h3>1. Differentiation & Integration</h3>
<ul>
<li>Basic differentiation and integration rules</li>
<li>Applications to gradients and areas</li>
</ul>`,
[`Power rule for differentiation`,
 `Power rule for integration`]);

reg('additional-maths-am14',
`<h3>1. Kinematics</h3>
<ul>
<li>SUVAT equations</li>
<li>Calculus in kinematics</li>
</ul>`,
[`v = ds/dt; a = dv/dt = d²s/dt²`]);

reg('additional-maths-am15',
`<h3>1. Relative Velocity</h3>
<ul>
<li>Velocity of A relative to B: v_A − v_B</li>
</ul>`,
[`Relative velocity: v_A − v_B`]);

// ============== CAIE ECONOMICS ==============
reg('economics-e1',
`<h3>1. Economic Problem</h3>
<ul>
<li>Scarcity: unlimited wants vs limited resources</li>
<li>Factors: Land, Labour, Capital, Enterprise</li>
<li>Opportunity cost: next best alternative foregone</li>
</ul>
<h3>2. PPC</h3>
<ul>
<li>Shows maximum output combinations</li>
<li>Bowed out: increasing opportunity cost</li>
<li>Shift out: economic growth</li>
</ul>`,
[`Scarcity = unlimited wants + limited resources`,
 `Opportunity cost = next best alternative foregone`,
 `PPC bowed out due to increasing opportunity costs`]);

reg('economics-e2',
`<h3>1. Demand</h3>
<ul>
<li>Inverse relationship with price</li>
<li>Determinants: income, substitutes, complements, tastes</li>
</ul>
<h3>2. Supply</h3>
<ul>
<li>Direct relationship with price</li>
</ul>
<h3>3. Equilibrium</h3>
<ul>
<li>Where demand = supply</li>
</ul>
<h3>4. Elasticity</h3>
<ul>
<li>PED = %ΔQd / %ΔP</li>
<li>PES = %ΔQs / %ΔP</li>
</ul>`,
[`PED = %ΔQd / %ΔP`,
 `|PED| > 1 = elastic; |PED| < 1 = inelastic`,
 `PES = %ΔQs / %ΔP`]);

reg('economics-e3',
`<h3>1. Elasticity Concepts</h3>
<ul>
<li><strong>YED:</strong> %ΔQ / %Δincome; normal (+), inferior (−)</li>
<li><strong>XED:</strong> %ΔQ_A / %ΔP_B; substitutes (+), complements (−)</li>
</ul>`,
[`YED > 0 = normal good`,
 `YED < 0 = inferior good`,
 `XED > 0 = substitutes`,
 `XED < 0 = complements`]);

reg('economics-e4',
`<h3>1. Market Failure</h3>
<ul>
<li><strong>Externalities:</strong> Social cost/benefit ≠ private cost/benefit</li>
<li><strong>Public goods:</strong> Non-excludable, non-rivalrous</li>
<li><strong>Merit goods:</strong> Underconsumed; demerit goods: overconsumed</li>
</ul>`,
[`Externalities: spillover effects on third parties`,
 `Public goods: non-excludable and non-rivalrous`,
 `Merit goods underconsumed; demerit goods overconsumed`]);

reg('economics-e5',
`<h3>1. Government Intervention</h3>
<ul>
<li>Taxes, subsidies, price controls, regulation</li>
</ul>`,
[`Taxes reduce consumption`,
 `Subsidies increase consumption`]);

reg('economics-e6',
`<h3>1. National Income</h3>
<ul>
<li><strong>GDP:</strong> Total value of goods and services</li>
<li><strong>Expenditure method:</strong> C + I + G + (X−M)</li>
</ul>`,
[`GDP = C + I + G + (X−M)`]);

reg('economics-e7',
`<h3>1. Money & Banking</h3>
<ul>
<li>Functions of money: medium of exchange, unit of account, store of value</li>
</ul>`,
[`Money: medium of exchange, unit of account, store of value`]);

reg('economics-e8',
`<h3>1. Unemployment & Inflation</h3>
<ul>
<li><strong>Unemployment types:</strong> Frictional, structural, cyclical, seasonal</li>
<li><strong>Inflation:</strong> Sustained increase in general price level</li>
<li><strong>Causes:</strong> Demand-pull, cost-push, monetary</li>
</ul>`,
[`Unemployment types: frictional, structural, cyclical`,
 `Inflation: sustained rise in price level`]);

reg('economics-e9',
`<h3>1. International Trade</h3>
<ul>
<li><strong>Comparative advantage:</strong> Specialise in lower opportunity cost</li>
</ul>`,
[`Comparative advantage: lower opportunity cost`]);

reg('economics-e10',
`<h3>1. Development Economics</h3>
<ul>
<li>Indicators: GDP per capita, HDI, literacy, life expectancy</li>
</ul>`,
[`HDI: Human Development Index`]);

reg('economics-e11',
`<h3>1. Balance of Payments</h3>
<ul>
<li>Current account + capital account + financial account = 0</li>
</ul>`,
[`Current account: trade in goods/services`]);

// ============== CAIE BUSINESS ==============
reg('business-bu1',
`<h3>1. Business Activity</h3>
<ul>
<li>Sectors: Primary, Secondary, Tertiary</li>
<li>Business objectives: profit, growth, survival, CSR</li>
</ul>`,
[`Primary: extraction; Secondary: manufacturing; Tertiary: services`]);

reg('business-bu2',
`<h3>1. Marketing</h3>
<ul>
<li>4Ps: Product, Price, Place, Promotion</li>
<li>Market research: primary and secondary</li>
</ul>`,
[`4Ps: Product, Price, Place, Promotion`]);

reg('business-bu3',
`<h3>1. HRM</h3>
<ul>
<li>Recruitment, selection, training, motivation</li>
<li>Motivation theories: Maslow, Herzberg</li>
</ul>`,
[`Maslow: hierarchy of needs`,
 `Herzberg: hygiene and motivator factors`]);

reg('business-bu4',
`<h3>1. Operations</h3>
<ul>
<li>Methods: job, batch, flow, cell</li>
<li>Quality control vs quality assurance</li>
</ul>`,
[`Job: custom; Batch: groups; Flow: continuous`]);

reg('business-bu5',
`<h3>1. Finance</h3>
<ul>
<li>Sources: internal (retained profit, sale of assets) vs external (shares, loans)</li>
<li>Cash flow forecasting</li>
</ul>`,
[`Cash flow = inflows − outflows`]);

reg('business-bu6',
`<h3>1. Business Structure</h3>
<ul>
<li>Sole trader, partnership, limited company, public sector</li>
</ul>`,
[`Ltd: limited liability`,
 `PLC: public limited company`]);

reg('business-bu7',
`<h3>1. Leadership</h3>
<ul>
<li>Styles: autocratic, democratic, laissez-faire, paternalistic</li>
</ul>`,
[`Autocratic: dictator; Democratic: participative; Laissez-faire: hands-off`]);

reg('business-bu8',
`<h3>1. External Influences</h3>
<ul>
<li>PEST analysis: Political, Economic, Social, Technological</li>
</ul>`,
[`PEST: Political, Economic, Social, Technological`]);

reg('business-bu9',
`<h3>1. Business Strategy</h3>
<ul>
<li>SWOT analysis, Ansoff matrix</li>
</ul>`,
[`SWOT: Strengths, Weaknesses, Opportunities, Threats`]);

reg('business-bu10',
`<h3>1. Globalisation</h3>
<ul>
<li>Benefits and drawbacks of international business</li>
</ul>`,
[`Globalisation: integration of economies worldwide`]);

// ============== CAIE ACCOUNTING ==============
reg('accounting-ac1',
`<h3>1. Accounting Principles</h3>
<ul>
<li>Business entity, going concern, accruals, consistency, prudence, realisation, matching, materiality</li>
</ul>`,
[`Business entity: business separate from owner`,
 `Prudence: don't anticipate profits, provide for losses`]);

reg('accounting-ac2',
`<h3>1. Source Documents</h3>
<ul>
<li>Invoice, credit note, debit note, receipt, petty cash voucher</li>
</ul>`,
[`Invoice: request for payment`,
 `Credit note: reduction in amount owed`]);

reg('accounting-ac3',
`<h3>1. Ledger Accounts</h3>
<ul>
<li>Double entry: debit = receiver, credit = giver</li>
<li>Trial balance: Σdebits = Σcredits</li>
</ul>`,
[`Double entry: every debit has equal credit`,
 `Trial balance checks arithmetic accuracy`]);

reg('accounting-ac4',
`<h3>1. Bank Reconciliation</h3>
<ul>
<li>Reconcile cash book balance with bank statement</li>
<li>Unpresented cheques, uncredited deposits, bank errors</li>
</ul>`,
[`Unpresented cheques: issued but not cleared`,
 `Bank charges and interest may not be in cash book`]);

reg('accounting-ac5',
`<h3>1. Control Accounts</h3>
<ul>
<li>Sales ledger control account (trade receivables)</li>
<li>Purchases ledger control account (trade payables)</li>
</ul>`,
[`Sales ledger control = total trade receivables`]);

reg('accounting-ac6',
`<h3>1. Correction of Errors</h3>
<ul>
<li>Suspense account for errors affecting trial balance</li>
</ul>`,
[`Suspense account temporary until errors found`]);

reg('accounting-ac7',
`<h3>1. Financial Statements — Sole Traders</h3>
<ul>
<li>Income statement and statement of financial position</li>
</ul>`,
[`Gross profit = sales − COGS`,
 `Net profit = gross profit − expenses`]);

reg('accounting-ac8',
`<h3>1. Partnership Accounts</h3>
<ul>
<li>Appropriation account: interest on capital, interest on drawings, salaries, profit share</li>
</ul>`,
[`Appropriation account divides profit among partners`]);

reg('accounting-ac9',
`<h3>1. Limited Companies</h3>
<ul>
<li>Share capital, reserves, dividends</li>
</ul>`,
[`Ordinary shares: voting rights`,
 `Preference shares: fixed dividend`]);

reg('accounting-ac10',
`<h3>1. Incomplete Records</h3>
<ul>
<li>Use control accounts, mark-ups, margins</li>
</ul>`,
[`Mark-up on cost; Margin on sales`]);

reg('accounting-ac11',
`<h3>1. Manufacturing Accounts</h3>
<ul>
<li>Direct materials, direct labour, factory overheads</li>
</ul>`,
[`Prime cost = direct materials + direct labour`]);

reg('accounting-ac12',
`<h3>1. Cost & Management Accounting</h3>
<ul>
<li>Marginal costing, absorption costing, break-even</li>
</ul>`,
[`Break-even: total revenue = total cost`]);

reg('accounting-ac13',
`<h3>1. Ratio Analysis</h3>
<ul>
<li>Profitability, liquidity, efficiency, gearing</li>
</ul>`,
[`Current ratio = current assets / current liabilities`,
 `Acid test = (current assets − inventory) / current liabilities`]);

// ============== CAIE ENGLISH ==============
reg('english-en1',
`<h3>1. Reading Comprehension</h3>
<ul>
<li>Skimming and scanning techniques</li>
<li>Inference and deduction</li>
<li>Writer's tone and purpose</li>
</ul>`,
[`Skim for gist; scan for detail`,
 `Consider writer's purpose and audience`]);

reg('english-en2',
`<h3>1. Directed Writing</h3>
<ul>
<li>Format, register, audience awareness</li>
</ul>`,
[`Match register to audience`]);

reg('english-en3',
`<h3>1. Summary Writing</h3>
<ul>
<li>Select relevant points</li>
<li>Concise expression in own words</li>
</ul>`,
[`Select key points only`,
 `Use own words`]);

reg('english-en4',
`<h3>1. Poetry Analysis</h3>
<ul>
<li>Structure, form, imagery, tone, themes</li>
</ul>`,
[`Analyse form, structure, language`]);

reg('english-en5',
`<h3>1. Prose Analysis</h3>
<ul>
<li>Character, setting, narrative voice, themes</li>
</ul>`,
[`Consider narrative perspective`]);

reg('english-en6',
`<h3>1. Drama Analysis</h3>
<ul>
<li>Stage directions, dialogue, dramatic irony</li>
</ul>`,
[`Dramatic irony: audience knows more than characters`]);

reg('english-en7',
`<h3>1. Essay Writing</h3>
<ul>
<li>Plan, introduction, paragraphs, conclusion</li>
</ul>`,
[`PEEL paragraphs: Point, Evidence, Explanation, Link`]);

reg('english-en8',
`<h3>1. Language Analysis</h3>
<ul>
<li>Phonology, lexis, grammar, pragmatics</li>
</ul>`,
[`Analyse at word, sentence, and text level`]);

reg('english-en13',
`<h3>1. Grammar & Vocabulary</h3>
<ul>
<li>Parts of speech, sentence structure, punctuation</li>
</ul>`,
[`Varied sentence structures improve writing`]);

// ============== CAIE CHINESE ==============
reg('chinese-ch1',
`<h3>1. Reading Comprehension</h3>
<ul>
<li>理解文章主旨和细节</li>
<li>推理和判断</li>
</ul>`,
[`抓住关键词`,
 `注意上下文联系`]);

reg('chinese-ch2',
`<h3>1. Essay Writing</h3>
<ul>
<li>议论文、记叙文、说明文</li>
<li>结构清晰，论点明确</li>
</ul>`,
[`开头点题`,
 `段落分明`]);

reg('chinese-ch3',
`<h3>1. Classical Chinese</h3>
<ul>
<li>文言文语法和词汇</li>
<li>常见虚词用法</li>
</ul>`,
[`积累常见实词和虚词`]);

reg('chinese-ch4',
`<h3>1. Modern Literature</h3>
<ul>
<li>小说、散文、诗歌分析</li>
</ul>`,
[`分析主题和写作手法`]);

reg('chinese-ch5',
`<h3>1. Oral Communication</h3>
<ul>
<li>朗读技巧</li>
<li>口语表达</li>
</ul>`,
[`注意语音语调`]);

reg('chinese-ch6',
`<h3>1. Translation</h3>
<ul>
<li>中英互译技巧</li>
<li>文化差异处理</li>
</ul>`,
[`直译与意译结合`]);

reg('chinese-ch7',
`<h3>1. Chinese Culture</h3>
<ul>
<li>传统节日、习俗、历史</li>
</ul>`,
[`了解文化背景`]);

reg('chinese-ch8',
`<h3>1. Film & Media</h3>
<ul>
<li>电影分析</li>
<li>媒体语言</li>
</ul>`,
[`分析镜头语言`]);

// ============== CAIE PSYCHOLOGY ==============
reg('psychology-ps1',
`<h3>1. Research Methods</h3>
<ul>
<li>Experiments, observations, case studies, surveys</li>
<li>IV, DV, controls, reliability, validity</li>
</ul>`,
[`IV = independent variable`,
 `DV = dependent variable`]);

reg('psychology-ps2',
`<h3>1. Biological Psychology</h3>
<ul>
<li>Brain structure, neurotransmitters, hormones</li>
</ul>`,
[`Neurotransmitters affect behaviour`]);

reg('psychology-ps3',
`<h3>1. Cognitive Psychology</h3>
<ul>
<li>Memory models, perception, thinking</li>
</ul>`,
[`Multi-store model: sensory, short-term, long-term`]);

reg('psychology-ps4',
`<h3>1. Social Psychology</h3>
<ul>
<li>Conformity, obedience, attitudes</li>
</ul>`,
[`Asch: conformity study`,
 `Milgram: obedience study`]);

reg('psychology-ps5',
`<h3>1. Developmental Psychology</h3>
<ul>
<li>Piaget: cognitive development stages</li>
</ul>`,
[`Sensorimotor, preoperational, concrete, formal`]);

reg('psychology-ps6',
`<h3>1. Abnormal Psychology</h3>
<ul>
<li>Definitions of abnormality, disorders, treatments</li>
</ul>`,
[`Statistical infrequency, deviation from social norms`]);

reg('psychology-ps7',
`<h3>1. Consumer Psychology</h3>
<ul>
<li>Advertising, decision-making</li>
</ul>`,
[`Persuasion techniques`]);

reg('psychology-ps8',
`<h3>1. Health Psychology</h3>
<ul>
<li>Stress, coping, health behaviours</li>
</ul>`,
[`Fight or flight response`]);

reg('psychology-ps9',
`<h3>1. Organisational Psychology</h3>
<ul>
<li>Leadership, motivation at work</li>
</ul>`,
[`Workplace motivation theories`]);

// ============== CAIE HISTORY ==============
reg('history-h1',
`<h3>1. Origins of WWI</h3>
<ul>
<li>Alliance system, militarism, imperialism, nationalism</li>
<li>Assassination of Franz Ferdinand</li>
</ul>`,
[`MAIN causes: Militarism, Alliances, Imperialism, Nationalism`]);

reg('history-h2',
`<h3>1. The Holocaust</h3>
<ul>
<li>Nazi racial policy, ghettos, Final Solution</li>
</ul>`,
[`Wannsee Conference: coordinated Final Solution`]);

reg('history-h3',
`<h3>1. Cold War in Europe</h3>
<ul>
<li>Yalta, Potsdam, Truman Doctrine, Marshall Plan, Berlin Blockade</li>
</ul>`,
[`Containment policy against communism`]);

reg('history-h4',
`<h3>1. Cold War in Asia</h3>
<ul>
<li>Korean War, Vietnam War, domino theory</li>
</ul>`,
[`Domino theory: fall of one → fall of neighbours`]);

reg('history-h5',
`<h3>1. Civil Rights USA</h3>
<ul>
<li>Slavery, segregation, Civil Rights Movement, key figures</li>
</ul>`,
[`Martin Luther King Jr.: non-violent resistance`]);

reg('history-h6',
`<h3>1. International History</h3>
<ul>
<li>Détente, arms race, end of Cold War</li>
</ul>`,
[`Gorbachev: glasnost and perestroika`]);

reg('history-h7',
`<h3>1. French Revolution</h3>
<ul>
<li>Causes, events, Terror, Napoleon</li>
</ul>`,
[`Estates-General: trigger for revolution`]);

reg('history-h8',
`<h3>1. Hitler's Germany</h3>
<ul>
<li>Rise to power, Nazi state, WWII, Holocaust</li>
</ul>`,
[`Enabling Act: gave Hitler dictatorial powers`]);

reg('history-h9',
`<h3>1. Stalin's Russia</h3>
<ul>
<li>Rise to power, Five Year Plans, purges, WWII</li>
</ul>`,
[`Collectivisation: forced consolidation of farms`]);

reg('history-h10',
`<h3>1. Britain 1918-1951</h3>
<ul>
<li>Interwar period, WWII, post-war changes</li>
</ul>`,
[`Welfare state established post-WWII`]);

reg('history-h11',
`<h3>1. US Civil War</h3>
<ul>
<li>Slavery, states' rights, secession, war, reconstruction</li>
</ul>`,
[`Missouri Compromise: balance of slave/free states`]);

reg('history-h12',
`<h3>1. International Relations</h3>
<ul>
<li>Bismarck's alliances, WWI origins, League of Nations</li>
</ul>`,
[`League of Nations: collective security`]);

// ============== CAIE GEOGRAPHY ==============
reg('geography-g1',
`<h3>1. Plate Tectonics</h3>
<ul>
<li>Continental drift, sea-floor spreading, plate boundaries</li>
<li>Constructive, destructive, conservative, collision</li>
</ul>`,
[`Constructive: plates move apart`,
 `Destructive: plates collide`]);

reg('geography-g2',
`<h3>1. Weather & Climate</h3>
<ul>
<li>Atmospheric circulation, pressure belts, weather systems</li>
</ul>`,
[`Hadley, Ferrel, Polar cells`]);

reg('geography-g3',
`<h3>1. Rivers</h3>
<ul>
<li>Erosion, transportation, deposition, landforms</li>
</ul>`,
[`Hydraulic action, abrasion, attrition, solution`]);

reg('geography-g4',
`<h3>1. Coasts</h3>
<ul>
<li>Waves, erosion, transportation, deposition, landforms</li>
</ul>`,
[`Constructive vs destructive waves`]);

reg('geography-g5',
`<h3>1. Population</h3>
<ul>
<li>Demographic transition model, migration</li>
</ul>`,
[`DTM stages: high BR/DR → low BR/DR`]);

reg('geography-g6',
`<h3>1. Settlement</h3>
<ul>
<li>Urbanisation, urban morphology, land use models</li>
</ul>`,
[`Burgess concentric zone model`]);

reg('geography-g7',
`<h3>1. Agriculture</h3>
<ul>
<li>Farming types, Green Revolution, food security</li>
</ul>`,
[`Intensive vs extensive farming`]);

reg('geography-g8',
`<h3>1. Energy & Water</h3>
<ul>
<li>Renewable vs non-renewable, water scarcity</li>
</ul>`,
[`Water stress index`]);

reg('geography-g9',
`<h3>1. Economic Activity</h3>
<ul>
<li>Sectors of economy, development indicators</li>
</ul>`,
[`Primary, secondary, tertiary, quaternary`]);

reg('geography-g10',
`<h3>1. Map Skills</h3>
<ul>
<li>Grid references, scale, contours, direction</li>
</ul>`,
[`4-figure and 6-figure grid references`]);

// ============== CAIE ICT ==============
reg('ict-i1',
`<h3>1. Computer Systems</h3>
<ul>
<li>Hardware: CPU, memory, storage, I/O devices</li>
<li>CPU: ALU, CU, registers</li>
</ul>`,
[`Von Neumann architecture`]);

reg('ict-i2',
`<h3>1. Networks</h3>
<ul>
<li>LAN, WAN, topology, protocols, security</li>
</ul>`,
[`TCP/IP protocol suite`]);

reg('ict-i3',
`<h3>1. Data Representation</h3>
<ul>
<li>Binary, hexadecimal, ASCII, Unicode</li>
</ul>`,
[`1 hex digit = 4 binary digits`]);

reg('ict-i4',
`<h3>1. Software</h3>
<ul>
<li>System software, application software, OS functions</li>
</ul>`,
[`OS: memory, process, file management`]);

reg('ict-i5',
`<h3>1. Databases</h3>
<ul>
<li>Relational databases, tables, keys, normalisation</li>
</ul>`,
[`Primary key uniquely identifies records`]);

reg('ict-i6',
`<h3>1. Web Design</h3>
<ul>
<li>HTML, CSS, web development principles</li>
</ul>`,
[`HTML: structure; CSS: presentation`]);

reg('ict-i7',
`<h3>1. Office Applications</h3>
<ul>
<li>Spreadsheets, word processing, presentations</li>
</ul>`,
[`Spreadsheet formulas and functions`]);

reg('ict-i8',
`<h3>1. Programming</h3>
<ul>
<li>Variables, loops, conditionals, arrays</li>
</ul>`,
[`Pseudocode and flowcharts`]);

reg('ict-i9',
`<h3>1. ICT in Society</h3>
<ul>
<li>Benefits and risks of ICT</li>
</ul>`,
[`Digital divide`]);

reg('ict-i10',
`<h3>1. ICT in Business</h3>
<ul>
<li>E-commerce, MIS, automation</li>
</ul>`,
[`E-commerce advantages and disadvantages`]);

// ============== EDEXCEL MAPPED FROM CAIE ==============
// Map edexcel topics to CAIE content
const edexcelMap = {
  'eb1': 'biology-b1', 'eb2': 'biology-b4', 'eb3': 'biology-b6', 'eb4': 'biology-b11',
  'eb5': 'biology-b10', 'eb6': 'biology-b9', 'eb7': 'biology-b5', 'eb8': 'biology-b7',
  'ec1': 'chemistry-c1', 'ec2': 'chemistry-c2', 'ec3': 'chemistry-c4', 'ec4': 'chemistry-c6',
  'ec5': 'chemistry-c9', 'ec6': 'chemistry-c8', 'ec7': 'chemistry-c7', 'ec8': 'chemistry-c3',
  'ep1': 'physics-p2', 'ep2': 'physics-p4', 'ep3': 'physics-p8', 'ep4': 'physics-p10',
  'ep5': 'physics-p13', 'ep6': 'physics-p1', 'ep7': 'physics-p6', 'ep8': 'physics-p7',
  'em1': 'maths-m1', 'em2': 'maths-m2', 'em3': 'maths-m4', 'em4': 'maths-m6',
  'em5': 'maths-m8', 'em6': 'maths-m11', 'em7': 'maths-m5', 'em8': 'maths-m12',
  'ee1': 'economics-e2', 'ee2': 'economics-e4', 'ee3': 'economics-e6', 'ee4': 'economics-e8',
  'ee5': 'economics-e9', 'ee6': 'economics-e10', 'ee7': 'economics-e3',
  'ebu1': 'business-bu1', 'ebu2': 'business-bu2', 'ebu3': 'business-bu3', 'ebu4': 'business-bu10', 'ebu5': 'business-bu1',
  'een1': 'english-en1', 'een2': 'english-en2', 'een3': 'english-en7', 'een4': 'english-en8', 'een5': 'english-en8', 'een6': 'english-en8',
  'eh1': 'history-h3', 'eh2': 'history-h8', 'eh3': 'history-h3', 'eh4': 'history-h12', 'eh5': 'history-h5', 'eh6': 'history-h8',
  'eg1': 'geography-g1', 'eg2': 'geography-g4', 'eg3': 'geography-g5', 'eg4': 'geography-g6',
  'eg5': 'geography-g8', 'eg6': 'geography-g8', 'eg7': 'geography-g5',
  'ecs1': 'ict-i8', 'ecs2': 'ict-i5', 'ecs3': 'ict-i1', 'ecs4': 'ict-i2',
  'ecs5': 'ict-i5', 'ecs6': 'ict-i3', 'ecs7': 'ict-i6',
};

// ============== IB MAPPED FROM CAIE ==============
const ibMap = {
  'ibb1': 'biology-b1', 'ibb2': 'biology-b2', 'ibb3': 'biology-b4', 'ibb4': 'biology-b11',
  'ibb5': 'biology-b12', 'ibb6': 'biology-b7',
  'ibc1': 'chemistry-c3', 'ibc2': 'chemistry-c1', 'ibc3': 'chemistry-c1', 'ibc4': 'chemistry-c2',
  'ibc5': 'chemistry-c4', 'ibc6': 'chemistry-c5', 'ibc7': 'chemistry-c6', 'ibc8': 'chemistry-c7',
  'ibc9': 'chemistry-c7', 'ibc10': 'chemistry-c9', 'ibc11': 'chemistry-c14',
  'ibp1': 'physics-p1', 'ibp2': 'physics-p2', 'ibp3': 'physics-p8', 'ibp4': 'physics-p4',
  'ibp5': 'physics-p5', 'ibp6': 'physics-p2', 'ibp7': 'physics-p7', 'ibp8': 'physics-p13',
  'ibmaa1': 'maths-m1', 'ibmaa2': 'maths-m1', 'ibmaa3': 'maths-m4', 'ibmaa4': 'maths-m11', 'ibmaa5': 'maths-m6',
  'ibmai1': 'maths-m1', 'ibmai2': 'maths-m1', 'ibmai3': 'maths-m4', 'ibmai4': 'maths-m11', 'ibmai5': 'maths-m6', 'ibmai6': 'maths-m11',
  'ibe1': 'economics-e1', 'ibe2': 'economics-e2', 'ibe3': 'economics-e6', 'ibe4': 'economics-e9',
  'iben1': 'english-en1', 'iben2': 'english-en4', 'iben3': 'english-en5',
  'ibh1': 'history-h5', 'ibh2': 'history-h8', 'ibh3': 'history-h3', 'ibh4': 'history-h4',
  'ibg1': 'geography-g5', 'ibg2': 'geography-g2', 'ibg3': 'geography-g8', 'ibg4': 'geography-g8', 'ibg5': 'geography-g1',
  'ibps1': 'psychology-ps1', 'ibps2': 'psychology-ps3', 'ibps3': 'psychology-ps4', 'ibps4': 'psychology-ps6', 'ibps5': 'psychology-ps5',
};

// ============== PROCESSING ==============

function getContent(filename) {
  const basename = filename.replace(/\.html$/, '');
  const isSummary = basename.endsWith('-summary');
  let base = isSummary ? basename.slice(0, -8) : basename;

  // Remove level suffix
  let level = '';
  if (base.endsWith('-a')) { level = 'a'; base = base.slice(0, -2); }
  else if (base.endsWith('-igcse')) { level = 'igcse'; base = base.slice(0, -6); }
  else if (base.endsWith('-ial')) { level = 'ial'; base = base.slice(0, -4); }
  else if (base.endsWith('-gcse')) { level = 'gcse'; base = base.slice(0, -5); }
  else if (base.endsWith('-hl')) { level = 'hl'; base = base.slice(0, -3); }
  else if (base.endsWith('-sl')) { level = 'sl'; base = base.slice(0, -3); }

  // Extract topic key
  let topicKey = null;
  let dbKey = null;

  // Try direct lookup
  if (DB[base]) {
    dbKey = base;
  }
  // Try edexcel mapping
  else if (base.startsWith('edexcel-')) {
    const parts = base.split('-');
    const tkey = parts[parts.length - 1];
    const mapped = edexcelMap[tkey];
    if (mapped && DB[mapped]) dbKey = mapped;
  }
  // Try IB mapping
  else if (base.startsWith('ib-')) {
    const parts = base.split('-');
    const tkey = parts[parts.length - 1];
    const mapped = ibMap[tkey];
    if (mapped && DB[mapped]) dbKey = mapped;
  }
  // Try legacy a1, a2 etc (accounting, additional-maths)
  else if (/^[a-z]+-\d+$/.test(base)) {
    if (DB[base]) dbKey = base;
  }

  if (!dbKey) return null;
  return { content: DB[dbKey], isSummary, level };
}

function buildHtml(data, isSummary) {
  const c = data.content;
  if (isSummary) {
    return `<div class="notes-section">
<h2>Last-Minute Revision Summary</h2>
<ul>
${c.summary.map(s => `<li>${s}</li>`).join('\n')}
</ul>
</div>
<div class="exam-tips">
<h2>Quick Exam Tips</h2>
<ul>
${c.tips.map(t => `<li>${t}</li>`).join('\n')}
</ul>
</div>`;
  }
  return `<div class="notes-section">
<h2>Detailed Notes</h2>
${c.detailed}
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
${c.summary.map(s => `<li>${s}</li>`).join('\n')}
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
${c.tips.map(t => `<li>${t}</li>`).join('\n')}
</ul>
</div>`;
}

let enriched = 0;
let skipped = 0;

const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const data = getContent(file);
  if (!data) { skipped++; continue; }

  const filepath = path.join(notesDir, file);
  let html = fs.readFileSync(filepath, 'utf8');

  // Check if already well-populated (has multiple h3s and substantial content)
  const h3Count = (html.match(/<h3>/g) || []).length;
  const hasGoodContent = h3Count >= 3 && html.length > 8000 && !html.includes('Coming Soon');

  // Build new content
  const newContent = buildHtml(data, data.isSummary);

  // Find notes-container and replace content after header
  const containerMatch = html.match(/(<div class="notes-container">)/);
  if (!containerMatch) { skipped++; continue; }

  // Find the header div end
  const headerEnd = html.indexOf('</div>', html.indexOf('<div class="notes-header">'));
  if (headerEnd === -1) { skipped++; continue; }

  // Find end of notes-container
  const containerStart = containerMatch.index;
  const sectionMatch = html.match(/<\/div>\s*<\/div>\s*<\/section>/);
  if (!sectionMatch) { skipped++; continue; }

  const before = html.substring(0, headerEnd + 6);
  const after = html.substring(sectionMatch.index);

  const newHtml = before + '\n' + newContent + '\n' + after;
  fs.writeFileSync(filepath, newHtml);
  enriched++;
}

console.log(`Enriched: ${enriched}`);
console.log(`Skipped: ${skipped}`);
console.log(`Total: ${files.length}`);
