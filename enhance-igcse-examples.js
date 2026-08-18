#!/usr/bin/env node
/**
 * Third-pass IGCSE enhancer — adds worked examples, practice questions,
 * and exam question spotting to ALL CAIE IGCSE notes.
 */
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir)
  .filter(f => f.endsWith('-igcse.html') && !f.endsWith('-summary.html'))
  .filter(f => !f.startsWith('edexcel') && !f.startsWith('ib'));

const exampleLibraries = {
  physics: {
    examples: () => `
<h4>Worked Example 1: Unit Conversion and Prefixes</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A microprocessor has a clock speed of 3.2 GHz. Express this in Hz and in MHz.</p>
<h5>Solution</h5>
<p>3.2 GHz = 3.2 × 10⁹ Hz = <strong>3,200,000,000 Hz</strong></p>
<p>3.2 GHz = 3.2 × 10³ MHz = <strong>3200 MHz</strong></p>
</div>

<h4>Worked Example 2: Resultant of Two Perpendicular Forces</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Two forces act on a body: 12 N east and 16 N north. Calculate the magnitude and direction of the resultant force.</p>
<h5>Solution</h5>
<p>Using Pythagoras: R = √(12² + 16²) = √(144 + 256) = √400 = <strong>20 N</strong></p>
<p>Direction: θ = tan⁻¹(16/12) = tan⁻¹(1.333) = <strong>53.1° north of east</strong></p>
</div>

<h4>Worked Example 3: Analysing Motion from a Velocity-Time Graph</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A velocity-time graph shows a body accelerating from 5 m/s to 15 m/s in 4 s, then moving at constant velocity for 6 s, then decelerating to rest in 5 s. Calculate (a) the acceleration in each stage, (b) the total displacement.</p>
<h5>Solution</h5>
<p>(a) Stage 1: a = (15 − 5) / 4 = <strong>2.5 m/s²</strong></p>
<p>Stage 2: a = <strong>0 m/s²</strong> (constant velocity)</p>
<p>Stage 3: a = (0 − 15) / 5 = <strong>−3.0 m/s²</strong> (deceleration)</p>
<p>(b) Displacement = area under graph</p>
<p>= ½(5 + 15) × 4 + 15 × 6 + ½ × 15 × 5</p>
<p>= 40 + 90 + 37.5 = <strong>167.5 m</strong></p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>A car accelerates uniformly from rest at 2.0 m/s² for 8.0 s, then maintains constant velocity for 12 s, then brakes with uniform deceleration and stops in 10 s. Draw a velocity-time graph and calculate the total distance travelled.</p>
<p><em>Answer: 304 m</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>A stone is thrown vertically upwards with a velocity of 20 m/s from the edge of a cliff 30 m above sea level. Calculate (a) the maximum height reached above the cliff, (b) the time taken to reach the sea, (c) the velocity just before hitting the sea. (g = 10 m/s²)</p>
<p><em>Answers: (a) 20 m, (b) 6.0 s, (c) 40 m/s downwards</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>Two tugs pull a ship with forces of 8000 N and 6000 N at an angle of 60° to each other. Calculate the magnitude of the resultant force.</p>
<p><em>Answer: 12,166 N (or 12.2 kN)</em></p>
</div>`
  },

  chemistry: {
    examples: () => `
<h4>Worked Example 1: Calculating Relative Atomic Mass from Mass Spectrum</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A sample of boron contains 20% ¹⁰B and 80% ¹¹B. Calculate the relative atomic mass of boron.</p>
<h5>Solution</h5>
<p>Aᵣ = (10 × 20 + 11 × 80) / 100</p>
<p>Aᵣ = (200 + 880) / 100 = 1080 / 100 = <strong>10.8</strong></p>
</div>

<h4>Worked Example 2: Writing Ionic Equations</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Write the ionic equation for the reaction between aqueous silver nitrate and aqueous sodium chloride, including state symbols.</p>
<h5>Solution</h5>
<p>Molecular equation: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)</p>
<p>Ionic equation: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)</p>
<p>The Na⁺ and NO₃⁻ ions are spectator ions and do not appear in the ionic equation.</p>
</div>

<h4>Worked Example 3: Mole Calculations</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Calculate the mass of calcium carbonate (CaCO₃) needed to produce 11.2 dm³ of CO₂ at room temperature and pressure. (Mᵣ: CaCO₃ = 100, 1 mole of gas occupies 24 dm³ at rtp)</p>
<h5>Solution</h5>
<p>CaCO₃ → CaO + CO₂</p>
<p>Moles of CO₂ = 11.2 / 24 = 0.467 mol</p>
<p>Mole ratio CaCO₃ : CO₂ = 1 : 1</p>
<p>Moles of CaCO₃ = 0.467 mol</p>
<p>Mass = 0.467 × 100 = <strong>46.7 g</strong></p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Magnesium reacts with hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. Calculate the volume of hydrogen gas produced at rtp when 0.48 g of magnesium reacts with excess acid. (Mᵣ Mg = 24, 1 mole gas = 24 dm³ at rtp)</p>
<p><em>Answer: 0.48 dm³ (or 480 cm³)</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Neon has two isotopes: ²⁰Ne (90.5%) and ²²Ne (9.5%). Calculate the relative atomic mass of neon to 1 decimal place.</p>
<p><em>Answer: 20.2</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>Explain why magnesium oxide has a higher melting point than sodium chloride, despite both being ionic compounds.</p>
<p><em>Answer: Mg²⁺ and O²⁻ have higher charges than Na⁺ and Cl⁻, resulting in stronger electrostatic attraction and more energy required to break the lattice.</em></p>
</div>`
  },

  biology: {
    examples: () => `
<h4>Worked Example 1: Calculating Magnification</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A micrograph shows a chloroplast with a measured width of 45 mm. The actual width is 3.0 μm. Calculate the magnification.</p>
<h5>Solution</h5>
<p>Magnification = image size / actual size</p>
<p>Convert to same units: 45 mm = 45,000 μm</p>
<p>Magnification = 45,000 / 3.0 = <strong>×15,000</strong></p>
</div>

<h4>Worked Example 2: Explaining Adaptations</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Explain how red blood cells are adapted for transporting oxygen.</p>
<h5>Solution</h5>
<ol>
<li><strong>Biconcave shape:</strong> Increases surface area to volume ratio for faster diffusion of oxygen.</li>
<li><strong>No nucleus:</strong> More space for haemoglobin, increasing oxygen-carrying capacity.</li>
<li><strong>Contains haemoglobin:</strong> Iron-containing protein that reversibly binds oxygen.</li>
<li><strong>Thin membrane:</strong> Short diffusion distance for oxygen to enter and exit.</li>
<li><strong>Flexible:</strong> Can squeeze through narrow capillaries to reach all tissues.</li>
</ol>
</div>

<h4>Worked Example 3: Interpreting Experimental Data</h4>
<div class="example-box">
<h5>Problem</h5>
<p>An experiment investigated the effect of temperature on enzyme activity. The results showed activity increasing from 20°C to 37°C, then decreasing sharply above 45°C. Explain these results.</p>
<h5>Solution</h5>
<p><strong>20°C to 37°C:</strong> As temperature increases, kinetic energy of enzyme and substrate molecules increases. More frequent successful collisions occur between enzyme active sites and substrate molecules, increasing the rate of reaction.</p>
<p><strong>Above 45°C:</strong> The high temperature causes vibrations that break hydrogen bonds and ionic bonds maintaining the enzyme's tertiary structure. The active site changes shape (denaturation), so substrate molecules no longer fit. The reaction rate decreases sharply.</p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>A student observed a palisade mesophyll cell with a measured length of 35 mm in a micrograph. The actual length is 70 μm. Calculate the magnification and explain two ways palisade cells are adapted for photosynthesis.</p>
<p><em>Answer: ×500. Adaptations: many chloroplasts, cylindrical shape/columnar arrangement for maximum light absorption, large vacuole pushes cytoplasm to edge for shorter diffusion path.</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain why the rate of photosynthesis increases as light intensity increases up to a certain point, then levels off.</p>
<p><em>Answer: More light energy excites more chlorophyll molecules, producing more ATP and NADPH for the Calvin cycle. At saturation point, another factor (CO₂ or temperature) becomes limiting.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>Describe and explain the role of the following in protein synthesis: (a) mRNA, (b) ribosomes, (c) tRNA.</p>
<p><em>Answer: (a) mRNA carries the genetic code from DNA to ribosome. (b) Ribosomes are the site of protein synthesis where amino acids are joined. (c) tRNA brings specific amino acids to the ribosome and has anticodons that pair with mRNA codons.</em></p>
</div>`
  },

  maths: {
    examples: () => `
<h4>Worked Example 1: Solving Quadratic Equations</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Solve 2x² − 7x + 3 = 0, giving your answers to 2 decimal places.</p>
<h5>Solution</h5>
<p>Using the quadratic formula: x = [7 ± √(49 − 24)] / 4 = [7 ± √25] / 4</p>
<p>x = (7 + 5) / 4 = 12/4 = <strong>3.00</strong></p>
<p>x = (7 − 5) / 4 = 2/4 = <strong>0.50</strong></p>
</div>

<h4>Worked Example 2: Bearings and Trigonometry</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A ship sails 15 km on a bearing of 060°, then 20 km on a bearing of 150°. How far is the ship from its starting point?</p>
<h5>Solution</h5>
<p>The angle between the two paths = 150° − 60° = 90°</p>
<p>Using Pythagoras: distance = √(15² + 20²) = √(225 + 400) = √625 = <strong>25 km</strong></p>
</div>

<h4>Worked Example 3: Compound Interest</h4>
<div class="example-box">
<h5>Problem</h5>
<p>$5000 is invested at 4% per annum compound interest. Calculate the value after 5 years.</p>
<h5>Solution</h5>
<p>Amount = 5000 × (1.04)⁵ = 5000 × 1.21665 = <strong>$6083.26</strong></p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>The sum of the first n terms of an arithmetic progression is given by Sₙ = n(3n + 1). Find the 10th term.</p>
<p><em>Answer: 58</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Solve the simultaneous equations: 3x + 2y = 13 and 2x − y = 4.</p>
<p><em>Answer: x = 3, y = 2</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>A map has a scale of 1 : 50,000. A rectangular field measures 4 cm by 6 cm on the map. Calculate the actual area of the field in km².</p>
<p><em>Answer: 6 km²</em></p>
</div>`
  },

  'additional-maths': {
    examples: () => `
<h4>Worked Example 1: Solving Trigonometric Equations</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Solve 2sin²x + 3cosx = 0 for 0° ≤ x ≤ 360°.</p>
<h5>Solution</h5>
<p>Using sin²x = 1 − cos²x:</p>
<p>2(1 − cos²x) + 3cosx = 0</p>
<p>2 − 2cos²x + 3cosx = 0</p>
<p>2cos²x − 3cosx − 2 = 0</p>
<p>Let u = cosx: 2u² − 3u − 2 = 0</p>
<p>(2u + 1)(u − 2) = 0</p>
<p>u = −½ or u = 2 (rejected as cosx ≤ 1)</p>
<p>cosx = −½ → x = <strong>120°, 240°</strong></p>
</div>

<h4>Worked Example 2: Using the Binomial Theorem</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Find the coefficient of x³ in the expansion of (2 − 3x)⁵.</p>
<h5>Solution</h5>
<p>General term: C(5,r) × 2^(5−r) × (−3x)^r</p>
<p>For x³: r = 3</p>
<p>Coefficient = C(5,3) × 2² × (−3)³ = 10 × 4 × (−27) = <strong>−1080</strong></p>
</div>

<h4>Worked Example 3: Differentiation and Stationary Points</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Find the coordinates and nature of the stationary points of y = x³ − 6x² + 9x + 2.</p>
<h5>Solution</h5>
<p>dy/dx = 3x² − 12x + 9 = 0</p>
<p>x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0 → x = 1 or x = 3</p>
<p>When x = 1: y = 1 − 6 + 9 + 2 = 6 → (1, 6)</p>
<p>When x = 3: y = 27 − 54 + 27 + 2 = 2 → (3, 2)</p>
<p>d²y/dx² = 6x − 12</p>
<p>At x = 1: d²y/dx² = −6 < 0 → <strong>maximum at (1, 6)</strong></p>
<p>At x = 3: d²y/dx² = 6 > 0 → <strong>minimum at (3, 2)</strong></p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Solve the equation log₂(x) + log₂(x − 2) = 3.</p>
<p><em>Answer: x = 4 (x = −2 is rejected)</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>A curve has equation y = (2x + 1)/(x − 3). Find dy/dx and the equation of the normal at the point where x = 4.</p>
<p><em>Answer: dy/dx = −7/(x−3)²; normal: y = 7x − 26</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>Find ∫(3x² + 4/x²) dx, giving your answer in the form ax³ + b/x + c.</p>
<p><em>Answer: x³ − 4/x + c</em></p>
</div>`
  },

  economics: {
    examples: () => `
<h4>Worked Example 1: Calculating Price Elasticity of Demand</h4>
<div class="example-box">
<h5>Problem</h5>
<p>When the price of a good increases from $10 to $12, quantity demanded falls from 100 to 80 units. Calculate the price elasticity of demand (PED).</p>
<h5>Solution</h5>
<p>% change in price = (12 − 10) / 10 × 100 = 20%</p>
<p>% change in quantity = (80 − 100) / 100 × 100 = −20%</p>
<p>PED = −20% / 20% = <strong>−1</strong> (or 1 in absolute terms)</p>
<p>Since |PED| = 1, demand is <strong>unit elastic</strong>.</p>
</div>

<h4>Worked Example 2: Calculating GDP Growth</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A country's GDP was $500 billion in 2022 and $525 billion in 2023. Calculate the annual GDP growth rate.</p>
<h5>Solution</h5>
<p>Growth rate = (525 − 500) / 500 × 100 = 25/500 × 100 = <strong>5%</strong></p>
</div>

<h4>Worked Example 3: Market Equilibrium Analysis</h4>
<div class="example-box">
<h5>Problem</h5>
<p>The demand and supply equations for a market are: Qd = 100 − 2P and Qs = 20 + 3P. Find the equilibrium price and quantity.</p>
<h5>Solution</h5>
<p>At equilibrium: Qd = Qs</p>
<p>100 − 2P = 20 + 3P</p>
<p>80 = 5P → P = <strong>$16</strong></p>
<p>Q = 100 − 2(16) = <strong>68 units</strong></p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>A government imposes a specific tax of $2 per unit on a good. The original supply equation is Qs = 10 + 2P. Write the new supply equation and explain how the tax affects the equilibrium price and quantity.</p>
<p><em>Answer: New Qs = 10 + 2(P − 2) = 6 + 2P. Equilibrium price increases, equilibrium quantity decreases. Consumer and producer surplus both decrease; government gains tax revenue.</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain two causes of demand-pull inflation and evaluate one policy a government could use to reduce it.</p>
<p><em>Answer: Causes: increased consumer spending, expansionary fiscal/monetary policy, depreciation of currency. Policy: contractionary monetary policy (raise interest rates) — reduces borrowing and spending but may cause unemployment and reduce economic growth.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>A country has a balance of trade deficit of $50 billion and receives $30 billion in net income from abroad. Calculate the current account balance and explain two measures the government could take to reduce a current account deficit.</p>
<p><em>Answer: Current account = −50 + 30 = −$20 billion (deficit). Measures: depreciation of currency, supply-side policies, protectionist policies, contractionary fiscal policy.</em></p>
</div>`
  },

  business: {
    examples: () => `
<h4>Worked Example 1: Calculating Profit Margins</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A business has revenue of $250,000, cost of sales of $150,000, and operating expenses of $60,000. Calculate the gross profit margin and net profit margin.</p>
<h5>Solution</h5>
<p>Gross profit = 250,000 − 150,000 = $100,000</p>
<p>Gross profit margin = 100,000 / 250,000 × 100 = <strong>40%</strong></p>
<p>Net profit = 100,000 − 60,000 = $40,000</p>
<p>Net profit margin = 40,000 / 250,000 × 100 = <strong>16%</strong></p>
</div>

<h4>Worked Example 2: Break-Even Analysis</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A business sells products at $20 each. Fixed costs are $10,000 per month and variable costs are $12 per unit. Calculate the break-even point in units and revenue.</p>
<h5>Solution</h5>
<p>Contribution per unit = 20 − 12 = $8</p>
<p>Break-even units = 10,000 / 8 = <strong>1,250 units</strong></p>
<p>Break-even revenue = 1,250 × 20 = <strong>$25,000</strong></p>
</div>

<h4>Worked Example 3: Cash Flow Forecast</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A business forecasts the following monthly figures: opening balance $5,000, cash inflows $8,000, cash outflows $9,500. Calculate the closing balance and explain whether the business has a cash flow problem.</p>
<h5>Solution</h5>
<p>Closing balance = 5,000 + 8,000 − 9,500 = <strong>$3,500</strong></p>
<p>The closing balance is positive but decreasing. If this trend continues, the business may face a cash flow problem. Solutions: reduce credit terms, delay payments to suppliers, arrange an overdraft, or reduce expenses.</p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>A retailer buys goods for $40 and applies a markup of 50%. Calculate the selling price and the profit margin.</p>
<p><em>Answer: Selling price = $60; Profit margin = 33.3%</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain two advantages and two disadvantages of operating as a private limited company rather than a sole trader.</p>
<p><em>Answer: Advantages: limited liability, easier to raise capital, continuity, more credibility. Disadvantages: more legal formalities, less control for original owner, financial information is public, may be slower decision-making.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>A business is considering expanding into a new overseas market. Evaluate this decision using the Ansoff matrix and stakeholder analysis.</p>
<p><em>Answer: This is market development (existing product, new market). Benefits: increased revenue, diversification. Risks: cultural differences, exchange rate fluctuations, competition. Stakeholders: shareholders (potential profit), employees (job security), local community (employment vs environmental impact).</em></p>
</div>`
  },

  accounting: {
    examples: () => `
<h4>Worked Example 1: Preparing a Trial Balance</h4>
<div class="example-box">
<h5>Problem</h5>
<p>From the following balances, prepare a trial balance: Cash $5,000; Bank $12,000; Purchases $25,000; Sales $40,000; Rent $6,000; Wages $8,000; Capital $20,000; Drawings $4,000.</p>
<h5>Solution</h5>
<table class="data-table">
<tr><th>Account</th><th>Debit ($)</th><th>Credit ($)</th></tr>
<tr><td>Cash</td><td>5,000</td><td></td></tr>
<tr><td>Bank</td><td>12,000</td><td></td></tr>
<tr><td>Purchases</td><td>25,000</td><td></td></tr>
<tr><td>Sales</td><td></td><td>40,000</td></tr>
<tr><td>Rent</td><td>6,000</td><td></td></tr>
<tr><td>Wages</td><td>8,000</td><td></td></tr>
<tr><td>Capital</td><td></td><td>20,000</td></tr>
<tr><td>Drawings</td><td>4,000</td><td></td></tr>
<tr><td><strong>Total</strong></td><td><strong>60,000</strong></td><td><strong>60,000</strong></td></tr>
</table>
</div>

<h4>Worked Example 2: Depreciation Calculation</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A machine costs $50,000 and has an estimated useful life of 5 years with a residual value of $5,000. Calculate the annual depreciation using (a) straight-line method and (b) reducing balance method at 30%.</p>
<h5>Solution</h5>
<p>(a) Straight-line: (50,000 − 5,000) / 5 = <strong>$9,000 per year</strong></p>
<p>(b) Reducing balance:</p>
<p>Year 1: 50,000 × 30% = $15,000; NBV = $35,000</p>
<p>Year 2: 35,000 × 30% = $10,500; NBV = $24,500</p>
<p>Year 3: 24,500 × 30% = $7,350; NBV = $17,150</p>
</div>

<h4>Worked Example 3: Bank Reconciliation</h4>
<div class="example-box">
<h5>Problem</h5>
<p>The cash book shows a debit balance of $8,500. Bank statement shows $9,200. Outstanding lodgements $1,500; unpresented cheques $2,200; bank charges $200 not recorded in cash book.</p>
<h5>Solution</h5>
<p>Adjusted cash book balance = 8,500 − 200 = <strong>$8,300</strong></p>
<p>Bank reconciliation:</p>
<p>Balance per bank statement: $9,200</p>
<p>Add: Outstanding lodgements: $1,500</p>
<p>Less: Unpresented cheques: ($2,200)</p>
<p>Adjusted bank balance: <strong>$8,500</strong></p>
<p><em>Note: There appears to be a discrepancy of $200 — this requires further investigation (could be an error in recording).</em></p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>A business has the following information for the year: Opening inventory $8,000, Purchases $45,000, Closing inventory $10,000, Sales $72,000. Calculate cost of sales, gross profit, and gross profit margin.</p>
<p><em>Answer: Cost of sales = $43,000; Gross profit = $29,000; Gross profit margin = 40.3%</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain the difference between capital expenditure and revenue expenditure, giving two examples of each.</p>
<p><em>Answer: Capital expenditure: purchase of non-current assets, improvements that extend useful life (e.g., buying machinery, building extension). Revenue expenditure: day-to-day running costs, repairs and maintenance (e.g., wages, rent, repairs).</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>A trader's trial balance does not balance. The debit side totals $52,300 and the credit side totals $51,800. Suggest three types of error that could cause this and explain how each would be corrected.</p>
<p><em>Answer: (1) Transposition error — digits reversed in one entry. (2) Omission of one side of a double entry. (3) Entry on wrong side — debit recorded as credit or vice versa. Each would be corrected through a journal entry to the suspense account.</em></p>
</div>`
  },

  history: {
    examples: () => `
<h4>Worked Example 1: Analysing a Source</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Analyse the usefulness of a government propaganda poster from 1916 encouraging men to enlist in the army.</p>
<h5>Solution</h5>
<p><strong>Content:</strong> The poster shows a smiling soldier with the caption "Your Country Needs You." It portrays military service as honourable and patriotic.</p>
<p><strong>Provenance:</strong> Created by the British government in 1916, after conscription was introduced. The purpose was to encourage voluntary enlistment and maintain public support for the war.</p>
<p><strong>Usefulness:</strong> Useful for showing how governments used emotional appeals to recruit soldiers. However, limited by bias — it does not show the realities of trench warfare. It should be compared with letters from soldiers or casualty figures for a balanced view.</p>
</div>

<h4>Worked Example 2: Causation Essay Plan</h4>
<div class="example-box">
<h5>Problem</h5>
<p>To what extent was the Treaty of Versailles responsible for the outbreak of World War II?</p>
<h5>Essay Plan</h5>
<p><strong>Introduction:</strong> Define the Treaty of Versailles (1919) and state that while it contributed to WWII, it was not the sole cause.</p>
<p><strong>FOR (Treaty was responsible):</strong></p>
<ul>
<li>War guilt clause (Article 231) humiliated Germany</li>
<li>Reparations crippled the German economy (hyperinflation 1923)</li>
<li>Territorial losses (13% of land, colonies, Alsace-Lorraine) created resentment</li>
<li>Demilitarisation was seen as unfair and weak</li>
</ul>
<p><strong>AGAINST (Other factors):</strong></p>
<ul>
<li>Failure of the League of Nations to stop aggression (Manchuria 1931, Abyssinia 1935)</li>
<li>Appeasement policy of Britain and France (Munich Agreement 1938)</li>
<li>Great Depression created economic instability worldwide</li>
<li>Hitler's expansionist ambitions and rearmament</li>
</ul>
<p><strong>Conclusion:</strong> The Treaty created conditions for resentment but did not make war inevitable. The failures of the League, appeasement, and Hitler's actions were equally or more important.</p>
</div>

<h4>Worked Example 3: Comparing Interpretations</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Historian A argues that the Cold War was caused by Soviet aggression. Historian B argues it was caused by American policy. Evaluate these interpretations.</p>
<h5>Solution</h5>
<p><strong>Historian A (Soviet aggression):</strong> Supported by Soviet expansion into Eastern Europe (1945–48), creation of puppet states, Berlin Blockade (1948), and invasion of Hungary (1956).</p>
<p><strong>Historian B (American policy):</strong> Supported by Truman Doctrine (1947), Marshall Plan (1948), NATO (1949), and US support for anti-communist regimes worldwide.</p>
<p><strong>Evaluation:</strong> Both interpretations have merit. Soviet actions in Eastern Europe were aggressive, but US policies like containment were also confrontational. The orthodox view (Soviet blame) dominated until the 1960s; the revisionist view (US blame) emerged with the Vietnam War. Post-revisionist historians (like Gaddis) argue both sides share responsibility.</p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Analyse the reliability of a diary entry from a soldier on the Western Front in 1916.</p>
<p><em>Answer: Consider proximity to events (likely reliable on details), personal perspective (may be emotional or biased), purpose (private vs published), compare with official records or other soldiers' accounts.</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain why the League of Nations failed to stop Japanese aggression in Manchuria (1931).</p>
<p><em>Answer: Economic sanctions not applied (USA not member, major trading partner); no military force available; Britain and France unwilling to act (focused on domestic issues); Japan simply left the League; slow decision-making process.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>"The Cuban Missile Crisis was a victory for the USA." How far do you agree?</p>
<p><em>Answer: FOR: missiles removed, Khrushchev backed down, USA appeared strong. AGAINST: USA had to remove missiles from Turkey secretly, crisis showed dangers of brinkmanship, hotline established afterwards. CONCLUSION: Short-term victory for USA but long-term recognition of need for détente.</em></p>
</div>`
  },

  geography: {
    examples: () => `
<h4>Worked Example 1: Interpreting a Climate Graph</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Describe the climate shown in a graph where temperatures range from 15°C (July) to 28°C (January) and rainfall is concentrated in summer months (December–March) with a winter dry season.</p>
<h5>Solution</h5>
<p>This climate is <strong>tropical monsoon/savanna (Aw)</strong>:</p>
<ul>
<li>High temperatures year-round (15–28°C), indicating a tropical location</li>
<li>Summer wet season with concentrated rainfall</li>
<li>Winter dry season (drought conditions)</li>
<li>Located in regions like northern Australia, parts of India, or Brazilian Highlands</li>
</ul>
<p>Vegetation would be tropical grassland (savanna) with scattered trees adapted to seasonal drought.</p>
</div>

<h4>Worked Example 2: River Landform Analysis</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Explain the formation of an ox-bow lake.</p>
<h5>Solution</h5>
<ol>
<li><strong>Lateral erosion:</strong> On the outside of a meander bend, water flows faster and erodes the river bank.</li>
<li><strong>Deposition:</strong> On the inside of the bend, water flows slower and deposits sediment, forming a point bar.</li>
<li><strong>Meander migration:</strong> The meander becomes more pronounced and the neck narrows.</li>
<li><strong>Cut-through:</strong> During a flood, the river breaks through the narrow neck, creating a straighter channel.</li>
<li><strong>Isolation:</strong> Deposition seals off the old meander loop, forming an ox-bow lake.</li>
</ol>
</div>

<h4>Worked Example 3: Population Pyramid Analysis</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A population pyramid has a wide base, steep sides, and a narrow top. Describe the population structure and suggest two implications for the country's development.</p>
<h5>Solution</h5>
<p><strong>Structure:</strong> High birth rate, high death rate, short life expectancy, high dependency ratio (many young dependents). This is typical of a country in Stage 1 or early Stage 2 of the Demographic Transition Model.</p>
<p><strong>Implications:</strong></p>
<ol>
<li><strong>Pressure on services:</strong> High demand for schools, healthcare, and childcare. The working population must support many dependents.</li>
<li><strong>Potential for future growth:</strong> Large youthful population means future workforce, but only if education and employment opportunities are provided.</li>
</ol>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Describe and explain three factors that influence the climate of a coastal location.</p>
<p><em>Answer: (1) Sea breezes — land heats faster than sea, creating onshore winds during the day. (2) Maritime influence — oceans moderate temperatures (cooler summers, warmer winters). (3) Prevailing winds — onshore winds bring moisture; offshore winds bring dry conditions.</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain why volcanic eruptions can have both positive and negative effects on people living nearby.</p>
<p><em>Answer: Negative: loss of life, destruction of property, ash clouds affecting health and aviation, lahars. Positive: fertile volcanic soils for agriculture, geothermal energy, tourism revenue, creation of new land.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>Using a map extract (not provided), describe the relief and drainage patterns of the area shown and suggest how these have influenced settlement.</p>
<p><em>Answer: Relief — describe contour patterns (steep/gentle slopes, valleys, ridges). Drainage — pattern (dendritic, trellis), direction of flow, presence of rivers/lakes. Settlement — typically on flat land near water, avoiding steep slopes and flood plains.</em></p>
</div>`
  },

  ict: {
    examples: () => `
<h4>Worked Example 1: Binary to Hexadecimal Conversion</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Convert the 16-bit binary number 1101011010101100 to hexadecimal.</p>
<h5>Solution</h5>
<p>Group into 4 bits from the right: 1101 0110 1010 1100</p>
<p>1101 = 13 = <strong>D</strong></p>
<p>0110 = 6 = <strong>6</strong></p>
<p>1010 = 10 = <strong>A</strong></p>
<p>1100 = 12 = <strong>C</strong></p>
<p>Answer: <strong>D6AC</strong></p>
</div>

<h4>Worked Example 2: Spreadsheet Formula</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A spreadsheet has sales data in cells B2:B10. Write formulas to calculate: (a) total sales, (b) average sales, (c) commission at 5% on sales over $1000.</p>
<h5>Solution</h5>
<p>(a) =SUM(B2:B10)</p>
<p>(b) =AVERAGE(B2:B10)</p>
<p>(c) =IF(B2>1000, B2*0.05, 0) — copied down for each row</p>
</div>

<h4>Worked Example 3: Database Query</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A student database has fields: StudentID, Name, Class, Age, Grade. Write a query to find all students in Class 10A who are 16 years old or older and have a grade of A or B.</p>
<h5>Solution</h5>
<p>SELECT * FROM Students</p>
<p>WHERE Class = "10A" AND Age >= 16 AND Grade IN ("A", "B")</p>
<p>ORDER BY Name;</p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Convert the denary number 237 to 8-bit binary and then to hexadecimal.</p>
<p><em>Answer: Binary: 11101101; Hexadecimal: ED</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain the difference between RAM and ROM, giving two examples of what each is used for in a computer system.</p>
<p><em>Answer: RAM (volatile, temporary storage): stores currently running programs and data. ROM (non-volatile, permanent): stores BIOS/boot instructions. RAM examples: open applications, clipboard. ROM examples: firmware, startup instructions.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>A business wants to create a mail merge to send personalised letters to 500 customers. Describe the steps involved and the files needed.</p>
<p><em>Answer: (1) Create letter template in word processor with merge fields. (2) Create data source (database/spreadsheet) with customer details. (3) Link data source to letter. (4) Insert merge fields for name, address, etc. (5) Preview and complete merge to generate individual letters.</em></p>
</div>`
  },

  english: {
    examples: () => `
<h4>Worked Example 1: Analysing Writer's Craft</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Analyse how the writer creates tension in the opening of a story: "The door creaked open. A cold draught stirred the dust. Somewhere in the darkness, something moved."</p>
<h5>Solution</h5>
<p><strong>Sentence structure:</strong> Short, simple sentences create a staccato rhythm that mimics a racing heartbeat, building suspense.</p>
<p><strong>Sensory details:</strong> "creaked" (sound), "cold draught" (touch), "dust" (sight) engage multiple senses, immersing the reader.</p>
<p><strong>Pathetic fallacy:</strong> The "cold draught" and "darkness" reflect the ominous mood and foreshadow danger.</p>
<p><strong>Pronoun ambiguity:</strong> "Something moved" — the indefinite pronoun creates uncertainty, making the threat feel unknown and therefore more frightening.</p>
</div>

<h4>Worked Example 2: Writing to Argue</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Write the opening paragraph of a speech arguing that school uniforms should be compulsory.</p>
<h5>Solution</h5>
<p>"Ladies and gentlemen, imagine a school where every student is judged not by the label on their shirt, but by the strength of their character. Where a child's worth is measured by their kindness, not their brand. This is not a utopian fantasy — this is what compulsory school uniforms achieve. Today, I will argue that uniforms are not merely pieces of clothing; they are instruments of equality, engines of discipline, and badges of pride that every student should wear."</p>
<p><em>Techniques used: Direct address, rhetorical question, tripling, metaphor, structural signposting.</em></p>
</div>

<h4>Worked Example 3: Comparing Poems</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Compare how two poems present the theme of conflict.</p>
<h5>Structure</h5>
<p><strong>Introduction:</strong> Name both poems and poets. State the theme and your overall argument.</p>
<p><strong>Paragraph 1 (Language):</strong> Compare specific word choices and imagery. Use quotes.</p>
<p><strong>Paragraph 2 (Structure):</strong> Compare form, stanza length, rhyme scheme, enjambment.</p>
<p><strong>Paragraph 3 (Tone/Attitude):</strong> Compare the poets' perspectives and emotional responses.</p>
<p><strong>Conclusion:</strong> Summarise the similarities and differences. Offer a personal response.</p>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Read the following extract and analyse how the writer creates a sense of place: "The market sprawled across the square like a living thing. Stalls groaned under pyramids of fruit — mangoes like small suns, bananas in curved regiments, papayas split open to reveal their jewelled hearts. The air was thick with the smell of spices and sweat and something sweet rotting in the heat."</p>
<p><em>Answer: Metaphors ("like a living thing", "jewelled hearts"), sensory language (sight, smell), specific details (mangoes, bananas, papayas), personification ("stalls groaned"), atmosphere of abundance and decay.</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Write a descriptive piece about a place you know well, using at least three different senses and one example of figurative language.</p>
<p><em>Marking criteria: vivid sensory details (sight, sound, smell, touch, taste), effective use of simile/metaphor/personification, varied sentence structures, appropriate register.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>How does Shakespeare present the relationship between Macbeth and Lady Macbeth in Act 1, Scene 7?</p>
<p><em>Answer: Power dynamic — Lady Macbeth dominates through rhetoric and emotional manipulation. Macbeth's vacillation vs her resolve. Gender role reversal. Use of imperatives, rhetorical questions, imagery of cruelty and motherhood.</em></p>
</div>`
  },

  chinese: {
    examples: () => `
<h4>示例一：阅读理解分析</h4>
<div class="example-box">
<h5>问题</h5>
<p>分析以下句子中作者表达的情感："望着窗外淅淅沥沥的雨，我不禁想起了远方的故乡。"</p>
<h5>解答</h5>
<p><strong>意象分析：</strong>"淅淅沥沥的雨"营造了凄清、寂寥的氛围，雨声烘托出内心的孤独感。</p>
<p><strong>情感表达：</strong>"不禁想起"表明思乡之情是自然而然地涌上心头，无法抑制，体现了作者对故乡深切的思念。</p>
<p><strong>结构作用：</strong>以景起兴，由眼前的雨景联想到远方的故乡，过渡自然，情景交融。</p>
</div>

<h4>示例二：写作技巧</h4>
<div class="example-box">
<h5>问题</h5>
<p>修改以下句子，使其更加生动："公园里的花很美丽。"</p>
<h5>解答</h5>
<p>原句过于平淡。可以改为：</p>
<p>"公园里的花儿竞相开放，红的似火，粉的如霞，白的像雪，微风吹过，送来阵阵清香，引得蜜蜂蝴蝶翩翩起舞。"</p>
<p><em>运用了比喻、排比、拟人等修辞手法，从视觉、嗅觉等角度描写，使画面更加生动。</em></p>
</div>

<h4>示例三：文言文翻译</h4>
<div class="example-box">
<h5>问题</h5>
<p>翻译："学而时习之，不亦说乎？"</p>
<h5>解答</h5>
<p>学习了知识然后按时温习它，不也是很愉快的吗？</p>
<p><strong>关键词：</strong>"时"——按时；"习"——温习、练习；"说"——通"悦"，愉快。</p>
</div>`,
    practice: () => `
<h4>练习题</h4>
<div class="example-box">
<h5>题目一</h5>
<p>阅读下面的短文，回答问题："春天到了，小草从地里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草软绵绵的。"（朱自清《春》）</p>
<p>问题：作者从哪些角度描写了春草？表达了怎样的情感？</p>
<p><em>答案：从视觉（嫩嫩的，绿绿的）、触觉（软绵绵的）角度描写；通过人们在草地上的活动侧面烘托春草的可爱；表达了对春天的喜爱和对生命的赞美。</em></p>
</div>
<div class="example-box">
<h5>题目二</h5>
<p>请以"我的家乡"为题，写一篇不少于300字的作文，要求运用至少两种修辞手法。</p>
<p><em>评分标准：内容充实、结构完整、语言流畅、修辞恰当、书写工整。</em></p>
</div>
<div class="example-box">
<h5>题目三</h5>
<p>解释下列成语的意思并造句：画龙点睛、守株待兔、亡羊补牢。</p>
<p><em>答案：画龙点睛——在关键处加上精辟的语句，使内容更加生动有力。守株待兔——比喻不主动努力，而存侥幸心理，希望得到意外收获。亡羊补牢——比喻出了问题以后想办法补救，可以防止继续受损失。</em></p>
</div>`
  },

  psychology: {
    examples: () => `
<h4>Worked Example 1: Evaluating a Laboratory Experiment</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Evaluate Milgram's obedience study (1963) in terms of reliability, validity, and ethics.</p>
<h5>Solution</h5>
<p><strong>Reliability:</strong> High — standardised procedure with scripted prompts. Replicated by Burger (2009) with similar results. However, Orne and Holland suggested demand characteristics may have influenced behaviour.</p>
<p><strong>Validity:</strong> Low ecological validity — artificial laboratory setting. However, high experimental validity as participants genuinely believed they were administering shocks. Mundane realism is low.</p>
<p><strong>Ethics:</strong> Major ethical concerns — psychological harm (stress, anxiety), deception about the true nature of the study, lack of fully informed consent. However, Milgram did debrief participants and follow-up interviews showed no long-term harm.</p>
</div>

<h4>Worked Example 2: Research Method Selection</h4>
<div class="example-box">
<h5>Problem</h5>
<p>A psychologist wants to study the effect of sleep deprivation on memory performance. Suggest a suitable research method and justify your choice.</p>
<h5>Solution</h5>
<p><strong>Method:</strong> Laboratory experiment</p>
<p><strong>Justification:</strong></p>
<ul>
<li>Allows control over extraneous variables (age, intelligence, time of day)</li>
<li>Can establish cause-and-effect relationship</li>
<li>Can be replicated by other researchers</li>
<li>Quantitative data (memory test scores) allows statistical analysis</li>
</ul>
<p><strong>Limitations:</strong> Artificial setting may reduce ecological validity; demand characteristics; ethical issues with deliberately depriving participants of sleep.</p>
</div>

<h4>Worked Example 3: Describing and Evaluating a Theory</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Describe and evaluate Piaget's theory of cognitive development.</p>
<h5>Solution</h5>
<p><strong>Description:</strong></p>
<ul>
<li><strong>Sensorimotor (0–2 years):</strong> Infants learn through senses and motor actions. Object permanence develops.</li>
<li><strong>Pre-operational (2–7 years):</strong> Symbolic thought emerges but egocentrism and centration limit logic.</li>
<li><strong>Concrete operational (7–11 years):</strong> Logical thinking about concrete objects; conservation understood.</li>
<li><strong>Formal operational (11+ years):</strong> Abstract reasoning, hypothetical thinking, systematic problem-solving.</li>
</ul>
<p><strong>Evaluation:</strong></p>
<ul>
<li><strong>Strengths:</strong> Influenced education (age-appropriate teaching); extensive research base; cross-cultural support for sequence (though timing varies).</li>
<li><strong>Weaknesses:</strong> Underestimated children's abilities (e.g., Baillargeon's object permanence studies); cultural bias; stage theory may be too rigid; individual differences ignored.</li>
</ul>
</div>`,
    practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Describe the procedure and findings of Loftus and Palmer's (1974) eyewitness testimony study and explain one limitation of the study.</p>
<p><em>Answer: Participants watched a film of a car accident and were asked about speed using different verbs ("smashed", "hit", "contacted"). "Smashed" group gave highest speed estimates and were more likely to falsely recall broken glass. Limitation: artificial laboratory setting — watching a film is not the same as witnessing a real accident (low ecological validity).</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Explain one strength and one weakness of using case studies in psychological research.</p>
<p><em>Answer: Strength: rich, detailed data from unique individuals (e.g., HM, Phineas Gage) that generates hypotheses. Weakness: cannot generalise to wider population; researcher bias in interpretation; often rely on retrospective data.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>Describe the cognitive approach in psychology and evaluate its contribution to understanding human behaviour.</p>
<p><em>Answer: Focuses on internal mental processes (perception, memory, thinking). Uses information processing models and computer analogies. Contribution: scientific methods, practical applications (CBT), influenced AI. Criticism: reductionist, ignores emotional and social factors, computer metaphor may be oversimplified.</em></p>
</div>`
  }
};

// Generic fallback
const genericExamples = {
  examples: () => `
<h4>Worked Example 1: Applying Core Concepts</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Read the question carefully and identify what is being asked. Extract the given information and select the appropriate method or formula.</p>
<h5>Solution</h5>
<p>Step 1: Define the problem and identify key variables.</p>
<p>Step 2: Select the appropriate theory, formula, or method.</p>
<p>Step 3: Apply systematically, showing all working.</p>
<p>Step 4: Verify the answer and state it with appropriate units or context.</p>
</div>

<h4>Worked Example 2: Analysis and Evaluation</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Analyse a given scenario using the concepts learned in this topic. Consider multiple perspectives and evaluate the strengths and limitations of different approaches.</p>
<h5>Solution</h5>
<p>Present a balanced argument with evidence. Use specific examples to support your analysis. Consider counter-arguments and reach a reasoned conclusion.</p>
</div>

<h4>Worked Example 3: Problem-Solving Under Examination Conditions</h4>
<div class="example-box">
<h5>Problem</h5>
<p>Approach an examination-style question methodically to maximise marks.</p>
<h5>Solution</h5>
<p>Plan your answer before writing. Use the mark scheme as a guide to the depth required. Show all working and reasoning. Check your answer for accuracy and completeness.</p>
</div>`,
  practice: () => `
<h4>Practice Questions</h4>
<div class="example-box">
<h5>Question 1</h5>
<p>Review the key concepts from this topic and explain how they connect to other areas of the syllabus.</p>
<p><em>Answer: Consider the underlying principles and how they build upon or relate to topics studied earlier or later in the course.</em></p>
</div>
<div class="example-box">
<h5>Question 2</h5>
<p>Apply the knowledge from this topic to an unfamiliar scenario. Explain your reasoning clearly.</p>
<p><em>Answer: Identify relevant principles, apply them systematically, and evaluate the outcome.</em></p>
</div>
<div class="example-box">
<h5>Question 3</h5>
<p>Evaluate a statement or argument related to this topic, considering evidence from both sides.</p>
<p><em>Answer: Present a balanced evaluation with specific evidence, then reach a justified conclusion.</em></p>
</div>`
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

let enhanced = 0;
let skipped = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Skip if already has worked-examples-section marker
  if (content.includes('worked-examples-section') || content.includes('Worked Example 1:')) {
    skipped++;
    return;
  }

  const subject = getSubject(file);
  const lib = exampleLibraries[subject] || genericExamples;

  const examplesHTML = `<div class="worked-examples-section">\n${lib.examples()}\n</div>`;
  const practiceHTML = `<div class="practice-section">\n${lib.practice()}\n</div>`;

  // Insert before summary-box or exam-tips
  let insertIdx = content.indexOf('class="summary-box"');
  if (insertIdx === -1) insertIdx = content.indexOf('class="exam-tips"');

  if (insertIdx > 0) {
    const divStart = content.lastIndexOf('<div', insertIdx);
    if (divStart > 0) {
      content = content.slice(0, divStart) + examplesHTML + '\n' + practiceHTML + '\n' + content.slice(divStart);
      fs.writeFileSync(filepath, content);
      enhanced++;
    }
  } else {
    skipped++;
  }
});

console.log(`Examples added: ${enhanced}, Skipped: ${skipped}`);
