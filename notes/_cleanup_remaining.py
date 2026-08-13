#!/usr/bin/env python3
"""
Clean up residual Coming Soon placeholders in ALL edexcel-maths note/summary files.
- Removes <h2>Summary Coming Soon</h2> + following <p> in summary files
- Removes stray .coming-soon CSS blocks (all files)
- Removes stray .coming-soon-icon and .coming-soon h2/p CSS rules (all files)
- Ensures clean, valid HTML with no orphaned placeholders
"""
import os, re

DIR = "/home/node/.openclaw/workspace/LearnAi/notes"

# Find all edexcel maths files
files = sorted([f for f in os.listdir(DIR) if f.startswith("edexcel-maths-em") and f.endswith(".html")])

def strip_coming_soon_css(html):
    # Remove .coming-soon { ... } block
    html = re.sub(r'\.coming-soon\s*\{[^}]*\}\s*\n?', '', html)
    # Remove .coming-soon-icon { ... }
    html = re.sub(r'\.coming-soon-icon\s*\{[^}]*\}\s*\n?', '', html)
    # Remove .coming-soon h2 { ... }
    html = re.sub(r'\.coming-soon\s+h2\s*\{[^}]*\}\s*\n?', '', html)
    # Remove .coming-soon p { ... }
    html = re.sub(r'\.coming-soon\s+p\s*\{[^}]*\}\s*\n?', '', html)
    return html

def strip_summary_coming_soon_body(html):
    # In summary files there may be a stray:
    # <h2>Summary Coming Soon</h2>
    # <p>A concise summary of ... is being prepared. Perfect for last-minute revision before your exam.</p>
    # We also remove any surrounding stray closing/opening divs if they appear orphaned.
    pattern = re.compile(
        r'<h2>Summary Coming Soon</h2>\s*<p>[^<]*</p>\s*',
        re.IGNORECASE
    )
    html = pattern.sub('', html)
    # Also catch variant casing just in case
    html = re.sub(r'<h2>[^<]*Coming Soon[^<]*</h2>\s*<p>[^<]*</p>\s*', '', html, flags=re.IGNORECASE)
    return html

updated = 0
for fname in files:
    path = os.path.join(DIR, fname)
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    original = html
    html = strip_coming_soon_css(html)
    html = strip_summary_coming_soon_body(html)

    if html != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        updated += 1
        print(f"CLEANED: {fname}")
    else:
        print(f"OK: {fname}")

print(f"\nTotal cleaned: {updated}")
