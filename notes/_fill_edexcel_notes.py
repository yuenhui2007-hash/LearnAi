#!/usr/bin/env python3
"""
Replace 'coming-soon' placeholders in Edexcel Maths note files with real content.
Scope: 40 files (edexcel-maths-em*.html + matching *-summary.html files)
"""
import os, re, json, textwrap

DIR = "/home/node/.openclaw/workspace/LearnAi/notes"

# Map file stem prefix -> (title, level_code, spec_name, level_display)
# e.g. em1-gcse -> ("Algebra & Functions", "1MA1", "GCSE", "GCSE")
# e.g. em5-ial  -> ("Vectors & Mechanics", "WMA13/14", "IAL", "IAL")

META = {
    "em1": {
        "title": "Algebra & Functions",
        "topics": {
            "gcse": {
                "spec": "1MA1", "level": "GCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Algebraic Notation & Simplifying</h3>
<ul>
<li>Use letters to represent numbers; simplify by collecting like terms.</li>
<li>Multiply terms: 3a × 4b = 12ab. Divide: 12ab ÷ 3a = 4b.</li>
<li>Expand single brackets: a(b + c) = ab + ac.</li>
</ul>
<h3>2. Expanding & Factorising</h3>
<ul>
<li>Expand double brackets: (x + a)(x + b) = x² + (a+b)x + ab.</li>
<li>Difference of two squares: (x + a)(x − a) = x² − a².</li>
<li>Factorise by taking out the highest common factor (HCF).</li>
</ul>
<div class="formula-box">
(x + a)(x + b) = x² + (a+b)x + ab
</div>
<h3>3. Solving Linear Equations</h3>
<ul>
<li>Do the same operation to both sides to isolate the variable.</li>
<li>Equations with unknowns on both sides: bring all x terms to one side.</li>
</ul>
<h3>4. Functions (GCSE Higher)</h3>
<ul>
<li>Function notation: f(x) = 2x + 1 means the rule “multiply by 2, then add 1”.</li>
<li>Composite functions: fg(x) = f(g(x)). Work from the inside out.</li>
<li>Inverse functions: f⁻¹(x) reverses the rule; swap x and y, then solve for y.</li>
</ul>
<div class="formula-box">
If f(x) = 2x + 3, then f⁻¹(x) = (x − 3)/2
</div>
<h3>5. Rearranging Formulae</h3>
<ul>
<li>Treat the subject as you would solve an equation.</li>
<li>When the subject appears twice, factorise it out.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Collect like terms to simplify expressions.</li>
<li>Expand brackets carefully, watching signs.</li>
<li>Factorise by HCF first, then look for pairs/quadratics.</li>
<li>Solve linear equations by reversing operations.</li>
<li>For inverse functions, swap x and y, then rearrange.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Always show each step when expanding brackets — method marks are common.</li>
<li>Check factorisation by expanding your answer.</li>
<li>When rearranging formulae, do one operation at a time to avoid errors.</li>
<li>Substitute a value back into the original equation to verify your answer.</li>
</ul>
</div>
"""
            },
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Indices & Surds</h3>
<ul>
<li>Laws of indices: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.</li>
<li>Rationalising denominators: multiply top and bottom by the conjugate surd.</li>
</ul>
<div class="formula-box">
aᵐ × aⁿ = aᵐ⁺ⁿ &nbsp;&nbsp; a⁰ = 1 &nbsp;&nbsp; a⁻ⁿ = 1/aⁿ &nbsp;&nbsp; a^(1/n) = ⁿ√a
</div>
<h3>2. Polynomials & Factor Theorem</h3>
<ul>
<li>Factor Theorem: if f(a) = 0, then (x − a) is a factor of f(x).</li>
<li>Remainder Theorem: f(a) is the remainder when f(x) is divided by (x − a).</li>
<li>Use polynomial long division or inspection to factorise cubics.</li>
</ul>
<h3>3. Rational Expressions</h3>
<ul>
<li>Simplify algebraic fractions by factorising numerator and denominator, then cancel.</li>
<li>Add/subtract by finding the lowest common denominator.</li>
</ul>
<h3>4. Functions</h3>
<ul>
<li>Domain: set of allowed inputs. Range: set of possible outputs.</li>
<li>Composite functions: fg(x) = f(g(x)).</li>
<li>Inverse function f⁻¹ exists only if f is one-one; graph reflection in y = x.</li>
</ul>
<div class="formula-box">
To find f⁻¹(x): write y = f(x), swap x and y, solve for y.
</div>
<h3>5. Modulus & Transformations</h3>
<ul>
<li>|x| = x if x ≥ 0, and |x| = −x if x < 0.</li>
<li>Graph transformations: y = f(x) + a (vertical shift), y = f(x + a) (horizontal shift), y = af(x) (vertical stretch), y = f(ax) (horizontal stretch).</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Indices rules: add when multiplying, subtract when dividing, multiply when raising a power to a power.</li>
<li>Factor theorem finds factors; remainder theorem finds remainders quickly.</li>
<li>Simplify fractions by factorising first, then cancelling.</li>
<li>Domain/range define a function; one-one functions have inverses.</li>
<li>Modulus makes values non-negative; reflect negative portions above the axis.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>When factorising cubics, try factors of the constant term first (±1, ±2, …).</li>
<li>Sketch the graph of a transformed function by applying transformations step-by-step to key points.</li>
<li>For modulus equations, consider both positive and negative cases separately.</li>
<li>Show clear algebraic working — marks are awarded for method even if the final answer is incorrect.</li>
</ul>
</div>
"""
            },
            "igcse": {
                "spec": "4MA1", "level": "IGCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Algebraic Manipulation</h3>
<ul>
<li>Simplify expressions by collecting like terms and using index laws.</li>
<li>Expand single and double brackets; take care with negative signs.</li>
</ul>
<h3>2. Factorising</h3>
<ul>
<li>Take out the highest common factor (HCF).</li>
<li>Factorise quadratics of the form x² + bx + c by finding two numbers with product c and sum b.</li>
<li>Difference of two squares: x² − a² = (x + a)(x − a).</li>
</ul>
<div class="formula-box">
x² + bx + c = (x + p)(x + q) where pq = c and p + q = b
</div>
<h3>3. Solving Equations</h3>
<ul>
<li>Linear equations: isolate the unknown on one side.</li>
<li>Quadratic equations: factorise, or use the quadratic formula if needed.</li>
</ul>
<h3>4. Functions (IGCSE Extended)</h3>
<ul>
<li>Function notation f(x) describes a rule applied to x.</li>
<li>Find inputs and outputs by substitution.</li>
</ul>
<h3>5. Algebraic Fractions</h3>
<ul>
<li>Simplify by factorising and cancelling common factors.</li>
<li>Multiply: multiply numerators and denominators, then cancel.</li>
<li>Divide: invert the second fraction and multiply.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Expand brackets carefully, watching every sign.</li>
<li>Factorise by HCF first, then look for pairs or difference of squares.</li>
<li>Solve linear equations by reversing operations step by step.</li>
<li>For quadratics, try factorising before using the formula.</li>
<li>Simplify algebraic fractions by factorising and cancelling.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Write out each step clearly — method marks are available.</li>
<li>Always check your factorisation by expanding mentally.</li>
<li>When solving equations with fractions, multiply every term by the denominator first.</li>
<li>Re-read the question to ensure you have answered exactly what was asked.</li>
</ul>
</div>
"""
            }
        }
    },
    "em2": {
        "title": "Coordinate Geometry",
        "topics": {
            "gcse": {
                "spec": "1MA1", "level": "GCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Coordinates & Plotting</h3>
<ul>
<li>A point is written as (x, y); x is horizontal, y is vertical.</li>
<li>Plot points on a grid and join to form shapes or lines.</li>
</ul>
<h3>2. Midpoint & Distance</h3>
<ul>
<li>Midpoint of (x₁, y₁) and (x₂, y₂) is ((x₁+x₂)/2, (y₁+y₂)/2).</li>
<li>Distance can be found using Pythagoras’ theorem.</li>
</ul>
<div class="formula-box">
Distance = √[(x₂−x₁)² + (y₂−y₁)²]
</div>
<h3>3. Gradient of a Line</h3>
<ul>
<li>Gradient (m) = change in y / change in x = (y₂−y₁)/(x₂−x₁).</li>
<li>Positive gradient: uphill left-to-right. Negative: downhill. Zero: horizontal. Undefined: vertical.</li>
</ul>
<h3>4. Equation of a Line</h3>
<ul>
<li>y = mx + c: m is gradient, c is y-intercept.</li>
<li>Find the equation given a point and gradient, or two points.</li>
<li>Parallel lines have equal gradients. Perpendicular gradients multiply to −1.</li>
</ul>
<div class="formula-box">
y − y₁ = m(x − x₁) &nbsp;&nbsp; m₁ × m₂ = −1 (perpendicular)
</div>
<h3>5. Graphs of Functions</h3>
<ul>
<li>Linear: straight line. Quadratic: parabola. Cubic: S-shaped.</li>
<li>Reciprocal: y = a/x, hyperbola with asymptotes on the axes.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Midpoint = average of x-coordinates, average of y-coordinates.</li>
<li>Gradient = rise ÷ run. Watch the sign!</li>
<li>y = mx + c is the standard line equation.</li>
<li>Parallel lines: same m. Perpendicular lines: m₁ × m₂ = −1.</li>
<li>Sketch common graphs: linear, quadratic, cubic, reciprocal.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Label axes and scales clearly when drawing graphs.</li>
<li>Always write the full equation of a line, not just m and c.</li>
<li>Check perpendicularity by multiplying gradients — it must equal exactly −1.</li>
<li>Use a ruler for straight-line graphs; freehand curves should be smooth.</li>
</ul>
</div>
"""
            },
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Straight Lines</h3>
<ul>
<li>Gradient m = (y₂−y₁)/(x₂−x₁).</li>
<li>Equations: y − y₁ = m(x − x₁) or ax + by + c = 0.</li>
<li>Parallel: m₁ = m₂. Perpendicular: m₁ × m₂ = −1.</li>
</ul>
<div class="formula-box">
y − y₁ = m(x − x₁) &nbsp;&nbsp; m₁m₂ = −1
</div>
<h3>2. Distance & Midpoint</h3>
<ul>
<li>Distance between (x₁, y₁) and (x₂, y₂) = √[(x₂−x₁)² + (y₂−y₁)²].</li>
<li>Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2).</li>
</ul>
<h3>3. Circle Geometry</h3>
<ul>
<li>Equation of circle centre (a, b), radius r: (x − a)² + (y − b)² = r².</li>
<li>Tangent at a point is perpendicular to the radius at that point.</li>
<li>Chords, secants, and intersections with lines can be solved by substitution.</li>
</ul>
<div class="formula-box">
(x − a)² + (y − b)² = r²
</div>
<h3>4. Parametric Equations</h3>
<ul>
<li>x and y are expressed in terms of a parameter t.</li>
<li>Eliminate t to find the Cartesian equation.</li>
</ul>
<h3>5. Modulus Graphs & Loci</h3>
<ul>
<li>Sketch |f(x)| by reflecting negative parts of y = f(x) above the x-axis.</li>
<li>Locus problems use geometric definitions (e.g. set of points equidistant from a point = circle).</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Use point–gradient form for quick line equations.</li>
<li>Circle: centre (a,b), radius r; tangent is perpendicular to radius.</li>
<li>Parametric: eliminate t to get Cartesian form.</li>
<li>Modulus graphs reflect negatives above the axis.</li>
<li>Perpendicular gradients multiply to −1; parallel gradients are equal.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>When finding where a line meets a circle, substitute the line equation into the circle equation and solve the resulting quadratic.</li>
<li>For tangents, use m_tangent = −1/m_radius at the point of contact.</li>
<li>Sketch modulus graphs by first drawing y = f(x), then reflecting any part below the x-axis.</li>
<li>State the equation of a line in the form requested (e.g. ax + by + c = 0).</li>
</ul>
</div>
"""
            },
            "igcse": {
                "spec": "4MA1", "level": "IGCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Plotting & Coordinates</h3>
<ul>
<li>Points written as (x, y). Plot accurately on a grid.</li>
</ul>
<h3>2. Gradient & Equation of a Line</h3>
<ul>
<li>Gradient m = change in y / change in x.</li>
<li>y = mx + c where c is the y-intercept.</li>
<li>Find the equation from two points or one point and the gradient.</li>
</ul>
<div class="formula-box">
m = (y₂ − y₁)/(x₂ − x₁) &nbsp;&nbsp; y = mx + c
</div>
<h3>3. Parallel & Perpendicular Lines</h3>
<ul>
<li>Parallel: same gradient.</li>
<li>Perpendicular: product of gradients = −1.</li>
</ul>
<h3>4. Distance & Midpoint</h3>
<ul>
<li>Midpoint = average of the coordinates.</li>
<li>Distance using Pythagoras.</li>
</ul>
<h3>5. Sketching Graphs</h3>
<ul>
<li>Linear: straight line. Quadratic: U-shaped (or ∩-shaped if negative).</li>
<li>Know the shapes of cubic and reciprocal graphs.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Gradient = rise ÷ run.</li>
<li>y = mx + c: identify m and c quickly from any form.</li>
<li>Parallel = same m. Perpendicular = m₁ × m₂ = −1.</li>
<li>Midpoint = average coordinates.</li>
<li>Sketch with correct shape, intercepts, and turning points.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Read scales carefully before plotting.</li>
<li>Show clear working when calculating gradients.</li>
<li>Always give the equation in the form requested.</li>
<li>Check perpendicularity by multiplying gradients.</li>
</ul>
</div>
"""
            }
        }
    },
    "em3": {
        "title": "Trigonometry",
        "topics": {
            "gcse": {
                "spec": "1MA1", "level": "GCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. SOH CAH TOA</h3>
<ul>
<li>Right-angled triangles: sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj.</li>
<li>Use to find missing sides or angles.</li>
</ul>
<div class="formula-box">
sin θ = O/H &nbsp;&nbsp; cos θ = A/H &nbsp;&nbsp; tan θ = O/A
</div>
<h3>2. Sine & Cosine Rules (Higher)</h3>
<ul>
<li>Sine rule: a/sin A = b/sin B = c/sin C.</li>
<li>Cosine rule: a² = b² + c² − 2bc cos A.</li>
<li>Area of any triangle: ½ab sin C.</li>
</ul>
<div class="formula-box">
a/sin A = b/sin B = c/sin C &nbsp;&nbsp; a² = b² + c² − 2bc cos A &nbsp;&nbsp; Area = ½ab sin C
</div>
<h3>3. Exact Trig Values</h3>
<ul>
<li>sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3.</li>
<li>sin 45° = cos 45° = 1/√2, tan 45° = 1.</li>
<li>sin 60° = √3/2, cos 60° = ½, tan 60° = √3.</li>
</ul>
<h3>4. Trigonometric Graphs</h3>
<ul>
<li>y = sin x and y = cos x oscillate between −1 and 1, period 360°.</li>
<li>y = tan x has period 180° and asymptotes at 90°, 270°, …</li>
</ul>
<h3>5. Solving Trig Equations (Higher)</h3>
<ul>
<li>Use inverse trig functions and the CAST diagram or symmetry of graphs.</li>
<li>Find all solutions in the given interval (0° to 360°).</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>SOH CAH TOA for right-angled triangles.</li>
<li>Sine rule for missing sides/angles when you have a matching pair.</li>
<li>Cosine rule when you have two sides and the included angle (SAS) or all three sides (SSS).</li>
<li>Area = ½ab sin C.</li>
<li>Know exact values for 30°, 45°, 60°.</li>
<li>Use symmetry/CAST for solving equations in 0°–360°.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Label the sides of triangles clearly before choosing a rule.</li>
<li>Check your calculator is in degree mode.</li>
<li>For trig equations, sketch the graph to find all solutions in the interval.</li>
<li>Give angles to 1 decimal place unless told otherwise.</li>
</ul>
</div>
"""
            },
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Radian Measure</h3>
<ul>
<li>π radians = 180°. Arc length s = rθ. Sector area A = ½r²θ.</li>
</ul>
<div class="formula-box">
s = rθ &nbsp;&nbsp; A = ½r²θ (θ in radians)
</div>
<h3>2. Unit Circle & CAST</h3>
<ul>
<li>All trig functions are defined from the unit circle.</li>
<li>CAST diagram determines sign in each quadrant.</li>
</ul>
<h3>3. Trigonometric Identities</h3>
<ul>
<li>tan θ = sin θ / cos θ.</li>
<li>sin² θ + cos² θ = 1.</li>
<li>1 + tan² θ = sec² θ. 1 + cot² θ = cosec² θ.</li>
</ul>
<div class="formula-box">
sin² θ + cos² θ = 1 &nbsp;&nbsp; 1 + tan² θ = sec² θ
</div>
<h3>4. Solving Trig Equations</h3>
<ul>
<li>Use identities to rewrite equations in a single trig function.</li>
<li>Find the principal value, then use periodicity/symmetry for all solutions in the interval.</li>
</ul>
<h3>5. Compound & Double-Angle Formulae</h3>
<ul>
<li>sin(A ± B) = sin A cos B ± cos A sin B.</li>
<li>cos(A ± B) = cos A cos B ∓ sin A sin B.</li>
<li>sin 2A = 2 sin A cos A. cos 2A = cos² A − sin² A = 2cos² A − 1 = 1 − 2sin² A.</li>
</ul>
<div class="formula-box">
sin(A+B) = sin A cos B + cos A sin B<br>
cos(A+B) = cos A cos B − sin A sin B
</div>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Radians: arc s = rθ, sector A = ½r²θ.</li>
<li>Core identities: tan = sin/cos, sin² + cos² = 1.</li>
<li>Use compound and double-angle formulae to simplify and solve.</li>
<li>Solve by reducing to a single trig function, then find all solutions using period 2π (or 360°).</li>
<li>Sketch graphs to check the number of solutions in an interval.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>When proving identities, start with the more complicated side and aim for the simpler side.</li>
<li>Always check whether the question wants answers in degrees or radians.</li>
<li>Factorise trig equations where possible — treat sin θ or cos θ as a variable.</li>
<li>Write exact values using surds and π where appropriate rather than decimals.</li>
</ul>
</div>
"""
            },
            "igcse": {
                "spec": "4MA1", "level": "IGCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Right-Angled Trigonometry</h3>
<ul>
<li>sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.</li>
</ul>
<div class="formula-box">
sin θ = O/H &nbsp;&nbsp; cos θ = A/H &nbsp;&nbsp; tan θ = O/A
</div>
<h3>2. Sine & Cosine Rules</h3>
<ul>
<li>Sine rule for any triangle: a/sin A = b/sin B = c/sin C.</li>
<li>Cosine rule: a² = b² + c² − 2bc cos A.</li>
<li>Area = ½ab sin C.</li>
</ul>
<h3>3. Bearings</h3>
<ul>
<li>Measured clockwise from North.</li>
<li>Always draw a clear North line and label angles.</li>
</ul>
<h3>4. 3D Trigonometry</h3>
<ul>
<li>Identify right-angled triangles within 3D shapes.</li>
<li>Use Pythagoras in two stages if necessary.</li>
</ul>
<h3>5. Trig Graphs</h3>
<ul>
<li>sin x, cos x between −1 and 1, period 360°.</li>
<li>tan x period 180°, asymptotes at 90° + 180°n.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>SOH CAH TOA for right-angled triangles.</li>
<li>Sine rule: use when you have a side and opposite angle pair.</li>
<li>Cosine rule: use for SAS or SSS cases.</li>
<li>Area = ½ab sin C.</li>
<li>Bearings: clockwise from North.</li>
<li>3D problems: find right-angled triangles step by step.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Draw a large, clear diagram — it helps identify the correct rule.</li>
<li>Check your calculator is in degrees.</li>
<li>For bearings questions, always show the North line.</li>
<li>Give final answers to the required degree of accuracy.</li>
</ul>
</div>
"""
            }
        }
    },
    "em4": {
        "title": "Calculus",
        "topics": {
            "gcse": {
                "spec": "1MA1", "level": "GCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Gradient of a Curve</h3>
<ul>
<li>The gradient at a point on a curve is the gradient of the tangent at that point.</li>
<li>Draw a tangent carefully and find its gradient using rise/run.</li>
</ul>
<h3>2. Differentiation (Higher)</h3>
<ul>
<li>If y = xⁿ, then dy/dx = nxⁿ⁻¹.</li>
<li>Differentiate term by term. The derivative gives the rate of change (gradient function).</li>
</ul>
<div class="formula-box">
y = xⁿ  →  dy/dx = nxⁿ⁻¹
</div>
<h3>3. Using Differentiation</h3>
<ul>
<li>Find the gradient at a specific x value by substituting into dy/dx.</li>
<li>Find stationary points by setting dy/dx = 0 and solving.</li>
</ul>
<h3>4. Integration (Higher)</h3>
<ul>
<li>If dy/dx = xⁿ, then y = xⁿ⁺¹/(n+1) + c (for n ≠ −1).</li>
<li>Integration is the reverse of differentiation. The +c represents the constant of integration.</li>
</ul>
<div class="formula-box">
∫ xⁿ dx = xⁿ⁺¹/(n+1) + c
</div>
<h3>5. Area Under a Curve</h3>
<ul>
<li>The definite integral between two x-values gives the area under the curve.</li>
<li>Evaluate the integral at the upper limit minus the lower limit.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Differentiate by bringing the power down and reducing it by 1.</li>
<li>Integrate by increasing the power by 1 and dividing by the new power.</li>
<li>Stationary points: set derivative = 0, solve, then find y.</li>
<li>Definite integral gives area under curve; ignore +c for definite integrals.</li>
<li>Tangent gradient = gradient of curve at that point.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Always include +c for indefinite integrals — it is worth a mark.</li>
<li>Show each term clearly when differentiating or integrating polynomials.</li>
<li>For area questions, sketch the curve and shade the region to identify limits.</li>
<li>Check stationary points by sketching or testing values either side.</li>
</ul>
</div>
"""
            },
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Differentiation from First Principles</h3>
<ul>
<li>f'(x) = limₕ→₀ [f(x+h) − f(x)] / h.</li>
<li>Power rule: d/dx(xⁿ) = nxⁿ⁻¹.</li>
</ul>
<div class="formula-box">
d/dx(xⁿ) = nxⁿ⁻¹ &nbsp;&nbsp; d/dx(eˣ) = eˣ &nbsp;&nbsp; d/dx(ln x) = 1/x
</div>
<h3>2. Chain, Product & Quotient Rules</h3>
<ul>
<li>Chain: dy/dx = dy/du × du/dx.</li>
<li>Product: d/dx(uv) = u dv/dx + v du/dx.</li>
<li>Quotient: d/dx(u/v) = (v du/dx − u dv/dx) / v².</li>
</ul>
<div class="formula-box">
Chain: dy/dx = dy/du · du/dx<br>
Product: (uv)' = u'v + uv'<br>
Quotient: (u/v)' = (u'v − uv')/v²
</div>
<h3>3. Stationary Points & Curve Sketching</h3>
<ul>
<li>Stationary points: dy/dx = 0.</li>
<li>Second derivative test: d²y/dx² > 0 → minimum; < 0 → maximum; = 0 → point of inflection (check).</li>
</ul>
<h3>4. Integration Techniques</h3>
<ul>
<li>Reverse of differentiation: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ −1).</li>
<li>Definite integrals: evaluate at limits and subtract.</li>
<li>Integration by substitution and by parts (A2/IAL).</li>
</ul>
<div class="formula-box">
∫ xⁿ dx = xⁿ⁺¹/(n+1) + c &nbsp;&nbsp; ∫ eˣ dx = eˣ + c &nbsp;&nbsp; ∫ 1/x dx = ln|x| + c
</div>
<h3>5. Applications</h3>
<ul>
<li>Area under curve = ∫ y dx.</li>
<li>Volume of revolution = π ∫ y² dx.</li>
<li>Connected rates of change: relate derivatives using the chain rule.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Power rule for differentiation and integration.</li>
<li>Chain, product, quotient rules for complex functions.</li>
<li>Stationary points: dy/dx = 0; classify with d²y/dx².</li>
<li>Definite integral = area under curve (take modulus if below axis for total area).</li>
<li>Volume of revolution: π∫y² dx.</li>
<li>Connected rates: chain rule links variables.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Never forget +c for indefinite integrals.</li>
<li>When finding area below the x-axis, the definite integral gives a negative value — take the modulus for total area.</li>
<li>For volume of revolution, ensure you square the entire y function before integrating.</li>
<li>Show substitution clearly in definite integrals — limits can stay in terms of the original variable if you convert them.</li>
</ul>
</div>
"""
            },
            "igcse": {
                "spec": "4MA1", "level": "IGCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Gradients of Curves</h3>
<ul>
<li>The gradient of a curve at a point equals the gradient of the tangent at that point.</li>
<li>Estimate by drawing a tangent and calculating rise/run.</li>
</ul>
<h3>2. Differentiation</h3>
<ul>
<li>If y = axⁿ, then dy/dx = anxⁿ⁻¹.</li>
<li>Differentiate term by term.</li>
</ul>
<div class="formula-box">
y = axⁿ  →  dy/dx = anxⁿ⁻¹
</div>
<h3>3. Using the Derivative</h3>
<ul>
<li>Substitute an x-value into dy/dx to find the gradient at that point.</li>
<li>Equation of tangent: use point and gradient in y − y₁ = m(x − x₁).</li>
</ul>
<h3>4. Stationary Points</h3>
<ul>
<li>Set dy/dx = 0 and solve for x.</li>
<li>Find the corresponding y-value.</li>
<li>Determine nature by testing gradients either side or using the second derivative.</li>
</ul>
<h3>5. Integration</h3>
<ul>
<li>Reverse of differentiation: increase power by 1 and divide by new power.</li>
<li>Add +c for indefinite integrals.</li>
<li>Definite integral between limits gives area under the curve.</li>
</ul>
<div class="formula-box">
∫ axⁿ dx = axⁿ⁺¹/(n+1) + c
</div>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Bring the power down and reduce by 1 to differentiate.</li>
<li>Increase the power by 1 and divide by the new power to integrate.</li>
<li>Stationary points where dy/dx = 0.</li>
<li>Tangent equation uses point + gradient.</li>
<li>Definite integral = area under curve between two x-values.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Show every term when differentiating or integrating.</li>
<li>Do not forget +c for indefinite integrals.</li>
<li>Sketch the curve to identify regions when finding areas.</li>
<li>For stationary points, always state both coordinates and their nature.</li>
</ul>
</div>
"""
            }
        }
    },
    "em5": {
        "title": "Vectors & Mechanics",
        "topics": {
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Vectors in Component Form</h3>
<ul>
<li>A vector has magnitude and direction, written as ai + bj or as a column vector (a, b).</li>
<li>Magnitude |v| = √(a² + b²). Direction given by angle θ = tan⁻¹(b/a).</li>
</ul>
<div class="formula-box">
|v| = √(a² + b²) &nbsp;&nbsp; θ = tan⁻¹(b/a)
</div>
<h3>2. Vector Operations</h3>
<ul>
<li>Add/subtract component-wise.</li>
<li>Scalar multiplication: k(a, b) = (ka, kb).</li>
<li>Position vector of point A is OA→.</li>
</ul>
<h3>3. Equation of a Line in Vector Form</h3>
<ul>
<li>r = a + λb, where a is a point on the line, b is the direction vector, λ is a scalar.</li>
</ul>
<div class="formula-box">
r = a + λb
</div>
<h3>4. Kinematics — Constant Acceleration</h3>
<ul>
<li>The SUVAT equations link displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t).</li>
</ul>
<div class="formula-box">
v = u + at<br>
s = ut + ½at²<br>
s = ½(u+v)t<br>
v² = u² + 2as<br>
s = vt − ½at²
</div>
<h3>5. Forces & Newton’s Laws</h3>
<ul>
<li>First law: balanced forces → constant velocity (or rest).</li>
<li>Second law: F = ma. Net force causes acceleration.</li>
<li>Third law: every action has an equal and opposite reaction.</li>
</ul>
<h3>6. Projectiles</h3>
<ul>
<li>Resolve initial velocity into horizontal (u cos θ) and vertical (u sin θ) components.</li>
<li>Horizontal motion: constant velocity (a = 0).</li>
<li>Vertical motion: constant acceleration due to gravity (g ≈ 9.8 m/s² downwards).</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Vectors: magnitude = √(a²+b²), direction from tan⁻¹(b/a).</li>
<li>Line equation: r = a + λb.</li>
<li>SUVAT: choose the equation that omits the unknown you don’t have.</li>
<li>F = ma. Draw force diagrams and resolve parallel/perpendicular to motion.</li>
<li>Projectiles: horizontal constant velocity, vertical constant acceleration g.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Always draw a force diagram — it organises your thinking.</li>
<li>Label directions clearly (especially for vectors and forces).</li>
<li>Choose the SUVAT equation that does not contain the quantity you are not given and do not need.</li>
<li>For projectile problems, keep horizontal and vertical motions separate.</li>
<li>Check units: metres, seconds, m/s, m/s², newtons.</li>
</ul>
</div>
"""
            }
        }
    },
    "em6": {
        "title": "Statistics & Probability",
        "topics": {
            "gcse": {
                "spec": "1MA1", "level": "GCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Data Types & Sampling</h3>
<ul>
<li>Qualitative (descriptive) vs quantitative (numerical).</li>
<li>Discrete (countable) vs continuous (measurable).</li>
<li>Sampling methods: random, stratified, systematic, quota.</li>
</ul>
<h3>2. Averages & Spread</h3>
<ul>
<li>Mean = sum of values ÷ number of values.</li>
<li>Median: middle value when ordered. Mode: most frequent.</li>
<li>Range = max − min. Interquartile range (IQR) = Q3 − Q1.</li>
</ul>
<div class="formula-box">
Mean = Σx / n &nbsp;&nbsp; IQR = Q3 − Q1
</div>
<h3>3. Probability</h3>
<ul>
<li>P(event) = number of favourable outcomes / total possible outcomes.</li>
<li>Probabilities sum to 1. P(not A) = 1 − P(A).</li>
</ul>
<h3>4. Combined Events</h3>
<ul>
<li>Mutually exclusive: P(A or B) = P(A) + P(B).</li>
<li>Independent: P(A and B) = P(A) × P(B).</li>
<li>Tree diagrams help visualise multi-stage probabilities.</li>
</ul>
<div class="formula-box">
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)<br>
P(A ∩ B) = P(A) × P(B) if independent
</div>
<h3>5. Statistical Diagrams</h3>
<ul>
<li>Bar charts, pie charts, histograms, cumulative frequency graphs, box plots.</li>
<li>Histograms: area of bar represents frequency.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Mean uses all data; median is robust to outliers; mode is best for categories.</li>
<li>Range and IQR measure spread — IQR ignores extreme values.</li>
<li>Probability of combined events: “or” means add (if exclusive), “and” means multiply (if independent).</li>
<li>Tree diagrams and two-way tables help organise outcomes.</li>
<li>Histogram area = frequency; use frequency density = frequency ÷ class width.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Always check that probabilities sum to 1 in a complete distribution.</li>
<li>When asked for the median from a cumulative frequency graph, read at the 50% point.</li>
<li>Label all axes and give units where appropriate.</li>
<li>Show working for probability questions — method marks are common.</li>
</ul>
</div>
"""
            },
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Representing Data</h3>
<ul>
<li>Stem-and-leaf, box plots, histograms, cumulative frequency.</li>
<li>Outliers: values beyond Q1 − 1.5×IQR or Q3 + 1.5×IQR.</li>
</ul>
<h3>2. Probability Distributions</h3>
<ul>
<li>Discrete random variable X with probability function P(X = x).</li>
<li>Expectation E(X) = Σ x P(X = x). Variance Var(X) = E(X²) − [E(X)]².</li>
</ul>
<div class="formula-box">
E(X) = Σ x P(X = x) &nbsp;&nbsp; Var(X) = E(X²) − [E(X)]²
</div>
<h3>3. Binomial Distribution</h3>
<ul>
<li>X ~ B(n, p): n independent trials, success probability p.</li>
<li>P(X = r) = ⁿCᵣ pʳ (1−p)ⁿ⁻ʳ.</li>
<li>E(X) = np, Var(X) = np(1−p).</li>
</ul>
<div class="formula-box">
P(X = r) = C(n,r) pʳ (1−p)ⁿ⁻ʳ &nbsp;&nbsp; E(X) = np &nbsp;&nbsp; Var(X) = np(1−p)
</div>
<h3>4. Normal Distribution</h3>
<ul>
<li>X ~ N(μ, σ²): symmetric bell curve.</li>
<li>Standardise: Z = (X − μ)/σ.</li>
<li>Use standard normal tables or calculator to find probabilities.</li>
</ul>
<div class="formula-box">
Z = (X − μ) / σ
</div>
<h3>5. Hypothesis Testing</h3>
<ul>
<li>Null hypothesis H₀, alternative H₁.</li>
<li>Test statistic, critical value or p-value approach.</li>
<li>Compare p-value to significance level α, or test statistic to critical region.</li>
</ul>
<h3>6. Correlation & Regression</h3>
<ul>
<li>Pearson’s r measures linear correlation (−1 ≤ r ≤ 1).</li>
<li>Regression line y = a + bx; least squares method.</li>
<li>Interpolation is reliable; extrapolation is not.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>E(X) = ΣxP(x); Var(X) = E(X²) − μ².</li>
<li>Binomial: n trials, p success, P(X=r) = ⁿCᵣ pʳ(1−p)ⁿ⁻ʳ.</li>
<li>Normal: standardise with Z = (X−μ)/σ.</li>
<li>Hypothesis testing: state H₀/H₁, calculate test stat, compare, conclude in context.</li>
<li>Regression: y on x for prediction of y from x.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Always define your random variable clearly (e.g. “Let X be the number of …”).</li>
<li>For normal distribution, draw a sketch and shade the region you need.</li>
<li>In hypothesis tests, write the conclusion in context — do not just say “reject H₀”.</li>
<li>Check whether the question asks for the regression line of y on x or x on y.</li>
</ul>
</div>
"""
            },
            "igcse": {
                "spec": "4MA1", "level": "IGCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Collecting & Organising Data</h3>
<ul>
<li>Primary vs secondary data.</li>
<li>Tally charts, frequency tables, grouped data.</li>
</ul>
<h3>2. Averages & Measures of Spread</h3>
<ul>
<li>Mean, median, mode; range and interquartile range.</li>
<li>Estimate mean from grouped data using midpoints.</li>
</ul>
<div class="formula-box">
Estimated mean = Σ(fx) / Σf &nbsp;&nbsp; where x is the midpoint of each class
</div>
<h3>3. Probability</h3>
<ul>
<li>Probability scale 0 to 1.</li>
<li>Combined events: AND (multiply) and OR (add for mutually exclusive).</li>
<li>Tree diagrams and sample space diagrams.</li>
</ul>
<h3>4. Statistical Diagrams</h3>
<ul>
<li>Bar charts, pie charts, pictograms, histograms, cumulative frequency curves.</li>
<li>Box plots show median, quartiles, and range.</li>
</ul>
<h3>5. Scatter Graphs</h3>
<ul>
<li>Show correlation: positive, negative, or none.</li>
<li>Line of best fit for estimation.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Mean = total ÷ count; median = middle; mode = most common.</li>
<li>Use midpoints to estimate mean from grouped data.</li>
<li>Probability: AND = multiply, OR = add (if mutually exclusive).</li>
<li>Tree diagrams help with multi-stage probability.</li>
<li>Scatter graphs show correlation; line of best fit predicts values.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>When drawing statistical diagrams, label axes and give a title.</li>
<li>Show method for probability — do not just write the answer.</li>
<li>Use the line of best fit only for values within the data range.</li>
<li>Check that total probability equals 1 in a distribution table.</li>
</ul>
</div>
"""
            }
        }
    },
    "em7": {
        "title": "Sequences & Series",
        "topics": {
            "gcse": {
                "spec": "1MA1", "level": "GCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Number Sequences</h3>
<ul>
<li>A sequence is a list of numbers in a particular order.</li>
<li>Terms are often written u₁, u₂, u₃, … or T₁, T₂, T₃, …</li>
</ul>
<h3>2. Arithmetic Sequences</h3>
<ul>
<li>Each term increases or decreases by a constant difference d.</li>
<li>nth term = a + (n − 1)d, where a is the first term.</li>
</ul>
<div class="formula-box">
nth term = a + (n − 1)d
</div>
<h3>3. Geometric Sequences (Higher)</h3>
<ul>
<li>Each term is multiplied by a constant ratio r.</li>
<li>nth term = arⁿ⁻¹, where a is the first term.</li>
</ul>
<div class="formula-box">
nth term = arⁿ⁻¹
</div>
<h3>4. Finding the nth Term Rule</h3>
<ul>
<li>Look at differences between terms.</li>
<li>Constant first difference → linear (arithmetic) rule.</li>
<li>Constant second difference → quadratic rule of form an² + bn + c.</li>
</ul>
<h3>5. Special Sequences</h3>
<ul>
<li>Square numbers: 1, 4, 9, 16, 25, …</li>
<li>Cube numbers: 1, 8, 27, 64, …</li>
<li>Triangular numbers: 1, 3, 6, 10, 15, …</li>
<li>Fibonacci: each term is the sum of the two previous terms.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Arithmetic: add/subtract a fixed number; nth term = a + (n−1)d.</li>
<li>Geometric: multiply by a fixed ratio; nth term = arⁿ⁻¹.</li>
<li>Linear rule if first differences are constant.</li>
<li>Quadratic rule if second differences are constant.</li>
<li>Recognise special sequences: square, cube, triangular, Fibonacci.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Always check your nth term formula by substituting n = 1, 2, 3.</li>
<li>Read carefully whether the question asks for a specific term or the general rule.</li>
<li>For quadratic sequences, set up simultaneous equations using the first three terms.</li>
<li>When a sequence is defined recursively, write out the first few terms to spot the pattern.</li>
</ul>
</div>
"""
            },
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Sigma Notation</h3>
<ul>
<li>Σ means “sum of”. Write series compactly using limits.</li>
</ul>
<div class="formula-box">
Σₖ₌₁ⁿ aₖ = a₁ + a₂ + … + aₙ
</div>
<h3>2. Arithmetic Series</h3>
<ul>
<li>nth term: uₙ = a + (n − 1)d.</li>
<li>Sum of n terms: Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l), where l is the last term.</li>
</ul>
<div class="formula-box">
Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l)
</div>
<h3>3. Geometric Series</h3>
<ul>
<li>nth term: uₙ = arⁿ⁻¹.</li>
<li>Sum of n terms: Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1.</li>
<li>Infinite sum: S∞ = a/(1 − r) for |r| < 1.</li>
</ul>
<div class="formula-box">
Sₙ = a(1 − rⁿ)/(1 − r) &nbsp;&nbsp; S∞ = a/(1 − r)  (|r| < 1)
</div>
<h3>4. Binomial Expansion</h3>
<ul>
<li>(1 + x)ⁿ = 1 + nx + [n(n−1)/2!] x² + [n(n−1)(n−2)/3!] x³ + …</li>
<li>Valid for |x| < 1 when n is not a positive integer.</li>
</ul>
<div class="formula-box">
(1 + x)ⁿ = 1 + nx + n(n−1)x²/2! + n(n−1)(n−2)x³/3! + …
</div>
<h3>5. Recurrence Relations</h3>
<ul>
<li>A sequence defined by uₙ₊₁ = f(uₙ) with a starting value.</li>
<li>Find terms by repeated substitution. Limit exists if sequence converges.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Arithmetic: uₙ = a + (n−1)d; Sₙ = n/2[2a + (n−1)d].</li>
<li>Geometric: uₙ = arⁿ⁻¹; Sₙ = a(1−rⁿ)/(1−r); S∞ = a/(1−r) if |r|<1.</li>
<li>Binomial expansion: (1+x)ⁿ with descending factorial coefficients.</li>
<li>Recurrence: substitute repeatedly; limit L satisfies L = f(L).</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>For geometric series, always check whether |r| < 1 before using S∞.</li>
<li>Write binomial coefficients as fractions to avoid early rounding errors.</li>
<li>In recurrence questions, show the first few terms clearly to demonstrate the pattern.</li>
<li>When summing an arithmetic series, decide whether to use the first/last term formula or the first/difference formula.</li>
</ul>
</div>
"""
            },
            "igcse": {
                "spec": "4MA1", "level": "IGCSE",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Patterns & Sequences</h3>
<ul>
<li>A sequence is an ordered list of numbers generated by a rule.</li>
<li>Position-to-term rule: gives the nth term directly.</li>
<li>Term-to-term rule: tells you how to get from one term to the next.</li>
</ul>
<h3>2. Arithmetic Sequences</h3>
<ul>
<li>Constant difference between terms.</li>
<li>nth term = first term + (n − 1) × common difference.</li>
</ul>
<div class="formula-box">
nth term = a + (n − 1)d
</div>
<h3>3. Geometric Sequences</h3>
<ul>
<li>Each term is found by multiplying the previous term by a common ratio r.</li>
<li>nth term = a × rⁿ⁻¹.</li>
</ul>
<div class="formula-box">
nth term = arⁿ⁻¹
</div>
<h3>4. Finding the nth Term</h3>
<ul>
<li>Linear sequence: nth term = an + b.</li>
<li>Find a and b using two terms.</li>
</ul>
<h3>5. Using Formulae</h3>
<ul>
<li>Substitute n to find a specific term.</li>
<li>Set the nth term equal to a value and solve to find the position.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Arithmetic: add/subtract d each time; nth term = a + (n−1)d.</li>
<li>Geometric: multiply by r each time; nth term = arⁿ⁻¹.</li>
<li>Find a linear rule using two known terms.</li>
<li>Substitute n to find any term; solve for n to find position.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Check your formula by substituting n = 1 and n = 2.</li>
<li>Read whether the question wants the next term or the nth term formula.</li>
<li>Show your working when solving for n.</li>
<li>Look for patterns in diagrams — they often generate sequences.</li>
</ul>
</div>
"""
            }
        }
    },
    "em8": {
        "title": "Numerical Methods",
        "topics": {
            "ial": {
                "spec": "WMA13/14", "level": "IAL",
                "notes": """
<div class="notes-section">
<h2>Detailed Notes</h2>
<h3>1. Location of Roots</h3>
<ul>
<li>If f(a) and f(b) have opposite signs and f is continuous on [a, b], then there is at least one root between a and b (Intermediate Value Theorem).</li>
</ul>
<div class="formula-box">
If f(a) × f(b) < 0 and f continuous → root in (a, b)
</div>
<h3>2. Iteration</h3>
<ul>
<li>Rearrange f(x) = 0 into x = g(x).</li>
<li>Start with x₀ and compute xₙ₊₁ = g(xₙ).</li>
<li>Converges if |g'(x)| < 1 near the root.</li>
</ul>
<div class="formula-box">
xₙ₊₁ = g(xₙ)
</div>
<h3>3. Newton-Raphson Method</h3>
<ul>
<li>Uses tangent lines to approximate roots iteratively.</li>
<li>Requires the derivative f'(x).</li>
</ul>
<div class="formula-box">
xₙ₊₁ = xₙ − f(xₙ) / f'(xₙ)
</div>
<h3>4. Numerical Integration</h3>
<ul>
<li>Trapezium rule: approximate area under curve using trapezia.</li>
<li>More strips → better accuracy.</li>
</ul>
<div class="formula-box">
∫ₐᵇ y dx ≈ ½h[(y₀ + yₙ) + 2(y₁ + y₂ + … + yₙ₋₁)] where h = (b−a)/n
</div>
<h3>5. Error & Convergence</h3>
<ul>
<li>Understand that numerical methods give approximations.</li>
<li>Check convergence by comparing successive iterates.</li>
<li>Be aware that iteration may diverge if |g'(x)| > 1.</li>
</ul>
</div>
<div class="summary-box">
<h2>Last-Minute Summary</h2>
<ul>
<li>Sign change + continuity → root exists in interval.</li>
<li>Iteration: xₙ₊₁ = g(xₙ); converges if |g'(x)| < 1 near root.</li>
<li>Newton-Raphson: fast convergence but needs derivative and good starting value.</li>
<li>Trapezium rule: area ≈ ½h[(first + last) + 2(sum of middles)].</li>
<li>More intervals (smaller h) reduce error.</li>
</ul>
</div>
<div class="exam-tips">
<h2>Exam Tips</h2>
<ul>
<li>Always state the sign change clearly and quote values of f(a) and f(b).</li>
<li>Show iteration steps to the required number of decimal places; do not round early.</li>
<li>For Newton-Raphson, write down the formula and substitute carefully.</li>
<li>When using the trapezium rule, write out the strip width h and all y-values in a table.</li>
<li>Be careful with calculator brackets when evaluating fractions in iterations.</li>
</ul>
</div>
"""
            }
        }
    }
}

# Summary versions are shorter, same topics/levels
SUMMARY_TEMPLATE = """
<div class="summary-box">
<h2>Last-Minute Revision</h2>
{body}
</div>
<div class="quick-links">
<a href="{full_link}" class="btn-primary">View Full Notes →</a>
<a href="../subject.html?id=edexcel-maths" class="btn-secondary">All Topics</a>
</div>
"""

SUMMARY_BODIES = {
    "em1": {
        "gcse": """
<h3>Algebra & Functions — GCSE (1MA1)</h3>
<ul>
<li>Simplify by collecting like terms; multiply/divide algebraic terms.</li>
<li>Expand single and double brackets; factorise by HCF and into pairs.</li>
<li>Solve linear equations by reversing operations.</li>
<li>Function notation f(x); composite and inverse functions (Higher).</li>
<li>Rearrange formulae; treat the subject like solving an equation.</li>
</ul>
<div class="formula-box">
(x + a)(x + b) = x² + (a+b)x + ab<br>
If f(x) = ax + b, then f⁻¹(x) = (x − b)/a
</div>
""",
        "ial": """
<h3>Algebra & Functions — IAL (WMA13/14)</h3>
<ul>
<li>Indices laws and surd rationalisation.</li>
<li>Factor and Remainder Theorems for polynomials.</li>
<li>Simplify, add, and subtract algebraic fractions.</li>
<li>Functions: domain, range, composite, inverse, modulus transformations.</li>
</ul>
<div class="formula-box">
aᵐ × aⁿ = aᵐ⁺ⁿ &nbsp;&nbsp; sin²θ + cos²θ = 1 (keep trig identities handy)<br>
If f(a)=0 → (x−a) is a factor
</div>
""",
        "igcse": """
<h3>Algebra & Functions — IGCSE (4MA1)</h3>
<ul>
<li>Expand and factorise expressions; difference of two squares.</li>
<li>Solve linear and quadratic equations.</li>
<li>Function notation and substitution.</li>
<li>Simplify algebraic fractions by cancelling common factors.</li>
</ul>
<div class="formula-box">
x² + bx + c = (x + p)(x + q) where pq=c, p+q=b
</div>
"""
    },
    "em2": {
        "gcse": """
<h3>Coordinate Geometry — GCSE (1MA1)</h3>
<ul>
<li>Plot points; midpoint and distance between two points.</li>
<li>Gradient = (y₂−y₁)/(x₂−x₁); interpret sign.</li>
<li>y = mx + c; find equation from point + gradient or two points.</li>
<li>Parallel lines: same m. Perpendicular: m₁ × m₂ = −1.</li>
<li>Sketch linear, quadratic, cubic, and reciprocal graphs.</li>
</ul>
<div class="formula-box">
y − y₁ = m(x − x₁) &nbsp;&nbsp; m₁m₂ = −1
</div>
""",
        "ial": """
<h3>Coordinate Geometry — IAL (WMA13/14)</h3>
<ul>
<li>Point–gradient and general forms of a line.</li>
<li>Circle equation: (x−a)² + (y−b)² = r²; tangent perpendicular to radius.</li>
<li>Parametric equations: eliminate parameter to find Cartesian form.</li>
<li>Modulus graphs and simple loci.</li>
</ul>
<div class="formula-box">
(x−a)² + (y−b)² = r² &nbsp;&nbsp; y − y₁ = m(x − x₁)
</div>
""",
        "igcse": """
<h3>Coordinate Geometry — IGCSE (4MA1)</h3>
<ul>
<li>Gradient, midpoint, and distance.</li>
<li>Equation of a line: y = mx + c.</li>
<li>Parallel and perpendicular gradients.</li>
<li>Sketch linear and quadratic graphs with intercepts and turning points.</li>
</ul>
<div class="formula-box">
m = (y₂ − y₁)/(x₂ − x₁) &nbsp;&nbsp; y = mx + c
</div>
"""
    },
    "em3": {
        "gcse": """
<h3>Trigonometry — GCSE (1MA1)</h3>
<ul>
<li>SOH CAH TOA for right-angled triangles.</li>
<li>Sine and cosine rules; area = ½ab sin C (Higher).</li>
<li>Exact values for 30°, 45°, 60°.</li>
<li>Solve trig equations using inverse functions and symmetry (Higher).</li>
</ul>
<div class="formula-box">
sin θ = O/H &nbsp;&nbsp; cos θ = A/H &nbsp;&nbsp; tan θ = O/A<br>
Area = ½ab sin C
</div>
""",
        "ial": """
<h3>Trigonometry — IAL (WMA13/14)</h3>
<ul>
<li>Radians: arc s = rθ; sector A = ½r²θ.</li>
<li>Identities: tan = sin/cos; sin² + cos² = 1; 1 + tan² = sec².</li>
<li>Compound and double-angle formulae.</li>
<li>Solve equations in a given interval using exact values and symmetry.</li>
</ul>
<div class="formula-box">
sin(A±B) = sin A cos B ± cos A sin B<br>
cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A
</div>
""",
        "igcse": """
<h3>Trigonometry — IGCSE (4MA1)</h3>
<ul>
<li>SOH CAH TOA; sine and cosine rules for any triangle.</li>
<li>Area = ½ab sin C.</li>
<li>Bearings: measured clockwise from North.</li>
<li>3D trigonometry using right-angled triangles.</li>
</ul>
<div class="formula-box">
a/sin A = b/sin B = c/sin C &nbsp;&nbsp; Area = ½ab sin C
</div>
"""
    },
    "em4": {
        "gcse": """
<h3>Calculus — GCSE (1MA1)</h3>
<ul>
<li>Differentiate xⁿ → nxⁿ⁻¹; integrate xⁿ → xⁿ⁺¹/(n+1) + c.</li>
<li>Find gradient at a point; equation of tangent.</li>
<li>Stationary points: set dy/dx = 0.</li>
<li>Definite integral gives area under a curve.</li>
</ul>
<div class="formula-box">
d/dx(xⁿ) = nxⁿ⁻¹ &nbsp;&nbsp; ∫xⁿ dx = xⁿ⁺¹/(n+1) + c
</div>
""",
        "ial": """
<h3>Calculus — IAL (WMA13/14)</h3>
<ul>
<li>Power, chain, product, and quotient rules.</li>
<li>Stationary points; classify with second derivative.</li>
<li>Integrate standard functions; definite and indefinite integrals.</li>
<li>Area under curve; volume of revolution π∫y² dx.</li>
</ul>
<div class="formula-box">
Chain: dy/dx = dy/du · du/dx<br>
Product: (uv)' = u'v + uv'<br>
∫ xⁿ dx = xⁿ⁺¹/(n+1) + c
</div>
""",
        "igcse": """
<h3>Calculus — IGCSE (4MA1)</h3>
<ul>
<li>Differentiate axⁿ → anxⁿ⁻¹ term by term.</li>
<li>Find gradient and equation of tangent at a point.</li>
<li>Stationary points where dy/dx = 0.</li>
<li>Integrate as reverse of differentiation; definite integral = area.</li>
</ul>
<div class="formula-box">
d/dx(axⁿ) = anxⁿ⁻¹ &nbsp;&nbsp; ∫axⁿ dx = axⁿ⁺¹/(n+1) + c
</div>
"""
    },
    "em5": {
        "ial": """
<h3>Vectors & Mechanics — IAL (WMA13/14)</h3>
<ul>
<li>Vectors in component form; magnitude and direction.</li>
<li>Vector line equation: r = a + λb.</li>
<li>SUVAT equations for constant acceleration.</li>
<li>Newton’s laws; resolve forces parallel and perpendicular to motion.</li>
<li>Projectiles: separate horizontal (constant v) and vertical (a = g).</li>
</ul>
<div class="formula-box">
v = u + at &nbsp;&nbsp; s = ut + ½at² &nbsp;&nbsp; v² = u² + 2as<br>
F = ma &nbsp;&nbsp; r = a + λb
</div>
"""
    },
    "em6": {
        "gcse": """
<h3>Statistics & Probability — GCSE (1MA1)</h3>
<ul>
<li>Mean, median, mode; range and IQR.</li>
<li>Probability: favourable / total outcomes.</li>
<li>Mutually exclusive: P(A or B) = P(A)+P(B). Independent: P(A and B) = P(A)×P(B).</li>
<li>Tree diagrams and statistical diagrams (histograms, box plots).</li>
</ul>
<div class="formula-box">
Mean = Σx / n &nbsp;&nbsp; P(A ∩ B) = P(A) × P(B) if independent
</div>
""",
        "ial": """
<h3>Statistics & Probability — IAL (WMA13/14)</h3>
<ul>
<li>Expectation and variance of discrete random variables.</li>
<li>Binomial: P(X=r) = ⁿCᵣ pʳ(1−p)ⁿ⁻ʳ; E(X)=np, Var(X)=np(1−p).</li>
<li>Normal: standardise Z = (X−μ)/σ.</li>
<li>Hypothesis testing and regression/correlation.</li>
</ul>
<div class="formula-box">
E(X) = ΣxP(x) &nbsp;&nbsp; Var(X) = E(X²) − [E(X)]²<br>
Z = (X − μ)/σ
</div>
""",
        "igcse": """
<h3>Statistics & Probability — IGCSE (4MA1)</h3>
<ul>
<li>Mean, median, mode from raw and grouped data.</li>
<li>Probability basics; tree diagrams and sample space diagrams.</li>
<li>Bar charts, pie charts, histograms, cumulative frequency curves.</li>
<li>Scatter graphs and line of best fit.</li>
</ul>
<div class="formula-box">
Estimated mean = Σ(fx) / Σf
</div>
"""
    },
    "em7": {
        "gcse": """
<h3>Sequences & Series — GCSE (1MA1)</h3>
<ul>
<li>Arithmetic: nth term = a + (n−1)d.</li>
<li>Geometric (Higher): nth term = arⁿ⁻¹.</li>
<li>Find nth term from first and second differences.</li>
<li>Recognise square, cube, triangular, and Fibonacci sequences.</li>
</ul>
<div class="formula-box">
nth term (arithmetic) = a + (n − 1)d
</div>
""",
        "ial": """
<h3>Sequences & Series — IAL (WMA13/14)</h3>
<ul>
<li>Arithmetic: uₙ = a + (n−1)d; Sₙ = n/2[2a + (n−1)d].</li>
<li>Geometric: uₙ = arⁿ⁻¹; Sₙ = a(1−rⁿ)/(1−r); S∞ = a/(1−r) if |r|<1.</li>
<li>Binomial expansion for positive integer and fractional n.</li>
<li>Recurrence relations and convergence.</li>
</ul>
<div class="formula-box">
Sₙ = n/2[2a + (n−1)d] &nbsp;&nbsp; S∞ = a/(1−r)  (|r|<1)
</div>
""",
        "igcse": """
<h3>Sequences & Series — IGCSE (4MA1)</h3>
<ul>
<li>Arithmetic: nth term = a + (n−1)d.</li>
<li>Geometric: nth term = arⁿ⁻¹.</li>
<li>Find linear nth term using two known terms.</li>
<li>Substitute n to find a term; solve for n to find position.</li>
</ul>
<div class="formula-box">
nth term = a + (n−1)d &nbsp;&nbsp; nth term = arⁿ⁻¹
</div>
"""
    },
    "em8": {
        "ial": """
<h3>Numerical Methods — IAL (WMA13/14)</h3>
<ul>
<li>Sign change + continuity → root in interval.</li>
<li>Iteration xₙ₊₁ = g(xₙ); converges if |g'(x)| < 1.</li>
<li>Newton-Raphson: xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ).</li>
<li>Trapezium rule for numerical integration.</li>
</ul>
<div class="formula-box">
xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)<br>
∫ₐᵇ y dx ≈ ½h[(y₀+yₙ) + 2(y₁+…+yₙ₋₁)]
</div>
"""
    }
}

def get_level_from_filename(fname):
    # e.g. edexcel-maths-em1-gcse.html -> gcse
    # e.g. edexcel-maths-em1-gcse-summary.html -> gcse
    parts = fname.replace("edexcel-maths-", "").replace(".html", "").split("-")
    # parts like ['em1','gcse'] or ['em1','gcse','summary']
    if parts[-1] == "summary":
        parts.pop()
    # parts now like ['em1','gcse'] or ['em5','ial']
    if len(parts) >= 2:
        return parts[-1]
    return None

def get_em_key_from_filename(fname):
    parts = fname.replace("edexcel-maths-", "").replace(".html", "").split("-")
    if parts[-1] == "summary":
        parts.pop()
    return parts[0] if parts else None

def make_summary_content(em_key, level):
    body = SUMMARY_BODIES.get(em_key, {}).get(level, "")
    # Determine the full notes link
    full_link = f"edexcel-maths-{em_key}-{level}.html"
    return SUMMARY_TEMPLATE.format(body=body, full_link=full_link)

def process_file(fname):
    path = os.path.join(DIR, fname)
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    if "coming-soon" not in html:
        return False  # nothing to replace

    em_key = get_em_key_from_filename(fname)
    level = get_level_from_filename(fname)
    is_summary = "-summary" in fname

    meta = META.get(em_key)
    if not meta:
        print(f"SKIP (unknown em key): {fname}")
        return False

    topic = meta["topics"].get(level)
    if not topic:
        print(f"SKIP (unknown level): {fname}")
        return False

    # Build replacement content
    if is_summary:
        replacement = make_summary_content(em_key, level)
    else:
        replacement = topic["notes"]

    # Replace the coming-soon div block
    # The block starts with <div class="coming-soon"> and ends with </div>
    # It may contain nested tags, so use a non-greedy regex across lines.
    pattern = re.compile(r'<div class="coming-soon">.*?</div>\s*</div>', re.DOTALL)
    # Wait — the coming-soon block is just one div (icon, h2, p, p) then closes.
    # Let's target from <div class="coming-soon"> to its closing </div>.
    pattern = re.compile(r'<div class="coming-soon">.*?</div>', re.DOTALL)
    new_html, count = pattern.subn(replacement.strip(), html, count=1)
    if count == 0:
        # Try a broader fallback: find the coming-soon div and everything until the next </div> at same indent level may be tricky.
        # Just try replacing with a simpler pattern.
        pattern2 = re.compile(r'<div class="coming-soon">.*?</div>\n?</div>?', re.DOTALL)
        new_html, count = pattern2.subn(replacement.strip(), html, count=1)

    if count == 0:
        print(f"FAIL (no match): {fname}")
        return False

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_html)
    return True

if __name__ == "__main__":
    files = sorted([f for f in os.listdir(DIR) if f.startswith("edexcel-maths-em") and f.endswith(".html")])
    updated = 0
    skipped = 0
    for fname in files:
        ok = process_file(fname)
        if ok:
            updated += 1
            print(f"OK: {fname}")
        else:
            skipped += 1
            print(f"SKIP: {fname}")
    print(f"\nDone. Updated: {updated}, Skipped: {skipped}")
