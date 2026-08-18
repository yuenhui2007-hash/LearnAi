#!/usr/bin/env node
/**
 * Fifth-pass IGCSE enhancer — adds mark schemes, examiner tips,
 * memory aids, cross-topic links, and more practice questions.
 */
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir)
  .filter(f => f.endsWith('-igcse.html') && !f.endsWith('-summary.html'))
  .filter(f => !f.startsWith('edexcel') && !f.startsWith('ib'));

const pass5Content = {
  physics: () => `
<h4>Quick Recall Flashcards</h4>
<div class="key-point" style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); border-left-color: #8b5cf6;">
<h5 style="color: #5b21b6; margin-top: 0;">⚡ Memorise These</h5>
<ul style="color: #4c1d95;">
<li><strong>Scalar quantities:</strong> Distance, speed, mass, time, energy, power, temperature, density, pressure</li>
<li><strong>Vector quantities:</strong> Displacement, velocity, acceleration, force, weight, momentum, electric field strength</li>
<li><strong>1 km/h = 1000/3600 m/s = 5/18 m/s ≈ 0.278 m/s</strong></li>
<li><strong>1 g/cm³ = 1000 kg/m³</strong></li>
<li><strong>Weight = mass × g</strong> (W = mg, unit: newtons)</li>
<li><strong>Density = mass / volume</strong> (ρ = m/V)</li>
</ul>
</div>

<h4>Examiner's Top Tips for This Topic</h4>
<div class="exam-tips" style="background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%); border-left-color: #f97316;">
<h5 style="color: #9a3412; margin-top: 0;">🎓 From the Mark Scheme</h5>
<ul style="color: #7c2d12;">
<li>Always write the equation in symbol form before substituting numbers — this earns the method mark even if your arithmetic is wrong.</li>
<li>For projectile motion, resolve into horizontal and vertical components before doing any calculations.</li>
<li>When sketching graphs, label axes with quantity and unit, and mark key values.</li>
<li>If asked to "show that" an answer is approximately correct, substitute your answer back into the equation.</li>
<li>Remember that deceleration means negative acceleration — state this explicitly.</li>
</ul>
</div>

<h4>Links to Other Topics</h4>
<div class="diagram-box" style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-left-color: #10b981;">
<h5 style="color: #065f46; margin-top: 0;">🔗 How This Connects</h5>
<ul style="color: #064e3b;">
<li><strong>Forces and motion:</strong> Newton's laws build directly on kinematics — acceleration is caused by unbalanced force (F = ma).</li>
<li><strong>Work, energy, and power:</strong> Kinetic energy (½mv²) and gravitational potential energy (mgh) use the same variables as kinematics.</li>
<li><strong>Circular motion (A-Level):</strong> Centripetal acceleration extends these concepts to curved paths.</li>
<li><strong>Momentum:</strong> The impulse-momentum theorem (FΔt = mΔv) connects force to change in velocity.</li>
</ul>
</div>

<h4>Additional Practice with Mark Schemes</h4>
<div class="example-box">
<h5>Question 4 [3 marks]</h5>
<p>A stone falls from rest from the top of a well. It hits the water after 2.5 s. Calculate (a) the speed at impact and (b) the depth of the well. (g = 9.81 m/s²)</p>
<p><strong>Mark Scheme:</strong></p>
<p>(a) v = u + at = 0 + 9.81 × 2.5 = 24.5 m/s [1 mark for correct formula, 1 mark for answer]</p>
<p>(b) s = ut + ½at² = 0 + ½ × 9.81 × 2.5² = 30.7 m [1 mark]</p>
<p><em>Accept s = ½(u+v)t = ½(0+24.5)(2.5) = 30.6 m</em></p>
</div>
<div class="example-box">
<h5>Question 5 [4 marks]</h5>
<p>A car travelling at 20 m/s approaches traffic lights 50 m away. The driver brakes with constant deceleration and stops exactly at the lights. Calculate the braking time.</p>
<p><strong>Mark Scheme:</strong></p>
<p>s = ½(u+v)t → 50 = ½(20+0)t [1 mark for correct equation]</p>
<p>50 = 10t [1 mark for substitution]</p>
<p>t = 5.0 s [1 mark for answer, 1 mark for unit]</p>
<p><em>Alternative: v² = u² + 2as → 0 = 400 + 100a → a = −4 m/s², then t = (v−u)/a = 5 s</em></p>
</div>`,

  chemistry: () => `
<h4>Quick Recall Flashcards</h4>
<div class="key-point" style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); border-left-color: #8b5cf6;">
<h5 style="color: #5b21b6; margin-top: 0;">⚡ Memorise These</h5>
<ul style="color: #4c1d95;">
<li><strong>Proton: mass 1, charge +1</strong> — defines the element</li>
<li><strong>Neutron: mass 1, charge 0</strong> — creates isotopes</li>
<li><strong>Electron: mass negligible, charge −1</strong> — involved in bonding</li>
<li><strong>Ionic bond:</strong> Metal + non-metal, electron transfer, strong electrostatic attraction</li>
<li><strong>Covalent bond:</strong> Non-metal + non-metal, electron sharing</li>
<li><strong>Metallic bond:</strong> Metal + metal, delocalised electron sea</li>
<li><strong>1 mole = 6.02 × 10²³ particles</strong> (Avogadro's constant)</li>
<li><strong>n = mass/Mᵣ = concentration × volume(dm³)</strong></li>
</ul>
</div>

<h4>Examiner's Top Tips for This Topic</h4>
<div class="exam-tips" style="background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%); border-left-color: #f97316;">
<h5 style="color: #9a3412; margin-top: 0;">🎓 From the Mark Scheme</h5>
<ul style="color: #7c2d12;">
<li>State symbols (s, l, g, aq) earn marks when specifically asked for — don't forget them!</li>
<li>In dot-and-cross diagrams, show ALL outer shell electrons including lone pairs.</li>
<li>For intermolecular forces, always name the specific type — "weak bonds" is too vague.</li>
<li>In mass spectrometry, mention m/z ratio when explaining deflection — this is the key concept.</li>
<li>When comparing properties, always link to the type and strength of bonding.</li>
</ul>
</div>

<h4>Links to Other Topics</h4>
<div class="diagram-box" style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-left-color: #10b981;">
<h5 style="color: #065f46; margin-top: 0;">🔗 How This Connects</h5>
<ul style="color: #064e3b;">
<li><strong>Stoichiometry:</strong> Atomic structure underpins all mole calculations.</li>
<li><strong>Periodicity:</strong> Electronic configuration determines position in the Periodic Table and chemical properties.</li>
<li><strong>Chemical bonding:</strong> Atomic structure explains why atoms bond and how.</li>
<li><strong>Organic chemistry:</strong> Covalent bonding principles explain shapes, polarity, and reactivity of organic molecules.</li>
</ul>
</div>

<h4>Additional Practice with Mark Schemes</h4>
<div class="example-box">
<h5>Question 4 [4 marks]</h5>
<p>A sample of boron contains two isotopes: ¹⁰B (20%) and ¹¹B (80%).</p>
<p>(a) Define the term isotope. [1]</p>
<p>(b) Calculate the relative atomic mass of boron. [2]</p>
<p>(c) Explain why both isotopes have identical chemical properties. [1]</p>
<p><strong>Mark Scheme:</strong></p>
<p>(a) Atoms of the same element with the same number of protons but different numbers of neutrons [1]</p>
<p>(b) Aᵣ = (10 × 20 + 11 × 80) / 100 [1] = 10.8 [1]</p>
<p>(c) Same number of electrons / same electron configuration [1] → same chemical behaviour</p>
</div>
<div class="example-box">
<h5>Question 5 [3 marks]</h5>
<p>Explain why magnesium oxide (MgO) has a higher melting point than sodium chloride (NaCl).</p>
<p><strong>Mark Scheme:</strong></p>
<p>Mg²⁺ and O²⁻ have higher charges than Na⁺ and Cl⁻ [1]</p>
<p>Stronger electrostatic attraction between ions [1]</p>
<p>More energy required to break the ionic lattice [1]</p>
</div>`,

  biology: () => `
<h4>Quick Recall Flashcards</h4>
<div class="key-point" style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); border-left-color: #8b5cf6;">
<h5 style="color: #5b21b6; margin-top: 0;">⚡ Memorise These</h5>
<ul style="color: #4c1d95;">
<li><strong>Prokaryotes:</strong> No nucleus, no membrane-bound organelles, 70S ribosomes, peptidoglycan cell wall</li>
<li><strong>Eukaryotes:</strong> True nucleus, membrane-bound organelles, 80S ribosomes</li>
<li><strong>Mitochondria:</strong> Double membrane, cristae, ATP production, aerobic respiration</li>
<li><strong>Chloroplasts:</strong> Thylakoids, grana, stroma, photosynthesis</li>
<li><strong>RER:</strong> Protein synthesis; <strong>SER:</strong> Lipid synthesis</li>
<li><strong>Golgi:</strong> Modifies, packages, transports proteins</li>
<li><strong>Lysosomes:</strong> Hydrolytic enzymes, digestion, autophagy</li>
<li><strong>Cell fractionation:</strong> Homogenise → filter → ultracentrifuge (low → medium → high speed)</li>
</ul>
</div>

<h4>Examiner's Top Tips for This Topic</h4>
<div class="exam-tips" style="background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%); border-left-color: #f97316;">
<h5 style="color: #9a3412; margin-top: 0;">🎓 From the Mark Scheme</h5>
<ul style="color: #7c2d12;">
<li>Always link structure to function — "the mitochondria have folded cristae BECAUSE this increases surface area for ATP production."</li>
<li>Use precise terminology: "partially permeable" not "has holes", "denatured" not "killed".</li>
<li>For comparisons, always mention BOTH items explicitly — e.g., "prokaryotes have 70S ribosomes WHILE eukaryotes have 80S ribosomes."</li>
<li>When describing organelles, mention at least TWO structural features and their functions.</li>
<li>In cell fractionation, explain WHY cold and isotonic conditions are used.</li>
</ul>
</div>

<h4>Links to Other Topics</h4>
<div class="diagram-box" style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-left-color: #10b981;">
<h5 style="color: #065f46; margin-top: 0;">🔗 How This Connects</h5>
<ul style="color: #064e3b;">
<li><strong>Cell transport:</strong> Cell membrane structure (fluid mosaic model) explains diffusion, osmosis, and active transport.</li>
<li><strong>Enzymes:</strong> Protein structure (synthesised on ribosomes, modified by Golgi) determines enzyme specificity.</li>
<li><strong>Photosynthesis and respiration:</strong> Chloroplasts and mitochondria are the sites of these energy processes.</li>
<li><strong>Cell division:</strong> Nucleus contains chromosomes that replicate and separate during mitosis.</li>
</ul>
</div>

<h4>Additional Practice with Mark Schemes</h4>
<div class="example-box">
<h5>Question 4 [4 marks]</h5>
<p>A student observed a cell under a microscope. The cell had a cell wall, chloroplasts, and a large central vacuole.</p>
<p>(a) Identify the type of cell. [1]</p>
<p>(b) Name two structures present in this cell that are not present in animal cells and explain their functions. [3]</p>
<p><strong>Mark Scheme:</strong></p>
<p>(a) Plant cell [1]</p>
<p>(b) Any two from:</p>
<ul>
<li>Cell wall [½] — provides support and maintains cell shape [½]</li>
<li>Chloroplasts [½] — site of photosynthesis [½]</li>
<li>Large vacuole [½] — maintains turgor pressure / stores water and ions [½]</li>
</ul>
</div>
<div class="example-box">
<h5>Question 5 [3 marks]</h5>
<p>Explain why mitochondria are more numerous in muscle cells than in skin cells.</p>
<p><strong>Mark Scheme:</strong></p>
<p>Muscle cells require more energy/ATP [1]</p>
<p>Mitochondria are the site of aerobic respiration/ATP production [1]</p>
<p>Muscle cells contract frequently / have high metabolic activity [1]</p>
</div>`,

  maths: () => `
<h4>Quick Recall Flashcards</h4>
<div class="key-point" style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); border-left-color: #8b5cf6;">
<h5 style="color: #5b21b6; margin-top: 0;">⚡ Memorise These</h5>
<ul style="color: #4c1d95;">
<li><strong>Area of triangle:</strong> ½ × base × height</li>
<li><strong>Area of circle:</strong> πr²; Circumference:</strong> 2πr or πd</li>
<li><strong>Pythagoras:</strong> a² + b² = c² (right-angled triangles)</li>
<li><strong>SOH CAH TOA:</strong> sin = opp/hyp, cos = adj/hyp, tan = opp/adj</li>
<li><strong>Sine rule:</strong> a/sinA = b/sinB = c/sinC</li>
<li><strong>Cosine rule:</strong> a² = b² + c² − 2bc cosA</li>
<li><strong>Quadratic formula:</strong> x = (−b ± √(b² − 4ac)) / 2a</li>
<li><strong>Compound interest:</strong> A = P(1 + r/100)ⁿ</li>
</ul>
</div>

<h4>Examiner's Top Tips for This Topic</h4>
<div class="exam-tips" style="background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%); border-left-color: #f97316;">
<h5 style="color: #9a3412; margin-top: 0;">🎓 From the Mark Scheme</h5>
<ul style="color: #7c2d12;">
<li>Show substitution into formulae — write the formula, then the numbers, then the answer.</li>
<li>For construction questions, leave all construction lines visible — they are part of the method.</li>
<li>Check if your answer is reasonable — a probability greater than 1 is clearly wrong.</li>
<li>When asked to give an answer to a specific accuracy, do exactly that — not more, not less.</li>
<li>In non-calculator papers, look for factorisations and cancellations before multiplying.</li>
</ul>
</div>

<h4>Links to Other Topics</h4>
<div class="diagram-box" style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-left-color: #10b981;">
<h5 style="color: #065f46; margin-top: 0;">🔗 How This Connects</h5>
<ul style="color: #064e3b;">
<li><strong>Algebra:</strong> Solving equations underpins all problem-solving in mathematics.</li>
<li><strong>Geometry:</strong> Pythagoras and trigonometry connect to vectors and coordinate geometry.</li>
<li><strong>Statistics:</strong> Probability links to set theory and combinatorics.</li>
<li><strong>Graphs:</strong> Understanding functions is essential for calculus at A-Level.</li>
</ul>
</div>

<h4>Additional Practice with Mark Schemes</h4>
<div class="example-box">
<h5>Question 4 [4 marks]</h5>
<p>Solve the simultaneous equations:</p>
<p>3x + 4y = 18</p>
<p>5x − 2y = 4</p>
<p><strong>Mark Scheme:</strong></p>
<p>Multiply second equation by 2: 10x − 4y = 8 [1]</p>
<p>Add to first equation: 13x = 26 → x = 2 [1]</p>
<p>Substitute: 3(2) + 4y = 18 → 6 + 4y = 18 → y = 3 [1 mark for substitution, 1 mark for answer]</p>
</div>
<div class="example-box">
<h5>Question 5 [3 marks]</h5>
<p>A map has a scale of 1 : 25,000. A rectangular field measures 3.2 cm by 5.6 cm on the map. Calculate the actual area of the field in m².</p>
<p><strong>Mark Scheme:</strong></p>
<p>Actual length = 3.2 × 25,000 = 80,000 cm = 800 m [½]</p>
<p>Actual width = 5.6 × 25,000 = 140,000 cm = 1,400 m [½]</p>
<p>Area = 800 × 1,400 = 1,120,000 m² [1]</p>
<p><em>Alternative: Map area = 3.2 × 5.6 = 17.92 cm². Actual area = 17.92 × (25,000)² cm² = ... convert to m²</em></p>
</div>`,

  generic: () => `
<h4>Quick Recall Flashcards</h4>
<div class="key-point" style="background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); border-left-color: #8b5cf6;">
<h5 style="color: #5b21b6; margin-top: 0;">⚡ Memorise These</h5>
<ul style="color: #4c1d95;">
<li>Read the question carefully and identify the command word before starting.</li>
<li>Show all working — method marks are awarded for correct approach.</li>
<li>Use correct terminology throughout your answers.</li>
<li>Plan longer answers before writing to ensure a clear structure.</li>
<li>Check your answers for accuracy and completeness.</li>
</ul>
</div>

<h4>Examiner's Top Tips</h4>
<div class="exam-tips" style="background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%); border-left-color: #f97316;">
<h5 style="color: #9a3412; margin-top: 0;">🎓 From the Mark Scheme</h5>
<ul style="color: #7c2d12;">
<li>Use the marks available as a guide to the depth required.</li>
<li>For "explain" questions, always give a reason — use "because".</li>
<li>Include diagrams where appropriate — even rough sketches can earn marks.</li>
<li>Manage your time according to the marks for each question.</li>
<li>Leave time at the end to review and correct errors.</li>
</ul>
</div>

<h4>Additional Practice</h4>
<div class="example-box">
<h5>Question</h5>
<p>Review the key concepts from this topic and explain how they connect to the wider syllabus.</p>
<p><strong>Mark Scheme:</strong></p>
<p>Identify at least two connections to other topics [1 each]</p>
<p>Explain the relationship clearly [1 each]</p>
</div>`
};

function getSubject(file) {
  if (file.startsWith('additional-maths')) return 'maths';
  if (file.startsWith('biology')) return 'biology';
  if (file.startsWith('chemistry')) return 'chemistry';
  if (file.startsWith('physics')) return 'physics';
  if (file.startsWith('maths')) return 'maths';
  return 'generic';
}

let enhanced = 0;
let skipped = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Skip if already has pass5 content
  if (content.includes('Quick Recall Flashcards') || content.includes('Examiner\'s Top Tips')) {
    skipped++;
    return;
  }

  const subject = getSubject(file);
  const additionalContent = pass5Content[subject] || pass5Content.generic;

  // Insert before closing </div></div></section> or before </div></div></section>
  let insertIdx = content.lastIndexOf('</div>\n</div>\n</section>');
  if (insertIdx === -1) insertIdx = content.lastIndexOf('</div></div></section>');
  
  if (insertIdx > 0) {
    content = content.slice(0, insertIdx) + additionalContent + '\n' + content.slice(insertIdx);
    fs.writeFileSync(filepath, content);
    enhanced++;
  } else {
    skipped++;
  }
});

console.log(`Pass 5 enhanced: ${enhanced}, Skipped: ${skipped}`);
