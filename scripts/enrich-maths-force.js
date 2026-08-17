const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

const MATHS = {
  'm1': {
    name: 'Quadratics',
    d: `<h3>1. Solving Quadratic Equations</h3>
<ul>
<li><strong>Factorising:</strong> Express ax² + bx + c as (px + q)(rx + s). Example: x² + 5x + 6 = (x + 2)(x + 3).</li>
<li><strong>Quadratic Formula:</strong> For ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / 2a</li>
<li><strong>Completing the Square:</strong> x² + bx + c = (x + b/2)² − (b/2)² + c. Example: x² + 6x + 5 = (x + 3)² − 4.</li>
</ul>
<h3>2. The Discriminant</h3>
<div class="formula-box">Δ = b² − 4ac</div>
<ul>
<li><strong>Δ > 0:</strong> Two distinct real roots. Graph crosses x-axis twice.</li>
<li><strong>Δ = 0:</strong> One repeated real root. Graph touches x-axis (turning point on axis).</li>
<li><strong>Δ < 0:</strong> No real roots. Graph does not cross x-axis.</li>
<li><strong>Perfect square discriminant:</strong> If Δ is a perfect square, roots are rational.</li>
</ul>
<h3>3. Quadratic Graphs</h3>
<ul>
<li><strong>y = ax² + bx + c</strong> — parabola shape.</li>
<li><strong>Vertex:</strong> x = −b/2a. Substitute to find y-coordinate.</li>
<li><strong>Axis of symmetry:</strong> x = −b/2a (vertical line through vertex).</li>
<li><strong>Maximum point:</strong> If a < 0, parabola opens downward.</li>
<li><strong>Minimum point:</strong> If a > 0, parabola opens upward.</li>
<li><strong>y-intercept:</strong> Set x = 0 → y = c.</li>
</ul>
<h3>4. Sketching Quadratic Curves</h3>
<ul>
<li>Identify shape (a > 0 or a < 0).</li>
<li>Find roots (if real) by factorising or formula.</li>
<li>Find vertex coordinates.</li>
<li>Find y-intercept.</li>
<li>Label all key points on sketch.</li>
</ul>
<h3>5. Quadratic Inequalities</h3>
<ul>
<li>Solve ax² + bx + c > 0 by finding roots first, then testing regions.</li>
<li>Remember: if a < 0, inequality direction flips when multiplying (but better to rearrange to a > 0 form).</li>
<li>Sketch graph to determine solution set.</li>
</ul>`,
    s: [`Quadratic formula: x = (−b ± √(b² − 4ac)) / 2a`, `Discriminant Δ = b² − 4ac`, `Δ > 0: two roots; Δ = 0: one root; Δ < 0: no real roots`, `Vertex at x = −b/2a`, `Complete square: x² + bx + c = (x + b/2)² − (b/2)² + c`],
    t: [`Always state the formula before substituting`, `Check if expression factorises first — it's faster`, `For inequalities, sketch the graph to find regions`, `If question asks for exact values, leave in surd form`]
  },
  'm2': {
    name: 'Functions',
    d: `<h3>1. Function Notation</h3>
<ul>
<li><strong>f(x):</strong> The output of function f when input is x.</li>
<li><strong>Domain:</strong> Set of all possible input values (x-values).</li>
<li><strong>Range:</strong> Set of all possible output values (y-values).</li>
</ul>
<h3>2. Types of Functions</h3>
<ul>
<li><strong>One-one (injective):</strong> Each output corresponds to exactly one input. Passes horizontal line test.</li>
<li><strong>Many-one:</strong> Different inputs give same output. Example: f(x) = x².</li>
<li><strong>Onto (surjective):</strong> Range equals codomain.</li>
</ul>
<h3>3. Composite Functions</h3>
<div class="formula-box">fg(x) = f(g(x)) — apply g first, then f</div>
<ul>
<li>Order matters: fg(x) ≠ gf(x) in general.</li>
<li>Domain of fg: x must be in domain of g, and g(x) must be in domain of f.</li>
</ul>
<h3>4. Inverse Functions</h3>
<ul>
<li>Only one-one functions have inverses.</li>
<li><strong>Finding inverse:</strong> Write y = f(x), rearrange to make x the subject, swap x and y.</li>
<li><strong>Domain of f⁻¹</strong> = Range of f.</li>
<li><strong>Range of f⁻¹</strong> = Domain of f.</li>
<li>Graph of f⁻¹ is reflection of f in the line y = x.</li>
</ul>
<h3>5. Modulus Function</h3>
<div class="formula-box">|x| = x if x ≥ 0; |x| = −x if x < 0</div>
<ul>
<li>|f(x)| reflects negative parts of f(x) above x-axis.</li>
<li>f(|x|): reflect right side of graph to left side (symmetric about y-axis).</li>
<li>Solve |x − a| = b → x − a = b or x − a = −b.</li>
<li>Solve |x − a| < b → −b < x − a < b → a − b < x < a + b.</li>
</ul>`,
    s: [`f(x) is the output when input is x`, `fg(x) = f(g(x))`, `Inverse: swap x and y, rearrange`, `|x| = x for x ≥ 0; |x| = −x for x < 0`, `Reflect inverse in line y = x`],
    t: [`Check if function is one-one before finding inverse`, `For composite functions, work from the inside out`, `When solving modulus equations, always consider ±`, `Domain of f⁻¹ = Range of f; Range of f⁻¹ = Domain of f`]
  },
  'm3': {
    name: 'Coordinate Geometry',
    d: `<h3>1. Distance Between Two Points</h3>
<div class="formula-box">d = √((x₂ − x₁)² + (y₂ − y₁)²)</div>
<ul>
<li>Derived from Pythagoras' theorem.</li>
</ul>
<h3>2. Midpoint</h3>
<div class="formula-box">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</div>
<h3>3. Gradient of a Line</h3>
<div class="formula-box">m = (y₂ − y₁) / (x₂ − x₁)</div>
<ul>
<li><strong>Positive gradient:</strong> Line slopes upward left to right.</li>
<li><strong>Negative gradient:</strong> Line slopes downward left to right.</li>
<li><strong>Zero gradient:</strong> Horizontal line.</li>
<li><strong>Undefined gradient:</strong> Vertical line.</li>
</ul>
<h3>4. Equations of Straight Lines</h3>
<ul>
<li><strong>y = mx + c:</strong> m = gradient, c = y-intercept.</li>
<li><strong>y − y₁ = m(x − x₁):</strong> Point-slope form through (x₁, y₁).</li>
<li><strong>ax + by + c = 0:</strong> General form.</li>
</ul>
<h3>5. Parallel and Perpendicular Lines</h3>
<ul>
<li><strong>Parallel:</strong> Same gradient. m₁ = m₂.</li>
<li><strong>Perpendicular:</strong> Product of gradients = −1. m₁ × m₂ = −1, or m₂ = −1/m₁.</li>
</ul>
<h3>6. Intersection of Lines</h3>
<ul>
<li>Solve equations simultaneously.</li>
<li>If lines are parallel and distinct: no intersection.</li>
<li>If lines are coincident: infinitely many intersections.</li>
</ul>`,
    s: [`Distance: d = √((x₂ − x₁)² + (y₂ − y₁)²)`, `Gradient: m = (y₂ − y₁)/(x₂ − x₁)`, `Parallel: m₁ = m₂`, `Perpendicular: m₁ × m₂ = −1`, `Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)`],
    t: [`Always draw a sketch to check your answer makes sense`, `For perpendicular lines, flip gradient and change sign`, `General form ax + by + c = 0 can be rearranged to y = mx + c`, `Show all working when finding intersection points`]
  },
  'm4': {
    name: 'Circular Measure',
    d: `<h3>1. Radians and Degrees</h3>
<div class="formula-box">π radians = 180°<br>1 radian = 180°/π ≈ 57.3°<br>1° = π/180 radians</div>
<ul>
<li><strong>Common conversions:</strong> 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 360° = 2π</li>
</ul>
<h3>2. Arc Length</h3>
<div class="formula-box">s = rθ (θ in radians)</div>
<ul>
<li>For degrees: s = 2πr × (θ/360)</li>
</ul>
<h3>3. Area of a Sector</h3>
<div class="formula-box">A = ½r²θ (θ in radians)</div>
<ul>
<li>For degrees: A = πr² × (θ/360)</li>
</ul>
<h3>4. Area of a Segment</h3>
<div class="formula-box">Area of segment = Area of sector − Area of triangle = ½r²(θ − sin θ)</div>
<h3>5. Applications</h3>
<ul>
<li>Always check calculator is in correct mode (radians vs degrees).</li>
<li>When angle given in terms of π, answer is likely exact.</li>
<li>Perimeter of sector = r + r + rθ = 2r + rθ.</li>
</ul>`,
    s: [`π rad = 180°`, `Arc length: s = rθ`, `Sector area: A = ½r²θ`, `Segment area = ½r²(θ − sin θ)`, `Perimeter of sector = 2r + rθ`],
    t: [`Check calculator mode before calculating`, `Common angles: π/6=30°, π/4=45°, π/3=60°, π/2=90°`, `When θ is in terms of π, leave answer exact`, `Segment = sector − triangle`]
  },
  'm5': {
    name: 'Trigonometry',
    d: `<h3>1. Sine, Cosine, and Tangent</h3>
<div class="formula-box">sin θ = opposite/hypotenuse<br>cos θ = adjacent/hypotenuse<br>tan θ = opposite/adjacent = sin θ/cos θ</div>
<h3>2. Exact Values</h3>
<ul>
<li><strong>30° (π/6):</strong> sin = ½, cos = √3/2, tan = 1/√3</li>
<li><strong>45° (π/4):</strong> sin = 1/√2, cos = 1/√2, tan = 1</li>
<li><strong>60° (π/3):</strong> sin = √3/2, cos = ½, tan = √3</li>
</ul>
<h3>3. Trigonometric Identities</h3>
<div class="formula-box">tan θ ≡ sin θ/cos θ<br>sin² θ + cos² θ ≡ 1</div>
<ul>
<li>From sin² θ + cos² θ = 1, dividing by cos² θ gives: tan² θ + 1 ≡ sec² θ</li>
<li>Dividing by sin² θ gives: 1 + cot² θ ≡ cosec² θ</li>
</ul>
<h3>4. Solving Trigonometric Equations</h3>
<ul>
<li>Use CAST diagram or sketch to find all solutions in given range.</li>
<li>Sin is positive in 1st and 2nd quadrants.</li>
<li>Cos is positive in 1st and 4th quadrants.</li>
<li>Tan is positive in 1st and 3rd quadrants.</li>
<li>For sin x = k: x = sin⁻¹k or x = 180° − sin⁻¹k (or π − sin⁻¹k in radians).</li>
<li>For cos x = k: x = cos⁻¹k or x = 360° − cos⁻¹k (or 2π − cos⁻¹k).</li>
<li>For tan x = k: x = tan⁻¹k or x = 180° + tan⁻¹k (or π + tan⁻¹k).</li>
</ul>
<h3>5. Graphs of Trigonometric Functions</h3>
<ul>
<li><strong>y = sin x:</strong> Period 360° (2π), amplitude 1, passes through origin.</li>
<li><strong>y = cos x:</strong> Period 360° (2π), amplitude 1, passes through (0,1).</li>
<li><strong>y = tan x:</strong> Period 180° (π), asymptotes at x = 90°, 270°, etc.</li>
<li><strong>y = a sin(bx) + c:</strong> Amplitude = |a|, Period = 360°/b (or 2π/b), Vertical shift = c.</li>
</ul>`,
    s: [`sin² θ + cos² θ ≡ 1`, `tan θ ≡ sin θ/cos θ`, `tan² θ + 1 ≡ sec² θ`, `Exact: sin 30°=½, cos 30°=√3/2, tan 30°=1/√3`, `sin positive in 1st & 2nd; cos in 1st & 4th; tan in 1st & 3rd`],
    t: [`Learn exact values for 30°, 45°, 60°`, `Use CAST diagram to find all solutions`, `Always check your calculator is in correct mode`, `When solving, find all solutions in the given range`]
  },
  'm6': {
    name: 'Series',
    d: `<h3>1. Binomial Expansion</h3>
<div class="formula-box">(a + b)ⁿ = aⁿ + naⁿ⁻¹b + [n(n−1)/2!]aⁿ⁻²b² + ... + bⁿ</div>
<ul>
<li><strong>General term:</strong> (n choose r) aⁿ⁻ʳ bʳ where (n choose r) = n!/(r!(n−r)!)</li>
<li><strong>Pascal's Triangle:</strong> Coefficients for small n.</li>
<li>For (1 + x)ⁿ where n is not a positive integer: infinite series valid for |x| < 1.</li>
</ul>
<h3>2. Arithmetic Progression (AP)</h3>
<div class="formula-box">nth term: uₙ = a + (n − 1)d<br>Sum of n terms: Sₙ = n/2(2a + (n − 1)d) or Sₙ = n/2(a + l) where l = last term</div>
<ul>
<li><strong>a</strong> = first term, <strong>d</strong> = common difference.</li>
</ul>
<h3>3. Geometric Progression (GP)</h3>
<div class="formula-box">nth term: uₙ = arⁿ⁻¹<br>Sum of n terms: Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1<br>Sum to infinity: S∞ = a/(1 − r) for |r| < 1</div>
<ul>
<li><strong>a</strong> = first term, <strong>r</strong> = common ratio.</li>
<li><strong>Convergent:</strong> |r| < 1 (S∞ exists).</li>
<li><strong>Divergent:</strong> |r| ≥ 1 (S∞ does not exist).</li>
</ul>`,
    s: [`Binomial: (a+b)ⁿ = Σ (n choose r) aⁿ⁻ʳbʳ`, `AP: uₙ = a + (n−1)d; Sₙ = n/2(2a + (n−1)d)`, `GP: uₙ = arⁿ⁻¹; Sₙ = a(1−rⁿ)/(1−r)`, `S∞ = a/(1−r) for |r| < 1`, `(n choose r) = n!/(r!(n−r)!)`],
    t: [`Check if GP is convergent before using S∞`, `For binomial with negative/fractional n, series valid for |x| < 1`, `AP sum: n/2(first + last) is often quicker`, `Always define a, d, r before substituting`]
  },
  'm7': {
    name: 'Differentiation',
    d: `<h3>1. The Gradient of a Curve</h3>
<ul>
<li>The derivative dy/dx gives the gradient of the tangent at any point.</li>
<li>It measures the rate of change of y with respect to x.</li>
</ul>
<h3>2. Differentiation from First Principles</h3>
<div class="formula-box">f'(x) = lim(h→0) [f(x+h) − f(x)]/h</div>
<ul>
<li>Used to derive standard results.</li>
</ul>
<h3>3. Standard Results</h3>
<div class="formula-box">If y = xⁿ, then dy/dx = nxⁿ⁻¹<br>If y = axⁿ, then dy/dx = anxⁿ⁻¹<br>If y = constant, dy/dx = 0</div>
<ul>
<li><strong>Sum rule:</strong> d/dx(f + g) = f' + g'</li>
<li><strong>Constant multiple:</strong> d/dx(af) = af'</li>
</ul>
<h3>4. Tangents and Normals</h3>
<ul>
<li><strong>Tangent:</strong> Gradient = f'(a). Equation: y − f(a) = f'(a)(x − a).</li>
<li><strong>Normal:</strong> Perpendicular to tangent. Gradient = −1/f'(a). Equation: y − f(a) = (−1/f'(a))(x − a).</li>
</ul>
<h3>5. Increasing and Decreasing Functions</h3>
<ul>
<li><strong>Increasing:</strong> f'(x) > 0</li>
<li><strong>Decreasing:</strong> f'(x) < 0</li>
</ul>
<h3>6. Stationary Points</h3>
<ul>
<li>Occur where f'(x) = 0.</li>
<li><strong>Maximum:</strong> f'(x) changes from + to −. f''(x) < 0.</li>
<li><strong>Minimum:</strong> f'(x) changes from − to +. f''(x) > 0.</li>
<li><strong>Point of inflexion:</strong> f'(x) = 0 but doesn't change sign. f''(x) = 0 (check further).</li>
</ul>
<h3>7. Second Derivative</h3>
<div class="formula-box">d²y/dx² = d/dx(dy/dx)</div>
<ul>
<li>f''(x) > 0 → concave up → minimum</li>
<li>f''(x) < 0 → concave down → maximum</li>
</ul>
<h3>8. Chain Rule</h3>
<div class="formula-box">dy/dx = dy/du × du/dx</div>
<ul>
<li>For composite functions: if y = (ax + b)ⁿ, dy/dx = an(ax + b)ⁿ⁻¹</li>
</ul>
<h3>9. Connected Rates of Change</h3>
<ul>
<li>Use chain rule: dy/dt = dy/dx × dx/dt</li>
<li>Given one rate, find another related rate.</li>
</ul>`,
    s: [`Power rule: d/dx(xⁿ) = nxⁿ⁻¹`, `Chain rule: dy/dx = dy/du × du/dx`, `Stationary point: f'(x) = 0`, `Maximum: f''(x) < 0; Minimum: f''(x) > 0`, `Tangent gradient = f'(a); Normal gradient = −1/f'(a)`],
    t: [`Always simplify before differentiating`, `For stationary points, show f'(x) = 0 and use second derivative or sign test`, `Don't forget the constant multiple rule`, `Connected rates: identify what you need and what you're given`]
  },
  'm8': {
    name: 'Integration',
    d: `<h3>1. Integration as Reverse of Differentiation</h3>
<div class="formula-box">∫xⁿ dx = xⁿ⁺¹/(n+1) + c (for n ≠ −1)</div>
<ul>
<li><strong>Indefinite integral:</strong> Includes +c (constant of integration).</li>
<li><strong>Definite integral:</strong> Evaluated between limits, no +c needed.</li>
</ul>
<h3>2. Standard Integrals</h3>
<div class="formula-box">∫axⁿ dx = axⁿ⁺¹/(n+1) + c<br>∫(ax + b)ⁿ dx = (ax + b)ⁿ⁺¹/[a(n+1)] + c</div>
<h3>3. Definite Integration</h3>
<div class="formula-box">∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a)</div>
<ul>
<li>Gives the area under the curve between x = a and x = b.</li>
<li>If curve is below x-axis, integral is negative — area is positive value.</li>
</ul>
<h3>4. Area Under a Curve</h3>
<ul>
<li>Area = ∫ₐᵇ y dx (where y = f(x)).</li>
<li>If curve crosses x-axis between a and b, split into separate integrals.</li>
<li>Total area = sum of absolute values of each part.</li>
</ul>
<h3>5. Area Between Curve and Line</h3>
<ul>
<li>Area = ∫ₐᵇ (top function − bottom function) dx.</li>
<li>Find intersection points first to determine limits.</li>
</ul>
<h3>6. Numerical Integration — Trapezium Rule</h3>
<div class="formula-box">∫ₐᵇ y dx ≈ h/2[y₀ + 2(y₁ + y₂ + ... + yₙ₋₁) + yₙ]<br>where h = (b − a)/n</div>
<ul>
<li>More strips (larger n) = more accurate.</li>
<li>Overestimates if curve is concave up; underestimates if concave down.</li>
</ul>`,
    s: [`∫xⁿ dx = xⁿ⁺¹/(n+1) + c`, `Definite: ∫ₐᵇ f(x) dx = F(b) − F(a)`, `Area under curve = ∫ y dx`, `Area between curves = ∫ (top − bottom) dx`, `Trapezium: h/2[y₀ + 2(y₁+...+yₙ₋₁) + yₙ]`],
    t: [`Never forget +c for indefinite integrals`, `Check if curve crosses axis — split if needed`, `Trapezium rule: more strips = more accurate`, `Area is always positive — take absolute value`]
  },
  'm9': {
    name: 'Vectors',
    d: `<h3>1. Vector Notation</h3>
<ul>
<li><strong>Column vector:</strong> (a, b) or (a, b, c) in 3D.</li>
<li><strong>Unit vectors:</strong> i = (1, 0), j = (0, 1), k = (0, 0, 1).</li>
<li>Vector r = ai + bj + ck = (a, b, c).</li>
</ul>
<h3>2. Magnitude of a Vector</h3>
<div class="formula-box">|r| = √(a² + b²) in 2D<br>|r| = √(a² + b² + c²) in 3D</div>
<h3>3. Vector Operations</h3>
<ul>
<li><strong>Addition:</strong> (a, b) + (c, d) = (a+c, b+d)</li>
<li><strong>Scalar multiplication:</strong> k(a, b) = (ka, kb)</li>
<li><strong>Negative:</strong> −(a, b) = (−a, −b)</li>
</ul>
<h3>4. Position and Direction Vectors</h3>
<ul>
<li><strong>Position vector:</strong> Vector from origin to point P.</li>
<li><strong>Direction vector:</strong> Vector giving direction of a line.</li>
<li><strong>Vector AB:</strong> b − a (position vector of B minus position vector of A).</li>
</ul>
<h3>5. Equation of a Line</h3>
<div class="formula-box">r = a + tb<br>where a = position vector of point on line, b = direction vector, t = parameter</div>
<ul>
<li><strong>Cartesian form:</strong> (x − x₁)/a = (y − y₁)/b = (z − z₁)/c</li>
</ul>
<h3>6. Scalar (Dot) Product</h3>
<div class="formula-box">a · b = |a||b|cos θ = a₁b₁ + a₂b₂ + a₃b₃</div>
<ul>
<li><strong>Perpendicular:</strong> a · b = 0 (since cos 90° = 0).</li>
<li><strong>Angle between vectors:</strong> cos θ = (a · b)/(|a||b|).</li>
</ul>`,
    s: [`|r| = √(a² + b² + c²)`, `a · b = a₁b₁ + a₂b₂ + a₃b₃`, `Perpendicular: a · b = 0`, `Angle: cos θ = (a·b)/(|a||b|)`, `Line: r = a + tb`],
    t: [`When finding angle, ensure vectors point away from or toward same point`, `For perpendicular lines, direction vectors have dot product = 0`, `Magnitude always positive`, `Vector AB = b − a`]
  },
  'm10': {
    name: 'Probability',
    d: `<h3>1. Basic Probability</h3>
<div class="formula-box">P(A) = n(A)/n(ℰ)</div>
<ul>
<li><strong>Range:</strong> 0 ≤ P(A) ≤ 1</li>
<li><strong>Complement:</strong> P(A') = 1 − P(A)</li>
</ul>
<h3>2. Combined Events</h3>
<ul>
<li><strong>OR (union):</strong> P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</li>
<li><strong>Mutually exclusive:</strong> P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)</li>
<li><strong>AND (intersection):</strong> P(A ∩ B) = P(A) × P(B|A)</li>
</ul>
<h3>3. Conditional Probability</h3>
<div class="formula-box">P(A|B) = P(A ∩ B)/P(B)</div>
<ul>
<li><strong>Independent events:</strong> P(A|B) = P(A), so P(A ∩ B) = P(A) × P(B)</li>
</ul>
<h3>4. Tree Diagrams</h3>
<ul>
<li>Multiply along branches for AND.</li>
<li>Add across branches for OR (mutually exclusive paths).</li>
</ul>
<h3>5. Permutations and Combinations</h3>
<div class="formula-box">ⁿPᵣ = n!/(n−r)! (order matters)<br>ⁿCᵣ = n!/[r!(n−r)!] (order doesn't matter)</div>
<ul>
<li><strong>Permutation:</strong> Arrangement where order is important.</li>
<li><strong>Combination:</strong> Selection where order is not important.</li>
</ul>`,
    s: [`P(A') = 1 − P(A)`, `P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`, `P(A ∩ B) = P(A) × P(B|A)`, `Independent: P(A ∩ B) = P(A) × P(B)`, `ⁿCᵣ = n!/[r!(n−r)!]`],
    t: [`Draw tree diagrams for multi-stage problems`, `Distinguish between permutation (order matters) and combination (order doesn't)`, `Venn diagrams help visualise P(A ∪ B) and P(A ∩ B)`, `For "at least one", consider using complement: 1 − P(none)`]
  },
  'm11': {
    name: 'Distributions',
    d: `<h3>1. Discrete Random Variables</h3>
<ul>
<li><strong>Probability distribution:</strong> Table showing each value x and P(X = x).</li>
<li><strong>ΣP(X = x) = 1</strong></li>
</ul>
<h3>2. Expectation and Variance</h3>
<div class="formula-box">E(X) = ΣxP(X = x)<br>E(X²) = Σx²P(X = x)<br>Var(X) = E(X²) − [E(X)]²<br>SD(X) = √Var(X)</div>
<ul>
<li><strong>Linear transformation:</strong> E(aX + b) = aE(X) + b; Var(aX + b) = a²Var(X)</li>
</ul>
<h3>3. Binomial Distribution</h3>
<div class="formula-box">X ~ B(n, p)<br>P(X = r) = ⁿCᵣ pʳ(1−p)ⁿ⁻ʳ</div>
<ul>
<li><strong>n</strong> = number of trials, <strong>p</strong> = probability of success.</li>
<li><strong>Conditions:</strong> Fixed n, independent trials, constant p, two outcomes.</li>
<li><strong>Mean:</strong> E(X) = np</li>
<li><strong>Variance:</strong> Var(X) = np(1−p)</li>
</ul>
<h3>4. Normal Distribution</h3>
<div class="formula-box">X ~ N(μ, σ²)</div>
<ul>
<li>Bell-shaped curve, symmetric about μ.</li>
<li>Total area under curve = 1.</li>
<li><strong>Standard normal:</strong> Z = (X − μ)/σ ~ N(0, 1)</li>
<li>Use standard normal tables to find probabilities.</li>
<li><strong>Key values:</strong> P(μ − σ < X < μ + σ) ≈ 0.68, P(μ − 2σ < X < μ + 2σ) ≈ 0.95</li>
</ul>`,
    s: [`E(X) = ΣxP(X=x)`, `Var(X) = E(X²) − [E(X)]²`, `Binomial: P(X=r) = ⁿCᵣ pʳ(1−p)ⁿ⁻ʳ`, `Normal: Z = (X−μ)/σ`, `Binomial mean = np; variance = np(1−p)`],
    t: [`For binomial, check conditions: fixed n, independent, constant p, two outcomes`, `Standardise normal: Z = (X − μ)/σ`, `Use tables for Z values — draw diagram`, `Var(aX+b) = a²Var(X); SD(aX+b) = |a|SD(X)`]
  },
  'm12': {
    name: 'Hypothesis Testing',
    d: `<h3>1. Null and Alternative Hypotheses</h3>
<ul>
<li><strong>H₀ (null hypothesis):</strong> Default assumption — parameter equals a stated value. Example: H₀: μ = 50.</li>
<li><strong>H₁ (alternative hypothesis):</strong> What we suspect might be true instead.</li>
<li><strong>One-tailed test:</strong> H₁: μ > 50 or H₁: μ < 50 (direction specified).</li>
<li><strong>Two-tailed test:</strong> H₁: μ ≠ 50 (no direction).</li>
</ul>
<h3>2. Test Statistic</h3>
<div class="formula-box">For means (known variance or large sample):<br>z = (x̄ − μ)/(σ/√n)</div>
<ul>
<li>Compare test statistic to critical value or find p-value.</li>
</ul>
<h3>3. Significance Level and Critical Region</h3>
<ul>
<li><strong>Significance level (α):</strong> Probability of rejecting H₀ when it is true. Usually 5% (0.05) or 1% (0.01).</li>
<li><strong>Critical region:</strong> Range of values where H₀ is rejected.</li>
<li><strong>Critical value:</strong> Boundary of critical region from tables.</li>
<li>For two-tailed test at 5%, each tail has 2.5%.</li>
</ul>
<h3>4. Decision Rule</h3>
<ul>
<li>If test statistic falls in critical region → Reject H₀.</li>
<li>If test statistic does not fall in critical region → Do not reject H₀ (insufficient evidence).</li>
<li>Or: if p-value < α → Reject H₀.</li>
</ul>
<h3>5. Type I and Type II Errors</h3>
<ul>
<li><strong>Type I error:</strong> Reject H₀ when it is true. P(Type I) = α.</li>
<li><strong>Type II error:</strong> Do not reject H₀ when it is false.</li>
</ul>
<h3>6. Steps in Hypothesis Testing</h3>
<ol>
<li>State H₀ and H₁.</li>
<li>Choose significance level.</li>
<li>Calculate test statistic.</li>
<li>Determine critical value or p-value.</li>
<li>Make decision (reject or not reject H₀).</li>
<li>Write conclusion in context.</li>
</ol>`,
    s: [`H₀: default assumption`, `H₁: alternative (one-tailed or two-tailed)`, `Test statistic z = (x̄ − μ)/(σ/√n)`, `Reject H₀ if test statistic in critical region`, `Type I: reject true H₀; Type II: accept false H₀`],
    t: [`Always state H₀ and H₁ clearly`, `Check if test is one-tailed or two-tailed`, `Conclusion must be in context — not just "reject H₀"`, `For two-tailed at 5%, use 2.5% in each tail`]
  },
  'm13': {
    name: 'Kinematics',
    d: `<h3>1. SUVAT Equations (Constant Acceleration)</h3>
<div class="formula-box">v = u + at<br>s = ½(u + v)t<br>s = ut + ½at²<br>s = vt − ½at²<br>v² = u² + 2as</div>
<ul>
<li><strong>s</strong> = displacement, <strong>u</strong> = initial velocity, <strong>v</strong> = final velocity, <strong>a</strong> = acceleration, <strong>t</strong> = time.</li>
<li>Choose equation based on which variable is missing.</li>
</ul>
<h3>2. Velocity-Time Graphs</h3>
<ul>
<li><strong>Gradient</strong> = acceleration.</li>
<li><strong>Area under graph</strong> = displacement.</li>
<li>Horizontal line = constant velocity (a = 0).</li>
</ul>
<h3>3. Forces and Newton's Laws</h3>
<ul>
<li><strong>First Law:</strong> Object remains at rest or constant velocity unless acted on by resultant force.</li>
<li><strong>Second Law:</strong> F = ma (Resultant force = mass × acceleration).</li>
<li><strong>Third Law:</strong> Action and reaction are equal and opposite.</li>
</ul>
<h3>4. Connected Particles</h3>
<ul>
<li>Draw separate force diagrams for each particle.</li>
<li>Write F = ma for each.</li>
<li>Relate accelerations (same magnitude for particles connected by string).</li>
<li>Tension same throughout light inextensible string.</li>
</ul>
<h3>5. Projectiles</h3>
<ul>
<li>Resolve into horizontal and vertical components.</li>
<li>Horizontal: constant velocity (a = 0).</li>
<li>Vertical: constant acceleration due to gravity (a = −g).</li>
<li>Use SUVAT separately for each direction.</li>
<li>Time is the same for both directions.</li>
</ul>`,
    s: [`SUVAT: v=u+at, s=ut+½at², v²=u²+2as`, `F = ma`, `v-t graph gradient = acceleration`, `v-t graph area = displacement`, `Projectile: horizontal constant velocity, vertical a = −g`],
    t: [`Draw clear force diagrams`, `Choose SUVAT equation based on missing variable`, `For projectiles, resolve horizontally and vertically`, `Connected particles: same tension, same acceleration magnitude`]
  },
};

function enrichFile(filepath, data) {
  let html = fs.readFileSync(filepath, 'utf8');

  const newContent = `<div class="notes-section">
<h2>Detailed Notes</h2>
${data.d}
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
${data.s.map(s => `<li>${s}</li>`).join('\n')}
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
${data.t.map(t => `<li>${t}</li>`).join('\n')}
</ul>
</div>`;

  // Find header end
  const headerIdx = html.indexOf('<div class="notes-header">');
  if (headerIdx === -1) return false;
  const headerEnd = html.indexOf('</div>', html.indexOf('</div>', headerIdx) + 6);
  if (headerEnd === -1) return false;

  // Find section end
  const sectionMatch = html.match(/<\/div>\s*<\/div>\s*<\/section>/);
  if (!sectionMatch) return false;

  const before = html.substring(0, headerEnd + 6);
  const after = html.substring(sectionMatch.index);

  fs.writeFileSync(filepath, before + '\n' + newContent + '\n' + after);
  return true;
}

let enriched = 0;
let failed = 0;

for (const [key, data] of Object.entries(MATHS)) {
  const variants = [
    `maths-${key}.html`,
    `maths-${key}-a.html`,
    `maths-${key}-igcse.html`
  ];

  for (const file of variants) {
    const filepath = path.join(notesDir, file);
    if (!fs.existsSync(filepath)) { failed++; continue; }
    if (enrichFile(filepath, data)) {
      enriched++;
      console.log(`✅ Enriched: ${file}`);
    } else {
      failed++;
      console.log(`❌ Failed: ${file}`);
    }
  }
}

console.log(`\nEnriched: ${enriched}`);
console.log(`Failed: ${failed}`);
