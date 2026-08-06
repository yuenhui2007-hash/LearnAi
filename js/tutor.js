// LearnAI Tutor — Hybrid AI Tutor
// Tries Cloudflare Worker first (real AI), falls back to built-in knowledge base.
// Set your Worker URL below after deployment.

const API_URL = 'https://round-breeze-1dcc.m-14324261.workers.dev';

const SYSTEM_PROMPT = `You are the LearnAI Tutor, an expert Cambridge A-Level and IGCSE tutor who is also a helpful general assistant.

For academic questions:
- Give thorough, detailed explanations
- Use LaTeX for equations: inline with \\( ... \\) and display with \\[ ... \\]
- Include exam tips and common mistakes
- If asked for practice, give realistic exam-style questions with hints and hidden answers

For general questions (weather, news, restaurants, etc.):
- Answer helpfully and briefly
- Then offer to help with their studies if relevant

Always be encouraging, clear, and concise. Be friendly and conversational.`;

const knowledgeBase = {
  greetings: {
    patterns: ['hello','hi','hey','greetings','sup','yo','good morning','good afternoon','good evening','how are you','what\'s up'],
    response: "Hello! I'm your LearnAI Tutor. Ask me about any Cambridge subject — Physics, Chemistry, Biology, Maths, Economics, History, Geography, ICT, English, Psychology, or the Zetrix AI Academy. I explain concepts, solve problems, give exam tips, and quiz you with practice questions."
  },

  'physics-kinematics': {
    patterns: ['suvat','kinematics','motion','projectile','velocity','acceleration','displacement','uniform acceleration','equations of motion','free fall'],
    response: `<h4>Kinematics — SUVAT Equations</h4>
<p>For motion with <strong>uniform acceleration</strong> in a straight line:</p>
<div class="formula-block">
  \( v = u + at \)<br>
  \( s = ut + \frac{1}{2}at^2 \)<br>
  \( v^2 = u^2 + 2as \)<br>
  \( s = \frac{1}{2}(u+v)t \)
</div>
<p><strong>Projectile motion:</strong></p>
<ul>
  <li>Horizontal: constant velocity (\( a = 0 \))</li>
  <li>Vertical: constant acceleration (\( a = g = 9.81 \, \text{m/s}^2 \), downward)</li>
</ul>
<p><strong>Key trick:</strong> Resolve initial velocity into horizontal and vertical components using trigonometry.</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Draw a diagram. Choose a positive direction. List knowns before selecting the equation.</div>
<p><em>Want me to work through a projectile problem step by step?</em></p>`
  },

  'physics-forces': {
    patterns: ['newton','force','friction','tension','normal','resultant','equilibrium','free body','f=ma','weight','mass','inertia'],
    response: `<h4>Forces & Newton's Laws</h4>
<div class="formula-block">
  <strong>Newton's 2nd Law:</strong> \( F = ma \)<br>
  <strong>Weight:</strong> \( W = mg \)
</div>
<p><strong>Types of forces:</strong></p>
<ul>
  <li><strong>Tension (T):</strong> Pull in a string/rope</li>
  <li><strong>Normal reaction (R/N):</strong> Surface pushing back</li>
  <li><strong>Friction (f):</strong> Opposes motion; \( f_{\text{max}} = \mu R \)</li>
  <li><strong>Weight (W):</strong> Gravitational pull; \( W = mg \)</li>
</ul>
<p><strong>Equilibrium:</strong> resultant force = 0, so acceleration = 0.</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Always draw a free-body diagram. Resolve forces into perpendicular components if needed.</div>
<p><em>Ask me about connected particles, inclined planes, or circular motion next?</em></p>`
  },

  'physics-energy': {
    patterns: ['energy','work','power','efficiency','kinetic','potential','conservation of energy','gravitational potential','elastic','spring'],
    response: `<h4>Work, Energy & Power</h4>
<div class="formula-block">
  <strong>Kinetic energy:</strong> \( E_k = \frac{1}{2}mv^2 \)<br>
  <strong>GPE:</strong> \( E_p = mgh \)<br>
  <strong>Elastic:</strong> \( E_e = \frac{1}{2}kx^2 \)<br>
  <strong>Work:</strong> \( W = Fs \cos\theta \)<br>
  <strong>Power:</strong> \( P = \frac{W}{t} = Fv \)<br>
  <strong>Efficiency:</strong> \( \eta = \frac{\text{useful output}}{\text{total input}} \times 100\% \)
</div>
<p><strong>Conservation of energy:</strong> In a closed system, total energy is constant.</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> In energy problems, write "energy before = energy after" and list all forms. Include thermal if friction is present.</div>
<p><em>Want a practice problem on energy conservation?</em></p>`
  },

  'physics-waves': {
    patterns: ['wave','interference','diffraction','superposition','standing wave','node','antinode','wavelength','frequency','period','polarisation'],
    response: `<h4>Waves</h4>
<div class="formula-block">
  \( v = f\lambda \qquad T = \frac{1}{f} \)
</div>
<p><strong>Types:</strong></p>
<ul>
  <li><strong>Transverse:</strong> Oscillations ⊥ to energy transfer (light, EM waves, string waves)</li>
  <li><strong>Longitudinal:</strong> Oscillations ∥ to energy transfer (sound)</li>
</ul>
<p><strong>Superposition:</strong> Vector sum of displacements when waves meet.</p>
<ul>
  <li><strong>Constructive:</strong> Crest + crest → amplitude increases</li>
  <li><strong>Destructive:</strong> Crest + trough → amplitude decreases</li>
</ul>
<p><strong>Diffraction:</strong> Most significant when gap ≈ wavelength.</p>
<p><strong>Polarisation:</strong> Only transverse waves can be polarised.</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> All EM waves travel at \( c = 3.00 \times 10^8 \, \text{m/s} \) in a vacuum. Intensity \( \propto \frac{1}{r^2} \).</div>`
  },

  'physics-circuits': {
    patterns: ['circuit','resistor','ohms','voltage','current','kirchhoff','potential divider','series','parallel','emf','internal resistance'],
    response: `<h4>D.C. Circuits</h4>
<div class="formula-block">
  <strong>Ohm's Law:</strong> \( V = IR \)<br>
  <strong>Power:</strong> \( P = VI = I^2R = \frac{V^2}{R} \)<br>
  <strong>Resistors in series:</strong> \( R = R_1 + R_2 + R_3 \)<br>
  <strong>Resistors in parallel:</strong> \( \frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} \)<br>
  <strong>Potential divider:</strong> \( V_{\text{out}} = V_{\text{in}} \times \frac{R_2}{R_1 + R_2} \)<br>
  <strong>EMF:</strong> \( E = V + Ir \) (terminal p.d. + lost volts)
</div>
<p><strong>Kirchhoff's Laws:</strong></p>
<ul>
  <li><strong>1st (Current):</strong> \( \sum I_{\text{in}} = \sum I_{\text{out}} \) at a junction</li>
  <li><strong>2nd (Voltage):</strong> \( \sum \text{e.m.f.} = \sum \text{p.d.} \) around a loop</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> In complex circuits, label currents and apply Kirchhoff's laws systematically. Remember: p.d. across parallel components is the same.</div>`
  },

  'physics-fields': {
    patterns: ['electric field','magnetic field','coulomb','flux density','transformer','electromagnetic induction','lenz','faraday','capacitor'],
    response: `<h4>Electric & Magnetic Fields</h4>
<div class="formula-block">
  <strong>Electric force:</strong> \( F = \frac{Q_1 Q_2}{4\pi\varepsilon_0 r^2} \)<br>
  <strong>Electric field:</strong> \( E = \frac{F}{Q} = \frac{Q}{4\pi\varepsilon_0 r^2} \)<br>
  <strong>Magnetic force on wire:</strong> \( F = BIL \sin\theta \)<br>
  <strong>Magnetic force on charge:</strong> \( F = BQv \sin\theta \)<br>
  <strong>EM induction:</strong> \( \varepsilon = -N \frac{d\Phi}{dt} \)<br>
  <strong>Transformer:</strong> \( \frac{V_s}{V_p} = \frac{N_s}{N_p} \)
</div>
<p><strong>Capacitors:</strong></p>
<ul>
  <li><strong>Energy stored:</strong> \( E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C} \)</li>
  <li><strong>Discharging:</strong> \( Q = Q_0 e^{-t/RC} \)</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Lenz's law: induced current opposes the change causing it. Use Fleming's left-hand rule for force direction.</div>`
  },

  'physics-nuclear': {
    patterns: ['radioactive','half-life','decay','alpha','beta','gamma','fission','fusion','nucleon','isotope','binding energy'],
    response: `<h4>Nuclear Physics</h4>
<div class="formula-block">
  <strong>Decay equation:</strong> \( N = N_0 \left(\frac{1}{2}\right)^{t/t_{1/2}} \)<br>
  <strong>Mass-energy:</strong> \( E = mc^2 \) (use \( \Delta E = \Delta m \cdot c^2 \) for reactions)
</div>
<p><strong>Types of radiation:</strong></p>
<table class="tutor-table">
  <tr><th>Type</th><th>Symbol</th><th>Ionising power</th><th>Penetration</th><th>Stopped by</th></tr>
  <tr><td>Alpha</td><td>\(_2^4\text{He}\)</td><td>Strongest</td><td>Weakest</td><td>Paper / few cm air</td></tr>
  <tr><td>Beta</td><td>\(_{-1}^0\text{e}\)</td><td>Medium</td><td>Medium</td><td>Aluminium</td></tr>
  <tr><td>Gamma</td><td>\(\gamma\)</td><td>Weakest</td><td>Strongest</td><td>Lead / thick concrete</td></tr>
</table>
<p><strong>Nuclear reactions:</strong></p>
<ul>
  <li><strong>Fission:</strong> Heavy nucleus splits → lighter nuclei + energy</li>
  <li><strong>Fusion:</strong> Light nuclei combine → heavier nucleus + energy</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> In decay equations, conserve both nucleon number (A) and proton number (Z). Binding energy per nucleon peaks at iron-56.</div>`
  },

  'physics-quantum': {
    patterns: ['photon','photoelectric','work function','threshold frequency','de broglie','wave particle duality','energy level','spectra','ionisation'],
    response: `<h4>Quantum & Particle Physics</h4>
<div class="formula-block">
  <strong>Photon energy:</strong> \( E = hf = \frac{hc}{\lambda} \)<br>
  <strong>Photoelectric:</strong> \( hf = \phi + \frac{1}{2}mv_{\text{max}}^2 \)<br>
  <strong>De Broglie:</strong> \( \lambda = \frac{h}{p} = \frac{h}{mv} \)<br>
  <strong>Energy levels:</strong> \( hf = E_2 - E_1 \) (emission/absorption)
</div>
<p><strong>Wave-particle duality:</strong></p>
<ul>
  <li>Light behaves as <strong>waves</strong> (interference, diffraction)</li>
  <li>Light behaves as <strong>particles</strong> (photoelectric effect)</li>
  <li>Matter also has wave properties (electron diffraction)</li>
</ul>
<p><strong>Standard Model:</strong> Quarks (up, down, strange, charm, top, bottom) + Leptons (electron, muon, tau + neutrinos) + Force carriers (photon, gluon, W/Z bosons)</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> The photoelectric effect proves light is quantised. No electrons emitted below threshold frequency, regardless of intensity.</div>`
  },

  'chemistry-stoichiometry': {
    patterns: ['mole','avogadro','molar mass','empirical','molecular formula','limiting reagent','yield','concentration','titration'],
    response: `<h4>Stoichiometry</h4>
<div class="formula-block">
  \( n = \frac{\text{mass}}{M_r} \)<br>
  \( n = c \times V \) (volume in dm³; divide cm³ by 1000)<br>
  \( n = \frac{V}{24.0} \) (gas at RTP in dm³)
</div>
<p><strong>Key calculations:</strong></p>
<ul>
  <li><strong>Empirical formula:</strong> Simplest whole number ratio of atoms</li>
  <li><strong>Molecular formula:</strong> Actual number of atoms (\( n \times \) empirical)</li>
  <li><strong>% yield:</strong> \( \frac{\text{actual}}{\text{theoretical}} \times 100 \)</li>
  <li><strong>% purity:</strong> \( \frac{\text{pure mass}}{\text{sample mass}} \times 100 \)</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Always convert cm³ to dm³ before using the concentration formula. Check significant figures.</div>`
  },

  'chemistry-equilibrium': {
    patterns: ['equilibrium','le chatelier','k_c','k_p','haber','contact process','dynamic equilibrium','reversible reaction'],
    response: `<h4>Chemical Equilibrium</h4>
<div class="formula-block">
  \( K_c = \frac{[\text{products}]}{[\text{reactants}]} \) (stoichiometric coefficients as powers)<br>
  \( K_p = \frac{P_{\text{products}}}{P_{\text{reactants}}} \)
</div>
<p><strong>Le Chatelier's Principle:</strong> System opposes changes.</p>
<ul>
  <li><strong>Temperature ↑:</strong> shifts to endothermic side</li>
  <li><strong>Pressure ↑:</strong> shifts to side with fewer gas moles</li>
  <li><strong>Concentration ↑:</strong> shifts to use it up</li>
  <li><strong>Catalyst:</strong> no shift, speeds both directions equally</li>
</ul>
<p><strong>Haber process:</strong> \( \text{N}_2 + 3\text{H}_2 \rightleftharpoons 2\text{NH}_3 \); 450°C, 200 atm, iron catalyst</p>
<p><strong>Contact process:</strong> \( 2\text{SO}_2 + \text{O}_2 \rightleftharpoons 2\text{SO}_3 \); 450°C, 1-2 atm, V₂O₅ catalyst</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> K only changes with temperature. Concentration/pressure changes alter equilibrium position but not K.</div>`
  },

  'chemistry-organic': {
    patterns: ['organic','alkane','alkene','alcohol','carbonyl','carboxylic','ester','polymer','isomer','homologous','functional group'],
    response: `<h4>Organic Chemistry Basics</h4>
<p><strong>Homologous series:</strong> Same functional group, differ by CH₂.</p>
<p><strong>Key reactions:</strong></p>
<ul>
  <li>Alkene + H₂ → Alkane (hydrogenation)</li>
  <li>Alkene + H₂O → Alcohol (hydration)</li>
  <li>Alcohol + [O] → Aldehyde → Carboxylic acid</li>
  <li>Alcohol + Carboxylic acid → Ester + H₂O</li>
  <li>Carboxylic acid + Base → Salt + H₂O</li>
</ul>
<p><strong>Tests:</strong></p>
<ul>
  <li><strong>Alkene:</strong> Bromine water decolourises (orange → colourless)</li>
  <li><strong>Aldehyde:</strong> Tollens' reagent → silver mirror; Fehling's → brick-red Cu₂O</li>
  <li><strong>Carboxylic acid:</strong> CO₂ with NaHCO₃</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Always show the functional group clearly. Name using IUPAC rules with lowest locant numbers.</div>`
  },

  'chemistry-electrochemistry': {
    patterns: ['electrochemistry','electrolysis','electrode','redox','oxidation','reduction','half equation','standard electrode','cell potential'],
    response: `<h4>Electrochemistry</h4>
<div class="formula-block">
  <strong>OIL RIG:</strong> Oxidation Is Loss (of e⁻), Reduction Is Gain (of e⁻)<br>
  <strong>Cell potential:</strong> \( E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} \)
</div>
<p><strong>Electrolysis:</strong></p>
<ul>
  <li><strong>Cathode (-):</strong> Reduction occurs</li>
  <li><strong>Anode (+):</strong> Oxidation occurs</li>
</ul>
<p><strong>Standard electrode potentials:</strong></p>
<ul>
  <li>More positive = stronger oxidising agent</li>
  <li>More negative = stronger reducing agent</li>
</ul>
<p><strong>Balancing redox:</strong> Balance atoms, then O with H₂O, then H with H⁺, then charge with e⁻.</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> A spontaneous reaction has \( E^\circ_{\text{cell}} > 0 \). The more positive half-cell is the cathode.</div>`
  },

  'biology-photosynthesis': {
    patterns: ['photosynthesis','chloroplast','light dependent','calvin cycle','rubisco','photophosphorylation','light reaction','dark reaction'],
    response: `<h4>Photosynthesis</h4>
<div class="formula-block">
  \( 6\text{CO}_2 + 6\text{H}_2\text{O} \rightarrow \text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2 \)
</div>
<p><strong>Light-dependent reactions (thylakoid membranes):</strong></p>
<ul>
  <li>PSII: Photolysis of water → O₂ + H⁺ + e⁻</li>
  <li>ETC: Electrons flow, pumping protons → ATP via chemiosmosis</li>
  <li>PSI: NADP⁺ reduced to NADPH</li>
</ul>
<p><strong>Calvin cycle (stroma):</strong></p>
<ul>
  <li><strong>Carbon fixation:</strong> CO₂ + RuBP → 2 × GP (catalysed by RuBisCO)</li>
  <li><strong>Reduction:</strong> GP → TP, using ATP and NADPH</li>
  <li><strong>Regeneration:</strong> TP → RuBP, using ATP</li>
</ul>
<p><strong>Factors limiting rate:</strong> Light intensity, CO₂ concentration, temperature</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Know exact locations: thylakoid (light-dependent) and stroma (Calvin cycle). RuBisCO is the most abundant enzyme on Earth.</div>`
  },

  'biology-respiration': {
    patterns: ['respiration','glycolysis','krebs','electron transport chain','oxidative phosphorylation','aerobic','anaerobic','atp yield'],
    response: `<h4>Cellular Respiration</h4>
<p><strong>Aerobic respiration (~38 ATP total):</strong></p>
<ol>
  <li><strong>Glycolysis</strong> (cytoplasm): Glucose → 2 pyruvate. Net <strong>2 ATP, 2 NADH</strong>.</li>
  <li><strong>Link reaction</strong> (mitochondrial matrix): Pyruvate → Acetyl CoA + CO₂</li>
  <li><strong>Krebs cycle</strong> (matrix): 2 CO₂ + ATP + NADH + FADH₂ per turn (2 turns per glucose)</li>
  <li><strong>Oxidative phosphorylation</strong> (cristae): ETC + chemiosmosis → <strong>~34 ATP</strong></li>
</ol>
<p><strong>Anaerobic respiration (no O₂):</strong></p>
<ul>
  <li><strong>Animals:</strong> Pyruvate → Lactate (2 ATP only)</li>
  <li><strong>Yeast:</strong> Pyruvate → Ethanol + CO₂ (fermentation, 2 ATP only)</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Matrix = Krebs; cristae = oxidative phosphorylation. Anaerobic gives only 2 ATP — the low yield is the key disadvantage.</div>`
  },

  'biology-membranes': {
    patterns: ['membrane','diffusion','osmosis','active transport','facilitated','phospholipid','fluid mosaic','water potential','plasmolysis','haemolysis'],
    response: `<h4>Cell Membranes & Transport</h4>
<div class="formula-block">
  <strong>Water potential:</strong> \( \Psi = \Psi_s + \Psi_p \)<br>
  Pure water: \( \Psi = 0 \) kPa. Adding solute makes \( \Psi \) negative.
</div>
<p><strong>Fluid mosaic model:</strong> Phospholipid bilayer + proteins + cholesterol + glycoproteins/glycolipids.</p>
<p><strong>Transport mechanisms:</strong></p>
<table class="tutor-table">
  <tr><th>Type</th><th>Energy</th><th>Against gradient?</th><th>Example</th></tr>
  <tr><td>Simple diffusion</td><td>No</td><td>No</td><td>O₂, CO₂</td></tr>
  <tr><td>Facilitated diffusion</td><td>No</td><td>No</td><td>Glucose (GLUT), ions (channels)</td></tr>
  <tr><td>Osmosis</td><td>No</td><td>No</td><td>Water through aquaporins</td></tr>
  <tr><td>Active transport</td><td>Yes (ATP)</td><td>Yes</td><td>Na⁺/K⁺ pump, glucose in intestine</td></tr>
  <tr><td>Bulk transport</td><td>Yes (ATP)</td><td>Yes</td><td>Endocytosis, exocytosis</td></tr>
</table>
<div class="exam-tip-box"><strong>Exam tip:</strong> A cell in pure water gains water by osmosis and swells (animal cell = haemolysis, plant cell = turgid). In concentrated solution, it loses water (animal = crenation, plant = plasmolysis).</div>`
  },

  'biology-dna': {
    patterns: ['dna replication','transcription','translation','protein synthesis','mrna','trna','codon','anticodon','mutation','polymerase chain reaction','pcr'],
    response: `<h4>Protein Synthesis</h4>
<p><strong>Replication</strong> (semi-conservative):</p>
<ol>
  <li>Helicase unwinds the double helix</li>
  <li>DNA polymerase adds nucleotides 5'→3'</li>
  <li>Leading strand continuous; lagging strand in Okazaki fragments</li>
</ol>
<p><strong>Transcription</strong> (nucleus):</p>
<ol>
  <li>RNA polymerase binds to promoter</li>
  <li>DNA → pre-mRNA</li>
  <li>Splicing removes introns; mature mRNA exits nucleus</li>
</ol>
<p><strong>Translation</strong> (ribosome):</p>
<ol>
  <li>mRNA codons matched by tRNA anticodons</li>
  <li>Peptide bonds form between amino acids</li>
  <li>Stop codon terminates; polypeptide released</li>
</ol>
<p><strong>Genetic code:</strong> Triplet, degenerate, universal, non-overlapping, comma-less</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Remember: transcription = DNA→mRNA (nucleus); translation = mRNA→protein (ribosome). tRNA brings amino acids; rRNA forms ribosome structure.</div>`
  },

  'biology-immunity': {
    patterns: ['immune','antibody','antigen','phagocytosis','lymphocyte','vaccination','memory cell','t cell','b cell','humoral','cell-mediated','monoclonal'],
    response: `<h4>Immunity</h4>
<p><strong>Innate immunity</strong> (non-specific, immediate):</p>
<ul>
  <li>Physical barriers: skin, mucous membranes</li>
  <li>Phagocytosis: neutrophils and macrophages engulf pathogens</li>
  <li>Inflammation: increased blood flow, histamine release</li>
</ul>
<p><strong>Adaptive immunity</strong> (specific, memory):</p>
<ul>
  <li><strong>Cell-mediated (T-cells):</strong> Helper T (CD4⁺, cytokines), Cytotoxic T (CD8⁺, kills infected cells)</li>
  <li><strong>Humoral (B-cells):</strong> Plasma cells → antibodies; Memory B-cells for rapid secondary response</li>
</ul>
<p><strong>Antibodies:</strong> IgM (primary response), IgG (secondary, crosses placenta)</p>
<p><strong>Vaccination:</strong> Antigen presentation → primary response → memory cells → rapid, stronger secondary response upon real infection</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Secondary response is faster, stronger, longer-lasting due to memory cells. Monoclonal antibodies = identical clones from a single B-cell, used in diagnostics and cancer treatment.</div>`
  },

  'maths-differentiation': {
    patterns: ['differentiate','derivative','gradient','stationary point','turning point','maximum','minimum','chain rule','product rule','quotient rule','implicit differentiation','parametric'],
    response: `<h4>Differentiation</h4>
<div class="formula-block">
  \( \frac{d}{dx}(x^n) = nx^{n-1} \)<br>
  \( \frac{d}{dx}(\sin x) = \cos x \quad \frac{d}{dx}(\cos x) = -\sin x \)<br>
  \( \frac{d}{dx}(e^x) = e^x \quad \frac{d}{dx}(\ln x) = \frac{1}{x} \)<br>
  <strong>Chain:</strong> \( \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} \)<br>
  <strong>Product:</strong> \( \frac{d(uv)}{dx} = u \frac{dv}{dx} + v \frac{du}{dx} \)<br>
  <strong>Quotient:</strong> \( \frac{d(u/v)}{dx} = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2} \)
</div>
<p><strong>Stationary points:</strong> Set \( \frac{dy}{dx} = 0 \)</p>
<ul>
  <li>\( \frac{d^2y}{dx^2} > 0 \) → minimum</li>
  <li>\( \frac{d^2y}{dx^2} < 0 \) → maximum</li>
  <li>\( \frac{d^2y}{dx^2} = 0 \) → could be point of inflection</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Simplify before differentiating. For implicit differentiation, differentiate term by term remembering that \( \frac{d}{dx}(y^2) = 2y \frac{dy}{dx} \).</div>
<p><em>Ask me to differentiate a specific function, or explain parametric/partial derivatives?</em></p>`
  },

  'maths-integration': {
    patterns: ['integrate','integration','area under curve','definite integral','trapezium rule','volume of revolution','integration by parts','substitution','partial fractions'],
    response: `<h4>Integration</h4>
<div class="formula-block">
  \( \int x^n \, dx = \frac{x^{n+1}}{n+1} + c \quad (n \neq -1) \)<br>
  \( \int e^x \, dx = e^x + c \)<br>
  \( \int \frac{1}{x} \, dx = \ln|x| + c \)<br>
  \( \int \sin x \, dx = -\cos x + c \)<br>
  \( \int \cos x \, dx = \sin x + c \)<br>
  <strong>By parts:</strong> \( \int u \, dv = uv - \int v \, du \)<br>
  <strong>Trapezium rule:</strong> \( \approx \frac{h}{2}[(y_0 + y_n) + 2(y_1 + ... + y_{n-1})] \)
</div>
<p><strong>Definite integration:</strong> Area under curve = \( \int_a^b y \, dx \)</p>
<p><strong>Volume of revolution:</strong> \( V = \pi \int_a^b y^2 \, dx \)</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Area below the x-axis gives a negative value. If asked for total area, split at x-intercepts and take absolute values. Don't forget +c for indefinite integrals!</div>`
  },

  'maths-trigonometry': {
    patterns: ['sine rule','cosine rule','trig identity','r formula','cast diagram','solve trig','double angle','compound angle','sec','cosec','cot'],
    response: `<h4>Trigonometry</h4>
<div class="formula-block">
  <strong>Identities:</strong><br>
  \( \tan \theta = \frac{\sin \theta}{\cos \theta} \)<br>
  \( \sin^2 \theta + \cos^2 \theta = 1 \)<br>
  \( 1 + \tan^2 \theta = \sec^2 \theta \)<br>
  \( 1 + \cot^2 \theta = \csc^2 \theta \)<br>
  <strong>Double angle:</strong><br>
  \( \sin 2\theta = 2\sin\theta\cos\theta \)<br>
  \( \cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta \)<br>
  <strong>R-formula:</strong><br>
  \( a\sin\theta + b\cos\theta = R\sin(\theta + \alpha) \) where \( R = \sqrt{a^2 + b^2} \), \( \tan\alpha = \frac{b}{a} \)
</div>
<p><strong>Sine rule:</strong> \( \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R \)</p>
<p><strong>Cosine rule:</strong> \( a^2 = b^2 + c^2 - 2bc\cos A \)</p>
<p><strong>Area:</strong> \( \frac{1}{2}ab\sin C \)</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Use CAST diagram for finding multiple solutions. Period of sin/cos = 360°, tan = 180°. Always check your calculator is in the correct mode (degrees vs radians).</div>`
  },

  'maths-complex': {
    patterns: ['complex number','imaginary','real part','imaginary part','modulus','argument','polar form','de moivre','argand diagram','locus'],
    response: `<h4>Complex Numbers</h4>
<div class="formula-block">
  \( z = a + bi \) where \( i^2 = -1 \)<br>
  <strong>Modulus:</strong> \( |z| = \sqrt{a^2 + b^2} \)<br>
  <strong>Argument:</strong> \( \arg(z) = \tan^{-1}\left(\frac{b}{a}\right) \) (check quadrant!)<br>
  <strong>Polar:</strong> \( z = r(\cos\theta + i\sin\theta) = re^{i\theta} \)<br>
  <strong>De Moivre:</strong> \( (\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta \)<br>
  <strong>Euler:</strong> \( e^{i\pi} + 1 = 0 \)
</div>
<p><strong>Operations in polar form:</strong></p>
<ul>
  <li>Multiply: multiply moduli, add arguments</li>
  <li>Divide: divide moduli, subtract arguments</li>
</ul>
<p><strong>Loci on Argand diagram:</strong></p>
<ul>
  <li>\( |z - a| = r \): Circle centre a, radius r</li>
  <li>\( |z - a| = |z - b| \): Perpendicular bisector</li>
  <li>\( \arg(z - a) = \theta \): Half-line from a at angle θ</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Always draw an Argand diagram. Arguments are usually in radians between −π and π. Use \( \tan^{-1}(b/a) \) but adjust for quadrant.</div>`
  },

  'maths-vectors': {
    patterns: ['vector','dot product','cross product','scalar product','magnitude','unit vector','position vector','line equation','plane equation'],
    response: `<h4>Vectors</h4>
<div class="formula-block">
  <strong>Magnitude:</strong> \( |\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2} \)<br>
  <strong>Dot product:</strong> \( \vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\vec{a}||\vec{b}|\cos\theta \)<br>
  <strong>Cross product:</strong> \( |\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta \)<br>
  <strong>Unit vector:</strong> \( \hat{a} = \frac{\vec{a}}{|\vec{a}|} \)
</div>
<p><strong>Line equation:</strong> \( \vec{r} = \vec{a} + t\vec{d} \) (point + direction)</p>
<p><strong>Plane equation:</strong> \( \vec{r} \cdot \vec{n} = d \) or \( ax + by + cz = d \)</p>
<p><strong>Angle between lines:</strong> use direction vectors in dot product formula</p>
<p><strong>Angle between planes:</strong> use normal vectors</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> To check if two lines intersect: set components equal, solve for parameters. If parameters satisfy all three equations → intersect. If parallel direction vectors → parallel. Otherwise → skew.</div>`
  },

  'maths-series': {
    patterns: ['arithmetic series','geometric series','sum to infinity','binomial expansion','maclaurin','taylor','convergence','sigma notation'],
    response: `<h4>Series & Expansions</h4>
<div class="formula-block">
  <strong>Arithmetic:</strong> \( u_n = a + (n-1)d \), \( S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a + l) \)<br>
  <strong>Geometric:</strong> \( u_n = ar^{n-1} \), \( S_n = \frac{a(1-r^n)}{1-r} \)<br>
  <strong>Sum to infinity:</strong> \( S_\infty = \frac{a}{1-r} \) (only if |r| < 1)<br>
  <strong>Binomial:</strong> \( (1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + ... \)<br>
  <strong>Maclaurin:</strong> \( f(x) = f(0) + xf'(0) + \frac{x^2}{2!}f''(0) + ... \)
</div>
<p><strong>Convergence:</strong> Binomial series converges for |x| < 1 when n is not a positive integer.</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> For geometric series problems, always check if |r| < 1 before using sum to infinity. For binomial, adjust for (a + bx)ⁿ by factoring out a first.</div>`
  },

  'econ-elasticity': {
    patterns: ['ped','pes','yed','xed','elasticity','price elasticity','income elasticity','cross elasticity','total revenue'],
    response: `<h4>Elasticity</h4>
<div class="formula-block">
  \( \text{PED} = \frac{\%\Delta Q_d}{\%\Delta P} = \frac{\Delta Q_d}{Q_d} \div \frac{\Delta P}{P} \)<br>
  \( \text{PES} = \frac{\%\Delta Q_s}{\%\Delta P} \)<br>
  \( \text{YED} = \frac{\%\Delta Q_d}{\%\Delta Y} \)<br>
  \( \text{XED} = \frac{\%\Delta Q_a}{\%\Delta P_b} \)
</div>
<p><strong>PED and total revenue:</strong></p>
<ul>
  <li><strong>PED > 1 (elastic):</strong> Price ↑ → Revenue ↓. Price ↓ → Revenue ↑</li>
  <li><strong>PED < 1 (inelastic):</strong> Price ↑ → Revenue ↑. Price ↓ → Revenue ↓</li>
  <li><strong>PED = 0:</strong> Perfectly inelastic (vertical demand)</li>
  <li><strong>PED = ∞:</strong> Perfectly elastic (horizontal demand)</li>
</ul>
<p><strong>YED:</strong> Normal goods (>0), Inferior goods (<0), Luxury goods (>1), Necessities (0 to 1)</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Primary goods tend to be inelastic (few substitutes). Luxuries elastic. Addictive goods inelastic. Addictive + no substitutes = very inelastic.</div>`
  },

  'econ-market-failure': {
    patterns: ['market failure','externality','public good','merit good','demerit good','free rider','information failure','asymmetric information'],
    response: `<h4>Market Failure</h4>
<p><strong>Externalities:</strong> Social cost/benefit ≠ private cost/benefit</p>
<ul>
  <li><strong>Negative externality:</strong> MSC > MPC (e.g., pollution). Overproduction.</li>
  <li><strong>Positive externality:</strong> MSB > MPB (e.g., education). Underproduction.</li>
</ul>
<p><strong>Public goods:</strong> Non-excludable, non-rival. Free-rider problem → market underprovides.</p>
<p><strong>Merit goods:</strong> Under-consumed due to information failure (education, healthcare)</p>
<p><strong>Demerit goods:</strong> Over-consumed due to information failure (cigarettes, alcohol)</p>
<p><strong>Government remedies:</strong></p>
<ul>
  <li>Taxes (Pigouvian) on negative externalities</li>
  <li>Subsidies on positive externalities/merit goods</li>
  <li>Regulation, permits (cap-and-trade)</li>
  <li>Direct provision (public goods)</li>
  <li>Information campaigns</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Always draw a diagram showing MSC vs MPC for externalities. Shade the welfare loss triangle. Evaluate: government failure, administrative costs, measurement problems.</div>`
  },

  'econ-macroeconomics': {
    patterns: ['gdp','inflation','unemployment','fiscal policy','monetary policy','supply side','aggregate demand','aggregate supply',' Phillips curve','balance of payments'],
    response: `<h4>Macroeconomics</h4>
<div class="formula-block">
  <strong>GDP deflator:</strong> \( \frac{\text{Nominal GDP}}{\text{Real GDP}} \times 100 \)<br>
  <strong>Inflation:</strong> \( \frac{\text{CPI}_t - \text{CPI}_{t-1}}{\text{CPI}_{t-1}} \times 100 \)<br>
  <strong>Multiplier:</strong> \( k = \frac{1}{1 - MPC} = \frac{1}{MPW} \)
</div>
<p><strong>Policies:</strong></p>
<ul>
  <li><strong>Fiscal:</strong> Government spending + taxation. Expansionary (↑G, ↓T) during recession. Contractionary during inflation.</li>
  <li><strong>Monetary:</strong> Interest rates + money supply. Higher rates → ↓AD (less borrowing, less consumption/investment)</li>
  <li><strong>Supply-side:</strong> Education, training, privatisation, deregulation, tax incentives. Shifts LRAS right → lower inflation + higher growth long-term.</li>
</ul>
<p><strong>Unemployment types:</strong> Frictional, structural, cyclical (demand-deficient), seasonal, real wage/ classical</p>
<p><strong>Phillips curve:</strong> Short-run inverse relationship between inflation and unemployment. Long-run vertical at NRU (natural rate).</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Always evaluate policies: time lags, effectiveness depends on economic context, possible conflicts (growth vs inflation vs BoP), crowding out.</div>`
  },

  'econ-market-structures': {
    patterns: ['perfect competition','monopoly','oligopoly','monopolistic','barriers to entry','price discrimination','game theory','collusion','kinked demand'],
    response: `<h4>Market Structures</h4>
<table class="tutor-table">
  <tr><th>Feature</th><th>Perfect</th><th>Monopoly</th><th>Oligopoly</th><th>Monopolistic</th></tr>
  <tr><td>Firms</td><td>Many</td><td>One</td><td>Few</td><td>Many</td></tr>
  <tr><td>Product</td><td>Identical</td><td>Unique</td><td>Similar/different</td><td>Differentiated</td></tr>
  <tr><td>Barriers</td><td>None</td><td>High</td><td>High</td><td>Low</td></tr>
  <tr><td>Price control</td><td>None (taker)</td><td>Full (maker)</td><td>Some (interdependent)</td><td>Some</td></tr>
  <tr><td>Profit LR</td><td>Normal</td><td>Supernormal</td><td>Supernormal</td><td>Normal</td></tr>
</table>
<p><strong>Price discrimination:</strong> Charging different prices for the same product. Conditions: market power, separable markets, different PED in each market.</p>
<p><strong>Game theory (oligopoly):</strong> Prisoner's dilemma explains why firms might collude or compete. Kinked demand curve: rivals match price cuts but ignore price rises → sticky prices.</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Draw the standard diagrams: perfect comp (MC=MR at min AC), monopoly (MC=MR with AR above). Compare efficiency: allocative (P=MC), productive (min AC), dynamic (innovation).</div>`
  },

  'history-ww1': {
    patterns: ['world war i','ww1','causes of wwi','franz ferdinand','treaty of versailles','alliance system','july crisis','schlieffen plan','militarism','imperialism'],
    response: `<h4>World War I (1914–1918)</h4>
<p><strong>Long-term causes:</strong></p>
<ul>
  <li><strong>Alliance system:</strong> Triple Alliance (Germany, Austria-Hungary, Italy) vs Triple Entente (Britain, France, Russia)</li>
  <li><strong>Militarism:</strong> Arms race, especially Anglo-German naval rivalry (Dreadnoughts)</li>
  <li><strong>Imperialism:</strong> Scramble for Africa, Moroccan crises (1905, 1911)</li>
  <li><strong>Nationalism:</strong> Pan-Slavism, Balkan tensions</li>
</ul>
<p><strong>Short-term trigger:</strong></p>
<ol>
  <li>28 June 1914: Assassination of Archduke Franz Ferdinand in Sarajevo (Gavrilo Princip, Black Hand)</li>
  <li>July Crisis: Austria issues ultimatum to Serbia</li>
  <li>28 July: Austria declares war on Serbia</li>
  <li>1 Aug: Germany declares war on Russia</li>
  <li>3 Aug: Germany declares war on France; invades Belgium</li>
  <li>4 Aug: Britain declares war on Germany</li>
</ol>
<p><strong>Treaty of Versailles (1919):</strong></p>
<ul>
  <li>War guilt clause (Article 231)</li>
  <li>Reparations: £6.6 billion</li>
  <li>Territorial losses: Alsace-Lorraine, colonies, Polish Corridor</li>
  <li>Military: 100,000 army, no air force, no submarines, no general staff</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Balance long-term and short-term causes. Know the historiography: Fischer thesis (Germany planned war) vs Clark (sleepwalkers — all powers to blame).</div>`
  },

  'history-cold-war': {
    patterns: ['cold war','iron curtain','containment','truman doctrine','marshall plan','berlin blockade','berlin wall','cuban missile crisis','detente','gorbachev','proxy war'],
    response: `<h4>The Cold War (1947–1991)</h4>
<p><strong>Origins:</strong></p>
<ul>
  <li>1945: Yalta and Potsdam conferences — tensions over Poland, Germany</li>
  <li>1946: Churchill's Iron Curtain speech</li>
  <li>1947: Truman Doctrine (containment of communism); Marshall Plan ($13bn aid)</li>
  <li>1948: Berlin Blockade and Airlift</li>
  <li>1949: NATO formed; USSR tests atomic bomb; China falls to communism</li>
</ul>
<p><strong>Key crises:</strong></p>
<ul>
  <li>1950–53: Korean War (proxy war)</li>
  <li>1956: Hungarian Uprising (crushed by USSR); Suez Crisis</li>
  <li>1961: Berlin Wall built</li>
  <li>1962: <strong>Cuban Missile Crisis</strong> — closest to nuclear war. Khrushchev backs down, missiles removed. Kennedy's naval blockade.</li>
  <li>1968: Prague Spring (crushed by Warsaw Pact)</li>
  <li>1979–89: Soviet-Afghan War</li>
</ul>
<p><strong>Détente (1970s):</strong> SALT I, Helsinki Accords, but ends with Soviet invasion of Afghanistan</p>
<p><strong>End of Cold War:</strong></p>
<ul>
  <li>1985: Gorbachev — Glasnost (openness) and Perestroika (restructuring)</li>
  <li>1989: Fall of Berlin Wall; revolutions in Eastern Europe</li>
  <li>1991: Soviet Union dissolves; Warsaw Pact dissolved</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Know the historiography: Traditionalist (Soviet expansion to blame) vs Revisionist (US economic imperialism) vs Post-revisionist (mutual misunderstanding).</div>`
  },

  'history-hitler': {
    patterns: ['hitler','nazi germany','weimar republic','reichstag fire','enabling act','night of long knives','kristallnacht','holocaust','final solution','nuremberg laws','nuremberg trials'],
    response: `<h4>Nazi Germany (1933–1945)</h4>
<p><strong>Rise to power:</strong></p>
<ol>
  <li>1929: Wall Street Crash → German economy collapses → 6 million unemployed</li>
  <li>1930: Nazis become 2nd largest party (107 seats)</li>
  <li>Jan 1933: Hitler appointed Chancellor (von Papen's miscalculation)</li>
  <li>Feb 1933: Reichstag Fire → Emergency Decrees suspend civil liberties</li>
  <li>March 1933: Enabling Act → Hitler can rule by decree for 4 years</li>
  <li>June 1934: Night of Long Knives (SA leaders killed, army supports Hitler)</li>
  <li>Aug 1934: Hindenburg dies; Hitler becomes Führer (merges Chancellor + President)</li>
</ol>
<p><strong>Nazi state control:</strong></p>
<ul>
  <li><strong>Terror:</strong> Gestapo (secret police), SS, concentration camps</li>
  <li><strong>Propaganda:</strong> Goebbels, rallies, radio, films, Olympics 1936</li>
  <li><strong>Education/Youth:</strong> Hitler Youth (compulsory 1936), curriculum Nazi ideology</li>
  <li><strong>Church:</strong> Concordat 1933, later persecution</li>
</ul>
<p><strong>Persecution:</strong></p>
<ul>
  <li>1935: Nuremberg Laws — stripped Jews of citizenship, banned intermarriage</li>
  <li>1938: Kristallnacht — state-organised pogrom, 1000s of Jewish businesses destroyed</li>
  <li>1941–45: Final Solution → Holocaust (6 million Jews murdered; also Roma, disabled, political opponents, homosexuals)</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Totalitarianism debate: Intentionalist (Hitler planned everything) vs Structuralist (chaotic Nazi state, initiatives from below). Weimar weaknesses enabled Hitler's rise.</div>`
  },

  'geography-plate-tectonics': {
    patterns: ['plate tectonics','constructive boundary','destructive boundary','conservative boundary','earthquake','volcano','tsunami','richter scale','mercalli scale'],
    response: `<h4>Plate Tectonics</h4>
<p><strong>Plate boundaries:</strong></p>
<table class="tutor-table">
  <tr><th>Type</th><th>Movement</th><th>Features</th><th>Example</th></tr>
  <tr><td>Constructive (divergent)</td><td>Move apart</td><td>Mid-ocean ridges, rift valleys, shield volcanoes</td><td>Mid-Atlantic Ridge</td></tr>
  <tr><td>Destructive (convergent)</td><td>Collide</td><td>Trenches, fold mountains, composite volcanoes, earthquakes</td><td>Japan, Andes</td></tr>
  <tr><td>Conservative (transform)</td><td>Slide past</td><td>Earthquakes, no volcanoes</td><td>San Andreas Fault</td></tr>
  <tr><td>Collision</td><td>Continental-continental</td><td>Fold mountains, no subduction</td><td>Himalayas</td></tr>
</table>
<p><strong>Earthquake measurement:</strong></p>
<ul>
  <li><strong>Richter scale:</strong> Logarithmic, measures magnitude (energy released)</li>
  <li><strong>Mercalli scale:</strong> Measures intensity (damage observed)</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Explain the convection currents in the mantle as the driving force. Subduction occurs at destructive boundaries where oceanic crust sinks beneath continental crust (denser).</div>`
  },

  'geography-rivers': {
    patterns: ['river','erosion','transportation','deposition','hydraulic action','abrasion','attrition','solution','meander','oxbow lake','levee','floodplain'],
    response: `<h4>River Processes & Landforms</h4>
<p><strong>Erosion processes:</strong></p>
<ul>
  <li><strong>Hydraulic action:</strong> Force of water against river bed/banks</li>
  <li><strong>Abrasion:</strong> Sediment scraping against bed/banks</li>
  <li><strong>Attrition:</strong> Sediment particles colliding and breaking down</li>
  <li><strong>Solution:</strong> Dissolving of soluble rocks (limestone, chalk)</li>
</ul>
<p><strong>Transportation:</strong> Traction, saltation, suspension, solution</p>
<p><strong>Upper course:</strong> V-shaped valleys, interlocking spurs, waterfalls, gorges</p>
<p><strong>Middle course:</strong> Meanders (lateral erosion on outer bend, deposition on inner bend)</p>
<p><strong>Lower course:</strong> Oxbow lakes, levees, deltas, braided channels, point bars</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Link processes to Hjulström curve: velocity needed to erode, transport, and deposit particles of different sizes. Larger particles need higher velocity to erode but lower to deposit.</div>`
  },

  'geography-population': {
    patterns: ['population','demographic transition model','dtm','birth rate','death rate','natural increase','migration','push factor','pull factor','overpopulation','ageing population'],
    response: `<h4>Population</h4>
<div class="formula-block">
  <strong>Natural increase:</strong> Birth rate − Death rate (per 1000)<br>
  <strong>Doubling time:</strong> \( \frac{70}{\text{growth rate \%}} \) years
</div>
<p><strong>Demographic Transition Model (DTM):</strong></p>
<table class="tutor-table">
  <tr><th>Stage</th><th>BR</th><th>DR</th><th>NI</th><th>Example</th></tr>
  <tr><td>1</td><td>High</td><td>High</td><td>Low/0</td><td>No countries today</td></tr>
  <tr><td>2</td><td>High</td><td>Falling</td><td>High</td><td>Ethiopia, Afghanistan</td></tr>
  <tr><td>3</td><td>Falling</td><td>Low</td><td>Falling</td><td>India, Brazil</td></tr>
  <tr><td>4</td><td>Low</td><td>Low</td><td>Low/0</td><td>UK, USA, China</td></tr>
  <tr><td>5</td><td>Very low</td><td>Low</td><td>Negative</td><td>Japan, Germany</td></tr>
</table>
<p><strong>Migration:</strong></p>
<ul>
  <li><strong>Push factors:</strong> War, poverty, natural disasters, persecution</li>
  <li><strong>Pull factors:</strong> Jobs, safety, education, healthcare</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Evaluate the DTM: doesn't account for government policies (China's one-child), migration, HIV/AIDS epidemics, or cultural factors affecting birth rates.</div>`
  },

  'ict-hardware': {
    patterns: ['cpu','ram','rom','hard disk','input device','output device','fetch decode execute','motherboard','cache','ssd','secondary storage'],
    response: `<h4>Computer Hardware</h4>
<p><strong>CPU (Central Processing Unit):</strong></p>
<ul>
  <li><strong>ALU:</strong> Arithmetic and logic operations</li>
  <li><strong>CU:</strong> Controls instruction execution, decodes instructions</li>
  <li><strong>Registers:</strong> Small, fast storage within CPU (PC, IR, ACC, MDR, MAR)</li>
  <li><strong>Fetch-Decode-Execute cycle:</strong> Repeatedly fetches next instruction, decodes it, executes it</li>
</ul>
<p><strong>Memory hierarchy (fastest to slowest):</strong></p>
<ol>
  <li>Registers (fastest, smallest, most expensive)</li>
  <li>Cache (L1, L2, L3)</li>
  <li>RAM (volatile — lost when power off)</li>
  <li>ROM (non-volatile — stores BIOS/boot instructions)</li>
  <li>Secondary storage (HDD, SSD, optical)</li>
</ol>
<p><strong>Storage types:</strong></p>
<ul>
  <li><strong>Magnetic (HDD):</strong> High capacity, mechanical, slower, cheaper per GB</li>
  <li><strong>Optical (CD/DVD/Blu-ray):</strong> Removable, durable</li>
  <li><strong>Solid State (SSD/Flash):</strong> No moving parts, faster, silent, expensive, limited write cycles</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> RAM is volatile; ROM is non-volatile. Cache reduces bottleneck between fast CPU and slower RAM. SSDs use NAND flash memory — no mechanical parts.</div>`
  },

  'ict-networks': {
    patterns: ['lan','wan','wifi','router','switch','firewall','encryption','malware','phishing','ddos','vpn','protocol','tcp/ip','packet'],
    response: `<h4>Networks & Security</h4>
<p><strong>Network types:</strong></p>
<ul>
  <li><strong>LAN:</strong> Local Area Network — home, school, office (high speed, private)</li>
  <li><strong>WAN:</strong> Wide Area Network — spans cities/countries; Internet is the largest WAN</li>
  <li><strong>WLAN:</strong> Wireless LAN (WiFi, uses radio waves)</li>
</ul>
<p><strong>Network hardware:</strong></p>
<ul>
  <li><strong>Router:</strong> Connects networks; directs traffic using IP addresses; performs NAT</li>
  <li><strong>Switch:</strong> Connects devices within LAN efficiently (learns MAC addresses)</li>
  <li><strong>Hub:</strong> Broadcasts to all devices (wasteful, obsolete)</li>
  <li><strong>Modem:</strong> Converts digital/analogue signals (modulation/demodulation)</li>
  <li><strong>Firewall:</strong> Filters network traffic based on rules</li>
</ul>
<p><strong>Security threats:</strong></p>
<ul>
  <li><strong>Malware:</strong> Viruses, worms, trojans, ransomware, spyware, adware</li>
  <li><strong>Phishing:</strong> Fake emails/websites to steal credentials</li>
  <li><strong>DDoS:</strong> Distributed Denial of Service — overwhelming server with traffic</li>
  <li><strong>Man-in-the-middle:</strong> Intercepting communication</li>
</ul>
<p><strong>Protection:</strong> Firewall, encryption (SSL/TLS), authentication (passwords, 2FA, biometrics), VPN, antivirus, regular backups</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> A firewall blocks unauthorised access; encryption protects data even if intercepted. HTTPS = HTTP + SSL/TLS encryption. 2FA adds a second verification step.</div>`
  },

  'ict-programming': {
    patterns: ['algorithm','pseudocode','flowchart','variable','loop','if statement','array','function','oop','object oriented','recursion','sorting','searching'],
    response: `<h4>Programming Concepts</h4>
<p><strong>Algorithm:</strong> Step-by-step solution to a problem. Properties: unambiguous, finite, effective.</p>
<p><strong>Flowchart symbols:</strong></p>
<ul>
  <li>Oval: Start/End</li>
  <li>Rectangle: Process</li>
  <li>Diamond: Decision</li>
  <li>Parallelogram: Input/Output</li>
</ul>
<p><strong>Control structures:</strong></p>
<ul>
  <li><strong>Sequence:</strong> Instructions in order</li>
  <li><strong>Selection:</strong> IF...THEN...ELSE, CASE/SWITCH, nested IFs</li>
  <li><strong>Iteration:</strong> FOR (count-controlled), WHILE (condition-controlled), REPEAT...UNTIL (post-test)</li>
</ul>
<p><strong>Data types:</strong> Integer, Real/Float, String, Char, Boolean, Date</p>
<p><strong>Data structures:</strong></p>
<ul>
  <li><strong>Array:</strong> Fixed-size collection of same-type elements</li>
  <li><strong>2D Array:</strong> Table (rows and columns)</li>
  <li><strong>Record/Struct:</strong> Collection of different-type fields</li>
  <li><strong>Linked List:</strong> Dynamic size, nodes with data + pointer</li>
  <li><strong>Stack:</strong> LIFO (Last In First Out)</li>
  <li><strong>Queue:</strong> FIFO (First In First Out)</li>
</ul>
<p><strong>OOP concepts:</strong> Class (blueprint), Object (instance), Inheritance, Encapsulation, Polymorphism</p>
<div class="exam-tip-box"><strong>Exam tip:</strong> Trace through loops manually. Write down variable values after each iteration. For sorting: bubble sort (simple but slow), merge sort (divide and conquer, faster).</div>`
  },

  'ict-databases': {
    patterns: ['database','sql','query','normalisation','primary key','foreign key','entity','relationship','erd','data redundancy'],
    response: `<h4>Databases & SQL</h4>
<p><strong>Key terms:</strong></p>
<ul>
  <li><strong>Table/Relation:</strong> Collection of related data</li>
  <li><strong>Record/Tuple:</strong> One row (one item)</li>
  <li><strong>Field/Attribute:</strong> One column (one property)</li>
  <li><strong>Primary key:</strong> Unique identifier for each record</li>
  <li><strong>Foreign key:</strong> Links tables together</li>
  <li><strong>Composite key:</strong> Primary key made of multiple fields</li>
</ul>
<p><strong>SQL commands:</strong></p>
<div class="formula-block">
  <strong>SELECT:</strong> <code>SELECT name, age FROM students WHERE age > 16 ORDER BY name;</code><br>
  <strong>INSERT:</strong> <code>INSERT INTO students (name, age) VALUES ('John', 17);</code><br>
  <strong>UPDATE:</strong> <code>UPDATE students SET age = 18 WHERE name = 'John';</code><br>
  <strong>DELETE:</strong> <code>DELETE FROM students WHERE age < 16;</code><br>
  <strong>JOIN:</strong> <code>SELECT * FROM students INNER JOIN grades ON students.id = grades.student_id;</code>
</div>
<p><strong>Normalisation:</strong></p>
<ul>
  <li><strong>1NF:</strong> Atomic values, no repeating groups</li>
  <li><strong>2NF:</strong> 1NF + no partial dependencies</li>
  <li><strong>3NF:</strong> 2NF + no transitive dependencies</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Normalisation reduces data redundancy and improves data integrity. Always identify the primary key first before normalising.</div>`
  },

  'english-literature': {
    patterns: ['metaphor','simile','alliteration','personification','imagery','symbolism','theme','motif','narrative','dramatic irony','soliloquy'],
    response: `<h4>Literary Techniques</h4>
<p><strong>Figurative language:</strong></p>
<ul>
  <li><strong>Metaphor:</strong> Direct comparison without "like" or "as" ("Time is a thief")</li>
  <li><strong>Simile:</strong> Comparison using "like" or "as" ("as brave as a lion")</li>
  <li><strong>Personification:</strong> Giving human qualities to non-human things</li>
  <li><strong>Alliteration:</strong> Repetition of initial consonant sounds</li>
  <li><strong>Onomatopoeia:</strong> Words that imitate sounds</li>
</ul>
<p><strong>Key concepts:</strong></p>
<ul>
  <li><strong>Theme:</strong> Central idea/message (love, power, death, identity)</li>
  <li><strong>Motif:</strong> Recurring symbol or idea that reinforces theme</li>
  <li><strong>Irony:</strong> Difference between expectation and reality</li>
  <li><strong>Dramatic irony:</strong> Audience knows something characters don't</li>
  <li><strong>Soliloquy:</strong> Character speaks thoughts aloud (alone on stage)</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> In literature essays, always PEE: Point (make your argument), Evidence (quote), Explanation (analyse language and link to context/author's purpose).</div>`
  },

  'psychology-memory': {
    patterns: ['multi store model','working memory','long term memory','encoding','retrieval','forgetting','interference','cue dependent','flashbulb memory','eyewitness testimony'],
    response: `<h4>Memory</h4>
<p><strong>Multi-Store Model (Atkinson & Shiffrin):</strong></p>
<ul>
  <li><strong>Sensory memory:</strong> Very brief (0.5–3s), large capacity. Iconic (visual) and echoic (auditory).</li>
  <li><strong>Short-term memory:</strong> ~18–30 seconds, capacity 7±2 items (Miller). Acoustic encoding mainly.</li>
  <li><strong>Long-term memory:</strong> Potentially unlimited duration and capacity. Semantic encoding mainly.</li>
</ul>
<p><strong>Working Memory Model (Baddeley & Hitch):</strong></p>
<ul>
  <li><strong>Central executive:</strong> Attention controller, limited capacity</li>
  <li><strong>Phonological loop:</strong> Verbal/acoustic information</li>
  <li><strong>Visuospatial sketchpad:</strong> Visual and spatial information</li>
  <li><strong>Episodic buffer:</strong> Integrates information from other components</li>
</ul>
<p><strong>Forgetting theories:</strong></p>
<ul>
  <li><strong>Decay:</strong> Memory trace fades over time (mainly STM)</li>
  <li><strong>Interference:</strong> Proactive (old disrupts new) or Retroactive (new disrupts old)</li>
  <li><strong>Retrieval failure:</strong> Cue-dependent — information is stored but cannot be accessed without right cues</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Evaluate models: MSM is too linear/simplistic; WMM better explains dual-task performance. Research methods: case studies (HM, Clive Wearing), lab experiments (Peterson & Peterson).</div>`
  },

  'psychology-attachment': {
    patterns: ['attachment','bowlby','ainsworth','strange situation','secure attachment','insecure','avoidant','resistant','disinhibited','internal working model'],
    response: `<h4>Attachment</h4>
<p><strong>Bowlby's Theory:</strong></p>
<ul>
  <li><strong>Monotropy:</strong> One special attachment figure (usually mother)</li>
  <li><strong>Critical period:</strong> First 2.5 years for attachment formation</li>
  <li><strong>Internal working model:</strong> Mental template for future relationships</li>
  <li><strong>Maternal deprivation:</strong> Separation in critical period → irreversible damage</li>
</ul>
<p><strong>Ainsworth's Strange Situation:</strong></p>
<table class="tutor-table">
  <tr><th>Type</th><th>% infants</th><th>Behaviour</th></tr>
  <tr><td>Secure (Type B)</td><td>65%</td><td>Distressed when caregiver leaves, happy on return, uses caregiver as safe base</td></tr>
  <tr><td>Insecure-avoidant (Type A)</td><td>22%</td><td>Little distress on separation, ignores caregiver on return</td></tr>
  <tr><td>Insecure-resistant (Type C)</td><td>12%</td><td>Very distressed, seeks and rejects comfort (ambivalent)</td></tr>
  <tr><td>Disorganised (Type D)</td><td>~1%</td><td>Inconsistent behaviour, freezing, dazed</td></tr>
</table>
<div class="exam-tip-box"><strong>Exam tip:</strong> Cultural variations: German infants more avoidant (encouraged independence); Japanese more resistant (rarely separated from mothers). Evaluate: deterministic, ethics of Strange Situation.</div>`
  },

  'psychology-abnormality': {
    patterns: ['abnormality','deviation','statistical infrequency','failure to function','ideal mental health','dsm','phobia','ocd','depression','cognitive behavioural','biological approach'],
    response: `<h4>Approaches to Abnormality</h4>
<p><strong>Definitions of abnormality:</strong></p>
<ul>
  <li><strong>Statistical infrequency:</strong> Rare behaviour is abnormal (IQ < 70). Problem: some rare behaviours are positive (genius).</li>
  <li><strong>Deviation from social norms:</strong> Breaking unwritten rules. Problem: norms change over time and culture.</li>
  <li><strong>Failure to function adequately:</strong> Cannot cope with daily life. Problem: some functional people have disorders; some dysfunctional people don't.</li>
  <li><strong>Deviation from ideal mental health:</strong> Failing to meet Jahoda's criteria (self-actualisation, resistance to stress, etc.). Problem: unrealistic ideal.</li>
</ul>
<p><strong>Treatments:</strong></p>
<ul>
  <li><strong>Biological:</strong> Drug therapy (SSRIs for depression), ECT, psychosurgery</li>
  <li><strong>CBT:</strong> Challenge irrational thoughts, change maladaptive behaviours</li>
  <li><strong>Psychodynamic:</strong> Free association, dream analysis, transference</li>
  <li><strong>Humanistic:</strong> Client-centred therapy, unconditional positive regard (Rogers)</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> Evaluate treatments: drugs are fast but have side effects and don't address root cause. CBT has long-term benefits but requires motivation. Compare effectiveness for different disorders.</div>`
  },

  'zetrix-overview': {
    patterns: ['zetrix','ai academy','claw','ai adoption','certified zetrix','ai professional','training program'],
    response: `<h4>Zetrix AI Academy</h4>
<p>Transform every employee into an AI-powered professional through 6 progressive levels:</p>
<ol>
  <li><strong>Level 1 — AI Fundamentals</strong> (2h): What is AI, types, generative AI, LLMs, limitations, myths</li>
  <li><strong>Level 2 — Mastering Zetrix AI</strong> (3h): Dashboard, chat, file uploads, AI memory, assistants, templates</li>
  <li><strong>Level 3 — AI Avatar (Claw)</strong> (2h): Voice conversations, meetings, presentations, roleplaying</li>
  <li><strong>Level 4 — AI for Daily Work</strong> (2h): Travel, budgeting, learning, writing, scheduling</li>
  <li><strong>Level 5 — Department-Specific AI</strong> (4h): HR, Finance, Marketing, Sales, Support, Operations, Legal, IT, Executive</li>
  <li><strong>Level 6 — Advanced AI Automation</strong> (4h): Workflows, agents, multi-step prompts, APIs, custom GPTs</li>
</ol>
<p>Each level requires: videos, reading, exercises, practical tasks, quiz (80% pass), real-world assignment.</p>
<div class="exam-tip-box"><strong>Certification:</strong> Complete all 6 levels to earn "Certified Zetrix AI Professional"</div>`
  },

  'zetrix-prompt': {
    patterns: ['prompt formula','perfect prompt','prompt structure','role goal context format','prompt blocks','prompt builder','how to prompt'],
    response: `<h4>The Perfect Prompt Formula</h4>
<div class="formula-block">
  <strong>Role + Goal + Context + Format + Constraints</strong>
</div>
<p><strong>Role:</strong> "You are an expert financial analyst..."</p>
<p><strong>Goal:</strong> "Analyse Q3 revenue trends..."</p>
<p><strong>Context:</strong> "Our company is a SaaS startup with 500 employees..."</p>
<p><strong>Format:</strong> "Present as bullet points with charts..."</p>
<p><strong>Constraints:</strong> "Keep under 500 words. Use simple language."</p>
<p><strong>Example:</strong></p>
<blockquote>"You are a senior marketing strategist. Create a 30-day social media campaign for a new fitness app targeting professionals 25-40. Structure: objectives, platforms, content calendar, KPIs. Tone: energetic but professional."</blockquote>
<div class="exam-tip-box"><strong>Tip:</strong> The more specific your prompt, the better the output. Vague prompts = vague answers. Always specify output format.</div>`
  },

  'revision-tips': {
    patterns: ['revise','revision','study','how to study','exam technique','time management','revision strategy','past paper','memorise','remember'],
    response: `<h4>Revision Strategies</h4>
<ol>
  <li><strong>Active recall:</strong> Test yourself, don't just re-read. Close the book and write what you remember.</li>
  <li><strong>Spaced repetition:</strong> Review at increasing intervals (1 day, 3 days, 1 week, 2 weeks).</li>
  <li><strong>Past papers:</strong> Do them under timed conditions. Mark using official mark schemes.</li>
  <li><strong>Blurting:</strong> Write everything you know about a topic, then check what's missing.</li>
  <li><strong>Teach someone:</strong> Explaining reinforces understanding (Feynman technique).</li>
  <li><strong>Sleep:</strong> 7-9 hours consolidates memory. All-nighters destroy recall.</li>
  <li><strong>Exercise:</strong> 20 minutes of cardio improves focus and memory consolidation.</li>
  <li><strong>Pomodoro:</strong> 25 minutes focused work + 5 minutes break.</li>
</ol>
<p><strong>During the exam:</strong></p>
<ul>
  <li>Read every question twice before answering</li>
  <li>Plan essays (5-minute plan saves 15 minutes of rewriting)</li>
  <li>Show all working in calculations</li>
  <li>Check units in Physics/Chemistry</li>
  <li>Leave 5 minutes at the end to review</li>
</ul>
<div class="exam-tip-box"><strong>Exam tip:</strong> The night before: light review only. Sleep > cramming. Your brain consolidates during sleep.</div>`
  },

  'fallback': {
    response: `I don't have a specific answer for that in my knowledge base. Try asking about:<br><br>
<ul>
<li><strong>Physics:</strong> kinematics, forces, energy, waves, circuits, fields, nuclear, quantum</li>
<li><strong>Chemistry:</strong> stoichiometry, equilibrium, organic, electrochemistry</li>
<li><strong>Biology:</strong> photosynthesis, respiration, membranes, DNA, immunity</li>
<li><strong>Maths:</strong> differentiation, integration, trigonometry, complex numbers, vectors, series</li>
<li><strong>Economics:</strong> elasticity, market failure, macroeconomics, market structures</li>
<li><strong>History:</strong> WWI, Cold War, Nazi Germany</li>
<li><strong>Geography:</strong> plate tectonics, rivers, population</li>
<li><strong>ICT:</strong> hardware, networks, programming, databases</li>
<li><strong>Psychology:</strong> memory, attachment, abnormality</li>
<li><strong>English:</strong> literary techniques, essay structure</li>
<li><strong>General:</strong> revision tips, exam technique</li>
</ul>
Or select a subject above and ask a focused question!`
  }
};

// Question bank
const questionBank = {
  physics: [
    { q: 'What is the SUVAT equation that does NOT include time?', a: 'v² = u² + 2as', hint: 'Think about which variable is missing: s, u, v, a, or t?' },
    { q: 'A 2kg object accelerates at 3 m/s². What is the resultant force?', a: '6 N (F = ma = 2 × 3)', hint: "Use Newton's second law: F = ma" },
    { q: 'What is the wavelength of a wave with frequency 50 Hz and speed 340 m/s?', a: '6.8 m (λ = v/f = 340/50)', hint: 'Use the wave equation: v = fλ' },
    { q: 'A transformer has 200 turns on the primary and 800 on the secondary. If primary voltage is 12V, what is secondary voltage?', a: '48 V (Vs/Vp = Ns/Np)', hint: 'Use the transformer equation' }
  ],
  chemistry: [
    { q: 'How many moles are in 58.5g of NaCl? (Mᵣ = 58.5)', a: '1.0 mol', hint: 'n = mass / Mᵣ' },
    { q: 'What is the oxidation state of Mn in MnO₄⁻?', a: '+7', hint: 'Oxygen is -2 each. Total charge is -1. Solve for Mn.' },
    { q: 'Name the catalyst used in the Haber process.', a: 'Iron (Fe)', hint: 'Think about the Contact process vs Haber process catalysts.' },
    { q: 'Balance: C₂H₆ + O₂ → CO₂ + H₂O', a: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O', hint: 'Start with carbon, then hydrogen, then oxygen.' }
  ],
  biology: [
    { q: 'Where does the Calvin cycle occur?', a: 'Stroma of the chloroplast', hint: 'Light-independent stage location' },
    { q: 'What enzyme fixes CO₂ in the Calvin cycle?', a: 'RuBisCO', hint: 'Ribulose bisphosphate carboxylase/oxygenase' },
    { q: 'How many ATP are produced from one glucose in aerobic respiration?', a: '~38 ATP (approximately)', hint: 'Glycolysis (2) + Krebs (2) + Oxidative phosphorylation (~34)' },
    { q: 'What type of T-cell releases cytokines to activate other immune cells?', a: 'Helper T-cell (CD4⁺)', hint: 'Cytotoxic T-cells kill infected cells directly.' }
  ],
  maths: [
    { q: 'Differentiate y = 3x⁴ + 2x² - 5x + 1', a: 'dy/dx = 12x³ + 4x - 5', hint: 'Apply power rule to each term' },
    { q: 'Solve: sin θ = 0.5 for 0° ≤ θ ≤ 360°', a: 'θ = 30°, 150°', hint: 'Use CAST diagram. sin is positive in 1st and 2nd quadrants.' },
    { q: 'Find ∫(4x³ + 2x) dx', a: 'x⁴ + x² + c', hint: 'Increase power by 1, divide by new power' },
    { q: 'Find the modulus of z = 3 + 4i', a: '|z| = 5', hint: 'Use Pythagoras: √(3² + 4²)' }
  ],
  economics: [
    { q: 'If PED = 0.5 and price increases by 10%, what happens to quantity demanded?', a: 'Decreases by 5%', hint: 'PED = %ΔQd / %ΔP' },
    { q: 'What type of good has negative income elasticity?', a: 'Inferior good', hint: 'Demand falls as income rises' },
    { q: 'Name two supply-side policies.', a: 'Education/training, privatisation, deregulation (any two)', hint: 'Policies that shift LRAS right' },
    { q: 'If MPC = 0.8, what is the multiplier?', a: 'k = 5', hint: 'k = 1/(1-MPC) = 1/0.2' }
  ],
  history: [
    { q: 'What was the immediate trigger of WWI?', a: 'Assassination of Archduke Franz Ferdinand (28 June 1914)', hint: 'Sarajevo, Gavrilo Princip' },
    { q: 'What did Article 231 of the Treaty of Versailles declare?', a: 'Germany accepted sole responsibility for the war', hint: 'War guilt clause' },
    { q: 'In what year did the Berlin Wall fall?', a: '1989', hint: 'November 9' },
    { q: 'What was the Night of the Long Knives (1934)?', a: 'Hitler purged SA leaders to gain army support', hint: 'Röhm and other SA leaders killed' }
  ],
  geography: [
    { q: 'Name the three types of plate boundary.', a: 'Constructive, destructive, conservative', hint: 'Also called divergent, convergent, transform' },
    { q: 'What is the driving force behind plate tectonics?', a: 'Convection currents in the mantle', hint: 'Heat from the core causes magma to rise and sink' },
    { q: 'What landform is created when a meander is cut off?', a: 'Oxbow lake', hint: 'Deposition at neck, erosion at bends' }
  ],
  ict: [
    { q: 'What does CPU stand for and what are its main components?', a: 'Central Processing Unit: ALU, CU, Registers', hint: 'Arithmetic Logic Unit, Control Unit' },
    { q: 'What is the difference between RAM and ROM?', a: 'RAM is volatile (lost when power off); ROM is non-volatile (permanent)', hint: 'RAM stores running programs; ROM stores boot instructions' },
    { q: 'Name three types of malware.', a: 'Virus, worm, trojan, ransomware, spyware, adware (any three)', hint: 'Malicious software' }
  ],
  psychology: [
    { q: 'What is the capacity of short-term memory (Miller)?', a: '7 ± 2 items', hint: 'George Miller, 1956' },
    { q: 'What percentage of infants show secure attachment (Ainsworth)?', a: '65%', hint: 'Strange Situation study' },
    { q: 'What does CBT stand for and what does it do?', a: 'Cognitive Behavioural Therapy — challenges irrational thoughts and changes behaviours', hint: 'Beck and Ellis' }
  ],
  english: [
    { q: 'What is the difference between a metaphor and a simile?', a: 'Metaphor: direct comparison ("time is a thief"). Simile: uses "like" or "as" ("as brave as a lion").', hint: 'One uses "like/as", the other does not' },
    { q: 'What does PEE stand for in essay writing?', a: 'Point, Evidence, Explanation', hint: 'Make your point, quote evidence, analyse and explain' }
  ]
};

let conversationHistory = [];
let currentSubject = 'all';
let chatArea, userInput, sendBtn;

function initTutor() {
  chatArea = document.getElementById('chatArea');
  userInput = document.getElementById('userInput');
  sendBtn = document.getElementById('sendBtn');

  sendBtn.addEventListener('click', handleSend);
  userInput.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } });

  document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubject = btn.dataset.subject;
      updateSuggestions();
    });
  });

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      userInput.value = chip.textContent;
      handleSend();
    });
  });
}

function updateSuggestions() {
  const suggestions = document.getElementById('suggestions');
  const map = {
    all: ['Explain photosynthesis','What is PED?','Differentiation rules','SUVAT equations','Price discrimination','WWI causes','Exam tips','Practice question'],
    physics: ['SUVAT equations','Projectile motion','Wave interference','Kirchhoff laws','Transformer equation','Electric fields','Practice question'],
    chemistry: ['Le Chatelier principle','Stoichiometry moles','Organic tests','Electrode potentials','Redox balancing','Practice question'],
    biology: ['Calvin cycle steps','Cellular respiration','Immune response','DNA replication','Practice question'],
    maths: ['Chain rule example','Integration by parts','Trigonometric identities','Complex numbers','Vectors','Practice question'],
    economics: ['PED calculation','Market failure types','Fiscal vs monetary','Supply-side policies','Practice question']
  };
  const items = map[currentSubject] || map.all;
  suggestions.innerHTML = items.map(s => `<span class="chip">${s}</span>`).join('');
  suggestions.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => { userInput.value = chip.textContent; handleSend(); });
  });
}

async function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;
  userInput.value = '';

  addMessage(text, 'user');
  conversationHistory.push({ role: 'user', text });
  if (conversationHistory.length > 10) conversationHistory = conversationHistory.slice(-10);

  showTyping();

  // Try AI API first if configured
  if (API_URL) {
    try {
      const messages = [{ role: 'system', content: SYSTEM_PROMPT }];
      // Add last 6 conversation turns as context
      const recent = conversationHistory.slice(-6);
      recent.forEach(m => {
        messages.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text.replace(/<[^>]+>/g, '') });
      });

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });

      const data = await res.json();
      hideTyping();

      if (data.reply) {
        const formatted = formatAIReply(data.reply);
        addMessage(formatted, 'bot');
        conversationHistory.push({ role: 'bot', text: formatted });
        if (conversationHistory.length > 10) conversationHistory = conversationHistory.slice(-10);
        if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
        return;
      }
    } catch (err) {
      console.log('AI API failed, falling back to local:', err);
    }
  }

  // Fallback to local knowledge base
  const thinkTime = 600 + Math.random() * 800;
  setTimeout(() => {
    hideTyping();
    const response = getLocalResponse(text);
    addMessage(response, 'bot');
    conversationHistory.push({ role: 'bot', text: response });
    if (conversationHistory.length > 10) conversationHistory = conversationHistory.slice(-10);

    if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
  }, thinkTime);
}

function formatAIReply(text) {
  // Convert markdown-style formatting to HTML
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```(.*?)```/gs, '<div class="formula-block"><code>$1</code></div>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
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

function getLocalResponse(text) {
  const lower = text.toLowerCase();

  // ===== MATH CALCULATOR =====
  const mathResult = tryCalculate(text);
  if (mathResult !== null) {
    return `<h4>Calculation</h4><div class="formula-block">${text} = <strong>${mathResult}</strong></div>`;
  }

  // ===== GENERAL KNOWLEDGE =====
  const generalAnswer = tryGeneralKnowledge(text);
  if (generalAnswer !== null) {
    return generalAnswer;
  }

  if (knowledgeBase.greetings.patterns.some(p => lower.includes(p))) {
    return knowledgeBase.greetings.response;
  }

  if (lower.includes('practice') || lower.includes('quiz') || lower.includes('question') || lower.includes('test me')) {
    return generatePracticeQuestion();
  }

  if (lower.includes('revise') || lower.includes('study') || lower.includes('exam tip') || lower.includes('how to revise') || lower.includes('how do i study')) {
    return knowledgeBase['revision-tips'].response;
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const [key, data] of Object.entries(knowledgeBase)) {
    if (!data.patterns) continue;

    let score = 0;
    for (const pattern of data.patterns) {
      if (lower.includes(pattern)) {
        score += pattern.length;
      }
    }

    if (currentSubject !== 'all' && key.startsWith(currentSubject)) {
      score *= 1.5;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = data;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  return knowledgeBase.fallback.response;
}

function generatePracticeQuestion() {
  const subjects = currentSubject !== 'all' ? [currentSubject] : Object.keys(questionBank);
  const available = [];
  subjects.forEach(s => {
    if (questionBank[s]) available.push(...questionBank[s].map(q => ({...q, subject: s})));
  });

  if (available.length === 0) {
    return 'Select a subject above and I\'ll quiz you with practice questions!';
  }

  const q = available[Math.floor(Math.random() * available.length)];
  const subjectName = q.subject.charAt(0).toUpperCase() + q.subject.slice(1);
  return `<h4>Practice Question (${subjectName})</h4>
<p><strong>${q.q}</strong></p>
<p><em>Hint: ${q.hint}</em></p>
<p><span class="chip" onclick="this.nextElementSibling.style.display='block';this.style.display='none'" style="cursor:pointer;display:inline-block;margin-top:8px;">Show Answer</span>
<span style="display:none"><strong>Answer:</strong> ${q.a}</span></p>`;
}

// ===== MATH CALCULATOR =====
function tryCalculate(text) {
  // Clean the text: remove common words, keep only math expression
  let expr = text
    .replace(/what is|what's|calculate|compute|solve|find|value of/gi, '')
    .replace(/\?/g, '')
    .trim();

  // Only try if it looks like a math expression (contains digits and operators)
  if (!/^[-+*/^().\d\s]+$/.test(expr)) return null;
  if (!/\d/.test(expr)) return null;

  try {
    // Replace ^ with ** for exponentiation
    expr = expr.replace(/\^/g, '**');
    // Safe eval using Function constructor
    const result = new Function('return (' + expr + ')')();
    if (Number.isFinite(result)) {
      // Format nicely
      if (Number.isInteger(result)) return String(result);
      return String(parseFloat(result.toFixed(6)));
    }
  } catch (e) {
    // Not a valid expression
  }
  return null;
}

// ===== GENERAL KNOWLEDGE =====
function tryGeneralKnowledge(text) {
  const lower = text.toLowerCase().replace(/[?!.]/g, '').trim();

  const knowledge = {
    // Math basics
    '1+2': '1 + 2 = <strong>3</strong>',
    '2+2': '2 + 2 = <strong>4</strong>',
    '3+3': '3 + 3 = <strong>6</strong>',
    '4+4': '4 + 4 = <strong>8</strong>',
    '5+5': '5 + 5 = <strong>10</strong>',
    '10+10': '10 + 10 = <strong>20</strong>',
    'pi': 'π (pi) ≈ <strong>3.14159...</strong> It is the ratio of a circle\'s circumference to its diameter.',
    'what is pi': 'π (pi) ≈ <strong>3.14159...</strong> It is the ratio of a circle\'s circumference to its diameter.',
    'square root of 16': '√16 = <strong>4</strong>',
    'square root of 25': '√25 = <strong>5</strong>',
    'square root of 64': '√64 = <strong>8</strong>',

    // Time / Date
    'what time is it': `Right now it is approximately <strong>${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</strong> (UTC).`,
    'what day is it': `Today is <strong>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>.`,
    'what day is it today': `Today is <strong>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>.`,
    'what is the date': `Today is <strong>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>.`,
    'what is the date today': `Today is <strong>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>.`,

    // Weather (generic — no real-time data)
    'what is the weather': 'I don\'t have access to real-time weather data. Try checking <a href="https://wttr.in" target="_blank">wttr.in</a> or your phone\'s weather app! I can help you with your studies though — what subject are you working on?',
    'what is the weather like': 'I don\'t have access to real-time weather data. Try checking <a href="https://wttr.in" target="_blank">wttr.in</a> or your phone\'s weather app! I can help you with your studies though — what subject are you working on?',
    'how is the weather': 'I don\'t have access to real-time weather data. Try checking <a href="https://wttr.in" target="_blank">wttr.in</a> or your phone\'s weather app! I can help you with your studies though — what subject are you working on?',

    // Restaurants (generic)
    'good restaurants': 'I can\'t browse real-time restaurant reviews, but I recommend checking <strong>Google Maps</strong>, <strong>TripAdvisor</strong>, or <strong>Yelp</strong> for top-rated places near you. Want help with a subject instead?',
    'what restaurants are good': 'I can\'t browse real-time restaurant reviews, but I recommend checking <strong>Google Maps</strong>, <strong>TripAdvisor</strong>, or <strong>Yelp</strong> for top-rated places near you. Want help with a subject instead?',
    'where should i eat': 'I recommend checking <strong>Google Maps</strong> or <strong>GrabFood/Foodpanda</strong> for options near you. Want help with a subject instead?',

    // News (generic)
    'what is the news': 'I don\'t have access to live news. Check <a href="https://news.google.com" target="_blank">Google News</a> or <a href="https://bbc.com" target="_blank">BBC</a> for the latest updates. Want to study instead?',
    'what is happening in the world': 'I don\'t have access to live news. Check <a href="https://news.google.com" target="_blank">Google News</a> or <a href="https://bbc.com" target="_blank">BBC</a> for the latest updates. Want to study instead?',
    'latest news': 'I don\'t have access to live news. Check <a href="https://news.google.com" target="_blank">Google News</a> or <a href="https://bbc.com" target="_blank">BBC</a> for the latest updates. Want to study instead?',

    // General facts
    'capital of france': 'The capital of France is <strong>Paris</strong>.',
    'capital of japan': 'The capital of Japan is <strong>Tokyo</strong>.',
    'capital of usa': 'The capital of the United States is <strong>Washington, D.C.</strong>',
    'capital of uk': 'The capital of the United Kingdom is <strong>London</strong>.',
    'capital of china': 'The capital of China is <strong>Beijing</strong>.',
    'capital of india': 'The capital of India is <strong>New Delhi</strong>.',
    'who invented the telephone': 'The telephone was invented by <strong>Alexander Graham Bell</strong> in 1876.',
    'who invented the light bulb': 'The practical incandescent light bulb was developed by <strong>Thomas Edison</strong> in 1879.',
    'who wrote romeo and juliet': '<strong>William Shakespeare</strong> wrote <em>Romeo and Juliet</em> around 1594–1596.',
    'who wrote hamlet': '<strong>William Shakespeare</strong> wrote <em>Hamlet</em> around 1599–1601.',
    'who painted the mona lisa': 'The Mona Lisa was painted by <strong>Leonardo da Vinci</strong> between 1503 and 1519.',
    'how many continents are there': 'There are <strong>7 continents</strong>: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America.',
    'how many planets are in the solar system': 'There are <strong>8 planets</strong> in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.',
    'what is the largest planet': '<strong>Jupiter</strong> is the largest planet in our solar system.',
    'what is the smallest planet': '<strong>Mercury</strong> is the smallest planet in our solar system.',
    'what is the speed of light': 'The speed of light in a vacuum is approximately <strong>3.00 × 10⁸ m/s</strong> (about 300,000 km/s).',
    'what is the boiling point of water': 'The boiling point of water is <strong>100°C (212°F)</strong> at standard atmospheric pressure (1 atm).',
    'what is the freezing point of water': 'The freezing point of water is <strong>0°C (32°F)</strong> at standard atmospheric pressure.',
    'who is the president of the united states': 'As of my knowledge, you can check the latest at <a href="https://whitehouse.gov" target="_blank">whitehouse.gov</a>.',
    'who is the prime minister of uk': 'As of my knowledge, you can check the latest at <a href="https://gov.uk" target="_blank">gov.uk</a>.',
  };

  // Exact match first
  if (knowledge[lower]) {
    return `<h4>Answer</h4><p>${knowledge[lower]}</p>`;
  }

  // Check for partial matches
  for (const [key, value] of Object.entries(knowledge)) {
    if (lower.includes(key)) {
      return `<h4>Answer</h4><p>${value}</p>`;
    }
  }

  return null;
}

document.addEventListener('DOMContentLoaded', initTutor);
