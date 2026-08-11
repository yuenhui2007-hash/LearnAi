const subjects = {
    physics: {
        name: 'Physics',
        code: '9702 (A-Level) · 0625 (IGCSE)',
        icon: '⚛️',
        topics: [
            { id: 'p1', title: 'Physical Quantities & Units', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p2', title: 'Kinematics & Dynamics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p3', title: 'Forces, Momentum & Energy', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p4', title: 'Waves & Optics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p5', title: 'Electricity & DC Circuits', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p6', title: 'Magnetism & Electromagnetism', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p7', title: 'Nuclear Physics & Radioactivity', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p8', title: 'Thermal Physics & Gases', alevel: true, igcse: true, as: false, a2: true },
            { id: 'p9', title: 'Oscillations & Waves (A2)', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p10', title: 'Electric & Gravitational Fields', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p11', title: 'Capacitance & Electromagnetism', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p12', title: 'Quantum & Particle Physics', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p13', title: 'Astrophysics & Cosmology', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p14', title: 'Practical Skills & Data Analysis', alevel: true, igcse: true, as: true, a2: true }
        ]
    },
    chemistry: {
        name: 'Chemistry',
        code: '9701 (A-Level) · 0620 (IGCSE)',
        icon: '🧪',
        topics: [
            { id: 'c1', title: 'Atomic Structure & Periodicity', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c2', title: 'Bonding & Structure', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c3', title: 'Stoichiometry & Calculations', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c4', title: 'Energetics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c5', title: 'Kinetics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c6', title: 'Equilibrium', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c7', title: 'Redox Reactions & Electrochemistry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c8', title: 'Inorganic Chemistry & Groups', alevel: true, igcse: true, as: false, a2: true },
            { id: 'c9', title: 'Organic Chemistry Fundamentals', alevel: true, igcse: true, as: false, a2: true },
            { id: 'c10', title: 'Hydrocarbons & Alcohols', alevel: true, igcse: true, as: false, a2: true },
            { id: 'c11', title: 'Carbonyl Compounds & Carboxylic Acids', alevel: true, igcse: false, as: false, a2: true },
            { id: 'c12', title: 'Nitrogen Compounds & Polymerisation', alevel: true, igcse: false, as: false, a2: true },
            { id: 'c13', title: 'Organic Synthesis & Analysis', alevel: true, igcse: false, as: false, a2: true },
            { id: 'c14', title: 'Practical Skills', alevel: true, igcse: true, as: true, a2: true }
        ]
    },
    biology: {
        name: 'Biology',
        code: '9700 (A-Level) · 0610 (IGCSE)',
        icon: '🧬',
        topics: [
            { id: 'b1', title: 'Cell Structure & Organisation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b2', title: 'Biological Molecules & Enzymes', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b3', title: 'Cell Membranes & Transport', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b4', title: 'Cell Division & Nucleic Acids', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b5', title: 'Genetics & Inheritance', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b6', title: 'Transport in Animals & Plants', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b7', title: 'Gas Exchange & Respiration', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b8', title: 'Photosynthesis', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b9', title: 'Homeostasis & Coordination', alevel: true, igcse: true, as: false, a2: true },
            { id: 'b10', title: 'Immunity & Disease', alevel: true, igcse: true, as: false, a2: true },
            { id: 'b11', title: 'Ecology & Conservation', alevel: true, igcse: true, as: false, a2: true },
            { id: 'b12', title: 'Evolution & Classification', alevel: true, igcse: true, as: false, a2: true },
            { id: 'b13', title: 'Gene Technology & Biotechnology', alevel: true, igcse: false, as: false, a2: true },
            { id: 'b14', title: 'Practical Skills & Data Analysis', alevel: true, igcse: true, as: true, a2: true },
            { id: 'b15', title: 'Human Reproduction & Development', alevel: true, igcse: true, as: false, a2: false }
        ]
    },
    maths: {
        name: 'Mathematics',
        code: '9709 (A-Level) · 0580 (IGCSE)',
        icon: '📐',
        topics: [
            { id: 'm1', title: 'Quadratics, Functions & Inequalities', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm2', title: 'Coordinate Geometry & Straight Lines', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm3', title: 'Coordinate Geometry of Circles', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm4', title: 'Trigonometry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm5', title: 'Series & Binomial Expansion', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm6', title: 'Differentiation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm7', title: 'Integration', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm8', title: 'Vectors', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm9', title: 'Mechanics — Forces & Equilibrium', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm10', title: 'Mechanics — Kinematics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm11', title: 'Probability & Statistics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm12', title: 'Statistical Distributions', alevel: true, igcse: true, as: false, a2: true },
            { id: 'm13', title: 'Hypothesis Testing', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    'additional-maths': {
        name: 'Additional Mathematics',
        code: '0606 (IGCSE)',
        icon: '📊',
        topics: [
            { id: 'am1', title: 'Functions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am2', title: 'Quadratic Functions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am3', title: 'Equations, Inequalities & Graphs', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am4', title: 'Indices & Surds', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am5', title: 'Polynomials & Partial Fractions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am6', title: 'Logarithmic & Exponential Functions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am7', title: 'Straight Line Graphs', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am8', title: 'Circular Measure', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am9', title: 'Trigonometry', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am10', title: 'Permutations & Combinations', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am11', title: 'Series', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am12', title: 'Vectors', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am13', title: 'Differentiation & Integration', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am14', title: 'Kinematics', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am15', title: 'Relative Velocity', alevel: false, igcse: true, as: false, a2: false }
        ]
    },
    economics: {
        name: 'Economics',
        code: '9708 (A-Level) · 0455 (IGCSE)',
        icon: '📈',
        topics: [
            { id: 'e1', title: 'Basic Economic Problem', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e2', title: 'Demand, Supply & Price', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e3', title: 'Elasticity', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e4', title: 'Market Failure', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e5', title: 'Government Intervention', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e6', title: 'National Income', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e7', title: 'Money & Banking', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e8', title: 'Unemployment & Inflation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e9', title: 'International Trade', alevel: true, igcse: true, as: false, a2: true },
            { id: 'e10', title: 'Development Economics', alevel: true, igcse: true, as: false, a2: true },
            { id: 'e11', title: 'Balance of Payments & Exchange Rates', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    business: {
        name: 'Business',
        code: '9609 (A-Level) · 0450 (IGCSE)',
        icon: '💼',
        topics: [
            { id: 'bu1', title: 'Business Activity & Environment', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu2', title: 'Marketing', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu3', title: 'Human Resource Management', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu4', title: 'Operations Management', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu5', title: 'Finance & Accounting', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu6', title: 'Business Structure & Growth', alevel: true, igcse: true, as: false, a2: true },
            { id: 'bu7', title: 'Leadership & Management', alevel: true, igcse: true, as: false, a2: true },
            { id: 'bu8', title: 'External Influences', alevel: true, igcse: true, as: false, a2: true },
            { id: 'bu9', title: 'Business Strategy', alevel: true, igcse: true, as: false, a2: true },
            { id: 'bu10', title: 'Globalisation & International Business', alevel: true, igcse: true, as: false, a2: true }
        ]
    },
    accounting: {
        name: 'Accounting',
        code: '9706 (A-Level) · 0452 (IGCSE)',
        icon: '📋',
        topics: [
            { id: 'ac1', title: 'Accounting Principles & Concepts', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac2', title: 'Source Documents & Books of Prime Entry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac3', title: 'Ledger Accounts & Trial Balance', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac4', title: 'Bank Reconciliation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac5', title: 'Control Accounts', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac6', title: 'Correction of Errors', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac7', title: 'Financial Statements — Sole Traders', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac8', title: 'Financial Statements — Partnerships', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ac9', title: 'Financial Statements — Limited Companies', alevel: true, igcse: true, as: false, a2: true },
            { id: 'ac10', title: 'Incomplete Records', alevel: true, igcse: true, as: false, a2: true },
            { id: 'ac11', title: 'Manufacturing Accounts', alevel: true, igcse: true, as: false, a2: true },
            { id: 'ac12', title: 'Cost & Management Accounting', alevel: true, igcse: true, as: false, a2: true },
            { id: 'ac13', title: 'Ratio Analysis & Interpretation', alevel: true, igcse: true, as: true, a2: true }
        ]
    },
    english: {
        name: 'English',
        code: '9093/0500 · IELTS',
        icon: '📖',
        topics: [
            { id: 'en1', title: 'Reading Comprehension', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en2', title: 'Directed Writing & Composition', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en3', title: 'Summary Writing', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en4', title: 'Literature Analysis — Poetry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en5', title: 'Literature Analysis — Prose', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en6', title: 'Literature Analysis — Drama', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en7', title: 'Essay Writing Techniques', alevel: true, igcse: true, as: true, a2: true },
            { id: 'en8', title: 'Language Analysis & Commentary', alevel: true, igcse: true, as: false, a2: true },
            { id: 'en9', title: 'IELTS Academic Writing', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en10', title: 'IELTS Academic Reading', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en11', title: 'IELTS Speaking', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en12', title: 'IELTS Listening', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en13', title: 'Grammar & Vocabulary', alevel: true, igcse: true, as: true, a2: true }
        ]
    },
    chinese: {
        name: 'Chinese',
        code: '9715 (A-Level) · 0509 (IGCSE)',
        icon: '🈶',
        topics: [
            { id: 'ch1', title: 'Reading Comprehension', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch2', title: 'Essay Writing', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch3', title: 'Classical Chinese Texts', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch4', title: 'Modern Chinese Literature', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch5', title: 'Oral Communication', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch6', title: 'Translation Skills', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch7', title: 'Chinese Culture & Society', alevel: true, igcse: true, as: false, a2: true },
            { id: 'ch8', title: 'Film & Media Studies', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    psychology: {
        name: 'Psychology',
        code: '9990 (A-Level)',
        icon: '🧠',
        topics: [
            { id: 'ps1', title: 'Research Methods', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps2', title: 'Biological Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps3', title: 'Cognitive Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps4', title: 'Social Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps5', title: 'Developmental Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps6', title: 'Abnormal Psychology', alevel: true, igcse: false, as: false, a2: true },
            { id: 'ps7', title: 'Consumer Psychology', alevel: true, igcse: false, as: false, a2: true },
            { id: 'ps8', title: 'Health Psychology', alevel: true, igcse: false, as: false, a2: true },
            { id: 'ps9', title: 'Organisational Psychology', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    history: {
        name: 'History',
        code: '9389 (A-Level) · 0470 (IGCSE)',
        icon: '🏛️',
        topics: [
            { id: 'h1', title: 'The Origins of World War I, 1871–1914', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h2', title: 'The Holocaust', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h3', title: 'The Cold War in Europe, 1941–1995', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h4', title: 'The Cold War in Asia, 1945–1991', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h5', title: 'Civil Rights in the USA, 1863–1968', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h6', title: 'International History, 1945–1991', alevel: true, igcse: true, as: false, a2: true },
            { id: 'h7', title: 'The French Revolution, 1774–1794', alevel: true, igcse: true, as: false, a2: true },
            { id: 'h8', title: "Hitler's Germany, 1929–1947", alevel: true, igcse: true, as: false, a2: true },
            { id: 'h9', title: "Stalin's Russia, 1924–1953", alevel: true, igcse: true, as: false, a2: true },
            { id: 'h10', title: 'Britain, 1918–1951', alevel: true, igcse: true, as: false, a2: true },
            { id: 'h11', title: 'The Origins of the Civil War in the USA', alevel: true, igcse: true, as: false, a2: true },
            { id: 'h12', title: 'International Relations, 1871–1945', alevel: true, igcse: true, as: false, a2: true }
        ]
    },
    geography: {
        name: 'Geography',
        code: '9696 (A-Level) · 0460 (IGCSE)',
        icon: '🌍',
        topics: [
            { id: 'g1', title: 'Plate Tectonics & Volcanic Hazards', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g2', title: 'Weather, Climate & Storms', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g3', title: 'River Landscapes & Flooding', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g4', title: 'Coastal Landscapes & Erosion', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g5', title: 'Population & Migration', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g6', title: 'Settlement & Urbanisation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g7', title: 'Agriculture & Food Production', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g8', title: 'Energy & Water Resources', alevel: true, igcse: true, as: false, a2: true },
            { id: 'g9', title: 'Economic Activity & Development', alevel: true, igcse: true, as: false, a2: true },
            { id: 'g10', title: 'Map Skills & Fieldwork', alevel: true, igcse: true, as: true, a2: true }
        ]
    },
    ict: {
        name: 'Information & Communication Technology',
        code: '9626 (A-Level) · 0417 (IGCSE)',
        icon: '💻',
        topics: [
            { id: 'i1', title: 'Computer Systems & Hardware', alevel: true, igcse: true, as: true, a2: false },
            { id: 'i2', title: 'Networks, Internet & Security', alevel: true, igcse: true, as: true, a2: false },
            { id: 'i3', title: 'Data Representation & Binary', alevel: true, igcse: true, as: true, a2: false },
            { id: 'i4', title: 'Software, OS & Applications', alevel: true, igcse: true, as: true, a2: false },
            { id: 'i5', title: 'Databases & Data Management', alevel: true, igcse: true, as: true, a2: false },
            { id: 'i6', title: 'Web Design & HTML/CSS', alevel: true, igcse: true, as: false, a2: true },
            { id: 'i7', title: 'Spreadsheets, Word Processing & Presentation', alevel: true, igcse: true, as: false, a2: true },
            { id: 'i8', title: 'Programming Concepts & Algorithms', alevel: true, igcse: true, as: true, a2: false },
            { id: 'i9', title: 'Impact of ICT on Society', alevel: true, igcse: true, as: true, a2: false },
            { id: 'i10', title: 'ICT in Business & Industry', alevel: true, igcse: true, as: false, a2: true }
        ]
    },
    'ib-physics': {
        name: 'IB Physics',
        code: 'IB DP Physics HL/SL',
        icon: '⚛️',
        topics: [
            { id: 'ibp1', title: 'Measurements & Uncertainties', ib: true, hl: true, sl: true },
            { id: 'ibp2', title: 'Mechanics', ib: true, hl: true, sl: true },
            { id: 'ibp3', title: 'Thermal Physics', ib: true, hl: true, sl: true },
            { id: 'ibp4', title: 'Waves', ib: true, hl: true, sl: true },
            { id: 'ibp5', title: 'Electricity & Magnetism', ib: true, hl: true, sl: true },
            { id: 'ibp6', title: 'Circular Motion & Gravitation', ib: true, hl: true, sl: true },
            { id: 'ibp7', title: 'Atomic, Nuclear & Particle Physics', ib: true, hl: true, sl: true },
            { id: 'ibp8', title: 'Energy Production', ib: true, hl: true, sl: true }
        ]
    },
    'ib-chemistry': {
        name: 'IB Chemistry',
        code: 'IB DP Chemistry HL/SL',
        icon: '🧪',
        topics: [
            { id: 'ibc1', title: 'Stoichiometric Relationships', ib: true, hl: true, sl: true },
            { id: 'ibc2', title: 'Atomic Structure', ib: true, hl: true, sl: true },
            { id: 'ibc3', title: 'Periodicity', ib: true, hl: true, sl: true },
            { id: 'ibc4', title: 'Chemical Bonding & Structure', ib: true, hl: true, sl: true },
            { id: 'ibc5', title: 'Energetics & Thermochemistry', ib: true, hl: true, sl: true },
            { id: 'ibc6', title: 'Chemical Kinetics', ib: true, hl: true, sl: true },
            { id: 'ibc7', title: 'Equilibrium', ib: true, hl: true, sl: true },
            { id: 'ibc8', title: 'Acids & Bases', ib: true, hl: true, sl: true },
            { id: 'ibc9', title: 'Redox Processes', ib: true, hl: true, sl: true },
            { id: 'ibc10', title: 'Organic Chemistry', ib: true, hl: true, sl: true },
            { id: 'ibc11', title: 'Measurement & Data Processing', ib: true, hl: true, sl: true }
        ]
    },
    'ib-biology': {
        name: 'IB Biology',
        code: 'IB DP Biology HL/SL',
        icon: '🧬',
        topics: [
            { id: 'ibb1', title: 'Cell Biology', ib: true, hl: true, sl: true },
            { id: 'ibb2', title: 'Molecular Biology', ib: true, hl: true, sl: true },
            { id: 'ibb3', title: 'Genetics', ib: true, hl: true, sl: true },
            { id: 'ibb4', title: 'Ecology', ib: true, hl: true, sl: true },
            { id: 'ibb5', title: 'Evolution & Biodiversity', ib: true, hl: true, sl: true },
            { id: 'ibb6', title: 'Human Physiology', ib: true, hl: true, sl: true }
        ]
    },
    'ib-maths-aa': {
        name: 'IB Mathematics: Analysis & Approaches',
        code: 'IB DP Maths AA HL/SL',
        icon: '📐',
        topics: [
            { id: 'ibmaa1', title: 'Number & Algebra', ib: true, hl: true, sl: true },
            { id: 'ibmaa2', title: 'Functions', ib: true, hl: true, sl: true },
            { id: 'ibmaa3', title: 'Geometry & Trigonometry', ib: true, hl: true, sl: true },
            { id: 'ibmaa4', title: 'Statistics & Probability', ib: true, hl: true, sl: true },
            { id: 'ibmaa5', title: 'Calculus', ib: true, hl: true, sl: true }
        ]
    },
    'ib-maths-ai': {
        name: 'IB Mathematics: Applications & Interpretation',
        code: 'IB DP Maths AI HL/SL',
        icon: '📊',
        topics: [
            { id: 'ibmai1', title: 'Number & Algebra', ib: true, hl: true, sl: true },
            { id: 'ibmai2', title: 'Functions', ib: true, hl: true, sl: true },
            { id: 'ibmai3', title: 'Geometry & Trigonometry', ib: true, hl: true, sl: true },
            { id: 'ibmai4', title: 'Statistics & Probability', ib: true, hl: true, sl: true },
            { id: 'ibmai5', title: 'Calculus', ib: true, hl: true, sl: true },
            { id: 'ibmai6', title: 'Mathematical Models', ib: true, hl: true, sl: true }
        ]
    },
    'ib-economics': {
        name: 'IB Economics',
        code: 'IB DP Economics HL/SL',
        icon: '📈',
        topics: [
            { id: 'ibe1', title: 'Introduction to Economics', ib: true, hl: true, sl: true },
            { id: 'ibe2', title: 'Microeconomics', ib: true, hl: true, sl: true },
            { id: 'ibe3', title: 'Macroeconomics', ib: true, hl: true, sl: true },
            { id: 'ibe4', title: 'The Global Economy', ib: true, hl: true, sl: true }
        ]
    },
    'ib-english': {
        name: 'IB English A',
        code: 'IB DP English A Lit / Lang & Lit HL/SL',
        icon: '📖',
        topics: [
            { id: 'iben1', title: 'Readers, Writers & Texts', ib: true, hl: true, sl: true },
            { id: 'iben2', title: 'Time & Space', ib: true, hl: true, sl: true },
            { id: 'iben3', title: 'Intertextuality', ib: true, hl: true, sl: true }
        ]
    },
    'ib-history': {
        name: 'IB History',
        code: 'IB DP History HL/SL',
        icon: '🏛️',
        topics: [
            { id: 'ibh1', title: 'Rights & Protest', ib: true, hl: true, sl: true },
            { id: 'ibh2', title: 'Authoritarian States', ib: true, hl: true, sl: true },
            { id: 'ibh3', title: 'The Cold War', ib: true, hl: true, sl: true },
            { id: 'ibh4', title: 'Causes & Effects of 20th Century Wars', ib: true, hl: true, sl: true }
        ]
    },
    'ib-geography': {
        name: 'IB Geography',
        code: 'IB DP Geography HL/SL',
        icon: '🌍',
        topics: [
            { id: 'ibg1', title: 'Changing Population', ib: true, hl: true, sl: true },
            { id: 'ibg2', title: 'Climate Change', ib: true, hl: true, sl: true },
            { id: 'ibg3', title: 'Global Resource Consumption', ib: true, hl: true, sl: true },
            { id: 'ibg4', title: 'Freshwater', ib: true, hl: true, sl: true },
            { id: 'ibg5', title: 'Extreme Environments', ib: true, hl: true, sl: true }
        ]
    },
    'ib-psychology': {
        name: 'IB Psychology',
        code: 'IB DP Psychology HL/SL',
        icon: '🧠',
        topics: [
            { id: 'ibps1', title: 'Biological Approach', ib: true, hl: true, sl: true },
            { id: 'ibps2', title: 'Cognitive Approach', ib: true, hl: true, sl: true },
            { id: 'ibps3', title: 'Sociocultural Approach', ib: true, hl: true, sl: true },
            { id: 'ibps4', title: 'Abnormal Psychology', ib: true, hl: true, sl: true },
            { id: 'ibps5', title: 'Developmental Psychology', ib: true, hl: true, sl: true }
        ]
    }
};

// Build flat topics array
const allTopics = [];
Object.keys(subjects).forEach(subjectId => {
    const subject = subjects[subjectId];
    subject.topics.forEach(topic => {
        allTopics.push({
            id: topic.id,
            subject: subjectId,
            subjectName: subject.name,
            title: topic.title,
            alevel: topic.alevel,
            igcse: topic.igcse,
            as: topic.as,
            a2: topic.a2,
            ib: topic.ib,
            hl: topic.hl,
            sl: topic.sl,
            icon: subject.icon,
            code: subject.code
        });
    });
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { subjects, allTopics };
}

// Edexcel subjects
const edexcelSubjects = {
    'edexcel-physics': {
        name: 'Physics',
        code: 'WPH13/14 (IAL) · 4PH1 (IGCSE) · 1PH0 (GCSE)',
        icon: '⚛️',
        topics: [
            { id: 'ep1', title: 'Mechanics & Materials', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ep2', title: 'Waves & Electricity', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ep3', title: 'Thermal & Nuclear Physics', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ep4', title: 'Fields & Oscillations', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ep5', title: 'Astrophysics', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ep6', title: 'Solids, Fluids & Gases', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ep7', title: 'Magnetism & Electromagnetism', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ep8', title: 'Particle Model & Atomic Structure', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true }
        ]
    },
    'edexcel-chemistry': {
        name: 'Chemistry',
        code: 'WCH13/14 (IAL) · 4CH1 (IGCSE) · 1CH0 (GCSE)',
        icon: '🧪',
        topics: [
            { id: 'ec1', title: 'Atomic Structure & Periodicity', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ec2', title: 'Bonding & Structure', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ec3', title: 'Energetics & Kinetics', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ec4', title: 'Equilibria & Redox', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ec5', title: 'Organic Chemistry', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ec6', title: 'Inorganic & Transition Metals', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ec7', title: 'Acids, Bases & Salts', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ec8', title: 'Electrolysis & Energy Changes', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true }
        ]
    },
    'edexcel-biology': {
        name: 'Biology',
        code: 'WBI13/14 (IAL) · 4BI1 (IGCSE) · 1BI0 (GCSE)',
        icon: '🧬',
        topics: [
            { id: 'eb1', title: 'Cell Biology & Organisation', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eb2', title: 'Genetics & Evolution', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eb3', title: 'Physiology & Homeostasis', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eb4', title: 'Ecology & Conservation', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eb5', title: 'Microbiology & Biotechnology', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'eb6', title: 'Neuroscience & Behaviour', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'eb7', title: 'Inheritance & Variation', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eb8', title: 'Human Body Systems', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true }
        ]
    },
    'edexcel-maths': {
        name: 'Mathematics',
        code: 'WMA13/14 (IAL) · 4MA1 (IGCSE) · 1MA1 (GCSE)',
        icon: '📐',
        topics: [
            { id: 'em1', title: 'Algebra & Functions', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'em2', title: 'Coordinate Geometry', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'em3', title: 'Trigonometry', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'em4', title: 'Calculus', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'em5', title: 'Vectors & Mechanics', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'em6', title: 'Statistics & Probability', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'em7', title: 'Sequences & Series', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'em8', title: 'Numerical Methods', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false }
        ]
    },
    'edexcel-economics': {
        name: 'Economics',
        code: 'WEC13/14 (IAL) · 4EC1 (IGCSE) · 1EC0 (GCSE)',
        icon: '📈',
        topics: [
            { id: 'ee1', title: 'Microeconomics — Markets', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ee2', title: 'Microeconomics — Market Failure', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ee3', title: 'Macroeconomics — Performance', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ee4', title: 'Macroeconomics — Policy', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ee5', title: 'International Economics', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ee6', title: 'Development Economics', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ee7', title: 'Labour Markets', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false }
        ]
    },
    'edexcel-business': {
        name: 'Business',
        code: 'WBS13/14 (IAL) · 4BS1 (IGCSE)',
        icon: '💼',
        topics: [
            { id: 'ebu1', title: 'Business Objectives & Strategy', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: false },
            { id: 'ebu2', title: 'Marketing & People', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: false },
            { id: 'ebu3', title: 'Operations & Finance', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: false },
            { id: 'ebu4', title: 'Global Business', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'ebu5', title: 'Entrepreneurship', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: false }
        ]
    },
    'edexcel-english': {
        name: 'English Language',
        code: 'WEN13/14 (IAL) · 4EA1 (IGCSE) · 1EN0 (GCSE)',
        icon: '📖',
        topics: [
            { id: 'een1', title: 'Reading & Comprehension', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'een2', title: 'Creative Writing', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'een3', title: 'Transactional Writing', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'een4', title: 'Linguistic Analysis', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'een5', title: 'Language & Gender/Power', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'een6', title: 'Child Language Acquisition', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false }
        ]
    },
    'edexcel-history': {
        name: 'History',
        code: 'WHI13/14 (IAL) · 4HI1 (IGCSE) · 1HI0 (GCSE)',
        icon: '🏛️',
        topics: [
            { id: 'eh1', title: 'Russia 1917–1991', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eh2', title: 'Mao\'s China 1949–1976', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eh3', title: 'Cold War 1945–1991', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eh4', title: 'British Empire 1763–1914', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'eh5', title: 'Civil Rights in USA', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eh6', title: 'Weimar & Nazi Germany', edexcel_ial: false, edexcel_igcse: true, edexcel_gcse: true }
        ]
    },
    'edexcel-geography': {
        name: 'Geography',
        code: 'WGE13/14 (IAL) · 4GE1 (IGCSE) · 1GE0 (GCSE)',
        icon: '🌍',
        topics: [
            { id: 'eg1', title: 'Tectonic Processes & Hazards', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eg2', title: 'Coastal Landscapes', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eg3', title: 'Globalisation', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eg4', title: 'Regeneration', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'eg5', title: 'Water Cycle & Security', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'eg6', title: 'Carbon Cycle & Energy', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false },
            { id: 'eg7', title: 'Superpowers & Migration', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false }
        ]
    },
    'edexcel-computer-science': {
        name: 'Computer Science',
        code: 'WCS13/14 (IAL) · 4CP1 (IGCSE) · 1CP0 (GCSE)',
        icon: '💻',
        topics: [
            { id: 'ecs1', title: 'Algorithms & Programming', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ecs2', title: 'Data Structures', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ecs3', title: 'Computer Systems', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ecs4', title: 'Networks & Security', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ecs5', title: 'Databases & SQL', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: true },
            { id: 'ecs6', title: 'Boolean Algebra & Logic', edexcel_ial: true, edexcel_igcse: true, edexcel_gcse: true },
            { id: 'ecs7', title: 'Software Development', edexcel_ial: true, edexcel_igcse: false, edexcel_gcse: false }
        ]
    }
};

Object.assign(subjects, edexcelSubjects);

Object.keys(edexcelSubjects).forEach(subjectId => {
    const subject = edexcelSubjects[subjectId];
    subject.topics.forEach(topic => {
        allTopics.push({
            id: topic.id,
            subject: subjectId,
            subjectName: subject.name,
            title: topic.title,
            edexcel_ial: topic.edexcel_ial,
            edexcel_igcse: topic.edexcel_igcse,
            edexcel_gcse: topic.edexcel_gcse,
            icon: subject.icon,
            code: subject.code
        });
    });
});
