#!/usr/bin/env python3
import os, re

DIR = "/home/node/.openclaw/workspace/LearnAi/notes"

SUMMARIES = {
    "em2": {
        "title": "Coordinate Geometry",
        "body": """
<h3>Coordinate Geometry — All Levels</h3>
<ul>
<li><strong>GCSE:</strong> Plot points; midpoint and distance; gradient = (y₂−y₁)/(x₂−x₁); y = mx + c; parallel and perpendicular lines; sketch common graphs.</li>
<li><strong>IGCSE:</strong> Gradient, midpoint, distance; equation of a line; parallel/perpendicular; sketch linear and quadratic graphs.</li>
<li><strong>IAL:</strong> Point–gradient and general forms; circle equation (x−a)² + (y−b)² = r²; tangent perpendicular to radius; parametric equations; modulus graphs and loci.</li>
</ul>
<div class="formula-box">
y − y₁ = m(x − x₁) &nbsp;&nbsp; m₁m₂ = −1<br>
(x−a)² + (y−b)² = r²
</div>
"""
    },
    "em3": {
        "title": "Trigonometry",
        "body": """
<h3>Trigonometry — All Levels</h3>
<ul>
<li><strong>GCSE:</strong> SOH CAH TOA; sine and cosine rules; area = ½ab sin C; exact values for 30°, 45°, 60°; solve simple trig equations.</li>
<li><strong>IGCSE:</strong> SOH CAH TOA; sine and cosine rules; bearings; 3D trigonometry using right-angled triangles.</li>
<li><strong>IAL:</strong> Radian measure (arc s = rθ, sector A = ½r²θ); identities (tan = sin/cos, sin²+cos²=1); compound and double-angle formulae; solve trig equations in radians/degrees.</li>
</ul>
<div class="formula-box">
sin θ = O/H &nbsp;&nbsp; cos θ = A/H &nbsp;&nbsp; tan θ = O/A<br>
Area = ½ab sin C &nbsp;&nbsp; s = rθ &nbsp;&nbsp; sin(A±B) = sin A cos B ± cos A sin B
</div>
"""
    },
    "em4": {
        "title": "Calculus",
        "body": """
<h3>Calculus — All Levels</h3>
<ul>
<li><strong>GCSE:</strong> Differentiate xⁿ → nxⁿ⁻¹; integrate xⁿ → xⁿ⁺¹/(n+1) + c; find gradient and equation of tangent; stationary points; definite integral = area under curve.</li>
<li><strong>IGCSE:</strong> Differentiate axⁿ → anxⁿ⁻¹; integrate axⁿ → axⁿ⁺¹/(n+1) + c; find gradient, tangent, and stationary points; definite integrals for area.</li>
<li><strong>IAL:</strong> Chain, product, and quotient rules; classify stationary points with second derivative; integrate standard functions; area under curve and volume of revolution π∫y² dx; connected rates of change.</li>
</ul>
<div class="formula-box">
d/dx(xⁿ) = nxⁿ⁻¹ &nbsp;&nbsp; ∫xⁿ dx = xⁿ⁺¹/(n+1) + c<br>
Chain: dy/dx = dy/du · du/dx &nbsp;&nbsp; Volume = π∫y² dx
</div>
"""
    },
    "em5": {
        "title": "Vectors & Mechanics",
        "body": """
<h3>Vectors & Mechanics — IAL</h3>
<ul>
<li>Vectors in component form; magnitude |v| = √(a²+b²); direction from tan⁻¹(b/a).</li>
<li>Vector line equation: r = a + λb.</li>
<li>SUVAT equations for constant acceleration.</li>
<li>Newton’s laws; resolve forces parallel and perpendicular to motion.</li>
<li>Projectiles: horizontal constant velocity, vertical constant acceleration g.</li>
</ul>
<div class="formula-box">
v = u + at &nbsp;&nbsp; s = ut + ½at² &nbsp;&nbsp; v² = u² + 2as<br>
F = ma &nbsp;&nbsp; r = a + λb
</div>
"""
    },
    "em6": {
        "title": "Statistics & Probability",
        "body": """
<h3>Statistics & Probability — All Levels</h3>
<ul>
<li><strong>GCSE:</strong> Mean, median, mode; range and IQR; probability basics; tree diagrams; mutually exclusive and independent events; histograms and box plots.</li>
<li><strong>IGCSE:</strong> Mean from grouped data using midpoints; probability with AND/OR; tree diagrams and sample space diagrams; scatter graphs and line of best fit.</li>
<li><strong>IAL:</strong> Expectation and variance of discrete random variables; binomial distribution; normal distribution (standardise Z = (X−μ)/σ); hypothesis testing; correlation and regression.</li>
</ul>
<div class="formula-box">
Mean = Σx / n &nbsp;&nbsp; P(X=r) = ⁿCᵣ pʳ(1−p)ⁿ⁻ʳ<br>
Z = (X − μ)/σ &nbsp;&nbsp; E(X) = ΣxP(x)
</div>
"""
    },
    "em7": {
        "title": "Sequences & Series",
        "body": """
<h3>Sequences & Series — All Levels</h3>
<ul>
<li><strong>GCSE:</strong> Arithmetic nth term = a + (n−1)d; geometric nth term = arⁿ⁻¹ (Higher); find linear/quadratic rules from differences; recognise special sequences.</li>
<li><strong>IGCSE:</strong> Arithmetic and geometric nth terms; find linear rules using two terms; substitute and solve for n.</li>
<li><strong>IAL:</strong> Arithmetic and geometric series (sum formulae); infinite geometric sum S∞ = a/(1−r) for |r|<1; binomial expansion; recurrence relations and convergence.</li>
</ul>
<div class="formula-box">
nth term = a + (n−1)d &nbsp;&nbsp; nth term = arⁿ⁻¹<br>
Sₙ = n/2[2a + (n−1)d] &nbsp;&nbsp; S∞ = a/(1−r)  (|r|<1)
</div>
"""
    },
    "em8": {
        "title": "Numerical Methods",
        "body": """
<h3>Numerical Methods — IAL</h3>
<ul>
<li>Location of roots: sign change + continuity → root exists in interval.</li>
<li>Iteration xₙ₊₁ = g(xₙ); converges if |g'(x)| < 1 near root.</li>
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

updated = 0
for fname in sorted(os.listdir(DIR)):
    if not fname.startswith("edexcel-maths-em") or not fname.endswith("-summary.html"):
        continue
    # skip level-specific summaries (contain -gcse-, -ial-, -igcse-)
    if "-gcse-" in fname or "-ial-" in fname or "-igcse-" in fname:
        continue

    em_key = fname.replace("edexcel-maths-", "").replace("-summary.html", "")
    data = SUMMARIES.get(em_key)
    if not data:
        print(f"SKIP: {fname}")
        continue

    path = os.path.join(DIR, fname)
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    old_block = re.search(
        r'<div class="summary-box">\s*<h2>Last-Minute Revision</h2>.*?</div>\s*(?=<div class="quick-links">)',
        html,
        re.DOTALL
    )
    if not old_block:
        print(f"NO MATCH: {fname}")
        continue

    new_block = f"""<div class="summary-box">
<h2>Last-Minute Revision</h2>
{data['body'].strip()}
</div>"""

    html = html.replace(old_block.group(0), new_block)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    updated += 1
    print(f"OK: {fname}")

print(f"\nUpdated generic summaries: {updated}")
