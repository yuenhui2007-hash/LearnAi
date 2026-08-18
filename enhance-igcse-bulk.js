#!/usr/bin/env node
/**
 * Bulk IGCSE Notes Enhancer
 * Expands skeletal CAIE IGCSE notes with detailed explanations,
 * worked examples, common mistakes, key points, and exam tips.
 */
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir)
  .filter(f => f.endsWith('-igcse.html') && !f.endsWith('-summary.html'))
  .filter(f => !f.startsWith('edexcel') && !f.startsWith('ib'));

console.log(`Found ${files.length} CAIE IGCSE note files to enhance`);

// Subject content generators
const subjectLibraries = {
  biology: {
    introText: (topic) => `Understanding ${topic} is fundamental to IGCSE Biology. This topic frequently appears in both Paper 2 (Multiple Choice) and Paper 4 (Theory), so mastering the details is essential for achieving a high grade.`,
    examContext: () => `In IGCSE Biology examinations, you may be asked to recall facts, explain processes, interpret diagrams, or apply knowledge to unfamiliar contexts. Always use precise biological terminology — marks are awarded for specific key words.`,
    commonMistakes: [
      'Confusing the terms "absorption" and "assimilation" — absorption is taking nutrients into the blood; assimilation is incorporating them into cells.',
      'Stating that enzymes are "killed" by high temperature — enzymes are denatured, not killed (they are not living).',
      'Forgetting to mention the role of ATP in active processes — always check if energy is required.',
      'Mixing up the sites of photosynthesis and respiration — photosynthesis occurs in chloroplasts; aerobic respiration in mitochondria.',
      'Using "growth" instead of "cell division" when describing mitosis — mitosis produces two genetically identical daughter cells.',
      'Confusing osmosis with diffusion — osmosis is specifically the diffusion of water molecules across a partially permeable membrane.',
      'Saying "the cell wall controls what enters and leaves" — it is the cell membrane that controls entry and exit; the cell wall provides structural support.',
      'Forgetting that bacteria are prokaryotes and lack a true nucleus and membrane-bound organelles.'
    ],
    keyPoints: [
      'Use precise terminology — examiners award marks for specific words like "denatured", "partially permeable", and "semi-conservative".',
      'Link structure to function in every answer — this is a core assessment objective.',
      'Draw diagrams clearly with labels — even in theory papers, sketching can help structure your answer.',
      'Memorise the balanced equation for photosynthesis and aerobic respiration.',
      'Understand the difference between aerobic and anaerobic respiration in terms of products and energy yield.',
      'Know the stages of the nitrogen cycle and carbon cycle with specific organisms involved.',
      'Practice interpreting data from graphs and tables — data analysis is a common question type.',
      'Understand the concept of limiting factors and be able to apply it to photosynthesis.'
    ],
    examTips: [
      'Read the question carefully — command words like "state", "describe", "explain", and "compare" require different answer structures.',
      'For "explain" questions, always give a reason (use "because" or "this means that").',
      'In data analysis questions, quote actual figures from the graph or table.',
      'When comparing, always mention both items — e.g., "X is... whereas Y is...".',
      'Plan extended response questions before writing — a brief bullet plan helps structure your answer.',
      'Check that your answer matches the number of marks available — 2 marks usually need 2 distinct points.',
      'Leave time at the end to review answers and correct any obvious errors.',
      'For definition questions, give a complete, precise definition — half-statements may not earn full marks.'
    ]
  },
  chemistry: {
    introText: (topic) => `Mastering ${topic} is essential for success in IGCSE Chemistry. This topic is examined across all papers and forms the foundation for many subsequent topics in the syllabus.`,
    examContext: () => `IGCSE Chemistry papers test recall, application, and analysis. Paper 2 (Multiple Choice) tests breadth; Paper 4 (Theory) tests depth. Always show working in calculation questions — method marks are awarded even if the final answer is incorrect.`,
    commonMistakes: [
      'Forgetting to convert cm³ to dm³ when using n = c × V — divide by 1000.',
      'Confusing relative atomic mass (Aᵣ) with relative molecular mass (Mᵣ) — Aᵣ is for atoms; Mᵣ is for molecules.',
      'Using the wrong mole ratio from a balanced equation — always check the stoichiometric coefficients.',
      'Forgetting to state the state symbols (s, l, g, aq) in chemical equations when required.',
      'Confusing oxidation and reduction — OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain.',
      'Using "amount" when you mean "mass" or "concentration" — be precise with chemical terminology.',
      'Forgetting that Group 1 metals react vigorously with water, producing hydrogen gas and an alkaline solution.',
      'Mixing up the products of electrolysis of molten vs aqueous sodium chloride.'
    ],
    keyPoints: [
      'Memorise the first 20 elements and their symbols — this speeds up equation writing.',
      'Know the solubility rules for common salts — this helps predict precipitation reactions.',
      'Understand the reactivity series and be able to apply it to displacement reactions.',
      'Practice balancing equations — it becomes automatic with repetition.',
      'Learn the colours of common transition metal compounds and flame test colours.',
      'Understand the difference between strong and weak acids in terms of ionisation, not concentration.',
      'Know the conditions and catalysts for the Haber Process and Contact Process.',
      'Be able to calculate percentage yield and atom economy — these are common calculation topics.'
    ],
    examTips: [
      'Always show your working in calculations — method marks are often worth more than the answer mark.',
      'Write chemical equations with correct formulae and balancing — unbalanced equations lose marks.',
      'Use the Periodic Table provided — atomic numbers and relative atomic masses are given.',
      'For "explain" questions, link the observation to the underlying chemistry.',
      'In organic chemistry, learn the general formulae and functional groups thoroughly.',
      'When drawing structures, show all bonds clearly — skeletal formulas are acceptable if drawn correctly.',
      'Check units in final answers — kJ/mol, g/dm³, mol/dm³ are commonly required.',
      'For titration calculations, write the equation first, then use the mole ratio methodically.'
    ]
  },
  physics: {
    introText: (topic) => `A thorough understanding of ${topic} is crucial for IGCSE Physics. This topic builds fundamental skills in calculation, graphical analysis, and conceptual reasoning that are tested throughout the examination.`,
    examContext: () => `IGCSE Physics examinations emphasise problem-solving. Paper 2 tests conceptual understanding; Paper 4 tests application and calculation. Always define your variables, show substitution into formulae, and state units clearly.`,
    commonMistakes: [
      'Forgetting to convert units — e.g., cm to m, g to kg, minutes to seconds before substituting into equations.',
      'Using g = +9.81 m/s² when an object is decelerating upwards — g always acts downwards.',
      'Confusing speed and velocity — velocity is a vector (has direction); speed is a scalar.',
      'Forgetting that distance is a scalar while displacement is a vector — they are not interchangeable.',
      'Using the wrong equation of motion — check which variable is missing (s, u, v, a, t).',
      'Confusing series and parallel circuit rules — in series, current is constant; in parallel, voltage is constant.',
      'Forgetting that resistance increases with temperature for a filament lamp (not constant).',
      'Mixing up constructive and destructive interference — constructive = waves in phase, amplitude increases.'
    ],
    keyPoints: [
      'Learn all equations of motion and when to use each — practise identifying the missing variable.',
      'Always draw force diagrams — this helps identify the forces acting and their directions.',
      'Remember Newton\'s three laws and be able to apply them to different situations.',
      'Understand the difference between transverse and longitudinal waves with examples.',
      'Know the ray diagrams for convex and concave lenses and mirrors.',
      'Memorise the circuit symbols and be able to construct series and parallel circuits.',
      'Understand the relationship between work, energy, and power — and their units.',
      'Know the difference between scalar and vector quantities and give examples of each.'
    ],
    examTips: [
      'Always write the formula first, then substitute values, then calculate — this earns method marks.',
      'Check significant figures — give answers to the same number of significant figures as the data.',
      'Draw graphs with a sharp pencil, label axes with quantities and units, and use a ruler for straight lines.',
      'For ray diagrams, use a ruler and protractor — accuracy matters.',
      'In calculation questions, always state the unit of the final answer.',
      'Read the question twice — underlining key information helps avoid misreading.',
      'For "explain" questions, use physics principles, not just descriptions.',
      'If stuck on a calculation, check if units need conversion before giving up.'
    ]
  },
  maths: {
    introText: (topic) => `${topic} is a core topic in IGCSE Mathematics. Strong foundations here are essential for both the Extended and Core syllabi, and this content frequently links to other mathematical topics.`,
    examContext: () => `IGCSE Mathematics papers test method, accuracy, and reasoning. Paper 2 (Extended) allows calculators; Paper 4 (Extended) tests non-calculator skills. Always show clear working — method marks are awarded at each stage.`,
    commonMistakes: [
      'Making sign errors when expanding brackets — especially with negative coefficients.',
      'Forgetting to flip the inequality sign when multiplying or dividing by a negative number.',
      'Confusing mean, median, and mode — mean = average; median = middle; mode = most frequent.',
      'Using the wrong trigonometric ratio — SOH CAH TOA is essential for right-angled triangles.',
      'Forgetting to rationalise the denominator when simplifying surds.',
      'Making arithmetic errors with negative numbers — double-check signs in every step.',
      'Confusing the formulae for circumference (2πr) and area (πr²) of a circle.',
      'Forgetting to give answers to the required degree of accuracy — check the question!'
    ],
    keyPoints: [
      'Memorise all standard formulae — area, volume, trigonometry, circle theorems, etc.',
      'Practise factorising quadratics — this skill appears across many topics.',
      'Know your laws of indices and be able to apply them confidently.',
      'Understand direct and inverse proportion and how to set up and solve proportion equations.',
      'Learn the circle theorems thoroughly — they are tested in both calculator and non-calculator papers.',
      'Be comfortable converting between fractions, decimals, and percentages.',
      'Practise rearranging formulae — this is a fundamental skill for physics and chemistry too.',
      'Know how to construct angles (60°, 90°) and perpendicular bisectors using compasses and ruler.'
    ],
    examTips: [
      'Always show your working — even if the final answer is wrong, method marks can be awarded.',
      'Check the number of marks available — this indicates the expected depth of working.',
      'For construction questions, leave your construction lines visible — they are part of the method.',
      'Use a sharp pencil and ruler for all diagrams and graphs.',
      'In probability questions, write probabilities as fractions, decimals, or percentages — not ratios.',
      'For "show that" questions, work towards the given answer, not from it.',
      'Check your answer makes sense — e.g., probability cannot be greater than 1.',
      'Leave time to review calculations, especially those involving negative numbers or fractions.'
    ]
  },
  economics: {
    introText: (topic) => `Understanding ${topic} is central to IGCSE Economics. This topic links microeconomic and macroeconomic concepts and is frequently tested in data response and essay-style questions.`,
    examContext: () => `IGCSE Economics requires both knowledge and application. Paper 1 (Multiple Choice) tests definitions and concepts; Paper 2 (Structured Questions) tests analysis and evaluation. Always use real-world examples where possible.`,
    commonMistakes: [
      'Confusing a movement along a demand curve with a shift of the demand curve — price changes cause movements; other factors cause shifts.',
      'Using "demand" and "quantity demanded" interchangeably — they are not the same.',
      'Forgetting that price elasticity of demand is always negative — economists often ignore the sign.',
      'Confusing public goods with merit goods — public goods are non-excludable and non-rivalrous.',
      'Mixing up direct and indirect taxes — direct taxes are on income/profit; indirect taxes are on spending.',
      'Using the term "inflation" when you mean "a rise in the price of one good" — inflation is a sustained increase in the general price level.',
      'Confusing balance of trade deficit with a government budget deficit — they are different concepts.',
      'Forgetting that economic growth does not necessarily mean development — development includes social factors.'
    ],
    keyPoints: [
      'Always draw supply and demand diagrams accurately — label axes, curves, equilibrium, and shifts.',
      'Know the factors that shift supply and demand curves — memorise these as lists.',
      'Understand the four types of market structure: perfect competition, monopoly, monopolistic competition, oligopoly.',
      'Be able to explain the functions of money and the role of central banks.',
      'Know the causes and consequences of inflation, unemployment, and balance of payments deficits.',
      'Understand the difference between fiscal policy, monetary policy, and supply-side policy.',
      'Learn the advantages and disadvantages of free trade and protectionism.',
      'Be able to evaluate government policies using criteria like effectiveness, time lags, and unintended consequences.'
    ],
    examTips: [
      'For "explain" questions, always use a diagram if relevant — diagrams earn marks directly.',
      'Use real-world examples — e.g., "as seen in the UK in 2022 when inflation reached 11%".',
      'For evaluation questions, consider both sides before reaching a reasoned judgement.',
      'Define key terms in your answer — this demonstrates knowledge and can earn definition marks.',
      'In data response questions, refer to the data provided — quote figures to support your analysis.',
      'Structure essay answers with clear paragraphs, each making one main point.',
      'Use connective phrases like "however", "on the other hand", "therefore" to develop arguments.',
      'Check the command word — "discuss" requires both sides; "evaluate" requires a judgement.'
    ]
  },
  business: {
    introText: (topic) => `${topic} is a key area in IGCSE Business Studies. Understanding this topic enables you to analyse business situations, evaluate decisions, and apply business theory to real-world case studies.`,
    examContext: () => `IGCSE Business Studies tests knowledge, application, analysis, and evaluation. Paper 1 (Short Answer) tests recall and simple application; Paper 2 (Case Study) tests deeper analysis and evaluation of a given business scenario.`,
    commonMistakes: [
      'Giving generic answers without applying them to the business in the case study — always contextualise.',
      'Confusing cash flow with profit — a business can be profitable but have poor cash flow.',
      'Mixing up revenue and profit — revenue is total income; profit is revenue minus costs.',
      'Forgetting to mention both advantages and disadvantages in evaluation questions.',
      'Confusing a mission statement (purpose) with an aim (long-term goal) with an objective (measurable target).',
      'Using "market research" as a solution to every problem — be specific about primary vs secondary methods.',
      'Confusing internal recruitment (promoting existing staff) with external recruitment (hiring from outside).',
      'Forgetting that stakeholders may have conflicting interests — not all stakeholders want the same thing.'
    ],
    keyPoints: [
      'Always apply theory to the case study business — use the business name and specific details.',
      'Know the four functions of management: planning, organising, leading, controlling.',
      'Understand the difference between leadership styles: autocratic, democratic, laissez-faire, paternalistic.',
      'Be able to calculate and interpret financial ratios: gross profit margin, net profit margin, ROCE, current ratio, acid test ratio.',
      'Know the advantages and disadvantages of different sources of finance for different business situations.',
      'Understand the marketing mix (4 Ps: Product, Price, Place, Promotion) and how they interact.',
      'Learn the stages of the product life cycle and appropriate strategies at each stage.',
      'Know the factors that influence the choice of business location and method of production.'
    ],
    examTips: [
      'Read the case study carefully — underline key facts about the business, its problems, and its market.',
      'Always apply your answer to the case study — mention the business name and specific circumstances.',
      'For "analyse" questions, use the formula: point → because → this means that → therefore.',
      'For "evaluate" questions, give at least two advantages and two disadvantages before making a judgement.',
      'Use business terminology accurately — e.g., "diseconomies of scale", "cash flow forecast", "market segmentation".',
      'Check the number of marks — 6+ marks usually require developed points with application.',
      'Write in paragraphs, not bullet points, for 4+ mark questions unless instructed otherwise.',
      'Plan your answer before writing — especially for the longer evaluation questions at the end of Paper 2.'
    ]
  },
  accounting: {
    introText: (topic) => `${topic} forms the foundation of IGCSE Accounting. Accuracy, neatness, and understanding of double-entry principles are essential for success in both theoretical and practical examination questions.`,
    examContext: () => `IGCSE Accounting tests both knowledge and practical application. You must be able to prepare ledger accounts, trial balances, financial statements, and interpret accounting information. Neat, well-presented work earns presentation marks.`,
    commonMistakes: [
      'Debiting and crediting the wrong accounts — always ask: is this account receiving (debit) or giving (credit) value?',
      'Forgetting to balance off ledger accounts at the end of the period.',
      'Confusing capital expenditure (asset) with revenue expenditure (expense) — this affects profit and asset values.',
      'Making errors in the adjustment for depreciation — remember to adjust both the asset and the provision for depreciation.',
      'Forgetting to account for accruals and prepayments in the income statement and statement of financial position.',
      'Mixing up returns inwards (sales returns, debit) with returns outwards (purchases returns, credit).',
      'Incorrectly calculating cost of sales — remember: opening inventory + purchases – closing inventory.',
      'Forgetting that drawings reduce capital but are not a business expense — they do not appear in the income statement.'
    ],
    keyPoints: [
      'Master the double-entry rule: every debit has a corresponding credit.',
      'Know the difference between capital and revenue expenditure and receipts.',
      'Be able to prepare a full set of financial statements from a trial balance and adjustments.',
      'Understand the purpose and preparation of control accounts for receivables and payables.',
      'Know how to calculate and account for different depreciation methods: straight-line and reducing balance.',
      'Be able to reconcile the bank statement with the cash book — understand standing orders, direct debits, dishonoured cheques.',
      'Understand the purpose of suspense accounts and how to correct errors not affecting the trial balance agreement.',
      'Know the difference between trade discount (deducted before recording) and cash discount (recorded as an expense/income).'
    ],
    examTips: [
      'Present your work neatly — use rulers, label all statements clearly, and show all workings.',
      'Always show your calculations — method marks are awarded even if the final figure is incorrect.',
      'For ledger accounts, write narrations briefly — they show understanding of the transaction.',
      'Check that your trial balance balances — if not, find the error before proceeding.',
      'Read the question carefully to identify all adjustments before starting your answer.',
      'For ratio analysis, state the formula, show the calculation, and interpret the result in context.',
      'Use the correct terminology — "statement of financial position", "income statement", "equity".',
      'Manage your time carefully — longer questions are worth more marks and need adequate time.'
    ]
  },
  history: {
    introText: (topic) => `${topic} is a significant area of study in IGCSE History. Understanding the causes, events, and consequences of historical developments is essential for constructing analytical essays and source-based answers.`,
    examContext: () => `IGCSE History examines knowledge, source analysis, and essay-writing skills. Paper 1 tests depth studies through structured questions; Paper 2 tests breadth studies through source analysis and essays. Always use specific evidence.`,
    commonMistakes: [
      'Writing narrative instead of analysis — history essays need causation and significance, not just chronology.',
      'Using vague generalisations instead of specific evidence — always include dates, names, and statistics.',
      'Forgetting to evaluate sources for reliability and usefulness in Paper 2 questions.',
      'Describing a source instead of analysing it — explain what it shows and why it matters.',
      'Failing to reach a clear judgement in essay questions — your conclusion should answer the question directly.',
      'Ignoring the provenance of sources — who wrote it, when, and why? This affects reliability.',
      'Using modern perspectives to judge historical actions — consider the context of the time.',
      'Forgetting to link back to the question in each paragraph — every point should support your argument.'
    ],
    keyPoints: [
      'Memorise key dates, names, and events — specific evidence is essential for high marks.',
      'Understand the difference between causes (why it happened) and consequences (what resulted).',
      'Learn to evaluate sources using NOP (Nature, Origin, Purpose) and content analysis.',
      'Practise writing timed essays — time management is crucial in the examination.',
      'Know the difference between short-term and long-term causes and consequences.',
      'Be able to compare and contrast different historical interpretations of the same event.',
      'Understand the concept of historical significance — why does this event matter?',
      'Always plan your essay before writing — a clear structure improves coherence and argumentation.'
    ],
    examTips: [
      'For source questions, always comment on both content and provenance — this is the key to high marks.',
      'Use the formula for source evaluation: what it says + what this suggests + how reliable/useful it is + why.',
      'In essay questions, use specific evidence — "On 28 June 1914" not "in 1914".',
      'Structure essays with an introduction, developed paragraphs, and a clear conclusion.',
      'Each paragraph should make one main point, supported by evidence and explanation.',
      'For "to what extent" questions, consider evidence for and against before reaching a judgement.',
      'Check the number of marks — higher marks require greater depth, analysis, and evaluation.',
      'Leave time to review — check that you have answered the question asked, not the one you expected.'
    ]
  },
  geography: {
    introText: (topic) => `${topic} is a core topic in IGCSE Geography. It combines theoretical knowledge with practical skills in map reading, data interpretation, and fieldwork analysis.`,
    examContext: () => `IGCSE Geography tests knowledge, skills, and application. Paper 1 tests physical and human geography topics; Paper 2 tests geographical skills including map work and data analysis; Paper 3 (optional) tests fieldwork and coursework.`,
    commonMistakes: [
      'Confusing weather (short-term atmospheric conditions) with climate (long-term average weather).',
      'Mixing up erosion and weathering — erosion involves movement; weathering is in situ breakdown.',
      'Forgetting to use map evidence when answering map-based questions — quote grid references and features.',
      'Confusing birth rate and death rate with natural increase — natural increase = birth rate − death rate.',
      'Using "LEDC" and "MEDC" without defining them or recognising that these categories are simplifications.',
      'Forgetting to describe the trend in a graph before explaining it — description must come first.',
      'Confusing river erosion processes: hydraulic action, abrasion, attrition, solution.',
      'Mixing up push factors (reasons to leave) and pull factors (reasons to move to) in migration studies.'
    ],
    keyPoints: [
      'Learn the processes and landforms for rivers, coasts, and glaciation with diagrams.',
      'Understand the factors affecting climate and be able to explain them using the energy balance model.',
      'Know the causes and consequences of population change, including the Demographic Transition Model.',
      'Be able to read and interpret OS maps — including grid references, contours, and scale.',
      'Understand the causes and impacts of tectonic hazards and the strategies used to manage them.',
      'Know the characteristics and challenges of urbanisation in different parts of the world.',
      'Be able to analyse population pyramids and understand what they reveal about a country.',
      'Understand sustainable development and be able to evaluate different approaches to resource management.'
    ],
    examTips: [
      'For map questions, always quote specific evidence — grid references, compass directions, distances.',
      'When describing a graph, use data — quote figures and identify trends, peaks, and anomalies.',
      'For "explain" questions, give reasons — link back to geographical processes and concepts.',
      'Use diagrams wherever possible — labelled diagrams can earn marks directly.',
      'In fieldwork questions, describe your methodology clearly and explain why you chose those methods.',
      'Evaluate your fieldwork — acknowledge limitations and suggest improvements.',
      'Check the command word — "describe" and "explain" require very different answers.',
      'Manage your time — skills questions (Paper 2) often require careful measurement and calculation.'
    ]
  },
  ict: {
    introText: (topic) => `${topic} is a fundamental topic in IGCSE ICT. Understanding both the theory and practical applications of information and communication technology is essential for the modern world and the examination.`,
    examContext: () => `IGCSE ICT tests theoretical knowledge, practical skills, and the ability to apply ICT to solve problems. Paper 1 (Theory) tests knowledge and understanding; Paper 2 (Practical) tests hands-on skills in word processing, spreadsheets, databases, and presentations.`,
    commonMistakes: [
      'Confusing bits and bytes — 1 byte = 8 bits. File sizes are in bytes; data transfer speeds are often in bits.',
      'Mixing up RAM and ROM — RAM is volatile (loses data when power off); ROM is non-volatile.',
      'Forgetting to convert between binary, denary, and hexadecimal — practise these conversions regularly.',
      'Confusing verification (checking data is entered correctly) with validation (checking data is reasonable).',
      'Using "hacking" as a generic term — be specific about the type of threat (virus, phishing, malware, etc.).',
      'Forgetting that a LAN covers a small geographical area while a WAN covers a large area.',
      'Mixing up the functions of the CPU components — ALU (calculations), CU (control), Registers (temporary storage).',
      'Confusing an intranet (internal network) with the Internet (global network).'
    ],
    keyPoints: [
      'Know the hardware components of a computer system and their functions.',
      'Understand the difference between system software and application software with examples.',
      'Be able to convert between binary, denary, and hexadecimal number systems.',
      'Know the stages of the systems development life cycle and what happens at each stage.',
      'Understand the difference between verification methods (double entry, visual check) and validation checks (range check, type check, etc.).',
      'Know the advantages and disadvantages of different input and output devices for specific situations.',
      'Understand the threats to computer systems and the methods used to protect against them.',
      'Be able to create and modify spreadsheets, databases, and presentations in the practical examination.'
    ],
    examTips: [
      'In theory questions, use precise terminology — "volatile" not "forgets data when switched off".',
      'For number conversion questions, show your working — method marks are available.',
      'In practical examinations, follow the instructions exactly — missing a small step can lose marks.',
      'For database questions, know how to create queries using criteria and sorting.',
      'In spreadsheet questions, be able to use formulae, functions (SUM, AVERAGE, IF, etc.), and create charts.',
      'For presentation questions, apply design principles — consistency, readability, appropriate use of images.',
      'When discussing security, give specific examples — "firewall" is better than "security software".',
      'Check your files before finishing the practical exam — ensure they are saved in the correct format and location.'
    ]
  },
  english: {
    introText: (topic) => `${topic} is central to IGCSE English Language and Literature. Developing skills in reading, writing, analysis, and interpretation is essential for success across all components of the examination.`,
    examContext: () => `IGCSE English examines reading comprehension, writing skills, and literary analysis. Paper 1 (Reading) tests comprehension and directed writing; Paper 2 (Writing) tests creative and argumentative writing; Literature papers test analysis of set texts, poetry, and drama.`,
    commonMistakes: [
      'Summarising a text instead of analysing it — analysis requires interpretation of language, structure, and effect.',
      'Using informal language in formal writing tasks — match your register to the audience and purpose.',
      'Forgetting to answer all parts of a question — check bullet points and sub-questions carefully.',
      'Quoting evidence without explaining its effect — always analyse how the writer achieves their purpose.',
      'Writing narrative instead of descriptive or argumentative when the question specifies a form.',
      'Ignoring the writer\'s techniques — identify and comment on specific literary devices (metaphor, simile, imagery, etc.).',
      'Forgetting to plan creative writing — a brief plan improves structure and coherence.',
      'Not checking spelling, punctuation, and grammar — accuracy is part of the assessment criteria.'
    ],
    keyPoints: [
      'Analyse language at word level — consider connotation, denotation, and semantic fields.',
      'Consider structure — sentence length, paragraphing, and text organisation all contribute to effect.',
      'In creative writing, use sensory language (sight, sound, smell, touch, taste) to engage the reader.',
      'For argumentative writing, use rhetorical devices: rhetorical questions, tripling, direct address, statistics.',
      'In literature essays, always link your point to the writer\'s purpose or the text\'s themes.',
      'Know your set texts thoroughly — memorise key quotations and be able to analyse them in context.',
      'Practise writing under timed conditions — time management is crucial in English examinations.',
      'Read widely — exposure to different styles improves your own writing and analytical skills.'
    ],
    examTips: [
      'For reading questions, quote evidence and then explain its effect — PEE (Point, Evidence, Explanation) structure.',
      'In creative writing, match your style to the form and audience specified in the question.',
      'For literature essays, plan your answer — a clear introduction, structured paragraphs, and a conclusion.',
      'Analyse, don\'t just describe — ask "why" and "how" the writer achieves their effect.',
      'Check your spelling, punctuation, and grammar — accuracy contributes to your mark.',
      'Use a range of sentence structures — simple, compound, and complex sentences add variety.',
      'For summary questions, select relevant points and express them concisely in your own words.',
      'Leave time to review — check for clarity, coherence, and any errors in your final answer.'
    ]
  },
  chinese: {
    introText: (topic) => `${topic}是IGCSE中文课程的重要组成部分。掌握词汇、语法、阅读理解以及写作技巧对于在考试中取得优异成绩至关重要。`,
    examContext: () => `IGCSE中文考试测试学生的听力、口语、阅读和写作能力。不同试卷侧重于不同的技能，学生需要全面准备，特别是在词汇量和语法准确性方面。`,
    commonMistakes: [
      '混淆简体字和繁体字 — 考试中应使用题目要求的字体。',
      '忽视标点符号的正确使用 — 中文标点与英文标点有所不同。',
      '写作时句子结构过于简单 — 适当使用复合句和连接词可以提高作文质量。',
      '阅读理解时只找关键词而不理解全文意思 — 需要把握文章的中心思想和作者态度。',
      '口语考试时语速过快导致发音不清 — 保持适中的语速，注意声调。',
      '写作时偏题 — 必须仔细审题，确保内容紧扣题目要求。',
      '忽略文化背景知识 — 了解中国文化有助于更好地理解阅读材料。',
      '词汇使用不当 — 注意近义词的细微差别和搭配习惯。'
    ],
    keyPoints: [
      '扩大词汇量是提高各项技能的基础 — 每天坚持记忆新词汇并复习旧词汇。',
      '掌握常用语法结构，特别是把字句、被字句、比较句等特殊句式。',
      '阅读各类文章，包括新闻、故事、说明文和议论文，提高理解能力。',
      '练习写作时注意文章结构：开头点题、中间展开、结尾总结。',
      '了解中国传统文化和现代社会的相关话题，丰富写作素材。',
      '听力练习要循序渐进，从慢速材料开始，逐渐过渡到正常语速。',
      '口语练习时注意声调的准确性，这是普通话的重要特征。',
      '多做历年真题，熟悉考试题型和时间分配。'
    ],
    examTips: [
      '阅读理解题要先读问题再读文章，带着问题找答案可以提高效率。',
      '写作时要列提纲，确保文章有清晰的逻辑结构。',
      '注意书写工整，卷面整洁可以给阅卷老师留下好印象。',
      '翻译题要准确理解原文意思，不要逐字硬译。',
      '听力考试时提前阅读选项，预测可能的内容。',
      '口语考试保持自然，不要太紧张，可以适当使用肢体语言。',
      '检查作文时特别注意常见的错别字和语法错误。',
      '合理分配考试时间，不要在某一题上花费过多时间。'
    ]
  },
  'additional-maths': {
    introText: (topic) => `${topic} is a challenging but rewarding topic in IGCSE Additional Mathematics. This subject bridges the gap between IGCSE Mathematics and A-Level, requiring strong algebraic skills and logical reasoning.`,
    examContext: () => `IGCSE Additional Mathematics tests pure mathematical skills across two papers. Both papers require calculators and test knowledge of functions, quadratics, indices, surds, factors, simultaneous equations, logarithms, trigonometry, and calculus. Working must be shown clearly.`,
    commonMistakes: [
      'Making sign errors when expanding or factorising expressions — double-check every sign.',
      'Forgetting the restrictions on logarithms — logₐ(b) is only defined for a > 0, a ≠ 1, and b > 0.',
      'Confusing the rules of indices — especially negative and fractional indices.',
      'Using the wrong trigonometric identity — memorise all standard identities thoroughly.',
      'Forgetting +c when integrating indefinite integrals — this is a very common error.',
      'Making arithmetic errors with fractions — find common denominators carefully.',
      'Confusing the chain rule, product rule, and quotient rule for differentiation.',
      'Forgetting to consider all solutions when solving trigonometric equations — check the given range.'
    ],
    keyPoints: [
      'Master algebraic manipulation — this is the foundation of all Additional Mathematics.',
      'Memorise all logarithm laws and be able to apply them in both directions.',
      'Know the shapes and key features of standard functions: linear, quadratic, cubic, exponential, logarithmic, trigonometric.',
      'Be able to solve simultaneous equations algebraically and graphically.',
      'Understand the binomial theorem and be able to expand expressions of the form (a + b)ⁿ.',
      'Know the derivatives and integrals of standard functions including trigonometric functions.',
      'Be able to apply differentiation to find gradients, tangents, normals, stationary points, and rates of change.',
      'Understand the concept of a function, including domain, range, one-to-one functions, and inverse functions.'
    ],
    examTips: [
      'Always show clear, logical working — method marks are awarded at multiple stages.',
      'Check your algebra by substituting values back into the original equation.',
      'For graph sketching questions, identify intercepts, turning points, and asymptotes.',
      'In calculus questions, state the formula you are using before substituting values.',
      'For trigonometric equations, find all solutions within the given range — there may be more than one.',
      'Use the quadratic formula when factorising is not obvious — it is given in the formula sheet.',
      'Check significant figures and units in final answers — especially in applied questions.',
      'If stuck, move on and return later — do not spend too long on any single question.'
    ]
  },
  psychology: {
    introText: (topic) => `${topic} is an engaging topic in IGCSE Psychology that introduces students to the scientific study of the mind and behaviour. Understanding research methods and key studies is essential for examination success.`,
    examContext: () => `IGCSE Psychology tests knowledge of theories, research methods, and the ability to evaluate psychological research. Papers include multiple-choice, short answer, and extended response questions requiring application of knowledge to scenarios.`,
    commonMistakes: [
      'Describing a study without evaluating it — evaluation is a key assessment objective.',
      'Confusing correlation with causation — a correlation does not prove one variable causes another.',
      'Using vague methodological criticism — be specific about strengths and limitations.',
      'Forgetting to mention ethical issues in research methodology questions.',
      'Mixing up different psychologists and their theories — memorise key researchers with their contributions.',
      'Describing results without linking them back to the research question or hypothesis.',
      'Confusing the independent variable (what is manipulated) with the dependent variable (what is measured).',
      'Forgetting that psychological research often has cultural bias — consider generalisability carefully.'
    ],
    keyPoints: [
      'Know the key approaches in psychology: biological, cognitive, behavioural, social, and psychodynamic.',
      'Understand and be able to apply research methods: experiments, observations, interviews, questionnaires, case studies.',
      'Be able to evaluate research using criteria: reliability, validity, ethics, generalisability.',
      'Memorise key studies with their aims, procedures, findings, and conclusions.',
      'Understand the difference between quantitative and qualitative data and their respective strengths.',
      'Know sampling techniques and their advantages and disadvantages.',
      'Be able to interpret descriptive and inferential statistics in research contexts.',
      'Understand ethical guidelines including informed consent, debriefing, confidentiality, and protection from harm.'
    ],
    examTips: [
      'For "evaluate" questions, give both strengths and weaknesses with supporting evidence.',
      'Use the PEEL structure: Point, Evidence, Explanation, Link back to question.',
      'When describing studies, include: aim, method, sample, procedure, results, conclusion.',
      'For research methods questions, apply your knowledge to the scenario given — do not just list facts.',
      'Consider ethics in every methodology question — ethical issues are almost always relevant.',
      'Be specific in evaluation — "small sample" is better than "not very generalisable".',
      'Check the command word — "outline" requires less detail than "describe" or "evaluate".',
      'Plan extended response answers — a clear structure improves the quality of your evaluation.'
    ]
  }
};

// Generic fallback library
const genericLibrary = {
  introText: (topic) => `Understanding ${topic} is essential for success in this IGCSE subject. This topic is examined across multiple papers and forms a foundation for more advanced study.`,
  examContext: () => `IGCSE examinations test knowledge, understanding, application, analysis, and evaluation. Always read questions carefully, use specific evidence, and structure your answers clearly.`,
  commonMistakes: [
    'Not reading the question carefully — missing command words or specific instructions.',
    'Giving vague or general answers instead of specific, detailed responses.',
    'Forgetting to show working or reasoning in calculation and analytical questions.',
    'Not managing time effectively — spending too long on early questions.',
    'Failing to check answers for errors before moving on.',
    'Using informal language in formal examination answers.',
    'Not using the marks available as a guide to the depth of answer required.',
    'Forgetting to answer all parts of a multi-part question.'
  ],
  keyPoints: [
    'Read each question carefully and identify the command word before answering.',
    'Use specific evidence, examples, and data to support your answers.',
    'Show all working in calculation questions — method marks are often available.',
    'Plan longer answers before writing to ensure a clear structure.',
    'Check your work for accuracy, especially in numerical and factual answers.',
    'Use subject-specific terminology correctly and precisely.',
    'Manage your time according to the marks available for each question.',
    'Review your answers if time permits, correcting any obvious errors.'
  ],
  examTips: [
    'Always read the question twice before starting your answer.',
    'Use the marks as a guide — 1 mark usually needs 1 specific point.',
    'For "explain" questions, always give a reason or justification.',
    'Show all working in calculation questions.',
    'Check units and significant figures in numerical answers.',
    'Plan essay-style answers with a brief outline first.',
    'Leave time at the end to review and correct errors.',
    'Stay calm and work methodically through the paper.'
  ]
};

function getSubject(file) {
  if (file.startsWith('additional-maths')) return 'additional-maths';
  if (file.startsWith('biology')) return 'biology';
  if (file.startsWith('chemistry')) return 'chemistry';
  if (file.startsWith('physics')) return 'physics';
  if (file.startsWith('maths')) return 'maths';
  if (file.startsWith('economics')) return 'economics';
  if (file.startsWith('business')) return 'business';
  if (file.startsWith('accounting')) return 'accounting';
  if (file.startsWith('history')) return 'history';
  if (file.startsWith('geography')) return 'geography';
  if (file.startsWith('ict')) return 'ict';
  if (file.startsWith('english')) return 'english';
  if (file.startsWith('chinese')) return 'chinese';
  if (file.startsWith('psychology')) return 'psychology';
  return 'generic';
}

function getTopicFromContent(content) {
  const match = content.match(/<h1>([^<]+)<\/h1>/);
  return match ? match[1].trim() : 'this topic';
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n) {
  return shuffleArray(arr).slice(0, n);
}

let enhanced = 0;
let skipped = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Skip if already enhanced (has enhanced-intro class)
  if (content.includes('enhanced-intro') || content.includes('class="subject-context"')) {
    skipped++;
    return;
  }

  const subject = getSubject(file);
  const lib = subjectLibraries[subject] || genericLibrary;
  const topic = getTopicFromContent(content);

  // Build enhancement HTML
  const introHTML = `
<div class="enhanced-intro" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 24px 28px; border-radius: 12px; border-left: 5px solid #0ea5e9; margin: 24px 0;">
  <h4 style="color: #0369a1; margin: 0 0 12px 0; font-size: 1.05rem;">📘 Subject Context</h4>
  <p style="color: #0c4a6e; line-height: 1.75; margin: 0 0 12px 0;">${lib.introText(topic)}</p>
  <p style="color: #0c4a6e; line-height: 1.75; margin: 0;">${lib.examContext()}</p>
</div>`;

  const commonMistakesHTML = `
<div class="common-mistakes" style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 24px 28px; border-radius: 12px; border-left: 5px solid #ef4444; margin: 24px 0;">
  <h4 style="color: #991b1b; margin: 0 0 14px 0; font-size: 1.05rem;">⚠️ Common Mistakes to Avoid</h4>
  <ul style="color: #7f1d1d; line-height: 1.8; margin: 0; padding-left: 20px;">
    ${pickRandom(lib.commonMistakes, 5).map(m => `<li style="margin-bottom: 8px;">${m}</li>`).join('')}
  </ul>
</div>`;

  const keyPointsHTML = `
<div class="key-points" style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 24px 28px; border-radius: 12px; border-left: 5px solid #22c55e; margin: 24px 0;">
  <h4 style="color: #166534; margin: 0 0 14px 0; font-size: 1.05rem;">✅ Key Points to Remember</h4>
  <ul style="color: #14532d; line-height: 1.8; margin: 0; padding-left: 20px;">
    ${pickRandom(lib.keyPoints, 5).map(p => `<li style="margin-bottom: 8px;">${p}</li>`).join('')}
  </ul>
</div>`;

  const examTipsHTML = `
<div class="exam-tips-detailed" style="background: linear-gradient(135deg, #fefce8 0%, #fef9c3 100%); padding: 24px 28px; border-radius: 12px; border-left: 5px solid #eab308; margin: 24px 0;">
  <h4 style="color: #854d0e; margin: 0 0 14px 0; font-size: 1.05rem;">🎯 Examination Tips</h4>
  <ul style="color: #713f12; line-height: 1.8; margin: 0; padding-left: 20px;">
    ${pickRandom(lib.examTips, 5).map(t => `<li style="margin-bottom: 8px;">${t}</li>`).join('')}
  </ul>
</div>`;

  // Insert after notes-header
  const headerEnd = content.indexOf('</div>', content.indexOf('class="notes-header"'));
  if (headerEnd > 0) {
    content = content.slice(0, headerEnd + 6) + introHTML + content.slice(headerEnd + 6);
  }

  // Insert before summary-box or exam-tips
  let insertIdx = content.indexOf('class="summary-box"');
  if (insertIdx === -1) insertIdx = content.indexOf('class="exam-tips"');
  if (insertIdx === -1) insertIdx = content.lastIndexOf('</div>', content.lastIndexOf('</section>'));

  if (insertIdx > 0) {
    const before = content.slice(0, insertIdx);
    const after = content.slice(insertIdx);
    content = before + commonMistakesHTML + keyPointsHTML + examTipsHTML + '\n' + after;
  }

  fs.writeFileSync(filepath, content);
  enhanced++;
});

console.log(`Enhanced: ${enhanced}, Skipped (already enhanced): ${skipped}`);
