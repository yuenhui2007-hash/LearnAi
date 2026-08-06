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

  // ZETRIX AI ACADEMY
  'zetrix-overview': {
    patterns: ['zetrix','ai academy','claw','ai adoption','certified zetrix','ai professional'],
    response: `<strong>Zetrix AI Academy</strong><br><br>
    Transform every employee into an AI-powered professional through 6 progressive levels:<br><br>
    <strong>Level 1:</strong> AI Fundamentals (2h) — What is AI, types, generative AI, LLMs, limitations, myths<br>
    <strong>Level 2:</strong> Mastering Zetrix AI (3h) — Dashboard, chat, file uploads, AI memory, assistants, templates<br>
    <strong>Level 3:</strong> AI Avatar Claw (2h) — Voice conversations, meetings, presentations, roleplaying<br>
    <strong>Level 4:</strong> AI for Daily Work (2h) — Travel, budgeting, learning, writing, scheduling<br>
    <strong>Level 5:</strong> Department-Specific AI (4h) — HR, Finance, Marketing, Sales, Support, Operations, Legal, IT, Executive<br>
    <strong>Level 6:</strong> Advanced AI Automation (4h) — Workflows, agents, multi-step prompts, APIs, custom GPTs<br><br>
    Each level requires: videos, reading, exercises, practical tasks, quiz (80% pass), real-world assignment.<br><br>
    <div class="exam-tip-box"><strong>Certification:</strong> Complete all 6 levels to earn "Certified Zetrix AI Professional"</div>`
  },

  'zetrix-level1': {
    patterns: ['ai fundamentals','what is ai','types of ai','generative ai','large language model','llm','ai limitation','ai myth','prompt engineering','good prompt','bad prompt'],
    response: `<strong>Level 1: AI Fundamentals</strong><br><br>
    <strong>Types of AI:</strong><br>
    - Narrow AI: Specific tasks (chatbots, recommendation systems) — all current AI<br>
    - General AI: Human-like intelligence — does not exist yet<br>
    - Superintelligent AI: Surpasses humans — theoretical<br><br>
    <strong>Generative AI:</strong> Creates new content — text, images, audio, code. Examples: GPT-4, DALL-E, Midjourney<br><br>
    <strong>LLMs:</strong> Trained on vast text. Predict next word. Enable Q&A, translation, coding<br><br>
    <strong>Limitations:</strong><br>
    - Hallucination: Generates false but plausible information<br>
    - No real understanding: Pattern matching, not comprehension<br>
    - Training cutoff: Knowledge limited to training date<br>
    - Bias: Reflects training data biases<br><br>
    <strong>Prompt Formula:</strong> Role + Goal + Context + Format + Constraints<br><br>
    <div class="exam-tip-box"><strong>Tip:</strong> "Explain [topic] like I'm 10" is a powerful prompt for simplification</div>`
  },

  'zetrix-level2': {
    patterns: ['zetrix dashboard','ai memory','file upload','ai assistant','template','chat interface','system prompt'],
    response: `<strong>Level 2: Mastering Zetrix AI</strong><br><br>
    <strong>Dashboard:</strong> Quick access to recent chats, favourites, usage analytics, team workspace, settings<br><br>
    <strong>AI Memory:</strong><br>
    - User Profile: Name, role, department, writing style<br>
    - Project Context: Active projects, deadlines, stakeholders<br>
    - Knowledge Base: Company SOPs, brand guidelines<br>
    - Commands: "Remember that...", "What did we discuss...", "Forget..."<br><br>
    <strong>File Uploads:</strong> PDFs, Excel/CSV, Word, Images, Code files<br>
    - Summarise, Extract, Compare, Q&A<br><br>
    <strong>AI Assistants:</strong> Writer, Analyst, Coder, Legal (assistive), HR<br><br>
    <strong>Templates:</strong> Email, Report, Meeting, Creative templates<br><br>
    <div class="exam-tip-box"><strong>Tip:</strong> Set system prompt at thread start: "You are a senior financial analyst"</div>`
  },

  'zetrix-level3': {
    patterns: ['claw avatar','voice conversation','ai roleplay','presentation mode','meeting mode','wake word','customer complaint simulation'],
    response: `<strong>Level 3: AI Avatar (Claw)</strong><br><br>
    <strong>Claw features:</strong><br>
    - Voice conversations: Natural spoken dialogue<br>
    - Visual presence: Animated avatar for presentations<br>
    - Scenario roleplay: Practice difficult conversations<br>
    - Meeting mode: AI participant that takes notes<br><br>
    <strong>Wake word:</strong> "Hey Claw" for hands-free activation<br><br>
    <strong>Roleplay Scenarios (cannot skip):</strong><br>
    - Customer Complaint: De-escalate angry customer<br>
    - Sales Pitch: Handle objections, close deal<br>
    - Interview Practice: Answer behavioural/technical questions<br>
    - Performance Review: Give constructive feedback<br>
    - Negotiation: Better terms while maintaining relationship<br><br>
    <strong>Presentation Mode:</strong> Co-presenter, Q&A backup, rehearsal feedback<br><br>
    <div class="exam-tip-box"><strong>Tip:</strong> Upload slide deck before presenting. Set context: "You're co-presenting Q3 review to board"</div>`
  },

  'zetrix-level4': {
    patterns: ['ai daily work','travel planning ai','budgeting ai','meal planning','language learning ai','writing assistant','scheduling ai'],
    response: `<strong>Level 4: AI for Daily Work</strong><br><br>
    <strong>Travel Planning:</strong> Itineraries, flight/hotel comparison, packing lists, language prep, local customs<br><br>
    <strong>Budgeting:</strong> Monthly budgets, expense tracking, debt planning, investment basics, savings goals<br><br>
    <strong>Learning:</strong> Study plans, explanations, flashcards, practice questions, language correction<br><br>
    <strong>Writing:</strong> Emails, messages, social media, creative writing, editing<br><br>
    <strong>Health & Scheduling:</strong> Meal plans, workouts, sleep hygiene, time blocking, deadline management<br><br>
    <div class="exam-tip-box"><strong>Tip:</strong> Upload bank CSV for AI to categorise spending and find savings</div>`
  },

  'zetrix-level5': {
    patterns: ['hr ai','finance ai','marketing ai','sales ai','customer service ai','operations ai','legal ai','it ai','executive ai','department specific'],
    response: `<strong>Level 5: Department-Specific AI</strong><br><br>
    <strong>HR:</strong> CV screening, JDs, interview questions, onboarding, performance reviews, conflict resolution<br><br>
    <strong>Finance:</strong> Reports, Excel analysis, budgeting, forecasting, audit, presentations<br><br>
    <strong>Marketing:</strong> Campaigns, SEO, social media, email marketing, personas, content calendars<br><br>
    <strong>Sales:</strong> Prospecting, cold emails, proposals, objection handling, CRM updates<br><br>
    <strong>Customer Service:</strong> Ticket responses, escalation, knowledge base, sentiment analysis<br><br>
    <strong>Operations:</strong> SOPs, workflows, project planning, meeting minutes<br><br>
    <strong>Legal (Assistive Only):</strong> Document review, compliance checks, research. AI does NOT replace lawyers<br><br>
    <strong>IT:</strong> Documentation, debugging, scripts, knowledge management<br><br>
    <strong>Executive:</strong> Strategy, board reports, speeches, decision support, stakeholder comms<br><br>
    <div class="exam-tip-box"><strong>Tip:</strong> Upload real company documents for AI to solve actual work tasks</div>`
  },

  'zetrix-level6': {
    patterns: ['ai workflow','ai agent','multi-step prompt','prompt chaining','document automation','custom gpt','api integration','zapier','automation'],
    response: `<strong>Level 6: Advanced AI Automation</strong><br><br>
    <strong>AI Workflows:</strong> Chain multiple AI operations<br>
    - Triggers: Schedule, event, webhook, manual<br>
    - Actions: Generate text, analyse data, send email<br>
    - Tools: Zapier (5000+ apps), Make, n8n, Power Automate<br><br>
    <strong>Multi-Step Prompts:</strong><br>
    - Chain-of-thought: Break complex tasks into steps<br>
    - Sequential refinement: Each output becomes next input<br>
    - Tip: Use "Let me think step by step" for better results<br><br>
    <strong>Document Automation:</strong><br>
    - Mail merge: 100 personalised proposals from template<br>
    - Variables: {{company_name}}, {{date}}<br>
    - Multi-language: Generate in 20+ languages<br><br>
    <strong>Custom GPTs:</strong> Specialised models with injected knowledge<br><br>
    <strong>AI Agents:</strong> Autonomous AI — research, coding, data analysis, task management<br><br>
    <strong>APIs:</strong> Connect AI to Salesforce, Slack, Google Sheets, Stripe<br><br>
    <div class="exam-tip-box"><strong>Warning:</strong> AI agents must always have human oversight</div>`
  },

  'zetrix-telegram': {
    patterns: ['telegram bot','botfather','telegram integration','connect telegram','pairing code','telegram group','bot token','privacy mode'],
    response: `<strong>Telegram Integration for Claw AI Avatar</strong><br><br>
    <strong>Step 1: Create a Telegram Bot</strong><br>
    1. Open Telegram and search for <strong>@BotFather</strong><br>
    2. Send <code>/newbot</code><br>
    3. Enter bot name and choose username ending with <code>bot</code><br>
    4. Copy the <strong>Bot Token</strong> from BotFather<br><br>
    <strong>Step 2: Configure in Claw</strong><br>
    <span class="formula">"channels": {"telegram": {"enabled": true, "botToken": "YOUR_TOKEN", "dmPolicy": "pairing"}}</span><br><br>
    <strong>Step 3: Start Gateway</strong><br>
    Restart the OpenClaw gateway to load the new config<br><br>
    <strong>Step 4: Pair Your Account</strong><br>
    1. Send <code>/start</code> to your bot<br>
    2. Get pairing code from bot<br>
    3. Approve via: <code>openclaw pairing approve telegram &lt;CODE&gt;</code><br><br>
    <strong>Step 5: Test</strong><br>
    Send "Hello" — bot should respond<br><br>
    <strong>Step 6: Group Setup (Optional)</strong><br>
    - Add bot to group<br>
    - Disable Privacy Mode via <code>/setprivacy</code> in BotFather<br>
    - Or make bot admin to see all messages<br><br>
    <div class="exam-tip-box"><strong>Tip:</strong> Pairing codes expire after 1 hour. Keep <code>requireMention: true</code> in groups to avoid spam.</div>`
  },

  'zetrix-prompt': {
    patterns: ['prompt formula','perfect prompt','prompt structure','role goal context format','prompt blocks','prompt builder'],
    response: `<strong>The Perfect Prompt Formula</strong><br><br>
    <span class="formula">Role + Goal + Context + Format + Constraints</span><br><br>
    <strong>Role:</strong> "You are an expert financial analyst..."<br>
    <strong>Goal:</strong> "Analyse Q3 revenue trends..."<br>
    <strong>Context:</strong> "Our company is a SaaS startup with 500 employees..."<br>
    <strong>Format:</strong> "Present as bullet points with charts..."<br>
    <strong>Constraints:</strong> "Keep under 500 words. Use simple language."<br><br>
    <strong>Example:</strong><br>
    <em>"You are a senior marketing strategist. Create a 30-day social media campaign for a new fitness app targeting professionals 25-40. Structure: objectives, platforms, content calendar, KPIs. Tone: energetic but professional."</em><br><br>
    <div class="exam-tip-box"><strong>Tip:</strong> The more specific your prompt, the better the output. Vague prompts = vague answers.</div>`
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

  // HISTORY
  'history-ww1': {
    patterns: ['world war i','ww1','causes of wwi','franz ferdinand','treaty of versailles','alliance system','july crisis','schlieffen plan'],
    response: `<strong>World War I (1914–1918)</strong><br><br>
    <strong>Long-term causes:</strong><br>
    - Alliance system: Triple Alliance (Germany, Austria-Hungary, Italy) vs Triple Entente (Britain, France, Russia)<br>
    - Militarism: Arms race, especially Anglo-German naval rivalry<br>
    - Imperialism: Scramble for Africa, Moroccan crises<br>
    - Nationalism: Pan-Slavism, Balkan tensions<br><br>
    <strong>Short-term trigger:</strong><br>
    - 28 June 1914: Assassination of Archduke Franz Ferdinand in Sarajevo<br>
    - July Crisis: Ultimatum → Austria declares war on Serbia → Russia mobilises → Germany declares war on Russia and France → Germany invades Belgium → Britain declares war<br><br>
    <strong>Treaty of Versailles (1919):</strong><br>
    - War guilt clause (Article 231)<br>
    - Reparations: £6.6 billion<br>
    - Territorial losses: Alsace-Lorraine, colonies, Polish Corridor<br>
    - Military restrictions: 100,000 army, no air force, no submarines<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Balance long-term and short-term causes. Fischer thesis (Germany planned war) vs Clark (sleepwalkers — all powers to blame)</div>`
  },

  'history-cold-war': {
    patterns: ['cold war','iron curtain','containment','truman doctrine','marshall plan','berlin blockade','berlin wall','cuban missile crisis','detente','gorbachev'],
    response: `<strong>The Cold War (1947–1991)</strong><br><br>
    <strong>Origins:</strong><br>
    - 1945: Yalta and Potsdam conferences — tensions over Poland, Germany<br>
    - 1946: Churchill's Iron Curtain speech<br>
    - 1947: Truman Doctrine (containment of communism)<br>
    - 1948: Marshall Plan ($13bn aid to Europe); Berlin Blockade and Airlift<br>
    - 1949: NATO formed; USSR tests atomic bomb<br><br>
    <strong>Key crises:</strong><br>
    - 1950–53: Korean War<br>
    - 1956: Hungarian Uprising (crushed by USSR)<br>
    - 1961: Berlin Wall built<br>
    - 1962: Cuban Missile Crisis — closest to nuclear war<br>
    - 1968: Prague Spring (crushed by Warsaw Pact)<br><br>
    <strong>End of Cold War:</strong><br>
    - 1985: Gorbachev — Glasnost and Perestroika<br>
    - 1989: Fall of Berlin Wall; revolutions in Eastern Europe<br>
    - 1991: Soviet Union dissolves<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Know the historiography: Traditionalist (Soviet expansion to blame) vs Revisionist (US economic imperialism) vs Post-revisionist (mutual misunderstanding)</div>`
  },

  'history-hitler': {
    patterns: ['hitler','nazi germany','weimar republic','reichstag fire','enabling act','night of long knives','kristallnacht','holocaust','final solution','nuremberg laws'],
    response: `<strong>Nazi Germany (1933–1945)</strong><br><br>
    <strong>Rise to power:</strong><br>
    - 1929: Wall Street Crash → German economy collapses → 6 million unemployed<br>
    - 1930: Nazis become 2nd largest party (107 seats)<br>
    - Jan 1933: Hitler appointed Chancellor<br>
    - Feb 1933: Reichstag Fire → Emergency Decrees<br>
    - March 1933: Enabling Act → Hitler can rule by decree<br>
    - June 1934: Night of Long Knives (SA leaders killed)<br>
    - Aug 1934: Hindenburg dies; Hitler becomes Führer<br><br>
    <strong>Nazi state:</strong><br>
    - Gestapo (secret police), SS, concentration camps<br>
    - Propaganda: Goebbels, rallies, radio, films<br>
    - Education and youth: Hitler Youth (compulsory 1936)<br><br>
    <strong>Persecution:</strong><br>
    - 1935: Nuremberg Laws (stripped Jews of citizenship)<br>
    - 1938: Kristallnacht (state-organised pogrom)<br>
    - 1941–45: Final Solution → Holocaust (6 million Jews murdered)<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Totalitarianism debate: Intentionalist (Hitler planned everything) vs Structuralist (chaotic Nazi state, initiatives from below)</div>`
  },

  // GEOMETRY
  'geometry-pythagoras': {
    patterns: ['pythagoras','hypotenuse','right triangle','soh cah toa','trigonometry','sine rule','cosine rule'],
    response: `<strong>Pythagoras & Trigonometry</strong><br><br>
    <span class="formula">Pythagoras: a² + b² = c²</span><br>
    <span class="formula">sin θ = opposite / hypotenuse</span><br>
    <span class="formula">cos θ = adjacent / hypotenuse</span><br>
    <span class="formula">tan θ = opposite / adjacent</span><br><br>
    <strong>Sine Rule:</strong> a/sin A = b/sin B = c/sin C = 2R<br>
    <strong>Cosine Rule:</strong> a² = b² + c² − 2bc cos A<br>
    <strong>Area:</strong> ½ab sin C<br><br>
    <strong>Special angles:</strong><br>
    sin 30° = ½, sin 45° = 1/√2, sin 60° = √3/2<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Always label the triangle first. Identify which side is opposite, adjacent, hypotenuse relative to the angle given.</div>`
  },

  'geometry-circle': {
    patterns: ['circle theorem','angle at centre','cyclic quadrilateral','tangent','chord','alternate segment'],
    response: `<strong>Circle Theorems</strong><br><br>
    <strong>1. Angle at centre = 2 × angle at circumference</strong><br>
    <strong>2. Angle in semicircle = 90°</strong><br>
    <strong>3. Angles in same segment are equal</strong><br>
    <strong>4. Cyclic quadrilateral: opposite angles = 180°</strong><br>
    <strong>5. Tangent ⊥ radius at point of contact</strong><br>
    <strong>6. Tangent lengths from external point are equal</strong><br>
    <strong>7. Alternate segment theorem:</strong> Angle between tangent and chord = angle in alternate segment<br>
    <strong>8. Intersecting chords: PA × PB = PC × PD</strong><br><br>
    <span class="formula">Circumference = 2πr = πd</span><br>
    <span class="formula">Area = πr²</span><br>
    <span class="formula">Arc length = (θ/360) × 2πr</span><br>
    <span class="formula">Sector area = (θ/360) × πr²</span><br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Draw the diagram and identify which theorem applies. Always state the theorem by name.</div>`
  },

  // ICT
  'ict-hardware': {
    patterns: ['cpu','ram','rom','hard disk','input device','output device','fetch decode execute','motherboard'],
    response: `<strong>Computer Hardware</strong><br><br>
    <strong>CPU (Central Processing Unit):</strong><br>
    - ALU: Performs arithmetic and logic operations<br>
    - CU: Controls instruction execution<br>
    - Registers: Small fast storage within CPU<br>
    - Fetch-Decode-Execute cycle<br><br>
    <strong>Memory:</strong><br>
    - RAM: Volatile; stores running programs and data
    - ROM: Non-volatile; stores BIOS/boot instructions
    - Cache: L1, L2, L3 — faster but smaller than RAM<br><br>
    <strong>Storage:</strong><br>
    - Magnetic: Hard disk — high capacity, mechanical
    - Optical: CD/DVD/Blu-ray — removable
    - Solid State: SSD/flash — no moving parts, faster, expensive<br><br>
    <strong>Input devices:</strong> Keyboard, mouse, scanner, microphone, webcam, barcode reader<br>
    <strong>Output devices:</strong> Monitor, printer, speakers, projector, actuator<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Know the difference between RAM and ROM. RAM is volatile (lost when power off); ROM is non-volatile (permanent).</div>`
  },

  'ict-networks': {
    patterns: ['lan','wan','wifi','router','switch','firewall','encryption','malware','phishing','ddos','vpn'],
    response: `<strong>Networks & Security</strong><br><br>
    <strong>Network types:</strong><br>
    - LAN: Local Area Network (home, school, office)
    - WAN: Wide Area Network (spans cities/countries; internet is largest WAN)
    - WLAN: Wireless LAN (WiFi)<br><br>
    <strong>Network hardware:</strong><br>
    - Router: Connects networks; directs traffic using IP addresses
    - Switch: Connects devices within LAN efficiently
    - Hub: Broadcasts to all devices (wasteful)
    - Modem: Converts digital/analogue signals<br><br>
    <strong>Security threats:</strong><br>
    - Malware: Viruses, worms, trojans, ransomware, spyware
    - Phishing: Fake emails/websites to steal credentials
    - DDoS: Overwhelming server with traffic<br><br>
    <strong>Protection measures:</strong><br>
    - Firewall: Filters network traffic
    - Encryption: SSL/TLS for websites; scrambles data
    - Authentication: Passwords, 2FA, biometrics
    - VPN: Encrypted tunnel for secure remote access<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> A firewall blocks unauthorised access; encryption protects data even if intercepted.</div>`
  },

  'ict-programming': {
    patterns: ['algorithm','pseudocode','flowchart','variable','loop','if statement','array','function','oop','object oriented'],
    response: `<strong>Programming Concepts</strong><br><br>
    <strong>Algorithm:</strong> Step-by-step solution to a problem<br>
    <strong>Pseudocode:</strong> Informal language to describe algorithms<br>
    <strong>Flowchart symbols:</strong> Oval (start/end), Rectangle (process), Diamond (decision), Parallelogram (input/output)<br><br>
    <strong>Control structures:</strong><br>
    - Sequence: Instructions in order
    - Selection: IF...THEN...ELSE, CASE/SWITCH
    - Iteration: FOR, WHILE, REPEAT...UNTIL<br><br>
    <strong>Data types:</strong><br>
    - Integer: Whole numbers
    - Real/Float: Decimal numbers
    - String: Text
    - Boolean: True/False<br><br>
    <strong>Data structures:</strong><br>
    - Array: Collection of same-type elements
    - 2D Array: Table (rows and columns)<br><br>
    <strong>OOP concepts:</strong><br>
    - Class: Blueprint for objects
    - Object: Instance of a class
    - Inheritance: Child class inherits from parent
    - Encapsulation: Data hiding<br><br>
    <div class="exam-tip-box"><strong>Exam tip:</strong> Trace through loops manually. Write down variable values after each iteration.</div>`
  },

  'fallback': {
    response: `I don't have a specific answer for that in my knowledge base. Try asking about:<br><br>
    <ul>
    <li>A specific topic (e.g., "Explain photosynthesis", "What is PED?", "How did Hitler rise to power?")</li>
    <li>A formula or equation (e.g., "Pythagoras theorem", "Circle theorems")</li>
    <li>Exam tips for a subject</li>
    <li>How to revise effectively</li>
    <li>Zetrix AI Academy content</li>
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
