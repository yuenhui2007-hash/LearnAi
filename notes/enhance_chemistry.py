#!/usr/bin/env python3
"""
Enhance all Cambridge A-Level Chemistry topic notes with substantially more detail.
Generates enhanced versions of chemistry-c*.html and chemistry-*-summary.html files.
"""
import os
import re
import glob

NOTES_DIR = "/home/node/.openclaw/workspace/LearnAi/notes"

# Shared CSS block used by the classic notes pages
CLASSIC_CSS = """<style>
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
.misconception-box { background: #fff1f2; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #f43f5e; margin: 20px 0; color: #881337; }
.misconception-box h5 { color: #be123c; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.exam-question { background: #f8fafc; padding: 20px 24px; border-radius: 10px; border: 2px solid #94a3b8; margin: 20px 0; }
.exam-question h5 { color: #334155; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.mark-scheme { background: #f0fdf4; padding: 16px 20px; border-radius: 8px; margin-top: 12px; color: #166534; }
.definition-box { background: #fff7ed; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #f97316; margin: 20px 0; color: #7c2d12; }
.definition-box h5 { color: #c2410c; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
@media (max-width: 768px) {
  .notes-container { padding: 24px; }
  .topic-content { padding-left: 0; }
  .topic-header { flex-direction: column; align-items: flex-start; }
}
</style>"""

CLASSIC_NAV = """<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>"""
CLASSIC_FOOTER = """<script src="../js/theme.js?v=5"></script>
</body>
</html>"""

SUMMARY_CSS = """<style>
.notes-page { padding: 120px 0 60px; background: var(--light); min-height: 100vh; }
.notes-container { max-width: 900px; margin: 0 auto; background: var(--white); padding: 48px; border-radius: var(--radius-xl); box-shadow: var(--shadow); }
.notes-header { margin-bottom: 40px; padding-bottom: 24px; border-bottom: 2px solid var(--gray-light); }
.notes-header h1 { font-size: 2rem; margin-bottom: 12px; }
.level-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.level-badge { padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
.badge-igcse { background: #dbeafe; color: #1e40af; }
.badge-as { background: #dcfce7; color: #166534; }
.badge-a2 { background: #fef3c7; color: #92400e; }
.notes-section { margin-bottom: 40px; }
.notes-section h2 { font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--primary-light); }
.notes-section h3 { font-size: 1.1rem; color: var(--dark); margin: 24px 0 12px; }
.notes-section p { margin-bottom: 12px; line-height: 1.8; color: var(--dark-light); }
.notes-section ul { margin: 12px 0; padding-left: 24px; }
.notes-section ul li { margin-bottom: 8px; color: var(--dark-light); line-height: 1.7; }
.formula-box { background: var(--light); padding: 16px 20px; border-radius: var(--radius); border-left: 4px solid var(--primary); font-family: 'Courier New', monospace; margin: 16px 0; font-size: 0.95rem; }
.highlight-box { background: rgba(99,102,241,0.08); padding: 16px 20px; border-radius: var(--radius); margin: 16px 0; }
.highlight-box h4 { color: var(--primary); margin-bottom: 8px; font-size: 0.9rem; text-transform: uppercase; }
.back-btn { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px; color: var(--primary); font-weight: 600; }
.exam-tips { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 28px; border-radius: 12px; margin: 40px 0; }
.exam-tips h2 { color: #1e40af; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #3b82f6; }
.exam-tips ul { margin: 0; padding-left: 20px; }
.exam-tips li { color: #1e3a8a; margin-bottom: 8px; line-height: 1.6; }
.key-point { background: #fef9c3; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #eab308; margin: 20px 0; color: #854d0e; font-weight: 500; }
.definition-box { background: #fff7ed; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #f97316; margin: 20px 0; color: #7c2d12; }
.definition-box h5 { color: #c2410c; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.misconception-box { background: #fff1f2; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #f43f5e; margin: 20px 0; color: #881337; }
@media (max-width: 768px) { .notes-container { padding: 24px; } }
</style>"""

SUMMARY_NAV = """<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>"""
SUMMARY_FOOTER = """<script src="../js/theme.js?v=4"></script>
<script src="../js/auth.js?v=4"></script><script src="../js/app.js?v=4"></script>
<script src="../js/mascot.js?v=4"></script>
<script src="../js/notes.js?v=4"></script>
<script src="../js/pwa.js?v=4"></script>
</body></html>"""


def write_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Wrote {path}")


# ============================================================
# ENHANCED CONTENT FOR EACH TOPIC
# ============================================================

C1_CONTENT = """
<div class="toc">
<h2>📑 Contents</h2>
<ol>
<li><a href="#section-1">Atomic Particles & Nuclear Notation</a></li>
<li><a href="#section-2">Electronic Configuration & Ionisation Energy</a></li>
<li><a href="#section-3">Mass Spectrometry & Isotopes</a></li>
<li><a href="#section-4">Exam-Style Questions</a></li>
</ol>
</div>

<div class="topic-block" id="section-1">
<div class="topic-header">
<span class="topic-number">1</span>
<h3>Atomic Particles & Nuclear Notation</h3>
</div>
<div class="topic-content">
<p>Every atom consists of a central nucleus containing protons and neutrons, surrounded by electrons in energy levels or shells. Understanding the properties of these subatomic particles is fundamental to all of chemistry.</p>

<table class="data-table">
<tr><th>Particle</th><th>Relative Mass</th><th>Relative Charge</th><th>Location</th><th>Absolute Mass (kg)</th></tr>
<tr><td>Proton</td><td>1</td><td>+1</td><td>Nucleus</td><td>1.673 × 10⁻²⁷</td></tr>
<tr><td>Neutron</td><td>1</td><td>0</td><td>Nucleus</td><td>1.675 × 10⁻²⁷</td></tr>
<tr><td>Electron</td><td>1/1836 ≈ 0.0005</td><td>-1</td><td>Electron shells</td><td>9.109 × 10⁻³¹</td></tr>
</table>

<div class="definition-box">
<h5>📘 Key Definitions</h5>
<p><strong>Atomic number (Z):</strong> The number of protons in the nucleus of an atom. It defines the element.</p>
<p><strong>Mass number (A):</strong> The total number of protons and neutrons in the nucleus.</p>
<p><strong>Isotopes:</strong> Atoms of the same element (same Z) with different numbers of neutrons (different A).</p>
<p><strong>Relative atomic mass (Aᵣ):</strong> The weighted average mass of an atom of an element compared to 1/12th the mass of a carbon-12 atom.</p>
</div>

<div class="formula-box">Mass number (A) = protons + neutrons<br>Atomic number (Z) = number of protons = number of electrons (in neutral atom)<br>Number of neutrons = A − Z</div>

<div class="example-box">
<h5>Worked Example: Nuclear Notation</h5>
<p>Write the nuclear symbol for an atom with 17 protons and 18 neutrons.</p>
<p><strong>Solution:</strong> Z = 17 (chlorine), A = 17 + 18 = 35. Symbol: ³⁵₁₇Cl</p>
</div>

<div class="example-box">
<h5>Worked Example: Isotopes</h5>
<p>Chlorine has two stable isotopes: ³⁵Cl (75.8%) and ³⁷Cl (24.2%). Calculate Aᵣ.</p>
<p><strong>Solution:</strong> Aᵣ = (35 × 75.8 + 37 × 24.2) / 100 = (2653 + 895.4) / 100 = 35.5 (to 1 d.p.)</p>
</div>

<div class="misconception-box">
<h5>⚠️ Common Misconceptions</h5>
<p>• Isotopes do NOT have different chemical properties — only physical properties like mass and density differ because chemistry depends on electrons, not neutrons.</p>
<p>• Relative atomic mass is NOT simply the average of isotope masses — it must be weighted by abundance.</p>
<p>• The mass number is always a whole number; relative atomic mass is usually not.</p>
</div>

<div class="key-point">For a positive ion: electrons = Z − charge. For a negative ion: electrons = Z + |charge|.</div>
</div>
</div>

<div class="topic-block" id="section-2">
<div class="topic-header">
<span class="topic-number">2</span>
<h3>Electronic Configuration & Ionisation Energy</h3>
</div>
<div class="topic-content">
<p>Electrons occupy energy levels (shells) around the nucleus. Each shell contains subshells (s, p, d, f) which hold orbitals. An orbital can hold a maximum of 2 electrons with opposite spins.</p>

<div class="definition-box">
<h5>📘 Key Definitions</h5>
<p><strong>Shell (principal quantum number n):</strong> Main energy level. n = 1, 2, 3...</p>
<p><strong>Subshell:</strong> s (1 orbital, 2e⁻ max), p (3 orbitals, 6e⁻ max), d (5 orbitals, 10e⁻ max), f (7 orbitals, 14e⁻ max).</p>
<p><strong>Orbital:</strong> A region of space where an electron may be found. Maximum 2 electrons per orbital (Pauli exclusion principle).</p>
</div>

<div class="process-box">
<h5>Aufbau Principle — Filling Order</h5>
<ol>
<li>Fill lowest energy orbitals first</li>
<li>Each orbital gets one electron before pairing (Hund's rule)</li>
<li>Maximum 2 electrons per orbital with opposite spins</li>
</ol>
</div>

<div class="formula-box">Filling order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p...</div>

<div class="example-box">
<h5>Worked Example: Electronic Configurations</h5>
<p>Fe (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ (or [Ar] 3d⁶ 4s²)</p>
<p>Fe²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ (lose 4s electrons first!)</p>
<p>Fe³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ (half-filled d subshell is extra stable)</p>
</div>

<div class="key-point">Exceptions to remember: Cr = [Ar] 3d⁵ 4s¹ and Cu = [Ar] 3d¹⁰ 4s¹. A half-filled or fully-filled d subshell gives extra stability.</div>

<h4>Ionisation Energy</h4>
<p>First ionisation energy (IE₁): energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous +1 ions.</p>
<div class="formula-box">X(g) → X⁺(g) + e⁻</div>

<h4>Trends in First Ionisation Energy</h4>
<p><strong>Across a period (left to right):</strong> Generally increases due to increasing nuclear charge with similar shielding. Smaller atomic radius means electrons are held more tightly.</p>
<p><strong>Down a group:</strong> Decreases because outer electrons are further from the nucleus and there is more shielding from inner shells.</p>

<div class="diagram-box">
<strong>Explain the dip at Group 13 (e.g., Al):</strong><br>
Al: [Ne] 3s² 3p¹. The 3p electron is slightly higher in energy than 3s and is partially shielded by the 3s electrons, so it is removed more easily than expected → lower IE.
</div>

<div class="diagram-box">
<strong>Explain the dip at Group 16 (e.g., S):</strong><br>
S: [Ne] 3s² 3p⁴. The fourth p electron must pair up in an already-occupied orbital. Electron-electron repulsion in the paired orbital makes it easier to remove → lower IE than P.
</div>

<div class="example-box">
<h5>Worked Example: Explaining IE Trend</h5>
<p>Explain why magnesium has a higher first ionisation energy than aluminium.</p>
<p><strong>Solution:</strong> Mg: 1s² 2s² 2p⁶ 3s²; Al: 1s² 2s² 2p⁶ 3s² 3p¹. Al's outer electron is in a 3p orbital which is at a slightly higher energy than 3s and is shielded by the 3s² pair. Less energy is needed to remove it. In Mg, both outer electrons are in the same 3s subshell with no additional shielding, so they are held more tightly.</p>
</div>

<div class="misconception-box">
<h5>⚠️ Common Misconceptions</h5>
<p>• Do NOT say "the 3p electron is further from the nucleus" — 3s and 3p are at roughly similar distances.</p>
<p>• Always mention nuclear charge, atomic radius, AND shielding when explaining trends.</p>
<p>• Ionisation energy refers to gaseous atoms — state symbols matter!</p>
</div>
</div>
</div>

<div class="topic-block" id="section-3">
<div class="topic-header">
<span class="topic-number">3</span>
<h3>Mass Spectrometry & Isotopes</h3>
</div>
<div class="topic-content">
<p>Mass spectrometry is an analytical technique used to determine relative atomic masses, molecular masses, and structural information. It is essential in identifying unknown compounds.</p>

<div class="process-box">
<h5>Steps in Mass Spectrometry (Electron Impact)</h5>
<ol>
<li><strong>Vaporisation:</strong> Sample is heated to become a gas</li>
<li><strong>Ionisation:</strong> High-energy electrons bombard sample molecules, knocking off an electron → M⁺ (molecular ion)</li>
<li><strong>Acceleration:</strong> Positive ions are accelerated by an electric field</li>
<li><strong>Deflection:</strong> Magnetic field deflects ions based on mass-to-charge ratio (m/z). Lighter ions are deflected more.</li>
<li><strong>Detection:</strong> Ions hit a detector; signal intensity is proportional to abundance</li>
</ol>
</div>

<div class="key-point">In a mass spectrum, the peak with the highest m/z value (on the far right) is the molecular ion peak M⁺ and gives the relative molecular mass.</div>

<div class="formula-box">Relative atomic mass = Σ(isotope mass × relative abundance) / 100</div>

<div class="example-box">
<h5>Worked Example: Calculating Aᵣ from Mass Spectrum</h5>
<p>A sample of boron gives peaks at m/z 10 (abundance 20%) and m/z 11 (abundance 80%).</p>
<p><strong>Solution:</strong> Aᵣ = (10 × 20 + 11 × 80) / 100 = (200 + 880) / 100 = 10.8</p>
</div>

<div class="example-box">
<h5>Worked Example: Identifying an Element</h5>
<p>An element has peaks at m/z 63 (69.2%) and m/z 65 (30.8%). Identify the element.</p>
<p><strong>Solution:</strong> Aᵣ = (63 × 69.2 + 65 × 30.8) / 100 = 63.6. This is copper (Cu).</p>
</div>

<h4>Fragmentation Patterns</h4>
<p>The molecular ion M⁺ is often unstable and breaks into fragments. These fragments produce peaks at lower m/z values and give structural clues:</p>
<ul>
<li>m/z 15: CH₃⁺</li>
<li>m/z 29: CHO⁺ or C₂H₅⁺</li>
<li>m/z 43: C₃H₇⁺ or CH₃CO⁺</li>
<li>m/z 77: C₆H₅⁺ (phenyl)</li>
</ul>

<div class="exam-tips">
<h2>💡 Examiner Tips</h2>
<ul>
<li>Always show your working when calculating Aᵣ from isotope data</li>
<li>The molecular ion peak gives Mr; fragmentation peaks give structural information</li>
<li>For Time of Flight (TOF) mass spec: ions with same kinetic energy, lighter ones travel faster</li>
<li>Remember: M+1 peak from ¹³C (~1.1% natural abundance)</li>
</ul>
</div>
</div>
</div>

<div class="topic-block" id="section-4">
<div class="topic-header">
<span class="topic-number">4</span>
<h3>Exam-Style Questions</h3>
</div>
<div class="topic-content">
<div class="exam-question">
<h5>📝 Exam Question 1</h5>
<p>(a) Define the term first ionisation energy. [2]</p>
<p>(b) Write an equation for the second ionisation energy of magnesium. [1]</p>
<p>(c) Explain why aluminium has a lower first ionisation energy than magnesium. [3]</p>
<div class="mark-scheme">
<strong>Mark Scheme:</strong><br>
(a) Energy required to remove one mole of electrons from one mole of gaseous atoms (1) to form one mole of gaseous +1 ions (1).<br>
(b) Mg⁺(g) → Mg²⁺(g) + e⁻ (1)<br>
(c) Al has electron in 3p orbital (1) which is higher in energy / more shielded by 3s² (1) so less energy needed to remove it / electron is less strongly held (1).
</div>
</div>

<div class="exam-question">
<h5>📝 Exam Question 2</h5>
<p>A sample of magnesium contains three isotopes with the following abundances: ²⁴Mg 78.6%, ²⁵Mg 10.1%, ²⁶Mg 11.3%. Calculate the relative atomic mass to 1 decimal place. [2]</p>
<div class="mark-scheme">
<strong>Mark Scheme:</strong><br>
Aᵣ = (24 × 78.6 + 25 × 10.1 + 26 × 11.3) / 100 (1) = 24.3 (1)
</div>
</div>
</div>
</div>

<div class="summary-box">
<h2>📝 Quick Summary</h2>
<ul>
<li>Protons: mass 1, charge +1; Neutrons: mass 1, charge 0; Electrons: mass negligible, charge -1</li>
<li>Mass number = protons + neutrons; Atomic number = protons</li>
<li>Isotopes have same Z, different A; same chemical properties, different physical properties</li>
<li>Electronic configuration follows Aufbau, Pauli, Hund's rules</li>
<li>Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹</li>
<li>IE increases across period, decreases down group; dips at Gp 13 and Gp 16</li>
<li>Mass spec steps: Vaporise → Ionise → Accelerate → Deflect → Detect</li>
<li>Aᵣ = Σ(isotope mass × abundance) / 100</li>
</ul>
</div>
<div class="exam-tips">
<h2>💡 Exam Tips</h2>
<ul>
<li>Remember the mass spectrometry steps: Vaporise, Ionise, Accelerate, Deflect, Detect</li>
<li>Calculate RAM using isotope abundances — always show working</li>
<li>Electronic configuration: 4s fills before 3d, but empties before 3d in ions</li>
<li>When explaining IE trends, always mention nuclear charge, atomic radius, and shielding</li>
<li>Use state symbols (g) in ionisation energy equations</li>
</ul>
</div>
"""

C2_CONTENT = """
<div class="toc">
<h2>📑 Contents</h2>
<ol>
<li><a href="#section-1">Types of Bonding</a></li>
<li><a href="#section-2">Covalent Bonding & Shapes</a></li>
<li><a href="#section-3">Intermolecular Forces</a></li>
<li><a href="#section-4">Exam-Style Questions</a></li>
</ol>
</div>

<div class="topic-block" id="section-1">
<div class="topic-header">
<span class="topic-number">1</span>
<h3>Types of Bonding</h3>
</div>
<div class="topic-content">
<p>Chemical bonding holds atoms together in compounds. The type of bonding depends on the elements involved and determines the physical and chemical properties of the substance.</p>

<table class="data-table">
<tr><th>Type</th><th>Between</th><th>Mechanism</th><th>Melting Point</th><th>Electrical Conductivity</th></tr>
<tr><td>Ionic</td><td>Metal + Non-metal</td><td>Electrostatic attraction between oppositely charged ions</td><td>High</td><td>Only molten or aqueous</td></tr>
<tr><td>Covalent (simple molecular)</td><td>Non-metal + Non-metal</td><td>Shared pair of electrons</td><td>Low</td><td>Non-conducting</td></tr>
<tr><td>Covalent (giant covalent)</td><td>Non-metal + Non-metal</td><td>Shared electrons in network</td><td>Very high</td><td>Usually non-conducting (except graphite)</td></tr>
<tr><td>Metallic</td><td>Metal + Metal</td><td>Electrostatic attraction between positive ions and delocalised electrons</td><td>High</td><td>Conducting</td></tr>
</table>

<div class="definition-box">
<h5>📘 Key Definitions</h5>
<p><strong>Ionic bond:</strong> Electrostatic attraction between oppositely charged ions formed by electron transfer.</p>
<p><strong>Covalent bond:</strong> A shared pair of electrons between two atoms.</p>
<p><strong>Coordinate (dative) bond:</strong> A covalent bond where both electrons come from the same atom.</p>
<p><strong>Metallic bond:</strong> Electrostatic attraction between positive metal ions and a sea of delocalised electrons.</p>
</div>

<h4>Ionic Bonding in Detail</h4>
<p>Ionic compounds form giant ionic lattices. Each ion is surrounded by oppositely charged ions. The strong electrostatic forces act in all directions, giving ionic compounds high melting points.</p>

<div class="example-box">
<h5>Worked Example: Drawing Dot-and-Cross Diagrams</h5>
<p><strong>MgCl₂:</strong></p>
<p>Mg (2.8.2) loses 2 electrons → Mg²⁺ (2.8)</p>
<p>Each Cl (2.8.7) gains 1 electron → Cl⁻ (2.8.8)</p>
<p>Formula: MgCl₂ (one Mg²⁺ balances two Cl⁻)</p>
</div>

<div class="key-point">Ionic compounds conduct electricity ONLY when molten or dissolved in water because the ions are free to move. In the solid state, ions are fixed in the lattice and cannot move.</div>

<h4>Metallic Bonding in Detail</h4>
<p>Metals consist of a lattice of positive ions surrounded by a 'sea' of delocalised valence electrons. This explains:</p>
<ul>
<li>High electrical conductivity — electrons are mobile</li>
<li>Malleability and ductility — layers of ions can slide without breaking bonds</li>
<li>Lustre — free electrons reflect light</li>
<li>High melting points — strong metallic bonds</li>
</ul>

<div class="example-box">
<h5>Worked Example: Explaining Properties</h5>
<p>Explain why sodium is malleable but sodium chloride is brittle.</p>
<p><strong>Solution:</strong> In sodium, layers of positive ions can slide over each other because the delocalised electrons maintain the metallic bond in new positions. In NaCl, sliding brings like charges together, causing repulsion and fracture.</p>
</div>
</div>
</div>

<div class="topic-block" id="section-2">
<div class="topic-header">
<span class="topic-number">2</span>
<h3>Covalent Bonding & Shapes</h3>
</div>
<div class="topic-content">
<p>Covalent bonds form when atoms share electron pairs to achieve noble gas configurations. The shapes of molecules can be predicted using VSEPR (Valence Shell Electron Pair Repulsion) theory.</p>

<div class="definition-box">
<h5>📘 Key Definitions</h5>
<p><strong>Bond pair:</strong> A shared pair of electrons between two atoms.</p>
<p><strong>Lone pair:</strong> A non-bonding pair of electrons on one atom.</p>
<p><strong>VSEPR:</strong> Electron pairs around a central atom arrange themselves to minimise repulsion. Order of repulsion: lone pair-lone pair > lone pair-bond pair > bond pair-bond pair.</p>
</div>

<table class="data-table">
<tr><th>Electron Pairs (bonding + lone)</th><th>Shape</th><th>Bond Angle</th><th>Example</th></tr>
<tr><td>2</td><td>Linear</td><td>180°</td><td>BeCl₂, CO₂</td></tr>
<tr><td>3 (0 lone)</td><td>Trigonal planar</td><td>120°</td><td>BF₃, AlCl₃</td></tr>
<tr><td>4 (0 lone)</td><td>Tetrahedral</td><td>109.5°</td><td>CH₄, CCl₄</td></tr>
<tr><td>4 (1 lone)</td><td>Trigonal pyramidal</td><td>107°</td><td>NH₃</td></tr>
<tr><td>4 (2 lone)</td><td>Bent / V-shaped</td><td>104.5°</td><td>H₂O</td></tr>
<tr><td>5 (0 lone)</td><td>Trigonal bipyramidal</td><td>90°, 120°</td><td>PCl₅</td></tr>
<tr><td>6 (0 lone)</td><td>Octahedral</td><td>90°</td><td>SF₆</td></tr>
</table>

<div class="example-box">
<h5>Worked Example: Predicting Shape</h5>
<p>Predict the shape and bond angle of NH₃.</p>
<p><strong>Solution:</strong> N has 5 valence electrons. Three bond pairs (N-H) and one lone pair = 4 electron pairs total. Shape is trigonal pyramidal. Bond angle is approximately 107° (less than 109.5° because lone pair repels more than bond pairs).</p>
</div>

<div class="example-box">
<h5>Worked Example: CO₂ vs SO₂</h5>
<p>CO₂: C has 4 valence electrons, forms 2 double bonds = 2 electron pairs → linear, 180°</p>
<p>SO₂: S has 6 valence electrons, forms 2 double bonds + 1 lone pair = 3 electron pairs → bent, ~120°</p>
</div>

<div class="misconception-box">
<h5>⚠️ Common Misconceptions</h5>
<p>• Double bonds count as ONE region of electron density for VSEPR, not two.</p>
<p>• Always count ALL electron pairs (bonding + lone), not just bonds.</p>
<p>• Lone pairs repel more than bond pairs, so they compress bond angles.</p>
<p>• A molecule can have polar bonds but be non-polar overall if symmetrical (e.g., CCl₄).</p>
</div>

<h4>Polarity</h4>
<p>A bond is polar if there is an electronegativity difference between the atoms. The more electronegative atom attracts electrons, becoming δ−; the other becomes δ+.</p>
<div class="key-point">Molecules with polar bonds AND an asymmetrical shape are polar overall (e.g., H₂O, NH₃). Symmetrical molecules with polar bonds are non-polar overall (e.g., CO₂, CCl₄).</div>
</div>
</div>

<div class="topic-block" id="section-3">
<div class="topic-header">
<span class="topic-number">3</span>
<h3>Intermolecular Forces</h3>
</div>
<div class="topic-content">
<p>Intermolecular forces (IMFs) are attractions between molecules. They are much weaker than covalent, ionic, or metallic bonds but determine physical properties like boiling point and solubility.</p>

<table class="data-table">
<tr><th>Force</th><th>Relative Strength</th><th>Between</th><th>Example</th></tr>
<tr><td>London dispersion (van der Waals)</td><td>Weakest</td><td>All molecules</td><td>CH₄, noble gases</td></tr>
<tr><td>Dipole-dipole</td><td>Moderate</td><td>Polar molecules</td><td>HCl, propanone</td></tr>
<tr><td>Hydrogen bonding</td><td>Strongest IMF</td><td>H bonded to N, O, or F</td><td>H₂O, NH₃, HF, alcohols</td></tr>
</table>

<div class="definition-box">
<h5>📘 Key Definitions</h5>
<p><strong>Van der Waals forces:</strong> Temporary dipoles induced by fluctuating electron clouds. Strength increases with number of electrons / molecular size.</p>
<p><strong>Dipole-dipole forces:</strong> Permanent attractions between δ+ and δ− ends of polar molecules.</p>
<p><strong>Hydrogen bond:</strong> Strong dipole-dipole attraction between H (δ+) bonded to N, O, or F and a lone pair on another N, O, or F.</p>
</div>

<h4>Hydrogen Bonding — Special Cases</h4>
<p><strong>Water:</strong> Each water molecule can form up to 4 hydrogen bonds. This explains:</p>
<ul>
<li>High boiling point (100°C) compared to H₂S (-60°C)</li>
<li>Ice is less dense than water — hydrogen bonds hold molecules in an open hexagonal lattice</li>
<li>High surface tension and specific heat capacity</li>
</ul>

<p><strong>DNA:</strong> Hydrogen bonds between complementary base pairs (A-T: 2 H-bonds; G-C: 3 H-bonds) hold the double helix together.</p>

<div class="example-box">
<h5>Worked Example: Boiling Points</h5>
<p>Explain why ethanol (C₂H₅OH, bp 78°C) has a higher boiling point than ethane (C₂H₆, bp -89°C).</p>
<p><strong>Solution:</strong> Both have similar numbers of electrons so similar van der Waals forces. However, ethanol has hydrogen bonding between the -OH groups (H bonded to O), which is much stronger than the van der Waals forces in ethane. More energy is needed to overcome hydrogen bonds.</p>
</div>

<div class="key-point">When comparing boiling points: (1) Check for hydrogen bonding first; (2) If both H-bond, compare number of H-bonds; (3) If no H-bond, compare molecular size / number of electrons (van der Waals); (4) Consider polarity for dipole-dipole.</div>

<div class="misconception-box">
<h5>⚠️ Common Misconceptions</h5>
<p>• Hydrogen bonds are NOT covalent bonds — they are intermolecular forces.</p>
<p>• Only H bonded directly to N, O, or F can hydrogen bond. CH₃OH can; CH₃OCH₃ cannot (no H on O).</p>
<p>• Intramolecular hydrogen bonds (within a molecule) exist in some cases like proteins, but most H-bonds in exams are intermolecular.</p>
</div>
</div>
</div>

<div class="topic-block" id="section-4">
<div class="topic-header">
<span class="topic-number">4</span>
<h3>Exam-Style Questions</h3>
</div>
<div class="topic-content">
<div class="exam-question">
<h5>📝 Exam Question 1</h5>
<p>(a) State and explain the shape of a beryllium chloride (BeCl₂) molecule. [2]</p>
<p>(b) State and explain the shape of a water (H₂O) molecule. [3]</p>
<div class="mark-scheme">
<strong>Mark Scheme:</strong><br>
(a) Linear (1). Two bonding pairs / two regions of electron density (1) which arrange to minimise repulsion.<br>
(b) Bent / V-shaped / non-linear (1). Two bonding pairs and two lone pairs / four regions of electron density (1). Lone pairs repel more than bonding pairs, reducing angle from 109.5° to 104.5° (1).
</div>
</div>

<div class="exam-question">
<h5>📝 Exam Question 2</h5>
<p>Explain why ice is less dense than liquid water. [3]</p>
<div class="mark-scheme">
<strong>Mark Scheme:</strong><br>
In ice, water molecules are held in a rigid lattice / open structure by hydrogen bonds (1). Each water molecule forms four hydrogen bonds (1). When ice melts, some hydrogen bonds break and the molecules can pack closer together (1), so liquid water has a higher density.
</div>
</div>
</div>
</div>

<div class="summary-box">
<h2>📝 Quick Summary</h2>
<ul>
<li>Ionic: electrostatic attraction; high mp; conduct when molten/aqueous</li>
<li>Covalent: shared electrons; simple molecular = low mp; giant covalent = very high mp</li>
<li>Metallic: cations + delocalised electrons; conducting; malleable</li>
<li>VSEPR: electron pairs minimise repulsion; lone pairs repel more than bond pairs</li>
<li>2 pairs = linear (180°); 3 = trigonal planar (120°); 4 = tetrahedral (109.5°)</li>
<li>3 bonds + 1 lone = trigonal pyramidal (~107°); 2 bonds + 2 lone = bent (~104.5°)</li>
<li>IMFs: van der Waals < dipole-dipole < hydrogen bonding</li>
<li>H-bonding only when H is bonded to N, O, or F</li>
</ul>
</div>
<div class="exam-tips">
<h2>💡 Exam Tips</h2>
<ul>
<li>Always count ALL electron pairs for VSEPR (bonding + lone)</li>
<li>When comparing melting points: giant structures > H-bonded > polar > non-polar</li>
<li>Graphite conducts (delocalised electrons between layers); diamond doesn't</li>
<li>Dipole moment direction: arrow points toward negative (δ−) end</li>
<li>Symmetrical molecules with polar bonds are non-polar overall</li>
</ul>
</div>
"""

# Helper to build a classic page

def build_classic_page(title, tag, content):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — A-Level | LearnAI</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=5">
{CLASSIC_CSS}
</head>
<body>
{CLASSIC_NAV}
<section class="notes-page"><div class="container">
<div class="notes-container">
<a href="../subject.html?id=chemistry&level=alevel" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:12px;background:#f3f4f6;color:#1f2937;font-weight:500;text-decoration:none;margin-bottom:24px;transition:all 0.2s;">← Back to Chemistry</a>
<div class="notes-header">
<span class="syllabus-tag">{tag}</span>
<h1>{title}</h1>
<p style="color:#64748b;margin-top:8px;">Comprehensive study notes with worked examples, mechanisms, and examiner tips</p>
</div>
{content}
</div>
</div></section>
{CLASSIC_FOOTER}
"""


def build_summary_page(title, subtitle, badges_html, content):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="manifest" href="../manifest.json">
    <meta name="theme-color" content="#6366f1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — Last-Minute Revision — LearnAI</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=4">
<link rel="stylesheet" href="../css/znotes-style.css?v=4">
{SUMMARY_CSS}
</head>
<body>
{SUMMARY_NAV}
<section class="notes-page"><div class="container">
<a href="javascript:history.back()" class="back-btn">← Back</a>
<div class="notes-container">
<div class="notes-header">
<div class="level-badges">{badges_html}</div>
<h1>{title}</h1>
<p style="color:var(--gray)">{subtitle}</p>
</div>
{content}
</div>
</div></section>
{SUMMARY_FOOTER}
"""


# ============================================================
# GENERATE FILES
# ============================================================

def main():
    os.chdir(NOTES_DIR)

    # C1 classic
    write_file("chemistry-c1.html", build_classic_page("Atomic Structure", "A-Level", C1_CONTENT))
    # C2 classic
    write_file("chemistry-c2.html", build_classic_page("Chemical Bonding", "A-Level", C2_CONTENT))

    print("Done generating enhanced files.")


if __name__ == "__main__":
    main()
