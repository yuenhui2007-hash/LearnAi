// Subject Test Data
const subjectTestData = {};

subjectTestData['physics'] = {
  name: 'Physics',
  tests: [
    {
      id: 'physics-1',
      title: 'Test 1: Mechanics & Forces',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which of the following is a vector quantity?', options: ['Speed', 'Distance', 'Displacement', 'Energy'], answer: 2, marks: 1, explanation: 'Displacement has both magnitude and direction, making it a vector. Speed, distance, and energy are scalar quantities.' },
        { type: 'mcq', question: 'Newton\'s First Law of Motion is also known as the law of:', options: ['Acceleration', 'Inertia', 'Action-Reaction', 'Gravitation'], answer: 1, marks: 1, explanation: 'Newton\'s First Law states that an object remains at rest or in uniform motion unless acted upon by an external force — this is the law of inertia.' },
        { type: 'mcq', question: 'The SI unit of force is:', options: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 2, marks: 1, explanation: 'Force is measured in Newtons (N), where 1 N = 1 kg·m/s².' },
        { type: 'mcq', question: 'What is the acceleration due to gravity near Earth\'s surface?', options: ['8.9 m/s²', '9.8 m/s²', '10.8 m/s²', '9.2 m/s²'], answer: 1, marks: 1, explanation: 'The standard acceleration due to gravity is approximately 9.8 m/s² (often rounded to 10 m/s² for calculations).' },
        { type: 'mcq', question: 'Momentum is calculated as:', options: ['mass × velocity', 'mass ÷ velocity', 'force × time', 'mass × acceleration'], answer: 0, marks: 1, explanation: 'Momentum (p) = mass (m) × velocity (v). It is a vector quantity with units kg·m/s.' },
        { type: 'mcq', question: 'In a perfectly elastic collision:', options: ['Kinetic energy is conserved', 'Momentum is not conserved', 'Both objects stop', 'Only potential energy is conserved'], answer: 0, marks: 1, explanation: 'In a perfectly elastic collision, both momentum and kinetic energy are conserved.' },
        { type: 'mcq', question: 'Work done is defined as:', options: ['Force × distance moved in direction of force', 'Force ÷ distance', 'Mass × gravity', 'Power × time'], answer: 0, marks: 1, explanation: 'Work done (W) = Force (F) × distance (s) moved in the direction of the force. Unit: Joule (J).' },
        { type: 'mcq', question: 'The principle of moments states that for equilibrium:', options: ['Sum of clockwise moments = sum of anticlockwise moments', 'Sum of all forces = mass', 'Sum of forces in one direction only', 'Total moment must be maximum'], answer: 0, marks: 1, explanation: 'For a body in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments about the same point.' },
        { type: 'short', question: 'Define terminal velocity and explain under what conditions it occurs.', answer: 'Terminal velocity is the constant maximum velocity reached by an object falling through a fluid when the drag force equals the gravitational force, resulting in zero net force and zero acceleration.', marks: 2, explanation: 'Terminal velocity occurs when weight = air resistance. The object stops accelerating and falls at constant speed. It depends on the object\'s shape, mass, and the fluid density.' },
        { type: 'short', question: 'State Newton\'s Second Law of Motion and give its mathematical formula.', answer: 'Newton\'s Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass: F = ma.', marks: 2, explanation: 'F = ma, where F is net force (N), m is mass (kg), and a is acceleration (m/s²). This means a larger force produces greater acceleration, while a larger mass reduces acceleration.' },
        { type: 'short', question: 'Explain the difference between mass and weight.', answer: 'Mass is the amount of matter in an object (scalar, unit: kg) and is constant everywhere. Weight is the gravitational force acting on that mass (vector, unit: N) and varies with gravitational field strength.', marks: 2, explanation: 'Mass is an intrinsic property measured in kilograms. Weight = mass × gravitational field strength (W = mg), so weight changes depending on location (e.g., Earth vs Moon).' },
        { type: 'short', question: 'Describe what is meant by the centre of gravity of an object.', answer: 'The centre of gravity is the point through which the entire weight of an object appears to act, regardless of the object\'s orientation or position.', marks: 2, explanation: 'For regular uniform objects, the centre of gravity is at the geometric centre. For irregular objects, it can be found by plumb line experiments or balancing.' },
        { type: 'essay', question: 'Explain Newton\'s three laws of motion, giving a real-life example for each law and describing how they apply to vehicle safety features. [6]', marks: 6 },
        { type: 'essay', question: 'Describe and explain the energy changes that occur when a ball is thrown vertically upward, reaches maximum height, and falls back down. Include a discussion of energy conservation and the effect of air resistance. [6]', marks: 6 }
      ]
    },
    {
      id: 'physics-2',
      title: 'Test 2: Electricity & Magnetism',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Ohm\'s Law states that:', options: ['V = I/R', 'V = IR', 'R = VI', 'I = VR'], answer: 1, marks: 1, explanation: 'Ohm\'s Law: V = IR, where V is potential difference (V), I is current (A), and R is resistance (Ω).' },
        { type: 'mcq', question: 'The unit of electrical resistance is:', options: ['Ampere', 'Volt', 'Ohm', 'Watt'], answer: 2, marks: 1, explanation: 'Resistance is measured in Ohms (Ω), named after Georg Simon Ohm.' },
        { type: 'mcq', question: 'In a series circuit, the total resistance is:', options: ['Less than the smallest resistor', 'Equal to the largest resistor', 'The sum of all resistances', 'The product of all resistances'], answer: 2, marks: 1, explanation: 'In series: R_total = R₁ + R₂ + R₃ + ... The current is the same throughout, and voltages add up.' },
        { type: 'mcq', question: 'Which material is commonly used as a fuse wire?', options: ['Copper', 'Aluminium', 'Tin-lead alloy', 'Gold'], answer: 2, marks: 1, explanation: 'Fuse wires are made from low-melting-point alloys (like tin-lead) so they melt and break the circuit when current exceeds safe levels.' },
        { type: 'mcq', question: 'The direction of the magnetic field around a current-carrying wire is determined by:', options: ['Fleming\'s left-hand rule', 'The right-hand grip rule', 'Lenz\'s Law', 'Ohm\'s Law'], answer: 1, marks: 1, explanation: 'The right-hand grip rule: thumb points in current direction, fingers curl in magnetic field direction.' },
        { type: 'mcq', question: 'Electromagnetic induction occurs when:', options: ['A conductor moves through a magnetic field', 'A battery is connected', 'A switch is opened', 'Static charge builds up'], answer: 0, marks: 1, explanation: 'Electromagnetic induction is the production of an e.m.f. across a conductor when it experiences a changing magnetic field (Faraday\'s Law).' },
        { type: 'mcq', question: 'A transformer works on the principle of:', options: ['Ohm\'s Law', 'Electromagnetic induction', 'Conservation of mass', 'Static electricity'], answer: 1, marks: 1, explanation: 'Transformers use electromagnetic induction: an alternating current in the primary coil creates a changing magnetic field, inducing a voltage in the secondary coil.' },
        { type: 'mcq', question: 'Power in an electrical circuit is calculated as:', options: ['P = IV', 'P = I/V', 'P = V/I', 'P = IR'], answer: 0, marks: 1, explanation: 'Electrical power P = IV (current × voltage). Alternative forms: P = I²R = V²/R. Unit: Watt (W).' },
        { type: 'short', question: 'Explain why the current in a circuit increases when more cells are added in series.', answer: 'Adding cells in series increases the total e.m.f. (voltage) of the circuit. Since I = V/R and resistance remains constant, the current increases proportionally.', marks: 2, explanation: 'Cells in series: total e.m.f. = sum of individual e.m.f.s. Higher voltage across the same resistance means more current flows (Ohm\'s Law).' },
        { type: 'short', question: 'Describe the function of a circuit breaker and how it differs from a fuse.', answer: 'A circuit breaker automatically interrupts excessive current and can be reset after tripping, whereas a fuse contains a wire that melts and must be replaced.', marks: 2, explanation: 'Both protect circuits from overcurrent. Fuses are single-use and cheaper; circuit breakers are reusable, more convenient, and respond faster.' },
        { type: 'short', question: 'State Fleming\'s left-hand rule and what it is used for.', answer: 'Fleming\'s left-hand rule: First finger = Field, seCond finger = Current, thuMb = Motion. It determines the direction of force on a current-carrying conductor in a magnetic field.', marks: 2, explanation: 'Used in electric motors. The thumb points in the direction of motion (force), first finger in field direction (N→S), second finger in current direction (+ve to -ve).' },
        { type: 'short', question: 'Explain why power is transmitted at high voltages in the national grid.', answer: 'High voltage transmission reduces current for the same power (P = IV), which reduces heat loss in cables (P_loss = I²R), improving efficiency.', marks: 2, explanation: 'Since power loss depends on I², reducing current dramatically reduces energy loss. Transformers step up voltage for transmission and step down for safe domestic use.' },
        { type: 'essay', question: 'Describe the structure and operation of an alternating current (a.c.) generator. Explain how the design features determine the output voltage and frequency, and compare it with a d.c. motor. [6]', marks: 6 },
        { type: 'essay', question: 'Explain the principle of the transformer, including why it only works with a.c., the role of the soft iron core, and derive the relationship between primary and secondary coils (Vp/Vs = Np/Ns). Discuss energy losses and how they are minimised. [6]', marks: 6 }
      ]
    },
    {
      id: 'physics-3',
      title: 'Test 3: Waves & Optics',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The speed of a wave is given by:', options: ['v = f/λ', 'v = fλ', 'v = λ/f', 'v = f + λ'], answer: 1, marks: 1, explanation: 'Wave equation: v = fλ, where v is wave speed (m/s), f is frequency (Hz), and λ is wavelength (m).' },
        { type: 'mcq', question: 'Which type of wave cannot travel through a vacuum?', options: ['X-rays', 'Radio waves', 'Light waves', 'Sound waves'], answer: 3, marks: 1, explanation: 'Sound waves are mechanical waves requiring a medium. Electromagnetic waves (light, X-rays, radio) can travel through vacuum.' },
        { type: 'mcq', question: 'The angle of incidence equals the angle of reflection. This is the law of:', options: ['Refraction', 'Reflection', 'Diffraction', 'Dispersion'], answer: 1, marks: 1, explanation: 'The law of reflection states that the angle of incidence (i) equals the angle of reflection (r), measured from the normal.' },
        { type: 'mcq', question: 'Refraction occurs because waves change:', options: ['Frequency', 'Speed', 'Amplitude', 'Wavelength only'], answer: 1, marks: 1, explanation: 'Refraction occurs when waves cross a boundary between media of different densities, causing a change in speed and direction (frequency stays constant).' },
        { type: 'mcq', question: 'Total internal reflection occurs when:', options: ['Light travels from less to more dense medium', 'Angle of incidence exceeds critical angle', 'Light is absorbed', 'Wavelength decreases'], answer: 1, marks: 1, explanation: 'Total internal reflection occurs when light travels from a denser to less dense medium and the angle of incidence exceeds the critical angle.' },
        { type: 'mcq', question: 'In a convex lens, parallel rays converge at the:', options: ['Optical centre', 'Focal point', 'Principal axis', 'Centre of curvature'], answer: 1, marks: 1, explanation: 'A convex (converging) lens brings parallel rays to a focus at the focal point on the principal axis.' },
        { type: 'mcq', question: 'The electromagnetic spectrum, in order of increasing wavelength, is:', options: ['Radio, visible, UV, X-ray, gamma', 'Gamma, X-ray, UV, visible, radio', 'Visible, UV, X-ray, gamma, radio', 'Gamma, radio, UV, visible, X-ray'], answer: 1, marks: 1, explanation: 'Order: gamma rays (shortest λ) → X-rays → UV → visible → infrared → microwaves → radio waves (longest λ).' },
        { type: 'mcq', question: 'Diffraction is most noticeable when the gap size is:', options: ['Much larger than wavelength', 'Approximately equal to wavelength', 'Much smaller than wavelength', 'Independent of wavelength'], answer: 1, marks: 1, explanation: 'Diffraction effects are greatest when the obstacle or gap size is comparable to the wavelength of the wave.' },
        { type: 'short', question: 'Distinguish between transverse and longitudinal waves, giving one example of each.', answer: 'Transverse waves have oscillations perpendicular to wave direction (e.g., light, water waves). Longitudinal waves have oscillations parallel to wave direction (e.g., sound).', marks: 2, explanation: 'In transverse waves: crests and troughs. In longitudinal waves: compressions and rarefactions. All electromagnetic waves are transverse; sound is longitudinal.' },
        { type: 'short', question: 'Explain what is meant by the critical angle in relation to total internal reflection.', answer: 'The critical angle is the minimum angle of incidence in a denser medium at which light is refracted along the boundary; above this angle, total internal reflection occurs.', marks: 2, explanation: 'Critical angle θc = sin⁻¹(n₂/n₁) where n₁ > n₂. It depends on the refractive indices of the two media.' },
        { type: 'short', question: 'State two uses of fibre optic cables and explain the role of total internal reflection.', answer: 'Uses: telecommunications (high-speed data) and endoscopy (medical imaging). Light is trapped inside the core by total internal reflection at the core-cladding boundary.', marks: 2, explanation: 'Fibre optics use thin glass/plastic fibres. The core has higher refractive index than cladding, so light undergoes repeated total internal reflection with minimal signal loss.' },
        { type: 'short', question: 'Describe how the eye forms an image on the retina and how the lens accommodates for near and distant objects.', answer: 'Light is refracted by the cornea and lens to form a real, inverted image on the retina. The ciliary muscles change lens shape: thicker for near objects, thinner for distant objects.', marks: 2, explanation: 'Accommodation: ciliary muscles contract → suspensory ligaments slacken → lens becomes more convex (near vision). Relaxation produces a flatter lens for distant vision.' },
        { type: 'essay', question: 'Explain the wave-particle duality of light, describing the photoelectric effect and Young\'s double-slit experiment as evidence. Discuss how these observations led to the quantum theory of light. [6]', marks: 6 },
        { type: 'essay', question: 'Describe the structure and function of the human eye, explaining how lenses correct long-sightedness (hyperopia) and short-sightedness (myopia). Include ray diagrams in your explanation. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['chemistry'] = {
  name: 'Chemistry',
  tests: [
    {
      id: 'chemistry-1',
      title: 'Test 1: Atomic Structure & Bonding',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The centre of an atom containing protons and neutrons is called the:', options: ['Electron shell', 'Nucleus', 'Orbital', 'Valence band'], answer: 1, marks: 1, explanation: 'The nucleus is the dense central core containing protons (positive) and neutrons (neutral), surrounded by electrons in shells.' },
        { type: 'mcq', question: 'An element has atomic number 17 and mass number 35. How many neutrons does it have?', options: ['17', '18', '35', '52'], answer: 1, marks: 1, explanation: 'Neutrons = mass number - atomic number = 35 - 17 = 18. Protons = 17 (atomic number), electrons = 17 (in neutral atom).' },
        { type: 'mcq', question: 'Isotopes of an element have different numbers of:', options: ['Protons', 'Electrons', 'Neutrons', 'Shells'], answer: 2, marks: 1, explanation: 'Isotopes are atoms of the same element (same proton number) with different numbers of neutrons, hence different mass numbers.' },
        { type: 'mcq', question: 'A covalent bond is formed by:', options: ['Transfer of electrons', 'Sharing of electrons', 'Attraction between ions', 'Delocalised electrons'], answer: 1, marks: 1, explanation: 'Covalent bonding involves the sharing of electron pairs between atoms, typically between non-metals, to achieve stable noble gas configurations.' },
        { type: 'mcq', question: 'Which element has the electron configuration 2,8,8,1?', options: ['Sodium', 'Potassium', 'Calcium', 'Argon'], answer: 1, marks: 1, explanation: 'Potassium (K, atomic number 19) has electron configuration 2,8,8,1. It is in Group 1 with one valence electron.' },
        { type: 'mcq', question: 'Ionic compounds typically have:', options: ['Low melting points', 'High melting points', 'Conduct electricity when solid', 'Are soft and waxy'], answer: 1, marks: 1, explanation: 'Ionic compounds have high melting points due to strong electrostatic forces between oppositely charged ions in a giant lattice.' },
        { type: 'mcq', question: 'Metallic bonding consists of:', options: ['Shared electron pairs', 'Positive ions in a sea of delocalised electrons', 'Electrostatic attraction between oppositely charged ions', 'Weak intermolecular forces'], answer: 1, marks: 1, explanation: 'Metallic bonding: positive metal ions are arranged in a lattice surrounded by a \'sea\' of delocalised valence electrons.' },
        { type: 'mcq', question: 'A double covalent bond is found in:', options: ['Methane (CH₄)', 'Water (H₂O)', 'Oxygen (O₂)', 'Hydrogen (H₂)'], answer: 2, marks: 1, explanation: 'O₂ has a double covalent bond (O=O) with two shared electron pairs. N₂ has a triple bond.' },
        { type: 'short', question: 'Explain why noble gases are unreactive.', answer: 'Noble gases have full outer electron shells (octet/duplet), which is a stable configuration. They have no tendency to gain, lose, or share electrons.', marks: 2, explanation: 'Helium has 2 electrons (duplet); others have 8 (octet). This stable configuration means noble gases do not need to form bonds and are chemically inert.' },
        { type: 'short', question: 'Describe the difference between ionic and covalent bonding.', answer: 'Ionic bonding involves transfer of electrons from metal to non-metal, forming oppositely charged ions. Covalent bonding involves sharing electrons, usually between non-metals.', marks: 2, explanation: 'Ionic: electrostatic attraction between cations and anions (e.g., NaCl). Covalent: shared electron pairs (e.g., H₂O, CO₂). Ionic compounds form giant lattices; covalent can be simple molecules or giant structures.' },
        { type: 'short', question: 'Draw the dot-and-cross diagram for hydrogen chloride (HCl) and identify the type of bonding.', answer: 'HCl has covalent bonding: hydrogen shares one electron with chlorine. Chlorine has 3 lone pairs and 1 shared pair. H–Cl single covalent bond.', marks: 2, explanation: 'Hydrogen (1 electron) shares with chlorine (7 electrons). The shared pair forms a single covalent bond. Chlorine retains 3 lone pairs.' },
        { type: 'short', question: 'State and explain the trends in atomic radius across a period and down a group in the Periodic Table.', answer: 'Across a period: radius decreases due to increasing nuclear charge pulling electrons closer. Down a group: radius increases due to additional electron shells.', marks: 2, explanation: 'Across period: protons increase but shielding stays similar → stronger attraction. Down group: more shells → outer electrons further from nucleus despite increased protons.' },
        { type: 'essay', question: 'Describe the development of atomic models from Dalton to Rutherford to Bohr, explaining the experimental evidence that led to each revision. Include the significance of the Geiger-Marsden experiment. [6]', marks: 6 },
        { type: 'essay', question: 'Explain the properties of giant covalent structures (diamond and graphite) in terms of their bonding and structure. Compare their hardness, electrical conductivity, and melting points, and relate these to their uses. [6]', marks: 6 }
      ]
    },
    {
      id: 'chemistry-2',
      title: 'Test 2: Chemical Reactions & Stoichiometry',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The relative formula mass of H₂SO₄ is:', options: ['82', '96', '98', '100'], answer: 2, marks: 1, explanation: 'H₂SO₄ = (2×1) + 32 + (4×16) = 2 + 32 + 64 = 98 g/mol.' },
        { type: 'mcq', question: 'In the reaction: 2H₂ + O₂ → 2H₂O, what is the mole ratio of hydrogen to oxygen?', options: ['1:1', '2:1', '1:2', '2:2'], answer: 1, marks: 1, explanation: 'The balanced equation shows 2 moles of H₂ react with 1 mole of O₂, giving a 2:1 ratio.' },
        { type: 'mcq', question: 'Which of the following is NOT a redox reaction?', options: ['Rusting of iron', 'Combustion of methane', 'Neutralisation of acid and alkali', 'Displacement of copper by zinc'], answer: 2, marks: 1, explanation: 'Neutralisation (acid + base → salt + water) is not redox — no change in oxidation states. Rusting, combustion, and displacement involve electron transfer.' },
        { type: 'mcq', question: 'A catalyst works by:', options: ['Increasing temperature', 'Lowering activation energy', 'Providing more reactants', 'Changing equilibrium position'], answer: 1, marks: 1, explanation: 'Catalysts increase reaction rate by providing an alternative pathway with lower activation energy, without being consumed.' },
        { type: 'mcq', question: 'At equilibrium in a reversible reaction:', options: ['Reactants have fully converted', 'Forward and reverse rates are equal', 'Concentrations are zero', 'Reaction has stopped'], answer: 1, marks: 1, explanation: 'Dynamic equilibrium: forward and reverse reaction rates are equal, concentrations remain constant, but reactions continue at molecular level.' },
        { type: 'mcq', question: 'The pH of a neutral solution at 25°C is:', options: ['0', '7', '14', '1'], answer: 1, marks: 1, explanation: 'pH 7 is neutral at 25°C. pH < 7 acidic, pH > 7 alkaline. pH = -log[H⁺].' },
        { type: 'mcq', question: 'An exothermic reaction is one in which:', options: ['Heat is absorbed', 'Heat is released', 'No energy change occurs', 'Temperature decreases'], answer: 1, marks: 1, explanation: 'Exothermic: energy/heat is released to surroundings (ΔH negative). Examples: combustion, neutralisation.' },
        { type: 'mcq', question: 'The empirical formula of a compound is:', options: ['The actual number of atoms', 'The simplest whole number ratio', 'The molecular mass', 'The structural arrangement'], answer: 1, marks: 1, explanation: 'Empirical formula shows the simplest whole number ratio of atoms. Molecular formula shows actual numbers (e.g., CH₂O empirical, C₆H₁₂O₆ molecular for glucose).' },
        { type: 'short', question: 'Calculate the mass of calcium carbonate (CaCO₃) needed to produce 11 g of CO₂. (Mᵣ: CaCO₃ = 100, CO₂ = 44)', answer: 'Moles of CO₂ = 11/44 = 0.25 mol. From equation CaCO₃ → CaO + CO₂, mole ratio is 1:1. Mass CaCO₃ = 0.25 × 100 = 25 g.', marks: 2, explanation: 'Decomposition: CaCO₃ → CaO + CO₂. 1 mole CaCO₃ produces 1 mole CO₂. 0.25 mol CO₂ requires 0.25 mol CaCO₃ = 25 g.' },
        { type: 'short', question: 'Explain Le Chatelier\'s Principle and apply it to the Haber process for ammonia synthesis.', answer: 'Le Chatelier\'s Principle states that if a system at equilibrium is disturbed, it shifts to counteract the change. In the Haber process, high pressure favours ammonia (fewer gas molecules), and moderate temperature balances rate and yield.', marks: 2, explanation: 'N₂ + 3H₂ ⇌ 2NH₃ (exothermic). High pressure → shifts right (4 → 2 moles). Lower temperature favours products but slows rate; compromise ~450°C with iron catalyst.' },
        { type: 'short', question: 'Distinguish between oxidation and reduction in terms of electrons and oxidation states.', answer: 'Oxidation is loss of electrons/increase in oxidation state. Reduction is gain of electrons/decrease in oxidation state. (OIL RIG)', marks: 2, explanation: 'OIL RIG: Oxidation Is Loss, Reduction Is Gain. Oxidation state increases for oxidation, decreases for reduction. These always occur together in redox reactions.' },
        { type: 'short', question: 'Describe how to calculate percentage yield and explain why actual yield is usually less than theoretical yield.', answer: 'Percentage yield = (actual yield / theoretical yield) × 100%. Actual yield is lower due to incomplete reactions, side reactions, product loss during transfer, or reversible reactions.', marks: 2, explanation: 'Theoretical yield assumes 100% conversion. In practice, losses occur at every stage. Percentage yield measures reaction efficiency.' },
        { type: 'essay', question: 'Describe the Contact Process for manufacturing sulfuric acid, including the key reactions, conditions (temperature, pressure, catalyst), and how they are optimised using Le Chatelier\'s Principle. Include equations and explain the importance of sulfuric acid in industry. [6]', marks: 6 },
        { type: 'essay', question: 'Explain the electrolysis of molten sodium chloride and aqueous copper(II) sulfate. Include half-equations at each electrode, identification of products, and explanations of how concentration affects the products in aqueous electrolysis. [6]', marks: 6 }
      ]
    },
    {
      id: 'chemistry-3',
      title: 'Test 3: Organic Chemistry',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The general formula for alkanes is:', options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'], answer: 1, marks: 1, explanation: 'Alkanes are saturated hydrocarbons with general formula CₙH₂ₙ₊₂ (e.g., methane CH₄, ethane C₂H₆).' },
        { type: 'mcq', question: 'Which functional group characterises alcohols?', options: ['–COOH', '–OH', '–CHO', '–NH₂'], answer: 1, marks: 1, explanation: 'Alcohols contain the hydroxyl (-OH) functional group attached to a carbon chain (e.g., ethanol C₂H₅OH).' },
        { type: 'mcq', question: 'The product of adding bromine to ethene is:', options: ['Ethane', 'Bromoethane', '1,2-dibromoethane', 'Ethanol'], answer: 2, marks: 1, explanation: 'Ethene (unsaturated) undergoes addition: C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-dibromoethane). Bromine water decolourises.' },
        { type: 'mcq', question: 'Which process converts alkenes to alkanes?', options: ['Combustion', 'Hydrogenation', 'Oxidation', 'Polymerisation'], answer: 1, marks: 1, explanation: 'Hydrogenation adds hydrogen across the double bond in presence of a nickel catalyst: alkene + H₂ → alkane.' },
        { type: 'mcq', question: 'Carboxylic acids react with carbonates to produce:', options: ['Hydrogen gas', 'Salt + water + carbon dioxide', 'Ester + water', 'Alkane + water'], answer: 1, marks: 1, explanation: 'Acid + carbonate → salt + water + CO₂. Example: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.' },
        { type: 'mcq', question: 'The polymer formed from ethene is:', options: ['PVC', 'Polyethene (polyethylene)', 'Polystyrene', 'Teflon'], answer: 1, marks: 1, explanation: 'Ethene undergoes addition polymerisation to form polyethene (polyethylene), a widely used plastic.' },
        { type: 'mcq', question: 'Which test distinguishes aldehydes from ketones?', options: ['Bromine water test', 'Fehling\'s solution/Benedict\'s test', 'Litmus test', 'Flame test'], answer: 1, marks: 1, explanation: 'Aldehydes reduce Fehling\'s/Benedict\'s solution (blue → red precipitate). Ketones do not react (unless alpha-hydroxy).' },
        { type: 'mcq', question: 'Esters are formed by the reaction of:', options: ['Acid + alcohol', 'Acid + base', 'Alcohol + alkene', 'Acid + metal'], answer: 0, marks: 1, explanation: 'Esterification: carboxylic acid + alcohol ⇌ ester + water, catalysed by concentrated sulfuric acid.' },
        { type: 'short', question: 'Explain what is meant by a homologous series and give two characteristics.', answer: 'A homologous series is a family of compounds with the same functional group, similar chemical properties, and successive members differing by CH₂. They show gradual physical property trends.', marks: 2, explanation: 'Examples: alkanes, alkenes, alcohols. Characteristics: same general formula, same functional group, similar chemical properties, physical properties change gradually.' },
        { type: 'short', question: 'Write the balanced equation for complete combustion of propane (C₃H₈) and name the products.', answer: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Products: carbon dioxide and water.', marks: 2, explanation: 'Complete combustion of hydrocarbons produces CO₂ and H₂O. Incomplete combustion produces CO (toxic) and/or carbon (soot).' },
        { type: 'short', question: 'Describe the mechanism of fractional distillation of crude oil and explain how it separates components.', answer: 'Crude oil is heated and vaporised. The vapour enters a fractionating column (hot at bottom, cool at top). Fractions condense at different heights based on boiling points.', marks: 2, explanation: 'Larger molecules with higher boiling points condense lower down. Smaller molecules rise higher before condensing. Produces fractions: bitumen, fuel oil, diesel, kerosene, petrol, LPG.' },
        { type: 'short', question: 'Explain why unsaturated hydrocarbons decolourise bromine water while saturated hydrocarbons do not.', answer: 'Unsaturated hydrocarbons (alkenes) have C=C double bonds that undergo addition reactions with bromine. Saturated hydrocarbons (alkanes) only have C-C single bonds and cannot add bromine.', marks: 2, explanation: 'Bromine test: orange bromine water decolourises with alkenes (addition across double bond) but remains orange with alkanes (no reaction without UV light for substitution).' },
        { type: 'essay', question: 'Describe the reactions of alcohols (combustion, oxidation to carboxylic acids, dehydration to alkenes, and esterification). Include reagents, conditions, and equations for each reaction using ethanol as an example. [6]', marks: 6 },
        { type: 'essay', question: 'Explain the environmental impacts of burning fossil fuels and plastic disposal. Discuss the importance of recycling, biodegradable plastics, and alternative energy sources in reducing these impacts. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['biology'] = {
  name: 'Biology',
  tests: [
    {
      id: 'biology-1',
      title: 'Test 1: Cell Biology & Transport',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which organelle is responsible for protein synthesis?', options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Golgi apparatus'], answer: 2, marks: 1, explanation: 'Ribosomes are the sites of protein synthesis, translating mRNA into polypeptide chains. Found free in cytoplasm or bound to rough ER.' },
        { type: 'mcq', question: 'The cell membrane is described as fluid mosaic because:', options: ['It is rigid and fixed', 'Phospholipids and proteins can move within the bilayer', 'It contains only phospholipids', 'It is made of cellulose'], answer: 1, marks: 1, explanation: 'The fluid mosaic model describes a phospholipid bilayer with embedded proteins that can move laterally, giving fluidity and mosaic appearance.' },
        { type: 'mcq', question: 'Diffusion is defined as the net movement of particles from:', options: ['Low to high concentration', 'High to low concentration', 'Against a concentration gradient', 'Through a partially permeable membrane'], answer: 1, marks: 1, explanation: 'Diffusion is the passive net movement of particles from a region of higher concentration to lower concentration down a concentration gradient.' },
        { type: 'mcq', question: 'Osmosis specifically refers to the diffusion of:', options: ['Any solute', 'Water molecules', 'Gases', 'Ions'], answer: 1, marks: 1, explanation: 'Osmosis is the net movement of water molecules from a dilute to concentrated solution through a partially permeable membrane.' },
        { type: 'mcq', question: 'Active transport requires:', options: ['Only a concentration gradient', 'ATP and carrier proteins', 'No energy input', 'Large pore channels only'], answer: 1, marks: 1, explanation: 'Active transport moves substances against their concentration gradient, requiring metabolic energy (ATP) and specific carrier proteins.' },
        { type: 'mcq', question: 'Which structure is found in plant cells but NOT animal cells?', options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosomes'], answer: 2, marks: 1, explanation: 'Chloroplasts contain chlorophyll for photosynthesis and are found only in plant cells (and some algae). Other options are found in both.' },
        { type: 'mcq', question: 'The powerhouse of the cell is the:', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Lysosome'], answer: 2, marks: 1, explanation: 'Mitochondria carry out aerobic respiration, producing ATP (energy currency). They have a double membrane and their own DNA.' },
        { type: 'mcq', question: 'Which microscope has the highest resolution?', options: ['Light microscope', 'Transmission electron microscope (TEM)', 'Stereo microscope', 'Dissecting microscope'], answer: 1, marks: 1, explanation: 'TEM uses electron beams instead of light, achieving much higher magnification and resolution (sub-nanometre scale) than light microscopes.' },
        { type: 'short', question: 'Describe the structure of a phospholipid and explain how phospholipids are arranged in the cell membrane.', answer: 'A phospholipid has a hydrophilic phosphate head and two hydrophobic fatty acid tails. In membranes, they form a bilayer with heads facing aqueous environments and tails sandwiched inside.', marks: 2, explanation: 'This arrangement creates a barrier to most water-soluble substances. The hydrophobic core allows lipid-soluble molecules to pass while restricting ions and polar molecules.' },
        { type: 'short', question: 'Explain what happens to a red blood cell placed in distilled water and why.', answer: 'The cell swells and bursts (haemolysis) because distilled water is hypotonic. Water enters by osmosis down the water potential gradient.', marks: 2, explanation: 'Red blood cells have lower water potential than distilled water. Water enters by osmosis, causing the cell to swell. Animal cells lack cell walls so they burst.' },
        { type: 'short', question: 'State two differences between prokaryotic and eukaryotic cells.', answer: 'Prokaryotes lack a membrane-bound nucleus (have nucleoid), no membrane-bound organelles, and have 70S ribosomes. Eukaryotes have a true nucleus, organelles, and 80S ribosomes.', marks: 2, explanation: 'Prokaryotes (bacteria, archaea) are simpler, smaller, and lack mitochondria, ER, Golgi. Eukaryotes (plants, animals, fungi, protists) are more complex with compartmentalised organelles.' },
        { type: 'short', question: 'Describe the role of the nucleus in a eukaryotic cell.', answer: 'The nucleus contains chromosomes (DNA), controls cell activities by regulating gene expression, and is the site of DNA replication and transcription.', marks: 2, explanation: 'The nuclear envelope with pores controls entry/exit. Nucleolus produces ribosomal RNA. DNA carries genetic instructions for protein synthesis and cell division.' },
        { type: 'essay', question: 'Explain the process of mitosis, including the stages (prophase, metaphase, anaphase, telophase) and their significance in growth, repair, and asexual reproduction. Describe how cytokinesis differs in animal and plant cells. [6]', marks: 6 },
        { type: 'essay', question: 'Compare and contrast the processes of diffusion, osmosis, and active transport. Include examples of where each occurs in living organisms, the requirements for each process, and explain how cell structure facilitates these transport mechanisms. [6]', marks: 6 }
      ]
    },
    {
      id: 'biology-2',
      title: 'Test 2: Genetics & Inheritance',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'DNA replication is described as semi-conservative because:', options: ['Each new DNA has one old and one new strand', 'Both strands are newly synthesised', 'Only half the DNA is copied', 'DNA is destroyed after copying'], answer: 0, marks: 1, explanation: 'In semi-conservative replication, each daughter DNA molecule consists of one parental strand and one newly synthesised complementary strand.' },
        { type: 'mcq', question: 'A heterozygous genotype is:', options: ['AA', 'aa', 'Aa', 'AAA'], answer: 2, marks: 1, explanation: 'Heterozygous means having two different alleles (e.g., Aa). Homozygous dominant = AA, homozygous recessive = aa.' },
        { type: 'mcq', question: 'Which nitrogenous base is found in RNA but NOT in DNA?', options: ['Adenine', 'Thymine', 'Uracil', 'Cytosine'], answer: 2, marks: 1, explanation: 'RNA contains uracil (U) instead of thymine (T). Both contain adenine, guanine, and cytosine.' },
        { type: 'mcq', question: 'The process of protein synthesis where mRNA is decoded to make a protein is called:', options: ['Transcription', 'Replication', 'Translation', 'Mutation'], answer: 2, marks: 1, explanation: 'Translation occurs at ribosomes where tRNA brings amino acids according to mRNA codons, forming a polypeptide chain.' },
        { type: 'mcq', question: 'If a recessive trait appears in offspring, what must be true about the parents?', options: ['Both are homozygous dominant', 'At least one is homozygous recessive', 'Both carry at least one recessive allele', 'Only one parent carries the allele'], answer: 2, marks: 1, explanation: 'Recessive traits (aa) require one recessive allele from each parent. Both parents must be carriers (Aa) or homozygous recessive (aa).' },
        { type: 'mcq', question: 'Crossing over during meiosis occurs between:', options: ['Sister chromatids', 'Non-sister chromatids of homologous chromosomes', 'Any two chromosomes', 'DNA and RNA'], answer: 1, marks: 1, explanation: 'Crossing over occurs between non-sister chromatids of homologous chromosomes during prophase I, creating genetic recombination.' },
        { type: 'mcq', question: 'A mutation is:', options: ['A normal cell division', 'A change in the DNA sequence', 'A type of enzyme', 'A reproductive process'], answer: 1, marks: 1, explanation: 'Mutations are changes in the DNA base sequence. They can be substitutions, insertions, deletions, or chromosomal changes. Some are harmful, neutral, or beneficial.' },
        { type: 'mcq', question: 'In a monohybrid cross between two heterozygotes (Aa × Aa), the phenotypic ratio in offspring is:', options: ['1:1', '3:1', '1:2:1', '9:3:3:1'], answer: 1, marks: 1, explanation: 'Aa × Aa produces genotypic ratio 1 AA : 2 Aa : 1 aa. If A is dominant, phenotypic ratio is 3 dominant : 1 recessive.' },
        { type: 'short', question: 'Describe the structure of DNA, including the bonding between bases.', answer: 'DNA is a double helix of two antiparallel sugar-phosphate strands. Bases pair specifically: A-T (two hydrogen bonds) and G-C (three hydrogen bonds).', marks: 2, explanation: 'Deoxyribose sugar and phosphate form the backbone. Bases project inward. Complementary base pairing ensures faithful replication and transcription.' },
        { type: 'short', question: 'Explain the difference between genotype and phenotype.', answer: 'Genotype is the genetic makeup (alleles present, e.g., Aa). Phenotype is the observable physical or biochemical characteristic resulting from genotype and environment.', marks: 2, explanation: 'Example: genotype Bb (heterozygous) may show brown eyes phenotype if B is dominant. Environment can influence phenotype (e.g., nutrition affecting height).' },
        { type: 'short', question: 'State two sources of genetic variation in sexually reproducing organisms.', answer: 'Crossing over during prophase I of meiosis and independent assortment of homologous chromosomes. Fertilisation also combines genetic material from two parents.', marks: 2, explanation: 'Crossing over exchanges segments between homologous chromosomes. Independent assortment randomises chromosome combinations. Random fertilisation adds further variation.' },
        { type: 'short', question: 'Explain why sex-linked traits like colour blindness are more common in males than females.', answer: 'Males have XY sex chromosomes with only one X. A recessive allele on their single X will be expressed. Females need two copies (XX) to show the trait.', marks: 2, explanation: 'Colour blindness is X-linked recessive. Males: XᵇY = affected. Females: XᵇXᵇ = affected, XᴮXᵇ = carrier. Therefore males are more frequently affected.' },
        { type: 'essay', question: 'Describe the processes of transcription and translation in protein synthesis. Include the role of RNA polymerase, mRNA, tRNA, ribosomes, and codons. Explain how the genetic code is universal, non-overlapping, and degenerate. [6]', marks: 6 },
        { type: 'essay', question: 'Explain Mendel\'s laws of segregation and independent assortment, using genetic crosses (Punnett squares) to illustrate monohybrid and dihybrid inheritance. Discuss why Mendel chose pea plants and how his work established the foundation of genetics. [6]', marks: 6 }
      ]
    },
    {
      id: 'biology-3',
      title: 'Test 3: Human Physiology',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which blood vessel carries oxygenated blood from the lungs to the heart?', options: ['Aorta', 'Vena cava', 'Pulmonary vein', 'Pulmonary artery'], answer: 2, marks: 1, explanation: 'Pulmonary veins carry oxygenated blood from lungs to left atrium. Arteries usually carry oxygenated blood, but pulmonary artery carries deoxygenated blood to lungs.' },
        { type: 'mcq', question: 'The primary site of gas exchange in the lungs is the:', options: ['Bronchus', 'Trachea', 'Alveolus', 'Bronchiole'], answer: 2, marks: 1, explanation: 'Alveoli are tiny air sacs with thin walls (one cell thick), large surface area, and rich blood supply — ideal for rapid gas exchange.' },
        { type: 'mcq', question: 'Which enzyme breaks down starch in the human digestive system?', options: ['Pepsin', 'Amylase', 'Lipase', 'Trypsin'], answer: 1, marks: 1, explanation: 'Salivary amylase (mouth) and pancreatic amylase (small intestine) hydrolyse starch to maltose. Pepsin digests protein; lipase digests fats.' },
        { type: 'mcq', question: 'The functional unit of the kidney is the:', options: ['Neuron', 'Nephron', 'Alveolus', 'Villus'], answer: 1, marks: 1, explanation: 'The nephron filters blood, reabsorbs useful substances, and produces urine. Each kidney contains about one million nephrons.' },
        { type: 'mcq', question: 'Insulin is produced by which cells in the pancreas?', options: ['Alpha cells', 'Beta cells', 'Delta cells', 'Acinar cells'], answer: 1, marks: 1, explanation: 'Beta cells in the Islets of Langerhans produce insulin, which lowers blood glucose by promoting cellular uptake and glycogen formation.' },
        { type: 'mcq', question: 'Which component of blood is responsible for clotting?', options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], answer: 2, marks: 1, explanation: 'Platelets (thrombocytes) aggregate at injury sites and release clotting factors. Fibrinogen in plasma forms fibrin mesh to seal wounds.' },
        { type: 'mcq', question: 'During aerobic respiration, where is most ATP produced?', options: ['Cytoplasm', 'Mitochondrial matrix', 'Inner mitochondrial membrane', 'Nucleus'], answer: 2, marks: 1, explanation: 'The electron transport chain on the inner mitochondrial membrane (cristae) produces ~34 ATP via oxidative phosphorylation. Glycolysis produces 2 ATP in cytoplasm.' },
        { type: 'mcq', question: 'Vaccination works by:', options: ['Killing all pathogens in the body', 'Stimulating active immunity and memory cell production', 'Injecting antibodies directly', 'Suppressing the immune system'], answer: 1, marks: 1, explanation: 'Vaccines contain weakened/dead pathogens or antigens that stimulate primary immune response, producing memory cells for faster future response.' },
        { type: 'short', question: 'Explain how the structure of red blood cells is adapted for transporting oxygen.', answer: 'Red blood cells have no nucleus (more room for haemoglobin), a biconcave shape (increases surface area), and contain haemoglobin which binds oxygen reversibly.', marks: 2, explanation: 'Biconcave shape increases surface area-to-volume ratio for diffusion. Haemoglobin has high affinity for O₂ in lungs and releases it in tissues. No mitochondria — rely on anaerobic respiration.' },
        { type: 'short', question: 'Describe how the heart functions as a double pump in the circulatory system.', answer: 'The right side pumps deoxygenated blood to the lungs (pulmonary circulation). The left side pumps oxygenated blood to the body (systemic circulation).', marks: 2, explanation: 'Double circulation maintains high pressure in systemic circuit. Right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body.' },
        { type: 'short', question: 'Explain the role of villi in the small intestine.', answer: 'Villi increase surface area for absorption. They contain blood capillaries (absorb amino acids, glucose) and lacteals (absorb fatty acids and glycerol).', marks: 2, explanation: 'Microvilli on epithelial cells further increase surface area. Thin walls (one cell thick), good blood supply, and constant movement enhance efficient nutrient absorption.' },
        { type: 'short', question: 'Distinguish between the nervous and endocrine systems in terms of speed and duration of response.', answer: 'Nervous system: fast, short-lived, targeted responses via electrical impulses. Endocrine system: slower, longer-lasting, widespread responses via hormones in blood.', marks: 2, explanation: 'Nerves use action potentials (milliseconds) with precise targeting. Hormones travel in blood (seconds to minutes), affect multiple targets, and responses persist longer.' },
        { type: 'essay', question: 'Describe the mechanism of breathing (inhalation and exhalation) involving the diaphragm and intercostal muscles. Explain how alveoli are adapted for gas exchange, and describe the transport of oxygen and carbon dioxide in the blood. [6]', marks: 6 },
        { type: 'essay', question: 'Explain how blood glucose concentration is regulated in the human body. Include the roles of insulin, glucagon, the pancreas, and liver. Describe the symptoms and causes of Type 1 and Type 2 diabetes. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['ict'] = {
  name: 'ICT',
  tests: [
    {
      id: 'ict-1',
      title: 'Test 1: Computer Systems & Hardware',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which component is considered the "brain" of the computer?', options: ['RAM', 'CPU', 'Hard Drive', 'GPU'], answer: 1, marks: 1, explanation: 'The CPU (Central Processing Unit) executes instructions and processes data, making it the brain of the computer.' },
        { type: 'mcq', question: 'What does ROM stand for?', options: ['Read-Only Memory', 'Random Output Memory', 'Read-Output Module', 'Random-Only Memory'], answer: 0, marks: 1, explanation: 'ROM stands for Read-Only Memory; it stores firmware that cannot be easily modified.' },
        { type: 'mcq', question: 'Which of the following is an input device?', options: ['Monitor', 'Printer', 'Scanner', 'Speaker'], answer: 2, marks: 1, explanation: 'A scanner captures images or text and sends data to the computer, making it an input device.' },
        { type: 'mcq', question: 'What is the primary function of the ALU?', options: ['Store data', 'Perform arithmetic and logical operations', 'Control input devices', 'Manage memory'], answer: 1, marks: 1, explanation: 'The Arithmetic Logic Unit (ALU) performs arithmetic and logical operations on data.' },
        { type: 'mcq', question: 'Which storage device has no moving parts?', options: ['HDD', 'SSD', 'DVD', 'Magnetic Tape'], answer: 1, marks: 1, explanation: 'SSD (Solid State Drive) uses flash memory and has no moving parts, unlike HDDs.' },
        { type: 'mcq', question: 'What does BIOS stand for?', options: ['Basic Input/Output System', 'Binary Input/Output System', 'Basic Internal Operating System', 'Basic Input/Online System'], answer: 0, marks: 1, explanation: 'BIOS stands for Basic Input/Output System; it initializes hardware during booting.' },
        { type: 'mcq', question: 'Which bus carries memory addresses?', options: ['Data bus', 'Control bus', 'Address bus', 'System bus'], answer: 2, marks: 1, explanation: 'The address bus carries memory addresses from the processor to memory or I/O devices.' },
        { type: 'mcq', question: 'Cache memory is typically faster than RAM because:', options: ['It is larger', 'It is closer to the CPU', 'It uses magnetic storage', 'It is cheaper'], answer: 1, marks: 1, explanation: 'Cache memory is located closer to the CPU and uses faster technology, reducing access time.' },
        { type: 'short', question: 'Define the term "fetch-decode-execute cycle".', answer: 'It is the basic operation cycle of a CPU: fetching an instruction from memory, decoding it to understand what to do, and executing the instruction.', marks: 2, explanation: 'This cycle repeats continuously and is the fundamental process by which the CPU operates.' },
        { type: 'short', question: 'State two differences between volatile and non-volatile memory.', answer: 'Volatile memory loses data when power is removed (e.g., RAM), while non-volatile memory retains data without power (e.g., ROM, SSD).', marks: 2, explanation: 'This distinction is crucial for understanding how computers store temporary vs permanent data.' },
        { type: 'short', question: 'Explain the purpose of the control unit in a CPU.', answer: 'The control unit directs the operation of the processor by telling the memory, ALU, and I/O devices how to respond to instructions.', marks: 2, explanation: 'It manages and coordinates all activities within the CPU and computer system.' },
        { type: 'short', question: 'Give two advantages of using SSDs over HDDs.', answer: 'Faster read/write speeds, no moving parts (more durable), quieter operation, lower power consumption.', marks: 2, explanation: 'SSDs use flash memory, providing better performance and reliability than traditional HDDs.' },
        { type: 'essay', question: 'Discuss the factors that should be considered when selecting hardware for a new computer system. Include cost, performance, and compatibility in your answer. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the impact of emerging hardware technologies (such as quantum computing or neuromorphic chips) on future computing. Discuss both potential benefits and challenges. [6]', marks: 6 }
      ]
    },
    {
      id: 'ict-2',
      title: 'Test 2: Networks & Security',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which topology connects all devices to a central hub?', options: ['Bus', 'Ring', 'Star', 'Mesh'], answer: 2, marks: 1, explanation: 'In a star topology, all devices connect to a central hub or switch.' },
        { type: 'mcq', question: 'What does TCP stand for?', options: ['Transmission Control Protocol', 'Transfer Connection Protocol', 'Telecommunication Control Process', 'Transport Communication Protocol'], answer: 0, marks: 1, explanation: 'TCP (Transmission Control Protocol) ensures reliable data transmission over networks.' },
        { type: 'mcq', question: 'Which device operates at Layer 3 of the OSI model?', options: ['Switch', 'Hub', 'Router', 'Bridge'], answer: 2, marks: 1, explanation: 'Routers operate at the Network Layer (Layer 3) and route packets based on IP addresses.' },
        { type: 'mcq', question: 'What is the primary purpose of a firewall?', options: ['Speed up internet', 'Block unauthorized access', 'Store data', 'Connect devices'], answer: 1, marks: 1, explanation: 'A firewall monitors and controls incoming and outgoing network traffic based on security rules.' },
        { type: 'mcq', question: 'Which of the following is a private IP address range?', options: ['8.8.8.0', '192.168.0.0', '172.32.0.0', '1.1.1.0'], answer: 1, marks: 1, explanation: '192.168.0.0/16 is a private IP address range defined by RFC 1918.' },
        { type: 'mcq', question: 'What type of malware disguises itself as legitimate software?', options: ['Virus', 'Worm', 'Trojan', 'Ransomware'], answer: 2, marks: 1, explanation: 'A Trojan horse disguises itself as legitimate software to trick users into installing it.' },
        { type: 'mcq', question: 'HTTPS uses which protocol for secure communication?', options: ['FTP', 'SSL/TLS', 'SSH', 'DNS'], answer: 1, marks: 1, explanation: 'HTTPS uses SSL/TLS (Secure Sockets Layer / Transport Layer Security) to encrypt data.' },
        { type: 'mcq', question: 'Which attack floods a network with excessive traffic?', options: ['Phishing', 'DDoS', 'Man-in-the-middle', 'SQL Injection'], answer: 1, marks: 1, explanation: 'DDoS (Distributed Denial of Service) floods a network with traffic to make services unavailable.' },
        { type: 'short', question: 'Describe the function of a DNS server.', answer: 'A DNS server translates human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other.', marks: 2, explanation: 'DNS acts like a phone book for the internet, resolving domain names to IP addresses.' },
        { type: 'short', question: 'Explain the difference between a switch and a router.', answer: 'A switch connects devices within the same local network using MAC addresses, while a router connects different networks and routes traffic using IP addresses.', marks: 2, explanation: 'Switches operate at Layer 2 (Data Link), routers at Layer 3 (Network) of the OSI model.' },
        { type: 'short', question: 'State two methods to protect against malware.', answer: 'Install antivirus software, keep systems updated, avoid suspicious downloads, use firewalls, enable email filtering.', marks: 2, explanation: 'These methods reduce the risk of malware infection by detecting threats and preventing access.' },
        { type: 'short', question: 'What is phishing and how can users identify it?', answer: 'Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity via email or websites. Users can identify it by checking sender addresses, looking for spelling errors, and avoiding suspicious links.', marks: 2, explanation: 'Awareness and verification are key defenses against phishing attacks.' },
        { type: 'essay', question: 'Discuss the advantages and disadvantages of using wireless networks compared to wired networks in a school environment. Consider factors such as security, cost, and flexibility. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the effectiveness of different cybersecurity measures (firewalls, encryption, access control) in protecting organizational data. Discuss their strengths and limitations. [6]', marks: 6 }
      ]
    },
    {
      id: 'ict-3',
      title: 'Test 3: Programming & Databases',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which of the following is a loop structure?', options: ['IF', 'CASE', 'FOR', 'DECLARE'], answer: 2, marks: 1, explanation: 'FOR is a loop structure that repeats a block of code a specified number of times.' },
        { type: 'mcq', question: 'What does SQL stand for?', options: ['Simple Query Language', 'Structured Query Language', 'Standard Query Logic', 'System Query Language'], answer: 1, marks: 1, explanation: 'SQL stands for Structured Query Language, used for managing relational databases.' },
        { type: 'mcq', question: 'Which data type stores whole numbers?', options: ['FLOAT', 'STRING', 'INTEGER', 'BOOLEAN'], answer: 2, marks: 1, explanation: 'INTEGER stores whole numbers without decimal points.' },
        { type: 'mcq', question: 'What is the output of 10 MOD 3?', options: ['1', '3', '0', '3.33'], answer: 0, marks: 1, explanation: 'MOD returns the remainder after division; 10 divided by 3 leaves a remainder of 1.' },
        { type: 'mcq', question: 'Which SQL statement is used to retrieve data?', options: ['GET', 'FETCH', 'SELECT', 'RETRIEVE'], answer: 2, marks: 1, explanation: 'SELECT is the SQL statement used to query and retrieve data from a database.' },
        { type: 'mcq', question: 'What is a primary key in a database?', options: ['A key that opens the database', 'A unique identifier for each record', 'A foreign reference', 'An index'], answer: 1, marks: 1, explanation: 'A primary key uniquely identifies each record in a database table.' },
        { type: 'mcq', question: 'Which of the following is an example of a conditional statement?', options: ['LOOP', 'WHILE', 'IF-THEN-ELSE', 'PRINT'], answer: 2, marks: 1, explanation: 'IF-THEN-ELSE allows different actions based on whether a condition is true or false.' },
        { type: 'mcq', question: 'What does normalization reduce in a database?', options: ['Speed', 'Data redundancy', 'Security', 'Storage capacity'], answer: 1, marks: 1, explanation: 'Normalization organizes data to reduce redundancy and improve integrity.' },
        { type: 'short', question: 'Explain the difference between a compiler and an interpreter.', answer: 'A compiler translates the entire source code into machine code before execution, while an interpreter translates and executes code line by line.', marks: 2, explanation: 'Compilers produce faster execution but slower development; interpreters allow easier debugging.' },
        { type: 'short', question: 'Describe the purpose of an array in programming.', answer: 'An array is a data structure that stores multiple values of the same data type under a single variable name, accessed via indices.', marks: 2, explanation: 'Arrays allow efficient storage and manipulation of collections of data.' },
        { type: 'short', question: 'What is a foreign key and what is its purpose?', answer: 'A foreign key is a field in one table that links to the primary key in another table, establishing relationships between tables.', marks: 2, explanation: 'Foreign keys maintain referential integrity and enable relational database design.' },
        { type: 'short', question: 'State two advantages of using subroutines (functions/procedures) in programming.', answer: 'Code reusability, easier debugging, improved readability, modular design, reduced code duplication.', marks: 2, explanation: 'Subroutines break programs into manageable, reusable blocks, improving maintainability.' },
        { type: 'essay', question: 'Discuss the importance of good database design. Explain how normalization, relationships, and data integrity contribute to an effective database system. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the use of different programming paradigms (procedural, object-oriented, functional) for developing a large-scale software application. Discuss their respective advantages and disadvantages. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['business'] = {
  name: 'Business',
  tests: [
    {
      id: 'business-1',
      title: 'Test 1: Business Organization & Environment',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which sector involves extracting raw materials?', options: ['Secondary', 'Tertiary', 'Primary', 'Quaternary'], answer: 2, marks: 1, explanation: 'The primary sector involves extraction of raw materials like farming, mining, and fishing.' },
        { type: 'mcq', question: 'What is a private limited company characterized by?', options: ['Shares sold to public', 'Unlimited liability', 'Limited liability, shares not sold publicly', 'Owned by government'], answer: 2, marks: 1, explanation: 'Private limited companies have limited liability and cannot sell shares to the general public.' },
        { type: 'mcq', question: 'Which of the following is a stakeholder?', options: ['Only shareholders', 'Employees, customers, suppliers, community', 'Only managers', 'Only government'], answer: 1, marks: 1, explanation: 'Stakeholders include anyone with an interest in the business: employees, customers, suppliers, community, etc.' },
        { type: 'mcq', question: 'What does SWOT analysis examine?', options: ['Only internal factors', 'Only external factors', 'Internal strengths/weaknesses and external opportunities/threats', 'Only financial data'], answer: 2, marks: 1, explanation: 'SWOT examines internal Strengths and Weaknesses, and external Opportunities and Threats.' },
        { type: 'mcq', question: 'A mission statement defines:', options: ['Daily tasks', 'The organization\'s core purpose and values', 'Employee salaries', 'Product prices'], answer: 1, marks: 1, explanation: 'A mission statement outlines the organization\'s core purpose, values, and primary objectives.' },
        { type: 'mcq', question: 'Which business objective focuses on maximizing shareholder returns?', options: ['Market share', 'Profit maximization', 'Social responsibility', 'Employee welfare'], answer: 1, marks: 1, explanation: 'Profit maximization aims to generate the highest possible returns for shareholders.' },
        { type: 'mcq', question: 'What type of integration occurs when a business takes over a supplier?', options: ['Horizontal', 'Conglomerate', 'Backward vertical', 'Forward vertical'], answer: 2, marks: 1, explanation: 'Backward vertical integration occurs when a business acquires or merges with a supplier.' },
        { type: 'mcq', question: 'Which economic factor affects business demand?', options: ['Employee birthdays', 'Interest rates', 'Office color', 'Brand logo'], answer: 1, marks: 1, explanation: 'Interest rates affect borrowing costs and consumer spending, influencing business demand.' },
        { type: 'short', question: 'Explain the difference between a public sector and private sector organization.', answer: 'Public sector organizations are owned and controlled by the government (e.g., hospitals, schools), while private sector organizations are owned by individuals or groups for profit.', marks: 2, explanation: 'This distinction affects funding, objectives, and accountability.' },
        { type: 'short', question: 'State two advantages of a franchise business model.', answer: 'Established brand recognition, proven business model, training and support from franchisor, easier access to finance.', marks: 2, explanation: 'Franchises reduce risk for franchisees by providing an established system and brand.' },
        { type: 'short', question: 'What is meant by "unlimited liability" in a sole proprietorship?', answer: 'The owner is personally responsible for all business debts; personal assets can be seized to pay business liabilities.', marks: 2, explanation: 'Unlimited liability is a significant risk for sole traders and general partnerships.' },
        { type: 'short', question: 'Describe two ways a business can measure its success beyond profit.', answer: 'Market share growth, customer satisfaction scores, employee retention rates, environmental impact, brand reputation.', marks: 2, explanation: 'Modern businesses use multiple metrics to evaluate overall performance and sustainability.' },
        { type: 'essay', question: 'Discuss how external factors (economic, legal, technological, social) can influence business decision-making. Use examples to support your answer. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the advantages and disadvantages of different business ownership structures (sole trader, partnership, limited company) for a new entrepreneur. [6]', marks: 6 }
      ]
    },
    {
      id: 'business-2',
      title: 'Test 2: Marketing & Operations',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'What does the marketing mix consist of?', options: ['3 Ps', '4 Ps', '5 Ps', '6 Ps'], answer: 1, marks: 1, explanation: 'The traditional marketing mix consists of 4 Ps: Product, Price, Place, Promotion.' },
        { type: 'mcq', question: 'Which pricing strategy sets a low initial price to enter a competitive market?', options: ['Skimming', 'Penetration', 'Cost-plus', 'Premium'], answer: 1, marks: 1, explanation: 'Penetration pricing sets low initial prices to gain market share quickly.' },
        { type: 'mcq', question: 'What is meant by "market segmentation"?', options: ['Dividing a market into distinct groups', 'Selling in multiple countries', 'Reducing product lines', 'Increasing prices'], answer: 0, marks: 1, explanation: 'Market segmentation divides consumers into groups with similar needs or characteristics.' },
        { type: 'mcq', question: 'Just-in-time (JIT) inventory aims to:', options: ['Maximize stock levels', 'Reduce waste by receiving goods only as needed', 'Increase warehouse size', 'Order in bulk'], answer: 1, marks: 1, explanation: 'JIT reduces inventory holding costs by receiving materials only when needed for production.' },
        { type: 'mcq', question: 'Which method measures product quality by testing every item?', options: ['Sampling', 'Quality control', 'Quality assurance', 'Benchmarking'], answer: 1, marks: 1, explanation: 'Quality control involves inspecting and testing products to ensure they meet standards.' },
        { type: 'mcq', question: 'What does USP stand for in marketing?', options: ['Universal Sales Product', 'Unique Selling Point', 'Unified Service Plan', 'Ultimate Sales Price'], answer: 1, marks: 1, explanation: 'USP (Unique Selling Point) is what makes a product different and better than competitors.' },
        { type: 'mcq', question: 'Which production method is most suitable for custom-made furniture?', options: ['Flow production', 'Mass production', 'Job production', 'Batch production'], answer: 2, marks: 1, explanation: 'Job production creates one-off custom products tailored to individual customer requirements.' },
        { type: 'mcq', question: 'What is the purpose of a break-even analysis?', options: ['Maximize profit', 'Determine the point where revenue equals total cost', 'Reduce quality', 'Increase market share'], answer: 1, marks: 1, explanation: 'Break-even analysis calculates the sales volume needed to cover all costs with no profit or loss.' },
        { type: 'short', question: 'Explain the difference between qualitative and quantitative market research.', answer: 'Qualitative research explores opinions and motivations (e.g., focus groups, interviews), while quantitative research collects numerical data (e.g., surveys, sales data).', marks: 2, explanation: 'Both methods provide different insights and are often used together for comprehensive analysis.' },
        { type: 'short', question: 'State two advantages of using e-commerce for a retail business.', answer: 'Global reach, lower overhead costs, 24/7 availability, personalized marketing, easy scalability.', marks: 2, explanation: 'E-commerce removes geographical barriers and reduces physical infrastructure costs.' },
        { type: 'short', question: 'Describe what is meant by "capacity utilization".', answer: 'Capacity utilization measures the extent to which a business uses its productive capacity, calculated as actual output divided by maximum possible output, expressed as a percentage.', marks: 2, explanation: 'High capacity utilization is generally efficient but can lead to strain; low utilization wastes resources.' },
        { type: 'short', question: 'Give two examples of how technology has improved operations management.', answer: 'Automation reduces labor costs and errors; ERP systems integrate business processes; data analytics improves forecasting.', marks: 2, explanation: 'Technology streamlines operations, improves accuracy, and enables better decision-making.' },
        { type: 'essay', question: 'Evaluate the effectiveness of different promotional strategies (advertising, sales promotion, public relations, direct marketing) for launching a new consumer product. Discuss their relative costs and reach. [6]', marks: 6 },
        { type: 'essay', question: 'Discuss the benefits and challenges of implementing lean production methods (such as JIT and Kaizen) in a manufacturing business. [6]', marks: 6 }
      ]
    },
    {
      id: 'business-3',
      title: 'Test 3: Finance & Human Resources',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'What is revenue?', options: ['Total profit', 'Total sales income', 'Total costs', 'Net income'], answer: 1, marks: 1, explanation: 'Revenue is the total income generated from the sale of goods or services.' },
        { type: 'mcq', question: 'Which document shows assets, liabilities, and equity at a point in time?', options: ['Income statement', 'Cash flow statement', 'Balance sheet', 'Budget'], answer: 2, marks: 1, explanation: 'The balance sheet provides a snapshot of a company\'s financial position at a specific date.' },
        { type: 'mcq', question: 'What does ROI stand for?', options: ['Return on Investment', 'Rate of Income', 'Revenue on Investment', 'Return on Interest'], answer: 0, marks: 1, explanation: 'ROI (Return on Investment) measures the profitability of an investment relative to its cost.' },
        { type: 'mcq', question: 'Which source of finance does not require repayment?', options: ['Bank loan', 'Overdraft', 'Equity capital', 'Debenture'], answer: 2, marks: 1, explanation: 'Equity capital (selling shares) does not require repayment, unlike loans or debentures.' },
        { type: 'mcq', question: 'What is the purpose of a cash flow forecast?', options: ['Calculate profit', 'Predict future cash inflows and outflows', 'Determine tax liability', 'Set employee salaries'], answer: 1, marks: 1, explanation: 'Cash flow forecasts predict future cash movements to help manage liquidity and avoid shortages.' },
        { type: 'mcq', question: 'Which HR function involves attracting suitable candidates?', options: ['Training', 'Recruitment', 'Appraisal', 'Discipline'], answer: 1, marks: 1, explanation: 'Recruitment is the process of identifying, attracting, and selecting candidates for employment.' },
        { type: 'mcq', question: 'What is meant by "remuneration"?', options: ['Punishment', 'Payment or compensation for work', 'Promotion', 'Retirement'], answer: 1, marks: 1, explanation: 'Remuneration includes wages, salaries, bonuses, and benefits paid to employees.' },
        { type: 'mcq', question: 'Which leadership style involves making decisions without employee input?', options: ['Democratic', 'Laissez-faire', 'Autocratic', 'Transformational'], answer: 2, marks: 1, explanation: 'Autocratic leadership makes decisions independently without consulting subordinates.' },
        { type: 'short', question: 'Explain the difference between fixed costs and variable costs.', answer: 'Fixed costs remain constant regardless of output (e.g., rent), while variable costs change with production levels (e.g., raw materials).', marks: 2, explanation: 'Understanding cost behavior is essential for break-even analysis and pricing decisions.' },
        { type: 'short', question: 'State two methods of internal recruitment.', answer: 'Promotion from within, transfer between departments, internal job postings, employee referrals.', marks: 2, explanation: 'Internal recruitment can improve morale and reduce hiring costs and time.' },
        { type: 'short', question: 'What is meant by "span of control"?', answer: 'Span of control refers to the number of subordinates directly managed by a supervisor or manager.', marks: 2, explanation: 'A wide span means many subordinates; a narrow span means few, affecting communication and supervision.' },
        { type: 'short', question: 'Describe two benefits of providing employee training.', answer: 'Improved skills and productivity, higher job satisfaction, reduced errors, better adaptability to change, lower staff turnover.', marks: 2, explanation: 'Training invests in human capital, benefiting both employees and the organization.' },
        { type: 'essay', question: 'Discuss the advantages and disadvantages of using internal versus external sources of finance for business expansion. Include factors such as control, cost, and risk in your answer. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the impact of different leadership styles on employee motivation and organizational performance. Use real-world examples where appropriate. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['accounting'] = {
  name: 'Accounting',
  tests: [
    {
      id: 'accounting-1',
      title: 'Test 1: Financial Accounting Basics',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'What is the accounting equation?', options: ['Assets = Liabilities + Equity', 'Assets = Revenue - Expenses', 'Profit = Income - Costs', 'Capital = Assets + Liabilities'], answer: 0, marks: 1, explanation: 'The fundamental accounting equation: Assets = Liabilities + Owner\'s Equity.' },
        { type: 'mcq', question: 'Which of the following is a current asset?', options: ['Machinery', 'Land', 'Inventory', 'Patents'], answer: 2, marks: 1, explanation: 'Inventory is a current asset expected to be sold or used within one year.' },
        { type: 'mcq', question: 'What does debit signify in an asset account?', options: ['Decrease', 'Increase', 'Balance', 'Close'], answer: 1, marks: 1, explanation: 'Debit increases asset accounts; credit decreases them.' },
        { type: 'mcq', question: 'Which financial statement reports performance over a period?', options: ['Balance sheet', 'Income statement', 'Cash flow statement', 'Statement of changes in equity'], answer: 1, marks: 1, explanation: 'The income statement (profit and loss account) shows revenues and expenses over a period.' },
        { type: 'mcq', question: 'What is a liability?', options: ['Something the business owns', 'Something the business owes', 'Business profit', 'Owner investment'], answer: 1, marks: 1, explanation: 'Liabilities are obligations the business owes to external parties.' },
        { type: 'mcq', question: 'Which concept requires recording transactions when they occur, not when cash is received?', options: ['Cash basis', 'Accrual basis', 'Consistency concept', 'Prudence concept'], answer: 1, marks: 1, explanation: 'Accrual basis accounting records revenues and expenses when earned or incurred.' },
        { type: 'mcq', question: 'What is depreciation?', options: ['Increase in asset value', 'Allocation of cost over useful life', 'Sale of asset', 'Purchase of asset'], answer: 1, marks: 1, explanation: 'Depreciation allocates the cost of a tangible asset over its useful life.' },
        { type: 'mcq', question: 'Which book of original entry records credit sales?', options: ['Cash book', 'Purchases journal', 'Sales journal', 'General journal'], answer: 2, marks: 1, explanation: 'The sales journal (sales day book) records all credit sales transactions.' },
        { type: 'short', question: 'Explain the difference between capital expenditure and revenue expenditure.', answer: 'Capital expenditure acquires or improves fixed assets (long-term), while revenue expenditure covers day-to-day operating costs (short-term).', marks: 2, explanation: 'This distinction affects how items are recorded and reported in financial statements.' },
        { type: 'short', question: 'State two characteristics of reliable financial information.', answer: 'Relevance, faithful representation, comparability, verifiability, timeliness, understandability.', marks: 2, explanation: 'These qualitative characteristics ensure financial statements are useful to decision-makers.' },
        { type: 'short', question: 'What is the purpose of a trial balance?', answer: 'A trial balance lists all ledger accounts and their balances to verify that total debits equal total credits.', marks: 2, explanation: 'It helps detect arithmetic errors and is a step in preparing financial statements.' },
        { type: 'short', question: 'Describe the going concern concept.', answer: 'The going concern concept assumes the business will continue operating for the foreseeable future and not be forced to liquidate.', marks: 2, explanation: 'This assumption affects asset valuation and the classification of liabilities.' },
        { type: 'essay', question: 'Discuss the role and importance of accounting concepts and conventions (such as accruals, consistency, prudence, and going concern) in preparing financial statements. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the usefulness of financial statements to different stakeholders (investors, creditors, employees, government). Discuss what each group looks for and why. [6]', marks: 6 }
      ]
    },
    {
      id: 'accounting-2',
      title: 'Test 2: Books of Original Entry',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which book records all cash and bank transactions?', options: ['Sales journal', 'Purchases journal', 'Cash book', 'General journal'], answer: 2, marks: 1, explanation: 'The cash book records all cash and bank receipts and payments.' },
        { type: 'mcq', question: 'What is a contra entry?', options: ['Entry in sales journal', 'Transfer between cash and bank columns', 'Credit purchase entry', 'Journal adjustment'], answer: 1, marks: 1, explanation: 'A contra entry occurs when money is transferred between cash and bank accounts within the cash book.' },
        { type: 'mcq', question: 'The purchases journal records:', options: ['Cash purchases', 'Credit purchases', 'Sales returns', 'Cash sales'], answer: 1, marks: 1, explanation: 'The purchases journal records credit purchases of goods for resale.' },
        { type: 'mcq', question: 'What is the purpose of a journal proper (general journal)?', options: ['Record cash sales', 'Record non-regular transactions', 'Record bank deposits', 'Record payroll'], answer: 1, marks: 1, explanation: 'The general journal records transactions not covered by specialized journals, such as adjustments and corrections.' },
        { type: 'mcq', question: 'Which document is sent by a seller to request payment?', options: ['Purchase order', 'Invoice', 'Receipt', 'Credit note'], answer: 1, marks: 1, explanation: 'An invoice is sent by the seller to the buyer requesting payment for goods or services.' },
        { type: 'mcq', question: 'A credit note is issued when:', options: ['Goods are sold', 'Goods are returned or allowance given', 'Payment is received', 'Order is placed'], answer: 1, marks: 1, explanation: 'A credit note reduces the amount owed by the buyer, typically due to returns or allowances.' },
        { type: 'mcq', question: 'Which book records goods returned by customers?', options: ['Purchases returns journal', 'Sales returns journal', 'General journal', 'Cash book'], answer: 1, marks: 1, explanation: 'The sales returns journal (returns inwards journal) records goods returned by customers.' },
        { type: 'mcq', question: 'What is a petty cash book used for?', options: ['Large payments', 'Small miscellaneous expenses', 'Recording sales', 'Bank reconciliations'], answer: 1, marks: 1, explanation: 'The petty cash book records small, routine cash payments using an imprest system.' },
        { type: 'short', question: 'Explain the imprest system of petty cash.', answer: 'Under the imprest system, the petty cashier is given a fixed float amount. Expenses are recorded, and at period end the float is replenished by the amount spent.', marks: 2, explanation: 'This system maintains control over small cash payments and simplifies reconciliation.' },
        { type: 'short', question: 'State two advantages of using books of original entry.', answer: 'Reduces detail in ledger accounts, groups similar transactions, easier error detection, provides chronological record.', marks: 2, explanation: 'Books of original entry streamline the recording process before posting to ledgers.' },
        { type: 'short', question: 'Distinguish between a debit note and a credit note.', answer: 'A debit note is sent by the buyer to request a reduction in amount owed (e.g., for returns); a credit note is sent by the seller agreeing to reduce the amount owed.', marks: 2, explanation: 'Both relate to adjustments but are issued by different parties in the transaction.' },
        { type: 'short', question: 'Describe the process of posting from the sales journal to the ledger.', answer: 'Total credit sales from the sales journal are debited to the receivables control account and credited to the sales account in the general ledger.', marks: 2, explanation: 'This ensures all credit sales are properly recorded in the accounting system.' },
        { type: 'essay', question: 'Discuss the importance of source documents (invoices, receipts, credit notes) in maintaining accurate accounting records. Explain how they support the audit trail and error detection. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the advantages and disadvantages of maintaining a three-column cash book compared to a single-column cash book for a growing business. [6]', marks: 6 }
      ]
    },
    {
      id: 'accounting-3',
      title: 'Test 3: Financial Statements & Analysis',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Gross profit is calculated as:', options: ['Sales - Cost of sales', 'Sales - Expenses', 'Revenue - Tax', 'Net profit + Expenses'], answer: 0, marks: 1, explanation: 'Gross profit = Sales revenue - Cost of sales (cost of goods sold).' },
        { type: 'mcq', question: 'What does the current ratio measure?', options: ['Profitability', 'Liquidity', 'Efficiency', 'Investment return'], answer: 1, marks: 1, explanation: 'Current ratio (current assets / current liabilities) measures short-term liquidity.' },
        { type: 'mcq', question: 'Net profit margin is calculated as:', options: ['Gross profit / Sales', 'Net profit / Sales', 'Net profit / Assets', 'Sales / Net profit'], answer: 1, marks: 1, explanation: 'Net profit margin = (Net profit / Sales revenue) × 100, showing profitability per dollar of sales.' },
        { type: 'mcq', question: 'Which ratio measures how quickly inventory is sold?', options: ['Current ratio', 'Inventory turnover', 'Debt ratio', 'Return on capital'], answer: 1, marks: 1, explanation: 'Inventory turnover = Cost of sales / Average inventory, indicating inventory management efficiency.' },
        { type: 'mcq', question: 'What is working capital?', options: ['Total assets', 'Current assets - Current liabilities', 'Fixed assets + Current assets', 'Total liabilities'], answer: 1, marks: 1, explanation: 'Working capital = Current assets - Current liabilities; it funds day-to-day operations.' },
        { type: 'mcq', question: 'Return on Capital Employed (ROCE) measures:', options: ['Liquidity', 'Efficiency in using capital', 'Asset value', 'Debt level'], answer: 1, marks: 1, explanation: 'ROCE = Operating profit / Capital employed, measuring profitability relative to capital invested.' },
        { type: 'mcq', question: 'Which item appears in the appropriation account?', options: ['Rent expense', 'Interest on drawings', 'Cost of sales', 'Wages'], answer: 1, marks: 1, explanation: 'The appropriation account shows how net profit is distributed, including interest on drawings and capital.' },
        { type: 'mcq', question: 'A bank reconciliation statement is prepared to:', options: ['Calculate profit', 'Reconcile cash book and bank statement balances', 'Record sales', 'Prepare budget'], answer: 1, marks: 1, explanation: 'It reconciles differences between the cash book balance and the bank statement balance.' },
        { type: 'short', question: 'Explain the purpose of a statement of financial position (balance sheet).', answer: 'It shows the financial position of a business at a specific date by listing assets, liabilities, and owner\'s equity.', marks: 2, explanation: 'It helps stakeholders assess solvency, liquidity, and financial structure.' },
        { type: 'short', question: 'State two reasons why a business might have a low current ratio.', answer: 'High short-term debt, low cash reserves, excessive inventory, slow receivables collection, seasonal fluctuations.', marks: 2, explanation: 'A low current ratio may indicate liquidity problems and difficulty meeting short-term obligations.' },
        { type: 'short', question: 'Describe what is meant by "profitability" and give one ratio used to measure it.', answer: 'Profitability is the ability to generate profit from operations. It can be measured by net profit margin or gross profit margin or ROCE.', marks: 2, explanation: 'Profitability ratios assess how efficiently a business converts revenue into profit.' },
        { type: 'short', question: 'What information does a cash flow statement provide that an income statement does not?', answer: 'The cash flow statement shows actual cash inflows and outflows, including timing differences caused by credit transactions, non-cash items, and investing/financing activities.', marks: 2, explanation: 'A business can be profitable but face cash shortages; the cash flow statement reveals liquidity.' },
        { type: 'essay', question: 'Discuss the limitations of using ratio analysis to assess business performance. Consider factors such as industry differences, historical cost, and window dressing. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the importance of cash flow management for business survival. Discuss the difference between profit and cash flow, using examples to illustrate why profitable businesses can still fail. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['english'] = {
  name: 'English',
  tests: [
    {
      id: 'english-1',
      title: 'Test 1: Reading Comprehension & Analysis',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'What is the primary purpose of a topic sentence?', options: ['To conclude the paragraph', 'To introduce the main idea', 'To provide evidence', 'To cite sources'], answer: 1, marks: 1, explanation: 'A topic sentence introduces the main idea of a paragraph, guiding the reader\'s understanding.' },
        { type: 'mcq', question: 'Which literary device involves exaggeration for effect?', options: ['Metaphor', 'Simile', 'Hyperbole', 'Alliteration'], answer: 2, marks: 1, explanation: 'Hyperbole is deliberate exaggeration used for emphasis or humorous effect.' },
        { type: 'mcq', question: 'In critical reading, "inference" means:', options: ['Stating the obvious', 'Drawing conclusions from evidence', 'Summarizing the text', 'Memorizing details'], answer: 1, marks: 1, explanation: 'Inference involves drawing logical conclusions based on evidence and reasoning rather than explicit statements.' },
        { type: 'mcq', question: 'What does the term "tone" refer to in a text?', options: ['The plot', 'The writer\'s attitude', 'The setting', 'The characters'], answer: 1, marks: 1, explanation: 'Tone refers to the writer\'s attitude toward the subject or audience, conveyed through word choice and style.' },
        { type: 'mcq', question: 'Which of the following is an example of a metaphor?', options: ['He runs like the wind', 'Her voice is music to my ears', 'As brave as a lion', 'She is taller than a tree'], answer: 1, marks: 1, explanation: 'A metaphor directly compares two unlike things without using "like" or "as."' },
        { type: 'mcq', question: 'What is the purpose of a thesis statement?', options: ['To ask a question', 'To present the main argument', 'To list references', 'To summarize sources'], answer: 1, marks: 1, explanation: 'A thesis statement presents the central argument or claim that the essay will support.' },
        { type: 'mcq', question: 'Which reading strategy involves questioning the author\'s credibility?', options: ['Skimming', 'Scanning', 'Critical evaluation', 'Previewing'], answer: 2, marks: 1, explanation: 'Critical evaluation assesses the reliability, bias, and validity of the author\'s arguments.' },
        { type: 'mcq', question: 'What does "context" refer to in textual analysis?', options: ['The grammar rules', 'The circumstances surrounding the text', 'The word count', 'The font style'], answer: 1, marks: 1, explanation: 'Context includes historical, cultural, and situational factors that influence the text\'s meaning.' },
        { type: 'short', question: 'Explain the difference between literal and figurative language.', answer: 'Literal language means exactly what it says, while figurative language uses words in non-literal ways (metaphors, similes) to create effect or meaning.', marks: 2, explanation: 'Understanding this distinction is essential for analyzing literary and rhetorical texts.' },
        { type: 'short', question: 'State two techniques writers use to create suspense in a narrative.', answer: 'Foreshadowing, cliffhangers, pacing, withholding information, dramatic irony, vivid sensory details.', marks: 2, explanation: 'These techniques engage readers and build tension throughout the narrative.' },
        { type: 'short', question: 'What is the function of a concluding paragraph in an essay?', answer: 'To summarize main points, restate the thesis in light of the evidence, and provide final thoughts or implications.', marks: 2, explanation: 'A strong conclusion brings closure and reinforces the essay\'s central message.' },
        { type: 'short', question: 'Describe what is meant by "authorial purpose" and give an example.', answer: 'Authorial purpose is the reason the writer created the text: to inform, persuade, entertain, or instruct. For example, a political speech aims to persuade.', marks: 2, explanation: 'Identifying purpose helps readers understand how to interpret and respond to a text.' },
        { type: 'essay', question: 'Discuss how a writer\'s choice of language, structure, and imagery shapes the reader\'s response. Use examples from any text you have studied to support your analysis. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the importance of understanding historical and cultural context when interpreting literary texts. Refer to specific examples in your answer. [6]', marks: 6 }
      ]
    },
    {
      id: 'english-2',
      title: 'Test 2: Grammar & Usage',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which sentence uses the subjunctive mood correctly?', options: ['If I was rich, I would travel', 'If I were rich, I would travel', 'If I am rich, I would travel', 'If I be rich, I would travel'], answer: 1, marks: 1, explanation: 'The subjunctive mood uses "were" (not "was") for hypothetical or contrary-to-fact conditions.' },
        { type: 'mcq', question: 'What is the function of a relative pronoun?', options: ['Shows action', 'Introduces a subordinate clause', 'Describes a noun', 'Joins independent clauses'], answer: 1, marks: 1, explanation: 'Relative pronouns (who, whom, whose, which, that) introduce subordinate clauses modifying nouns.' },
        { type: 'mcq', question: 'Which sentence contains a dangling modifier?', options: ['Running fast, the dog chased the cat', 'Running fast, I chased the dog', 'The dog, running fast, chased the cat', 'I saw the dog running fast'], answer: 0, marks: 1, explanation: 'In the first sentence, it is unclear who is running fast—the dog or an unnamed subject.' },
        { type: 'mcq', question: 'What is the correct form: "Neither of the students ____ present."', options: ['were', 'are', 'was', 'have been'], answer: 2, marks: 1, explanation: '"Neither" is singular, so it takes a singular verb: "was."' },
        { type: 'mcq', question: 'Which of the following is a coordinating conjunction?', options: ['Because', 'Although', 'But', 'While'], answer: 2, marks: 1, explanation: '"But" is a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).' },
        { type: 'mcq', question: 'What is an oxymoron?', options: ['A type of sentence', 'A contradiction in terms', 'A grammatical error', 'A long paragraph'], answer: 1, marks: 1, explanation: 'An oxymoron combines contradictory terms (e.g., "deafening silence," "bittersweet").' },
        { type: 'mcq', question: 'Which punctuation mark indicates possession?', options: ['Semicolon', 'Colon', 'Apostrophe', 'Comma'], answer: 2, marks: 1, explanation: 'The apostrophe shows possession (e.g., "the student\'s book") or forms contractions.' },
        { type: 'mcq', question: 'What is the difference between "affect" and "effect"?', options: ['No difference', 'Affect is usually a verb; effect is usually a noun', 'Effect is a verb; affect is a noun', 'Both are adjectives'], answer: 1, marks: 1, explanation: '"Affect" is typically a verb meaning to influence; "effect" is typically a noun meaning result.' },
        { type: 'short', question: 'Explain the difference between active and passive voice.', answer: 'In active voice, the subject performs the action ("The cat chased the mouse"). In passive voice, the subject receives the action ("The mouse was chased by the cat").', marks: 2, explanation: 'Active voice is generally clearer and more direct; passive voice shifts focus to the object.' },
        { type: 'short', question: 'State two common errors in subject-verb agreement.', answer: 'Singular subjects with plural verbs, collective nouns treated incorrectly, compound subjects confusion, indefinite pronouns mismatched.', marks: 2, explanation: 'Subject-verb agreement errors disrupt sentence clarity and grammatical correctness.' },
        { type: 'short', question: 'What is a conditional sentence and give an example.', answer: 'A conditional sentence expresses a hypothetical situation and its consequence. Example: "If it rains, we will cancel the picnic."', marks: 2, explanation: 'Conditionals typically use "if" and vary in structure depending on likelihood and time.' },
        { type: 'short', question: 'Describe the function of parallelism in writing.', answer: 'Parallelism uses similar grammatical structures for related ideas, creating balance, rhythm, and clarity in sentences.', marks: 2, explanation: 'It improves readability and persuasive impact (e.g., "I came, I saw, I conquered").' },
        { type: 'essay', question: 'Discuss the role of grammar and syntax in shaping meaning and tone in written communication. Use examples to show how different structures create different effects. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the claim that "standard English" is superior to dialects and non-standard forms. Consider social, cultural, and communicative factors in your answer. [6]', marks: 6 }
      ]
    },
    {
      id: 'english-3',
      title: 'Test 3: Literature & Critical Analysis',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'What does "dramatic irony" mean?', options: ['When the audience knows something characters do not', 'When a character tells a joke', 'When the plot is confusing', 'When the author speaks directly'], answer: 0, marks: 1, explanation: 'Dramatic irony occurs when the audience knows more than the characters, creating tension.' },
        { type: 'mcq', question: 'A tragic flaw is also known as:', options: ['Hubris', 'Hamartia', 'Catharsis', 'Pathos'], answer: 1, marks: 1, explanation: 'Hamartia is the tragic flaw that leads to the downfall of a tragic hero.' },
        { type: 'mcq', question: 'Which literary theory focuses on class struggle and economic power?', options: ['Feminist criticism', 'Marxist criticism', 'Psychoanalytic criticism', 'Formalism'], answer: 1, marks: 1, explanation: 'Marxist criticism analyzes literature through the lens of class struggle and economic forces.' },
        { type: 'mcq', question: 'What is a foil character?', options: ['The main villain', 'A character who contrasts with another to highlight qualities', 'A comic relief character', 'The narrator'], answer: 1, marks: 1, explanation: 'A foil contrasts with another character to emphasize particular traits or qualities.' },
        { type: 'mcq', question: 'In poetry, an iambic pentameter has how many syllables per line?', options: ['8', '10', '12', '6'], answer: 1, marks: 1, explanation: 'Iambic pentameter consists of five iambs (unstressed-stressed pairs), totaling 10 syllables.' },
        { type: 'mcq', question: 'What is the main characteristic of a soliloquy?', options: ['Conversation between two characters', 'A speech by one character alone on stage revealing inner thoughts', 'A chorus chant', 'A stage direction'], answer: 1, marks: 1, explanation: 'A soliloquy allows the audience to hear a character\'s private thoughts spoken aloud.' },
        { type: 'mcq', question: 'Which term describes the emotional release experienced by the audience at the end of a tragedy?', options: ['Hubris', 'Catharsis', 'Denouement', 'Exposition'], answer: 1, marks: 1, explanation: 'Catharsis is the purging of emotions (pity and fear) that audiences experience in tragedy.' },
        { type: 'mcq', question: 'What is intertextuality?', options: ['The relationship between texts', 'The length of a text', 'The font used', 'The author\'s biography'], answer: 0, marks: 1, explanation: 'Intertextuality refers to how texts reference, allude to, or are shaped by other texts.' },
        { type: 'short', question: 'Explain the difference between a static and dynamic character.', answer: 'A static character remains essentially unchanged throughout the story, while a dynamic character undergoes significant internal change.', marks: 2, explanation: 'This distinction helps readers understand character development and thematic progression.' },
        { type: 'short', question: 'State two features of Gothic literature.', answer: 'Atmospheric settings (ruins, castles), supernatural elements, emotional extremes, dark themes, mysterious events.', marks: 2, explanation: 'Gothic literature evokes terror, mystery, and the sublime through these conventions.' },
        { type: 'short', question: 'What is the function of a chorus in classical drama?', options: [], answer: 'The chorus comments on the action, provides background information, and reflects the audience\'s reactions.', marks: 2, explanation: 'The chorus serves as a narrative device and moral commentator in Greek drama.' },
        { type: 'short', question: 'Describe the narrative technique of "unreliable narrator" and give an example.', answer: 'An unreliable narrator\'s credibility is compromised, forcing readers to question the truth. Example: Holden Caulfield in The Catcher in the Rye.', marks: 2, explanation: 'This technique adds layers of meaning and engages readers in active interpretation.' },
        { type: 'essay', question: 'Discuss how setting contributes to the development of theme in a literary text you have studied. Analyze specific scenes and descriptions. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the significance of the tragic hero in classical and modern drama. Compare how the concept of hamartia and catharsis function in different periods. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['chinese'] = {
  name: 'Chinese',
  tests: [
    {
      id: 'chinese-1',
      title: 'Test 1: Reading Comprehension & Vocabulary',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: '"一丝不苟"这个成语的意思是：', options: ['非常马虎', '做事认真细致', '速度很快', '态度傲慢'], answer: 1, marks: 1, explanation: '"一丝不苟"形容做事非常认真细致，一点儿也不马虎。' },
        { type: 'mcq', question: '" juxtaposition"（并置）在文学分析中的主要作用是：', options: ['使文章更长', '突出对比效果', '增加字数', '简化情节'], answer: 1, marks: 1, explanation: '并置将不同事物放在一起，以突出对比或产生新的含义。' },
        { type: 'mcq', question: '"栩栩如生"通常用来形容：', options: ['建筑物', '艺术作品非常逼真', '交通工具', '自然风景'], answer: 1, marks: 1, explanation: '"栩栩如生"形容艺术形象非常逼真，如同活的一样。' },
        { type: 'mcq', question: '在阅读理解中，"主旨"指的是：', options: ['文章的所有细节', '文章的中心思想', '文章的标题', '文章的字数'], answer: 1, marks: 1, explanation: '主旨是文章的中心思想或核心观点。' },
        { type: 'mcq', question: '"锲而不舍"的意思是：', options: ['放弃努力', '坚持不懈', '犹豫不决', '半途而废'], answer: 1, marks: 1, explanation: '"锲而不舍"比喻有恒心，有毅力，坚持不懈。' },
        { type: 'mcq', question: '"斐然"一词通常表示：', options: ['成绩显著', '颜色鲜艳', '体积庞大', '声音响亮'], answer: 0, marks: 1, explanation: '"斐然"形容有文采或成绩显著。' },
        { type: 'mcq', question: '文言文中的"之"最常见的用法是：', options: ['动词"到"', '代词或助词', '形容词', '副词'], answer: 1, marks: 1, explanation: '"之"在文言文中常用作代词、助词（的）或动词。' },
        { type: 'mcq', question: '"出乎意料"的意思是：', options: ['按照计划', '超出预先的估计', '非常普通', '符合预期'], answer: 1, marks: 1, explanation: '"出乎意料"指出人意料，超出了预先的估计。' },
        { type: 'short', question: '解释"井底之蛙"这个成语的含义及其寓意。', answer: '"井底之蛙"指井底的青蛙只能看到井口那么大的天，比喻见识短浅、眼界狭窄的人。寓意是要开阔视野，不能固步自封。', marks: 2, explanation: '这个成语出自《庄子》，用来讽刺那些见识不广却自以为是的人。' },
        { type: 'short', question: '简要说明如何在阅读中推断作者的写作意图。', answer: '通过分析文章的主题、用词、语气和结构来推断。注意作者强调的内容、情感色彩和论证方式。', marks: 2, explanation: '写作意图通常包括说明、议论、抒情、记叙等，需结合文本具体分析。' },
        { type: 'short', question: '"画蛇添足"是什么意思？举例说明。', answer: '"画蛇添足"比喻做了多余的事，反而不恰当。例如：文章已经很好，再加不必要的修饰反而破坏了整体效果。', marks: 2, explanation: '出自《战国策》，告诫人们做事不要多此一举。' },
        { type: 'short', question: '解释文言文中"者"和"也"的常见用法。', answer: '"者"常用来指代人、事、物（……的人/事物）；"也"常用作判断句的句末语气词，表示肯定或解释。', marks: 2, explanation: '这两个词是文言文中最常见的虚词，掌握它们有助于理解文言句式。' },
        { type: 'essay', question: '讨论在阅读中文文章时，如何结合上下文理解词语的含义。请结合具体例子说明语境对词义的影响。[6]', marks: 6 },
        { type: 'essay', question: '评价成语在现代汉语写作中的作用。讨论使用成语的优点（如简洁、形象）和可能的缺点（如滥用、陈旧）。[6]', marks: 6 }
      ]
    },
    {
      id: 'chinese-2',
      title: 'Test 2: Grammar & Sentence Structure',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: '"把"字句的主要功能是：', options: ['表示被动', '强调对宾语的处置', '表示疑问', '表示时间'], answer: 1, marks: 1, explanation: '"把"字句用来强调对宾语的处置或影响。' },
        { type: 'mcq', question: '"虽然……但是……"表示什么关系？', options: ['因果关系', '转折关系', '并列关系', '递进关系'], answer: 1, marks: 1, explanation: '"虽然……但是……"表示转折关系。' },
        { type: 'mcq', question: '"被"字句通常表示：', options: ['主动', '被动', '进行', '完成'], answer: 1, marks: 1, explanation: '"被"字句表示被动，说明主语是动作的承受者。' },
        { type: 'mcq', question: '"的""地""得"的用法区别在于：', options: ['没有区别', '分别用于定语、状语、补语', '随意使用', '只用"的"'], answer: 1, marks: 1, explanation: '"的"用于定语后，"地"用于状语后，"得"用于补语前。' },
        { type: 'mcq', question: '"不仅……而且……"表示：', options: ['选择关系', '递进关系', '因果关系', '假设关系'], answer: 1, marks: 1, explanation: '"不仅……而且……"表示递进关系，后者比前者更进一步。' },
        { type: 'mcq', question: '在汉语中，量词"本"用于：', options: ['人', '书', '水', '衣服'], answer: 1, marks: 1, explanation: '"本"是书籍、簿册等的量词。' },
        { type: 'mcq', question: '"了"作为动态助词，主要表示：', options: ['未来', '动作的完成或变化', '否定', '疑问'], answer: 1, marks: 1, explanation: '"了"表示动作的完成或情况的变化。' },
        { type: 'mcq', question: '"连……都……"结构的作用是：', options: ['表示时间', '强调甚至达到某种程度', '表示原因', '表示地点'], answer: 1, marks: 1, explanation: '"连……都……"表示强调，说明某种情况甚至达到出乎意料的程度。' },
        { type: 'short', question: '解释"兼语句"的结构特点并举例。', answer: '"兼语句"的谓语由动宾短语套接主谓短语构成，前一动词的宾语兼做后一动词的主语。例如：老师让学生写作业。', marks: 2, explanation: '兼语句是汉语特殊句式，"学生"既是"让"的宾语，又是"写作业"的主语。' },
        { type: 'short', question: '说明复句和单句的主要区别。', answer: '单句只有一个主谓结构，表达一个完整意思；复句由两个或两个以上意义相关、结构上互不包含的分句组成。', marks: 2, explanation: '区分单句和复句有助于理解句子结构和层次关系。' },
        { type: 'short', question: '什么是"歧义句"？请举例说明。', answer: '"歧义句"是可以作两种或多种理解的句子。例如："开刀的是他父亲"——可以是医生，也可以是病人。', marks: 2, explanation: '歧义的产生可能与词语多义、结构关系不同或语义角色不清有关。' },
        { type: 'short', question: '简述汉语语序的重要性。', answer: '汉语缺乏丰富的形态变化，语序是表示语法关系的主要手段。主谓宾的顺序改变往往会导致意思改变或句子不通。', marks: 2, explanation: '语序在汉语语法中具有非常重要的地位，是理解句意的关键。' },
        { type: 'essay', question: '讨论汉语中"话题"和"主语"的区别与联系。分析话题优先语言的特点，并用具体例子说明。[6]', marks: 6 },
        { type: 'essay', question: '评价网络语言对现代汉语语法规范的影响。讨论其积极面（如创新、活力）和消极面（如混乱、理解困难）。[6]', marks: 6 }
      ]
    },
    {
      id: 'chinese-3',
      title: 'Test 3: Writing & Cultural Understanding',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: '"议论文"的主要表达方式是：', options: ['记叙', '说明', '议论', '抒情'], answer: 2, marks: 1, explanation: '"议论文"以议论为主要表达方式，通过论据证明论点。' },
        { type: 'mcq', question: '"唐诗"中律诗通常有几句？', options: ['四句', '八句', '十句', '不限'], answer: 1, marks: 1, explanation: '律诗通常每首八句，每句五字或七字。' },
        { type: 'mcq', question: '"春节"的传统习俗不包括：', options: ['贴春联', '吃月饼', '放鞭炮', '拜年'], answer: 1, marks: 1, explanation: '吃月饼是中秋节的习俗，不是春节的习俗。' },
        { type: 'mcq', question: '"四书"包括《论语》《孟子》《大学》和：', options: ['《诗经》', '《尚书》', '《中庸》', '《礼记》'], answer: 2, marks: 1, explanation: '"四书"指《大学》《中庸》《论语》《孟子》。' },
        { type: 'mcq', question: '在中文书信格式中，"此致敬礼"应该写在：', options: ['开头', '正文中间', '结尾', '信封上'], answer: 2, marks: 1, explanation: '"此致敬礼"是书信结尾的祝颂语。' },
        { type: 'mcq', question: '"比喻"修辞手法的作用是：', options: ['使文章更长', '使表达更形象生动', '增加字数', '改变主题'], answer: 1, marks: 1, explanation: '比喻通过相似点将抽象事物具体化，使表达更形象生动。' },
        { type: 'mcq', question: '"端午节"是为了纪念：', options: ['孔子', '屈原', '李白', '杜甫'], answer: 1, marks: 1, explanation: '端午节是为了纪念战国时期的爱国诗人屈原。' },
        { type: 'mcq', question: '"总分总"结构常见于：', options: ['诗歌', '议论文或说明文', '小说', '戏剧'], answer: 1, marks: 1, explanation: '"总分总"结构先总述，再分述，最后总结，常见于议论文和说明文。' },
        { type: 'short', question: '简述"形散神不散"在散文写作中的含义。', answer: '"形散"指散文的取材、结构自由灵活；"神不散"指主题明确集中，贯穿全文。', marks: 2, explanation: '这是散文的重要特征，表面看似松散，实则围绕中心思想组织材料。' },
        { type: 'short', question: '说明"应用文"的特点并举例两种。', answer: '应用文具有实用性、格式规范、语言简洁明了的特点。例如：通知、请假条、申请书、感谢信。', marks: 2, explanation: '应用文是为解决实际问题而写的文体，格式和语言都有特定要求。' },
        { type: 'short', question: '解释"天人合一"思想的基本内涵。', answer: '"天人合一"是中国传统哲学思想，认为天与人的关系是相通、和谐统一的，强调人与自然的和谐相处。', marks: 2, explanation: '这一思想影响了中国文化、哲学、医学和生态观念的多个方面。' },
        { type: 'short', question: '简述"书法"在中国文化中的地位及其艺术特点。', answer: '书法是中国传统艺术瑰宝，被誉为无言的诗、无行的舞。它通过线条、结构、章法表现美感和个人性情。', marks: 2, explanation: '书法不仅是文字书写，更是修身养性的艺术形式，具有深厚的文化内涵。' },
        { type: 'essay', question: '讨论在跨文化交际中，了解中国文化习俗（如面子、关系、礼节）的重要性。结合具体场景分析可能产生的误解及如何避免。[6]', marks: 6 },
        { type: 'essay', question: '评价中国传统节日在现代社会中的传承与变迁。讨论保持传统与适应现代生活之间的平衡。[6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['psychology'] = {
  name: 'Psychology',
  tests: [
    {
      id: 'psychology-1',
      title: 'Test 1: Cognitive Psychology',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which memory store has the largest capacity?', options: ['Sensory memory', 'Short-term memory', 'Long-term memory', 'Working memory'], answer: 2, marks: 1, explanation: 'Long-term memory has a virtually unlimited capacity for storing information over extended periods.' },
        { type: 'mcq', question: 'What is the typical duration of short-term memory without rehearsal?', options: ['Less than a second', 'About 15-30 seconds', 'Several hours', 'Permanent'], answer: 1, marks: 1, explanation: 'Short-term memory lasts approximately 15-30 seconds without active rehearsal.' },
        { type: 'mcq', question: 'Who proposed the multi-store model of memory?', options: ['Baddeley and Hitch', 'Atkinson and Shiffrin', 'Craik and Lockhart', 'Miller'], answer: 1, marks: 1, explanation: 'Atkinson and Shiffrin (1968) proposed the multi-store model with sensory, short-term, and long-term stores.' },
        { type: 'mcq', question: 'What does the phonological loop component of working memory handle?', options: ['Visual information', 'Verbal and auditory information', 'Spatial information', 'Long-term storage'], answer: 1, marks: 1, explanation: 'The phonological loop temporarily stores and rehearses verbal and auditory information.' },
        { type: 'mcq', question: 'Which level of processing leads to better retention?', options: ['Shallow (structural)', 'Intermediate (phonemic)', 'Deep (semantic)', 'Surface'], answer: 2, marks: 1, explanation: 'Craik and Lockhart found that deep, semantic processing leads to better long-term retention.' },
        { type: 'mcq', question: 'Procedural memory is a type of:', options: ['Explicit memory', 'Implicit memory', 'Episodic memory', 'Semantic memory'], answer: 1, marks: 1, explanation: 'Procedural memory (skills and habits) is implicit memory, expressed through performance rather than conscious recall.' },
        { type: 'mcq', question: 'The misinformation effect demonstrates:', options: ['Accurate memory', 'Memory distortion by post-event information', 'Perfect recall', 'Sensory memory failure'], answer: 1, marks: 1, explanation: 'Loftus showed that misleading post-event information can alter eyewitness memories.' },
        { type: 'mcq', question: 'What is chunking in memory?', options: ['Forgetting information', 'Grouping information into meaningful units', 'Storing images', 'Rehearsing aloud'], answer: 1, marks: 1, explanation: 'Chunking groups individual pieces of information into larger, meaningful units to overcome STM limits.' },
        { type: 'short', question: 'Explain the difference between retroactive and proactive interference.', answer: 'Retroactive interference occurs when new information disrupts recall of old information; proactive interference occurs when old information disrupts learning of new information.', marks: 2, explanation: 'Both types of interference explain forgetting in long-term memory.' },
        { type: 'short', question: 'State two factors that affect the accuracy of eyewitness testimony.', answer: 'Leading questions, anxiety/stress, weapon focus, time elapsed, age of witness, racial bias.', marks: 2, explanation: 'Research by Loftus and others shows these factors significantly impact recall reliability.' },
        { type: 'short', question: 'Describe the encoding specificity principle.', answer: 'The encoding specificity principle states that memory is improved when retrieval cues match the encoding context (e.g., physical environment, mood).', marks: 2, explanation: 'This explains why recall is often better in the same context where learning occurred.' },
        { type: 'short', question: 'What is the capacity of short-term memory according to Miller?', answer: 'Miller proposed the "magic number" of 7±2 items, meaning short-term memory can hold about 5-9 items.', marks: 2, explanation: 'Chunking can increase the effective capacity by grouping items into meaningful units.' },
        { type: 'essay', question: 'Discuss the working memory model proposed by Baddeley and Hitch. Evaluate its strengths and limitations compared to the earlier multi-store model. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the reliability of eyewitness testimony in legal proceedings. Discuss psychological research on factors that enhance or impair the accuracy of memory recall. [6]', marks: 6 }
      ]
    },
    {
      id: 'psychology-2',
      title: 'Test 2: Social Psychology',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'What did Milgram\'s obedience study primarily investigate?', options: ['Conformity', 'Obedience to authority', 'Aggression', 'Attraction'], answer: 1, marks: 1, explanation: 'Milgram studied how far people would obey an authority figure when instructed to harm another person.' },
        { type: 'mcq', question: 'In Asch\'s conformity experiments, what percentage of participants conformed at least once?', options: ['About 25%', 'About 50%', 'About 75%', 'About 95%'], answer: 2, marks: 1, explanation: 'Approximately 75% of participants conformed to the incorrect majority at least once.' },
        { type: 'mcq', question: 'What is the bystander effect?', options: ['Helping behavior increases with more bystanders', 'Helping behavior decreases with more bystanders', 'Ignoring the victim', 'Conforming to the group'], answer: 1, marks: 1, explanation: 'The bystander effect (Latane and Darley) shows that people are less likely to help when others are present.' },
        { type: 'mcq', question: 'Social facilitation refers to:', options: ['Helping others', 'Improved performance on simple tasks in presence of others', 'Conforming to norms', 'Group decision-making'], answer: 1, marks: 1, explanation: 'Social facilitation is the tendency to perform better on simple tasks when others are present.' },
        { type: 'mcq', question: 'What is groupthink?', options: ['Individual creativity', 'Desire for conformity leading to poor decision-making', 'Conflict resolution', 'Social loafing'], answer: 1, marks: 1, explanation: 'Groupthink (Janis) occurs when group desire for harmony overrides realistic evaluation of alternatives.' },
        { type: 'mcq', question: 'The fundamental attribution error involves:', options: ['Overestimating situational factors', 'Overestimating dispositional factors in others', 'Accurate attribution', 'Ignoring personality'], answer: 1, marks: 1, explanation: 'People tend to overestimate personality/dispositional factors and underestimate situational factors when explaining others\' behavior.' },
        { type: 'mcq', question: 'Which theory suggests we help others to reduce our own distress?', options: ['Empathy-altruism hypothesis', 'Arousal: cost-reward model', 'Social exchange theory', 'Evolutionary theory'], answer: 1, marks: 1, explanation: 'The arousal: cost-reward model suggests bystanders help to reduce their own negative emotional arousal.' },
        { type: 'mcq', question: 'What is social loafing?', options: ['Working harder in groups', 'Exerting less effort when working in a group', 'Conforming to authority', 'Helping strangers'], answer: 1, marks: 1, explanation: 'Social loafing is the tendency for individuals to exert less effort when working collectively than individually.' },
        { type: 'short', question: 'Explain the difference between normative and informational social influence.', answer: 'Normative social influence stems from the desire to be liked and accepted (conform to fit in); informational social influence stems from the desire to be correct (accept others as reality).', marks: 2, explanation: 'Both explain why people conform, but for different psychological reasons.' },
        { type: 'short', question: 'State two ethical issues in Milgram\'s obedience study.', answer: 'Deception about the true nature, psychological harm/distress, lack of fully informed consent, difficulty withdrawing.', marks: 2, explanation: 'Milgram\'s study raised significant ethical concerns that shaped modern research ethics guidelines.' },
        { type: 'short', question: 'Describe what is meant by "social identity theory."', answer: 'Social identity theory (Tajfel) suggests people derive self-esteem from group membership, leading to in-group favoritism and out-group discrimination.', marks: 2, explanation: 'This theory explains intergroup conflict and prejudice through social categorization.' },
        { type: 'short', question: 'Give two factors that increase conformity according to research.', answer: 'Group size (up to 3-4), unanimity of the majority, task difficulty, low self-confidence, desire for group acceptance.', marks: 2, explanation: 'Asch and subsequent research identified these factors as increasing conformity rates.' },
        { type: 'essay', question: 'Discuss the ethical considerations in conducting social psychology research on obedience and conformity. Evaluate whether the scientific knowledge gained justifies the ethical concerns raised. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the factors that influence prosocial behavior. Discuss how situational, personal, and social factors interact to determine whether people help others in emergency situations. [6]', marks: 6 }
      ]
    },
    {
      id: 'psychology-3',
      title: 'Test 3: Developmental & Abnormal Psychology',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'According to Piaget, which stage occurs from birth to 2 years?', options: ['Preoperational', 'Concrete operational', 'Sensorimotor', 'Formal operational'], answer: 2, marks: 1, explanation: 'The sensorimotor stage (birth-2 years) involves learning through sensory experiences and motor activities.' },
        { type: 'mcq', question: 'What is object permanence?', options: ['Forgetting objects', 'Understanding objects exist even when out of sight', 'Naming objects', 'Creating objects'], answer: 1, marks: 1, explanation: 'Object permanence, developed in the sensorimotor stage, is the understanding that objects continue to exist when hidden.' },
        { type: 'mcq', question: 'In Erikson\'s theory, the crisis in adolescence is:', options: ['Trust vs. mistrust', 'Identity vs. role confusion', 'Intimacy vs. isolation', 'Generativity vs. stagnation'], answer: 1, marks: 1, explanation: 'Adolescents face identity vs. role confusion, developing a sense of self and personal identity.' },
        { type: 'mcq', question: 'What is the defining feature of Major Depressive Disorder?', options: ['Manic episodes', 'Persistent sadness and loss of interest', 'Hallucinations', 'Obsessive thoughts'], answer: 1, marks: 1, explanation: 'MDD is characterized by persistent depressed mood and/or loss of interest in activities for at least two weeks.' },
        { type: 'mcq', question: 'Classical conditioning was first studied by:', options: ['Skinner', 'Pavlov', 'Freud', 'Watson'], answer: 1, marks: 1, explanation: 'Pavlov discovered classical conditioning through his experiments with dogs and salivation responses.' },
        { type: 'mcq', question: 'Which therapy focuses on changing maladaptive thought patterns?', options: ['Psychoanalysis', 'Behavior therapy', 'Cognitive behavioral therapy (CBT)', 'Humanistic therapy'], answer: 2, marks: 1, explanation: 'CBT targets negative thought patterns and behaviors to improve emotional regulation.' },
        { type: 'mcq', question: 'Attachment theory was primarily developed by:', options: ['Piaget', 'Bowlby', 'Erikson', 'Vygotsky'], answer: 1, marks: 1, explanation: 'Bowlby developed attachment theory, emphasizing the importance of early bonds between infant and caregiver.' },
        { type: 'mcq', question: 'The diathesis-stress model explains mental disorders as resulting from:', options: ['Only genetics', 'Only environment', 'Interaction of predisposition and stress', 'Medication deficiency'], answer: 2, marks: 1, explanation: 'The diathesis-stress model posits that disorders result from genetic vulnerability combined with environmental stressors.' },
        { type: 'short', question: 'Explain the difference between assimilation and accommodation in Piaget\'s theory.', answer: 'Assimilation fits new information into existing schemas; accommodation modifies existing schemas to incorporate new information.', marks: 2, explanation: 'Both processes drive cognitive development as children adapt to new experiences.' },
        { type: 'short', question: 'State two symptoms of generalized anxiety disorder (GAD).', answer: 'Excessive worry, restlessness, fatigue, difficulty concentrating, irritability, muscle tension, sleep disturbance.', marks: 2, explanation: 'GAD involves persistent and excessive anxiety about multiple domains of life.' },
        { type: 'short', question: 'Describe the strange situation procedure and what it measures.', answer: 'The strange situation (Ainsworth) observes infant behavior during separations and reunions with caregivers to measure attachment security.', marks: 2, explanation: 'It classifies attachment into secure, insecure-avoidant, and insecure-ambivalent types.' },
        { type: 'short', question: 'What is meant by "nature vs. nurture" in developmental psychology?', answer: 'It refers to the debate about whether development is shaped more by genetic inheritance (nature) or environmental influences (nurture).', marks: 2, explanation: 'Modern psychology generally accepts that both interact to shape development.' },
        { type: 'essay', question: 'Discuss Piaget\'s theory of cognitive development. Evaluate the evidence supporting and challenging his stage theory, including criticisms from subsequent research. [6]', marks: 6 },
        { type: 'essay', question: 'Evaluate the strengths and limitations of the biomedical model versus the biopsychosocial model in explaining and treating mental disorders. Use specific disorders as examples. [6]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['maths'] = {
  name: 'Mathematics',
  tests: [
    {
      id: 'maths-1',
      title: 'Test 1: Algebra & Functions',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Solve for x: 2x² − 5x − 3 = 0', options: ['x = 3 or x = −0.5', 'x = −3 or x = 0.5', 'x = 1 or x = −1.5', 'x = 2 or x = −3'], answer: 0, marks: 1, explanation: 'Factorising: (2x + 1)(x − 3) = 0 gives x = 3 or x = −0.5' },
        { type: 'mcq', question: 'The function f(x) = x² − 4x + 5 has its minimum value at:', options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'], answer: 1, marks: 1, explanation: 'Complete the square: f(x) = (x − 2)² + 1, so minimum at x = 2' },
        { type: 'mcq', question: 'Simplify (3a²b)³ ÷ (9a⁴b²)', options: ['3ab', '3a²b', 'ab/3', '3ab⁴'], answer: 0, marks: 1, explanation: '(3a²b)³ = 27a⁶b³; dividing by 9a⁴b² gives 3a²b' },
        { type: 'mcq', question: 'Find the range of f(x) = 2x + 1 for domain {−1, 0, 1, 2}', options: ['{−1, 1, 3, 5}', '{−2, 0, 2, 4}', '{1, 2, 3, 4}', '{0, 1, 2, 3}'], answer: 0, marks: 1, explanation: 'Substituting: f(−1)=−1, f(0)=1, f(1)=3, f(2)=5' },
        { type: 'mcq', question: 'Which is a factor of x³ − 6x² + 11x − 6?', options: ['x − 1', 'x + 1', 'x − 4', 'x + 2'], answer: 0, marks: 1, explanation: 'By factor theorem, f(1) = 1 − 6 + 11 − 6 = 0, so (x − 1) is a factor' },
        { type: 'mcq', question: 'Solve the inequality: 3x − 7 > 2x + 4', options: ['x > 11', 'x > 3', 'x < 11', 'x < 3'], answer: 0, marks: 1, explanation: '3x − 2x > 4 + 7, therefore x > 11' },
        { type: 'mcq', question: 'If f(x) = x² and g(x) = x + 3, find fg(2)', options: ['25', '11', '7', '5'], answer: 0, marks: 1, explanation: 'g(2) = 5, then f(5) = 25' },
        { type: 'mcq', question: 'Express x² + 6x + 10 in completed square form', options: ['(x + 3)² + 1', '(x + 3)² − 1', '(x + 6)² + 10', '(x + 3)² + 10'], answer: 0, marks: 1, explanation: 'x² + 6x + 9 + 1 = (x + 3)² + 1' },
        { type: 'short', question: 'Solve the simultaneous equations: 2x + 3y = 13 and x − y = 1', answer: 'x = 3.2, y = 2.2 (or x = 16/5, y = 11/5)', marks: 2, explanation: 'From second equation: x = y + 1. Substitute: 2(y+1) + 3y = 13 → 5y + 2 = 13 → y = 11/5 = 2.2, x = 16/5 = 3.2' },
        { type: 'short', question: 'Find the inverse function of f(x) = (3x − 1)/2', answer: 'f⁻¹(x) = (2x + 1)/3', marks: 2, explanation: 'Let y = (3x − 1)/2. Swap x and y: x = (3y − 1)/2. Solve: 2x = 3y − 1, so y = (2x + 1)/3' },
        { type: 'short', question: 'Simplify fully: (x² − 9)/(x² + 5x + 6)', answer: '(x − 3)/(x + 2)', marks: 2, explanation: 'Factorise: (x+3)(x−3)/[(x+2)(x+3)] = (x−3)/(x+2)' },
        { type: 'short', question: 'Find the sum of the first 10 terms of the arithmetic sequence: 5, 8, 11, 14, ...', answer: '185', marks: 2, explanation: 'a = 5, d = 3, n = 10. S₁₀ = (10/2)[2(5) + 9(3)] = 5 × 37 = 185' },
        { type: 'essay', question: '(a) Solve the equation x³ − 2x² − 5x + 6 = 0, showing all working. [3]\n(b) Hence, sketch the curve y = x³ − 2x² − 5x + 6, indicating clearly the coordinates of all points where the curve meets the axes. [3]', marks: 6 },
        { type: 'essay', question: 'The function f is defined by f(x) = x² − 4x + 3 for x ∈ ℝ.\n(a) Express f(x) in the form a(x − b)² + c, stating the values of a, b and c. [3]\n(b) State the line of symmetry of the curve y = f(x) and the coordinates of the turning point. [1]\n(c) Sketch the graph of y = f(x), showing clearly the coordinates of the points where the curve meets the coordinate axes. [2]', marks: 6 }
      ]
    },
    {
      id: 'maths-2',
      title: 'Test 2: Calculus & Trigonometry',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Differentiate y = 3x⁴ − 2x³ + 5x', options: ['12x³ − 6x² + 5', '12x³ − 6x² + 5x', '3x³ − 2x² + 5', '12x⁴ − 6x³ + 5x²'], answer: 0, marks: 1, explanation: 'Using power rule: dy/dx = 12x³ − 6x² + 5' },
        { type: 'mcq', question: 'Find ∫(4x³ + 3x²) dx', options: ['x⁴ + x³ + c', 'x⁴ + x³', '12x² + 6x + c', 'x⁴ + x³ + x + c'], answer: 0, marks: 1, explanation: '∫4x³ dx = x⁴ and ∫3x² dx = x³, so x⁴ + x³ + c' },
        { type: 'mcq', question: 'If sin θ = 3/5 and θ is acute, find cos θ', options: ['4/5', '3/4', '5/4', '2/5'], answer: 0, marks: 1, explanation: 'Using sin²θ + cos²θ = 1: cos θ = √(1 − 9/25) = √(16/25) = 4/5' },
        { type: 'mcq', question: 'Solve sin x = 0.5 for 0° ≤ x ≤ 360°', options: ['30°, 150°', '30°, 330°', '60°, 120°', '45°, 135°'], answer: 0, marks: 1, explanation: 'sin x = 0.5 at x = 30° (first quadrant) and x = 180° − 30° = 150° (second quadrant)' },
        { type: 'mcq', question: 'The gradient of the curve y = x³ − 3x² at x = 2 is:', options: ['0', '4', '−4', '12'], answer: 0, marks: 1, explanation: 'dy/dx = 3x² − 6x. At x = 2: 3(4) − 12 = 12 − 12 = 0' },
        { type: 'mcq', question: 'Find the equation of the tangent to y = x² at the point (2, 4)', options: ['y = 4x − 4', 'y = 2x', 'y = 4x − 8', 'y = 2x + 4'], answer: 0, marks: 1, explanation: 'dy/dx = 2x, at x=2 gradient = 4. Using y − 4 = 4(x − 2): y = 4x − 4' },
        { type: 'mcq', question: 'Simplify cos(180° − θ)', options: ['−cos θ', 'cos θ', 'sin θ', '−sin θ'], answer: 0, marks: 1, explanation: 'Using cosine of supplementary angles: cos(180° − θ) = −cos θ' },
        { type: 'mcq', question: 'Evaluate ∫₂³ (2x + 1) dx', options: ['6', '5', '7', '4'], answer: 0, marks: 1, explanation: '[x² + x]₂³ = (9+3) − (4+2) = 12 − 6 = 6' },
        { type: 'short', question: 'Find the stationary points of y = x³ − 6x² + 9x + 2 and determine their nature', answer: '(1, 6) maximum; (3, 2) minimum', marks: 2, explanation: 'dy/dx = 3x² − 12x + 9 = 3(x−1)(x−3). d²y/dx² = 6x − 12. At x=1: d²y/dx² = −6 < 0 (max). At x=3: d²y/dx² = 6 > 0 (min). y(1)=6, y(3)=2' },
        { type: 'short', question: 'Solve 2 cos x = √3 for 0° ≤ x ≤ 360°', answer: '30°, 330°', marks: 2, explanation: 'cos x = √3/2. Reference angle = 30°. Cosine is positive in 1st and 4th quadrants: x = 30°, 330°' },
        { type: 'short', question: 'Find the area enclosed by the curve y = x², the x-axis, and the lines x = 1 and x = 3', answer: '26/3 or 8⅔', marks: 2, explanation: '∫₁³ x² dx = [x³/3]₁³ = 27/3 − 1/3 = 26/3 = 8⅔' },
        { type: 'short', question: 'Differentiate y = (2x + 1)⁵ with respect to x', answer: '10(2x + 1)⁴', marks: 2, explanation: 'Using chain rule: dy/dx = 5(2x+1)⁴ × 2 = 10(2x+1)⁴' },
        { type: 'essay', question: 'A curve has equation y = x³ − 3x² − 9x + 10.\n(a) Find dy/dx and hence find the coordinates of the stationary points of the curve. [3]\n(b) Determine the nature of each stationary point, justifying your answer. [2]\n(c) Find the equation of the normal to the curve at the point where x = 2. [1]', marks: 6 },
        { type: 'essay', question: '(a) Show that sin²θ + cos²θ = 1 can be used to find the exact value of sin 15°. [2]\n(b) Using the identity cos 2θ = 1 − 2sin²θ, solve cos 2θ = 0.5 for 0° ≤ θ ≤ 180°. [2]\n(c) Prove that (1 − cos²θ)/cos²θ = tan²θ. [2]', marks: 6 }
      ]
    },
    {
      id: 'maths-3',
      title: 'Test 3: Statistics & Probability',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The mean of 5, 7, 9, 12, x is 9. Find x', options: ['12', '10', '11', '13'], answer: 0, marks: 1, explanation: 'Sum = 5×9 = 45. 5+7+9+12+x = 45, so x = 45−33 = 12' },
        { type: 'mcq', question: 'A fair die is rolled. What is the probability of getting a prime number?', options: ['1/2', '1/3', '2/3', '1/6'], answer: 0, marks: 1, explanation: 'Prime numbers on a die: 2, 3, 5. P(prime) = 3/6 = 1/2' },
        { type: 'mcq', question: 'If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2, find P(A ∪ B)', options: ['0.7', '0.9', '0.3', '0.1'], answer: 0, marks: 1, explanation: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.4 + 0.5 − 0.2 = 0.7' },
        { type: 'mcq', question: 'The median of the data set 3, 5, 7, 9, 11, 13, 15 is:', options: ['9', '7', '11', '8'], answer: 0, marks: 1, explanation: 'With 7 values, the median is the 4th value: 9' },
        { type: 'mcq', question: 'A bag contains 3 red and 5 blue marbles. Two marbles are drawn without replacement. What is the probability both are red?', options: ['3/28', '9/64', '1/8', '3/8'], answer: 0, marks: 1, explanation: 'P(first red) = 3/8, P(second red) = 2/7. P(both red) = (3/8)×(2/7) = 6/56 = 3/28' },
        { type: 'mcq', question: 'The interquartile range of 2, 4, 6, 8, 10, 12, 14, 16 is:', options: ['8', '6', '10', '4'], answer: 0, marks: 1, explanation: 'Q1 = 4, Q3 = 12, IQR = 12 − 4 = 8' },
        { type: 'mcq', question: 'If X ~ B(10, 0.3), find E(X)', options: ['3', '0.3', '10', '7'], answer: 0, marks: 1, explanation: 'For binomial distribution, E(X) = np = 10 × 0.3 = 3' },
        { type: 'mcq', question: 'The standard deviation of 2, 4, 6, 8, 10 is approximately:', options: ['2.83', '3.16', '2.45', '6'], answer: 0, marks: 1, explanation: 'Mean = 6. Variance = [(16+4+0+4+16)/5] = 40/5 = 8. SD = √8 ≈ 2.83' },
        { type: 'short', question: 'A box contains 4 red, 3 green and 5 blue balls. Two balls are drawn at random without replacement. Find the probability that they are different colours', answer: '47/66', marks: 2, explanation: 'P(different) = 1 − P(same) = 1 − [C(4,2)+C(3,2)+C(5,2)]/C(12,2) = 1 − (6+3+10)/66 = 1 − 19/66 = 47/66' },
        { type: 'short', question: 'The heights of 50 students are normally distributed with mean 165 cm and standard deviation 8 cm. Find the number of students with height between 157 cm and 173 cm', answer: '34', marks: 2, explanation: '157 = μ − σ, 173 = μ + σ. For normal distribution, ≈68% lie within μ±σ. 0.68 × 50 = 34 students' },
        { type: 'short', question: 'Find the probability of getting exactly 3 heads when a fair coin is tossed 5 times', answer: '5/16 or 0.3125', marks: 2, explanation: 'X ~ B(5, 0.5). P(X=3) = C(5,3)×(0.5)³×(0.5)² = 10 × 1/32 = 10/32 = 5/16' },
        { type: 'short', question: 'The probability distribution of X is: P(X=1)=0.2, P(X=2)=0.3, P(X=3)=0.5. Find Var(X)', answer: '0.61', marks: 2, explanation: 'E(X) = 0.2+0.6+1.5 = 2.3. E(X²) = 0.2+1.2+4.5 = 5.9. Var(X) = 5.9 − 2.3² = 5.9 − 5.29 = 0.61' },
        { type: 'essay', question: 'The masses of bags of sugar are normally distributed with mean 1.02 kg and standard deviation 0.015 kg.\n(a) Find the probability that a randomly chosen bag has mass less than 1.00 kg. [2]\n(b) Find the value of k such that 90% of bags have mass less than k kg. [2]\n(c) In a sample of 50 bags, how many would you expect to have mass between 1.005 kg and 1.035 kg? [2]', marks: 6 },
        { type: 'essay', question: 'A discrete random variable X has the following probability distribution:\n\n| x | 0 | 1 | 2 | 3 |\n| P(X=x) | 0.1 | 0.3 | k | 0.2 |\n\n(a) Find the value of k. [1]\n(b) Find P(X ≥ 2). [1]\n(c) Find E(X) and Var(X). [3]\n(d) Find E(3X + 2). [1]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['additional-maths'] = {
  name: 'Additional Mathematics',
  tests: [
    {
      id: 'addmaths-1',
      title: 'Test 1: Advanced Algebra & Logarithms',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Solve log₂(x) + log₂(x−2) = 3', options: ['x = 4', 'x = 3', 'x = 2', 'x = 5'], answer: 0, marks: 1, explanation: 'log₂[x(x−2)] = 3, so x(x−2) = 8. x² − 2x − 8 = 0, (x−4)(x+2) = 0. x = 4 (x > 2)' },
        { type: 'mcq', question: 'If 3²ˣ = 81, find x', options: ['2', '4', '1', '3'], answer: 0, marks: 1, explanation: '81 = 3⁴, so 2x = 4, giving x = 2' },
        { type: 'mcq', question: 'Simplify (2 + √3)(2 − √3)', options: ['1', '4', '7', '−1'], answer: 0, marks: 1, explanation: 'Difference of squares: 4 − 3 = 1' },
        { type: 'mcq', question: 'Find the remainder when x³ − 2x² + 3x − 4 is divided by (x − 2)', options: ['6', '−2', '4', '0'], answer: 0, marks: 1, explanation: 'By remainder theorem: f(2) = 8 − 8 + 6 − 4 = 6' },
        { type: 'mcq', question: 'Solve e²ˣ = 5 for x, giving answer to 2 decimal places', options: ['0.80', '0.72', '1.61', '0.40'], answer: 0, marks: 1, explanation: '2x = ln(5), x = ln(5)/2 ≈ 1.609/2 ≈ 0.80' },
        { type: 'mcq', question: 'The sum to infinity of a geometric progression with first term 8 and common ratio 1/2 is:', options: ['16', '8', '4', '32'], answer: 0, marks: 1, explanation: 'S∞ = a/(1−r) = 8/(1−0.5) = 8/0.5 = 16' },
        { type: 'mcq', question: 'If logₐ(2) = 0.4 and logₐ(5) = 0.9, find logₐ(10)', options: ['1.3', '0.5', '1.0', '0.36'], answer: 0, marks: 1, explanation: 'logₐ(10) = logₐ(2×5) = logₐ(2) + logₐ(5) = 0.4 + 0.9 = 1.3' },
        { type: 'mcq', question: 'Express 3ˣ⁺² in the form a·3ˣ', options: ['9·3ˣ', '6·3ˣ', '3·3ˣ', '3ˣ/9'], answer: 0, marks: 1, explanation: '3ˣ⁺² = 3ˣ · 3² = 9 · 3ˣ' },
        { type: 'short', question: 'Solve the equation 2²ˣ − 5·2ˣ + 4 = 0', answer: 'x = 0 or x = 2', marks: 2, explanation: 'Let y = 2ˣ. Then y² − 5y + 4 = 0, (y−1)(y−4) = 0. y = 1 or 4. So 2ˣ = 1 → x = 0, or 2ˣ = 4 → x = 2' },
        { type: 'short', question: 'Find the sum of the first n terms of the geometric series 3 + 6 + 12 + 24 + ...', answer: '3(2ⁿ − 1)', marks: 2, explanation: 'a = 3, r = 2. Sₙ = a(rⁿ−1)/(r−1) = 3(2ⁿ−1)/(2−1) = 3(2ⁿ−1)' },
        { type: 'short', question: 'Given that log₂(x) = p and log₂(y) = q, express log₂(x²/√y) in terms of p and q', answer: '2p − q/2', marks: 2, explanation: 'log₂(x²/√y) = log₂(x²) − log₂(y^(1/2)) = 2log₂(x) − (1/2)log₂(y) = 2p − q/2' },
        { type: 'short', question: 'Rationalise the denominator of 5/(2 − √3)', answer: '5(2 + √3) or 10 + 5√3', marks: 2, explanation: 'Multiply numerator and denominator by (2+√3): 5(2+√3)/[(2−√3)(2+√3)] = 5(2+√3)/(4−3) = 5(2+√3)' },
        { type: 'essay', question: '(a) Show that x = 2 is a root of the equation x³ − 4x² + x + 6 = 0. [1]\n(b) Find all the roots of the equation x³ − 4x² + x + 6 = 0. [3]\n(c) Hence solve the inequality x³ − 4x² + x + 6 > 0. [2]', marks: 6 },
        { type: 'essay', question: 'The first term of an arithmetic progression is 5 and the common difference is 3.\n(a) Find the sum of the first 20 terms. [2]\n(b) The sum of the first n terms is  cracking 650. Find the value of n. [2]\n(c) A geometric progression has first term 2 and common ratio 3. Find the least value of n for which the sum of the first n terms exceeds 1000. [2]', marks: 6 }
      ]
    },
    {
      id: 'addmaths-2',
      title: 'Test 2: Trigonometry & Coordinate Geometry',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Express 5 sin x + 12 cos x in the form R sin(x + α)', options: ['13 sin(x + 67.4°)', '13 sin(x + 22.6°)', '17 sin(x + 67.4°)', '13 cos(x + 67.4°)'], answer: 0, marks: 1, explanation: 'R = √(25+144) = 13. tan α = 12/5, so α ≈ 67.4°' },
        { type: 'mcq', question: 'Find the perpendicular distance from point (3, −1) to the line 3x + 4y − 7 = 0', options: ['2/5', '2', '6/5', '12/5'], answer: 0, marks: 1, explanation: 'Distance = |3(3)+4(−1)−7|/√(9+16) = |9−4−7|/5 = 2/5' },
        { type: 'mcq', question: 'Solve tan 2x = 1 for 0° ≤ x ≤ 180°', options: ['22.5°, 112.5°', '45°, 135°', '22.5°, 67.5°', '45°, 225°'], answer: 0, marks: 1, explanation: '2x = 45°, 225°, so x = 22.5°, 112.5°' },
        { type: 'mcq', question: 'The angle between the lines y = 2x + 1 and y = −3x + 4 is approximately:', options: ['45°', '60°', '30°', '90°'], answer: 0, marks: 1, explanation: 'tan θ = |(m₁−m₂)/(1+m₁m₂)| = |(2+3)/(1−6)| = |5/(−5)| = 1, so θ = 45°' },
        { type: 'mcq', question: 'If sin A = 3/5 and cos B = 5/13 (A, B acute), find sin(A + B)', options: ['63/65', '56/65', '33/65', '16/65'], answer: 0, marks: 1, explanation: 'cos A = 4/5, sin B = 12/13. sin(A+B) = (3/5)(5/13) + (4/5)(12/13) = 15/65 + 48/65 = 63/65' },
        { type: 'mcq', question: 'The line passing through (1, 2) and (4, y) has gradient 2. Find y', options: ['8', '6', '10', '4'], answer: 0, marks: 1, explanation: '(y−2)/(4−1) = 2, so y−2 = 6, giving y = 8' },
        { type: 'mcq', question: 'Find the acute angle between the vectors (3, 4) and (4, −3)', options: ['90°', '45°', '60°', '30°'], answer: 0, marks: 1, explanation: 'Dot product = 12−12 = 0. Since dot product is zero, vectors are perpendicular, angle = 90°' },
        { type: 'mcq', question: 'The parametric equations x = 2t, y = t² represent:', options: ['A parabola', 'A circle', 'A straight line', 'An ellipse'], answer: 0, marks: 1, explanation: 'Eliminating t: t = x/2, so y = (x/2)² = x²/4, which is a parabola' },
        { type: 'short', question: 'Find the coordinates of the point where the line y = 2x − 3 meets the curve y = x² − 4x + 5', answer: '(2, 1) and (4, 5)', marks: 2, explanation: 'Set equal: x² − 4x + 5 = 2x − 3. x² − 6x + 8 = 0, (x−2)(x−4) = 0. x = 2 → y = 1; x = 4 → y = 5' },
        { type: 'short', question: 'Show that sin 3θ = 3 sin θ − 4 sin³ θ', answer: 'sin 3θ = sin(2θ+θ) = sin 2θ cos θ + cos 2θ sin θ = 2sin θ cos²θ + (1−2sin²θ)sin θ = 2sin θ(1−sin²θ) + sin θ − 2sin³θ = 3sin θ − 4sin³θ', marks: 2, explanation: 'Using compound angle and double angle formulas: sin(2θ+θ) expands to 3sin θ − 4sin³ θ' },
        { type: 'short', question: 'Find the equation of the circle with centre (−1, 2) and radius 3', answer: '(x + 1)² + (y − 2)² = 9', marks: 2, explanation: 'Standard form: (x − a)² + (y − b)² = r². Substituting: (x+1)² + (y−2)² = 9' },
        { type: 'short', question: 'Solve 2 sin² x − sin x − 1 = 0 for 0° ≤ x ≤ 360°', answer: '90°, 210°, 330°', marks: 2, explanation: 'Let u = sin x. 2u² − u − 1 = 0, (2u+1)(u−1) = 0. sin x = 1 → x = 90°; sin x = −0.5 → x = 210°, 330°' },
        { type: 'essay', question: '(a) Prove the identity: (1 + tan²θ)/sec²θ = 1. [2]\n(b) Solve the equation 3 cos² x + 2 sin x − 2 = 0 for 0° ≤ x ≤ 360°. [3]\n(c) Sketch the graph of y = 3 cos 2x for 0° ≤ x ≤ 360°, indicating the coordinates of the maximum and minimum points. [1]', marks: 6 },
        { type: 'essay', question: 'The points A(1, 2), B(4, 6) and C(7, 2) are vertices of a triangle.\n(a) Find the equation of the perpendicular bisector of AB. [2]\n(b) Show that the triangle ABC is isosceles. [2]\n(c) Find the area of triangle ABC. [2]', marks: 6 }
      ]
    },
    {
      id: 'addmaths-3',
      title: 'Test 3: Calculus & Kinematics',
      difficulty: 'Hard',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Differentiate y = ln(3x² + 1)', options: ['6x/(3x² + 1)', '1/(3x² + 1)', '6x', 'ln(6x)'], answer: 0, marks: 1, explanation: 'dy/dx = (6x)/(3x² + 1) by chain rule' },
        { type: 'mcq', question: 'Find ∫(1/x) dx', options: ['ln|x| + c', '1/x² + c', 'x ln x + c', 'eˣ + c'], answer: 0, marks: 1, explanation: 'Standard integral: ∫(1/x)dx = ln|x| + c' },
        { type: 'mcq', question: 'A particle moves with velocity v = 3t² − 4t + 2. Find its acceleration at t = 2', options: ['8', '6', '10', '4'], answer: 0, marks: 1, explanation: 'a = dv/dt = 6t − 4. At t = 2: a = 12 − 4 = 8 m/s²' },
        { type: 'mcq', question: 'Evaluate ∫₀¹ e²ˣ dx', options: ['(e² − 1)/2', 'e² − 1', '(e − 1)/2', 'e²/2'], answer: 0, marks: 1, explanation: '[e²ˣ/2]₀¹ = (e²/2) − (1/2) = (e² − 1)/2' },
        { type: 'mcq', question: 'The curve y = x³ − 3x has a point of inflection at:', options: ['x = 0', 'x = 1', 'x = −1', 'x = 2'], answer: 0, marks: 1, explanation: 'd²y/dx² = 6x = 0 at x = 0. Checking sign change confirms inflection at x = 0' },
        { type: 'mcq', question: 'Differentiate y = x²eˣ', options: ['xeˣ(x + 2)', '2xeˣ', 'x²eˣ', 'eˣ(x + 2)'], answer: 0, marks: 1, explanation: 'Using product rule: dy/dx = 2xeˣ + x²eˣ = xeˣ(2 + x)' },
        { type: 'mcq', question: 'Find the volume of revolution when y = √x from x = 0 to x = 4 is rotated 360° about the x-axis', options: ['8π', '4π', '16π', '2π'], answer: 0, marks: 1, explanation: 'V = π∫₀⁴ x dx = π[x²/2]₀⁴ = π(8 − 0) = 8π' },
        { type: 'mcq', question: 'A particle has displacement s = t³ − 6t² + 9t. Find when it is at rest', options: ['t = 1 and t = 3', 't = 0 and t = 3', 't = 1 and t = 2', 't = 2 and t = 4'], answer: 0, marks: 1, explanation: 'v = ds/dt = 3t² − 12t + 9 = 3(t² − 4t + 3) = 3(t−1)(t−3) = 0. t = 1 or 3' },
        { type: 'short', question: 'Find the equation of the normal to the curve y = x² + 3x − 1 at the point where x = 2', answer: '5y + x − 33 = 0 or y = −0.2x + 6.6', marks: 2, explanation: 'At x=2, y=9. dy/dx = 2x+3 = 7 at x=2. Gradient of normal = −1/7. Equation: y−9 = (−1/7)(x−2), giving 7y−63 = −x+2, so x+7y−65 = 0. [Note: rechecking: y = x²+3x−1, at x=2, y=4+6−1=9. dy/dx=2x+3=7. Normal slope = −1/7. y−9 = −1/7(x−2) → 7y−63 = −x+2 → x+7y = 65]' },
        { type: 'short', question: 'Using the substitution u = x² + 1, evaluate ∫₀² x(x² + 1)³ dx', answer: '165/4 or 41.25', marks: 2, explanation: 'u = x²+1, du = 2x dx. When x=0, u=1; x=2, u=5. Integral = ½∫₁⁵ u³ du = ½[u⁴/4]₁⁵ = ½(625/4 − 1/4) = ½(624/4) = 624/8 = 78. [Rechecking: ½ × (625−1)/4 = ½ × 624/4 = 312/4 = 78]' },
        { type: 'short', question: 'A particle moves in a straight line with acceleration a = 4t − 2. Given that v = 3 when t = 1 and s = 5 when t = 1, find v and s when t = 2', answer: 'v = 5, s = 37/3 or 12⅓', marks: 2, explanation: 'v = ∫(4t−2)dt = 2t² − 2t + c. v(1)=3: 2−2+c=3, c=3. v=2t²−2t+3. v(2)=8−4+3=7. s = ∫v dt = (2/3)t³ − t² + 3t + d. s(1)=5: 2/3−1+3+d=5, d=5/3. s(2)=16/3−4+6+5/3=21/3+2=9. [Rechecking: at t=2, v=2(4)−4+3=7; s=(2/3)(8)−4+6+5/3=16/3+2+5/3=21/3+2=7+2=9]' },
        { type: 'short', question: 'Find the area between the curve y = x² − 4 and the x-axis', answer: '32/3 or 10⅔', marks: 2, explanation: 'Curve crosses x-axis at x = ±2. Area = ∫₋₂² (x²−4)dx (take absolute value) = |[x³/3 − 4x]₋₂²| = |(8/3−8)−(−8/3+8)| = |(8/3−24/3)−(16/3)| = |−16/3 − 16/3| = 32/3' },
        { type: 'essay', question: 'The curve C has equation y = x³ − 3x² + 4.\n(a) Find dy/dx and d²y/dx². [2]\n(b) Find the coordinates of the stationary points of C and determine their nature. [3]\n(c) Find the equation of the tangent to C at the point where x = 1. [1]', marks: 6 },
        { type: 'essay', question: 'A particle P moves in a straight line so that its velocity v m/s at time t seconds is given by v = 6t − t² for 0 ≤ t ≤ 6.\n(a) Find the acceleration of P when t = 2. [1]\n(b) Find the maximum velocity of P. [2]\n(c) Find the distance travelled by P in the interval 0 ≤ t ≤ 6. [3]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['economics'] = {
  name: 'Economics',
  tests: [
    {
      id: 'econ-1',
      title: 'Test 1: Microeconomics — Market Structures & Consumer Theory',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which market structure features many firms selling differentiated products?', options: ['Monopolistic competition', 'Perfect competition', 'Oligopoly', 'Monopoly'], answer: 0, marks: 1, explanation: 'Monopolistic competition has many firms with differentiated products, e.g., restaurants or hair salons' },
        { type: 'mcq', question: 'The law of diminishing marginal utility states that:', options: ['Additional satisfaction decreases as consumption increases', 'Total utility always increases', 'Price falls as quantity increases', 'Marginal utility is always positive'], answer: 0, marks: 1, explanation: 'As a consumer consumes more units, the additional satisfaction (marginal utility) from each extra unit declines' },
        { type: 'mcq', question: 'A firm maximises profit where:', options: ['MR = MC', 'AR = AC', 'P = MC', 'TR = TC'], answer: 0, marks: 1, explanation: 'Profit is maximised at the output level where marginal revenue equals marginal cost (MR = MC)' },
        { type: 'mcq', question: 'Consumer surplus is:', options: ['Difference between willingness to pay and actual price', 'Total amount consumers spend', 'Profit earned by consumers', 'Excess supply in the market'], answer: 0, marks: 1, explanation: 'Consumer surplus is the difference between what consumers are willing to pay and what they actually pay' },
        { type: 'mcq', question: 'In perfect competition, long-run equilibrium occurs when:', options: ['P = MC = minimum AC', 'P > AC', 'MR > MC', 'P = MR only'], answer: 0, marks: 1, explanation: 'In long-run perfect competition, firms earn normal profit where price equals both marginal cost and minimum average cost' },
        { type: 'mcq', question: 'An indifference curve shows:', options: ['Combinations of goods giving equal satisfaction', 'Combinations of goods with equal cost', 'Goods that are perfect substitutes', 'Maximum utility achievable'], answer: 0, marks: 1, explanation: 'An indifference curve shows all combinations of two goods that provide the consumer with the same level of utility' },
        { type: 'mcq', question: 'Price elasticity of demand is calculated as:', options: ['% change in quantity demanded / % change in price', '% change in price / % change in quantity', 'Change in total revenue / change in price', 'Slope of the demand curve'], answer: 0, marks: 1, explanation: 'PED = (%ΔQd)/(%ΔP), measuring responsiveness of quantity demanded to price changes' },
        { type: 'mcq', question: 'A monopoly maximises profit by producing where:', options: ['MR = MC', 'P = AC', 'P = minimum AC', 'AR = MR'], answer: 0, marks: 1, explanation: 'Like all firms, a monopoly maximises profit where marginal revenue equals marginal cost, then charges the price consumers will pay' },
        { type: 'short', question: 'Explain why a firm in perfect competition is a price taker', answer: 'There are many buyers and sellers, homogeneous products, perfect information, and free entry/exit. No individual firm can influence market price.', marks: 2, explanation: 'In perfect competition, the market determines price. Each firm is so small relative to the market that its output decision cannot affect price, so it must accept the market price' },
        { type: 'short', question: 'Distinguish between economies of scale and diseconomies of scale', answer: 'Economies of scale: LRAC falls as output increases (technical, managerial, financial, purchasing). Diseconomies of scale: LRAC rises as output increases (coordination problems, communication breakdown, worker alienation).', marks: 2, explanation: 'Economies of scale reduce average costs with increased scale; diseconomies increase average costs beyond an optimal firm size' },
        { type: 'short', question: 'Calculate total revenue and marginal revenue when a monopolist sells 5 units at $10 each and 6 units at $9 each', answer: 'TR at 5 units = $50; TR at 6 units = $54; MR of 6th unit = $4', marks: 2, explanation: 'TR = P × Q. At Q=5, TR=50. At Q=6, TR=54. MR = ΔTR/ΔQ = (54−50)/(6−5) = 4' },
        { type: 'short', question: 'State two conditions necessary for price discrimination to be possible', answer: '(1) Market power / price-setting ability; (2) Ability to separate markets / prevent resale (market seepage); (3) Different price elasticities of demand in different markets.', marks: 2, explanation: 'Price discrimination requires: (1) some monopoly power, (2) ability to segment markets and prevent arbitrage, (3) different elasticities across markets' },
        { type: 'essay', question: '(a) Explain how a firm operating in monopolistic competition determines its profit-maximising price and output in the short run. Use a diagram to support your answer. [4]\n(b) Discuss whether firms in monopolistic competition are productively and allocatively efficient in the long run. [2]', marks: 6 },
        { type: 'essay', question: '(a) Using indifference curve analysis, explain how a consumer maximises utility given a budget constraint. [3]\n(b) Explain how the price-consumption curve can be used to derive a demand curve. [3]', marks: 6 }
      ]
    },
    {
      id: 'econ-2',
      title: 'Test 2: Macroeconomics — National Income & Fiscal Policy',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'GDP deflator is calculated as:', options: ['Nominal GDP / Real GDP × 100', 'Real GDP / Nominal GDP × 100', 'CPI × 100', 'Nominal GDP − Real GDP'], answer: 0, marks: 1, explanation: 'GDP deflator = (Nominal GDP / Real GDP) × 100, measuring price changes of all domestically produced goods' },
        { type: 'mcq', question: 'The multiplier effect occurs because:', options: ['One person\'s spending becomes another\'s income', 'Government spending always increases', 'Taxes reduce disposable income', 'Investment is autonomous'], answer: 0, marks: 1, explanation: 'The multiplier works because initial spending creates income, which leads to further consumption spending in successive rounds' },
        { type: 'mcq', question: 'Which is an injection into the circular flow of income?', options: ['Investment', 'Savings', 'Taxes', 'Imports'], answer: 0, marks: 1, explanation: 'Injections (I, G, X) add to circular flow; leakages (S, T, M) withdraw from it' },
        { type: 'mcq', question: 'Fiscal policy involves changes in:', options: ['Government spending and taxation', 'Interest rates and money supply', 'Exchange rates', 'Wage levels'], answer: 0, marks: 1, explanation: 'Fiscal policy uses government spending and taxation to influence aggregate demand and economic activity' },
        { type: 'mcq', question: 'The marginal propensity to consume (MPC) is:', options: ['ΔC/ΔY', 'C/Y', '1 − MPS', 'Both A and C'], answer: 3, marks: 1, explanation: 'MPC = change in consumption / change in income (ΔC/ΔY), and since MPC + MPS = 1, MPC = 1 − MPS' },
        { type: 'mcq', question: 'Cost-push inflation is caused by:', options: ['Increases in production costs', 'Excessive aggregate demand', 'Expansionary monetary policy', 'Rapid money supply growth'], answer: 0, marks: 1, explanation: 'Cost-push inflation arises from rising input costs (wages, raw materials) shifting SRAS leftward' },
        { type: 'mcq', question: 'If MPC = 0.8, the value of the multiplier is:', options: ['5', '4', '8', '1.25'], answer: 0, marks: 1, explanation: 'Multiplier = 1/(1−MPC) = 1/0.2 = 5' },
        { type: 'mcq', question: 'Real GDP is nominal GDP adjusted for:', options: ['Price changes', 'Population growth', 'Exchange rate changes', 'Interest rate changes'], answer: 0, marks: 1, explanation: 'Real GDP = Nominal GDP adjusted for inflation, using base-year prices to measure actual output changes' },
        { type: 'short', question: 'Distinguish between structural unemployment and cyclical unemployment', answer: 'Structural: mismatch between worker skills and job requirements due to economic structure changes. Cyclical: caused by deficient aggregate demand during recessions.', marks: 2, explanation: 'Structural unemployment is long-term and requires retraining; cyclical unemployment fluctuates with the business cycle and can be addressed by demand management' },
        { type: 'short', question: 'Calculate the value of the multiplier if MPS = 0.25 and MP M = 0.15', answer: '2.5', marks: 2, explanation: 'Multiplier = 1/(MPS + MPM) = 1/(0.25 + 0.15) = 1/0.4 = 2.5' },
        { type: 'short', question: 'Explain two limitations of using GDP as a measure of economic welfare', answer: '(1) GDP ignores income distribution and inequality. (2) GDP excludes non-market activities (household production, volunteer work) and externalities (pollution, environmental degradation).', marks: 2, explanation: 'GDP measures market activity but not wellbeing: it ignores distribution, environmental costs, leisure, and underground/informal economies' },
        { type: 'short', question: 'State and explain the accelerator principle', answer: 'The accelerator principle states that investment depends on the rate of change of output/consumption, not the level. A small change in consumer demand can trigger a larger change in investment.', marks: 2, explanation: 'Net investment is proportional to the change in output: I = vΔY, where v is the capital-output ratio. This explains why investment is volatile' },
        { type: 'essay', question: '(a) Explain how the circular flow of income model illustrates the relationship between injections and leakages. [3]\n(b) Discuss the factors that may reduce the size of the Keynesian multiplier in an open economy. [3]', marks: 6 },
        { type: 'essay', question: '(a) Explain the difference between demand-pull and cost-push inflation using AD-AS analysis. [3]\n(b) Evaluate the effectiveness of fiscal policy as a tool to control inflation while maintaining economic growth. [3]', marks: 6 }
      ]
    },
    {
      id: 'econ-3',
      title: 'Test 3: International Economics & Development',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'A country has a comparative advantage in producing a good when:', options: ['It has a lower opportunity cost', 'It has lower absolute costs', 'It can produce more output', 'It has more resources'], answer: 0, marks: 1, explanation: 'Comparative advantage exists when a country can produce at lower opportunity cost, not necessarily lower absolute cost' },
        { type: 'mcq', question: 'Which of the following is a tariff?', options: ['A tax on imported goods', 'A limit on import quantity', 'A subsidy to exporters', 'A voluntary export restraint'], answer: 0, marks: 1, explanation: 'A tariff is a tax on imports, raising domestic price and reducing quantity imported' },
        { type: 'mcq', question: 'The terms of trade is calculated as:', options: ['(Index of export prices / Index of import prices) × 100', 'Export value − Import value', 'Export quantity / Import quantity', 'GDP / Trade volume'], answer: 0, marks: 1, explanation: 'Terms of trade = (Price index of exports / Price index of imports) × 100' },
        { type: 'mcq', question: 'A balance of payments deficit on the current account means:', options: ['Imports of goods/services exceed exports', 'Capital inflows exceed outflows', 'Foreign reserves are increasing', 'The currency is overvalued'], answer: 0, marks: 1, explanation: 'Current account deficit: payments to abroad exceed receipts, i.e., imports > exports in goods, services, income, and transfers' },
        { type: 'mcq', question: 'Purchasing power parity (PPP) theory suggests exchange rates adjust to reflect:', options: ['Differences in inflation rates', 'Interest rate differentials', 'Trade balances', 'Government debt levels'], answer: 0, marks: 1, explanation: 'PPP states exchange rates adjust so identical goods cost the same in different countries; driven by relative inflation differentials' },
        { type: 'mcq', question: 'Which policy would most likely improve a current account deficit?', options: ['Currency depreciation', 'Expansionary fiscal policy', 'Increase in government spending', 'Reduction in interest rates'], answer: 0, marks: 1, explanation: 'Currency depreciation makes exports cheaper and imports dearer, improving competitiveness and reducing deficit' },
        { type: 'mcq', question: 'The Human Development Index (HDI) includes all EXCEPT:', options: ['GDP per capita growth rate', 'Life expectancy', 'Mean years of schooling', 'GNI per capita'], answer: 0, marks: 1, explanation: 'HDI combines life expectancy, education (mean years of schooling, expected years of schooling), and GNI per capita, not GDP growth rate' },
        { type: 'mcq', question: 'A currency appreciation will likely:', options: ['Reduce export price competitiveness', 'Increase inflation', 'Improve current account immediately', 'Stimulate domestic demand'], answer: 0, marks: 1, explanation: 'Appreciation makes exports more expensive in foreign currency and imports cheaper, reducing export competitiveness' },
        { type: 'short', question: 'Explain two arguments in favour of free trade', answer: '(1) Comparative advantage: countries specialise, increasing global output and welfare. (2) Lower prices and greater choice for consumers through access to wider variety of goods.', marks: 2, explanation: 'Free trade promotes efficiency through specialisation, economies of scale, competitive pricing, technology transfer, and consumer choice' },
        { type: 'short', question: 'Distinguish between foreign direct investment (FDI) and portfolio investment', answer: 'FDI: long-term investment in physical assets/business operations with management control (e.g., building a factory). Portfolio investment: short-term financial investment in stocks/bonds without management control.', marks: 2, explanation: 'FDI involves lasting interest and control (>10% ownership); portfolio investment is purely financial and more volatile' },
        { type: 'short', question: 'Explain the Marshall-Lerner condition for a depreciation to improve the current account', answer: 'The sum of price elasticities of demand for exports and imports must be greater than 1 (|PEDx| + |PEDm| > 1).', marks: 2, explanation: 'If elasticities sum > 1, the volume effect of changed trade flows outweighs the price effect, improving the trade balance' },
        { type: 'short', question: 'State two reasons why developing countries may struggle to achieve economic growth', answer: '(1) Low savings and investment leading to capital shortages. (2) Poor infrastructure, education, and healthcare limiting productivity. (3) Corruption, political instability, or over-reliance on primary commodities.', marks: 2, explanation: 'Developing countries face structural barriers: capital scarcity, weak institutions, debt burdens, commodity price volatility, and limited access to technology' },
        { type: 'essay', question: '(a) Explain the theory of comparative advantage and how it forms the basis for international trade. [3]\n(b) Discuss two limitations of the comparative advantage theory in explaining modern trade patterns. [3]', marks: 6 },
        { type: 'essay', question: '(a) Explain how a fixed exchange rate system operates and the role of central bank intervention. [3]\n(b) Evaluate the advantages and disadvantages of maintaining a fixed exchange rate regime for a developing economy. [3]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['geography'] = {
  name: 'Geography',
  tests: [
    {
      id: 'geo-1',
      title: 'Test 1: Physical Geography — Rivers & Coasts',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'Which process is primarily responsible for hydraulic action in rivers?', options: ['Force of water against river bed and banks', 'Dissolving of soluble rocks', 'Friction between sediment and bed', 'Abrasion by suspended particles'], answer: 0, marks: 1, explanation: 'Hydraulic action: the sheer force of water dislodges particles from river banks and bed' },
        { type: 'mcq', question: 'A river\'s load is deposited when:', options: ['Energy decreases below critical level', 'Velocity increases', 'Discharge increases', 'Gradient steepens'], answer: 0, marks: 1, explanation: 'Deposition occurs when a river loses energy and can no longer transport its load (Hjulström diagram)' },
        { type: 'mcq', question: 'A spit is formed by:', options: ['Longshore drift where coastline changes direction', 'River deposition at the mouth', 'Tidal erosion', 'Sub-aerial weathering'], answer: 0, marks: 1, explanation: 'Spits form when longshore drift transports sediment along coast and deposits it where coastline changes direction or in sheltered areas' },
        { type: 'mcq', question: 'Which landform is created by fluvial erosion?', options: ['Waterfall', 'Beach', 'Delta', 'Spit'], answer: 0, marks: 1, explanation: 'Waterfalls form through differential erosion of hard/soft rock in river channels. Beaches, deltas, and spits are depositional' },
        { type: 'mcq', question: 'The long profile of a river is typically:', options: ['Concave', 'Convex', 'Straight', 'Rectangular'], answer: 0, marks: 1, explanation: 'Rivers typically have a concave long profile: steep in upper course, gentle in lower course, forming a smooth curve' },
        { type: 'mcq', question: 'A stack is formed through:', options: ['Erosion of a headland through wave attack', 'River deposition', 'Tectonic uplift', 'Glacial plucking'], answer: 0, marks: 1, explanation: 'Stacks form when wave erosion creates caves, arches, and eventually isolated columns of rock on headlands' },
        { type: 'mcq', question: 'The Hjulström diagram shows the relationship between:', options: ['Velocity and particle erosion/deposition/transport', 'River discharge and velocity', 'Load size and river gradient', 'Precipitation and runoff'], answer: 0, marks: 1, explanation: 'The Hjulström diagram graphs velocity against particle size, showing thresholds for erosion, transport, and deposition' },
        { type: 'mcq', question: 'Saltation describes:', options: ['Load bouncing along the river bed', 'Dissolved load transport', 'Suspension of fine particles', 'Pebbles rolling along bed'], answer: 0, marks: 1, explanation: 'Saltation: particles bounce along the bed in a series of jumps, intermediate between traction and suspension' },
        { type: 'short', question: 'Explain how a meander neck cutoff forms an oxbow lake', answer: 'Erosion on the outer bend and deposition on the inner bend narrow the meander neck. During flood, the river breaks through the neck. Deposition seals off the old bend, creating an oxbow lake.', marks: 2, explanation: 'Lateral erosion narrows neck; eventual breaching during high discharge; subsequent deposition at cutoff point isolates the old channel' },
        { type: 'short', question: 'Distinguish between traction and suspension in river transport', answer: 'Traction: large particles rolled along river bed by water force. Suspension: very fine particles carried within the water column by turbulence.', marks: 2, explanation: 'Traction involves bedload rolling/sliding; suspension involves washload and fine silt/clay carried in the flow' },
        { type: 'short', question: 'Name and explain two factors affecting river discharge', answer: '(1) Precipitation: more rainfall increases discharge. (2) Geology: impermeable rocks increase runoff and discharge; permeable rocks reduce it. (3) Vegetation: intercepts rainfall, reducing discharge.', marks: 2, explanation: 'Discharge (Q = A × V) is influenced by precipitation, catchment characteristics, geology, land use, vegetation, and antecedent conditions' },
        { type: 'short', question: 'Describe the process of attrition in coastal erosion', answer: 'Rocks and pebbles carried by waves collide with each other and the cliff, breaking into smaller, rounded fragments.', marks: 2, explanation: 'Attrition: particles hit each other and the coast, becoming smaller, smoother, and more rounded over time' },
        { type: 'essay', question: '(a) Explain the factors that influence the rate of coastal erosion along a headland. [3]\n(b) With reference to a named example, describe and explain the landforms produced by coastal erosion along a discordant coastline. [3]', marks: 6 },
        { type: 'essay', question: '(a) Explain how river rejuvenation occurs and identify the landforms associated with it. [3]\n(b) Discuss the impact of human activity on river channel processes and river morphology. [3]', marks: 6 }
      ]
    },
    {
      id: 'geo-2',
      title: 'Test 2: Human Geography — Urbanisation & Settlement',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The Burgess concentric zone model is based on:', options: ['Bid rent theory and distance from CBD', 'Transport routes radiating from centre', 'Multiple nuclei', 'Sectoral growth along transport lines'], answer: 0, marks: 1, explanation: 'Burgess (1925) proposed concentric zones based on land value decreasing with distance from CBD (bid-rent theory)' },
        { type: 'mcq', question: 'Counter-urbanisation refers to:', options: ['Movement from urban to rural areas', 'Growth of primate cities', 'Rural-to-urban migration', 'Urban sprawl'], answer: 0, marks: 1, explanation: 'Counter-urbanisation: net migration of people from urban to rural areas, often by retirees or remote workers' },
        { type: 'mcq', question: 'A primate city is defined as:', options: ['A city dominating its country in size and influence', 'The first city in a country', 'A city with planned development', 'A capital city'], answer: 0, marks: 1, explanation: 'Primate city: largest city is disproportionately large compared to second city (e.g., Paris, Bangkok, Mexico City)' },
        { type: 'mcq', question: 'Gentrification typically involves:', options: ['Wealthier residents moving into lower-income areas', 'Industrial relocation', 'Government-built housing', 'Rural depopulation'], answer: 0, marks: 1, explanation: 'Gentrification: higher-income households move into traditionally working-class areas, renovating properties and changing neighbourhood character' },
        { type: 'mcq', question: 'The rank-size rule states that:', options: ['nth largest city is 1/n the size of the largest', 'Cities grow in concentric zones', 'Primate cities dominate', 'Urban hierarchy is random'], answer: 0, marks: 1, explanation: 'Rank-size rule: population of nth city ≈ population of largest city / n. Works in developed countries with balanced urban systems' },
        { type: 'mcq', question: 'Which is a push factor for rural-urban migration?', options: ['Lack of employment in rural areas', 'Better healthcare in cities', 'Higher wages in urban areas', 'Educational opportunities'], answer: 0, marks: 1, explanation: 'Push factors drive people away from origin (poverty, unemployment, drought); pull factors attract to destination' },
        { type: 'mcq', question: 'An informal settlement is characterised by:', options: ['Self-built housing without legal tenure', 'Government-planned apartments', 'High-rise commercial buildings', 'Suburban gated communities'], answer: 0, marks: 1, explanation: 'Informal settlements (favelas, slums, shantytowns) feature self-built housing on squatted land with limited services/tenure' },
        { type: 'mcq', question: 'Urban sprawl is best described as:', options: ['Unplanned expansion of urban areas into rural land', 'Compact high-density development', 'Vertical growth of CBD', 'Planned new town development'], answer: 0, marks: 1, explanation: 'Urban sprawl: low-density, car-dependent expansion of urban areas into surrounding countryside, often poorly planned' },
        { type: 'short', question: 'Explain two causes of urbanisation in developing countries', answer: '(1) Rural push: mechanisation reduces agricultural jobs; land fragmentation; drought/famine. (2) Urban pull: perceived job opportunities, better services (health, education),Bright lights effect.', marks: 2, explanation: 'Urbanisation in LICs driven by rural deprivation (push) and urban economic opportunities/services (pull), plus natural increase' },
        { type: 'short', question: 'Distinguish between site and situation of a settlement', answer: 'Site: the actual land upon which a settlement is built (physical characteristics). Situation: the location of a settlement relative to surrounding features and other settlements.', marks: 2, explanation: 'Site = physical characteristics of the land; situation = relative location and connectivity to other places' },
        { type: 'short', question: 'Describe two problems associated with rapid urbanisation in developing world cities', answer: '(1) Housing shortages leading to informal settlements without sanitation/electricity. (2) Traffic congestion and pollution from inadequate infrastructure. (3) Unemployment and urban poverty.', marks: 2, explanation: 'Rapid urbanisation causes infrastructure strain: housing deficits, service provision gaps, unemployment, congestion, pollution, and health risks' },
        { type: 'short', question: 'Explain how the bid-rent theory influences urban land use patterns', answer: 'Land closer to the CBD has higher accessibility and therefore higher rent. Commercial users can pay most, followed by industry, then residents, creating concentric land use zones.', marks: 2, explanation: 'Bid-rent theory: land goes to highest bidder. Commercial activities outbid others for central locations; residential uses locate further out where land is cheaper' },
        { type: 'essay', question: '(a) Explain how the Hoyt sector model describes urban structure. [3]\n(b) Evaluate the applicability of the Hoyt model to modern cities in developing countries. [3]', marks: 6 },
        { type: 'essay', question: '(a) Describe the characteristics of world cities and explain their role in the global economy. [3]\n(b) Discuss the social and economic challenges faced by megacities in the developing world. [3]', marks: 6 }
      ]
    },
    {
      id: 'geo-3',
      title: 'Test 3: Environmental Management & Global Issues',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The greenhouse effect is primarily caused by:', options: ['Trace gases absorbing outgoing longwave radiation', 'Ozone depletion', 'Solar radiation increase', 'Acid rain'], answer: 0, marks: 1, explanation: 'Greenhouse gases (CO₂, CH₄, N₂O, water vapour) absorb and re-emit infrared radiation, warming the atmosphere' },
        { type: 'mcq', question: 'Desertification is best defined as:', options: ['Degradation of land in arid areas due to human activity/climate', 'Expansion of existing deserts', 'Formation of new deserts', 'Drought in semi-arid regions'], answer: 0, marks: 1, explanation: 'Desertification: land degradation in drylands resulting from climatic variations and human activities (UNCCD definition)' },
        { type: 'mcq', question: 'Which is a renewable energy source?', options: ['Geothermal', 'Natural gas', 'Coal', 'Nuclear fission'], answer: 0, marks: 1, explanation: 'Geothermal energy from Earth\'s heat is renewable. Coal, natural gas are fossil fuels; nuclear fission uses finite uranium' },
        { type: 'mcq', question: 'Biodiversity hot spots are defined by:', options: ['High species endemism and significant habitat loss', 'Large total area', 'High population density', 'Cold climate regions'], answer: 0, marks: 1, explanation: 'Hotspots (Myers) contain ≥1500 endemic vascular plant species and have lost ≥70% of original habitat' },
        { type: 'mcq', question: 'The tragedy of the commons refers to:', options: ['Overuse of shared resources by individuals acting independently', 'Government ownership of resources', 'Sustainable resource management', 'Private property rights'], answer: 0, marks: 1, explanation: 'Hardin (1968): individuals acting in self-interest deplete shared resources, leading to collective ruin' },
        { type: 'mcq', question: 'Acid rain is primarily caused by emissions of:', options: ['Sulphur dioxide and nitrogen oxides', 'Carbon dioxide and methane', 'CFCs and halons', 'Ammonia and ozone'], answer: 0, marks: 1, explanation: 'SO₂ and NOₓ from burning fossil fuels react with water to form sulphuric and nitric acids' },
        { type: 'mcq', question: 'Sustainable development is defined as development that:', options: ['Meets present needs without compromising future generations', 'Maximises economic growth', 'Preserves all natural environments', 'Promotes industrialisation'], answer: 0, marks: 1, explanation: 'Brundtland Commission (1987): meeting needs of the present without compromising ability of future generations' },
        { type: 'mcq', question: 'El Niño events are characterised by:', options: ['Warmer than average sea surface temperatures in the eastern Pacific', 'Colder water off Peru', 'Enhanced upwelling', 'Stronger trade winds'], answer: 0, marks: 1, explanation: 'El Niño: weakening/reversal of trade winds causes warm water to slosh eastward across Pacific, disrupting global weather' },
        { type: 'short', question: 'Explain two human causes of deforestation', answer: '(1) Commercial logging for timber and pulp. (2) Agricultural expansion (cattle ranching, soybean/palm oil plantations). (3) Subsistence farming and fuelwood collection.', marks: 2, explanation: 'Deforestation drivers: commercial agriculture, logging, infrastructure, mining, and subsistence pressures in tropical regions' },
        { type: 'short', question: 'Distinguish between mitigation and adaptation strategies for climate change', answer: 'Mitigation: reducing greenhouse gas emissions (renewable energy, afforestation, efficiency). Adaptation: adjusting to actual or expected climate effects (flood defences, drought-resistant crops, coastal managed retreat).', marks: 2, explanation: 'Mitigation addresses causes (emissions reduction); adaptation addresses impacts (adjusting systems to cope with changes)' },
        { type: 'short', question: 'Describe two international approaches to managing transboundary pollution', answer: '(1) International treaties/protocols (Montreal Protocol, Paris Agreement). (2) UN agencies and frameworks (UNFCCC, UNEP). (3) Regional agreements on shared water bodies/airsheds.', marks: 2, explanation: 'Transboundary issues require international cooperation through binding agreements, monitoring frameworks, and financial mechanisms' },
        { type: 'short', question: 'Explain how watershed management can reduce the risk of flooding', answer: 'Afforestation increases interception and infiltration. Terracing and contour ploughing reduce runoff velocity. Wetland restoration stores floodwater. Dams regulate river flow.', marks: 2, explanation: 'Watershed management uses land-use planning, vegetation, soil conservation, and structural measures to regulate hydrological response' },
        { type: 'essay', question: '(a) Explain the causes and consequences of anthropogenic climate change. [3]\n(b) Evaluate the effectiveness of international agreements in addressing climate change. [3]', marks: 6 },
        { type: 'essay', question: '(a) Describe the causes and environmental impacts of water scarcity in one named region. [3]\n(b) Discuss strategies that can be used to achieve sustainable water management in arid and semi-arid environments. [3]', marks: 6 }
      ]
    }
  ]
};

subjectTestData['history'] = {
  name: 'History',
  tests: [
    {
      id: 'hist-1',
      title: 'Test 1: European History — French Revolution & Napoleon',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The Estates-General was convened in 1789 after:', options: ['France\'s financial crisis and failed tax reforms', 'The storming of the Bastille', 'The Tennis Court Oath', 'Napoleon\'s coup'], answer: 0, marks: 1, explanation: 'Louis XVI called the Estates-General in May 1789 to address bankruptcy caused by war debts and unfair tax system' },
        { type: 'mcq', question: 'The Tennis Court Oath (June 1789) pledged:', options: ['Not to disband until a constitution was written', 'Loyalty to the king', 'Support for Napoleon', 'Abolition of the monarchy'], answer: 0, marks: 1, explanation: 'Third Estate deputies swore at a Versailles tennis court not to separate until France had a constitution' },
        { type: 'mcq', question: 'The Civil Constitution of the Clergy (1790) required priests to:', options: ['Swear loyalty to the state', 'Pay no taxes', 'Leave France', 'Abolish sacraments'], answer: 0, marks: 1, explanation: 'The Civil Constitution brought the Church under state control and required clergy to swear an oath of loyalty, causing schism' },
        { type: 'mcq', question: 'The Reign of Terror was led by:', options: ['The Committee of Public Safety under Robespierre', 'The Girondins', 'The Directory', 'Napoleon Bonaparte'], answer: 0, marks: 1, explanation: 'The Committee of Public Safety, dominated by Robespierre, directed the Terror (1793–1794) to defend the Revolution' },
        { type: 'mcq', question: 'Napoleon\'s coup of 18 Brumaire overthrew:', options: ['The Directory', 'The Legislative Assembly', 'Louis XVI', 'The Committee of Public Safety'], answer: 0, marks: 1, explanation: 'Napoleon overthrew the corrupt and ineffective Directory in November 1799, establishing the Consulate' },
        { type: 'mcq', question: 'The Napoleonic Code was significant because it:', options: ['Established equality before the law and meritocracy', 'Abolished private property', 'Restored feudal privileges', 'Established universal suffrage'], answer: 0, marks: 1, explanation: 'Code Napoléon (1804) enshrined civil liberties, property rights, and legal equality, though it limited women\'s rights' },
        { type: 'mcq', question: 'The Continental System (1806) was designed to:', options: ['Blockade British trade with Europe', 'Invade Russia', 'Build a canal system', 'Reform French agriculture'], answer: 0, marks: 1, explanation: 'Napoleon\'s Continental System forbade European nations under French control from trading with Britain' },
        { type: 'mcq', question: 'The Congress of Vienna (1814–1815) aimed to:', options: ['Restore monarchies and balance of power after Napoleon', 'Create a unified Germany', 'Spread revolutionary ideas', 'Abolish serfdom'], answer: 0, marks: 1, explanation: 'Metternich and allies sought to restore legitimate monarchies, redraw boundaries, and prevent future French aggression' },
        { type: 'short', question: 'Explain two economic causes of the French Revolution', answer: '(1) Financial crisis: war debts, inefficient tax system, royal extravagance. (2) Bad harvests (1787–1788) increased bread prices and starvation. (3) Regressive taxation burdened Third Estate.', marks: 2, explanation: 'Economic causes: state bankruptcy, unfair tax exemption of clergy/nobility, rising bread prices, unemployment, and feudal dues' },
        { type: 'short', question: 'Describe the significance of the storming of the Bastille (14 July 1789)', answer: 'It symbolised the overthrow of royal tyranny and became a rallying point for revolutionary action. It demonstrated popular power and marked the start of violent revolution.', marks: 2, explanation: 'The Bastille was a royal fortress/prison. Its fall on 14 July 1789 became the symbol of the Revolution and France\'s national day' },
        { type: 'short', question: 'Distinguish between the Girondins and the Jacobins during the French Revolution', answer: 'Girondins: moderate republicans, provincial bourgeoisie, opposed centralised Parisian control, less radical. Jacobins: radical republicans, represented sans-culottes, supported centralised government and the Terror.', marks: 2, explanation: 'Girondins favoured federalism and were less extreme; Jacobins (Montagnards) dominated the Convention and instituted the Terror' },
        { type: 'short', question: 'Explain two reasons for Napoleon\'s defeat in Russia in 1812', answer: '(1) Scorched earth policy: Russians retreated, burning resources, denying French supplies. (2) Harsh winter and vast distances destroyed Grande Armée. (3) Overextended supply lines.', marks: 2, explanation: 'Napoleon\'s Russian campaign failed due to scorched earth tactics, logistical failures, winter, disease, and guerrilla resistance' },
        { type: 'essay', question: '(a) Explain the political, social, and economic grievances of the Third Estate in pre-revolutionary France. [4]\n(b) Assess the extent to which the French Revolution achieved its aims by 1799. [2]', marks: 6 },
        { type: 'essay', question: '(a) Explain how Napoleon consolidated his power in France between 1799 and 1804. [3]\n(b) Evaluate the impact of Napoleonic rule on the territories he conquered. [3]', marks: 6 }
      ]
    },
    {
      id: 'hist-2',
      title: 'Test 2: 20th Century History — World Wars & Cold War',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The immediate trigger for WWI was:', options: ['Assassination of Archduke Franz Ferdinand', 'German invasion of Belgium', 'Sinking of the Lusitania', 'Treaty of Versailles'], answer: 0, marks: 1, explanation: 'Gavrilo Princip, a Bosnian Serb nationalist, assassinated the Austro-Hungarian heir in Sarajevo on 28 June 1914' },
        { type: 'mcq', question: 'The Schlieffen Plan aimed to:', options: ['Defeat France quickly before Russia mobilised', 'Invade Britain by sea', 'Defend Germany on two fronts simultaneously', 'Ally with the Ottoman Empire'], answer: 0, marks: 1, explanation: 'Germany planned to defeat France in the west within 6 weeks, then turn east to face slower-mobilising Russia' },
        { type: 'mcq', question: 'The Treaty of Versailles (1919) required Germany to:', options: ['Accept war guilt and pay reparations', 'Cede all territory to France', 'Abolish its military permanently', 'Become a republic'], answer: 0, marks: 1, explanation: 'Article 231 (War Guilt Clause) assigned blame to Germany, which was required to pay massive reparations and cede territory' },
        { type: 'mcq', question: 'The policy of appeasement is most associated with:', options: ['Neville Chamberlain', 'Winston Churchill', 'Joseph Stalin', 'Franklin D. Roosevelt'], answer: 0, marks: 1, explanation: 'British Prime Minister Chamberlain pursued appeasement, most notably at Munich (1938), allowing Hitler to annex Sudetenland' },
        { type: 'mcq', question: 'The Molotov-Ribbentrop Pact (1939) was a:', options: ['Non-aggression pact between Nazi Germany and USSR', 'Military alliance against Britain', 'Trade agreement', 'Peace treaty with Poland'], answer: 0, marks: 1, explanation: 'The Nazi-Soviet Pact included a secret protocol dividing Eastern Europe into spheres of influence' },
        { type: 'mcq', question: 'The Truman Doctrine (1947) pledged to:', options: ['Contain communism through economic and military aid', 'Invade Eastern Europe', 'Create NATO', 'Rebuild Germany'], answer: 0, marks: 1, explanation: 'Truman pledged US support for free peoples resisting subjugation by armed minorities or outside pressures—beginning of containment' },
        { type: 'mcq', question: 'The Cuban Missile Crisis (1962) ended when:', options: ['Soviet missiles were withdrawn in exchange for US promises', 'US invaded Cuba', 'Soviet ships were sunk', 'Cuba joined NATO'], answer: 0, marks: 1, explanation: 'Khrushchev agreed to withdraw missiles; US promised not to invade Cuba and secretly agreed to remove Turkish missiles' },
        { type: 'mcq', question: 'Détente in the 1970s was characterised by:', options: ['Relaxation of Cold War tensions', 'Nuclear arms race escalation', 'Direct US-USSR military conflict', 'Creation of the Warsaw Pact'], answer: 0, marks: 1, explanation: 'Détente: period of reduced tensions, arms control treaties (SALT I, ABM), and increased trade/dialogue between superpowers' },
        { type: 'short', question: 'Explain two long-term causes of World War I', answer: '(1) Alliance system: Triple Alliance vs Triple Entente created rigid blocs. (2) Militarism: arms races (Dreadnought crisis) and mobilisation plans made war seem inevitable/winable. (3) Imperialism/nationalism.', marks: 2, explanation: 'Long-term causes: alliance system, militarism, imperialism, nationalism (Balkans), and economic rivalry between great powers' },
        { type: 'short', question: 'Describe the policy of containment and identify one example of its implementation', answer: 'Containment: US policy to prevent spread of communism beyond existing borders. Examples: Truman Doctrine aid to Greece/Turkey, Marshall Plan, Korean War, Vietnam War.', marks: 2, explanation: 'George Kennan (1947) advocated containing Soviet influence. Implemented through military alliances, economic aid, and proxy wars' },
        { type: 'short', question: 'Distinguish between the Yalta and Potsdam conferences in 1945', answer: 'Yalta (Feb): wartime cooperation, agreement on postwar division of Germany, UN planned. Potsdam (July): tensions visible; disagreements over reparations, Polish borders, and Soviet influence in Eastern Europe.', marks: 2, explanation: 'Yalta showed Allied cooperation; Potsdam revealed emerging divisions as Truman replaced Roosevelt and atomic bomb changed dynamics' },
        { type: 'short', question: 'Explain two reasons for the collapse of détente in the late 1970s', answer: '(1) Soviet invasion of Afghanistan (1979). (2) Deployment of SS-20 and Cruise/Pershing missiles in Europe. (3) Soviet human rights record (Helsinki Accords violations).', marks: 2, explanation: 'Détente collapsed due to Soviet aggression in Afghanistan, NATO missile deployment, Iranian Revolution, and renewed ideological competition' },
        { type: 'essay', question: '(a) Explain the role of the alliance system in bringing about the First World War. [3]\n(b) To what extent was the Treaty of Versailles responsible for the outbreak of the Second World War? [3]', marks: 6 },
        { type: 'essay', question: '(a) Explain the causes and consequences of the Berlin Blockade (1948–1949). [3]\n(b) Assess the impact of the arms race on the development of the Cold War between 1945 and 1962. [3]', marks: 6 }
      ]
    },
    {
      id: 'hist-3',
      title: 'Test 3: Decolonisation & Post-Colonial Africa',
      difficulty: 'Medium',
      duration: 30,
      questions: [
        { type: 'mcq', question: 'The Scramble for Africa was formalised by:', options: ['The Berlin Conference (1884–1885)', 'The Treaty of Versailles', 'The Congress of Vienna', 'The Yalta Conference'], answer: 0, marks: 1, explanation: 'Bismarck hosted the Berlin Conference to regulate European colonisation and trade in Africa, partitioning the continent' },
        { type: 'mcq', question: 'Ghana became the first sub-Saharan African colony to gain independence in:', options: ['1957', '1960', '1963', '1954'], answer: 0, marks: 1, explanation: 'Ghana (formerly Gold Coast) gained independence from Britain on 6 March 1957 under Kwame Nkrumah' },
        { type: 'mcq', question: 'The apartheid system in South Africa was established by:', options: ['The National Party in 1948', 'The African National Congress', 'The British colonial government', 'The Dutch East India Company'], answer: 0, marks: 1, explanation: 'The National Party won the 1948 election and formalised racial segregation laws known as apartheid' },
        { type: 'mcq', question: 'The Mau Mau Uprising (1952–1960) occurred in:', options: ['Kenya', 'Algeria', 'Vietnam', 'Congo'], answer: 0, marks: 1, explanation: 'The Mau Mau rebellion was a Kikuyu-led armed revolt against British colonial rule and white settler land ownership in Kenya' },
        { type: 'mcq', question: 'Pan-Africanism advocated for:', options: ['Unity and solidarity among African peoples', 'European control of Africa', 'Segregation of races', 'Military alliances with NATO'], answer: 0, marks: 1, explanation: 'Pan-Africanism promoted African unity, self-determination, and opposition to colonialism and racial discrimination' },
        { type: 'mcq', question: 'The Organisation of African Unity (OAU) was founded in:', options: ['1963', '1957', '1945', '1975'], answer: 0, marks: 1, explanation: 'The OAU was established in Addis Ababa, Ethiopia, in 1963 to promote solidarity and end colonialism (replaced by AU in 2002)' },
        { type: 'mcq', question: 'Patrice Lumumba was the first Prime Minister of:', options: ['Democratic Republic of Congo', 'Ghana', 'Kenya', 'Tanzania'], answer: 0, marks: 1, explanation: 'Lumumba led the DRC to independence in 1960 but was assassinated in 1961 during the Congo Crisis' },
        { type: 'mcq', question: 'The Rwandan Genocide (1994) primarily targeted:', options: ['Tutsi population and moderate Hutu', 'Hutu majority', 'Belgian colonists', 'Refugees from Uganda'], answer: 0, marks: 1, explanation: 'Extremist Hutu government and militias killed approximately 800,000 Tutsi and moderate Hutu in 100 days' },
        { type: 'short', question: 'Explain two factors that contributed to the decolonisation of Africa after 1945', answer: '(1) weakened European powers after WWII with reduced resources and will to maintain empires. (2) Rise of nationalist movements (Nkrumah, Kenyatta, Nyerere). (3) UN Charter and Atlantic Charter promoting self-determination.', marks: 2, explanation: 'Decolonisation driven by: weakened Europe, nationalist movements, Cold War pressures, international opinion, and economic costs of empire' },
        { type: 'short', question: 'Describe the role of Nelson Mandela in ending apartheid in South Africa', answer: 'Mandela led ANC armed resistance, imprisoned 1962–1990, became symbol of anti-apartheid struggle. After release, negotiated transition to democracy and became first black president (1994).', marks: 2, explanation: 'Mandela\'s leadership, sacrifice, and commitment to reconciliation were pivotal in dismantling apartheid and establishing democracy' },
        { type: 'short', question: 'Distinguish between direct and indirect rule as colonial administrative systems', answer: 'Direct rule: European officials administered colonies directly, replacing indigenous institutions (French, Portuguese). Indirect rule: traditional rulers retained with British oversight (e.g., Northern Nigeria under Lugard).', marks: 2, explanation: 'Direct rule imposed European systems; indirect rule co-opted traditional authorities, though both exploited colonies economically' },
        { type: 'short', question: 'Explain two economic legacies of colonialism in Africa', answer: '(1) Export-oriented economies dependent on single commodities (cash crops/minerals). (2) Infrastructure built for resource extraction rather than internal development. (3) Artificial borders creating ethnic tensions.', marks: 2, explanation: 'Colonial economic legacy: monoculture economies, infrastructure for extraction not integration, dependent trade relationships, and weak industrial bases' },
        { type: 'essay', question: '(a) Explain the causes of the Algerian War of Independence (1954–1962). [3]\n(b) Assess the impact of French colonial rule on Algerian society and economy. [3]', marks: 6 },
        { type: 'essay', question: '(a) Explain the challenges faced by newly independent African states in building stable nations. [3]\n(b) Evaluate the success and failures of the Organisation of African Unity in promoting continental cooperation. [3]', marks: 6 }
      ]
    }
  ]
};

