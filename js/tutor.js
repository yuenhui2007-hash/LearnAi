// LearnAI Tutor — Client-side expert system
// No backend required. All responses embedded in this file.

const knowledgeBase = {
  greetings: {
    patterns: ['hello','hi','hey','greetings','sup','yo'],
    response: "Hello! I'm your LearnAI Tutor. Ask me about any subject, concept, or exam tip. I can also quiz you with practice questions!"
  },

  // PHYSICS
  'physics-kinematics': {
    patterns: ['suvat','kinematics','motion','projectile','velocity','acceleration','displacement'],
    response: `<strong>Kinematics (SUVAT Equations)</strong><br><br>
    For uniform acceleration in a straight line:<br>
    <span class="formula">v = u + at</span><br>
    <span class="formula">s = ut + ½at²</span><br>
    <span class="formula">v² = u² + 2as</span><br>
    <span class="formula">s = ½(u + v)t</span><br><br>
    <strong>Projectile motion:</strong> Horizontal = constant velocity. Vertical = constant acceleration (g = 9.81 m/s²).<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Draw a diagram. Choose a positive direction. List knowns before selecting the equation.</div>`
  },

  'physics-forces': {
    patterns: ['newton','force','friction','tension','normal','resultant','equilibrium','free body'],
    response: `<strong>Forces & Newton's Laws</strong><br><br>
    <strong>1st Law:</strong> Body stays at rest or constant velocity unless acted on by resultant force.<br>
    <strong>2nd Law:</strong> F = ma<br>
    <strong>3rd Law:</strong> Action = reaction (equal and opposite)<br><br>
    <strong>Friction:</strong> Static (μₛN) > Kinetic (μₖN)<br>
    <strong>Upthrust:</strong> Archimedes' principle — equals weight of displaced fluid<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always draw a free-body diagram. Resolve forces into components if needed.</div>`
  },

  'physics-energy': {
    patterns: ['energy','work','power','efficiency','kinetic','potential','conservation of energy'],
    response: `<strong>Work, Energy & Power</strong><br><br>
    <span class="formula">Work: W = Fs cos θ</span><br>
    <span class="formula">Kinetic: Eₖ = ½mv²</span><br>
    <span class="formula">GPE: Eₚ = mgh</span><br>
    <span class="formula">Elastic: Eₑ = ½kx²</span><br>
    <span class="formula">Power: P = W/t = Fv</span><br>
    <span class="formula">Efficiency = (useful output / total input) × 100%</span><br><br>
    Conservation of energy: total energy constant in closed system.<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> In energy problems, write "energy before = energy after" and list all forms.</div>`
  },

  'physics-waves': {
    patterns: ['wave','interference','diffraction','superposition','standing wave','node','antinode','wavelength'],
    response: `<strong>Waves</strong><br><br>
    <span class="formula">v = fλ</span><br><br>
    <strong>Transverse:</strong> Oscillations ⊥ to energy transfer (light, string)<br>
    <strong>Longitudinal:</strong> Oscillations ∥ to energy transfer (sound)<br><br>
    <strong>Superposition:</strong> Vector sum of displacements<br>
    <strong>Constructive:</strong> Crest + crest → amplitude increases<br>
    <strong>Destructive:</strong> Crest + trough → amplitude decreases<br><br>
    <strong>Diffraction:</strong> Significant when gap ≈ λ<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> All EM waves travel at c = 3×10⁸ m/s in vacuum.</div>`
  },

  'physics-circuits': {
    patterns: ['circuit','resistor','ohms','voltage','current','kirchhoff','potential divider','series','parallel'],
    response: `<strong>D.C. Circuits</strong><br><br>
    <strong>Series:</strong> I same, V adds, R = R₁+R₂+R₃...<br>
    <strong>Parallel:</strong> V same, I adds, 1/R = 1/R₁+1/R₂...<br><br>
    <span class="formula">V = IR</span><br>
    <span class="formula">P = VI = I²R = V²/R</span><br>
    <span class="formula">Potential divider: V_out = V_in × R₂/(R₁+R₂)</span><br>
    <span class="formula">E = V + Ir</span><br><br>
    <strong>Kirchhoff 1st:</strong> ΣI_in = ΣI_out<br>
    <strong>Kirchhoff 2nd:</strong> Σe.m.f. = Σp.d.<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> In complex circuits, label currents and apply Kirchhoff's laws systematically.</div>`
  },

  'physics-fields': {
    patterns: ['electric field','magnetic field','coulomb','flux density','transformer','electromagnetic induction'],
    response: `<strong>Electric & Magnetic Fields</strong><br><br>
    <strong>Electric:</strong><br>
    <span class="formula">E = F/Q = Q/(4πε₀r²)</span><br>
    <span class="formula">V = Q/(4πε₀r)</span><br>
    <span class="formula">E = V/d (uniform field)</span><br><br>
    <strong>Magnetic:</strong><br>
    <span class="formula">F = BIL sin θ (wire)</span><br>
    <span class="formula">F = BQv sin θ (charge)</span><br>
    <span class="formula">ε = -N(dΦ/dt)</span><br><br>
    <strong>Transformer:</strong> Vₛ/Vₚ = Nₛ/Nₚ<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Lenz's law: induced current opposes the change causing it.</div>`
  },

  'physics-nuclear': {
    patterns: ['radioactive','half-life','decay','alpha','beta','gamma','fission','fusion','nucleon','isotope'],
    response: `<strong>Nuclear Physics</strong><br><br>
    <strong>Decay:</strong><br>
    α = ₂⁴He (stopped by paper)<br>
    β = ₋₁⁰e (stopped by Al)<br>
    γ = EM radiation (stopped by lead)<br><br>
    <span class="formula">N = N₀(½)^(t/t½)</span><br>
    <span class="formula">E = mc²</span><br><br>
    <strong>Fission:</strong> Heavy → light + energy<br>
    <strong>Fusion:</strong> Light → heavy + energy<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> In decay equations, conserve both nucleon number (A) and proton number (Z).</div>`
  },

  // CHEMISTRY
  'chemistry-stoichiometry': {
    patterns: ['mole','avogadro','molar mass','empirical','molecular formula','limiting reagent','yield'],
    response: `<strong>Stoichiometry</strong><br><br>
    <span class="formula">n = mass / Mᵣ</span><br>
    <span class="formula">n = concentration × volume (dm³)</span><br>
    <span class="formula">n = V / 24.0 (gas at RTP, dm³)</span><br><br>
    <strong>Empirical formula:</strong> Simplest whole number ratio<br>
    <strong>Molecular formula:</strong> Actual number of atoms<br><br>
    <strong>% yield = (actual / theoretical) × 100</strong><br>
    <strong>% purity = (pure mass / sample mass) × 100</strong><br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always convert cm³ to dm³ (÷1000) before using concentration formula.</div>`
  },

  'chemistry-equilibrium': {
    patterns: ['equilibrium','le chatelier','k_c','k_p','haber','contact process','dynamic equilibrium'],
    response: `<strong>Chemical Equilibrium</strong><br><br>
    <strong>Dynamic equilibrium:</strong> Forward and reverse rates equal. Concentrations constant.<br><br>
    <strong>Le Chatelier's Principle:</strong> System opposes changes.<br>
    - Temperature↑: shifts to endothermic side<br>
    - Pressure↑: shifts to fewer moles side<br>
    - Concentration↑: shifts to use it up<br>
    - Catalyst: no shift, speeds both directions<br><br>
    <span class="formula">K_c = [products] / [reactants]</span> (balanced equation powers)<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> K_c only changes with temperature. Concentration/pressure changes don't alter K_c.</div>`
  },

  'chemistry-organic': {
    patterns: ['organic','alkane','alkene','alcohol','carbonyl','carboxylic','ester','polymer','isomer'],
    response: `<strong>Organic Chemistry Basics</strong><br><br>
    <strong>Homologous series:</strong> Same functional group, differ by CH₂<br>
    <strong>Isomers:</strong> Same formula, different structure<br><br>
    <strong>Key reactions:</strong><br>
    - Alkene + H₂ → Alkane (hydrogenation)<br>
    - Alkene + H₂O → Alcohol (hydration)<br>
    - Alcohol + [O] → Aldehyde → Carboxylic acid<br>
    - Alcohol + Carboxylic acid → Ester + H₂O<br><br>
    <strong>Tests:</strong><br>
    - Alkene: bromine water decolourises<br>
    - Aldehyde: Tollens' reagent → silver mirror<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always show the functional group clearly in structural formulas.</div>`
  },

  'chemistry-electrochemistry': {
    patterns: ['electrochemistry','electrolysis','electrode','redox','oxidation','reduction','half equation','standard electrode'],
    response: `<strong>Electrochemistry</strong><br><br>
    <strong>OIL RIG:</strong> Oxidation Is Loss, Reduction Is Gain (of electrons)<br><br>
    <strong>Electrolysis:</strong><br>
    - Cathode (-): reduction occurs<br>
    - Anode (+): oxidation occurs<br><br>
    <strong>Standard electrode potential (E°):</strong><br>
    More positive = stronger oxidising agent<br>
    More negative = stronger reducing agent<br><br>
    <span class="formula">E°cell = E°cathode - E°anode</span><br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> For half-equations: balance atoms first, then O with H₂O, then H with H⁺, then charge with e⁻.</div>`
  },

  // BIOLOGY
  'biology-photosynthesis': {
    patterns: ['photosynthesis','chloroplast','light dependent','calvin cycle','rubisco','photophosphorylation'],
    response: `<strong>Photosynthesis</strong><br><br>
    <strong>Light-dependent stage (thylakoid):</strong><br>
    - PSII: photolysis of water → O₂ + H⁺ + e⁻<br>
    - Electron transport chain → ATP (chemiosmosis)<br>
    - PSI: NADP reduced to NADPH<br><br>
    <strong>Light-independent (Calvin cycle, stroma):</strong><br>
    - CO₂ fixation by RuBisCO<br>
    - Reduction using ATP and NADPH<br>
    - Regeneration of RuBP<br><br>
    <span class="formula">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</span><br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Know the exact locations: thylakoid (light-dependent) and stroma (Calvin cycle).</div>`
  },

  'biology-respiration': {
    patterns: ['respiration','glycolysis','krebs','electron transport chain','oxidative phosphorylation','aerobic','anaerobic'],
    response: `<strong>Cellular Respiration</strong><br><br>
    <strong>Aerobic:</strong><br>
    1. <strong>Glycolysis</strong> (cytoplasm): Glucose → 2 pyruvate. Net 2 ATP, 2 NADH.<br>
    2. <strong>Link reaction</strong> (matrix): Pyruvate → Acetyl CoA. CO₂ released.<br>
    3. <strong>Krebs cycle</strong> (matrix): 2 CO₂ + ATP + NADH + FADH₂ per turn.<br>
    4. <strong>Oxidative phosphorylation</strong> (cristae): ETC + chemiosmosis → ~34 ATP.<br><br>
    Total: ~38 ATP per glucose<br><br>
    <strong>Anaerobic:</strong><br>
    - Animals: pyruvate → lactate<br>
    - Yeast: pyruvate → ethanol + CO₂<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Know where each stage occurs and what is produced. The matrix = Krebs; cristae = oxidative phosphorylation.</div>`
  },

  'biology-membranes': {
    patterns: ['membrane','diffusion','osmosis','active transport','facilitated','phospholipid','fluid mosaic','water potential'],
    response: `<strong>Cell Membranes & Transport</strong><br><br>
    <strong>Fluid mosaic model:</strong> Phospholipid bilayer + proteins + cholesterol + glycoproteins<br><br>
    <strong>Transport:</strong><br>
    - <strong>Simple diffusion:</strong> Small non-polar (O₂, CO₂)<br>
    - <strong>Facilitated diffusion:</strong> Through channels/carriers (glucose, ions)<br>
    - <strong>Osmosis:</strong> Water high Ψ → low Ψ<br>
    - <strong>Active transport:</strong> Against gradient, needs ATP<br><br>
    <span class="formula">Ψ = Ψs + Ψp</span><br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Pure water has Ψ = 0. Adding solute makes Ψ negative.</div>`
  },

  'biology-dna': {
    patterns: ['dna replication','transcription','translation','protein synthesis','mrna','trna','codon','anticodon','mutation'],
    response: `<strong>Protein Synthesis</strong><br><br>
    <strong>Replication:</strong> Semi-conservative. Helicase unwinds. DNA polymerase adds nucleotides 5'→3'.<br><br>
    <strong>Transcription (nucleus):</strong><br>
    DNA → pre-mRNA → splicing removes introns → mature mRNA<br><br>
    <strong>Translation (ribosome):</strong><br>
    mRNA codons matched by tRNA anticodons → peptide bonds form → polypeptide<br><br>
    <strong>Genetic code:</strong> Triplet, degenerate, universal, non-overlapping<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Remember: transcription = DNA→mRNA (nucleus); translation = mRNA→protein (ribosome).</div>`
  },

  'biology-immunity': {
    patterns: ['immune','antibody','antigen','phagocytosis','lymphocyte','vaccination','memory cell','t cell','b cell'],
    response: `<strong>Immunity</strong><br><br>
    <strong>Innate:</strong> Barriers, phagocytosis, inflammation (non-specific)<br><br>
    <strong>Adaptive:</strong><br>
    - <strong>Cell-mediated (T-cells):</strong> Helper (CD4⁺, cytokines), Cytotoxic (CD8⁺, kills infected cells)<br>
    - <strong>Humoral (B-cells):</strong> Plasma cells → antibodies; Memory B-cells<br><br>
    <strong>Antibodies:</strong> IgM (primary response), IgG (secondary)<br><br>
    <strong>Vaccination:</strong> Antigen → primary response → memory cells → rapid secondary response<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Secondary response is faster, stronger, and longer-lasting due to memory cells.</div>`
  },

  // MATHEMATICS
  'maths-differentiation': {
    patterns: ['differentiate','derivative','gradient','stationary point','turning point','maximum','minimum','chain rule','product rule','quotient rule'],
    response: `<strong>Differentiation</strong><br><br>
    <span class="formula">d/dx(xⁿ) = nxⁿ⁻¹</span><br>
    <span class="formula">d/dx(sin x) = cos x</span><br>
    <span class="formula">d/dx(cos x) = -sin x</span><br>
    <span class="formula">d/dx(eˣ) = eˣ</span><br>
    <span class="formula">d/dx(ln x) = 1/x</span><br><br>
    <strong>Chain rule:</strong> dy/dx = dy/du × du/dx<br>
    <strong>Product rule:</strong> d(uv)/dx = u dv/dx + v du/dx<br>
    <strong>Quotient rule:</strong> d(u/v)/dx = (v du/dx - u dv/dx) / v²<br><br>
    <strong>Stationary points:</strong> dy/dx = 0. d²y/dx² > 0 = min, < 0 = max.<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always simplify before differentiating. Check your stationary point is correct with the second derivative.</div>`
  },

  'maths-integration': {
    patterns: ['integrate','integration','area under curve','definite integral','trapezium rule','volume of revolution'],
    response: `<strong>Integration</strong><br><br>
    <span class="formula">∫xⁿ dx = xⁿ⁺¹/(n+1) + c</span><br>
    <span class="formula">∫eˣ dx = eˣ + c</span><br>
    <span class="formula">∫1/x dx = ln|x| + c</span><br>
    <span class="formula">∫sin x dx = -cos x + c</span><br>
    <span class="formula">∫cos x dx = sin x + c</span><br><br>
    <strong>Definite integration:</strong> Area under curve = ∫[a,b] y dx<br>
    <strong>Trapezium rule:</strong> ≈ h/2[(y₀+yₙ) + 2(y₁+...+yₙ₋₁)]<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Area below the x-axis gives a negative value. If asked for total area, split at x-intercepts and take absolute values.</div>`
  },

  'maths-trigonometry': {
    patterns: ['sine rule','cosine rule','trig identity','r formula','cast diagram','solve trig'],
    response: `<strong>Trigonometry</strong><br><br>
    <strong>Identities:</strong><br>
    <span class="formula">tan θ = sin θ / cos θ</span><br>
    <span class="formula">sin² θ + cos² θ = 1</span><br><br>
    <strong>Sine rule:</strong> a/sin A = b/sin B = c/sin C<br>
    <strong>Cosine rule:</strong> a² = b² + c² - 2bc cos A<br>
    <strong>Area:</strong> ½ab sin C<br><br>
    <strong>R-formula:</strong> a sin θ + b cos θ = R sin(θ+α) where R=√(a²+b²), tan α=b/a<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Use CAST diagram for finding multiple solutions. Period of sin/cos = 360°, tan = 180°.</div>`
  },

  'maths-complex': {
    patterns: ['complex number','imaginary','real part','imaginary part','modulus','argument','polar form','de moivre'],
    response: `<strong>Complex Numbers</strong><br><br>
    <span class="formula">z = a + bi where i² = -1</span><br><br>
    <strong>Modulus:</strong> |z| = √(a² + b²)<br>
    <strong>Argument:</strong> arg(z) = tan⁻¹(b/a) (check quadrant!)<br><br>
    <strong>Polar form:</strong> z = r(cos θ + i sin θ) = r e^(iθ)<br>
    <strong>De Moivre:</strong> (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always draw an Argand diagram. Arguments are usually given in radians between -π and π.</div>`
  },

  // ECONOMICS
  'econ-elasticity': {
    patterns: ['ped','pes','yed','xed','elasticity','price elasticity','income elasticity','cross elasticity'],
    response: `<strong>Elasticity</strong><br><br>
    <span class="formula">PED = (%ΔQd) / (%ΔP)</span><br>
    <span class="formula">PES = (%ΔQs) / (%ΔP)</span><br>
    <span class="formula">YED = (%ΔQd) / (%ΔY)</span><br>
    <span class="formula">XED = (%ΔQa) / (%ΔPb)</span><br><br>
    <strong>PED values:</strong><br>
    - >1: elastic (price↑ → revenue↓)<br>
    - <1: inelastic (price↑ → revenue↑)<br>
    - 0: perfectly inelastic<br>
    - ∞: perfectly elastic<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Primary goods tend to be inelastic. Luxuries tend to be elastic. Addictive goods are inelastic.</div>`
  },

  'econ-market-failure': {
    patterns: ['market failure','externality','public good','merit good','demerit good','free rider','information failure'],
    response: `<strong>Market Failure</strong><br><br>
    <strong>Externalities:</strong> Social cost/benefit ≠ private cost/benefit<br>
    - Negative: pollution, congestion<br>
    - Positive: education, vaccination<br><br>
    <strong>Public goods:</strong> Non-excludable, non-rival. Free-rider problem.<br><br>
    <strong>Merit goods:</strong> Under-consumed (education, healthcare)<br>
    <strong>Demerit goods:</strong> Over-consumed (cigarettes, alcohol)<br><br>
    <strong>Government remedies:</strong> Taxes, subsidies, regulation, provision, permits, information campaigns<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always draw a diagram showing MSC vs MPC for externalities. Show welfare loss triangle.</div>`
  },

  'econ-macroeconomics': {
    patterns: ['gdp','inflation','unemployment','fiscal policy','monetary policy','supply side','aggregate demand','aggregate supply'],
    response: `<strong>Macroeconomics</strong><br><br>
    <strong>GDP:</strong> Total output within country. Real GDP adjusts for inflation.<br><br>
    <strong>Policies:</strong><br>
    - <strong>Fiscal:</strong> Government spending + taxation<br>
    - <strong>Monetary:</strong> Interest rates + money supply<br>
    - <strong>Supply-side:</strong> Education, training, privatisation, deregulation<br><br>
    <strong>Inflation:</strong> Sustained rise in general price level<br>
    <strong>Unemployment types:</strong> Frictional, structural, cyclical, seasonal<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always evaluate policies: short-run vs long-run, effectiveness depends on economic context.</div>`
  },

  // GENERAL
  'revision-tips': {
    patterns: ['revise','revision','study','how to study','exam technique','time management','revision strategy','past paper'],
    response: `<strong>Revision Strategies</strong><br><br>
    1. <strong>Active recall:</strong> Test yourself, don't just re-read<br>
    2. <strong>Spaced repetition:</strong> Review at increasing intervals<br>
    3. <strong>Past papers:</strong> Do them under timed conditions<br>
    4. <strong>Mark schemes:</strong> Learn what examiners want<br>
    5. <strong>Weak areas first:</strong> Focus on topics you struggle with<br>
    6. <strong>Teach someone:</strong> Explaining reinforces understanding<br>
    7. <strong>Sleep:</strong> Consolidates memory<br><br>
    <strong>During the exam:</strong><br>
    - Read every question twice<br>
    - Plan essays before writing<br>
    - Show all working in calculations<br>
    - Check units<br>
    - Leave time to review<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> The night before: light review only. Sleep > cramming.</div>`
  },

  'fallback': {
    response: `I don't have a specific answer for that in my knowledge base. Try asking about:<br><br>
    <ul>
    <li>A specific topic (e.g., "Explain photosynthesis", "What is PED?")</li>
    <li>A formula or equation</li>
    <li>Exam tips for a subject</li>
    <li>How to revise effectively</li>
    </ul>
    Or select a subject from the buttons above and ask a focused question!`
  }
};

// Question bank for practice mode
const questionBank = {
  physics: [
    { q: 'What is the SUVAT equation that does NOT include time?', a: 'v² = u² + 2as', hint: 'Think about which variable is missing: s, u, v, a, or t?' },
    { q: 'A 2kg object accelerates at 3 m/s². What is the resultant force?', a: '6 N (F = ma = 2 × 3)', hint: 'Use Newton\'s second law: F = ma' },
    { q: 'What is the wavelength of a wave with frequency 50 Hz and speed 340 m/s?', a: '6.8 m (λ = v/f = 340/50)', hint: 'Use the wave equation: v = fλ' }
  ],
  chemistry: [
    { q: 'How many moles are in 58.5g of NaCl? (Mᵣ = 58.5)', a: '1.0 mol', hint: 'n = mass / Mᵣ' },
    { q: 'What is the oxidation state of Mn in MnO₄⁻?', a: '+7', hint: 'Oxygen is -2 each. Total charge is -1. Solve for Mn.' },
    { q: 'Name the catalyst used in the Haber process.', a: 'Iron (Fe)', hint: 'Think about the Contact process vs Haber process catalysts.' }
  ],
  biology: [
    { q: 'Where does the Calvin cycle occur?', a: 'Stroma of the chloroplast', hint: 'Light-independent stage location' },
    { q: 'What enzyme fixes CO₂ in the Calvin cycle?', a: 'RuBisCO', hint: 'Ribulose bisphosphate carboxylase/oxygenase' },
    { q: 'How many ATP are produced from one glucose in aerobic respiration?', a: '~38 ATP (approximately)', hint: 'Glycolysis (2) + Krebs (2) + Oxidative phosphorylation (~34)' }
  ],
  maths: [
    { q: 'Differentiate y = 3x⁴ + 2x² - 5x + 1', a: 'dy/dx = 12x³ + 4x - 5', hint: 'Apply power rule to each term' },
    { q: 'Solve: sin θ = 0.5 for 0° ≤ θ ≤ 360°', a: 'θ = 30°, 150°', hint: 'Use CAST diagram. sin is positive in 1st and 2nd quadrants.' },
    { q: 'Find ∫(4x³ + 2x) dx', a: 'x⁴ + x² + c', hint: 'Increase power by 1, divide by new power' }
  ],
  economics: [
    { q: 'If PED = 0.5 and price increases by 10%, what happens to quantity demanded?', a: 'Decreases by 5%', hint: 'PED = %ΔQd / %ΔP' },
    { q: 'What type of good has negative income elasticity?', a: 'Inferior good', hint: 'Demand falls as income rises' },
    { q: 'Name two supply-side policies.', a: 'Education/training, privatisation, deregulation (any two)', hint: 'Policies that shift LRAS right' }
  ]
};

let currentSubject = 'all';
let chatArea, userInput, sendBtn;

document.addEventListener('DOMContentLoaded', () => {
  chatArea = document.getElementById('chatArea');
  userInput = document.getElementById('userInput');
  sendBtn = document.getElementById('sendBtn');

  sendBtn.addEventListener('click', handleSend);
  userInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

  // Subject selector
  document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubject = btn.dataset.subject;
      updateSuggestions();
    });
  });

  // Suggestion chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      userInput.value = chip.textContent;
      handleSend();
    });
  });

  updateNavAuth();
});

function updateSuggestions() {
  const suggestions = document.getElementById('suggestions');
  const map = {
    all: ['Explain photosynthesis','What is PED?','Differentiation rules','Exam tips for Physics','Practice question: Biology','How do I revise efficiently?'],
    physics: ['SUVAT equations','Wave interference','Kirchhoff laws','Transformer equation','Practice question'],
    chemistry: ['Le Chatelier principle','Stoichiometry moles','Organic tests','Electrode potentials','Practice question'],
    biology: ['Calvin cycle steps','Action potential','Cell fractionation','Antibody structure','Practice question'],
    maths: ['Chain rule example','Integration by parts','Trigonometric identities','Complex numbers','Practice question'],
    economics: ['PED calculation','Market failure types','Fiscal vs monetary','Supply-side policies','Practice question']
  };
  const items = map[currentSubject] || map.all;
  suggestions.innerHTML = items.map(s => `<span class="chip">${s}</span>`).join('');
  suggestions.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => { userInput.value = chip.textContent; handleSend(); });
  });
}

function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;
  userInput.value = '';

  addMessage(text, 'user');
  showTyping();

  setTimeout(() => {
    hideTyping();
    const response = getResponse(text);
    addMessage(response, 'bot');
  }, 800 + Math.random() * 600);
}

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = `message message-${sender}`;
  div.innerHTML = text;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function showTyping() {
  const div = document.createElement('div');
  div.className = 'typing';
  div.id = 'typingIndicator';
  div.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

function getResponse(text) {
  const lower = text.toLowerCase();

  // Greeting
  if (knowledgeBase.greetings.patterns.some(p => lower.includes(p))) {
    return knowledgeBase.greetings.response;
  }

  // Practice question request
  if (lower.includes('practice') || lower.includes('quiz') || lower.includes('question')) {
    return generatePracticeQuestion();
  }

  // Revision/exam tips
  if (lower.includes('revise') || lower.includes('study') || lower.includes('exam tip') || lower.includes('how to')) {
    return knowledgeBase['revision-tips'].response;
  }

  // Subject-specific matching
  const subjects = ['physics','chemistry','biology','maths','economics'];
  const activeSubject = currentSubject !== 'all' ? currentSubject : null;

  // Try active subject first if set
  if (activeSubject) {
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (key.startsWith(activeSubject) && data.patterns) {
        if (data.patterns.some(p => lower.includes(p))) {
          return data.response;
        }
      }
    }
  }

  // Try all subjects
  for (const [key, data] of Object.entries(knowledgeBase)) {
    if (data.patterns && data.patterns.some(p => lower.includes(p))) {
      return data.response;
    }
  }

  // Fallback
  return knowledgeBase.fallback.response;
}

function generatePracticeQuestion() {
  const subjects = currentSubject !== 'all' ? [currentSubject] : ['physics','chemistry','biology','maths','economics'];
  const available = [];
  subjects.forEach(s => {
    if (questionBank[s]) available.push(...questionBank[s].map(q => ({...q, subject: s})));
  });

  if (available.length === 0) {
    return 'Select a subject above and I\'ll quiz you with practice questions!';
  }

  const q = available[Math.floor(Math.random() * available.length)];
  return `<strong>Practice Question (${q.subject.charAt(0).toUpperCase() + q.subject.slice(1)})</strong><br><br>
  ${q.q}<br><br>
  <em>Hint: ${q.hint}</em><br><br>
  <span class="chip" onclick="this.nextElementSibling.style.display='block';this.style.display='none'" style="cursor:pointer">Show Answer</span>
  <div style="display:none"><strong>Answer:</strong> ${q.a}</div>`;
}
