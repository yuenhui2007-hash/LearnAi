/**
 * LearnAI Subject Data
 * Cambridge A-Level, IGCSE, IELTS subjects and topics.
 */
window.Subjects = {
    physics: {
        name: 'Physics',
        code: '9702 (A-Level) · 0625 (IGCSE)',
        icon: '⚛️',
        topics: [
            { id: 'p1', title: 'Physical Quantities & Units', alevel: true, igcse: true },
            { id: 'p2', title: 'Kinematics & Dynamics', alevel: true, igcse: true },
            { id: 'p3', title: 'Forces, Density & Pressure', alevel: true, igcse: true },
            { id: 'p4', title: 'Work, Energy & Power', alevel: true, igcse: true },
            { id: 'p5', title: 'Deformation of Solids', alevel: true, igcse: false },
            { id: 'p6', title: 'Waves & Superposition', alevel: true, igcse: true },
            { id: 'p7', title: 'Electric Fields', alevel: true, igcse: false },
            { id: 'p8', title: 'Current Electricity', alevel: true, igcse: true },
            { id: 'p9', title: 'D.C. Circuits', alevel: true, igcse: true },
            { id: 'p10', title: 'Electromagnetism', alevel: true, igcse: true },
            { id: 'p11', title: 'Nuclear Physics', alevel: true, igcse: true },
            { id: 'p12', title: 'Particle Physics', alevel: true, igcse: false },
            { id: 'p13', title: 'Thermal Physics', alevel: true, igcse: true },
            { id: 'p14', title: 'Astrophysics', alevel: true, igcse: false }
        ]
    },
    chemistry: {
        name: 'Chemistry',
        code: '9701 (A-Level) · 0620 (IGCSE)',
        icon: '🧪',
        topics: [
            { id: 'c1', title: 'Atomic Structure', alevel: true, igcse: true },
            { id: 'c2', title: 'Chemical Bonding', alevel: true, igcse: true },
            { id: 'c3', title: 'Stoichiometry', alevel: true, igcse: true },
            { id: 'c4', title: 'Electrochemistry', alevel: true, igcse: true },
            { id: 'c5', title: 'Chemical Energetics', alevel: true, igcse: true },
            { id: 'c6', title: 'Reaction Kinetics', alevel: true, igcse: true },
            { id: 'c7', title: 'Equilibria', alevel: true, igcse: true },
            { id: 'c8', title: 'Organic Chemistry - Basics', alevel: true, igcse: true },
            { id: 'c9', title: 'Hydrocarbons', alevel: true, igcse: true },
            { id: 'c10', title: 'Alcohols, Carbonyls & Carboxylic Acids', alevel: true, igcse: false },
            { id: 'c11', title: 'Nitrogen Compounds', alevel: true, igcse: false },
            { id: 'c12', title: 'Polymerisation', alevel: true, igcse: true },
            { id: 'c13', title: 'Transition Elements', alevel: true, igcse: false },
            { id: 'c14', title: 'Group 2 & 17 Chemistry', alevel: true, igcse: true }
        ]
    },
    biology: {
        name: 'Biology',
        code: '9700 (A-Level) · 0610 (IGCSE)',
        icon: '🧬',
        topics: [
            { id: 'b1', title: 'Cell Structure & Organisation', alevel: true, igcse: true },
            { id: 'b2', title: 'Biological Molecules', alevel: true, igcse: true },
            { id: 'b3', title: 'Enzymes', alevel: true, igcse: true },
            { id: 'b4', title: 'Cell Membranes & Transport', alevel: true, igcse: true },
            { id: 'b5', title: 'Cell Division', alevel: true, igcse: true },
            { id: 'b6', title: 'Genetic Control', alevel: true, igcse: true },
            { id: 'b7', title: 'Transport in Plants', alevel: true, igcse: true },
            { id: 'b8', title: 'Transport in Animals', alevel: true, igcse: true },
            { id: 'b9', title: 'Gas Exchange & Respiration', alevel: true, igcse: true },
            { id: 'b10', title: 'Coordination & Response', alevel: true, igcse: true },
            { id: 'b11', title: 'Homeostasis', alevel: true, igcse: true },
            { id: 'b12', title: 'Inheritance', alevel: true, igcse: true },
            { id: 'b13', title: 'Selection & Evolution', alevel: true, igcse: true },
            { id: 'b14', title: 'Ecology', alevel: true, igcse: true },
            { id: 'b15', title: 'Immunity', alevel: true, igcse: false }
        ]
    },
    maths: {
        name: 'Mathematics',
        code: '9709 (A-Level) · 0580 (IGCSE)',
        icon: '📐',
        topics: [
            { id: 'm1', title: 'Quadratics', alevel: true, igcse: true },
            { id: 'm2', title: 'Functions', alevel: true, igcse: true },
            { id: 'm3', title: 'Coordinate Geometry', alevel: true, igcse: true },
            { id: 'm4', title: 'Circular Measure', alevel: true, igcse: true },
            { id: 'm5', title: 'Trigonometry', alevel: true, igcse: true },
            { id: 'm6', title: 'Series & Sequences', alevel: true, igcse: true },
            { id: 'm7', title: 'Differentiation', alevel: true, igcse: true },
            { id: 'm8', title: 'Integration', alevel: true, igcse: true },
            { id: 'm9', title: 'Vectors', alevel: true, igcse: true },
            { id: 'm10', title: 'Statistics', alevel: true, igcse: true },
            { id: 'm11', title: 'Probability', alevel: true, igcse: true },
            { id: 'm12', title: 'Complex Numbers', alevel: true, igcse: false },
            { id: 'm13', title: 'Differential Equations', alevel: true, igcse: false }
        ]
    },
    'additional-maths': {
        name: 'Additional Mathematics',
        code: '0606 (IGCSE)',
        icon: '📊',
        topics: [
            { id: 'am1', title: 'Set Language & Notation', alevel: false, igcse: true },
            { id: 'am2', title: 'Functions & Quadratic Functions', alevel: false, igcse: true },
            { id: 'am3', title: 'Indices & Surds', alevel: false, igcse: true },
            { id: 'am4', title: 'Polynomials & Partial Fractions', alevel: false, igcse: true },
            { id: 'am5', title: 'Equations, Inequalities & Modulus', alevel: false, igcse: true },
            { id: 'am6', title: 'Logarithmic & Exponential Functions', alevel: false, igcse: true },
            { id: 'am7', title: 'Trigonometry', alevel: false, igcse: true },
            { id: 'am8', title: 'Straight Line Graphs', alevel: false, igcse: true },
            { id: 'am9', title: 'Circular Measure', alevel: false, igcse: true },
            { id: 'am10', title: 'Permutations & Combinations', alevel: false, igcse: true },
            { id: 'am11', title: 'Binomial Expansions', alevel: false, igcse: true },
            { id: 'am12', title: 'Differentiation', alevel: false, igcse: true },
            { id: 'am13', title: 'Integration', alevel: false, igcse: true },
            { id: 'am14', title: 'Kinematics', alevel: false, igcse: true },
            { id: 'am15', title: 'Vectors', alevel: false, igcse: true }
        ]
    },
    economics: {
        name: 'Economics',
        code: '9708 (A-Level) · 0455 (IGCSE)',
        icon: '📈',
        topics: [
            { id: 'e1', title: 'Basic Economic Ideas', alevel: true, igcse: true },
            { id: 'e2', title: 'The Price System', alevel: true, igcse: true },
            { id: 'e3', title: 'Government Intervention', alevel: true, igcse: true },
            { id: 'e4', title: 'International Trade', alevel: true, igcse: true },
            { id: 'e5', title: 'National Income Accounting', alevel: true, igcse: false },
            { id: 'e6', title: 'Money & Banking', alevel: true, igcse: false },
            { id: 'e7', title: 'Macroeconomic Policies', alevel: true, igcse: false },
            { id: 'e8', title: 'Inflation & Unemployment', alevel: true, igcse: false },
            { id: 'e9', title: 'Development Economics', alevel: true, igcse: true },
            { id: 'e10', title: 'Market Failure', alevel: true, igcse: true },
            { id: 'e11', title: 'Theory of the Firm', alevel: true, igcse: false }
        ]
    },
    business: {
        name: 'Business',
        code: '9609 (A-Level) · 0450 (IGCSE)',
        icon: '💼',
        topics: [
            { id: 'bu1', title: 'Business Activity', alevel: true, igcse: true },
            { id: 'bu2', title: 'Classification of Business', alevel: true, igcse: true },
            { id: 'bu3', title: 'Enterprise & Entrepreneurship', alevel: true, igcse: true },
            { id: 'bu4', title: 'Business Objectives', alevel: true, igcse: true },
            { id: 'bu5', title: 'Marketing', alevel: true, igcse: true },
            { id: 'bu6', title: 'Finance & Accounting', alevel: true, igcse: true },
            { id: 'bu7', title: 'Human Resource Management', alevel: true, igcse: true },
            { id: 'bu8', title: 'Operations Management', alevel: true, igcse: true },
            { id: 'bu9', title: 'Business Strategy (A-Level)', alevel: true, igcse: false },
            { id: 'bu10', title: 'External Environment', alevel: true, igcse: true }
        ]
    },
    accounting: {
        name: 'Accounting',
        code: '9706 (A-Level) · 0452 (IGCSE)',
        icon: '📋',
        topics: [
            { id: 'a1', title: 'The Accounting Equation', alevel: true, igcse: true },
            { id: 'a2', title: 'Double Entry', alevel: true, igcse: true },
            { id: 'a3', title: 'Books of Prime Entry', alevel: true, igcse: true },
            { id: 'a4', title: 'Ledger Accounts', alevel: true, igcse: true },
            { id: 'a5', title: 'Trial Balance', alevel: true, igcse: true },
            { id: 'a6', title: 'Financial Statements', alevel: true, igcse: true },
            { id: 'a7', title: 'Bank Reconciliation', alevel: true, igcse: true },
            { id: 'a8', title: 'Control Accounts', alevel: true, igcse: true },
            { id: 'a9', title: 'Depreciation', alevel: true, igcse: true },
            { id: 'a10', title: 'Partnership Accounts', alevel: true, igcse: true },
            { id: 'a11', title: 'Company Accounts', alevel: true, igcse: true },
            { id: 'a12', title: 'Cost & Management Accounting', alevel: true, igcse: false },
            { id: 'a13', title: 'Ratio Analysis', alevel: true, igcse: true }
        ]
    },
    english: {
        name: 'English',
        code: '9093/0500 · IELTS',
        icon: '📖',
        topics: [
            { id: 'en1', title: 'Reading Comprehension', alevel: true, igcse: true },
            { id: 'en2', title: 'Summary Writing', alevel: true, igcse: true },
            { id: 'en3', title: 'Essay Writing Techniques', alevel: true, igcse: true },
            { id: 'en4', title: 'Language Analysis', alevel: true, igcse: true },
            { id: 'en5', title: 'Literary Devices', alevel: true, igcse: true },
            { id: 'en6', title: 'Text Commentary', alevel: true, igcse: false },
            { id: 'en7', title: 'IELTS Reading Strategies', alevel: false, igcse: false },
            { id: 'en8', title: 'IELTS Writing Task 1', alevel: false, igcse: false },
            { id: 'en9', title: 'IELTS Writing Task 2', alevel: false, igcse: false },
            { id: 'en10', title: 'IELTS Speaking', alevel: false, igcse: false },
            { id: 'en11', title: 'IELTS Listening', alevel: false, igcse: false },
            { id: 'en12', title: 'Poetry Analysis', alevel: true, igcse: true },
            { id: 'en13', title: 'Drama Analysis', alevel: true, igcse: true }
        ]
    },
    chinese: {
        name: 'Chinese',
        code: '9715 (A-Level) · 0509 (IGCSE)',
        icon: '🈶',
        topics: [
            { id: 'ch1', title: 'Modern Chinese Language', alevel: true, igcse: true },
            { id: 'ch2', title: 'Classical Chinese', alevel: true, igcse: true },
            { id: 'ch3', title: 'Essay Writing', alevel: true, igcse: true },
            { id: 'ch4', title: 'Reading Comprehension', alevel: true, igcse: true },
            { id: 'ch5', title: 'Chinese Literature', alevel: true, igcse: true },
            { id: 'ch6', title: 'Translation Skills', alevel: true, igcse: true },
            { id: 'ch7', title: 'Oral Examination Prep', alevel: true, igcse: true },
            { id: 'ch8', title: 'Cultural Context', alevel: true, igcse: false }
        ]
    },
    psychology: {
        name: 'Psychology',
        code: '9990 (A-Level)',
        icon: '🧠',
        topics: [
            { id: 'ps1', title: 'Research Methods', alevel: true, igcse: false },
            { id: 'ps2', title: 'Biological Psychology', alevel: true, igcse: false },
            { id: 'ps3', title: 'Cognitive Psychology', alevel: true, igcse: false },
            { id: 'ps4', title: 'Social Psychology', alevel: true, igcse: false },
            { id: 'ps5', title: 'Developmental Psychology', alevel: true, igcse: false },
            { id: 'ps6', title: 'Abnormal Psychology', alevel: true, igcse: false },
            { id: 'ps7', title: 'Consumer Psychology (AS)', alevel: true, igcse: false },
            { id: 'ps8', title: 'Health Psychology (AS)', alevel: true, igcse: false },
            { id: 'ps9', title: 'Organisational Psychology (AS)', alevel: true, igcse: false }
        ]
    }
};
