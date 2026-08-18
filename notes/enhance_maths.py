#!/usr/bin/env python3
"""Enhance Cambridge A-Level Mathematics and Additional Mathematics notes."""

import os, re

BASE = "/home/node/.openclaw/workspace/LearnAi/notes"

MATHS_TOPICS = {
    "m1": {
        "title": "Quadratics",
        "level": "A-Level",
        "code": "9709",
        "sections": [
            {
                "num": 1,
                "title": "Solving Quadratic Equations",
                "content": """
<p>A <strong>quadratic equation</strong> is a polynomial equation of the second degree, having the general form <strong>ax² + bx + c = 0</strong> where <em>a ≠ 0</em>. The term 'quadratic' originates from the Latin <em>quadratus</em>, meaning 'square', because the variable is squared. Quadratic equations are fundamental in mathematics because they model many real-world phenomena, including projectile motion, profit maximization, and the shape of satellite dishes.</p>

<h4>Why Three Methods?</h4>
<p>Cambridge A-Level expects proficiency in all three solution methods. The choice depends on the form of the equation:</p>
<ul>
<li><strong>Factorising</strong> is fastest when the quadratic has simple integer roots. Always attempt this first in an exam to save time.</li>
<li><strong>Quadratic Formula</strong> works for every quadratic equation — use it when factorising is not obvious or when coefficients are non-integer.</li>
<li><strong>Completing the Square</strong> is essential for finding the vertex of a parabola and is often required when the question specifically asks for this form. It also leads directly to the quadratic formula.</li>
</ul>

<h4>Method 1: Factorising</h4>
<p>Factorising a quadratic means expressing it as a product of two linear factors: <strong>ax² + bx + c = (px + q)(rx + s)</strong>. For monic quadratics (where a = 1), we seek two numbers that multiply to give <em>c</em> and add to give <em>b</em>. For non-monic quadratics, we may need to consider factor pairs of <em>a</em> and <em>c</em> separately.</p>

<div class="process-box">
<h5>Factorising Strategy</h5>
<ol>
<li>Check for a common factor first — factor it out.</li>
<li>For x² + bx + c: find p and q such that pq = c and p + q = b.</li>
<li>For ax² + bx + c: find factor pairs of a and c, then test combinations.</li>
<li>Always expand your brackets mentally to verify.</li>
</ol>
</div>

<div class="example-box">
<h5>Worked Example — Monic Quadratic</h5>
<p><strong>Solve:</strong> x² + 5x + 6 = 0</p>
<p><strong>Step 1:</strong> We need two numbers that multiply to +6 and add to +5. List factor pairs of 6: (1,6), (2,3), (−1,−6), (−2,−3).</p>
<p><strong>Step 2:</strong> The pair (+2, +3) satisfies both conditions: 2 × 3 = 6 and 2 + 3 = 5.</p>
<p><strong>Step 3:</strong> Write the factors: (x + 2)(x + 3) = 0</p>
<p><strong>Step 4:</strong> Apply the null factor law: x + 2 = 0 or x + 3 = 0</p>
<p><strong>Answer:</strong> x = −2 or x = −3</p>
</div>

<div class="example-box">
<h5>Worked Example — Non-Monic Quadratic</h5>
<p><strong>Solve:</strong> 6x² + 7x − 3 = 0</p>
<p><strong>Step 1:</strong> We need (ax + b)(cx + d) = 6x² + 7x − 3, so ac = 6 and bd = −3.</p>
<p><strong>Step 2:</strong> Try a = 2, c = 3 and b = 3, d = −1: (2x + 3)(3x − 1) = 6x² − 2x + 9x − 3 = 6x² + 7x − 3 ✓</p>
<p><strong>Step 3:</strong> (2x + 3)(3x − 1) = 0 → x = −3/2 or x = 1/3</p>
</div>

<h4>Method 2: Quadratic Formula</h4>
<p>The quadratic formula can be derived by completing the square on the general quadratic ax² + bx + c = 0:</p>
<div class="formula-box">x = <span class="fraction"><span class="top">−b ± √(b² − 4ac)</span><span class="bottom">2a</span></span></div>
<p><strong>Derivation:</strong> Starting with ax² + bx + c = 0, divide by a: x² + (b/a)x + c/a = 0. Complete the square: (x + b/2a)² = b²/4a² − c/a = (b² − 4ac)/4a². Taking square roots and rearranging gives the formula above.</p>

<div class="example-box">
<h5>Worked Example — Using the Formula</h5>
<p><strong>Solve:</strong> 2x² − 7x + 3 = 0</p>
<p>Identify coefficients: <strong>a = 2, b = −7, c = 3</strong></p>
<p>Substitute into the formula:</p>
<p>x = <span class="fraction"><span class="top">−(−7) ± √((−7)² − 4(2)(3))</span><span class="bottom">2(2)</span></span></p>
<p>x = <span class="fraction"><span class="top">7 ± √(49 − 24)</span><span class="bottom">4</span></span> = <span class="fraction"><span class="top">7 ± √25</span><span class="bottom">4</span></span> = <span class="fraction"><span class="top">7 ± 5</span><span class="bottom">4</span></span></p>
<p>Therefore: x = 12/4 = <strong>3</strong> or x = 2/4 = <strong>½</strong></p>
</div>

<h4>Method 3: Completing the Square</h4>
<p>This method rewrites a quadratic in the form <strong>a(x + h)² + k</strong>, revealing the vertex directly. It is particularly useful for graph sketching and proving the quadratic formula.</p>

<div class="example-box">
<h5>Worked Example — Completing the Square</h5>
<p><strong>Express in completed square form:</strong> x² + 6x + 5</p>
<p><strong>Step 1:</strong> Take half the x-coefficient: 6 ÷ 2 = 3</p>
<p><strong>Step 2:</strong> Write (x + 3)² = x² + 6x + 9</p>
<p><strong>Step 3:</strong> Compare: x² + 6x + 5 = (x² + 6x + 9) − 9 + 5 = <strong>(x + 3)² − 4</strong></p>
<p>The vertex is at (−3, −4), and the line of symmetry is x = −3.</p>
</div>

<div class="example-box">
<h5>Worked Example — Coefficient of x² ≠ 1</h5>
<p><strong>Express in completed square form:</strong> 2x² − 8x + 7</p>
<p><strong>Step 1:</strong> Factor out the 2 from the x terms: 2(x² − 4x) + 7</p>
<p><strong>Step 2:</strong> Complete the square inside the bracket: x² − 4x = (x − 2)² − 4</p>
<p><strong>Step 3:</strong> Substitute back: 2[(x − 2)² − 4] + 7 = 2(x − 2)² − 8 + 7 = <strong>2(x − 2)² − 1</strong></p>
</div>

<div class="key-point">
<strong>Key Point:</strong> When the coefficient of x² is not 1, always factor it out <em>before</em> completing the square. Be careful to multiply the subtracted constant by the factor you pulled out.
</div>
"""
            },
            {
                "num": 2,
                "title": "The Discriminant",
                "content": """
<p>The <strong>discriminant</strong>, denoted by the Greek letter delta (Δ), is the expression <strong>b² − 4ac</strong> found under the square root in the quadratic formula. It provides crucial information about the nature of the roots without requiring us to solve the equation fully.</p>

<h4>Understanding the Discriminant</h4>
<p>Since the quadratic formula contains ±√(b² − 4ac), the value inside the square root determines whether we get real or complex solutions:</p>
<table class="data-table">
<tr><th>Value of Δ</th><th>Nature of Roots</th><th>Graph Behaviour</th></tr>
<tr><td>Δ > 0</td><td>Two distinct real roots</td><td>Parabola crosses x-axis at two points</td></tr>
<tr><td>Δ = 0</td><td>One repeated real root</td><td>Parabola touches x-axis at vertex (tangent)</td></tr>
<tr><td>Δ < 0</td><td>No real roots (complex conjugate pair)</td><td>Parabola does not intersect x-axis</td></tr>
<tr><td>Δ = perfect square</td><td>Rational roots (if coefficients rational)</td><td>—</td></tr>
</table>

<div class="example-box">
<h5>Worked Example — Nature of Roots</h5>
<p><strong>For the equation 3x² + 2x + 5 = 0, find the discriminant and state the nature of the roots.</strong></p>
<p>a = 3, b = 2, c = 5</p>
<p>Δ = (2)² − 4(3)(5) = 4 − 60 = <strong>−56</strong></p>
<p>Since Δ < 0, the equation has <strong>no real roots</strong> (the roots are complex: x = (−2 ± i√56)/6).</p>
</div>

<div class="example-box">
<h5>Worked Example — Finding Unknown Coefficients</h5>
<p><strong>Find the values of k for which x² + kx + 4 = 0 has equal roots.</strong></p>
<p>For equal roots, Δ = 0.</p>
<p>Δ = k² − 4(1)(4) = k² − 16 = 0</p>
<p>k² = 16 → <strong>k = ±4</strong></p>
</div>

<div class="example-box">
<h5>Worked Example — Range of Values</h5>
<p><strong>Find the range of values of p for which 2x² + 3x + p = 0 has two distinct real roots.</strong></p>
<p>For two distinct real roots: Δ > 0</p>
<p>Δ = 3² − 4(2)(p) = 9 − 8p > 0</p>
<p>9 > 8p → p < 9/8</p>
<p><strong>Answer:</strong> p < 9/8 (or p < 1.125)</p>
</div>

<div class="key-point">
<strong>Key Point:</strong> When a question asks for the "nature of roots", state clearly whether there are two distinct real roots, one repeated real root, or no real roots. Always show the calculation of Δ.
</div>
"""
            },
            {
                "num": 3,
                "title": "Quadratic Graphs",
                "content": """
<p>The graph of <strong>y = ax² + bx + c</strong> is called a <strong>parabola</strong>. Parabolas appear throughout nature and engineering — from the path of a thrown ball to the reflector in a car headlight. Understanding their properties is essential for sketching and interpreting quadratic functions.</p>

<h4>Key Features of a Parabola</h4>
<table class="data-table">
<tr><th>Feature</th><th>How to Find</th><th>Significance</th></tr>
<tr><td>Shape (concavity)</td><td>a > 0: ∪ (minimum); a < 0: ∩ (maximum)</td><td>Determines direction of opening</td></tr>
<tr><td>Vertex (turning point)</td><td>x = −b/2a, then substitute to find y</td><td>Highest or lowest point on the graph</td></tr>
<tr><td>Axis of symmetry</td><td>x = −b/2a</td><td>Vertical line through the vertex</td></tr>
<tr><td>y-intercept</td><td>Set x = 0 → y = c</td><td>Where graph crosses the y-axis</td></tr>
<tr><td>x-intercepts (roots)</td><td>Solve ax² + bx + c = 0</td><td>Where graph crosses the x-axis</td></tr>
</table>

<h4>Transformations of Quadratic Graphs</h4>
<p>The graph of y = x² can be transformed in several ways:</p>
<ul>
<li><strong>y = (x − h)²</strong>: Horizontal translation h units right (if h > 0) or left (if h < 0)</li>
<li><strong>y = x² + k</strong>: Vertical translation k units up (if k > 0) or down (if k < 0)</li>
<li><strong>y = ax²</strong>: Vertical stretch by factor a (if |a| > 1, narrower; if 0 < |a| < 1, wider)</li>
<li><strong>y = −x²</strong>: Reflection in the x-axis</li>
<li><strong>y = a(x − h)² + k</strong>: Vertex form — vertex at (h, k)</li>
</ul>

<div class="example-box">
<h5>Worked Example — Sketching a Parabola</h5>
<p><strong>Sketch:</strong> y = x² − 4x + 3, labelling all key features.</p>
<p><strong>Shape:</strong> a = 1 > 0, so ∪-shaped with a minimum point.</p>
<p><strong>Vertex:</strong> x = −(−4)/(2×1) = 2. When x = 2: y = 4 − 8 + 3 = −1. Vertex: <strong>(2, −1)</strong></p>
<p><strong>Axis of symmetry:</strong> x = 2</p>
<p><strong>Roots:</strong> x² − 4x + 3 = (x−1)(x−3) = 0 → x = 1 or x = 3. Roots: <strong>(1, 0)</strong> and <strong>(3, 0)</strong></p>
<p><strong>y-intercept:</strong> Set x = 0: y = 3 → <strong>(0, 3)</strong></p>
<p><strong>Additional point:</strong> By symmetry, when x = 4, y = 3 → (4, 3)</p>
</div>

<div class="example-box">
<h5>Worked Example — Using Discriminant to Determine Shape</h5>
<p><strong>Sketch:</strong> y = x² + 2x + 3</p>
<p><strong>Shape:</strong> a = 1 > 0, ∪-shaped.</p>
<p><strong>Discriminant:</strong> Δ = 4 − 12 = −8 < 0. No real roots — graph does not cross x-axis.</p>
<p><strong>Vertex:</strong> x = −2/2 = −1. y = 1 − 2 + 3 = 2. Vertex: <strong>(−1, 2)</strong></p>
<p><strong>y-intercept:</strong> (0, 3)</p>
<p>Since the vertex is above the x-axis and a > 0, the entire parabola lies above the x-axis.</p>
</div>

<div class="key-point">
<strong>Key Point:</strong> When sketching, always draw a clearly shaped parabola (∪ or ∩), label the vertex, roots (if any), and y-intercept. Cambridge examiners expect a rough but accurate sketch showing correct positioning.
</div>
"""
            },
            {
                "num": 4,
                "title": "Quadratic Inequalities",
                "content": """
<p><strong>Quadratic inequalities</strong> involve quadratic expressions combined with inequality signs (&lt;, &gt;, ≤, ≥). Solving them requires finding the critical values (roots) and testing intervals, or using a sketch to determine the solution set.</p>

<h4>General Strategy</h4>
<ol>
<li>Rearrange the inequality so that one side is zero and the x² coefficient is positive.</li>
<li>Find the roots of the corresponding equation by factorising, formula, or completing the square.</li>
<li>Sketch the parabola, marking the roots on the x-axis.</li>
<li>Determine where the parabola is above (for > 0) or below (for < 0) the x-axis.</li>
<li>Write the solution set, using interval notation or inequalities.</li>
</ol>

<div class="example-box">
<h5>Worked Example — Simple Inequality</h5>
<p><strong>Solve:</strong> x² − 5x + 6 > 0</p>
<p><strong>Step 1:</strong> The x² coefficient is already positive (1).</p>
<p><strong>Step 2:</strong> Find roots: x² − 5x + 6 = (x−2)(x−3) = 0 → x = 2 or x = 3</p>
<p><strong>Step 3:</strong> Sketch a ∪-shaped parabola crossing the x-axis at x = 2 and x = 3.</p>
<p><strong>Step 4:</strong> We want where y > 0 (above the x-axis). This occurs outside the roots.</p>
<p><strong>Answer:</strong> x < 2 or x > 3</p>
</div>

<div class="example-box">
<h5>Worked Example — Inequality with ≤</h5>
<p><strong>Solve:</strong> 2x² + x − 6 ≤ 0</p>
<p><strong>Step 1:</strong> Find roots: 2x² + x − 6 = 0</p>
<p>Using the formula: x = <span class="fraction"><span class="top">−1 ± √(1 + 48)</span><span class="bottom">4</span></span> = <span class="fraction"><span class="top">−1 ± 7</span><span class="bottom">4</span></span></p>
<p>x = 6/4 = 3/2 or x = −8/4 = −2</p>
<p><strong>Step 2:</strong> Sketch ∪-shaped parabola crossing at x = −2 and x = 3/2.</p>
<p><strong>Step 3:</strong> We want where y ≤ 0 (on or below the x-axis). This is between the roots.</p>
<p><strong>Answer:</strong> −2 ≤ x ≤ 3/2</p>
</div>

<div class="example-box">
<h5>Worked Example — Rearrangement Required</h5>
<p><strong>Solve:</strong> x² < 9</p>
<p><strong>Method:</strong> Rewrite as x² − 9 < 0 → (x−3)(x+3) < 0</p>
<p>Roots: x = −3 and x = 3. ∪-shaped parabola.</p>
<p>We want where y < 0 (below x-axis): between the roots.</p>
<p><strong>Answer:</strong> −3 < x < 3</p>
<p><strong>Common Error:</strong> Taking square roots directly: x < ±3 is meaningless. Always rearrange to standard form.</p>
</div>

<div class="key-point">
<strong>Important:</strong> If you multiply or divide an inequality by a negative number, you <em>must</em> reverse the inequality sign. It is always safer to rearrange so the x² coefficient is positive rather than manipulating negative coefficients.
</div>

<div class="exam-tips">
<h2>💡 Exam Tips for Quadratics</h2>
<ul>
<li>Always state the quadratic formula before substituting values — you may earn a method mark even if your arithmetic is wrong.</li>
<li>Check if factorising is possible first — it saves time and reduces calculation errors.</li>
<li>For sketching, always label the vertex, roots, and y-intercept. Use symmetry to find additional points.</li>
<li>If Δ < 0, state "no real roots" rather than "no solutions" — the roots exist in the complex number system.</li>
<li>When solving inequalities, a sketch is your best friend. Never rely on mental algebra alone for interval determination.</li>
<li>For "show that" questions, write each step clearly. Cambridge examiners cannot award marks for steps they cannot see.</li>
</ul>
</div>

<div class="example-box">
<h5>Exam-Style Question with Mark Scheme</h5>
<p><strong>Question:</strong> (a) Express 2x² − 12x + 13 in the form a(x + b)² + c. [3]<br>
(b) Hence write down the coordinates of the minimum point. [1]<br>
(c) Find the set of values of x for which 2x² − 12x + 13 ≤ 5. [3]</p>
<p><strong>Mark Scheme:</strong></p>
<p>(a) 2(x² − 6x) + 13 (M1) — factor out 2<br>
2[(x − 3)² − 9] + 13 (M1) — complete the square correctly<br>
2(x − 3)² − 5 (A1) — correct final form</p>
<p>(b) Minimum point at <strong>(3, −5)</strong> (B1)</p>
<p>(c) 2x² − 12x + 13 ≤ 5 → 2x² − 12x + 8 ≤ 0 → x² − 6x + 4 ≤ 0 (M1)<br>
Using formula: x = <span class="fraction"><span class="top">6 ± √(36 − 16)</span><span class="bottom">2</span></span> = <span class="fraction"><span class="top">6 ± √20</span><span class="bottom">2</span></span> = 3 ± √5 (M1)<br>
Answer: <strong>3 − √5 ≤ x ≤ 3 + √5</strong> (A1)</p>
</div>
"""
            }
        ]
    },
    "m2": {
        "title": "Functions",
        "level": "A-Level",
        "code": "9709",
        "sections": [
            {
                "num": 1,
                "title": "Function Notation & Definitions",
                "content": """
<p>A <strong>function</strong> is a rule that assigns to each element in a set (called the <strong>domain</strong>) exactly one element in another set (called the <strong>range</strong> or <strong>codomain</strong>). Functions are the building blocks of calculus and mathematical modelling.</p>

<h4>Domain and Range</h4>
<table class="data-table">
<tr><th>Term</th><th>Definition</th><th>Example</th></tr>
<tr><td>Domain</td><td>The set of all possible input values (x-values)</td><td>For f(x) = √x, domain is x ≥ 0</td></tr>
<tr><td>Range</td><td>The set of all possible output values (y-values)</td><td>For f(x) = x², range is f(x) ≥ 0</td></tr>
<tr><td>Natural Domain</td><td>Largest set of real numbers for which the function is defined</td><td>For f(x) = 1/(x−2), natural domain is x ≠ 2</td></tr>
</table>

<div class="example-box">
<h5>Worked Example — Finding Domain and Range</h5>
<p><strong>For f(x) = √(x − 3), find the domain and range.</strong></p>
<p><strong>Domain:</strong> The expression under the square root must be non-negative: x − 3 ≥ 0 → <strong>x ≥ 3</strong></p>
<p><strong>Range:</strong> A square root always gives a non-negative result, so <strong>f(x) ≥ 0</strong></p>
</div>

<div class="example-box">
<h5>Worked Example — Rational Function Domain</h5>
<p><strong>For f(x) = <span class="fraction"><span class="top">2x + 1</span><span class="bottom">x − 4</span></span>, find the domain.</strong></p>
<p>The denominator cannot be zero: x − 4 ≠ 0 → x ≠ 4</p>
<p><strong>Domain:</strong> All real numbers except 4, written as x ∈ ℝ, x ≠ 4</p>
</div>
"""
            },
            {
                "num": 2,
                "title": "Composite Functions",
                "content": """
<p>A <strong>composite function</strong> applies one function after another. If f and g are functions, the composite function fg is defined by <strong>fg(x) = f(g(x))</strong>. The function g is applied first, then f is applied to the result.</p>

<div class="key-point">
<strong>Order Matters:</strong> fg(x) means "g first, then f". This is read right-to-left. In general, fg(x) ≠ gf(x).
</div>

<div class="example-box">
<h5>Worked Example — Composite Function</h5>
<p><strong>Given f(x) = 2x + 1 and g(x) = x², find:</strong></p>
<p>(a) fg(x) = f(g(x)) = f(x²) = 2(x²) + 1 = <strong>2x² + 1</strong></p>
<p>(b) gf(x) = g(f(x)) = g(2x + 1) = <strong>(2x + 1)² = 4x² + 4x + 1</strong></p>
<p>Notice that fg(x) ≠ gf(x), demonstrating that composition is not commutative.</p>
</div>

<div class="example-box">
<h5>Worked Example — Domain of Composite Function</h5>
<p><strong>Given f(x) = √x (x ≥ 0) and g(x) = x − 4 (x ∈ ℝ), find fg(x) and its domain.</strong></p>
<p>fg(x) = f(g(x)) = f(x − 4) = √(x − 4)</p>
<p>For fg to be defined, we need g(x) to be in the domain of f.</p>
<p>Domain of f: x ≥ 0. So we need g(x) ≥ 0: x − 4 ≥ 0 → <strong>x ≥ 4</strong></p>
</div>
"""
            },
            {
                "num": 3,
                "title": "Inverse Functions",
                "content": """
<p>The <strong>inverse function</strong> f⁻¹ reverses the effect of f. If f(a) = b, then f⁻¹(b) = a. A function has an inverse if and only if it is <strong>one-to-one</strong> (each output comes from exactly one input).</p>

<h4>Finding the Inverse</h4>
<ol>
<li>Write y = f(x)</li>
<li>Rearrange to make x the subject</li>
<li>Swap x and y to get y = f⁻¹(x)</li>
<li>State the domain of f⁻¹ (which equals the range of f)</li>
</ol>

<div class="example-box">
<h5>Worked Example — Finding an Inverse</h5>
<p><strong>Find the inverse of f(x) = 3x − 2, x ∈ ℝ.</strong></p>
<p><strong>Step 1:</strong> y = 3x − 2</p>
<p><strong>Step 2:</strong> y + 2 = 3x → x = (y + 2)/3</p>
<p><strong>Step 3:</strong> f⁻¹(x) = <span class="fraction"><span class="top">x + 2</span><span class="bottom">3</span></span></p>
<p><strong>Domain of f⁻¹:</strong> Range of f is all real numbers, so domain of f⁻¹ is x ∈ ℝ.</p>
</div>

<div class="example-box">
<h5>Worked Example — Restricted Domain</h5>
<p><strong>Find the inverse of f(x) = x² + 1 for x ≥ 0.</strong></p>
<p>The function is one-to-one when restricted to x ≥ 0.</p>
<p>y = x² + 1 → x² = y − 1 → x = √(y − 1) [taking positive root since x ≥ 0]</p>
<p>f⁻¹(x) = √(x − 1)</p>
<p><strong>Domain of f⁻¹:</strong> Range of f is f(x) ≥ 1, so domain of f⁻¹ is <strong>x ≥ 1</strong>.</p>
</div>

<h4>Graphical Relationship</h4>
<p>The graph of y = f⁻¹(x) is the <strong>reflection</strong> of y = f(x) in the line <strong>y = x</strong>. This means if (a, b) lies on y = f(x), then (b, a) lies on y = f⁻¹(x).</p>

<div class="exam-tips">
<h2>💡 Exam Tips for Functions</h2>
<ul>
<li>Always state the domain when defining a function or its inverse — marks are often lost here.</li>
<li>For composite functions, remember the order: fg means g first, then f (right to left).</li>
<li>When finding inverses, verify by checking that f(f⁻¹(x)) = x.</li>
<li>A function must be one-to-one to have an inverse. If it is not, restrict the domain.</li>
<li>The range of f becomes the domain of f⁻¹, and vice versa.</li>
</ul>
</div>
"""
            }
        ]
    }
}

ADDITIONAL_TOPICS = {
    "am1": {
        "title": "Set Language & Notation",
        "level": "IGCSE",
        "code": "0606",
        "sections": [
            {
                "num": 1,
                "title": "Set Notation & Definitions",
                "content": """
<p>A <strong>set</strong> is a well-defined collection of distinct objects, called <strong>elements</strong> or <strong>members</strong>. Set theory, developed by Georg Cantor in the 1870s, provides the foundation for modern mathematics.</p>

<h4>Key Notation</h4>
<table class="data-table">
<tr><th>Symbol</th><th>Meaning</th><th>Example</th></tr>
<tr><td>∈</td><td>Is an element of</td><td>3 ∈ {1, 2, 3, 4}</td></tr>
<tr><td>∉</td><td>Is not an element of</td><td>5 ∉ {1, 2, 3, 4}</td></tr>
<tr><td>⊂</td><td>Is a subset of</td><td>{1, 2} ⊂ {1, 2, 3}</td></tr>
<tr><td>⊆</td><td>Is a subset of (possibly equal)</td><td>A ⊆ A</td></tr>
<tr><td>∪</td><td>Union (elements in A or B or both)</td><td>{1,2} ∪ {2,3} = {1,2,3}</td></tr>
<tr><td>∩</td><td>Intersection (elements in both A and B)</td><td>{1,2} ∩ {2,3} = {2}</td></tr>
<tr><td>A′</td><td>Complement of A (not in A)</td><td>If ξ = {1,2,3} and A = {1}, then A′ = {2,3}</td></tr>
<tr><td>∅</td><td>The empty set</td><td>{} = ∅</td></tr>
<tr><td>n(A)</td><td>Number of elements in A</td><td>n({1,2,3}) = 3</td></tr>
</table>

<h4>Special Sets</h4>
<ul>
<li><strong>Universal set (ξ or U):</strong> The set containing all objects under consideration.</li>
<li><strong>Empty set (∅):</strong> The set containing no elements. Note: {∅} is not the empty set — it is a set containing one element (the empty set).</li>
<li><strong>Natural numbers (ℕ):</strong> {1, 2, 3, ...}</li>
<li><strong>Integers (ℤ):</strong> {..., −2, −1, 0, 1, 2, ...}</li>
<li><strong>Rational numbers (ℚ):</strong> Numbers expressible as p/q where p, q ∈ ℤ, q ≠ 0</li>
<li><strong>Real numbers (ℝ):</strong> All numbers on the number line</li>
</ul>

<div class="example-box">
<h5>Worked Example — Set Operations</h5>
<p><strong>Given:</strong> ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10}, B = {1, 2, 3, 4, 5}</p>
<p>(a) A ∪ B = {1, 2, 3, 4, 5, 6, 8, 10}</p>
<p>(b) A ∩ B = {2, 4}</p>
<p>(c) A′ = {1, 3, 5, 7, 9}</p>
<p>(d) n(A ∩ B) = 2</p>
</div>

<h4>Venn Diagrams</h4>
<p>Venn diagrams provide a visual representation of sets and their relationships. They are invaluable for solving problems involving multiple sets.</p>

<div class="example-box">
<h5>Worked Example — Venn Diagram Problem</h5>
<p><strong>In a class of 30 students, 18 study Mathematics, 15 study Physics, and 7 study both. How many study neither?</strong></p>
<p>Let M = Mathematics, P = Physics.</p>
<p>n(M ∪ P) = n(M) + n(P) − n(M ∩ P) = 18 + 15 − 7 = 26</p>
<p>Neither = 30 − 26 = <strong>4 students</strong></p>
</div>

<div class="formula-box">
<strong>Inclusion-Exclusion Principle:</strong> n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
</div>

<div class="exam-tips">
<h2>💡 Exam Tips for Sets</h2>
<ul>
<li>Always draw a Venn diagram for problems involving two or three sets — it makes the logic much clearer.</li>
<li>Remember the inclusion-exclusion principle: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).</li>
<li>The complement of the union equals the intersection of complements: (A ∪ B)′ = A′ ∩ B′ (De Morgan's Law).</li>
<li>For three sets: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(B∩C) − n(A∩C) + n(A∩B∩C).</li>
</ul>
</div>
"""
            }
        ]
    }
}


def build_html(topic_id, data, is_summary=False):
    """Build enhanced HTML for a topic or summary."""
    title = data["title"]
    level = data["level"]
    code = data["code"]
    
    if is_summary:
        return build_summary_html(topic_id, data)
    
    sections_html = ""
    toc_items = ""
    for sec in data["sections"]:
        sections_html += f'''<div class="topic-block" id="section-{sec['num']}">
<div class="topic-header">
<span class="topic-number">{sec['num']}</span>
<h3>{sec['title']}</h3>
</div>
<div class="topic-content">
{sec['content']}
</div>
</div>\n'''
        toc_items += f'<li><a href="#section-{sec["num"]}">{sec["title"]}</a></li>\n'
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — {level} | LearnAI</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=5">
<style>
.notes-page {{ padding: 120px 0 60px; background: #f8fafc; min-height: 100vh; }}
.notes-container {{ max-width: 900px; margin: 0 auto; background: white; padding: 48px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }}
.notes-header {{ margin-bottom: 40px; padding-bottom: 24px; border-bottom: 3px solid #e2e8f0; }}
.notes-header h1 {{ font-size: 2.2rem; margin-bottom: 8px; color: #1e293b; }}
.syllabus-tag {{ display: inline-block; background: #dbeafe; color: #1e40af; padding: 4px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 16px; }}
.toc {{ background: #f1f5f9; padding: 24px 28px; border-radius: 12px; margin-bottom: 40px; border-left: 4px solid #3b82f6; }}
.toc h2 {{ font-size: 1.1rem; color: #1e40af; margin-bottom: 12px; }}
.toc ol {{ margin: 0; padding-left: 20px; }}
.toc li {{ margin-bottom: 6px; color: #475569; }}
.toc a {{ color: #3b82f6; text-decoration: none; }}
.toc a:hover {{ text-decoration: underline; }}
.topic-block {{ margin-bottom: 48px; padding-bottom: 32px; border-bottom: 2px solid #e2e8f0; }}
.topic-block:last-child {{ border-bottom: none; }}
.topic-header {{ display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }}
.topic-number {{ display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #3b82f6; color: white; font-weight: 700; font-size: 1.1rem; border-radius: 10px; flex-shrink: 0; }}
.topic-header h3 {{ font-size: 1.4rem; color: #1e293b; margin: 0; }}
.topic-content {{ padding-left: 56px; }}
.topic-content h4 {{ font-size: 1.1rem; color: #334155; margin: 24px 0 12px; padding-bottom: 6px; border-bottom: 1px solid #cbd5e1; }}
.topic-content h5 {{ font-size: 0.95rem; color: #475569; margin: 16px 0 8px; font-weight: 600; }}
.topic-content p {{ line-height: 1.8; color: #475569; margin-bottom: 12px; }}
.topic-content ul {{ margin: 12px 0; padding-left: 24px; }}
.topic-content ul li {{ margin-bottom: 8px; color: #475569; line-height: 1.7; }}
.topic-content ol {{ margin: 12px 0; padding-left: 24px; }}
.topic-content ol li {{ margin-bottom: 8px; color: #475569; line-height: 1.7; }}
.formula-box {{ background: #eff6ff; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #3b82f6; font-family: 'Courier New', monospace; margin: 20px 0; font-size: 1rem; line-height: 1.6; color: #1e40af; }}
.example-box {{ background: #f0fdf4; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #22c55e; margin: 20px 0; }}
.example-box h5 {{ color: #15803d; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }}
.example-box p {{ margin-bottom: 8px; color: #166534; }}
.key-point {{ background: #fef9c3; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #eab308; margin: 20px 0; color: #854d0e; font-weight: 500; }}
.data-table {{ width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.95rem; }}
.data-table th {{ background: #f1f5f9; padding: 12px 16px; text-align: left; font-weight: 600; color: #334155; border: 1px solid #e2e8f0; }}
.data-table td {{ padding: 12px 16px; color: #475569; border: 1px solid #e2e8f0; }}
.data-table tr:nth-child(even) {{ background: #f8fafc; }}
.summary-box {{ background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 28px; border-radius: 12px; margin: 40px 0; }}
.summary-box h2 {{ color: #92400e; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #f59e0b; }}
.summary-box ul {{ margin: 0; padding-left: 20px; }}
.summary-box li {{ color: #78350f; margin-bottom: 8px; line-height: 1.6; }}
.exam-tips {{ background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 28px; border-radius: 12px; margin: 40px 0; }}
.exam-tips h2 {{ color: #1e40af; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #3b82f6; }}
.exam-tips ul {{ margin: 0; padding-left: 20px; }}
.exam-tips li {{ color: #1e3a8a; margin-bottom: 8px; line-height: 1.6; }}
.process-box {{ background: #f3f4f6; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #6b7280; margin: 20px 0; }}
.process-box h5 {{ color: #374151; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }}
.process-box ol {{ margin: 12px 0; padding-left: 24px; }}
.process-box ol li {{ margin-bottom: 8px; color: #4b5563; line-height: 1.7; }}
.diagram-box {{ background: #faf5ff; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #a855f7; margin: 20px 0; }}
.diagram-box h5 {{ color: #7e22ce; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }}
.fraction {{ display: inline-block; text-align: center; vertical-align: middle; margin: 0 4px; }}
.fraction .top {{ display: block; border-bottom: 1px solid; padding: 0 4px; }}
.fraction .bottom {{ display: block; padding: 0 4px; }}
@media (max-width: 768px) {{
  .notes-container {{ padding: 24px; }}
  .topic-content {{ padding-left: 0; }}
  .topic-header {{ flex-direction: column; align-items: flex-start; }}
}}
</style>
</head>
<body>
<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>

<section class="notes-page"><div class="container">
<div class="notes-container">
<a href="../subject.html?id=maths&level=alevel" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:12px;background:#f3f4f6;color:#1f2937;font-weight:500;text-decoration:none;margin-bottom:24px;transition:all 0.2s;">← Back to Maths</a>
<div class="notes-header">
<span class="syllabus-tag">{level}</span>
<h1>{title}</h1>
<p style="color:#64748b;margin-top:8px;">{code} · Comprehensive study notes with worked examples, exam questions, and examiner tips</p>
</div>

<div class="toc">
<h2>📑 Contents</h2>
<ol>
{toc_items}
</ol>
</div>

{sections_html}

<div class="summary-box">
<h2>📝 Quick Summary</h2>
<ul>
<li>This topic is part of Cambridge {level} Mathematics ({code}).</li>
<li>Practise all worked examples and exam-style questions for mastery.</li>
<li>Review the examiner tips before attempting past paper questions.</li>
</ul>
</div>

</div>
</div></section>

<script src="../js/theme.js?v=5"></script>
</body>
</html>'''
    return html


def build_summary_html(topic_id, data):
    """Build enhanced summary HTML."""
    title = data["title"]
    level = data["level"]
    code = data["code"]
    
    summary_points = []
    exam_tips_content = []
    
    for sec in data["sections"]:
        # Extract key points from content for summary
        summary_points.append(f"<li><strong>{sec['title']}:</strong> Core concepts and formulas covered.</li>")
        exam_tips_content.append(f"<li>Understand {sec['title'].lower()} thoroughly — exam questions often combine this with other topics.</li>")
    
    summary_html = "\n".join(summary_points)
    tips_html = "\n".join(exam_tips_content)
    
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — Last-Minute Revision | LearnAI</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=5">
<style>
.notes-page {{ padding: 120px 0 60px; background: #f8fafc; min-height: 100vh; }}
.notes-container {{ max-width: 900px; margin: 0 auto; background: white; padding: 48px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }}
.notes-header {{ margin-bottom: 40px; padding-bottom: 24px; border-bottom: 3px solid #e2e8f0; }}
.notes-header h1 {{ font-size: 2rem; margin-bottom: 8px; color: #1e293b; }}
.level-badges {{ display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }}
.level-badge {{ padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }}
.badge-igcse {{ background: #dbeafe; color: #1e40af; }}
.badge-as {{ background: #dcfce7; color: #166534; }}
.badge-a2 {{ background: #fef3c7; color: #92400e; }}
.summary-box {{ background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 28px; border-radius: 12px; margin: 32px 0; }}
.summary-box h2 {{ color: #92400e; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #f59e0b; }}
.summary-box ul {{ margin: 0; padding-left: 20px; }}
.summary-box li {{ color: #78350f; margin-bottom: 8px; line-height: 1.6; }}
.exam-tips {{ background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 28px; border-radius: 12px; margin: 32px 0; }}
.exam-tips h2 {{ color: #1e40af; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #3b82f6; }}
.exam-tips ul {{ margin: 0; padding-left: 20px; }}
.exam-tips li {{ color: #1e3a8a; margin-bottom: 8px; line-height: 1.6; }}
.formula-box {{ background: #eff6ff; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #3b82f6; font-family: 'Courier New', monospace; margin: 16px 0; font-size: 0.95rem; color: #1e40af; }}
.back-btn {{ display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px; color: #3b82f6; font-weight: 600; text-decoration: none; }}
.back-btn:hover {{ text-decoration: underline; }}
.quick-links {{ display: flex; gap: 16px; margin-top: 32px; padding-top: 24px; border-top: 2px solid #e2e8f0; }}
.quick-links a {{ padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; }}
.btn-primary {{ background: #3b82f6; color: white; }}
.btn-secondary {{ background: #f1f5f9; color: #3b82f6; }}
@media (max-width: 768px) {{ .notes-container {{ padding: 24px; }} }}
</style>
</head>
<body>
<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>

<section class="notes-page">
<div class="container">
<a href="javascript:history.back()" class="back-btn">← Back</a>
<div class="notes-container">
<div class="notes-header">
<div class="level-badges"><span class="level-badge badge-as">AS Level</span></div>
<h1>{title}</h1>
<p style="color:#64748b">{code} · Last-Minute Revision</p>
</div>

<div class="summary-box">
<h2>📝 Quick Revision Summary</h2>
<ul>
{summary_html}
<li>Always show working clearly — method marks are awarded for correct steps even if the final answer is wrong.</li>
<li>Check your answers by substitution where possible.</li>
<li>Manage your time: don't spend too long on any single question.</li>
</ul>
</div>

<div class="exam-tips">
<h2>💡 Quick Exam Tips</h2>
<ul>
{tips_html}
<li>Read each question carefully — underline key words and constraints.</li>
<li>Sketch diagrams even when not explicitly asked; they help organise your thinking.</li>
<li>Leave time at the end to review answers and catch arithmetic errors.</li>
</ul>
</div>

<div class="quick-links">
<a href="maths-{topic_id}.html" class="btn-primary">📖 Full Notes</a>
<a href="../subject.html?id=maths&level=alevel" class="btn-secondary">← All Topics</a>
</div>
</div>
</div>
</section>

<script src="../js/theme.js?v=5"></script>
</body>
</html>'''


if __name__ == "__main__":
    # Write enhanced maths files
    for tid, data in MATHS_TOPICS.items():
        filepath = os.path.join(BASE, f"maths-{tid}.html")
        with open(filepath, "w") as f:
            f.write(build_html(tid, data, is_summary=False))
        print(f"Wrote {filepath}")
        
        # Summary
        summary_path = os.path.join(BASE, f"maths-{tid}-summary.html")
        with open(summary_path, "w") as f:
            f.write(build_summary_html(tid, data))
        print(f"Wrote {summary_path}")
    
    # Write enhanced additional maths files
    for tid, data in ADDITIONAL_TOPICS.items():
        filepath = os.path.join(BASE, f"additional-maths-{tid}.html")
        with open(filepath, "w") as f:
            f.write(build_html(tid, data, is_summary=False))
        print(f"Wrote {filepath}")
        
        summary_path = os.path.join(BASE, f"additional-maths-{tid}-summary.html")
        with open(summary_path, "w") as f:
            f.write(build_summary_html(tid, data))
        print(f"Wrote {summary_path}")
    
    print("Done!")
