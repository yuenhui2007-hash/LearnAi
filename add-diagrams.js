#!/usr/bin/env node
// Add SVG diagrams to note files
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

const diagrams = {
  'physics-p1': `<div class="diagram-box">
<h4>📊 SI Base Units Diagram</h4>
<svg viewBox="0 0 400 200" style="width:100%;max-width:400px;margin:10px auto;display:block;">
<rect x="10" y="10" width="380" height="180" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
<text x="200" y="35" text-anchor="middle" font-size="14" font-weight="600" fill="#1e40af">SI Base Quantities</text>
<circle cx="60" cy="70" r="25" fill="#dbeafe" stroke="#3b82f6"/><text x="60" y="75" text-anchor="middle" font-size="10" fill="#1e40af">Length</text>
<circle cx="140" cy="70" r="25" fill="#dcfce7" stroke="#22c55e"/><text x="140" y="75" text-anchor="middle" font-size="10" fill="#166534">Mass</text>
<circle cx="220" cy="70" r="25" fill="#fef3c7" stroke="#f59e0b"/><text x="220" y="75" text-anchor="middle" font-size="10" fill="#92400e">Time</text>
<circle cx="300" cy="70" r="25" fill="#fce7f3" stroke="#ec4899"/><text x="300" y="75" text-anchor="middle" font-size="10" fill="#9d174d">Current</text>
<circle cx="100" cy="130" r="25" fill="#f3e8ff" stroke="#a855f7"/><text x="100" y="135" text-anchor="middle" font-size="10" fill="#7e22ce">Temp</text>
<circle cx="200" cy="130" r="25" fill="#ecfdf5" stroke="#14b8a6"/><text x="200" y="135" text-anchor="middle" font-size="10" fill="#0f766e">Amount</text>
<circle cx="300" cy="130" r="25" fill="#fff7ed" stroke="#f97316"/><text x="300" y="135" text-anchor="middle" font-size="10" fill="#9a3412">Light</text>
</svg>
</div>`,
  'physics-p2': `<div class="diagram-box">
<h4>📊 Kinematics Graphs</h4>
<svg viewBox="0 0 500 180" style="width:100%;max-width:500px;margin:10px auto;display:block;">
<rect x="5" y="5" width="240" height="170" fill="#f8fafc" stroke="#cbd5e1" rx="4"/>
<text x="125" y="25" text-anchor="middle" font-size="12" font-weight="600">Displacement-Time</text>
<line x1="30" y1="150" x2="220" y2="150" stroke="#333" stroke-width="1" marker-end="url(#arrow)"/><text x="210" y="165" font-size="10">t</text>
<line x1="30" y1="150" x2="30" y2="20" stroke="#333" stroke-width="1" marker-end="url(#arrow)"/><text x="10" y="25" font-size="10">s</text>
<path d="M 30 120 Q 80 120 125 80 T 220 30" fill="none" stroke="#3b82f6" stroke-width="2"/>
<text x="125" y="100" text-anchor="middle" font-size="9" fill="#666">Curved = acceleration</text>

<rect x="255" y="5" width="240" height="170" fill="#f8fafc" stroke="#cbd5e1" rx="4"/>
<text x="375" y="25" text-anchor="middle" font-size="12" font-weight="600">Velocity-Time</text>
<line x1="280" y1="150" x2="470" y2="150" stroke="#333" stroke-width="1"/><text x="460" y="165" font-size="10">t</text>
<line x1="280" y1="150" x2="280" y2="20" stroke="#333" stroke-width="1"/><text x="260" y="25" font-size="10">v</text>
<line x1="280" y1="120" x2="470" y2="40" fill="none" stroke="#ef4444" stroke-width="2"/>
<text x="375" y="100" text-anchor="middle" font-size="9" fill="#666">Area = displacement</text>
</svg>
</div>`,
  'chemistry-c1': `<div class="diagram-box">
<h4>⚛️ Atomic Structure</h4>
<svg viewBox="0 0 300 200" style="width:100%;max-width:300px;margin:10px auto;display:block;">
<circle cx="150" cy="100" r="80" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
<circle cx="150" cy="100" r="15" fill="#ef4444"/>
<text x="150" y="105" text-anchor="middle" font-size="10" fill="white" font-weight="600">+</text>
<text x="150" y="145" text-anchor="middle" font-size="11" fill="#92400e">Nucleus</text>
<circle cx="80" cy="60" r="8" fill="#3b82f6"/><text x="80" y="80" text-anchor="middle" font-size="9" fill="#1e40af">e⁻</text>
<circle cx="220" cy="60" r="8" fill="#3b82f6"/><text x="220" y="80" text-anchor="middle" font-size="9" fill="#1e40af">e⁻</text>
<circle cx="80" cy="140" r="8" fill="#3b82f6"/><text x="80" y="160" text-anchor="middle" font-size="9" fill="#1e40af">e⁻</text>
<circle cx="220" cy="140" r="8" fill="#3b82f6"/><text x="220" y="160" text-anchor="middle" font-size="9" fill="#1e40af">e⁻</text>
<circle cx="150" cy="30" r="8" fill="#3b82f6"/><text x="150" y="20" text-anchor="middle" font-size="9" fill="#1e40af">e⁻</text>
<circle cx="150" cy="170" r="8" fill="#3b82f6"/><text x="150" y="190" text-anchor="middle" font-size="9" fill="#1e40af">e⁻</text>
</svg>
</div>`,
  'biology-b1': `<div class="diagram-box">
<h4>🔬 Animal Cell Structure</h4>
<svg viewBox="0 0 300 220" style="width:100%;max-width:300px;margin:10px auto;display:block;">
<rect x="20" y="20" width="260" height="180" rx="20" fill="#ecfdf5" stroke="#14b8a6" stroke-width="2"/>
<text x="150" y="40" text-anchor="middle" font-size="12" font-weight="600" fill="#0f766e">Animal Cell</text>
<circle cx="150" cy="110" r="35" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
<text x="150" y="115" text-anchor="middle" font-size="10" fill="#1e40af">Nucleus</text>
<circle cx="150" cy="110" r="12" fill="#1e40af"/>
<ellipse cx="80" cy="80" rx="25" ry="15" fill="#fef3c7" stroke="#f59e0b"/>
<text x="80" y="84" text-anchor="middle" font-size="9" fill="#92400e">Mitochondria</text>
<ellipse cx="220" cy="140" rx="20" ry="12" fill="#f3e8ff" stroke="#a855f7"/>
<text x="220" y="144" text-anchor="middle" font-size="9" fill="#7e22ce">Golgi</text>
<ellipse cx="100" cy="160" rx="30" ry="18" fill="#fee2e2" stroke="#ef4444"/>
<text x="100" y="164" text-anchor="middle" font-size="9" fill="#991b1b">RER</text>
</svg>
</div>`,
  'maths-m1': `<div class="diagram-box">
<h4>📐 Quadratic Graph</h4>
<svg viewBox="0 0 300 200" style="width:100%;max-width:300px;margin:10px auto;display:block;">
<line x1="30" y1="170" x2="280" y2="170" stroke="#333" stroke-width="1"/><text x="270" y="185" font-size="10">x</text>
<line x1="30" y1="170" x2="30" y2="20" stroke="#333" stroke-width="1"/><text x="10" y="25" font-size="10">y</text>
<path d="M 50 150 Q 150 20 250 150" fill="none" stroke="#3b82f6" stroke-width="2"/>
<circle cx="150" cy="85" r="4" fill="#ef4444"/>
<text x="150" y="75" text-anchor="middle" font-size="10" fill="#ef4444">Turning point</text>
<line x1="90" y1="170" x2="90" y2="135" stroke="#22c55e" stroke-dasharray="4"/>
<line x1="210" y1="170" x2="210" y2="135" stroke="#22c55e" stroke-dasharray="4"/>
<text x="90" y="185" text-anchor="middle" font-size="9" fill="#22c55e">Root 1</text>
<text x="210" y="185" text-anchor="middle" font-size="9" fill="#22c55e">Root 2</text>
</svg>
</div>`,
  'economics-e1': `<div class="diagram-box">
<h4>📈 Supply & Demand</h4>
<svg viewBox="0 0 300 220" style="width:100%;max-width:300px;margin:10px auto;display:block;">
<line x1="40" y1="200" x2="280" y2="200" stroke="#333" stroke-width="1"/><text x="270" y="215" font-size="10">Q</text>
<line x1="40" y1="200" x2="40" y2="20" stroke="#333" stroke-width="1"/><text x="15" y="25" font-size="10">P</text>
<line x1="60" y1="180" x2="240" y2="60" stroke="#ef4444" stroke-width="2"/><text x="250" y="55" font-size="10" fill="#ef4444">D</text>
<line x1="60" y1="60" x2="240" y2="180" stroke="#3b82f6" stroke-width="2"/><text x="250" y="185" font-size="10" fill="#3b82f6">S</text>
<circle cx="150" cy="120" r="5" fill="#f59e0b"/>
<text x="150" y="110" text-anchor="middle" font-size="10" fill="#92400e">Equilibrium</text>
<line x1="150" y1="120" x2="150" y2="200" stroke="#f59e0b" stroke-dasharray="3"/>
<line x1="40" y1="120" x2="150" y2="120" stroke="#f59e0b" stroke-dasharray="3"/>
<text x="90" y="105" font-size="9" fill="#92400e">P*</text>
<text x="155" y="215" font-size="9" fill="#92400e">Q*</text>
</svg>
</div>`
};

let added = 0;

Object.keys(diagrams).forEach(key => {
  const filename = `${key}.html`;
  const filepath = path.join(notesDir, filename);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  if (content.includes('diagram-box')) return; // Already has diagram
  
  // Insert after first notes-section
  const idx = content.indexOf('</div>', content.indexOf('class="notes-section"'));
  if (idx > 0) {
    content = content.slice(0, idx + 6) + diagrams[key] + content.slice(idx + 6);
    fs.writeFileSync(filepath, content);
    added++;
  }
});

console.log(`Added diagrams to ${added} files`);
