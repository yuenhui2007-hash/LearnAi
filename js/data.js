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
            icon: subject.icon,
            code: subject.code
        });
    });
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { subjects, allTopics };
}
