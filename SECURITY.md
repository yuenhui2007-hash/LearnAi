# Security Posture — LearnAI

## Threat Model

**Asset:** Static educational website (GitHub Pages)
**Attack surface:** Minimal — no backend, no database, no auth server, no payment processing
**Data classification:** Public educational content only

## Network Layer

| Control | Status | Notes |
|---|---|---|
| HTTPS enforced | ✅ | GitHub Pages auto-redirects HTTP → HTTPS |
| HSTS | ✅ | Provided by GitHub Pages CDN |
| DDoS protection | ✅ | Cloudflare/GH Pages CDN |
| WAF | ✅ | GitHub Pages edge protection |
| Container firewall | ❌ N/A | Managed Kubernetes — no root access |
| iptables/nftables | ❌ N/A | Not available in this environment |

## Application Layer

| Control | Status |
|---|---|
| Content Security Policy (CSP) | ✅ meta tag on all pages |
| X-Frame-Options (clickjacking) | ✅ via CSP frame-ancestors |
| Referrer-Policy | ✅ strict-origin-when-cross-origin |
| Permissions-Policy | ✅ limiting browser APIs |
| No secrets in source | ✅ audited |
| robots.txt | ✅ crawler guidance |
| No eval() / dynamic code | ✅ audited |

## What We Cannot Control

- Network-level firewall rules (managed by cloud provider)
- HTTP response headers (GitHub Pages limitation — meta tags used instead)
- CDN configuration (managed by GitHub)

## Audit Log

- 2026-08-06: Security audit completed. No exposed secrets. CSP hardened.
