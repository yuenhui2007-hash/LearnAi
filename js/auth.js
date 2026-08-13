(function(){
'use strict';

const API_BASE = window.location.origin.includes('localhost')
  ? 'http://localhost:10000/api'
  : 'https://learnai-backend-n0df.onrender.com/api';

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token');
  return token ? { 'Authorization': 'Bearer ' + token } : {};
}

function handleAuthResponse(data) {
  if (data.token) localStorage.setItem('auth_token', data.token);
  if (data.user) localStorage.setItem('learnai_auth', JSON.stringify(data.user));
  return data;
}

window.Auth = {
  register: async function(email, password, name) {
    try {
      const res = await fetch(API_BASE + '/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password, name })
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Registration failed' };
      handleAuthResponse(data);
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  },

  login: async function(email, password) {
    try {
      const res = await fetch(API_BASE + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Invalid email or password.' };
      handleAuthResponse(data);
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  },

  // Google OAuth — receives JWT credential from Google Identity Services
  loginWithGoogle: async function(credential) {
    try {
      const res = await fetch(API_BASE + '/oauth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ credential })
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Google sign-in failed.' };
      handleAuthResponse(data);
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  },

  // Apple OAuth — redirects to Apple
  loginWithApple: function() {
    const redirect = new URLSearchParams(window.location.search).get('redirect') || 'dashboard.html';
    window.location.href = API_BASE + '/oauth/apple?redirect=' + encodeURIComponent(redirect);
  },

  logout: async function() {
    try {
      await fetch(API_BASE + '/auth/logout', {
        method: 'POST',
        headers: getAuthHeaders(),
        credentials: 'include'
      });
    } catch (err) {}
    localStorage.removeItem('learnai_auth');
    localStorage.removeItem('auth_token');
    window.location.href = 'index.html';
  },

  getUser: async function() {
    try {
      const res = await fetch(API_BASE + '/auth/me', {
        method: 'GET',
        headers: getAuthHeaders(),
        credentials: 'include'
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.user || null;
    } catch (err) {
      return null;
    }
  },

  updateNav: async function() {
    const user = await this.getUser();
    var el = document.getElementById('navAuth');
    if (el) {
      el.innerHTML = user
        ? '<a href="#" class="nav-link" onclick="Auth.logout();return false;">' + (user.name || 'Account') + ' — Sign Out</a>'
        : '<a href="login.html" class="nav-link">Sign In / Sign Up</a>';
    }
  }
};

document.addEventListener('DOMContentLoaded', function() { Auth.updateNav(); });
})();
