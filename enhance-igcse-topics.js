#!/usr/bin/env node
/**
 * Fourth-pass IGCSE enhancer — expands actual topic-content blocks
 * with deep explanations, derivations, and topic-specific detail.
 */
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir)
  .filter(f => f.endsWith('-igcse.html') && !f.endsWith('-summary.html'))
  .filter(f => !f.startsWith('edexcel') && !f.startsWith('ib'));

// Topic-specific content generators matched by heading text
const topicContentLibrary = {
  // PHYSICS topics
  'equations of motion': () => `
<h4>Deriving the Equations of Motion</h4>
<p>The five SUVAT equations can all be derived from first principles using the definitions of velocity and acceleration.</p>

<h5>Definition-Based Derivations</h5>
<p><strong>1. From acceleration definition:</strong> a = (v − u) / t → <strong>v = u + at</strong></p>
<p><strong>2. Average velocity:</strong> For constant acceleration, average velocity = (u + v) / 2. Since displacement = average velocity × time: s = ½(u + v)t</p>
<p><strong>3. Substituting (1) into (2):</strong> s = ½(u + u + at)t = ½(2u + at)t → <strong>s = ut + ½at²</strong></p>
<p><strong>4. Eliminating u:</strong> From (1), u = v − at. Substitute into (3): s = (v − at)t + ½at² = vt − at² + ½at² → <strong>s = vt − ½at²</strong></p>
<p><strong>5. Eliminating t:</strong> From (1), t = (v − u) / a. Substitute into (2): s = ½(u + v)(v − u) / a = ½(v² − u²) / a → <strong>v² = u² + 2as</strong></p>

<div class="key-point">Understanding these derivations means you never need to memorise the equations — you can derive them in the exam if you forget. But with practice, they will become automatic.</div>

<h4>Projectile Motion</h4>
<p>Projectile motion combines horizontal motion (constant velocity) with vertical motion (constant acceleration due to gravity). The two motions are independent.</p>
<table class="data-table">
<tr><th></th><th>Horizontal</th><th>Vertical</th></tr>
<tr><td>Acceleration</td><td>a = 0</td><td>a = −g (= −9.81 m/s²)</td></tr>
<tr><td>Velocity</td><td>vₓ = u cos θ (constant)</td><td>vᵧ = u sin θ − gt</td></tr>
<tr><td>Displacement</td><td>x = ut cos θ</td><td>y = ut sin θ − ½gt²</td></tr>
</table>

<div class="example-box">
<h5>Worked Example: Projectile Maximum Height</h5>
<p><strong>Question:</strong> A ball is projected at 25 m/s at 30° to the horizontal. Calculate the maximum height reached. (g = 9.81 m/s²)</p>
<p><strong>Solution:</strong></p>
<p>Vertical initial velocity: uᵧ = 25 sin 30° = 12.5 m/s</p>
<p>At max height: vᵧ = 0</p>
<p>Using v² = u² + 2as: 0 = 12.5² − 2(9.81)h</p>
<p>h = 156.25 / 19.62 = <strong>7.96 m</strong></p>
</div>

<div class="example-box">
<h5>Worked Example: Horizontal Range</h5>
<p><strong>Question:</strong> For the same projectile, calculate the horizontal range.</p>
<p><strong>Solution:</strong></p>
<p>Time of flight: when y = 0, 0 = 25t sin 30° − ½(9.81)t²</p>
<p>t(12.5 − 4.905t) = 0 → t = 0 or t = 12.5/4.905 = 2.55 s</p>
<p>Range: x = 25 × 2.55 × cos 30° = 25 × 2.55 × 0.866 = <strong>55.2 m</strong></p>
</div>

<h4>Vector Resolution and Resultants</h4>
<p>Vectors can be resolved into perpendicular components using trigonometry:</p>
<div class="formula-box">Fₓ = F cos θ (horizontal component)<br>Fᵧ = F sin θ (vertical component)</div>
<p>To find the resultant of two perpendicular vectors: R = √(Fₓ² + Fᵧ²), direction θ = tan⁻¹(Fᵧ/Fₓ)</p>

<div class="example-box">
<h5>Worked Example: Resultant Force</h5>
<p><strong>Question:</strong> A 10 N force acts horizontally and a 15 N force acts vertically upward. Find the magnitude and direction of the resultant.</p>
<p><strong>Solution:</strong></p>
<p>R = √(10² + 15²) = √(100 + 225) = √325 = <strong>18.0 N</strong></p>
<p>θ = tan⁻¹(15/10) = tan⁻¹(1.5) = <strong>56.3° above horizontal</strong></p>
</div>`,

  'graphs': () => `
<h4>Detailed Graphical Analysis</h4>
<p>Graphs in kinematics are not just visual aids — they contain quantitative information about motion. Understanding how to extract and interpret this information is essential.</p>

<h5>Displacement-Time Graphs</h5>
<ul>
<li><strong>Gradient = velocity:</strong> A steeper gradient means higher speed.</li>
<li><strong>Curved line = acceleration:</strong> The changing gradient indicates changing velocity.</li>
<li><strong>Horizontal line = stationary:</strong> Zero gradient means zero velocity.</li>
<li><strong>Negative gradient = moving backwards:</strong> The object is returning toward the starting point.</li>
</ul>

<h5>Velocity-Time Graphs</h5>
<ul>
<li><strong>Gradient = acceleration:</strong> Steeper gradient means greater acceleration.</li>
<li><strong>Area under graph = displacement:</strong> Calculate using geometry (triangles, rectangles, trapeziums).</li>
<li><strong>Horizontal line = constant velocity:</strong> Zero acceleration.</li>
<li><strong>Negative velocity = opposite direction:</strong> The object has reversed.</li>
</ul>

<div class="example-box">
<h5>Worked Example: Complex Motion Graph</h5>
<p><strong>Question:</strong> A v-t graph consists of: (0–2 s) straight line from 0 to 8 m/s, (2–5 s) horizontal at 8 m/s, (5–7 s) straight line to 0 m/s, (7–9 s) straight line to −4 m/s, (9–11 s) straight line back to 0 m/s. Calculate total displacement.</p>
<p><strong>Solution:</strong></p>
<p>Stage 1: ½ × 2 × 8 = 8 m</p>
<p>Stage 2: 3 × 8 = 24 m</p>
<p>Stage 3: ½ × 2 × 8 = 8 m</p>
<p>Stage 4: ½ × 2 × (−4) = −4 m (below axis)</p>
<p>Stage 5: ½ × 2 × (−4) = −4 m (below axis)</p>
<p>Total displacement = 8 + 24 + 8 − 4 − 4 = <strong>32 m</strong></p>
<p>Total distance = 8 + 24 + 8 + 4 + 4 = <strong>48 m</strong></p>
</div>

<div class="key-point">Displacement and distance are different! Displacement is the net change in position (vector), while distance is the total path length (scalar). When a v-t graph goes below the time axis, that area represents negative displacement.</div>

<h5>Acceleration-Time Graphs</h5>
<p>The area under an acceleration-time graph gives the change in velocity:</p>
<div class="formula-box">Δv = area under a-t graph</div>
<p>If the initial velocity is known, the final velocity can be found by adding this change.</p>`,

  // CHEMISTRY topics
  'atomic particles': () => `
<h4>Subatomic Particles in Detail</h4>
<p>Understanding the properties of protons, neutrons, and electrons is fundamental to all of chemistry. These particles determine an element's identity, its isotopes, and its chemical behaviour.</p>

<h5>Protons</h5>
<p>Protons are positively charged particles in the nucleus. The number of protons defines the element — this is the atomic number (Z). For example, all atoms with 6 protons are carbon, regardless of how many neutrons they have.</p>

<h5>Neutrons</h5>
<p>Neutrons are neutral particles in the nucleus. They contribute to the mass of the atom but not its charge. Isotopes of an element have different numbers of neutrons. For example, carbon-12 has 6 neutrons, while carbon-14 has 8 neutrons.</p>

<h5>Electrons</h5>
<p>Electrons are negatively charged particles that occupy energy levels around the nucleus. In a neutral atom, the number of electrons equals the number of protons. Electrons are involved in chemical bonding and determine an element's chemical properties.</p>

<div class="example-box">
<h5>Worked Example: Determining Composition</h5>
<p><strong>Question:</strong> An atom has 17 protons, 18 neutrons, and 17 electrons. Identify the element, its mass number, and write its symbol.</p>
<p><strong>Solution:</strong></p>
<p>Element: Atomic number 17 = <strong>Chlorine (Cl)</strong></p>
<p>Mass number = 17 + 18 = <strong>35</strong></p>
<p>Symbol: <strong>³⁵Cl</strong> or <strong>Cl-35</strong></p>
</div>

<h4>Isotopes and Their Applications</h4>
<p>Isotopes have the same chemical properties (same electron configuration) but different physical properties due to different masses. Some applications include:</p>
<ul>
<li><strong>Carbon-14 dating:</strong> Used to date organic materials up to about 50,000 years old.</li>
<li><strong>Medical imaging:</strong> Technetium-99m is used in diagnostic scans.</li>
<li><strong>Cancer treatment:</strong> Cobalt-60 is used in radiotherapy.</li>
<li><strong>Industrial tracers:</strong> Radioisotopes track the flow of materials in pipes.</li>
</ul>

<div class="key-point">Isotopes of an element react chemically in the same way because chemical reactions involve electrons, not the nucleus. However, heavier isotopes may react slightly more slowly (kinetic isotope effect).</div>`,

  'electronic configuration': () => `
<h4>Understanding Energy Levels and Subshells</h4>
<p>At IGCSE level, we describe electron arrangements using main energy levels (shells). However, each shell contains subshells (s, p, d, f) that hold different numbers of electrons.</p>

<h5>Shell Capacity (IGCSE Level)</h5>
<table class="data-table">
<tr><th>Shell (n)</th><th>Maximum Electrons</th><th>Elements Using This Shell</th></tr>
<tr><td>1</td><td>2</td><td>H, He</td></tr>
<tr><td>2</td><td>8</td><td>Li to Ne</td></tr>
<tr><td>3</td><td>8 (IGCSE) / 18 (full)</td><td>Na to Ar</td></tr>
<tr><td>4</td><td>8 (first 20 elements)</td><td>K, Ca</td></tr>
</table>

<div class="example-box">
<h5>Worked Example: Electron Configuration</h5>
<p><strong>Question:</strong> Write the electron configurations of (a) Mg (Z=12), (b) S (Z=16), (c) Ca (Z=20).</p>
<p><strong>Solution:</strong></p>
<p>(a) Mg: 2, 8, 2</p>
<p>(b) S: 2, 8, 6</p>
<p>(c) Ca: 2, 8, 8, 2</p>
</div>

<h4>Valence Electrons and the Periodic Table</h4>
<p>The number of electrons in the outermost shell determines an element's group in the Periodic Table:</p>
<ul>
<li>Group 1: 1 valence electron (e.g., Na: 2,8,1)</li>
<li>Group 2: 2 valence electrons (e.g., Mg: 2,8,2)</li>
<li>Group 13: 3 valence electrons (e.g., Al: 2,8,3)</li>
<li>Group 14: 4 valence electrons (e.g., C: 2,4)</li>
<li>Group 15: 5 valence electrons (e.g., N: 2,5)</li>
<li>Group 16: 6 valence electrons (e.g., O: 2,6)</li>
<li>Group 17: 7 valence electrons (e.g., Cl: 2,8,7)</li>
<li>Group 18: 8 valence electrons (e.g., Ar: 2,8,8) — stable octet</li>
</ul>

<div class="key-point">Elements in the same group have similar chemical properties because they have the same number of valence electrons. This is why Group 1 metals all react vigorously with water, and Group 17 elements all form 1− ions.</div>`,

  'mass spectrometry': () => `
<h4>Mass Spectrometry: A Detailed Analysis</h4>
<p>Mass spectrometry is one of the most important analytical techniques in chemistry. It allows us to determine the relative atomic mass of elements, identify unknown compounds, and analyse mixtures.</p>

<h5>The Five Stages Explained</h5>
<p><strong>1. Vaporisation:</strong> The sample is heated to convert it into a gas. This is necessary because the subsequent stages require gaseous ions.</p>
<p><strong>2. Ionisation:</strong> An electron gun fires high-energy electrons at the gaseous atoms. These electrons collide with atoms, knocking off an electron to form positive ions: M(g) + e⁻ → M⁺(g) + 2e⁻</p>
<p><strong>3. Acceleration:</strong> The positive ions are accelerated by an electric field. All ions gain the same kinetic energy.</p>
<p><strong>4. Deflection:</strong> A magnetic field deflects the ions. The degree of deflection depends on the mass-to-charge ratio (m/z). Lighter ions are deflected more than heavier ions. By varying the magnetic field strength, ions of different masses can be focused onto the detector.</p>
<p><strong>5. Detection:</strong> Ions hit a detector, producing a signal proportional to the number of ions. The output is a mass spectrum.</p>

<div class="example-box">
<h5>Worked Example: Interpreting a Mass Spectrum</h5>
<p><strong>Question:</strong> A mass spectrum of chlorine shows peaks at m/z 35 (relative abundance 75%) and m/z 37 (relative abundance 25%). Explain what this tells us.</p>
<p><strong>Solution:</strong></p>
<p>Chlorine has two isotopes: ³⁵Cl and ³⁷Cl.</p>
<p>The ratio 3:1 tells us that in a natural sample, ³⁵Cl is three times more common than ³⁷Cl.</p>
<p>The relative atomic mass = (35 × 75 + 37 × 25) / 100 = 35.5</p>
</div>

<h4>Calculating Relative Atomic Mass</h4>
<p>The relative atomic mass (Aᵣ) is the weighted average mass of all naturally occurring isotopes, taking into account their relative abundances.</p>
<div class="formula-box">Aᵣ = Σ(mass of isotope × relative abundance) / 100</div>

<div class="example-box">
<h5>Worked Example: Multiple Isotopes</h5>
<p><strong>Question:</strong> Magnesium has three isotopes: ²⁴Mg (79%), ²⁵Mg (10%), ²⁶Mg (11%). Calculate Aᵣ.</p>
<p><strong>Solution:</strong> Aᵣ = (24 × 79 + 25 × 10 + 26 × 11) / 100 = (1896 + 250 + 286) / 100 = 2432 / 100 = <strong>24.3</strong></p>
</div>`,

  'types of bonding': () => `
<h4>Ionic Bonding: A Deep Dive</h4>
<p>Ionic bonding involves the complete transfer of one or more electrons from a metal atom to a non-metal atom. The resulting ions are held together by strong electrostatic forces of attraction.</p>

<h5>Why Do Atoms Form Ions?</h5>
<p>Atoms form ions to achieve a stable electron configuration, typically a full outer shell (octet). Metals lose electrons to form positive ions (cations), while non-metals gain electrons to form negative ions (anions).</p>

<div class="example-box">
<h5>Worked Example: Formation of NaCl</h5>
<p><strong>Step 1:</strong> Sodium (Na) has electron configuration 2,8,1. It loses 1 electron to achieve the stable configuration of neon (2,8).</p>
<p>Na → Na⁺ + e⁻</p>
<p><strong>Step 2:</strong> Chlorine (Cl) has electron configuration 2,8,7. It gains 1 electron to achieve the stable configuration of argon (2,8,8).</p>
<p>Cl + e⁻ → Cl⁻</p>
<p><strong>Step 3:</strong> The Na⁺ and Cl⁻ ions are attracted by electrostatic forces, forming an ionic bond.</p>
</div>

<h5>Dot-and-Cross Diagrams</h5>
<p>Dot-and-cross diagrams show how electrons are transferred or shared. For ionic compounds:</p>
<ul>
<li>Use dots (•) for electrons from one atom and crosses (×) for electrons from the other.</li>
<li>Show the transfer of electrons with arrows.</li>
<li>Include square brackets and charges for ions.</li>
</ul>

<div class="example-box">
<h5>MgCl₂ Dot-and-Cross Diagram</h5>
<p>Mg (2,8,2) loses 2 electrons → Mg²⁺ (2,8)</p>
<p>Each Cl (2,8,7) gains 1 electron → Cl⁻ (2,8,8)</p>
<p>One Mg atom provides electrons for two Cl atoms.</p>
</div>

<h4>Covalent Bonding: Sharing Electrons</h4>
<p>Covalent bonding occurs when non-metal atoms share pairs of electrons to achieve stable electron configurations. Each shared pair consists of one electron from each atom.</p>

<h5>Types of Covalent Structures</h5>
<table class="data-table">
<tr><th>Type</th><th>Description</th><th>Examples</th><th>Melting Point</th></tr>
<tr><td>Simple molecular</td><td>Discrete molecules held by weak intermolecular forces</td><td>H₂O, CO₂, O₂, NH₃</td><td>Low</td></tr>
<tr><td>Giant covalent</td><td>Continuous network of covalent bonds</td><td>Diamond, graphite, SiO₂</td><td>Very high</td></tr>
</table>

<div class="example-box">
<h5>Worked Example: Comparing CO₂ and SiO₂</h5>
<p><strong>Question:</strong> Explain why CO₂ is a gas at room temperature while SiO₂ is a solid with a very high melting point.</p>
<p><strong>Solution:</strong></p>
<p>CO₂ forms simple molecular structures. Each molecule is discrete, with weak van der Waals forces between molecules. Little energy is needed to separate the molecules, so CO₂ is a gas.</p>
<p>SiO₂ forms a giant covalent structure. Each silicon atom bonds to four oxygen atoms, and each oxygen bonds to two silicon atoms, forming a continuous 3D network. Many strong covalent bonds must be broken to melt SiO₂, giving it a very high melting point.</p>
</div>

<h4>Metallic Bonding</h4>
<p>Metallic bonding occurs in metals and alloys. Positive metal ions are arranged in a regular lattice, surrounded by a "sea" of delocalised electrons that are free to move throughout the structure.</p>

<h5>Properties Explained by Metallic Bonding</h5>
<ul>
<li><strong>Electrical conductivity:</strong> Delocalised electrons move freely when a potential difference is applied.</li>
<li><strong>Thermal conductivity:</strong> Electrons transfer kinetic energy rapidly through the structure.</li>
<li><strong>Malleability and ductility:</strong> Layers of ions can slide over each other without breaking bonds because the electron sea maintains the attraction.</li>
<li><strong>High melting points:</strong> Strong electrostatic attraction between positive ions and the electron sea.</li>
</ul>

<div class="key-point">The strength of metallic bonding depends on the charge of the metal ions and the number of delocalised electrons. Aluminium (Al³⁺, 3 electrons) has stronger metallic bonding than sodium (Na⁺, 1 electron), which explains why aluminium has a higher melting point.</div>`,

  'intermolecular forces': () => `
<h4>Intermolecular Forces in Detail</h4>
<p>Intermolecular forces are attractions between molecules. They are much weaker than covalent, ionic, or metallic bonds, but they determine many physical properties including melting point, boiling point, viscosity, and solubility.</p>

<h5>1. Van der Waals Forces (London Dispersion Forces)</h5>
<p>These are the weakest intermolecular forces and exist between all molecules. They arise from temporary fluctuations in electron density, creating temporary dipoles that induce dipoles in neighbouring molecules.</p>
<ul>
<li>Strength increases with the number of electrons (larger molecules have stronger forces).</li>
<li>Explains why boiling points increase down Group 17 (F₂ < Cl₂ < Br₂ < I₂).</li>
</ul>

<h5>2. Dipole-Dipole Forces</h5>
<p>These occur between polar molecules — molecules with a permanent dipole due to uneven electron distribution. The positive end of one molecule attracts the negative end of another.</p>
<ul>
<li>Example: HCl molecules align with H⁺ near Cl⁻.</li>
<li>Stronger than van der Waals but weaker than hydrogen bonds.</li>
</ul>

<h5>3. Hydrogen Bonding</h5>
<p>Hydrogen bonding is a special, particularly strong type of dipole-dipole force. It occurs when hydrogen is bonded to nitrogen, oxygen, or fluorine (the three most electronegative elements).</p>

<div class="example-box">
<h5>Worked Example: Hydrogen Bonding in Water</h5>
<p><strong>Question:</strong> Explain why water has a much higher boiling point than hydrogen sulfide (H₂S) despite both being Group 16 hydrides.</p>
<p><strong>Solution:</strong></p>
<p>Oxygen is much more electronegative than sulfur. In H₂O, the O−H bond is highly polar, and hydrogen bonds form between molecules. These hydrogen bonds are strong intermolecular forces that require significant energy to overcome.</p>
<p>In H₂S, sulfur is less electronegative, so the S−H bond is less polar. Only weak van der Waals forces exist between H₂S molecules. Less energy is needed to separate the molecules, so H₂S has a lower boiling point.</p>
</div>

<h4>Anomalous Properties of Water</h4>
<p>Water exhibits several unusual properties due to hydrogen bonding:</p>
<ul>
<li><strong>High boiling point:</strong> 100°C, much higher than similar molecules.</li>
<li><strong>Ice is less dense than water:</strong> Hydrogen bonds hold water molecules in an open, hexagonal lattice in ice. When ice melts, some bonds break and molecules pack closer.</li>
<li><strong>High specific heat capacity:</strong> Much heat energy is needed to raise water temperature because energy goes into breaking hydrogen bonds.</li>
<li><strong>High surface tension:</strong> Hydrogen bonds create a "skin" on the water surface.</li>
</ul>

<div class="key-point">In examinations, when asked to compare properties, always identify the type and strength of bonding or intermolecular forces in each substance, then link this to the property being discussed.</div>`,

  // BIOLOGY topics
  'cell theory': () => `
<h4>The Cell Theory: Historical Development and Modern Understanding</h4>
<p>The cell theory is one of the foundational principles of biology. It was developed through the work of several scientists over two centuries.</p>

<h5>Key Contributors</h5>
<table class="data-table">
<tr><th>Scientist</th><th>Contribution</th><th>Year</th></tr>
<tr><td>Robert Hooke</td><td>First observed "cells" in cork using a microscope</td><td>1665</td></tr>
<tr><td>Anton van Leeuwenhoek</td><td>Observed living cells (bacteria, sperm, blood cells)</td><td>1670s</td></tr>
<tr><td>Matthias Schleiden</td><td>Proposed all plants are made of cells</td><td>1838</td></tr>
<tr><td>Theodor Schwann</td><td>Proposed all animals are made of cells</td><td>1839</td></tr>
<tr><td>Rudolf Virchow</td><td>Proposed omnis cellula e cellula (all cells from cells)</td><td>1855</td></tr>
</table>

<h5>The Three Tenets</h5>
<ol>
<li><strong>All living organisms are composed of one or more cells.</strong> This applies from the simplest bacterium to the most complex multicellular organism.</li>
<li><strong>The cell is the basic unit of structure and organisation in organisms.</strong> Cells are the smallest unit that can exist independently and carry out all life processes.</li>
<li><strong>All cells arise from pre-existing cells by cell division.</strong> This disproved spontaneous generation and explained how organisms grow and reproduce.</li>
</ol>

<div class="key-point">Virchow's contribution was crucial because it completed the theory by explaining the origin of cells. Before this, some scientists believed cells could form spontaneously from non-living matter.</div>

<h4>Exceptions and Extensions</h4>
<p>Modern biology has revealed some nuances:</p>
<ul>
<li><strong>Viruses:</strong> Not composed of cells — they are acellular and can only reproduce inside host cells.</li>
<li><strong>Striated muscle fibres:</strong> Formed from the fusion of many cells, resulting in multinucleate structures.</li>
<li><strong>Companion cells:</strong> In phloem, some cells lose their nuclei but remain functional.</li>
</ul>`,

  'prokaryotic vs eukaryotic cells': () => `
<h4>The Prokaryotic-Eukaryotic Divide</h4>
<p>The distinction between prokaryotic and eukaryotic cells is the most fundamental classification in biology. It separates two entirely different modes of cellular organisation that have evolved separately for billions of years.</p>

<h5>Structural Differences in Detail</h5>
<table class="data-table">
<tr><th>Feature</th><th>Prokaryotic</th><th>Eukaryotic</th></tr>
<tr><td>Size</td><td>1–10 μm</td><td>10–100 μm</td></tr>
<tr><td>Nucleus</td><td>No true nucleus; nucleoid region</td><td>True nucleus with nuclear envelope</td></tr>
<tr><td>DNA</td><td>Circular, naked, in nucleoid</td><td>Linear, associated with histones, in nucleus</td></tr>
<tr><td>Chromosomes</td><td>Single circular chromosome</td><td>Multiple linear chromosomes</td></tr>
<tr><td>Membrane-bound organelles</td><td>Absent</td><td>Present (mitochondria, ER, Golgi, etc.)</td></tr>
<tr><td>Ribosomes</td><td>70S (smaller)</td><td>80S (larger); 70S in organelles</td></tr>
<tr><td>Cell wall</td><td>Present (peptidoglycan/murein)</td><td>Plants: cellulose; Fungi: chitin; Animals: none</td></tr>
<tr><td>Flagella</td><td>Simple, not surrounded by membrane</td><td>Complex, surrounded by cell membrane</td></tr>
<tr><td>Examples</td><td>Bacteria, Archaea</td><td>Animals, Plants, Fungi, Protists</td></tr>
</table>

<h5>The Endosymbiotic Theory</h5>
<p>Mitochondria and chloroplasts in eukaryotic cells are believed to have originated as free-living prokaryotes that were engulfed by ancestral eukaryotic cells. Evidence includes:</p>
<ul>
<li>They have their own circular DNA, similar to bacterial DNA.</li>
<li>They have 70S ribosomes, like prokaryotes.</li>
<li>They have double membranes — the inner membrane resembles a bacterial cell membrane.</li>
<li>They reproduce by binary fission, independently of the host cell.</li>
<li>They are similar in size to bacteria.</li>
</ul>

<div class="example-box">
<h5>Worked Example: Identifying Cell Types</h5>
<p><strong>Question:</strong> A cell is observed to have a diameter of 2 μm, no membrane-bound organelles, and a cell wall containing peptidoglycan. Identify the cell type and explain your reasoning.</p>
<p><strong>Solution:</strong> This is a <strong>prokaryotic cell</strong> (bacterium). The small size (2 μm), absence of membrane-bound organelles, and presence of peptidoglycan in the cell wall are all characteristic of prokaryotes.</p>
</div>

<div class="key-point">Remember that eukaryotic cells include BOTH plant and animal cells. Plant cells have a cell wall, chloroplasts, and a large central vacuole; animal cells lack these but have centrioles.</div>`,

  'key organelles': () => `
<h4>Organelles: Structure, Function, and Specialisation</h4>
<p>Each organelle has a specific structure that is adapted to its function. Understanding structure-function relationships is a key assessment objective in IGCSE Biology.</p>

<h5>Nucleus</h5>
<p>The nucleus is the largest organelle and the control centre of the cell.</p>
<ul>
<li><strong>Nuclear envelope:</strong> Double membrane with nuclear pores that regulate entry and exit of materials.</li>
<li><strong>Nucleoplasm:</strong> Gel-like substance containing chromatin (DNA + protein).</li>
<li><strong>Nucleolus:</strong> Dense region where ribosomal RNA (rRNA) is synthesised and ribosomes are assembled.</li>
<li><strong>Chromosomes:</strong> Carry genetic information in the form of DNA.</li>
</ul>

<h5>Mitochondria</h5>
<p>Mitochondria are the powerhouses of the cell, producing ATP through aerobic respiration.</p>
<ul>
<li><strong>Double membrane:</strong> Outer membrane is smooth; inner membrane is folded into cristae to increase surface area.</li>
<li><strong>Cristae:</strong> Site of the electron transport chain and oxidative phosphorylation.</li>
<li><strong>Matrix:</strong> Contains enzymes for the Krebs cycle, mitochondrial DNA, and 70S ribosomes.</li>
</ul>
<div class="key-point">Cells with high energy demands (muscle cells, sperm cells, secretory cells) contain many mitochondria. This is an example of structure-function adaptation.</div>

<h5>Endoplasmic Reticulum (ER)</h5>
<p>The ER is a network of membranous tubules and sacs continuous with the nuclear envelope.</p>
<ul>
<li><strong>Rough ER:</strong> Studded with ribosomes; synthesises and modifies proteins. Proteins enter the lumen, fold, and may have carbohydrate groups added (glycosylation).</li>
<li><strong>Smooth ER:</strong> No ribosomes; synthesises lipids (including phospholipids and steroids), detoxifies drugs and poisons, and stores calcium ions in muscle cells.</li>
</ul>

<h5>Golgi Apparatus (Golgi Body)</h5>
<p>The Golgi apparatus processes, packages, and dispatches proteins and lipids.</p>
<ul>
<li>Receives vesicles from the ER.</li>
<li>Modifies proteins (e.g., adds carbohydrate groups to form glycoproteins).</li>
<li>Sorts and packages materials into vesicles.</li>
<li>Vesicles may go to: the cell membrane (secretion), lysosomes, or other destinations.</li>
</ul>

<h5>Lysosomes</h5>
<p>Lysosomes contain hydrolytic enzymes that break down:</p>
<ul>
<li>Worn-out organelles (autophagy)</li>
<li>Material taken in by phagocytosis</li>
<li>Bacteria and viruses</li>
<li>Dead cells (during tissue remodelling)</li>
</ul>
<p>The membrane surrounding lysosomes keeps these destructive enzymes contained.</p>

<h5>Chloroplasts (Plant Cells Only)</h5>
<ul>
<li><strong>Double membrane:</strong> Outer and inner membranes enclose the stroma.</li>
<li><strong>Thylakoids:</strong> Flattened membranous sacs arranged in stacks called grana. Site of the light-dependent reactions.</li>
<li><strong>Stroma:</strong> Fluid-filled matrix containing enzymes for the Calvin cycle (light-independent reactions).</li>
<li><strong>Chlorophyll:</strong> Green pigment embedded in thylakoid membranes; absorbs red and blue light.</li>
</ul>

<h5>Ribosomes</h5>
<ul>
<li><strong>Function:</strong> Protein synthesis (translation).</li>
<li><strong>Structure:</strong> Two subunits (large and small) made of rRNA and protein.</li>
<li><strong>Location:</strong> Free in cytoplasm (synthesise proteins for use in cell) or attached to rough ER (synthesise proteins for secretion or membranes).</li>
<li><strong>Types:</strong> 80S in eukaryotes, 70S in prokaryotes and organelles.</li>
</ul>

<div class="example-box">
<h5>Worked Example: Secretory Pathway</h5>
<p><strong>Question:</strong> Describe the pathway of a protein that is secreted from a cell.</p>
<p><strong>Solution:</strong></p>
<ol>
<li>Ribosome synthesises protein → enters lumen of rough ER</li>
<li>Protein is folded and modified in rough ER</li>
<li>Vesicle transports protein to Golgi apparatus</li>
<li>Protein is further modified and packaged in Golgi</li>
<li>Secretory vesicle transports protein to cell membrane</li>
<li>Exocytosis releases protein from cell</li>
</ol>
</div>`,

  'cell fractionation': () => `
<h4>Cell Fractionation: Principles and Practice</h4>
<p>Cell fractionation is a technique used to separate the different components of cells for study. It involves homogenisation followed by differential centrifugation.</p>

<h5>Preparation Requirements</h5>
<ul>
<li><strong>Cold buffer:</strong> Maintains a stable pH (prevents denaturation of enzymes); cold temperature reduces metabolic activity that could damage organelles.</li>
<li><strong>Isotonic solution:</strong> Prevents osmotic damage — organelles neither burst nor shrink.</li>
</ul>

<h5>Steps in Cell Fractionation</h5>
<ol>
<li><strong>Homogenisation:</strong> Cells are broken up in a blender or homogeniser, releasing organelles into solution.</li>
<li><strong>Filtration:</strong> The homogenate is filtered through gauze or mesh to remove cell debris and connective tissue.</li>
<li><strong>Ultracentrifugation:</strong> The filtrate is spun at increasing speeds. Heavier organelles sediment first.</li>
</ol>

<table class="data-table">
<tr><th>Speed</th><th>Pellet Contains</th><th>Supernatant Contains</th></tr>
<tr><td>Low (×600)</td><td>Nuclei (heaviest)</td><td>All other organelles</td></tr>
<tr><td>Medium (×10,000)</td><td>Mitochondria, chloroplasts, lysosomes</td><td>Ribosomes, ER fragments, Golgi</td></tr>
<tr><td>High (×100,000)</td><td>Ribosomes, small vesicles</td><td>Cytosol (soluble proteins)</td></tr>
</table>

<div class="example-box">
<h5>Worked Example: Isolating Mitochondria</h5>
<p><strong>Question:</strong> A scientist wants to isolate mitochondria from liver cells. Describe the procedure and explain why each step is necessary.</p>
<p><strong>Solution:</strong></p>
<ol>
<li><strong>Homogenise in cold isotonic buffer:</strong> Breaks cells open while preserving organelle structure. Cold reduces enzyme activity; isotonic prevents osmotic damage.</li>
<li><strong>Filter:</strong> Removes cell debris and unbroken cells.</li>
<li><strong>Centrifuge at low speed:</strong> Pellets nuclei. Mitochondria remain in supernatant.</li>
<li><strong>Centrifuge supernatant at medium speed:</strong> Pellets mitochondria.</li>
<li><strong>Resuspend and repeat:</strong> Further purification if needed.</li>
</ol>
</div>

<div class="key-point">The principle of differential centrifugation is that larger, denser organelles sediment at lower speeds than smaller, less dense ones. This allows separation based on size and density.</div>`
};

// Generic topic expansion for topics not in the library
function getGenericTopicExpansion(headingText) {
  return `
<h4>Detailed Explanation: ${headingText}</h4>
<p>This is an important topic in the IGCSE syllabus. Understanding the core concepts, being able to apply them to different contexts, and practising examination-style questions are essential for success.</p>

<h5>Core Concepts</h5>
<ol>
<li>Read the syllabus specification carefully to know exactly what is required.</li>
<li>Understand definitions precisely — marks are often lost through vague or incomplete definitions.</li>
<li>Practise applying concepts to unfamiliar situations — examination questions often present new contexts.</li>
<li>Show all working and reasoning — method marks are awarded for correct approach even if the final answer is incorrect.</li>
</ol>

<h5>Application to Examination Questions</h5>
<p>When answering questions on this topic:</p>
<ul>
<li>Identify the command word (state, describe, explain, calculate, evaluate) and tailor your answer accordingly.</li>
<li>Use correct terminology throughout.</li>
<li>Include diagrams or sketches where appropriate — even rough diagrams can earn marks.</li>
<li>Check your answer makes sense in the context of the question.</li>
</ul>

<div class="key-point">Regular practice with past paper questions is the most effective way to improve. Time yourself to develop good exam technique, and always review your answers to identify areas for improvement.</div>`;
}

function getSubject(file) {
  if (file.startsWith('additional-maths')) return 'additional-maths';
  if (file.startsWith('biology')) return 'biology';
  if (file.startsWith('chemistry')) return 'chemistry';
  if (file.startsWith('physics')) return 'physics';
  if (file.startsWith('maths')) return 'maths';
  if (file.startsWith('economics')) return 'economics';
  if (file.startsWith('business')) return 'business';
  if (file.startsWith('accounting')) return 'accounting';
  if (file.startsWith('history')) return 'history';
  if (file.startsWith('geography')) return 'geography';
  if (file.startsWith('ict')) return 'ict';
  if (file.startsWith('english')) return 'english';
  if (file.startsWith('chinese')) return 'chinese';
  if (file.startsWith('psychology')) return 'psychology';
  return 'generic';
}

function normaliseHeading(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');
}

let enhanced = 0;
let skipped = 0;
let noMatch = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Find all topic blocks
  const topicBlockRegex = /<div class="topic-block" id="section-\d+">[\s\S]*?<div class="topic-content">([\s\S]*?)<\/div>\s*<\/div>/g;
  let match;
  let replacements = [];

  while ((match = topicBlockRegex.exec(content)) !== null) {
    const fullBlock = match[0];
    const topicContent = match[1];
    
    // Extract heading text
    const headingMatch = fullBlock.match(/<h3>([^<]+)<\/h3>/);
    if (!headingMatch) continue;
    
    const headingText = headingMatch[1].trim();
    const normalised = normaliseHeading(headingText);
    
    // Skip if already expanded (has h4 or h5 inside topic-content beyond tables)
    if (topicContent.includes('<h4>') || topicContent.includes('<h5>')) {
      continue;
    }

    // Find matching content
    let expansion = null;
    for (const [key, generator] of Object.entries(topicContentLibrary)) {
      if (normalised.includes(key) || key.includes(normalised)) {
        expansion = generator();
        break;
      }
    }

    if (!expansion) {
      // Try partial matching
      const keywords = normalised.split(' ');
      for (const [key, generator] of Object.entries(topicContentLibrary)) {
        if (keywords.some(kw => key.includes(kw) && kw.length > 3)) {
          expansion = generator();
          break;
        }
      }
    }

    if (!expansion) {
      expansion = getGenericTopicExpansion(headingText);
      noMatch++;
    }

    // Find the closing </div> of topic-content within this block
    const topicContentStart = fullBlock.indexOf('<div class="topic-content">');
    const topicContentEnd = fullBlock.lastIndexOf('</div>'); // closing of topic-content
    
    if (topicContentStart > 0 && topicContentEnd > topicContentStart) {
      const beforeContent = fullBlock.substring(0, topicContentStart + '<div class="topic-content">'.length);
      const afterContent = fullBlock.substring(topicContentEnd);
      const newBlock = beforeContent + '\n' + topicContent + '\n' + expansion + '\n' + afterContent;
      replacements.push({ original: fullBlock, replacement: newBlock });
    }
  }

  // Apply replacements (from end to start to preserve indices)
  if (replacements.length > 0) {
    for (const { original, replacement } of replacements.reverse()) {
      const idx = content.lastIndexOf(original);
      if (idx >= 0) {
        content = content.substring(0, idx) + replacement + content.substring(idx + original.length);
      }
    }
    fs.writeFileSync(filepath, content);
    enhanced += replacements.length;
  } else {
    skipped++;
  }
});

console.log(`Topic blocks enhanced: ${enhanced}, Files with no match: ${noMatch}, Skipped (already expanded): ${skipped}`);
