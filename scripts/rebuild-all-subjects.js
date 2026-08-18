const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

function buildPage(title, syllabus, sections, summary, tips) {
  const sectionsHtml = sections.map((s, i) => `
<div class="topic-block" id="section-${i+1}">
<div class="topic-header">
<span class="topic-number">${i+1}</span>
<h3>${s.title}</h3>
</div>
<div class="topic-content">
${s.content}
</div>
</div>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — ${syllabus} | LearnAI</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=5">
<style>
.notes-page { padding: 120px 0 60px; background: #f8fafc; min-height: 100vh; }
.notes-container { max-width: 900px; margin: 0 auto; background: white; padding: 48px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.notes-header { margin-bottom: 40px; padding-bottom: 24px; border-bottom: 3px solid #e2e8f0; }
.notes-header h1 { font-size: 2.2rem; margin-bottom: 8px; color: #1e293b; }
.syllabus-tag { display: inline-block; background: #dbeafe; color: #1e40af; padding: 4px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 16px; }
.toc { background: #f1f5f9; padding: 24px 28px; border-radius: 12px; margin-bottom: 40px; border-left: 4px solid #3b82f6; }
.toc h2 { font-size: 1.1rem; color: #1e40af; margin-bottom: 12px; }
.toc ol { margin: 0; padding-left: 20px; }
.toc li { margin-bottom: 6px; color: #475569; }
.toc a { color: #3b82f6; text-decoration: none; }
.toc a:hover { text-decoration: underline; }
.topic-block { margin-bottom: 48px; padding-bottom: 32px; border-bottom: 2px solid #e2e8f0; }
.topic-block:last-child { border-bottom: none; }
.topic-header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.topic-number { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #3b82f6; color: white; font-weight: 700; font-size: 1.1rem; border-radius: 10px; flex-shrink: 0; }
.topic-header h3 { font-size: 1.4rem; color: #1e293b; margin: 0; }
.topic-content { padding-left: 56px; }
.topic-content h4 { font-size: 1.1rem; color: #334155; margin: 24px 0 12px; padding-bottom: 6px; border-bottom: 1px solid #cbd5e1; }
.topic-content h5 { font-size: 0.95rem; color: #475569; margin: 16px 0 8px; font-weight: 600; }
.topic-content p { line-height: 1.8; color: #475569; margin-bottom: 12px; }
.topic-content ul { margin: 12px 0; padding-left: 24px; }
.topic-content ul li { margin-bottom: 8px; color: #475569; line-height: 1.7; }
.topic-content ol { margin: 12px 0; padding-left: 24px; }
.topic-content ol li { margin-bottom: 8px; color: #475569; line-height: 1.7; }
.formula-box { background: #eff6ff; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #3b82f6; font-family: 'Courier New', monospace; margin: 20px 0; font-size: 1rem; line-height: 1.6; color: #1e40af; }
.example-box { background: #f0fdf4; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #22c55e; margin: 20px 0; }
.example-box h5 { color: #15803d; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.example-box p { margin-bottom: 8px; color: #166534; }
.key-point { background: #fef9c3; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #eab308; margin: 20px 0; color: #854d0e; font-weight: 500; }
.data-table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.95rem; }
.data-table th { background: #f1f5f9; padding: 12px 16px; text-align: left; font-weight: 600; color: #334155; border: 1px solid #e2e8f0; }
.data-table td { padding: 12px 16px; color: #475569; border: 1px solid #e2e8f0; }
.data-table tr:nth-child(even) { background: #f8fafc; }
.summary-box { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 28px; border-radius: 12px; margin: 40px 0; }
.summary-box h2 { color: #92400e; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #f59e0b; }
.summary-box ul { margin: 0; padding-left: 20px; }
.summary-box li { color: #78350f; margin-bottom: 8px; line-height: 1.6; }
.exam-tips { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 28px; border-radius: 12px; margin: 40px 0; }
.exam-tips h2 { color: #1e40af; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #3b82f6; }
.exam-tips ul { margin: 0; padding-left: 20px; }
.exam-tips li { color: #1e3a8a; margin-bottom: 8px; line-height: 1.6; }
.diagram-box { background: #faf5ff; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #a855f7; margin: 20px 0; color: #6b21a8; }
.process-box { background: #f0f9ff; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #0ea5e9; margin: 20px 0; }
.process-box h5 { color: #0369a1; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.process-box ol { margin: 8px 0; padding-left: 20px; }
.process-box li { color: #0c4a6e; margin-bottom: 6px; }
@media (max-width: 768px) {
  .notes-container { padding: 24px; }
  .topic-content { padding-left: 0; }
  .topic-header { flex-direction: column; align-items: flex-start; }
}
</style>
</head>
<body>
<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>
<section class="notes-page"><div class="container">
<div class="notes-container">
<div class="notes-header">
<span class="syllabus-tag">${syllabus}</span>
<h1>${title}</h1>
<p style="color:#64748b;margin-top:8px;">Comprehensive study notes with worked examples</p>
</div>
<div class="toc">
<h2>📑 Contents</h2>
<ol>
${sections.map((s, i) => `<li><a href="#section-${i+1}">${s.title}</a></li>`).join('\n')}
</ol>
</div>
${sectionsHtml}
<div class="summary-box">
<h2>📝 Quick Summary</h2>
<ul>
${summary.map(s => `<li>${s}</li>`).join('\n')}
</ul>
</div>
<div class="exam-tips">
<h2>💡 Exam Tips</h2>
<ul>
${tips.map(t => `<li>${t}</li>`).join('\n')}
</ul>
</div>
</div>
</div></section>
<script src="../js/theme.js?v=5"></script>
</body>
</html>`;
}

// BIOLOGY DATA
const BIOLOGY = {
  'b1': {
    name: 'Cell Structure',
    sections: [
      {
        title: 'Cell Theory',
        content: `<div class="key-point">All living organisms are composed of cells. The cell is the basic unit of life. All cells arise from pre-existing cells.</div>`
      },
      {
        title: 'Prokaryotic vs Eukaryotic Cells',
        content: `<table class="data-table">
<tr><th>Feature</th><th>Prokaryotic</th><th>Eukaryotic</th></tr>
<tr><td>Nucleus</td><td>Nucleoid, no envelope</td><td>True nucleus with nuclear envelope</td></tr>
<tr><td>DNA</td><td>Circular, naked</td><td>Linear, associated with histones</td></tr>
<tr><td>Ribosomes</td><td>70S</td><td>80S (70S in organelles)</td></tr>
<tr><td>Membrane-bound organelles</td><td>Absent</td><td>Present</td></tr>
<tr><td>Size</td><td>1-10 μm</td><td>10-100 μm</td></tr>
</table>`
      },
      {
        title: 'Key Organelles',
        content: `<table class="data-table">
<tr><th>Organelle</th><th>Structure</th><th>Function</th></tr>
<tr><td>Nucleus</td><td>Nuclear envelope, pores, nucleolus</td><td>Contains DNA, controls cell activities</td></tr>
<tr><td>Mitochondria</td><td>Double membrane, cristae, matrix</td><td>Aerobic respiration, ATP production</td></tr>
<tr><td>RER</td><td>Membranous sacs with ribosomes</td><td>Protein synthesis and modification</td></tr>
<tr><td>SER</td><td>Membranous tubules</td><td>Lipid synthesis, detoxification</td></tr>
<tr><td>Golgi apparatus</td><td>Stacked cisternae</td><td>Modifies, packages, and transports proteins</td></tr>
<tr><td>Lysosomes</td><td>Membrane-bound vesicles</td><td>Contain hydrolytic enzymes for digestion</td></tr>
<tr><td>Chloroplasts</td><td>Double membrane, thylakoids, grana</td><td>Photosynthesis</td></tr>
</table>`
      },
      {
        title: 'Cell Fractionation',
        content: `<div class="process-box">
<h5>Steps</h5>
<ol>
<li>Homogenise tissue in cold isotonic buffer</li>
<li>Filter through gauze to remove debris</li>
<li>Ultracentrifuge at increasing speeds:
<ul>
<li>Low speed: nuclei pellet</li>
<li>Medium speed: mitochondria, lysosomes, peroxisomes</li>
<li>High speed: ribosomes</li>
</ul></li>
</ol>
</div>`
      }
    ],
    summary: ['Cell theory: all organisms composed of cells', 'Prokaryotes: no nucleus, 70S ribosomes, no membrane-bound organelles', 'Eukaryotes: true nucleus, 80S ribosomes, membrane-bound organelles', 'Mitochondria = aerobic respiration; Chloroplasts = photosynthesis', 'RER = protein synthesis; SER = lipid synthesis'],
    tips: ['Always compare structure with function', 'Remember the size difference: prokaryotes 1-10μm, eukaryotes 10-100μm', 'Know the order of ultracentrifugation']
  },
  'b2': {
    name: 'Biological Molecules',
    sections: [
      {
        title: 'Carbohydrates',
        content: `<table class="data-table">
<tr><th>Type</th><th>Monomer</th><th>Examples</th><th>Functions</th></tr>
<tr><td>Monosaccharide</td><td>—</td><td>Glucose, fructose, galactose</td><td>Energy source</td></tr>
<tr><td>Disaccharide</td><td>2 monosaccharides</td><td>Sucrose, lactose, maltose</td><td>Transport/storage</td></tr>
<tr><td>Polysaccharide</td><td>Many monosaccharides</td><td>Starch, glycogen, cellulose</td><td>Storage/structure</td></tr>
</table>
<div class="formula-box">General formula: (CH₂O)n<br>Glucose (C₆H₁₂O₆) + Glucose (C₆H₁₂O₆) → Maltose (C₁₂H₂₂O₁₁) + H₂O</div>`
      },
      {
        title: 'Lipids',
        content: `<div class="formula-box">Triglyceride: glycerol + 3 fatty acids<br>Phospholipid: glycerol + 2 fatty acids + phosphate group</div>
<table class="data-table">
<tr><th>Type</th><th>Structure</th><th>Function</th></tr>
<tr><td>Triglycerides</td><td>Glycerol + 3 fatty acids (ester bonds)</td><td>Energy storage, insulation</td></tr>
<tr><td>Phospholipids</td><td>Glycerol + 2 fatty acids + phosphate</td><td>Cell membrane structure</td></tr>
<tr><td>Steroids</td><td>Four fused carbon rings</td><td>Hormones (e.g., cholesterol)</td></tr>
</table>`
      },
      {
        title: 'Proteins',
        content: `<div class="formula-box">Dipeptide: 2 amino acids joined by peptide bond<br>Polypeptide: many amino acids joined by peptide bonds</div>
<table class="data-table">
<tr><th>Structure Level</th><th>Description</th><th>Bonds/Forces</th></tr>
<tr><td>Primary</td><td>Sequence of amino acids</td><td>Peptide bonds</td></tr>
<tr><td>Secondary</td><td>α-helix or β-pleated sheet</td><td>Hydrogen bonds</td></tr>
<tr><td>Tertiary</td><td>3D folding of polypeptide</td><td>Ionic, hydrogen, disulfide, hydrophobic</td></tr>
<tr><td>Quaternary</td><td>Multiple polypeptide chains</td><td>Same as tertiary</td></tr>
</table>`
      }
    ],
    summary: ['Carbohydrates: monosaccharides, disaccharides, polysaccharides', 'Lipids: triglycerides (energy storage), phospholipids (membranes)', 'Proteins: primary, secondary, tertiary, quaternary structure', 'Amino acids joined by peptide bonds', 'Enzymes are globular proteins with active sites'],
    tips: ['Remember Benedict\'s test for reducing sugars', 'Iodine test: starch → blue-black', 'Biuret test: protein → purple/violet', 'Emulsion test: lipids → white emulsion']
  },
  'b3': {
    name: 'Enzymes',
    sections: [
      {
        title: 'Enzyme Structure and Function',
        content: `<div class="key-point">Enzymes are globular proteins that catalyse specific reactions. They have an active site complementary to the substrate.</div>
<div class="formula-box">Enzyme + Substrate → Enzyme-Substrate Complex → Enzyme + Products</div>`
      },
      {
        title: 'Factors Affecting Enzyme Activity',
        content: `<table class="data-table">
<tr><th>Factor</th><th>Effect</th><th>Optimum</th></tr>
<tr><td>Temperature</td><td>Increases rate up to optimum, then denatures</td><td>37°C for human enzymes</td></tr>
<tr><td>pH</td><td>Each enzyme has specific optimum pH</td><td>Pepsin: pH 2; Trypsin: pH 8</td></tr>
<tr><td>Substrate concentration</td><td>Rate increases until enzymes saturated</td><td>Vmax</td></tr>
<tr><td>Enzyme concentration</td><td>Rate proportional to enzyme concentration</td><td>—</td></tr>
</table>`
      },
      {
        title: 'Inhibition',
        content: `<table class="data-table">
<tr><th>Type</th><th>Mechanism</th><th>Reversibility</th></tr>
<tr><td>Competitive</td><td>Inhibitor competes for active site</td><td>Reversible (increase substrate to overcome)</td></tr>
<tr><td>Non-competitive</td><td>Inhibitor binds to allosteric site</td><td>Usually irreversible</td></tr>
</table>
<div class="example-box">
<h5>Worked Example: Competitive Inhibition</h5>
<p>Malonate inhibits succinate dehydrogenase because it has a similar shape to succinate (the substrate).</p>
<p>Increasing succinate concentration overcomes the inhibition.</p>
</div>`
      }
    ],
    summary: ['Enzymes are biological catalysts', 'Active site is specific to substrate (lock and key / induced fit)', 'Optimum temperature: 37°C for most human enzymes', 'Competitive inhibition: inhibitor competes for active site', 'Non-competitive inhibition: inhibitor binds to allosteric site'],
    tips: ['Always mention specificity of active site', 'Draw graphs for temperature and pH effects', 'Competitive inhibition: Vmax unchanged, Km increases', 'Non-competitive inhibition: Vmax decreases, Km unchanged']
  }
};

// CHEMISTRY DATA
const CHEMISTRY = {
  'c1': {
    name: 'Atomic Structure',
    sections: [
      {
        title: 'Atomic Particles',
        content: `<table class="data-table">
<tr><th>Particle</th><th>Relative Mass</th><th>Relative Charge</th><th>Location</th></tr>
<tr><td>Proton</td><td>1</td><td>+1</td><td>Nucleus</td></tr>
<tr><td>Neutron</td><td>1</td><td>0</td><td>Nucleus</td></tr>
<tr><td>Electron</td><td>1/1836</td><td>-1</td><td>Electron shells</td></tr>
</table>
<div class="formula-box">Mass number (A) = protons + neutrons<br>Atomic number (Z) = number of protons<br>Isotopes: same Z, different A</div>`
      },
      {
        title: 'Electronic Configuration',
        content: `<div class="formula-box">Shell 1: max 2 electrons<br>Shell 2: max 8 electrons<br>Shell 3: max 8 electrons (first 18 elements)</div>
<div class="example-box">
<h5>Worked Example</h5>
<p>Oxygen (Z=8): 2,6</p>
<p>Sodium (Z=11): 2,8,1</p>
<p>Chlorine (Z=17): 2,8,7</p>
</div>`
      },
      {
        title: 'Mass Spectrometry',
        content: `<div class="process-box">
<h5>Steps in Mass Spectrometry</h5>
<ol>
<li>Vaporisation: sample heated to gas</li>
<li>Ionisation: electron gun removes electrons → positive ions</li>
<li>Acceleration: ions accelerated by electric field</li>
<li>Deflection: ions separated by magnetic field (lighter ions deflected more)</li>
<li>Detection: ions detected and recorded</li>
</ol>
</div>
<div class="formula-box">Relative atomic mass = Σ(isotope mass × relative abundance)</div>`
      }
    ],
    summary: ['Protons: mass 1, charge +1', 'Neutrons: mass 1, charge 0', 'Electrons: mass negligible, charge -1', 'Mass number = protons + neutrons', 'Isotopes have same number of protons but different neutrons'],
    tips: ['Remember the mass spectrometry steps: Vaporise, Ionise, Accelerate, Deflect, Detect', 'Calculate RAM using isotope abundances', 'Electronic configuration follows 2,8,8 pattern for first 20 elements']
  },
  'c2': {
    name: 'Chemical Bonding',
    sections: [
      {
        title: 'Types of Bonding',
        content: `<table class="data-table">
<tr><th>Type</th><th>Between</th><th>Mechanism</th><th>Properties</th></tr>
<tr><td>Ionic</td><td>Metal + Non-metal</td><td>Electron transfer</td><td>High melting point, conduct when molten/aqueous</td></tr>
<tr><td>Covalent</td><td>Non-metal + Non-metal</td><td>Electron sharing</td><td>Variable melting point, usually non-conducting</td></tr>
<tr><td>Metallic</td><td>Metal + Metal</td><td>Delocalised electrons</td><td>Malleable, conducting, lustrous</td></tr>
<tr><td>Hydrogen</td><td>H and O/N/F</td><td>Dipole-dipole</td><td>Explains high boiling points of H₂O, NH₃, HF</td></tr>
</table>`
      },
      {
        title: 'Dot-and-Cross Diagrams',
        content: `<div class="example-box">
<h5>Worked Example: NaCl</h5>
<p>Na → Na⁺ + e⁻</p>
<p>Cl + e⁻ → Cl⁻</p>
<p>Ionic bond formed by electrostatic attraction between Na⁺ and Cl⁻</p>
</div>
<div class="example-box">
<h5>Worked Example: H₂O</h5>
<p>Oxygen shares 2 electrons with each hydrogen (2 lone pairs, 2 bonding pairs)</p>
<p>Bond angle: 104.5° (bent shape)</p>
</div>`
      },
      {
        title: 'Intermolecular Forces',
        content: `<table class="data-table">
<tr><th>Force</th><th>Strength</th><th>Between</th></tr>
<tr><td>Van der Waals</td><td>Weak</td><td>All molecules</td></tr>
<tr><td>Dipole-dipole</td><td>Moderate</td><td>Polar molecules</td></tr>
<tr><td>Hydrogen bonding</td><td>Strong</td><td>H with N, O, or F</td></tr>
</table>
<div class="key-point">Hydrogen bonding explains why water has a high boiling point and ice is less dense than water.</div>`
      }
    ],
    summary: ['Ionic: electron transfer between metal and non-metal', 'Covalent: electron sharing between non-metals', 'Metallic: delocalised electrons in metal lattice', 'Hydrogen bonding: H bonded to N, O, or F', 'Intermolecular forces affect physical properties'],
    tips: ['Always show electron transfer/sharing clearly', 'Mention the strong electrostatic attraction in ionic bonds', 'Hydrogen bonds are stronger than van der Waals but weaker than covalent bonds', 'Shape of molecule affects polarity']
  },
  'c3': {
    name: 'States of Matter',
    sections: [
      {
        title: 'Kinetic Theory',
        content: `<table class="data-table">
<tr><th>State</th><th>Shape</th><th>Volume</th><th>Particle Arrangement</th><th>Energy</th></tr>
<tr><td>Solid</td><td>Fixed</td><td>Fixed</td><td>Regular lattice, vibrating</td><td>Lowest</td></tr>
<tr><td>Liquid</td><td>Takes container shape</td><td>Fixed</td><td>Close, sliding past</td><td>Medium</td></tr>
<tr><td>Gas</td><td>Takes container shape</td><td>Fills container</td><td>Far apart, random motion</td><td>Highest</td></tr>
</table>`
      },
      {
        title: 'Ideal Gas Equation',
        content: `<div class="formula-box">PV = nRT<br>P = pressure (Pa), V = volume (m³)<br>n = moles, R = 8.314 J K⁻¹ mol⁻¹<br>T = temperature (K)</div>
<div class="example-box">
<h5>Worked Example</h5>
<p>Find volume of 2 moles of gas at 300 K and 100 kPa.</p>
<p>V = nRT/P = (2 × 8.314 × 300)/100000 = <strong>0.0499 m³ = 49.9 dm³</strong></p>
</div>`
      }
    ],
    summary: ['Solids: fixed shape and volume, particles vibrate', 'Liquids: fixed volume, take shape of container', 'Gases: fill container, particles far apart', 'Ideal gas equation: PV = nRT', 'Temperature in Kelvin = °C + 273'],
    tips: ['Convert units: 1 dm³ = 0.001 m³, 1 kPa = 1000 Pa', 'Always use Kelvin for temperature', 'At STP (273 K, 101325 Pa), 1 mole = 22.4 dm³']
  }
};

// PHYSICS DATA
const PHYSICS = {
  'p1': {
    name: 'Physical Quantities',
    sections: [
      {
        title: 'SI Base Units',
        content: `<table class="data-table">
<tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>
<tr><td>Mass</td><td>Kilogram</td><td>kg</td></tr>
<tr><td>Length</td><td>Metre</td><td>m</td></tr>
<tr><td>Time</td><td>Second</td><td>s</td></tr>
<tr><td>Current</td><td>Ampere</td><td>A</td></tr>
<tr><td>Temperature</td><td>Kelvin</td><td>K</td></tr>
<tr><td>Amount</td><td>Mole</td><td>mol</td></tr>
</table>`
      },
      {
        title: 'Derived Units',
        content: `<table class="data-table">
<tr><th>Quantity</th><th>Unit</th><th>Base Units</th></tr>
<tr><td>Velocity</td><td>m/s</td><td>m s⁻¹</td></tr>
<tr><td>Acceleration</td><td>m/s²</td><td>m s⁻²</td></tr>
<tr><td>Force</td><td>Newton (N)</td><td>kg m s⁻²</td></tr>
<tr><td>Energy</td><td>Joule (J)</td><td>kg m² s⁻²</td></tr>
<tr><td>Power</td><td>Watt (W)</td><td>kg m² s⁻³</td></tr>
</table>`
      },
      {
        title: 'Scalars and Vectors',
        content: `<table class="data-table">
<tr><th>Scalars</th><th>Vectors</th></tr>
<tr><td>Distance, speed, mass, time, energy, temperature</td><td>Displacement, velocity, acceleration, force, momentum, field strength</td></tr>
</table>
<div class="key-point">Vectors have magnitude and direction. Scalars have magnitude only.</div>`
      }
    ],
    summary: ['SI base units: kg, m, s, A, K, mol', 'Derived units: N = kg m s⁻², J = kg m² s⁻²', 'Scalars: magnitude only', 'Vectors: magnitude and direction', 'Check units in calculations'],
    tips: ['Always include units in calculations', 'Use base units for unit analysis', 'Vectors require direction (use arrows or angles)', 'Significant figures: match least precise measurement']
  },
  'p2': {
    name: 'Kinematics',
    sections: [
      {
        title: 'Equations of Motion',
        content: `<div class="formula-box">v = u + at<br>s = ½(u + v)t<br>s = ut + ½at²<br>s = vt − ½at²<br>v² = u² + 2as</div>
<table class="data-table">
<tr><th>Symbol</th><th>Meaning</th><th>Units</th></tr>
<tr><td>s</td><td>Displacement</td><td>m</td></tr>
<tr><td>u</td><td>Initial velocity</td><td>m/s</td></tr>
<tr><td>v</td><td>Final velocity</td><td>m/s</td></tr>
<tr><td>a</td><td>Acceleration</td><td>m/s²</td></tr>
<tr><td>t</td><td>Time</td><td>s</td></tr>
</table>`
      },
      {
        title: 'Graphs',
        content: `<table class="data-table">
<tr><th>Graph</th><th>Gradient</th><th>Area</th></tr>
<tr><td>Displacement-time</td><td>Velocity</td><td>—</td></tr>
<tr><td>Velocity-time</td><td>Acceleration</td><td>Displacement</td></tr>
<tr><td>Acceleration-time</td><td>—</td><td>Change in velocity</td></tr>
</table>`
      }
    ],
    summary: ['SUVAT equations for constant acceleration', 'v = u + at, s = ut + ½at², v² = u² + 2as', 'v-t graph: gradient = acceleration, area = displacement', 's-t graph: gradient = velocity', 'Take care with signs (direction)'],
    tips: ['Choose the SUVAT equation with the missing variable', 'Draw graphs to visualise', 'Check units: all SI (m, s, m/s, m/s²)', 'Deceleration = negative acceleration']
  },
  'p3': {
    name: 'Dynamics',
    sections: [
      {
        title: "Newton's Laws",
        content: `<div class="formula-box">First Law: Object remains at rest or constant velocity unless acted on by resultant force.<br>Second Law: F = ma<br>Third Law: Action and reaction are equal and opposite.</div>`
      },
      {
        title: 'Forces',
        content: `<table class="data-table">
<tr><th>Type</th><th>Description</th></tr>
<tr><td>Weight</td><td>W = mg (acts vertically downward)</td></tr>
<tr><td>Normal reaction</td><td>Perpendicular to surface</td></tr>
<tr><td>Tension</td><td>In ropes/strings (pulling force)</td></tr>
<tr><td>Friction</td><td>Opposes motion</td></tr>
<tr><td>Drag</td><td>Resistance in fluids</td></tr>
</table>`
      },
      {
        title: 'Connected Particles',
        content: `<div class="process-box">
<h5>Method</h5>
<ol>
<li>Draw separate force diagrams for each particle</li>
<li>Apply F = ma to each particle</li>
<li>Relate accelerations (usually same magnitude)</li>
<li>Solve simultaneous equations</li>
</ol>
</div>`
      }
    ],
    summary: ['Newton\'s First Law: inertia', 'Newton\'s Second Law: F = ma', 'Newton\'s Third Law: action-reaction pairs', 'Weight: W = mg', 'Free body diagrams essential'],
    tips: ['Always draw clear diagrams', 'Define positive direction', 'Tension same throughout light inextensible string', 'For inclined planes, resolve parallel and perpendicular']
  }
};

let rebuilt = 0;

function processSubject(subjectData, prefix) {
  for (const [key, data] of Object.entries(subjectData)) {
    const variants = [
      `${prefix}${key}.html`,
      `${prefix}${key}-a.html`,
      `${prefix}${key}-igcse.html`
    ];

    const syllabusMap = {
      [`${prefix}${key}.html`]: 'A-Level',
      [`${prefix}${key}-a.html`]: 'A-Level',
      [`${prefix}${key}-igcse.html`]: 'IGCSE'
    };

    for (const file of variants) {
      const filepath = path.join(notesDir, file);
      if (!fs.existsSync(filepath)) continue;
      const page = buildPage(data.name, syllabusMap[file] || 'A-Level', data.sections, data.summary, data.tips);
      fs.writeFileSync(filepath, page);
      console.log(`✅ Rebuilt: ${file}`);
      rebuilt++;
    }
  }
}

console.log('=== Rebuilding Biology ===');
processSubject(BIOLOGY, 'biology-');

console.log('\n=== Rebuilding Chemistry ===');
processSubject(CHEMISTRY, 'chemistry-');

console.log('\n=== Rebuilding Physics ===');
processSubject(PHYSICS, 'physics-');

console.log(`\nTotal rebuilt: ${rebuilt} files`);
