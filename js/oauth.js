/**
 * OAuth Client for Google and Apple Sign-In
 * Uses backend authorization code flow (PKCE) for security
 */

const OAuth = {
  /**
   * Initiate Google OAuth login via backend
   */
  loginWithGoogle() {
    // Open popup for OAuth flow
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    const popup = window.open(
      'https://learnai-backend-n0df.onrender.com/api/oauth/google',
      'google-oauth',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no`
    );
    
    // Listen for message from popup
    window.addEventListener('message', function handleMessage(e) {
      if (e.origin !== window.location.origin) return;
      if (e.data.type === 'oauth-success') {
        window.removeEventListener('message', handleMessage);
        popup.close();
        // Auth cookie is already set by backend
        window.location.href = e.data.redirect || '/dashboard.html';
      }
      if (e.data.type === 'oauth-error') {
        window.removeEventListener('message', handleMessage);
        popup.close();
        alert('Login failed: ' + (e.data.error || 'Unknown error'));
      }
    });
  },

  /**
   * Initiate Apple OAuth login via backend
   */
  loginWithApple() {
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const popup = window.open(
      'https://learnai-backend-n0df.onrender.com/api/oauth/apple',
      'apple-oauth',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no`
    );

    window.addEventListener('message', function handleMessage(e) {
      if (e.origin !== window.location.origin) return;
      if (e.data.type === 'oauth-success') {
        window.removeEventListener('message', handleMessage);
        if (popup && !popup.closed) popup.close();
        window.location.href = e.data.redirect || '/dashboard.html';
      }
      if (e.data.type === 'oauth-error') {
        window.removeEventListener('message', handleMessage);
        if (popup && !popup.closed) popup.close();
        console.error('OAuth error:', e.data.error || 'Unknown error');
      }
    });
  }
};

// Expose functions for onclick handlers
function redirectToGoogleLogin() {
  OAuth.loginWithGoogle();
}

function redirectToAppleLogin() {
  OAuth.loginWithApple();
}
