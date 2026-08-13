// Flashcard System
const flashcardData = {
  physics: [
    {q: "7 SI base units", a: "metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)"},
    {q: "Scalar vs Vector", a: "Scalar = magnitude only (mass, speed). Vector = magnitude + direction (velocity, force)"},
    {q: "Newton's First Law", a: "An object remains at rest or in uniform motion unless acted upon by a resultant force"},
    {q: "Newton's Second Law", a: "F = ma. Resultant force equals mass times acceleration"},
    {q: "Newton's Third Law", a: "For every action there is an equal and opposite reaction"},
    {q: "Kinetic energy formula", a: "Eₖ = ½mv²"},
    {q: "Gravitational potential energy", a: "Eₚ = mgh"},
    {q: "Ohm's Law", a: "V = IR. Voltage = Current × Resistance"},
    {q: "Power in electrical circuits", a: "P = VI = I²R = V²/R"},
    {q: "Wave equation", a: "v = fλ. Velocity = frequency × wavelength"}
  ],
  chemistry: [
    {q: "Proton relative mass and charge", a: "Mass = 1, Charge = +1"},
    {q: "Neutron relative mass and charge", a: "Mass = 1, Charge = 0"},
    {q: "Electron relative mass and charge", a: "Mass = 1/1840, Charge = -1"},
    {q: "Ionic bonding", a: "Transfer of electrons from metal to non-metal. Strong electrostatic attraction."},
    {q: "Covalent bonding", a: "Sharing of electron pairs between atoms. Can be single, double, or triple."},
    {q: "Metallic bonding", a: "Lattice of positive ions in a sea of delocalised electrons"},
    {q: "Moles = mass / Mᵣ", a: "n = m/M. Number of moles = mass (g) ÷ molar mass (g/mol)"},
    {q: "Concentration formula", a: "c = n/V. Concentration (mol/dm³) = moles ÷ volume (dm³)"},
    {q: "Ideal gas equation", a: "pV = nRT. Pressure × Volume = moles × gas constant × Temperature"},
    {q: "Avogadro's constant", a: "6.02 × 10²³ particles per mole"}
  ],
  biology: [
    {q: "Function of nucleus", a: "Contains DNA, controls cell activities, site of transcription"},
    {q: "Function of mitochondria", a: "Site of aerobic respiration, produces ATP"},
    {q: "Function of ribosomes", a: "Protein synthesis (translation)"},
    {q: "Function of chloroplasts", a: "Photosynthesis, contains chlorophyll"},
    {q: "Function of cell membrane", a: "Controls entry/exit of substances, selective permeability"},
    {q: "Mitosis result", a: "2 identical diploid daughter cells. For growth and repair."},
    {q: "Meiosis result", a: "4 genetically different haploid gametes. For sexual reproduction."},
    {q: "Photosynthesis equation", a: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light energy, chlorophyll)"},
    {q: "Enzyme function", a: "Biological catalysts that speed up reactions without being used up"},
    {q: "DNA structure", a: "Double helix, sugar-phosphate backbone, complementary base pairing (A-T, C-G)"}
  ],
  maths: [
    {q: "Quadratic formula", a: "x = (-b ± √(b²-4ac)) / 2a"},
    {q: "Discriminant", a: "b² - 4ac. >0: two roots, =0: one root, <0: no real roots"},
    {q: "Differentiation: power rule", a: "d/dx(xⁿ) = nxⁿ⁻¹"},
    {q: "Integration: power rule", a: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C"},
    {q: "Chain rule", a: "dy/dx = dy/du × du/dx"},
    {q: "Product rule", a: "d(uv)/dx = u(dv/dx) + v(du/dx)"},
    {q: "Quotient rule", a: "d(u/v)/dx = (v(du/dx) - u(dv/dx)) / v²"},
    {q: "sin²θ + cos²θ", a: "= 1"},
    {q: "Sum of angles in triangle", a: "180°"},
    {q: "Sum of interior angles of n-sided polygon", a: "(n-2) × 180°"}
  ],
  economics: [
    {q: "Law of demand", a: "As price increases, quantity demanded decreases (inverse relationship)"},
    {q: "Law of supply", a: "As price increases, quantity supplied increases (direct relationship)"},
    {q: "PED formula", a: "(% change in Qd) / (% change in P)"},
    {q: "YED formula", a: "(% change in Qd) / (% change in income)"},
    {q: "Public goods characteristics", a: "Non-excludable and non-rival"},
    {q: "Merit goods", a: "Under-consumed due to information failure (education, healthcare)"},
    {q: "GDP definition", a: "Total value of goods and services produced in a country in one year"},
    {q: "Inflation", a: "Sustained increase in general price level"},
    {q: "Unemployment types", a: "Frictional, structural, cyclical, seasonal"},
    {q: "Comparative advantage", a: "Produce goods with lowest opportunity cost, then trade"}
  ],
  geography: [
    {q: "3 types of plate boundaries", a: "Constructive (divergent), Destructive (convergent), Conservative (transform)"},
    {q: "Coriolis effect direction", a: "Right in Northern Hemisphere, Left in Southern Hemisphere"},
    {q: "3 atmospheric circulation cells", a: "Hadley (0-30°), Ferrel (30-60°), Polar (60-90°)"},
    {q: "River erosion processes", a: "Hydraulic action, abrasion, attrition, solution"},
    {q: "Coastal erosion landforms sequence", a: "Headland → cave → arch → stack → stump"},
    {q: "DTM Stage 2 characteristics", a: "High birth rate, falling death rate, rapid population growth"},
    {q: "Push factors for migration", a: "War, poverty, unemployment, persecution, natural disasters"},
    {q: "Hard vs soft engineering", a: "Hard = built structures (sea walls). Soft = natural approaches (beach nourishment)"},
    {q: "Green Revolution features", a: "HYV seeds, irrigation, fertilisers, pesticides"},
    {q: "Renewable energy sources", a: "Solar, wind, hydro, geothermal, biomass, tidal"}
  ],
  history: [
    {q: "Blank Cheque (1914)", a: "Germany's unconditional support for Austria-Hungary after Sarajevo"},
    {q: "Schlieffen Plan", a: "Germany's plan to defeat France quickly then turn to Russia"},
    {q: "Treaty of Versailles main terms", a: "War guilt (Article 231), reparations, territorial losses, military restrictions"},
    {q: "Truman Doctrine (1947)", a: "US policy to contain communism by supporting anti-communist countries"},
    {q: "Marshall Plan", a: "$13 billion US economic aid to rebuild Western Europe (1948-1952)"},
    {q: "Cuban Missile Crisis (1962)", a: "Soviet missiles in Cuba; US naval blockade; closest point to nuclear war"},
    {q: "Holocaust death toll", a: "Approximately 6 million Jews, plus millions of others"},
    {q: "Cold War meaning", a: "Period of tension between USA and USSR without direct military conflict"},
    {q: "Civil Rights Act 1964", a: "Outlawed discrimination based on race, colour, religion, sex, national origin"},
    {q: "Fischer Thesis", a: "Germany deliberately planned and caused WWI for European dominance"}
  ],
  ict: [
    {q: "1 byte = ? bits", a: "8 bits"},
    {q: "CPU components", a: "ALU (Arithmetic Logic Unit), CU (Control Unit), Registers"},
    {q: "RAM vs ROM", a: "RAM = volatile (data lost when off), ROM = non-volatile (permanent)"},
    {q: "LAN vs WAN", a: "LAN = Local Area Network (small area). WAN = Wide Area Network (large area)"},
    {q: "Binary to hex conversion", a: "Group binary digits in 4s from right, convert each group to hex digit"},
    {q: "HTTP vs HTTPS", a: "HTTPS is HTTP with SSL/TLS encryption for secure communication"},
    {q: "Phishing definition", a: "Fraudulent attempt to obtain sensitive information by disguising as trustworthy entity"},
    {q: "Firewall function", a: "Monitors and controls incoming/outgoing network traffic based on security rules"},
    {q: "Primary key in database", a: "Unique identifier for each record in a table"},
    {q: "Fetch-decode-execute cycle", a: "CPU fetches instruction, decodes it, then executes it. Repeats millions of times/second"}
  ],
  'additional-maths': [
    {q: "Factor theorem", a: "If f(a) = 0, then (x-a) is a factor of f(x)"},
    {q: "Remainder theorem", a: "f(a) gives the remainder when f(x) is divided by (x-a)"},
    {q: "Sum of roots (quadratic)", a: "-b/a"},
    {q: "Product of roots (quadratic)", a: "c/a"},
    {q: "Logarithm rule: log(ab)", a: "log a + log b"},
    {q: "Logarithm rule: log(a/b)", a: "log a - log b"},
    {q: "Logarithm rule: log(aⁿ)", a: "n log a"},
    {q: "Sin(A+B)", a: "sin A cos B + cos A sin B"},
    {q: "Cos(A+B)", a: "cos A cos B - sin A sin B"},
    {q: "Sum to infinity of GP", a: "a/(1-r) where |r| < 1"}
  ],
  business: [
    {q: "Market segmentation", a: "Dividing market into distinct groups with similar needs/characteristics"},
    {q: "SWOT analysis", a: "Strengths, Weaknesses, Opportunities, Threats"},
    {q: "Break-even point", a: "Where total revenue = total costs (no profit, no loss)"},
    {q: "Cash flow", a: "Movement of cash into and out of a business over time"},
    {q: "Franchise", a: "Business where owner pays to use brand name, products, business model"},
    {q: "4Ps of marketing", a: "Product, Price, Place, Promotion"},
    {q: "Fixed vs variable costs", a: "Fixed = don't change with output (rent). Variable = change with output (materials)"},
    {q: "Economies of scale", a: "Cost advantages from increased scale of production"},
    {q: "Lewin's force field analysis", a: "Driving forces vs restraining forces for organisational change"},
    {q: "Maslow's hierarchy top need", a: "Self-actualisation"}
  ],
  accounting: [
    {q: "Double entry rule", a: "Every debit has an equal credit (Assets = Liabilities + Capital)"},
    {q: "Gross profit formula", a: "Revenue - Cost of sales"},
    {q: "Net profit formula", a: "Gross profit - Expenses"},
    {q: "Current ratio", a: "Current assets / Current liabilities"},
    {q: "Acid test ratio", a: "(Current assets - Inventory) / Current liabilities"},
    {q: "Gearing ratio", a: "Long-term debt / Capital employed"},
    {q: "Return on capital employed (ROCE)", a: "Operating profit / Capital employed × 100%"},
    {q: "Depreciation", a: "Allocation of cost of non-current asset over useful life"},
    {q: "Straight-line depreciation", a: "(Cost - Residual value) / Useful life"},
    {q: "Reducing balance depreciation", a: "Fixed percentage of carrying amount each year"}
  ],
  english: [
    {q: "Metaphor definition", a: "Direct comparison without 'like' or 'as' (stating one thing IS another)"},
    {q: "Simile definition", a: "Comparison using 'like' or 'as'"},
    {q: "Personification", a: "Giving human qualities to non-human things"},
    {q: "Alliteration", a: "Repetition of same initial consonant sound"},
    {q: "Assonance", a: "Repetition of vowel sounds in nearby words"},
    {q: "First person narration", a: "Uses 'I', 'me', 'my'. Narrator is a character in the story."},
    {q: "Third person limited", a: "Narrator knows thoughts of one character only"},
    {q: "Third person omniscient", a: "Narrator knows thoughts of all characters"},
    {q: "Dramatic irony", a: "Audience knows something characters don't"},
    {q: "PEEL paragraph structure", a: "Point, Evidence, Explanation, Link"}
  ],
  chinese: [
    {q: "明的组成", a: "日 + 月 = 明 (bright)"},
    {q: "你好的拼音", a: "nǐ hǎo"},
    {q: "四大名著", a: "《红楼梦》《西游记》《三国演义》《水浒传》"},
    {q: "文言文特点", a: "使用古代词汇、典故，语法与现代汉语不同"},
    {q: "诗仙", a: "李白"},
    {q: "诗圣", a: "杜甫"},
    {q: "春眠不觉晓作者", a: "孟浩然《春晓》"},
    {q: "天干", a: "甲、乙、丙、丁、戊、己、庚、辛、壬、癸"},
    {q: "地支", a: "子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥"},
    {q: "成语：画蛇添足", a: "做多余的事反而坏事"}
  ],
  psychology: [
    {q: "Cognitive approach focus", a: "Mental processes: memory, perception, thinking, decision-making"},
    {q: "STM capacity", a: "7±2 items (Miller's Magic Number)"},
    {q: "LTM duration", a: "Potentially unlimited"},
    {q: "Classical conditioning discovered by", a: "Pavlov"},
    {q: "Operant conditioning discovered by", a: "Skinner"},
    {q: "Social Learning Theory key concept", a: "Observational learning, modelling, vicarious reinforcement"},
    {q: "Milgram study obedience rate", a: "65% of participants delivered maximum 450V shock"},
    {q: "Zimbardo study", a: "Stanford Prison Experiment — role and situational power"},
    {q: "Freud's id operates on", a: "Pleasure principle"},
    {q: "Freud's superego operates on", a: "Morality principle"}
  ]
};

let currentDeck = [];
let currentIndex = 0;
let known = 0;
let review = 0;

function initFlashcards() {
  const select = document.getElementById('flashSubject');
  if (!select) return;
  Object.keys(flashcardData).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
    select.appendChild(opt);
  });
}

function startFlashcards() {
  const subject = document.getElementById('flashSubject').value;
  if (!subject || !flashcardData[subject]) return;
  currentDeck = [...flashcardData[subject]].sort(() => Math.random() - 0.5);
  currentIndex = 0;
  known = 0;
  review = 0;
  document.getElementById('flash-setup').style.display = 'none';
  document.getElementById('flash-area').style.display = 'block';
  document.getElementById('flash-complete').style.display = 'none';
  document.getElementById('cardTotal').textContent = currentDeck.length;
  showCard();
}

function showCard() {
  if (currentIndex >= currentDeck.length) {
    showComplete();
    return;
  }
  const card = currentDeck[currentIndex];
  document.getElementById('flashQ').textContent = card.q;
  document.getElementById('flashA').textContent = card.a;
  document.getElementById('cardNum').textContent = currentIndex + 1;
  document.getElementById('knownCount').textContent = known;
  document.getElementById('reviewCount').textContent = review;
  document.getElementById('flashCard').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('flashCard').classList.toggle('flipped');
}

function markCard(knowIt) {
  if (knowIt) known++; else review++;
  currentIndex++;
  showCard();
}

function showComplete() {
  document.getElementById('flash-area').style.display = 'none';
  document.getElementById('flash-complete').style.display = 'block';
  const total = currentDeck.length;
  const pct = Math.round(known / total * 100);
  document.getElementById('flashResult').innerHTML = 
    'You knew <strong>' + known + '</strong> out of <strong>' + total + '</strong> cards (' + pct + '%)<br>' +
    '<strong>' + review + '</strong> cards to review again';
  const history = JSON.parse(localStorage.getItem('flashHistory') || '[]');
  history.push({ date: new Date().toISOString(), known, total });
  localStorage.setItem('flashHistory', JSON.stringify(history));
}

function resetFlashcards() {
  document.getElementById('flash-complete').style.display = 'none';
  document.getElementById('flash-setup').style.display = 'block';
}

initFlashcards();
