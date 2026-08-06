const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

// Content expansions by subject prefix
const expansions = {
  'physics-p1': `
<div class="notes-section">
<h3>5. Significant Figures & Decimal Places</h3>
<ul>
<li><strong>Significant figures (s.f.):</strong> All non-zero digits + zeros between non-zero digits + trailing zeros after decimal</li>
<li><strong>Rules for calculations:</strong> For multiplication/division, answer should have same s.f. as least precise value</li>
<li><strong>Example:</strong> 2.34 × 1.2 = 2.8 (2 s.f., not 2.808)</li>
<li><strong>Decimal places (d.p.):</strong> For addition/subtraction, answer should have same d.p. as least precise value</li>
</ul>
<div class="key-point">Always check the number of significant figures required in the question. Method marks are often lost for incorrect rounding.</div>
</div>
<div class="notes-section">
<h3>6. Estimation & Order of Magnitude</h3>
<ul>
<li><strong>Order of magnitude:</strong> The power of 10 closest to a value (e.g., 5000 ≈ 10⁴)</li>
<li><strong>Fermi estimation:</strong> Quick approximation using powers of 10 to check reasonableness</li>
<li><strong>Common values:</strong> Speed of light ≈ 3 × 10⁸ m/s, Earth's radius ≈ 6.4 × 10⁶ m, proton mass ≈ 1.7 × 10⁻²⁷ kg</li>
</ul>
</div>`,
  'physics-p2': `
<div class="notes-section">
<h3>5. Projectile Motion</h3>
<ul>
<li><strong>Horizontal motion:</strong> Constant velocity (aₓ = 0), so sₓ = uₓt</li>
<li><strong>Vertical motion:</strong> Constant acceleration (aᵧ = −g), so use SUVAT equations</li>
<li><strong>Time of flight:</strong> Depends only on vertical motion</li>
<li><strong>Range:</strong> Maximum when θ = 45° (assuming same initial speed)</li>
</ul>
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> A ball is projected at 25 m/s at 30° above horizontal. Find the range.</p>
<div class="solution">
<strong>Solution:</strong><br>
uₓ = 25 cos 30° = 21.7 m/s<br>
uᵧ = 25 sin 30° = 12.5 m/s<br>
Time to max height: v = u + at → 0 = 12.5 − 9.81t → t = 1.27 s<br>
Total flight time = 2 × 1.27 = 2.55 s<br>
Range = uₓ × t = 21.7 × 2.55 = <strong>55.3 m</strong>
</div>
</div>
</div>
<div class="notes-section">
<h3>6. Air Resistance & Terminal Velocity</h3>
<ul>
<li><strong>Air resistance (drag):</strong> Opposes motion, increases with speed</li>
<li><strong>Terminal velocity:</strong> When drag = weight, net force = 0, acceleration = 0</li>
<li><strong>Skydiver:</strong> Reaches terminal velocity ~120 mph (~54 m/s) in belly-to-earth position</li>
<li><strong>Factors affecting drag:</strong> Speed, cross-sectional area, shape, fluid density</li>
</ul>
<div class="common-mistake">Confusing velocity-time graphs for objects with air resistance. The graph curves as drag increases, becoming horizontal at terminal velocity.</div>
</div>`,
  'chemistry-c1': `
<div class="notes-section">
<h3>5. Mass Spectrometer</h3>
<ul>
<li><strong>Stages:</strong> Vaporisation → Ionisation → Acceleration → Deflection → Detection</li>
<li><strong>Ionisation:</strong> High-energy electrons knock off electrons from atoms</li>
<li><strong>Deflection:</strong> Magnetic field separates ions by mass-to-charge ratio (m/z)</li>
<li><strong>Relative atomic mass:</strong> Weighted average from mass spectrum peaks</li>
</ul>
<div class="worked-example">
<h4>⚗️ Worked Example</h4>
<p><strong>Question:</strong> A sample of chlorine has peaks at m/z 35 (75%) and 37 (25%). Calculate Aᵣ.</p>
<div class="solution">
Aᵣ = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = <strong>35.5</strong>
</div>
</div>
</div>
<div class="notes-section">
<h3>6. Electronic Configuration & Periodicity</h3>
<ul>
<li><strong>Blocks:</strong> s-block (Groups 1-2), p-block (Groups 13-18), d-block (transition metals)</li>
<li><strong>Periodic trends:</strong> Atomic radius decreases across period, increases down group</li>
<li><strong>Ionisation energy:</strong> Energy to remove 1 mole of electrons from 1 mole of gaseous atoms</li>
<li><strong>Exceptions:</strong> Group 13 < Group 2, Group 16 < Group 15 due to sub-shell structure</li>
</ul>
</div>`,
  'biology-b1': `
<div class="notes-section">
<h3>5. Cell Division — Mitosis</h3>
<ul>
<li><strong>Stages:</strong> Prophase → Metaphase → Anaphase → Telophase → Cytokinesis</li>
<li><strong>Prophase:</strong> Chromosomes condense, nuclear envelope breaks down, spindle forms</li>
<li><strong>Metaphase:</strong> Chromosomes line up on equator</li>
<li><strong>Anaphase:</strong> Sister chromatids pulled to opposite poles</li>
<li><strong>Result:</strong> 2 identical diploid daughter cells</li>
</ul>
<div class="key-point">Mitosis produces genetically identical cells for growth, repair, and asexual reproduction. No crossing over or independent assortment occurs.</div>
</div>
<div class="notes-section">
<h3>6. Cell Division — Meiosis</h3>
<ul>
<li><strong>Two divisions:</strong> Meiosis I (reduction) and Meiosis II (separation)</li>
<li><strong>Meiosis I:</strong> Homologous chromosomes pair (synapsis), crossing over occurs, then separate</li>
<li><strong>Result:</strong> 4 genetically different haploid gametes</li>
<li><strong>Significance:</strong> Genetic variation through crossing over and independent assortment</li>
</ul>
<div class="compare-table-container">
<table class="compare-table">
<tr><th>Feature</th><th>Mitosis</th><th>Meiosis</th></tr>
<tr><td>Divisions</td><td>1</td><td>2</td></tr>
<tr><td>Daughter cells</td><td>2</td><td>4</td></tr>
<tr><td>Ploidy</td><td>Diploid</td><td>Haploid</td></tr>
<tr><td>Genetic variation</td><td>None</td><td>High</td></tr>
<tr><td>Purpose</td><td>Growth/repair</td><td>Gamete production</td></tr>
</table>
</div>
</div>`,
  'maths-m1': `
<div class="notes-section">
<h3>5. Completing the Square</h3>
<ul>
<li><strong>Method:</strong> ax² + bx + c = a(x + b/2a)² + (c − b²/4a)</li>
<li><strong>Turning point:</strong> (−b/2a, c − b²/4a)</li>
<li><strong>Use:</strong> Finding max/min, sketching curves, solving equations</li>
</ul>
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> Express 2x² − 8x + 5 in the form a(x + p)² + q</p>
<div class="solution">
2x² − 8x + 5 = 2(x² − 4x) + 5<br>
= 2[(x − 2)² − 4] + 5<br>
= 2(x − 2)² − 8 + 5<br>
= <strong>2(x − 2)² − 3</strong><br>
Turning point: (2, −3)
</div>
</div>
</div>
<div class="notes-section">
<h3>6. Inequalities</h3>
<ul>
<li><strong>Linear:</strong> Solve like equations, but reverse inequality when ×/÷ by negative</li>
<li><strong>Quadratic:</strong> Factorise, sketch, find regions satisfying inequality</li>
<li><strong>Critical values:</strong> Where expression = 0 or is undefined</li>
</ul>
<div class="common-mistake">Forgetting to reverse the inequality sign when multiplying or dividing by a negative number.</div>
</div>`
};

let expanded = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Find subject-id prefix
  const prefix = file.replace('.html', '');
  const additions = expansions[prefix];
  if (!additions) return;
  
  // Check if already expanded
  if (content.includes('Significant Figures') || content.includes('Projectile Motion') || 
      content.includes('Mass Spectrometer') || content.includes('Cell Division') ||
      content.includes('Completing the Square')) return;
  
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
