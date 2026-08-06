const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

// Generic expansions by subject
const subjectExpansions = {
  physics: () => `
<div class="notes-section">
<h3>Additional Applications</h3>
<ul>
<li><strong>Real-world context:</strong> Engineering applications, medical physics, environmental monitoring</li>
<li><strong>Experimental methods:</strong> Common apparatus, measurement techniques, error analysis</li>
<li><strong>SI units in practice:</strong> Prefix usage in scientific and everyday contexts</li>
</ul>
</div>
<div class="notes-section">
<h3>Common Exam Question Types</h3>
<ul>
<li>Definition questions — state precisely, use correct terminology</li>
<li>Calculation questions — show working, include units, check significant figures</li>
<li>Explanation questions — use "because" to link cause and effect</li>
<li>Graph questions — read axes carefully, describe trends using data</li>
</ul>
<div class="key-point">Always define quantities before using them in explanations. E.g., "Force is the rate of change of momentum, therefore..."</div>
</div>`,
  chemistry: () => `
<div class="notes-section">
<h3>Laboratory Techniques</h3>
<ul>
<li><strong>Titration:</strong> Burette reading to 2 decimal places, indicator choice, repeat for concordance</li>
<li><strong>Chromatography:</strong> Paper, TLC, and gas chromatography principles</li>
<li><strong>Recrystallisation:</strong> Dissolve, filter hot, cool, filter, dry</li>
<li><strong>Distillation:</strong> Simple vs fractional, when to use each</li>
</ul>
</div>
<div class="notes-section">
<h3>Chemical Calculations</h3>
<ul>
<li><strong>Moles:</strong> n = mass/Mᵣ, n = concentration × volume, n = V/24 dm³ at RTP</li>
<li><strong>Percentage yield:</strong> (actual/theoretical) × 100%</li>
<li><strong>Atom economy:</strong> (Mᵣ desired / Mᵣ all products) × 100%</li>
<li><strong>Limiting reagent:</strong> Calculate moles of each reactant, compare mole ratios</li>
</ul>
<div class="worked-example">
<h4>⚗️ Worked Example</h4>
<p><strong>Question:</strong> 5.0 g of CaCO₃ reacts with excess HCl. Calculate the mass of CO₂ produced. (Mᵣ: CaCO₃ = 100, CO₂ = 44)</p>
<div class="solution">
Moles CaCO₃ = 5.0 / 100 = 0.050 mol<br>
Mole ratio CaCO₃:CO₂ = 1:1<br>
Moles CO₂ = 0.050 mol<br>
Mass CO₂ = 0.050 × 44 = <strong>2.2 g</strong>
</div>
</div>
</div>`,
  biology: () => `
<div class="notes-section">
<h3>Experimental Design</h3>
<ul>
<li><strong>Variables:</strong> Independent (what you change), dependent (what you measure), controlled (kept constant)</li>
<li><strong>Validity:</strong> Does the experiment test what it claims to test?</li>
<li><strong>Reliability:</strong> Repeatable results — repeat experiments, calculate means</li>
<li><strong>Accuracy:</strong> Close to true value — use appropriate precision instruments</li>
</ul>
</div>
<div class="notes-section">
<h3>Microscopy Techniques</h3>
<ul>
<li><strong>Light microscope:</strong> Max magnification ~×1500, resolution ~200 nm</li>
<li><strong>Electron microscope:</strong> TEM (internal structure) vs SEM (surface detail)</li>
<li><strong>Staining:</strong> Methylene blue (nuclei), iodine (starch), eosin (cytoplasm)</li>
<li><strong>Cell fractionation:</strong> Homogenisation → filtration → ultracentrifugation</li>
</ul>
<div class="key-point">Resolution is the ability to distinguish two separate points. Electron microscopes have much higher resolution than light microscopes because electrons have shorter wavelengths than visible light.</div>
</div>`,
  maths: () => `
<div class="notes-section">
<h3>Problem-Solving Strategies</h3>
<ul>
<li><strong>Read twice:</strong> Once for understanding, once for details</li>
<li><strong>Identify the topic:</strong> What technique is being tested?</li>
<li><strong>Write down formulae:</strong> Before substituting values</li>
<li><strong>Check answers:</strong> Does the answer make sense? Re-substitute if possible</li>
</ul>
</div>
<div class="notes-section">
<h3>Common Algebraic Mistakes</h3>
<ul>
<li>(a + b)² ≠ a² + b² (it's a² + 2ab + b²)</li>
<li>√(a + b) ≠ √a + √b</li>
<li>1/(a + b) ≠ 1/a + 1/b</li>
<li>When squaring both sides, check for extraneous solutions</li>
</ul>
<div class="common-mistake">Dividing by a variable without considering if it could be zero. Always state "assuming x ≠ 0" or check separately.</div>
</div>`,
  economics: () => `
<div class="notes-section">
<h3>Real-World Applications</h3>
<ul>
<li><strong>Price controls:</strong> Maximum prices (rent controls) and minimum prices (minimum wage)</li>
<li><strong>Taxes:</strong> Direct (income tax) vs indirect (VAT, excise duties)</li>
<li><strong>Subsidies:</strong> Producer subsidies (shift supply right) vs consumer subsidies</li>
<li><strong>Externalities:</strong> Positive (education, vaccination) vs negative (pollution, congestion)</li>
</ul>
</div>
<div class="notes-section">
<h3>Market Failure & Government Intervention</h3>
<ul>
<li><strong>Public goods:</strong> Non-excludable and non-rival (defence, street lighting)</li>
<li><strong>Merit goods:</strong> Under-consumed due to information failure (education, healthcare)</li>
<li><strong>Demerit goods:</strong> Over-consumed due to information failure (cigarettes, alcohol)</li>
<li><strong>Government responses:</strong> Legislation, taxation, subsidies, provision, regulation</li>
</ul>
</div>`,
  history: () => `
<div class="notes-section">
<h3>Source Analysis Framework</h3>
<ul>
<li><strong>Content:</strong> What does the source say? What information does it provide?</li>
<li><strong>Provenance:</strong> Who wrote it? When? Why? What is their perspective?</li>
<li><strong>Reliability:</strong> Is it trustworthy? What biases might exist?</li>
<li><strong>Utility:</strong> How useful is it for a specific enquiry?</li>
</ul>
</div>
<div class="notes-section">
<h3>Essay Structure</h3>
<ul>
<li><strong>Introduction:</strong> Define key terms, set out argument/line of reasoning</li>
<li><strong>Paragraphs:</strong> Point → Evidence → Explanation → Link back to question</li>
<li><strong>Synthesis:</strong> Compare factors, weigh importance, show interconnections</li>
<li><strong>Conclusion:</strong> Judgment based on evidence, avoid introducing new points</li>
</ul>
<div class="key-point">Always answer the EXACT question asked. Underline key words ("To what extent", "How far", "Most important") and address them directly.</div>
</div>`
};

let expanded = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  const subject = file.split('-')[0];
  const expander = subjectExpansions[subject];
  if (!expander) return;
  
  // Check if already has "Additional Applications" or similar
  if (content.includes('Additional Applications') || content.includes('Laboratory Techniques') || 
      content.includes('Experimental Design') || content.includes('Problem-Solving Strategies') ||
      content.includes('Real-World Applications') || content.includes('Source Analysis')) return;
  
  const additions = expander();
  
  // Insert before summary box
  const idx = content.indexOf('class="summary-box"');
  if (idx > 0) {
    const insertIdx = content.lastIndexOf('</div>', idx);
    if (insertIdx > 0) {
      content = content.slice(0, insertIdx + 6) + additions + content.slice(insertIdx + 6);
      fs.writeFileSync(filepath, content);
      expanded++;
    }
  }
});

console.log(`Expanded content in ${expanded} files`);
