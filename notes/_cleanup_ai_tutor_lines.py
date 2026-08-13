#!/usr/bin/env python3
"""
Remove stray 'In the meantime, try our AI Tutor...' lines that were left behind
from the original Coming Soon block in some files.
"""
import os, re

DIR = "/home/node/.openclaw/workspace/LearnAi/notes"
files = sorted([f for f in os.listdir(DIR) if f.startswith("edexcel-maths-em") and f.endswith(".html")])

pattern = re.compile(
    r'<p style="margin-top:16px;font-size:0\.85rem;color:#94a3b8;">In the meantime, try our <a href="\.\./tutor\.html" style="color:#6366f1;font-weight:600;">AI Tutor</a> for instant help with this topic\.</p>\s*',
    re.IGNORECASE
)

updated = 0
for fname in files:
    path = os.path.join(DIR, fname)
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    new_html, count = pattern.subn('', html)
    if count:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_html)
        updated += 1
        print(f"CLEANED: {fname}")
    else:
        print(f"OK: {fname}")

print(f"\nTotal cleaned: {updated}")
