#!/usr/bin/env node
// ZNotes/SaveMyExams style enhancer — works with existing file structure
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

console.log(`Found ${files.length} detailed note files to process`);

let enhanced = 0;
let skipped = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Skip if already has ZNotes content
  if (content.includes('worked-example') || content.includes('common-mistake') || content.includes('key-point')) {
    skipped++;
    return;
  }

  // Identify subject
  const subject = file.split('-')[0];

  // Build ZNotes additions based on subject
  let additions = '';

  if (subject === 'physics') {
    additions = `
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> A ball is thrown vertically upwards at 20 m/s. Calculate the maximum height reached. (g = 9.81 m/s²)</p>
<div class="solution">
<strong>Solution:</strong><br>
At max height, v = 0. Using v² = u² + 2as:<br>
0 = 20² + 2(−9.81)s<br>
0 = 400 − 19.62s<br>
s = 400 / 19.62 = 20.4 m<br>
<strong>Answer: 20.4 m</strong>
</div>
</div>
<div class="common-mistake">Using g = +9.81 m/s² when the object is moving upwards — g always acts downwards, so use −9.81 m/s² for upward motion.</div>
<div class="key-point">Always draw a diagram and define your positive direction before solving kinematics problems.</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>v = u + at (no displacement)</li>
<li>s = ut + ½at² (no final velocity)</li>
<li>v² = u² + 2as (no time)</li>
<li>s = ½(u+v)t (no acceleration)</li>
<li>All apply only for constant acceleration</li>
</ul>
</div>`;
  } else if (subject === 'chemistry') {
    additions = `
<div class="worked-example">
<h4>🧪 Worked Example</h4>
<p><strong>Question:</strong> Calculate the mass of NaOH needed to make 500 cm³ of 0.2 mol/dm³ solution. (Mᵣ NaOH = 40)</p>
<div class="solution">
<strong>Solution:</strong><br>
n = c × V = 0.2 × (500/1000) = 0.1 mol<br>
mass = n × Mᵣ = 0.1 × 40 = 4.0 g<br>
<strong>Answer: 4.0 g</strong>
</div>
</div>
<div class="common-mistake">Forgetting to convert cm³ to dm³ (÷1000) when using n = c × V. Always check your units!</div>
<div class="key-point">In a balanced equation, mole ratios are the stoichiometric coefficients. Use these to convert between substances.</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>n = mass / Mᵣ</li>
<li>n = concentration × volume (dm³)</li>
<li>1 dm³ = 1000 cm³</li>
<li>% yield = (actual / theoretical) × 100</li>
</ul>
</div>`;
  } else if (subject === 'biology') {
    additions = `
<div class="worked-example">
<h4>🔬 Worked Example</h4>
<p><strong>Question:</strong> Explain how the structure of the small intestine is adapted for absorption.</p>
<div class="solution">
<strong>Answer:</strong><br>
1. <strong>Villi:</strong> Finger-like projections increase surface area<br>
2. <strong>Microvilli:</strong> Further increase surface area on epithelial cells<br>
3. <strong>Thin walls:</strong> Single cell layer reduces diffusion distance<br>
4. <strong>Rich blood supply:</strong> Maintains concentration gradient<br>
5. <strong>Lacteals:</strong> Absorb fatty acids and glycerol<br>
</div>
</div>
<div class="common-mistake">Confusing absorption (taking nutrients into blood) with assimilation (incorporating nutrients into cells/tissues).</div>
<div class="key-point">Surface area to volume ratio is crucial — as organisms get larger, SA:V decreases, requiring specialised exchange surfaces.</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</li>
<li>Enzymes: Biological catalysts; specific active site</li>
<li>DNA replication: Semi-conservative</li>
<li>Natural selection: Variation → selection → inheritance</li>
</ul>
</div>`;
  } else if (subject === 'maths') {
    additions = `
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> Differentiate y = 3x⁴ + 2x² − 5x + 7</p>
<div class="solution">
<strong>Solution:</strong><br>
dy/dx = 3(4x³) + 2(2x) − 5(1) + 0<br>
dy/dx = 12x³ + 4x − 5<br>
<strong>Answer: dy/dx = 12x³ + 4x − 5</strong>
</div>
</div>
<div class="common-mistake">Forgetting the +c (constant of integration) for indefinite integrals. You'll lose a mark!</div>
<div class="key-point">The chain rule: if y = f(g(x)), then dy/dx = f'(g(x)) × g'(x). Use for functions inside functions.</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>d/dx(xⁿ) = nxⁿ⁻¹</li>
<li>∫xⁿ dx = xⁿ⁺¹/(n+1) + c</li>
<li>Chain rule: dy/dx = dy/du × du/dx</li>
<li>Stationary points: dy/dx = 0; d²y/dx² > 0 = min</li>
</ul>
</div>`;
  } else if (subject === 'history') {
    additions = `
<div class="worked-example">
<h4>📜 Worked Example</h4>
<p><strong>Question:</strong> To what extent was Germany responsible for WWI?</p>
<div class="solution">
<strong>Essay Plan:</strong><br>
<strong>FOR:</strong> Blank cheque, Schlieffen Plan, naval expansion, Fischer thesis<br>
<strong>AGAINST:</strong> Austrian ultimatum, Russian mobilisation, alliance system, Clark "sleepwalkers"<br>
<strong>Conclusion:</strong> Significant responsibility but not sole blame
</div>
</div>
<div class="common-mistake">Writing narrative instead of analysis. History essays need CAUSATION — explain WHY and SIGNIFICANCE.</div>
<div class="key-point">Always use SPECIFIC EVIDENCE — dates, names, statistics. "On 28 June 1914" not "in 1914".</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>Long-term: Militarism, Alliances, Imperialism, Nationalism</li>
<li>Short-term: Assassination of Franz Ferdinand</li>
<li>Treaty of Versailles: War guilt, reparations, territorial losses</li>
<li>Cold War: Containment, Truman Doctrine, Marshall Plan</li>
</ul>
</div>`;
  } else if (subject === 'geometry') {
    additions = `
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> Find the interior angle of a regular decagon.</p>
<div class="solution">
<strong>Solution:</strong><br>
n = 10<br>
Interior angle = (n − 2) × 180° / n<br>
= (10 − 2) × 180° / 10 = 8 × 18° = 144°<br>
<strong>Answer: 144°</strong>
</div>
</div>
<div class="common-mistake">Confusing interior and exterior angles. Exterior angles of ANY polygon always sum to 360°.</div>
<div class="key-point">For regular polygons: interior + exterior = 180°. Use this to check your answers.</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>Interior angle sum = (n − 2) × 180°</li>
<li>Exterior angle sum = 360°</li>
<li>Regular polygon interior = (n−2)×180°/n</li>
<li>Pythagoras: a² + b² = c²</li>
</ul>
</div>`;
  } else if (subject === 'ict') {
    additions = `
<div class="worked-example">
<h4>💻 Worked Example</h4>
<p><strong>Question:</strong> Convert denary 157 to 8-bit binary.</p>
<div class="solution">
<strong>Solution:</strong><br>
128 + 16 + 8 + 4 + 1 = 157<br>
1 0 0 1 1 1 0 1<br>
<strong>Answer: 10011101</strong>
</div>
</div>
<div class="common-mistake">Confusing bits and bytes. 1 byte = 8 bits. File sizes in bytes; transfer speeds in bits.</div>
<div class="key-point">Fetch-decode-execute: 1) Fetch instruction from memory, 2) Decode operation, 3) Execute. Repeats millions of times/second.</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>CPU: ALU + CU + Registers</li>
<li>RAM: Volatile; ROM: Non-volatile</li>
<li>LAN: Local; WAN: Wide</li>
<li>Binary to hex: Group in 4s from right</li>
</ul>
</div>`;
  } else {
    // Generic enhancement for other subjects
    additions = `
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> See the detailed notes above for practice questions on this topic.</p>
<div class="solution">
<strong>Solution:</strong> Work through the examples in the detailed notes. Practice is essential for exam success.
</div>
</div>
<div class="common-mistake">Always read the question carefully and identify the command words before answering.</div>
<div class="key-point">Focus on understanding concepts, not just memorising facts. This is key to exam success.</div>
<div class="quick-recall">
<h4>⚡ Quick Recall</h4>
<ul>
<li>Read the question carefully</li>
<li>Plan your answer before writing</li>
<li>Use specific evidence and examples</li>
<li>Check your work before submitting</li>
</ul>
</div>`;
  }

  // Find "Exam Tips" section or "Last-Minute Summary" and insert before
  let insertIdx = content.indexOf('<h2>Exam Tips</h2>');
  if (insertIdx === -1) {
    insertIdx = content.indexOf('<h2>Last-Minute Summary</h2>');
  }
  if (insertIdx === -1) {
    insertIdx = content.indexOf('class="summary-box"');
  }

  if (insertIdx > 0) {
    // Insert before this section
    content = content.slice(0, insertIdx) + additions + '\n' + content.slice(insertIdx);
    fs.writeFileSync(filepath, content);
    enhanced++;
  } else {
    // Append before closing </div> of notes-container
    const containerEnd = content.lastIndexOf('</div>');
    if (containerEnd > 0) {
      content = content.slice(0, containerEnd) + additions + content.slice(containerEnd);
      fs.writeFileSync(filepath, content);
      enhanced++;
    }
  }
});

console.log(`Enhanced: ${enhanced}, Skipped (already enhanced): ${skipped}`);
