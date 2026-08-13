# Auth Issue — Login "Network Error"

## Date
2026-08-12

## Document
Screenshot of login page showing: `Network error. Please try again.`
Email: yuenhui2007@gmail.com

## Root Cause
Firebase auth scripts (`firebase-auth.js`, `firebase-config.js`) were added to login.html and register.html with **fake placeholder API keys** (e.g., `123456789`, `abcdef123456`). These scripts overwrote the working `window.Auth` object with a broken Firebase implementation that threw `auth/network-request-failed` on every login attempt.

## Fix Applied
Removed Firebase scripts from login.html and register.html. Restored working REST API auth (`auth.js?v=5`) that uses Bearer tokens via the Render backend.

## Commits
- `47b195f` — Bearer token auth (removed cookies)
- `6e04ed2` — Removed broken Firebase auth

## Files Changed
- `login.html` — removed firebase scripts, restored auth.js
- `register.html` — removed firebase scripts, restored auth.js
- `js/auth.js` — Bearer token implementation
- `js/auth-guard.js` — Bearer token auth checks
- `backend/routes/auth.js` — returns token in response body
