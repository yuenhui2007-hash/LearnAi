# A-Level Mathematics Notes

## 1. ALGEBRA & FUNCTIONS

### Indices Laws

| Law | Formula |
|-----|---------|
| Multiplication | a^m × a^n = a^(m+n) |
| Division | a^m ÷ a^n = a^(m-n) |
| Power of power | (a^m)^n = a^(mn) |
| Zero index | a^0 = 1 (a ≠ 0) |
| Negative index | a^(-n) = 1/a^n |
| Fractional index | a^(1/n) = n√a, a^(m/n) = (n√a)^m |

### Surds
> Irrational roots that cannot be simplified to whole numbers.

**Rules:**
- √a × √b = √(ab)
- √a ÷ √b = √(a/b)
- Rationalizing: Multiply numerator and denominator by conjugate
  - Example: 1/(√a + √b) × (√a - √b)/(√a - √b) = (√a - √b)/(a - b)

### Quadratic Equations

**Standard form:** ax² + bx + c = 0

**Methods:**
1. **Factorizing:** Find two numbers that multiply to ac and add to b
2. **Quadratic Formula:**
   ```
   x = [-b ± √(b² - 4ac)] / 2a
   ```
3. **Completing the Square:**
   ```
   x² + bx + c = (x + b/2)² - (b/2)² + c
   ```

**Discriminant (b² - 4ac):**

| Value | Nature of Roots |
|-------|----------------|
| b² - 4ac > 0 | Two distinct real roots |
| b² - 4ac = 0 | One repeated real root |
| b² - 4ac < 0 | No real roots (complex) |

### Polynomials

**Factor Theorem:**
> If f(a) = 0, then (x - a) is a factor of f(x).

**Remainder Theorem:**
> When f(x) is divided by (x - a), the remainder is f(a).

**Polynomial Division:**
- Long division or synthetic division
- If degree of divisor > degree of remainder, division is complete

### Partial Fractions

| Type | Form | Example |
|------|------|---------|
| Linear factors | A/(x+a) + B/(x+b) | 1/[(x+1)(x+2)] = A/(x+1) + B/(x+2) |
| Repeated linear | A/(x+a) + B/(x+a)² | 1/(x+1)² = A/(x+1) + B/(x+1)² |
| Irreducible quadratic | (Ax+B)/(ax²+bx+c) | 1/[(x+1)(x²+1)] = A/(x+1) + (Bx+C)/(x²+1) |

### Modulus Function

|x| = x if x ≥ 0, -x if x < 0

**Key properties:**
- |x| = a → x = a or x = -a
- |x| < a → -a < x < a
- |x| > a → x < -a or x > a
- |x - a| represents distance from a on number line

### Functions

**Domain:** Set of allowed input values
**Range:** Set of possible output values

**Types:**
| Type | Definition | Example |
|------|-----------|---------|
| **One-one (injective)** | Each output from unique input | f(x) = 2x + 1 |
| **Many-one** | Different inputs give same output | f(x) = x² |
| **Onto (surjective)** | Every possible output is used | Depends on domain/range |

**Inverse Function (f⁻¹):**
- Swap x and y, solve for y
- Domain of f⁻¹ = Range of f
- Graph of f⁻¹ is reflection of f in y = x

**Composite Functions:**
- fg(x) = f(g(x)) — apply g first, then f
- gf(x) = g(f(x)) — apply f first, then g

**Transformations:**
| Transformation | Effect on y = f(x) |
|---------------|-------------------|
| f(x) + a | Vertical translation: up by a |
| f(x) - a | Vertical translation: down by a |
| f(x + a) | Horizontal translation: left by a |
| f(x - a) | Horizontal translation: right by a |
| a·f(x) | Vertical stretch: scale factor a |
| f(ax) | Horizontal stretch: scale factor 1/a |
| -f(x) | Reflection in x-axis |
| f(-x) | Reflection in y-axis |

---

## 2. COORDINATE GEOMETRY

### Straight Lines

**Gradient (m):**
```
m = (y₂ - y₁) / (x₂ - x₁)
```

**Equations:**
- **Gradient-intercept:** y = mx + c
- **Point-gradient:** y - y₁ = m(x - x₁)
- **General form:** ax + by + c = 0

**Parallel lines:** m₁ = m₂
**Perpendicular lines:** m₁ × m₂ = -1

**Distance between points:**
```
d = √[(x₂ - x₁)² + (y₂ - y₁)²]
```

**Midpoint:**
```
[(x₁ + x₂)/2, (y₁ + y₂)/2]
```

### Circles

**Standard equation:**
```
(x - a)² + (y - b)² = r²
```
where (a, b) is centre, r is radius.

**General form:**
```
x² + y² + 2gx + 2fy + c = 0
```
Centre: (-g, -f), Radius: √(g² + f² - c)

**Tangent to circle:**
- Perpendicular to radius at point of contact
- Gradient of tangent × gradient of radius = -1

**Chord properties:**
- Perpendicular from centre bisects chord

### Parametric Equations

**Converting to Cartesian:**
- Solve one equation for parameter t
- Substitute into other equation

**Common parametric forms:**
| Curve | x | y |
|-------|---|---|
| Circle | r cos θ | r sin θ |
| Parabola | at² | 2at |
| Ellipse | a cos θ | b sin θ |

---

## 3. TRIGONOMETRY

### Radians
```
π radians = 180°
1 radian ≈ 57.3°
```

**Arc length:** s = rθ (θ in radians)
**Sector area:** A = ½r²θ
**Segment area:** A = ½r²(θ - sin θ)

### Standard Trigonometric Values

| Angle | 0 | π/6 | π/4 | π/3 | π/2 |
|-------|---|-----|-----|-----|-----|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | √3/3 | 1 | √3 | undefined |

### Identities

**Pythagorean:**
```
sin²θ + cos²θ = 1
1 + tan²θ = sec²θ
1 + cot²θ = cosec²θ
```

**Double Angle:**
```
sin 2θ = 2 sin θ cos θ
cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ
tan 2θ = 2tan θ / (1 - tan²θ)
```

**Compound Angle:**
```
sin(A ± B) = sin A cos B ± cos A sin B
cos(A ± B) = cos A cos B ∓ sin A sin B
tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)
```

**R-Formula:**
```
a sin θ ± b cos θ = R sin(θ ± α)
a cos θ ± b sin θ = R cos(θ ∓ α)
where R = √(a² + b²), tan α = b/a
```

### Solving Trigonometric Equations
1. Use identities to write in single trig function
2. Solve for the angle
3. Find all solutions in given interval
4. Remember periodicity: sin/cos period = 2π, tan period = π

### Sine & Cosine Rules

**Sine Rule:**
```
a/sin A = b/sin B = c/sin C = 2R (circumradius)
```

**Cosine Rule:**
```
a² = b² + c² - 2bc cos A
cos A = (b² + c² - a²) / 2bc
```

**Area of triangle:**
```
Area = ½ab sin C
```

### Small Angle Approximations
```
sin θ ≈ θ
tan θ ≈ θ
cos θ ≈ 1 - θ²/2
```
(θ in radians, for small θ)

---

## 4. SEQUENCES & SERIES

### Arithmetic Sequences

**nth term:**
```
aₙ = a + (n - 1)d
```
where a = first term, d = common difference

**Sum of n terms:**
```
Sₙ = n/2 [2a + (n - 1)d] = n/2 (a + l)
```
where l = last term

### Geometric Sequences

**nth term:**
```
aₙ = ar^(n-1)
```
where a = first term, r = common ratio

**Sum of n terms:**
```
Sₙ = a(1 - r^n) / (1 - r)   [r ≠ 1]
```

**Sum to infinity:**
```
S∞ = a / (1 - r)   [|r| < 1]
```

### Sigma Notation
```
Σ (expression) from r=m to n
```

### Binomial Expansion

**For positive integer n:**
```
(a + b)^n = Σ C(n,r) a^(n-r) b^r  [r = 0 to n]
```
where C(n,r) = n! / [r!(n-r)!]

**For any rational n (|x| < 1):**
```
(1 + x)^n = 1 + nx + [n(n-1)/2!]x² + [n(n-1)(n-2)/3!]x³ + ...
```

---

## 5. EXPONENTIALS & LOGARITHMS

### Laws of Logarithms

| Law | Formula |
|-----|---------|
| Product | logₐ(xy) = logₐx + logₐy |
| Quotient | logₐ(x/y) = logₐx - logₐy |
| Power | logₐ(x^n) = n logₐx |
| Reciprocal | logₐ(1/x) = -logₐx |

**Change of base:**
```
logₐb = log_c b / log_c a
```

**Special values:**
- logₐa = 1
- logₐ1 = 0
- a^(logₐx) = x
- logₐ(a^x) = x

### Exponential Growth & Decay

```
N = N₀ e^(kt)   [growth, k > 0]
N = N₀ e^(-kt)  [decay, k > 0]
```

**Half-life:** Time for quantity to halve
```
t₁/₂ = ln(2) / k
```

---

## 6. DIFFERENTIATION

### Basic Rules

| Function | Derivative |
|----------|-----------|
| x^n | nx^(n-1) |
| e^x | e^x |
| e^(kx) | ke^(kx) |
| ln x | 1/x |
| ln(kx) | 1/x |
| sin x | cos x |
| cos x | -sin x |
| tan x | sec² x |

### Chain Rule
```
dy/dx = dy/du × du/dx
```

### Product Rule
```
y = uv → dy/dx = u(dv/dx) + v(du/dx)
```

### Quotient Rule
```
y = u/v → dy/dx = [v(du/dx) - u(dv/dx)] / v²
```

### Implicit Differentiation
- Differentiate both sides with respect to x
- Remember d/dx(y) = dy/dx
- Use chain rule for terms in y

### Parametric Differentiation
```
dy/dx = (dy/dt) / (dx/dt)
```

### Second Derivatives
```
d²y/dx² = d/dx(dy/dx)
```

### Applications

**Stationary Points:**
- dy/dx = 0
- d²y/dx² > 0 → Minimum
- d²y/dx² < 0 → Maximum
- d²y/dx² = 0 → Point of inflection (check sign change)

**Optimisation:**
1. Formulate equation to optimize
2. Differentiate
3. Set equal to zero
4. Solve
5. Verify nature (second derivative or sign test)
6. State answer with units

**Rates of Change:**
- dy/dx gives rate of change of y with respect to x
- Connected rates: chain rule

---

## 7. INTEGRATION

### Standard Integrals

| Function | Integral |
|----------|---------|
| x^n | x^(n+1)/(n+1) + c  [n ≠ -1] |
| 1/x | ln|x| + c |
| e^x | e^x + c |
| e^(kx) | (1/k)e^(kx) + c |
| cos x | sin x + c |
| sin x | -cos x + c |
| sec² x | tan x + c |

### Methods

**Substitution:**
- Choose u = part of integrand
- Find du/dx and rearrange
- Substitute and integrate
- Convert back to original variable

**Integration by Parts:**
```
∫ u(dv/dx) dx = uv - ∫ v(du/dx) dx
```
- Choose u using LIATE: Logs, Inverse trig, Algebraic, Trig, Exponential

**Partial Fractions:**
- Split rational function into simpler fractions
- Integrate each separately

### Definite Integration

```
∫[a to b] f(x) dx = F(b) - F(a)
```

**Area under curve:**
```
Area = ∫[a to b] y dx
```

**Area between curves:**
```
Area = ∫[a to b] (top curve - bottom curve) dx
```

**Volume of revolution:**
```
About x-axis: V = π ∫[a to b] y² dx
About y-axis: V = π ∫[a to b] x² dy
```

### Differential Equations

**Separable:**
```
dy/dx = f(x)g(y) → ∫ (1/g(y)) dy = ∫ f(x) dx
```

**General solution:** Contains arbitrary constant
**Particular solution:** Find constant using initial conditions

---

## 8. NUMERICAL METHODS

### Change of Sign Method
- Find interval [a, b] where f(a) and f(b) have opposite signs
- Root lies between a and b
- Bisection: Repeatedly halve interval

### Iterative Methods

**Fixed Point Iteration:**
```
x_(n+1) = g(x_n)
```
- Converges if |g'(x)| < 1 near root
- Rearrange f(x) = 0 into x = g(x)

**Newton-Raphson:**
```
x_(n+1) = x_n - f(x_n) / f'(x_n)
```
- Faster convergence
- May fail if f'(x) ≈ 0

### Trapezium Rule
```
∫[a to b] y dx ≈ (h/2)[y₀ + 2(y₁ + y₂ + ... + y_(n-1)) + y_n]
```
where h = (b - a)/n

- Overestimates if curve bends upwards
- Underestimates if curve bends downwards
- More strips = more accurate

---

## 9. VECTORS

### Notation
- Column vector: **a** = (a₁, a₂, a₃)
- Unit vectors: **i**, **j**, **k**

### Operations

**Addition:**
```
(a₁, a₂, a₃) + (b₁, b₂, b₃) = (a₁+b₁, a₂+b₂, a₃+b₃)
```

**Scalar multiplication:**
```
k(a₁, a₂, a₃) = (ka₁, ka₂, ka₃)
```

**Magnitude:**
```
|**a**| = √(a₁² + a₂² + a₃²)
```

**Unit vector:**
```
â = **a** / |**a**|
```

### Scalar (Dot) Product
```
**a** · **b** = a₁b₁ + a₂b₂ + a₃b₃ = |**a**||**b**|cos θ
```

**Properties:**
- **a** · **b** = 0 → perpendicular
- Angle between vectors: cos θ = (**a** · **b**) / (|**a**||**b**|)

### Vector Equation of a Line
```
**r** = **a** + t**b**
```
where **a** is a point on line, **b** is direction vector.

**Cartesian form:**
```
(x - a₁)/b₁ = (y - a₂)/b₂ = (z - a₃)/b₃
```

### Intersections
- Two lines: Solve simultaneous equations
- Line and plane: Substitute line equation into plane equation

---

## 10. PROOF

### Types of Proof

| Type | When to Use | Example |
|------|-------------|---------|
| **Deduction** | Direct logical steps | Show n² + n is always even |
| **Contradiction** | Assume opposite, find contradiction | Prove √2 is irrational |
| **Exhaustion** | Finite cases to check | Prove n² - n + 41 prime for n = 1 to 10 |
| **Counter-example** | Disprove a statement | Find one case where false |
| **Induction** | Statements for all positive integers | Prove sum formulas |

### Proof by Contradiction Steps
1. Assume statement is false
2. Show this leads to logical contradiction
3. Conclude original statement must be true

### Proof by Induction Steps
1. **Base case:** Prove true for n = 1
2. **Assume true for n = k** (inductive hypothesis)
3. **Prove for n = k + 1** using assumption
4. **Conclusion:** True for all positive integers

---

## 11. STATISTICAL SAMPLING

### Sampling Methods

| Method | Description | Pros | Cons |
|--------|-------------|------|------|
| **Simple Random** | Every sample equally likely | Unbiased, easy | Needs complete list |
| **Systematic** | Every nth item | Simple, quick | Bias if pattern |
| **Stratified** | Proportional subgroups | Representative | Complex |
| **Quota** | Fill quotas per group | Quick, cheap | Interviewer bias |
| **Convenience** | Easily available | Quick | Very biased |

### Types of Data

| Type | Description | Examples |
|------|-------------|----------|
| **Qualitative** | Non-numerical | Colors, opinions |
| **Quantitative — Discrete** | Countable | Number of students |
| **Quantitative — Continuous** | Measurable | Height, weight, time |

### Measures of Location & Spread

**Mean:** x̄ = Σx / n
**Median:** Middle value (average of two middle if even n)
**Mode:** Most frequent value

**Variance:**
```
s² = Σ(x - x̄)² / n   [population]
s² = Σ(x - x̄)² / (n-1)   [sample]
```

**Standard Deviation:** s = √variance
**Range:** Max - Min
**Interquartile Range (IQR):** Q₃ - Q₁

### Coding
```
y = (x - a)/b
```
- Mean: ȳ = (x̄ - a)/b
- Standard deviation: s_y = s_x / b

---

## 12. PROBABILITY

### Basic Rules

```
P(A or B) = P(A) + P(B) - P(A and B)
P(A and B) = P(A) × P(B|A)   [conditional]
P(A|B) = P(A and B) / P(B)
```

**Independent events:**
```
P(A and B) = P(A) × P(B)
```

**Mutually exclusive:**
```
P(A and B) = 0
P(A or B) = P(A) + P(B)
```

### Venn Diagrams
- Overlap = intersection (A ∩ B)
- Whole circles = union (A ∪ B)
- Outside = complement (A')

### Tree Diagrams
- Multiply along branches
- Add different routes

---

## 13. STATISTICAL DISTRIBUTIONS

### Binomial Distribution

**Conditions:**
- Fixed number of trials (n)
- Independent trials
- Two outcomes (success/failure)
- Constant probability of success (p)

**Notation:** X ~ B(n, p)

**Probability:**
```
P(X = r) = C(n,r) p^r (1-p)^(n-r)
```

**Mean:** E(X) = np
**Variance:** Var(X) = np(1-p)

### Normal Distribution

**Notation:** X ~ N(μ, σ²)

**Properties:**
- Symmetric about mean
- Mean = Median = Mode = μ
- Total area under curve = 1
- 68% within μ ± σ
- 95% within μ ± 2σ
- 99.7% within μ ± 3σ

**Standardizing:**
```
Z = (X - μ) / σ
```

**Finding probabilities:**
- Use standard normal tables or calculator
- P(Z < z) from tables
- P(Z > z) = 1 - P(Z < z)
- P(a < Z < b) = P(Z < b) - P(Z < a)

### Normal Approximation to Binomial
**Conditions:** np > 5 and n(1-p) > 5

Use continuity correction:
- P(X ≤ k) → P(X < k + 0.5)
- P(X ≥ k) → P(X > k - 0.5)
- P(X = k) → P(k - 0.5 < X < k + 0.5)

---

## 14. HYPOTHESIS TESTING

### Steps
1. **State hypotheses:**
   - H₀ (null): Status quo, no effect
   - H₁ (alternative): What we suspect

2. **Choose significance level (α):** Usually 5% (0.05)

3. **Calculate test statistic** or find critical value

4. **Compare:**
   - Test statistic vs critical value, OR
   - p-value vs significance level

5. **Conclusion:**
   - Reject H₀ if evidence is significant
   - Otherwise, do not reject H₀

### Types of Tests

| Test | Use | Test Statistic |
|------|-----|---------------|
| **Binomial** | Single proportion | X ~ B(n, p) |
| **Normal** | Mean with known variance | Z = (x̄ - μ) / (σ/√n) |

### Errors

| | H₀ True | H₀ False |
|---|---------|----------|
| **Reject H₀** | Type I error (α) | Correct |
| **Don't reject H₀** | Correct | Type II error (β) |

---

## 15. CORRELATION & REGRESSION

### Product Moment Correlation Coefficient (PMCC)

```
r = S_xy / √(S_xx × S_yy)
```

where:
```
S_xx = Σx² - (Σx)²/n
S_yy = Σy² - (Σy)²/n
S_xy = Σxy - (Σx)(Σy)/n
```

**Interpretation:**
- r = 1: Perfect positive correlation
- r = -1: Perfect negative correlation
- r = 0: No linear correlation
- |r| > 0.7: Strong correlation

**Hypothesis test for correlation:**
- H₀: ρ = 0 (no correlation)
- H₁: ρ ≠ 0 (correlation exists)
- Compare |r| with critical value from tables

### Regression Line

**Least squares regression:**
```
y = a + bx
```
where:
```
b = S_xy / S_xx
a = ȳ - bx̄
```

**Interpolation:** Estimating within data range — reliable
**Extrapolation:** Estimating outside data range — unreliable

---

## 16. MECHANICS — KINEMATICS

### SUVAT Equations
(For constant acceleration)

```
v = u + at
s = ut + ½at²
s = vt - ½at²
s = ½(u + v)t
v² = u² + 2as
```

where:
- s = displacement
- u = initial velocity
- v = final velocity
- a = acceleration
- t = time

### Graphs

| Graph | Gradient | Area |
|-------|----------|------|
| Displacement-time | Velocity | — |
| Velocity-time | Acceleration | Displacement |
| Acceleration-time | — | Change in velocity |

### Variable Acceleration
- Use calculus: v = ds/dt, a = dv/dt = d²s/dt²
- s = ∫ v dt, v = ∫ a dt

### Projectiles

**Horizontal motion:** Constant velocity (a = 0)
```
x = ut (horizontal)
```

**Vertical motion:** Constant acceleration (a = g ≈ 9.8 m/s²)
```
y = ut - ½gt² (vertical, taking upwards as positive)
v = u - gt
```

**Key results:**
- Time of flight depends only on vertical motion
- Range = horizontal velocity × time of flight
- Max height: v_vertical = 0

---

## 17. MECHANICS — FORCES

### Newton's Laws

**First Law:**
> Body remains at rest or in uniform motion unless acted on by force.

**Second Law:**
```
F = ma
```
Resultant force = mass × acceleration

**Third Law:**
> Every action has equal and opposite reaction.

### Types of Forces

| Force | Description |
|-------|-------------|
| **Weight** | W = mg (always acts downwards) |
| **Normal Reaction** | Perpendicular to surface |
| **Friction** | Opposes motion/attempted motion |
| **Tension** | In strings/rods, pulls |
| **Thrust/Compression** | In rods, pushes |

### Resolving Forces
```
F_x = F cos θ   (horizontal component)
F_y = F sin θ   (vertical component)
```

### Equilibrium
- Resultant force = 0
- Can resolve in any two perpendicular directions
- Use triangle of forces for three forces

### Connected Particles
- Same tension throughout string (light, inextensible)
- Same acceleration
- Draw separate diagrams, write equations, solve simultaneously

### Pulleys
- Tension same on both sides (smooth, light)
- Acceleration same magnitude for both particles
- One particle up, other down

---

## 18. MECHANICS — MOMENTS

### Moment of a Force
```
Moment = Force × Perpendicular distance from pivot
```

**Units:** Nm

### Principle of Moments
> For equilibrium: Sum of clockwise moments = Sum of anticlockwise moments

### Centre of Mass
- Point where weight acts
- For uniform objects: geometric centre

### Equilibrium Conditions
1. Resultant force = 0
2. Resultant moment about any point = 0

### Tilting/Ladders
- On point of tilting: Reaction at one end = 0
- Ladder problems: Resolve forces and take moments
- Include friction at wall/ground if rough

---

## EXAM TIPS

### Pure Mathematics
1. **Show all working** — method marks available
2. **Check answers** — substitute back, verify with calculator
3. **Exact values** — Leave surds, fractions, π unless asked for decimal
4. **State formulas** — Write down formula before substituting
5. **Sketch graphs** — Label axes, intercepts, turning points, asymptotes

### Statistics
1. **Define variables** — State H₀ and H₁ clearly
2. **Show calculations** — Write out S_xx, S_xy, etc.
3. **Interpret in context** — Don't just calculate, explain what it means
4. **Continuity correction** — Remember for normal approximation to binomial
5. **Check assumptions** — State conditions for distributions

### Mechanics
1. **Draw diagrams** — Always sketch forces, directions
2. **Define positive direction** — State which way is positive
3. **Use consistent units** — metres, seconds, Newtons
4. **Resolve carefully** — Check angles (to horizontal/vertical)
5. **Check sensibility** — Does answer make physical sense?

### General
1. **Read question carefully** — Note exact requirements
2. **Use exact values until final answer**
3. **3 significant figures** unless specified otherwise
4. **Time management** — Don't get stuck on one question
5. **Look for connections** — Questions often build on each other

---

*Notes prepared for A-Level Mathematics examination preparation. Aligns with CAIE (Cambridge), Edexcel, and AQA syllabi.*
