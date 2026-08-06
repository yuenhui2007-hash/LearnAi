// Quiz questions database for all 14 subjects
const quizData = {
  physics: [
    {q:"What are the 7 SI base units?",options:["m, kg, s, A, K, mol, cd","m, g, s, V, K, mol, cd","m, kg, hr, A, C, mol, lm","km, kg, s, A, K, mol, cd"],a:0,explanation:"The 7 SI base units are: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)."},
    {q:"A scalar quantity has:",options:["Magnitude and direction","Magnitude only","Direction only","Neither magnitude nor direction"],a:1,explanation:"Scalar quantities have magnitude only (e.g., mass, speed, distance, energy, temperature)."},
    {q:"Which equation is dimensionally correct?",options:["F = ma","F = m/a","F = m + a","F = m - a"],a:0,explanation:"F = ma is dimensionally correct: [MLT⁻²] = [M][LT⁻²]."},
    {q:"What is the acceleration of a ball thrown vertically upward?",options:["+9.81 m/s²","−9.81 m/s²","0 m/s²","Variable"],a:1,explanation:"Gravity always acts downward at 9.81 m/s², so acceleration is −9.81 m/s² (taking upward as positive)."},
    {q:"At maximum height of projectile motion, vertical velocity is:",options:["Maximum","Zero","Equal to horizontal velocity","Negative"],a:1,explanation:"At maximum height, the vertical component of velocity becomes zero before the object falls back down."}
  ],
  chemistry: [
    {q:"How many electrons can the first shell hold?",options:["2","8","18","32"],a:0,explanation:"The first shell can hold a maximum of 2 electrons."},
    {q:"What is the relative mass of a neutron?",options:["1/1840","1","4","1/2"],a:1,explanation:"A neutron has a relative mass of 1 (same as a proton)."},
    {q:"Ionic bonding involves:",options:["Sharing electrons","Transferring electrons","No electrons","Delocalised electrons"],a:1,explanation:"Ionic bonding involves the complete transfer of electrons from one atom to another."},
    {q:"Which element has the electronic configuration 2,8,7?",options:["Fluorine","Chlorine","Oxygen","Sodium"],a:1,explanation:"Chlorine (atomic number 17) has the electronic configuration 2,8,7."},
    {q:"What type of bond exists between two oxygen atoms?",options:["Ionic","Covalent","Metallic","Hydrogen"],a:1,explanation:"O₂ has a covalent double bond — two oxygen atoms share two pairs of electrons."}
  ],
  biology: [
    {q:"Which organelle is responsible for protein synthesis?",options:["Nucleus","Mitochondria","Ribosome","Golgi apparatus"],a:2,explanation:"Ribosomes are responsible for protein synthesis (translation of mRNA into proteins)."},
    {q:"Mitosis produces:",options:["4 haploid cells","2 diploid cells","4 diploid cells","2 haploid cells"],a:1,explanation:"Mitosis produces 2 genetically identical diploid daughter cells for growth and repair."},
    {q:"The cell wall in plant cells is made of:",options:["Peptidoglycan","Chitin","Cellulose","Glycogen"],a:2,explanation:"Plant cell walls are made of cellulose, which provides structural support."},
    {q:"Photosynthesis occurs in:",options:["Mitochondria","Chloroplasts","Ribosomes","Nucleus"],a:1,explanation:"Photosynthesis occurs in chloroplasts, which contain chlorophyll."},
    {q:"Which is NOT a feature of prokaryotic cells?",options:["No nucleus","70S ribosomes","Membrane-bound organelles","Circular DNA"],a:2,explanation:"Prokaryotic cells lack membrane-bound organelles — this is a defining feature of eukaryotes."}
  ],
  maths: [
    {q:"What is the discriminant of ax² + bx + c = 0?",options:["b² - 4ac","b² + 4ac","4ac - b²","-b² - 4ac"],a:0,explanation:"The discriminant is b² - 4ac. If > 0: two roots; = 0: one root; < 0: no real roots."},
    {q:"If f(x) = 2x + 3, what is f⁻¹(x)?",options:["(x-3)/2","(x+3)/2","2x - 3","x/2 + 3"],a:0,explanation:"To find the inverse: y = 2x + 3 → x = (y-3)/2 → f⁻¹(x) = (x-3)/2."},
    {q:"sin(30°) =",options:["1/2","√3/2","1/√2","1"],a:0,explanation:"sin(30°) = 1/2. Remember: sin(30) = cos(60) = 1/2."},
    {q:"The gradient of y = x³ is:",options:["3x²","x²","3x","x³"],a:0,explanation:"dy/dx = 3x² using the power rule: bring down the power, subtract 1."},
    {q:"∫ 2x dx =",options:["x² + C","2x² + C","x²","2 + C"],a:0,explanation:"∫ 2x dx = x² + C. Power rule for integration: add 1 to power, divide by new power."}
  ],
  economics: [
    {q:"Price elasticity of demand (PED) > 1 means demand is:",options:["Elastic","Inelastic","Unit elastic","Perfectly inelastic"],a:0,explanation:"PED > 1 means demand is elastic — quantity changes more than price."},
    {q:"A public good is:",options:["Excludable and rival","Non-excludable and non-rival","Excludable and non-rival","Non-excludable and rival"],a:1,explanation:"Public goods are non-excludable (can't prevent use) and non-rival (one person's use doesn't reduce availability)."},
    {q:"GDP measures:",options:["Total income","Total output","Total spending","All of the above"],a:3,explanation:"GDP = total output = total income = total spending (circular flow of income)."},
    {q:"A positive externality occurs when:",options:["Social cost > private cost","Social benefit > private benefit","Social cost < private cost","Social benefit < private benefit"],a:1,explanation:"Positive externality: social benefit exceeds private benefit (e.g., education, vaccination)."},
    {q:"The law of demand states that:",options:["Price and quantity demanded are directly related","Price and quantity demanded are inversely related","Price and supply are inversely related","Income and demand are inversely related"],a:1,explanation:"The law of demand: as price increases, quantity demanded decreases (inverse relationship)."}
  ],
  geography: [
    {q:"At a constructive (divergent) plate boundary:",options:["Plates move apart","Plates collide","Plates slide past","One plate subducts"],a:0,explanation:"At constructive boundaries, plates move apart and magma rises to fill the gap."},
    {q:"The Coriolis effect deflects winds:",options:["Right in NH, left in SH","Left in NH, right in SH","Always right","Always left"],a:0,explanation:"Coriolis effect deflects winds to the right in the Northern Hemisphere and left in the Southern Hemisphere."},
    {q:"A meander's outer bend is characterised by:",options:["Deposition","Erosion (river cliff)","Slow flow","Point bar"],a:1,explanation:"The outer bend has faster flow and erosion, forming a river cliff."},
    {q:"Which is a hard engineering coastal defence?",options:["Beach nourishment","Sea wall","Dune regeneration","Managed retreat"],a:1,explanation:"Sea walls are hard engineering — they are built structures designed to stop erosion."},
    {q:"In the DTM, Stage 2 is characterised by:",options:["High BR, high DR","High BR, falling DR","Low BR, low DR","Low BR, high DR"],a:1,explanation:"Stage 2: high birth rate, falling death rate → rapid population growth (typical of LEDCs)."}
  ],
  history: [
    {q:"The Blank Cheque refers to:",options:["Germany's unconditional support for Austria-Hungary","Britain's alliance with France","Russia's mobilisation","The Schlieffen Plan"],a:0,explanation:"Germany's 'blank cheque' (July 1914) gave Austria-Hungary unconditional support after the Sarajevo assassination."},
    {q:"The Fischer Thesis argues:",options:["Germany planned WWI","WWI was accidental","Russia caused WWI","Britain wanted war"],a:0,explanation:"Fritz Fischer argued Germany deliberately planned and caused WWI for European dominance."},
    {q:"The Truman Doctrine (1947) aimed to:",options:["Contain communism","Invade USSR","Create NATO","Rebuild Germany"],a:0,explanation:"The Truman Doctrine pledged US support to countries resisting communism, starting the policy of containment."},
    {q:"The Holocaust resulted in the deaths of approximately:",options:["1 million","3 million","6 million","10 million"],a:2,explanation:"Approximately 6 million Jews were murdered in the Holocaust, plus millions of others (Roma, disabled, political prisoners)."},
    {q:"The Marshall Plan provided:",options:["Military aid","Economic aid to Europe","Nuclear weapons","Colonial independence"],a:1,explanation:"The Marshall Plan (1948-1952) provided $13 billion in US economic aid to rebuild Western Europe after WWII."}
  ],
  ict: [
    {q:"1 byte equals:",options:["4 bits","8 bits","16 bits","32 bits"],a:1,explanation:"1 byte = 8 bits. This is fundamental to all data representation."},
    {q:"The CPU consists of:",options:["ALU, CU, Registers","RAM, ROM, HDD","Monitor, Keyboard, Mouse","Router, Switch, Hub"],a:0,explanation:"The CPU contains the ALU (Arithmetic Logic Unit), CU (Control Unit), and Registers."},
    {q:"LAN stands for:",options:["Large Area Network","Local Area Network","Long Access Node","Linked Area Network"],a:1,explanation:"LAN = Local Area Network (covers small area like a school or office)."},
    {q:"Which is volatile memory?",options:["RAM","ROM","SSD","Hard disk"],a:0,explanation:"RAM is volatile — data is lost when power is turned off. ROM is non-volatile."},
    {q:"Binary 1010 in denary is:",options:["8","10","12","14"],a:1,explanation:"1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10₁₀."}
  ],
  'additional-maths': [
    {q:"If f(x) = x² + 3x + 2, what is f(2)?",options:["8","12","10","6"],a:1,explanation:"f(2) = 4 + 6 + 2 = 12."},
    {q:"The derivative of eˣ is:",options:["eˣ","xeˣ⁻¹","ln(x)","1/x"],a:0,explanation:"d/dx(eˣ) = eˣ. This is a unique property of the exponential function."},
    {q:"log₂(8) =",options:["2","3","4","8"],a:1,explanation:"log₂(8) = 3 because 2³ = 8."},
    {q:"The sum of interior angles of a hexagon is:",options:["540°","720°","900°","1080°"],a:1,explanation:"Sum = (n-2) × 180° = 4 × 180° = 720°."},
    {q:"If sin θ = 3/5 and cos θ = 4/5, then tan θ =",options:["3/4","4/3","5/3","5/4"],a:0,explanation:"tan θ = sin θ / cos θ = (3/5) / (4/5) = 3/4."}
  ],
  business: [
    {q:"Market segmentation involves:",options:["Dividing market into groups","Setting prices","Making products","Advertising"],a:0,explanation:"Market segmentation = dividing a market into distinct groups with similar needs/characteristics."},
    {q:"A SWOT analysis examines:",options:["Strengths, Weaknesses, Opportunities, Threats","Sales, Wages, Output, Taxes","Supply, Workforce, Organisation, Technology","Strategy, Workforce, Objectives, Targets"],a:0,explanation:"SWOT = Strengths, Weaknesses (internal) + Opportunities, Threats (external)."},
    {q:"Cash flow is:",options:["Total revenue","Revenue minus costs","Movement of cash in and out","Profit after tax"],a:2,explanation:"Cash flow = movement of cash into and out of a business over time."},
    {q:"A franchise is:",options:["A type of loan","A business owned by government","A business where owner pays to use brand name","A partnership"],a:2,explanation:"A franchisee pays the franchisor to use their brand name, products, and business model."},
    {q:"Break-even point occurs when:",options:["Revenue = Total costs","Revenue > Total costs","Revenue < Total costs","Profit is maximum"],a:0,explanation:"Break-even: Total revenue = Total costs (fixed + variable). No profit, no loss."}
  ],
  accounting: [
    {q:"Double entry means:",options:["Every transaction has two equal effects","Two people check entries","Entries are made twice","Debit always exceeds credit"],a:0,explanation:"Double entry: every transaction has equal debit and credit effects (assets = liabilities + capital)."},
    {q:"Gross profit =",options:["Revenue - Cost of sales","Revenue - All expenses","Revenue + Cost of sales","Net profit + Expenses"],a:0,explanation:"Gross profit = Revenue - Cost of sales. It measures trading performance before overheads."},
    {q:"A debit balance on a bank account means:",options:["Money in bank","Bank overdraft","No money","Credit from bank"],a:1,explanation:"A debit balance on the bank column in cash book = bank overdraft (money owed to bank)."},
    {q:"Depreciation is:",options:["Increase in asset value","Decrease in asset value over time","Purchase of new asset","Sale of asset"],a:1,explanation:"Depreciation = allocation of cost of a non-current asset over its useful life."},
    {q:"Current ratio =",options:["Current assets / Current liabilities","Current liabilities / Current assets","Fixed assets / Current liabilities","Total assets / Total liabilities"],a:0,explanation:"Current ratio = Current assets ÷ Current liabilities. Measures ability to pay short-term debts."}
  ],
  english: [
    {q:"A metaphor is:",options:["Direct comparison without 'like' or 'as'","Comparison using 'like' or 'as'","Exaggeration","Repetition of sounds"],a:0,explanation:"Metaphor = direct comparison stating one thing IS another (e.g., 'time is a thief')."},
    {q:"The tone of a text refers to:",options:["The writer's attitude","The plot","The setting","The characters"],a:0,explanation:"Tone = the writer's attitude toward the subject or audience (e.g., sarcastic, serious, humorous)."},
    {q:"In literature, 'theme' means:",options:["The main idea/message","The plot summary","The characters","The setting"],a:0,explanation:"Theme = the central idea or message explored in a text (e.g., love, power, identity)."},
    {q:"First person narration uses:",options:["'I' and 'me'","'He' and 'she'","'You'","'They'"],a:0,explanation:"First person uses 'I', 'me', 'my' — the narrator is a character in the story."},
    {q:"Alliteration is:",options:["Repetition of initial consonant sounds","Repetition of vowel sounds","Rhyme at line endings","Contrasting ideas"],a:0,explanation:"Alliteration = repetition of the same initial consonant sound (e.g., 'Peter Piper picked')."}
  ],
  chinese: [
    {q:"汉字'明'由什么组成？",options:["日 + 月","木 + 木","人 + 口","水 + 火"],a:0,explanation:"明 = 日(sun) + 月(moon) = bright. This is a semantic compound."},
    {q:"'你好'的拼音是:",options:["nǐ hǎo","ní hǎo","nǐ hāo","nī hǎo"],a:0,explanation:"你好 = nǐ hǎo (hello). 你 = nǐ (3rd tone), 好 = hǎo (3rd tone)."},
    {q:"文言文的特点不包括:",options:["使用古代词汇","语法与现代汉语相同","使用典故","句子较简短"],a:1,explanation:"文言文语法与现代汉语不同 — 这是其主要特点之一。"},
    {q:"中国四大名著不包括:",options:["《红楼梦》","《西游记》","《三国演义》","《聊斋志异》"],a:3,explanation:"四大名著：《红楼梦》《西游记》《三国演义》《水浒传》。《聊斋志异》是蒲松龄的短篇小说集。"},
    {q:"'春眠不觉晓'出自:",options:["李白","杜甫","孟浩然","王维"],a:2,explanation:"'春眠不觉晓，处处闻啼鸟'出自孟浩然《春晓》。"}
  ],
  psychology: [
    {q:"The cognitive approach focuses on:",options:["Mental processes","Unconscious drives","Observable behaviour","Biological mechanisms"],a:0,explanation:"The cognitive approach studies mental processes: memory, perception, thinking, decision-making."},
    {q:"Short-term memory capacity is approximately:",options:["5±2 items","7±2 items","9±2 items","Unlimited"],a:1,explanation:"Miller's Magic Number: STM capacity is 7±2 items (chunks of information)."},
    {q:"Classical conditioning was discovered by:",options:["Skinner","Pavlov","Bandura","Freud"],a:1,explanation:"Pavlov discovered classical conditioning through his experiments with dogs and salivation."},
    {q:"In Milgram's obedience study, participants believed they were:",options:["Giving electric shocks","Receiving electric shocks","Teaching vocabulary","Observing behaviour"],a:0,explanation:"Participants believed they were administering electric shocks to a 'learner' (actually an actor)."},
    {q:"The id operates on the:",options:["Reality principle","Pleasure principle","Morality principle","Conscious mind"],a:1,explanation:"Freud's id operates on the pleasure principle — seeking immediate gratification of desires."}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quizData };
}
