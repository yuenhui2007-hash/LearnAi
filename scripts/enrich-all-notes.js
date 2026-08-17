const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

// ============================================================================
// COMPREHENSIVE CONTENT DATABASE
// ============================================================================

const contentDB = {};

// Helper to register content
function register(key, detailedNotes, summaryPoints, examTips, formulas = []) {
  contentDB[key] = { detailedNotes, summaryPoints, examTips, formulas };
}

// ============================================================================
// CAIE PHYSICS
// ============================================================================

register('physics-p1',
`<h3>1. Physical Quantities & SI Units</h3>
<ul>
<li><strong>Base quantities:</strong> Length (m), Mass (kg), Time (s), Temperature (K), Current (A), Amount (mol), Luminous intensity (cd)</li>
<li><strong>Derived quantities:</strong> Velocity (m/s), Acceleration (m/s²), Force (N = kg·m/s²), Energy (J = N·m), Power (W = J/s), Pressure (Pa = N/m²)</li>
<li><strong>Prefixes:</strong> p (10⁻¹²), n (10⁻⁹), μ (10⁻⁶), m (10⁻³), c (10⁻²), k (10³), M (10⁶), G (10⁹), T (10¹²)</li>
<li><strong>Homogeneity:</strong> Equations must be dimensionally consistent — both sides must have the same base units</li>
<li><strong>Scalars:</strong> Magnitude only (mass, speed, temperature, energy, power)</li>
<li><strong>Vectors:</strong> Magnitude and direction (displacement, velocity, acceleration, force, momentum)</li>
</ul>
<h3>2. Measurement Techniques</h3>
<ul>
<li><strong>Precision:</strong> Degree of exactness of a measurement (smallest division on instrument)</li>
<li><strong>Accuracy:</strong> Closeness to true value</li>
<li><strong>Uncertainty:</strong> ± half the smallest division for analogue; ±1 digit for digital</li>
<li><strong>Percentage uncertainty:</strong> (uncertainty / measured value) × 100%</li>
<li><strong>Combining uncertainties:</strong> Add absolute uncertainties for addition/subtraction; add percentage uncertainties for multiplication/division</li>
<li><strong>Vernier calipers:</strong> Precision to 0.01 mm — read main scale + vernier scale alignment</li>
<li><strong>Micrometer screw gauge:</strong> Precision to 0.01 mm — barrel scale + thimble scale</li>
</ul>`,
[`All physical quantities have units; base units are fundamental, derived units are combinations`,
 `Scalars have magnitude only; vectors have magnitude and direction`,
 `Uncertainty = ± half smallest division (analogue) or ±1 digit (digital)`,
 `Percentage uncertainty = (absolute uncertainty / reading) × 100%`,
 `For multiplication/division: add percentage uncertainties`,
 `For addition/subtraction: add absolute uncertainties`,
 `Vernier calipers read to 0.01 mm; micrometers to 0.01 mm`],
[`Always state units in final answers — marks are often lost for missing units`,
 `When calculating percentage uncertainty, use the full reading not the uncertainty alone`,
 `Check dimensional consistency — if units don't match, the equation is wrong`,
 `For vector problems, draw diagrams showing direction clearly`]);

register('physics-p2',
`<h3>1. Kinematics</h3>
<ul>
<li><strong>Displacement (s):</strong> Distance in a specified direction — vector quantity</li>
<li><strong>Velocity (v):</strong> Rate of change of displacement — vector; v = Δs/Δt</li>
<li><strong>Speed:</strong> Rate of change of distance — scalar</li>
<li><strong>Acceleration (a):</strong> Rate of change of velocity; a = Δv/Δt</li>
<li><strong>SUVAT equations</strong> (constant acceleration):
  <ul>
  <li>v = u + at</li>
  <li>s = ½(u + v)t</li>
  <li>s = ut + ½at²</li>
  <li>v² = u² + 2as</li>
  <li>s = vt − ½at²</li>
  </ul>
</li>
<li><strong>Displacement-time graphs:</strong> Gradient = velocity</li>
<li><strong>Velocity-time graphs:</strong> Gradient = acceleration; Area under graph = displacement</li>
<li><strong>Free fall:</strong> a = g ≈ 9.81 m/s² downward; independent of mass (neglecting air resistance)</li>
<li><strong>Projectile motion:</strong> Horizontal velocity constant (no acceleration); vertical motion has a = −g</li>
</ul>
<h3>2. Dynamics</h3>
<ul>
<li><strong>Newton's First Law:</strong> Body remains at rest or in uniform motion unless acted upon by a resultant force</li>
<li><strong>Newton's Second Law:</strong> F = ma (resultant force = mass × acceleration)</li>
<li><strong>Newton's Third Law:</strong> When body A exerts a force on body B, B exerts an equal and opposite force on A</li>
<li><strong>Weight:</strong> W = mg — gravitational force acting on a mass</li>
<li><strong>Normal reaction:</strong> Force perpendicular to surface, equal and opposite to component of weight</li>
<li><strong>Frictional force:</strong> Opposes motion; static friction ≥ kinetic friction</li>
<li><strong>Drag:</strong> Increases with speed; at terminal velocity, drag = weight</li>
</ul>`,
[`SUVAT equations only apply for constant acceleration`,
 `On velocity-time graphs: gradient = acceleration, area = displacement`,
 `Projectile motion: horizontal velocity is constant (aₓ = 0), vertical aᵧ = −g`,
 `F = ma — resultant force causes acceleration in the same direction`,
 `Newton's Third Law: forces act on DIFFERENT bodies`,
 `Terminal velocity occurs when drag force equals weight (net force = 0)`,
 `Free fall acceleration g = 9.81 m/s² near Earth's surface`],
[`Always draw free-body diagrams — identify ALL forces acting`,
 `For projectile motion, resolve into horizontal and vertical components separately`,
 `Check signs carefully — define positive direction at the start`,
 `At terminal velocity, acceleration is zero, so forces are balanced`]);

register('physics-p3',
`<h3>1. Forces</h3>
<ul>
<li><strong>Resolving forces:</strong> Any force can be split into perpendicular components: Fₓ = F cos θ, Fᵧ = F sin θ</li>
<li><strong>Equilibrium:</strong> Resultant force = 0; ΣFₓ = 0 and ΣFᵧ = 0</li>
<li><strong>Centre of gravity:</strong> Point where entire weight appears to act</li>
<li><strong>Moment of a force:</strong> Moment = F × d (force × perpendicular distance from pivot)</li>
<li><strong>Principle of moments:</strong> For equilibrium, sum of clockwise moments = sum of anticlockwise moments</li>
<li><strong>Couple:</strong> Pair of equal, opposite, parallel forces producing rotation; torque = F × d</li>
</ul>
<h3>2. Momentum</h3>
<ul>
<li><strong>Momentum (p):</strong> p = mv — vector quantity (kg·m/s)</li>
<li><strong>Principle of conservation:</strong> Total momentum before = total momentum after (in a closed system)</li>
<li><strong>Impulse:</strong> FΔt = Δp = m(v − u) — area under force-time graph</li>
<li><strong>Elastic collision:</strong> Kinetic energy conserved; relative speed of approach = relative speed of separation</li>
<li><strong>Inelastic collision:</strong> Kinetic energy not conserved; objects may stick together</li>
</ul>
<h3>3. Work, Energy & Power</h3>
<ul>
<li><strong>Work done:</strong> W = F·d·cos θ (force × displacement × cos of angle between them)</li>
<li><strong>Kinetic energy:</strong> Eₖ = ½mv²</li>
<li><strong>Gravitational PE:</strong> Eₚ = mgh (near Earth's surface)</li>
<li><strong>Elastic potential energy:</strong> Eₑ = ½kx² (spring constant × extension²)</li>
<li><strong>Principle of conservation of energy:</strong> Energy cannot be created or destroyed, only transferred</li>
<li><strong>Efficiency:</strong> (useful energy output / total energy input) × 100%</li>
<li><strong>Power:</strong> P = W/t = Fv (rate of doing work)</li>
</ul>`,
[`Momentum p = mv — conserved in all collisions (closed system)`,
 `Impulse = FΔt = Δp — equals change in momentum`,
 `Elastic: KE conserved; inelastic: KE not conserved`,
 `Work = F·d·cos θ — only the force component in direction of motion does work`,
 `KE = ½mv²; GPE = mgh; Elastic PE = ½kx²`,
 `Power P = W/t = Fv`,
 `Efficiency = (useful output / total input) × 100%`,
 `Principle of moments: clockwise moments = anticlockwise moments for equilibrium`],
[`Draw clear diagrams showing all forces and directions`,
 `In collision problems, write 'momentum before = momentum after' explicitly`,
 `For energy problems, identify initial and final energy forms`,
 `Always check units — power in watts (J/s), energy in joules (N·m)`]);

register('physics-p4',
`<h3>1. Wave Properties</h3>
<ul>
<li><strong>Wave equation:</strong> v = fλ (wave speed = frequency × wavelength)</li>
<li><strong>Period (T):</strong> T = 1/f — time for one complete oscillation</li>
<li><strong>Amplitude:</strong> Maximum displacement from equilibrium position</li>
<li><strong>Phase difference:</strong> Fraction of a cycle between two points; 360° = 2π rad = one wavelength</li>
<li><strong>Transverse waves:</strong> Oscillations perpendicular to direction of travel (light, water waves, EM waves)</li>
<li><strong>Longitudinal waves:</strong> Oscillations parallel to direction of travel (sound, compression in springs)</li>
<li><strong>Intensity (I):</strong> I = P/A = ½ρvω²s₀² ∝ amplitude²; follows inverse square law: I ∝ 1/r²</li>
</ul>
<h3>2. Electromagnetic Spectrum</h3>
<ul>
<li>Radio waves → Microwaves → Infrared → Visible light → Ultraviolet → X-rays → Gamma rays</li>
<li>Increasing frequency, decreasing wavelength, increasing energy (E = hf)</li>
<li>All travel at c = 3.0 × 10⁸ m/s in vacuum</li>
<li><strong>Visible light:</strong> 400 nm (violet) to 700 nm (red)</li>
</ul>
<h3>3. Reflection & Refraction</h3>
<ul>
<li><strong>Law of reflection:</strong> Angle of incidence = angle of reflection (measured from normal)</li>
<li><strong>Refractive index:</strong> n = c/v = sin i / sin r (Snell's Law)</li>
<li><strong>Critical angle:</strong> sin c = 1/n — when light travels from denser to less dense medium</li>
<li><strong>Total internal reflection:</strong> Occurs when i > c; basis of optical fibres</li>
</ul>
<h3>4. Interference & Diffraction</h3>
<ul>
<li><strong>Principle of superposition:</strong> When waves meet, resultant displacement = sum of individual displacements</li>
<li><strong>Constructive interference:</strong> Path difference = nλ — waves in phase, amplitudes add</li>
<li><strong>Destructive interference:</strong> Path difference = (n + ½)λ — waves in antiphase, amplitudes cancel</li>
<li><strong>Young's double slit:</strong> Fringe spacing w = λD/a (wavelength × slit-screen distance / slit separation)</li>
<li><strong>Diffraction grating:</strong> d sin θ = nλ (grating spacing × sin angle = order × wavelength)</li>
</ul>
<h3>5. Polarisation</h3>
<ul>
<li>Transverse waves can be polarised; longitudinal waves cannot</li>
<li><strong>Malus's Law:</strong> I = I₀ cos² θ — intensity after passing through analyser</li>
<li>Applications: Polaroid sunglasses, LCD screens, stress analysis</li>
</ul>`,
[`v = fλ — wave speed = frequency × wavelength`,
 `Intensity ∝ amplitude²; follows inverse square law (I ∝ 1/r²)`,
 `Snell's Law: n = sin i / sin r = c/v`,
 `Critical angle: sin c = 1/n; total internal reflection when i > c`,
 `Young's double slit: fringe spacing w = λD/a`,
 `Diffraction grating: d sin θ = nλ`,
 `Constructive interference: path difference = nλ`,
 `Destructive interference: path difference = (n + ½)λ`,
 `Only transverse waves can be polarised`],
[`Always measure angles from the normal, not the surface`,
 `For interference: identify whether path difference gives constructive or destructive`,
 `Remember orders for diffraction grating: n = 0 is central maximum`,
 `Check units — wavelength in metres for calculations`]);

register('physics-p5',
`<h3>1. Electric Charge & Current</h3>
<ul>
<li><strong>Electric charge (Q):</strong> Measured in coulombs (C); Q = It (current × time)</li>
<li><strong>Current (I):</strong> Rate of flow of charge; I = ΔQ/Δt; conventional current flows + to −</li>
<li><strong>Charge carriers:</strong> Electrons in metals, ions in electrolytes</li>
<li><strong>Mean drift velocity (v):</strong> I = nAqv (n = charge carrier density, A = cross-sectional area, q = charge per carrier)</li>
</ul>
<h3>2. Potential Difference & Resistance</h3>
<ul>
<li><strong>Potential difference (V):</strong> Energy transferred per unit charge; V = W/Q = IR</li>
<li><strong>Resistance (R):</strong> R = V/I; unit is ohm (Ω)</li>
<li><strong>Ohm's Law:</strong> V = IR (for ohmic conductors at constant temperature)</li>
<li><strong>Resistivity (ρ):</strong> R = ρL/A; unit is Ω·m</li>
<li><strong>Temperature effect on metals:</strong> Resistance increases (more lattice vibrations scatter electrons)</li>
<li><strong>Temperature effect on thermistors:</strong> Resistance decreases (more charge carriers)</li>
<li><strong>Superconductivity:</strong> Zero resistance below critical temperature; used in MRI, maglev trains</li>
</ul>
<h3>3. Electrical Power</h3>
<ul>
<li><strong>Power (P):</strong> P = VI = I²R = V²/R</li>
<li><strong>Energy:</strong> E = VIt = I²Rt = V²t/R (in joules)</li>
<li><strong>Kilowatt-hour (kWh):</strong> Energy = power (kW) × time (h); 1 kWh = 3.6 MJ</li>
</ul>
<h3>4. DC Circuits</h3>
<ul>
<li><strong>Series:</strong> I same throughout; V adds; R_total = R₁ + R₂ + R₃...</li>
<li><strong>Parallel:</strong> V same across branches; I adds; 1/R_total = 1/R₁ + 1/R₂ + 1/R₃...</li>
<li><strong>Potential divider:</strong> V_out = V_in × R₂/(R₁ + R₂)</li>
<li><strong>EMF (ε):</strong> Total energy supplied per unit charge by source</li>
<li><strong>Internal resistance (r):</strong> V_terminal = ε − Ir; lost volts = Ir</li>
</ul>
<h3>5. Kirchhoff's Laws</h3>
<ul>
<li><strong>First Law (Current):</strong> Sum of currents entering junction = sum leaving (conservation of charge)</li>
<li><strong>Second Law (Voltage):</strong> Sum of EMFs = sum of p.d.s around any closed loop (conservation of energy)</li>
</ul>`,
[`Q = It; I = nAqv (drift velocity equation)`,
 `Ohm's Law: V = IR (for ohmic conductors)`,
 `Resistivity: R = ρL/A`,
 `Power: P = VI = I²R = V²/R`,
 `Series: R_total = R₁ + R₂ + ...; Parallel: 1/R_total = 1/R₁ + 1/R₂ + ...`,
 `Potential divider: V_out = V_in × R₂/(R₁ + R₂)`,
 `EMF = terminal p.d. + lost volts: ε = V + Ir`,
 `Kirchhoff's 1st: ΣI_in = ΣI_out; 2nd: ΣEMF = ΣIR around loop`],
[`Always redraw complex circuits to identify series/parallel sections`,
 `For internal resistance problems: ε = IR + Ir = I(R + r)`,
 `In potential dividers, output voltage is proportional to resistance ratio`,
 `Check signs in Kirchhoff's 2nd law — EMF and p.d. oppose around loop`]);

register('physics-p6',
`<h3>1. Magnets & Magnetic Fields</h3>
<ul>
<li><strong>Magnetic field:</strong> Region where magnetic force acts; represented by field lines (N to S externally)</li>
<li><strong>Magnetic flux density (B):</strong> Measure of field strength; unit tesla (T)</li>
<li><strong>Uniform field:</strong> Parallel, equally spaced field lines (between poles of magnet, inside solenoid)</li>
</ul>
<h3>2. Current-Carrying Conductors</h3>
<ul>
<li><strong>Force on current:</strong> F = BIL sin θ (B = flux density, I = current, L = length, θ = angle to field)</li>
<li><strong>Fleming's left-hand rule:</strong> Thumb (force), First finger (field), seCond finger (current)</li>
<li><strong>Force between parallel wires:</strong> Attractive for same-direction currents; repulsive for opposite</li>
</ul>
<h3>3. Moving Charges in Magnetic Fields</h3>
<ul>
<li><strong>Force on moving charge:</strong> F = Bqv sin θ</li>
<li><strong>Circular motion:</strong> Magnetic force provides centripetal force: Bqv = mv²/r → r = mv/(Bq)</li>
<li><strong>Velocity selector:</strong> Electric and magnetic forces balance: Eq = Bqv → v = E/B</li>
<li><strong>Mass spectrometer:</strong> Separates ions by mass/charge ratio using magnetic deflection</li>
</ul>
<h3>4. Electromagnetic Induction</h3>
<ul>
<li><strong>Faraday's Law:</strong> Induced EMF ∝ rate of change of magnetic flux linkage: ε = −N dΦ/dt</li>
<li><strong>Magnetic flux (Φ):</strong> Φ = BA (field strength × area perpendicular to field); unit weber (Wb)</li>
<li><strong>Flux linkage:</strong> NΦ = BAN (for N turns)</li>
<li><strong>Lenz's Law:</strong> Direction of induced current opposes the change producing it (conservation of energy)</li>
<li><strong>EMF in moving conductor:</strong> ε = BLv (conductor length L moving at speed v perpendicular to field)</li>
</ul>
<h3>5. Transformers</h3>
<ul>
<li><strong>Turns ratio:</strong> Vₚ/Vₛ = Nₚ/Nₛ</li>
<li><strong>Power (ideal):</strong> VₚIₚ = VₛIₛ (input power = output power)</li>
<li><strong>Efficiency:</strong> (VₛIₛ / VₚIₚ) × 100%</li>
<li><strong>Core design:</strong> Laminated soft iron core reduces eddy currents; step-up increases voltage, decreases current</li>
</ul>`,
[`F = BIL sin θ — force on current-carrying conductor`,
 `F = Bqv sin θ — force on moving charge`,
 `Circular path radius: r = mv/(Bq)`,
 `Magnetic flux: Φ = BA; flux linkage = NΦ = BAN`,
 `Faraday's Law: ε = −N dΦ/dt`,
 `Lenz's Law: induced effect opposes the change`,
 `Transformer: Vₚ/Vₛ = Nₚ/Nₛ; ideal: VₚIₚ = VₛIₛ`,
 `EMF in moving rod: ε = BLv`],
[`Use Fleming's left-hand rule for force direction — always check`,
 `For circular motion in magnetic fields: magnetic force IS the centripetal force`,
 `Lenz's Law ensures energy conservation — induced current opposes the change`,
 `In transformers, step-up: more secondary turns, higher voltage, lower current`]);

register('physics-p7',
`<h3>1. Atomic Structure</h3>
<ul>
<li><strong>Proton number (Z):</strong> Number of protons; defines the element</li>
<li><strong>Nucleon number (A):</strong> Total protons + neutrons</li>
<li><strong>Isotopes:</strong> Same Z, different neutron number; same chemical properties, different physical properties</li>
<li><strong>Nuclear notation:</strong> ᴬ_Z X (e.g., ¹⁴_₆C)</li>
</ul>
<h3>2. Radioactive Decay</h3>
<ul>
<li><strong>Alpha (α):</strong> ⁴₂He nucleus; stopped by paper; strongly ionising; deflected by E and B fields</li>
<li><strong>Beta (β⁻):</strong> Fast electron (⁰_−₁e); stopped by few mm aluminium; moderately ionising; deflected more than α</li>
<li><strong>Gamma (γ):</strong> EM radiation; stopped by thick lead; weakly ionising; not deflected by fields</li>
<li><strong>Positron (β⁺):</strong> ⁰_+₁e (antimatter electron)</li>
</ul>
<h3>3. Decay Equations</h3>
<ul>
<li><strong>Alpha decay:</strong> ᴬ_Z X → ᴬ⁻⁴_Z₋₂ Y + ⁴₂α</li>
<li><strong>Beta decay:</strong> ᴬ_Z X → ᴬ_Z₊₁ Y + ⁰_−₁β + ν̄ₑ (antineutrino)</li>
<li><strong>Gamma decay:</strong> Excited nucleus → ground state + γ (no change in A or Z)</li>
</ul>
<h3>4. Half-Life</h3>
<ul>
<li><strong>Activity (A):</strong> Number of decays per second; unit becquerel (Bq)</li>
<li><strong>Half-life (t½):</strong> Time for activity or number of nuclei to halve</li>
<li><strong>Decay constant (λ):</strong> A = λN; probability of decay per unit time</li>
<li><strong>Exponential decay:</strong> N = N₀ e^(−λt); A = A₀ e^(−λt)</li>
<li><strong>Relationship:</strong> t½ = ln(2)/λ ≈ 0.693/λ</li>
</ul>
<h3>5. Nuclear Reactions</h3>
<ul>
<li><strong>Mass-energy equivalence:</strong> E = mc²; ΔE = Δmc²</li>
<li><strong>Unified atomic mass unit (u):</strong> 1 u = 1.661 × 10⁻²⁷ kg = 931.5 MeV/c²</li>
<li><strong>Binding energy:</strong> Energy released when nucleons assemble into nucleus; binding energy per nucleon peaks at Fe-56</li>
<li><strong>Fission:</heavy> Heavy nucleus splits → releases energy; used in nuclear reactors</li>
<li><strong>Fusion:</strong> Light nuclei combine → releases energy; powers stars</li>
</ul>`,
[`Alpha: ⁴₂He; Beta: ⁰_−₁e; Gamma: high-energy photon`,
 `Conservation laws: A and Z must balance on both sides`,
 `Half-life: time for activity or N to halve; t½ = ln(2)/λ`,
 `Exponential decay: N = N₀e^(−λt); A = A₀e^(−λt)`,
 `E = mc²; 1 u = 931.5 MeV/c²`,
 `Binding energy per nucleon peaks at iron-56`,
 `Fission: heavy splits; Fusion: light combine — both release energy`],
[`Always check conservation of nucleon number (A) and proton number (Z)`,
 `For half-life problems: count number of half-lives, halve N that many times`,
 `Gamma decay only releases energy — no change in element`,
 `Binding energy curve shows energy released in fission (right of peak) and fusion (left of peak)`]);

// Add more physics topics (p8-p14)
register('physics-p8',
`<h3>1. Temperature & Thermal Equilibrium</h3>
<ul>
<li><strong>Thermal equilibrium:</strong> No net heat transfer between bodies at same temperature</li>
<li><strong>Kelvin scale:</strong> T(K) = T(°C) + 273.15; absolute zero = 0 K = −273.15°C</li>
<li><strong>Thermometric properties:</strong> Physical properties that vary with temperature (EMF, resistance, volume, pressure)</li>
</ul>
<h3>2. Thermal Expansion</h3>
<ul>
<li><strong>Linear expansion:</strong> ΔL = αL₀ΔT (α = coefficient of linear expansion)</li>
<li><strong>Area expansion:</strong> ΔA = 2αA₀ΔT</li>
<li><strong>Volume expansion:</strong> ΔV = βV₀ΔT (β ≈ 3α for solids)</li>
<li><strong>Anomalous expansion of water:</strong> Water contracts from 0°C to 4°C, then expands</li>
</ul>
<h3>3. Specific Heat Capacity</h3>
<ul>
<li><strong>Definition:</strong> Energy required to raise unit mass by unit temperature: c = Q/(mΔT)</li>
<li><strong>Method of mixtures:</strong> Heat lost by hot body = heat gained by cold body (assuming no losses)</li>
<li><strong>Continuous flow method:</strong> More accurate; electrical energy input measured</li>
</ul>
<h3>4. Specific Latent Heat</h3>
<ul>
<li><strong>Latent heat of fusion (L_f):</strong> Energy to change unit mass from solid to liquid at constant temperature</li>
<li><strong>Latent heat of vaporisation (L_v):</strong> Energy to change unit mass from liquid to gas at constant temperature</li>
<li><strong>Equation:</strong> Q = mL</li>
<li><strong>During phase change:</strong> Temperature remains constant while energy is supplied</li>
</ul>
<h3>5. Ideal Gases</h3>
<ul>
<li><strong>Gas laws:</strong>
  <ul>
  <li>Boyle's Law: pV = constant (at constant T)</li>
  <li>Charles's Law: V/T = constant (at constant p)</li>
  <li>Pressure Law: p/T = constant (at constant V)</li>
  </ul>
</li>
<li><strong>Ideal gas equation:</strong> pV = nRT (n = moles, R = 8.314 J/(mol·K))</li>
<li><strong>Alternative form:</strong> pV = NkT (N = number of molecules, k = Boltzmann constant = 1.38 × 10⁻²³ J/K)</li>
<li><strong>Kinetic theory assumptions:</strong> Point molecules, random motion, elastic collisions, no intermolecular forces, time of collision negligible</li>
<li><strong>Mean kinetic energy:</strong> ½m⟨c²⟩ = (3/2)kT — proportional to absolute temperature</li>
<li><strong>Root-mean-square speed:</strong> c_rms = √(3kT/m) = √(3RT/M)</li>
</ul>`,
[`T(K) = T(°C) + 273.15`,
 `Q = mcΔT — specific heat capacity`,
 `Q = mL — specific latent heat (phase change)`,
 `Ideal gas: pV = nRT = NkT`,
 `Boyle's: pV = const; Charles's: V/T = const; Pressure: p/T = const`,
 `Mean KE = (3/2)kT — proportional to absolute temperature`,
 `c_rms = √(3kT/m) = √(3RT/M)`],
[`Remember: during phase change, temperature is constant — all energy goes into breaking/forming bonds`,
 `For ideal gas problems, ensure temperature is in Kelvin`,
 `Mean KE depends only on temperature, not on gas type`,
 `Assumptions of kinetic theory are key to deriving pV = (1/3)Nm⟨c²⟩`]);

register('physics-p9',
`<h3>1. Simple Harmonic Motion (SHM)</h3>
<ul>
<li><strong>Definition:</strong> Acceleration proportional to displacement and directed towards equilibrium: a = −ω²x</li>
<li><strong>Displacement:</strong> x = A cos(ωt) or x = A sin(ωt) — A = amplitude, ω = angular frequency</li>
<li><strong>Velocity:</strong> v = ±ω√(A² − x²); maximum at equilibrium (v_max = ωA)</li>
<li><strong>Acceleration:</strong> a = −ω²x; maximum at extremes (a_max = ω²A)</li>
<li><strong>Period:</strong> T = 2π/ω = 1/f</li>
<li><strong>Energy in SHM:</strong> Total E = ½mω²A² (constant); KE max at equilibrium, PE max at extremes</li>
</ul>
<h3>2. Mass-Spring System</h3>
<ul>
<li><strong>Period:</strong> T = 2π√(m/k) (k = spring constant)</li>
<li><strong>Frequency independent of amplitude</strong> (isochronous)</li>
</ul>
<h3>3. Simple Pendulum</h3>
<ul>
<li><strong>Period:</strong> T = 2π√(L/g) (L = length, g = acceleration due to gravity)</li>
<li><strong>Valid for small angles</strong> (θ < 10° approximately)</li>
<li><strong>Independent of mass and amplitude</strong> (for small oscillations)</li>
</ul>
<h3>4. Damped Oscillations</h3>
<ul>
<li><strong>Light damping:</strong> Amplitude gradually decreases; frequency slightly reduced</li>
<li><strong>Critical damping:</strong> Returns to equilibrium in shortest time without oscillating</li>
<li><strong>Heavy damping:</strong> Returns slowly without oscillating</li>
<li><strong>Examples:</strong> Car shock absorbers, door closers, galvanometers</li>
</ul>
<h3>5. Forced Oscillations & Resonance</h3>
<ul>
<li><strong>Forced oscillation:</strong> System driven by external periodic force</li>
<li><strong>Natural frequency (f₀):</strong> Frequency at which system oscillates freely</li>
<li><strong>Resonance:</strong> Maximum amplitude when driving frequency = natural frequency</li>
<li><strong>Examples:</strong> Bridge collapse (Tacoma Narrows), MRI, radio tuning, microwave ovens</li>
<li><strong>Damping reduces resonance peak</strong> and shifts peak slightly below f₀</li>
</ul>`,
[`SHM: a = −ω²x — acceleration proportional to displacement, opposite direction`,
 `x = A cos(ωt); v_max = ωA; a_max = ω²A`,
 `Total energy = ½mω²A² (constant)`,
 `Spring: T = 2π√(m/k)`,
 `Pendulum: T = 2π√(L/g)`,
 `Resonance occurs when driving frequency = natural frequency`,
 `Critical damping: fastest return to equilibrium without oscillation`],
[`For SHM problems, always start with a = −ω²x and derive other quantities`,
 `Energy graphs: KE and PE are π/2 out of phase; total energy is horizontal line`,
 `Pendulum formula only valid for small angles — check this condition`,
 `Resonance can be destructive (bridges) or useful (MRI, radio)`]);

register('physics-p10',
`<h3>1. Electric Fields</h3>
<ul>
<li><strong>Electric field strength (E):</strong> Force per unit positive charge; E = F/Q; unit N/C or V/m</li>
<li><strong>Point charge:</strong> E = Q/(4πε₀r²) — radial field, directed away from +, toward −</li>
<li><strong>Uniform field:</strong> E = V/d (between parallel plates)</li>
<li><strong>Coulomb's Law:</strong> F = Q₁Q₂/(4πε₀r²) — force between two point charges</li>
<li><strong>Permittivity of free space:</strong> ε₀ = 8.85 × 10⁻¹² F/m</li>
</ul>
<h3>2. Electric Potential</h3>
<ul>
<li><strong>Electric potential (V):</strong> Work done per unit charge bringing from infinity; V = Q/(4πε₀r)</li>
<li><strong>Potential difference:</strong> Work done per unit charge between two points</li>
<li><strong>Equipotential surfaces:</strong> Surfaces of constant potential; field lines perpendicular to them</li>
<li><strong>Relationship:</strong> E = −dV/dr (field strength = negative potential gradient)</li>
</ul>
<h3>3. Gravitational Fields</h3>
<ul>
<li><strong>Gravitational field strength (g):</strong> Force per unit mass; g = F/m = GM/r²</li>
<li><strong>Newton's Law of Gravitation:</strong> F = GMm/r² — always attractive</li>
<li><strong>Gravitational potential (φ):</strong> Work done per unit mass from infinity; φ = −GM/r (negative — zero at infinity)</li>
<li><strong>Potential energy:</strong> Eₚ = mφ = −GMm/r</li>
<li><strong>Escape velocity:</strong> v = √(2GM/R) — minimum speed to escape gravitational field</li>
</ul>
<h3>4. Orbital Mechanics</h3>
<ul>
<li><strong>Orbital speed:</strong> v = √(GM/r) — gravitational force provides centripetal force</li>
<li><strong>Orbital period:</strong> T² ∝ r³ (Kepler's Third Law) — T² = (4π²/GM)r³</li>
<li><strong>Geostationary orbit:</strong> T = 24 h, above equator, orbits west to east, fixed position relative to Earth</li>
<li><strong>Total energy of orbit:</strong> E = −GMm/(2r) — KE = |E|, PE = 2E</li>
</ul>
<h3>5. Similarities & Differences</h3>
<ul>
<li>Both follow inverse-square laws; both have potential proportional to 1/r</li>
<li>Electric can be attractive or repulsive; gravitational is always attractive</li>
<li>Electric forces much stronger; gravitational forces dominate at large scales</li>
</ul>`,
[`E = F/Q = V/d (uniform); E = Q/(4πε₀r²) (point charge)`,
 `V = Q/(4πε₀r); E = −dV/dr`,
 `g = GM/r²; F = GMm/r²`,
 `φ = −GM/r; Eₚ = −GMm/r`,
 `Orbital: v = √(GM/r); T² = (4π²/GM)r³`,
 `Escape velocity: v = √(2GM/R)`,
 `Total orbital energy: E = −GMm/(2r)`],
[`Remember gravitational potential is ALWAYS negative (zero at infinity)`,
 `For orbital mechanics: set gravitational force equal to centripetal force`,
 `Geostationary satellites: period = 24h, orbit above equator, same direction as Earth's rotation`,
 `In electric fields, positive charges move from high to low potential; negative charges opposite`]);

register('physics-p11',
`<h3>1. Capacitance</h3>
<ul>
<li><strong>Definition:</strong> C = Q/V — charge stored per unit potential difference; unit farad (F)</li>
<li><strong>Parallel plate capacitor:</strong> C = ε₀A/d (A = area, d = separation)</li>
<li><strong>With dielectric:</strong> C = ε₀εᵣA/d (εᵣ = relative permittivity)</li>
<li><strong>Factors affecting capacitance:</strong> Increase area → increase C; decrease separation → increase C; add dielectric → increase C</li>
</ul>
<h3>2. Energy Stored</h3>
<ul>
<li><strong>Energy:</strong> W = ½QV = ½CV² = ½Q²/C</li>
<li><strong>Energy stored in electric field:</strong> Energy density = ½ε₀E²</li>
</ul>
<h3>3. Capacitor Charging & Discharging</h3>
<ul>
<li><strong>Charging:</strong> Q = Q₀(1 − e^(−t/RC)); V = V₀(1 − e^(−t/RC)); I = I₀e^(−t/RC)</li>
<li><strong>Discharging:</strong> Q = Q₀e^(−t/RC); V = V₀e^(−t/RC); I = I₀e^(−t/RC)</li>
<li><strong>Time constant (τ):</strong> τ = RC — time for charge to fall to 1/e (≈37%) of initial value</li>
<li><strong>After 5τ:</strong> Considered fully charged/discharged (>99%)</li>
</ul>
<h3>4. RC Circuits</h3>
<ul>
<li><strong>Half-life:</strong> t½ = τ ln(2) ≈ 0.693RC</li>
<li><strong>Logarithmic analysis:</strong> ln V = ln V₀ − t/RC — gradient = −1/RC</li>
</ul>
<h3>5. Applications</h3>
<ul>
<li><strong>Flash photography:</strong> Store charge then discharge rapidly</li>
<li><strong>Smoothing circuits:</strong> Reduce ripple in power supplies</li>
<li><strong>Timing circuits:</strong> Heart defibrillators, intermittent windscreen wipers</li>
<li><strong>Energy storage:</strong> Backup power systems</li>
</ul>`,
[`C = Q/V; parallel plate: C = ε₀A/d`,
 `Energy: W = ½CV² = ½QV = ½Q²/C`,
 `Time constant: τ = RC`,
 `Charging: Q = Q₀(1 − e^(−t/RC))`,
 `Discharging: Q = Q₀e^(−t/RC)`,
 `After one τ: charge falls to 37%; after 5τ: >99% complete`,
 `Half-life: t½ = 0.693RC`],
[`Time constant is the key to all RC timing problems`,
 `For discharge graphs, plot ln V vs t to get a straight line`,
 `Remember factor of ½ in energy — don't use W = QV (that's work done by battery)`,
 `Dielectric increases capacitance by factor εᵣ`]);

register('physics-p12',
`<h3>1. Photoelectric Effect</h3>
<ul>
<li><strong>Observations:</strong> Electron emission immediate; threshold frequency exists; KE depends on frequency not intensity; number of electrons proportional to intensity</li>
<li><strong>Photon energy:</strong> E = hf = hc/λ</li>
<li><strong>Work function (Φ):</strong> Minimum energy to release electron from surface</li>
<li><strong>Einstein's equation:</strong> hf = Φ + ½mv²_max (photon energy = work function + max KE)</li>
<li><strong>Threshold frequency:</strong> f₀ = Φ/h — below this, no emission regardless of intensity</li>
<li><strong>Stopping potential:</strong> eVₛ = ½mv²_max = hf − Φ</li>
</ul>
<h3>2. Wave-Particle Duality</h3>
<ul>
<li><strong>de Broglie wavelength:</strong> λ = h/p = h/(mv) — all matter has wave-like properties</li>
<li><strong>Electron diffraction:</strong> Evidence for wave nature; λ comparable to atomic spacing</li>
</ul>
<h3>3. Energy Levels in Atoms</h3>
<ul>
<li><strong>Line spectra:</strong> Electrons transition between discrete energy levels; emit photons with specific wavelengths</li>
<li><strong>Energy of photon:</strong> ΔE = E₂ − E₁ = hf = hc/λ</li>
<li><strong>Ionisation energy:</strong> Energy to remove electron from ground state to infinity</li>
<li><strong>Ground state:</strong> Lowest energy level; excited states have higher energy</li>
</ul>
<h3>4. Nuclear Structure</h3>
<ul>
<li><strong>Rutherford scattering:</strong> Most α pass through → atom mostly empty; some deflect → concentrated positive charge; very few rebound → nucleus very small</li>
<li><strong>Nuclear radius:</strong> R = R₀A^(1/3) where R₀ ≈ 1.2 fm; nuclear density approximately constant</li>
</ul>
<h3>5. Particle Physics</h3>
<ul>
<li><strong>Quarks:</strong> Up (u, +2/3 e), Down (d, −1/3 e), Strange (s, −1/3 e), Charm, Top, Bottom</li>
<li><strong>Proton:</strong> uud (+1 e); Neutron: udd (0)</li>
<li><strong>Hadrons:</strong> Baryons (3 quarks) and Mesons (quark-antiquark)</li>
<li><strong>Leptons:</strong> Electron, muon, tau, neutrinos — fundamental, not made of quarks</li>
<li><strong>Exchange particles:</strong> Photon (EM), W⁺/W⁻/Z⁰ (weak), Gluon (strong), Graviton (gravity)</li>
</ul>`,
[`Photoelectric: hf = Φ + ½mv²_max`,
 `Threshold frequency: f₀ = Φ/h`,
 `de Broglie: λ = h/p = h/(mv)`,
 `Line spectra: ΔE = hf = hc/λ`,
 `Nuclear radius: R = R₀A^(1/3)`,
 `Proton = uud; Neutron = udd`,
 `Quark charges: u = +2/3, d = −1/3`],
[`Photoelectric effect proves light is particle-like — wave theory cannot explain threshold frequency`,
 `In photoelectric equation, ½mv²_max is the MAXIMUM kinetic energy`,
 `de Broglie wavelength for electrons: λ = h/√(2meV) when accelerated through V`,
 `Nuclear density is constant — all nuclei have same density regardless of size`]);

register('physics-p13',
`<h3>1. Stellar Luminosity</h3>
<ul>
<li><strong>Luminosity (L):</strong> Total power radiated by star; L = 4πR²σT⁴ (Stefan-Boltzmann Law)</li>
<li><strong>Stefan-Boltzmann constant:</strong> σ = 5.67 × 10⁻⁸ W·m⁻²·K⁻⁴</li>
<li><strong>Wien's Displacement Law:</strong> λ_max T = 2.898 × 10⁻³ m·K — peak wavelength inversely proportional to temperature</li>
<li><strong>Apparent brightness:</strong> b = L/(4πd²) — power received per unit area at Earth</li>
</ul>
<h3>2. Classification of Stars</h3>
<ul>
<li><strong>Hertzsprung-Russell (H-R) diagram:</strong> Luminosity vs temperature (or spectral class)</li>
<li><strong>Main sequence:</strong> Stars fusing hydrogen; diagonal band from top-left (hot, bright) to bottom-right (cool, dim)</li>
<li><strong>Red giants:</strong> Cool but large and luminous; above main sequence</li>
<li><strong>White dwarfs:</strong> Hot but small and dim; below main sequence</li>
<li><strong>Spectral classes:</strong> O, B, A, F, G, K, M (Oh Be A Fine Girl Kiss Me) — decreasing temperature</li>
</ul>
<h3>3. Star Formation & Evolution</h3>
<ul>
<li><strong>Nebula → Protostar → Main Sequence → Red Giant → Planetary Nebula → White Dwarf</strong> (for Sun-like stars)</li>
<li><strong>Massive stars:</strong> → Red Supergiant → Supernova → Neutron Star (or Black Hole if > 3 solar masses)</li>
<li><strong>Chandrasekhar limit:</strong> 1.4 solar masses — maximum mass for white dwarf</li>
<li><strong>Supernova:</strong> Massive explosion; produces elements heavier than iron</li>
</ul>
<h3>4. Cosmology</h3>
<ul>
<li><strong>Cosmological principle:</strong> Universe homogeneous and isotropic on large scales</li>
<li><strong>Hubble's Law:</strong> v = H₀d — recessional velocity proportional to distance</li>
<li><strong>Hubble constant:</strong> H₀ ≈ 70 km/s/Mpc</li>
<li><strong>Age of universe:</strong> t ≈ 1/H₀ ≈ 14 billion years</li>
<li><strong>Redshift:</strong> z = Δλ/λ ≈ v/c (for v << c)</li>
<li><strong>Cosmic Microwave Background (CMB):</strong> Black body radiation at 2.7 K — evidence for Big Bang</li>
<li><strong>Dark matter:</strong> Inferred from galactic rotation curves; doesn't emit/reflect light</li>
<li><strong>Dark energy:</strong> Causes accelerating expansion; ~68% of universe's energy</li>
</ul>
<h3>5. Doppler Effect</h3>
<ul>
<li><strong>Moving source:</strong> Δλ/λ ≈ v/c (receding → redshift; approaching → blueshift)</li>
<li><strong>Applications:</strong> Measuring stellar velocities, detecting exoplanets, radar speed guns</li>
</ul>`,
[`Stefan-Boltzmann: L = 4πR²σT⁴`,
 `Wien's Law: λ_max T = 2.898 × 10⁻³ m·K`,
 `Brightness: b = L/(4πd²)`,
 `Hubble's Law: v = H₀d`,
 `Redshift: z = Δλ/λ ≈ v/c`,
 `H-R diagram: main sequence, red giants, white dwarfs`,
 `Sun-like: main seq → red giant → white dwarf`,
 `Massive: main seq → red supergiant → supernova → neutron star/black hole`],
[`Hotter stars are bluer and more luminous (top-left of H-R diagram)`,
 `Use b = L/(4πd²) to find distance if luminosity known (standard candle)`,
 `CMB at 2.7 K is strong evidence for Big Bang — universe was once much hotter`,
 `Dark matter detected via gravitational effects; dark energy via accelerating expansion`]);

register('physics-p14',
`<h3>1. Measurement Techniques</h3>
<ul>
<li><strong>Systematic errors:</strong> Consistent bias in one direction; can be calibrated out</li>
<li><strong>Random errors:</strong> Fluctuate about true value; reduced by repeated measurements</li>
<li><strong>Precision vs accuracy:</strong> Precision = reproducibility; accuracy = closeness to true value</li>
<li><strong>Uncertainty:</strong> Estimate of range within which true value lies</li>
</ul>
<h3>2. Data Analysis</h3>
<ul>
<li><strong>Linearisation:</strong> Rearrange to y = mx + c form for graph plotting</li>
<li><strong>Gradient and intercept:</strong> Extract physical quantities from straight-line graphs</li>
<li><strong>Logarithmic plots:</strong> Use to verify power laws (ln y vs ln x gives gradient = power)</li>
<li><strong>Mean and standard deviation:</strong> x̄ = Σx/n; σ = √(Σ(x − x̄)²/n)</li>
</ul>
<h3>3. Experimental Design</h3>
<ul>
<li><strong>Fair test:</strong> Control variables, change only independent variable</li>
<li><strong>Range and interval:</strong> Wide range with at least 5-6 readings</li>
<li><strong>Repeats:</strong> Identify anomalies, calculate mean, assess precision</li>
<li><strong>Safety considerations:</strong> Identify hazards and precautions</li>
</ul>
<h3>4. Graphical Analysis</h3>
<ul>
<li><strong>Error bars:</strong> Show uncertainty on each data point</li>
<li><strong>Worst acceptable line:</strong> Steepest and shallowest lines through error bars</li>
<li><strong>Percentage uncertainty from gradient:</strong> (gradient difference / best gradient) × 100%</li>
</ul>`,
[`Systematic errors: consistent bias; random errors: statistical fluctuations`,
 `Linearise equations to y = mx + c for graph plotting`,
 `Use error bars and worst acceptable lines for uncertainty`,
 `Repeat measurements to identify anomalies and improve precision`,
 `Control variables = fair test`,
 `Log-log plots: gradient = power in relationship y = kxⁿ`],
[`Always identify type of error and suggest improvement`,
 `When plotting: label axes with quantity and unit, use sensible scale, plot points precisely`,
 `For straight-line graphs: gradient and intercept have physical meaning — identify them`,
 `Error bars should reflect actual uncertainty in measurements`]);

// ============================================================================
// CAIE CHEMISTRY
// ============================================================================

register('chemistry-c1',
`<h3>1. Atomic Structure</h3>
<ul>
<li><strong>Protons:</strong> Relative mass 1, charge +1, in nucleus</li>
<li><strong>Neutrons:</strong> Relative mass 1, charge 0, in nucleus</li>
<li><strong>Electrons:</strong> Relative mass 1/1836, charge −1, orbit nucleus in shells/energy levels</li>
<li><strong>Nucleon number (A):</strong> Protons + neutrons</li>
<li><strong>Proton number (Z):</strong> Number of protons = number of electrons in neutral atom</li>
</ul>
<h3>2. Isotopes</h3>
<ul>
<li>Same proton number, different nucleon number (different neutron number)</li>
<li>Same chemical properties (same electron configuration), different physical properties (different mass)</li>
<li><strong>Relative atomic mass:</strong> Weighted average of isotopic masses: Aᵣ = Σ(isotopic mass × abundance) / 100</li>
</ul>
<h3>3. Mass Spectrometry</h3>
<ul>
<li><strong>Stages:</strong> Vaporisation → Ionisation (electron gun, M → M⁺ + e⁻) → Acceleration → Deflection (magnetic field) → Detection</li>
<li><strong>Uses:</strong> Determine Aᵣ, identify isotopes, molecular mass, fragmentation patterns for structure determination</li>
<li><strong>m/z ratio:</strong> Mass-to-charge ratio; for singly charged ions, m/z = mass number</li>
</ul>
<h3>4. Electron Configuration</h3>
<ul>
<li><strong>Shells:</strong> n = 1, 2, 3, 4...; maximum 2n² electrons per shell</li>
<li><strong>Subshells:</strong> s (2), p (6), d (10), f (14)</li>
<li><strong>Aufbau principle:</strong> Fill lowest energy orbitals first: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...</li>
<li><strong>Special cases:</strong> Cr = [Ar] 3d⁵ 4s¹ (half-filled d is stable); Cu = [Ar] 3d¹⁰ 4s¹ (filled d is stable)</li>
</ul>
<h3>5. Ionisation Energy</h3>
<ul>
<li><strong>Definition:</strong> Energy required to remove one mole of electrons from one mole of gaseous atoms</li>
<li><strong>Factors affecting IE:</strong>
  <ul>
  <li>Nuclear charge (more protons → higher IE)</li>
  <li>Atomic radius (larger → lower IE)</li>
  <li>Shielding (more inner electrons → lower IE)</li>
  </ul>
</li>
<li><strong>Trends in Period 3:</strong> Generally increases across period (increasing nuclear charge, same shielding)</li>
<li><strong>Dip at Group 13 (Al):</strong> Electron removed from 3p (higher energy, more shielded than 3s)</li>
<li><strong>Dip at Group 16 (S):</strong> Electron removed from paired 3p orbital (electron-electron repulsion)</li>
</ul>
<h3>6. Periodic Trends</h3>
<ul>
<li><strong>Atomic radius:</strong> Decreases across period (increasing nuclear charge), increases down group (more shells)</li>
<li><strong>Ionic radius:</strong> Cations smaller than parent atom; anions larger than parent atom</li>
<li><strong>Melting points:</strong> Peak at Group 14 (giant covalent), low for noble gases (simple molecular)</li>
</ul>`,
[`Protons = Z; Neutrons = A − Z; Electrons = Z (neutral atom)`,
 `Isotopes: same Z, different A — same chemistry, different mass`,
 `Aᵣ = Σ(isotope mass × % abundance) / 100`,
 `Mass spec: ionisation → acceleration → deflection → detection`,
 `Aufbau order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...`,
 `IE increases across period, decreases down group`,
 `Dips at Groups 13 and 16 due to subshell and pairing effects`],
[`Always show working for Aᵣ calculations — method marks available`,
 `Cr and Cu have exceptional configurations — memorise them`,
 `When explaining IE trends, mention nuclear charge, atomic radius, AND shielding`,
 `In mass spec, the molecular ion peak (M⁺) gives the molecular mass`]);

register('chemistry-c2',
`<h3>1. Ionic Bonding</h3>
<ul>
<li><strong>Formation:</strong> Transfer of electrons from metal to non-metal; electrostatic attraction between oppositely charged ions</li>
<li><strong>Properties:</strong> High melting/boiling points; conduct when molten/aqueous (mobile ions); brittle; soluble in water</li>
<li><strong>Lattice energy:</strong> Energy released when gaseous ions form one mole of solid ionic compound</li>
<li><strong>Factors affecting lattice energy:</strong> Ionic charge (higher → more exothermic), ionic radius (smaller → more exothermic)</li>
</ul>
<h3>2. Covalent Bonding</h3>
<ul>
<li><strong>Formation:</strong> Sharing of electron pairs between atoms</li>
<li><strong>Coordinate (dative):</strong> Both electrons from one atom (e.g., NH₄⁺, H₃O⁺, Al₂Cl₆)</li>
<li><strong>Bond length:</strong> Distance between nuclei; shorter bonds are stronger</li>
<li><strong>Bond energy:</strong> Energy required to break one mole of bonds</li>
<li><strong>Multiple bonds:</strong> Double bond = 1σ + 1π; Triple bond = 1σ + 2π</li>
</ul>
<h3>3. Shapes of Molecules (VSEPR Theory)</h3>
<ul>
<li><strong>2 electron pairs (no lone pairs):</strong> Linear (180°) — BeCl₂</li>
<li><strong>3 electron pairs (no lone pairs):</strong> Trigonal planar (120°) — BF₃</li>
<li><strong>4 electron pairs (no lone pairs):</strong> Tetrahedral (109.5°) — CH₄</li>
<li><strong>4 electron pairs (1 lone pair):</strong> Trigonal pyramidal (107°) — NH₃</li>
<li><strong>4 electron pairs (2 lone pairs):</strong> Bent/V-shaped (104.5°) — H₂O</li>
<li><strong>5 electron pairs:</strong> Trigonal bipyramidal — PCl₅</li>
<li><strong>6 electron pairs:</strong> Octahedral (90°) — SF₆</li>
<li><strong>Lone pairs repel more than bonding pairs</strong> → reduce bond angles</li>
</ul>
<h3>4. Electronegativity & Bond Polarity</h3>
<ul>
<li><strong>Electronegativity:</strong> Measure of attraction for bonding electrons; increases across period, decreases down group</li>
<li><strong>Polar bond:</strong> ΔEN > 0.4; electrons displaced toward more electronegative atom</li>
<li><strong>Polar molecule:</strong> Has polar bonds AND asymmetrical shape (dipoles don't cancel)</li>
<li><strong>Non-polar molecule:</strong> Symmetrical shape cancels dipoles (CO₂, CCl₄, BF₃)</li>
</ul>
<h3>5. Intermolecular Forces</h3>
<ul>
<li><strong>van der Waals (London/dispersion):</strong> Present in all molecules; increases with number of electrons (molar mass)</li>
<li><strong>Dipole-dipole:</strong> Between polar molecules; permanent dipoles attract</li>
<li><strong>Hydrogen bonding:</strong> Strong dipole-dipole; H bonded to N, O, or F; explains high bp of H₂O, NH₃, HF</li>
<li><strong>Strength order:</strong> Hydrogen bond > dipole-dipole > van der Waals</li>
</ul>
<h3>6. Metallic Bonding</h3>
<ul>
<li><strong>Formation:</strong> Lattice of positive ions in sea of delocalised electrons</li>
<li><strong>Properties:</strong> High electrical and thermal conductivity; malleable; ductile; lustrous</li>
<li><strong>Explanation:</strong> Delocalised electrons move freely (conductivity); layers slide without breaking bonds (malleability)</li>
</ul>
<h3>7. Giant Covalent Structures</h3>
<ul>
<li><strong>Diamond:</strong> Each C bonded tetrahedrally to 4 others; very hard, high mp, non-conductor</li>
<li><strong>Graphite:</strong> Layers of hexagonal rings; weak forces between layers (slippery); delocalised electrons between layers (conducts)</li>
<li><strong>Silicon(IV) oxide:</strong> Similar to diamond; Si-O-Si bonds; high mp, hard</li>
</ul>`,
[`Ionic: electrostatic attraction; high mp, conduct when molten/aqueous`,
 `Covalent: shared electron pairs; coordinate = both from one atom`,
 `VSEPR: lone pairs repel more than bonding pairs → smaller angles`,
 `2 pairs = linear; 3 = trigonal planar; 4 = tetrahedral; 3+1 = pyramidal; 2+2 = bent`,
 `EN increases across period, decreases down group`,
 `Polar molecules need BOTH polar bonds AND asymmetrical shape`,
 `H-bonding: H bonded to N, O, or F — much stronger than dipole-dipole`,
 `Metallic: positive ions in sea of delocalised electrons`],
[`Always count ALL electron pairs (bonding + lone) for VSEPR`,
 `When comparing melting points: giant structures > H-bonded > polar > non-polar`,
 `Dipole moment direction: arrow points toward negative (δ−) end`,
 `Graphite conducts (delocalised electrons between layers); diamond doesn't (no free electrons)`]);

register('chemistry-c3',
`<h3>1. The Mole Concept</h3>
<ul>
<li><strong>Mole:</strong> Amount containing 6.022 × 10²³ particles (Avogadro constant, L)</li>
<li><strong>Molar mass (M):</strong> Mass of one mole; numerically equal to Aᵣ or Mᵣ in g/mol</li>
<li><strong>Number of moles:</strong> n = mass/M = concentration × volume (dm³) = V(gas)/24.0 (at rtp)</li>
</ul>
<h3>2. Empirical & Molecular Formulae</h3>
<ul>
<li><strong>Empirical:</strong> Simplest whole number ratio of atoms</li>
<li><strong>Molecular:</strong> Actual number of atoms in molecule = (empirical formula)ₙ where n = Mᵣ/empirical mass</li>
</ul>
<h3>3. Reacting Mass Calculations</h3>
<ul>
<li>Write balanced equation → find mole ratio → convert given mass to moles → use ratio → convert back to required quantity</li>
<li><strong>Limiting reagent:</strong> Reactant that is completely consumed; determines maximum product</li>
<li><strong>Percentage yield:</strong> (actual yield / theoretical yield) × 100%</li>
<li><strong>Percentage purity:</strong> (mass of pure substance / total mass) × 100%</li>
</ul>
<h3>4. Concentration Calculations</h3>
<ul>
<li><strong>Molarity:</strong> mol/dm³ or M</li>
<li><strong>Concentration (g/dm³):</strong> = molarity × Mᵣ</li>
<li><strong>Dilution:</strong> C₁V₁ = C₂V₂</li>
</ul>
<h3>5. Gas Laws</h3>
<ul>
<li><strong>Molar gas volume:</strong> 24.0 dm³/mol at room temperature and pressure (rtp: 20°C, 1 atm)</li>
<li><strong>Ideal gas equation:</strong> pV = nRT (R = 8.314 J/(mol·K); T in Kelvin)</li>
</ul>
<h3>6. Titration Calculations</h3>
<ul>
<li>Moles in titration: n = C × V (V in dm³)</li>
<li>Use mole ratio from equation</li>
<li>For acid-base: moles H⁺ = moles OH⁻ at equivalence point (for monoprotic)</li>
</ul>`,
[`n = mass/M = C × V = V(gas)/24 (rtp)`,
 `Empirical = simplest ratio; Molecular = (empirical)ₙ`,
 `% yield = (actual/theoretical) × 100`,
 `Limiting reagent determines maximum product`,
 `C₁V₁ = C₂V₂ for dilution`,
 `pV = nRT (T in K, V in m³, p in Pa)`,
 `Titration: use mole ratio from balanced equation`],
[`Always write balanced equations first — essential for mole ratios`,
 `Watch units: dm³ for concentration, m³ for pV=nRT`,
 `For limiting reagent: calculate moles of product from each reactant; smaller amount is limit`,
 `Percentage yield >100% indicates impurities or measurement errors`]);

register('chemistry-c4',
`<h3>1. Enthalpy Changes</h3>
<ul>
<li><strong>Exothermic:</strong> ΔH negative; heat released to surroundings; products lower energy than reactants</li>
<li><strong>Endothermic:</strong> ΔH positive; heat absorbed from surroundings; products higher energy than reactants</li>
<li><strong>Standard conditions:</strong> 298 K, 1 atm, 1 mol/dm³ for solutions, elements in standard states</li>
</ul>
<h3>2. Types of Enthalpy Change</h3>
<ul>
<li><strong>Formation (ΔH°f):</strong> One mole of compound from elements in standard states</li>
<li><strong>Combustion (ΔH°c):</strong> One mole of substance burns completely in oxygen</li>
<li><strong>Neutralisation (ΔH°neut):</strong> One mole of water formed from acid + base</li>
<li><strong>Atomisation (ΔH°at):</strong> One mole of gaseous atoms from element in standard state</li>
<li><strong>Bond dissociation:</strong> One mole of gaseous molecules → gaseous atoms</li>
</ul>
<h3>3. Calorimetry</h3>
<ul>
<li><strong>q = mcΔT</strong> — heat = mass × specific heat capacity × temperature change</li>
<li><strong>Assumption:</strong> All heat transferred to water/solution; no heat loss to surroundings</li>
<li><strong>Improvements:</strong> Lid, insulation, stir, accurate thermometer, repeat</li>
</ul>
<h3>4. Hess's Law</h3>
<ul>
<li><strong>Statement:</strong> Total enthalpy change is independent of route taken</li>
<li><strong>Application:</strong> ΔH°reaction = ΣΔH°f(products) − ΣΔH°f(reactants)</li>
<li><strong>Bond enthalpies:</strong> ΔH = Σ(bonds broken) − Σ(bonds formed)</li>
<li><strong>Bond enthalpies (average):</strong> Less accurate than formation data; all species must be gaseous</li>
</ul>
<h3>5. Born-Haber Cycles</h3>
<ul>
<li><strong>Steps:</strong> Atomisation of metal + atomisation of non-metal + ionisation energy + electron affinity + lattice energy = enthalpy of formation</li>
<li><strong>Lattice energy from cycle:</strong> Can be determined experimentally and compared to theoretical value</li>
</ul>
<h3>6. Entropy & Gibbs Free Energy</h3>
<ul>
<li><strong>Entropy (S):</strong> Measure of disorder; S° units J/(mol·K)</li>
<li><strong>Trends:</strong> S°(gas) > S°(liquid) > S°(solid); more particles → higher entropy</li>
<li><strong>ΔS°system:</strong> ΣS°(products) − ΣS°(reactants)</li>
<li><strong>Gibbs free energy:</strong> ΔG = ΔH − TΔS</li>
<li><strong>Feasibility:</strong> ΔG < 0 → reaction spontaneous; ΔG > 0 → not spontaneous</li>
<li><strong>Temperature effect:</strong> If ΔH < 0 and ΔS > 0 → spontaneous at all T; if ΔH > 0 and ΔS > 0 → spontaneous at high T</li>
</ul>`,
[`Exothermic: ΔH < 0; Endothermic: ΔH > 0`,
 `Hess's Law: ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants)`,
 `Bond enthalpies: ΔH = Σ(bonds broken) − Σ(bonds formed)`,
 `q = mcΔT for calorimetry`,
 `ΔG = ΔH − TΔS; spontaneous when ΔG < 0`,
 `Entropy: gas > liquid > solid; more particles = more entropy`],
[`Always include state symbols in thermochemical equations`,
 `For Hess's Law cycles: go same direction around cycle, signs change when reversing arrows`,
 `Bond enthalpies give approximate values — formation data is more accurate`,
 `ΔG = 0 at equilibrium; ΔG changes sign at temperature where ΔH = TΔS`]);

register('chemistry-c5',
`<h3>1. Factors Affecting Reaction Rate</h3>
<ul>
<li><strong>Concentration:</strong> More particles per unit volume → more frequent collisions</li>
<li><strong>Pressure (gases):</strong> Increases concentration → more frequent collisions</li>
<li><strong>Surface area:</strong> More exposed particles → more collisions</li>
<li><strong>Temperature:</strong> Increases kinetic energy → more particles exceed activation energy</li>
<li><strong>Catalyst:</strong> Provides alternative route with lower Eₐ; not consumed</li>
</ul>
<h3>2. Collision Theory</h3>
<ul>
<li>Particles must collide with: (a) sufficient energy (≥ Eₐ), and (b) correct orientation</li>
<li><strong>Activation energy (Eₐ):</strong> Minimum energy for reaction to occur</li>
<li><strong>Maxwell-Boltzmann distribution:</strong> Shows spread of molecular energies; area under curve constant; peak shifts right and flattens at higher T</li>
<li>Higher temperature → more particles have E > Eₐ (shaded area increases)</li>
</ul>
<h3>3. Rate Equations</h3>
<ul>
<li><strong>Rate = k[A]ᵐ[B]ⁿ</strong> — m and n determined experimentally, not from equation stoichiometry</li>
<li><strong>Order with respect to a reactant:</strong> Power to which its concentration is raised</li>
<li><strong>Overall order:</strong> Sum of individual orders (m + n)</li>
<li><strong>Units of k:</strong> Depend on overall order: 0 order → mol dm⁻³ s⁻¹; 1st → s⁻¹; 2nd → dm³ mol⁻¹ s⁻¹; 3rd → dm⁶ mol⁻² s⁻¹</li>
</ul>
<h3>4. Determining Order</h3>
<ul>
<li><strong>Initial rates method:</strong> Compare initial rates with different initial concentrations</li>
<li><strong>Graphical method:</strong> Plot [A] vs t (0 order = straight line); ln[A] vs t (1st order = straight line); 1/[A] vs t (2nd order = straight line)</li>
<li><strong>Half-life (t½):</strong> For 1st order, t½ is constant and independent of [A]</li>
</ul>
<h3>5. Arrhenius Equation</h3>
<ul>
<li><strong>k = Ae^(−Eₐ/RT)</strong> — A = frequency factor, Eₐ = activation energy, R = gas constant, T = temperature</li>
<li><strong>Linear form:</strong> ln k = ln A − Eₐ/(RT); plot ln k vs 1/T → gradient = −Eₐ/R</li>
</ul>
<h3>6. Reaction Mechanisms</h3>
<ul>
<li><strong>Elementary step:</strong> Single collision event; order equals molecularity</li>
<li><strong>Rate-determining step (RDS):</strong> Slowest step; determines overall rate</li>
<li><strong>Intermediates:</strong> Formed in one step, consumed in another; not in overall equation</li>
<li><strong>Evidence for mechanism:</strong> Rate equation must match RDS</li>
</ul>`,
[`Rate = k[A]ᵐ[B]ⁿ — orders found experimentally`,
 `Collision theory: need sufficient energy AND correct orientation`,
 `Maxwell-Boltzmann: higher T → more particles exceed Eₐ`,
 `0 order: [A] vs t linear; 1st order: ln[A] vs t linear, constant t½; 2nd order: 1/[A] vs t linear`,
 `Arrhenius: k = Ae^(−Eₐ/RT); ln k vs 1/T → gradient = −Eₐ/R`,
 `RDS is slowest step; rate equation must match mechanism`],
[`Orders are NOT the stoichiometric coefficients — must be found experimentally`,
 `When comparing initial rates: only change one concentration at a time`,
 `For 1st order: t½ = ln(2)/k = 0.693/k`,
 `Catalyst lowers Eₐ — shown by shaded area increase on M-B distribution, not temperature shift`]);

register('chemistry-c6',
`<h3>1. Dynamic Equilibrium</h3>
<ul>
<li><strong>Characteristics:</strong> Forward and reverse rates equal; concentrations constant; closed system; can be approached from either direction</li>
<li><strong>Equilibrium constant (Kc):</strong> For aA + bB ⇌ cC + dD, Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ</li>
<li><strong>Units of Kc:</strong> Depend on stoichiometry; may have no units</li>
</ul>
<h3>2. Le Chatelier's Principle</h3>
<ul>
<li><strong>Statement:</strong> If a dynamic equilibrium is disturbed, system adjusts to minimise the disturbance</li>
<li><strong>Concentration:</strong> Increase reactant → shifts right; increase product → shifts left</li>
<li><strong>Pressure (gases):</strong> Increase pressure → shifts toward side with fewer moles</li>
<li><strong>Temperature:</strong> Increase T → shifts in endothermic direction; decrease T → shifts in exothermic direction</li>
<li><strong>Catalyst:</strong> Speeds up both forward and reverse equally; no shift in position, reaches equilibrium faster</li>
</ul>
<h3>3. Equilibrium Constants</h3>
<ul>
<li><strong>Kc:</strong> Concentration-based; only affected by temperature</li>
<li><strong>Kp (gases):</strong> Pressure-based; partial pressures used; Kp = (P_C)ᶜ(P_D)ᵈ / (P_A)ᵃ(P_B)ᵇ</li>
<li><strong>Partial pressure:</strong> P_A = mole fraction × total pressure</li>
<li><strong>Relationship:</strong> Kp = Kc(RT)^Δn where Δn = change in moles of gas</li>
</ul>
<h3>4. Industrial Applications</h3>
<ul>
<li><strong>Haber process (NH₃):</strong> N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ/mol); high pressure, moderate temperature, iron catalyst</li>
<li><strong>Contact process (H₂SO₄):</strong> 2SO₂ + O₂ ⇌ 2SO₃ (ΔH = −197 kJ/mol); V₂O₅ catalyst, 450°C, 1-2 atm</li>
</ul>`,
[`Kc = [products] / [reactants] (with powers from equation)`,
 `Le Chatelier: system opposes the change`,
 `Concentration: add reactant → shifts right`,
 `Pressure: increase → shifts to fewer gas moles`,
 `Temperature: increase → shifts endothermic`,
 `Catalyst: no effect on position, speeds up both directions`,
 `Kc and Kp only change with temperature`,
 `Kp = Kc(RT)^Δn`],
[`Pure solids and liquids are NOT included in Kc expression`,
 `When writing Kc, use stoichiometric coefficients as powers`,
 `For pressure: only count GASEOUS moles when determining shift direction`,
 `Equilibrium position and equilibrium constant are different — constant only changes with T`]);

register('chemistry-c7',
`<h3>1. Oxidation Numbers</h3>
<ul>
<li><strong>Rules:</strong> Elements = 0; monatomic ions = charge; O = −2 (except peroxides −1, OF₂ +2); H = +1 (except metal hydrides −1); Group 1 = +1; Group 2 = +2; F = −1; sum in compound = 0; sum in ion = charge</li>
<li><strong>Oxidation:</strong> Increase in oxidation number (loss of electrons)</li>
<li><strong>Reduction:</strong> Decrease in oxidation number (gain of electrons)</li>
<li><strong>OIL RIG:</strong> Oxidation Is Loss, Reduction Is Gain (of electrons)</li>
</ul>
<h3>2. Balancing Redox Equations</h3>
<ul>
<li><strong>Half-equation method:</strong> Balance atoms (add H₂O for O, H⁺ for H in acid); balance charge with electrons; combine half-equations (equalise electrons)</li>
<li><strong>Common oxidising agents:</strong> Acidified KMnO₄ (purple → colourless Mn²⁺), acidified K₂Cr₂O₇ (orange → green Cr³⁺)</li>
<li><strong>Common reducing agents:</strong> Fe²⁺, I⁻, SO₂, C₂O₄²⁻</li>
</ul>
<h3>3. Electrochemical Cells</h3>
<ul>
<li><strong>Cell notation:</strong> Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s) — anode on left, cathode on right; salt bridge = ||</li>
<li><strong>EMF:</strong> E°cell = E°cathode − E°anode = E°right − E°left</li>
<li><strong>Predicting feasibility:</strong> E°cell > 0 → reaction spontaneous; more positive E° = stronger oxidising agent</li>
</ul>
<h3>4. Electrolysis</h3>
<ul>
<li><strong>Electrolysis:</strong> Decomposition by electric current; non-spontaneous (ΔG > 0)</li>
<li><strong>Anode (positive):</strong> Oxidation occurs; anions attracted</li>
<li><strong>Cathode (negative):</strong> Reduction occurs; cations attracted</li>
<li><strong>Molten electrolytes:</strong> Cation reduced at cathode, anion oxidised at anode</li>
<li><strong>Aqueous electrolytes:</strong> Competition between ions and water; compare E° values</li>
</ul>
<h3>5. Faraday's Laws</h3>
<ul>
<li><strong>First Law:</strong> Mass deposited ∝ charge passed (m = ZQ where Z = electrochemical equivalent)</li>
<li><strong>Second Law:</strong> Equal charges deposit masses proportional to equivalent masses</li>
<li><strong>Faraday constant:</strong> F = 96485 C/mol — charge on one mole of electrons</li>
<li><strong>Moles of substance:</strong> n = Q/(zF) where z = charge on ion, Q = It</li>
</ul>`,
[`OIL RIG: Oxidation Is Loss, Reduction Is Gain`,
 `Balance redox: balance atoms, then charge with e⁻`,
 `E°cell = E°cathode − E°anode = E°right − E°left`,
 `E°cell > 0 → spontaneous`,
 `Anode = oxidation; Cathode = reduction`,
 `Faraday: n = Q/(zF) = It/(zF)`,
 `1 F = 96485 C/mol`],
[`Always balance O with H₂O, then H with H⁺ in acidic solution`,
 `In electrolysis of aqueous solutions, compare E° of ions vs water`,
 `Concentration affects actual electrode potentials — Nernst equation`,
 `Cell EMF is intensive — doesn't depend on amounts, only on concentrations`]);

// Continue with remaining chemistry topics...
register('chemistry-c8',
`<h3>1. Group 2 (Alkaline Earth Metals)</h3>
<ul>
<li><strong>Trend:</strong> Increasing atomic radius, decreasing first IE, increasing reactivity down group</li>
<li><strong>Reactions with water:</strong> Be (none), Mg (slow, hot water), Ca/Sr/Ba (increasingly vigorous)</li>
<li><strong>Reactions with oxygen:</strong> Form MO (except Be forms protective layer)</li>
<li><strong>Reactions with acids:</strong> M + 2HCl → MCl₂ + H₂</li>
<li><strong>Hydroxides:</strong> Solubility increases down group; basic strength increases</li>
<li><strong>Sulfates:</strong> Solubility decreases down group (BaSO₄ insoluble — test for sulfate)</li>
</ul>
<h3>2. Group 17 (Halogens)</h3>
<ul>
<li><strong>Physical state:</strong> F₂ (pale yellow gas), Cl₂ (green gas), Br₂ (red-brown liquid), I₂ (grey-black solid)</li>
<li><strong>Trend:</strong> Atomic radius increases, IE decreases, electronegativity decreases down group</li>
<li><strong>Reactivity:</strong> Decreases down group; oxidising power decreases</li>
<li><strong>Displacement:</strong> More reactive halogen displaces less reactive from halide solution</li>
<li><strong>Reactions with NaOH:</strong> Cold dilute: X₂ + 2NaOH → NaX + NaXO + H₂O; Hot concentrated: 3X₂ + 6NaOH → 5NaX + NaXO₃ + 3H₂O</li>
</ul>
<h3>3. Transition Metals</h3>
<ul>
<li><strong>Properties:</strong> Variable oxidation states, coloured compounds, catalytic activity, complex formation</li>
<li><strong>Common oxidation states:</strong> Fe²⁺/Fe³⁺, Cu²⁺, Mn²⁺/MnO₄⁻, Cr³⁺/Cr₂O₇²⁻</li>
<li><strong>Complex ions:</strong> Central metal ion bonded to ligands (Lewis bases) by coordinate bonds</li>
<li><strong>Shapes:</strong> 6-coordinate = octahedral; 4-coordinate = tetrahedral or square planar</li>
<li><strong>Colour:</strong> d-d transitions; requires partially filled d orbitals</li>
<li><strong>Catalysts:</strong> Fe (Haber), V₂O₅ (Contact), Ni (hydrogenation), MnO₂ (decomposition of H₂O₂)</li>
</ul>`,
[`Group 2: reactivity increases down group; hydroxide solubility increases; sulfate solubility decreases`,
 `Halogens: reactivity decreases down group; stronger oxidising agent displaces weaker`,
 `Transition metals: variable oxidation states, coloured, catalytic, form complexes`,
 `d-d transitions cause colour — needs partially filled d orbitals`,
 `6-coordinate = octahedral; 4-coordinate = tetrahedral or square planar`],
[`BaSO₄ is insoluble — used to test for sulfate ions`,
 `For halogen displacement: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂ (brown/orange solution)`,
 `Transition metal complexes: ligands donate lone pairs to metal ion`,
 `Remember common catalysts and their industrial processes`]);

register('chemistry-c9',
`<h3>1. Organic Nomenclature</h3>
<ul>
<li><strong>IUPAC rules:</strong> Find longest carbon chain; number to give lowest locants; name substituents alphabetically</li>
<li><strong>Prefixes:</strong> meth- (1), eth- (2), prop- (3), but- (4), pent- (5), hex- (6)</li>
<li><strong>Saturation:</strong> -ane (alkane), -ene (alkene), -yne (alkyne), -anol (alcohol), -anal (aldehyde), -anone (ketone), -anoic acid (carboxylic acid)</li>
</ul>
<h3>2. Alkanes</h3>
<ul>
<li><strong>General formula:</strong> CₙH₂ₙ₊₂</li>
<li><strong>Combustion:</strong> CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → nCO₂ + (n+1)H₂O</li>
<li><strong>Free radical substitution:</strong> Initiation (Cl₂ → 2Cl·), Propagation (Cl· + CH₄ → HCl + ·CH₃), Termination (·CH₃ + ·CH₃ → C₂H₆)</li>
<li><strong>Cracking:</strong> Break long chains into shorter ones; thermal or catalytic</li>
</ul>
<h3>3. Alkenes</h3>
<ul>
<li><strong>General formula:</strong> CₙH₂ₙ</li>
<li><strong>Electrophilic addition:</strong> Electron-rich π bond attacks electrophile</li>
<li><strong>With H₂:</strong> Hydrogenation (Ni catalyst) → alkane</li>
<li><strong>With HX:</strong> Markovnikov addition → H to carbon with more H</li>
<li><strong>With X₂:</strong> Halogenation → dihaloalkane; with Br₂ (red-brown → colourless — test for unsaturation)</li>
<li><strong>With H₂O (acid-catalysed):</strong> Hydration → alcohol; Markovnikov</li>
<li><strong>Oxidation with cold dilute KMnO₄:</strong> Diol formation (purple → brown precipitate)</li>
<li><strong>Ozonolysis:</strong> Cleaves double bond → carbonyl compounds</li>
</ul>
<h3>4. Stereoisomerism</h3>
<ul>
<li><strong>E/Z isomerism:</strong> Different groups on each carbon of C=C; higher priority groups same side = Z, opposite = E</li>
<li><strong>Requirements:</strong> Two different groups on EACH carbon of double bond</li>
</ul>`,
[`Alkanes: CₙH₂ₙ₊₂; free radical substitution mechanism`,
 `Alkenes: CₙH₂ₙ; electrophilic addition`,
 `Markovnikov: H adds to carbon with more H atoms`,
 `Br₂ test: red-brown → colourless = unsaturation`,
 `E/Z isomerism: need two different groups on each C of C=C`,
 `Priority: higher atomic number = higher priority`],
[`Always show curly arrows in mechanism questions — half marks without them`,
 `Free radical mechanism has three stages: initiation, propagation, termination`,
 `For E/Z: Cahn-Ingold-Prelog priority rules — atomic number determines priority`,
 `Ozonolysis products reveal position of double bond in original molecule`]);

register('chemistry-c10',
`<h3>1. Alcohols</h3>
<ul>
<li><strong>Classification:</strong> Primary (1°) — C attached to 1 other C; Secondary (2°) — attached to 2; Tertiary (3°) — attached to 3</li>
<li><strong>Oxidation:</strong> 1° → aldehyde → carboxylic acid (with excess oxidant); 2° → ketone; 3° → resistant to oxidation</li>
<li><strong>Reagents:</strong> Acidified K₂Cr₂O₇ (orange → green) or acidified KMnO₄ (purple → colourless)</li>
<li><strong>Dehydration:</strong> Elimination with conc H₂SO₄ or Al₂O₃ → alkene</li>
<li><strong>Substitution with HX:</strong> OH replaced by X</li>
</ul>
<h3>2. Aldehydes & Ketones</h3>
<ul>
<li><strong>Distinguishing test:</strong> Tollens' reagent [Ag(NH₃)₂]⁺ — aldehyde gives silver mirror; Fehling's/Benedict's — aldehyde gives red Cu₂O precipitate</li>
<li><strong>Nucleophilic addition:</strong> With HCN (KCN + H⁺) → cyanohydrin; with NaBH₄ → alcohol</li>
<li><strong>Condensation with 2,4-DNP:</strong> Orange/yellow precipitate — identifies carbonyl</li>
</ul>
<h3>3. Carboxylic Acids</h3>
<ul>
<li><strong>Acidity:</strong> Weak acids; pKa ~ 4-5</li>
<li><strong>Reactions:</strong> With metals → salt + H₂; with carbonates → salt + H₂O + CO₂; with alcohols → ester + H₂O (esterification, acid catalyst)</li>
</ul>
<h3>4. Esters</h3>
<ul>
<li><strong>Formation:</strong> Carboxylic acid + alcohol ⇌ ester + water (conc H₂SO₄, heat, reversible)</li>
<li><strong>Hydrolysis:</strong> Acid hydrolysis ⇌; alkaline hydrolysis (saponification) → carboxylate salt + alcohol</li>
<li><strong>Uses:</strong> Fragrances, flavourings, solvents, biodiesel</li>
</ul>
<h3>5. IR Spectroscopy</h3>
<ul>
<li><strong>O-H (alcohol):</strong> 3230-3550 cm⁻¹ (broad)</li>
<li><strong>O-H (carboxylic acid):</strong> 2500-3300 cm⁻¹ (very broad)</li>
<li><strong>C=O:</strong> 1640-1750 cm⁻¹ (strong, sharp)</li>
<li><strong>C-O:</strong> 1000-1300 cm⁻¹</li>
<li><strong>C-H:</strong> 2850-3100 cm⁻¹</li>
</ul>`,
[`Primary alcohol → aldehyde → carboxylic acid; Secondary → ketone; Tertiary → resistant`,
 `Tollens': silver mirror with aldehydes; Fehling's: red precipitate with aldehydes`,
 `NaBH₄ reduces carbonyls to alcohols; HCN adds to form cyanohydrins`,
 `Esterification: acid + alcohol ⇌ ester + water (reversible)`,
 `IR: O-H broad ~3300; C=O sharp ~1700; C-H ~2900`],
[`Distinguish aldehyde/ketone with Tollens' or Fehling's — NOT 2,4-DNP (both react)`,
 `Acidified dichromate: orange → green for oxidation of alcohols`,
 `Ester hydrolysis with NaOH is irreversible (saponification)`,
 `IR fingerprint region (<1500 cm⁻¹) is unique to each compound`]);

register('chemistry-c11',
`<h3>1. Aldehydes & Ketones (Advanced)</h3>
<ul>
<li><strong>Iodoform reaction:</strong> CH₃CO- group (or CH₃CHOH-) gives yellow CHI₃ precipitate with I₂/NaOH</li>
<li><strong>Reaction with 2,4-DNP:</strong> Both aldehydes and ketones give orange precipitate</li>
</ul>
<h3>2. Carboxylic Acid Derivatives</h3>
<ul>
<li><strong>Acyl chlorides:</strong> Most reactive carboxylic acid derivative; react with alcohols → esters; with amines → amides; with water → carboxylic acids</li>
<li><strong>Amides:</strong> Formed from acyl chloride + ammonia/amine; hydrolyse to carboxylic acid + ammonia/amine</li>
</ul>
<h3>3. Benzene Chemistry</h3>
<ul>
<li><strong>Structure:</strong> Delocalised π electrons; planar hexagon; bond length intermediate between C-C and C=C</li>
<li><strong>Stability:</strong> Delocalisation energy; undergoes substitution not addition (preserves aromaticity)</li>
<li><strong>Nitration:</strong> HNO₃ + H₂SO₄ → NO₂⁺ (electrophile); substitutes H with NO₂; 50-60°C</li>
<li><strong>Halogenation:</strong> Br₂ + FeBr₃ → Br⁺ (electrophile); substitutes H with Br</li>
<li><strong>Friedel-Crafts alkylation:</strong> RCl + AlCl₃ → R⁺; substitutes H with R group</li>
<li><strong>Friedel-Crafts acylation:</strong> RCOCl + AlCl₃ → RCO⁺; substitutes H with COR group</li>
</ul>
<h3>4. Phenol</h3>
<ul>
<li><strong>Acidity:</strong> More acidic than alcohols (pKa ~10) due to resonance stabilisation of phenoxide ion</li>
<li><strong>Reactions:</strong> Bromine water → white precipitate (2,4,6-tribromophenol); NaOH → sodium phenoxide</li>
<li><strong>Nitration:</strong> Dilute HNO₃ at room temperature → 2- and 4-nitrophenol (OH activates ring)</li>
</ul>
<h3>5. Amines</h3>
<ul>
<li><strong>Basicity:</strong> Lone pair on N accepts H⁺; aliphatic amines more basic than ammonia; aromatic less basic (lone pair delocalised into ring)</li>
<li><strong>Reaction with HNO₂ (nitrous acid):</strong> Aliphatic → N₂ gas + alcohol; Aromatic (below 10°C) → diazonium salt</li>
<li><strong>Diazonium coupling:</strong> Forms azo dyes (coloured compounds)</li>
</ul>`,
[`Iodoform: CH₃CO- or CH₃CHOH- gives yellow CHI₃`,
 `Acyl chlorides: most reactive; react with alcohols, amines, water`,
 `Benzene undergoes substitution (not addition) to preserve aromaticity`,
 `Electrophiles: NO₂⁺ (nitration), Br⁺ (halogenation), R⁺ (alkylation), RCO⁺ (acylation)`,
 `Phenol more acidic than alcohol (resonance stabilisation)`,
 `Amine basicity: aliphatic > ammonia > aromatic`],
[`Benzene is less reactive than alkenes due to delocalisation — needs catalyst for substitution`,
 `Phenol activates ring toward electrophilic substitution (more than benzene)`,
 `Diazonium salts decompose above 10°C — keep reactions cold`,
 `Acyl chlorides react vigorously with water — must be kept dry`]);

register('chemistry-c12',
`<h3>1. Polymerisation</h3>
<ul>
<li><strong>Addition polymerisation:</strong> Monomers with C=C join; no other product; examples: poly(ethene), poly(chloroethene/PVC), poly(propene), polystyrene, Teflon</li>
<li><strong>Condensation polymerisation:</strong> Monomers join with loss of small molecule (usually H₂O); needs two functional groups</li>
<li><strong>Polyesters:</strong> Diol + dicarboxylic acid → ester links; e.g., Terylene (PET)</li>
<li><strong>Polyamides:</strong> Diamine + dicarboxylic acid → amide links; e.g., Nylon-6,6, proteins</li>
</ul>
<h3>2. Amino Acids & Proteins</h3>
<ul>
<li><strong>Amino acid structure:</strong> H₂N-CH(R)-COOH — contains both amino and carboxyl groups</li>
<li><strong>Zwitterion:</strong> At pH ~7, exists as ⁻OOC-CH(R)-NH₃⁺</li>
<li><strong>Peptide bond:</strong> Amide link between amino acids; formed by condensation</li>
<li><strong>Hydrolysis:</strong> Acid or alkaline hydrolysis breaks peptide bonds → constituent amino acids</li>
<li><strong>Chromatography:</strong> Can separate and identify amino acids</li>
</ul>
<h3>3. DNA Structure</h3>
<ul>
<li><strong>Components:</strong> Sugar (deoxyribose), phosphate group, nitrogenous bases (A, T, G, C)</li>
<li><strong>Base pairing:</strong> A-T (2 hydrogen bonds), G-C (3 hydrogen bonds)</li>
<li><strong>Double helix:</strong> Two antiparallel strands held by H-bonds between bases</li>
<li><strong>Replication:</strong> Semi-conservative; each new DNA has one old and one new strand</li>
</ul>
<h3>4. Mass Spectrometry for Organic Compounds</h3>
<ul>
<li><strong>Molecular ion (M⁺):</strong> Peak at highest m/z gives molecular mass</li>
<li><strong>Fragmentation:</strong> Breakage of bonds gives characteristic pattern</li>
<li><strong>Common fragments:</strong> m/z 15 (CH₃⁺), 29 (C₂H₅⁺ or CHO⁺), 43 (C₃H₇⁺ or CH₃CO⁺), 77 (C₆H₅⁺)</li>
<li><strong>M+1 peak:</strong> Due to ¹³C isotope (1.1% natural abundance)</li>
<li><strong>M+2 peak:</strong> Indicates Cl (3:1 ratio) or Br (1:1 ratio)</li>
</ul>
<h3>5. NMR Spectroscopy</h3>
<ul>
<li><strong>¹H NMR:</strong> Shows number of proton environments, types of proton, and relative numbers</li>
<li><strong>Chemical shift (δ):</strong> Position of peak; affected by electron density (deshielding)</li>
<li><strong>Splitting (n+1 rule):</strong> n equivalent adjacent protons → n+1 peaks</li>
<li><strong>Common shifts:</strong> R-CH₃ (~0.9), R-CH₂-R (~1.3), R₃CH (~1.4), C=C-H (~4.5-6.0), Ar-H (~6.5-8.5), O-H (variable, 1-5), CHO (~9-10)</li>
<li><strong>Integration:</strong> Peak area proportional to number of protons in that environment</li>
</ul>`,
[`Addition: monomers with C=C; Condensation: loss of small molecule`,
 `Polyesters: ester links; Polyamides: amide links`,
 `Amino acids: H₂N-CH(R)-COOH; exist as zwitterions at pH 7`,
 `DNA: A-T (2 H-bonds), G-C (3 H-bonds); double helix`,
 `MS: M⁺ gives molecular mass; fragments identify structure`,
 `NMR: n+1 rule for splitting; integration = relative proton count`],
[`Addition polymers have same empirical formula as monomer`,
 `For condensation polymers, identify the two monomers from the repeat unit`,
 `Cl shows 3:1 M:M+2 ratio; Br shows 1:1 — use to identify halogens`,
 `NMR OH peak may disappear on D₂O shake (replaces H with D)`]);

register('chemistry-c13',
`<h3>1. Organic Synthesis Strategies</h3>
<ul>
<li><strong>Retrosynthesis:</strong> Work backward from target molecule to available starting materials</li>
<li><strong>Carbon chain lengthening:</strong> Grignard reagents, cyanohydrin formation, Wittig reaction</li>
<li><strong>Carbon chain shortening:</strong> Oxidative cleavage of alkenes/arenes, decarboxylation, Hofmann degradation</li>
<li><strong>Functional group interconversions:</strong> Systematic approach using known reactions</li>
</ul>
<h3>2. Synthetic Routes</h3>
<ul>
<li><strong>Primary alcohol → carboxylic acid:</strong> Oxidation (K₂Cr₂O₇/H⁺, reflux)</li>
<li><strong>Carboxylic acid → primary alcohol:</strong> Reduction (LiAlH₄ or NaBH₄)</li>
<li><strong>Alkene → diol:</strong> Cold dilute KMnO₄ or OsO₄</li>
<li><strong>Alkene → alkane:</strong> Catalytic hydrogenation (H₂/Ni)</li>
<li><strong>Nitrile → carboxylic acid:</strong> Hydrolysis (H⁺ or OH⁻, heat)</li>
<li><strong>Nitrile → amine:</strong> Reduction (LiAlH₄ or H₂/Ni)</li>
</ul>
<h3>3. Reagents & Conditions</h3>
<ul>
<li><strong>Oxidising agents:</strong> K₂Cr₂O₇/H⁺ (orange→green), KMnO₄/H⁺ (purple→colourless), PCC (oxidises 1° to aldehyde)</li>
<li><strong>Reducing agents:</strong> NaBH₄ (reduces aldehydes/ketones), LiAlH₄ (reduces acids, esters, amides, nitriles), H₂/Ni (hydrogenation)</li>
<li><strong>Halogenating agents:</strong> PCl₅, SOCl₂ (convert OH → Cl), Br₂/FeBr₃ (benzene bromination)</li>
</ul>
<h3>4. Purification Techniques</h3>
<ul>
<li><strong>Recrystallisation:</strong> Dissolve in minimum hot solvent, filter hot, cool, filter crystals, dry</li>
<li><strong>Distillation:</strong> Separate by boiling point; fractional for close bp</li>
<li><strong>Chromatography:</strong> TLC, column, gas chromatography</li>
<li><strong>Extraction:</strong> Use separating funnel with immiscible solvents</li>
</ul>
<h3>5. Testing & Analysis</h3>
<ul>
<li><strong>Melting point:</strong> Pure compounds have sharp mp; mixtures depress and broaden</li>
<li><strong>Mixed melting point:</strong> If sample + known = same mp (not depressed) → same compound</li>
</ul>`,
[`Retrosynthesis: work backward from target`,
 `1° alcohol → aldehyde (distill) → acid (reflux excess)`,
 `NaBH₄ reduces C=O; LiAlH₄ reduces C=O, COOH, CONH₂, CN`,
 `Recrystallisation: hot solvent → filter → cool → filter → dry`,
 `Pure compounds: sharp mp; mixtures: depressed, broad mp`],
[`PCC oxidises 1° alcohol to aldehyde (stops there)`,
 `LiAlH₄ is stronger than NaBH₄ — can reduce esters and acids`,
 `In retrosynthesis, identify bond disconnections strategically`,
 `Always consider regioselectivity and stereochemistry in synthesis`]);

register('chemistry-c14',
`<h3>1. Titration Techniques</h3>
<ul>
<li><strong>Acid-base titration:</strong> Use suitable indicator; phenolphthalein (pH 8.3-10, colourless→pink), methyl orange (pH 3.1-4.4, red→yellow)</li>
<li><strong>Redox titration:</strong> KMnO₄ (self-indicating, purple→colourless); I₂/S₂O₃²⁻ (starch indicator, blue→colourless)</li>
<li><strong>Back titration:</strong> React with excess reagent, then titrate remaining reagent</li>
</ul>
<h3>2. Gravimetric Analysis</h3>
<ul>
<li><strong>Procedure:</strong> Weigh sample → dissolve → precipitate → filter → wash → dry → weigh</li>
<li><strong>Calculations:</strong> Use mass of precipitate to calculate amount of original substance</li>
</ul>
<h3>3. Chromatography</h3>
<ul>
<li><strong>Rf value:</strong> Distance moved by spot / distance moved by solvent</li>
<li><strong>Factors affecting Rf:</strong> Solubility in mobile phase, adsorption on stationary phase</li>
<li><strong>Gas chromatography:</strong> Retention time identifies components; peak area proportional to amount</li>
</ul>
<h3>4. Colorimetry</h3>
<ul>
<li><strong>Beer-Lambert Law:</strong> A = εcl (absorbance = molar absorptivity × path length × concentration)</li>
<li><strong>Calibration curve:</strong> Plot A vs known concentrations → determine unknown</li>
</ul>
<h3>5. Error Analysis</h3>
<ul>
<li><strong>Systematic:</strong> Instrument calibration, method errors — consistent direction</li>
<li><strong>Random:</strong> Reading errors, fluctuations — reduced by repeats</li>
<li><strong>Percentage error:</strong> (uncertainty / measurement) × 100%</li>
</ul>`,
[`Titration: suitable indicator for pH range at equivalence point`,
 `KMnO₄ is self-indicating (purple→colourless)`,
 `Rf = distance spot / distance solvent`,
 `Beer-Lambert: A = εcl`,
 `Systematic: consistent bias; Random: statistical fluctuations`],
[`Choose indicator with pH range that includes equivalence point pH`,
 `For redox titrations: balance half-equations first`,
 `In gravimetric analysis: ensure precipitation is complete`,
 `Calibration curve must be linear (dilute solutions only)`]);

// ============================================================================
// CAIE BIOLOGY
// ============================================================================

register('biology-b1',
`<h3>1. Cell Theory</h3>
<ul>
<li>All living organisms are composed of cells</li>
<li>The cell is the basic unit of life</li>
<li>All cells arise from pre-existing cells by division</li>
</ul>
<h3>2. Prokaryotic vs Eukaryotic Cells</h3>
<table style="width:100%;margin:16px 0;border-collapse:collapse;font-size:0.9rem"><tr style="background:var(--light)"><th style="padding:10px;border:1px solid var(--gray-light)">Feature</th><th style="padding:10px;border:1px solid var(--gray-light)">Prokaryotic</th><th style="padding:10px;border:1px solid var(--gray-light)">Eukaryotic</th></tr>
<tr><td style="padding:10px;border:1px solid var(--gray-light)">Nucleus</td><td style="padding:10px;border:1px solid var(--gray-light)">Nucleoid region, no membrane</td><td style="padding:10px;border:1px solid var(--gray-light)">True nucleus with nuclear envelope</td></tr>
<tr><td style="padding:10px;border:1px solid var(--gray-light)">DNA</td><td style="padding:10px;border:1px solid var(--gray-light)">Circular, naked, in cytoplasm</td><td style="padding:10px;border:1px solid var(--gray-light)">Linear, associated with histones</td></tr>
<tr><td style="padding:10px;border:1px solid var(--gray-light)">Ribosomes</td><td style="padding:10px;border:1px solid var(--gray-light)">70S (smaller)</td><td style="padding:10px;border:1px solid var(--gray-light)">80S (larger); 70S in mitochondria/chloroplasts</td></tr>
<tr><td style="padding:10px;border:1px solid var(--gray-light)">Organelles</td><td style="padding:10px;border:1px solid var(--gray-light)">No membrane-bound organelles</td><td style="padding:10px;border:1px solid var(--gray-light)">Many membrane-bound organelles</td></tr>
<tr><td style="padding:10px;border:1px solid var(--gray-light)">Cell wall</td><td style="padding:10px;border:1px solid var(--gray-light)">Peptidoglycan (murein)</td><td style="padding:10px;border:1px solid var(--gray-light)">Cellulose (plants), chitin (fungi), absent (animals)</td></tr>
<tr><td style="padding:10px;border:1px solid var(--gray-light)">Size</td><td style="padding:10px;border:1px solid var(--gray-light)">0.5-5 μm</td><td style="padding:10px;border:1px solid var(--gray-light)">10-100 μm</td></tr>
<tr><td style="padding:10px;border:1px solid var(--gray-light)">Examples</td><td style="padding:10px;border:1px solid var(--gray-light)">Bacteria, Archaea</td><td style="padding:10px;border:1px solid var(--gray-light)">Plants, animals, fungi, protists</td></tr>
</table>
<h3>3. Key Organelles</h3>
<ul>
<li><strong>Nucleus:</strong> Contains chromatin (DNA + histones), nucleolus (rRNA synthesis); nuclear pores control entry/exit</li>
<li><strong>Mitochondria:</strong> Double membrane; inner folded into cristae (increase surface area); site of aerobic respiration; contain own DNA and ribosomes (evidence for endosymbiotic theory)</li>
<li><strong>Rough ER:</strong> Studded with ribosomes; synthesises and transports proteins</li>
<li><strong>Smooth ER:</strong> No ribosomes; synthesises lipids, steroid hormones; detoxification</li>
<li><strong>Golgi apparatus:</strong> Modifies, packages, and sorts proteins into vesicles for transport</li>
<li><strong>Lysosomes:</strong> Contain hydrolytic enzymes; digest worn-out organelles, pathogens, and food particles</li>
<li><strong>Ribosomes:</strong> Site of protein synthesis (translation)</li>
<li><strong>Chloroplasts:</strong> Double membrane; contain thylakoids (stacked into grana) and stroma; site of photosynthesis; contain own DNA and ribosomes</li>
<li><strong>Cell surface membrane:</strong> Phospholipid bilayer with embedded proteins; controls entry and exit</li>
<li><strong>Cell wall (plants):</strong> Cellulose microfibrils in matrix; provides support and protection</li>
<li><strong>Centrioles:</strong> Organise spindle fibres during cell division (animal cells only)</li>
</ul>
<h3>4. Cell Fractionation</h3>
<ul>
<li><strong>Homogenisation:</strong> Break cells in cold isotonic buffer (prevents damage to organelles)</li>
<li><strong>Filtration:</strong> Remove debris through gauze/mesh</li>
<li><strong>Ultracentrifugation:</strong> Separate organelles by density/sedimentation rate at increasing speeds:
  <ul>
  <li>Low speed: nuclei sediment first</li>
  <li>Medium speed: mitochondria, lysosomes, chloroplasts</li>
  <li>High speed: ribosomes, small vesicles</li>
  </ul>
</li>
</ul>
<h3>5. Microscopy</h3>
<ul>
<li><strong>Resolution:</strong> Minimum distance between two points that can be distinguished</li>
<li><strong>Light microscope:</strong> Resolution ~0.2 μm (200 nm); magnifies up to ~1500×</li>
<li><strong>Electron microscope (TEM):</strong> Resolution ~0.2 nm; 2D image; requires thin sections, vacuum, staining with heavy metals</li>
<li><strong>Electron microscope (SEM):</strong> Resolution ~2-20 nm; 3D surface image; lower resolution than TEM</li>
<li><strong>Formula:</strong> Magnification = image size / actual size; Actual size = image size / magnification</li>
</ul>
<h3>6. Cell Division — Mitosis</h3>
<ul>
<li><strong>Interphase:</strong> G₁ (cell growth), S (DNA replication), G₂ (prepare for division)</li>
<li><strong>Prophase:</strong> Chromosomes condense (become visible), nuclear envelope breaks down, centrioles move to poles, spindle forms</li>
<li><strong>Metaphase:</strong> Chromosomes line up on equator, spindle fibres attach to centromeres</li>
<li><strong>Anaphase:</strong> Centromeres divide, sister chromatids pulled to opposite poles</li>
<li><strong>Telophase:</strong> Chromatids reach poles, nuclear envelope reforms, chromosomes decondense</li>
<li><strong>Cytokinesis:</strong> Cytoplasm divides; cell plate forms in plants, cleavage furrow in animals</li>
<li><strong>Result:</strong> Two genetically identical diploid daughter cells (same chromosome number as parent)</li>
</ul>
<h3>7. Cell Division — Meiosis</h3>
<ul>
<li><strong>Meiosis I (reduction division):</strong> Homologous chromosomes pair (synapsis), crossing over occurs at chiasmata, homologues separate → 2 haploid cells (each chromosome still has 2 chromatids)</li>
<li><strong>Meiosis II (equational division):</strong> Similar to mitosis; sister chromatids separate → 4 haploid gametes</li>
<li><strong>Significance:</strong> Genetic variation through crossing over (recombination) and independent assortment; halves chromosome number for sexual reproduction</li>
</ul>`,
[`Cell theory: all organisms made of cells; cell is basic unit; cells from pre-existing cells`,
 `Prokaryotes: no nucleus, 70S ribosomes, no membrane-bound organelles, peptidoglycan wall`,
 `Eukaryotes: true nucleus, 80S ribosomes, membrane-bound organelles`,
 `Mitochondria and chloroplasts have own DNA (endosymbiotic theory)`,
 `Cell fractionation: homogenise → filter → ultracentrifuge (increasing speed)`,
 `Mitosis: prophase → metaphase → anaphase → telophase → cytokinesis; 2 identical diploid cells`,
 `Meiosis: two divisions; 4 genetically different haploid gametes`,
 `Genetic variation: crossing over + independent assortment`],
[`Always label diagrams fully — function marks often require labels`,
 `Resolution is more important than magnification — electron microscopes have better resolution`,
 `In mitosis, chromosome number stays the same; in meiosis, it halves`,
 `Crossing over occurs during prophase I of meiosis, not mitosis`]);

// ... (continuing with more subjects)

// ============================================================================
// CAIE ECONOMICS
// ============================================================================

register('economics-e1',
`<h3>1. The Economic Problem</h3>
<ul>
<li><strong>Scarcity:</strong> Unlimited wants vs limited resources — the fundamental economic problem</li>
<li><strong>Factors of production:</strong> Land (natural resources), Labour (human effort), Capital (man-made goods used to produce other goods), Enterprise (risk-taking and organisation)</li>
<li><strong>Opportunity cost:</strong> The next best alternative foregone when making a choice</li>
<li><strong>Production possibility curve (PPC):</strong> Shows maximum output combinations of two goods with given resources; points inside = inefficient, on curve = efficient, outside = unattainable</li>
<li><strong>Shift in PPC:</strong> Outward = economic growth (more resources, better technology); inward = recession/destruction</li>
<li><strong>Shape of PPC:</strong> Bowed out (concave) due to increasing opportunity costs; linear if constant opportunity cost</li>
</ul>
<h3>2. Resource Allocation</h3>
<ul>
<li><strong>Market economy:</strong> Prices allocate resources; consumer sovereignty; profit motive; limited government intervention</li>
<li><strong>Planned economy:</strong> Government allocates resources; central planning; production targets; limited consumer choice</li>
<li><strong>Mixed economy:</strong> Combination of market and planned; most common in reality</li>
<li><strong>Free market advantages:</strong> Efficiency, consumer choice, innovation, competition</li>
<li><strong>Free market disadvantages:</strong> Inequality, public goods underprovided, externalities, merit/demerit goods</li>
</ul>
<h3>3. Specialisation & Exchange</h3>
<ul>
<li><strong>Specialisation:</strong> Concentrating on producing a limited range of goods; increases productivity</li>
<li><strong>Division of labour:</strong> Breaking production into tasks; workers specialise in specific tasks</li>
<li><strong>Advantages:</strong> Increased output, time-saving, development of skills, mechanism/automation</li>
<li><strong>Disadvantages:</strong> Boredom, loss of flexibility, interdependence, risk if key worker absent</li>
</ul>`,
[`Scarcity: unlimited wants + limited resources`,
 `Factors: Land, Labour, Capital, Enterprise`,
 `Opportunity cost: next best alternative foregone`,
 `PPC shows maximum output combinations; bowed out = increasing opportunity cost`,
 `PPC shifts out with economic growth (more resources/technology)`,
 `Market: price allocates; Planned: government allocates; Mixed: combination`],
[`Always define key terms precisely — definition marks are easy to gain/lose`,
 `When drawing PPC: label axes, show opportunity cost with arrow, shade unattainable region`,
 `Specialisation requires trade/exchange — you can't consume only what you produce`,
 `Opportunity cost is not the sum of all alternatives — it's the NEXT BEST one`]);

register('economics-e2',
`<h3>1. Demand</h3>
<ul>
<li><strong>Definition:</strong> Quantity of a good consumers are willing and able to buy at various prices over a period</li>
<li><strong>Law of demand:</strong> Price ↑ → quantity demanded ↓ (inverse relationship); shown by downward-sloping demand curve</li>
<li><strong>Reasons for law:</strong> Income effect (purchasing power), substitution effect (relative prices)</li>
</ul>
<h3>2. Determinants of Demand</h3>
<ul>
<li><strong>Price of good:</strong> Movement along curve</li>
<li><strong>Income:</strong> Normal goods (demand ↑ as income ↑); Inferior goods (demand ↓ as income ↑)</li>
<li><strong>Prices of substitutes:</strong> Substitute price ↑ → demand for this good ↑ (positive cross elasticity)</li>
<li><strong>Prices of complements:</strong> Complement price ↑ → demand for this good ↓ (negative cross elasticity)</li>
<li><strong>Tastes/preferences:</strong> Advertising, fashion, seasonal factors</li>
<li><strong>Population:</strong> Size, age structure, demographics</li>
<li><strong>Expectations:</strong> Future price or income expectations</li>
</ul>
<h3>3. Supply</h3>
<ul>
<li><strong>Definition:</strong> Quantity producers are willing and able to sell at various prices</li>
<li><strong>Law of supply:</strong> Price ↑ → quantity supplied ↑ (direct relationship); upward-sloping supply curve</li>
</ul>
<h3>4. Determinants of Supply</h3>
<ul>
<li><strong>Price of good:</strong> Movement along curve</li>
<li><strong>Costs of production:</strong> Input prices, wages, technology</li>
<li><strong>Prices of related goods:</strong> Substitutes in production, joint products</li>
<li><strong>Technology:</strong> Improvements shift supply right</li>
<li><strong>Number of sellers:</strong> More sellers → more supply</li>
<li><strong>Government policies:</strong> Taxes, subsidies, regulations</li>
<li><strong>Expectations:</strong> Future price expectations</li>
</ul>
<h3>5. Market Equilibrium</h3>
<ul>
<li><strong>Equilibrium:</strong> Where demand = supply; no tendency for price to change</li>
<li><strong>Surplus (excess supply):</strong> Price above equilibrium → producers lower prices</li>
<li><strong>Shortage (excess demand):</strong> Price below equilibrium → producers raise prices</li>
<li><strong>Consumer surplus:</strong> Difference between what consumers are willing to pay and what they actually pay</li>
<li><strong>Producer surplus:</strong> Difference between what producers receive and minimum they would accept</li>
</ul>
<h3>6. Price Elasticity of Demand (PED)</h3>
<ul>
<li><strong>Formula:</strong> PED = (% change in Qd) / (% change in P)</li>
<li><strong>Elastic (|PED| > 1):</strong> Quantity changes more than price; luxury goods with substitutes</li>
<li><strong>Inelastic (|PED| < 1):</strong> Quantity changes less than price; necessities, few substitutes</li>
<li><strong>Unit elastic (|PED| = 1):</strong> Percentage changes equal</li>
<li><strong>Perfectly inelastic (PED = 0):</strong> Quantity doesn't change regardless of price</li>
<li><strong>Perfectly elastic (PED = ∞):</strong> Any price increase → quantity demanded falls to zero</li>
<li><strong>Determinants:</strong> Availability of substitutes, necessity vs luxury, proportion of income, time period, addictive/habitual</li>
</ul>
<h3>7. Price Elasticity of Supply (PES)</h3>
<ul>
<li><strong>Formula:</strong> PES = (% change in Qs) / (% change in P)</li>
<li><strong>Determinants:</strong> Spare capacity, availability of stocks, time period, mobility of factors, ease of entry/exit</li>
</ul>`,
[`Demand: inverse relationship with price; Supply: direct relationship with price`,
 `Movement along curve: caused by price change of the good itself`,
 `Shift of curve: caused by non-price determinants`,
 `PED = %ΔQd / %ΔP; |PED| > 1 = elastic; |PED| < 1 = inelastic`,
 `PES = %ΔQs / %ΔP`,
 `Consumer surplus = willingness to pay − actual price`,
 `Producer surplus = actual price − willingness to accept`],
[`Always distinguish between movement along and shift of curves`,
 `When drawing diagrams: label axes, show shifts with arrows, label new equilibrium`,
 `Elasticity calculations: use percentage changes, not absolute changes`,
 `Total revenue test: if PED elastic, price cut increases TR; if inelastic, price rise increases TR`]);

// ============================================================================
// Now let's add the script to process all files
// ============================================================================

// Content generators for Edexcel and IB

function getEdexcelContent(subject, topic, level) {
  // Map edexcel topics to CAIE content where equivalent
  const mappings = {
    'eb1': 'biology-b1', 'eb2': 'biology-b4', 'eb3': 'biology-b6', 'eb4': 'biology-b11',
    'ec1': 'chemistry-c1', 'ec2': 'chemistry-c2', 'ec3': 'chemistry-c4', 'ec5': 'chemistry-c9',
    'ep1': 'physics-p2', 'ep2': 'physics-p4', 'ep6': 'physics-p1',
    'em1': 'maths-m1', 'em2': 'maths-m2', 'em3': 'maths-m4', 'em4': 'maths-m6',
    'ee1': 'economics-e2', 'ee3': 'economics-e6', 'ee4': 'economics-e8',
  };
  const mapped = mappings[topic.id];
  if (mapped && contentDB[mapped]) {
    return contentDB[mapped];
  }
  return null;
}

function getIBContent(subject, topic) {
  const mappings = {
    'ibb1': 'biology-b1', 'ibb2': 'biology-b2', 'ibb3': 'biology-b4', 'ibb4': 'biology-b11',
    'ibc1': 'chemistry-c3', 'ibc2': 'chemistry-c1', 'ibc3': 'chemistry-c1', 'ibc4': 'chemistry-c2',
    'ibc5': 'chemistry-c4', 'ibc6': 'chemistry-c5', 'ibc7': 'chemistry-c6', 'ibc8': 'chemistry-c7',
    'ibp1': 'physics-p1', 'ibp2': 'physics-p2', 'ibp3': 'physics-p8', 'ibp4': 'physics-p4',
    'ibp5': 'physics-p5', 'ibp6': 'physics-p2', 'ibp7': 'physics-p7', 'ibp8': 'physics-p13',
  };
  const mapped = mappings[topic.id];
  if (mapped && contentDB[mapped]) {
    return contentDB[mapped];
  }
  return null;
}

function generateDetailedNotes(subjectKey, topicKey, level, title, code) {
  const key = `${subjectKey}-${topicKey}`;
  let content = contentDB[key];

  // Try mapping for edexcel/ib
  if (!content) {
    if (subjectKey.startsWith('edexcel-')) {
      const topicObj = { id: topicKey };
      content = getEdexcelContent(null, topicObj, level);
    } else if (subjectKey.startsWith('ib-')) {
      const topicObj = { id: topicKey };
      content = getIBContent(null, topicObj);
    }
  }

  if (!content) return null;

  const levelBadge = level === 'a' ? 'AS/A2' : level === 'igcse' ? 'IGCSE' : level === 'ial' ? 'IAL' : level === 'hl' ? 'HL' : level === 'sl' ? 'SL' : 'IB';
  const levelClass = level === 'a' ? 'badge-as' : level === 'igcse' ? 'badge-igcse' : level === 'ial' ? 'badge-ial' : 'badge-ib';

  let badges = '';
  if (level === 'ib' || level === 'hl' || level === 'sl') {
    badges = '<span class="level-badge badge-ib">IB DP</span>';
    if (level === 'hl') badges += '<span class="level-badge badge-hl">HL</span>';
    if (level === 'sl') badges += '<span class="level-badge badge-sl">SL</span>';
  } else {
    badges = `<span class="level-badge ${levelClass}">${levelBadge}</span>`;
  }

  let detailedHtml = content.detailedNotes;
  let summaryHtml = content.summaryPoints.map(p => `<li>${p}</li>`).join('\n');
  let examTipsHtml = content.examTips.map(t => `<li>${t}</li>`).join('\n');
  let formulasHtml = content.formulas && content.formulas.length > 0
    ? `<div class="formula-box">${content.formulas.map(f => `<div>${f}</div>`).join('\n')}</div>`
    : '';

  return {
    detailed: detailedHtml,
    summary: summaryHtml,
    examTips: examTipsHtml,
    formulas: formulasHtml
  };
}

// ============================================================================
// PROCESS FILES
// ============================================================================

let enriched = 0;
let skipped = 0;
let errors = 0;

function processFile(filename) {
  const filepath = path.join(notesDir, filename);
  let html;
  try {
    html = fs.readFileSync(filepath, 'utf8');
  } catch (e) {
    errors++;
    return;
  }

  // Skip if already has substantial content (not placeholder)
  const hasPlaceholder = html.includes('coming-soon') || html.includes('Coming Soon') || html.includes('placeholder');
  const contentLength = html.length;
  const hasDetailedContent = html.includes('<h3>') && html.includes('<ul>') && contentLength > 5000 && !hasPlaceholder;

  // Parse filename
  const basename = filename.replace(/\.html$/, '');
  const isSummary = basename.endsWith('-summary');
  const baseName = isSummary ? basename.slice(0, -8) : basename;

  let level = '';
  let cleanBase = baseName;
  if (baseName.endsWith('-a')) { level = 'a'; cleanBase = baseName.slice(0, -2); }
  else if (baseName.endsWith('-igcse')) { level = 'igcse'; cleanBase = baseName.slice(0, -6); }
  else if (baseName.endsWith('-ial')) { level = 'ial'; cleanBase = baseName.slice(0, -4); }
  else if (baseName.endsWith('-gcse')) { level = 'gcse'; cleanBase = baseName.slice(0, -5); }
  else if (baseName.endsWith('-hl')) { level = 'hl'; cleanBase = baseName.slice(0, -3); }
  else if (baseName.endsWith('-sl')) { level = 'sl'; cleanBase = baseName.slice(0, -3); }

  // Determine subject and topic
  let subjectKey = null;
  let topicKey = null;

  // Check known prefixes
  const knownPrefixes = [
    'physics-p', 'chemistry-c', 'biology-b', 'maths-m', 'additional-maths-am',
    'economics-e', 'business-bu', 'accounting-ac', 'english-en', 'chinese-ch',
    'psychology-ps', 'history-h', 'geography-g', 'ict-i',
    'edexcel-physics-ep', 'edexcel-chemistry-ec', 'edexcel-biology-eb',
    'edexcel-maths-em', 'edexcel-economics-ee', 'edexcel-business-ebu',
    'edexcel-english-een', 'edexcel-history-eh', 'edexcel-geography-eg',
    'edexcel-computer-science-ecs',
    'ib-physics-ibp', 'ib-chemistry-ibc', 'ib-biology-ibb',
    'ib-maths-aa-ibmaa', 'ib-maths-ai-ibmai', 'ib-economics-ibe',
    'ib-english-iben', 'ib-history-ibh', 'ib-geography-ibg', 'ib-psychology-ibps'
  ];

  for (const prefix of knownPrefixes) {
    if (cleanBase.startsWith(prefix)) {
      const dashIdx = cleanBase.lastIndexOf('-');
      if (dashIdx > prefix.length - 1) {
        subjectKey = cleanBase.substring(0, dashIdx);
        topicKey = cleanBase.substring(dashIdx + 1);
      } else {
        subjectKey = cleanBase.substring(0, prefix.length - 1);
        topicKey = cleanBase.substring(prefix.length - 1);
      }
      break;
    }
  }

  if (!subjectKey) {
    // Try simple split
    const dashIdx = cleanBase.indexOf('-');
    if (dashIdx > 0) {
      subjectKey = cleanBase.substring(0, dashIdx);
      topicKey = cleanBase.substring(dashIdx + 1);
    }
  }

  if (!subjectKey || !topicKey) {
    skipped++;
    return;
  }

  const content = generateDetailedNotes(subjectKey, topicKey, level, '', '');
  if (!content) {
    skipped++;
    return;
  }

  // Build replacement HTML
  let newContent;
  if (isSummary) {
    newContent = `<div class="notes-section">
<h2>Last-Minute Revision Summary</h2>
<ul>
${content.summary}
</ul>
</div>
<div class="exam-tips">
<h2>Quick Exam Tips</h2>
<ul>
${content.examTips}
</ul>
</div>`;
  } else {
    newContent = `<div class="notes-section">
<h2>Detailed Notes</h2>
${content.formulas}
${content.detailed}
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
${content.summary}
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
${content.examTips}
</ul>
</div>`;
  }

  // Replace content in file
  // Find the notes-container div and replace its inner content
  const containerMatch = html.match(/(<div class="notes-container">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/);
  if (!containerMatch) {
    skipped++;
    return;
  }

  // Keep header, replace rest
  const headerMatch = html.match(/(<div class="notes-header">[\s\S]*?<\/div>\s*<\/div>)/);
  if (!headerMatch) {
    skipped++;
    return;
  }

  const beforeContainer = html.substring(0, containerMatch.index + containerMatch[1].length);
  const afterContainer = html.substring(containerMatch.index + containerMatch[0].length - '<\/div>\s*<\/div>\s*<\/section>'.length);

  const newHtml = beforeContainer + '\n' + newContent + '\n' + afterContainer;

  fs.writeFileSync(filepath, newHtml);
  enriched++;
}

// Get all HTML files
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html'));

console.log(`Processing ${files.length} HTML files...`);

for (const file of files) {
  processFile(file);
}

console.log(`\n✓ Enriched: ${enriched}`);
console.log(`⊘ Skipped: ${skipped}`);
console.log(`✗ Errors: ${errors}`);
console.log(`\nTotal processed: ${enriched + skipped + errors}`);
