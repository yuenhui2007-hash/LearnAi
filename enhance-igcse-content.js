#!/usr/bin/env node
/**
 * Second-pass IGCSE content enhancer
 * Injects deep topic explanations, worked examples, and exam questions
 * into existing topic-content blocks.
 */
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir)
  .filter(f => f.endsWith('-igcse.html') && !f.endsWith('-summary.html'))
  .filter(f => !f.startsWith('edexcel') && !f.startsWith('ib'));

// Content generators by subject
const contentGenerators = {
  physics: {
    'physical-quantities': () => `
<h4>Understanding SI Units and Prefixes</h4>
<p>The International System of Units (SI) provides a consistent framework for measurement in physics. All physical quantities can be expressed in terms of seven base units. Understanding these units and their prefixes is essential for solving problems and interpreting data.</p>
<h5>Base Units</h5>
<ul>
<li><strong>Metre (m):</strong> Unit of length. Defined by the distance light travels in a vacuum in 1/299,792,458 seconds.</li>
<li><strong>Kilogram (kg):</strong> Unit of mass. Defined using Planck's constant for precision.</li>
<li><strong>Second (s):</strong> Unit of time. Defined by the radiation period of caesium-133 atoms.</li>
<li><strong>Ampere (A):</strong> Unit of electric current.</li>
<li><strong>Kelvin (K):</strong> Unit of temperature.</li>
<li><strong>Mole (mol):</strong> Unit of amount of substance.</li>
<li><strong>Candela (cd):</strong> Unit of luminous intensity.</li>
</ul>
<h5>Common Prefixes</h5>
<table class="data-table">
<tr><th>Prefix</th><th>Symbol</th><th>Factor</th></tr>
<tr><td>Giga</td><td>G</td><td>10⁹</td></tr>
<tr><td>Mega</td><td>M</td><td>10⁶</td></tr>
<tr><td>Kilo</td><td>k</td><td>10³</td></tr>
<tr><td>Centi</td><td>c</td><td>10⁻²</td></tr>
<tr><td>Milli</td><td>m</td><td>10⁻³</td></tr>
<tr><td>Micro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>Nano</td><td>n</td><td>10⁻⁹</td></tr>
</table>
<div class="example-box">
<h5>Worked Example: Unit Conversion</h5>
<p><strong>Question:</strong> Convert 250 mm² to m².</p>
<p><strong>Solution:</strong> Since 1 mm = 10⁻³ m, then 1 mm² = (10⁻³)² m² = 10⁻⁶ m².</p>
<p>Therefore: 250 mm² = 250 × 10⁻⁶ m² = 2.50 × 10⁻⁴ m²</p>
</div>
<div class="example-box">
<h5>Worked Example: Scalar vs Vector</h5>
<p><strong>Question:</strong> A student walks 3 m north, then 4 m east. Find (a) the total distance travelled and (b) the displacement from the starting point.</p>
<p><strong>Solution:</strong></p>
<p>(a) Distance is a scalar: 3 + 4 = <strong>7 m</strong></p>
<p>(b) Displacement is a vector. Using Pythagoras: √(3² + 4²) = √25 = <strong>5 m</strong> at an angle tan⁻¹(4/3) = 53.1° east of north.</p>
</div>
<div class="key-point">When converting area or volume units, remember to square or cube the conversion factor. Many students incorrectly use linear conversion for area.</div>
<h4>Exam-Style Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>A car travels at 72 km/h. Express this speed in m/s.</p>
<p><em>(Answer: 20 m/s)</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>The density of a material is 2.7 g/cm³. Calculate its density in kg/m³.</p>
<p><em>(Answer: 2700 kg/m³)</em></p>
</div>`,

    'kinematics': () => `
<h4>Choosing the Right Equation of Motion</h4>
<p>The five SUVAT equations describe motion with constant acceleration. The key to solving kinematics problems is identifying which variable is unknown or not needed, then selecting the equation that does not contain that variable.</p>
<table class="data-table">
<tr><th>Missing Variable</th><th>Equation to Use</th></tr>
<tr><td>Displacement (s)</td><td>v = u + at</td></tr>
<tr><td>Final velocity (v)</td><td>s = ut + ½at²</td></tr>
<tr><td>Time (t)</td><td>v² = u² + 2as</td></tr>
<tr><td>Acceleration (a)</td><td>s = ½(u + v)t</td></tr>
<tr><td>Initial velocity (u)</td><td>s = vt − ½at²</td></tr>
</table>
<div class="example-box">
<h5>Worked Example: Free Fall</h5>
<p><strong>Question:</strong> A ball is dropped from a height of 45 m. Calculate (a) the time taken to reach the ground and (b) the velocity just before impact. (g = 10 m/s²)</p>
<p><strong>Solution:</strong></p>
<p>Given: u = 0 m/s, s = 45 m, a = g = 10 m/s²</p>
<p>(a) Using s = ut + ½at²: 45 = 0 + ½(10)t² → t² = 9 → <strong>t = 3.0 s</strong></p>
<p>(b) Using v = u + at: v = 0 + 10(3) = <strong>30 m/s</strong></p>
<p><em>Alternative for (b): v² = u² + 2as = 0 + 2(10)(45) = 900 → v = 30 m/s</em></p>
</div>
<div class="example-box">
<h5>Worked Example: Deceleration</h5>
<p><strong>Question:</strong> A car travelling at 25 m/s brakes with a deceleration of 5.0 m/s². Calculate the stopping distance.</p>
<p><strong>Solution:</strong></p>
<p>Given: u = 25 m/s, v = 0 m/s, a = −5.0 m/s²</p>
<p>Using v² = u² + 2as: 0 = 25² + 2(−5.0)s</p>
<p>0 = 625 − 10s → s = <strong>62.5 m</strong></p>
</div>
<h4>Graphical Analysis</h4>
<p>Graphs provide visual representations of motion and are frequently tested:</p>
<ul>
<li><strong>Displacement-time graph:</strong> The gradient at any point gives the velocity. A curved line indicates acceleration.</li>
<li><strong>Velocity-time graph:</strong> The gradient gives acceleration. The area under the graph gives displacement.</li>
<li><strong>Acceleration-time graph:</strong> The area under the graph gives the change in velocity.</li>
</ul>
<div class="example-box">
<h5>Worked Example: Velocity-Time Graph</h5>
<p><strong>Question:</strong> A velocity-time graph shows a car accelerating uniformly from rest to 20 m/s in 5 s, then maintaining this speed for 10 s, then decelerating to rest in 5 s. Calculate the total displacement.</p>
<p><strong>Solution:</strong> The displacement equals the area under the v-t graph.</p>
<p>Area = (½ × 5 × 20) + (10 × 20) + (½ × 5 × 20) = 50 + 200 + 50 = <strong>300 m</strong></p>
</div>
<div class="key-point">When analysing motion graphs, always identify what the gradient and area represent. In v-t graphs, a negative gradient means deceleration, not negative velocity.</div>
<h4>Exam-Style Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>A stone is thrown vertically upwards at 15 m/s. Calculate the maximum height reached and the total time until it returns to the thrower's hand. (g = 10 m/s²)</p>
<p><em>(Answers: 11.25 m, 3.0 s)</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>A train accelerates from rest at 0.50 m/s² for 60 s, then travels at constant speed for 120 s, then decelerates at 1.0 m/s² to rest. Draw a velocity-time graph and calculate the total distance travelled.</p>
<p><em>(Answer: 4500 m)</em></p>
</div>`,

    'default': (topic) => `
<h4>Deep Dive: ${topic}</h4>
<p>This topic is fundamental to IGCSE Physics and requires both conceptual understanding and problem-solving skills. Let's explore the key concepts in more detail.</p>
<div class="example-box">
<h5>Understanding the Core Principle</h5>
<p>Physics is about modelling the natural world using mathematics. When approaching problems in this topic:</p>
<ol>
<li>Identify the physical principles involved</li>
<li>List the known and unknown quantities</li>
<li>Select the appropriate formula or law</li>
<li>Substitute values with correct units</li>
<li>Check that your answer is physically reasonable</li>
</ol>
</div>
<div class="key-point">Always start by drawing a diagram and labelling all known quantities. This simple step prevents many errors.</div>
<h4>Worked Example</h4>
<div class="example-box">
<h5>Problem-Solving Strategy</h5>
<p><strong>Step 1:</strong> Read the question carefully and identify what is being asked.</p>
<p><strong>Step 2:</strong> Extract all given information, including units.</p>
<p><strong>Step 3:</strong> Write down the relevant formula before substituting values.</p>
<p><strong>Step 4:</strong> Show all working clearly — method marks are awarded at each stage.</p>
<p><strong>Step 5:</strong> State the final answer with appropriate units and significant figures.</p>
</div>
<h4>Common Pitfalls</h4>
<ul>
<li>Forgetting to convert units to SI before calculation</li>
<li>Confusing scalars and vectors</li>
<li>Not showing substitution into formulae</li>
<li>Giving answers with incorrect significant figures</li>
<li>Not checking if the answer is physically reasonable</li>
</ul>`
  },

  chemistry: {
    'atomic-structure': () => `
<h4>Understanding Atomic Structure in Detail</h4>
<p>The atom consists of a central nucleus containing protons and neutrons, surrounded by electrons in energy levels or shells. Understanding the arrangement and behaviour of these subatomic particles is essential for explaining chemical bonding, periodic trends, and radioactivity.</p>
<h5>Subatomic Particles</h5>
<table class="data-table">
<tr><th>Particle</th><th>Relative Mass</th><th>Relative Charge</th><th>Location</th></tr>
<tr><td>Proton</td><td>1</td><td>+1</td><td>Nucleus</td></tr>
<tr><td>Neutron</td><td>1</td><td>0</td><td>Nucleus</td></tr>
<tr><td>Electron</td><td>1/1836 ≈ 0</td><td>−1</td><td>Electron shells</td></tr>
</table>
<p>The atomic number (Z) equals the number of protons and determines the element. The mass number (A) equals protons plus neutrons. In a neutral atom, the number of electrons equals the number of protons.</p>
<div class="example-box">
<h5>Worked Example: Determining Subatomic Particles</h5>
<p><strong>Question:</strong> An atom of magnesium has atomic number 12 and mass number 24. Determine the number of protons, neutrons, and electrons.</p>
<p><strong>Solution:</strong></p>
<p>Protons = atomic number = <strong>12</strong></p>
<p>Neutrons = mass number − atomic number = 24 − 12 = <strong>12</strong></p>
<p>Electrons = protons (in neutral atom) = <strong>12</strong></p>
</div>
<h4>Electronic Configuration</h4>
<p>Electrons occupy shells around the nucleus, with each shell holding a maximum number of electrons:</p>
<ul>
<li>Shell 1 (n=1): maximum 2 electrons</li>
<li>Shell 2 (n=2): maximum 8 electrons</li>
<li>Shell 3 (n=3): maximum 8 electrons (for first 20 elements)</li>
<li>Shell 4 (n=4): maximum 18 electrons</li>
</ul>
<div class="example-box">
<h5>Worked Example: Writing Electronic Configurations</h5>
<p><strong>Question:</strong> Write the electronic configuration of chlorine (Z = 17).</p>
<p><strong>Solution:</strong> Fill shells from inside out: 2, 8, 7 → <strong>2.8.7</strong></p>
<p>Chlorine has 7 electrons in its outer shell, so it needs 1 more to achieve a stable octet. This explains why chlorine forms 1− ions.</p>
</div>
<h4>Isotopes and Relative Atomic Mass</h4>
<p>Isotopes are atoms of the same element with different numbers of neutrons. They have the same atomic number but different mass numbers. The relative atomic mass (Aᵣ) is the weighted average mass of all naturally occurring isotopes.</p>
<div class="formula-box">Relative atomic mass = Σ(isotope mass × relative abundance) / 100</div>
<div class="example-box">
<h5>Worked Example: Calculating Relative Atomic Mass</h5>
<p><strong>Question:</strong> Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). Calculate the relative atomic mass of chlorine.</p>
<p><strong>Solution:</strong> Aᵣ = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <strong>35.5</strong></p>
</div>
<h4>Mass Spectrometry</h4>
<p>Mass spectrometry is an analytical technique used to determine the relative atomic mass of an element and identify isotopes. The process involves five stages:</p>
<ol>
<li><strong>Vaporisation:</strong> The sample is heated to produce a gas.</li>
<li><strong>Ionisation:</strong> An electron gun bombards atoms with high-energy electrons, removing an electron to form positive ions.</li>
<li><strong>Acceleration:</strong> Positive ions are accelerated by an electric field.</li>
<li><strong>Deflection:</strong> A magnetic field deflects ions based on their mass-to-charge ratio (m/z). Lighter ions are deflected more.</li>
<li><strong>Detection:</strong> Ions hit a detector, and the signal is recorded.</li>
</ol>
<div class="key-point">In a mass spectrum, the position of each peak indicates the mass of an isotope, while the height (or relative abundance) indicates its proportion in the sample.</div>
<h4>Exam-Style Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Bromine has two isotopes: ⁷⁹Br (50.7%) and ⁸¹Br (49.3%). Calculate the relative atomic mass of bromine to 1 decimal place.</p>
<p><em>(Answer: 79.9)</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>An ion X²⁺ has 18 electrons and a mass number of 40. Determine the atomic number of element X and the number of neutrons in this ion.</p>
<p><em>(Answer: Z = 20, neutrons = 20)</em></p>
</div>`,

    'chemical-bonding': () => `
<h4>Ionic Bonding in Detail</h4>
<p>Ionic bonding occurs between metals and non-metals through the complete transfer of electrons from the metal atom to the non-metal atom. The resulting oppositely charged ions are held together by strong electrostatic forces of attraction.</p>
<h5>Formation of Ionic Compounds</h5>
<p>When a metal atom loses electrons, it forms a positively charged ion (cation). When a non-metal atom gains electrons, it forms a negatively charged ion (anion). The compound formed is electrically neutral overall.</p>
<div class="example-box">
<h5>Worked Example: Formation of Magnesium Oxide</h5>
<p><strong>Question:</strong> Explain the formation of the ionic compound magnesium oxide (MgO).</p>
<p><strong>Solution:</strong></p>
<p>Magnesium (Group 2) has electronic configuration 2.8.2. It loses 2 electrons to form Mg²⁺ with configuration 2.8.</p>
<p>Oxygen (Group 16) has electronic configuration 2.6. It gains 2 electrons to form O²⁻ with configuration 2.8.</p>
<p>The electrostatic attraction between Mg²⁺ and O²⁻ forms the ionic bond in MgO.</p>
</div>
<h5>Properties of Ionic Compounds</h5>
<ul>
<li><strong>High melting and boiling points:</strong> Strong electrostatic forces require lots of energy to overcome.</li>
<li><strong>Soluble in water:</strong> Water molecules surround and separate the ions (hydration).</li>
<li><strong>Conduct electricity when molten or in solution:</strong> Ions are free to move and carry charge.</li>
<li><strong>Do not conduct when solid:</strong> Ions are fixed in position in the lattice.</li>
<li><strong>Brittle:</strong> When force is applied, ions of like charge align and repel, causing the crystal to shatter.</li>
</ul>
<h4>Covalent Bonding in Detail</h4>
<p>Covalent bonding occurs between non-metal atoms through the sharing of electron pairs. Each shared pair consists of one electron from each atom. The shared electrons are attracted to the nuclei of both atoms, holding them together.</p>
<h5>Types of Covalent Structures</h5>
<table class="data-table">
<tr><th>Structure</th><th>Examples</th><th>Properties</th></tr>
<tr><td>Simple molecular</td><td>H₂O, CO₂, O₂</td><td>Low melting point, non-conducting</td></tr>
<tr><td>Giant covalent (macromolecular)</td><td>Diamond, graphite, SiO₂</td><td>Very high melting point, variable conductivity</td></tr>
</table>
<div class="example-box">
<h5>Worked Example: Comparing Diamond and Graphite</h5>
<p><strong>Question:</strong> Explain why diamond is very hard while graphite is soft and slippery.</p>
<p><strong>Solution:</strong></p>
<p><strong>Diamond:</strong> Each carbon atom forms four strong covalent bonds in a rigid tetrahedral lattice. There are no weak bonds to break easily, making diamond extremely hard.</p>
<p><strong>Graphite:</strong> Each carbon atom forms three covalent bonds in hexagonal layers. The fourth electron is delocalised between layers. Weak van der Waals forces between layers allow them to slide over each other, making graphite soft and slippery.</p>
</div>
<h4>Metallic Bonding</h4>
<p>Metallic bonding occurs in metals where positive metal ions are arranged in a regular lattice, surrounded by a "sea" of delocalised electrons. The electrostatic attraction between the positive ions and the negative electron sea holds the structure together.</p>
<h5>Properties Explained by Metallic Bonding</h5>
<ul>
<li><strong>High electrical conductivity:</strong> Delocalised electrons are free to move and carry charge.</li>
<li><strong>High thermal conductivity:</strong> Electrons transfer kinetic energy rapidly through the structure.</li>
<li><strong>Malleability and ductility:</strong> Layers of ions can slide over each other without breaking bonds because the electron sea maintains the attraction.</li>
<li><strong>Lustre:</strong> Free electrons absorb and re-emit light.</li>
</ul>
<h4>Intermolecular Forces</h4>
<p>Intermolecular forces are attractions between molecules, much weaker than covalent or ionic bonds. They determine physical properties like melting point, boiling point, and viscosity.</p>
<table class="data-table">
<tr><th>Force</th><th>Relative Strength</th><th>Occurs Between</th></tr>
<tr><td>Van der Waals (London dispersion)</td><td>Weakest</td><td>All molecules</td></tr>
<tr><td>Dipole-dipole</td><td>Moderate</td><td>Polar molecules</td></tr>
<tr><td>Hydrogen bonding</td><td>Strongest intermolecular</td><td>H bonded to N, O, or F</td></tr>
</table>
<div class="key-point">Hydrogen bonding explains anomalies in the properties of water: ice is less dense than liquid water because hydrogen bonds hold molecules in an open lattice structure. Water also has an unusually high boiling point compared to similar molecules.</div>
<h4>Exam-Style Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Explain why sodium chloride has a high melting point but does not conduct electricity when solid.</p>
<p><em>(Answer: Strong electrostatic forces between ions require much energy to break; ions cannot move in solid state)</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Draw dot-and-cross diagrams to show the bonding in (a) methane (CH₄) and (b) ammonia (NH₃). State the bond angle in each molecule.</p>
<p><em>(Answers: CH₄ = 109.5°, NH₃ = 107°)</em></p>
</div>`,

    'default': (topic) => `
<h4>Deep Dive: ${topic}</h4>
<p>This topic is central to IGCSE Chemistry and connects to many other areas of the syllabus. Understanding the underlying principles will help you solve both straightforward recall questions and more complex application problems.</p>
<h5>Core Principles</h5>
<ol>
<li>Always write balanced chemical equations with correct state symbols.</li>
<li>Show all working in calculations — method marks are awarded at every stage.</li>
<li>Use the mole concept as the bridge between macroscopic measurements and atomic-scale quantities.</li>
<li>Link observations to chemical explanations — examiners reward understanding over memorisation.</li>
</ol>
<div class="example-box">
<h5>Problem-Solving Framework</h5>
<p><strong>Step 1:</strong> Identify what information is given and what is asked.</p>
<p><strong>Step 2:</strong> Write a balanced equation if relevant.</p>
<p><strong>Step 3:</strong> Calculate moles using the appropriate formula (n = mass/Mᵣ or n = c × V).</p>
<p><strong>Step 4:</strong> Use the mole ratio from the balanced equation.</p>
<p><strong>Step 5:</strong> Convert moles to the required quantity and check units.</p>
</div>
<div class="key-point">Chemistry questions often test multiple skills in sequence. A calculation might require writing an equation, calculating moles, using a mole ratio, and converting back to mass or concentration.</div>`
  },

  biology: {
    'cell-structure': () => `
<h4>The Cell Theory and Its Significance</h4>
<p>The cell theory, developed by Schleiden, Schwann, and Virchow in the 19th century, states three fundamental principles:</p>
<ol>
<li>All living organisms are composed of one or more cells.</li>
<li>The cell is the basic unit of structure and organisation in organisms.</li>
<li>All cells arise from pre-existing cells by cell division.</li>
</ol>
<p>These principles underpin all of biology. Understanding cell structure allows us to explain how organisms function, grow, reproduce, and respond to their environment.</p>
<h4>Prokaryotic vs Eukaryotic Cells: A Detailed Comparison</h4>
<table class="data-table">
<tr><th>Feature</th><th>Prokaryotic (e.g., bacteria)</th><th>Eukaryotic (e.g., animal, plant)</th></tr>
<tr><td>Nucleus</td><td>No true nucleus; nucleoid region contains circular DNA</td><td>True nucleus with double membrane (nuclear envelope) and pores</td></tr>
<tr><td>DNA</td><td>Circular, naked (no histones)</td><td>Linear, associated with histone proteins</td></tr>
<tr><td>Ribosomes</td><td>70S (smaller)</td><td>80S (larger); 70S in mitochondria and chloroplasts</td></tr>
<tr><td>Membrane-bound organelles</td><td>Absent</td><td>Present (mitochondria, ER, Golgi, lysosomes, etc.)</td></tr>
<tr><td>Cell wall</td><td>Present (contains peptidoglycan/murein)</td><td>Plant cells: present (cellulose); Animal cells: absent</td></tr>
<tr><td>Size</td><td>1–10 μm</td><td>10–100 μm</td></tr>
<tr><td>Examples</td><td>Bacteria, archaea</td><td>Animals, plants, fungi, protists</td></tr>
</table>
<div class="key-point">The presence of membrane-bound organelles is the defining feature of eukaryotic cells. Prokaryotes lack these compartments, meaning metabolic processes occur in the cytoplasm.</div>
<h4>Key Organelles and Their Functions</h4>
<h5>Nucleus</h5>
<p>The nucleus is the control centre of the cell. It contains chromosomes (DNA-protein complexes) and the nucleolus, where ribosomal RNA (rRNA) is synthesised. Nuclear pores regulate the passage of materials between the nucleus and cytoplasm, allowing mRNA to exit while preventing DNA from leaving.</p>
<h5>Mitochondria</h5>
<p>Mitochondria are the sites of aerobic respiration and ATP synthesis. They have a double membrane: the outer membrane is smooth, while the inner membrane is folded into cristae to increase surface area. The matrix contains enzymes for the Krebs cycle (A-Level) and mitochondrial DNA. Cells with high energy demands (muscle cells, sperm cells) contain many mitochondria.</p>
<h5>Endoplasmic Reticulum (ER)</h5>
<p>The rough ER is studded with ribosomes and is involved in protein synthesis and modification. Proteins enter the ER lumen, where they fold and may have carbohydrate groups added. The smooth ER lacks ribosomes and synthesises lipids, including steroids and phospholipids. It also detoxifies drugs and poisons in liver cells.</p>
<h5>Golgi Apparatus</h5>
<p>The Golgi apparatus consists of flattened membranous sacs (cisternae). It receives proteins from the ER, further modifies them (e.g., adding carbohydrate groups to form glycoproteins), packages them into vesicles, and directs them to their destinations — either secretion from the cell, incorporation into membranes, or delivery to lysosomes.</p>
<h5>Lysosomes</h5>
<p>Lysosomes are membrane-bound vesicles containing hydrolytic enzymes. They digest worn-out organelles (autophagy), break down material taken into the cell by phagocytosis, and can cause cell death (autolysis) when the cell is damaged or no longer needed.</p>
<h5>Chloroplasts (Plant Cells Only)</h5>
<p>Chloroplasts are the sites of photosynthesis. They have a double membrane, with an internal system of thylakoids arranged in stacks called grana. The stroma contains enzymes for the light-independent reactions. Chloroplasts contain their own DNA and ribosomes, supporting the endosymbiotic theory.</p>
<div class="example-box">
<h5>Worked Example: Adaptations of Epithelial Cells</h5>
<p><strong>Question:</strong> Explain how epithelial cells in the small intestine are adapted for absorption.</p>
<p><strong>Answer:</strong></p>
<ol>
<li><strong>Microvilli:</strong> Finger-like projections of the cell membrane increase surface area for absorption.</li>
<li><strong>Thin cell walls:</strong> The cells are only one cell thick, reducing the diffusion distance for nutrients.</li>
<li><strong>Many mitochondria:</strong> Provide ATP for active transport of nutrients like glucose and amino acids.</li>
<li><strong>Large surface area of membrane:</strong> Contains carrier proteins and channel proteins for facilitated diffusion and active transport.</li>
</ol>
</div>
<h4>Cell Fractionation</h4>
<p>Cell fractionation is a technique used to separate organelles from homogenised cells. The process requires:</p>
<ol>
<li><strong>Cold buffer:</strong> Maintains pH and prevents enzyme denaturation; cold reduces enzyme activity that might damage organelles.</li>
<li><strong>Isotonic solution:</strong> Prevents organelles from bursting or shrinking due to osmosis.</li>
<li><strong>Homogenisation:</strong> Cells are broken up using a blender or homogeniser.</li>
<li><strong>Filtration:</strong> Removes cell debris through gauze or mesh.</li>
<li><strong>Ultracentrifugation:</strong> Samples are spun at increasing speeds to separate organelles by density.</li>
</ol>
<table class="data-table">
<tr><th>Speed</th><th>Pellet Contains</th></tr>
<tr><td>Low speed</td><td>Nuclei (heaviest)</td></tr>
<tr><td>Medium speed</td><td>Mitochondria, lysosomes, peroxisomes</td></tr>
<tr><td>High speed</td><td>Ribosomes, small vesicles (lightest)</td></tr>
</table>
<h4>Exam-Style Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>State three ways in which a prokaryotic cell differs from a eukaryotic cell.</p>
<p><em>(Answer: No true nucleus/nucleoid instead; 70S not 80S ribosomes; no membrane-bound organelles; smaller size; peptidoglycan cell wall — any 3)</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain why mitochondria and chloroplasts are believed to have originated as free-living prokaryotes.</p>
<p><em>(Answer: Both have their own circular DNA; both have 70S ribosomes; both have double membranes; both reproduce by binary fission; similar size to bacteria)</em></p>
</div>`,

    'default': (topic) => `
<h4>Deep Dive: ${topic}</h4>
<p>This topic is essential for IGCSE Biology and frequently appears in examination questions. A thorough understanding requires linking structure to function, using precise terminology, and applying knowledge to unfamiliar contexts.</p>
<h5>Key Skills to Develop</h5>
<ol>
<li><strong>Structure-function relationships:</strong> Always explain how a structure is adapted for its function.</li>
<li><strong>Process descriptions:</strong> Use sequential language (first, then, finally) when describing biological processes.</li>
<li><strong>Data interpretation:</strong> Practise reading and interpreting graphs, tables, and experimental results.</li>
<li><strong>Application to new contexts:</strong> Examiners often present unfamiliar scenarios to test true understanding.</li>
</ol>
<div class="example-box">
<h5>Answering "Explain" Questions</h5>
<p>In biology, "explain" questions require you to give a reason or mechanism. A good structure is:</p>
<p><strong>Observation → Because → Mechanism → Therefore → Consequence</strong></p>
<p>Example: "Explain why enzymes are denatured by high temperature."</p>
<p>Enzymes are denatured by high temperature <strong>because</strong> the increased kinetic energy causes vibrations that break the hydrogen bonds and ionic bonds maintaining the tertiary structure. <strong>This means that</strong> the active site changes shape and no longer fits the substrate. <strong>Therefore,</strong> the enzyme cannot catalyse the reaction.</p>
</div>
<div class="key-point">Always use precise biological terminology in your answers. Words like "denatured", "partially permeable", "semi-conservative", and "complementary" earn specific marks.</div>`
  },

  maths: {
    'default': (topic) => `
<h4>Mathematical Reasoning: ${topic}</h4>
<p>Success in IGCSE Mathematics requires both procedural fluency and problem-solving flexibility. This topic builds on earlier foundations and connects to other areas of the syllabus.</p>
<h5>Problem-Solving Strategies</h5>
<ol>
<li><strong>Read carefully:</strong> Identify what is given and what is required. Underline key information.</li>
<li><strong>Plan your approach:</strong> Decide which mathematical tools are needed before starting calculations.</li>
<li><strong>Show all working:</strong> Method marks are awarded for correct steps, even if the final answer is wrong.</li>
<li><strong>Check your answer:</strong> Substitute back, estimate, or verify using a different method.</li>
</ol>
<div class="example-box">
<h5>Worked Example: Structured Approach</h5>
<p>When approaching any multi-step problem:</p>
<p><strong>Step 1:</strong> Define variables clearly.</p>
<p><strong>Step 2:</strong> Write down relevant formulae or theorems.</p>
<p><strong>Step 3:</strong> Substitute known values with units.</p>
<p><strong>Step 4:</strong> Solve algebraically before calculating numerically.</p>
<p><strong>Step 5:</strong> State the answer with appropriate accuracy and units.</p>
</div>
<div class="key-point">In calculator papers, use your calculator efficiently but show the calculation you are performing. In non-calculator papers, look for simplifications, factorisations, and cancellations before multiplying large numbers.</div>
<h4>Common Errors to Watch For</h4>
<ul>
<li>Sign errors when expanding brackets or collecting like terms</li>
<li>Forgetting to flip inequality signs when multiplying/dividing by negatives</li>
<li>Using the wrong trigonometric ratio — always identify opposite, adjacent, hypotenuse first</li>
<li>Incorrect unit conversions — write the conversion factor explicitly</li>
<li>Rounding too early in multi-step calculations — keep exact values until the final step</li>
</ul>`
  },

  'additional-maths': {
    'default': (topic) => `
<h4>Advanced Problem Solving: ${topic}</h4>
<p>Additional Mathematics bridges IGCSE Mathematics and A-Level. The questions are more demanding and often require combining multiple techniques in a single problem.</p>
<h5>Key Competencies</h5>
<ol>
<li><strong>Algebraic fluency:</strong> Manipulate complex expressions with confidence.</li>
<li><strong>Graphical insight:</strong> Sketch and interpret graphs of various functions.</li>
<li><strong>Calculus foundations:</strong> Apply differentiation and integration to solve problems.</li>
<li><strong>Trigonometric proficiency:</strong> Solve equations and prove identities using standard results.</li>
</ol>
<div class="example-box">
<h5>Strategy for Multi-Step Problems</h5>
<p><strong>Step 1:</strong> Analyse the given information and identify the end goal.</p>
<p><strong>Step 2:</strong> Break the problem into smaller, manageable parts.</p>
<p><strong>Step 3:</strong> Apply the appropriate technique to each part.</p>
<p><strong>Step 4:</strong> Connect the results to reach the final answer.</p>
<p><strong>Step 5:</strong> Verify your solution by checking special cases or working backwards.</p>
</div>
<div class="key-point">Additional Mathematics questions often have elegant solutions that become apparent only after careful analysis. If your calculation becomes excessively complicated, reconsider your approach.</div>`
  },

  economics: {
    'default': (topic) => `
<h4>Economic Analysis: ${topic}</h4>
<p>Economics requires the integration of theoretical models with real-world application. Examination questions test your ability to use diagrams, apply concepts to scenarios, and evaluate policies and outcomes.</p>
<h5>Effective Economic Writing</h5>
<ol>
<li><strong>Define key terms:</strong> Start with precise definitions to demonstrate knowledge.</li>
<li><strong>Use diagrams:</strong> Accurately drawn and labelled diagrams earn marks directly.</li>
<li><strong>Apply to context:</strong> Always relate your answer to the country, market, or scenario given.</li>
<li><strong>Evaluate:</strong> Consider both advantages and disadvantages before reaching a judgement.</li>
</ol>
<div class="example-box">
<h5>Evaluation Framework</h5>
<p>When evaluating economic policies or theories, consider:</p>
<ul>
<li><strong>Effectiveness:</strong> Will the policy achieve its intended goal?</li>
<li><strong>Time lags:</strong> How long before the policy takes effect?</li>
<li><strong>Unintended consequences:</strong> What negative side effects might occur?</li>
<li><strong>Costs:</strong> What are the financial, social, or political costs?</li>
<li><strong>Alternatives:</strong> Would another policy be more suitable?</li>
</ul>
</div>
<div class="key-point">Evaluation is the highest-order skill in economics. Examiners reward balanced arguments that lead to a reasoned conclusion, not just lists of pros and cons.</div>`
  },

  business: {
    'default': (topic) => `
<h4>Business Application: ${topic}</h4>
<p>Business Studies requires you to apply theoretical knowledge to real business scenarios. The case study in Paper 2 is the most challenging aspect, requiring analysis, application, and evaluation.</p>
<h5>Case Study Strategy</h5>
<ol>
<li><strong>Read the case carefully:</strong> Underline key facts about the business, its products, market, and problems.</li>
<li><strong>Identify stakeholders:</strong> Consider how decisions affect employees, customers, shareholders, and the community.</li>
<li><strong>Apply theory:</strong> Use business concepts (marketing mix, leadership styles, sources of finance) in context.</li>
<li><strong>Evaluate:</strong> Give advantages AND disadvantages before making a recommendation.</li>
</ol>
<div class="example-box">
<h5>Application Formula</h5>
<p>For maximum marks in application questions, use this structure:</p>
<p><strong>Point + Business Context + Because + This means that + Therefore</strong></p>
<p>Example: "The business should use <strong>social media marketing</strong> [point] because <strong>its target market is teenagers</strong> [context]. <strong>This means that</strong> Instagram and TikTok would reach the target audience effectively. <strong>Therefore,</strong> sales are likely to increase among this demographic."</p>
</div>
<div class="key-point">Always use the business name from the case study and refer to specific details. Generic answers that could apply to any business score poorly on application marks.</div>`
  },

  accounting: {
    'default': (topic) => `
<h4>Accounting Practice: ${topic}</h4>
<p>IGCSE Accounting tests both theoretical knowledge and practical application. Accuracy, neatness, and logical presentation are essential. Many marks are lost through careless errors rather than lack of knowledge.</p>
<h5>Double-Entry Principles</h5>
<p>Every transaction affects at least two accounts. The fundamental rule is:</p>
<ul>
<li><strong>Debit:</strong> The account that receives value (assets increase, expenses increase, drawings)</li>
<li><strong>Credit:</strong> The account that gives value (liabilities increase, income increases, capital)</li>
</ul>
<div class="example-box">
<h5>Common Transactions</h5>
<table class="data-table">
<tr><th>Transaction</th><th>Debit</th><th>Credit</th></tr>
<tr><td>Owner introduces cash</td><td>Cash/Bank</td><td>Capital</td></tr>
<tr><td>Purchase goods on credit</td><td>Purchases</td><td>Trade Payables</td></tr>
<tr><td>Sell goods for cash</td><td>Cash/Bank</td><td>Sales</td></tr>
<tr><td>Pay rent by cheque</td><td>Rent</td><td>Bank</td></tr>
<tr><td>Buy motor vehicle</td><td>Motor Vehicles</td><td>Cash/Bank/Creditor</td></tr>
</table>
</div>
<div class="key-point">When preparing financial statements, always start with the trial balance and work methodically through adjustments. A systematic approach prevents errors and makes them easier to find.</div>`
  },

  history: {
    'default': (topic) => `
<h4>Historical Analysis: ${topic}</h4>
<p>History is not about memorising dates and events — it is about understanding causation, change, continuity, and significance. Examiners reward analysis over narrative.</p>
<h5>Essay Structure</h5>
<ol>
<li><strong>Introduction:</strong> Define key terms and state your line of argument.</li>
<li><strong>Paragraphs:</strong> Each should make one point, supported by specific evidence.</li>
<li><strong>Analysis:</strong> Explain why events happened and why they matter.</li>
<li><strong>Conclusion:</strong> Directly answer the question with a clear judgement.</li>
</ol>
<div class="example-box">
<h5>Evidence and Analysis</h5>
<p><strong>Poor:</strong> "The Treaty of Versailles was signed in 1919 and Germany had to pay reparations."</p>
<p><strong>Better:</strong> "The Treaty of Versailles imposed reparations of £6.6 billion on Germany <strong>because</strong> the war guilt clause (Article 231) held Germany responsible for WWI. <strong>This meant that</strong> the German economy was crippled by debt, <strong>leading to</strong> hyperinflation in 1923 and resentment that fuelled Nazi support."</p>
</div>
<div class="key-point">Specific evidence earns marks. "On 28 June 1914, Franz Ferdinand was assassinated in Sarajevo" is far better than "in 1914 something happened". Always use names, dates, and statistics.</div>`
  },

  geography: {
    'default': (topic) => `
<h4>Geographical Skills: ${topic}</h4>
<p>Geography combines knowledge of physical and human processes with practical skills in map reading, data analysis, and fieldwork. Both aspects are examined, so balanced preparation is essential.</p>
<h5>Map Skills Checklist</h5>
<ul>
<li>Four-figure and six-figure grid references</li>
<li>Compass bearings and directions</li>
<li>Measuring straight-line and winding distances</li>
<li>Interpreting contour patterns and relief</li>
<li>Identifying land use and settlement patterns</li>
<li>Calculating gradients</li>
</ul>
<div class="example-box">
<h5>Gradient Calculation</h5>
<p><strong>Formula:</strong> Gradient = Vertical Interval / Horizontal Equivalent</p>
<p><strong>Example:</strong> If the vertical interval between two points is 100 m and the horizontal distance is 2 km (2000 m):</p>
<p>Gradient = 100 / 2000 = 1/20 = <strong>1:20</strong></p>
<p>This can also be expressed as a ratio (1:20) or percentage (5%).</p>
</div>
<div class="key-point">In data response questions, always describe the pattern before explaining it. Quote specific figures from graphs and maps to support your analysis.</div>`
  },

  ict: {
    'default': (topic) => `
<h4>ICT Systems: ${topic}</h4>
<p>IGCSE ICT tests both theoretical understanding and practical skills. The practical examination requires proficiency in word processing, spreadsheets, databases, and presentations.</p>
<h5>Number System Conversions</h5>
<p>Converting between binary, denary, and hexadecimal is a core skill:</p>
<div class="example-box">
<h5>Binary to Denary</h5>
<p>Each binary digit represents a power of 2, from right to left:</p>
<p>128 64 32 16 8 4 2 1</p>
<p><strong>Example:</strong> 10110100 = 128 + 32 + 16 + 4 = <strong>180</strong></p>
</div>
<div class="example-box">
<h5>Binary to Hexadecimal</h5>
<p>Group binary digits into sets of 4 (from the right) and convert each group:</p>
<p><strong>Example:</strong> 10110100 → 1011 0100 → B 4 → <strong>B4</strong></p>
</div>
<div class="example-box">
<h5>Denary to Binary</h5>
<p>Repeatedly divide by 2 and record remainders:</p>
<p><strong>Example:</strong> Convert 157 to binary</p>
<p>157 ÷ 2 = 78 r 1</p>
<p>78 ÷ 2 = 39 r 0</p>
<p>39 ÷ 2 = 19 r 1</p>
<p>19 ÷ 2 = 9 r 1</p>
<p>9 ÷ 2 = 4 r 1</p>
<p>4 ÷ 2 = 2 r 0</p>
<p>2 ÷ 2 = 1 r 0</p>
<p>1 ÷ 2 = 0 r 1</p>
<p>Reading remainders from bottom to top: <strong>10011101</strong></p>
</div>
<div class="key-point">In the practical examination, always save your work regularly and in the correct file format. Follow the instructions precisely — missing a small formatting requirement can cost marks.</div>`
  },

  english: {
    'default': (topic) => `
<h4>English Skills: ${topic}</h4>
<p>IGCSE English Language and Literature test reading, writing, analysis, and interpretation. Success requires both technical accuracy and creative flair.</p>
<h5>Analytical Writing Framework</h5>
<p>When analysing a text, use the <strong>PEE</strong> structure:</p>
<ul>
<li><strong>Point:</strong> Make a clear statement about the text.</li>
<li><strong>Evidence:</strong> Quote directly from the text.</li>
<li><strong>Explanation:</strong> Analyse how the writer achieves their effect.</li>
</ul>
<div class="example-box">
<h5>Analysis Example</h5>
<p><strong>Point:</strong> The writer creates a sense of foreboding.</p>
<p><strong>Evidence:</strong> "The shadows lengthened and the wind whispered secrets through the trees."</p>
<p><strong>Explanation:</strong> The personification of the wind "whispering secrets" suggests the environment itself holds hidden dangers. The verb "lengthened" implies an inevitable progression towards darkness, building tension and creating an ominous atmosphere that unsettles the reader.</p>
</div>
<div class="key-point">In literature essays, always link your analysis to the writer's purpose or the text's themes. Analysis without purpose is description, not interpretation.</div>`
  },

  chinese: {
    'default': (topic) => `
<h4>中文学习深入解析：${topic}</h4>
<p>IGCSE中文考试要求学生在听、说、读、写四个方面都有扎实的基础。深入理解语言结构和文化背景是提高成绩的关键。</p>
<h5>阅读理解策略</h5>
<ol>
<li><strong>通读全文：</strong>先快速浏览文章，把握大意和结构。</li>
<li><strong>分析问题：</strong>仔细阅读题目，明确考查要点。</li>
<li><strong>定位信息：</strong>根据关键词回到原文找答案。</li>
<li><strong>组织答案：</strong>用自己的话概括，确保完整准确。</li>
</ol>
<div class="example-box">
<h5>写作要点</h5>
<p>高分作文的特征：</p>
<ul>
<li>立意明确，中心突出</li>
<li>结构完整，过渡自然</li>
<li>语言丰富，修辞得当</li>
<li>书写工整，标点正确</li>
</ul>
</div>
<div class="key-point">语言学习贵在坚持。每天阅读中文材料，积累词汇和表达方式，是提高语言能力的根本途径。</div>`
  },

  psychology: {
    'default': (topic) => `
<h4>Psychological Inquiry: ${topic}</h4>
<p>Psychology is the scientific study of behaviour and mental processes. IGCSE Psychology requires understanding of theories, research methods, and the ability to evaluate studies critically.</p>
<h5>Research Methods Evaluation</h5>
<p>When evaluating psychological research, consider:</p>
<ul>
<li><strong>Reliability:</strong> Would the study produce consistent results if repeated?</li>
<li><strong>Validity:</strong> Does the study measure what it claims to measure?</li>
<li><strong>Ethics:</strong> Were participants protected from harm? Was informed consent obtained?</li>
<li><strong>Generalisability:</strong> Can findings be applied to other populations or settings?</li>
</ul>
<div class="example-box">
<h5>Study Description Framework</h5>
<p>When describing a psychological study, include:</p>
<ol>
<li><strong>Aim:</strong> What was the researcher trying to find out?</li>
<li><strong>Method/Procedure:</strong> What did participants do?</li>
<li><strong>Sample:</strong> Who participated and how were they selected?</li>
<li><strong>Results:</strong> What were the key findings?</li>
<li><strong>Conclusion:</strong> What do the results mean?</li>
</ol>
</div>
<div class="key-point">Evaluation is the highest skill in psychology. Always give specific strengths and weaknesses with evidence, not vague statements like "the sample was small".</div>`
  }
};

// Generic fallback for any subject not specifically handled
const genericGenerator = (topic) => `
<h4>Detailed Study Guide: ${topic}</h4>
<p>This topic is an important part of the IGCSE syllabus. Understanding the core concepts, practising application questions, and developing effective examination techniques will help you achieve your best grade.</p>
<h5>Study Strategies</h5>
<ol>
<li><strong>Active recall:</strong> Test yourself regularly rather than re-reading notes passively.</li>
<li><strong>Spaced repetition:</strong> Review material at increasing intervals to strengthen memory.</li>
<li><strong>Practice questions:</strong> Work through past paper questions under timed conditions.</li>
<li><strong>Identify weak areas:</strong> Focus extra time on topics you find challenging.</li>
</ol>
<div class="example-box">
<h5>Examination Technique</h5>
<p><strong>Before the exam:</strong></p>
<ul>
<li>Ensure you know the command words and what each requires</li>
<li>Memorise key definitions, formulae, and facts</li>
<li>Practise time management with past papers</li>
</ul>
<p><strong>During the exam:</strong></p>
<ul>
<li>Read each question carefully before answering</li>
<li>Plan longer answers with a brief outline</li>
<li>Show all working in calculation questions</li>
<li>Check your answers if time permits</li>
</ul>
</div>
<div class="key-point">Consistent, focused practice is more effective than last-minute cramming. Aim to do a little revision every day rather than marathon sessions.</div>`;

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

function getTopicHint(file) {
  // Extract topic from filename
  const base = file.replace('-igcse.html', '');
  const parts = base.split('-');
  return parts.slice(1).join('-');
}

function getContentForFile(file, subject, topicHint) {
  const generators = contentGenerators[subject] || {};
  
  // Try to find specific content for this topic
  const specificKeys = Object.keys(generators).filter(k => k !== 'default');
  for (const key of specificKeys) {
    if (topicHint.includes(key) || key.includes(topicHint)) {
      return generators[key]();
    }
  }
  
  // Check if any key is contained in the topic hint
  for (const key of specificKeys) {
    // Map topic hints to keys
    const topicMappings = {
      'physical-quantities': ['p1', 'physical'],
      'kinematics': ['p2', 'kinematic', 'motion'],
      'atomic-structure': ['c1', 'atomic'],
      'chemical-bonding': ['c2', 'bonding']
    };
    
    for (const [mapKey, hints] of Object.entries(topicMappings)) {
      if (hints.some(h => topicHint.includes(h)) && key === mapKey) {
        return generators[key]();
      }
    }
  }
  
  // Fall back to default generator
  if (generators.default) {
    return generators.default(topicHint);
  }
  
  return genericGenerator(topicHint);
}

let enhanced = 0;
let skipped = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Skip if already has deep-content marker
  if (content.includes('deep-content') || content.includes('Deep Dive')) {
    skipped++;
    return;
  }

  const subject = getSubject(file);
  const topicHint = getTopicHint(file);
  const additionalContent = getContentForFile(file, subject, topicHint);

  // Insert before summary-box or exam-tips
  let insertIdx = content.indexOf('class="summary-box"');
  if (insertIdx === -1) insertIdx = content.indexOf('class="exam-tips"');
  
  if (insertIdx > 0) {
    // Find the start of this div
    const divStart = content.lastIndexOf('<div', insertIdx);
    if (divStart > 0) {
      content = content.slice(0, divStart) + additionalContent + '\n' + content.slice(divStart);
      fs.writeFileSync(filepath, content);
      enhanced++;
    }
  } else {
    skipped++;
  }
});

console.log(`Content enhanced: ${enhanced}, Skipped: ${skipped}`);
