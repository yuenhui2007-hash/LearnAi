const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

const moreExpansions = {
  'physics-p3': `<div class="notes-section"><h3>5. Newton's Laws in Rotational Motion</h3><ul><li><strong>Torque (τ):</strong> τ = r × F = rF sin θ, measured in N·m</li><li><strong>Moment of inertia (I):</strong> I = Σmr², depends on mass distribution</li><li><strong>Angular acceleration (α):</strong> α = τ/I (rotational equivalent of F=ma)</li><li><strong>Rotational kinetic energy:</strong> Eₖ = ½Iω²</li></ul></div>`,
  'chemistry-c2': `<div class="notes-section"><h3>5. Bond Energy Calculations</h3><ul><li><strong>Exothermic:</strong> Bonds formed release more energy than bonds broken absorb (ΔH < 0)</li><li><strong>Endothermic:</strong> Bonds broken absorb more energy than bonds formed release (ΔH > 0)</li><li><strong>Formula:</strong> ΔH = Σ(bond energies broken) − Σ(bond energies formed)</li></ul><div class="worked-example"><h4>⚗️ Worked Example</h4><p><strong>Question:</strong> Calculate ΔH for H₂ + Cl₂ → 2HCl given: H−H = 436, Cl−Cl = 243, H−Cl = 432 kJ/mol</p><div class="solution">Bonds broken: 436 + 243 = 679 kJ<br>Bonds formed: 2 × 432 = 864 kJ<br>ΔH = 679 − 864 = <strong>−185 kJ/mol</strong> (exothermic)</div></div></div>`,
  'biology-b2': `<div class="notes-section"><h3>5. Enzyme Kinetics — Michaelis-Menten</h3><ul><li><strong>Vmax:</strong> Maximum rate when all active sites occupied</li><li><strong>Km:</strong> Substrate concentration at which rate = ½Vmax — measures enzyme affinity</li><li><strong>Competitive inhibition:</strong> Inhibitor competes for active site, increases Km</li><li><strong>Non-competitive inhibition:</strong> Inhibitor binds elsewhere, decreases Vmax</li></ul></div>`,
  'maths-m2': `<div class="notes-section"><h3>5. Transformations of Functions</h3><table class="compare-table"><tr><th>Transformation</th><th>Effect on y = f(x)</th></tr><tr><td>f(x) + a</td><td>Vertical shift up by a</td></tr><tr><td>f(x + a)</td><td>Horizontal shift left by a</td></tr><tr><td>af(x)</td><td>Vertical stretch by factor a</td></tr><tr><td>f(ax)</td><td>Horizontal compression by factor a</td></tr><tr><td>−f(x)</td><td>Reflection in x-axis</td></tr><tr><td>f(−x)</td><td>Reflection in y-axis</td></tr></table></div>`,
  'history-h1': `<div class="notes-section"><h3>5. The Alliance System</h3><ul><li><strong>Triple Alliance (1882):</strong> Germany, Austria-Hungary, Italy</li><li><strong>Triple Entente (1907):</strong> Britain, France, Russia</li><li><strong>Effect:</strong> Local conflict could escalate into continental war</li><li><strong>Britain's position:</strong> Splendid isolation → Entente due to German naval threat</li></ul></div>`,
  'ict-i1': `<div class="notes-section"><h3>5. Number Systems & Conversion</h3><table class="compare-table"><tr><th>Denary</th><th>Binary</th><th>Hexadecimal</th></tr><tr><td>0</td><td>0000</td><td>0</td></tr><tr><td>1</td><td>0001</td><td>1</td></tr><tr><td>10</td><td>1010</td><td>A</td></tr><tr><td>15</td><td>1111</td><td>F</td></tr><tr><td>16</td><td>0001 0000</td><td>10</td></tr><tr><td>255</td><td>1111 1111</td><td>FF</td></tr></table><div class="key-point">Hexadecimal is used because it's compact and easily converted to binary (each hex digit = 4 bits).</div></div>`
};

let expanded = 0;
files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  const prefix = file.replace('.html', '');
  const additions = moreExpansions[prefix];
  if (!additions) return;
  if (content.includes('Michaelis-Menten') || content.includes('Transformations of Functions') || content.includes('Alliance System') || content.includes('Number Systems & Conversion')) return;
  
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

console.log(`Expanded ${expanded} more files`);
