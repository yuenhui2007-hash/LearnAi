/**
 * OAuth Configuration for Google and Apple Sign-In
 * Replace CLIENT IDs with your actual credentials from:
 * - Google: https://console.cloud.google.com/apis/credentials
 * - Apple: https://developer.apple.com/account/resources/identifiers/list/serviceId
 */
const OAuthConfig = {
  google: {
    clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    redirectUri: window.location.origin + '/oauth-callback.html',
    scope: 'openid email profile',
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth'
  },
  apple: {
    clientId: 'YOUR_APPLE_SERVICES_ID',
    redirectUri: window.location.origin + '/oauth-callback.html',
    scope: 'name email',
    authUrl: 'https://appleid.apple.com/auth/authorize'
  }
};

function buildGoogleAuthUrl() {
  const params = new URLSearchParams({
    client_id: OAuthConfig.google.clientId,
    redirect_uri: OAuthConfig.google.redirectUri,
    response_type: 'token id_token',
    scope: OAuthConfig.google.scope,
    include_granted_scopes: 'true',
    state: generateState()
  });
  return OAuthConfig.google.authUrl + '?' + params.toString();
}

function buildAppleAuthUrl() {
  const params = new URLSearchParams({
    client_id: OAuthConfig.apple.clientId,
    redirect_uri: OAuthConfig.apple.redirectUri,
    response_type: 'code id_token',
    scope: OAuthConfig.apple.scope,
    state: generateState(),
    response_mode: 'fragment'
  });
  return OAuthConfig.apple.authUrl + '?' + params.toString();
}

function generateState() {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}

function redirectToGoogleLogin() {
  if (OAuthConfig.google.clientId.includes('YOUR_GOOGLE_CLIENT_ID')) {
    alert('Google Sign-In is not configured yet.\n\nPlease set up your Google OAuth 2.0 Client ID in js/oauth.js\n\nGet one at: https://console.cloud.google.com/apis/credentials');
    return;
  }
  window.location.href = buildGoogleAuthUrl();
}

function redirectToAppleLogin() {
  if (OAuthConfig.apple.clientId.includes('YOUR_APPLE_SERVICES_ID')) {
    alert('Apple Sign-In is not configured yet.\n\nPlease set up your Apple Services ID in js/oauth.js\n\nGet one at: https://developer.apple.com/account/resources/identifiers/list/serviceId');
    return;
  }
  window.location.href = buildAppleAuthUrl();
}

function handleOAuthCallback() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const idToken = params.get('id_token');
  const error = params.get('error');
  if (error) return { success: false, error: 'Authentication failed: ' + error };
  if (idToken) {
    const payload = JSON.parse(atob(idToken.split('.')[1]));
    const user = {
      email: payload.email,
      name: payload.name || payload.given_name || payload.email.split('@')[0],
      provider: payload.iss && payload.iss.includes('apple') ? 'apple' : 'google',
      token: idToken
    };
    localStorage.setItem('learnai_user', JSON.stringify(user));
    localStorage.setItem('learnai_token', idToken);
    return { success: true, user };
  }
  return { success: false, error: 'No authentication token received' };
}
