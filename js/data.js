/**
 * LearnAI Subject Data
 * Cambridge A-Level, IGCSE, IELTS subjects and topics.
 * AS/A2 flags indicate A-Level topic classification.
 */
window.Subjects = {
    history: {
        name: 'History',
        code: '9389 (A-Level) · 0470 (IGCSE)',
        icon: '🏛️',
        topics: [
            { id: 'h1', title: 'The Origins of World War I, 1871–1914', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h2', title: 'The Holocaust', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h3', title: 'The Cold War in Europe, 1941–1995', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h4', title: 'The Cold War in Asia, 1945–1991', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h5', title: 'Civil Rights in the USA, 1863–1968', alevel: true, igcse: true, as: false, a2: true },
            { id: 'h6', title: 'International History, 1945–1991', alevel: true, igcse: true, as: false, a2: true },
            { id: 'h7', title: 'The French Revolution, 1774–1794', alevel: true, igcse: false, as: false, a2: true },
            { id: 'h8', title: 'Hitler\'s Germany, 1929–1947', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h9', title: 'Stalin\'s Russia, 1924–1953', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h10', title: 'Britain, 1918–1951', alevel: true, igcse: true, as: false, a2: true },
            { id: 'h11', title: 'The Origins of the Civil War in the USA', alevel: true, igcse: true, as: true, a2: false },
            { id: 'h12', title: 'International Relations, 1871–1945', alevel: true, igcse: true, as: true, a2: false }
        ]
    },
    geometry: {
        name: 'Geometry',
        code: '9709 (A-Level) · 0580 (IGCSE)',
        icon: '📐',
        topics: [
            { id: 'g1', title: 'Euclidean Geometry Fundamentals', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g2', title: 'Angles, Parallel Lines & Polygons', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g3', title: 'Congruence & Similarity', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g4', title: 'Pythagoras & Trigonometry in 2D/3D', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g5', title: 'Circles: Theorems & Properties', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g6', title: 'Loci & Constructions', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g7', title: 'Vectors in Geometry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'g8', title: 'Transformations & Matrices', alevel: true, igcse: true, as: false, a2: true },
            { id: 'g9', title: 'Coordinate Geometry of Circles & Parabolas', alevel: true, igcse: false, as: false, a2: true },
            { id: 'g10', title: '3D Geometry & Mensuration', alevel: true, igcse: true, as: true, a2: false }
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
            { id: 'i10', title: 'Emerging Technologies & AI', alevel: true, igcse: true, as: false, a2: true }
        ]
    },
    physics: {
        name: 'Physics',
        code: '9702 (A-Level) · 0625 (IGCSE)',
        icon: '⚛️',
        topics: [
            { id: 'p1', title: 'Physical Quantities & Units', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p2', title: 'Kinematics & Dynamics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p3', title: 'Forces, Density & Pressure', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p4', title: 'Work, Energy & Power', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p5', title: 'Deformation of Solids', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p6', title: 'Waves & Superposition', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p7', title: 'Electric Fields', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p8', title: 'Current Electricity', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p9', title: 'D.C. Circuits', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p10', title: 'Electromagnetism', alevel: true, igcse: true, as: false, a2: true },
            { id: 'p11', title: 'Nuclear Physics', alevel: true, igcse: true, as: false, a2: true },
            { id: 'p12', title: 'Particle Physics', alevel: true, igcse: false, as: false, a2: true },
            { id: 'p13', title: 'Thermal Physics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'p14', title: 'Astrophysics', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    chemistry: {
        name: 'Chemistry',
        code: '9701 (A-Level) · 0620 (IGCSE)',
        icon: '🧪',
        topics: [
            { id: 'c1', title: 'Atomic Structure', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c2', title: 'Chemical Bonding', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c3', title: 'Stoichiometry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c4', title: 'Electrochemistry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c5', title: 'Chemical Energetics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c6', title: 'Reaction Kinetics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c7', title: 'Equilibria', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c8', title: 'Organic Chemistry - Basics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c9', title: 'Hydrocarbons', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c10', title: 'Alcohols, Carbonyls & Carboxylic Acids', alevel: true, igcse: false, as: false, a2: true },
            { id: 'c11', title: 'Nitrogen Compounds', alevel: true, igcse: false, as: false, a2: true },
            { id: 'c12', title: 'Polymerisation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'c13', title: 'Transition Elements', alevel: true, igcse: false, as: false, a2: true },
            { id: 'c14', title: 'Group 2 & 17 Chemistry', alevel: true, igcse: true, as: true, a2: false }
        ]
    },
    biology: {
        name: 'Biology',
        code: '9700 (A-Level) · 0610 (IGCSE)',
        icon: '🧬',
        topics: [
            { id: 'b1', title: 'Cell Structure & Organisation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b2', title: 'Biological Molecules', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b3', title: 'Enzymes', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b4', title: 'Cell Membranes & Transport', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b5', title: 'Cell Division', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b6', title: 'Genetic Control', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b7', title: 'Transport in Plants', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b8', title: 'Transport in Animals', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b9', title: 'Gas Exchange & Respiration', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b10', title: 'Coordination & Response', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b11', title: 'Homeostasis', alevel: true, igcse: true, as: false, a2: true },
            { id: 'b12', title: 'Inheritance', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b13', title: 'Selection & Evolution', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b14', title: 'Ecology', alevel: true, igcse: true, as: true, a2: false },
            { id: 'b15', title: 'Immunity', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    maths: {
        name: 'Mathematics',
        code: '9709 (A-Level) · 0580 (IGCSE)',
        icon: '📐',
        topics: [
            { id: 'm1', title: 'Quadratics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm2', title: 'Functions', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm3', title: 'Coordinate Geometry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm4', title: 'Circular Measure', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm5', title: 'Trigonometry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm6', title: 'Series & Sequences', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm7', title: 'Differentiation', alevel: true, igcse: true, as: true, a2: true },
            { id: 'm8', title: 'Integration', alevel: true, igcse: true, as: true, a2: true },
            { id: 'm9', title: 'Vectors', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm10', title: 'Statistics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm11', title: 'Probability', alevel: true, igcse: true, as: true, a2: false },
            { id: 'm12', title: 'Complex Numbers', alevel: true, igcse: false, as: false, a2: true },
            { id: 'm13', title: 'Differential Equations', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    'additional-maths': {
        name: 'Additional Mathematics',
        code: '0606 (IGCSE)',
        icon: '📊',
        topics: [
            { id: 'am1', title: 'Set Language & Notation', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am2', title: 'Functions & Quadratic Functions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am3', title: 'Indices & Surds', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am4', title: 'Polynomials & Partial Fractions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am5', title: 'Equations, Inequalities & Modulus', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am6', title: 'Logarithmic & Exponential Functions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am7', title: 'Trigonometry', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am8', title: 'Straight Line Graphs', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am9', title: 'Circular Measure', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am10', title: 'Permutations & Combinations', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am11', title: 'Binomial Expansions', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am12', title: 'Differentiation', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am13', title: 'Integration', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am14', title: 'Kinematics', alevel: false, igcse: true, as: false, a2: false },
            { id: 'am15', title: 'Vectors', alevel: false, igcse: true, as: false, a2: false }
        ]
    },
    economics: {
        name: 'Economics',
        code: '9708 (A-Level) · 0455 (IGCSE)',
        icon: '📈',
        topics: [
            { id: 'e1', title: 'Basic Economic Ideas', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e2', title: 'The Price System', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e3', title: 'Government Intervention', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e4', title: 'International Trade', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e5', title: 'National Income Accounting', alevel: true, igcse: false, as: false, a2: true },
            { id: 'e6', title: 'Money & Banking', alevel: true, igcse: false, as: false, a2: true },
            { id: 'e7', title: 'Macroeconomic Policies', alevel: true, igcse: false, as: false, a2: true },
            { id: 'e8', title: 'Inflation & Unemployment', alevel: true, igcse: false, as: false, a2: true },
            { id: 'e9', title: 'Development Economics', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e10', title: 'Market Failure', alevel: true, igcse: true, as: true, a2: false },
            { id: 'e11', title: 'Theory of the Firm', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    business: {
        name: 'Business',
        code: '9609 (A-Level) · 0450 (IGCSE)',
        icon: '💼',
        topics: [
            { id: 'bu1', title: 'Business Activity', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu2', title: 'Classification of Business', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu3', title: 'Enterprise & Entrepreneurship', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu4', title: 'Business Objectives', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu5', title: 'Marketing', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu6', title: 'Finance & Accounting', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu7', title: 'Human Resource Management', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu8', title: 'Operations Management', alevel: true, igcse: true, as: true, a2: false },
            { id: 'bu9', title: 'Business Strategy (A-Level)', alevel: true, igcse: false, as: false, a2: true },
            { id: 'bu10', title: 'External Environment', alevel: true, igcse: true, as: true, a2: false }
        ]
    },
    accounting: {
        name: 'Accounting',
        code: '9706 (A-Level) · 0452 (IGCSE)',
        icon: '📋',
        topics: [
            { id: 'a1', title: 'The Accounting Equation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a2', title: 'Double Entry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a3', title: 'Books of Prime Entry', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a4', title: 'Ledger Accounts', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a5', title: 'Trial Balance', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a6', title: 'Financial Statements', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a7', title: 'Bank Reconciliation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a8', title: 'Control Accounts', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a9', title: 'Depreciation', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a10', title: 'Partnership Accounts', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a11', title: 'Company Accounts', alevel: true, igcse: true, as: true, a2: false },
            { id: 'a12', title: 'Cost & Management Accounting', alevel: true, igcse: false, as: false, a2: true },
            { id: 'a13', title: 'Ratio Analysis', alevel: true, igcse: true, as: true, a2: false }
        ]
    },
    english: {
        name: 'English',
        code: '9093/0500 · IELTS',
        icon: '📖',
        topics: [
            { id: 'en1', title: 'Reading Comprehension', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en2', title: 'Summary Writing', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en3', title: 'Essay Writing Techniques', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en4', title: 'Language Analysis', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en5', title: 'Literary Devices', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en6', title: 'Text Commentary', alevel: true, igcse: false, as: false, a2: true },
            { id: 'en7', title: 'IELTS Reading Strategies', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en8', title: 'IELTS Writing Task 1', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en9', title: 'IELTS Writing Task 2', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en10', title: 'IELTS Speaking', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en11', title: 'IELTS Listening', alevel: false, igcse: false, as: false, a2: false },
            { id: 'en12', title: 'Poetry Analysis', alevel: true, igcse: true, as: true, a2: false },
            { id: 'en13', title: 'Drama Analysis', alevel: true, igcse: true, as: true, a2: false }
        ]
    },
    chinese: {
        name: 'Chinese',
        code: '9715 (A-Level) · 0509 (IGCSE)',
        icon: '🈶',
        topics: [
            { id: 'ch1', title: 'Modern Chinese Language', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch2', title: 'Classical Chinese', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch3', title: 'Essay Writing', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch4', title: 'Reading Comprehension', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch5', title: 'Chinese Literature', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch6', title: 'Translation Skills', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch7', title: 'Oral Examination Prep', alevel: true, igcse: true, as: true, a2: false },
            { id: 'ch8', title: 'Cultural Context', alevel: true, igcse: false, as: false, a2: true }
        ]
    },
    psychology: {
        name: 'Psychology',
        code: '9990 (A-Level)',
        icon: '🧠',
        topics: [
            { id: 'ps1', title: 'Research Methods', alevel: true, igcse: false, as: true, a2: true },
            { id: 'ps2', title: 'Biological Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps3', title: 'Cognitive Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps4', title: 'Social Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps5', title: 'Developmental Psychology', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps6', title: 'Abnormal Psychology', alevel: true, igcse: false, as: false, a2: true },
            { id: 'ps7', title: 'Consumer Psychology (AS)', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps8', title: 'Health Psychology (AS)', alevel: true, igcse: false, as: true, a2: false },
            { id: 'ps9', title: 'Organisational Psychology (AS)', alevel: true, igcse: false, as: true, a2: false }
        ]
    }
};
