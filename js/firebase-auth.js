(function(){
'use strict';

// Firebase Auth wrapper for GitHub Pages (no backend needed)
window.Auth = {
  register: async function(email, password, name) {
    try {
      const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if (name && cred.user) {
        await cred.user.updateProfile({ displayName: name });
      }
      const user = cred.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        name: user.displayName || name || '',
        photoURL: user.photoURL || ''
      };
      localStorage.setItem('learnai_auth', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (err) {
      return { success: false, error: _mapErr(err) };
    }
  },

  login: async function(email, password) {
    try {
      const cred = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = cred.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        name: user.displayName || '',
        photoURL: user.photoURL || ''
      };
      localStorage.setItem('learnai_auth', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (err) {
      return { success: false, error: _mapErr(err) };
    }
  },

  logout: async function() {
    try {
      await firebase.auth().signOut();
    } catch (err) {}
    localStorage.removeItem('learnai_auth');
    window.location.href = 'index.html';
  },

  getUser: async function() {
    const raw = localStorage.getItem('learnai_auth');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  },

  updateNav: async function() {
    const user = await this.getUser();
    var el = document.getElementById('navAuth');
    if (el) {
      el.innerHTML = user
        ? '<a href="#" class="nav-link" onclick="Auth.logout();return false;">' + (user.name || 'Account') + ' — Sign Out</a>'
        : '<a href="login.html" class="nav-link">Sign In / Sign Up</a>';
    }
  },

  loginWithGoogle: async function() {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      var cred = await firebase.auth().signInWithPopup(provider);
      var user = cred.user;
      var userData = {
        uid: user.uid,
        email: user.email,
        name: user.displayName || '',
        photoURL: user.photoURL || ''
      };
      localStorage.setItem('learnai_auth', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (err) {
      return { success: false, error: _mapErr(err) };
    }
  }
};

// Keep localStorage in sync with Firebase auth state
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userData = {
      uid: user.uid,
      email: user.email,
      name: user.displayName || '',
      photoURL: user.photoURL || ''
    };
    localStorage.setItem('learnai_auth', JSON.stringify(userData));
  } else {
    localStorage.removeItem('learnai_auth');
  }
  if (window.Auth && window.Auth.updateNav) {
    window.Auth.updateNav();
  }
});

function _mapErr(err) {
  if (!err || !err.code) return 'An error occurred. Please try again.';
  var map = {
    'auth/invalid-email': 'Invalid email address.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/popup-closed-by-user': 'Popup closed before sign-in completed.',
    'auth/cancelled-popup-request': 'Popup request cancelled.',
    'auth/network-request-failed': 'Network error. Check your connection.'
  };
  return map[err.code] || (err.message || 'An error occurred. Please try again.');
}

// Auto-update nav when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (window.Auth && window.Auth.updateNav) {
    window.Auth.updateNav();
  }
});
})();
