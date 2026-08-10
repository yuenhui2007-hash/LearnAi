(function(){
'use strict';
const AUTH_KEY = '***';

async function sha256(str) {
  const buf = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash)).map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
}

function isHex64(s) {
  return typeof s === 'string' && s.length === 64 && /^[a-f0-9]+$/.test(s);
}

window.Auth = {
  register: async function(email, password, name, phone) {
    var users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
    if (users.find(function(u){ return u.email === email; })) return { success: false, error: 'Account already exists.' };
    var hashed = isHex64(password) ? password : await sha256(password);
    var user = { email: email, password: hashed, name: name || '', phone: phone || '', id: Date.now(), created: new Date().toISOString() };
    users.push(user); localStorage.setItem('learnai_users', JSON.stringify(users)); localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return { success: true, user: user };
  },
  login: async function(email, password) {
    var users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
    var hashed = await sha256(password);
    var user = users.find(function(u){ return u.email === email && u.password === hashed; });
    if (!user) return { success: false, error: 'Invalid email or password.' };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user)); return { success: true, user: user };
  },
  logout: function() { localStorage.removeItem(AUTH_KEY); localStorage.removeItem('auth_token'); window.location.href = 'index.html'; },
  getUser: function() { var d = localStorage.getItem(AUTH_KEY); return d ? JSON.parse(d) : null; },
  updateNav: function() {
    var user = this.getUser();
    var el = document.getElementById('navAuth');
    if (el) el.innerHTML = user ? '<a href="#" class="nav-link" onclick="Auth.logout();return false;">Sign Out</a>' : '<a href="login.html" class="nav-link">Sign In / Sign Up</a>';
  }
};
document.addEventListener('DOMContentLoaded', function() { Auth.updateNav(); });
})();
