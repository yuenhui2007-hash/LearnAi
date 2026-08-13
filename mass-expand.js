const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

// Massive content expansion for all subjects
const expansions = {
  // PHYSICS
  'physics-p1': `
<div class="notes-section">
<h3>5. Dimensions & Dimensional Analysis</h3>
<ul>
<li><strong>Dimensions of base quantities:</strong> [L] for length, [M] for mass, [T] for time, [I] for current, [Θ] for temperature</li>
<li><strong>Force:</strong> [MLT⁻²] — mass × acceleration</li>
<li><strong>Energy:</strong> [ML²T⁻²] — force × distance</li>
<li><strong>Power:</strong> [ML²T⁻³] — energy / time</li>
<li><strong>Dimensional consistency:</strong> Both sides of any physical equation must have the same dimensions</li>
</ul>
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> The period T of a simple pendulum is given by T = 2π√(l/g). Verify this is dimensionally correct.</p>
<div class="solution">
[T] = T<br>
[2π√(l/g)] = √(L / LT⁻²) = √(T²) = T ✓<br>
<strong>Both sides have dimension [T] — equation is dimensionally consistent.</strong>
</div>
</div>
</div>
<div class="notes-section">
<h3>6. Orders of Magnitude in Physics</h3>
<table class="compare-table">
<tr><th>Quantity</th><th>Typical Value</th><th>Order of Magnitude</th></tr>
<tr><td>Proton mass</td><td>1.67 × 10⁻²⁷ kg</td><td>10⁻²⁷ kg</td></tr>
<tr><td>Electron mass</td><td>9.11 × 10⁻³¹ kg</td><td>10⁻³⁰ kg</td></tr>
<tr><td>Speed of light (c)</td><td>3.00 × 10⁸ m/s</td><td>10⁸ m/s</td></tr>
<tr><td>Earth's radius</td><td>6.4 × 10⁶ m</td><td>10⁷ m</td></tr>
<tr><td>Astronomical Unit</td><td>1.5 × 10¹¹ m</td><td>10¹¹ m</td></tr>
<tr><td>Age of universe</td><td>4.4 × 10¹⁷ s</td><td>10¹⁷ s</td></tr>
</table>
</div>`,
  'physics-p2': `
<div class="notes-section">
<h3>7. Projectile Motion — Full Analysis</h3>
<ul>
<li><strong>Horizontal:</strong> aₓ = 0, vₓ = u cos θ (constant), sₓ = ut cos θ</li>
<li><strong>Vertical:</strong> aᵧ = −g, vᵧ = u sin θ − gt, sᵧ = ut sin θ − ½gt²</li>
<li><strong>Time of flight:</strong> T = 2u sin θ / g (when landing at same height)</li>
<li><strong>Max height:</strong> H = u² sin²θ / 2g (at t = u sin θ / g)</li>
<li><strong>Range:</strong> R = u² sin 2θ / g (max at θ = 45°)</li>
</ul>
<div class="diagram-box">
<h4>📊 Projectile Trajectory</h4>
<svg viewBox="0 0 400 200" style="width:100%;max-width:400px;margin:10px auto;display:block;">
<path d="M 20 180 Q 200 20 380 180" fill="none" stroke="#3b82f6" stroke-width="2"/>
<line x1="20" y1="180" x2="380" y2="180" stroke="#333" stroke-width="1"/>
<line x1="20" y1="180" x2="20" y2="20" stroke="#333" stroke-width="1"/>
<text x="370" y="195" font-size="10">x</text>
<text x="5" y="25" font-size="10">y</text>
<circle cx="20" cy="180" r="4" fill="#ef4444"/>
<text x="10" y="170" font-size="9" fill="#ef4444">u, θ</text>
<circle cx="200" cy="100" r="4" fill="#f59e0b"/>
<text x="205" y="95" font-size="9" fill="#92400e">Max height</text>
<line x1="200" y1="100" x2="200" y2="180" stroke="#f59e0b" stroke-dasharray="3"/>
<text x="190" y="195" font-size="9">R/2</text>
</svg>
</div>
</div>
<div class="notes-section">
<h3>8. Motion Graphs Summary</h3>
<table class="compare-table">
<tr><th>Graph</th><th>Gradient gives</th><th>Area gives</th></tr>
<tr><td>Displacement-time</td><td>Velocity</td><td>—</td></tr>
<tr><td>Velocity-time</td><td>Acceleration</td><td>Displacement</td></tr>
<tr><td>Acceleration-time</td><td>Jerk</td><td>Change in velocity</td></tr>
</table>
<div class="common-mistake">The area under a velocity-time graph gives displacement, NOT distance. If the curve goes below the time axis, that area represents negative displacement (backward motion).</div>
</div>`,
  'chemistry-c1': `
<div class="notes-section">
<h3>5. Subatomic Particles — Detailed Properties</h3>
<table class="compare-table">
<tr><th>Particle</th><th>Symbol</th><th>Relative Charge</th><th>Relative Mass</th><th>Location</th></tr>
<tr><td>Proton</td><td>p</td><td>+1</td><td>1</td><td>Nucleus</td></tr>
<tr><td>Neutron</td><td>n</td><td>0</td><td>1</td><td>Nucleus</td></tr>
<tr><td>Electron</td><td>e⁻</td><td>−1</td><td>1/1840</td><td>Shells/orbitals</td></tr>
</table>
<ul>
<li><strong>Isotopes:</strong> Same proton number, different neutron number → same chemical properties, different physical properties</li>
<li><strong>Mass number (A):</strong> Protons + neutrons</li>
<li><strong>Atomic number (Z):</strong> Number of protons</li>
<li><strong>Relative atomic mass:</strong> Weighted mean of isotope masses</li>
</ul>
</div>
<div class="notes-section">
<h3>6. Ionisation Energy Trends</h3>
<ul>
<li><strong>Definition:</strong> Energy required to remove one mole of electrons from one mole of gaseous atoms</li>
<li><strong>Across a period:</strong> Generally increases (nuclear charge increases, atomic radius decreases)</li>
<li><strong>Down a group:</strong> Decreases (outer electrons further from nucleus, more shielding)</li>
<li><strong>Group 2 to 3 drop:</strong> Electron removed from p-orbital (higher energy, more shielded) vs s-orbital</li>
<li><strong>Group 5 to 6 drop:</strong> Electron pairing in p-orbital causes repulsion</li>
</ul>
<div class="diagram-box">
<h4>📊 First Ionisation Energy vs Atomic Number</h4>
<svg viewBox="0 0 400 150" style="width:100%;max-width:400px;margin:10px auto;display:block;">
<line x1="30" y1="130" x2="380" y2="130" stroke="#333"/><text x="370" y="145" font-size="10">Atomic Number →</text>
<line x1="30" y1="130" x2="30" y2="20" stroke="#333"/><text x="5" y="25" font-size="10">IE</text>
<path d="M 30 120 L 60 100 L 90 110 L 120 70 L 150 80 L 180 60 L 210 75 L 240 50 L 270 65 L 300 40 L 330 55 L 360 35" fill="none" stroke="#3b82f6" stroke-width="2"/>
<text x="60" y="95" font-size="8" fill="#ef4444">Gp 2→3 drop</text>
<text x="180" y="55" font-size="8" fill="#ef4444">Gp 5→6 drop</text>
</svg>
</div>
</div>`,
  'biology-b1': `
<div class="notes-section">
<h3>5. Cell Organelles — Functions & Structures</h3>
<table class="compare-table">
<tr><th>Organelle</th><th>Structure</th><th>Function</th><th>Present in...</th></tr>
<tr><td>Nucleus</td><td>Double membrane, nucleolus, chromatin</td><td>DNA storage, transcription, ribosome assembly</td><td>Eukaryotes</td></tr>
<tr><td>Mitochondria</td><td>Double membrane, cristae, matrix</td><td>Aerobic respiration, ATP synthesis</td><td>Eukaryotes</td></tr>
<tr><td>Ribosomes</td><td>Small (20nm), no membrane</td><td>Protein synthesis</td><td>All cells</td></tr>
<tr><td>RER</td><td>Membrane-bound with ribosomes</td><td>Protein synthesis and modification</td><td>Eukaryotes</td></tr>
<tr><td>SER</td><td>Membrane-bound, no ribosomes</td><td>Lipid synthesis, detoxification</td><td>Eukaryotes</td></tr>
<tr><td>Golgi</td><td>Flattened membrane sacs</td><td>Protein processing, packaging, secretion</td><td>Eukaryotes</td></tr>
<tr><td>Lysosomes</td><td>Single membrane, hydrolytic enzymes</td><td>Intracellular digestion, autophagy</td><td>Animal cells</td></tr>
<tr><td>Chloroplasts</td><td>Double membrane, thylakoids, stroma</td><td>Photosynthesis</td><td>Plant cells</td></tr>
<tr><td>Cell wall</td><td>Cellulose (plants), chitin (fungi), peptidoglycan (bacteria)</td><td>Structural support, protection</td><td>Plants, fungi, bacteria</td></tr>
<tr><td>Centrioles</td><td>9 triplets of microtubules</td><td>Spindle formation in cell division</td><td>Animal cells</td></tr>
</table>
</div>
<div class="notes-section">
<h3>6. Prokaryotic vs Eukaryotic Cells</h3>
<table class="compare-table">
<tr><th>Feature</th><th>Prokaryotic</th><th>Eukaryotic</th></tr>
<tr><td>Nucleus</td><td>No true nucleus (nucleoid)</td><td>True nucleus with envelope</td></tr>
<tr><td>DNA</td><td>Circular, naked</td><td>Linear, associated with histones</td></tr>
<tr><td>Membrane-bound organelles</td><td>Absent</td><td>Present</td></tr>
<tr><td>Ribosomes</td><td>70S (smaller)</td><td>80S (larger)</td></tr>
<tr><td>Cell wall</td><td>Peptidoglycan (bacteria)</td><td>Cellulose (plants), chitin (fungi), absent (animals)</td></tr>
<tr><td>Size</td><td>0.1–5.0 μm</td><td>10–100 μm</td></tr>
<tr><td>Examples</td><td>Bacteria, Archaea</td><td>Animals, plants, fungi, protists</td></tr>
</table>
</div>`,
  'maths-m1': `
<div class="notes-section">
<h3>5. Polynomials & Factor Theorem</h3>
<ul>
<li><strong>Factor Theorem:</strong> If f(a) = 0, then (x − a) is a factor of f(x)</li>
<li><strong>Remainder Theorem:</strong> f(a) gives the remainder when f(x) is divided by (x − a)</li>
<li><strong>Cubic equations:</strong> Try factors of the constant term to find roots</li>
</ul>
<div class="worked-example">
<h4>📐 Worked Example</h4>
<p><strong>Question:</strong> Show that (x − 2) is a factor of f(x) = x³ − 3x² − 4x + 12, and hence factorise fully.</p>
<div class="solution">
f(2) = 8 − 12 − 8 + 12 = 0 ✓<br>
So (x − 2) is a factor.<br>
Divide: x³ − 3x² − 4x + 12 = (x − 2)(x² − x − 6)<br>
= (x − 2)(x − 3)(x + 2)<br>
<strong>f(x) = (x − 2)(x − 3)(x + 2)</strong>
</div>
</div>
</div>
<div class="notes-section">
<h3>6. Simultaneous Equations — Three Methods</h3>
<table class="compare-table">
<tr><th>Method</th><th>When to use</th><th>Steps</th></tr>
<tr><td>Substitution</td><td>One variable already isolated</td><td>Substitute expression into other equation</td></tr>
<tr><td>Elimination</td><td>Coefficients easily matched</td><td>Multiply equations, add/subtract to eliminate one variable</td></tr>
<tr><td>Graphical</td><td>Approximate solutions acceptable</td><td>Plot both equations, find intersection</td></tr>
</table>
<div class="key-point">Always check your solution by substituting back into both original equations.</div>
</div>`,
  'economics-e1': `
<div class="notes-section">
<h3>5. Price Elasticity of Demand (PED)</h3>
<ul>
<li><strong>Formula:</strong> PED = (% change in quantity demanded) / (% change in price)</li>
<li><strong>Elastic (PED > 1):</strong> Quantity changes more than price — luxuries, many substitutes</li>
<li><strong>Inelastic (PED < 1):</strong> Quantity changes less than price — necessities, few substitutes</li>
<li><strong>Unit elastic (PED = 1):</strong> % change in quantity = % change in price</li>
<li><strong>Perfectly inelastic (PED = 0):</strong> Quantity doesn't change at all — essential medicines</li>
<li><strong>Factors affecting PED:</strong> Number of substitutes, necessity vs luxury, proportion of income, time period</li>
</ul>
<div class="worked-example">
<h4>📈 Worked Example</h4>
<p><strong>Question:</strong> When price rises from $4 to $5, quantity demanded falls from 200 to 160 units. Calculate PED.</p>
<div class="solution">
%ΔQ = (160−200)/200 × 100 = −20%<br>
%ΔP = (5−4)/4 × 100 = +25%<br>
PED = |−20/25| = <strong>0.8</strong> (inelastic)
</div>
</div>
</div>
<div class="notes-section">
<h3>6. Government Intervention — Price Controls</h3>
<table class="compare-table">
<tr><th>Policy</th><th>How it works</th><th>Effects</th><th>Examples</th></tr>
<tr><td>Maximum price (price ceiling)</td><td>Set below market equilibrium</td><td>Shortage, queues, black markets</td><td>Rent controls, food price caps</td></tr>
<tr><td>Minimum price (price floor)</td><td>Set above market equilibrium</td><td>Surplus, government must buy excess</td><td>Minimum wage, agricultural support</td></tr>
<tr><td>Indirect tax</td><td>Shifts supply curve left</td><td>Higher price, lower quantity, tax revenue</td><td>VAT, excise duties</td></tr>
<tr><td>Subsidy</td><td>Shifts supply curve right</td><td>Lower price, higher quantity</td><td>Student grants, farm subsidies</td></tr>
</table>
</div>`
};

let expanded = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  const prefix = file.replace('.html', '');
  const additions = expansions[prefix];
  if (!additions) return;
  
  // Check if already expanded
  if (content.includes('Dimensional Analysis') || content.includes('Projectile Trajectory') || 
      content.includes('Subatomic Particles') || content.includes('Cell Organelles') ||
      content.includes('Polynomials & Factor') || content.includes('Price Elasticity')) return;
  
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

console.log(`Mass expanded content in ${expanded} files`);
